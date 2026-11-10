#!/usr/bin/env python3
"""Offline bilingual (EN/ES) tour narration generator powered by GPT-SoVITS v2ProPlus.

Reads `dist/tour_cues_manifest.json` (exported by `scripts/export_tour_cues.ts`),
synthesizes natural deep-timbre human narration in English and Spanish using
Public-Domain (CC0) studio reference voices in `tools/voices/`, masters each cue
to consistent podcast loudness, and encodes static `.opus` assets under `audio/{en,es}/`.
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

VOICE_CONFIGS: Dict[str, Dict[str, Any]] = {
    "en": {
        "ref_wav": VOICES_DIR / "narrator_6097_ref.wav",
        "prompt_text": (
            "What has been written above will serve to enforce the statement already made "
            "as to the importance of maintaining a strict control over our thoughts."
        ),
        "prompt_lang": "en",
        "text_lang": "en",
        "default_t2s": "GPT_SoVITS/pretrained_models/s1v3.ckpt",
        "top_k": 15,
        "top_p": 0.95,
        "temperature": 0.85,
    },
    "es": {
        "ref_wav": VOICES_DIR / "narrator_es_cv19_ref.wav",
        "prompt_text": (
            "Es una estrella moderadamente activa que posiblemente presenta manchas estelares y erupciones,"
        ),
        "prompt_lang": "es",
        "text_lang": "es",
        "default_t2s": "GPT_SoVITS/pretrained_models/s1v3_es-e22.ckpt",
        "top_k": 12,
        "top_p": 0.95,
        "temperature": 0.80,
    },
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
    s = re.sub(r"\bATPase(s?)\b", r"A T P ase\1", s)
    s = re.sub(r"\bGTPase(s?)\b", r"G T P ase\1", s)
    s = re.sub(r"\bRNase(s?)\b", r"R N ase\1", s)
    s = re.sub(r"\bDNase(s?)\b", r"D N ase\1", s)
    s = re.sub(r"\bNADPH\b", "N A D P H", s)
    s = re.sub(r"\bNADH\b", "N A D H", s)
    s = re.sub(r"\bFADH2\b", "F A D H 2", s)
    s = re.sub(r"\bRNAP\b", "R N A P", s)
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
    # Replace semicolons with sentence periods so long compound sentences split cleanly with `.`
    s = re.sub(r";\s+", ". ", s)
    raw_parts = [p.strip() for p in re.split(r"(?<=[.!?])\s+", s) if p.strip()]
    sentences: List[str] = []
    for part in raw_parts:
        # Strip any trailing comma/colon/dash and ensure clean terminal sentence punctuation
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


def encode_opus_worker(task: Tuple[np.ndarray, int, Path, str]) -> Tuple[str, float]:
    wav, sr, out_path, ffmpeg_bin = task
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
        "24k",
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


def synthesize_language(
    entries: List[Dict[str, Any]],
    lang: str,
    gsv_root: Path,
    t2s_weights: str,
    vits_weights: str,
    batch_size: int,
    ffmpeg_bin: str,
    force: bool,
) -> Tuple[int, float]:
    from TTS_infer_pack.TTS import TTS, TTS_Config, create_acceleration

    vcfg = VOICE_CONFIGS[lang]
    pending = [e for e in entries if force or not (REPO_ROOT / e["audioPath"]).exists()]
    if not pending:
        print(f"[{lang}] All {len(entries)} .opus files already exist (use --force to regenerate).")
        return 0, 0.0

    print(f"\n==================== [{lang.upper()}] Synthesizing {len(pending)}/{len(entries)} cues ====================")
    print(f"  T2S weights : {t2s_weights}")
    print(f"  VITS weights: {vits_weights}")
    print(f"  Ref voice   : {vcfg['ref_wav']}")

    cfg = TTS_Config(str(gsv_root / "GPT_SoVITS" / "configs" / "tts_infer.yaml"))
    cfg.device = "cuda" if torch.cuda.is_available() else "cpu"
    cfg.is_half = cfg.device == "cuda"
    cfg.version = "v2ProPlus"
    if "es" not in cfg.languages:
        cfg.languages.append("es")
    cfg.t2s_weights_path = t2s_weights
    cfg.vits_weights_path = vits_weights

    tts = TTS(cfg)
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

    # 1. Pre-extract phoneme + BERT features for all sentences across all cues
    flat_items: List[Dict[str, Any]] = []
    flat_owners: List[Tuple[int, int]] = []
    cue_sentence_counts: List[int] = []

    for c_idx, entry in enumerate(pending):
        sents = split_cue_sentences(entry["speechText"], lang)
        valid_sub = 0
        for sent in sents:
            phones, bert_features, norm_text = tts.text_preprocessor.segment_and_extract_feature_for_text(
                sent, vcfg["text_lang"], cfg.version
            )
            if phones is None or len(phones) == 0:
                continue
            flat_items.append(
                {
                    "phones": phones,
                    "bert_features": bert_features,
                    "norm_text": norm_text,
                    "raw_sent": sent,
                }
            )
            flat_owners.append((c_idx, valid_sub))
            valid_sub += 1
        cue_sentence_counts.append(valid_sub)

    sr = tts.configs.sampling_rate
    cue_fragments: List[List[np.ndarray]] = [
        [np.zeros(0, dtype=np.float32) for _ in range(cnt)] for cnt in cue_sentence_counts
    ]

    # Sort sentence indices by phoneme length so batches have minimal padding overhead!
    order = sorted(range(len(flat_items)), key=lambda i: len(flat_items[i]["phones"]))

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

    torch.manual_seed(20261110)
    if torch.cuda.is_available():
        torch.cuda.manual_seed_all(20261110)

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
        idx0 = int(idx_val[0]) if isinstance(idx_val, (list, tuple, torch.Tensor)) and getattr(idx_val, "ndim", 1) > 0 else int(idx_val)
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
            prompt = tts.prompt_cache["prompt_semantic"].expand(len(all_phoneme_ids), -1).to(tts.configs.device)

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

                c_idx, sub_idx = flat_owners[orig_flat_idx]
                cue_fragments[c_idx][sub_idx] = wav_np

            done = min(start + batch_size, len(order))
            if done % (batch_size * 8) == 0 or done == len(order):
                elapsed = time.perf_counter() - t0
                print(
                    f"  [{lang}] Synthesized {done}/{len(order)} sentences in {elapsed:.1f}s "
                    f"({done / max(elapsed, 1e-3):.1f} sent/s, guardrail retries={retries})"
                )

    if tts.t2s_accel is not None:
        tts.t2s_accel.close()
        tts.t2s_accel = None
    del tts
    if torch.cuda.is_available():
        torch.cuda.empty_cache()

    # 2. Master & encode all cues to .opus in parallel
    print(f"  [{lang}] Mastering & encoding {len(pending)} .opus files via ffmpeg...")
    encode_tasks: List[Tuple[np.ndarray, int, Path, str]] = []
    for c_idx, entry in enumerate(pending):
        master_wav = master_cue_waveform(cue_fragments[c_idx], sr)
        out_file = REPO_ROOT / entry["audioPath"]
        encode_tasks.append((master_wav, sr, out_file, ffmpeg_bin))

    total_audio_sec = 0.0
    with ThreadPoolExecutor(max_workers=12) as pool:
        futs = [pool.submit(encode_opus_worker, t) for t in encode_tasks]
        for fut in as_completed(futs):
            _, dur = fut.result()
            total_audio_sec += dur

    total_wall = time.perf_counter() - t0
    print(
        f"  ✓ [{lang}] Wrote {len(pending)} .opus cues ({total_audio_sec / 60.0:.1f} min of audio) "
        f"in {total_wall:.1f}s ({total_audio_sec / max(total_wall, 1e-3):.1f}x realtime)"
    )
    return len(pending), total_audio_sec


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate static .opus tour narration with GPT-SoVITS v2ProPlus")
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
    parser.add_argument("--batch-size", type=int, default=16)
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

    # GPT-SoVITS speaker verification (`sv.py`) resolves relative paths from CWD on import
    os.chdir(gsv_root)
    if str(gsv_root) not in sys.path:
        sys.path.insert(0, str(gsv_root))
    if str(gsv_root / "GPT_SoVITS") not in sys.path:
        sys.path.insert(0, str(gsv_root / "GPT_SoVITS"))

    manifest_data = json.loads(args.manifest.read_text(encoding="utf-8"))
    all_entries: List[Dict[str, Any]] = manifest_data["entries"]

    grand_count = 0
    grand_sec = 0.0
    t_start = time.perf_counter()

    for lang in args.langs:
        lang_entries = [e for e in all_entries if e["lang"] == lang]
        if args.limit > 0:
            lang_entries = lang_entries[: args.limit]
        t2s_ckpt = (
            args.en_t2s
            if (lang == "en" and args.en_t2s)
            else (args.es_t2s if (lang == "es" and args.es_t2s) else VOICE_CONFIGS[lang]["default_t2s"])
        )
        cnt, sec = synthesize_language(
            entries=lang_entries,
            lang=lang,
            gsv_root=gsv_root,
            t2s_weights=t2s_ckpt,
            vits_weights=args.vits,
            batch_size=args.batch_size,
            ffmpeg_bin=ffmpeg_bin,
            force=args.force,
        )
        grand_count += cnt
        grand_sec += sec

    print(
        f"\nAll done! Generated {grand_count} .opus narration files "
        f"({grand_sec / 60.0:.1f} min total audio) in {(time.perf_counter() - t_start) / 60.0:.2f} min."
    )


if __name__ == "__main__":
    main()
