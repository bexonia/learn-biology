// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Bacterial Flagellar Motor & Basal Body — 3D Nanomachine Scenario
 * Based on authentic cryo-EM structural biology (PDB: 7CGO, 6YKM, 6S3L, 3HJL)
 *
 * Components modeled:
 * - Rotor: MS-Ring (FliF), C-Ring Switch Complex (FliG/M/N, ~45 nm diameter)
 * - Transmission: Central Drive Shaft Rod (FlgB/C/F/G), Universal Hook (FlgE)
 * - Propeller: Helical Filament (FliC)
 * - Bushings (Bearings): P-Ring (FlgI), L-Ring (FlgH)
 * - Stators: MotA4/MotB2 Proton-Conducting Complexes anchored to peptidoglycan
 * - Cell Envelope: Outer Membrane LPS, Peptidoglycan Sacculus, Inner Membrane
 * - Biophysics: Dynamic Proton Motive Force (H+ ion flow) particle stream,
 *   CW/CCW rotation, and exploded-view disassembly.
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

if (typeof window !== 'undefined') {
  (window as any).THREE = THREE;
  (window as any).GLTFLoader = GLTFLoader;
}

export class FlagellarMotorScene {
  container: any;
  options: any;
  voiceService: any;
  onSelectComponent: any;
  active: boolean = false;
  rotationSpeed: number = 1.0;
  rotationDirection: number = -1;
  isPaused: boolean = false;
  isAutoRotating: boolean = false;
  explodedProgress: number = 0.0;
  selectedComponentKey: any = null;
  representationMode: string = 'molecular';
  mnGroup: any = null;
  mnModel: any = null;
  mnBushingGroup: any = null;
  mnStatorGroup: any = null;
  mnStatorUnits: any[] = [];
  schematicRotorGroup: any = null;
  schematicStatorGroup: any = null;
  schematicBushingGroup: any = null;
  scene: any = null;
  camera: any = null;
  renderer: any = null;
  canvas: any = null;
  animFrameId: any = null;
  rootGroup: any = null;
  rotorGroup: any = null;
  statorRingGroup: any = null;
  bushingGroup: any = null;
  membraneGroup: any = null;
  protonParticleSystem: any = null;
  componentMeshes: Record<string, any> = {};
  explodedOffsets: Record<string, any> = {};
  target: any;
  spherical: any;
  showLabels: boolean = true;
  clock: any;
  svgOverlay: any = null;
  labelsContainer: any = null;
  motorLandmarks: any[] = [];
  labelAnchors: Record<string, any> = {};

  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.voiceService = options.voiceService || window.voiceService;
    this.onSelectComponent = options.onSelectComponent || (() => {});

    // State
    this.active = false;
    this.rotationSpeed = 1.0; // 1.0 = normal (~100 Hz visual speed)
    this.rotationDirection = -1; // -1 = CCW ("Run"), +1 = CW ("Tumble")
    this.isPaused = false;
    this.isAutoRotating = false;
    this.explodedProgress = 0.0; // 0.0 = assembled, 1.0 = fully exploded
    this.selectedComponentKey = null;
    this.representationMode = 'molecular'; // 'molecular' (default) or 'schematic'
    this.mnGroup = null;
    this.mnModel = null;
    this.mnBushingGroup = null;
    this.mnStatorGroup = null;
    this.mnStatorUnits = [];
    this.schematicRotorGroup = null;
    this.schematicStatorGroup = null;
    this.schematicBushingGroup = null;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;

    // Groups & Meshes
    this.rootGroup = null;
    this.rotorGroup = null; // Rotates continuously
    this.statorRingGroup = null; // Static, anchored to PG
    this.bushingGroup = null; // Static, anchored in membranes
    this.membraneGroup = null; // Cutaway envelope
    this.protonParticleSystem = null;

    // Component mesh registry for raycasting & exploded view
    this.componentMeshes = {};
    this.explodedOffsets = {};

    // 3D Anatomy Tags & Stationary Landmarks System
    this.showLabels = true;
    this.svgOverlay = null;
    this.labelsContainer = null;
    this.motorLandmarks = [];
    this.labelAnchors = {};
    this.labelAnchorLayer = null;
    this.schematicStatorUnits = [];

    // Orbit and Pan / CS Free-Look controls state
    this.cameraMode = 'freelook'; // 'freelook' (Counter-Strike FPS style) or 'orbit'
    this.isPointerDown = false;
    this.pointerButton = 0;
    this.isShiftDown = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.pointerDownX = 0;
    this.pointerDownY = 0;
    this.spherical = { radius: 275, theta: 0.15, phi: 1.35 };
    this.target = new THREE.Vector3(0, 65, 0);

    // Continuous Keyboard Navigation Keys (Counter Strike / FPS 6-DOF)
    this.keys = {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      KeyQ: false,
      KeyE: false,
      KeyC: false,
      Space: false,
      ShiftLeft: false,
      ShiftRight: false,
      ControlLeft: false,
      ControlRight: false,
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };

    // Raycaster
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Clock
    this.clock = new THREE.Clock();
  }

  /**
   * Initialize Three.js scene, lights, materials, and procedural cryo-EM geometry
   */
  init() {
    // 1. Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xF5F7F6);

    // 2. Camera setup
    const width = (this.container && this.container.clientWidth > 0) ? this.container.clientWidth : window.innerWidth;
    const height = (this.container && this.container.clientHeight > 0) ? this.container.clientHeight : window.innerHeight;
    const aspect = width / height;
    this.camera = new THREE.PerspectiveCamera(42, aspect, 0.5, 2000);
    this.updateCameraPosition();

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.canvas = this.renderer.domElement;
    this.canvas.className = 'flagellar-motor-canvas';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = 'block';
    this.container.appendChild(this.canvas);

    // 4. Studio Lighting
    this.setupLighting();

    // 5. Build Procedural Biological Geometry
    this.buildAssembly();

    // 5b. Build Complete Flagellar Tail Propeller Assembly (FlgK/L Junction + FliC Helical Filament + FliD Distal Cap)
    this.createHelicalFilamentTail();

    // 6. Build Proton Motive Force (H+ ion) particle system
    this.buildProtonParticles();

    // 7. Load authentic Cryo-EM Molecular Nodes model (PDB: 7CGO)
    this.loadMolecularNodesModel();

    // 8. Load authentic Cryo-EM Molecular Nodes stators (PDB: 6YKM)
    this.loadMolecularStators();

    // 9. 3D Anatomy Tags & Stationary Landmarks
    this.svgOverlay = document.getElementById('motor-svg-overlay');
    this.labelsContainer = document.getElementById('motor-labels-container');
    this.setupMotorLandmarks();
    this.initLabels();

    // 10. Event Listeners
    this.setupEvents();

    return this;
  }

  /**
   * Configure photographic key, fill, rim, and ambient biological lighting
   */
  setupLighting() {
    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.85);
    this.scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 1.25);
    keyLight.position.set(80, 200, 110);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 10;
    keyLight.shadow.camera.far = 450;
    keyLight.shadow.camera.left = -110;
    keyLight.shadow.camera.right = 110;
    keyLight.shadow.camera.top = 200;
    keyLight.shadow.camera.bottom = -90;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xD8EEF8, 0.7);
    fillLight.position.set(-80, 50, -60);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xFFE5D0, 0.5);
    rimLight.position.set(0, -90, -80);
    this.scene.add(rimLight);
  }

  /**
   * Build authentic cryo-EM flagellar basal body matching scientific reference:
   * Vertical coordinates (Y axis):
   * - Y = -35: Cytosol / C-ring base
   * - Y = -22: C-ring (FliG/M/N, ~45 nm diameter)
   * - Y = -8: Inner Membrane & MS-ring (FliF)
   * - Y = 0: Periplasmic space
   * - Y = +10: Peptidoglycan Cell Wall & P-ring (FlgI)
   * - Y = +24: Outer Membrane LPS & L-ring (FlgH)
   * - Y = +38 to +65: Universal Joint Hook (FlgE)
   * - Y = +65 to +130: Helical Filament Propeller (FliC)
   */
  buildAssembly() {
    this.rootGroup = new THREE.Group();
    this.scene.add(this.rootGroup);

    // Sub-groups
    this.rotorGroup = new THREE.Group(); // Everything that rotates
    this.statorRingGroup = new THREE.Group(); // Stationary stators
    this.bushingGroup = new THREE.Group(); // Stationary bushings
    this.membraneGroup = new THREE.Group(); // Cutaway envelope

    this.rootGroup.add(this.membraneGroup);
    this.rootGroup.add(this.bushingGroup);
    this.rootGroup.add(this.statorRingGroup);
    this.rootGroup.add(this.rotorGroup);

    // Stationary dynamic anchor layer (encapsulating 3D tracking points immune to rotor spinning)
    this.labelAnchorLayer = new THREE.Group();
    this.labelAnchorLayer.name = 'Stationary_Label_Anchor_Layer';
    this.rootGroup.add(this.labelAnchorLayer);

    // Dedicated schematic sub-groups (isolated so they can be 100% hidden in molecular mode)
    this.schematicRotorGroup = new THREE.Group();
    this.schematicRotorGroup.name = 'Schematic_Rotor_Group';
    this.rotorGroup.add(this.schematicRotorGroup);

    this.schematicStatorGroup = new THREE.Group();
    this.schematicStatorGroup.name = 'Schematic_Stator_Group';
    this.statorRingGroup.add(this.schematicStatorGroup);

    this.schematicBushingGroup = new THREE.Group();
    this.schematicBushingGroup.name = 'Schematic_Bushing_Group';
    this.bushingGroup.add(this.schematicBushingGroup);

    // =========================================================================
    // 1. Cutaway Bacterial Cell Envelope Membranes (Framing the Basal Body)
    // Translucent lipid bilayer aesthetic allowing clear internal molecular visibility
    // =========================================================================
    const cutawayThetaStart = Math.PI * 0.45; // Starts at +80 deg
    const cutawayThetaLength = Math.PI * 1.1; // Wraps 200 deg around the back

    // Inner Cytoplasmic Membrane (Translucent Jade Bilayer #06D6A0)
    const imGeo = new THREE.CylinderGeometry(36, 36, 4.5, 48, 1, false, cutawayThetaStart, cutawayThetaLength);
    const imMat = new THREE.MeshStandardMaterial({
      color: 0x06D6A0,
      roughness: 0.35,
      metalness: 0.08,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.38
    });
    const imMesh = new THREE.Mesh(imGeo, imMat);
    imMesh.position.y = -8;
    this.membraneGroup.add(imMesh);

    // Peptidoglycan Murein Sacculus (Translucent Terracotta #E76F51)
    const pgGeo = new THREE.CylinderGeometry(36, 36, 3.2, 48, 1, false, cutawayThetaStart, cutawayThetaLength);
    const pgMat = new THREE.MeshStandardMaterial({
      color: 0xE76F51,
      roughness: 0.45,
      metalness: 0.08,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.32
    });
    const pgMesh = new THREE.Mesh(pgGeo, pgMat);
    pgMesh.position.y = 10;
    this.membraneGroup.add(pgMesh);

    // Outer Membrane LPS (Translucent Deep Marine / Royal Blue #0077B6)
    const omGeo = new THREE.CylinderGeometry(36, 36, 5.5, 48, 1, false, cutawayThetaStart, cutawayThetaLength);
    const omMat = new THREE.MeshStandardMaterial({
      color: 0x0077B6,
      roughness: 0.35,
      metalness: 0.08,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.38
    });
    const omMesh = new THREE.Mesh(omGeo, omMat);
    omMesh.position.y = 24;
    this.membraneGroup.add(omMesh);

    // =========================================================================
    // 2. Rotor: C-Ring Switch Complex (FliG, FliM, FliN) - Cytoplasmic
    // Diameter = 45 nm, 34-fold rotational symmetry
    // =========================================================================
    const cRingGroup = new THREE.Group();
    cRingGroup.position.y = -22;

    // Main toroidal C-ring body
    const cRingTorusGeo = new THREE.TorusGeometry(21, 4.2, 24, 48);
    cRingTorusGeo.rotateX(Math.PI / 2);
    const cRingMat = new THREE.MeshStandardMaterial({
      color: 0x48CAE4, // Vivid Sky/Cyan
      roughness: 0.32,
      metalness: 0.15
    });
    const cRingTorus = new THREE.Mesh(cRingTorusGeo, cRingMat);
    cRingTorus.castShadow = true;
    cRingTorus.receiveShadow = true;
    cRingGroup.add(cRingTorus);

    // 34 individual switch subunits (teeth/lobes of FliG/M/N)
    const subunitGeo = new THREE.CylinderGeometry(1.4, 1.8, 7.5, 12);
    const subunitMat = new THREE.MeshStandardMaterial({
      color: 0x00B4D8,
      roughness: 0.38,
      metalness: 0.18
    });
    for (let i = 0; i < 34; i++) {
      const angle = (i / 34) * Math.PI * 2;
      const subMesh = new THREE.Mesh(subunitGeo, subunitMat);
      subMesh.position.set(Math.cos(angle) * 21, -1.8, Math.sin(angle) * 21);
      subMesh.rotation.z = Math.sin(angle) * 0.15;
      subMesh.castShadow = true;
      cRingGroup.add(subMesh);
    }

    this.registerComponent('c_ring', cRingGroup, {
      name: 'C-Ring Switch Complex',
      proteins: 'FliG (34 copies), FliM (34 copies), FliN (136 copies)',
      stoichiometry: '1:1:4 ratio (FliG34 · FliM34 · FliN136)',
      dimensions: 'Diameter: ~45 nm, Height: ~14 nm',
      pdb: '7CGO, 6S3L, 3HJL',
      role: 'Cytosolic rotor turbine base and rotational direction switch. FliG interacts with MotA stators to convert proton influx into mechanical rotary torque (~4,600 pN·nm). Phosphorylated CheY-P binding to FliM induces cooperative conformational flips that reverse motor rotation from CCW (forward swim) to CW (tumble reorientation).',
      explodedY: -35
    });
    this.schematicRotorGroup.add(cRingGroup);

    // =========================================================================
    // 3. Rotor: MS-Ring (FliF) - Inner Membrane Transmembrane Core
    // =========================================================================
    const msRingGroup = new THREE.Group();
    msRingGroup.position.y = -8;

    const msRingGeo = new THREE.CylinderGeometry(13.5, 15, 6.5, 34);
    const msRingMat = new THREE.MeshStandardMaterial({
      color: 0xFFB703, // Golden Amber
      roughness: 0.35,
      metalness: 0.22
    });
    const msRingMesh = new THREE.Mesh(msRingGeo, msRingMat);
    msRingMesh.castShadow = true;
    msRingGroup.add(msRingMesh);

    // Collar lip linking to C-ring
    const msCollarGeo = new THREE.TorusGeometry(12.5, 2.0, 16, 32);
    msCollarGeo.rotateX(Math.PI / 2);
    const msCollar = new THREE.Mesh(msCollarGeo, msRingMat);
    msCollar.position.y = -3.2;
    msRingGroup.add(msCollar);

    this.registerComponent('ms_ring', msRingGroup, {
      name: 'MS-Ring Transmembrane Rotor',
      proteins: 'FliF (24 to 34 subunits)',
      stoichiometry: 'Homomultimeric 24–34-mer ring',
      dimensions: 'Diameter: ~25–28 nm, Thickness: ~6.5 nm',
      pdb: '6YKM, 7CGO',
      role: 'Transmembrane foundation embedded in the inner cytoplasmic membrane. Serves as the central mounting chassis that anchors both the cytoplasmic C-ring below and the central drive shaft rod above. Synthesized first during flagellar biogenesis.',
      explodedY: -15
    });
    this.schematicRotorGroup.add(msRingGroup);

    // =========================================================================
    // 4. Transmission: Central Drive Shaft Rod (FlgB, FlgC, FlgF, FlgG)
    // =========================================================================
    const rodGroup = new THREE.Group();
    rodGroup.position.y = 8;

    const rodGeo = new THREE.CylinderGeometry(3.8, 3.8, 36, 32);
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0x9D4EDD, // Violet Chromatic Axle
      roughness: 0.25,
      metalness: 0.55
    });
    const rodMesh = new THREE.Mesh(rodGeo, rodMat);
    rodMesh.castShadow = true;
    rodGroup.add(rodMesh);

    this.registerComponent('rod', rodGroup, {
      name: 'Central Drive Shaft (Axial Rod)',
      proteins: 'FliE, FlgB, FlgC, FlgF, FlgG',
      stoichiometry: 'FliE (~6), FlgB (6), FlgC (6), FlgF (6), FlgG (~26)',
      dimensions: 'Diameter: ~4 nm, Length: ~36 nm (spans periplasm)',
      pdb: '6S3L, 3HJL',
      role: 'Rigid molecular axle rod that transfers high rotational torque from the inner membrane rotor across the periplasmic space to the external hook and filament. Exhibits remarkable torsional strength without shearing under 300 rev/sec loads.',
      explodedY: 8
    });
    this.schematicRotorGroup.add(rodGroup);

    // =========================================================================
    // 5. Stationary Bushings (Bearings): P-Ring (FlgI) & L-Ring (FlgH)
    // =========================================================================
    // P-Ring in Peptidoglycan
    const pRingGroup = new THREE.Group();
    pRingGroup.position.y = 10;
    const pRingGeo = new THREE.CylinderGeometry(7.8, 7.8, 4.5, 32, 1, true);
    const pRingMat = new THREE.MeshStandardMaterial({
      color: 0x52B788, // Emerald Bearing
      roughness: 0.4,
      metalness: 0.25,
      side: THREE.DoubleSide
    });
    const pRingMesh = new THREE.Mesh(pRingGeo, pRingMat);
    pRingMesh.castShadow = true;
    pRingGroup.add(pRingMesh);

    // Lip on P-ring
    const pLipGeo = new THREE.TorusGeometry(7.8, 1.4, 16, 32);
    pLipGeo.rotateX(Math.PI / 2);
    const pLip = new THREE.Mesh(pLipGeo, pRingMat);
    pRingGroup.add(pLip);

    this.registerComponent('p_ring', pRingGroup, {
      name: 'P-Ring Molecular Bushing',
      proteins: 'FlgI (26 subunits)',
      stoichiometry: 'Homomultimeric 26-mer ring',
      dimensions: 'Diameter: ~16 nm, Height: ~4.5 nm',
      pdb: '1QNW, 6YKM',
      role: 'Non-rotating molecular sleeve bushing anchored within the peptidoglycan murein sacculus. Holds the rotating rod centered and prevents mechanical friction against the cell wall during rotation.',
      explodedY: 10
    });
    this.schematicBushingGroup.add(pRingGroup);

    // L-Ring in Outer Membrane LPS
    const lRingGroup = new THREE.Group();
    lRingGroup.position.y = 24;
    const lRingGeo = new THREE.CylinderGeometry(8.8, 8.8, 6.5, 32, 1, true);
    const lRingMat = new THREE.MeshStandardMaterial({
      color: 0x2A9D8F, // Sea Green Outer Bushing
      roughness: 0.4,
      metalness: 0.25,
      side: THREE.DoubleSide
    });
    const lRingMesh = new THREE.Mesh(lRingGeo, lRingMat);
    lRingMesh.castShadow = true;
    lRingGroup.add(lRingMesh);

    const lLipGeo = new THREE.TorusGeometry(8.8, 1.6, 16, 32);
    lLipGeo.rotateX(Math.PI / 2);
    const lLip = new THREE.Mesh(lLipGeo, lRingMat);
    lRingGroup.add(lLip);

    this.registerComponent('l_ring', lRingGroup, {
      name: 'L-Ring Lipoprotein Bushing',
      proteins: 'FlgH (26 subunits)',
      stoichiometry: 'Homomultimeric 26-mer ring',
      dimensions: 'Diameter: ~18 nm, Height: ~6.5 nm',
      pdb: '1QNW, 6YKM',
      role: 'Non-rotating cylindrical bushing embedded in the outer membrane lipopolysaccharide layer. Acts as a low-friction sealed bearing sleeve allowing the high-speed drive shaft to penetrate outside the bacterium without periplasmic leakage.',
      explodedY: 24
    });
    this.schematicBushingGroup.add(lRingGroup);

    // =========================================================================
    // 6. Universal Joint: Hook (FlgE)
    // In schematic mode, renders a clean cylindrical sleeve from OM (Y=24) to junction (Y=39)
    // =========================================================================
    const hookGroup = new THREE.Group();
    hookGroup.position.y = 24;

    const hookGeo = new THREE.CylinderGeometry(8.5, 8.5, 15, 32, 1, false);
    const hookMat = new THREE.MeshStandardMaterial({
      color: 0x9D4EDD, // Royal Violet Flexible Hook (matching Molecular Nodes palette)
      roughness: 0.35,
      metalness: 0.2
    });
    const hookMesh = new THREE.Mesh(hookGeo, hookMat);
    hookMesh.position.y = 7.5; // Centers cylinder so it spans from Y=24 to Y=39.0 nm
    hookMesh.castShadow = true;
    hookGroup.add(hookMesh);

    this.registerComponent('hook', hookGroup, {
      name: 'Universal Joint (Hook)',
      proteins: 'FlgE (~120 subunits)',
      stoichiometry: 'Homomultimeric ~120-mer curved cylinder',
      dimensions: 'Length: ~55 nm, Diameter: ~17 nm (outer), ~3 nm (lumen)',
      pdb: 'PDB 7CGO, 3A5X, 1WLG',
      role: 'Nature\'s biological universal Cardan joint. High flexural compliance allows it to bend around varying angles while retaining ultra-high torsional stiffness to transmit rotational torque from the cell-bound rod directly to the long external filament.',
      explodedY: 38
    });
    this.schematicRotorGroup.add(hookGroup);

    // =========================================================================
    // 8. Stator Complexes: MotA4 / MotB2 Proton Channels
    // 11 stator units arranged radially around the C-ring / MS-ring
    // =========================================================================
    const numStators = 11;
    const statorRadius = 24.5;
    const statorGroupMaster = new THREE.Group();

    const statorBodyGeo = new THREE.CylinderGeometry(2.4, 2.8, 22, 16);
    const statorMat = new THREE.MeshStandardMaterial({
      color: 0xE63946, // Vivid Crimson / Ruby Stator
      roughness: 0.35,
      metalness: 0.3
    });

    const statorPGAnchorGeo = new THREE.BoxGeometry(3.5, 4.5, 3.5);
    const statorAnchorMat = new THREE.MeshStandardMaterial({
      color: 0xB5179E,
      roughness: 0.45,
      metalness: 0.15
    });

    this.schematicStatorUnits = [];
    for (let i = 0; i < numStators; i++) {
      const angle = (i / numStators) * Math.PI * 2;
      const x = Math.cos(angle) * statorRadius;
      const z = Math.sin(angle) * statorRadius;

      const singleStator = new THREE.Group();
      singleStator.position.set(x, -8, z);
      singleStator.userData = {
        baseRadius: statorRadius,
        baseAngle: angle
      };

      // Main channel body spanning inner membrane and periplasm
      const body = new THREE.Mesh(statorBodyGeo, statorMat);
      body.castShadow = true;
      singleStator.add(body);

      // OmpA-like Peptidoglycan anchor at top of stator
      const anchor = new THREE.Mesh(statorPGAnchorGeo, statorAnchorMat);
      anchor.position.y = 11;
      singleStator.add(anchor);

      // Orient facing the center rotor
      singleStator.lookAt(0, -8, 0);
      statorGroupMaster.add(singleStator);
      this.schematicStatorUnits.push(singleStator);
    }

    this.registerComponent('stator', statorGroupMaster, {
      name: 'MotA4 / MotB2 Stator Complexes',
      proteins: 'MotA (4 copies), MotB (2 copies) per unit (×11 units = 66 proteins)',
      stoichiometry: '11–13 independent stator complexes arranged around rotor',
      dimensions: 'Height: ~22 nm spanning IM and Peptidoglycan',
      pdb: '6YKM, 6YKP',
      role: 'Proton-conducting ion channels that generate mechanical torque. Anchored firmly into the rigid peptidoglycan cell wall via MotB\'s OmpA-like domain. Protons (H+) flow through MotA/B down the electrochemical gradient, driving power-stroke conformational shifts that engage FliG on the rotor to push it around.',
      explodedY: 0
    });
    this.schematicStatorGroup.add(statorGroupMaster);

    // Ensure schematic model begins hidden in molecular mode
    this.setSchematicVisible(this.representationMode === 'schematic');
  }

  /**
   * Build the complete authentic biological flagellar tail assembly:
   * 1. Hook-Associated Junction (FlgK / HAP1 and FlgL / HAP2 adapter collar rings)
   * 2. Helical Flagellar Filament Tail (FliC 11-protofilament corkscrew propeller)
   * 3. Distal Filament Cap (FliD / HAP3 pentameric chaperone machine)
   *
   * Attached directly to this.rotorGroup so it rotates with the motor at ~100 Hz
   * in both Molecular Nodes Cryo-EM mode and Schematic mode.
   */
  /**
   * Complete Flagellar Tail Propeller Assembly (Macromolecular Protein Architecture)
   * 1. Hook-Associated Junction (FlgK / HAP1 and FlgL / HAP2 dual 11-mer adapter rings)
   * 2. Helical Flagellar Filament Tail (FliC 11-protofilament corkscrew propeller with globular subunit relief)
   * 3. Distal Filament Cap (FliD / HAP3 pentameric chaperone umbrella dome with flexible leg domains)
   *
   * Attached directly to this.rotorGroup so it rotates with the motor at ~100 Hz
   * in both Molecular Nodes Cryo-EM mode and Schematic mode.
   */
  createHelicalFilamentTail() {
    this.filamentMasterGroup = new THREE.Group();
    this.filamentMasterGroup.name = 'Flagellar_Tail_Assembly_Master';
    this.rotorGroup.add(this.filamentMasterGroup);

    // =========================================================================
    // 1. Hook-Associated Junction (FlgK / HAP1 and FlgL / HAP2 Adapter Collar)
    // Spans Y = 39.0 nm to Y = 46.5 nm directly atop the FlgE hook cylinder.
    // In authentic structural biology (PDB 5GY2 / 7CGO), this is NOT a mechanical
    // cylinder with rivet studs; it consists of two stacked 11-fold rings of
    // organic macromolecular globular protein subunits bridging FlgE to FliC.
    // =========================================================================
    const hapGroup = new THREE.Group();
    hapGroup.name = 'HAP_Junction_Group';

    // 1a. FlgK (HAP1) Proximal 11-mer Ring (Y = 39.0 to 42.6 nm)
    // 11 distinct macromolecular globular protein monomers arranged in an 11-fold circle.
    // Colors conform to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md: Royal Violet (#8338EC / #9D4EDD)
    const flgKRadius = 8.6;
    const flgKY = 40.8;
    const flgKColors = [
      0x8338EC, 0x8E44AD, 0x7B2CBF, 0x9D4EDD, 0x6A0DAD,
      0x8338EC, 0x8E44AD, 0x7B2CBF, 0x9D4EDD, 0x6A0DAD, 0x8338EC
    ];

    // Shared smooth geometries for the organic globular domains
    const flgKBodyGeo = new THREE.SphereGeometry(1.6, 16, 14);
    flgKBodyGeo.scale(1.15, 1.35, 0.95);
    const flgKOuterLobeGeo = new THREE.SphereGeometry(1.2, 14, 12);
    flgKOuterLobeGeo.scale(0.9, 1.25, 0.85);

    for (let i = 0; i < 11; i++) {
      const angle = (i / 11) * Math.PI * 2;
      const subGroup = new THREE.Group();
      subGroup.name = `FlgK_Subunit_${i + 1}`;

      const col = flgKColors[i];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.34,
        metalness: 0.12
      });

      // Central core domain (D1)
      const bodyMesh = new THREE.Mesh(flgKBodyGeo, mat);
      bodyMesh.position.set(Math.cos(angle) * flgKRadius, flgKY, Math.sin(angle) * flgKRadius);
      bodyMesh.rotation.y = -angle + Math.PI / 2;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      subGroup.add(bodyMesh);

      // Outer solvent-exposed globular lobe (D2)
      const outerMesh = new THREE.Mesh(flgKOuterLobeGeo, mat);
      const outerR = flgKRadius + 1.25;
      outerMesh.position.set(Math.cos(angle) * outerR, flgKY + 0.15, Math.sin(angle) * outerR);
      outerMesh.rotation.y = -angle + Math.PI / 2;
      outerMesh.castShadow = true;
      subGroup.add(outerMesh);

      // Inner lumen domain (D0) lining the 2.5-nm channel
      const innerMesh = new THREE.Mesh(flgKOuterLobeGeo, mat);
      const innerR = flgKRadius - 1.6;
      innerMesh.position.set(Math.cos(angle) * innerR, flgKY - 0.2, Math.sin(angle) * innerR);
      innerMesh.scale.set(0.65, 0.85, 0.65);
      subGroup.add(innerMesh);

      hapGroup.add(subGroup);
    }

    // 1b. FlgL (HAP2) Distal 11-mer Ring (Y = 42.6 to 46.5 nm)
    // 11 distinct macromolecular globular protein monomers, rotated by 1/22 rev (16.36°)
    // Colors conform to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md: Deep Violet-Magenta (#7209B7 / #B5179E)
    const flgLRadius = 7.9;
    const flgLY = 44.55;
    const flgLColors = [
      0x7209B7, 0xB5179E, 0x9B1B9F, 0x8338EC, 0x6A0DAD,
      0x7209B7, 0xB5179E, 0x9B1B9F, 0x8338EC, 0x6A0DAD, 0x7209B7
    ];

    const flgLBodyGeo = new THREE.SphereGeometry(1.5, 16, 14);
    flgLBodyGeo.scale(1.1, 1.3, 0.95);
    const flgLOuterLobeGeo = new THREE.SphereGeometry(1.15, 14, 12);
    flgLOuterLobeGeo.scale(0.88, 1.2, 0.82);

    for (let i = 0; i < 11; i++) {
      // 16.36 deg offset nests FlgL into the inter-subunit clefts of FlgK below
      const angle = ((i + 0.5) / 11) * Math.PI * 2;
      const subGroup = new THREE.Group();
      subGroup.name = `FlgL_Subunit_${i + 1}`;

      const col = flgLColors[i];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.34,
        metalness: 0.12
      });

      // Core domain (D1)
      const bodyMesh = new THREE.Mesh(flgLBodyGeo, mat);
      bodyMesh.position.set(Math.cos(angle) * flgLRadius, flgLY, Math.sin(angle) * flgLRadius);
      bodyMesh.rotation.y = -angle + Math.PI / 2;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      subGroup.add(bodyMesh);

      // Outer solvent-exposed globular lobe (D2)
      const outerMesh = new THREE.Mesh(flgLOuterLobeGeo, mat);
      const outerR = flgLRadius + 1.15;
      outerMesh.position.set(Math.cos(angle) * outerR, flgLY + 0.1, Math.sin(angle) * outerR);
      outerMesh.rotation.y = -angle + Math.PI / 2;
      outerMesh.castShadow = true;
      subGroup.add(outerMesh);

      // Inner lumen domain (D0)
      const innerMesh = new THREE.Mesh(flgLOuterLobeGeo, mat);
      const innerR = flgLRadius - 1.5;
      innerMesh.position.set(Math.cos(angle) * innerR, flgLY - 0.2, Math.sin(angle) * innerR);
      innerMesh.scale.set(0.62, 0.82, 0.62);
      subGroup.add(innerMesh);

      hapGroup.add(subGroup);
    }

    // 1c. Continuous Hollow 2.5-nm Secretion Lumen Channel through FlgK/L
    const hapLumenGeo = new THREE.CylinderGeometry(1.25, 1.25, 5.2, 22, 1, true);
    const hapLumenMat = new THREE.MeshStandardMaterial({
      color: 0x1A102F,
      roughness: 0.85,
      side: THREE.BackSide
    });
    const hapLumenMesh = new THREE.Mesh(hapLumenGeo, hapLumenMat);
    hapLumenMesh.position.y = 41.6;
    hapGroup.add(hapLumenMesh);

    this.registerComponent('hap_junction', hapGroup, {
      name: 'Hook-Filament Junction (FlgK/FlgL)',
      subtitle: 'HAP1 & HAP2 Dual 11-mer Adapter Rings (~22 Subunits)',
      proteins: 'FlgK (HAP1, 11 copies) + FlgL (HAP2, 11 copies)',
      stoichiometry: 'Dual 11-fold interlocking macromolecular rings bridging FlgE to FliC',
      dimensions: 'Height: ~7.5 nm (Y = 39.0 to 46.5 nm), Diameter: ~17–19 nm, Lumen: ~2.5 nm',
      pdb: 'PDB 1UCU, 5GY2, 7CGO',
      role: 'Essential dual-ring macromolecular adapter connecting the FlgE hook to the FliC filament. FlgE and FliC cannot bind directly due to symmetry and domain interface mismatch. FlgK (11 copies) forms the proximal ring on FlgE, and FlgL (11 copies) forms the distal ring, providing the structural nucleation template for the 11 protofilaments of flagellin.',
      explodedY: 20
    });
    this.filamentMasterGroup.add(hapGroup);

    // =========================================================================
    // 2. Helical Filament Propeller Tail (FliC / Flagellin)
    // Left-Handed Superhelical Corkscrew Wave from Y = 43.6 nm to Y = 160.0 nm
    // Biophysically authentic 11-protofilament macromolecular cobblestone lattice:
    // - 11 distinct longitudinal/helical protofilament ridges with organic grooves
    // - Repeating globular subunit nodules (D2/D3 domains of FliC, ~5.2 nm repeat)
    // - Per-vertex color taxonomy: Golden Amber (#FB8500) and Pyrite Gold (#FFB703)
    // - Hollow 2.0-nm central secretion lumen channel running down the interior
    // =========================================================================
    const filamentGroup = new THREE.Group();
    filamentGroup.name = 'FliC_Helical_Filament_Group';

    const turns = 2.4;
    const helixRadius = 11.5;
    const yStart = 43.6;
    const yEnd = 160.0;
    const ySpan = yEnd - yStart;
    const samplePoints = 120;
    const curvePoints = [];

    for (let i = 0; i <= samplePoints; i++) {
      const t = i / samplePoints;
      // Smooth sinusoidal onset so the helix starts perfectly centered on the hook junction
      const blend = Math.sin(t * Math.PI * 0.5);
      // Left-handed helical angle (negative theta)
      const theta = -t * Math.PI * 2 * turns;
      const x = blend * helixRadius * Math.cos(theta);
      const z = blend * helixRadius * Math.sin(theta);
      const y = yStart + t * ySpan;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const filamentCurve = new THREE.CatmullRomCurve3(curvePoints);

    // Construct the authentic 11-protofilament macromolecular mesh
    const tubularSegments = 240;
    const radialSegments = 44; // 4 segments per protofilament (11 protofilaments total)
    const baseTubeRadius = 5.2;
    const curveLength = filamentCurve.getLength();

    // Compute Frenet frames for parallel transport along the curve
    const frames = filamentCurve.computeFrenetFrames(tubularSegments, false);

    const numVertices = (tubularSegments + 1) * (radialSegments + 1);
    const numIndices = tubularSegments * radialSegments * 6;

    const positions = new Float32Array(numVertices * 3);
    const normals = new Float32Array(numVertices * 3);
    const colors = new Float32Array(numVertices * 3);
    const uvs = new Float32Array(numVertices * 2);
    const indices = new Uint32Array(numIndices);

    const protoColorA = new THREE.Color(0xFB8500); // Golden Amber
    const protoColorB = new THREE.Color(0xFFB703); // Pyrite Gold

    let vIdx = 0;
    for (let i = 0; i <= tubularSegments; i++) {
      const u = i / tubularSegments;
      const pt = filamentCurve.getPointAt(u);
      const N = frames.normals[i];
      const B = frames.binormals[i];
      const s = u * curveLength; // arc length along filament (nm)

      for (let j = 0; j <= radialSegments; j++) {
        const v = j / radialSegments;
        const angle = v * Math.PI * 2;

        // 11 Protofilaments around the circumference
        const protoIndex = Math.floor(v * 11) % 11;

        // 11-protofilament ridge profile (sinusoidal crest with inter-protofilament seam)
        const protoRidge = Math.cos(11 * angle) * 0.58;

        // 5-start helical lattice phase shift for FliC flagellin subunits (~5.2 nm axial repeat)
        const protoPhase = (protoIndex * 5 / 11) * Math.PI * 2;
        const subunitRepeat = Math.sin((s / 5.2) * Math.PI * 2 + protoPhase) * 0.46;

        // Micro-roughness simulating atomic van der Waals envelope
        const microRough = Math.cos(22 * angle + (s / 2.6) * Math.PI * 2) * 0.12;

        // Smoothly flare base of filament (u < 0.08) to dock flush into FlgL subunits
        const baseRadiusBlend = (u < 0.08) ? (baseTubeRadius + (1.0 - u / 0.08) * 1.85) : baseTubeRadius;
        const effectiveRadius = baseRadiusBlend + protoRidge + subunitRepeat + microRough;

        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const normalVec = new THREE.Vector3()
          .addScaledVector(N, cosA)
          .addScaledVector(B, sinA)
          .normalize();

        const posX = pt.x + normalVec.x * effectiveRadius;
        const posY = pt.y + normalVec.y * effectiveRadius;
        const posZ = pt.z + normalVec.z * effectiveRadius;

        positions[vIdx * 3] = posX;
        positions[vIdx * 3 + 1] = posY;
        positions[vIdx * 3 + 2] = posZ;

        normals[vIdx * 3] = normalVec.x;
        normals[vIdx * 3 + 1] = normalVec.y;
        normals[vIdx * 3 + 2] = normalVec.z;

        uvs[vIdx * 2] = u;
        uvs[vIdx * 2 + 1] = v;

        // Biophysical color modulation:
        // Alternating protofilament base colors + dark inter-protofilament grooves + bright nodule crests
        const isAlt = (protoIndex % 2 === 0);
        const baseCol = isAlt ? protoColorA : protoColorB;

        // Deepen grooves (ambient occlusion) and brighten globular subunit crests
        const depthFactor = THREE.MathUtils.clamp(0.85 + (protoRidge + subunitRepeat) * 0.28, 0.72, 1.15);
        colors[vIdx * 3] = THREE.MathUtils.clamp(baseCol.r * depthFactor, 0, 1);
        colors[vIdx * 3 + 1] = THREE.MathUtils.clamp(baseCol.g * depthFactor, 0, 1);
        colors[vIdx * 3 + 2] = THREE.MathUtils.clamp(baseCol.b * depthFactor, 0, 1);

        vIdx++;
      }
    }

    // Build indices for the tubular grid
    let iIdx = 0;
    const stride = radialSegments + 1;
    for (let i = 0; i < tubularSegments; i++) {
      for (let j = 0; j < radialSegments; j++) {
        const a = i * stride + j;
        const b = (i + 1) * stride + j;
        const c = (i + 1) * stride + (j + 1);
        const d = i * stride + (j + 1);

        indices[iIdx++] = a;
        indices[iIdx++] = b;
        indices[iIdx++] = d;

        indices[iIdx++] = b;
        indices[iIdx++] = c;
        indices[iIdx++] = d;
      }
    }

    const filamentGeo = new THREE.BufferGeometry();
    filamentGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    filamentGeo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    filamentGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    filamentGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    filamentGeo.setIndex(new THREE.BufferAttribute(indices, 1));
    filamentGeo.computeVertexNormals();

    const filamentMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.32,
      metalness: 0.12,
      side: THREE.DoubleSide
    });

    const filamentMesh = new THREE.Mesh(filamentGeo, filamentMat);
    filamentMesh.castShadow = true;
    filamentMesh.receiveShadow = true;
    filamentGroup.add(filamentMesh);

    // 2b. Central 2.0-nm Hollow Secretion Lumen Channel through the entire helix
    const filLumenRadius = 1.0;
    const filLumenGeo = new THREE.TubeGeometry(filamentCurve, tubularSegments, filLumenRadius, 16, false);
    const filLumenMat = new THREE.MeshStandardMaterial({
      color: 0x1A102F,
      roughness: 0.9,
      side: THREE.BackSide
    });
    const filLumenMesh = new THREE.Mesh(filLumenGeo, filLumenMat);
    filamentGroup.add(filLumenMesh);

    this.registerComponent('filament', filamentGroup, {
      name: 'Helical Filament Tail (FliC Propeller)',
      subtitle: '11-Protofilament Macromolecular Corkscrew (~20,000 FliC)',
      proteins: 'FliC (Flagellin, 51.6 kDa, ~20,000 subunits in vivo)',
      stoichiometry: '11 protofilaments with cobblestone D2/D3 globular surface domains around 2 nm lumen',
      dimensions: 'Outer Diameter: ~20 nm, Inner Lumen: ~2 nm, Height: ~115 nm (up to 15 µm in vivo)',
      pdb: 'PDB 1UCU, 5GY2',
      role: 'The primary Archimedean screw propeller that drives bacterial locomotion. Up to 20,000 FliC flagellin subunits polymerize into a tubular cylinder of 11 longitudinal protofilaments with a hollow 2-nm central lumen. During CCW motor rotation, it forms a left-handed superhelical corkscrew bundle propelling the cell at ~30 µm/s (~30 body lengths/s). CW motor rotation triggers a mechanical strain-induced polymorphic transition to a right-handed semi-coiled form, unraveling the bundle to initiate tumble reorientation.',
      explodedY: 50
    });
    this.filamentMasterGroup.add(filamentGroup);

    // =========================================================================
    // 3. Distal Filament Cap (FliD / HAP3 Pentameric Chaperone Machine)
    // Sits at Y = 160.0 nm at the tip of the filament.
    // In authentic structural biology (PDB 5H5V / 6K4A), FliD is a homopentameric
    // (FliD)5 chaperone that forms an organic UMBRELLA DOME / MUSHROOM CAP,
    // NOT a mechanical spur gear or flat polygonal cylinder!
    // It features:
    // - 5 distinct organic globular head lobes (D2/D3 domains) radiating in a 5-fold rosette
    // - 5 curved flexible chaperone legs (D1 stalks) reaching down to grasp the protofilaments
    // - An organic central folding chamber vault directly above the 2-nm secretion lumen
    // - Colors conform to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md: Luminous Seafoam / Emerald Aqua
    // =========================================================================
    const capGroup = new THREE.Group();
    capGroup.name = 'FliD_Filament_Cap_Group';

    // Tip position and tangent from the filament curve
    const tipPos = curvePoints[curvePoints.length - 1];
    const preTipPos = curvePoints[curvePoints.length - 3];
    const tangent = new THREE.Vector3().subVectors(tipPos, preTipPos).normalize();

    capGroup.position.copy(tipPos);
    capGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);

    // 5-Monomer Color Palette: Harmonic shifts highlighting the 5 polypeptide chains of (FliD)5
    const fliDColors = [
      0x00F5D4, // Luminous Aqua (Monomer A)
      0x06D6A0, // Vivid Seafoam (Monomer B)
      0x2EC4B6, // Cyan-Jade (Monomer C)
      0x00E8C6, // Electric Aqua (Monomer D)
      0x10B981  // Emerald Green (Monomer E)
    ];

    // Shared organic geometries for FliD head domains and chaperone legs
    const headLobeGeo = new THREE.SphereGeometry(1.85, 18, 16);
    headLobeGeo.scale(1.25, 0.95, 1.45);

    const outerCrestGeo = new THREE.SphereGeometry(1.35, 16, 14);
    outerCrestGeo.scale(1.1, 0.85, 1.3);

    const footLobeGeo = new THREE.SphereGeometry(0.95, 14, 12);
    footLobeGeo.scale(1.1, 0.75, 1.1);

    const canopyRadius = 5.6;
    const canopyY = 2.8;

    // 3a. Central Arched Umbrella Canopy Dome (PDB 5H5V)
    // Seamlessly binds the 5 FliD monomers into an organic, vaulted umbrella dome
    const umbrellaCanopyGeo = new THREE.CylinderGeometry(5.2, 6.2, 1.8, 30, 2, false);
    const canopyPos = umbrellaCanopyGeo.attributes.position;
    for (let c = 0; c < canopyPos.count; c++) {
      const cx = canopyPos.getX(c);
      const cy = canopyPos.getY(c);
      const cz = canopyPos.getZ(c);
      const cAngle = Math.atan2(cz, cx);
      const cDist = Math.sqrt(cx * cx + cz * cz);
      // 5-lobed radial ripple
      const lobeWave = 1.0 + 0.12 * Math.cos(5 * cAngle);
      // Arching vault curvature (higher in center)
      const archDrop = -(cDist / 6.2) * 0.45;
      canopyPos.setX(c, cx * lobeWave);
      canopyPos.setY(c, cy + archDrop);
      canopyPos.setZ(c, cz * lobeWave);
    }
    umbrellaCanopyGeo.computeVertexNormals();

    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0x06D6A0, // Seafoam Green
      roughness: 0.32,
      metalness: 0.10
    });
    const umbrellaCanopyMesh = new THREE.Mesh(umbrellaCanopyGeo, canopyMat);
    umbrellaCanopyMesh.position.y = 2.7;
    umbrellaCanopyMesh.castShadow = true;
    capGroup.add(umbrellaCanopyMesh);

    for (let m = 0; m < 5; m++) {
      const angle = (m / 5) * Math.PI * 2;
      const monomerGroup = new THREE.Group();
      monomerGroup.name = `FliD_Monomer_${String.fromCharCode(65 + m)}`;

      const col = fliDColors[m];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.30,
        metalness: 0.10
      });

      // 3a. Head / Canopy Globular Domain (D2/D3) - smooth organic umbrella lobe
      const headMesh = new THREE.Mesh(headLobeGeo, mat);
      const headX = Math.cos(angle) * canopyRadius;
      const headZ = Math.sin(angle) * canopyRadius;
      headMesh.position.set(headX, canopyY, headZ);
      headMesh.rotation.y = -angle + Math.PI / 2;
      headMesh.castShadow = true;
      headMesh.receiveShadow = true;
      monomerGroup.add(headMesh);

      // Outer solvent-exposed crest lobe (D3 domain fold)
      const crestMesh = new THREE.Mesh(outerCrestGeo, mat);
      const crestR = canopyRadius + 1.6;
      crestMesh.position.set(Math.cos(angle) * crestR, canopyY - 0.35, Math.sin(angle) * crestR);
      crestMesh.rotation.y = -angle + Math.PI / 2;
      crestMesh.castShadow = true;
      monomerGroup.add(crestMesh);

      // 3b. Flexible Chaperone Leg / Stalk Domain (D1 coiled-coil arm)
      // Curves gracefully downward from canopy underside to clamp onto the filament rim
      const legPoints = [
        new THREE.Vector3(Math.cos(angle) * (canopyRadius - 0.6), canopyY - 0.8, Math.sin(angle) * (canopyRadius - 0.6)),
        new THREE.Vector3(Math.cos(angle) * 5.3, 0.8, Math.sin(angle) * 5.3),
        new THREE.Vector3(Math.cos(angle) * 4.9, -1.2, Math.sin(angle) * 4.9),
        new THREE.Vector3(Math.cos(angle) * 4.8, -2.6, Math.sin(angle) * 4.8)
      ];
      const legCurve = new THREE.CatmullRomCurve3(legPoints);
      const legGeo = new THREE.TubeGeometry(legCurve, 18, 0.72, 12, false);
      const legMesh = new THREE.Mesh(legGeo, mat);
      legMesh.castShadow = true;
      monomerGroup.add(legMesh);

      // Chaperone foot domain (D1 anchor gripping the 11-protofilament tip)
      const footMesh = new THREE.Mesh(footLobeGeo, mat);
      footMesh.position.set(Math.cos(angle) * 4.8, -2.7, Math.sin(angle) * 4.8);
      footMesh.castShadow = true;
      monomerGroup.add(footMesh);

      capGroup.add(monomerGroup);
    }

    // 3c. Central Vaulted Folding Chamber Dome (underside catalytic antechamber)
    // Smooth, organic vaulted ceiling directly capping the central 2-nm lumen
    const vaultDomeGeo = new THREE.SphereGeometry(3.6, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.48);
    const vaultDomeMat = new THREE.MeshStandardMaterial({
      color: 0x70E000, // Vibrant Lime/Emerald catalytic folding pocket
      roughness: 0.35,
      metalness: 0.12,
      side: THREE.DoubleSide
    });
    const vaultDomeMesh = new THREE.Mesh(vaultDomeGeo, vaultDomeMat);
    vaultDomeMesh.position.y = 2.4;
    capGroup.add(vaultDomeMesh);

    // Central apical pore / exit depression at the crown of the umbrella
    const crownPoreGeo = new THREE.TorusGeometry(1.6, 0.55, 14, 24);
    crownPoreGeo.rotateX(Math.PI / 2);
    const crownPoreMat = new THREE.MeshStandardMaterial({
      color: 0x06D6A0,
      roughness: 0.28,
      metalness: 0.15
    });
    const crownPoreMesh = new THREE.Mesh(crownPoreGeo, crownPoreMat);
    crownPoreMesh.position.y = 4.2;
    capGroup.add(crownPoreMesh);

    // Inner lumen antechamber cavity
    const exitLumenGeo = new THREE.CylinderGeometry(1.1, 1.1, 2.2, 18, 1, true);
    const exitLumenMat = new THREE.MeshStandardMaterial({
      color: 0x1A102F,
      roughness: 0.9,
      side: THREE.BackSide
    });
    const exitLumenMesh = new THREE.Mesh(exitLumenGeo, exitLumenMat);
    exitLumenMesh.position.y = 3.6;
    capGroup.add(exitLumenMesh);

    this.registerComponent('filament_cap', capGroup, {
      name: 'Filament Distal Cap (FliD Chaperone)',
      subtitle: 'HAP3 Homopentameric Umbrella Dome Machine',
      proteins: 'FliD (HAP3, 5 subunits, 50 kDa each, homopentamer (FliD)5)',
      stoichiometry: 'Pentameric umbrella dome with 5 flexible chaperone leg domains',
      dimensions: 'Diameter: ~15 nm, Height: ~8 nm (Y ≈ 160 nm), Lumen: ~2 nm',
      pdb: 'PDB 5H5V, 5GY2, 6K4A',
      role: 'Pentameric protein-folding machine and chaperone cap located at the growing tip of the flagellar filament. As unfolded FliC monomers travel up the narrow 2-nm central secretion channel from the cytoplasm, the 5-legged FliD umbrella cap prevents them from escaping into the environment, dynamically rotating like a molecular ratchet to fold and insert each monomer into the 11 growing protofilaments.',
      explodedY: 245
    });
    this.filamentMasterGroup.add(capGroup);
  }

  /**
   * Dynamic Proton Motive Force (H+ ion flow) particle stream
   * Simulates glowing protons streaming down the electrochemical gradient
   * from the periplasm through the MotA/MotB stators into the cytosol.
   */
  buildProtonParticles() {
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const numStators = 11;
    const statorRadius = 24.5;

    for (let i = 0; i < particleCount; i++) {
      // Assign to one of the 11 stator channels
      const statorIdx = i % numStators;
      const baseAngle = (statorIdx / numStators) * Math.PI * 2;
      const angleOffset = (Math.random() - 0.5) * 0.15;
      const r = statorRadius + (Math.random() - 0.5) * 2.5;

      const angle = baseAngle + angleOffset;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      // Start in periplasm (Y = 8 to 14) and stream down to cytosol (Y = -28)
      const y = 14 - Math.random() * 42;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Downward velocity + swirl towards rotor
      velocities[i * 3] = -Math.sin(angle) * 0.15;
      velocities[i * 3 + 1] = -(0.55 + Math.random() * 0.45); // downward H+ flow
      velocities[i * 3 + 2] = Math.cos(angle) * 0.15;

      // Glowing Cyan/Gold H+ ion colors
      if (Math.random() > 0.4) {
        colors[i * 3] = 0.0;     // R
        colors[i * 3 + 1] = 0.95; // G (Cyan)
        colors[i * 3 + 2] = 1.0;  // B
      } else {
        colors[i * 3] = 1.0;     // R (Gold)
        colors[i * 3 + 1] = 0.85; // G
        colors[i * 3 + 2] = 0.1;  // B
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending
    });

    this.protonParticleSystem = new THREE.Points(geometry, pMat);
    this.protonParticleSystem.userData = { velocities, statorRadius, numStators };
    this.rootGroup.add(this.protonParticleSystem);
  }

  /**
   * Load authentic 3.4 Å cryo-EM structure of the flagellar motor-hook complex (PDB: 7CGO)
   * exported directly from Molecular Nodes in Blender.
   */
  loadMolecularNodesModel() {
    this.mnGroup = new THREE.Group();
    this.mnGroup.name = 'MN_7CGO_Assembly_Group';
    this.rotorGroup.add(this.mnGroup);

    const loader = new GLTFLoader();
    loader.load('/models/7CGO_flagellar_motor.glb', (gltf) => {
      const model = gltf.scene;
      model.name = 'MN_7CGO_Molecular_Assembly';

      model.traverse((child) => {
        if (child.isMesh && child.geometry.attributes.position) {
          child.geometry.center();
          const pos = child.geometry.attributes.position;
          const count = pos.count;
          const colors = new Float32Array(count * 3);

          // Color Segmentation Palette according to user specification
          const cRingCol = new THREE.Color(0xFF7B00);      // 1. Bottom: Vibrant Orange (C-ring switch complex FliG/M/N)
          const msInnerGreen = new THREE.Color(0x06D6A0);  // 2a. Middle Inner: Vivid Mint / Jade Green (FliF inner collar)
          const msOuterGreen = new THREE.Color(0x70E000);  // 2b. Middle Outer: Luminous Lime Green (FliF outer membrane ring)
          const rodCol = new THREE.Color(0xFFD166);        // 3. Central Drive Shaft: Golden Yellow (FlgB/C/F/G axle rod)
          const pRingCol = new THREE.Color(0xE76F51);      // 4. Peptidoglycan Bushing: Warm Terracotta (FlgI P-ring)
          const lRingCol = new THREE.Color(0x0077B6);      // 5. Outer Membrane Bushing: Deep Marine Blue (FlgH L-ring)
          const hookCol = new THREE.Color(0x9D4EDD);       // 6. Universal Joint: Royal Violet (FlgE hook)

          for (let i = 0; i < count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = pos.getZ(i);
            const r = Math.sqrt(x * x + z * z);

            let col;
            if (y < -10) {
              // Bottom switch complex -> Orange
              col = cRingCol;
            } else if (y < 3) {
              // MS-Ring in inner membrane -> Split into Inner Green vs Outer Green
              col = (r < 6.8) ? msInnerGreen : msOuterGreen;
            } else if (y < 14) {
              // Periplasmic Peptidoglycan layer -> Inner Golden Rod vs Outer Terracotta P-Ring Bushing
              col = (r < 4.4) ? rodCol : pRingCol;
            } else if (y < 21) {
              // Outer Membrane layer -> Inner Golden Rod vs Outer Deep Blue L-Ring Bushing
              col = (r < 4.4) ? rodCol : lRingCol;
            } else {
              // Top universal joint -> Violet Hook
              col = hookCol;
            }

            const noise = ((i % 17) / 17 - 0.5) * 0.08;
            colors[i * 3] = THREE.MathUtils.clamp(col.r + noise, 0, 1);
            colors[i * 3 + 1] = THREE.MathUtils.clamp(col.g + noise, 0, 1);
            colors[i * 3 + 2] = THREE.MathUtils.clamp(col.b + noise, 0, 1);
          }

          child.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
          child.material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.35,
            metalness: 0.12,
            side: THREE.DoubleSide
          });
          child.castShadow = true;
          child.receiveShadow = true;
          child.userData.componentKey = 'molecular_7cgo';

          // BIOPHYSICAL DECOUPLING & EXPLODED VIEW PARTITIONING:
          // In nature:
          // - P-Ring (FlgI) and L-Ring (FlgH) are non-rotating sleeve bushings anchored in PG and OM.
          // - Rotor (C-ring, MS-ring, rod, hook) spins around the central axis.
          // - During exploded disassembly, C-ring and MS-ring separate downward, Hook separates upward,
          //   while Rod and Bushings remain 100% stationary.
          if (child.geometry.index) {
            const indices = child.geometry.index.array;
            const triCount = indices.length / 3;
            const cRingIndices = [];
            const msInnerIndices = [];
            const msOuterIndices = [];
            const rodIndices = [];
            const pRingIndices = [];
            const lRingIndices = [];
            const hookIndices = [];

            for (let i = 0; i < triCount; i++) {
              const i0 = indices[i * 3];
              const i1 = indices[i * 3 + 1];
              const i2 = indices[i * 3 + 2];

              const yMid = (pos.getY(i0) + pos.getY(i1) + pos.getY(i2)) / 3;
              const xMid = (pos.getX(i0) + pos.getX(i1) + pos.getX(i2)) / 3;
              const zMid = (pos.getZ(i0) + pos.getZ(i1) + pos.getZ(i2)) / 3;
              const rMid = Math.sqrt(xMid * xMid + zMid * zMid);

              if (yMid < -10.0) {
                // Bottom switch complex -> C-Ring
                cRingIndices.push(i0, i1, i2);
              } else if (yMid < 3.0) {
                // Middle inner/outer membrane ring -> MS-Ring (FliF)
                if (rMid < 6.8) {
                  msInnerIndices.push(i0, i1, i2); // Inner Collar (FliF inner core)
                } else {
                  msOuterIndices.push(i0, i1, i2); // Outer Rim (FliF transmembrane ring)
                }
              } else if (yMid < 14.0) {
                if (rMid < 4.4) {
                  rodIndices.push(i0, i1, i2);
                } else {
                  pRingIndices.push(i0, i1, i2);
                }
              } else if (yMid < 21.0) {
                if (rMid < 4.4) {
                  rodIndices.push(i0, i1, i2);
                } else {
                  lRingIndices.push(i0, i1, i2);
                }
              } else {
                // Top universal joint -> FlgE Hook
                hookIndices.push(i0, i1, i2);
              }
            }

            const buildSubGroup = (idxArr, compKey, parentGroup, groupName) => {
              if (!idxArr || idxArr.length === 0) return null;
              const subGeo = child.geometry.clone();
              // CRITICAL: Geometry has 338,514 vertices; index buffers MUST use 32-bit integers to prevent
              // 16-bit integer overflow (which would map high-elevation hook vertices modulo 65536 down to the MS inner collar)
              subGeo.setIndex(new THREE.Uint32BufferAttribute(new Uint32Array(idxArr), 1));
              const subMesh = new THREE.Mesh(subGeo, child.material);
              subMesh.castShadow = true;
              subMesh.receiveShadow = true;
              subMesh.userData.componentKey = compKey;

              const grp = new THREE.Group();
              grp.name = groupName;
              grp.scale.set(1.48, 1.48, 1.48);
              grp.position.set(0, 4, 0);
              grp.add(subMesh);
              parentGroup.add(grp);
              return grp;
            };

            // 1. C-Ring Sub-group (FliG/M/N switch complex, separates downwards)
            this.mnCRingGroup = buildSubGroup(cRingIndices, 'c_ring', this.mnGroup, 'MN_7CGO_CRing_Group');

            // 2. MS-Ring Sub-group (FliF inner collar and outer rim, separates downwards)
            this.mnMSRingGroup = new THREE.Group();
            this.mnMSRingGroup.name = 'MN_7CGO_MSRing_Group';
            this.mnMSRingGroup.scale.set(1.48, 1.48, 1.48);
            this.mnMSRingGroup.position.set(0, 4, 0);

            if (msInnerIndices.length > 0) {
              const innerGeo = child.geometry.clone();
              innerGeo.setIndex(new THREE.Uint32BufferAttribute(new Uint32Array(msInnerIndices), 1));
              const innerMesh = new THREE.Mesh(innerGeo, child.material);
              innerMesh.castShadow = true;
              innerMesh.receiveShadow = true;
              innerMesh.userData.componentKey = 'ms_ring';
              this.mnMSRingGroup.add(innerMesh);
            }

            if (msOuterIndices.length > 0) {
              const outerGeo = child.geometry.clone();
              outerGeo.setIndex(new THREE.Uint32BufferAttribute(new Uint32Array(msOuterIndices), 1));
              const outerMesh = new THREE.Mesh(outerGeo, child.material);
              outerMesh.castShadow = true;
              outerMesh.receiveShadow = true;
              outerMesh.userData.componentKey = 'ms_ring';
              this.mnMSRingGroup.add(outerMesh);
            }

            this.mnGroup.add(this.mnMSRingGroup);

            // 3. Central Drive Shaft Rod Sub-group (Axial axle, 100% stationary)
            this.mnRodGroup = buildSubGroup(rodIndices, 'rod', this.mnGroup, 'MN_7CGO_Rod_Group');

            // 4. Hook Sub-group (FlgE universal joint base, separates upwards)
            this.mnHookGroup = buildSubGroup(hookIndices, 'hook', this.mnGroup, 'MN_7CGO_Hook_Group');

            // 5. Stationary Bushings (P-ring in PG & L-ring in OM)
            // Added to this.bushingGroup so they stay 100% stationary (no spinning with rotor)
            this.mnBushingGroup = new THREE.Group();
            this.mnBushingGroup.name = 'MN_7CGO_Bushing_Group';
            this.mnBushingGroup.scale.set(1.48, 1.48, 1.48);
            this.mnBushingGroup.position.set(0, 4, 0);

            if (pRingIndices.length > 0) {
              const pGeo = child.geometry.clone();
              pGeo.setIndex(new THREE.Uint32BufferAttribute(new Uint32Array(pRingIndices), 1));
              const pMesh = new THREE.Mesh(pGeo, child.material);
              pMesh.castShadow = true;
              pMesh.receiveShadow = true;
              pMesh.userData.componentKey = 'p_ring';
              this.mnBushingGroup.add(pMesh);
            }

            if (lRingIndices.length > 0) {
              const lGeo = child.geometry.clone();
              lGeo.setIndex(new THREE.Uint32BufferAttribute(new Uint32Array(lRingIndices), 1));
              const lMesh = new THREE.Mesh(lGeo, child.material);
              lMesh.castShadow = true;
              lMesh.receiveShadow = true;
              lMesh.userData.componentKey = 'l_ring';
              this.mnBushingGroup.add(lMesh);
            }

            this.bushingGroup.add(this.mnBushingGroup);

            // Dispose original monolithic geometry to free memory
            child.geometry.dispose();
          }
        }
      });

      this.mnModel = this.mnGroup;

      this.registerComponent('molecular_7cgo', this.mnGroup, {
        name: 'Cryo-EM Flagellar Basal Body (Molecular Nodes)',
        proteins: 'Orange: C-ring (FliG/M/N); Jade & Lime: MS-ring inner/outer (FliF); Gold: Axial Rod; Terracotta: P-ring (FlgI); Blue: L-ring (FlgH); Violet: Hook (FlgE)',
        stoichiometry: '175 individual protein subunits assembled in 3D (7.78 MDa)',
        dimensions: 'Diameter: ~25–45 nm, Height: ~51 nm (Basal Body + Hook)',
        pdb: 'PDB: 7CGO (Tan et al., Cell 2021)',
        role: 'Authentic macromolecular structure generated with Molecular Nodes in Blender with distinct color segmentation: Orange for the bottom C-ring switch, two distinct contrasting greens for the inner collar and outer rim of the FliF MS-ring, Golden Yellow for the internal drive shaft rod, Terracotta for the P-ring bushing, Blue for the L-ring bushing, and Violet for the universal hook.',
        explodedY: 0
      });

      // Synchronize current exploded slider state immediately
      this.setExplodedProgress(this.explodedProgress);

      // Activate molecular representation mode by default without overriding initial camera framing
      this.setRepresentationMode(this.representationMode, false);
    }, undefined, (err) => {
      console.warn('[FlagellarMotor] Failed to load 7CGO_flagellar_motor.glb:', err);
    });
  }

  /**
   * Load authentic 3.1 Å cryo-EM structure of the MotA4/MotB2 stator complexes (PDB: 6YKM)
   * exported directly from Molecular Nodes in Blender.
   */
  loadMolecularStators() {
    this.mnStatorGroup = new THREE.Group();
    this.mnStatorGroup.name = 'MN_6YKM_Stators_Group';
    this.statorRingGroup.add(this.mnStatorGroup);
    this.mnStatorGroup.visible = (this.representationMode === 'molecular');

    const loader = new GLTFLoader();
    loader.load('/models/6YKM_stator_molecular.glb', (gltf) => {
      let statorMesh = null;
      gltf.scene.traverse((child) => {
        if (child.isMesh && !statorMesh) {
          statorMesh = child;
        }
      });

      if (!statorMesh) return;

      statorMesh.geometry.center();

      // Per-vertex coloring for MotA (Ruby Crimson) and MotB (Vivid Purple PG anchor)
      const pos = statorMesh.geometry.attributes.position;
      const count = pos.count;
      const colors = new Float32Array(count * 3);
      const motACol = new THREE.Color(0xE63946); // Ruby Crimson MotA ion channel
      const motBCol = new THREE.Color(0x9D4EDD); // Purple MotB OmpA peptidoglycan anchor

      for (let i = 0; i < count; i++) {
        const y = pos.getY(i);
        const col = (y > 0.5) ? motBCol : motACol;
        const noise = ((i % 13) / 13 - 0.5) * 0.1;
        colors[i * 3] = THREE.MathUtils.clamp(col.r + noise, 0, 1);
        colors[i * 3 + 1] = THREE.MathUtils.clamp(col.g + noise, 0, 1);
        colors[i * 3 + 2] = THREE.MathUtils.clamp(col.b + noise, 0, 1);
      }

      statorMesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      statorMesh.material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.32,
        metalness: 0.15,
        side: THREE.DoubleSide
      });
      statorMesh.castShadow = true;
      statorMesh.receiveShadow = true;

      const numStators = 11;
      const statorRadius = 24.5;
      const statorScale = 1.85;

      this.mnStatorUnits = [];

      for (let i = 0; i < numStators; i++) {
        const angle = (i / numStators) * Math.PI * 2;
        const x = Math.cos(angle) * statorRadius;
        const z = Math.sin(angle) * statorRadius;

        const singleStator = statorMesh.clone();
        singleStator.scale.set(statorScale, statorScale, statorScale);
        singleStator.position.set(x, 1.5, z);
        singleStator.lookAt(0, 1.5, 0);
        singleStator.userData.componentKey = 'molecular_6ykm';
        singleStator.userData.baseAngle = angle;
        singleStator.userData.baseRadius = statorRadius;
        singleStator.userData.baseY = 1.5;

        this.mnStatorGroup.add(singleStator);
        this.mnStatorUnits.push(singleStator);
      }

      this.registerComponent('molecular_6ykm', this.mnStatorGroup, {
        name: 'Cryo-EM MotA4/MotB2 Stators (Molecular Nodes)',
        proteins: 'MotA (5-fold pentamer channel) & MotB (dimeric plug with OmpA anchor)',
        stoichiometry: '11 stator units × 7 subunits = 77 protein chains',
        dimensions: 'Height: ~22 nm spanning Inner Membrane and Peptidoglycan',
        pdb: 'PDB: 6YKM (Santiveri et al. / Deme et al., Cell 2020)',
        role: 'Authentic 3.1 Å cryo-EM structure of the stator complex generated with Molecular Nodes in Blender. Functions as the proton-conducting power generator: H+ flux down the transmembrane electrochemical gradient drives rotational power strokes against FliG on the rotor.',
        explodedY: -10
      });

      this.mnStatorGroup.visible = (this.representationMode === 'molecular');
    }, undefined, (err) => {
      console.warn('[FlagellarMotor] Failed to load 6YKM_stator_molecular.glb:', err);
    });
  }

  /**
   * Toggle between authentic Molecular Nodes Cryo-EM structure and schematic diagram
   */
  setRepresentationMode(mode, focusCamera = false) {
    this.representationMode = mode;
    const isMol = (mode === 'molecular');

    // Authentic Molecular Nodes Cryo-EM models
    if (this.mnGroup) {
      this.mnGroup.visible = isMol;
    }
    if (this.mnBushingGroup) {
      this.mnBushingGroup.visible = isMol;
    }
    if (this.mnStatorGroup) {
      this.mnStatorGroup.visible = isMol;
    }

    // Toggle 100% of the smooth schematic model
    this.setSchematicVisible(!isMol);

    if (isMol) {
      if (this.selectedComponentKey !== 'molecular_6ykm') {
        this.selectComponent('molecular_7cgo', null, null, focusCamera);
      }
    }
  }

  /**
   * Set visibility of the entire smooth schematic model at once
   */
  setSchematicVisible(visible) {
    if (this.schematicRotorGroup) this.schematicRotorGroup.visible = visible;
    if (this.schematicStatorGroup) this.schematicStatorGroup.visible = visible;
    if (this.schematicBushingGroup) this.schematicBushingGroup.visible = visible;
  }

  /**
   * Toggle bacterial cell envelope cutaway membranes
   */
  toggleMembranes() {
    if (this.membraneGroup) {
      this.membraneGroup.visible = !this.membraneGroup.visible;
      this.updateLandmarksAndLeaders();
      return this.membraneGroup.visible;
    }
    return true;
  }

  /**
   * Register component metadata for raycasting and exploded-view animation
   */
  registerComponent(key, group, meta) {
    this.componentMeshes[key] = {
      group,
      meta,
      initialY: group.position.y,
      explodedTargetY: meta.explodedY || (group.position.y * 1.8)
    };

    // Tag all child meshes with component key for raycaster picking
    group.traverse((child) => {
      if (child.isMesh && !child.userData.componentKey) {
        child.userData.componentKey = key;
      }
    });
  }

  /**
   * Set exploded view progress (0.0 to 1.0)
   */
  setExplodedProgress(t) {
    this.explodedProgress = Math.max(0, Math.min(1, t));

    // Explode schematic components along Y
    for (const key in this.componentMeshes) {
      if (key === 'molecular_6ykm' || key === 'molecular_7cgo') continue;
      const item = this.componentMeshes[key];
      const targetY = THREE.MathUtils.lerp(item.initialY, item.explodedTargetY, this.explodedProgress);
      item.group.position.y = targetY;
    }

    // Explode schematic stators radially outward
    if (this.schematicStatorUnits && this.schematicStatorUnits.length > 0) {
      for (const unit of this.schematicStatorUnits) {
        const rad = unit.userData.baseRadius + this.explodedProgress * 16.0;
        const angle = unit.userData.baseAngle;
        unit.position.x = Math.cos(angle) * rad;
        unit.position.z = Math.sin(angle) * rad;
      }
    }

    // Explode Molecular Nodes stators radially outward to expose the rotor-stator interface!
    if (this.mnStatorUnits && this.mnStatorUnits.length > 0) {
      for (const unit of this.mnStatorUnits) {
        const rad = unit.userData.baseRadius + this.explodedProgress * 16.0;
        const angle = unit.userData.baseAngle;
        unit.position.x = Math.cos(angle) * rad;
        unit.position.z = Math.sin(angle) * rad;
      }
    }

    // Explode Molecular Nodes 7CGO functional sub-groups along Y
    if (this.mnCRingGroup) {
      this.mnCRingGroup.position.y = 4.0 - 13.0 * this.explodedProgress;
    }
    if (this.mnMSRingGroup) {
      this.mnMSRingGroup.position.y = 4.0 - 7.0 * this.explodedProgress;
    }
    if (this.mnHookGroup) {
      this.mnHookGroup.position.y = 4.0 + 14.0 * this.explodedProgress;
    }
    // Static sub-groups (axial rod, bushings) remain stationary at Y = 4.0
    if (this.mnRodGroup) {
      this.mnRodGroup.position.y = 4.0;
    }
    if (this.mnBushingGroup) {
      this.mnBushingGroup.position.y = 4.0;
    }

    // Dynamically update stationary anchor layer positions (matching elevation & radius without rotating)
    this.updateLabelAnchors();
  }

  /**
   * Update 3D coordinates of stationary anchor tracking layer.
   * Tracks component vertical translation and radial expansion during exploded disassembly,
   * while remaining 100% immune to rotor azimuthal spinning.
   */
  updateLabelAnchors() {
    if (!this.labelAnchors || !this.motorLandmarks) return;
    const t = this.explodedProgress;

    this.motorLandmarks.forEach((lm) => {
      const anchor = this.labelAnchors[lm.id];
      if (!anchor) return;
      const base = anchor.userData.basePos;

      // 1. Calculate vertical displacement (deltaY)
      let deltaY = 0;
      if (lm.key === 'filament_cap') {
        // FliD cap lifts with filament (+50) plus tip clearance (+35), total deltaY = +85 nm
        deltaY = 85.0 * t;
      } else if (lm.key === 'filament') {
        deltaY = 50.0 * t;
      } else if (lm.key === 'hap_junction') {
        deltaY = 20.0 * t;
      } else if (lm.key === 'hook') {
        deltaY = 14.0 * t;
      } else if (lm.key === 'ms_ring') {
        deltaY = -7.0 * t;
      } else if (lm.key === 'c_ring') {
        deltaY = -13.0 * t;
      }
      // Note: l_ring, rod, p_ring, stator, molecular_6ykm (motb), env_om, env_pg, env_im
      // are 100% stationary vertically (deltaY = 0)

      // 2. Calculate radial displacement for stator components (MotA and PMF channels only)
      if (anchor.userData.tracksRadial) {
        const radialOffset = t * 16.0;
        const newRadius = anchor.userData.baseRadius + radialOffset;
        anchor.position.x = Math.cos(anchor.userData.baseAngle) * newRadius;
        anchor.position.z = Math.sin(anchor.userData.baseAngle) * newRadius;
      } else {
        anchor.position.x = base.x;
        anchor.position.z = base.z;
      }

      anchor.position.y = base.y + deltaY;
    });
  }

  /**
   * Set rotation direction: 'CCW' (Run forward) or 'CW' (Tumble)
   */
  setDirection(dir) {
    if (dir === 'CW') {
      this.rotationDirection = 1;
    } else {
      this.rotationDirection = -1; // CCW default
    }
  }

  /**
   * Set rotational speed factor (0 = paused, 1 = normal, 2 = fast, 0.2 = slow-mo)
   */
  setSpeed(speed) {
    this.rotationSpeed = Math.max(0, speed);
  }

  /**
   * Setup interactive canvas gestures, pan/orbit controls, wheel zoom, and raycaster picking
   */
  setupEvents() {
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    this.canvas.addEventListener('pointerdown', (e) => {
      this.isPointerDown = true;
      this.pointerButton = e.button;
      this.isShiftDown = e.shiftKey;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
      this.pointerDownX = e.clientX;
      this.pointerDownY = e.clientY;
      this.canvas.setPointerCapture(e.pointerId);
    });

    this.canvas.addEventListener('pointermove', (e) => {
      if (this.isPointerDown) {
        const dx = e.clientX - this.lastPointerX;
        const dy = e.clientY - this.lastPointerY;
        this.lastPointerX = e.clientX;
        this.lastPointerY = e.clientY;

        const isMiddleOrShiftDrag = (this.pointerButton === 1) || (this.pointerButton === 0 && (e.shiftKey || this.isShiftDown));
        const isRightClick = (this.pointerButton === 2);

        if (isMiddleOrShiftDrag) {
          // Free 2D Pan in camera view plane
          const factor = this.spherical.radius * 0.0016;
          const right = new THREE.Vector3();
          const up = new THREE.Vector3();
          this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

          this.camera.position.addScaledVector(right, -dx * factor);
          this.camera.position.addScaledVector(up, dy * factor);
          this.target.addScaledVector(right, -dx * factor);
          this.target.addScaledVector(up, dy * factor);
          this.camera.updateMatrixWorld(true);
          this.updateLandmarksAndLeaders();
        } else if (isRightClick || this.cameraMode === 'freelook') {
          // Counter Strike First-Person Free-Look: Look around pitch & yaw from eye position
          this.rotateFreeLook(dx, dy);
        } else {
          // Orbit around current target
          this.spherical.theta -= dx * 0.008;
          this.spherical.phi = Math.max(0.04, Math.min(Math.PI - 0.04, this.spherical.phi - dy * 0.008));
          this.updateCameraPosition();
        }
      }
    });

    this.canvas.addEventListener('pointerup', (e) => {
      this.isPointerDown = false;
      try { this.canvas.releasePointerCapture(e.pointerId); } catch (_) {}
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      // Counter Strike 3D flight thrust: wheel forward flies forward into gaze, wheel backward flies back
      const forward = new THREE.Vector3();
      this.camera.getWorldDirection(forward);
      const zoomDelta = -e.deltaY * 0.15 * Math.max(0.2, this.spherical.radius * 0.004);
      this.camera.position.addScaledVector(forward, zoomDelta);
      this.target.addScaledVector(forward, zoomDelta);
      this.syncSphericalFromCamera();
      this.camera.updateMatrixWorld(true);
      this.updateLandmarksAndLeaders();
    }, { passive: false });

    // Keyboard navigation (Counter Strike Free-Look WASD, Arrows, Space, C, Shift, R)
    window.addEventListener('keydown', (e) => {
      if (!this.active) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (this.keys.hasOwnProperty(e.code)) {
        this.keys[e.code] = true;
      }
      if (e.code === 'KeyR') {
        // Reset camera center and radius to default overview
        this.target.set(0, 65, 0);
        this.spherical.radius = 275;
        this.spherical.theta = 0.15;
        this.spherical.phi = 1.35;
        this.updateCameraPosition();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (this.keys.hasOwnProperty(e.code)) {
        this.keys[e.code] = false;
      }
    });

    // Click selection raycasting: Ignore if user was dragging mouse in Free Look
    this.canvas.addEventListener('click', (e) => {
      const dragDist = Math.hypot(e.clientX - this.pointerDownX, e.clientY - this.pointerDownY);
      if (dragDist > 6) return; // Ignore drag release as raycast click

      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.rootGroup.children, true);

      if (intersects.length > 0) {
        for (const hit of intersects) {
          if (hit.object && hit.object.userData && hit.object.userData.componentKey) {
            this.selectComponent(hit.object.userData.componentKey, null, hit.point);
            break;
          }
        }
      }
    });

    window.addEventListener('resize', () => {
      if (!this.active || !this.container) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.updateLandmarksAndLeaders();
    });
  }

  /**
   * First-Person Free-Look (Counter-Strike style pitch and yaw around camera eye position)
   */
  rotateFreeLook(dx, dy) {
    const sensitivity = 0.0035;
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);

    let pitch = Math.asin(THREE.MathUtils.clamp(forward.y, -0.999, 0.999));
    let yaw = Math.atan2(forward.x, forward.z);

    yaw -= dx * sensitivity;
    pitch = THREE.MathUtils.clamp(pitch - dy * sensitivity, -1.52, 1.52); // ~87 deg clamp

    const cosPitch = Math.cos(pitch);
    const newForward = new THREE.Vector3(
      Math.sin(yaw) * cosPitch,
      Math.sin(pitch),
      Math.cos(yaw) * cosPitch
    ).normalize();

    const dist = Math.max(10, this.spherical.radius);
    this.target.copy(this.camera.position).addScaledVector(newForward, dist);
    this.camera.lookAt(this.target);
    this.camera.updateMatrixWorld(true);

    this.syncSphericalFromCamera();
    this.updateLandmarksAndLeaders();
  }

  /**
   * Keep spherical radius, theta, and phi synchronized with camera and target vectors
   */
  syncSphericalFromCamera() {
    const offset = new THREE.Vector3().subVectors(this.camera.position, this.target);
    const radius = offset.length();
    if (radius > 0.001) {
      this.spherical.radius = THREE.MathUtils.clamp(radius, 4, 800);
      this.spherical.phi = THREE.MathUtils.clamp(Math.acos(offset.y / radius), 0.04, Math.PI - 0.04);
      this.spherical.theta = Math.atan2(offset.x, offset.z);
    }
  }

  setCameraMode(mode) {
    this.cameraMode = (mode === 'orbit') ? 'orbit' : 'freelook';
    return this.cameraMode;
  }

  toggleCameraMode() {
    this.cameraMode = (this.cameraMode === 'freelook') ? 'orbit' : 'freelook';
    return this.cameraMode;
  }

  /**
   * Process continuous Video Game / Counter-Strike Free-Look Flight (WASD + Space + C + Shift)
   */
  updateKeyboardMovement(delta) {
    if (!this.active) return;

    const hasInput = this.keys.KeyW || this.keys.KeyS || this.keys.KeyA || this.keys.KeyD ||
                     this.keys.KeyQ || this.keys.KeyE || this.keys.Space || this.keys.KeyC ||
                     this.keys.ControlLeft || this.keys.ControlRight ||
                     this.keys.ArrowUp || this.keys.ArrowDown || this.keys.ArrowLeft || this.keys.ArrowRight;
    if (!hasInput) return;

    // 1. Camera basis vectors in world space
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    forward.normalize();

    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());
    right.normalize();

    // 2. Video game flight speed dynamics with turbo sprint
    const isShift = this.keys.ShiftLeft || this.keys.ShiftRight;
    const sprintMultiplier = isShift ? 2.6 : 1.0;
    const baseSpeed = Math.max(50, this.spherical.radius * 0.95);
    const speed = baseSpeed * sprintMultiplier * delta;

    const moveDelta = new THREE.Vector3();

    // W / ArrowUp -> Fly FORWARD in 3D look direction (Counter Strike / FPS standard)
    if (this.keys.KeyW || this.keys.ArrowUp) {
      moveDelta.addScaledVector(forward, speed);
    }
    // S / ArrowDown -> Fly BACKWARD
    if (this.keys.KeyS || this.keys.ArrowDown) {
      moveDelta.addScaledVector(forward, -speed);
    }
    // A / ArrowLeft -> Strafe LEFT
    if (this.keys.KeyA || this.keys.ArrowLeft) {
      moveDelta.addScaledVector(right, -speed);
    }
    // D / ArrowRight -> Strafe RIGHT
    if (this.keys.KeyD || this.keys.ArrowRight) {
      moveDelta.addScaledVector(right, speed);
    }
    // Space -> Fly UP (Ascend along world Y)
    if (this.keys.Space) {
      moveDelta.y += speed;
    }
    // Control / KeyC -> Fly DOWN (Descend along world Y)
    if (this.keys.ControlLeft || this.keys.ControlRight || this.keys.KeyC) {
      moveDelta.y -= speed;
    }
    // Q / E -> Dolly Forward / Backward
    if (this.keys.KeyQ) {
      moveDelta.addScaledVector(forward, -speed * 0.8);
    }
    if (this.keys.KeyE) {
      moveDelta.addScaledVector(forward, speed * 0.8);
    }

    if (moveDelta.lengthSq() > 0) {
      this.camera.position.add(moveDelta);
      this.target.add(moveDelta);
      this.syncSphericalFromCamera();
      this.camera.updateMatrixWorld(true);
      this.updateLandmarksAndLeaders();
    }
  }

  updateCameraPosition() {
    const { radius, theta, phi } = this.spherical;
    const sinPhi = Math.sin(phi);
    this.camera.position.x = this.target.x + radius * sinPhi * Math.sin(theta);
    this.camera.position.y = this.target.y + radius * Math.cos(phi);
    this.camera.position.z = this.target.z + radius * sinPhi * Math.cos(theta);
    this.camera.lookAt(this.target);
    this.camera.updateMatrixWorld(true);
  }

  /**
   * Configure 10 stationary 3D anatomical landmarks and biophysical metadata.
   * CRITICAL: Coordinates are defined in stationary world space at each anatomical level/radius
   * so they NEVER rotate with the spinning rotor, remaining stable while the motor rotates inside.
   */
  setupMotorLandmarks() {
    this.motorLandmarks = [
      {
        id: 'motor-tag-flic-cap',
        key: 'filament_cap',
        name: 'Distal Cap (FliD)',
        subtitle: 'HAP3 Pentameric Chaperone Machine',
        color: '#00F5D4',
        pos: new THREE.Vector3(-9.3, 160, -6.7),
        screenOffset: { x: 230, y: -25 },
        meta: {
          name: 'Filament Distal Cap (FliD Chaperone)',
          role: 'Pentameric protein-folding machine and chaperone cap located at the growing tip of the flagellar filament. As unfolded FliC monomers travel up the narrow 2-nm central secretion channel from the cytoplasm, the 5-legged FliD cap prevents them from escaping into the environment, dynamically rotating like a molecular ratchet to fold and insert each monomer into the 11 growing protofilaments.',
          proteins: 'FliD (HAP3, 5 subunits, 50 kDa each, homopentamer)',
          dimensions: 'Diameter: ~15 nm, Height: ~8 nm (Y ≈ 160 nm)',
          pdb: 'PDB 5H5V, 5GY2'
        }
      },
      {
        id: 'motor-tag-filament',
        key: 'filament',
        name: 'Helical Filament Tail (FliC)',
        subtitle: '11-Protofilament Left-Handed Propeller',
        color: '#FB8500',
        pos: new THREE.Vector3(7, 98, -3),
        screenOffset: { x: -240, y: -45 },
        meta: {
          name: 'Helical Filament Tail (FliC Propeller)',
          role: 'The primary Archimedean screw propeller that drives bacterial locomotion. Up to 20,000 FliC flagellin subunits polymerize into a tubular cylinder of 11 longitudinal protofilaments with a hollow 2-nm central lumen. During CCW motor rotation, it forms a left-handed superhelical corkscrew bundle propelling the cell at ~30 µm/s (~30 body lengths/s). CW motor rotation triggers a mechanical strain-induced polymorphic transition to a right-handed semi-coiled form, unraveling the bundle to initiate tumble reorientation.',
          proteins: 'FliC (Flagellin, 51.6 kDa, ~20,000 subunits in vivo)',
          dimensions: 'Outer Diameter: ~20 nm, Inner Lumen: ~2 nm, Length: ~115 nm in this view',
          pdb: 'PDB 1UCU, 5GY2'
        }
      },
      {
        id: 'motor-tag-hap-junction',
        key: 'hap_junction',
        name: 'Hook Junction (FlgK/L)',
        subtitle: 'HAP1 & HAP2 Adapter Rings',
        color: '#8338EC',
        pos: new THREE.Vector3(8, 43, 2),
        screenOffset: { x: 220, y: -45 },
        meta: {
          name: 'Hook-Filament Junction (FlgK/FlgL)',
          role: 'Essential dual-ring molecular adapter connecting the FlgE hook to the FliC filament. FlgE and FliC cannot bind directly due to symmetry and domain interface mismatch. FlgK (~11 copies) forms the proximal ring on FlgE, and FlgL (~11 copies) forms the distal ring, providing the structural nucleation template for the 11 protofilaments of flagellin.',
          proteins: 'FlgK (HAP1, ~11 copies) + FlgL (HAP2, ~11 copies)',
          dimensions: 'Height: ~7.5 nm (Y = 39.0 to 46.5 nm), Diameter: ~16 nm',
          pdb: 'PDB 1UCU, 5GY2, 7CGO'
        }
      },
      {
        id: 'motor-tag-hook',
        key: 'hook',
        name: 'Universal Joint (FlgE Hook)',
        subtitle: 'FlgE ~120-mer Cardan Joint',
        color: '#9D4EDD',
        pos: new THREE.Vector3(3, 35, 2),
        screenOffset: { x: 210, y: -45 },
        meta: {
          name: 'Universal Joint (Hook)',
          role: 'Nature\'s biological universal Cardan joint. Formed by ~120 FlgE subunits arranged in a curved cylindrical sleeve, it exhibits high flexural compliance allowing it to bend around varying angles while maintaining extreme torsional stiffness to transmit 4,600 pN·nm rotary torque from the cell-bound rod directly to the long external filament.',
          proteins: 'FlgE (~120 subunits)',
          dimensions: 'Length: ~55 nm, Curvature: ~90° arc',
          pdb: 'PDB 7CGO, 3A5X, 1WLG'
        }
      },
      {
        id: 'motor-tag-l-ring',
        key: 'l_ring',
        name: 'L-Ring Bushing (FlgH)',
        subtitle: 'Outer Membrane Lipoprotein Sleeve',
        color: '#0077B6',
        pos: new THREE.Vector3(14, 28, 2),
        screenOffset: { x: 220, y: -10 },
        meta: {
          name: 'L-Ring Lipoprotein Bushing',
          role: 'Non-rotating cylindrical molecular bushing embedded in the outer membrane lipopolysaccharide (LPS) bilayer. Formed by 26 FlgH lipoprotein subunits, it acts as a low-friction sealed bearing sleeve allowing the high-speed axial drive shaft to penetrate outside the cell envelope without leakage of periplasmic contents.',
          proteins: 'FlgH (26 subunits)',
          dimensions: 'Diameter: ~18 nm, Height: ~6.5 nm',
          pdb: 'PDB 7CGO, 1QNW, 6YKM'
        }
      },
      {
        id: 'motor-tag-rod',
        key: 'rod',
        name: 'Axial Drive Shaft (Rod)',
        subtitle: 'FlgB/C/F/G High-Torque Axle',
        color: '#FFD166',
        pos: new THREE.Vector3(-3.5, 20, 2),
        screenOffset: { x: -220, y: -25 },
        meta: {
          name: 'Central Drive Shaft (Axial Rod)',
          role: 'Rigid central molecular drive shaft that transfers high rotational torque from the inner membrane MS-ring rotor across the periplasmic space to the external hook and filament. Composed of FliE (~6), FlgB (6), FlgC (6), FlgF (6), and FlgG (~26), it exhibits remarkable torsional shear strength under 300 rev/sec loads.',
          proteins: 'FliE (~6), FlgB (6), FlgC (6), FlgF (6), FlgG (~26)',
          dimensions: 'Diameter: ~4 nm, Length: ~36 nm',
          pdb: 'PDB 7CGO, 6S3L, 3HJL'
        }
      },
      {
        id: 'motor-tag-p-ring',
        key: 'p_ring',
        name: 'P-Ring Bushing (FlgI)',
        subtitle: 'Peptidoglycan Murein Sleeve',
        color: '#E76F51',
        pos: new THREE.Vector3(14, 14, 2),
        screenOffset: { x: 220, y: 30 },
        meta: {
          name: 'P-Ring Molecular Bushing',
          role: 'Non-rotating molecular sleeve bushing anchored within the peptidoglycan murein sacculus. Formed by a homomultimeric 26-mer ring of FlgI subunits, it holds the rotating drive shaft rigidly centered and prevents mechanical abrasion against the crosslinked cell wall matrix.',
          proteins: 'FlgI (26 subunits)',
          dimensions: 'Diameter: ~16 nm, Height: ~4.5 nm',
          pdb: 'PDB 7CGO, 1QNW, 6YKM'
        }
      },
      {
        id: 'motor-tag-motb',
        key: 'molecular_6ykm',
        name: 'MotB PG Anchor Domain',
        subtitle: 'OmpA-like Peptidoglycan Fastener',
        color: '#9D4EDD',
        pos: new THREE.Vector3(-25, 9, 3),
        screenOffset: { x: -240, y: 25 },
        meta: {
          name: 'MotB Peptidoglycan Anchor',
          role: 'Periplasmic anchor domain of the stator complex. MotB dimerization extends an OmpA-like peptidoglycan-binding module that firmly latches onto the murein sacculus, providing the essential reaction counter-torque anchor so that the stators do not rotate when pushing against the spinning rotor.',
          proteins: 'MotB (2 copies per stator unit × 11 units = 22 proteins)',
          dimensions: 'Spans upper periplasm, attaches to PG at Y ≈ +10 nm',
          pdb: 'PDB 6YKM, 6YKP'
        }
      },
      {
        id: 'motor-tag-ms-outer',
        key: 'ms_ring',
        name: 'MS-Ring: Outer Rim (FliF)',
        subtitle: 'Transmembrane Outer Shell (R ≥ 6.8 nm)',
        color: '#70E000',
        pos: new THREE.Vector3(-14, 1, 3),
        screenOffset: { x: -230, y: 80 },
        meta: {
          name: 'MS-Ring: Outer Rim (FliF)',
          role: 'The outer transmembrane circumference of the FliF ring embedded in the inner cytoplasmic membrane. Consists of the radial peripheral domains of 34 FliF subunits that interface with the surrounding lipid bilayer and stabilize the rotor core.',
          proteins: 'FliF outer domain (34 subunits)',
          dimensions: 'Diameter: ~25–28 nm, Thickness: ~6.5 nm',
          pdb: 'PDB 7CGO, 6YKM'
        }
      },
      {
        id: 'motor-tag-ms-inner',
        key: 'ms_ring',
        name: 'MS-Ring: Inner Collar (FliF)',
        subtitle: 'Central Mounting Hub (R < 6.8 nm)',
        color: '#06D6A0',
        pos: new THREE.Vector3(5, -3, 3),
        screenOffset: { x: 210, y: 75 },
        meta: {
          name: 'MS-Ring: Inner Collar (FliF)',
          role: 'The central core mounting hub of the FliF ring. Serves as the central mechanical socket that tightly grips the axial drive shaft rod above and anchors the cytoplasmic C-ring turbine directly below. It is the very first structural protein complex assembled during flagellar morphogenesis.',
          proteins: 'FliF inner core (34 subunits)',
          dimensions: 'Diameter: ~13 nm central collar',
          pdb: 'PDB 7CGO, 6YKM'
        }
      },
      {
        id: 'motor-tag-mota',
        key: 'stator',
        name: 'MotA Proton Channels',
        subtitle: '4-Transmembrane α-Helical Stators',
        color: '#E63946',
        pos: new THREE.Vector3(26, -3, 4),
        screenOffset: { x: 230, y: 115 },
        meta: {
          name: 'MotA4 / MotB2 Stator Proton Channels',
          role: 'Proton-conducting ion channels that generate mechanical torque. Each stator complex contains 4 MotA and 2 MotB proteins forming two proton-conducting channels. Protons (H⁺) stream down the electrochemical gradient, driving power-stroke electrostatic shifts (Arg90, Glu98) that engage charged residues on FliG to push the rotor.',
          proteins: 'MotA (4 copies per unit × 11 units = 44 proteins)',
          dimensions: 'Height: ~22 nm spanning IM and Peptidoglycan',
          pdb: 'PDB 6YKM, 6YKP'
        }
      },
      {
        id: 'motor-tag-c-ring',
        key: 'c_ring',
        name: 'C-Ring Switch Complex',
        subtitle: 'FliG/M/N Rotor Turbine (~45 nm)',
        color: '#FF7B00',
        pos: new THREE.Vector3(-18, -23, 4),
        screenOffset: { x: -240, y: 135 },
        meta: {
          name: 'C-Ring Switch Complex (FliG, FliM, FliN)',
          role: 'Cytosolic rotor turbine base and rotational direction switch. FliG interacts electrostatically with MotA stators to convert proton influx into mechanical rotary torque (~4,600 pN·nm). Phosphorylated CheY-P binding to FliM induces cooperative conformational flips that reverse motor rotation from CCW (forward swim) to CW (tumble reorientation).',
          proteins: 'FliG (34 copies), FliM (34 copies), FliN (136 copies)',
          dimensions: 'Diameter: ~45 nm, Height: ~14 nm',
          pdb: 'PDB 7CGO, 6S3L, 3HJL'
        }
      },
      {
        id: 'motor-tag-pmf',
        key: 'stator',
        name: 'Proton Motive Force (PMF)',
        subtitle: 'Δp ≈ -170 mV Electrochemical Flux',
        color: '#00F5D4',
        pos: new THREE.Vector3(23, -16, 5),
        screenOffset: { x: 210, y: 155 },
        meta: {
          name: 'Proton Motive Force (H⁺ Electrochemical Gradient)',
          role: 'The primary thermodynamic energy source driving flagellar rotation. Protons stream down the electrochemical potential difference (Δp = Δψ - 60 ΔpH ≈ -170 mV) from the periplasmic space through the 11 stator channels into the cytoplasm, consuming ~1,200 protons per revolution to deliver ~4,600 pN·nm peak torque.',
          proteins: 'Electrochemical Proton Gradient (H⁺ flux through MotA/B)',
          dimensions: 'Flux: ~1,200 H⁺ / revolution (~1.2 million H⁺/sec)',
          pdb: 'Biophysical Principle (Mitchell Chemiosmosis)'
        }
      },
      {
        id: 'motor-tag-env-om',
        key: 'env_om',
        name: 'Outer Membrane (OM)',
        subtitle: 'LPS Asymmetric Bilayer',
        color: '#0077B6',
        pos: new THREE.Vector3(-33, 24, 14),
        screenOffset: { x: -220, y: -25 },
        requiresMembrane: true,
        meta: {
          name: 'Outer Membrane (Lipopolysaccharide Bilayer)',
          role: 'Asymmetric protective lipid bilayer framing the motor exit pore. The outer leaflet is packed with negatively charged Lipopolysaccharide (LPS) molecules, creating an impermeable barrier against detergents and antibiotics while housing the FlgH L-ring bushing through which the axial shaft emerges.',
          proteins: 'Lipopolysaccharides (LPS), Phospholipids, Porins (OmpA/C/F), L-ring (FlgH)',
          dimensions: 'Thickness: ~6–7 nm (at Y = +24 nm), Lipopolysaccharide layer',
          pdb: 'Cell Envelope Architecture (K-12 Model)'
        }
      },
      {
        id: 'motor-tag-env-pg',
        key: 'env_pg',
        name: 'Peptidoglycan Cell Wall',
        subtitle: 'Murein Sacculus & MotB Anchor',
        color: '#E76F51',
        pos: new THREE.Vector3(-35, 10, 12),
        screenOffset: { x: -220, y: 0 },
        requiresMembrane: true,
        meta: {
          name: 'Peptidoglycan Murein Sacculus',
          role: 'Rigid mesh-like covalent exoskeleton composed of glycan strands crosslinked by peptide bridges. Sustains 3–5 atmospheres of internal cellular turgor pressure. Anchors the P-ring bushing (FlgI) and serves as the physical reaction bearing wall for the 11 MotB stator anchors to apply counter-torque against the spinning rotor.',
          proteins: 'Murein matrix (GlcNAc-MurNAc strands + D-amino acid crosslinks), MotB anchor site',
          dimensions: 'Thickness: ~3–4 nm (at Y = +10 nm), 30 nm periplasmic span',
          pdb: 'Sacculus Matrix Architecture'
        }
      },
      {
        id: 'motor-tag-env-im',
        key: 'env_im',
        name: 'Inner Membrane (IM)',
        subtitle: 'Phospholipid Bilayer & PMF Seal',
        color: '#06D6A0',
        pos: new THREE.Vector3(-35, -8, 10),
        screenOffset: { x: -220, y: 35 },
        requiresMembrane: true,
        meta: {
          name: 'Inner Cytoplasmic Membrane (Plasma Membrane)',
          role: 'Symmetric phospholipid bilayer maintaining the electrical insulator seal essential for preserving the -170 mV Proton Motive Force (PMF). Houses the 11 transmembrane MotA/B torque-generating stators and embeds the outer perimeter of the 34-fold FliF MS-ring rotor hub.',
          proteins: 'Phosphatidylethanolamine / Phosphatidylglycerol bilayer, MotA/B stators, FliF MS-ring',
          dimensions: 'Thickness: ~5 nm (at Y = -8 nm), PMF potential: -170 mV',
          pdb: 'Cytoplasmic Membrane Architecture'
        }
      }
    ];

    // Build stationary anchor tracking layer encapsulating 3D reference points
    // (Layer is a direct child of rootGroup so it is immune to rotor spinning)
    if (!this.labelAnchorLayer) {
      this.labelAnchorLayer = new THREE.Group();
      this.labelAnchorLayer.name = 'Stationary_Label_Anchor_Layer';
      if (this.rootGroup) this.rootGroup.add(this.labelAnchorLayer);
    }
    this.labelAnchorLayer.clear();
    this.labelAnchors = {};

    this.motorLandmarks.forEach((lm) => {
      const anchor = new THREE.Object3D();
      anchor.name = `Anchor_${lm.id}`;
      anchor.position.copy(lm.pos);
      anchor.userData = {
        id: lm.id,
        key: lm.key,
        basePos: lm.pos.clone(),
        baseRadius: Math.sqrt(lm.pos.x * lm.pos.x + lm.pos.z * lm.pos.z),
        baseAngle: Math.atan2(lm.pos.z, lm.pos.x),
        tracksRadial: (lm.id === 'motor-tag-mota' || lm.id === 'motor-tag-pmf'),
        requiresMembrane: Boolean(lm.requiresMembrane)
      };
      this.labelAnchorLayer.add(anchor);
      this.labelAnchors[lm.id] = anchor;
    });

    this.updateLabelAnchors();
  }

  /**
   * Instantiate interactive 3D HTML tag badges inside labels container
   */
  initLabels() {
    if (!this.labelsContainer) return;
    this.labelsContainer.innerHTML = '';

    this.motorLandmarks.forEach((lm) => {
      const tag = document.createElement('div');
      tag.className = 'motor-tag';
      tag.id = lm.id;
      tag.setAttribute('data-target', lm.key);
      tag.innerHTML = `
        <div class="motor-tag-badge" style="border-left-color: ${lm.color};">
          <span class="motor-tag-primary">
            <span class="motor-tag-dot" style="background-color: ${lm.color};"></span>
            ${lm.name}
          </span>
          <span class="motor-tag-sub">${lm.subtitle}</span>
        </div>
      `;
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentPos = this.labelAnchors && this.labelAnchors[lm.id] ? this.labelAnchors[lm.id].position : lm.pos;
        this.selectComponent(lm.key, lm.meta, currentPos);
        this.highlightTag(lm.id);
      });
      this.labelsContainer.appendChild(tag);
    });
  }

  /**
   * Visually highlight active tag badge
   */
  highlightTag(tagId) {
    if (!this.labelsContainer) return;
    this.labelsContainer.querySelectorAll('.motor-tag').forEach((el) => {
      el.classList.toggle('active-target', el.id === tagId);
    });
  }

  /**
   * Toggle visibility of 3D anatomical labels and leader lines
   */
  toggleLabels(force = undefined) {
    this.showLabels = (force !== undefined) ? force : !this.showLabels;
    this.updateLandmarksAndLeaders();
    return this.showLabels;
  }

  /**
   * Reset camera position and target to default overview
   */
  resetCamera() {
    this.target.set(0, 65, 0);
    this.spherical.radius = 275;
    this.spherical.theta = 0.15;
    this.spherical.phi = 1.35;
    this.updateCameraPosition();
    this.updateLandmarksAndLeaders();
  }

  /**
   * Toggle automatic orbit rotation around the motor
   */
  toggleAutoRotate(force = undefined) {
    this.isAutoRotating = (force !== undefined) ? force : !this.isAutoRotating;
    return this.isAutoRotating;
  }

  /**
   * Handle viewport resize and sync camera aspect and renderer dimensions
   */
  handleResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = (this.container.clientWidth > 0) ? this.container.clientWidth : window.innerWidth;
    const height = (this.container.clientHeight > 0) ? this.container.clientHeight : window.innerHeight;
    if (width === 0 || height === 0) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.updateLandmarksAndLeaders();
  }

  /**
   * Project stationary 3D anatomical landmarks onto 2D screen coordinates
   * and render hairline SVG leader lines and positioned HTML badges.
   */
  updateLandmarksAndLeaders() {
    if (!this.svgOverlay || !this.labelsContainer) {
      this.svgOverlay = document.getElementById('motor-svg-overlay');
      this.labelsContainer = document.getElementById('motor-labels-container');
    }
    if (!this.showLabels || !this.active || !this.svgOverlay || !this.labelsContainer) {
      if (this.svgOverlay) this.svgOverlay.innerHTML = '';
      if (this.labelsContainer) this.labelsContainer.style.display = 'none';
      return;
    }
    this.labelsContainer.style.display = 'block';

    const width = (this.container && this.container.clientWidth > 0) ? this.container.clientWidth : window.innerWidth;
    const height = (this.container && this.container.clientHeight > 0) ? this.container.clientHeight : window.innerHeight;
    const isMembraneVisible = Boolean(this.membraneGroup && this.membraneGroup.visible);
    let svgLines = '';

    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);

    this.motorLandmarks.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      // Conditional visibility: hide envelope tags if membranes are toggled off
      if (item.requiresMembrane && !isMembraneVisible) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // Exact pixel-perfect projection from stationary dynamic anchor layer
      // (Tracks exploded elevation & radial motion without rotating with the spinning rotor)
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

        const halfW = el.offsetWidth ? (el.offsetWidth * 0.5) : 80;
        const lineEndX = item.screenOffset.x >= 0 ? (labelX - halfW - 2) : (labelX + halfW + 2);

        const isActive = this.selectedComponentKey === item.key;
        const anchorRadius = isActive ? 4.5 : 3.0;
        const strokeWidth = isActive ? 2.2 : 1.3;
        const strokeOpacity = isActive ? 1.0 : (this.selectedComponentKey ? 0.45 : 0.88);

        svgLines += `
          <g class="motor-leader-group ${isActive ? 'active-target-group' : ''}">
            ${isActive ? `<circle cx="${screenX}" cy="${screenY}" r="9" fill="none" stroke="${item.color}" stroke-width="1.6" opacity="0.75"><animate attributeName="r" values="5;11;5" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.8s" repeatCount="indefinite"/></circle>` : ''}
            <circle cx="${screenX}" cy="${screenY}" r="${anchorRadius}" fill="${item.color}" stroke="#FFFFFF" stroke-width="${isActive ? 1.5 : 1.2}" />
            <polyline points="${screenX},${screenY} ${screenX + item.screenOffset.x * 0.4},${labelY} ${lineEndX},${labelY}"
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

  /**
   * Focus camera onto a selected component and trigger inspector and TTS narration
   */
  selectComponent(key, overrideMeta = null, targetPos = null, focusCamera = true) {
    this.selectedComponentKey = key;
    const item = this.componentMeshes[key];
    const meta = overrideMeta || (item ? item.meta : null);

    // Directly focus camera target and zoom on selected component or landmark
    let destTarget = null;
    let destRadius = null;
    if (targetPos) {
      destTarget = new THREE.Vector3(targetPos.x * 0.3, THREE.MathUtils.clamp(targetPos.y, -50, 260), targetPos.z * 0.3);
      if (key === 'filament_cap') destRadius = 85;
      else if (key === 'filament') destRadius = 180;
      else if (key === 'hap_junction') destRadius = 90;
    } else if (item) {
      const compWorldPos = new THREE.Vector3();
      item.group.getWorldPosition(compWorldPos);
      let targetY = compWorldPos.y;
      if (key === 'filament') { targetY = 98 + 50 * this.explodedProgress; destRadius = 180; }
      else if (key === 'filament_cap') { targetY = 160 + 85 * this.explodedProgress; destRadius = 85; }
      else if (key === 'hap_junction') { targetY = 43 + 20 * this.explodedProgress; destRadius = 90; }
      else if (key === 'hook') { targetY = 35 + 14 * this.explodedProgress; destRadius = 85; }
      else if (key === 'molecular_7cgo') { targetY = 12; destRadius = 118; }
      else if (key === 'c_ring') { targetY = -22 - 13 * this.explodedProgress; destRadius = 95; }
      else if (key === 'ms_ring') { targetY = -4 - 7 * this.explodedProgress; destRadius = 90; }
      else if (key === 'stator' || key === 'molecular_6ykm') { targetY = -2; destRadius = 100; }
      else if (key === 'rod') { targetY = 18; destRadius = 85; }
      else if (key === 'p_ring') { targetY = 14; destRadius = 85; }
      else if (key === 'l_ring') { targetY = 24; destRadius = 85; }
      destTarget = new THREE.Vector3(compWorldPos.x * 0.3, THREE.MathUtils.clamp(targetY, -50, 260), compWorldPos.z * 0.3);
    }
    if (destTarget && focusCamera) {
      this.target.copy(destTarget);
      if (destRadius) this.spherical.radius = destRadius;
      this.updateCameraPosition();
    }

    // Find and highlight matching tag if applicable
    if (this.labelsContainer) {
      this.labelsContainer.querySelectorAll('.motor-tag').forEach((el) => {
        el.classList.toggle('active-target', el.getAttribute('data-target') === key);
      });
    }

    // Trigger UI notification
    if (typeof this.onSelectComponent === 'function' && meta) {
      this.onSelectComponent(key, meta);
    }

    // Auto-read aloud if voiceService available
    if (this.voiceService && meta) {
      const speech = `${meta.name}. ${meta.role}`;
      this.voiceService.playText(speech);
    }
  }

  /**
   * Start rendering loop
   */
  start() {
    this.active = true;
    this.handleResize();
    this.clock.start();
    const loop = () => {
      if (!this.active) return;
      this.animFrameId = requestAnimationFrame(loop);
      this.render();
    };
    loop();
  }

  /**
   * Stop rendering loop
   */
  stop() {
    this.active = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.svgOverlay) this.svgOverlay.innerHTML = '';
    if (this.labelsContainer) this.labelsContainer.style.display = 'none';
  }

  /**
   * Frame execution: Rotates rotor, updates proton stream, and dynamically projects 3D tags
   */
  render() {
    const delta = this.clock.getDelta();

    // 0. Auto-rotate camera orbit if enabled
    if (this.isAutoRotating && !this.isPointerDown) {
      this.spherical.theta += delta * 0.35;
      this.updateCameraPosition();
    }

    // 1. High-speed Flagellar Rotation
    if (!this.isPaused && this.rotorGroup) {
      // Normal rotation: 8 to 15 rad/sec visual representation
      const rotDelta = this.rotationSpeed * this.rotationDirection * delta * 12.0;
      this.rotorGroup.rotation.y += rotDelta;
    }

    // 2. Animate Proton Motive Force (H+ ion flow)
    if (this.protonParticleSystem) {
      const posAttr = this.protonParticleSystem.geometry.attributes.position;
      const positions = posAttr.array;
      const vels = this.protonParticleSystem.userData.velocities;
      const numStators = this.protonParticleSystem.userData.numStators;
      const statorRadius = this.protonParticleSystem.userData.statorRadius;

      for (let i = 0; i < posAttr.count; i++) {
        // Move downward along Y
        positions[i * 3 + 1] += vels[i * 3 + 1] * (this.isPaused ? 0.2 : 1.0);

        // When proton reaches bottom cytosol (Y < -28), recycle back to periplasm (Y = 12)
        if (positions[i * 3 + 1] < -28) {
          const sIdx = i % numStators;
          const baseAngle = (sIdx / numStators) * Math.PI * 2;
          const angle = baseAngle + (Math.random() - 0.5) * 0.18;
          const r = statorRadius + (Math.random() - 0.5) * 2.2;

          positions[i * 3] = Math.cos(angle) * r;
          positions[i * 3 + 1] = 12 + Math.random() * 4;
          positions[i * 3 + 2] = Math.sin(angle) * r;
        }
      }
      posAttr.needsUpdate = true;
    }

    // 3. Process continuous ASDW / Arrow keyboard navigation
    this.updateKeyboardMovement(delta);

    this.renderer.render(this.scene, this.camera);
    this.updateLandmarksAndLeaders();
  }
}
