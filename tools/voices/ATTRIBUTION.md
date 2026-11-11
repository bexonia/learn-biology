# Guided Tour Narration Reference Voices Attribution

All guided-tour narration audio in `audio/{en,es}/` is synthesized offline via **GPT-SoVITS v2ProPlus** (`s1v3` / `s1v3_es` + `s2Gv2ProPlus.pth` + `ERes2NetV2` speaker verification conditioning, `32 kHz` synthesis encoded to `24 kHz` Opus `.opus` via `ffmpeg libopus`), conditioned on clean, deep-timbre (~`100–103 Hz` baritone) **Public Domain (CC0)** human studio narrator recordings:

## 1. English Reference Voice (`en`)
- **File:** `tools/voices/narrator_6097_ref.wav` (`44.1 kHz`, `16-bit PCM`, `8.38s`, median $F_0 \approx 103.3\text{ Hz}$, `SNR > 40 dB`)
- **Source Dataset:** Hi-Fi Multi-Speaker English TTS Dataset (`MikhailT/hifi-tts`, `dev.clean` studio partition, Speaker `6097` — Phil Benson, PhD), derived from **LibriVox** public-domain studio recordings.
- **License:** **Public Domain (CC0 1.0 Universal)** — dedicated to the public domain worldwide with zero copyright restrictions.
- **Prompt Transcript (`en`):**
  > "What has been written above will serve to enforce the statement already made as to the importance of maintaining a strict control over our thoughts."

## 2. Spanish Reference Voice (`es`)
- **File:** `tools/voices/narrator_es_cv19_ref.wav` (`32.0 kHz`, `16-bit PCM`, `5.68s`, median $F_0 \approx 99.5\text{ Hz}$, `SNR = 40.7 dB`)
- **Source Dataset:** **Mozilla Common Voice Corpus 19.0 — Spanish (`es`)** (`common_voice_es_19349573`, community-validated studio-grade recording).
- **License:** **Public Domain (CC0 1.0 Universal)** — Mozilla Common Voice recordings are released under CC0 1.0 public domain dedication.
- **Prompt Transcript (`es`):**
  > "Es una estrella moderadamente activa que posiblemente presenta manchas estelares y erupciones."
