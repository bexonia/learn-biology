// @ts-nocheck
import * as THREE from 'three';
import { PDB_BIOENERGETICS } from '../molecules/pdb_bioenergetics.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  sweepGeo,
  atS,
  instanced,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  col,
} from '../index.js';

runBiologyApp(20261124, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Spatial Choreography — Coupled Photosynthesis <-> Cellular Respiration Stage
  // Cleanly framed between #legend (left), #flows (right), #hud (top) & #tools (bottom):
  //   Left:   Cutaway Emerald Chloroplast  CHLORO_C = (-4.45, +1.05, 0.00)
  //   Center: Cytosolic Glycolysis Bridge  GLYCO_C  = ( 0.00, +0.72, +0.42)
  //   Right:  Cutaway Crimson Mitochondrion MITO_C  = (+4.45, +1.05, 0.00)
  //   Top:    Luminous Glucose + 6 O2 Arch (Y up to +4.15)
  //   Bottom: Luminous 6 CO2 + 6 H2O Return Arch (Y down to -1.92)
  //   Inset:  Centered Optical Atomic Lens ATOM_C   = ( 0.00, -4.25, +1.85)
  // -------------------------------------------------------------------------
  const NM = 0.08; // 10 nm (100 A) = 0.80 scene units at scale 1.0

  const CHLORO_C = V(-4.45, 1.05, 0.0);
  const CHLORO_R = V(3.15, 2.05, 2.15);
  const MITO_C = V(4.45, 1.05, 0.0);
  const MITO_R = V(3.15, 2.00, 2.10);
  const GLYCO_C = V(0.0, 0.72, 0.42);
  const ATOM_C = V(0.0, -4.25, 1.85);

  // Hero sub-stage anchors inside the cutaway organelles
  const THY_Y = CHLORO_C.y + 0.36;
  const THY_Z = 0.58;
  const PSII_POS = V(-5.48, THY_Y, THY_Z);
  const B6F_POS = V(-4.38, THY_Y, THY_Z + 0.06);
  const PSI_POS = V(-3.30, THY_Y, THY_Z);
  const CF_POS = V(-2.32, THY_Y + 0.08, THY_Z - 0.12);
  const CALVIN_C = V(-4.72, -0.02, 0.62);

  const ETC_Y = MITO_C.y + 0.36;
  const ETC_Z = 0.58;
  const CI_POS = V(2.68, ETC_Y + 0.04, ETC_Z);
  const CII_POS = V(3.56, ETC_Y - 0.06, ETC_Z + 0.08);
  const CIII_POS = V(4.46, ETC_Y + 0.04, ETC_Z + 0.04);
  const CIV_POS = V(5.36, ETC_Y + 0.02, ETC_Z - 0.04);
  const ATPS_POS = V(6.28, ETC_Y - 0.06, ETC_Z - 0.14);
  const KREBS_C = V(3.38, -0.04, 0.66);

  // Exact 6 required VIEWS ([name, camPos, target])
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.0, 1.45, 36.2), V(0.0, -0.55, 0.0)],
    ['light_reactions', V(-3.92, 2.02, 9.75), V(-3.95, 1.36, 0.55)],
    ['calvin_stroma', V(-4.62, 0.36, 8.25), V(-4.72, 0.04, 0.60)],
    ['krebs_matrix', V(1.62, 0.92, 11.25), V(1.88, 0.36, 0.52)],
    ['mito_etc', V(4.62, 1.98, 9.85), V(4.52, 1.32, 0.52)],
    ['atoms', V(0.0, -4.42, 9.25), V(0.0, -4.25, 1.85)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'coupled_aerobic' | 'anaerobic_no_o2' | 'dark_respiration';
  const MODE_ORDER: readonly ModeKey[] = ['coupled_aerobic', 'anaerobic_no_o2', 'dark_respiration'];
  const MODE_LABEL: Record<ModeKey, string> = {
    coupled_aerobic: 'Mode: Sun + O2 (~32 ATP)',
    anaerobic_no_o2: 'Mode: No O2 (2 ATP Glycolysis)',
    dark_respiration: 'Mode: Dark (Respiration Only)',
  };
  let mode: ModeKey = 'coupled_aerobic';

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#132438',
    bgMid: '#070f1d',
    bgOuter: '#020408',
    keyColor: '#fff4e4',
    keyIntensity: 3.1,
    rimColor: '#7ed4ff',
    rimIntensity: 1.8,
    lampColor: '#ffe3a8',
    lampIntensity: 16,
    lampPos: [0.0, 3.2, 6.4],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 240,
    bokehColor: '#7ad8c8',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated secondary cutaway cavity lamps for Chloroplast (emerald-gold), Mitochondrion (crimson-amber), & Inset
  const chloroLamp = new THREE.PointLight('#48f09c', 9.8, 20, 2);
  chloroLamp.position.set(CHLORO_C.x + 0.5, CHLORO_C.y + 1.5, 4.4);
  const sunLamp = new THREE.PointLight('#ffe474', 7.5, 18, 2);
  sunLamp.position.set(CHLORO_C.x - 0.6, CHLORO_C.y + 4.4, 2.2);
  const mitoLamp = new THREE.PointLight('#ff7e62', 10.2, 20, 2);
  mitoLamp.position.set(MITO_C.x - 0.4, MITO_C.y + 1.4, 4.4);
  const insetLamp = new THREE.PointLight('#b4f0ff', 9.0, 16, 2);
  insetLamp.position.set(ATOM_C.x + 1.8, ATOM_C.y + 1.8, ATOM_C.z + 4.6);
  scene.add(chloroLamp, sunLamp, mitoLamp, insetLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Organized scene groups for cutaway caps & mode-responsive overlays
  const cutRimGroup = new THREE.Group();
  const photonBeamsGroup = new THREE.Group();
  const zElectronGroup = new THREE.Group();
  const etcElectronGroup = new THREE.Group();
  const anaerobicPulseGroup = new THREE.Group();
  anaerobicPulseGroup.visible = false;
  cell.add(cutRimGroup, photonBeamsGroup, zElectronGroup, etcElectronGroup, anaerobicPulseGroup);

  // Front cutaway plane slicing both Chloroplast & Mitochondrion envelopes cleanly at z = +0.26
  // so their twin interiors open symmetrically toward the viewer like museum chambers!
  const CUT_Z = 0.26;
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
    ['chloroplast_hull', 'Chloroplast double envelope (emerald)', '#38e89e'],
    ['thylakoid', 'Thylakoid grana stacks & lamellae', '#20c478'],
    ['psii', 'Photosystem II–LHCII (PDB 3JCU)', '#60ff84'],
    ['cyt_b6f', 'Cytochrome b₆f dimer (PDB 6RQF)', '#34d8e8'],
    ['psi', 'Photosystem I–LHCI (PDB 4XK8)', '#48f2c4'],
    ['cf1cf0', 'Chloroplast CF₁CF₀ ATP synthase', '#ffe05c'],
    ['rubisco', 'RuBisCO L₈S₈ & Calvin stroma (1RCX)', '#b4f542'],
    ['glycolysis', 'Cytosolic glycolysis (2 net ATP)', '#68e2ff'],
    ['mito_hull', 'Mitochondrion outer & cristae hull', '#ff6476'],
    ['krebs_cycle', 'Matrix Krebs cycle & 1CTS synthase', '#ff9e42'],
    ['complex_i', 'Complex I NADH dehydr. (PDB 5XTD)', '#ff5268'],
    ['complex_ii', 'Complex II Succinate DH (PDB 1ZOY)', '#ff8c38'],
    ['complex_iii', 'Complex III Cyt bc₁ (PDB 1BGY)', '#e654b8'],
    ['complex_iv', 'Complex IV Cyt c oxidase (PDB 1V54)', '#ff4254'],
    ['f1f0_atps', 'Mito F₁F₀ ATP synthase (PDB 5ARA)', '#ffd04a'],
    ['proton_grad', 'Chemiosmotic H⁺ proton gradient', '#ff6eb8'],
    ['energy_carriers', 'Glucose/O₂ ↔ CO₂/H₂O & NADH/ATP', '#78f0ff'],
    ['cofactor_atoms', 'Atomic Chlorophyll Mg²⁺ & ATP inset', '#84ffa8'],
  ];

  const INFO: Record<string, [string, string]> = {
    chloroplast_hull: [
      'Double phospholipid envelope enclosing the aqueous stroma and stacked thylakoid system (~5 µm)',
      'Captures solar energy and atmospheric CO₂ to assemble energy-rich Glucose (C₆H₁₂O₆) and release O₂',
    ],
    thylakoid: [
      'Flattened emerald lipid-bilayer grana discs linked by stroma lamellae around an acidic lumen (pH ~5.5)',
      'Houses the entire light-dependent Z-scheme electron chain and traps pumped H⁺ protons to drive ATP synthesis',
    ],
    psii: [
      'Photosystem II–LHCII supercomplex (PDB 3JCU) bearing chlorophyll antennas and the Mn₄CaO₅ catalytic cluster',
      'Absorbs 680 nm photons to split 2 H₂O → O₂ + 4 H⁺ + 4 e⁻, launching linear photosynthetic electron flow',
    ],
    cyt_b6f: [
      'Transmembrane Cytochrome b₆f dimeric proton pump (PDB 6RQF) linked to plastoquinone (PQ) and plastocyanin (PC)',
      'Oxidizes PQH₂ and pumps extra H⁺ ions into the thylakoid lumen via the Q-cycle before passing electrons to PSI',
    ],
    psi: [
      'Photosystem I–LHCI supercomplex (PDB 4XK8) excited by 700 nm photons and coupled to Ferredoxin / FNR',
      'Re-energizes electrons arriving from plastocyanin to reduce stromal NADP⁺ + H⁺ → NADPH for carbon fixation',
    ],
    cf1cf0: [
      'Chloroplast rotary CF₁CF₀ ATP synthase (5ARA structural fold, 14 c-subunits) spanning the thylakoid bilayer',
      'Channels luminal H⁺ protons back into the stroma to spin its rotor and forge 18 ATP per glucose fixed',
    ],
    rubisco: [
      'Stromal RuBisCO L₈S₈ hexadecamers (PDB 1RCX) powering the Calvin–Benson carbon fixation cycle',
      'Fixes 6 CO₂ using 18 ATP and 12 NADPH from the light reactions to export hexagonal Glucose (C₆H₁₂O₆)',
    ],
    glycolysis: [
      'Cytosolic 10-enzyme reaction corridor (Hexokinase, PFK-1, GAPDH, Pyruvate Kinase) linking both organelles',
      'Splits 1 Glucose → 2 Pyruvate + 2 net ATP + 2 NADH; keeps pulsing as the sole 2 ATP lifeline when O₂ is absent',
    ],
    mito_hull: [
      'Porin-rich outer membrane wrapping a deeply folded inner cristae membrane (~1–3 µm powerhouse)',
      'Amplifies inner surface area for Complexes I–IV and seals the intermembrane space to maintain proton pressure',
    ],
    krebs_cycle: [
      'Matrix Citric Acid (Krebs) cycle ring initiated by Citrate Synthase (PDB 1CTS) on imported Acetyl-CoA',
      'Completes carbon oxidation to exhale 6 CO₂ back to chloroplasts while charging 8 NADH, 2 FADH₂, and 2 GTP/ATP',
    ],
    complex_i: [
      'L-shaped NADH:ubiquinone oxidoreductase (PDB 5XTD), the largest respiratory complex in inner cristae',
      'Strips high-energy electrons from matrix NADH onto ubiquinone (Q) while pumping 4 H⁺ into the intermembrane space',
    ],
    complex_ii: [
      'Succinate dehydrogenase (PDB 1ZOY), shared directly between the matrix Krebs cycle and cristae ETC',
      'Transfers electrons from FADH₂ to ubiquinone (Q) without pumping H⁺ across the inner membrane',
    ],
    complex_iii: [
      'Dimeric Cytochrome bc₁ complex (PDB 1BGY) coupling hydrophobic ubiquinol (QH₂) to soluble Cytochrome c',
      'Runs the mitochondrial Q-cycle to translocate 4 H⁺ per electron pair into the intermembrane proton reservoir',
    ],
    complex_iv: [
      'Cytochrome c oxidase (PDB 1V54) housing copper and heme a₃ catalytic centers at the end of the ETC',
      'Pumps 2 H⁺ and transfers electrons to terminal acceptor ½ O₂ + 2 H⁺ → H₂O; stalls immediately without O₂',
    ],
    f1f0_atps: [
      'Rotary mitochondrial F₁F₀ ATP synthase (PDB 5ARA) lined in dimers along high-curvature cristae ridges',
      'Spins its c₈-ring & γ-stalk on returning H⁺ flow to generate ~26–28 ATP (~30–32 total ATP per Glucose)',
    ],
    proton_grad: [
      'Transmembrane electrochemical H⁺ gradient (ΔpH + voltage) inside the thylakoid lumen and mitochondrial IMS',
      'Acts as the shared chemiosmotic battery converting light or redox energy into rotary mechanical torque',
    ],
    energy_carriers: [
      'Coupled planetary streams of Glucose + 6 O₂ ↔ 6 CO₂ + 6 H₂O plus intracellular ATP/ADP and NADH/NADPH shuttles',
      'Closes the redox mirror loop so photosynthetic products fuel respiration and respiratory exhaust feeds plants',
    ],
    cofactor_atoms: [
      'CPK atomic view of Chlorophyll a (porphyrin ring coordinating Mg²⁺) beside ATP γ-phosphate cleavage + H⁺',
      'Reveals how a single photo-excited Mg²⁺ porphyrin and phosphoanhydride P–O–P bond drive cellular bioenergetics',
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

  // Cinema PBR macromolecular protein material with cryo-EM bump normal map, clearcoat, sheen & backlit SSS
  function makeCinemaProteinMat(
    k: string,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sssHex = '#b8f2ff',
    sssInt = 0.22
  ): THREE.MeshPhysicalMaterial {
    const m = phys({
      vertexColors: true,
      roughness: 0.34,
      metalness: 0.05,
      clearcoat: 0.38,
      clearcoatRoughness: 0.26,
      sheen: 0.40,
      sheenColor: '#f5fbff',
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
  const molBatch = (
    k: string,
    geo: THREE.BufferGeometry,
    parent: THREE.Object3D = cell,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sss = '#a8f0ff'
  ) => makeMolBatch(geo, makeCinemaProteinMat(k, extra, sss, 0.24), parent);

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
      attenuationDistance: (opts.attenDist as number) ?? 4.6,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.30,
      iridescence: (opts.iridescence as number) ?? 0.54,
      thickness: (opts.thickness as number) ?? 0.48,
      roughness: (opts.roughness as number) ?? 0.12,
      sheenColor: (opts.sheenColor as string) ?? '#e8fff6',
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
      m.opacity = see ? 0.38 : 1;
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

  // Live animated objects & mode-controlled materials
  const cfRotors: THREE.Object3D[] = [];
  const mitoRotors: THREE.Object3D[] = [];
  const photonBeams: THREE.Mesh[] = [];
  const zSparks: Array<{ mesh: THREE.Mesh; phase: number; curve: THREE.CatmullRomCurve3 }> = [];
  const etcSparks: Array<{ mesh: THREE.Mesh; phase: number; curve: THREE.CatmullRomCurve3 }> = [];
  let calvinRingGroup: THREE.Group | null = null;
  let krebsRingGroup: THREE.Group | null = null;
  let glycoRingGroup: THREE.Group | null = null;
  let atpCleavageGlow: THREE.Mesh | null = null;
  let mgHaloMesh: THREE.Mesh | null = null;

  const modeRefs: {
    photonMat?: THREE.MeshBasicMaterial;
    psiiMat?: THREE.MeshPhysicalMaterial;
    b6fMat?: THREE.MeshPhysicalMaterial;
    psiMat?: THREE.MeshPhysicalMaterial;
    cfMat?: THREE.MeshPhysicalMaterial;
    zWireMat?: THREE.MeshPhysicalMaterial;
    etcWireMat?: THREE.MeshPhysicalMaterial;
    ciMat?: THREE.MeshPhysicalMaterial;
    ciiMat?: THREE.MeshPhysicalMaterial;
    ciiiMat?: THREE.MeshPhysicalMaterial;
    civMat?: THREE.MeshPhysicalMaterial;
    o2PocketMat?: THREE.MeshPhysicalMaterial;
    f1f0Mat?: THREE.MeshPhysicalMaterial;
    mitoProtonHaloMat?: THREE.MeshPhysicalMaterial;
    chloroProtonHaloMat?: THREE.MeshPhysicalMaterial;
    mitoProtonBeadMat?: THREE.MeshPhysicalMaterial;
    chloroProtonBeadMat?: THREE.MeshPhysicalMaterial;
    glycoGateMat?: THREE.MeshPhysicalMaterial;
    glycoCoreMat?: THREE.MeshPhysicalMaterial;
    krebsRingMat?: THREE.MeshPhysicalMaterial;
  } = {};

  // -------------------------------------------------------------------------
  // Helper: Organic Ellipsoid Hull & Exact Matched Front-Cutaway Rim Strip
  // -------------------------------------------------------------------------
  function organicMod(nx: number, ny: number, nz: number, seed: number): number {
    const n = fbm(nx * 2.1 + seed, ny * 2.1 - seed * 0.4, nz * 2.1 + seed * 0.7, 3);
    return 1 + 0.045 * (n - 0.5) * 2;
  }

  function buildOrganicEllipsoidGeo(
    center: THREE.Vector3,
    radii: THREE.Vector3,
    scale = 1.0,
    seed = 7.3,
    seg = 96
  ): THREE.BufferGeometry {
    const g = new THREE.SphereGeometry(1, seg, Math.round(seg * 0.68));
    const p = g.attributes.position;
    const v = V();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).normalize();
      const m = organicMod(v.x, v.y, v.z, seed) * scale;
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
    layers: ReadonlyArray<readonly [number, number, string]>,
    n = 160
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
        const m = organicMod(ux, uy, uz, seed);
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
  // Decode ALL 10 Real RCSB PDB Assets from PDB_BIOENERGETICS via buildPdbSurfaceGeo
  //   1. psii (3JCU)       2. cyt_b6f (6RQF)    3. psi (4XK8)       4. rubisco (1RCX)
  //   5. complex_i (5XTD)  6. complex_ii (1ZOY) 7. complex_iii (1BGY)
  //   8. complex_iv (1V54) 9. f1f0_atps (5ARA) 10. citrate_syn (1CTS)
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // 1. PSII–LHCII (3JCU, 6 chains) — emerald core + bright lime-gold chlorophyll antenna wings
    const psiiCols = [col('#26e67a'), col('#4eff92'), col('#1fc96b'), col('#84ff66'), col('#ffd84d'), col('#38d89c')];
    const geoPsii = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'psii'), {
      nm: NM,
      scale: 0.90,
      maxDim: 30,
      sigmaAng: 3.9,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? psiiCols[grp % 6].clone().offsetHSL(0.01, 0, 0.08) : psiiCols[grp % 6]),
    });

    // 2. Cytochrome b6f (6RQF, 6 chains) — turquoise-cyan dimer with warm coral-gold heme b/f pockets
    const b6fCols = [col('#2ad8ec'), col('#5ceeff'), col('#22b4d4'), col('#ff8468'), col('#38c8e2'), col('#74f4ff')];
    const geoB6f = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'cyt_b6f'), {
      nm: NM,
      scale: 0.84,
      maxDim: 28,
      sigmaAng: 3.9,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: (grp, part) => (part === 1 ? b6fCols[grp % 6].clone().offsetHSL(0.01, 0, 0.07) : b6fCols[grp % 6]),
    });

    // 3. PSI–LHCI (4XK8, 6 chains) — vivid sea-mint core + glowing golden P700 / FeS apex
    const psiCols = [col('#34f0bc'), col('#5cffd2'), col('#24cc9e'), col('#72f5ff'), col('#ffe066'), col('#46e8b8')];
    const geoPsi = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'psi'), {
      nm: NM,
      scale: 0.84,
      maxDim: 30,
      sigmaAng: 4.0,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? psiCols[grp % 6].clone().offsetHSL(0.01, 0, 0.07) : psiCols[grp % 6]),
    });

    // 4. RuBisCO L8S8 hexadecamer (1RCX, 8 chains) — luminous chartreuse-lime & gold alternating L/S subunits
    const rubCols = [col('#9ef238'), col('#c6ff54'), col('#74dc2c'), col('#ffe258'), col('#8ee83a'), col('#b4fa4c'), col('#6cd22e'), col('#ffd448')];
    const geoRubisco = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'rubisco'), {
      nm: NM,
      scale: 0.66,
      maxDim: 28,
      sigmaAng: 3.9,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? rubCols[grp % 8].clone().offsetHSL(0.01, 0, 0.07) : rubCols[grp % 8]),
    });

    // 5. Complex I NADH dehydrogenase (5XTD, 8 chains) — vivid coral-crimson L-shaped NADH arm
    const ciCols = [col('#ff4c64'), col('#ff7282'), col('#e63a56'), col('#ff9468'), col('#ff5e78'), col('#d83254'), col('#ff8090'), col('#ffb068')];
    const geoCI = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'complex_i'), {
      nm: NM,
      scale: 0.78,
      maxDim: 30,
      sigmaAng: 4.2,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? ciCols[grp % 8].clone().offsetHSL(0.01, 0, 0.07) : ciCols[grp % 8]),
    });

    // 6. Complex II Succinate dehydrogenase (1ZOY, 4 chains) — warm burnt-tangerine & amber FeS domain
    const ciiCols = [col('#ff8834'), col('#ffb054'), col('#e86a24'), col('#ffd268')];
    const geoCII = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'complex_ii'), {
      nm: NM,
      scale: 0.76,
      maxDim: 28,
      sigmaAng: 4.0,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: (grp, part) => (part === 1 ? ciiCols[grp % 4].clone().offsetHSL(0.01, 0, 0.07) : ciiCols[grp % 4]),
    });
    geoCII.rotateX(-Math.PI / 2);

    // 7. Complex III Cytochrome bc1 dimer (1BGY, 6 chains) — magenta-rose dimer + Rieske gold heads
    const ciiiCols = [col('#e84cb8'), col('#ff78d4'), col('#cc389e'), col('#ffa068'), col('#f262c6'), col('#ff8ee0')];
    const geoCIII = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'complex_iii'), {
      nm: NM,
      scale: 0.76,
      maxDim: 30,
      sigmaAng: 4.1,
      iso: 0.38,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? ciiiCols[grp % 6].clone().offsetHSL(0.01, 0, 0.07) : ciiiCols[grp % 6]),
    });
    geoCIII.rotateX(-Math.PI / 2);

    // 8. Complex IV Cytochrome c oxidase (1V54, 6 chains) — deep fiery ruby-red + copper-cyan CuA cap
    const civCols = [col('#ff3e50'), col('#ff6c62'), col('#d62844'), col('#ff9854'), col('#ff5464'), col('#6ee8ff')];
    const geoCIV = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'complex_iv'), {
      nm: NM,
      scale: 0.80,
      maxDim: 28,
      sigmaAng: 4.0,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? civCols[grp % 6].clone().offsetHSL(0.01, 0, 0.07) : civCols[grp % 6]),
    });
    geoCIV.rotateX(-Math.PI / 2);

    // 9a. Mitochondrial F1F0 ATP Synthase (5ARA, 8 chains) — radiant solar gold & warm copper rotary turbine
    const f1Cols = [col('#ffd248'), col('#ffea78'), col('#ffaa32'), col('#fff29c'), col('#ffbe3c'), col('#ff9438'), col('#ffe060'), col('#ffc84a')];
    const geoF1F0 = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'f1f0_atps'), {
      nm: NM,
      scale: 0.80,
      maxDim: 30,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? f1Cols[grp % 8].clone().offsetHSL(0.01, 0, 0.06) : f1Cols[grp % 8]),
    });
    geoF1F0.rotateX(-Math.PI / 2);

    // 9b. Chloroplast CF1CF0 ATP Synthase (5ARA structural fold colored emerald-gold!)
    const cfCols = [col('#ffe458'), col('#9cff72'), col('#ffd03c'), col('#56f0a2'), col('#fff28a'), col('#78f58e'), col('#f5d842'), col('#46dc96')];
    const geoCF1CF0 = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'f1f0_atps'), {
      nm: NM,
      scale: 0.78,
      maxDim: 28,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? cfCols[grp % 8].clone().offsetHSL(0.01, 0, 0.06) : cfCols[grp % 8]),
    });
    geoCF1CF0.rotateX(-Math.PI / 2);

    // 10. Citrate Synthase (1CTS, 1 chain) — glowing tangerine-amber & violet-gold Krebs matrix enzyme
    const geoCitrate = buildPdbSurfaceGeo(pdb.getModel(PDB_BIOENERGETICS, 'citrate_syn'), {
      nm: NM,
      scale: 0.74,
      maxDim: 26,
      sigmaAng: 3.6,
      iso: 0.38,
      aoStrength: 0.52,
      colorFn: (_grp, part, idx) => {
        const lobe = (idx >> 6) % 3;
        const base = lobe === 0 ? col('#ff9838') : lobe === 1 ? col('#ffc654') : col('#ff6e62');
        return part === 1 ? base.clone().offsetHSL(0.01, 0, 0.08) : base;
      },
    });

    return {
      geoPsii,
      geoB6f,
      geoPsi,
      geoRubisco,
      geoCI,
      geoCII,
      geoCIII,
      geoCIV,
      geoF1F0,
      geoCF1CF0,
      geoCitrate,
    };
  }

  // -------------------------------------------------------------------------
  // 1. Left Chamber — Cutaway Emerald Plant Chloroplast
  //    Double wet-gel envelope, stacked thylakoid grana + cutaway bilayer,
  //    Z-scheme (PSII 3JCU -> PQ -> Cyt b6f 6RQF -> PC -> PSI 4XK8 -> CF1CF0),
  //    stromal RuBisCO (1RCX) Calvin Cycle ring & luminal H+ proton pool!
  // -------------------------------------------------------------------------
  function buildChloroplastChamber(T) {
    // 1A. Outer & Inner Wet-Gel Backlit Envelopes (Shells #1 and #2!)
    const chloroOuterMat = cinemaShellMat('chloroplast_hull', '#188e60', '#96ffd4', FRONT_CLIP, {
      attenCol: '#14724e',
      attenDist: 4.8,
      sssColor: '#48ffa8',
      sssIntensity: 0.34,
      iridescence: 0.58,
      thickness: 0.52,
      roughness: 0.12,
      sheenColor: '#d8ffee',
      normalMap: bump(14, 10),
      normalScale: 0.24,
    });
    cell.add(shade(new THREE.Mesh(buildOrganicEllipsoidGeo(CHLORO_C, CHLORO_R, 1.0, 5.1, 96), chloroOuterMat), true, true));

    const chloroInnerMat = cinemaShellMat('chloroplast_hull', '#0e6648', '#6aeec2', FRONT_CLIP, {
      attenCol: '#0c523c',
      attenDist: 4.2,
      sssColor: '#36e89e',
      sssIntensity: 0.26,
      iridescence: 0.44,
      thickness: 0.42,
      roughness: 0.14,
      sheenColor: '#c2ffea',
      normalMap: bump(12, 9),
      normalScale: 0.20,
    });
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(CHLORO_C, CHLORO_R, 0.945, 5.1, 84), chloroInnerMat));

    // Deep emerald inner cavity backing wall so bright enzymes pop dramatically inside cutaway
    const chloroBackMat = reg(
      'chloroplast_hull',
      applyBacklitSSS(
        phys(
          {
            color: '#082820',
            roughness: 0.62,
            metalness: 0.05,
            side: THREE.BackSide,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          FRONT_CLIP
        ),
        '#28d888',
        0.18,
        2.5
      )
    );
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(CHLORO_C, CHLORO_R, 0.925, 5.1, 72), chloroBackMat));

    // Exact multi-band double-envelope cutaway rim strip flush on z = CUT_Z
    const CH_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [1.00, 0.978, '#7cffc8'], // Outer envelope leaflet
      [0.978, 0.954, '#1b644e'], // Intermembrane space
      [0.954, 0.926, '#3ee69a'], // Inner envelope leaflet
    ];
    const chloroRimMat = reg(
      'chloroplast_hull',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        metalness: 0.08,
        emissive: '#0c4e36',
        emissiveIntensity: 0.42,
        side: THREE.DoubleSide,
      })
    );
    cutRimGroup.add(new THREE.Mesh(buildFrontCutRimGeo(CHLORO_C, CHLORO_R, CUT_Z, 5.1, CH_LAYERS, 160), chloroRimMat));
    SITES.chloroplast_hull.push(
      CHLORO_C.clone().add(V(-2.75, 1.35, 0.25)),
      CHLORO_C.clone().add(V(-2.85, -0.45, 0.25)),
      CHLORO_C.clone().add(V(-0.6, 1.92, 0.25))
    );

    // 1B. Stacked Thylakoid Grana Columns, Stroma Lamellae & Cutaway Bilayer Stage (Shell #3!)
    const thyShellMat = cinemaShellMat('thylakoid', '#19a864', '#72ffba', {}, {
      attenCol: '#107c4a',
      attenDist: 3.2,
      sssColor: '#3ef59e',
      sssIntensity: 0.34,
      iridescence: 0.46,
      thickness: 0.40,
      roughness: 0.14,
      sheenColor: '#d0ffe6',
      normalMap: bump(8, 8),
      normalScale: 0.22,
    });

    // Helper: flattened rounded thylakoid discoid sac
    function makeThylakoidDisc(rx: number, ry: number, rz: number) {
      const g = new THREE.SphereGeometry(1, 36, 22);
      g.scale(rx, ry, rz);
      g.computeVertexNormals();
      return g;
    }

    // Back-left & upper-back background grana columns creating lush deep chloroplast architecture
    const bgGrana = [
      { x: CHLORO_C.x - 1.72, y0: CHLORO_C.y - 0.58, z: -0.58, n: 4, rx: 0.68, rz: 0.52 },
      { x: CHLORO_C.x - 0.12, y0: CHLORO_C.y + 0.18, z: -1.02, n: 4, rx: 0.76, rz: 0.54 },
      { x: CHLORO_C.x + 1.48, y0: CHLORO_C.y - 0.65, z: -0.68, n: 3, rx: 0.62, rz: 0.48 },
    ];
    const S_LAM = sculpt('thylakoid', cell, {
      emissive: '#0c5c38',
      emissiveIntensity: 0.26,
      roughness: 0.30,
      clearcoat: 0.44,
    }, '#44ffaa');
    bgGrana.forEach(gr => {
      for (let i = 0; i < gr.n; i++) {
        const dy = gr.y0 + i * 0.32;
        const m = shade(new THREE.Mesh(makeThylakoidDisc(gr.rx, 0.115, gr.rz), thyShellMat), true, true);
        m.position.set(gr.x, dy, gr.z);
        cell.add(m);
        if (i === 1) SITES.thylakoid.push(V(gr.x, dy, gr.z + 0.35));
      }
    });
    // Sweeping stroma lamellae bridges uniting all grana stacks
    S_LAM.tube(
      [
        V(CHLORO_C.x - 1.55, CHLORO_C.y + 0.12, -0.45),
        V(CHLORO_C.x - 0.72, CHLORO_C.y + 0.36, -0.78),
        V(CHLORO_C.x + 0.10, CHLORO_C.y + 0.46, -0.92),
        V(CHLORO_C.x + 1.25, CHLORO_C.y - 0.10, -0.62),
      ],
      0.085,
      0.085,
      col('#22c878'),
      col('#3ce896'),
      10,
      true
    );
    S_LAM.tube(
      [
        V(CHLORO_C.x - 1.42, CHLORO_C.y - 0.26, -0.35),
        V(CHLORO_C.x - 0.42, CHLORO_C.y + 0.14, 0.10),
        V(CHLORO_C.x + 1.22, CHLORO_C.y + 0.28, 0.18),
      ],
      0.08,
      0.08,
      col('#1db86e'),
      col('#3ae092'),
      10,
      true
    );

    // HERO Cutaway Thylakoid Bilayer Stage (center-top inside Chloroplast for 'light_reactions'!)
    // Displays an unmistakable 2-leaflet green phospholipid bilayer with glowing acidic lumen beneath!
    const THY_W = 4.15;
    const THY_D = 0.86;
    const THY_THICK = 0.22;
    const thyCenter = V(-3.92, THY_Y - 0.04, THY_Z);
    const makeBilayerRibbon = (yOff: number, radH: number) => {
      const g = new THREE.BoxGeometry(THY_W, radH, THY_D, 42, 1, 8);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
        const wave = 0.042 * Math.sin(vx * 1.45 + 0.4) + 0.024 * Math.cos(vz * 2.2);
        const edgeRound = 1 - 0.12 * Math.pow(vx / (THY_W * 0.5), 4);
        p.setXYZ(i, thyCenter.x + vx, thyCenter.y + yOff + vy * edgeRound + wave, thyCenter.z + vz);
      }
      g.computeVertexNormals();
      return g;
    };

    cell.add(shade(new THREE.Mesh(makeBilayerRibbon(+THY_THICK * 0.5, 0.055), thyShellMat), true, true));
    cell.add(shade(new THREE.Mesh(makeBilayerRibbon(-THY_THICK * 0.5, 0.055), thyShellMat), false, true));

    // Glowing hydrophobic bilayer core + lower lumen floor forming a crisp cutaway U-pocket
    const thyCoreMat = reg(
      'thylakoid',
      applyBacklitSSS(
        phys({
          color: '#114a34',
          roughness: 0.48,
          clearcoat: 0.22,
          side: THREE.DoubleSide,
        }),
        '#46f5a4',
        0.24,
        2.5
      )
    );
    cell.add(new THREE.Mesh(makeBilayerRibbon(0, THY_THICK * 0.72), thyCoreMat));
    // Lower lumen boundary membrane below the hero bilayer (enclosing the glowing lumen H+ pool!)
    const lumenFloor = shade(new THREE.Mesh(makeBilayerRibbon(-0.56, 0.07), thyShellMat), false, true);
    cell.add(lumenFloor);

    // Crisp phospholipid headgroups & hydrophobic tails along the front cutaway edge of the thylakoid bilayer!
    const cHeadG = col('#52ffb0');
    const cHeadG2 = col('#38d896');
    const cTailG = col('#7cb89a');
    for (let ix = -15; ix <= 15; ix++) {
      const lx = thyCenter.x + ix * 0.13;
      const wave = 0.042 * Math.sin((lx - thyCenter.x) * 1.45 + 0.4);
      const lz = thyCenter.z + THY_D * 0.48;
      const pTop = V(lx, thyCenter.y + THY_THICK * 0.54 + wave, lz);
      const pMid = V(lx, thyCenter.y + wave, lz);
      const pBot = V(lx, thyCenter.y - THY_THICK * 0.54 + wave, lz);
      S_LAM.add(pTop, 0.092, ix % 2 === 0 ? cHeadG : cHeadG2);
      S_LAM.add(pBot, 0.092, ix % 2 === 0 ? cHeadG2 : cHeadG);
      S_LAM.stick(pTop, pMid, 0.015, cTailG, cTailG);
      S_LAM.stick(pBot, pMid, 0.015, cTailG, cTailG);
      // Lower lumen sac rim beads
      const pLow = V(lx, thyCenter.y - 0.56 + wave, lz);
      S_LAM.add(pLow, 0.08, cHeadG2);
    }
    S_LAM.done();
    SITES.thylakoid.push(thyCenter.clone().add(V(0, -0.04, 0.35)));

    // Acidic Thylakoid Lumen soft organic H+ cloud ('proton_grad') — smooth rounded ellipsoid, zero sharp box corners!
    const chloroProtonHaloMat = reg(
      'proton_grad',
      phys({
        color: '#ff6eb8',
        emissive: '#e63888',
        emissiveIntensity: 0.36,
        roughness: 0.45,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
      })
    );
    modeRefs.chloroProtonHaloMat = chloroProtonHaloMat;
    const chloroLumenGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1, 36, 20),
      chloroProtonHaloMat
    );
    chloroLumenGlow.scale.set(THY_W * 0.48, 0.21, THY_D * 0.44);
    chloroLumenGlow.position.set(thyCenter.x, thyCenter.y - 0.33, thyCenter.z - 0.04);
    cell.add(chloroLumenGlow);

    // Dense glowing H+ proton beads pooled inside the thylakoid lumen
    const chloroProtonBeadMat = makeCinemaProteinMat('proton_grad', {
      emissive: '#ff3c96',
      emissiveIntensity: 0.62,
      roughness: 0.20,
      clearcoat: 0.65,
      transparent: true,
      opacity: 0.96,
    }, '#ff84c8', 0.22);
    modeRefs.chloroProtonBeadMat = chloroProtonBeadMat;
    const S_CH_H = makeSculptedMesh(chloroProtonBeadMat, cell);
    for (let i = 0; i < 28; i++) {
      const hx = thyCenter.x + rr(-THY_W * 0.43, THY_W * 0.43);
      const hy = thyCenter.y - rr(0.19, 0.45);
      const hz = thyCenter.z + rr(-0.24, 0.30);
      S_CH_H.add(V(hx, hy, hz), rr(0.080, 0.118), i % 2 === 0 ? col('#ff72bc') : col('#ffade0'));
      if (i % 7 === 0) SITES.proton_grad.push(V(hx, hy, hz));
      placed++;
    }
    S_CH_H.done();

    // 1C. Light-Dependent Z-Scheme Real RCSB PDB Complexes!
    // --- PSII (3JCU) ---
    const psiiMat = makeCinemaProteinMat('psii', {
      emissive: '#10622e',
      emissiveIntensity: 0.20,
      roughness: 0.32,
      clearcoat: 0.48,
    }, '#6eff92', 0.24);
    modeRefs.psiiMat = psiiMat;
    const heroPsii = shade(new THREE.Mesh(T.geoPsii, psiiMat), true, true);
    heroPsii.position.copy(PSII_POS);
    heroPsii.scale.setScalar(1.16);
    heroPsii.rotation.set(0.08, 0.24, 0);
    cell.add(heroPsii);
    SITES.psii.push(PSII_POS.clone());
    placed++;

    // Mn4CaO5 Oxygen-Evolving Complex glowing catalytic bead cluster at lumen underside of Hero PSII!
    const S_OEC = sculpt('psii', cell, {
      emissive: '#34e8ff',
      emissiveIntensity: 0.74,
      roughness: 0.18,
      clearcoat: 0.70,
    }, '#78f4ff');
    const oecC = PSII_POS.clone().add(V(0, -0.34, 0.16));
    S_OEC.add(oecC, 0.17, col('#ff58a8')); // Mn4 cluster
    S_OEC.add(oecC.clone().add(V(0.10, -0.05, 0.04)), 0.12, col('#78f2ff')); // Ca2+
    S_OEC.add(oecC.clone().add(V(-0.09, -0.04, 0.05)), 0.12, col('#68ffa8')); // O5 bridge
    S_OEC.ring(PSII_POS.clone().add(V(0, 0.28, 0.05)), V(0, 1, 0), 0.34, 0.028, col('#ffe658'), 28, 8);
    S_OEC.done();

    // Golden solar photon pulse beams streaming downward onto PSII (680 nm) & PSI (700 nm)!
    const photonMat = reg(
      'psii',
      new THREE.MeshBasicMaterial({
        color: '#ffe962',
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    modeRefs.photonMat = photonMat;
    [
      [PSII_POS.clone().add(V(-0.35, 1.38, 0.15)), PSII_POS.clone().add(V(0, 0.32, 0.05))],
      [PSII_POS.clone().add(V(0.18, 1.42, 0.10)), PSII_POS.clone().add(V(0.08, 0.30, 0.08))],
      [PSI_POS.clone().add(V(-0.22, 1.40, 0.14)), PSI_POS.clone().add(V(0, 0.32, 0.06))],
      [PSI_POS.clone().add(V(0.24, 1.36, 0.10)), PSI_POS.clone().add(V(0.06, 0.30, 0.08))],
    ].forEach(([a, b]) => {
      const curve = new THREE.CatmullRomCurve3([
        a,
        a.clone().lerp(b, 0.35).add(V(0.08, 0, 0.04)),
        a.clone().lerp(b, 0.70).add(V(-0.08, 0, -0.02)),
        b,
      ]);
      const m = new THREE.Mesh(sweepGeo(curve, t => 0.048 * (1 - 0.45 * t), 24, 8), photonMat);
      photonBeamsGroup.add(m);
      photonBeams.push(m);
    });

    // Tile 19 additional real 3JCU PSII dimers across the background thylakoid grana!
    const I_PSII = makeMolBatch(T.geoPsii, psiiMat, cell);
    bgGrana.forEach((gr, gi) => {
      for (let i = 0; i < gr.n; i++) {
        for (let k = 0; k < 2; k++) {
          const ang = gi * 1.4 + i * 1.1 + k * 2.9;
          const p = V(gr.x + Math.cos(ang) * gr.rx * 0.62, gr.y0 + i * 0.32 + 0.08, gr.z + Math.sin(ang) * gr.rz * 0.62);
          I_PSII.add(p, qFromY(V(0, 1, 0), ang), rr(0.54, 0.68));
          placed++;
          if (SITES.psii.length < 8) SITES.psii.push(p.clone());
        }
      }
    });
    I_PSII.done();

    // --- Cytochrome b6f (6RQF) ---
    const b6fMat = makeCinemaProteinMat('cyt_b6f', {
      emissive: '#0c5c74',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.50,
    }, '#5ceeff', 0.28);
    modeRefs.b6fMat = b6fMat;
    const heroB6f = shade(new THREE.Mesh(T.geoB6f, b6fMat), true, true);
    heroB6f.position.copy(B6F_POS);
    heroB6f.scale.setScalar(1.12);
    heroB6f.rotation.set(0.06, -0.22, 0);
    cell.add(heroB6f);
    SITES.cyt_b6f.push(B6F_POS.clone());
    placed++;

    const I_B6F = makeMolBatch(T.geoB6f, b6fMat, cell);
    bgGrana.forEach((gr, gi) => {
      for (let i = 0; i < gr.n; i++) {
        const ang = gi * 2.1 + i * 1.6 + 0.7;
        const p = V(gr.x + Math.cos(ang) * gr.rx * 0.58, gr.y0 + i * 0.32 + 0.06, gr.z + Math.sin(ang) * gr.rz * 0.58);
        I_B6F.add(p, qFromY(V(0, 1, 0), ang), rr(0.52, 0.64));
        placed++;
        if (SITES.cyt_b6f.length < 7) SITES.cyt_b6f.push(p.clone());
      }
    });
    I_B6F.done();

    // --- PSI–LHCI (4XK8) ---
    const psiMat = makeCinemaProteinMat('psi', {
      emissive: '#0e6a56',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.52,
    }, '#5cffd2', 0.30);
    modeRefs.psiMat = psiMat;
    const heroPsi = shade(new THREE.Mesh(T.geoPsi, psiMat), true, true);
    heroPsi.position.copy(PSI_POS);
    heroPsi.scale.setScalar(1.12);
    heroPsi.rotation.set(0.06, 0.30, 0);
    cell.add(heroPsi);
    SITES.psi.push(PSI_POS.clone());
    placed++;

    const I_PSI = makeMolBatch(T.geoPsi, psiMat, cell);
    bgGrana.forEach((gr, gi) => {
      for (let i = 0; i < gr.n; i++) {
        for (let k = 0; k < 2; k++) {
          const ang = gi * 1.9 + i * 1.3 + k * 3.1 + 1.2;
          const p = V(gr.x + Math.cos(ang) * gr.rx * 0.74, gr.y0 + i * 0.32 + 0.08, gr.z + Math.sin(ang) * gr.rz * 0.74);
          I_PSI.add(p, qFromY(V(0, 1, 0), ang), rr(0.52, 0.66));
          placed++;
          if (SITES.psi.length < 8) SITES.psi.push(p.clone());
        }
      }
    });
    I_PSI.done();

    // Glowing PQ (hydrophobic bilayer) & PC (luminal) Z-scheme electron path + animated electron sparks!
    const zWireMat = reg(
      'cyt_b6f',
      phys({
        color: '#ffe868',
        emissive: '#ffb82e',
        emissiveIntensity: 0.74,
        roughness: 0.20,
        transparent: true,
        opacity: 0.88,
      })
    );
    modeRefs.zWireMat = zWireMat;
    const zCurve = new THREE.CatmullRomCurve3([
      PSII_POS.clone().add(V(0.05, 0.06, 0.22)),
      PSII_POS.clone().lerp(B6F_POS, 0.5).add(V(0, -0.02, 0.28)), // PQ inside bilayer
      B6F_POS.clone().add(V(0, -0.08, 0.26)),
      B6F_POS.clone().lerp(PSI_POS, 0.5).add(V(0, -0.26, 0.26)), // PC inside lumen
      PSI_POS.clone().add(V(0, 0.14, 0.24)),
      PSI_POS.clone().add(V(0.45, 0.42, 0.18)), // Ferredoxin / FNR -> NADPH
    ]);
    zElectronGroup.add(new THREE.Mesh(sweepGeo(zCurve, () => 0.030, 48, 8), zWireMat));
    const sparkGeo = new THREE.SphereGeometry(0.072, 12, 10);
    for (let s = 0; s < 5; s++) {
      const sm = new THREE.Mesh(sparkGeo, zWireMat);
      zElectronGroup.add(sm);
      zSparks.push({ mesh: sm, phase: s / 5, curve: zCurve });
    }

    // --- Chloroplast Rotary CF1CF0 ATP Synthase (5ARA emerald-gold fold + spinning rotor!) ---
    const cfMat = makeCinemaProteinMat('cf1cf0', {
      emissive: '#6e640c',
      emissiveIntensity: 0.34,
      roughness: 0.24,
      clearcoat: 0.58,
    }, '#ffe868', 0.30);
    modeRefs.cfMat = cfMat;
    const heroCfRoot = new THREE.Group();
    heroCfRoot.position.copy(CF_POS);
    cell.add(heroCfRoot);

    const heroCfSpin = new THREE.Group();
    heroCfRoot.add(heroCfSpin);
    const heroCfMesh = shade(new THREE.Mesh(T.geoCF1CF0, cfMat), true, true);
    heroCfMesh.scale.setScalar(1.04);
    heroCfSpin.add(heroCfMesh);

    // Crisp spinning c14-ring collar & glowing stromal CF1 catalytic crown
    const S_CF_ROTOR = sculpt('cf1cf0', heroCfSpin, {
      emissive: '#b89412',
      emissiveIntensity: 0.58,
      roughness: 0.22,
      clearcoat: 0.68,
    }, '#fff078');
    S_CF_ROTOR.ring(V(0, -0.14, 0), V(0, 1, 0), 0.26, 0.048, col('#5effa2'), 24, 8);
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      S_CF_ROTOR.add(V(Math.cos(a) * 0.23, 0.34, Math.sin(a) * 0.23), 0.16, k % 2 === 0 ? col('#ffe458') : col('#9eff78'));
    }
    S_CF_ROTOR.done();
    cfRotors.push(heroCfSpin);
    SITES.cf1cf0.push(CF_POS.clone());
    placed++;

    // Additional CF1CF0 complexes tiled along grana margins & stroma lamellae
    const I_CF = makeMolBatch(T.geoCF1CF0, cfMat, cell);
    for (let i = 0; i < 17; i++) {
      const gr = bgGrana[i % bgGrana.length];
      const ang = i * 1.85;
      const p = V(gr.x + Math.cos(ang) * (gr.rx + 0.16), gr.y0 + (i % gr.n) * 0.32 + 0.16, gr.z + Math.sin(ang) * (gr.rz + 0.12));
      I_CF.add(p, qFromY(V(Math.cos(ang) * 0.35, 1, Math.sin(ang) * 0.35), ang), rr(0.52, 0.64));
      placed++;
      if (SITES.cf1cf0.length < 7) SITES.cf1cf0.push(p.clone());
    }
    I_CF.done();

    // 1D. Stromal Calvin–Benson Cycle & Crowded RuBisCO L8S8 Hexadecamers (PDB 1RCX)
    calvinRingGroup = new THREE.Group();
    calvinRingGroup.position.copy(CALVIN_C);
    calvinRingGroup.rotation.set(0.24, 0.18, -0.05);
    cell.add(calvinRingGroup);

    const rubMat = makeCinemaProteinMat('rubisco', {
      emissive: '#36680a',
      emissiveIntensity: 0.30,
      roughness: 0.28,
      clearcoat: 0.48,
    }, '#c6ff58', 0.28);

    // Luminous Calvin cycle catalytic torus ring + 6 Hero 1RCX RuBisCO hexadecamers orbiting it!
    const S_CALV = sculpt('rubisco', calvinRingGroup, {
      emissive: '#62b81c',
      emissiveIntensity: 0.56,
      roughness: 0.22,
      clearcoat: 0.62,
    }, '#c8ff62');
    S_CALV.ring(V(0, 0, 0), V(0, 0, 1), 0.72, 0.044, col('#b4ff4c'), 42, 8);
    S_CALV.ring(V(0, 0, 0), V(0, 0, 1), 0.56, 0.022, col('#ffe45e'), 36, 8);
    // Hexagonal Glucose product emerging cleanly on the right edge of the Calvin cycle ring!
    const gluC = V(1.06, 0.14, 0.14);
    for (let k = 0; k < 6; k++) {
      const a0 = (k / 6) * Math.PI * 2;
      const a1 = ((k + 1) / 6) * Math.PI * 2;
      const p0 = gluC.clone().add(V(Math.cos(a0) * 0.16, Math.sin(a0) * 0.16, 0));
      const p1 = gluC.clone().add(V(Math.cos(a1) * 0.16, Math.sin(a1) * 0.16, 0));
      S_CALV.add(p0, 0.088, k === 0 ? col('#ff6274') : col('#68ff98'));
      S_CALV.stick(p0, p1, 0.022, col('#68ff98'), col('#a8ffbe'));
    }
    S_CALV.done();

    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      const m = shade(new THREE.Mesh(T.geoRubisco, rubMat), true, true);
      m.position.set(Math.cos(a) * 0.76, Math.sin(a) * 0.76, 0.06 * Math.sin(k * 2));
      m.scale.setScalar(0.84);
      m.rotation.set(k * 0.5, k * 0.8, a);
      calvinRingGroup.add(m);
      placed++;
      SITES.rubisco.push(CALVIN_C.clone().add(V(Math.cos(a) * 0.76, Math.sin(a) * 0.76, 0.1)));
    }

    // Crowd 28 additional real 1RCX RuBisCO hexadecamers through the chloroplast stroma!
    const I_RUB = makeMolBatch(T.geoRubisco, rubMat, cell);
    for (let i = 0; i < 28; i++) {
      const a = rr(0, Math.PI * 2);
      const r = rr(0.75, 2.35);
      const lx = CHLORO_C.x + Math.cos(a) * r;
      const ly = CHLORO_C.y + rr(-1.35, 1.25);
      const lz = rr(-1.35, 0.15);
      // Keep inside chloroplast inner ellipsoid
      const dx = (lx - CHLORO_C.x) / (CHLORO_R.x * 0.84);
      const dy = (ly - CHLORO_C.y) / (CHLORO_R.y * 0.84);
      const dz = (lz - CHLORO_C.z) / (CHLORO_R.z * 0.84);
      if (dx * dx + dy * dy + dz * dz > 0.88) continue;
      I_RUB.add(V(lx, ly, lz), qFromY(V(rr(-1, 1), rr(-1, 1), rr(-1, 1)), rr(0, 6.28)), rr(0.58, 0.76));
      placed++;
    }
    I_RUB.done();
    SITES.rubisco.push(CALVIN_C.clone());
  }

  // -------------------------------------------------------------------------
  // 2. Center Cytosolic Bridge — Glycolysis Corridor & Coupled Exchange Arcs
  //    Links Chloroplast -> Glycolysis (2 ATP) -> Mitochondrion
  //    Top luminous arc: Glucose + 6 O2  |  Bottom return arc: 6 CO2 + 6 H2O
  // -------------------------------------------------------------------------
  function buildGlycolysisAndCoupledArcs() {
    // 2A. Cytosolic Glycolysis Catalytic Envelope (Shell #6!) + Enzyme Gate
    const glycoShellMat = cinemaShellMat('glycolysis', '#2898c8', '#a6f0ff', {}, {
      attenCol: '#186a96',
      attenDist: 3.4,
      sssColor: '#6ceeff',
      sssIntensity: 0.30,
      iridescence: 0.48,
      thickness: 0.36,
      roughness: 0.14,
      sheenColor: '#d8f8ff',
      normalMap: bump(8, 8),
      normalScale: 0.18,
    });
    const glycoBubble = new THREE.Mesh(new THREE.SphereGeometry(1, 36, 24), glycoShellMat);
    glycoBubble.scale.set(1.06, 0.76, 0.68);
    glycoBubble.position.copy(GLYCO_C);
    cell.add(glycoBubble);

    glycoRingGroup = new THREE.Group();
    glycoRingGroup.position.copy(GLYCO_C);
    cell.add(glycoRingGroup);

    const glycoGateMat = makeCinemaProteinMat('glycolysis', {
      emissive: '#147aa8',
      emissiveIntensity: 0.46,
      roughness: 0.24,
      clearcoat: 0.62,
    }, '#70efff', 0.30);
    modeRefs.glycoGateMat = glycoGateMat;

    const S_GLY = makeSculptedMesh(glycoGateMat, glycoRingGroup);
    // Double catalytic cleavage portal ring (Glucose C6 -> 2 x Pyruvate C3 + 2 net ATP)
    S_GLY.ring(V(-0.32, 0, 0), V(1, 0, 0), 0.56, 0.048, col('#5cf0ff'), 32, 8);
    S_GLY.ring(V(+0.32, 0, 0), V(1, 0, 0), 0.56, 0.048, col('#ffbe52'), 32, 8);

    // 4 sculpted glycolytic enzyme complexes (Hexokinase, PFK-1, Aldolase, Pyruvate Kinase)
    const enzCoords: Array<[number, number, number, string]> = [
      [-0.52, 0.38, 0.18, '#4be4ff'],
      [-0.14, -0.40, 0.24, '#5cffc8'],
      [+0.20, 0.40, 0.22, '#ffd25a'],
      [+0.54, -0.36, 0.18, '#ff984e'],
    ];
    enzCoords.forEach(([ex, ey, ez, hx]) => {
      S_GLY.lobe(V(ex, ey, ez), 0.22, 0.16, 0.17, col(hx));
      S_GLY.lobe(V(ex + 0.10, ey - 0.06, ez + 0.06), 0.15, 0.14, 0.13, col(hx).offsetHSL(0.02, 0, 0.08));
      placed += 2;
    });

    // Sculpted incoming 6-carbon hexagonal Glucose (left) cleaving into twin 3-carbon Pyruvate bars (right)!
    const gIn = V(-0.62, 0.02, 0.18);
    for (let k = 0; k < 6; k++) {
      const a0 = (k / 6) * Math.PI * 2;
      const a1 = ((k + 1) / 6) * Math.PI * 2;
      const p0 = gIn.clone().add(V(Math.cos(a0) * 0.18, Math.sin(a0) * 0.18, 0));
      const p1 = gIn.clone().add(V(Math.cos(a1) * 0.18, Math.sin(a1) * 0.18, 0));
      S_GLY.add(p0, 0.095, k === 0 ? col('#ff6678') : col('#5effa2'));
      S_GLY.stick(p0, p1, 0.024, col('#5effa2'), col('#a8ffd0'));
    }
    // Twin 3-carbon Pyruvate chains exiting right into the Mitochondrion!
    for (const py of [0.16, -0.16]) {
      const pA = V(0.36, py, 0.20);
      const pB = V(0.56, py + 0.04, 0.20);
      const pC = V(0.76, py - 0.02, 0.20);
      S_GLY.add(pA, 0.092, col('#ffd052'));
      S_GLY.add(pB, 0.092, col('#ffad48'));
      S_GLY.add(pC, 0.096, col('#ff6274'));
      S_GLY.stick(pA, pB, 0.024, col('#ffd052'), col('#ffad48'));
      S_GLY.stick(pB, pC, 0.024, col('#ffad48'), col('#ff6274'));
    }
    S_GLY.done();

    // Glowing anaerobic fermentation ring visible when O2 is turned OFF ('anaerobic_no_o2'!)
    const glycoCoreMat = reg(
      'glycolysis',
      phys({
        color: '#ffb84d',
        emissive: '#ff8a24',
        emissiveIntensity: 0.92,
        roughness: 0.18,
        transparent: true,
        opacity: 0.82,
      })
    );
    modeRefs.glycoCoreMat = glycoCoreMat;
    const fermRing = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.046, 12, 48), glycoCoreMat);
    fermRing.position.copy(GLYCO_C);
    anaerobicPulseGroup.add(fermRing);

    SITES.glycolysis.push(GLYCO_C.clone(), GLYCO_C.clone().add(V(-0.4, 0.3, 0.2)), GLYCO_C.clone().add(V(0.4, -0.2, 0.2)));

    // 2B. Luminous Planetary Exchange Arcs ('energy_carriers')
    // Top Arc: Glucose + 6 O2 arching from Chloroplast -> Mitochondrion
    const topArcCurve = new THREE.CatmullRomCurve3([
      V(CHLORO_C.x + 0.85, CHLORO_C.y + 1.88, 0.32),
      V(-1.75, 3.78, 0.45),
      V(0.0, 4.18, 0.50),
      V(+1.75, 3.78, 0.45),
      V(MITO_C.x - 0.85, MITO_C.y + 1.84, 0.32),
    ]);
    // Bottom Return Arc: 6 CO2 + 6 H2O arching from Mitochondrion -> Chloroplast (cleanly above ATOM_C!)
    const botArcCurve = new THREE.CatmullRomCurve3([
      V(MITO_C.x - 0.95, MITO_C.y - 1.72, 0.38),
      V(+1.85, -1.68, 0.52),
      V(0.0, -1.94, 0.58),
      V(-1.85, -1.68, 0.52),
      V(CHLORO_C.x + 0.95, CHLORO_C.y - 1.74, 0.38),
    ]);
    // Direct Cytosolic Glucose -> Glycolysis -> Krebs Matrix Feed Line
    const midBridgeCurve = new THREE.CatmullRomCurve3([
      CALVIN_C.clone().add(V(0.95, 0.10, 0.10)),
      V(-1.75, 0.58, 0.44),
      GLYCO_C.clone(),
      V(1.75, 0.46, 0.54),
      KREBS_C.clone().add(V(-0.78, 0.14, 0.10)),
    ]);

    const arcMatTop = reg(
      'energy_carriers',
      phys({
        color: '#5cffc4',
        emissive: '#1cc894',
        emissiveIntensity: 0.52,
        roughness: 0.22,
        transparent: true,
        opacity: 0.46,
        depthWrite: false,
      })
    );
    const arcMatBot = reg(
      'energy_carriers',
      phys({
        color: '#9e8cff',
        emissive: '#6448e8',
        emissiveIntensity: 0.50,
        roughness: 0.22,
        transparent: true,
        opacity: 0.44,
        depthWrite: false,
      })
    );
    const arcMatMid = reg(
      'energy_carriers',
      phys({
        color: '#6ce8ff',
        emissive: '#22a6d8',
        emissiveIntensity: 0.48,
        roughness: 0.24,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
      })
    );

    cell.add(new THREE.Mesh(sweepGeo(topArcCurve, t => 0.068 * Math.sin(Math.PI * t) + 0.022, 64, 12), arcMatTop));
    cell.add(new THREE.Mesh(sweepGeo(botArcCurve, t => 0.068 * Math.sin(Math.PI * t) + 0.022, 64, 12), arcMatBot));
    cell.add(new THREE.Mesh(sweepGeo(midBridgeCurve, () => 0.036, 48, 10), arcMatMid));

    // Directional chevron arrow beads along top & bottom coupled arcs so loop direction is crystal clear!
    const S_ARR = sculpt('energy_carriers', cell, {
      emissive: '#38c8d8',
      emissiveIntensity: 0.58,
      roughness: 0.22,
      clearcoat: 0.60,
    }, '#88f4ff');
    const addChevron = (curve: THREE.CatmullRomCurve3, u: number, hex: string) => {
      const p = curve.getPointAt(u);
      const tan = curve.getTangentAt(u).normalize();
      const perp = V(-tan.y, tan.x, 0).normalize();
      const tip = p.clone().addScaledVector(tan, 0.20);
      const wL = p.clone().addScaledVector(tan, -0.14).addScaledVector(perp, 0.16);
      const wR = p.clone().addScaledVector(tan, -0.14).addScaledVector(perp, -0.16);
      S_ARR.stick(wL, tip, 0.032, col(hex), col('#ffffff'));
      S_ARR.stick(wR, tip, 0.032, col(hex), col('#ffffff'));
      SITES.energy_carriers.push(p.clone());
    };
    [0.25, 0.50, 0.75].forEach(u => addChevron(topArcCurve, u, '#5effb8'));
    [0.25, 0.50, 0.75].forEach(u => addChevron(botArcCurve, u, '#b494ff'));
    addChevron(midBridgeCurve, 0.28, '#68f2ff');
    addChevron(midBridgeCurve, 0.72, '#ffd05c');
    S_ARR.done();

    return { topArcCurve, botArcCurve, midBridgeCurve };
  }

  // -------------------------------------------------------------------------
  // 3. Right Chamber — Cutaway Warm Crimson/Amber Animal Mitochondrion
  //    Outer + folded inner cristae wet-gel shells, IMS H+ proton halo,
  //    Matrix Krebs Cycle ring + 1CTS Citrate Synthase,
  //    Inner Cristae Complexes I–IV (5XTD, 1ZOY, 1BGY, 1V54) + spinning 5ARA F1F0!
  // -------------------------------------------------------------------------
  function buildMitochondrionChamber(T) {
    // 3A. Outer & Inner Cristae Wet-Gel Backlit Membranes (Shells #4 and #5!)
    const mitoOuterMat = cinemaShellMat('mito_hull', '#b8324a', '#ff9eb2', FRONT_CLIP, {
      attenCol: '#8f2238',
      attenDist: 4.8,
      sssColor: '#ff6e88',
      sssIntensity: 0.36,
      iridescence: 0.56,
      thickness: 0.52,
      roughness: 0.12,
      sheenColor: '#ffdce6',
      normalMap: bump(14, 10),
      normalScale: 0.24,
    });
    cell.add(shade(new THREE.Mesh(buildOrganicEllipsoidGeo(MITO_C, MITO_R, 1.0, 13.7, 96), mitoOuterMat), true, true));

    const mitoInnerMat = cinemaShellMat('mito_hull', '#d45e30', '#ffc492', FRONT_CLIP, {
      attenCol: '#a6421c',
      attenDist: 3.8,
      sssColor: '#ff9652',
      sssIntensity: 0.30,
      iridescence: 0.44,
      thickness: 0.42,
      roughness: 0.14,
      sheenColor: '#ffe4c8',
      normalMap: bump(12, 10),
      normalScale: 0.22,
    });
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(MITO_C, MITO_R, 0.915, 13.7, 84), mitoInnerMat));

    // Warm dark-burgundy matrix cavity backing wall so amber/gold/crimson PDBs pop with cryo-EM contrast
    const mitoBackMat = reg(
      'mito_hull',
      applyBacklitSSS(
        phys(
          {
            color: '#2a0d16',
            roughness: 0.62,
            metalness: 0.05,
            side: THREE.BackSide,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          FRONT_CLIP
        ),
        '#ff6a5e',
        0.20,
        2.5
      )
    );
    cell.add(new THREE.Mesh(buildOrganicEllipsoidGeo(MITO_C, MITO_R, 0.895, 13.7, 72), mitoBackMat));

    // Exact multi-band outer/IMS/inner cutaway rim strip flush on z = CUT_Z
    const MI_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [1.00, 0.974, '#ff9ab0'], // Outer mitochondrial membrane
      [0.974, 0.930, '#6a1834'], // Intermembrane space (H+ reservoir)
      [0.930, 0.895, '#ff9852'], // Inner cristae boundary membrane
    ];
    const mitoRimMat = reg(
      'mito_hull',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        metalness: 0.08,
        emissive: '#6e1c2e',
        emissiveIntensity: 0.44,
        side: THREE.DoubleSide,
      })
    );
    cutRimGroup.add(new THREE.Mesh(buildFrontCutRimGeo(MITO_C, MITO_R, CUT_Z, 13.7, MI_LAYERS, 160), mitoRimMat));
    SITES.mito_hull.push(
      MITO_C.clone().add(V(2.75, 1.32, 0.25)),
      MITO_C.clone().add(V(2.80, -0.52, 0.25)),
      MITO_C.clone().add(V(0.55, 1.88, 0.25))
    );

    // 3B. Serpentine Folded Inner Cristae Baffles + Hero Crista ETC Bilayer Ridge!
    const cristaFolds = [
      { x: MITO_C.x - 1.55, y: MITO_C.y + 0.68, z: -0.78, w: 1.55, h: 0.14, d: 0.72, rotZ: -0.18 },
      { x: MITO_C.x + 1.38, y: MITO_C.y - 0.68, z: -0.68, w: 1.85, h: 0.14, d: 0.78, rotZ: 0.14 },
      { x: MITO_C.x + 0.08, y: MITO_C.y + 0.82, z: -1.12, w: 2.35, h: 0.14, d: 0.64, rotZ: 0.04 },
    ];
    cristaFolds.forEach(cf => {
      const g = new THREE.BoxGeometry(cf.w, cf.h, cf.d, 20, 1, 6);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
        p.setY(i, vy + 0.045 * Math.sin(vx * 2.4 + vz));
      }
      g.computeVertexNormals();
      const m = shade(new THREE.Mesh(g, mitoInnerMat), true, true);
      m.position.set(cf.x, cf.y, cf.z);
      m.rotation.z = cf.rotZ;
      cell.add(m);
    });

    // HERO Inner Crista Bilayer Stage (center-top inside Mitochondrion for 'mito_etc'!)
    // Above the crista bilayer: glowing magenta-gold Intermembrane Space (IMS) H+ reservoir!
    // Below the crista bilayer: mitochondrial matrix where NADH/FADH2 feed Complexes I–IV & F1F0 forges ATP!
    const CR_W = 4.35;
    const CR_D = 0.86;
    const CR_THICK = 0.21;
    const crCenter = V(4.48, ETC_Y - 0.04, ETC_Z);
    const makeCristaRibbon = (yOff: number, radH: number) => {
      const g = new THREE.BoxGeometry(CR_W, radH, CR_D, 44, 1, 8);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
        const wave = 0.04 * Math.sin(vx * 1.4 - 0.3) + 0.022 * Math.cos(vz * 2.1);
        p.setXYZ(i, crCenter.x + vx, crCenter.y + yOff + vy + wave, crCenter.z + vz);
      }
      g.computeVertexNormals();
      return g;
    };
    cell.add(shade(new THREE.Mesh(makeCristaRibbon(+CR_THICK * 0.5, 0.055), mitoInnerMat), true, true));
    cell.add(shade(new THREE.Mesh(makeCristaRibbon(-CR_THICK * 0.5, 0.055), mitoInnerMat), false, true));

    const crCoreMat = reg(
      'mito_hull',
      applyBacklitSSS(
        phys({
          color: '#521d1a',
          roughness: 0.48,
          clearcoat: 0.22,
          side: THREE.DoubleSide,
        }),
        '#ff8a52',
        0.24,
        2.5
      )
    );
    cell.add(new THREE.Mesh(makeCristaRibbon(0, CR_THICK * 0.72), crCoreMat));

    // Cardiolipin-enriched crista bilayer headgroups & tails along front cut edge!
    const S_CR = sculpt('mito_hull', cell, {
      emissive: '#78281c',
      emissiveIntensity: 0.26,
      roughness: 0.28,
      clearcoat: 0.46,
    }, '#ff9868');
    const cHeadM = col('#ff9862');
    const cCardio = col('#ffd268'); // Cardiolipin signature lipid of inner mitochondrial membrane
    const cTailM = col('#c88a74');
    for (let ix = -16; ix <= 16; ix++) {
      const lx = crCenter.x + ix * 0.13;
      const wave = 0.04 * Math.sin((lx - crCenter.x) * 1.4 - 0.3);
      const lz = crCenter.z + CR_D * 0.48;
      const pTop = V(lx, crCenter.y + CR_THICK * 0.54 + wave, lz);
      const pMid = V(lx, crCenter.y + wave, lz);
      const pBot = V(lx, crCenter.y - CR_THICK * 0.54 + wave, lz);
      S_CR.add(pTop, 0.092, ix % 3 === 0 ? cCardio : cHeadM);
      S_CR.add(pBot, 0.092, ix % 3 === 1 ? cCardio : cHeadM);
      S_CR.stick(pTop, pMid, 0.015, cTailM, cTailM);
      S_CR.stick(pBot, pMid, 0.015, cTailM, cTailM);
    }
    S_CR.done();

    // Glowing Intermembrane Space (IMS) soft organic H+ cloud right above Hero Crista! ('proton_grad')
    const mitoProtonHaloMat = reg(
      'proton_grad',
      phys({
        color: '#ff6eb8',
        emissive: '#ff3488',
        emissiveIntensity: 0.42,
        roughness: 0.44,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
      })
    );
    modeRefs.mitoProtonHaloMat = mitoProtonHaloMat;
    const imsHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1, 36, 20),
      mitoProtonHaloMat
    );
    imsHalo.scale.set(CR_W * 0.48, 0.28, CR_D * 0.44);
    imsHalo.position.set(crCenter.x, crCenter.y + 0.46, crCenter.z - 0.04);
    cell.add(imsHalo);

    const mitoProtonBeadMat = makeCinemaProteinMat('proton_grad', {
      emissive: '#ff3898',
      emissiveIntensity: 0.66,
      roughness: 0.20,
      clearcoat: 0.68,
      transparent: true,
      opacity: 0.96,
    }, '#ff88d0', 0.22);
    modeRefs.mitoProtonBeadMat = mitoProtonBeadMat;
    const S_MI_H = makeSculptedMesh(mitoProtonBeadMat, cell);
    for (let i = 0; i < 36; i++) {
      const hx = crCenter.x + rr(-CR_W * 0.44, CR_W * 0.44);
      const hy = crCenter.y + rr(0.28, 0.68);
      const hz = crCenter.z + rr(-0.26, 0.30);
      S_MI_H.add(V(hx, hy, hz), rr(0.082, 0.122), i % 2 === 0 ? col('#ff70c2') : col('#ffd678'));
      if (i % 7 === 0) SITES.proton_grad.push(V(hx, hy, hz));
      placed++;
    }
    S_MI_H.done();

    // 3C. Matrix Krebs / Citric Acid Cycle Ring + Real PDB 1CTS Citrate Synthase ('krebs_cycle')
    krebsRingGroup = new THREE.Group();
    krebsRingGroup.position.copy(KREBS_C);
    krebsRingGroup.rotation.set(0.24, -0.18, 0.05);
    cell.add(krebsRingGroup);

    const krebsRingMat = makeCinemaProteinMat('krebs_cycle', {
      emissive: '#c85814',
      emissiveIntensity: 0.56,
      roughness: 0.22,
      clearcoat: 0.62,
    }, '#ffb464', 0.30);
    modeRefs.krebsRingMat = krebsRingMat;

    const S_KREBS = makeSculptedMesh(krebsRingMat, krebsRingGroup);
    S_KREBS.ring(V(0, 0, 0), V(0, 0, 1), 0.76, 0.048, col('#ffa642'), 44, 8);
    S_KREBS.ring(V(0, 0, 0), V(0, 0, 1), 0.58, 0.024, col('#ff6288'), 36, 8);
    // 8 luminous Krebs intermediate beads around the cycle (Citrate -> ... -> Oxaloacetate)
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      S_KREBS.add(V(Math.cos(a) * 0.76, Math.sin(a) * 0.76, 0.06), 0.145, k % 2 === 0 ? col('#ffc858') : col('#ff7854'));
    }
    S_KREBS.done();

    const citMat = makeCinemaProteinMat('krebs_cycle', {
      emissive: '#943c12',
      emissiveIntensity: 0.36,
      roughness: 0.28,
      clearcoat: 0.50,
    }, '#ffaa58', 0.28);

    // 6 Hero real PDB 1CTS Citrate Synthase complexes perched right on the Krebs Cycle ring!
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2 + 0.25;
      const m = shade(new THREE.Mesh(T.geoCitrate, citMat), true, true);
      m.position.set(Math.cos(a) * 0.78, Math.sin(a) * 0.78, 0.08);
      m.scale.setScalar(0.88);
      m.rotation.set(k * 0.6, k * 0.9, a);
      krebsRingGroup.add(m);
      placed++;
      SITES.krebs_cycle.push(KREBS_C.clone().add(V(Math.cos(a) * 0.76, Math.sin(a) * 0.76, 0.12)));
    }
    // 18 additional real 1CTS enzymes dispersed through the mitochondrial matrix!
    const I_CIT = makeMolBatch(T.geoCitrate, citMat, cell);
    for (let i = 0; i < 18; i++) {
      const a = rr(0, Math.PI * 2);
      const r = rr(0.55, 2.25);
      const lx = MITO_C.x + Math.cos(a) * r;
      const ly = MITO_C.y + rr(-1.35, 0.85);
      const lz = rr(-1.25, 0.12);
      const dx = (lx - MITO_C.x) / (MITO_R.x * 0.82);
      const dy = (ly - MITO_C.y) / (MITO_R.y * 0.82);
      const dz = (lz - MITO_C.z) / (MITO_R.z * 0.82);
      if (dx * dx + dy * dy + dz * dz > 0.86) continue;
      I_CIT.add(V(lx, ly, lz), qFromY(V(rr(-1, 1), rr(-1, 1), rr(-1, 1)), rr(0, 6.28)), rr(0.58, 0.76));
      placed++;
    }
    I_CIT.done();
    SITES.krebs_cycle.push(KREBS_C.clone());

    // 3D. Inner Cristae Electron Transport Chain Complexes I–IV & Rotary F1F0 ATP Synthase!
    // --- Complex I (5XTD) ---
    const ciMat = makeCinemaProteinMat('complex_i', {
      emissive: '#88182e',
      emissiveIntensity: 0.36,
      roughness: 0.28,
      clearcoat: 0.52,
    }, '#ff6e82', 0.30);
    modeRefs.ciMat = ciMat;
    const heroCI = shade(new THREE.Mesh(T.geoCI, ciMat), true, true);
    heroCI.position.copy(CI_POS);
    heroCI.scale.setScalar(1.06);
    heroCI.rotation.set(0.06, 0.38, 0);
    cell.add(heroCI);
    SITES.complex_i.push(CI_POS.clone());
    placed++;

    const I_CI = makeMolBatch(T.geoCI, ciMat, cell);
    cristaFolds.forEach((cf, idx) => {
      for (let k = 0; k < 5; k++) {
        const u = (k / 4 - 0.5) * cf.w * 0.78;
        const p = V(cf.x + u, cf.y + 0.10, cf.z + rr(-0.18, 0.18));
        I_CI.add(p, qFromY(V(0, 1, 0), idx + k * 1.1), rr(0.48, 0.60));
        placed++;
        if (SITES.complex_i.length < 6) SITES.complex_i.push(p.clone());
      }
    });
    I_CI.done();

    // --- Complex II (1ZOY) ---
    const ciiMat = makeCinemaProteinMat('complex_ii', {
      emissive: '#8c3e0c',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.50,
    }, '#ffb45c', 0.28);
    modeRefs.ciiMat = ciiMat;
    const heroCII = shade(new THREE.Mesh(T.geoCII, ciiMat), true, true);
    heroCII.position.copy(CII_POS);
    heroCII.scale.setScalar(1.05);
    heroCII.rotation.set(0.08, -0.24, 0);
    cell.add(heroCII);
    SITES.complex_ii.push(CII_POS.clone());
    placed++;

    const I_CII = makeMolBatch(T.geoCII, ciiMat, cell);
    cristaFolds.forEach((cf, idx) => {
      for (let k = 0; k < 5; k++) {
        const u = (k / 4 - 0.5) * cf.w * 0.72 + 0.14;
        const p = V(cf.x + u, cf.y - 0.06, cf.z + rr(-0.18, 0.18));
        I_CII.add(p, qFromY(V(0, 1, 0), idx * 2 + k * 0.9), rr(0.46, 0.58));
        placed++;
        if (SITES.complex_ii.length < 6) SITES.complex_ii.push(p.clone());
      }
    });
    I_CII.done();

    // --- Complex III (1BGY) ---
    const ciiiMat = makeCinemaProteinMat('complex_iii', {
      emissive: '#7c185e',
      emissiveIntensity: 0.36,
      roughness: 0.28,
      clearcoat: 0.52,
    }, '#ff7cd6', 0.30);
    modeRefs.ciiiMat = ciiiMat;
    const heroCIII = shade(new THREE.Mesh(T.geoCIII, ciiiMat), true, true);
    heroCIII.position.copy(CIII_POS);
    heroCIII.scale.setScalar(1.05);
    heroCIII.rotation.set(0.06, 0.20, 0);
    cell.add(heroCIII);
    SITES.complex_iii.push(CIII_POS.clone());
    placed++;

    const I_CIII = makeMolBatch(T.geoCIII, ciiiMat, cell);
    cristaFolds.forEach((cf, idx) => {
      for (let k = 0; k < 5; k++) {
        const u = (k / 4 - 0.5) * cf.w * 0.76 - 0.12;
        const p = V(cf.x + u, cf.y + 0.08, cf.z + rr(-0.20, 0.20));
        I_CIII.add(p, qFromY(V(0, 1, 0), idx * 1.5 + k * 1.3), rr(0.48, 0.60));
        placed++;
        if (SITES.complex_iii.length < 6) SITES.complex_iii.push(p.clone());
      }
    });
    I_CIII.done();

    // --- Complex IV (1V54) + Glowing Terminal O2 -> H2O Reduction Pocket ---
    const civMat = makeCinemaProteinMat('complex_iv', {
      emissive: '#8e1424',
      emissiveIntensity: 0.38,
      roughness: 0.28,
      clearcoat: 0.54,
    }, '#ff6e78', 0.30);
    modeRefs.civMat = civMat;
    const heroCIV = shade(new THREE.Mesh(T.geoCIV, civMat), true, true);
    heroCIV.position.copy(CIV_POS);
    heroCIV.scale.setScalar(1.08);
    heroCIV.rotation.set(0.06, -0.28, 0);
    cell.add(heroCIV);
    SITES.complex_iv.push(CIV_POS.clone());
    placed++;

    // Glowing terminal O2 reduction pocket at Complex IV (dims sharply when O2 is removed!)
    const o2PocketMat = reg(
      'complex_iv',
      phys({
        color: '#66ecff',
        emissive: '#22c8ff',
        emissiveIntensity: 0.88,
        roughness: 0.16,
        transparent: true,
        opacity: 0.84,
      })
    );
    modeRefs.o2PocketMat = o2PocketMat;
    const o2Ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.032, 10, 32), o2PocketMat);
    o2Ring.position.copy(CIV_POS).add(V(0, -0.26, 0.22));
    cell.add(o2Ring);

    const I_CIV = makeMolBatch(T.geoCIV, civMat, cell);
    cristaFolds.forEach((cf, idx) => {
      for (let k = 0; k < 5; k++) {
        const u = (k / 4 - 0.5) * cf.w * 0.76 + 0.06;
        const p = V(cf.x + u, cf.y - 0.04, cf.z + rr(-0.18, 0.18));
        I_CIV.add(p, qFromY(V(0, 1, 0), idx + k * 1.4), rr(0.48, 0.60));
        placed++;
        if (SITES.complex_iv.length < 6) SITES.complex_iv.push(p.clone());
      }
    });
    I_CIV.done();

    // Glowing Mitochondrial ETC Electron Wire (I -> Q -> III -> Cyt c -> IV) + animated sparks!
    const etcWireMat = reg(
      'complex_i',
      phys({
        color: '#ffdd62',
        emissive: '#ff9628',
        emissiveIntensity: 0.78,
        roughness: 0.20,
        transparent: true,
        opacity: 0.90,
      })
    );
    modeRefs.etcWireMat = etcWireMat;
    const etcCurve = new THREE.CatmullRomCurve3([
      CI_POS.clone().add(V(-0.12, -0.18, 0.24)),
      CI_POS.clone().add(V(0.14, 0.02, 0.26)),
      CII_POS.clone().add(V(0, 0.0, 0.26)), // Ubiquinone Q pool inside crista core
      CIII_POS.clone().add(V(0, 0.10, 0.26)),
      CIII_POS.clone().lerp(CIV_POS, 0.5).add(V(0, 0.24, 0.26)), // Soluble Cytochrome c in IMS
      CIV_POS.clone().add(V(0, -0.18, 0.24)), // Terminal O2 -> H2O reduction!
    ]);
    etcElectronGroup.add(new THREE.Mesh(sweepGeo(etcCurve, () => 0.030, 48, 8), etcWireMat));
    const etcSparkGeo = new THREE.SphereGeometry(0.072, 12, 10);
    for (let s = 0; s < 5; s++) {
      const sm = new THREE.Mesh(etcSparkGeo, etcWireMat);
      etcElectronGroup.add(sm);
      etcSparks.push({ mesh: sm, phase: s / 5, curve: etcCurve });
    }

    // --- Rotary Mitochondrial F1F0 ATP Synthase (PDB 5ARA + Spinning Rotor!) ---
    const f1f0Mat = makeCinemaProteinMat('f1f0_atps', {
      emissive: '#96640c',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      clearcoat: 0.62,
    }, '#ffdc62', 0.34);
    modeRefs.f1f0Mat = f1f0Mat;

    const heroAtpsRoot = new THREE.Group();
    heroAtpsRoot.position.copy(ATPS_POS);
    cell.add(heroAtpsRoot);

    const heroAtpsSpin = new THREE.Group();
    heroAtpsRoot.add(heroAtpsSpin);
    const heroAtpsMesh = shade(new THREE.Mesh(T.geoF1F0, f1f0Mat), true, true);
    heroAtpsMesh.scale.setScalar(1.10);
    // Flip so F0 c-ring sits in upper crista bilayer facing IMS H+ and catalytic F1 crown points down into matrix!
    heroAtpsMesh.rotation.z = Math.PI;
    heroAtpsSpin.add(heroAtpsMesh);

    const S_ATPS_ROTOR = sculpt('f1f0_atps', heroAtpsSpin, {
      emissive: '#d69014',
      emissiveIntensity: 0.66,
      roughness: 0.20,
      clearcoat: 0.72,
    }, '#ffe878');
    // Spinning c8-ring rotor in bilayer + catalytic F1 hexamer crown below + glowing stator arc!
    S_ATPS_ROTOR.ring(V(0, +0.16, 0), V(0, 1, 0), 0.26, 0.048, col('#ff72b8'), 24, 8);
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      S_ATPS_ROTOR.add(V(Math.cos(a) * 0.25, -0.36, Math.sin(a) * 0.25), 0.175, k % 2 === 0 ? col('#ffe45c') : col('#ffaa38'));
    }
    S_ATPS_ROTOR.done();
    mitoRotors.push(heroAtpsSpin);
    SITES.f1f0_atps.push(ATPS_POS.clone());
    placed++;

    // Tile 22 real 5ARA F1F0 ATP synthase dimers lining high-curvature cristae ridges!
    const I_ATPS = makeMolBatch(T.geoF1F0, f1f0Mat, cell);
    cristaFolds.forEach((cf, idx) => {
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * Math.PI * 2 + idx;
        const p = V(cf.x + Math.cos(a) * (cf.w * 0.44), cf.y - 0.16, cf.z + Math.sin(a) * (cf.d * 0.46));
        I_ATPS.add(p, qFromY(V(Math.cos(a) * 0.3, -1, Math.sin(a) * 0.3), a), rr(0.50, 0.64));
        placed++;
        if (SITES.f1f0_atps.length < 8) SITES.f1f0_atps.push(p.clone());
      }
    });
    I_ATPS.done();
  }

  // -------------------------------------------------------------------------
  // 4. Centered Zero-Clipping Circular Optical Lens Atomic Inset ('cofactor_atoms')
  //    Left:  Chlorophyll a Porphyrin Macrocycle + Central Green Mg²⁺ Ion
  //    Right: ATP Triphosphate Chain (α–β–γ P–O–P) + γ-Phosphate Cleavage + H⁺
  //    Every label placed generously inside R_RING = 1.76 with ZERO edge clipping!
  // -------------------------------------------------------------------------
  function buildAtomicCofactorInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    cell.add(grp);

    const R_RING = 1.76;

    // Luminous emerald-to-gold optical lens bezel ring
    const ringMat = reg(
      'cofactor_atoms',
      phys({
        color: '#6effba',
        emissive: '#147858',
        emissiveIntensity: 0.48,
        roughness: 0.18,
        metalness: 0.26,
        clearcoat: 0.76,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.042, 16, 72), ringMat));

    // Dark-field matte optical lens aperture disc (zero specular glare dot!) for ultra-high atomic readability
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 64),
      reg(
        'cofactor_atoms',
        phys({
          color: '#060e1d',
          roughness: 0.88,
          metalness: 0.0,
          envMapIntensity: 0.10,
          transparent: true,
          opacity: 0.78,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.14;
    grp.add(glassDisc);

    const S_AT = sculpt('cofactor_atoms', grp, { roughness: 0.20, clearcoat: 0.66 }, '#8affcc');
    // Standard CPK bioenergetic atomic palette
    const cC = col('#94a4ba'); // Carbon — slate silver
    const cH = col('#f2f8ff'); // Hydrogen / H+ — pearl white
    const cN = col('#4c98ff'); // Nitrogen — cobalt blue
    const cO = col('#ff5064'); // Oxygen — crimson red
    const cP = col('#ff9e2c'); // Phosphorus — radiant orange-gold
    const cMg = col('#42ff78'); // Magnesium Mg²⁺ — vivid chlorophyll emerald!
    const cBond = col('#cbd9ec');
    const cCoord = col('#74ff9e'); // Mg–N coordination bond

    // Crisp vertical center divider strictly inside lens
    S_AT.stick(V(0.02, -0.84, -0.04), V(0.02, 0.72, -0.04), 0.012, col('#6a82a4'), col('#6a82a4'));

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.024) => S_AT.stick(a, b, r, c1, c2);

    // === LEFT HALF: CHLOROPHYLL a PORPHYRIN RING + CENTRAL Mg²⁺ ION ===
    const mgC = V(-0.78, -0.02, 0.08);
    atom(mgC, 0.118, cMg); // Hero central Mg²⁺ ion!

    // Subtle glowing photo-excitation halo around Mg²⁺
    const mgHaloMat = reg(
      'cofactor_atoms',
      phys({
        color: '#6cff8e',
        emissive: '#32ff68',
        emissiveIntensity: 0.90,
        roughness: 0.16,
        transparent: true,
        opacity: 0.56,
        depthWrite: false,
      })
    );
    mgHaloMesh = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.020, 10, 32), mgHaloMat);
    mgHaloMesh.position.copy(mgC);
    grp.add(mgHaloMesh);

    // 4 Pyrrole rings arranged symmetrically around central Mg²⁺ (angles 45°, 135°, 225°, 315°)
    const rN = 0.25;
    const rAlpha = 0.42;
    const rBeta = 0.60;
    const rMeso = 0.46;
    const nPts: THREE.Vector3[] = [];
    const alphaPts: THREE.Vector3[] = [];
    for (let q = 0; q < 4; q++) {
      const ang = (q * Math.PI) / 2 + Math.PI / 4;
      const dir = V(Math.cos(ang), Math.sin(ang), 0);
      const tan = V(-Math.sin(ang), Math.cos(ang), 0);

      // Pyrrole Nitrogen coordinating Mg²⁺
      const pN = mgC.clone().addScaledVector(dir, rN);
      nPts.push(pN);
      atom(pN, 0.068, cN);
      bond(mgC, pN, cMg, cCoord, 0.020);

      // Two α-carbons & two β-carbons closing each 5-membered pyrrole ring
      const aL = mgC.clone().addScaledVector(dir, rAlpha * 0.86).addScaledVector(tan, +0.16);
      const aR = mgC.clone().addScaledVector(dir, rAlpha * 0.86).addScaledVector(tan, -0.16);
      const bL = mgC.clone().addScaledVector(dir, rBeta * 0.94).addScaledVector(tan, +0.11);
      const bR = mgC.clone().addScaledVector(dir, rBeta * 0.94).addScaledVector(tan, -0.11);
      alphaPts.push(aR, aL);

      [aL, aR, bL, bR].forEach(cp => atom(cp, 0.056, cC));
      bond(pN, aL, cN, cC, 0.022);
      bond(pN, aR, cN, cC, 0.022);
      bond(aL, bL, cC, cC, 0.022);
      bond(aR, bR, cC, cC, 0.022);
      bond(bL, bR, cC, cC, 0.024);
    }
    // 4 Methine (=CH–) bridges connecting adjacent pyrroles into the conjugated macrocycle!
    for (let q = 0; q < 4; q++) {
      const angM = (q * Math.PI) / 2;
      const pMeso = mgC.clone().add(V(Math.cos(angM) * rMeso, Math.sin(angM) * rMeso, 0));
      atom(pMeso, 0.056, cC);
      const aPrev = alphaPts[(q * 2 + 7) % 8];
      const aNext = alphaPts[(q * 2) % 8];
      bond(pMeso, aPrev, cC, cC, 0.022);
      bond(pMeso, aNext, cC, cC, 0.022);
    }
    // Carbonyl keto oxygen on ring V + short hydrophobic phytol chain stub descending cleanly inside ring
    const pKetoO = mgC.clone().add(V(0.56, -0.34, 0.02));
    atom(pKetoO, 0.064, cO);
    bond(mgC.clone().add(V(0.42, -0.26, 0)), pKetoO, cC, cO, 0.022);

    const phytPts = [
      mgC.clone().add(V(-0.34, -0.48, 0.02)),
      mgC.clone().add(V(-0.46, -0.66, 0.02)),
      mgC.clone().add(V(-0.30, -0.78, 0.02)),
    ];
    phytPts.forEach((pp, idx) => {
      atom(pp, 0.052, cC);
      if (idx > 0) bond(phytPts[idx - 1], pp, cC, cC, 0.020);
    });

    // === RIGHT HALF: ATP TRIPHOSPHATE CHAIN (α–β–γ) + γ-PHOSPHATE CLEAVAGE + H⁺ ===
    // Compact Adenine-Ribose anchor on the far right (strictly inside ring x <= +1.42!)
    const ribC = V(1.16, 0.14, 0.06);
    const adRing = [
      V(1.18, 0.42, 0.06),
      V(1.36, 0.34, 0.06),
      V(1.36, 0.14, 0.06),
      V(1.18, 0.04, 0.06),
      V(1.02, 0.22, 0.06),
    ];
    adRing.forEach((ap, i) => {
      atom(ap, i % 2 === 0 ? 0.058 : 0.054, i % 2 === 0 ? cN : cC);
      bond(ap, adRing[(i + 1) % adRing.length], i % 2 === 0 ? cN : cC, cC, 0.020);
    });

    // α, β, γ Phosphorus atoms stepping left across the right half (cleavage between β and γ!)
    const pAlpha = V(0.84, 0.04, 0.08);
    const pBeta = V(0.54, -0.10, 0.08);
    const pGamma = V(0.24, 0.06, 0.10); // Terminal γ-phosphate cleaving!

    const oRibA = V(1.00, 0.10, 0.07);
    const oAB = V(0.69, -0.02, 0.08);
    const oBG = V(0.39, -0.02, 0.09); // High-energy phosphoanhydride cleavage bridge!

    [pAlpha, pBeta, pGamma].forEach((pp, idx) => atom(pp, idx === 2 ? 0.102 : 0.092, cP));
    [oRibA, oAB, oBG].forEach(op => atom(op, 0.066, cO));

    // Terminal oxygens around α, β, γ phosphates
    const termOx: Array<[THREE.Vector3, THREE.Vector3]> = [
      [pAlpha, pAlpha.clone().add(V(0.0, 0.20, 0.04))],
      [pAlpha, pAlpha.clone().add(V(0.04, -0.20, 0.04))],
      [pBeta, pBeta.clone().add(V(-0.02, -0.22, 0.04))],
      [pBeta, pBeta.clone().add(V(0.02, 0.18, 0.05))],
      [pGamma, pGamma.clone().add(V(-0.04, 0.22, 0.04))],
      [pGamma, pGamma.clone().add(V(-0.18, -0.08, 0.04))],
      [pGamma, pGamma.clone().add(V(0.04, -0.18, 0.06))],
    ];
    termOx.forEach(([pp, op]) => {
      atom(op, 0.064, cO);
      bond(pp, op, cP, cO, 0.024);
    });
    bond(adRing[4], oRibA, cC, cO, 0.022);
    bond(oRibA, pAlpha, cO, cP, 0.026);
    bond(pAlpha, oAB, cP, cO, 0.026);
    bond(oAB, pBeta, cO, cP, 0.026);

    // Highlighted dashed high-energy β–γ cleavage bond!
    const cFlash = col('#ffe858');
    bond(pBeta, oBG, cP, cFlash, 0.020);
    bond(oBG, pGamma, cFlash, cP, 0.020);

    // Luminous H⁺ Proton ion paired cleanly below the γ-phosphate!
    const hIonPos = V(0.36, -0.56, 0.10);
    atom(hIonPos, 0.086, col('#ff72c2')); // Proton H+
    atom(V(0.84, -0.54, 0.08), 0.070, cO); // Hydrolytic H2O oxygen
    const hW1 = V(0.72, -0.64, 0.08);
    const hW2 = V(0.96, -0.64, 0.08);
    atom(hW1, 0.048, cH);
    atom(hW2, 0.048, cH);
    bond(V(0.84, -0.54, 0.08), hW1, cO, cH, 0.018);
    bond(V(0.84, -0.54, 0.08), hW2, cO, cH, 0.018);

    // Animated golden cleavage burst ring around the β–γ bond!
    const cleaveMat = reg(
      'cofactor_atoms',
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
    atpCleavageGlow = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.022, 10, 28), cleaveMat);
    atpCleavageGlow.position.copy(oBG);
    grp.add(atpCleavageGlow);

    S_AT.done();

    // Top Caption Plaque centered GENEROUSLY inside R_RING = 1.76 (y=+1.04, 1.98x0.38 -> corner r=1.57 << 1.72!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 104;
    const tg = topCv.getContext('2d');
    tg.clearRect(0, 0, 512, 104);
    tg.textAlign = 'center';
    tg.font = '700 23px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#6effa4';
    tg.fillText('CHLOROPHYLL a', 136, 38);
    tg.font = '600 18px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#c8ffe0';
    tg.fillText('Porphyrin + Mg²⁺', 136, 68);

    tg.font = '700 23px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffd85c';
    tg.fillText('ATP CLEAVAGE', 376, 38);
    tg.font = '600 18px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffebba';
    tg.fillText('γ-PO₄³⁻ + H⁺', 376, 68);

    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.98, 0.38),
      reg(
        'cofactor_atoms',
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
    topLbl.position.set(0, 1.04, 0.14);
    grp.add(topLbl);

    // Bottom CPK Atomic Legend Strip centered cleanly inside lower chord (y=-1.14, 1.76x0.24 -> corner r=1.54 << 1.72!)
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
      ['P', '#ff9e2c'],
      ['Mg', '#42ff78'],
    ];
    bg.font = '700 22px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 30 + idx * 78;
      bg.beginPath();
      bg.arc(bx, 36, 10.5, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#eef6ff';
      bg.fillText(sym, bx + 15, 37);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.76, 0.24),
      reg(
        'cofactor_atoms',
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
    botLbl.position.set(0, -1.14, 0.14);
    grp.add(botLbl);

    SITES.cofactor_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // 5. 6 Opaque-Discard 4x4 MOL Flow Species (Visible Through Wet Gel!)
  //    photons, glucose, o2_gas, co2_gas, h_protons, atp_nadh
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    photons: ['Sunlight photons (hν)', '#ffe95c', 0, 0.25],
    glucose: ['Glucose / Pyruvate', '#5cff9d', 1, 0.25],
    o2_gas: ['Oxygen gas (O₂)', '#56d8ff', 2, 0.23],
    co2_gas: ['CO₂ & H₂O return', '#b88aff', 3, 0.23],
    h_protons: ['Protons (H⁺ gradient)', '#ff66a8', 4, 0.21],
    atp_nadh: ['ATP & NADH / NADPH', '#ffb845', 5, 0.23],
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
      case 0: { // photons: radiant solar waveburst
        const rays = [];
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2;
          const r = i % 2 === 0 ? 0.38 : 0.19;
          rays.push([0.5 + Math.cos(a) * r, 0.5 + Math.sin(a) * r]);
        }
        drawPoly(rays, true, 0.09);
        drawBalls([[0.5, 0.5, 0.16]]);
        break;
      }
      case 1: { // glucose: crisp C6 hexose ring
        const hex = [];
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
          hex.push([0.5 + Math.cos(a) * 0.32, 0.5 + Math.sin(a) * 0.32]);
        }
        drawPoly(hex, true, 0.11);
        drawBalls([[0.5, 0.5, 0.12]]);
        break;
      }
      case 2: // o2_gas: diatomic O=O dumbbell
        drawPoly([[0.32, 0.50], [0.68, 0.50]], false, 0.12);
        drawBalls([[0.32, 0.50, 0.21], [0.68, 0.50, 0.21]]);
        break;
      case 3: // co2_gas: linear O=C=O triatomic
        drawPoly([[0.22, 0.50], [0.78, 0.50]], false, 0.10);
        drawBalls([[0.22, 0.50, 0.15], [0.50, 0.50, 0.18], [0.78, 0.50, 0.15]]);
        break;
      case 4: // h_protons: glowing H+ proton sphere with crisp plus
        drawBalls([[0.50, 0.50, 0.28]]);
        drawPoly([[0.35, 0.50], [0.65, 0.50]], false, 0.08);
        drawPoly([[0.50, 0.35], [0.50, 0.65]], false, 0.08);
        break;
      case 5: { // atp_nadh: high-energy 3-phosphate diamond burst
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

  function splash(at: THREE.Vector3, hex: string, s = 0.38) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.62, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 3.0, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop()!;
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.052, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  let arcsRef: {
    topArcCurve: THREE.CatmullRomCurve3;
    botArcCurve: THREE.CatmullRomCurve3;
    midBridgeCurve: THREE.CatmullRomCurve3;
  } | null = null;

  const STREAM_TIMERS = [
    // 1. Solar Photons hitting PSII (680 nm) & PSI (700 nm) — halts in dark_respiration!
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        if (mode === 'dark_respiration') return;
        const target = rand() < 0.55 ? PSII_POS : PSI_POS;
        const src = target.clone().add(V(rr(-0.55, 0.55), 2.15, rr(-0.1, 0.35)));
        const mid = target.clone().add(V(rr(-0.22, 0.22), 1.05, 0.20));
        const dst = target.clone().add(V(0, 0.24, 0.14));
        emitFlow('photons', [src, mid, dst], ['psii', 'psi', 'thylakoid', 'cofactor_atoms'], 1.9, () =>
          splash(dst, '#ffe95c', 0.42)
        );
      },
    },
    // 2. Hexagonal Glucose & Pyruvate flowing Calvin -> Top Arc / Cytosolic Glycolysis -> Mitochondrion!
    {
      rate: 2.3,
      acc: 0.5,
      go: () => {
        if (mode !== 'dark_respiration' && arcsRef && rand() < 0.48) {
          const pts = arcsRef.topArcCurve.getPoints(6).map(p => p.clone().add(V(0, rr(-0.12, 0.12), rr(-0.08, 0.10))));
          emitFlow('glucose', pts, ['rubisco', 'energy_carriers', 'glycolysis', 'mito_hull'], 3.5);
        } else {
          // Glycolysis stays actively pulsing in ALL 3 modes (sole 2 ATP lifeline in anaerobic_no_o2!)
          const src = mode === 'dark_respiration'
            ? GLYCO_C.clone().add(V(-1.35, rr(-0.25, 0.35), 0.15))
            : CALVIN_C.clone().add(V(0.85, rr(-0.2, 0.2), 0.12));
          const mid = GLYCO_C.clone().add(V(0, rr(-0.18, 0.18), 0.16));
          const dst = mode === 'anaerobic_no_o2'
            ? GLYCO_C.clone().add(V(0.85, rr(-0.35, 0.35), 0.22))
            : KREBS_C.clone().add(V(-0.45, rr(-0.2, 0.25), 0.14));
          emitFlow('glucose', [src, mid, dst], ['rubisco', 'glycolysis', 'krebs_cycle', 'energy_carriers'], 2.8, () =>
            splash(mid, '#5cff9d', 0.36)
          );
        }
      },
    },
    // 3. Oxygen (O2) evolved at PSII OEC arching over to Complex IV (halts mitochondrial intake in anaerobic_no_o2!)
    {
      rate: 2.2,
      acc: 0.4,
      go: () => {
        if (mode === 'anaerobic_no_o2') return;
        if (mode === 'dark_respiration') {
          // Ambient O2 directly entering Complex IV during dark respiration
          const src = CIV_POS.clone().add(V(rr(-0.5, 0.7), 1.65, 0.45));
          const dst = CIV_POS.clone().add(V(0, -0.18, 0.22));
          emitFlow('o2_gas', [src, src.clone().lerp(dst, 0.5), dst], ['complex_iv', 'energy_carriers', 'mito_hull'], 2.2, () =>
            splash(dst, '#56d8ff', 0.36)
          );
          return;
        }
        const p0 = PSII_POS.clone().add(V(0, -0.15, 0.24));
        const p1 = V(CHLORO_C.x + 1.0, 3.35, 0.45);
        const p2 = V(0.0, 4.22, 0.56);
        const p3 = V(MITO_C.x - 0.8, 3.25, 0.45);
        const p4 = CIV_POS.clone().add(V(0, -0.14, 0.22));
        emitFlow('o2_gas', [p0, p1, p2, p3, p4], ['psii', 'energy_carriers', 'complex_iv', 'mito_hull'], 3.8, () =>
          splash(p4, '#56d8ff', 0.38)
        );
      },
    },
    // 4. Carbon Dioxide (CO2) & H2O exhaled from Krebs matrix along Bottom Return Arc back to RuBisCO!
    {
      rate: 2.2,
      acc: 0.4,
      go: () => {
        if (mode === 'anaerobic_no_o2') {
          // Minimal anaerobic fermentation exhaust from cytosol
          const src = GLYCO_C.clone().add(V(0.1, -0.1, 0.16));
          const dst = V(-0.9, -1.6, 0.45);
          emitFlow('co2_gas', [src, src.clone().lerp(dst, 0.5), dst], ['glycolysis', 'energy_carriers'], 2.4);
          return;
        }
        const p0 = KREBS_C.clone().add(V(0, -0.35, 0.18));
        const p1 = V(1.85, -1.72, 0.56);
        const p2 = V(0.0, -1.96, 0.62);
        const p3 = V(-1.85, -1.72, 0.56);
        const p4 = CALVIN_C.clone().add(V(0, -0.25, 0.20));
        emitFlow('co2_gas', [p0, p1, p2, p3, p4], ['krebs_cycle', 'energy_carriers', 'rubisco', 'chloroplast_hull'], 3.8, () =>
          splash(p4, '#b88aff', 0.36)
        );
      },
    },
    // 5. Chemiosmotic H+ Protons pumped into Thylakoid Lumen & Mitochondrial IMS and rushing through ATP Synthases!
    {
      rate: 3.1,
      acc: 0.5,
      go: () => {
        // Chloroplast thylakoid lumen -> CF1CF0 proton rush (active when Sun is on)
        if (mode !== 'dark_respiration') {
          const p0 = B6F_POS.clone().add(V(0, 0.32, 0.18));
          const p1 = B6F_POS.clone().add(V(0, -0.34, 0.22));
          const p2 = CF_POS.clone().add(V(0, -0.34, 0.18));
          const p3 = CF_POS.clone().add(V(0, 0.44, 0.18));
          emitFlow('h_protons', [p0, p1, p2, p3], ['proton_grad', 'cyt_b6f', 'cf1cf0', 'thylakoid'], 2.5);
        }
        // Mitochondrial matrix -> IMS -> F1F0 proton rush (halts in anaerobic_no_o2!)
        if (mode !== 'anaerobic_no_o2') {
          const pump = rand() < 0.45 ? CI_POS : rand() < 0.78 ? CIII_POS : CIV_POS;
          const m0 = pump.clone().add(V(0, -0.34, 0.18));
          const m1 = pump.clone().add(V(0, +0.46, 0.22));
          const m2 = ATPS_POS.clone().add(V(0, +0.44, 0.18));
          const m3 = ATPS_POS.clone().add(V(0, -0.44, 0.18));
          emitFlow('h_protons', [m0, m1, m2, m3], ['proton_grad', 'complex_i', 'complex_iii', 'complex_iv', 'f1f0_atps'], 2.5);
        }
      },
    },
    // 6. ATP & NADH/NADPH Energy Carriers bursting from CF1CF0, Glycolysis, Krebs & F1F0!
    {
      rate: 3.0,
      acc: 0.5,
      go: () => {
        // Glycolysis 2 net ATP burst — ALWAYS active across all 3 modes!
        const g0 = GLYCO_C.clone().add(V(rr(-0.2, 0.2), 0.18, 0.22));
        const g1 = g0.clone().add(V(rr(-0.5, 0.5), 0.92, 0.24));
        emitFlow('atp_nadh', [g0, g0.clone().lerp(g1, 0.5).add(V(0.12, 0.1, 0)), g1], ['glycolysis', 'energy_carriers'], 2.1, () =>
          splash(g0, '#ffb845', 0.34)
        );
        // Chloroplast CF1CF0 ATP + PSI NADPH -> Calvin Cycle (when Sun is on)
        if (mode !== 'dark_respiration') {
          const c0 = rand() < 0.5 ? CF_POS.clone().add(V(0, 0.42, 0.16)) : PSI_POS.clone().add(V(0, 0.42, 0.16));
          const c1 = CALVIN_C.clone().add(V(rr(-0.3, 0.4), 0.45, 0.22));
          emitFlow('atp_nadh', [c0, c0.clone().lerp(c1, 0.5).add(V(0.15, 0.28, 0.14)), c1], ['cf1cf0', 'psi', 'rubisco', 'energy_carriers'], 2.3);
        }
        // Mitochondrial OXPHOS ~30-32 ATP burst + Krebs NADH -> Complex I (halts in anaerobic_no_o2!)
        if (mode !== 'anaerobic_no_o2') {
          for (let n = 0; n < 2; n++) {
            const a0 = ATPS_POS.clone().add(V(rr(-0.15, 0.15), -0.38, 0.22));
            const a1 = a0.clone().add(V(rr(-0.65, 0.55), -0.95, 0.32));
            emitFlow('atp_nadh', [a0, a0.clone().lerp(a1, 0.5).add(V(0.14, 0, 0.1)), a1], ['f1f0_atps', 'energy_carriers', 'cofactor_atoms'], 2.1, () =>
              splash(a0, '#ffd452', 0.42)
            );
          }
          const k0 = KREBS_C.clone().add(V(0, 0.42, 0.16));
          const k1 = rand() < 0.72 ? CI_POS.clone().add(V(0, -0.22, 0.18)) : CII_POS.clone().add(V(0, -0.22, 0.18));
          emitFlow('atp_nadh', [k0, k0.clone().lerp(k1, 0.5).add(V(-0.12, 0.14, 0.12)), k1], ['krebs_cycle', 'complex_i', 'complex_ii', 'energy_carriers'], 2.0);
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
      q.x += a * Math.sin(w * 5.1 + p.ph);
      q.y += a * Math.cos(w * 4.3 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.7 + p.ph * 1.9);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.50 : 0.50) : 1);
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
    if (counterSyncAcc >= 0.22) {
      counterSyncAcc = 0;
      syncFlowCounterUI();
    }
  }

  // -------------------------------------------------------------------------
  // Live Bioenergetic Animation (Spinning Rotors, Z-Scheme & ETC Sparks, Rings)
  // -------------------------------------------------------------------------
  function updateBioAnimation(dt: number) {
    animClock += dt;
    const sunOn = mode !== 'dark_respiration';
    const o2On = mode !== 'anaerobic_no_o2';

    // 1. Chloroplast CF1CF0 rotary turbine (spins fast in sunlight, stalls in dark)
    const cfSpeed = sunOn ? 2.6 : 0.0;
    cfRotors.forEach(r => { r.rotation.y += dt * cfSpeed; });

    // 2. Mitochondrial F1F0 rotary turbine (spins fast with O2, halts cleanly in anaerobic_no_o2!)
    const mitoSpeed = o2On ? 3.2 : 0.0;
    mitoRotors.forEach(r => { r.rotation.y += dt * mitoSpeed; });

    // 3. Z-scheme electron sparks & solar photon beam shimmer
    zSparks.forEach(sp => {
      sp.mesh.visible = sunOn;
      if (sunOn) {
        const u = (animClock * 0.42 + sp.phase) % 1;
        sp.mesh.position.copy(sp.curve.getPointAt(u));
      }
    });
    photonBeams.forEach((bm, idx) => {
      bm.visible = sunOn;
      if (sunOn) {
        const pulse = 0.88 + 0.18 * Math.sin(animClock * 4.5 + idx * 1.4);
        bm.scale.set(pulse, 1, pulse);
      }
    });

    // 4. Mitochondrial ETC electron sparks (halt & vanish in anaerobic_no_o2!)
    etcSparks.forEach(sp => {
      sp.mesh.visible = o2On;
      if (o2On) {
        const u = (animClock * 0.48 + sp.phase) % 1;
        sp.mesh.position.copy(sp.curve.getPointAt(u));
      }
    });

    // 5. Gentle living rotation on Calvin & Krebs rings + pulsing Glycolysis & Atomic inset halos
    if (calvinRingGroup && sunOn) calvinRingGroup.rotation.z = -0.05 + 0.16 * Math.sin(animClock * 0.55);
    if (krebsRingGroup && o2On) krebsRingGroup.rotation.z = 0.05 - 0.16 * Math.sin(animClock * 0.62);
    if (glycoRingGroup) {
      const gp = mode === 'anaerobic_no_o2' ? 1 + 0.065 * Math.sin(animClock * 4.2) : 1 + 0.025 * Math.sin(animClock * 1.8);
      glycoRingGroup.scale.setScalar(gp);
    }
    if (anaerobicPulseGroup.visible) {
      const p = 1 + 0.08 * Math.sin(animClock * 5.0);
      anaerobicPulseGroup.children.forEach(c => c.scale.set(p, p, 1));
    }
    if (atpCleavageGlow) {
      const p = 1 + 0.14 * Math.sin(animClock * 3.8);
      atpCleavageGlow.scale.setScalar(p);
    }
    if (mgHaloMesh) {
      const p = sunOn ? 1 + 0.12 * Math.sin(animClock * 4.2) : 0.92;
      mgHaloMesh.scale.setScalar(p);
    }
  }

  // -------------------------------------------------------------------------
  // Live 3-State Bioenergetic Mode Toggle (#modeBtn + window.__cell.setMode)
  //   - 'coupled_aerobic':  Sun + O2 (~32 ATP)
  //   - 'anaerobic_no_o2':  No O2 (2 ATP Glycolysis)
  //   - 'dark_respiration': Dark (Respiration Only)
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');
  const atpCard = document.getElementById('atpCard');
  const atpYieldEl = document.getElementById('atpYield');
  const atpSubEl = document.getElementById('atpSub');

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;

    const sunOn = mode !== 'dark_respiration';
    const o2On = mode !== 'anaerobic_no_o2';

    // Chloroplast / Photosynthesis lighting & materials
    photonBeamsGroup.visible = sunOn;
    zElectronGroup.visible = sunOn;
    sunLamp.intensity = sunOn ? 7.5 : 0.3;
    chloroLamp.intensity = sunOn ? 9.8 : 2.8;
    if (modeRefs.psiiMat) modeRefs.psiiMat.emissiveIntensity = sunOn ? 0.20 : 0.04;
    if (modeRefs.b6fMat) modeRefs.b6fMat.emissiveIntensity = sunOn ? 0.22 : 0.04;
    if (modeRefs.psiMat) modeRefs.psiMat.emissiveIntensity = sunOn ? 0.22 : 0.04;
    if (modeRefs.cfMat) modeRefs.cfMat.emissiveIntensity = sunOn ? 0.24 : 0.04;
    if (modeRefs.chloroProtonHaloMat) {
      modeRefs.chloroProtonHaloMat.opacity = sunOn ? 0.14 : 0.02;
      modeRefs.chloroProtonHaloMat.emissiveIntensity = sunOn ? 0.36 : 0.04;
    }
    if (modeRefs.chloroProtonBeadMat) {
      modeRefs.chloroProtonBeadMat.opacity = sunOn ? 0.96 : 0.18;
      modeRefs.chloroProtonBeadMat.emissiveIntensity = sunOn ? 0.62 : 0.04;
    }

    // Mitochondrion / Aerobic OXPHOS vs Anaerobic Glycolysis lighting & materials
    etcElectronGroup.visible = o2On;
    anaerobicPulseGroup.visible = !o2On;
    mitoLamp.intensity = o2On ? 10.2 : 3.2;
    if (modeRefs.ciMat) modeRefs.ciMat.emissiveIntensity = o2On ? 0.24 : 0.03;
    if (modeRefs.ciiMat) modeRefs.ciiMat.emissiveIntensity = o2On ? 0.24 : 0.03;
    if (modeRefs.ciiiMat) modeRefs.ciiiMat.emissiveIntensity = o2On ? 0.24 : 0.03;
    if (modeRefs.civMat) modeRefs.civMat.emissiveIntensity = o2On ? 0.26 : 0.02;
    if (modeRefs.o2PocketMat) {
      modeRefs.o2PocketMat.opacity = o2On ? 0.84 : 0.05;
      modeRefs.o2PocketMat.emissiveIntensity = o2On ? 0.88 : 0.02;
    }
    if (modeRefs.f1f0Mat) modeRefs.f1f0Mat.emissiveIntensity = o2On ? 0.28 : 0.04;
    if (modeRefs.krebsRingMat) modeRefs.krebsRingMat.emissiveIntensity = o2On ? 0.44 : 0.06;
    if (modeRefs.mitoProtonHaloMat) {
      modeRefs.mitoProtonHaloMat.opacity = o2On ? 0.16 : 0.02;
      modeRefs.mitoProtonHaloMat.emissiveIntensity = o2On ? 0.42 : 0.04;
    }
    if (modeRefs.mitoProtonBeadMat) {
      modeRefs.mitoProtonBeadMat.opacity = o2On ? 0.96 : 0.16;
      modeRefs.mitoProtonBeadMat.emissiveIntensity = o2On ? 0.66 : 0.03;
    }
    if (modeRefs.glycoGateMat) modeRefs.glycoGateMat.emissiveIntensity = !o2On ? 0.88 : 0.42;

    // Immediately flush halted-pathway particles so anaerobic / dark mode changes read crisply on frame 1!
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k];
      const drop =
        (!o2On && (p.type === 'o2_gas' || (p.tags.includes('f1f0_atps') || p.tags.includes('complex_i') || p.tags.includes('complex_iv')))) ||
        (!sunOn && (p.type === 'photons' || p.tags.includes('psii') || p.tags.includes('cf1cf0')));
      if (drop) {
        live[k] = live[live.length - 1];
        live.pop();
        free.push(p.i);
        fSize[p.i] = 0;
      }
    }
    flowGeo.attributes.size.needsUpdate = true;

    // Update live HUD & ATP yield readouts
    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.remove('anaerobic_no_o2', 'dark_respiration');
      if (mode !== 'coupled_aerobic') modeBtn.classList.add(mode);
    }
    if (atpCard) {
      atpCard.classList.remove('anaerobic_no_o2', 'dark_respiration');
      if (mode !== 'coupled_aerobic') atpCard.classList.add(mode);
    }
    if (mode === 'coupled_aerobic') {
      if (atpYieldEl) atpYieldEl.textContent = '~30–32 ATP / Glucose (Aerobic)';
      if (atpSubEl) atpSubEl.textContent = 'Sun + O₂ active · Z-scheme & OXPHOS full speed';
      if (subEl) subEl.textContent = 'Coupled Chloroplast ↔ Mitochondrion loop · 6 CO₂ + 6 H₂O + Sun ⇌ C₆H₁₂O₆ + 6 O₂ · ~30–32 ATP / Glucose (10 real PDBs)';
    } else if (mode === 'anaerobic_no_o2') {
      if (atpYieldEl) atpYieldEl.textContent = '2 ATP / Glucose (Anaerobic Fermentation)';
      if (atpSubEl) atpSubEl.textContent = 'O₂ off · Complexes I–IV & F₁F₀ halted · Glycolysis pulsing';
      if (subEl) subEl.textContent = 'Anaerobic mode (No O₂) · Complexes I–IV & F₁F₀ rotor halted · H⁺ gradient dimmed · 2 ATP / Glucose (Anaerobic Fermentation)';
    } else {
      if (atpYieldEl) atpYieldEl.textContent = '~30–32 ATP / Stored Glucose (Dark)';
      if (atpSubEl) atpSubEl.textContent = 'Photons & PSII/PSI dimmed · Mitochondrial OXPHOS active';
      if (subEl) subEl.textContent = 'Dark Respiration mode · Photons & Z-scheme dimmed · Mitochondrion continues burning stored Glucose (~30–32 ATP)';
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
    ['P', '#ff9e2c'],
    ['Mg', '#42ff78'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:#38e89e"></span>Photosynthesis <span class="bar" style="background:#ff6476;margin-left:5px"></span>Respiration</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Coupled Bioenergetics: Plant chloroplasts capture sunlight to convert CO₂ + H₂O into Glucose + O₂; animal mitochondria oxidize Glucose + O₂ via Glycolysis, Krebs & Complexes I–IV to spin F₁F₀ ATP synthase (~30–32 ATP).';
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
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#7ee8ff');

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
    a.download = `bioenergetics-${mode}-realistic.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.0, -0.55, 0.0])) };
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.0, -0.55, 0.0);
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

  // Exact tag coordinates for all 18 parts across all 6 views
  const POINTS: Record<string, Record<string, THREE.Vector3>> = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base: Record<string, THREE.Vector3> = {
      chloroplast_hull: CHLORO_C.clone().add(V(-2.55, 1.38, 0.26)),
      thylakoid: V(-3.92, THY_Y - 0.14, THY_Z + 0.30),
      psii: PSII_POS.clone(),
      cyt_b6f: B6F_POS.clone(),
      psi: PSI_POS.clone(),
      cf1cf0: CF_POS.clone(),
      rubisco: CALVIN_C.clone(),
      glycolysis: GLYCO_C.clone(),
      mito_hull: MITO_C.clone().add(V(2.55, 1.35, 0.26)),
      krebs_cycle: KREBS_C.clone(),
      complex_i: CI_POS.clone(),
      complex_ii: CII_POS.clone(),
      complex_iii: CIII_POS.clone(),
      complex_iv: CIV_POS.clone(),
      f1f0_atps: ATPS_POS.clone(),
      proton_grad: V(4.45, ETC_Y + 0.52, ETC_Z + 0.24),
      energy_carriers: V(0.0, 4.18, 0.50),
      cofactor_atoms: ATOM_C.clone(),
    };
    let P = { ...base };
    if (vName === 'light_reactions') {
      P = {
        ...base,
        proton_grad: V(-4.35, THY_Y - 0.34, THY_Z + 0.24),
        energy_carriers: PSI_POS.clone().add(V(0.42, 0.48, 0.20)),
      };
    } else if (vName === 'calvin_stroma') {
      P = {
        ...base,
        rubisco: CALVIN_C.clone(),
        energy_carriers: CALVIN_C.clone().add(V(1.06, 0.16, 0.18)),
        proton_grad: V(-4.35, THY_Y - 0.34, THY_Z + 0.24),
      };
    } else if (vName === 'krebs_matrix') {
      P = {
        ...base,
        glycolysis: GLYCO_C.clone(),
        krebs_cycle: KREBS_C.clone(),
        energy_carriers: V(1.65, 0.42, 0.52),
      };
    } else if (vName === 'mito_etc') {
      P = {
        ...base,
        proton_grad: V(4.45, ETC_Y + 0.52, ETC_Z + 0.24),
        energy_carriers: ATPS_POS.clone().add(V(0.0, -0.58, 0.20)),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        cofactor_atoms: ATOM_C.clone(),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS: Record<string, { c: THREE.Vector3; r: number; dir: THREE.Vector3 } | null> = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD: Record<string, number> = {
      chloroplast_hull: 3.4, thylakoid: 2.3, psii: 1.5, cyt_b6f: 1.5, psi: 1.5, cf1cf0: 1.6,
      rubisco: 2.0, glycolysis: 2.0, mito_hull: 3.4, krebs_cycle: 2.0,
      complex_i: 1.5, complex_ii: 1.4, complex_iii: 1.5, complex_iv: 1.5,
      f1f0_atps: 1.6, proton_grad: 2.2, energy_carriers: 3.6, cofactor_atoms: 2.1,
    };
    const DIRS: Record<string, THREE.Vector3> = {
      chloroplast_hull: V(-0.14, 0.14, 0.98).normalize(),
      mito_hull: V(0.14, 0.14, 0.98).normalize(),
      cofactor_atoms: V(0.0, 0.02, 1.0).normalize(),
    };
    const dir = DIRS[k] ?? V(0.06, 0.12, 0.99).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.0, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    chloroplast_hull: ['thylakoid', 'psii', 'cyt_b6f', 'psi', 'cf1cf0', 'rubisco'],
    thylakoid: ['psii', 'cyt_b6f', 'psi', 'cf1cf0', 'proton_grad'],
    psii: ['thylakoid', 'cyt_b6f', 'proton_grad'],
    cyt_b6f: ['thylakoid', 'psii', 'psi', 'proton_grad'],
    psi: ['thylakoid', 'cyt_b6f', 'cf1cf0', 'energy_carriers'],
    cf1cf0: ['thylakoid', 'proton_grad', 'rubisco'],
    rubisco: ['chloroplast_hull', 'energy_carriers', 'glycolysis'],
    glycolysis: ['energy_carriers', 'krebs_cycle'],
    mito_hull: ['krebs_cycle', 'complex_i', 'complex_ii', 'complex_iii', 'complex_iv', 'f1f0_atps', 'proton_grad'],
    krebs_cycle: ['glycolysis', 'complex_i', 'complex_ii', 'energy_carriers'],
    complex_i: ['complex_ii', 'complex_iii', 'proton_grad'],
    complex_ii: ['krebs_cycle', 'complex_iii'],
    complex_iii: ['complex_i', 'complex_iv', 'proton_grad'],
    complex_iv: ['complex_iii', 'proton_grad', 'f1f0_atps'],
    f1f0_atps: ['proton_grad', 'complex_iv', 'energy_carriers'],
    proton_grad: ['thylakoid', 'cf1cf0', 'complex_i', 'complex_iii', 'complex_iv', 'f1f0_atps'],
    energy_carriers: ['rubisco', 'glycolysis', 'krebs_cycle', 'f1f0_atps'],
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
      cell.rotation.y = 0.055 * Math.sin(sway * 0.11);
      updateBioAnimation(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
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
    buildChloroplastChamber(T);
    arcsRef = buildGlycolysisAndCoupledArcs();
    buildMitochondrionChamber(T);
    buildAtomicCofactorInset();
    updateBioAnimation(0.01);
    // Warm up live streams so all 6 bioenergetic species are actively flowing on frame 1
    for (let s = 0; s < 140; s++) updateFlows(0.05);
    syncFlowCounterUI();
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('coupled_aerobic', true);
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
    get atpYield() { return mode === 'anaerobic_no_o2' ? 2 : 32; },
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
        updateBioAnimation(dt);
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
