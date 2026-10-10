# AGENTS.md - Learn Biology Workspace Guidelines

This file provides workspace instructions, architectural rules, and operational guidelines for Antigravity agents working within `learn-biology`.

---

## 🧬 Project Mission & Repository Isolation

**Learn Biology** is an open, client-side interactive 3D web platform dedicated to **teaching the principles of biology to everyone** in an intuitive, visual, and exploratory format.

> [!IMPORTANT]
> **Complete Repository Isolation:**
> This repository is 100% self-contained. It has **no runtime dependencies** on:
> - `ecoli-vulkan-engine`
> - `prokaryote-explorer`
> - External native Vulkan binaries
> - External backend servers or databases
>
> All models, scripts, vendor libraries, styles, and WebAssembly modules necessary to run and test the application are located right here inside `learn-biology/`.

---

## 🏛️ Architecture & Component Topology

```
learn-biology/
├── index.html                   # Core single-page application entry point
├── viewer.js                    # Level 1: Whole Cell 3D scene (Three.js WebGL)
├── flagellarMotor.js            # Level 2: Flagellar Rotary Motor & Cryo-EM exploded view
├── voiceService.js              # Client-side Kokoro-82M neural voice synthesis
├── style.css                    # Editorial layout & typography (The Biology Primer)
├── build_assets.py              # Automated one-command asset compiler
├── scripts/                     # Procedural Blender 5.2 generators
│   ├── generate_primer_cell_hq.py
│   ├── generate_primer_cell.py
│   ├── generate_7cgo_flagellar_motor.py
│   └── generate_7k00_assembled_pieces.py
├── prokaryote_cell.blend        # Blender source scene
├── src/
│   └── lib.rs                   # Rust source code for WASM orbit & landmark projection math
├── readme_images/               # Curated documentation screenshots (prokaryote_cell_overview.png, flagellar_motor_tail.png)
├── assets/                      # Diagrams, reference cryo-EM blueprints, UI icons
└── vendor/
    ├── three.min.js             # Three.js (WebGL renderer)
    └── GLTFLoader.js            # GLTF 2.0 / GLB mesh loader
```

---

## 🚫 Git Asset & Binary Hygiene Rules

To prevent repository bloat and maintain clean source control:
1. **Never commit generated `.glb` or `.wasm` binaries.** They are compiled locally from source via `python build_assets.py`.
2. **Never commit temporary Blender backup files (`*.blend1`, `*.blend2`).**
3. **Do not commit loose screenshot images to root.** Only curated pedagogical documentation images belong in `readme_images/`.
4. **The master Blender file ([`prokaryote_cell.blend`](file:///prokaryote_cell.blend)) MUST be tracked and preserved**, as it serves as the foundational 3D modeling source.

---

## 🚀 Running & Developing Locally

### 1. Starting the Local Web Server
Since the application uses standard ES Modules (`type="module"`) and loads `.glb` / `.wasm` binary files, it must be served over HTTP:

```powershell
# Using Python:
python -m http.server 8080

# Or using Node.js:
npx serve . -p 8080
```
Open **`http://localhost:8080/`** in Chrome, Edge, Safari, or Firefox.

### 2. Building Assets from Source
```powershell
python build_assets.py
```
This automatically compiles `src/lib.rs` $\rightarrow$ `wasm/orbit_engine.wasm` and runs Blender headlessly to generate `prokaryote_cell.glb`.

---

## ⚖️ Critical Development Invariants

1. **Frontend Script Cache-Busting:**
   Whenever modifying `viewer.js`, `flagellarMotor.js`, `voiceService.js`, or `style.css`, always increment the query parameter in [`index.html`](file:///index.html) (e.g. `viewer.js?v=learn_bio_v1`) so browsers and test runners immediately load the newest code without caching issues.

2. **No Monolithic Build Chains:**
   Keep the project lightweight, pedagogical, and approachable. Do not inject complex Webpack/Vite/Babel configurations unless explicitly requested by the user. Native ES modules and vendored Three.js keep startup instant.

3. **Leader Line Tracking Stability:**
   The SVG leader lines that connect 2D labels to 3D cellular structures are calculated each frame by calling `orbit_engine.wasm` (`project_landmark()`). When adding new landmark points, update `LANDMARKS` in [`viewer.js`](file:///viewer.js).

4. **Multi-Scale Separation:**
   The application features two distinct visual modes toggled via `#scale-navigator`:
   - **Level 1 (Whole Cell, 1.5 µm):** Managed by [`viewer.js`](file:///viewer.js).
   - **Level 2 (Flagellar Motor Nanomachine, 45 nm):** Managed by [`flagellarMotor.js`](file:///flagellarMotor.js).
   Ensure state, lights, and event listeners cleanly hand off when switching levels.

5. **Hardware Rendering & ANGLE Diagnostics:**
   WebGL draw calls from Three.js are translated at runtime by Chromium's **ANGLE** (Almost Native Graphics Layer Engine) into **DirectX 11/12** (Windows), **Metal** (macOS), or **Vulkan** (Linux/Android).
   - To inspect GPU translation status during development: Navigate to `chrome://gpu` or `edge://gpu`.
   - To force a specific GPU backend for testing/debugging driver issues in Chrome:
     ```powershell
     chrome.exe --use-angle=d3d11
     chrome.exe --use-angle=vulkan
     ```
