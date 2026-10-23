# 🧬 Learn Biology — Interactive 3D Cell & Nanomachines

An open, interactive 3D platform designed to **teach the principles of biology to everyone** in an intuitive, visual, and exploratory way. Discover the micro-architecture of life—from the whole prokaryotic cell down to the atomic Cryo-EM rotor nanomachines that propel bacteria.

![Prokaryote Cell Overview](readme_images/prokaryote_cell_overview.png)

---

## 🎯 Educational Mission

Traditional biology textbooks show flat, two-dimensional diagrams that make cellular life seem static. In reality, a single bacterium is an active, ultra-dense biochemical factory governed by biophysical forces, molecular motors, and selective membranes.

**Learn Biology** brings these structures to life with:
* **Interactive 3D Cutaways:** Orbit, pan, and zoom through cellular envelopes, peptidoglycan walls, plasma membranes, ribosomes, plasmids, and the circular nucleoid DNA.
* **Multi-Scale Educational Levels (13 Interactive 3D Scenarios Built):**
  * **Level 1 — Whole Cell ($1.5\,\mu\text{m}$):** Observe the bacterium in 3/4 perspective with responsive leader line annotations anchored directly to the capsule, outer membrane, peptidoglycan wall, periplasm, plasma membrane, cytoplasm, ribosomes, plasmids, and the circular nucleoid DNA.
  * **Level 2 — Flagellar Rotary Motor ($45\,\text{nm}$, PDB `7CGO`):** Inspect nature's rotary engine with dynamic CCW (run) and CW (tumble) rotation, MotAB stator proton streaming, and an **exploded view slider**.
  * **Level 3 — Bacterial 70S Ribosome Translation Factory ($25\,\text{nm}$, PDB `7K00`):** Explore the macromolecular 2.5 MDa ribozyme machine, step-by-step mRNA elongation kinetics (A, P, and E tRNA sites), EF-Tu / EF-G GTPase ratcheting, polypeptide exit tunnel, and subunit disassembly.
  * **Level 4 — Bacterial $F_1F_0$-ATP Synthase & Rotary Bioenergetic Dynamo ($10\,\text{nm}$, PDB `6OQR`):** Explore the 540 kDa rotary machine coupling periplasmic proton-motive force ($\Delta p \approx -140\,\text{mV}$) to mechanical drive shaft rotation and Paul Boyer's three-state binding-change cycle ($\text{Open} \to \text{Loose} \to \text{Tight}$).
  * **Level 5 — Respiratory Complex I Proton Pump ($18\,\text{nm}$, PDB `4HEA`):** Inspect L-shaped NADH:ubiquinone oxidoreductase with FMN hydride transfer, the 7 Fe-S cubane electron wire, ubiquinone reduction, and the 4-channel antiporter piston drive.
  * **Level 6 — SecYEG Protein Translocon & SecA ATPase ($12\,\text{nm}$, PDB `3J46`):** Observe the hourglass transmembrane channel, SecA two-helix finger power-stroke, helical plug displacement, and the lateral gate partitioning transmembrane helices into the lipid bilayer.
  * **Level 7 — BAM $\beta$-Barrel Assembly Machine ($14\,\text{nm}$, PDB `5D0O`):** Explore the outer-membrane $\beta$-barrel folder (BamABCDE), the unstable BamA $\beta1\text{–}\beta16$ lateral seam, membrane thinning, and substrate budding.
  * **Level 8 — LptA–G Trans-Envelope LPS Bridge ($22\,\text{nm}$, PDB `5IV9`/`4Q35`):** Trace lipopolysaccharide extraction from the inner membrane via the $\text{LptB}_2\text{FGC}$ ABC transporter across the periplasmic $\text{LptA}$ $\beta$-jellyroll slide to the outer-membrane $\text{LptDE}$ translocon.
  * **Level 9 — Bacterial RNA Polymerase Holoenzyme ($15\,\text{nm}$, PDB `6ALH`):** Inspect $\sigma^{70}$ promoter recognition (`-35`/`-10` elements), transcription bubble melting, the $\text{Mg}^{2+}$ catalytic triad, and abortive-to-productive elongation with rifampicin inhibition.
  * **Level 10 — DNA Polymerase III Replisome ($24\,\text{nm}$, PDB `5FKV`):** Explore DnaB helicase unwinding, DnaG primase RNA priming, asymmetric leading/lagging trombone synthesis, $\beta_2$ sliding clamps, and the $\tau_3\delta\delta'\chi\psi$ clamp loader.
  * **Level 11 — DNA Gyrase Topoisomerase II ($16\,\text{nm}$, PDB `6RKW`):** Watch $\text{GyrA}_2\text{GyrB}_2$ wrap a positive DNA supercoil, cleave the double-stranded G-segment gate, pass the T-segment via ATP hydrolysis, and respond to fluoroquinolone (ciprofloxacin) trapping.
  * **Level 12 — FtsZ Z-Ring Cytokinetic Divisome ($30\,\text{nm}$, PDB `6UNX`):** Observe GTP-driven FtsZ protofilament treadmilling, FtsA/ZipA membrane tethering, MinCDE polar oscillation, and FtsWI septal peptidoglycan constriction.
  * **Level 13 — MreB Rod-Shape Elongasome ($20\,\text{nm}$, PDB `4CZJ`):** Explore antiparallel ATP-actin-like MreB double protofilaments sensing negative membrane curvature to guide the RodA–PBP2 circumferential cell-wall synthesis complex.
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
    • 3D Geometry Sources:          • 13 Scene Controllers (client/src/core/):
      - prokaryote_cell.blend         - cellViewer.ts (Whole Cell)
      - scripts/generate_*.py (13x)   - flagellarMotor.ts, ribosomeTranslation.ts
                                      - atpSynthase.ts, respiratoryComplexI.ts
                                      - secYEGTranslocon.ts, bamComplex.ts
                                      - lptBridge.ts, rnaPolymerase.ts
                                      - dnaReplisome.ts, dnaGyrase.ts
                                      - ftsZDivisome.ts, mreBElongasome.ts
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
2. **Exports the 3D Cell & Nanomachine Geometry from Blender:**
   Executes Blender headlessly across the procedural generators in [`scripts/`](file:///scripts/) to generate the `.glb` models in `client/public/models/`.

---

## 📁 Repository Structure

```
learn-biology/
├── client/                      # React 19 + TypeScript + Vite interactive web app
│   ├── src/                     # Components, hooks, types, and 13 Three.js scene controllers
│   ├── public/                  # 3D GLB models, WASM binaries, and audio models
│   ├── package.json             # Project manifest (pnpm package manager)
│   └── pnpm-lock.yaml           # Deterministic pnpm dependency lockfile
├── readme_images/               # Curated pedagogical screenshots for documentation
│   ├── prokaryote_cell_overview.png
│   ├── flagellar_motor_tail.png
│   ├── ribosome_translation_factory.png
│   └── atp_synthase_rotary_dynamo.png
├── assets/                      # Reference diagrams and scientific blueprints
├── models/                      # Output directory for generated 3D models
├── wasm/                        # Output directory for compiled WebAssembly binary
├── build_assets.py              # One-command asset compiler (Blender + Rust WASM)
├── scripts/                     # Procedural Blender 5.2 Python generators (13 scenes)
│   ├── generate_primer_cell_hq.py          # Level 1: Whole Cell (1.5 µm) cutaway
│   ├── generate_7cgo_flagellar_motor.py    # Level 2: Flagellar Motor & Stators (45 nm)
│   ├── generate_7k00_assembled_pieces.py   # Level 3: 70S Translating Ribosome (25 nm)
│   ├── generate_6oqr_atp_synthase.py       # Level 4: F1F0-ATP Synthase (10 nm)
│   ├── generate_4hea_complex_i.py          # Level 5: Respiratory Complex I (18 nm)
│   ├── generate_3j46_secyeg.py             # Level 6: SecYEG Protein Translocon (12 nm)
│   ├── generate_5d0o_bam_complex.py        # Level 7: BAM β-Barrel Machine (14 nm)
│   ├── generate_lpt_bridge.py              # Level 8: LptA–G LPS Bridge (22 nm)
│   ├── generate_6alh_rnap.py               # Level 9: RNA Polymerase Holoenzyme (15 nm)
│   ├── generate_5fkv_pol_iii_replisome.py  # Level 10: DNA Pol III Replisome (24 nm)
│   ├── generate_6rkw_dna_gyrase.py         # Level 11: DNA Gyrase Topoisomerase II (16 nm)
│   ├── generate_6unx_ftsz_divisome.py      # Level 12: FtsZ Cytokinetic Z-Ring (30 nm)
│   └── generate_4czj_mreb_elongasome.py    # Level 13: MreB Rod-Shape Elongasome (20 nm)
├── CELLULAR_ELEMENTS_CATALOG.md # Master registry of prokaryotic structures & flux networks
├── CELLULAR_INSPECTOR_BLUEPRINT.md # 8-step engineering protocol for 3D cellular inspectors
├── roadmap/                     # Isolated per-element execution folders & checkbox tracker
│   ├── README.md                # Master [x] / [ ] progress tracker & agent execution guide
│   ├── 00_OPEN_SOURCE_TOOLCHAIN_SPEC.md # RCSB PDB, PubChem, RDKit, Blender & Molecular Nodes spec
│   └── 01_..16_*/README.md      # 16 self-contained element execution specifications
├── prokaryote_cell.blend        # Blender master source scene
├── src/
│   └── lib.rs                   # Rust source code for WASM orbit & projection math
├── .agents/                     # Antigravity agent skills, rules & MCP config
└── AGENTS.md                    # Guidelines for Antigravity AI agents
```

---

## 🗺️ Prokaryotic Cell Modeling Status & Visual Verification Suite

> **🔬 Full Visual Verification & Side-by-Side Comparison Suite (29 / 29 Scenarios Verified):**
> - **Interactive Browser HTML Dashboard (Open Directly):** [**`verification/index.html`**](verification/index.html) or [**`verification.html`**](verification.html)
> - **Markdown Verification Index:** [**`verification/README.md`**](verification/README.md)
> - Includes all 29 **Expected Goodsell Reference + RCSB PDB vs. Live 3D Browser Result** comparison plates (`2400×1380`), official RCSB PDB structures, `1920×1080` `.mp4` comparison videos ([`master_13_elements_comparison.mp4`](verification/master_13_elements_comparison.mp4)), interactive wipe comparators, and per-element architectural recommendations.

### ✅ Phase 0: Baseline Scenarios (Levels 1–13)
| Level | Scenario ID | Biological Structure / Nanomachine | PDB Reference | Side-by-Side Plate | Comparison Video | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **L1** | `cell` | Whole Prokaryotic Cell Cutaway ($1.5\,\mu\text{m}$) | *Biology Primer* Fig. 3 & 4 | [`comparison_cell.png`](verification/01_cell/comparison_cell.png) | [`comparison_cell.mp4`](verification/01_cell/comparison_cell.mp4) | ✅ Verified |
| **L2** | `motor` | Flagellar Rotary Motor & Stator Ring | `7CGO` / `6YKM` | [`comparison_motor.png`](verification/02_motor/comparison_motor.png) | [`comparison_motor.mp4`](verification/02_motor/comparison_motor.mp4) | ✅ Verified |
| **L3** | `ribosome` | 70S Translating Ribosome & Polysome | `7K00` | [`comparison_ribosome.png`](verification/03_ribosome/comparison_ribosome.png) | [`comparison_ribosome.mp4`](verification/03_ribosome/comparison_ribosome.mp4) | ✅ Verified |
| **L4** | `atp_synthase` | $F_1F_0$-ATP Synthase Bioenergetic Dynamo | `6OQR` / `6RKW` | [`comparison_atp_synthase.png`](verification/04_atp_synthase/comparison_atp_synthase.png) | [`comparison_atp_synthase.mp4`](verification/04_atp_synthase/comparison_atp_synthase.mp4) | ✅ Verified |
| **L5** | `complex_i` | Respiratory Complex I Proton Pump | `7Z7V` / `4HEA` | [`comparison_complex_i.png`](verification/05_complex_i/comparison_complex_i.png) | [`comparison_complex_i.mp4`](verification/05_complex_i/comparison_complex_i.mp4) | ✅ Verified |
| **L6** | `secyeg` | SecYEG Translocon & SecA ATPase | `3J46` / `6ITC` | [`comparison_secyeg.png`](verification/06_secyeg/comparison_secyeg.png) | [`comparison_secyeg.mp4`](verification/06_secyeg/comparison_secyeg.mp4) | ✅ Verified |
| **L7** | `bam` | BAM $\beta$-Barrel Assembly Machine | `5D0O` | [`comparison_bam.png`](verification/07_bam/comparison_bam.png) | [`comparison_bam.mp4`](verification/07_bam/comparison_bam.mp4) | ✅ Verified |
| **L8** | `lpt` | LptA–G Trans-Envelope LPS Bridge | `9P7P` / `6MIT` | [`comparison_lpt.png`](verification/08_lpt/comparison_lpt.png) | [`comparison_lpt.mp4`](verification/08_lpt/comparison_lpt.mp4) | ✅ Verified |
| **L9** | `rnap` | Bacterial RNA Polymerase Holoenzyme | `6C9Y` / `6ALH` | [`comparison_rnap.png`](verification/09_rnap/comparison_rnap.png) | [`comparison_rnap.mp4`](verification/09_rnap/comparison_rnap.mp4) | ✅ Verified |
| **L10** | `pol_iii` | DNA Polymerase III Replisome | `5FKV` | [`comparison_pol_iii.png`](verification/10_pol_iii/comparison_pol_iii.png) | [`comparison_pol_iii.mp4`](verification/10_pol_iii/comparison_pol_iii.mp4) | ✅ Verified |
| **L11** | `gyrase` | DNA Gyrase Topoisomerase II | `1AB4` / `2XCT` | [`comparison_gyrase.png`](verification/11_gyrase/comparison_gyrase.png) | [`comparison_gyrase.mp4`](verification/11_gyrase/comparison_gyrase.mp4) | ✅ Verified |
| **L12** | `ftsz` | FtsZ Cytokinetic Divisome Ring | `1FSZ` / `6UNX` | [`comparison_ftsz.png`](verification/12_ftsz/comparison_ftsz.png) | [`comparison_ftsz.mp4`](verification/12_ftsz/comparison_ftsz.mp4) | ✅ Verified |
| **L13** | `mreb` | MreB Rod-Shape Elongasome | `1JCG` / `4CZJ` | [`comparison_mreb.png`](verification/13_mreb/comparison_mreb.png) | [`comparison_mreb.mp4`](verification/13_mreb/comparison_mreb.mp4) | ✅ Verified |

### ✅ Phase 1–4: Prokaryote Expansion Roadmap Scenarios (Levels 14–29)
| Level | Scenario ID | Biological Structure / Nanomachine | PDB Reference | Goodsell Diagram | RCSB PDB Render | Side-by-Side Plate | Comparison Video | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **L14** | `expressome` | Coupled RNAP–NusG–70S Expressome | `6X9Q` | [`expected_expressome.png`](verification/14_expressome/expected_expressome.png) | [`rcsb_6X9Q.jpg`](verification/14_expressome/rcsb_6X9Q.jpg) | [`comparison_expressome.png`](verification/14_expressome/comparison_expressome.png) | [`comparison_expressome.mp4`](verification/14_expressome/comparison_expressome.mp4) | ✅ Verified |
| **L15** | `envelopes` | Gram(−), Gram(+) & Acid-Fast Cell Envelopes | `2OMF` / `3VMA` | [`expected_envelopes.png`](verification/15_envelopes/expected_envelopes.png) | [`rcsb_2OMF.jpg`](verification/15_envelopes/rcsb_2OMF.jpg) | [`comparison_envelopes.png`](verification/15_envelopes/comparison_envelopes.png) | [`comparison_envelopes.mp4`](verification/15_envelopes/comparison_envelopes.mp4) | ✅ Verified |
| **L16** | `motility_modes` | Type IV Pilus Twitching, Spirochete & Gliding | `6W6M` / `3JC8` | [`expected_motility_modes.png`](verification/16_motility_modes/expected_motility_modes.png) | [`rcsb_6W6M.jpg`](verification/16_motility_modes/rcsb_6W6M.jpg) | [`comparison_motility_modes.png`](verification/16_motility_modes/comparison_motility_modes.png) | [`comparison_motility_modes.mp4`](verification/16_motility_modes/comparison_motility_modes.mp4) | ✅ Verified |
| **L17** | `microcompartment` | Icosahedral Carboxysome / BMC Organelle | `7O04` / `3I82` | [`expected_microcompartment.png`](verification/17_microcompartment/expected_microcompartment.png) | [`rcsb_7O04.jpg`](verification/17_microcompartment/rcsb_7O04.jpg) | [`comparison_microcompartment.png`](verification/17_microcompartment/comparison_microcompartment.png) | [`comparison_microcompartment.mp4`](verification/17_microcompartment/comparison_microcompartment.mp4) | ✅ Verified |
| **L18** | `chemosensory_mcp` | Chemosensory MCP–CheA–CheW Array | `6S1K` / `3JA6` | [`expected_chemosensory_mcp.png`](verification/18_chemosensory_mcp/expected_chemosensory_mcp.png) | [`rcsb_6S1K.jpg`](verification/18_chemosensory_mcp/rcsb_6S1K.jpg) | [`comparison_chemosensory_mcp.png`](verification/18_chemosensory_mcp/comparison_chemosensory_mcp.png) | [`comparison_chemosensory_mcp.mp4`](verification/18_chemosensory_mcp/comparison_chemosensory_mcp.mp4) | ✅ Verified |
| **L19** | `pili_fimbriae` | Type 1 FimH Catch-Bond Pilus & Curli Biofilm | `6GTO` / `4B0M` | [`expected_pili_fimbriae.png`](verification/19_pili_fimbriae/expected_pili_fimbriae.png) | [`rcsb_6GTO.jpg`](verification/19_pili_fimbriae/rcsb_6GTO.jpg) | [`comparison_pili_fimbriae.png`](verification/19_pili_fimbriae/comparison_pili_fimbriae.png) | [`comparison_pili_fimbriae.mp4`](verification/19_pili_fimbriae/comparison_pili_fimbriae.mp4) | ✅ Verified |
| **L20** | `nucleoid` | Bacterial Nucleoid & NAP Compaction (`HU`/`H-NS`) | `1P71` / `1BNA` | [`expected_nucleoid.png`](verification/20_nucleoid/expected_nucleoid.png) | [`rcsb_1P71.jpg`](verification/20_nucleoid/rcsb_1P71.jpg) | [`comparison_nucleoid.png`](verification/20_nucleoid/comparison_nucleoid.png) | [`comparison_nucleoid.mp4`](verification/20_nucleoid/comparison_nucleoid.mp4) | ✅ Verified |
| **L21** | `chaperones` | GroEL–GroES Anfinsen Cage & DnaK/DnaJ | `1AON` / `2KHO` | [`expected_chaperones.png`](verification/21_chaperones/expected_chaperones.png) | [`rcsb_1AON.jpg`](verification/21_chaperones/rcsb_1AON.jpg) | [`comparison_chaperones.png`](verification/21_chaperones/comparison_chaperones.png) | [`comparison_chaperones.mp4`](verification/21_chaperones/comparison_chaperones.mp4) | ✅ Verified |
| **L22** | `rna_degradosome` | Bacterial RNA Degradosome (`RNase E`/`PNPase`) | `2C0B` / `5M3P` | [`expected_rna_degradosome.png`](verification/22_rna_degradosome/expected_rna_degradosome.png) | [`rcsb_2C0B.jpg`](verification/22_rna_degradosome/rcsb_2C0B.jpg) | [`comparison_rna_degradosome.png`](verification/22_rna_degradosome/comparison_rna_degradosome.png) | [`comparison_rna_degradosome.mp4`](verification/22_rna_degradosome/comparison_rna_degradosome.mp4) | ✅ Verified |
| **L23** | `metabolic_hubs` | Pyruvate Dehydrogenase Cube & Cyt $bd$ Oxidase | `1EAE` / `6WTI` | [`expected_metabolic_hubs.png`](verification/23_metabolic_hubs/expected_metabolic_hubs.png) | [`rcsb_1EAE.jpg`](verification/23_metabolic_hubs/rcsb_1EAE.jpg) | [`comparison_metabolic_hubs.png`](verification/23_metabolic_hubs/comparison_metabolic_hubs.png) | [`comparison_metabolic_hubs.mp4`](verification/23_metabolic_hubs/comparison_metabolic_hubs.mp4) | ✅ Verified |
| **L24** | `periplasmic_transport` | SurA OMP Chaperone & MalEFGK$_2$ ABC Importer | `1M5Y` / `1OMP` | [`expected_periplasmic_transport.png`](verification/24_periplasmic_transport/expected_periplasmic_transport.png) | [`rcsb_1M5Y.jpg`](verification/24_periplasmic_transport/rcsb_1M5Y.jpg) | [`comparison_periplasmic_transport.png`](verification/24_periplasmic_transport/comparison_periplasmic_transport.png) | [`comparison_periplasmic_transport.mp4`](verification/24_periplasmic_transport/comparison_periplasmic_transport.mp4) | ✅ Verified |
| **L25** | `efflux_pump` | AcrAB–TolC Multidrug Efflux Pump | `5V5S` | [`expected_efflux_pump.png`](verification/25_efflux_pump/expected_efflux_pump.png) | [`rcsb_5V5S.jpg`](verification/25_efflux_pump/rcsb_5V5S.jpg) | [`comparison_efflux_pump.png`](verification/25_efflux_pump/comparison_efflux_pump.png) | [`comparison_efflux_pump.mp4`](verification/25_efflux_pump/comparison_efflux_pump.mp4) | ✅ Verified |
| **L26** | `secretion_systems` | T3SS Injectisome, T4SS Pilus & T6SS Spear | `7OKO` / `7AH9` | [`expected_secretion_systems.png`](verification/26_secretion_systems/expected_secretion_systems.png) | [`rcsb_7OKO.jpg`](verification/26_secretion_systems/rcsb_7OKO.jpg) | [`comparison_secretion_systems.png`](verification/26_secretion_systems/comparison_secretion_systems.png) | [`comparison_secretion_systems.mp4`](verification/26_secretion_systems/comparison_secretion_systems.mp4) | ✅ Verified |
| **L27** | `crispr_defense` | CRISPR–Cas9 R-Loop, Cascade & EcoRI Defense | `5H9F` / `1VY8` | [`expected_crispr_defense.png`](verification/27_crispr_defense/expected_crispr_defense.png) | [`rcsb_5H9F.jpg`](verification/27_crispr_defense/rcsb_5H9F.jpg) | [`comparison_crispr_defense.png`](verification/27_crispr_defense/comparison_crispr_defense.png) | [`comparison_crispr_defense.mp4`](verification/27_crispr_defense/comparison_crispr_defense.mp4) | ✅ Verified |
| **L28** | `storage_and_spores` | Bacterioferritin, Magnetosomes & Endospore | `7R04` / `1BFR` | [`expected_storage_and_spores.png`](verification/28_storage_and_spores/expected_storage_and_spores.png) | [`rcsb_7R04.jpg`](verification/28_storage_and_spores/rcsb_7R04.jpg) | [`comparison_storage_and_spores.png`](verification/28_storage_and_spores/comparison_storage_and_spores.png) | [`comparison_storage_and_spores.mp4`](verification/28_storage_and_spores/comparison_storage_and_spores.mp4) | ✅ Verified |
| **L29** | `atomic_chemistry` | Level 5 & 6 Biomolecular Monomers & Bonds | `1BNA` / `MMFF94` | [`expected_atomic_chemistry.png`](verification/29_atomic_chemistry/expected_atomic_chemistry.png) | [`rcsb_1BNA.jpg`](verification/29_atomic_chemistry/rcsb_1BNA.jpg) | [`comparison_atomic_chemistry.png`](verification/29_atomic_chemistry/comparison_atomic_chemistry.png) | [`comparison_atomic_chemistry.mp4`](verification/29_atomic_chemistry/comparison_atomic_chemistry.mp4) | ✅ Verified |

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
