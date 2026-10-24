/**
 * mrebCytoskeleton.ts
 *
 * Core Three.js Scene Engine for the Bacterial MreB Actin Helical Rails & Rod Complex (1JCG / 4CZM)
 * Milestone 5.2 in Phase 5 of CELLULAR_ELEMENTS_CATALOG.md
 *
 * Features:
 * - Loads authentic 8-piece decomposed cryo-EM / crystal structure model (PDB: 1JCG / 4CZM)
 * - Adheres strictly to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 * - Smooth exploded view dissociation along biological vectors v_dissoc
 * - Directional processive track motion along the membrane (v = 10 to 50 nm/s, nominal 25 nm/s)
 * - A22 antibiotic inhibitor mode toggle (dissociates rails into monomeric state, triggering spherical rounding)
 * - ATP energy coupling state toggle
 * - 8 dynamic SVG leader lines with lettered subpill badges and 1-click targeting
 * - Universal 6-Stage Explanatory Trace ("How It Works" tutorial engine)
 * - KeyboardFlightController with WASD camera flight, orbit damping
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { MreBComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export interface MreBExplanationStage {
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

export const MREB_COMPONENTS_META: Record<string, MreBComponentData> = {
  'mreb_protofilaments': {
    name: 'MreB Antiparallel Double Protofilament Rails (1JCG / 4CZM)',
    role: 'Sub-Membrane Cytoskeletal Track & Spatial Guide for Peptidoglycan Synthesis',
    badge: 'MreB RAILS',
    dims: '200–400 nm filaments / 5.1 nm subunit repeat (37 kDa)',
    proteins: 'MreB Homomultimer (Bacterial Actin structural homolog)',
    pdb: '1JCG / 4CZM',
    desc: 'Essential prokaryotic actin homolog that polymerizes in an ATP-dependent manner into antiparallel double protofilaments. Bound beneath the cytoplasmic membrane, MreB forms extended helical segments oriented perpendicular to the long cell axis, organizing the Rod complex to maintain rod shape.',
    atpTurnover: '4.2 ATP/min per monomer',
    filamentVelocity: '25 nm/s (physiological range 10–40 nm/s)',
    stoichiometry: 'MreB + ATP ⇌ [MreB]ₙ + ADP + Pi'
  },
  'mreb_atp_pockets': {
    name: 'Catalytic Inter-Domain ATP Nucleotide Clefts',
    role: 'Energy Transduction, Conformational Gate & Polymerization Switch',
    badge: 'ATP ENGINE',
    dims: '1.2 nm cleft',
    proteins: 'Actin fold subdomains IA, IB, IIA, IIB + Asp11, Glu140, Mg²⁺',
    pdb: '1JCG (ANP/MG)',
    desc: 'Conserved deep cleft coordinating adenine nucleotide and catalytic Mg²⁺. ATP binding drives domain closure and filament nucleation, whereas subsequent ATP hydrolysis triggers slow phosphate release and filament remodeling.',
    atpTurnover: '4.2 ATP/min'
  },
  'mreb_membrane_anchor': {
    name: 'N-Terminal Amphipathic Helices & Insertion Loop',
    role: 'Direct Hydrophobic Membrane Anchoring & Curvature Sensing',
    badge: 'AMPHIPATHIC ANCHOR',
    dims: '1.8 nm amphipathic α-helix',
    proteins: 'MreB Met1–Leu11 + Loop 85–95 (Trp, Phe hydrophobic residues)',
    pdb: '4CZM',
    desc: 'Dual membrane-binding elements: the extreme N-terminal amphipathic helix inserts into the inner leaflet of the inner membrane, while the 85–95 loop establishes electrostatic and hydrophobic contacts with anionic phospholipids, sensing negative membrane curvature.'
  },
  'mreb_inner_membrane': {
    name: 'Curved Inner Membrane Bilayer Scaffold',
    role: 'Lipid Bilayer Matrix & Curvature Anchor',
    badge: 'IM BILAYER',
    dims: '3.8 nm bilayer thickness, cylinder curvature',
    proteins: 'Phosphatidylethanolamine (75%) + Phosphatidylglycerol (20%) + Cardiolipin (5%)',
    pdb: 'Bilayer Model',
    desc: 'Cytoplasmic membrane bilayer presenting lateral cylindrical curvature. MreB preferentially associates with regions of negative Gaussian curvature, guiding cell wall synthesis machinery to reinforce the cylindrical side walls.'
  },
  'mreb_rodz_adaptor': {
    name: 'RodZ Bitopic Transmembrane Adaptor Complex',
    role: 'Cytoplasmic-to-Periplasmic Transduction & Synthase Coupling',
    badge: 'RodZ ADAPTOR',
    dims: '7.5 nm trans-membrane span (35 kDa)',
    proteins: 'RodZ (Cytoplasmic HTH domain + TM helix + Periplasmic tail)',
    pdb: '2WUS',
    desc: 'Essential regulatory adaptor bridging cytoplasmic MreB directly to periplasmic peptidoglycan synthases. Its cytoplasmic HTH domain binds MreB subdomain IA, while its single TM helix and periplasmic domain transmit mechanical alignment to RodA and PBP2.',
    stoichiometry: '1 RodZ per 2 MreB monomers'
  },
  'mreb_roda_glycosylase': {
    name: 'RodA SEDS Lipid II Flippase & Transglycosylase',
    role: 'Processive Glycan Strand Polymerization',
    badge: 'RodA GLYCOSYLASE',
    dims: '10-TM transmembrane bundle (45 kDa)',
    proteins: 'RodA (SEDS family glycosyltransferase core)',
    pdb: '6PL5 homolog',
    desc: 'The primary processive cell-wall transglycosylase in the rod elongation complex. Flips Lipid II (bactoprenol-GlcNAc-MurNAc-pentapeptide) across the inner membrane and polymerizes it into linear glycan strands in the periplasm.'
  },
  'mreb_pbp2_transpeptidase': {
    name: 'Penicillin-Binding Protein 2 (PBP2 / MecA)',
    role: 'Cell Wall Transpeptidation & Peptide Cross-Linking',
    badge: 'PBP2 TRANSPEPTIDASE',
    dims: '8 nm periplasmic head (68 kDa)',
    proteins: 'PBP2 / MecA (Class B Penicillin-Binding Protein, Ser330 catalytic nucleophile)',
    pdb: '5LP5 / 6GBS',
    desc: 'Essential transpeptidase enzyme bound to RodA; catalyzes transpeptidation of stem pentapeptides (forming meso-DAP to D-Ala cross-links), cross-linking newly polymerized glycan strands into the pre-existing murein sacculus.'
  },
  'mreb_a22_pocket': {
    name: 'A22 Chemical Inhibitor Pharmacophore Center',
    role: 'Allosteric Depolymerization & Spheroid Morphogenesis',
    badge: 'A22 TRAP (SPHERE)',
    dims: '1.4 nm inhibitor cleft',
    proteins: 'MreB Asp11, Glu140, Glu212 (A22 binding pocket)',
    pdb: '1JCG / A22 docked',
    desc: 'Target of the small-molecule inhibitor A22 (S-(3,4-dichlorobenzyl)isothiourea). Binds in the nucleotide cleft, competitively blocking ATP-dependent polymerization and causing rapid filament disassembly, converting rod-shaped bacteria into viable but spherical spheroids.'
  }
};

export const MREB_EXPLANATION_STAGES: MreBExplanationStage[] = [
  {
    step: 1,
    id: 'rail_overview',
    badge: 'OVERVIEW',
    title: '1. Cytoskeletal Rail Architecture & Rod Shape Maintenance',
    color: '#3A86FF',
    spoken: 'Step one: Rail Architecture. Bacterial actin homolog MreB forms sub-membrane antiparallel double protofilaments. These cytoskeletal tracks orient perpendicular to the bacterial long axis, providing spatial organization to preserve rod-shaped morphology.',
    target: [0.0, 0.0, 0.0],
    camRadius: 36,
    camTheta: 0.80,
    camPhi: 1.25
  },
  {
    step: 2,
    id: 'atp_polymerization',
    badge: 'ATP-POLY',
    title: '2. ATP-Dependent Protofilament Doublet Assembly',
    color: '#FFB703',
    spoken: 'Step two: ATP-Driven Assembly. MreB binds ATP within its deep inter-domain cleft, inducing domain closure that nucleates head-to-tail protofilaments paired antiparallel with a five-point-one nanometer subunit repeat.',
    target: [0.0, 1.2, 0.0],
    camRadius: 20,
    camTheta: 0.35,
    camPhi: 1.20
  },
  {
    step: 3,
    id: 'membrane_insertion',
    badge: 'MEMBRANE',
    title: '3. Membrane Anchoring via Amphipathic Helices',
    color: '#00F5D4',
    spoken: 'Step three: Membrane Insertion. MreB inserts its N-terminal amphipathic helix directly into the inner leaflet of the cytoplasmic membrane, sensing negative curvature and anchoring the filament track to the bilayer.',
    target: [0.0, -1.8, 0.0],
    camRadius: 18,
    camTheta: 0.45,
    camPhi: 1.30
  },
  {
    step: 4,
    id: 'rodz_coupling',
    badge: 'RodZ LINK',
    title: '4. Trans-Envelope Coupling through the RodZ Adaptor',
    color: '#E63946',
    spoken: 'Step four: RodZ Coupling. The bitopic membrane protein RodZ binds MreB subdomain one-A through its cytoplasmic helix-turn-helix domain, spanning the membrane to transmit mechanical signals to periplasmic synthases.',
    target: [-2.5, -2.5, 1.2],
    camRadius: 18,
    camTheta: 0.55,
    camPhi: 1.25
  },
  {
    step: 5,
    id: 'roda_pbp2_propulsion',
    badge: 'SYNTHASE',
    title: '5. Processive Propulsion of the RodA-PBP2 Synthase',
    color: '#9D4EDD',
    spoken: 'Step five: Processive Propulsion. Coupled through RodZ, the RodA transglycosylase and PBP2 transpeptidase move processively around the cell circumference at twenty-five nanometers per second, driven by peptidoglycan synthesis.',
    target: [4.8, -4.5, 2.2],
    camRadius: 22,
    camTheta: 0.40,
    camPhi: 1.15
  },
  {
    step: 6,
    id: 'lateral_wall_synthesis',
    badge: 'SACCCULUS',
    title: '6. Lateral Peptidoglycan Elongation & Cylindrical Sacculus',
    color: '#06D6A0',
    spoken: 'Step six: Lateral Wall Synthesis. RodA flips and polymerizes Lipid Two while PBP2 cross-links peptide stems into the murein sacculus. This distributed circumferential synthesis directs uniform lateral elongation, maintaining cell integrity.',
    target: [0.0, -3.0, 0.0],
    camRadius: 30,
    camTheta: 0.60,
    camPhi: 1.25
  }
];

export class MreBCytoskeletonScene {
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

  // Dynamic Elements
  private catalyticGlow: THREE.PointLight | null = null;
  private a22HazardGlow: THREE.PointLight | null = null;

  // SVG Leaders Layer
  private svgLayer: SVGSVGElement | null = null;
  private leaderAnchors: {
    key: string;
    targetMeshName?: string;
    label: string;
    color: string;
    badge: string;
    worldPos?: THREE.Vector3;
    offset?: THREE.Vector3;
  }[] = [];

  // Interactive States
  private explodedProgress: number = 0.0;
  private filamentVelocity: number = 25.0; // nm/s (physiological 10-40)
  private isPaused: boolean = false;
  private isA22Inhibited: boolean = false;
  private isATPActive: boolean = true;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera Dolly Lerp
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: MreBComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: MreBComponentData) => void;
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
    this.scene.background = new THREE.Color(0x060e20); // Deep cytoskeletal sapphire-navy

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 6, 36);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.target.set(0, -1.5, 0);
    this.controls.addEventListener('change', () => {
      if (this.onCameraMove) this.onCameraMove();
    });

    // 5. Lighting
    this.setupLighting();

    // 6. SVG Layer
    this.setupSVGOverlay();

    // 7. Raycasting / Interaction
    this.setupRaycasting();

    // 8. Flight Controller
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      controls: this.controls,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateSVGLeaders()
    });

    // 9. Load 3D GLB Asset
    this.loadMreBModel();

    // 10. Window resize listener
    window.addEventListener('resize', this.onResize);
  }

  private setupLighting(): void {
    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    this.scene.add(ambient);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(20, 30, 25);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00f5d4, 1.2);
    dirLight2.position.set(-20, -15, -20);
    this.scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0x3a86ff, 1.1);
    rimLight.position.set(0, -25, 20);
    this.scene.add(rimLight);

    // Active catalytic ATP cleft amber glow
    this.catalyticGlow = new THREE.PointLight(0xffb703, 2.5, 14);
    this.catalyticGlow.position.set(0, 1.2, 0);
    this.scene.add(this.catalyticGlow);

    // A22 inhibitor hazard red glow
    this.a22HazardGlow = new THREE.PointLight(0xe63946, 0.0, 18);
    this.a22HazardGlow.position.set(0, 0.5, 0.5);
    this.scene.add(this.a22HazardGlow);
  }

  private setupSVGOverlay(): void {
    const existing = document.getElementById('mreb-svg-overlay') as SVGSVGElement | null;
    if (existing) {
      this.svgLayer = existing;
      while (this.svgLayer.firstChild) {
        this.svgLayer.removeChild(this.svgLayer.firstChild);
      }
    } else {
      this.svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgLayer.id = 'mreb-svg-overlay';
      this.svgLayer.style.position = 'absolute';
      this.svgLayer.style.top = '0';
      this.svgLayer.style.left = '0';
      this.svgLayer.style.width = '100%';
      this.svgLayer.style.height = '100%';
      this.svgLayer.style.pointerEvents = 'none';
      this.svgLayer.style.zIndex = '15';
      this.container.appendChild(this.svgLayer);
    }
  }

  private loadMreBModel(): void {
    const loader = new GLTFLoader();
    const modelUrl = '/prokaryote/models/1JCG_assembled_pieces.glb?v=layered_v3';

    loader.load(
      modelUrl,
      (gltf) => {
        this.modelGroup = gltf.scene;
        this.modelGroup.name = 'MreBCytoskeletonAssembly';
        this.scene.add(this.modelGroup);

        this.modelGroup.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            const name = child.name;
            this.pieceMeshes.set(name, child);
            this.pieceBasePositions.set(name, child.position.clone());

            if (child.material) {
              const origMat = Array.isArray(child.material) ? child.material[0] : child.material;
              const freshMat = new THREE.MeshStandardMaterial({
                color: origMat.color || new THREE.Color(0x3a86ff),
                roughness: 0.35,
                metalness: 0.12,
                side: THREE.DoubleSide
              });
              if (name.includes('ATP') || name.includes('Pocket')) {
                freshMat.emissive = new THREE.Color(0xffb703);
                freshMat.emissiveIntensity = 0.55;
              } else if (name.includes('Membrane_Anchor')) {
                freshMat.emissive = new THREE.Color(0x00f5d4);
                freshMat.emissiveIntensity = 0.40;
              } else if (name.includes('Inner_Membrane')) {
                freshMat.transparent = true;
                freshMat.opacity = 0.28;
                freshMat.depthWrite = false;
                freshMat.roughness = 0.45;
                freshMat.metalness = 0.05;
              } else if (name.includes('A22')) {
                freshMat.emissive = new THREE.Color(0xe63946);
                freshMat.emissiveIntensity = 0.35;
              } else if (name.includes('Protofilaments')) {
                freshMat.emissive = new THREE.Color(0x3a86ff);
                freshMat.emissiveIntensity = 0.20;
              }
              child.material = freshMat;
            }
          }
        });

        this.setupLeaderAnchors();
        console.log('[+] MreB Actin Helical Rails model loaded successfully.');
      },
      undefined,
      (error) => {
        console.error('[-] Error loading MreB model:', error);
      }
    );
  }

  private setupLeaderAnchors(): void {
    this.leaderAnchors = [
      {
        key: 'mreb_protofilaments',
        targetMeshName: 'Piece_MreB_Protofilaments',
        label: 'MreB Double Rails (1JCG / 4CZM)',
        badge: 'MreB',
        color: '#3A86FF',
        worldPos: new THREE.Vector3(-2.3, 2.5, -1.0)
      },
      {
        key: 'mreb_atp_pockets',
        targetMeshName: 'Piece_MreB_ATP_Pockets',
        label: 'ATP Cleft & Mg²⁺',
        badge: 'ATP',
        color: '#FFB703',
        worldPos: new THREE.Vector3(2.3, 2.5, 1.0)
      },
      {
        key: 'mreb_membrane_anchor',
        targetMeshName: 'Piece_MreB_Membrane_Anchor',
        label: 'N-term Amphipathic Anchor',
        badge: 'Anc',
        color: '#00F5D4',
        worldPos: new THREE.Vector3(1.8, 0.1, 0.0)
      },
      {
        key: 'mreb_inner_membrane',
        targetMeshName: 'Piece_MreB_Inner_Membrane',
        label: 'Curved Inner Membrane',
        badge: 'IM',
        color: '#06D6A0',
        worldPos: new THREE.Vector3(-8.2, -1.4, 1.2)
      },
      {
        key: 'mreb_rodz_adaptor',
        targetMeshName: 'Piece_MreB_RodZ_Adaptor',
        label: 'RodZ Bitopic Adaptor (2WUS)',
        badge: 'RodZ',
        color: '#E63946',
        worldPos: new THREE.Vector3(-3.4, -1.2, 0.4)
      },
      {
        key: 'mreb_roda_glycosylase',
        targetMeshName: 'Piece_MreB_RodA_Glycosylase',
        label: 'RodA Lipid II Flippase',
        badge: 'RodA',
        color: '#9D4EDD',
        worldPos: new THREE.Vector3(3.2, -2.2, -0.3)
      },
      {
        key: 'mreb_pbp2_transpeptidase',
        targetMeshName: 'Piece_MreB_PBP2_Transpeptidase',
        label: 'PBP2 Transpeptidase (MecA)',
        badge: 'PBP2',
        color: '#F77F00',
        worldPos: new THREE.Vector3(3.8, -4.7, 0.2)
      },
      {
        key: 'mreb_a22_pocket',
        targetMeshName: 'Piece_MreB_A22_Pocket',
        label: 'A22 Inhibitor Pocket',
        badge: 'A22',
        color: '#E63946',
        worldPos: new THREE.Vector3(0.5, 2.5, -0.8)
      }
    ];
  }

  private setupRaycasting(): void {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      const rect = this.renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);
      const intersects = raycaster.intersectObjects(this.modelGroup.children, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.name.startsWith('Piece_MreB_') && hitObj.parent !== this.modelGroup) {
          hitObj = hitObj.parent;
        }

        if (hitObj && hitObj.name.startsWith('Piece_MreB_')) {
          const pieceName = hitObj.name;
          const matchedAnchor = this.leaderAnchors.find(a => a.targetMeshName === pieceName);
          if (matchedAnchor) {
            this.selectComponent(matchedAnchor.key);
          }
        }
      }
    };

    this.renderer.domElement.addEventListener('pointerdown', onPointerDown);
  }

  public selectComponent(key: string): void {
    const meta = MREB_COMPONENTS_META[key];
    if (meta) {
      this.onSelectComponent(meta);
      this.highlightPiece(key);
    }
  }

  public focusComponent(key: string): void {
    const anchor = this.leaderAnchors.find(a => a.key === key);
    if (anchor && anchor.worldPos) {
      const targetPos = anchor.worldPos.clone();
      const camPos = targetPos.clone().add(new THREE.Vector3(0, 3.5, 18));
      this.flyCameraTo(camPos, targetPos, 1.2);
    } else {
      this.resetCamera();
    }
  }

  private highlightPiece(key: string): void {
    const anchor = this.leaderAnchors.find(a => a.key === key);
    const targetMeshName = anchor?.targetMeshName;

    this.pieceMeshes.forEach((mesh, name) => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (!mat) return;
      if (name.includes('Inner_Membrane')) {
        mat.transparent = true;
        mat.opacity = name === targetMeshName ? 0.42 : 0.28;
        mat.depthWrite = false;
        return;
      }
      if (!targetMeshName || name === targetMeshName) {
        mat.emissiveIntensity = name.includes('ATP') ? 0.6 : 0.45;
        mat.opacity = 1.0;
        mat.transparent = false;
      } else {
        mat.emissiveIntensity = 0.05;
        mat.opacity = 0.65;
        mat.transparent = true;
      }
    });
  }

  public setExplodedProgress(progress: number): void {
    this.explodedProgress = Math.max(0, Math.min(1, progress));
    const factor = this.explodedProgress;

    const offsets: Record<string, THREE.Vector3> = {
      'Piece_MreB_Protofilaments': new THREE.Vector3(0, factor * 4.2, 0),
      'Piece_MreB_ATP_Pockets': new THREE.Vector3(0, factor * 4.5, factor * 2.2),
      'Piece_MreB_Membrane_Anchor': new THREE.Vector3(factor * 1.5, factor * 1.8, 0),
      'Piece_MreB_Inner_Membrane': new THREE.Vector3(0, -factor * 1.6, 0),
      'Piece_MreB_RodZ_Adaptor': new THREE.Vector3(-factor * 3.5, -factor * 1.2, factor * 1.2),
      'Piece_MreB_RodA_Glycosylase': new THREE.Vector3(factor * 3.5, -factor * 2.2, 0),
      'Piece_MreB_PBP2_Transpeptidase': new THREE.Vector3(factor * 4.0, -factor * 4.6, factor * 1.8),
      'Piece_MreB_A22_Pocket': new THREE.Vector3(0, factor * 4.4, -factor * 2.2)
    };

    this.pieceMeshes.forEach((mesh, name) => {
      const base = this.pieceBasePositions.get(name);
      const off = offsets[name] || new THREE.Vector3();
      if (base) {
        mesh.position.copy(base).add(off);
      }
    });
  }

  public setFilamentVelocity(vel: number): void {
    this.filamentVelocity = Math.max(5.0, Math.min(50.0, vel));
  }

  public setPaused(paused: boolean): void {
    this.isPaused = paused;
  }

  public setA22Inhibited(inhibited: boolean): void {
    this.isA22Inhibited = inhibited;
    if (this.a22HazardGlow) {
      this.a22HazardGlow.intensity = inhibited ? 4.5 : 0.0;
    }
    const railsMesh = this.pieceMeshes.get('Piece_MreB_Protofilaments');
    if (railsMesh && railsMesh.material instanceof THREE.MeshStandardMaterial) {
      railsMesh.material.emissive.setHex(inhibited ? 0xe63946 : 0x3a86ff);
      railsMesh.material.emissiveIntensity = inhibited ? 0.35 : 0.20;
    }
  }

  public setATPActive(active: boolean): void {
    this.isATPActive = active;
  }

  public setExplanationStep(stepIndex: number): void {
    this.currentStageIndex = stepIndex;
    if (stepIndex === 0) {
      this.resetCamera();
      this.highlightPiece('all');
      return;
    }

    const stage = MREB_EXPLANATION_STAGES.find(s => s.step === stepIndex);
    if (!stage) return;

    if (this.onSubtitlesUpdate) {
      this.onSubtitlesUpdate(stage.spoken, stage.title, stage.color);
    }
    if (this.onStageChange) {
      this.onStageChange(stepIndex);
    }

    // Camera Framing
    const target = new THREE.Vector3(...stage.target);
    const radius = stage.camRadius;
    const theta = stage.camTheta;
    const phi = stage.camPhi;

    const camPos = new THREE.Vector3(
      target.x + radius * Math.sin(phi) * Math.sin(theta),
      target.y + radius * Math.cos(phi),
      target.z + radius * Math.sin(phi) * Math.cos(theta)
    );

    this.flyCameraTo(camPos, target, 1.2);

    if (stage.id === 'rail_overview') this.selectComponent('mreb_protofilaments');
    else if (stage.id === 'atp_polymerization') this.selectComponent('mreb_atp_pockets');
    else if (stage.id === 'membrane_insertion') this.selectComponent('mreb_membrane_anchor');
    else if (stage.id === 'rodz_coupling') this.selectComponent('mreb_rodz_adaptor');
    else if (stage.id === 'roda_pbp2_propulsion') this.selectComponent('mreb_roda_glycosylase');
    else if (stage.id === 'lateral_wall_synthesis') this.selectComponent('mreb_pbp2_transpeptidase');
  }

  public flyCameraTo(pos: THREE.Vector3, target: THREE.Vector3, duration: number = 1.0): void {
    this.camStartPos.copy(this.camera.position);
    this.camEndPos.copy(pos);
    this.camStartTarget.copy(this.controls.target);
    this.camEndTarget.copy(target);
    this.camLerpProgress = duration > 0 ? 0.0 : 1.0;
  }

  public getStageIndex(): number {
    return this.currentStageIndex;
  }

  public setTourActive(active: boolean): void {
    this.isTourActive = active;
  }

  public isTouring(): boolean {
    return this.isTourActive;
  }

  public resetCamera(): void {
    this.flyCameraTo(new THREE.Vector3(0, 6, 32), new THREE.Vector3(0, -1.0, 0), 1.0);
  }

  private updateSVGLeaders(): void {
    if (!this.svgLayer) return;

    let html = '';
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.leaderAnchors.forEach((anchor) => {
      let worldPos: THREE.Vector3;
      const mesh = anchor.targetMeshName ? this.pieceMeshes.get(anchor.targetMeshName) : undefined;
      if (anchor.worldPos) {
        worldPos = anchor.worldPos.clone();
        if (mesh) {
          worldPos.add(mesh.position);
        }
      } else if (mesh && mesh.visible) {
        worldPos = mesh.position.clone();
      } else {
        return;
      }

      // Project 3D to screen coordinates
      const screenPos = worldPos.clone().project(this.camera);

      // Check if in front of camera
      if (screenPos.z > 1.0) return;

      const sx = ((screenPos.x + 1) * width) / 2;
      const sy = ((-screenPos.y + 1) * height) / 2;

      // Label card position offset outwards
      const dx = sx > width / 2 ? 75 : -75;
      const dy = sy > height / 2 ? 35 : -35;
      const lx = sx + dx;
      const ly = sy + dy;

      const pillWidth = Math.max(125, anchor.label.length * 7.0 + 36);
      const cardX = lx > sx ? lx : lx - pillWidth;

      html += `
        <g class="mreb-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(6, 14, 32, 0.88)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    // Attach click events on SVG subpills
    const items = this.svgLayer.querySelectorAll('.mreb-leader-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = item.getAttribute('data-key');
        if (key && MREB_COMPONENTS_META[key]) {
          this.focusComponent(key);
          this.onSelectComponent(MREB_COMPONENTS_META[key]);
        }
      });
    });
  }

  private animate = (): void => {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    if (this.keyboardFlight) {
      this.keyboardFlight.update(delta);
    }

    // Camera Lerp
    if (this.camLerpProgress < 1.0) {
      this.camLerpProgress = Math.min(1.0, this.camLerpProgress + delta * 1.5);
      const ease = 0.5 - 0.5 * Math.cos(this.camLerpProgress * Math.PI);
      this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, ease);
      this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, ease);
    }

    this.controls.update();

    // Processive Rail Motion & Synthase Movement along Membrane
    if (!this.isPaused && !this.isA22Inhibited && this.isATPActive) {
      const speedFactor = (this.filamentVelocity / 25.0) * 0.65;
      const motionPhase = (time * speedFactor) % 5.1;
      const glideX = (motionPhase - 2.55) * 0.28;

      if (this.explodedProgress < 0.05) {
        const railsMesh = this.pieceMeshes.get('Piece_MreB_Protofilaments');
        if (railsMesh) railsMesh.position.x = glideX;

        const atpMesh = this.pieceMeshes.get('Piece_MreB_ATP_Pockets');
        if (atpMesh) atpMesh.position.x = glideX;

        const rodaMesh = this.pieceMeshes.get('Piece_MreB_RodA_Glycosylase');
        if (rodaMesh) rodaMesh.position.x = Math.sin(time * speedFactor) * 1.2;

        const pbp2Mesh = this.pieceMeshes.get('Piece_MreB_PBP2_Transpeptidase');
        if (pbp2Mesh) pbp2Mesh.position.x = Math.sin(time * speedFactor) * 1.2;
      }

      if (this.catalyticGlow) {
        this.catalyticGlow.intensity = 2.2 + 0.8 * Math.sin(time * 3.5);
      }
    } else if (this.isA22Inhibited) {
      if (this.a22HazardGlow) {
        this.a22HazardGlow.intensity = 3.5 + 1.5 * Math.sin(time * 5.0);
      }
    }

    this.updateSVGLeaders();
    this.renderer.render(this.scene, this.camera);
  };

  public start(): void {
    if (!this.active) {
      this.active = true;
      this.clock.start();
      this.animate();
    }
  }

  public stop(): void {
    this.active = false;
    if (this.keyboardFlight) {
      this.keyboardFlight.resetKeys();
    }
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public handleResize = (): void => {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private onResize = (): void => {
    this.handleResize();
  };

  public dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    if (this.keyboardFlight) {
      this.keyboardFlight.dispose();
      this.keyboardFlight = null;
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.svgLayer && this.svgLayer.parentNode) {
      this.svgLayer.parentNode.removeChild(this.svgLayer);
      this.svgLayer = null;
    }
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }
}
