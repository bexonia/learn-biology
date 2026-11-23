# Gram-Positive Bacterium & Armored Endospore (`gram_positive_realistic.html`)

- **Entrypoint:** [`gram_positive_realistic.html`](../gram_positive_realistic.html) -> [`src/pages/gram_positive_realistic.ts`](../src/pages/gram_positive_realistic.ts)
- **Explorer Root:** `real-gram-positive` (Stage 1.3)
- **Cinema PBR Engine:** Built on [`src/core/cinematic_stage.ts`](../src/core/cinematic_stage.ts) (ACESFilmic tone mapping, 2048px PCFSoft shadows, PMREM studio reflections, backlit wet-gel subsurface scattering, zero-z-fighting cutaway `capStrip` layers, opaque-discard 4x4 `MOL` flows).
- **Real RCSB PDB Cryo-EM/Crystal Structures (`src/molecules/pdb_gram_positive.ts`):** `7BN9` (PBP3), `2KID` (Sortase A), `2W5Q` (LtaS), `2VXY` (FtsZ), `3UZ0` (SpoIIIAH–SpoIIQ), `1GSK` (CotA), `4FET` (SleB), `2Z3X` (alpha/beta SASP–DNA).
- **Interactive Modes (`#modeBtn`):** `Vegetative` · `Gram Stain` (crystal violet–iodine retention vs. ethanol washout on the adjacent true-scale *E. coli* strip) · `Beta-Lactam` (penicillin blocking exposed PBP3 transpeptidases) · `Endospore` (concentric 6-layer survival vault with Ca-DPA and A-form SASP-DNA).
- **Views (`6`):** `overview`, `wall_compare`, `sporulation`, `endospore`, `core`, `molecules`.
- **Inspectable Parts (`20`):** `pg_wall`, `teichoic`, `pm`, `ecoli_strip`, `pbp`, `sortase`, `septum`, `spoiiie`, `forespore`, `dna`, `ribosome`, `exosporium`, `coat`, `cortex`, `germ_wall`, `spore_im`, `core`, `ca_dpa`, `sasp_dna`, `crosslink`.
