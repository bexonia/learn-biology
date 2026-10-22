# Module 04: 3D Icosahedral Bacterial Microcompartment (Carboxysome / Pdu BMC Shell, `7O04` / `3I82`)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `microcompartment`
* **Visual Primer Reference:** [`primer_fig3.png`](file:///c:/Users/devcd/GenProjects/primer_fig3.png) (*"A TYPICAL PROKARYOTIC CELL" — `INTERNAL ORGANIZATION: microcompartment` Cutaway Shell*)
* **Biological Category:** Prokaryotic Proteinaceous Organelle ($100\text{–}150\,\text{nm}$ Icosahedral Cage)

---

## 1. Scientific & Structural Overview

A widespread misconception is that prokaryotes have no organelles. While they lack lipid-bilayer organelles (like mitochondria or nuclei), many bacteria build **Bacterial Microcompartments (BMCs)**—giant, 20-sided (**icosahedral**) geodesic shells ($100\text{–}200\,\text{nm}$ diameter, $300\text{+}\,\text{MDa}$) assembled entirely from interlocking protein tiles:
* **BMC-H Hexamers (e.g., CsoS1A / PduA, PDB `3I82`):** Form the flat triangular facets of the icosahedron, with central $4\text{–}6\,\text{\AA}$ electrostatic pores that selectively let small charged substrates ($\text{HCO}_3^-$ or 1,2-propanediol) in while blocking uncharged gases ($\text{CO}_2$, $\text{O}_2$) or toxic aldehydes (propionaldehyde) from escaping into the cytoplasm.
* **BMC-P Pentamers (e.g., CsoS4A / PduN, PDB `2RCF`):** Exactly 12 pentameric vertex caps that introduce curvature to close the flat hexagonal sheet into a sealed 3D icosahedron (identical to the geometry of a soccer ball or viral capsid, $T=9$ to $T=75$ triangulation).
* **BMC-T Trimers / Pseudohexamers:** Gated double-layer pores for bulky cofactor transport ($\text{NAD}^+/\text{NADH}$, Coenzyme A).
* **Encapsulated Core Enzymes:** In **Carboxysomes**, the shell packs **RuBisCO (`1RBL`)** and **Carbonic Anhydrase** into a liquid-like condensate; in enteric **Pdu / Eut metabolosomes** (*Salmonella* / *E. coli*), it encapsulates diol/ethanolamine dehydratases to shield the DNA nucleoid from toxic aldehyde intermediates.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`7O04` / `6G7C`** — Intact Icosahedral Bacterial Microcompartment Shell (Cryo-EM $3.5\,\text{\AA}$, CC0 Public Domain).
  * **`3I82` / `2EWH`** — BMC-H Hexamer Tile showing the central selective pore.
  * **`2RCF`** — BMC-P Pentamer Vertex Cap.
  * **`1RBL`** — Encapsulated Hexadecameric RuBisCO ($\text{L}_8\text{S}_8$) Cargo Enzyme.
* **Small Molecules (PubChem / RDKit):**
  * **Bicarbonate ($\text{HCO}_3^-$):** PubChem CID `769`.
  * **Ribulose-1,5-bisphosphate (RuBP):** PubChem CID `439217`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_BMC_*`)

1. **In-Situ Whole Cell Update (`scripts/generate_primer_cell_hq.py`):** Add a cut-open 3D icosahedral microcompartment (`Organelle_Microcompartment`) nestled in the cytoplasm next to the nucleoid and plasmids, matching [`primer_fig3.png`](file:///c:/Users/devcd/GenProjects/primer_fig3.png).
2. **Standalone 3D Inspector (`scripts/generate_7o04_microcompartment.py` $\to$ `client/public/models/microcompartment_7o04.glb`):**

| Mesh Object Name | Structural Component | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_BMC_Hexamer_Facets` | BMC-H Hexameric Facet Tiles (20 Triangular Faces, Front Cutaway) | `3I82` / `7O04` | `#00B4D8` | `(0.0, +4.5, +4.5)` (Radial Facet Expansion) |
| `Piece_BMC_Pentamer_Vertices` | 12 BMC-P Pentameric Vertex Caps | `2RCF` / `7O04` | `#FFB703` | `(+5.5, +5.5, 0.0)` |
| `Piece_BMC_Trimer_GatedPores` | BMC-T Gated Allosteric Cofactor Pores | `4FAY` | `#06D6A0` | `(-5.0, +3.0, +3.0)` |
| `Piece_BMC_Cargo_Enzymes` | Encapsulated Enzyme Core (RuBisCO / Dehydratase Matrix) | `1RBL` | `#9D4EDD` | `(0.0, 0.0, 0.0)` (Stationary Core) |
| `Piece_BMC_CarbonicAnhydrase` | Shell-Associated Carbonic Anhydrase / Aldehyde Dehydrogenase | `2FGY` | `#F72585` | `(0.0, -3.5, -3.5)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['microcompartment']`)

* **Upstream Donor:** Cytoplasmic Bicarbonate Transporter / Carbon Source Uptake
* **Inputs:**
  * $\text{HCO}_3^- + \text{H}^+ + \text{Ribulose-1,5-bisphosphate (RuBP)}$ (Carboxysome) *or* $\text{1,2-Propanediol / Ethanolamine}$ (Enteric Metabolosome)
* **Outputs:**
  * $2 \times \text{3-Phosphoglycerate (3-PGA)}$ (Carbon Fixation) *or* $\text{Propionyl-CoA / Acetyl-CoA}$ (without cytoplasmic aldehyde toxicity)
* **Downstream Consumer:** Central Glycolysis / TCA Cycle (`pyruvate_dehydrogenase`) & Biomass Synthesis
* **Energy Currency:** Microcompartmental Concentration Gradient ($[\text{CO}_2]_{\text{lumen}} \approx 100\times [\text{CO}_2]_{\text{cytosol}}$)
* **Turnover Rate ($k_{\text{cat}}$):** Pore flux $\sim 10^4\text{ }\text{HCO}_3^-\text{/s}$; RuBisCO carboxylation $\sim 3\text{–}10\,\text{s}^{-1}$ per active site

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['microcompartment']`)

1. **`shell_cutaway`** (*Icosahedral Facet Peel*, `0%` = Sealed Geodesic Shell, `50%` = 3/4 Cutaway (`primer_fig3.png`), `100%` = Full Facet Disassembly)
2. **`pore_selectivity`** (*Hexamer Central Pore Electrostatics*, `0` = Normal Positively Charged Pore trapping $\text{CO}_2$/Aldehyde, `1` = Leaky Mutant Shell)
3. **`substrate_influx`** (*$\text{HCO}_3^-$ / Diol Influx Rate*, `0%` to `200%`, default `100%`)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Organelles Without Lipid Membranes:** Focus on the cut-open icosahedral shell (`Piece_BMC_Hexamer_Facets`). Explain how prokaryotes build 20-sided geodesic protein cages inside the cytoplasm to isolate specialized chemical reactions.
2. **Stage 2 — Hexamer Tiles (`BMC-H`) & Selective Central Pores:** Zoom into a single hexameric tile (`Piece_BMC_Hexamer_Facets`). Show the $4\,\text{\AA}$ positively charged central pore that attracts negatively charged bicarbonate ($\text{HCO}_3^-$) into the lumen while repelling uncharged $\text{CO}_2$ and $\text{O}_2$.
3. **Stage 3 — The 12 Pentameric Vertex Caps (`BMC-P`):** Highlight `Piece_BMC_Pentamer_Vertices` in golden amber. Explain Euler's polyhedron theorem: flat hexagons alone can only form a flat sheet or tube; exactly 12 pentagons are required to bend the lattice into a closed 3D icosahedron.
4. **Stage 4 — The Encapsulated Enzyme Factory:** Focus on the purple interior cargo spheres (`Piece_BMC_Cargo_Enzymes` & `Piece_BMC_CarbonicAnhydrase`). Inside the lumen, Carbonic Anhydrase converts $\text{HCO}_3^- \to \text{CO}_2$ right next to densely packed RuBisCO (or dehydratases convert diols into trapped aldehydes).
5. **Stage 5 — Protecting the Cell & Boosting Efficiency:** Pull back to show product export through `Piece_BMC_Trimer_GatedPores`. By trapping volatile or toxic intermediates inside the protein shell, the bacterium boosts catalytic efficiency 100-fold and prevents DNA damage in the surrounding nucleoid.

---

## 7. Implementation Checklist

- [ ] Add 3D icosahedral microcompartment mesh to [`scripts/generate_primer_cell_hq.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_primer_cell_hq.py) and wire its Whole-Cell click target in [`cellViewer.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/cellViewer.ts) and [`MicrocompartmentCard.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/HUD/MicrocompartmentCard.tsx).
- [ ] Create [`scripts/generate_7o04_microcompartment.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_7o04_microcompartment.py) and export `client/public/models/microcompartment_7o04.glb`.
- [ ] Create [`client/src/core/bacterialMicrocompartment.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/bacterialMicrocompartment.ts).
- [ ] Register `'microcompartment'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
