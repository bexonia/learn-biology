# Module 13: Horizontal Gene Transfer & Secretion Nanomachines — Conjugative F-Pilus T4SS (`7OKO`), T3SS Injectisome (`7AH9`), & T6SS Contractile Spear (`6H3L`)

* **Status:** `[x]` Python Generator & 3D `.glb` Asset Built (`[ ]` Frontend UI Wiring Pending)
* **Target Scale ID:** `secretion_systems`
* **Discrete Python Generator:** [`./generate_13_conjugation_secretion_systems.py`](./generate_13_conjugation_secretion_systems.py)
* **Generated 3D Model:** [`./secretion_systems.glb`](./secretion_systems.glb)
* **Biological Category:** Trans-Envelope Plasmid DNA Conjugation Bridge & Bacterial Virulence / Inter-Bacterial Warfare Nanomachines ($30\text{–}100\,\text{nm}$)

---

## 1. Scientific & Structural Overview

Prokaryotes rapidly share antibiotic-resistance **Plasmids** across species (**Horizontal Gene Transfer**) and inject effector proteins directly into eukaryotic host cells or rival bacteria using three monumental trans-envelope nanomachines:

1. **Type IV Secretion System (`T4SS`) & Conjugative F-Pilus (`7OKO` / `5LEG`, ~3.5 MDa):**
   * Connects the cytoplasmic **Plasmid** (seen in the Whole Cell view) to a recipient bacterium:
   * **Cytoplasmic Relaxosome (`TraI` Helicase-Relaxase):** Nicks the plasmid at the origin of transfer (`oriT`), remains covalently bound to the 5' end of the single-stranded DNA (ssDNA), and unwinds the plasmid using ATP.
   * **Inner-Membrane Coupling Protein (`TraD` Hexameric ATPase) & VirB4/VirB11 Motor:** Docks the TraI–ssDNA complex and pumps the single-stranded plasmid through the **Outer-Membrane Core Complex (`OMCC`, 14-fold symmetry)** and out the hollow **Conjugative F-Pilus** (`TraA` pilin-phospholipid helical tube) into the recipient cell, where both strands are replicated back into circular dsDNA plasmids.
2. **Type III Secretion System (`T3SS`) "Injectisome" Molecular Syringe (`7AH9` / `6Q15`):**
   * Evolutionarily derived from the bacterial flagellar basal body (`motor`), the T3SS replaces the flagellar hook and filament with a rigid, $80\,\text{nm}$ hollow **PrgI/MxiH Needle** capped by a **V-Antigen Tip Complex** that punches a translocon pore directly into a host eukaryotic plasma membrane, injecting unfolded virulence effectors powered by both $\Delta p$ and the cytoplasmic **InvC** hexameric ATPase.
3. **Type VI Secretion System (`T6SS`) Contractile Phage-Tail Crossbow (`6H3L` / `5N8N`):**
   * An inverted bacteriophage tail anchored inside the bacterium: a contractile outer **VipA/VipB Sheath** wraps around an inner **Hcp Hexamer Tube** tipped with a sharp **VgrG–PAAR Spike** loaded with antibacterial toxins. Within $2\,\text{milliseconds}$, the sheath contracts to half its length, firing the poisoned Hcp-VgrG spear through the cell envelope into a neighboring competitor bacterium.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`7OKO` / `5LEG`** — Conjugative Type IV Secretion System (T4SS) Core & Inner-Membrane Complex (Cryo-EM $3.1\,\text{\AA}$, CC0 Public Domain).
  * **`5FLU`** — Conjugative F-Pilus Helical Filament with Stoichiometric PG Phospholipids ($3.6\,\text{\AA}$ Cryo-EM).
  * **`7AH9` / `6Q15`** — *Salmonella* / *E. coli* Type III Secretion Injectisome Needle Complex ($3.3\,\text{\AA}$ Cryo-EM).
  * **`6H3L` / `5N8N`** — Type VI Secretion System Contractile Sheath, Baseplate, & VgrG Spike.

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Sec_*`)

The Blender generator [`scripts/generate_secretion_systems.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_secretion_systems.py) must export [`client/public/models/secretion_systems.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/secretion_systems.glb) with these named child meshes:

| Mesh Object Name | Secretion System & Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Sec_T4SS_Plasmid_Relaxosome` | Donor Circular Plasmid + `TraI` Relaxase-Helicase | `5N8O` | `#3A0CA3` | `(-6.0, -7.0, 0.0)` |
| `Piece_Sec_T4SS_IMC_ATPases` | Inner-Membrane Complex (`TraD` Coupler + `VirB4` Hexamers) | `7OKO` | `#FFB703` | `(-6.0, -3.5, 0.0)` |
| `Piece_Sec_T4SS_OMCC_Chamber` | 14-Fold Outer-Membrane Core Complex (`VirB7/B9/B10`) | `7OKO` / `5LEG` | `#00B4D8` | `(-6.0, +2.5, 0.0)` |
| `Piece_Sec_T4SS_FPilus_Tube` | Conjugative F-Pilus Helical Tube + Translocating ssDNA | `5FLU` | `#F72585` | `(-6.0, +8.0, 0.0)` |
| `Piece_Sec_T3SS_BasalBody` | T3SS Injectisome Inner/Outer Export Rings & InvC ATPase | `7AH9` | `#06D6A0` | `(0.0, -1.5, 0.0)` |
| `Piece_Sec_T3SS_Needle_Tip` | Extracellular Hollow Needle & Host Pore Translocon Tip | `7AH9` | `#FF7B00` | `(0.0, +6.5, 0.0)` |
| `Piece_Sec_T6SS_VipAB_Sheath` | T6SS Contractile VipA/VipB Spring Sheath & Baseplate | `6H3L` | `#9D4EDD` | `(+6.0, 0.0, 0.0)` |
| `Piece_Sec_T6SS_Hcp_VgrG_Spear` | Inner Hcp Tube & VgrG-PAAR Poison-Tipped Puncturing Spear | `6H3L` / `4HKH` | `#00F5D4` | `(+6.0, +8.0, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['secretion_systems']`)

* **Upstream Donor:** Cytoplasmic Supercoiled Plasmid Pool (`cell` Plasmids) & Ribosome-Synthesized Effectors (`ribosome`)
* **Inputs:**
  * **T4SS:** $\text{Donor dsDNA Plasmid} + \text{ATP}$ (TraI helicase & TraD/VirB4 translocase)
  * **T3SS / T6SS:** $\text{Unfolded Virulence Effectors / Folded VgrG Toxins} + \text{ATP} + \Delta p$
* **Outputs:**
  * **T4SS:** $\text{Recipient Single-Stranded Plasmid DNA ($\to$ Antibiotic Resistance Spread)}$
  * **T3SS / T6SS:** $\text{Translocated Host/Rival Effector Toxins}$
* **Downstream Consumer:** Recipient Bacterial Genome Replication (`pol_iii`) or Target Cell Lysis
* **Energy Currency:** Hexameric ATP Hydrolysis (`TraI/TraD/VirB4/InvC/ClpV`), $\Delta p$, & Stored Elastic Sheath Energy (`VipAB`)
* **Turnover Rate ($k_{\text{cat}}$):** T4SS DNA transfer $\sim 500\text{–}1,000\,\text{nt/s}$ (full F-plasmid in $\sim 90\,\text{s}$); T6SS firing $< 2\,\text{ms}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['secretion_systems']`)

1. **`system_selector`** (*Active Nanomachine Focus*, `0` = All 3 Comparison, `1` = Conjugative T4SS Plasmid Transfer, `2` = T3SS Injectisome Syringe, `3` = T6SS Contractile Spear)
2. **`conjugation_progress`** (*T4SS `oriT` Nicking & ssDNA Transfer*, `0%` to `100%`)
3. **`t6ss_trigger`** (*T6SS Sheath Contraction State*, `0` = Extended Cocked Sheath, `1` = Fired Spear & ClpV ATPase Recycling)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — How Plasmids & Weapons Cross Both Membranes:** Frame the three trans-envelope machines (`T4SS`, `T3SS`, `T6SS`). Explain how bacteria link cytoplasmic plasmids directly to the outside world.
2. **Stage 2 — Nicking the Plasmid at `oriT` (`TraI` Relaxosome):** Focus on `Piece_Sec_T4SS_Plasmid_Relaxosome`. Show how the TraI relaxase cuts one strand of a circular antibiotic-resistance plasmid, covalently attaches to the 5' end, and unzips the DNA duplex at $1,000\,\text{bp/s}$.
3. **Stage 3 — Pumping DNA Through the `T4SS` & Conjugative F-Pilus (`7OKO`):** Follow the single-stranded DNA through the hexameric `Piece_Sec_T4SS_IMC_ATPases`, the 14-fold `Piece_Sec_T4SS_OMCC_Chamber`, and out the phospholipid-lined `Piece_Sec_T4SS_FPilus_Tube` into a recipient bacterium.
4. **Stage 4 — The `T3SS` Molecular Syringe (`7AH9`):** Pan to `Piece_Sec_T3SS_BasalBody` and `Piece_Sec_T3SS_Needle_Tip`. Point out its structural kinship with the flagellar motor (`motor`), modified to thread unfolded effector proteins through a $25\,\text{\AA}$ hollow needle into a host cell.
5. **Stage 5 — The `T6SS` Contractile Phage-Tail Crossbow (`6H3L`):** Pan to `Piece_Sec_T6SS_VipAB_Sheath` and `Piece_Sec_T6SS_Hcp_VgrG_Spear`. Trigger the $2\,\text{ms}$ sheath contraction that fires the VgrG-PAAR diamond-tipped spear through the cell wall to eliminate competing bacteria.

---

## 7. Implementation Checklist

- [x] Create [`./generate_13_conjugation_secretion_systems.py`](./generate_13_conjugation_secretion_systems.py) and export [`./secretion_systems.glb`](./secretion_systems.glb) and `../../client/public/models/secretion_systems.glb`.
- [ ] Create [`client/src/core/secretionSystems.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/secretionSystems.ts).
- [ ] Wire the Whole-Cell `'plasmids'` click target to `'secretion_systems'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
