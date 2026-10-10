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
  }
};

export const RIBOSOME_TOUR_STOPS = [
  'ribosome_70s',
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

    // State
    this.active = false;
    this.translationSpeed = 1.0;
    this.isPaused = false;
    this.explodedProgress = 0.0;
    this.selectedComponentKey = 'ribosome_70s';
    this.activeSubunitFilter = 'all';
    this.isAutoRotating = false;

    // Kinetics & Animation
    this.cyclePhase = 0;
    this.cycleTime = 0.0;
    this.codonStep = 0;
    this.aminoAcidCount = 18;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;

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

    // Floating 3D Labels
    this.labels = [];

    // Interactive Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clickableMeshes = [];

    // Camera settings: Theatrical frontal view matching The Biology Primer Atomic Model
    this.spherical = { radius: 98, theta: 0.05, phi: 1.57 };
    this.target = new THREE.Vector3(0, 0, 0);
    this.isPointerDown = false;
    this.pointerStart = { x: 0, y: 0 };

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

    this.labelsGroup = new THREE.Group();
    this.labelsGroup.name = 'Ribosome_Floating_Labels';
    this.rootGroup.add(this.labelsGroup);

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
    const shadowGeo = new THREE.PlaneGeometry(65, 45);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    this.contactShadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.contactShadowMesh.rotation.x = -Math.PI / 2;
    this.contactShadowMesh.position.set(0, -22.0, 0);
    this.scene.add(this.contactShadowMesh);
  }

  createPillLabel(text, bgColor = '#2C4A28', textColor = '#FFFFFF', width = 128, height = 54) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const r = height / 2;
    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.roundRect(4, 4, width - 8, height - 8, r);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = `bold ${height * 0.50}px "Source Sans 3", Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2 + 1);

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthTest: false });
    const geo = new THREE.PlaneGeometry(width / 34, height / 34);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 999;
    return mesh;
  }

  /**
   * Loads the authentic 7-piece Molecular Nodes 7K00 GLTF assembly
   */
  loadMolecularRibosome() {
    const loader = new GLTFLoader();
    const url = '/models/7K00_assembled_pieces.glb';

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
        'Piece_PTC_Active_Site': { color: 0xFFB703, roughness: 0.20, metalness: 0.15, key: 'ptc_core', emissive: 0xFFA000, emissiveIntensity: 0.8 }
      };

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          const spec = colorTaxonomy[child.name];
          if (spec) {
            // Apply fresh high-fidelity PBR material
            const mat = new THREE.MeshStandardMaterial({
              color: spec.color,
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

      // Add Peptidyl Catalytic Spark Sprite
      const sparkGeo = new THREE.SphereGeometry(1.4, 12, 12);
      const sparkMat = new THREE.MeshBasicMaterial({ color: 0xFFF07C, transparent: true, opacity: 0.90 });
      this.sparkMesh = new THREE.Mesh(sparkGeo, sparkMat);
      if (this.piecePTC) {
        this.sparkMesh.position.copy(this.piecePTC.position);
      }
      this.sparkMesh.scale.set(0.1, 0.1, 0.1);
      this.assemblyGroup.add(this.sparkMesh);

      // Build Nascent Polypeptide Chain & 3D Architectural Labels
      this.buildNascentPolypeptide(scaleFactor);
      this.buildFloatingLabels();

      // Apply initial exploded progress if user moved slider before load
      if (this.explodedProgress > 0) {
        this.setExplodedProgress(this.explodedProgress);
      }

      console.log('[+] Authentic 70S Ribosome Molecular Nodes Assembly loaded successfully.');
    }, undefined, (err) => {
      console.error('[-] Failed to load 7K00 assembled pieces GLB:', err);
    });
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
    // emerging through the exit porthole at the top apex of 50S, and curling into the cytoplasm
    const peptidePoints = [
      new THREE.Vector3(ptcWorld.x + 0.2, ptcWorld.y + 0.5, ptcWorld.z - 1.0),
      new THREE.Vector3(ptcWorld.x - 0.5, ptcWorld.y + 3.5, ptcWorld.z - 2.5),
      new THREE.Vector3(ptcWorld.x - 1.2, ptcWorld.y + 7.0, ptcWorld.z - 1.8),
      new THREE.Vector3(ptcWorld.x - 0.8, ptcWorld.y + 11.5, ptcWorld.z - 0.5),
      new THREE.Vector3(ptcWorld.x + 0.5, ptcWorld.y + 15.5, ptcWorld.z + 1.2),
      new THREE.Vector3(ptcWorld.x + 2.5, ptcWorld.y + 18.2, ptcWorld.z + 3.0),
      new THREE.Vector3(ptcWorld.x + 5.5, ptcWorld.y + 19.5, ptcWorld.z + 4.2),
      new THREE.Vector3(ptcWorld.x + 8.5, ptcWorld.y + 18.8, ptcWorld.z + 4.8),
      new THREE.Vector3(ptcWorld.x + 11.0, ptcWorld.y + 16.5, ptcWorld.z + 5.0),
      new THREE.Vector3(ptcWorld.x + 12.8, ptcWorld.y + 14.0, ptcWorld.z + 5.2)
    ];

    const curve = new THREE.CatmullRomCurve3(peptidePoints);
    const beadCount = this.aminoAcidCount;
    const samples = curve.getPoints(beadCount);

    const pearlColors = [
      0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946, 0x8338EC, 0x38B000, 0xFF006E
    ];

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
    }

    // Polypeptide backbone organic string
    const lineGeo = new THREE.TubeGeometry(curve, 54, 0.22, 8, false);
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xFFD166, roughness: 0.3 });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    this.peptideGroup.add(lineMesh);

    this.assemblyGroup.add(this.peptideGroup);
    this.origPeptidePos.copy(this.peptideGroup.position);
  }

  /**
   * Adds floating 3D labels for anatomical identification matching The Biology Primer diagram
   */
  buildFloatingLabels() {
    this.labelsGroup.clear();
    this.labels = [];

    const labelDefs = [
      { text: 'Growing polypeptide chain (protein)', color: '#4A1E6D', pos: new THREE.Vector3(8.0, 22.0, 5.0), key: 'nascent_peptide', w: 220, h: 44 },
      { text: '50S ribosomal RNA (rRNA)', color: '#7B1842', pos: new THREE.Vector3(-18.0, 10.0, 8.0), key: 'rrna_50s', w: 185, h: 46 },
      { text: '50S ribosomal proteins', color: '#1B4332', pos: new THREE.Vector3(18.0, 12.0, 6.0), key: 'proteins_50s', w: 175, h: 46 },
      { text: 'Peptidyl Transferase Center (PTC)', color: '#A06E00', pos: new THREE.Vector3(-2.0, 4.0, 8.0), key: 'ptc_core', w: 205, h: 44 },
      { text: 'tRNA (A, P, E sites)', color: '#1E5E4E', pos: new THREE.Vector3(8.0, 0.0, 9.0), key: 'trna_all', w: 155, h: 44 },
      { text: 'mRNA (messenger RNA)', color: '#7A2416', pos: new THREE.Vector3(-12.0, -2.0, 9.0), key: 'mrna_strand', w: 165, h: 44 },
      { text: '30S ribosomal RNA (rRNA)', color: '#0E4D57', pos: new THREE.Vector3(-16.0, -12.0, 8.0), key: 'rrna_30s', w: 185, h: 46 },
      { text: '30S ribosomal proteins', color: '#5E5A17', pos: new THREE.Vector3(18.0, -14.0, 6.0), key: 'proteins_30s', w: 175, h: 46 }
    ];

    labelDefs.forEach(def => {
      const mesh = this.createPillLabel(def.text, def.color, '#FFFFFF', def.w, def.h);
      mesh.position.copy(def.pos);
      mesh.userData.origPos = def.pos.clone();
      mesh.userData.componentKey = def.key;
      this.registerClickable(mesh, def.key);
      this.labelsGroup.add(mesh);
      this.labels.push(mesh);
    });
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
      this.spherical.radius = Math.max(20, Math.min(160, this.spherical.radius + e.deltaY * 0.08));
      this.updateCameraPosition();
    }, { passive: false });

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
    const meta = this.componentsMeta[key] || this.componentsMeta['ribosome_70s'];
    this.onSelectComponent(key, meta);

    // Pulse highlight selected mesh briefly
    this.clickableMeshes.forEach((m) => {
      if (m.userData.componentKey === key && m.material && m.material.emissive) {
        const origColor = m.material.emissive.getHex();
        m.material.emissive.setHex(0xFFD166);
        setTimeout(() => {
          if (m && m.material && m.material.emissive) m.material.emissive.setHex(origColor);
        }, 500);
      }
    });
  }

  focusComponent(key) {
    const targetMap = {
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
    this.spherical = { radius: 74, theta: 0.08, phi: 1.42 };
    this.target.set(0, 0, 0);
    this.updateCameraPosition();
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  toggleLabels() {
    if (this.labelsGroup) {
      this.labelsGroup.visible = !this.labelsGroup.visible;
      return this.labelsGroup.visible;
    }
    return true;
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

    // Offset labels
    this.labels.forEach((label) => {
      const orig = label.userData.origPos;
      const key = label.userData.componentKey;
      if (key === 'rrna_30s' || key === 'proteins_30s' || key === 'subunit_30s') {
        label.position.copy(orig).addScaledVector(this.dissociationAxis, dist * 0.95);
      } else if (key === 'rrna_50s' || key === 'proteins_50s' || key === 'subunit_50s' || key === 'ptc_core' || key === 'nascent_peptide') {
        label.position.copy(orig).addScaledVector(this.dissociationAxis, -dist * 0.85);
      } else if (key === 'mrna_strand') {
        label.position.copy(orig).addScaledVector(this.dissociationAxis, dist * 0.45);
      }
    });
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

    // Add glowing bead to peptide chain
    const colors = [0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946];
    const col = colors[this.aminoAcidCount % colors.length];
    const newBead = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 14, 14),
      new THREE.MeshStandardMaterial({ color: col, roughness: 0.18, metalness: 0.12 })
    );
    newBead.position.set(
      14.0 + (this.aminoAcidCount % 6) * 1.5,
      -14.0 + Math.sin(this.aminoAcidCount) * 1.5,
      -19.0 + (this.aminoAcidCount % 4) * 1.2
    );
    newBead.castShadow = true;
    if (this.peptideGroup) {
      this.peptideGroup.add(newBead);
      this.registerClickable(newBead, 'nascent_peptide');
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

    if (this.piece30S_rRNA) this.piece30S_rRNA.visible = isAll || filter === '30s_rrna' || filter === '30s';
    if (this.piece30S_Proteins) this.piece30S_Proteins.visible = isAll || filter === '30s_prot' || filter === '30s';
    if (this.piece50S_rRNA) this.piece50S_rRNA.visible = isAll || filter === '50s_rrna' || filter === '50s' || filter === 'tunnel';
    if (this.piece50S_Proteins) this.piece50S_Proteins.visible = isAll || filter === '50s_prot' || filter === '50s';
    if (this.piecePTC) this.piecePTC.visible = isAll || filter === '50s_rrna' || filter === '50s' || filter === 'ptc' || filter === 'tunnel';
    if (this.sparkMesh) this.sparkMesh.visible = isAll || filter === '50s_rrna' || filter === '50s' || filter === 'ptc' || filter === 'tunnel';
    if (this.pieceTRNA_A) this.pieceTRNA_A.visible = isAll || filter === 'trna';
    if (this.pieceTRNA_P) this.pieceTRNA_P.visible = isAll || filter === 'trna';
    if (this.pieceTRNA_E) this.pieceTRNA_E.visible = isAll || filter === 'trna';
    if (this.pieceMRNA) this.pieceMRNA.visible = isAll || filter === 'mrna';
    if (this.peptideGroup) this.peptideGroup.visible = isAll || filter === 'peptide' || filter === '50s' || filter === 'tunnel';

    // Synchronize 3D floating labels
    if (this.labels) {
      this.labels.forEach((label) => {
        const key = label.userData.componentKey;
        if (filter === 'all') {
          label.visible = true;
        } else if (filter === '50s_rrna' || filter === '50s') {
          label.visible = (key === 'rrna_50s' || key === 'subunit_50s');
        } else if (filter === '50s_prot') {
          label.visible = (key === 'proteins_50s');
        } else if (filter === '30s_rrna' || filter === '30s') {
          label.visible = (key === 'rrna_30s' || key === 'subunit_30s');
        } else if (filter === '30s_prot') {
          label.visible = (key === 'proteins_30s');
        } else if (filter === 'trna') {
          label.visible = (key === 'trna_all' || key === 'trna_a_site' || key === 'trna_p_site' || key === 'trna_e_site');
        } else if (filter === 'mrna') {
          label.visible = (key === 'mrna_strand');
        } else if (filter === 'ptc') {
          label.visible = (key === 'ptc_core');
        } else if (filter === 'peptide') {
          label.visible = (key === 'nascent_peptide');
        } else {
          label.visible = true;
        }
      });
    }
  }

  start() {
    this.active = true;
    this.handleResize();
    this.animate();
  }

  stop() {
    this.active = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  animate() {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate.bind(this));

    const delta = 0.016 * this.translationSpeed;

    if (!this.isPaused) {
      this.cycleTime += delta;

      // 1. Subtle biological breathing & micro-translocation oscillations of tRNAs
      if (this.pieceTRNA_A && this.pieceTRNA_P && this.pieceTRNA_E) {
        const bob = Math.sin(this.cycleTime * 3.5) * 0.25;
        this.pieceTRNA_A.position.y = this.origTRNA_APos.y + bob;
        this.pieceTRNA_P.position.y = this.origTRNA_PPos.y - bob * 0.4;
        this.pieceTRNA_E.position.y = this.origTRNA_EPos.y + Math.cos(this.cycleTime * 3.0) * 0.2;
      }

      // 2. mRNA continuous feed simulation
      if (this.pieceMRNA) {
        const mrnaShift = Math.sin(this.cycleTime * 1.8) * 0.30;
        this.pieceMRNA.position.x = this.origMRNAPos.x + mrnaShift;
      }

      // 3. Gentle waving of the nascent peptide chain outside the exit porthole
      if (this.peptideGroup) {
        this.peptideGroup.rotation.z = Math.sin(this.cycleTime * 1.2) * 0.02;
      }

      // 4. PTC catalytic pulse breathing
      if (this.piecePTC) {
        const pulse = 1.0 + Math.sin(this.cycleTime * 4.0) * 0.05;
        this.piecePTC.scale.set(pulse, pulse, pulse);
      }
    }

    // Keep labels facing the camera (billboard orientation)
    if (this.labels && this.camera) {
      this.labels.forEach((label) => {
        label.quaternion.copy(this.camera.quaternion);
      });
    }

    if (this.isAutoRotating) {
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
  }

  dispose() {
    this.stop();
    window.removeEventListener('resize', this.onWindowResizeBound);
    window.removeEventListener('pointermove', this.onPointerMoveBound);
    window.removeEventListener('pointerup', this.onPointerUpBound);
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
  }
}
