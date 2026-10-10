# 🧬 Learn Biology — Interactive 3D Cell & Nanomachines

An open, interactive 3D platform designed to **teach the principles of biology to everyone** in an intuitive, visual, and exploratory way. Discover the micro-architecture of life—from the whole prokaryotic cell down to the atomic Cryo-EM rotor nanomachines that propel bacteria.

![Prokaryote Cell Overview](readme_images/prokaryote_cell_overview.png)

---

## 🎯 Educational Mission

Traditional biology textbooks show flat, two-dimensional diagrams that make cellular life seem static. In reality, a single bacterium is an active, ultra-dense biochemical factory governed by biophysical forces, molecular motors, and selective membranes.

**Learn Biology** brings these structures to life with:
* **Interactive 3D Cutaways:** Orbit, pan, and zoom through cellular envelopes, peptidoglycan walls, plasma membranes, ribosomes, plasmids, and the circular nucleoid DNA.
* **Multi-Scale Educational Levels:**
  * **Level 1 — Whole Cell ($1.5\,\mu\text{m}$):** Observe the bacterium in 3/4 perspective with responsive leader line annotations anchored directly to the cell envelopes, peptidoglycan walls, plasma membrane, ribosomes, plasmids, and the circular nucleoid DNA.
  * **Level 2 — Flagellar Rotary Motor ($45\,\text{nm}$):** Inspect nature's rotary engine with dynamic CCW (run) and CW (tumble) rotation, proton motive force streaming, and an **exploded view slider**.
  * **Level 3 — Bacterial 70S Ribosome Translation Factory ($25\,\text{nm}$):** Explore the macromolecular 2.5 MDa ribozyme machine, step-by-step mRNA elongation kinetics (A, P, and E tRNA sites), codon translocation, polypeptide exit tunnel, and subunit disassembly.
  * **Level 4 — Bacterial $F_1F_0$-ATP Synthase & Rotary Bioenergetic Dynamo ($10\,\text{nm}$):** Explore the 540 kDa rotary machine coupling periplasmic proton-motive force ($\Delta p \approx -140\,\text{mV}$) to mechanical drive shaft rotation and Paul Boyer's Nobel Prize-winning three-state binding-change cycle ($\text{Open} \to \text{Loose} \to \text{Tight}$) synthesizing ATP at ~90% thermodynamic efficiency.
* **Client-Side Neural Voice Narration & Live Subtitles:** Integrated text-to-speech powered by Kokoro-82M running directly in the browser via ONNX Runtime Web—reading scientific explanations aloud with real-time closed captions and animated soundwave HUD previewing speech 0.5s in advance.
* **Cinematic Guided Tours & Explanatory Traces:** Guided pedagogical walkthroughs directing students through each organelle, macromolecular subunit, and catalytic step.

![Flagellar Rotary Motor and Tail Architecture](readme_images/flagellar_motor_tail.png)

![Bacterial 70S Ribosome Translation Factory](readme_images/ribosome_translation_factory.png)

![Bacterial F1F0-ATP Synthase Rotary Bioenergetic Dynamo](readme_images/atp_synthase_rotary_dynamo.png)

---

## 🏗️ Architecture & Technology Stack

Learn Biology is engineered to be **100% client-side, zero-install, and zero-backend**:

```
                       [ Student's Browser ]
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
         [ Visual Layer ]                [ Logic & Compute ]
    • React 19 + TypeScript + Vite  • Rust WebAssembly (orbit_engine.wasm)
    • Three.js WebGL (PBR materials)  - Camera orbit momentum & damping
    • SVG Leader Lines Overlay        - 3D-to-2D screen coordinate projection
    • 3D Geometry Sources:          • Scene Controllers:
      - prokaryote_cell.blend         - cellViewer.ts (Whole Cell)
      - scripts/generate_primer_cell_hq.py - flagellarMotor.ts (Rotary Motor)
                                      - ribosomeTranslation.ts (Ribosome)
                                      - atpSynthase.ts (ATP Synthase)
                                    • Kokoro-82M TTS & Live Subtitles
                                 │
                                 ▼
              [ Browser Hardware Abstraction ]
         Google ANGLE (Almost Native Graphics Layer Engine)
         Translates WebGL into native OS GPU backends:
         • Windows: DirectX 11 / Direct3D 12
         • macOS:   Apple Metal
         • Linux:   Vulkan 1.3
                                 │
                                 ▼
                     [ Physical GPU Hardware ]
```

---

## 🚀 Quick Start (Running Locally)

The client application is built with React 19, TypeScript, and Vite, managed with **`pnpm`**:

### 1. Install Dependencies & Launch Dev Server

```powershell
cd client
pnpm install
pnpm run dev
```

### 2. Open in Your Browser
Navigate to **`http://localhost:5173/`** in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.

---

## 🛠️ Building Assets from Source

To keep the repository clean and avoid git binary bloat, compiled `.glb` 3D files and `.wasm` binaries are built on demand from source.

Run the automated one-command build script:

```powershell
python build_assets.py
```

This script:
1. **Compiles the Rust WebAssembly Engine:**
   Runs `rustc --target wasm32-unknown-unknown -O --crate-type=cdylib src/lib.rs -o wasm/orbit_engine.wasm`.
2. **Exports the 3D Cell Geometry from Blender:**
   Executes Blender headlessly using [`scripts/generate_primer_cell_hq.py`](file:///scripts/generate_primer_cell_hq.py) and [`prokaryote_cell.blend`](file:///prokaryote_cell.blend) to generate `prokaryote_cell.glb`.

---

## 📁 Repository Structure

```
learn-biology/
├── client/                      # React 19 + TypeScript + Vite interactive web app
│   ├── src/                     # Components, hooks, types, and Three.js scenes
│   ├── public/                  # 3D GLB models, WASM binaries, and audio models
│   ├── package.json             # Project manifest (pnpm package manager)
│   └── pnpm-lock.yaml           # Deterministic pnpm dependency lockfile
├── readme_images/               # Curated pedagogical screenshots for documentation
│   ├── prokaryote_cell_overview.png
│   ├── flagellar_motor_tail.png
│   └── ribosome_translation_factory.png
├── assets/                      # Reference diagrams and scientific blueprints
├── models/                      # Output directory for generated 3D models
├── wasm/                        # Output directory for compiled WebAssembly binary
├── build_assets.py              # One-command asset compiler (Blender + Rust WASM)
├── scripts/                     # Procedural Blender 5.2 Python generators
│   ├── generate_primer_cell_hq.py       # Whole Cell (1.5 µm) high-fidelity cutaway
│   ├── generate_primer_cell.py          # Legacy cell prototype
│   ├── generate_7cgo_flagellar_motor.py # Flagellar Motor & Stator Ring (45 nm)
│   └── generate_7k00_assembled_pieces.py# 70S Translating Ribosome (25 nm)
├── prokaryote_cell.blend        # Blender master source scene
├── src/
│   └── lib.rs                   # Rust source code for WASM orbit & projection math
├── .agents/                     # Antigravity agent skills, rules & MCP config
└── AGENTS.md                    # Guidelines for Antigravity AI agents
```

---

## 🎨 Biophysical Color Taxonomy

The visual style follows strict biophysical coloring conventions:
* **Outer Membrane LPS:** Deep Marine Blue (`#0077B6`)
* **Peptidoglycan Cell Wall:** Warm Terracotta (`#E76F51`)
* **Inner Plasma Membrane:** Vivid Jade / Seafoam Green (`#06D6A0`)
* **C-Ring Switch Complex:** Vibrant Orange (`#FF7B00`)
* **Central Drive Shaft & Stators:** Golden Amber (`#FFD166`)
* **Universal Joint Hook:** Royal Violet (`#9D4EDD`)

---

## 📜 License

This project is licensed under the MIT License — free for educational, academic, and non-commercial use worldwide.
