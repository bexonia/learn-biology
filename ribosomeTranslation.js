/**
 * ----------------------------------------------------------------------------
 * Bacterial 70S Ribosome & Polypeptide Translation Factory — 3D Scenario
 * Based on authentic Cryo-EM & X-ray crystallography (PDB: 7K00, 6X9Q, 4V4Q)
 *
 * Components modeled:
 * - 30S Small Subunit (16S rRNA head/body/platform + 21 proteins uS2–bS21)
 * - 50S Large Subunit (23S/5S rRNA ribozyme, central protuberance, L1/L7 stalks, exit tunnel)
 * - mRNA Strand (single-stranded ribonucleotide ribbon with codon triplets)
 * - tRNAs at A-Site (Aminoacyl), P-Site (Peptidyl), and E-Site (Exit)
 * - Peptidyl Transferase Center (PTC) Catalytic Ribozyme Core
 * - Polypeptide Exit Tunnel & Growing Nascent Protein Chain
 * - 4-Phase Kinetic Elongation Cycle (Decoding, Transpeptidation, Translocation, Discharge)
 * ----------------------------------------------------------------------------
 */

export class RibosomeScene {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.voiceService = options.voiceService || window.voiceService;
    this.onSelectComponent = options.onSelectComponent || (() => {});

    // State
    this.active = false;
    this.translationSpeed = 1.0; // 1.0 = normal (15 aa/s visual rhythm)
    this.isPaused = false;
    this.explodedProgress = 0.0; // 0.0 = assembled, 1.0 = fully disassembled
    this.selectedComponentKey = null;
    this.activeSubunitFilter = 'all'; // 'all', '30s', '50s', 'trna', 'mrna', 'tunnel'

    // Elongation cycle state
    this.cyclePhase = 0; // 0: A-site arrival, 1: peptide bond, 2: translocation, 3: exit discharge
    this.cycleTime = 0.0;
    this.codonStep = 0;
    this.aminoAcidCount = 14;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;

    // Groups
    this.rootGroup = null;
    this.subunit30SGroup = null;
    this.subunit50SGroup = null;
    this.mrnaGroup = null;
    this.trnaGroup = null;
    this.trnaA = null;
    this.trnaP = null;
    this.trnaE = null;
    this.peptideGroup = null;
    this.ptcActiveSiteMesh = null;
    this.exitTunnelGroup = null;
    this.tunnelCutawayMesh = null;

    // Interactive Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clickableMeshes = [];

    // Camera Orbit Controls
    this.spherical = { radius: 85, theta: 0.65, phi: 1.25 };
    this.target = new THREE.Vector3(0, 0, 0);
    this.isPointerDown = false;
    this.pointerStart = { x: 0, y: 0 };

    // Codex Database
    this.componentsMeta = this.buildComponentsDatabase();
  }

  buildComponentsDatabase() {
    return {
      'ribosome_70s': {
        name: 'Complete 70S Bacterial Ribosome Holoenzyme',
        badge: 'TRANSLATION FACTORY (70S)',
        dims: 'Diameter: ~25 nm, Mass: ~2.5 MDa (65% RNA, 35% Protein)',
        proteins: '3 rRNAs (16S, 23S, 5S) + 54 Ribosomal Proteins (uS2–bS21, uL1–bL36)',
        pdb: 'PDB: 7K00, 6X9Q (Expressome), 4V4Q',
        desc: 'The universal ribozyme engine of protein synthesis. It translates genetic information encoded in messenger RNA into amino acid polypeptides, consuming 2 GTP and 2 ATP per peptide bond with an elongation rate of ~15–20 amino acids per second.'
      },
      'subunit_30s': {
        name: '30S Small Decoding Subunit',
        badge: 'DECODOSOME (30S)',
        dims: 'Dimensions: ~15 × 12 × 10 nm, Mass: ~0.9 MDa',
        proteins: '16S rRNA (~1,542 nt) + 21 Ribosomal Proteins (uS2–bS21)',
        pdb: 'PDB 7K00, 1FKA, 4V4Q',
        desc: 'The molecular proofreader and decoding module. Formed by Head, Body, and Platform domains, the 30S subunit binds mRNA and inspects cognate codon-anticodon base pairing at adenine bases A1492 and A1493.'
      },
      'subunit_50s': {
        name: '50S Large Catalytic Subunit',
        badge: 'CATALYTIC RIBOZYME (50S)',
        dims: 'Dimensions: ~20 × 20 × 15 nm, Mass: ~1.6 MDa',
        proteins: '23S rRNA (~2,904 nt), 5S rRNA (120 nt) + 33 Proteins (uL1–bL36)',
        pdb: 'PDB 7K00, 1FFK, 6X9Q',
        desc: 'The catalytic power plant containing the Peptidyl Transferase Center (PTC). It links amino acids via planar amide peptide bonds and channels the growing polypeptide chain through its interior exit tunnel.'
      },
      'trna_a_site': {
        name: 'Aminoacyl-tRNA (A-Site: Decoding & Acceptance)',
        badge: 'SUBSTRATE INLET (A-SITE)',
        dims: 'L-shaped cloverleaf: 76 nt, ~7 nm span',
        proteins: 'Delivered by Elongation Factor Tu (EF-Tu·GTP)',
        pdb: 'PDB 7K00, 6X9Q',
        desc: 'Holds the incoming amino acid. Delivered as a ternary complex (EF-Tu·GTP·aa-tRNA), it docks into the 30S decoding center to test matching between its anticodon triplet and the mRNA codon.'
      },
      'trna_p_site': {
        name: 'Peptidyl-tRNA (P-Site: Growing Chain Donor)',
        badge: 'PEPTIDE DONOR (P-SITE)',
        dims: 'L-shaped cloverleaf: 76 nt, ~7 nm span',
        proteins: 'Peptidyl-tRNA covalently linked to nascent polypeptide',
        pdb: 'PDB 7K00, 4V4Q',
        desc: 'Holds the nascent polypeptide chain. In the PTC active site, its ester linkage is attacked by the A-site amino group, transferring the entire growing chain onto the A-site tRNA.'
      },
      'trna_e_site': {
        name: 'Deacylated tRNA (E-Site: Exit Discharge)',
        badge: 'DISCHARGE OUTLET (E-SITE)',
        dims: 'L-shaped cloverleaf: 76 nt, ~7 nm span',
        proteins: 'Uncharged / Deacylated tRNA',
        pdb: 'PDB 7K00, 6X9Q',
        desc: 'Holds the stripped tRNA after transpeptidation. Coordinated by the L1 stalk of the 50S subunit, it is discharged into the cytoplasm to be re-charged by aminoacyl-tRNA synthetases.'
      },
      'mrna_strand': {
        name: 'Messenger RNA (mRNA Template Ribbon)',
        badge: 'GENETIC TEMPLATE',
        dims: 'Single-stranded polyribonucleotide strand (5\' → 3\')',
        proteins: 'Transcribed by RNA Polymerase (6O9L)',
        pdb: 'PDB 6X9Q (Expressome Architecture)',
        desc: 'The single-stranded transcriptional transcript of the bacterial chromosome. Threaded through the 30S shoulder latch, it advances precisely 1 codon (3 nucleotides = ~1 nm) per translocation cycle.'
      },
      'ptc_core': {
        name: 'Peptidyl Transferase Center (PTC Ribozyme)',
        badge: 'CATALYTIC ACTIVE SITE',
        dims: 'Radius: ~1.2 nm active pocket',
        proteins: 'Domain V of 23S rRNA (A2451, U2506, U2585) — Pure RNA Catalysis',
        pdb: 'PDB 1FFK, 7K00',
        desc: 'The catalytic heart of the ribosome. Notably, there are no protein residues within 18 Å of this active site—proving that the ribosome is an authentic primordial RNA ribozyme.'
      },
      'exit_tunnel': {
        name: 'Polypeptide Exit Tunnel & L4/L22 Constriction Gate',
        badge: 'EXIT CHANNEL',
        dims: 'Length: ~100 Å (~10 nm), Diameter: ~15 Å',
        proteins: 'Lined with 23S rRNA and proteins uL4 and uL22',
        pdb: 'PDB 7K00, 6X9Q',
        desc: 'The cylindrical conduit passing through the 50S subunit. It protects the nascent chain from premature folding or aggregation until it emerges into the cytoplasm to encounter trigger factor chaperones.'
      },
      'nascent_peptide': {
        name: 'Nascent Polypeptide Chain & Protein Folding',
        badge: 'SYNTHESIZED PRODUCT',
        dims: 'Bead-and-spring amino acid polymer (3.8 Å per residue)',
        proteins: 'Emerging nascent protein folding into secondary structures',
        pdb: 'PDB 7K00',
        desc: 'The newly synthesized protein. Extruded through the exit tunnel at 15 residues per second, hydrophobic residues immediately begin forming alpha-helices upon encountering cytosolic water.'
      }
    };
  }

  init() {
    this.setupScene();
    this.setupLighting();
    this.build30SSubunit();
    this.build50SSubunit();
    this.buildMRNA();
    this.buildTRNAs();
    this.buildPeptideAndTunnel();
    this.setupInteraction();
  }

  setupScene() {
    const rect = this.container.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    const h = rect.height || (window.innerHeight - 180);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xF5F7F6);

    this.camera = new THREE.PerspectiveCamera(40, w / h, 0.5, 1000);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.canvas = this.renderer.domElement;
    this.canvas.id = 'ribosome-canvas';
    this.container.appendChild(this.canvas);

    this.rootGroup = new THREE.Group();
    this.rootGroup.name = 'Ribosome_Root';
    this.scene.add(this.rootGroup);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
    keyLight.position.set(70, 110, 80);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xD8EEF8, 0.45);
    fillLight.position.set(-80, 50, -60);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xFFE8D6, 0.35);
    rimLight.position.set(0, -60, -90);
    this.scene.add(rimLight);
  }

  /**
   * Builds the 30S Small Subunit (Decodosome)
   * 16S rRNA body/head/platform + uS2-bS21 proteins (Vivid Jade Green #06D6A0)
   */
  build30SSubunit() {
    this.subunit30SGroup = new THREE.Group();
    this.subunit30SGroup.name = 'Subunit_30S_Group';

    const rnaMaterial = new THREE.MeshStandardMaterial({
      color: 0x90C8B8,
      roughness: 0.35,
      metalness: 0.08
    });

    const proteinMaterial = new THREE.MeshStandardMaterial({
      color: 0x06D6A0, // Vivid Jade / Seafoam Green
      roughness: 0.32,
      metalness: 0.12
    });

    // 30S Body (Lower domain)
    const bodyGeo = new THREE.DodecahedronGeometry(13, 2);
    bodyGeo.scale(1.1, 1.4, 0.75);
    const bodyMesh = new THREE.Mesh(bodyGeo, rnaMaterial);
    bodyMesh.position.set(-6, -8, 8);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    this.registerClickable(bodyMesh, 'subunit_30s');
    this.subunit30SGroup.add(bodyMesh);

    // 30S Head (Upper mobile domain)
    const headGeo = new THREE.DodecahedronGeometry(9, 2);
    headGeo.scale(1.2, 0.9, 0.85);
    const headMesh = new THREE.Mesh(headGeo, proteinMaterial);
    headMesh.position.set(-5, 9, 8);
    headMesh.rotation.z = 0.15;
    headMesh.castShadow = true;
    this.registerClickable(headMesh, 'subunit_30s');
    this.subunit30SGroup.add(headMesh);

    // 30S Platform (Lateral ledge supporting tRNA anticodons)
    const platformGeo = new THREE.CylinderGeometry(5.5, 7.5, 9, 16);
    platformGeo.scale(0.8, 1.0, 1.1);
    const platformMesh = new THREE.Mesh(platformGeo, rnaMaterial);
    platformMesh.position.set(-16, 2, 7);
    platformMesh.rotation.z = -0.4;
    platformMesh.castShadow = true;
    this.registerClickable(platformMesh, 'subunit_30s');
    this.subunit30SGroup.add(platformMesh);

    // Decoding Center Cleft (Where mRNA meets tRNAs)
    const cleftGeo = new THREE.BoxGeometry(10, 4, 3);
    const cleftMat = new THREE.MeshStandardMaterial({
      color: 0xFFD166,
      emissive: 0x886600,
      emissiveIntensity: 0.25,
      roughness: 0.2
    });
    const cleftMesh = new THREE.Mesh(cleftGeo, cleftMat);
    cleftMesh.position.set(-4, 1, 3.5);
    this.registerClickable(cleftMesh, 'subunit_30s');
    this.subunit30SGroup.add(cleftMesh);

    // Surface peripheral protein nodules (uS2 through bS21)
    const noduleGeo = new THREE.SphereGeometry(2.4, 12, 12);
    const noduleOffsets = [
      [-12, 12, 11], [-3, 16, 9], [3, 8, 10], [-14, -6, 10],
      [4, -12, 9], [-10, -18, 7], [2, -4, 11], [-7, 3, 12]
    ];
    noduleOffsets.forEach(([x, y, z]) => {
      const nodule = new THREE.Mesh(noduleGeo, proteinMaterial);
      nodule.position.set(x, y, z);
      nodule.castShadow = true;
      this.registerClickable(nodule, 'subunit_30s');
      this.subunit30SGroup.add(nodule);
    });

    this.rootGroup.add(this.subunit30SGroup);
  }

  /**
   * Builds the 50S Large Subunit (Ribozyme Core)
   * 23S/5S rRNA + 33 proteins (Deep Royal Blue #0077B6)
   */
  build50SSubunit() {
    this.subunit50SGroup = new THREE.Group();
    this.subunit50SGroup.name = 'Subunit_50S_Group';

    const rna50SMaterial = new THREE.MeshStandardMaterial({
      color: 0x4895EF,
      roughness: 0.35,
      metalness: 0.08
    });

    const protein50SMaterial = new THREE.MeshStandardMaterial({
      color: 0x0077B6, // Deep Marine / Royal Blue
      roughness: 0.28,
      metalness: 0.15
    });

    // 50S Main Crown Body
    const mainBodyGeo = new THREE.DodecahedronGeometry(18, 2);
    mainBodyGeo.scale(1.25, 1.25, 0.9);
    const mainBodyMesh = new THREE.Mesh(mainBodyGeo, rna50SMaterial);
    mainBodyMesh.position.set(4, 0, -8);
    mainBodyMesh.castShadow = true;
    mainBodyMesh.receiveShadow = true;
    this.registerClickable(mainBodyMesh, 'subunit_50s');
    this.subunit50SGroup.add(mainBodyMesh);

    // Central Protuberance (CP - top crown summit, housing 5S rRNA)
    const cpGeo = new THREE.CylinderGeometry(5.5, 9, 12, 16);
    const cpMesh = new THREE.Mesh(cpGeo, protein50SMaterial);
    cpMesh.position.set(4, 18, -7);
    cpMesh.castShadow = true;
    this.registerClickable(cpMesh, 'subunit_50s');
    this.subunit50SGroup.add(cpMesh);

    // L1 Stalk (Mobile arm that coordinates E-site tRNA release)
    const l1StalkGeo = new THREE.CylinderGeometry(2.8, 3.8, 14, 12);
    const l1StalkMesh = new THREE.Mesh(l1StalkGeo, protein50SMaterial);
    l1StalkMesh.position.set(-16, 12, -6);
    l1StalkMesh.rotation.z = 0.55;
    l1StalkMesh.rotation.x = -0.2;
    l1StalkMesh.castShadow = true;
    this.registerClickable(l1StalkMesh, 'subunit_50s');
    this.subunit50SGroup.add(l1StalkMesh);

    // L7/L12 Stalk (Elongation factor recruitment stalk)
    const l7StalkGeo = new THREE.CylinderGeometry(2.6, 4.0, 16, 12);
    const l7StalkMesh = new THREE.Mesh(l7StalkGeo, protein50SMaterial);
    l7StalkMesh.position.set(22, 11, -5);
    l7StalkMesh.rotation.z = -0.65;
    l7StalkMesh.castShadow = true;
    this.registerClickable(l7StalkMesh, 'subunit_50s');
    this.subunit50SGroup.add(l7StalkMesh);

    // Peptidyl Transferase Center (PTC) Catalytic Ribozyme Cavity
    const ptcGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const ptcMat = new THREE.MeshStandardMaterial({
      color: 0xFFB703, // Golden Amber
      emissive: 0xFF9E00,
      emissiveIntensity: 0.45,
      roughness: 0.18
    });
    this.ptcActiveSiteMesh = new THREE.Mesh(ptcGeo, ptcMat);
    this.ptcActiveSiteMesh.position.set(1.5, 2, -1.5);
    this.registerClickable(this.ptcActiveSiteMesh, 'ptc_core');
    this.subunit50SGroup.add(this.ptcActiveSiteMesh);

    this.rootGroup.add(this.subunit50SGroup);
  }

  /**
   * Builds the mRNA Ribbon passing through the 30S decoding slot
   */
  buildMRNA() {
    this.mrnaGroup = new THREE.Group();
    this.mrnaGroup.name = 'mRNA_Strand_Group';

    // Ribonucleotide backbone curve (5' -> 3')
    const curvePoints = [];
    for (let i = -24; i <= 24; i += 2) {
      const x = i;
      const y = Math.sin(i * 0.22) * 2.2 + 0.5;
      const z = Math.cos(i * 0.18) * 1.8 + 3.2;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }
    const path = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(path, 48, 0.7, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x00F5D4, // Luminous Cyan
      emissive: 0x00B4D8,
      emissiveIntensity: 0.25,
      roughness: 0.25
    });
    const mrnaMesh = new THREE.Mesh(tubeGeo, tubeMat);
    this.registerClickable(mrnaMesh, 'mrna_strand');
    this.mrnaGroup.add(mrnaMesh);

    // Codon tick marks (triplet base notches)
    const tickGeo = new THREE.CylinderGeometry(0.35, 0.35, 2.2, 6);
    const tickMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.3 });
    for (let i = -18; i <= 18; i += 3) {
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(i, Math.sin(i * 0.22) * 2.2 + 1.6, 3.2);
      this.mrnaGroup.add(tick);
    }

    this.rootGroup.add(this.mrnaGroup);
  }

  /**
   * Creates an authentic L-shaped tRNA model with CCA-3' acceptor stem & anticodon loop
   */
  createTRNAMesh(colorHex, name, componentKey) {
    const group = new THREE.Group();
    group.name = name;

    const trnaMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.3,
      metalness: 0.12
    });

    // Vertical D/T-Arm & Acceptor Stem
    const stemGeo = new THREE.CylinderGeometry(1.2, 1.4, 11, 10);
    const stemMesh = new THREE.Mesh(stemGeo, trnaMat);
    stemMesh.position.set(0, 5.5, 0);
    group.add(stemMesh);

    // Horizontal Anticodon Arm (forms the 90-degree 'L' corner)
    const armGeo = new THREE.CylinderGeometry(1.1, 1.3, 8.5, 10);
    const armMesh = new THREE.Mesh(armGeo, trnaMat);
    armMesh.rotation.z = Math.PI / 2;
    armMesh.position.set(4, 0.6, 0);
    group.add(armMesh);

    // Anticodon Loop Tip (touches mRNA in 30S cleft)
    const anticodonGeo = new THREE.SphereGeometry(1.6, 12, 12);
    const anticodonMesh = new THREE.Mesh(anticodonGeo, new THREE.MeshStandardMaterial({
      color: 0xFFE66D,
      roughness: 0.2
    }));
    anticodonMesh.position.set(8.2, 0.6, 0);
    group.add(anticodonMesh);

    // CCA-3' Acceptor Stem Tip with ester-linked Amino Acid
    const aaGeo = new THREE.SphereGeometry(1.8, 12, 12);
    const aaMesh = new THREE.Mesh(aaGeo, new THREE.MeshStandardMaterial({
      color: 0xE63946, // Red/crimson amino acid monomer
      roughness: 0.2,
      emissive: 0x771111,
      emissiveIntensity: 0.2
    }));
    aaMesh.position.set(0, 11.5, 0);
    group.add(aaMesh);

    // Register all children for click inspection
    group.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        this.registerClickable(child, componentKey);
      }
    });

    return group;
  }

  /**
   * Builds the 3 simultaneous tRNAs: A-Site, P-Site, and E-Site
   */
  buildTRNAs() {
    this.trnaGroup = new THREE.Group();
    this.trnaGroup.name = 'tRNA_Cluster_Group';

    // A-Site tRNA: Bright Golden Amber (#FFB703)
    this.trnaA = this.createTRNAMesh(0xFFB703, 'tRNA_A_Site', 'trna_a_site');
    this.trnaA.position.set(6, 1, 2.5);
    this.trnaA.rotation.set(-0.35, 0.45, 0.2);
    this.trnaGroup.add(this.trnaA);

    // P-Site tRNA: Coral Flame (#E76F51)
    this.trnaP = this.createTRNAMesh(0xE76F51, 'tRNA_P_Site', 'trna_p_site');
    this.trnaP.position.set(0, 1.2, 1.8);
    this.trnaP.rotation.set(-0.25, 0.15, 0.05);
    this.trnaGroup.add(this.trnaP);

    // E-Site tRNA: Muted Lavender (#B5838D)
    this.trnaE = this.createTRNAMesh(0xB5838D, 'tRNA_E_Site', 'trna_e_site');
    this.trnaE.position.set(-6.5, 1.8, 1.2);
    this.trnaE.rotation.set(-0.15, -0.25, -0.15);
    this.trnaGroup.add(this.trnaE);

    this.rootGroup.add(this.trnaGroup);
  }

  /**
   * Builds the Polypeptide Exit Tunnel & Extruding Nascent Protein Chain
   */
  buildPeptideAndTunnel() {
    this.exitTunnelGroup = new THREE.Group();
    this.exitTunnelGroup.name = 'Exit_Tunnel_Group';

    // Tunnel cylindrical cavity cutaway through 50S subunit
    const tunnelPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.5, 2, -1.5),   // PTC origin
      new THREE.Vector3(2.5, -4, -6),   // L4/L22 constriction gate
      new THREE.Vector3(2.0, -12, -12), // Lower cylinder
      new THREE.Vector3(0.5, -18, -18)  // Cytoplasmic exit vestibule
    ]);

    const tunnelGeo = new THREE.TubeGeometry(tunnelPath, 24, 3.2, 16, false);
    const tunnelMat = new THREE.MeshStandardMaterial({
      color: 0x3A506B,
      roughness: 0.45,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.42
    });
    this.tunnelCutawayMesh = new THREE.Mesh(tunnelGeo, tunnelMat);
    this.registerClickable(this.tunnelCutawayMesh, 'exit_tunnel');
    this.exitTunnelGroup.add(this.tunnelCutawayMesh);

    // Growing Nascent Polypeptide Chain (multi-colored amino acid beads)
    this.peptideGroup = new THREE.Group();
    this.peptideGroup.name = 'Nascent_Polypeptide_Chain';

    const beadGeo = new THREE.SphereGeometry(1.2, 12, 12);
    const aminoColors = [
      0xE63946, 0xF1FAEE, 0xA8DADC, 0x457B9D, 0x1D3557,
      0xFFB703, 0xFB8500, 0x06D6A0, 0x9D4EDD, 0xE76F51
    ];

    const tunnelSamples = tunnelPath.getPoints(this.aminoAcidCount);
    for (let i = 0; i < tunnelSamples.length; i++) {
      const col = aminoColors[i % aminoColors.length];
      const bead = new THREE.Mesh(beadGeo, new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.25
      }));
      bead.position.copy(tunnelSamples[i]);
      this.registerClickable(bead, 'nascent_peptide');
      this.peptideGroup.add(bead);
    }

    this.exitTunnelGroup.add(this.peptideGroup);
    this.subunit50SGroup.add(this.exitTunnelGroup);
  }

  setupInteraction() {
    this.canvas.addEventListener('pointerdown', (e) => {
      this.isPointerDown = true;
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isPointerDown) return;
      const dx = e.clientX - this.pointerStart.x;
      const dy = e.clientY - this.pointerStart.y;
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;

      this.spherical.theta -= dx * 0.007;
      this.spherical.phi = Math.max(0.15, Math.min(Math.PI - 0.15, this.spherical.phi + dy * 0.007));
      this.updateCameraPosition();
    });

    window.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.spherical.radius = Math.max(30, Math.min(180, this.spherical.radius + e.deltaY * 0.08));
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

  registerClickable(mesh, key) {
    mesh.userData.componentKey = key;
    this.clickableMeshes.push(mesh);
  }

  selectComponent(key) {
    this.selectedComponentKey = key;
    const meta = this.componentsMeta[key] || this.componentsMeta['ribosome_70s'];
    this.onSelectComponent(key, meta);

    // Highlight selected mesh briefly with pulse
    this.clickableMeshes.forEach((m) => {
      if (m.userData.componentKey === key && m.material && m.material.emissive) {
        const origColor = m.material.emissive.getHex();
        m.material.emissive.setHex(0xFFD166);
        setTimeout(() => {
          if (m && m.material && m.material.emissive) m.material.emissive.setHex(origColor);
        }, 600);
      }
    });
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

  setExplodedProgress(val) {
    this.explodedProgress = Math.max(0.0, Math.min(1.0, val));
    const dist = this.explodedProgress * 28; // Displace up to 28 nm

    if (this.subunit30SGroup) {
      this.subunit30SGroup.position.z = dist; // Pull 30S forward (+Z)
    }
    if (this.subunit50SGroup) {
      this.subunit50SGroup.position.z = -dist * 0.7; // Push 50S backward (-Z)
    }
    if (this.mrnaGroup) {
      this.mrnaGroup.position.z = dist * 0.6; // mRNA travels partially with 30S
    }
    if (this.trnaGroup) {
      // Float tRNAs in mid-cleft with dynamic separation
      this.trnaA.position.x = 6 + this.explodedProgress * 8;
      this.trnaE.position.x = -6.5 - this.explodedProgress * 8;
    }
    if (this.tunnelCutawayMesh) {
      // Reveal exit tunnel cross-section more visibly in exploded view
      this.tunnelCutawayMesh.material.opacity = 0.42 + this.explodedProgress * 0.45;
    }
  }

  setTranslationSpeed(val) {
    this.translationSpeed = Math.max(0.1, Math.min(3.0, val));
  }

  stepCodon() {
    this.codonStep++;
    this.aminoAcidCount++;

    // Add amino acid bead to peptide chain
    const bead = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xFB8500, roughness: 0.25 })
    );
    bead.position.set(1.5, 2 - (this.aminoAcidCount % 12) * 1.5, -1.5 - (this.aminoAcidCount % 12) * 1.2);
    this.peptideGroup.add(bead);
    this.registerClickable(bead, 'nascent_peptide');

    // Trigger pulse at PTC
    if (this.ptcActiveSiteMesh) {
      this.ptcActiveSiteMesh.scale.set(1.4, 1.4, 1.4);
      setTimeout(() => this.ptcActiveSiteMesh.scale.set(1.0, 1.0, 1.0), 300);
    }
  }

  setSubunitFilter(filter) {
    this.activeSubunitFilter = filter;
    const isAll = filter === 'all';

    if (this.subunit30SGroup) this.subunit30SGroup.visible = isAll || filter === '30s';
    if (this.subunit50SGroup) this.subunit50SGroup.visible = isAll || filter === '50s' || filter === 'tunnel';
    if (this.trnaGroup) this.trnaGroup.visible = isAll || filter === 'trna';
    if (this.mrnaGroup) this.mrnaGroup.visible = isAll || filter === 'mrna';
    if (this.exitTunnelGroup) this.exitTunnelGroup.visible = isAll || filter === '50s' || filter === 'tunnel';
  }

  start() {
    this.active = true;
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
      
      // Dynamic catalytic breathing & tRNA micro-movements
      if (this.trnaA && this.trnaP && this.trnaE) {
        const bob = Math.sin(this.cycleTime * 4.0) * 0.45;
        this.trnaA.position.y = 1.0 + bob;
        this.trnaP.position.y = 1.2 - bob * 0.5;
        this.trnaE.position.y = 1.8 + Math.cos(this.cycleTime * 3.5) * 0.35;
      }

      // 30S Subunit micro-ratcheting rotation (~3 degrees)
      if (this.subunit30SGroup && this.explodedProgress === 0) {
        this.subunit30SGroup.rotation.y = Math.sin(this.cycleTime * 2.5) * 0.04;
      }

      // mRNA continuous feed simulation
      if (this.mrnaGroup) {
        this.mrnaGroup.position.x = (Math.sin(this.cycleTime * 1.5) * 0.6);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const rect = this.container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }
}
