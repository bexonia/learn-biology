# 🧬 Prokaryote Explorer — Master Expansion Roadmap & Execution Tracker

This directory (`roadmap/`) is the authoritative, modular execution tracker for completing the **Prokaryotic Cell & Nanomachine 3D Atlas** in [`learn-biology`](file:///c:/Users/devcd/GenProjects/learn-biology).

Every pending biological structure, organelle, envelope comparison, motility system, macromolecular nanomachine, and chemical monomer layer is **isolated in its own dedicated subfolder** (`01_...` through `16_...`) with a self-contained, exhaustive `README.md` specification so an AI agent or developer can pick up any single folder, execute it end-to-end, verify it, and check off its box below.

---

## 🛠️ Open-Source Toolchain & Trusted Data Specification

Before implementing any module, read **[`00_OPEN_SOURCE_TOOLCHAIN_SPEC.md`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/00_OPEN_SOURCE_TOOLCHAIN_SPEC.md)**, which documents all trusted open-source organizations, repositories, and software pipelines used in this project:
* **Macromolecular 3D Structures (Proteins, Complexes, Ribosomes, Nucleic Acids):**
  * **RCSB Protein Data Bank (RCSB PDB / wwPDB)** (`https://www.rcsb.org`, CC0 1.0 Public Domain) — Experimental X-ray crystallography and Cryo-EM atomic coordinates (`.cif` / `.bcif` / `.pdb`).
  * **AlphaFold Protein Structure Database (EMBL-EBI / Google DeepMind)** (`https://alphafold.ebi.ac.uk`, CC-BY-4.0) — Full-length predicted structures for bridging flexible loops missing in crystallographic deposits.
  * **Electron Microscopy Data Bank (EMDB / EMBL-EBI)** (`https://www.ebi.ac.uk/emdb`) — Cryo-Electron Tomography (Cryo-ET) volumetric maps for in-situ prokaryotic organelles and cell wall architectures.
* **Small Molecules, Ligands, Antibiotics & Chemical Monomers:**
  * **NIH / NCBI PubChem** (`https://pubchem.ncbi.nlm.nih.gov`, Public Domain) & **EMBL-EBI ChEMBL** (`https://www.ebi.ac.uk/chembl`, CC-BY-SA-3.0) — Canonical 3D `.sdf` structures and Isomeric SMILES for cofactors, substrates, lipids, and antibiotics.
  * **RDKit** (`https://www.rdkit.org`, BSD-3-Clause) — Open-source cheminformatics library used in Python (`AllChem.EmbedMolecule` with ETKDGv3 + MMFF94 force field) to generate 3D atomic coordinates and covalent bond cylinders.
* **3D Mesh Generation & Real-Time Rendering:**
  * **Blender 5.2+** (`https://www.blender.org`, GPL-3.0) + **Molecular Nodes** (`https://github.com/bradyajohnston/MolecularNodes`, GPL-3.0) + **Biotite** (`https://www.biotite-python.org`, BSD-3-Clause) — Parses PDB/mmCIF/SDF coordinates into multi-piece `Piece_<ID>_<Subunit>` meshes and exports glTF 2.0 `.glb` files.
  * **Three.js** (`https://threejs.org`, MIT) + **React 19** (MIT) + **Rust WebAssembly** (`wasm32-unknown-unknown`) + **Kokoro-82M ONNX Web** (Apache-2.0) — Client-side 3D WebGL viewport, orbital camera physics, 2D SVG leader lines, and neural voice narration.

---

## ✅ Phase 0: Completed Baseline Scenarios (Levels 1–13)

These 13 scenarios are already built, wired into the UI (`ScaleNavigator.tsx`, `App.tsx`, `CellInspectorDrawer.tsx`), and exported to `client/public/models/`:

- [x] **Level 1 (`cell`) — Whole Prokaryotic Cell Cutaway ($1.5\,\mu\text{m}$)**
  - Script: [`scripts/generate_primer_cell_hq.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_primer_cell_hq.py) | Controller: [`client/src/core/cellViewer.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/cellViewer.ts) | Model: `primer_cell_hq.glb`
- [x] **Level 2 (`motor`) — Bacterial Flagellar Rotary Motor & Stator Ring ($45\,\text{nm}$, PDB `7CGO`)**
  - Script: [`scripts/generate_7cgo_flagellar_motor.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_7cgo_flagellar_motor.py) | Controller: [`client/src/core/flagellarMotor.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/flagellarMotor.ts) | Model: `motor.glb`
- [x] **Level 3 (`ribosome`) — Bacterial 70S Ribosome Translation Factory ($25\,\text{nm}$, PDB `7K00`)**
  - Script: [`scripts/generate_7k00_assembled_pieces.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_7k00_assembled_pieces.py) | Controller: [`client/src/core/ribosomeTranslation.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/ribosomeTranslation.ts) | Model: `ribosome_7k00.glb`
- [x] **Level 4 (`atp_synthase`) — $F_1F_0$-ATP Synthase Bioenergetic Dynamo ($10\,\text{nm}$, PDB `6OQR` / `6RKW`)**
  - Script: [`scripts/generate_6oqr_atp_synthase.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6oqr_atp_synthase.py) | Controller: [`client/src/core/atpSynthase.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/atpSynthase.ts) | Model: `atp_synthase_6oqr.glb`
- [x] **Level 5 (`complex_i`) — Respiratory Complex I Proton Pump ($18\,\text{nm}$, PDB `4HEA`)**
  - Script: [`scripts/generate_4hea_complex_i.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_4hea_complex_i.py) | Controller: [`client/src/core/respiratoryComplexI.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/respiratoryComplexI.ts) | Model: `complex_i_4hea.glb`
- [x] **Level 6 (`secyeg`) — SecYEG Protein Translocon & SecA ATPase ($12\,\text{nm}$, PDB `3J46`)**
  - Script: [`scripts/generate_3j46_secyeg.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_3j46_secyeg.py) | Controller: [`client/src/core/secYEGTranslocon.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/secYEGTranslocon.ts) | Model: `secyeg_3j46.glb`
- [x] **Level 7 (`bam`) — BAM $\beta$-Barrel Assembly Machine ($14\,\text{nm}$, PDB `5D0O`)**
  - Script: [`scripts/generate_5d0o_bam_complex.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_5d0o_bam_complex.py) | Controller: [`client/src/core/bamComplex.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/bamComplex.ts) | Model: `bam_5d0o.glb`
- [x] **Level 8 (`lpt`) — LptA–G Trans-Envelope LPS Bridge ($22\,\text{nm}$, PDB `5IV9` / `4Q35`)**
  - Script: [`scripts/generate_lpt_bridge.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_lpt_bridge.py) | Controller: [`client/src/core/lptBridge.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/lptBridge.ts) | Model: `lpt_bridge.glb`
- [x] **Level 9 (`rnap`) — Bacterial RNA Polymerase Holoenzyme ($15\,\text{nm}$, PDB `6ALH`)**
  - Script: [`scripts/generate_6alh_rnap.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6alh_rnap.py) | Controller: [`client/src/core/rnaPolymerase.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/rnaPolymerase.ts) | Model: `rnap_6alh.glb`
- [x] **Level 10 (`pol_iii`) — DNA Polymerase III Replisome ($24\,\text{nm}$, PDB `5FKV`)**
  - Script: [`scripts/generate_5fkv_pol_iii_replisome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_5fkv_pol_iii_replisome.py) | Controller: [`client/src/core/dnaReplisome.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/dnaReplisome.ts) | Model: `pol_iii_5fkv.glb`
- [x] **Level 11 (`gyrase`) — DNA Gyrase Topoisomerase II ($16\,\text{nm}$, PDB `6RKW`)**
  - Script: [`scripts/generate_6rkw_dna_gyrase.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6rkw_dna_gyrase.py) | Controller: [`client/src/core/dnaGyrase.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/dnaGyrase.ts) | Model: `gyrase_6rkw.glb`
- [x] **Level 12 (`ftsz`) — FtsZ Cytokinetic Divisome Ring ($30\,\text{nm}$, PDB `6UNX`)**
  - Script: [`scripts/generate_6unx_ftsz_divisome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6unx_ftsz_divisome.py) | Controller: [`client/src/core/ftsZDivisome.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/ftsZDivisome.ts) | Model: `ftsz_6unx.glb`
- [x] **Level 13 (`mreb`) — MreB Rod-Shape Elongasome ($20\,\text{nm}$, PDB `4CZJ`)**
  - Script: [`scripts/generate_4czj_mreb_elongasome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_4czj_mreb_elongasome.py) | Controller: [`client/src/core/mreBElongasome.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/mreBElongasome.ts) | Model: `mreb_4czj.glb`

---

## ⏳ Phase 1–4: Pending Expansion Modules (Isolated Iterative Folders)

Each item below links to its dedicated folder containing a full, execution-ready `README.md` specification. As each folder is implemented and verified, mark its checkbox `[x]`.

### Tier A — "Biology Primer" Core Visual Suite (`primer_fig3`, `fig4`, `fig7`, `fig8`)
- [ ] **[`01_expressome_6x9q/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/01_expressome_6x9q/README.md) — Coupled Transcription–Translation Expressome (`6X9Q`) & Eukaryotic Comparison**
  - *Category:* RNA-Protein Supercomplex (~3.0 MDa) + Comparative Split View (`primer_fig4.png`)
  - *Existing Asset:* Pre-built [`6X9Q.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/6X9Q.glb) available + decomposed `Piece_6X9Q_*` generator spec.
- [ ] **[`02_cell_envelopes_comparison/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/02_cell_envelopes_comparison/README.md) — Comparing Prokaryotic Envelopes: Gram-Negative vs. Gram-Positive vs. Archaeal S-Layer (`2OMF`, `3VMA`, `1EQ7`)**
  - *Category:* Multi-Layered Cell Wall Architecture + Trimeric Porin `OmpF` + Braun's Lipoprotein `Lpp` (`primer_fig7.png`)
  - *Existing Assets:* Pre-built [`2OMF.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/2OMF.glb) and [`3VMA.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/3VMA.glb) available.
- [ ] **[`03_prokaryotic_motility_modes/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/03_prokaryotic_motility_modes/README.md) — The 4 Modes of Prokaryotic Movement: Flagellum, Type IV Pilus Twitching, Gliding, & Archaeal Archaellum (`3JC8`, `6W6M`, `7B03`)**
  - *Category:* Extracellular Locomotion & Rotary/Grappling Motors (`primer_fig8.png`)
- [ ] **[`04_bacterial_microcompartment_bmc/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/04_bacterial_microcompartment_bmc/README.md) — 3D Icosahedral Bacterial Microcompartment (Carboxysome / Pdu BMC Shell, `7O04` / `3I82`)**
  - *Category:* Prokaryotic Proteinaceous Organelle ($100\text{–}150\,\text{nm}$, `primer_fig3.png`)

### Tier B — Whole-Cell Organelle Drill-Downs & Quality Control (`CELLULAR_ELEMENTS_CATALOG.md`)
- [ ] **[`05_chemosensory_mcp_array/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/05_chemosensory_mcp_array/README.md) — Chemosensory Receptor Array (`6S1K` / `3JA6`, MCP Trimers-of-Dimers + CheA/CheW Baseplate)**
  - *Category:* Transmembrane Sensory Lattice ($25\,\text{nm}$ height $\times$ hexagonal array)
- [ ] **[`06_pili_fimbriae_curli_biofilm/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/06_pili_fimbriae_curli_biofilm/README.md) — Type 1 Fimbriae Catch-Bond Adhesin (`6GTO` / `1TR7`) & Curli Amyloid Biofilm Fibers (`4B0M`)**
  - *Category:* Extracellular Adhesion Hairs & Biofilm Matrix (`1TR7.glb` pre-built)
- [ ] **[`07_nucleoid_associated_proteins/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/07_nucleoid_associated_proteins/README.md) — Nucleoid Architecture & Histone-Like NAPs (`HU` `1P71`, `H-NS` `1HNS`, `Fis` `3IV5`, & B-DNA `1BNA`)**
  - *Category:* Chromosomal DNA Bending, Bridging & Supercoil Domain Insulation (`1BNA.glb` pre-built)
- [ ] **[`08_chaperone_network_groel_dnak/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/08_chaperone_network_groel_dnak/README.md) — Protein Folding Quality Control: GroEL–GroES Nano-Cage (`1AON`), DnaK/DnaJ/GrpE (`2KHO`), & Trigger Factor (`1W26`)**
  - *Category:* ATP-Driven Chaperonin Barrel & HSP70 Triage (`1AON.glb` pre-built)
- [ ] **[`09_rna_degradosome/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/09_rna_degradosome/README.md) — Bacterial RNA Degradosome (`5M3P` / `2YKR`, RNase E, PNPase, RhlB Helicase, Enolase)**
  - *Category:* Membrane-Tethered mRNA Decay & Processing Machine
- [ ] **[`10_metabolic_respiratory_hubs/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/10_metabolic_respiratory_hubs/README.md) — Pyruvate Dehydrogenase Megacomplex (`1EAE`) & Cytochrome $bo_3$ Ubiquinol Oxidase (`6WTI`)**
  - *Category:* Central Carbon Metabolic Hub (4.5 MDa) & Terminal Respiratory Proton Pump (`1EAE.glb` & `6WTI.glb` pre-built)
- [ ] **[`11_periplasmic_transport_sura_male/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/11_periplasmic_transport_sura_male/README.md) — Periplasmic Escort & Solute Transport: SurA Holdase (`1M5Y`) & MalE–MalFGK$_2$ ABC Transporter (`1OMP` / `2R6G`)**
  - *Category:* Periplasmic Chaperone Escort & ATP-Binding Cassette Importer (`1M5Y.glb` & `1OMP.glb` pre-built)

### Tier C — Antibiotic Efflux, Gene Transfer, Phage Immunity, Dormancy & Atomic Chemistry
- [ ] **[`12_acrab_tolc_efflux_pump/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/12_acrab_tolc_efflux_pump/README.md) — Tripartite Multidrug Efflux Pump (`AcrAB-TolC`, PDB `5V5S`)**
  - *Category:* Trans-Envelope Proton-Driven Antibiotic Resistance Cannon ($32\,\text{nm}$)
- [ ] **[`13_conjugation_secretion_systems/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/13_conjugation_secretion_systems/README.md) — Horizontal Gene Transfer & Secretion: Conjugative T4SS (`7OKO`), T3SS Injectisome (`7AH9`), & T6SS Spear (`6H3L`)**
  - *Category:* Plasmid DNA Conjugation Bridge & Bacterial Virulence/Competition Nanomachines
- [ ] **[`14_crispr_cas_phage_defense/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/14_crispr_cas_phage_defense/README.md) — Prokaryotic Adaptive Immunity: Type I-E CRISPR-Cas Cascade (`1VY8` / `5H9F`) & EcoRI Endonuclease (`1ERI`)**
  - *Category:* Antiviral Ribonucleoprotein Surveillance & DNA Cleavage Defense
- [ ] **[`15_storage_granules_endospores/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/15_storage_granules_endospores/README.md) — Cytoplasmic Storage Inclusions (Glycogen, Volutin, PHB, Gas Vesicles, Magnetosomes) & Gram-Positive Endospore**
  - *Category:* Subcellular Reserve Organelles, Buoyancy/Magnetic Structures, & Dormant Armored Spore
- [ ] **[`16_monomers_and_atomic_bonds/`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/16_monomers_and_atomic_bonds/README.md) — Level 5 Chemical Monomers (`ATP`, `Lipid II`, `PE/PG`, `tRNA`) & Level 6 Quantum/Atomic Bonds**
  - *Category:* Small-Molecule RDKit 3D Conformer Gallery & Sub-Nanometer Covalent/Hydrogen Bond Inspector

---

## 🔄 Standard 7-Step Agent Execution Protocol for Every Folder

When an agent is instructed to build any roadmap folder `roadmap/<NN_folder_name>/`:
1. **Read the Folder's `README.md`:** Extract the PDB/PubChem IDs, subunit `Piece_<ID>_<Subunit>` decomposition table, color hex codes, dissociation vectors $\vec{v}_{\text{dissoc}}$, circuit I/O data, interactive sliders, and 5-stage tutorial script.
2. **Generate the 3D Asset in Blender (`scripts/generate_<id>.py`):**
   - Fetch authentic coordinates from RCSB PDB / PubChem RDKit (or load the pre-existing `.glb` from `ecoli-vulkan-engine/web/models/`) and partition into named `Piece_<ID>_<Subunit>` objects with baked PBR materials matching [`BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md`](file:///c:/Users/devcd/GenProjects/BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md).
   - Export to `client/public/models/<model_name>.glb` and register the script in [`build_assets.py`](file:///c:/Users/devcd/GenProjects/learn-biology/build_assets.py).
3. **Create the Three.js Scene Controller (`client/src/core/<camelCaseName>.ts`):**
   - Implement subunit loading, hover raycasting, `setExplodedProgress(p)` with dynamic camera centroid framing, real-time biophysical animation driven by `iterationControls`, and the 5-stage explanatory trace (`EXPLANATORY_TRACE`).
4. **Register Types & Metadata (`client/src/types/biology.ts`):**
   - Add the new `ScaleLevel` union member, `SUBUNIT_METADATA`, `CIRCUITS_DB` entry, `ITERATION_CONTROLS_DB` sliders, and `OrganelleData.targetScale` link (if clickable from the Whole Cell).
5. **Wire Navigation & Inspector UI (`ScaleNavigator.tsx`, `App.tsx`, `CellInspectorDrawer.tsx`):**
   - Add the top navigation button, instantiate the controller in `App.tsx`, and add the interactive pathway state tiles in `CellInspectorDrawer.tsx`.
6. **Verify Compilation & Visual Rendering:**
   - Run `pnpm --dir client run build` to ensure zero TypeScript errors and verify the 3D scene in the browser.
7. **Check Off the Boxes:**
   - Mark all verification checkboxes `[x]` inside `roadmap/<NN_folder_name>/README.md` and mark the master checkbox `[x]` in this [`roadmap/README.md`](file:///c:/Users/devcd/GenProjects/learn-biology/roadmap/README.md).
