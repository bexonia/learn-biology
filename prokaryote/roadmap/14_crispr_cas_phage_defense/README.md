# Module 14: Prokaryotic Adaptive & Innate Immunity — Type I-E CRISPR-Cas Cascade (`1VY8` / `5H9F`) & EcoRI Restriction Endonuclease (`1ERI`)

* **Status:** `[x]` Python Generator & 3D `.glb` Asset Built (`[ ]` Frontend UI Wiring Pending)
* **Target Scale ID:** `crispr_defense`
* **Discrete Python Generator:** [`./generate_14_crispr_cas_phage_defense.py`](./generate_14_crispr_cas_phage_defense.py)
* **Generated 3D Model:** [`./crispr_defense_1vy8.glb`](./crispr_defense_1vy8.glb)
* **Biological Category:** Antiviral Ribonucleoprotein Surveillance Complex (405 kDa, $19\,\text{nm}$) & Innate Restriction-Modification DNA Scissors

---

## 1. Scientific & Structural Overview

Bacteria are outnumbered $10:1$ by **bacteriophages** (viruses that infect bacteria). To prevent injected viral DNA from hijacking the cell, prokaryotes deploy a two-layered genetic immune system:

1. **Innate Immunity — Restriction-Modification (`EcoRI`, PDB `1ERI`):**
   * Homodimeric **EcoRI Endonuclease (`1ERI`)** scans DNA for the palindromic 6-bp sequence `5'-GAATTC-3'`. Host chromosomal DNA (`nucleoid`) is protected because a cognate methyltransferase methylates the central adenine ($N^6\text{-methyladenine}$); unmethylated invading phage DNA is kinked by $50^\circ$ inside EcoRI and cleaved on both strands via a $\text{Mg}^{2+}$-catalyzed phosphodiester attack, generating sticky `5'-AATT` overhangs.
2. **Adaptive Immunity — *E. coli* Type I-E CRISPR-Cas `Cascade` & `Cas3` Helicase-Nuclease (`1VY8` / `5H9F` / `6C66`):**
   * While Streptococcus *Cas9* (`4OO8`) is famous in biotechnology, native **Escherichia coli K-12** uses the **Type I-E CRISPR-Cas system**, a 405 kDa seahorse-shaped ribonucleoprotein complex called **Cascade** ($\text{Cas8e}_1\text{–Cas11}_2\text{–Cas7}_6\text{–Cas5e}_1\text{–Cas6e}_1$) assembled around a $61\text{-nt}$ **CRISPR guide RNA (crRNA)**:
   * **Cas6e (Head) & Cas5e (Tail):** Cap the 3' hairpin and 5' handle of the crRNA.
   * **Hexameric Cas7 Helical Backbone & Cas11 Belly:** Cradle the $32\text{-nt}$ spacer RNA sequence in 6-nucleotide segments.
   * **Cas8e (Cse1) PAM Sensor & R-Loop Locking (`5H9F`):** Scans invading phage dsDNA for a **3-bp Protospacer Adjacent Motif (PAM, `5'-AAG-3'`)**. Upon PAM recognition, Cascade melts the phage DNA duplex, hybridizes the target strand to the crRNA spacer, and flips the displaced non-target DNA strand into a locked **R-loop**.
   * **Cas3 Processive Shredder Recruitment (`6C66`):** Only a locked full R-loop changes the conformation of Cas8e/Cas11 to recruit **Cas3**—an iron-sulfur ($\text{Fe-S}$), ATP-dependent $3'\to5'$ helicase-endonuclease that reels in and shreds the invading bacteriophage genome into single-stranded fragments.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`1VY8`** — Crystal Structure of *E. coli* Type I-E CRISPR-Cas Surveillance Complex (Cascade) Bound to crRNA (X-ray $3.0\,\text{\AA}$, CC0 Public Domain).
  * **`5H9F`** — *E. coli* Cascade Bound to Target dsDNA Forming a Full R-Loop (X-ray $2.45\,\text{\AA}$).
  * **`6C66`** — Cryo-EM Structure of *E. coli* Cascade–dsDNA–Cas3 Nuclease-Helicase Holocomplex ($3.3\,\text{\AA}$).
  * **`1ERI`** — *E. coli* EcoRI Restriction Endonuclease Dimer Bound to Palindromic `GAATTC` DNA Duplex ($2.7\,\text{\AA}$).

---

## 3. 3D Subunit Mesh Decomposition (`Piece_CRISPR_*`)

The Blender generator [`scripts/generate_1vy8_crispr_defense.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_1vy8_crispr_defense.py) must export [`client/public/models/crispr_defense_1vy8.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/crispr_defense_1vy8.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_CRISPR_crRNA_Guide` | $61\text{-nt}$ CRISPR Guide RNA (5' Handle + 32-nt Spacer + 3' Hairpin) | `1VY8` / `5H9F` | `#7209B7` | `(0.0, 0.0, +4.0)` |
| `Piece_CRISPR_Cas7_Backbone` | Hexameric Cas7 (`Cas7.1–7.6`) Helical Seahorse Spine | `1VY8` | `#00B4D8` | `(-3.5, +2.0, 0.0)` |
| `Piece_CRISPR_Cas8e_PAM_Tail` | Cas8e (`Cse1`) Large Subunit PAM Sensor & Cas5e Tail | `5H9F` | `#FFB703` | `(-4.0, -4.5, 0.0)` |
| `Piece_CRISPR_Cas11_Cas6e` | Dimeric Cas11 (`Cse2`) R-Loop Lock Belly & Cas6e 3'-RNase Head | `1VY8` | `#06D6A0` | `(+3.0, +4.5, 0.0)` |
| `Piece_CRISPR_Phage_DNA_RLoop` | Invading Bacteriophage dsDNA + Melted R-Loop & `5'-AAG-3'` PAM | `5H9F` | `#F72585` | `(+2.5, -1.5, +4.0)` |
| `Piece_CRISPR_Cas3_Shredder` | Recruited Cas3 ATP-Dependent Helicase / HD-Nuclease Shredder | `6C66` | `#FF7B00` | `(+5.5, -4.5, 0.0)` |
| `Piece_CRISPR_EcoRI_Scissors` | Innate EcoRI Homodimeric Restriction Endonuclease (`1ERI`) | `1ERI` | `#00F5D4` | `(+8.5, +3.0, -2.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['crispr_defense']`)

* **Upstream Donor:** CRISPR Array Transcription (`rnap`) + Cas1–Cas2 Spacer Acquisition + Invading Phage DNA Injection
* **Inputs:**
  * $\text{Unmethylated Invading Bacteriophage dsDNA}$
  * $\text{crRNA-Loaded Cascade Complex} + \text{Cas3} + \text{ATP} + \text{Mg}^{2+}/\text{Co}^{2+}$
* **Outputs:**
  * $\text{Shredded Single-Stranded Phage DNA Fragments ($<50\,\text{nt}$)}$
  * $\text{Preserved Host Nucleoid Integrity}$
* **Downstream Consumer:** RecBCD / Exonuclease I Nucleotide Salvage Pool & Cas1–Cas2 Primed Spacer Acquisition
* **Energy Currency:** Base-Pairing Hybridization Free Energy ($\Delta G_{\text{R-loop}}$, ATP-independent surveillance) & Cas3 Helicase ATP Hydrolysis
* **Turnover Rate ($k_{\text{cat}}$):** PAM 3D diffusion search $\sim 10^3\text{ sites/s}$; Cas3 processive DNA shredding $\sim 300\,\text{bp/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['crispr_defense']`)

1. **`rloop_zipping`** (*PAM Recognition & R-Loop Directional Propagation*, `0%` = PAM Scanning, `50%` = Seed Bubble Melting, `100%` = Full 32-nt R-Loop Lock & Cas3 Recruitment)
2. **`pam_mutation_escape`** (*Phage PAM Escape Mutation Toggle*, `0` = Wild-Type `5'-AAG-3'` PAM [Cleaved], `1` = Mutated `5'-CCG-3'` Self/Escape Sequence [Ignored])
3. **`cas3_atp_shredding`** (*Cas3 Helicase-Nuclease Speed*, `0%` to `200%`, default `100%`)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Two Lines of Antiviral Defense:** Frame both `Piece_CRISPR_EcoRI_Scissors` and the seahorse-shaped `Piece_CRISPR_Cas7_Backbone`. Contrast innate Restriction-Modification (`EcoRI` cutting unmethylated `GAATTC` sites) with adaptive CRISPR-Cas memory.
2. **Stage 2 — The Seahorse Architecture of *E. coli* `Cascade` (`1VY8`):** Focus on `Piece_CRISPR_crRNA_Guide`, `Piece_CRISPR_Cas7_Backbone`, and `Piece_CRISPR_Cas11_Cas6e`. Show how six Cas7 subunits spiral around a 61-nt CRISPR RNA "mugshot" copied from a previous viral survivor.
3. **Stage 3 — `Cas8e` PAM Scanning (`5'-AAG-3'`):** Zoom into `Piece_CRISPR_Cas8e_PAM_Tail` and `Piece_CRISPR_Phage_DNA_RLoop`. Before unwinding any DNA, Cas8e checks for a 3-letter PAM tag (`AAG`) present in the virus but absent in the bacterium's own CRISPR locus—preventing autoimmune self-destruction.
4. **Stage 4 — Directional R-Loop Zipping & The `Cas11` Conformational Lock (`5H9F`):** Watch the viral DNA strands separate as the target strand base-pairs with `Piece_CRISPR_crRNA_Guide` in 6-nucleotide steps, while the Cas11 belly subunits shift to lock the displaced non-target strand into an R-loop.
5. **Stage 5 — Recruiting `Cas3` to Shred the Viral Genome (`6C66`):** Focus on `Piece_CRISPR_Cas3_Shredder`. Once the full 32-nt R-loop locks, Cas8e recruits the Cas3 helicase-nuclease, which nicks the exposed strand and burns ATP to reel in and shred the entire phage chromosome.

---

## 7. Implementation Checklist

- [x] Create [`./generate_14_crispr_cas_phage_defense.py`](./generate_14_crispr_cas_phage_defense.py) and export [`./crispr_defense_1vy8.glb`](./crispr_defense_1vy8.glb) and `../../client/public/models/crispr_defense_1vy8.glb`.
- [ ] Create [`client/src/core/crisprDefense.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/crisprDefense.ts).
- [ ] Register `'crispr_defense'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
