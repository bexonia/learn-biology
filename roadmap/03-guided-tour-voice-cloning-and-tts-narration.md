# 03 — Guided Tour Voice Cloning & Bilingual (`EN`/`ES`) TTS Narration

**Iteration:** `03` (Custom Voice Training & Lightweight Pre-Generated Tour Audio Streaming)  
**Status:** ✅ **Completed (Pre-Generated GPT-SoVITS `.opus` Bilingual Narration Active)**  
**Parent Index:** [`roadmap/README.md`](./README.md)  
**Previous Step:** [`02-bilingual-i18n-and-reactive-locale-switching.md`](./02-bilingual-i18n-and-reactive-locale-switching.md)  
**Next Step:** [`04-optional-user-accounts-and-course-progress-sync.md`](./04-optional-user-accounts-and-course-progress-sync.md)

---

## 1. Objective

Enable the built-in **`🔊 Narration`** (`#tNarr`) controls in [`src/pages/cell_explorer.ts`](../src/pages/cell_explorer.ts) across all **10 Guided Tours** (`655` unique subtitle cues in both English `en` and Spanish `es`) using a **custom cloned voice** trained from a reference video or MP3 file, delivered as lightweight static `.opus` / `.mp3` audio streams (`~15–20 KB` per cue) with zero browser GPU/WASM overhead.

---

## 2. Ranked Leaderboard: Voice Cloning + Multilingual (`EN`/`ES`) TTS Models

| Rank | Tool / Model | Type | **Overall Score** | Voice Imitation | English (`EN`) | Spanish (`ES`) | Audio Needed & Training Time | Verdict / Why It Ranks Here |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **#1** 🏆 | **GPT-SoVITS v3** *(Recommended Open-Source Winner)* | Open-Source (MIT) | **9.5 / 10** | **9.7 / 10** | **9.4 / 10** | **9.3 / 10** | **1–10 min** MP3 · **~10 min** training on 1 GPU | **#1 open-source choice.** All-in-one suite (includes UVR5 noise removal + `faster-whisper` transcription + fine-tuning + TTS). Trains in ~10 minutes and speaks fluent Spanish even if trained on an English-only video. |
| **#2** 🥈 | **Fish Speech 1.5** (`OpenAudio-S1`) | Open-Source (Apache-2.0 / CC) | **9.4 / 10** | **9.4 / 10** | **9.5 / 10** | **9.3 / 10** | **15 sec** (zero-shot) or **10 min** (LoRA, ~20 min train) | **Best zero-shot & code-switching.** Does not rely on phoneme dictionaries (reads raw UTF-8 directly), handling mixed English/Spanish and scientific terms naturally. |
| **#3** 🥉 | **CosyVoice 2** *(Alibaba)* | Open-Source (Apache-2.0) | **9.2 / 10** | **9.2 / 10** | **9.4 / 10** | **9.0 / 10** | **10–30 sec** (zero-shot) or fine-tune | Ultra-natural breathing and intonation with 150 ms streaming latency and strong cross-lingual speaker preservation. |
| **#4** | **F5-TTS** *(+ `F5-Spanish` checkpoint)* | Open-Source (MIT) | **9.0 / 10** | **9.1 / 10** | **9.4 / 10** | **8.9 / 10** | **10 sec** (zero-shot) or **15 min** (~45 min train) | Diffusion flow-matching model that copies the exact emotion and pacing of a reference clip; requires switching checkpoints for native Spanish accent. |
| **#5** | **XTTS-v2** *(Coqui TTS)* | Open-Source (CPML) | **8.7 / 10** | **8.7 / 10** | **8.8 / 10** | **8.8 / 10** | **6 sec** (zero-shot) or **5–10 min** (~15 min train) | Easy built-in Whisper dataset creator and trainer with 17-language support, but 24 kHz output is slightly less crisp than GPT-SoVITS v3 (32/48 kHz) or Fish Speech (44.1 kHz). |
| **#6** | **Orpheus-TTS** *(Llama-3B)* | Open-Source (Apache-2.0) | **8.5 / 10** | **8.8 / 10** | **9.6 / 10** | **7.8 / 10** | **15+ min** (LoRA fine-tune) | Expressive human emotion in English, but heavy VRAM usage and weaker Spanish accent. |
| **#7** | **WhisperSpeech** *(Collabora)* | Open-Source (MIT) | **8.0 / 10** | **8.0 / 10** | **8.5 / 10** | **7.6 / 10** | **15 sec** (zero-shot) | Built by inverting OpenAI Whisper tokens; clean design, but lags behind GPT-SoVITS and Fish Speech in Spanish realism and speaker similarity. |
| **#8** | **Piper TTS** *(OHF-Voice)* | Open-Source (MIT) | **7.7 / 10** | **7.5 / 10** | **7.8 / 10** | **8.0 / 10** | **30–60 min** MP3 · **2–6 hrs** training | Fast on CPU/WASM, but noticeably more robotic than modern neural cloners (#1–#5). |
| *(Ref)* | **ElevenLabs v2.5 / PVC** *(Cloud API)* | Paid Cloud SaaS | *(9.8 / 10)* | *(9.8 / 10)* | *(9.9 / 10)* | *(9.8 / 10)* | **1 min** (Instant) / **30 min** (Pro Clone) | Commercial industry ceiling for EN/ES voice cloning, but closed-source and billed per character. |

---

## 3. Voice Training, Cloning & Audio Preparation Pipeline Comparison

| Training Tool / Pipeline | Pipeline Role | Audio Needed from Video/MP3 | Training Time (1 GPU) | Cross-Lingual? (EN MP3 → ES Speech) | Voice Likeness Rating | How It Works / Accuracy Details |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **1. GPT-SoVITS v2/v3** *(All-in-One)* | **All-in-One:** Slicing + Whisper ASR + Training + TTS | **1 min** (few-shot) to **10 min** (fine-tune) | **5 – 15 min** | ✅ **Yes (Excellent)** | **9.7 / 10** 🏆 | 1-click WebUI/CLI runs **UVR5** (vocal isolation), slices the MP3, runs **faster-whisper** to transcribe it, and trains both the GPT prosody model and SoVITS timbre model. |
| **2. Kokoro (`kokoro-js`) + RVC v2 (`Applio`)** *(Hybrid)* | **2-Stage:** Kokoro generates TTS → RVC v2 converts voice timbre | **5 – 15 min** of clean speech | **15 – 25 min** *(trains RVC model)* | ✅ **Yes (Perfect)** | **9.5 / 10** 🏆 | `kokoro-js` speaks flawless EN (`af_heart`) & ES (`ef_dora`) without hallucinating biology terms; RVC v2 replaces the vocal timbre with the target MP3 speaker. |
| **3. Fish Speech 1.5 LoRA Fine-Tune** *(All-in-One)* | **All-in-One:** VQGAN extraction + Llama LoRA fine-tune + TTS | **10 – 30 sec** (zero-shot) or **10 min** (LoRA) | **0 min** (zero-shot) / **20 min** (LoRA) | ✅ **Yes (Excellent)** | **9.4 / 10** | Zero-shot works immediately from a 15-second `.mp3`. Fine-tuning a LoRA locks in the speaker's accent and cadence across English and Spanish. |
| **4. `kvoicewalk` (Kokoro Style Optimizer)** | **Style Tensor Search** for native `kokoro-js` | **10 – 30 sec** clean WAV | **30 – 90 min** *(search)* | ✅ **Yes** | **5.5 / 10** | Genetic random-walk over Kokoro's 256-dim style vectors to approximate a target WAV's WavLM/Resemblyzer embedding. Produces a native `.bin` voice for `kokoro-js`, but only approximates the voice. |
| **Supporting Tool: `WhisperX` / `faster-whisper`** | **Dataset Prep (Speech-to-Text)** | Any MP3 / Video | Seconds | ✅ 99 languages | **9.8 / 10** *(Transcription)* | Automatically transcribes the reference MP3/video and aligns timestamps so training tools know what words were spoken. |
| **Supporting Tool: `UVR5` / `Demucs`** | **Audio Cleaning (Vocal Isolation)** | Any noisy MP3 / Video | Seconds | Language-agnostic | **9.7 / 10** *(Denoising)* | Strips background music, echo, and noise from a video before feeding the voice into training. |

### 3.1 YouTube Video Background Music & Sound FX Separation Pipeline (Local RTX 4080)

When the reference voice comes from a **YouTube video that contains background music, ambient sound effects, or room reverb**, the voice extraction pipeline executes 5 automated stages locally on the **NVIDIA RTX 4080 (`16 GB VRAM`)**:

| Stage | Tool | Action | Typical Time (RTX 4080) |
| :--- | :--- | :--- | :---: |
| **1. Audio Extraction** | **`yt-dlp` + `ffmpeg`** | Downloads the highest-bitrate original audio stream from the YouTube URL and converts it to lossless `44.1 kHz` WAV. | `~5–10 sec` |
| **2. Pass 1: Music & Sound FX Removal** | **`audio-separator` (`Mel-Band-RoFormer` / `UVR-MDX-Net`)** | Strips background music, synth pads, and cinematic sound effects from the human voice (`SDR > 12 dB`). | `~15–30 sec` |
| **3. Pass 2: Echo & Reverb Removal** | **`UVR-DeEcho-DeReverb`** | Removes room echo and residual background hiss so the isolated vocal is 100% dry (preventing the TTS model from learning background noise). | `~15 sec` |
| **4. VAD Slicing & Transcription** | **`Silero VAD` + `faster-whisper large-v3`** | Slices the isolated vocal into clean `3s–10s` speech clips (dropping silent gaps) and generates aligned text transcripts. | `~20–40 sec` |
| **5. Voice Cloning & `.opus` Synthesis** | **`GPT-SoVITS v3`** | Fine-tunes on the clean vocal clips and synthesizes all `655 × 2` (`EN` + `ES`) tour cues into lightweight `.opus` streams (`~15–20 KB` per cue). | `~3–5 min` |

---

## 4. Browser Delivery & Execution Mode Comparison (Why Pre-Generated GPT-SoVITS v3 Wins)

Because all **655 guided tour subtitle cues** in `learn-biology` are fixed tutorial scripts (not interactive open-ended chat), pre-generating static `.opus` / `.mp3` files with **GPT-SoVITS v3** offline and streaming them on demand via HTML5 `<audio>` avoids all browser WASM/WebGPU bottlenecks:

| Rank | Browser Option / Engine | Execution Mode | **Overall Browser Score** | EN & ES Naturalness | Custom Voice Cloning | Browser Download Size | 3D WebGL FPS Impact | Technical Verdict |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **#1** 🏆 | **GPT-SoVITS v3** *(Pre-Generated `.opus`/`.mp3` Streams)* | **Offline Build → Browser `<audio>`** | **9.7 / 10** | **9.4 / 10** | **9.7 / 10** | **~15–20 KB** per cue *(0 MB model)* | **Zero** (60 FPS) | **Selected Architecture.** Studio-grade cloned voice in EN & ES, instant playback on all mobile/desktop browsers, zero GPU/RAM load on the 3D scene, and zero GPU server cost in Kubernetes. |
| **#2** 🥈 | **`kokoro-js` (Kokoro-82M)** *(+ `kvoicewalk` `.bin`)* | **100% In-Browser** *(WebGPU / WASM)* | **8.8 / 10** | **9.3 / 10** | **5.5 / 10** | **~82 MB** (`q8` ONNX) | **Moderate** *(Shares GPU with Three.js)* | Best true in-browser AI model, but forces an 82 MB download per user and cannot truly clone an MP3 voice on its own. |
| **#3** 🥉 | **Custom VITS / Piper** (`vits-web` / `sherpa-onnx` WASM) | **100% In-Browser** *(WASM CPU)* | **8.1 / 10** | **7.9 / 10** | **8.2 / 10** | **~30 – 60 MB** (`.onnx`) | **Low** *(CPU threads)* | Can fine-tune on an MP3 and run 100% inside browser WASM, but prosody is noticeably more robotic than GPT-SoVITS v3 or Kokoro. |
| **#4** | **`OuteTTS-0.2-500M`** (`transformers.js` WebGPU) | **100% In-Browser** *(WebGPU)* | **7.4 / 10** | **7.5 / 10** | **7.8 / 10** | **~350 MB** (`q4` ONNX) | **High** | Heavy WebGPU VRAM usage alongside Three.js WebGL. |
| **#5** | **Browser `window.speechSynthesis`** *(Web Speech API)* | **100% In-Browser** *(OS built-in voice)* | **6.8 / 10** | **6.5 – 8.0 / 10** | **0 / 10** | **0 KB** | **Zero** (60 FPS) | Useful only as a zero-bandwidth fallback; voice quality varies wildly by OS and cannot use a custom voice. |
| **#6** | **GPT-SoVITS v2** *(Exported to ONNX in WASM)* | **100% In-Browser** *(WASM / WebGPU)* | **3.5 / 10** | **9.1 / 10** | **9.4 / 10** | **~900 MB – 1.2 GB** | **Severe** *(OOM crashes)* | 4 chained ONNX models (~1 GB) exceed mobile/browser tab memory limits. |
| **#7** | **GPT-SoVITS v3** *(Forced into Browser WASM)* | **100% In-Browser** *(Attempted WASM)* | **1.0 / 10** ❌ | **9.4 / 10** | **9.7 / 10** | **~1.8 GB** | **Unusable / Tab Crash** | 5 chained models (~1.8 GB) + 30-step CFM Diffusion loop + BigVGAN takes ~45–90s per sentence on WASM CPU and crashes `wasm32` memory. |

---

## 5. Implementation Summary (Completed)

- [x] **Step 1 — Export Bilingual Tour Cue Manifest ([`scripts/export_tour_cues.ts`](../scripts/export_tour_cues.ts)):**
  - `make export-cues` (`npm run export:cues`) generates `dist/tour_cues_manifest.json` listing all `1,534` (`767 en + 767 es`) guided tour and detail cues (`{ tourRoot, cueId, lang, plainText, speechText, audioPath }`) stripped of `[[...|part]]` markup and normalized for scientific speech synthesis.
- [x] **Step 2 — Batch-Synthesize Bilingual `.opus` Narration via GPT-SoVITS ([`tools/generate_narration_gptsovits.py`](../tools/generate_narration_gptsovits.py)) & Bundle `audio.tar.gz`:**
  - Offline pipeline (`make generate-narration`) conditions **GPT-SoVITS (`s1v3.ckpt` + `s2Gv2ProPlus.pth` + `ERes2NetV2`)** on public-domain deep human narrator reference voices ([`tools/voices/`](../tools/voices/ATTRIBUTION.md)), applies custom Spanish phonemic G2P ([`tools/spanish_g2p.py`](../tools/spanish_g2p.py)), loudness-normalizes, encodes all `1,534` cues into the gitignored `audio/{en,es}/<tourRoot>/<cueId>.opus` folder via `ffmpeg libopus`, and bundles them into a single `audio.tar.gz` archive unpacked automatically during `Dockerfile` builds (`ADD audio.tar.gz /usr/share/nginx/html/`) and local `make unpack-audio`.
- [x] **Step 3 — Wire Lightweight Static `.opus` Narrator ([`src/core/narrator_service.ts`](../src/core/narrator_service.ts)) into [`src/pages/cell_explorer.ts`](../src/pages/cell_explorer.ts):**
  - Connected `createStaticTourNarrator` purely additively via `window.__tour.setNarrator(...)` (`window.__narrator`) with zero modifications to data models or scene logic, streaming `audio/${lang}/${root}/${cue.id}.opus` with next-cue prefetching, `#tNarrBtn` (`N`) mute/unmute, `#tVol` volume persistence, `#tPace` playback rate sync, and instant `EN`/`ES` locale switching.
