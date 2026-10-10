// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial 70S Ribosome & Polypeptide Translation Factory — 3D Scenario
 * Art Style: The Biology Primer (Jason Walker) — Pedagogical 3D Tactile Clay
 *
 * Hallmarks:
 * - 50S Large Subunit: Moss-green velvety matte clay with 3 carved vaulted archways (E, P, A)
 * - 30S Small Subunit: Slate denim-blue sculpted cradle holding the mRNA channel
 * - mRNA Strand: Terracotta coral-red continuous ribbon with raised codon blocks
 * - tRNAs: Sculpted 3D cloverleaf figures in distinct jewel tones (Teal P-site, Violet A-site, Mauve E-site)
 * - Peptidyl Transferase Center (PTC): Golden amber catalytic pocket with animated spark
 * - Nascent Polypeptide Chain: Glossy candy/pearl beads emerging from top exit porthole
 * - Canvas & Grounding: Warm eggshell parchment background (#F7F5EE) with soft contact shadow
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import type { RibosomeComponentData } from '../types/biology';

export const RIBOSOME_COMPONENTS_META: Record<string, RibosomeComponentData> = {
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
    desc: 'The molecular proofreader and decoding module in slate denim blue. Formed by Head, Body, and Platform domains, the 30S subunit binds mRNA and inspects cognate codon-anticodon base pairing.'
  },
  'subunit_50s': {
    name: '50S Large Catalytic Subunit (with E, P, A Vaults)',
    badge: 'CATALYTIC RIBOZYME (50S)',
    dims: 'Dimensions: ~20 × 20 × 15 nm, Mass: ~1.6 MDa',
    proteins: '23S rRNA (~2,904 nt), 5S rRNA (120 nt) + 33 Proteins (uL1–bL36)',
    pdb: 'PDB 7K00, 1FFK, 6X9Q',
    desc: 'The catalytic power plant sculpted in moss green. Features three iconic vaulted archways cut into the front face for the E (Exit), P (Peptide), and A (Arrival) sites, housing the Peptidyl Transferase Center (PTC).'
  },
  'trna_a_site': {
    name: 'Aminoacyl-tRNA (A-Site: Arrival & Decoding)',
    badge: 'SUBSTRATE INLET (A-SITE)',
    dims: 'Cloverleaf structure: 76 nt, ~7 nm span',
    proteins: 'Delivered by Elongation Factor Tu (EF-Tu·GTP)',
    pdb: 'PDB 7K00, 6X9Q',
    desc: 'The incoming charged tRNA sculpted in jewel violet. It docks into the A-site vaulted archway carrying the next amino acid to pair its anticodon with the mRNA codon.'
  },
  'trna_p_site': {
    name: 'Peptidyl-tRNA (P-Site: Peptide Donor)',
    badge: 'PEPTIDE DONOR (P-SITE)',
    dims: 'Cloverleaf structure: 76 nt, ~7 nm span',
    proteins: 'Peptidyl-tRNA covalently linked to nascent polypeptide',
    pdb: 'PDB 7K00, 4V4Q',
    desc: 'The peptidyl-tRNA sculpted in jade teal. Standing in the central P-site archway, it holds the growing polypeptide chain before transferring it to the A-site amino acid.'
  },
  'trna_e_site': {
    name: 'Deacylated tRNA (E-Site: Exit Discharge)',
    badge: 'DISCHARGE OUTLET (E-SITE)',
    dims: 'Cloverleaf structure: 76 nt, ~7 nm span',
    proteins: 'Uncharged / Deacylated tRNA',
    pdb: 'PDB 7K00, 6X9Q',
    desc: 'The stripped tRNA sculpted in muted mauve. Discharged from its amino acid, it shifts into the left E-site archway and exits the ribosome into the cytoplasm.'
  },
  'mrna_strand': {
    name: 'Messenger RNA (mRNA Ribbon with Codon Tiles)',
    badge: 'GENETIC TEMPLATE',
    dims: 'Continuous polyribonucleotide tape (5\' → 3\')',
    proteins: 'Transcribed by RNA Polymerase',
    pdb: 'PDB 6X9Q (Expressome Architecture)',
    desc: 'The genetic template ribbon in warm terracotta coral, running horizontally between the 30S cradle and 50S vaults. Features embossed 3D codon tiles (AUG, GGU, CUA) advancing 1 codon per elongation step.'
  },
  'ptc_core': {
    name: 'Peptidyl Transferase Center (PTC Active Site)',
    badge: 'CATALYTIC ACTIVE SITE',
    dims: 'Radius: ~1.2 nm active pocket',
    proteins: 'Domain V of 23S rRNA — Pure RNA Ribozyme Catalysis',
    pdb: 'PDB 1FFK, 7K00',
    desc: 'The catalytic heart of the ribosome located above the P and A archways in golden amber. It catalyzes peptide bond condensation between amino acids with zero protein residues directly involved in catalysis.'
  },
  'exit_tunnel': {
    name: 'Polypeptide Exit Tunnel & Porthole',
    badge: 'EXIT CONDUIT',
    dims: 'Length: ~100 Å (~10 nm), Diameter: ~15 Å',
    proteins: 'Lined with 23S rRNA and proteins uL4/uL22',
    pdb: 'PDB 7K00, 6X9Q',
    desc: 'The internal cylindrical conduit traversing through the 50S subunit. It terminates at the upper porthole from which the nascent protein emerges into the cytoplasm.'
  },
  'nascent_peptide': {
    name: 'Growing Nascent Polypeptide Chain',
    badge: 'SYNTHESIZED PROTEIN',
    dims: 'Glossy candy pearl amino acid beads on an organic string',
    proteins: 'Newly synthesized protein folding into secondary structures',
    pdb: 'PDB 7K00',
    desc: 'The newly formed protein chain made of vibrant, glossy pearl beads (purple, blue, green, amber, coral) extruding from the upper exit porthole and curving gracefully into the cellular milieu.'
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
    this.aminoAcidCount = 14;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;

    // Groups & Meshes
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
    this.contactShadowMesh = null;
    this.sparkMesh = null;

    // Interactive Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clickableMeshes = [];

    // Theatrical front-quarter perspective on the 3 vaulted arches
    this.spherical = { radius: 76, theta: 0.06, phi: 1.40 };
    this.target = new THREE.Vector3(0, 4.0, 0);
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
    this.build50SSubunit();
    this.build30SSubunit();
    this.buildMRNA();
    this.buildTRNAs();
    this.buildPeptideAndTunnel();
    this.setupInteraction();
    this.handleResize();
  }

  setupScene() {
    const rect = this.container.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : window.innerWidth;
    const h = rect.height > 0 ? rect.height : (window.innerHeight - 180);

    this.scene = new THREE.Scene();
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

    window.addEventListener('resize', this.onWindowResizeBound);
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xFFFAF2, 0.95);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFF6EA, 1.30);
    keyLight.position.set(40, 75, 70);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xDCE8F2, 0.70);
    fillLight.position.set(-60, 35, 40);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xFFEADB, 0.60);
    rimLight.position.set(0, 50, -60);
    this.scene.add(rimLight);
  }

  buildContactShadow() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    grad.addColorStop(0, 'rgba(40, 50, 45, 0.28)');
    grad.addColorStop(0.5, 'rgba(50, 60, 50, 0.12)');
    grad.addColorStop(1, 'rgba(247, 245, 238, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowGeo = new THREE.PlaneGeometry(60, 40);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    this.contactShadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.contactShadowMesh.rotation.x = -Math.PI / 2;
    this.contactShadowMesh.position.set(0, -17.5, 0);
    this.scene.add(this.contactShadowMesh);
  }

  createPillLabel(text, bgColor = '#2C4A28', textColor = '#FFFFFF', width = 128, height = 64) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const r = height / 2;
    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.roundRect(4, 4, width - 8, height - 8, r);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = `bold ${height * 0.52}px "Source Sans 3", Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2 + 1);

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
    const geo = new THREE.PlaneGeometry(width / 32, height / 32);
    return new THREE.Mesh(geo, mat);
  }

  /**
   * Builds the 50S Large Catalytic Subunit
   * The Biology Primer Canonical Style:
   * Smooth, organic moss green clay dome with three carved vaulted archways (E, P, A)
   */
  build50SSubunit() {
    this.subunit50SGroup = new THREE.Group();
    this.subunit50SGroup.name = 'Subunit_50S_Group';

    // Outer velvety matte clay material (Moss / Sage Green #8EA873)
    const clay50SMat = new THREE.MeshStandardMaterial({
      color: 0x8DA873,
      roughness: 0.62,
      metalness: 0.04
    });

    // Darker recessed cavity material for inside the vaults (Shaded Moss #688550)
    const vaultInteriorMat = new THREE.MeshStandardMaterial({
      color: 0x688550,
      roughness: 0.75,
      metalness: 0.02
    });

    // 1. Solid Back Dome Volume (positioned securely behind at z = -10.0)
    const rearDomeGeo = new THREE.SphereGeometry(18, 32, 20);
    rearDomeGeo.scale(1.25, 1.1, 0.45);
    const rearDomeMesh = new THREE.Mesh(rearDomeGeo, clay50SMat);
    rearDomeMesh.position.set(0, 5.0, -10.0);
    rearDomeMesh.castShadow = true;
    rearDomeMesh.receiveShadow = true;
    this.registerClickable(rearDomeMesh, 'subunit_50s');
    this.subunit50SGroup.add(rearDomeMesh);

    // 2. Upper Crown Mass over the archways (trimmed in Z so it doesn't bury front arches & labels)
    const topCrownGeo = new THREE.SphereGeometry(15, 28, 18);
    topCrownGeo.scale(1.35, 0.65, 0.32);
    const topCrownMesh = new THREE.Mesh(topCrownGeo, clay50SMat);
    topCrownMesh.position.set(0, 14.5, -3.5);
    topCrownMesh.castShadow = true;
    this.registerClickable(topCrownMesh, 'subunit_50s');
    this.subunit50SGroup.add(topCrownMesh);

    // 3. Central Protuberance (Top Crown Crest)
    const cpGeo = new THREE.CylinderGeometry(3.8, 6.8, 8.0, 24);
    const cpMesh = new THREE.Mesh(cpGeo, clay50SMat);
    cpMesh.position.set(0, 19.0, -5.0);
    cpMesh.castShadow = true;
    this.registerClickable(cpMesh, 'subunit_50s');
    this.subunit50SGroup.add(cpMesh);

    const cpCapGeo = new THREE.SphereGeometry(4.2, 20, 16);
    cpCapGeo.scale(1.0, 0.65, 1.0);
    const cpCapMesh = new THREE.Mesh(cpCapGeo, clay50SMat);
    cpCapMesh.position.set(0, 22.8, -5.0);
    this.subunit50SGroup.add(cpCapMesh);

    // 4. L1 Stalk (Mobile left arm coordinating E-site discharge)
    const l1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-14, 8, -4),
      new THREE.Vector3(-20, 13, -3),
      new THREE.Vector3(-22, 18, -2)
    ]);
    const l1Geo = new THREE.TubeGeometry(l1Curve, 16, 2.4, 14, false);
    const l1Mesh = new THREE.Mesh(l1Geo, clay50SMat);
    l1Mesh.castShadow = true;
    this.registerClickable(l1Mesh, 'subunit_50s');
    this.subunit50SGroup.add(l1Mesh);

    const l1HeadGeo = new THREE.SphereGeometry(3.5, 16, 14);
    const l1HeadMesh = new THREE.Mesh(l1HeadGeo, clay50SMat);
    l1HeadMesh.position.set(-22, 18, -2);
    this.subunit50SGroup.add(l1HeadMesh);

    // 5. L7/L12 Stalk (Elongation factor recruitment stalk on right)
    const l7Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(14, 7, -4),
      new THREE.Vector3(20, 11, -3),
      new THREE.Vector3(23, 15, -2)
    ]);
    const l7Geo = new THREE.TubeGeometry(l7Curve, 16, 2.2, 14, false);
    const l7Mesh = new THREE.Mesh(l7Geo, clay50SMat);
    l7Mesh.castShadow = true;
    this.registerClickable(l7Mesh, 'subunit_50s');
    this.subunit50SGroup.add(l7Mesh);

    const l7HeadGeo = new THREE.SphereGeometry(3.2, 16, 14);
    const l7HeadMesh = new THREE.Mesh(l7HeadGeo, clay50SMat);
    l7HeadMesh.position.set(23, 15, -2);
    this.subunit50SGroup.add(l7HeadMesh);

    // 6. Left and Right Flanking Cheeks
    const leftCheekGeo = new THREE.SphereGeometry(7.0, 20, 16);
    leftCheekGeo.scale(0.85, 1.3, 0.65);
    const leftCheekMesh = new THREE.Mesh(leftCheekGeo, clay50SMat);
    leftCheekMesh.position.set(-16.0, 3.5, -2.5);
    leftCheekMesh.castShadow = true;
    this.subunit50SGroup.add(leftCheekMesh);

    const rightCheekGeo = new THREE.SphereGeometry(7.0, 20, 16);
    rightCheekGeo.scale(0.85, 1.3, 0.65);
    const rightCheekMesh = new THREE.Mesh(rightCheekGeo, clay50SMat);
    rightCheekMesh.position.set(16.0, 3.5, -2.5);
    rightCheekMesh.castShadow = true;
    this.subunit50SGroup.add(rightCheekMesh);

    // 7. The Three Vaulted Arched Alcoves (E, P, A Sites)
    const archPositions = [
      { key: 'E', x: -8.0, label: 'E site' },
      { key: 'P', x: 0.0, label: 'P site' },
      { key: 'A', x: 8.0, label: 'A site' }
    ];

    archPositions.forEach(({ key, x }) => {
      // Recessed interior backwall of the archway
      const backGeo = new THREE.CylinderGeometry(3.6, 3.6, 13.5, 16, 1, false, 0, Math.PI);
      const backMesh = new THREE.Mesh(backGeo, vaultInteriorMat);
      backMesh.position.set(x, 3.8, -3.5);
      backMesh.rotation.y = -Math.PI / 2;
      this.subunit50SGroup.add(backMesh);

      // Vaulted rounded arch roof cap inside
      const archDomeGeo = new THREE.SphereGeometry(3.6, 16, 12, 0, Math.PI, 0, Math.PI / 2);
      const archDomeMesh = new THREE.Mesh(archDomeGeo, vaultInteriorMat);
      archDomeMesh.position.set(x, 10.5, -3.5);
      archDomeMesh.rotation.y = -Math.PI / 2;
      this.subunit50SGroup.add(archDomeMesh);

      // Architectural Arched Rim Trim framing the front facade
      const rimGeo = new THREE.TorusGeometry(3.8, 0.75, 12, 24, Math.PI);
      const rimMesh = new THREE.Mesh(rimGeo, clay50SMat);
      rimMesh.position.set(x, 10.5, 0.2);
      rimMesh.castShadow = true;
      this.subunit50SGroup.add(rimMesh);

      // Distinct letter badge above each archway (E, P, A)
      const labelMesh = this.createPillLabel(key, '#234421', '#FFFFFF', 64, 48);
      labelMesh.position.set(x, 14.8, 1.8);
      this.subunit50SGroup.add(labelMesh);
    });

    // Four Architectural Vertical Pillars dividing and flanking the 3 arches
    const pillarXs = [-12.0, -4.0, 4.0, 12.0];
    pillarXs.forEach((px) => {
      const pillarGeo = new THREE.CylinderGeometry(0.85, 1.1, 14, 12);
      const pillarMesh = new THREE.Mesh(pillarGeo, clay50SMat);
      pillarMesh.position.set(px, 3.5, 0.4);
      pillarMesh.castShadow = true;
      this.subunit50SGroup.add(pillarMesh);
    });

    // 50S Subunit Main Title Pill at top center
    const title50SMesh = this.createPillLabel('50S Subunit', '#1D3B1C', '#FFFFFF', 160, 52);
    title50SMesh.position.set(0, 18.0, 1.5);
    this.subunit50SGroup.add(title50SMesh);

    // Tactile organic nodules scattered along shoulders
    const noduleGeo = new THREE.SphereGeometry(1.6, 12, 10);
    const noduleCoords = [
      [-16, 11, -2], [16, 10, -2], [-13, 14, -1], [13, 13, -1],
      [-17, -1, -1], [17, -2, -1]
    ];
    noduleCoords.forEach(([nx, ny, nz]) => {
      const nMesh = new THREE.Mesh(noduleGeo, clay50SMat);
      nMesh.position.set(nx, ny, nz);
      nMesh.castShadow = true;
      this.subunit50SGroup.add(nMesh);
    });

    // Top Polypeptide Exit Tunnel Porthole / Orifice
    const portholeRimGeo = new THREE.TorusGeometry(2.6, 0.85, 14, 24);
    const portholeRimMesh = new THREE.Mesh(portholeRimGeo, clay50SMat);
    portholeRimMesh.position.set(3.8, 18.2, -1.5);
    portholeRimMesh.rotation.x = Math.PI / 3;
    this.subunit50SGroup.add(portholeRimMesh);

    // Dark interior tunnel orifice
    const holeGeo = new THREE.CircleGeometry(2.4, 20);
    const holeMat = new THREE.MeshBasicMaterial({ color: 0x1A2518 });
    const holeMesh = new THREE.Mesh(holeGeo, holeMat);
    holeMesh.position.set(3.8, 18.0, -1.6);
    holeMesh.rotation.x = -Math.PI / 6;
    this.subunit50SGroup.add(holeMesh);

    // Peptidyl Transferase Center (PTC) Catalytic Amber Pocket
    const ptcGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const ptcMat = new THREE.MeshStandardMaterial({
      color: 0xFFB703,
      emissive: 0xFFA000,
      emissiveIntensity: 0.5,
      roughness: 0.2
    });
    this.ptcActiveSiteMesh = new THREE.Mesh(ptcGeo, ptcMat);
    this.ptcActiveSiteMesh.position.set(3.8, 8.5, -1.8);
    this.registerClickable(this.ptcActiveSiteMesh, 'ptc_core');
    this.subunit50SGroup.add(this.ptcActiveSiteMesh);

    // Glowing catalytic spark sprite on peptide bond formation
    const sparkGeo = new THREE.SphereGeometry(1.2, 12, 12);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xFFF07C, transparent: true, opacity: 0.85 });
    this.sparkMesh = new THREE.Mesh(sparkGeo, sparkMat);
    this.sparkMesh.position.set(3.8, 8.5, -1.2);
    this.sparkMesh.scale.set(0.1, 0.1, 0.1);
    this.subunit50SGroup.add(this.sparkMesh);

    this.rootGroup.add(this.subunit50SGroup);
  }

  /**
   * Builds the 30S Small Decoding Subunit
   * Canonical Biology Primer Style: Slate denim blue sculpted cradle with mRNA channel
   */
  build30SSubunit() {
    this.subunit30SGroup = new THREE.Group();
    this.subunit30SGroup.name = 'Subunit_30S_Group';

    // Slate denim blue velvety matte clay (#53738C)
    const clay30SMat = new THREE.MeshStandardMaterial({
      color: 0x53738C,
      roughness: 0.58,
      metalness: 0.05
    });

    // 1. Main Elongated Cradle Body (Flattened so it cradles below the mRNA in true Primer clay style)
    const bodyGeo = new THREE.SphereGeometry(14.0, 28, 20);
    bodyGeo.scale(1.50, 0.40, 0.32);
    const bodyMesh = new THREE.Mesh(bodyGeo, clay30SMat);
    bodyMesh.position.set(0, -9.0, -0.6);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    this.registerClickable(bodyMesh, 'subunit_30s');
    this.subunit30SGroup.add(bodyMesh);

    // 2. 30S Head Domain (Mobile left lobe)
    const headGeo = new THREE.SphereGeometry(6.5, 20, 16);
    headGeo.scale(1.15, 0.70, 0.50);
    const headMesh = new THREE.Mesh(headGeo, clay30SMat);
    headMesh.position.set(-11.0, -8.0, -0.4);
    headMesh.castShadow = true;
    this.registerClickable(headMesh, 'subunit_30s');
    this.subunit30SGroup.add(headMesh);

    // 3. 30S Platform Domain (Supporting lateral shelf on right)
    const platformGeo = new THREE.SphereGeometry(6.2, 20, 16);
    platformGeo.scale(1.2, 0.70, 0.50);
    const platformMesh = new THREE.Mesh(platformGeo, clay30SMat);
    platformMesh.position.set(11.0, -8.2, -0.4);
    platformMesh.castShadow = true;
    this.registerClickable(platformMesh, 'subunit_30s');
    this.subunit30SGroup.add(platformMesh);

    // 4. Horizontal guiding bed / trough for the mRNA tape
    const troughGeo = new THREE.BoxGeometry(38, 1.4, 2.4);
    const troughMat = new THREE.MeshStandardMaterial({ color: 0x3F586C, roughness: 0.65 });
    const troughMesh = new THREE.Mesh(troughGeo, troughMat);
    troughMesh.position.set(0, -6.0, 0.0);
    this.subunit30SGroup.add(troughMesh);

    // 5. 30S Subunit Label Pill on front face
    const label30SMesh = this.createPillLabel('30S Subunit', '#223B4E', '#FFFFFF', 160, 52);
    label30SMesh.position.set(0, -9.5, 2.0);
    this.subunit30SGroup.add(label30SMesh);

    this.rootGroup.add(this.subunit30SGroup);
  }

  /**
   * Builds the mRNA Ribbon with codon block tiles and nucleotide teeth
   * Warm Terracotta / Brick Coral Red (#BA4E3B)
   */
  buildMRNA() {
    this.mrnaGroup = new THREE.Group();
    this.mrnaGroup.name = 'mRNA_Strand_Group';

    const mrnaRibbonMat = new THREE.MeshStandardMaterial({
      color: 0xBA4E3B,
      roughness: 0.42,
      metalness: 0.08
    });

    const codonTileMat = new THREE.MeshStandardMaterial({
      color: 0xD35400,
      roughness: 0.35,
      metalness: 0.05
    });

    const basePegMat = new THREE.MeshStandardMaterial({
      color: 0xFFF3E0,
      roughness: 0.25
    });

    // 1. Continuous Horizontal Terracotta Ribbon (5' → 3')
    const ribbonGeo = new THREE.BoxGeometry(46, 1.3, 2.2);
    const ribbonMesh = new THREE.Mesh(ribbonGeo, mrnaRibbonMat);
    ribbonMesh.position.set(0, -4.6, 0.5);
    ribbonMesh.castShadow = true;
    this.registerClickable(ribbonMesh, 'mrna_strand');
    this.mrnaGroup.add(ribbonMesh);

    // 2. Codon triplet block tiles along the ribbon
    const codons = [
      { label: 'UUC', x: -16.0 },
      { label: 'AUG', x: -8.0, isE: true },  // E-site codon
      { label: 'GGU', x: 0.0, isP: true },   // P-site codon
      { label: 'CUA', x: 8.0, isA: true },   // A-site codon
      { label: 'GAA', x: 16.0 }
    ];

    codons.forEach(({ label, x }) => {
      // 3D Codon Block Base
      const blockGeo = new THREE.BoxGeometry(6.4, 1.5, 2.4);
      const blockMesh = new THREE.Mesh(blockGeo, codonTileMat);
      blockMesh.position.set(x, -4.0, 0.6);
      blockMesh.castShadow = true;
      this.registerClickable(blockMesh, 'mrna_strand');
      this.mrnaGroup.add(blockMesh);

      // Three upward nucleotide teeth representing the 3 bases of the codon
      for (let b = -1; b <= 1; b++) {
        const toothGeo = new THREE.BoxGeometry(1.1, 1.5, 1.2);
        const toothMesh = new THREE.Mesh(toothGeo, basePegMat);
        toothMesh.position.set(x + b * 1.8, -2.8, 0.6);
        toothMesh.castShadow = true;
        this.mrnaGroup.add(toothMesh);
      }

      // Codon Label Plate (e.g. AUG, GGU, CUA)
      const codonLabel = this.createPillLabel(label, '#7A2416', '#FFFFFF', 96, 42);
      codonLabel.position.set(x, -4.0, 2.2);
      this.mrnaGroup.add(codonLabel);
    });

    // 5' and 3' badges at ends of ribbon
    const badge5 = this.createPillLabel("5'", '#5C1D13', '#FFFFFF', 48, 36);
    badge5.position.set(-24.0, -4.6, 0.8);
    this.mrnaGroup.add(badge5);

    const badge3 = this.createPillLabel("3'", '#5C1D13', '#FFFFFF', 48, 36);
    badge3.position.set(24.0, -4.6, 0.8);
    this.mrnaGroup.add(badge3);

    this.rootGroup.add(this.mrnaGroup);
  }

  /**
   * Helper to build a sculpted 3D Cloverleaf / Cross tRNA
   * As illustrated in The Biology Primer Figures 25 & 27
   */
  createPrimerTRNAMesh(colorHex, name, componentKey, hasAminoAcid = false, aaColor = 0xE63946) {
    const group = new THREE.Group();
    group.name = name;

    const trnaMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.38,
      metalness: 0.08
    });

    // Vertical Central Stem (Ribbon spine)
    const stemGeo = new THREE.CylinderGeometry(0.75, 0.85, 11, 14);
    const stemMesh = new THREE.Mesh(stemGeo, trnaMat);
    stemMesh.position.set(0, 4.2, 0);
    stemMesh.castShadow = true;
    group.add(stemMesh);

    // Left Horizontal Clover Loop (D-Loop)
    const leftArmGeo = new THREE.TorusGeometry(1.5, 0.55, 10, 16);
    const leftArmMesh = new THREE.Mesh(leftArmGeo, trnaMat);
    leftArmMesh.position.set(-2.0, 3.8, 0);
    leftArmMesh.rotation.y = Math.PI / 2;
    group.add(leftArmMesh);

    // Right Horizontal Clover Loop (T-Loop)
    const rightArmGeo = new THREE.TorusGeometry(1.5, 0.55, 10, 16);
    const rightArmMesh = new THREE.Mesh(rightArmGeo, trnaMat);
    rightArmMesh.position.set(2.0, 3.8, 0);
    rightArmMesh.rotation.y = Math.PI / 2;
    group.add(rightArmMesh);

    // Center Knot Bulb
    const knotGeo = new THREE.SphereGeometry(1.3, 12, 12);
    const knotMesh = new THREE.Mesh(knotGeo, trnaMat);
    knotMesh.position.set(0, 3.8, 0);
    group.add(knotMesh);

    // Bottom Anticodon Prongs (3 downward teeth locking into codon)
    const anticodonBaseGeo = new THREE.BoxGeometry(4.4, 0.9, 1.1);
    const anticodonBaseMesh = new THREE.Mesh(anticodonBaseGeo, trnaMat);
    anticodonBaseMesh.position.set(0, -1.6, 0);
    group.add(anticodonBaseMesh);

    const prongMat = new THREE.MeshStandardMaterial({ color: 0xF7D070, roughness: 0.3 });
    for (let i = -1; i <= 1; i++) {
      const prongGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.3, 8);
      const prongMesh = new THREE.Mesh(prongGeo, prongMat);
      prongMesh.position.set(i * 1.5, -2.5, 0);
      group.add(prongMesh);
    }

    // Top CCA-3' Acceptor Stem Tip
    const tipGeo = new THREE.CylinderGeometry(0.60, 0.75, 2.2, 10);
    const tipMesh = new THREE.Mesh(tipGeo, trnaMat);
    tipMesh.position.set(0, 10.4, 0);
    group.add(tipMesh);

    // Attached Amino Acid Monomer (glossy sphere at top tip)
    if (hasAminoAcid) {
      const aaGeo = new THREE.SphereGeometry(1.5, 14, 14);
      const aaMat = new THREE.MeshStandardMaterial({
        color: aaColor,
        roughness: 0.22,
        metalness: 0.1
      });
      const aaMesh = new THREE.Mesh(aaGeo, aaMat);
      aaMesh.position.set(0, 12.2, 0);
      aaMesh.castShadow = true;
      group.add(aaMesh);
    }

    // Register clickable meshes for raycasting
    group.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        this.registerClickable(child, componentKey);
      }
    });

    return group;
  }

  /**
   * Builds the 3 Cloverleaf tRNAs in their respective Vaulted Archways
   */
  buildTRNAs() {
    this.trnaGroup = new THREE.Group();
    this.trnaGroup.name = 'tRNA_Cluster_Group';

    // 1. P-Site Peptidyl-tRNA (Center Archway x=0) — Jade Teal (#368F8B)
    this.trnaP = this.createPrimerTRNAMesh(0x368F8B, 'tRNA_P_Site', 'trna_p_site', false);
    this.trnaP.position.set(0.0, 0.4, -0.6);
    this.trnaGroup.add(this.trnaP);

    // 2. A-Site Aminoacyl-tRNA (Right Archway x=8.0) — Jewel Violet (#8E5A8E) with attached Amino Acid
    this.trnaA = this.createPrimerTRNAMesh(0x8E5A8E, 'tRNA_A_Site', 'trna_a_site', true, 0xE63946);
    this.trnaA.position.set(8.0, 0.4, -0.6);
    this.trnaGroup.add(this.trnaA);

    // 3. E-Site Deacylated Exit tRNA (Left Archway x=-8.0) — Muted Mauve (#A58A9E), tilted towards exit
    this.trnaE = this.createPrimerTRNAMesh(0xA58A9E, 'tRNA_E_Site', 'trna_e_site', false);
    this.trnaE.position.set(-8.0, 0.8, -0.6);
    this.trnaE.rotation.z = 0.20; // Tilted toward left exit
    this.trnaGroup.add(this.trnaE);

    this.rootGroup.add(this.trnaGroup);
  }

  /**
   * Builds the Growing Nascent Polypeptide Chain
   * Modeled as glossy, colorful candy/pearl beads emerging from the top exit porthole
   */
  buildPeptideAndTunnel() {
    this.exitTunnelGroup = new THREE.Group();
    this.exitTunnelGroup.name = 'Exit_Tunnel_Group';

    this.peptideGroup = new THREE.Group();
    this.peptideGroup.name = 'Nascent_Polypeptide_Chain';

    // Continuous S-Curve Path starting at P-site tRNA tip (x=0, y=10.6, z=-0.6),
    // passing through top porthole (x=3.8, y=18.2, z=-3.0),
    // and looping upward gracefully into the air
    const peptidePoints = [
      new THREE.Vector3(0.0, 10.6, -0.6),  // Attached to P-site tRNA tip
      new THREE.Vector3(1.6, 12.8, -1.0),
      new THREE.Vector3(2.8, 15.2, -1.3),  // Inside exit conduit
      new THREE.Vector3(3.8, 18.2, -1.5),  // Emerging from top porthole
      new THREE.Vector3(5.2, 21.0, -0.2),  // Outside in cytoplasm
      new THREE.Vector3(7.0, 23.5, 1.2),
      new THREE.Vector3(9.2, 25.0, 2.5),
      new THREE.Vector3(11.8, 25.5, 3.6),
      new THREE.Vector3(14.6, 24.0, 4.2),
      new THREE.Vector3(17.0, 21.5, 4.6),
      new THREE.Vector3(18.5, 18.8, 4.8)
    ];

    const curve = new THREE.CatmullRomCurve3(peptidePoints);
    const beadCount = 18;
    const samples = curve.getPoints(beadCount);

    // Glossy Candy Pearl Palette: Royal Violet, Deep Blue, Jade, Amber Gold, Coral Orange, Ruby
    const pearlColors = [
      0x7B2CBF, 0x3A86FF, 0x06D6A0, 0xFFB703, 0xFB5607, 0xE63946, 0x8338EC, 0x38B000, 0xFF006E
    ];

    const beadGeo = new THREE.SphereGeometry(1.2, 14, 14);

    for (let i = 0; i < samples.length; i++) {
      const color = pearlColors[i % pearlColors.length];
      const pearlMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.18,
        metalness: 0.12
      });
      const bead = new THREE.Mesh(beadGeo, pearlMat);
      bead.position.copy(samples[i]);
      bead.castShadow = true;
      this.registerClickable(bead, 'nascent_peptide');
      this.peptideGroup.add(bead);
    }

    // Polypeptide Connecting Line (golden organic string)
    const lineGeo = new THREE.TubeGeometry(curve, 48, 0.25, 8, false);
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xFFD166, roughness: 0.3 });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    this.peptideGroup.add(lineMesh);

    this.exitTunnelGroup.add(this.peptideGroup);
    this.subunit50SGroup.add(this.exitTunnelGroup);
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
      this.spherical.radius = Math.max(30, Math.min(160, this.spherical.radius + e.deltaY * 0.08));
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
      'subunit_30s': { radius: 50, theta: 0.0, phi: 1.48, target: new THREE.Vector3(0, -9.5, 0) },
      'subunit_50s': { radius: 66, theta: 0.0, phi: 1.35, target: new THREE.Vector3(0, 5, -2) },
      'trna_a_site': { radius: 30, theta: 0.15, phi: 1.35, target: new THREE.Vector3(8.0, 2, -0.6) },
      'trna_p_site': { radius: 30, theta: 0.0, phi: 1.35, target: new THREE.Vector3(0, 2, -0.6) },
      'trna_e_site': { radius: 30, theta: -0.15, phi: 1.35, target: new THREE.Vector3(-8.0, 2, -0.6) },
      'mrna_strand': { radius: 40, theta: 0.0, phi: 1.48, target: new THREE.Vector3(0, -4.5, 0.5) },
      'ptc_core': { radius: 24, theta: 0.10, phi: 1.35, target: new THREE.Vector3(3.8, 8.5, -1.8) },
      'exit_tunnel': { radius: 46, theta: 0.25, phi: 1.15, target: new THREE.Vector3(3.8, 18.2, -3.0) },
      'nascent_peptide': { radius: 46, theta: 0.35, phi: 1.10, target: new THREE.Vector3(10, 22, 1.5) },
      'ribosome_70s': { radius: 74, theta: 0.0, phi: 1.44, target: new THREE.Vector3(0, 1.0, 0) }
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
    this.spherical = { radius: 74, theta: 0.0, phi: 1.44 };
    this.target.set(0, 1.0, 0);
    this.updateCameraPosition();
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  toggleLabels() {
    return true;
  }

  setExplodedProgress(val) {
    this.explodedProgress = Math.max(0.0, Math.min(1.0, val));
    const dist = this.explodedProgress * 24;

    // Displace 30S downward & forward
    if (this.subunit30SGroup) {
      this.subunit30SGroup.position.y = -dist * 0.75;
      this.subunit30SGroup.position.z = dist * 0.45;
    }
    // Displace 50S upward & backward
    if (this.subunit50SGroup) {
      this.subunit50SGroup.position.y = dist * 0.55;
      this.subunit50SGroup.position.z = -dist * 0.45;
    }
    // mRNA travels with 30S
    if (this.mrnaGroup) {
      this.mrnaGroup.position.y = -dist * 0.45;
      this.mrnaGroup.position.z = dist * 0.35;
    }
    // tRNAs separate laterally in the cleft
    if (this.trnaGroup && this.trnaA && this.trnaE) {
      this.trnaA.position.x = 8.0 + this.explodedProgress * 6;
      this.trnaE.position.x = -8.0 - this.explodedProgress * 6;
    }
  }

  setTranslationSpeed(val) {
    this.translationSpeed = Math.max(0.1, Math.min(3.0, val));
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  /**
   * Advances translation by exactly 1 codon (+1 amino acid) with spark pulse
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
    newBead.position.set(19.5 + (this.aminoAcidCount % 5) * 1.5, 21.0 + Math.sin(this.aminoAcidCount) * 1.5, 5.5);
    newBead.castShadow = true;
    if (this.peptideGroup) {
      this.peptideGroup.add(newBead);
      this.registerClickable(newBead, 'nascent_peptide');
    }

    // Trigger catalytic spark flash at PTC active site
    if (this.sparkMesh) {
      this.sparkMesh.scale.set(3.2, 3.2, 3.2);
      setTimeout(() => {
        if (this.sparkMesh) this.sparkMesh.scale.set(0.1, 0.1, 0.1);
      }, 250);
    }
    if (this.ptcActiveSiteMesh) {
      this.ptcActiveSiteMesh.scale.set(1.35, 1.35, 1.35);
      setTimeout(() => {
        if (this.ptcActiveSiteMesh) this.ptcActiveSiteMesh.scale.set(1.0, 1.0, 1.0);
      }, 250);
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

      // 1. Subtle biological breathing & micro-oscillations of tRNAs in their vaults
      if (this.trnaA && this.trnaP && this.trnaE) {
        const bob = Math.sin(this.cycleTime * 3.5) * 0.35;
        this.trnaA.position.y = 0.4 + bob;
        this.trnaP.position.y = 0.4 - bob * 0.4;
        this.trnaE.position.y = 0.8 + Math.cos(this.cycleTime * 3.0) * 0.3;
      }

      // 2. mRNA continuous feed simulation
      if (this.mrnaGroup) {
        this.mrnaGroup.position.x = Math.sin(this.cycleTime * 1.8) * 0.45;
      }

      // 3. Gentle waving of the nascent peptide chain outside the porthole
      if (this.peptideGroup) {
        this.peptideGroup.rotation.z = Math.sin(this.cycleTime * 1.2) * 0.025;
      }

      // 4. PTC catalytic pulse breathing
      if (this.ptcActiveSiteMesh) {
        const pulse = 1.0 + Math.sin(this.cycleTime * 4.0) * 0.06;
        this.ptcActiveSiteMesh.scale.set(pulse, pulse, pulse);
      }
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
