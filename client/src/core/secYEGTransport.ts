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
  private clock = new THREE.Clock();

  // Root model group
  private modelGroup: THREE.Group = new THREE.Group();
  private pieceMeshes: Map<string, THREE.Mesh> = new Map();
  private pieceBasePositions: Map<string, THREE.Vector3> = new Map();

  // Bilayer membrane
  private membraneGroup: THREE.Group = new THREE.Group();
  private headgroupSpheres: THREE.InstancedMesh | null = null;

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
    targetMeshName: string;
    label: string;
    color: string;
    offset: THREE.Vector3;
    badge: string;
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

    // 12. Animation Loop
    this.animate();
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

    // Translucent hydrophobic core slab with subtle gradient
    const coreGeo = new THREE.BoxGeometry(span, thickness, span);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x081b29,
      roughness: 0.85,
      metalness: 0.1,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0, 0);
    this.membraneGroup.add(coreMesh);

    // Polar headgroups: 2 leaflets of instanced spheres
    const headRadius = 0.35;
    const headGeo = new THREE.SphereGeometry(headRadius, 12, 10);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x06d6a0, // Vivid Jade / Seafoam Green
      roughness: 0.35,
      metalness: 0.15,
      emissive: 0x044d38,
      emissiveStrength: 0.2
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

        // Don't place heads directly inside the SecY channel pore (~5 nm radius)
        const distToCenter = Math.sqrt(x * x + z * z);
        if (distToCenter < 4.2) continue;

        // Top Leaflet (Cytoplasmic side, Y = +2.2)
        dummy.position.set(x, thickness / 2 + headRadius * 0.5, z);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        this.headgroupSpheres.setMatrixAt(idx++, dummy.matrix);

        // Bottom Leaflet (Periplasmic side, Y = -2.2)
        dummy.position.set(x, -thickness / 2 - headRadius * 0.5, z);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        this.headgroupSpheres.setMatrixAt(idx++, dummy.matrix);
      }
    }
    this.headgroupSpheres.instanceMatrix.needsUpdate = true;
    this.membraneGroup.add(this.headgroupSpheres);

    // Membrane boundary guide ring
    const ringGeo = new THREE.RingGeometry(span / 2 - 0.2, span / 2, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
    const topRing = new THREE.Mesh(ringGeo, ringMat);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = thickness / 2;
    this.membraneGroup.add(topRing);

    const btmRing = topRing.clone();
    btmRing.position.y = -thickness / 2;
    this.membraneGroup.add(btmRing);
  }

  private buildPreproteinStream() {
    // Nascent polypeptide chain translocating through the SecY pore:
    // A series of amino acid sphere beads threading along a curved Catmull-Rom path
    const beadCount = 28;
    const beadGeo = new THREE.SphereGeometry(0.24, 10, 8);
    const beadMat = new THREE.MeshStandardMaterial({
      color: 0xffe066, // Luminous Gold
      roughness: 0.25,
      metalness: 0.2,
      emissive: 0xffb703,
      emissiveStrength: 0.6
    });

    for (let i = 0; i < beadCount; i++) {
      const mesh = new THREE.Mesh(beadGeo, beadMat);
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
      const mesh = this.pieceMeshes.get(anchor.targetMeshName);
      if (!mesh || !mesh.visible) return;

      const worldPos = anchor.offset.clone();
      mesh.localToWorld(worldPos);

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
          <g transform="translate(${lx > sx ? lx : lx - 110}, ${ly - 12})">
            <rect width="115" height="26" rx="13" fill="rgba(8, 15, 30, 0.88)" stroke="${anchor.color}" stroke-width="1.2" />
            <circle cx="14" cy="13" r="8" fill="${anchor.color}" />
            <text x="14" y="16.5" font-size="9" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${anchor.badge}</text>
            <text x="30" y="16.5" font-size="10.5" font-weight="600" fill="#f8fafc" font-family="sans-serif">${anchor.label}</text>
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
          this.onSelectComponent(SECYEG_COMPONENTS_META[key]);
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Public Interactive API (Sliders, Inhibitors, Exploded View, Explanatory Trace)
  // ---------------------------------------------------------------------------

  public setAtpRate(rate: number) {
    this.atpRate = Math.max(0.0, Math.min(3.0, rate));
  }

  public setAzideInhibition(inhibited: boolean) {
    this.azideInhibited = inhibited;
  }

  public setLateralGateOpening(val: number) {
    this.lateralGateOpening = Math.max(0.0, Math.min(1.0, val));
    this.applyLateralGate();
  }

  public setExplodedProgress(progress: number) {
    this.explodedProgress = Math.max(0.0, Math.min(1.0, progress));
    this.applyExplodedView();
  }

  private applyLateralGate() {
    const gateMesh = this.pieceMeshes.get('Piece_SecYEG_Lateral_Gate');
    if (!gateMesh) return;

    const basePos = this.pieceBasePositions.get('Piece_SecYEG_Lateral_Gate') || new THREE.Vector3();
    // In our orientation, lateral gate faces along -Z; opening parts outwards by up to -1.4 nm (-14 Å)
    const openOffsetZ = -1.4 * this.lateralGateOpening;
    gateMesh.position.z = basePos.z + openOffsetZ;
  }

  private applyExplodedView() {
    const t = this.explodedProgress;

    // Dissociation vectors adhering to CELLULAR_INSPECTOR_BLUEPRINT.md:
    const dissocMap: Record<string, THREE.Vector3> = {
      'Piece_SecYEG_SecY': new THREE.Vector3(0, 0, 0),
      'Piece_SecYEG_Lateral_Gate': new THREE.Vector3(0, 0, -8.0 * t),
      'Piece_SecYEG_SecE': new THREE.Vector3(-12.0 * t, 0, 0),
      'Piece_SecYEG_SecG': new THREE.Vector3(+12.0 * t, 0, 0),
      'Piece_SecYEG_SecA_Motor': new THREE.Vector3(0, +16.0 * t, 0),
      'Piece_SecYEG_Translocating_Preprotein': new THREE.Vector3(0, -12.0 * t, 0)
    };

    dissocMap['Piece_SecYEG_Lateral_Gate'].z += -1.4 * this.lateralGateOpening;

    for (const [name, vec] of Object.entries(dissocMap)) {
      const mesh = this.pieceMeshes.get(name);
      const base = this.pieceBasePositions.get(name);
      if (mesh && base) {
        mesh.position.set(base.x + vec.x, base.y + vec.y, base.z + vec.z);
      }
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

  // ---------------------------------------------------------------------------
  // Animation Loop & Render
  // ---------------------------------------------------------------------------

  private animate = () => {
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

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
      if (this.secaMesh) {
        const stroke = Math.sin(elapsed * 4.0 * effectiveSpeed) * 0.35;
        this.secaMesh.position.y = this.secaBaseY + stroke + (16.0 * this.explodedProgress);
      }

      // Preprotein translocating strand: moving beads along channel axis
      const beadCycleTime = elapsed * 1.8 * effectiveSpeed;
      const beadCount = this.peptideBeads.length;

      for (let i = 0; i < beadCount; i++) {
        const bead = this.peptideBeads[i];
        // Fraction along the pathway [0, 1]
        const frac = ((i / beadCount) + (beadCycleTime % 1.0)) % 1.0;

        // Curve from SecA cytosol (+Y) -> SecY pore (0,0,0) -> Periplasm (-Y)
        // Add lateral bulge if gate is open
        const y = 8.0 - frac * 16.0;
        const x = Math.sin(frac * Math.PI * 2.0) * 0.6;
        const z = -0.5 - (this.lateralGateOpening * Math.sin(frac * Math.PI) * 1.8);

        bead.position.set(x, y, z);
        // Pulse scale inside the pore constriction
        const scale = 0.8 + 0.4 * Math.sin(frac * Math.PI);
        bead.scale.set(scale, scale, scale);
      }
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
      const mesh = this.pieceMeshes.get(anchor.targetMeshName);
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
    if (this.atpRate === 0 && !this.azideInhibited) {
      this.atpRate = 1.0;
    }
  }

  public destroy() {
    this.dispose();
  }

  public dispose() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
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
