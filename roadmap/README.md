# Bexonia Learn Biology (`learn-biology`) — Architectural Roadmap

This directory contains the step-by-step architectural and feature roadmap for **`learn-biology`** (`https://learn.bexonia.com`). Each document outlines a specific phase, its design and technical context, verification gates, and implementation steps.

## Execution Phases

| Phase | Document | Description | Status |
| :--- | :--- | :--- | :--- |
| **01** | [01 — Interactive 3D Biology & Effect v4 Architecture](./01-interactive-3d-biology-and-effect-v4-architecture.md) | WebGL2 procedural 3D models (`10` biological models, `208` zoomable nodes, `10` guided tours) and Effect-TS v4 service architecture (`SimulationState`, `CameraService`, `TourService`, `AudioService`). | ✅ Completed |
| **02** | [02 — Bilingual i18n (EN / ES) & Reactive Locale Switching](./02-bilingual-i18n-and-reactive-locale-switching.md) | 100% English (`EN`) and Spanish (`ES`) localization across all `208` nodes, `10` guided tours (`655` unique cues), `318` 3D tags, `476` 3D anchors, `131` parts, `268` recipes, and `57` molecule labels with hot-swappable reactive state. | ✅ Completed |
| **03** | [03 — Guided Tour Voice Cloning & TTS Narration](./03-guided-tour-voice-cloning-and-tts-narration.md) | Offline **GPT-SoVITS** voice-conditioned pipeline (`scripts/export_tour_cues.ts` → `tools/generate_narration_gptsovits.py`) pre-generating all `1,534` bilingual (`767 EN + 767 ES`) `.opus` narration files streamed via `createStaticTourNarrator` (`window.__tour.setNarrator`). | ✅ Completed |
| **04** | [04 — Optional User Accounts, Auto-Renewed Cookies & Per-Model Course Progress Sync](./04-optional-user-accounts-and-course-progress-sync.md) | 100% optional, non-blocking registration (`email`, optional reference `full_name`, `scrypt` password hash), in-memory + auto-renewing cookies (`bexonia_learn_progress` & `learn_session`), per-cell/virus step checkpoint persistence (`course_progress`), and **`↺ Reset` (Start from beginning)** controls. | ✅ Completed |
| **05** | [05 — Multi-Mode Explanation Lenses, Connected Cellular Stories & Multi-Voice Narration](./05-multi-mode-lenses-and-connected-stories.md) | Reactive 4-mode reading lenses (`Simple` · `Story` · `Blueprint` · `Scientific`) in `EN` and `ES` across all `208` Explorer nodes and `149` live 3D cellular/viral parts, paired with `4` Public-Domain (`CC0`) voices (`6,396` `.opus` clips) and Preset/Custom voice selection. | ✅ Completed |

---

## Completed & Planned Milestones Checklist

- [x] **10 Interactive 3D Procedural Models (`Phase 01`)**: Eukaryotic Cell, Prokaryotic Cell, T4 Bacteriophage, SARS-CoV-2, HIV-1, Influenza A, Ebola Virus, Zika Virus, Rabies Virus, and Measles Virus.
- [x] **10 Guided Narrative Tours (`Phase 01`)**: 44 chapters, 151 steps, and 655 unique / 767 total timed subtitle cues with `[[label|part]]` interactive 3D mesh highlighting.
- [x] **Effect-TS v4 Core Services (`Phase 01`)**: Type-safe `I18nService`, `SimulationState`, `CameraService`, `TourService`, and `AudioService`.
- [x] **100% Bilingual Localization (`EN` / `ES`) (`Phase 02`)**: Complete Spanish dictionaries in `es_nodes.ts`, `es_tours.ts`, and `es_phrases.ts` verified by automated unit and headless Chrome WebGL E2E checks (`tests/verify_all.ts`).
- [x] **GPT-SoVITS Voice-Cloned Pre-Generated `.opus` Tour Narration (`Phase 03`)**: Offline pipeline (`make export-cues && make generate-narration`) conditioning **GPT-SoVITS (`s1v3` + `v2ProPlus`)** on deep human studio/Mozilla Common Voice reference voices and serving `1,534` (`767 EN + 767 ES`) static `.opus` streams with next-cue prefetching.
- [x] **Optional User Accounts, In-Memory/Cookie Auto-Renewal & Per-Organism Course Resume + Reset (`Phase 04`)**: Lightweight Node.js 22 backend (`src/server/auth_progress_server.ts`) + client `CourseProgressManager` (`src/core/progress_service.ts`) + **`↺ Reset` (`#tReset` / Start from beginning)** button verified end-to-end in `tests/verify_all.ts`.
- [x] **Multi-Mode Explanation Lenses, Connected Supply-Chain Stories & Public-Domain Multi-Voice Narration (`Phase 05`)**: Hot-swappable `Simple`, `Story` (default), `Blueprint`, and `Scientific` reading lenses in `EN` and `ES` across all `208` Explorer nodes and `149` realistic 3D structures (`src/content/`), plus `6,396` pre-generated `.opus` clips across `3` English Public-Domain voices (`v1` Scientific, `v2` Blueprint, `v3` Simple/Story) and `1` Spanish Public-Domain voice (`v7`) with automatic Preset switching and custom voice lock.
