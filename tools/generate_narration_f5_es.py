#!/usr/bin/env python3
"""Native Spanish dual-voice (`latam` + `spain`) multi-sample training & narration generator.

Powered by `F5-Spanish` (`jpgallegoar/F5-Spanish`, MIT License) + `Vocos` 24 kHz vocoder:
  1. Accepts **multi-sample studio voice folders** (`tools/voices/es_latam_baritone/*.wav` and
     `tools/voices/es_spain_baritone/*.wav`), selecting mode-matched studio reference clips
     (`simple`, `story`, `tour`, `blueprint`, `scientific`) rather than relying on a single short clip.
  2. Supports optional speaker fine-tuning (`--finetune-csv`) or clean studio zero-shot conditioning
     with matched conversational cadence (`~16 chars/s`) and natural high-frequency roll-off.
  3. Uses `bfloat16` CUDA inference (`nfe_step=28`) + parallel `ffmpeg` `libopus` encoding (`38 kbps`
     VBR, `24 kHz`) to synthesize all `3,198` Spanish `.opus` files
     (`audio/es/{latam,spain}/...` and `audio/lenses/es/{latam,spain}/...`).
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import csv
from importlib.resources import files
import json
import multiprocessing as mp
import os
from pathlib import Path
import re
import shutil
import subprocess
import time
from typing import Any, Dict, List, Tuple

import numpy as np
from num2words import num2words
import soundfile as sf
import torch
import torchaudio

# Compatibility shim for torchaudio >= 2.11 where torchcodec may not match system FFmpeg ABI
torchaudio.load = lambda p, *a, **k: (
    torch.from_numpy(sf.read(str(p), dtype="float32", always_2d=True)[0].T),
    sf.info(str(p)).samplerate,
)

from datasets.arrow_writer import ArrowWriter
from f5_tts.infer.utils_infer import chunk_text, load_model, load_vocoder
from f5_tts.model import CFM, DiT, Trainer
from f5_tts.model.dataset import load_dataset
from f5_tts.model.utils import convert_char_to_pinyin, get_tokenizer

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANIFEST = REPO_ROOT / "dist" / "tour_cues_manifest.json"
DEFAULT_LATAM_DIR = REPO_ROOT / "tools" / "voices" / "es_latam_baritone"
DEFAULT_SPAIN_DIR = REPO_ROOT / "tools" / "voices" / "es_spain_baritone"

TARGET_SR = 24000
HOP_LENGTH = 256
N_MEL = 100
N_FFT = 1024
WIN_LENGTH = 1024

LETTER_NAMES_ES = {
    "A": "a",
    "B": "be",
    "C": "ce",
    "D": "de",
    "E": "e",
    "F": "efe",
    "G": "ge",
    "H": "hache",
    "I": "i",
    "J": "jota",
    "K": "ka",
    "L": "ele",
    "M": "eme",
    "N": "ene",
    "Ñ": "eñe",
    "O": "o",
    "P": "pe",
    "Q": "cu",
    "R": "erre",
    "S": "ese",
    "T": "te",
    "U": "u",
    "V": "uve",
    "W": "doble uve",
    "X": "equis",
    "Y": "i griega",
    "Z": "zeta",
}

WORD_ACRONYMS_ES = {
    "COVID": "cóvid",
    "SARS": "sars",
    "CAR": "car",
    "TIM": "tim",
    "SIDA": "sida",
    "ELISA": "elisa",
    "CRISPR": "crísper",
}


def _spell_alphanum_es(token: str) -> str:
    parts: List[str] = []
    for m in re.finditer(r"[A-Za-zÑñ]+|\d+", token):
        piece = m.group(0)
        if piece.isdigit():
            parts.append(num2words(int(piece), lang="es"))
        else:
            for ch in piece.upper():
                parts.append(LETTER_NAMES_ES.get(ch, ch.lower()))
    return " ".join(parts)


def normalize_es_for_f5(text: str) -> str:
    """Expands scientific acronyms, PDB codes, and numbers into natural Spanish words
    while preserving sentence casing and prosodic punctuation for F5-Spanish.
    """
    s = text.strip()
    s = s.replace("«", '"').replace("»", '"').replace('"', "")
    s = re.sub(r"\s*[—–]\s*", ", ", s)
    s = re.sub(r"\s*;\s*", ", ", s)
    s = s.replace("/", " por ")

    # Enzyme / biological hybrid terms
    s = re.sub(r"\bATPasa(s?)\b", r"a te pe asa\1", s)
    s = re.sub(r"\bGTPasa(s?)\b", r"ge te pe asa\1", s)
    s = re.sub(r"\bRNasa(s?)\b", r"erre ene asa\1", s)
    s = re.sub(r"\bDNasa(s?)\b", r"de ene asa\1", s)
    s = re.sub(r"\bADNc\b", "a de ene complementario", s)
    s = re.sub(r"\bADNr\b", "a de ene ribosómico", s)
    s = re.sub(r"\bARNm\b", "a erre ene mensajero", s)
    s = re.sub(r"\bARNr\b", "a erre ene ribosómico", s)
    s = re.sub(r"\bARNt\b", "a erre ene de transferencia", s)
    s = re.sub(r"\b(\d+)S\b", lambda m: f"{num2words(int(m.group(1)), lang='es')} ese", s)
    s = re.sub(r"\b3D\b", "tres de", s)

    def replace_mixed_code(match: re.Match[str]) -> str:
        tok = match.group(0)
        if tok.isdigit():
            return tok
        m_low = re.fullmatch(r"([a-z]{1,3})(\d+)", tok)
        if m_low:
            letters = " ".join(LETTER_NAMES_ES[c.upper()] for c in m_low.group(1))
            num = num2words(int(m_low.group(2)), lang="es")
            return f"{letters} {num}"
        return _spell_alphanum_es(tok)

    s = re.sub(r"\b(?=[A-Za-z0-9]*\d)(?=[A-Za-z0-9]*[A-Za-z])[A-Za-z0-9]{2,8}\b", replace_mixed_code, s)

    def replace_acronym(match: re.Match[str]) -> str:
        acr = match.group(0)
        if acr in WORD_ACRONYMS_ES:
            return WORD_ACRONYMS_ES[acr]
        return "-".join(LETTER_NAMES_ES.get(c, c.lower()) for c in acr)

    s = re.sub(r"\b[A-ZÁÉÍÓÚÑ]{2,6}\b", replace_acronym, s)

    def replace_decimal(match: re.Match[str]) -> str:
        whole = num2words(int(match.group(1)), lang="es")
        sep = "coma" if match.group(2) == "," else "punto"
        frac_str = match.group(3)
        frac = (
            num2words(int(frac_str), lang="es")
            if len(frac_str) <= 2
            else " ".join(num2words(int(d), lang="es") for d in frac_str)
        )
        return f"{whole} {sep} {frac}"

    s = re.sub(r"\b(\d+)([,.])(\d+)\b", replace_decimal, s)
    s = re.sub(r"\b\d+\b", lambda m: num2words(int(m.group(0)), lang="es"), s)
    s = re.sub(r"(?<!^)(?<![.!?]\s)\b[B-DF-HJ-NP-TV-Z]\b", lambda m: LETTER_NAMES_ES.get(m.group(0), m.group(0)), s)
    s = re.sub(r"\s+", " ", s).strip()
    if s and s[-1] not in ".!?":
        s += "."
    return s


def resolve_f5_spanish_base_ckpt() -> Path:
    hf_root = Path.home() / ".cache" / "huggingface" / "hub" / "models--jpgallegoar--F5-Spanish" / "snapshots"
    snaps = sorted(hf_root.glob("*/model_1200000.safetensors"))
    if snaps:
        return snaps[-1]
    from huggingface_hub import hf_hub_download

    return Path(hf_hub_download(repo_id="jpgallegoar/F5-Spanish", filename="model_1200000.safetensors"))


def finetune_speaker_f5(
    csv_path: Path,
    base_ckpt: Path,
    work_dir: Path,
    epochs: int = 12,
    lr: float = 1e-5,
    batch_frames: int = 4200,
) -> Path:
    """Prepares Arrow dataset from multi-sample `metadata.csv` and fine-tunes F5-Spanish in bf16."""
    ckpt_out_dir = work_dir / "ckpts"
    final_pt = ckpt_out_dir / "model_last.pt"
    if final_pt.exists() and final_pt.stat().st_size > 500_000_000:
        print(f"==> Reusing existing fine-tuned speaker checkpoint: {final_pt}")
        return final_pt

    vocab_src = Path(str(files("f5_tts").joinpath("infer/examples/vocab.txt")))
    dataset_name = "es_speaker_studio_ft"
    # f5_tts load_dataset resolves `<f5_tts>/../../data/<dataset_name>_custom`
    f5_data_root = Path(str(files("f5_tts").joinpath("../../data"))).resolve()
    ds_dir = f5_data_root / f"{dataset_name}_custom"
    ds_dir.mkdir(parents=True, exist_ok=True)

    rows: List[Tuple[str, str, float]] = []
    with open(csv_path, encoding="utf-8") as f:
        for r in csv.DictReader(f, delimiter="|"):
            ap, txt = r["audio_file"].strip(), r["text"].strip()
            if Path(ap).exists() and len(txt) >= 10:
                dur = sf.info(ap).duration
                if 2.0 <= dur <= 15.0:
                    rows.append((ap, txt, dur))

    print(
        f"==> Preparing F5-Spanish Arrow dataset from {len(rows)} studio clips "
        f"({sum(r[2] for r in rows)/60.0:.1f} min)..."
    )
    conv_texts = convert_char_to_pinyin([r[1] for r in rows], polyphone=True)
    raw_arrow = ds_dir / "raw.arrow"
    if raw_arrow.exists():
        raw_arrow.unlink()
    durations: List[float] = []
    with ArrowWriter(path=raw_arrow.as_posix()) as writer:
        for (ap, _, dur), ct in zip(rows, conv_texts):
            writer.write({"audio_path": ap, "text": ct, "duration": dur})
            durations.append(dur)
        writer.finalize()

    (ds_dir / "duration.json").write_text(
        json.dumps({"duration": durations}, ensure_ascii=False), encoding="utf-8"
    )
    shutil.copy2(vocab_src, ds_dir / "vocab.txt")

    ckpt_out_dir.mkdir(parents=True, exist_ok=True)
    pretrained_copy = ckpt_out_dir / f"pretrained_{base_ckpt.name}"
    if not pretrained_copy.exists():
        shutil.copy2(base_ckpt, pretrained_copy)

    vocab_char_map, vocab_size = get_tokenizer(str(vocab_src), "custom")
    mel_spec_kwargs = dict(
        n_fft=N_FFT,
        hop_length=HOP_LENGTH,
        win_length=WIN_LENGTH,
        n_mel_channels=N_MEL,
        target_sample_rate=TARGET_SR,
        mel_spec_type="vocos",
    )
    model_cfg = dict(
        dim=1024,
        depth=22,
        heads=16,
        ff_mult=2,
        text_dim=512,
        text_mask_padding=False,
        conv_layers=4,
        pe_attn_head=1,
    )
    model = CFM(
        transformer=DiT(**model_cfg, text_num_embeds=vocab_size, mel_dim=N_MEL),
        mel_spec_kwargs=mel_spec_kwargs,
        vocab_char_map=vocab_char_map,
    )

    trainer = Trainer(
        model,
        epochs=epochs,
        learning_rate=lr,
        num_warmup_updates=60,
        save_per_updates=100000,
        keep_last_n_checkpoints=0,
        checkpoint_path=str(ckpt_out_dir),
        batch_size_per_gpu=batch_frames,
        batch_size_type="frame",
        max_samples=16,
        grad_accumulation_steps=1,
        max_grad_norm=1.0,
        logger=None,
        log_samples=False,
        last_per_updates=200,
        accelerate_kwargs={"mixed_precision": "bf16"},
        bnb_optimizer=True,
    )

    train_dataset = load_dataset(dataset_name, "custom", mel_spec_kwargs=mel_spec_kwargs)
    t0 = time.time()
    print(f"==> Fine-tuning F5-Spanish for {epochs} epochs on RTX GPU (bf16 + AdamW8bit)...")
    trainer.train(train_dataset, num_workers=4, resumable_with_seed=666)
    trainer.save_checkpoint(update=epochs * 40, last=True)
    print(f"==> Finished speaker fine-tuning in {(time.time() - t0)/60.0:.2f} min -> {final_pt}")

    del trainer, model
    torch.cuda.empty_cache()
    return final_pt


def load_voice_samples(voice_dir: Path, device: str, target_rms: float = 0.1) -> List[Dict[str, Any]]:
    """Loads all reference `.wav` clips and transcripts from a multi-sample voice folder."""
    manifest_path = voice_dir / "voice_manifest.json"
    samples_meta: List[Dict[str, Any]] = []
    if manifest_path.exists():
        data = json.loads(manifest_path.read_text(encoding="utf-8"))
        samples_meta = data.get("samples", [])
    else:
        for wav_p in sorted(voice_dir.glob("*.wav")):
            samples_meta.append({"file": wav_p.name, "role": "fallback", "promptText": ""})

    loaded: List[Dict[str, Any]] = []
    for item in samples_meta:
        wav_p = voice_dir / item["file"]
        if not wav_p.exists():
            continue
        wav_np, sr = sf.read(str(wav_p), dtype="float32")
        if wav_np.ndim > 1:
            wav_np = wav_np.mean(axis=1)
        audio = torch.from_numpy(wav_np).unsqueeze(0)
        if sr != TARGET_SR:
            audio = torchaudio.transforms.Resample(sr, TARGET_SR)(audio)
        rms = torch.sqrt(torch.mean(torch.square(audio)))
        if rms < target_rms:
            audio = audio * (target_rms / (rms + 1e-8))
        prompt = str(item.get("promptText", "")).strip()
        if not prompt.endswith(". "):
            prompt = (prompt + " ") if prompt.endswith(".") else (prompt + ". ")
        loaded.append(
            {
                "name": item["file"],
                "role": item.get("role", "fallback"),
                "audio": audio.to(device),
                "ref_frames": audio.shape[-1] // HOP_LENGTH,
                "ref_sec": audio.shape[-1] / TARGET_SR,
                "ref_text": prompt,
                "ref_text_bytes": len(prompt.encode("utf-8")),
            }
        )
    if not loaded:
        raise RuntimeError(f"No valid .wav reference samples found in {voice_dir}")
    return loaded


def select_sample_for_entry(samples: List[Dict[str, Any]], entry: Dict[str, Any], idx: int) -> int:
    if entry["kind"] == "tour":
        persona = entry.get("persona")
        if persona == "blueprint":
            desired_role = "blueprint"
        elif persona == "scientific":
            desired_role = "scientific"
        else:
            desired_role = "tour"
    else:
        desired_role = entry.get("mode") or "story"
    matching = [i for i, s in enumerate(samples) if s["role"] == desired_role]
    if not matching and desired_role == "tour":
        matching = [i for i, s in enumerate(samples) if s["role"] == "story"]
    if matching:
        return matching[idx % len(matching)]
    return idx % len(samples)


def crossfade_chunks(waves: List[np.ndarray], sr: int = TARGET_SR, fade_sec: float = 0.14) -> np.ndarray:
    if not waves:
        return np.zeros(int(0.1 * sr), dtype=np.float32)
    if len(waves) == 1:
        out = waves[0]
    else:
        fade_len = int(fade_sec * sr)
        out = waves[0]
        for nxt in waves[1:]:
            fl = min(fade_len, len(out) // 4, len(nxt) // 4)
            if fl <= 8:
                out = np.concatenate([out, nxt])
            else:
                t = np.linspace(0.0, np.pi / 2.0, fl, dtype=np.float32)
                w_out = np.cos(t) ** 2
                w_in = np.sin(t) ** 2
                overlap = out[-fl:] * w_out + nxt[:fl] * w_in
                out = np.concatenate([out[:-fl], overlap, nxt[fl:]])

    # Gentle 15ms edge fade + 60ms trailing room tone so browser playback never clicks
    edge = min(int(0.015 * sr), len(out) // 6)
    if edge > 4:
        ramp = np.linspace(0.0, 1.0, edge, dtype=np.float32)
        out[:edge] *= ramp
        out[-edge:] *= ramp[::-1]
    peak = float(np.max(np.abs(out)) + 1e-9)
    if peak > 0.92:
        out = out * (0.92 / peak)
    pad = np.zeros(int(0.06 * sr), dtype=np.float32)
    return np.concatenate([out, pad])


def encode_wav_to_opus(wav: np.ndarray, out_opus: Path, ffmpeg_bin: str, bitrate: str = "30k") -> None:
    out_opus.parent.mkdir(parents=True, exist_ok=True)
    pcm16 = np.clip(wav * 32767.0, -32768.0, 32767.0).astype(np.int16).tobytes()
    tmp_opus = out_opus.with_suffix(".tmp.opus")
    subprocess.run(
        [
            ffmpeg_bin,
            "-y",
            "-f",
            "s16le",
            "-ar",
            str(TARGET_SR),
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
            str(tmp_opus),
        ],
        input=pcm16,
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    tmp_opus.replace(out_opus)


def synthesize_voice_pass(
    voice_id: str,
    entries: List[Dict[str, Any]],
    voice_dir: Path,
    ckpt_path: Path,
    vocoder: Any,
    ffmpeg_bin: str,
    batch_size: int = 10,
    nfe_step: int = 24,
    speed: float = 1.02,
    bitrate: str = "30k",
    force: bool = False,
) -> int:
    device = "cuda" if torch.cuda.is_available() else "cpu"
    vocab_file = str(files("f5_tts").joinpath("infer/examples/vocab.txt"))
    model_arc = dict(
        dim=1024,
        depth=22,
        heads=16,
        ff_mult=2,
        text_dim=512,
        text_mask_padding=False,
        conv_layers=4,
        pe_attn_head=1,
    )
    print(f"\n==> [{voice_id.upper()}] Loading F5-Spanish model from {ckpt_path} & samples from {voice_dir}...")
    ema_model = load_model(
        DiT,
        model_arc,
        str(ckpt_path),
        mel_spec_type="vocos",
        vocab_file=vocab_file,
        ode_method="euler",
        use_ema=True,
        device=device,
    )
    samples = load_voice_samples(voice_dir, device=device)
    print(f"    Loaded {len(samples)} studio reference samples: {[s['name'] for s in samples]}")

    # Precompute mel spectrograms of all studio reference samples once
    with torch.inference_mode():
        for s in samples:
            mel = ema_model.mel_spec(s["audio"]).permute(0, 2, 1).contiguous()
            s["mel"] = mel  # (1, T_ref, 100)

    pending_entries: List[Tuple[int, Dict[str, Any], Path, int, List[str]]] = []
    for idx, entry in enumerate(entries):
        rel_out = entry["targets"].get(voice_id)
        if not rel_out:
            continue
        out_path = REPO_ROOT / rel_out
        if not force and out_path.exists() and out_path.stat().st_size > 800:
            continue
        sample_idx = select_sample_for_entry(samples, entry, idx)
        s_ref = samples[sample_idx]
        ref_cps = s_ref["ref_text_bytes"] / max(s_ref["ref_sec"], 0.1)
        eff_cps = min(max(ref_cps, 15.2), 17.0)
        norm_txt = normalize_es_for_f5(entry["speechText"])
        max_chars = max(
            115,
            min(
                185,
                int(eff_cps * (21.0 - s_ref["ref_sec"]) * speed),
            ),
        )
        chunks = [c.strip() for c in chunk_text(norm_txt, max_chars=max_chars) if c.strip()]
        if not chunks:
            chunks = [norm_txt]
        pending_entries.append((idx, entry, out_path, sample_idx, chunks))

    if not pending_entries:
        print(f"==> [{voice_id.upper()}] All {len(entries)} clips already synthesized.")
        del ema_model
        torch.cuda.empty_cache()
        return 0

    # Flatten chunks grouped by sample_idx for zero-waste length-sorted GPU batching
    chunk_jobs_by_sample: Dict[int, List[Tuple[int, int, str, int]]] = {i: [] for i in range(len(samples))}
    entry_chunk_waves: Dict[int, List[np.ndarray | None]] = {}
    for p_idx, (_, _, _, sample_idx, chunks) in enumerate(pending_entries):
        entry_chunk_waves[p_idx] = [None] * len(chunks)
        s_ref = samples[sample_idx]
        ref_cps = s_ref["ref_text_bytes"] / max(s_ref["ref_sec"], 0.1)
        eff_cps = min(max(ref_cps, 15.2), 17.0)
        frames_per_byte = (TARGET_SR / HOP_LENGTH) / eff_cps
        for c_idx, c_txt in enumerate(chunks):
            gen_bytes = len(c_txt.encode("utf-8"))
            local_spd = 0.45 if gen_bytes < 12 else speed
            est_gen_frames = max(
                28,
                int(frames_per_byte * gen_bytes / local_spd) + 10,
            )
            dur_frames = s_ref["ref_frames"] + est_gen_frames
            chunk_jobs_by_sample[sample_idx].append((p_idx, c_idx, c_txt, dur_frames))

    total_chunks = sum(len(v) for v in chunk_jobs_by_sample.values())
    print(
        f"==> [{voice_id.upper()}] Synthesizing {len(pending_entries)} clips "
        f"({total_chunks} chunks, batch_size={batch_size}, nfe={nfe_step})..."
    )

    t0 = time.time()
    done_chunks = 0
    for sample_idx, jobs in chunk_jobs_by_sample.items():
        if not jobs:
            continue
        # Sort by target duration so every GPU batch has nearly identical sequence length
        jobs.sort(key=lambda x: x[3])
        s_ref = samples[sample_idx]
        ref_frames = s_ref["ref_frames"]
        ref_text = s_ref["ref_text"]

        for b_start in range(0, len(jobs), batch_size):
            batch = jobs[b_start : b_start + batch_size]
            bsz = len(batch)
            cond_mel = s_ref["mel"].expand(bsz, -1, -1)
            raw_texts = [ref_text + item[2] for item in batch]
            tok_texts = convert_char_to_pinyin(raw_texts)
            durs_tensor = torch.tensor([item[3] for item in batch], device=device, dtype=torch.long)
            lens_tensor = torch.full((bsz,), ref_frames, device=device, dtype=torch.long)

            with torch.inference_mode(), torch.autocast(device_type="cuda", dtype=torch.bfloat16):
                sampled_mel, _ = ema_model.sample(
                    cond=cond_mel,
                    text=tok_texts,
                    duration=durs_tensor,
                    lens=lens_tensor,
                    steps=nfe_step,
                    cfg_strength=2.0,
                    sway_sampling_coef=-1.0,
                    seed=20261111,
                )

            with torch.inference_mode():
                sampled_mel_f32 = sampled_mel.to(torch.float32)
                for i_in_b, (p_idx, c_idx, _, target_dur) in enumerate(batch):
                    mel_slice = sampled_mel_f32[i_in_b : i_in_b + 1, ref_frames:target_dur, :].permute(0, 2, 1)
                    wav_t = vocoder.decode(mel_slice)
                    wav_np = wav_t.squeeze().detach().cpu().numpy().astype(np.float32)
                    entry_chunk_waves[p_idx][c_idx] = wav_np

            done_chunks += bsz
            if done_chunks % 200 < batch_size or done_chunks == total_chunks:
                el = time.time() - t0
                rate = done_chunks / max(el, 1e-3)
                eta = (total_chunks - done_chunks) / max(rate, 1e-3)
                print(
                    f"    [{voice_id}] {done_chunks}/{total_chunks} chunks "
                    f"({rate:.1f} chunks/s, elapsed {el:.0f}s, ETA {eta:.0f}s)",
                    flush=True,
                )

    print(f"==> [{voice_id.upper()}] Encoding {len(pending_entries)} stitched clips to {bitrate} .opus...")
    with ThreadPoolExecutor(max_workers=min(12, (os.cpu_count() or 8))) as pool:
        futs = []
        for p_idx, (_, _, out_path, _, _) in enumerate(pending_entries):
            chunk_list = [w for w in entry_chunk_waves[p_idx] if w is not None]
            full_wav = crossfade_chunks(chunk_list, sr=TARGET_SR)
            futs.append(pool.submit(encode_wav_to_opus, full_wav, out_path, ffmpeg_bin, bitrate))
        for fut in as_completed(futs):
            fut.result()

    print(
        f"==> [{voice_id.upper()}] Completed {len(pending_entries)} .opus files "
        f"in {(time.time() - t0)/60.0:.2f} min!"
    )
    del ema_model
    torch.cuda.empty_cache()
    return len(pending_entries)


def main() -> None:
    try:
        mp.set_start_method("fork", force=True)
    except RuntimeError:
        pass

    parser = argparse.ArgumentParser(description="F5-Spanish Multi-Sample Trainer & Dual-Voice Synthesizer")
    parser.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST)
    parser.add_argument("--latam-voice-dir", type=Path, default=DEFAULT_LATAM_DIR)
    parser.add_argument("--spain-voice-dir", type=Path, default=DEFAULT_SPAIN_DIR)
    parser.add_argument("--finetune-csv", type=Path, default=None, help="Optional audio_file|text CSV to fine-tune LatAm speaker")
    parser.add_argument("--finetune-work-dir", type=Path, default=Path("/tmp/latam_f5_ft"))
    parser.add_argument("--finetune-epochs", type=int, default=12)
    parser.add_argument("--voices", nargs="+", choices=["latam", "spain"], default=["latam", "spain"])
    parser.add_argument("--kinds", nargs="+", choices=["tour", "lens"], default=["tour", "lens"])
    parser.add_argument("--batch-size", type=int, default=1)
    parser.add_argument("--nfe-step", type=int, default=28)
    parser.add_argument("--bitrate", type=str, default="30k", help="Opus target VBR bitrate (default: 30k)")
    parser.add_argument("--shard-idx", type=int, default=0, help="Zero-based shard index for multi-process GPU parallelism")
    parser.add_argument("--num-shards", type=int, default=1, help="Total shards for multi-process GPU parallelism")
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--smoke-test", action="store_true", help="Synthesize & Whisper-verify sample entries per voice")
    args = parser.parse_args()

    ffmpeg_bin = shutil.which("ffmpeg") or "/nix/store/8280gf6l76z9gqb1hwk3c29ivskspjl2-ffmpeg-9.0.2-bin/bin/ffmpeg"
    base_ckpt = resolve_f5_spanish_base_ckpt()

    latam_ckpt = base_ckpt
    if args.finetune_csv and args.finetune_csv.exists() and "latam" in args.voices:
        latam_ckpt = finetune_speaker_f5(
            csv_path=args.finetune_csv,
            base_ckpt=base_ckpt,
            work_dir=args.finetune_work_dir,
            epochs=args.finetune_epochs,
        )

    manifest_data = json.loads(args.manifest.read_text(encoding="utf-8"))
    allowed_kinds = set(args.kinds)
    es_entries = [
        e for e in manifest_data["entries"] if e["lang"] == "es" and e.get("kind", "tour") in allowed_kinds
    ]

    if args.smoke_test:
        # Pick 1 pop tour cue + 1 scientific tour cue + 1 mitochondrion story lens
        tour_pop_sample = next(
            e for e in es_entries if e["kind"] == "tour" and e["tourRoot"] == "real-cell" and e.get("persona") == "pop"
        )
        tour_sci_sample = next(
            e for e in es_entries if e["kind"] == "tour" and e["tourRoot"] == "real-cell" and e.get("persona") == "scientific"
        )
        lens_sample = next(
            e for e in es_entries if e["kind"] == "lens" and e["nodeId"] == "mitochondrion" and e["mode"] == "story"
        )
        es_entries = [tour_pop_sample, tour_sci_sample, lens_sample]
        args.force = True
    elif args.num_shards > 1:
        es_entries = es_entries[args.shard_idx :: args.num_shards]

    device = "cuda" if torch.cuda.is_available() else "cpu"
    vocoder = load_vocoder(vocoder_name="vocos", is_local=False, local_path=None, device=device)

    for v in args.voices:
        v_dir = args.latam_voice_dir if v == "latam" else args.spain_voice_dir
        v_ckpt = latam_ckpt if v == "latam" else base_ckpt
        synthesize_voice_pass(
            voice_id=v,
            entries=es_entries,
            voice_dir=v_dir,
            ckpt_path=v_ckpt,
            vocoder=vocoder,
            ffmpeg_bin=ffmpeg_bin,
            batch_size=args.batch_size,
            nfe_step=args.nfe_step,
            bitrate=args.bitrate,
            force=args.force,
        )

    if args.smoke_test:
        from transformers import pipeline

        asr = pipeline(
            "automatic-speech-recognition",
            model="openai/whisper-small",
            device=device,
            dtype=torch.float16 if device == "cuda" else torch.float32,
        )
        print("\n=== WHISPER SMOKE-TEST QUALITY VERIFICATION ===")
        for v in args.voices:
            for e in es_entries:
                if v not in e["targets"]:
                    continue
                opus_p = REPO_ROOT / e["targets"][v]
                tmp_w = Path(f"/tmp/_verify_{v}_{opus_p.stem}.wav")
                subprocess.run(
                    [ffmpeg_bin, "-y", "-i", str(opus_p), "-ar", "16000", "-ac", "1", str(tmp_w)],
                    check=True,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                )
                res = asr(
                    str(tmp_w),
                    return_timestamps=True,
                    generate_kwargs={"language": "es", "task": "transcribe"},
                )
                print(f"  [{v}] {opus_p.relative_to(REPO_ROOT)} ({opus_p.stat().st_size} B):")
                print(f"    EXP: {e['plainText']}")
                print(f"    GOT: {res['text'].strip()}")


if __name__ == "__main__":
    main()
