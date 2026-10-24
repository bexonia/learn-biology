// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial F1F0-ATP Synthase Rotary Dynamo — 3D Scenario
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 6OQR / 6RKW at 3.1 Å)
 * Adhering strictly to The Biology Primer Editorial Reference Artwork
 * ("COMPLETE F1F0-ATP SYNTHASE HOLOENZYME")
 *
 * Pieces & Subunit Taxonomy:
 * - Piece 1: Piece_ATP_Fo_C_Ring (c10-ring rotor turbine, Chains I–S) - Golden Yellow (#E5A93C)
 * - Piece 2: Piece_ATP_Fo_A_Subunit (a-subunit stator pathway, Chain a) - Burnt Orange (#C85A32)
 * - Piece 3: Piece_ATP_Peripheral_Stalk (b, delta, d stator arm, Chains W, X, Y) - Royal Purple (#6A0DAD)
 * - Piece 4: Piece_ATP_Central_Rotor (gamma, epsilon central shaft, Chains G, H) - Vivid Emerald (#06D6A0)
 * - Piece 5: Piece_ATP_F1_Alpha (alpha regulatory crown, Chains A, B, C) - Soft Rose / Orchid (#D45D8C)
 * - Piece 6: Piece_ATP_F1_Beta (beta catalytic heads, Chains D, E, F) - Deep Crimson / Ruby (#9E1B46)
 * - Piece 7: Piece_ATP_Asp61_Sites (c-ring Asp61 protonation carboxylates) - Luminous Cyan (#00F5D4)
 * - Piece 8: Piece_ADP_Pi_Substrates (ADP + Pi reactants entering top right) - Soft Coral / Peach (#F28482)
 * - Piece 9: Piece_ATP_Product (Synthesized ATP product with golden halo) - Radiant Gold (#FFE066)
 * - Bilinear Lipid Cross-Section Membrane: Polar heads & wavy acyl chains (#94A3B8 / #64748B)
 * - Proton (H+) Flux: Directed red-orange upward flow arrows (#FF4D00 -> #FF9500)
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { ATPSynthaseComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const ATP_SYNTHASE_COMPONENTS_META: Record<string, ATPSynthaseComponentData> = {
  'atp_synthase_holoenzyme': {
    name: 'Complete F1F0-ATP Synthase Holoenzyme (PDB: 6OQR / 6RKW)',
    badge: 'ROTARY MOLECULAR MACHINE',
    dims: 'Diameter: ~10 nm (F1 headpiece) × Height: ~19 nm, Mass: ~540 kDa',
    proteins: '22 Subunits: F1 (alpha3 beta3 gamma delta epsilon) + F0 (a b2 c10)',
    pdb: 'PDB: 6OQR / 6RKW (Cryo-EM at 3.1 Å resolution, Sobti et al., 2020)',
    desc: 'The rotary molecular machine of living cells. Couples electrochemical proton flow across the inner membrane to the mechanical rotation of a central shaft, driving the synthesis of ATP through Boyer binding-change catalytic transitions.',
    role: 'Synthesizes cellular ATP energy currency from ADP and inorganic phosphate (Pi) driven by the proton-motive force (Δp ≈ -140 mV).',
    stoichiometry: '10 H+ (periplasm) + 3 ADP + 3 Pi → 10 H+ (cytosol) + 3 ATP + 3 H2O'
  },
  'f1_catalytic_head': {
    name: 'F1 Catalytic Head (α3β3 Subunits)',
    badge: 'F1 CATALYTIC HEAD (α3β3)',
    dims: 'Hexameric spherical crown (~10 nm diameter), Chains A–F',
    proteins: '3x α Subunits (Soft Rose) + 3x β Subunits (Deep Crimson)',
    pdb: 'PDB: 6OQR (Chains A, B, C, D, E, F)',
    desc: 'The catalytic headpiece where ATP synthesis occurs. Consists of alternating alpha and beta subunits arranged like segments of an orange around the central rotor shaft. The three beta subunits harbor the catalytic nucleotide binding sites.',
    role: 'Performs Boyer binding-change rotary catalysis, sequentially cycling through Open, Loose, and Tight conformations.',
    stoichiometry: '3 ATP generated per 360° mechanical revolution of the central shaft.'
  },
  'f1_beta': {
    name: 'F1 Beta Catalytic Subunits (3x Subunits)',
    badge: 'BOYER CATALYTIC SITES (3x β)',
    dims: '3 Polypeptide chains (~470 aa each), Deep Crimson (#9E1B46)',
    proteins: '3x β Subunits (AtpD gene product)',
    pdb: 'PDB: 6OQR (Chains D, E, F)',
    desc: 'The catalytic powerhouses of ATP synthesis. Each β subunit coordinates Mg²⁺ and alternates through three conformational states (Open → Loose → Tight) as forced by the asymmetric rotation of the central γ camshaft.',
    role: 'Harbors the catalytic nucleotide binding pockets that condense ADP + Pi into ATP.',
    stoichiometry: '3 ATP generated per 360° mechanical rotation of the central rotor.'
  },
  'f1_alpha': {
    name: 'F1 Alpha Regulatory Subunits (3x Subunits)',
    badge: 'STRUCTURAL CROWN (3x α)',
    dims: '3 Polypeptide chains (~513 aa each), Soft Rose (#D45D8C)',
    proteins: '3x α Subunits (AtpA gene product)',
    pdb: 'PDB: 6OQR (Chains A, B, C)',
    desc: 'Alternates with β subunits to form the rigid (αβ)3 catalytic hexamer. Binds ATP/ADP at non-catalytic allosteric sites, stabilizing the hexamer against massive mechanical shear stress during rotor rotation.',
    role: 'Maintains quaternary structural integrity and prevents stator deformation under torque.',
    stoichiometry: 'Non-catalytic allosteric regulator.'
  },
  'central_rotor': {
    name: 'Central Shaft (γ, ε Rotor)',
    badge: 'CENTRAL SHAFT (γ, ε ROTOR)',
    dims: 'γ coiled-coil shaft (~286 aa) + ε regulatory foot (~138 aa)',
    proteins: 'γ Subunit (AtpG) + ε Subunit (AtpC), Vivid Emerald Green (#06D6A0)',
    pdb: 'PDB: 6OQR (Chains G, H)',
    desc: 'The eccentric drive shaft connecting the membrane c-ring rotor directly to the F1 catalytic headpiece. Its curved neck rotates within the (αβ)3 cavity, forcing each β pocket to deform sequentially into Open, Loose, and Tight states.',
    role: 'Transmits mechanical rotary torque from the transmembrane c-ring into catalytic energy.',
    stoichiometry: 'Rotates 360° per 10 protons translocated, generating ~40 pN·nm of mechanical torque.'
  },
  'fo_c_ring': {
    name: 'c-Ring (Translocating Rotor)',
    badge: 'c-RING (TRANSLOCATING ROTOR)',
    dims: 'Decameric cylindrical ring (10 identical c subunits), Golden Yellow (#E5A93C)',
    proteins: '10x c Subunits (AtpE gene product), Chains I–S',
    pdb: 'PDB: 6OQR (Chains I, J, L, M, N, O, P, Q, R, S)',
    desc: 'The hydrophobic membrane-embedded turbine. Each c subunit contains an essential proton-binding carboxylate (Asp61 in E. coli). Protons entering from the periplasm neutralize Asp61, allowing the ring to rotate within the hydrophobic lipid bilayer.',
    role: 'Converts proton-motive electrochemical gradient into directional rotary motion.',
    stoichiometry: '10 protons translocated across the membrane per complete 360° revolution.'
  },
  'fo_a_subunit': {
    name: 'a-Subunit (Stator Pathway)',
    badge: 'a-SUBUNIT (STATOR PATHWAY)',
    dims: 'Transmembrane 5-helix bundle (~271 aa), Burnt Orange (#C85A32)',
    proteins: 'Subunit a (AtpB gene product), Chain a',
    pdb: 'PDB: 6OQR (Chain a)',
    desc: 'The transmembrane stator channel flanking the c-ring on the right. Contains two non-connecting aqueous half-channels: one open to the periplasm for proton uptake, and one open to the cytoplasm for proton release, separated by essential Arg210.',
    role: 'Conducts protons across the membrane into and out of the rotating c-ring carboxylates.',
    stoichiometry: '2 aqueous half-channels gating 10 protons per revolution.'
  },
  'peripheral_stalk': {
    name: 'Peripheral Stalk (b, δ, d Stator)',
    badge: 'PERIPHERAL STALK (b, δ STATOR)',
    dims: 'b dimer (~156 aa) + δ cap (~177 aa), Royal Purple (#6A0DAD)',
    proteins: 'b2 Dimer (AtpF) + δ Subunit (AtpH), Chains W, X, Y',
    pdb: 'PDB: 6OQR (Chains W, X, Y)',
    desc: 'The rigid counter-torque stator arm anchoring the membrane base on the left side to the top of the F1 catalytic head. Prevents the catalytic (αβ)3 hexamer from co-rotating with the central shaft.',
    role: 'Counteracts mechanical rotary torque and keeps the F1 head stationary.',
    stoichiometry: 'High tensile counter-torque bracket.'
  },
  'stator_bracket': {
    name: 'Stator Complex (a-Subunit & Peripheral Stalk)',
    badge: 'STATOR COMPLEX (a, b2, δ)',
    dims: 'Transmembrane channel + peripheral arching stalk',
    proteins: 'Subunit a (Orange) + b2-delta stalk (Purple)',
    pdb: 'PDB: 6OQR (Chains a, W, X, Y)',
    desc: 'The entire stationary stator scaffold of ATP synthase, comprising the proton-conducting a-subunit in the membrane and the peripheral b2-delta stalk.',
    role: 'Proton conduction and counter-torque stabilization.',
    stoichiometry: 'Fixed stator frame.'
  },
  'adp_pi_substrates': {
    name: 'ADP + Pi (Substrates)',
    badge: 'ADP + Pi (SUBSTRATES)',
    dims: 'Nucleotide reactant clusters in Coral/Peach (#F28482)',
    proteins: 'Adenosine Diphosphate + Inorganic Phosphate',
    pdb: 'PDB: 6OQR (Reacting Substrates in Open/Loose Pockets)',
    desc: 'Substrates entering the catalytic cleft at the top right of the F1 headpiece. Captured in the Open and Loose conformational states before being condensed into ATP.',
    role: 'Chemical substrates for oxidative phosphorylation.',
    stoichiometry: 'ADP + Pi + H+ → ATP + H2O'
  },
  'atp_product': {
    name: 'ATP (Product)',
    badge: 'ATP (PRODUCT)',
    dims: 'High-energy nucleotide cluster in Radiant Gold (#FFE066)',
    proteins: 'Adenosine Triphosphate (ATP) with radiant energy burst halo',
    pdb: 'PDB: 6OQR (Synthesized ATP product)',
    desc: 'The universal high-energy cellular energy currency synthesized by the enzyme. Ejected from the beta catalytic pocket during transition from Tight to Open state.',
    role: 'Powers virtually all endergonic biochemical processes in living cells.',
    stoichiometry: '3 ATP released per 360° rotation.'
  },
  'catalytic_nucleotides': {
    name: 'Docked Nucleotides (ATP, ADP) & Mg²⁺ Co-factors',
    badge: 'ACTIVE SITE LIGANDS',
    dims: 'Space-filling atomic sphere clusters in catalytic clefts',
    proteins: 'ADP, ATP, Inorganic Phosphate (Pi), and Octahedral Mg²⁺',
    pdb: 'PDB: 6OQR (Bound Ligands: ATP, ADP, PO4, MG)',
    desc: 'Visualizes the reacting substrates (ADP + Pi) and newly formed product (ATP) coordinated inside the catalytic beta pockets.',
    role: 'Direct chemical reactants of oxidative phosphorylation.',
    stoichiometry: '3 ADP + 3 Pi → 3 ATP + 3 H2O'
  },
  'asp61_sites': {
    name: 'c-Ring Asp61 Protonation Sites',
    badge: 'PROTON CARBOXYLATES (10x Asp61)',
    dims: '10 Carboxylate side-chains facing the membrane lipid interface',
    proteins: 'Asp61 on each of the 10 c subunits (AtpE), Luminous Cyan (#00F5D4)',
    pdb: 'PDB: 6OQR (Chains I–S, Residue 61)',
    desc: 'The ten proton-binding carboxylates in luminous cyan that drive rotary torque against the stator a-subunit. Uncharged when protonated in the membrane; deprotonated at the cytoplasmic half-channel.',
    role: 'Primary electrochemical transducer converting Δp into mechanical turbine rotation.',
    stoichiometry: '10 protons carried per complete 360° turn.'
  },
  'membrane_bilayer': {
    name: 'Membrane (Bilinear Lipid Cross-Section)',
    badge: 'MEMBRANE (BILIPID SECTION)',
    dims: 'Thickness: ~4.2 nm, Polar head diameter: ~0.5 nm, Cross-section slice',
    proteins: 'Phospholipid bilayer: Polar heads & wavy hydrocarbon fatty acid chains',
    pdb: 'Cellular Inner Membrane Boundary',
    desc: 'The biological phospholipid bilayer cross-section spanning the inner membrane. Polar hydrophilic heads face the aqueous periplasm and cytoplasm, while hydrophobic fatty acid tails insulate the membrane against passive proton leaks.',
    role: 'Maintains the electrochemical proton gradient (Δp) that powers ATP synthesis.',
    stoichiometry: 'Impermeable barrier maintaining -140 mV proton-motive force.'
  },
  'proton_flux': {
    name: 'Proton (H⁺) Flux Pathway',
    badge: 'PROTON (H⁺) FLUX',
    dims: 'Electrochemical proton gradient driven influx',
    proteins: 'Hydronium ions / Protons (H+)',
    pdb: 'Electrochemical Proton Conduit',
    desc: 'Protons flow down their electrochemical gradient from the acidic periplasm (high H+) into the stator a-subunit entry half-channel, protonate c-ring Asp61, ride 300° through the lipid bilayer, and exit via the cytoplasmic half-channel.',
    role: 'Thermodynamic driving force of the rotary dynamo.',
    stoichiometry: '10 H+ translocated per 3 ATP generated (3.33 H+/ATP).'
  }
};

export const ATP_SYNTHASE_TOUR_STOPS = [
  'atp_synthase_holoenzyme',
  'f1_catalytic_head',
  'central_rotor',
  'fo_c_ring',
  'fo_a_subunit',
  'peripheral_stalk',
  'adp_pi_substrates',
  'atp_product'
];

export class ATPSynthaseScene {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.onSelectComponent = options.onSelectComponent || (() => {});
    this.onBoyerStateUpdate = options.onBoyerStateUpdate || (() => {});

    // State
    this.active = false;
    this.pmfVoltage = -140; // mV (-80 to -220)
    this.rotationSpeed = 1.0;
    this.mode = 'synthesis'; // 'synthesis' | 'hydrolysis'
    this.isPaused = false;
    this.explodedProgress = 0.0;
    this.selectedComponentKey = 'atp_synthase_holoenzyme';
    this.activeSubunitFilter = 'all';
    this.isAutoRotating = false;

    // Boyer 3-State Catalytic Cycle
    this.rotorAngle = 0.0;
    this.boyerState = 'tight'; // 'open' | 'loose' | 'tight'
    this.atpCount = 0;
    this.hCount = 0;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;

    // Groups & Root
    this.rootGroup = null;
    this.assemblyGroup = null;
    this.rotorGroup = null;
    this.statorGroup = null;
    this.membraneGroup = null;
    this.labelAnchorLayer = null;

    // Molecular Pieces from 6RKW GLB
    this.pieceFo_C_Ring = null;
    this.pieceFo_A_Subunit = null;
    this.piecePeripheral_Stalk = null;
    this.pieceCentral_Rotor = null;
    this.pieceF1_Alpha = null;
    this.pieceF1_Beta = null;
    this.pieceAsp61_Sites = null;
    this.pieceADP_Pi_Substrates = null;
    this.pieceATP_Product = null;
    this.atpHaloSprite = null;

    // Original local positions for exploded displacement
    this.origPositions = new Map();

    // Dissociation vectors for exploded view
    this.dissocVectors = {
      'Piece_ATP_F1_Alpha': new THREE.Vector3(0, 14.0, 0),
      'Piece_ATP_F1_Beta': new THREE.Vector3(0, 16.0, 0),
      'Piece_ATP_Central_Rotor': new THREE.Vector3(0, 7.0, 0),
      'Piece_ATP_Fo_C_Ring': new THREE.Vector3(0, -9.0, 0),
      'Piece_ATP_Asp61_Sites': new THREE.Vector3(0, -9.0, 0),
      'Piece_ATP_Fo_A_Subunit': new THREE.Vector3(12.0, 0, 0),
      'Piece_ATP_Peripheral_Stalk': new THREE.Vector3(-14.0, 0, 0),
      'Piece_ADP_Pi_Substrates': new THREE.Vector3(6.0, 8.0, 0),
      'Piece_ATP_Product': new THREE.Vector3(8.0, 6.0, 0)
    };

    // Dynamic Leaders & UI
    this.showLabels = true;
    this.svgOverlay = null;
    this.labelsContainer = null;
    this.atpLandmarks = [];
    this.labelAnchors = {};
    this.labels = [];

    // Animated Proton Arrows & Flow Elements
    this.protonArrows = [];
    this.shaftCurvedArrows = null;

    // Sequential Explanatory Trace State
    this.explanationStep = 0; // 0 = continuous steady-state dynamo, 1..5 = pedagogical stages
    this.isExplanatoryTrace = false;

    // Smooth Cubic Camera Transition State
    this.cameraTransition = {
      active: false,
      startTarget: new THREE.Vector3(),
      endTarget: new THREE.Vector3(),
      startSpherical: { radius: 46, theta: 0.05, phi: 1.48 },
      endSpherical: { radius: 46, theta: 0.05, phi: 1.48 },
      startTime: 0,
      duration: 1.4,
      onComplete: null
    };

    // Flowing Particle Streams & Curves
    this.protonCurves = [];
    this.protonParticleGroup = null;
    this.protonParticles = [];

    this.substrateCurve = null;
    this.substrateParticleGroup = null;
    this.substrateParticles = [];

    this.atpBurstGroup = null;
    this.atpBurstParticles = [];

    // Interactive Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clickableMeshes = [];

    // Camera settings: Theatrical frontal elevation matching artwork
    this.baseRadius = 46;
    this.spherical = { radius: 46, theta: 0.05, phi: 1.48 };
    this.target = new THREE.Vector3(0, 6.5, 0);
    this.isPointerDown = false;
    this.pointerStart = { x: 0, y: 0 };

    this.componentsMeta = ATP_SYNTHASE_COMPONENTS_META;
    this.keyboardFlight = null;

    this.onWindowResizeBound = this.onWindowResize.bind(this);
    this.onPointerMoveBound = this.onPointerMove.bind(this);
    this.onPointerUpBound = this.onPointerUp.bind(this);
  }

  init() {
    this.setupScene();
    this.setupLighting();
    this.buildBilayerLipidMembrane();
    this.buildContactShadow();
    this.loadMolecularATPSynthase();
    this.setupInteraction();
    this.setupATPLandmarks();
    this.initLabels();
    this.handleResize();
  }

  setupScene() {
    const rect = this.container.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : window.innerWidth;
    const h = rect.height > 0 ? rect.height : (window.innerHeight - 180);

    this.scene = new THREE.Scene();
    // Warm ivory paper background matching The Biology Primer aesthetic
    this.scene.background = new THREE.Color(0xF5EFEB);

    this.camera = new THREE.PerspectiveCamera(38, w / h, 0.5, 1000);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.canvas = this.renderer.domElement;
    this.canvas.id = 'atp-synthase-canvas';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = 'block';
    this.canvas.style.userSelect = 'none';
    this.container.appendChild(this.canvas);

    this.rootGroup = new THREE.Group();
    this.rootGroup.name = 'ATPSynthase_Root';
    this.scene.add(this.rootGroup);

    this.assemblyGroup = new THREE.Group();
    this.assemblyGroup.name = 'Molecular_6RKW_Assembly';
    this.rootGroup.add(this.assemblyGroup);

    this.labelAnchorLayer = new THREE.Group();
    this.labelAnchorLayer.name = 'ATPSynthase_Label_Anchor_Layer';
    this.rootGroup.add(this.labelAnchorLayer);

    window.addEventListener('resize', this.onWindowResizeBound);
    this.active = true;
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.4);
    this.scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainKeyLight.position.set(30, 45, 40);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 2048;
    mainKeyLight.shadow.mapSize.height = 2048;
    mainKeyLight.shadow.camera.near = 5;
    mainKeyLight.shadow.camera.far = 150;
    const d = 26;
    mainKeyLight.shadow.camera.left = -d;
    mainKeyLight.shadow.camera.right = d;
    mainKeyLight.shadow.camera.top = d;
    mainKeyLight.shadow.camera.bottom = -d;
    mainKeyLight.shadow.bias = -0.0005;
    this.scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.2);
    fillLight.position.set(-30, 20, -30);
    this.scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffe066, 1.4, 60);
    rimLight.position.set(10, 18, 10);
    this.scene.add(rimLight);
  }

  /**
   * Constructs the authentic Bilinear Lipid Cross-Section Membrane
   * matching The Biology Primer artwork:
   * - Polar headgroup spheres on upper leaflet (Y = +2.0 nm) and lower leaflet (Y = -2.0 nm)
   * - Wavy hydrocarbon fatty acid acyl chains visible in front cross-section
   * - Cutout opening around the c-ring turbine and stator a-subunit
   * - Translucent silver-slate bilinear lipid cross-section interior
   */
  buildBilayerLipidMembrane() {
    this.membraneGroup = new THREE.Group();
    this.membraneGroup.name = 'Bilinear_Lipid_Membrane_CrossSection';

    // Mask checking if position (x, z) falls within embedded protein components
    const inProteinHole = (x, z) => {
      // c-ring turbine cylindrical hole
      if (x * x + z * z < 3.2 * 3.2) return true;
      // a-subunit stator channel hole (on the right)
      if (x >= 0.8 && x <= 6.2 && Math.abs(z) < 2.6) return true;
      // Stator stalk base penetration hole (on the left)
      if (x >= -4.8 && x <= -1.4 && Math.abs(z) < 2.2) return true;
      return false;
    };

    // Calculate lipid positions
    const headPositions = [];
    const xMin = -23.0;
    const xMax = 23.0;
    const zMin = -5.0;
    const zMax = 3.6;
    const stepX = 0.72;
    const stepZ = 0.72;

    for (let x = xMin; x <= xMax; x += stepX) {
      for (let z = zMin; z <= zMax; z += stepZ) {
        if (!inProteinHole(x, z)) {
          // Add subtle biological jitter
          const jx = (Math.sin(x * 12.3 + z * 7.1) * 0.08);
          const jz = (Math.cos(x * 8.7 - z * 11.2) * 0.08);
          headPositions.push({ x: x + jx, z: z + jz });
        }
      }
    }

    const count = headPositions.length;
    const sphereGeo = new THREE.SphereGeometry(0.24, 12, 8);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x94A3B8, // Pearl Slate Gray
      roughness: 0.35,
      metalness: 0.20
    });

    // Upper polar headgroup leaflet (Y = +2.05 nm)
    const upperHeads = new THREE.InstancedMesh(sphereGeo, headMat, count);
    upperHeads.castShadow = true;
    upperHeads.receiveShadow = true;

    // Lower polar headgroup leaflet (Y = -2.05 nm)
    const lowerHeads = new THREE.InstancedMesh(sphereGeo, headMat, count);
    lowerHeads.castShadow = true;
    lowerHeads.receiveShadow = true;

    const dummy = new THREE.Object3D();
    headPositions.forEach((p, idx) => {
      // Upper head
      dummy.position.set(p.x, 2.05 + Math.sin(p.x * 2.0) * 0.05, p.z);
      dummy.updateMatrix();
      upperHeads.setMatrixAt(idx, dummy.matrix);

      // Lower head
      dummy.position.set(p.x, -2.05 - Math.sin(p.x * 2.0) * 0.05, p.z);
      dummy.updateMatrix();
      lowerHeads.setMatrixAt(idx, dummy.matrix);
    });

    upperHeads.instanceMatrix.needsUpdate = true;
    lowerHeads.instanceMatrix.needsUpdate = true;
    this.membraneGroup.add(upperHeads);
    this.membraneGroup.add(lowerHeads);

    // Front cross-section fatty acid acyl chains (visible wavy hydrocarbon tails)
    const tailMaterial = new THREE.LineBasicMaterial({
      color: 0x64748B,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.75
    });

    const tailPositions = [];
    headPositions.forEach((p) => {
      // Only render visible tails near the front cross-section face (z >= 1.2)
      if (p.z >= 1.2) {
        // Two wavy chains per lipid head
        [-0.10, 0.10].forEach((offX) => {
          // Upper tail extending downward toward core (Y = 0)
          const ptsUpper = [
            new THREE.Vector3(p.x + offX, 1.85, p.z),
            new THREE.Vector3(p.x + offX + 0.08, 1.2, p.z),
            new THREE.Vector3(p.x + offX - 0.06, 0.6, p.z),
            new THREE.Vector3(p.x + offX + 0.04, 0.05, p.z)
          ];
          const curveUpper = new THREE.CatmullRomCurve3(ptsUpper);
          const geomUpper = new THREE.BufferGeometry().setFromPoints(curveUpper.getPoints(6));
          const lineUpper = new THREE.Line(geomUpper, tailMaterial);
          this.membraneGroup.add(lineUpper);

          // Lower tail extending upward toward core (Y = 0)
          const ptsLower = [
            new THREE.Vector3(p.x + offX, -1.85, p.z),
            new THREE.Vector3(p.x + offX - 0.08, -1.2, p.z),
            new THREE.Vector3(p.x + offX + 0.06, -0.6, p.z),
            new THREE.Vector3(p.x + offX - 0.04, -0.05, p.z)
          ];
          const curveLower = new THREE.CatmullRomCurve3(ptsLower);
          const geomLower = new THREE.BufferGeometry().setFromPoints(curveLower.getPoints(6));
          const lineLower = new THREE.Line(geomLower, tailMaterial);
          this.membraneGroup.add(lineLower);
        });
      }
    });

    // Cross-section semi-translucent volumetric slabs (left and right of the protein core)
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x7A8D9E,
      roughness: 0.45,
      metalness: 0.10,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide
    });

    // Left membrane slab (X: -23 to -4.8)
    const leftWidth = 23.0 - 4.8;
    const leftGeo = new THREE.BoxGeometry(leftWidth, 4.1, 8.6);
    const leftSlab = new THREE.Mesh(leftGeo, slabMat);
    leftSlab.position.set(-23.0 + leftWidth / 2, 0, -0.7);
    leftSlab.receiveShadow = true;
    this.membraneGroup.add(leftSlab);

    // Right membrane slab (X: 6.2 to 23.0)
    const rightWidth = 23.0 - 6.2;
    const rightGeo = new THREE.BoxGeometry(rightWidth, 4.1, 8.6);
    const rightSlab = new THREE.Mesh(rightGeo, slabMat);
    rightSlab.position.set(6.2 + rightWidth / 2, 0, -0.7);
    rightSlab.receiveShadow = true;
    this.membraneGroup.add(rightSlab);

    // Build animated Proton Flux Arrows matching the editorial artwork
    this.buildProtonFluxArrows();
    this.buildProtonParticleStream();
    this.buildSubstrateParticleStream();
    this.buildATPBurstSystem();

    this.rootGroup.add(this.membraneGroup);
  }

  /**
   * Animated Proton (H+) Flux Arrows entering from the bottom periplasmic space
   * into the c-ring and subunit a stator pathway, plus the cytoplasmic exit arrow.
   */
  buildProtonFluxArrows() {
    this.protonArrows = [];

    // Helper to create an authentic 3D curved arrow
    const createCurvedArrow = (start, mid, end, colorHex = 0xFF4D00, headSize = 0.5) => {
      const group = new THREE.Group();
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.14, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.88 });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      group.add(tubeMesh);

      // Arrow cone head
      const coneGeo = new THREE.ConeGeometry(headSize * 0.6, headSize * 1.5, 12);
      const coneMat = new THREE.MeshBasicMaterial({ color: colorHex });
      const coneMesh = new THREE.Mesh(coneGeo, coneMat);

      // Position cone at end and orient along tangent
      coneMesh.position.copy(end);
      const tangent = curve.getTangent(1.0).normalize();
      coneMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);
      group.add(coneMesh);

      group.userData = { initialOpacity: 0.88, mat: tubeMat, coneMat: coneMat };
      return group;
    };

    // 1. Bottom Influx Arrow 1 (Entering c-ring bottom from periplasm)
    const arrow1 = createCurvedArrow(
      new THREE.Vector3(-0.6, -5.5, 0.4),
      new THREE.Vector3(-0.4, -3.8, 0.3),
      new THREE.Vector3(-0.1, -2.2, 0.2),
      0xFF3B30
    );
    this.membraneGroup.add(arrow1);
    this.protonArrows.push(arrow1);

    // 2. Bottom Influx Arrow 2 (Main influx into stator half-channel)
    const arrow2 = createCurvedArrow(
      new THREE.Vector3(1.2, -5.8, 0.5),
      new THREE.Vector3(1.5, -4.0, 0.4),
      new THREE.Vector3(1.8, -2.1, 0.3),
      0xFF5722
    );
    this.membraneGroup.add(arrow2);
    this.protonArrows.push(arrow2);

    // 3. Bottom Influx Arrow 3 (Entering subunit a stator channel)
    const arrow3 = createCurvedArrow(
      new THREE.Vector3(3.2, -5.4, 0.6),
      new THREE.Vector3(3.0, -3.8, 0.5),
      new THREE.Vector3(2.8, -2.1, 0.4),
      0xFF9500
    );
    this.membraneGroup.add(arrow3);
    this.protonArrows.push(arrow3);

    // 4. Cytoplasmic Exit Arrow (H+ emerging at top of c-ring into cytosol)
    const arrowExit = createCurvedArrow(
      new THREE.Vector3(0.5, 2.2, 0.3),
      new THREE.Vector3(1.6, 3.4, 0.5),
      new THREE.Vector3(2.6, 4.6, 0.7),
      0xFF4D00
    );
    this.membraneGroup.add(arrowExit);
    this.protonArrows.push(arrowExit);

    // 5. Central Shaft Green Rotary Turning Arrows (showing CCW turning)
    this.shaftCurvedArrows = new THREE.Group();
    const shaftRadius = 2.0;
    const shaftY = 6.2;
    const curve1 = new THREE.EllipseCurve(0, 0, shaftRadius, shaftRadius, 0.2, 1.4, false, 0);
    const pts1 = curve1.getPoints(24).map(p => new THREE.Vector3(p.x, shaftY, p.y));
    const catCurve1 = new THREE.CatmullRomCurve3(pts1);
    const shaftTubeGeo = new THREE.TubeGeometry(catCurve1, 20, 0.08, 6, false);
    const shaftTubeMat = new THREE.MeshBasicMaterial({ color: 0x06D6A0, transparent: true, opacity: 0.90 });
    const shaftMesh = new THREE.Mesh(shaftTubeGeo, shaftTubeMat);
    this.shaftCurvedArrows.add(shaftMesh);

    const shaftConeGeo = new THREE.ConeGeometry(0.25, 0.6, 8);
    const shaftConeMat = new THREE.MeshBasicMaterial({ color: 0x06D6A0 });
    const shaftCone = new THREE.Mesh(shaftConeGeo, shaftConeMat);
    shaftCone.position.copy(pts1[pts1.length - 1]);
    const tan1 = catCurve1.getTangent(1.0).normalize();
    shaftCone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan1);
    this.shaftCurvedArrows.add(shaftCone);

    this.membraneGroup.add(this.shaftCurvedArrows);
  }

  /**
   * Dedicated Traveling Proton (H+) Particle Stream
   * 18 glowing spheres traveling along 3 biological conduits from periplasm
   * into subunit a and c-ring Asp61 carboxylates.
   */
  buildProtonParticleStream() {
    this.protonParticleGroup = new THREE.Group();
    this.protonParticleGroup.name = 'Proton_Flux_Particle_Stream';

    this.protonCurves = [
      // Conduit 1: Periplasm into c-ring Asp61 binding channel
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.6, -7.0, 0.4),
        new THREE.Vector3(-0.4, -4.5, 0.3),
        new THREE.Vector3(-0.1, -2.2, 0.2),
        new THREE.Vector3(0.5, -0.6, 0.2)
      ]),
      // Conduit 2: Main periplasmic stream into subunit a stator half-channel
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.3, -7.4, 0.5),
        new THREE.Vector3(1.6, -4.2, 0.4),
        new THREE.Vector3(2.0, -1.8, 0.3),
        new THREE.Vector3(2.4, 0.2, 0.3)
      ]),
      // Conduit 3: Transmembrane transit to cytoplasmic release
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.2, -6.8, 0.6),
        new THREE.Vector3(2.8, -3.2, 0.5),
        new THREE.Vector3(1.5, 1.4, 0.4),
        new THREE.Vector3(2.6, 5.2, 0.7)
      ])
    ];

    const protonGeo = new THREE.SphereGeometry(0.20, 10, 8);
    const protonMat = new THREE.MeshBasicMaterial({
      color: 0xFF5722,
      transparent: true,
      opacity: 0.92
    });

    this.protonParticles = [];
    const countPerCurve = 6;

    this.protonCurves.forEach((curve, curveIdx) => {
      for (let i = 0; i < countPerCurve; i++) {
        const mesh = new THREE.Mesh(protonGeo, protonMat.clone());
        const u = i / countPerCurve;
        mesh.position.copy(curve.getPointAt(u));
        this.protonParticleGroup.add(mesh);

        this.protonParticles.push({
          mesh,
          curveIndex: curveIdx,
          u: u,
          speed: 0.22 + (curveIdx * 0.04)
        });
      }
    });

    this.membraneGroup.add(this.protonParticleGroup);
  }

  /**
   * Dedicated Traveling Substrates Stream (ADP + Pi)
   * Peach/coral reactant spheres drifting from cytoplasm into F1 beta catalytic pocket.
   */
  buildSubstrateParticleStream() {
    this.substrateParticleGroup = new THREE.Group();
    this.substrateParticleGroup.name = 'Substrate_ADP_Pi_Particle_Stream';

    this.substrateCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(9.5, 23.0, 4.0),
      new THREE.Vector3(7.2, 20.0, 2.5),
      new THREE.Vector3(5.2, 18.2, 1.4),
      new THREE.Vector3(3.6, 17.0, 0.5)
    ]);

    const subGeo = new THREE.SphereGeometry(0.24, 10, 8);
    const subMat = new THREE.MeshStandardMaterial({
      color: 0xF28482,
      roughness: 0.25,
      metalness: 0.08,
      transparent: true,
      opacity: 0.95
    });

    this.substrateParticles = [];
    const count = 6;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(subGeo, subMat.clone());
      const u = i / count;
      mesh.position.copy(this.substrateCurve.getPointAt(u));
      this.substrateParticleGroup.add(mesh);

      this.substrateParticles.push({
        mesh,
        u: u,
        speed: 0.18
      });
    }

    this.assemblyGroup.add(this.substrateParticleGroup);
  }

  /**
   * Radial ATP Energy Synthesis Burst System
   */
  buildATPBurstSystem() {
    this.atpBurstGroup = new THREE.Group();
    this.atpBurstGroup.name = 'ATP_Energy_Burst_System';

    const burstGeo = new THREE.SphereGeometry(0.20, 8, 8);
    const burstMat = new THREE.MeshBasicMaterial({
      color: 0xFFE066,
      transparent: true,
      opacity: 0.0
    });

    this.atpBurstParticles = [];
    for (let i = 0; i < 16; i++) {
      const mesh = new THREE.Mesh(burstGeo, burstMat.clone());
      mesh.visible = false;
      this.atpBurstGroup.add(mesh);

      this.atpBurstParticles.push({
        mesh,
        active: false,
        life: 0.0,
        velocity: new THREE.Vector3()
      });
    }

    this.assemblyGroup.add(this.atpBurstGroup);
  }

  triggerATPBurst() {
    if (this.atpHaloSprite) {
      this.atpHaloSprite.scale.set(9.2, 9.2, 1.0);
    }

    if (this.pieceATP_Product && this.pieceATP_Product.material) {
      this.pieceATP_Product.material.emissiveIntensity = 2.4;
      setTimeout(() => {
        if (this.pieceATP_Product && this.pieceATP_Product.material) {
          this.pieceATP_Product.material.emissiveIntensity = 0.95;
        }
      }, 600);
    }

    const basePos = this.origPositions.get('Piece_ATP_Product') || new THREE.Vector3(5.6, 16.2, 0.4);
    const dissoc = this.dissocVectors['Piece_ATP_Product'] || new THREE.Vector3(8.0, 6.0, 0);
    const cx = basePos.x + dissoc.x * this.explodedProgress;
    const cy = basePos.y + dissoc.y * this.explodedProgress;
    const cz = basePos.z + dissoc.z * this.explodedProgress;

    this.atpBurstParticles.forEach((p) => {
      p.active = true;
      p.life = 1.0;
      p.mesh.visible = true;
      p.mesh.position.set(cx, cy, cz);
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.6 + Math.random() * 2.2;
      p.velocity.set(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed * 0.8 + 0.4,
        (Math.random() - 0.3) * 1.8
      );
    });
  }

  transitionCamera(targetPos, sphericalConfig, durationSec = 1.4, onComplete = null) {
    this.cameraTransition.active = true;
    this.cameraTransition.startTarget.copy(this.target);
    this.cameraTransition.endTarget.copy(targetPos);
    this.cameraTransition.startSpherical = { ...this.spherical };
    this.cameraTransition.endSpherical = {
      radius: sphericalConfig.radius !== undefined ? sphericalConfig.radius : this.spherical.radius,
      theta: sphericalConfig.theta !== undefined ? sphericalConfig.theta : this.spherical.theta,
      phi: sphericalConfig.phi !== undefined ? sphericalConfig.phi : this.spherical.phi
    };
    this.cameraTransition.startTime = performance.now();
    this.cameraTransition.duration = durationSec;
    this.cameraTransition.onComplete = onComplete;
  }

  setExplanationStep(stepIndex) {
    this.explanationStep = stepIndex;
    this.isExplanatoryTrace = stepIndex > 0 && stepIndex < 5;

    if (stepIndex === 0) {
      // Return to full theatrical overview and run continuously without waiting!
      this.isPaused = false;
      this.rotationSpeed = 1.0;
      this.selectComponent('atp_synthase_holoenzyme');
      this.transitionCamera(
        new THREE.Vector3(0, 6.5, 0),
        { radius: 46, theta: 0.05, phi: 1.48 },
        1.4
      );
      return;
    }

    if (stepIndex === 1) {
      // Stage 1: Holoenzyme Architecture & Bioenergetic Role (Wide macro zoom-out)
      this.isPaused = false;
      this.rotationSpeed = 1.0;
      this.selectComponent('atp_synthase_holoenzyme');
      this.transitionCamera(
        new THREE.Vector3(0, 6.5, 0),
        { radius: 52, theta: 0.08, phi: 1.48 },
        1.4
      );
    } else if (stepIndex === 2) {
      // Stage 2: Proton Motive Force Influx (Bottom membrane focus, rotor stationary)
      this.isPaused = false;
      this.selectComponent('proton_flux');
      this.transitionCamera(
        new THREE.Vector3(1.5, -3.8, 0.5),
        { radius: 21, theta: 0.06, phi: 1.52 },
        1.4
      );
    } else if (stepIndex === 3) {
      // Stage 3: Turbine Rotation & Central Shaft Drive (Middle focus, rotor accelerating)
      this.isPaused = false;
      this.selectComponent('central_rotor');
      this.transitionCamera(
        new THREE.Vector3(0.5, 4.2, 1.0),
        { radius: 25, theta: 0.10, phi: 1.40 },
        1.4
      );
    } else if (stepIndex === 4) {
      // Stage 4: Substrate Capture in Catalytic Head (F1 crown, Loose pocket)
      this.isPaused = false;
      this.selectComponent('adp_pi_substrates');
      this.setBoyerState('loose');
      this.transitionCamera(
        new THREE.Vector3(2.8, 14.5, 1.8),
        { radius: 22, theta: 0.13, phi: 1.32 },
        1.4
      );
    } else if (stepIndex === 5) {
      // Stage 5: Catalytic Condensation & Energy Release (Close cleft focus, Tight -> Open)
      this.isPaused = false;
      this.selectComponent('atp_product');
      this.setBoyerState('tight');
      this.transitionCamera(
        new THREE.Vector3(4.8, 15.8, 1.2),
        { radius: 16, theta: 0.16, phi: 1.34 },
        1.2,
        () => {
          setTimeout(() => {
            this.triggerATPBurst();
            this.setBoyerState('open');
            this.atpCount += 3;
            this.hCount += 10;
          }, 350);
        }
      );
    } else if (stepIndex === 6) {
      // Stage 6: Continuous Rotary Dynamo (Full grand overview)
      this.selectComponent('atp_synthase_holoenzyme');
      this.transitionCamera(
        new THREE.Vector3(0, 6.5, 0),
        { radius: 46, theta: 0.05, phi: 1.48 },
        1.6,
        () => {
          this.explanationStep = 0;
          this.isExplanatoryTrace = false;
          this.rotationSpeed = 1.0;
          this.isPaused = false;
        }
      );
    }
  }

  buildContactShadow() {
    const shadowGeo = new THREE.PlaneGeometry(60, 60);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(40, 50, 40, 0.26)');
    grad.addColorStop(0.5, 'rgba(40, 50, 40, 0.08)');
    grad.addColorStop(1, 'rgba(40, 50, 40, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });

    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -7.0, 0);
    this.rootGroup.add(shadowMesh);
  }

  /**
   * Loads the 9 assembled pieces from /models/6RKW_assembled_pieces.glb
   * applying authentic PBR materials conforming to the editorial artwork:
   * - c-ring: Golden Yellow (#E5A93C)
   * - a-subunit: Burnt Orange (#C85A32)
   * - Peripheral Stalk: Royal Purple (#6A0DAD)
   * - Central Shaft: Vivid Emerald (#06D6A0)
   * - F1 Alpha: Soft Rose (#D45D8C)
   * - F1 Beta: Deep Crimson (#9E1B46)
   * - Asp61 Carboxylates: Luminous Cyan (#00F5D4)
   * - ADP + Pi Substrates: Soft Coral / Peach (#F28482)
   * - ATP Product: Radiant Gold (#FFE066) with luminous sunburst halo
   */
  loadMolecularATPSynthase() {
    const loader = new GLTFLoader();
    const glbUrl = '/prokaryote/models/6RKW_assembled_pieces.glb';

    loader.load(
      glbUrl,
      (gltf) => {
        const root = gltf.scene;
        this.clickableMeshes = [];

        root.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            this.origPositions.set(child.name, child.position.clone());

            let baseCol = 0xffb703;
            let roughness = 0.35;
            let metalness = 0.10;
            let emissiveCol = 0x000000;
            let emissiveInt = 0.0;

            if (child.name.includes('Substrates') || child.name.includes('ADP')) {
              // Piece_ADP_Pi_Substrates: Peach / Coral #F28482
              baseCol = 0xF28482;
              roughness = 0.28;
              metalness = 0.06;
              this.pieceADP_Pi_Substrates = child;
              child.userData = { key: 'adp_pi_substrates', name: 'ADP + Pi (Substrates)', col: '#F28482' };
            } else if (child.name.includes('Product') || child.name.includes('Piece_ATP_Product')) {
              // Piece_ATP_Product: Radiant Gold #FFE066 with sunburst emissive halo
              baseCol = 0xFFE066;
              emissiveCol = 0xFFA000;
              emissiveInt = 0.95;
              roughness = 0.18;
              metalness = 0.15;
              this.pieceATP_Product = child;
              child.userData = { key: 'atp_product', name: 'ATP (Product)', col: '#FFE066' };
              this.createATPSunburstHalo(child.position);
            } else if (child.name.includes('Asp61')) {
              // Piece_ATP_Asp61_Sites: Luminous Cyan #00F5D4
              baseCol = 0x00F5D4;
              emissiveCol = 0x06D6A0;
              emissiveInt = 0.90;
              roughness = 0.20;
              metalness = 0.12;
              this.pieceAsp61_Sites = child;
              child.userData = { key: 'asp61_sites', name: 'c-Ring Asp61 Protonation Sites', col: '#00F5D4' };
            } else if (child.name.includes('Alpha')) {
              // Piece_ATP_F1_Alpha: Soft Rose / Orchid Pink #D45D8C
              baseCol = 0xD45D8C;
              roughness = 0.38;
              metalness = 0.08;
              this.pieceF1_Alpha = child;
              child.userData = { key: 'f1_alpha', name: 'F1 Alpha Regulatory Subunits (3x α)', col: '#D45D8C' };
            } else if (child.name.includes('Beta')) {
              // Piece_ATP_F1_Beta: Deep Crimson / Ruby Red #9E1B46
              baseCol = 0x9E1B46;
              roughness = 0.35;
              metalness = 0.12;
              this.pieceF1_Beta = child;
              child.userData = { key: 'f1_beta', name: 'F1 Beta Catalytic Subunits (3x β)', col: '#9E1B46' };
            } else if (child.name.includes('Central_Rotor') || child.name.includes('Rotor')) {
              // Piece_ATP_Central_Rotor: Vivid Emerald Green #06D6A0
              baseCol = 0x06D6A0;
              roughness = 0.30;
              metalness = 0.10;
              emissiveCol = 0x06D6A0;
              emissiveInt = 0.18;
              this.pieceCentral_Rotor = child;
              child.userData = { key: 'central_rotor', name: 'Central Shaft (γ, ε Rotor)', col: '#06D6A0' };
            } else if (child.name.includes('C_Ring') || child.name.includes('Fo_C')) {
              // Piece_ATP_Fo_C_Ring: Golden Yellow #E5A93C
              baseCol = 0xE5A93C;
              roughness = 0.32;
              metalness = 0.10;
              this.pieceFo_C_Ring = child;
              child.userData = { key: 'fo_c_ring', name: 'c-Ring (Translocating Rotor)', col: '#E5A93C' };
            } else if (child.name.includes('A_Subunit') || child.name.includes('Fo_A')) {
              // Piece_ATP_Fo_A_Subunit: Burnt Orange / Terracotta #C85A32
              baseCol = 0xC85A32;
              roughness = 0.35;
              metalness = 0.10;
              this.pieceFo_A_Subunit = child;
              child.userData = { key: 'fo_a_subunit', name: 'a-Subunit (Stator Pathway)', col: '#C85A32' };
            } else if (child.name.includes('Stalk') || child.name.includes('Peripheral')) {
              // Piece_ATP_Peripheral_Stalk: Royal Purple / Violet #6A0DAD
              baseCol = 0x6A0DAD;
              roughness = 0.35;
              metalness = 0.12;
              this.piecePeripheral_Stalk = child;
              child.userData = { key: 'peripheral_stalk', name: 'Peripheral Stalk (b, δ Stator)', col: '#6A0DAD' };
            }

            const pbrMat = new THREE.MeshStandardMaterial({
              color: baseCol,
              roughness: roughness,
              metalness: metalness,
              side: THREE.DoubleSide
            });
            if (emissiveInt > 0) {
              pbrMat.emissive = new THREE.Color(emissiveCol);
              pbrMat.emissiveIntensity = emissiveInt;
            }
            child.material = pbrMat;
            this.clickableMeshes.push(child);
          }
        });

        this.assemblyGroup.add(root);
        this.setupATPLandmarks();
        this.initLabels();
        this.animate();
      },
      undefined,
      (err) => {
        console.error('[!] Failed to load 6RKW_assembled_pieces.glb:', err);
      }
    );
  }

  /**
   * Radiant golden sunburst halo behind the synthesized ATP product cluster
   */
  createATPSunburstHalo(pos) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0.0, 'rgba(255, 230, 102, 0.95)');
    grad.addColorStop(0.3, 'rgba(255, 183, 3, 0.65)');
    grad.addColorStop(0.7, 'rgba(255, 140, 0, 0.25)');
    grad.addColorStop(1.0, 'rgba(255, 140, 0, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const haloTex = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: haloTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.atpHaloSprite = new THREE.Sprite(spriteMat);
    this.atpHaloSprite.scale.set(4.8, 4.8, 1.0);
    this.atpHaloSprite.position.set(pos.x, pos.y, pos.z - 0.4);
    this.assemblyGroup.add(this.atpHaloSprite);
  }

  /**
   * Setup 3D leader anchors matching the exact 9 annotations in the artwork
   * Each landmark is tied directly to its physical component piece and has
   * an authentic surface contact coordinate (baseOffset) that moves with exploded view.
   */
  setupATPLandmarks() {
    this.atpLandmarks = [
      {
        id: 'f1_catalytic_head',
        name: 'F1 CATALYTIC HEAD (α3β3 subunits)',
        badge: 'α₃β₃',
        col: '#9E1B46',
        targetPieceName: 'Piece_ATP_F1_Beta',
        baseOffset: new THREE.Vector3(2.2, 13.5, 2.4),
        focusDist: 30,
        subpills: [
          { key: 'boyer_open', label: 'Open (O)', state: 'open' },
          { key: 'boyer_loose', label: 'Loose (L)', state: 'loose' },
          { key: 'boyer_tight', label: 'Tight (T)', state: 'tight' }
        ]
      },
      {
        id: 'adp_pi_substrates',
        name: 'ADP + Pi (substrates)',
        badge: 'ADP+Pᵢ',
        col: '#F28482',
        targetPieceName: 'Piece_ADP_Pi_Substrates',
        baseOffset: new THREE.Vector3(3.6, 17.8, 0.4),
        focusDist: 18,
        subpills: [{ key: 'adp_pi_substrates', label: 'Reactants', state: null }]
      },
      {
        id: 'atp_product',
        name: 'ATP (product)',
        badge: 'ATP',
        col: '#E5A93C',
        targetPieceName: 'Piece_ATP_Product',
        baseOffset: new THREE.Vector3(5.6, 16.2, 0.4),
        focusDist: 18,
        subpills: [{ key: 'atp_product', label: 'Energy Burst', state: null }]
      },
      {
        id: 'central_rotor',
        name: 'Central shaft (γ, ε rotor)',
        badge: 'γε',
        col: '#06D6A0',
        targetPieceName: 'Piece_ATP_Central_Rotor',
        baseOffset: new THREE.Vector3(0.5, 5.2, 1.4),
        focusDist: 26,
        subpills: [{ key: 'central_rotor', label: 'Drive Axle', state: null }]
      },
      {
        id: 'peripheral_stalk',
        name: 'Peripheral stalk (b, δ, d stator)',
        badge: 'b₂δ',
        col: '#6A0DAD',
        targetPieceName: 'Piece_ATP_Peripheral_Stalk',
        baseOffset: new THREE.Vector3(-3.8, 8.5, 0.8),
        focusDist: 32,
        subpills: [{ key: 'peripheral_stalk', label: 'Stator Arm', state: null }]
      },
      {
        id: 'fo_c_ring',
        name: 'c-ring (translocating rotor)',
        badge: 'c₁₀',
        col: '#E5A93C',
        targetPieceName: 'Piece_ATP_Fo_C_Ring',
        baseOffset: new THREE.Vector3(-1.2, 0.0, 2.4),
        focusDist: 24,
        subpills: [{ key: 'fo_c_ring', label: '10× Subunits', state: null }]
      },
      {
        id: 'fo_a_subunit',
        name: 'a-subunit (stator pathway)',
        badge: 'a',
        col: '#C85A32',
        targetPieceName: 'Piece_ATP_Fo_A_Subunit',
        baseOffset: new THREE.Vector3(3.6, 0.0, 1.6),
        focusDist: 22,
        subpills: [{ key: 'fo_a_subunit', label: 'Half-Channels', state: null }]
      },
      {
        id: 'membrane_bilayer',
        name: 'MEMBRANE (Bilinear lipid cross-section)',
        badge: 'LIPID',
        col: '#64748B',
        targetPieceName: null,
        baseOffset: new THREE.Vector3(12.0, 0.0, 2.2),
        focusDist: 34,
        subpills: [{ key: 'membrane_bilayer', label: 'Bilayer', state: null }]
      },
      {
        id: 'proton_flux',
        name: 'Proton (H⁺) flux',
        badge: 'H⁺',
        col: '#FF4D00',
        targetPieceName: null,
        baseOffset: new THREE.Vector3(1.6, -4.2, 0.6),
        focusDist: 22,
        subpills: [{ key: 'proton_flux', label: 'Δp Influx', state: null }]
      }
    ];

    while (this.labelAnchorLayer.children.length > 0) {
      this.labelAnchorLayer.remove(this.labelAnchorLayer.children[0]);
    }
    this.labelAnchors = {};

    this.atpLandmarks.forEach((lm) => {
      const anchor = new THREE.Object3D();
      const pos = lm.baseOffset.clone();
      if (lm.targetPieceName && this.dissocVectors[lm.targetPieceName]) {
        pos.addScaledVector(this.dissocVectors[lm.targetPieceName], this.explodedProgress);
      }
      anchor.position.copy(pos);
      anchor.userData = { id: lm.id, landmark: lm };
      this.labelAnchorLayer.add(anchor);
      this.labelAnchors[lm.id] = anchor;
    });
  }

  initLabels() {
    this.svgOverlay = document.getElementById('atp-svg-overlay');
    this.labelsContainer = document.getElementById('atp-labels-container');
    if (!this.svgOverlay || !this.labelsContainer) return;

    this.labelsContainer.innerHTML = '';
    this.labels = [];

    this.atpLandmarks.forEach((lm) => {
      const el = document.createElement('div');
      el.className = 'motor-tag-badge atp-tag-badge';
      el.dataset.id = lm.id;

      let subpillsHtml = '';
      if (lm.subpills && lm.subpills.length > 0) {
        subpillsHtml = `<div class="atp-subpill-row">` +
          lm.subpills.map(sp => `
            <button class="trna-subpill-btn atp-subpill-btn" data-key="${sp.key}" data-parent="${lm.id}">
              ${sp.label}
            </button>
          `).join('') +
          `</div>`;
      }

      el.innerHTML = `
        <div class="motor-tag-content">
          <span class="motor-tag-pin" style="background:${lm.col}; color:#FFFFFF">${lm.badge}</span>
          <span class="motor-tag-label">${lm.name}</span>
        </div>
        ${subpillsHtml}
      `;

      el.addEventListener('click', (e) => {
        const subBtn = e.target.closest('.atp-subpill-btn');
        if (subBtn) {
          e.stopPropagation();
          const key = subBtn.dataset.key;
          this.selectComponent(lm.id);
          this.focusComponent(lm.id);
          if (key.startsWith('boyer_')) {
            const st = key.replace('boyer_', '');
            this.setBoyerState(st);
          }
          return;
        }
        this.selectComponent(lm.id);
        this.focusComponent(lm.id);
      });

      this.labelsContainer.appendChild(el);
      this.labels.push({ el, landmark: lm });
    });
  }

  setupInteraction() {
    this.canvas.addEventListener('pointerdown', (e) => {
      this.isPointerDown = true;
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;
    });

    window.addEventListener('pointermove', this.onPointerMoveBound);
    window.addEventListener('pointerup', this.onPointerUpBound);

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY > 0 ? 1.08 : 0.92;
      this.spherical.radius = THREE.MathUtils.clamp(
        this.spherical.radius * zoomFactor,
        18,
        140
      );
      this.updateCameraPosition();
    }, { passive: false });

    // Keyboard navigation (WASD, Arrows, Space, C, Shift, R)
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      target: this.target,
      spherical: this.spherical,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateLeadersAndOverlay()
    });

    this.canvas.addEventListener('click', (e) => {
      if (!this.clickableMeshes.length) return;
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.clickableMeshes, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData && hit.userData.key) {
          this.selectComponent(hit.userData.key);
          this.focusComponent(hit.userData.key);
        }
      }
    });
  }

  onPointerMove(e) {
    if (!this.isPointerDown) return;
    const dx = e.clientX - this.pointerStart.x;
    const dy = e.clientY - this.pointerStart.y;
    this.pointerStart.x = e.clientX;
    this.pointerStart.y = e.clientY;

    this.spherical.theta -= dx * 0.007;
    this.spherical.phi = THREE.MathUtils.clamp(
      this.spherical.phi - dy * 0.007,
      0.1,
      Math.PI - 0.1
    );
    this.updateCameraPosition();
  }

  onPointerUp() {
    this.isPointerDown = false;
  }

  updateCameraPosition() {
    if (!this.camera) return;
    const sinPhiRadius = this.spherical.radius * Math.sin(this.spherical.phi);
    this.camera.position.x = this.target.x + sinPhiRadius * Math.sin(this.spherical.theta);
    this.camera.position.y = this.target.y + this.spherical.radius * Math.cos(this.spherical.phi);
    this.camera.position.z = this.target.z + sinPhiRadius * Math.cos(this.spherical.theta);
    this.camera.lookAt(this.target);
  }

  onWindowResize() {
    this.handleResize();
  }

  handleResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const rect = this.container.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : window.innerWidth;
    const h = rect.height > 0 ? rect.height : (window.innerHeight - 180);

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);

    if (this.svgOverlay) {
      this.svgOverlay.setAttribute('viewBox', `0 0 ${w} ${h}`);
    }
  }

  setExplodedProgress(val) {
    this.explodedProgress = THREE.MathUtils.clamp(val, 0, 1);
    const t = this.explodedProgress;

    const pieces = [
      { obj: this.pieceF1_Alpha, name: 'Piece_ATP_F1_Alpha' },
      { obj: this.pieceF1_Beta, name: 'Piece_ATP_F1_Beta' },
      { obj: this.pieceCentral_Rotor, name: 'Piece_ATP_Central_Rotor' },
      { obj: this.pieceFo_C_Ring, name: 'Piece_ATP_Fo_C_Ring' },
      { obj: this.pieceAsp61_Sites, name: 'Piece_ATP_Asp61_Sites' },
      { obj: this.pieceFo_A_Subunit, name: 'Piece_ATP_Fo_A_Subunit' },
      { obj: this.piecePeripheral_Stalk, name: 'Piece_ATP_Peripheral_Stalk' },
      { obj: this.pieceADP_Pi_Substrates, name: 'Piece_ADP_Pi_Substrates' },
      { obj: this.pieceATP_Product, name: 'Piece_ATP_Product' }
    ];

    pieces.forEach(({ obj, name }) => {
      if (obj && this.origPositions.has(name)) {
        const orig = this.origPositions.get(name);
        const dissoc = this.dissocVectors[name] || new THREE.Vector3(0, 0, 0);
        obj.position.lerpVectors(orig, orig.clone().addScaledVector(dissoc, t), 1.0);
      }
    });

    if (this.atpHaloSprite && this.origPositions.has('Piece_ATP_Product')) {
      const orig = this.origPositions.get('Piece_ATP_Product');
      const dissoc = this.dissocVectors['Piece_ATP_Product'];
      this.atpHaloSprite.position.lerpVectors(
        new THREE.Vector3(orig.x, orig.y, orig.z - 0.4),
        new THREE.Vector3(orig.x + dissoc.x * t, orig.y + dissoc.y * t, orig.z - 0.4),
        1.0
      );
    }

    // Synchronize 3D leader anchors directly with their respective exploding element pieces
    this.atpLandmarks.forEach((lm) => {
      const anchor = this.labelAnchors[lm.id];
      if (anchor && lm.baseOffset) {
        const pos = lm.baseOffset.clone();
        if (lm.targetPieceName && this.dissocVectors[lm.targetPieceName]) {
          pos.addScaledVector(this.dissocVectors[lm.targetPieceName], t);
        }
        anchor.position.copy(pos);
      }
    });

    // Dynamic camera target and radius tracking so the exploded assembly stays centered
    this.target.set(0, 6.5 + t * 4.0, 0);
    this.spherical.radius = this.baseRadius * (1.0 + t * 0.52);
    this.updateCameraPosition();
  }

  setPMFVoltage(val) {
    this.pmfVoltage = THREE.MathUtils.clamp(val, -220, -80);
    this.rotationSpeed = THREE.MathUtils.mapLinear(Math.abs(this.pmfVoltage), 80, 220, 0.4, 2.2);
  }

  setMode(mode) {
    this.mode = mode === 'hydrolysis' ? 'hydrolysis' : 'synthesis';
  }

  setSubunitFilter(filterKey) {
    this.activeSubunitFilter = filterKey;
    const pieceMap = {
      'f1_beta': [this.pieceF1_Beta],
      'f1_alpha': [this.pieceF1_Alpha],
      'f1_catalytic_head': [this.pieceF1_Alpha, this.pieceF1_Beta],
      'central_rotor': [this.pieceCentral_Rotor],
      'fo_c_ring': [this.pieceFo_C_Ring, this.pieceAsp61_Sites],
      'fo_a_subunit': [this.pieceFo_A_Subunit],
      'peripheral_stalk': [this.piecePeripheral_Stalk],
      'stator_bracket': [this.pieceFo_A_Subunit, this.piecePeripheral_Stalk],
      'adp_pi_substrates': [this.pieceADP_Pi_Substrates],
      'atp_product': [this.pieceATP_Product]
    };

    const allPieces = [
      this.pieceF1_Alpha,
      this.pieceF1_Beta,
      this.pieceCentral_Rotor,
      this.pieceFo_C_Ring,
      this.pieceFo_A_Subunit,
      this.piecePeripheral_Stalk,
      this.pieceAsp61_Sites,
      this.pieceADP_Pi_Substrates,
      this.pieceATP_Product
    ];

    allPieces.forEach(p => {
      if (!p) return;
      let isVisible = true;
      if (filterKey !== 'all') {
        const activeGroup = pieceMap[filterKey] || [];
        isVisible = activeGroup.includes(p);
      }
      p.visible = true;
      p.material.transparent = !isVisible;
      p.material.opacity = isVisible ? 1.0 : 0.20;
    });
  }

  selectComponent(key) {
    // Map aliases
    let canonicalKey = key;
    if (key === 'f1_catalytic_head') canonicalKey = 'f1_catalytic_head';
    else if (key === 'stator_bracket') canonicalKey = 'peripheral_stalk';
    else if (key === 'catalytic_nucleotides') canonicalKey = 'atp_product';

    this.selectedComponentKey = canonicalKey;
    const meta = this.componentsMeta[canonicalKey] || this.componentsMeta['atp_synthase_holoenzyme'];
    this.onSelectComponent(meta, canonicalKey);

    if (this.labels) {
      this.labels.forEach(({ el, landmark }) => {
        if (landmark.id === canonicalKey || (canonicalKey === 'f1_beta' && landmark.id === 'f1_catalytic_head')) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
  }

  focusComponent(key) {
    let targetPos = new THREE.Vector3(0, 6.5, 0);
    let targetDist = 42;

    const lm = this.atpLandmarks.find(l => l.id === key);
    if (lm && lm.baseOffset) {
      targetPos.copy(lm.baseOffset);
      if (lm.targetPieceName && this.dissocVectors[lm.targetPieceName]) {
        targetPos.addScaledVector(this.dissocVectors[lm.targetPieceName], this.explodedProgress);
      }
      targetDist = lm.focusDist || 28;
    } else if (key === 'atp_synthase_holoenzyme') {
      targetPos.set(0, 6.5, 0);
      targetDist = this.baseRadius * (1.0 + this.explodedProgress * 0.48);
    } else if (key === 'f1_beta' || key === 'f1_alpha' || key === 'f1_catalytic_head') {
      targetPos.set(2.2, 13.5, 2.4);
      targetPos.addScaledVector(this.dissocVectors['Piece_ATP_F1_Beta'], this.explodedProgress);
      targetDist = 30;
    } else if (key === 'stator_bracket') {
      targetPos.set(-3.8, 8.5, 0.8);
      targetPos.addScaledVector(this.dissocVectors['Piece_ATP_Peripheral_Stalk'], this.explodedProgress);
      targetDist = 32;
    } else if (key === 'catalytic_nucleotides') {
      targetPos.set(5.6, 16.2, 0.4);
      targetPos.addScaledVector(this.dissocVectors['Piece_ATP_Product'], this.explodedProgress);
      targetDist = 20;
    }

    this.target.copy(targetPos);
    this.spherical.radius = targetDist;
    this.updateCameraPosition();
  }

  setBoyerState(state) {
    this.boyerState = state;
    this.onBoyerStateUpdate(state);

    if (this.pieceF1_Beta && this.pieceF1_Beta.material) {
      if (state === 'open') {
        this.pieceF1_Beta.material.color.setHex(0xE76F51); // Warm Coral Open
      } else if (state === 'loose') {
        this.pieceF1_Beta.material.color.setHex(0x2A9D8F); // Jade Loose
      } else if (state === 'tight') {
        this.pieceF1_Beta.material.color.setHex(0x9E1B46); // Deep Crimson Tight
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  toggleLabels() {
    this.showLabels = !this.showLabels;
    if (this.labelsContainer) {
      this.labelsContainer.style.display = this.showLabels ? 'block' : 'none';
    }
    if (this.svgOverlay) {
      this.svgOverlay.style.display = this.showLabels ? 'block' : 'none';
    }
    return this.showLabels;
  }

  updateLeadersAndOverlay() {
    if (!this.svgOverlay || !this.showLabels || !this.camera || !this.container) return;
    const rect = this.container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    let svgHtml = '';

    this.labels.forEach(({ el, landmark }) => {
      const anchor = this.labelAnchors[landmark.id];
      if (!anchor) return;

      // Ensure anchor position is always locked to the exploding element piece
      if (landmark.baseOffset) {
        const pos = landmark.baseOffset.clone();
        if (landmark.targetPieceName && this.dissocVectors[landmark.targetPieceName]) {
          pos.addScaledVector(this.dissocVectors[landmark.targetPieceName], this.explodedProgress);
        }
        anchor.position.copy(pos);
      }

      const worldPos = new THREE.Vector3();
      anchor.getWorldPosition(worldPos);

      const eyeDir = new THREE.Vector3().subVectors(worldPos, this.camera.position);
      if (eyeDir.dot(this.camera.getWorldDirection(new THREE.Vector3())) < 0) {
        el.style.opacity = '0';
        return;
      }

      const screenPos = worldPos.clone().project(this.camera);
      const sx = ((screenPos.x + 1) / 2) * w;
      const sy = ((-screenPos.y + 1) / 2) * h;

      // Position badge on the side matching its biological position
      const isRightSide = worldPos.x >= 0;
      const badgeOffsetX = isRightSide ? 75 : -170;
      const badgeOffsetY = sy > h / 2 ? 30 : -30;
      const bx = THREE.MathUtils.clamp(sx + badgeOffsetX, 30, w - 210);
      const by = THREE.MathUtils.clamp(sy + badgeOffsetY, 55, h - 85);

      el.style.left = `${bx}px`;
      el.style.top = `${by}px`;
      el.style.opacity = '1';

      const isActive = this.selectedComponentKey === landmark.id;
      const strokeCol = landmark.col || '#C87550';
      const strokeWidth = isActive ? 1.8 : 1.1;
      const strokeOpacity = isActive ? 0.95 : 0.60;

      svgHtml += `
        <line x1="${sx}" y1="${sy}" x2="${bx + (isRightSide ? 20 : 130)}" y2="${by + 16}"
              stroke="${strokeCol}" stroke-width="${strokeWidth}" stroke-opacity="${strokeOpacity}"
              stroke-dasharray="${isActive ? 'none' : '3,2'}"/>
        <circle cx="${sx}" cy="${sy}" r="${isActive ? 4.5 : 3.2}" fill="${strokeCol}" stroke="#FFFFFF" stroke-width="1.2"/>
      `;

      if (isActive) {
        svgHtml += `
          <circle cx="${sx}" cy="${sy}" r="7" fill="none" stroke="${strokeCol}" stroke-width="1.2" opacity="0.8">
            <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite"/>
          </circle>
        `;
      }
    });

    this.svgOverlay.innerHTML = svgHtml;
  }

  animate() {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(() => this.animate());

    const delta = 0.016;
    if (this.keyboardFlight) {
      this.keyboardFlight.update(delta);
    }
    const time = performance.now() * 0.001;

    // Smooth Camera Transition Handling
    if (this.cameraTransition.active) {
      const elapsed = (performance.now() - this.cameraTransition.startTime) / 1000;
      const progress = Math.min(1.0, elapsed / this.cameraTransition.duration);
      // Smoothstep easing (3t^2 - 2t^3)
      const ease = progress * progress * (3 - 2 * progress);

      this.target.lerpVectors(this.cameraTransition.startTarget, this.cameraTransition.endTarget, ease);
      this.spherical.radius = THREE.MathUtils.lerp(
        this.cameraTransition.startSpherical.radius,
        this.cameraTransition.endSpherical.radius,
        ease
      );
      this.spherical.theta = THREE.MathUtils.lerp(
        this.cameraTransition.startSpherical.theta,
        this.cameraTransition.endSpherical.theta,
        ease
      );
      this.spherical.phi = THREE.MathUtils.lerp(
        this.cameraTransition.startSpherical.phi,
        this.cameraTransition.endSpherical.phi,
        ease
      );
      this.updateCameraPosition();

      if (progress >= 1.0) {
        this.cameraTransition.active = false;
        if (this.cameraTransition.onComplete) {
          const cb = this.cameraTransition.onComplete;
          this.cameraTransition.onComplete = null;
          cb();
        }
      }
    }

    if (!this.isPaused) {
      let speedFactor = this.rotationSpeed;
      if (this.explanationStep === 1) {
        // Step 1: Paused / stationary so user sees protons entering before rotor starts moving!
        speedFactor = 0.0;
      } else if (this.explanationStep === 2) {
        // Step 2: Smooth acceleration as protons turn the turbine
        speedFactor = 0.65;
      } else if (this.explanationStep === 3) {
        speedFactor = 0.75;
      } else if (this.explanationStep === 4) {
        speedFactor = 0.85;
      } else {
        // Continuous steady-state running
        speedFactor = 1.0 * this.rotationSpeed;
      }

      const dirSign = this.mode === 'synthesis' ? 1.0 : -1.0;
      const rotSpeed = 2.4 * speedFactor * dirSign * delta;
      this.rotorAngle += rotSpeed;

      // Authentic Rotary Motion:
      // The c10-ring and the central shaft rotate around the vertical Y-axis
      if (this.pieceCentral_Rotor) {
        this.pieceCentral_Rotor.rotation.y = this.rotorAngle;
      }
      if (this.pieceFo_C_Ring) {
        this.pieceFo_C_Ring.rotation.y = this.rotorAngle;
      }
      if (this.pieceAsp61_Sites) {
        this.pieceAsp61_Sites.rotation.y = this.rotorAngle;
      }

      // Rotate shaft guide arrow indicator
      if (this.shaftCurvedArrows) {
        this.shaftCurvedArrows.rotation.y = this.rotorAngle;
      }

      // Pulse proton flux arrows to visualize dynamic flow
      this.protonArrows.forEach((arrow, i) => {
        const pulse = 0.55 + 0.45 * Math.sin(time * 6.0 + i * 1.5);
        if (arrow.userData.mat) {
          arrow.userData.mat.opacity = pulse;
        }
      });

      // Pulse synthesized ATP sunburst halo
      if (this.atpHaloSprite) {
        const haloScale = 4.8 + Math.sin(time * 4.0) * 0.35;
        this.atpHaloSprite.scale.set(haloScale, haloScale, 1.0);
      }

      // Boyer 3-state progression every 120 degrees (2*PI/3 rad) during steady state
      if (this.explanationStep === 0 || this.explanationStep === 5) {
        const normAngle = ((this.rotorAngle % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
        const stateIndex = Math.floor(normAngle / ((2 * Math.PI) / 3));

        let currentState = 'tight';
        if (stateIndex === 0) currentState = 'open';
        else if (stateIndex === 1) currentState = 'loose';
        else currentState = 'tight';

        if (currentState !== this.boyerState) {
          this.setBoyerState(currentState);
          if (this.mode === 'synthesis' && currentState === 'open') {
            this.atpCount += 3;
            this.hCount += 10;
          }
        }
      }
    }

    // Animate Traveling Proton Stream
    if (this.protonParticles && this.protonParticles.length > 0) {
      const protonSpeedMultiplier = this.explanationStep === 1 ? 1.6 : 1.0;
      this.protonParticles.forEach((p) => {
        p.u = (p.u + p.speed * delta * protonSpeedMultiplier) % 1.0;
        const curve = this.protonCurves[p.curveIndex];
        if (curve) {
          const pt = curve.getPointAt(p.u);
          p.mesh.position.copy(pt);
          const fade = Math.sin(p.u * Math.PI);
          const sc = 0.7 + 0.5 * fade;
          p.mesh.scale.set(sc, sc, sc);
          if (p.mesh.material) {
            p.mesh.material.opacity = 0.25 + 0.75 * fade;
          }
        }
      });
    }

    // Animate Traveling Substrate Stream (ADP + Pi entering catalytic cleft)
    if (this.substrateParticles && this.substrateParticles.length > 0) {
      const shouldStreamSubstrates = this.explanationStep === 0 || this.explanationStep >= 3;
      this.substrateParticles.forEach((p) => {
        if (shouldStreamSubstrates) {
          p.u = (p.u + p.speed * delta * (this.explanationStep === 3 ? 1.5 : 0.9)) % 1.0;
          if (this.substrateCurve) {
            const pt = this.substrateCurve.getPointAt(p.u);
            p.mesh.position.copy(pt);
            const fade = Math.sin(p.u * Math.PI);
            p.mesh.visible = true;
            p.mesh.scale.set(fade, fade, fade);
          }
        } else {
          p.mesh.visible = false;
        }
      });
    }

    // Animate ATP Burst Particles
    if (this.atpBurstParticles && this.atpBurstParticles.length > 0) {
      this.atpBurstParticles.forEach((p) => {
        if (p.active) {
          p.mesh.position.addScaledVector(p.velocity, delta * 4.0);
          p.life -= delta * 1.6;
          if (p.life <= 0) {
            p.active = false;
            p.mesh.visible = false;
          } else {
            p.mesh.visible = true;
            p.mesh.material.opacity = Math.max(0, p.life);
            p.mesh.scale.setScalar(p.life * 1.3);
          }
        }
      });
    }

    if (this.isAutoRotating) {
      this.spherical.theta += 0.003;
      this.updateCameraPosition();
    }

    this.updateLeadersAndOverlay();
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    if (!this.active) {
      this.active = true;
      this.animate();
    }
  }

  stop() {
    this.active = false;
    if (this.keyboardFlight) {
      this.keyboardFlight.resetKeys();
    }
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  resetCamera() {
    this.spherical = { radius: this.baseRadius, theta: 0.05, phi: 1.48 };
    this.target.set(0, 6.5, 0);
    this.updateCameraPosition();
  }

  dispose() {
    this.destroy();
  }

  destroy() {
    this.stop();
    if (this.keyboardFlight) {
      this.keyboardFlight.dispose();
      this.keyboardFlight = null;
    }
    window.removeEventListener('resize', this.onWindowResizeBound);
    window.removeEventListener('pointermove', this.onPointerMoveBound);
    window.removeEventListener('pointerup', this.onPointerUpBound);

    if (this.canvas && this.canvas.parentElement) {
      this.canvas.parentElement.removeChild(this.canvas);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.labelsContainer) {
      this.labelsContainer.innerHTML = '';
    }
    if (this.svgOverlay) {
      this.svgOverlay.innerHTML = '';
    }
  }
}
