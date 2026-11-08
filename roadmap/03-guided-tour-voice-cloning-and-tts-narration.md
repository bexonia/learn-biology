# 03 — Guided Tour Voice Cloning & Bilingual (`EN`/`ES`) TTS Narration

**Iteration:** `03` (Custom Voice Training & Lightweight Pre-Generated Tour Audio Streaming)  
**Status:** ⏸️ **Pending / Planned**  
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

## 5. Implementation Plan (Next Steps)

- [ ] **Step 1 — Export Bilingual Tour Cue Manifest (`scripts/export_tour_cues.ts`):**
  - Generate `dist/tour_cues_manifest.json` listing all `655 × 2` (`en` and `es`) guided tour and detail cues (`{ tourRoot, cueId, lang, plainText }`) stripped of `[[...|part]]` markup.
- [ ] **Step 2 — Train Custom Voice & Batch-Generate `.opus` Audio via GPT-SoVITS v3:**
  - Extract clean 24–48 kHz mono speech from the reference video/MP3 (`ffmpeg` + `UVR5`), auto-transcribe with `faster-whisper`, fine-tune **GPT-SoVITS v3** (~10 minutes on GPU), and synthesize `audio/en/<tourRoot>/<cueId>.opus` and `audio/es/<tourRoot>/<cueId>.opus` (`~15–20 KB` per file).
- [ ] **Step 3 — Wire `NarratorService` into [`src/pages/cell_explorer.ts`](../src/pages/cell_explorer.ts):**
  - Connect [`window.__tour.setNarrator({ speak, stop, setVolume })`](../src/pages/cell_explorer.ts#L4738) to stream `audio/${lang}/${root}/${cue.id}.opus` with automatic next-cue prefetching and graceful fallback to `window.speechSynthesis` if an audio asset is absent.
