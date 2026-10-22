# Module 07: Nucleoid Architecture & Histone-Like NAPs (`HU` `1P71`, `H-NS` `1HNS`, `Fis` `3IV5`, & B-DNA `1BNA`)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `nucleoid`
* **Biological Category:** Chromosomal DNA Supercoiling, Bending, Bridging & Topological Domain Insulation

---

## 1. Scientific & Structural Overview

An *Escherichia coli* cell is only $1.5\,\mu\text{m}$ long, yet its single circular chromosome ($4.64\,\text{Mbp}$) measures **$1,500\,\mu\text{m}$ ($1.5\,\text{mm}$) when stretched out**—a $1,000\times$ linear compaction ratio achieved *without* eukaryotic histone octamers (`CELLULAR_ELEMENTS_CATALOG.md` Section 1.5).

Prokaryotes compact and organize their genome into ~400 independent negatively supercoiled plectonemic loops (**Topological Domains**, $\sim 10\,\text{kbp}$ each) using three mechanisms:
1. **DNA Gyrase Supercoiling (`gyrase`):** Introduces negative superhelical writhe ($\sigma \approx -0.06$), twisting DNA duplexes into braided plectonemes.
2. **Nucleoid-Associated Proteins (NAPs):**
   * **HU ($\alpha\beta$ Heterodimer, PDB `1P71`):** The most abundant histone-like protein during exponential growth (~30,000–50,000 dimers/cell). Inserts two conserved **proline $\beta$-ribbon arms** into the DNA minor groove to induce sharp $105^\circ\text{–}140^\circ$ flexible bends, compacting DNA while facilitating transcription and replication initiation.
   * **Fis (Factor for Inversion Stimulation, PDB `3IV5`):** Homodimer that peaks in early exponential phase (~60,000 copies), bending DNA by $50^\circ\text{–}90^\circ$ at rRNA promoters and stabilizing supercoil branch points.
   * **H-NS (Histone-Like Nucleoid Structuring Protein, PDB `1HNS` / `3NR7`):** Global xenogeneic silencer and **DNA-bridging clamp**. Oligomerizes head-to-head and tail-to-tail along AT-rich DNA tracts to cross-link two parallel DNA duplexes into a stiff bridged filament that blocks RNA Polymerase (`rnap`) access and seals the base of plectonemic loops.
   * **MukBEF (`6H2X`):** Bacterial SMC (Structural Maintenance of Chromosomes) condensin ring that extrudes long-range DNA loops using ATP.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`1P71`** — HU Protein Bound to Sharply Bent DNA Duplex (X-ray $2.9\,\text{\AA}$, CC0 Public Domain).
  * **`3IV5`** — *E. coli* Fis Homodimer Bound to High-Affinity DNA Target Site (X-ray $1.8\,\text{\AA}$).
  * **`1HNS` / `3NR7`** — *E. coli* H-NS DNA-Binding & Oligomerization Bridging Domains.
  * **`1BNA`** — Drew-Dickerson B-DNA Dodecamer Duplex. Pre-built in [`ecoli-vulkan-engine/web/models/1BNA.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1BNA.glb).

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Nuc_*`)

The Blender generator [`scripts/generate_1p71_nucleoid_naps.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_1p71_nucleoid_naps.py) must export [`client/public/models/nucleoid_naps.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/nucleoid_naps.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Nuc_Plectoneme_DNA` | Negatively Supercoiled Plectonemic B-DNA Loop (`1BNA`) | `1BNA` / `1P71` | `#3A0CA3` | `(0.0, 0.0, 0.0)` |
| `Piece_Nuc_HU_Dimers` | HU $\alpha\beta$ Heterodimer with Minor-Groove $\beta$-Ribbon Arms | `1P71` | `#FFB703` | `(0.0, +5.5, +2.0)` |
| `Piece_Nuc_HNS_Bridge` | H-NS Oligomeric DNA-Bridging Filament Clamp | `1HNS` / `3NR7` | `#F72585` | `(0.0, -5.0, +2.5)` |
| `Piece_Nuc_Fis_Benders` | Fis Homodimer Branch-Point Stabilizer | `3IV5` | `#00F5D4` | `(-4.5, +2.5, -2.5)` |
| `Piece_Nuc_MukBEF_Clamp` | MukBEF SMC Condensin Loop-Extrusion Ring | `6H2X` | `#06D6A0` | `(+4.5, -3.5, -2.5)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['nucleoid']`)

* **Upstream Donor:** DNA Polymerase III Replisome (`pol_iii`) & DNA Gyrase (`gyrase`)
* **Inputs:**
  * $\text{Relaxed or Newly Replicated Circular dsDNA ($4.64\,\text{Mbp}$)}$
  * $\text{HU, Fis, H-NS Architectural Proteins} + \text{MukBEF}\cdot\text{ATP}$
* **Outputs:**
  * $\text{1,000-Fold Compacted Plectonemic Nucleoid ($\sim 400$ Topological Domains)}$
  * $\text{Silenced AT-Rich Xenogeneic Islands (via H-NS Bridging)}$
* **Downstream Consumer:** RNA Polymerase (`rnap`) & Expressome (`expressome`)
* **Energy Currency:** Negative Superhelical Torsional Free Energy ($\Delta G_{\text{supercoil}}$) & MukB ATP Hydrolysis
* **Turnover Rate ($k_{\text{cat}}$):** NAP residence time $\sim 0.1\text{–}10\,\text{s}$; MukBEF loop extrusion $\sim 500\text{–}1,000\,\text{bp/s}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['nucleoid']`)

1. **`nap_compaction`** (*HU / Fis / H-NS Occupancy*, `0%` = Decondensed Relaxed DNA Loop, `100%` = Tightly Bent & Bridged Plectoneme)
2. **`growth_phase`** (*Physiological Growth Phase*, `0` = Exponential Phase [High Fis & HU], `1` = Stationary/Cold-Shock Phase [High H-NS & Dps Crystalline Compaction])
3. **`supercoil_density`** (*Negative Writhe $\sigma$*, `0.00` to `-0.08`)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — The 1,000-Fold Packaging Paradox:** Frame `Piece_Nuc_Plectoneme_DNA`. Explain how a $1,500\,\mu\text{m}$ circular chromosome is packed into a $1\,\mu\text{m}$ cytoplasmic zone without eukaryotic histones or a nuclear envelope.
2. **Stage 2 — Plectonemic Supercoiling:** Show the braided interwound twist of `Piece_Nuc_Plectoneme_DNA` introduced by DNA Gyrase (`gyrase`), storing torsional spring energy that helps melt promoters for transcription.
3. **Stage 3 — `HU` Proline $\beta$-Ribbon Bending (`1P71`):** Zoom into `Piece_Nuc_HU_Dimers` at the apex of the loop. Show how HU inserts two $\beta$-ribbon arms into the DNA minor groove like a molecular wedge, bending the stiff double helix by $130^\circ$ without breaking base pairs.
4. **Stage 4 — `H-NS` Duplex Bridging & Domain Insulation:** Dolly to `Piece_Nuc_HNS_Bridge` clamping the stem of the plectoneme. Show how H-NS oligomers cross-link two parallel DNA strands together, locking topological domains and silencing foreign AT-rich genes.
5. **Stage 5 — `Fis` & `MukBEF` Dynamic Remodeling:** Focus on `Piece_Nuc_Fis_Benders` and `Piece_Nuc_MukBEF_Clamp`. Show how Fis stabilizes branch points during rapid growth while the MukBEF condensin ring extrudes macro-domain loops during chromosome segregation.

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_1p71_nucleoid_naps.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_1p71_nucleoid_naps.py) and export `client/public/models/nucleoid_naps.glb`.
- [ ] Create [`client/src/core/nucleoidArchitecture.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/nucleoidArchitecture.ts).
- [ ] Wire the Whole-Cell `'nucleoid'` click target in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
