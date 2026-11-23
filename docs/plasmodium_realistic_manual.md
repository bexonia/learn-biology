# Eukaryotic Intracellular Parasite — *Plasmodium falciparum* (`plasmodium_realistic.html`)

- **Entrypoint:** [`plasmodium_realistic.html`](../plasmodium_realistic.html) -> [`src/pages/plasmodium_realistic.ts`](../src/pages/plasmodium_realistic.ts)
- **Explorer Root:** `real-plasmodium` (Stage 2.5)
- **Cinema PBR Engine:** Built on [`src/core/cinematic_stage.ts`](../src/core/cinematic_stage.ts) featuring a cutaway crimson biconcave human red blood cell (`7.5 µm`) invaded by a `1.5 µm` eukaryotic *Plasmodium falciparum* merozoite inside an iridescent parasitophorous vacuole (`PVM`), alveolar Inner Membrane Complex (`IMC`), polar apical complex with twin rhoptries and micronemes, true 14-chromosome nucleus + 80S ribosomes + branched mitochondrion, cutaway 4-membrane secondary-endosymbiosis apicoplast (`35 kb` DNA + `70S` ribosomes), acidic digestive vacuole stacking dark hemozoin biocrystals, and circular atomic Fe³⁺–protoporphyrin IX / Fe–O propionate dimer inset.
- **Real RCSB PDB Structures (`src/molecules/pdb_protists.ts`):** `6YCX` (PfMyoA–MTIP glideosome), `3SRI` (AMA1–RON2 moving junction), `4U0Q` (PfRH5–Basigin docking bridge), `4CBU` (PfActI actin), `1GZX` (human hemoglobin tetramer).
- **Views (`6`):** `overview`, `invasion`, `core`, `apicoplast`, `hemozoin`, `atoms`.
- **Inspectable Parts (`20`):** `rbc`, `pvm`, `imc`, `apical_complex`, `rhoptries`, `micronemes`, `moving_junction`, `pfrh5`, `glideosome`, `actin`, `nucleus`, `ribosome_80s`, `mito`, `apicoplast`, `apicoplast_membranes`, `apicoplast_dna`, `digestive_vacuole`, `hemoglobin`, `hemozoin`, `iron_atom`.
