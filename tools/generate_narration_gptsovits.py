#!/usr/bin/env python3
"""Offline multi-voice bilingual (EN v1/v2/v3 + ES #7) narration generator powered by GPT-SoVITS v2ProPlus.

Reads `dist/tour_cues_manifest.json` (exported by `scripts/export_tour_cues.ts`),
synthesizes natural human narration across:
  - English Voice 1 (`v1`, David Clarke — LibriVox CC0, Scientific preset)
  - English Voice 2 (`v2`, Peter Yearsley — LibriVox CC0, Blueprint / Engineers preset)
  - English Voice 3 (`v3`, Martin Geeson — LibriVox CC0, Simple & Story / Learners preset)
  - Spanish fallback (`es`, Common Voice CC0; primary Spanish synthesis uses `generate_narration_f5_es.py`)
for both Guided Tours (`audio/en/{v1,v2,v3}/`, `audio/es/`) and all 4 Explanation Modes
across all 208 Explorer nodes (`audio/lenses/en/{v1,v2,v3}/`, `audio/lenses/es/`).

Pre-extracts English phoneme & BERT features ONCE and swaps only the reference voice cache
across `v1`, `v2`, and `v3` for maximum GPU throughput on RTX GPUs.
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import time
from typing import Any, Dict, List, Tuple

import librosa
import numpy as np
import soundfile as sf
import torch
import torchaudio

# Compatibility shim for torchaudio >= 2.11 where torchcodec may not be installed
torchaudio.load = lambda p, *a, **k: (
    torch.from_numpy(sf.read(str(p), dtype="float32", always_2d=True)[0].T),
    sf.info(str(p)).samplerate,
)

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANIFEST = REPO_ROOT / "dist" / "tour_cues_manifest.json"
VOICES_DIR = REPO_ROOT / "tools" / "voices"
SPANISH_G2P_SRC = REPO_ROOT / "tools" / "spanish_g2p.py"

EN_VOICE_CONFIGS: Dict[str, Dict[str, Any]] = {
    "v1": {
        "label": "Voice 1 — David Clarke (Scientific Preset)",
        "ref_wav": VOICES_DIR / "en_v1_david_clarke.wav",
        "prompt_text": "Man or a woman, I asked. Oh, man, of course! No woman would ever send a reply-paid telegram.",
        "prompt_lang": "en",
        "text_lang": "en",
        "default_t2s": "GPT_SoVITS/pretrained_models/s1v3.ckpt",
        "top_k": 15,
        "top_p": 0.95,
        "temperature": 0.82,
    },
    "v2": {
        "label": "Voice 2 — Peter Yearsley (Blueprint / Engineers Preset)",
        "ref_wav": VOICES_DIR / "en_v2_peter_yearsley.wav",
        "prompt_text": "Reginald, it's nothing of the kind. Only, I'm sure Mrs. McKillop would be pleased if I brought you.",
        "prompt_lang": "en",
        "text_lang": "en",
        "default_t2s": "GPT_SoVITS/pretrained_models/s1v3.ckpt",
        "top_k": 15,
        "top_p": 0.95,
        "temperature": 0.82,
    },
    "v3": {
        "label": "Voice 3 — Martin Geeson (Simple & Story / Learners Preset)",
        "ref_wav": VOICES_DIR / "en_v3_martin_geeson.wav",
        "prompt_text": "Consequently philosophy and science have not deigned to make it the subject of special inquiry.",
        "prompt_lang": "en",
        "text_lang": "en",
        "default_t2s": "GPT_SoVITS/pretrained_models/s1v3.ckpt",
        "top_k": 15,
        "top_p": 0.95,
        "temperature": 0.82,
    },
}

ES_VOICE_CONFIG: Dict[str, Any] = {
    "label": "Spanish Studio Baritone (Common Voice CC0)",
    "ref_wav": VOICES_DIR / "es_latam_baritone" / "sample_01_simple.wav",
    "prompt_text": "Aunque las parejas permanecen juntas durante años, realizan los rituales de cortejo cada primavera.",
    "prompt_lang": "es",
    "text_lang": "es",
    "default_t2s": "GPT_SoVITS/pretrained_models/s1v3_es-e22.ckpt",
    "top_k": 12,
    "top_p": 0.95,
    "temperature": 0.80,
}


def ensure_gsv_spanish_support(gsv_root: Path) -> None:
    """Idempotently installs `spanish.py` and wires `'es'` into GPT-SoVITS cleaner & preprocessor."""
    target_es = gsv_root / "GPT_SoVITS" / "text" / "spanish.py"
    shutil.copyfile(SPANISH_G2P_SRC, target_es)

    cleaner_path = gsv_root / "GPT_SoVITS" / "text" / "cleaner.py"
    cleaner_txt = cleaner_path.read_text(encoding="utf-8")
    orig_cleaner = cleaner_txt
    cleaner_txt = cleaner_txt.replace(
        '{"zh": "chinese", "ja": "japanese", "en": "english"}',
        '{"zh": "chinese", "ja": "japanese", "en": "english", "es": "spanish"}',
    )
    cleaner_txt = cleaner_txt.replace(
        '{"zh": "chinese2", "ja": "japanese", "en": "english", "ko": "korean", "yue": "cantonese"}',
        '{"zh": "chinese2", "ja": "japanese", "en": "english", "es": "spanish", "ko": "korean", "yue": "cantonese"}',
    )
    cleaner_txt = cleaner_txt.replace('elif language == "en":', 'elif language in ("en", "es"):')
    if cleaner_txt != orig_cleaner:
        cleaner_path.write_text(cleaner_txt, encoding="utf-8")

    tp_path = gsv_root / "GPT_SoVITS" / "TTS_infer_pack" / "TextPreprocessor.py"
    tp_txt = tp_path.read_text(encoding="utf-8")
    orig_tp = tp_txt
    tp_txt = tp_txt.replace('lang != "en"', 'lang not in ("en", "es")')
    tp_txt = re.sub(
        r'elif language == "en":\s*\n(\s*)langlist\.append\("en"\)',
        r'elif language in ("en", "es"):\n\1langlist.append(language)',
        tp_txt,
    )
    if tp_txt != orig_tp:
        tp_path.write_text(tp_txt, encoding="utf-8")


def preprocess_en_biology_text(text: str) -> str:
    """Normalizes English biology acronyms & PDB IDs so `english.py` pronounces them cleanly."""
    s = text.strip()
    s = re.sub(r"\bE\.\s*coli\b", "Escherichia coli", s)
    s = re.sub(r"\bS\.\s*cerevisiae\b", "Saccharomyces cerevisiae", s)
    s = re.sub(r"\be\.g\.,?", "for example,", s, flags=re.IGNORECASE)
    s = re.sub(r"\bi\.e\.,?", "that is,", s, flags=re.IGNORECASE)
    s = re.sub(r"\bvs\.", "versus", s, flags=re.IGNORECASE)
    s = re.sub(r"\bATPase(s?)\b", r"A T P ase\1", s)
    s = re.sub(r"\bGTPase(s?)\b", r"G T P ase\1", s)
    s = re.sub(r"\bRNase(s?)\b", r"R N ase\1", s)
    s = re.sub(r"\bDNase(s?)\b", r"D N ase\1", s)
    s = re.sub(r"\bNADPH\b", "N A D P H", s)
    s = re.sub(r"\bNADH\b", "N A D H", s)
    s = re.sub(r"\bFADH2\b", "F A D H 2", s)
    s = re.sub(r"\bRNAP\b", "R N A P", s)
    s = re.sub(r"\bRdRp\b", "R d R p", s)
    s = re.sub(r"\bRuBisCO\b", "RuBisCO", s)
    s = re.sub(r"\bmRNA\b", "messenger R N A", s)
    s = re.sub(r"\brRNA\b", "ribosomal R N A", s)
    s = re.sub(r"\btRNA\b", "transfer R N A", s)
    s = re.sub(r"\bcDNA\b", "complementary D N A", s)
    s = re.sub(r"\bdsDNA\b", "double-stranded D N A", s)
    s = re.sub(r"\bssRNA\b", "single-stranded R N A", s)
    s = re.sub(r"\bgp(\d+)\b", r"g p \1", s)
    s = re.sub(r"\bCD(\d+)\b", r"C D \1", s)
    s = re.sub(r"\bCCR(\d+)\b", r"C C R \1", s)
    s = re.sub(r"\bACE2\b", "A C E 2", s)
    s = re.sub(r"\b(\d+)S\b", r"\1 S", s)
    s = re.sub(r"\b3D\b", "3 D", s)

    def _spell_pdb(match: re.Match[str]) -> str:
        code = " ".join(list(match.group(1)))
        return f"P D B {code}"

    s = re.sub(r"\bPDB\s+([A-Za-z0-9]{4})\b", _spell_pdb, s)
    return s


def split_cue_sentences(text: str, lang: str) -> List[str]:
    """Splits a cue ONLY at full sentence boundaries (never commas) and guarantees terminal `.!?`."""
    s = preprocess_en_biology_text(text) if lang == "en" else text.strip()
    s = re.sub(r";\s+", ". ", s)
    raw_parts = [p.strip() for p in re.split(r"(?<=[.!?])\s+", s) if p.strip()]
    sentences: List[str] = []
    for part in raw_parts:
        part = re.sub(r"[,:—–\-]+$", "", part).strip()
        if not part:
            continue
        if part[-1] not in ".!?":
            part += "."
        sentences.append(part)
    if not sentences:
        sentences = [s.rstrip(",:; ") + "."]
    return sentences


def clean_and_fade_fragment(frag: np.ndarray, sr: int) -> np.ndarray:
    """Trims dead edge silence and applies gentle cosine fades to eliminate boundary clicks."""
    if frag.size == 0:
        return np.zeros(int(sr * 0.1), dtype=np.float32)
    wav = frag.astype(np.float32, copy=True)
    if np.max(np.abs(wav)) > 1e-4:
        wav, _ = librosa.effects.trim(wav, top_db=44, frame_length=1024, hop_length=256)
    if wav.size == 0:
        return np.zeros(int(sr * 0.1), dtype=np.float32)

    fade_in = min(int(sr * 0.012), wav.size // 4)
    fade_out = min(int(sr * 0.022), wav.size // 4)
    if fade_in > 1:
        wav[:fade_in] *= 0.5 * (1.0 - np.cos(np.linspace(0.0, np.pi, fade_in, dtype=np.float32)))
    if fade_out > 1:
        wav[-fade_out:] *= 0.5 * (1.0 + np.cos(np.linspace(0.0, np.pi, fade_out, dtype=np.float32)))
    return wav


def master_cue_waveform(fragments: List[np.ndarray], sr: int) -> np.ndarray:
    """Joins sentence fragments with natural breath pauses and normalizes to broadcast podcast level."""
    cleaned = [clean_and_fade_fragment(f, sr) for f in fragments if f is not None and f.size > 0]
    if not cleaned:
        return np.zeros(int(sr * 0.25), dtype=np.float32)

    pause = np.zeros(int(sr * 0.18), dtype=np.float32)
    pieces: List[np.ndarray] = [np.zeros(int(sr * 0.025), dtype=np.float32)]
    for idx, piece in enumerate(cleaned):
        if idx > 0:
            pieces.append(pause)
        pieces.append(piece)
    pieces.append(np.zeros(int(sr * 0.085), dtype=np.float32))
    wav = np.concatenate(pieces)

    # RMS loudness normalization (-18 dBFS target) with true-peak ceiling (-1.5 dBFS = 0.841)
    active = wav[np.abs(wav) > 0.008]
    if active.size > 0:
        rms = float(np.sqrt(np.mean(np.square(active))))
        if rms > 1e-5:
            gain = min(0.125 / rms, 6.0)
            wav = wav * gain
    peak = float(np.max(np.abs(wav)))
    if peak > 0.841:
        wav = wav * (0.841 / peak)
    return wav.astype(np.float32)


def encode_opus_worker(task: Tuple[np.ndarray, int, Path, str, str]) -> Tuple[str, float]:
    wav, sr, out_path, ffmpeg_bin, bitrate = task
    out_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = out_path.with_suffix(".tmp.opus")
    cmd = [
        ffmpeg_bin,
        "-y",
        "-nostdin",
        "-v",
        "error",
        "-f",
        "f32le",
        "-ar",
        str(sr),
        "-ac",
        "1",
        "-i",
        "pipe:0",
        "-c:a",
        "libopus",
        "-b:a",
        bitrate,
        "-vbr",
        "on",
        "-compression_level",
        "10",
        "-application",
        "audio",
        "-ar",
        "24000",
        "-ac",
        "1",
        str(tmp_path),
    ]
    proc = subprocess.run(cmd, input=wav.tobytes(), capture_output=True)
    if proc.returncode != 0:
        raise RuntimeError(f"ffmpeg failed for {out_path}: {proc.stderr.decode('utf-8', errors='replace')}")
    tmp_path.replace(out_path)
    return str(out_path), len(wav) / float(sr)


def cleanup_legacy_flat_en_dirs() -> None:
    """Removes legacy single-voice `audio/en/<tourRoot>` directories superseded by `audio/en/{v1,v2,v3}/`."""
    en_root = REPO_ROOT / "audio" / "en"
    if not en_root.exists():
        return
    valid_subdirs = set(EN_VOICE_CONFIGS.keys())
    for child in list(en_root.iterdir()):
        if child.is_dir() and child.name not in valid_subdirs:
            print(f"  [cleanup] Removing superseded flat directory: {child.relative_to(REPO_ROOT)}")
            shutil.rmtree(child)


def synthesize_voice_group(
    entries: List[Dict[str, Any]],
    lang: str,
    voice_specs: List[Tuple[str, Dict[str, Any]]],
    gsv_root: Path,
    t2s_weights: str,
    vits_weights: str,
    batch_size: int,
    ffmpeg_bin: str,
    bitrate: str,
    force: bool,
) -> Tuple[int, float]:
    from TTS_infer_pack.TTS import TTS, TTS_Config, create_acceleration

    # Determine which (entry_idx, voice_key) pairs actually need synthesis
    voice_pending_entry_indices: Dict[str, List[int]] = {}
    needed_entry_set = set()
    for v_key, _ in voice_specs:
        p_idxs = [
            idx
            for idx, e in enumerate(entries)
            if v_key in e.get("targets", {})
            and (force or not (REPO_ROOT / e["targets"][v_key]).exists())
        ]
        if p_idxs:
            voice_pending_entry_indices[v_key] = p_idxs
            needed_entry_set.update(p_idxs)

    if not voice_pending_entry_indices:
        total_targets = sum(1 for e in entries for v_key, _ in voice_specs if v_key in e.get("targets", {}))
        print(f"[{lang.upper()}] All {total_targets} .opus files already exist (use --force to regenerate).")
        return 0, 0.0

    needed_entry_list = sorted(needed_entry_set)
    print(
        f"\n==================== [{lang.upper()}] Loading GPT-SoVITS ONCE for {len(voice_pending_entry_indices)} voice(s), "
        f"{len(needed_entry_list)} unique text items ===================="
    )
    print(f"  T2S weights : {t2s_weights}")
    print(f"  VITS weights: {vits_weights}")

    cfg = TTS_Config(str(gsv_root / "GPT_SoVITS" / "configs" / "tts_infer.yaml"))
    cfg.device = "cuda" if torch.cuda.is_available() else "cpu"
    cfg.is_half = cfg.device == "cuda"
    cfg.version = "v2ProPlus"
    if "es" not in cfg.languages:
        cfg.languages.append("es")
    cfg.t2s_weights_path = t2s_weights
    cfg.vits_weights_path = vits_weights

    tts = TTS(cfg)
    sr = tts.configs.sampling_rate

    # 1. Pre-extract phoneme + BERT features ONCE across all unique sentences in `needed_entry_list`
    t_feat = time.perf_counter()
    entry_sentences_meta: Dict[int, List[Dict[str, Any]]] = {}
    total_sents = 0
    for e_idx in needed_entry_list:
        entry = entries[e_idx]
        sents = split_cue_sentences(entry["speechText"], lang)
        s_list: List[Dict[str, Any]] = []
        for sent in sents:
            phones, bert_features, norm_text = tts.text_preprocessor.segment_and_extract_feature_for_text(
                sent, lang, cfg.version
            )
            if phones is None or len(phones) == 0:
                continue
            s_list.append(
                {
                    "phones": phones,
                    "bert_features": bert_features,
                    "norm_text": norm_text,
                    "raw_sent": sent,
                }
            )
            total_sents += 1
        entry_sentences_meta[e_idx] = s_list

    print(
        f"  [{lang.upper()}] Pre-extracted features for {total_sents} sentences across "
        f"{len(needed_entry_list)} entries in {time.perf_counter() - t_feat:.1f}s"
    )

    use_cuda_graph = cfg.device == "cuda"
    tts.t2s_accel = create_acceleration(
        cfg.t2s_weights_path,
        device=torch.device(cfg.device),
        dtype=tts.precision,
        max_batch_size=batch_size,
        use_cuda_graph=use_cuda_graph,
        use_flash_attention=False,
    )
    use_accel = tts.t2s_accel is not None and tts.t2s_accel.prepare(use_cuda_graph, False)

    grand_files = 0
    grand_audio_sec = 0.0

    # Shared background ffmpeg encoder pool so Opus encoding overlaps with the next voice's GPU pass!
    with ThreadPoolExecutor(max_workers=12) as encode_pool:
        encode_futures = []

        for v_key, vcfg in voice_specs:
            if v_key not in voice_pending_entry_indices:
                continue
            p_entry_indices = voice_pending_entry_indices[v_key]
            print(
                f"\n  >>> [{lang.upper()}:{v_key}] {vcfg['label']} — Synthesizing {len(p_entry_indices)} clips "
                f"(ref: {vcfg['ref_wav'].name})"
            )

            tts.set_ref_audio(str(vcfg["ref_wav"]))
            p_phones, p_bert, p_norm = tts.text_preprocessor.segment_and_extract_feature_for_text(
                vcfg["prompt_text"], vcfg["prompt_lang"], cfg.version
            )
            tts.prompt_cache["prompt_text"] = vcfg["prompt_text"]
            tts.prompt_cache["prompt_lang"] = vcfg["prompt_lang"]
            tts.prompt_cache["phones"] = p_phones
            tts.prompt_cache["bert_features"] = p_bert
            tts.prompt_cache["norm_text"] = p_norm

            refer_audio_spec = []
            sv_emb = [] if tts.is_v2pro else None
            with torch.no_grad():
                for spec, audio_tensor in tts.prompt_cache["refer_spec"]:
                    spec = spec.to(dtype=tts.precision, device=tts.configs.device)
                    refer_audio_spec.append(spec)
                    if tts.is_v2pro:
                        sv_emb.append(tts.sv_model.compute_embedding3(audio_tensor))

            flat_items: List[Dict[str, Any]] = []
            flat_owners: List[Tuple[int, int]] = []
            cue_fragments: List[List[np.ndarray]] = []

            for local_c_idx, e_idx in enumerate(p_entry_indices):
                s_list = entry_sentences_meta[e_idx]
                cue_fragments.append([np.zeros(0, dtype=np.float32) for _ in range(len(s_list))])
                for sub_idx, item in enumerate(s_list):
                    flat_items.append(item)
                    flat_owners.append((local_c_idx, sub_idx))

            order = sorted(range(len(flat_items)), key=lambda i: len(flat_items[i]["phones"]))

            seed_val = 20261111 + sum(ord(c) for c in v_key)
            torch.manual_seed(seed_val)
            if torch.cuda.is_available():
                torch.cuda.manual_seed_all(seed_val)

            t0 = time.perf_counter()
            retries = 0

            def _single_fallback_synth(item_dict: Dict[str, Any], temp: float) -> np.ndarray:
                single_batches, _ = tts.to_batch(
                    [
                        {
                            "phones": item_dict["phones"],
                            "bert_features": item_dict["bert_features"],
                            "norm_text": item_dict["norm_text"],
                        }
                    ],
                    prompt_data=tts.prompt_cache,
                    batch_size=1,
                    split_bucket=False,
                    device=tts.configs.device,
                    precision=tts.precision,
                )
                b0 = single_batches[0]
                prompt_t = tts.prompt_cache["prompt_semantic"].expand(1, -1).to(tts.configs.device)
                ap_t = torch.stack(b0["all_phones"]) if isinstance(b0["all_phones"], list) else b0["all_phones"]
                ab_t = (
                    torch.stack(b0["all_bert_features"])
                    if isinstance(b0["all_bert_features"], list)
                    else b0["all_bert_features"]
                )
                pred_list, idx_val = tts.t2s_model.model.infer_panel(
                    ap_t,
                    b0["all_phones_len"],
                    prompt_t,
                    ab_t,
                    top_k=max(8, vcfg["top_k"] - 3),
                    top_p=0.90,
                    temperature=temp,
                    early_stop_num=tts.configs.hz * tts.configs.max_sec,
                    max_len=b0["max_len"],
                    repetition_penalty=1.35,
                )
                idx0 = (
                    int(idx_val[0])
                    if isinstance(idx_val, (list, tuple, torch.Tensor)) and getattr(idx_val, "ndim", 1) > 0
                    else int(idx_val)
                )
                phones0 = b0["phones"][0].unsqueeze(0).to(tts.configs.device)
                sem0 = pred_list[0][-idx0:].unsqueeze(0).unsqueeze(0)
                wav0 = tts.vits_model.decode(
                    sem0, phones0, refer_audio_spec, speed=1.0, sv_emb=sv_emb
                ).detach()[0, 0, :]
                return wav0.float().cpu().numpy()

            with torch.no_grad():
                for start in range(0, len(order), batch_size):
                    chunk_indices = order[start : start + batch_size]
                    chunk_dicts = [
                        {
                            "phones": flat_items[idx]["phones"],
                            "bert_features": flat_items[idx]["bert_features"],
                            "norm_text": flat_items[idx]["norm_text"],
                        }
                        for idx in chunk_indices
                    ]
                    batches, _ = tts.to_batch(
                        chunk_dicts,
                        prompt_data=tts.prompt_cache,
                        batch_size=len(chunk_dicts),
                        split_bucket=False,
                        device=tts.configs.device,
                        precision=tts.precision,
                    )
                    b = batches[0]
                    all_phoneme_ids = b["all_phones"]
                    all_phoneme_lens = b["all_phones_len"]
                    all_bert_features = b["all_bert_features"]
                    batch_phones = b["phones"]
                    prompt = (
                        tts.prompt_cache["prompt_semantic"].expand(len(all_phoneme_ids), -1).to(tts.configs.device)
                    )

                    if use_accel:
                        pred_semantic_list, idx_list = tts.t2s_accel.infer_batch(
                            all_phoneme_ids,
                            all_phoneme_lens,
                            prompt,
                            all_bert_features,
                            parallel_infer=True,
                            use_cuda_graph=use_cuda_graph,
                            use_flash_attention=False,
                            top_k=vcfg["top_k"],
                            top_p=vcfg["top_p"],
                            temperature=vcfg["temperature"],
                            early_stop_num=tts.configs.hz * tts.configs.max_sec,
                            repetition_penalty=1.35,
                        )
                    else:
                        pred_semantic_list, idx_list = tts.t2s_model.model.infer_panel(
                            all_phoneme_ids,
                            all_phoneme_lens,
                            prompt,
                            all_bert_features,
                            top_k=vcfg["top_k"],
                            top_p=vcfg["top_p"],
                            temperature=vcfg["temperature"],
                            early_stop_num=tts.configs.hz * tts.configs.max_sec,
                            max_len=b["max_len"],
                            repetition_penalty=1.35,
                        )

                    for local_i, orig_flat_idx in enumerate(chunk_indices):
                        tok_len = int(idx_list[local_i])
                        ph_count = len(flat_items[orig_flat_idx]["phones"])
                        phones_t = batch_phones[local_i].unsqueeze(0).to(tts.configs.device)
                        if tok_len > 0:
                            sem_t = pred_semantic_list[local_i][-tok_len:].unsqueeze(0).unsqueeze(0)
                            wav_np = (
                                tts.vits_model.decode(sem_t, phones_t, refer_audio_spec, speed=1.0, sv_emb=sv_emb)
                                .detach()[0, 0, :]
                                .float()
                                .cpu()
                                .numpy()
                            )
                        else:
                            wav_np = np.zeros(0, dtype=np.float32)

                        dur_s = len(wav_np) / float(sr)
                        min_ok = max(0.55, ph_count / 28.0)
                        max_ok = max(18.0, ph_count / 2.8)
                        if dur_s < min_ok or dur_s > max_ok:
                            for attempt_temp in (0.72, 0.65, 0.85):
                                retries += 1
                                cand = _single_fallback_synth(flat_items[orig_flat_idx], attempt_temp)
                                cdur = len(cand) / float(sr)
                                if min_ok <= cdur <= max_ok:
                                    wav_np = cand
                                    break
                                if abs(cdur - ph_count / 12.0) < abs(dur_s - ph_count / 12.0):
                                    wav_np = cand
                                    dur_s = cdur

                        local_c_idx, sub_idx = flat_owners[orig_flat_idx]
                        cue_fragments[local_c_idx][sub_idx] = wav_np

                    done = min(start + batch_size, len(order))
                    if done % (batch_size * 10) == 0 or done == len(order):
                        elapsed = time.perf_counter() - t0
                        print(
                            f"    [{lang.upper()}:{v_key}] {done}/{len(order)} sentences in {elapsed:.1f}s "
                            f"({done / max(elapsed, 1e-3):.1f} sent/s, retries={retries})",
                            flush=True,
                        )

            print(
                f"    [{lang.upper()}:{v_key}] Submitting {len(p_entry_indices)} clips to background Opus encoder...",
                flush=True,
            )
            for local_c_idx, e_idx in enumerate(p_entry_indices):
                master_wav = master_cue_waveform(cue_fragments[local_c_idx], sr)
                out_file = REPO_ROOT / entries[e_idx]["targets"][v_key]
                encode_futures.append(
                    encode_pool.submit(encode_opus_worker, (master_wav, sr, out_file, ffmpeg_bin, bitrate))
                )
            grand_files += len(p_entry_indices)

        print(f"  [{lang.upper()}] Waiting for {len(encode_futures)} Opus encodes to finish...", flush=True)
        for fut in as_completed(encode_futures):
            _, dur = fut.result()
            grand_audio_sec += dur

    if tts.t2s_accel is not None:
        tts.t2s_accel.close()
        tts.t2s_accel = None
    del tts
    if torch.cuda.is_available():
        torch.cuda.empty_cache()

    print(
        f"  ✓ [{lang.upper()}] Wrote {grand_files} .opus files ({grand_audio_sec / 60.0:.1f} min of audio)",
        flush=True,
    )
    return grand_files, grand_audio_sec


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate multi-voice .opus narration with GPT-SoVITS v2ProPlus")
    parser.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST, help="Path to dist/tour_cues_manifest.json")
    parser.add_argument("--gsv-root", type=Path, default=Path("/tmp/GPT-SoVITS"), help="Path to GPT-SoVITS checkout")
    parser.add_argument("--en-t2s", type=str, default=None, help="Override English s1 checkpoint path")
    parser.add_argument("--es-t2s", type=str, default=None, help="Override Spanish s1 checkpoint path")
    parser.add_argument(
        "--vits",
        type=str,
        default="GPT_SoVITS/pretrained_models/v2Pro/s2Gv2ProPlus.pth",
        help="VITS generator checkpoint path relative to --gsv-root",
    )
    parser.add_argument("--langs", nargs="+", choices=["en", "es"], default=["en", "es"])
    parser.add_argument("--en-voices", nargs="+", choices=["v1", "v2", "v3"], default=["v1", "v2", "v3"])
    parser.add_argument("--kinds", nargs="+", choices=["tour", "lens"], default=["tour", "lens"])
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--bitrate", type=str, default="16k", help="Opus target VBR bitrate (default: 16k)")
    parser.add_argument("--limit", type=int, default=0, help="Optional limit per language for smoke testing")
    parser.add_argument("--force", action="store_true", help="Overwrite existing .opus files")
    args = parser.parse_args()

    if not args.manifest.exists():
        raise FileNotFoundError(f"Manifest not found: {args.manifest}. Run `npm run export:cues` first.")
    gsv_root = args.gsv_root.resolve()
    if not gsv_root.exists():
        raise FileNotFoundError(f"GPT-SoVITS root not found at {gsv_root}")

    ffmpeg_bin = shutil.which("ffmpeg") or "/nix/store/8280gf6l76z9gqb1hwk3c29ivskspjl2-ffmpeg-9.0.2-bin/bin/ffmpeg"
    if not Path(ffmpeg_bin).exists() and shutil.which(ffmpeg_bin) is None:
        raise RuntimeError("ffmpeg binary not found in PATH")

    ensure_gsv_spanish_support(gsv_root)

    # Unpack existing audio archives if needed, and clean out legacy flat `audio/en/<tourRoot>` dirs
    if "en" in args.langs and args.limit == 0:
        cleanup_legacy_flat_en_dirs()

    # GPT-SoVITS speaker verification (`sv.py`) resolves relative paths from CWD on import
    os.chdir(gsv_root)
    if str(gsv_root) not in sys.path:
        sys.path.insert(0, str(gsv_root))
    if str(gsv_root / "GPT_SoVITS") not in sys.path:
        sys.path.insert(0, str(gsv_root / "GPT_SoVITS"))

    manifest_data = json.loads(args.manifest.read_text(encoding="utf-8"))
    all_entries: List[Dict[str, Any]] = [
        e for e in manifest_data["entries"] if e.get("kind", "tour") in set(args.kinds)
    ]

    grand_count = 0
    grand_sec = 0.0
    t_start = time.perf_counter()

    if "en" in args.langs:
        en_entries = [e for e in all_entries if e["lang"] == "en"]
        if args.limit > 0:
            en_entries = en_entries[: args.limit]
        en_specs = [(vk, EN_VOICE_CONFIGS[vk]) for vk in args.en_voices]
        en_t2s = args.en_t2s or EN_VOICE_CONFIGS["v1"]["default_t2s"]
        cnt, sec = synthesize_voice_group(
            entries=en_entries,
            lang="en",
            voice_specs=en_specs,
            gsv_root=gsv_root,
            t2s_weights=en_t2s,
            vits_weights=args.vits,
            batch_size=args.batch_size,
            ffmpeg_bin=ffmpeg_bin,
            bitrate=args.bitrate,
            force=args.force,
        )
        grand_count += cnt
        grand_sec += sec

    if "es" in args.langs:
        es_entries = [e for e in all_entries if e["lang"] == "es"]
        if args.limit > 0:
            es_entries = es_entries[: args.limit]
        es_t2s = args.es_t2s or ES_VOICE_CONFIG["default_t2s"]
        cnt, sec = synthesize_voice_group(
            entries=es_entries,
            lang="es",
            voice_specs=[("es", ES_VOICE_CONFIG)],
            gsv_root=gsv_root,
            t2s_weights=es_t2s,
            vits_weights=args.vits,
            batch_size=args.batch_size,
            ffmpeg_bin=ffmpeg_bin,
            bitrate=args.bitrate,
            force=args.force,
        )
        grand_count += cnt
        grand_sec += sec

    print(
        f"\nAll done! Generated {grand_count} .opus narration files "
        f"({grand_sec / 60.0:.1f} min total audio) in {(time.perf_counter() - t_start) / 60.0:.2f} min.",
        flush=True,
    )


if __name__ == "__main__":
    main()
