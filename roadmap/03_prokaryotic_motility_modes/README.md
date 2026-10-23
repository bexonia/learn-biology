# Module 03: The 4 Modes of Prokaryotic Movement (Flagellum, Type IV Pilus Twitching, Gliding, & Archaeal Archaellum)

* **Status:** `[x]` Python Generator & 3D `.glb` Asset Built (`[ ]` Frontend UI Wiring Pending)
* **Target Scale ID:** `motility_modes`
* **Discrete Python Generator:** [`./generate_03_prokaryotic_motility_modes.py`](./generate_03_prokaryotic_motility_modes.py)
* **Generated 3D Model:** [`./motility_modes.glb`](./motility_modes.glb)
* **Visual Primer Reference:** [`primer_fig8.png`](../../primer_fig8.png) (*"PROKARYOTIC MOVEMENT" — 1. Bacterial Flagellum, 2. Pilus Retraction Twitching, 3. Gliding Movement, 4. Archaeal Flagellum*)
* **Biological Category:** Comparative Locomotion Nanomachinery ($25\text{–}50\,\text{nm}$ basal motors + micron-scale filaments)

---

## 1. Scientific & Structural Overview

As depicted in [`primer_fig8.png`](file:///c:/Users/devcd/GenProjects/primer_fig8.png), prokaryotes move through fluids and across solid surfaces using four biophysically distinct nanomachines:

1. **Bacterial Flagellum — Swimming (`7CGO`):**
   * Powered by the **Proton Motive Force ($\text{H}^+$ or $\text{Na}^+$)** flowing through MotAB stators to spin the C-ring/rod/hook/flagellin propeller at $300\text{–}1,000\,\text{Hz}$ ($18,000\text{–}60,000\,\text{RPM}$).
2. **Type IV Pilus Retraction — Twitching Motility (`3JC8` / `5VXY`):**
   * A motorized grappling hook: the hexameric assembly ATPase **PilB** polymerizes **PilA** subunits into a long filament that extends through the outer-membrane **PilQ** secretin pore. Once the pilus tip adheres to a solid surface, the antagonistic hexameric retraction ATPase **PilT** hydrolyzes ATP to rapidly depolymerize PilA back into the inner membrane, pulling the bacterium forward with $>100\,\text{pN}$ of force (one of the strongest molecular motors in nature).
3. **Gliding Movement — Surface Track Conveyor (`6W6M` / `GldLM–SprB`):**
   * Bacteria such as *Flavobacterium* and *Myxococcus* glide smoothly over surfaces without flagella or pili. A proton-driven inner-membrane rotary motor (**GldLM**) drives a periplasmic gear train that propels outer-membrane adhesins (**SprB**) along a closed helical conveyor track on the cell surface—acting like miniature tank treads against the substrate.
4. **Archaeal Flagellum (Archaellum) — ATP-Driven Swimming (`7B03` / `5O4U`):**
   * A textbook case of **convergent evolution**: although it spins like a helical propeller to swim through water, the Archaellum shares zero evolutionary homology with the bacterial flagellum. Instead, it evolved from a Type IV Pilus, lacks a hollow central channel (assembled from the base rather than the tip), and is powered directly by **intracellular ATP hydrolysis** via the hexameric **FlaI** ATPase and **FlaJ** membrane platform.

---

## 2. Trusted Open-Source 3D Data Sources

* **RCSB PDB Experimental Structures:**
  * **`3JC8` / `5VXY`** — Type IV Pilus Basal Body & Hexameric PilB/PilT ATPase / PilQ Secretin (Cryo-EM/X-ray, CC0 Public Domain).
  * **`6W6M`** — *Flavobacterium johnsoniae* GldLM Gliding Motility Proton Motor ($3.9\,\text{\AA}$ Cryo-EM).
  * **`5O4U` / `7B03`** — Archaeal Archaellum Filament & FlaI/FlaJ Motor Complex (*Pyrococcus furiosus* / *Methanospirillum*).
  * **`7CGO`** — Bacterial Flagellar Basal Body Reference (`motor.glb`).

---

## 3. 3D Subunit Mesh Decomposition (`Piece_Mot_*`)

The Blender generator [`scripts/generate_prokaryotic_motility.py`](file:///c:/Users/devcd/GenProjects/learn-biology/scripts/generate_prokaryotic_motility.py) must export [`client/public/models/motility_modes.glb`](file:///c:/Users/devcd/GenProjects/learn-biology/client/public/models/motility_modes.glb) with these named child meshes:

| Mesh Object Name | Motility System & Subunit | PDB Reference | Color Hex | Exploded Vector $\vec{v}_{\text{dissoc}}$ |
| :--- | :--- | :--- | :--- | :--- |
| `Piece_Mot_T4P_PilQ_Secretin` | Type IV Pilus Outer-Membrane PilQ Secretin Pore | `3JC8` | `#0077B6` | `(-6.0, +5.5, 0.0)` |
| `Piece_Mot_T4P_PilA_Filament` | Type IV Pilus Helical PilA Grappling Filament & Adhesin Tip | `5VXY` | `#00F5D4` | `(-6.0, +9.0, 0.0)` |
| `Piece_Mot_T4P_PilMNO_Alignment` | Periplasmic PilMNO Alignment Cage & PilC Platform | `3JC8` | `#06D6A0` | `(-6.0, +1.0, 0.0)` |
| `Piece_Mot_T4P_PilBT_ATPase` | Hexameric PilB (Extension) / PilT (Retraction) ATPase Ring | `5TSH` | `#FFB703` | `(-6.0, -4.5, 0.0)` |
| `Piece_Mot_Glide_GldLM_Motor` | Gliding Inner-Membrane GldLM Proton Rotary Motor | `6W6M` | `#FF7B00` | `(0.0, -3.5, 0.0)` |
| `Piece_Mot_Glide_SprB_Track` | Gliding Periplasmic Pinion & SprB Helical Surface Adhesin Track | `6W6M` | `#E76F51` | `(0.0, +5.0, 0.0)` |
| `Piece_Mot_Arch_SLayer_Anchor` | Archaeal S-Layer Collar & ArlF/ArlG Periplasmic Stator | `7B03` | `#9D4EDD` | `(+6.0, +4.0, 0.0)` |
| `Piece_Mot_Arch_Filament` | Solid Archaeal Archaellin Helical Propeller (`5O4U`) | `5O4U` | `#F72585` | `(+6.0, +8.5, 0.0)` |
| `Piece_Mot_Arch_FlaIJ_ATPase` | Archaeal FlaJ Membrane Platform & FlaI Hexameric ATPase | `4B45` | `#FFD166` | `(+6.0, -4.5, 0.0)` |

---

## 4. Biochemical Circuit I/O (`CIRCUITS_DB['motility_modes']`)

* **Upstream Donor:** $F_1F_0$-ATP Synthase (`atp_synthase`, supplying ATP for PilT & FlaI) + Respiratory Complex I (`complex_i`, supplying $\Delta p$ for Flagellum & GldLM)
* **Inputs:**
  * $\text{ATP} + \text{H}_2\text{O}$ (Type IV Pilus PilB/PilT & Archaeal FlaI)
  * $\text{Periplasmic }\text{H}^+\text{ Flux ($\Delta p$)}$ (Flagellar MotAB & Gliding GldLM)
* **Outputs:**
  * $\text{Twitching Grappling Force ($>100\,\text{pN}$ at $1\,\mu\text{m/s}$)}$
  * $\text{Surface Gliding Thrust ($2\text{–}10\,\mu\text{m/s}$)}$
  * $\text{Archaeal Swimming Propulsion ($50\text{–}500\,\mu\text{m/s}$)}$
* **Downstream Consumer:** Whole-Cell Chemotaxis, Surface Colonization, & Biofilm Microcolony Formation
* **Energy Currency:** Dual comparison: $\Delta p$ ($\text{H}^+$ motive force) vs. $\text{ATP}$ hydrolysis
* **Turnover Rate ($k_{\text{cat}}$):** PilT retraction $\sim 1,500\text{ PilA subunits/s}$; GldLM rotation $\sim 1\text{–}5\,\text{Hz}$

---

## 5. Interactive Simulation HUD Controls (`ITERATION_CONTROLS_DB['motility_modes']`)

1. **`motility_mode`** (*Active Mechanism Selector*, `0` = All 4 Comparison, `1` = Type IV Pilus Twitching, `2` = Gliding Track, `3` = Archaeal Archaellum)
2. **`pilus_cycle`** (*Type IV Pilus State*, `0` = PilB Extension, `1` = Tip Surface Adhesion, `2` = PilT $100\,\text{pN}$ Retraction Winch)
3. **`energy_supply`** (*ATP / PMF Fuel Rate*, `0%` to `200%`, default `100%`)

---

## 6. Mandatory 5-Stage Explanatory Trace ("How It Works")

1. **Stage 1 — Four Solutions for Microbial Locomotion:** Frame the comparative motility panorama (`primer_fig8.png`). Contrast swimming in liquid (Bacterial Flagellum & Archaeal Archaellum) with crawling across solid surfaces (Type IV Pilus Twitching & Gliding).
2. **Stage 2 — Type IV Pilus Extension (`PilB`):** Focus on `Piece_Mot_T4P_PilBT_ATPase` and `Piece_Mot_T4P_PilA_Filament`. Show how the hexameric PilB ATPase scoops PilA subunits out of the inner membrane and polymerizes a $2\,\mu\text{m}$ fiber out through the PilQ secretin pore.
3. **Stage 3 — Twitching Retraction Winch (`PilT`):** Focus on `Piece_Mot_T4P_PilQ_Secretin` and `Piece_Mot_T4P_PilBT_ATPase`. Once the pilus tip latches onto a surface, PilT replaces PilB at the base and hydrolyzes ATP to disassemble the filament, winching the cell forward with $>100\,\text{pN}$ of force.
4. **Stage 4 — Gliding Tank-Tread Motility (`GldLM–SprB`):** Pan to `Piece_Mot_Glide_GldLM_Motor` and `Piece_Mot_Glide_SprB_Track`. Show how proton flux spins the inner-membrane GldLM motor, driving SprB adhesin pins along a helical outer-membrane track to glide smoothly without any external appendages.
5. **Stage 5 — Convergent Evolution: The Archaeal Archaellum (`FlaI/FlaJ`):** Pan to `Piece_Mot_Arch_Filament` and `Piece_Mot_Arch_FlaIJ_ATPase`. Show how Archaea repurposed a Type IV Pilus into an ATP-driven rotary swimming propeller anchored into the crystalline S-layer.

---

## 7. Implementation Checklist

- [x] Create [`./generate_03_prokaryotic_motility_modes.py`](./generate_03_prokaryotic_motility_modes.py) and export [`./motility_modes.glb`](./motility_modes.glb) and `../../client/public/models/motility_modes.glb`.
- [ ] Create [`client/src/core/prokaryoticMotility.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/core/prokaryoticMotility.ts).
- [ ] Register `'motility_modes'` in [`client/src/types/biology.ts`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/types/biology.ts), [`ScaleNavigator.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Header/ScaleNavigator.tsx), [`App.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/App.tsx), and [`CellInspectorDrawer.tsx`](file:///c:/Users/devcd/GenProjects/learn-biology/client/src/components/Inspector/CellInspectorDrawer.tsx).
- [ ] Verify `pnpm --dir client run build` succeeds with zero errors.
