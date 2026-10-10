# Biological Color Taxonomy System (Source of Truth)
**Document Version:** 1.0.0  
**Status:** Canonical Reference Standard  
**Workspace:** `GenProjects` / `ecoli-vulkan-engine`  
**Target Engines:** Blender 5.2 (EEVEE / AgX), WebGL Three.js, Vulkan Engine

---

## 1. Executive Purpose & Scope

This specification establishes the **immutable canonical color standard** for all 6 hierarchical levels of the *Escherichia coli* cellular model. Every visualization element—across offline Blender AgX renders, real-time WebGL viewports, Vulkan shaders, and user-facing interactive tooltips—**MUST** strictly adhere to the color codes and biophysical classifications defined herein.

No component may be rendered as undefined, flat white (`#FFFFFF`), or ambiguous gray. Every protein subunit, lipid layer, nucleotide, catalytic cofactor, and quantum orbital carries an unambiguous, scientifically grounded visual signature.

---

## 2. Fundamental Color Palettes by Biophysical Class

### 2.1 Elemental Atoms (CPK Standard + Bio-Metallics)

| Atom | Symbol | Hex Code | sRGB (0–255) | Linear Float (Blender) | Visual Cue / Biophysical Context |
|---|---|---|---|---|---|
| **Carbon** | C | `#2B2D42` | `(43, 45, 66)` | `(0.024, 0.026, 0.054)` | Charcoal graphite scaffold |
| **Hydrogen** | H | `#EDF2F4` | `(237, 242, 244)` | `(0.847, 0.888, 0.905)` | Light gossamer silver |
| **Oxygen** | O | `#E63946` | `(230, 57, 70)` | `(0.784, 0.040, 0.063)` | Carmine red (electronegative) |
| **Nitrogen** | N | `#3A86FF` | `(58, 134, 255)` | `(0.043, 0.231, 1.000)` | Bright electric blue (amines) |
| **Sulfur** | S | `#FFBE0B` | `(255, 190, 11)` | `(1.000, 0.518, 0.005)` | Brilliant yellow-gold (thiol, Fe-S) |
| **Phosphorus** | P | `#FB5607` | `(251, 86, 7)` | `(0.963, 0.093, 0.001)` | Deep phosphorescent orange |
| **Iron** | Fe | `#D00000` | `(208, 0, 0)` | `(0.631, 0.000, 0.000)` | Deep rust hematite red |
| **Magnesium** | Mg | `#06D6A0` | `(6, 214, 160)` | `(0.001, 0.672, 0.353)` | Luminous emerald (catalytic core) |
| **Zinc** | Zn | `#7D80B0` | `(125, 128, 176)` | `(0.205, 0.216, 0.435)` | Polished zinc slate |
| **Potassium / Sodium** | K/Na | `#8338EC` | `(131, 56, 236)` | `(0.223, 0.040, 0.835)` | Violet alkali counterions |

---

### 2.2 Amino Acid Residues (5 Biophysical Families)

| Family | Residues | Hex Code | Linear Float (Blender) | Biophysical Properties |
|---|---|---|---|---|
| **Aliphatic / Hydrophobic** | Ala, Val, Leu, Ile, Met, Pro | `#E9C46A` | `(0.799, 0.546, 0.133)` | Non-polar, buried core, warm amber-sand |
| **Aromatic** | Phe, Tyr, Trp | `#F4A261` | `(0.905, 0.361, 0.127)` | Bulky $\pi$-stacking hydrophobic rings |
| **Positively Charged (Basic)** | Lys, Arg, His | `#3A86FF` | `(0.043, 0.231, 1.000)` | Cationic at physiological pH 7.4 (blue) |
| **Negatively Charged (Acidic)**| Asp, Glu | `#D90429` | `(0.686, 0.001, 0.021)` | Anionic carboxylates (crimson red) |
| **Polar Uncharged** | Ser, Thr, Cys, Asn, Gln | `#2EC4B6` | `(0.026, 0.546, 0.468)` | Hydrogen-bonding hydrophilic side chains |

---

### 2.3 Nucleotides & Nucleic Acids

| Base / Structure | Symbol | Hex Code | Linear Float (Blender) | Description |
|---|---|---|---|---|
| **Adenine** | A | `#E63946` | `(0.784, 0.040, 0.063)` | Purine bicyclic core (Crimson) |
| **Thymine / Uracil** | T / U | `#48CAE4` | `(0.063, 0.584, 0.776)` | Pyrimidine monocycle (Sky Cyan) |
| **Guanine** | G | `#2A9D8F` | `(0.022, 0.337, 0.283)` | Purine bicyclic core (Sea Green) |
| **Cytosine** | C | `#FFB703` | `(1.000, 0.473, 0.001)` | Pyrimidine monocycle (Golden Yellow) |
| **Phosphodiester Backbone** | Sugar-P | `#7209B7` | `(0.165, 0.003, 0.473)` | Ribose + phosphate helical ribbon |

---

### 2.4 Cellular Envelopes, Membranes & Compartments

| Cellular Structure | Hex Code | Opacity ($\alpha$) | Linear Float (Blender) | Visual Features & Functional Role |
|---|---|---|---|---|
| **Outer Membrane (LPS Layer)** | `#0077B6` | `0.85` | `(0.000, 0.180, 0.473)` | Dark marine teal; lipid A + polysaccharide chains |
| **Peptidoglycan Cell Wall** | `#D4A373` | `0.70` | `(0.644, 0.361, 0.165)` | Warm ochre porous murein glycan crosslinked mesh |
| **Periplasmic Space** | `#90E0EF` | `0.20` | `(0.275, 0.730, 0.855)` | Translucent pale aquamarine aqueous gel |
| **Inner Cytoplasmic Membrane** | `#06D6A0` | `0.80` | `(0.001, 0.672, 0.353)` | Luminous jade bilayer; PE/PG/cardiolipin polar heads |
| **Cytoplasmic Matrix** | `#1A202C` | `0.10` | `(0.010, 0.014, 0.024)` | Deep colloidal crowding atmosphere |
| **Protective Capsule / Glycocalyx** | `#B5179E` | `0.25` | `(0.456, 0.009, 0.347)` | Ethereal violet polysaccharide shield |

---

## 3. Detailed Macromolecular Systems & Subunit Color Schemes (Level 3 & 4)

### 3.1 Respiratory Complex I (`7Z7V`) & Fe-S Tunnel Wire

Complex I is a giant L-shaped bioenergetic machine. It consists of two distinctly colored domains embedded in the inner membrane:

```
                  HYDROPHILIC PERIPHERAL ARM (NuoB,CD,E,F,G,I)
                           [Cobalt Blue #1F77B4]
                                  │
                  [Fe-S] TUNNEL WIRE: 8 CUBANE CLUSTERS
                       [Glowing Amber-Gold #FFB703]
                  (N1a -> N1b -> N3 -> N4 -> N5 -> N6a -> N6b -> N2)
                                  │
    ══════════════════════════════╪══════════════════════════════ [Inner Membrane
             TRANSMEMBRANE PROTON-PUMPING ARM (NuoA,H,J,K,L,M,N)    Bilayer Slab:
                           [Seafoam Green #00F5D4]                   Soft Jade #06D6A0]
    ═════════════════════════════════════════════════════════════
```

| Sub-element | Hex Code | Emissive | Description |
|---|---|---|---|
| **Hydrophilic Arm (Cytoplasm)** | `#1F77B4` | `0.05` | Cobalt blue matrix subunits NuoB, NuoCD, NuoE, NuoF, NuoG, NuoI |
| **Membrane Arm (Transmembrane)** | `#00F5D4` | `0.05` | Seafoam green proton channels NuoA, NuoH, NuoJ, NuoK, NuoL, NuoM, NuoN |
| **Fe-S Tunnel Wire Clusters** | `#FFB703` | `1.50` | Luminous golden pyrite cubane clusters ($[2\text{Fe}-2\text{S}]$ & $[4\text{Fe}-4\text{S}]$) |
| **Electron Tunneling Trajectory**| `#FFE66D` | `2.00` | Bright golden filament line connecting cluster centroids ($~10\text{ nm}$) |
| **Inner Membrane Bilayer Slab** | `#06D6A0` | `0.10` | Translucent phospholipid slab enclosing the membrane arm |
| **FMN Cofactor (Flavin)** | `#FF006E` | `1.00` | Hot magenta primary electron acceptor from NADH |

---

### 3.2 ATP Synthase (`6RKW`)

| Subunit | Hex Code | Linear Float | Functional Role |
|---|---|---|---|
| **$F_1$ $\alpha$ Subunits (3x)** | `#9D4EDD` | `(0.337, 0.076, 0.815)` | Lilac catalytic support |
| **$F_1$ $\beta$ Subunits (3x)** | `#FFB703` | `(1.000, 0.473, 0.001)` | Golden yellow catalytic ATP synthesis pockets |
| **Central Rotor Stalk ($\gamma, \epsilon$)** | `#06D6A0` | `(0.001, 0.672, 0.353)` | Luminous emerald rotating axle |
| **$F_o$ Rotor Ring ($c_{10}$)** | `#E63946` | `(0.784, 0.040, 0.063)` | Carmine red membrane cylinder driving rotation |
| **Stator Column ($b_2, \delta$)** | `#457B9D` | `(0.054, 0.180, 0.283)` | Slate blue rigid bracket resisting torque |
| **Membrane Bilayer Slab** | `#06D6A0` | `(0.001, 0.672, 0.353)` | Translucent inner membrane supporting $F_o$ |

---

### 3.3 Flagellar Basal Body & Motor (`6YKM`)

| Subunit / Structure | Hex Code | Visual Identity |
|---|---|---|
| **C-ring (Rotor / Switch: FliG, FliM, FliN)** | `#F4A261` | Coral bronze ring at the cytoplasmic face |
| **MS-ring (Inner Membrane Anchor: FliF)** | `#00F5D4` | Bright cyan ring embedded in inner membrane |
| **Stator Units (MotA/MotB 5:2 complex)** | `#1D3557` | Navy blue proton-conducting ion turbines |
| **Rod (FlgB, FlgC, FlgF, FlgG)** | `#E0E6ED` | Platinum silver central drive shaft |
| **P-ring (FlgI)** | `#D4A373` | Ochre ring bushing in peptidoglycan layer |
| **L-ring (FlgH)** | `#0077B6` | Marine blue ring bushing in outer membrane |
| **Hook (FlgE) & Filament (FliC)** | `#2EC4B6` | Emerald curved universal joint and propeller |

---

### 3.4 70S Translating Ribosome (`7K00`)

| Component | Hex Code | Visual Identity |
|---|---|---|
| **50S Large Subunit (23S/5S rRNA + 36 proteins)** | `#7209B7` | Royal amethyst purple |
| **30S Small Subunit (16S rRNA + 21 proteins)** | `#F77F00` | Warm coral orange |
| **mRNA Strand** | `#06D6A0` | Luminous lime green ribbon |
| **Aminoacyl-tRNA (A-site)** | `#FFD166` | Bright golden cloverleaf |
| **Peptidyl-tRNA (P-site)** | `#FFB703` | Amber gold cloverleaf |
| **Exit-tRNA (E-site)** | `#E9C46A` | Pale gold cloverleaf |
| **PTC Ribozyme Active Center (`A2451`, `G2447`)**| `#00F5D4` / `#3A86FF` | Glowing cyan and royal blue active nucleotides |

---

### 3.5 BAM Complex Outer Membrane Insertase (`5D0O`)

| Component | Hex Code | Visual Identity |
|---|---|---|
| **BamA 16-stranded $\beta$-barrel** | `#0077B6` | Deep marine blue transmembrane barrel |
| **BamA POTRA 1–5 Domains** | `#F77F00` | Periplasmic flexible hinge chain (Amber) |
| **BamB Lipoprotein** | `#2EC4B6` | $\beta$-propeller scaffold (Teal) |
| **BamC, BamD, BamE** | `#9D4EDD` | Essential regulatory cap (Violet) |
| **Outer Membrane LPS Bilayer** | `#0077B6` ($\alpha=0.4$) | Translucent membrane plane containing the barrel |

---

## 4. Cursor Hover Raycasting Protocol

When the user hovers over any 3D entity in the engine:
1. **Mesh Intersection & Subunit Lookup:** The raycaster resolves the object name or sub-mesh tag.
2. **Taxonomy Swatch:** The floating card displays the canonical hex color swatch.
3. **Biological Role & Taxonomy Classification:** Displays entity name, subunit name, family class, and biochemical function.
4. **Emissive Pulse:** The targeted geometry increases its emissive intensity by $+0.6$ for instant visual feedback.

---

## 5. Summary Compliance Rule
All Blender scripts, geometry node generators, WebGL loaders, and procedural fallbacks **must reference this file as the sole source of truth**. No arbitrary colors may be injected.
