// @ts-nocheck
import * as THREE from 'three';
import { PDB_IMMUNE_PHARMA } from '../molecules/pdb_immune_pharma.js';
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

runBiologyApp(20261125, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, fbm } = random;
  const { UP } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Spatial Choreography — Three-Arm Mucosal Immune Defense Battleground (30 um)
  // Cleanly framed between #legend (left), #flows (right), #hud (top) & #hint/#tools (bottom):
  //   Left Arm:   Innate Macrophage Phagocytosis  MACRO_C  = (-5.45, +1.05, -0.10)
  //               Engulfed E. coli                ECOLI_P  = (-3.12, +1.48, +0.46)
  //               Acidic Phagolysosome + ROS      PHAGO_C  = (-4.72, +0.34, +0.44)
  //               Surface MHC-II (1DLH) Crown     MHCII_P  = (-5.65, +3.04, +0.52)
  //   Center Arm: Humoral IgG Neutralization      VIRION_C = ( 0.00, +1.68, +0.16)
  //               Hero 7BZ5 Fab-RBD Clamp         LOCK_P   = ( 0.00, +0.22, +0.58)
  //               Blocked Host ACE2 (6M0J)        ACE2_P   = ( 0.00, -0.82, +0.56)
  //   Right Arm:  Cellular CD8+ T-Cell Synapse    CD8_C    = (+6.45, +1.28, -0.05)
  //               Infected Target Epithelial Cell TARGET_C = (+3.35, +0.32, +0.02)
  //               15 nm TCR-pMHC-I (1AO7)         TCR_P    = (+4.82, +1.36, +0.56)
  //               Transmembrane Perforin (3NSJ)   PERF_P   = (+4.42, +0.12, +0.62)
  //               Granzyme B Pour (1IAU)          GRZB_P   = (+3.95, +0.10, +0.62)
  //   Inset:      Circular Atomic Epitope Lens    ATOM_C   = ( 0.00, -3.70, +1.65)
  // -------------------------------------------------------------------------
  const NM = 0.08;

  const MACRO_C = V(-5.45, 1.05, -0.10);
  const MACRO_R = V(2.02, 1.88, 1.72);
  const ECOLI_P = V(-3.12, 1.48, 0.46);
  const PHAGO_C = V(-4.72, 0.34, 0.44);
  const MHCII_P = V(-5.65, 3.02, 0.52);

  const VIRION_C = V(0.0, 1.72, 0.16);
  const VIRION_R = 1.06;
  const LOCK_P = V(0.0, 0.24, 0.58);
  const ACE2_P = V(0.0, -0.78, 0.56);

  const TARGET_C = V(3.32, 0.34, 0.02);
  const TARGET_R = V(1.26, 1.48, 1.24);
  const CD8_C = V(6.42, 1.28, -0.04);
  const CD8_R = V(1.48, 1.88, 1.46);
  const TCR_P = V(4.84, 1.32, 0.56);
  const PERF_P = V(4.42, 0.12, 0.62);
  const GRZB_P = V(3.92, 0.08, 0.62);

  const ATOM_C = V(0.0, -3.72, 1.65);

  // Exact 5 required VIEWS ([name, camPos, target]) — calibrated at 1280x800 for zero HUD/plaque overlap!
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.0, 0.36, 31.6), V(0.0, -0.24, 0.0)],
    ['phagocytosis', V(-4.92, 1.24, 12.15), V(-4.95, 1.16, 0.35)],
    ['igg_neutralize', V(0.0, 0.56, 9.15), V(0.0, 0.44, 0.45)],
    ['cd8_synapse', V(4.85, 0.78, 8.75), V(4.82, 0.72, 0.48)],
    ['atoms', V(0.0, -3.72, 9.85), V(0.0, -3.72, 1.65)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'innate_phago' | 'humoral_igg' | 'cellular_cd8';
  const MODE_ORDER: readonly ModeKey[] = ['innate_phago', 'humoral_igg', 'cellular_cd8'];
  const MODE_LABEL: Record<ModeKey, string> = {
    innate_phago: 'Arm: Innate Phagocytosis',
    humoral_igg: 'Arm: Humoral IgG Block',
    cellular_cd8: 'Arm: Cellular CD8⁺ Kill',
  };
  let mode: ModeKey = 'innate_phago';

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#14203b',
    bgMid: '#070d1c',
    bgOuter: '#02040a',
    keyColor: '#fff4e6',
    keyIntensity: 3.05,
    rimColor: '#88c8ff',
    rimIntensity: 1.85,
    lampColor: '#ffe0b4',
    lampIntensity: 14,
    lampPos: [0.0, 3.8, 7.2],
    bloomStrength: 0.30,
    bloomRadius: 0.52,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 230,
    bokehColor: '#7ebeff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key } = studio;

  // Dedicated arm microscopy cavity lamps (dynamically sculpted by #modeBtn!)
  const innateLamp = new THREE.PointLight('#48e8ff', 11.0, 19, 2);
  innateLamp.position.set(MACRO_C.x + 0.6, MACRO_C.y + 1.4, 4.4);
  const rosLamp = new THREE.PointLight('#ffa83c', 7.2, 11, 2);
  rosLamp.position.set(PHAGO_C.x, PHAGO_C.y, PHAGO_C.z + 1.8);
  const humoralLamp = new THREE.PointLight('#ffd860', 10.5, 18, 2);
  humoralLamp.position.set(VIRION_C.x, VIRION_C.y + 0.8, 4.6);
  const cellularLamp = new THREE.PointLight('#b478ff', 10.5, 19, 2);
  cellularLamp.position.set(CD8_C.x - 1.1, CD8_C.y + 1.1, 4.5);
  const synapseLamp = new THREE.PointLight('#ff6488', 6.4, 11, 2);
  synapseLamp.position.set(PERF_P.x, PERF_P.y + 0.4, 2.6);
  const insetLamp = new THREE.PointLight('#b6eeff', 8.8, 15, 2);
  insetLamp.position.set(ATOM_C.x + 1.6, ATOM_C.y + 1.5, ATOM_C.z + 4.4);
  scene.add(innateLamp, rosLamp, humoralLamp, cellularLamp, synapseLamp, insetLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Organized groups for cutaway caps & mode-responsive highlights
  const cutRimGroup = new THREE.Group();
  const armBeaconsGroup = new THREE.Group();
  const stericArcsGroup = new THREE.Group();
  const apoptosisGroup = new THREE.Group();
  cell.add(cutRimGroup, armBeaconsGroup, stericArcsGroup, apoptosisGroup);

  // Front cutaway plane slicing Macrophage, Virion, Infected Target, and CD8+ T-Cell symmetrically at z = +0.34
  const CUT_Z = 0.34;
  const FRONT_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), CUT_Z)];
  const FRONT_CUT = FRONT_CUT_LOCAL.map(p => p.clone());
  const FRONT_CLIP = { clippingPlanes: FRONT_CUT, clipIntersection: false, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    FRONT_CUT.forEach((p, i) => {
      p.copy(FRONT_CUT_LOCAL[i]);
      if (!cutOn) p.constant = 1e4;
      p.applyMatrix4(cell.matrixWorld);
    });
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.8);
  const bump = (rx = 10, ry = 8) => {
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
    ['macrophage', 'Macrophage patrol cell (innate)', '#3cd8f2'],
    ['actin_pseudopod', 'Arp2/3 actin pseudopod cup', '#64f2ff'],
    ['ecoli_target', 'E. coli bacterium target (engulfed)', '#84f552'],
    ['phagosome', 'Acidic phagolysosome (pH 4.5)', '#ffbe48'],
    ['lysosome_ros', 'Lysosomes & NOX2 ROS burst', '#ff7e38'],
    ['mhcii_display', 'MHC-II antigen display (PDB 1DLH)', '#54c8ff'],
    ['igg_antibody', 'IgG antibody swarm (PDB 1IGT)', '#ffd84e'],
    ['fab_arms', 'Neutralizing Fab tips (PDB 7BZ5)', '#fff078'],
    ['fc_stem', 'IgG Fc opsonization stem (1IGT)', '#f29a34'],
    ['spike_rbd', 'SARS-CoV-2 Spike RBD (PDB 7BZ5)', '#ff5470'],
    ['ace2_blocked', 'Blocked host ACE2 (PDB 6M0J)', '#42e8b4'],
    ['virion_target', 'SARS-CoV-2 virion envelope', '#e6446c'],
    ['cd8_tcell', 'CD8⁺ Cytotoxic T-Cell (cellular)', '#a874ff'],
    ['tcr_mhci', 'TCR–pMHC-I synapse (PDB 1AO7)', '#809eff'],
    ['viral_peptide', '9-mer viral peptide (1AO7 groove)', '#ff88dc'],
    ['perforin_pore', 'Perforin 18 nm pore (PDB 3NSJ)', '#ff5e96'],
    ['granzyme_b', 'Granzyme B protease (PDB 1IAU)', '#ff4264'],
    ['immune_atoms', 'CDR3 H-bonds & Cys-S-S-Cys inset', '#86efff'],
  ];

  const INFO: Record<string, [string, string]> = {
    macrophage: [
      'Translucent patrolling innate phagocyte (~20 µm) with a kidney-shaped nucleus, PRRs, and dynamic cortex',
      'Engulfs invading bacteria, digests pathogen proteins, and bridges innate to adaptive immunity via MHC-II',
    ],
    actin_pseudopod: [
      'Branching Arp2/3-nucleated F-actin meshwork driving lamellipodial membrane arms around the microbe',
      'Generates mechanical protrusive force to zipper the plasma membrane around E. coli into a sealed cup',
    ],
    ecoli_target: [
      'Rod-shaped Gram-negative Escherichia coli bacillus displaying flagellin, pili, and outer-membrane LPS',
      'Recognized by macrophage pattern-recognition receptors (TLR4/CR3) and trapped inside the closing phagosome',
    ],
    phagosome: [
      'Internalized phagocytic vesicle acidified to pH 4.5 by V-ATPase proton pumps after lysosomal fusion',
      'Confines the captured bacterium in a toxic digestive chamber and routes cleaved peptides to MHC-II loaders',
    ],
    lysosome_ros: [
      'Acid-hydrolase lysosomes docked alongside membrane NOX2 NADPH oxidase generating O₂•⁻, H₂O₂, and HOCl',
      'Oxidizes bacterial membranes and proteolytically shreds pathogen proteins into 13–25 aa antigen fragments',
    ],
    mhcii_display: [
      'Surface Class II MHC heterodimers (PDB 1DLH, α/β chains) loaded with digested bacterial peptide fragments',
      'Presents exogenous pathogen epitopes to CD4⁺ Helper T-cells to license B-cell IgG and CD8⁺ clonal expansion',
    ],
    igg_antibody: [
      'Flexible Y-shaped Immunoglobulin G tetramers (PDB 1IGT, 2 heavy + 2 light chains linked by hinge disulfides)',
      'Blankets circulating virions at high affinity to neutralize viral attachment and flag debris for clearance',
    ],
    fab_arms: [
      'Twin antigen-binding Fab tips (PDB 7BZ5 & 1IGT) bearing hypervariable CDR1–CDR3 specificity loops',
      'Clamps directly onto the SARS-CoV-2 Spike Receptor-Binding Domain to sterically mask its entry motif',
    ],
    fc_stem: [
      'Conserved IgG Fc stalk (PDB 1IGT heavy-chain CH2–CH3 dimer) projecting radially outward from the coated virus',
      'Engages macrophage Fcγ receptors and complement C1q to trigger rapid opsonization and phagocytosis',
    ],
    spike_rbd: [
      'Trimeric SARS-CoV-2 Spike glycoproteins bearing up-conformation Receptor-Binding Domains (PDB 7BZ5)',
      'Normally docks human ACE2 to initiate membrane fusion, but is locked inert beneath neutralizing Fab caps',
    ],
    ace2_blocked: [
      'Host airway epithelial ACE2 transmembrane peptidase ectodomains (PDB 6M0J) lining the mucosal barrier',
      'Sterically blocked from contacting the IgG-shielded Spike RBDs, preventing viral entry and infection',
    ],
    virion_target: [
      'Enveloped ~100 nm SARS-CoV-2 coronavirus wrapping a helical nucleocapsid N–(+)ssRNA core in host-derived lipid',
      'Immobilized in the extracellular mucosal corridor by a dense neutralizing coat of golden Y-shaped IgG',
    ],
    cd8_tcell: [
      'Agile cytotoxic CD8⁺ T-lymphocyte (~8 µm) polarizing its MTOC and lytic granules directly toward a target cell',
      'Inspects host cells for intracellular viral peptides and eliminates infected factories without harming neighbors',
    ],
    tcr_mhci: [
      'Ternary TCR–pMHC-I recognition bridge (PDB 1AO7) spanning the 15 nm immunological synapse with CD8 co-receptor',
      'Verifies non-self viral peptide presentation on host MHC-I to fire Ca²⁺ signaling and polarized granule release',
    ],
    viral_peptide: [
      'Short 9-amino-acid viral peptide cleaved by the infected cell proteasome and seated in the MHC-I groove (1AO7)',
      'Exposes hidden intracellular viral replication on the cell surface so CD8⁺ T-cells spot the hijacked cell',
    ],
    perforin_pore: [
      'Ca²⁺-triggered ring of ~16–22 Perforin monomers (PDB 3NSJ) assembling an ~18 nm transmembrane β-barrel pore',
      'Punches a wide aqueous conduit directly through the infected epithelial cell membrane at the synapse',
    ],
    granzyme_b: [
      'Cytotoxic Granzyme B serine protease (PDB 1IAU) diffusing from CD8⁺ lytic granules down the Perforin channel',
      'Cleaves procaspase-3 and Bid inside the infected cell to trigger clean programmed apoptosis, halting virions',
    ],
    immune_atoms: [
      'Atomic 0.1–0.5 nm lens of CDR3–epitope N–H···O=C hydrogen bonds paired with an IgG hinge Cys–S–S–Cys bridge',
      'Shows how non-covalent shape-complementary H-bonds confer specificity while covalent S–S bonds stabilize IgG',
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
    new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.86, ...clipObj, ...o });

  function makeCinemaProteinMat(
    k: string,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sssHex = '#b8f2ff',
    sssInt = 0.22
  ): THREE.MeshPhysicalMaterial {
    const m = phys({
      vertexColors: true,
      roughness: 0.32,
      metalness: 0.06,
      clearcoat: 0.42,
      clearcoatRoughness: 0.24,
      sheen: 0.42,
      sheenColor: '#f6fbff',
      normalMap: protBump,
      normalScale: new THREE.Vector2(0.34, 0.34),
      side: THREE.DoubleSide,
      ...extra,
    });
    applyBacklitSSS(m, sssHex, sssInt, 2.6);
    return reg(k, m);
  }

  const sculpt = (k: string, parent: THREE.Object3D = cell, extra: THREE.MeshPhysicalMaterialParameters = {}, sss = '#a8e8ff') =>
    makeSculptedMesh(makeCinemaProteinMat(k, extra, sss, 0.22), parent);

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
    const m = makeCinemaMembraneMat(clipObj, (opts.normalMap as THREE.Texture) ?? bump(12, 10), {
      color: gelHex,
      attenuationColor: (opts.attenCol as string) ?? solidHex,
      attenuationDistance: (opts.attenDist as number) ?? 4.5,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.32,
      iridescence: (opts.iridescence as number) ?? 0.54,
      thickness: (opts.thickness as number) ?? 0.48,
      roughness: (opts.roughness as number) ?? 0.12,
      sheenColor: (opts.sheenColor as string) ?? '#e8faff',
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
  const qFromX = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(1, 0, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), twist)) : q;
  };

  const SITES: Record<string, THREE.Vector3[]> = Object.fromEntries(PARTS.map(p => [p[0], []]));

  // Live animated scene objects & mode-controlled materials
  const rosHalos: THREE.Mesh[] = [];
  const virionFloatRoot = new THREE.Group();
  virionFloatRoot.position.copy(VIRION_C);
  cell.add(virionFloatRoot);

  const pseudopodGroup = new THREE.Group();
  cell.add(pseudopodGroup);

  const perforinRingGroup = new THREE.Group();
  cell.add(perforinRingGroup);

  const granzymeStreamObjs: Array<{ mesh: THREE.Object3D; curve: THREE.CatmullRomCurve3; phase: number; spin: number }> = [];
  const caspaseRings: THREE.Mesh[] = [];
  let ecoliMeshGroup: THREE.Group | null = null;
  let disulfideHalo: THREE.Mesh | null = null;
  let hbondPulseMeshes: THREE.Mesh[] = [];
  const plaqueMats: Record<ModeKey, THREE.MeshStandardMaterial | null> = {
    innate_phago: null,
    humoral_igg: null,
    cellular_cd8: null,
  };

  const modeRefs: {
    rosCoreMat?: THREE.MeshPhysicalMaterial;
    actinMat?: THREE.MeshPhysicalMaterial;
    mhciiMat?: THREE.MeshPhysicalMaterial;
    iggMat?: THREE.MeshPhysicalMaterial;
    fabMat?: THREE.MeshPhysicalMaterial;
    fcMat?: THREE.MeshPhysicalMaterial;
    stericMat?: THREE.MeshPhysicalMaterial;
    tcrMat?: THREE.MeshPhysicalMaterial;
    peptideMat?: THREE.MeshPhysicalMaterial;
    perforinMat?: THREE.MeshPhysicalMaterial;
    granzymeMat?: THREE.MeshPhysicalMaterial;
    apoptosisMat?: THREE.MeshPhysicalMaterial;
  } = {};

  // -------------------------------------------------------------------------
  // Organic Hull & Front-Cutaway Rim Geometry Helpers
  // -------------------------------------------------------------------------
  function organicMod(nx: number, ny: number, nz: number, seed: number, amp = 0.055): number {
    const n = fbm(nx * 2.1 + seed, ny * 2.1 - seed * 0.4, nz * 2.1 + seed * 0.7, 3);
    return 1 + amp * (n - 0.5) * 2;
  }

  function buildOrganicEllipsoidGeo(
    center: THREE.Vector3,
    radii: THREE.Vector3,
    scale = 1.0,
    seed = 7.3,
    amp = 0.055,
    seg = 92
  ): THREE.BufferGeometry {
    const g = new THREE.SphereGeometry(1, seg, Math.round(seg * 0.68));
    const p = g.attributes.position;
    const v = V();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).normalize();
      const m = organicMod(v.x, v.y, v.z, seed, amp) * scale;
      p.setXYZ(i, center.x + v.x * radii.x * m, center.y + v.y * radii.y * m, center.z + v.z * radii.z * m);
    }
    g.computeVertexNormals();
    return g;
  }

  function buildFrontCutRimGeo(
    center: THREE.Vector3,
    radii: THREE.Vector3,
    cutZ: number,
    seed: number,
    amp: number,
    layers: ReadonlyArray<readonly [number, number, string]>,
    n = 148
  ): THREE.BufferGeometry {
    const pos: number[] = [];
    const cols: number[] = [];
    const nor: number[] = [];
    const idx: number[] = [];
    const c = new THREE.Color();
    const zRel = Math.max(-0.92, Math.min(0.92, (cutZ - center.z) / radii.z));
    const sinTheta = Math.sqrt(Math.max(0.05, 1 - zRel * zRel));
    let base = 0;
    layers.forEach(([s0, s1, hex]) => {
      c.set(hex);
      for (let i = 0; i <= n; i++) {
        const a = (i / n) * Math.PI * 2;
        const ux = Math.cos(a) * sinTheta;
        const uy = Math.sin(a) * sinTheta;
        const uz = zRel;
        const m = organicMod(ux, uy, uz, seed, amp);
        for (const s of [s0, s1]) {
          pos.push(center.x + ux * radii.x * m * s, center.y + uy * radii.y * m * s, cutZ - 0.006);
          cols.push(c.r, c.g, c.b);
          nor.push(0, 0, 1);
        }
      }
      for (let i = 0; i < n; i++) {
        const a = base + i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
      base += (n + 1) * 2;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setIndex(idx);
    return g;
  }

  // -------------------------------------------------------------------------
  // Decode ALL 7 Real RCSB Immune PDBs from PDB_IMMUNE_PHARMA via buildPdbSurfaceGeo
  //   1. mhcii (1DLH)         2. igg (1IGT)           3. spike_rbd_fab (7BZ5)
  //   4. ace2_rbd (6M0J)      5. tcr_mhci (1AO7)      6. perforin (3NSJ)
  //   7. granzyme_b (1IAU)
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // 1. MHC-II + Digested Bacterial Peptide (1DLH, 3 chains)
    //    Chain 0 (α) & Chain 1 (β): sapphire-cyan; Chain 2 (bacterial peptide in groove): fiery coral-gold!
    const geoMhcii = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'mhcii'), {
      nm: NM,
      scale: 0.72,
      maxDim: 28,
      sigmaAng: 3.6,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => {
        if (grp === 2) return col('#ffaa38'); // Bacterial peptide seated in MHC-II cleft
        const base = grp === 0 ? col('#3ec6ff') : col('#72e6ff');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });
    // Orient MHC-II peptide groove (-15.6, +15.8, -5.2) straight upward along +Y!
    const qMhcii = new THREE.Quaternion().setFromUnitVectors(V(-15.6, 15.8, -5.2).normalize(), V(0, 1, 0));
    geoMhcii.applyQuaternion(qMhcii);

    // 2. Iconic Y-Shaped IgG Antibody (1IGT, 4 chains: 0/2 Light Fab, 1/3 Heavy Fab+Fc)
    //    Compute exact orthonormal alignment so Fc stem points -Y, and twin Fab arms open cleanly in XY toward +Y!
    const iggModel = pdb.getModel(PDB_IMMUNE_PHARMA, 'igg');
    const uFab = V(-18.3, 0.6, 21.0).normalize();
    const uArmsRaw = V(-25.3, 78.1, -31.7).normalize();
    const uArms = uArmsRaw.clone().addScaledVector(uFab, -uArmsRaw.dot(uFab)).normalize();
    const uNorm = uArms.clone().cross(uFab).normalize();
    const mIggAlign = new THREE.Matrix4().makeBasis(uArms, uFab, uNorm).transpose();

    const iggCols = [col('#fff38c'), col('#ffd046'), col('#ffeb7c'), col('#f2a82e')];
    const geoIggFull = buildPdbSurfaceGeo(iggModel, {
      nm: NM,
      scale: 0.54,
      maxDim: 34,
      sigmaAng: 3.45,
      iso: 0.40,
      aoStrength: 0.58,
      colorFn: (grp, part, idx) => {
        const px = iggModel.xyz[idx * 3] * 0.1;
        const py = iggModel.xyz[idx * 3 + 1] * 0.1;
        const pz = iggModel.xyz[idx * 3 + 2] * 0.1;
        const projFab = px * uFab.x + py * uFab.y + pz * uFab.z;
        if (projFab > 22) return col('#fff9b0'); // Hypervariable CDR tips glow bright champagne gold
        if (projFab < -10 && (grp === 1 || grp === 3)) return col('#eb922c'); // Burnished Fc opsonization stalk
        const base = iggCols[grp % 4];
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.06) : base;
      },
    });
    geoIggFull.applyMatrix4(mIggAlign);

    // Split 1IGT Hero Fab Arms vs Hero Fc Stem (aligned with identical matrix so they interlock seamlessly!)
    const geoIggFab = buildPdbSurfaceGeo(iggModel, {
      nm: NM,
      scale: 0.60,
      maxDim: 32,
      sigmaAng: 3.45,
      iso: 0.40,
      aoStrength: 0.56,
      filter: (grp, _part, idx) => {
        if (grp === 0 || grp === 2) return true;
        const px = iggModel.xyz[idx * 3] * 0.1;
        const py = iggModel.xyz[idx * 3 + 1] * 0.1;
        const pz = iggModel.xyz[idx * 3 + 2] * 0.1;
        return px * uFab.x + py * uFab.y + pz * uFab.z >= -4.0;
      },
      colorFn: (grp, part, idx) => {
        const px = iggModel.xyz[idx * 3] * 0.1;
        const py = iggModel.xyz[idx * 3 + 1] * 0.1;
        const pz = iggModel.xyz[idx * 3 + 2] * 0.1;
        const proj = px * uFab.x + py * uFab.y + pz * uFab.z;
        if (proj > 26) return col('#8affff'); // CDR antigen-clamping loop highlight!
        const base = grp === 0 || grp === 2 ? col('#fff596') : col('#ffd64a');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.06) : base;
      },
    });
    geoIggFab.applyMatrix4(mIggAlign);

    const geoIggFc = buildPdbSurfaceGeo(iggModel, {
      nm: NM,
      scale: 0.60,
      maxDim: 28,
      sigmaAng: 3.5,
      iso: 0.40,
      aoStrength: 0.56,
      filter: (grp, _part, idx) => {
        if (grp === 0 || grp === 2) return false;
        const px = iggModel.xyz[idx * 3] * 0.1;
        const py = iggModel.xyz[idx * 3 + 1] * 0.1;
        const pz = iggModel.xyz[idx * 3 + 2] * 0.1;
        return px * uFab.x + py * uFab.y + pz * uFab.z <= 2.0;
      },
      colorFn: (grp, part) => {
        const base = grp === 1 ? col('#f49a30') : col('#e27824');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.07) : base;
      },
    });
    geoIggFc.applyMatrix4(mIggAlign);

    // 3. SARS-CoV-2 Spike RBD + Neutralizing Fab Clamp (7BZ5, 3 chains)
    //    Chain 0 = Spike RBD (vivid crimson-coral), Chains 1+2 = Neutralizing B38 Fab (solar gold + cyan CDRs)!
    const q7bz5 = new THREE.Quaternion().setFromUnitVectors(V(45.1, 5.2, -16.0).normalize(), V(0, 1, 0));
    const geoRbd7bz5 = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'spike_rbd_fab'), {
      nm: NM,
      scale: 0.78,
      maxDim: 26,
      sigmaAng: 3.7,
      iso: 0.38,
      aoStrength: 0.56,
      filter: grp => grp === 0,
      colorFn: (_grp, part, idx) => {
        const base = idx % 3 === 0 ? col('#ff4e6a') : col('#ff7288');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });
    geoRbd7bz5.applyQuaternion(q7bz5);

    const geoFab7bz5 = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'spike_rbd_fab'), {
      nm: NM,
      scale: 0.78,
      maxDim: 28,
      sigmaAng: 3.8,
      iso: 0.38,
      aoStrength: 0.56,
      filter: grp => grp !== 0,
      colorFn: (grp, part) => {
        const base = grp === 1 ? col('#ffe056') : col('#fff494');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.07) : base;
      },
    });
    geoFab7bz5.applyQuaternion(q7bz5);

    // 4. Host Epithelial ACE2 Receptor Ectodomain (6M0J, Chain 0 only — sterically blocked from RBD!)
    const qAce2 = new THREE.Quaternion().setFromUnitVectors(V(-7.1, 10.2, 46.7).normalize(), V(0, 1, 0));
    const geoAce2 = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'ace2_rbd'), {
      nm: NM,
      scale: 0.74,
      maxDim: 28,
      sigmaAng: 3.8,
      iso: 0.38,
      aoStrength: 0.56,
      filter: grp => grp === 0,
      colorFn: (_grp, part, idx) => {
        const base = (idx >> 5) % 2 === 0 ? col('#38e2b2') : col('#5ef2cc');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.07) : base;
      },
    });
    geoAce2.applyQuaternion(qAce2);

    // 5. Cytotoxic CD8+ TCR-pMHC-I Ternary Complex (1AO7, 5 chains)
    //    Chains 0+1 = Target MHC-I + beta2m (cerulean-sky), Chain 2 = 9-mer viral peptide (neon rose-gold),
    //    Chains 3+4 = CD8+ TCR alpha/beta (electric violet-indigo).
    //    Pre-rotate so MHC-I sits at -X (Target Cell), 9-mer peptide at center, TCR at +X (CD8+ T-Cell)!
    const q1ao7 = new THREE.Quaternion().setFromUnitVectors(V(35.1, 19.7, -36.3).normalize(), V(1, 0, 0));
    const geoTcrMhci = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'tcr_mhci'), {
      nm: NM,
      scale: 0.80,
      maxDim: 30,
      sigmaAng: 3.9,
      iso: 0.37,
      aoStrength: 0.58,
      filter: grp => grp !== 2,
      colorFn: (grp, part) => {
        const base =
          grp === 0 ? col('#4cb8ff')
            : grp === 1 ? col('#7cd8ff')
              : grp === 3 ? col('#a86eff')
                : col('#ca88ff');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });
    geoTcrMhci.applyQuaternion(q1ao7);

    const geoViralPeptide = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'tcr_mhci'), {
      nm: NM,
      scale: 0.80,
      maxDim: 22,
      sigmaAng: 4.2,
      iso: 0.34,
      aoStrength: 0.42,
      filter: grp => grp === 2,
      colorFn: () => col('#ff7ae2'),
    });
    geoViralPeptide.applyQuaternion(q1ao7);

    // 6. Ring-Forming Perforin Monomer (3NSJ, 1 chain, tall MACPF pore-forming subunit along Y)
    const geoPerforin = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'perforin'), {
      nm: NM,
      scale: 0.54,
      maxDim: 26,
      sigmaAng: 3.9,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (_grp, part, idx) => {
        const seg = (idx >> 6) % 3;
        const base = seg === 0 ? col('#ff4e88') : seg === 1 ? col('#ff78a8') : col('#e23e96');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });

    // 7. Cytotoxic Granzyme B Serine Protease (1IAU, 1 chain — compact catalytic sphere pouring through pore)
    const geoGranzyme = buildPdbSurfaceGeo(pdb.getModel(PDB_IMMUNE_PHARMA, 'granzyme_b'), {
      nm: NM,
      scale: 0.54,
      maxDim: 24,
      sigmaAng: 3.6,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: (_grp, part, idx) => {
        const base = (idx >> 5) % 2 === 0 ? col('#ff3c5c') : col('#ff7c4c');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });

    return {
      geoMhcii,
      geoIggFull,
      geoIggFab,
      geoIggFc,
      geoRbd7bz5,
      geoFab7bz5,
      geoAce2,
      geoTcrMhci,
      geoViralPeptide,
      geoPerforin,
      geoGranzyme,
    };
  }

  // -------------------------------------------------------------------------
  // Floating High-Clarity 3D Arm Header Plaques (Positioned at Y = +4.55 —
  // Strictly Below #hud, Clear of Top IgGs/MHC-II, and 550px Away from #hint!)
  // -------------------------------------------------------------------------
  function buildArmPlaques() {
    const specs: Array<{ key: ModeKey; pos: THREE.Vector3; title: string; sub: string; accent: string }> = [
      {
        key: 'innate_phago',
        pos: V(-5.20, 4.55, 0.30),
        title: 'INNATE · PHAGOCYTOSIS',
        sub: 'Macrophage · ROS · MHC-II (1DLH)',
        accent: '#5ceeff',
      },
      {
        key: 'humoral_igg',
        pos: V(0.0, 4.55, 0.30),
        title: 'HUMORAL · IgG NEUTRALIZE',
        sub: '1IGT / 7BZ5 Blocks ACE2 (6M0J)',
        accent: '#ffe062',
      },
      {
        key: 'cellular_cd8',
        pos: V(5.20, 4.55, 0.30),
        title: 'CELLULAR · CD8⁺ SYNAPSE',
        sub: '1AO7 TCR · 3NSJ Pore · 1IAU GrzB',
        accent: '#cf9eff',
      },
    ];
    specs.forEach(sp => {
      const cv = document.createElement('canvas');
      cv.width = 640;
      cv.height = 132;
      const g = cv.getContext('2d');
      g.clearRect(0, 0, 640, 132);
      g.fillStyle = 'rgba(7, 13, 28, 0.78)';
      g.strokeStyle = sp.accent;
      g.lineWidth = 4;
      g.beginPath();
      g.roundRect(10, 10, 620, 112, 20);
      g.fill();
      g.stroke();

      g.textAlign = 'center';
      g.font = '700 31px system-ui, -apple-system, sans-serif';
      g.fillStyle = sp.accent;
      g.fillText(sp.title, 320, 56);
      g.font = '600 22px system-ui, -apple-system, sans-serif';
      g.fillStyle = '#e4effe';
      g.fillText(sp.sub, 320, 96);

      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        emissive: '#ffffff',
        emissiveMap: tex,
        emissiveIntensity: 0.78,
        transparent: true,
        opacity: 0.94,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      plaqueMats[sp.key] = mat;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3.65, 0.76), mat);
      mesh.position.copy(sp.pos);
      armBeaconsGroup.add(mesh);
    });
  }

  // -------------------------------------------------------------------------
  // ARM 1 (LEFT) — Innate Immunity: Macrophage Phagocytosis, Arp2/3 Actin Cup,
  //                Engulfed E. coli, Acidic Phagolysosome + NOX2 ROS & MHC-II (1DLH)
  // -------------------------------------------------------------------------
  function buildInnateMacrophageArm(T) {
    // 1A. Translucent Blue-Teal Macrophage Outer Wet-Gel Envelope (Shell #1!)
    const macroShellMat = cinemaShellMat('macrophage', '#147a9e', '#86ecff', FRONT_CLIP, {
      attenCol: '#0f6282',
      attenDist: 4.2,
      sssColor: '#48e6ff',
      sssIntensity: 0.36,
      iridescence: 0.56,
      thickness: 0.54,
      roughness: 0.11,
      sheenColor: '#d2faff',
      normalMap: bump(12, 10),
      normalScale: 0.24,
    });
    cell.add(shade(new THREE.Mesh(buildOrganicEllipsoidGeo(MACRO_C, MACRO_R, 1.0, 3.7, 0.068, 96), macroShellMat), true, true));

    // Deep sapphire interior cutaway cavity backing wall so phagosome & ROS pop cleanly!
    const macroBackMat = reg(
      'macrophage',
      applyBacklitSSS(
        phys(
          {
            color: '#072234',
            roughness: 0.60,
            metalness: 0.04,
            side: THREE.BackSide,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          FRONT_CLIP
        ),
        '#34d4ff',
        0.20,
        2.6
      )
    );
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(MACRO_C, MACRO_R, 0.955, 3.7, 0.068, 72), macroBackMat));

    // Exact bilayer front cutaway rim strip flush at z = CUT_Z
    const macroRimMat = reg(
      'macrophage',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.26,
        metalness: 0.08,
        emissive: '#0e5874',
        emissiveIntensity: 0.48,
        side: THREE.DoubleSide,
      })
    );
    cutRimGroup.add(
      new THREE.Mesh(
        buildFrontCutRimGeo(
          MACRO_C,
          MACRO_R,
          CUT_Z,
          3.7,
          0.068,
          [
            [1.00, 0.976, '#84f2ff'],
            [0.976, 0.952, '#1c6c8e'],
          ],
          148
        ),
        macroRimMat
      )
    );

    // Classic Bean/Kidney-Shaped Macrophage Nucleus tucked inside back-left of cutaway
    const S_NUC = sculpt('macrophage', cell, {
      emissive: '#122868',
      emissiveIntensity: 0.34,
      roughness: 0.32,
      clearcoat: 0.54,
    }, '#7098ff');
    const nucC = MACRO_C.clone().add(V(-0.84, 0.32, -0.52));
    S_NUC.lobe(nucC.clone().add(V(-0.08, 0.34, 0.0)), 0.58, 0.46, 0.48, col('#4c76e8'), qFromY(V(0.2, 1, 0.1)));
    S_NUC.lobe(nucC.clone().add(V(-0.24, -0.02, -0.04)), 0.50, 0.44, 0.46, col('#446cd8'));
    S_NUC.lobe(nucC.clone().add(V(-0.06, -0.38, 0.02)), 0.56, 0.44, 0.46, col('#5280f0'), qFromY(V(-0.2, 1, 0.1)));
    S_NUC.done();
    SITES.macrophage.push(
      MACRO_C.clone().add(V(-1.72, 1.15, 0.28)),
      MACRO_C.clone().add(V(-1.68, -0.92, 0.28)),
      nucC.clone()
    );

    // 1B. Translucent Sweeping Arp2/3 Actin Pseudopod Arms Wrapping E. coli!
    const pseudoMemMat = reg(
      'actin_pseudopod',
      applyBacklitSSS(
        phys({
          color: '#62e8ff',
          roughness: 0.16,
          metalness: 0.04,
          clearcoat: 0.65,
          transparent: true,
          opacity: 0.44,
          depthWrite: false,
          normalMap: bump(6, 6),
          normalScale: new THREE.Vector2(0.18, 0.18),
        }),
        '#7ef4ff',
        0.42,
        2.4
      )
    );
    const upperArmCurve = new THREE.CatmullRomCurve3([
      MACRO_C.clone().add(V(1.18, 1.12, 0.16)),
      V(-3.75, 2.26, 0.42),
      V(-3.04, 2.28, 0.50),
      V(-2.46, 1.88, 0.48),
    ]);
    const lowerArmCurve = new THREE.CatmullRomCurve3([
      MACRO_C.clone().add(V(1.28, -0.22, 0.18)),
      V(-3.68, 0.72, 0.42),
      V(-2.98, 0.74, 0.50),
      V(-2.44, 1.06, 0.48),
    ]);
    pseudopodGroup.add(
      shade(new THREE.Mesh(sweepGeo(upperArmCurve, t => 0.38 * (1 - 0.58 * t), 44, 18), pseudoMemMat), false, true),
      shade(new THREE.Mesh(sweepGeo(lowerArmCurve, t => 0.36 * (1 - 0.56 * t), 44, 18), pseudoMemMat), false, true)
    );

    // Branching 70-degree Arp2/3 F-Actin Cytoskeleton Filaments Driving Both Pseudopod Arms!
    const actinMat = makeCinemaProteinMat('actin_pseudopod', {
      emissive: '#1688a8',
      emissiveIntensity: 0.52,
      roughness: 0.24,
      clearcoat: 0.58,
    }, '#7cf4ff', 0.36);
    modeRefs.actinMat = actinMat;
    const S_ACTIN = makeSculptedMesh(actinMat, pseudopodGroup);
    [upperArmCurve, lowerArmCurve].forEach((curve, armIdx) => {
      const pts = curve.getPoints(16);
      S_ACTIN.tube(pts, 0.056, 0.028, col('#4ce8ff'), col('#98fbff'), 8, true);
      // 70-deg Arp2/3 dendritic Y-branches pushing the leading edge membrane!
      for (let b = 2; b <= 13; b += 2) {
        const p0 = pts[b];
        const dir = pts[b + 1].clone().sub(pts[b - 1]).normalize();
        const side = V(-dir.y, dir.x, 0.22 * (b % 4 === 0 ? 1 : -1)).normalize();
        const branchTip = p0.clone().addScaledVector(dir, 0.24).addScaledVector(side, (armIdx === 0 ? -1 : 1) * 0.22);
        const branchTip2 = p0.clone().addScaledVector(dir, 0.20).addScaledVector(side, (armIdx === 0 ? 1 : -1) * 0.16);
        S_ACTIN.add(p0, 0.11, col('#ffe668')); // Arp2/3 nucleation node!
        S_ACTIN.tube([p0, branchTip], 0.028, 0.015, col('#70f0ff'), col('#b8fcff'), 6, true);
        S_ACTIN.tube([p0, branchTip2], 0.024, 0.014, col('#5adcf5'), col('#a4f8ff'), 6, true);
        placed++;
      }
    });
    S_ACTIN.done();
    SITES.actin_pseudopod.push(V(-3.22, 2.24, 0.48), V(-3.18, 0.76, 0.48));

    // 1C. Rod-Shaped Gram-Negative E. coli Bacterium Caught in the Phagocytic Cup!
    ecoliMeshGroup = new THREE.Group();
    ecoliMeshGroup.position.copy(ECOLI_P);
    ecoliMeshGroup.rotation.set(0.12, -0.18, 0.36);
    cell.add(ecoliMeshGroup);

    const ecoliMat = reg(
      'ecoli_target',
      applyBacklitSSS(
        phys({
          color: '#62e042',
          emissive: '#1e5814',
          emissiveIntensity: 0.32,
          roughness: 0.26,
          clearcoat: 0.56,
          normalMap: bump(8, 6),
          normalScale: new THREE.Vector2(0.28, 0.28),
        }),
        '#9eff68',
        0.38,
        2.5
      )
    );
    ecoliMeshGroup.add(shade(new THREE.Mesh(new THREE.CapsuleGeometry(0.29, 0.86, 16, 28), ecoliMat), true, true));

    // E. coli flagellum corkscrew, pili/fimbriae & glowing LPS surface antigen knobs
    const S_ECOLI = sculpt('ecoli_target', ecoliMeshGroup, {
      emissive: '#287a1c',
      emissiveIntensity: 0.36,
      roughness: 0.28,
    }, '#a6ff72');
    const flagPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 22; i++) {
      const t = i / 22;
      flagPts.push(V(0.14 * Math.sin(t * Math.PI * 4.5), 0.72 + t * 0.96, 0.14 * Math.cos(t * Math.PI * 4.5)));
    }
    S_ECOLI.tube(flagPts, 0.026, 0.012, col('#a8ff74'), col('#74e052'), 7, true);
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2 + i * 0.7;
      const y = rr(-0.44, 0.44);
      const dir = V(Math.cos(a), 0.12 * Math.sin(i), Math.sin(a)).normalize();
      const base = V(dir.x * 0.29, y, dir.z * 0.29);
      const tip = base.clone().addScaledVector(dir, rr(0.12, 0.20));
      S_ECOLI.tube([base, tip], 0.013, 0.008, col('#c2ff86'), col('#94f05c'), 5, true);
    }
    S_ECOLI.done();
    SITES.ecoli_target.push(ECOLI_P.clone());
    placed++;

    // 1D. Acidic Phagolysosome Vesicle (pH 4.5, Shell #2!) + Digested Bacterial Fragments
    const phagoShellMat = cinemaShellMat('phagosome', '#d4821c', '#ffd67a', {}, {
      attenCol: '#b86814',
      attenDist: 2.6,
      sssColor: '#ffbe4a',
      sssIntensity: 0.42,
      iridescence: 0.48,
      thickness: 0.38,
      roughness: 0.12,
      sheenColor: '#fff0c2',
      normalMap: bump(8, 8),
      normalScale: 0.20,
    });
    const phagoMesh = shade(new THREE.Mesh(new THREE.SphereGeometry(0.76, 40, 28), phagoShellMat), true, true);
    phagoMesh.position.copy(PHAGO_C);
    cell.add(phagoMesh);

    // Digested bacterial peptide chunks + membrane V-ATPase proton pumps inside phagolysosome
    const S_PHAGO = sculpt('phagosome', cell, {
      emissive: '#884e0e',
      emissiveIntensity: 0.44,
      roughness: 0.26,
    }, '#ffd068');
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const p = PHAGO_C.clone().add(V(Math.cos(a) * rr(0.14, 0.36), Math.sin(a) * rr(0.14, 0.36), rr(-0.18, 0.22)));
      S_PHAGO.lobe(p, 0.12, 0.07, 0.08, i % 2 === 0 ? col('#94f05c') : col('#ffc24e'), qFromY(V(Math.cos(a), Math.sin(a), 0.3)));
    }
    // V-ATPase H+ proton pump knobs studded on the phagosome rim
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.3;
      const dir = V(Math.cos(a), Math.sin(a), 0.22).normalize();
      const p = PHAGO_C.clone().addScaledVector(dir, 0.78);
      S_PHAGO.add(p, 0.16, col('#ff78c4'));
      placed++;
    }
    S_PHAGO.done();
    SITES.phagosome.push(PHAGO_C.clone());

    // 1E. Acidic Lysosomes & Amber NOX2 Respiratory Burst ROS Halos!
    const rosCoreMat = reg(
      'lysosome_ros',
      phys({
        color: '#ff9638',
        emissive: '#ff6e1c',
        emissiveIntensity: 0.92,
        roughness: 0.18,
        clearcoat: 0.65,
      })
    );
    modeRefs.rosCoreMat = rosCoreMat;

    const lysoPositions = [
      PHAGO_C.clone().add(V(-0.82, -0.58, 0.18)),
      PHAGO_C.clone().add(V(0.18, -0.88, 0.22)),
      PHAGO_C.clone().add(V(-0.98, 0.22, 0.10)),
    ];
    lysoPositions.forEach((lp, idx) => {
      const m = shade(new THREE.Mesh(new THREE.SphereGeometry(0.28 + idx * 0.02, 24, 18), rosCoreMat), true, true);
      m.position.copy(lp);
      cell.add(m);
      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.36, 0.026, 10, 32),
        reg(
          'lysosome_ros',
          phys({
            color: '#ffc658',
            emissive: '#ff9224',
            emissiveIntensity: 0.96,
            transparent: true,
            opacity: 0.62,
            depthWrite: false,
          })
        )
      );
      halo.position.copy(lp);
      cell.add(halo);
      rosHalos.push(halo);
      SITES.lysosome_ros.push(lp.clone());
      placed++;
    });

    // Central NOX2 ROS oxidation aura pulsing right inside the phagolysosome!
    const phagoRosHalo = new THREE.Mesh(
      new THREE.TorusGeometry(0.54, 0.032, 12, 40),
      reg(
        'lysosome_ros',
        phys({
          color: '#ffb842',
          emissive: '#ff7a18',
          emissiveIntensity: 0.94,
          transparent: true,
          opacity: 0.58,
          depthWrite: false,
        })
      )
    );
    phagoRosHalo.position.copy(PHAGO_C).add(V(0, 0, 0.14));
    cell.add(phagoRosHalo);
    rosHalos.push(phagoRosHalo);

    // 1F. REAL PDB 1DLH MHC-II Heterodimers Presenting Digested Bacterial Peptides on Macrophage Surface!
    const mhciiMat = makeCinemaProteinMat('mhcii_display', {
      emissive: '#105c94',
      emissiveIntensity: 0.36,
      roughness: 0.26,
      clearcoat: 0.56,
    }, '#6ce4ff', 0.34);
    modeRefs.mhciiMat = mhciiMat;
    const I_MHCII = makeMolBatch(T.geoMhcii, mhciiMat, cell);
    const S_MHCII_STALK = sculpt('mhcii_display', cell, {
      emissive: '#1878b8',
      emissiveIntensity: 0.42,
      roughness: 0.28,
    }, '#88e8ff');

    // Hero MHC-II cluster along upper-front & upper-left macrophage crown + perimeter array (18 real 1DLH complexes!)
    const mhciiDirs: Array<[THREE.Vector3, number]> = [
      [V(-0.12, 0.98, 0.26), 1.15],
      [V(-0.36, 0.91, 0.28), 1.12],
      [V(0.14, 0.97, 0.28), 1.10],
      [V(-0.62, 0.76, 0.26), 1.04],
      [V(-0.84, 0.52, 0.24), 0.98],
      [V(-0.96, 0.14, 0.24), 0.94],
      [V(-0.92, -0.34, 0.24), 0.92],
      [V(-0.68, -0.72, 0.24), 0.92],
      [V(-0.26, -0.94, 0.26), 0.94],
      [V(0.24, -0.94, 0.26), 0.94],
      [V(-0.22, 0.94, -0.26), 0.92],
      [V(-0.58, 0.74, -0.34), 0.90],
      [V(0.22, 0.92, -0.32), 0.90],
      [V(-0.84, 0.32, -0.44), 0.88],
      [V(-0.78, -0.42, -0.44), 0.88],
      [V(-0.18, -0.88, -0.42), 0.88],
    ];
    mhciiDirs.forEach(([rawDir, sc], idx) => {
      const dir = rawDir.clone().normalize();
      const mod = organicMod(dir.x, dir.y, dir.z, 3.7, 0.068);
      const base = V(
        MACRO_C.x + dir.x * MACRO_R.x * mod,
        MACRO_C.y + dir.y * MACRO_R.y * mod,
        MACRO_C.z + dir.z * MACRO_R.z * mod
      );
      const pos = base.clone().addScaledVector(dir, 0.24 * sc);
      I_MHCII.add(pos, qFromY(dir, idx * 0.7), sc);
      // Transmembrane MHC-II stalk + glowing bacterial peptide highlight seated right in the outward groove!
      S_MHCII_STALK.tube([base.clone().addScaledVector(dir, -0.10), pos], 0.036, 0.032, col('#2c94d8'), col('#60d4ff'), 7, false);
      S_MHCII_STALK.add(pos.clone().addScaledVector(dir, 0.27 * sc), 0.16 * sc, col('#ffba38'));
      if (idx < 5) SITES.mhcii_display.push(pos.clone());
      placed++;
    });
    I_MHCII.done();
    S_MHCII_STALK.done();
  }

  // -------------------------------------------------------------------------
  // ARM 2 (CENTER) — Humoral Immunity: SARS-CoV-2 Virion Coated by Golden
  //                  Y-Shaped IgG (1IGT) & Neutralizing Fab (7BZ5) Blocking ACE2 (6M0J)
  // -------------------------------------------------------------------------
  function buildHumoralIggArm(T) {
    // 2A. Cutaway SARS-CoV-2 Enveloped Virion (Shell #3!)
    const virionShellMat = cinemaShellMat('virion_target', '#b8284e', '#ff86a6', FRONT_CLIP, {
      attenCol: '#9c1c3e',
      attenDist: 2.8,
      sssColor: '#ff5c86',
      sssIntensity: 0.36,
      iridescence: 0.52,
      thickness: 0.42,
      roughness: 0.12,
      sheenColor: '#ffd4e2',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    virionFloatRoot.add(shade(new THREE.Mesh(new THREE.SphereGeometry(VIRION_R, 56, 40), virionShellMat), true, true));

    // Dark crimson interior cutaway cavity + glowing helical Nucleocapsid N-(+)ssRNA coil!
    const virBackMat = reg(
      'virion_target',
      phys(
        {
          color: '#2c0818',
          roughness: 0.58,
          side: THREE.BackSide,
          normalMap: protBump,
          normalScale: new THREE.Vector2(0.24, 0.24),
        },
        FRONT_CLIP
      )
    );
    virionFloatRoot.add(new THREE.Mesh(new THREE.SphereGeometry(VIRION_R * 0.94, 44, 32), virBackMat));

    const S_RNA = sculpt('virion_target', virionFloatRoot, {
      emissive: '#941e50',
      emissiveIntensity: 0.52,
      roughness: 0.28,
      clearcoat: 0.48,
    }, '#ff72aa');
    const rnaPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 54; i++) {
      const t = i / 54;
      const ang = t * Math.PI * 7.5;
      const rad = 0.56 * Math.sin(t * Math.PI * 0.85 + 0.15);
      rnaPts.push(V(Math.cos(ang) * rad, (t - 0.5) * 1.15, -0.18 + Math.sin(ang) * rad * 0.65));
    }
    S_RNA.tube(rnaPts, 0.042, 0.042, col('#ff6ca0'), col('#ffa4c8'), 8, true);
    for (let i = 3; i < rnaPts.length - 3; i += 3) {
      S_RNA.add(rnaPts[i], 0.135, col('#ff92bc')); // Nucleocapsid N-protein beads
    }
    // Virion M/E membrane protein rivets
    for (let i = 0; i < 24; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 24);
      const th = Math.PI * (1 + Math.sqrt(5)) * i;
      const d = V(Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th));
      if (d.z > 0.28) continue;
      S_RNA.add(d.clone().multiplyScalar(VIRION_R), 0.12, col('#ff6488'));
    }
    S_RNA.done();
    SITES.virion_target.push(VIRION_C.clone());

    // 2B. Spike Trimers + REAL PDB 7BZ5 Spike RBDs & Neutralizing Fab Clamps + 1IGT Golden Y-IgG Swarm!
    const rbdMat = makeCinemaProteinMat('spike_rbd', {
      emissive: '#9e1c3a',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.54,
    }, '#ff6e8a', 0.34);
    const fabMat = makeCinemaProteinMat('fab_arms', {
      emissive: '#a88412',
      emissiveIntensity: 0.44,
      roughness: 0.22,
      clearcoat: 0.64,
    }, '#fff288', 0.38);
    const fcMat = makeCinemaProteinMat('fc_stem', {
      emissive: '#944e0c',
      emissiveIntensity: 0.34,
      roughness: 0.24,
      clearcoat: 0.58,
    }, '#ffb454', 0.34);
    const iggMat = makeCinemaProteinMat('igg_antibody', {
      emissive: '#9e7210',
      emissiveIntensity: 0.38,
      roughness: 0.22,
      clearcoat: 0.64,
    }, '#ffe86e', 0.36);
    modeRefs.fabMat = fabMat;
    modeRefs.fcMat = fcMat;
    modeRefs.iggMat = iggMat;

    const I_RBD = makeMolBatch(T.geoRbd7bz5, rbdMat, virionFloatRoot);
    const I_FAB7 = makeMolBatch(T.geoFab7bz5, fabMat, virionFloatRoot);
    const I_IGG = makeMolBatch(T.geoIggFull, iggMat, virionFloatRoot);
    const I_IGG_FAB = makeMolBatch(T.geoIggFab, fabMat, virionFloatRoot);
    const I_IGG_FC = makeMolBatch(T.geoIggFc, fcMat, virionFloatRoot);
    const S_SPIKE_STALK = sculpt('spike_rbd', virionFloatRoot, {
      emissive: '#7e1a32',
      emissiveIntensity: 0.32,
      roughness: 0.28,
    }, '#ff728c');

    // Fibonacci sphere of 22 Spike Trimers around the virion — all capped with real 7BZ5 RBDs & 1IGT/7BZ5 antibodies!
    const spikeDirs: THREE.Vector3[] = [];
    // Include 3 hero downward-facing Spikes directly aimed toward the blocked host ACE2 receptors below!
    spikeDirs.push(
      V(0.0, -0.96, 0.28).normalize(),
      V(-0.46, -0.84, 0.28).normalize(),
      V(0.46, -0.84, 0.28).normalize()
    );
    for (let i = 0; i < 19; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 19);
      const th = Math.PI * (1 + Math.sqrt(5)) * i + 0.4;
      const d = V(Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th)).normalize();
      if (d.y < -0.68 && d.z > 0.0) continue; // avoid crowding the 3 hero downward spikes
      spikeDirs.push(d);
    }

    spikeDirs.forEach((d, idx) => {
      const isHeroDown = idx < 3;
      const stalk0 = d.clone().multiplyScalar(VIRION_R * 0.96);
      const stalk1 = d.clone().multiplyScalar(VIRION_R + (isHeroDown ? 0.34 : 0.28));
      S_SPIKE_STALK.tube([stalk0, stalk1], 0.058, 0.084, col('#c8284e'), col('#ff5474'), 9, true);

      // Mount real 7BZ5 Spike RBD + Neutralizing Fab crystal lock directly at stalk tip!
      const lockOrigin = d.clone().multiplyScalar(VIRION_R + (isHeroDown ? 0.52 : 0.44));
      const qSpike = qFromY(d, idx * 0.9);
      const rbdScale = isHeroDown ? 1.08 : 0.88;
      I_RBD.add(lockOrigin, qSpike, rbdScale);
      placed++;

      if (isHeroDown) {
        // Hero Neutralization Zone: exact crystal 7BZ5 Fab clamp + split 1IGT Fab/Fc antibody so EVERY domain highlights cleanly!
        I_FAB7.add(lockOrigin, qSpike, rbdScale);
        placed++;
        const iggPos = d.clone().multiplyScalar(VIRION_R + 0.72);
        // Flip 1IGT so its twin Fab arms (+Y) embrace the Spike RBD inward (-d) and its Fc stem (-Y) points outward (+d)!
        const qHeroIgg = qFromY(d.clone().negate(), idx === 0 ? 0.0 : idx === 1 ? 0.4 : -0.4);
        I_IGG_FAB.add(iggPos, qHeroIgg, 1.02);
        I_IGG_FC.add(iggPos, qHeroIgg, 1.02);
        placed += 2;
        if (idx === 0) {
          SITES.spike_rbd.push(VIRION_C.clone().add(stalk1));
          SITES.fab_arms.push(VIRION_C.clone().add(lockOrigin));
          SITES.fc_stem.push(VIRION_C.clone().add(d.clone().multiplyScalar(VIRION_R + 0.96)));
        }
      } else {
        // Surrounding Neutralization Corona: alternating full 1IGT Y-antibodies & 7BZ5 Fab locks!
        if (idx % 2 === 0) {
          I_FAB7.add(lockOrigin, qSpike, 0.86);
          placed++;
        }
        const iggPos = d.clone().multiplyScalar(VIRION_R + 0.64);
        const qSwarm = qFromY(d.clone().negate(), idx * 0.65);
        I_IGG.add(iggPos, qSwarm, rr(0.88, 1.04));
        placed++;
        if (SITES.igg_antibody.length < 6) SITES.igg_antibody.push(VIRION_C.clone().add(iggPos));
        if (idx % 3 === 1) {
          // Also add split hero-clarity IgGs on upper flanks so hovering fab_arms / fc_stem illuminates the whole corona!
          const flankPos = d.clone().multiplyScalar(VIRION_R + 0.82).add(V(rr(-0.1, 0.1), rr(-0.1, 0.1), 0));
          I_IGG_FAB.add(flankPos, qSwarm, 0.80);
          I_IGG_FC.add(flankPos, qSwarm, 0.80);
          placed += 2;
        }
      }
    });

    // Extra free-floating incoming Y-shaped IgG antibodies swarming around the virion perimeter!
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.2;
      const r = rr(1.92, 2.28);
      const p = V(Math.cos(a) * r, Math.sin(a) * r * 0.78 + 0.16, rr(-0.42, 0.56));
      if (p.y < -1.35) continue;
      const inward = p.clone().negate().normalize();
      I_IGG.add(p, qFromY(inward, i * 0.8), rr(0.76, 0.92));
      placed++;
    }

    I_RBD.done();
    I_FAB7.done();
    I_IGG.done();
    I_IGG_FAB.done();
    I_IGG_FC.done();
    S_SPIKE_STALK.done();

    // 2C. Host Mucosal Epithelial Apical Membrane & Sterically Blocked REAL PDB 6M0J ACE2 Receptors (Shell #4!)
    const epiMemMat = cinemaShellMat('ace2_blocked', '#1e8a72', '#82ffd8', {}, {
      attenCol: '#146a58',
      attenDist: 3.4,
      sssColor: '#4cf5c2',
      sssIntensity: 0.30,
      iridescence: 0.46,
      thickness: 0.36,
      roughness: 0.14,
      sheenColor: '#d8fff4',
      normalMap: bump(10, 6),
      normalScale: 0.20,
    });

    // Gently arched mucosal epithelial lipid bilayer shelf directly below the neutralized virion!
    const epiGeo = new THREE.BoxGeometry(3.35, 0.28, 1.35, 32, 2, 10);
    const ep = epiGeo.attributes.position;
    for (let i = 0; i < ep.count; i++) {
      const vx = ep.getX(i), vy = ep.getY(i), vz = ep.getZ(i);
      const arch = -0.14 * (vx * vx) / 2.8 + 0.03 * Math.cos(vz * 2.4);
      ep.setY(i, vy + arch);
    }
    epiGeo.computeVertexNormals();
    const epiMesh = shade(new THREE.Mesh(epiGeo, epiMemMat), true, true);
    epiMesh.position.set(0.0, -1.34, 0.36);
    cell.add(epiMesh);

    const ace2Mat = makeCinemaProteinMat('ace2_blocked', {
      emissive: '#107258',
      emissiveIntensity: 0.36,
      roughness: 0.26,
      clearcoat: 0.56,
    }, '#5cffca', 0.34);
    const I_ACE2 = makeMolBatch(T.geoAce2, ace2Mat, cell);
    const S_ACE2_STALK = sculpt('ace2_blocked', cell, {
      emissive: '#147a5e',
      emissiveIntensity: 0.38,
      roughness: 0.28,
    }, '#70ffd4');

    // Place 11 real 6M0J human ACE2 receptors reaching upward toward the virion, clearly BLOCKED by IgG Fabs!
    const ace2Offsets = [
      [0.0, 0.56, 1.15],
      [-0.64, 0.58, 1.06],
      [0.64, 0.58, 1.06],
      [-1.18, 0.44, 0.96],
      [1.18, 0.44, 0.96],
      [-0.36, 0.10, 0.94],
      [0.36, 0.10, 0.94],
      [-0.96, -0.02, 0.90],
      [0.96, -0.02, 0.90],
      [-0.22, 0.84, 0.92],
      [0.22, 0.84, 0.92],
    ];
    ace2Offsets.forEach(([ox, oz, sc], idx) => {
      const archY = -1.20 - 0.14 * (ox * ox) / 2.8;
      const base = V(ox, archY, oz);
      const top = V(ox, archY + 0.42 * sc, oz);
      const tilt = V(-ox * 0.08, 1, 0.06).normalize();
      I_ACE2.add(top, qFromY(tilt, idx * 0.5), sc);
      S_ACE2_STALK.tube([base.clone().add(V(0, -0.14, 0)), top.clone().add(V(0, -0.10, 0))], 0.036, 0.030, col('#24b48c'), col('#56f0c2'), 7, false);
      if (idx < 3) SITES.ace2_blocked.push(top.clone());
      placed++;
    });
    I_ACE2.done();
    S_ACE2_STALK.done();

    // Crisp Non-Overlapping Steric-Blockade Repulsion Arcs Between IgG-Capped Spike RBDs & Blocked Host ACE2!
    const stericMat = reg(
      'ace2_blocked',
      phys({
        color: '#ff6478',
        emissive: '#ff3458',
        emissiveIntensity: 0.94,
        roughness: 0.20,
        transparent: true,
        opacity: 0.80,
        depthWrite: false,
      })
    );
    modeRefs.stericMat = stericMat;
    [-0.68, 0.0, 0.68].forEach((sx, idx) => {
      const arc = new THREE.Mesh(new THREE.TorusGeometry(0.19 + (idx === 1 ? 0.03 : 0), 0.017, 10, 32, Math.PI), stericMat);
      arc.position.set(sx, -0.30, 0.62);
      arc.rotation.z = Math.PI; // Downward shield arc repelling ACE2
      stericArcsGroup.add(arc);
    });
  }

  // -------------------------------------------------------------------------
  // ARM 3 (RIGHT) — Cellular Immunity: Agile Violet CD8+ Cytotoxic T-Cell
  //                 Forming 15 nm Immunological Synapse (1AO7 TCR-pMHC-I,
  //                 3NSJ Perforin 18 nm Barrel Pore, 1IAU Granzyme B Apoptosis)
  // -------------------------------------------------------------------------
  function buildCellularCd8Arm(T) {
    // 3A. Agile Violet CD8+ Cytotoxic T-Cell (Shell #5!)
    const cd8ShellMat = cinemaShellMat('cd8_tcell', '#6830d8', '#cca8ff', FRONT_CLIP, {
      attenCol: '#5022b0',
      attenDist: 3.8,
      sssColor: '#b47cff',
      sssIntensity: 0.36,
      iridescence: 0.58,
      thickness: 0.48,
      roughness: 0.11,
      sheenColor: '#f0dcff',
      normalMap: bump(12, 10),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(buildOrganicEllipsoidGeo(CD8_C, CD8_R, 1.0, 9.1, 0.052, 92), cd8ShellMat), true, true));

    const cd8BackMat = reg(
      'cd8_tcell',
      applyBacklitSSS(
        phys(
          {
            color: '#180c32',
            roughness: 0.60,
            side: THREE.BackSide,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          FRONT_CLIP
        ),
        '#9c68ff',
        0.22,
        2.6
      )
    );
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(CD8_C, CD8_R, 0.955, 9.1, 0.052, 72), cd8BackMat));

    const cd8RimMat = reg(
      'cd8_tcell',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.26,
        metalness: 0.08,
        emissive: '#4e20a8',
        emissiveIntensity: 0.50,
        side: THREE.DoubleSide,
      })
    );
    cutRimGroup.add(
      new THREE.Mesh(
        buildFrontCutRimGeo(
          CD8_C,
          CD8_R,
          CUT_Z,
          9.1,
          0.052,
          [
            [1.00, 0.976, '#d6b4ff'],
            [0.976, 0.952, '#5a28be'],
          ],
          144
        ),
        cd8RimMat
      )
    );

    // Classic Large Spherical T-Lymphocyte Nucleus + Polarized MTOC Centrosome & Microtubule Tracks Aimed at Synapse!
    const S_CD8_INT = sculpt('cd8_tcell', cell, {
      emissive: '#3e1a8a',
      emissiveIntensity: 0.36,
      roughness: 0.30,
      clearcoat: 0.56,
    }, '#c498ff');
    const tNucPos = CD8_C.clone().add(V(0.42, 0.24, -0.34));
    S_CD8_INT.lobe(tNucPos, 0.76, 0.86, 0.66, col('#7a48e8'));
    // Polarized MTOC centriole pair docked right behind the synapse face!
    const mtocPos = CD8_C.clone().add(V(-0.88, -0.26, 0.16));
    S_CD8_INT.add(mtocPos, 0.22, col('#60f0ff'));
    // Radiating polarized microtubules delivering lytic granules to the synapse
    for (let m = 0; m < 6; m++) {
      const a = (m / 6) * Math.PI * 2;
      const tip = mtocPos.clone().add(V(-0.36 + 0.18 * Math.cos(a), 0.72 * Math.sin(a), 0.18 * Math.cos(a * 2)));
      S_CD8_INT.tube([mtocPos, tip], 0.024, 0.015, col('#68e8ff'), col('#b892ff'), 6, true);
    }
    S_CD8_INT.done();
    SITES.cd8_tcell.push(CD8_C.clone().add(V(0.88, 0.88, 0.26)), mtocPos.clone());

    // 3B. Distressed Virus-Infected Human Epithelial Target Cell (Shell #6!)
    const targetShellMat = cinemaShellMat('perforin_pore', '#b4344c', '#ff98a4', FRONT_CLIP, {
      attenCol: '#8c2238',
      attenDist: 3.2,
      sssColor: '#ff6c7c',
      sssIntensity: 0.32,
      iridescence: 0.44,
      thickness: 0.42,
      roughness: 0.14,
      sheenColor: '#ffd4da',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(buildOrganicEllipsoidGeo(TARGET_C, TARGET_R, 1.0, 12.4, 0.056, 84), targetShellMat), true, true));

    const targetBackMat = reg(
      'perforin_pore',
      phys(
        {
          color: '#280a16',
          roughness: 0.62,
          side: THREE.BackSide,
          normalMap: protBump,
          normalScale: new THREE.Vector2(0.22, 0.22),
        },
        FRONT_CLIP
      )
    );
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(TARGET_C, TARGET_R, 0.955, 12.4, 0.056, 68), targetBackMat));

    const targetRimMat = reg(
      'perforin_pore',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        metalness: 0.08,
        emissive: '#6e1830',
        emissiveIntensity: 0.44,
        side: THREE.DoubleSide,
      })
    );
    cutRimGroup.add(
      new THREE.Mesh(
        buildFrontCutRimGeo(
          TARGET_C,
          TARGET_R,
          CUT_Z,
          12.4,
          0.056,
          [
            [1.00, 0.974, '#ff9aa8'],
            [0.974, 0.948, '#8a243c'],
          ],
          132
        ),
        targetRimMat
      )
    );

    // Dying target cell fragmented chromatin nucleus & caspase apoptosis rings!
    const apoptosisMat = reg(
      'granzyme_b',
      phys({
        color: '#ff5c7c',
        emissive: '#ff2852',
        emissiveIntensity: 0.88,
        roughness: 0.22,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
      })
    );
    modeRefs.apoptosisMat = apoptosisMat;
    for (let r = 0; r < 3; r++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28 + r * 0.20, 0.022, 10, 36), apoptosisMat);
      ring.position.copy(TARGET_C).add(V(-0.18, -0.06, 0.14 + r * 0.04));
      ring.rotation.set(0.18 * r, -0.22 * r, 0);
      apoptosisGroup.add(ring);
      caspaseRings.push(ring);
    }

    // 3C. REAL PDB 1AO7 TCR-pMHC-I Ternary Recognition Complex + 9-mer Viral Peptide Bridging the 15 nm Synapse!
    const tcrMat = makeCinemaProteinMat('tcr_mhci', {
      emissive: '#3846b8',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      clearcoat: 0.60,
    }, '#90b4ff', 0.36);
    const peptideMat = makeCinemaProteinMat('viral_peptide', {
      emissive: '#d838b4',
      emissiveIntensity: 0.86,
      roughness: 0.18,
      clearcoat: 0.72,
    }, '#ffa4f0', 0.44);
    modeRefs.tcrMat = tcrMat;
    modeRefs.peptideMat = peptideMat;

    const I_TCR = makeMolBatch(T.geoTcrMhci, tcrMat, cell);
    const I_PEP = makeMolBatch(T.geoViralPeptide, peptideMat, cell);
    const S_TCR_CO = sculpt('tcr_mhci', cell, {
      emissive: '#3040a4',
      emissiveIntensity: 0.42,
      roughness: 0.26,
    }, '#88a8ff');
    const S_PEP_GLOW = sculpt('viral_peptide', cell, {
      emissive: '#e636be',
      emissiveIntensity: 0.92,
      roughness: 0.18,
      clearcoat: 0.76,
    }, '#ffb0f4');

    // 4 Well-Spaced Real 1AO7 TCR-pMHC-I Complexes Spanning the Upper Immunological Synapse Cleft!
    // Clean spacing ensures every MHC-I, TCR alpha/beta & glowing 9-mer viral peptide groove reads effortlessly!
    const synapsePairs: Array<[THREE.Vector3, number, number]> = [
      [TCR_P.clone(), 1.24, 0.16],
      [TCR_P.clone().add(V(-0.08, 0.68, -0.12)), 1.06, 0.26],
      [TCR_P.clone().add(V(0.06, -0.52, -0.22)), 1.04, 0.08],
      [TCR_P.clone().add(V(-0.04, 0.30, -0.58)), 0.96, 0.20],
    ];
    synapsePairs.forEach(([pos, sc, tiltY], idx) => {
      const axis = V(1, tiltY, -0.06).normalize();
      const qSyn = qFromX(axis, idx * 0.20);
      I_TCR.add(pos, qSyn, sc);
      I_PEP.add(pos, qSyn, sc * 1.24);
      placed += 2;

      // Subtle membrane stalks terminating cleanly at each protein's membrane-proximal base (never cutting across the groove!)
      const mhcBase = pos.clone().addScaledVector(axis, -0.54 * sc);
      const tcrBase = pos.clone().addScaledVector(axis, +0.56 * sc);
      S_TCR_CO.tube([mhcBase, pos.clone().addScaledVector(axis, -0.34 * sc)], 0.032, 0.028, col('#42a8ff'), col('#74d4ff'), 8, false);
      S_TCR_CO.tube([pos.clone().addScaledVector(axis, +0.34 * sc), tcrBase], 0.034, 0.028, col('#9e68ff'), col('#c496ff'), 8, false);
      // Curved slender CD8 alpha/beta co-receptor tucked gently behind-below the MHC-I alpha3 domain
      const cd8Curve = [
        tcrBase.clone().add(V(0, -0.18 * sc, -0.10)),
        pos.clone().add(V(0.04, -0.26 * sc, -0.14)),
        mhcBase.clone().addScaledVector(axis, 0.20 * sc).add(V(0, -0.16 * sc, -0.10)),
      ];
      S_TCR_CO.tube(cd8Curve, 0.017, 0.016, col('#68e4ff'), col('#9c84ff'), 6, true);

      // Luminous 9-mer viral peptide backbone pearls visibly gleaming right inside the front 1AO7 binding cleft!
      for (let aa = -2; aa <= 2; aa++) {
        const pBead = pos.clone().add(V(-0.03 * sc, aa * 0.058 * sc, 0.14 * sc));
        S_PEP_GLOW.add(pBead, 0.115 * sc, aa % 2 === 0 ? col('#ff6ce0') : col('#ffd854'));
      }
      if (idx < 3) {
        SITES.tcr_mhci.push(pos.clone());
        SITES.viral_peptide.push(pos.clone().add(V(-0.03, 0, 0.14)));
      }
    });
    I_TCR.done();
    I_PEP.done();
    S_TCR_CO.done();
    S_PEP_GLOW.done();

    // 3D. REAL PDB 3NSJ Transmembrane Perforin 18 nm Hollow Barrel Pore Piercing the Infected Target Cell!
    const perforinMat = makeCinemaProteinMat('perforin_pore', {
      emissive: '#9c1c4e',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      clearcoat: 0.62,
    }, '#ff72a8', 0.36);
    modeRefs.perforinMat = perforinMat;

    // Position Hero Perforin Pore right on the synapse-facing membrane of the Infected Target Cell,
    // tilted cleanly toward the viewer so the open ~18 nm aqueous lumen is unmistakable!
    perforinRingGroup.position.copy(PERF_P);
    perforinRingGroup.rotation.set(0.16, -0.52, Math.PI / 2 - 0.12);

    const I_PERF_HERO = makeMolBatch(T.geoPerforin, perforinMat, perforinRingGroup);
    const N_PORE = 16;
    const R_PORE = 0.46;
    for (let i = 0; i < N_PORE; i++) {
      const a = (i / N_PORE) * Math.PI * 2;
      const p = V(Math.cos(a) * R_PORE, 0, Math.sin(a) * R_PORE);
      const q = new THREE.Quaternion().setFromAxisAngle(UP, -a);
      I_PERF_HERO.add(p, q, 0.56);
      placed++;
    }
    I_PERF_HERO.done();

    // Crisp hollow aqueous barrel core + glowing pore collar rings so Granzyme B visibly pours down an open channel!
    const poreLumenMat = reg(
      'perforin_pore',
      phys({
        color: '#220618',
        emissive: '#6e1038',
        emissiveIntensity: 0.45,
        roughness: 0.72,
        side: THREE.BackSide,
      })
    );
    perforinRingGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(R_PORE - 0.14, R_PORE - 0.14, 0.48, 28, 1, true), poreLumenMat));

    const S_PORE_RIM = sculpt('perforin_pore', perforinRingGroup, {
      emissive: '#d6286a',
      emissiveIntensity: 0.74,
      roughness: 0.20,
      clearcoat: 0.68,
    }, '#ff84b8');
    S_PORE_RIM.ring(V(0, 0.25, 0), UP, R_PORE + 0.01, 0.032, col('#ff78ac'), 36, 8);
    S_PORE_RIM.ring(V(0, -0.25, 0), UP, R_PORE, 0.028, col('#ff5288'), 36, 8);
    S_PORE_RIM.done();
    SITES.perforin_pore.push(PERF_P.clone());

    // Second assembling Perforin pre-pore arc lower down the synapse (10 more real 3NSJ monomers!)
    const prePoreGrp = new THREE.Group();
    prePoreGrp.position.copy(PERF_P).add(V(0.10, -0.82, -0.18));
    prePoreGrp.rotation.set(-0.22, -0.42, Math.PI / 2 - 0.30);
    cell.add(prePoreGrp);
    const I_PERF_PRE = makeMolBatch(T.geoPerforin, perforinMat, prePoreGrp);
    for (let i = 0; i < 10; i++) {
      const a = (i / 14) * Math.PI * 2;
      I_PERF_PRE.add(V(Math.cos(a) * 0.29, 0, Math.sin(a) * 0.29), new THREE.Quaternion().setFromAxisAngle(UP, -a), 0.56);
      placed++;
    }
    I_PERF_PRE.done();
    SITES.perforin_pore.push(prePoreGrp.position.clone());

    // 3E. REAL PDB 1IAU Granzyme B Proteases Stored in CD8+ Lytic Granules & Pouring Through the Perforin Pore!
    const granzymeMat = makeCinemaProteinMat('granzyme_b', {
      emissive: '#b41c3c',
      emissiveIntensity: 0.48,
      roughness: 0.22,
      clearcoat: 0.66,
    }, '#ff647c', 0.38);
    modeRefs.granzymeMat = granzymeMat;

    const I_GRZ_STATIC = makeMolBatch(T.geoGranzyme, granzymeMat, cell);
    // 1. Cytotoxic lytic granules packed inside CD8+ T-cell near the synapse face (14 real 1IAU complexes)
    const granuleCenters = [
      CD8_C.clone().add(V(-0.74, -0.74, 0.20)),
      CD8_C.clone().add(V(-0.56, -0.34, 0.28)),
      CD8_C.clone().add(V(-0.82, 0.36, 0.22)),
    ];
    const granuleMemMat = reg(
      'granzyme_b',
      phys({
        color: '#ff6488',
        emissive: '#881838',
        emissiveIntensity: 0.38,
        roughness: 0.16,
        transparent: true,
        opacity: 0.34,
        depthWrite: false,
      })
    );
    granuleCenters.forEach((gc, idx) => {
      const gm = new THREE.Mesh(new THREE.SphereGeometry(0.28, 22, 16), granuleMemMat);
      gm.position.copy(gc);
      cell.add(gm);
      for (let j = 0; j < 4; j++) {
        const a = (j / 4) * Math.PI * 2 + idx;
        I_GRZ_STATIC.add(
          gc.clone().add(V(Math.cos(a) * 0.11, Math.sin(a) * 0.11, rr(-0.08, 0.08))),
          qFromY(V(rr(-1, 1), rr(-1, 1), rr(-1, 1))),
          rr(0.62, 0.74)
        );
        placed++;
      }
    });

    // 2. Granzyme B molecules already inside the dying infected cell activating caspases (12 real 1IAU complexes)
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.3;
      const p = TARGET_C.clone().add(V(rr(-0.48, 0.44), rr(-0.62, 0.54), rr(-0.22, 0.34)));
      I_GRZ_STATIC.add(p, qFromY(V(Math.cos(a), Math.sin(a), 0.4)), rr(0.68, 0.84));
      placed++;
      if (i < 2) SITES.granzyme_b.push(p.clone());
    }
    I_GRZ_STATIC.done();

    // 3. Live Animated Real 1IAU Granzyme B Proteases Pouring Directly Down the Perforin Barrel Conduit!
    const pourCurve = new THREE.CatmullRomCurve3([
      CD8_C.clone().add(V(-0.96, -0.56, 0.38)),
      PERF_P.clone().add(V(0.54, 0.10, 0.12)),
      PERF_P.clone().add(V(0.0, 0.02, 0.04)),
      GRZB_P.clone(),
      TARGET_C.clone().add(V(-0.18, -0.10, 0.24)),
    ]);
    for (let k = 0; k < 7; k++) {
      const m = shade(new THREE.Mesh(T.geoGranzyme, granzymeMat), true, true);
      m.scale.setScalar(0.84);
      cell.add(m);
      granzymeStreamObjs.push({ mesh: m, curve: pourCurve, phase: k / 7, spin: 1.4 + k * 0.25 });
      placed++;
    }
    SITES.granzyme_b.push(GRZB_P.clone(), PERF_P.clone().add(V(-0.22, 0, 0.04)));
  }

  // -------------------------------------------------------------------------
  // 4. Centered Zero-Clipping Circular Optical Atomic Lens ('immune_atoms')
  //    Left Half:  CDR3–Epitope Hydrogen-Bond Network (N–H ··· O=C, 2.8 Å)
  //    Right Half: IgG Hinge Cys–S–S–Cys Covalent Disulfide Bridge (2.05 Å)
  //    CPK Palette: C, H, N, O, S — ALL labels mathematically inside R_RING = 1.66!
  // -------------------------------------------------------------------------
  function buildAtomicImmuneInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    cell.add(grp);

    const R_RING = 1.66;

    // Luminous sapphire-to-gold optical lens bezel ring
    const ringMat = reg(
      'immune_atoms',
      phys({
        color: '#7ce8ff',
        emissive: '#1e6e9c',
        emissiveIntensity: 0.50,
        roughness: 0.18,
        metalness: 0.28,
        clearcoat: 0.78,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.040, 16, 72), ringMat));

    // Matte dark-field optical aperture backing disc (zero glare dot, ultra-high CPK contrast!)
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 64),
      reg(
        'immune_atoms',
        phys({
          color: '#060d1e',
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

    const S_AT = sculpt('immune_atoms', grp, { roughness: 0.20, clearcoat: 0.68 }, '#90efff');
    const cC = col('#94a4ba'); // Carbon — slate silver
    const cH = col('#f2f8ff'); // Hydrogen — pearl white
    const cN = col('#4c98ff'); // Nitrogen — cobalt blue
    const cO = col('#ff5064'); // Oxygen — crimson red
    const cS = col('#ffe248'); // Sulfur — vivid disulfide gold!
    const cBond = col('#cbd9ec');

    // Vertical center divider strictly inside lens
    S_AT.stick(V(0.0, -0.78, -0.04), V(0.0, 0.68, -0.04), 0.011, col('#6a82a4'), col('#6a82a4'));

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.022) => S_AT.stick(a, b, r, c1, c2);

    // === LEFT HALF: CDR3 LOOP (TOP) <-> VIRAL EPITOPE (BOTTOM) HYDROGEN-BOND NETWORK ===
    // 3 anti-parallel N-H ... O=C / O-H ... O hydrogen bonds spanning a 2.8 A specificity cleft!
    const hbCols = [V(-1.12, 0, 0.08), V(-0.74, 0, 0.08), V(-0.36, 0, 0.08)];
    const cdrBackPts: THREE.Vector3[] = [];
    const epiBackPts: THREE.Vector3[] = [];

    const hbDashMat = reg(
      'immune_atoms',
      phys({
        color: '#7ef8ff',
        emissive: '#38e8ff',
        emissiveIntensity: 0.94,
        roughness: 0.16,
      })
    );

    hbCols.forEach((colP, i) => {
      const topY = 0.44 + (i === 1 ? 0.06 : 0.0);
      const botY = -0.44 - (i === 1 ? 0.06 : 0.0);

      // CDR3 backbone C-alpha + donor/acceptor atom
      const cTop = V(colP.x, topY, 0.06);
      cdrBackPts.push(cTop);
      atom(cTop, 0.066, cC);

      const isDonorTop = i !== 1;
      const dTop = V(colP.x, topY - 0.22, 0.08);
      atom(dTop, 0.070, isDonorTop ? cN : cO);
      bond(cTop, dTop, cC, isDonorTop ? cN : cO, 0.022);

      // Epitope backbone C-alpha + partner atom
      const cBot = V(colP.x, botY, 0.06);
      epiBackPts.push(cBot);
      atom(cBot, 0.066, cC);

      const dBot = V(colP.x, botY + 0.22, 0.08);
      atom(dBot, 0.070, isDonorTop ? cO : cN);
      bond(cBot, dBot, cC, isDonorTop ? cO : cN, 0.022);

      // Bridging Hydrogen atom (covalently bound to donor, H-bonded to acceptor!)
      const hPos = V(colP.x, isDonorTop ? topY - 0.36 : botY + 0.36, 0.09);
      atom(hPos, 0.048, cH);
      bond(isDonorTop ? dTop : dBot, hPos, cN, cH, 0.017);

      // 3 glowing cyan H-bond dashes across the 2.8 A non-covalent gap!
      const gapA = hPos;
      const gapB = isDonorTop ? dBot : dTop;
      for (let d = 1; d <= 3; d++) {
        const dp = gapA.clone().lerp(gapB, d / 4);
        const dash = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), hbDashMat);
        dash.position.copy(dp);
        grp.add(dash);
        hbondPulseMeshes.push(dash);
      }
    });
    // Connect CDR3 and Epitope peptide backbones
    for (let i = 0; i < 2; i++) {
      const midTop = cdrBackPts[i].clone().lerp(cdrBackPts[i + 1], 0.5).add(V(0, 0.09, 0));
      atom(midTop, 0.056, i === 0 ? cN : cC);
      bond(cdrBackPts[i], midTop, cC, i === 0 ? cN : cC, 0.020);
      bond(midTop, cdrBackPts[i + 1], i === 0 ? cN : cC, cC, 0.020);

      const midBot = epiBackPts[i].clone().lerp(epiBackPts[i + 1], 0.5).add(V(0, -0.09, 0));
      atom(midBot, 0.056, i === 0 ? cC : cN);
      bond(epiBackPts[i], midBot, cC, i === 0 ? cC : cN, 0.020);
      bond(midBot, epiBackPts[i + 1], i === 0 ? cC : cN, cC, 0.020);
    }

    // === RIGHT HALF: IgG HINGE Cys–S–S–Cys COVALENT DISULFIDE BRIDGE (2.05 Å) ===
    // Heavy Chain 1 (left-right side) & Heavy Chain 2 covalently stapled by twin golden Sulfur atoms!
    const s1 = V(0.56, 0.02, 0.10);
    const s2 = V(0.94, -0.02, 0.10);
    atom(s1, 0.108, cS);
    atom(s2, 0.108, cS);
    bond(s1, s2, cS, cS, 0.032); // Hero 2.05 A covalent S-S bridge!

    // Glowing golden covalent lock ring around the S-S disulfide bond
    const ssHaloMat = reg(
      'immune_atoms',
      phys({
        color: '#ffe858',
        emissive: '#ffb824',
        emissiveIntensity: 0.94,
        roughness: 0.16,
        transparent: true,
        opacity: 0.68,
        depthWrite: false,
      })
    );
    disulfideHalo = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.020, 10, 32), ssHaloMat);
    disulfideHalo.position.set(0.75, 0.0, 0.10);
    grp.add(disulfideHalo);

    // Cys-1 (left cysteine on Heavy Chain A)
    const cb1 = V(0.36, 0.24, 0.08);
    const ca1 = V(0.26, 0.46, 0.06);
    const n1 = V(0.44, 0.62, 0.06);
    const co1 = V(0.22, -0.18, 0.06);
    const o1 = V(0.38, -0.34, 0.06);
    atom(cb1, 0.064, cC);
    atom(ca1, 0.068, cC);
    atom(n1, 0.066, cN);
    atom(co1, 0.062, cC);
    atom(o1, 0.066, cO);
    bond(s1, cb1, cS, cC, 0.024);
    bond(cb1, ca1, cC, cC, 0.022);
    bond(ca1, n1, cC, cN, 0.022);
    bond(cb1, co1, cC, cC, 0.020);
    bond(co1, o1, cC, cO, 0.022);
    // Hydrogens on Cbeta-1
    const h1a = V(0.20, 0.22, 0.09);
    atom(h1a, 0.044, cH);
    bond(cb1, h1a, cC, cH, 0.016);

    // Cys-2 (right cysteine on Heavy Chain B)
    const cb2 = V(1.14, -0.24, 0.08);
    const ca2 = V(1.24, -0.46, 0.06);
    const n2 = V(1.06, -0.62, 0.06);
    const co2 = V(1.26, 0.22, 0.06);
    const o2 = V(1.10, 0.40, 0.06);
    atom(cb2, 0.064, cC);
    atom(ca2, 0.068, cC);
    atom(n2, 0.066, cN);
    atom(co2, 0.062, cC);
    atom(o2, 0.066, cO);
    bond(s2, cb2, cS, cC, 0.024);
    bond(cb2, ca2, cC, cC, 0.022);
    bond(ca2, n2, cC, cN, 0.022);
    bond(cb2, co2, cC, cC, 0.020);
    bond(co2, o2, cC, cO, 0.022);
    const h2a = V(1.30, -0.20, 0.09);
    atom(h2a, 0.044, cH);
    bond(cb2, h2a, cC, cH, 0.016);

    S_AT.done();

    // Top Caption Plaque mathematically centered inside R_RING = 1.66 (y=+0.96, 1.88x0.36 -> max corner r=1.46 << 1.62!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 104;
    const tg = topCv.getContext('2d');
    tg.clearRect(0, 0, 512, 104);
    tg.textAlign = 'center';
    tg.font = '700 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#7cf6ff';
    tg.fillText('CDR3–EPITOPE', 132, 38);
    tg.font = '600 17.5px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#d4f6ff';
    tg.fillText('2.8 Å H-Bond Net', 132, 68);

    tg.font = '700 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffe45c';
    tg.fillText('IgG HINGE', 380, 38);
    tg.font = '600 17.5px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#fff0b8';
    tg.fillText('Cys–S–S–Cys 2.05 Å', 380, 68);

    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.88, 0.36),
      reg(
        'immune_atoms',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.82,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 0.96, 0.14);
    grp.add(topLbl);

    // Bottom CPK Atomic Legend Strip strictly inside lower chord (y=-1.04, 1.68x0.24 -> max corner r=1.44 << 1.62!)
    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 72;
    const bg = botCv.getContext('2d');
    bg.clearRect(0, 0, 512, 72);
    const atomsLegend: Array<[string, string]> = [
      ['C', '#94a4ba'],
      ['H', '#f2f8ff'],
      ['N', '#4c98ff'],
      ['O', '#ff5064'],
      ['S', '#ffe248'],
    ];
    bg.font = '700 23px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 54 + idx * 92;
      bg.beginPath();
      bg.arc(bx, 36, 11, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#eef6ff';
      bg.fillText(sym, bx + 16, 37);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.68, 0.24),
      reg(
        'immune_atoms',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.82,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -1.04, 0.14);
    grp.add(botLbl);

    SITES.immune_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // 5. 6 Opaque-Discard 4x4 Atlas MOL Flow Species (Visible Through Wet Gel!)
  //    ros_burst, hydrolases, igg_swarm, ca_synapse, granzyme_flux, cytokines
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    ros_burst: ['NOX2 ROS Burst (O₂•⁻)', '#ffae38', 0, 0.24],
    hydrolases: ['Acid Hydrolases (pH 4.5)', '#ff6690', 1, 0.23],
    igg_swarm: ['IgG Antibodies (Y-IgG)', '#ffe058', 2, 0.27],
    ca_synapse: ['Synapse Ca²⁺ Signal', '#56ecff', 3, 0.22],
    granzyme_flux: ['Granzyme B Protease', '#ff4f7a', 4, 0.24],
    cytokines: ['Cytokines (IFN-γ / IL-12)', '#b488ff', 5, 0.24],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0e131e';
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
      case 0: { // ros_burst: sharp reactive radical starburst
        const rays = [];
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2;
          const r = i % 2 === 0 ? 0.38 : 0.18;
          rays.push([0.5 + Math.cos(a) * r, 0.5 + Math.sin(a) * r]);
        }
        drawPoly(rays, true, 0.09);
        drawBalls([[0.5, 0.5, 0.15]]);
        break;
      }
      case 1: // hydrolases: cleaved enzyme pacman / catalytic pocket
        drawBalls([[0.36, 0.38, 0.19], [0.64, 0.38, 0.19], [0.50, 0.66, 0.20]]);
        break;
      case 2: // igg_swarm: iconic Y-shaped antibody glyph!
        drawPoly([[0.50, 0.84], [0.50, 0.48], [0.22, 0.22]], false, 0.12);
        drawPoly([[0.50, 0.48], [0.78, 0.22]], false, 0.12);
        drawBalls([[0.22, 0.22, 0.11], [0.78, 0.22, 0.11]]);
        break;
      case 3: // ca_synapse: glowing Ca2+ divalent ion sphere
        drawBalls([[0.50, 0.50, 0.28]]);
        drawPoly([[0.34, 0.50], [0.66, 0.50]], false, 0.08);
        drawPoly([[0.50, 0.34], [0.50, 0.66]], false, 0.08);
        break;
      case 4: // granzyme_flux: serine protease diamond blade
        drawPoly([[0.50, 0.14], [0.80, 0.50], [0.50, 0.86], [0.20, 0.50]], true, 0.10);
        drawBalls([[0.50, 0.50, 0.15]]);
        break;
      case 5: { // cytokines: tri-lobe signaling messenger ring
        const pts = [];
        for (let i = 0; i < 3; i++) {
          const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
          pts.push([0.5 + Math.cos(a) * 0.24, 0.5 + Math.sin(a) * 0.24, 0.17]);
        }
        drawBalls(pts);
        break;
      }
    }
    g.restore();
  }

  const ATLAS = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d');
    for (let k = 0; k < 6; k++) glyph(g, k, (k % 4) * 128 + 10, Math.floor(k / 4) * 128 + 10, 108, '#ffffff');
    return new THREE.CanvasTexture(c);
  })();

  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: { value: 1 }, uAtlas: { value: ATLAS } },
    vertexShader: `attribute float size, glyph, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vCol = icol; vG = glyph; vFade = fade;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mvPosition.z), 0., 56.);
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
    const g = c.getContext('2d');
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
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mv.z), 0., 68.); gl_Position = projectionMatrix * mv; }`,
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

  function splash(at: THREE.Vector3, hex: string, s = 0.36) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.62, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 2.8, onDone?: () => void) {
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
    // 1. NOX2 ROS Burst flooding into the acidic phagolysosome (boosted in innate_phago!)
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        const boost = mode === 'innate_phago' ? 2 : 1;
        for (let b = 0; b < boost; b++) {
          const ang = rr(0, Math.PI * 2);
          const src = PHAGO_C.clone().add(V(Math.cos(ang) * 0.78, Math.sin(ang) * 0.78, rr(0.10, 0.32)));
          const dst = PHAGO_C.clone().add(V(rr(-0.24, 0.24), rr(-0.24, 0.24), rr(0.05, 0.24)));
          emitFlow('ros_burst', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.08, 0.08)), dst], ['lysosome_ros', 'phagosome', 'macrophage'], 1.9, () =>
            splash(dst, '#ffae38', 0.36)
          );
        }
      },
    },
    // 2. Acid Hydrolases fusing from lysosomes into phagosome + digested peptide routing to surface MHC-II!
    {
      rate: 2.3,
      acc: 0.5,
      go: () => {
        if (rand() < 0.55) {
          const src = PHAGO_C.clone().add(V(rr(-0.92, 0.22), rr(-0.88, -0.42), 0.22));
          const dst = PHAGO_C.clone().add(V(rr(-0.16, 0.16), rr(-0.16, 0.16), 0.18));
          emitFlow('hydrolases', [src, src.clone().lerp(dst, 0.5).add(V(0.10, 0.06, 0.10)), dst], ['lysosome_ros', 'phagosome', 'ecoli_target'], 2.1);
        } else {
          // Processed peptide shuttle from phagolysosome up to Macrophage surface MHC-II (1DLH)!
          const src = PHAGO_C.clone().add(V(-0.18, 0.52, 0.16));
          const mid = MACRO_C.clone().add(V(-0.35, 0.96, 0.36));
          const dst = MHCII_P.clone().add(V(rr(-0.36, 0.36), 0.06, 0.08));
          emitFlow('hydrolases', [src, mid, dst], ['phagosome', 'mhcii_display', 'macrophage'], 2.6, () =>
            splash(dst, '#54c8ff', 0.34)
          );
        }
      },
    },
    // 3. Golden Y-Shaped IgG Antibodies Swarming Onto SARS-CoV-2 Spike RBDs (boosted in humoral_igg!)
    {
      rate: 2.9,
      acc: 0.6,
      go: () => {
        const boost = mode === 'humoral_igg' ? 2 : 1;
        for (let b = 0; b < boost; b++) {
          const ang = rr(-0.6, Math.PI + 0.6);
          const src = VIRION_C.clone().add(V(Math.cos(ang) * 2.55, Math.sin(ang) * 1.95 + 0.35, rr(-0.2, 0.65)));
          const dst = rand() < 0.45
            ? LOCK_P.clone().add(V(rr(-0.55, 0.55), rr(-0.12, 0.28), 0.12))
            : VIRION_C.clone().add(V(Math.cos(ang) * 1.38, Math.sin(ang) * 1.38, rr(0.12, 0.48)));
          const mid = src.clone().lerp(dst, 0.5).add(V(rr(-0.22, 0.22), rr(0.10, 0.28), 0.18));
          emitFlow('igg_swarm', [src, mid, dst], ['igg_antibody', 'fab_arms', 'fc_stem', 'spike_rbd', 'virion_target', 'ace2_blocked'], 2.4, () =>
            splash(dst, '#ffe058', 0.38)
          );
        }
      },
    },
    // 4. Immunological Synapse Ca2+ Activation Waves Inside the CD8+ T-Cell!
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const p0 = TCR_P.clone().add(V(0.24, rr(-0.34, 0.36), 0.10));
        const p1 = CD8_C.clone().add(V(-0.62, rr(-0.18, 0.38), 0.26));
        const p2 = CD8_C.clone().add(V(-0.74, -0.58, 0.28));
        emitFlow('ca_synapse', [p0, p1, p2], ['tcr_mhci', 'viral_peptide', 'cd8_tcell', 'perforin_pore'], 2.0, () =>
          splash(p0, '#56ecff', 0.32)
        );
      },
    },
    // 5. Cytotoxic Granzyme B Protease Streaming Through Perforin Pore into Infected Target Cell (boosted in cellular_cd8!)
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        const boost = mode === 'cellular_cd8' ? 2 : 1;
        for (let b = 0; b < boost; b++) {
          const p0 = CD8_C.clone().add(V(-0.88, rr(-0.62, -0.18), 0.34));
          const p1 = PERF_P.clone().add(V(0.42, rr(-0.10, 0.12), 0.12));
          const p2 = PERF_P.clone().add(V(-0.08, rr(-0.08, 0.08), 0.06));
          const p3 = TARGET_C.clone().add(V(rr(-0.36, 0.28), rr(-0.42, 0.32), 0.26));
          emitFlow('granzyme_flux', [p0, p1, p2, p3], ['granzyme_b', 'perforin_pore', 'cd8_tcell'], 2.2, () =>
            splash(p3, '#ff4f7a', 0.40)
          );
        }
      },
    },
    // 6. Cytokines (IFN-gamma, IL-12, Chemokines) Coordinating Across All Three Arms of the Battleground!
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        if (rand() < 0.52) {
          // Macrophage IL-12 / chemokine arc recruiting humoral & cellular defenders across the mucosal corridor
          const p0 = MACRO_C.clone().add(V(0.95, 1.55, 0.32));
          const p1 = V(-1.45, 3.12, 0.56);
          const p2 = V(2.45, 3.04, 0.52);
          const p3 = CD8_C.clone().add(V(-0.55, 1.48, 0.28));
          emitFlow('cytokines', [p0, p1, p2, p3], ['macrophage', 'mhcii_display', 'cd8_tcell'], 3.6);
        } else {
          // CD8+ IFN-gamma feedback boosting Macrophage ROS killing!
          const p0 = CD8_C.clone().add(V(-0.65, -1.22, 0.36));
          const p1 = V(1.65, -1.78, 0.62);
          const p2 = V(-2.25, -1.62, 0.60);
          const p3 = MACRO_C.clone().add(V(0.65, -1.32, 0.34));
          emitFlow('cytokines', [p0, p1, p2, p3], ['cd8_tcell', 'macrophage', 'lysosome_ros'], 3.6);
        }
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
      const base = MOL[p.type][3] * 1.38;
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
      q.x += a * Math.sin(w * 5.0 + p.ph);
      q.y += a * Math.cos(w * 4.2 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.6 + p.ph * 1.9);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.50 : 0.48) : 1);
      fFade[p.i] = anyHi && !lit ? 0.25 : 1;
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
    if (counterSyncAcc >= 0.22) {
      counterSyncAcc = 0;
      syncFlowCounterUI();
    }
  }

  // -------------------------------------------------------------------------
  // Live Biological Motion (Pseudopod Engulfing, ROS Burst, IgG Virion Hover,
  //                         Perforin Pore Pulse, Granzyme B Pour & Atomic Vibrations)
  // -------------------------------------------------------------------------
  function updateImmuneAnimation(dt: number) {
    animClock += dt;

    // 1. Macrophage pseudopod wrapping & engulfed E. coli gentle struggle
    const phagoBoost = mode === 'innate_phago' ? 1.45 : 0.85;
    const cupBreath = 1 + 0.024 * Math.sin(animClock * 2.1 * phagoBoost);
    pseudopodGroup.scale.set(cupBreath, 1 + 0.015 * Math.cos(animClock * 2.1 * phagoBoost), 1);
    if (ecoliMeshGroup) {
      ecoliMeshGroup.position.x = ECOLI_P.x - 0.06 * Math.sin(animClock * 1.8 * phagoBoost);
      ecoliMeshGroup.rotation.z = 0.36 + 0.07 * Math.sin(animClock * 3.1);
    }

    // 2. NOX2 ROS oxidation halos pulsing rhythmically
    rosHalos.forEach((h, idx) => {
      const s = 1 + (mode === 'innate_phago' ? 0.15 : 0.08) * Math.sin(animClock * 3.8 + idx * 1.2);
      h.scale.setScalar(s);
    });

    // 3. Neutralized SARS-CoV-2 virion gently rocking in IgG corona while repelling ACE2
    const iggBoost = mode === 'humoral_igg' ? 1.35 : 0.85;
    virionFloatRoot.position.y = VIRION_C.y + 0.07 * Math.sin(animClock * 1.35 * iggBoost);
    virionFloatRoot.rotation.y = 0.14 * Math.sin(animClock * 0.45);
    stericArcsGroup.children.forEach((arc, idx) => {
      const s = 1 + (mode === 'humoral_igg' ? 0.14 : 0.07) * Math.sin(animClock * 4.0 + idx * 0.9);
      arc.scale.setScalar(s);
    });

    // 4. Real 1IAU Granzyme B proteases pouring continuously down the 3NSJ Perforin barrel!
    const cd8Boost = mode === 'cellular_cd8' ? 1.45 : 0.88;
    granzymeStreamObjs.forEach(item => {
      const u = (animClock * 0.28 * cd8Boost + item.phase) % 1;
      item.mesh.position.copy(item.curve.getPointAt(u));
      item.mesh.rotation.x += dt * item.spin;
      item.mesh.rotation.y += dt * item.spin * 0.8;
    });
    caspaseRings.forEach((r, idx) => {
      const p = 1 + (mode === 'cellular_cd8' ? 0.14 : 0.07) * Math.sin(animClock * 3.4 - idx * 0.8);
      r.scale.setScalar(p);
    });

    // 5. Circular Atomic Inset living pulses (disulfide covalent lock & CDR3 H-bond vibrations)
    if (disulfideHalo) {
      disulfideHalo.scale.setScalar(1 + 0.10 * Math.sin(animClock * 3.2));
    }
    hbondPulseMeshes.forEach((m, idx) => {
      const p = 0.88 + 0.24 * Math.sin(animClock * 4.4 + idx * 0.65);
      m.scale.setScalar(p);
    });
  }

  // -------------------------------------------------------------------------
  // Live 3-Arm Defense Mode Toggle (#modeBtn + window.__cell.setMode)
  //   - 'innate_phago': Macrophage phagocytosis, Arp2/3 actin, ROS & MHC-II
  //   - 'humoral_igg':  Y-IgG antibody neutralization of SARS-CoV-2 & ACE2 block
  //   - 'cellular_cd8': CD8+ TCR-pMHC-I lock-on, Perforin pore & Granzyme B
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');
  const armCard = document.getElementById('armCard');
  const armTitleEl = document.getElementById('armTitle');
  const armSubEl = document.getElementById('armSub');

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;

    const isInnate = mode === 'innate_phago';
    const isHumoral = mode === 'humoral_igg';
    const isCellular = mode === 'cellular_cd8';

    // Dynamic 3-arm microscopy spotlight lighting (all arms stay visible, spotlight arm leaps forward!)
    innateLamp.intensity = isInnate ? 16.0 : 4.2;
    rosLamp.intensity = isInnate ? 11.4 : 3.2;
    humoralLamp.intensity = isHumoral ? 16.0 : 4.2;
    cellularLamp.intensity = isCellular ? 16.0 : 4.2;
    synapseLamp.intensity = isCellular ? 10.6 : 3.0;

    if (modeRefs.actinMat) modeRefs.actinMat.emissiveIntensity = isInnate ? 0.78 : 0.24;
    if (modeRefs.rosCoreMat) modeRefs.rosCoreMat.emissiveIntensity = isInnate ? 1.22 : 0.48;
    if (modeRefs.mhciiMat) modeRefs.mhciiMat.emissiveIntensity = isInnate ? 0.62 : 0.18;

    if (modeRefs.iggMat) modeRefs.iggMat.emissiveIntensity = isHumoral ? 0.68 : 0.20;
    if (modeRefs.fabMat) modeRefs.fabMat.emissiveIntensity = isHumoral ? 0.76 : 0.22;
    if (modeRefs.fcMat) modeRefs.fcMat.emissiveIntensity = isHumoral ? 0.58 : 0.18;
    if (modeRefs.stericMat) modeRefs.stericMat.opacity = isHumoral ? 0.96 : 0.46;

    if (modeRefs.tcrMat) modeRefs.tcrMat.emissiveIntensity = isCellular ? 0.70 : 0.22;
    if (modeRefs.peptideMat) modeRefs.peptideMat.emissiveIntensity = isCellular ? 1.22 : 0.52;
    if (modeRefs.perforinMat) modeRefs.perforinMat.emissiveIntensity = isCellular ? 0.70 : 0.22;
    if (modeRefs.granzymeMat) modeRefs.granzymeMat.emissiveIntensity = isCellular ? 0.78 : 0.26;
    if (modeRefs.apoptosisMat) modeRefs.apoptosisMat.opacity = isCellular ? 0.92 : 0.40;

    // Emphasize active arm header plaque
    (Object.keys(plaqueMats) as ModeKey[]).forEach(k => {
      const pm = plaqueMats[k];
      if (!pm) return;
      pm.opacity = k === mode ? 1.0 : 0.54;
      pm.emissiveIntensity = k === mode ? 0.98 : 0.42;
    });

    // Update live HUD button & card readouts
    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.remove('humoral_igg', 'cellular_cd8');
      if (mode !== 'innate_phago') modeBtn.classList.add(mode);
    }
    if (armCard) {
      armCard.classList.remove('humoral_igg', 'cellular_cd8');
      if (mode !== 'innate_phago') armCard.classList.add(mode);
    }
    if (isInnate) {
      if (armTitleEl) armTitleEl.textContent = 'Innate Arm · Macrophage Phagocytosis';
      if (armSubEl) armSubEl.textContent = 'Arp2/3 actin cup · pH 4.5 NOX2 ROS · MHC-II load';
      if (subEl) subEl.textContent = 'Innate Spotlight · Macrophage Arp2/3 actin phagocytosis of E. coli · NOX2 ROS burst & MHC-II (1DLH) presentation';
    } else if (isHumoral) {
      if (armTitleEl) armTitleEl.textContent = 'Humoral Arm · IgG Neutralization';
      if (armSubEl) armSubEl.textContent = '1IGT / 7BZ5 Fab clamps Spike RBD · ACE2 blocked';
      if (subEl) subEl.textContent = 'Humoral Spotlight · Golden Y-shaped IgG (1IGT) & Fab (7BZ5) cap SARS-CoV-2 Spike RBDs to sterically block ACE2 (6M0J)';
    } else {
      if (armTitleEl) armTitleEl.textContent = 'Cellular Arm · CD8⁺ Cytotoxic Synapse';
      if (armSubEl) armSubEl.textContent = '1AO7 TCR–pMHC-I · 3NSJ Perforin · 1IAU Granzyme B';
      if (subEl) subEl.textContent = 'Cellular Spotlight · CD8⁺ T-Cell TCR–pMHC-I (1AO7) locks onto 9-mer viral peptide · Perforin (3NSJ) & Granzyme B (1IAU) trigger apoptosis';
    }

    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => setMode();
  }

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

  const legend = document.getElementById('legend');
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
    ['S', '#ffe248'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:#3cd8f2"></span>Innate <span class="bar" style="background:#ffd84e;margin-left:4px"></span>Humoral <span class="bar" style="background:#a874ff;margin-left:4px"></span>CD8⁺</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Three-arm vertebrate immunity: Macrophages engulf bacteria and display MHC-II; B-cell IgG antibodies cap SARS-CoV-2 Spike RBDs to block ACE2; CD8⁺ T-cells puncture infected cells with Perforin and Granzyme B.';
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
    document.getElementById('mols').append(it);
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
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#74e6ff');

  // -------------------------------------------------------------------------
  // Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
  // -------------------------------------------------------------------------
  let motion = true;
  let sway = 0;
  let last = performance.now();

  document.getElementById('view').onclick = e => {
    view = (view + 1) % VIEWS.length;
    const [name, p, t] = VIEWS[view];
    curView = name;
    armBeaconsGroup.visible = curView === 'overview';
    camera.position.copy(cell.localToWorld(p.clone()));
    controls.target.copy(cell.localToWorld(t.clone()));
    (e.target as HTMLElement).textContent = `View: ${name}`;
  };
  document.getElementById('look').onclick = e => {
    organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length];
    applyLook();
    (e.target as HTMLElement).textContent = `Membrane: ${organelleLook}`;
  };
  document.getElementById('cut').onclick = e => {
    cutOn = !cutOn;
    cutRimGroup.visible = cutOn;
    (e.target as HTMLElement).textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow').onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = fxPts.visible = flowsOn;
    (e.target as HTMLElement).textContent = `Flows: ${flowsOn ? 'on' : 'off'}`;
  };
  const speed = document.getElementById('speed') as HTMLInputElement;
  const spd = document.getElementById('spd');
  speed.oninput = () => {
    flowSpeed = 2 ** +speed.value;
    spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`;
  };
  speed.ondblclick = () => { speed.value = '0'; speed.oninput(new Event('input')); };
  document.getElementById('motion').onclick = e => {
    motion = !motion;
    (e.target as HTMLElement).textContent = motion ? 'Pause' : 'Play';
  };
  document.getElementById('snap').onclick = () => {
    composer.render();
    const a = document.createElement('a');
    a.download = `immune-defense-${mode}-realistic.png`;
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
          .find(h => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has((h.object as THREE.Mesh).material));
        if (hit) {
          const k = map.get((hit.object as THREE.Mesh).material);
          setHi(k);
          if (EMBED) toExplorer({ type: 'pick', key: k });
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.0, -0.38, 0.0])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      armBeaconsGroup.visible = curView === 'overview';
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.0, -0.38, 0.0);
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
    const base: Record<string, THREE.Vector3> = {
      macrophage: MACRO_C.clone().add(V(-1.55, 0.95, 0.34)),
      actin_pseudopod: V(-3.20, 2.24, 0.48),
      ecoli_target: ECOLI_P.clone(),
      phagosome: PHAGO_C.clone(),
      lysosome_ros: PHAGO_C.clone().add(V(-0.78, -0.58, 0.22)),
      mhcii_display: MHCII_P.clone(),
      igg_antibody: VIRION_C.clone().add(V(1.42, 1.05, 0.36)),
      fab_arms: LOCK_P.clone(),
      fc_stem: V(0.0, -0.14, 0.62),
      spike_rbd: V(0.0, 0.56, 0.52),
      ace2_blocked: ACE2_P.clone(),
      virion_target: VIRION_C.clone(),
      cd8_tcell: CD8_C.clone().add(V(0.75, 0.85, 0.34)),
      tcr_mhci: TCR_P.clone(),
      viral_peptide: TCR_P.clone().add(V(-0.04, 0.02, 0.10)),
      perforin_pore: PERF_P.clone(),
      granzyme_b: GRZB_P.clone(),
      immune_atoms: ATOM_C.clone(),
    };
    let P = { ...base };
    if (vName === 'phagocytosis') {
      P = {
        ...base,
        macrophage: MACRO_C.clone().add(V(-1.42, 0.85, 0.34)),
        actin_pseudopod: V(-3.16, 2.24, 0.48),
        ecoli_target: ECOLI_P.clone(),
        phagosome: PHAGO_C.clone(),
        lysosome_ros: PHAGO_C.clone().add(V(-0.76, -0.56, 0.24)),
        mhcii_display: MHCII_P.clone(),
      };
    } else if (vName === 'igg_neutralize') {
      P = {
        ...base,
        igg_antibody: VIRION_C.clone().add(V(1.28, 0.72, 0.34)),
        fab_arms: LOCK_P.clone().add(V(-0.56, 0.14, 0.04)),
        fc_stem: V(0.56, -0.08, 0.60),
        spike_rbd: V(0.0, 0.62, 0.50),
        ace2_blocked: ACE2_P.clone(),
        virion_target: VIRION_C.clone(),
      };
    } else if (vName === 'cd8_synapse') {
      P = {
        ...base,
        cd8_tcell: CD8_C.clone().add(V(0.32, 0.88, 0.34)),
        tcr_mhci: TCR_P.clone(),
        viral_peptide: TCR_P.clone().add(V(-0.04, 0.02, 0.10)),
        perforin_pore: PERF_P.clone(),
        granzyme_b: GRZB_P.clone(),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        immune_atoms: ATOM_C.clone(),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS: Record<string, { c: THREE.Vector3; r: number; dir: THREE.Vector3 } | null> = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD: Record<string, number> = {
      macrophage: 2.9, actin_pseudopod: 1.8, ecoli_target: 1.5, phagosome: 1.5,
      lysosome_ros: 1.5, mhcii_display: 1.5, igg_antibody: 2.2, fab_arms: 1.4,
      fc_stem: 1.4, spike_rbd: 1.5, ace2_blocked: 1.8, virion_target: 2.2,
      cd8_tcell: 2.8, tcr_mhci: 1.5, viral_peptide: 1.2, perforin_pore: 1.5,
      granzyme_b: 1.5, immune_atoms: 2.0,
    };
    const DIRS: Record<string, THREE.Vector3> = {
      macrophage: V(-0.14, 0.12, 0.98).normalize(),
      cd8_tcell: V(0.14, 0.12, 0.98).normalize(),
      immune_atoms: V(0.0, 0.02, 1.0).normalize(),
    };
    const dir = DIRS[k] ?? V(0.05, 0.10, 0.99).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 1.8, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    macrophage: ['actin_pseudopod', 'ecoli_target', 'phagosome', 'lysosome_ros', 'mhcii_display'],
    actin_pseudopod: ['macrophage', 'ecoli_target'],
    ecoli_target: ['macrophage', 'actin_pseudopod', 'phagosome'],
    phagosome: ['macrophage', 'lysosome_ros', 'mhcii_display'],
    lysosome_ros: ['phagosome', 'macrophage'],
    mhcii_display: ['macrophage', 'phagosome'],
    igg_antibody: ['fab_arms', 'fc_stem', 'spike_rbd', 'virion_target', 'ace2_blocked'],
    fab_arms: ['igg_antibody', 'fc_stem', 'spike_rbd', 'ace2_blocked'],
    fc_stem: ['igg_antibody', 'fab_arms', 'virion_target'],
    spike_rbd: ['virion_target', 'fab_arms', 'igg_antibody', 'ace2_blocked'],
    ace2_blocked: ['spike_rbd', 'fab_arms', 'igg_antibody'],
    virion_target: ['spike_rbd', 'igg_antibody', 'fab_arms', 'fc_stem'],
    cd8_tcell: ['tcr_mhci', 'viral_peptide', 'perforin_pore', 'granzyme_b'],
    tcr_mhci: ['cd8_tcell', 'viral_peptide', 'perforin_pore'],
    viral_peptide: ['tcr_mhci', 'cd8_tcell'],
    perforin_pore: ['cd8_tcell', 'granzyme_b', 'tcr_mhci'],
    granzyme_b: ['perforin_pore', 'cd8_tcell'],
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
        [...r.mats, ...r.imp].forEach(m => { if (!matMap.has(m)) matMap.set(m, k); });
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
    if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow').click();
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
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 5.0) / 22));
      cell.rotation.y = 0.048 * Math.sin(sway * 0.11);
      updateImmuneAnimation(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.4, camera.position.distanceTo(controls.target) / 14.0));
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
    buildArmPlaques();
    buildInnateMacrophageArm(T);
    buildHumoralIggArm(T);
    buildCellularCd8Arm(T);
    buildAtomicImmuneInset();
    updateImmuneAnimation(0.01);
    // Warm up live streams so all 6 immune flow species are active on frame 1
    for (let s = 0; s < 140; s++) updateFlows(0.05);
    syncFlowCounterUI();
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('innate_phago', true);
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
        armBeaconsGroup.visible = curView === 'overview';
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
      if (m.cmd === 'motion') document.getElementById('motion').click();
      if (m.cmd === 'look') document.getElementById('look').click();
      if (m.cmd === 'cut') document.getElementById('cut').click();
      if (m.cmd === 'flow') document.getElementById('flow').click();
      if (m.cmd === 'speed') {
        speed.value = String(m.v);
        speed.oninput(new Event('input'));
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
        updateImmuneAnimation(dt);
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
