# Multi-Voice Narration Reference Voices Attribution

All guided-tour (`audio/en/{v1,v2,v3}/`, `audio/es/`) and 4-mode Explorer lens (`audio/lenses/en/{v1,v2,v3}/`, `audio/lenses/es/`) narration audio is synthesized offline via **GPT-SoVITS v2ProPlus** (`s1v3` / `s1v3_es` + `s2Gv2ProPlus.pth` + `ERes2NetV2` speaker verification conditioning, `32 kHz` synthesis encoded to `24 kHz` Opus `.opus` via `ffmpeg libopus`), conditioned exclusively on **Public Domain (CC0 / LibriVox)** human studio narrator recordings:

## 1. English Voice 1 (`v1`) — Preset for `Scientific` Mode
- **File:** `tools/voices/en_v1_david_clarke.wav` (`32.0 kHz`, `16-bit PCM`, `7.96s`, median $F_0 \approx 112.2\text{ Hz}$)
- **Reader:** David Clarke
- **Source Recording:** **LibriVox** — *His Last Bow (Version 3)* (`his_last_bow_version_3_1603_librivox`, `https://archive.org/details/his_last_bow_version_3_1603_librivox`)
- **License:** **Public Domain (CC0 / Public Domain Mark 1.0)** — LibriVox recording dedicated to the public domain worldwide.
- **Prompt Transcript (`en`):**
  > "Man or a woman, I asked. Oh, man, of course! No woman would ever send a reply-paid telegram."

## 2. English Voice 2 (`v2`) — Preset for `Blueprint` Mode (Engineers & Systems)
- **File:** `tools/voices/en_v2_peter_yearsley.wav` (`32.0 kHz`, `16-bit PCM`, `6.84s`, median $F_0 \approx 104.1\text{ Hz}$)
- **Reader:** Peter Yearsley
- **Source Recording:** **LibriVox** — *Reginald* (`reginald_2510_librivox`, `https://archive.org/details/reginald_2510_librivox`)
- **License:** **Public Domain (CC0 / Public Domain Mark 1.0)** — LibriVox recording dedicated to the public domain worldwide.
- **Prompt Transcript (`en`):**
  > "Reginald, it's nothing of the kind. Only, I'm sure Mrs. McKillop would be pleased if I brought you."

## 3. English Voice 3 (`v3`) — Preset for `Simple` & `Story` Modes (Kids & Curious Learners)
- **File:** `tools/voices/en_v3_martin_geeson.wav` (`32.0 kHz`, `16-bit PCM`, `8.62s`)
- **Reader:** Martin Geeson
- **Source Recording:** **LibriVox** — *The Problem of Modern Ethics* (`problem_modern_ethics_1106_librivox`, `https://archive.org/details/problem_modern_ethics_1106_librivox`)
- **License:** **Public Domain (CC0 1.0 Universal)** — dedicated to the public domain worldwide.
- **Prompt Transcript (`en`):**
  > "Consequently philosophy and science have not deigned to make it the subject of special inquiry."

## 4. Spanish Voice (`es` / Voice #7) — All Spanish Modes & Guided Tours
- **File:** `tools/voices/es_v7_victor_villarraza.wav` (`32.0 kHz`, `16-bit PCM`, `8.11s`, median $F_0 \approx 113.2\text{ Hz}$)
- **Reader:** Víctor Villarraza
- **Source Recording:** **LibriVox** — *La muerte en Venecia* (`muerteenvenecia_2601_librivox`, `https://archive.org/details/muerteenvenecia_2601_librivox`)
- **License:** **Public Domain (CC0 / Public Domain Mark 1.0)** — LibriVox recording dedicated to the public domain worldwide.
- **Prompt Transcript (`es`):**
  > "para dar solo un largo paseo, una tarde de primavera del año mil novecientos y tanto, que había"
