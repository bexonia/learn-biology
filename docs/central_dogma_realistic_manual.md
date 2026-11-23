# Central Dogma, Alternative Splicing & Point-Mutation Explorer (`central_dogma_realistic.html`)

- **Source:** `src/pages/central_dogma_realistic.ts` · **PDBs (`src/molecules/pdb_central_dogma.ts`):** `6QEL` (Helicase), `6TNY` (DNA Pol δ + PCNA), `1I50` (RNA Pol II), `5YZG` (Spliceosome C), `4UG0` (80S Ribosome), `1EHZ` (tRNA), `2KHO` (Hsp70), `6NR8` (TRiC/CCT), `2HHB` (HbA WT), `2HBS` (HbS Sickle Fiber), `5O66` (E. coli AcrB).
- **Views (`6`):** `overview`, `replisome`, `spliceosome`, `translation`, `mutation_bench`, `atoms`.
- **Interactive Controls:** `#spliceBtn` toggles `isoform_a` (Exons 1+2+3) ↔ `isoform_b` (Exon 2 skipped in lariat); `#mutBtn` cycles `hba_wt` (`GAG → Glu6`) → `hbs_mut` (`GTG → Val6` fiber) → `acrb_sel` (`GGC → GAC` efflux).
- **20 Inspectable Parts:** `chromatin`, `helicase`, `pol_delta`, `rna_pol2`, `pre_mrna`, `spliceosome`, `intron_lariat`, `exon_junction`, `npc`, `mature_mrna`, `ribosome_80s`, `trna_ape`, `polypeptide`, `polysome`, `hsp70`, `tric_groel`, `hb_wildtype`, `hb_sickle_fiber`, `acrb_pocket`, `codon_atoms`.
