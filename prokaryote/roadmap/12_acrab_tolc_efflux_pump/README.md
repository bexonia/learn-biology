# Module 12: Tripartite Multidrug Efflux Pump (`AcrAB-TolC`, PDB `5V5S` / `5O66`)

* **Status:** `[x]` Python Generator & 3D `.glb` Asset Built (`[ ]` Frontend UI Wiring Pending)
* **Target Scale ID:** `efflux_pump`
* **Discrete Python Generator:** [`./generate_12_acrab_tolc_efflux_pump.py`](./generate_12_acrab_tolc_efflux_pump.py)
* **Generated 3D Model:** [`./efflux_5v5s.glb`](./efflux_5v5s.glb)
* **Biological Category:** Trans-Envelope Proton-Driven Antibiotic Resistance Cannon ($32\,\text{nm}$ height, 3:6:3 Stoichiometry)

---

## 1. Scientific & Structural Overview

Gram-negative bacteria owe much of their intrinsic resistance to antibiotics, bile salts, and detergents to the **AcrAB–TolC Tripartite Multidrug Efflux Pump (`5V5S`)**—a $320\,\text{\AA}$ ($32\,\text{nm}$) molecular cannon that spans the Inner Membrane, the Periplasm, the Peptidoglycan wall, and the Outer Membrane simultaneously:
1. **Inner-Membrane Proton-Motive Engine (`AcrB` Homotrimer, RND Transporter):**
   * Each of the three AcrB protomers cycles sequentially through three asymmetric conformational states—**Loose (Access / L) $\to$ Tight (Binding / T) $\to$ Open (Extrusion / O)**—a functional peristaltic rotation driven by **proton ($\text{H}^+$) influx** down the proton motive force ($\Delta p$) through a transmembrane $\text{Asp407–Asp408–Lys940}$ proton-relay triad.
   * Crucially, AcrB captures drugs (such as ciprofloxacin, tetracycline, chloramphenicol, $\beta$-lactams, and bile salts) directly from the **periplasm and the outer leaflet of the inner membrane** *before* they ever enter the cytoplasm!
2. **Periplasmic Adapter Collar (`AcrA` Hexameric Funnel):**
   * Six AcrA lipoprotein protomers form a sealed periplasmic sleeve bridging the AcrB crown to the TolC base, transmitting conformational torque across the periplasm so the TolC iris opens upon assembly.
3. **Outer-Membrane Exit Cannon (`TolC` Homotrimer, `1EK9` / `5V5S`):**
   * Three TolC subunits form a 12-stranded outer-membrane $\beta$-barrel fused to a $100\,\text{\AA}$-long periplasmic $\alpha$-helical tunnel barrel. In the resting state, coiled-coil helices at the periplasmic tip twist shut like a camera iris; docking with AcrA twists the iris open into a continuous $30\,\text{\AA}$ duct that shoots drugs straight out into the extracellular medium.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`5V5S` / `5O66`** — Complete *E. coli* AcrAB–TolC (with AcrZ) Tripartite Multidrug Efflux Pump in the Transport State (Cryo-EM $3.6\,\text{\AA}$, CC0 Public Domain).
  * **`1EK9`** — Crystal Structure of the Resting Closed TolC Outer-Membrane Exit Duct ($2.1\,\text{\AA}$).
  * **`4DX5` / `2DRD`** — Asymmetric AcrB Trimer Bound to Minocycline / Doxorubicin ($1.9\,\text{\AA}$).
* **Small Molecules / Antibiotics (PubChem / RDKit):**
  * **Ciprofloxacin:** PubChem CID `2764`.
  * **Minocycline / Tetracycline:** PubChem CID `54675783`.
  * **Puromycin:** PubChem CID `439530`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_5V5S_*`)

The Blender generator [`scripts/generate_5v5s_acrab_tolc.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_5v5s_acrab_tolc.py) must export [`client/public/models/efflux_5v5s.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/efflux_5v5s.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_5V5S_Outer_Membrane` | Outer LPS Membrane Bilayer Slab | Procedural | `#0077B6` | `(0.0, +7.5, -4.0)` |
| `Piece_5V5S_TolC_ExitDuct` | TolC Trimeric Outer-Membrane $\beta$-Barrel & Periplasmic $\alpha$-Tunnel | `5V5S` / `1EK9` | `#00B4D8` | `(0.0, +7.0, 0.0)` |
| `Piece_5V5S_AcrA_Collar` | AcrA Hexameric Periplasmic Adapter Funnel Sleeve | `5V5S` | `#9D4EDD` | `(0.0, +1.5, +3.0)` |
| `Piece_5V5S_AcrB_Loose` | AcrB Protomer 1 — **Loose (L)** Periplasmic Access State | `5V5S` / `4DX5` | `#48CAE4` | `(-4.0, -4.0, +2.0)` |
| `Piece_5V5S_AcrB_Tight` | AcrB Protomer 2 — **Tight (T)** Hydrophobic Drug-Binding Pocket | `5V5S` / `4DX5` | `#FFB703` | `(+4.0, -4.0, +2.0)` |
| `Piece_5V5S_AcrB_Open` | AcrB Protomer 3 — **Open (O)** Peristaltic Extrusion Funnel | `5V5S` / `4DX5` | `#F72585` | `(0.0, -4.0, -3.5)` |
| `Piece_5V5S_Inner_Membrane` | Inner Cytoplasmic Membrane + AcrZ Small Peptide + $\text{H}^+$ Relay | `5V5S` | `#06D6A0` | `(0.0, -6.5, -4.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['efflux_pump']`)

* **Upstream Donor:** Respiratory Complex I (`complex_i`) & Cytochrome $bo_3$ (`metabolic_hubs`, supplying periplasmic $\text{H}^+$ gradient $\Delta p$)
* **Inputs:**
  * $\text{Periplasmic / Membrane-Partitioned Antibiotics & Bile Salts}$
  * $\text{Periplasmic }\text{H}^+\text{ ($1\text{–}2\,\text{H}^+$ per drug molecule)}$
* **Outputs:**
  * $\text{Extracellularly Ejected Antibiotic Molecules}$
  * $\text{Cytoplasmic }\text{H}^+$
* **Downstream Consumer:** Whole-Cell Survival Under Antibiotic / Enteric Bile Salt Stress (protects `ribosome`, `gyrase`, `rnap`, and `envelopes`)
* **Energy Currency:** Proton Motive Force ($\Delta p \approx -140\text{ to }-180\,\text{mV}$, $\text{H}^+/\text{Drug}$ Antiport)
* **Turnover Rate ($k_{\text{cat}}$):** $\sim 10\text{–}500\text{ drug molecules/s}$ depending on substrate affinity

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['efflux_pump']`)

1. **`pmf_proton_flux`** (*Periplasmic Proton Motive Force $\Delta p$*, `0 mV` = Pump Stalled & Drug Accumulation, `180 mV` = Maximum L$\to$T$\to$O Peristaltic Ejection)
2. **`antibiotic_load`** (*Periplasmic Antibiotic [Ciprofloxacin / Tetracycline] Load*, `0%` to `200%`)
3. **`efflux_inhibitor_pabn`** (*PA$\beta$N Efflux Pump Inhibitor Wedge*, `0` = Active Pump, `1` = Hydrophobic Trap Jammed in Tight Pocket)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — The $32\,\text{nm}$ Trans-Envelope Molecular Cannon:** Frame the full tripartite assembly spanning from the inner membrane to the outer membrane. Explain how AcrAB–TolC acts as a pressurized bilge pump that intercepts antibiotics in the periplasm before they can reach the cytoplasm.
2. **Stage 2 — Vacuuming Drugs in the `Loose (L)` Access Pocket:** Focus on `Piece_5V5S_AcrB_Loose` at the periplasm/inner-membrane border. Show how lipophilic drugs partitioning into the outer leaflet of the inner membrane enter the wide-open vestibule of the Loose protomer.
3. **Stage 3 — The `Tight (T)` Deep Binding Pocket:** Rotate to `Piece_5V5S_AcrB_Tight`. Conformational change expands a phenylalanine-lined hydrophobic pocket that tightly grips planar aromatic antibiotics.
4. **Stage 4 — Proton-Driven `Open (O)` Peristaltic Squeeze:** Focus on `Piece_5V5S_Inner_Membrane` and `Piece_5V5S_AcrB_Open`. A proton ($\text{H}^+$) flows down its gradient through the transmembrane Asp407–Asp408–Lys940 triad, collapsing the lateral entrance and squeezing the drug upward into the central funnel like toothpaste.
5. **Stage 5 — Firing Through the `AcrA` Collar & `TolC` Iris:** Follow the drug molecule upward through `Piece_5V5S_AcrA_Collar` and out the $140\,\text{\AA}$ `Piece_5V5S_TolC_ExitDuct` cannon straight past the outer LPS barrier into the exterior medium.

---

## 7. Implementation Checklist

- [x] Create [`./generate_12_acrab_tolc_efflux_pump.py`](./generate_12_acrab_tolc_efflux_pump.py) and export [`./efflux_5v5s.glb`](./efflux_5v5s.glb) and `../../client/public/models/efflux_5v5s.glb`.
- [ ] Create [`client/src/core/effluxPump.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/effluxPump.ts).
- [ ] Register `'efflux_pump'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
