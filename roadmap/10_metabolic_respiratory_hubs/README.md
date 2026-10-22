# Module 10: Central Metabolic & Respiratory Hubs — Pyruvate Dehydrogenase (`1EAE`) & Cytochrome $bo_3$ Ubiquinol Oxidase (`6WTI`)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `metabolic_hubs` (with `pyruvate_dehydrogenase` & `cytochrome_bo3` Selector)
* **Biological Category:** 4.5 MDa Cubic Metabolic Megacomplex & Terminal Aerobic Respiratory Proton Pump

---

## 1. Scientific & Structural Overview

As specified in [`CELLULAR_ELEMENTS_CATALOG.md` Phase 2 (Sections 2.2 & 2.3)](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_ELEMENTS_CATALOG.md), the bioenergetic engine of *E. coli* relies on two missing complexes that sandwich **Respiratory Complex I (`complex_i`)** and **$F_1F_0$-ATP Synthase (`atp_synthase`)**:

1. **Upstream NADH Generator — Pyruvate Dehydrogenase Complex (`PDHc`, PDB `1EAE` / `1L8A`, ~4.5 MDa):**
   * Larger than a ribosome, *E. coli* PDHc is a $30\text{–}45\,\text{nm}$ substrate-channeling factory built around an octahedral **24-subunit cubic core of E2 (AceF, Dihydrolipoyl Transacetylase, `1EAE`)** surrounded by a shell of **24 E1 dimers (AceE, Pyruvate Dehydrogenase, ThDP-dependent)** and **12 E3 dimers (Lpd, Dihydrolipoyl Dehydrogenase, FAD-dependent)**.
   * Each E2 subunit extends a $14\,\text{\AA}$ flexible **lipoyl-lysine swinging arm** that visits three active sites in sequence without releasing the intermediate into the bulk cytoplasm:
     1. **E1 (`AceE`):** Decarboxylates $\text{Pyruvate} \to \text{CO}_2$ and transfers the 2-carbon hydroxyethyl group onto the oxidized lipoamide ring on the swinging arm.
     2. **E2 Cubic Core (`AceF`, `1EAE`):** Transfers the acetyl group onto $\text{Coenzyme A}$ to release **$\text{Acetyl-CoA}$** (feeding the TCA cycle and fatty acid synthesis).
     3. **E3 (`Lpd`):** Re-oxidizes the dihydrolipoamide arm via $\text{FAD}$, reducing $\text{NAD}^+ \to \text{NADH} + \text{H}^+$ to feed **Respiratory Complex I (`complex_i`)**.
2. **Downstream Terminal Oxidase — Cytochrome $bo_3$ Ubiquinol Oxidase (`CyoABCD`, PDB `6WTI`):**
   * Receives reduced **Ubiquinol ($\text{QH}_2$)** inside the inner membrane directly from **Respiratory Complex I (`complex_i`)**.
   * Transfers $4e^-$ through a low-spin **heme $b$** to a high-spin **heme $o_3\text{–Cu}_B$ binuclear active site**, reducing molecular oxygen ($\text{O}_2 + 4\text{H}^+ + 4e^- \to 2\text{H}_2\text{O}$) while translocating **$4\text{H}^+$ across the inner membrane** ($2\text{H}^+$ via D/K proton channels + $2\text{H}^+$ from scalar quinol oxidation, yielding $2\text{H}^+/e^-$) to recharge the proton motive force ($\Delta p$) for **$F_1F_0$-ATP Synthase (`atp_synthase`)** and the **Flagellar Motor (`motor`)**.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`1EAE`** — Cubic 24-mer Dihydrolipoyl Transacetylase (E2p) Core of Pyruvate Dehydrogenase (X-ray $2.6\,\text{\AA}$, CC0 Public Domain). Pre-built in [`ecoli-vulkan-engine/web/models/1EAE.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1EAE.glb) (5.7 MB).
  * **`1L8A` / `2G25`** — *E. coli* Pyruvate Dehydrogenase E1 ($\text{AceE}$) & E3 ($\text{Lpd}$) Peripheral Subunits.
  * **`6WTI` / `1FFT`** — *E. coli* Cytochrome $bo_3$ Ubiquinol Oxidase (Cryo-EM $3.0\,\text{\AA}$, CC0 Public Domain). Pre-built in [`ecoli-vulkan-engine/web/models/6WTI.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/6WTI.glb) (4.7 MB).
* **Small Molecules / Cofactors (PubChem / RDKit):**
  * **Pyruvate:** PubChem CID `1060`.
  * **Lipoamide & Coenzyme A:** PubChem CID `825` & `87642`.
  * **Heme $O$ & Ubiquinol-8 ($\text{QH}_2$):** PubChem CID `444098` & `5281915`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Met_*`)

The Blender generator [`scripts/generate_metabolic_respiratory_hubs.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_metabolic_respiratory_hubs.py) must export [`client/public/models/metabolic_hubs.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/metabolic_hubs.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Met_PDH_E2_CubicCore` | 24-Subunit Octahedral E2 Transacetylase Core (`AceF`) | `1EAE` | `#00B4D8` | `(-5.0, 0.0, 0.0)` |
| `Piece_Met_PDH_Lipoyl_Arms` | Flexible Lipoyl-Lysine Swinging Tether Arms | `1EAE` / `1QJO` | `#FFB703` | `(-5.0, +4.0, +3.0)` |
| `Piece_Met_PDH_E1_Shell` | Outer E1 Pyruvate Decarboxylase Shell (`AceE` + ThDP) | `1L8A` | `#9D4EDD` | `(-8.5, +4.5, 0.0)` |
| `Piece_Met_PDH_E3_Shell` | Outer E3 Dihydrolipoyl Dehydrogenase Shell (`Lpd` + FAD) | `4JDR` | `#F72585` | `(-8.5, -4.5, 0.0)` |
| `Piece_Met_Cyo_InnerMembrane` | Inner Cytoplasmic Membrane Bilayer Slab + $\text{QH}_2$ Pool | Procedural | `#06D6A0` | `(+5.5, 0.0, -3.5)` |
| `Piece_Met_CyoA_QuinolSite` | Subunit II (`CyoA`) Ubiquinol Oxidation Domain | `6WTI` | `#48CAE4` | `(+3.0, +3.5, 0.0)` |
| `Piece_Met_CyoB_HemeCuCore` | Subunit I (`CyoB`) 15-TM Core + Heme $b$ / Heme $o_3\text{–Cu}_B$ | `6WTI` | `#FF7B00` | `(+5.5, +1.5, +3.0)` |
| `Piece_Met_CyoCD_Support` | Subunits III & IV (`CyoC`, `CyoD`) Transmembrane Bundle | `6WTI` | `#FFD166` | `(+8.5, -2.5, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['metabolic_hubs']`)

* **Upstream Donor:** Glycolytic Enolase / Pyruvate Kinase (for PDHc) & Respiratory Complex I (`complex_i`, supplying $\text{QH}_2$ to Cytochrome $bo_3$)
* **Inputs:**
  * **PDHc:** $\text{Pyruvate} + \text{CoA-SH} + \text{NAD}^+$
  * **Cytochrome $bo_3$:** $2\,\text{Ubiquinol (QH}_2\text{)} + \text{O}_2 + 4\text{H}^+_{\text{in}}$
* **Outputs:**
  * **PDHc:** $\text{Acetyl-CoA} + \text{CO}_2 + \text{NADH} + \text{H}^+$
  * **Cytochrome $bo_3$:** $2\,\text{Ubiquinone (Q)} + 2\text{H}_2\text{O} + 8\text{H}^+_{\text{periplasm}}$
* **Downstream Consumer:** Respiratory Complex I (`complex_i`, consuming NADH) & $F_1F_0$-ATP Synthase (`atp_synthase`, consuming $\Delta p$)
* **Energy Currency:** $\text{NADH}$ Redox Potential ($E_0' = -320\,\text{mV}$), Thioester $\text{Acetyl-CoA}$, & Proton Motive Force ($\Delta p$)
* **Turnover Rate ($k_{\text{cat}}$):** PDHc $\sim 120\text{–}300\,\text{s}^{-1}$ per complex; Cytochrome $bo_3$ $\sim 250\text{–}400\,e^-\text{/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['metabolic_hubs']`)

1. **`pyruvate_supply`** (*Glycolytic Pyruvate Influx*, `0%` to `200%`, driving lipoyl swinging arm frequency)
2. **`oxygen_tension`** (*Dissolved $[\text{O}_2]$ Tension for Cytochrome $bo_3$*, `0%` = Anaerobic Stall, `100%` = Full Aerobic Respiration & $8\text{H}^+$ Pumping)
3. **`cyanide_azide_block`** (*Heme $o_3\text{–Cu}_B$ Respiratory Poison Toggle*, `0` = Normal, `1` = $\text{CN}^-$ Binuclear Center Blockade)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Completing the Bioenergetic Loop:** Frame both `Piece_Met_PDH_E2_CubicCore` and `Piece_Met_CyoB_HemeCuCore`. Explain how PDHc generates the $\text{NADH}$ fuel that feeds Complex I (`complex_i`), while Cytochrome $bo_3$ consumes the resulting ubiquinol ($\text{QH}_2$) to complete the aerobic electron transport chain.
2. **Stage 2 — The 24-Mer Cubic Core of Pyruvate Dehydrogenase (`1EAE`):** Zoom into `Piece_Met_PDH_E2_CubicCore` surrounded by `Piece_Met_PDH_E1_Shell` and `Piece_Met_PDH_E3_Shell`. Show why clustering 60 enzyme subunits into one cage prevents intermediates from diffusing away.
3. **Stage 3 — The Lipoyl-Lysine Swinging Arm:** Highlight `Piece_Met_PDH_Lipoyl_Arms`. Follow the $14\,\text{\AA}$ swinging arm as it picks up a 2-carbon group from pyruvate at E1, hands off **$\text{Acetyl-CoA}$** inside the E2 cube, and visits E3 to generate **$\text{NADH}$**.
4. **Stage 4 — Ubiquinol Oxidation in Cytochrome $bo_3$ (`6WTI`):** Pan into the inner membrane (`Piece_Met_CyoA_QuinolSite` + `Piece_Met_CyoB_HemeCuCore`). Watch reduced $\text{QH}_2$ arrive from Complex I, release scalar protons into the periplasm, and pass electrons to heme $b$.
5. **Stage 5 — Oxygen Reduction at the Heme $o_3\text{–Cu}_B$ Center & Proton Pumping:** Zoom into `Piece_Met_CyoB_HemeCuCore`. Four electrons reduce $\text{O}_2 \to 2\text{H}_2\text{O}$ while electrostatic coupling drives $4\text{H}^+$ through the D and K channels into the periplasm, charging the proton battery for ATP Synthase (`atp_synthase`).

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_metabolic_respiratory_hubs.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_metabolic_respiratory_hubs.py) and export `client/public/models/metabolic_hubs.glb`.
- [ ] Create [`client/src/core/metabolicRespiratoryHubs.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/metabolicRespiratoryHubs.ts).
- [ ] Register `'metabolic_hubs'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
