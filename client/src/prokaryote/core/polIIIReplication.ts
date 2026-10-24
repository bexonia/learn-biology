// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial DNA Polymerase III Replisome Holoenzyme — 3D Scenario Engine
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 5FKV / 5FKU / 2POL)
 * Adhering strictly to CELLULAR_INSPECTOR_BLUEPRINT.md and BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 *
 * Subunits & Functional Pieces:
 * 1. Piece_PolIII_Alpha (Royal Blue #3A86FF) — DnaE catalytic polymerase palm, fingers, thumb (Chain A)
 * 2. Piece_PolIII_Beta_Clamp (Golden Amber #FFB703) — DnaN beta-2 homodimeric sliding clamp toroid (Chains B, C)
 * 3. Piece_PolIII_Epsilon (Carmine Red #E63946) — DnaQ 3'-5' exonuclease editing proofreader (Chain D)
 * 4. Piece_PolIII_Tau (Lilac Purple #9D4EDD) — DnaX replisome organizer stalk domain (Chain E)
 * 5. Piece_PolIII_DNA_Duplex (Royal Violet #7209B7 & Cyan #00F5D4) — Primer & Template DNA duplex (Chains P, T)
 * 6. Piece_PolIII_DnaB_Helicase (Luminous Jade #06D6A0) — Replicative hexameric unwinding helicase ring
 * 7. Piece_PolIII_Parental_Fork (Deep Marine #0077B6) — Parental duplex splitting into leading & lagging forks
 * 8. Piece_PolIII_Active_Palm (Glowing Amber-Gold #FFB703) — Catalytic two-metal-ion Mg2+ coordination center
 *
 * Biophysical Systems:
 * - Real-time processive dNTP influx stream (dATP, dTTP, dGTP, dCTP) entering catalytic palm
 * - High-speed continuous replication dynamics (100–1,200 bp/sec; nominal 1,000 bp/sec)
 * - Proofreading 3'-to-5' exonuclease switch (High Fidelity < 10^-8 vs Mutator state)
 * - Exploded view dissociation along authentic replisome vectors
 * - 6-Stage Universal Explanatory Trace with synchronized camera dollies & closed captions
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { PolIIIComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const POL_III_COMPONENTS_META: Record<string, PolIIIComponentData> = {
  'pol_iii_holoenzyme': {
    name: 'Complete E. coli DNA Polymerase III Replisome Holoenzyme (PDB: 5FKV)',
    badge: 'REPLICATIVE REPLISOME HOLOENZYME',
    dims: 'Span: ~20 × 25 nm, Holoenzyme Mass: ~1,000 kDa (1 MDa megacomplex)',
    proteins: 'α (DnaE) + β₂ (DnaN) + ε (DnaQ) + τ (DnaX) + DnaB Helicase + Prim/Temp DNA',
    pdb: 'PDB: 5FKV (Cryo-EM, Nature 2015, Fernandez-Leiro / Scheres / Lamers Labs)',
    desc: 'The master chromosomal replication megacomplex of Escherichia coli. Duplicates the 4.64 million base-pair circular genome bidirectionally from oriC at up to 1,000 nucleotides per second per replication fork with an extraordinary error frequency under 1 in 100 million.',
    role: 'Executes rapid, faithful, and processive duplication of the bacterial chromosome during cell division.',
    stoichiometry: '2–3 Pol III cores (αεθ) + 2–3 β₂ clamps + 1 γ/τ complex (τ₂γδδ′χψ) + 1 DnaB hexamer',
    catalyticPalm: 'DnaE Palm domain (Asp403, Asp405) coordinating two catalytic Mg²⁺ ions',
    replicationSpeed: '100–1,200 bp/sec (physiological nominal: 1,000 bp/sec)'
  },
  'pol_iii_alpha': {
    name: 'Polymerase Subunit α (DnaE, Chain A)',
    badge: 'CATALYTIC POLYMERASE PALM',
    dims: 'Mass: ~129.9 kDa (1,160 residues, Royal Blue #3A86FF)',
    proteins: 'Subunit α (Palm, Fingers, Thumb domains + PHP editing-helper domain)',
    pdb: 'PDB: 5FKV [Chain A]',
    desc: 'The primary catalytic motor of DNA replication. Features a right-hand architecture with Palm, Fingers, and Thumb domains. The Palm holds the two-metal-ion active center, while the Fingers cycle in sub-millisecond conformational transitions to verify Watson-Crick base-pairing.',
    role: 'Catalyzes sequential phosphodiester bond synthesis at 1,000 nucleotides per second.'
  },
  'pol_iii_beta_clamp': {
    name: 'Sliding Clamp Subunit β₂ (DnaN Homodimer, Chains B & C)',
    badge: 'PROCESSIVITY RING TOROID',
    dims: 'Dimensions: Outer diameter ~8.0 nm, Pore diameter ~3.5 nm, Mass: ~81.2 kDa',
    proteins: 'β-Homodimer (6-fold pseudo-symmetric star toroid, Golden Amber #FFB703)',
    pdb: 'PDB: 5FKV [Chains B, C] / 2POL',
    desc: 'The ring-shaped sliding clamp that encircles double-stranded DNA without binding it directly. By tethering the catalytic α subunit to the DNA template, it elevates processivity from a meager ~10 nucleotides to over 100,000 nucleotides per binding event.',
    role: 'Enforces high processivity, preventing the polymerase from dissociating from the template.'
  },
  'pol_iii_epsilon': {
    name: 'Proofreading Exonuclease Subunit ε (DnaQ, Chain D)',
    badge: '3′-TO-5′ PROOFREADER',
    dims: 'Mass: ~27.5 kDa (243 residues, Carmine Red #E63946)',
    proteins: 'Subunit ε (DEDD catalytic exonuclease family + C-terminal α-binding helix)',
    pdb: 'PDB: 5FKV [Chain D]',
    desc: 'The autonomous 3′→5′ proofreading exonuclease. When an incorrect nucleotide is incorporated, the frayed 3′-terminus migrates from the α palm to the ε active site, where two divalent metal ions hydrolyze the mispaired nucleotide, lowering error frequency by 1,000-fold.',
    role: 'Removes misincorporated non-Watson-Crick bases to preserve genomic fidelity.'
  },
  'pol_iii_tau': {
    name: 'Replisome Organizer Subunit τ (DnaX, Chain E)',
    badge: 'ORGANIZER STALK',
    dims: 'Mass: ~71.1 kDa (domain V shown in cryo-EM, Lilac Purple #9D4EDD)',
    proteins: 'Subunit τ (Domain IV binds DnaB helicase; Domain V binds α and ε)',
    pdb: 'PDB: 5FKV [Chain E]',
    desc: 'The central physical bridge of the replisome. Connects the leading-strand and lagging-strand polymerase cores directly to the hexameric DnaB helicase, physically coupling DNA unwinding at the fork to downstream synthesis.',
    role: 'Coordinates leading and lagging strand synthesis speeds with helicase fork unzipping.'
  },
  'pol_iii_dnab_helicase': {
    name: 'DnaB Replicative Unwinding Helicase Hexamer',
    badge: 'REPLICATION FORK UNWINDER',
    dims: 'Outer diameter: ~11.5 nm, Central pore: ~2.8 nm, Mass: ~300 kDa (Hexamer)',
    proteins: '6 × DnaB subunits forming a C6-symmetric toroidal motor (Luminous Jade #06D6A0)',
    pdb: 'Replicative Hexameric Motor [PDB: 4ESV / 6QEM]',
    desc: 'The ATP-driven motor encircling the lagging-strand template at the replication fork. Burns ATP to translocate 5′→3′ processively, melting hydrogen bonds of the parental duplex at 1,000 base-pairs per second ahead of the advancing polymerases.',
    role: 'Unzips the chromosomal DNA duplex to generate single-stranded templates for replication.'
  },
  'pol_iii_dna_duplex': {
    name: 'Primer-Template DNA Duplex',
    badge: 'REPLICATING DUPLEX',
    dims: 'Length: ~25 bp (~8.5 nm duplex span, Royal Violet #7209B7 & Cyan #00F5D4)',
    proteins: 'Template Strand (Cyan #00F5D4) + Growing Primer Strand (Royal Violet #7209B7)',
    pdb: 'PDB: 5FKV [Chains P, T]',
    desc: 'The double-stranded DNA passing through the 3.5 nm central pore of the β₂ sliding clamp into the active palm cleft of subunit α. At the 3′-terminus, the primer strand presents a reactive 3′-hydroxyl for incoming dNTP nucleophilic attack.',
    role: 'Template-directed substrate for processive semi-conservative duplication.'
  },
  'pol_iii_active_palm': {
    name: 'Catalytic Polymerization Palm (Asp403 / Asp405)',
    badge: 'TWO-METAL-ION CATALYTIC CENTER',
    dims: 'Span: ~1.2 nm active pocket (Glowing Gold #FFB703)',
    proteins: '2 × Mg²⁺ ions coordinated by conserved DnaE carboxylates Asp403 & Asp405',
    pdb: 'PDB: 5FKV Active Center',
    desc: 'The two-metal-ion catalytic pocket of DNA polymerase III. Metal ion A activates the primer 3′-OH nucleophile to attack the α-phosphate of the incoming complementary dNTP; metal ion B stabilizes the pentacovalent transition state and facilitates pyrophosphate leaving.',
    role: 'Catalyzes phosphodiester bond synthesis with sub-millisecond turnover.'
  },
  'pol_iii_parental_fork': {
    name: 'Parental Replication Fork & Trombone Loop',
    badge: 'REPLICATION FORK & TROMBONE',
    dims: 'Span: ~12 nm unwound region (Deep Marine #0077B6)',
    proteins: 'Parental DNA duplex splitting into leading strand and lagging trombone loop',
    pdb: 'Replication Fork Architecture',
    desc: 'The physical bifurcation where the parental chromosome is split. The leading strand is synthesized continuously, while the lagging strand loops out like a trombone slide to allow 5′→3′ synthesis of 1–2 kb Okazaki fragments on the inverted template.',
    role: 'Accommodates anti-parallel DNA synthesis from a single coordinated replisome complex.'
  }
};

export interface PolIIIExplanationStage {
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

export const POL_III_EXPLANATION_STAGES: PolIIIExplanationStage[] = [
  {
    step: 1,
    id: 'helicase_unwinding',
    badge: 'FORK UNZIP',
    title: '1. Replication Fork Unwinding by DnaB Helicase',
    color: '#06D6A0',
    spoken: 'Step one: Replication Fork Unwinding. The hexameric DnaB helicase encircles the lagging-strand template, burning ATP to translocate processively at one thousand base pairs per second. It unzips the parental double helix, generating two single-stranded templates for duplication.',
    target: [-0.2, -6.8, -2.2],
    camRadius: 28,
    camTheta: 0.35,
    camPhi: 1.30
  },
  {
    step: 2,
    id: 'clamp_loading',
    badge: 'β₂ CLAMP',
    title: '2. β₂ Sliding Clamp Loading & DNA Encircling',
    color: '#FFB703',
    spoken: 'Step two: Sliding Clamp Loading. The ATP-dependent gamma-clamp loader opens the star-shaped beta-two homodimer toroid and clamps it around the primer-template junction. This molecular ring acts as a high-speed sliding sleeve, increasing polymerase processivity ten-thousand-fold.',
    target: [-0.85, 2.95, -1.85],
    camRadius: 20,
    camTheta: 0.65,
    camPhi: 1.38
  },
  {
    step: 3,
    id: 'leading_synthesis',
    badge: '1,000 nt/s',
    title: '3. Processive Leading-Strand Polymerization',
    color: '#3A86FF',
    spoken: 'Step three: Leading-Strand Polymerization. Subunit alpha captures the sliding clamp. Incoming deoxyribonucleoside triphosphates enter the catalytic palm, where two magnesium ions catalyze phosphodiester synthesis at one thousand nucleotides per second in continuous forward replication.',
    target: [-0.15, -0.65, 0.85],
    camRadius: 16,
    camTheta: 0.45,
    camPhi: 1.32
  },
  {
    step: 4,
    id: 'lagging_trombone',
    badge: 'TROMBONE',
    title: '4. Lagging-Strand Trombone Loop Extrusion',
    color: '#9D4EDD',
    spoken: 'Step four: Lagging-Strand Trombone Loop. Because DNA is antiparallel, lagging-strand synthesis occurs discontinuously. The template strand loops out like a trombone slide, allowing the lagging-strand polymerase core to synthesize one-to-two kilobase Okazaki fragments.',
    target: [-1.8, -3.5, -2.0],
    camRadius: 26,
    camTheta: 1.05,
    camPhi: 1.35
  },
  {
    step: 5,
    id: 'proofreading_editing',
    badge: 'ε PROOFREAD',
    title: '5. Proofreading Exonuclease Mismatch Editing',
    color: '#E63946',
    spoken: 'Step five: Proofreading Editing. If a rare mispaired nucleotide slips into the DNA, the distorted primer terminus frays out of the alpha palm and enters subunit epsilon. Epsilon hydrolyzes the mismatched base, elevating replication fidelity to one error in one hundred million bases.',
    target: [3.04, -0.57, -1.92],
    camRadius: 18,
    camTheta: 1.35,
    camPhi: 1.28
  },
  {
    step: 6,
    id: 'processive_duplication',
    badge: 'REPLISOME',
    title: '6. Coordinated Steady-State Chromosomal Duplication',
    color: '#00F5D4',
    spoken: 'Step six: Steady-State Chromosomal Duplication. Synchronized by tau stalks, the entire one-megadalton replisome duplicates the four-point-six-four million base pair Escherichia coli chromosome in just forty minutes, faithfully copying life code for the next bacterial generation.',
    target: [0.0, 0.0, 0.0],
    camRadius: 38,
    camTheta: 0.45,
    camPhi: 1.30
  }
];

export class PolIIIReplisomeScene {
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

  // Dynamic particle systems (incoming dNTP substrate stream)
  private dntpStreamGroup: THREE.Group = new THREE.Group();
  private dntpParticles: THREE.Mesh[] = [];
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
  private replicationSpeed: number = 1000.0; // bp/sec
  private isPaused: boolean = false;
  private isProofreadingActive: boolean = true;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera Dolly Lerp
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: PolIIIComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: PolIIIComponentData) => void;
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
    this.scene.background = new THREE.Color(0x050a18); // Deep replicative nucleoid navy

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 48);

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
    this.controls.target.set(0, -1.0, 0);
    this.controls.minDistance = 6;
    this.controls.maxDistance = 150;
    this.controls.addEventListener('change', () => {
      if (this.onCameraMove) this.onCameraMove();
    });

    // 5. Lighting
    this.setupLighting();

    // 6. Incoming dNTP Substrate Stream
    this.buildDNTPStream();

    // 7. Add Groups to Scene
    this.scene.add(this.modelGroup);
    this.scene.add(this.dntpStreamGroup);

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

    const mainSun = new THREE.DirectionalLight(0xffffff, 1.4);
    mainSun.position.set(30, 45, 35);
    this.scene.add(mainSun);

    // Amber rim light for beta-2 sliding clamp
    const clampLight = new THREE.DirectionalLight(0xffb703, 1.2);
    clampLight.position.set(0, 35, 15);
    this.scene.add(clampLight);

    // Cyan rim light for DnaB helicase & replication fork
    const forkLight = new THREE.DirectionalLight(0x06d6a0, 1.2);
    forkLight.position.set(-20, -35, -20);
    this.scene.add(forkLight);

    // Catalytic palm active site point light
    this.catalyticGlow = new THREE.PointLight(0xffb703, 1.8, 12);
    this.catalyticGlow.position.set(-0.15, -0.65, 0.85);
    this.scene.add(this.catalyticGlow);

    const hemi = new THREE.HemisphereLight(0x1e3a8a, 0x090d16, 0.6);
    this.scene.add(hemi);
  }

  private buildDNTPStream() {
    // 28 incoming dNTP molecules entering catalytic palm
    const colors = [0xe63946, 0x48cae4, 0x2a9d8f, 0xffb703]; // dATP, dTTP, dGTP, dCTP
    const sphereGeo = new THREE.SphereGeometry(0.18, 10, 10);

    for (let i = 0; i < 28; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % 4],
        roughness: 0.25,
        metalness: 0.15,
        emissive: colors[i % 4],
        emissiveIntensity: 0.6
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.userData = {
        seed: i / 28,
        speed: 0.8 + (i % 4) * 0.2,
        offset: new THREE.Vector3((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 1.4)
      };
      this.dntpStreamGroup.add(mesh);
      this.dntpParticles.push(mesh);
    }
  }

  private async loadModel() {
    const loader = new GLTFLoader();
    const modelUrl = '/prokaryote/models/5FKV_assembled_pieces.glb';

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
              if (mesh.name.includes('Active_Palm')) {
                freshMat.emissive = new THREE.Color(0xffb703);
                freshMat.emissiveIntensity = 0.55;
                freshMat.roughness = 0.18;
                freshMat.metalness = 0.35;
              } else if (mesh.name.includes('Beta_Clamp')) {
                freshMat.emissive = new THREE.Color(0xffb703);
                freshMat.emissiveIntensity = 0.18;
              } else if (mesh.name.includes('DnaB_Helicase')) {
                freshMat.emissive = new THREE.Color(0x06d6a0);
                freshMat.emissiveIntensity = 0.16;
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
        console.warn('[PolIIIReplisomeScene] Could not load 5FKV_assembled_pieces.glb:', err);
      }
    );
  }

  private setupDynamicLeaderAnchors() {
    this.leaderAnchors = [
      {
        key: 'pol_iii_alpha',
        targetMeshName: 'Piece_PolIII_Alpha',
        label: 'Subunit α (Catalytic Palm)',
        color: '#3A86FF',
        offset: new THREE.Vector3(1.2, 0.4, 2.2),
        badge: 'α'
      },
      {
        key: 'pol_iii_beta_clamp',
        targetMeshName: 'Piece_PolIII_Beta_Clamp',
        label: 'β₂ Homodimer Sliding Clamp',
        color: '#FFB703',
        offset: new THREE.Vector3(-0.85, 3.2, -1.8),
        badge: 'β₂'
      },
      {
        key: 'pol_iii_epsilon',
        targetMeshName: 'Piece_PolIII_Epsilon',
        label: 'Subunit ε (3′→5′ Proofreader)',
        color: '#E63946',
        offset: new THREE.Vector3(3.2, -0.4, -1.8),
        badge: 'ε'
      },
      {
        key: 'pol_iii_tau',
        targetMeshName: 'Piece_PolIII_Tau',
        label: 'Subunit τ (Replisome Stalk)',
        color: '#9D4EDD',
        offset: new THREE.Vector3(-2.2, -5.2, -1.8),
        badge: 'τ'
      },
      {
        key: 'pol_iii_dnab_helicase',
        targetMeshName: 'Piece_PolIII_DnaB_Helicase',
        label: 'DnaB Hexameric Helicase',
        color: '#06D6A0',
        offset: new THREE.Vector3(-0.2, -6.8, -2.2),
        badge: 'DnaB'
      },
      {
        key: 'pol_iii_dna_duplex',
        targetMeshName: 'Piece_PolIII_DNA_Duplex',
        label: 'Replicating DNA Duplex',
        color: '#00F5D4',
        offset: new THREE.Vector3(-0.3, 1.0, -0.2),
        badge: 'Duplex'
      },
      {
        key: 'pol_iii_parental_fork',
        targetMeshName: 'Piece_PolIII_Parental_Fork',
        label: 'Parental Replication Fork',
        color: '#0077B6',
        offset: new THREE.Vector3(-0.2, -10.5, -2.2),
        badge: 'Fork'
      },
      {
        key: 'pol_iii_active_palm',
        targetMeshName: 'Piece_PolIII_Active_Palm',
        label: 'Two-Metal Mg²⁺ Catalytic Pocket',
        color: '#FFB703',
        offset: new THREE.Vector3(-0.15, -0.65, 0.85),
        badge: 'Mg²⁺'
      }
    ];
  }

  private setupSVGOverlay() {
    let svg = this.container.querySelector('.pol-iii-svg-overlay') as SVGSVGElement | null;
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'pol-iii-svg-overlay');
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

      const dx = sx > width / 2 ? 80 : -80;
      const dy = sy > height / 2 ? 40 : -40;
      const lx = sx + dx;
      const ly = sy + dy;

      const pillWidth = Math.max(120, anchor.label.length * 7.2 + 38);
      const cardX = lx > sx ? lx : lx - pillWidth;

      html += `
        <g class="pol-iii-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(5, 10, 24, 0.92)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    const items = this.svgLayer.querySelectorAll('.pol-iii-leader-item');
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

    const vectors: Record<string, THREE.Vector3> = {
      'Piece_PolIII_Alpha': new THREE.Vector3(0.0, 0.0, 4.0),           // Polymerase palm steps forward (+Z)
      'Piece_PolIII_Beta_Clamp': new THREE.Vector3(0.0, 6.0, 0.0),       // Beta clamp slides along DNA (+Y)
      'Piece_PolIII_Epsilon': new THREE.Vector3(5.0, 0.0, 0.0),          // Proofreading exonuclease dissociates rightward (+X)
      'Piece_PolIII_Tau': new THREE.Vector3(-3.5, -4.5, 0.0),            // Tau stalk dissociates leftward (-X, -Y)
      'Piece_PolIII_DNA_Duplex': new THREE.Vector3(0.0, 0.0, -3.5),      // Duplex shifts backward (-Z)
      'Piece_PolIII_DnaB_Helicase': new THREE.Vector3(0.0, -7.5, 0.0),   // Helicase separates downward (-Y)
      'Piece_PolIII_Parental_Fork': new THREE.Vector3(0.0, -10.0, 0.0),  // Parental fork extends (-Y)
      'Piece_PolIII_Active_Palm': new THREE.Vector3(0.0, 0.0, 4.0)       // Follows Alpha palm
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
  public setReplicationSpeed(speed: number) {
    this.replicationSpeed = speed;
  }

  public setPaused(paused: boolean) {
    this.isPaused = paused;
  }

  public setProofreadingActive(active: boolean) {
    this.isProofreadingActive = active;
  }

  public selectComponent(key: string) {
    const meta = POL_III_COMPONENTS_META[key];
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
      this.startCameraDolly(new THREE.Vector3(0, 0, 48), new THREE.Vector3(0, -1, 0), 1.5);
      if (this.onSubtitlesUpdate) {
        this.onSubtitlesUpdate(
          'DNA Polymerase III Replisome ready. Click a stage below or Start Explanatory Trace to explore chromosomal replication.',
          'READY',
          '#06D6A0'
        );
      }
      return;
    }

    const stage = POL_III_EXPLANATION_STAGES.find((s) => s.step === stepIndex);
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

    if (stage.id === 'helicase_unwinding') this.selectComponent('pol_iii_dnab_helicase');
    else if (stage.id === 'clamp_loading') this.selectComponent('pol_iii_beta_clamp');
    else if (stage.id === 'leading_synthesis') this.selectComponent('pol_iii_alpha');
    else if (stage.id === 'lagging_trombone') this.selectComponent('pol_iii_parental_fork');
    else if (stage.id === 'proofreading_editing') this.selectComponent('pol_iii_epsilon');
    else if (stage.id === 'processive_duplication') this.selectComponent('pol_iii_holoenzyme');
  }

  private startCameraDolly(endPos: THREE.Vector3, endTarget: THREE.Vector3, durationSec: number) {
    this.camStartPos.copy(this.camera.position);
    this.camEndPos.copy(endPos);
    this.camStartTarget.copy(this.controls.target);
    this.camEndTarget.copy(endTarget);
    this.camLerpProgress = 0.0;
  }

  public resetCamera() {
    this.startCameraDolly(new THREE.Vector3(0, 0, 48), new THREE.Vector3(0, -1, 0), 1.2);
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

      // Camera dolly lerp
      if (this.camLerpProgress < 1.0) {
        this.camLerpProgress += delta * 1.25;
        const t = THREE.MathUtils.smoothstep(this.camLerpProgress, 0.0, 1.0);
        this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, t);
        this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, t);
        if (this.onCameraMove) this.onCameraMove();
      }

      this.controls.update();

      if (this.keyboardFlight) {
        this.keyboardFlight.update();
      }

      // Processive dNTP influx stream animation + DnaB rotation + DNA translocation
      const effectiveRate = this.isPaused ? 0.0 : (this.replicationSpeed / 1000.0);

      if (effectiveRate > 0 && this.explodedProgress < 0.05) {
        const dnabMesh = this.pieceMeshes.get('Piece_PolIII_DnaB_Helicase');
        if (dnabMesh) {
          dnabMesh.rotation.y += delta * 1.2 * effectiveRate;
        }
        const duplexMesh = this.pieceMeshes.get('Piece_PolIII_DNA_Duplex');
        const duplexBase = this.pieceBasePositions.get('Piece_PolIII_DNA_Duplex');
        if (duplexMesh && duplexBase) {
          duplexMesh.position.y = duplexBase.y + Math.sin(time * 4.0 * effectiveRate) * 0.25;
        }
      }

      this.dntpParticles.forEach((p) => {
        const seed = p.userData.seed;
        const speed = p.userData.speed;
        const progress = (time * 0.5 * speed * effectiveRate + seed) % 1.0;

        // Path from solution [2.5, 4.0, 3.5] through clamp into catalytic palm [-0.15, -0.65, 0.85]
        const pStart = new THREE.Vector3(2.5, 4.0, 3.5);
        const pMid = new THREE.Vector3(1.2, 1.5, 2.0);
        const pEnd = new THREE.Vector3(-0.15, -0.65, 0.85);

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

      // Catalytic active site glow
      if (this.catalyticGlow) {
        if (!this.isProofreadingActive) {
          this.catalyticGlow.color.setHex(0xe63946); // Warning red for mutator phenotype
          this.catalyticGlow.intensity = 1.0;
        } else if (this.isPaused) {
          this.catalyticGlow.color.setHex(0xffb703);
          this.catalyticGlow.intensity = 0.5;
        } else {
          this.catalyticGlow.color.setHex(0xffb703);
          this.catalyticGlow.intensity = 1.5 + Math.sin(time * 8.0) * 0.7; // Fast 1000 nt/s flicker
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
