# 🧬 AGENTS.md — Learn Biology Workspace Guidelines
**Standalone Platform for Interactive 3D Cell Biology & Nanomachines**
**Repository:** `learn-biology`  
**Status:** Autonomous Standalone Single-Project Standard

---

## 📑 Table of Contents
1. [Project Mission & Standalone Autonomy](#1-project-mission--standalone-autonomy)
2. [Local Development & Service Commands](#2-local-development--service-commands)
3. [Canonical Standards & Local Reference Documents](#3-canonical-standards--local-reference-documents)
4. [Step-by-Step Architecture: How to Integrate a New Part of the Cell](#4-step-by-step-architecture-how-to-integrate-a-new-part-of-the-cell)
   - [Phase A: 3D Asset Sourcing & Subunit Mesh Decomposition](#phase-a-3d-asset-sourcing--subunit-mesh-decomposition)
   - [Phase B: Core 3D Scene Controller (`client/src/core/`)](#phase-b-core-3d-scene-controller-clientsrccore)
   - [Phase C: UI Components & HUD Cards (`client/src/components/`)](#phase-c-ui-components--hud-cards-clientsrccomponents)
   - [Phase D: Main Application Wiring (`client/src/App.tsx`)](#phase-d-main-application-wiring-clientsrcapptsx)
   - [Phase E: Build Verification & Playwright Visual Testing](#phase-e-build-verification--playwright-visual-testing)
5. [Critical Biophysical & Engineering Invariants (Rules Never to Break)](#5-critical-biophysical--engineering-invariants-rules-never-to-break)
6. [Repository Topology & File Layout](#6-repository-topology--file-layout)

---

## 1. Project Mission & Standalone Autonomy

**Learn Biology** is an open, interactive 3D platform designed to **teach the principles of cellular biology and molecular nanomachinery** in an intuitive, visual, and exploratory format.

> [!IMPORTANT]
> **Complete Repository Autonomy (Single-Project Mode):**
> This repository is 100% self-contained. It does **NOT** depend on `ecoli-vulkan-engine`, external backend servers, or external databases.
> All application logic, React 19 components, Three.js shaders, 3D GLB assets, and documentation standards reside right here inside `learn-biology/`.

---

## 2. Local Development & Service Commands

### 1. Modern Interactive Web Application (Primary Dev Server)
The modern full-featured application (React 19 + TypeScript + Vite + Three.js) lives in `client/`:
```powershell
# Install dependencies (from workspace root)
pnpm --prefix client install

# Start Vite live development server (Port 5173)
pnpm --prefix client dev

# Run TypeScript check & production bundle build
pnpm --prefix client run build
```
Access the application in the browser at: **`http://localhost:5173/`**.

### 2. Standalone Root Fallback Server (Level 1 Whole Cell)
For lightweight inspection of the root cutaway without React:
```powershell
python -m http.server 8080
```
Access at: **`http://localhost:8080/`**.

### 3. Headless Blender 5.2 Asset Synthesis (CLI Mode)
To batch-generate or rebuild 3D molecular meshes directly from Python scripts without opening the Blender GUI:
```powershell
& "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python scripts/generate_7k00_assembled_pieces.py
```

---

## 3. Canonical Standards & Local Reference Documents

Whenever you need to inspect element definitions, mathematical formulas, or color standards, consult these three local documents located directly in the root of `learn-biology/`:

1. **Master Element Registry & Flux Network:** [`CELLULAR_ELEMENTS_CATALOG.md`](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_ELEMENTS_CATALOG.md)
   - Comprehensive catalog of all structures across the 6 biophysical scales of *E. coli* K-12.
   - Complete inter-element biological iteration (upstream donors $\to$ catalytic machine $\to$ downstream consumers).
   - Real-time interactive simulation sliders (`iterationControls`) for every component.
   - Phased development roadmap (Phase 1 Baseline $\to$ Phase 2 Bioenergetics & Translocation $\to$ Phase 3 Envelopes $\to$ Phase 4 Replication $\to$ Phase 5 Cytoskeleton).

2. **Elaboration Protocol & Meta-Prompt Blueprint:** [`CELLULAR_INSPECTOR_BLUEPRINT.md`](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_INSPECTOR_BLUEPRINT.md)
   - The 7-step engineering protocol for turning any catalog element into a functional 3D inspector.
   - Subunit decomposition, biophysical exploded dissociation math ($\vec{v}_{\text{dissoc}}$), dynamic centroid framing.
   - Universal Meta-Prompt Template ready to generate code and assets for any target complex.
   - Complete working reference case studies for $F_1F_0$-ATP Synthase (`6RKW`) and SecYEG Translocon (`3J46`).

3. **Color Taxonomy Standard:** [`BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md`](file:///c:/Users/devcd/GenProjects/learn-biology/BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md)
   - Strict hex color mapping by biophysical class (Catalytic sites = `#FFB703`, Inner membrane = `#06D6A0`, Outer membrane = `#0077B6`, RNA = `#7209B7`, etc.).

---

## 4. Step-by-Step Architecture: How to Integrate a New Part of the Cell

When adding a new cellular structure (e.g. $F_1F_0$-ATP Synthase `6RKW`, SecYEG Translocon `3J46`, Complex I `7Z7V`), follow this 5-phase protocol:

### Phase A: 3D Asset Sourcing & Subunit Mesh Decomposition
1. **Fetch authentic RCSB PDB coordinates:** Import into Blender via Molecular Nodes (`mn.entities.Molecule.fetch`).
2. **Decompose into functional pieces:** Never create a single merged mesh. Separate chains or functional domains into distinct objects named:
   $$\text{Piece\_}\langle\text{ElementID}\rangle\text{\_}\langle\text{SubunitName}\rangle$$
   *(Example: `Piece_ATP_F1_Alpha`, `Piece_ATP_F1_Beta`, `Piece_ATP_Fo_C_Ring`).*
3. **Export GLB model:** Save to [`client/public/models/<id>.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models) or [`models/<id>.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/models).

### Phase B: Core 3D Scene Controller (`client/src/core/`)
Create a dedicated controller (e.g. `client/src/core/atpSynthase.ts`):
1. **Three.js Scene Graph & PBR Materials:**
   ```typescript
   child.material = new THREE.MeshStandardMaterial({
     vertexColors: child.geometry.attributes.color ? true : false,
     roughness: 0.35,
     metalness: 0.12,
     side: THREE.DoubleSide
   });
   ```
2. **Biophysical Exploded Assembly Math:**
   Implement `setExplodedProgress(t)` where each subunit translates along its natural dissociation vector:
   $$\vec{P}_i(t) = \vec{P}_{i,\text{orig}} + t \cdot \vec{v}_{\text{dissoc}, i}$$
3. **Dynamic Centroid Framing:**
   Update camera target to the average center of all active subunits so pieces never drift out of view during exploded mode:
   ```typescript
   this.target.copy(pA).add(pB).multiplyScalar(0.5);
   this.spherical.radius = baseRadius + (this.explodedProgress || 0) * deltaRadius;
   this.updateCameraPosition();
   ```
4. **Stationary 3D Anchors & 2D SVG Hairline Leaders:**
   - Attach child `new THREE.Object3D()` anchors to functional subunit centers.
   - In `updateLandmarksAndLeaders()`, project anchors to screen space and render SVG polylines with lettered pins ("$\alpha$", "$\beta$", "$c$") and pulsing indicator rings.
   - Embed clickable subpills `[🟡 Subunit A] [🟢 Subunit B]` directly within the 3D tag badge.

### Phase C: UI Components & HUD Cards (`client/src/components/`)
1. **Add to Scale Navigator:** In [`client/src/components/Header/ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), add the new scale option button.
2. **Create `<Component>HUDCard.tsx`:** Left-drawer controls containing:
   - Live simulation sliders (rotation speed, proton-motive force, turgor pressure).
   - Exploded view slider ($0\% \to 100\%$).
   - Quick-select subunit filter chips with sub-selector buttons.
3. **Create `<Component>InspectorDrawer.tsx`:** Right-drawer containing:
   - Scientific classification, dimensions, stoichiometric formula.
   - **Interactive Sequential Pathway Card** (e.g. Three-State Boyer Cycle $O \to L \to T$) with 1-click camera targeting.
   - **Biochemical I/O Circuit Card** (Upstream donor, Molecular inputs, Molecular outputs, Downstream consumers, Energy currency, $k_{\text{cat}}$ turnover).
   - **Client-Side Neural Voice (TTS):** Integrated Kokoro-82M read-aloud button with phonetic guides.

### Phase D: Main Application Wiring (`client/src/App.tsx`)
In [`client/src/App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx):
1. Import the new scene controller and UI components.
2. Mount the canvas container when the active scale matches.
3. Connect state handlers: `onSelectPart`, `onFocusComponent`, `onExplodedChange`, and `onSpeedChange`.

### Phase E: Build Verification & Playwright Visual Testing
1. **Compile test:** Run `pnpm --prefix client run build` to verify zero TypeScript errors.
2. **Browser test:** Reload `http://localhost:5173/`, verify 3D tag badges, leader lines, exploded slider at $0\%$ and $100\%$, and capture visual screenshots.

---

## 5. Critical Biophysical & Engineering Invariants (Rules Never to Break)

1. **Strict Biological Color Taxonomy:**
   Never invent arbitrary colors or use monochrome/gray fallbacks. Always reference [`BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md`](file:///c:/Users/devcd/GenProjects/learn-biology/BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md):
   - Catalytic active sites / ATP pockets: Golden Amber (`#FFB703`)
   - Inner membrane bilayer: Luminous Jade (`#06D6A0`)
   - Outer membrane / LPS: Deep Marine Teal (`#0077B6`)
   - RNA backbones: Amethyst Violet (`#7209B7`) / Cyan (`#00F5D4`)
2. **Decomposed Subunits Only (No Monolithic Merged Meshes):**
   Every complex must consist of individually selectable, raycastable child meshes named `Piece_<Element>_<Subunit>`.
3. **No Empty Wireframe Spheres:**
   Active sites and functional pockets must render solid, volumetric geometry with authentic membrane slabs and cofactors.
4. **Native Selectable HTML in Drawers:**
   Both `#left-drawer` and `#right-drawer` must retain `user-select: text !important` so students can copy scientific terms and take notes. The 3D viewport canvas retains `user-select: none !important`.
5. **Clean TypeScript Builds:**
   All additions in `client/src/` must compile with zero errors under `tsc -b && vite build`.

---

## 6. Repository Topology & File Layout

```
learn-biology/
├── AGENTS.md                                # This autonomous project guide
├── CELLULAR_ELEMENTS_CATALOG.md             # Master 6-scale E. coli registry & flux network
├── CELLULAR_INSPECTOR_BLUEPRINT.md          # 7-step elaboration guide & Meta-Prompt
├── BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md      # Canonical color taxonomy standard
├── README.md                                # Public educational overview & mission
│
├── client/                                  # Modern React 19 + TypeScript + Vite platform
│   ├── package.json                         # Dependencies (Three.js, React 19, Vite)
│   ├── vite.config.ts                       # Vite bundler configuration
│   ├── index.html                           # Single-page application entry point
│   ├── public/models/                       # 3D GLB assets (7k00_assembled.glb, etc.)
│   └── src/
│       ├── App.tsx                          # Master application coordinator
│       ├── types/biology.ts                 # Strongly-typed biology domain definitions
│       ├── core/
│       │   ├── cellViewer.js                # Level 1: Whole Cell 3D scene
│       │   ├── flagellarMotor.ts            # Level 2: Flagellar Rotary Motor
│       │   └── ribosomeTranslation.ts       # Level 3: 70S Translating Ribosome
│       └── components/
│           ├── Header/ScaleNavigator.tsx    # Multi-scale level switcher
│           ├── MotorHUDCard.tsx             # Flagellar motor kinetics HUD
│           ├── MotorInspectorDrawer.tsx     # Flagellar motor scientific drawer
│           ├── Ribosome/RibosomeHUDCard.tsx # Ribosome kinetics HUD & tRNA selectors
│           └── Ribosome/RibosomeInspectorDrawer.tsx # Three-chamber tRNA pathway card
│
├── scripts/                                 # Procedural Blender 5.2 asset builders
│   ├── generate_7k00_assembled_pieces.py    # Ribosome Cryo-EM pieces exporter
│   ├── generate_7cgo_flagellar_motor.py     # Motor basal body exporter
│   └── generate_primer_cell_hq.py           # Whole cell cutaway generator
│
└── models/                                  # Source GLB macromolecular models
    ├── 7k00_assembled.glb                   # 70S ribosome assembly (2.5 MDa)
    ├── 7cgo_flagellar_motor.glb             # Flagellar motor basal body (11 MDa)
    └── prokaryote_cell.glb                  # Whole bacterium cutaway (1.5 µm)
```
