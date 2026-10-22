# Module 02: Comparing Prokaryotic Cell Envelopes (Gram-Negative vs. Gram-Positive vs. Archaeal S-Layer)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `envelopes`
* **Visual Primer Reference:** [`primer_fig7.png`](file:///c:/Users/devcd/GenProjects/primer_fig7.png) (*"COMPARING PROKARYOTIC CELL ENVELOPES"*)
* **Biological Category:** Comparative Multi-Layered Cell Wall Architecture + Outer Membrane Porin (`2OMF`) + Peptidoglycan Lattice (`3VMA`) + Braun's Lipoprotein (`1EQ7`)

---

## 1. Scientific & Structural Overview

As illustrated in [`primer_fig7.png`](file:///c:/Users/devcd/GenProjects/primer_fig7.png), prokaryotic life has evolved three fundamentally distinct cell envelope architectures to withstand internal osmotic turgor pressure ($2\text{–}25\,\text{atm}$) and hostile environments:

1. **Gram-Negative Envelope (*Escherichia coli*):**
   * **Outer Membrane (Asymmetric Bilayer):** Outer leaflet of **Lipopolysaccharide (LPS)** stabilized by $\text{Mg}^{2+}$ bridges; inner leaflet of phospholipids. Studded with trimeric $\beta$-barrel **OmpF Porins (`2OMF`)** for passive diffusion.
   * **Periplasmic Space ($15\text{–}20\,\text{nm}$) & Thin Peptidoglycan Wall ($2\text{–}7\,\text{nm}$, `3VMA`):** A 1–3 layer mesh of NAM-NAG glycan chains cross-linked by tetrapeptides, physically bolted to the outer membrane by **Braun's Lipoprotein (`Lpp`, `1EQ7`)** coiled-coil trimers (~500,000 copies/cell).
   * **Inner Cytoplasmic Membrane:** Symmetric phospholipid bilayer housing respiratory and transport proteins.
2. **Gram-Positive Envelope (*Bacillus subtilis* / *Staphylococcus aureus*):**
   * **No Outer Membrane.**
   * **Thick Multi-Layered Peptidoglycan Wall ($30\text{–}80\,\text{nm}$, 20–40 layers):** Reinforced with negatively charged **Wall Teichoic Acids (WTA)** covalently linked to NAM and **Lipoteichoic Acids (LTA)** anchored via glycolipid tails into the cytoplasmic membrane.
3. **Archaeal Envelope (*Sulfolobus* / *Halobacterium*):**
   * **Crystalline Protein S-Layer (Surface Layer):** Self-assembled 2D hexagonal/tetragonal paracrystalline array of glycoprotein tiles (`7P1G` / `3U2H`) directly protecting the cell.
   * **No Peptidoglycan** (some methanogens use pseudomurein with $\beta(1\to3)$ linkages resistant to lysozyme).
   * **Ether-Linked Isoprenoid Membrane:** Branched phytanyl chains attached to *sn*-glycerol-1-phosphate via chemically resilient **ether bonds** (monolayer tetraether caldarchaeol in hyperthermophiles or bilayer archaeol).

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`2OMF`** — *E. coli* OmpF Outer Membrane Porin Trimer (X-ray $2.4\,\text{\AA}$, CC0 Public Domain). Pre-built in [`ecoli-vulkan-engine/web/models/2OMF.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/2OMF.glb).
  * **`3VMA`** — Peptidoglycan Murein Sacculus Model. Pre-built in [`ecoli-vulkan-engine/web/models/3VMA.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/3VMA.glb).
  * **`1EQ7`** — *E. coli* Braun's Lipoprotein (`Lpp56`) Trimeric Coiled-Coil Staple (X-ray $1.9\,\text{\AA}$).
  * **`3U2H` / `7P1G`** — Archaeal S-Layer Crystalline Lattice Domain.
* **Small Molecules / Monomers (PubChem / RDKit):**
  * **NAM-NAG Disaccharide-Tetrapeptide:** Built via RDKit (`mDAP` CID `439283`).
  * **Glycerol-Phosphate Teichoic Acid Repeat Unit:** PubChem CID `439162`.
  * **Archaeol (Di-O-phytanylglycerol):** PubChem CID `5283462`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Env_*`)

The Blender generator [`scripts/generate_prokaryotic_envelopes.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_prokaryotic_envelopes.py) must export [`client/public/models/envelopes_comparison.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/envelopes_comparison.glb) with three side-by-side interactive cross-section columns (matching [`primer_fig7.png`](file:///c:/Users/devcd/GenProjects/primer_fig7.png)):

| Mesh Object Name | Envelope Type & Component | Color Hex | Taxonomy Role | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Env_GN_OuterMembrane` | Gram-Negative Outer LPS Membrane + Lipid A | `#0077B6` | Deep Marine Blue Outer Membrane | `(-8.0, +5.5, 0.0)` |
| `Piece_Env_GN_OmpF_Porin` | Gram-Negative Trimeric OmpF $\beta$-Barrel Porin (`2OMF`) | `#00B4D8` | Cyan Transmembrane Sieve | `(-8.0, +7.5, +2.0)` |
| `Piece_Env_GN_Lpp_Staples` | Braun's Lipoprotein Trimeric Staples (`1EQ7`) | `#FFD166` | Golden Amber Structural Bolts | `(-8.0, +3.0, -2.0)` |
| `Piece_Env_GN_Peptidoglycan` | Gram-Negative Thin Periplasmic Murein Monolayer (`3VMA`) | `#E76F51` | Warm Terracotta Murein Wall | `(-8.0, +1.0, 0.0)` |
| `Piece_Env_GN_InnerMembrane` | Gram-Negative Inner Phospholipid Bilayer | `#06D6A0` | Vivid Jade Plasma Membrane | `(-8.0, -3.5, 0.0)` |
| `Piece_Env_GP_ThickMurein` | Gram-Positive 30-Layer Peptidoglycan Mesh | `#E76F51` | Terracotta Thick Murein | `(0.0, +4.0, 0.0)` |
| `Piece_Env_GP_TeichoicAcids` | Wall & Lipoteichoic Acid Polyanionic Fibers | `#FFB703` | Golden Amber Polyanion Cables | `(0.0, +7.0, +2.0)` |
| `Piece_Env_GP_PlasmaMembrane` | Gram-Positive Ester-Linked Phospholipid Membrane | `#06D6A0` | Vivid Jade Plasma Membrane | `(0.0, -3.5, 0.0)` |
| `Piece_Env_AR_SLayer` | Archaeal Hexagonal Crystalline S-Layer Armor | `#9D4EDD` | Royal Violet Crystalline S-Layer | `(+8.0, +5.0, 0.0)` |
| `Piece_Env_AR_EtherMembrane` | Archaeal Ether-Linked Isoprenoid Monolayer/Bilayer | `#00F5D4` | Luminous Turquoise Ether Membrane | `(+8.0, -3.0, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['envelopes']`)

* **Upstream Donor:** Cytoplasmic Lipid II Synthase (MurG), LptA–G LPS Bridge (`lpt`), and BAM Complex (`bam`)
* **Inputs:**
  * $\text{Lipid II (Undecaprenyl-PP-MurNAc-pentapeptide-GlcNAc)}$
  * $\text{Nascent LPS & Outer-Membrane }\beta\text{-Barrels}$
  * $\text{CDP-Glycerol / CDP-Ribitol (Teichoic Acid Precursors)}$
* **Outputs:**
  * $\text{Cross-Linked Load-Bearing Sacculus ($2\text{–}25\,\text{atm}$ Turgor Resistance)}$
  * $\text{Size-Selective Hydrophilic Nutrient Diffusion ($<600\,\text{Da}$ via OmpF)}$
* **Downstream Consumer:** Whole-Cell Osmotic Homeostasis & Periplasmic Solute Binding Proteins (`MalE`, `SurA`)
* **Energy Currency:** D-Ala–D-Ala Transpeptidation Bond Energy & Donnan Potential ($\Delta \psi_{\text{Donnan}}$)
* **Turnover Rate ($k_{\text{cat}}$):** OmpF passive flux $\sim 10^4\text{ ions/s}$; PBP transpeptidation $\sim 2\text{ cross-links/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['envelopes']`)

1. **`envelope_focus`** (*Envelope Selector*, `0` = All 3 Side-by-Side, `1` = Gram-Negative, `2` = Gram-Positive, `3` = Archaeal S-Layer)
2. **`osmotic_pressure`** (*Internal Turgor Stress*, `0%` to `200%`, showing Lpp staple tension and peptidoglycan stretching)
3. **`lysozyme_penicillin`** (*Lysozyme / $\beta$-Lactam Antibiotic Challenge*, `0` = Intact, `1` = Lysozyme Cleaving $\beta(1\to4)$ Glycans while Archaeal S-Layer remains immune)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Three Solutions to Osmotic Turgor:** Frame all three envelope columns side-by-side (`primer_fig7.png`). Explain why bacteria and archaea need rigid exterior armor to keep from bursting under $5\text{–}20\,\text{atm}$ of internal cytoplasmic pressure.
2. **Stage 2 — The Gram-Negative Double-Membrane Fortress:** Focus on `Piece_Env_GN_OuterMembrane` and `Piece_Env_GN_OmpF_Porin`. Show how the LPS outer membrane blocks hydrophobic antibiotics while OmpF trimeric $\beta$-barrels allow small hydrophilic nutrients ($<600\,\text{Da}$) into the periplasm.
3. **Stage 3 — Braun's Lipoprotein (`Lpp`) & The Periplasmic Wall:** Focus on `Piece_Env_GN_Lpp_Staples` and `Piece_Env_GN_Peptidoglycan`. Show how 500,000 copies of trimeric `Lpp` covalently staple the outer membrane to the thin murein wall.
4. **Stage 4 — The Gram-Positive Thick Peptidoglycan & Teichoic Acids:** Pan to `Piece_Env_GP_ThickMurein` and `Piece_Env_GP_TeichoicAcids`. Contrast the absence of an outer membrane with a 30-layer peptidoglycan mesh threaded with negatively charged teichoic and lipoteichoic acids that retain Crystal Violet Gram stain.
5. **Stage 5 — The Archaeal Crystalline S-Layer & Ether Lipids:** Pan to `Piece_Env_AR_SLayer` and `Piece_Env_AR_EtherMembrane`. Show how archaea replace peptidoglycan with hexagonal S-layer armor tiles and chemically indestructible ether-linked branched isoprenoid lipids.

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_prokaryotic_envelopes.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_prokaryotic_envelopes.py) and export `client/public/models/envelopes_comparison.glb`.
- [ ] Create [`client/src/core/prokaryoticEnvelopes.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/prokaryoticEnvelopes.ts).
- [ ] Register `'envelopes'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
