# Interactive Cell Division Simulator — Binary Fission, Mitosis & Meiosis (`cell_division_realistic.html`)

- **Entrypoint:** [`cell_division_realistic.html`](../cell_division_realistic.html) -> [`src/pages/cell_division_realistic.ts`](../src/pages/cell_division_realistic.ts)
- **Explorer Root:** `real-cell-division` (Stage 5.1)
- **Cinema PBR Engine:** Built on [`src/core/cinematic_stage.ts`](../src/core/cinematic_stage.ts) with live 3-mechanism toggle (`Mitosis 2n→2×2n`, `Meiosis 2n→4×1n` with crossing-over, `Binary Fission E. coli`) and scrubbable timeline slider (`t ∈ [0, 1]`) plus a persistent circular Molecular Nanomachine & Holliday Junction inset.
- **Real RCSB PDB Structures (`src/molecules/pdb_division.ts`):** `6UNX` (FtsZ), `2IUU` (FtsK), `6WG3` (Cohesin), `6YVU` (Condensin), `3VKH` (Ndc80 Kinetochore), `7NJ1` (Separase–Securin), `1II6` (Kinesin-5 Eg5), `2Q2E` (Spo11/TopVI), `5H1B` (RAD51/DMC1), `4CPC` (SYCP3).
- **Views (`6`):** `overview`, `fission`, `mitosis_spindle`, `checkpoint`, `meiosis_crossover`, `molecular_inset`.
- **Inspectable Parts (`20`):** `cell_cortex`, `nuclear_env`, `centrosome`, `spindle_mt`, `kinesin5`, `sister_chromatids`, `condensin`, `cohesin`, `kinetochore`, `separase`, `contractile_ring`, `bivalent`, `synaptonemal`, `spo11`, `rad51`, `chiasma`, `holliday`, `ftsz_ring`, `par_segregation`, `dna_basepair`.
