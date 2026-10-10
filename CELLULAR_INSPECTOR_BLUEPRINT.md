# 🛠️ Cellular Inspector Blueprint & Elaboration Guide
**Engineering Standards, Mesh Decomposition, I/O Circuits, & Universal Meta-Prompt Generator**
**Document Version:** 1.0.0  
**Status:** Canonical Implementation Guide  
**Workspace:** `GenProjects` (`learn-biology` / `ecoli-vulkan-engine`)

---

## 📑 Table of Contents
1. [Overview & Architectural Philosophy](#1-overview--architectural-philosophy)
2. [Canonical Visual Reference Standard: "The Biology Primer" Atomic & Secondary Structure Model](#2-canonical-visual-reference-standard-the-biology-primer-atomic--secondary-structure-model)
3. [The 7-Step Content Elaboration Protocol](#3-the-7-step-content-elaboration-protocol)
   - [Step 1: PDB Structure Ingestion & Curation](#step-1-pdb-structure-ingestion--curation)
   - [Step 2: Subunit Decomposition & PBR Mesh Construction](#step-2-subunit-decomposition--pbr-mesh-construction)
   - [Step 3: Exploded Assembly Mathematics & Dissociation Vectors](#step-3-exploded-assembly-mathematics--dissociation-vectors)
   - [Step 4: Biochemical I/O Circuit Specification](#step-4-biochemical-io-circuit-specification)
   - [Step 5: Color Taxonomy Compliance](#step-5-color-taxonomy-compliance)
   - [Step 6: Dynamic 3D Projections, Hairline Leaders & HUD Controls](#step-6-dynamic-3d-projections-hairline-leaders--hud-controls)
   - [Step 7: Neural TTS Voice Narration & Pedagogical Scripting](#step-7-neural-tts-voice-narration--pedagogical-scripting)
4. [The Universal Meta-Prompt Template](#4-the-universal-meta-prompt-template)
5. [Flagship Case Study 1: $F_1F_0$-ATP Synthase (`6RKW`)](#5-flagship-case-study-1-f1f0-atp-synthase-6rkw)
6. [Flagship Case Study 2: SecYEG Translocon & SecA Motor (`3J46` / `1RHZ`)](#6-flagship-case-study-2-secyeg-translocon--seca-motor-3j46--1rhz)

---

## 1. Overview & Architectural Philosophy

The **Cellular Inspector Blueprint** defines how to take any biological element from [`CELLULAR_ELEMENTS_CATALOG.md`](file:///c:/Users/devcd/GenProjects/CELLULAR_ELEMENTS_CATALOG.md) and elaborate it into a fully interactive, production-ready 3D inspection module.

Every cellular machine in our platform operates on three synchronized tiers:
1. **Mechanical / Spatial Tier:** High-fidelity 3D geometry derived from atomic Cryo-EM/X-ray coordinates, separated into interactive subunits that dissociate cleanly along physical vectors without distortion.
2. **Biochemical / Flux Tier:** Explicit accounting of incoming substrates, outgoing products, energy currencies (ATP, $\Delta p$, GTP), and turnover rates ($k_{\text{cat}}$), connecting the element into the broader metabolic network.
3. **Multi-Modal UI Tier:** Responsive 3D-to-2D hairline leader lines, subpill badges, multi-chamber pathway cards in the inspector drawer, and client-side neural voice narration.

---

## 2. Canonical Visual Reference Standard: "The Biology Primer" Atomic & Secondary Structure Model

The visual benchmark for all cellular components, macromolecular nanomachines, and folded biopolymers in this platform is defined by **The Biology Primer Atomic & Secondary Structure Model**:

![Atomic Model of a 70S Ribosome - Visual Standard](file:///c:/Users/devcd/GenProjects/learn-biology/assets/atomic_model_70s_ribosome_reference.png)

### 2.1 Biophysical Representation Hierarchy (DNA, RNA, Proteins, & Active Sites)

Every single element created in this repository must use this visual standard as its foundational reference:

1. **Folded Nucleic Acids (DNA & RNA):**
   - **Double Helices with Base Steps:** Nucleic acids must never be rendered as generic smooth tubes. Ribosomal RNAs (23S, 16S, 5S) and genomic DNA must clearly expose double-helical phosphate backbones with realized nucleotide base steps/plates and distinct major/minor grooves.
   - **Color Taxonomy:**
     - 50S Ribosomal RNA core (23S & 5S): Deep Crimson / Magenta (`#9E2A5B`).
     - 30S Ribosomal RNA decoding center (16S): Vibrant Cyan / Deep Teal (`#1A8594`).
     - mRNA Template: Warm Terracotta / Coral Red (`#BA4E3B`).
     - Genomic DNA Double Helix: Royal Amethyst Violet (`#7209B7`) with Luminous Cyan grooves (`#00F5D4`).
   - **Transfer RNAs (tRNAs):** Rigid L-shaped tertiary cloverleaf folds with distinct chamber colors: A-site Amber (`#E9C46A`), P-site Emerald (`#52B788`), and E-site Peach/Coral (`#E07A5F`).

2. **Folded Proteins & Multi-Subunit Assemblies:**
   - **Secondary Structure Ribbons:** Proteins must be rendered with high-contrast secondary structure cartoon ribbons (clearly defined $\alpha$-helices, $\beta$-pleated sheets, and flexible interconnecting loop coils).
   - **Crevice-Woven Architecture:** Structural proteins must be visualized weaving intimately through nucleic acid or membrane crevices rather than appearing as detached, generic blobs.
   - **Subunit Heteromers:** Each distinct polypeptide chain or functional domain must receive its canonical taxonomy color (e.g. Forest Green `#2D6A4F`, Golden Olive `#9A9E32`, Slate Blue `#457B9D`, Lilac Violet `#9D4EDD`, Golden Amber `#FFB703`).

3. **Active Sites, Catalytic Pockets, & Coordinated Ions:**
   - **Atomic Sphere Clusters:** Catalytic centers (such as the Peptidyl Transferase Center Domain V, ATP catalytic pockets, and Fe-S cubane clusters) must render dense, space-filling atomic sphere clusters (van der Waals radii) with glowing amber/gold emission (`#FFB703`, emissive intensity 0.85) to distinguish reacting chemistry from structural scaffolding.
   - **Metal Co-factors:** Octahedral $\text{Mg}^{2+}$, bound nucleotides (ATP/ADP), and catalytic water networks must be depicted as distinct coordinated spheres.

4. **Nascent Polypeptides & Translocating Clients:**
   - **Discrete Multi-Colored Bead Chains:** Nascent proteins emerging through exit channels or threading through translocons (SecYEG) must be depicted as segmented polypeptide bead chains with alternating residue colors ($0.4\text{--}0.6\,\text{nm}$ diameter spheres) to clearly communicate primary sequence synthesis.

### 2.2 Mandatory Workflow Protocol for New Elements

- **Rule 1 (Consult Reference Image):** Every single time you plan, design, or synthesize a new cellular nanomachine, consult the visual reference image above.
- **Rule 2 (Small Pieces & Active Site Prototypes):** When designing small pieces, catalytic pockets, or ligand complexes, generate a focused reference rendering/image first to establish the atomic geometry and color contrast before baking the full assembly.
- **Rule 3 (Macromolecules & Large Assemblies via Molecular Nodes):** For macromolecular machines and complexes, always use **Molecular Nodes** in Blender 5.2 as the primary coordinate parser and geometry generator. Always include `GeometryNodeRealizeInstances` so base rungs, nucleotide plates, and secondary structure ribbons convert into real vertex-colored mesh primitives. If Molecular Nodes cannot parse the target, reconstruct an authentic atomic model derived directly from RCSB PDB coordinates.
- **Rule 4 (PBR Shaders & Contact Shadows):** Always ground the 3D model on a warm ivory paper floor (`#FAF8F5`) with a soft contact shadow plane (`contactShadowMesh`), directional key lighting, and subtle membrane rim lighting.

---

## 3. The 7-Step Content Elaboration Protocol

When implementing any cellular element from the catalog, follow this rigorous 7-step sequence:

```
┌───────────────────────────────────────────────────────────────────────────┐
│ 1. PDB Curation ──► 2. Subunit Mesh ──► 3. Exploded Math ──► 4. I/O Card │
│ (RCSB / MN)         (Piece_ID_Sub)      (ΔX, ΔY, ΔZ)         (Inputs/Out) │
└─────────────────────────────────────┬─────────────────────────────────────┘
                                      │
                                      ▼
┌───────────────────────────────────────────────────────────────────────────┐
│ 5. Taxonomy Color ──► 6. 3D Leaders & HUD ──► 7. Neural TTS Narration    │
│ (TAXONOMY.md)         (SVG pins / sliders)    (Kokoro-82M Voice)          │
└───────────────────────────────────────────────────────────────────────────┘
```

---

### Step 1: PDB Structure Ingestion & Curation
- Identify the highest-resolution experimental Cryo-EM or X-ray structure from RCSB PDB representing the *E. coli* K-12 complex in an active or physiologically relevant conformation.
- In Blender 5.2, fetch the structure using **Molecular Nodes**:
  ```python
  import molecularnodes as mn
  mol = mn.entities.Molecule.fetch(pdb_id="6RKW", style="cartoon")
  ```
- Clean artifactual crystallographic waters, salts, and non-physiological expression tags. Retain bound cofactors, nucleotides (ATP, ADP, $\text{Mg}^{2+}$), and prosthetic groups.

---

### Step 2: Subunit Decomposition & PBR Mesh Construction
- **Never export a single monolithic mesh.** Segment the assembly into functional subunits or distinct domains.
- Name each sub-object according to the strict naming convention:
  $$\text{Piece\_}\langle\text{ComponentID}\rangle\text{\_}\langle\text{SubunitName}\rangle$$
  *Examples:* `Piece_ATP_F1_Beta`, `Piece_SecYEG_Lateral_Gate`, `Piece_ComplexI_FeS_Clusters`.
- Export geometries as `.glb` files into `models/<pdb_id>.glb` or include procedural Three.js buffer geometry generators.
- When loading in Three.js, ensure materials are instanced with PBR standard properties:
  ```javascript
  child.material = new THREE.MeshStandardMaterial({
    vertexColors: child.geometry.attributes.color ? true : false,
    roughness: 0.35,
    metalness: 0.12,
    side: THREE.DoubleSide
  });
  ```

---

### Step 3: Exploded Assembly Mathematics & Dissociation Vectors
Every multi-part machine must provide an **Exploded View Slider** ($t \in [0.0, 1.0]$) in the HUD card.
- Subunits must separate along **authentic biological vectors** ($\vec{v}_{\text{dissoc}}$), reflecting how the complex naturally dissociates:
  - Axial/Polar separation: For multisubunit rings (e.g. 50S vs 30S, $F_1$ vs $F_0$).
  - Radial pullout: For peripheral stators, clamping subunits, or chaperones.
  - Lateral parting: For membrane gates (SecY lateral gate, BamA lateral seam).
- Mathematical interpolation in the render loop:
  $$\vec{P}_i(t) = \vec{P}_{i,\text{orig}} + t \cdot \vec{v}_{\text{dissoc}, i}$$
- **Dynamic Centroid Tracking:** As parts dissociate, the camera target must dynamically center on the weighted centroid of all active subunits:
  $$\vec{C}(t) = \frac{1}{N}\sum_{i=1}^{N}\vec{P}_i(t)$$
  and dynamically scale the camera distance:
  $$R(t) = R_{\text{base}} + t \cdot \Delta R$$
  so pieces remain beautifully framed within the viewport at all times.

---

### Step 4: Biochemical I/O Circuit Specification
Every element must define a comprehensive entry in `CIRCUITS_DB` answering:
- **Upstream Source:** Where do substrates, electrons, or client proteins originate?
- **Molecular Inputs:** Exact chemical species, ions, and cofactors with stoichiometric coefficients.
- **Molecular Outputs:** Exact products, translocated states, or expelled waste.
- **Downstream Consumer:** Which cellular pathways consume the outputs?
- **Thermodynamic Currency:** Energy currency powering the machine ($\Delta p \approx -140\,\text{mV}$, ATP/GTP hydrolysis, redox potential).
- **Physiological Kinetics:** Turnover rate ($k_{\text{cat}}$), speed ($\text{aa/sec}$, $\text{bp/sec}$, or $\text{rpm}$), efficiency, and fidelity error rates.
- **Systems Homeostasis:** Allosteric feedback, regulatory alarmones (ppGpp, cAMP), and membrane stress responses ($\sigma^E$, Cpx).

---

### Step 5: Color Taxonomy Compliance
Every subunit, active site, cofactor, and membrane plane must strictly conform to [`BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md`](file:///c:/Users/devcd/GenProjects/BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md):

| Cellular Domain / Entity | Hex Code | Visual Character |
| :--- | :--- | :--- |
| **Catalytic Active Sites / ATP Pockets** | `#FFB703` | Brilliant Golden Amber (Pyrite) |
| **Fe-S Cubane Clusters** | `#FFB703` | Luminous Golden Cubes |
| **Electron Wire Trajectory** | `#00F5D4` | Luminous Aqua Beam |
| **Inner Cytoplasmic Membrane Bilayer** | `#06D6A0` | Soft Luminous Jade Green |
| **Outer Membrane (LPS Leaflet)** | `#0077B6` | Deep Marine Royal Blue |
| **Peptidoglycan Cell Wall (Murein)** | `#D4A373` | Warm Terracotta / Ochre |
| **Periplasmic Space Aqueous Buffer** | `#90E0EF` | Translucent Aquamarine |
| **RNA Backbones (23S, 16S, mRNA)** | `#7209B7` / `#00F5D4` | Amethyst Violet & Luminous Cyan |
| **tRNA Chambers (A, P, E Sites)** | `#E9C46A` / `#52B788` / `#E07A5F` | Amber, Emerald Green, Peach Coral |
| **Cytosolic Proteins & Subunits** | `#1F77B4` / `#2EC4B6` / `#9D4EDD` | Curated Harmonious Jewel Tones |

---

### Step 6: Dynamic 3D Projections, Hairline Leaders & HUD Controls
1. **Stationary 3D Anchors:**
   Attach an empty child object `new THREE.Object3D()` to each subunit mesh at its functional center:
   ```javascript
   const anchor = new THREE.Object3D();
   anchor.position.set(localX, localY, localZ);
   anchor.userData = { id: 'tag-id', key: 'subunit_key', name: 'Subunit Name', col: '#FFB703' };
   subunitMesh.add(anchor);
   ```
2. **2D SVG Overlay Leader Lines:**
   Project the anchor's 3D world position to 2D screen space and render hairline SVG polylines connecting the anchor to the HTML badge:
   - Line style: `fill="none" stroke="${col}" stroke-width="1.3" opacity="0.85"`
   - Subunit Anchor Badge: Circular pin with lettered tag ("A", "P", "E", "$\alpha$", "$\beta$", "$c$").
   - Pulsing Ring: When active, render an expanding pulsing SVG circle (`<animate attributeName="r" values="5;12;5" dur="1.8s"/>`).
3. **Interactive Subpills:**
   Embed 1-click targeting buttons inside the 3D tag badge `[🟡 Subunit A] [🟢 Subunit B]` allowing direct camera focus and subunit isolation.
4. **Inspector Drawer Pathway Cards:**
   In `#right-drawer`, render interactive cards displaying the sequential steps of the nanomachine (e.g. Boyer Three-State Cycle, SecA Power Stroke, tRNA Translocation). Clicking any tile focuses the 3D camera and highlights that specific component.

---

### Step 7: Neural TTS Voice Narration & Pedagogical Scripting
- Provide a clear, natural-language explanation structured into:
  1. **Hook & Dimensions:** What is this machine, and how big is it?
  2. **Biophysical Mechanism:** How do the subunits physically work together?
  3. **Energetics & Flux:** What energy drives it, and what are its inputs/outputs?
- Integrate phonetic pronunciation brackets for complex scientific terms:
  *Example:* `Peptidyl Transferase [PEP-tih-dil TRANS-fer-ace]`, `Lipopolysaccharide [LIP-oh-pol-ee-SAK-uh-ride]`.
- Bind to the client-side **Kokoro-82M** ONNX engine (`voiceService.js`) with interactive Play/Pause controls.

---

## 3. The Universal Meta-Prompt Template

Use this prompt template to instruct an Antigravity agent or LLM to build any cellular component:

```markdown
### 🧬 REQUEST FOR BIOPHYSICAL CELLULAR INSPECTOR COMPONENT

Build an interactive, biophysically accurate 3D inspector module for the **{{COMPONENT_NAME}}** in the *Escherichia coli* cellular engine.

#### 1. Target Identity & Structural Specification
- **Component Name:** {{COMPONENT_NAME}}
- **Scientific Classification:** {{SCIENTIFIC_NAME}} (e.g. "Rotary F-type H+-translocating ATPase")
- **PDB Structure Reference:** {{PDB_ID}} (from RCSB PDB, e.g. 6RKW, 7K00, 5D0O)
- **Hierarchical Scale Level:** {{LEVEL_SCALE}} (e.g. Level 3: Macromolecular Nanomachines, 10–50 nm)
- **Subcellular Compartment:** {{COMPARTMENT}} (e.g. Inner Membrane, Periplasm, Cytosol)
- **Molecular Mass & Dimensions:** {{DIMENSIONS}} (e.g. ~540 kDa, 10 nm × 12 nm)

#### 2. Subunit Decomposition & Exploded Assembly Vectors
Break the complex into individually selectable functional pieces. For each subunit, define its color (per BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md) and its dissociation vector when the Exploded Assembly slider moves from 0.0 to 1.0:
- **Subunit 1:** {{SUBUNIT_1_NAME}} (Chains {{CHAINS_1}})
  - Mesh Identifier: `Piece_{{ID}}_1`
  - Hex Color: `{{HEX_1}}`
  - Exploded Displacement Vector: `(ΔX: {{DX1}}, ΔY: {{DY1}}, ΔZ: {{DZ1}})`
  - Subunit Role: {{ROLE_1}}
- **Subunit 2:** {{SUBUNIT_2_NAME}} (Chains {{CHAINS_2}})
  - Mesh Identifier: `Piece_{{ID}}_2`
  - Hex Color: `{{HEX_2}}`
  - Exploded Displacement Vector: `(ΔX: {{DX2}}, ΔY: {{DY2}}, ΔZ: {{DZ2}})`
  - Subunit Role: {{ROLE_2}}

#### 3. Complete Biochemical I/O Circuit Definition ("What Gets In & Out")
Provide the complete metabolic circuit and flux specification:
- **Upstream Source:** Where do the incoming substrates or electrons originate?
- **Molecular Inputs:** What precise molecules, ions, and chemical species enter the machine? (List with stoichiometric coefficients).
- **Molecular Outputs:** What is produced, translocated, or expelled? (List with stoichiometry).
- **Downstream Consumer:** Who uses the products or accepts the output?
- **Thermodynamic Currency & Power Source:** (e.g. Proton-Motive Force Δp ≈ -140 mV, ATP/GTP hydrolysis).
- **Physiological Kinetics & Stoichiometry:**
  - Turnover Rate ($k_{\text{cat}}$): {{TURNOVER_RATE}}
  - Energetic Cost / Efficiency: {{EFFICIENCY_SPEC}}
  - Error Fidelity / Leakage: {{FIDELITY_SPEC}}
- **Systems Integration & Homeostasis:** How does this machine communicate with the rest of the cell? What allosteric feedback, regulatory nucleotides (ppGpp, cAMP), or stress responses modulate it?

#### 4. Three.js & UI Implementation Requirements
1. **Scene & Shader Setup:** Load the PDB GLB model, applying per-vertex colors and fresh standard PBR materials (roughness: 0.35, metalness: 0.12).
2. **Exploded Slider Controller:** Implement `setExplodedProgress(t)` smoothly interpolating each subunit along its biophysical dissociation vector.
3. **Dynamic Multi-Anchor SVG Leaders:**
   - Render hairline leader lines with circular badges fanning out to each major subunit.
   - Embed interactive subpill buttons within the 3D tag badge for 1-click subunit targeting.
4. **Interactive Pathway Inspector Card:**
   - Add a dedicated multi-chamber card in the Inspector Drawer allowing users to click individual chambers/subunits to focus the camera and view detailed subunit kinetics.
   - Include a `✦ Target Whole Assembly` action that frames the dynamic collective centroid.
5. **Kinetics HUD Card:** Provide live simulation controls (rotation speed, pause, step-by-step cycle) in the left HUD drawer.
```

---

## 4. Flagship Case Study 1: $F_1F_0$-ATP Synthase (`6RKW`)

### 1. Structural Blueprint
- **PDB ID:** `6RKW` (Cryo-EM 3.1 Å *E. coli* ATP Synthase)
- **Molecular Mass:** $\sim 540\,\text{kDa}$ (22 subunits)
- **Architecture:** Cytosolic $F_1$ catalytic headpiece ($\alpha_3\beta_3\gamma\delta\epsilon$) connected via central $\gamma\epsilon$ rotor axle and peripheral $b_2\delta$ stator bracket to transmembrane $F_0$ motor ($a b_2 c_{10}$).

![Atomic Model of F1F0-ATP Synthase - Visual Standard](file:///c:/Users/devcd/GenProjects/learn-biology/assets/atomic_model_f1f0_atp_synthase_reference.png)

### 2. Subunit Decomposition & Exploded Displacements
1. `Piece_ATP_F1_Alpha` (3x $\alpha$, Chains A, B, C): `#9D4EDD` (Lilac Violet) $\to$ $\vec{v}_{\text{dissoc}} = (0, +14.0, 0)$
2. `Piece_ATP_F1_Beta` (3x $\beta$, Chains D, E, F): `#FFB703` (Golden Amber) $\to$ $\vec{v}_{\text{dissoc}} = (0, +16.0, 0)$
3. `Piece_ATP_Central_Rotor` ($\gamma, \epsilon$, Chains G, H): `#06D6A0` (Luminous Jade) $\to$ $\vec{v}_{\text{dissoc}} = (0, +6.0, 0)$
4. `Piece_ATP_Fo_C_Ring` ($c_{10}$-ring, Chains I–R): `#E63946` (Carmine Red) $\to$ $\vec{v}_{\text{dissoc}} = (0, -10.0, 0)$
5. `Piece_ATP_Stator_Bracket` ($a, b_2, \delta$, Chains S–V): `#457B9D` (Slate Blue) $\to$ $\vec{v}_{\text{dissoc}} = (+16.0, 0, 0)$

### 3. Biochemical I/O Circuit Definition
- **Upstream Source:** Periplasmic proton reservoir generated by Complex I (`7Z7V`) and Cytochrome $bo_3$ (`6WTI`).
- **Inputs:** $3\,\text{ADP} + 3\,\text{P}_i$ (cytoplasm) $+ 10\,\text{H}^+$ (periplasmic reservoir).
- **Outputs:** $3\,\text{ATP}$ (cytoplasm) $+ 3\,\text{H}_2\text{O} + 10\,\text{H}^+$ (cytoplasmic dissipation).
- **Downstream Consumer:** 70S ribosome translation (4 ATP/GTP per peptide bond), flagellar motor synthesis, and ABC active transporters.
- **Thermodynamic Currency:** Proton Motive Force ($\Delta p = \Delta \Psi - 59\Delta\text{pH} \approx -140\,\text{mV}$); $\sim 90\%$ mechanical-to-chemical conversion efficiency.
- **Kinetics:** $390\,\text{rev/min}$ ($\sim 1,170\,\text{ATP/sec}$ synthesized); $3.33\,\text{H}^+ / \text{ATP}$.
- **Interactive Three-State Boyer Pathway Card:**
  - `[🟡 Open (O) State]`: Release of newly formed ATP; binding of fresh ADP + $\text{P}_i$.
  - `[🟢 Loose (L) State]`: Trapping of substrates within closed catalytic pocket.
  - `[🟠 Tight (T) State]`: Mechanical compression driving condensation of phosphoanhydride bond.

---

## 5. Flagship Case Study 2: SecYEG Translocon & SecA Motor (`3J46` / `1RHZ`)

### 1. Structural Blueprint
- **PDB ID:** `3J46` (Cryo-EM 3.4 Å SecYEG) + `1RHZ` (SecA ATPase Motor Dimer)
- **Molecular Mass:** SecYEG ($\sim 75\,\text{kDa}$) + SecA dimer ($\sim 204\,\text{kDa}$)
- **Architecture:** 10-helix transmembrane hour-glass pore (SecY) stabilized by SecE and SecG, clamped by the large cytosolic motor SecA.

### 2. Subunit Decomposition & Exploded Displacements
1. `Piece_SecYEG_SecY` (SecY, Chain Y): `#3A86FF` (Royal Blue) $\to$ $\vec{v}_{\text{dissoc}} = (0, 0, 0)$
2. `Piece_SecYEG_SecE` (SecE, Chain E): `#FFB703` (Golden Amber) $\to$ $\vec{v}_{\text{dissoc}} = (-10.0, 0, 0)$
3. `Piece_SecYEG_SecG` (SecG, Chain G): `#06D6A0` (Luminous Jade) $\to$ $\vec{v}_{\text{dissoc}} = (+10.0, 0, 0)$
4. `Piece_SecYEG_Lateral_Gate` (TM2b/3 & TM7/8): `#00F5D4` (Cyan) $\to$ $\vec{v}_{\text{dissoc}} = (0, 0, +8.0)$ (opens into lipid bilayer)
5. `Piece_SecYEG_SecA_Motor` (SecA Dimer, Chains A, B): `#9D4EDD` (Lilac Purple) $\to$ $\vec{v}_{\text{dissoc}} = (0, +16.0, 0)$ (pulls upward into cytoplasm)

### 3. Biochemical I/O Circuit Definition
- **Upstream Source:** Nascent secretome precursor proteins emerging from 70S ribosomes or SecB chaperones bearing hydrophobic N-terminal signal peptides.
- **Inputs:** Unfolded precursor preprotein $+ 1\,\text{ATP}$ per 20–25 amino acids translocated $+ \Delta p$ electrical pull.
- **Outputs:** Translocated unfolded client in periplasm (for SurA) OR integrated $\alpha$-helical transmembrane segment partitioned into inner membrane bilayer $+\,\text{ADP} + \text{P}_i$.
- **Downstream Consumer:** Periplasmic chaperones (SurA, Skp, DegP) delivering clients to BAM Complex (`5D0O`).
- **Thermodynamic Currency:** Cytoplasmic ATP hydrolysis by SecA motor coupled with $\Delta p$ electrophoretic assistance across inner membrane.
- **Kinetics:** $40\text{--}60\,\text{aa/sec}$ translocation rate; proofreading prevents folded globular proteins from jamming the 1.5 nm pore constriction.
- **Interactive Translocation Pathway Card:**
  - `[🟡 Signal Recognition]`: Hydrophobic N-terminal leader peptide wedges into SecY groove.
  - `[🟢 ATP Power Stroke]`: SecA two-helix finger pushes 20 amino acid polypeptide loop through central pore.
  - `[🟠 Lateral Gate Partition]`: TM helices slip through parted lateral gate into the lipid bilayer.
