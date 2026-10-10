# 🧬 Prokaryotic (*E. coli* K-12) Cellular Elements Catalog
**Hierarchical Architecture, Inter-Element Biological Iteration, & Simulation Controls**
**Document Version:** 1.0.0  
**Status:** Canonical Workspace Standard  
**Workspace:** `GenProjects` (`learn-biology` / `ecoli-vulkan-engine`)

---

## 📑 Table of Contents
1. [Architectural Overview & Iteration Principles](#1-architectural-overview--iteration-principles)
2. [Master Cellular Element Registry (Levels 1–6)](#2-master-cellular-element-registry-levels-16)
   - [Level 1: Whole Cell & Envelopes ($1.0\text{--}2.5\,\mu\text{m}$)](#level-1-whole-cell--envelopes-10--25-mum)
   - [Level 2: Subcellular Compartments & Supramolecular Networks ($100\text{--}600\,\text{nm}$)](#level-2-subcellular-compartments--supramolecular-networks-100--600-nm)
   - [Level 3: Macromolecular Nanomachines & Catalytic Complexes ($10\text{--}50\,\text{nm}$)](#level-3-macromolecular-nanomachines--catalytic-complexes-10--50-nm)
   - [Level 4: Active Sites, Catalytic Cores & Dynamic Gates ($2\text{--}5\,\text{nm}$)](#level-4-active-sites-catalytic-cores--dynamic-gates-2--5-nm)
   - [Level 5: Monomers, Ligands & Substrates ($0.5\text{--}1.5\,\text{nm}$)](#level-5-monomers-ligands--substrates-05--15-nm)
   - [Level 6: Atomic Resolution & Quantum Bonds ($0.1\text{--}0.3\,\text{nm}$ / $1\text{--}3\,\text{Å}$)](#level-6-atomic-resolution--quantum-bonds-01--03-nm--1--3-aa)
3. [Inter-Element Metabolic & Structural Flux Networks (Biological Iteration)](#3-inter-element-metabolic--structural-flux-networks-biological-iteration)
4. [Phased Development Roadmap & Iteration Order](#4-phased-development-roadmap--iteration-order)

---

## 1. Architectural Overview & Iteration Principles

This catalog defines the complete set of structural and functional components of *Escherichia coli* K-12 across 6 hierarchical biophysical scales.

### Three Dimensions of "Iteration" in this Architecture
1. **Inter-Element Biological Iteration (Flux Cycles & Regulatory Coupling):**
   No cellular element operates in isolation. Every component receives inputs from an upstream donor, transforms energy or chemical species, and transmits products to downstream consumers. For example:
   $$\text{Complex I} \xrightarrow{\text{electrons}} Q_8 \xrightarrow{} \text{Cyt } bo_3 \xrightarrow{\text{pumps } \text{H}^+} \Delta p \xrightarrow{\text{drives}} \text{ATP Synthase} \xrightarrow{\text{ATP}} \text{70S Ribosome} \xrightarrow{\text{nascent OMP}} \text{SecYEG} \xrightarrow{\text{chaperoned}} \text{SurA} \xrightarrow{\text{folding}} \text{BAM Complex} \xrightarrow{\text{insertion}} \text{Outer Membrane}$$
2. **Real-Time Interactive Simulation Sliders (HUD Iteration Controls):**
   Every element exposes interactive parameters in the user interface (e.g. membrane voltage, proton-motive force, turgor pressure, rotation RPM, translation elongation rate, crosslinking density, and antibiotic inhibition toggles), enabling real-time experimentation with cellular biophysics.
3. **Mandatory 5-Stage Explanatory Trace ("How It Works" Pedagogical Iteration):**
   In addition to continuous steady-state operation, every cellular element must implement a guided 5-stage causal mechanism walkthrough (`EXPLANATION_STAGES`) per [`CELLULAR_INSPECTOR_BLUEPRINT.md`](file:///c:/Users/devcd/GenProjects/CELLULAR_INSPECTOR_BLUEPRINT.md). This walks the user through the complete causal chain: Input Influx $\to$ Mechanical Coupling $\to$ Catalytic Intermediate $\to$ Turnover Power Stroke $\to$ Continuous Steady-State Dynamo.

---

## 2. Master Cellular Element Registry (Levels 1–6)

### Level 1: Whole Cell & Envelopes ($1.0\text{--}2.5\,\mu\text{m}$)

#### 1.1 `ecoli_whole_cell` — Whole Bacterium Envelope Cutaway
- **Scale:** $1.5\,\mu\text{m} \times 0.8\,\mu\text{m}$ (Volume: $\sim 0.8\,\mu\text{m}^3$)
- **PDB / Asset:** `blender/ecoli_whole_cell.blend` (`Mesh_Whole_Bacterium`)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Autonomous living prokaryote; maintains osmotic turgor pressure ($2\text{--}3\,\text{atm}$) and coordinates cell growth and binary fission.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Extracellular nutrient gradients (glucose, amino acids, $\text{O}_2$, $\text{PO}_4^{3-}$).
  - *Downstream:* Generates two identical daughter cells, metabolic acetate, $\text{CO}_2$, $\text{H}_2\text{O}$, and extracellular biofilm matrix.
- **HUD Simulation Controls:**
  - `cellLength`: $1.0\text{--}3.0\,\mu\text{m}$ (default: $1.5\,\mu\text{m}$)
  - `cellDiameter`: $0.5\text{--}1.2\,\mu\text{m}$ (default: $0.8\,\mu\text{m}$)
  - `turgorPressure`: $1.0\text{--}5.0\,\text{atm}$ (default: $3.0\,\text{atm}$)

#### 1.2 `outer_membrane` — Outer Membrane & Lipopolysaccharide (LPS) Leaflet
- **Scale:** $8\text{--}10\,\text{nm}$ bilayer
- **PDB / Asset:** `2OMF` (OmpF Porin Trimers + Lipid A/O-antigen lattice)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Asymmetric outer protective barrier. Outer leaflet composed of glycolipid Lipopolysaccharide (LPS) crosslinked by divalent cations ($\text{Mg}^{2+}$, $\text{Ca}^{2+}$); excludes hydrophobic toxins, detergents, and antibiotics.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives newly folded $\beta$-barrels from BAM Complex (`5D0O`) and LPS molecules from the LptA-G bridge (`6MIT`).
  - *Downstream:* Screens nutrients ($< 600\,\text{Da}$) into the periplasm while barring bile salts and antimicrobial peptides.
- **HUD Simulation Controls:**
  - `lpsCaShielding`: $0\text{--}100\%$ (default: $85\%$)
  - `porinDensity`: $10\text{--}100\times 10^3/\text{cell}$ (default: $65\text{k}$)
  - `polymyxinDisruption`: Toggle (cation displacement antibiotic)

#### 1.3 `periplasm_wall` — Periplasmic Peptidoglycan (Murein) Sacculus
- **Scale:** $15\text{--}20\,\text{nm}$ periplasmic depth; $2\text{--}4\,\text{nm}$ murein sheet
- **PDB / Asset:** `3VMA` (Murein glycan strands crosslinked by transpeptides)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Covalently closed macromolecular meshwork of $\beta(1\to 4)$-linked NAG-NAM glycan chains crosslinked by D-amino acid peptides. Withstands the internal turgor pressure of the cell.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives Lipid II disaccharide-pentapeptide precursors flipped from the inner membrane by MurJ.
  - *Downstream:* Crosslinked by Penicillin-Binding Proteins (PBPs); anchors outer membrane via Braun's lipoprotein (Lpp).
- **HUD Simulation Controls:**
  - `mureinCrosslink`: $20\text{--}90\%$ (default: $60\%$)
  - `periplasmViscosity`: $1.0\text{--}10.0\,\text{cP}$ (default: $3.5\,\text{cP}$)
  - `ampicillinInhibition`: Toggle (irreversible inhibition of PBP transpeptidation)

#### 1.4 `inner_membrane` — Inner Cytoplasmic Plasma Membrane
- **Scale:** $6\text{--}8\,\text{nm}$ phospholipid bilayer
- **PDB / Asset:** `6OQR` (75% PE, 20% PG, 5% Cardiolipin)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Impermeable energetic barrier that maintains the electrochemical proton motive force ($\Delta p = \Delta \Psi - 59\Delta\text{pH}$). Houses respiratory complexes, ATP synthase, and transport systems.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Protons pumped into periplasm by Complex I (`7Z7V`) and Cytochrome $bo_3$ (`6WTI`).
  - *Downstream:* Protons return to cytosol via $F_1F_0$-ATP Synthase (`6RKW`) and MotA/B flagellar stators (`6YKM`).
- **HUD Simulation Controls:**
  - `deltaPsi`: $-180\text{ to } -80\,\text{mV}$ (default: $-140\,\text{mV}$)
  - `cardiolipinPct`: $1\text{--}15\%$ (default: $5\%$)
  - `cccpUncoupling`: Toggle (protonophore uncoupler dissipating $\Delta p$)

#### 1.5 `flagella_apparatus` — Peritrichous Flagellar Propulsion Organelle
- **Scale:** $45\,\text{nm}$ basal motor $\times 10\,\mu\text{m}$ helical filament
- **PDB / Asset:** `6YKM` / `7CGO` (Molecular Basal Body + FliC Filament)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Rotary propeller organelle generating cellular locomotion ($25\text{--}35\,\mu\text{m/sec}$, $\sim 30$ body lengths/sec).
- **Inter-Element Flux Iteration:**
  - *Upstream:* Consumes periplasmic proton flux ($\sim 1,200\,\text{H}^+/\text{revolution}$) through MotA/B stators; switched by chemotaxis CheY-P signal.
  - *Downstream:* Drives cell forward in swimming runs (CCW bundle) or tumbles (CW unbundling) to reorient toward attractants.
- **HUD Simulation Controls:**
  - `motorSpeedRPM`: $0\text{--}250\,\text{Hz}$ (default: $100\,\text{Hz}$)
  - `rotationDirection`: Toggle (CCW Run vs. CW Tumble)
  - `explodedView`: $0.0\text{--}1.0$ (disassembles rotor, stators, and bushings)

#### 1.6 `pili_fimbriae` — Type 1 Adhesion Pili & Fimbriae
- **Scale:** $7\,\text{nm}$ diameter $\times 0.8\text{--}1.5\,\mu\text{m}$ rod
- **PDB / Asset:** `1QUN` (FimH lectin tip adhesin)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Surface rod assembled by chaperone-usher pathway; FimH mediates catch-bond adhesion to D-mannosylated host epithelial glycoproteins.
- **Inter-Element Flux Iteration:**
  - *Upstream:* FimA subunits chaperoned by FimC and assembled at outer membrane usher FimD.
  - *Downstream:* Facilitates colonization, biofilm initiation, and uropathogenic invasion.
- **HUD Simulation Controls:**
  - `fimbriaePerCell`: $100\text{--}500$
  - `shearStressTension`: $0\text{--}60\,\text{pN}$ (triggers catch-bond high-affinity state)

#### 1.7 `curli_fibers` — Curli Functional Amyloid Nanofibers
- **Scale:** $4\text{--}12\,\text{nm}$ diameter $\times 1\text{--}4\,\mu\text{m}$ length
- **PDB / Asset:** `6L72` (CsgA cross-$\beta$ amyloid polymer)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Self-assembling extracellular amyloid fiber providing physical tensile strength and structural integrity to the biofilm extracellular matrix.
- **Inter-Element Flux Iteration:**
  - *Upstream:* CsgA secreted through outer membrane pore CsgG nucleated by CsgB.
  - *Downstream:* Crosslinks bacteria into antibiotic-resistant pellicles and biofilms.
- **HUD Simulation Controls:**
  - `amyloidCrossBetaDensity`: $0\text{--}100\%$
  - `curvilinearMatrix`: Slider

---

### Level 2: Subcellular Compartments & Supramolecular Networks ($100\text{--}600\,\text{nm}$)

#### 2.1 `nucleoid` — Bacterial Chromatin & Nucleoid-Associated Proteins (NAPs)
- **Scale:** $400\text{--}600\,\text{nm}$ dynamic central region
- **PDB / Asset:** B-DNA loops + HU (`1P71`), Fis (`1F36`), H-NS (`1HNR`)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Organization and compaction of the 4.64 Mbp circular chromosome into $\sim 50\text{--}100$ topologically constrained supercoiled domains without a nuclear membrane.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Relaxed by DNA Topoisomerase I; supercoiled by DNA Gyrase (`6RKW`); replicated by DNA Polymerase III (`6S8N`).
  - *Downstream:* Serves as template for RNA Polymerase (`6C9Y`) transcription.
- **HUD Simulation Controls:**
  - `superhelicalDensity`: $\sigma = -0.07\text{ to } -0.03$ (default: $-0.05$)
  - `napOccupancy`: $10\text{--}100\%$ (HU/Fis compaction ratio)

#### 2.2 `plasmids` — Extrachromosomal Supercoiled Plasmids
- **Scale:** $50\text{--}200\,\text{nm}$ circular coils (3–20 kbp)
- **PDB / Asset:** `pUC19` / `pBR322` circular supercoiled models
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Autonomous replicating circular DNA units conferring selective advantages such as $\beta$-lactamase antibiotic resistance and heavy-metal detoxification.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Replicated by host DNA Pol III; partitioned during cell division.
  - *Downstream:* Transcribes $\beta$-lactamase (`AmpR`), degrading penicillin/ampicillin in the periplasm.
- **HUD Simulation Controls:**
  - `plasmidCopyNumber`: $1\text{--}100\,\text{copies/cell}$ (default: $20$)

#### 2.3 `polysomes` — Polysome Multi-Ribosome Translation Loops
- **Scale:** $100\text{--}300\,\text{nm}$ spiraling supramolecular clusters
- **PDB / Asset:** Multi-70S tandem array on continuous mRNA
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Cellular mRNA translation factory; enables multiple ribosomes to read a single transcript concurrently, maximizing protein synthesis throughput.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives 5' capped/initiating mRNA from RNA Polymerase (`6C9Y`).
  - *Downstream:* Releases completed folded protein chains into the cytosol or SecYEG translocon.
- **HUD Simulation Controls:**
  - `polysomeDensity`: $2\text{--}10\,\text{ribosomes/mRNA}$
  - `elongationKinetics`: $1.0\text{--}25.0\,\text{aa/sec}$ (default: $15.0\,\text{aa/sec}$)

#### 2.4 `chaperones` — Chaperone Foldosome Networks (DnaK-DnaJ-GrpE)
- **Scale:** $80\text{--}150\,\text{nm}$ cytosolic clusters
- **PDB / Asset:** `2KHO` (DnaK) / `1XBL` (DnaJ) / `1DKG` (GrpE)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** HSP70-family molecular triage machine; binds exposed hydrophobic segments on nascent or heat-denatured polypeptides, utilizing ATP to enforce correct tertiary folding.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Intercepts hydrophobic polypeptides emerging from the 70S ribosome exit tunnel.
  - *Downstream:* Delivers recalcitrant substrates to GroEL/GroES (`1AON`) or releases functional active enzymes.
- **HUD Simulation Controls:**
  - `heatShockTemp`: $30\text{--}45^\circ\text{C}$ (triggers $\sigma^{32}$ chaperone induction)
  - `atpConsumptionRate`: $0\text{--}50\,\text{ATP/min}$

#### 2.5 `cytoskeleton_mreb` — MreB Actin-Homolog Cytoskeletal Rails
- **Scale:** $200\text{--}400\,\text{nm}$ sub-membrane helical filaments
- **PDB / Asset:** `1JCG` (MreB ATP-dependent filaments)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Prokaryotic actin homolog; forms antiparallel double filaments beneath the inner membrane that move processively, organizing cell wall synthesis enzymes to preserve rod morphology.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Powered by ATP hydrolysis; binds RodZ and inner membrane phospholipids.
  - *Downstream:* Couples to RodA/PBP2 transpeptidases to coordinate lateral murein wall elongation.
- **HUD Simulation Controls:**
  - `mrebFilamentVelocity`: $10\text{--}40\,\text{nm/sec}$
  - `a22Depolymerization`: Toggle (A22 chemical inhibitor causing spherical rounding)

#### 2.6 `divisome_ftsz` — Divisome Contractile Z-Ring (FtsZ)
- **Scale:** $800\,\text{nm}$ circumference ring at midcell
- **PDB / Asset:** `1FSZ` (FtsZ GTPase protofilaments)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Prokaryotic tubulin homolog; polymerizes into a dynamic contractile ring at the future division plane, recruiting $\sim 20$ proteins to synthesize the constricting division septum.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Positioned precisely by the MinCDE spatial oscillation system and SlmA nucleoid occlusion.
  - *Downstream:* Recruits FtsI (PBP3) and FtsW to build the cross-septal peptidoglycan wall.
- **HUD Simulation Controls:**
  - `septumConstriction`: $0\text{--}100\%$
  - `gtpTurnoverRate`: $5\text{--}20\,\text{GTP/min}$

#### 2.7 `rna_degradosome` — Membrane-Associated RNA Degradosome
- **Scale:** $60\text{--}120\,\text{nm}$ inner-membrane scaffolded complex
- **PDB / Asset:** RNase E (`2VMK`), PNPase (`3GCM`), RhlB (`1TIJ`), Enolase (`2FYM`)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Multi-enzyme catalytic degradation machine tethered to the inner membrane; rapidly degrades spent mRNAs ($t_{1/2} \approx 2\text{--}5\,\text{min}$) to permit dynamic gene expression adaptation.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Endonucleolytically cleaves single-stranded, AU-rich mRNA segments released from ribosomes.
  - *Downstream:* Generates ribonucleotide monophosphates ($\text{NMP}$) recycled by nucleoside kinases.
- **HUD Simulation Controls:**
  - `mrnaDecayRate`: $0.5\text{--}10\,\text{min}^{-1}$

#### 2.8 `chemosensory_mcp` — Chemosensory Polar Array (MCP-CheA-CheW)
- **Scale:** $200\text{--}400\,\text{nm}$ hexagonal lattice at cell poles
- **PDB / Asset:** `3JA6` (Tsr / Tar trimers of dimers + CheA histidine kinase + CheW)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Giant cooperative signaling antenna; binds extracellular attractants (aspartate, serine) and amplifies conformational signals to modulate CheA autophosphorylation.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Extracellular nutrient gradients screen through porins and bind MCP periplasmic domains.
  - *Downstream:* Phosphorylates CheY $\to$ CheY-P, which diffuses through cytosol to bind the flagellar motor switch (`FliG`), reversing motor rotation to CW tumble.
- **HUD Simulation Controls:**
  - `attractantConcentration`: $0\text{--}100\,\mu\text{M}$ L-Aspartate
  - `cheyPhosphorylationRate`: $0\text{--}100\,\text{s}^{-1}$

---

### Level 3: Macromolecular Nanomachines & Catalytic Complexes ($10\text{--}50\,\text{nm}$)

#### 3.1 `ribosome_70s` — 70S Translating Ribosome Holoenzyme
- **Scale:** $25\,\text{nm}$ diameter (Molecular mass: $2.5\,\text{MDa}$)
- **PDB / Asset:** `7K00` / `6X9Q` (50S Large Subunit + 30S Small Subunit)
- **Status:** 🟢 **Built & Fully Interactive**
- **Biological Role:** Universal ribonucleoprotein enzyme translating genetic codons into functional polypeptides at 15–20 aa/sec with $< 10^{-4}$ error frequency.
- **Subunit Decomposition:**
  - `Piece_50S_rRNA` (`#7209B7`, Royal Violet): 23S (2904 nt) + 5S (120 nt) rRNA catalytic scaffold.
  - `Piece_50S_Proteins` (`#2D6A4F`, Forest Jade): 36 ribosomal proteins (L1–L36).
  - `Piece_30S_rRNA` (`#00F5D4`, Luminous Cyan): 16S rRNA (1542 nt) decoding core.
  - `Piece_30S_Proteins` (`#9A9E32`, Olive Gold): 21 small subunit proteins (S1–S21).
  - `Piece_tRNA_A_Site` (`#E9C46A`, Golden Amber): Aminoacyl-tRNA substrate (Chain Y).
  - `Piece_tRNA_P_Site` (`#52B788`, Emerald Green): Peptidyl-tRNA donor (Chain Z).
  - `Piece_tRNA_E_Site` (`#E07A5F`, Peach Coral): Deacylated exit tRNA (Chain 5).
  - `Piece_mRNA` (`#BA4E3B`, Coral Red): 5' to 3' genetic message.
  - `Piece_Nascent_Peptide` (`#FFE66D`, Luminous Gold): Emerging polypeptide chain.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Fed mRNA from RNA Polymerase (`6C9Y`); receives aminoacylated tRNAs charged by Aminoacyl-tRNA Synthetases; powered by EF-Tu and EF-G GTPases.
  - *Downstream:* Nascent peptide feeds into Trigger Factor chaperone or the SecYEG translocon (`3J46`).
- **HUD Simulation Controls:**
  - `translationSpeed`: $0.2\times\text{ to } 2.5\times$ ($3\text{--}35\,\text{aa/sec}$)
  - `explodedAssembly`: $0.0\text{--}1.0$ (dissociates 50S, 30S, and tRNAs)
  - `codonStep`: Single-frame translocation (+1 codon advancement)

#### 3.2 `flagellar_motor` — Flagellar Basal Body Rotary Motor
- **Scale:** $45\,\text{nm}$ diameter $\times 51\,\text{nm}$ height (Molecular mass: $\sim 11\,\text{MDa}$)
- **PDB / Asset:** `6YKM` / `7CGO` (C-ring, MS-ring, Stators, Rod, Bushings, Hook)
- **Status:** 🟢 **Built & Fully Interactive**
- **Biological Role:** High-torque proton-driven nanomotor rotating at up to 300 Hz ($18,000\,\text{rpm}$), outputting $1300\,\text{pN}\cdot\text{nm}$ torque.
- **Subunit Decomposition:**
  - `Piece_Motor_C_Ring` (`#F4A261`, Coral Bronze): FliG/M/N switch complex.
  - `Piece_Motor_MS_Ring` (`#00F5D4`, Luminous Cyan): FliF membrane anchor.
  - `Piece_Motor_Stators` (`#1D3557`, Deep Navy): MotA/B proton channels ($5:2$ stoichiometry).
  - `Piece_Motor_Axial_Rod` (`#FFB703`, Golden Rod): FlgB/C/F/G drive shaft.
  - `Piece_Motor_P_Ring` (`#D4A373`, Warm Ochre): FlgI peptidoglycan bushing.
  - `Piece_Motor_L_Ring` (`#0077B6`, Marine Blue): FlgH outer membrane bushing.
  - `Piece_Motor_Hook` (`#2EC4B6`, Emerald): FlgE universal joint.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Powered by periplasmic proton motive force ($\Delta p$); switched by chemotaxis CheY-P binding to FliG.
  - *Downstream:* Transmits rotational torque through universal hook to spin the flagellar filament, propelling the bacterium.
- **HUD Simulation Controls:**
  - `motorSpeed`: $0\text{--}250\,\text{Hz}$
  - `direction`: Run (CCW) vs. Tumble (CW)
  - `explodedView`: $0.0\text{--}1.0$

#### 3.3 `atp_synthase` — $F_1F_0$-ATP Synthase Rotary Dynamo
- **Scale:** $10\,\text{nm}$ diameter $\times 12\,\text{nm}$ height (Molecular mass: $\sim 540\,\text{kDa}$)
- **PDB / Asset:** `6RKW` ($F_1$ $\alpha_3\beta_3\gamma\delta\epsilon$ + $F_0$ $a b_2 c_{10}$)
- **Status:** 🟢 **Built & Fully Interactive**
- **Biological Role:** Primary bioenergetic generator; couples transmembrane proton flow through the $c_{10}$-ring to drive mechanical rotation of the central $\gamma$-axle, synthesizing ATP from $\text{ADP} + \text{P}_i$.
- **Subunit Decomposition:**
  - `Piece_ATP_F1_Alpha` (`#9D4EDD`, Lilac): 3x $\alpha$ structural scaffold subunits.
  - `Piece_ATP_F1_Beta` (`#FFB703`, Golden Amber): 3x $\beta$ catalytic nucleotide pockets.
  - `Piece_ATP_Central_Rotor` (`#06D6A0`, Luminous Jade): $\gamma, \epsilon$ rotating camshaft.
  - `Piece_ATP_Fo_C_Ring` (`#E63946`, Carmine Red): $c_{10}$ transmembrane proton rotor.
  - `Piece_ATP_Stator_Bracket` (`#457B9D`, Slate Blue): $a, b_2, \delta$ torque-resisting brace.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Driven by $\Delta p$ generated by Respiratory Complex I (`7Z7V`) and Cytochrome $bo_3$ (`6WTI`).
  - *Downstream:* Supplies ATP pool ($[\text{ATP}] \sim 3\text{--}5\,\text{mM}$) consumed by 70S ribosomes, chaperones, active transporters, and DNA replisome.
- **HUD Simulation Controls:**
  - `protonGradientDeltaP`: $-180\text{ to } -60\,\text{mV}$
  - `adpConcentration`: $0.1\text{--}5.0\,\text{mM}$
  - `oligomycinBafilomycin`: Toggle (selective $F_0$ proton pore blocker)

#### 3.4 `respiratory_complex_i` — Respiratory Complex I (NADH:Ubiquinone Oxidoreductase)
- **Scale:** $15\,\text{nm}$ hydrophilic arm $\times 22\,\text{nm}$ membrane arm (Molecular mass: $\sim 530\,\text{kDa}$)
- **PDB / Asset:** `7Z7V` (14 conserved core subunits: NuoA–NuoN)
- **Status:** 🟢 **Built & Fully Interactive**
- **Biological Role:** Entry enzyme of the bacterial respiratory chain; oxidizes $\text{NADH} \to \text{NAD}^+$, shuttles electrons down an $8\times \text{Fe-S}$ wire to reduce ubiquinone ($Q_8 \to QH_2$), pumping $4\text{H}^+$ across the inner membrane.
- **Subunit Decomposition:**
  - `Piece_ComplexI_Hydrophilic_NuoEFG` (`#1F77B4`, Cobalt Blue): NuoE, NuoF, NuoG dehydrogenase subcomplex with NADH binding site.
  - `Piece_ComplexI_Connecting_NuoBCI` (`#4361EE`, Royal Indigo): NuoB, NuoCD, NuoI connecting electron relay.
  - `Piece_ComplexI_Transmembrane_NuoAHJK` (`#06D6A0`, Seafoam Green): NuoA, NuoH, NuoJ, NuoK quinone-proximal proton translocation channels.
  - `Piece_ComplexI_Antiporter_NuoNM` (`#2EC4B6`, Deep Jade): NuoN, NuoM distal antiporter-like proton pumps.
  - `Piece_ComplexI_Lateral_Piston_NuoL` (`#FFB703`, Golden Amber): NuoL extreme distal pump with long lateral coupling helix (HL transmission rod).
  - `Piece_ComplexI_FeS_Clusters` (`#FFB703`, Luminous Pyrite): 8 cubane Fe-S clusters forming the 90 Å quantum tunneling wire.
  - `Piece_ComplexI_FMN` (`#FF006E`, Hot Magenta): Primary electron acceptor flavin mononucleotide.
  - `Piece_ComplexI_NADH_Substrate` (`#4CC9F0`, Luminous Cyan): Docked NADH substrate in the NuoF catalytic pocket.
  - `Piece_ComplexI_Ubiquinone` (`#E76F51`, Terracotta Red): Coenzyme $Q_8$ electron acceptor in the NuoB/D reduction cleft.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives NADH from Pyruvate Dehydrogenase (`PDH`) and the TCA cycle.
  - *Downstream:* Reduces ubiquinone to ubiquinol ($QH_2$), which diffuses to Cytochrome $bo_3$ (`6WTI`); pumped protons feed ATP Synthase and Flagellar Motor.
- **HUD Simulation Controls:**
  - `nadhConcentration`: $0.1\text{--}2.0\,\text{mM}$
  - `rotenoneInhibition`: Toggle (ubiquinone binding site blocker)
  - `explodedAssembly`: $0.0\text{--}1.0$ (dissociates hydrophilic arm and lateral piston)
  - `traceStage`: 6-Stage Explanatory Trace walkthrough with dynamic camera dollies & closed captions

#### 3.5 `secyeg_translocon` — SecYEG Protein Translocation Channel & SecA ATPase Motor
- **Scale:** $8.5\,\text{nm}$ width $\times 11\,\text{nm}$ depth, holoenzyme mass ~280 kDa
- **PDB / Asset:** `6ITC` (3.45 Å active cryo-EM structure with engaged substrate) + `3J46` (E. coli SecG aligned via SVD Kabsch)
- **Status:** 🟢 **Built & Fully Interactive**
- **Biological Role:** Universal protein translocation pore; conducts unfolded secretome proteins across the inner membrane into the periplasm or opens its dynamic lateral gate to integrate transmembrane helices into the phospholipid bilayer. Driven by the cytosolic SecA ATPase motor.
- **Subunit Decomposition:**
  - `Piece_SecYEG_SecY` (`#3A86FF`, Royal Blue): 10-helix hourglass pore core with 6-isoleucine hydrophobic gasket ring and lumenal plug.
  - `Piece_SecYEG_Lateral_Gate` (`#00F5D4`, Luminous Cyan): Dynamic TM2b/3 (res 65–115) & TM7/8 (res 265–325) parting gate opening up to 1.4 nm directly into the lipid bilayer.
  - `Piece_SecYEG_SecE` (`#FFB703`, Golden Amber): Tilted V-shaped amphipathic clamp helix bracing the two SecY halves.
  - `Piece_SecYEG_SecG` (`#06D6A0`, Luminous Jade): Inverted topology escort subunit accelerating turnover under low PMF.
  - `Piece_SecYEG_SecA_Motor` (`#9D4EDD`, Lilac Purple): Cytosolic 204 kDa ATPase motor with two-helix finger oscillating in 20-aa power strokes.
  - `Piece_SecYEG_Translocating_Preprotein` (`#FFE066`, Luminous Gold): Hairpin polypeptide substrate with animated processive bead stream threading across the pore.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives precursor proteins bearing N-terminal signal peptides directly from the 70S ribosome (`7K00`) or SecB chaperone.
  - *Downstream:* Discharges periplasmic proteins to SurA (`1M5Y`) / Skp / DegP chaperones for handover to the BAM Complex (`5D0O`), or integrates membrane $\alpha$-helices into the bilayer.
- **HUD Simulation Controls:**
  - `atpRate`: Slider controlling SecA turnover flux (basal 10 aa/s to maximal 110 aa/s; nominal 45 aa/s).
  - `isAzideInhibited`: Toggle for Sodium Azide ($\text{NaN}_3$) metabolic inhibition halting SecA ATPase motor.
  - `lateralGateOpening`: Slider opening the lateral seam $0\text{--}100\%$ (up to 1.4 nm parting).
  - `explodedProgress`: Dissociates SecA motor ($+Y$ into cytosol), SecE ($-X$), SecG ($+X$), and Lateral Gate ($-Z$ into bilayer).
  - `5-Stage Explanatory Trace`: Signal peptide docking $\to$ SecA power stroke $\to$ pore expansion $\to$ lateral gate partition $\to$ processive secretion.

#### 3.6 `bam_complex` — BAM Outer Membrane Protein Insertase Complex
- **Scale:** $11\,\text{nm}$ diameter $\times 15\,\text{nm}$ depth (Holoenzyme mass: $\sim 200\,\text{kDa}$)
- **PDB / Asset:** `5D0O` (2.90 Å crystal structure of complete *E. coli* BAM complex: BamA, BamB, BamC, BamD, BamE, plus inserting $\beta$-hairpin substrate)
- **Status:** 🟢 **Built & Fully Interactive**
- **Biological Role:** Essential insertase machine; catalyzes the insertion and folding of hydrophobic $\beta$-barrel Outer Membrane Proteins (e.g. OmpF, OmpA, LptD) into the asymmetric outer membrane without ATP or proton motive force, driven entirely by exergonic folding free energy ($\Delta G_{\text{folding}} < 0$).
- **Subunit Decomposition:**
  - `Piece_BAM_BamA_Barrel` (`#0077B6`, Deep Marine): 16-stranded transmembrane $\beta$-barrel strands 1–15 (res 424–785).
  - `Piece_BAM_Lateral_Seam` (`#00F5D4`, Luminous Cyan): Dynamic strand $\beta 16$ (res 786–810) unpairing from $\beta 1$ outwards into lipid bilayer by up to 1.6 nm.
  - `Piece_BAM_BamA_POTRA` (`#F77F00`, Warm Amber): 5 periplasmic POTRA chaperone-binding domains (res 24–423).
  - `Piece_BAM_BamB` (`#2EC4B6`, Luminous Teal): 8-bladed $\beta$-propeller lipoprotein stabilizing POTRA 2–3.
  - `Piece_BAM_BamC` (`#9D4EDD`, Lilac Purple): Periplasmic lipoprotein with helix-grip motifs.
  - `Piece_BAM_BamD` (`#E76F51`, Warm Terracotta): 5 TPR-motif essential clamp bridging POTRA to barrel base.
  - `Piece_BAM_BamE` (`#06D6A0`, Luminous Jade): Smallest lipoprotein latching BamD to inner leaflet.
  - `Piece_BAM_Client_OMP` (`#FFE066`, Luminous Gold): Nascent inserting $\beta$-hairpin substrate loop with animated moving amino acid beads.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives unfolded outer membrane protein clients from SurA (`1M5Y`), Skp (`1SG2`), or DegP (`1KY9`) post-SecYEG translocation.
  - *Downstream:* Inserts folded OmpF/OmpC porins and trans-envelope transport bridges (LptD `4Q35`) directly into the outer membrane.
- **HUD Simulation Controls:**
  - `isPaused`: Toggle pausing or resuming substrate polypeptide insertion.
  - `insertionSpeed`: Flux speed slider ($0.1\times\text{ to } 3.0\times$; nominal $1.2\text{ porins/min}$).
  - `lateralSeamOpening`: Seam unzipping slider ($0\text{--}100\%$, opening up to 1.6 nm gap into the lipid bilayer).
  - `explodedProgress`: Dissociates BamB ($-X$), POTRA ($-Y$), BamCDE ($+X$), and Lateral Seam ($-Z$) along natural vectors ($0.0\text{--}1.0$).
  - `5-Stage Explanatory Trace`: Chaperone client handover $\to$ POTRA conformational gating $\to$ lateral seam destabilization $\to$ $\beta$-hairpin membrane insertion $\to$ barrel budding & OM integration.

#### 3.7 `lpta_g_bridge` — LptA-G Lipopolysaccharide Trans-Envelope Export Bridge
- **Scale:** $15\,\text{nm}$ span across inner membrane, periplasm, and outer membrane ($40\,\text{nm}$)
- **PDB / Asset:** `6MIT` (LptB2FGC inner membrane ABC transporter + LptA periplasmic bridge + LptDE outer membrane translocon)
- **Status:** 🟡 **High-Priority Pending Implementation**
- **Biological Role:** Molecular bridge spanning the entire cell envelope; uses ATP in the cytoplasm to propel highly hydrophobic Lipid A molecules across a continuous periplasmic groove into the outer membrane surface.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Extracts newly synthesized Lipid A-core from the inner membrane periplasmic leaflet using ATP.
  - *Downstream:* Deposits LPS onto the outer leaflet of the outer membrane to maintain the protective barrier.
- **HUD Simulation Controls:**
  - `lpsExportFlux`: $0\text{--}1,000\,\text{LPS/sec}$
  - `mureinBridgeCrossing`: Toggle

#### 3.8 `rna_polymerase` — RNA Polymerase Transcription Machine
- **Scale:** $14\,\text{nm} \times 16\,\text{nm}$ (Molecular mass: $\sim 400\,\text{kDa}$)
- **PDB / Asset:** `6C9Y` ($\alpha_2\beta\beta'\omega + \sigma^{70}$ Holoenzyme)
- **Status:** 🟡 **High-Priority Pending Implementation**
- **Biological Role:** DNA-dependent transcription machine; unwinds the double helix, recognizes promoters via $\sigma$-factors, and synthesizes mRNA, tRNA, and rRNA at 40–80 nt/sec.
- **Subunit Decomposition:**
  - `Piece_RNAP_Beta` (`#3A86FF`, Royal Blue): Catalytic claw holding active $\text{Mg}^{2+}$ center.
  - `Piece_RNAP_BetaPrime` (`#9D4EDD`, Purple): Flexible clamp jaw and bridge helix.
  - `Piece_RNAP_Alpha_Dimer` (`#06D6A0`, Jade): Scaffold domains interacting with transcription factors.
  - `Piece_RNAP_Sigma70` (`#FFB703`, Gold): Promoter specificity factor recognizing $-10$ and $-35$ consensus boxes.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Reads chromosomal template DNA organized by the nucleoid; consumes NTPs ($\text{ATP}, \text{UTP}, \text{GTP}, \text{CTP}$).
  - *Downstream:* Generates nascent mRNA transcript that immediately docks into lead 70S ribosomes (forming the Expressome complex, `6X9Q`).
- **HUD Simulation Controls:**
  - `transcriptionRate`: $10\text{--}100\,\text{nt/sec}$
  - `rifampicinInhibition`: Toggle (antibiotic blocking nascent RNA path)

#### 3.9 `dna_polymerase_iii` — DNA Polymerase III Holoenzyme Replisome
- **Scale:** $20\,\text{nm} \times 25\,\text{nm}$ (Molecular mass: $\sim 1\,\text{MDa}$)
- **PDB / Asset:** `6S8N` (DnaE polymerase, DnaQ proofreader, $\beta_2$-sliding clamp, DnaB helicase)
- **Status:** 🟡 **High-Priority Pending Implementation**
- **Biological Role:** High-speed, high-fidelity replication machine; duplicates the 4.64 Mbp circular chromosome bidirectionally at $1,000\,\text{bp/sec}$ with an error rate $< 10^{-8}$.
- **Subunit Decomposition:**
  - `Piece_PolIII_Alpha` (`#3A86FF`, Royal Blue): DnaE catalytic polymerization palm.
  - `Piece_PolIII_Epsilon` (`#E63946`, Carmine Red): DnaQ $3'\to 5'$ exonuclease proofreader.
  - `Piece_PolIII_Beta_Clamp` (`#FFB703`, Golden Ring): $\beta_2$ homodimeric toroid encircling double-stranded DNA.
  - `Piece_DnaB_Helicase` (`#06D6A0`, Jade Hexamer): Hexameric unwinding ring burning ATP to split the replication fork.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Unwinds supercoiled chromosomal DNA relaxed by DNA Gyrase (`6RKW`); consumes dNTPs ($\text{dATP}, \text{dTTP}, \text{dGTP}, \text{dCTP}$).
  - *Downstream:* Generates leading and lagging (Okazaki fragment) daughter DNA strands for cell division.
- **HUD Simulation Controls:**
  - `replicationSpeed`: $100\text{--}1,200\,\text{bp/sec}$
  - `proofreadingFidelity`: Toggle ($3'\to 5'$ exonuclease on/off)

#### 3.10 `dna_gyrase` — DNA Gyrase Topoisomerase II
- **Scale:** $12\,\text{nm} \times 14\,\text{nm}$
- **PDB / Asset:** `6RKW` / `1AB4` ($A_2B_2$ heterotetramer)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Only topoisomerase capable of introducing negative supercoils into DNA; creates a transient double-strand break, passes an intact DNA duplex through the gate, and reseals the break consuming 2 ATP.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Resolves positive supercoiling stress generated ahead of elongating Replisomes (`6S8N`) and RNA Polymerases (`6C9Y`).
  - *Downstream:* Maintains chromosomal topological underwinding ($\sigma \approx -0.05$) essential for promoter melting.
- **HUD Simulation Controls:**
  - `supercoilDeltaL`: $-1\text{ to } -10\,\text{turns/cycle}$
  - `ciprofloxacinInhibition`: Toggle (stabilizes covalent cleaved complex, causing lethal DNA fragmentation)

#### 3.11 `groel_groes` — GroEL/GroES Chaperonin Nanocage
- **Scale:** $14\,\text{nm}$ diameter $\times 18\,\text{nm}$ height
- **PDB / Asset:** `1AON` (Tetradecameric GroEL $7+7$ double barrel + Heptameric GroES dome lid)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Cylindrical protein folding nano-chamber; sequesters misfolded or aggregation-prone polypeptides inside a hydrophilic cavity, giving them an isolated Anfinsen folding environment powered by ATP.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives kinetically trapped misfolded proteins from DnaK/DnaJ or the ribosome.
  - *Downstream:* Releases natively folded, functional enzymes into the cytosol.
- **HUD Simulation Controls:**
  - `groesCapBinding`: Toggle (Open vs. Capped bullet state)
  - `atpHydrolysisCycle`: Slider

#### 3.12 `pyruvate_dehydrogenase` — Pyruvate Dehydrogenase Multi-Enzyme Megacomplex (PDH)
- **Scale:** $30\,\text{nm} \times 30\,\text{nm}$ cube (Molecular mass: $4.6\,\text{MDa}$, 60 subunits)
- **PDB / Asset:** E1 decarboxylase (`1L8A`), E2 dihydrolipoyl transacetylase core (`1EAA`), E3 flavoprotein dehydrogenase (`1EBD`)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Central metabolic gateway linking glycolysis to the citric acid cycle; performs oxidative decarboxylation of pyruvate into Acetyl-CoA with swinging $14\,\text{Å}$ lipoyl domain arms.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives pyruvate from glycolysis; consumes $\text{NAD}^+$ and $\text{CoA-SH}$.
  - *Downstream:* Delivers Acetyl-CoA to the Citric Acid Cycle and generates $\text{NADH}$ powering Respiratory Complex I (`7Z7V`).
- **HUD Simulation Controls:**
  - `pyruvateSubstrateFlux`: $0\text{--}500\,\mu\text{M/sec}$
  - `nadhFeedbackInhibition`: Slider

#### 3.13 `cytochrome_bo3` — Cytochrome $bo_3$ Ubiquinol Terminal Oxidase
- **Scale:** $8\,\text{nm} \times 10\,\text{nm}$
- **PDB / Asset:** `6WTI` (4 subunits, Heme $b$, Heme $o_3$, Copper $\text{Cu}_B$)
- **Status:** 🟡 **Pending Specification**
- **Biological Role:** Terminal oxidase in aerobic respiration; oxidizes ubiquinol ($QH_2 \to Q_8$), reduces molecular oxygen to water ($\text{O}_2 + 4\text{H}^+ \to 2\text{H}_2\text{O}$), and pumps $2\text{H}^+$ into the periplasm.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Receives ubiquinol ($QH_2$) from Complex I (`7Z7V`) and dissolved $\text{O}_2$.
  - *Downstream:* Supplies periplasmic proton pool driving ATP Synthase and Flagellar Motility.
- **HUD Simulation Controls:**
  - `dissolvedOxygenLevel`: $0\text{--}100\%$
  - `cyanideInhibition`: Toggle

#### 3.14 `sura_chaperone` — SurA Periplasmic Chaperone
- **Scale:** $5\,\text{nm} \times 9\,\text{nm}$ (Molecular mass: $47\,\text{kDa}$)
- **PDB / Asset:** `1M5Y` (Core domain + 2 Parvulin-like PPIase domains)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Primary periplasmic escort; binds unfolded $\beta$-barrel outer membrane proteins emerging from SecYEG, preventing aggregation and transporting them to BAM.
- **Subunit Decomposition:**
  - `Piece_SurA_Core` (`#2EC4B6`, Teal): N- and C-terminal chaperone cradle.
  - `Piece_SurA_PPIase1` (`#F77F00`, Warm Amber): First peptidyl-prolyl cis-trans isomerase.
  - `Piece_SurA_PPIase2` (`#9D4EDD`, Violet): Second regulatory PPIase domain.
  - `Piece_SurA_Pocket_Tyr228` (`#FFB703`, Gold): Aromatic peptide docking cleft.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Accepts unfolded polypeptides from SecYEG (`3J46`).
  - *Downstream:* Delivers clients directly to BamA POTRA domains of the BAM Complex (`5D0O`).
- **HUD Simulation Controls:**
  - `suraClientAffinity`: $0.1\text{--}10\,\mu\text{M}$
  - `conformationFlexibility`: Slider

#### 3.15 `male_transporter` — MalE (Maltose-Binding Protein, MBP) Solute Carrier Scout
- **Scale:** $4\,\text{nm} \times 7\,\text{nm}$ (Molecular mass: $40\,\text{kDa}$)
- **PDB / Asset:** `1OMP` (Two symmetrical $\alpha/\beta$ globular lobes)
- **Status:** 🟢 **Built & Active**
- **Biological Role:** Periplasmic nutrient sensor; undergoes a dramatic $35^\circ$ hinge-bending closure upon binding maltose/maltodextrins, delivering the sugar to the MalFGK2 ABC inner membrane importer.
- **Inter-Element Flux Iteration:**
  - *Upstream:* Scavenges maltose entering periplasm through LamB / OmpF porins.
  - *Downstream:* Docks to MalFGK2 inner membrane transporter to import sugar into cytosol consuming 2 ATP.
- **HUD Simulation Controls:**
  - `maltoseConcentration`: $0\text{--}50\,\mu\text{M}$
  - `hingeClosureState`: Open ($0\%$) to Closed ($100\%$)

---

### Level 4: Active Sites, Catalytic Cores & Dynamic Gates ($2\text{--}5\,\text{nm}$)

| ID | Parent Machine | PDB Coordinates | Catalytic Mechanism & Residues | Status |
| :--- | :--- | :--- | :--- | :--- |
| `ptc_active_site` | `ribosome_70s` | `7K00` (A2451, G2447, C2063) | Ribozyme peptidyl transferase; entropic orientation of $\alpha$-amino nucleophile. | 🟢 **Built** |
| `decoding_center` | `ribosome_70s` | `7K00` (16S A1492, A1493, G530)| Flips adenine bases into minor groove of codon-anticodon duplex to verify geometry. | 🟢 **Built** |
| `exit_tunnel` | `ribosome_70s` | `7K00` (L4, L22 constriction) | $10\,\text{nm}$ aqueous Teflon-like exit passage; guides nascent peptide to cytosol. | 🟢 **Built** |
| `atp_beta_pocket` | `atp_synthase` | `6RKW` (Thr156, Lys162, Arg182) | Boyer binding change: Open ($O$) $\to$ Loose ($L$) $\to$ Tight ($T$) transition. | 🟡 *Pending* |
| `secy_lateral_gate`| `secyeg_translocon` | `3J46` (TM2b/3 & TM7/8 helices) | Hydrophobic gate parting to partition transmembrane helices into bilayer. | 🟡 *Pending* |
| `bam_lateral_seam` | `bam_complex` | `5D0O` (BamA $\beta1$ and $\beta16$ seam) | Weakened hydrogen-bond seam opening to nucleate client $\beta$-hairpins into OM. | 🟡 *Pending* |
| `flagellar_torque_switch`| `flagellar_motor` | `7CGO` (FliG $CW \leftrightarrow CCW$) | CheY-P binding domain conformational flip reversing stator contact angle. | 🟢 **Built** |
| `complex_i_fe_s` | `respiratory_complex_i` | `7Z7V` (N1a $\to$ N2 tunnel) | $10\,\text{nm}$ quantum electron tunneling pathway across 8 cubane Fe-S clusters. | 🟢 **Built** |
| `cytochrome_heme_copper`| `cytochrome_bo3` | `6WTI` (Heme $o_3 - \text{Cu}_B$) | Binuclear center executing $4e^- + 4\text{H}^+ + \text{O}_2 \to 2\text{H}_2\text{O}$ reduction without ROS release. | 🟡 *Pending* |
| `pol_catalytic_palm`| `dna_polymerase_iii` | `6S8N` (Asp403, Asp405 + $2\text{Mg}^{2+}$)| Two-metal-ion catalyzed nucleophilic attack of $3'\text{-OH}$ on dNTP $\alpha$-phosphate. | 🟡 *Pending* |
| `rnap_catalytic_claw`| `rna_polymerase` | `6C9Y` (Asp460, Asp462, Asp464) | Active center $\text{Mg}^{2+}$ coordinating incoming rNTP addition. | 🟡 *Pending* |
| `gyrase_tyr122_core`| `dna_gyrase` | `1AB4` (GyrA Tyr122) | Transient covalent 5'-phosphotyrosyl linkage cleavage and strand passage gate. | 🟡 *Pending* |
| `sura_binding_pocket_tyr228`| `sura_chaperone` | `1M5Y` (Tyr228, Trp274 aromatic cleft)| Aromatic $\pi$-$\pi$ stacking coordination pocket recognizing hydrophobic client motifs. | 🟢 **Built** |

---

### Level 5: Monomers, Ligands & Substrates ($0.5\text{--}1.5\,\text{nm}$)

| ID | Chemical Name | Formula / PDB HetID | Biological Role & Cellular Concentration | Status |
| :--- | :--- | :--- | :--- | :--- |
| `aminoacyl_trna_val` | Val-tRNA$^{\text{Val}}$ | 76 nt + L-Valine | A-site substrate arriving via EF-Tu$\cdot$GTP complex ($\sim 5\,\mu\text{M}$). | 🟢 **Built** |
| `peptidyl_trna_fmet` | fMet-tRNA$_{\text{f}}^{\text{Met}}$ | 77 nt + Formylmethionine | P-site peptidyl donor maintaining elongation reading frame. | 🟢 **Built** |
| `atp_molecule` | Adenosine 5'-triphosphate | $\text{C}_{10}\text{H}_{16}\text{N}_5\text{O}_{13}\text{P}_3$ (`ATP`)| Universal energy currency of the cell ($[\text{ATP}] \sim 3\text{--}5\,\text{mM}$). | 🟢 **Built** |
| `nadh_coenzyme` | Nicotinamide adenine dinucleotide | $\text{C}_{21}\text{H}_{27}\text{N}_7\text{O}_{14}\text{P}_2$ (`NAD`)| High-potential electron donor feeding Complex I ($\sim 0.5\,\text{mM}$). | 🟢 **Built** |
| `ubiquinone_8` | Coenzyme $Q_8$ | $\text{C}_{49}\text{H}_{74}\text{O}_4$ (`U10`)| Hydrophobic lipid-soluble redox electron carrier in the inner membrane. | 🟢 **Built** (Docked in `7Z7V`) |
| `peptidoglycan_lipids`| Lipid II (Bactoprenol-GlcNAc-MurNAc) | Undecaprenyl-diphosphate | Essential membrane-anchored building block of the cell wall sacculus. | 🟡 *Pending* |
| `membrane_phospholipids`| Phosphatidylethanolamine (PE) | Diacyl-glycerophosphoethanolamine | 75% of inner membrane lipids; zwitterionic cylindrical bilayer scaffold. | 🟢 **Built** |

---

### Level 6: Atomic Resolution & Quantum Bonds ($0.1\text{--}0.3\,\text{nm}$ / $1\text{--}3\,\text{Å}$)

| ID | Biophysical Phenomenon | Length / Energy | Structural Function | Status |
| :--- | :--- | :--- | :--- | :--- |
| `peptide_bond_planar` | Planar $\text{C}-\text{N}$ peptide bond | $1.33\,\text{Å}$, $\Delta G^\circ = +10\,\text{kJ/mol}$ | $40\%$ double-bond character; restricts Ramachandran $\phi, \psi$ angles. | 🟢 **Built** |
| `watson_crick_hbonds` | A=T & G$\equiv$C Hydrogen Bonds | $2.8\text{--}3.0\,\text{Å}$, $2\text{--}5\,\text{kcal/mol}$ | DNA double helix stability and codon-anticodon discrimination fidelity. | 🟢 **Built** |
| `pi_pi_stacking` | Aromatic Ring Stacking | $3.4\text{--}3.8\,\text{Å}$, $2\text{--}4\,\text{kcal/mol}$ | Stabilizes nucleic acid bases and chaperone-client aromatic recognition (SurA). | 🟢 **Built** |
| `mg_coordination` | Octahedral $\text{Mg}^{2+}$ Coordination | $2.05\text{--}2.15\,\text{Å}$ | Positions $\alpha$-phosphate in polymerases, ribosomes, and ATP pockets. | 🟢 **Built** |
| `grotthuss_proton_wire`| Grotthuss Proton Hopping ($\text{H}_3\text{O}^+$) | $0.24\text{--}0.28\,\text{nm}$ | Ultra-fast proton conduction through MotA/B stators and ATP synthase channels. | 🟢 **Built** |

---

## 3. Inter-Element Metabolic & Structural Flux Networks (Biological Iteration)

The diagram below illustrates the continuous **inter-element iteration** connecting every major subsystem in the cell:

```
[ EXTRACELLULAR NUTRIENTS: Glucose, Amino Acids, Phosphate, O2 ]
                     │
                     ▼
       ┌───────────────────────────┐
       │   OMPF / C PORINS (L1)    │ ◄── [ OUTER MEMBRANE & LPS (L1) ]
       └─────────────┬─────────────┘
                     │ (Filtration < 600 Da)
                     ▼
       ┌───────────────────────────┐
       │ MALE SOLUTE CARRIER (L3)  │ ◄── [ PERIPLASMIC SPACE & SACULUS (L1) ]
       └─────────────┬─────────────┘
                     │ (Periplasmic Scouting)
                     ▼
       ┌───────────────────────────┐
       │ MALFGK2 ABC IMPORTER (L3) │
       └─────────────┬─────────────┘
                     │ (Consumes 2 ATP)
                     ▼
          [ CYTOSOLIC GLYCOLYSIS ]
                     │
                     ▼
       ┌───────────────────────────┐
       │  PYRUVATE DEHYDROGENASE   │ ────► Acetyl-CoA ──► [ TCA CYCLE ]
       │        (PDH) (L3)         │
       └─────────────┬─────────────┘
                     │ Produces NADH
                     ▼
       ┌───────────────────────────┐
       │   COMPLEX I (7Z7V) (L3)   │ ────► 4 H+ pumped into Periplasm
       └─────────────┬─────────────┘
                     │ Transfers 2e- via Fe-S wire
                     ▼ Ubiquinol (QH2)
       ┌───────────────────────────┐
       │  CYTOCHROME BO3 (6WTI)    │ ────► 2 H+ pumped into Periplasm (O2 -> 2 H2O)
       └─────────────┬─────────────┘
                     │
                     ▼
     [ PERIPLASMIC PROTON POOL: Proton-Motive Force (Δp ≈ -140 mV) ]
                     │
         ┌───────────┴──────────────────────────────┐
         ▼                                          ▼
┌──────────────────────────┐               ┌──────────────────────────┐
│  ATP SYNTHASE (6RKW)     │               │ FLAGELLAR MOTOR (6YKM)   │
│       (L3 Dynamo)        │               │       (L3 Rotor)         │
└────────────┬─────────────┘               └────────────┬─────────────┘
             │ Produces ATP                             │ Spins 300 Hz
             ▼ (3-5 mM pool)                            ▼
    [ CYTOSOLIC ATP POOL ]                     [ BACTERIAL LOCOMOTION ]
             │
   ┌─────────┼───────────────────────────┐
   ▼         ▼                           ▼
┌───────┐ ┌───────────────────┐ ┌───────────────────┐
│70S    │ │DNA POLYMERASE III │ │RNA POLYMERASE     │
│RIBO-  │ │     (6S8N)        │ │     (6C9Y)        │
│SOME   │ └─────────┬─────────┘ └─────────┬─────────┘
│(7K00) │           │ Duplicates          │ Transcribes
└───┬───┘           ▼ Genome              ▼ mRNA
    │     [ CHROMOSOME NUCLEOID ] ──► [ EXPRESSOME (6X9Q) ]
    │
    ▼ Nascent Polypeptide Chain
┌───────────────────────────┐
│ SECYEG TRANSLOCON (3J46)  │ ◄── Powered by SecA ATPase
└─────────────┬─────────────┘
              │ Translocates unfolded client into periplasm
              ▼
┌───────────────────────────┐
│ SURA CHAPERONE (1M5Y)     │ ◄── Protects from periplasmic aggregation
└─────────────┬─────────────┘
              │ Delivers client to outer membrane
              ▼
┌───────────────────────────┐
│ BAM COMPLEX (5D0O)        │ ──► Inserts folded OmpF/OmpC/LptD
└─────────────┬─────────────┘
              │
              ▼
[ REINFORCED OUTER MEMBRANE BARRIER (L1) ]
```

---

## 4. Phased Development Roadmap & Iteration Order

To systematically implement the full prokaryote cell engine, work proceeds in **5 structured iteration phases**:

### Phase 1: Completed Baseline Foundations (Active in Repository)
- ✅ `ecoli_whole_cell` (Cutaway Envelope & Cytoplasmic Atmosphere)
- ✅ `flagellar_motor` (6YKM Basal Body + FliC Helical Tail + Exploded View)
- ✅ `ribosome_70s` (7K00 Translating Polysome + A/P/E tRNAs + PTC Active Site)
- ✅ `sura_chaperone` & `male_transporter` (Periplasmic multiscale proof-of-concept)

### Phase 2: Bioenergetic Rotary Dynamos & Secretion Machinery
- ✅ **Milestone 2.1:** **$F_1F_0$-ATP Synthase (`6RKW` / `6OQR`)** — 🟢 **Built & Active**
  - Interactive 3-state Boyer catalytic binding-change card ($O \to L \to T$), exploded rotor/stator dissociation vectors, $\Delta p$ proton-motive force slider ($-80$ to $-220\,\text{mV}$), forward synthesis vs. reverse hydrolysis mode toggle, and dynamic SVG leader lines with Kokoro-82M neural TTS voice narration.
- ✅ **Milestone 2.2:** **Respiratory Complex I (`7Z7V`)** — 🟢 **Built & Fully Interactive**
  - High-fidelity 9-piece cryo-EM decomposition, authentic dual-leaflet lipid bilayer slab, animated 90 Å quantum Fe-S electron tunneling wire with pulsing energy packets, 4 distinct $H^+$ translocating conduits into periplasm, exploded view dissociation separating hydrophilic arm ($+12\,\text{nm}$) and NuoL lateral pump ($+5\,\text{nm}$), interactive NADH saturation slider, Rotenone inhibitor toggle, and universal 6-Stage Explanatory Trace.
- ✅ **Milestone 2.3:** **SecYEG Translocon (`3J46` / `6ITC`) & SecA ATPase Motor** — 🟢 **Built & Fully Interactive**
  - High-fidelity 6-piece cryo-EM decomposition (`Piece_SecYEG_SecY`, `Piece_SecYEG_Lateral_Gate`, `Piece_SecYEG_SecE`, `Piece_SecYEG_SecG`, `Piece_SecYEG_SecA_Motor`, `Piece_SecYEG_Translocating_Preprotein`), authentic dual-leaflet phospholipid bilayer slab with polar headgroups, interactive dynamic lateral gate parting up to 1.4 nm directly into the lipid bilayer, SecA two-helix finger vertical power-stroke piston oscillation, processive preprotein strand translocation with animated moving amino acid beads, exploded view dissociation along natural biophysical vectors, ATP hydrolysis rate slider with physiological turnover readouts (45 aa/s, 2 ATP/s), Sodium Azide ($\text{NaN}_3$) inhibitor toggle, 6 dynamic SVG leader lines with lettered subpill badges, and universal 5-Stage Explanatory Trace.

### Phase 3: Envelope Biogenesis & Trans-Periplasmic Bridges
- ✅ **Milestone 3.1:** **BAM Complex Outer Membrane Insertase (`5D0O`)** — 🟢 **Built & Fully Interactive**
  - High-fidelity 8-piece macromolecular decomposition (`Piece_BAM_BamA_Barrel`, `Piece_BAM_Lateral_Seam`, `Piece_BAM_BamA_POTRA`, `Piece_BAM_BamB`, `Piece_BAM_BamC`, `Piece_BAM_BamD`, `Piece_BAM_BamE`, `Piece_BAM_Client_OMP`), authentic asymmetric outer membrane bilayer slab (Extracellular LPS Lipid A headgroups `#0077B6` at $+Y$, Periplasmic Phospholipids `#06D6A0` at $-Y$), interactive dynamic lateral seam unzipping ($\beta 16$ unpairing from $\beta 1$ outwards into lipid bilayer by up to 1.6 nm), animated nascent client $\beta$-hairpin substrate insertion stream, exploded view dissociation along natural biophysical vectors, interactive client insertion flux speed slider with turnover readouts (0.5–2.0 min⁻¹), lateral seam slider, exploded slider, quick inspect chips, 8 dynamic SVG leader lines with lettered subpill badges, and universal 5-Stage Explanatory Trace.
- 🎯 **Milestone 3.2:** **LptA-G LPS Trans-Envelope Bridge (`6MIT`)** *(CURRENT NEXT TARGET)*
  - Continuous trans-periplasmic lipid slide model connecting inner membrane ABC engine to outer membrane LptDE.

### Phase 4: Genetic Central Dogma & Information Replication
- 🎯 **Milestone 4.1:** **RNA Polymerase Transcription Machine (`6C9Y`)**
  - Implement transcription bubble unwinding, $\sigma^{70}$ promoter recognition, and Expressome coupling to lead ribosome.
- 🎯 **Milestone 4.2:** **DNA Polymerase III Replisome Holoenzyme (`6S8N`)**
  - Bidirectional replication fork, $\beta_2$-clamp sliding, and $3'\to 5'$ exonuclease proofreading switch.
- 🎯 **Milestone 4.3:** **DNA Gyrase Topoisomerase II (`1AB4`)**
  - Negative supercoiling strand-passage gate and ciprofloxacin target pocket.

### Phase 5: Cytoskeletal Scaffolds, Divisome & Chemosensory Arrays
- 🎯 **Milestone 5.1:** **Divisome FtsZ Z-Ring (`1FSZ`)** (Midcell division septum constriction)
- 🎯 **Milestone 5.2:** **MreB Actin Helical Rails (`1JCG`)** (Wall synthesis elongation guidance)
- 🎯 **Milestone 5.3:** **Chemosensory Array (`3JA6`)** (Polar MCP-CheA-CheW signaling lattice)
