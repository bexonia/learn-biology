// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial Respiratory Complex I (NADH:Ubiquinone Oxidoreductase) — 3D Scenario
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 7Z7V at 2.29 Å)
 * Adhering strictly to CELLULAR_INSPECTOR_BLUEPRINT.md and BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md
 *
 * Pieces & Subunit Taxonomy:
 * - Piece 1: Piece_ComplexI_Hydrophilic_NuoEFG (Chains E, F, G) - Royal Blue (#1F77B4 / #3A86FF)
 * - Piece 2: Piece_ComplexI_Connecting_NuoBCI (Chains B, C, I) - Steel Teal / Cyan (#2A9D8F)
 * - Piece 3: Piece_ComplexI_Transmembrane_NuoAHJK (Chains A, H, J, K) - Vivid Jade (#06D6A0)
 * - Piece 4: Piece_ComplexI_Antiporter_NuoNM (Chains N, M) - Vivid Seafoam (#00F5D4)
 * - Piece 5: Piece_ComplexI_Lateral_Piston_NuoL (Chain L & HL helix) - Terracotta (#E76F51)
 * - Piece 6: Piece_ComplexI_FeS_Clusters (8x Fe-S clusters) - Glowing Pyrite / Amber (#FFB703)
 * - Piece 7: Piece_ComplexI_FMN (Flavin Mononucleotide) - Hot Magenta (#FF006E)
 * - Piece 8: Piece_ComplexI_NADH_Substrate (Bound NADH / NAI) - Luminous Cyan (#00F5D4)
 * - Piece 9: Piece_ComplexI_Ubiquinone (Docked Q8 substrate) - Radiant Gold (#FFE066)
 * - Bilinear Lipid Cross-Section Membrane: Polar heads & hydrophobic core
 * - Quantum Electron Tunneling Stream: Rapid amber hopping pulses down the 90 Å Fe-S relay
 * - 4H+ Proton Translocation Flux: 4 directed conduits across the inner membrane into periplasm
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { ComplexIComponentData } from '../types/biology';

export const COMPLEX_I_COMPONENTS_META: Record<string, ComplexIComponentData> = {
  'complex_i_holoenzyme': {
    name: 'Complete Respiratory Complex I (PDB: 7Z7V)',
    badge: 'NADH:UBIQUINONE OXIDOREDUCTASE',
    dims: 'L-Shaped: ~24 nm (Membrane arm) × ~15 nm (Hydrophilic arm), Mass: ~530 kDa',
    proteins: '14 Polypeptides: NuoA–NuoN (7 Hydrophilic + 7 Transmembrane Subunits)',
    pdb: 'PDB: 7Z7V (Cryo-EM at 2.29 Å resolution, Kravchuk et al., Nature 2022)',
    desc: 'The massive L-shaped respiratory entry engine of aerobic metabolism. Couples the two-electron oxidation of cytosolic NADH to ubiquinone reduction while translocating 4 protons across the bacterial cytoplasmic membrane via an orchestrated lateral mechanical piston mechanism.',
    role: 'Primary entry gate for high-energy electrons into the respiratory chain, generating ~40% of the bacterial proton-motive force (Δp ≈ -140 mV) that drives ATP Synthase and the flagellar motor.',
    stoichiometry: '1 NADH + 1 Q + 4 H⁺(in) + 1 H⁺ → 1 NAD⁺ + 1 QH₂ + 4 H⁺(out)',
    cofactors: '1 FMN + 8 Fe-S clusters (SF4/FES) + 1 bound NADH',
    redoxPotential: 'E°\'(NADH/NAD⁺) = -320 mV → E°\'(Q/QH₂) = +90 mV (ΔE ≈ +410 mV, ΔG°\' ≈ -79 kJ/mol)'
  },
  'hydrophilic_arm': {
    name: 'Hydrophilic Arm (NuoEFG & NuoBCI Subunits)',
    badge: 'SOLUBLE ELECTRON RELAY ARM',
    dims: 'Height: ~15 nm, Width: ~8 nm, Mass: ~320 kDa',
    proteins: 'NuoE, NuoF, NuoG (Royal Blue) + NuoB, NuoC/D, NuoI (Steel Teal)',
    pdb: 'PDB: 7Z7V (Chains B, C, E, F, G, I)',
    desc: 'The peripheral soluble arm protruding deep into the bacterial cytoplasm. Harbors the NADH binding pocket, the primary FMN hydride acceptor, and the entire 90 Å iron-sulfur quantum tunneling wire leading down to the quinone reduction cleft.',
    role: 'NADH oxidation, 2e⁻ hydride extraction, and quantum electron tunneling toward the membrane.',
    stoichiometry: '1 NADH oxidized per catalytic cycle.'
  },
  'membrane_arm': {
    name: 'Membrane Arm (NuoAHJK, NuoNM, & NuoL)',
    badge: 'TRANSMEMBRANE PROTON CHANNELS',
    dims: 'Length: ~24 nm, Thickness: ~4.5 nm embedded in lipid bilayer',
    proteins: 'NuoA, NuoH, NuoJ, NuoK (Jade) + NuoN, NuoM (Seafoam) + NuoL (Terracotta)',
    pdb: 'PDB: 7Z7V (Chains A, H, J, K, L, M, N)',
    desc: 'The hydrophobic membrane-embedded domain spanning 55 transmembrane helices. Contains three distinct proton-pumping modules homologous to Mrp Na⁺/H⁺ antiporters (NuoN, NuoM, NuoL) interconnected by a network of polar and titratable residues.',
    role: 'Translocates 4 protons from the cytoplasm into the periplasmic space per turnover.',
    stoichiometry: '4 H⁺ pumped against membrane potential Δp per 2 electrons.'
  },
  'lateral_piston_nuol': {
    name: 'NuoL Subunit & Lateral Coupling Rod',
    badge: 'MECHANICAL COUPLING PISTON (NuoL)',
    dims: 'NuoL domain + ~110 Å long horizontal amphipathic helix (HL helix)',
    proteins: 'Subunit NuoL (Terracotta / Coral Bronze, #E76F51), Chain L',
    pdb: 'PDB: 7Z7V (Chain L)',
    desc: 'The distal membrane module harboring the legendary ~110 Å long horizontal amphipathic helix (HL). This horizontal rod acts as a mechanical transmission coupling piston that physically spans across NuoM and NuoN, transferring conformational strain from quinone reduction to distal proton channels.',
    role: 'Conformational transducer coordinating simultaneous proton translocation across distant channels.',
    stoichiometry: 'Coordinates 1 of the 4 translocated protons; locks quaternary architecture.'
  },
  'fes_clusters': {
    name: '8 Iron-Sulfur Clusters (SF4 & FES Tunneling Wire)',
    badge: '90 Å QUANTUM TUNNELING WIRE',
    dims: '8 inorganic Fe-S centers (N3, N1b, N4, N5, N6a, N6b, N2, plus off-pathway N1a)',
    proteins: '28 Iron & Inorganic Sulfur atoms, Golden Amber (#FFB703)',
    pdb: 'PDB: 7Z7V (Residues SF4, FES)',
    desc: 'The 90 Å long quantum-mechanical electron wire extending through the hydrophilic arm. Electrons hop rapidly between adjacent clusters (edge-to-edge distance < 14 Å, well within the Moser-Dutton quantum tunneling limit) in less than 100 microseconds.',
    role: 'Conducts electrons from FMN to the terminal N2 cluster adjacent to the quinone cavity.',
    stoichiometry: '2 electrons relayed sequentially with near-zero heat dissipation.'
  },
  'fmn_cofactor': {
    name: 'Flavin Mononucleotide (FMN)',
    badge: 'PRIMARY 2e⁻ ACCEPTOR (FMN)',
    dims: 'Isoalloxazine tricycle + ribityl phosphate, Hot Magenta (#FF006E)',
    proteins: 'Bound FMN in NuoF binding pocket',
    pdb: 'PDB: 7Z7V (Residue FMN)',
    desc: 'The primary two-electron redox prosthetic group positioned directly opposite the nicotinamide ring of bound NADH. Accepts a hydride ion (:H⁻) from NADH to become fully reduced FMNH₂, then splits the two electrons into single-electron hops down the Fe-S wire.',
    role: 'Two-electron to single-electron converter bridging NADH to iron-sulfur relay.',
    stoichiometry: 'NADH + H⁺ + FMN → NAD⁺ + FMNH₂'
  },
  'nadh_substrate': {
    name: 'NADH Substrate (1,4-Dihydronicotinamide)',
    badge: 'ELECTRON DONOR FUEL (NADH)',
    dims: 'Dinucleotide substrate in Luminous Cyan (#00F5D4)',
    proteins: 'Bound NAI in NuoF catalytic cleft',
    pdb: 'PDB: 7Z7V (Residue NAI)',
    desc: 'The universal cellular electron carrier produced by glycolysis, pyruvate dehydrogenase, and the citric acid cycle. Binds stereospecifically in the NuoF pocket to transfer its pro-S hydride ion directly to the isoalloxazine ring of FMN.',
    role: 'Supplies high-energy reducing equivalents (E°\' = -320 mV) to initiate respiration.',
    stoichiometry: '1 NADH consumed per 4 H⁺ translocated.'
  },
  'ubiquinone_pocket': {
    name: 'Ubiquinone (Q8) Binding Cavity',
    badge: 'REDOX TRANSDUCTION CLEFT (Q8)',
    dims: 'Narrow ~30 Å hydrophobic cavity at NuoB / NuoCD / NuoH junction',
    proteins: 'Docked Ubiquinone-8 (Radiant Amber, #FFE066)',
    pdb: 'PDB: 7Z7V (NuoB, NuoC/D, NuoH cleft)',
    desc: 'The narrow catalytic cleft where ubiquinone binds adjacent to terminal Fe-S cluster N2. Two-electron reduction to ubiquinol (QH₂) causes dramatic local electrostatic re-arrangement that triggers conformational waves through the membrane arm. Blocked by Rotenone and Piericidin A.',
    role: 'Reduces Q to QH₂, releasing ~79 kJ/mol of free energy to drive 4 H⁺ pumping.',
    stoichiometry: 'Q + 2e⁻ + 2H⁺ → QH₂'
  },
  'membrane_bilayer': {
    name: 'Inner Cytoplasmic Membrane (Lipid Bilayer)',
    badge: 'LIPID BILAYER SLAB (~4.5 nm)',
    dims: 'Cross-section ~40 nm × 16 nm × 4.5 nm',
    proteins: 'Phosphatidylethanolamine (PE) & Phosphatidylglycerol (PG)',
    pdb: 'Cellular Lipid Bilayer',
    desc: 'The electrical insulator of the bacterial envelope maintaining the proton-motive force (Δp ≈ -140 mV). Solubilizes the hydrophobic quinone pool and houses the 55 transmembrane helices of Complex I.',
    role: 'Maintains electrochemical gradient and anchors the membrane arm of Complex I.'
  }
};

export const COMPLEX_I_TOUR_STOPS = [
  'complex_i_holoenzyme',
  'nadh_substrate',
  'fmn_cofactor',
  'fes_clusters',
  'ubiquinone_pocket',
  'membrane_arm',
  'lateral_piston_nuol'
];

export class ComplexIScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private animFrameId: number | null = null;
  private active: boolean = false;

  // Options & Callbacks
  private onSelectComponent?: (key: string, meta: ComplexIComponentData) => void;
  private onTourStepChange?: (step: number) => void;

  // Mesh Pieces
  private modelGroup: THREE.Group | null = null;
  private pieceHydrophilic_NuoEFG: THREE.Object3D | null = null;
  private pieceConnecting_NuoBCI: THREE.Object3D | null = null;
  private pieceTransmembrane_NuoAHJK: THREE.Object3D | null = null;
  private pieceAntiporter_NuoNM: THREE.Object3D | null = null;
  private pieceLateral_Piston_NuoL: THREE.Object3D | null = null;
  private pieceFeS_Clusters: THREE.Object3D | null = null;
  private pieceFMN: THREE.Object3D | null = null;
  private pieceNADH_Substrate: THREE.Object3D | null = null;
  private pieceUbiquinone: THREE.Object3D | null = null;

  // Membrane & Scene elements
  private membraneGroup: THREE.Group | null = null;
  private electronParticles: Array<{ mesh: THREE.Mesh; u: number; speed: number }> = [];
  private electronCurve: THREE.CatmullRomCurve3 | null = null;
  private protonConduits: Array<{
    meshList: THREE.Mesh[];
    curve: THREE.CatmullRomCurve3;
    particles: Array<{ mesh: THREE.Mesh; u: number; speed: number }>;
  }> = [];
  private quinoneReleaseParticles: Array<{ mesh: THREE.Mesh; u: number; speed: number; active: boolean }> = [];

  // Interaction & Camera
  private spherical = { radius: 52, theta: 0.15, phi: 1.35 };
  private target = new THREE.Vector3(0, 4.0, 0);
  private baseRadius = 52;
  private isUserInteracting = false;
  private isAutoRotating = false;
  private prevMousePos = { x: 0, y: 0 };
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();

  // Simulation parameters
  private isPaused: boolean = false;
  private nadhConcentration: number = 80; // % saturation
  private electronTransferRate: number = 1.0;
  private isRotenoneInhibited: boolean = false;
  private explodedProgress: number = 0;
  private subunitFilter: string = 'all';
  private explanationStep: number = 0;
  private activeComponentKey: string = 'complex_i_holoenzyme';

  // Dynamic Leaders & Labels
  private labelsContainer: HTMLElement | null = null;
  private svgOverlay: SVGElement | null = null;
  private leaderAnchors: Array<{
    id: string;
    label: string;
    subpill: string;
    color: string;
    letter: string;
    position: THREE.Vector3;
    pieceName?: string;
  }> = [];

  constructor(
    container: HTMLElement,
    options?: {
      onSelectComponent?: (key: string, meta: ComplexIComponentData) => void;
      onTourStepChange?: (step: number) => void;
    }
  ) {
    this.container = container;
    this.onSelectComponent = options?.onSelectComponent;
    this.onTourStepChange = options?.onTourStepChange;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060913); // Deep scientific midnight

    const aspect = container.clientWidth / container.clientHeight || 1;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 500);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    this.setupLighting();
    this.setupMembraneBilayer();
    this.setupEventListeners();
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0xddeeff, 1.4);
    this.scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dir1.position.set(30, 45, 40);
    this.scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x7090ff, 1.2);
    dir2.position.set(-35, 20, -30);
    this.scene.add(dir2);

    const rim = new THREE.DirectionalLight(0x00f5d4, 1.0);
    rim.position.set(0, -25, 20);
    this.scene.add(rim);

    // Golden warm accent on Fe-S tunnel and active cleft
    const fePoint = new THREE.PointLight(0xffb703, 2.5, 40);
    fePoint.position.set(-5, 6, 2);
    this.scene.add(fePoint);
  }

  private setupMembraneBilayer() {
    this.membraneGroup = new THREE.Group();

    // Authentic double leaflet slab with translucent boundary and polar headgroups
    const slabGeo = new THREE.BoxGeometry(42, 4.4, 20);
    const slabMat = new THREE.MeshPhysicalMaterial({
      color: 0x06d6a0,
      transparent: true,
      opacity: 0.14,
      roughness: 0.25,
      metalness: 0.05,
      transmission: 0.6,
      thickness: 3.5,
      side: THREE.DoubleSide
    });
    const slab = new THREE.Mesh(slabGeo, slabMat);
    slab.position.set(0, 0, 0); // Membrane midline at Y = 0
    this.membraneGroup.add(slab);

    // Grid of polar lipid headgroup spheres on periplasmic and cytoplasmic leaflets
    const headGeo = new THREE.SphereGeometry(0.32, 10, 10);
    const headMatTop = new THREE.MeshStandardMaterial({
      color: 0x48cae4,
      roughness: 0.35,
      metalness: 0.1
    });
    const headMatBottom = new THREE.MeshStandardMaterial({
      color: 0x0096c7,
      roughness: 0.35,
      metalness: 0.1
    });

    const rows = 14;
    const cols = 28;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Skip cutout area where transmembrane helices pierce through
        const x = (c - cols / 2) * 1.45 + (Math.random() - 0.5) * 0.3;
        const z = (r - rows / 2) * 1.35 + (Math.random() - 0.5) * 0.3;
        if (Math.abs(x) < 13 && Math.abs(z) < 6.5) continue;

        // Cytoplasmic upper leaflet (+Y = +2.2)
        const headTop = new THREE.Mesh(headGeo, headMatTop);
        headTop.position.set(x, 2.2 + (Math.random() - 0.5) * 0.15, z);
        this.membraneGroup.add(headTop);

        // Periplasmic lower leaflet (-Y = -2.2)
        const headBottom = new THREE.Mesh(headGeo, headMatBottom);
        headBottom.position.set(x, -2.2 + (Math.random() - 0.5) * 0.15, z);
        this.membraneGroup.add(headBottom);
      }
    }

    // Membrane boundary indicators
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x00f5d4, transparent: true, opacity: 0.35 });
    const edgeGeo = new THREE.EdgesGeometry(slabGeo);
    const edgeLine = new THREE.LineSegments(edgeGeo, edgeMat);
    this.membraneGroup.add(edgeLine);

    this.scene.add(this.membraneGroup);
  }

  private setupElectronTunnelingStream() {
    // 8 Fe-S cluster coordinates in Three.js canonical space (from NuoF FMN down to NuoB N2)
    // Points along the ~90 Å quantum relay:
    const tunnelPoints = [
      new THREE.Vector3(-6.2, 14.5, 1.2), // FMN in NuoF
      new THREE.Vector3(-6.0, 13.0, 1.0), // N3 (NuoF)
      new THREE.Vector3(-5.5, 11.2, 0.8), // N1b (NuoE)
      new THREE.Vector3(-5.2, 9.5, 0.5),  // N4 (NuoG)
      new THREE.Vector3(-5.4, 7.8, 0.3),  // N5 (NuoG)
      new THREE.Vector3(-5.8, 6.2, 0.1),  // N6a (NuoG)
      new THREE.Vector3(-6.0, 4.6, 0.0),  // N6b (NuoI)
      new THREE.Vector3(-6.2, 2.8, 0.0),  // N2 (NuoB)
      new THREE.Vector3(-5.5, 1.2, 0.2)   // Quinone cleft interface
    ];

    this.electronCurve = new THREE.CatmullRomCurve3(tunnelPoints);

    // Create 16 luminous hopping electron packets
    const pGeo = new THREE.SphereGeometry(0.24, 12, 12);
    const pMat = new THREE.MeshBasicMaterial({
      color: 0xffe066,
      transparent: true,
      opacity: 0.95
    });

    for (let i = 0; i < 16; i++) {
      const pMesh = new THREE.Mesh(pGeo, pMat);
      this.scene.add(pMesh);
      this.electronParticles.push({
        mesh: pMesh,
        u: i / 16,
        speed: 0.45 + Math.random() * 0.15
      });
    }

    // Glowing energy conduit spine
    const tubeGeo = new THREE.TubeGeometry(this.electronCurve, 64, 0.08, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0xffb703,
      transparent: true,
      opacity: 0.35
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    this.scene.add(tube);
  }

  private setupProtonConduits() {
    // 4 distinct proton conduits pumping H+ across inner membrane:
    // Conduit 1: NuoH / NuoA coupling channel (~ X = -4)
    // Conduit 2: NuoN antiporter channel (~ X = 0)
    // Conduit 3: NuoM antiporter channel (~ X = 4.5)
    // Conduit 4: NuoL terminal channel (~ X = 9.0)
    const conduitX = [-4.0, 0.2, 4.8, 9.2];

    const pGeo = new THREE.SphereGeometry(0.22, 10, 10);
    const pMat = new THREE.MeshBasicMaterial({
      color: 0xff4d00,
      transparent: true,
      opacity: 0.95
    });

    conduitX.forEach((cx, idx) => {
      // Curved path entering from cytoplasm (+Y = +3.0) and discharging into periplasm (-Y = -3.5)
      const pts = [
        new THREE.Vector3(cx - 0.4, 3.2, 0.5),
        new THREE.Vector3(cx - 0.2, 1.6, 0.2),
        new THREE.Vector3(cx + 0.1, 0.0, 0.0),
        new THREE.Vector3(cx + 0.3, -1.8, -0.2),
        new THREE.Vector3(cx + 0.5, -3.6, -0.4)
      ];
      const curve = new THREE.CatmullRomCurve3(pts);

      // Conduit wireframe tube
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.09, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: 0xff5400,
        transparent: true,
        opacity: 0.4
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      this.scene.add(tube);

      const particles: Array<{ mesh: THREE.Mesh; u: number; speed: number }> = [];
      for (let i = 0; i < 4; i++) {
        const mesh = new THREE.Mesh(pGeo, pMat);
        this.scene.add(mesh);
        particles.push({
          mesh,
          u: (i / 4 + idx * 0.2) % 1.0,
          speed: 0.32 + Math.random() * 0.1
        });
      }

      this.protonConduits.push({
        meshList: [tube],
        curve,
        particles
      });
    });
  }

  private setupDynamicLeaderAnchors() {
    this.leaderAnchors = [
      {
        id: 'nadh_substrate',
        label: 'NADH Binding Site',
        subpill: 'NuoF • E°\' -320 mV',
        color: '#00F5D4',
        letter: 'A',
        position: new THREE.Vector3(-7.2, 15.2, 1.5),
        pieceName: 'Piece_ComplexI_NADH_Substrate'
      },
      {
        id: 'fmn_cofactor',
        label: 'FMN Hydride Acceptor',
        subpill: 'Flavin • 2e⁻ to 1e⁻ Split',
        color: '#FF006E',
        letter: 'B',
        position: new THREE.Vector3(-6.2, 14.5, 1.2),
        pieceName: 'Piece_ComplexI_FMN'
      },
      {
        id: 'fes_clusters',
        label: '8 Fe-S Quantum Tunneling Relay',
        subpill: '90 Å Relay • SF4/FES',
        color: '#FFB703',
        letter: 'C',
        position: new THREE.Vector3(-5.5, 8.2, 0.4),
        pieceName: 'Piece_ComplexI_FeS_Clusters'
      },
      {
        id: 'ubiquinone_pocket',
        label: 'Ubiquinone Reduction Cleft',
        subpill: 'NuoB/CD • Rotenone Target',
        color: '#FFE066',
        letter: 'D',
        position: new THREE.Vector3(-5.0, 1.5, 0.2),
        pieceName: 'Piece_ComplexI_Ubiquinone'
      },
      {
        id: 'membrane_arm',
        label: 'Antiporter Channels (NuoN, NuoM)',
        subpill: 'Transmembrane • 4 H⁺ Pump',
        color: '#00F5D4',
        letter: 'E',
        position: new THREE.Vector3(1.5, 0.2, 0.0),
        pieceName: 'Piece_ComplexI_Antiporter_NuoNM'
      },
      {
        id: 'lateral_piston_nuol',
        label: 'NuoL & HL Lateral Coupling Piston',
        subpill: '110 Å Lateral Helix',
        color: '#E76F51',
        letter: 'F',
        position: new THREE.Vector3(8.5, 0.4, 0.0),
        pieceName: 'Piece_ComplexI_Lateral_Piston_NuoL'
      }
    ];

    this.labelsContainer = document.getElementById('complex-i-labels-container');
    this.svgOverlay = document.getElementById('complex-i-svg-overlay') as unknown as SVGElement;
  }

  public async init(): Promise<void> {
    const loader = new GLTFLoader();
    const modelUrl = '/models/7Z7V_assembled_pieces.glb';

    return new Promise((resolve) => {
      loader.load(
        modelUrl,
        (gltf) => {
          this.modelGroup = gltf.scene;
          this.modelGroup.name = 'ComplexI_7Z7V_Assembly';
          this.scene.add(this.modelGroup);

          // Find pieces
          this.modelGroup.traverse((child) => {
            if (child.name.includes('Piece_ComplexI_Hydrophilic_NuoEFG')) {
              this.pieceHydrophilic_NuoEFG = child;
            } else if (child.name.includes('Piece_ComplexI_Connecting_NuoBCI')) {
              this.pieceConnecting_NuoBCI = child;
            } else if (child.name.includes('Piece_ComplexI_Transmembrane_NuoAHJK')) {
              this.pieceTransmembrane_NuoAHJK = child;
            } else if (child.name.includes('Piece_ComplexI_Antiporter_NuoNM')) {
              this.pieceAntiporter_NuoNM = child;
            } else if (child.name.includes('Piece_ComplexI_Lateral_Piston_NuoL')) {
              this.pieceLateral_Piston_NuoL = child;
            } else if (child.name.includes('Piece_ComplexI_FeS_Clusters')) {
              this.pieceFeS_Clusters = child;
            } else if (child.name.includes('Piece_ComplexI_FMN')) {
              this.pieceFMN = child;
            } else if (child.name.includes('Piece_ComplexI_NADH_Substrate')) {
              this.pieceNADH_Substrate = child;
            } else if (child.name.includes('Piece_ComplexI_Ubiquinone')) {
              this.pieceUbiquinone = child;
            }
          });

          // Setup dynamic flow streams
          this.setupElectronTunnelingStream();
          this.setupProtonConduits();
          this.setupDynamicLeaderAnchors();

          console.log('[+] Complex I 7Z7V scene initialized successfully');
          resolve();
        },
        undefined,
        (err) => {
          console.error('[-] Failed to load 7Z7V_assembled_pieces.glb:', err);
          // Fallback minimal scene so user still gets responsive viewport
          this.setupElectronTunnelingStream();
          this.setupProtonConduits();
          this.setupDynamicLeaderAnchors();
          resolve();
        }
      );
    });
  }

  // --------------------------------------------------------------------------
  // Camera & Interaction
  // --------------------------------------------------------------------------
  private updateCameraPosition() {
    const x = this.target.x + this.spherical.radius * Math.sin(this.spherical.phi) * Math.sin(this.spherical.theta);
    const y = this.target.y + this.spherical.radius * Math.cos(this.spherical.phi);
    const z = this.target.z + this.spherical.radius * Math.sin(this.spherical.phi) * Math.cos(this.spherical.theta);
    this.camera.position.set(x, y, z);
    this.camera.lookAt(this.target);
  }

  private setupEventListeners() {
    const dom = this.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
      this.isUserInteracting = true;
      this.prevMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
      if (this.isUserInteracting) {
        const dx = e.clientX - this.prevMousePos.x;
        const dy = e.clientY - this.prevMousePos.y;
        this.prevMousePos = { x: e.clientX, y: e.clientY };

        this.spherical.theta -= dx * 0.006;
        this.spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.spherical.phi - dy * 0.006));
        this.updateCameraPosition();
      }
    });

    window.addEventListener('pointerup', () => {
      this.isUserInteracting = false;
    });

    dom.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.spherical.radius = Math.max(12, Math.min(110, this.spherical.radius + e.deltaY * 0.05));
      this.updateCameraPosition();
    }, { passive: false });

    dom.addEventListener('click', (e) => {
      const rect = dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      if (this.modelGroup) {
        const intersects = this.raycaster.intersectObjects(this.modelGroup.children, true);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          this.handleObjectClick(hit);
        }
      }
    });

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  public handleResize() {
    if (!this.container) return;
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  private handleObjectClick(obj: THREE.Object3D) {
    let name = obj.name;
    let curr: THREE.Object3D | null = obj;
    while (curr && curr !== this.modelGroup) {
      if (curr.name.startsWith('Piece_ComplexI_')) {
        name = curr.name;
        break;
      }
      curr = curr.parent;
    }

    if (name.includes('NADH')) {
      this.selectComponent('nadh_substrate');
    } else if (name.includes('FMN')) {
      this.selectComponent('fmn_cofactor');
    } else if (name.includes('FeS')) {
      this.selectComponent('fes_clusters');
    } else if (name.includes('Ubiquinone')) {
      this.selectComponent('ubiquinone_pocket');
    } else if (name.includes('Lateral_Piston_NuoL')) {
      this.selectComponent('lateral_piston_nuol');
    } else if (name.includes('Hydrophilic') || name.includes('Connecting')) {
      this.selectComponent('hydrophilic_arm');
    } else if (name.includes('Antiporter') || name.includes('Transmembrane')) {
      this.selectComponent('membrane_arm');
    } else {
      this.selectComponent('complex_i_holoenzyme');
    }
  }

  public selectComponent(key: string) {
    this.activeComponentKey = key;
    const meta = COMPLEX_I_COMPONENTS_META[key] || COMPLEX_I_COMPONENTS_META['complex_i_holoenzyme'];
    if (this.onSelectComponent) {
      this.onSelectComponent(key, meta);
    }
  }

  public focusComponent(key: string) {
    this.selectComponent(key);
    const anchor = this.leaderAnchors.find((a) => a.id === key);
    if (anchor) {
      this.animateCameraTo(anchor.position.clone(), 24);
    } else if (key === 'complex_i_holoenzyme') {
      this.animateCameraTo(new THREE.Vector3(0, 4.0, 0), this.baseRadius);
    }
  }

  private animateCameraTo(targetPos: THREE.Vector3, targetRadius: number) {
    const startTarget = this.target.clone();
    const startRadius = this.spherical.radius;
    const startTime = performance.now();
    const duration = 750;

    const step = (time: number) => {
      const elapsed = time - startTime;
      const t = Math.min(1.0, elapsed / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      this.target.lerpVectors(startTarget, targetPos, ease);
      this.spherical.radius = startRadius + (targetRadius - startRadius) * ease;
      this.updateCameraPosition();

      if (t < 1.0) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  // --------------------------------------------------------------------------
  // Exploded View & Subunit Filtering
  // --------------------------------------------------------------------------
  public setExplodedProgress(val: number) {
    this.explodedProgress = Math.max(0, Math.min(1.0, val));
    const separationY = this.explodedProgress * 12.0; // Separate hydrophilic arm upwards along +Y
    const separationX = this.explodedProgress * 5.0;  // Separate NuoL laterally

    // Hydrophilic pieces separate upwards
    if (this.pieceHydrophilic_NuoEFG) {
      this.pieceHydrophilic_NuoEFG.position.y = separationY;
    }
    if (this.pieceConnecting_NuoBCI) {
      this.pieceConnecting_NuoBCI.position.y = separationY * 0.75;
    }
    if (this.pieceFeS_Clusters) {
      this.pieceFeS_Clusters.position.y = separationY * 0.85;
    }
    if (this.pieceFMN) {
      this.pieceFMN.position.y = separationY;
    }
    if (this.pieceNADH_Substrate) {
      this.pieceNADH_Substrate.position.y = separationY;
    }

    // NuoL separates laterally along +X
    if (this.pieceLateral_Piston_NuoL) {
      this.pieceLateral_Piston_NuoL.position.x = separationX;
    }
  }

  public setSubunitFilter(filter: string) {
    this.subunitFilter = filter;
    const allPieces = [
      this.pieceHydrophilic_NuoEFG,
      this.pieceConnecting_NuoBCI,
      this.pieceTransmembrane_NuoAHJK,
      this.pieceAntiporter_NuoNM,
      this.pieceLateral_Piston_NuoL,
      this.pieceFeS_Clusters,
      this.pieceFMN,
      this.pieceNADH_Substrate,
      this.pieceUbiquinone
    ];

    allPieces.forEach((p) => {
      if (!p) return;
      if (filter === 'all') {
        p.visible = true;
      } else if (filter === 'hydrophilic') {
        p.visible = p === this.pieceHydrophilic_NuoEFG || p === this.pieceConnecting_NuoBCI || p === this.pieceFeS_Clusters || p === this.pieceFMN || p === this.pieceNADH_Substrate;
      } else if (filter === 'membrane') {
        p.visible = p === this.pieceTransmembrane_NuoAHJK || p === this.pieceAntiporter_NuoNM || p === this.pieceLateral_Piston_NuoL;
      } else if (filter === 'cofactors') {
        p.visible = p === this.pieceFeS_Clusters || p === this.pieceFMN || p === this.pieceNADH_Substrate || p === this.pieceUbiquinone;
      }
    });
  }

  // --------------------------------------------------------------------------
  // Simulation Controls & Inhibitors
  // --------------------------------------------------------------------------
  public togglePause(): boolean {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  public setNADHConcentration(val: number) {
    this.nadhConcentration = Math.max(0, Math.min(100, val));
    this.electronTransferRate = (this.nadhConcentration / 100) * (this.isRotenoneInhibited ? 0.05 : 1.0);
  }

  public setRotenoneInhibition(inhibited: boolean) {
    this.isRotenoneInhibited = inhibited;
    this.electronTransferRate = (this.nadhConcentration / 100) * (this.isRotenoneInhibited ? 0.05 : 1.0);
  }

  public setExplanationStep(step: number) {
    this.explanationStep = step;

    if (step === 1) {
      // Stage 1: Macro Overview (Wide zoom-out radius: 56)
      this.animateCameraTo(new THREE.Vector3(0, 4.0, 0), 56);
      this.selectComponent('complex_i_holoenzyme');
    } else if (step === 2) {
      // Stage 2: NADH Docking & FMN
      this.animateCameraTo(new THREE.Vector3(-6.8, 14.8, 1.2), 20);
      this.selectComponent('nadh_substrate');
    } else if (step === 3) {
      // Stage 3: 8 Fe-S Quantum Tunneling Wire
      this.animateCameraTo(new THREE.Vector3(-5.8, 8.5, 0.4), 28);
      this.selectComponent('fes_clusters');
    } else if (step === 4) {
      // Stage 4: Ubiquinone Reduction Cleft
      this.animateCameraTo(new THREE.Vector3(-5.2, 1.8, 0.2), 22);
      this.selectComponent('ubiquinone_pocket');
    } else if (step === 5) {
      // Stage 5: Lateral Piston & 4 H+ Antiporter Pumping
      this.animateCameraTo(new THREE.Vector3(3.5, 0.5, 0.0), 34);
      this.selectComponent('lateral_piston_nuol');
    } else if (step === 6) {
      // Stage 6: Steady-State Continuous Respiration
      this.animateCameraTo(new THREE.Vector3(0, 4.0, 0), 48);
      this.selectComponent('complex_i_holoenzyme');
    } else {
      this.animateCameraTo(new THREE.Vector3(0, 4.0, 0), this.baseRadius);
    }
  }

  // --------------------------------------------------------------------------
  // Leaders & 2D SVG Overlay
  // --------------------------------------------------------------------------
  private updateLeadersAndOverlay() {
    if (!this.labelsContainer || !this.svgOverlay) return;
    this.svgOverlay.innerHTML = '';
    this.labelsContainer.innerHTML = '';

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.leaderAnchors.forEach((anchor) => {
      // Don't show leaders if parent piece is hidden by filter
      const wp = anchor.position.clone();
      // Adjust anchor position if exploded view is active
      if (this.explodedProgress > 0) {
        if (anchor.id === 'nadh_substrate' || anchor.id === 'fmn_cofactor') {
          wp.y += this.explodedProgress * 12.0;
        } else if (anchor.id === 'fes_clusters') {
          wp.y += this.explodedProgress * 10.0;
        } else if (anchor.id === 'lateral_piston_nuol') {
          wp.x += this.explodedProgress * 5.0;
        }
      }

      const p2d = wp.clone().project(this.camera);
      // Behind camera check
      if (p2d.z > 1.0) return;

      const screenX = (p2d.x * 0.5 + 0.5) * width;
      const screenY = (-(p2d.y * 0.5) + 0.5) * height;

      // Card offset
      const isLeft = screenX < width * 0.5;
      const cardX = isLeft ? screenX - 110 : screenX + 110;
      const cardY = screenY - 24;

      // Draw SVG hairline leader
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const d = `M ${screenX} ${screenY} L ${cardX} ${cardY + 12}`;
      line.setAttribute('d', d);
      line.setAttribute('stroke', anchor.color);
      line.setAttribute('stroke-width', '1.2');
      line.setAttribute('stroke-opacity', '0.7');
      line.setAttribute('fill', 'none');
      this.svgOverlay.appendChild(line);

      // Draw anchor ring
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', screenX.toString());
      circle.setAttribute('cy', screenY.toString());
      circle.setAttribute('r', '3.5');
      circle.setAttribute('fill', anchor.color);
      this.svgOverlay.appendChild(circle);

      // Create HTML interactive subpill badge
      const pill = document.createElement('div');
      pill.className = `complex-i-subpill ${this.activeComponentKey === anchor.id ? 'active' : ''}`;
      pill.style.left = `${cardX}px`;
      pill.style.top = `${cardY}px`;
      pill.innerHTML = `
        <span class="subpill-badge" style="background: ${anchor.color}">${anchor.letter}</span>
        <div class="subpill-info">
          <div class="subpill-title">${anchor.label}</div>
          <div class="subpill-tag">${anchor.subpill}</div>
        </div>
      `;
      pill.onclick = () => {
        this.focusComponent(anchor.id);
      };
      this.labelsContainer.appendChild(pill);
    });
  }

  // --------------------------------------------------------------------------
  // Main Animation Loop
  // --------------------------------------------------------------------------
  private animate = () => {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = 0.016; // ~60fps step
    const rate = this.isPaused ? 0 : this.electronTransferRate;

    // 1. Animate Electron Hopping Stream
    if (this.electronParticles.length > 0 && this.electronCurve) {
      this.electronParticles.forEach((p) => {
        p.u = (p.u + p.speed * delta * rate * 1.8) % 1.0;
        const pt = this.electronCurve.getPointAt(p.u);
        p.mesh.position.copy(pt);
        const fade = Math.sin(p.u * Math.PI);
        p.mesh.scale.setScalar(0.7 + 0.6 * fade);
      });
    }

    // 2. Animate Proton Translocation Streams
    this.protonConduits.forEach((cond) => {
      cond.particles.forEach((p) => {
        p.u = (p.u + p.speed * delta * rate * 1.2) % 1.0;
        const pt = cond.curve.getPointAt(p.u);
        p.mesh.position.copy(pt);
        const fade = Math.sin(p.u * Math.PI);
        p.mesh.scale.setScalar(0.6 + 0.5 * fade);
      });
    });

    // 3. Auto rotation if enabled
    if (this.isAutoRotating && !this.isUserInteracting) {
      this.spherical.theta += 0.0025;
      this.updateCameraPosition();
    }

    this.updateLeadersAndOverlay();
    this.renderer.render(this.scene, this.camera);
  };

  public start() {
    if (!this.active) {
      this.active = true;
      this.animate();
    }
  }

  public stop() {
    this.active = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public resetCamera() {
    this.spherical = { radius: this.baseRadius, theta: 0.15, phi: 1.35 };
    this.target.set(0, 4.0, 0);
    this.updateCameraPosition();
  }

  public toggleAutoRotate(): boolean {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  public destroy() {
    this.stop();
    window.removeEventListener('resize', this.handleResize.bind(this));
    if (this.renderer && this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }
}
