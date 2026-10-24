// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial BAM Complex Outer Membrane Protein Insertase — 3D Scenario Engine
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 5D0O)
 * Adhering strictly to CELLULAR_INSPECTOR_BLUEPRINT.md and BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 *
 * Subunits & Functional Pieces:
 * 1. Piece_BAM_BamA_Barrel (Deep Marine #0077B6) — 16-stranded transmembrane beta-barrel core
 * 2. Piece_BAM_Lateral_Seam (Luminous Cyan #00F5D4) — Dynamic beta-16 unzipping strand
 * 3. Piece_BAM_BamA_POTRA (Warm Amber #F77F00) — 5 periplasmic POTRA chaperone-binding domains
 * 4. Piece_BAM_BamB (Luminous Teal #2EC4B6) — 8-bladed beta-propeller lipoprotein scaffold
 * 5. Piece_BAM_BamC (Lilac Purple #9D4EDD) — Periplasmic lipoprotein with helix-grip motifs
 * 6. Piece_BAM_BamD (Warm Terracotta #E76F51) — Essential TPR-clamp linking POTRA to barrel base
 * 7. Piece_BAM_BamE (Luminous Jade #06D6A0) — Membrane lipid-anchored stabilizing clamp
 * 8. Piece_BAM_Client_OMP (Luminous Gold #FFE066) — Nascent inserting beta-hairpin substrate loop
 *
 * Biophysical Systems:
 * - Asymmetric Outer Membrane Bilayer Slab (Periplasmic Phospholipids + Extracellular LPS Leaflet)
 * - Dynamic Lateral Seam unzipping (beta-1 / beta-16 strand parting up to 1.6 nm)
 * - ATP-independent insertion driven by folding thermodynamics (Delta G_folding < 0)
 * - Exploded view dissociation along natural biophysical vectors
 * - 5-Stage Explanatory Trace with camera dollies & closed captions
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { BAMComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const BAM_COMPONENTS_META: Record<string, BAMComponentData> = {
  'bam_holoenzyme': {
    name: 'Complete BAM Outer Membrane Insertase (PDB: 5D0O)',
    badge: 'BETA-BARREL ASSEMBLY MACHINERY',
    dims: 'Width: ~11.5 nm, Depth: ~14.8 nm, Holoenzyme Mass: ~200 kDa',
    proteins: 'BamA (16 TMs + 5 POTRA), BamB (8-propeller), BamC, BamD (5 TPRs), BamE',
    pdb: 'PDB: 5D0O (2.90 Å Crystal Structure, Bakelar et al., Science 2016)',
    desc: 'The essential outer membrane protein insertase of Gram-negative bacteria. Catalyzes the insertion and folding of all beta-barrel outer membrane proteins (such as OmpF, OmpA, and LptD) into the asymmetric lipid bilayer without consuming ATP or proton-motive force.',
    role: 'Biogenesis of the outer membrane permeability barrier, nutrient porins, and trans-envelope secretion machines.',
    stoichiometry: '1 BamA + 1 BamB + 1 BamC + 1 BamD + 1 BamE + 1 Unfolded OMP Client.',
    energySource: 'ATP-Independent (Driven purely by client folding free energy Delta G < 0)',
    turnoverRate: '~0.5–2.0 min^-1 per BAM machine under physiological conditions'
  },
  'outer_membrane': {
    name: 'Outer Asymmetric Membrane (LPS / Phospholipid Bilayer)',
    badge: 'OUTER ENVELOPE BARRIER',
    dims: 'Thickness: ~3.2 nm, Diameter: ~56 nm',
    proteins: 'Extracellular LPS Leaflet (Deep Marine #0077B6) + Periplasmic Phospholipid Leaflet (Seafoam Jade #06D6A0)',
    pdb: 'Cryo-EM Outer Envelope Bilayer',
    desc: 'The asymmetric lipid bilayer in which the BAM complex operates. Contains an outer leaflet of LPS lipid A molecules and an inner leaflet of phospholipids. BamA thins and destabilizes this bilayer locally to allow insertion of beta-barrel outer membrane proteins.',
    role: 'Hydrophobic permeability barrier and insertion destination for folded beta-barrels.',
    stoichiometry: 'Asymmetric outer envelope: outer leaflet ~100% LPS, inner leaflet ~100% phospholipids.'
  },
  'bama_barrel': {
    name: 'BamA Transmembrane Beta-Barrel Core',
    badge: 'TRANSMEMBRANE BETA-BARREL (STRANDS 1–15)',
    dims: 'Pore Diameter: ~2.4 nm, Height: ~4.5 nm (res 424–785)',
    proteins: 'BamA Transmembrane Domain (Chain A, 15 beta-strands)',
    pdb: 'PDB: 5D0O [Chain A]',
    desc: 'The 16-stranded transmembrane beta-barrel embedded in the outer membrane. Features a hydrophobic exterior matching the outer membrane hydrocarbon core and an aqueous lumen.',
    role: 'Provides the membrane-spanning scaffold and scaffold surface for substrate folding.'
  },
  'lateral_seam': {
    name: 'BamA Dynamic Lateral Seam (Strand Beta-16)',
    badge: 'DYNAMIC LATERAL SEAM (STRAND BETA-16)',
    dims: 'Length: ~3.8 nm, Seam Displacement: 0 to 1.6 nm (res 786–810)',
    proteins: 'BamA C-terminal Strand Beta-16 (Chain A)',
    pdb: 'PDB: 5D0O [Chain A, res 786–810]',
    desc: 'The catalytic lateral gate of BamA. Formed by weak, irregular hydrogen bonds between beta-strand 1 and beta-strand 16. Destabilization of this seam thins the adjacent lipid bilayer and opens a lateral slot.',
    role: 'Unzips dynamically to allow client beta-hairpins to integrate sideways into the lipid bilayer.'
  },
  'bama_potra': {
    name: 'BamA Periplasmic POTRA Domains (POTRA 1–5)',
    badge: 'PERIPLASMIC RECEPTOR HINGE (POTRA 1–5)',
    dims: 'Span: ~8.5 nm along periplasmic axis (res 24–423)',
    proteins: 'BamA N-terminal Soluble Domains (5 tandem POTRA folds)',
    pdb: 'PDB: 5D0O [Chain A, res 24–423]',
    desc: 'Five tandem Polypeptide-Transport-Associated (POTRA) domains extending into the periplasm. POTRA 1 and 2 serve as the primary docking site for the SurA chaperone, while POTRA 5 acts as a flexible conformational hinge.',
    role: 'Captures unfolded OMP clients from SurA and coordinates gating with the BamD clamp.'
  },
  'bamb_scaffold': {
    name: 'BamB 8-Bladed Beta-Propeller Scaffold',
    badge: 'LIPOPROTEIN PROPELLER SCAFFOLD (BAMB)',
    dims: 'Diameter: ~4.6 nm, Height: ~3.2 nm (res 31–391)',
    proteins: 'BamB (Chain B, 392 aa, 8 WD-repeat beta-propeller blades)',
    pdb: 'PDB: 5D0O [Chain B]',
    desc: 'An 8-bladed beta-propeller lipoprotein anchored to the inner leaflet of the outer membrane. Binds directly to the hinge between POTRA 2 and 3.',
    role: 'Stabilizes the periplasmic ring architecture and coordinates chaperone client flow.'
  },
  'bamc_lipoprotein': {
    name: 'BamC Periplasmic Lipoprotein',
    badge: 'PERIPHERAL LIPOPROTEIN (BAMC)',
    dims: 'Span: ~3.5 nm (Chain C, res 30–85 visualized)',
    proteins: 'BamC (Chain C, structured N-terminal domain)',
    pdb: 'PDB: 5D0O [Chain C]',
    desc: 'Periplasmic lipoprotein with an N-terminal helix-grip fold contacting BamD. Interacts with periplasmic chaperones and envelope stress factors.',
    role: 'Assists in complex stability and outer membrane integrity maintenance.'
  },
  'bamd_clamp': {
    name: 'BamD Essential TPR-Clamp',
    badge: 'ESSENTIAL CATALYTIC CLAMP (BAMD)',
    dims: 'Length: ~6.2 nm (5 TPR motifs, res 27–244)',
    proteins: 'BamD (Chain D, 5 Tetratricopeptide Repeat motifs)',
    pdb: 'PDB: 5D0O [Chain D]',
    desc: 'The only essential lipoprotein in the BAM complex. Contains 5 TPR motifs that form an elongated curved clamp bridging POTRA domains 1–2 directly to the periplasmic rim of the BamA barrel.',
    role: 'Transmits conformational signals from client binding at POTRA to lateral seam opening.'
  },
  'bame_clip': {
    name: 'BamE Lipid-Anchored Stabilizing Clip',
    badge: 'MEMBRANE CLIP LIPOPROTEIN (BAME)',
    dims: 'Diameter: ~2.8 nm (res 29–111)',
    proteins: 'BamE (Chain E, beta-barrel fold with lipid-binding groove)',
    pdb: 'PDB: 5D0O [Chain E]',
    desc: 'Smallest subunit of the BAM complex. Binds directly to the inner leaflet of the outer membrane and latches BamD to BamA.',
    role: 'Prevents premature unzipping of the lateral seam and coordinates lipid displacement.'
  },
  'client_omp': {
    name: 'Nascent Inserting Beta-Hairpin Client',
    badge: 'INSERTING SUBSTRATE POLYPEPTIDE',
    dims: 'Length: ~4.2 nm (16-aa beta-hairpin substrate)',
    proteins: 'Modelled nascent Outer Membrane Porin beta-hairpin (OmpF precursor / BamA precursor)',
    pdb: 'Simulated Substrate (Ma et al. / Bakelar et al.)',
    desc: 'The hydrophobic beta-hairpin substrate delivered by SurA. Enters the unzipped lateral seam of BamA, pairing with strand beta-16 to initiate barrel circularization in the membrane.',
    role: 'Substrate undergoing assisted thermodynamic folding into the outer membrane.'
  },
  'budding_barrel': {
    name: 'Nascent Folded Beta-Barrel (OMP Budding)',
    badge: 'OMP ASSEMBLY & BUDDING',
    dims: 'Diameter: ~3.3 nm, Height: ~4.0 nm (16-Strand Porin / BamA)',
    proteins: 'Nascent Outer Membrane Protein (OmpF / BamA auto-insertion)',
    pdb: 'PDB: 2OMF (OmpF Porin) / 5D0O',
    desc: 'The newly synthesized and folded outer membrane beta-barrel protein. Assembles at the BamA lateral seam through sequential beta-hairpin template pairing, circularizes into a closed cylinder, and buds laterally into the outer membrane without consuming ATP.',
    role: 'Nutrient transport porin or new BAM complex component (self-propagation).'
  },
  'sura_dock': {
    name: 'SurA Periplasmic Chaperone Dock',
    badge: 'CHAPERONE DOCK (POTRA 1–2)',
    dims: 'Span: ~8.5 nm along periplasmic axis',
    proteins: 'SurA chaperone (PDB: 1M5Y) bound to POTRA 1–2',
    pdb: 'PDB: 1M5Y / 5D0O',
    desc: 'The periplasmic chaperone delivery receptor. SurA binds nascent unfolded outer membrane proteins emerging from SecYEG, preventing aggregation in the aqueous periplasm, and docks specifically at BamA POTRA 1–2 to hand over the client.',
    role: 'Prevents periplasmic protein aggregation and targets client OMPs to BAM.'
  },
  'collocated_ompf': {
    name: 'Collocated Mature OmpF Porin in Outer Membrane',
    badge: 'RELEASED OM PORIN (OMPF)',
    dims: 'Diameter: ~3.3 nm, Height: ~4.0 nm (16-Strand β-Barrel)',
    proteins: 'Trimeric Outer Membrane Porin F (OmpF)',
    pdb: 'PDB: 2OMF',
    desc: 'A mature, previously folded and released 16-stranded beta-barrel nutrient porin. Diffuses laterally in the outer membrane plane around the mother BAM complex, facilitating passive diffusion of small polar molecules and nutrients.',
    role: 'Forms water-filled channels across the outer membrane to allow nutrient uptake into the periplasm.'
  },
  'collocated_bama': {
    name: 'Auto-Assembled Daughter BamA Complex',
    badge: 'SELF-PROPAGATED BAMA COMPLEX',
    dims: 'Diameter: ~4.2 nm (16-Strand β-Barrel + POTRAs)',
    proteins: 'Newly integrated BamA (Auto-Assembly)',
    pdb: 'PDB: 5D0O',
    desc: 'A fully assembled daughter BamA complex integrated into the outer membrane bilayer. Created by the mother BAM complex during cell growth, ready to recruit BamB-C-D-E lipoproteins and become a self-sufficient insertase factory for cell division.',
    role: 'Expands the outer membrane protein folding capacity during cellular replication and division.'
  }
};

export interface BAMExplanationStage {
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

export const BAM_EXPLANATION_STAGES: BAMExplanationStage[] = [
  {
    step: 1,
    id: 'chaperone_handover',
    badge: 'SurA',
    title: '1. Chaperone Client Handover',
    color: '#F77F00',
    spoken: 'Step one: Chaperone Client Handover. The periplasmic chaperone SurA delivers an unfolded polypeptide, such as an OmpF porin precursor or newly synthesized BamA, to the N-terminal POTRA domains of BamA, preventing toxic aggregation in the periplasm.',
    target: [-4.6, -4.8, 1.2],
    camRadius: 26,
    camTheta: 0.35,
    camPhi: 1.40
  },
  {
    step: 2,
    id: 'potra_gating',
    badge: 'BamD',
    title: '2. POTRA Conformational Gating',
    color: '#E76F51',
    spoken: 'Step two: POTRA Conformational Gating. POTRA domains 1 through 5 undergo a conformational rearrangement coordinated by the essential BamD clamp, lifting the client peptide along the POTRA chain toward the membrane rim.',
    target: [-2.2, -2.6, 0.8],
    camRadius: 22,
    camTheta: 0.50,
    camPhi: 1.35
  },
  {
    step: 3,
    id: 'seam_destabilization',
    badge: 'SEAM',
    title: '3. Lateral Seam Destabilization',
    color: '#00F5D4',
    spoken: 'Step three: Lateral Seam Destabilization. The weak hydrogen bonds between beta strands 1 and 16 of the BamA barrel unzip, opening a lateral slot directly into the thinned outer membrane lipid bilayer.',
    target: [0.74, -0.6, 0.35],
    camRadius: 18,
    camTheta: 0.20,
    camPhi: 1.35
  },
  {
    step: 4,
    id: 'hairpin_insertion',
    badge: 'HAIRPIN',
    title: '4. Beta-Hairpin Membrane Insertion',
    color: '#FFE066',
    spoken: 'Step four: Beta-Hairpin Membrane Insertion. Consecutive hydrophobic beta-hairpins insert sideways into the opened seam, pairing against strand beta-16 as an assembly template to form the new barrel wall.',
    target: [1.8, 0.0, 0.25],
    camRadius: 18,
    camTheta: 0.15,
    camPhi: 1.35
  },
  {
    step: 5,
    id: 'barrel_budding',
    badge: 'PROPAGATION',
    title: '5. Barrel Budding & Lateral OM Propagation',
    color: '#0077B6',
    spoken: 'Step five: Barrel Budding and Membrane Propagation. The newly folded beta-barrel circularizes and buds laterally outward into the outer membrane lipid bilayer. Successive folding cycles release mature porins and auto-assembled BamA barrels that diffuse laterally, forming a collocated colony of functional nanomachinery across the bacterial cell surface!',
    target: [2.0, 0.0, 0.0],
    camRadius: 36,
    camTheta: 0.30,
    camPhi: 1.36
  }
];

interface CollocatedBarrel {
  id: string;
  name: string;
  group: THREE.Group;
  basePos: THREE.Vector3;
  driftAngle: number;
  driftSpeed: number;
  driftRadius: number;
  stageIntro: number;
  materials: THREE.MeshStandardMaterial[];
}

export class BAMComplexScene {
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

  // Asymmetric Outer Membrane Bilayer
  private membraneGroup: THREE.Group = new THREE.Group();
  private innerLPSMesh: THREE.InstancedMesh | null = null;
  private outerPLMesh: THREE.InstancedMesh | null = null;

  // Inserting Client OMP Stream & Nascent Budding Barrel
  private clientHairpinMesh: THREE.Mesh | null = null;
  private clientBeadsGroup: THREE.Group = new THREE.Group();
  private clientBeads: THREE.Mesh[] = [];
  private buddingBarrelGroup: THREE.Group = new THREE.Group();
  private nascentStrandMaterials: THREE.MeshStandardMaterial[] = [];
  private clientMode: 'ompf' | 'bama' = 'ompf';

  // Collocated Outer Membrane Barrels (Diffusing Porins & Daughter BamA)
  private collocatedBarrelsGroup: THREE.Group = new THREE.Group();
  private collocatedBarrels: CollocatedBarrel[] = [];
  private clientSpline: THREE.CatmullRomCurve3 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-4.6, -5.5, 1.2),  // 0: Periplasmic SurA chaperone dock at POTRA 1-2
    new THREE.Vector3(-4.2, -4.2, 1.1),  // 1: Traversing POTRA 2-3 interface
    new THREE.Vector3(-3.0, -3.2, 0.9),  // 2: Ascending along POTRA 3-4
    new THREE.Vector3(-1.5, -2.2, 0.6),  // 3: POTRA 5 conformational hinge
    new THREE.Vector3(-0.2, -1.4, 0.4),  // 4: Periplasmic entry to BamA barrel base
    new THREE.Vector3(0.74, -0.9, 0.35), // 5: Entering dynamic lateral seam (between beta-1 and beta-16)
    new THREE.Vector3(1.3, -0.2, 0.3),   // 6: Translocating across membrane seam interface
    new THREE.Vector3(2.0, 0.2, 0.2),    // 7: Emerging into outer membrane insertion zone
    new THREE.Vector3(2.8, 0.0, 0.1),    // 8: Incorporating into nascent beta-barrel wall
    new THREE.Vector3(3.6, -0.1, 0.0)    // 9: Completing circularized outer membrane barrel
  ]);
  private clientGuideLine: THREE.Line | null = null;

  // Seam Tracking
  private seamMesh: THREE.Mesh | null = null;
  private seamBasePos = new THREE.Vector3();

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
  private lateralSeamOpening: number = 0.0;
  private explodedProgress: number = 0.0;
  private insertionSpeed: number = 1.0;
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
  private onSelectComponent: (comp: BAMComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: BAMComponentData) => void;
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
    this.scene.background = new THREE.Color(0x050912); // Atmospheric deep envelope navy

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 10, 46);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls (Instantiated synchronously)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.target.set(0, -1.0, 0);
    this.controls.minDistance = 6;
    this.controls.maxDistance = 140;
    this.controls.addEventListener('change', () => {
      if (this.onCameraMove) this.onCameraMove();
    });

    // 5. Lighting
    this.setupLighting();

    // 6. Asymmetric Outer Membrane Bilayer Slab
    this.buildAsymmetricOuterMembrane();

    // 7. Inserting Client Polypeptide Stream & Trajectory Guide
    this.buildClientSubstrateStream();
    this.buildClientTrajectoryLine();

    // 8. Nascent Budding Outer Membrane Beta-Barrel Protein
    this.buildBuddingNascentBarrel();

    // 8b. Collocated Outer Membrane Barrels (Propagated Porins & Daughter BamA)
    this.buildCollocatedBarrels();

    // 9. Add Groups to Scene
    this.scene.add(this.membraneGroup);
    this.scene.add(this.modelGroup);
    this.scene.add(this.clientBeadsGroup);
    this.scene.add(this.collocatedBarrelsGroup);

    // 10. Load GLB Model
    this.loadModel();

    // 11. SVG Overlay
    this.setupSVGOverlay();

    // 12. Keyboard navigation (WASD, Arrows, Space, C, Shift, R)
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      controls: this.controls,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateSVGLeaders()
    });

    // 13. Start Animation Loop
    this.start();
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0xdde8f8, 0.85);
    this.scene.add(ambient);

    const mainSun = new THREE.DirectionalLight(0xffffff, 1.4);
    mainSun.position.set(25, 45, 30);
    this.scene.add(mainSun);

    // Luminescent cyan rim light highlighting the dynamic seam
    const seamLight = new THREE.DirectionalLight(0x00f5d4, 1.1);
    seamLight.position.set(0, -5, -35);
    this.scene.add(seamLight);

    // Warm amber fill light illuminating the periplasmic POTRA domains
    const potraLight = new THREE.DirectionalLight(0xf77f00, 0.9);
    potraLight.position.set(-25, -35, 20);
    this.scene.add(potraLight);

    const hemi = new THREE.HemisphereLight(0x2a4365, 0x1a202c, 0.6);
    this.scene.add(hemi);
  }

  private buildAsymmetricOuterMembrane() {
    // Outer Membrane is strictly asymmetric:
    // Outer leaflet (Extracellular): Lipopolysaccharide (LPS) Lipid A headgroups (Deep Marine #0077B6) at Y = +1.6 nm
    // Inner leaflet (Periplasmic): Phospholipids (Seafoam Green #06D6A0) at Y = -1.6 nm
    const radius = 28;
    const ringSpacing = 1.4;
    const numRings = Math.floor(radius / ringSpacing);

    // Positions of all 5 outer membrane beta-barrels to ensure authentic open aqueous lumens (no lipid spheres inside pores)
    const barrelCenters = [
      { x: 3.6, z: 0.1 },  // budding nascent barrel
      { x: 8.5, z: 2.5 },  // OmpF porin 1
      { x: 5.5, z: -7.5 }, // OmpC porin 2
      { x: -6.5, z: -6.8 },// OmpA porin 3
      { x: -8.2, z: 3.8 }  // daughter BamA 4
    ];
    const inBarrelLumen = (x: number, z: number) => {
      return barrelCenters.some((b) => {
        const dx = x - b.x;
        const dz = z - b.z;
        return (dx * dx + dz * dz) < (1.55 * 1.55);
      });
    };

    const lpsPoints: THREE.Vector3[] = [];
    const plPoints: THREE.Vector3[] = [];
    for (let r = 1; r <= numRings; r++) {
      const curR = r * ringSpacing;
      // Skip hole for BamA barrel (barrel radius ~ 2.4 nm)
      if (curR < 3.2) continue;
      const count = Math.floor(2 * Math.PI * curR / ringSpacing);
      for (let i = 0; i < count; i++) {
        const thetaLps = (i / count) * Math.PI * 2 + (r % 2) * 0.2;
        const xLps = curR * Math.cos(thetaLps);
        const zLps = curR * Math.sin(thetaLps);
        // Clean front cutaway window so POTRA 1-5, BamB-E, and lateral seam are 100% unobstructed
        const inFrontCutawayLps = (zLps > 1.5 && Math.abs(xLps) < 11.5);
        if (!inBarrelLumen(xLps, zLps) && !inFrontCutawayLps) {
          lpsPoints.push(new THREE.Vector3(xLps, 0, zLps));
        }

        // Stagger periplasmic PL leaflet by half angular spacing for biophysical packing & see-through visibility
        const thetaPl = thetaLps + Math.PI / count;
        const xPl = curR * Math.cos(thetaPl);
        const zPl = curR * Math.sin(thetaPl);
        const inFrontCutawayPl = (zPl > 1.5 && Math.abs(xPl) < 11.5);
        if (!inBarrelLumen(xPl, zPl) && !inFrontCutawayPl) {
          plPoints.push(new THREE.Vector3(xPl, 0, zPl));
        }
      }
    }

    const sphereGeo = new THREE.SphereGeometry(0.38, 12, 10);

    // 1. Extracellular LPS Leaflet (Y = +1.6 nm) - Deep Marine
    const lpsMat = new THREE.MeshStandardMaterial({
      color: 0x0077b6,
      roughness: 0.3,
      metalness: 0.15,
      emissive: 0x003f66,
      emissiveIntensity: 0.25,
      depthWrite: true
    });
    const lpsMesh = new THREE.InstancedMesh(sphereGeo, lpsMat, lpsPoints.length);
    const dummy = new THREE.Object3D();

    lpsPoints.forEach((pt, idx) => {
      dummy.position.set(pt.x, 1.6, pt.z);
      dummy.scale.set(1.1, 1.0, 1.1); // Slightly larger LPS headgroups
      dummy.updateMatrix();
      lpsMesh.setMatrixAt(idx, dummy.matrix);
    });
    lpsMesh.instanceMatrix.needsUpdate = true;
    this.membraneGroup.add(lpsMesh);
    this.innerLPSMesh = lpsMesh;

    // 2. Periplasmic Phospholipid Leaflet (Y = -1.6 nm) - Seafoam Jade
    const plMat = new THREE.MeshStandardMaterial({
      color: 0x06d6a0,
      roughness: 0.35,
      metalness: 0.1,
      emissive: 0x025c43,
      emissiveIntensity: 0.25,
      depthWrite: true
    });
    const plMesh = new THREE.InstancedMesh(sphereGeo, plMat, plPoints.length);

    plPoints.forEach((pt, idx) => {
      dummy.position.set(pt.x, -1.6, pt.z);
      dummy.scale.set(0.95, 0.95, 0.95);
      dummy.updateMatrix();
      plMesh.setMatrixAt(idx, dummy.matrix);
    });
    plMesh.instanceMatrix.needsUpdate = true;
    this.membraneGroup.add(plMesh);
    this.outerPLMesh = plMesh;

    // 3. Translucent Hydrophobic Core Slab (Extruded disk spanning Y = -1.6 to +1.6 nm, radius 28 nm, central hole 3.2 nm)
    const omShape = new THREE.Shape();
    omShape.absarc(0, 0, radius, 0, Math.PI * 2, false);
    const omHole = new THREE.Path();
    omHole.absarc(0, 0, 3.2, 0, Math.PI * 2, true);
    omShape.holes.push(omHole);

    const omExtrudeSettings = {
      depth: 3.2,
      bevelEnabled: false,
      curveSegments: 64
    };
    const omCoreGeo = new THREE.ExtrudeGeometry(omShape, omExtrudeSettings);
    const omCoreMat = new THREE.MeshStandardMaterial({
      color: 0x00b4d8, // Luminous cerulean translucent slab
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.11, // Super clean glass-like translucency: see through from top and bottom
      depthWrite: false, // Critical: do NOT block spheres, seam or beads behind/below
      side: THREE.DoubleSide
    });
    const omCoreMesh = new THREE.Mesh(omCoreGeo, omCoreMat);
    omCoreMesh.rotation.x = Math.PI / 2;
    omCoreMesh.position.set(0, 1.6, 0); // Extrudes along -Y from 1.6 down to -1.6
    omCoreMesh.renderOrder = 1;
    this.membraneGroup.add(omCoreMesh);

    // Outer Boundary Rings
    const topOuterRingGeo = new THREE.RingGeometry(radius - 0.25, radius, 64);
    const topOuterRingMat = new THREE.MeshBasicMaterial({ color: 0x0077b6, side: THREE.DoubleSide, transparent: true, opacity: 0.55, depthWrite: false });
    const topOuterRing = new THREE.Mesh(topOuterRingGeo, topOuterRingMat);
    topOuterRing.rotation.x = Math.PI / 2;
    topOuterRing.position.y = 1.6;
    this.membraneGroup.add(topOuterRing);

    const botOuterRingMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false });
    const botOuterRing = new THREE.Mesh(topOuterRingGeo, botOuterRingMat);
    botOuterRing.rotation.x = Math.PI / 2;
    botOuterRing.position.y = -1.6;
    this.membraneGroup.add(botOuterRing);

    // Central aperture inner boundary rings (around BamA barrel at Y = +1.6 and Y = -1.6)
    const innerRingGeo = new THREE.RingGeometry(3.0, 3.2, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({ color: 0x00f5d4, side: THREE.DoubleSide, transparent: true, opacity: 0.5, depthWrite: false });
    const topInnerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    topInnerRing.rotation.x = Math.PI / 2;
    topInnerRing.position.y = 1.6;
    this.membraneGroup.add(topInnerRing);

    const botInnerRing = topInnerRing.clone();
    botInnerRing.position.y = -1.6;
    this.membraneGroup.add(botInnerRing);

    // 4. Extracellular LPS O-Antigen Polysaccharide Chains (Violet/Purple #9D4EDD / #7209B7) matching expected_bam.png
    const oAntigenGeo = new THREE.CylinderGeometry(0.18, 0.24, 2.8, 8);
    const oAntigenMat = new THREE.MeshStandardMaterial({
      color: 0x9d4edd,
      emissive: 0x480ca8,
      emissiveIntensity: 0.35,
      roughness: 0.35,
      metalness: 0.1
    });
    lpsPoints.forEach((pt, idx) => {
      if (idx % 3 === 0 && Math.abs(pt.x) > 3.6 && Math.abs(pt.x) < 16.0 && pt.z > -8.0 && pt.z < 4.0) {
        const chain = new THREE.Mesh(oAntigenGeo, oAntigenMat);
        chain.position.set(pt.x, 3.1, pt.z);
        chain.rotation.z = Math.sin(idx * 1.7) * 0.15;
        chain.rotation.x = Math.cos(idx * 1.3) * 0.15;
        this.membraneGroup.add(chain);
      }
    });
  }

  private buildClientSubstrateStream() {
    // 18 moving amino acid spheres illustrating continuous client insertion into seam
    const beadGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const beadMat = new THREE.MeshStandardMaterial({
      color: 0xffe066,
      emissive: 0xffb703,
      emissiveIntensity: 0.85,
      roughness: 0.25,
      metalness: 0.2,
      depthWrite: false
    });

    for (let i = 0; i < 18; i++) {
      const bead = new THREE.Mesh(beadGeo, beadMat.clone());
      bead.renderOrder = 5; // Ensure substrate beads remain visible from all angles
      const frac = i / 18;
      bead.position.copy(this.clientSpline.getPointAt(frac));
      this.clientBeadsGroup.add(bead);
      this.clientBeads.push(bead);
    }
  }

  private buildClientTrajectoryLine() {
    // Glowing dashed translocation guide line from SurA through lateral seam to nascent barrel
    const points = this.clientSpline.getPoints(80);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineDashedMaterial({
      color: 0xffe066,
      dashSize: 0.35,
      gapSize: 0.18,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const line = new THREE.Line(lineGeo, lineMat);
    line.computeLineDistances();
    line.renderOrder = 2;
    this.scene.add(line);
    this.clientGuideLine = line;
  }

  private createBarrelMeshGroup(
    numStrands: number = 16,
    radius: number = 1.65,
    barrelColor: number = 0x0077b6,
    accentColor: number = 0x00f5d4,
    loopColor: number = 0xffb703,
    turnColor: number = 0x06d6a0
  ): { group: THREE.Group; strandMaterials: THREE.MeshStandardMaterial[] } {
    const group = new THREE.Group();
    const strandHeight = 3.9;
    const strandWidth = 0.42;
    const strandThick = 0.15;
    const strandGeo = new THREE.BoxGeometry(strandWidth, strandHeight, strandThick);
    const strandMaterials: THREE.MeshStandardMaterial[] = [];

    for (let i = 0; i < numStrands; i++) {
      const angle = (i / numStrands) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      let color = barrelColor;
      let emissive = 0x002845;
      if (i === 0 || i === numStrands - 1) {
        color = accentColor;
        emissive = 0x004875;
      }

      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.15,
        side: THREE.DoubleSide
      });
      strandMaterials.push(mat);

      const strandMesh = new THREE.Mesh(strandGeo, mat);
      strandMesh.position.set(x, 0, z);

      // Antiparallel beta-barrel strand tilt (~42 degrees)
      const tilt = (i % 2 === 0 ? 1 : -1) * 0.45;
      strandMesh.rotation.y = -angle + Math.PI / 2;
      strandMesh.rotation.z = tilt;
      group.add(strandMesh);
    }

    // Top loop arches at Y = +1.95 (extracellular turns)
    const loopMat = new THREE.MeshStandardMaterial({
      color: loopColor,
      emissive: 0x664400,
      emissiveIntensity: 0.35,
      roughness: 0.35,
      metalness: 0.1
    });

    for (let i = 0; i < numStrands; i += 2) {
      const a1 = (i / numStrands) * Math.PI * 2;
      const a2 = ((i + 1) / numStrands) * Math.PI * 2;
      const p1 = new THREE.Vector3(Math.cos(a1) * radius, 1.95, Math.sin(a1) * radius);
      const p2 = new THREE.Vector3(Math.cos(a2) * radius, 1.95, Math.sin(a2) * radius);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      mid.y += 0.5;

      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      const loopGeo = new THREE.TubeGeometry(curve, 8, 0.08, 8, false);
      const loopMesh = new THREE.Mesh(loopGeo, loopMat);
      group.add(loopMesh);
    }

    // Bottom loop turns at Y = -1.95 (periplasmic hairpins)
    const turnMat = new THREE.MeshStandardMaterial({
      color: turnColor,
      emissive: 0x023526,
      emissiveIntensity: 0.35,
      roughness: 0.35,
      metalness: 0.1
    });

    for (let i = 1; i < numStrands; i += 2) {
      const a1 = (i / numStrands) * Math.PI * 2;
      const a2 = (((i + 1) % numStrands) / numStrands) * Math.PI * 2;
      const p1 = new THREE.Vector3(Math.cos(a1) * radius, -1.95, Math.sin(a1) * radius);
      const p2 = new THREE.Vector3(Math.cos(a2) * radius, -1.95, Math.sin(a2) * radius);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      mid.y -= 0.45;

      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      const turnGeo = new THREE.TubeGeometry(curve, 8, 0.08, 8, false);
      const turnMesh = new THREE.Mesh(turnGeo, turnMat);
      group.add(turnMesh);
    }

    return { group, strandMaterials };
  }

  private buildBuddingNascentBarrel() {
    const { group, strandMaterials } = this.createBarrelMeshGroup(
      16,
      1.65,
      0x0077b6,
      0x00f5d4,
      0xffb703,
      0x06d6a0
    );
    this.buddingBarrelGroup = group;
    this.buddingBarrelGroup.name = 'Nascent_Budding_Barrel';
    this.buddingBarrelGroup.position.set(3.6, 0.0, 0.1);
    this.nascentStrandMaterials = strandMaterials;
    this.scene.add(this.buddingBarrelGroup);
  }

  private buildCollocatedBarrels() {
    this.collocatedBarrels = [];
    this.collocatedBarrelsGroup.name = 'Collocated_Outer_Membrane_Barrels';

    const barrelConfigs = [
      {
        id: 'collocated_ompf_1',
        name: 'Mature OmpF Porin',
        basePos: new THREE.Vector3(8.5, 0.0, 2.5),
        color: 0x0077b6,
        accent: 0x00f5d4,
        loop: 0xffb703,
        turn: 0x06d6a0,
        driftSpeed: 0.42,
        driftAngle: 0.0,
        driftRadius: 0.35,
        stageIntro: 1
      },
      {
        id: 'collocated_ompc_2',
        name: 'Mature OmpC Porin',
        basePos: new THREE.Vector3(5.5, 0.0, -7.5),
        color: 0x0096c7,
        accent: 0x00f5d4,
        loop: 0xffd166,
        turn: 0x06d6a0,
        driftSpeed: 0.35,
        driftAngle: 1.8,
        driftRadius: 0.4,
        stageIntro: 2
      },
      {
        id: 'collocated_ompa_3',
        name: 'Mature OmpA Porin',
        basePos: new THREE.Vector3(-6.5, 0.0, -6.8),
        color: 0x023e8a,
        accent: 0x00b4d8,
        loop: 0xffb703,
        turn: 0x06d6a0,
        driftSpeed: 0.38,
        driftAngle: 3.4,
        driftRadius: 0.3,
        stageIntro: 3
      },
      {
        id: 'collocated_bama_4',
        name: 'Daughter BamA (Auto-Assembly)',
        basePos: new THREE.Vector3(-8.2, 0.0, 3.8),
        color: 0x9d4edd,
        accent: 0xffb703,
        loop: 0xffd166,
        turn: 0x06d6a0,
        driftSpeed: 0.28,
        driftAngle: 4.9,
        driftRadius: 0.35,
        stageIntro: 4
      }
    ];

    for (const cfg of barrelConfigs) {
      const { group, strandMaterials } = this.createBarrelMeshGroup(
        16,
        1.65,
        cfg.color,
        cfg.accent,
        cfg.loop,
        cfg.turn
      );
      group.name = cfg.id;
      group.position.copy(cfg.basePos);
      this.collocatedBarrelsGroup.add(group);

      this.collocatedBarrels.push({
        id: cfg.id,
        name: cfg.name,
        group,
        basePos: cfg.basePos.clone(),
        driftAngle: cfg.driftAngle,
        driftSpeed: cfg.driftSpeed,
        driftRadius: cfg.driftRadius,
        stageIntro: cfg.stageIntro,
        materials: strandMaterials
      });
    }
  }

  private async loadModel() {
    const loader = new GLTFLoader();
    const modelUrl = '/prokaryote/models/5D0O_assembled_pieces.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        const root = gltf.scene;

        const bamColorMap: Record<string, { color: number; emissive: number }> = {
          'Piece_BAM_BamA_Barrel': { color: 0x0077b6, emissive: 0x002845 },
          'Piece_BAM_Lateral_Seam': { color: 0xffb703, emissive: 0x664400 },
          'Piece_BAM_BamA_POTRA': { color: 0xf77f00, emissive: 0x5a2800 },
          'Piece_BAM_BamB': { color: 0x2ec4b6, emissive: 0x0b4f48 },
          'Piece_BAM_BamC': { color: 0x9d4edd, emissive: 0x3c096c },
          'Piece_BAM_BamD': { color: 0xe63946, emissive: 0x590d14 },
          'Piece_BAM_BamE': { color: 0x06d6a0, emissive: 0x024532 },
          'Piece_BAM_Client_OMP': { color: 0x38b000, emissive: 0x144500 }
        };

        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            for (const [prefix, colCfg] of Object.entries(bamColorMap)) {
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

            // Retain per-piece materials
            this.pieceMeshes.set(mesh.name, mesh);
            this.pieceBasePositions.set(mesh.name, mesh.position.clone());

            if (mesh.name === 'Piece_BAM_Lateral_Seam') {
              this.seamMesh = mesh;
              this.seamBasePos.copy(mesh.position);
            }
            if (mesh.name === 'Piece_BAM_Client_OMP') {
              this.clientHairpinMesh = mesh;
            }
          }
        });

        this.modelGroup.add(root);
        this.setupDynamicLeaderAnchors();
      },
      undefined,
      (err) => {
        console.warn('[BAMComplexScene] Could not load 5D0O_assembled_pieces.glb:', err);
      }
    );
  }

  private setupDynamicLeaderAnchors() {
    this.leaderAnchors = [
      {
        key: 'outer_membrane',
        label: 'Outer Asymmetric Membrane',
        color: '#0077B6',
        badge: 'OM',
        worldPos: new THREE.Vector3(14.0, 1.6, -8.0)
      },
      {
        key: 'bama_barrel',
        targetMeshName: 'Piece_BAM_BamA_Barrel',
        label: 'BamA Transmembrane Barrel',
        color: '#0077B6',
        offset: new THREE.Vector3(-1.8, 1.2, 0.0),
        badge: 'BARREL'
      },
      {
        key: 'lateral_seam',
        targetMeshName: 'Piece_BAM_Lateral_Seam',
        label: 'Dynamic Lateral Seam (β16)',
        color: '#00F5D4',
        offset: new THREE.Vector3(0.5, 0.8, 0.4),
        badge: 'SEAM'
      },
      {
        key: 'bama_potra',
        targetMeshName: 'Piece_BAM_BamA_POTRA',
        label: 'BamA POTRA Domains (1–5)',
        color: '#F77F00',
        offset: new THREE.Vector3(0.0, -4.2, 1.8),
        badge: 'POTRA'
      },
      {
        key: 'bamb_scaffold',
        targetMeshName: 'Piece_BAM_BamB',
        label: 'BamB 8-Bladed Propeller',
        color: '#2EC4B6',
        offset: new THREE.Vector3(-3.4, -4.8, 0.0),
        badge: 'BamB'
      },
      {
        key: 'bamc_lipoprotein',
        targetMeshName: 'Piece_BAM_BamC',
        label: 'BamC Lipoprotein',
        color: '#9D4EDD',
        offset: new THREE.Vector3(2.8, -3.2, -1.8),
        badge: 'BamC'
      },
      {
        key: 'bamd_clamp',
        targetMeshName: 'Piece_BAM_BamD',
        label: 'BamD Essential Clamp (TPRs)',
        color: '#E76F51',
        offset: new THREE.Vector3(1.6, -2.4, 1.4),
        badge: 'BamD'
      },
      {
        key: 'bame_clip',
        targetMeshName: 'Piece_BAM_BamE',
        label: 'BamE Lipid-Anchored Clip',
        color: '#06D6A0',
        offset: new THREE.Vector3(1.8, -0.9, 2.2),
        badge: 'BamE'
      },
      {
        key: 'client_omp',
        targetMeshName: 'Piece_BAM_Client_OMP',
        label: 'Inserting β-Hairpin Substrate',
        color: '#FFE066',
        offset: new THREE.Vector3(0.0, 0.2, 0.2),
        badge: 'CLIENT'
      },
      {
        key: 'budding_barrel',
        label: 'Nascent Folded β-Barrel (OMP Budding)',
        color: '#00B4D8',
        worldPos: new THREE.Vector3(3.6, 2.2, 0.1),
        badge: 'BUDDING'
      },
      {
        key: 'sura_dock',
        label: 'SurA Chaperone Delivery Site',
        color: '#F77F00',
        worldPos: new THREE.Vector3(-4.6, -5.2, 1.2),
        badge: 'SurA'
      },
      {
        key: 'collocated_ompf',
        label: 'Collocated OmpF Porin in OM',
        color: '#00B4D8',
        worldPos: new THREE.Vector3(8.5, 2.2, 2.5),
        badge: 'OMPF'
      },
      {
        key: 'collocated_bama',
        label: 'Daughter BamA (Auto-Assembly)',
        color: '#9D4EDD',
        worldPos: new THREE.Vector3(-8.2, 2.2, 3.8),
        badge: 'BAMA-II'
      }
    ];
  }

  private setupSVGOverlay() {
    let svg = this.container.querySelector('.bam-svg-overlay') as SVGSVGElement | null;
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'bam-svg-overlay');
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
        <g class="bam-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(6, 12, 24, 0.90)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10.5" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    // Attach click triggers to subpills
    const items = this.svgLayer.querySelectorAll('.bam-leader-item');
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

  public setLateralSeamOpening(val: number) {
    this.lateralSeamOpening = Math.max(0, Math.min(1.0, val));
    if (this.seamMesh) {
      // Move strand beta-16 outward along -Z and +X to unpair from beta-1
      const offsetZ = -1.6 * this.lateralSeamOpening;
      const offsetX = 0.8 * this.lateralSeamOpening;
      this.seamMesh.position.set(
        this.seamBasePos.x + offsetX,
        this.seamBasePos.y,
        this.seamBasePos.z + offsetZ - (6.0 * this.explodedProgress)
      );
    }
  }

  public setExplodedProgress(val: number) {
    this.explodedProgress = Math.max(0, Math.min(1.0, val));

    // Biophysical exploded view dissociation vectors
    const vectors: Record<string, THREE.Vector3> = {
      'Piece_BAM_BamA_Barrel': new THREE.Vector3(0, 0, 0),
      'Piece_BAM_Lateral_Seam': new THREE.Vector3(0.8 * this.lateralSeamOpening, 0, -1.6 * this.lateralSeamOpening - 6.0 * this.explodedProgress),
      'Piece_BAM_BamA_POTRA': new THREE.Vector3(0, -12.0 * this.explodedProgress, 2.0 * this.explodedProgress),
      'Piece_BAM_BamB': new THREE.Vector3(-14.0 * this.explodedProgress, -10.0 * this.explodedProgress, 0),
      'Piece_BAM_BamC': new THREE.Vector3(12.0 * this.explodedProgress, -6.0 * this.explodedProgress, -8.0 * this.explodedProgress),
      'Piece_BAM_BamD': new THREE.Vector3(8.0 * this.explodedProgress, -4.0 * this.explodedProgress, 10.0 * this.explodedProgress),
      'Piece_BAM_BamE': new THREE.Vector3(8.0 * this.explodedProgress, 0, 8.0 * this.explodedProgress),
      'Piece_BAM_Client_OMP': new THREE.Vector3(0, -8.0 * this.explodedProgress, -8.0 * this.explodedProgress)
    };

    if (this.buddingBarrelGroup) {
      this.buddingBarrelGroup.position.set(3.6 + 12.0 * this.explodedProgress, 0, 0.1);
    }

    for (const b of this.collocatedBarrels) {
      const radial = new THREE.Vector3(b.basePos.x, 0, b.basePos.z).normalize();
      b.group.position.set(
        b.basePos.x + radial.x * 12.0 * this.explodedProgress,
        b.basePos.y,
        b.basePos.z + radial.z * 12.0 * this.explodedProgress
      );
    }

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

    // Smooth camera pullback during exploded disassembly so all BAM subunits & POTRAs stay framed
    if (this.camLerpProgress >= 1.0 && this.controls) {
      this.camera.position.set(0, 10 - this.explodedProgress * 2.0, 46 + this.explodedProgress * 22.0);
      this.controls.target.set(0, -1.0 - this.explodedProgress * 1.5, 0);
      this.controls.update();
    }
  }

  public setClientMode(mode: 'ompf' | 'bama') {
    this.clientMode = mode;
    if (!this.nascentStrandMaterials) return;
    const numStrands = this.nascentStrandMaterials.length;
    for (let i = 0; i < numStrands; i++) {
      const mat = this.nascentStrandMaterials[i];
      if (mode === 'ompf') {
        if (i === 0 || i === 15) {
          mat.color.setHex(0x00f5d4);
          mat.emissive.setHex(0x007a6a);
        } else if (i % 2 === 0) {
          mat.color.setHex(0x0096c7);
          mat.emissive.setHex(0x004875);
        } else {
          mat.color.setHex(0x0077b6);
          mat.emissive.setHex(0x003f66);
        }
      } else {
        // BamA Precursor (Auto-Assembly): Marine blue barrel with Lilac & Golden Amber pairing contact
        if (i === 0 || i === 15) {
          mat.color.setHex(0xffb703);
          mat.emissive.setHex(0x996d00);
        } else if (i % 2 === 0) {
          mat.color.setHex(0x9d4edd);
          mat.emissive.setHex(0x5a189a);
        } else {
          mat.color.setHex(0x0077b6);
          mat.emissive.setHex(0x003f66);
        }
      }
    }
  }

  public getClientMode(): 'ompf' | 'bama' {
    return this.clientMode;
  }

  public setInsertionSpeed(val: number) {
    this.insertionSpeed = Math.max(0.1, Math.min(3.0, val));
  }

  public togglePause(): boolean {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  public setExplanationStep(stepNumber: number) {
    const stage = BAM_EXPLANATION_STAGES.find((s) => s.step === stepNumber);
    if (!stage) return;

    this.currentStageIndex = stage.step - 1;
    this.isTourActive = true;

    if (this.onSubtitlesUpdate) {
      this.onSubtitlesUpdate(stage.spoken, stage.title, stage.color);
    }
    if (this.onStageChange) {
      this.onStageChange(stage.step);
    }

    // Dynamic stage actions (unzip seam in Stage 3 and 4)
    if (stage.id === 'seam_destabilization' || stage.id === 'hairpin_insertion') {
      this.setLateralSeamOpening(0.95);
    } else {
      this.setLateralSeamOpening(0.1);
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
      'chaperone_handover': 'Piece_BAM_BamA_POTRA',
      'potra_gating': 'Piece_BAM_BamD',
      'seam_destabilization': 'Piece_BAM_Lateral_Seam',
      'hairpin_insertion': 'Piece_BAM_Client_OMP',
      'barrel_budding': 'Piece_BAM_BamA_Barrel'
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
        mat.opacity = 0.55;
        mat.transparent = true;
        mat.depthWrite = false; // Prevent transparent pieces from occluding translocating beads inside pore
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
    this.isTourActive = false;
    this.transitionCameraTo(new THREE.Vector3(0, -1.0, 0), 46, 0.0, 1.4);
    if (this.controls) {
      this.controls.target.set(0, -1.0, 0);
      this.controls.update();
    }
  }

  public focusComponent(key: string) {
    const anchor = this.leaderAnchors.find((a) => a.key === key);
    if (anchor) {
      if (anchor.worldPos) {
        this.transitionCameraTo(anchor.worldPos.clone(), 24, 0.2, 1.35);
      } else if (anchor.targetMeshName && anchor.offset) {
        const mesh = this.getMeshByNameOrPrefix(anchor.targetMeshName);
        if (mesh) {
          const worldPos = anchor.offset.clone();
          mesh.localToWorld(worldPos);
          this.transitionCameraTo(worldPos, 22, 0.2, 1.35);
        }
      }
    } else {
      this.resetCamera();
    }
  }

  public selectComponent(key: string) {
    const meta = BAM_COMPONENTS_META[key];
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

    // 2. Client beta-hairpin substrate translocation animation along authentic spline
    const effectiveSpeed = this.isPaused ? 0.0 : this.insertionSpeed;

    if (effectiveSpeed > 0.001) {
      const cycle = elapsed * 0.35 * effectiveSpeed;
      const beadCount = this.clientBeads.length;

      for (let i = 0; i < beadCount; i++) {
        const bead = this.clientBeads[i];
        const frac = ((i / beadCount) + (cycle % 1.0)) % 1.0;

        // Sample position along authentic biophysical spline
        const pos = this.clientSpline.getPointAt(frac);
        bead.position.copy(pos);

        // Subunit color transition:
        // Pre-insertion unfolded polypeptide in periplasm -> folding cyan beta-strand at lateral seam -> porin blue in barrel
        const mat = bead.material as THREE.MeshStandardMaterial;
        if (frac < 0.55) {
          // Pre-insertion unfolded polypeptide (Golden Amber)
          mat.color.setHex(0xffe066);
          mat.emissive.setHex(0xffb703);
          bead.scale.setScalar(0.9);
        } else if (frac < 0.8) {
          // Inserting beta-hairpin in lateral seam (Luminous Cyan)
          mat.color.setHex(0x00f5d4);
          mat.emissive.setHex(0x00a896);
          bead.scale.setScalar(1.1);
        } else {
          // Incorporating into circularized nascent barrel (Royal Blue / Amber)
          if (this.clientMode === 'ompf') {
            mat.color.setHex(0x00b4d8);
            mat.emissive.setHex(0x0077b6);
          } else {
            mat.color.setHex(0xffb703);
            mat.emissive.setHex(0x996d00);
          }
          bead.scale.setScalar(0.85);
        }
      }

      // Nascent budding barrel gentle assembly breathing & lateral membrane displacement
      if (this.buddingBarrelGroup) {
        const breathe = Math.sin(elapsed * 2.5 * effectiveSpeed) * 0.03;
        this.buddingBarrelGroup.scale.set(1.0 + breathe, 1.0, 1.0 + breathe);

        // In Stage 5 (barrel budding & release) or exploded view, barrel buds laterally into outer membrane
        const isStage5 = this.currentStageIndex === 4; // Stage 5 is index 4 (0-based)
        const budTargetX = isStage5 ? 6.2 : (3.6 + this.explodedProgress * 12.0);
        this.buddingBarrelGroup.position.x = THREE.MathUtils.lerp(this.buddingBarrelGroup.position.x, budTargetX, 0.08);
      }

      // Client hairpin loop gentle breathing motion
      if (this.clientHairpinMesh) {
        const breathe = Math.sin(elapsed * 2.5 * effectiveSpeed) * 0.08;
        this.clientHairpinMesh.scale.set(1.0 + breathe, 1.0, 1.0 + breathe);
      }
    }

    // 3. Collocated outer membrane barrels lateral membrane diffusion & tour stage scaling
    for (let i = 0; i < this.collocatedBarrels.length; i++) {
      const b = this.collocatedBarrels[i];
      let targetScale = 1.0;
      if (this.isTourActive) {
        // Progressive emergence across Stages 1 through 5
        targetScale = (this.currentStageIndex + 1) >= b.stageIntro ? 1.0 : 0.0;
      }
      b.group.scale.setScalar(THREE.MathUtils.lerp(b.group.scale.x, targetScale, 0.08));

      // 2D Brownian lateral membrane diffusion in XZ plane
      const driftX = Math.cos(elapsed * b.driftSpeed + b.driftAngle) * b.driftRadius;
      const driftZ = Math.sin(elapsed * b.driftSpeed + b.driftAngle) * b.driftRadius;

      // Radial displacement for exploded view
      const radial = new THREE.Vector3(b.basePos.x, 0, b.basePos.z).normalize();
      const explX = radial.x * 12.0 * this.explodedProgress;
      const explZ = radial.z * 12.0 * this.explodedProgress;

      b.group.position.set(
        b.basePos.x + driftX + explX,
        b.basePos.y,
        b.basePos.z + driftZ + explZ
      );
    }

    // 4. Update dynamic SVG leader lines
    this.updateSVGLeaders();

    // 5. Render
    this.renderer.render(this.scene, this.camera);
  };
}
