// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial LptA-G LPS Trans-Envelope Export Bridge — 3D Scenario Engine
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 9P7P / 6MIT)
 * Adhering strictly to CELLULAR_INSPECTOR_BLUEPRINT.md and BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 *
 * Subunits & Functional Pieces:
 * 1. Piece_LPT_LptB_Dimer (Golden Amber #FFB703) — Cytoplasmic ABC ATPase homodimer (Chains B, H)
 * 2. Piece_LPT_LptFG_Permease (Seafoam Jade #06D6A0) — Inner membrane permease cavity (Chains F, G)
 * 3. Piece_LPT_LptC_Coupler (Luminous Teal #2EC4B6) — Periplasmic adaptor & transition dock (Chain C res 47–191)
 * 4. Piece_LPT_LptA_Bridge (Warm Amber #F77F00) — Periplasmic beta-jellyroll hydrophobic slide (Chain C res 192–355)
 * 5. Piece_LPT_LptD_Barrel (Deep Marine #0077B6) — 26-stranded giant outer membrane beta-barrel (Chain D)
 * 6. Piece_LPT_LptE_Plug (Lilac Purple #9D4EDD) — Lipoprotein plug in LptD barrel lumen (Chain E)
 * 7. Piece_LPT_Bound_LPS (Luminous Gold #FFE066) — Docked lipopolysaccharide substrate (JSG)
 *
 * Biophysical Systems:
 * - Dual-Membrane Trans-Envelope Architecture:
 *     * Inner Membrane phospholipid bilayer at Y ≈ -8.0 nm
 *     * Periplasmic Peptidoglycan murein ring at Y ≈ +2.0 nm
 *     * Outer Membrane asymmetric bilayer at Y ≈ +11.5 nm (LPS outer leaflet + PL inner leaflet)
 * - Processive Trans-Envelope LPS Export Stream through continuous hydrophobic groove
 * - ATP Hydrolysis & Flux rate modulation (PEZ dispenser mechanism)
 * - Exploded view dissociation along natural biophysical vectors
 * - 5-Stage Explanatory Trace with camera dollies & closed captions
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { LptComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const LPT_COMPONENTS_META: Record<string, LptComponentData> = {
  'lpt_holoenzyme': {
    name: 'Complete Lpt Trans-Envelope Export Bridge (PDB: 9P7P)',
    badge: 'TRANS-ENVELOPE EXPORT BRIDGE',
    dims: 'Span: ~28.4 nm along envelope axis, Holoenzyme Mass: ~380 kDa',
    proteins: 'LptB2, LptF, LptG, LptC, LptA, LptD, LptE + bound LPS substrate',
    pdb: 'PDB: 9P7P (3.40 Å Cryo-EM, Nature 2026, Kahne/Liao Labs)',
    desc: 'The trans-envelope molecular bridge spanning the inner membrane, periplasm, and outer membrane of Escherichia coli. Powers the continuous, unidirectional export of lipopolysaccharide (LPS) from its cytoplasmic synthesis site to the extracellular leaflet.',
    role: 'Essential biogenesis of the Gram-negative outer membrane permeability barrier protecting bacteria against antibiotics and detergents.',
    stoichiometry: '2 LptB + 1 LptF + 1 LptG + 1 LptC + 1–4 LptA + 1 LptD + 1 LptE + bound LPS',
    energySource: 'Cytoplasmic ATP Hydrolysis (LptB2 ABC ATPase dimer)',
    transportRate: '~100–300 LPS molecules/min per export bridge'
  },
  'lpt_outer_membrane': {
    name: 'Outer Asymmetric Membrane (LPS / PL Bilayer)',
    badge: 'OUTER ENVELOPE BARRIER',
    dims: 'Thickness: ~2.6 nm, Diameter: ~56 nm',
    proteins: 'Extracellular LPS Leaflet (Deep Marine #0077B6) + Periplasmic Phospholipid Leaflet (Seafoam Jade #06D6A0)',
    pdb: 'Cryo-EM Outer Envelope Bilayer',
    desc: 'The asymmetric outer permeability barrier of Gram-negative bacteria. The outer leaflet is composed exclusively of lipopolysaccharide (LPS) cross-linked by divalent cations (Mg2+/Ca2+), creating a virtually impermeable barrier against antibiotics, bile salts, and detergents.',
    role: 'Permeability barrier and structural interface with the extracellular milieu.',
    stoichiometry: 'Outer leaflet: ~100% LPS; Inner leaflet: ~100% Phospholipids.'
  },
  'lpt_peptidoglycan': {
    name: 'Peptidoglycan Murein Sacculus Sheet',
    badge: 'CELL WALL MUREIN LATTICE',
    dims: 'Thickness: ~2.0 nm (single-layered mesh in E. coli), Pore Size: ~4–7 nm',
    proteins: 'Glycan strands (GlcNAc-MurNAc) cross-linked by peptide stems (Warm Terracotta #E76F51)',
    pdb: 'Periplasmic Stress-Bearing Sacculus',
    desc: 'The giant single-molecule sacculus that surrounds the bacterium between the inner and outer membranes. Withstands internal turgor pressure (0.3–3 atm). Features pores (~4–7 nm) large enough for the LptA trans-envelope bridge and flagellar basal bodies to pass through.',
    role: 'Maintains cell shape and prevents osmotic lysis while allowing trans-envelope macromolecular complexes to bridge the envelope.',
    stoichiometry: '1 Periplasmic sacculus surrounding the entire protoplast.'
  },
  'lpt_inner_membrane': {
    name: 'Inner Cytoplasmic Membrane Bilayer',
    badge: 'ENERGY TRANSDUCING BILAYER',
    dims: 'Thickness: ~3.0 nm, Diameter: ~56 nm',
    proteins: 'Symmetric Phospholipid Bilayer (PE, PG, Cardiolipin) (Seafoam Jade #06D6A0)',
    pdb: 'Cytoplasmic Lipid Bilayer Matrix',
    desc: 'The symmetric phospholipid bilayer separating the cytoplasm from the periplasm. Houses the respiratory electron transport complexes, ATP synthase, and the LptB2FG permease engine that extracts newly synthesized LPS from the inner membrane.',
    role: 'Proton-motive force generation and membrane protein scaffold.',
    stoichiometry: 'Continuous ~3.0 nm phospholipid bilayer matrix.'
  },
  'lptb_dimer': {
    name: 'LptB2 ABC ATPase Homodimer',
    badge: 'CYTOPLASMIC ABC ATPASE',
    dims: 'Span: ~7.5 nm, Cytoplasmic depth: ~4.0 nm (res 1–241, Chains B, H)',
    proteins: 'LptB Homodimer (2 ABC ATPase catalytic cassettes)',
    pdb: 'PDB: 9P7P [Chains B, H]',
    desc: 'The cytoplasmic power plant of LPS export. Couples ATP binding and hydrolysis to mechanical strokes, driving substrate extraction from the inner membrane through alternating nucleotide-bound dimer closure.',
    role: 'Provides the mechanical driving force powering the multi-protein PEZ-dispenser export stream.'
  },
  'lptfg_permease': {
    name: 'LptFG Transmembrane Permease Heterodimer',
    badge: 'INNER MEMBRANE PERMEASE',
    dims: 'Bilayer Span: ~3.8 nm, Width: ~6.5 nm (res 1–365, Chains F, G)',
    proteins: 'LptF and LptG (2x TM1-TM6 domains + periplasmic coupling loops)',
    pdb: 'PDB: 9P7P [Chains F, G]',
    desc: 'Heterodimeric inner membrane permease creating a large central cavity that accommodates the lipid A fatty acyl chains. Mechanically flexes upon LptB ATP hydrolysis to push LPS upward into LptC.',
    role: 'Extracts lipid A-core from the inner membrane periplasmic leaflet.'
  },
  'lptc_coupler': {
    name: 'LptC Periplasmic Adaptor & Transition Dock',
    badge: 'PERIPLASMIC ADAPTOR',
    dims: 'Height: ~4.5 nm, Jellyroll width: ~2.8 nm (res 47–191, Chain C)',
    proteins: 'LptC (N-terminal transmembrane helix + C-terminal beta-jellyroll)',
    pdb: 'PDB: 9P7P [Chain C, res 47–191]',
    desc: 'Essential periplasmic transition dock. Intercalates between the transmembrane LptFG cavity and the periplasmic LptA oligomers, bridging the hydrophobic groove across the inner envelope interface.',
    role: 'Receives extracted LPS and guides it onto the periplasmic bridge.'
  },
  'lpta_bridge': {
    name: 'LptA Periplasmic Oligomeric Hydrophobic Slide',
    badge: 'HYDROPHOBIC CHUTE BRIDGE',
    dims: 'Length: ~8.5 nm per module (res 192–355, Chain C)',
    proteins: 'LptA (End-to-end beta-jellyroll oligomers)',
    pdb: 'PDB: 9P7P [Chain C, res 192–355]',
    desc: 'End-to-end oligomer of beta-jellyroll folds forming a continuous periplasmic hydrophobic slide. Penetrates the porous peptidoglycan sacculus to link inner membrane to outer membrane without releasing hydrophobic acyl chains into water.',
    role: 'Enables processive continuous slide of lipid A across the 25 nm periplasmic aqueous divide.'
  },
  'lptd_barrel': {
    name: 'LptD 26-Stranded Transmembrane Beta-Barrel',
    badge: '26-STRANDED OM BARREL',
    dims: 'Height: ~7.2 nm, Barrel Diameter: ~4.8 nm (Chain D, 752 aa)',
    proteins: 'LptD (N-terminal beta-jellyroll + C-terminal 26-stranded beta-barrel)',
    pdb: 'PDB: 9P7P [Chain D]',
    desc: 'The largest beta-barrel in Escherichia coli. Contains 26 antiparallel beta-strands embedded in the outer membrane with an N-terminal periplasmic domain completing the bridge and a lateral gate opening into the outer leaflet.',
    role: 'Inserts LPS molecules into the extracellular leaflet via lateral gate parting.'
  },
  'lpte_plug': {
    name: 'LptE Lipoprotein Lumen Plug',
    badge: 'LUMEN PLUG LIPOPROTEIN',
    dims: 'Diameter: ~2.8 nm (Chain E, 151 aa)',
    proteins: 'LptE (Alpha-beta roll fold inside LptD lumen)',
    pdb: 'PDB: 9P7P [Chain E]',
    desc: 'Soluble-domain lipoprotein inserted directly inside the lumen of the LptD beta-barrel. Plugs the massive aqueous pore to prevent ion and proton leakage while coordinating with LptD to guide LPS to the exterior.',
    role: 'Maintains outer membrane electrical sealing while facilitating LPS lateral release.'
  },
  'bound_lps': {
    name: 'Bound Lipopolysaccharide Substrate (JSG / Lipid A)',
    badge: 'EXPORT SUBSTRATE (LPS)',
    dims: 'Span: ~3.2 nm (Lipid A disaccharide + 6 acyl chains + core)',
    proteins: 'Lipid A-Kdo2-Core Oligosaccharide Substrate (Ligand JSG)',
    pdb: 'PDB: 9P7P [Ligand JSG / HETATM]',
    desc: 'The primary building block of the Gram-negative outer leaflet. Composed of a phosphorylated glucosamine disaccharide backbone and 6 saturated fatty acyl chains shielded in the bridge groove during translocation.',
    role: 'Forms the dense, magnesium-stabilized barrier protecting bacteria from detergents, dyes, and antibiotics.'
  }
};

export interface LptExplanationStage {
  step: number;
  id: string;
  badge: string;
  title: string;
  color: string;
  spoken: string;
  target: [number, number, number];
  camRadius: number;
  camTheta: number;
  camPhi: number;
}

export const LPT_EXPLANATION_STAGES: LptExplanationStage[] = [
  {
    step: 1,
    id: 'im_extraction',
    badge: 'LptB2FG',
    title: '1. Substrate Extraction from Inner Membrane',
    color: '#06D6A0',
    spoken: 'Step one: Substrate Extraction from the Inner Membrane. LptB2FG captures newly synthesized Lipid A-core from the inner membrane periplasmic leaflet. ATP binding and hydrolysis by the cytoplasmic LptB dimer powers conformational tilting of transmembrane helices LptF and LptG, extracting the hydrophobic acyl chains out of the bilayer.',
    target: [0.0, -6.5, 0.0],
    camRadius: 24,
    camTheta: 0.35,
    camPhi: 1.35
  },
  {
    step: 2,
    id: 'periplasmic_handover',
    badge: 'LptC',
    title: '2. Periplasmic Handover to LptC Coupler',
    color: '#2EC4B6',
    spoken: 'Step two: Periplasmic Handover to LptC. The extracted LPS molecule is passed from the LptFG cavity into the beta-jellyroll fold of LptC. LptC acts as a mechanical coupler and transition dock, shielding the six fatty acyl chains in its hydrophobic interior.',
    target: [0.0, -0.5, 0.0],
    camRadius: 20,
    camTheta: 0.65,
    camPhi: 1.38
  },
  {
    step: 3,
    id: 'jellyroll_slide',
    badge: 'LptA',
    title: '3. Processive Sliding along LptA Bridge',
    color: '#F77F00',
    spoken: 'Step three: Processive Sliding along the LptA Bridge. Consecutive LptA oligomers form a continuous end-to-end beta-jellyroll bridge spanning the periplasmic space and penetrating the peptidoglycan mesh. Successive LPS molecules push each other forward through the continuous hydrophobic groove in an ATP-driven PEZ dispenser mechanism.',
    target: [0.0, 4.5, 0.0],
    camRadius: 26,
    camTheta: 0.85,
    camPhi: 1.40
  },
  {
    step: 4,
    id: 'om_gating',
    badge: 'LptD',
    title: '4. Entry into LptD 26-Stranded OM Barrel',
    color: '#0077B6',
    spoken: 'Step four: Entry into the LptD Outer Membrane Barrel. The LPS substrate exits the periplasmic bridge and enters the N-terminal domain of LptD, guided into the massive 26-stranded transmembrane beta-barrel lumen alongside the LptE lipoprotein plug.',
    target: [0.0, 9.5, 0.0],
    camRadius: 22,
    camTheta: 0.15,
    camPhi: 1.32
  },
  {
    step: 5,
    id: 'leaflet_deposition',
    badge: 'LPS',
    title: '5. Outer Leaflet Deposition & Barrier Assembly',
    color: '#FFE066',
    spoken: 'Step five: Outer Leaflet Deposition and Barrier Assembly. Lateral opening of the LptD barrel discharges LPS into the extracellular leaflet of the outer membrane. Divalent magnesium cations cross-link adjacent lipid A phosphates, finalizing the nearly impenetrable Gram-negative permeability barrier against antibiotics.',
    target: [0.0, 12.5, 0.0],
    camRadius: 36,
    camTheta: 0.45,
    camPhi: 1.30
  }
];

export class LptBridgeScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private animFrameId: number | null = null;
  private active: boolean = false;
  private clock = new THREE.Clock();
  private keyboardFlight: KeyboardFlightController | null = null;

  // Model & Subunit groups
  private modelGroup: THREE.Group = new THREE.Group();
  private pieceMeshes: Map<string, THREE.Mesh> = new Map();
  private pieceBasePositions: Map<string, THREE.Vector3> = new Map();

  // Dual Membrane & Envelope Architecture
  private envelopeGroup: THREE.Group = new THREE.Group();
  private imGroup: THREE.Group = new THREE.Group();
  private pgMesh: THREE.Mesh | null = null;
  private omGroup: THREE.Group = new THREE.Group();

  // Processive LPS Substrate Stream
  private lpsStreamGroup: THREE.Group = new THREE.Group();
  private lpsClusters: THREE.Group[] = [];

  // SVG Leaders Layer
  private svgLayer: SVGSVGElement | null = null;
  private leaderAnchors: {
    key: string;
    targetMeshName?: string;
    label: string;
    color: string;
    offset?: THREE.Vector3;
    badge: string;
    worldPos?: THREE.Vector3;
  }[] = [];

  // Interactive States
  private explodedProgress: number = 0.0;
  private exportSpeed: number = 1.0;
  private isAtpActive: boolean = true;
  private isPaused: boolean = false;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera Dolly Lerp
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: LptComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: LptComponentData) => void;
      onCameraMove?: () => void;
      onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
      onStageChange?: (stage: number) => void;
    }
  ) {
    this.container = container;
    this.onSelectComponent = callbacks.onSelectComponent;
    this.onCameraMove = callbacks.onCameraMove;
    this.onSubtitlesUpdate = callbacks.onSubtitlesUpdate;
    this.onStageChange = callbacks.onStageChange;

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x040814); // Atmospheric trans-envelope midnight navy

    // 2. Camera: viewing the 28 nm trans-envelope bridge vertically
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 4, 52);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.30;
    this.container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls (Instantiated synchronously)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.target.set(0, 1.5, 0);
    this.controls.minDistance = 8;
    this.controls.maxDistance = 160;
    this.controls.addEventListener('change', () => {
      if (this.onCameraMove) this.onCameraMove();
    });

    // 5. Lighting
    this.setupLighting();

    // 6. Dual-Membrane Envelope Architecture (IM, PG Sacculus, OM)
    this.buildTransEnvelopeArchitecture();

    // 7. Processive LPS Substrate Stream
    this.buildProcessiveLPSStream();

    // 8. Add Groups to Scene
    this.scene.add(this.envelopeGroup);
    this.scene.add(this.modelGroup);
    this.scene.add(this.lpsStreamGroup);

    // 9. Load GLB Model
    this.loadModel();

    // 10. SVG Overlay
    this.setupSVGOverlay();

    // 11. Keyboard navigation (WASD, Arrows, Space, C, Shift, R)
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      controls: this.controls,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateSVGLeaders()
    });

    // 12. Start Animation Loop
    this.start();
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0xdde8f8, 0.88);
    this.scene.add(ambient);

    const mainSun = new THREE.DirectionalLight(0xffffff, 1.45);
    mainSun.position.set(30, 50, 35);
    this.scene.add(mainSun);

    // Golden amber light highlighting cytoplasmic LptB ATPase and LPS substrate
    const atpLight = new THREE.DirectionalLight(0xffb703, 1.1);
    atpLight.position.set(0, -35, 25);
    this.scene.add(atpLight);

    // Royal blue rim light highlighting the outer membrane LptD barrel
    const omLight = new THREE.DirectionalLight(0x0077b6, 1.2);
    omLight.position.set(-20, 35, -25);
    this.scene.add(omLight);

    const hemi = new THREE.HemisphereLight(0x2a4365, 0x0f172a, 0.65);
    this.scene.add(hemi);
  }

  private buildTransEnvelopeArchitecture() {
    const radius = 28;
    const ringSpacing = 1.4;
    const numRings = Math.floor(radius / ringSpacing);

    // =========================================================================
    // 1. Inner Membrane Phospholipid Bilayer (Centered at Y = -8.0 nm)
    //    Periplasmic Leaflet at Y = -6.5 nm, Cytoplasmic Leaflet at Y = -9.5 nm
    //    Color: Seafoam Jade #06D6A0 (Hole radius ~ 3.2 nm for LptFG permease)
    // =========================================================================
    const imTopPoints: THREE.Vector3[] = [];
    const imBotPoints: THREE.Vector3[] = [];
    for (let r = 1; r <= numRings; r++) {
      const curR = r * ringSpacing;
      if (curR < 3.2) continue;
      const count = Math.floor(2 * Math.PI * curR / ringSpacing);
      for (let i = 0; i < count; i++) {
        const thetaTop = (i / count) * Math.PI * 2 + (r % 2) * 0.2;
        const xTop = curR * Math.cos(thetaTop);
        const zTop = curR * Math.sin(thetaTop);
        if (!(zTop > 1.5 && Math.abs(xTop) < 12.0)) {
          imTopPoints.push(new THREE.Vector3(xTop, 0, zTop));
        }

        // Stagger cytoplasmic leaflet by half angular spacing for see-through visibility
        const thetaBot = thetaTop + Math.PI / count;
        const xBot = curR * Math.cos(thetaBot);
        const zBot = curR * Math.sin(thetaBot);
        if (!(zBot > 1.5 && Math.abs(xBot) < 12.0)) {
          imBotPoints.push(new THREE.Vector3(xBot, 0, zBot));
        }
      }
    }

    const sphereGeo = new THREE.SphereGeometry(0.38, 12, 10);
    const dummy = new THREE.Object3D();

    const imPlMat = new THREE.MeshStandardMaterial({
      color: 0x06d6a0,
      roughness: 0.35,
      metalness: 0.1,
      emissive: 0x025c43,
      emissiveIntensity: 0.25,
      depthWrite: true
    });

    // Periplasmic IM Leaflet (Y = -6.5)
    const imTopMesh = new THREE.InstancedMesh(sphereGeo, imPlMat, imTopPoints.length);
    imTopPoints.forEach((pt, idx) => {
      dummy.position.set(pt.x, -6.5, pt.z);
      dummy.scale.set(0.95, 0.95, 0.95);
      dummy.updateMatrix();
      imTopMesh.setMatrixAt(idx, dummy.matrix);
    });
    imTopMesh.instanceMatrix.needsUpdate = true;
    this.imGroup.add(imTopMesh);

    // Cytoplasmic IM Leaflet (Y = -9.5, staggered)
    const imBotMesh = new THREE.InstancedMesh(sphereGeo, imPlMat, imBotPoints.length);
    imBotPoints.forEach((pt, idx) => {
      dummy.position.set(pt.x, -9.5, pt.z);
      dummy.scale.set(0.95, 0.95, 0.95);
      dummy.updateMatrix();
      imBotMesh.setMatrixAt(idx, dummy.matrix);
    });
    imBotMesh.instanceMatrix.needsUpdate = true;
    this.imGroup.add(imBotMesh);

    // Translucent Inner Membrane Hydrophobic Core Slab (depth 3.0 nm, spans Y = -9.5 to -6.5 nm)
    const imShape = new THREE.Shape();
    imShape.absarc(0, 0, radius, 0, Math.PI * 2, false);
    const imHole = new THREE.Path();
    imHole.absarc(0, 0, 3.2, 0, Math.PI * 2, true);
    imShape.holes.push(imHole);
    const imCoreGeo = new THREE.ExtrudeGeometry(imShape, { depth: 3.0, bevelEnabled: false, curveSegments: 64 });
    const imCoreMat = new THREE.MeshStandardMaterial({
      color: 0x06d6a0, // Ethereal cytological seafoam crystal-clear slab
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.11, // Super clean translucency
      depthWrite: false, // Critical: do NOT block spheres, bridge or dots below
      side: THREE.DoubleSide
    });
    const imCoreMesh = new THREE.Mesh(imCoreGeo, imCoreMat);
    imCoreMesh.rotation.x = Math.PI / 2;
    imCoreMesh.position.set(0, -6.5, 0); // Extrudes along -Y from -6.5 to -9.5
    imCoreMesh.renderOrder = 1;
    this.imGroup.add(imCoreMesh);

    // IM outer boundary rings
    const imOuterRingGeo = new THREE.RingGeometry(radius - 0.25, radius, 64);
    const imOuterRingMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false });
    const imTopOuterRing = new THREE.Mesh(imOuterRingGeo, imOuterRingMat);
    imTopOuterRing.rotation.x = Math.PI / 2;
    imTopOuterRing.position.y = -6.5;
    this.imGroup.add(imTopOuterRing);

    const imBotOuterRing = imTopOuterRing.clone();
    imBotOuterRing.position.y = -9.5;
    this.imGroup.add(imBotOuterRing);

    // IM central aperture rings
    const imInnerRingGeo = new THREE.RingGeometry(3.0, 3.2, 48);
    const imInnerRingMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false });
    const imTopInnerRing = new THREE.Mesh(imInnerRingGeo, imInnerRingMat);
    imTopInnerRing.rotation.x = Math.PI / 2;
    imTopInnerRing.position.y = -6.5;
    this.imGroup.add(imTopInnerRing);

    const imBotInnerRing = imTopInnerRing.clone();
    imBotInnerRing.position.y = -9.5;
    this.imGroup.add(imBotInnerRing);

    // =========================================================================
    // 2. Periplasmic Peptidoglycan (Murein Sacculus Ring & Slab, Y = +2.0 nm)
    //    Warm Terracotta #E76F51, porous lattice mesh surrounding LptA bridge
    // =========================================================================
    const pgRingGeo = new THREE.RingGeometry(3.4, 26, 40, 8);
    const pgMat = new THREE.MeshStandardMaterial({
      color: 0xe76f51,
      wireframe: true,
      roughness: 0.4,
      metalness: 0.05,
      emissive: new THREE.Color(0xe76f51),
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.85, // Crisp visible lattice lines in the center from all angles
      depthWrite: false,
      side: THREE.DoubleSide // Critical: double-sided so visible looking straight down from top!
    });
    const pgRing = new THREE.Mesh(pgRingGeo, pgMat);
    pgRing.rotation.x = Math.PI / 2;
    pgRing.position.y = 2.0;
    pgRing.renderOrder = 2; // Always render clearly visible through OM slab
    this.envelopeGroup.add(pgRing);
    this.pgMesh = pgRing;

    // Translucent PG murein sacculus gel slab (depth 0.8 nm, spans Y = 1.6 to 2.4 nm)
    const pgShape = new THREE.Shape();
    pgShape.absarc(0, 0, 26, 0, Math.PI * 2, false);
    const pgHole = new THREE.Path();
    pgHole.absarc(0, 0, 3.4, 0, Math.PI * 2, true);
    pgShape.holes.push(pgHole);
    const pgCoreGeo = new THREE.ExtrudeGeometry(pgShape, { depth: 0.8, bevelEnabled: false, curveSegments: 64 });
    const pgCoreMat = new THREE.MeshStandardMaterial({
      color: 0xe76f51,
      roughness: 0.2,
      metalness: 0.05,
      transparent: true,
      opacity: 0.08, // Ethereal translucent murein sheet
      depthWrite: false, // Critical: do NOT block LptA bridge or dots
      side: THREE.DoubleSide
    });
    const pgCoreMesh = new THREE.Mesh(pgCoreGeo, pgCoreMat);
    pgCoreMesh.rotation.x = Math.PI / 2;
    pgCoreMesh.position.set(0, 2.4, 0); // Extrudes from 2.4 down to 1.6
    pgCoreMesh.renderOrder = 1;
    this.envelopeGroup.add(pgCoreMesh);

    // PG outer perimeter ring at Y = 2.0
    const pgOuterRingGeo = new THREE.RingGeometry(25.75, 26, 64);
    const pgOuterRingMat = new THREE.MeshBasicMaterial({ color: 0xe76f51, side: THREE.DoubleSide, transparent: true, opacity: 0.65, depthWrite: false });
    const pgOuterRing = new THREE.Mesh(pgOuterRingGeo, pgOuterRingMat);
    pgOuterRing.rotation.x = Math.PI / 2;
    pgOuterRing.position.y = 2.0;
    this.envelopeGroup.add(pgOuterRing);

    // =========================================================================
    // 3. Outer Membrane Asymmetric Bilayer (Centered at Y = +11.5 nm)
    //    Outer Leaflet: Lipopolysaccharide (Deep Marine #0077B6) at Y = +12.8 nm
    //    Inner Leaflet: Phospholipids (Seafoam Jade #06D6A0) at Y = +10.2 nm
    //    Hole radius ~ 4.0 nm for 26-stranded LptD barrel
    // =========================================================================
    const omLpsPoints: THREE.Vector3[] = [];
    const omPlPoints: THREE.Vector3[] = [];
    for (let r = 1; r <= numRings; r++) {
      const curR = r * ringSpacing;
      if (curR < 4.0) continue;
      const count = Math.floor(2 * Math.PI * curR / ringSpacing);
      for (let i = 0; i < count; i++) {
        const thetaLps = (i / count) * Math.PI * 2 + (r % 2) * 0.2;
        const xLps = curR * Math.cos(thetaLps);
        const zLps = curR * Math.sin(thetaLps);
        if (!(zLps > 1.5 && Math.abs(xLps) < 12.0)) {
          omLpsPoints.push(new THREE.Vector3(xLps, 0, zLps));
        }

        // Stagger periplasmic PL leaflet by half angular spacing for biophysical packing & see-through visibility
        const thetaPl = thetaLps + Math.PI / count;
        const xPl = curR * Math.cos(thetaPl);
        const zPl = curR * Math.sin(thetaPl);
        if (!(zPl > 1.5 && Math.abs(xPl) < 12.0)) {
          omPlPoints.push(new THREE.Vector3(xPl, 0, zPl));
        }
      }
    }

    // Extracellular LPS Leaflet (Y = +12.8)
    const omLpsMat = new THREE.MeshStandardMaterial({
      color: 0x0077b6,
      roughness: 0.3,
      metalness: 0.15,
      emissive: 0x003f66,
      emissiveIntensity: 0.25,
      depthWrite: true
    });
    const omTopMesh = new THREE.InstancedMesh(sphereGeo, omLpsMat, omLpsPoints.length);
    omLpsPoints.forEach((pt, idx) => {
      dummy.position.set(pt.x, 12.8, pt.z);
      dummy.scale.set(1.15, 1.05, 1.15); // Bulky LPS polysaccharide headgroups
      dummy.updateMatrix();
      omTopMesh.setMatrixAt(idx, dummy.matrix);
    });
    omTopMesh.instanceMatrix.needsUpdate = true;
    this.omGroup.add(omTopMesh);

    // Periplasmic PL Leaflet (Y = +10.2, staggered)
    const omBotMesh = new THREE.InstancedMesh(sphereGeo, imPlMat, omPlPoints.length);
    omPlPoints.forEach((pt, idx) => {
      dummy.position.set(pt.x, 10.2, pt.z);
      dummy.scale.set(0.95, 0.95, 0.95);
      dummy.updateMatrix();
      omBotMesh.setMatrixAt(idx, dummy.matrix);
    });
    omBotMesh.instanceMatrix.needsUpdate = true;
    this.omGroup.add(omBotMesh);

    // Translucent Outer Membrane Hydrophobic Core Slab (depth 2.6 nm, spans Y = 10.2 to 12.8 nm)
    const omShape = new THREE.Shape();
    omShape.absarc(0, 0, radius, 0, Math.PI * 2, false);
    const omHole = new THREE.Path();
    omHole.absarc(0, 0, 4.0, 0, Math.PI * 2, true);
    omShape.holes.push(omHole);
    const omCoreGeo = new THREE.ExtrudeGeometry(omShape, { depth: 2.6, bevelEnabled: false, curveSegments: 64 });
    const omCoreMat = new THREE.MeshStandardMaterial({
      color: 0x00b4d8, // Luminous cerulean translucent slab
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.11, // Super clean translucency: enables looking straight down through OM into PG and IM
      depthWrite: false, // Critical: do NOT block PG lines, bridge, or dots when viewed from top
      side: THREE.DoubleSide
    });
    const omCoreMesh = new THREE.Mesh(omCoreGeo, omCoreMat);
    omCoreMesh.rotation.x = Math.PI / 2;
    omCoreMesh.position.set(0, 12.8, 0); // Extrudes along -Y from 12.8 to 10.2
    omCoreMesh.renderOrder = 1;
    this.omGroup.add(omCoreMesh);

    // OM outer boundary rings
    const omOuterRingGeo = new THREE.RingGeometry(radius - 0.25, radius, 64);
    const omTopOuterRingMat = new THREE.MeshBasicMaterial({ color: 0x0077b6, side: THREE.DoubleSide, transparent: true, opacity: 0.55, depthWrite: false });
    const omTopOuterRing = new THREE.Mesh(omOuterRingGeo, omTopOuterRingMat);
    omTopOuterRing.rotation.x = Math.PI / 2;
    omTopOuterRing.position.y = 12.8;
    this.omGroup.add(omTopOuterRing);

    const omBotOuterRingMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false });
    const omBotOuterRing = new THREE.Mesh(omOuterRingGeo, omBotOuterRingMat);
    omBotOuterRing.rotation.x = Math.PI / 2;
    omBotOuterRing.position.y = 10.2;
    this.omGroup.add(omBotOuterRing);

    // OM central aperture rings (around LptD barrel)
    const omInnerRingGeo = new THREE.RingGeometry(3.8, 4.0, 48);
    const omInnerRingMat = new THREE.MeshBasicMaterial({ color: 0x0077b6, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false });
    const omTopInnerRing = new THREE.Mesh(omInnerRingGeo, omInnerRingMat);
    omTopInnerRing.rotation.x = Math.PI / 2;
    omTopInnerRing.position.y = 12.8;
    this.omGroup.add(omTopInnerRing);

    const omBotInnerRing = omTopInnerRing.clone();
    omBotInnerRing.position.y = 10.2;
    this.omGroup.add(omBotInnerRing);

    this.envelopeGroup.add(this.imGroup);
    this.envelopeGroup.add(this.omGroup);

    // Central illuminated trans-envelope translocation trajectory line (visible from top and all angles)
    const trajectoryPoints: THREE.Vector3[] = [];
    for (let step = 0; step <= 50; step++) {
      const frac = step / 50;
      const y = -8.5 + frac * 22.0;
      const x = Math.sin(frac * Math.PI * 2.5) * 0.6;
      const z = 0.5 + Math.cos(frac * Math.PI * 2) * 0.4;
      trajectoryPoints.push(new THREE.Vector3(x, y, z));
    }
    const trajectoryGeo = new THREE.BufferGeometry().setFromPoints(trajectoryPoints);
    const trajectoryMat = new THREE.LineDashedMaterial({
      color: 0xffb703,
      dashSize: 0.6,
      gapSize: 0.3,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const trajectoryLine = new THREE.Line(trajectoryGeo, trajectoryMat);
    trajectoryLine.computeLineDistances();
    trajectoryLine.renderOrder = 2; // Always visible through slabs
    this.envelopeGroup.add(trajectoryLine);
  }

  private buildProcessiveLPSStream() {
    // 16 processive LPS substrate molecules traversing the continuous bridge
    // Each LPS molecule consists of a hydrophobic lipid A tail cluster and an oligosaccharide core head
    const tailGeo = new THREE.SphereGeometry(0.24, 10, 10);
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0xffb703, // Golden Amber
      roughness: 0.3,
      metalness: 0.15,
      depthWrite: false
    });

    const headGeo = new THREE.SphereGeometry(0.32, 12, 12);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffe066, // Luminous Gold
      emissive: 0xffb703,
      emissiveIntensity: 0.85,
      roughness: 0.25,
      metalness: 0.2,
      depthWrite: false
    });

    for (let i = 0; i < 16; i++) {
      const lpsCluster = new THREE.Group();
      lpsCluster.renderOrder = 5; // Ensure trespassing substrate dots are always clearly visible from all angles

      // Core headgroup
      const head = new THREE.Mesh(headGeo, headMat);
      head.renderOrder = 5;
      head.position.set(0, 0.25, 0);
      lpsCluster.add(head);

      // 4 Acyl tail beads
      for (let t = 0; t < 4; t++) {
        const tail = new THREE.Mesh(tailGeo, tailMat);
        tail.renderOrder = 5;
        const angle = (t / 4) * Math.PI * 2;
        tail.position.set(Math.cos(angle) * 0.18, -0.25, Math.sin(angle) * 0.18);
        lpsCluster.add(tail);
      }

      this.lpsStreamGroup.add(lpsCluster);
      this.lpsClusters.push(lpsCluster);
    }
  }

  private async loadModel() {
    const loader = new GLTFLoader();
    const modelUrl = 'models/9P7P_assembled_pieces.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        const root = gltf.scene;

        const lptColorMap: Record<string, { color: number; emissive: number }> = {
          'Piece_LPT_LptD_Barrel': { color: 0x0077b6, emissive: 0x002845 },
          'Piece_LPT_LptE_Plug': { color: 0xe63946, emissive: 0x590d14 },
          'Piece_LPT_LptA_Bridge': { color: 0xf77f00, emissive: 0x5a2800 },
          'Piece_LPT_LptC_Coupler': { color: 0x2ec4b6, emissive: 0x0b4f48 },
          'Piece_LPT_LptFG_Permease': { color: 0x06d6a0, emissive: 0x024532 },
          'Piece_LPT_LptB_Dimer': { color: 0xffb703, emissive: 0x664400 },
          'Piece_LPT_Bound_LPS': { color: 0xffe066, emissive: 0xffb703 }
        };

        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            for (const [prefix, colCfg] of Object.entries(lptColorMap)) {
              if (mesh.name.startsWith(prefix)) {
                if (mesh.geometry && mesh.geometry.attributes && mesh.geometry.attributes.color) {
                  mesh.geometry.deleteAttribute('color');
                }
                mesh.material = new THREE.MeshStandardMaterial({
                  color: colCfg.color,
                  emissive: colCfg.emissive,
                  emissiveIntensity: 0.28,
                  roughness: 0.34,
                  metalness: 0.14,
                  vertexColors: false,
                  side: THREE.DoubleSide
                });
                break;
              }
            }

            this.pieceMeshes.set(mesh.name, mesh);
            this.pieceBasePositions.set(mesh.name, mesh.position.clone());
          }
        });

        this.modelGroup.add(root);
        this.setupDynamicLeaderAnchors();
      },
      undefined,
      (err) => {
        console.warn('[LptBridgeScene] Could not load 9P7P_assembled_pieces.glb:', err);
      }
    );
  }

  private setupDynamicLeaderAnchors() {
    this.leaderAnchors = [
      {
        key: 'lpt_outer_membrane',
        label: 'Outer Asymmetric Membrane',
        color: '#0077B6',
        badge: 'OM',
        worldPos: new THREE.Vector3(14.0, 12.8, -8.0)
      },
      {
        key: 'lpt_peptidoglycan',
        label: 'Peptidoglycan Murein Sacculus',
        color: '#E76F51',
        badge: 'PG',
        worldPos: new THREE.Vector3(14.0, 2.0, 7.0)
      },
      {
        key: 'lpt_inner_membrane',
        label: 'Inner Cytoplasmic Membrane',
        color: '#06D6A0',
        badge: 'IM',
        worldPos: new THREE.Vector3(14.0, -6.5, -8.0)
      },
      {
        key: 'lptb_dimer',
        targetMeshName: 'Piece_LPT_LptB_Dimer',
        label: 'LptB2 ABC ATPase Dimer',
        color: '#FFB703',
        offset: new THREE.Vector3(0.0, -8.8, 1.8),
        badge: 'LptB2'
      },
      {
        key: 'lptfg_permease',
        targetMeshName: 'Piece_LPT_LptFG_Permease',
        label: 'LptFG IM Permease Cavity',
        color: '#06D6A0',
        offset: new THREE.Vector3(1.8, -5.6, 0.0),
        badge: 'LptFG'
      },
      {
        key: 'lptc_coupler',
        targetMeshName: 'Piece_LPT_LptC_Coupler',
        label: 'LptC Periplasmic Coupler',
        color: '#2EC4B6',
        offset: new THREE.Vector3(-1.8, 0.2, 1.4),
        badge: 'LptC'
      },
      {
        key: 'lpta_bridge',
        targetMeshName: 'Piece_LPT_LptA_Bridge',
        label: 'LptA β-Jellyroll Bridge Slide',
        color: '#F77F00',
        offset: new THREE.Vector3(1.6, 4.6, 1.2),
        badge: 'LptA'
      },
      {
        key: 'lptd_barrel',
        targetMeshName: 'Piece_LPT_LptD_Barrel',
        label: 'LptD 26-Stranded OM Barrel',
        color: '#0077B6',
        offset: new THREE.Vector3(-2.2, 10.6, 0.0),
        badge: 'LptD'
      },
      {
        key: 'lpte_plug',
        targetMeshName: 'Piece_LPT_LptE_Plug',
        label: 'LptE Lipoprotein Lumen Plug',
        color: '#9D4EDD',
        offset: new THREE.Vector3(0.2, 11.2, 1.5),
        badge: 'LptE'
      },
      {
        key: 'bound_lps',
        targetMeshName: 'Piece_LPT_Bound_LPS',
        label: 'Bound Lipid A-Core Substrate',
        color: '#FFE066',
        offset: new THREE.Vector3(0.0, 1.6, 0.8),
        badge: 'LPS'
      }
    ];
  }

  private setupSVGOverlay() {
    let svg = this.container.querySelector('.lpt-svg-overlay') as SVGSVGElement | null;
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'lpt-svg-overlay');
      svg.style.position = 'absolute';
      svg.style.top = '0';
      svg.style.left = '0';
      svg.style.width = '100%';
      svg.style.height = '100%';
      svg.style.pointerEvents = 'none';
      svg.style.zIndex = '15';
      this.container.appendChild(svg);
    }
    this.svgLayer = svg;
  }

  private getMeshByNameOrPrefix(targetName: string): THREE.Mesh | undefined {
    let mesh = this.pieceMeshes.get(targetName);
    if (!mesh) {
      for (const [mName, m] of this.pieceMeshes.entries()) {
        if (mName.startsWith(targetName)) {
          return m;
        }
      }
    }
    return mesh;
  }

  private updateSVGLeaders() {
    if (!this.svgLayer) return;

    let html = '';
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.leaderAnchors.forEach((anchor) => {
      let worldPos: THREE.Vector3;
      if (anchor.worldPos) {
        worldPos = anchor.worldPos.clone();
      } else if (anchor.targetMeshName && anchor.offset) {
        const mesh = this.getMeshByNameOrPrefix(anchor.targetMeshName);
        if (!mesh || !mesh.visible) return;
        worldPos = anchor.offset.clone();
        mesh.localToWorld(worldPos);
      } else {
        return;
      }

      // Project 3D to screen coordinates
      const screenPos = worldPos.clone().project(this.camera);
      if (screenPos.z > 1.0) return;

      const sx = ((screenPos.x + 1) * width) / 2;
      const sy = ((-screenPos.y + 1) * height) / 2;

      // Label card position offset outwards
      const dx = sx > width / 2 ? 80 : -80;
      const dy = sy > height / 2 ? 40 : -40;
      const lx = sx + dx;
      const ly = sy + dy;

      const pillWidth = Math.max(120, anchor.label.length * 7.2 + 38);
      const cardX = lx > sx ? lx : lx - pillWidth;

      html += `
        <g class="lpt-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
          <!-- Hairline leader line -->
          <line x1="${sx}" y1="${sy}" x2="${lx}" y2="${ly}" stroke="${anchor.color}" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.85" />
          <!-- 3D anchor pulsing dot -->
          <circle cx="${sx}" cy="${sy}" r="3.5" fill="${anchor.color}" />
          <circle cx="${sx}" cy="${sy}" r="7" stroke="${anchor.color}" stroke-width="1" fill="none" opacity="0.6">
            <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <!-- 2D Subpill Badge -->
          <g transform="translate(${cardX}, ${ly - 12})">
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(4, 10, 22, 0.92)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    // Attach click triggers to subpills
    const items = this.svgLayer.querySelectorAll('.lpt-leader-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = item.getAttribute('data-key');
        if (key) {
          this.focusComponent(key);
          this.selectComponent(key);
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Public Interactive Controls
  // ---------------------------------------------------------------------------

  public setExplodedProgress(val: number) {
    this.explodedProgress = Math.max(0, Math.min(1.0, val));

    // Biophysical exploded view dissociation vectors along natural export geometry
    const vectors: Record<string, THREE.Vector3> = {
      'Piece_LPT_LptB_Dimer': new THREE.Vector3(0, -14.0 * this.explodedProgress, 0),
      'Piece_LPT_LptFG_Permease': new THREE.Vector3(-12.0 * this.explodedProgress, -6.0 * this.explodedProgress, 0),
      'Piece_LPT_LptC_Coupler': new THREE.Vector3(12.0 * this.explodedProgress, 0, 8.0 * this.explodedProgress),
      'Piece_LPT_LptA_Bridge': new THREE.Vector3(-12.0 * this.explodedProgress, 0, -8.0 * this.explodedProgress),
      'Piece_LPT_LptD_Barrel': new THREE.Vector3(0, 14.0 * this.explodedProgress, 0),
      'Piece_LPT_LptE_Plug': new THREE.Vector3(8.0 * this.explodedProgress, 18.0 * this.explodedProgress, 0),
      'Piece_LPT_Bound_LPS': new THREE.Vector3(0, 0, 12.0 * this.explodedProgress)
    };

    for (const [name, mesh] of this.pieceMeshes.entries()) {
      const base = this.pieceBasePositions.get(name);
      let vec = vectors[name];
      if (!vec) {
        for (const k of Object.keys(vectors)) {
          if (name.startsWith(k)) {
            vec = vectors[k];
            break;
          }
        }
      }
      if (base && vec) {
        mesh.position.set(base.x + vec.x, base.y + vec.y, base.z + vec.z);
      }
    }

    // Smooth camera pullback during exploded disassembly so LptD/LptE at top and LptB2 at bottom stay 100% framed
    if (this.camLerpProgress >= 1.0 && this.controls) {
      this.camera.position.set(0, 4.0, 52 + this.explodedProgress * 26.0);
      this.controls.target.set(0, 1.5, 0);
      this.controls.update();
    }
  }

  public setExportSpeed(val: number) {
    this.exportSpeed = Math.max(0.1, Math.min(3.0, val));
  }

  public toggleAtpActive(): boolean {
    this.isAtpActive = !this.isAtpActive;
    return this.isAtpActive;
  }

  public togglePause(): boolean {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  public setExplanationStep(stepNumber: number) {
    const stage = LPT_EXPLANATION_STAGES.find((s) => s.step === stepNumber);
    if (!stage) return;

    this.currentStageIndex = stage.step - 1;
    this.isTourActive = true;

    if (this.onSubtitlesUpdate) {
      this.onSubtitlesUpdate(stage.spoken, stage.title, stage.color);
    }
    if (this.onStageChange) {
      this.onStageChange(stage.step);
    }

    this.transitionCameraTo(
      new THREE.Vector3(...stage.target),
      stage.camRadius,
      stage.camTheta,
      stage.camPhi
    );

    this.highlightActivePiece(stage.id);
  }

  private highlightActivePiece(stageId: string) {
    const focusMap: Record<string, string> = {
      'im_extraction': 'Piece_LPT_LptFG_Permease',
      'periplasmic_handover': 'Piece_LPT_LptC_Coupler',
      'jellyroll_slide': 'Piece_LPT_LptA_Bridge',
      'om_gating': 'Piece_LPT_LptD_Barrel',
      'leaflet_deposition': 'Piece_LPT_Bound_LPS'
    };

    const targetPiece = focusMap[stageId];
    this.pieceMeshes.forEach((mesh, name) => {
      if (!mesh.material) return;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      const isTarget = !targetPiece || name === targetPiece || (targetPiece && name.startsWith(targetPiece));
      if (isTarget) {
        mat.opacity = 1.0;
        mat.transparent = false;
        mat.depthWrite = true;
      } else {
        mat.opacity = 0.52;
        mat.transparent = true;
        mat.depthWrite = false; // Prevent transparent pieces from occluding translocating beads inside chute
      }
    });
  }

  private transitionCameraTo(target: THREE.Vector3, radius: number, theta: number, phi: number) {
    this.camStartPos.copy(this.camera.position);
    if (this.controls && this.controls.target) {
      this.camStartTarget.copy(this.controls.target);
    } else {
      this.camStartTarget.copy(target);
    }

    const x = target.x + radius * Math.sin(phi) * Math.sin(theta);
    const y = target.y + radius * Math.cos(phi);
    const z = target.z + radius * Math.sin(phi) * Math.cos(theta);

    this.camEndPos.set(x, y, z);
    this.camEndTarget.copy(target);
    this.camLerpProgress = 0.0;
  }

  public resetCamera() {
    this.transitionCameraTo(new THREE.Vector3(0, 1.5, 0), 52, 0.0, 1.4);
    if (this.controls) {
      this.controls.target.set(0, 1.5, 0);
      this.controls.update();
    }
  }

  public focusComponent(key: string) {
    const anchor = this.leaderAnchors.find((a) => a.key === key);
    if (anchor) {
      if (anchor.worldPos) {
        this.transitionCameraTo(anchor.worldPos.clone(), 26, 0.25, 1.35);
      } else if (anchor.targetMeshName && anchor.offset) {
        const mesh = this.getMeshByNameOrPrefix(anchor.targetMeshName);
        if (mesh) {
          const worldPos = anchor.offset.clone();
          mesh.localToWorld(worldPos);
          this.transitionCameraTo(worldPos, 22, 0.25, 1.35);
        }
      }
    } else {
      this.resetCamera();
    }
  }

  public selectComponent(key: string) {
    const meta = LPT_COMPONENTS_META[key];
    if (meta) {
      this.onSelectComponent(meta);
    }
  }

  public toggleAutoRotate(): boolean {
    if (!this.controls) return false;
    this.controls.autoRotate = !this.controls.autoRotate;
    this.controls.autoRotateSpeed = 1.2;
    return this.controls.autoRotate;
  }

  public handleResize() {
    if (!this.renderer || !this.camera || !this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  public start() {
    this.active = true;
    if (!this.animFrameId) {
      this.clock.start();
      this.animate();
    }
  }

  public stop() {
    this.active = false;
    if (this.keyboardFlight) {
      this.keyboardFlight.resetKeys();
    }
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public dispose() {
    this.stop();
    if (this.keyboardFlight) {
      this.keyboardFlight.dispose();
      this.keyboardFlight = null;
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    if (this.svgLayer && this.svgLayer.parentNode) {
      this.svgLayer.parentNode.removeChild(this.svgLayer);
    }
  }

  // ---------------------------------------------------------------------------
  // Animation Loop
  // ---------------------------------------------------------------------------

  private animate = () => {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    if (this.keyboardFlight) {
      this.keyboardFlight.update(delta);
    }

    // 1. Camera interpolation
    if (this.camLerpProgress < 1.0) {
      this.camLerpProgress += delta * 1.5;
      const t = Math.min(1.0, this.camLerpProgress);
      const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, easeT);
      if (this.controls && this.controls.target) {
        this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, easeT);
      }
    }

    if (this.controls) {
      this.controls.update();
    }

    // 2. Processive Trans-Envelope LPS Stream Animation
    // Flowing from IM (Y = -8.5) up through LptB2FG, LptC, LptA, LptDE to OM (Y = +13.5)
    const effectiveSpeed = (this.isPaused || !this.isAtpActive) ? 0.0 : this.exportSpeed;

    if (effectiveSpeed > 0.001) {
      const cycle = elapsed * 0.8 * effectiveSpeed;
      const clusterCount = this.lpsClusters.length;

      for (let i = 0; i < clusterCount; i++) {
        const cluster = this.lpsClusters[i];
        const frac = ((i / clusterCount) + (cycle % 1.0)) % 1.0;

        // Path across 22.0 nm vertical span:
        // Y: -8.5 (IM) -> -5.5 (LptFG) -> 0.0 (LptC) -> 4.5 (LptA) -> 10.5 (LptD) -> 13.5 (OM outer leaflet)
        const y = -8.5 + frac * 22.0;

        // Gentle sinusoidal curve following the hydrophobic chute curvature
        const x = Math.sin(frac * Math.PI * 2.5) * 0.6;
        const z = 0.5 + Math.cos(frac * Math.PI * 2) * 0.4;

        cluster.position.set(x, y, z);

        // Substrate orientation alignment along vertical transport vector
        cluster.rotation.y = frac * Math.PI * 2;
        cluster.rotation.z = Math.sin(frac * Math.PI) * 0.2;

        // Scale: slight expansion as it reaches the OM surface
        const s = 0.85 + 0.3 * (frac > 0.85 ? (frac - 0.85) / 0.15 : 0);
        cluster.scale.set(s, s, s);
      }
    }

    // 3. Update dynamic SVG leader lines
    this.updateSVGLeaders();

    // 4. Render
    this.renderer.render(this.scene, this.camera);
  };
}
