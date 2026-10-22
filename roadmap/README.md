# 🧬 Prokaryote Explorer — Master Expansion Roadmap & Execution Tracker

This directory (`roadmap/`) is the authoritative, modular execution tracker for completing the **Prokaryotic Cell & Nanomachine 3D Atlas** in [`learn-biology`](../README.md).

Every biological structure, organelle, envelope comparison, motility system, macromolecular nanomachine, and chemical monomer layer is **isolated in its own discrete subfolder** (`01_...` through `16_...`) containing:
1. A self-contained specification **[`README.md`](./01_expressome_6x9q/README.md)**
2. A matching **Blender 5.2 + Molecular Nodes / RDKit Python generator script** (`generate_<NN_feature_name>.py`) linked via relative paths below
3. The compiled multi-piece `.glb` 3D model exported directly into the discrete folder, `../../models/`, and `../../client/public/models/`

---

## 🛠️ Open-Source Toolchain & Trusted Data Specification

Before modifying or extending any module, read **[`00_OPEN_SOURCE_TOOLCHAIN_SPEC.md`](./00_OPEN_SOURCE_TOOLCHAIN_SPEC.md)**, which documents all trusted open-source organizations, repositories, and software pipelines used in this project:
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

- [x] **Level 1 (`cell`) — Whole Prokaryotic Cell Cutaway ($1.5\,\mu\text{m}$)**
  - Script: [`../scripts/generate_primer_cell_hq.py`](../scripts/generate_primer_cell_hq.py) | Controller: [`../client/src/core/cellViewer.ts`](../client/src/core/cellViewer.ts) | Model: `primer_cell_hq.glb`
- [x] **Level 2 (`motor`) — Bacterial Flagellar Rotary Motor & Stator Ring ($45\,\text{nm}$, PDB `7CGO`)**
  - Script: [`../scripts/generate_7cgo_flagellar_motor.py`](../scripts/generate_7cgo_flagellar_motor.py) | Controller: [`../client/src/core/flagellarMotor.ts`](../client/src/core/flagellarMotor.ts) | Model: `motor.glb`
- [x] **Level 3 (`ribosome`) — Bacterial 70S Ribosome Translation Factory ($25\,\text{nm}$, PDB `7K00`)**
  - Script: [`../scripts/generate_7k00_assembled_pieces.py`](../scripts/generate_7k00_assembled_pieces.py) | Controller: [`../client/src/core/ribosomeTranslation.ts`](../client/src/core/ribosomeTranslation.ts) | Model: `ribosome_7k00.glb`
- [x] **Level 4 (`atp_synthase`) — $F_1F_0$-ATP Synthase Bioenergetic Dynamo ($10\,\text{nm}$, PDB `6OQR` / `6RKW`)**
  - Script: [`../scripts/generate_6oqr_atp_synthase.py`](../scripts/generate_6oqr_atp_synthase.py) | Controller: [`../client/src/core/atpSynthase.ts`](../client/src/core/atpSynthase.ts) | Model: `atp_synthase_6oqr.glb`
- [x] **Level 5 (`complex_i`) — Respiratory Complex I Proton Pump ($18\,\text{nm}$, PDB `4HEA`)**
  - Script: [`../scripts/generate_4hea_complex_i.py`](../scripts/generate_4hea_complex_i.py) | Controller: [`../client/src/core/respiratoryComplexI.ts`](../client/src/core/respiratoryComplexI.ts) | Model: `complex_i_4hea.glb`
- [x] **Level 6 (`secyeg`) — SecYEG Protein Translocon & SecA ATPase ($12\,\text{nm}$, PDB `3J46`)**
  - Script: [`../scripts/generate_3j46_secyeg.py`](../scripts/generate_3j46_secyeg.py) | Controller: [`../client/src/core/secYEGTranslocon.ts`](../client/src/core/secYEGTranslocon.ts) | Model: `secyeg_3j46.glb`
- [x] **Level 7 (`bam`) — BAM $\beta$-Barrel Assembly Machine ($14\,\text{nm}$, PDB `5D0O`)**
  - Script: [`../scripts/generate_5d0o_bam_complex.py`](../scripts/generate_5d0o_bam_complex.py) | Controller: [`../client/src/core/bamComplex.ts`](../client/src/core/bamComplex.ts) | Model: `bam_5d0o.glb`
- [x] **Level 8 (`lpt`) — LptA–G Trans-Envelope LPS Bridge ($22\,\text{nm}$, PDB `5IV9` / `4Q35`)**
  - Script: [`../scripts/generate_lpt_bridge.py`](../scripts/generate_lpt_bridge.py) | Controller: [`../client/src/core/lptBridge.ts`](../client/src/core/lptBridge.ts) | Model: `lpt_bridge.glb`
- [x] **Level 9 (`rnap`) — Bacterial RNA Polymerase Holoenzyme ($15\,\text{nm}$, PDB `6C9Y`)**
  - Script: [`../scripts/generate_6c9y_assembled_pieces.py`](../scripts/generate_6c9y_assembled_pieces.py) | Controller: [`../client/src/core/rnapTranscription.ts`](../client/src/core/rnapTranscription.ts) | Model: `6C9Y_assembled_pieces.glb`
- [x] **Level 10 (`pol_iii`) — DNA Polymerase III Replisome ($24\,\text{nm}$, PDB `5FKV`)**
  - Script: [`../scripts/generate_5fkv_assembled_pieces.py`](../scripts/generate_5fkv_assembled_pieces.py) | Controller: [`../client/src/core/polIIIReplication.ts`](../client/src/core/polIIIReplication.ts) | Model: `5FKV_assembled_pieces.glb`
- [x] **Level 11 (`gyrase`) — DNA Gyrase Topoisomerase II ($16\,\text{nm}$, PDB `1AB4` / `6RKU`)**
  - Script: [`../scripts/generate_1ab4_assembled_pieces.py`](../scripts/generate_1ab4_assembled_pieces.py) | Controller: [`../client/src/core/gyraseSupercoiling.ts`](../client/src/core/gyraseSupercoiling.ts) | Model: `1AB4_assembled_pieces.glb`
- [x] **Level 12 (`ftsz`) — FtsZ Cytokinetic Divisome Ring ($30\,\text{nm}$, PDB `1FSZ`)**
  - Script: [`../scripts/generate_1fsz_assembled_pieces.py`](../scripts/generate_1fsz_assembled_pieces.py) | Controller: [`../client/src/core/ftszDivisome.ts`](../client/src/core/ftszDivisome.ts) | Model: `1FSZ_assembled_pieces.glb`
- [x] **Level 13 (`mreb`) — MreB Rod-Shape Elongasome ($20\,\text{nm}$, PDB `1JCG`)**
  - Script: [`../scripts/generate_1jcg_assembled_pieces.py`](../scripts/generate_1jcg_assembled_pieces.py) | Controller: [`../client/src/core/mrebCytoskeleton.ts`](../client/src/core/mrebCytoskeleton.ts) | Model: `1JCG_assembled_pieces.glb`

---

## 🚀 Phase 1–4: Discrete Expansion Modules (Python Generators & `.glb` Assets Built)

Each item below is isolated in its own discrete folder with a relative link to both its `README.md` specification and its matching Python 3D generator script:

### Tier A — "Biology Primer" Core Visual Suite (`primer_fig3`, `fig4`, `fig7`, `fig8`)
- [x] **[`01_expressome_6x9q/`](./01_expressome_6x9q/README.md) — Coupled Transcription–Translation Expressome (`6X9Q`) & Eukaryotic Comparison**
  - **Python Generator:** [`./01_expressome_6x9q/generate_01_expressome_6x9q.py`](./01_expressome_6x9q/generate_01_expressome_6x9q.py)
  - **Generated 3D Asset:** [`./01_expressome_6x9q/expressome_6x9q.glb`](./01_expressome_6x9q/expressome_6x9q.glb) (8 decomposed `Piece_6X9Q_*` subunits)
- [x] **[`02_cell_envelopes_comparison/`](./02_cell_envelopes_comparison/README.md) — Comparing Prokaryotic Envelopes: Gram-Negative vs. Gram-Positive vs. Archaeal S-Layer (`2OMF`, `3VMA`, `1EQ7`)**
  - **Python Generator:** [`./02_cell_envelopes_comparison/generate_02_cell_envelopes_comparison.py`](./02_cell_envelopes_comparison/generate_02_cell_envelopes_comparison.py)
  - **Generated 3D Asset:** [`./02_cell_envelopes_comparison/envelopes_comparison.glb`](./02_cell_envelopes_comparison/envelopes_comparison.glb) (10 decomposed `Piece_Env_*` subunits)
- [x] **[`03_prokaryotic_motility_modes/`](./03_prokaryotic_motility_modes/README.md) — The 4 Modes of Prokaryotic Movement: Flagellum, Type IV Pilus Twitching, Gliding, & Archaeal Archaellum (`3JC8`, `6W6M`, `7B03`)**
  - **Python Generator:** [`./03_prokaryotic_motility_modes/generate_03_prokaryotic_motility_modes.py`](./03_prokaryotic_motility_modes/generate_03_prokaryotic_motility_modes.py)
  - **Generated 3D Asset:** [`./03_prokaryotic_motility_modes/motility_modes.glb`](./03_prokaryotic_motility_modes/motility_modes.glb) (9 decomposed `Piece_Mot_*` subunits)
- [x] **[`04_bacterial_microcompartment_bmc/`](./04_bacterial_microcompartment_bmc/README.md) — 3D Icosahedral Bacterial Microcompartment (Carboxysome / Pdu BMC Shell, `7O04` / `3I82`)**
  - **Python Generator:** [`./04_bacterial_microcompartment_bmc/generate_04_bacterial_microcompartment_bmc.py`](./04_bacterial_microcompartment_bmc/generate_04_bacterial_microcompartment_bmc.py)
  - **Generated 3D Asset:** [`./04_bacterial_microcompartment_bmc/microcompartment_7o04.glb`](./04_bacterial_microcompartment_bmc/microcompartment_7o04.glb) (5 decomposed `Piece_BMC_*` subunits)

### Tier B — Whole-Cell Organelle Drill-Downs & Quality Control (`CELLULAR_ELEMENTS_CATALOG.md`)
- [x] **[`05_chemosensory_mcp_array/`](./05_chemosensory_mcp_array/README.md) — Chemosensory Receptor Array (`6S1K` / `3JA6`, MCP Trimers-of-Dimers + CheA/CheW Baseplate)**
  - **Python Generator:** [`./05_chemosensory_mcp_array/generate_05_chemosensory_mcp_array.py`](./05_chemosensory_mcp_array/generate_05_chemosensory_mcp_array.py)
  - **Generated 3D Asset:** [`./05_chemosensory_mcp_array/chemosensory_6s1k.glb`](./05_chemosensory_mcp_array/chemosensory_6s1k.glb) (7 decomposed `Piece_6S1K_*` subunits)
- [x] **[`06_pili_fimbriae_curli_biofilm/`](./06_pili_fimbriae_curli_biofilm/README.md) — Type 1 Fimbriae Catch-Bond Adhesin (`6GTO` / `1TR7`) & Curli Amyloid Biofilm Fibers (`4B0M`)**
  - **Python Generator:** [`./06_pili_fimbriae_curli_biofilm/generate_06_pili_fimbriae_curli_biofilm.py`](./06_pili_fimbriae_curli_biofilm/generate_06_pili_fimbriae_curli_biofilm.py)
  - **Generated 3D Asset:** [`./06_pili_fimbriae_curli_biofilm/pili_fimbriae_6gto.glb`](./06_pili_fimbriae_curli_biofilm/pili_fimbriae_6gto.glb) (8 decomposed `Piece_Pili_*` subunits)
- [x] **[`07_nucleoid_associated_proteins/`](./07_nucleoid_associated_proteins/README.md) — Nucleoid Architecture & Histone-Like NAPs (`HU` `1P71`, `H-NS` `1HNS`, `Fis` `3IV5`, & B-DNA `1BNA`)**
  - **Python Generator:** [`./07_nucleoid_associated_proteins/generate_07_nucleoid_associated_proteins.py`](./07_nucleoid_associated_proteins/generate_07_nucleoid_associated_proteins.py)
  - **Generated 3D Asset:** [`./07_nucleoid_associated_proteins/nucleoid_naps.glb`](./07_nucleoid_associated_proteins/nucleoid_naps.glb) (5 decomposed `Piece_Nuc_*` subunits)
- [x] **[`08_chaperone_network_groel_dnak/`](./08_chaperone_network_groel_dnak/README.md) — Protein Folding Quality Control: GroEL–GroES Nano-Cage (`1AON`), DnaK/DnaJ/GrpE (`2KHO`), & Trigger Factor (`1W26`)**
  - **Python Generator:** [`./08_chaperone_network_groel_dnak/generate_08_chaperone_network_groel_dnak.py`](./08_chaperone_network_groel_dnak/generate_08_chaperone_network_groel_dnak.py)
  - **Generated 3D Asset:** [`./08_chaperone_network_groel_dnak/chaperones_1aon.glb`](./08_chaperone_network_groel_dnak/chaperones_1aon.glb) (6 decomposed `Piece_1AON_*` subunits)
- [x] **[`09_rna_degradosome/`](./09_rna_degradosome/README.md) — Bacterial RNA Degradosome (`5M3P` / `2YKR`, RNase E, PNPase, RhlB Helicase, Enolase)**
  - **Python Generator:** [`./09_rna_degradosome/generate_09_rna_degradosome.py`](./09_rna_degradosome/generate_09_rna_degradosome.py)
  - **Generated 3D Asset:** [`./09_rna_degradosome/rna_degradosome_5m3p.glb`](./09_rna_degradosome/rna_degradosome_5m3p.glb) (7 decomposed `Piece_Deg_*` subunits)
- [x] **[`10_metabolic_respiratory_hubs/`](./10_metabolic_respiratory_hubs/README.md) — Pyruvate Dehydrogenase Megacomplex (`1EAE`) & Cytochrome $bo_3$ Ubiquinol Oxidase (`6WTI`)**
  - **Python Generator:** [`./10_metabolic_respiratory_hubs/generate_10_metabolic_respiratory_hubs.py`](./10_metabolic_respiratory_hubs/generate_10_metabolic_respiratory_hubs.py)
  - **Generated 3D Asset:** [`./10_metabolic_respiratory_hubs/metabolic_hubs.glb`](./10_metabolic_respiratory_hubs/metabolic_hubs.glb) (8 decomposed `Piece_Met_*` subunits)
- [x] **[`11_periplasmic_transport_sura_male/`](./11_periplasmic_transport_sura_male/README.md) — Periplasmic Escort & Solute Transport: SurA Holdase (`1M5Y`) & MalE–MalFGK$_2$ ABC Transporter (`1OMP` / `2R6G`)**
  - **Python Generator:** [`./11_periplasmic_transport_sura_male/generate_11_periplasmic_transport_sura_male.py`](./11_periplasmic_transport_sura_male/generate_11_periplasmic_transport_sura_male.py)
  - **Generated 3D Asset:** [`./11_periplasmic_transport_sura_male/periplasmic_transport.glb`](./11_periplasmic_transport_sura_male/periplasmic_transport.glb) (7 decomposed `Piece_Peri_*` subunits)

### Tier C — Antibiotic Efflux, Gene Transfer, Phage Immunity, Dormancy & Atomic Chemistry
- [x] **[`12_acrab_tolc_efflux_pump/`](./12_acrab_tolc_efflux_pump/README.md) — Tripartite Multidrug Efflux Pump (`AcrAB-TolC`, PDB `5V5S`)**
  - **Python Generator:** [`./12_acrab_tolc_efflux_pump/generate_12_acrab_tolc_efflux_pump.py`](./12_acrab_tolc_efflux_pump/generate_12_acrab_tolc_efflux_pump.py)
  - **Generated 3D Asset:** [`./12_acrab_tolc_efflux_pump/efflux_5v5s.glb`](./12_acrab_tolc_efflux_pump/efflux_5v5s.glb) (7 decomposed `Piece_5V5S_*` subunits)
- [x] **[`13_conjugation_secretion_systems/`](./13_conjugation_secretion_systems/README.md) — Horizontal Gene Transfer & Secretion: Conjugative T4SS (`7OKO`), T3SS Injectisome (`7AH9`), & T6SS Spear (`6H3L`)**
  - **Python Generator:** [`./13_conjugation_secretion_systems/generate_13_conjugation_secretion_systems.py`](./13_conjugation_secretion_systems/generate_13_conjugation_secretion_systems.py)
  - **Generated 3D Asset:** [`./13_conjugation_secretion_systems/secretion_systems.glb`](./13_conjugation_secretion_systems/secretion_systems.glb) (8 decomposed `Piece_Sec_*` subunits)
- [x] **[`14_crispr_cas_phage_defense/`](./14_crispr_cas_phage_defense/README.md) — Prokaryotic Adaptive Immunity: Type I-E CRISPR-Cas Cascade (`1VY8` / `5H9F`) & EcoRI Endonuclease (`1ERI`)**
  - **Python Generator:** [`./14_crispr_cas_phage_defense/generate_14_crispr_cas_phage_defense.py`](./14_crispr_cas_phage_defense/generate_14_crispr_cas_phage_defense.py)
  - **Generated 3D Asset:** [`./14_crispr_cas_phage_defense/crispr_defense_1vy8.glb`](./14_crispr_cas_phage_defense/crispr_defense_1vy8.glb) (7 decomposed `Piece_CRISPR_*` subunits)
- [x] **[`15_storage_granules_endospores/`](./15_storage_granules_endospores/README.md) — Cytoplasmic Storage Inclusions (Glycogen, Volutin, PHB, Gas Vesicles, Magnetosomes) & Gram-Positive Endospore**
  - **Python Generator:** [`./15_storage_granules_endospores/generate_15_storage_granules_endospores.py`](./15_storage_granules_endospores/generate_15_storage_granules_endospores.py)
  - **Generated 3D Asset:** [`./15_storage_granules_endospores/storage_and_spores.glb`](./15_storage_granules_endospores/storage_and_spores.glb) (7 decomposed `Piece_Store_*` subunits)
- [x] **[`16_monomers_and_atomic_bonds/`](./16_monomers_and_atomic_bonds/README.md) — Level 5 Chemical Monomers (`ATP`, `Lipid II`, `PE/PG`, `tRNA`) & Level 6 Quantum/Atomic Bonds**
  - **Python Generator:** [`./16_monomers_and_atomic_bonds/generate_16_monomers_and_atomic_bonds.py`](./16_monomers_and_atomic_bonds/generate_16_monomers_and_atomic_bonds.py)
  - **Generated 3D Asset:** [`./16_monomers_and_atomic_bonds/atomic_chemistry.glb`](./16_monomers_and_atomic_bonds/atomic_chemistry.glb) (7 RDKit-embedded `Piece_Atom_*` subunits)
