/**
 * gyraseSupercoiling.ts
 *
 * Core Three.js Scene Engine for the Bacterial DNA Gyrase Topoisomerase II ($A_2B_2$ Heterotetramer)
 * Milestone 4.3 in Phase 4 of CELLULAR_ELEMENTS_CATALOG.md
 *
 * Features:
 * - Loads authentic 8-piece decomposed cryo-EM / X-ray model (PDB: 1AB4 / 2XCT)
 * - Adheres strictly to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 * - Smooth exploded view dissociation along biological vectors v_dissoc
 * - Continuous strand-passage catalytic animation (T-segment transit & G-gate opening)
 * - Ciprofloxacin antibiotic poison mode (stabilizing covalent cleaved complex)
 * - Interactive supercoiling speed slider (0.2 to 5.0 cycles/s -> Delta Lk = -0.4 to -10 turns/s)
 * - 8 dynamic SVG leader lines with lettered badges and click targeting
 * - Universal 5-Stage Explanatory Trace ("How It Works" tutorial engine)
 * - KeyboardFlightController with WASD camera flight, orbit damping
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GyraseComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export interface GyraseExplanationStage {
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

export const GYRASE_COMPONENTS_META: Record<string, GyraseComponentData> = {
  'gyrase_holoenzyme': {
    name: 'DNA Gyrase Topoisomerase II (A₂B₂ Heterotetramer)',
    role: 'Topological Underwinding & Negative Supercoiling Motor',
    badge: 'GYRASE A₂B₂',
    dims: '12 nm × 14 nm',
    proteins: 'GyrA Dimer (97 kDa × 2) + GyrB Dimer (90 kDa × 2) = 374 kDa',
    pdb: '1AB4 / 2XCT',
    desc: 'The sole topoisomerase in nature capable of actively introducing negative supercoils into double-stranded DNA using ATP energy. Operates via an orchestrated three-gate mechanism: captures a T-DNA duplex in the GyrB N-gate, transiently cleaves both strands of the G-DNA duplex using Tyr122 transesterification, passes the T-segment through the open gate, and religates the DNA, reducing linking number by ΔLk = -2.',
    catalyticTyrosine: 'Tyr122 (5′-phosphotyrosyl covalent linkage)',
    supercoilingRate: '1.5 cycles/s (ΔLk = -3/s)',
    stoichiometry: '1 Positively Supercoiled Loop + 2 ATP → 1 Underwound Loop (ΔLk = -2) + 2 ADP + 2 Pi'
  },
  'gyrase_gyra_dimer': {
    name: 'GyrA Cleavage-Resealing Dimer (59 kDa Core)',
    role: 'Gate DNA binding, transient double-strand cleavage & C-gate exit',
    badge: 'GyrA₂ CORE',
    dims: '8.5 nm × 6.2 nm',
    proteins: 'GyrA homodimer (Arg121, Tyr122, Asp403)',
    pdb: '1AB4',
    desc: 'Heart-shaped homodimer forming the lower DNA-binding saddle, tower domains, and primary catalytic cleavage gate. Each monomer presents a catalytic Tyr122 residue for reversible transesterification of G-DNA scissile phosphodiester bonds, while the C-terminal coiled-coil forms the exit C-gate.',
    catalyticTyrosine: 'Tyr122 phenolic OH'
  },
  'gyrase_gyrb_dimer': {
    name: 'GyrB ATPase Clamp Dimer (90 kDa × 2)',
    role: 'ATP-operated N-gate dimerization & T-segment capture',
    badge: 'GyrB₂ ATPASE',
    dims: '9.0 nm × 7.5 nm',
    proteins: 'GyrB homodimer (Bergerat ATPase fold + TOPRIM)',
    pdb: '6F86 / 2XCT',
    desc: 'Upper motor clamp containing two Bergerat-type ATP-binding pockets. ATP binding drives rapid dimerization of the N-terminal domains, trapping the T-segment DNA in the upper chamber and thrusting it downward toward the G-gate.',
    catalyticTyrosine: 'Glu424, Asp500 (TOPRIM Mg²⁺ coordination)'
  },
  'gyrase_g_segment': {
    name: 'G-Segment (Gate DNA Duplex, 24 bp)',
    role: 'Target duplex cleaved to create transient DNA gate',
    badge: 'G-DNA GATE',
    dims: '7.5 nm length (24 bp duplex)',
    proteins: 'Target double helix spanning catalytic cleavage saddle',
    pdb: '2XCT',
    desc: 'The gate DNA double helix bound across the GyrA catalytic saddle. Transesterification by dual Tyr122 residues cleaves both strands with a 4-base staggered overhang, covalently tethering the 5′-phosphate ends and parting open to allow T-segment passage.'
  },
  'gyrase_t_segment': {
    name: 'T-Segment (Transported DNA Duplex, 20 bp)',
    role: 'Transported duplex passed through the transient break',
    badge: 'T-DNA TRANSIT',
    dims: '6.2 nm length (20 bp duplex)',
    proteins: 'Substrate DNA clamped in upper GyrB chamber',
    pdb: '2XCT',
    desc: 'The transported contiguous segment of double-stranded DNA captured in the upper chamber between the closed GyrB arms. Propelled downward through the open G-gate into the lower cavity, altering the knotting number and linking number by exactly ΔLk = -2.'
  },
  'gyrase_tyr122_active': {
    name: 'Tyr122 Catalytic Cleavage Center & Mg²⁺',
    role: 'Reversible transesterification & 5′-phosphotyrosyl covalent bond',
    badge: 'Tyr122 / Mg²⁺',
    dims: '1.8 nm active cleft',
    proteins: 'GyrA Tyr122, Arg121, Lys41 + TOPRIM Glu424, Asp500',
    pdb: '1AB4 (Tyr122) / 2XCT (Mn²⁺/Mg²⁺)',
    desc: 'The catalytic heart of topoisomerase cleavage. Phenolic oxygen of Tyr122 performs nucleophilic attack on the scissile phosphodiester bond, conserving bond energy as a covalent protein-DNA intermediate without ATP expenditure.',
    catalyticTyrosine: 'Tyr122-O-P(O)₂-O-DNA covalent bond'
  },
  'gyrase_cipro_pocket': {
    name: 'Ciprofloxacin Quinolone Pharmacophore Pocket',
    role: 'Bactericidal topoisomerase poisoning & cleaved complex trapping',
    badge: 'CIPRO TRAP',
    dims: '1.5 nm drug binding pocket',
    proteins: 'Target of Ciprofloxacin, Levofloxacin, Moxifloxacin',
    pdb: '2XCT (CPF)',
    desc: 'Bactericidal fluoroquinolone antibiotics intercalate between broken -1 and +1 base pairs, chelating the catalytic Mg²⁺ water shell and stabilizing the covalent 5′-phosphotyrosyl intermediate. Trapped gyrase-DNA complexes stall replication forks, inducing catastrophic double-strand breaks.'
  },
  'gyrase_atp_sites': {
    name: 'Dual Bergerat ATPase Pockets',
    role: 'Energy transduction coupling 2 ATP hydrolysis to N-gate cycle',
    badge: '2× ATP ENGINE',
    dims: '1.4 nm nucleotide pocket',
    proteins: 'GyrB Asn46, Glu50, Asp73',
    pdb: '6F86',
    desc: 'Two nucleotide-binding pockets in the GHKL superfamily fold. Binding 2 ATP triggers N-gate closure; sequential hydrolysis of the two ATPs drives T-segment transport and enzyme resetting.'
  },
  'gyrase_ctd_pinwheels': {
    name: 'GyrA C-Terminal Domain (CTD) β-Pinwheels',
    role: 'Positive chiral wrapping (120°) directing negative supercoiling',
    badge: 'CTD PINWHEELS',
    dims: '4.5 nm diameter each',
    proteins: 'GyrA 530–840 (6-bladed β-propellers)',
    pdb: '1ZI0 / 3NUH',
    desc: 'Unique to bacterial DNA gyrase among topoisomerases. Dual 6-bladed beta-pinwheels wrap the flanking DNA duplex in a right-handed loop around the enzyme circumference, ensuring that the presented T-segment always crosses G-DNA with positive chirality, so strand passage introduces negative supercoils.'
  }
};

export const GYRASE_EXPLANATION_STAGES: GyraseExplanationStage[] = [
  {
    step: 1,
    id: 'wrapping',
    badge: 'CTD PINWHEEL',
    title: '1. Chiral DNA Wrapping around CTD Pinwheels',
    color: '#0077B6',
    spoken: 'Step one: Chiral DNA Wrapping. Double-stranded DNA wraps around the dual beta-pinwheel domains of GyrA in a right-handed loop. This unique stereospecific wrapping ensures the presented T-segment crosses the gate DNA with positive chirality, priming the enzyme to generate negative supercoils.',
    target: [-3.8, -1.5, 0.4],
    camRadius: 28,
    camTheta: 0.85,
    camPhi: 1.30
  },
  {
    step: 2,
    id: 't_capture',
    badge: 'GyrB ATPASE',
    title: '2. T-Segment Capture & ATP-Driven N-Gate Closure',
    color: '#FFB703',
    spoken: 'Step two: T-Segment Capture. Two ATP molecules bind to the GyrB ATPase domains, triggering rapid dimerization of the N-terminal clamp. This closes the upper N-gate, trapping the transported T-segment securely in the upper internal chamber.',
    target: [0.0, 4.2, 0.2],
    camRadius: 22,
    camTheta: 0.35,
    camPhi: 1.25
  },
  {
    step: 3,
    id: 'cleavage',
    badge: 'Tyr122 CLEAVE',
    title: '3. Tyr122 Catalytic Transesterification & Double-Strand Break',
    color: '#E63946',
    spoken: 'Step three: Catalytic Cleavage. Dual Tyr122 residues in the GyrA active sites execute a nucleophilic attack on the G-DNA backbone, creating a staggered four-base double-strand break and forming covalent five-prime phosphotyrosyl bonds that conserve chemical energy.',
    target: [0.0, -0.2, 0.0],
    camRadius: 16,
    camTheta: 0.15,
    camPhi: 1.35
  },
  {
    step: 4,
    id: 'strand_passage',
    badge: 'T-PASSAGE',
    title: '4. T-Segment Strand Passage through Open G-Gate',
    color: '#06D6A0',
    spoken: 'Step four: Strand Passage. Driven by ATP hydrolysis, the GyrA gate parts open. The transported T-segment is propelled downward through the severed double-strand break into the lower central cavity of the enzyme.',
    target: [0.0, 1.2, 0.0],
    camRadius: 20,
    camTheta: 0.40,
    camPhi: 1.28
  },
  {
    step: 5,
    id: 'religation_exit',
    badge: 'RELIGATION',
    title: '5. G-Gate Religation, C-Gate Exit & Linking Number Change',
    color: '#00F5D4',
    spoken: 'Step five: Religation and Reset. Tyr122 hydroxyls are transferred back to the DNA three-prime oxygens, seamlessly religating the G-segment double helix. The bottom C-gate opens to release the T-DNA, and the enzyme resets, reducing chromosomal linking number by exactly delta L-k equals minus two.',
    target: [0.0, 0.0, 0.0],
    camRadius: 32,
    camTheta: 0.50,
    camPhi: 1.30
  }
];

export class DNAGyraseScene {
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
  private ciproHazardGlow: THREE.PointLight | null = null;

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
  private supercoilingRate: number = 1.5; // cycles/sec (Delta Lk = -3/s)
  private isPaused: boolean = false;
  private isCiprofloxacinInhibited: boolean = false;
  private isATPHydrolysisActive: boolean = true;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera Dolly Lerp
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: GyraseComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: GyraseComponentData) => void;
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
    this.scene.background = new THREE.Color(0x060c1c); // Deep topoisomerase dark navy

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 2, 38);

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
    this.controls.target.set(0, 0.8, 0);
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
    this.loadGyraseModel();

    // 10. Window resize listener
    window.addEventListener('resize', this.onResize);
  }

  private setupLighting(): void {
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambient);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(15, 25, 20);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7209b7, 1.4);
    dirLight2.position.set(-20, -10, -15);
    this.scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0x00f5d4, 1.0);
    rimLight.position.set(0, -20, 15);
    this.scene.add(rimLight);

    // Active catalytic Tyr122 center glow
    this.catalyticGlow = new THREE.PointLight(0xffb703, 2.5, 12);
    this.catalyticGlow.position.set(0, 0.2, 0.5);
    this.scene.add(this.catalyticGlow);

    // Ciprofloxacin poison hazard red glow
    this.ciproHazardGlow = new THREE.PointLight(0xe63946, 0.0, 15);
    this.ciproHazardGlow.position.set(0, 0.0, 0.8);
    this.scene.add(this.ciproHazardGlow);
  }

  private setupSVGOverlay(): void {
    const existing = document.getElementById('gyrase-svg-overlay') as SVGSVGElement | null;
    if (existing) {
      this.svgLayer = existing;
      while (this.svgLayer.firstChild) {
        this.svgLayer.removeChild(this.svgLayer.firstChild);
      }
    } else {
      this.svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgLayer.id = 'gyrase-svg-overlay';
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

  private loadGyraseModel(): void {
    const loader = new GLTFLoader();
    const modelUrl = '/prokaryote/models/1AB4_assembled_pieces.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        this.modelGroup = gltf.scene;
        this.modelGroup.name = 'DNAGyraseHoloenzyme';
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
              if (name.includes('Tyr122') || name.includes('Active')) {
                freshMat.emissive = new THREE.Color(0xffb703);
                freshMat.emissiveIntensity = 0.45;
              } else if (name.includes('Cipro')) {
                freshMat.emissive = new THREE.Color(0xe63946);
                freshMat.emissiveIntensity = 0.35;
              } else if (name.includes('ATP')) {
                freshMat.emissive = new THREE.Color(0x00f5d4);
                freshMat.emissiveIntensity = 0.40;
              }
              child.material = freshMat;
            }
          }
        });

        this.setupLeaderAnchors();
        console.log('[+] DNA Gyrase Holoenzyme model loaded successfully.');
      },
      undefined,
      (error) => {
        console.error('[-] Error loading DNA Gyrase model:', error);
      }
    );
  }

  private setupLeaderAnchors(): void {
    this.leaderAnchors = [
      {
        key: 'gyrase_gyra_dimer',
        targetMeshName: 'Piece_Gyrase_GyrA_Dimer',
        label: 'GyrA Cleavage Core (59 kDa)',
        badge: 'GyrA',
        color: '#3A86FF',
        worldPos: new THREE.Vector3(-0.5, -1.2, 0.5)
      },
      {
        key: 'gyrase_gyrb_dimer',
        targetMeshName: 'Piece_Gyrase_GyrB_Dimer',
        label: 'GyrB ATPase N-Clamp',
        badge: 'GyrB',
        color: '#FFB703',
        worldPos: new THREE.Vector3(1.8, 4.2, 0.6)
      },
      {
        key: 'gyrase_g_segment',
        targetMeshName: 'Piece_Gyrase_G_Segment',
        label: 'G-Segment (Gate DNA Duplex)',
        badge: 'G-DNA',
        color: '#7209B7',
        worldPos: new THREE.Vector3(2.5, -0.2, 0.8)
      },
      {
        key: 'gyrase_t_segment',
        targetMeshName: 'Piece_Gyrase_T_Segment',
        label: 'T-Segment (Transported DNA)',
        badge: 'T-DNA',
        color: '#06D6A0',
        worldPos: new THREE.Vector3(0.0, 3.8, 1.8)
      },
      {
        key: 'gyrase_tyr122_active',
        targetMeshName: 'Piece_Gyrase_Tyr122_Active',
        label: 'Tyr122 Catalytic Center & Mg²⁺',
        badge: 'Tyr122',
        color: '#FFB703',
        worldPos: new THREE.Vector3(0.0, 0.2, 0.8)
      },
      {
        key: 'gyrase_cipro_pocket',
        targetMeshName: 'Piece_Gyrase_Cipro_Pocket',
        label: 'Ciprofloxacin Binding Pocket',
        badge: 'Cipro',
        color: '#E63946',
        worldPos: new THREE.Vector3(-1.6, 0.3, 0.9)
      },
      {
        key: 'gyrase_atp_sites',
        targetMeshName: 'Piece_Gyrase_ATP_Sites',
        label: 'Bergerat ATP Pockets',
        badge: 'ATP',
        color: '#00F5D4',
        worldPos: new THREE.Vector3(-1.2, 5.5, 0.9)
      },
      {
        key: 'gyrase_ctd_pinwheels',
        targetMeshName: 'Piece_Gyrase_CTD_Pinwheels',
        label: 'GyrA CTD β-Pinwheels',
        badge: 'CTD',
        color: '#0077B6',
        worldPos: new THREE.Vector3(4.6, -1.8, 1.2)
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
        while (hitObj && !hitObj.name.startsWith('Piece_Gyrase_') && hitObj.parent !== this.modelGroup) {
          hitObj = hitObj.parent;
        }

        if (hitObj && hitObj.name.startsWith('Piece_Gyrase_')) {
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
    const meta = GYRASE_COMPONENTS_META[key];
    if (meta) {
      this.onSelectComponent(meta);
      this.highlightPiece(key);
    }
  }

  public focusComponent(key: string): void {
    const anchor = this.leaderAnchors.find(a => a.key === key);
    if (anchor && anchor.worldPos) {
      const targetPos = anchor.worldPos.clone();
      const camPos = targetPos.clone().add(new THREE.Vector3(0, 1.5, 14));
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
      if (!targetMeshName || name === targetMeshName) {
        mat.emissiveIntensity = 0.45;
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

    // Exploded vectors v_dissoc:
    // GyrB moves +Y (upward clamp dissociation)
    // GyrA moves -Y (downward core separation)
    // T-segment moves +Z (forward out of chamber)
    // CTD pinwheels move +/- X (outward lateral extension)
    // Cipro / Tyr122 / ATP offset with their respective subunits
    const offsets: Record<string, THREE.Vector3> = {
      'Piece_Gyrase_GyrB_Dimer': new THREE.Vector3(0, factor * 4.5, 0),
      'Piece_Gyrase_GyrA_Dimer': new THREE.Vector3(0, -factor * 3.5, 0),
      'Piece_Gyrase_T_Segment': new THREE.Vector3(0, factor * 2.5, factor * 3.2),
      'Piece_Gyrase_G_Segment': new THREE.Vector3(0, -factor * 1.0, 0),
      'Piece_Gyrase_Tyr122_Active': new THREE.Vector3(0, -factor * 3.5, 0),
      'Piece_Gyrase_Cipro_Pocket': new THREE.Vector3(0, -factor * 3.5, 0),
      'Piece_Gyrase_ATP_Sites': new THREE.Vector3(0, factor * 4.5, 0),
      'Piece_Gyrase_CTD_Pinwheels': new THREE.Vector3(0, -factor * 3.5, 0)
    };

    offsets['Piece_Gyrase_CTD_Pinwheels'] = new THREE.Vector3(0, -factor * 2.5, factor * 1.5);

    this.pieceMeshes.forEach((mesh, name) => {
      const base = this.pieceBasePositions.get(name);
      const off = offsets[name] || new THREE.Vector3();
      if (base) {
        mesh.position.copy(base).add(off);
      }
    });
  }

  public setSupercoilingRate(rate: number): void {
    this.supercoilingRate = Math.max(0.1, Math.min(5.0, rate));
  }

  public setPaused(paused: boolean): void {
    this.isPaused = paused;
  }

  public setCiprofloxacinInhibited(inhibited: boolean): void {
    this.isCiprofloxacinInhibited = inhibited;
    if (this.ciproHazardGlow) {
      this.ciproHazardGlow.intensity = inhibited ? 4.0 : 0.0;
    }
  }

  public setATPHydrolysisActive(active: boolean): void {
    this.isATPHydrolysisActive = active;
  }

  public setExplanationStep(stepIndex: number): void {
    this.currentStageIndex = stepIndex;
    if (stepIndex === 0) {
      this.resetCamera();
      this.highlightPiece('all');
      return;
    }

    const stage = GYRASE_EXPLANATION_STAGES.find(s => s.step === stepIndex);
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

    if (stage.id === 'wrapping') this.selectComponent('gyrase_ctd_pinwheels');
    else if (stage.id === 't_capture') this.selectComponent('gyrase_gyrb_dimer');
    else if (stage.id === 'cleavage') this.selectComponent('gyrase_tyr122_active');
    else if (stage.id === 'strand_passage') this.selectComponent('gyrase_t_segment');
    else if (stage.id === 'religation_exit') this.selectComponent('gyrase_holoenzyme');
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
    this.flyCameraTo(new THREE.Vector3(0, 2, 38), new THREE.Vector3(0, 0.8, 0), 1.0);
  }

  private updateSVGLeaders(): void {
    if (!this.svgLayer) return;

    let html = '';
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.leaderAnchors.forEach((anchor) => {
      const mesh = anchor.targetMeshName ? this.pieceMeshes.get(anchor.targetMeshName) : null;
      const anchorWorld = anchor.worldPos ? anchor.worldPos.clone() : new THREE.Vector3();
      if (mesh) {
        anchorWorld.copy(mesh.position).add(anchor.worldPos || new THREE.Vector3());
      }

      const screenPos = anchorWorld.clone().project(this.camera);
      if (screenPos.z > 1.0) return;

      const sx = ((screenPos.x + 1) * width) / 2;
      const sy = ((-screenPos.y + 1) * height) / 2;

      const dx = sx > width / 2 ? 75 : -75;
      const dy = sy > height / 2 ? 35 : -35;
      const lx = sx + dx;
      const ly = sy + dy;

      const pillWidth = Math.max(125, anchor.label.length * 7.0 + 36);
      const cardX = lx > sx ? lx : lx - pillWidth;

      html += `
        <g class="gyrase-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(6, 12, 28, 0.90)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    const items = this.svgLayer.querySelectorAll('.gyrase-leader-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = item.getAttribute('data-key');
        if (key && GYRASE_COMPONENTS_META[key]) {
          this.focusComponent(key);
          this.selectComponent(key);
        }
      });
    });
  }

  private animate = (): void => {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // Camera Lerp
    if (this.camLerpProgress < 1.0) {
      this.camLerpProgress = Math.min(1.0, this.camLerpProgress + delta * 1.5);
      const ease = 0.5 - 0.5 * Math.cos(this.camLerpProgress * Math.PI);
      this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, ease);
      this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, ease);
    }

    this.controls.update();

    // Dynamic Strand-Passage Oscillation
    if (!this.isPaused && !this.isCiprofloxacinInhibited && this.isATPHydrolysisActive) {
      const cycleFrequency = this.supercoilingRate * Math.PI * 2.0;
      const cyclePhase = (time * cycleFrequency) % (Math.PI * 2.0);

      // T-segment oscillates downward through the gate:
      // High (Y = 3.6) -> Middle (Y = 1.0) -> Low (Y = -2.5) -> Reset
      const tMesh = this.pieceMeshes.get('Piece_Gyrase_T_Segment');
      if (tMesh && this.explodedProgress < 0.05) {
        const transitY = 1.8 * Math.cos(cyclePhase);
        tMesh.position.y = 2.4 + transitY;
      }

      // G-gate parts open when T-segment reaches the center (cos ~ 0)
      const gMesh = this.pieceMeshes.get('Piece_Gyrase_G_Segment');
      if (gMesh && this.explodedProgress < 0.05) {
        const gateOpen = Math.max(0, Math.sin(cyclePhase)) * 0.45;
        gMesh.scale.x = 1.0 + gateOpen;
      }

      // Catalytic glow pulse
      if (this.catalyticGlow) {
        this.catalyticGlow.intensity = 2.0 + 1.2 * Math.sin(cyclePhase * 2.0);
      }
    } else if (this.isCiprofloxacinInhibited) {
      // Frozen in cleaved state with persistent hazard pulse
      if (this.ciproHazardGlow) {
        this.ciproHazardGlow.intensity = 3.0 + 1.5 * Math.sin(time * 6.0);
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
