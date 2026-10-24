/**
 * ftszDivisome.ts
 *
 * Core Three.js Scene Engine for the Bacterial Divisome FtsZ Z-Ring (1FSZ)
 * Milestone 5.1 in Phase 5 of CELLULAR_ELEMENTS_CATALOG.md
 *
 * Features:
 * - Loads authentic 8-piece decomposed cryo-EM / X-ray model (PDB: 1FSZ / 2R6R)
 * - Adheres strictly to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 * - Smooth exploded view dissociation along biological vectors v_dissoc
 * - Directional protofilament treadmilling animation (v = 5 to 60 nm/s, nominal 28 nm/s)
 * - Real-time cytokinetic furrow constriction slider (0% to 100% septum closure)
 * - PC190723 inhibitor mode toggle (freezes treadmilling and locks straight protofilaments)
 * - 8 dynamic SVG leader lines with lettered subpill badges and 1-click targeting
 * - Universal 5-Stage Explanatory Trace ("How It Works" tutorial engine)
 * - KeyboardFlightController with WASD camera flight, orbit damping
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { FtsZComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export interface FtsZExplanationStage {
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

export const FTSZ_COMPONENTS_META: Record<string, FtsZComponentData> = {
  'ftsz_protofilaments': {
    name: 'FtsZ Protofilament Ring Lattice (1FSZ / 2R6R)',
    role: 'Cytokinetic Scaffold & Treadmilling Directional Engine',
    badge: 'FtsZ LATTICE',
    dims: '800 nm midcell ring / 4 nm monomer (40 kDa)',
    proteins: 'FtsZ Homomultimer (Bacterial Tubulin structural homolog)',
    pdb: '1FSZ / 2R6R',
    desc: 'Essential prokaryotic tubulin homolog that polymerizes head-to-tail into dynamic protofilaments at midcell. Powered by GTP hydrolysis, FtsZ protofilaments undergo continuous directional treadmilling along the inner membrane circumference, serving as the spatial track and velocity governor for peptidoglycan cell-wall synthesis.',
    gtpTurnover: '5–12 GTP/min per monomer',
    treadmillingSpeed: '28 nm/s (physiological range 20–40 nm/s)',
    stoichiometry: 'FtsZ + GTP ⇌ [FtsZ]ₙ + GDP + Pi'
  },
  'ftsz_ftsa_anchor': {
    name: 'FtsA Actin-Homolog Membrane Tether',
    role: 'Peripheral membrane anchoring & ATPase regulatory switch',
    badge: 'FtsA TETHER',
    dims: '4.8 nm (45 kDa)',
    proteins: 'FtsA (Actin/Hsp70 family fold + C-terminal amphipathic helix)',
    pdb: '4A2A / 1E4G',
    desc: 'Essential structural and regulatory anchor bridging the cytoplasmic FtsZ ring directly to the inner membrane. Uses its conserved C-terminal amphipathic helix to insert into the membrane lipid bilayer, while its actin-fold domain coordinates ATP binding and oligomeric state to toggle FtsZ filament bundling and recruit late divisome proteins.',
    stoichiometry: '1 FtsA per 3–5 FtsZ monomers'
  },
  'ftsz_zipa_anchor': {
    name: 'ZipA Bitopic Membrane Anchor',
    role: 'Transmembrane mechanical anchor & filament stabilization',
    badge: 'ZipA ANCHOR',
    dims: '6.5 nm (36 kDa)',
    proteins: 'ZipA (N-terminal TM helix + Pro/Gln-rich flexible tether + C-terminal globular domain)',
    pdb: '1F47',
    desc: 'Bitopic inner membrane protein dedicated to divisome tethering. Its hydrophobic N-terminal α-helix traverses the inner membrane bilayer, while an extended flexible linker projects its C-terminal globular domain 10 nm into the cytoplasm to bind the extreme conserved C-terminal peptide of FtsZ.',
    stoichiometry: '1 ZipA per 5–10 FtsZ monomers'
  },
  'ftsz_inner_membrane': {
    name: 'Cytokinetic Inner Membrane Furrow',
    role: 'Deforming lipid bilayer undergoing cytokinetic invagination',
    badge: 'IM FURROW',
    dims: 'Bilayer thickness 3.8 nm, midcell furrow',
    proteins: 'Phosphatidylethanolamine (75%) + PG (20%) + Cardiolipin (5%)',
    pdb: 'Bilayer Model',
    desc: 'Cytoplasmic membrane undergoing progressive mechanical constriction and inward bending at the division septum. As the FtsZ ring pulls inward and septal peptidoglycan pushes inwards, the membrane invaginates until opposite bilayers achieve hemi-fusion and scission into two sealed daughter envelopes.'
  },
  'ftsz_gtp_pockets': {
    name: 'Longitudinal GTPase Catalytic Interface',
    role: 'Polymerization-dependent GTP hydrolysis & curvature bending',
    badge: 'GTP CATALYTIC',
    dims: '1.2 nm nucleotide pocket',
    proteins: 'FtsZ Loop T7 (Synergy loop) + Tubulin signature GGGTG[T/S]G motif',
    pdb: '1FSZ',
    desc: 'The shared nucleotide binding cleft situated between adjacent monomers in a protofilament. Monomer N provides the GTP-binding Rossmann fold, while monomer N+1 inserts its catalytic T7 synergy loop to complete the active center, triggering GTP hydrolysis (GTP → GDP + Pi) that shifts the subunit conformation from straight to curved (~25°), driving filament treadmilling.',
    gtpTurnover: '8.4 GTP/min per catalytic pocket'
  },
  'ftsz_septal_wall': {
    name: 'Septal Peptidoglycan (Murein) Cross-Wall',
    role: 'Structural inward-growing cross-wall sacculus',
    badge: 'SEPTAL PG',
    dims: '2.5 nm glycan strands + pentapeptide crosslinks',
    proteins: 'GlcNAc-MurNAc glycan strands cross-linked by meso-DAP-D-Ala bridges',
    pdb: 'Murein Sacculus',
    desc: 'The newly synthesized cross-wall dividing the mother cell into twin daughters. Driven by the FtsWI synthase complexes orbiting behind treadmilling FtsZ clusters, Lipid II is incorporated into circumferential glycan strands and transpeptidated into a rigid murein bilayer.'
  },
  'ftsz_ftswi_synthase': {
    name: 'FtsW-FtsI (PBP3) Septal Peptidoglycan Synthase',
    role: 'Processive transglycosylase & transpeptidase machine',
    badge: 'FtsW-FtsI (PBP3)',
    dims: '12 nm trans-envelope complex',
    proteins: 'FtsW (SEDS lipid II flippase/polymerase) + FtsI / PBP3 (Penicillin-Binding Protein 3)',
    pdb: '6PL5 / 6VBD',
    desc: 'The dedicated trans-envelope septal cell wall synthase complex. FtsW flips Lipid II across the inner membrane and polymerizes glycan chains, while FtsI cross-links peptide stems. The entire complex is propelled along the midcell perimeter by treadmilling FtsZ protofilaments, ensuring smooth circular septal synthesis.'
  },
  'ftsz_mincde_barrier': {
    name: 'MinCDE Dynamic Spatial Gradient Barrier',
    role: 'Pole-to-pole oscillation preventing aberrant minicell division',
    badge: 'MinCDE BARRIER',
    dims: 'Polar cap inhibition zone (~200 nm)',
    proteins: 'MinC (FtsZ inhibitor) + MinD (ATP-dependent membrane ATPase) + MinE (topological activator)',
    pdb: '1G3Q / 3Q9L',
    desc: 'Spatial regulatory system that oscillates from cell pole to cell pole every 40–60 seconds, creating a time-averaged concentration minimum of the division inhibitor MinC at exact midcell, ensuring the Z-ring only nucleates midway between the replicated chromosomes.'
  }
};

export const FTSZ_EXPLANATION_STAGES: FtsZExplanationStage[] = [
  {
    step: 1,
    id: 'midcell_positioning',
    badge: 'POSITIONING',
    title: '1. Spatial Midcell Positioning by MinCDE & SlmA',
    color: '#0077B6',
    spoken: 'Step one: Midcell Spatial Positioning. The MinCDE system oscillates between opposite cell poles, establishing a time-averaged concentration minimum at midcell. Together with nucleoid occlusion by SlmA, this spatial gradient ensures that the Z-ring nucleates exclusively at the cell equator between duplicated chromosomes.',
    target: [0.0, 0.0, 0.0],
    camRadius: 36,
    camTheta: 0.80,
    camPhi: 1.25
  },
  {
    step: 2,
    id: 'gtp_polymerization',
    badge: 'GTP-POLYMER',
    title: '2. GTP-Dependent Protofilament Polymerization',
    color: '#00F5D4',
    spoken: 'Step two: GTP-Driven Polymerization. FtsZ monomers bind GTP and assemble into head-to-tail protofilaments. The catalytic T7 synergy loop of one monomer inserts into the nucleotide pocket of its neighbor to complete the active GTPase site.',
    target: [0.0, 1.5, 0.0],
    camRadius: 22,
    camTheta: 0.35,
    camPhi: 1.20
  },
  {
    step: 3,
    id: 'membrane_tethering',
    badge: 'TETHERING',
    title: '3. Membrane Tethering by FtsA & ZipA',
    color: '#FFB703',
    spoken: 'Step three: Membrane Tethering. FtsZ lacks a hydrophobic domain and relies on essential tethers: FtsA, an actin-like ATPase with a C-terminal amphipathic helix, and ZipA, a transmembrane protein. Together they anchor the dynamic Z-ring directly beneath the inner membrane.',
    target: [2.5, -0.8, 1.2],
    camRadius: 18,
    camTheta: 0.55,
    camPhi: 1.30
  },
  {
    step: 4,
    id: 'treadmilling_synthase',
    badge: 'TREADMILLING',
    title: '4. Protofilament Treadmilling Drives FtsWI Synthase',
    color: '#9D4EDD',
    spoken: 'Step four: Treadmilling Drives Wall Synthesis. GTP hydrolysis triggers a conformational switch from straight to curved subunits, causing continuous directional treadmilling at twenty-eight nanometers per second. This motion distributes and propels the FtsW-FtsI peptidoglycan synthases around the circumference.',
    target: [1.2, 0.0, 2.0],
    camRadius: 24,
    camTheta: 0.40,
    camPhi: 1.15
  },
  {
    step: 5,
    id: 'constriction_scission',
    badge: 'CONSTRICTION',
    title: '5. Cytokinetic Furrow Constriction & Scission',
    color: '#06D6A0',
    spoken: 'Step five: Furrow Constriction and Scission. Coordinated inward peptidoglycan synthesis by FtsWI and membrane-bending forces from curved FtsZ filaments progressively constrict the division septum from eight hundred nanometers down to scission, separating the bacterium into two viable daughter cells.',
    target: [0.0, 0.0, 0.0],
    camRadius: 32,
    camTheta: 0.60,
    camPhi: 1.25
  }
];

export class FtsZDivisomeScene {
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
  private pieceBaseScales: Map<string, THREE.Vector3> = new Map();

  // Dynamic Elements
  private catalyticGlow: THREE.PointLight | null = null;
  private pc19HazardGlow: THREE.PointLight | null = null;

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
  private septumConstriction: number = 0.25; // 0.0 = fully open, 1.0 = fully constricted
  private treadmillingSpeed: number = 28.0; // nm/s (physiological 20-40)
  private treadmillingPhase: number = 0.0;
  private isPaused: boolean = false;
  private isPC190723Inhibited: boolean = false;
  private isGTPActive: boolean = true;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera Dolly Lerp
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: FtsZComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: FtsZComponentData) => void;
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
    this.scene.background = new THREE.Color(0x050a18); // Deep divisome cyan-navy

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 4.5, 27);

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
    this.controls.target.set(0, -0.8, 0);
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
    this.loadFtsZModel();

    // 10. Window resize listener
    window.addEventListener('resize', this.onResize);
  }

  private setupLighting(): void {
    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    this.scene.add(ambient);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(20, 30, 25);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06d6a0, 1.2);
    dirLight2.position.set(-20, -15, -20);
    this.scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0x3a86ff, 1.1);
    rimLight.position.set(0, -25, 20);
    this.scene.add(rimLight);

    // Active catalytic GTP interface cyan glow
    this.catalyticGlow = new THREE.PointLight(0x00f5d4, 2.5, 14);
    this.catalyticGlow.position.set(0, 2.3, 0.5);
    this.scene.add(this.catalyticGlow);

    // PC190723 inhibitor hazard red glow at FtsZ interdomain cleft
    this.pc19HazardGlow = new THREE.PointLight(0xe63946, 0.0, 18);
    this.pc19HazardGlow.position.set(0, 2.3, 1.5);
    this.scene.add(this.pc19HazardGlow);
  }

  private setupSVGOverlay(): void {
    const existing = document.getElementById('ftsz-svg-overlay') as SVGSVGElement | null;
    if (existing) {
      this.svgLayer = existing;
      while (this.svgLayer.firstChild) {
        this.svgLayer.removeChild(this.svgLayer.firstChild);
      }
    } else {
      this.svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgLayer.id = 'ftsz-svg-overlay';
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

  private loadFtsZModel(): void {
    const loader = new GLTFLoader();
    const modelUrl = '/prokaryote/models/1FSZ_assembled_pieces.glb?v=layered_v3';

    loader.load(
      modelUrl,
      (gltf) => {
        this.modelGroup = gltf.scene;
        this.modelGroup.name = 'DivisomeFtsZHoloenzyme';
        this.scene.add(this.modelGroup);

        this.modelGroup.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            const name = child.name;
            this.pieceMeshes.set(name, child);
            this.pieceBasePositions.set(name, child.position.clone());
            this.pieceBaseScales.set(name, child.scale.clone());

            if (child.material) {
              const origMat = Array.isArray(child.material) ? child.material[0] : child.material;
              const freshMat = new THREE.MeshStandardMaterial({
                color: origMat.color || new THREE.Color(0x3a86ff),
                roughness: 0.35,
                metalness: 0.12,
                side: THREE.DoubleSide
              });
              if (name.includes('GTP') || name.includes('Pocket')) {
                freshMat.emissive = new THREE.Color(0x00f5d4);
                freshMat.emissiveIntensity = 0.55;
              } else if (name.includes('Inner_Membrane')) {
                freshMat.transparent = true;
                freshMat.opacity = 0.28;
                freshMat.depthWrite = false;
                freshMat.roughness = 0.50;
                freshMat.metalness = 0.05;
              } else if (name.includes('Septal_Wall')) {
                freshMat.transparent = true;
                freshMat.opacity = 0.30;
                freshMat.depthWrite = false;
                freshMat.roughness = 0.60;
              } else if (name.includes('Protofilaments')) {
                freshMat.emissive = new THREE.Color(0x3a86ff);
                freshMat.emissiveIntensity = 0.22;
              }
              child.material = freshMat;
            }
          }
        });

        this.setupLeaderAnchors();
        this.updatePieceTransforms();
        console.log('[+] Divisome FtsZ Z-Ring model loaded successfully.');
      },
      undefined,
      (error) => {
        console.error('[-] Error loading Divisome FtsZ model:', error);
      }
    );
  }

  private setupLeaderAnchors(): void {
    this.leaderAnchors = [
      {
        key: 'ftsz_protofilaments',
        targetMeshName: 'Piece_FtsZ_Protofilaments',
        label: 'FtsZ Ring (1FSZ / 2R6R)',
        badge: 'FtsZ',
        color: '#3A86FF',
        worldPos: new THREE.Vector3(-1.8, 3.5, 0.0)
      },
      {
        key: 'ftsz_ftsa_anchor',
        targetMeshName: 'Piece_FtsZ_FtsA_Anchor',
        label: 'FtsA Actin Membrane Tether',
        badge: 'FtsA',
        color: '#FFB703',
        worldPos: new THREE.Vector3(3.2, 0.65, 0.4)
      },
      {
        key: 'ftsz_zipa_anchor',
        targetMeshName: 'Piece_FtsZ_ZipA_Transmembrane',
        label: 'ZipA Bitopic Anchor',
        badge: 'ZipA',
        color: '#E63946',
        worldPos: new THREE.Vector3(6.2, 0.5, -0.3)
      },
      {
        key: 'ftsz_inner_membrane',
        targetMeshName: 'Piece_FtsZ_Inner_Membrane',
        label: 'Inner Membrane Furrow',
        badge: 'IM',
        color: '#06D6A0',
        worldPos: new THREE.Vector3(-8.2, -1.4, 1.2)
      },
      {
        key: 'ftsz_gtp_pockets',
        targetMeshName: 'Piece_FtsZ_GTP_Pockets',
        label: 'GTP Catalytic Pockets',
        badge: 'GTP',
        color: '#00F5D4',
        worldPos: new THREE.Vector3(1.85, 3.4, 0.25)
      },
      {
        key: 'ftsz_septal_wall',
        targetMeshName: 'Piece_FtsZ_Septal_Wall',
        label: 'Septal Peptidoglycan Wall',
        badge: 'PG',
        color: '#E76F51',
        worldPos: new THREE.Vector3(0.0, -5.4, 1.2)
      },
      {
        key: 'ftsz_ftswi_synthase',
        targetMeshName: 'Piece_FtsZ_FtsWI_Synthase',
        label: 'FtsW-FtsI (PBP3) Synthase',
        badge: 'FtsWI',
        color: '#9D4EDD',
        worldPos: new THREE.Vector3(-3.2, -2.7, 0.0)
      },
      {
        key: 'ftsz_mincde_barrier',
        targetMeshName: 'Piece_FtsZ_MinCDE_Barrier',
        label: 'MinCDE Spatial Barrier',
        badge: 'Min',
        color: '#0077B6',
        worldPos: new THREE.Vector3(-12.0, 3.2, 0.0)
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
        while (hitObj && !hitObj.name.startsWith('Piece_FtsZ_') && hitObj.parent !== this.modelGroup) {
          hitObj = hitObj.parent;
        }

        if (hitObj && hitObj.name.startsWith('Piece_FtsZ_')) {
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
    const meta = FTSZ_COMPONENTS_META[key];
    if (meta) {
      this.onSelectComponent(meta);
      this.highlightPiece(key);
    }
  }

  public focusComponent(key: string): void {
    const anchor = this.leaderAnchors.find(a => a.key === key);
    if (anchor && anchor.worldPos) {
      const mesh = anchor.targetMeshName ? this.pieceMeshes.get(anchor.targetMeshName) : undefined;
      const targetPos = anchor.worldPos.clone().add(mesh ? mesh.position : new THREE.Vector3());
      const camPos = targetPos.clone().add(new THREE.Vector3(0, 3.0, 16));
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
      const isMembraneOrWall = name.includes('Inner_Membrane') || name.includes('Septal_Wall');
      if (isMembraneOrWall) {
        mat.transparent = true;
        mat.opacity = name === targetMeshName ? 0.42 : 0.28;
        mat.depthWrite = false;
        return;
      }
      if (!targetMeshName || name === targetMeshName) {
        mat.emissiveIntensity = name.includes('GTP') ? 0.6 : 0.45;
        mat.opacity = 1.0;
        mat.transparent = false;
      } else {
        mat.emissiveIntensity = 0.05;
        mat.opacity = 0.65;
        mat.transparent = true;
      }
    });
  }

  private updatePieceTransforms(): void {
    const exp = this.explodedProgress;
    const constrict = this.septumConstriction;

    // 1. Exploded view dissociation vectors (preserve horizontal layering without crossing planes)
    const explodeOffsets: Record<string, THREE.Vector3> = {
      'Piece_FtsZ_Protofilaments': new THREE.Vector3(0, exp * 4.2, 0),
      'Piece_FtsZ_GTP_Pockets': new THREE.Vector3(0, exp * 4.5, exp * 2.2),
      'Piece_FtsZ_FtsA_Anchor': new THREE.Vector3(exp * 2.8, exp * 1.8, exp * 1.2),
      'Piece_FtsZ_ZipA_Transmembrane': new THREE.Vector3(exp * 3.8, exp * 1.4, -exp * 1.0),
      'Piece_FtsZ_Inner_Membrane': new THREE.Vector3(0, -exp * 1.5, 0),
      'Piece_FtsZ_FtsWI_Synthase': new THREE.Vector3(-exp * 3.2, -exp * 2.4, -exp * 1.2),
      'Piece_FtsZ_Septal_Wall': new THREE.Vector3(0, -exp * 5.2, 0),
      'Piece_FtsZ_MinCDE_Barrier': new THREE.Vector3(0, exp * 3.0, -exp * 2.5)
    };

    // 2. Cytokinetic Furrow Constriction (0% -> 100%):
    // Cohesive inward (-Y) invagination of the entire divisome assembly while maintaining
    // strict vertical separation between Cytoplasmic FtsZ (+2.4), FtsA (+0.1), Inner Membrane (-1.6),
    // Trans-envelope FtsWI (-2.5), and Periplasmic Septal PG Wall (-5.0).
    const furrowInvaginationY = -constrict * 1.35;
    const constrictOffsets: Record<string, THREE.Vector3> = {
      'Piece_FtsZ_Protofilaments': new THREE.Vector3(0, furrowInvaginationY, 0),
      'Piece_FtsZ_GTP_Pockets': new THREE.Vector3(0, furrowInvaginationY, 0),
      'Piece_FtsZ_FtsA_Anchor': new THREE.Vector3(0, furrowInvaginationY, 0),
      'Piece_FtsZ_ZipA_Transmembrane': new THREE.Vector3(0, furrowInvaginationY, 0),
      'Piece_FtsZ_Inner_Membrane': new THREE.Vector3(0, furrowInvaginationY, 0),
      'Piece_FtsZ_FtsWI_Synthase': new THREE.Vector3(0, furrowInvaginationY, 0),
      'Piece_FtsZ_Septal_Wall': new THREE.Vector3(0, furrowInvaginationY * 0.85, 0),
      'Piece_FtsZ_MinCDE_Barrier': new THREE.Vector3(0, 0, 0)
    };

    // 3. Tangential Treadmilling & Processive Synthase Glide along the Horizontal Membrane Track (+X)
    // Never rotate around (0,0,0) — glide tangentially along the protofilament axis within each layer!
    const monomerRepeat = 4.2;
    const treadmillGlideX = (((this.treadmillingPhase % monomerRepeat) + monomerRepeat) % monomerRepeat - monomerRepeat * 0.5) * 0.42;
    const synthaseGlideX = Math.sin(this.treadmillingPhase * 0.65) * 1.35;
    const synthaseGlideZ = Math.cos(this.treadmillingPhase * 0.65) * 0.25;

    const kineticOffsets: Record<string, THREE.Vector3> = {
      'Piece_FtsZ_Protofilaments': new THREE.Vector3(treadmillGlideX, 0, 0),
      'Piece_FtsZ_GTP_Pockets': new THREE.Vector3(treadmillGlideX, 0, 0),
      'Piece_FtsZ_FtsWI_Synthase': new THREE.Vector3(synthaseGlideX, 0, synthaseGlideZ)
    };

    this.pieceMeshes.forEach((mesh, name) => {
      const basePos = this.pieceBasePositions.get(name) || new THREE.Vector3();
      const baseScale = this.pieceBaseScales.get(name) || new THREE.Vector3(1, 1, 1);

      const eOff = explodeOffsets[name] || new THREE.Vector3();
      const cOff = constrictOffsets[name] || new THREE.Vector3();
      const kOff = kineticOffsets[name] || new THREE.Vector3();

      mesh.position.copy(basePos).add(eOff).add(cOff).add(kOff);
      mesh.rotation.set(0, 0, 0);

      // Scale adjustments for constriction and PC190723 straight-filament locking
      if (name === 'Piece_FtsZ_Protofilaments' || name === 'Piece_FtsZ_GTP_Pockets') {
        const xScale = (1.0 - constrict * 0.14) * (this.isPC190723Inhibited ? 1.05 : 1.0);
        const yScale = this.isPC190723Inhibited ? 0.86 : 1.0; // PC190723 locks straight conformation
        mesh.scale.set(baseScale.x * xScale, baseScale.y * yScale, baseScale.z);
      } else if (name === 'Piece_FtsZ_Septal_Wall') {
        mesh.scale.set(
          baseScale.x * (1.0 + constrict * 0.12),
          baseScale.y * (1.0 + constrict * 0.35),
          baseScale.z
        );
      } else {
        mesh.scale.copy(baseScale);
      }
    });
  }

  public setExplodedProgress(progress: number): void {
    this.explodedProgress = Math.max(0, Math.min(1, progress));
    this.updatePieceTransforms();
  }

  public setSeptumConstriction(progress: number): void {
    this.septumConstriction = Math.max(0.0, Math.min(1.0, progress));
    this.updatePieceTransforms();
  }

  public setTreadmillingSpeed(speed: number): void {
    this.treadmillingSpeed = Math.max(5.0, Math.min(60.0, speed));
  }

  public setPaused(paused: boolean): void {
    this.isPaused = paused;
  }

  public setPC190723Inhibited(inhibited: boolean): void {
    this.isPC190723Inhibited = inhibited;
    if (this.pc19HazardGlow) {
      this.pc19HazardGlow.intensity = inhibited ? 4.5 : 0.0;
    }
    const ringMesh = this.pieceMeshes.get('Piece_FtsZ_Protofilaments');
    if (ringMesh && ringMesh.material instanceof THREE.MeshStandardMaterial) {
      ringMesh.material.emissive.setHex(inhibited ? 0xe63946 : 0x3a86ff);
      ringMesh.material.emissiveIntensity = inhibited ? 0.38 : 0.22;
    }
    this.updatePieceTransforms();
  }

  public setGTPActive(active: boolean): void {
    this.isGTPActive = active;
  }

  public setExplanationStep(stepIndex: number): void {
    this.currentStageIndex = stepIndex;
    if (stepIndex === 0) {
      this.resetCamera();
      this.highlightPiece('all');
      return;
    }

    const stage = FTSZ_EXPLANATION_STAGES.find(s => s.step === stepIndex);
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

    if (stage.id === 'midcell_positioning') this.selectComponent('ftsz_mincde_barrier');
    else if (stage.id === 'gtp_polymerization') this.selectComponent('ftsz_protofilaments');
    else if (stage.id === 'membrane_tethering') this.selectComponent('ftsz_ftsa_anchor');
    else if (stage.id === 'treadmilling_synthase') this.selectComponent('ftsz_ftswi_synthase');
    else if (stage.id === 'constriction_scission') this.selectComponent('ftsz_inner_membrane');
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
    this.flyCameraTo(new THREE.Vector3(0, 4.5, 27), new THREE.Vector3(0, -0.8, 0), 1.0);
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
        <g class="ftsz-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(5, 10, 24, 0.88)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    // Attach click events on SVG subpills
    const items = this.svgLayer.querySelectorAll('.ftsz-leader-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = item.getAttribute('data-key');
        if (key && FTSZ_COMPONENTS_META[key]) {
          this.focusComponent(key);
          this.onSelectComponent(FTSZ_COMPONENTS_META[key]);
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

    // Directional Tangential Protofilament Treadmilling (No center-spinning or layer clipping)
    if (!this.isPaused && !this.isPC190723Inhibited && this.isGTPActive) {
      const linearStep = delta * (this.treadmillingSpeed / 28.0) * 1.65;
      this.treadmillingPhase += linearStep;
      this.updatePieceTransforms();

      // Dynamic catalytic cyan pulse
      if (this.catalyticGlow) {
        this.catalyticGlow.intensity = 2.2 + 1.0 * Math.sin(time * 3.5);
      }
    } else if (this.isPC190723Inhibited) {
      // Frozen treadmilling in straight GTP-locked state with pulsating red hazard light
      if (this.pc19HazardGlow) {
        this.pc19HazardGlow.intensity = 3.5 + 1.5 * Math.sin(time * 5.0);
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
