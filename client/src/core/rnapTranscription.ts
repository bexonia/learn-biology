// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial RNA Polymerase Transcription Holoenzyme — 3D Scenario Engine
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 6C9Y / 6X9Q)
 * Adhering strictly to CELLULAR_INSPECTOR_BLUEPRINT.md and BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 *
 * Subunits & Functional Pieces:
 * 1. Piece_RNAP_Beta (Royal Blue #3A86FF) — Catalytic claw, rifampicin pocket (Chain C)
 * 2. Piece_RNAP_BetaPrime (Lilac Purple #9D4EDD) — Clamp jaw, bridge helix, NADFDGD catalytic triad (Chain D)
 * 3. Piece_RNAP_Alpha_Dimer (Luminous Jade #06D6A0) — Assembly scaffold homodimer (Chains A & B)
 * 4. Piece_RNAP_Omega (Luminous Teal #2EC4B6) — Structural chaperone latch wrapping beta' C-terminus (Chain E)
 * 5. Piece_RNAP_Sigma70 (Golden Amber #FFB703) — Promoter specificity factor for -10/-35 elements (Chain F)
 * 6. Piece_RNAP_DNA_Duplex (Royal Violet #7209B7 & Cyan #00F5D4) — Unwinding 13-bp transcription bubble
 * 7. Piece_RNAP_Nascent_RNA (Carmine Coral #E63946) — Newly synthesized mRNA transcript
 * 8. Piece_RNAP_Active_Mg (Glowing Amber-Gold #FFB703) — Catalytic two-metal-ion Mg2+ center
 *
 * Biophysical Systems:
 * - Real-time processive rNTP influx through secondary funnel into catalytic center
 * - Animated transcription bubble translocation and mRNA strand extrusion
 * - Exploded view dissociation along authentic biophysical vectors
 * - Rifampicin antibiotic inhibition toggle blocking RNA exit channel
 * - 6-Stage Universal Explanatory Trace with synchronized camera dollies & closed captions
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { RNAPComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const RNAP_COMPONENTS_META: Record<string, RNAPComponentData> = {
  'rnap_holoenzyme': {
    name: 'Complete E. coli RNA Polymerase σ⁷⁰ Holoenzyme (PDB: 6C9Y)',
    badge: 'TRANSCRIPTION HOLOENZYME',
    dims: 'Dimensions: ~14 × 16 × 12 nm, Holoenzyme Mass: ~430 kDa',
    proteins: 'α₂ββ′ω + σ⁷⁰ (Chains A, B, C, D, E, F) + DNA bubble + nascent RNA + Mg²⁺',
    pdb: 'PDB: 6C9Y (3.80 Å Cryo-EM, Darst/Murakami Labs)',
    desc: 'The multi-subunit nanomachine responsible for all cellular transcription in Escherichia coli. Unwinds double-stranded promoter DNA, pairs complementary ribonucleotides at 40–80 nt/s with extreme fidelity, and synthesizes mRNA, tRNA, and rRNA.',
    role: 'Primary genetic transcription engine converting chromosomal DNA code into functional RNA messages.',
    stoichiometry: '2 α + 1 β + 1 β′ + 1 ω + 1 σ⁷⁰ (Holoenzyme α₂ββ′ωσ)',
    catalyticTriad: 'β′ Asp460, Asp462, Asp464 (NADFDGD motif) coordinating 2 catalytic Mg²⁺ ions',
    transcriptionRate: '40–80 nt/sec (physiological nominal: 50 nt/sec)'
  },
  'rnap_beta': {
    name: 'RNA Polymerase Subunit β (Chain C)',
    badge: 'CATALYTIC CLAW & RIFAMPICIN POCKET',
    dims: 'Mass: ~150.6 kDa (1,342 residues, Royal Blue #3A86FF)',
    proteins: 'Subunit β (N-terminal domain, lobes 1 & 2, flap, downstream jaw)',
    pdb: 'PDB: 6C9Y [Chain C]',
    desc: 'Forms one half of the central catalytic claw. Houses the rifampicin antibiotic binding pocket and coordinates with β′ to form the main DNA channel and secondary pore for incoming rNTP substrates.',
    role: 'Forms the catalytic cleft and binds ribonucleoside triphosphates for template addition.'
  },
  'rnap_betaprime': {
    name: 'RNA Polymerase Subunit β′ (Chain D)',
    badge: 'CLAMP JAW & CATALYTIC ACTIVE CENTER',
    dims: 'Mass: ~155.2 kDa (1,407 residues, Lilac Purple #9D4EDD)',
    proteins: 'Subunit β′ (Clamp, bridge helix, trigger loop, catalytic NADFDGD motif)',
    pdb: 'PDB: 6C9Y [Chain D]',
    desc: 'The largest subunit of RNAP. Holds the catalytic NADFDGD Asp460/462/464 triad that coordinates two essential Mg²⁺ ions for phosphodiester bond synthesis. Contains the flexible bridge helix and trigger loop that govern translocation.',
    role: 'Executes the two-metal-ion nucleophilic attack mechanism adding incoming rNTPs to the growing RNA 3′-OH.'
  },
  'rnap_alpha_dimer': {
    name: 'RNA Polymerase α₂ Assembly Scaffold Homodimer (Chains A & B)',
    badge: 'ASSEMBLY PLATFORM & TF DOCK',
    dims: 'Mass: 2 × 36.5 kDa = ~73 kDa (Luminous Jade #06D6A0)',
    proteins: 'α-I and α-II subunits (NTD dimerization core + CTD promoter contact domains)',
    pdb: 'PDB: 6C9Y [Chains A, B]',
    desc: 'The initiator platform for core assembly (α₂ → α₂β → α₂ββ′ → α₂ββ′ω). The N-terminal domains form a stable dimer that nucleates RNAP assembly; the flexible C-terminal domains (α-CTD) interact with UP-elements and transcription factors (CAP/CRP).',
    role: 'Initiates assembly of the holoenzyme and mediates transcription factor regulatory contacts.'
  },
  'rnap_omega': {
    name: 'RNA Polymerase Subunit ω (Chain E)',
    badge: 'CHAPERONE LATCH',
    dims: 'Mass: ~10.2 kDa (91 residues, Luminous Teal #2EC4B6)',
    proteins: 'Subunit ω (C-terminal beta-hairpin wrap)',
    pdb: 'PDB: 6C9Y [Chain E]',
    desc: 'Small structural chaperone subunit that latches around the C-terminus of β′, assisting in its folding and stabilizing its interaction with the α₂β assembly intermediate.',
    role: 'Prevents aggregation of β′ during biogenesis and maintains structural integrity of the clamp.'
  },
  'rnap_sigma70': {
    name: 'Initiation Factor σ⁷⁰ (RpoD, Chain F)',
    badge: 'PROMOTER SPECIFICITY FACTOR',
    dims: 'Mass: ~70.2 kDa (613 residues, Golden Amber #FFB703)',
    proteins: 'σ⁷⁰ Domains 1.1, 2 (binds -10 Pribnow), 3, and 4 (binds -35 consensus)',
    pdb: 'PDB: 6C9Y [Chain F]',
    desc: 'The primary housekeeping sigma factor in E. coli. Recognizes canonical -35 (TTGACA) and -10 (TATAAT) promoter elements, inserts aromatic residues (Tyr430, Trp433) into the double helix to flip bases and melt the 13-bp open transcription bubble.',
    role: 'Directs holoenzyme to specific promoter sequences and initiates open complex formation.'
  },
  'rnap_dna_duplex': {
    name: 'Promoter DNA Duplex & 13-bp Transcription Bubble',
    badge: 'GENOMIC DNA TEMPLATE',
    dims: 'Length: ~25 bp (~8.5 nm span, Royal Violet #7209B7 & Cyan #00F5D4)',
    proteins: 'Template DNA Strand (Royal Violet) + Non-Template Strand (Luminous Cyan)',
    pdb: 'Open Promoter Complex Duplex',
    desc: 'Chromosomal DNA unwound by σ⁷⁰ into a single-stranded 13-bp transcription bubble. The template strand dives into the catalytic pocket toward the Mg²⁺ center, while the non-template strand arches across the outside of the claw.',
    role: 'Provides the informational code directing complementary ribonucleotide addition.'
  },
  'rnap_nascent_rna': {
    name: 'Nascent mRNA Transcript & RNA:DNA Hybrid',
    badge: 'EMERGING GENETIC TRANSCRIPT',
    dims: 'Length: ~18 nt (~6 nm strand, Carmine Coral #E63946)',
    proteins: '8–9 bp RNA:DNA hybrid in catalytic cleft + single-stranded RNA threading to exit channel',
    pdb: 'Translocating Nascent Transcript',
    desc: 'The newly synthesized messenger RNA. Forms an 8–9 base pair hybrid duplex with the template DNA strand before being peeled off by the β′ lid and threaded through the RNA exit channel toward the exterior (and the leading 70S ribosome).',
    role: 'Carries genetic codons from DNA to ribosomes for translation into proteins.'
  },
  'rnap_active_mg': {
    name: 'Catalytic Two-Metal-Ion Mg²⁺ Coordination Center',
    badge: 'CATALYTIC PHOSPHODIESTER POCKET',
    dims: 'Span: ~1.2 nm active site pocket (Glowing Gold #FFB703)',
    proteins: 'Mg²⁺ A and Mg²⁺ B coordinated by β′ Asp460, Asp462, Asp464',
    pdb: 'PDB: 6C9Y Active Site',
    desc: 'The catalytic heart of RNA polymerase. Mg²⁺ A activates the 3′-OH of the growing RNA primer for in-line nucleophilic attack on the α-phosphate of the incoming rNTP; Mg²⁺ B stabilizes the pentacovalent transition state and facilitates pyrophosphate (PPi) leaving.',
    role: 'Catalyzes phosphodiester bond formation with an error rate under 10⁻⁵.'
  },
  'rnap_rifampicin_pocket': {
    name: 'Rifampicin Antibiotic Target Pocket',
    badge: 'ANTIBIOTIC INHIBITION SITE',
    dims: 'Depth: ~1.2 nm from catalytic Mg²⁺ center (Chain C res 505–537)',
    proteins: 'β Subunit residues (Gln513, His526, Ser531, Leu533)',
    pdb: 'Rifampicin-Bound RNAP Pocket',
    desc: 'The binding pocket for the frontline clinical antibiotic Rifampicin. Rifampicin binds adjacent to the catalytic center, creating a physical steric wall that halts RNA transcripts when they reach 2 to 3 nucleotides, preventing elongation without halting initial binding.',
    role: 'Sterically obstructs the path of elongating nascent RNA transcripts.'
  }
};

export interface RNAPExplanationStage {
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

export const RNAP_EXPLANATION_STAGES: RNAPExplanationStage[] = [
  {
    step: 1,
    id: 'promoter_scanning',
    badge: 'σ⁷⁰ SCAN',
    title: '1. Promoter Recognition & Closed Complex',
    color: '#FFB703',
    spoken: 'Step one: Promoter Recognition and Closed Complex Formation. The RNA polymerase holoenzyme, directed by sigma-70, scans chromosomal DNA. Sigma domain 4 binds the minus-35 consensus element, while domain 2 docks into the minus-10 Pribnow box, forming the initial closed promoter complex.',
    target: [0.0, 3.2, 1.2],
    camRadius: 28,
    camTheta: 0.45,
    camPhi: 1.32
  },
  {
    step: 2,
    id: 'bubble_melting',
    badge: 'DNA MELT',
    title: '2. Transcription Bubble Melting & Open Complex',
    color: '#00F5D4',
    spoken: 'Step two: Transcription Bubble Melting. Without consuming ATP, aromatic residues in sigma-70 flip conserved adenine and thymine bases out of the DNA duplex, melting a thirteen-base-pair open transcription bubble. The single-stranded template strand is captured into the catalytic cleft.',
    target: [0.0, -1.2, 0.0],
    camRadius: 20,
    camTheta: 0.85,
    camPhi: 1.38
  },
  {
    step: 3,
    id: 'abortive_initiation',
    badge: 'SCRUNCH',
    title: '3. DNA Scrunching & Abortive Initiation',
    color: '#3A86FF',
    spoken: 'Step three: DNA Scrunching and Abortive Initiation. During initial synthesis, RNAP remains stationary at the promoter while pulling downstream DNA into its interior like an accordion. Short abortive transcripts of two to nine nucleotides are repeatedly synthesized until promoter clearance breaks sigma contacts.',
    target: [-0.5, -1.5, -0.4],
    camRadius: 18,
    camTheta: 0.25,
    camPhi: 1.40
  },
  {
    step: 4,
    id: 'processive_elongation',
    badge: 'CATALYSIS',
    title: '4. Processive Elongation & Two-Metal-Ion Catalysis',
    color: '#FFE066',
    spoken: 'Step four: Processive Elongation and Two-Metal-Ion Catalysis. In the active center, two coordinated magnesium ions catalyze nucleophilic attack of the nascent RNA three-prime hydroxyl on incoming ribonucleoside triphosphates, adding fifty nucleotides per second as the bridge helix ratchets.',
    target: [-0.2, -1.6, -0.4],
    camRadius: 14,
    camTheta: 0.55,
    camPhi: 1.35
  },
  {
    step: 5,
    id: 'rifampicin_block',
    badge: 'RIFAMPICIN',
    title: '5. RNA Exit Channel & Antibiotic Steric Block',
    color: '#E63946',
    spoken: 'Step five: RNA Exit Channel and Antibiotic Block. The nascent RNA transcript peels off the template strand and threads out through the exit channel. The antibiotic rifampicin binds directly in this channel, acting as a physical wall that halts RNA chains longer than three nucleotides.',
    target: [-1.2, 2.2, -1.8],
    camRadius: 18,
    camTheta: 1.15,
    camPhi: 1.25
  },
  {
    step: 6,
    id: 'expressome_coupled',
    badge: 'EXPRESSOME',
    title: '6. Expressome Coupling to Lead 70S Ribosome',
    color: '#9D4EDD',
    spoken: 'Step six: Expressome Coupling and Steady-State Transcription. In bacteria, transcription and translation are physically coupled. As nascent messenger RNA emerges from the exit channel, a leading 70S ribosome immediately docks onto the Shine-Dalgarno sequence, forming the expressome nanomachine that protects mRNA from premature degradation.',
    target: [0.0, 0.0, 0.0],
    camRadius: 36,
    camTheta: 0.45,
    camPhi: 1.30
  }
];

export class RNAPScene {
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

  // Dynamic biochemical particle systems
  private ntpStreamGroup: THREE.Group = new THREE.Group();
  private ntpParticles: THREE.Mesh[] = [];
  private catalyticGlow: THREE.PointLight | null = null;

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
  private transcriptionRate: number = 50.0; // nt/sec
  private isPaused: boolean = false;
  private isRifampicinInhibited: boolean = false;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera Dolly Lerp
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: RNAPComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: RNAPComponentData) => void;
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
    this.scene.background = new THREE.Color(0x060916); // Deep nucleoid genetic atmosphere

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 2, 42);

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
    this.controls.target.set(0, 0, 0);
    this.controls.minDistance = 6;
    this.controls.maxDistance = 140;
    this.controls.addEventListener('change', () => {
      if (this.onCameraMove) this.onCameraMove();
    });

    // 5. Lighting
    this.setupLighting();

    // 6. Incoming NTP Substrate Stream
    this.buildNTPStream();

    // 7. Add Groups to Scene
    this.scene.add(this.modelGroup);
    this.scene.add(this.ntpStreamGroup);

    // 8. Load GLB Model
    this.loadModel();

    // 9. SVG Overlay
    this.setupSVGOverlay();

    // 10. Keyboard navigation
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      controls: this.controls,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateSVGLeaders()
    });

    // 11. Start Animation Loop
    this.start();
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0xedf2f7, 0.85);
    this.scene.add(ambient);

    const mainSun = new THREE.DirectionalLight(0xffffff, 1.35);
    mainSun.position.set(25, 45, 35);
    this.scene.add(mainSun);

    // Amber rim light for σ⁷⁰ promoter recognition factor
    const sigmaLight = new THREE.DirectionalLight(0xffb703, 1.1);
    sigmaLight.position.set(0, 30, 20);
    this.scene.add(sigmaLight);

    // Cyan rim light for transcription bubble DNA
    const dnaLight = new THREE.DirectionalLight(0x00f5d4, 1.2);
    dnaLight.position.set(25, -20, 15);
    this.scene.add(dnaLight);

    // Catalytic Mg2+ active site point light
    this.catalyticGlow = new THREE.PointLight(0xffb703, 1.8, 12);
    this.catalyticGlow.position.set(-0.2, -1.6, -0.4);
    this.scene.add(this.catalyticGlow);

    const hemi = new THREE.HemisphereLight(0x1a365d, 0x090d16, 0.6);
    this.scene.add(hemi);
  }

  private buildNTPStream() {
    // 24 incoming NTP molecules flowing through the secondary channel into catalytic center
    const colors = [0xe63946, 0x48cae4, 0x2a9d8f, 0xffb703]; // ATP (Red), UTP (Cyan), GTP (Green), CTP (Yellow)
    const sphereGeo = new THREE.SphereGeometry(0.18, 10, 10);

    for (let i = 0; i < 24; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % 4],
        roughness: 0.25,
        metalness: 0.15,
        emissive: colors[i % 4],
        emissiveIntensity: 0.6
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.userData = {
        seed: i / 24,
        speed: 0.8 + (i % 3) * 0.2,
        offset: new THREE.Vector3((Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2)
      };
      this.ntpStreamGroup.add(mesh);
      this.ntpParticles.push(mesh);
    }
  }

  private async loadModel() {
    const loader = new GLTFLoader();
    const modelUrl = 'models/6C9Y_assembled_pieces.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        const root = gltf.scene;

        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (mesh.material) {
              const origMat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
              const freshMat = new THREE.MeshStandardMaterial({
                color: origMat.color || new THREE.Color(0x3a86ff),
                roughness: 0.35,
                metalness: 0.12,
                side: THREE.DoubleSide
              });
              if (mesh.name.includes('Active_Mg')) {
                freshMat.emissive = new THREE.Color(0xffb703);
                freshMat.emissiveIntensity = 0.55;
                freshMat.roughness = 0.18;
                freshMat.metalness = 0.35;
              } else if (mesh.name.includes('Sigma70')) {
                freshMat.emissive = new THREE.Color(0xffb703);
                freshMat.emissiveIntensity = 0.18;
              } else if (mesh.name.includes('Nascent_RNA')) {
                freshMat.emissive = new THREE.Color(0xe63946);
                freshMat.emissiveIntensity = 0.22;
              }
              mesh.material = freshMat;
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
        console.warn('[RNAPScene] Could not load 6C9Y_assembled_pieces.glb:', err);
      }
    );
  }

  private setupDynamicLeaderAnchors() {
    this.leaderAnchors = [
      {
        key: 'rnap_beta',
        targetMeshName: 'Piece_RNAP_Beta',
        label: 'Subunit β (Catalytic Claw)',
        color: '#3A86FF',
        offset: new THREE.Vector3(2.5, 0.5, 2.2),
        badge: 'β'
      },
      {
        key: 'rnap_betaprime',
        targetMeshName: 'Piece_RNAP_BetaPrime',
        label: 'Subunit β′ (Clamp & Active Center)',
        color: '#9D4EDD',
        offset: new THREE.Vector3(-2.8, 0.8, -1.8),
        badge: 'β′'
      },
      {
        key: 'rnap_alpha_dimer',
        targetMeshName: 'Piece_RNAP_Alpha_Dimer',
        label: 'Subunit α₂ Assembly Dimer',
        color: '#06D6A0',
        offset: new THREE.Vector3(-1.2, -4.8, 0.0),
        badge: 'α₂'
      },
      {
        key: 'rnap_omega',
        targetMeshName: 'Piece_RNAP_Omega',
        label: 'Subunit ω (Chaperone Latch)',
        color: '#2EC4B6',
        offset: new THREE.Vector3(-3.2, -1.2, -2.8),
        badge: 'ω'
      },
      {
        key: 'rnap_sigma70',
        targetMeshName: 'Piece_RNAP_Sigma70',
        label: 'Initiation Factor σ⁷⁰',
        color: '#FFB703',
        offset: new THREE.Vector3(-1.5, 4.6, 1.2),
        badge: 'σ⁷⁰'
      },
      {
        key: 'rnap_dna_duplex',
        targetMeshName: 'Piece_RNAP_DNA_Duplex',
        label: 'Promoter DNA Duplex & Bubble',
        color: '#00F5D4',
        offset: new THREE.Vector3(3.6, -0.4, 0.5),
        badge: 'DNA'
      },
      {
        key: 'rnap_nascent_rna',
        targetMeshName: 'Piece_RNAP_Nascent_RNA',
        label: 'Nascent mRNA Transcript',
        color: '#E63946',
        offset: new THREE.Vector3(-1.2, 2.8, -2.2),
        badge: 'mRNA'
      },
      {
        key: 'rnap_active_mg',
        targetMeshName: 'Piece_RNAP_Active_Mg',
        label: 'Catalytic Mg²⁺ Coordination Center',
        color: '#FFB703',
        offset: new THREE.Vector3(-0.2, -1.6, -0.4),
        badge: 'Mg²⁺'
      },
      {
        key: 'rnap_rifampicin_pocket',
        targetMeshName: 'Piece_RNAP_Beta',
        label: 'Rifampicin Target Pocket',
        color: '#E76F51',
        offset: new THREE.Vector3(0.5, -0.2, -1.5),
        badge: 'RIF'
      }
    ];
  }

  private setupSVGOverlay() {
    let svg = this.container.querySelector('.rnap-svg-overlay') as SVGSVGElement | null;
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'rnap-svg-overlay');
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
        <g class="rnap-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(6, 12, 24, 0.92)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    // Attach click triggers to subpills
    const items = this.svgLayer.querySelectorAll('.rnap-leader-item');
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
  // Exploded View Dissociation Mathematics
  // ---------------------------------------------------------------------------
  public setExplodedProgress(t: number) {
    this.explodedProgress = THREE.MathUtils.clamp(t, 0.0, 1.0);

    // Subunits translate along authentic biological dissociation vectors:
    const vectors: Record<string, THREE.Vector3> = {
      'Piece_RNAP_Beta': new THREE.Vector3(3.5, 0.2, 3.2),          // Opens claw outward (+X, +Z)
      'Piece_RNAP_BetaPrime': new THREE.Vector3(-3.5, 0.2, -3.2),     // Pulls clamp jaw outward (-X, -Z)
      'Piece_RNAP_Alpha_Dimer': new THREE.Vector3(0.0, -6.5, 0.0),    // Assembly platform dissociates downward (-Y)
      'Piece_RNAP_Omega': new THREE.Vector3(-2.5, -1.5, -4.5),        // Latch unwraps from Beta' (-X, -Z)
      'Piece_RNAP_Sigma70': new THREE.Vector3(0.0, 7.5, 1.8),         // Promoter specificity factor releases upward (+Y)
      'Piece_RNAP_DNA_Duplex': new THREE.Vector3(4.5, 2.0, 0.5),      // DNA duplex lifts out of cleft (+X, +Y)
      'Piece_RNAP_Nascent_RNA': new THREE.Vector3(-3.2, 4.2, -3.0),   // RNA strand pulls out of exit channel (-X, +Y, -Z)
      'Piece_RNAP_Active_Mg': new THREE.Vector3(0.0, 0.0, 0.0)        // Anchored at core
    };

    this.pieceMeshes.forEach((mesh, name) => {
      const basePos = this.pieceBasePositions.get(name);
      if (!basePos) return;

      let vec = vectors[name];
      if (!vec) {
        for (const [key, v] of Object.entries(vectors)) {
          if (name.startsWith(key)) {
            vec = v;
            break;
          }
        }
      }

      if (vec) {
        mesh.position.copy(basePos).addScaledVector(vec, this.explodedProgress);
      }
    });

    this.updateSVGLeaders();
  }

  // ---------------------------------------------------------------------------
  // Interactive Simulation Controls
  // ---------------------------------------------------------------------------
  public setTranscriptionRate(rate: number) {
    this.transcriptionRate = rate;
  }

  public setPaused(paused: boolean) {
    this.isPaused = paused;
  }

  public setRifampicinInhibited(inhibited: boolean) {
    this.isRifampicinInhibited = inhibited;
  }

  public selectComponent(key: string) {
    const meta = RNAP_COMPONENTS_META[key];
    if (meta) {
      this.onSelectComponent(meta);
    }
  }

  public focusComponent(key: string) {
    const anchor = this.leaderAnchors.find((a) => a.key === key);
    if (!anchor) return;

    let targetPos = new THREE.Vector3();
    if (anchor.worldPos) {
      targetPos.copy(anchor.worldPos);
    } else if (anchor.targetMeshName && anchor.offset) {
      const mesh = this.getMeshByNameOrPrefix(anchor.targetMeshName);
      if (mesh) {
        targetPos = anchor.offset.clone();
        mesh.localToWorld(targetPos);
      }
    }

    const currentDist = this.camera.position.distanceTo(this.controls.target);
    const targetDist = Math.max(12, Math.min(26, currentDist * 0.75));
    const dir = this.camera.position.clone().sub(this.controls.target).normalize();

    this.startCameraDolly(
      targetPos.clone().addScaledVector(dir, targetDist),
      targetPos,
      1.2
    );
  }

  public setExplanationStep(stepIndex: number) {
    this.currentStageIndex = stepIndex;
    if (this.onStageChange) this.onStageChange(stepIndex);

    if (stepIndex === 0) {
      // Macro overview
      this.startCameraDolly(new THREE.Vector3(0, 2, 42), new THREE.Vector3(0, 0, 0), 1.5);
      if (this.onSubtitlesUpdate) {
        this.onSubtitlesUpdate(
          'RNA Polymerase Holoenzyme ready. Click a stage below or Start Explanatory Trace to explore transcription.',
          'READY',
          '#FFB703'
        );
      }
      return;
    }

    const stage = RNAP_EXPLANATION_STAGES.find((s) => s.step === stepIndex);
    if (!stage) return;

    const [tx, ty, tz] = stage.target;
    const target = new THREE.Vector3(tx, ty, tz);

    const r = stage.camRadius;
    const theta = stage.camTheta;
    const phi = stage.camPhi;

    const camPos = new THREE.Vector3(
      r * Math.sin(phi) * Math.sin(theta) + tx,
      r * Math.cos(phi) + ty,
      r * Math.sin(phi) * Math.cos(theta) + tz
    );

    this.startCameraDolly(camPos, target, 1.4);

    if (this.onSubtitlesUpdate) {
      this.onSubtitlesUpdate(stage.spoken, stage.title, stage.color);
    }

    // Select the key component
    if (stage.id === 'promoter_scanning') this.selectComponent('rnap_sigma70');
    else if (stage.id === 'bubble_melting') this.selectComponent('rnap_dna_duplex');
    else if (stage.id === 'abortive_initiation') this.selectComponent('rnap_beta');
    else if (stage.id === 'processive_elongation') this.selectComponent('rnap_active_mg');
    else if (stage.id === 'rifampicin_block') this.selectComponent('rnap_rifampicin_pocket');
    else if (stage.id === 'expressome_coupled') this.selectComponent('rnap_holoenzyme');
  }

  private startCameraDolly(endPos: THREE.Vector3, endTarget: THREE.Vector3, durationSec: number) {
    this.camStartPos.copy(this.camera.position);
    this.camEndPos.copy(endPos);
    this.camStartTarget.copy(this.controls.target);
    this.camEndTarget.copy(endTarget);
    this.camLerpProgress = 0.0;
  }

  public resetCamera() {
    this.startCameraDolly(new THREE.Vector3(0, 2, 42), new THREE.Vector3(0, 0, 0), 1.2);
  }

  public setTourActive(active: boolean) {
    this.isTourActive = active;
  }

  // ---------------------------------------------------------------------------
  // Animation Loop
  // ---------------------------------------------------------------------------
  public start() {
    this.active = true;
    this.clock.start();
    const animate = () => {
      if (!this.active) return;
      this.animFrameId = requestAnimationFrame(animate);

      const delta = this.clock.getDelta();
      const time = this.clock.getElapsedTime();

      // Camera lerp
      if (this.camLerpProgress < 1.0) {
        this.camLerpProgress += delta * 1.25;
        const t = THREE.MathUtils.smoothstep(this.camLerpProgress, 0.0, 1.0);
        this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, t);
        this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, t);
        if (this.onCameraMove) this.onCameraMove();
      }

      this.controls.update();

      // Keyboard flight
      if (this.keyboardFlight) {
        this.keyboardFlight.update();
      }

      // Processive NTP influx stream animation
      const effectiveRate = (this.isPaused || this.isRifampicinInhibited) ? 0.0 : (this.transcriptionRate / 50.0);

      this.ntpParticles.forEach((p) => {
        const seed = p.userData.seed;
        const speed = p.userData.speed;
        const progress = (time * 0.4 * speed * effectiveRate + seed) % 1.0;

        // Path entering from secondary funnel [1.8, -4.5, 2.0] into active center [-0.2, -1.6, -0.4]
        const pStart = new THREE.Vector3(1.8, -4.5, 2.0);
        const pMid = new THREE.Vector3(0.8, -2.8, 0.6);
        const pEnd = new THREE.Vector3(-0.2, -1.6, -0.4);

        const curvePos = new THREE.Vector3();
        if (progress < 0.5) {
          const t1 = progress / 0.5;
          curvePos.lerpVectors(pStart, pMid, t1);
        } else {
          const t2 = (progress - 0.5) / 0.5;
          curvePos.lerpVectors(pMid, pEnd, t2);
        }

        curvePos.add(p.userData.offset.clone().multiplyScalar(1.0 - progress));
        p.position.copy(curvePos);
        p.visible = effectiveRate > 0;
      });

      // Catalytic Mg2+ active site pulsing
      if (this.catalyticGlow) {
        if (this.isRifampicinInhibited) {
          this.catalyticGlow.color.setHex(0xe63946); // Red warning glow
          this.catalyticGlow.intensity = 0.8;
        } else if (this.isPaused) {
          this.catalyticGlow.color.setHex(0xffb703);
          this.catalyticGlow.intensity = 0.5;
        } else {
          this.catalyticGlow.color.setHex(0xffb703);
          this.catalyticGlow.intensity = 1.4 + Math.sin(time * 6.0) * 0.6;
        }
      }

      this.updateSVGLeaders();
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  public stop() {
    this.active = false;
    if (this.animFrameId !== null) {
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
