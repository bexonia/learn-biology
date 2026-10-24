# Module 06: Type 1 Fimbriae Catch-Bond Adhesin (`6GTO` / `1TR7`) & Curli Amyloid Biofilm Fibers (`4B0M`)

* **Status:** `[x]` Python Generator & 3D `.glb` Asset Built (`[ ]` Frontend UI Wiring Pending)
* **Target Scale ID:** `pili_fimbriae` (with Curli Biofilm Dual-Inspector Mode)
* **Discrete Python Generator:** [`./generate_06_pili_fimbriae_curli_biofilm.py`](./generate_06_pili_fimbriae_curli_biofilm.py)
* **Generated 3D Model:** [`./pili_fimbriae_6gto.glb`](./pili_fimbriae_6gto.glb)
* **Biological Category:** Extracellular Chaperone-Usher Adhesion Pilus & Functional Amyloid Biofilm Matrix

---

## 1. Scientific & Structural Overview

As cataloged in [`CELLULAR_ELEMENTS_CATALOG.md` Sections 1.3 & 1.4](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_ELEMENTS_CATALOG.md), Gram-negative bacteria anchor themselves to host tissues and build protective multicellular biofilms using two non-flagellar surface systems:

1. **Type 1 Pilus / Fimbriae (Chaperone-Usher Pathway, `6GTO` & `1TR7`):**
   * **Periplasmic FimC Chaperone & Outer-Membrane FimD Usher Pore:** Because the periplasm has no ATP, pilus subunits fold via **Donor-Strand Exchange (DSE)**—each incoming **FimA** subunit inserts its N-terminal $\beta$-strand extension into the incomplete $\beta$-barrel groove of the preceding subunit inside the 24-stranded **FimD** outer-membrane usher.
   * **Helical FimA Rod ($7\,\text{nm}$ wide):** Coils into a spring-like right-handed helix (~3.4 subunits per turn) that can uncoil and recoil reversibly to absorb hydrodynamic fluid shear shock.
   * **Tip Fibrillum (`FimF`, `FimG`) & `FimH` Catch-Bond Adhesin (`1TR7`):** At the very tip sits the two-domain **FimH** lectin. Under low flow, the pilin domain allosterically squeezes the lectin domain into a low-affinity open conformation; when fluid shear pulls on the bacterium, the domains separate and snap the mannose-binding pocket into a **high-affinity tense state**—a mechanical **catch-bond** (like a Chinese finger trap).
2. **Curli Extracellular Amyloid Biofilm Fibers (`4B0M`):**
   * **Outer-Membrane CsgG Nonameric Secretion Channel (`4B0M`):** A 9-subunit, 36-stranded $\beta$-barrel crown pore gated by **CsgE** in the periplasm.
   * **CsgB Nucleator & CsgA Functional Amyloid Fibrils:** Unfolded **CsgA** monomers pass through CsgG and template onto outer-membrane **CsgB**, self-assembling into protease-resistant cross-$\beta$ amyloid ribbons that weave the extracellular biofilm matrix.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`1TR7`** — *E. coli* FimH Adhesin–FimC Chaperone Complex (X-ray $2.1\,\text{\AA}$, CC0 Public Domain). Pre-built in [`ecoli-vulkan-engine/web/models/1TR7.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1TR7.glb).
  * **`6GTO` / `3RFZ`** — FimD Outer-Membrane Usher Assembly Platform with Translocating Pilus Tip.
  * **`4B0M`** — *E. coli* CsgG Nonameric Outer-Membrane Curli Secretion Channel (X-ray $3.6\,\text{\AA}$).
* **Small Molecules (PubChem / RDKit):**
  * **$\alpha$-D-Mannose (FimH Catch-Bond Ligand):** PubChem CID `18950`.
  * **Cyclic di-GMP (`c-di-GMP`, Biofilm Master Second Messenger):** PubChem CID `135440063`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Pili_*`)

The Blender generator [`scripts/generate_pili_and_curli.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_pili_and_curli.py) must export [`client/public/models/pili_fimbriae_6gto.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/pili_fimbriae_6gto.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Pili_Outer_Membrane` | Outer LPS Membrane Bilayer Slab | Procedural | `#0077B6` | `(0.0, 0.0, -4.0)` |
| `Piece_Pili_FimD_Usher` | FimD 24-Stranded Outer-Membrane Usher Twin-Pore | `6GTO` / `3RFZ` | `#00B4D8` | `(-3.5, 0.0, 0.0)` |
| `Piece_Pili_FimC_Chaperone` | Periplasmic FimC Donor-Strand Chaperone | `1TR7` | `#06D6A0` | `(-3.5, -4.5, 0.0)` |
| `Piece_Pili_FimA_Helical_Rod` | Coiled Spring-Like FimA Helical Rod | `6GTO` | `#48CAE4` | `(-3.5, +4.5, 0.0)` |
| `Piece_Pili_FimH_CatchBond` | FimH Two-Domain Tip Adhesin + Mannose Pocket | `1TR7` | `#FFB703` | `(-3.5, +8.5, 0.0)` |
| `Piece_Pili_CsgG_Channel` | Curli CsgG Nonameric 36-Stranded Secretion Pore | `4B0M` | `#9D4EDD` | `(+4.0, 0.0, 0.0)` |
| `Piece_Pili_CsgB_Nucleator` | Outer-Membrane CsgB Amyloid Template Nucleator | `4B0M` | `#F72585` | `(+4.0, +3.0, +2.0)` |
| `Piece_Pili_CsgA_Amyloid_Mesh` | Extracellular CsgA Cross-$\beta$ Biofilm Fibril Ribbon | `4B0M` | `#E76F51` | `(+4.0, +7.0, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['pili_fimbriae']`)

* **Upstream Donor:** SecYEG Translocon (`secyeg`, exporting unfolded FimA/FimH and CsgA into the periplasm)
* **Inputs:**
  * $\text{Periplasmic FimC}\cdot\text{FimA Chaperone-Subunit Complexes}$
  * $\text{Unfolded CsgA Monomers} + \text{Host Surface }\alpha\text{-D-Mannose Glycans}$
* **Outputs:**
  * $\text{Shear-Resistant Catch-Bond Surface Adhesion ($>60\,\text{pN}$)}$
  * $\text{Cross-}\beta\text{ Curli Extracellular Biofilm Matrix}$
* **Downstream Consumer:** Host Epithelial Colonization & Biofilm Microcolony Architecture
* **Energy Currency:** Hydrophobic Donor-Strand Exchange ($\Delta G_{\text{folding}}$) & Cross-$\beta$ Amyloid Nucleation (Zero Periplasmic ATP Required)
* **Turnover Rate ($k_{\text{cat}}$):** FimD usher polymerization $\sim 1\text{–}3\text{ FimA subunits/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['pili_fimbriae']`)

1. **`shear_flow_force`** (*Hydrodynamic Fluid Shear Stress*, `0 pN` = Relaxed Low-Affinity FimH & Coiled FimA Rod, `100 pN` = Stretched High-Affinity FimH Catch-Bond & Uncoiling Shock-Absorber Rod)
2. **`mannose_inhibitor`** (*Soluble D-Mannose Decoy Blockade*, `0%` to `100%`)
3. **`cdigmp_biofilm_signal`** (*Intracellular `c-di-GMP` Biofilm Switch*, `0%` = Planktonic Fimbriae Mode, `100%` = Sessile Curli Amyloid Secretion Mode)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Building Extracellular Fibers Without ATP:** Frame the outer membrane with `Piece_Pili_FimD_Usher` and `Piece_Pili_CsgG_Channel`. Explain the biochemical puzzle: the periplasm contains zero ATP, yet the bacterium must assemble micron-long fibers outside its outer membrane.
2. **Stage 2 — Donor-Strand Exchange at the FimD Usher:** Focus on `Piece_Pili_FimC_Chaperone` and `Piece_Pili_FimD_Usher`. Show how FimC donates a temporary $\beta$-strand to stabilize each FimA subunit in the periplasm, then hands it off to the FimD usher where the next subunit locks into its groove like pop-beads.
3. **Stage 3 — The Helical Shock-Absorber Rod (`FimA`):** Focus on `Piece_Pili_FimA_Helical_Rod`. Show how 1,000 FimA subunits coil into a hollow spring that uncoils under turbulent water flow to cushion the adhesin tip.
4. **Stage 4 — The `FimH` Mechanical Catch-Bond:** Zoom into `Piece_Pili_FimH_CatchBond`. Demonstrate how pulling force separates the FimH lectin domain from its pilin base, snapping the mannose-binding pocket shut like a finger trap so the bacterium holds on tighter when flow increases.
5. **Stage 5 — Curli Amyloid Biofilm Secretion (`CsgG` & `CsgA`):** Pan to `Piece_Pili_CsgG_Channel` and `Piece_Pili_CsgA_Amyloid_Mesh`. When cyclic-di-GMP rises, unfolded CsgA proteins thread through the nonameric CsgG pore and nucleate on CsgB into tough cross-$\beta$ amyloid ribbons that cement the colony into a biofilm.

---

## 7. Implementation Checklist

- [x] Create [`./generate_06_pili_fimbriae_curli_biofilm.py`](./generate_06_pili_fimbriae_curli_biofilm.py) and export [`./pili_fimbriae_6gto.glb`](./pili_fimbriae_6gto.glb) and `../../client/public/models/pili_fimbriae_6gto.glb`.
- [ ] Create [`client/src/core/piliAndCurli.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/piliAndCurli.ts).
- [ ] Wire Whole-Cell click targets for `pili_fimbriae` and `curli_fibers` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
