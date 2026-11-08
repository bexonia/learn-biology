# Bexonia Learn Biology (`learn-biology`) — Architectural Roadmap

This directory contains the step-by-step architectural and feature roadmap for **`learn-biology`** (`https://learn.bexonia.com`). Each document outlines a specific phase, its design and technical context, verification gates, and implementation steps.

## Execution Phases

| Phase | Document | Description | Status |
| :--- | :--- | :--- | :--- |
| **01** | [01 — Interactive 3D Biology & Effect v4 Architecture](./01-interactive-3d-biology-and-effect-v4-architecture.md) | WebGL2 procedural 3D models (`10` biological models, `208` zoomable nodes, `10` guided tours) and Effect-TS v4 service architecture (`SimulationState`, `CameraService`, `TourService`, `AudioService`). | ✅ Completed |
| **02** | [02 — Bilingual i18n (EN / ES) & Reactive Locale Switching](./02-bilingual-i18n-and-reactive-locale-switching.md) | 100% English (`EN`) and Spanish (`ES`) localization across all `208` nodes, `10` guided tours (`655` unique cues), `318` 3D tags, `476` 3D anchors, `131` parts, `268` recipes, and `57` molecule labels with hot-swappable reactive state. | ✅ Completed |
| **03** | [03 — Guided Tour Voice Cloning & TTS Narration](./03-guided-tour-voice-cloning-and-tts-narration.md) | Pre-generated static `.opus` bilingual voice narration (`EN` + `ES`) trained via **GPT-SoVITS v3** (and evaluated against Fish Speech 1.5, CosyVoice 2, Kokoro-82M WASM, and Piper VITS WASM), streamed on demand through `window.__tour.setNarrator(...)`. | ⏸️ Planned |
| **04** | [04 — Optional User Accounts & Per-Model Course Progress Sync](./04-optional-user-accounts-and-course-progress-sync.md) | 100% optional, non-blocking registration (`email`, optional reference `full_name`, and `scrypt` password hash) + database persistence (`course_progress`) so users who want to sign in can track their courses and resume the exact chapter & step on each of the `10` cells and viruses. | ⏸️ Planned |

---

## Completed & Planned Milestones Checklist

- [x] **10 Interactive 3D Procedural Models (`Phase 01`)**: Eukaryotic Cell, Prokaryotic Cell, T4 Bacteriophage, SARS-CoV-2, HIV-1, Influenza A, Ebola Virus, Zika Virus, Rabies Virus, and Measles Virus.
- [x] **10 Guided Narrative Tours (`Phase 01`)**: 44 chapters, 151 steps, and 655 unique / 767 total timed subtitle cues with `[[label|part]]` interactive 3D mesh highlighting.
- [x] **Effect-TS v4 Core Services (`Phase 01`)**: Type-safe `I18nService`, `SimulationState`, `CameraService`, `TourService`, and `AudioService`.
- [x] **100% Bilingual Localization (`EN` / `ES`) (`Phase 02`)**: Complete Spanish dictionaries in `es_nodes.ts`, `es_tours.ts`, and `es_phrases.ts` verified by automated unit and headless Chrome WebGL E2E checks (`tests/verify_all.ts`).
- [ ] **Custom Voice Cloning & Pre-Generated `.opus` Tour Narration (`Phase 03`)**: Train a custom voice model in **GPT-SoVITS v3** from reference audio, batch-generate `655 × 2` (`EN` + `ES`) `.opus` cues (~20 MB total per language, ~15–20 KB streamed per cue), and wire static streaming with optional `kokoro-js` WebGPU/WASM fallback.
- [ ] **Optional User Accounts & Per-Organism Course Resume (`Phase 04`)**: Lightweight Node.js 22 backend + 3-table database (`users` with `email` + optional `full_name`, `course_progress`, `user_sessions`) so visitors can explore 100% freely without login or optionally register to track and resume their tutorials across all 10 biological models.
