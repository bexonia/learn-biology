# Module 05: Chemosensory Receptor Array (`6S1K` / `3JA6`, MCP Trimers-of-Dimers + CheA/CheW Baseplate)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `chemosensory_mcp`
* **Biological Category:** Transmembrane Sensory Lattice & Signal Transduction Array ($25\,\text{nm}$ vertical span $\times$ hexagonal polar patch)

---

## 1. Scientific & Structural Overview

Bacteria navigate chemical gradients (**chemotaxis**) using a paracrystalline hexagonal honeycomb array of **Methyl-Accepting Chemotaxis Proteins (MCPs: Tar, Tsr, Trg, Tap)** clustered at the cell poles (`CELLULAR_ELEMENTS_CATALOG.md` Section 1.2):
* **Periplasmic 4-Helix Bundle Ligand Domain:** Binds attractants (L-aspartate, L-serine, maltose via MalE) or repellents ($\text{Ni}^{2+}$, $\text{Co}^{2+}$, extreme pH) in the periplasm.
* **Transmembrane Helices (TM1/TM2) & HAMP Domain:** Converts a tiny $1.5\text{–}2.0\,\text{\AA}$ downward piston displacement of helix TM2 into a rotary/scissoring conformational signal across the inner membrane.
* **Cytoplasmic Coiled-Coil Methylation Stalk:** Arranged as **trimers-of-dimers** that converge at their hairpin tips; adaptive glutamate residues are methylated by **CheR** (using SAM) and demethylated by **CheB-P** to reset sensitivity over 5 orders of magnitude of attractant concentration.
* **CheA/CheW Baseplate Ring:** Hexameric rings of the adapter **CheW** and the dimeric histidine kinase **CheA**. Repellent binding (or attractant removal) activates CheA autophosphorylation ($\text{ATP} \to \text{CheA-His48-P}$), which transfers the phosphoryl group to the diffusible response regulator **CheY** ($\to \text{CheY-P}$).
* **Signal to Flagellar Motor (`motor`):** $\text{CheY-P}$ diffuses across the cytoplasm to bind **FliM/FliN** on the flagellar C-ring, switching rotation from Counter-Clockwise (**Run**) to Clockwise (**Tumble**); the phosphatase **CheZ** rapidly dephosphorylates $\text{CheY-P}$ to terminate tumbles.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`6S1K` / `3JA6`** — *E. coli* Core Chemosensory Array Hexagonal Lattice (Cryo-ET / Cryo-EM $3.9\,\text{\AA}$, CC0 Public Domain).
  * **`1QU7`** — Cytoplasmic Signaling Domain of Serine Chemoreceptor Tsr (Trimer-of-Dimers).
  * **`2CH4`** — Periplasmic Aspartate-Binding Domain of Tar Receptor.
  * **`1FWP` / `1FQW`** — CheY Response Regulator in Unphosphorylated vs. Activated ($\text{BeF}_3^-$-bound) State.
* **Small Molecules (PubChem / RDKit):**
  * **L-Aspartate (Attractant):** PubChem CID `5960`.
  * **L-Serine (Attractant):** PubChem CID `5951`.
  * **S-Adenosylmethionine (SAM, CheR Methyl Donor):** PubChem CID `34755`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_6S1K_*`)

The Blender generator [`scripts/generate_6s1k_chemosensory_array.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6s1k_chemosensory_array.py) must export [`client/public/models/chemosensory_6s1k.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/chemosensory_6s1k.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_6S1K_Periplasmic_Sensors` | Periplasmic Ligand-Binding 4-Helix Bundles (Tar/Tsr) | `2CH4` | `#00B4D8` | `(0.0, +6.0, 0.0)` |
| `Piece_6S1K_Inner_Membrane` | Inner Cytoplasmic Phospholipid Bilayer Slab | Procedural | `#06D6A0` | `(0.0, +2.0, -4.0)` |
| `Piece_6S1K_HAMP_Transducer` | Transmembrane Helices & Cytoplasmic HAMP Signal Converter | `6S1K` | `#48CAE4` | `(-3.5, +1.0, +3.0)` |
| `Piece_6S1K_MCP_Trimers` | Cytoplasmic Coiled-Coil Stalks (Trimers-of-Dimers) | `1QU7` / `6S1K` | `#9D4EDD` | `(0.0, -1.5, +3.5)` |
| `Piece_6S1K_CheA_CheW_Baseplate` | Hexagonal CheA Histidine Kinase & CheW Adapter Ring | `6S1K` / `3JA6` | `#FFB703` | `(0.0, -5.5, 0.0)` |
| `Piece_6S1K_CheR_CheB_Adaptors` | Methyltransferase CheR & Methylesterase CheB | `1BC5` | `#FB8500` | `(+4.5, -3.0, 0.0)` |
| `Piece_6S1K_CheY_Messengers` | Diffusible $\text{CheY-P}$ Response Regulator Shuttle Stream | `1FWP` | `#F72585` | `(0.0, -8.0, +2.5)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['chemosensory_mcp']`)

* **Upstream Donor:** Periplasmic Nutrient Diffusion via OmpF Porin (`envelopes`) & MalE (`male_transporter`)
* **Inputs:**
  * $\text{Periplasmic Attractant Gradient ($\Delta[\text{Asp/Ser}]$)}$
  * $\text{ATP}$ (for CheA autophosphorylation)
  * $\text{S-Adenosylmethionine (SAM)}$ (for CheR receptor methylation)
* **Outputs:**
  * $\text{Phosphorylated }\text{CheY-P}\text{ Diffusible Messenger Flux}$
  * $\text{ADP} + \text{P}_i + \text{Methanol}$ (from CheB demethylation)
* **Downstream Consumer:** Flagellar Rotary Motor C-Ring (`motor`, `FliM/FliN` switch complex)
* **Energy Currency:** $\text{ATP}$ (Kinase Phosphotransfer) & $\text{SAM}$ (Methylation Adaptation Memory)
* **Turnover Rate ($k_{\text{cat}}$):** Cooperative gain $\sim 35\times$; CheA autophosphorylation $\sim 20\text{–}50\,\text{s}^{-1}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['chemosensory_mcp']`)

1. **`attractant_conc`** (*Periplasmic Attractant [Asp/Ser]*, `0%` = Zero Attractant / High CheA Kinase / High CheY-P Tumble Signal, `100%` = High Attractant / Kinase Inhibited / Smooth Run)
2. **`methylation_level`** (*CheR/CheB Adaptation State*, `0` to `4` Methyl Groups per MCP monomer)
3. **`cooperativity_gain`** (*Hexagonal Array Allosteric Coupling*, `1x` to `35x`)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — The Bacterial Sensory Nose:** Frame the hexagonal receptor array spanning the inner membrane. Explain how thousands of chemoreceptors assemble into a cooperative honeycomb lattice at the cell pole to detect nanomolar chemical changes.
2. **Stage 2 — Periplasmic Attractant Binding & The $2\,\text{\AA}$ Piston:** Focus on `Piece_6S1K_Periplasmic_Sensors` and `Piece_6S1K_HAMP_Transducer`. When aspartate or serine binds in the periplasm, it pushes transmembrane helix TM2 downward by just $1.5\,\text{\AA}$ into the HAMP domain.
3. **Stage 3 — Trimers-of-Dimers & Cooperative Amplification:** Focus on `Piece_6S1K_MCP_Trimers`. Three receptor dimers meet at their cytoplasmic tips, amplifying the tiny piston shift across the entire hexagonal CheA/CheW baseplate with a $35\times$ gain.
4. **Stage 4 — CheA Kinase Switching & $\text{CheY-P}$ Dispatch:** Focus on `Piece_6S1K_CheA_CheW_Baseplate` and `Piece_6S1K_CheY_Messengers`. When attractant drops, CheA autophosphorylates using ATP and transfers phosphate to CheY. Glowing magenta $\text{CheY-P}$ messengers stream into the cytoplasm toward the flagellar motor (`motor`) to trigger a tumble.
5. **Stage 5 — Molecular Memory via CheR/CheB Methylation:** Focus on `Piece_6S1K_CheR_CheB_Adaptors`. Show how CheR adds methyl groups and CheB removes them on the receptor stalk, resetting the receptor's baseline so the bacterium compares *current* chemical concentration against the *recent past*.

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_6s1k_chemosensory_array.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_6s1k_chemosensory_array.py) and export `client/public/models/chemosensory_6s1k.glb`.
- [ ] Create [`client/src/core/chemosensoryArray.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/chemosensoryArray.ts).
- [ ] Register `'chemosensory_mcp'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
