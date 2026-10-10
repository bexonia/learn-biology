# 🛠️ Cellular Inspector Blueprint & Elaboration Guide
**Engineering Standards, Mesh Decomposition, I/O Circuits, Explanatory Traces, & Universal Meta-Prompt Generator**
**Document Version:** 2.0.0  
**Status:** Canonical Implementation Guide  
**Workspace:** `GenProjects` (`learn-biology` / `ecoli-vulkan-engine`)

---

## 📑 Table of Contents
1. [Overview & Architectural Philosophy](#1-overview--architectural-philosophy)
2. [Canonical Visual Reference Standard: "The Biology Primer" Atomic & Secondary Structure Model](#2-canonical-visual-reference-standard-the-biology-primer-atomic--secondary-structure-model)
   - [2.1 Biophysical Representation Hierarchy (DNA, RNA, Proteins, & Active Sites)](#21-biophysical-representation-hierarchy-dna-rna-proteins--active-sites)
   - [2.2 Mandatory Workflow Protocol for New Elements](#22-mandatory-workflow-protocol-for-new-elements)
3. [The 8-Step Content Elaboration Protocol](#3-the-8-step-content-elaboration-protocol)
   - [Step 1: PDB Structure Ingestion & Curation](#step-1-pdb-structure-ingestion--curation)
   - [Step 2: Subunit Decomposition & PBR Mesh Construction](#step-2-subunit-decomposition--pbr-mesh-construction)
   - [Step 3: Exploded Assembly Mathematics & Dissociation Vectors](#step-3-exploded-assembly-mathematics--dissociation-vectors)
   - [Step 4: Biochemical I/O Circuit Specification](#step-4-biochemical-io-circuit-specification)
   - [Step 5: Color Taxonomy Compliance](#step-5-color-taxonomy-compliance)
   - [Step 6: Dynamic 3D Projections, Hairline Leaders & HUD Controls](#step-6-dynamic-3d-projections-hairline-leaders--hud-controls)
   - [Step 7: Mandatory Explanatory Trace ("How It Works" 5-Stage Tutorial Engine)](#step-7-mandatory-explanatory-trace-how-it-works-5-stage-tutorial-engine)
   - [Step 8: Multi-Modal Neural TTS Voice Narration & Closed-Caption Synchronization](#step-8-multi-modal-neural-tts-voice-narration--closed-caption-synchronization)
4. [The Universal Meta-Prompt Template](#4-the-universal-meta-prompt-template)
5. [Flagship Case Study 1: $F_1F_0$-ATP Synthase (`6RKW`)](#5-flagship-case-study-1-f1f0-atp-synthase-6rkw)
6. [Flagship Case Study 2: SecYEG Translocon & SecA Motor (`3J46` / `1RHZ`)](#6-flagship-case-study-2-secyeg-translocon--seca-motor-3j46--1rhz)
7. [Flagship Case Study 3: 70S Polyribosome Translation Machine (`7K00` / `6PW2`)](#7-flagship-case-study-3-70s-polyribosome-translation-machine-7k00--6pw2)
8. [The Mandatory Implementation Checklist](#8-the-mandatory-implementation-checklist)

---

## 1. Overview & Architectural Philosophy

The **Cellular Inspector Blueprint** defines how to take any biological element from [`CELLULAR_ELEMENTS_CATALOG.md`](file:///c:/Users/devcd/GenProjects/CELLULAR_ELEMENTS_CATALOG.md) and elaborate it into a fully interactive, production-ready 3D inspection module.

Every cellular machine in our platform operates on four synchronized tiers:
1. **Mechanical / Spatial Tier:** High-fidelity 3D geometry derived from atomic Cryo-EM/X-ray coordinates, separated into interactive subunits that dissociate cleanly along physical vectors without distortion.
2. **Biochemical / Flux Tier:** Explicit accounting of incoming substrates, outgoing products, energy currencies (ATP, $\Delta p$, GTP), and turnover rates ($k_{\text{cat}}$), connecting the element into the broader metabolic network.
3. **Pedagogical / Explanatory Tier:** A mandatory **5-Stage Explanatory Trace** ("How It Works") tutorial engine that walks the user through the sequential causal chain of energy transduction and molecular mechanics.
4. **Multi-Modal UI Tier:** Responsive 3D-to-2D hairline leader lines, subpill badges, multi-chamber pathway cards in the inspector drawer, floating tour controls, closed captions, and client-side neural voice narration.

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

## 3. The 8-Step Content Elaboration Protocol

When implementing any cellular element from the catalog, follow this rigorous 8-step sequence:

```
┌───────────────────────────────────────────────────────────────────────────┐
│ 1. PDB Curation ──► 2. Subunit Mesh ──► 3. Exploded Math ──► 4. I/O Card │
│ (RCSB / MN)         (Piece_ID_Sub)      (ΔX, ΔY, ΔZ)         (Inputs/Out) │
└─────────────────────────────────────┬─────────────────────────────────────┘
                                      │
                                      ▼
┌───────────────────────────────────────────────────────────────────────────┐
│ 5. Taxonomy Color ──► 6. 3D Leaders & HUD ──► 7. Explanatory Trace (MUST) │
│ (TAXONOMY.md)         (SVG pins / sliders)    (5-Stage "How It Works")    │
└─────────────────────────────────────┬─────────────────────────────────────┘
                                      │
                                      ▼
┌───────────────────────────────────────────────────────────────────────────┐
│ 8. Multi-Modal Neural TTS Voice Narration & Closed Captions               │
│ (Kokoro-82M Voice / Synchronized Subtitles / Pedagogical Pause Engine)    │
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
| **Peptidoglycan Cell Wall (Murein)** | `#D4A373` / `#3F6636` | Warm Terracotta / Forest Murein |
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

---

### Step 7: Mandatory Explanatory Trace ("How It Works" 5-Stage Tutorial Engine)

> [!IMPORTANT]
> **Non-Negotiable Invariant ("MUST"):**
> Every single cellular machine, organelle, and macromolecular complex implemented in this platform **MUST** include an interactive **Explanatory Trace** tutorial engine.
> Static 3D models show structure; exploded models show parts; but cellular life is defined by **dynamic, sequential causal mechanisms**. Without an explanatory trace, an inspector is incomplete.

#### 1. The 5-Stage Universal Biological Archetype
Every biological machine across all 6 biophysical scales executes a causal sequence that maps to the Universal 5-Stage Archetype:

| Stage Number | Universal Archetype Stage | Biophysical Purpose | Typical Visual Action |
| :---: | :--- | :--- | :--- |
| **Stage 1** | **Primary Input Influx & Substrate Engagement** | Raw energy, electrochemical charge, or unreacted substrate arrives from upstream source. | Camera focuses on input entrance (e.g. stator half-channel, A-site decoding center, SecY pore mouth). Stator/substrate sparkles. |
| **Stage 2** | **Mechanical Coupling & Conformational Activation** | Input drives a mechanical displacement, neutralization, or proofreading check. | Rotor/axle spins, lever arm tilts, or sensor loop closes (e.g. Asp61 protonation, SecA two-helix finger stroke). |
| **Stage 3** | **Catalytic Intermediate & Pocket Transition** | Substrates are bound, compressed, or oriented in the catalytic cleft. | Catalytic pocket closes into intermediate state (e.g. Boyer Loose pocket, tRNA hybrid state, translocon lateral seam parting). |
| **Stage 4** | **Catalytic Turnover, Power Stroke & Synthesis** | Covalent bonds are formed/cleaved or macromolecule is translocated. | Glowing catalytic burst, chemical condensation (ADP+$P_i \to$ ATP, peptide bond synthesis), energy release. |
| **Stage 5** | **Product Release & Continuous Steady-State Dynamo** | Product is ejected to downstream consumer; machine enters continuous cycle. | Camera dollies back to grand overview; holoenzyme spins or processes continuously at steady-state. |

#### 2. TypeScript Data Model (`ExplanationStage`)
Define the stages in an array exported directly from the component metadata or scenario file:

```typescript
export interface ExplanationStage {
  step: number;               // 1 to 5
  id: string;                 // Subunit/Part key to highlight
  title: string;              // Full title: "1. Proton Motive Force Influx"
  shortLabel: string;         // Compact label for TourBar: "1. Proton Influx"
  badge: string;              // Short symbol badge: "H⁺", "γε", "ADP", "ATP", "360°"
  col: string;                // Hex taxonomy color
  desc: string;               // 1-sentence UI card description
  speech: string;             // Spoken script with phonetic brackets
  camera: {                   // 3D camera focal target & spherical coords
    target: [number, number, number];
    radius: number;
    theta: number;
    phi: number;
    duration: number;
  };
}
```

#### 3. Inspector Drawer Stepper Card UI Pattern
In `#right-drawer`, render the dedicated Explanatory Trace card:

```tsx
<div className="motor-insp-block" style={{
  background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.07) 0%, rgba(6, 214, 160, 0.07) 50%, rgba(255, 183, 3, 0.09) 100%)',
  border: '1px solid rgba(255, 119, 0, 0.35)',
  borderRadius: '8px',
  padding: '10px 12px',
  marginBottom: '14px',
  boxShadow: storyStep > 0 ? '0 0 12px rgba(255, 183, 3, 0.25)' : 'none'
}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
    <span style={{ fontSize: '11px', fontWeight: 800, color: '#C85A32', letterSpacing: '0.5px' }}>
      🎬 5-STAGE EXPLANATORY TRACE
    </span>
    <span style={{
      fontSize: '9px',
      background: storyStep > 0 ? '#FF4D00' : '#E2DACD',
      color: storyStep > 0 ? '#FFFFFF' : '#4A5568',
      padding: '2px 7px',
      borderRadius: '10px',
      fontWeight: 800
    }}>
      {storyStep > 0 ? `STAGE ${storyStep} OF 5` : 'READY'}
    </span>
  </div>

  <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
    Follow the sequential causal chain of energy transduction:
  </p>

  {/* Interactive Step Buttons */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    {STAGES.map(step => {
      const isActive = storyStep === step.step;
      return (
        <button
          key={step.step}
          className={`motor-mode-btn ${isActive ? 'active' : ''}`}
          style={{
            border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(0,0,0,0.08)',
            background: isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.65)'
          }}
          onClick={() => onSelectStoryStep?.(step.step)}
        >
          <span style={{ background: step.col }}>{step.badge}</span>
          <div>
            <strong>{step.title}</strong>
            <small>{step.desc}</small>
          </div>
          {isActive && <span>▶ ACTIVE</span>}
        </button>
      );
    })}
  </div>

  {/* Start / Stop Trace Toggle */}
  <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
    {storyStep === 0 ? (
      <button className="start-trace-btn" onClick={onStartStoryTrace}>
        🎬 Start Explanatory Trace
      </button>
    ) : (
      <button className="stop-trace-btn" onClick={onStopStoryTrace}>
        ⏹ End Trace & Run Continuous
      </button>
    )}
  </div>
</div>
```

#### 4. Three.js Scene Engine Controller (`setExplanationStep`)
In the Three.js scene class (`<Scenario>Scene.ts`), implement `setExplanationStep(stepIndex: number)`:
- **Step 0:** Dolly camera back to full overview (`radius: ~46`), reset rotation speed to $1.0$, unpause the simulation, and deselect isolated parts.
- **Steps 1–4:** Smoothly dolly camera to the active subunit (`transitionCamera(target, spherical, duration)`), set part selection (`selectComponent(stage.id)`), morph states (e.g. Boyer Loose $\to$ Tight $\to$ Open), and trigger particle/burst effects.
- **Step 5:** Return to full holoenzyme framing while operating at steady-state speed.

---

### Step 8: Multi-Modal Neural TTS Voice Narration & Closed-Caption Synchronization

The Explanatory Trace must be fully synchronized with audio and live captions:
1. **Immediate Closed-Caption Presentation:**
   Display subtitles on screen **before** the audio buffer begins decoding:
   ```typescript
   showSubtitles(stage.speech, `STAGE ${stage.step} OF 5: ${stage.shortLabel}`, 'Kokoro Neural TTS');
   ```
2. **Phonetic Pronunciation Guides:**
   Spoken strings must include phonetic bracket hints for difficult biochemistry terms so the TTS engine synthesizes them accurately:
   - `Peptidyl Transferase [PEP-tih-dil TRANS-fer-ace]`
   - `Spatium Periplasmicum [SPAH-shee-um pair-ee-PLAZ-mih-kum]`
   - `ATP Synthase [AY-tee-pee SIN-thace]`
3. **The Pedagogical Observation Pause:**
   When a step's speech completes, **do NOT advance immediately**. Provide a 750ms–1000ms visual dwell time so students can visually process what happened in the 3D viewport before the camera pans to the next stage:
   ```typescript
   voiceService.playText(stage.speech, {
     voice: selectedVoice,
     onEnd: () => {
       setTimeout(() => {
         if (stepNumber < TOTAL_STAGES) {
           playStoryStep(stepNumber + 1);
         } else {
           finishStoryTrace();
         }
       }, 850); // Pedagogical observation dwell
     }
   });
   ```

---

## 4. The Universal Meta-Prompt Template

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
- **Upstream Source:** Where do incoming substrates or electrons originate?
- **Molecular Inputs:** What precise molecules, ions, and chemical species enter the machine? (List with stoichiometric coefficients).
- **Molecular Outputs:** What is produced, translocated, or expelled? (List with stoichiometry).
- **Downstream Consumer:** Who uses the products or accepts the output?
- **Thermodynamic Currency & Power Source:** (e.g. Proton-Motive Force Δp ≈ -140 mV, ATP/GTP hydrolysis).
- **Physiological Kinetics & Stoichiometry:**
  - Turnover Rate ($k_{\text{cat}}$): {{TURNOVER_RATE}}
  - Energetic Cost / Efficiency: {{EFFICIENCY_SPEC}}
  - Error Fidelity / Leakage: {{FIDELITY_SPEC}}
- **Systems Integration & Homeostasis:** How does this machine communicate with the rest of the cell?

#### 4. Mandatory 5-Stage Explanatory Trace Definition ("How It Works")
Provide the complete 5-stage causal chain tutorial for this nanomachine:
- **Stage 1 (Primary Input Influx):** Subunit ID, Title, Spoken Script (with phonetics), Badge, Color, Camera (Target, Radius, Angles).
- **Stage 2 (Conformational Activation):** Subunit ID, Title, Spoken Script, Badge, Color, Camera.
- **Stage 3 (Catalytic Intermediate):** Subunit ID, Title, Spoken Script, Badge, Color, Camera.
- **Stage 4 (Catalytic Turnover / Synthesis):** Subunit ID, Title, Spoken Script, Badge, Color, Camera.
- **Stage 5 (Product Release & Continuous Dynamo):** Subunit ID, Title, Spoken Script, Badge, Color, Camera.

#### 5. Three.js & UI Implementation Requirements
1. **Scene & Shader Setup:** Load the PDB GLB model, applying per-vertex colors and fresh standard PBR materials (roughness: 0.35, metalness: 0.12).
2. **Exploded Slider Controller:** Implement `setExplodedProgress(t)` smoothly interpolating each subunit along its biophysical dissociation vector.
3. **Dynamic Multi-Anchor SVG Leaders:** Render hairline leader lines with circular badges fanning out to each major subunit with embedded subpills.
4. **Explanatory Trace Stepper Card:** Add the interactive 5-stage card in `#right-drawer` with active states and Start/End trace buttons.
5. **Kinetics HUD Card:** Provide live simulation controls (rotation speed, pause, step-by-step cycle) in the left HUD drawer.
```

---

## 5. Flagship Case Study 1: $F_1F_0$-ATP Synthase (`6RKW`)

### 1. Structural Blueprint
- **PDB ID:** `6RKW` (Cryo-EM 3.1 Å *E. coli* ATP Synthase)
- **Molecular Mass:** $\sim 540\,\text{kDa}$ (22 subunits)
- **Architecture:** Cytosolic $F_1$ catalytic headpiece ($\alpha_3\beta_3\gamma\delta\epsilon$) connected via central $\gamma\epsilon$ rotor axle and peripheral $b_2\delta$ stator bracket to transmembrane $F_0$ motor ($a b_2 c_{10}$).

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
- **Downstream Consumer:** 70S ribosome translation, flagellar motility, and ABC active transporters.
- **Thermodynamic Currency:** Proton Motive Force ($\Delta p \approx -140\,\text{mV}$); $\sim 90\%$ mechanical-to-chemical conversion efficiency.
- **Kinetics:** $390\,\text{rev/min}$ ($\sim 1,170\,\text{ATP/sec}$ synthesized); $3.33\,\text{H}^+ / \text{ATP}$.

### 4. Mandatory 5-Stage Explanatory Trace Implementation
| Step | ID | Title | Badge | Color | Spoken Script | 3D Camera Focus |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **1** | `proton_flux` | **1. Proton Motive Force Influx** | `H⁺` | `#FF4D00` | *"Step one: Proton Influx. Protons in the periplasm—pumped across the inner membrane by upstream respiration complexes like Complex I and Cytochrome bo₃—flow down their electrochemical gradient into the stator half-channel, driven by the proton-motive force."* | Target: `(1.5, -3.8, 0.5)`<br>Radius: `21`, $\theta$: `0.06`, $\phi$: `1.52` |
| **2** | `central_rotor` | **2. Turbine Rotation & Drive Shaft** | `γε` | `#06D6A0` | *"Step two: Turbine and Drive Shaft. Each proton neutralizes Aspartate-61 on the c-ring, allowing the turbine to turn within the hydrophobic bilayer. This directly spins the eccentric emerald-green central shaft."* | Target: `(0.5, 4.2, 1.0)`<br>Radius: `25`, $\theta$: `0.10`, $\phi$: `1.40` |
| **3** | `adp_pi_substrates` | **3. Substrate Docking in Catalytic Head** | `ADP` | `#F28482` | *"Step three: Substrate Capture. ADP and inorganic phosphate—recycled from cellular work done by ribosomes and flagellar motors—enter the F1 head. As the central shaft turns, it deforms the beta subunit into the Loose conformation, trapping these substrates in the active cleft."* | Target: `(2.8, 14.5, 1.8)`<br>Radius: `22`, $\theta$: `0.13`, $\phi$: `1.32`<br>State: `Boyer Loose` |
| **4** | `atp_product` | **4. Catalytic Condensation & Energy Release** | `ATP` | `#FFE066` | *"Step four: ATP Condensation and Release. Mechanical compression forces the pocket into the Tight state, condensing ADP and phosphate into high-energy ATP. The pocket then springs Open, ejecting ATP directly into the cytoplasm to fuel protein synthesis and cellular metabolism."* | Target: `(4.8, 15.8, 1.2)`<br>Radius: `16`, $\theta$: `0.16`, $\phi$: `1.34`<br>State: `Boyer Tight -> Open` |
| **5** | `atp_synthase_holoenzyme` | **5. Continuous Rotary Dynamo** | `360°` | `#2A9D8F` | *"Step five: Continuous Rotary Dynamo. The catalytic cycle is established. The holoenzyme operates continuously at steady-state, translocating ten protons to produce three ATP molecules with ninety percent thermodynamic efficiency for every complete revolution."* | Target: `(0.0, 6.5, 0.0)`<br>Radius: `46`, $\theta$: `0.05`, $\phi$: `1.48`<br>Full Holoenzyme Spin |

---

## 6. Flagship Case Study 2: SecYEG Translocon & SecA Motor (`3J46` / `1RHZ`)

### 1. Structural Blueprint
- **PDB ID:** `3J46` (Cryo-EM 3.4 Å SecYEG) + `1RHZ` (SecA ATPase Motor Dimer)
- **Molecular Mass:** SecYEG ($\sim 75\,\text{kDa}$) + SecA dimer ($\sim 204\,\text{kDa}$)
- **Architecture:** 10-helix transmembrane hour-glass pore (SecY) stabilized by SecE and SecG, clamped by the large cytosolic motor SecA.

### 2. Subunit Decomposition & Exploded Displacements
1. `Piece_SecYEG_SecY` (SecY, Chain Y): `#3A86FF` (Royal Blue) $\to$ $\vec{v}_{\text{dissoc}} = (0, 0, 0)$
2. `Piece_SecYEG_SecE` (SecE, Chain E): `#FFB703` (Golden Amber) $\to$ $\vec{v}_{\text{dissoc}} = (-10.0, 0, 0)$
3. `Piece_SecYEG_SecG` (SecG, Chain G): `#06D6A0` (Luminous Jade) $\to$ $\vec{v}_{\text{dissoc}} = (+10.0, 0, 0)$
4. `Piece_SecYEG_Lateral_Gate` (TM2b/3 & TM7/8): `#00F5D4` (Cyan) $\to$ $\vec{v}_{\text{dissoc}} = (0, 0, +8.0)$
5. `Piece_SecYEG_SecA_Motor` (SecA Dimer, Chains A, B): `#9D4EDD` (Lilac Purple) $\to$ $\vec{v}_{\text{dissoc}} = (0, +16.0, 0)$

### 3. Biochemical I/O Circuit Definition
- **Upstream Source:** Nascent secretome precursor proteins emerging from 70S ribosomes bearing hydrophobic N-terminal signal peptides.
- **Inputs:** Unfolded precursor preprotein $+ 1\,\text{ATP}$ per 20–25 amino acids translocated $+ \Delta p$ electrical pull.
- **Outputs:** Translocated unfolded client in periplasm (for SurA) OR integrated $\alpha$-helical transmembrane segment partitioned into lipid bilayer $+\,\text{ADP} + \text{P}_i$.
- **Downstream Consumer:** Periplasmic chaperones (SurA, Skp, DegP) delivering clients to BAM Complex (`5D0O`).
- **Thermodynamic Currency:** Cytoplasmic ATP hydrolysis by SecA motor coupled with $\Delta p$ electrophoretic assistance across inner membrane.
- **Kinetics:** $40\text{--}60\,\text{aa/sec}$ translocation rate; proofreading prevents folded proteins from jamming pore.

### 4. Mandatory 5-Stage Explanatory Trace Implementation
| Step | ID | Title | Badge | Color | Spoken Script | 3D Camera Focus |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **1** | `signal_peptide_dock` | **1. Signal Peptide Recognition** | `SIG` | `#FF4D00` | *"Step one: Signal Peptide Recognition. The hydrophobic amino-terminal signal peptide of a nascent secretome protein binds to the hydrophobic groove outside the SecY channel, priming the translocon for pore activation."* | Focus: SecY external groove & hydrophobic crevice |
| **2** | `seca_atp_stroke` | **2. SecA Motor Power Stroke** | `SecA` | `#9D4EDD` | *"Step two: SecA Motor Power Stroke. SecA hydrolyzes ATP, driving its two-helix finger down like a piston. This mechanical stroke inserts a twenty-amino-acid polypeptide hairpin directly into the hour-glass pore."* | Focus: SecA ATPase catalytic domain & two-helix finger |
| **3** | `pore_plug_displacement` | **3. Pore Expansion & Plug Displacement** | `PORE` | `#06D6A0` | *"Step three: Pore Expansion and Plug Displacement. The insertion pushes the isoleucine pore-ring outward and displaces the luminal plug helix, establishing a water-filled channel across the inner membrane."* | Focus: Central 6-isoleucine constriction & plug helix |
| **4** | `lateral_gate_partition` | **4. Lateral Gate Bilayer Partition** | `GATE` | `#00F5D4` | *"Step four: Lateral Gate Partition. Hydrophobic transmembrane segments of membrane proteins exit sideways through the parting lateral gate into the lipid bilayer, while hydrophilic domains pass straight through into the periplasm."* | Focus: Parted TM2b/3 and TM7/8 lateral helices |
| **5** | `processive_secretion` | **5. Continuous Processive Secretion** | `FLUX` | `#3A86FF` | *"Step five: Continuous Processive Secretion. SecA cycles ATP continuously, processively threading the polypeptide chain into the periplasmic space where the SurA chaperone waits to receive it."* | Full holoenzyme view with emerging translocating bead chain |

---

## 7. Flagship Case Study 3: 70S Polyribosome Translation Machine (`7K00` / `6PW2`)

### 1. Structural Blueprint
- **PDB ID:** `7K00` (Atomic 2.0 Å *E. coli* 70S Ribosome) + `6PW2` (Actively Translating Polysome)
- **Molecular Mass:** $\sim 2.5\,\text{MDa}$ (54 proteins + 3 rRNAs: 23S, 16S, 5S)
- **Architecture:** 50S large subunit (Peptidyl Transferase Center) clamped to 30S small subunit (Decoding Center) over an mRNA template channel.

### 2. Subunit Decomposition & Exploded Displacements
1. `Piece_Ribo_50S_LSU` (50S Large Subunit, 23S/5S rRNA + 33 proteins): `#9E2A5B` (Deep Crimson) $\to$ $\vec{v}_{\text{dissoc}} = (0, +18.0, 0)$
2. `Piece_Ribo_30S_SSU` (30S Small Subunit, 16S rRNA + 21 proteins): `#1A8594` (Vibrant Cyan) $\to$ $\vec{v}_{\text{dissoc}} = (0, -14.0, 0)$
3. `Piece_Ribo_tRNA_A` (Aminoacyl-tRNA, A-Site): `#E9C46A` (Amber Gold) $\to$ $\vec{v}_{\text{dissoc}} = (+10.0, 0, +6.0)$
4. `Piece_Ribo_tRNA_P` (Peptidyl-tRNA, P-Site): `#52B788` (Emerald Green) $\to$ $\vec{v}_{\text{dissoc}} = (0, 0, +8.0)$
5. `Piece_Ribo_tRNA_E` (Deacylated tRNA, E-Site): `#E07A5F` (Peach Coral) $\to$ $\vec{v}_{\text{dissoc}} = (-10.0, 0, +6.0)$
6. `Piece_Ribo_mRNA_Strand` (mRNA Transcript): `#BA4E3B` (Terracotta) $\to$ $\vec{v}_{\text{dissoc}} = (0, -8.0, 0)$

### 3. Biochemical I/O Circuit Definition
- **Upstream Source:** mRNA transcripts synthesized by RNA Polymerase (`6C9Y`); charged aminoacyl-tRNAs supplied by aminoacyl-tRNA synthetases.
- **Inputs:** mRNA codon triplets $+ \text{aa-tRNA}^{\text{aa}} + 2\,\text{GTP} + 2\,\text{H}_2\text{O}$ per peptide bond elongated.
- **Outputs:** Elongated nascent polypeptide chain emerging through 50S exit tunnel $+ 2\,\text{GDP} + 2\,\text{P}_i + \text{deacylated tRNA}$.
- **Downstream Consumer:** Trigger Factor (`1W26`), DnaK/GroEL chaperones, and SecYEG translocon (`3J46`).
- **Thermodynamic Currency:** GTP hydrolysis via elongation factors EF-Tu and EF-G; thermodynamic efficiency $> 99.9\%$.
- **Kinetics:** $15\text{--}20\,\text{amino acids / sec}$; translation error rate $< 10^{-4}$ (proofread by 16S decoding center).

### 4. Mandatory 5-Stage Explanatory Trace Implementation
| Step | ID | Title | Badge | Color | Spoken Script | 3D Camera Focus |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **1** | `codon_recognition` | **1. A-Site Codon Recognition** | `A-SITE` | `#E9C46A` | *"Step one: Codon Recognition. A ternary complex of EF-Tu, GTP, and aminoacyl-tRNA docks into the ribosomal A-site. Adenines 1492 and 1493 of the 16S rRNA flip out to inspect the codon-anticodon geometry."* | Target: 30S decoding center & A-site codon pocket |
| **2** | `eftu_gtp_hydrolysis` | **2. Proofreading & GTP Hydrolysis** | `EF-Tu` | `#00F5D4` | *"Step two: Proofreading and Acceptance. Correct base-pairing triggers GTP hydrolysis by EF-Tu. EF-Tu dissociates, and the aminoacyl-tRNA accommodates fully into the Peptidyl Transferase Center."* | Target: EF-Tu GTPase center & subunit interface |
| **3** | `ptc_peptidyl_transfer` | **3. Peptidyl Transfer Catalysis** | `PTC` | `#FFB703` | *"Step three: Peptidyl Transferase Catalysis. Within the 23S rRNA catalytic core, the alpha-amino group of the A-site amino acid attacks the ester carbonyl of the P-site peptidyl-tRNA, synthesizing a new peptide bond."* | Target: 23S rRNA Domain V PTC catalytic center (`#FFB703`) |
| **4** | `efg_translocation` | **4. EF-G Power Stroke Translocation** | `EF-G` | `#7209B7` | *"Step four: EF-G Translocation Stroke. Elongation Factor G binds with GTP and ratchets the 30S subunit relative to the 50S, translocating the mRNA and both tRNAs precisely by one codon triplet."* | Target: Ribosomal inter-subunit rotational hinge & EF-G |
| **5** | `esite_discharge` | **5. E-Site Discharge & Continuous Polysome** | `70S` | `#9E2A5B` | *"Step five: Deacylated tRNA Discharge. The spent tRNA is expelled from the E-site. The ribosome is ready for the next elongation cycle, processively synthesizing twenty amino acids every second."* | Grand holoenzyme view with growing nascent polypeptide exit |

---

## 8. The Mandatory Implementation Checklist

Before considering any new cellular component complete in `learn-biology` or `ecoli-vulkan-engine`, verify that all 7 requirements are satisfied:

1. **3D Mesh Decomposition (`Piece_<ID>_<Subunit>`):** Never a single merged mesh. Decomposed into functional subunits derived from authentic RCSB PDB coordinates.
2. **Exploded View Dissociation (`setExplodedProgress`):** Smooth $0.0 \to 1.0$ interpolation along natural biological vectors ($\vec{v}_{\text{dissoc}}$) with dynamic camera centroid tracking.
3. **Biochemical I/O Circuit Card (`CIRCUITS_DB`):** Explicit specification of Upstream donor, Molecular Inputs (with stoichiometry), Molecular Outputs, Downstream consumers, Thermodynamic currency ($\Delta p$, ATP, redox), and $k_{\text{cat}}$ turnover rate.
4. **Simulation HUD Controls (`iterationControls`):** Interactive sliders and toggles (e.g. $\Delta p$, substrate concentrations, speeds, antibiotic inhibitors) in the left HUD drawer.
5. **Dynamic 3D Leaders & Subpills:** 3D stationary child anchors with 2D SVG hairline leader lines, lettered badges, pulsing indicator rings, and embedded 1-click subpill targeting buttons.
6. **Inspector Drawer Pathway Card & State Toggles:** Multi-tile sequential pathway card in `#right-drawer` with interactive state triggers (e.g. Boyer Three-State cycle, codon steps).
7. **Mandatory Explanatory Trace ("How It Works" 5-Stage Tutorial Engine):**
   - Universal 5-stage causal chain defined in an exported metadata array.
   - Dedicated Explanatory Trace card in `#right-drawer` with step badges, titles, descriptions, and Start/End trace buttons.
   - Three.js camera transitions focusing on the active subunit at each step (`setExplanationStep`).
   - Closed captions presented immediately on screen.
   - Kokoro-82M neural TTS voice narration with phonetic pronunciation brackets.
   - 750ms–1000ms pedagogical observation pause between steps.
