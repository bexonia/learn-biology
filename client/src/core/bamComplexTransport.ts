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
    proteins: 'Modelled nascent Outer Membrane Porin beta-hairpin (OmpF precursor)',
    pdb: 'Simulated Substrate (Ma et al. / Bakelar et al.)',
    desc: 'The hydrophobic beta-hairpin substrate delivered by SurA. Enters the unzipped lateral seam of BamA, pairing with strand beta-16 to initiate barrel circularization in the membrane.',
    role: 'Substrate undergoing assisted thermodynamic folding into the outer membrane.'
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
    spoken: 'Step one: Chaperone Client Handover. The periplasmic chaperone SurA delivers an unfolded beta-barrel outer membrane protein to the N-terminal POTRA domains of BamA, preventing toxic aggregation in the periplasm.',
    target: [0.0, -4.5, 1.8],
    camRadius: 28,
    camTheta: 0.25,
    camPhi: 1.45
  },
  {
    step: 2,
    id: 'potra_gating',
    badge: 'BamD',
    title: '2. POTRA Conformational Gating',
    color: '#E76F51',
    spoken: 'Step two: POTRA Conformational Gating. POTRA domains 1 through 5 undergo a conformational rearrangement, coordinated by the essential BamD clamp, lifting the client peptide toward the membrane interface.',
    target: [-1.2, -2.5, 0.4],
    camRadius: 24,
    camTheta: 0.65,
    camPhi: 1.38
  },
  {
    step: 3,
    id: 'seam_destabilization',
    badge: 'SEAM',
    title: '3. Lateral Seam Destabilization',
    color: '#00F5D4',
    spoken: 'Step three: Lateral Seam Destabilization. The weak hydrogen bonds between beta strands 1 and 16 of the BamA barrel unzip, creating a dynamic opening and locally thinning the surrounding lipid bilayer.',
    target: [0.2, 0.8, -2.2],
    camRadius: 20,
    camTheta: 3.14,
    camPhi: 1.35
  },
  {
    step: 4,
    id: 'hairpin_insertion',
    badge: 'HAIRPIN',
    title: '4. Beta-Hairpin Membrane Insertion',
    color: '#FFE066',
    spoken: 'Step four: Beta-Hairpin Membrane Insertion. The first hydrophobic beta-hairpin of the client protein inserts sideways into the opened seam, using the edge of strand beta-16 as an assembly template.',
    target: [0.0, 1.0, -1.2],
    camRadius: 18,
    camTheta: 2.95,
    camPhi: 1.42
  },
  {
    step: 5,
    id: 'barrel_budding',
    badge: 'BUD',
    title: '5. Barrel Budding & OM Integration',
    color: '#0077B6',
    spoken: 'Step five: Barrel Budding and Release. Consecutive beta-hairpins fold sequentially until the new 16-stranded beta-barrel closes on itself and buds laterally into the outer membrane, driven entirely by folding thermodynamics without ATP.',
    target: [0.0, 1.5, 0.0],
    camRadius: 42,
    camTheta: 0.15,
    camPhi: 1.40
  }
];

export class BAMComplexScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private animFrameId: number | null = null;
  private clock = new THREE.Clock();

  // Model & Subunit groups
  private modelGroup: THREE.Group = new THREE.Group();
  private pieceMeshes: Map<string, THREE.Mesh> = new Map();
  private pieceBasePositions: Map<string, THREE.Vector3> = new Map();

  // Asymmetric Outer Membrane Bilayer
  private membraneGroup: THREE.Group = new THREE.Group();
  private innerLPSMesh: THREE.InstancedMesh | null = null;
  private outerPLMesh: THREE.InstancedMesh | null = null;

  // Inserting Client OMP Stream
  private clientHairpinMesh: THREE.Mesh | null = null;
  private clientBeadsGroup: THREE.Group = new THREE.Group();
  private clientBeads: THREE.Mesh[] = [];

  // Seam Tracking
  private seamMesh: THREE.Mesh | null = null;
  private seamBasePos = new THREE.Vector3();

  // SVG Leaders Layer
  private svgLayer: SVGSVGElement | null = null;
  private leaderAnchors: {
    key: string;
    targetMeshName: string;
    label: string;
    color: string;
    offset: THREE.Vector3;
    badge: string;
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

    // 7. Inserting Client Polypeptide Stream
    this.buildClientSubstrateStream();

    // 8. Add Groups to Scene
    this.scene.add(this.membraneGroup);
    this.scene.add(this.modelGroup);
    this.scene.add(this.clientBeadsGroup);

    // 9. Load GLB Model
    this.loadModel();

    // 10. SVG Overlay
    this.setupSVGOverlay();

    // 11. Start Animation Loop
    this.animate();
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

    const points: THREE.Vector3[] = [];
    for (let r = 1; r <= numRings; r++) {
      const curR = r * ringSpacing;
      // Skip hole for BamA barrel (barrel radius ~ 2.4 nm)
      if (curR < 3.2) continue;
      const count = Math.floor(2 * Math.PI * curR / ringSpacing);
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2 + (r % 2) * 0.2;
        const x = curR * Math.cos(theta);
        const z = curR * Math.sin(theta);
        points.push(new THREE.Vector3(x, 0, z));
      }
    }

    const sphereGeo = new THREE.SphereGeometry(0.38, 12, 10);

    // 1. Extracellular LPS Leaflet (Y = +1.6 nm) - Deep Marine
    const lpsMat = new THREE.MeshStandardMaterial({
      color: 0x0077b6,
      roughness: 0.3,
      metalness: 0.15,
      transparent: true,
      opacity: 0.88
    });
    const lpsMesh = new THREE.InstancedMesh(sphereGeo, lpsMat, points.length);
    const dummy = new THREE.Object3D();

    points.forEach((pt, idx) => {
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
      transparent: true,
      opacity: 0.82
    });
    const plMesh = new THREE.InstancedMesh(sphereGeo, plMat, points.length);

    points.forEach((pt, idx) => {
      dummy.position.set(pt.x, -1.6, pt.z);
      dummy.scale.set(0.95, 0.95, 0.95);
      dummy.updateMatrix();
      plMesh.setMatrixAt(idx, dummy.matrix);
    });
    plMesh.instanceMatrix.needsUpdate = true;
    this.membraneGroup.add(plMesh);
    this.outerPLMesh = plMesh;

    // Boundary guide rings
    const ringGeo = new THREE.RingGeometry(3.0, 3.2, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f5d4, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const innerRing = new THREE.Mesh(ringGeo, ringMat);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = 1.6;
    this.membraneGroup.add(innerRing);

    const outerRingGeo = new THREE.RingGeometry(radius - 0.2, radius, 64);
    const outerRing = new THREE.Mesh(outerRingGeo, ringMat);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = 1.6;
    this.membraneGroup.add(outerRing);
  }

  private buildClientSubstrateStream() {
    // 14 moving amino acid spheres illustrating continuous client insertion into seam
    const beadGeo = new THREE.SphereGeometry(0.24, 12, 12);
    const beadMat = new THREE.MeshStandardMaterial({
      color: 0xffe066,
      emissive: 0xffb703,
      emissiveIntensity: 0.6,
      roughness: 0.25,
      metalness: 0.2
    });

    for (let i = 0; i < 14; i++) {
      const bead = new THREE.Mesh(beadGeo, beadMat);
      this.clientBeadsGroup.add(bead);
      this.clientBeads.push(bead);
    }
  }

  private async loadModel() {
    const loader = new GLTFLoader();
    const modelUrl = 'models/5D0O_assembled_pieces.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        const root = gltf.scene;

        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

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
        offset: new THREE.Vector3(0.5, 0.8, -2.4),
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
        offset: new THREE.Vector3(-0.2, 0.2, -2.2),
        badge: 'CLIENT'
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
      const mesh = this.getMeshByNameOrPrefix(anchor.targetMeshName);
      if (!mesh || !mesh.visible) return;

      const worldPos = anchor.offset.clone();
      mesh.localToWorld(worldPos);

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
          <g transform="translate(${lx > sx ? lx : lx - 120}, ${ly - 12})">
            <rect width="125" height="26" rx="13" fill="rgba(6, 12, 24, 0.90)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="30" y="16.5" font-size="10.5" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
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
      } else {
        mat.opacity = 0.55;
        mat.transparent = true;
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
    this.transitionCameraTo(new THREE.Vector3(0, -1.0, 0), 46, 0.0, 1.4);
    if (this.controls) {
      this.controls.target.set(0, -1.0, 0);
      this.controls.update();
    }
  }

  public focusComponent(key: string) {
    const anchor = this.leaderAnchors.find((a) => a.key === key);
    if (anchor) {
      const mesh = this.getMeshByNameOrPrefix(anchor.targetMeshName);
      if (mesh) {
        const worldPos = anchor.offset.clone();
        mesh.localToWorld(worldPos);
        this.transitionCameraTo(worldPos, 22, 0.2, 1.35);
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
    if (!this.animFrameId) {
      this.clock.start();
      this.animate();
    }
  }

  public stop() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public dispose() {
    this.stop();
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
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

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

    // 2. Client beta-hairpin substrate translocation animation
    const effectiveSpeed = this.isPaused ? 0.0 : this.insertionSpeed;

    if (effectiveSpeed > 0.001) {
      const cycle = elapsed * 1.6 * effectiveSpeed;
      const beadCount = this.clientBeads.length;

      for (let i = 0; i < beadCount; i++) {
        const bead = this.clientBeads[i];
        const frac = ((i / beadCount) + (cycle % 1.0)) % 1.0;

        // Path from SurA periplasmic docking (Y=-5.5) -> POTRA 5 hinge (Y=-1.5) -> Lateral Seam (Y=+1.5)
        const y = -5.5 + frac * 7.5;
        const x = -0.3 + Math.sin(frac * Math.PI) * 0.4;
        const z = -2.2 - (this.lateralSeamOpening * Math.sin(frac * Math.PI) * 1.2);

        bead.position.set(x, y, z);
        const scale = 0.8 + 0.4 * Math.sin(frac * Math.PI);
        bead.scale.set(scale, scale, scale);
      }

      // Client hairpin loop gentle breathing motion
      if (this.clientHairpinMesh) {
        const breathe = Math.sin(elapsed * 2.5 * effectiveSpeed) * 0.08;
        this.clientHairpinMesh.scale.set(1.0 + breathe, 1.0, 1.0 + breathe);
      }
    }

    // 3. Update dynamic SVG leader lines
    this.updateSVGLeaders();

    // 4. Render
    this.renderer.render(this.scene, this.camera);
  };
}
