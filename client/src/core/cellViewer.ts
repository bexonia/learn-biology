// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Whole Cell 3D Architecture Scene (1.5 µm scale)
 * Powered by WebAssembly Orbit Engine & Three.js WebGL
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { OrganelleData } from '../types/biology';

if (typeof window !== 'undefined') {
  (window as any).THREE = THREE;
  (window as any).GLTFLoader = GLTFLoader;
}

export const CELL_ANATOMY_DATA: Record<string, OrganelleData> = {
  overview: {
    zone: 'Zone 0: Whole Cell Morphology',
    title: 'A Typical Prokaryotic Cell',
    scientific: 'Escherichia coli K-12 (Bacterium)',
    phonetic: 'Pronounced: /ˌɛʃ.əˈrɪk.i.ə ˈkoʊ.laɪ/ (Named after Theodor Escherich)',
    subtitle: 'Gram-Negative Bacillus Model Organism',
    color: '#D1C2A5',
    colorName: 'Warm Biological Palette',
    scale: '1.5 µm × 0.8 µm (Volume ~1 µm³)',
    abundance: 'Single autonomous unicellular organism',
    composition: 'Multi-layer envelope, genetic core, and cytosol',
    description: 'Prokaryotes are single-celled organisms defined by the absence of a membrane-enclosed nucleus and membrane-bound eukaryotic organelles (mitochondria, chloroplasts, Golgi). In Gram-negative bacteria such as Escherichia coli, the cell is enveloped by a complex multi-layered architecture: an outer capsule/glycocalyx, an outer membrane, a periplasmic space housing the thin peptidoglycan cell wall, and an inner cytoplasmic (plasma) membrane generating the electrochemical proton gradient that fuels cellular life.',
    proteins: [
      { name: 'FtsZ (Divisome Z-Ring)', tag: '4 nm', desc: 'Tubulin-homolog GTPase that polymerizes into a constricting ring to divide the cell in two.' },
      { name: 'MreB (Actin Cytoskeleton)', tag: '5 nm', desc: 'Actin-homolog helical cables orchestrating rod shape (bacillus) elongation.' },
      { name: 'DNA Polymerase III Holoenzyme', tag: '10–12 nm', desc: 'Massive 10-subunit replication engine duplicating the chromosome at 1,000 bp/sec.' }
    ],
    camPos: new THREE.Vector3(0.54, 0.98, 10.8),
    camTarget: new THREE.Vector3(-0.6, 0.0, 0.0)
  },
  capsule: {
    zone: 'Zone 1: Cell Envelope Boundary',
    title: 'Capsule',
    scientific: 'Glycocalyx Capsularis (K-Antigen)',
    phonetic: 'Pronounced: /ˈkæp.sjuːl/ • /ˌɡlaɪ.koʊˈkeɪ.lɪks/ (Greek: glykys "sweet" + kalyx "husk")',
    subtitle: 'Outer Polysaccharide Hydration & Slime Shield',
    color: '#40916C',
    colorName: '#40916C Mint Glycocalyx',
    scale: '100–400 nm thick coat',
    abundance: '1 continuous outermost coat',
    composition: 'High-molecular-weight acidic polysaccharides (CPS) & colanic acid',
    description: 'The outermost non-living protective envelope layer. Formed from high-molecular-weight extracellular polysaccharides linked into a dense, gelatinous matrix, the capsule shields the bacterium against desiccation, acts as a physical barrier against bacteriophage infection, and prevents complement deposition and macrophage phagocytosis in host immune environments.',
    proteins: [
      { name: 'Wza Translocon Octamer', tag: 'Secretory Outer Ring', desc: 'Large 8-stranded α-helical barrel conducting capsular polysaccharides across the outer membrane.' },
      { name: 'Wzb / Wzc Tyrosine Kinase', tag: 'Polymerization Motor', desc: 'Inner membrane autophosphorylating tyrosine kinase regulating polymer chain length.' },
      { name: 'Capsular Glycosyltransferases', tag: 'Polysaccharide Synthase', desc: 'Assembly enzymes linking UDP-sugar monomers into long polysaccharide repeat units.' }
    ],
    camPos: new THREE.Vector3(-0.95, 0.35, 4.4),
    camTarget: new THREE.Vector3(-0.957, -0.285, 1.854)
  },
  wall: {
    zone: 'Zone 1: Cell Envelope Boundary',
    title: 'Peptidoglycan Cell Wall',
    scientific: 'Murein Sacculus & Outer Membrane',
    phonetic: 'Pronounced: /ˌpɛp.tɪ.doʊˈɡlaɪ.kæn/ • /ˈmjʊər.iːn/ (Latin: murus "wall")',
    subtitle: 'Crosslinked Glycan Structural Exoskeleton',
    color: '#3F6636',
    colorName: '#3F6636 Forest Green Sandstone',
    scale: '15–30 nm thickness (mesh pores ~2–4 nm)',
    abundance: '1 continuous covalently closed macromolecular bag',
    composition: 'Poly-NAG-NAM glycan chains + D-alanine/D-glutamate crosslinks',
    description: 'The rigid exoskeleton of the bacterium. In Gram-negative cells, the cell wall consists of a thin, elastic single-layered sheet of murein peptidoglycan situated directly inside the periplasm, beneath the lipopolysaccharide (LPS) outer membrane. It preserves the distinctive bacillus rod shape and counteracts internal osmotic turgor pressure (2–5 atm), preventing osmotic lysis.',
    proteins: [
      { name: 'Penicillin-Binding Proteins (PBPs)', tag: 'Transpeptidases', desc: 'Transpeptidases and transglycosylases that crosslink peptide stems; prime targets of β-lactam antibiotics.' },
      { name: 'MurA-F Biosynthetic Cascade', tag: 'Metabolic Pathway', desc: 'Sequential cytosolic enzymes synthesizing the lipid II murein precursor from UDP-GlcNAc.' },
      { name: 'Lytic Transglycosylases', tag: 'Space Cutters', desc: 'Enzymes that selectively cleave glycan bonds to allow insertion of flagellar basal bodies and secretion systems.' }
    ],
    camPos: new THREE.Vector3(-0.55, 0.45, 4.0),
    camTarget: new THREE.Vector3(-0.594, -0.182, 1.627)
  },
  membrane: {
    zone: 'Zone 1: Cell Envelope Boundary',
    title: 'Periplasmic Space & Inner Membrane',
    scientific: 'Spatium Periplasmicum & Membrana Interna',
    phonetic: 'Pronounced: /ˌpɛr.ɪˈplæz.əm/ (Greek: peri- "around" + plasma "formed substance")',
    subtitle: 'Proton Motive Force & Trans-Envelope Gateway',
    color: '#E2A824',
    colorName: '#E2A824 Golden Amber',
    scale: 'Periplasm: 10–25 nm width | Inner Bilayer: 4–5 nm',
    abundance: '1 continuous periplasmic compartment & 1 inner bilayer',
    composition: 'Periplasmic gel (SurA/Skp/DegP) + Phospholipid bilayer (PE 75%, PG 20%, CL 5%)',
    description: 'In Gram-negative bacteria such as E. coli, this critical boundary encompasses both the periplasmic space (an oxidizing, protein-dense aqueous gel between the outer wall and inner membrane) and the inner cytoplasmic membrane. The inner membrane acts as the primary impermeable barrier that maintains the electrochemical proton motive force (PMF), powering ATP synthase and flagellar rotation, while the periplasm orchestrates protein folding, solute binding (MalE), and peptidoglycan assembly.',
    proteins: [
      { name: 'SurA & Skp Chaperones', tag: 'Periplasmic Foldases', desc: 'Periplasmic escort chaperones preventing aggregation of outer membrane proteins (OMPs) across the periplasmic space.' },
      { name: 'ATP Synthase F₁F₀ (6RKW)', tag: '10 nm Rotary Motor', desc: 'Rotary nanomachine converting the electrochemical proton gradient into chemical ATP energy as H⁺ flows from periplasm into cytosol.' },
      { name: 'SecYEG Protein Translocon', tag: 'Secretory Channel', desc: 'Conserved heterotrimeric channel mediating translocation of unfolded polypeptides across or into the inner membrane.' }
    ],
    camPos: new THREE.Vector3(0.85, 1.35, -2.8),
    camTarget: new THREE.Vector3(0.625, 0.652, -1.348)
  },
  cytoplasm: {
    zone: 'Zone 2: Cytosol & Metabolic Bedding',
    title: 'Cytoplasm & Protein Soup',
    scientific: 'Cytosol Solutio & Macromolecular Crowd',
    phonetic: 'Pronounced: /ˈsaɪ.təˌplæz.əm/ (Greek: kytos "vessel" + plasma)',
    subtitle: 'Crowded Viscoelastic Colloidal Matrix',
    color: '#B08968',
    colorName: '#B08968 Colloidal Bedding',
    scale: 'Viscosity: 2–5x water | 300–400 mg/mL macromolecules',
    abundance: '~70% water, 30% macromolecules',
    composition: 'Proteins (55%), RNA (20%), Lipids (10%), Metabolites & Ions (15%)',
    description: 'The dense, aqueous colloid filling the bacterial cell interior. Far from an empty dilute solution, the bacterial cytoplasm is an intensely crowded gel (~300–400 mg/mL macromolecules) undergoing relentless Brownian motion. Solutes, small metabolites (ATP, amino acids), chaperones (GroEL/ES), and intermediate metabolic complexes constantly collide at microsecond timescales to drive enzymatic cascades.',
    proteins: [
      { name: 'DNA Helicase (DnaB)', tag: '8 nm Hexamer', desc: 'ATP-powered rotary ring unzipping the double-stranded DNA helix ahead of the replication fork.' },
      { name: 'GroEL / GroES Chaperonin', tag: '14 nm Nano-Cage', desc: 'Double-ring protein cylinder providing an isolated chamber for unfolded proteins to reach native fold.' },
      { name: 'Glycolytic Enzymes (GAPDH, Pyk)', tag: '3–6 nm Globular', desc: 'Metabolic assembly line converting glucose into pyruvate, yielding ATP and NADH reducing equivalents.' }
    ],
    camPos: new THREE.Vector3(0.35, 0.95, 2.7),
    camTarget: new THREE.Vector3(0.35, -0.05, 0.40)
  },
  ribosomes: {
    zone: 'Zone 3: Genetic & Translation Machinery',
    title: '70S Polyribosomes',
    scientific: 'Ribonucleoprotein Complex (30S + 50S)',
    phonetic: 'Pronounced: /ˈraɪ.bəˌsoʊm/ (Ribonucleic acid + Greek: soma "body")',
    subtitle: 'Macromolecular Protein Translation Factories',
    color: '#E06D53',
    colorName: '#E06D53 Warm Coral Terracotta',
    scale: '25 nm diameter (210 Å × 290 Å | 2.5 MDa mass)',
    abundance: '20,000–70,000 ribosomes per actively growing cell',
    composition: 'Ribosomal RNA (65%: 16S, 23S, 5S) + 55 ribosomal proteins (35%)',
    description: 'Universal programmable molecular assembly engines that translate messenger RNA (mRNA) sequences into polypeptide chains. In prokaryotes, because there is no nuclear membrane separating transcription from translation, ribosomes bind to nascent mRNA transcripts while they are still being synthesized by RNA polymerase off the nucleoid DNA—a coordinated phenomenon called the "expressome".',
    proteins: [
      { name: '50S Large Subunit (23S & 5S rRNA)', tag: 'Welding Engine', desc: 'Contains the Peptidyl Transferase Center (PTC), an RNA ribozyme catalyzing peptide bond formation.' },
      { name: '30S Small Subunit (16S rRNA)', tag: 'Barcode Scanner', desc: 'Decodes mRNA codons by verifying codon-anticodon base pairing with aminoacyl-tRNA molecules.' },
      { name: 'Elongation Factors (EF-Tu & EF-G)', tag: 'GTPase Drivers', desc: 'GTP-driven molecular switches shuttling aminoacyl-tRNA to the A-site and ratcheting the mRNA strand.' }
    ],
    camPos: new THREE.Vector3(2.10, 0.85, 1.55),
    camTarget: new THREE.Vector3(1.574, 0.356, 0.293),
    hasDrilldown: true
  },
  nucleoid: {
    zone: 'Zone 3: Genetic & Translation Machinery',
    title: 'Nucleoid',
    scientific: 'Bacterial Chromosome (dsDNA Genophore)',
    phonetic: 'Pronounced: /ˈnjuː.kli.ɔɪd/ (Latin: nucleus + Greek: -oeides "resembling")',
    subtitle: 'Supercoiled Master Genetic Chromatin Skein',
    color: '#7209B7',
    colorName: '#7209B7 Royal Amethyst DNA',
    scale: '4.64 Mbp (~1.5 mm contour length compacted into ~1 µm region)',
    abundance: '1 master circular chromosome (often 2–4 replication forks)',
    composition: 'Closed circular dsDNA (80%) + NAPs (10%) + nascent RNA (10%)',
    description: 'The irregular, non-membrane-enclosed region where the master genetic material resides. The single circular double-stranded DNA genome measures ~1.5 mm when stretched out, but is compacted >1,000-fold into the bacterial cell volume through negative supercoiling by DNA gyrase and structural organization into ~400 topologically isolated loops by Nucleoid-Associated Proteins (NAPs).',
    proteins: [
      { name: 'Nucleoid-Associated Proteins (HU, H-NS)', tag: 'Histone Analogs', desc: 'Bacterial chromatin architecture proteins that bridge, bend, and loop DNA strands into a compact skein.' },
      { name: 'RNA Polymerase Core & Sigma-70', tag: 'Transcription Engine', desc: 'Multiprotein machine unwinding promoter DNA and synthesizing complementary mRNA transcripts.' },
      { name: 'DNA Topoisomerase IV & Gyrase', tag: 'Tension Relievers', desc: 'Enzymes introducing negative supercoils and resolving catenated DNA rings during chromosome segregation.' }
    ],
    camPos: new THREE.Vector3(0.12, 1.65, 2.15),
    camTarget: new THREE.Vector3(0.098, 0.647, 0.304)
  },
  plasmid: {
    zone: 'Zone 3: Genetic & Translation Machinery',
    title: 'Plasmids',
    scientific: 'Extrachromosomal Autonomous Replicon (dsDNA)',
    phonetic: 'Pronounced: /ˈplæz.mɪd/ (From cytoplasm + -id)',
    subtitle: 'Mobile Genetic Cassettes & Resistance Rings',
    color: '#00B4D8',
    colorName: '#00B4D8 Electric Azure Cyan',
    scale: '2 kb to 200 kb (~50–150 nm circular diameter)',
    abundance: '1 to 50+ copies per cell depending on copy control origin',
    composition: 'Covalently closed circular double-stranded DNA (cccDNA)',
    description: 'Small, extrachromosomal circular DNA duplexes that replicate independently of the master bacterial chromosome. Plasmids carry non-essential yet selectively advantageous genes—such as antibiotic-degrading enzymes, heavy metal resistance operons, and virulence determinants—and can be horizontally transferred between bacterial species via conjugative pili.',
    proteins: [
      { name: 'RepA Initiator Protein', tag: 'Plasmid Replication', desc: 'Protein binding specifically to the plasmid origin (oriV) to recruit host DNA polymerase III.' },
      { name: 'Beta-Lactamase (Bla)', tag: 'Antibiotic Defense', desc: 'Secreted periplasmic enzyme that hydrolyzes the β-lactam ring of penicillin, rendering it ineffective.' },
      { name: 'Tra Conjugation Machinery', tag: 'Horizontal Transfer', desc: 'Type IV secretion system assembling the conjugative pilus to transfer plasmid DNA to recipient bacteria.' }
    ],
    camPos: new THREE.Vector3(-0.06, 0.95, 2.05),
    camTarget: new THREE.Vector3(-0.058, 0.184, 0.576)
  },
  flagellum: {
    zone: 'Zone 2: Surface Appendages & Nanomachinery',
    title: 'Flagellum & Rotary Motor',
    scientific: 'FliC Axoneme & Proton-Driven Basal Body',
    phonetic: 'Pronounced: /fləˈdʒɛl.əm/ (Latin: flagellum "whip")',
    subtitle: 'Archimedean Screw Propulsion Engine',
    color: '#0077B6',
    colorName: '#0077B6 Marine Propulsion',
    scale: 'Filament: 20 nm wide × 10–15 µm long | Motor: 45 nm diameter',
    abundance: '3 to 8 peritrichous helical filaments per cell',
    composition: 'FliC flagellin protofilaments + MS/P/L/C protein rings + MotA/B stators',
    description: 'A sophisticated supramolecular nanomachine providing bacterial motility. The motor spans the outer membrane, peptidoglycan wall, periplasmic space, and inner membrane. Driven by proton flow through MotA/MotB stators down the electrochemical gradient, the basal body spins at 200–1,000 RPM, rotating the helical flagellin filament to propel the cell in a "run and tumble" chemotactic migration.',
    proteins: [
      { name: 'Flagellin (FliC)', tag: 'Filament Subunit', desc: 'Globular protein polymerizing into an 11-protofilament hollow helical cylinder.' },
      { name: 'MotA / MotB Proton Stators', tag: 'Ion Turbines', desc: 'Transmembrane proton-conducting channels converting electrochemical gradient into torque.' },
      { name: 'FliG / FliM / FliN (C-Ring Switch)', tag: 'Direction Rotor', desc: 'Chemotaxis-responsive rotor switch reversing rotation from counter-clockwise (run) to clockwise (tumble).' }
    ],
    camPos: new THREE.Vector3(-4.50, 0.30, 4.60),
    camTarget: new THREE.Vector3(-3.792, -0.896, 1.741),
    hasDrilldown: true
  }
};

export const CELL_LANDMARKS = [
  {
    id: 'label-membrane',
    key: 'membrane',
    name: 'periplasmic space & membrane',
    color: '#E2A824',
    badge: 'MEMBRANE',
    pos: new THREE.Vector3(0.625, 0.652, -1.348), // Upper golden plasma membrane lip
    normal: new THREE.Vector3(0.1, 0.75, -0.65).normalize()
  },
  {
    id: 'label-nucleoid',
    key: 'nucleoid',
    name: 'nucleoid',
    color: '#7209B7',
    badge: 'dsDNA',
    pos: new THREE.Vector3(0.098, 0.647, 0.304), // Top crest loop of supercoiled chromosome
    normal: new THREE.Vector3(0.0, 0.85, 0.5).normalize()
  },
  {
    id: 'label-ribosomes',
    key: 'ribosomes',
    name: 'ribosomes',
    color: '#E06D53',
    badge: '70S RIBO',
    pos: new THREE.Vector3(1.574, 0.356, 0.293), // Prominent individual ribosome bead on floor
    normal: new THREE.Vector3(0.35, 0.75, 0.55).normalize()
  },
  {
    id: 'label-plasmid',
    key: 'plasmid',
    name: 'plasmids',
    color: '#00B4D8',
    badge: 'PLASMID',
    pos: new THREE.Vector3(-0.058, 0.184, 0.576), // Top rim of front circular blue plasmid ring
    normal: new THREE.Vector3(0.0, 0.65, 0.75).normalize()
  },
  {
    id: 'label-cytoplasm',
    key: 'cytoplasm',
    name: 'cytoplasm & proteins',
    color: '#B08968',
    badge: 'CYTOSOL',
    pos: new THREE.Vector3(0.35, -0.05, 0.40), // Exposed colloidal bedding floor
    normal: new THREE.Vector3(0.1, 0.75, 0.65).normalize()
  },
  {
    id: 'label-wall',
    key: 'wall',
    name: 'cell wall',
    color: '#3F6636',
    badge: 'MUREIN WALL',
    pos: new THREE.Vector3(-0.594, -0.182, 1.627), // Cut porous green sandstone wall face
    normal: new THREE.Vector3(-0.25, -0.2, 0.95).normalize()
  },
  {
    id: 'label-capsule',
    key: 'capsule',
    name: 'capsule',
    color: '#40916C',
    badge: 'GLYCOCALYX',
    pos: new THREE.Vector3(-0.957, -0.285, 1.854), // Outer translucent capsule shell boundary
    normal: new THREE.Vector3(-0.35, -0.2, 0.9).normalize()
  },
  {
    id: 'label-flagellum',
    key: 'flagellum',
    name: 'flagellum & motor',
    color: '#0077B6',
    badge: 'PROPULSION',
    pos: new THREE.Vector3(-3.792, -0.896, 1.741), // Trailing sinusoidal flagellar filament
    normal: new THREE.Vector3(-0.85, -0.15, 0.5).normalize()
  }
];

export const CELL_TOUR_STOPS = [
  'overview', 'capsule', 'wall', 'membrane', 'cytoplasm', 'ribosomes', 'nucleoid', 'plasmid', 'flagellum'
];

export class CellViewerScene {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.voiceService = options.voiceService || window.voiceService;
    this.onSelectOrganelle = options.onSelectOrganelle || (() => {});
    this.onTourStepChange = options.onTourStepChange || (() => {});
    this.onWasmStatus = options.onWasmStatus || (() => {});

    this.active = false;
    this.disposed = false;
    this.isAutoRotating = false;
    this.showLabels = true;
    this.currentActiveTarget = null;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;
    this.soupPoints = null;
    this.cellRoot = null;

    // SVG and Labels
    this.svgOverlay = null;
    this.labelsContainer = null;
    this.microCanvas = null;
    this.microCtx = null;
    this.microAngle = 0;

    // WebAssembly Orbit Engine
    this.wasm = null;

    // Camera Transition State
    this.camTransition = {
      active: false,
      startTime: 0,
      duration: 1200,
      startPos: new THREE.Vector3(),
      endPos: new THREE.Vector3(),
      startTarget: new THREE.Vector3(),
      endTarget: new THREE.Vector3(),
      currentTarget: new THREE.Vector3(-0.6, 0.0, 0.0)
    };

    // User Pointer / Touch
    this.isPointerDown = false;
    this.pointerButton = 0;
    this.shiftDown = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;

    // Tour state
    this.tourActive = false;
    this.tourPlaying = false;
    this.currentTourStep = 0;
    this.tourStepId = 0;
    this.tourPhase = 'idle'; // 'idle' | 'narrating' | 'cooldown' | 'reading'
    this.tourCooldownTimer = 0;
    this.tourReadingTimer = 0;
    this.TOUR_COOLDOWN_DURATION = 3000;
    this.TOUR_READING_DURATION = 10000;
    this.lastTourTick = 0;
    this.tourTtsEnabled = true;

    // Bound listeners for cleanup
    this._onPointerDown = this.handlePointerDown.bind(this);
    this._onPointerMove = this.handlePointerMove.bind(this);
    this._onPointerUp = this.handlePointerUp.bind(this);
    this._onWheel = this.handleWheel.bind(this);
    this._onKeyDown = this.handleKeyDown.bind(this);
    this._onResize = this.handleResize.bind(this);
  }

  async init() {
    // 1. Initialize WebAssembly Core Engine
    try {
      const wasmResponse = await fetch('/wasm/orbit_engine.wasm');
      const wasmBytes = await wasmResponse.arrayBuffer();
      if (this.disposed) return this;
      const wasmModule = await WebAssembly.instantiate(wasmBytes, {});
      this.wasm = wasmModule.instance.exports;
      this.wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
      if (this.onWasmStatus) this.onWasmStatus('WebAssembly Engine: Active');
    } catch (err) {
      console.warn('[-] Failed to load WebAssembly module, using JS fallback:', err);
      if (this.onWasmStatus) this.onWasmStatus('WebAssembly: JS Fallback');
    }

    if (this.disposed) return this;

    // 2. Three.js Scene, Camera, and Studio Lighting Setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFAF8F5);

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.94;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.canvas = this.renderer.domElement;
    this.canvas.id = 'gl-canvas';

    // Clear any previous orphaned canvas before mounting
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.canvas);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.72);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFAF0, 1.45);
    keyLight.position.set(6.5, 9.5, 7.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0004;
    keyLight.shadow.camera.near = 1.0;
    keyLight.shadow.camera.far = 30.0;
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xE0F0F8, 0.65);
    fillLight.position.set(-8.0, 3.5, 5.0);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xFDF8EE, 0.55);
    rimLight.position.set(0.0, -6.0, -8.0);
    this.scene.add(rimLight);

    const groundBounce = new THREE.DirectionalLight(0xD8C8B0, 0.35);
    groundBounce.position.set(0, -10, 0);
    this.scene.add(groundBounce);

    // 3. Build Procedural Materials and Load GLB
    this.loadCellModel();

    // 4. Cytoplasmic Solute Colloidal Cloud
    this.buildSoluteCloud();

    // 5. Connect Overlays
    this.svgOverlay = document.getElementById('leader-lines-svg');
    this.labelsContainer = document.getElementById('labels-container');
    this.microCanvas = document.getElementById('micro-canvas');
    if (this.microCanvas) {
      this.microCtx = this.microCanvas.getContext('2d');
    }

    // 6. Connect Events
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    this.canvas.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    this.canvas.addEventListener('wheel', this._onWheel, { passive: false });
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('resize', this._onResize);

    return this;
  }

  createWallPorousTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#3F6636');
    grad.addColorStop(0.35, '#567A4A');
    grad.addColorStop(0.68, '#87704E');
    grad.addColorStop(1.0, '#AA6848');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    const imgData = ctx.getImageData(0, 0, 1024, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 28;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const numPores = 160;
    for (let i = 0; i < numPores; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 512;
      const pr = 3.5 + Math.random() * 9.5;
      const pGrad = ctx.createRadialGradient(px - pr * 0.2, py - pr * 0.2, pr * 0.1, px, py, pr);
      pGrad.addColorStop(0, '#261C14');
      pGrad.addColorStop(0.65, '#48382A');
      pGrad.addColorStop(0.9, 'rgba(72, 56, 42, 0.45)');
      pGrad.addColorStop(1.0, 'transparent');
      ctx.fillStyle = pGrad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  createCytoplasmicSoupTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#D4C6AA';
    ctx.fillRect(0, 0, 1024, 1024);

    const numMicroDots = 6500;
    const microColors = ['#EAE2D2', '#C2B193', '#F4EDE0', '#B5A484', '#DFD3BC', '#E2D8C0'];
    for (let i = 0; i < numMicroDots; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const r = 0.6 + Math.random() * 1.4;
      ctx.fillStyle = microColors[(Math.random() * microColors.length) | 0];
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const numProteins = 1400;
    const proteinColors = [
      'rgba(180, 95, 75, 0.45)',
      'rgba(70, 130, 95, 0.40)',
      'rgba(195, 145, 55, 0.45)',
      'rgba(110, 85, 135, 0.40)',
      'rgba(75, 115, 155, 0.40)',
      'rgba(150, 130, 110, 0.50)'
    ];

    for (let i = 0; i < numProteins; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 1024;
      const pr = 2.0 + Math.random() * 4.6;
      const grad = ctx.createRadialGradient(px - pr * 0.25, py - pr * 0.25, pr * 0.1, px, py, pr);
      const col = proteinColors[(Math.random() * proteinColors.length) | 0];
      grad.addColorStop(0, col.replace(/[\d\.]+\)$/, '0.75)'));
      grad.addColorStop(0.7, col);
      grad.addColorStop(1.0, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }

    const imgData = ctx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 16;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    return texture;
  }

  createNucleoidRugoseMaps() {
    const size = 512;
    const canvasColor = document.createElement('canvas');
    canvasColor.width = size;
    canvasColor.height = size;
    const ctxColor = canvasColor.getContext('2d');

    const canvasNormal = document.createElement('canvas');
    canvasNormal.width = size;
    canvasNormal.height = size;
    const ctxNormal = canvasNormal.getContext('2d');

    const heightMap = new Float32Array(size * size);
    for (let y = 0; y < size; y++) {
      const v = y / size;
      for (let x = 0; x < size; x++) {
        const u = x / size;
        let h = 0.5;
        h += 0.24 * Math.sin(u * 55.0 + Math.cos(v * 35.0) * 2.2);
        h += 0.18 * Math.cos(v * 60.0 + Math.sin(u * 30.0) * 2.0);
        h += 0.12 * Math.sin((u + v) * 85.0);
        h += 0.08 * Math.cos((u - v) * 110.0);
        h += 0.12 * (Math.random() - 0.5);
        heightMap[y * size + x] = Math.max(0.0, Math.min(1.0, h));
      }
    }

    const colorImg = ctxColor.createImageData(size, size);
    const colorData = colorImg.data;
    for (let i = 0; i < heightMap.length; i++) {
      const h = heightMap[i];
      const p = i * 4;
      let r, g, b;
      if (h < 0.5) {
        const t = h * 2.0;
        r = 17 + (36 - 17) * t;
        g = 10 + (22 - 10) * t;
        b = 24 + (53 - 24) * t;
      } else {
        const t = (h - 0.5) * 2.0;
        r = 36 + (58 - 36) * t;
        g = 22 + (37 - 22) * t;
        b = 53 + (84 - 53) * t;
      }
      colorData[p] = Math.round(r);
      colorData[p + 1] = Math.round(g);
      colorData[p + 2] = Math.round(b);
      colorData[p + 3] = 255;
    }
    ctxColor.putImageData(colorImg, 0, 0);

    const normImg = ctxNormal.createImageData(size, size);
    const normData = normImg.data;
    const bumpScale = 3.6;
    for (let y = 0; y < size; y++) {
      const ym1 = (y - 1 + size) % size;
      const yp1 = (y + 1) % size;
      for (let x = 0; x < size; x++) {
        const xm1 = (x - 1 + size) % size;
        const xp1 = (x + 1) % size;

        const dhdx = (heightMap[y * size + xp1] - heightMap[y * size + xm1]) * 0.5;
        const dhdy = (heightMap[yp1 * size + x] - heightMap[ym1 * size + x]) * 0.5;

        let nx = -dhdx * bumpScale;
        let ny = -dhdy * bumpScale;
        let nz = 1.0;
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx /= len;
        ny /= len;
        nz /= len;

        const p = (y * size + x) * 4;
        normData[p] = Math.round((nx * 0.5 + 0.5) * 255);
        normData[p + 1] = Math.round((ny * 0.5 + 0.5) * 255);
        normData[p + 2] = Math.round((nz * 0.5 + 0.5) * 255);
        normData[p + 3] = 255;
      }
    }
    ctxNormal.putImageData(normImg, 0, 0);

    const colorTex = new THREE.CanvasTexture(canvasColor);
    colorTex.wrapS = THREE.RepeatWrapping;
    colorTex.wrapT = THREE.RepeatWrapping;
    colorTex.repeat.set(6, 6);

    const normalTex = new THREE.CanvasTexture(canvasNormal);
    normalTex.wrapS = THREE.RepeatWrapping;
    normalTex.wrapT = THREE.RepeatWrapping;
    normalTex.repeat.set(6, 6);

    return { colorTex, normalTex };
  }

  loadCellModel() {
    const loader = new GLTFLoader();
    const wallTex = this.createWallPorousTexture();
    const basinSoupTex = this.createCytoplasmicSoupTexture();
    const nucleoidMaps = this.createNucleoidRugoseMaps();

    loader.load(
      '/prokaryote_cell.glb',
      (gltf) => {
        this.cellRoot = gltf.scene;
        this.cellRoot.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            const name = child.name;

            if (name.includes('OuterCapsule')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x82A47E,
                roughness: 0.32,
                transparent: true,
                opacity: 0.38,
                side: THREE.DoubleSide,
                depthWrite: false
              });
            } else if (name.includes('CellWall')) {
              child.material = new THREE.MeshStandardMaterial({
                map: wallTex,
                roughness: 0.55,
                metalness: 0.05,
                side: THREE.DoubleSide
              });
            } else if (name.includes('PlasmaMembrane')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xE2A824,
                roughness: 0.24,
                metalness: 0.30,
                side: THREE.DoubleSide
              });
            } else if (name.includes('Cytoplasm_Bedding')) {
              child.material = new THREE.MeshStandardMaterial({
                map: basinSoupTex,
                color: 0xC8B896,
                roughness: 0.68,
                metalness: 0.04,
                side: THREE.DoubleSide
              });
            } else if (name.includes('Nucleoid')) {
              child.material = new THREE.MeshStandardMaterial({
                map: nucleoidMaps.colorTex,
                normalMap: nucleoidMaps.normalTex,
                normalScale: new THREE.Vector2(2.4, 2.4),
                roughness: 0.86,
                metalness: 0.02
              });
            } else if (name.includes('Plasmid')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x00B4D8,
                roughness: 0.32,
                metalness: 0.25
              });
            } else if (name.includes('Ribosomes')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xE06D53,
                roughness: 0.64,
                metalness: 0.06
              });
            } else if (name.includes('Solute')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x4895EF,
                roughness: 0.38,
                metalness: 0.10,
                transparent: true,
                opacity: 0.85
              });
            } else if (name.includes('Motor_Gold')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xDDAE32,
                roughness: 0.22,
                metalness: 0.75
              });
            } else if (name.includes('Motor_Red')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xC81414,
                roughness: 0.30,
                metalness: 0.08
              });
            } else if (name.includes('Flagellum')) {
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0xC6C2BA,
                transparent: true,
                opacity: 0.80,
                roughness: 0.35,
                transmission: 0.38
              });
            } else if (name.includes('Pili')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xD8DED8,
                transparent: true,
                opacity: 0.65,
                roughness: 0.36
              });
            }
          }
        });
        this.scene.add(this.cellRoot);
      },
      undefined,
      (err) => console.error('[-] Error loading prokaryote_cell.glb:', err)
    );
  }

  buildSoluteCloud() {
    const count = 2200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const palette = [
      new THREE.Color(0xF4A261),
      new THREE.Color(0x2A9D8F),
      new THREE.Color(0xE9C46A),
      new THREE.Color(0x8338EC),
      new THREE.Color(0x48CAE4),
      new THREE.Color(0xDDAE32),
      new THREE.Color(0xEAE2D2)
    ];

    let placed = 0;
    while (placed < count) {
      const x = (Math.random() - 0.5) * 4.2;
      const y = -0.10 + Math.random() * 0.26;
      const z = (Math.random() - 0.5) * 2.1;

      const radY = y / 0.92;
      const radZ = z / 1.05;
      if (radY * radY + radZ * radZ > 0.78) continue;
      if (Math.abs(x) > 1.85 && (radY * radY + radZ * radZ > 0.40)) continue;

      pos[placed * 3] = x;
      pos[placed * 3 + 1] = y;
      pos[placed * 3 + 2] = z;

      const col = palette[(Math.random() * palette.length) | 0];
      cols[placed * 3] = col.r;
      cols[placed * 3 + 1] = col.g;
      cols[placed * 3 + 2] = col.b;
      placed++;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending
    });

    this.soupPoints = new THREE.Points(geo, mat);
    this.scene.add(this.soupPoints);
  }

  start() {
    this.active = true;
    const loop = () => {
      if (!this.active) return;
      this.animFrameId = requestAnimationFrame(loop);
      this.render();
    };
    loop();
  }

  stop() {
    this.active = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.svgOverlay) this.svgOverlay.innerHTML = '';
    if (this.labelsContainer) this.labelsContainer.style.display = 'none';
  }

  resetCamera() {
    if (this.tourActive) this.exitTour();
    if (this.wasm && this.wasm.init_engine) {
      this.wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
    }
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  toggleLabels() {
    this.showLabels = !this.showLabels;
    this.updateLandmarksAndLeaders();
    return this.showLabels;
  }

  flyCameraTo(targetPos, targetLookAt, duration = 1200) {
    this.camTransition.active = true;
    this.camTransition.startTime = performance.now();
    this.camTransition.duration = duration;
    this.camTransition.startPos.copy(this.camera.position);
    this.camTransition.endPos.copy(targetPos);
    this.camTransition.startTarget.copy(this.camTransition.currentTarget);
    this.camTransition.endTarget.copy(targetLookAt);
  }

  selectOrganelle(key) {
    this.currentActiveTarget = key;
    const data = CELL_ANATOMY_DATA[key];
    if (data) {
      this.flyCameraTo(data.camPos, data.camTarget);
      if (this.onSelectOrganelle) {
        this.onSelectOrganelle(key, data);
      }
    }
  }

  startTour() {
    this.tourActive = true;
    this.tourPlaying = true;
    this.goToTourStep(0);
  }

  toggleTourPlay() {
    if (!this.tourActive) {
      this.startTour();
      return true;
    }
    this.tourPlaying = !this.tourPlaying;
    if (this.tourPlaying) {
      this.tourReadingTimer = 0;
      this.tourCooldownTimer = 0;
    } else {
      if (this.voiceService) this.voiceService.stop();
    }
    this.notifyTourStep();
    return this.tourPlaying;
  }

  goToTourStep(idx) {
    this.currentTourStep = Math.max(0, Math.min(CELL_TOUR_STOPS.length - 1, idx));
    this.tourStepId++;
    const thisStepId = this.tourStepId;
    const key = CELL_TOUR_STOPS[this.currentTourStep];
    const data = CELL_ANATOMY_DATA[key];
    if (!data) return;

    this.flyCameraTo(data.camPos, data.camTarget);

    if (this.voiceService) this.voiceService.stop();

    if (this.tourTtsEnabled && this.tourPlaying) {
      this.tourPhase = 'narrating';
      this.tourCooldownTimer = 0;
      this.narrateTourStep(this.currentTourStep, key, thisStepId);
    } else {
      this.tourPhase = 'reading';
      this.tourReadingTimer = 0;
    }

    if (this.onSelectOrganelle) {
      this.onSelectOrganelle(key, data);
    }
    this.notifyTourStep();
  }

  narrateTourStep(stepIndex, key, thisStepId) {
    if (!this.tourTtsEnabled || !this.tourActive) return;
    const data = CELL_ANATOMY_DATA[key];
    if (!data) return;

    const speech = `Step ${stepIndex + 1} of ${CELL_TOUR_STOPS.length}: ${data.title}. ${data.description}`;
    const voice = this.voiceService?.getSelectedVoice?.() || 'af_heart';

    if (this.voiceService?.playText) {
      this.voiceService.playText(speech, {
        voice,
        onStart: () => {
          if (!this.tourActive || this.tourStepId !== thisStepId) return;
          this.tourPhase = 'narrating';
          this.notifyTourStep();
        },
        onEnd: () => {
          if (!this.tourActive || this.tourStepId !== thisStepId) return;
          this.tourPhase = 'cooldown';
          this.tourCooldownTimer = 0;
          this.notifyTourStep();
        },
        onError: () => {
          if (!this.tourActive || this.tourStepId !== thisStepId) return;
          this.tourPhase = 'cooldown';
          this.tourCooldownTimer = 0;
          this.notifyTourStep();
        }
      });
    }
  }

  nextTourStep() {
    if (this.currentTourStep < CELL_TOUR_STOPS.length - 1) {
      this.goToTourStep(this.currentTourStep + 1);
    } else {
      this.exitTour();
    }
  }

  prevTourStep() {
    if (this.currentTourStep > 0) {
      this.goToTourStep(this.currentTourStep - 1);
    }
  }

  exitTour() {
    this.tourStepId++;
    this.tourPhase = 'idle';
    this.tourActive = false;
    this.tourPlaying = false;
    if (this.voiceService) this.voiceService.stop();
    this.notifyTourStep();
  }

  setTourVoice(enabled) {
    this.tourTtsEnabled = enabled;
    if (!enabled && this.voiceService) {
      this.voiceService.stop();
      if (this.tourActive && this.tourPlaying) {
        this.tourPhase = 'reading';
        this.tourReadingTimer = 0;
      }
    }
    this.notifyTourStep();
  }

  notifyTourStep() {
    if (this.onTourStepChange) {
      this.onTourStepChange({
        active: this.tourActive,
        playing: this.tourPlaying,
        stepIndex: this.currentTourStep,
        key: CELL_TOUR_STOPS[this.currentTourStep],
        totalSteps: CELL_TOUR_STOPS.length,
        phase: this.tourPhase,
        cooldownRemaining: Math.max(1, Math.ceil((this.TOUR_COOLDOWN_DURATION - this.tourCooldownTimer) / 1000)),
        ttsEnabled: this.tourTtsEnabled
      });
    }
  }

  handlePointerDown(e) {
    this.isPointerDown = true;
    this.pointerButton = e.button;
    this.shiftDown = e.shiftKey;
    this.lastPointerX = e.clientX;
    this.lastPointerY = e.clientY;
    this.canvas.setPointerCapture(e.pointerId);

    if (this.tourActive && this.tourPlaying) {
      this.toggleTourPlay();
    }
  }

  handlePointerMove(e) {
    if (!this.isPointerDown) return;
    const dx = e.clientX - this.lastPointerX;
    const dy = e.clientY - this.lastPointerY;
    this.lastPointerX = e.clientX;
    this.lastPointerY = e.clientY;

    const isPan = (this.pointerButton === 2) || (this.pointerButton === 1) || (this.pointerButton === 0 && (e.shiftKey || this.shiftDown));

    if (isPan) {
      if (this.wasm && this.wasm.get_cam_x) {
        const rad = Math.hypot(
          this.wasm.get_cam_x() - this.wasm.get_target_x(),
          this.wasm.get_cam_y() - this.wasm.get_target_y(),
          this.wasm.get_cam_z() - this.wasm.get_target_z()
        );
        const factor = rad * 0.0014;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

        const tx = this.wasm.get_target_x() - right.x * dx * factor + up.x * dy * factor;
        const ty = this.wasm.get_target_y() - right.y * dx * factor + up.y * dy * factor;
        const tz = this.wasm.get_target_z() - right.z * dx * factor + up.z * dy * factor;

        const relX = this.wasm.get_cam_x() - this.wasm.get_target_x();
        const relY = this.wasm.get_cam_y() - this.wasm.get_target_y();
        const relZ = this.wasm.get_cam_z() - this.wasm.get_target_z();
        const theta = Math.atan2(relX, relZ);
        const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
        this.wasm.init_engine(theta, phi, rad, tx, ty, tz);
      }
    } else {
      if (this.wasm && this.wasm.add_orbit_impulse) {
        this.wasm.add_orbit_impulse(dx * 0.005, -dy * 0.005);
      }
    }
  }

  handlePointerUp(e) {
    this.isPointerDown = false;
    try { this.canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  }

  handleWheel(e) {
    e.preventDefault();
    if (this.tourActive && this.tourPlaying) {
      this.toggleTourPlay();
    }
    if (this.wasm && this.wasm.add_zoom_impulse) {
      this.wasm.add_zoom_impulse(e.deltaY * 0.008);
    }
  }

  handleKeyDown(e) {
    if (!this.active) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;

    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(-0.85);
    } else if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(0.85);
    } else if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      this.panCellCamera(-0.35, 0);
    } else if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      this.panCellCamera(0.35, 0);
    } else if (e.code === 'Space') {
      this.panCellCamera(0, 0.35);
    } else if (e.code === 'KeyC' || e.code === 'ControlLeft' || e.code === 'ControlRight') {
      this.panCellCamera(0, -0.35);
    } else if (e.code === 'KeyQ') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(-0.8);
    } else if (e.code === 'KeyE') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(0.8);
    } else if (e.code === 'KeyR') {
      this.resetCamera();
    }
  }

  panCellCamera(deltaX, deltaY) {
    if (!this.wasm || !this.wasm.get_cam_x) return;
    const rad = Math.hypot(
      this.wasm.get_cam_x() - this.wasm.get_target_x(),
      this.wasm.get_cam_y() - this.wasm.get_target_y(),
      this.wasm.get_cam_z() - this.wasm.get_target_z()
    );
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

    const tx = this.wasm.get_target_x() + right.x * deltaX + up.x * deltaY;
    const ty = this.wasm.get_target_y() + right.y * deltaX + up.y * deltaY;
    const tz = this.wasm.get_target_z() + right.z * deltaX + up.z * deltaY;

    const relX = this.wasm.get_cam_x() - this.wasm.get_target_x();
    const relY = this.wasm.get_cam_y() - this.wasm.get_target_y();
    const relZ = this.wasm.get_cam_z() - this.wasm.get_target_z();
    const theta = Math.atan2(relX, relZ);
    const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
    this.wasm.init_engine(theta, phi, rad, tx, ty, tz);
  }

  handleResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    if (this.camera && this.renderer) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.updateLandmarksAndLeaders();
    }
  }

  updateLandmarksAndLeaders() {
    if (!this.svgOverlay || !this.labelsContainer) {
      this.svgOverlay = document.getElementById('leader-lines-svg');
      this.labelsContainer = document.getElementById('labels-container');
    }
    if (!this.svgOverlay || !this.labelsContainer) return;

    if (!this.showLabels) {
      this.svgOverlay.innerHTML = '';
      this.labelsContainer.style.display = 'none';
      return;
    }
    this.labelsContainer.style.display = 'block';

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    let svgLines = '';

    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);

    const appContainer = document.getElementById('app-container');
    const isDrawerOpen = !!(appContainer && appContainer.classList.contains('drawer-open'));
    const rightMargin = isDrawerOpen ? 430 : 150;
    const topMargin = 85;

    // Compute cell center projection in screen space
    const cellCenter = this.cellRoot
      ? new THREE.Vector3(-0.6, 0.0, 0.0).applyMatrix4(this.cellRoot.matrixWorld)
      : new THREE.Vector3(-0.6, 0.0, 0.0);
    const centerProj = cellCenter.clone().project(this.camera);
    const centerScreenX = (centerProj.x * 0.5 + 0.5) * width;
    const centerScreenY = (-centerProj.y * 0.5 + 0.5) * height;

    const visibleItems = [];

    // Phase 1: Transform to world coordinates, check camera plane and normal occlusion
    CELL_LANDMARKS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const worldPos = this.cellRoot
        ? item.pos.clone().applyMatrix4(this.cellRoot.matrixWorld)
        : item.pos.clone();

      // Guard: only project points in front of the camera lens plane
      const toPoint = worldPos.clone().sub(this.camera.position);
      if (toPoint.dot(camDir) <= 0.05) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // Check facing direction / surface normal
      const viewDir = this.camera.position.clone().sub(worldPos).normalize();
      const worldNormal = item.normal ? item.normal.clone() : new THREE.Vector3(0, 1, 0);
      if (this.cellRoot) {
        worldNormal.transformDirection(this.cellRoot.matrixWorld);
      }
      const facingDot = worldNormal.dot(viewDir);
      const isActive = this.currentActiveTarget === item.key;

      // Occlusion test: back-facing points on the far side of the cell fade out
      // Active item stays visible; flagellum has wider visibility range
      const isOccluded = !isActive && (item.key === 'flagellum' ? facingDot < -0.7 : facingDot < -0.15);

      const v = worldPos.clone().project(this.camera);
      const isFrustum = v.z > -1 && v.z < 1;
      const screenX = (v.x * 0.5 + 0.5) * width;
      const screenY = (-v.y * 0.5 + 0.5) * height;

      if (!isFrustum || screenX < 20 || screenX > width - 20 || screenY < 20 || screenY > height - 20 || isOccluded) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // Radial displacement from cell center in screen space
      const dx = screenX - centerScreenX;
      const dy = screenY - centerScreenY;
      let side = dx >= 0 ? 'right' : 'left';
      if (side === 'right' && screenX > width - rightMargin - 60) {
        side = 'left';
      } else if (side === 'left' && screenX < 140) {
        side = 'right';
      }

      const halfW = el.offsetWidth ? (el.offsetWidth * 0.5) : 75;
      let targetX;
      if (side === 'right') {
        const offsetDist = Math.max(160, Math.min(270, 180 + Math.abs(dx) * 0.12));
        targetX = Math.min(width - rightMargin, Math.max(screenX + 90, screenX + offsetDist));
      } else {
        const offsetDist = Math.max(160, Math.min(270, 180 + Math.abs(dx) * 0.12));
        targetX = Math.max(150, Math.min(screenX - 90, screenX - offsetDist));
      }

      let targetY = screenY + (dy < -60 ? -35 : (dy > 60 ? 35 : 0));
      targetY = Math.max(topMargin, Math.min(height - 80, targetY));

      visibleItems.push({
        item,
        el,
        isActive,
        screenX,
        screenY,
        dx,
        dy,
        side,
        targetX,
        targetY,
        halfW
      });
    });

    // Phase 2: Anti-collision vertical relaxation for each side
    const MIN_GAP = 52;
    ['left', 'right'].forEach((side) => {
      const group = visibleItems.filter((v) => v.side === side);
      if (group.length === 0) return;

      group.sort((a, b) => a.targetY - b.targetY);

      // Downward push
      for (let i = 1; i < group.length; i++) {
        if (group[i].targetY < group[i - 1].targetY + MIN_GAP) {
          group[i].targetY = group[i - 1].targetY + MIN_GAP;
        }
      }

      // Upward clamp if bottom exceeds viewport
      const maxAllowedY = height - 80;
      if (group[group.length - 1].targetY > maxAllowedY) {
        group[group.length - 1].targetY = maxAllowedY;
        for (let i = group.length - 2; i >= 0; i--) {
          if (group[i].targetY > group[i + 1].targetY - MIN_GAP) {
            group[i].targetY = group[i + 1].targetY - MIN_GAP;
          }
        }
      }

      // Downward clamp if top is pushed above viewport
      const minAllowedY = topMargin;
      if (group[0].targetY < minAllowedY) {
        group[0].targetY = minAllowedY;
        for (let i = 1; i < group.length; i++) {
          if (group[i].targetY < group[i - 1].targetY + MIN_GAP) {
            group[i].targetY = group[i - 1].targetY + MIN_GAP;
          }
        }
      }
    });

    // Phase 3: Position HTML badges and build SVG leader lines
    visibleItems.forEach((v) => {
      const { item, el, isActive, screenX, screenY, side, targetX, targetY, halfW } = v;

      el.style.opacity = '1';
      el.style.pointerEvents = 'auto';
      el.style.left = `${targetX}px`;
      el.style.top = `${targetY}px`;

      const organelleData = CELL_ANATOMY_DATA[item.key];
      const targetColor = organelleData?.color || item.color || '#40916C';
      const dotColor = targetColor;
      const strokeColor = targetColor;
      const anchorDotRadius = isActive ? 5.0 : 3.0;
      const strokeWidth = isActive ? 2.2 : 1.35;
      const strokeOpacity = isActive ? 1.0 : (this.currentActiveTarget ? 0.35 : 0.85);

      let lineEndX, elbowX;
      if (side === 'right') {
        lineEndX = targetX - halfW - 2;
        elbowX = screenX + Math.min(60, Math.max(25, (lineEndX - screenX) * 0.4));
      } else {
        lineEndX = targetX + halfW + 2;
        elbowX = screenX - Math.min(60, Math.max(25, (screenX - lineEndX) * 0.4));
      }

      svgLines += `
        <g class="leader-group ${isActive ? 'active-leader' : ''}">
          ${isActive ? `<circle cx="${screenX}" cy="${screenY}" r="9" fill="none" stroke="${dotColor}" stroke-width="1.8" opacity="0.75"><animate attributeName="r" values="4;11;4" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite"/></circle>` : ''}
          <circle cx="${screenX}" cy="${screenY}" r="${anchorDotRadius}" fill="${dotColor}" stroke="#FFFFFF" stroke-width="${isActive ? 1.8 : 0.8}" />
          <polyline points="${screenX},${screenY} ${elbowX},${targetY} ${lineEndX},${targetY}" 
                    fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" opacity="${strokeOpacity}" />
        </g>
      `;
    });

    this.svgOverlay.innerHTML = svgLines;
  }

  drawMicrocompartment() {
    if (!this.microCanvas || !this.microCtx) {
      this.microCanvas = document.getElementById('micro-canvas');
      if (this.microCanvas) this.microCtx = this.microCanvas.getContext('2d');
    }
    if (!this.microCtx) return;

    const w = this.microCanvas.width;
    const h = this.microCanvas.height;
    this.microCtx.clearRect(0, 0, w, h);

    this.microCtx.fillStyle = '#EFE9DD';
    this.microCtx.fillRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const R = 38;

    this.microCtx.save();
    this.microCtx.translate(cx, cy);

    const sides = 8;
    this.microCtx.fillStyle = '#738C6D';
    this.microCtx.strokeStyle = '#53684E';
    this.microCtx.lineWidth = 1.5;

    this.microCtx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 + this.microAngle * 0.2;
      const x = Math.cos(a) * R;
      const y = Math.sin(a) * R;
      if (i === 0) this.microCtx.moveTo(x, y);
      else this.microCtx.lineTo(x, y);
    }
    this.microCtx.closePath();
    this.microCtx.fill();
    this.microCtx.stroke();

    this.microCtx.fillStyle = '#445440';
    this.microCtx.beginPath();
    this.microCtx.arc(0, 0, R * 0.72, 0, Math.PI * 2);
    this.microCtx.fill();

    const pearls = [
      { x: -9, y: -8, r: 7 },
      { x: 7, y: -7, r: 6.5 },
      { x: -5, y: 7, r: 7.5 },
      { x: 10, y: 6, r: 6 },
      { x: 0, y: -1, r: 8 }
    ];

    pearls.forEach((p) => {
      const grad = this.microCtx.createRadialGradient(p.x - 2, p.y - 2, 1, p.x, p.y, p.r);
      grad.addColorStop(0, '#9D7BB8');
      grad.addColorStop(0.7, '#644380');
      grad.addColorStop(1, '#3B2152');
      this.microCtx.fillStyle = grad;
      this.microCtx.beginPath();
      this.microCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.microCtx.fill();
    });

    this.microCtx.restore();
    this.microAngle += 0.02;
  }

  render() {
    // 1. Smooth Camera Transition
    if (this.camTransition.active) {
      const elapsed = performance.now() - this.camTransition.startTime;
      const t = Math.min(1.0, elapsed / this.camTransition.duration);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.camera.position.lerpVectors(this.camTransition.startPos, this.camTransition.endPos, ease);
      this.camTransition.currentTarget.lerpVectors(this.camTransition.startTarget, this.camTransition.endTarget, ease);
      this.camera.lookAt(this.camTransition.currentTarget);

      if (t >= 1.0) {
        this.camTransition.active = false;
        if (this.wasm && this.wasm.init_engine) {
          const relX = this.camera.position.x - this.camTransition.currentTarget.x;
          const relY = this.camera.position.y - this.camTransition.currentTarget.y;
          const relZ = this.camera.position.z - this.camTransition.currentTarget.z;
          const rad = Math.sqrt(relX * relX + relY * relY + relZ * relZ);
          const theta = Math.atan2(relX, relZ);
          const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
          this.wasm.init_engine(theta, phi, rad, this.camTransition.currentTarget.x, this.camTransition.currentTarget.y, this.camTransition.currentTarget.z);
        }
      }
    } else if (this.wasm && this.wasm.step_physics) {
      this.wasm.step_physics(0.88, this.isAutoRotating ? 1 : 0);
      this.camera.position.set(this.wasm.get_cam_x(), this.wasm.get_cam_y(), this.wasm.get_cam_z());
      this.camera.lookAt(this.wasm.get_target_x(), this.wasm.get_target_y(), this.wasm.get_target_z());
    }

    // 2. Guided Tour State Machine
    if (this.tourActive && this.tourPlaying && !this.camTransition.active) {
      const now = performance.now();
      if (!this.lastTourTick) this.lastTourTick = now;
      const delta = Math.min(now - this.lastTourTick, 100);

      const timerFill = document.getElementById('tour-timer-fill');

      if (this.tourPhase === 'narrating') {
        const pulse = 16 + Math.sin(now * 0.006) * 10;
        if (timerFill) {
          timerFill.style.width = `${pulse}%`;
          timerFill.style.background = '#64D2B4';
        }
      } else if (this.tourPhase === 'cooldown') {
        this.tourCooldownTimer += delta;
        const progress = Math.min(100, (this.tourCooldownTimer / this.TOUR_COOLDOWN_DURATION) * 100);
        if (timerFill) {
          timerFill.style.width = `${progress}%`;
          timerFill.style.background = '#D96B43';
        }
        this.notifyTourStep();

        if (this.tourCooldownTimer >= this.TOUR_COOLDOWN_DURATION) {
          this.tourPhase = 'idle';
          this.nextTourStep();
        }
      } else if (this.tourPhase === 'reading') {
        this.tourReadingTimer += delta;
        const progress = Math.min(100, (this.tourReadingTimer / this.TOUR_READING_DURATION) * 100);
        if (timerFill) {
          timerFill.style.width = `${progress}%`;
          timerFill.style.background = '#D96B43';
        }

        if (this.tourReadingTimer >= this.TOUR_READING_DURATION) {
          this.tourPhase = 'idle';
          this.nextTourStep();
        }
      }
    }
    this.lastTourTick = performance.now();

    // 3. Brownian Motion of Cytoplasmic Soup Solutes
    if (this.soupPoints) {
      this.soupPoints.rotation.y = Math.sin(Date.now() * 0.0004) * 0.015;
    }

    this.renderer.render(this.scene, this.camera);
    this.updateLandmarksAndLeaders();
    this.drawMicrocompartment();
  }

  dispose() {
    this.disposed = true;
    this.stop();
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('resize', this._onResize);
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
