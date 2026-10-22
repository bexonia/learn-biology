# Module 01: Coupled Transcription–Translation Expressome (`6X9Q`) & Eukaryotic Comparison

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `expressome`
* **Visual Primer Reference:** [`primer_fig4.png`](file:///c:/Users/devcd/GenProjects/primer_fig4.png) (*"THE PROKARYOTIC GENOME" — Coupled Transcription-Translation & Eukaryotic Comparison Inset*)
* **Biological Category:** Macromolecular RNA–Protein Supercomplex (~3.0 MDa, $30\,\text{nm}$)

---

## 1. Scientific & Structural Overview

Because prokaryotes lack a nuclear membrane separating their chromosome from the cytoplasm, **70S ribosomes latch onto the 5' end of a nascent mRNA transcript while RNA Polymerase (RNAP) is still actively transcribing the DNA template**. This physical supercomplex—the **Expressome**—is bridged by the transcription elongation factor **NusG** (and **NusA**), which simultaneously binds the RNAP $\beta'$ clamp helices via its N-terminal domain (NGN) and the 30S ribosomal protein **uS10** via its C-terminal KOW domain.

Physical coupling prevents premature Rho-dependent transcription termination, suppresses RNAP backtracking, and matches transcriptional speed ($\sim 50\,\text{nt/s}$) to ribosomal translation speed ($\sim 16\text{–}20\,\text{aa/s} = 48\text{–}60\,\text{nt/s}$).

---

## 2. Trusted Open-Source 3D Data Sources

* **Primary RCSB PDB Structure:** **`6X9Q`** (*Escherichia coli* NusG-coupled Expressome in the collided/coupled state, Cryo-EM $3.7\,\text{\AA}$, CC0 Public Domain).
  * **Alternate / Uncoupled State PDB:** **`6X7F`** (NusG-NusA coupled Expressome).
  * **Pre-Built Workspace GLB:** [`c:\Users\devcd\GenProjects\ecoli-vulkan-engine\web\models\6X9Q.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/6X9Q.glb) (43.7 MB).
* **Small-Molecule Cofactors (PubChem / RDKit):**
  * **ATP / NTPs:** PubChem CID `5957` (RNAP substrate).
  * **GTP:** PubChem CID `135398633` (EF-Tu / EF-G translation factor fuel).
  * **ppGpp (Stringent Response Alarmone):** PubChem CID `135398635`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_6X9Q_*`)

The Blender generator [`scripts/generate_6x9q_expressome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6x9q_expressome.py) must export [`client/public/models/expressome_6x9q.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/expressome_6x9q.glb) containing these exact named child meshes:

| Mesh Object Name | Biological Subunit | PDB `6X9Q` Chains | Color Hex | Taxonomy Role | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Piece_6X9Q_RNAP_Core` | RNAP Core ($\alpha_2\beta\beta'\omega$) | `1, 2, 3, 4, 5` | `#00B4D8` | Cyan Polymerase Core | `(-5.5, +3.0, 0.0)` |
| `Piece_6X9Q_DNA_Duplex` | Upstream/Downstream DNA & Transcription Bubble | `X, Y` | `#3A0CA3` | Deep Indigo Chromosomal DNA | `(-8.0, +5.0, 0.0)` |
| `Piece_6X9Q_NusG_Bridge` | NusG Coupling Factor (NGN + KOW Domains) | `6` | `#FFB703` | Catalytic Amber Coupling Bridge | `(-1.5, +4.0, +3.5)` |
| `Piece_6X9Q_NusA_Modulator` | NusA RNA-Binding Elongation Factor | `7` | `#FB8500` | Warm Orange RNA Chaperone | `(-2.5, -3.5, +3.5)` |
| `Piece_6X9Q_Nascent_mRNA` | Continuous mRNA Strand (RNAP Exit $\to$ 30S Channel) | `M` | `#F72585` | Vivid Magenta mRNA Transcript | `(0.0, 0.0, +4.5)` |
| `Piece_6X9Q_Ribosome_30S` | 30S Small Ribosomal Subunit (16S rRNA + uS10/uS3) | `A` + `B..U` | `#06D6A0` | Seafoam Green Decoding Subunit | `(+4.0, -3.5, 0.0)` |
| `Piece_6X9Q_Ribosome_50S` | 50S Large Ribosomal Subunit (23S/5S rRNA + L-proteins) | `a, b` + `c..z` | `#7209B7` | Royal Purple Peptidyl Transferase | `(+6.5, +3.5, 0.0)` |
| `Piece_6X9Q_tRNA_Sites` | A-site, P-site, and E-site tRNAs + Nascent Peptide | `v, w, x, P` | `#FFD166` | Gold Adapter tRNAs | `(+3.0, +1.0, -4.5)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['expressome']`)

* **Upstream Donor:** Chromosomal Operon Promoter & Nucleoid DNA (`nucleoid`) + Initiating RNA Polymerase (`rnap`)
* **Inputs:**
  * $\text{dsDNA Template}$
  * $\text{NTPs (ATP, UTP, GTP, CTP)}$ ($50\,\text{nt/s}$)
  * $\text{Aminoacyl-tRNA}\cdot\text{EF-Tu}\cdot\text{GTP}$ ($17\,\text{aa/s}$)
* **Outputs:**
  * $\text{Folded Nascent Polypeptide Chain}$
  * $\text{Protected Full-Length Polycistronic mRNA}$
  * $\text{GDP} + \text{PP}_i + \text{P}_i + \text{Deacylated tRNA}$
* **Downstream Consumer:** Trigger Factor / DnaK Chaperones (`chaperones`) or SecYEG Translocon (`secyeg`)
* **Energy Currency:** $\Delta G^\circ$ from NTP Pyrophosphorolysis & GTP Hydrolysis
* **Turnover Rate ($k_{\text{cat}}$):** Synchronized $\sim 51\,\text{nt/s}$ (RNAP) $\equiv 17\,\text{codons/s}$ (70S Ribosome)

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['expressome']`)

1. **`coupling_distance`** (*NusG Tethering State*, `0.0` = Collided/Stalled, `1.0` = Optimal NusG-Coupled, `2.0` = Uncoupled/Rho-Vulnerable)
2. **`transcription_rate`** (*NTP Concentration / RNAP Velocity*, `0%` to `200%`, default `100%`)
3. **`comparison_mode`** (*Eukaryotic Comparison Split View*, `0` = Prokaryotic Coupled Cytoplasm, `1` = Eukaryotic Nuclear Envelope Separation Inset from `primer_fig4.png`)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Absence of a Nuclear Membrane:** Focus on the whole-cell nucleoid interface (`Piece_6X9Q_DNA_Duplex`). Explain how prokaryotic DNA sits directly in the ribosome-rich cytoplasm, unlike eukaryotic DNA enclosed inside a double-membraned nucleus.
2. **Stage 2 — Co-Transcriptional Ribosome Recruitment:** Focus on `Piece_6X9Q_Nascent_mRNA` emerging from the RNAP RNA-exit channel. As soon as the Shine-Dalgarno sequence clears RNAP, a 30S ribosomal subunit initiates translation on the still-growing mRNA.
3. **Stage 3 — The NusG Molecular Hitch:** Dolly to `Piece_6X9Q_NusG_Bridge`. Show how NusG's N-terminal domain clamps onto RNAP $\beta'$ while its C-terminal KOW domain latches onto ribosomal protein uS10 on the 30S head, physically tethering the two machines.
4. **Stage 4 — Synchronized Speed & Anti-Backtracking:** Focus on `Piece_6X9Q_RNAP_Core` + `Piece_6X9Q_Ribosome_30S`. Show how the trailing ribosome acts as a mechanical ratchet pushing RNAP forward at $\sim 51\,\text{nt/s}$ (3 nucleotides per 1 amino acid) while shielding the mRNA from Rho helicase termination.
5. **Stage 5 — Polycistronic Operon Translation & Polypeptide Exit:** Focus on `Piece_6X9Q_Ribosome_50S` and `Piece_6X9Q_tRNA_Sites`. Show the nascent protein emerging from the 50S exit tunnel while multiple ribosomes form a polysome train along the operon.

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_6x9q_expressome.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6x9q_expressome.py) and export `client/public/models/expressome_6x9q.glb`.
- [ ] Create [`client/src/core/expressomeCoupling.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/expressomeCoupling.ts) with `setExplodedProgress`, synchronized mRNA/codon animation, and the Eukaryotic Comparison overlay toggle.
- [ ] Register `'expressome'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
