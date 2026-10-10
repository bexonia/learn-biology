# 🧬 AGENTS.md — Learn Biology Workspace Guidelines
**Autonomous Standalone Standard for the "Learn Biology" Interactive 3D Educational Platform**
**Repository:** `learn-biology`  
**Aesthetic Style:** The Biology Primer (Editorial Warm Ivory & Modern Typography)  
**Technology Stack:** React 19 · TypeScript · Vite · Three.js WebGL · Kokoro-82M Neural TTS · WebAssembly

---

## 📑 Table of Contents
1. [Project Identity & Complete Repository Isolation](#1-project-identity--complete-repository-isolation)
2. [Design System & Editorial Aesthetic ("The Biology Primer")](#2-design-system--editorial-aesthetic-the-biology-primer)
3. [Component Topology & Application Architecture](#3-component-topology--application-architecture)
4. [Local Development, Build, & Verification Commands](#4-local-development-build--verification-commands)
5. [The Step-by-Step Recipe: Integrating a New Scenario / Organelle](#5-the-step-by-step-recipe-integrating-a-new-scenario--organelle)
   - [Step 1: Domain Typing (`client/src/types/biology.ts`)](#step-1-domain-typing-clientsrctypesbiologyts)
   - [Step 2: 3D Asset Synthesis (`scripts/` & `models/`)](#step-2-3d-asset-synthesis-scripts--models)
   - [Step 3: Three.js Scene Controller (`client/src/core/`)](#step-3-threejs-scene-controller-clientsrccore)
   - [Step 4: Frosted HUD Card (`client/src/components/HUD/`)](#step-4-frosted-hud-card-clientsrccomponentshud)
   - [Step 5: Editorial Inspector Drawer (`client/src/components/Inspector/`)](#step-5-editorial-inspector-drawer-clientsrccomponentsinspector)
   - [Step 6: Scale Navigator Switcher (`ScaleNavigator.tsx`)](#step-6-scale-navigator-switcher-scalenavigatortsx)
   - [Step 7: Master App Integration (`App.tsx`)](#step-7-master-app-integration-apptsx)
   - [Step 8: Guided Tour Integration (`TourBar.tsx`)](#step-8-guided-tour-integration-tourbartsx)
6. [In-Repository Canonical Standards](#6-in-repository-canonical-standards)
7. [Critical Architectural & Biophysical Invariants](#7-critical-architectural--biophysical-invariants)

---

## 1. Project Identity & Complete Repository Isolation

**Learn Biology** is an open, intuitive, and exploratory 3D educational application designed to teach the living principles of cellular life, organelle micro-architecture, and macromolecular nanomachines.

> [!IMPORTANT]
> **Strict Single-Project Autonomy:**
> This repository is **100% self-contained**. It is completely separate from `ecoli-vulkan-engine`, `prokaryote-explorer`, and external native engine binaries.
> All UI components, React hooks, Three.js shaders, 3D GLB assets, and documentation live right here within `learn-biology/`. Never import or rely on paths from outside `learn-biology/`.

---

## 2. Design System & Editorial Aesthetic ("The Biology Primer")

All interfaces in `learn-biology` adhere strictly to **The Biology Primer** editorial design language:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🎨 THE BIOLOGY PRIMER DESIGN TOKENS                                         │
│                                                                             │
│ • Viewport Background:     #FAF8F5 (Warm Ivory Paper)                       │
│ • Dark Editorial Ink:      #1E261C / #263323 (Deep Forest Ink)              │
│ • Editorial Subtitles:     #4A5646 (Warm Muted Olive)                       │
│ • Structural Accents:      #C87550 / #BA4E3B (Warm Terracotta Brick)        │
│ • Luminous Membrane Jade:  #52B788 / #06D6A0 (Seafoam Jade)                 │
│ • Catalytic & Active Sites:#FFB703 / #E9C46A (Warm Pyrite Gold)             │
│ • Exit / Discharge Sites:  #E07A5F (Peach Coral)                            │
│ • Card & Panel Background: rgba(255, 255, 255, 0.94) + 12px blur (Glass)   │
│ • Card Border Standard:    1px solid #E2DACD / #D9CFBF                      │
│ • Primary Typography:      'Libre Franklin' (Titles, Scale Tags, Badges)    │
│ • Secondary Typography:    'Source Sans 3' (Body, Phonetics, Scientific)    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key UI Modules
1. **Header & Scale Navigator (`#editorial-header`):**
   - Left-aligned header with large bold titles and conversational subtitles.
   - Pill-based multi-scale switcher (`#scale-navigator`) displaying emoji icon, organelle name, and physical metric dimensions (e.g. `🦠 Whole Cell (1.5 µm)`, `⚙️ Flagellar Motor (45 nm)`, `🧬 Ribosome Factory (25 nm)`).
2. **Top Toolbar (`#toolbar`):**
   - TTS Voice Selector dropdown (powered by client-side Kokoro-82M neural voices: `af_heart`, `af_bella`, `am_adam`, etc.).
   - Reset Camera, Auto-Rotate, Labels Toggle, and Guided Tour launch buttons.
3. **Right Inspector Drawer (`.motor-inspector-drawer` / 440px wide):**
   - Clean sliding sheet docked to the right edge.
   - Header with category badge (`.motor-insp-badge`), primary name (`.motor-insp-title`), and physical dimensions (`.motor-insp-dims`).
   - Phonetic pronunciation row (`🗣 [phoh-NET-ik]`).
   - Neural TTS Read Aloud button (`🔊 Read Aloud`) with audio pulsing indicator.
   - Dedicated interactive sequential pathway cards (e.g. Three-Chamber tRNA card with 1-click sub-selection).
   - Macromolecular composition and PDB badges.
   - Bottom action button: `⛶ Focus Component in 3D`.
4. **Bottom-Left Floating HUD Card:**
   - Kinetic controls (Pause/Play, +1 Step advancement).
   - Live cycle meter (e.g. Codon Elongation Progress Bar).
   - Simulation rate slider with multiplier readout (`15.0 aa/sec (1.0x)`).
   - **Exploded Subunit Assembly slider** ($0\% \to 100\%$).
   - Anatomical Pieces & Subunits filter grid with quick sub-selector chips (`[🟡 A-Site] [🟢 P-Site] [🟠 E-Site]`).
   - Biophysical key metrics footer (Mass in MDa, physiological turnover rate, energy consumption per bond, error fidelity).
5. **3D Viewport & SVG Leader Lines:**
   - Warm neutral ground with soft contact shadow plane (`contactShadowMesh`).
   - 3D stationary child anchors (`new THREE.Object3D()`) projecting to screen coordinates each frame.
   - SVG hairline leader lines (`stroke-width: 1.3`, colored by biophysical taxonomy) with lettered circular badges ("A", "P", "E", "C", "MS", "Rod") and pulsing indicator rings on the active selection.
   - Floating HTML tag badges (`.motor-tag-badge`) containing embedded interactive subpill buttons (`.trna-subpill-btn`).

---

## 3. Component Topology & Application Architecture

```
learn-biology/
├── AGENTS.md                                 # This autonomous project guide
├── CELLULAR_ELEMENTS_CATALOG.md              # Scenario & organelle catalog with HUD controls
├── CELLULAR_INSPECTOR_BLUEPRINT.md           # 7-step elaboration guide & Meta-Prompt
├── BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md       # Canonical color taxonomy standard
├── README.md                                 # Educational overview & mission
│
├── client/                                   # Modern React 19 + TypeScript + Vite platform
│   ├── package.json                          # Client dependencies (React 19, Three.js, Vite)
│   ├── vite.config.ts                        # Bundler configuration
│   ├── index.html                            # Entry HTML
│   ├── public/models/                        # 3D GLB assets (7k00_assembled.glb, etc.)
│   └── src/
│       ├── App.tsx                           # Master scenario coordinator & layout
│       ├── index.css                         # "The Biology Primer" design system & styles
│       ├── types/biology.ts                  # Type definitions (ScenarioType, OrganelleData, etc.)
│       ├── core/
│       │   ├── cellViewer.js                 # Scenario 1: Whole Cell 3D scene (1.5 µm)
│       │   ├── flagellarMotor.ts             # Scenario 2: Flagellar Motor 3D scene (45 nm)
│       │   ├── ribosomeTranslation.ts        # Scenario 3: 70S Ribosome 3D scene (25 nm)
│       │   └── voiceService.js               # Client-side Kokoro-82M neural TTS engine
│       └── components/
│           ├── Header/ScaleNavigator.tsx     # Scenario level switcher
│           ├── Toolbar/CellToolbar.tsx       # Top utility toolbar (TTS voice, tour, labels)
│           ├── Tour/TourBar.tsx              # Pedagogical guided tour step bar
│           ├── HUD/                          # Floating HUD cards
│           │   ├── CellScaleCard.tsx
│           │   └── MicrocompartmentCard.tsx
│           ├── Inspector/
│           │   └── CellInspectorDrawer.tsx   # Level 1 inspector drawer
│           ├── Motor/
│           │   ├── MotorHUDCard.tsx          # Level 2 motor controls HUD
│           │   └── MotorInspectorDrawer.tsx  # Level 2 motor inspector drawer
│           └── Ribosome/
│               ├── RibosomeHUDCard.tsx       # Level 3 ribosome controls HUD
│               └── RibosomeInspectorDrawer.tsx # Level 3 ribosome inspector drawer
│
├── scripts/                                  # Blender 5.2 Python asset synthesis scripts
│   ├── generate_7k00_assembled_pieces.py     # Ribosome Cryo-EM pieces exporter
│   ├── generate_7cgo_flagellar_motor.py      # Motor basal body exporter
│   └── generate_primer_cell_hq.py            # Whole cell cutaway mesh exporter
│
└── models/                                   # Pre-exported GLB macromolecular models
    ├── 7k00_assembled.glb                    # 70S ribosome assembly (2.5 MDa)
    ├── 7cgo_flagellar_motor.glb              # Flagellar motor basal body (11 MDa)
    └── prokaryote_cell.glb                   # Whole bacterium cutaway (1.5 µm)
```

---

## 4. Local Development, Build, & Verification Commands

All commands are run from `learn-biology/`:

```powershell
# 1. Install dependencies
pnpm --prefix client install

# 2. Run the Vite development server (Port 5173)
pnpm --prefix client dev

# 3. Build & validate production bundle with TypeScript checking
pnpm --prefix client run build

# 4. Optional: Run the standalone root cutaway viewer (Port 8080)
python -m http.server 8080

# 5. Optional: Headless Blender 5.2 mesh synthesis
& "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python scripts/generate_7k00_assembled_pieces.py
```

---

## 5. The Step-by-Step Recipe: Integrating a New Scenario / Organelle

To add any new cellular nanomachine or organelle (e.g. **ATP Synthase `6RKW`**, **SecYEG Translocon `3J46`**, or **Respiratory Complex I `7Z7V`**), follow this exact 8-step recipe:

### Step 1: Domain Typing (`client/src/types/biology.ts`)
1. Extend `ScenarioType`:
   ```typescript
   export type ScenarioType = 'cell' | 'motor' | 'ribosome' | 'atp_synthase';
   ```
2. Define the component metadata interface:
   ```typescript
   export interface ATPSynthaseComponentData {
     name: string;
     badge?: string;
     dims?: string;
     proteins?: string;
     pdb?: string;
     desc?: string;
     role?: string;
   }
   ```

### Step 2: 3D Asset Synthesis (`scripts/` & `models/`)
1. Fetch the PDB structure in Blender via Molecular Nodes (`mn.entities.Molecule.fetch(pdb_id="6RKW")`).
2. Separate into individually raycastable, selectable child objects named:
   $$\text{Piece\_}\langle\text{ScenarioID}\rangle\text{\_}\langle\text{SubunitName}\rangle$$
   *(e.g. `Piece_ATP_F1_Alpha`, `Piece_ATP_F1_Beta`, `Piece_ATP_Central_Rotor`, `Piece_ATP_Fo_C_Ring`, `Piece_ATP_Stator_Bracket`).*
3. Export to [`client/public/models/<id>.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models).

### Step 3: Three.js Scene Controller (`client/src/core/`)
Create `client/src/core/<scenarioName>.ts` (modeled after `ribosomeTranslation.ts`):
1. **Scene Graph & Materials:** Load GLB, assign fresh `MeshStandardMaterial` with `vertexColors: true`, `roughness: 0.35`, `metalness: 0.12`.
2. **Exploded Assembly Slider:** Implement `setExplodedProgress(t)` ($t \in [0.0, 1.0]$) translating each subunit along its authentic biological dissociation vector $\vec{v}_{\text{dissoc}}$.
3. **Dynamic Centroid Camera Framing:** Calculate the midpoint of all active pieces and dynamically scale the camera viewing radius so all exploded pieces remain centered in view.
4. **Stationary 3D Anchors:** Attach child `new THREE.Object3D()` anchors to functional centers.
5. **2D SVG Leader Overlay:** In `updateLandmarksAndLeaders()`, project anchors to screen space and render SVG polylines, lettered pins ("$\alpha$", "$\beta$", "$c$"), and pulsing indicator rings.
6. **Subpill Badge Integration:** Render 3D HTML tags containing clickable subpills `[🟡 Subunit A] [🟢 Subunit B]` that focus the camera.

### Step 4: Frosted HUD Card (`client/src/components/HUD/`)
Create `client/src/components/<Scenario>/<Scenario>HUDCard.tsx` in "The Biology Primer" editorial style:
- Kinetic rate slider with multiplier.
- Exploded Assembly slider ($0\% \to 100\%$).
- Subunit filter chips with nested sub-selectors.
- Bottom key biophysical metrics footer (Mass, turnover rate, energy, error fidelity).

### Step 5: Editorial Inspector Drawer (`client/src/components/Inspector/`)
Create `client/src/components/<Scenario>/<Scenario>InspectorDrawer.tsx`:
- Header: Category badge, primary title, dimensions.
- Phonetic pronunciation guide row (`🗣 [phoh-NET-ik]`).
- Neural TTS Read Aloud button (`🔊 Read Aloud`).
- **Interactive Multi-Chamber Pathway Card:** Clickable state cards (e.g. Boyer Three-State Cycle $O \to L \to T$) that focus the 3D camera.
- **Mandatory 5-Stage Explanatory Trace Stepper Card:** Interactive causal chain walkthrough (`EXPLANATION_STAGES`) with stage badges, titles, descriptions, Start/End trace buttons, and active indicator.
- Macromolecular composition and PDB badges.
- Biological mechanism narrative.
- `⛶ Focus Component in 3D` button.

### Step 6: Scale Navigator Switcher (`ScaleNavigator.tsx`)
In [`client/src/components/Header/ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx):
- Add the new button pill:
  ```tsx
  <button
    className={`scale-nav-btn ${scenario === 'atp_synthase' ? 'active' : ''}`}
    onClick={() => onSelectScenario('atp_synthase')}
  >
    <span className="scale-icon">⚡</span> ATP Synthase <span className="scale-dim">(10 nm)</span>
  </button>
  ```
- Add the main title and educational subtitle for the scenario.

### Step 7: Master App Integration (`App.tsx`)
In [`client/src/App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx):
- Mount the 3D canvas container when the active scenario matches.
- Wire up state handlers: `onSelectPart`, `onFocusComponent`, `onExplodedChange`, `onSpeedChange`.
- Implement `play<Scenario>StoryStep(stepNumber)` orchestrating subtitles, Kokoro voice playback, camera dolly transitions, and the 750ms–1000ms pedagogical observation pause.

### Step 8: Guided Tour Integration (`TourBar.tsx`)
- Define the ordered tour stops in `<SCENARIO>_TOUR_STOPS`.
- Hook into `TourBar.tsx` for step-by-step auto-narration walkthroughs.

---

## 6. In-Repository Canonical Standards

The following documents reside directly in the root of `learn-biology/` and serve as the immutable sources of truth:

- **[`CELLULAR_ELEMENTS_CATALOG.md`](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_ELEMENTS_CATALOG.md):** Complete registry of all structures across the cell, inter-element biological iteration (donors $\to$ machine $\to$ consumers), and HUD simulation sliders.
- **[`CELLULAR_INSPECTOR_BLUEPRINT.md`](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_INSPECTOR_BLUEPRINT.md):** 8-step engineering blueprint, mandatory 5-Stage Explanatory Trace engine, and the Universal Meta-Prompt Template.
- **[`BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md`](file:///c:/Users/devcd/GenProjects/learn-biology/BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md):** Strict hex color palette standard for every biophysical class.

---

## 7. Critical Architectural & Biophysical Invariants

1. **No Monolithic Single-Mesh Models:** Every complex must be decomposed into raycastable pieces named `Piece_<Scenario>_<Subunit>`.
2. **Strict Color Taxonomy:** Never use arbitrary colors or gray fallbacks. Catalytic pockets = `#FFB703`, Inner membrane = `#06D6A0`, Outer membrane = `#0077B6`, RNA = `#7209B7`.
3. **No Empty Wireframe Fallbacks:** Active sites and functional pockets must render solid, volumetric geometry with cofactors and membrane slabs.
4. **Native Selectable HTML in Drawers:** Both `#left-drawer` and `#right-drawer` must retain `user-select: text !important` so students can highlight text, copy notes, and search terms.
5. **Mandatory 5-Stage Explanatory Trace ("How It Works"):** Every scenario and macromolecular inspector must implement the 5-stage causal chain walkthrough (`EXPLANATION_STAGES`) with camera dollies, subunit state highlights, Kokoro neural voice narration, subtitles, and Inspector Drawer stepper card controls.
6. **Zero TypeScript Errors:** All client code must pass `tsc -b && vite build` cleanly.
