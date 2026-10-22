# Module 09: Bacterial RNA Degradosome (`5M3P` / `2YKR`, RNase E, PNPase, RhlB Helicase, Enolase)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `rna_degradosome`
* **Biological Category:** Membrane-Tethered Multi-Enzyme mRNA Decay & RNA Quality Control Factory ($22\,\text{nm}$)

---

## 1. Scientific & Structural Overview

In *E. coli*, the average mRNA half-life is only **$2\text{–}5\,\text{minutes}$** (compared to hours in eukaryotes). This rapid mRNA turnover allows bacteria to reprogram gene expression within seconds when nutrients or temperatures shift (`CELLULAR_ELEMENTS_CATALOG.md` Section 1.7).

The master machine responsible for mRNA destruction and rRNA/tRNA maturation is the **Bacterial RNA Degradosome**, anchored to the cytoplasmic face of the inner membrane:
1. **RNase E N-Terminal Catalytic Tetramer (`2BGG` / `2C0B`, Residues 1–529):** A dimer-of-dimers endoribonuclease equipped with a **5'-monophosphate sensor pocket**. Once pyrophosphohydrolase **RppH** converts a transcript's protective 5'-triphosphate ($\text{5'-ppp}$) into a 5'-monophosphate ($\text{5'-p}$), RNase E latches onto the 5' end and makes internal endonucleolytic cuts along single-stranded AU-rich sites.
2. **Segment A Membrane Amphipathic Helix & Disordered C-Terminal Scaffold (Residues 530–1061, AlphaFold `P21513`):** Tethers the entire complex to the inner plasma membrane while serving as a flexible assembly hub for three partner enzymes:
3. **RhlB DEAD-Box RNA Helicase (`2YKR`):** Uses **ATP hydrolysis** to unwind stem-loop secondary structures (such as 3' Rho-independent terminator hairpins) that would otherwise block exonucleases.
4. **PNPase (Polynucleotide Phosphorylase, `5M3P` / `3GCM`):** A homotrimeric ring-shaped **$3'\to5'$ phosphorolytic exoribonuclease**. Instead of wasting energy by hydrolyzing RNA with water, PNPase uses **inorganic phosphate ($\text{P}_i$)** to cleave RNA from the 3' end into **nucleoside diphosphates ($\text{NDPs}$: ADP, UDP, GDP, CDP)**—conserving phosphodiester bond energy!
5. **Glycolytic Enolase (`2FYM`) & sRNA–Hfq Regulatory Input (`1KQ2`):** Enolase links metabolic energy sensing to mRNA decay, while hexameric **Hfq** delivers small regulatory RNAs (**sRNAs**) directly to the RNase E scaffold to trigger targeted destruction of specific mRNAs.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental & AlphaFold Structures:**
  * **`2C0B` / `2BGG`** — *E. coli* RNase E Catalytic Domain Tetramer Bound to RNA Substrate (X-ray $2.8\,\text{\AA}$, CC0 Public Domain).
  * **`5M3P` / `3GCM`** — *E. coli* Trimeric Polynucleotide Phosphorylase (PNPase) Core Ring Bound to RNase E Peptide.
  * **`2YKR` / `2FYM`** — Enolase–RNase E Peptide Complex & RhlB DEAD-Box Helicase.
  * **`1KQ2`** — Hexameric Hfq Sm-Like sRNA Chaperone Ring.
  * **AlphaFold DB `AF-P21513-F1`** — Full-Length *E. coli* RNase E C-Terminal Scaffold Coordinates.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Deg_*`)

The Blender generator [`scripts/generate_5m3p_rna_degradosome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_5m3p_rna_degradosome.py) must export [`client/public/models/rna_degradosome_5m3p.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/rna_degradosome_5m3p.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Deg_Inner_Membrane` | Inner Cytoplasmic Phospholipid Bilayer + Segment A Anchor | Procedural | `#06D6A0` | `(0.0, +5.5, 0.0)` |
| `Piece_Deg_RNaseE_Tetramer` | RNase E Endoribonuclease Catalytic Tetramer + $\text{Zn}^{2+}$ Link | `2C0B` | `#FFB703` | `(-4.0, +1.0, 0.0)` |
| `Piece_Deg_CTD_Scaffold` | Intrinsically Disordered C-Terminal Assembly Hub | `AF-P21513` | `#48CAE4` | `(0.0, 0.0, -3.5)` |
| `Piece_Deg_RhlB_Helicase` | RhlB ATP-Dependent DEAD-Box RNA Helicase | `2YKR` | `#FF7B00` | `(-2.5, -4.0, +3.0)` |
| `Piece_Deg_PNPase_Trimer` | PNPase Homotrimeric $3'\to5'$ Phosphorolytic Exonuclease Ring | `5M3P` / `3GCM` | `#9D4EDD` | `(+4.5, -2.5, 0.0)` |
| `Piece_Deg_Enolase_Dimer` | Glycolytic Enolase Sensor Dimer | `2FYM` | `#00B4D8` | `(+3.5, +2.5, +3.0)` |
| `Piece_Deg_Hfq_sRNA_Target` | Hfq Hexameric Ring + sRNA–mRNA Duplex Substrate | `1KQ2` | `#F72585` | `(-5.5, -2.0, +3.5)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['rna_degradosome']`)

* **Upstream Donor:** Translating 70S Polysomes (`ribosome`), RppH Pyrophosphohydrolase, & Hfq–sRNA Complexes
* **Inputs:**
  * $\text{5'-Monophosphorylated mRNA ($\text{5'-p-RNA}$)}$
  * $\text{Inorganic Phosphate ($n\,\text{P}_i$)} + \text{ATP}$ (for RhlB helicase unwinding)
* **Outputs:**
  * $\text{Recycled Nucleoside Diphosphates ($n\,\text{NDPs}$: ADP, UDP, GDP, CDP)}$
  * $\text{ADP} + \text{P}_i$ (from RhlB ATPase)
* **Downstream Consumer:** Nucleotide Diphosphate Kinase ($\text{NDP} \to \text{NTP}$) feeding RNA Polymerase (`rnap`)
* **Energy Currency:** Phosphorolysis Bond Conservation ($\text{RNA}_n + \text{P}_i \to \text{RNA}_{n-1} + \text{NDP}$) & RhlB ATP Hydrolysis
* **Turnover Rate ($k_{\text{cat}}$):** RNase E cleavage $\sim 1\text{–}5\text{ cuts/s}$; PNPase phosphorolysis $\sim 30\text{–}60\,\text{nt/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['rna_degradosome']`)

1. **`srna_hfq_targeting`** (*Hfq–sRNA Silencing Trigger*, `0%` = Basal Housekeeping Turnover, `100%` = Active Hfq–sRNA Recruitment & Rapid mRNA Shredding)
2. **`helicase_atp_flux`** (*RhlB Hairpin Unwinding Speed*, `0%` to `200%`, default `100%`)
3. **`phosphate_pool`** (*Cytoplasmic $[\text{P}_i]$ for PNPase Phosphorolysis*, `0%` = Stalled 3' Exonuclease, `100%` = Rapid NDP Recycling)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Why Bacteria Shred Their Own mRNA in 3 Minutes:** Frame the membrane-tethered degradosome (`Piece_Deg_Inner_Membrane` + `Piece_Deg_CTD_Scaffold`). Explain how rapid mRNA destruction lets bacteria switch metabolic programs almost instantly.
2. **Stage 2 — Hfq–sRNA Recognition & 5'-Monophosphate Sensing:** Focus on `Piece_Deg_Hfq_sRNA_Target` and `Piece_Deg_RNaseE_Tetramer`. Show how the Hfq ring pairs a small regulatory sRNA with its target mRNA, or how RNase E's sensor pocket detects a 5'-monophosphate end and slices the transcript internally.
3. **Stage 3 — Unwinding RNA Hairpins with `RhlB` Helicase:** Focus on `Piece_Deg_RhlB_Helicase`. Bacteria terminate mRNAs with tight stem-loop hairpins; RhlB burns ATP to unzip these knots into single-stranded RNA.
4. **Stage 4 — Energy-Saving Phosphorolysis in the `PNPase` Ring:** Zoom into `Piece_Deg_PNPase_Trimer`. Instead of hydrolyzing RNA into low-energy NMPs with water, the trimeric PNPase barrel attacks the RNA backbone with inorganic phosphate ($\text{P}_i$) to release high-energy **NDPs** ($\text{ADP, GDP, CDP, UDP}$).
5. **Stage 5 — Closing the Nucleotide Loop to RNA Polymerase:** Focus on `Piece_Deg_Enolase_Dimer` and the released NDPs. Adding just one phosphate converts NDPs back into NTPs for RNA Polymerase (`rnap`), saving the bacterium massive amounts of ATP.

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_5m3p_rna_degradosome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_5m3p_rna_degradosome.py) and export `client/public/models/rna_degradosome_5m3p.glb`.
- [ ] Create [`client/src/core/rnaDegradosome.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/rnaDegradosome.ts).
- [ ] Wire `'rna_degradosome'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
