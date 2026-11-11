# Multi-Voice Narration Reference Voices Attribution

All guided-tour (`audio/en/{v1,v2,v3}/`, `audio/es/{latam,spain}/`) and 4-mode Explorer lens (`audio/lenses/en/{v1,v2,v3}/`, `audio/lenses/es/{latam,spain}/`) narration audio is synthesized offline (`24 kHz` Opus `.opus` via `ffmpeg libopus`), conditioned and fine-tuned exclusively on **Public Domain (CC0 / LibriVox / Mozilla Common Voice)** human studio narrator recordings:
- **English (`v1`, `v2`, `v3`):** Synthesized via **GPT-SoVITS v2ProPlus** (`s1v3` + `s2Gv2ProPlus.pth` + `ERes2NetV2`).
- **Spanish (`latam`, `spain`):** Synthesized via native **F5-Spanish** (`jpgallegoar/F5-Spanish`, MIT License) + **Vocos** 24 kHz neural vocoder, supporting multi-sample studio reference folders (`tools/voices/es_latam_villarraza/*.wav` and `tools/voices/es_spain_baritone/*.wav`) and multi-minute speaker fine-tuning.

## 1. English Voice 1 (`v1`) — Preset for `Scientific` Mode
- **File:** `tools/voices/en_v1_david_clarke.wav` (`32.0 kHz`, `16-bit PCM`, `7.96s`, median $F_0 \approx 112.2\text{ Hz}$)
- **Reader:** David Clarke
- **Source Recording:** **LibriVox** — *His Last Bow (Version 3)* (`his_last_bow_version_3_1603_librivox`, `https://archive.org/details/his_last_bow_version_3_1603_librivox`)
- **License:** **Public Domain (CC0 / Public Domain Mark 1.0)** — LibriVox recording dedicated to the public domain worldwide.

## 2. English Voice 2 (`v2`) — Preset for `Blueprint` Mode (Engineers & Systems)
- **File:** `tools/voices/en_v2_peter_yearsley.wav` (`32.0 kHz`, `16-bit PCM`, `6.84s`, median $F_0 \approx 104.1\text{ Hz}$)
- **Reader:** Peter Yearsley
- **Source Recording:** **LibriVox** — *Reginald* (`reginald_2510_librivox`, `https://archive.org/details/reginald_2510_librivox`)
- **License:** **Public Domain (CC0 / Public Domain Mark 1.0)** — LibriVox recording dedicated to the public domain worldwide.

## 3. English Voice 3 (`v3`) — Preset for `Simple` & `Story` Modes (Kids & Curious Learners)
- **File:** `tools/voices/en_v3_martin_geeson.wav` (`32.0 kHz`, `16-bit PCM`, `8.62s`)
- **Reader:** Martin Geeson
- **Source Recording:** **LibriVox** — *The Problem of Modern Ethics* (`problem_modern_ethics_1106_librivox`, `https://archive.org/details/problem_modern_ethics_1106_librivox`)
- **License:** **Public Domain (CC0 1.0 Universal)** — dedicated to the public domain worldwide.

## 4. Spanish Voice 1 (`latam`) — Latinoamérica Studio Narrator (Preset for `Simple` & `Story`)
- **Multi-Sample Folder:** `tools/voices/es_latam_villarraza/` (`6` pause-aligned studio `.wav` clips + `voice_manifest.json`; speaker model fine-tuned on `371` studio clips / `34.6 min` from Chapters 1 & 2)
- **Reader:** Víctor Villarraza
- **Source Recording:** **LibriVox** — *La muerte en Venecia* (`muerteenvenecia_2601_librivox`, `https://archive.org/details/muerteenvenecia_2601_librivox`)
- **License:** **Public Domain (CC0 / Public Domain Mark 1.0)** — LibriVox recording dedicated to the public domain worldwide.

## 5. Spanish Voice 2 (`spain`) — España Castilian Baritone (Preset for `Blueprint` & `Scientific`)
- **Multi-Sample Folder:** `tools/voices/es_spain_baritone/` (`sample_01_spain_narrative.wav`, `sample_02_spain_analytical.wav` + `voice_manifest.json`)
- **Reader:** Mozilla Common Voice Spanish Contributor (`74f848fc`, `common_voice_es_19349573` & `19349574`)
- **Source Recording:** **Mozilla Common Voice 19.0 (`es`)** (`https://commonvoice.mozilla.org/es/datasets`)
- **License:** **Public Domain (CC0 1.0 Universal)** — dedicated to the public domain worldwide.
