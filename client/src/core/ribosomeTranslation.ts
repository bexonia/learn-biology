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
    name: 'Complete 70S Bacterial Translating Ribosome (PDB: 7K00)',
    badge: 'TRANSLATION FACTORY (70S)',
    dims: 'Diameter: ~25 nm (250 Å), Mass: ~2.5 MDa (149,338 atoms in 7K00)',
    proteins: '3 rRNAs (16S, 23S, 5S) + 54 Ribosomal Proteins (uS2–bS21, uL1–bL36)',
    pdb: 'PDB: 7K00 (Watson et al., 2020 at 2.4 Å resolution), EMD-22637',
    desc: 'The universal ribozyme engine of protein synthesis solved at 2.4 Å by Cryo-EM. It translates genetic code in messenger RNA into amino acid polypeptides, coordinating 3 tRNAs across A, P, and E sites with 15–20 peptide bonds formed per second.'
  },
  'subunit_50s': {
    name: '50S Large Catalytic Subunit (23S + 5S rRNA + 34 Proteins)',
    badge: 'CATALYTIC RIBOZYME (50S)',
    dims: 'Dimensions: ~20 × 20 × 15 nm, Mass: ~1.6 MDa (91,673 atoms in 7K00)',
    proteins: '23S rRNA (chain a, 2,904 nt), 5S rRNA (chain b, 120 nt) + 34 Proteins (chains c–z, 0–4)',
    pdb: 'PDB: 7K00 (Chains a–z, 0–4)',
    desc: 'The catalytic power plant sculpted in moss green. Features the Peptidyl Transferase Center (PTC), the mobile L1 exit stalk (chains c, g), the L7/L12 factor recruitment stalk, and the ~100 Å polypeptide exit tunnel.'
  },
  'subunit_30s': {
    name: '30S Small Decoding Subunit (16S rRNA + 21 Proteins)',
    badge: 'DECODING CENTER (30S)',
    dims: 'Dimensions: ~15 × 12 × 10 nm, Mass: ~0.9 MDa (54,114 atoms in 7K00)',
    proteins: '16S rRNA (chain A, 1,542 nt) + 21 Ribosomal Proteins (chains B–U)',
    pdb: 'PDB: 7K00 (Chains A–U)',
    desc: 'The molecular proofreader in slate denim blue. Formed by Head, Body, and Platform domains, the 30S subunit binds the mRNA template and inspects strict Watson-Crick codon-anticodon base pairing.'
  },
  'mrna_strand': {
    name: 'Messenger RNA Template (Chain X Polyribonucleotide)',
    badge: 'GENETIC TEMPLATE',
    dims: 'Polyribonucleotide ribbon threading 5\' → 3\' through 30S cradle (275 atoms)',
    proteins: 'Direct transcript of genomic DNA via RNA Polymerase',
    pdb: 'PDB: 7K00 (Chain X)',
    desc: 'The genetic template strand in warm terracotta coral, clamped into the 30S decoding cradle. Codon triplets align with tRNA anticodon loops at the A, P, and E sites, stepping 1 codon per elongation cycle.'
  },
  'trna_a_site': {
    name: 'A-site Aminoacyl-tRNA (Val-tRNA, Chain Y)',
    badge: 'SUBSTRATE INLET (A-SITE)',
    dims: '76 nt, ~7 nm L-shaped tertiary fold (1,592 atoms)',
    proteins: 'Delivered by Elongation Factor Tu (EF-Tu·GTP)',
    pdb: 'PDB: 7K00 (Chain Y, Val-tRNA)',
    desc: 'The incoming charged tRNA sculpted in jewel violet. Docked into the A-site with its anticodon base-paired to the mRNA codon and its aminoacylated 3\' CCA terminal poised at the PTC for peptide bond synthesis.'
  },
  'trna_p_site': {
    name: 'P-site Peptidyl-tRNA (fMet-tRNA, Chain Z)',
    badge: 'PEPTIDE DONOR (P-SITE)',
    dims: '77 nt, ~7 nm L-shaped tertiary fold (1,642 atoms)',
    proteins: 'Peptidyl-tRNA holding nascent chain at 3\' CCA terminal',
    pdb: 'PDB: 7K00 (Chain Z, fMet-tRNA)',
    desc: 'The peptidyl-tRNA sculpted in jade teal standing in the central P-site. Holds the growing polypeptide chain before transferring it to the incoming A-site amino acid during peptidyl transfer.'
  },
  'trna_e_site': {
    name: 'E-site Deacylated tRNA (Exit Discharge)',
    badge: 'DISCHARGE OUTLET (E-SITE)',
    dims: '76 nt cloverleaf fold (docked to 23S rRNA E-site CCA pocket)',
    proteins: 'Deacylated / Uncharged tRNA',
    pdb: 'PDB: 7K00 (Chain 5 CCA terminal + aligned cloverleaf)',
    desc: 'The stripped tRNA in muted mauve. Discharged from its amino acid, it rests in the E-site archway and exits the ribosome into the cytoplasm through the mobile L1 stalk.'
  },
  'ptc_core': {
    name: 'Peptidyl Transferase Center (PTC Catalytic Core)',
    badge: 'CATALYTIC ACTIVE SITE',
    dims: 'Conserved catalytic pocket in Domain V of 23S rRNA',
    proteins: 'Pure RNA Ribozyme (Conserved Adenine 2451 & Cytosine 2452)',
    pdb: 'PDB: 7K00 (Chain a: A2451, C2452)',
    desc: 'The catalytic heart of the ribosome in golden amber. Catalyzes peptide bond condensation between amino acids via substrate positioning and entropic catalysis with zero protein residues directly involved in the active site.'
  },
  'exit_tunnel': {
    name: 'Polypeptide Exit Tunnel (uL4/uL22 Constriction Zone)',
    badge: 'EXIT CONDUIT',
    dims: 'Length: ~100 Å (~10 nm), Diameter: ~15 Å',
    proteins: 'Lined with 23S rRNA loops and protein beta-hairpins of uL4 and uL22',
    pdb: 'PDB: 7K00 (Chains a, d, v)',
    desc: 'The internal cylindrical conduit traversing through the 50S subunit. It terminates at the outer surface porthole from which the nascent protein emerges into the cytoplasm.'
  },
  'nascent_peptide': {
    name: 'Growing Nascent Polypeptide Chain',
    badge: 'SYNTHESIZED PROTEIN',
    dims: 'Glossy candy pearl amino acid beads on an organic string',
    proteins: 'Newly synthesized protein emerging from 50S exit porthole',
    pdb: 'PDB: 7K00',
    desc: 'The newly synthesized protein chain made of vibrant, glossy pearl beads extruding from the 50S exit porthole and folding gracefully into secondary structures in the cytoplasm.'
  }
};

export const RIBOSOME_TOUR_STOPS = [
  'ribosome_70s',
  'subunit_50s',
  'subunit_30s',
  'mrna_strand',
  'trna_a_site',
  'trna_p_site',
  'trna_e_site',
  'ptc_core',
  'exit_tunnel',
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
    this.piece50S = null;
    this.piece30S = null;
    this.pieceMRNA = null;
    this.pieceTRNA_A = null;
    this.pieceTRNA_P = null;
    this.pieceTRNA_E = null;
    this.piecePTC = null;

    // Original positions for exploded view
    this.orig50SPos = new THREE.Vector3();
    this.orig30SPos = new THREE.Vector3();
    this.origMRNAPos = new THREE.Vector3();
    this.origTRNA_APos = new THREE.Vector3();
    this.origTRNA_PPos = new THREE.Vector3();
    this.origTRNA_EPos = new THREE.Vector3();
    this.origPTCPos = new THREE.Vector3();

    // Intersubunit dissociation axis (50S -> 30S computed from 7K00 centers of mass)
    this.dissociationAxis = new THREE.Vector3(0.145, 0.876, 0.461).normalize();

    // Nascent Polypeptide & Tunnel
    this.peptideGroup = null;
    this.sparkMesh = null;
    this.contactShadowMesh = null;

    // Floating 3D Labels
    this.labels = [];

    // Interactive Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clickableMeshes = [];

    // Camera settings: Front-quarter theatrical view of the intersubunit cleft & arches
    this.spherical = { radius: 74, theta: 0.08, phi: 1.42 };
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

      // Orientation adjustment: Cryo-EM coordinates placed cleft along Y/Z axis.
      // Rotate slightly so the intersubunit cleft and three tRNAs face the theatrical camera
      model.rotation.set(-0.35, 0.15, -0.10);

      // Color taxonomy specifications
      const colorTaxonomy = {
        'Piece_50S_Large_Subunit': { color: 0x8DA873, roughness: 0.52, metalness: 0.04, key: 'subunit_50s' },
        'Piece_30S_Small_Subunit': { color: 0x53738C, roughness: 0.50, metalness: 0.05, key: 'subunit_30s' },
        'Piece_mRNA_Strand':       { color: 0xBA4E3B, roughness: 0.38, metalness: 0.08, key: 'mrna_strand' },
        'Piece_tRNA_A_Site':       { color: 0x8E5A8E, roughness: 0.35, metalness: 0.08, key: 'trna_a_site' },
        'Piece_tRNA_P_Site':       { color: 0x368F8B, roughness: 0.35, metalness: 0.08, key: 'trna_p_site' },
        'Piece_tRNA_E_Site':       { color: 0xA58A9E, roughness: 0.35, metalness: 0.08, key: 'trna_e_site' },
        'Piece_PTC_Active_Site':   { color: 0xFFB703, roughness: 0.22, metalness: 0.15, key: 'ptc_core', emissive: 0xFFA000, emissiveIntensity: 0.6 }
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
      this.piece50S = model.getObjectByName('Piece_50S_Large_Subunit');
      this.piece30S = model.getObjectByName('Piece_30S_Small_Subunit');
      this.pieceMRNA = model.getObjectByName('Piece_mRNA_Strand');
      this.pieceTRNA_A = model.getObjectByName('Piece_tRNA_A_Site');
      this.pieceTRNA_P = model.getObjectByName('Piece_tRNA_P_Site');
      this.pieceTRNA_E = model.getObjectByName('Piece_tRNA_E_Site');
      this.piecePTC = model.getObjectByName('Piece_PTC_Active_Site');

      // Cache initial native assembled positions for exploded view
      if (this.piece50S) this.orig50SPos.copy(this.piece50S.position);
      if (this.piece30S) this.orig30SPos.copy(this.piece30S.position);
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
   * through the 50S exit tunnel into the cytoplasmic milieu
   */
  buildNascentPolypeptide(scaleFactor = 2.2) {
    this.peptideGroup = new THREE.Group();
    this.peptideGroup.name = 'Nascent_Polypeptide_Chain';

    // Authentically computed trajectory from P-site CCA tip through exit tunnel porthole
    // Scaled to the 2.2 model dimension
    const peptidePoints = [
      new THREE.Vector3(0.54 * scaleFactor, -2.08 * scaleFactor, -0.81 * scaleFactor),   // Attached to P-tRNA CCA tip
      new THREE.Vector3(0.64 * scaleFactor, -3.03 * scaleFactor, -0.40 * scaleFactor),   // Inside catalytic PTC
      new THREE.Vector3(-0.6 * scaleFactor, -4.5 * scaleFactor, 1.8 * scaleFactor),     // Entering exit conduit
      new THREE.Vector3(-1.9 * scaleFactor, -5.7 * scaleFactor, 3.8 * scaleFactor),     // uL4 / uL22 constriction zone
      new THREE.Vector3(-0.5 * scaleFactor, -8.2 * scaleFactor, -2.0 * scaleFactor),    // Traversing lower tunnel
      new THREE.Vector3(0.64 * scaleFactor, -10.67 * scaleFactor, -9.65 * scaleFactor), // Emerging through exit porthole
      new THREE.Vector3(1.8 * scaleFactor, -14.0 * scaleFactor, -13.5 * scaleFactor),   // In cytoplasm
      new THREE.Vector3(4.2 * scaleFactor, -16.5 * scaleFactor, -16.0 * scaleFactor),
      new THREE.Vector3(7.5 * scaleFactor, -18.0 * scaleFactor, -17.5 * scaleFactor),
      new THREE.Vector3(10.8 * scaleFactor, -17.2 * scaleFactor, -18.2 * scaleFactor),
      new THREE.Vector3(13.5 * scaleFactor, -14.8 * scaleFactor, -18.8 * scaleFactor)
    ];

    const curve = new THREE.CatmullRomCurve3(peptidePoints);
    const beadCount = this.aminoAcidCount;
    const samples = curve.getPoints(beadCount);

    // Glossy pearl amino acid colors: Royal Violet, Blue, Jade, Amber, Coral, Ruby
    const pearlColors = [
      0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946, 0x8338EC, 0x38B000, 0xFF006E
    ];

    const beadGeo = new THREE.SphereGeometry(1.2, 14, 14);

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
    const lineGeo = new THREE.TubeGeometry(curve, 54, 0.28, 8, false);
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xFFD166, roughness: 0.3 });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    this.peptideGroup.add(lineMesh);

    this.assemblyGroup.add(this.peptideGroup);
  }

  /**
   * Adds floating 3D labels for anatomical identification
   */
  buildFloatingLabels() {
    this.labelsGroup.clear();
    this.labels = [];

    const labelDefs = [
      { text: '50S Subunit', color: '#1D3B1C', pos: new THREE.Vector3(-14, -6, 12), key: 'subunit_50s', w: 140, h: 48 },
      { text: '30S Subunit', color: '#223B4E', pos: new THREE.Vector3(12, 14, -16), key: 'subunit_30s', w: 140, h: 48 },
      { text: 'E Site', color: '#5A3854', pos: new THREE.Vector3(-3.0, -14.0, 3.5), key: 'trna_e_site', w: 76, h: 42 },
      { text: 'P Site', color: '#1B4D4B', pos: new THREE.Vector3(7.5, -3.5, -1.0), key: 'trna_p_site', w: 76, h: 42 },
      { text: 'A Site', color: '#4E2C4E', pos: new THREE.Vector3(8.5, 4.5, -4.0), key: 'trna_a_site', w: 76, h: 42 },
      { text: 'mRNA (5\'→3\')', color: '#7A2416', pos: new THREE.Vector3(5.5, -2.0, -14.0), key: 'mrna_strand', w: 144, h: 44 },
      { text: 'PTC Core', color: '#A06E00', pos: new THREE.Vector3(3.5, 3.0, 8.0), key: 'ptc_core', w: 96, h: 42 }
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
      'subunit_30s': { radius: 52, theta: 0.15, phi: 1.48, target: new THREE.Vector3(1.38, 3.47, -14.57) },
      'subunit_50s': { radius: 64, theta: -0.10, phi: 1.35, target: new THREE.Vector3(2.36, -1.77, 8.02) },
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

    // Displace 30S forward and along dissociation axis
    if (this.piece30S) {
      this.piece30S.position.copy(this.orig30SPos).addScaledVector(this.dissociationAxis, dist * 0.95);
    }
    // Displace 50S backward along dissociation axis
    if (this.piece50S) {
      this.piece50S.position.copy(this.orig50SPos).addScaledVector(this.dissociationAxis, -dist * 0.85);
    }
    // PTC moves with 50S
    if (this.piecePTC) {
      this.piecePTC.position.copy(this.origPTCPos).addScaledVector(this.dissociationAxis, -dist * 0.85);
    }
    if (this.sparkMesh && this.piecePTC) {
      this.sparkMesh.position.copy(this.piecePTC.position);
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
      if (label.userData.componentKey === 'subunit_30s') {
        label.position.copy(orig).addScaledVector(this.dissociationAxis, dist * 0.95);
      } else if (label.userData.componentKey === 'subunit_50s') {
        label.position.copy(orig).addScaledVector(this.dissociationAxis, -dist * 0.85);
      } else if (label.userData.componentKey === 'mrna_strand') {
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

    if (this.piece30S) this.piece30S.visible = isAll || filter === '30s';
    if (this.piece50S) this.piece50S.visible = isAll || filter === '50s' || filter === 'tunnel';
    if (this.piecePTC) this.piecePTC.visible = isAll || filter === '50s' || filter === 'tunnel';
    if (this.pieceTRNA_A) this.pieceTRNA_A.visible = isAll || filter === 'trna';
    if (this.pieceTRNA_P) this.pieceTRNA_P.visible = isAll || filter === 'trna';
    if (this.pieceTRNA_E) this.pieceTRNA_E.visible = isAll || filter === 'trna';
    if (this.pieceMRNA) this.pieceMRNA.visible = isAll || filter === 'mrna';
    if (this.peptideGroup) this.peptideGroup.visible = isAll || filter === '50s' || filter === 'tunnel';

    // Synchronize 3D floating labels
    if (this.labels) {
      this.labels.forEach((label) => {
        const key = label.userData.componentKey;
        if (filter === 'all') {
          label.visible = true;
        } else if (filter === '30s') {
          label.visible = (key === 'subunit_30s' || key === 'mrna_strand');
        } else if (filter === '50s') {
          label.visible = (key === 'subunit_50s' || key === 'ptc_core');
        } else if (filter === 'trna') {
          label.visible = (key === 'trna_a_site' || key === 'trna_p_site' || key === 'trna_e_site');
        } else if (filter === 'mrna') {
          label.visible = (key === 'mrna_strand' || key === 'subunit_30s');
        } else if (filter === 'tunnel') {
          label.visible = (key === 'subunit_50s' || key === 'ptc_core');
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
