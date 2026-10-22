# Module 11: Periplasmic Escort & Solute Transport — SurA Holdase (`1M5Y`) & MalE–MalFGK$_2$ ABC Importer (`1OMP` / `2R6G`)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `periplasmic_transport`
* **Biological Category:** ATP-Independent Periplasmic $\beta$-Barrel Chaperone Escort & Venus-Flytrap ABC Sugar Transporter

---

## 1. Scientific & Structural Overview

As defined in [`CELLULAR_ELEMENTS_CATALOG.md` Phase 3 (Sections 3.1 & 3.2)](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_ELEMENTS_CATALOG.md), the $15\text{–}20\,\text{nm}$ **Periplasmic Space** between the inner and outer membranes is an oxidizing, gel-like compartment completely devoid of ATP. Bacteria solve two critical periplasmic logistics problems using dedicated shuttle proteins:

1. **Biogenesis Bridge (SecYEG $\to$ SurA $\to$ BAM): The `SurA` Periplasmic Holdase Chaperone (`1M5Y`):**
   * Newly synthesized outer-membrane $\beta$-barrel proteins (OMPs like OmpF or BamA) emerge unfolded from the inner-membrane **SecYEG Translocon (`secyeg`)**. If exposed to periplasmic water, their hydrophobic $\beta$-strands immediately misfold into toxic aggregates.
   * **SurA (`1M5Y`)**—built of an N-terminal domain, two **peptidyl-prolyl isomerase (PPIase)** domains (P1 & P2), and a C-terminal core cradle—captures the unfolded OMP via its C-terminal aromatic **Ar-X-Ar motif**, shields it across the periplasm without consuming a single ATP molecule, and docks onto the **POTRA1** domain of the **BAM Complex (`bam`)** to hand off the substrate for outer-membrane insertion.
2. **Nutrient Import Bridge (OmpF/LamB $\to$ MalE $\to$ MalFGK$_2$): The `MalE` Venus-Flytrap & ABC Importer (`1OMP` / `2R6G`):**
   * Maltodextrins and maltose diffuse through outer-membrane porins (`LamB` / `OmpF`) into the periplasm, where they are captured with micromolar affinity ($K_d \approx 1\,\mu\text{M}$) by **MalE (Maltose-Binding Protein, `1OMP`)**.
   * Ligand binding triggers a $35^\circ$ **Venus-flytrap hinge-bending closure** between MalE's N-lobe and C-lobe. Closed-liganded MalE then docks onto the periplasmic face of the inner-membrane **$\text{MalFGK}_2$ ABC Transporter (`2R6G`)**.
   * Binding of **$2\,\text{ATP}$** dimerizes the cytoplasmic **$\text{MalK}_2$** nucleotide-binding domains, flipping the transmembrane **MalF–MalG** channel from inward-facing to outward-facing, prying open MalE to release maltose into the channel, and hydrolyzing ATP to deliver maltose into the cytoplasm.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`1M5Y`** — *E. coli* SurA Periplasmic Chaperone Full-Length Structure (X-ray $3.0\,\text{\AA}$, CC0 Public Domain). Pre-built in [`ecoli-vulkan-engine/web/models/1M5Y.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1M5Y.glb) (4.42 MB).
  * **`1OMP` / `1ANF`** — *E. coli* MalE (Maltose-Binding Protein) Open Apo (`1OMP`) vs. Closed Maltose-Bound (`1ANF`) States. Pre-built in [`ecoli-vulkan-engine/web/models/1OMP.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1OMP.glb) (954 KB).
  * **`2R6G`** — Intact *E. coli* $\text{MalFGK}_2\text{–MalE}$ Catalytic Intermediate ABC Transporter Complex (X-ray $2.8\,\text{\AA}$).
* **Small Molecules (PubChem / RDKit):**
  * **D-Maltose ($\alpha$-D-Glucopyranosyl-$(1\to4)$-D-glucose):** PubChem CID `6255`.
  * **L-Tyrosine 228 ($\pi$-$\pi$ Stacking Pocket in SurA):** PubChem CID `6057`.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Peri_*`)

The Blender generator [`scripts/generate_periplasmic_transport.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_periplasmic_transport.py) must export [`client/public/models/periplasmic_transport.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/periplasmic_transport.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Peri_SurA_CoreCradle` | SurA N+C Core Chaperone Cradle (`1M5Y`) | `1M5Y` | `#00B4D8` | `(-5.5, +2.0, 0.0)` |
| `Piece_Peri_SurA_PPIase_P1P2` | SurA P1 & P2 Peptidyl-Prolyl Isomerase Domains | `1M5Y` | `#9D4EDD` | `(-8.0, +4.5, +2.5)` |
| `Piece_Peri_Unfolded_OMP_Cargo` | Escorted Unfolded OMP Polypeptide + Ar-X-Ar Signal | Procedural / `1M5Y` | `#F72585` | `(-5.5, +5.5, -2.0)` |
| `Piece_Peri_MalE_VenusFlytrap` | Periplasmic MalE Two-Lobe Solute Scout (`1OMP`) | `1OMP` / `2R6G` | `#FFB703` | `(+4.5, +5.5, 0.0)` |
| `Piece_Peri_Maltose_Ligand` | Bound Maltose Disaccharide in MalE Hinge Cleft | `1ANF` | `#00F5D4` | `(+4.5, +3.5, +3.0)` |
| `Piece_Peri_MalFG_TM_Channel` | Inner-Membrane MalF & MalG Transmembrane Permease | `2R6G` | `#06D6A0` | `(+4.5, 0.0, 0.0)` |
| `Piece_Peri_MalK2_ATPase_Dimer` | Cytoplasmic $\text{MalK}_2$ Nucleotide-Binding ATPase Dimer | `2R6G` | `#FF7B00` | `(+4.5, -5.0, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['periplasmic_transport']`)

* **Upstream Donor:** SecYEG Translocon (`secyeg`, feeding unfolded OMPs to SurA) & Outer-Membrane Porins (`envelopes`, feeding maltose to MalE)
* **Inputs:**
  * **SurA Pathway:** $\text{Unfolded Periplasmic OMP Polypeptide}$
  * **MalE–MalFGK$_2$ Pathway:** $\text{Periplasmic Maltose} + 2\,\text{ATP} + 2\,\text{H}_2\text{O}$
* **Outputs:**
  * **SurA Pathway:** $\text{Insertion-Competent OMP delivered to BAMPOTRA1}$
  * **MalE–MalFGK$_2$ Pathway:** $\text{Cytoplasmic Maltose} + 2\,\text{ADP} + 2\,\text{P}_i$
* **Downstream Consumer:** BAM Complex (`bam`), Chemosensory Tar Receptor (`chemosensory_mcp`), & Cytoplasmic Glycolysis (`metabolic_hubs`)
* **Energy Currency:** Entropic Holdase Binding (SurA, $0\,\text{ATP}$) & Alternating-Access ABC ATP Hydrolysis ($\text{MalK}_2$, $2\,\text{ATP/maltose}$)
* **Turnover Rate ($k_{\text{cat}}$):** SurA transit time $\sim 0.5\text{–}2\,\text{s}$; $\text{MalFGK}_2$ import $\sim 1\text{–}2\text{ maltose/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['periplasmic_transport']`)

1. **`maltose_concentration`** (*Periplasmic [Maltose] Gradient*, `0%` = Open Apo MalE `1OMP`, `100%` = Closed Venus-Flytrap `1ANF` & Active ABC Import)
2. **`sura_omp_flux`** (*SecYEG $\to$ SurA $\to$ BAM Escort Rate*, `0%` to `200%`, default `100%`)
3. **`abc_atp_state`** (*$\text{MalFGK}_2$ Alternating-Access Cycle*, `0` = Inward-Facing Resting, `1` = ATP-Bound Outward-Facing Transition (`2R6G`), `2` = Post-Hydrolysis Cytoplasmic Release)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Navigating the ATP-Free Periplasmic Gel:** Frame the periplasmic space between the inner and outer membranes. Explain why bacteria need specialized shuttles (`SurA` for proteins, `MalE` for sugars) in a compartment with zero ATP.
2. **Stage 2 — `SurA` Cradling Unfolded $\beta$-Barrels (`1M5Y`):** Focus on `Piece_Peri_SurA_CoreCradle` and `Piece_Peri_Unfolded_OMP_Cargo`. Show how SurA grabs unfolded outer-membrane proteins exiting SecYEG (`secyeg`), uses its P1/P2 domains (`Piece_Peri_SurA_PPIase_P1P2`) to isomerize proline turns, and escorts them safely to the BAM complex (`bam`).
3. **Stage 3 — The `MalE` Venus-Flytrap Sugar Scout (`1OMP`):** Pan to `Piece_Peri_MalE_VenusFlytrap` and `Piece_Peri_Maltose_Ligand`. Watch maltose enter the cleft between MalE's two lobes, triggering a $35^\circ$ hinge closure that traps the sugar and allows interaction with both the Tar chemoreceptor (`chemosensory_mcp`) and the $\text{MalFGK}_2$ transporter.
4. **Stage 4 — Docking on $\text{MalFGK}_2$ & The Outward-Facing Clamp (`2R6G`):** Focus on `Piece_Peri_MalFG_TM_Channel` and `Piece_Peri_MalK2_ATPase_Dimer`. When closed MalE docks on MalFG, two ATP molecules snap the cytoplasmic $\text{MalK}_2$ dimer shut, flipping the transmembrane helices outward to pry MalE open.
5. **Stage 5 — ATP Hydrolysis & Cytoplasmic Delivery:** Show ATP hydrolysis reopening $\text{MalK}_2$ inward, releasing maltose into the cytoplasm to fuel glycolysis and Pyruvate Dehydrogenase (`metabolic_hubs`).

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_periplasmic_transport.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_periplasmic_transport.py) and export `client/public/models/periplasmic_transport.glb`.
- [ ] Create [`client/src/core/periplasmicTransport.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/periplasmicTransport.ts).
- [ ] Register `'periplasmic_transport'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
