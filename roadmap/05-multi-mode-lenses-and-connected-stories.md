# 05 — Multi-Mode Explanation Lenses (`Simple`, `Story`, `Blueprint`, `Scientific`), Connected Cellular Stories & Multi-Voice Narration

**Iteration:** `05` (Reactive 4-Mode Reading Lenses, End-to-End Supply-Chain Storytelling & Public-Domain Multi-Voice Narration in `EN` & `ES`)  
**Status:** ✅ **Completed & Verified**  
**Parent Index:** [`roadmap/README.md`](./README.md)  
**Previous Step:** [`04-optional-user-accounts-and-course-progress-sync.md`](./04-optional-user-accounts-and-course-progress-sync.md)

---

## 1. Executive Summary & Completed Goals

Implemented a **reactive 4-Mode Explanation Lens** (`Simple` · `Story` · `Blueprint` · `Scientific`) paired with **pre-generated Public-Domain (`CC0` / LibriVox) Multi-Voice Narration** across `learn-biology` (`https://learn.bexonia.com`) so scientists, engineers, students, and young learners can read and listen to every interactive 3D WebGL model in the style and voice that fits them best:

1. **Four Distinct Lenses Without Scene Reloads (`0` WebGL Overhead):**
   - **`Simple` (`Sencillo`):** 10-second everyday intuition in 1–2 sentences with minimal jargon.
   - **`Story` (`Historia` — Default):** Connected narrative prose where every whole cell or virus forms an overarching plot and every internal organelle or macromolecule acts as a chapter — naturally weaving **where its inputs arrived from**, **the physical transformation inside**, and **which downstream neighbors spend or recycle its outputs next**.
   - **`Blueprint` (`Esquema`):** Systems-architecture dependency circuit (`Role` · `Arrives from` · `Inside` · `Delivers to` · `Closes the loop`) for visual and engineering-minded learners.
   - **`Scientific` (`Científico`):** Dense, direct quantitative reference (dimensions, subunit stoichiometry, enzyme complexes, electrochemical gradients, and experimental PDB accessions) with zero narrative framing.
2. **100% Coverage Across All `208` Explorer Nodes & `149` Realistic 3D Parts (`EN` + `ES`):**
   - Every one of the `208` zoomable `NODES` in [`cell_explorer.ts`](../src/pages/cell_explorer.ts) and every one of the `149` interactive 3D parts across all `9` standalone realistic pages (`animal_cell_realistic.html`, `plant_cell_realistic.html`, `fungal_cell_realistic.html`, `prokaryote_cell_realistic.html`, `bacteriophage_realistic.html`, `coronavirus_realistic.html`, `hiv_realistic.html`, `adenovirus_realistic.html`, `tmv_realistic.html`) includes bespoke entries for all 4 modes in both **English (`EN`)** and **Spanish (`ES`)**.
3. **Public-Domain (`CC0` / LibriVox / Common Voice) Multi-Voice Narration (`3` English + `2` Spanish) with Automatic Preset & Custom Voice Selector:**
   - **Five Public-Domain Studio Reference Voices** ([`tools/voices/ATTRIBUTION.md`](../tools/voices/ATTRIBUTION.md)) synthesized offline into `7,995` `.opus` clips (`3,835` Guided Tour clips across all 10 tours + `4,160` Explorer Lens clips across all `208` nodes × `4` modes):
     - **English Voice 1 (`v1`, David Clarke — LibriVox `CC0`):** Preset narrator for **`Scientific`** mode (scientists & biologists inspecting specifics).
     - **English Voice 2 (`v2`, Peter Yearsley — LibriVox `CC0`):** Preset narrator for **`Blueprint`** mode (engineers & systems thinkers).
     - **English Voice 3 (`v3`, Martin Geeson — LibriVox `CC0`):** Preset narrator for **`Simple`** & **`Story`** modes (kids, newcomers & curious learners).
     - **Spanish Voice 1 (`latam`, Víctor Villarraza — LibriVox `CC0`):** Multi-sample Latinoamérica studio narrator (`tools/voices/es_latam_villarraza/`, fine-tuned on `34.6 min` / `371` studio clips via native `F5-Spanish`); preset for **`Sencillo`** & **`Historia`** modes.
     - **Spanish Voice 2 (`spain`, Castilian Baritone — Common Voice `CC0`):** Multi-sample España narrator (`tools/voices/es_spain_baritone/`); preset for **`Esquema`** & **`Científico`** modes.
   - **Automatic Preset vs Custom Voice Lock (`#voiceSelect` + `#voicePresetBtn` in `EN` & `ES`):**
     - By default (`voicePreference = 'auto'` / `spanishVoicePreference = 'auto'`, `Preset` / `Preajuste` active), switching explanation styles automatically redirects narration to that style's preset voice (`EN`: `Simple`/`Story` → `v3`, `Blueprint` → `v2`, `Scientific` → `v1`; `ES`: `Sencillo`/`Historia` → `latam`, `Esquema`/`Científico` → `spain`).
     - Selecting a specific voice (`v1`/`v2`/`v3` in English, or `Latinoamérica`/`España` in Spanish) locks that custom voice across all modes and Guided Tours until the user clicks **`Preset` / `Preajuste`** to re-enable automatic per-mode voice switching.
   - **Explorer Read-Aloud (`#lensSpeakBtn` `🔊 Listen` / `⏹ Stop`):** Plays the active mode's narration for any of the `208` Explorer nodes on demand and seamlessly switches audio if the user changes mode, voice, or language mid-playback.
4. **Interactive Inline Character Links & Supply-Chain Navigation:**
   - Inline `[[Label|nodeId]]` references and upstream (`← From`) / downstream (`Next →`) supply-chain chips highlight structures on hover and navigate directly to the linked organelle, protein complex, or molecule on click.
5. **Automatic Persistence (`CourseProgressManager` + `I18nService`):**
   - Reactive `modeRef` (`AtomRef<ExplanationMode>`) and `voiceRef` (`AtomRef<VoicePreference>`) in [`i18n.ts`](../src/core/i18n.ts) synchronized with [`CourseProgressManager`](../src/core/progress_service.ts) (`bexonia_learn_progress` cookie `m` & `vp` fields + `localStorage` `learnBioMode` & `learnBioVoice`).

---

## 2. Implemented Architecture (`src/content/`, `src/core/i18n.ts` & `src/core/narrator_service.ts`)

```mermaid
flowchart LR
  Bar["#lensBar Segmented Control\nSimple · Story · Blueprint · Scientific"] --> ModeRef["I18nService.modeRef\n(AtomRef<ExplanationMode>)"]
  VBar["#lensVoiceBar & #tNarr\nVoice Selector + Preset + Listen"] --> VoiceRef["I18nService.voiceRef & spanishVoiceRef\n(EN: v1/v2/v3 · ES: latam/spain)"]
  ModeRef --> Resolve["resolveEnglishVoice & resolveSpanishVoice\nPreset Auto-Switch vs Custom Lock"]
  VoiceRef --> Resolve
  Resolve --> Narrator["StaticTourNarrator (.opus)\n3,835 Tour Clips + 4,160 Lens Clips"]
  ModeRef --> Persist["CourseProgressManager\nCookie + localStorage"]
  VoiceRef --> Persist
  ModeRef --> ExplorerDesc["Explorer #desc & #io\n208 Node + 149 Part Lenses"]
```

### Modular Content & Audio Layout
- [`src/content/types.ts`](../src/content/types.ts) — Strongly typed `ExplanationMode`, `EnglishVoiceId`, `SpanishVoiceId`, `VoicePreference`, `SpanishVoicePreference`, `PRESET_VOICE_BY_MODE`, `PRESET_SPANISH_VOICE_BY_MODE`, `resolveEnglishVoice`, `resolveSpanishVoice`, `NodeLensEntry`, `PartLensEntry`, `PartBlueprintLens`, and `PartFlowLink`.
- [`src/content/parser.ts`](../src/content/parser.ts) — Zero-dependency parser converting paragraph breaks and `[[Label|nodeId]]` tokens into safe DOM token trees (no `innerHTML` injection).
- [`src/core/narrator_service.ts`](../src/core/narrator_service.ts) — Multi-voice `.opus` URL resolver (`audio/en/{v1,v2,v3}/...`, `audio/es/{latam,spain}/...`, `audio/lenses/en/{v1,v2,v3}/{mode}/{nodeId}.opus`, `audio/lenses/es/{latam,spain}/{mode}/{nodeId}.opus`), `speakLens()` read-aloud controller, next-cue prefetcher, and scientific speech normalizer.
- Domain modules:
  - [`src/content/lenses_animal.ts`](../src/content/lenses_animal.ts) (`71` nodes + `23` animal cell parts)
  - [`src/content/lenses_plant_fungal.ts`](../src/content/lenses_plant_fungal.ts) (`48` nodes + `29` plant & `25` fungal parts)
  - [`src/content/lenses_prokaryote.ts`](../src/content/lenses_prokaryote.ts) (`35` nodes + `21` *E. coli* parts)
  - [`src/content/lenses_phage_dna_viruses.ts`](../src/content/lenses_phage_dna_viruses.ts) (`33` nodes + `19` T4, `8` Adenovirus & `6` TMV parts)
  - [`src/content/lenses_enveloped_viruses.ts`](../src/content/lenses_enveloped_viruses.ts) (`21` nodes + `9` SARS-CoV-2 & `9` HIV-1 parts)
- Sharded Git-tracked audio archives (`< 45 MB` each, extracted into `audio/` via `make unpack-audio` and `Dockerfile` `ADD`):
  - `audio.tar.gz` — `2,301` English Guided Tour `.opus` clips (`v1`, `v2`, `v3`)
  - `audio_tours_es.tar.gz` — `1,534` Spanish Guided Tour `.opus` clips (`latam`, `spain`)
  - `audio_lenses_v1_a.tar.gz` & `audio_lenses_v1_b.tar.gz` — `832` English Voice 1 (`Scientific` preset) node lens `.opus` clips
  - `audio_lenses_v2_a.tar.gz` & `audio_lenses_v2_b.tar.gz` — `832` English Voice 2 (`Blueprint` preset) node lens `.opus` clips
  - `audio_lenses_v3_a.tar.gz` & `audio_lenses_v3_b.tar.gz` — `832` English Voice 3 (`Simple` & `Story` preset) node lens `.opus` clips
  - `audio_lenses_es_latam_a.tar.gz`, `audio_lenses_es_latam_bp.tar.gz` & `audio_lenses_es_latam_sci.tar.gz` — `832` Spanish Voice 1 (`latam`) node lens `.opus` clips
  - `audio_lenses_es_spain_a.tar.gz`, `audio_lenses_es_spain_bp.tar.gz` & `audio_lenses_es_spain_sci.tar.gz` — `832` Spanish Voice 2 (`spain`) node lens `.opus` clips

---

## 3. Verification Gates (`tests/verify_all.ts`)

- **Completeness & Distinctness:** Verified all `208` Explorer nodes and all `149` realistic 3D parts define non-empty, mode-distinct entries for `simple`, `story`, `blueprint`, and `scientific` in both `en` and `es`.
- **Multi-Voice Preset & Custom Lock Logic:** Verified `PRESET_VOICE_BY_MODE` (`EN`: `simple`/`story` → `v3`, `blueprint` → `v2`, `scientific` → `v1`) and `PRESET_SPANISH_VOICE_BY_MODE` (`ES`: `simple`/`story` → `latam`, `blueprint`/`scientific` → `spain`), custom voice override, `Preset` / `Preajuste` reset back to `'auto'`, and all `7,995` `.opus` files (`OggS` headers).
- **Headless Chrome WebGL E2E:** Verified live switching across all 4 modes, automatic preset voice redirection in `EN` & `ES`, custom voice locking + `Preset` reset, and HTTP `200` `OggS` streaming across all 5 voices (`EN v1/v2/v3` + `ES latam/spain`).
