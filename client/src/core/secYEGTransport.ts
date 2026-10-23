// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial SecYEG Translocon & SecA ATPase Motor — 3D Scenario Engine
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 6ITC & 3J46)
 * Adhering strictly to CELLULAR_INSPECTOR_BLUEPRINT.md and BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 *
 * Subunits & Functional Pieces:
 * 1. Piece_SecYEG_SecY (Royal Blue #3A86FF) — Hourglass transmembrane pore core, 6-Ile ring & plug
 * 2. Piece_SecYEG_Lateral_Gate (Luminous Cyan #00F5D4) — TM2b/3 & TM7/8 dynamic bilayer partition gate
 * 3. Piece_SecYEG_SecE (Golden Amber #FFB703) — V-shaped tilted amphipathic clamp helix
 * 4. Piece_SecYEG_SecG (Luminous Jade #06D6A0) — Inverted topology escort subunit (E. coli 3J46)
 * 5. Piece_SecYEG_SecA_Motor (Lilac Purple #9D4EDD) — Cytosolic ATPase engine with two-helix finger
 * 6. Piece_SecYEG_Translocating_Preprotein (Luminous Gold #FFE066) — Unfolded preprotein hairpin loop
 *
 * Biophysical Systems:
 * - Authentic Double-Leaflet Lipid Bilayer cross-section (polar headgroups & hydrophobic core)
 * - Dynamic Lateral Gate parting directly into the phospholipid bilayer (0% to 100%)
 * - SecA ATPase piston stroke inserting 20-aa polypeptide loops per ATP hydrolyzed
 * - Processive preprotein strand translocation with moving amino acid beads
 * - Exploded view dissociation along natural biophysical vectors
 * - 5-Stage Explanatory Trace with camera dollies & closed captions
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { SecYEGComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const SECYEG_COMPONENTS_META: Record<string, SecYEGComponentData> = {
  'secyeg_holoenzyme': {
    name: 'Complete SecYEG Translocon & SecA Motor (PDB: 3J46 / 6ITC)',
    badge: 'PROTEIN TRANSLOCASE & ATPASE MOTOR',
    dims: 'Height: ~11 nm, Width: ~8.5 nm, Holoenzyme Mass: ~280 kDa',
    proteins: 'SecY (10 TMs), SecE (V-clamp), SecG (inverted escort), SecA Motor (768 aa)',
    pdb: 'PDB: 3J46 (Cryo-EM) / 6ITC (3.45 Å Active State, Ma et al., Nat Struct Mol Biol 2019)',
    desc: 'The universal, essential protein-conducting channel of bacteria. Translocates unfolded secretome proteins across the cytoplasmic membrane into the periplasm or opens its dynamic lateral gate to partition transmembrane helices sideways into the lipid bilayer. Driven by the cytosolic SecA ATPase motor.',
    role: 'Secretion of outer membrane proteins, periplasmic enzymes, and integration of inner membrane proteins.',
    stoichiometry: '1 Preprotein + ~1 ATP per 20–25 amino acids translocated + Δp electrical pull.',
    atpConsumption: '1 ATP per 20-aa power stroke (~40–60 aa/sec translocation rate)',
    translocationRate: '40–60 amino acids/sec (continuous processive cycle)'
  },
  'inner_membrane': {
    name: 'Inner Cytoplasmic Membrane Bilayer',
    badge: 'PHOSPHOLIPID BILAYER',
    dims: 'Thickness: ~4.4 nm, Span: 36 nm × 36 nm',
    proteins: 'Symmetric Phospholipid Bilayer (PE, PG, Cardiolipin) (Vivid Jade #06D6A0)',
    pdb: 'Cytoplasmic Lipid Bilayer Cross-Section',
    desc: 'The cytoplasmic lipid bilayer containing the SecYEG translocase. The hydrophobic core consists of fatty acid acyl chains. During lateral gating, the TM2b/3 and TM7/8 helices part to allow nascent hydrophobic transmembrane helices to exit sideways directly into this lipid matrix.',
    role: 'Dielectric insulator, proton-motive force reservoir, and integration matrix for membrane proteins.',
    stoichiometry: 'Phospholipids (75% PE, 20% PG, 5% CL) forming continuous ~4.4 nm matrix.'
  },
  'secy_pore': {
    name: 'SecY Transmembrane Pore Core',
    badge: 'HOURGLASS PORE & PLUG HELIX',
    dims: '10 Transmembrane Helices (TM1–TM10), Central Pore: ~3 Å closed / ~12 Å open',
    proteins: 'SecY Subunit (Royal Blue, #3A86FF), Chain Y',
    pdb: 'PDB: 6ITC (Chain Y, core pore excluding lateral gate)',
    desc: 'The core channel subunit forming an hourglass-shaped conduit with a central hydrophobic constriction of 6 isoleucine residues that forms a flexible gasket around translocating polypeptides, preventing ion and proton leakage during active transport.',
    role: 'Aqueous translocation conduit and ion-tight hydrophobic seal.',
    stoichiometry: '1 SecY per active translocation channel.'
  },
  'lateral_gate': {
    name: 'Dynamic Lateral Gate (TM2b/3 & TM7/8)',
    badge: 'BILAYER PARTITION GATE',
    dims: 'Two pairs of interacting transmembrane helices (TM2b/3 and TM7/8)',
    proteins: 'SecY Lateral Gate Helices (Luminous Cyan, #00F5D4)',
    pdb: 'PDB: 6ITC (Residues 65–115 & 265–325)',
    desc: 'The dynamic conformational gate between the interior aqueous pore and the surrounding hydrophobic lipid bilayer. Opens transiently to allow hydrophobic transmembrane segments of membrane proteins to partition directly into the inner membrane.',
    role: 'Membrane protein integration and lateral lipid partitioning.',
    stoichiometry: 'Parts up to 1.4 nm during signal-anchor or TM integration.'
  },
  'sece_clamp': {
    name: 'SecE Amphipathic Clamp Helix',
    badge: 'V-SHAPED STRUCTURAL BRACE',
    dims: 'Tilted amphipathic surface helix + transmembrane helix',
    proteins: 'SecE Subunit (Golden Amber, #FFB703), Chain E',
    pdb: 'PDB: 6ITC (Chain E, 58 aa)',
    desc: 'Essential structural clamp that wraps around the two halves of SecY like a molecular spring, maintaining the structural integrity of the channel and preventing premature dissociation of the two halves during active translocation.',
    role: 'Prevents dissociation of SecY halves during translocation stress.',
    stoichiometry: '1 SecE per SecYEG heterotrimer.'
  },
  'secg_escort': {
    name: 'SecG Peripheral Escort Subunit',
    badge: 'INVERTED TOPOLOGY ESCORT',
    dims: 'Two transmembrane helices with inverted topology',
    proteins: 'SecG Subunit (Luminous Jade, #06D6A0), 3J46 Chain G',
    pdb: 'PDB: 3J46 (Chain G, 67 aa)',
    desc: 'Auxiliary subunit that undergoes an extraordinary topological inversion during the SecA catalytic cycle, accelerating translocation turnover especially at lower temperatures or reduced proton-motive force.',
    role: 'Accelerates catalytic turnover and membrane insertion kinetics.',
    stoichiometry: '1 SecG per translocon.'
  },
  'seca_motor': {
    name: 'SecA Cytosolic ATPase Motor',
    badge: 'TWO-HELIX FINGER PISTON',
    dims: '~204 kDa Dimer / Monomer, NBD1, NBD2, PBD, IRA1, Two-Helix Finger',
    proteins: 'SecA Motor (Lilac Purple, #9D4EDD), Chain A',
    pdb: 'PDB: 6ITC (Chain A, 768 aa)',
    desc: 'The powerful molecular motor that drives post-translational translocation. Hydrolyzes ATP to drive its two-helix finger down like a piston into the SecY pore, inserting a 20–25 amino acid polypeptide loop per catalytic stroke.',
    role: 'Mechanical power stroke engine converting ATP into directional peptide transport.',
    stoichiometry: 'Hydrolyzes 1 ATP per ~20 amino acids translocated.'
  },
  'translocating_peptide': {
    name: 'Translocating Preprotein Substrate',
    badge: 'NASCENT SECRETOME CLIENT',
    dims: 'Unfolded polypeptide hairpin chain in Luminous Gold (#FFE066)',
    proteins: 'Bound preprotein substrate (Chain B)',
    pdb: 'PDB: 6ITC (Chain B, 43 aa)',
    desc: 'The client polypeptide being actively secreted. Inserted as a hairpin loop with its N-terminal signal peptide anchored at the lateral gate while the C-terminal mature domain threads into the periplasm.',
    role: 'Substrate undergoing directional secretion to periplasmic chaperones (SurA).',
    stoichiometry: 'Threads continuously at 40–60 residues/sec.'
  }
};

export interface SecYEGExplanationStage {
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

export const SECYEG_EXPLANATION_STAGES: SecYEGExplanationStage[] = [
  {
    step: 1,
    id: 'signal_peptide_dock',
    badge: 'SIG',
    title: '1. Signal Peptide Recognition',
    color: '#FF4D00',
    spoken: 'Step one: Signal Peptide Recognition. The hydrophobic amino-terminal signal peptide of a nascent secretome protein binds to the hydrophobic groove outside the SecY channel, priming the translocon for pore activation.',
    target: [0.37, -0.45, -0.97],
    camRadius: 24,
    camTheta: 0.12,
    camPhi: 1.45
  },
  {
    step: 2,
    id: 'seca_atp_stroke',
    badge: 'SecA',
    title: '2. SecA Motor Power Stroke',
    color: '#9D4EDD',
    spoken: 'Step two: SecA Motor Power Stroke. SecA hydrolyzes ATP, driving its two-helix finger down like a piston. This mechanical stroke inserts a twenty-amino-acid polypeptide hairpin directly into the hour-glass pore.',
    target: [2.17, 3.83, 0.99],
    camRadius: 26,
    camTheta: 0.20,
    camPhi: 1.30
  },
  {
    step: 3,
    id: 'pore_plug_displacement',
    badge: 'PORE',
    title: '3. Pore Expansion & Plug Displacement',
    color: '#06D6A0',
    spoken: 'Step three: Pore Expansion and Plug Displacement. The insertion pushes the isoleucine pore-ring outward and displaces the luminal plug helix, establishing a water-filled channel across the inner membrane.',
    target: [-0.14, 0.16, 0.36],
    camRadius: 18,
    camTheta: 0.05,
    camPhi: 1.55
  },
  {
    step: 4,
    id: 'lateral_gate_partition',
    badge: 'GATE',
    title: '4. Lateral Gate Bilayer Partition',
    color: '#00F5D4',
    spoken: 'Step four: Lateral Gate Partition. Hydrophobic transmembrane segments of membrane proteins exit sideways through the parting lateral gate into the lipid bilayer, while hydrophilic domains pass straight through into the periplasm.',
    target: [0.37, -0.45, -0.97],
    camRadius: 20,
    camTheta: 3.14,
    camPhi: 1.40
  },
  {
    step: 5,
    id: 'processive_secretion',
    badge: 'FLUX',
    title: '5. Continuous Processive Secretion',
    color: '#3A86FF',
    spoken: 'Step five: Continuous Processive Secretion. SecA cycles ATP continuously, processively threading the polypeptide chain into the periplasmic space where the SurA chaperone waits to receive it.',
    target: [0.0, 1.5, 0.0],
    camRadius: 46,
    camTheta: 0.15,
    camPhi: 1.42
  }
];

export class SecYEGScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: any;
  private animFrameId: number | null = null;
  private active: boolean = false;
  private clock = new THREE.Clock();
  private keyboardFlight: KeyboardFlightController | null = null;

  // Root model group
  private modelGroup: THREE.Group = new THREE.Group();
  private pieceMeshes: Map<string, THREE.Mesh> = new Map();
  private pieceBasePositions: Map<string, THREE.Vector3> = new Map();

  // Bilayer membrane
  private membraneGroup: THREE.Group = new THREE.Group();
  private headgroupSpheres: THREE.InstancedMesh | null = null;
  private gatePortalMesh: THREE.Mesh | null = null;

  // Preprotein strand translocation
  private peptideStreamGroup: THREE.Group = new THREE.Group();
  private peptideBeads: THREE.Mesh[] = [];

  // SecA two-helix finger piston tracking
  private secaMesh: THREE.Mesh | null = null;
  private secaBaseY: number = 0;

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

  // Interactive state
  private atpRate: number = 1.0;
  private azideInhibited: boolean = false;
  private lateralGateOpening: number = 0.0;
  private explodedProgress: number = 0.0;
  private currentStageIndex: number = 0;
  private isTourActive: boolean = false;

  // Camera transition state
  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  // Callbacks
  private onSelectComponent: (comp: SecYEGComponentData) => void;
  private onCameraMove?: () => void;
  private onSubtitlesUpdate?: (text: string, title?: string, color?: string) => void;
  private onStageChange?: (stage: number) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectComponent: (comp: SecYEGComponentData) => void;
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

    this.init();
  }

  private async init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060913); // Atmospheric deep cytological navy

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 12, 42);

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
    this.controls.target.set(0, 1.5, 0);
    this.controls.minDistance = 6;
    this.controls.maxDistance = 120;
    this.controls.addEventListener('change', () => {
      if (this.onCameraMove) this.onCameraMove();
    });

    // 5. Lighting
    this.setupLighting();

    // 6. Bilayer Membrane Slab
    this.buildLipidBilayer();

    // 7. Preprotein Translocating Stream
    this.buildPreproteinStream();

    // 8. Add Groups to Scene
    this.scene.add(this.membraneGroup);
    this.scene.add(this.modelGroup);
    this.scene.add(this.peptideStreamGroup);

    // 9. Load GLB Model
    await this.loadModel();

    // 10. Setup SVG Leaders
    this.setupSVGOverlay();

    // 11. Event Listeners
    window.addEventListener('resize', this.onWindowResize);

    // Keyboard navigation (WASD, Arrows, Space, C, Shift, R)
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      controls: this.controls,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateSVGLeaders()
    });

    // 12. Animation Loop
    this.start();
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0xdbeafe, 0.85);
    this.scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(25, 40, 30);
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x06d6a0, 1.3);
    fillLight.position.set(-25, 15, -20);
    this.scene.add(fillLight);

    const bottomRim = new THREE.DirectionalLight(0x3a86ff, 1.5);
    bottomRim.position.set(0, -35, 10);
    this.scene.add(bottomRim);

    // Soft point lights accentuating the active channel pore
    const poreLight = new THREE.PointLight(0x00f5d4, 1.8, 25);
    poreLight.position.set(0, 0, 0);
    this.scene.add(poreLight);

    const secaLight = new THREE.PointLight(0x9d4edd, 2.0, 30);
    secaLight.position.set(2, 6, 1);
    this.scene.add(secaLight);
  }

  private buildLipidBilayer() {
    // Inner Cytoplasmic Membrane Bilayer cross-section:
    // Thickness: ~4.4 nm (Y = -2.2 to +2.2 nm)
    // Horizontal span: 36 nm x 36 nm (X: -18 to +18, Z: -18 to +18)
    const span = 36;
    const thickness = 4.4;

    // Translucent hydrophobic core slab with central aperture for SecY pore channel
    const shape = new THREE.Shape();
    const half = span / 2;
    shape.moveTo(-half, -half);
    shape.lineTo(half, -half);
    shape.lineTo(half, half);
    shape.lineTo(-half, half);
    shape.closePath();

    const poreHole = new THREE.Path();
    poreHole.absarc(0, 0, 4.2, 0, Math.PI * 2, true);
    shape.holes.push(poreHole);

    const coreGeo = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false, curveSegments: 48 });
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x06d6a0, // Ethereal cytological seafoam crystal-clear slab
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.11, // Super clean glass-like translucency: see through from top and bottom
      depthWrite: false, // Critical: do NOT block spheres, pore channel, or beads behind/below
      side: THREE.DoubleSide
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.rotation.x = Math.PI / 2;
    coreMesh.position.set(0, thickness / 2, 0); // Extrudes from +2.2 to -2.2
    coreMesh.renderOrder = 1;
    this.membraneGroup.add(coreMesh);

    // Polar headgroups: 2 leaflets of instanced spheres
    const headRadius = 0.35;
    const headGeo = new THREE.SphereGeometry(headRadius, 12, 10);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x06d6a0, // Vivid Jade / Seafoam Green
      roughness: 0.35,
      metalness: 0.15,
      emissive: 0x025c43,
      emissiveIntensity: 0.25,
      depthWrite: true
    });

    const spacing = 1.8;
    const countPerSide = Math.floor(span / spacing);
    const totalHeads = countPerSide * countPerSide * 2;

    this.headgroupSpheres = new THREE.InstancedMesh(headGeo, headMat, totalHeads);
    const dummy = new THREE.Object3D();
    let idx = 0;

    const halfSpan = span / 2;
    for (let i = 0; i < countPerSide; i++) {
      for (let j = 0; j < countPerSide; j++) {
        const x = -halfSpan + (i + 0.5) * spacing + (Math.sin(j * 0.8) * 0.2);
        const z = -halfSpan + (j + 0.5) * spacing + (Math.cos(i * 0.8) * 0.2);

        // Don't place heads directly inside the SecY channel pore (~5 nm radius) or front cutaway window
        const distToCenter = Math.sqrt(x * x + z * z);
        if (distToCenter < 4.5) continue;
        if (z > 2.0 && Math.abs(x) < 10.5) continue;

        // Top Leaflet (Cytoplasmic side, Y = +2.2)
        dummy.position.set(x, thickness / 2 + headRadius * 0.5, z);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        this.headgroupSpheres.setMatrixAt(idx++, dummy.matrix);

        // Bottom Leaflet (Periplasmic side, Y = -2.2, staggered offset by half spacing for biophysical packing & see-through visibility)
        dummy.position.set(x + spacing * 0.5, -thickness / 2 - headRadius * 0.5, z + spacing * 0.5);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        this.headgroupSpheres.setMatrixAt(idx++, dummy.matrix);
      }
    }
    this.headgroupSpheres.instanceMatrix.needsUpdate = true;
    this.membraneGroup.add(this.headgroupSpheres);

    // Membrane boundary guide ring
    const ringGeo = new THREE.RingGeometry(span / 2 - 0.2, span / 2, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0, side: THREE.DoubleSide, transparent: true, opacity: 0.45, depthWrite: false });
    const topRing = new THREE.Mesh(ringGeo, ringMat);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = thickness / 2;
    this.membraneGroup.add(topRing);

    const btmRing = topRing.clone();
    btmRing.position.y = -thickness / 2;
    this.membraneGroup.add(btmRing);

    // Dynamic Lateral Gate Bilayer Entry Portal Indicator
    const portalGeo = new THREE.TorusGeometry(1.6, 0.12, 12, 32);
    const portalMat = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.gatePortalMesh = new THREE.Mesh(portalGeo, portalMat);
    this.gatePortalMesh.position.set(0.6, 0.0, -3.2);
    this.gatePortalMesh.rotation.y = Math.PI / 4;
    this.gatePortalMesh.visible = false;
    this.membraneGroup.add(this.gatePortalMesh);
  }

  private buildPreproteinStream() {
    // Nascent polypeptide chain translocating through the SecY pore:
    // Individual amino acid sphere beads with independent materials for lateral partitioning
    const beadCount = 30;
    const beadGeo = new THREE.SphereGeometry(0.26, 12, 10);

    for (let i = 0; i < beadCount; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffe066, // Luminous Gold
        roughness: 0.25,
        metalness: 0.2,
        emissive: 0xffb703,
        emissiveIntensity: 0.85,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(beadGeo, mat);
      mesh.renderOrder = 5; // Ensure translocating dots trespassing through pore are always clearly visible from all angles
      mesh.visible = true;
      this.peptideStreamGroup.add(mesh);
      this.peptideBeads.push(mesh);
    }
  }

  private async loadModel() {
    const loader = new GLTFLoader();
    const modelUrl = '/models/3J46_assembled_pieces.glb';

    try {
      const gltf = await loader.loadAsync(modelUrl);
      const root = gltf.scene;

      root.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          // Store mesh reference by piece name
          this.pieceMeshes.set(mesh.name, mesh);
          this.pieceBasePositions.set(mesh.name, mesh.position.clone());

          // Track SecA motor
          if (mesh.name === 'Piece_SecYEG_SecA_Motor') {
            this.secaMesh = mesh;
            this.secaBaseY = mesh.position.y;
          }

          // Apply authentic PBR materials with high specular and double-sided rendering
          if (mesh.material) {
            (mesh.material as THREE.MeshStandardMaterial).roughness = 0.35;
            (mesh.material as THREE.MeshStandardMaterial).metalness = 0.12;
            (mesh.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
          }
        }
      });

      this.modelGroup.add(root);

      // Define Leader Anchors for dynamic SVG callouts
      this.leaderAnchors = [
        { key: 'inner_membrane', label: 'Inner Cytoplasmic Membrane', color: '#06D6A0', badge: 'IM', worldPos: new THREE.Vector3(12.0, 2.2, -6.0) },
        { key: 'seca_motor', targetMeshName: 'Piece_SecYEG_SecA_Motor', label: 'SecA ATPase Motor', color: '#9D4EDD', badge: 'SecA', offset: new THREE.Vector3(2.5, 5.0, 1.2) },
        { key: 'secy_pore', targetMeshName: 'Piece_SecYEG_SecY', label: 'SecY Hourglass Pore', color: '#3A86FF', badge: 'SecY', offset: new THREE.Vector3(-1.8, 0.2, 1.5) },
        { key: 'lateral_gate', targetMeshName: 'Piece_SecYEG_Lateral_Gate', label: 'Dynamic Lateral Gate', color: '#00F5D4', badge: 'GATE', offset: new THREE.Vector3(0.5, -0.5, -3.2) },
        { key: 'sece_clamp', targetMeshName: 'Piece_SecYEG_SecE', label: 'SecE Amphipathic Clamp', color: '#FFB703', badge: 'SecE', offset: new THREE.Vector3(-3.2, 0.4, 0.8) },
        { key: 'secg_escort', targetMeshName: 'Piece_SecYEG_SecG', label: 'SecG Escort Subunit', color: '#06D6A0', badge: 'SecG', offset: new THREE.Vector3(3.2, -0.8, 1.6) },
        { key: 'translocating_peptide', targetMeshName: 'Piece_SecYEG_Translocating_Preprotein', label: 'Translocating Preprotein', color: '#FFE066', badge: 'PEP', offset: new THREE.Vector3(0.8, -3.2, -0.6) }
      ];

    } catch (err) {
      console.error('[SecYEGScene] Error loading 3J46 GLB:', err);
    }
  }

  private setupSVGOverlay() {
    let svg = this.container.querySelector('.secyeg-svg-overlay') as SVGSVGElement | null;
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'secyeg-svg-overlay');
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
        const mesh = this.pieceMeshes.get(anchor.targetMeshName);
        if (!mesh || !mesh.visible) return;
        worldPos = anchor.offset.clone();
        mesh.localToWorld(worldPos);
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
      const dx = sx > width / 2 ? 80 : -80;
      const dy = sy > height / 2 ? 40 : -40;
      const lx = sx + dx;
      const ly = sy + dy;

      const pillWidth = Math.max(120, anchor.label.length * 7.2 + 38);
      const cardX = lx > sx ? lx : lx - pillWidth;

      html += `
        <g class="secyeg-leader-item" data-key="${anchor.key}" style="pointer-events: auto; cursor: pointer;">
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
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(8, 15, 30, 0.88)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="28" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;

    // Attach click events on SVG subpills
    const items = this.svgLayer.querySelectorAll('.secyeg-leader-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = item.getAttribute('data-key');
        if (key && SECYEG_COMPONENTS_META[key]) {
          this.focusComponent(key);
          this.onSelectComponent(SECYEG_COMPONENTS_META[key]);
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Public Interactive API (Sliders, Inhibitors, Exploded View, Explanatory Trace)
  // ---------------------------------------------------------------------------

  public setAtpRate(rate: number) {
    this.atpRate = Math.max(0.0, Math.min(3.5, rate));
  }

  public setAzideInhibition(inhibited: boolean) {
    this.azideInhibited = inhibited;
  }

  public setLateralGateOpening(val: number) {
    // Support both 0..1 normalized and 0..100 legacy percentage input
    const norm = val > 1.0 ? val / 100.0 : val;
    this.lateralGateOpening = Math.max(0.0, Math.min(1.0, norm));
    this.applyExplodedView();
  }

  public setExplodedProgress(progress: number) {
    // Support both 0..1 normalized and 0..100 legacy percentage input
    const norm = progress > 1.0 ? progress / 100.0 : progress;
    this.explodedProgress = Math.max(0.0, Math.min(1.0, norm));
    this.applyExplodedView();
  }

  private applyLateralGate() {
    this.applyExplodedView();
  }

  private applyExplodedView() {
    const t = this.explodedProgress;
    const gateOpen = this.lateralGateOpening;

    // Dissociation vectors adhering to CELLULAR_INSPECTOR_BLUEPRINT.md:
    // Lateral gate swings outward along -Z and +X into the surrounding lipid bilayer
    const dissocMap: Record<string, THREE.Vector3> = {
      'Piece_SecYEG_SecY': new THREE.Vector3(0, 0, 0),
      'Piece_SecYEG_Lateral_Gate': new THREE.Vector3(0.8 * gateOpen, 0, -8.0 * t - 2.6 * gateOpen),
      'Piece_SecYEG_SecE': new THREE.Vector3(-12.0 * t, 0, 0),
      'Piece_SecYEG_SecG': new THREE.Vector3(+12.0 * t, 0, 0),
      'Piece_SecYEG_SecA_Motor': new THREE.Vector3(0, +16.0 * t, 0),
      'Piece_SecYEG_Translocating_Preprotein': new THREE.Vector3(0, -12.0 * t, 0)
    };

    for (const [name, vec] of Object.entries(dissocMap)) {
      const mesh = this.pieceMeshes.get(name);
      const base = this.pieceBasePositions.get(name);
      if (mesh && base) {
        mesh.position.set(base.x + vec.x, base.y + vec.y, base.z + vec.z);
      }
    }

    // Pull camera back smoothly during exploded disassembly so SecA motor and preprotein stay 100% framed
    if (this.camLerpProgress >= 1.0 && this.controls) {
      this.camera.position.set(0, 12 + t * 5.0, 42 + t * 22.0);
      this.controls.target.set(0, 1.5 + t * 1.5, 0);
      this.controls.update();
    }

    // Dynamic rotation of lateral gate helices TM2b/TM7 swinging outward into bilayer
    const gateMesh = this.pieceMeshes.get('Piece_SecYEG_Lateral_Gate');
    if (gateMesh) {
      gateMesh.rotation.y = -0.22 * gateOpen;
    }

    // Update dynamic bilayer portal indicator visibility & opacity
    if (this.gatePortalMesh) {
      this.gatePortalMesh.visible = gateOpen > 0.05;
      (this.gatePortalMesh.material as THREE.MeshBasicMaterial).opacity = Math.min(0.85, gateOpen * 0.9);
    }
  }

  public setExplanationStep(stepNumber: number) {
    const stage = SECYEG_EXPLANATION_STAGES.find((s) => s.step === stepNumber);
    if (!stage) return;

    this.currentStageIndex = stage.step - 1;
    this.isTourActive = true;

    // Trigger subtitles update
    if (this.onSubtitlesUpdate) {
      this.onSubtitlesUpdate(stage.spoken, stage.title, stage.color);
    }
    if (this.onStageChange) {
      this.onStageChange(stage.step);
    }

    // Specific stage actions (e.g. open lateral gate in Stage 4)
    if (stage.id === 'lateral_gate_partition') {
      this.setLateralGateOpening(0.9);
    } else {
      this.setLateralGateOpening(0.1);
    }

    // Camera dolly transition
    this.transitionCameraTo(
      new THREE.Vector3(...stage.target),
      stage.camRadius,
      stage.camTheta,
      stage.camPhi
    );

    // Highlight the active piece
    this.highlightActivePiece(stage.id);
  }

  private highlightActivePiece(stageId: string) {
    const focusMap: Record<string, string> = {
      'signal_peptide_dock': 'Piece_SecYEG_Lateral_Gate',
      'seca_atp_stroke': 'Piece_SecYEG_SecA_Motor',
      'pore_plug_displacement': 'Piece_SecYEG_SecY',
      'lateral_gate_partition': 'Piece_SecYEG_Lateral_Gate',
      'processive_secretion': 'Piece_SecYEG_Translocating_Preprotein'
    };

    const targetPiece = focusMap[stageId];
    this.pieceMeshes.forEach((mesh, name) => {
      if (!mesh.material) return;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (!targetPiece || name === targetPiece) {
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

  // ---------------------------------------------------------------------------
  // Animation Loop & Render
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
      // Smooth cubic easing
      const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, easeT);
      if (this.controls && this.controls.target) {
        this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, easeT);
      }
    }

    if (this.controls) {
      this.controls.update();
    }

    // 2. Active turnover animations (halted if sodium azide is present)
    const effectiveSpeed = this.azideInhibited ? 0.0 : this.atpRate;

    if (effectiveSpeed > 0.001) {
      // SecA Piston power-stroke: two-helix finger vertical oscillation
      // Exactly 1 stroke cycle per ATP hydrolyzed per second (frequency = effectiveSpeed Hz)
      const strokeFreq = effectiveSpeed;
      const strokePhase = elapsed * (2.0 * Math.PI) * strokeFreq;
      const stroke = Math.sin(strokePhase) * 0.45;

      if (this.secaMesh) {
        this.secaMesh.position.y = this.secaBaseY + stroke + (16.0 * this.explodedProgress);
      }

      // Preprotein translocating strand: advancing along channel axis
      // In 1 ATP power stroke, ~20 amino acid residues advance
      const beadCycleTime = (strokePhase / (2.0 * Math.PI)) * 0.12;
      const beadCount = this.peptideBeads.length;
      const gateOpen = this.lateralGateOpening;

      for (let i = 0; i < beadCount; i++) {
        const bead = this.peptideBeads[i];
        const mat = bead.material as THREE.MeshStandardMaterial;

        // Fraction along the pathway [0, 1]
        const frac = ((i / beadCount) + (beadCycleTime % 1.0)) % 1.0;

        let x = 0;
        let y = 0;
        let z = 0;

        if (gateOpen < 0.20) {
          // Secretory Mode: preprotein threads straight through central hourglass pore into periplasm
          y = 8.0 - frac * 16.0;
          x = Math.sin(frac * Math.PI * 2.0) * 0.5;
          z = -0.4 - Math.sin(frac * Math.PI) * 0.4;

          mat.color.setHex(0xffe066);
          mat.emissive.setHex(0xffb703);
          mat.emissiveIntensity = 0.5;
        } else {
          // Membrane Integration Mode:
          // Hydrophobic TM helix segment diverts laterally out through TM2b/TM7 into bilayer core
          const partitionStrength = Math.min(1.0, (gateOpen - 0.15) / 0.85);

          if (frac < 0.35) {
            // Cytoplasmic entry approaching translocon
            y = 8.0 - frac * 17.0;
            x = Math.sin(frac * Math.PI * 2.0) * 0.5;
            z = -0.4;
            mat.color.setHex(0xffe066);
            mat.emissive.setHex(0xffb703);
            mat.emissiveIntensity = 0.5;
          } else {
            // Segment partitioning sideways into bilayer plane
            const lateralT = Math.min(1.0, (frac - 0.35) / 0.45);
            // Lateral gate exit is along -Z: enters membrane at Z = -0.4 -> -6.5
            const targetZ = -0.4 - (2.2 + 4.8 * partitionStrength) * Math.sin(lateralT * Math.PI * 0.5);
            const targetY = 2.05 - lateralT * 2.5; // levels out inside bilayer slab (Y ~ 0.0)
            const targetX = 0.3 + Math.sin(lateralT * Math.PI * 1.5) * 1.6;

            const straightY = 8.0 - frac * 16.0;
            const straightZ = -0.4;
            const straightX = Math.sin(frac * Math.PI * 2.0) * 0.5;

            x = THREE.MathUtils.lerp(straightX, targetX, partitionStrength);
            y = THREE.MathUtils.lerp(straightY, targetY, partitionStrength);
            z = THREE.MathUtils.lerp(straightZ, targetZ, partitionStrength);

            // Bilayer partitioned TM segment glows luminous cyan
            mat.color.setHex(0x00f5d4);
            mat.emissive.setHex(0x00f5d4);
            mat.emissiveIntensity = 0.85;
          }
        }

        bead.position.set(x, y, z);
        const scale = 0.85 + 0.35 * Math.sin(frac * Math.PI);
        bead.scale.set(scale, scale, scale);
      }
    }

    // Dynamic portal pulse when open
    if (this.gatePortalMesh && this.lateralGateOpening > 0.05) {
      const pulse = 0.9 + 0.1 * Math.sin(elapsed * 3.0);
      this.gatePortalMesh.scale.set(pulse, pulse, pulse);
    }

    // 3. Update 2D SVG callout leader lines
    this.updateSVGLeaders();

    // 4. Render
    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize = () => {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public togglePause(): boolean {
    this.atpRate = this.atpRate === 0 ? 1.0 : 0.0;
    return this.atpRate === 0;
  }

  public resetCamera() {
    this.transitionCameraTo(new THREE.Vector3(0, 1.5, 0), 42, 0.0, 1.4);
  }

  public focusComponent(key: string) {
    const anchor = this.leaderAnchors.find((a) => a.key === key);
    if (anchor) {
      if (anchor.worldPos) {
        this.transitionCameraTo(anchor.worldPos.clone(), 24, 0.2, 1.35);
      } else if (anchor.targetMeshName && anchor.offset) {
        const mesh = this.pieceMeshes.get(anchor.targetMeshName);
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
    const meta = SECYEG_COMPONENTS_META[key];
    if (meta) {
      this.onSelectComponent(meta);
    }
  }

  public toggleAutoRotate(): boolean {
    if (this.controls) {
      this.controls.autoRotate = !this.controls.autoRotate;
      this.controls.autoRotateSpeed = 1.2;
      return this.controls.autoRotate;
    }
    return false;
  }

  public handleResize() {
    this.onWindowResize();
  }

  public start() {
    if (!this.active) {
      this.active = true;
      this.clock.start();
      this.animate();
    }
    if (this.atpRate === 0 && !this.azideInhibited) {
      this.atpRate = 1.5;
    }
  }

  public stop() {
    this.active = false;
    if (this.keyboardFlight) {
      this.keyboardFlight.resetKeys();
    }
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public destroy() {
    this.dispose();
  }

  public dispose() {
    this.stop();
    if (this.keyboardFlight) {
      this.keyboardFlight.dispose();
      this.keyboardFlight = null;
    }
    window.removeEventListener('resize', this.onWindowResize);

    if (this.svgLayer && this.svgLayer.parentNode) {
      this.svgLayer.parentNode.removeChild(this.svgLayer);
    }
    if (this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }
}
