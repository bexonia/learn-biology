// @ts-nocheck
import * as THREE from 'three';
import { PDB_SPECIALIZED } from '../molecules/pdb_specialized.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  sweepGeo,
  atS,
  instanced,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  col,
} from '../index.js';

runBiologyApp(20261128, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, fbm } = random;
  const { UP } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Spatial Choreography — Multinucleated Skeletal Myofiber & 2.20 <-> 1.60 um Sarcomere
  // Framed cleanly between #legend (left), #flows (right), #hud (top) & #hint/#tools (bottom):
  //   Fiber Cylinder:  X in [-6.85, +6.85], center Y = +1.05, Z = 0.0, R = 2.86
  //   Peripheral Nuclei (3 cutaway): (-3.85, 3.24, -0.32), (+3.65, 3.24, -0.30), (-4.10, -1.16, -0.24)
  //   Triads (A-I junctions): x = -2.22 (Hero Left Triad) & x = +2.22 (Right Triad)
  //   Hero Sarcomere:  centered at (0.0, +0.74, +0.92), A-band = [-2.74, +2.74] (1.60 um const),
  //                    Z-discs slide smoothly from +-3.77 (2.20 um Relaxed) to +-2.84 (1.60 um Contracted)
  //   Atomic Lens:     ATOM_C = (0.0, -3.72, +2.05), R_RING = 1.66 (Ca2+ EF-hand & Mg2+-ATP cleavage)
  // -------------------------------------------------------------------------
  const NM = 0.08; // 10 nm (100 A) = 0.80 scene units at scale 1.0

  const FIBER_Y = 1.05;
  const FIBER_R = 2.86;
  const FIBER_HALF_L = 6.85;
  const CUT_Z = 0.36;

  const SARCO_Y = 0.74;
  const SARCO_Z = 0.92;
  const HALF_A = 2.74; // Constant A-band half-width (5.48 units = 1.60 um constant)
  const HALF_SARCO_RELAX = 3.77; // 2.20 um relaxed half-width (Z-discs at +-3.77)
  const HALF_SARCO_CONTR = 2.84; // 1.60 um contracted half-width (Z-discs at +-2.84)
  const ACTIN_LEN = 2.66; // Thin filament length from Z-disc toward M-line
  const TITIN_INNER_X = 2.48; // Anchor on thick filament where elastic PEVK Titin spring emerges

  const TRIAD_L = V(-2.22, 2.52, 0.56);
  const TRIAD_R = V(2.22, 2.52, 0.56);
  const ATOM_C = V(0.0, -4.12, 2.05);

  // Exact 5 required VIEWS ([name, camPos, target])
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.0, 1.04, 34.4), V(0.0, -0.58, 0.0)],
    ['triad_sr', V(-2.22, 2.86, 6.75), V(-2.14, 2.48, 0.56)],
    ['sarcomere', V(0.0, 1.24, 15.6), V(0.0, 1.06, 0.92)],
    ['crossbridge', V(-0.92, 0.96, 4.62), V(-1.26, 0.84, 1.12)],
    ['atoms', V(0.0, -4.22, 9.85), V(0.0, -4.12, 2.05)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'ca_trigger' | 'contracted_16um' | 'relaxed_22um';
  const MODE_ORDER: readonly ModeKey[] = ['ca_trigger', 'contracted_16um', 'relaxed_22um'];
  const MODE_LABEL: Record<ModeKey, string> = {
    ca_trigger: 'State: Live Ca²⁺ Cycle',
    contracted_16um: 'State: Contracted (1.60 µm)',
    relaxed_22um: 'State: Relaxed (2.20 µm)',
  };
  let mode: ModeKey = 'ca_trigger';
  let contractionFactor = 0.35; // 0 = 2.20 um Relaxed, 1 = 1.60 um Contracted
  let sarcomereLengthUm = 2.20 - 0.60 * contractionFactor;

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 29,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#241528',
    bgMid: '#0d0c1b',
    bgOuter: '#020308',
    keyColor: '#fff2e4',
    keyIntensity: 3.15,
    rimColor: '#76ceff',
    rimIntensity: 1.85,
    lampColor: '#ff9e82',
    lampIntensity: 15.5,
    lampPos: [0.0, 2.8, 6.6],
    bloomStrength: 0.28,
    bloomRadius: 0.50,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 220,
    bokehColor: '#ff9ec2',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key } = studio;

  // Dedicated cinema accents for Hero Sarcomere, Triad SR, Peripheral Nuclei & Atomic Lens
  const sarcoLamp = new THREE.PointLight('#ff9480', 11.5, 22, 2);
  sarcoLamp.position.set(0.0, SARCO_Y + 1.4, 5.2);
  const triadLamp = new THREE.PointLight('#44f0ff', 9.2, 16, 2);
  triadLamp.position.set(TRIAD_L.x, TRIAD_L.y + 1.6, 3.8);
  const nucLamp = new THREE.PointLight('#c69eff', 6.8, 16, 2);
  nucLamp.position.set(-3.6, 4.4, 2.8);
  const insetLamp = new THREE.PointLight('#b4f0ff', 9.2, 16, 2);
  insetLamp.position.set(ATOM_C.x + 1.6, ATOM_C.y + 1.6, ATOM_C.z + 4.6);
  scene.add(sarcoLamp, triadLamp, nucLamp, insetLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  const cutRimGroup = new THREE.Group();
  const leftSlideGroup = new THREE.Group();
  const rightSlideGroup = new THREE.Group();
  const apPulseGroup = new THREE.Group();
  cell.add(cutRimGroup, leftSlideGroup, rightSlideGroup, apPulseGroup);

  // Front cutaway plane slicing ONLY the outer sarcolemma hull cleanly at z = +0.36
  const FIBER_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), CUT_Z)];
  const FIBER_CUT = FIBER_CUT_LOCAL.map(p => p.clone());
  const FIBER_CLIP = { clippingPlanes: FIBER_CUT, clipIntersection: false, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    FIBER_CUT.forEach((p, i) => {
      p.copy(FIBER_CUT_LOCAL[i]);
      if (!cutOn) p.constant = 1e4;
      p.applyMatrix4(cell.matrixWorld);
    });
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.8);
  const bump = (rx = 12, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // -------------------------------------------------------------------------
  // Exact 18 Required REG Part Keys & Pedagogical Tooltips
  // -------------------------------------------------------------------------
  const PARTS: Array<[string, string, string]> = [
    ['sarcolemma', 'Sarcolemma (myofiber membrane)', '#ff5e78'],
    ['peripheral_nuclei', 'Peripheral nuclei & 1AOI chromatin', '#c88aff'],
    ['t_tubule', 'Transverse T-tubules & DHPRs', '#7e8eff'],
    ['sr_network', 'Sarcoplasmic reticulum (SR) sleeves', '#2cd6ee'],
    ['ryr1_channel', 'RyR1 Ca²⁺ release foot channels', '#44ff8c'],
    ['serca1a_pump', 'SERCA1a Ca²⁺-ATPase (PDB 1SU4)', '#38e8d8'],
    ['myofibril', 'Striated myofibril columns', '#e8687c'],
    ['z_disc', 'Z-discs (α-actinin zig-zag anchors)', '#60b4ff'],
    ['i_band', 'I-band (thin-only light zone)', '#8ee2ff'],
    ['a_band', 'A-band (constant 1.60 µm dark zone)', '#ff4c6a'],
    ['h_zone', 'H-zone (shrinking bare myosin core)', '#ffd254'],
    ['m_line', 'M-line (myomesin central scaffold)', '#ff9e52'],
    ['titin_spring', 'Titin PEVK elastic coil springs', '#ffbe42'],
    ['myosin_thick', 'Myosin-II bipolar thick filaments', '#ff3e64'],
    ['myosin_head', 'Myosin-II S1 motor heads (PDB 2MYS)', '#ff7894'],
    ['actin_thin', 'F-actin helical thin filaments (6KN8)', '#4cc8ff'],
    ['troponin_tropo', 'Troponin–Tropomyosin Ca²⁺ switch', '#ffe458'],
    ['muscle_atoms', 'Atomic Ca²⁺ EF-hand & Mg²⁺·ATP lens', '#68ffb8'],
  ];

  const INFO: Record<string, [string, string]> = {
    sarcolemma: [
      'Excitable lipid-bilayer plasma membrane and basal lamina wrapping a multinucleated skeletal muscle fiber (10–100 µm wide)',
      'Propagates motor-neuron action potentials rapidly across the entire fiber surface and dives inward via T-tubules',
    ],
    peripheral_nuclei: [
      'Flattened syncytial nuclei pressed against the sarcolemma housing Nucleosome (PDB 1AOI) chromatin territories',
      'Keeps MYH1, ACTA1, and TNNT3 genes open (H3K27ac euchromatin) while silencing neural SYT1 and erythroid HBB heterochromatin',
    ],
    t_tubule: [
      'Transverse tubular membrane invaginations descending from the sarcolemma straight to the sarcomere A–I junctions',
      'Carries action potentials deep into the myofiber interior so DHPR (CaV1.1) voltage sensors mechanically unlock RyR1 channels',
    ],
    sr_network: [
      'Fenestrated turquoise Sarcoplasmic Reticulum (SR) sleeves and bulbous terminal cisternae cradling every myofibril',
      'Stores millimolar Ca²⁺ bound to calsequestrin and forms the two-cisternae Triad sandwich around each T-tubule',
    ],
    ryr1_channel: [
      'Massive homotetrameric Ryanodine Receptor 1 (RyR1) quatrefoil foot channels spanning the 12 nm Triad junctional cleft',
      'Opens mechanically on T-tubule depolarization to flood emerald Ca²⁺ (~10 µM) onto surrounding sarcomeres within milliseconds',
    ],
    serca1a_pump: [
      'Dense sarcoplasmic reticulum Ca²⁺-ATPase pumps (RCSB PDB 1SU4) coating the longitudinal SR tubular membrane',
      'Hydrolyzes 1 ATP per 2 Ca²⁺ pumped back into the SR lumen, clearing sarcoplasmic Ca²⁺ so the fiber relaxes back to 2.20 µm',
    ],
    myofibril: [
      'Tightly packed cylindrical contractile bundles (~1 µm wide) exhibiting alternating light I-band and dark A-band striations',
      'Aligns thousands of sarcomeres in series so microscopic 0.60 µm unit shortenings sum into macroscopic limb force',
    ],
    z_disc: [
      'Electron-dense α-actinin zig-zag anchor lattices marking both boundaries of every repeating sarcomere unit',
      'Tethers the barbed (+) ends of thin F-actin filaments and elastic Titin coils, sliding inward from 2.20 µm to 1.60 µm',
    ],
    i_band: [
      'Isotropic light-band zone flanking each Z-disc that contains only thin actin filaments and elastic Titin springs',
      'Visibly narrows as actin thin filaments slide deeper between myosin thick filaments during sarcomere contraction',
    ],
    a_band: [
      'Anisotropic dark-band region spanning the exact 1.60 µm length of the bipolar Myosin-II thick filament array',
      'Remains strictly constant in width (1.60 µm) across relaxation and peak contraction because myofilaments slide without shrinking',
    ],
    h_zone: [
      'Central lighter band inside the A-band containing bare thick-filament shafts with zero thin-filament overlap at rest',
      'Progressively narrows and nearly disappears at 1.60 µm as opposing left and right actin filaments converge toward the M-line',
    ],
    m_line: [
      'Central structural scaffold of myomesin, obscurin, and creatine kinase bisecting the exact midpoint of the A-band',
      'Cross-links bipolar myosin thick-filament tails and Titin C-termini in hexagonal register while buffering local ATP supply',
    ],
    titin_spring: [
      'Colossal ~3.8 MDa elastic molecular springs (Ig & PEVK domains) tethering thick-filament tips directly to both Z-discs',
      'Centers myosin thick filaments inside the sarcomere, compresses during contraction, and generates passive elastic recoil',
    ],
    myosin_thick: [
      'Bipolar bundles of ~300 Myosin-II coiled-coil tails arranged symmetrically around a central bare zone across the A-band',
      'Projects opposing helical crowns of motor heads on both halves to pull left and right actin filaments inward together',
    ],
    myosin_head: [
      'ATPase motor domain and light-chain lever arm of Myosin-II S1 (RCSB PDB 2MYS) radiating from thick filaments',
      'Binds exposed actin sites and pivots its lever arm upon Pᵢ and ADP release to execute a ~10 nm mechanical power stroke',
    ],
    actin_thin: [
      'Double-stranded helical F-actin filaments (RCSB PDB 6KN8) anchored at Z-discs and pointing minus (-) ends toward the M-line',
      'Provides stereo-specific binding tracks pulled synchronously toward the M-line by cycling Myosin-II cross-bridges',
    ],
    troponin_tropo: [
      'Coiled-coil golden Tropomyosin cables wrapped along F-actin grooves and regulated every 38.5 nm by Troponin (TnC/TnI/TnT)',
      'Sterically blocks myosin binding at rest (2.20 µm); Ca²⁺ binding to TnC twists Troponin and rolls Tropomyosin aside by ~35°',
    ],
    muscle_atoms: [
      'CPK atomic lens comparing a Troponin C EF-hand Ca²⁺ oxygen coordination cage beside Myosin Mg²⁺·ATP → ADP + Pᵢ cleavage',
      'Reveals how 6 carboxylate/carbonyl oxygens sense Ca²⁺ while phosphoanhydride cleavage fuels every Myosin-II power stroke',
    ],
  };

  // -------------------------------------------------------------------------
  // Material & Registry Helpers (Cinema PBR + Backlit SSS)
  // -------------------------------------------------------------------------
  const REG: Record<string, { mats: THREE.Material[]; imp: THREE.ShaderMaterial[] }> = {};
  const reg = <T extends THREE.Material>(k: string, m: T): T => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    if ((m as THREE.ShaderMaterial).isShaderMaterial) r.imp.push(m as unknown as THREE.ShaderMaterial);
    else r.mats.push(m);
    return m;
  };
  const phys = (o: THREE.MeshPhysicalMaterialParameters, clipObj: Record<string, unknown> = {}) =>
    new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.84, ...clipObj, ...o });

  function makeCinemaProteinMat(
    k: string,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sssHex = '#ffaac4',
    sssInt = 0.22
  ): THREE.MeshPhysicalMaterial {
    const m = phys({
      vertexColors: true,
      roughness: 0.32,
      metalness: 0.05,
      clearcoat: 0.42,
      clearcoatRoughness: 0.24,
      sheen: 0.42,
      sheenColor: '#fff2f8',
      normalMap: protBump,
      normalScale: new THREE.Vector2(0.34, 0.34),
      side: THREE.DoubleSide,
      ...extra,
    });
    applyBacklitSSS(m, sssHex, sssInt, 2.6);
    return reg(k, m);
  }

  const sculpt = (k: string, parent: THREE.Object3D = cell, extra: THREE.MeshPhysicalMaterialParameters = {}, sss = '#a8e8ff') =>
    makeSculptedMesh(makeCinemaProteinMat(k, extra, sss, 0.20), parent);

  const shells: THREE.MeshPhysicalMaterial[] = [];
  const LOOKS = ['gel', 'see-through', 'solid'] as const;
  let organelleLook: (typeof LOOKS)[number] = 'gel';
  let placed = 0;

  function cinemaShellMat(
    k: string,
    solidHex: string,
    gelHex: string,
    clipObj: Record<string, unknown>,
    opts: Record<string, unknown> = {}
  ): THREE.MeshPhysicalMaterial {
    const m = makeCinemaMembraneMat(clipObj, (opts.normalMap as THREE.Texture) ?? bump(14, 9), {
      color: gelHex,
      attenuationColor: (opts.attenCol as string) ?? solidHex,
      attenuationDistance: (opts.attenDist as number) ?? 4.8,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.30,
      iridescence: (opts.iridescence as number) ?? 0.50,
      thickness: (opts.thickness as number) ?? 0.48,
      roughness: (opts.roughness as number) ?? 0.13,
      sheenColor: (opts.sheenColor as string) ?? '#ffe6f0',
      normalScale: (opts.normalScale as number) ?? 0.24,
    });
    m.userData.cols = { solid: new THREE.Color(solidHex), gel: new THREE.Color(gelHex) };
    shells.push(m);
    return reg(k, m);
  }

  function applyLook() {
    const gel = organelleLook === 'gel';
    const see = organelleLook === 'see-through';
    shells.forEach(m => {
      m.transmission = gel ? 1 : 0;
      m.transparent = see;
      m.opacity = see ? 0.36 : 1;
      m.depthWrite = !see;
      m.side = gel ? THREE.FrontSide : THREE.DoubleSide;
      m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid);
      m.needsUpdate = true;
    });
  }

  const impMats: THREE.ShaderMaterial[] = [];
  const shade = <T extends THREE.Object3D>(mesh: T, cast = true, receive = true): T => {
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  };
  const qFromY = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };

  const SITES: Record<string, THREE.Vector3[]> = Object.fromEntries(PARTS.map(p => [p[0], []]));

  // Live animated object handles
  interface ArticulatedMyosin {
    pivot: THREE.Group;
    side: -1 | 1; // -1 = left half (pulls toward +X), +1 = right half (pulls toward -X)
    dirY: -1 | 1; // +1 reaches upward, -1 reaches downward
    phase: number;
    baseTiltZ: number;
    baseTwistX: number;
    atpSpark?: THREE.Mesh;
  }
  const articulatedMyosins: ArticulatedMyosin[] = [];
  const tropoRollGroups: Array<{ grp: THREE.Group; dir: number; phase: number }> = [];
  const troponinCaBeads: THREE.Mesh[] = [];
  const titinSpringsLeft: THREE.Group[] = [];
  const titinSpringsRight: THREE.Group[] = [];
  const bgMyofibrilZLines: Array<{ mesh: THREE.Object3D; sign: number; baseOffset: number }> = [];
  const apSparks: Array<{ mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; phase: number }> = [];
  let iBandLeftBar: THREE.Group | null = null;
  let iBandRightBar: THREE.Group | null = null;
  let hZoneBar: THREE.Group | null = null;
  let iBandLeftCurtain: THREE.Mesh | null = null;
  let iBandRightCurtain: THREE.Mesh | null = null;
  let hZoneCurtain: THREE.Mesh | null = null;
  let zLeftPlaque: THREE.Mesh | null = null;
  let zRightPlaque: THREE.Mesh | null = null;
  let caEfHaloMesh: THREE.Mesh | null = null;
  let atpCleavageGlow: THREE.Mesh | null = null;

  const modeRefs: {
    ryrMat?: THREE.MeshPhysicalMaterial;
    ryrPoreMat?: THREE.MeshPhysicalMaterial;
    sercaMat?: THREE.MeshPhysicalMaterial;
    tTubulePulseMat?: THREE.MeshPhysicalMaterial;
    dhprMat?: THREE.MeshPhysicalMaterial;
    caBeadMat?: THREE.MeshPhysicalMaterial;
    actinBindMat?: THREE.MeshPhysicalMaterial;
    srStoreMat?: THREE.MeshPhysicalMaterial;
    myosinHeroMat?: THREE.MeshPhysicalMaterial;
  } = {};

  // -------------------------------------------------------------------------
  // Decode ALL 4 Real RCSB PDB Assets from PDB_SPECIALIZED via buildPdbSurfaceGeo
  //   1. myosin_s1 (2MYS)   — Bipolar Myosin-II S1 motor heads & ELC/RLC lever arms
  //   2. actin_tropo (6KN8) — Helical F-actin thin filament protofilaments
  //   3. serca (1SU4)       — Sarcoplasmic reticulum SERCA1a Ca2+-ATPase pumps
  //   4. nucleosome (1AOI)  — Active H3K27ac euchromatin & silenced heterochromatin
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // 1. Myosin-II S1 (2MYS, 3 chains: 0 heavy chain motor + lever arm, 1 ELC, 2 RLC)
    // In 2MYS coords, Z in [-94.8, +64.1]: -Z is neck/light-chains, +Z is globular actin-binding head!
    // Shift Z by +78 A so neck pivot sits at origin, then rotateX(-PI/2) so motor head projects along +Y!
    const geoMyosinS1 = buildPdbSurfaceGeo(pdb.getModel(PDB_SPECIALIZED, 'myosin_s1'), {
      nm: NM,
      scale: 0.44,
      maxDim: 28,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.56,
      offsetAng: [0, 0, 78],
      colorFn: (grp, part) => {
        if (grp === 1) return col(part === 1 ? '#ffe066' : '#ffb83c'); // Essential Light Chain (gold)
        if (grp === 2) return col(part === 1 ? '#72f0ff' : '#3ec8e8'); // Regulatory Light Chain (aqua)
        return col(part === 1 ? '#ff8aa6' : '#f24a72'); // Heavy chain ATPase motor head (crimson-rose)
      },
    });
    geoMyosinS1.rotateX(-Math.PI / 2);

    // 2. F-Actin + Tropomyosin thin filament segment (6KN8, 6 chains staggered along Z in [-101.4, +97.8])
    // RotateY(PI/2) aligns filament axis cleanly along X (sarcomere sliding axis)!
    const actinCols = [
      col('#3ec6ff'),
      col('#6ee2ff'),
      col('#2ea8f0'),
      col('#8aeaff'),
      col('#38b8f8'),
      col('#5cd4ff'),
    ];
    const geoActinTropo = buildPdbSurfaceGeo(pdb.getModel(PDB_SPECIALIZED, 'actin_tropo'), {
      nm: NM,
      scale: 0.52,
      maxDim: 30,
      sigmaAng: 4.0,
      iso: 0.37,
      aoStrength: 0.54,
      colorFn: (grp, part) => {
        if (part === 3) return col('#ffe664'); // Tropomyosin / bound nucleotide accent
        const base = actinCols[grp % 6];
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });
    geoActinTropo.rotateY(Math.PI / 2);

    // 3. SERCA1a Ca2+-ATPase pump (1SU4, 1 chain, Z in [-65.7, +50.1] transmembrane -> cytosolic headpiece)
    const geoSerca = buildPdbSurfaceGeo(pdb.getModel(PDB_SPECIALIZED, 'serca'), {
      nm: NM,
      scale: 0.48,
      maxDim: 26,
      sigmaAng: 4.1,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: (_grp, part, idx) => {
        // Distinct cryo-EM domain coloring: Transmembrane M1-M10 (teal), A/P domains (aqua), N-ATP crown (gold-cyan)
        const f = idx / 950;
        const base = f < 0.32 ? col('#1ab8c8') : f < 0.68 ? col('#46f0e4') : col('#ffe066');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.07) : base;
      },
    });
    geoSerca.rotateX(-Math.PI / 2);

    // 4a. Nucleosome (1AOI) — Active H3K27ac Euchromatin (MYH1 / ACTA1 / TNNT3 muscle genes)
    const geoNucActive = buildPdbSurfaceGeo(pdb.getModel(PDB_SPECIALIZED, 'nucleosome'), {
      nm: NM,
      scale: 0.36,
      maxDim: 24,
      sigmaAng: 4.1,
      iso: 0.38,
      aoStrength: 0.52,
      colorFn: (grp, part) => {
        if (part >= 2) return col('#58f2ff'); // Open active dsDNA wraps
        return grp % 2 === 0 ? col('#ffe05c') : col('#4cff98'); // H3K27ac acetylated emerald-gold histones
      },
    });

    // 4b. Nucleosome (1AOI) — Silenced H3K27me3 Heterochromatin (SYT1 / HBB silenced genes)
    const geoNucSilent = buildPdbSurfaceGeo(pdb.getModel(PDB_SPECIALIZED, 'nucleosome'), {
      nm: NM,
      scale: 0.34,
      maxDim: 22,
      sigmaAng: 4.2,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => {
        if (part >= 2) return col('#6c78a8'); // Condensed silent DNA
        return grp % 2 === 0 ? col('#7a4cb8') : col('#5c3c94'); // Compact violet-plum heterochromatin
      },
    });

    return { geoMyosinS1, geoActinTropo, geoSerca, geoNucActive, geoNucSilent };
  }

  // -------------------------------------------------------------------------
  // Helper: Organic Cylindrical Myofiber Hull & Exact Front Cutaway Rim Cap
  // -------------------------------------------------------------------------
  function fiberRadAt(x: number, ang: number, scale = 1.0): number {
    const endT = Math.max(0, (Math.abs(x) - (FIBER_HALF_L - 0.95)) / 0.95);
    const bevel = Math.sqrt(Math.max(0.18, 1 - endT * endT * 0.24));
    const n = fbm(x * 0.35 + 4.1, Math.cos(ang) * 1.4, Math.sin(ang) * 1.4, 3);
    return FIBER_R * scale * bevel * (1 + 0.032 * (n - 0.5) * 2);
  }

  function buildMyofiberCylinderGeo(scale = 1.0, segX = 76, segR = 64): THREE.BufferGeometry {
    const pos: number[] = [];
    const uv: number[] = [];
    const idx: number[] = [];
    for (let i = 0; i <= segX; i++) {
      const u = i / segX;
      const x = -FIBER_HALF_L + u * FIBER_HALF_L * 2;
      for (let j = 0; j <= segR; j++) {
        const v = j / segR;
        const a = v * Math.PI * 2;
        const r = fiberRadAt(x, a, scale);
        pos.push(x, FIBER_Y + Math.sin(a) * r, Math.cos(a) * r);
        uv.push(u * 4, v * 2);
      }
    }
    for (let i = 0; i < segX; i++) {
      for (let j = 0; j < segR; j++) {
        const a = i * (segR + 1) + j;
        const b = a + 1;
        const c = a + segR + 1;
        const d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  function buildCylinderCutRimGeo(
    cutZ: number,
    layers: ReadonlyArray<readonly [number, number, string]>,
    segX = 72
  ): THREE.BufferGeometry {
    const pos: number[] = [];
    const cols: number[] = [];
    const nor: number[] = [];
    const idx: number[] = [];
    const c = new THREE.Color();
    let base = 0;
    for (const signY of [1, -1]) {
      layers.forEach(([s0, s1, hex]) => {
        c.set(hex);
        for (let i = 0; i <= segX; i++) {
          const x = -FIBER_HALF_L + (i / segX) * FIBER_HALF_L * 2;
          for (const s of [s0, s1]) {
            const angGuess = signY > 0 ? Math.PI * 0.46 : -Math.PI * 0.46;
            const r = fiberRadAt(x, angGuess, s);
            const yOff = Math.sqrt(Math.max(0.05, r * r - cutZ * cutZ));
            pos.push(x, FIBER_Y + signY * yOff, cutZ - 0.008);
            cols.push(c.r, c.g, c.b);
            nor.push(0, 0, 1);
          }
        }
        for (let i = 0; i < segX; i++) {
          const a = base + i * 2;
          idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
        base += (segX + 1) * 2;
      });
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setIndex(idx);
    return g;
  }

  function makeLabelPlaque(
    partKey: string,
    lines: Array<{ text: string; color: string; font: string; y: number }>,
    w: number,
    h: number,
    cw = 384,
    ch = 96,
    bgHex?: string,
    borderHex?: string
  ): THREE.Mesh {
    const cv = document.createElement('canvas');
    cv.width = cw;
    cv.height = ch;
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cw, ch);
    if (bgHex) {
      g.fillStyle = bgHex;
      g.beginPath();
      g.roundRect(4, 4, cw - 8, ch - 8, 16);
      g.fill();
      if (borderHex) {
        g.strokeStyle = borderHex;
        g.lineWidth = 3;
        g.stroke();
      }
    }
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    lines.forEach(l => {
      g.font = l.font;
      g.fillStyle = l.color;
      g.fillText(l.text, cw / 2, l.y);
    });
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      reg(
        partKey,
        new THREE.MeshStandardMaterial({
          map: tex,
          emissive: '#ffffff',
          emissiveMap: tex,
          emissiveIntensity: 0.78,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
  }

  // -------------------------------------------------------------------------
  // 1. Cutaway Multinucleated Skeletal Myofiber, Peripheral Nuclei (1AOI) & Myofibrils
  // -------------------------------------------------------------------------
  function buildMyofiberAndNuclei(T) {
    // 1A. Crimson-Rose Wet-Gel Sarcolemma Outer & Inner Envelopes (Shells #1 and #2!)
    const sarcoOuterMat = cinemaShellMat('sarcolemma', '#a82246', '#ff98b4', FIBER_CLIP, {
      attenCol: '#7e1634',
      attenDist: 5.2,
      sssColor: '#ff6488',
      sssIntensity: 0.34,
      iridescence: 0.54,
      thickness: 0.56,
      roughness: 0.12,
      sheenColor: '#ffdce8',
      normalMap: bump(16, 10),
      normalScale: 0.25,
    });
    cell.add(shade(new THREE.Mesh(buildMyofiberCylinderGeo(1.0, 76, 64), sarcoOuterMat), true, true));

    const sarcoInnerMat = cinemaShellMat('sarcolemma', '#781632', '#e8688c', FIBER_CLIP, {
      attenCol: '#5a1026',
      attenDist: 4.4,
      sssColor: '#ff5278',
      sssIntensity: 0.24,
      iridescence: 0.38,
      thickness: 0.42,
      roughness: 0.15,
      sheenColor: '#ffc8da',
      normalMap: bump(14, 9),
      normalScale: 0.20,
    });
    cell.add(new THREE.Mesh(buildMyofiberCylinderGeo(0.955, 68, 56), sarcoInnerMat));

    // Deep burgundy-obsidian inner cavity wall so bright sarcomere & turquoise SR pop crisply
    const fiberBackMat = reg(
      'sarcolemma',
      applyBacklitSSS(
        phys(
          {
            color: '#220b18',
            roughness: 0.64,
            metalness: 0.05,
            side: THREE.BackSide,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          FIBER_CLIP
        ),
        '#ff5278',
        0.18,
        2.6
      )
    );
    cell.add(new THREE.Mesh(buildMyofiberCylinderGeo(0.935, 60, 48), fiberBackMat));

    // Crisp multi-band Sarcolemma + Basal Lamina cutaway rim strips along top & bottom edges
    const SARCO_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [1.00, 0.980, '#ffadc4'], // Endomysium / basal lamina
      [0.980, 0.958, '#8a1e3c'], // Phospholipid hydrophobic core
      [0.958, 0.935, '#ff6888'], // Inner sarcolemma leaflet
    ];
    const rimMat = reg(
      'sarcolemma',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        metalness: 0.08,
        emissive: '#581026',
        emissiveIntensity: 0.44,
        side: THREE.DoubleSide,
      })
    );
    cutRimGroup.add(new THREE.Mesh(buildCylinderCutRimGeo(CUT_Z, SARCO_LAYERS, 72), rimMat));

    // Beveled cross-section end-rings at X = +-FIBER_HALF_L showing sliced myofiber ends
    for (const sx of [-1, 1]) {
      const endRing = new THREE.Mesh(
        new THREE.RingGeometry(FIBER_R * 0.80, FIBER_R * 0.89, 56),
        reg(
          'sarcolemma',
          phys({
            color: '#d85072',
            emissive: '#621428',
            emissiveIntensity: 0.36,
            roughness: 0.32,
            side: THREE.DoubleSide,
          }, FIBER_CLIP)
        )
      );
      endRing.position.set(sx * (FIBER_HALF_L - 0.04), FIBER_Y, 0);
      endRing.rotation.y = sx > 0 ? Math.PI / 2 : -Math.PI / 2;
      cell.add(endRing);

      // Subtle dark-red sarcoplasm end cap behind myofibrils
      const endDisc = new THREE.Mesh(
        new THREE.CircleGeometry(FIBER_R * 0.80, 48),
        reg(
          'sarcolemma',
          phys({
            color: '#341022',
            roughness: 0.65,
            side: THREE.DoubleSide,
          }, FIBER_CLIP)
        )
      );
      endDisc.position.set(sx * (FIBER_HALF_L - 0.06), FIBER_Y, 0);
      endDisc.rotation.y = sx > 0 ? Math.PI / 2 : -Math.PI / 2;
      cell.add(endDisc);
    }

    SITES.sarcolemma.push(
      V(-5.4, FIBER_Y + 2.55, 0.36),
      V(5.4, FIBER_Y + 2.55, 0.36),
      V(0.0, FIBER_Y + 2.72, 0.36),
      V(-5.2, FIBER_Y - 2.48, 0.36)
    );

    // 1B. Flattened Peripheral Multinucleated Syncytium Nuclei + Real 1AOI Nucleosomes (Shell #3!)
    const nucShellMat = cinemaShellMat('peripheral_nuclei', '#6e3cc4', '#cca6ff', {}, {
      attenCol: '#4c2694',
      attenDist: 2.8,
      sssColor: '#b87eff',
      sssIntensity: 0.36,
      iridescence: 0.48,
      thickness: 0.38,
      roughness: 0.14,
      sheenColor: '#f0e2ff',
      normalMap: bump(8, 6),
      normalScale: 0.22,
    });
    const nucInnerMat = reg(
      'peripheral_nuclei',
      phys({
        color: '#1b1036',
        emissive: '#281450',
        emissiveIntensity: 0.28,
        roughness: 0.56,
        side: THREE.BackSide,
      })
    );
    const nucActiveMat = makeCinemaProteinMat('peripheral_nuclei', {
      emissive: '#38b878',
      emissiveIntensity: 0.32,
      roughness: 0.26,
      clearcoat: 0.54,
    }, '#8effc4', 0.30);
    const nucSilentMat = makeCinemaProteinMat('peripheral_nuclei', {
      emissive: '#382268',
      emissiveIntensity: 0.18,
      roughness: 0.42,
      clearcoat: 0.32,
    }, '#9872ff', 0.20);

    const I_NUC_ACTIVE = makeMolBatch(T.geoNucActive, nucActiveMat, cell);
    const I_NUC_SILENT = makeMolBatch(T.geoNucSilent, nucSilentMat, cell);
    const S_NUC = sculpt('peripheral_nuclei', cell, {
      emissive: '#422884',
      emissiveIntensity: 0.32,
      roughness: 0.30,
      clearcoat: 0.48,
    }, '#c29eff');

    const nucDefs = [
      { pos: V(-4.35, FIBER_Y + 2.18, -0.22), rx: 1.24, ry: 0.46, rz: 0.58, tiltZ: 0.08 },
      { pos: V(4.25, FIBER_Y + 2.18, -0.22), rx: 1.20, ry: 0.45, rz: 0.56, tiltZ: -0.08 },
      { pos: V(-4.45, FIBER_Y - 2.12, -0.18), rx: 1.16, ry: 0.44, rz: 0.54, tiltZ: -0.06 },
    ];

    nucDefs.forEach((nd, nIdx) => {
      // Half-cutaway flattened peripheral nuclear bowl opening toward +Z viewer!
      const envGeo = new THREE.SphereGeometry(1, 36, 22, Math.PI * 0.92, Math.PI * 1.16, 0, Math.PI);
      envGeo.scale(nd.rx, nd.ry, nd.rz);
      envGeo.computeVertexNormals();
      const envMesh = shade(new THREE.Mesh(envGeo, nucShellMat), true, true);
      envMesh.position.copy(nd.pos);
      envMesh.rotation.z = nd.tiltZ;
      cell.add(envMesh);

      const backGeo = new THREE.SphereGeometry(1, 28, 18, Math.PI * 0.94, Math.PI * 1.12, 0, Math.PI);
      backGeo.scale(nd.rx * 0.94, nd.ry * 0.90, nd.rz * 0.92);
      const backMesh = new THREE.Mesh(backGeo, nucInnerMat);
      backMesh.position.copy(nd.pos);
      backMesh.rotation.z = nd.tiltZ;
      cell.add(backMesh);

      // Luminous rim ring outlining the cutaway nuclear envelope
      const rimPts: THREE.Vector3[] = [];
      for (let k = 0; k <= 28; k++) {
        const a = (k / 28) * Math.PI * 2;
        rimPts.push(nd.pos.clone().add(V(Math.cos(a) * nd.rx * 0.96, Math.sin(a) * nd.ry * 0.94, 0.08)));
      }
      S_NUC.tube(rimPts, 0.032, 0.032, col('#c89aff'), col('#9c68f5'), 8, false);

      // Inside each peripheral nucleus:
      //  - Center-front: Open active H3K27ac euchromatin loops (MYH1 / ACTA1 / TNNT3) with 9 real 1AOI nucleosomes!
      const euPts: THREE.Vector3[] = [];
      for (let k = 0; k < 9; k++) {
        const u = (k / 8) * 2 - 1;
        const p = nd.pos.clone().add(
          V(u * nd.rx * 0.62, Math.sin(k * 1.35 + nIdx) * nd.ry * 0.36, 0.02 + Math.cos(k * 1.1) * 0.14)
        );
        euPts.push(p);
        I_NUC_ACTIVE.add(p, qFromY(V(rr(-0.5, 0.5), 1, rr(-0.5, 0.5)), k * 0.8), rr(0.86, 1.04));
        placed++;
      }
      S_NUC.tube(euPts, 0.022, 0.022, col('#48ffb4'), col('#60e8ff'), 8, false);

      //  - Outer periphery pressed against lamina: Silenced H3K27me3 heterochromatin (SYT1 / HBB) with 7 real 1AOI nucleosomes!
      for (let k = 0; k < 7; k++) {
        const a = -0.35 + (k / 6) * (Math.PI + 0.7);
        const p = nd.pos.clone().add(
          V(Math.cos(a) * nd.rx * 0.78, Math.sin(a) * nd.ry * 0.68, -0.18 + rr(-0.08, 0.06))
        );
        I_NUC_SILENT.add(p, qFromY(V(rr(-0.6, 0.6), rr(-0.6, 0.6), 1), k * 0.9), rr(0.84, 0.98));
        placed++;
      }

      SITES.peripheral_nuclei.push(nd.pos.clone().add(V(0, 0, 0.25)));
    });

    I_NUC_ACTIVE.done();
    I_NUC_SILENT.done();
    S_NUC.done();

    // 1C. Parallel Cylindrical Myofibril Columns behind/flanking the Hero Sarcomere (Shell #6!)
    const myofibShellMat = cinemaShellMat('myofibril', '#9e304a', '#e88ca4', {}, {
      attenCol: '#701e34',
      attenDist: 3.4,
      sssColor: '#ff7092',
      sssIntensity: 0.24,
      iridescence: 0.30,
      thickness: 0.34,
      roughness: 0.22,
      sheenColor: '#ffd4e0',
      normalMap: bump(10, 6),
      normalScale: 0.20,
    });
    const myofibDarkBandMat = reg(
      'myofibril',
      applyBacklitSSS(
        phys({ color: '#9c2440', emissive: '#340814', emissiveIntensity: 0.26, roughness: 0.38, clearcoat: 0.28 }),
        '#ff6482',
        0.18,
        2.4
      )
    );
    const myofibLightBandMat = reg(
      'myofibril',
      applyBacklitSSS(
        phys({ color: '#c8b2d0', emissive: '#222844', emissiveIntensity: 0.16, roughness: 0.34, clearcoat: 0.32 }),
        '#8cd8ff',
        0.16,
        2.4
      )
    );
    const myofibZRingMat = reg(
      'myofibril',
      phys({ color: '#58b4ff', emissive: '#1e64a8', emissiveIntensity: 0.45, roughness: 0.28 })
    );

    // 4 deep parallel myofibril columns giving unmistakable skeletal cross-striations throughout the fiber!
    const bgFibs = [
      { y: FIBER_Y + 1.05, z: -1.18, r: 0.66 },
      { y: FIBER_Y - 0.15, z: -1.42, r: 0.70 },
      { y: FIBER_Y - 1.32, z: -0.96, r: 0.64 },
      { y: FIBER_Y + 0.55, z: -0.48, r: 0.54 },
    ];
    bgFibs.forEach((bf, bIdx) => {
      // Translucent cylindrical myofibril sheath
      const cylGeo = new THREE.CylinderGeometry(bf.r, bf.r, FIBER_HALF_L * 1.92, 24, 1, true);
      cylGeo.rotateZ(Math.PI / 2);
      const cyl = new THREE.Mesh(cylGeo, myofibShellMat);
      cyl.position.set(0, bf.y, bf.z);
      cell.add(cyl);

      // Alternating A-band (dark crimson) and I-band (pale silver-blue) segments along the myofibril
      const centers = [-5.3, 0.0, 5.3];
      centers.forEach(cx => {
        const aSeg = new THREE.CylinderGeometry(bf.r * 0.94, bf.r * 0.94, 3.2, 22);
        aSeg.rotateZ(Math.PI / 2);
        const aMesh = shade(new THREE.Mesh(aSeg, myofibDarkBandMat), false, true);
        aMesh.position.set(cx, bf.y, bf.z);
        cell.add(aMesh);
      });
      for (const ix of [-2.65, 2.65]) {
        const iSeg = new THREE.CylinderGeometry(bf.r * 0.91, bf.r * 0.91, 2.1, 20);
        iSeg.rotateZ(Math.PI / 2);
        const iMesh = new THREE.Mesh(iSeg, myofibLightBandMat);
        iMesh.position.set(ix, bf.y, bf.z);
        cell.add(iMesh);

        // Moving Z-line rings that contract gently in sync with the hero sarcomere!
        const zRing = new THREE.Mesh(new THREE.TorusGeometry(bf.r * 0.95, 0.048, 10, 28), myofibZRingMat);
        zRing.position.set(ix, bf.y, bf.z);
        zRing.rotation.y = Math.PI / 2;
        cell.add(zRing);
        bgMyofibrilZLines.push({ mesh: zRing, sign: Math.sign(ix), baseOffset: Math.abs(ix) });
      }
      if (bIdx < 3) SITES.myofibril.push(V(bIdx === 0 ? -4.8 : 4.8, bf.y, bf.z + bf.r * 0.6));
    });

    // Intermyofibrillar mitochondria nestled alongside myofibrils (supplying aerobic ATP!)
    const S_MITO = sculpt('myofibril', cell, {
      emissive: '#803418',
      emissiveIntensity: 0.30,
      roughness: 0.28,
      clearcoat: 0.44,
    }, '#ff9c64');
    const mitoSpots = [
      V(-5.15, FIBER_Y + 0.52, 0.32),
      V(5.15, FIBER_Y + 0.58, 0.30),
      V(-5.05, FIBER_Y - 1.15, 0.26),
      V(5.05, FIBER_Y - 1.05, 0.28),
      V(0.0, FIBER_Y - 1.55, -0.15),
    ];
    mitoSpots.forEach(mp => {
      S_MITO.tube(
        [mp.clone().add(V(-0.36, 0.04, 0)), mp.clone(), mp.clone().add(V(0.36, -0.04, 0))],
        0.16,
        0.16,
        col('#ff8450'),
        col('#ff5c5c'),
        10,
        true
      );
    });
    S_MITO.done();
    SITES.myofibril.push(V(5.2, FIBER_Y - 0.1, 0.2));
  }

  // -------------------------------------------------------------------------
  // 2. T-Tubules, Fenestrated Sarcoplasmic Reticulum (SR), RyR1 Feet & Real 1SU4 SERCA1a
  // -------------------------------------------------------------------------
  function buildTriadAndSR(T) {
    // 2A. Transverse T-Tubule Membrane Invaginations (Shell #4!) + DHPR Voltage Sensors
    const tTubShellMat = cinemaShellMat('t_tubule', '#4c5eff', '#a4b4ff', {}, {
      attenCol: '#3846cc',
      attenDist: 2.8,
      sssColor: '#8c9eff',
      sssIntensity: 0.38,
      iridescence: 0.56,
      thickness: 0.34,
      roughness: 0.12,
      sheenColor: '#e4e8ff',
      normalMap: bump(10, 6),
      normalScale: 0.22,
    });
    const dhprMat = reg(
      't_tubule',
      phys({
        color: '#b894ff',
        emissive: '#6e42ff',
        emissiveIntensity: 0.54,
        roughness: 0.22,
        clearcoat: 0.62,
      })
    );
    modeRefs.dhprMat = dhprMat;

    const apGlowMat = reg(
      't_tubule',
      phys({
        color: '#d4b8ff',
        emissive: '#a464ff',
        emissiveIntensity: 1.25,
        roughness: 0.14,
      })
    );
    modeRefs.tTubulePulseMat = apGlowMat;

    // Two primary transverse T-tubule collars dipping from the upper sarcolemma at the A-I junctions (x = +-2.22)!
    const triadXs = [-2.22, 2.22];
    triadXs.forEach((tx, tIdx) => {
      // Main transverse invagination dipping inward from top sarcolemma down into the Triad junction
      const dipCurve = new THREE.CatmullRomCurve3([
        V(tx, FIBER_Y + FIBER_R * 0.96, 0.22),
        V(tx, FIBER_Y + 2.08, 0.42),
        V(tx, TRIAD_L.y, 0.58),
        V(tx, SARCO_Y + 1.12, 0.72),
        V(tx, SARCO_Y + 0.88, -0.35),
        V(tx, FIBER_Y - 1.48, -0.20),
        V(tx, FIBER_Y - FIBER_R * 0.94, 0.18),
      ]);
      const tubMesh = shade(new THREE.Mesh(sweepGeo(dipCurve, t => 0.135 + 0.025 * Math.sin(t * Math.PI), 56, 18), tTubShellMat), true, true);
      cell.add(tubMesh);

      // Sarcolemma mouth pore ring at top opening of the T-tubule
      const poreRing = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.055, 12, 28), dhprMat);
      poreRing.position.set(tx, FIBER_Y + FIBER_R * 0.94, 0.22);
      poreRing.rotation.x = Math.PI / 2;
      cell.add(poreRing);

      // Horizontal front triad arm running slightly along Z at the hero triad zone so DHPR-RyR1 junction is ultra-clear!
      const armCurve = new THREE.CatmullRomCurve3([
        V(tx, TRIAD_L.y + 0.26, 0.12),
        V(tx, TRIAD_L.y + 0.02, 0.58),
        V(tx, TRIAD_L.y - 0.26, 0.96),
      ]);
      cell.add(shade(new THREE.Mesh(sweepGeo(armCurve, () => 0.125, 24, 14), tTubShellMat), true, true));

      // DHPR (CaV1.1) tetrad voltage sensors protruding laterally from T-tubule facing both SR terminal cisternae
      const dhprGeo = new THREE.BoxGeometry(0.075, 0.085, 0.085);
      for (const side of [-1, 1]) {
        for (let k = 0; k < 5; k++) {
          const fy = TRIAD_L.y - 0.24 + k * 0.125;
          const fz = 0.24 + k * 0.155;
          const dm = new THREE.Mesh(dhprGeo, dhprMat);
          dm.position.set(tx + side * 0.145, fy, fz);
          cell.add(dm);
        }
      }

      // Live animated Action Potential depolarization sparks racing down each T-tubule!
      for (let s = 0; s < 3; s++) {
        const sp = new THREE.Mesh(new THREE.SphereGeometry(0.082, 12, 10), apGlowMat);
        apPulseGroup.add(sp);
        apSparks.push({ mesh: sp, curve: dipCurve, phase: (s / 3 + tIdx * 0.35) % 1 });
      }

      SITES.t_tubule.push(V(tx, TRIAD_L.y + 0.18, 0.62), V(tx, FIBER_Y + 2.48, 0.34));
    });

    // 2B. Fenestrated Sarcoplasmic Reticulum (SR) Sleeves & Terminal Cisternae (Shell #5!)
    const srShellMat = cinemaShellMat('sr_network', '#1298b8', '#7af4ff', {}, {
      attenCol: '#0a7090',
      attenDist: 3.4,
      sssColor: '#3ef0ff',
      sssIntensity: 0.36,
      iridescence: 0.54,
      thickness: 0.42,
      roughness: 0.12,
      sheenColor: '#dcfcff',
      normalMap: bump(12, 8),
      normalScale: 0.22,
    });
    const srStoreMat = reg(
      'sr_network',
      phys({
        color: '#22c8a8',
        emissive: '#18d898',
        emissiveIntensity: 0.42,
        roughness: 0.30,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
      })
    );
    modeRefs.srStoreMat = srStoreMat;

    // Helper: create a plump SR terminal cisterna sac flanking a T-tubule (forming SR-T-SR Triad!)
    const cisternaPositions: Array<{ pos: THREE.Vector3; sx: number; sy: number; sz: number }> = [];
    triadXs.forEach(tx => {
      for (const side of [-1, 1]) {
        const cx = tx + side * 0.44;
        const cPos = V(cx, TRIAD_L.y - 0.04, 0.56);
        cisternaPositions.push({ pos: cPos, sx: 0.22, sy: 0.44, sz: 0.54 });

        const sacGeo = new THREE.SphereGeometry(1, 28, 20);
        sacGeo.scale(0.22, 0.44, 0.54);
        const sac = shade(new THREE.Mesh(sacGeo, srShellMat), true, true);
        sac.position.copy(cPos);
        cell.add(sac);

        // Luminous emerald calsequestrin Ca2+ store inside each terminal cisterna
        const coreGeo = new THREE.SphereGeometry(1, 20, 14);
        coreGeo.scale(0.14, 0.32, 0.40);
        const core = new THREE.Mesh(coreGeo, srStoreMat);
        core.position.copy(cPos);
        cell.add(core);

        SITES.sr_network.push(cPos.clone().add(V(0, 0.18, 0.38)));
      }
    });

    // Fenestrated longitudinal SR sleeves bridging across the A-band between Left & Right Triads
    // plus outer longitudinal SR arches curving over the I-band sleeves!
    const srCurves: THREE.CatmullRomCurve3[] = [
      // Upper arched fenestrated SR lattice spanning between x=-1.78 and x=+1.78
      new THREE.CatmullRomCurve3([
        V(-1.78, TRIAD_L.y + 0.16, 0.64),
        V(-0.92, TRIAD_L.y + 0.34, 0.72),
        V(0.0, TRIAD_L.y + 0.38, 0.70),
        V(0.92, TRIAD_L.y + 0.34, 0.72),
        V(1.78, TRIAD_L.y + 0.16, 0.64),
      ]),
      new THREE.CatmullRomCurve3([
        V(-1.78, TRIAD_L.y - 0.14, 0.42),
        V(-0.88, TRIAD_L.y + 0.02, 0.32),
        V(0.0, TRIAD_L.y + 0.06, 0.28),
        V(0.88, TRIAD_L.y + 0.02, 0.32),
        V(1.78, TRIAD_L.y - 0.14, 0.42),
      ]),
      new THREE.CatmullRomCurve3([
        V(-1.78, TRIAD_L.y + 0.06, 0.92),
        V(-0.95, TRIAD_L.y + 0.20, 0.98),
        V(0.0, TRIAD_L.y + 0.22, 0.94),
        V(0.95, TRIAD_L.y + 0.20, 0.98),
        V(1.78, TRIAD_L.y + 0.06, 0.92),
      ]),
      // Left outer SR sleeve extending from Left Triad toward left Z-disc
      new THREE.CatmullRomCurve3([
        V(-2.66, TRIAD_L.y + 0.12, 0.56),
        V(-3.42, TRIAD_L.y + 0.02, 0.62),
        V(-4.18, TRIAD_L.y - 0.26, 0.52),
      ]),
      new THREE.CatmullRomCurve3([
        V(-2.66, TRIAD_L.y - 0.14, 0.78),
        V(-3.45, TRIAD_L.y - 0.22, 0.84),
        V(-4.22, TRIAD_L.y - 0.46, 0.68),
      ]),
      // Right outer SR sleeve extending from Right Triad toward right Z-disc
      new THREE.CatmullRomCurve3([
        V(2.66, TRIAD_L.y + 0.12, 0.56),
        V(3.42, TRIAD_L.y + 0.02, 0.62),
        V(4.18, TRIAD_L.y - 0.26, 0.52),
      ]),
      new THREE.CatmullRomCurve3([
        V(2.66, TRIAD_L.y - 0.14, 0.78),
        V(3.45, TRIAD_L.y - 0.22, 0.84),
        V(4.22, TRIAD_L.y - 0.46, 0.68),
      ]),
      // Lower SR sleeve beneath the Hero Sarcomere completing the cylindrical wrap!
      new THREE.CatmullRomCurve3([
        V(-3.20, SARCO_Y - 1.32, 0.48),
        V(-1.60, SARCO_Y - 1.48, 0.62),
        V(0.0, SARCO_Y - 1.52, 0.66),
        V(1.60, SARCO_Y - 1.48, 0.62),
        V(3.20, SARCO_Y - 1.32, 0.48),
      ]),
    ];

    srCurves.forEach((crv, cIdx) => {
      const m = shade(new THREE.Mesh(sweepGeo(crv, t => 0.105 + 0.024 * Math.sin(t * Math.PI * 3), 36, 14), srShellMat), true, true);
      cell.add(m);
      if (cIdx === 0 || cIdx === 3 || cIdx === 5) SITES.sr_network.push(crv.getPointAt(0.5));
    });

    // Cross-fenestration anastomoses linking the longitudinal SR tubes into a true perforated collar
    for (const fx of [-1.20, -0.42, 0.42, 1.20]) {
      const bridge = new THREE.CatmullRomCurve3([
        V(fx, TRIAD_L.y + 0.02, 0.34),
        V(fx, TRIAD_L.y + 0.26, 0.68),
        V(fx, TRIAD_L.y + 0.18, 0.96),
      ]);
      cell.add(new THREE.Mesh(sweepGeo(bridge, () => 0.075, 16, 10), srShellMat));
    }

    // 2C. Iconic Quatrefoil RyR1 Ca2+ Release Foot Channels (Bridging SR Terminal Cisternae <-> T-Tubules!)
    const ryrMat = makeCinemaProteinMat('ryr1_channel', {
      emissive: '#18a852',
      emissiveIntensity: 0.46,
      roughness: 0.22,
      clearcoat: 0.62,
    }, '#58ffa2', 0.36);
    modeRefs.ryrMat = ryrMat;

    const ryrPoreMat = reg(
      'ryr1_channel',
      phys({
        color: '#84ffb8',
        emissive: '#38ff88',
        emissiveIntensity: 0.96,
        roughness: 0.16,
      })
    );
    modeRefs.ryrPoreMat = ryrPoreMat;

    const S_RYR = makeSculptedMesh(ryrMat, cell);
    const poreRingGeo = new THREE.TorusGeometry(0.052, 0.018, 8, 18);

    // Build crisp 4-lobe quatrefoil RyR1 "foot" tetramers along BOTH sides of Left & Right Triads
    triadXs.forEach((tx, tIdx) => {
      for (const side of [-1, 1]) {
        const rx = tx + side * 0.235;
        const nFeet = tIdx === 0 ? 6 : 4;
        for (let k = 0; k < nFeet; k++) {
          const u = k / (nFeet - 1);
          const ry = TRIAD_L.y - 0.30 + u * 0.56;
          const rz = 0.22 + u * 0.72;
          const center = V(rx, ry, rz);

          // 4 symmetric mushroom lobes forming the unmistakable cryo-EM square quatrefoil RyR1 crown!
          const lobeOffs = [
            V(0, 0.056, 0.056),
            V(0, 0.056, -0.056),
            V(0, -0.056, 0.056),
            V(0, -0.056, -0.056),
          ];
          lobeOffs.forEach((lo, li) => {
            S_RYR.add(center.clone().add(lo), 0.115, li % 2 === 0 ? col('#3cf588') : col('#68ffa8'));
          });
          // Transmembrane stalk anchoring into the adjacent SR terminal cisterna
          S_RYR.stick(center, center.clone().add(V(side * 0.10, 0, 0)), 0.044, col('#24cc6c'), col('#3cf588'));

          // Glowing central Ca2+ release pore ring
          const pr = new THREE.Mesh(poreRingGeo, ryrPoreMat);
          pr.position.copy(center).add(V(-side * 0.032, 0, 0));
          pr.rotation.y = Math.PI / 2;
          cell.add(pr);

          if (SITES.ryr1_channel.length < 10) SITES.ryr1_channel.push(center.clone());
        }
      }
    });
    S_RYR.done();

    // 2D. Dense SERCA1a Ca2+-ATPase Pumps (REAL RCSB PDB 1SU4 — 84 instances coating SR sleeves!)
    const sercaMat = makeCinemaProteinMat('serca1a_pump', {
      emissive: '#107a84',
      emissiveIntensity: 0.34,
      roughness: 0.24,
      clearcoat: 0.58,
    }, '#54f5ff', 0.32);
    modeRefs.sercaMat = sercaMat;

    const I_SERCA = makeMolBatch(T.geoSerca, sercaMat, cell);
    srCurves.forEach((crv, cIdx) => {
      const nPumps = cIdx < 3 ? 14 : cIdx === 7 ? 12 : 7;
      for (let k = 0; k < nPumps; k++) {
        const u = (k + 0.5) / nPumps;
        const pt = crv.getPointAt(u);
        const ang = (k * 2.1 + cIdx * 1.4) % (Math.PI * 2);
        const outDir = V(0, Math.sin(ang) * 0.72 + (cIdx === 7 ? -0.45 : 0.42), Math.cos(ang) * 0.72 + 0.35).normalize();
        const pos = pt.clone().addScaledVector(outDir, 0.115);
        I_SERCA.add(pos, qFromY(outDir, ang), rr(0.76, 0.94));
        placed++;
        if (SITES.serca1a_pump.length < 12 && (cIdx === 0 || cIdx === 2 || cIdx === 3)) {
          SITES.serca1a_pump.push(pos.clone());
        }
      }
    });
    // Also stud the outer flanks of the terminal cisternae with extra SERCA1a pumps visible in triad_sr!
    cisternaPositions.forEach((cp, idx) => {
      for (let k = 0; k < 4; k++) {
        const a = -0.7 + (k / 3) * 1.4;
        const dir = V(idx % 2 === 0 ? -0.75 : 0.75, Math.sin(a) * 0.55, Math.cos(a) * 0.75).normalize();
        const pos = cp.pos.clone().add(V(dir.x * cp.sx * 1.05, dir.y * cp.sy * 0.92, dir.z * cp.sz * 0.95));
        I_SERCA.add(pos, qFromY(dir, k), rr(0.80, 0.96));
        placed++;
      }
    });
    I_SERCA.done();
  }

  // -------------------------------------------------------------------------
  // 3. Hero Sliding-Filament Sarcomere (2.20 um <-> 1.60 um)
  //    Z-discs, I-band, A-band, H-zone, M-line, Elastic Titin Springs,
  //    Myosin-II Thick Filaments + Pivoting 2MYS S1 Motor Heads,
  //    Sliding 6KN8 F-Actin + Rolling Tropomyosin & Troponin Ca2+ Switches!
  // -------------------------------------------------------------------------
  function buildHeroSarcomere(T) {
    const THICK_ROWS = [
      { y: SARCO_Y + 0.56, z: SARCO_Z + 0.14, hero: true },
      { y: SARCO_Y + 0.00, z: SARCO_Z + 0.24, hero: true }, // Center hero row for crossbridge!
      { y: SARCO_Y - 0.56, z: SARCO_Z + 0.14, hero: true },
      { y: SARCO_Y + 0.28, z: SARCO_Z - 0.34, hero: false },
      { y: SARCO_Y - 0.28, z: SARCO_Z - 0.34, hero: false },
    ];

    const THIN_ROWS = [
      { y: SARCO_Y + 0.84, z: SARCO_Z + 0.18, hero: true },
      { y: SARCO_Y + 0.28, z: SARCO_Z + 0.24, hero: true }, // Primary crossbridge F-actin!
      { y: SARCO_Y - 0.28, z: SARCO_Z + 0.24, hero: true }, // Secondary crossbridge F-actin!
      { y: SARCO_Y - 0.84, z: SARCO_Z + 0.18, hero: true },
      { y: SARCO_Y + 0.56, z: SARCO_Z - 0.16, hero: false },
      { y: SARCO_Y + 0.00, z: SARCO_Z - 0.16, hero: false },
      { y: SARCO_Y - 0.56, z: SARCO_Z - 0.16, hero: false },
    ];

    // 3A. Central M-Line Scaffold (x = 0, myomesin + obscurin triple vertical struts!)
    const S_MLINE = sculpt('m_line', cell, {
      emissive: '#a84c14',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      metalness: 0.18,
      clearcoat: 0.58,
    }, '#ffb46e');
    for (const mx of [-0.10, 0.0, 0.10]) {
      S_MLINE.stick(V(mx, SARCO_Y - 0.96, SARCO_Z + 0.26), V(mx, SARCO_Y + 0.96, SARCO_Z + 0.26), 0.030, col('#ff9848'), col('#ffd274'));
      S_MLINE.stick(V(mx, SARCO_Y - 0.82, SARCO_Z - 0.34), V(mx, SARCO_Y + 0.82, SARCO_Z - 0.34), 0.026, col('#e87834'), col('#ffb85c'));
    }
    // Cross-links tying all 5 thick filament centers into exact hexagonal register at M-line
    THICK_ROWS.forEach(tr => {
      S_MLINE.ring(V(0, tr.y, tr.z), V(1, 0, 0), 0.125, 0.028, col('#ffb458'), 20, 8);
      S_MLINE.stick(V(0, tr.y, tr.z), V(0, tr.y, SARCO_Z + 0.26), 0.022, col('#ff9e4a'), col('#ffd478'));
    });
    S_MLINE.done();
    SITES.m_line.push(V(0, SARCO_Y, SARCO_Z + 0.30), V(0, SARCO_Y + 0.78, SARCO_Z + 0.28));

    // 3B. Bipolar Myosin-II Thick Filaments (`myosin_thick`) spanning [-HALF_A, +HALF_A] (1.60 um CONSTANT!)
    const S_THICK = sculpt('myosin_thick', cell, {
      emissive: '#7e1430',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.54,
    }, '#ff6e92');

    THICK_ROWS.forEach((tr, rIdx) => {
      // Main braided crimson-ruby coiled-coil backbone shaft spanning the entire A-band
      S_THICK.tube(
        [
          V(-HALF_A, tr.y, tr.z),
          V(-HALF_A * 0.5, tr.y, tr.z),
          V(0, tr.y, tr.z),
          V(HALF_A * 0.5, tr.y, tr.z),
          V(HALF_A, tr.y, tr.z),
        ],
        0.072,
        0.072,
        col('#e62e58'),
        col('#ff5c7c'),
        12,
        true
      );
      // Helical coiled-coil LMM myosin tail ridges running outward from bare zone toward tips
      for (const sgn of [-1, 1]) {
        const helixPts: THREE.Vector3[] = [];
        for (let k = 0; k <= 18; k++) {
          const x = sgn * (0.18 + (k / 18) * (HALF_A - 0.22));
          const a = k * 1.15 + rIdx;
          helixPts.push(V(x, tr.y + Math.sin(a) * 0.076, tr.z + Math.cos(a) * 0.076));
        }
        S_THICK.tube(helixPts, 0.020, 0.020, col('#ff7894'), col('#d8264e'), 6, false);
      }
      if (tr.hero) SITES.myosin_thick.push(V(-1.35, tr.y, tr.z + 0.12), V(1.35, tr.y, tr.z + 0.12));
    });
    S_THICK.done();

    // 3C. Bipolar Myosin-II S1 Motor Heads (REAL RCSB PDB 2MYS — Physically Pivoting Power Strokes!)
    const myosinHeroMat = makeCinemaProteinMat('myosin_head', {
      emissive: '#881c3e',
      emissiveIntensity: 0.34,
      roughness: 0.22,
      clearcoat: 0.62,
    }, '#ff92b0', 0.34);
    modeRefs.myosinHeroMat = myosinHeroMat;

    const atpFlashMat = reg(
      'myosin_head',
      phys({
        color: '#ffe868',
        emissive: '#ffc428',
        emissiveIntensity: 1.45,
        roughness: 0.15,
        transparent: true,
        opacity: 0.90,
      })
    );
    const sparkGeo = new THREE.SphereGeometry(0.056, 10, 8);

    // Articulated hero S1 heads along the 3 front thick filaments (36 individually pivoting 2MYS motors!)
    const xsCrown = [0.42, 0.84, 1.26, 1.68, 2.10, 2.50];
    THICK_ROWS.forEach((tr, rIdx) => {
      if (!tr.hero) return;
      for (const side of [-1, 1] as const) {
        xsCrown.forEach((dx, cIdx) => {
          const x = side * dx;
          // Alternate up (+1) and down (-1) toward the adjacent interleaved thin actin filaments!
          const dirY: -1 | 1 = (cIdx + rIdx) % 2 === 0 ? 1 : -1;
          // Extra twin pair at the crossbridge hero spot (x = -1.26, center row) so BOTH up and down heads engage hero actins!
          const dirs: Array<-1 | 1> =
            rIdx === 1 && side === -1 && (cIdx === 1 || cIdx === 2 || cIdx === 3) ? [1, -1] : [dirY];

          dirs.forEach((dy, dIdx) => {
            const pivot = new THREE.Group();
            pivot.position.set(x, tr.y + dy * 0.068, tr.z + 0.01);
            cell.add(pivot);

            const mMesh = shade(new THREE.Mesh(T.geoMyosinS1, myosinHeroMat), true, true);
            // Scale & orient so lever arm starts at pivot and globular motor head reaches toward actin!
            const sc = rIdx === 1 ? 0.56 : 0.50;
            mMesh.scale.set(sc, sc * dy, sc);
            // Mirror X on right half so power stroke naturally faces the M-line on BOTH halves!
            if (side > 0) mMesh.scale.x *= -1;
            pivot.add(mMesh);

            // Subtle golden ATP / ADP+Pi flash bead nestled in the nucleotide cleft of hero crossbridge heads!
            let atpSpark: THREE.Mesh | undefined;
            if (rIdx === 1 && cIdx >= 1 && cIdx <= 4) {
              atpSpark = new THREE.Mesh(sparkGeo, atpFlashMat);
              atpSpark.position.set(side * 0.05, dy * 0.22, 0.09);
              pivot.add(atpSpark);
            }

            articulatedMyosins.push({
              pivot,
              side,
              dirY: dy,
              phase: (cIdx * 1.12 + rIdx * 0.78 + dIdx * 2.1) % (Math.PI * 2),
              baseTiltZ: side * dy * 0.34,
              baseTwistX: (cIdx % 2 === 0 ? 0.16 : -0.16),
              atpSpark,
            });
            placed++;
            if (SITES.myosin_head.length < 10 && rIdx === 1) {
              SITES.myosin_head.push(V(x, tr.y + dy * 0.20, tr.z + 0.08));
            }
          });
        });
      }
    });

    // Instanced background crowns of real 2MYS S1 heads along back thick filaments & lateral angles (72 more real 2MYS!)
    const I_MYO_BG = makeMolBatch(T.geoMyosinS1, myosinHeroMat, cell);
    THICK_ROWS.forEach((tr, rIdx) => {
      const angs = tr.hero ? [-2.25, 2.25] : [0.5, 2.4, -1.6];
      for (const side of [-1, 1]) {
        for (let k = 0; k < 5; k++) {
          const x = side * (0.48 + k * 0.48);
          angs.forEach((aBase, ai) => {
            const a = aBase + k * 0.9 + rIdx;
            const dir = V(side * -0.25, Math.sin(a), Math.cos(a)).normalize();
            const pos = V(x, tr.y + dir.y * 0.075, tr.z + dir.z * 0.075);
            I_MYO_BG.add(pos, qFromY(dir, a + ai), 0.46);
            placed++;
          });
        }
      }
    });
    I_MYO_BG.done();

    // 3D. Left & Right Zig-Zag α-Actinin Z-Discs (`z_disc`) Mounted Inside Sliding Groups!
    function buildZDiscInGroup(grp: THREE.Group, side: -1 | 1) {
      const S_Z = sculpt('z_disc', grp, {
        emissive: '#1e66b8',
        emissiveIntensity: 0.48,
        roughness: 0.22,
        metalness: 0.14,
        clearcoat: 0.64,
      }, '#7cd4ff');

      // Outer luminous α-actinin Z-disc structural frame rails (front & back)
      S_Z.stick(V(0, SARCO_Y - 1.02, SARCO_Z + 0.30), V(0, SARCO_Y + 1.02, SARCO_Z + 0.30), 0.056, col('#4ea8ff'), col('#8ce0ff'));
      S_Z.stick(V(0, SARCO_Y - 0.94, SARCO_Z - 0.38), V(0, SARCO_Y + 0.94, SARCO_Z - 0.38), 0.048, col('#3888e8'), col('#6ec4ff'));

      // Iconic zig-zag α-actinin chevron cross-links spanning vertically & across Z!
      const nZig = 9;
      for (let i = 0; i < nZig; i++) {
        const y0 = SARCO_Y - 0.96 + (i / nZig) * 1.92;
        const y1 = SARCO_Y - 0.96 + ((i + 1) / nZig) * 1.92;
        const xA = i % 2 === 0 ? -0.10 : 0.10;
        const xB = i % 2 === 0 ? 0.10 : -0.10;
        S_Z.stick(V(xA, y0, SARCO_Z + 0.28), V(xB, y1, SARCO_Z + 0.28), 0.036, col('#78d0ff'), col('#4698f5'));
        S_Z.stick(V(xB, y0, SARCO_Z - 0.28), V(xA, y1, SARCO_Z - 0.28), 0.030, col('#4c9cf0'), col('#78d0ff'));
        // Depth strut bridging front and back Z-lattice planes
        S_Z.stick(V(xA, y0, SARCO_Z + 0.28), V(xB, y0, SARCO_Z - 0.28), 0.024, col('#60bcff'), col('#3886e0'));
      }
      // Socket collars anchoring every thin actin filament's barbed (+) end into the Z-disc
      THIN_ROWS.forEach(tr => {
        S_Z.ring(V(-side * 0.04, tr.y, tr.z), V(1, 0, 0), 0.095, 0.026, col('#98e8ff'), 16, 8);
      });
      S_Z.done();
    }

    buildZDiscInGroup(leftSlideGroup, -1);
    buildZDiscInGroup(rightSlideGroup, 1);
    SITES.z_disc.push(V(-HALF_SARCO_RELAX, SARCO_Y, SARCO_Z + 0.32), V(HALF_SARCO_RELAX, SARCO_Y, SARCO_Z + 0.32));

    // 3E. Sliding Thin F-Actin Filaments (REAL RCSB PDB 6KN8) + Rolling Tropomyosin–Troponin Switch!
    const actinMat = makeCinemaProteinMat('actin_thin', {
      emissive: '#1468a8',
      emissiveIntensity: 0.30,
      roughness: 0.24,
      clearcoat: 0.56,
    }, '#6ce4ff', 0.32);

    const actinBindMat = reg(
      'actin_thin',
      phys({
        color: '#64ffd4',
        emissive: '#28ffbc',
        emissiveIntensity: 0.72,
        roughness: 0.20,
      })
    );
    modeRefs.actinBindMat = actinBindMat;

    const tropoMat = makeCinemaProteinMat('troponin_tropo', {
      emissive: '#9c7212',
      emissiveIntensity: 0.42,
      roughness: 0.22,
      clearcoat: 0.62,
    }, '#ffe874', 0.34);

    const caBeadMat = reg(
      'troponin_tropo',
      phys({
        color: '#6effa4',
        emissive: '#34ff84',
        emissiveIntensity: 1.35,
        roughness: 0.14,
      })
    );
    modeRefs.caBeadMat = caBeadMat;

    const bindSiteGeo = new THREE.SphereGeometry(0.036, 10, 8);
    const caIonGeo = new THREE.SphereGeometry(0.044, 10, 8);

    // Build all 7 left thin filaments inside leftSlideGroup and all 7 right thin filaments inside rightSlideGroup!
    for (const [grp, side] of [
      [leftSlideGroup, -1],
      [rightSlideGroup, 1],
    ] as Array<[THREE.Group, -1 | 1]>) {
      const I_ACTIN = makeMolBatch(T.geoActinTropo, actinMat, grp);
      const inwardDir = -side; // Left (-1) extends toward +X; Right (+1) extends toward -X

      THIN_ROWS.forEach((tr, rIdx) => {
        // 3 tiled real 6KN8 F-actin PDB segments spanning the full 2.66-unit thin filament!
        // (7 rows x 3 segments x 2 sides = 42 real 6KN8 PDB placements!)
        const nSegs = 3;
        for (let s = 0; s < nSegs; s++) {
          const xLocal = inwardDir * (0.44 + s * 0.88);
          const q = new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), s * 1.15 + rIdx * 0.7);
          if (side > 0) q.multiply(new THREE.Quaternion().setFromAxisAngle(UP, Math.PI));
          I_ACTIN.add(V(xLocal, tr.y, tr.z), q, tr.hero ? 0.56 : 0.48);
          placed++;
        }

        // Exposed myosin-binding target pads along front hero thin filaments (glowing when Tropomyosin rolls away!)
        if (tr.hero) {
          for (let b = 0; b < 6; b++) {
            const bx = inwardDir * (0.42 + b * 0.40);
            const bm = new THREE.Mesh(bindSiteGeo, actinBindMat);
            bm.position.set(bx, tr.y - (rIdx === 1 ? 0.088 : -0.088), tr.z + 0.055);
            grp.add(bm);
          }
        }

        // Dynamic Rolling Tropomyosin–Troponin Complex (`tropoRollGroup`) rotating azimuthally around X on Ca2+!
        const tropoRoll = new THREE.Group();
        tropoRoll.position.set(0, tr.y, tr.z);
        grp.add(tropoRoll);

        const S_TROP = makeSculptedMesh(tropoMat, tropoRoll);
        // Twin golden coiled-coil Tropomyosin cables spiralling along both helical F-actin grooves
        for (const strand of [0, 1]) {
          const tPts: THREE.Vector3[] = [];
          for (let k = 0; k <= 26; k++) {
            const u = k / 26;
            const lx = inwardDir * (0.12 + u * (ACTIN_LEN - 0.16));
            const ang = u * Math.PI * 5.2 + strand * Math.PI;
            const rad = tr.hero ? 0.092 : 0.078;
            tPts.push(V(lx, Math.sin(ang) * rad, Math.cos(ang) * rad));
          }
          S_TROP.tube(tPts, 0.022, 0.022, col('#ffe254'), col('#ffaa32'), 7, false);
        }

        // Periodic 3-subunit Troponin (TnC / TnI / TnT) Ca2+ sensor complexes every ~38.5 nm along thin filament!
        const nTn = tr.hero ? 4 : 2;
        for (let k = 0; k < nTn; k++) {
          const u = (k + 0.45) / nTn;
          const lx = inwardDir * (0.24 + u * (ACTIN_LEN - 0.40));
          const ang = u * Math.PI * 5.2;
          const rad = tr.hero ? 0.105 : 0.088;
          const pTn = V(lx, Math.sin(ang) * rad, Math.cos(ang) * rad);
          // TnC (gold-lime Ca2+ sensor), TnI (amber inhibitory), TnT (coral-gold tropomyosin tether)
          S_TROP.add(pTn, 0.092, col('#ffea68'));
          S_TROP.add(pTn.clone().add(V(inwardDir * 0.05, 0.042, 0.032)), 0.072, col('#ffaa38'));
          S_TROP.add(pTn.clone().add(V(-inwardDir * 0.05, -0.036, 0.028)), 0.068, col('#ff7c4c'));

          // Docked emerald Ca2+ ion sitting right inside the TnC EF-hand pocket (scales up brightly with Ca2+!)
          if (tr.hero) {
            const caBead = new THREE.Mesh(caIonGeo, caBeadMat);
            caBead.position.copy(pTn).add(V(0, 0.025, 0.068));
            tropoRoll.add(caBead);
            troponinCaBeads.push(caBead);
          }
        }
        S_TROP.done();
        tropoRollGroups.push({ grp: tropoRoll, dir: side * (rIdx % 2 === 0 ? 1 : -1), phase: rIdx * 0.4 });
      });

      I_ACTIN.done();
    }
    SITES.actin_thin.push(V(-1.75, SARCO_Y + 0.28, SARCO_Z + 0.26), V(1.75, SARCO_Y + 0.28, SARCO_Z + 0.26), V(-1.26, SARCO_Y - 0.28, SARCO_Z + 0.26));
    SITES.troponin_tropo.push(V(-1.42, SARCO_Y + 0.34, SARCO_Z + 0.32), V(1.42, SARCO_Y + 0.34, SARCO_Z + 0.32), V(-0.98, SARCO_Y - 0.22, SARCO_Z + 0.32));

    // 3F. Dynamic Elastic Titin PEVK Helical Coil Springs (`titin_spring`)
    // Connect each thick filament tip (x = +-TITIN_INNER_X = +-2.48) to Left & Right Z-discs (+-halfSarco)!
    const titinMat = makeCinemaProteinMat('titin_spring', {
      emissive: '#a8640c',
      emissiveIntensity: 0.46,
      roughness: 0.22,
      metalness: 0.20,
      clearcoat: 0.64,
    }, '#ffd260', 0.34);

    // Unit-length (X in [0, 1]) helical spring geometry so scaling X dynamically compresses/stretches coils!
    const titinUnitCurve = new THREE.CatmullRomCurve3(
      Array.from({ length: 49 }, (_, i) => {
        const u = i / 48;
        const a = u * Math.PI * 12; // 6 crisp elastic coils
        const r = 0.068 * Math.sin(Math.PI * Math.min(1, Math.max(0.06, u)));
        return V(u, Math.sin(a) * r, Math.cos(a) * r);
      })
    );
    const titinUnitGeo = sweepGeo(titinUnitCurve, () => 0.017, 64, 8);
    // Vertex color warm amber-gold gradient
    const tPos = titinUnitGeo.attributes.position;
    const tCols = new Float32Array(tPos.count * 3);
    const cT1 = col('#ffaa28'), cT2 = col('#ffe874'), tmpC = new THREE.Color();
    for (let i = 0; i < tPos.count; i++) {
      tmpC.lerpColors(cT1, cT2, Math.abs(Math.sin(tPos.getX(i) * Math.PI * 6)));
      tCols[i * 3] = tmpC.r; tCols[i * 3 + 1] = tmpC.g; tCols[i * 3 + 2] = tmpC.b;
    }
    titinUnitGeo.setAttribute('color', new THREE.BufferAttribute(tCols, 3));

    THICK_ROWS.forEach((tr, rIdx) => {
      // Left Titin spring anchored at x = -TITIN_INNER_X extending toward -X (Z-disc)
      const gL = new THREE.Group();
      gL.position.set(-TITIN_INNER_X, tr.y, tr.z);
      const mL = shade(new THREE.Mesh(titinUnitGeo, titinMat), false, true);
      mL.scale.x = -1; // points toward -X
      gL.add(mL);
      cell.add(gL);
      titinSpringsLeft.push(gL);

      // Right Titin spring anchored at x = +TITIN_INNER_X extending toward +X (Z-disc)
      const gR = new THREE.Group();
      gR.position.set(TITIN_INNER_X, tr.y, tr.z);
      const mR = shade(new THREE.Mesh(titinUnitGeo, titinMat), false, true);
      gR.add(mR);
      cell.add(gR);
      titinSpringsRight.push(gR);

      if (rIdx < 3) {
        SITES.titin_spring.push(V(-3.12, tr.y, tr.z + 0.08), V(3.12, tr.y, tr.z + 0.08));
      }
    });

    // 3G. Live Sarcomere Band Architecture Bars & Translucent Curtains (`a_band`, `i_band`, `h_zone`)
    // Placed cleanly at Y = SARCO_Y + 1.08 (tucked below the Triad SR, zero overlap with #hud or #hint!)
    const BAR_Y = SARCO_Y + 1.06;
    const BAR_Z = SARCO_Z + 0.24;

    // A-Band (STRICTLY CONSTANT 1.60 um = [-HALF_A, +HALF_A])
    const aBandMat = reg(
      'a_band',
      phys({
        color: '#ff5272',
        emissive: '#cc2248',
        emissiveIntensity: 0.62,
        roughness: 0.24,
      })
    );
    const aCurtainMat = reg(
      'a_band',
      phys({
        color: '#ff3c62',
        emissive: '#a81434',
        emissiveIntensity: 0.22,
        transparent: true,
        opacity: 0.09,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    const aBar = new THREE.Mesh(new THREE.BoxGeometry(HALF_A * 2, 0.032, 0.036), aBandMat);
    aBar.position.set(0, BAR_Y + 0.10, BAR_Z);
    cell.add(aBar);
    for (const sx of [-1, 1]) {
      const tick = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.12, 0.036), aBandMat);
      tick.position.set(sx * HALF_A, BAR_Y + 0.06, BAR_Z);
      cell.add(tick);
    }
    const aCurtain = new THREE.Mesh(new THREE.PlaneGeometry(HALF_A * 2, 1.98), aCurtainMat);
    aCurtain.position.set(0, SARCO_Y, SARCO_Z - 0.50);
    cell.add(aCurtain);
    const aPlaque = makeLabelPlaque(
      'a_band',
      [{ text: 'A-band · 1.60 µm (constant)', color: '#ffb0c2', font: '700 22px system-ui, -apple-system, sans-serif', y: 36 }],
      1.78,
      0.25,
      360,
      72,
      'rgba(48, 12, 24, 0.82)',
      'rgba(255, 92, 126, 0.72)'
    );
    aPlaque.position.set(0, BAR_Y + 0.27, BAR_Z + 0.03);
    cell.add(aPlaque);
    SITES.a_band.push(V(0, BAR_Y + 0.14, BAR_Z), V(-1.4, SARCO_Y, SARCO_Z));

    // H-Zone (SHRINKS dramatically from 2.22 units at 2.20 um down to 0.36 units at 1.60 um!)
    const hZoneMat = reg(
      'h_zone',
      phys({
        color: '#ffd858',
        emissive: '#d89818',
        emissiveIntensity: 0.76,
        roughness: 0.22,
      })
    );
    const hCurtainMat = reg(
      'h_zone',
      phys({
        color: '#ffd858',
        emissive: '#d69c1c',
        emissiveIntensity: 0.30,
        transparent: true,
        opacity: 0.13,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    hZoneBar = new THREE.Group();
    hZoneBar.position.set(0, BAR_Y - 0.02, BAR_Z + 0.02);
    hZoneBar.add(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.034, 0.036), hZoneMat));
    cell.add(hZoneBar);
    hZoneCurtain = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.92), hCurtainMat);
    hZoneCurtain.position.set(0, SARCO_Y, SARCO_Z - 0.46);
    cell.add(hZoneCurtain);
    const hPlaque = makeLabelPlaque(
      'h_zone',
      [{ text: 'H-zone (narrows)', color: '#ffe888', font: '700 22px system-ui, -apple-system, sans-serif', y: 36 }],
      1.16,
      0.23,
      256,
      72,
      'rgba(48, 34, 8, 0.82)',
      'rgba(255, 212, 82, 0.74)'
    );
    hPlaque.position.set(0, SARCO_Y - 1.12, BAR_Z + 0.04);
    cell.add(hPlaque);
    SITES.h_zone.push(V(0, SARCO_Y + 0.10, SARCO_Z + 0.10), V(0, BAR_Y - 0.02, BAR_Z));

    // I-Band (Pair of dynamic ice-cyan zones flanking both Z-discs — NARROW dramatically during contraction!)
    const iBandMat = reg(
      'i_band',
      phys({
        color: '#7ee0ff',
        emissive: '#22a4e8',
        emissiveIntensity: 0.78,
        roughness: 0.22,
      })
    );
    const iCurtainMat = reg(
      'i_band',
      phys({
        color: '#66d8ff',
        emissive: '#1e90d8',
        emissiveIntensity: 0.28,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    iBandLeftBar = new THREE.Group();
    iBandLeftBar.position.set(-3.25, BAR_Y + 0.10, BAR_Z);
    iBandLeftBar.add(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.036, 0.036), iBandMat));
    cell.add(iBandLeftBar);

    iBandRightBar = new THREE.Group();
    iBandRightBar.position.set(3.25, BAR_Y + 0.10, BAR_Z);
    iBandRightBar.add(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.036, 0.036), iBandMat));
    cell.add(iBandRightBar);

    iBandLeftCurtain = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.98), iCurtainMat);
    iBandLeftCurtain.position.set(-3.25, SARCO_Y, SARCO_Z - 0.48);
    cell.add(iBandLeftCurtain);

    iBandRightCurtain = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.98), iCurtainMat);
    iBandRightCurtain.position.set(3.25, SARCO_Y, SARCO_Z - 0.48);
    cell.add(iBandRightCurtain);

    // Compact sliding Z-disc tags cleanly underneath the left & right Z-discs (zero overlap with #hint!)
    zLeftPlaque = makeLabelPlaque(
      'z_disc',
      [{ text: 'Z-disc', color: '#9ee4ff', font: '700 24px system-ui, -apple-system, sans-serif', y: 36 }],
      0.72,
      0.23,
      192,
      72,
      'rgba(10, 28, 52, 0.80)',
      'rgba(96, 180, 255, 0.72)'
    );
    zLeftPlaque.position.set(-HALF_SARCO_RELAX, SARCO_Y - 1.14, BAR_Z + 0.04);
    cell.add(zLeftPlaque);

    zRightPlaque = makeLabelPlaque(
      'z_disc',
      [{ text: 'Z-disc', color: '#9ee4ff', font: '700 24px system-ui, -apple-system, sans-serif', y: 36 }],
      0.72,
      0.23,
      192,
      72,
      'rgba(10, 28, 52, 0.80)',
      'rgba(96, 180, 255, 0.72)'
    );
    zRightPlaque.position.set(HALF_SARCO_RELAX, SARCO_Y - 1.14, BAR_Z + 0.04);
    cell.add(zRightPlaque);

    SITES.i_band.push(V(-3.25, SARCO_Y, SARCO_Z + 0.16), V(3.25, SARCO_Y, SARCO_Z + 0.16));
  }

  // -------------------------------------------------------------------------
  // 4. Centered Zero-Clipping Circular Optical Atomic Lens (`muscle_atoms`, 0.1-0.5 nm)
  //    Left:  Troponin C EF-Hand Ca2+ Oxygen Chelation Cage (6 crimson O coordinating emerald Ca2+)
  //    Right: Myosin Mg2+-ATP -> ADP + Pi Cleavage (with Mg2+ cofactor & glowing beta-gamma cleavage)
  //    Every atom & caption strictly inside R_RING = 1.66 -> ZERO bezel clipping!
  // -------------------------------------------------------------------------
  function buildAtomicMuscleLens() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    cell.add(grp);

    const R_RING = 1.62;

    // Emerald-to-gold luminous optical bezel ring
    const ringMat = reg(
      'muscle_atoms',
      phys({
        color: '#6affbe',
        emissive: '#16845c',
        emissiveIntensity: 0.48,
        roughness: 0.18,
        metalness: 0.26,
        clearcoat: 0.78,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.040, 16, 72), ringMat));

    // Matte dark-field aperture disc behind molecules (zero specular reflection hotspot!)
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 64),
      reg(
        'muscle_atoms',
        phys({
          color: '#060c1b',
          roughness: 0.90,
          metalness: 0.0,
          envMapIntensity: 0.08,
          transparent: true,
          opacity: 0.80,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.14;
    grp.add(glassDisc);

    const S_AT = sculpt('muscle_atoms', grp, { roughness: 0.20, clearcoat: 0.66 }, '#8affcc');
    const cC = col('#94a4ba'); // Carbon — slate silver
    const cH = col('#f2f8ff'); // Hydrogen — pearl white
    const cN = col('#4c98ff'); // Nitrogen — cobalt blue
    const cO = col('#ff5064'); // Oxygen — crimson red
    const cP = col('#ff9e2c'); // Phosphorus — orange-gold
    const cCa = col('#3eff7a'); // Calcium Ca2+ — vivid emerald green
    const cMg = col('#38f0d8'); // Magnesium Mg2+ — luminous aqua-mint
    const cBond = col('#cbd9ec');
    const cCoord = col('#78ffb4');

    // Crisp vertical center divider strictly inside lens
    S_AT.stick(V(0.0, -0.78, -0.04), V(0.0, 0.66, -0.04), 0.011, col('#6a82a4'), col('#6a82a4'));

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.022) => S_AT.stick(a, b, r, c1, c2);

    // === LEFT HALF: TROPONIN C EF-HAND Ca2+ OXYGEN COORDINATION CAGE ===
    const caC = V(-0.74, -0.04, 0.08);
    atom(caC, 0.118, cCa); // Central Ca2+ ion!

    const caHaloMat = reg(
      'muscle_atoms',
      phys({
        color: '#6effa2',
        emissive: '#32ff76',
        emissiveIntensity: 0.92,
        roughness: 0.16,
        transparent: true,
        opacity: 0.56,
        depthWrite: false,
      })
    );
    caEfHaloMesh = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.019, 10, 32), caHaloMat);
    caEfHaloMesh.position.copy(caC);
    grp.add(caEfHaloMesh);

    // 6 Chelation Oxygen ligands (Asp/Glu carboxylates + backbone carbonyl + apical H2O) forming the EF-hand cage!
    const oxDirs = [
      V(0.86, 0.50, 0.12),
      V(0.02, 0.98, 0.14),
      V(-0.88, 0.46, 0.12),
      V(-0.84, -0.52, 0.10),
      V(0.06, -0.96, 0.12),
      V(0.82, -0.54, 0.10),
    ];
    const oxPts: THREE.Vector3[] = [];
    oxDirs.forEach((d, idx) => {
      const u = d.clone().normalize();
      const pO = caC.clone().addScaledVector(u, 0.30);
      oxPts.push(pO);
      atom(pO, 0.068, cO);
      bond(caC, pO, cCa, cCoord, 0.018);

      // Carboxylate carbon (-COO-) & EF-hand loop backbone tether for the 5 protein ligands
      if (idx < 5) {
        const pC = pO.clone().addScaledVector(u, 0.17);
        atom(pC, 0.056, cC);
        bond(pO, pC, cO, cC, 0.021);
        if (idx % 2 === 0) {
          const tan = V(-u.y, u.x, 0).multiplyScalar(0.12);
          const pO2 = pC.clone().add(tan);
          atom(pO2, 0.052, cO);
          bond(pC, pO2, cC, cO, 0.018);
        } else {
          const pN = pC.clone().addScaledVector(u, 0.14);
          atom(pN, 0.052, cN);
          bond(pC, pN, cC, cN, 0.018);
        }
      } else {
        // Coordinated H2O hydrogens on the 6th site
        const h1 = pO.clone().add(V(0.11, -0.05, 0.04));
        const h2 = pO.clone().add(V(0.04, -0.12, 0.04));
        atom(h1, 0.042, cH);
        atom(h2, 0.042, cH);
        bond(pO, h1, cO, cH, 0.016);
        bond(pO, h2, cO, cH, 0.016);
      }
    });

    // Sweeping EF-hand Ca2+-binding peptide loop arc encircling the oxygen cage cleanly inside left half
    const efLoopPts: THREE.Vector3[] = [];
    for (let k = 0; k <= 14; k++) {
      const a = 0.25 + (k / 14) * Math.PI * 1.48;
      efLoopPts.push(caC.clone().add(V(Math.cos(a) * 0.56, Math.sin(a) * 0.54, -0.02)));
    }
    S_AT.tube(efLoopPts, 0.022, 0.022, col('#60a4ff'), col('#8cf0ff'), 8, false);

    // === RIGHT HALF: MYOSIN Mg2+-ATP -> ADP + Pi CLEAVAGE ===
    const adRing = [
      V(1.06, 0.36, 0.06),
      V(1.24, 0.28, 0.06),
      V(1.24, 0.08, 0.06),
      V(1.06, -0.02, 0.06),
      V(0.92, 0.16, 0.06),
    ];
    adRing.forEach((ap, i) => {
      atom(ap, i % 2 === 0 ? 0.054 : 0.050, i % 2 === 0 ? cN : cC);
      bond(ap, adRing[(i + 1) % adRing.length], i % 2 === 0 ? cN : cC, cC, 0.019);
    });

    // alpha, beta, gamma Phosphates stepping leftward inside right half (beta-gamma cleavage!)
    const pAlpha = V(0.76, 0.02, 0.08);
    const pBeta = V(0.48, -0.10, 0.08);
    const pGamma = V(0.20, 0.04, 0.10);

    const oRibA = V(0.90, 0.08, 0.07);
    const oAB = V(0.62, -0.04, 0.08);
    const oBG = V(0.34, -0.03, 0.09);

    [pAlpha, pBeta, pGamma].forEach((pp, idx) => atom(pp, idx === 2 ? 0.096 : 0.088, cP));
    [oRibA, oAB, oBG].forEach(op => atom(op, 0.062, cO));

    const termOx: Array<[THREE.Vector3, THREE.Vector3]> = [
      [pAlpha, pAlpha.clone().add(V(0.0, 0.19, 0.04))],
      [pAlpha, pAlpha.clone().add(V(0.03, -0.19, 0.04))],
      [pBeta, pBeta.clone().add(V(-0.02, -0.20, 0.04))],
      [pBeta, pBeta.clone().add(V(0.02, 0.17, 0.05))],
      [pGamma, pGamma.clone().add(V(-0.03, 0.20, 0.04))],
      [pGamma, pGamma.clone().add(V(-0.15, -0.06, 0.04))],
      [pGamma, pGamma.clone().add(V(0.03, -0.18, 0.06))],
    ];
    termOx.forEach(([pp, op]) => {
      atom(op, 0.058, cO);
      bond(pp, op, cP, cO, 0.022);
    });
    bond(adRing[4], oRibA, cC, cO, 0.020);
    bond(oRibA, pAlpha, cO, cP, 0.024);
    bond(pAlpha, oAB, cP, cO, 0.024);
    bond(oAB, pBeta, cO, cP, 0.024);

    // Highlighted high-energy beta-gamma phosphoanhydride cleavage bridge
    const cFlash = col('#ffe858');
    bond(pBeta, oBG, cP, cFlash, 0.019);
    bond(oBG, pGamma, cFlash, cP, 0.019);

    // Essential Mg2+ catalytic cofactor ion coordinating the beta- and gamma-phosphate oxygens!
    const mgPos = V(0.36, -0.44, 0.10);
    atom(mgPos, 0.094, cMg);
    bond(mgPos, termOx[2][1], cMg, cO, 0.017);
    bond(mgPos, termOx[6][1], cMg, cO, 0.017);

    // Nucleophilic hydrolytic H2O molecule attacking gamma-phosphate
    const wO = V(0.84, -0.48, 0.08);
    const wH1 = V(0.73, -0.57, 0.08);
    const wH2 = V(0.95, -0.57, 0.08);
    atom(wO, 0.064, cO);
    atom(wH1, 0.044, cH);
    atom(wH2, 0.044, cH);
    bond(wO, wH1, cO, cH, 0.016);
    bond(wO, wH2, cO, cH, 0.016);

    // Animated golden cleavage burst ring around beta-gamma bond!
    const cleaveMat = reg(
      'muscle_atoms',
      phys({
        color: '#ffe858',
        emissive: '#ffb82e',
        emissiveIntensity: 0.96,
        roughness: 0.16,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
      })
    );
    atpCleavageGlow = new THREE.Mesh(new THREE.TorusGeometry(0.145, 0.020, 10, 28), cleaveMat);
    atpCleavageGlow.position.copy(oBG);
    grp.add(atpCleavageGlow);

    S_AT.done();

    // Top Caption Plaque centered GENEROUSLY inside R_RING = 1.66 (y=+0.95, 1.84x0.34 -> corner r=1.45 << 1.62!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 104;
    const tg = topCv.getContext('2d')!;
    tg.clearRect(0, 0, 512, 104);
    tg.textAlign = 'center';
    tg.font = '700 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#6effa4';
    tg.fillText('EF-HAND Ca²⁺ CAGE', 136, 36);
    tg.font = '600 17px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#c8ffe0';
    tg.fillText('Troponin C · 6 O Ligands', 136, 66);

    tg.font = '700 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffd85c';
    tg.fillText('MYOSIN Mg²⁺·ATP', 376, 36);
    tg.font = '600 17px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffebba';
    tg.fillText('ATP → ADP + Pᵢ Cleavage', 376, 66);

    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.84, 0.34),
      reg(
        'muscle_atoms',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.80,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 0.95, 0.14);
    grp.add(topLbl);

    // Bottom CPK Atomic Legend Strip centered cleanly inside lower chord (y=-1.04, 1.68x0.22 -> corner r=1.43 << 1.62!)
    const botCv = document.createElement('canvas');
    botCv.width = 560;
    botCv.height = 72;
    const bg = botCv.getContext('2d')!;
    bg.clearRect(0, 0, 560, 72);
    const atomsLegend: Array<[string, string]> = [
      ['C', '#94a4ba'],
      ['H', '#f2f8ff'],
      ['N', '#4c98ff'],
      ['O', '#ff5064'],
      ['P', '#ff9e2c'],
      ['Ca', '#3eff7a'],
      ['Mg', '#38f0d8'],
    ];
    bg.font = '700 21px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 26 + idx * 76;
      bg.beginPath();
      bg.arc(bx, 36, 10, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#eef6ff';
      bg.fillText(sym, bx + 14, 37);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.68, 0.22),
      reg(
        'muscle_atoms',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.80,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -1.04, 0.14);
    grp.add(botLbl);

    SITES.muscle_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // 5. 6 Opaque-Discard 4x4 Atlas MOL Flow Species
  //    ca_release, ca_reuptake, atp_fuel, adp_pi, t_depol, o2_myoglobin
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    ca_release: ['Ca²⁺ Release (RyR1 → TnC)', '#44ff88', 0, 0.22],
    ca_reuptake: ['Ca²⁺ Reuptake (SERCA1a → SR)', '#38e6ff', 1, 0.22],
    atp_fuel: ['Mg²⁺·ATP Fuel (Myosin/SERCA)', '#ffd648', 2, 0.23],
    adp_pi: ['ADP + Pᵢ Power-Stroke Burst', '#ff864c', 3, 0.22],
    t_depol: ['T-Tubule Depolarization Wave', '#b47eff', 4, 0.23],
    o2_myoglobin: ['O₂ / Myoglobin Aerobic Supply', '#ff5c86', 5, 0.22],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0e131c';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.04, ...P(0.5, 0.5), s * 0.62);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.50).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const drawBalls = list => {
      g.strokeStyle = ink;
      g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawPoly = (pts, close = true, w = 0.10) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      if (close) g.closePath();
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // ca_release: glowing Ca2+ divalent ion sphere with twin plus sparks
        drawBalls([[0.50, 0.50, 0.30]]);
        drawPoly([[0.32, 0.50], [0.68, 0.50]], false, 0.08);
        drawPoly([[0.50, 0.32], [0.50, 0.68]], false, 0.08);
        break;
      case 1: // ca_reuptake: upward return chevron + Ca2+ sphere
        drawPoly([[0.26, 0.56], [0.50, 0.24], [0.74, 0.56]], false, 0.10);
        drawBalls([[0.50, 0.68, 0.18]]);
        break;
      case 2: { // atp_fuel: 3-phosphate radiant star burst
        const star = [];
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
          const r = i % 2 === 0 ? 0.38 : 0.20;
          star.push([0.5 + Math.cos(a) * r, 0.5 + Math.sin(a) * r]);
        }
        drawPoly(star, true, 0.10);
        drawBalls([[0.50, 0.50, 0.15]]);
        break;
      }
      case 3: // adp_pi: split diphosphate + cleaving Pi sphere
        drawBalls([[0.34, 0.56, 0.20], [0.68, 0.36, 0.17]]);
        drawPoly([[0.46, 0.48], [0.56, 0.42]], false, 0.08);
        break;
      case 4: // t_depol: crisp action-potential lightning chevron
        drawPoly([[0.58, 0.16], [0.30, 0.52], [0.54, 0.52], [0.40, 0.86]], false, 0.11);
        break;
      case 5: // o2_myoglobin: diatomic O=O crimson dumbbell
        drawPoly([[0.32, 0.50], [0.68, 0.50]], false, 0.12);
        drawBalls([[0.32, 0.50, 0.20], [0.68, 0.50, 0.20]]);
        break;
    }
    g.restore();
  }

  const ATLAS = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d')!;
    for (let k = 0; k < 6; k++) glyph(g, k, (k % 4) * 128 + 10, Math.floor(k / 4) * 128 + 10, 108, '#ffffff');
    return new THREE.CanvasTexture(c);
  })();

  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: { value: 1 }, uAtlas: { value: ATLAS } },
    vertexShader: `attribute float size, glyph, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vCol = icol; vG = glyph; vFade = fade;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mvPosition.z), 0., 54.);
        gl_Position = projectionMatrix * mvPosition;
      }`,
    fragmentShader: `uniform sampler2D uAtlas; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vec2 c = vec2(mod(vG, 4.), floor(vG / 4. + .01));
        vec4 t = texture2D(uAtlas, vec2((c.x + gl_PointCoord.x) / 4., 1. - (c.y + gl_PointCoord.y) / 4.));
        if (t.a < .5) discard;
        gl_FragColor = vec4(vCol * t.r * 1.25 * vFade, 1.);
      }`,
  });
  impMats.push(flowMat);

  const FLOW_MAX = 720;
  const fPos = new Float32Array(FLOW_MAX * 3);
  const fSize = new Float32Array(FLOW_MAX);
  const fCol = new Float32Array(FLOW_MAX * 3);
  const fGly = new Float32Array(FLOW_MAX);
  const fFade = new Float32Array(FLOW_MAX).fill(1);
  const flowGeo = new THREE.BufferGeometry();
  [['position', fPos, 3], ['size', fSize, 1], ['icol', fCol, 3], ['glyph', fGly, 1], ['fade', fFade, 1]].forEach(([nm, arr, d]) =>
    flowGeo.setAttribute(nm as string, new THREE.BufferAttribute(arr as Float32Array, d as number).setUsage(THREE.DynamicDrawUsage))
  );
  const flowPts = new THREE.Points(flowGeo, flowMat);
  flowPts.frustumCulled = false;
  cell.add(flowPts);

  // Additive reaction splash rings
  const FXTEX = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 62);
    [[0, 0], [0.58, 0.14], [0.80, 1], [1, 0]].forEach(([o, a]) => gr.addColorStop(o, `rgba(255,255,255,${a})`));
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();
  const fxMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: flowMat.uniforms.uBoost, uTex: { value: FXTEX } },
    vertexShader: `attribute float size, alpha; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vA;
      void main() { vCol = icol; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mv.z), 0., 64.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D uTex; varying vec3 vCol; varying float vA;
      void main() { float a = texture2D(uTex, gl_PointCoord).a * vA; if (a < .01) discard; gl_FragColor = vec4(vCol, a); }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  impMats.push(fxMat);
  const FX_MAX = 200;
  const xPos = new Float32Array(FX_MAX * 3), xSize = new Float32Array(FX_MAX), xCol = new Float32Array(FX_MAX * 3), xA = new Float32Array(FX_MAX);
  const fxGeo = new THREE.BufferGeometry();
  [['position', xPos, 3], ['size', xSize, 1], ['icol', xCol, 3], ['alpha', xA, 1]].forEach(([nm, arr, d]) =>
    fxGeo.setAttribute(nm as string, new THREE.BufferAttribute(arr as Float32Array, d as number).setUsage(THREE.DynamicDrawUsage))
  );
  const fxPts = new THREE.Points(fxGeo, fxMat);
  fxPts.frustumCulled = false;
  cell.add(fxPts);

  const live = [];
  const free: number[] = [];
  for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  const fx = [];
  const fxFree: number[] = [];
  for (let i = FX_MAX - 1; i >= 0; i--) fxFree.push(i);

  const FLOW_COUNTS: Record<string, number> = Object.fromEntries(Object.keys(MOL).map(k => [k, 0]));
  const molCountEls: Record<string, HTMLElement> = {};
  let flowsOn = true;
  let flowSpeed = 1;
  let fClock = 0;
  let animClock = 0;
  let counterSyncAcc = 0;
  let molHi: string | null = null;
  let hi: string | null = null;

  function splash(at: THREE.Vector3, hex: string, s = 0.34) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.58, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 2.6, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop()!;
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.048, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const STREAM_TIMERS = [
    // 1. RyR1 Ca2+ Release Plumes flooding from Triads onto Sarcomere Troponin switches!
    {
      rate: 3.4,
      acc: 0.6,
      go: () => {
        if (mode === 'relaxed_22um') return;
        if (mode === 'ca_trigger' && contractionFactor < 0.22) return;
        const left = rand() < 0.58;
        const src = (left ? TRIAD_L : TRIAD_R).clone().add(V(rr(-0.34, 0.34), rr(-0.18, 0.14), rr(0.05, 0.32)));
        const dstX = left ? rr(-2.35, -0.55) : rr(0.55, 2.35);
        const dstY = SARCO_Y + rr(-0.55, 0.55);
        const mid = src.clone().lerp(V(dstX, dstY, SARCO_Z + 0.30), 0.5).add(V(rr(-0.22, 0.22), 0.15, 0.18));
        const dst = V(dstX, dstY, SARCO_Z + 0.28);
        emitFlow('ca_release', [src, mid, dst], ['ryr1_channel', 'troponin_tropo', 'sr_network', 'muscle_atoms'], 2.1, () =>
          splash(dst, '#44ff88', 0.34)
        );
      },
    },
    // 2. SERCA1a Ca2+ Reuptake pumping emerald/aqua Ca2+ from sarcoplasm back into SR sleeves!
    {
      rate: 2.8,
      acc: 0.5,
      go: () => {
        if (mode === 'contracted_16um' && rand() < 0.65) return;
        const x = rr(-2.0, 2.0);
        const src = V(x, SARCO_Y + rr(0.35, 0.85), SARCO_Z + rr(0.05, 0.28));
        const dst = V(x + rr(-0.35, 0.35), TRIAD_L.y + rr(0.05, 0.36), rr(0.45, 0.88));
        const mid = src.clone().lerp(dst, 0.5).add(V(0, 0.10, 0.16));
        emitFlow('ca_reuptake', [src, mid, dst], ['serca1a_pump', 'sr_network', 'troponin_tropo'], 2.3, () =>
          splash(dst, '#38e6ff', 0.32)
        );
      },
    },
    // 3. Mg2+-ATP Fuel flowing from intermyofibrillar mitochondria to Myosin-II S1 & SERCA1a!
    {
      rate: 2.8,
      acc: 0.5,
      go: () => {
        const toSerca = mode === 'relaxed_22um' || rand() < 0.32;
        const fromLeft = rand() < 0.5;
        const src = V(fromLeft ? -4.85 : 4.85, FIBER_Y + rr(-0.7, 0.5), 0.40);
        const dst = toSerca
          ? V(rr(-1.8, 1.8), TRIAD_L.y + 0.18, 0.72)
          : V(rr(-2.1, 2.1), SARCO_Y + rr(-0.42, 0.42), SARCO_Z + 0.30);
        const mid = src.clone().lerp(dst, 0.5).add(V(0, rr(-0.25, 0.35), 0.26));
        emitFlow('atp_fuel', [src, mid, dst], ['myosin_head', 'serca1a_pump', 'myofibril', 'muscle_atoms'], 2.5, () =>
          splash(dst, '#ffd648', 0.34)
        );
      },
    },
    // 4. ADP + Pi Power-Stroke Release bursting off pivoting Myosin-II S1 motor heads!
    {
      rate: 2.6,
      acc: 0.4,
      go: () => {
        if (mode === 'relaxed_22um') return;
        const x = (rand() < 0.5 ? -1 : 1) * rr(0.50, 2.25);
        const src = V(x, SARCO_Y + rr(-0.45, 0.45), SARCO_Z + 0.30);
        const dst = src.clone().add(V(rr(-0.65, 0.65), rr(-0.65, 0.65), 0.45));
        emitFlow('adp_pi', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.12, 0.1)), dst], ['myosin_head', 'actin_thin', 'muscle_atoms'], 1.9, () =>
          splash(src, '#ff864c', 0.30)
        );
      },
    },
    // 5. Action Potential Depolarization Waves sweeping across Sarcolemma and diving down T-Tubules!
    {
      rate: 2.4,
      acc: 0.4,
      go: () => {
        if (mode === 'relaxed_22um') return;
        const tx = rand() < 0.55 ? -2.22 : 2.22;
        const p0 = V(tx + (tx < 0 ? -1.8 : 1.8), FIBER_Y + FIBER_R * 0.96, 0.30);
        const p1 = V(tx, FIBER_Y + FIBER_R * 0.94, 0.28);
        const p2 = V(tx, TRIAD_L.y + 0.08, 0.60);
        const p3 = V(tx, SARCO_Y + 0.85, 0.72);
        emitFlow('t_depol', [p0, p1, p2, p3], ['sarcolemma', 't_tubule', 'ryr1_channel'], 1.8, () =>
          splash(p2, '#b47eff', 0.34)
        );
      },
    },
    // 6. O2 / Myoglobin Aerobic Supply feeding skeletal myofiber mitochondria!
    {
      rate: 1.9,
      acc: 0.3,
      go: () => {
        const left = rand() < 0.5;
        const p0 = V(left ? -6.4 : 6.4, FIBER_Y + rr(-1.4, 1.6), 0.55);
        const p1 = V(left ? -5.6 : 5.6, FIBER_Y + rr(-0.8, 0.9), 0.48);
        const p2 = V(left ? -4.9 : 4.9, FIBER_Y + rr(-0.6, 0.6), 0.34);
        emitFlow('o2_myoglobin', [p0, p1, p2], ['sarcolemma', 'myofibril'], 2.4);
      },
    },
  ];

  function syncFlowCounterUI() {
    Object.keys(MOL).forEach(k => {
      const el = molCountEls[k];
      if (el) el.textContent = String(FLOW_COUNTS[k] ?? 0);
    });
  }

  function updateFlows(dt: number) {
    fClock += dt;
    if (dt > 0) {
      STREAM_TIMERS.forEach(s => {
        s.acc += dt * s.rate;
        while (s.acc >= 1) {
          s.acc--;
          s.go();
        }
      });
    }
    const w = fClock;
    const q = V();
    const anyHi = molHi || hi;
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k];
      const base = MOL[p.type][3] * 1.36;
      p.t += dt / p.dur;
      if (p.t >= 1) {
        p.onDone?.();
        live[k] = live[live.length - 1];
        live.pop();
        free.push(p.i);
        fSize[p.i] = 0;
        continue;
      }
      p.curve.getPointAt(p.t, q);
      const a = p.wob * Math.sin(Math.PI * p.t);
      q.x += a * Math.sin(w * 5.2 + p.ph);
      q.y += a * Math.cos(w * 4.4 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.8 + p.ph * 1.7);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.50 : 0.48) : 1);
      fFade[p.i] = anyHi && !lit ? 0.26 : 1;
    }
    for (let k = fx.length - 1; k >= 0; k--) {
      const f = fx[k];
      f.t += dt;
      const u = f.t / f.life;
      if (u >= 1) {
        fx[k] = fx[fx.length - 1];
        fx.pop();
        fxFree.push(f.i);
        xA[f.i] = xSize[f.i] = 0;
        continue;
      }
      xPos[f.i * 3] = f.at.x; xPos[f.i * 3 + 1] = f.at.y; xPos[f.i * 3 + 2] = f.at.z;
      xCol[f.i * 3] = f.c.r; xCol[f.i * 3 + 1] = f.c.g; xCol[f.i * 3 + 2] = f.c.b;
      xSize[f.i] = f.s * (0.35 + 1.25 * (1 - (1 - u) ** 3));
      xA[f.i] = (1 - u) ** 1.5;
    }
    flowGeo.attributes.position.needsUpdate = flowGeo.attributes.size.needsUpdate = flowGeo.attributes.fade.needsUpdate = true;
    fxGeo.attributes.position.needsUpdate = fxGeo.attributes.size.needsUpdate = fxGeo.attributes.icol.needsUpdate = fxGeo.attributes.alpha.needsUpdate = true;

    counterSyncAcc += dt;
    if (counterSyncAcc >= 0.20) {
      counterSyncAcc = 0;
      syncFlowCounterUI();
    }
  }

  // -------------------------------------------------------------------------
  // Live Sliding-Filament Biomechanical Animation
  //   - Z-discs + 6KN8 Actin thin filaments slide smoothly (2.20 um <-> 1.60 um)
  //   - I-bands & H-zone dynamically narrow while A-band stays strictly 1.60 um
  //   - Titin helical springs compress/stretch elastically
  //   - Tropomyosin physically rolls ~35 deg on Ca2+ binding to uncover actin
  //   - 2MYS Myosin-II S1 lever-arm heads execute continuous power strokes!
  // -------------------------------------------------------------------------
  const sarcoLenEl = document.getElementById('sarcoLen');
  const sarcoBarEl = document.getElementById('sarcoBar');
  const sarcoSubEl = document.getElementById('sarcoSub');
  const sarcoCardEl = document.getElementById('sarcomereCard');

  function applySarcomereKinematics(cf: number, clock: number) {
    contractionFactor = Math.max(0, Math.min(1, cf));
    sarcomereLengthUm = +(2.20 - 0.60 * contractionFactor).toFixed(2);

    const halfSarco = HALF_SARCO_RELAX - (HALF_SARCO_RELAX - HALF_SARCO_CONTR) * contractionFactor;

    // 1. Slide Left & Right Z-discs + 14 Thin F-Actin (6KN8) Filaments inward/outward!
    leftSlideGroup.position.x = -halfSarco;
    rightSlideGroup.position.x = halfSarco;

    // Slide Z-disc micro-plaques cleanly with their Z-discs
    if (zLeftPlaque) zLeftPlaque.position.x = -halfSarco;
    if (zRightPlaque) zRightPlaque.position.x = halfSarco;

    // Sync background myofibril Z-lines gently so the whole fiber visibly contracts!
    bgMyofibrilZLines.forEach(bz => {
      bz.mesh.position.x = bz.sign * (bz.baseOffset - 0.42 * contractionFactor);
    });

    // 2. Dynamically resize I-Bands & H-Zone while A-Band remains 100% CONSTANT!
    const iWidth = Math.max(0.08, halfSarco - HALF_A);
    const iMid = HALF_A + iWidth * 0.5;
    if (iBandLeftBar) {
      iBandLeftBar.position.x = -iMid;
      iBandLeftBar.scale.x = iWidth;
    }
    if (iBandRightBar) {
      iBandRightBar.position.x = iMid;
      iBandRightBar.scale.x = iWidth;
    }
    if (iBandLeftCurtain) {
      iBandLeftCurtain.position.x = -iMid;
      iBandLeftCurtain.scale.x = iWidth;
    }
    if (iBandRightCurtain) {
      iBandRightCurtain.position.x = iMid;
      iBandRightCurtain.scale.x = iWidth;
    }

    const hHalf = Math.max(0.16, halfSarco - ACTIN_LEN);
    if (hZoneBar) hZoneBar.scale.x = hHalf * 2;
    if (hZoneCurtain) hZoneCurtain.scale.x = hHalf * 2;

    // 3. Compress & Stretch Elastic Titin Helical Springs between thick tips (+-2.48) and Z-discs (+-halfSarco)!
    const titinSpan = Math.max(0.28, halfSarco - TITIN_INNER_X);
    titinSpringsLeft.forEach(s => { s.scale.x = titinSpan; });
    titinSpringsRight.forEach(s => { s.scale.x = titinSpan; });

    // 4. Ca2+ Troponin Binding & Azimuthal Tropomyosin Roll (~36 deg open when Ca2+ active!)
    const caLevel = mode === 'relaxed_22um' ? 0.0 : mode === 'contracted_16um' ? 1.0 : Math.min(1, contractionFactor * 1.25);
    const rollAngle = caLevel * 0.64; // ~36.6 deg azimuthal roll exposing myosin binding sites
    tropoRollGroups.forEach(tr => {
      tr.grp.rotation.x = tr.dir * rollAngle;
    });
    const caScale = caLevel > 0.08 ? 0.55 + 0.55 * caLevel : 0.001;
    troponinCaBeads.forEach(b => {
      b.visible = caLevel > 0.08;
      b.scale.setScalar(caScale);
    });
    if (modeRefs.actinBindMat) {
      modeRefs.actinBindMat.emissiveIntensity = 0.10 + 0.95 * caLevel;
    }

    // 5. Physically Pivoting Myosin-II S1 (2MYS) Lever-Arm Cross-Bridge Power Strokes!
    const strokeRate = mode === 'contracted_16um' ? 4.8 : mode === 'ca_trigger' ? 3.8 : 0.0;
    articulatedMyosins.forEach(am => {
      if (caLevel < 0.08) {
        // Relaxed state: detached, tucked smoothly back toward thick filament shaft
        am.pivot.rotation.z = am.side * am.dirY * 0.62;
        am.pivot.rotation.x = am.baseTwistX;
        if (am.atpSpark) am.atpSpark.visible = false;
      } else {
        // Active power-stroke sawtooth/wave: cocked outward -> engage actin -> pull inward toward M-line -> detach!
        const cyc = (clock * strokeRate + am.phase) % (Math.PI * 2);
        const u = cyc / (Math.PI * 2); // 0..1 cycle
        // u in [0, 0.55]: engaged power stroke sweeping inward toward M-line; [0.55, 1]: ATP detach & recovery cock
        let leverAngle: number;
        let reachLift: number;
        if (u < 0.55) {
          const p = u / 0.55;
          leverAngle = 0.44 - 0.92 * p; // swings ~53 deg inward toward M-line!
          reachLift = 0.06 * Math.sin(p * Math.PI);
        } else {
          const p = (u - 0.55) / 0.45;
          leverAngle = -0.48 + 0.92 * p; // recovery stroke back to cocked angle
          reachLift = -0.14 * Math.sin(p * Math.PI); // detaches from actin during recovery
        }
        am.pivot.rotation.z = am.side * am.dirY * leverAngle;
        am.pivot.rotation.x = am.baseTwistX + reachLift * am.dirY;
        if (am.atpSpark) {
          am.atpSpark.visible = u > 0.42 && u < 0.72;
          const spScale = 0.75 + 0.55 * Math.sin(((u - 0.42) / 0.30) * Math.PI);
          am.atpSpark.scale.setScalar(Math.max(0.01, spScale));
        }
      }
    });

    // 6. Live T-Tubule Action Potential Sparks & Atomic Lens Halos
    const apActive = mode !== 'relaxed_22um';
    apSparks.forEach(sp => {
      sp.mesh.visible = apActive;
      if (apActive) {
        const u = (clock * 0.68 + sp.phase) % 1;
        sp.mesh.position.copy(sp.curve.getPointAt(u));
      }
    });
    if (caEfHaloMesh) {
      const p = 1 + (0.06 + 0.10 * caLevel) * Math.sin(clock * 4.2);
      caEfHaloMesh.scale.setScalar(p);
    }
    if (atpCleavageGlow) {
      const p = 1 + (apActive ? 0.15 : 0.05) * Math.sin(clock * 4.6);
      atpCleavageGlow.scale.setScalar(p);
    }

    // 7. Live #flows Sarcomere Readout Card update
    if (sarcoLenEl) {
      const stateTag =
        mode === 'contracted_16um'
          ? 'Contracted'
          : mode === 'relaxed_22um'
            ? 'Relaxed'
            : contractionFactor > 0.65
              ? 'Contracting'
              : contractionFactor < 0.35
                ? 'Relaxing'
                : 'Sliding';
      sarcoLenEl.textContent = `${sarcomereLengthUm.toFixed(2)} µm · ${stateTag}`;
    }
    if (sarcoBarEl) {
      // Bar width shrinks cleanly from 96% (2.20 um) to 64% (1.60 um)!
      sarcoBarEl.style.width = `${(96 - 32 * contractionFactor).toFixed(1)}%`;
    }
  }

  function updateMuscleAnimation(dt: number) {
    animClock += dt;
    let targetCf: number;
    if (mode === 'contracted_16um') targetCf = 1.0;
    else if (mode === 'relaxed_22um') targetCf = 0.0;
    else {
      // Smooth continuous physiological twitch cycle between 2.20 um (0) and 1.60 um (1)
      targetCf = 0.5 - 0.5 * Math.cos(animClock * 1.15);
    }
    applySarcomereKinematics(targetCf, animClock);
  }

  // -------------------------------------------------------------------------
  // Live 3-State Contraction Mode Toggle (#modeBtn + window.__cell.setMode)
  //   - 'ca_trigger':      Live Ca2+ Cycle (2.20 <-> 1.60 um)
  //   - 'contracted_16um': Locked Contracted (1.60 um Peak Force)
  //   - 'relaxed_22um':    Locked Relaxed (2.20 um Rest, SERCA1a active)
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;

    const ryrOpen = mode !== 'relaxed_22um';
    const sercaHigh = mode === 'relaxed_22um';

    if (modeRefs.ryrMat) modeRefs.ryrMat.emissiveIntensity = mode === 'contracted_16um' ? 0.68 : ryrOpen ? 0.46 : 0.08;
    if (modeRefs.ryrPoreMat) modeRefs.ryrPoreMat.emissiveIntensity = mode === 'contracted_16um' ? 1.45 : ryrOpen ? 0.96 : 0.08;
    if (modeRefs.sercaMat) modeRefs.sercaMat.emissiveIntensity = sercaHigh ? 0.66 : mode === 'ca_trigger' ? 0.36 : 0.14;
    if (modeRefs.dhprMat) modeRefs.dhprMat.emissiveIntensity = ryrOpen ? 0.64 : 0.14;
    if (modeRefs.srStoreMat) modeRefs.srStoreMat.opacity = sercaHigh ? 0.52 : mode === 'contracted_16um' ? 0.18 : 0.36;
    if (modeRefs.myosinHeroMat) modeRefs.myosinHeroMat.emissiveIntensity = mode === 'contracted_16um' ? 0.46 : ryrOpen ? 0.34 : 0.18;

    // Immediately snap sarcomere length to target on locked modes so screenshots & UI react on frame 1!
    const snapCf = mode === 'contracted_16um' ? 1.0 : mode === 'relaxed_22um' ? 0.0 : 0.5 - 0.5 * Math.cos(animClock * 1.15);
    applySarcomereKinematics(snapCf, animClock);

    // Flush incompatible particles immediately on mode toggle
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k];
      const drop = mode === 'relaxed_22um' && (p.type === 'ca_release' || p.type === 'adp_pi' || p.type === 't_depol');
      if (drop) {
        live[k] = live[live.length - 1];
        live.pop();
        free.push(p.i);
        fSize[p.i] = 0;
      }
    }
    flowGeo.attributes.size.needsUpdate = true;

    // Sync HUD button, card & subtitle
    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.remove('contracted_16um', 'relaxed_22um');
      if (mode !== 'ca_trigger') modeBtn.classList.add(mode);
    }
    if (sarcoCardEl) {
      sarcoCardEl.classList.remove('contracted_16um', 'relaxed_22um');
      if (mode !== 'ca_trigger') sarcoCardEl.classList.add(mode);
    }
    if (mode === 'ca_trigger') {
      if (sarcoSubEl) sarcoSubEl.textContent = 'Live Ca²⁺ cycle · A-band 1.60 µm const · H-zone & I-band narrow';
      if (subEl) subEl.textContent = 'Cutaway multinucleated myofiber · T-tubule / SR Triad (RyR1 & SERCA1a 1SU4) · Live 2.20 µm ↔ 1.60 µm Myosin-II (2MYS) & Actin–Tropomyosin (6KN8)';
    } else if (mode === 'contracted_16um') {
      if (sarcoSubEl) sarcoSubEl.textContent = 'Peak Ca²⁺ · Z-discs drawn inward · H-zone & I-band minimal · A-band 1.60 µm';
      if (subEl) subEl.textContent = 'Contracted (1.60 µm) · RyR1 Ca²⁺ flood twists Troponin · Tropomyosin open · Myosin-II S1 (2MYS) power-stroking · Titin compressed';
    } else {
      if (sarcoSubEl) sarcoSubEl.textContent = 'Ca²⁺ cleared by SERCA1a · Tropomyosin blocks actin · H-zone & I-band wide';
      if (subEl) subEl.textContent = 'Relaxed (2.20 µm) · SERCA1a (1SU4) pumps Ca²⁺ back into SR · Tropomyosin covers actin sites · Myosin-II detached · Titin elongated';
    }

    if (!silent && EMBED) say();
  }

  if (modeBtn) modeBtn.onclick = () => setMode();

  // -------------------------------------------------------------------------
  // Resize, Zero-Scrollbar Legend, Flows UI & Interactive Highlighting
  // -------------------------------------------------------------------------
  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    bloom.resolution.set(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    lens.uniforms.uRes.value.set(innerWidth, innerHeight);
    const s = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan((camera.fov * Math.PI) / 360));
    impMats.forEach(m => { if (m.uniforms.uScale) m.uniforms.uScale.value = s; });
  }
  addEventListener('resize', resize);

  const legend = document.getElementById('legend')!;
  PARTS.forEach(([k, name, hex]) => {
    const it = document.createElement('div');
    it.className = 'it';
    const sw = document.createElement('span');
    sw.className = 'sw';
    sw.style.background = hex;
    const t = document.createElement('span');
    t.textContent = name;
    it.append(sw, t);
    legend.append(it);
    it.onmouseenter = () => setHi(k);
    it.onmouseleave = () => setHi(null);
  });
  const keyEl = document.createElement('div');
  keyEl.className = 'key';
  const CPK = [
    ['C', '#94a4ba'],
    ['H', '#f2f8ff'],
    ['N', '#4c98ff'],
    ['O', '#ff5064'],
    ['P', '#ff9e2c'],
    ['Ca', '#3eff7a'],
    ['Mg', '#38f0d8'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:#ff4c6a"></span>Myosin (2MYS) <span class="bar" style="background:#4cc8ff;margin-left:4px"></span>Actin (6KN8) <span class="bar" style="background:#38e8d8;margin-left:4px"></span>SR</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip')!;
  const TIP0 = 'Excitation–Contraction Coupling: T-tubule action potentials open RyR1 Ca²⁺ channels; Ca²⁺ twists Troponin, rolling Tropomyosin off F-actin (6KN8) so Myosin-II S1 (2MYS) pulls Z-discs from 2.20 µm to 1.60 µm until SERCA1a (1SU4) pumps Ca²⁺ back.';
  tipBox.textContent = TIP0;

  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div');
    it.className = 'mol';
    const cv = document.createElement('canvas');
    cv.width = cv.height = 44;
    glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
    const t = document.createElement('span');
    t.className = 'mol-name';
    t.textContent = name;
    const cnt = document.createElement('span');
    cnt.className = 'mol-cnt';
    cnt.textContent = '0';
    molCountEls[k] = cnt;
    it.append(cv, t, cnt);
    document.getElementById('mols')!.append(it);
    it.onmouseenter = () => { molHi = k; };
    it.onmouseleave = () => { molHi = null; };
  });

  function showInfo(k: string | null) {
    const inf = k && INFO[k];
    tipBox.replaceChildren();
    if (!inf) {
      tipBox.textContent = TIP0;
      return;
    }
    const b = document.createElement('b');
    b.textContent = PARTS.find(p => p[0] === k)?.[1] ?? k;
    tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Role: ${inf[1]}`);
  }

  function setHi(k: string | null) {
    if (hi && REG[hi]) {
      REG[hi].mats.forEach(m => {
        if (m.userData.e0 && 'emissive' in m) (m as THREE.MeshStandardMaterial).emissive.copy(m.userData.e0);
        if (m.userData.i0 !== undefined && 'emissiveIntensity' in m) (m as THREE.MeshStandardMaterial).emissiveIntensity = m.userData.i0;
      });
      REG[hi].imp.forEach(m => { if (m.uniforms?.uHi) m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) {
      REG[hi].mats.forEach(m => {
        if ('emissive' in m) {
          m.userData.e0 ??= (m as THREE.MeshStandardMaterial).emissive.clone();
          m.userData.i0 ??= (m as THREE.MeshStandardMaterial).emissiveIntensity;
        }
      });
    }
    showInfo(hi);
  }
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#7ee8ff');

  // -------------------------------------------------------------------------
  // Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
  // -------------------------------------------------------------------------
  let motion = true;
  let sway = 0;
  let last = performance.now();

  document.getElementById('view')!.onclick = e => {
    view = (view + 1) % VIEWS.length;
    const [name, p, t] = VIEWS[view];
    curView = name;
    camera.position.copy(cell.localToWorld(p.clone()));
    controls.target.copy(cell.localToWorld(t.clone()));
    (e.target as HTMLElement).textContent = `View: ${name}`;
  };
  document.getElementById('look')!.onclick = e => {
    organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length];
    applyLook();
    (e.target as HTMLElement).textContent = `Membrane: ${organelleLook}`;
  };
  document.getElementById('cut')!.onclick = e => {
    cutOn = !cutOn;
    cutRimGroup.visible = cutOn;
    (e.target as HTMLElement).textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow')!.onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = fxPts.visible = flowsOn;
    (e.target as HTMLElement).textContent = `Flows: ${flowsOn ? 'on' : 'off'}`;
  };
  const speed = document.getElementById('speed') as HTMLInputElement;
  const spd = document.getElementById('spd')!;
  speed.oninput = () => {
    flowSpeed = 2 ** +speed.value;
    spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`;
  };
  speed.ondblclick = () => { speed.value = '0'; speed.oninput!(new Event('input')); };
  document.getElementById('motion')!.onclick = e => {
    motion = !motion;
    (e.target as HTMLElement).textContent = motion ? 'Pause' : 'Play';
  };
  document.getElementById('snap')!.onclick = () => {
    composer.render();
    const a = document.createElement('a');
    a.download = `muscle-${mode}-realistic.png`;
    a.href = renderer.domElement.toDataURL('image/png');
    a.click();
  };

  const held = new Set<string>();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !(e.target as HTMLElement)?.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k);
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), stepVec = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  controls.enableRotate = false;
  let lookFrom: [number, number] | null = null;
  let downAt: [number, number] | null = null;
  renderer.domElement.addEventListener('pointerdown', e => {
    if (e.button === 0) {
      lookFrom = [e.clientX, e.clientY];
      downAt = [e.clientX, e.clientY];
      renderer.domElement.setPointerCapture(e.pointerId);
    }
  });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!lookFrom) return;
    const dx = e.clientX - lookFrom[0], dy = e.clientY - lookFrom[1];
    lookFrom = [e.clientX, e.clientY];
    if (tour.on) {
      tour.yaw = Math.min(0.44, Math.max(-0.44, tour.yaw - dx * 0.002));
      tour.pitch = Math.min(0.44, Math.max(-0.44, tour.pitch + dy * 0.002));
      return;
    }
    aim.setFromVector3(controls.target.clone().sub(camera.position));
    aim.theta -= dx * 0.002;
    aim.phi = Math.min(Math.PI - 0.05, Math.max(0.05, aim.phi + dy * 0.002));
    controls.target.copy(camera.position).add(V().setFromSpherical(aim));
  });
  for (const ev of ['pointerup', 'pointercancel']) {
    renderer.domElement.addEventListener(ev, e => {
      if (ev === 'pointerup' && downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) < 4) {
        ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
        ray.setFromCamera(ndc, camera);
        const map = OBJS_BY_MAT();
        const hit = ray
          .intersectObjects(cell.children, true)
          .find(h => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has((h.object as THREE.Mesh).material as THREE.Material));
        if (hit) {
          const k = map.get((hit.object as THREE.Mesh).material as THREE.Material);
          setHi(k ?? null);
          if (EMBED && k) toExplorer({ type: 'pick', key: k });
        }
      }
      lookFrom = downAt = null;
    });
  }

  function freeMove(dt: number) {
    if (!held.size || tour.on) return;
    camera.getWorldDirection(fwd);
    side.crossVectors(fwd, camera.up).normalize();
    stepVec
      .set(0, 0, 0)
      .addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s')))
      .addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (stepVec.lengthSq() < 1e-6) return;
    stepVec.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * 0.5));
    camera.position.add(stepVec);
    controls.target.add(stepVec);
  }

  const tour = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = (x: number) => x * x * x * (x * (x * 6 - 15) + 10);

  function poseOf(m) {
    if (m.view) {
      const v = VIEWS.find(x => x[0] === m.view);
      return v && { p: v[1].clone(), t: v[2].clone() };
    }
    const partKey = m.part || m.focus;
    if (partKey) {
      const f = focusOf(partKey);
      return f && {
        p: f.c.clone().addScaledVector(f.dir, ((m.dist ?? 1) * f.r) / Math.sin((camera.fov * Math.PI) / 360)),
        t: f.c.clone(),
      };
    }
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.0, -0.44, 0.0])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      const vb = document.getElementById('view');
      if (vb) vb.textContent = `View: ${curView}`;
    }
    cell.updateMatrixWorld();
    tour.from = {
      p: cell.worldToLocal(camera.position.clone()),
      t: cell.worldToLocal(controls.target.clone()),
    };
    tour.to = to;
    Object.assign(tour, { on: true, t: m.dur > 0 ? 0 : 1, dur: m.dur || 1, seq: m.seq ?? 0, orbit: m.orbit ?? 0, sent: false });
    controls.enabled = false;
    held.clear();
    return true;
  }

  function freeCamera() {
    tour.on = false;
    tour.yaw = tour.pitch = 0;
    controls.enabled = true;
  }

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.0, -0.44, 0.0);
  function tourFrame(dt: number) {
    if (!tour.on) return;
    const { from, to } = tour;
    if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
    else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, ((tour.orbit * Math.PI) / 180) * dt).add(to.t);
    const e = smoother(tour.t);
    ft.lerpVectors(from.t, to.t, e);
    qa.copy(from.p).sub(C0);
    qb.copy(to.p).sub(C0);
    const ra = Math.max(0.05, qa.length()), rb = Math.max(0.05, qb.length());
    qa.normalize();
    qb.normalize();
    const ang = Math.acos(Math.min(1, Math.max(-1, qa.dot(qb))));
    if (ang < 1e-3 || ang > 3.1) fp.lerpVectors(qa, qb, e).normalize();
    else fp.copy(qa).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(qb, Math.sin(e * ang)).divideScalar(Math.sin(ang));
    fp.multiplyScalar(Math.pow(ra, 1 - e) * Math.pow(rb, e) * (1 + Math.min(0.45, ang * 0.28) * Math.sin(Math.PI * e))).add(C0);
    if (!lookFrom) {
      const k = Math.exp(-dt / 0.2);
      tour.yaw *= k;
      tour.pitch *= k;
    }
    look.copy(ft).sub(fp);
    if (tour.yaw || tour.pitch) {
      right.crossVectors(look, UP).normalize();
      look.applyAxisAngle(UP, tour.yaw).applyAxisAngle(right, -tour.pitch);
    }
    camera.position.copy(fp);
    cell.localToWorld(camera.position);
    controls.target.copy(fp).add(look);
    cell.localToWorld(controls.target);
    camera.lookAt(controls.target);
    if (tour.t >= 1 && !tour.sent) {
      tour.sent = true;
      if (EMBED) toExplorer({ type: 'arrived', seq: tour.seq });
    }
  }

  // Exact tag coordinates for ALL 18 parts across ALL 5 views
  const POINTS: Record<string, Record<string, THREE.Vector3>> = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const halfMid = 0.5 * (HALF_SARCO_RELAX + HALF_SARCO_CONTR);
    const base: Record<string, THREE.Vector3> = {
      sarcolemma: V(-5.35, FIBER_Y + 2.52, 0.36),
      peripheral_nuclei: V(-4.35, FIBER_Y + 2.18, 0.12),
      t_tubule: TRIAD_L.clone().add(V(0, 0.36, 0.12)),
      sr_network: V(0.0, TRIAD_L.y + 0.34, 0.72),
      ryr1_channel: TRIAD_L.clone().add(V(-0.24, -0.02, 0.14)),
      serca1a_pump: V(-0.92, TRIAD_L.y + 0.32, 0.80),
      myofibril: V(5.15, FIBER_Y + 0.28, 0.16),
      z_disc: V(-halfMid, SARCO_Y, SARCO_Z + 0.30),
      i_band: V(-3.18, SARCO_Y + 0.42, SARCO_Z + 0.24),
      a_band: V(0.0, SARCO_Y + 1.38, SARCO_Z + 0.24),
      h_zone: V(0.0, SARCO_Y + 0.22, SARCO_Z + 0.26),
      m_line: V(0.0, SARCO_Y - 0.12, SARCO_Z + 0.30),
      titin_spring: V(-3.08, SARCO_Y - 0.56, SARCO_Z + 0.20),
      myosin_thick: V(-1.45, SARCO_Y + 0.00, SARCO_Z + 0.28),
      myosin_head: V(-1.26, SARCO_Y + 0.16, SARCO_Z + 0.28),
      actin_thin: V(-1.68, SARCO_Y + 0.28, SARCO_Z + 0.28),
      troponin_tropo: V(-1.12, SARCO_Y + 0.32, SARCO_Z + 0.32),
      muscle_atoms: ATOM_C.clone(),
    };
    let P = { ...base };
    if (vName === 'triad_sr') {
      P = {
        ...base,
        t_tubule: TRIAD_L.clone().add(V(0.0, 0.32, 0.10)),
        sr_network: TRIAD_L.clone().add(V(0.56, 0.14, 0.16)),
        ryr1_channel: TRIAD_L.clone().add(V(-0.24, -0.04, 0.16)),
        serca1a_pump: TRIAD_L.clone().add(V(0.96, 0.24, 0.24)),
      };
    } else if (vName === 'sarcomere') {
      P = {
        ...base,
        z_disc: V(-halfMid, SARCO_Y + 0.12, SARCO_Z + 0.30),
        i_band: V(3.18, SARCO_Y + 0.36, SARCO_Z + 0.24),
        a_band: V(0.0, SARCO_Y + 1.38, SARCO_Z + 0.26),
        h_zone: V(0.0, SARCO_Y + 0.48, SARCO_Z + 0.26),
        m_line: V(0.0, SARCO_Y - 0.36, SARCO_Z + 0.30),
        titin_spring: V(3.06, SARCO_Y - 0.56, SARCO_Z + 0.20),
      };
    } else if (vName === 'crossbridge') {
      P = {
        ...base,
        myosin_thick: V(-1.58, SARCO_Y + 0.00, SARCO_Z + 0.26),
        myosin_head: V(-1.26, SARCO_Y + 0.14, SARCO_Z + 0.30),
        actin_thin: V(-1.54, SARCO_Y + 0.28, SARCO_Z + 0.28),
        troponin_tropo: V(-1.02, SARCO_Y + 0.30, SARCO_Z + 0.32),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        muscle_atoms: ATOM_C.clone(),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS: Record<string, { c: THREE.Vector3; r: number; dir: THREE.Vector3 } | null> = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD: Record<string, number> = {
      sarcolemma: 4.2, peripheral_nuclei: 1.9, t_tubule: 1.8, sr_network: 2.2,
      ryr1_channel: 1.3, serca1a_pump: 1.5, myofibril: 2.8, z_disc: 1.8,
      i_band: 1.9, a_band: 3.1, h_zone: 1.8, m_line: 1.6, titin_spring: 1.7,
      myosin_thick: 2.0, myosin_head: 1.2, actin_thin: 1.6, troponin_tropo: 1.3,
      muscle_atoms: 2.0,
    };
    const DIRS: Record<string, THREE.Vector3> = {
      muscle_atoms: V(0.0, -0.02, 1.0).normalize(),
      peripheral_nuclei: V(-0.08, 0.14, 0.98).normalize(),
      ryr1_channel: V(-0.05, 0.16, 0.98).normalize(),
    };
    const dir = DIRS[k] ?? V(0.04, 0.10, 0.99).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 1.9, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    sarcolemma: ['peripheral_nuclei', 't_tubule', 'myofibril'],
    peripheral_nuclei: ['sarcolemma'],
    t_tubule: ['sarcolemma', 'sr_network', 'ryr1_channel'],
    sr_network: ['t_tubule', 'ryr1_channel', 'serca1a_pump'],
    ryr1_channel: ['t_tubule', 'sr_network', 'troponin_tropo'],
    serca1a_pump: ['sr_network', 'ryr1_channel'],
    myofibril: ['sarcolemma', 'z_disc', 'a_band', 'i_band'],
    z_disc: ['actin_thin', 'titin_spring', 'i_band'],
    i_band: ['z_disc', 'actin_thin', 'titin_spring'],
    a_band: ['myosin_thick', 'myosin_head', 'h_zone', 'm_line'],
    h_zone: ['a_band', 'm_line', 'myosin_thick'],
    m_line: ['myosin_thick', 'h_zone', 'titin_spring'],
    titin_spring: ['z_disc', 'myosin_thick', 'i_band'],
    myosin_thick: ['myosin_head', 'm_line', 'a_band', 'titin_spring'],
    myosin_head: ['myosin_thick', 'actin_thin', 'troponin_tropo'],
    actin_thin: ['z_disc', 'troponin_tropo', 'myosin_head'],
    troponin_tropo: ['actin_thin', 'myosin_head', 'ryr1_channel'],
  };
  const saved = new Map();
  const hidden: THREE.Object3D[] = [];
  let ghostArgs = null;
  let OBJS = null;
  let matMap: Map<THREE.Material, string> | null = null;

  function OBJS_BY_MAT() {
    if (!matMap) {
      matMap = new Map();
      Object.entries(REG).forEach(([k, r]) => {
        [...r.mats, ...r.imp].forEach(m => { if (!matMap!.has(m)) matMap!.set(m, k); });
      });
    }
    return matMap;
  }
  function objsOf() {
    const of = OBJS_BY_MAT();
    const out: Record<string, THREE.Object3D[]> = {};
    cell.traverse(o => {
      const m = (o as THREE.Mesh).material as THREE.Material | undefined;
      const k = m && of.get(m);
      if (k) (out[k] ??= []).push(o);
    });
    return out;
  }
  function ghost(keep = null, amount = 0.1, hide = false) {
    saved.forEach((v, m) => {
      Object.assign(m, v);
      if (m.uniforms?.uDim) m.uniforms.uDim.value = 1;
      m.needsUpdate = true;
    });
    saved.clear();
    hidden.forEach(o => { o.visible = true; });
    hidden.length = 0;
    ghostArgs = keep ? [keep, amount, hide] : null;
    if (!keep) return;
    const K = new Set(keep.flatMap(k => [k, ...(KIN[k] ?? [])]));
    Object.entries(REG).forEach(([k, r]) => {
      if (K.has(k)) return;
      if (hide) {
        (OBJS ??= objsOf())[k]?.forEach(o => { if (o.visible) { o.visible = false; hidden.push(o); } });
        return;
      }
      r.mats.forEach(m => {
        if (saved.has(m)) return;
        saved.set(m, {
          transparent: m.transparent,
          opacity: m.opacity,
          depthWrite: m.depthWrite,
          ...('transmission' in m && { transmission: (m as THREE.MeshPhysicalMaterial).transmission }),
        });
        m.transparent = true;
        m.opacity = Math.min(m.opacity, amount);
        m.depthWrite = false;
        if ('transmission' in m) (m as THREE.MeshPhysicalMaterial).transmission = 0;
        m.needsUpdate = true;
      });
      r.imp.forEach(m => {
        if (saved.has(m)) return;
        saved.set(m, { transparent: m.transparent, depthWrite: m.depthWrite });
        if (m.uniforms?.uDim) m.uniforms.uDim.value = amount * 0.5;
        m.transparent = true;
        m.depthWrite = false;
        m.needsUpdate = true;
      });
    });
  }

  let blinkT0: number | null = null;
  let blinkN = 3;
  function blink(k: string, n = 3) {
    setHi(k);
    if (hi) { blinkT0 = performance.now(); blinkN = n; }
  }
  const hiLevel = (now: number) => {
    if (blinkT0 === null) return 0.55 + 0.45 * Math.sin(now / 180);
    const t = (now - blinkT0) / 1000;
    return t < blinkN / 1.5 ? 0.5 - 0.5 * Math.cos(t * 3 * Math.PI) : 0.3 + 0.06 * Math.sin(now / 400);
  };

  function setState(m) {
    const g = ghostArgs;
    if (g) ghost(null);
    if (m.mode) setMode(m.mode, true);
    if (m.look) {
      const normalized = LOOKS.includes(m.look) ? m.look : m.look === 'glass' || m.look === 'xray' ? 'see-through' : 'gel';
      if (normalized !== organelleLook) {
        organelleLook = normalized;
        applyLook();
        const lb = document.getElementById('look');
        if (lb) lb.textContent = `Membrane: ${organelleLook}`;
      }
    }
    if (m.cut !== undefined && m.cut !== cutOn) {
      cutOn = m.cut;
      cutRimGroup.visible = cutOn;
      const cb = document.getElementById('cut');
      if (cb) cb.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
    }
    if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow')!.click();
    if (m.motion !== undefined) {
      motion = m.motion;
      const mb = document.getElementById('motion');
      if (mb) mb.textContent = motion ? 'Pause' : 'Play';
    }
    if (g) ghost(...g);
  }

  // -------------------------------------------------------------------------
  // Main Animation Loop
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 5.2) / 22));
      cell.rotation.y = 0.048 * Math.sin(sway * 0.11);
      updateMuscleAnimation(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.72, Math.min(1.78, camera.position.distanceTo(controls.target) / 16.0));
    cell.updateMatrixWorld();
    updateAllCuts();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) {
      const k = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach(m => {
        if ('emissive' in m) {
          (m as THREE.MeshStandardMaterial).emissive.copy(c);
          (m as THREE.MeshStandardMaterial).emissiveIntensity = 0.28 + 0.78 * k;
        }
      });
      REG[hi].imp.forEach(m => { if (m.uniforms?.uHi) m.uniforms.uHi.value = k; });
    }
    lens.uniforms.uTime.value = now / 1000;
    freeMove(dt);
    controls.update();
    tourFrame(dt);
    composer.render();
    if (EMBED) embedFrame();
  }

  function build() {
    const T = buildPdbTemplates();
    buildMyofiberAndNuclei(T);
    buildTriadAndSR(T);
    buildHeroSarcomere(T);
    buildAtomicMuscleLens();
    applySarcomereKinematics(0.45, 0.8);
    // Warm up live excitation-contraction streams so all 6 species are flowing on frame 1!
    for (let s = 0; s < 140; s++) updateFlows(0.05);
    syncFlowCounterUI();
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('ca_trigger', true);
    cell.updateMatrixWorld();
    updateAllCuts();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // Explorer ?embed postMessage Protocol & window.__cell Debug Contract
  // -------------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts: Array<THREE.Vector3 | null> = [];
  let tagSeq = 0;
  let sentReady = false;
  let sendTagsAlias = false;
  const scr = V();

  const say = () =>
    toExplorer({
      type: 'state',
      view: curView,
      mode,
      motion,
      look: organelleLook,
      cut: cutOn,
      flow: flowsOn,
      sarcomereLengthUm,
    });

  function embedFrame() {
    if (!sentReady) {
      sentReady = true;
      const mols = Object.entries(MOL).map(([k, [name, colour, g]]) => {
        const cv = document.createElement('canvas');
        cv.width = cv.height = 44;
        glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
        return [k, name, cv.toDataURL()];
      });
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]), mode });
    }
    const w = innerWidth, h = innerHeight;
    const pts = tagPts.map(p => {
      if (!p) return null;
      scr.copy(p);
      cell.localToWorld(scr);
      scr.project(camera);
      return [(scr.x * 0.5 + 0.5) * w, (-scr.y * 0.5 + 0.5) * h, scr.z < 1];
    });
    toExplorer({ type: 'pts', seq: tagSeq, pts });
    if (sendTagsAlias) toExplorer({ type: 'tags', seq: tagSeq, tags: pts, pts });
  }

  if (EMBED) {
    addEventListener('message', e => {
      const m = e.data;
      if (!m || m.to !== 'realistic-cell') return;
      if (m.cmd === 'view') {
        const v = VIEWS.findIndex(x => x[0] === m.view);
        if (v < 0) return;
        freeCamera();
        view = v;
        const [name, p, t] = VIEWS[v];
        curView = name;
        camera.position.copy(cell.localToWorld(p.clone()));
        controls.target.copy(cell.localToWorld(t.clone()));
        const vb = document.getElementById('view');
        if (vb) vb.textContent = `View: ${name}`;
        const P = pointsOf(m.view);
        tagPts = (m.points ?? m.tags ?? []).map(k => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'mode') setMode(m.mode, true);
      if (m.cmd === 'track' || m.cmd === 'tags') {
        const list = m.points ?? m.tags ?? [];
        tagPts = list.map(x => {
          const [v, k] = Array.isArray(x) ? x : [m.view ?? 'overview', x];
          return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k] ?? focusOf(k)?.c) ?? null;
        });
        tagSeq = m.seq;
        if (m.cmd === 'tags') {
          sendTagsAlias = true;
          embedFrame();
        }
      }
      if (m.cmd === 'fly' && !flyTo(m)) toExplorer({ type: 'arrived', seq: m.seq ?? 0, missed: true });
      if (m.cmd === 'free') freeCamera();
      if (m.cmd === 'blink') {
        if (m.key) blink(m.key, m.n ?? 3);
        else setHi(null);
      }
      if (m.cmd === 'ghost') ghost(m.keep || m.keys || null, m.amount ?? 0.1, !!m.hide);
      if (m.cmd === 'set' || m.cmd === 'state') setState(m);
      if (m.cmd === 'hi') {
        blinkT0 = null;
        setHi(m.key);
      }
      if (m.cmd === 'mol') molHi = m.key;
      if (m.cmd === 'motion') document.getElementById('motion')!.click();
      if (m.cmd === 'look') document.getElementById('look')!.click();
      if (m.cmd === 'cut') document.getElementById('cut')!.click();
      if (m.cmd === 'flow') document.getElementById('flow')!.click();
      if (m.cmd === 'speed') {
        speed.value = String(m.v);
        speed.oninput!(new Event('input'));
      }
      if (m.cmd === 'key') m.down ? held.add(m.key) : held.delete(m.key);
      if (m.cmd === 'snap') {
        composer.render();
        toExplorer({ type: 'snap', url: renderer.domElement.toDataURL('image/png') });
      }
      say();
    });
    addEventListener('keydown', e => {
      if (e.key === 'Escape') toExplorer({ type: 'key', key: 'Escape' });
      else if (
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        (/^(Arrow(Left|Right)|Page(Up|Down)| |Enter)$/.test(e.key) || /^[cnemr1-9]$/i.test(e.key))
      ) {
        if (e.key === ' ') e.preventDefault();
        toExplorer({ type: 'key', key: e.key, shift: e.shiftKey });
      }
    });
  }

  window.__cell = {
    renderer,
    composer,
    camera,
    controls,
    scene,
    cell,
    REG,
    shells,
    get placed() { return placed; },
    get curView() { return curView; },
    get mode() { return mode; },
    get sarcomereLengthUm() { return sarcomereLengthUm; },
    setMode,
    setHi,
    V,
    focusOf,
    flyTo,
    freeCamera,
    ghost,
    blink,
    setState,
    tour,
    setLook: k => {
      organelleLook = LOOKS.includes(k) ? k : k === 'glass' || k === 'xray' ? 'see-through' : 'gel';
      applyLook();
    },
    get sites() { return SITES; },
    get flows() { return live; },
    get procs() { return FLOW_COUNTS; },
    get views() { return VIEWS; },
    pointsOf,
    setMol: k => { molHi = k; },
    step: (dt = 0.05, n = 1) => {
      for (let i = 0; i < n; i++) {
        updateMuscleAnimation(dt);
        updateFlows(dt);
      }
      syncFlowCounterUI();
    },
    shot: () => {
      cell.updateMatrixWorld();
      updateAllCuts();
      composer.render();
      return renderer.domElement.toDataURL('image/png');
    },
  };
});
