// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial 70S Ribosome & Polypeptide Translation Factory — 3D Scenario
 * Authentic Macromolecular Molecular Nodes Architecture (PDB: 7K00 Cryo-EM at 2.4 Å)
 * Combined with The Biology Primer (Jason Walker) Pedagogical Color Taxonomy
 *
 * Pieces:
 * - Piece 1: 50S Large Catalytic Subunit (Chains a–z, 0–4: 23S rRNA, 5S rRNA + 34 Ribosomal Proteins) - Moss Green
 * - Piece 2: 30S Small Decoding Subunit (Chains A–U: 16S rRNA + 21 Ribosomal Proteins) - Slate Denim Blue
 * - Piece 3: mRNA Template Strand (Chain X polyribonucleotide) - Terracotta Coral Red
 * - Piece 4: A-site Aminoacyl-tRNA (Chain Y Val-tRNA in arrival decoding chamber) - Jewel Violet
 * - Piece 5: P-site Peptidyl-tRNA (Chain Z fMet-tRNA holding nascent chain at PTC) - Jade Teal
 * - Piece 6: E-site Deacylated tRNA (Full cloverleaf aligned to Chain 5 CCA pocket) - Muted Mauve
 * - Piece 7: Peptidyl Transferase Center (PTC Domain V 23S rRNA A2451 & C2452) - Golden Amber
 * - Piece 8: Nascent Polypeptide Chain emerging through 50S exit tunnel into cytoplasm
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { RibosomeComponentData } from '../types/biology';
import { KeyboardFlightController } from './keyboardNavigation';

export const RIBOSOME_COMPONENTS_META: Record<string, RibosomeComponentData> = {
  'ribosome_70s': {
    name: 'Atomic Model of 70S Translating Ribosome (PDB: 7K00)',
    badge: 'TRANSLATION FACTORY (70S)',
    dims: 'Diameter: ~25 nm (250 Å), Mass: ~2.5 MDa (149,338 atoms in 7K00)',
    proteins: '3 rRNAs (16S, 23S, 5S) + 54 Ribosomal Proteins (uS2–bS21, uL1–bL36)',
    pdb: 'PDB: 7K00 (Watson et al., 2020 at 2.4 Å resolution), EMD-22637',
    desc: 'The universal ribozyme engine of protein synthesis. Ribosomal RNA forms the ancient catalytic core (magenta & cyan double helices), while ribosomal proteins (green & olive ribbons) decorate the exterior to stabilize the architecture.'
  },
  'rrna_50s': {
    name: '50S Ribosomal RNA (23S & 5S rRNA Core)',
    badge: '50S CATALYTIC CORE (rRNA)',
    dims: '23S rRNA (2,904 nt) + 5S rRNA (120 nt), 61,679 atoms',
    proteins: 'Pure Catalytic Ribozyme Core (Chains a & b)',
    pdb: 'PDB: 7K00 (Chains a, b)',
    desc: 'The catalytic power plant sculpted in deep crimson/magenta double helices. Contains Domain V which harbors the Peptidyl Transferase Center (PTC), proving the ribosome is a ribozyme.'
  },
  'proteins_50s': {
    name: '50S Ribosomal Proteins (34 Peripheral Chains)',
    badge: '50S STRUCTURAL PROTEINS',
    dims: '34 Polypeptide Subunits (uL1 through bL36), ~29,000 atoms',
    proteins: '34 Ribosomal Proteins (Chains c–z, 0–4)',
    pdb: 'PDB: 7K00 (Chains c–z, 0–4)',
    desc: 'The peripheral protein scaffold sculpted in forest olive green. Weaves around the 23S rRNA double-helical valleys, stabilizing tertiary folds and forming the flexible L1 stalk and L7/L12 stalks.'
  },
  'rrna_30s': {
    name: '30S Ribosomal RNA (16S rRNA Decoding Center)',
    badge: '30S DECODING CORE (rRNA)',
    dims: '16S rRNA (1,542 nt), 32,612 atoms',
    proteins: 'Decoding Ribozyme Framework (Chain A)',
    pdb: 'PDB: 7K00 (Chain A)',
    desc: 'The molecular proofreader sculpted in deep cyan/teal double helices. Forms the Head, Body, and Platform domains that cradle mRNA and enforce strict Watson-Crick codon-anticodon pairing.'
  },
  'proteins_30s': {
    name: '30S Ribosomal Proteins (21 Small Subunit Chains)',
    badge: '30S STRUCTURAL PROTEINS',
    dims: '21 Polypeptide Subunits (uS2 through bS21), ~18,000 atoms',
    proteins: '21 Ribosomal Proteins (Chains B–U)',
    pdb: 'PDB: 7K00 (Chains B–U)',
    desc: 'The structural stabilizer chains sculpted in golden olive/mustard green. Clamps the 16S rRNA helices into shape and assists in mRNA passage and initiation factor interaction.'
  },
  'subunit_50s': {
    name: '50S Large Catalytic Subunit (Complete)',
    badge: 'CATALYTIC RIBOZYME (50S)',
    dims: 'Dimensions: ~20 × 20 × 15 nm, Mass: ~1.6 MDa',
    proteins: '23S + 5S rRNA (Chains a, b) + 34 Proteins (Chains c–z, 0–4)',
    pdb: 'PDB: 7K00 (Chains a–z, 0–4)',
    desc: 'The complete 50S large subunit comprising the central crimson 23S/5S rRNA core and surrounding green structural proteins.'
  },
  'subunit_30s': {
    name: '30S Small Decoding Subunit (Complete)',
    badge: 'DECODING CENTER (30S)',
    dims: 'Dimensions: ~15 × 12 × 10 nm, Mass: ~0.9 MDa',
    proteins: '16S rRNA (Chain A) + 21 Proteins (Chains B–U)',
    pdb: 'PDB: 7K00 (Chains A–U)',
    desc: 'The complete 30S small subunit comprising the central cyan 16S rRNA core and surrounding golden olive structural proteins.'
  },
  'mrna_strand': {
    name: 'mRNA (Messenger RNA Template)',
    badge: 'GENETIC TEMPLATE',
    dims: 'Polyribonucleotide strand threading 5\' → 3\' across the cleft',
    proteins: 'Direct genetic transcript from RNA Polymerase',
    pdb: 'PDB: 7K00 (Chain X)',
    desc: 'The genetic messenger strand in terracotta coral red, threaded horizontally through the 30S decoding cradle where codon triplets present themselves to tRNAs.'
  },
  'trna_a_site': {
    name: 'A-site Aminoacyl-tRNA (Arrival Chamber)',
    badge: 'SUBSTRATE INLET (A-SITE)',
    dims: '76 nt L-shaped tertiary fold, 1,592 atoms',
    proteins: 'Delivered by Elongation Factor Tu (EF-Tu·GTP)',
    pdb: 'PDB: 7K00 (Chain Y, Val-tRNA)',
    desc: 'The incoming charged tRNA sculpted in golden amber/mustard yellow. Base-paired to the mRNA codon with its aminoacylated CCA tip poised at the PTC for condensation.'
  },
  'trna_p_site': {
    name: 'P-site Peptidyl-tRNA (Peptidyl Donor)',
    badge: 'PEPTIDE DONOR (P-SITE)',
    dims: '77 nt L-shaped tertiary fold, 1,642 atoms',
    proteins: 'Carries the nascent polypeptide chain at 3\' CCA terminal',
    pdb: 'PDB: 7K00 (Chain Z, fMet-tRNA)',
    desc: 'The central peptidyl-tRNA sculpted in bright emerald/lime green. Holds the growing polypeptide chain at the Peptidyl Transferase Center before transfer to the A-site.'
  },
  'trna_e_site': {
    name: 'E-site Deacylated tRNA (Exit Chamber)',
    badge: 'DISCHARGE OUTLET (E-SITE)',
    dims: '76 nt cloverleaf fold docked at 23S rRNA E-site archway',
    proteins: 'Deacylated / Uncharged tRNA awaiting discharge',
    pdb: 'PDB: 7K00 (Chain 5 CCA terminal + aligned cloverleaf)',
    desc: 'The spent tRNA sculpted in peach/salmon coral. Discharged of its amino acid, resting in the E-site archway before leaving through the mobile L1 stalk.'
  },
  'trna_all': {
    name: 'tRNAs in A, P, and E Sites',
    badge: 'ADAPTOR SCOUTS (A, P, E)',
    dims: '3 Distinct Transfer RNAs coordinating peptide synthesis',
    proteins: 'A (Golden Amber), P (Bright Green), E (Peach/Salmon)',
    pdb: 'PDB: 7K00 (Chains Y, Z, 5)',
    desc: 'The tripartite tRNA assembly coordinating amino acid delivery (A-site), peptide bond formation (P-site), and uncharged discharge (E-site).'
  },
  'ptc_core': {
    name: 'Peptidyl Transferase Center (PTC)',
    badge: 'CATALYTIC ACTIVE SITE',
    dims: 'Catalytic cleft in Domain V of 23S rRNA',
    proteins: 'Pure RNA Active Site (Conserved A2451 & C2452)',
    pdb: 'PDB: 7K00 (Chain a: A2451, C2452)',
    desc: 'The catalytic heart of the ribosome in glowing golden amber. Catalyzes peptide bond condensation via precise substrate stereochemistry with zero protein involvement.'
  },
  'exit_tunnel': {
    name: 'Polypeptide Exit Tunnel',
    badge: 'EXIT CONDUIT',
    dims: 'Length: ~100 Å (~10 nm), Diameter: ~15 Å',
    proteins: 'Lined by 23S rRNA and loops of uL4 and uL22',
    pdb: 'PDB: 7K00 (Chains a, d, v)',
    desc: 'The internal cylindrical conduit traversing through the 50S subunit from the PTC to the outer surface porthole.'
  },
  'nascent_peptide': {
    name: 'Growing Polypeptide Chain (Protein)',
    badge: 'SYNTHESIZED PROTEIN',
    dims: 'Multicolored candy pearl amino acid beads emerging at top',
    proteins: 'Newly polymerized primary protein structure',
    pdb: 'PDB: 7K00',
    desc: 'The newly synthesized protein chain made of vibrant candy pearl beads (purple, cyan, green, gold, orange, red) snaking out through the 50S exit tunnel into the cytoplasm.'
  },
  'polysome_complex': {
    name: 'Polysome (Polyribosome) Translation Array',
    badge: 'POLYSOME ARRAY (3x 70S)',
    dims: 'Polysome span: ~120 nm along mRNA (~360 nt / 120 codons), ~2-ribosome distance separation',
    proteins: '3 Tandem 70S Holoenzymes (Initiation, Mid-Elongation, Termination)',
    pdb: 'PDB: 7K00 Cryo-EM Architecture',
    desc: 'A polyribosome (polysome) formed by multiple 70S ribosomes simultaneously translating a single continuous mRNA strand, separated by ~2 ribosome diameters of distance. This biological assembly line allows a bacterial cell to produce dozens of identical protein copies concurrently from a single transcript before the mRNA is degraded.'
  },
  'ribosome_upstream': {
    name: 'Upstream 70S Ribosome (Early Elongation / Loaded at 5\')',
    badge: 'NEWLY LOADED RIBOSOME',
    dims: 'Recently initiated at Shine-Dalgarno / AUG codon, ~25 nm diameter',
    proteins: 'Nascent peptide: ~8 amino acid oligopeptide inside exit tunnel',
    pdb: 'PDB: 7K00',
    desc: 'The newly recruited 70S ribosome at the 5\' upstream region of mRNA. Having recently completed initiation and 30S-50S subunit joining, it has polymerized its first ~8 amino acids, which are still buried inside the 50S exit tunnel.'
  },
  'ribosome_downstream': {
    name: 'Downstream 70S Ribosome (Late Elongation / Near 3\' Stop)',
    badge: 'TERMINATING RIBOSOME',
    dims: 'Approaching UAA/UAG/UGA stop codon, ~25 nm diameter',
    proteins: 'Nascent peptide: ~32 amino acids folding in cytoplasm',
    pdb: 'PDB: 7K00',
    desc: 'The leading 70S ribosome furthest along the transcript nearing the 3\' termination codon. It carries an extended 32-amino-acid polypeptide chain that has emerged fully from the exit tunnel and begun co-translational folding.'
  },
  'extended_mrna': {
    name: 'Extended Polysome mRNA Transcript (5\' → 3\')',
    badge: 'POLYSOMAL mRNA',
    dims: 'Extended continuous transcript spanning ~120 codons (~360 nucleotides)',
    proteins: 'Templates 3 tandem ribosomes with ~2 ribosome spacing; recycled upon cycle completion',
    pdb: 'PDB: 7K00 (Chain X core) + extended ribonucleotide coordinates',
    desc: 'The long messenger RNA transcript linking the ribosomes together with ~2 ribosomes of distance between each holoenzyme. Nucleotide triplet codons (A, U, G, C) translocate in a 5\' to 3\' direction. Upon reaching the end of the translation run, the mRNA cycle returns to the 5\' beginning to model ongoing cellular ribosome loading and recycling.'
  }
};

export const RIBOSOME_TOUR_STOPS = [
  'polysome_complex',
  'ribosome_70s',
  'ribosome_upstream',
  'ribosome_downstream',
  'extended_mrna',
  'rrna_50s',
  'proteins_50s',
  'rrna_30s',
  'proteins_30s',
  'mrna_strand',
  'trna_all',
  'ptc_core',
  'nascent_peptide'
];

export class RibosomeScene {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.onSelectComponent = options.onSelectComponent || (() => {});
    this.onMRNACycleUpdate = options.onMRNACycleUpdate || (() => {});

    // State
    this.active = false;
    this.translationSpeed = 1.0;
    this.isPaused = false;
    this.explodedProgress = 0.0;
    this.selectedComponentKey = 'ribosome_70s';
    this.activeSubunitFilter = 'all';
    this.isAutoRotating = false;

    // Polysome & mRNA Translocation Cycle
    this.mrnaCycleProgress = 0.0;
    this.mrnaCurve = null;
    this.ribosome2Group = null;
    this.ribosome3Group = null;
    this.extendedMRNAGroup = null;
    this.codonPlates = [];
    this.peptide2Group = null;
    this.peptide3Group = null;

    // Kinetics & Animation
    this.cyclePhase = 0;
    this.cycleTime = 0.0;
    this.codonStep = 0;
    this.aminoAcidCount = 28;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;
    this.keyboardFlight = null;

    // Groups & Root
    this.rootGroup = null;
    this.assemblyGroup = null;
    this.labelsGroup = null;

    // Molecular Nodes Pieces from 7K00 GLB
    this.piece50S_rRNA = null;
    this.piece50S_Proteins = null;
    this.piece30S_rRNA = null;
    this.piece30S_Proteins = null;
    this.pieceMRNA = null;
    this.pieceTRNA_A = null;
    this.pieceTRNA_P = null;
    this.pieceTRNA_E = null;
    this.piecePTC = null;

    // Original positions for exploded view
    this.orig50S_rRNAPos = new THREE.Vector3();
    this.orig50S_ProteinsPos = new THREE.Vector3();
    this.orig30S_rRNAPos = new THREE.Vector3();
    this.orig30S_ProteinsPos = new THREE.Vector3();
    this.origMRNAPos = new THREE.Vector3();
    this.origTRNA_APos = new THREE.Vector3();
    this.origTRNA_PPos = new THREE.Vector3();
    this.origTRNA_EPos = new THREE.Vector3();
    this.origPTCPos = new THREE.Vector3();

    // Intersubunit dissociation axis (50S top -> 30S bottom)
    this.dissociationAxis = new THREE.Vector3(0, 1, 0);

    // Nascent Polypeptide & Tunnel
    this.peptideGroup = null;
    this.origPeptidePos = new THREE.Vector3();
    this.sparkMesh = null;
    this.contactShadowMesh = null;
    this.emergingPeptideBead = null;
    this.cap5Mesh = null;
    this.term3Mesh = null;

    // 3D Anatomy Tags & Dynamic Anchor Layer (Matching Flagellar Motor)
    this.showLabels = true;
    this.svgOverlay = null;
    this.labelsContainer = null;
    this.ribosomeLandmarks = [];
    this.labelAnchors = {};
    this.trnaAnchors = null;
    this.labelAnchorLayer = null;
    this.currentSubunitFilter = 'all';
    this.labels = [];

    // Interactive Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clickableMeshes = [];

    // Camera settings: Theatrical frontal view framing the full 3-ribosome Polysome array with 2-ribosome spacing
    this.spherical = { radius: 205, theta: 0.05, phi: 1.57 };
    this.target = new THREE.Vector3(0, 0, -2);
    this.isPointerDown = false;
    this.pointerStart = { x: 0, y: 0 };

    // Smooth Camera Transition Engine for Explanatory Traces & Inspections
    this.cameraTransition = {
      active: false,
      startTime: 0,
      duration: 1.4,
      startTarget: new THREE.Vector3(),
      endTarget: new THREE.Vector3(),
      startSpherical: { radius: 205, theta: 0.05, phi: 1.57 },
      endSpherical: { radius: 205, theta: 0.05, phi: 1.57 },
      onComplete: null
    };
    this.explanationStep = 0;

    this.componentsMeta = RIBOSOME_COMPONENTS_META;

    this.onWindowResizeBound = this.onWindowResize.bind(this);
    this.onPointerMoveBound = this.onPointerMove.bind(this);
    this.onPointerUpBound = this.onPointerUp.bind(this);
  }

  init() {
    this.setupScene();
    this.setupLighting();
    this.buildContactShadow();
    this.loadMolecularRibosome();
    this.setupInteraction();
    this.setupRibosomeLandmarks();
    this.initLabels();
    this.handleResize();
  }

  setupScene() {
    const rect = this.container.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : window.innerWidth;
    const h = rect.height > 0 ? rect.height : (window.innerHeight - 180);

    this.scene = new THREE.Scene();
    // Warm eggshell parchment background for authentic Biology Primer aesthetic
    this.scene.background = new THREE.Color(0xF7F5EE);

    this.camera = new THREE.PerspectiveCamera(38, w / h, 0.5, 1000);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.canvas = this.renderer.domElement;
    this.canvas.id = 'ribosome-canvas';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = 'block';
    this.container.appendChild(this.canvas);

    this.rootGroup = new THREE.Group();
    this.rootGroup.name = 'Ribosome_Root';
    this.scene.add(this.rootGroup);

    this.assemblyGroup = new THREE.Group();
    this.assemblyGroup.name = 'Molecular_7K00_Assembly';
    this.rootGroup.add(this.assemblyGroup);

    this.labelAnchorLayer = new THREE.Group();
    this.labelAnchorLayer.name = 'Ribosome_Label_Anchor_Layer';
    this.rootGroup.add(this.labelAnchorLayer);

    window.addEventListener('resize', this.onWindowResizeBound);
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xFFFAF2, 1.10);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFF6EA, 1.40);
    keyLight.position.set(45, 80, 75);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xDCE8F2, 0.75);
    fillLight.position.set(-65, 35, 45);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xFFEADB, 0.65);
    rimLight.position.set(0, 55, -65);
    this.scene.add(rimLight);
  }

  buildContactShadow() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    grad.addColorStop(0, 'rgba(40, 50, 45, 0.32)');
    grad.addColorStop(0.5, 'rgba(50, 60, 50, 0.14)');
    grad.addColorStop(1, 'rgba(247, 245, 238, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowGeo = new THREE.PlaneGeometry(260, 65);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    this.contactShadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.contactShadowMesh.rotation.x = -Math.PI / 2;
    this.contactShadowMesh.position.set(0, -26.0, -5);
    this.scene.add(this.contactShadowMesh);
  }



  /**
   * Loads the authentic 7-piece Molecular Nodes 7K00 GLTF assembly
   */
  loadMolecularRibosome() {
    const loader = new GLTFLoader();
    const url = '/prokaryote/models/7K00_assembled_pieces.glb';

    loader.load(url, (gltf) => {
      const model = gltf.scene;
      model.name = '7K00_Molecular_Pieces_Root';

      // Molecular coordinates are in nm (complex span ~25 nm). Scale to fit scene framing (~55 units)
      const scaleFactor = 2.2;
      model.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Orientation adjustment matching The Biology Primer Atomic Model:
      // 50S on top (positive Y), 30S on bottom (negative Y), mRNA horizontal, cleft facing camera
      model.rotation.set(-2.194, 0.353, -0.430);

      // Color taxonomy specifications matching The Biology Primer Atomic Model
      const colorTaxonomy = {
        'Piece_50S_rRNA':     { color: 0x9E2A5B, roughness: 0.48, metalness: 0.04, key: 'rrna_50s' },
        'Piece_50S_Proteins': { color: 0x2D6A4F, roughness: 0.52, metalness: 0.04, key: 'proteins_50s' },
        'Piece_30S_rRNA':     { color: 0x1A8594, roughness: 0.48, metalness: 0.04, key: 'rrna_30s' },
        'Piece_30S_Proteins': { color: 0x9A9E32, roughness: 0.52, metalness: 0.04, key: 'proteins_30s' },
        'Piece_mRNA_Strand':   { color: 0xBA4E3B, roughness: 0.38, metalness: 0.08, key: 'mrna_strand' },
        'Piece_tRNA_A_Site':   { color: 0xE9C46A, roughness: 0.35, metalness: 0.08, key: 'trna_a_site' },
        'Piece_tRNA_P_Site':   { color: 0x52B788, roughness: 0.35, metalness: 0.08, key: 'trna_p_site' },
        'Piece_tRNA_E_Site':   { color: 0xE07A5F, roughness: 0.35, metalness: 0.08, key: 'trna_e_site' },
        'Piece_PTC_Active_Site': { color: 0xFFB703, roughness: 0.20, metalness: 0.15, key: 'ptc_core', emissive: 0xFFA000, emissiveIntensity: 0.8 },
        'Piece_Polypeptide_Chain': { roughness: 0.35, metalness: 0.08, key: 'nascent_peptide', useVertexColors: true }
      };

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          const spec = colorTaxonomy[child.name];
          if (spec) {
            // Apply fresh high-fidelity PBR material
            const mat = new THREE.MeshStandardMaterial({
              color: spec.useVertexColors ? 0xffffff : spec.color,
              vertexColors: !!spec.useVertexColors,
              roughness: spec.roughness,
              metalness: spec.metalness,
              side: THREE.DoubleSide
            });
            if (spec.emissive) {
              mat.emissive = new THREE.Color(spec.emissive);
              mat.emissiveIntensity = spec.emissiveIntensity;
            }
            child.material = mat;
            this.registerClickable(child, spec.key);
          }
        }
      });

      // Extract named piece references
      this.piece50S_rRNA = model.getObjectByName('Piece_50S_rRNA');
      this.piece50S_Proteins = model.getObjectByName('Piece_50S_Proteins');
      this.piece30S_rRNA = model.getObjectByName('Piece_30S_rRNA');
      this.piece30S_Proteins = model.getObjectByName('Piece_30S_Proteins');
      this.pieceMRNA = model.getObjectByName('Piece_mRNA_Strand');
      this.pieceTRNA_A = model.getObjectByName('Piece_tRNA_A_Site');
      this.pieceTRNA_P = model.getObjectByName('Piece_tRNA_P_Site');
      this.pieceTRNA_E = model.getObjectByName('Piece_tRNA_E_Site');
      this.piecePTC = model.getObjectByName('Piece_PTC_Active_Site');
      this.piecePolypeptide = model.getObjectByName('Piece_Polypeptide_Chain');

      // Cache initial native assembled positions for exploded view
      if (this.piece50S_rRNA) this.orig50S_rRNAPos.copy(this.piece50S_rRNA.position);
      if (this.piece50S_Proteins) this.orig50S_ProteinsPos.copy(this.piece50S_Proteins.position);
      if (this.piece30S_rRNA) this.orig30S_rRNAPos.copy(this.piece30S_rRNA.position);
      if (this.piece30S_Proteins) this.orig30S_ProteinsPos.copy(this.piece30S_Proteins.position);
      if (this.pieceMRNA) this.origMRNAPos.copy(this.pieceMRNA.position);
      if (this.pieceTRNA_A) this.origTRNA_APos.copy(this.pieceTRNA_A.position);
      if (this.pieceTRNA_P) this.origTRNA_PPos.copy(this.pieceTRNA_P.position);
      if (this.pieceTRNA_E) this.origTRNA_EPos.copy(this.pieceTRNA_E.position);
      if (this.piecePTC) this.origPTCPos.copy(this.piecePTC.position);

      this.assemblyGroup.add(model);

      // --- Ribosome 2: Upstream / 5' Initiation Region (Newly Loaded) ---
      const model2 = model.clone(true);
      model2.name = 'Ribosome_2_Upstream_5p';
      model2.position.set(-84, -5.8, -7.5);
      model2.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) child.material = child.material.clone();
          this.registerClickable(child, 'ribosome_upstream');
        }
      });
      this.assemblyGroup.add(model2);
      this.ribosome2Group = model2;

      // --- Ribosome 3: Downstream / 3' Termination Region (Folding) ---
      const model3 = model.clone(true);
      model3.name = 'Ribosome_3_Downstream_3p';
      model3.position.set(84, 6.4, -7.5);
      model3.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) child.material = child.material.clone();
          this.registerClickable(child, 'ribosome_downstream');
        }
      });
      this.assemblyGroup.add(model3);
      this.ribosome3Group = model3;

      // Add Peptidyl Catalytic Spark Sprite
      const sparkGeo = new THREE.SphereGeometry(1.4, 12, 12);
      const sparkMat = new THREE.MeshBasicMaterial({ color: 0xFFF07C, transparent: true, opacity: 0.90 });
      this.sparkMesh = new THREE.Mesh(sparkGeo, sparkMat);
      if (this.piecePTC) {
        this.sparkMesh.position.copy(this.piecePTC.position);
      }
      this.sparkMesh.scale.set(0.1, 0.1, 0.1);
      this.assemblyGroup.add(this.sparkMesh);

      // Build Nascent Polypeptides (Ribo 1, Ribo 2, Ribo 3) & Extended Polysome mRNA
      this.buildNascentPolypeptide(scaleFactor);
      this.buildPolysomePeptideChains();
      this.buildExtendedPolysomeMRNA();
      this.initLabelAnchors();
      this.updateLandmarksAndLeaders();

      // Apply initial exploded progress if user moved slider before load
      if (this.explodedProgress > 0) {
        this.setExplodedProgress(this.explodedProgress);
      }

      console.log('[+] Authentic 70S Polysome Array (3x Ribosomes) loaded successfully.');
    }, undefined, (err) => {
      console.error('[-] Failed to load 7K00 assembled pieces GLB:', err);
    });
  }

  buildPolysomePeptideChains() {
    const pearlColors = [
      0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946, 0x8338EC, 0x38B000, 0xFF006E
    ];
    // Delicate small amino acid beads matching authentic molecular scale
    const beadGeo = new THREE.SphereGeometry(0.9, 12, 12);

    // --- 1. Ribosome 2 Peptide (Early Initiation, ~8 amino acid beads inside exit tunnel) ---
    this.peptide2Group = new THREE.Group();
    this.peptide2Group.name = 'Ribosome_2_Short_Peptide';
    const r2Points = [
      new THREE.Vector3(-82.2, -0.8, -11.5),
      new THREE.Vector3(-82.6, 2.4, -12.8),
      new THREE.Vector3(-83.2, 5.9, -12.2),
      new THREE.Vector3(-83.0, 9.9, -11.0),
      new THREE.Vector3(-82.2, 13.4, -9.5),
      new THREE.Vector3(-81.0, 16.4, -7.5),
      new THREE.Vector3(-79.5, 19.5, -5.5),
      new THREE.Vector3(-77.0, 22.0, -3.5)
    ];
    const r2Curve = new THREE.CatmullRomCurve3(r2Points);
    const r2Samples = r2Curve.getPoints(8);
    for (let i = 0; i < r2Samples.length; i++) {
      const col = pearlColors[i % pearlColors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.20,
        metalness: 0.1
      });
      const bead = new THREE.Mesh(beadGeo, mat);
      bead.position.copy(r2Samples[i]);
      bead.castShadow = true;
      this.registerClickable(bead, 'ribosome_upstream');
      this.peptide2Group.add(bead);
    }
    const r2Line = new THREE.Mesh(
      new THREE.TubeGeometry(r2Curve, 32, 0.20, 6, false),
      new THREE.MeshStandardMaterial({ color: 0xFFD166, roughness: 0.3 })
    );
    this.peptide2Group.add(r2Line);
    this.assemblyGroup.add(this.peptide2Group);

    // --- 2. Ribosome 3 Peptide (Late Elongation, ~32 amino acids folding in cytoplasm) ---
    this.peptide3Group = new THREE.Group();
    this.peptide3Group.name = 'Ribosome_3_Folding_Peptide';
    const r3Points = [
      new THREE.Vector3(85.8, 11.4, -11.5),
      new THREE.Vector3(85.4, 15.5, -12.5),
      new THREE.Vector3(84.8, 20.0, -11.5),
      new THREE.Vector3(85.2, 24.5, -9.5),
      new THREE.Vector3(87.0, 28.5, -7.0),
      new THREE.Vector3(90.5, 31.5, -4.5),
      new THREE.Vector3(94.5, 33.0, -2.5),
      new THREE.Vector3(98.5, 31.5, -1.0),
      new THREE.Vector3(101.5, 28.5, 0.5),
      new THREE.Vector3(103.5, 24.5, 1.8),
      new THREE.Vector3(102.5, 20.5, 3.2),
      new THREE.Vector3(99.0, 18.5, 4.5),
      new THREE.Vector3(95.5, 19.5, 6.0),
      new THREE.Vector3(93.5, 22.5, 7.0),
      new THREE.Vector3(95.0, 26.0, 7.5),
      new THREE.Vector3(98.5, 28.5, 7.8),
      new THREE.Vector3(102.5, 29.5, 7.5),
      new THREE.Vector3(106.0, 28.0, 6.5),
      new THREE.Vector3(108.5, 25.0, 5.0)
    ];
    const r3Curve = new THREE.CatmullRomCurve3(r3Points);
    const r3Samples = r3Curve.getPoints(32);
    for (let i = 0; i < r3Samples.length; i++) {
      const col = pearlColors[i % pearlColors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.18,
        metalness: 0.12
      });
      const bead = new THREE.Mesh(beadGeo, mat);
      bead.position.copy(r3Samples[i]);
      bead.castShadow = true;
      this.registerClickable(bead, 'ribosome_downstream');
      this.peptide3Group.add(bead);
    }
    const r3Line = new THREE.Mesh(
      new THREE.TubeGeometry(r3Curve, 64, 0.22, 6, false),
      new THREE.MeshStandardMaterial({ color: 0xFFD166, roughness: 0.3 })
    );
    this.peptide3Group.add(r3Line);
    this.assemblyGroup.add(this.peptide3Group);
  }

  buildExtendedPolysomeMRNA() {
    this.extendedMRNAGroup = new THREE.Group();
    this.extendedMRNAGroup.name = 'Extended_Polysome_mRNA';

    // Spline curve traversing 5' entry -> Ribo 2 -> Spacer 1 -> Ribo 1 -> Spacer 2 -> Ribo 3 -> 3' exit
    const mrnaPoints = [
      new THREE.Vector3(-185, -16.0, -18),  // 5' Terminal entry (Cap)
      new THREE.Vector3(-150, -12.5, -14),  // 5' Leader upstream
      new THREE.Vector3(-118, -9.0, -10.5), // Pre-Shine-Dalgarno approach
      new THREE.Vector3(-84, -5.8, -7.5),   // Inside Ribosome 2 decoding cleft
      new THREE.Vector3(-56, -3.8, -5.2),   // Spacer 1 leaving Ribo 2 (~28 units)
      new THREE.Vector3(-28, -1.8, -3.5),   // Spacer 1 midpoint (~56 units gap)
      new THREE.Vector3(0, 0, 0),           // Inside Ribosome 1 decoding cleft
      new THREE.Vector3(28, 2.2, -3.5),    // Spacer 2 leaving Ribo 1 (~28 units)
      new THREE.Vector3(56, 4.4, -5.2),    // Spacer 2 midpoint (~56 units gap)
      new THREE.Vector3(84, 6.4, -7.5),    // Inside Ribosome 3 decoding cleft
      new THREE.Vector3(118, 9.8, -10.5),  // Post-termination clearance
      new THREE.Vector3(150, 13.5, -14),   // 3' Trailing transcript
      new THREE.Vector3(185, 17.5, -18)    // 3' Stem-loop hairpin terminus
    ];
    this.mrnaCurve = new THREE.CatmullRomCurve3(mrnaPoints);

    // Continuous Coral Backbone Tube
    const tubeGeo = new THREE.TubeGeometry(this.mrnaCurve, 280, 0.45, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xBA4E3B,
      roughness: 0.38,
      metalness: 0.08
    });
    const backboneMesh = new THREE.Mesh(tubeGeo, tubeMat);
    backboneMesh.castShadow = true;
    backboneMesh.receiveShadow = true;
    this.registerClickable(backboneMesh, 'extended_mrna');
    this.extendedMRNAGroup.add(backboneMesh);

    // 120 Codon Triplet Plates with Biological Base Colors (A, U, G, C)
    const basePalette = {
      'A': 0xE76F51, // Coral Terracotta (Adenine)
      'U': 0x457B9D, // Steel Blue (Uracil)
      'G': 0x2A9D8F, // Jade Green (Guanine)
      'C': 0xE9C46A  // Amber Gold (Cytosine)
    };
    const codonPatterns = [
      ['A', 'U', 'G'], ['G', 'U', 'G'], ['U', 'U', 'U'], ['G', 'A', 'A'],
      ['C', 'U', 'G'], ['A', 'A', 'A'], ['C', 'C', 'G'], ['U', 'A', 'C'],
      ['G', 'G', 'C'], ['A', 'U', 'C'], ['C', 'A', 'G'], ['G', 'A', 'C'],
      ['U', 'U', 'C'], ['G', 'C', 'G'], ['A', 'C', 'U'], ['C', 'C', 'A']
    ];

    const discGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.22, 10);
    this.codonPlates = [];

    const numCodons = 120;
    for (let i = 0; i < numCodons; i++) {
      const codonGroup = new THREE.Group();
      codonGroup.name = `Codon_Plate_${i}`;
      const pattern = codonPatterns[i % codonPatterns.length];

      // Triplet of 3 bases side-by-side
      for (let b = 0; b < 3; b++) {
        const baseLetter = pattern[b];
        const baseMat = new THREE.MeshStandardMaterial({
          color: basePalette[baseLetter],
          roughness: 0.25,
          metalness: 0.08
        });
        const baseMesh = new THREE.Mesh(discGeo, baseMat);
        baseMesh.position.set((b - 1) * 0.55, 0, 0);
        baseMesh.rotation.x = Math.PI / 2;
        codonGroup.add(baseMesh);
      }

      codonGroup.userData.baseU = i / numCodons;
      this.registerClickable(codonGroup, 'extended_mrna');
      this.extendedMRNAGroup.add(codonGroup);
      this.codonPlates.push(codonGroup);
    }

    // 5' Cap Terminal Decoration
    const cap5Geo = new THREE.SphereGeometry(1.6, 14, 14);
    const cap5Mat = new THREE.MeshStandardMaterial({
      color: 0xFFB703,
      emissive: 0xE68A00,
      emissiveIntensity: 0.6,
      roughness: 0.2
    });
    const cap5 = new THREE.Mesh(cap5Geo, cap5Mat);
    cap5.position.copy(mrnaPoints[0]);
    this.registerClickable(cap5, 'extended_mrna');
    this.extendedMRNAGroup.add(cap5);
    this.cap5Mesh = cap5;

    // 3' Stem-Loop Terminal Decoration
    const term3Geo = new THREE.TorusGeometry(1.8, 0.4, 8, 20);
    const term3Mat = new THREE.MeshStandardMaterial({
      color: 0x2A9D8F,
      roughness: 0.3
    });
    const term3 = new THREE.Mesh(term3Geo, term3Mat);
    term3.position.copy(mrnaPoints[mrnaPoints.length - 1]);
    this.registerClickable(term3, 'extended_mrna');
    this.extendedMRNAGroup.add(term3);
    this.term3Mesh = term3;

    this.assemblyGroup.add(this.extendedMRNAGroup);
    this.updateCodonPlates(0.0);
  }

  updateCodonPlates(progress) {
    if (!this.mrnaCurve || this.codonPlates.length === 0) return;
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < this.codonPlates.length; i++) {
      const plate = this.codonPlates[i];
      const u = (plate.userData.baseU + progress) % 1.0;
      const pt = this.mrnaCurve.getPointAt(u);
      const tangent = this.mrnaCurve.getTangentAt(u);
      plate.position.copy(pt);
      plate.quaternion.setFromUnitVectors(up, tangent);
    }
  }

  resetMRNACycle() {
    this.mrnaCycleProgress = 0.0;
    this.updateCodonPlates(0.0);
    if (this.onMRNACycleUpdate) {
      this.onMRNACycleUpdate(0.0);
    }
    if (this.sparkMesh) {
      this.sparkMesh.scale.set(3.5, 3.5, 3.5);
      setTimeout(() => {
        if (this.sparkMesh) this.sparkMesh.scale.set(0.1, 0.1, 0.1);
      }, 300);
    }
  }

  /**
   * Constructs the authentic nascent polypeptide chain emerging from the PTC
   * through the 50S exit tunnel into the cytoplasmic milieu above the 50S subunit
   */
  buildNascentPolypeptide(scaleFactor = 2.2) {
    this.peptideGroup = new THREE.Group();
    this.peptideGroup.name = 'Nascent_Polypeptide_Chain';

    const ptcWorld = new THREE.Vector3();
    if (this.piecePTC) {
      const boxPTC = new THREE.Box3().setFromObject(this.piecePTC);
      boxPTC.getCenter(ptcWorld);
    } else {
      ptcWorld.set(1.8, 5.0, -4.0);
    }

    // Trajectory starting from PTC in the catalytic cleft, traversing up through 50S exit conduit,
    // emerging through the exit porthole at the top apex of 50S, and curling into the cytoplasm.
    // Extended slightly longer than previous so the emerging tail is clearly visible outside the exit tunnel.
    const peptidePoints = [
      new THREE.Vector3(ptcWorld.x + 0.2, ptcWorld.y + 0.5, ptcWorld.z - 1.0),
      new THREE.Vector3(ptcWorld.x - 0.4, ptcWorld.y + 3.8, ptcWorld.z - 2.0),
      new THREE.Vector3(ptcWorld.x - 1.0, ptcWorld.y + 7.5, ptcWorld.z - 1.4),
      new THREE.Vector3(ptcWorld.x - 0.6, ptcWorld.y + 11.5, ptcWorld.z - 0.2),
      new THREE.Vector3(ptcWorld.x + 0.5, ptcWorld.y + 15.5, ptcWorld.z + 1.2),
      new THREE.Vector3(ptcWorld.x + 2.4, ptcWorld.y + 18.5, ptcWorld.z + 2.8),
      new THREE.Vector3(ptcWorld.x + 5.0, ptcWorld.y + 20.5, ptcWorld.z + 4.0),
      new THREE.Vector3(ptcWorld.x + 8.2, ptcWorld.y + 21.0, ptcWorld.z + 4.8),
      new THREE.Vector3(ptcWorld.x + 11.5, ptcWorld.y + 19.8, ptcWorld.z + 5.2),
      new THREE.Vector3(ptcWorld.x + 14.5, ptcWorld.y + 17.5, ptcWorld.z + 5.2),
      new THREE.Vector3(ptcWorld.x + 17.0, ptcWorld.y + 14.5, ptcWorld.z + 4.8),
      new THREE.Vector3(ptcWorld.x + 19.0, ptcWorld.y + 11.5, ptcWorld.z + 4.0),
      new THREE.Vector3(ptcWorld.x + 20.5, ptcWorld.y + 8.5, ptcWorld.z + 3.0),
      new THREE.Vector3(ptcWorld.x + 21.5, ptcWorld.y + 6.0, ptcWorld.z + 1.8)
    ];

    const curve = new THREE.CatmullRomCurve3(peptidePoints);
    const beadCount = this.aminoAcidCount;
    const samples = curve.getPoints(beadCount);

    const pearlColors = [
      0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946, 0x8338EC, 0x38B000, 0xFF006E
    ];

    // Small, delicate amino acid bead spheres as originally styled
    const beadGeo = new THREE.SphereGeometry(1.0, 14, 14);

    for (let i = 0; i < samples.length; i++) {
      const col = pearlColors[i % pearlColors.length];
      const pearlMat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.18,
        metalness: 0.12
      });
      const bead = new THREE.Mesh(beadGeo, pearlMat);
      bead.position.copy(samples[i]);
      bead.castShadow = true;
      this.registerClickable(bead, 'nascent_peptide');
      this.peptideGroup.add(bead);
      if (i === Math.floor(samples.length * 0.45)) {
        this.emergingPeptideBead = bead;
      }
    }

    // Slender polypeptide backbone organic string
    const lineGeo = new THREE.TubeGeometry(curve, 84, 0.22, 8, false);
    const lineMat = new THREE.MeshStandardMaterial({
      color: 0xFFD166,
      roughness: 0.30
    });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    this.peptideGroup.add(lineMesh);

    this.assemblyGroup.add(this.peptideGroup);
    this.origPeptidePos.copy(this.peptideGroup.position);
  }

  /**
   * Sets up authentic 3D anatomical landmarks matching The Biology Primer Ribosome architecture
   */
  setupRibosomeLandmarks() {
    this.ribosomeLandmarks = [
      {
        id: 'ribo-tag-polysome',
        key: 'polysome_complex',
        name: 'Polysome Array (3x 70S)',
        subtitle: 'Tandem Polypeptide Factory',
        color: '#1A3A5A',
        pos: new THREE.Vector3(0.0, 42.0, 6.0),
        screenOffset: { x: 0, y: -75 },
        meta: this.componentsMeta['polysome_complex']
      },
      {
        id: 'ribo-tag-ribo2',
        key: 'ribosome_upstream',
        name: "5' Upstream Ribosome",
        subtitle: "Newly Recruited at 5' AUG",
        color: '#2A5D34',
        pos: new THREE.Vector3(-88.0, 8.0, 4.0),
        screenOffset: { x: -160, y: -65 },
        meta: this.componentsMeta['ribosome_upstream']
      },
      {
        id: 'ribo-tag-ribo3',
        key: 'ribosome_downstream',
        name: "3' Downstream Ribosome",
        subtitle: 'Terminating / Folding Peptide',
        color: '#3D2645',
        pos: new THREE.Vector3(78.0, 18.0, 4.0),
        screenOffset: { x: 160, y: -65 },
        meta: this.componentsMeta['ribosome_downstream']
      },
      {
        id: 'ribo-tag-50s-rrna',
        key: 'rrna_50s',
        name: '50S Ribosomal RNA',
        subtitle: '23S & 5S Catalytic rRNA Core',
        color: '#9E2A5B',
        pos: new THREE.Vector3(-14.0, 14.0, 8.0),
        screenOffset: { x: -210, y: -35 },
        meta: this.componentsMeta['rrna_50s']
      },
      {
        id: 'ribo-tag-50s-prot',
        key: 'proteins_50s',
        name: '50S Ribosomal Proteins',
        subtitle: '34 Structural Chains (uL1–bL36)',
        color: '#2D6A4F',
        pos: new THREE.Vector3(14.0, 12.0, 14.0),
        screenOffset: { x: 210, y: -35 },
        meta: this.componentsMeta['proteins_50s']
      },
      {
        id: 'ribo-tag-ptc',
        key: 'ptc_core',
        name: 'PTC Active Site',
        subtitle: 'Peptidyl Transferase Ribozyme',
        color: '#FFB703',
        pos: new THREE.Vector3(2.1, 5.8, 1.5),
        screenOffset: { x: -180, y: 15 },
        meta: this.componentsMeta['ptc_core']
      },
      {
        id: 'ribo-tag-peptide',
        key: 'nascent_peptide',
        name: 'Nascent Polypeptide',
        subtitle: 'Emerging Amino Acid Chain',
        color: '#7B2CBF',
        pos: new THREE.Vector3(10.0, 26.5, 2.5),
        screenOffset: { x: 210, y: -25 },
        meta: this.componentsMeta['nascent_peptide']
      },
      {
        id: 'ribo-tag-trna',
        key: 'trna_all',
        name: 'tRNAs (A, P, E Sites)',
        subtitle: 'Aminoacyl, Peptidyl & Spent tRNAs',
        color: '#E9C46A',
        pos: new THREE.Vector3(5.5, -4.0, 6.0),
        screenOffset: { x: 190, y: 35 },
        meta: this.componentsMeta['trna_all']
      },
      {
        id: 'ribo-tag-mrna',
        key: 'mrna_strand',
        name: 'mRNA Transcript',
        subtitle: "Genetic Coding Triplets (5' → 3')",
        color: '#BA4E3B',
        pos: new THREE.Vector3(0.0, -9.0, 9.0),
        screenOffset: { x: -200, y: 55 },
        meta: this.componentsMeta['mrna_strand']
      },
      {
        id: 'ribo-tag-30s-rrna',
        key: 'rrna_30s',
        name: '30S Ribosomal RNA',
        subtitle: '16S rRNA Decoding Framework',
        color: '#1A8594',
        pos: new THREE.Vector3(-11.0, -14.0, 12.0),
        screenOffset: { x: -210, y: 95 },
        meta: this.componentsMeta['rrna_30s']
      },
      {
        id: 'ribo-tag-30s-prot',
        key: 'proteins_30s',
        name: '30S Ribosomal Proteins',
        subtitle: '21 Polypeptide Chains (uS2–bS21)',
        color: '#9A9E32',
        pos: new THREE.Vector3(12.0, -14.0, 14.0),
        screenOffset: { x: 210, y: 95 },
        meta: this.componentsMeta['proteins_30s']
      },
      {
        id: 'ribo-tag-70s',
        key: 'ribosome_70s',
        name: 'Active 70S Holoenzyme',
        subtitle: 'Cryo-EM PDB 7K00 (2.4 Å)',
        color: '#1A2B25',
        pos: new THREE.Vector3(0.0, -24.0, 8.0),
        screenOffset: { x: 0, y: 130 },
        meta: this.componentsMeta['ribosome_70s']
      },
      {
        id: 'ribo-tag-mrna-5p',
        key: 'extended_mrna',
        name: "5' mRNA Entry",
        subtitle: 'Shine-Dalgarno Initiation',
        color: '#8A3B2C',
        pos: new THREE.Vector3(-180.0, -15.0, -16.0),
        screenOffset: { x: -140, y: 40 },
        meta: this.componentsMeta['extended_mrna']
      },
      {
        id: 'ribo-tag-mrna-3p',
        key: 'extended_mrna',
        name: "3' mRNA Exit",
        subtitle: 'UAA Termination Porthole',
        color: '#2A5A4A',
        pos: new THREE.Vector3(180.0, 17.0, -16.0),
        screenOffset: { x: 140, y: 40 },
        meta: this.componentsMeta['extended_mrna']
      }
    ];
  }

  /**
   * Instantiate interactive 3D HTML tag badges inside labels container
   */
  initLabels() {
    if (!this.labelsContainer) {
      this.labelsContainer = document.getElementById('ribosome-labels-container');
    }
    if (!this.labelsContainer) return;
    this.labelsContainer.innerHTML = '';

    if (!this.ribosomeLandmarks || this.ribosomeLandmarks.length === 0) {
      this.setupRibosomeLandmarks();
    }

    this.ribosomeLandmarks.forEach((lm) => {
      const tag = document.createElement('div');
      tag.className = 'motor-tag ribosome-tag';
      tag.id = lm.id;
      tag.setAttribute('data-target', lm.key);

      if (lm.id === 'ribo-tag-trna') {
        tag.innerHTML = `
          <div class="motor-tag-badge" style="border-left: 4px solid #E9C46A; padding: 6px 10px;">
            <span class="motor-tag-primary" style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
              <span><span class="motor-tag-dot" style="background-color: #E9C46A;"></span> ${lm.name}</span>
            </span>
            <div class="trna-subpill-row" style="display: flex; gap: 4px; margin: 4px 0 3px 0;">
              <button class="trna-subpill-btn" data-target="trna_a_site" style="background: rgba(233,196,106,0.25); color: #B38600; border: 1px solid #E9C46A; padding: 2px 5px; border-radius: 4px; font-size: 10px; font-weight: 800; cursor: pointer;">🟡 A-Site</button>
              <button class="trna-subpill-btn" data-target="trna_p_site" style="background: rgba(82,183,136,0.25); color: #2D6A4F; border: 1px solid #52B788; padding: 2px 5px; border-radius: 4px; font-size: 10px; font-weight: 800; cursor: pointer;">🟢 P-Site</button>
              <button class="trna-subpill-btn" data-target="trna_e_site" style="background: rgba(224,122,95,0.25); color: #A43B22; border: 1px solid #E07A5F; padding: 2px 5px; border-radius: 4px; font-size: 10px; font-weight: 800; cursor: pointer;">🟠 E-Site</button>
            </div>
            <span class="motor-tag-sub">${lm.subtitle}</span>
          </div>
        `;
        tag.querySelectorAll('.trna-subpill-btn').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const subKey = btn.getAttribute('data-target');
            if (subKey) {
              this.selectComponent(subKey);
              this.focusComponent(subKey);
            }
          });
        });
      } else {
        tag.innerHTML = `
          <div class="motor-tag-badge" style="border-left-color: ${lm.color};">
            <span class="motor-tag-primary">
              <span class="motor-tag-dot" style="background-color: ${lm.color};"></span>
              ${lm.name}
            </span>
            <span class="motor-tag-sub">${lm.subtitle}</span>
          </div>
        `;
      }

      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectComponent(lm.key);
        this.focusComponent(lm.key);
        this.highlightTag(lm.id);
      });
      this.labelsContainer.appendChild(tag);
    });

    this.initLabelAnchors();
  }

  /**
   * Build stationary 3D anchor tracking layer physically attached to each piece
   */
  initLabelAnchors() {
    // If previous anchors existed, detach from parents to prevent duplicates
    if (this.labelAnchors) {
      Object.values(this.labelAnchors).forEach((anchor) => {
        if (anchor && anchor.parent) {
          anchor.parent.remove(anchor);
        }
      });
    }
    this.labelAnchors = {};

    if (!this.ribosomeLandmarks || this.ribosomeLandmarks.length === 0) {
      this.setupRibosomeLandmarks();
    }

    // Direct 1:1 binding to specific colored 3D meshes:
    // When the mesh moves, rotates, or explodes, its child anchor moves in lockstep!
    const parentMap = {
      'ribo-tag-ptc': {
        parent: this.piecePTC,
        localPos: new THREE.Vector3(-0.19, -1.62, 2.33)
      },
      'ribo-tag-50s-rrna': {
        parent: this.piece50S_rRNA,
        localPos: new THREE.Vector3(1.65, -9.10, -0.83)
      },
      'ribo-tag-50s-prot': {
        parent: this.piece50S_Proteins,
        localPos: new THREE.Vector3(9.53, -4.51, -2.31)
      },
      'ribo-tag-30s-rrna': {
        parent: this.piece30S_rRNA,
        localPos: new THREE.Vector3(4.75, -1.45, -10.55)
      },
      'ribo-tag-30s-prot': {
        parent: this.piece30S_Proteins,
        localPos: new THREE.Vector3(7.58, -2.90, -9.84)
      },
      'ribo-tag-mrna': {
        parent: this.pieceMRNA,
        localPos: new THREE.Vector3(2.52, -0.79, -5.29)
      },
      'ribo-tag-trna': {
        parent: this.pieceTRNA_A,
        localPos: new THREE.Vector3(4.24, 1.55, -3.45)
      },
      'ribo-tag-peptide': {
        parent: this.emergingPeptideBead || this.peptideGroup,
        localPos: new THREE.Vector3(0, 0, 0)
      },
      'ribo-tag-ribo2': {
        parent: this.ribosome2Group,
        localPos: new THREE.Vector3(0, 0, 0)
      },
      'ribo-tag-ribo3': {
        parent: this.ribosome3Group,
        localPos: new THREE.Vector3(0, 0, 0)
      },
      'ribo-tag-70s': {
        parent: this.piece30S_rRNA || this.assemblyGroup,
        localPos: this.piece30S_rRNA ? new THREE.Vector3(0.5, -4.5, -10.0) : new THREE.Vector3(0.0, -22.0, 6.0)
      },
      'ribo-tag-mrna-5p': {
        parent: this.cap5Mesh || this.assemblyGroup,
        localPos: this.cap5Mesh ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(-180.0, -15.0, -16.0)
      },
      'ribo-tag-mrna-3p': {
        parent: this.term3Mesh || this.assemblyGroup,
        localPos: this.term3Mesh ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(180.0, 17.0, -16.0)
      },
      'ribo-tag-polysome': {
        parent: this.assemblyGroup,
        localPos: new THREE.Vector3(0.0, 42.0, 6.0)
      }
    };

    this.ribosomeLandmarks.forEach((lm) => {
      const binding = parentMap[lm.id];
      const anchor = new THREE.Object3D();
      anchor.name = `Anchor_${lm.id}`;

      if (binding && binding.parent) {
        anchor.position.copy(binding.localPos);
        binding.parent.add(anchor);
      } else {
        // Fallback before pieces are loaded
        anchor.position.copy(lm.pos);
        if (this.labelAnchorLayer) {
          this.labelAnchorLayer.add(anchor);
        } else if (this.rootGroup) {
          this.rootGroup.add(anchor);
        }
      }

      anchor.userData = {
        id: lm.id,
        key: lm.key,
        basePos: lm.pos.clone()
      };
      this.labelAnchors[lm.id] = anchor;
    });

    // Dedicated tripartite tRNA sub-anchors for all 3 tRNAs (A, P, E Sites)
    if (this.pieceTRNA_A && this.pieceTRNA_P && this.pieceTRNA_E) {
      const anchorA = new THREE.Object3D();
      anchorA.name = 'Anchor_tRNA_A_Site';
      anchorA.position.set(3.69, 2.06, -0.85);
      anchorA.userData = { id: 'ribo-tag-trna-a', key: 'trna_a_site', name: 'A-Site', col: '#E9C46A' };
      this.pieceTRNA_A.add(anchorA);

      const anchorP = new THREE.Object3D();
      anchorP.name = 'Anchor_tRNA_P_Site';
      anchorP.position.set(3.29, -1.14, -1.10);
      anchorP.userData = { id: 'ribo-tag-trna-p', key: 'trna_p_site', name: 'P-Site', col: '#52B788' };
      this.pieceTRNA_P.add(anchorP);

      const anchorE = new THREE.Object3D();
      anchorE.name = 'Anchor_tRNA_E_Site';
      anchorE.position.set(-0.56, -8.09, -1.07);
      anchorE.userData = { id: 'ribo-tag-trna-e', key: 'trna_e_site', name: 'E-Site', col: '#E07A5F' };
      this.pieceTRNA_E.add(anchorE);

      this.trnaAnchors = { a: anchorA, p: anchorP, e: anchorE };
      this.labelAnchors['ribo-tag-trna-a'] = anchorA;
      this.labelAnchors['ribo-tag-trna-p'] = anchorP;
      this.labelAnchors['ribo-tag-trna-e'] = anchorE;
    }

    this.updateLabelAnchors();
  }

  /**
   * Visually highlight active tag badge
   */
  highlightTag(keyOrId) {
    if (!this.labelsContainer) {
      this.labelsContainer = document.getElementById('ribosome-labels-container');
    }
    if (!this.labelsContainer) return;
    this.labelsContainer.querySelectorAll('.motor-tag').forEach((el) => {
      const isMatch = el.id === keyOrId || el.getAttribute('data-target') === keyOrId ||
        ((keyOrId === 'trna_a_site' || keyOrId === 'trna_p_site' || keyOrId === 'trna_e_site') && el.id === 'ribo-tag-trna');
      el.classList.toggle('active-target', isMatch);
    });

    // Also highlight the active subpill button
    this.labelsContainer.querySelectorAll('.trna-subpill-btn').forEach((btn) => {
      const isBtnMatch = btn.getAttribute('data-target') === keyOrId;
      (btn as HTMLElement).style.boxShadow = isBtnMatch ? '0 0 8px rgba(255,255,255,0.95), 0 0 4px rgba(0,0,0,0.3)' : 'none';
      (btn as HTMLElement).style.outline = isBtnMatch ? '2px solid #FFFFFF' : 'none';
    });
  }

  /**
   * Ensure world matrices are up-to-date across all nested mesh structures
   */
  updateLabelAnchors() {
    if (this.assemblyGroup) {
      this.assemblyGroup.updateMatrixWorld(true);
    }
  }

  /**
   * Project stationary 3D anatomical landmarks onto 2D screen coordinates
   * and render hairline SVG leader lines and positioned HTML badges.
   */
  updateLandmarksAndLeaders() {
    if (!this.svgOverlay || !this.labelsContainer) {
      this.svgOverlay = document.getElementById('ribosome-svg-overlay');
      this.labelsContainer = document.getElementById('ribosome-labels-container');
      if (this.labelsContainer && (!this.ribosomeLandmarks || this.ribosomeLandmarks.length === 0 || this.labelsContainer.children.length === 0)) {
        this.initLabels();
      }
    }
    if (!this.showLabels || !this.svgOverlay || !this.labelsContainer) {
      if (this.svgOverlay) this.svgOverlay.innerHTML = '';
      if (this.labelsContainer) this.labelsContainer.style.display = 'none';
      return;
    }
    this.labelsContainer.style.display = 'block';

    const width = (this.container && this.container.clientWidth > 0) ? this.container.clientWidth : window.innerWidth;
    const height = (this.container && this.container.clientHeight > 0) ? this.container.clientHeight : (window.innerHeight - 180);
    let svgLines = '';

    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);

    this.ribosomeLandmarks.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      // Filter check
      if (this.currentSubunitFilter && this.currentSubunitFilter !== 'all' && this.currentSubunitFilter !== 'polysome') {
        const f = this.currentSubunitFilter;
        let match = false;
        if ((f === '50s_rrna' || f === '50s') && (item.key === 'rrna_50s' || item.key === 'subunit_50s')) match = true;
        else if (f === '50s_prot' && item.key === 'proteins_50s') match = true;
        else if ((f === '30s_rrna' || f === '30s') && (item.key === 'rrna_30s' || item.key === 'subunit_30s')) match = true;
        else if (f === '30s_prot' && item.key === 'proteins_30s') match = true;
        else if ((f === 'trna' || f === 'trna_all' || f === 'trna_a_site' || f === 'trna_p_site' || f === 'trna_e_site') && (item.key === 'trna_all' || item.key === 'trna_a_site' || item.key === 'trna_p_site' || item.key === 'trna_e_site')) match = true;
        else if ((f === 'mrna' || f === 'ext_mrna') && (item.key === 'mrna_strand' || item.key === 'extended_mrna')) match = true;
        else if (f === 'ptc' && item.key === 'ptc_core') match = true;
        else if (f === 'peptide' && item.key === 'nascent_peptide') match = true;

        if (!match) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          return;
        }
      }

      const anchor = this.labelAnchors ? this.labelAnchors[item.id] : null;
      const worldPos = new THREE.Vector3();
      if (anchor) {
        anchor.getWorldPosition(worldPos);
      } else {
        worldPos.copy(item.pos);
      }

      // Guard: only project points in front of the camera plane
      const toPoint = worldPos.clone().sub(this.camera.position);
      if (toPoint.dot(camDir) <= 0) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      const v = worldPos.project(this.camera);
      const isVisible = v.z > -1 && v.z < 1;
      const screenX = (v.x * 0.5 + 0.5) * width;
      const screenY = (-v.y * 0.5 + 0.5) * height;

      if (isVisible && screenX > 20 && screenX < width - 20 && screenY > 20 && screenY < height - 20) {
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        const labelX = screenX + item.screenOffset.x;
        const labelY = screenY + item.screenOffset.y;
        el.style.left = `${labelX}px`;
        el.style.top = `${labelY}px`;

        if (item.id === 'ribo-tag-trna' && this.trnaAnchors) {
          const subTargets = [
            { key: 'trna_a_site', name: 'A', col: '#E9C46A', anchor: this.trnaAnchors.a },
            { key: 'trna_p_site', name: 'P', col: '#52B788', anchor: this.trnaAnchors.p },
            { key: 'trna_e_site', name: 'E', col: '#E07A5F', anchor: this.trnaAnchors.e }
          ];

          const halfW = el.offsetWidth ? (el.offsetWidth * 0.5) : 85;
          const lineEndX = item.screenOffset.x >= 0 ? (labelX - halfW - 2) : (labelX + halfW + 2);

          let trnaGroupSvg = '';
          subTargets.forEach((t) => {
            if (!t.anchor) return;
            const twPos = new THREE.Vector3();
            t.anchor.getWorldPosition(twPos);
            const toT = twPos.clone().sub(this.camera.position);
            if (toT.dot(camDir) <= 0) return;

            const tv = twPos.project(this.camera);
            if (tv.z <= -1 || tv.z >= 1) return;

            const tsX = (tv.x * 0.5 + 0.5) * width;
            const tsY = (-tv.y * 0.5 + 0.5) * height;

            const isSubActive = this.selectedComponentKey === t.key || this.selectedComponentKey === 'trna_all';
            const radius = isSubActive ? 5.0 : 3.5;
            const strokeW = isSubActive ? 2.2 : 1.3;
            const strokeOp = isSubActive ? 1.0 : (this.selectedComponentKey ? 0.45 : 0.85);

            const polyPoints = `${tsX},${tsY} ${tsX + (lineEndX - tsX) * 0.45},${labelY} ${lineEndX},${labelY}`;

            trnaGroupSvg += `
              <g class="motor-leader-group ${isSubActive ? 'active-target-group' : ''}">
                ${isSubActive ? `<circle cx="${tsX}" cy="${tsY}" r="10" fill="none" stroke="${t.col}" stroke-width="1.8" opacity="0.85"><animate attributeName="r" values="5;12;5" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.8s" repeatCount="indefinite"/></circle>` : ''}
                <circle cx="${tsX}" cy="${tsY}" r="${radius}" fill="${t.col}" stroke="#FFFFFF" stroke-width="1.5" />
                <rect x="${tsX + (tsX < lineEndX ? -18 : 6)}" y="${tsY - 8}" width="14" height="14" rx="3" fill="rgba(26,43,37,0.85)" />
                <text x="${tsX + (tsX < lineEndX ? -11 : 13)}" y="${tsY + 3}" font-size="10" font-weight="800" font-family="monospace" fill="${t.col}" text-anchor="middle">${t.name}</text>
                <polyline points="${polyPoints}" fill="none" stroke="${t.col}" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round" opacity="${strokeOp}" />
              </g>
            `;
          });
          svgLines += trnaGroupSvg;
          return;
        }

        let polylinePoints = '';
        if (Math.abs(item.screenOffset.x) < 25) {
          const halfH = el.offsetHeight ? (el.offsetHeight * 0.5) : 18;
          const lineEndY = item.screenOffset.y < 0 ? (labelY + halfH + 2) : (labelY - halfH - 2);
          polylinePoints = `${screenX},${screenY} ${labelX},${lineEndY}`;
        } else {
          const halfW = el.offsetWidth ? (el.offsetWidth * 0.5) : 80;
          const lineEndX = item.screenOffset.x >= 0 ? (labelX - halfW - 2) : (labelX + halfW + 2);
          polylinePoints = `${screenX},${screenY} ${screenX + item.screenOffset.x * 0.4},${labelY} ${lineEndX},${labelY}`;
        }

        const isActive = this.selectedComponentKey === item.key;
        const anchorRadius = isActive ? 4.5 : 3.0;
        const strokeWidth = isActive ? 2.2 : 1.3;
        const strokeOpacity = isActive ? 1.0 : (this.selectedComponentKey ? 0.45 : 0.88);

        svgLines += `
          <g class="motor-leader-group ${isActive ? 'active-target-group' : ''}">
            ${isActive ? `<circle cx="${screenX}" cy="${screenY}" r="9" fill="none" stroke="${item.color}" stroke-width="1.6" opacity="0.75"><animate attributeName="r" values="5;11;5" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.8s" repeatCount="indefinite"/></circle>` : ''}
            <circle cx="${screenX}" cy="${screenY}" r="${anchorRadius}" fill="${item.color}" stroke="#FFFFFF" stroke-width="${isActive ? 1.5 : 1.2}" />
            <polyline points="${polylinePoints}"
                      fill="none" stroke="${item.color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" opacity="${strokeOpacity}" />
          </g>
        `;
      } else {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
      }
    });

    this.svgOverlay.innerHTML = svgLines;
  }

  setupInteraction() {
    this.canvas.addEventListener('pointerdown', (e) => {
      this.isPointerDown = true;
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;
    });

    window.addEventListener('pointermove', this.onPointerMoveBound);
    window.addEventListener('pointerup', this.onPointerUpBound);

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.spherical.radius = Math.max(20, Math.min(260, this.spherical.radius + e.deltaY * 0.08));
      this.updateCameraPosition();
    }, { passive: false });

    // Keyboard navigation (WASD, Arrows, Space, C, Shift, R)
    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      target: this.target,
      spherical: this.spherical,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateLandmarksAndLeaders()
    });

    // Click selection via Raycaster
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.clickableMeshes, false);

      if (intersects.length > 0) {
        const hit = intersects[0];
        const key = hit.object.userData.componentKey;
        if (key) {
          this.selectComponent(key);
        }
      }
    });
  }

  onPointerMove(e) {
    if (!this.isPointerDown) return;
    const dx = e.clientX - this.pointerStart.x;
    const dy = e.clientY - this.pointerStart.y;
    this.pointerStart.x = e.clientX;
    this.pointerStart.y = e.clientY;

    this.spherical.theta -= dx * 0.007;
    this.spherical.phi = Math.max(0.2, Math.min(Math.PI - 0.2, this.spherical.phi + dy * 0.007));
    this.updateCameraPosition();
  }

  onPointerUp() {
    this.isPointerDown = false;
  }

  registerClickable(mesh, key) {
    mesh.userData.componentKey = key;
    this.clickableMeshes.push(mesh);
  }

  selectComponent(key) {
    this.selectedComponentKey = key;
    this.highlightTag(key);
    this.updateLandmarksAndLeaders();
    const meta = this.componentsMeta[key] || this.componentsMeta['ribosome_70s'];
    this.onSelectComponent(key, meta);

    // Pulse highlight specific selected sub-components briefly (e.g. PTC, tRNAs, peptide)
    if (key !== 'ribosome_70s' && key !== 'ribosome_upstream' && key !== 'ribosome_downstream' && key !== 'polysome_complex') {
      if (key === 'trna_all') {
        [this.pieceTRNA_A, this.pieceTRNA_P, this.pieceTRNA_E].forEach((m) => {
          if (m && m.material && m.material.emissive) {
            if (m.userData.origEmissive === undefined) {
              m.userData.origEmissive = m.material.emissive.getHex();
            }
            m.material.emissive.setHex(0xFFD166);
            setTimeout(() => {
              if (m && m.material && m.material.emissive && m.userData.origEmissive !== undefined) {
                m.material.emissive.setHex(m.userData.origEmissive);
              }
            }, 450);
          }
        });
      } else {
        this.clickableMeshes.forEach((m) => {
          if (m.userData.componentKey === key && m.material && m.material.emissive) {
            if (m.userData.origEmissive === undefined) {
              m.userData.origEmissive = m.material.emissive.getHex();
            }
            m.material.emissive.setHex(0xFFD166);
            setTimeout(() => {
              if (m && m.material && m.material.emissive && m.userData.origEmissive !== undefined) {
                m.material.emissive.setHex(m.userData.origEmissive);
              }
            }, 450);
          }
        });
      }
    }
  }

  focusComponent(key) {
    const targetMap = {
      'polysome_complex': { radius: 205, theta: 0.05, phi: 1.57, target: new THREE.Vector3(0, 0, -2) },
      'ribosome_upstream': { radius: 56, theta: 0.08, phi: 1.48, target: new THREE.Vector3(-84, -5.8, -7.5) },
      'ribosome_downstream': { radius: 56, theta: -0.05, phi: 1.48, target: new THREE.Vector3(84, 6.4, -7.5) },
      'extended_mrna': { radius: 215, theta: 0.02, phi: 1.55, target: new THREE.Vector3(0, 0, -3) },
      'rrna_50s': { radius: 62, theta: -0.10, phi: 1.35, target: new THREE.Vector3(2.36, -1.77, 8.02) },
      'proteins_50s': { radius: 64, theta: -0.15, phi: 1.30, target: new THREE.Vector3(2.36, -1.77, 8.02) },
      'subunit_50s': { radius: 64, theta: -0.10, phi: 1.35, target: new THREE.Vector3(2.36, -1.77, 8.02) },
      'rrna_30s': { radius: 50, theta: 0.15, phi: 1.48, target: new THREE.Vector3(1.38, 3.47, -14.57) },
      'proteins_30s': { radius: 52, theta: 0.20, phi: 1.50, target: new THREE.Vector3(1.38, 3.47, -14.57) },
      'subunit_30s': { radius: 52, theta: 0.15, phi: 1.48, target: new THREE.Vector3(1.38, 3.47, -14.57) },
      'trna_all': { radius: 28, theta: 0.12, phi: 1.38, target: new THREE.Vector3(5.5, -3.0, -3.0) },
      'trna_a_site': { radius: 26, theta: 0.25, phi: 1.38, target: new THREE.Vector3(6.26, 1.58, -4.63) },
      'trna_p_site': { radius: 26, theta: 0.08, phi: 1.38, target: new THREE.Vector3(5.49, -3.70, -3.00) },
      'trna_e_site': { radius: 26, theta: -0.20, phi: 1.38, target: new THREE.Vector3(-2.58, -16.37, 1.15) },
      'mrna_strand': { radius: 32, theta: 0.10, phi: 1.45, target: new THREE.Vector3(3.83, -3.02, -12.26) },
      'ptc_core': { radius: 18, theta: 0.12, phi: 1.35, target: new THREE.Vector3(2.48, 1.40, 6.38) },
      'exit_tunnel': { radius: 46, theta: 0.35, phi: 1.15, target: new THREE.Vector3(1.4, -14.0, 10.0) },
      'nascent_peptide': { radius: 44, theta: 0.40, phi: 1.10, target: new THREE.Vector3(6.0, -18.0, 12.0) },
      'ribosome_70s': { radius: 74, theta: 0.08, phi: 1.42, target: new THREE.Vector3(0, 0, 0) }
    };
    const t = targetMap[key] || targetMap['ribosome_70s'];
    this.spherical.radius = t.radius;
    this.spherical.theta = t.theta;
    this.spherical.phi = t.phi;
    this.target.copy(t.target);

    // Special handling for trna_all to frame all three tRNAs simultaneously
    if (key === 'trna_all' && this.trnaAnchors && this.trnaAnchors.a && this.trnaAnchors.p && this.trnaAnchors.e) {
      const pA = new THREE.Vector3();
      const pP = new THREE.Vector3();
      const pE = new THREE.Vector3();
      this.trnaAnchors.a.getWorldPosition(pA);
      this.trnaAnchors.p.getWorldPosition(pP);
      this.trnaAnchors.e.getWorldPosition(pE);
      this.target.copy(pA).add(pP).add(pE).multiplyScalar(1 / 3);
      this.spherical.radius = 32 + (this.explodedProgress || 0) * 22;
      this.updateCameraPosition();
      return;
    }

    // If an anchor is attached to this piece, dynamically center on its real 3D world position
    if (this.labelAnchors) {
      for (const anchor of Object.values(this.labelAnchors)) {
        if (anchor && anchor.userData && anchor.userData.key === key) {
          const worldPos = new THREE.Vector3();
          anchor.getWorldPosition(worldPos);
          this.target.copy(worldPos);
          break;
        }
      }
    }

    this.updateCameraPosition();
  }

  updateCameraPosition() {
    if (!this.camera) return;
    const sinPhi = Math.sin(this.spherical.phi);
    const cosPhi = Math.cos(this.spherical.phi);
    const sinTheta = Math.sin(this.spherical.theta);
    const cosTheta = Math.cos(this.spherical.theta);

    this.camera.position.x = this.target.x + this.spherical.radius * sinPhi * sinTheta;
    this.camera.position.y = this.target.y + this.spherical.radius * cosPhi;
    this.camera.position.z = this.target.z + this.spherical.radius * sinPhi * cosTheta;
    this.camera.lookAt(this.target);
  }

  resetCamera() {
    this.spherical = { radius: 205, theta: 0.05, phi: 1.57 };
    this.target.set(0, 0, -2);
    this.updateCameraPosition();
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  toggleLabels(force = undefined) {
    this.showLabels = (force !== undefined) ? force : !this.showLabels;
    this.updateLandmarksAndLeaders();
    return this.showLabels;
  }

  /**
   * Smoothly separates 50S and 30S along the authentic biophysical dissociation axis
   */
  setExplodedProgress(val) {
    this.explodedProgress = Math.max(0.0, Math.min(1.0, val));
    const dist = this.explodedProgress * 15;

    // Displace 30S (rRNA + Proteins) forward along dissociation axis
    if (this.piece30S_rRNA) {
      this.piece30S_rRNA.position.copy(this.orig30S_rRNAPos).addScaledVector(this.dissociationAxis, dist * 0.95);
    }
    if (this.piece30S_Proteins) {
      this.piece30S_Proteins.position.copy(this.orig30S_ProteinsPos).addScaledVector(this.dissociationAxis, dist * 0.95);
    }
    // Displace 50S (rRNA + Proteins) backward along dissociation axis
    if (this.piece50S_rRNA) {
      this.piece50S_rRNA.position.copy(this.orig50S_rRNAPos).addScaledVector(this.dissociationAxis, -dist * 0.85);
    }
    if (this.piece50S_Proteins) {
      this.piece50S_Proteins.position.copy(this.orig50S_ProteinsPos).addScaledVector(this.dissociationAxis, -dist * 0.85);
    }
    // PTC moves with 50S
    if (this.piecePTC) {
      this.piecePTC.position.copy(this.origPTCPos).addScaledVector(this.dissociationAxis, -dist * 0.85);
    }
    if (this.sparkMesh && this.piecePTC) {
      this.sparkMesh.position.copy(this.piecePTC.position);
    }
    // Nascent polypeptide moves upward with 50S exit tunnel
    if (this.peptideGroup) {
      this.peptideGroup.position.copy(this.origPeptidePos).addScaledVector(this.dissociationAxis, -dist * 0.85);
    }
    // mRNA travels partially with 30S cradle
    if (this.pieceMRNA) {
      this.pieceMRNA.position.copy(this.origMRNAPos).addScaledVector(this.dissociationAxis, dist * 0.45);
    }
    // tRNAs separate laterally in the cleft for unobstructed viewing
    if (this.pieceTRNA_A) {
      this.pieceTRNA_A.position.x = this.origTRNA_APos.x + this.explodedProgress * 5.5;
    }
    if (this.pieceTRNA_E) {
      this.pieceTRNA_E.position.x = this.origTRNA_EPos.x - this.explodedProgress * 5.5;
    }

    // Displace neighboring ribosomes outward during exploded view for clear central visibility
    if (this.ribosome2Group) {
      this.ribosome2Group.position.x = -84 - this.explodedProgress * 15;
    }
    if (this.ribosome3Group) {
      this.ribosome3Group.position.x = 84 + this.explodedProgress * 15;
    }
    if (this.peptide2Group) {
      this.peptide2Group.position.x = -this.explodedProgress * 15;
    }
    if (this.peptide3Group) {
      this.peptide3Group.position.x = this.explodedProgress * 15;
    }

    // Update stationary dynamic anchor layer coordinates and SVG leader lines
    this.updateLabelAnchors();
    this.updateLandmarksAndLeaders();
  }

  setTranslationSpeed(val) {
    this.translationSpeed = Math.max(0.1, Math.min(3.0, val));
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  /**
   * Advances translation by exactly 1 codon (+1 amino acid) with PTC catalytic spark
   */
  stepCodon() {
    this.codonStep++;
    this.aminoAcidCount++;

    // Add small bead to peptide chain consistent with delicate molecular scale
    const colors = [0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946, 0x8338EC, 0x38B000];
    const col = colors[this.aminoAcidCount % colors.length];
    const newBead = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 14, 14),
      new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.18,
        metalness: 0.12
      })
    );
    newBead.position.set(
      23.0 + (this.aminoAcidCount % 6) * 1.2,
      5.0 - (this.aminoAcidCount % 5) * 0.9,
      1.5 + Math.sin(this.aminoAcidCount) * 0.8
    );
    newBead.castShadow = true;
    if (this.peptideGroup) {
      this.peptideGroup.add(newBead);
      this.registerClickable(newBead, 'nascent_peptide');
    }

    // Advance mRNA cycle slightly on step
    this.mrnaCycleProgress = (this.mrnaCycleProgress + 1.0 / 60.0) % 1.0;
    this.updateCodonPlates(this.mrnaCycleProgress);
    if (this.onMRNACycleUpdate) {
      this.onMRNACycleUpdate(this.mrnaCycleProgress);
    }

    // Trigger catalytic spark flash at PTC active site
    if (this.sparkMesh) {
      this.sparkMesh.scale.set(3.5, 3.5, 3.5);
      setTimeout(() => {
        if (this.sparkMesh) this.sparkMesh.scale.set(0.1, 0.1, 0.1);
      }, 250);
    }
    if (this.piecePTC) {
      this.piecePTC.scale.set(1.4, 1.4, 1.4);
      setTimeout(() => {
        if (this.piecePTC) this.piecePTC.scale.set(1.0, 1.0, 1.0);
      }, 250);
    }
  }

  setSubunitFilter(filter) {
    this.activeSubunitFilter = filter;
    const isAll = filter === 'all';
    const isPolysome = filter === 'polysome';

    if (this.ribosome2Group) this.ribosome2Group.visible = isAll || isPolysome;
    if (this.ribosome3Group) this.ribosome3Group.visible = isAll || isPolysome;
    if (this.peptide2Group) this.peptide2Group.visible = isAll || isPolysome || filter === 'peptide';
    if (this.peptide3Group) this.peptide3Group.visible = isAll || isPolysome || filter === 'peptide';
    if (this.extendedMRNAGroup) this.extendedMRNAGroup.visible = isAll || isPolysome || filter === 'mrna' || filter === 'ext_mrna';

    if (this.piece30S_rRNA) this.piece30S_rRNA.visible = isAll || isPolysome || filter === '30s_rrna' || filter === '30s';
    if (this.piece30S_Proteins) this.piece30S_Proteins.visible = isAll || isPolysome || filter === '30s_prot' || filter === '30s';
    if (this.piece50S_rRNA) this.piece50S_rRNA.visible = isAll || isPolysome || filter === '50s_rrna' || filter === '50s' || filter === 'tunnel';
    if (this.piece50S_Proteins) this.piece50S_Proteins.visible = isAll || isPolysome || filter === '50s_prot' || filter === '50s';
    if (this.piecePTC) this.piecePTC.visible = isAll || isPolysome || filter === '50s_rrna' || filter === '50s' || filter === 'ptc' || filter === 'tunnel';
    if (this.sparkMesh) this.sparkMesh.visible = isAll || isPolysome || filter === '50s_rrna' || filter === '50s' || filter === 'ptc' || filter === 'tunnel';
    if (this.pieceTRNA_A) this.pieceTRNA_A.visible = isAll || isPolysome || filter === 'trna' || filter === 'trna_all' || filter === 'trna_a_site';
    if (this.pieceTRNA_P) this.pieceTRNA_P.visible = isAll || isPolysome || filter === 'trna' || filter === 'trna_all' || filter === 'trna_p_site';
    if (this.pieceTRNA_E) this.pieceTRNA_E.visible = isAll || isPolysome || filter === 'trna' || filter === 'trna_all' || filter === 'trna_e_site';
    if (this.pieceMRNA) this.pieceMRNA.visible = isAll || isPolysome || filter === 'mrna' || filter === 'ext_mrna';
    if (this.peptideGroup) this.peptideGroup.visible = isAll || isPolysome || filter === 'peptide' || filter === '50s' || filter === 'tunnel';

    this.currentSubunitFilter = filter;
    this.updateLandmarksAndLeaders();
  }

  start() {
    this.active = true;
    this.handleResize();
    this.animate();
  }

  stop() {
    this.active = false;
    if (this.keyboardFlight) {
      this.keyboardFlight.resetKeys();
    }
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  animate() {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate.bind(this));

    const delta = 0.016 * this.translationSpeed;
    if (this.keyboardFlight) {
      this.keyboardFlight.update(delta || 0.016);
    }

    if (!this.isPaused) {
      this.cycleTime += delta;

      // 1. Advance mRNA Translocation and recycling cycle
      this.mrnaCycleProgress = (this.mrnaCycleProgress + delta * 0.015 * this.translationSpeed) % 1.0;
      if (this.onMRNACycleUpdate) {
        this.onMRNACycleUpdate(this.mrnaCycleProgress);
      }
      this.updateCodonPlates(this.mrnaCycleProgress);

      // 2. Subtle biological breathing & micro-translocation oscillations of tRNAs
      if (this.pieceTRNA_A && this.pieceTRNA_P && this.pieceTRNA_E) {
        const bob = Math.sin(this.cycleTime * 3.5) * 0.25;
        this.pieceTRNA_A.position.y = this.origTRNA_APos.y + bob;
        this.pieceTRNA_P.position.y = this.origTRNA_PPos.y - bob * 0.4;
        this.pieceTRNA_E.position.y = this.origTRNA_EPos.y + Math.cos(this.cycleTime * 3.0) * 0.2;
      }

      // 3. Center mRNA subtle breathing
      if (this.pieceMRNA) {
        const mrnaShift = Math.sin(this.cycleTime * 1.8) * 0.30;
        this.pieceMRNA.position.x = this.origMRNAPos.x + mrnaShift;
      }

      // 4. Gentle waving of the nascent peptide chains outside the exit portholes
      if (this.peptideGroup) {
        this.peptideGroup.rotation.z = Math.sin(this.cycleTime * 1.2) * 0.02;
      }
      if (this.peptide2Group) {
        this.peptide2Group.rotation.z = Math.sin(this.cycleTime * 1.5) * 0.015;
      }
      if (this.peptide3Group) {
        this.peptide3Group.rotation.z = Math.sin(this.cycleTime * 0.9) * 0.03;
      }

      // 5. PTC catalytic pulse breathing
      if (this.piecePTC) {
        const pulse = 1.0 + Math.sin(this.cycleTime * 4.0) * 0.05;
        this.piecePTC.scale.set(pulse, pulse, pulse);
      }
    }

    // Keep leader lines & HTML badges synchronized
    this.updateLandmarksAndLeaders();

    // Smooth Camera Transition Interpolation
    if (this.cameraTransition && this.cameraTransition.active) {
      const elapsed = (performance.now() - this.cameraTransition.startTime) / 1000;
      const progress = Math.min(1.0, elapsed / this.cameraTransition.duration);
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      this.target.lerpVectors(this.cameraTransition.startTarget, this.cameraTransition.endTarget, ease);
      this.spherical.radius = THREE.MathUtils.lerp(
        this.cameraTransition.startSpherical.radius,
        this.cameraTransition.endSpherical.radius,
        ease
      );
      this.spherical.theta = THREE.MathUtils.lerp(
        this.cameraTransition.startSpherical.theta,
        this.cameraTransition.endSpherical.theta,
        ease
      );
      this.spherical.phi = THREE.MathUtils.lerp(
        this.cameraTransition.startSpherical.phi,
        this.cameraTransition.endSpherical.phi,
        ease
      );
      this.updateCameraPosition();
      if (progress >= 1.0) {
        this.cameraTransition.active = false;
        if (this.cameraTransition.onComplete) {
          const cb = this.cameraTransition.onComplete;
          this.cameraTransition.onComplete = null;
          cb();
        }
      }
    }

    if (this.isAutoRotating && (!this.cameraTransition || !this.cameraTransition.active)) {
      this.spherical.theta += 0.005;
      this.updateCameraPosition();
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  handleResize() {
    this.onWindowResize();
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const rect = this.container.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : window.innerWidth;
    const h = rect.height > 0 ? rect.height : (window.innerHeight - 180);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.updateLandmarksAndLeaders();
  }

  dispose() {
    this.stop();
    if (this.keyboardFlight) {
      this.keyboardFlight.dispose();
      this.keyboardFlight = null;
    }
    window.removeEventListener('resize', this.onWindowResizeBound);
    window.removeEventListener('pointermove', this.onPointerMoveBound);
    window.removeEventListener('pointerup', this.onPointerUpBound);
    if (this.trnaAnchors) {
      if (this.trnaAnchors.a && this.trnaAnchors.a.parent) this.trnaAnchors.a.parent.remove(this.trnaAnchors.a);
      if (this.trnaAnchors.p && this.trnaAnchors.p.parent) this.trnaAnchors.p.parent.remove(this.trnaAnchors.p);
      if (this.trnaAnchors.e && this.trnaAnchors.e.parent) this.trnaAnchors.e.parent.remove(this.trnaAnchors.e);
      this.trnaAnchors = null;
    }
    if (this.labelAnchors) {
      Object.values(this.labelAnchors).forEach((anchor) => {
        if (anchor && anchor.parent) {
          anchor.parent.remove(anchor);
        }
      });
      this.labelAnchors = {};
    }
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
    if (this.labelsContainer) this.labelsContainer.innerHTML = '';
    if (this.svgOverlay) this.svgOverlay.innerHTML = '';
  }

  /**
   * Smoothly interpolate camera target and spherical coordinates
   */
  transitionCamera(targetPos, sphericalConfig, durationSec = 1.4, onComplete = null) {
    if (!this.cameraTransition) return;
    this.cameraTransition.active = true;
    this.cameraTransition.startTarget.copy(this.target);
    this.cameraTransition.endTarget.copy(targetPos);
    this.cameraTransition.startSpherical = { ...this.spherical };
    this.cameraTransition.endSpherical = {
      radius: sphericalConfig.radius !== undefined ? sphericalConfig.radius : this.spherical.radius,
      theta: sphericalConfig.theta !== undefined ? sphericalConfig.theta : this.spherical.theta,
      phi: sphericalConfig.phi !== undefined ? sphericalConfig.phi : this.spherical.phi
    };
    this.cameraTransition.startTime = performance.now();
    this.cameraTransition.duration = durationSec;
    this.cameraTransition.onComplete = onComplete;
  }

  /**
   * Explanatory Trace Controller: Orchestrates camera, highlighting, and translation steps
   */
  setExplanationStep(stepIndex) {
    this.explanationStep = stepIndex;

    if (stepIndex === 0) {
      // Return to full polysome theatrical overview
      this.isPaused = false;
      this.translationSpeed = 1.0;
      this.selectedComponentKey = 'ribosome_70s';
      this.transitionCamera(
        new THREE.Vector3(0, 0, -2),
        { radius: 205, theta: 0.05, phi: 1.57 },
        1.4
      );
      return;
    }

    if (stepIndex === 1) {
      // Stage 1: Ribozyme Factory Overview & Translation Role (Wide macro zoom-out)
      this.isPaused = false;
      this.translationSpeed = 1.0;
      this.selectedComponentKey = 'ribosome_70s';
      this.transitionCamera(
        new THREE.Vector3(0, 0, -2),
        { radius: 185, theta: 0.15, phi: 1.48 },
        1.4
      );
    } else if (stepIndex === 2) {
      // Stage 2: A-Site Codon Recognition & Proofreading
      this.isPaused = false;
      this.selectedComponentKey = 'trna_a_site';
      this.transitionCamera(
        new THREE.Vector3(6.26, 1.58, -4.63),
        { radius: 26, theta: 0.25, phi: 1.38 },
        1.4
      );
    } else if (stepIndex === 3) {
      // Stage 3: GTP Hydrolysis & Acceptor Arm Accommodation
      this.isPaused = false;
      this.selectedComponentKey = 'subunit_30s';
      this.transitionCamera(
        new THREE.Vector3(1.38, 3.47, -14.57),
        { radius: 38, theta: 0.18, phi: 1.45 },
        1.4
      );
    } else if (stepIndex === 4) {
      // Stage 4: Peptidyl Transferase Center Catalysis
      this.isPaused = false;
      this.selectedComponentKey = 'ptc_core';
      this.transitionCamera(
        new THREE.Vector3(2.48, 1.40, 6.38),
        { radius: 18, theta: 0.12, phi: 1.35 },
        1.4
      );
    } else if (stepIndex === 5) {
      // Stage 5: EF-G Ratchet & mRNA Translocation Stroke
      this.isPaused = false;
      this.selectedComponentKey = 'trna_p_site';
      this.transitionCamera(
        new THREE.Vector3(5.49, -3.70, -3.00),
        { radius: 28, theta: 0.08, phi: 1.38 },
        1.4
      );
    } else if (stepIndex === 6) {
      // Stage 6: E-Site Discharge & Continuous Polysome Elongation
      this.isPaused = false;
      this.selectedComponentKey = 'ribosome_70s';
      this.transitionCamera(
        new THREE.Vector3(0, 0, 0),
        { radius: 88, theta: 0.08, phi: 1.42 },
        1.4
      );
    }
  }
}
