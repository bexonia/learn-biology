# Module 08: Protein Folding Quality Control — GroEL–GroES Nano-Cage (`1AON`), DnaK/DnaJ/GrpE (`2KHO`), & Trigger Factor (`1W26`)

* **Status:** `[ ]` Pending Implementation
* **Target Scale ID:** `chaperones` (with GroEL–GroES `1AON` & Trigger Factor / DnaK Triage Cascade)
* **Biological Category:** ATP-Driven Chaperonin Folding Chamber (800 kDa, $18\,\text{nm}$) & Co-Translational Chaperone Relay

---

## 1. Scientific & Structural Overview

In the ultra-crowded bacterial cytoplasm ($300\text{–}400\,\text{mg/mL}$ protein), exposed hydrophobic patches on newly synthesized or heat-stressed polypeptides rapidly aggregate if left unprotected (`CELLULAR_ELEMENTS_CATALOG.md` Sections 1.6 & 2.1). *E. coli* prevents aggregation using a three-tier **Chaperone Relay**:

1. **Tier 1 — Trigger Factor (`TF`, PDB `1W26`, ATP-Independent Cradle):**
   * Docks directly onto ribosomal protein **uL23** at the rim of the 50S polypeptide exit tunnel (`ribosome`). Its dragon-shaped cradle shields emerging hydrophobic segments co-translationally.
2. **Tier 2 — DnaK / DnaJ / GrpE HSP70 Triage Cycle (`2KHO` / `4JNE`):**
   * **DnaJ (HSP40)** recognizes misfolded substrates and delivers them to ATP-bound open **DnaK (HSP70)**, stimulating ATP hydrolysis. In the **ADP-bound state (`2KHO`)**, DnaK's $\alpha$-helical lid slams shut over its $\beta$-sandwich peptide-binding cleft, clamping the unfolded chain to prevent aggregation. The nucleotide exchange factor **GrpE** then pries open the nucleotide-binding domain to release ADP, allowing fresh ATP binding and substrate release.
3. **Tier 3 — GroEL–GroES Chaperonin Nano-Cage (`1AON`, HSP60/HSP10):**
   * Stubborn substrates ($20\text{–}60\,\text{kDa}$) that cannot fold via DnaK alone are transferred into **GroEL–GroES (`1AON`)**—a double-ring barrel built of two back-to-back heptameric **GroEL** rings (*cis* and *trans*, 14 subunits total) capped by a dome-shaped heptameric **GroES** lid (7 subunits).
   * Unfolded protein binds the hydrophobic apical jaws of an open GroEL ring. Cooperative binding of **$7\,\text{ATP}$** plus the **GroES** dome induces a massive $60^\circ$ upward twist and $90^\circ$ rotation of the apical domains—burying the hydrophobic patches and expanding the interior cavity two-fold into a smooth, **hydrophilic "Anfinsen Cage"** where the solitary protein folds in complete isolation for $\sim 10\,\text{seconds}$ while the 7 ATPs hydrolyze. Binding of 7 ATPs to the opposite *trans* ring then ejects the GroES lid and releases the folded protein.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`1AON`** — Asymmetric GroEL–GroES–$(\text{ADP})_7$ Chaperonin Complex (X-ray $3.0\,\text{\AA}$, CC0 Public Domain). Pre-built in [`ecoli-vulkan-engine/web/models/1AON.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1AON.glb) (18.9 MB).
  * **`2KHO`** — Full-Length *E. coli* DnaK (HSP70) Chaperone in the ADP-Bound Closed State.
  * **`1DKG`** — GrpE Nucleotide Exchange Factor Bound to DnaK ATPase Domain.
  * **`1W26`** — Full-Length Trigger Factor Ribosome-Binding Cradle Chaperone.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_1AON_*`)

The Blender generator [`scripts/generate_1aon_chaperone_network.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_1aon_chaperone_network.py) must export [`client/public/models/chaperones_1aon.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/chaperones_1aon.glb) with these named child meshes:

| Mesh Object Name | Biological Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_1AON_GroES_Lid` | Heptameric GroES Dome Cap (Chains O–U) | `1AON` | `#FFB703` | `(0.0, +7.0, 0.0)` |
| `Piece_1AON_GroEL_CisRing` | GroEL *Cis* Folding Chamber Ring (Chains A–G, Expanded Hydrophilic State) | `1AON` | `#00B4D8` | `(0.0, +2.0, 0.0)` |
| `Piece_1AON_GroEL_TransRing` | GroEL *Trans* Acceptor Ring (Chains H–N, Open Hydrophobic Jaws) | `1AON` | `#0077B6` | `(0.0, -4.5, 0.0)` |
| `Piece_1AON_Encapsulated_Substrate` | Folding Substrate Protein Inside the *Cis* Anfinsen Cage | Procedural / `1AON` | `#F72585` | `(0.0, +3.5, +4.0)` |
| `Piece_1AON_DnaK_DnaJ_GrpE` | Upstream DnaK–DnaJ–GrpE HSP70 Clamp & Exchange Complex | `2KHO` / `1DKG` | `#06D6A0` | `(-6.5, +1.5, 0.0)` |
| `Piece_1AON_Trigger_Factor` | Co-Translational Trigger Factor Dragon Cradle | `1W26` | `#9D4EDD` | `(-10.0, +4.0, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['chaperones']`)

* **Upstream Donor:** 70S Ribosome Polypeptide Exit Tunnel (`ribosome`) & Heat-Shocked Cytoplasmic Proteome
* **Inputs:**
  * $\text{Nascent or Misfolded Polypeptide} + 7\,\text{ATP}$ (per GroEL half-cycle) $+ 1\,\text{ATP}$ (per DnaK clamp cycle)
* **Outputs:**
  * $\text{Natively Folded Active Enzyme}$
  * $7\,\text{ADP} + 7\,\text{P}_i$ (per GroEL ring stroke)
* **Downstream Consumer:** Functional Cytoplasmic & Metabolic Enzymes (`pyruvate_dehydrogenase`, `rnap`, etc.)
* **Energy Currency:** Cooperative Heptameric ATP Hydrolysis ($7\,\text{ATP/cycle}$)
* **Turnover Rate ($k_{\text{cat}}$):** GroEL–GroES encapsulation timer $\sim 8\text{–}10\,\text{s}$ per folding cycle ($\sim 0.1\,\text{s}^{-1}$)

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['chaperones']`)

1. **`thermal_stress`** (*Heat-Shock Temperature*, `30°C` = Normal Co-Translational Folding, `45°C` = High Misfolding Influx & $\sigma^{32}$ Heat-Shock Activation)
2. **`atp_cycle_speed`** (*GroEL Heptameric ATPase Timer*, `0%` to `200%`, default `100%`)
3. **`cage_cutaway`** (*Anfinsen Cage Interior Cutaway*, `0%` = Intact Barrel, `100%` = Front Subunits Transparent to reveal the folding substrate inside)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — The 3-Tier Chaperone Relay:** Frame the entire folding pipeline (`Piece_1AON_Trigger_Factor` $\to$ `Piece_1AON_DnaK_DnaJ_GrpE` $\to$ `Piece_1AON_GroEL_CisRing`). Explain why newly made proteins risk clumping together in the crowded cytoplasm.
2. **Stage 2 — Co-Translational Shielding (`Trigger Factor`) & `DnaK` Clamping:** Focus on `Piece_1AON_Trigger_Factor` and `Piece_1AON_DnaK_DnaJ_GrpE`. Trigger Factor cradles nascent chains at the ribosome exit, while DnaJ and DnaK use ATP to clamp and unfold misfolded segments, reset by GrpE.
3. **Stage 3 — Capturing Stubborn Proteins in GroEL's Hydrophobic Jaws:** Focus on `Piece_1AON_GroEL_TransRing`. Proteins that still cannot fold bind the greasy hydrophobic lining of an open 7-subunit GroEL ring.
4. **Stage 4 — The $7\text{-ATP}$ Power Stroke & `GroES` Lid Encapsulation:** Focus on `Piece_1AON_GroES_Lid` and `Piece_1AON_GroEL_CisRing`. Binding of 7 ATPs and the GroES dome twists the apical domains upward, doubling the chamber volume and switching the inner wall from hydrophobic to hydrophilic—creating an isolated "Anfinsen Cage" around `Piece_1AON_Encapsulated_Substrate`.
5. **Stage 5 — The 10-Second Folding Timer & Reciprocal Ejection:** Show ATP hydrolysis inside the *cis* ring followed by 7 ATPs binding to the bottom *trans* ring, which allosterically pops off the top GroES lid and releases the folded protein.

---

## 7. Implementation Checklist

- [ ] Create [`scripts/generate_1aon_chaperone_network.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_1aon_chaperone_network.py) and export `client/public/models/chaperones_1aon.glb`.
- [ ] Create [`client/src/core/chaperoneNetwork.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/chaperoneNetwork.ts).
- [ ] Wire `'chaperones'` (and `'groel_groes'` alias) in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
