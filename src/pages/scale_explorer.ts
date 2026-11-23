// @ts-nocheck
import * as THREE from 'three';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  capStrip,
  sweepGeo,
  shellGeo,
  blobGeo,
  cylM,
  atS,
  instanced,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  makeProteinBumpTexture,
  buildPdbSurfaceGeo,
  makeSculptedMesh,
  makeMolBatch,
  BASE,
  PAIR,
  BACKBONE,
  MRNA,
  SILVER,
  col,
} from '../index.js';

runBiologyApp(20261109, ({ random, geometry, dna, rna }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const rand = random.rand;
  const fbm = random.fbm;
  const rr = (a, b) => a + (b - a) * rand();
  const V = geometry.V;
  const UP = geometry.UP;
  const across = geometry.across;
  const randDir = random.randDir;

  // -------------------------------------------------------------------
  // Cinema dark-field WebGL2 stage (PMREM reflections, 2048 soft shadows,
  // backlit SSS, ACESFilmic tone mapping, bloom + optical lens pass)
  // -------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 520,
    camPos: [0, 11.2, 88.0],
    target: [0, -0.30, -1.2],
    bgInner: '#1b2844',
    bgMid: '#09101f',
    bgOuter: '#020409',
    keyColor: '#fff2e2',
    keyIntensity: 3.05,
    rimColor: '#8dc4ff',
    rimIntensity: 1.65,
    lampColor: '#ffb986',
    lampIntensity: 20,
    lampPos: [-12.0, 3.2, 7.5],
    bloomStrength: 0.27,
    bloomRadius: 0.54,
    bloomThreshold: 0.85,
    exposure: 0.98,
    bokehCount: 260,
    bokehColor: '#88b9ff',
    rand,
  });

  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp, CUT } = studio;
  key.position.set(16, 28, 26);
  Object.assign(key.shadow.camera, { left: -29, right: 29, top: 15, bottom: -15, near: 1, far: 115 });
  key.shadow.camera.updateProjectionMatrix();

  // Complementary studio wing lamps so all 11 specimens across the 44-unit arc sparkle
  const lampMid = new THREE.PointLight('#ffd0a6', 18, 38, 1.8);
  lampMid.position.set(1.5, 2.8, 6.2);
  const lampMol = new THREE.PointLight('#8ed8ff', 20, 38, 1.8);
  lampMol.position.set(15.5, 2.4, 8.8);
  const underFill = new THREE.DirectionalLight('#6c9cff', 0.52);
  underFill.position.set(0, -14, 10);
  scene.add(lampMid, lampMol, underFill);

  const cell = new THREE.Group();
  scene.add(cell);

  // Per-specimen local quarter-wedge cutaway planes (front-right +x/+z removed around each specimen center)
  let cutOn = true;
  const localCutPairs = [];
  function makeLocalCut(center) {
    const locals = [
      new THREE.Plane(V(-1, 0, 0), center.x),
      new THREE.Plane(V(0, 0, -1), center.z),
    ];
    const worlds = locals.map(p => p.clone());
    localCutPairs.push({ locals, worlds });
    return {
      planes: worlds,
      clip: { clippingPlanes: worlds, clipIntersection: true, clipShadows: true },
    };
  }
  function updateCut() {
    studio.updateCut(cell, cutOn);
    for (let i = 0; i < localCutPairs.length; i++) {
      const { locals, worlds } = localCutPairs[i];
      for (let j = 0; j < 2; j++) {
        worlds[j].copy(locals[j]);
        if (!cutOn) worlds[j].constant = 1e4;
        worlds[j].applyMatrix4(cell.matrixWorld);
      }
    }
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.9);
  const bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };
  const protBump = makeProteinBumpTexture(256);

  // -------------------------------------------------------------------
  // Calibrated 11 Powers-of-10 Scale Stops (100 µm -> 0.1 nm / 1 Å)
  // -------------------------------------------------------------------
  const PARTS = [
    ['plant_100um', '100 µm · Plant cell & human oocyte', '#6ee07a'],
    ['animal_20um', '20 µm · Animal cell', '#8ec8ff'],
    ['yeast_5um', '5 µm · Budding yeast & nucleus', '#f0c478'],
    ['ecoli_2um', '2 µm · Bacterium (E. coli)', '#5cd9a6'],
    ['myco_300nm', '300 nm · Mycoplasma genitalium', '#f59d7a'],
    ['virus_100nm', '100 nm · SARS-CoV-2 & HIV-1 virions', '#ff6b8b'],
    ['ribo_25nm', '25 nm · 70S & 80S Ribosomes', '#ffd166'],
    ['enzyme_10nm', '10 nm · Protein complexes (ATP synthase & RuBisCO)', '#ff9f43'],
    ['dna_2nm', '2 nm · B-DNA double helix', '#4d8cff'],
    ['monomer_1nm', '0.5–1 nm · Biomolecule monomers', '#c084fc'],
    ['atom_01nm', '0.1–0.3 nm · Biogenic atoms (H, C, N, O, P, Mg)', '#68e8ff'],
  ];

  const INFO = {
    plant_100um: ['Cellulose wall, central vacuole, grana chloroplasts & oocyte (~100 µm)', 'Marks the naked-eye resolution threshold (10⁻⁴ m · 1,000,000× H atom)'],
    animal_20um: ['Cutaway lipid bilayer, purple nucleus, mitochondria, Golgi & Rough ER', 'Typical mammalian somatic cell (20 µm · 5× narrower than a plant cell)'],
    yeast_5um: ['Chitin/β-glucan wall, emerging daughter bud, cyan septin neck & nucleus', 'Unicellular eukaryote at 5 µm — same width as an animal cell nucleus'],
    ecoli_2um: ['Gram-negative 3-layer envelope, supercoiled nucleoid, 70S cloud & flagella', 'Prokaryotic rod (2 µm · 10× smaller than an animal cell, 1,000× less volume)'],
    myco_300nm: ['Wall-less cholesterol-stiffened flask, Nap adhesin crown & core rod', 'Smallest self-replicating cell (300 nm · 580 kbp genome, near optical limit)'],
    virus_100nm: ['SARS-CoV-2 spiked envelope + RNA beside HIV-1 fullerene cone capsid', 'Sub-diffraction obligate parasites (100 nm · 1,000× narrower than a plant cell)'],
    ribo_25nm: ['Cryo-EM 80S (60S+40S) & 70S (50S+30S) subunits threading mRNA & peptide', 'Universal RNA-protein translation machines (21–28 nm)'],
    enzyme_10nm: ['Rotary F₁F₀ ATP synthase turbine alongside 16-subunit RuBisCO barrel', 'Catalytic nanomachines (~10 nm · 10⁻⁸ m) powering respiration & photosynthesis'],
    dna_2nm: ['Antiparallel B-form strands offset 140° with A–T & G–C rungs (PDB 1BNA)', 'Universal genetic code double helix (2.0 nm wide · 3.4 nm helical pitch)'],
    monomer_1nm: ['Glucose hexose ring, kinked phospholipid, L-alanine & dAMP nucleotide', 'The four chemical building blocks of life (0.5–1.0 nm / 5–10 Å)'],
    atom_01nm: ['CPK nuclei & quantum electron shells for H, C, N, O, P & Mg²⁺', 'Shared atomic foundation of every biomolecule (0.1–0.3 nm / 1–3 Å)'],
  };

  // True biological dimensions (nm), logarithmic exponents, short ticks, and 3D gallery arc coordinates
  const STOPS = [
    { key: 'plant_100um', nm: 100000, exp: -4.00, tick: '100µm', label: '100 µm · 10⁻⁴ m (10⁶ Å)', visR: 1.62, focusR: 2.05 },
    { key: 'animal_20um', nm: 20000,  exp: -4.70, tick: '20µm',  label: '20 µm · 2×10⁻⁵ m (2×10⁵ Å)', visR: 1.56, focusR: 1.98 },
    { key: 'yeast_5um',   nm: 5000,   exp: -5.30, tick: '5µm',   label: '5 µm · 5×10⁻⁶ m (5×10⁴ Å)', visR: 1.50, focusR: 1.95 },
    { key: 'ecoli_2um',   nm: 2000,   exp: -5.70, tick: '2µm',   label: '2 µm · 2×10⁻⁶ m (2×10⁴ Å)', visR: 1.48, focusR: 2.05 },
    { key: 'myco_300nm',  nm: 300,    exp: -6.52, tick: '300nm', label: '300 nm · 3×10⁻⁷ m (3,000 Å)', visR: 1.44, focusR: 1.92 },
    { key: 'virus_100nm', nm: 100,    exp: -7.00, tick: '100nm', label: '100 nm · 10⁻⁷ m (1,000 Å)', visR: 1.48, focusR: 2.05 },
    { key: 'ribo_25nm',   nm: 25,     exp: -7.60, tick: '25nm',  label: '25 nm · 2.5×10⁻⁸ m (250 Å)', visR: 1.42, focusR: 1.90 },
    { key: 'enzyme_10nm', nm: 10,     exp: -8.00, tick: '10nm',  label: '10 nm · 10⁻⁸ m (100 Å)', visR: 1.46, focusR: 2.00 },
    { key: 'dna_2nm',     nm: 2,      exp: -8.70, tick: '2nm',   label: '2 nm · 2×10⁻⁹ m (20 Å)', visR: 1.46, focusR: 1.95 },
    { key: 'monomer_1nm', nm: 0.8,    exp: -9.10, tick: '1nm',   label: '0.5–1 nm · 10⁻⁹ m (5–10 Å)', visR: 1.42, focusR: 1.95 },
    { key: 'atom_01nm',   nm: 0.15,   exp: -9.82, tick: '0.1nm', label: '0.1–0.3 nm · 10⁻¹⁰ m (1–3 Å)', visR: 1.42, focusR: 1.95 },
  ].map((st, idx) => {
    const s = idx - 5;
    return {
      ...st,
      idx,
      pos: V(s * 3.95, 1.15 - idx * 0.23, -2.8 + s * s * 0.18),
      color: PARTS[idx][2],
    };
  });
  const STOP_BY_KEY = Object.fromEntries(STOPS.map(s => [s.key, s]));

  // -------------------------------------------------------------------
  // Material & Registry System (exact 11 keys in REG, wet-gel look switcher)
  // -------------------------------------------------------------------
  const REG = {};
  const reg = (k, m) => {
    const r = REG[k] ??= { mats: [], imp: [] };
    (m.isShaderMaterial ? r.imp : r.mats).push(m);
    return m;
  };
  const shells = [];
  const LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  let placed = 0;

  function physMat(k, opts = {}) {
    const m = new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.82, ...opts });
    if (opts.sssColor) applyBacklitSSS(m, opts.sssColor, opts.sssIntensity ?? 0.22, opts.sssPower ?? 2.6);
    return reg(k, m);
  }

  function gelShellMat(k, clip, solidHex, gelHex, attenHex, opts = {}) {
    const m = makeCinemaMembraneMat(clip, opts.normalMap ?? bump(opts.rx ?? 5, opts.ry ?? 5), {
      color: gelHex,
      attenuationColor: attenHex,
      attenuationDistance: opts.atten ?? 1.8,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.24,
      iridescence: opts.iridescence ?? 0.42,
      thickness: opts.thickness ?? 0.55,
      roughness: opts.roughness ?? 0.13,
      sheenColor: opts.sheenColor ?? '#ffe6f6',
      normalScale: opts.normalScale ?? 0.22,
    });
    if (opts.clipShadows !== undefined) m.clipShadows = opts.clipShadows;
    if (opts.envMapIntensity !== undefined) m.envMapIntensity = opts.envMapIntensity;
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
      m.opacity = see ? 0.45 : 1;
      m.depthWrite = !see;
      m.side = gel ? THREE.FrontSide : THREE.DoubleSide;
      m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid);
      m.needsUpdate = true;
    });
  }

  function protMat(k, clip = null, extra = {}) {
    const m = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.40,
      metalness: 0.03,
      clearcoat: 0.26,
      clearcoatRoughness: 0.34,
      sheen: 0.36,
      sheenColor: '#fff5f8',
      normalMap: protBump,
      normalScale: new THREE.Vector2(0.34, 0.34),
      envMapIntensity: 0.78,
      side: THREE.DoubleSide,
      ...(clip ? clip : {}),
      ...extra,
    });
    if (extra.sssColor) applyBacklitSSS(m, extra.sssColor, extra.sssIntensity ?? 0.18, 2.8);
    return reg(k, m);
  }

  function synthCryoGeo(beads, colors, nmScale = 0.055, maxDim = 26, scale = 1) {
    const n = beads.length;
    const xyz = new Int16Array(n * 3);
    const kind = new Uint8Array(n);
    const rad = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const [x, y, z, r = 1.6, grp = 0] = beads[i];
      xyz[i * 3] = Math.round(x * 100);
      xyz[i * 3 + 1] = Math.round(y * 100);
      xyz[i * 3 + 2] = Math.round(z * 100);
      kind[i] = grp << 2;
      rad[i] = Math.max(5, Math.min(255, Math.round(r / 0.062)));
    }
    const cols = colors.map(col);
    return buildPdbSurfaceGeo({ n, xyz, kind, rad }, { nm: nmScale, scale, maxDim, colorFn: g => cols[g % cols.length] });
  }

  const impMats = [];
  function impostorMat(k, cutPlanes = CUT, clip = false) {
    const m = makeCinemaImpostorMat(cutPlanes, clip);
    impMats.push(m);
    return reg(k, m);
  }
  function stickMat(k, cutPlanes = CUT, clip = false) {
    const m = makeCinemaStickMat(cutPlanes, clip);
    impMats.push(m);
    return reg(k, m);
  }

  const grown = a => { const b = new Float32Array(a.length * 2); b.set(a); return b; };
  function balls(k, parent = cell, cutPlanes = CUT, clip = false) {
    let n = 0, cap = 1 << 12;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 11;
    let A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap);
    let C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
    return {
      stick(a, b, r, c1, c2) {
        if (m === scap) { scap *= 2; A = grown(A); B = grown(B); R = grown(R); C1 = grown(C1); C2 = grown(C2); }
        const i = m * 3;
        A[i] = a.x; A[i + 1] = a.y; A[i + 2] = a.z;
        B[i] = b.x; B[i + 1] = b.y; B[i + 2] = b.z;
        C1[i] = c1.r; C1[i + 1] = c1.g; C1[i + 2] = c1.b;
        C2[i] = c2.r; C2[i + 1] = c2.g; C2[i + 2] = c2.b;
        R[m++] = r;
      },
      add(p, s, c) {
        if (n === cap) { cap *= 2; pos = grown(pos); sz = grown(sz); cl = grown(cl); }
        const i = n * 3;
        pos[i] = p.x; pos[i + 1] = p.y; pos[i + 2] = p.z;
        cl[i] = c.r; cl[i + 1] = c.g; cl[i + 2] = c.b;
        sz[n++] = s;
      },
      done() {
        if (n) {
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.BufferAttribute(pos.slice(0, n * 3), 3));
          g.setAttribute('size', new THREE.BufferAttribute(sz.slice(0, n), 1));
          g.setAttribute('icol', new THREE.BufferAttribute(cl.slice(0, n * 3), 3));
          const pts = new THREE.Points(g, impostorMat(k, cutPlanes, clip));
          pts.frustumCulled = false;
          parent.add(pts);
        }
        if (m) {
          const sg = new THREE.InstancedBufferGeometry();
          sg.setIndex([0, 1, 2, 2, 1, 3]);
          sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
          sg.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 0, 1, 1, 1]), 2));
          [['aA', A, 3], ['aB', B, 3], ['aR', R, 1], ['aC1', C1, 3], ['aC2', C2, 3]].forEach(([nm, arr, d]) => {
            sg.setAttribute(nm, new THREE.InstancedBufferAttribute(arr.slice(0, m * d), d));
          });
          sg.instanceCount = m;
          const rods = new THREE.Mesh(sg, stickMat(k, cutPlanes, clip));
          rods.frustumCulled = false;
          parent.add(rods);
        }
        return n + m;
      },
    };
  }

  const shade = (mesh, cast = true, receive = true) => { mesh.castShadow = cast; mesh.receiveShadow = receive; return mesh; };
  const qOut = (n, twist = 0) => {
    const q = new THREE.Quaternion().setFromUnitVectors(UP, n.clone().normalize());
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(UP, twist)) : q;
  };

  const caps = new THREE.Group();
  cell.add(caps);
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));
  const unitCyl = new THREE.CylinderGeometry(1, 1, 1, 14);
  const unitSph = new THREE.SphereGeometry(1, 18, 14);

  // Animated handles updated every frame
  const anim = {
    atpRotor: null,
    dnaHelix: null,
    atomOrbits: [],
    flagella: [],
    polypeptide: null,
    stationRings: [],
    pairGhosts: [],
  };

  // -------------------------------------------------------------------
  // Illuminated Logarithmic Gallery Rail & Subtle Decade Pedestal Halos
  // (Decorative stage frame — intentionally NOT registered in REG)
  // -------------------------------------------------------------------
  function buildLogarithmicRail() {
    const railPts = STOPS.map(st => st.pos.clone().add(V(0, -st.visR - 0.62, 0)));
    const railCurve = new THREE.CatmullRomCurve3(railPts);
    const railMat = new THREE.MeshPhysicalMaterial({
      color: '#5fa4e6',
      emissive: '#3876c4',
      emissiveIntensity: 0.45,
      roughness: 0.25,
      metalness: 0.35,
      clearcoat: 0.7,
    });
    cell.add(new THREE.Mesh(sweepGeo(railCurve, () => 0.042, 120, 10), railMat));

    // Subtle secondary glowing ruler thread beneath
    const subCurve = new THREE.CatmullRomCurve3(railPts.map(p => p.clone().add(V(0, -0.18, 0.14))));
    cell.add(new THREE.Mesh(
      sweepGeo(subCurve, () => 0.016, 100, 8),
      new THREE.MeshStandardMaterial({ color: '#8ad8ff', emissive: '#6cc8ff', emissiveIntensity: 0.55, roughness: 0.3 })
    ));

    // Decade ring halo & vertical caliper stem at each of the 11 stations
    const ringGeo = new THREE.TorusGeometry(1.18, 0.022, 10, 48);
    const tickGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.52, 8);
    STOPS.forEach(st => {
      const base = st.pos.clone().add(V(0, -st.visR - 0.62, 0));
      const rMat = new THREE.MeshStandardMaterial({
        color: st.color,
        emissive: st.color,
        emissiveIntensity: 0.48,
        roughness: 0.28,
        metalness: 0.3,
        transparent: true,
        opacity: 0.72,
      });
      const ring = new THREE.Mesh(ringGeo, rMat);
      ring.position.copy(base);
      ring.rotation.x = Math.PI * 0.5;
      ring.scale.setScalar(st.visR * 0.62);
      cell.add(ring);
      anim.stationRings.push({ mesh: ring, mat: rMat, idx: st.idx, baseScale: st.visR * 0.62 });

      const stem = new THREE.Mesh(tickGeo, rMat);
      stem.position.copy(base).add(V(0, 0.24, 0));
      cell.add(stem);
    });
  }

  // -------------------------------------------------------------------
  // STOP 0: 100 µm · Plant cell & human oocyte ('plant_100um')
  // -------------------------------------------------------------------
  function buildPlant100um() {
    const k = 'plant_100um';
    const st = STOP_BY_KEY[k];
    const C = st.pos;
    const { clip } = makeLocalCut(C);
    const CA = 1.48, CB = 1.24, CC = 1.30, SQ = 4, WALL = 0.10;
    const boxF = d => (Math.abs(d.x / CA) ** SQ + Math.abs(d.y / CB) ** SQ + Math.abs(d.z / CC) ** SQ) ** (1 / SQ);
    const wallR = d => (1 + 0.018 * (fbm(d.x * 2.1 + 3.1, d.y * 2.1 + 1.7, d.z * 2.1 + 5.3, 3) - 0.5)) / boxF(d);
    const memR = d => wallR(d) - WALL;

    // Faceted translucent cellulose cell wall + inner plasma membrane
    const wallMat = gelShellMat(k, clip, '#d9cb8c', '#f3ebc4', '#7ca854', {
      atten: 2.2, thickness: 0.42, roughness: 0.18, iridescence: 0.25, sssColor: '#b7f07c', sssIntensity: 0.24, rx: 6, ry: 6,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(C, wallR, 96), wallMat), true, true));

    // Inner cytoplasm glow shell
    cell.add(new THREE.Mesh(shellGeo(C, d => memR(d) - 0.02, 64), physMat(k, {
      ...clip, color: '#2b4d2a', roughness: 0.72, side: THREE.BackSide, sssColor: '#66d97a', sssIntensity: 0.14,
    })));

    // 3-band cutaway wall + plasma membrane capStrip
    const capMat = physMat(k, { vertexColors: true, roughness: 0.36, metalness: 0.04, side: THREE.DoubleSide });
    const layers = [[0, 0.34, '#c7b875'], [0.34, 0.78, '#ede2b2'], [0.78, 1.0, '#ffb4c8']];
    for (const ax of ['x', 'z']) caps.add(new THREE.Mesh(capStrip(C, wallR, ax, WALL, layers, 120), capMat));

    // Glowing wet-gel central vacuole (tonoplast)
    const vacC = C.clone().add(V(-0.14, 0.10, -0.10));
    const vacR = d => {
      const e = 1 / Math.sqrt((d.x / 0.90) ** 2 + (d.y / 0.72) ** 2 + (d.z / 0.78) ** 2);
      return e * (1 + 0.05 * (fbm(d.x * 2.4 + 4, d.y * 2.4, d.z * 2.4 + 2, 3) - 0.5));
    };
    const vacMat = gelShellMat(k, clip, '#5da8eb', '#9cd4ff', '#3a86e0', {
      atten: 1.5, thickness: 0.65, roughness: 0.09, iridescence: 0.52, sssColor: '#7be0ff', sssIntensity: 0.26, rx: 4, ry: 4,
    });
    cell.add(new THREE.Mesh(shellGeo(vacC, vacR, 64), vacMat));
    placed++;

    // Sculpted grana chloroplasts tucked around the vacuole
    const chloroMat = physMat(k, {
      color: '#2fb852', roughness: 0.24, clearcoat: 0.55, clearcoatRoughness: 0.22,
      sheen: 0.45, sheenColor: '#a6ff9e', normalMap: bump(4, 3), normalScale: new THREE.Vector2(0.18, 0.18),
      sssColor: '#72ff84', sssIntensity: 0.25,
    });
    const granaMat = physMat(k, { color: '#1d7d38', emissive: '#1e7834', emissiveIntensity: 0.18, roughness: 0.34 });
    const chloroSpots = [
      V(-0.88, 0.52, 0.34), V(-0.92, -0.25, 0.42), V(-0.42, 0.76, 0.56),
      V(0.36, 0.72, -0.58), V(0.76, 0.14, -0.64), V(0.44, -0.66, -0.52), V(-0.62, -0.74, -0.35),
    ];
    const discMs = [];
    chloroSpots.forEach((off, idx) => {
      const p = C.clone().add(off);
      const ch = new THREE.Mesh(blobGeo(0.24, fbm, 11 + idx * 7, 0.07, 2.2, 3), chloroMat);
      ch.scale.set(1.38, 0.68, 0.88);
      ch.position.copy(p);
      ch.rotation.set(0.3 * idx, 0.7 * idx, 0.2);
      cell.add(shade(ch, true, true));
      placed++;
      SITES[k].push(p.clone());
      // Stacked thylakoid grana coins gleaming on the visible face
      for (let stIdx = -1; stIdx <= 1; stIdx++) {
        for (let d = 0; d < 4; d++) {
          const dp = p.clone().add(V(stIdx * 0.11, -0.045 + d * 0.032, 0.06));
          discMs.push(atS(dp, V(0.055, 0.018, 0.055)));
        }
      }
    });
    cell.add(instanced(unitCyl, granaMat, discMs));

    // Peripheral plant nucleus tucked on the lower floor
    const nucP = C.clone().add(V(-0.18, -0.78, 0.22));
    const nucMat = physMat(k, { color: '#7e62d8', roughness: 0.26, clearcoat: 0.45, sssColor: '#b39cff', sssIntensity: 0.22 });
    const nucMesh = new THREE.Mesh(blobGeo(0.34, fbm, 31, 0.05, 2.4, 3), nucMat);
    nucMesh.position.copy(nucP);
    cell.add(shade(nucMesh, true, true));
    const nucCore = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), physMat(k, { color: '#d85a88', emissive: '#b83c6b', emissiveIntensity: 0.35, roughness: 0.3 }));
    nucCore.position.copy(nucP).add(V(0.14, 0.06, 0.16));
    cell.add(nucCore);
    placed += 2;

    // Human oocyte (100 µm) luminous translucent zona-pellucida reference sphere right behind-upper-left
    const ooC = C.clone().add(V(-1.05, 0.88, -0.95));
    const ooMat = gelShellMat(k, {}, '#d7b9eb', '#f5e4ff', '#b487d9', {
      atten: 2.0, thickness: 0.38, roughness: 0.10, iridescence: 0.62, sssColor: '#ffc9ec', sssIntensity: 0.28, rx: 4, ry: 4,
    });
    cell.add(new THREE.Mesh(shellGeo(ooC, () => 0.72, 48), ooMat));
    const ooNuc = new THREE.Mesh(new THREE.SphereGeometry(0.20, 18, 14), physMat(k, { color: '#ff9ec4', emissive: '#e8689c', emissiveIntensity: 0.24, roughness: 0.26 }));
    ooNuc.position.copy(ooC);
    cell.add(ooNuc);
    placed += 2;
    SITES[k].push(C.clone(), vacC.clone(), ooC.clone());
  }

  // -------------------------------------------------------------------
  // STOP 1: 20 µm · Animal cell ('animal_20um')
  // -------------------------------------------------------------------
  function buildAnimal20um() {
    const k = 'animal_20um';
    const st = STOP_BY_KEY[k];
    const C = st.pos;
    const { planes, clip } = makeLocalCut(C);
    const CA = 1.48, CB = 1.18, CC = 1.36, MT = 0.068;
    const cellR = d => {
      const e = 1 / Math.sqrt((d.x / CA) ** 2 + (d.y / CB) ** 2 + (d.z / CC) ** 2);
      const flat = d.y < -0.35 ? 1 - 0.09 * Math.min(1, (-d.y - 0.35) / 0.5) : 1;
      return e * flat * (1 + 0.08 * (fbm(d.x * 1.4 + 3.1, d.y * 1.4 + 1.7, d.z * 1.4 + 5.3, 4) - 0.5));
    };

    // Iridescent wave-rippled cutaway plasma membrane (XVIVO wet-gel signature)
    const memMat = gelShellMat(k, clip, '#9fbef2', '#e4eeff', '#86aaff', {
      atten: 2.4, thickness: 0.52, roughness: 0.10, iridescence: 0.58, sssColor: '#8fd2ff', sssIntensity: 0.26, rx: 7, ry: 7,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(C, cellR, 108), memMat), true, true));

    // 3-band phospholipid bilayer capStrip along both cut faces
    const capMat = physMat(k, { vertexColors: true, roughness: 0.34, metalness: 0.05, side: THREE.DoubleSide });
    const BILAYER = [[0, 0.28, '#cfe0ff'], [0.28, 0.72, '#ffdf9b'], [0.72, 1.0, '#aec9ff']];
    for (const ax of ['x', 'z']) caps.add(new THREE.Mesh(capStrip(C, cellR, ax, MT, BILAYER, 130), capMat));

    // Cutaway Purple Nuclear Envelope + pores + glowing ruby nucleolus + chromatin
    const N0 = C.clone().add(V(-0.08, 0.08, -0.06));
    const nucR = d => {
      const e = 1 / Math.sqrt((d.x / 0.56) ** 2 + (d.y / 0.48) ** 2 + (d.z / 0.52) ** 2);
      return e * (1 + 0.06 * (fbm(d.x * 2.2 + 7, d.y * 2.2, d.z * 2.2 + 9, 3) - 0.5));
    };
    const nucMat = gelShellMat(k, clip, '#7558cc', '#a48df0', '#5a3db8', {
      atten: 1.4, thickness: 0.42, roughness: 0.16, iridescence: 0.36, sssColor: '#c39eff', sssIntensity: 0.26, rx: 5, ry: 5,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(N0, nucR, 72), nucMat), true, true));
    for (const ax of ['x', 'z']) caps.add(new THREE.Mesh(capStrip(N0, nucR, ax, 0.036, [[0, 0.5, '#9d86eb'], [0.5, 1, '#684bb8']], 72), capMat));

    // Nuclear pore octamer rings on the uncut nuclear hemisphere
    const poreGeo = new THREE.TorusGeometry(0.044, 0.015, 8, 14);
    const poreMat = physMat(k, { color: '#d7c4ff', emissive: '#9474e6', emissiveIntensity: 0.22, roughness: 0.32 });
    const poreMs = [];
    for (let i = 0; i < 36; i++) {
      const u = -0.82 + (1.64 * (i + 0.5)) / 36;
      const phi = i * 2.3999632;
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const d = V(s * Math.cos(phi), u, s * Math.sin(phi));
      const p = N0.clone().addScaledVector(d, nucR(d) + 0.008);
      if (p.x > C.x + 0.02 && p.z > C.z + 0.02) continue;
      poreMs.push(atS(p, 1, qOut(d).multiply(new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), Math.PI * 0.5))));
      placed++;
    }
    cell.add(instanced(poreGeo, poreMat, poreMs));

    // Nucleolus + miniature coiled chromatin DNA inside opened nucleus
    const nlo = new THREE.Mesh(blobGeo(0.16, fbm, 44, 0.09, 2.5, 3), physMat(k, { color: '#d64c7d', emissive: '#c4366b', emissiveIntensity: 0.38, roughness: 0.32 }));
    nlo.position.copy(N0).add(V(-0.02, 0.12, 0.14));
    cell.add(nlo);
    const B_CHR = balls(k, cell, planes, true);
    for (let c = 0; c < 4; c++) {
      const pts = [];
      for (let t = 0; t <= 24; t++) {
        const a = t * 0.42 + c * 1.6;
        const r = 0.16 + 0.20 * Math.sin(t * 0.31 + c);
        pts.push(N0.clone().add(V(-Math.abs(Math.cos(a) * r) - 0.04, (t / 24 - 0.5) * 0.56, Math.sin(a) * r)));
      }
      dna.emitDNA(B_CHR, pts, { nm: 0.018, deterministicBases: true });
    }
    B_CHR.done();
    placed += 4;

    // Coral-orange Mitochondria (curved swept beans with glowing inner cristae)
    const mitoMat = physMat(k, {
      color: '#ff6e4e', roughness: 0.22, clearcoat: 0.55, clearcoatRoughness: 0.2,
      sheen: 0.5, sheenColor: '#ffd4b8', sssColor: '#ff9966', sssIntensity: 0.3,
    });
    const cristaMat = physMat(k, { color: '#ffbb88', emissive: '#ff7a42', emissiveIntensity: 0.24, roughness: 0.35 });
    const mitoSpecs = [
      [V(-0.82, -0.32, 0.52), V(-0.62, -0.58, 0.26), V(-0.34, -0.68, 0.46)],
      [V(0.46, -0.58, -0.68), V(0.76, -0.32, -0.56), V(0.88, -0.02, -0.34)],
      [V(-0.84, 0.52, -0.32), V(-0.56, 0.72, -0.52), V(-0.22, 0.78, -0.44)],
      [V(0.28, 0.68, -0.58), V(0.58, 0.54, -0.42), V(0.74, 0.32, -0.22)],
    ];
    mitoSpecs.forEach(pts => {
      const cv = new THREE.CatmullRomCurve3(pts.map(p => C.clone().add(p)));
      cell.add(shade(new THREE.Mesh(sweepGeo(cv, t => 0.135 * Math.sin(Math.PI * (0.12 + 0.76 * t)), 36, 16), mitoMat), true, true));
      // Inner crista ridges visible along the bean
      for (let i = 1; i <= 4; i++) {
        const p = cv.getPointAt(i / 5);
        const cr = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.02, 6, 14), cristaMat);
        cr.position.copy(p);
        cr.quaternion.setFromUnitVectors(V(0, 0, 1), cv.getTangentAt(i / 5));
        cell.add(cr);
      }
      SITES[k].push(cv.getPointAt(0.5));
      placed++;
    });

    // Golden Stacked Golgi Apparatus (5 curved ribbon cisternae + budding vesicles)
    const golgiMat = physMat(k, { color: '#f5b846', roughness: 0.26, clearcoat: 0.48, sheen: 0.4, sheenColor: '#fff0b8', sssColor: '#ffd466', sssIntensity: 0.24 });
    const gBase = C.clone().add(V(0.42, -0.18, 0.46));
    for (let s = 0; s < 5; s++) {
      const rArc = 0.24 + s * 0.048;
      const gPts = [];
      for (let j = 0; j <= 10; j++) {
        const a = -0.75 + (j / 10) * 1.5;
        gPts.push(gBase.clone().add(V(Math.sin(a) * rArc * 0.7, (s - 2) * 0.072 + Math.cos(a) * 0.05, Math.cos(a) * rArc * 0.45 - s * 0.04)));
      }
      cell.add(shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(gPts), t => 0.028 + 0.014 * Math.abs(t - 0.5) * 2, 24, 10), golgiMat), true, true));
      placed++;
    }

    // Perinuclear Rose-Pink Rough ER folds studded with indigo 80S ribosomes
    const rerMat = physMat(k, { color: '#f29bb4', roughness: 0.30, clearcoat: 0.35, sssColor: '#ffbfd2', sssIntensity: 0.22 });
    const riboMat = physMat(k, { color: '#5c54cc', roughness: 0.38 });
    const riboMs = [];
    for (let layer = 0; layer < 3; layer++) {
      const rPts = [];
      const rad = 0.68 + layer * 0.13;
      for (let j = 0; j <= 14; j++) {
        const a = Math.PI * 0.58 + (j / 14) * Math.PI * 1.05;
        const pt = N0.clone().add(V(Math.cos(a) * rad, Math.sin(j * 0.7 + layer) * 0.16 + (layer - 1) * 0.18, Math.sin(a) * rad));
        rPts.push(pt);
        if (j % 2 === 0) riboMs.push(atS(pt.clone().add(V(0, 0.04, 0.03)), 0.024));
      }
      cell.add(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(rPts), () => 0.036, 30, 10), rerMat));
      placed++;
    }
    cell.add(instanced(unitSph, riboMat, riboMs));

    // Lysosomes (green), Peroxisomes (teal), Vesicles (sky)
    const vesColors = ['#8ed16a', '#46c3b5', '#a8d2ff', '#ffd16b'];
    vesColors.forEach((hex, idx) => {
      const vMat = physMat(k, { color: hex, roughness: 0.2, clearcoat: 0.6, sssColor: hex, sssIntensity: 0.2 });
      const vp = C.clone().add(V(-0.62 + idx * 0.34, 0.42 - idx * 0.26, 0.58 - idx * 0.24));
      const vm = new THREE.Mesh(new THREE.SphereGeometry(0.09 + (idx % 2) * 0.025, 16, 12), vMat);
      vm.position.copy(vp);
      cell.add(vm);
      placed++;
    });
    SITES[k].push(C.clone(), N0.clone(), gBase.clone());
  }

  // -------------------------------------------------------------------
  // STOP 2: 5 µm · Budding yeast & nucleus ('yeast_5um')
  // -------------------------------------------------------------------
  function buildYeast5um() {
    const k = 'yeast_5um';
    const st = STOP_BY_KEY[k];
    const C = st.pos;
    const { clip } = makeLocalCut(C);
    const WALL = 0.068;
    // Pinched mother cell + emerging apical daughter bud (S. cerevisiae silhouette)
    const yeastR = d => {
      const base = 1 / Math.sqrt((d.x / 1.06) ** 2 + (d.y / 1.18) ** 2 + (d.z / 1.06) ** 2);
      const neck = -0.26 * Math.exp(-(((d.y - 0.56) / 0.135) ** 2));
      const bud = 0.44 * Math.exp(-(((1 - d.y) / 0.24) ** 2));
      const w = 1 + 0.016 * (fbm(d.x * 2 + 2.3, d.y * 2 + 1.1, d.z * 2 + 4.7, 3) - 0.5);
      return (base + neck + bud) * w;
    };

    const wallMat = gelShellMat(k, clip, '#e6c57a', '#ffebb8', '#d49a3a', {
      atten: 2.8, thickness: 0.44, roughness: 0.14, iridescence: 0.42, sssColor: '#ffe08a', sssIntensity: 0.34, rx: 6, ry: 7,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(C, yeastR, 96), wallMat), true, true));

    const capMat = physMat(k, { vertexColors: true, roughness: 0.35, side: THREE.DoubleSide });
    const Y_LAYERS = [[0, 0.55, '#e8d29c'], [0.55, 0.85, '#c99b4e'], [0.85, 1.0, '#ffb4c8']];
    for (const ax of ['x', 'z']) caps.add(new THREE.Mesh(capStrip(C, yeastR, ax, WALL, Y_LAYERS, 120), capMat));

    // Luminous Cyan Septin Collar Ring encircling the mother-bud neck
    const septinMat = physMat(k, {
      color: '#4fe0b8', emissive: '#22c49c', emissiveIntensity: 0.46, roughness: 0.22, clearcoat: 0.55,
    });
    const neckY = C.y + 0.62;
    for (let r = 0; r < 2; r++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.58 - r * 0.03, 0.045, 12, 42), septinMat);
      ring.position.set(C.x, neckY + r * 0.075, C.z);
      ring.rotation.x = Math.PI * 0.5;
      cell.add(ring);
      placed++;
    }

    // Chitinous bud scars on the lower mother hemisphere
    const scarMat = physMat(k, { color: '#d99848', roughness: 0.42, clearcoat: 0.25 });
    [V(-0.82, -0.42, 0.42), V(-0.62, -0.78, -0.35), V(0.58, -0.64, -0.58)].forEach(d => {
      const dir = d.clone().normalize();
      const p = C.clone().addScaledVector(dir, yeastR(dir) + 0.01);
      const sc = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.032, 8, 22), scarMat);
      sc.position.copy(p);
      sc.quaternion.setFromUnitVectors(V(0, 0, 1), dir);
      cell.add(sc);
      placed++;
    });

    // Glowing Purple Yeast Nucleus approaching the bud neck + crescent nucleolus
    const nucP = C.clone().add(V(-0.10, 0.24, -0.06));
    const nucMat = gelShellMat(k, clip, '#7a5fd0', '#ae96ff', '#583ab8', {
      atten: 1.4, thickness: 0.4, roughness: 0.18, sssColor: '#c29eff', sssIntensity: 0.28, rx: 4, ry: 4,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(nucP, () => 0.40, 56), nucMat), true, true));
    const nlo = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), physMat(k, { color: '#d85582', emissive: '#b83464', emissiveIntensity: 0.36, roughness: 0.3 }));
    nlo.position.copy(nucP).add(V(-0.12, -0.06, 0.14));
    cell.add(nlo);
    placed += 2;

    // Acidic Sky-Blue Vacuole in the lower mother cell
    const vacP = C.clone().add(V(-0.22, -0.44, -0.18));
    cell.add(new THREE.Mesh(shellGeo(vacP, () => 0.36, 44), gelShellMat(k, clip, '#66a8f0', '#9cd4ff', '#3a7cd9', {
      atten: 1.5, thickness: 0.42, roughness: 0.11, sssColor: '#86d6ff', sssIntensity: 0.24,
    })));

    // Tubular coral yeast mitochondria coursing up into the emerging daughter bud
    const mitoMat = physMat(k, { color: '#ff7656', roughness: 0.24, clearcoat: 0.5, sssColor: '#ff9d78', sssIntensity: 0.28 });
    const mCv1 = new THREE.CatmullRomCurve3([
      C.clone().add(V(-0.56, -0.35, 0.38)),
      C.clone().add(V(-0.34, 0.16, 0.44)),
      C.clone().add(V(-0.12, 0.68, 0.18)),
      C.clone().add(V(-0.08, 1.06, -0.04)),
    ]);
    cell.add(shade(new THREE.Mesh(sweepGeo(mCv1, () => 0.082, 34, 12), mitoMat), true, true));
    const mCv2 = new THREE.CatmullRomCurve3([
      C.clone().add(V(0.46, -0.46, -0.42)),
      C.clone().add(V(0.56, 0.08, -0.32)),
      C.clone().add(V(0.28, 0.54, -0.26)),
    ]);
    cell.add(shade(new THREE.Mesh(sweepGeo(mCv2, () => 0.075, 28, 12), mitoMat), true, true));
    placed += 3;
    SITES[k].push(C.clone(), nucP.clone(), V(C.x, neckY, C.z));
  }

  // -------------------------------------------------------------------
  // STOP 3: 2 µm · Bacterium (E. coli) ('ecoli_2um')
  // -------------------------------------------------------------------
  function buildEcoli2um() {
    const k = 'ecoli_2um';
    const st = STOP_BY_KEY[k];
    const C = st.pos;
    const { planes, clip } = makeLocalCut(C);
    const ENV = 0.078;
    // Capsule-like Gram-negative bacillus shell (long axis slightly pitched in X/Y)
    const bacR = d => {
      const a = 1.48, b = 0.72, c = 0.72;
      const sq = (Math.abs(d.x / a) ** 3.2 + (Math.hypot(d.y / b, d.z / c)) ** 2.4) ** (1 / 2.65);
      return (1 + 0.015 * (fbm(d.x * 3 + 1.2, d.y * 3, d.z * 3 + 4.1, 3) - 0.5)) / sq;
    };

    // Translucent emerald-teal Gram-negative outer membrane + 3-layer cutaway capStrip
    const omMat = gelShellMat(k, clip, '#3fb88d', '#9ef5d4', '#268a68', {
      atten: 1.9, thickness: 0.45, roughness: 0.14, iridescence: 0.44, sssColor: '#6effcb', sssIntensity: 0.26, rx: 8, ry: 5,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(C, bacR, 96), omMat), true, true));

    const capMat = physMat(k, { vertexColors: true, roughness: 0.34, side: THREE.DoubleSide });
    const GRAM_NEG = [[0, 0.34, '#4fd6a4'], [0.34, 0.66, '#f2c76e'], [0.66, 1.0, '#ffd8a8']];
    for (const ax of ['x', 'z']) caps.add(new THREE.Mesh(capStrip(C, bacR, ax, ENV, GRAM_NEG, 120), capMat));

    // Supercoiled purple-blue circular nucleoid (no nuclear envelope!)
    const B_NUC = balls(k, cell, planes, true);
    for (let loop = 0; loop < 7; loop++) {
      const ctrl = [];
      for (let j = 0; j <= 10; j++) {
        const t = j / 10;
        const a = loop * 0.92 + t * Math.PI * 2.4;
        const rx = (t - 0.5) * 1.95;
        const rad = (0.20 + 0.24 * Math.sin(t * Math.PI)) * (0.75 + 0.25 * Math.cos(loop));
        let py = Math.sin(a) * rad;
        let pz = Math.cos(a) * rad;
        if (rx > -0.05 && pz > -0.05) pz = -Math.abs(pz) - 0.06;
        ctrl.push(C.clone().add(V(rx, py, pz)));
      }
      const pts = new THREE.CatmullRomCurve3(ctrl).getSpacedPoints(76);
      dna.emitDNA(B_NUC, pts, { nm: 0.022, deterministicBases: true });
      SITES[k].push(pts[38].clone());
    }
    B_NUC.done();

    // Crowded 70S bacterial ribosome cloud inside cytosol via cinema impostors
    const B_RIBO = balls(k, cell, planes, true);
    const riboCols = [col('#ffe394'), col('#ffc56e'), col('#a49bff')];
    for (let i = 0; i < 180; i++) {
      const rx = rr(-1.12, 1.12);
      const maxR = Math.max(0.18, 0.56 * Math.sqrt(Math.max(0.05, 1 - (rx / 1.32) ** 2)));
      const a = rr(0, Math.PI * 2);
      const r = maxR * Math.sqrt(rr(0.15, 0.95));
      const p = C.clone().add(V(rx, Math.sin(a) * r, Math.cos(a) * r));
      if (p.x > C.x && p.z > C.z) continue;
      B_RIBO.add(p, rr(0.055, 0.075), riboCols[i % riboCols.length]);
      placed++;
    }
    B_RIBO.done();

    // 4 Wavy Helical Flagella sweeping from the left/rear pole (animated gently!)
    const flagMat = physMat(k, { color: '#a8ffdf', emissive: '#38c796', emissiveIntensity: 0.24, roughness: 0.25, clearcoat: 0.5 });
    for (let f = 0; f < 4; f++) {
      const anchor = C.clone().add(V(-1.38, -0.24 + f * 0.16, -0.18 + (f % 2) * 0.34));
      const fPts = [];
      for (let j = 0; j <= 24; j++) {
        const t = j / 24;
        const ang = t * Math.PI * 5.2 + f * 1.4;
        fPts.push(V(-t * 1.55, Math.sin(ang) * (0.09 + 0.08 * t), Math.cos(ang) * (0.09 + 0.08 * t)));
      }
      const fg = new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(fPts), t => 0.022 * (1 - 0.35 * t), 44, 8), flagMat);
      fg.position.copy(anchor);
      cell.add(fg);
      anim.flagella.push({ mesh: fg, phase: f * 1.57 });
      placed++;
    }

    // ~48 Fine Radiating Fimbriae / Pili around the Gram-negative capsule
    const piliMat = physMat(k, { color: '#7ee6c4', roughness: 0.42 });
    const piliMs = [];
    for (let i = 0; i < 48; i++) {
      const u = -0.88 + (1.76 * (i + 0.5)) / 48;
      const phi = i * 2.3999632;
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const d = V(s * Math.cos(phi), u, s * Math.sin(phi));
      const p0 = C.clone().addScaledVector(d, bacR(d) - 0.02);
      if (p0.x > C.x + 0.02 && p0.z > C.z + 0.02) continue;
      const p1 = p0.clone().addScaledVector(d, rr(0.24, 0.42));
      piliMs.push(cylM(p0, p1, 0.011));
      placed++;
    }
    cell.add(instanced(unitCyl, piliMat, piliMs));
    SITES[k].push(C.clone());
  }

  // -------------------------------------------------------------------
  // STOP 4: 300 nm · Mycoplasma genitalium ('myco_300nm')
  // -------------------------------------------------------------------
  function buildMyco300nm() {
    const k = 'myco_300nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;
    const { planes, clip } = makeLocalCut(C);

    // Wall-less piriform flask profile (tip pointing down-right for dramatic polarity)
    const Y_BOT = -1.36, Y_TOP = 1.24, H = Y_TOP - Y_BOT;
    const baseR = u => {
      const uc = Math.max(0, Math.min(1, u));
      const tipCap = Math.sqrt(Math.max(0, 1 - Math.pow(Math.max(0, 1 - uc / 0.09), 2)));
      if (uc <= 0.66) {
        const s = 0.5 - 0.5 * Math.cos(Math.PI * Math.max(0, Math.min(1, (uc - 0.22) / 0.44)));
        return (0.28 + 0.66 * Math.pow(Math.max(0, s), 1.3)) * tipCap;
      }
      return 0.94 * Math.sqrt(Math.max(0, 1 - Math.pow(Math.max(0, (uc - 0.66) / 0.34), 2)));
    };
    const surf = (u, phi, dep = 0) => {
      const uc = Math.max(0, Math.min(1, u));
      const ca = Math.cos(phi), sa = Math.sin(phi);
      const r = Math.max(0.002, baseR(uc) - dep);
      const y = Y_BOT + uc * H;
      const du = 0.004;
      const dr = baseR(Math.min(1, uc + du)) - baseR(Math.max(0, uc - du));
      const dy = Math.min(1, uc + du) * H - Math.max(0, uc - du) * H;
      const inv = 1 / Math.max(1e-5, Math.hypot(dy, dr));
      const nrm = V(dy * inv * ca, -dr * inv, dy * inv * sa).normalize();
      return { p: C.clone().add(V(r * ca, y, r * sa)), n: nrm };
    };
    const makeFlaskGeo = (dep = 0, segU = 68, segPhi = 56) => {
      const pos = [], uv = [], idx = [];
      for (let j = 0; j <= segU; j++) {
        const u = j / segU;
        for (let i = 0; i <= segPhi; i++) {
          const { p } = surf(u, (i / segPhi) * Math.PI * 2, dep);
          pos.push(p.x, p.y, p.z);
          uv.push((i / segPhi) * 4, u * 5);
        }
      }
      for (let j = 0; j < segU; j++) for (let i = 0; i < segPhi; i++) {
        const a = j * (segPhi + 1) + i, b = a + segPhi + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    };

    const memMat = gelShellMat(k, clip, '#cf745b', '#f8baa0', '#8a3925', {
      atten: 1.7, thickness: 0.42, roughness: 0.16, iridescence: 0.36, sssColor: '#ffaa82', sssIntensity: 0.28, rx: 6, ry: 8,
    });
    cell.add(shade(new THREE.Mesh(makeFlaskGeo(0), memMat), true, true));

    // Trilaminar single-bilayer cutaway cap strip along x = C.x and z = C.z
    const capMat = physMat(k, { vertexColors: true, roughness: 0.35, side: THREE.DoubleSide });
    const capLayers = [[0, 0.018, '#f6a281'], [0.018, 0.044, '#ffe199'], [0.044, 0.062, '#e28264']];
    for (const ax of ['x', 'z']) {
      const pos = [], colArr = [], nor = [], idx = [], cc = new THREE.Color();
      const phi0 = ax === 'x' ? Math.PI * 0.5 : 0;
      const nrm = ax === 'x' ? V(1, 0, 0) : V(0, 0, 1);
      let base = 0;
      capLayers.forEach(([d0, d1, hex]) => {
        cc.set(hex);
        for (let i = 0; i <= 88; i++) {
          const u = i / 88;
          for (const d of [d0, d1]) {
            const p = surf(u, phi0, d).p;
            pos.push(p.x, p.y, p.z); colArr.push(cc.r, cc.g, cc.b); nor.push(nrm.x, nrm.y, nrm.z);
          }
        }
        for (let i = 0; i < 88; i++) { const a = base + i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
        base += 89 * 2;
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(colArr, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      g.setIndex(idx);
      caps.add(new THREE.Mesh(g, capMat));
    }

    // Golden Cholesterol Plaques speckling the wall-less bilayer
    const sterolMat = physMat(k, { color: '#ffd15c', emissive: '#c88c1e', emissiveIntensity: 0.16, roughness: 0.28, clearcoat: 0.5 });
    const sterMs = [];
    for (let i = 0; i < 72; i++) {
      const u = 0.14 + 0.80 * ((i + 0.5) / 72);
      const phi = i * 2.3999632;
      const { p, n } = surf(u, phi, 0.02);
      if (p.x > C.x + 0.01 && p.z > C.z + 0.01) continue;
      sterMs.push(atS(p, V(0.036, 0.056, 0.024), qOut(n, i)));
      placed++;
    }
    cell.add(instanced(unitSph, sterolMat, sterMs));

    // Rose-Coral Nap Adhesin Crown complexes densely ringing the tapered tip
    const geoNap = synthCryoGeo([
      [-1.4, 0.8, -1.2, 1.3, 0], [1.4, 0.8, 1.2, 1.3, 0], [-1.2, 0.8, 1.4, 1.3, 1], [1.2, 0.8, -1.4, 1.3, 1],
      [0, 3.2, 0, 1.8, 0], [-1.6, 2.6, 0, 1.5, 1], [1.6, 2.6, 0, 1.5, 0],
    ], ['#ff6b8b', '#ffa4bb'], 0.024, 22, 1.0);
    const I_NAP = makeMolBatch(geoNap, protMat(k, null, { sssColor: '#ff7fa0', sssIntensity: 0.22 }), cell);
    for (let ring = 0; ring < 4; ring++) {
      const u = 0.03 + ring * 0.055;
      const cnt = ring === 0 ? 5 : 8;
      for (let j = 0; j < cnt; j++) {
        const phi = (j / cnt) * Math.PI * 2 + ring * 0.4;
        const { p, n } = surf(u, phi, -0.01);
        I_NAP.add(p, qOut(n, j), 0.92);
        placed++;
      }
    }
    I_NAP.done();

    // Internal Segmented HMW1/HMW2 Cytoskeletal Core Rod + Distal Button + Basal Wheel
    const S_ROD = makeSculptedMesh(protMat(k, null, { sssColor: '#ffe09e', sssIntensity: 0.2 }), cell);
    const cBtn = col('#ff9f43'), cR1 = col('#f7d794'), cR2 = col('#f3a683'), cWhl = col('#e17055');
    S_ROD.lobe(C.clone().add(V(-0.02, -1.16, -0.02)), 0.14, 0.09, 0.14, cBtn);
    for (let s = 0; s < 11; s++) {
      const y = -0.98 + s * 0.088;
      const w = 0.11 + 0.04 * (s / 10);
      S_ROD.lobe(C.clone().add(V(-0.02, y, -0.02)), w, 0.026, w, s % 2 ? cR1 : cR2);
      placed++;
    }
    S_ROD.ring(C.clone().add(V(-0.02, 0.02, -0.02)), UP, 0.24, 0.034, cWhl, 24, 8);
    S_ROD.done();

    // Compact 580 kbp Circular dsDNA in the posterior bulb
    const B_MYC = balls(k, cell, planes, true);
    for (let L = 0; L < 5; L++) {
      const ctrl = [];
      for (let j = 0; j <= 8; j++) {
        const t = j / 8;
        const a = L * 1.45 + t * Math.PI * 2.1;
        const rad = 0.22 + 0.42 * Math.sin(t * Math.PI);
        let rx = Math.cos(a) * rad, rz = Math.sin(a) * rad;
        if (rx > -0.05 && rz > -0.05) rx = -Math.abs(rx) - 0.06;
        ctrl.push(C.clone().add(V(rx, 0.18 + L * 0.18 + Math.sin(t * Math.PI * 2) * 0.08, rz)));
      }
      dna.emitDNA(B_MYC, new THREE.CatmullRomCurve3(ctrl).getSpacedPoints(54), { nm: 0.019, deterministicBases: true });
    }
    B_MYC.done();
    SITES[k].push(C.clone(), C.clone().add(V(0, -1.1, 0)), C.clone().add(V(-0.2, 0.55, -0.2)));
  }

  // -------------------------------------------------------------------
  // STOP 5: 100 nm · SARS-CoV-2 & HIV-1 virions ('virus_100nm')
  // -------------------------------------------------------------------
  function buildVirus100nm() {
    const k = 'virus_100nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;

    // Left hero: Cutaway SARS-CoV-2 Coronavirus (~100 nm)
    const covC = C.clone().add(V(-0.76, 0.08, 0.16));
    const covCut = makeLocalCut(covC);
    const covR = 0.72;
    const covMat = gelShellMat(k, covCut.clip, '#cf6b5d', '#f5aba0', '#8f3028', {
      atten: 1.5, thickness: 0.36, roughness: 0.15, iridescence: 0.38, sssColor: '#ff8a8a', sssIntensity: 0.28, rx: 5, ry: 5,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(covC, () => covR, 72), covMat), true, true));

    const capMat = physMat(k, { vertexColors: true, roughness: 0.34, side: THREE.DoubleSide });
    for (const ax of ['x', 'z']) {
      caps.add(new THREE.Mesh(capStrip(covC, () => covR, ax, 0.052, [[0, 0.35, '#ff8e8e'], [0.35, 0.7, '#ffe099'], [0.7, 1, '#e67575']], 84), capMat));
    }

    // 28 Sculpted Club-Shaped Spike (S) Glycoprotein Trimers (cryo-EM PDB 6VXX silhouette)
    const geoSpike = synthCryoGeo([
      [0, 0.2, 0, 0.72, 0], [0, 1.4, 0, 0.78, 0], [0, 2.6, 0, 0.92, 0],
      [-1.35, 3.8, -0.75, 1.35, 1], [1.35, 3.8, -0.75, 1.35, 1], [0, 3.8, 1.5, 1.35, 2],
      [-0.95, 4.9, -0.52, 1.12, 2], [0.95, 4.9, -0.52, 1.12, 1], [0, 4.9, 1.08, 1.12, 2],
    ], ['#e84372', '#ff6b92', '#ffa6bf'], 0.044, 26, 1.0);
    const I_SPK = makeMolBatch(geoSpike, protMat(k, covCut.clip, { sssColor: '#ff7096', sssIntensity: 0.28 }), cell);
    for (let i = 0; i < 30; i++) {
      const u = -0.90 + (1.80 * (i + 0.5)) / 30;
      const phi = i * 2.3999632;
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const d = V(s * Math.cos(phi), u, s * Math.sin(phi));
      const p = covC.clone().addScaledVector(d, covR - 0.04);
      if (p.x > covC.x + 0.04 && p.z > covC.z + 0.04) continue;
      I_SPK.add(p, qOut(d, i * 0.7), 1.02);
      placed++;
    }
    I_SPK.done();

    // Coiled Amber (+)ssRNA + Cyan Nucleocapsid RNP inside opened SARS-CoV-2
    const B_COV = balls(k, cell, covCut.planes, true);
    const rnaPts = [];
    for (let i = 0; i <= 54; i++) {
      const t = i / 54;
      const a = t * Math.PI * 6.5;
      const rad = 0.14 + 0.34 * Math.sin(t * Math.PI);
      const p = covC.clone().add(V(Math.cos(a) * rad, (t - 0.5) * 0.88, Math.sin(a) * rad));
      rnaPts.push(p);
      if (i % 3 === 0) B_COV.add(p.clone().add(V(0, 0.04, 0)), 0.095, col('#63e6f2'));
    }
    rna.rnaAlong(B_COV, rnaPts, MRNA, 0.036);
    B_COV.done();
    // Solid glowing amber RNA coil spine for unmistakable visual clarity
    const covRnaMat = physMat(k, { color: '#ffb85c', emissive: '#e68222', emissiveIntensity: 0.34, roughness: 0.26, clearcoat: 0.5 });
    cell.add(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(rnaPts), () => 0.022, 68, 8), covRnaMat));

    // Right companion: Cutaway HIV-1 Retrovirus (~110 nm) with Golden-Teal Fullerene Cone Capsid
    const hivC = C.clone().add(V(0.86, -0.10, -0.14));
    const hivCut = makeLocalCut(hivC);
    const hivR = 0.78;
    const hivMat = gelShellMat(k, hivCut.clip, '#845ec2', '#c8b0ff', '#52328a', {
      atten: 1.6, thickness: 0.38, roughness: 0.14, iridescence: 0.48, sssColor: '#b994ff', sssIntensity: 0.28, rx: 5, ry: 5,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(hivC, () => hivR, 68), hivMat), true, true));
    for (const ax of ['x', 'z']) {
      caps.add(new THREE.Mesh(capStrip(hivC, () => hivR, ax, 0.050, [[0, 0.45, '#b698f5'], [0.45, 1, '#f0cc84']], 80), capMat));
    }

    // HIV-1 gp120/gp41 Env trimer knobs (sparser than SARS-CoV-2!)
    const envGeo = synthCryoGeo([[0, 0.3, 0, 0.72, 0], [0, 1.3, 0, 0.78, 0], [-1.15, 2.5, -0.6, 1.25, 1], [1.15, 2.5, -0.6, 1.25, 1], [0, 2.5, 1.25, 1.25, 1]], ['#d58fff', '#f0b8ff'], 0.038, 22, 0.95);
    const I_ENV = makeMolBatch(envGeo, protMat(k, hivCut.clip, { sssColor: '#e0a6ff', sssIntensity: 0.24 }), cell);
    for (let i = 0; i < 16; i++) {
      const u = -0.82 + (1.64 * (i + 0.5)) / 16;
      const phi = i * 2.3999632 + 0.7;
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const d = V(s * Math.cos(phi), u, s * Math.sin(phi));
      const p = hivC.clone().addScaledVector(d, hivR - 0.03);
      if (p.x > hivC.x + 0.04 && p.z > hivC.z + 0.04) continue;
      I_ENV.add(p, qOut(d, i), 1.0);
      placed++;
    }
    I_ENV.done();

    // Signature HIV-1 Tapered Fullerene Cone Capsid (CA hexamer lattice rings + twin diploid ssRNA)
    const coneGrp = new THREE.Group();
    coneGrp.position.copy(hivC).add(V(-0.04, 0.0, -0.02));
    coneGrp.rotation.z = -0.24;
    const coneMat = physMat(k, {
      color: '#3ad4bc', emissive: '#17756a', emissiveIntensity: 0.24, roughness: 0.26, clearcoat: 0.55,
      normalMap: protBump, normalScale: new THREE.Vector2(0.36, 0.36), sssColor: '#78ffe8', sssIntensity: 0.28,
    });
    const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.35, 0.92, 6, 4), coneMat);
    coneGrp.add(shade(cone, true, true));
    // Sculpted fullerene CA hexamer bands encircling the cone
    const ringMat = physMat(k, { color: '#9cfce8', emissive: '#34b8a6', emissiveIntensity: 0.28, roughness: 0.3 });
    for (let r = 0; r < 5; r++) {
      const f = r / 4;
      const rad = 0.165 + f * 0.18;
      const band = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.018, 6, 6), ringMat);
      band.position.y = 0.38 - f * 0.76;
      band.rotation.x = Math.PI * 0.5;
      coneGrp.add(band);
    }
    cell.add(coneGrp);
    // Glowing golden diploid RNA helices curving along the opened cone face
    const hivRnaMat = physMat(k, { color: '#ffd86b', emissive: '#e09a1e', emissiveIntensity: 0.42, roughness: 0.25 });
    for (let s = 0; s < 2; s++) {
      const pts = [];
      for (let j = 0; j <= 18; j++) {
        const t = j / 18;
        pts.push(hivC.clone().add(V((s ? 0.10 : -0.10) + Math.sin(t * 7.5 + s) * 0.07, -0.32 + t * 0.64, 0.26 + Math.cos(t * 7.5 + s) * 0.06)));
      }
      cell.add(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(pts), () => 0.022, 34, 8), hivRnaMat));
    }
    placed += 5;
    SITES[k].push(covC.clone(), hivC.clone());
  }

  // -------------------------------------------------------------------
  // STOP 6: 25 nm · 70S & 80S Ribosomes ('ribo_25nm')
  // -------------------------------------------------------------------
  function buildRibo25nm() {
    const k = 'ribo_25nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;

    // Hero Eukaryotic 80S Ribosome (Sculpted Cryo-EM 60S Large + 40S Small with stalks, CP & decoding cleft)
    const c80 = C.clone().add(V(-0.28, 0.06, 0.18));
    const geo60S = synthCryoGeo([
      [0, -1.8, -0.2, 2.2, 0], [-2.5, -1.3, 0.4, 1.85, 1], [2.6, -1.1, -0.4, 1.8, 2],
      [-4.2, 0.8, 0.6, 1.35, 2], [4.3, 0.9, -0.3, 1.35, 1],  // L1 & P stalks
      [0.2, 0.6, -2.5, 1.65, 2],                              // Central protuberance (CP)
      [-1.6, -3.4, 0.8, 1.6, 0], [1.7, -3.2, 0.6, 1.6, 1], [0, -3.6, -1.3, 1.65, 0],
      [-3.1, -2.6, -0.8, 1.45, 2], [3.1, -2.3, 0.9, 1.45, 0], [0, -1.2, 1.8, 1.45, 1],
    ], ['#e89e32', '#ffd26b', '#f27d42'], 0.125, 36, 1.0);
    const m60 = new THREE.Mesh(geo60S, protMat(k, null, { sssColor: '#ffd466', sssIntensity: 0.24 }));
    m60.position.copy(c80).add(V(0, -0.16, 0));
    cell.add(shade(m60, true, true));

    const geo40S = synthCryoGeo([
      [0.1, 2.1, 0.9, 1.75, 0], [-2.2, 2.2, 0.7, 1.45, 1], [2.4, 1.7, 1.1, 1.4, 2],
      [-1.4, 3.6, 0.2, 1.55, 2], [1.3, 3.4, -0.3, 1.4, 0], [-3.4, 3.4, 1.0, 1.15, 1], // head + beak
      [0.2, 1.1, -0.8, 1.4, 1], [2.9, 2.9, 0.3, 1.15, 2],
    ], ['#6474e0', '#9eaaff', '#8c68e8'], 0.125, 34, 1.0);
    const m40 = new THREE.Mesh(geo40S, protMat(k, null, { sssColor: '#b3c0ff', sssIntensity: 0.24 }));
    m40.position.copy(c80).add(V(0, 0.14, 0.10));
    cell.add(shade(m40, true, true));

    // Bold Sculpted Amber mRNA ribbon + color-coded nucleotide pegs threading cleanly through the 40S/60S decoding cleft!
    const mPts = [];
    for (let i = 0; i <= 42; i++) {
      const t = i / 42;
      const x = -1.55 + t * 3.10;
      const y = 0.08 + Math.sin(t * Math.PI * 3.2) * 0.14 - Math.exp(-(((t - 0.45) * 4) ** 2)) * 0.08;
      const z = 0.56 + Math.cos(t * Math.PI * 2.5) * 0.16;
      mPts.push(c80.clone().add(V(x, y, z)));
    }
    const mrnaRibbonMat = physMat(k, { color: MRNA, emissive: '#e07c1c', emissiveIntensity: 0.34, roughness: 0.25, clearcoat: 0.55 });
    cell.add(shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(mPts), () => 0.036, 72, 10), mrnaRibbonMat), true, true));
    const B_MRNA = balls(k, cell, CUT, false);
    rna.rnaAlong(B_MRNA, mPts, MRNA, 0.068);
    B_MRNA.done();

    // Two L-shaped tRNA adaptors docked prominently in the A & P decoding cleft
    const S_TRNA = makeSculptedMesh(protMat(k, null, { sssColor: '#7effdf', sssIntensity: 0.28 }), cell);
    S_TRNA.tube([c80.clone().add(V(-0.18, 0.06, 0.58)), c80.clone().add(V(-0.22, 0.42, 0.44)), c80.clone().add(V(0.06, 0.52, 0.22))], 0.072, 0.058, col('#3de8b8'), col('#00cec9'), 10, true);
    S_TRNA.tube([c80.clone().add(V(0.24, 0.05, 0.60)), c80.clone().add(V(0.32, 0.40, 0.46)), c80.clone().add(V(0.10, 0.50, 0.24))], 0.070, 0.056, col('#68b8ff'), col('#a29bfe'), 10, true);
    S_TRNA.done();

    // Emerging Teal-Cyan Nascent Polypeptide Chain spiraling out of the 60S exit tunnel!
    const polyGroup = new THREE.Group();
    polyGroup.position.copy(c80).add(V(-0.18, -0.78, 0.18));
    const pPts = [];
    for (let i = 0; i <= 26; i++) {
      const t = i / 26;
      const ang = t * Math.PI * 5.0;
      pPts.push(V(Math.cos(ang) * (0.06 + 0.12 * t) - t * 0.24, -t * 0.72, Math.sin(ang) * (0.06 + 0.12 * t) + t * 0.22));
    }
    const polyMat = physMat(k, { color: '#38e8cb', emissive: '#14a892', emissiveIntensity: 0.28, roughness: 0.22, clearcoat: 0.58, sssColor: '#7effec', sssIntensity: 0.28 });
    polyGroup.add(shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(pPts), () => 0.048, 48, 12), polyMat), true, true));
    // Amino-acid bead accents along the nascent peptide
    const aaMs = pPts.filter((_, idx) => idx % 3 === 0).map(p => atS(p, 0.068));
    polyGroup.add(instanced(unitSph, physMat(k, { color: '#8cffec', roughness: 0.24, clearcoat: 0.6 }), aaMs));
    cell.add(polyGroup);
    anim.polypeptide = polyGroup;

    // Companion Bacterial 70S Ribosome (~21 nm, ~0.76x 80S scale) nestled right-rear
    const c70 = C.clone().add(V(0.92, -0.18, -0.58));
    const m50 = new THREE.Mesh(geo60S, protMat(k, null, { sssColor: '#ffe8a8', sssIntensity: 0.2 }));
    m50.position.copy(c70).add(V(0, -0.08, 0));
    m50.scale.setScalar(0.72);
    m50.rotation.y = -0.65;
    const m30 = new THREE.Mesh(geo40S, protMat(k, null, { sssColor: '#b8ccff', sssIntensity: 0.2 }));
    m30.position.copy(c70).add(V(0, 0.08, 0.04));
    m30.scale.setScalar(0.72);
    m30.rotation.y = -0.65;
    cell.add(shade(m50, true, true), shade(m30, true, true));
    placed += 8;
    SITES[k].push(c80.clone(), c70.clone(), polyGroup.position.clone());
  }

  // -------------------------------------------------------------------
  // STOP 7: 10 nm · Protein complexes: ATP synthase & RuBisCO ('enzyme_10nm')
  // -------------------------------------------------------------------
  function buildEnzyme10nm() {
    const k = 'enzyme_10nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;

    // Left hero: Animated Spinning Rotary F1Fo ATP Synthase Turbine (PDB 6OQR)
    const atpC = C.clone().add(V(-0.62, -0.04, 0.14));
    // Wet-gel phospholipid membrane patch disc anchoring the Fo ring
    const memDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.76, 0.76, 0.20, 42),
      gelShellMat(k, {}, '#88b4f0', '#cfe6ff', '#5482d6', {
        atten: 1.5, thickness: 0.32, roughness: 0.12, iridescence: 0.55, sssColor: '#8ad4ff', sssIntensity: 0.26, rx: 4, ry: 2,
      })
    );
    memDisc.position.copy(atpC).add(V(0, -0.58, 0));
    cell.add(memDisc);

    // Spinning Rotor Group (10-stave Fo c-ring + central asymmetric gamma stalk)
    const rotor = new THREE.Group();
    rotor.position.copy(atpC);
    const cRingMat = physMat(k, { color: '#ff8a5c', roughness: 0.28, clearcoat: 0.45, normalMap: protBump, normalScale: new THREE.Vector2(0.28, 0.28), sssColor: '#ffb88c', sssIntensity: 0.24 });
    const staveGeo = new THREE.CapsuleGeometry(0.072, 0.34, 8, 12);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const stv = new THREE.Mesh(staveGeo, cRingMat);
      stv.position.set(Math.cos(a) * 0.28, -0.58, Math.sin(a) * 0.28);
      rotor.add(shade(stv, true, true));
      placed++;
    }
    const gammaPts = [V(0, -0.44, 0), V(0.05, -0.10, 0.04), V(-0.04, 0.26, -0.04), V(0, 0.56, 0)];
    const gammaMat = physMat(k, { color: '#ffe066', emissive: '#d69c18', emissiveIntensity: 0.28, roughness: 0.22, clearcoat: 0.6 });
    rotor.add(shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(gammaPts), t => 0.095 - 0.02 * t, 28, 12), gammaMat), true, true));
    cell.add(rotor);
    anim.atpRotor = rotor;

    // Stationary F1 alpha3-beta3 hexameric catalytic crown (6 cryo-EM pear lobes!)
    const geoLobeA = synthCryoGeo([[0, -1.3, 0, 1.6, 0], [0.4, 0.2, 0.3, 1.9, 0], [0, 1.8, 0, 1.5, 1]], ['#ff9f43', '#ffc978'], 0.115, 22, 1.0);
    const geoLobeB = synthCryoGeo([[0, -1.3, 0, 1.6, 0], [-0.4, 0.2, 0.3, 1.9, 0], [0, 1.8, 0, 1.5, 1]], ['#ff6b6b', '#ffa09e'], 0.115, 22, 1.0);
    const crownMatA = protMat(k, null, { sssColor: '#ffd080', sssIntensity: 0.22 });
    const crownMatB = protMat(k, null, { sssColor: '#ff9696', sssIntensity: 0.22 });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const lobe = new THREE.Mesh(i % 2 === 0 ? geoLobeA : geoLobeB, i % 2 === 0 ? crownMatA : crownMatB);
      lobe.position.copy(atpC).add(V(Math.cos(a) * 0.28, 0.50, Math.sin(a) * 0.28));
      lobe.rotation.y = -a;
      cell.add(shade(lobe, true, true));
      placed++;
    }

    // Peripheral stator clamp arm (a-subunit + b-stalk + OSCP cap)
    const statorPts = [
      atpC.clone().add(V(0.46, -0.62, 0.06)),
      atpC.clone().add(V(0.58, -0.10, 0.10)),
      atpC.clone().add(V(0.52, 0.52, 0.06)),
      atpC.clone().add(V(0.06, 0.88, 0.0)),
    ];
    const statorMat = physMat(k, { color: '#7ee6ff', roughness: 0.28, clearcoat: 0.5, sssColor: '#a8f0ff', sssIntensity: 0.24 });
    cell.add(shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(statorPts), () => 0.062, 32, 12), statorMat), true, true));

    // Right companion: 16-Subunit Fluted RuBisCO Holoenzyme Barrel (L8S8, ~11 nm, PDB 1RCX)
    const rubC = C.clone().add(V(0.84, 0.04, -0.20));
    const rubGrp = new THREE.Group();
    rubGrp.position.copy(rubC);
    const geoRubL = synthCryoGeo([[0, -1.1, 0, 1.05, 0], [0.2, 0.0, 0.35, 1.18, 0], [0, 1.1, 0, 1.05, 1]], ['#1fb884', '#4ee6b2'], 0.115, 22, 1.0);
    const geoRubS = synthCryoGeo([[0, 0, 0, 1.1, 0], [0.55, 0.35, 0, 0.9, 1]], ['#c4f576', '#e8ff9c'], 0.105, 18, 1.0);
    const rubLMat = protMat(k, null, { sssColor: '#66ffbe', sssIntensity: 0.24 });
    const rubSMat = protMat(k, null, { sssColor: '#d8ff8a', sssIntensity: 0.26 });
    // 8 fluted equatorial Large subunits arranged in an octagonal catalytic barrel
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const lMesh = new THREE.Mesh(geoRubL, rubLMat);
      lMesh.position.set(Math.cos(a) * 0.36, i % 2 ? 0.05 : -0.05, Math.sin(a) * 0.36);
      lMesh.rotation.y = -a;
      rubGrp.add(shade(lMesh, true, true));
    }
    // 4+4 Small S8 regulatory crown subunits capping top & bottom
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4;
      for (const sgn of [-1, 1]) {
        const sMesh = new THREE.Mesh(geoRubS, rubSMat);
        sMesh.position.set(Math.cos(a) * 0.24, sgn * 0.40, Math.sin(a) * 0.24);
        sMesh.rotation.y = -a;
        rubGrp.add(shade(sMesh, true, true));
      }
    }
    // Glowing catalytic Mg2+ active-site core inside the central channel
    rubGrp.add(new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 12), physMat(k, { color: '#78ffb8', emissive: '#38e890', emissiveIntensity: 0.72, roughness: 0.2 })));
    cell.add(rubGrp);
    placed += 16;
    SITES[k].push(atpC.clone(), atpC.clone().add(V(0, 0.52, 0)), rubC.clone());
  }

  // -------------------------------------------------------------------
  // STOP 8: 2 nm · B-DNA double helix ('dna_2nm')
  // -------------------------------------------------------------------
  function buildDna2nm() {
    const k = 'dna_2nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;

    const helixGroup = new THREE.Group();
    helixGroup.position.copy(C);
    helixGroup.rotation.z = -0.18;
    cell.add(helixGroup);
    anim.dnaHelix = helixGroup;

    // Exact B-DNA geometry: 10.5 bp/turn, 140° major/minor groove offset, 26 bp showcase
    const N_BP = 26;
    const H_TOTAL = 2.68;
    const RAD = 0.58;
    const TWIST = (2 * Math.PI) / 10.5;
    const GROOVE = (140 * Math.PI) / 180;
    const SEQ = 'ATGCTAGCGATCGATACGCTAGCGAT';

    const s1Pts = [], s2Pts = [];
    const rungMs = [], rungCols = [];
    const jointMs = [], phosMs = [];
    const hbMs = [];

    for (let i = 0; i < N_BP; i++) {
      const y = -H_TOTAL * 0.5 + (i / (N_BP - 1)) * H_TOTAL;
      const ph = i * TWIST;
      const p1 = V(Math.cos(ph) * RAD, y, Math.sin(ph) * RAD);
      const p2 = V(Math.cos(ph + GROOVE) * RAD, y, Math.sin(ph + GROOVE) * RAD);
      s1Pts.push(p1);
      s2Pts.push(p2);

      const b = SEQ[i % SEQ.length];
      const bp = PAIR[b];
      const j1 = p1.clone().lerp(p2, 0.11);
      const j2 = p1.clone().lerp(p2, 0.89);
      const mid1 = p1.clone().lerp(p2, 0.45);
      const mid2 = p1.clone().lerp(p2, 0.55);

      // Color-coded A-T / G-C base-pair half-rungs
      rungMs.push(cylM(j1, mid1, 0.044), cylM(mid2, j2, 0.044));
      rungCols.push(col(BASE[b]), col(BASE[bp]));

      // Silver glycosidic joints & outer phosphate beads
      jointMs.push(atS(j1, 0.068), atS(j2, 0.068));
      phosMs.push(atS(p1, 0.072), atS(p2, 0.072));

      // Hydrogen bond dots (2 for A=T, 3 for G≡C) in the central gap
      const hbCount = (b === 'G' || b === 'C') ? 3 : 2;
      const dir = p2.clone().sub(p1).normalize();
      const perp = across(V(0, 1, 0), dir);
      for (let h = 0; h < hbCount; h++) {
        const off = (h - (hbCount - 1) * 0.5) * 0.036;
        hbMs.push(atS(p1.clone().lerp(p2, 0.5).addScaledVector(perp, off), 0.020));
      }
      placed++;
    }

    const bbMat1 = physMat(k, { color: BACKBONE[0], emissive: '#1e42a8', emissiveIntensity: 0.24, roughness: 0.20, clearcoat: 0.65, sssColor: '#6ea8ff', sssIntensity: 0.26 });
    const bbMat2 = physMat(k, { color: BACKBONE[1], emissive: '#5828b8', emissiveIntensity: 0.24, roughness: 0.20, clearcoat: 0.65, sssColor: '#c294ff', sssIntensity: 0.26 });
    helixGroup.add(
      shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(s1Pts), () => 0.068, 96, 14), bbMat1), true, true),
      shade(new THREE.Mesh(sweepGeo(new THREE.CatmullRomCurve3(s2Pts), () => 0.068, 96, 14), bbMat2), true, true),
    );

    const rungMat = physMat(k, { color: '#ffffff', roughness: 0.26, clearcoat: 0.52 });
    helixGroup.add(shade(instanced(unitCyl, rungMat, rungMs, rungCols), true, true));

    const silverMat = physMat(k, { color: SILVER, roughness: 0.22, metalness: 0.55, clearcoat: 0.6 });
    helixGroup.add(instanced(unitSph, silverMat, jointMs));

    const phosMat = physMat(k, { color: '#ff9e3d', emissive: '#d46a10', emissiveIntensity: 0.24, roughness: 0.24, clearcoat: 0.5 });
    helixGroup.add(instanced(unitSph, phosMat, phosMs));

    const hbMat = physMat(k, { color: '#d8f6ff', emissive: '#90e8ff', emissiveIntensity: 0.55, roughness: 0.2 });
    helixGroup.add(instanced(unitSph, hbMat, hbMs));

    SITES[k].push(C.clone(), C.clone().add(V(0, 0.72, 0)), C.clone().add(V(0, -0.72, 0)));
  }

  // -------------------------------------------------------------------
  // STOP 9: 0.5–1 nm · Biomolecule monomers ('monomer_1nm')
  // -------------------------------------------------------------------
  function buildMonomer1nm() {
    const k = 'monomer_1nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;

    // Unified CPK elemental palette
    const CPK = { C: '#525e73', H: '#eef4ff', O: '#ff4d5c', N: '#4b8aff', P: '#ff9d2e' };
    const RAD = { C: 0.092, H: 0.058, O: 0.086, N: 0.088, P: 0.110 };
    const atomMs = [], atomCols = [], bondMs = [];

    function addMol(origin, atoms, bonds) {
      const pts = atoms.map(([el, x, y, z]) => {
        const p = origin.clone().add(V(x, y, z));
        atomMs.push(atS(p, RAD[el]));
        atomCols.push(col(CPK[el]));
        placed++;
        return p;
      });
      bonds.forEach(([i, j, dbl]) => {
        const a = pts[i], b = pts[j];
        if (!dbl) {
          bondMs.push(cylM(a, b, 0.028));
        } else {
          const dir = b.clone().sub(a).normalize();
          const off = across(V(0, 0, 1), dir).multiplyScalar(0.026);
          bondMs.push(cylM(a.clone().add(off), b.clone().add(off), 0.020), cylM(a.clone().sub(off), b.clone().sub(off), 0.020));
        }
      });
    }

    // 1. D-Glucose chair pyranose hexose ring (top-left)
    const gO = C.clone().add(V(-0.68, 0.56, 0.12));
    addMol(gO, [
      ['C', 0.24, 0.05, 0.02],   // 0 C1
      ['C', 0.12, -0.15, 0.16],  // 1 C2
      ['C', -0.14, -0.12, 0.14], // 2 C3
      ['C', -0.25, 0.08, 0.0],   // 3 C4
      ['C', -0.12, 0.20, -0.16], // 4 C5
      ['O', 0.13, 0.18, -0.12],  // 5 Ring O
      ['C', -0.22, 0.42, -0.24], // 6 C6 (-CH2OH)
      ['O', 0.46, 0.06, 0.08],   // 7 OH-1
      ['O', 0.22, -0.34, 0.26],  // 8 OH-2
      ['O', -0.26, -0.28, 0.26], // 9 OH-3
      ['O', -0.46, 0.10, -0.06], // 10 OH-4
      ['O', -0.08, 0.58, -0.34], // 11 OH-6
      ['H', 0.56, -0.02, 0.14], ['H', 0.34, -0.36, 0.32], ['H', -0.38, -0.28, 0.32], ['H', -0.56, 0.18, -0.02], ['H', -0.16, 0.68, -0.40],
    ], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[4,6],[0,7],[1,8],[2,9],[3,10],[6,11],[7,12],[8,13],[9,14],[10,15],[11,16]]);

    // 2. Amphipathic Phospholipid: polar phosphocholine head + straight & cis-kinked tails (right)
    const pO = C.clone().add(V(0.72, 0.22, 0.06));
    const pAtoms = [
      ['P', 0, 0.56, 0],         // 0 P
      ['O', -0.16, 0.66, 0.08],  // 1 =O
      ['O', 0.16, 0.66, -0.06],  // 2 O-
      ['O', 0, 0.78, 0.04],      // 3 O-choline
      ['N', 0.06, 0.98, 0.06],   // 4 N+ choline
      ['O', 0, 0.36, 0],         // 5 O-glyc
      ['C', -0.12, 0.20, 0.02],  // 6 Glycerol C1
      ['C', 0.12, 0.18, -0.02],  // 7 Glycerol C2
    ];
    const pBonds = [[0,1,true],[0,2],[0,3],[3,4],[0,5],[5,6],[6,7]];
    // Straight saturated acyl tail (left)
    let prev = 6;
    for (let c = 0; c < 6; c++) {
      const idx = pAtoms.length;
      pAtoms.push(['C', -0.16 + (c % 2 ? 0.08 : -0.08), -0.02 - c * 0.18, 0.04]);
      pBonds.push([prev, idx]);
      prev = idx;
    }
    // Cis-unsaturated kinked acyl tail (right)
    prev = 7;
    for (let c = 0; c < 6; c++) {
      const idx = pAtoms.length;
      const kink = c >= 3 ? (c - 2) * 0.15 : 0;
      pAtoms.push(['C', 0.16 + (c % 2 ? -0.07 : 0.07) + kink, -0.02 - c * 0.17 + (c >= 3 ? 0.03 : 0), -0.04]);
      pBonds.push([prev, idx, c === 3]);
      prev = idx;
    }
    addMol(pO, pAtoms, pBonds);

    // 3. L-Alanine Amino Acid (bottom-left)
    const aO = C.clone().add(V(-0.74, -0.56, 0.18));
    addMol(aO, [
      ['C', 0, 0, 0],            // 0 C-alpha
      ['N', -0.22, 0.06, 0.10],  // 1 -NH2
      ['C', 0.22, 0.08, -0.04],  // 2 Carboxyl C
      ['O', 0.36, 0.24, -0.04],  // 3 =O
      ['O', 0.30, -0.12, -0.08], // 4 -OH
      ['C', -0.04, -0.22, -0.10],// 5 Methyl R-group
      ['H', -0.02, 0.16, 0.16], ['H', -0.32, 0.14, 0.18], ['H', -0.32, -0.04, 0.14], ['H', 0.44, -0.14, -0.10],
    ], [[0,1],[0,2],[2,3,true],[2,4],[0,5],[0,6],[1,7],[1,8],[4,9]]);

    // 4. dAMP Nucleotide: Phosphate + Pentose + Adenine Purine (center-lower)
    const nO = C.clone().add(V(-0.02, -0.44, -0.20));
    addMol(nO, [
      ['P', -0.44, 0.12, 0],     // 0 P
      ['O', -0.58, 0.24, 0.06],  // 1 =O
      ['O', -0.46, -0.06, 0.06], // 2 O-
      ['O', -0.24, 0.10, -0.04], // 3 O5'
      ['C', -0.10, -0.04, 0.04], // 4 Pentose C4'
      ['O', 0.04, 0.08, 0.12],   // 5 Pentose O4'
      ['C', 0.16, -0.04, 0.04],  // 6 Pentose C1'
      ['C', 0.08, -0.22, -0.04], // 7 Pentose C2'
      ['C', -0.08, -0.22, -0.04],// 8 Pentose C3'
      ['N', 0.34, 0.04, 0.02],   // 9 Purine N9
      ['C', 0.48, 0.18, 0.0],    // 10 C8
      ['N', 0.62, 0.06, -0.02],  // 11 N7
      ['C', 0.54, -0.10, -0.02], // 12 C5
      ['C', 0.38, -0.12, 0.0],   // 13 C4
      ['C', 0.66, -0.26, -0.04], // 14 C6
      ['N', 0.84, -0.28, -0.05], // 15 -NH2
      ['N', 0.56, -0.40, -0.04], // 16 N1
      ['C', 0.40, -0.38, -0.02], // 17 C2
      ['N', 0.30, -0.24, 0.0],   // 18 N3
    ], [[0,1,true],[0,2],[0,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,4],[6,9],[9,10],[10,11,true],[11,12],[12,13,true],[13,9],[12,14],[14,15],[14,16,true],[16,17],[17,18,true],[18,13]]);

    const atomMat = physMat(k, { color: '#ffffff', roughness: 0.18, metalness: 0.06, clearcoat: 0.72, clearcoatRoughness: 0.14 });
    const bondMat = physMat(k, { color: '#d0dae8', roughness: 0.26, metalness: 0.42, clearcoat: 0.4 });
    cell.add(shade(instanced(unitSph, atomMat, atomMs, atomCols), true, true));
    cell.add(shade(instanced(unitCyl, bondMat, bondMs), true, true));
    SITES[k].push(gO.clone(), pO.clone(), aO.clone(), nO.clone());
  }

  // -------------------------------------------------------------------
  // STOP 10: 0.1–0.3 nm · Biogenic atoms H, C, N, O, P, Mg ('atom_01nm')
  // -------------------------------------------------------------------
  function buildAtom01nm() {
    const k = 'atom_01nm';
    const st = STOP_BY_KEY[k];
    const C = st.pos;

    // 6 Universal Biogenic Atoms with CPK nuclei + shimmering translucent quantum electron shells & p/sp3 orbital lobes
    const ATOMS = [
      { sym: 'H',  pos: V(-0.98,  0.60,  0.22), coreR: 0.082, shellR: 0.26, coreCol: '#f2f7ff', shellCol: '#d6ecff', atten: '#9ad4ff', pLobes: 0 },
      { sym: 'C',  pos: V(-0.04,  0.64, -0.14), coreR: 0.115, shellR: 0.36, coreCol: '#5b6b84', shellCol: '#9de8ff', atten: '#56b4e8', pLobes: 4 },
      { sym: 'N',  pos: V( 0.92,  0.54,  0.18), coreR: 0.112, shellR: 0.35, coreCol: '#4a88ff', shellCol: '#8eb8ff', atten: '#3d74f5', pLobes: 2 },
      { sym: 'O',  pos: V(-0.92, -0.46,  0.16), coreR: 0.108, shellR: 0.34, coreCol: '#ff4e62', shellCol: '#ff9ea8', atten: '#e64258', pLobes: 2 },
      { sym: 'P',  pos: V(-0.02, -0.52,  0.22), coreR: 0.130, shellR: 0.40, coreCol: '#ff9d2e', shellCol: '#ffd088', atten: '#f0821c', pLobes: 3 },
      { sym: 'Mg', pos: V( 0.96, -0.44, -0.08), coreR: 0.142, shellR: 0.45, coreCol: '#3be39a', shellCol: '#9effd2', atten: '#22bf7d', pLobes: 3 },
    ];

    ATOMS.forEach((a, idx) => {
      const p = C.clone().add(a.pos);
      const aGrp = new THREE.Group();
      aGrp.position.copy(p);
      cell.add(aGrp);

      // Glowing CPK atomic nucleus (clustered protons/neutrons look)
      const nucMat = physMat(k, {
        color: a.coreCol, emissive: a.coreCol, emissiveIntensity: 0.48, roughness: 0.22, clearcoat: 0.72,
      });
      aGrp.add(shade(new THREE.Mesh(blobGeo(a.coreR, fbm, 61 + idx * 13, 0.12, 3.2, 2), nucMat), true, true));

      // Shimmering translucent quantum electron probability shell (gelShellMat so look toggle works!)
      const shMat = gelShellMat(k, {}, a.atten, a.shellCol, a.atten, {
        atten: 1.35, thickness: 0.28, roughness: 0.06, iridescence: 0.78, sssColor: a.shellCol, sssIntensity: 0.34, normalScale: 0.08,
      });
      aGrp.add(new THREE.Mesh(shellGeo(V(), () => a.shellR, 36), shMat));

      // Translucent covalent orbital lobes (sp3 / 2p dumbbells) & crisp glowing orbital wave rings
      const orbGrp = new THREE.Group();
      const ringMat = physMat(k, {
        color: a.shellCol, emissive: a.shellCol, emissiveIntensity: 0.95, roughness: 0.15,
      });
      const r1 = new THREE.Mesh(new THREE.TorusGeometry(a.shellR * 1.04, 0.014, 8, 36), ringMat);
      r1.rotation.set(0.75 + idx * 0.3, 0.5 * idx, 0.2);
      orbGrp.add(r1);
      if (a.pLobes >= 2) {
        const r2 = new THREE.Mesh(new THREE.TorusGeometry(a.shellR * 0.96, 0.011, 8, 32), ringMat);
        r2.rotation.set(-0.85, 1.1 + idx * 0.4, 0.6);
        orbGrp.add(r2);
      }
      if (a.pLobes > 0) {
        const lobeMat = physMat(k, {
          color: a.shellCol, emissive: a.atten, emissiveIntensity: 0.58, roughness: 0.16,
        });
        const dirs = a.pLobes === 4
          ? [V(1, 1, 1), V(-1, -1, 1), V(-1, 1, -1), V(1, -1, -1)]
          : a.pLobes === 2
            ? [V(1, 0, 0), V(-1, 0, 0), V(0, 1, 0), V(0, -1, 0)]
            : [V(1, 0, 0), V(-1, 0, 0), V(0, 1, 0), V(0, -1, 0), V(0, 0, 1), V(0, 0, -1)];
        dirs.forEach(d => {
          const dn = d.clone().normalize();
          const lb = new THREE.Mesh(new THREE.SphereGeometry(a.shellR * 0.24, 14, 10), lobeMat);
          lb.scale.set(0.62, 1.45, 0.62);
          lb.position.copy(dn).multiplyScalar(a.shellR * 0.44);
          lb.quaternion.setFromUnitVectors(UP, dn);
          orbGrp.add(lb);
        });
      }
      aGrp.add(orbGrp);
      anim.atomOrbits.push({ grp: orbGrp, speed: 0.45 + idx * 0.14, axis: idx % 2 ? 1 : -1 });
      placed += 2;
      SITES[k].push(p.clone());
    });
  }

  // -------------------------------------------------------------------
  // 1:1 True-Size Pair Comparator Ghosts (NOT registered in REG)
  // Renders an exact linear-ratio ghost twin of stop[i+1] beside stop[i]
  // -------------------------------------------------------------------
  const pairGroup = new THREE.Group();
  pairGroup.visible = false;
  cell.add(pairGroup);
  let pairMode = false;

  function buildPairComparatorGhosts() {
    for (let i = 0; i < STOPS.length - 1; i++) {
      const a = STOPS[i];
      const b = STOPS[i + 1];
      const ratio = b.nm / a.nm; // exact true relative linear scale!
      const twinR = Math.max(0.055, a.visR * ratio);
      const twinPos = a.pos.clone().add(V(a.visR * 1.15 + twinR * 0.7 + 0.18, -a.visR * 0.45 + twinR * 0.45, 0.55));

      const gMat = new THREE.MeshPhysicalMaterial({
        color: b.color,
        emissive: b.color,
        emissiveIntensity: 0.55,
        roughness: 0.18,
        clearcoat: 0.7,
        transparent: true,
        opacity: 0.68,
        wireframe: false,
      });
      // Distinctive silhouette proxy matching stop[i+1] at EXACT 1:1 linear ratio!
      let geo;
      if (b.key === 'ecoli_2um') geo = new THREE.CapsuleGeometry(twinR * 0.48, twinR * 1.05, 10, 20);
      else if (b.key === 'dna_2nm') geo = new THREE.CylinderGeometry(twinR * 0.5, twinR * 0.5, twinR * 2.0, 16);
      else geo = new THREE.SphereGeometry(twinR, 24, 18);

      const twin = new THREE.Mesh(geo, gMat);
      twin.position.copy(twinPos);
      if (b.key === 'ecoli_2um') twin.rotation.z = Math.PI * 0.5;
      pairGroup.add(twin);

      // Luminous glowing halo ring under the 1:1 twin so even tiny ratios pop clearly!
      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(Math.max(0.14, twinR * 1.28), 0.014, 8, 32),
        new THREE.MeshBasicMaterial({ color: b.color, transparent: true, opacity: 0.85 })
      );
      halo.position.copy(twinPos).add(V(0, -twinR - 0.04, 0));
      halo.rotation.x = Math.PI * 0.5;
      pairGroup.add(halo);

      // Precision caliper line linking stop[i] base to its 1:1 twin
      const p0 = a.pos.clone().add(V(0, -a.visR - 0.14, 0.55));
      const p1 = twinPos.clone().add(V(0, -twinR - 0.04, 0));
      const lg = new THREE.BufferGeometry().setFromPoints([
        p0, p1,
        p0.clone().add(V(0, -0.09, 0)), p0.clone().add(V(0, 0.09, 0)),
        p1.clone().add(V(0, -0.09, 0)), p1.clone().add(V(0, 0.09, 0)),
      ]);
      pairGroup.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: '#9fe2ff', transparent: true, opacity: 0.72 })));

      anim.pairGhosts.push({ mesh: twin, halo, mat: gMat, idx: i });
    }
  }

  // -------------------------------------------------------------------
  // Glowing Drifting Molecular Flow Symbols (Opaque-Discard Points Shader
  // so every molecule shines crisply RIGHT THROUGH refractive wet gel!)
  // -------------------------------------------------------------------
  const MOL = {
    photon:  ['Photons (hν)',      '#ffe866', 0, 0.34],
    glucose: ['Glucose (C₆H₁₂O₆)', '#7ef08a', 1, 0.34],
    atp:     ['ATP energy',        '#ffcf52', 2, 0.34],
    o2:      ['Oxygen (O₂)',       '#64d8ff', 3, 0.30],
    mrna:    ['mRNA strands',      '#ffb35c', 4, 0.36],
    amino:   ['Amino acids',       '#ff8eb8', 5, 0.30],
    proton:  ['Protons (H⁺)',      '#7ef7ff', 6, 0.28],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0e1320';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.05, ...P(0.5, 0.5), s * 0.58);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.55).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const ballsDraw = list => {
      g.strokeStyle = ink; g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const lineDraw = (pts, w) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    if (k === 0) {
      // Photon starburst wave
      lineDraw(Array.from({ length: 15 }, (_, i) => [0.14 + i * 0.052, 0.5 + 0.20 * Math.sin(i * 0.95)]), 0.11);
      ballsDraw([[0.82, 0.5, 0.13]]);
    } else if (k === 1) {
      // Glucose hexose ring
      const hex = r => {
        g.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = ((i + 0.5) / 6) * Math.PI * 2;
          g[i ? 'lineTo' : 'moveTo'](...P(0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)));
        }
        g.closePath();
      };
      hex(0.36); g.lineWidth = s * 0.11; g.strokeStyle = ink; g.stroke(); g.fillStyle = gr; g.fill();
      g.globalCompositeOperation = 'destination-out'; hex(0.14); g.fill();
      g.globalCompositeOperation = 'source-over'; g.lineWidth = s * 0.06; g.stroke();
    } else if (k === 2) {
      // ATP: adenosine + 3 phosphates
      ballsDraw([[0.62, 0.5, 0.09], [0.76, 0.5, 0.09], [0.89, 0.5, 0.08], [0.33, 0.5, 0.22]]);
    } else if (k === 3) {
      // O2 diatomic
      ballsDraw([[0.34, 0.5, 0.20], [0.66, 0.5, 0.20]]);
    } else if (k === 4) {
      // mRNA strand
      lineDraw(Array.from({ length: 17 }, (_, i) => [0.12 + i * 0.0475, 0.5 + 0.18 * Math.sin(i * 0.78)]), 0.10);
    } else if (k === 5) {
      // Amino acid diamond
      g.beginPath();
      [[0.5, 0.18], [0.82, 0.5], [0.5, 0.82], [0.18, 0.5]].forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      g.closePath(); g.lineWidth = s * 0.11; g.strokeStyle = ink; g.stroke(); g.fillStyle = gr; g.fill();
    } else {
      // Proton H+ glowing orb with '+'
      ballsDraw([[0.5, 0.5, 0.28]]);
      g.beginPath(); g.moveTo(...P(0.36, 0.5)); g.lineTo(...P(0.64, 0.5)); g.moveTo(...P(0.5, 0.36)); g.lineTo(...P(0.5, 0.64));
      g.lineWidth = s * 0.08; g.strokeStyle = ink; g.stroke();
    }
    g.restore();
  }

  // 4x4 white shaded atlas tinted per-molecule in opaque-discard Points shader (matches animal_cell_realistic.ts!)
  const ATLAS = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d');
    for (let k = 0; k < 7; k++) glyph(g, k, (k % 4) * 128 + 10, Math.floor(k / 4) * 128 + 10, 108, '#ffffff');
    return new THREE.CanvasTexture(c);
  })();

  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: { value: 1 }, uAtlas: { value: ATLAS } },
    vertexShader: `attribute float size, glyph, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vCol = icol; vG = glyph; vFade = fade;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.08, -mvPosition.z), 0., 46.);
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

  const FLOW_MAX = 480;
  const fPos = new Float32Array(FLOW_MAX * 3);
  const fSize = new Float32Array(FLOW_MAX);
  const fCol = new Float32Array(FLOW_MAX * 3);
  const fGly = new Float32Array(FLOW_MAX);
  const fFade = new Float32Array(FLOW_MAX).fill(1);
  const flowGeo = new THREE.BufferGeometry();
  [['position', fPos, 3], ['size', fSize, 1], ['icol', fCol, 3], ['glyph', fGly, 1], ['fade', fFade, 1]].forEach(([nm, arr, d]) => {
    flowGeo.setAttribute(nm, new THREE.BufferAttribute(arr, d).setUsage(THREE.DynamicDrawUsage));
  });
  const flowPts = new THREE.Points(flowGeo, flowMat);
  flowPts.frustumCulled = false;
  cell.add(flowPts);

  const live = [];
  const free = [];
  for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  let flowsOn = true, flowSpeed = 1, fClock = 0, molHi = null, hi = null;

  function emitFlow(type, pts, tags, dur = 3.2) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop();
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.08 });
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
  }

  const pickSite = (k, fb = V()) => (SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone());
  const STREAM_TIMERS = [
    // Sunlight photons streaming into Plant Cell chloroplasts
    { rate: 2.0, acc: 0.3, go: () => { const dst = pickSite('plant_100um', STOPS[0].pos); emitFlow('photon', [dst.clone().add(V(-1.4, 2.1, 1.3)), dst.clone().add(V(-0.4, 0.9, 0.5)), dst], ['plant_100um'], 2.4); } },
    // O2 released by Plant Cell and feeding Animal & Yeast mitochondria
    { rate: 1.8, acc: 0.5, go: () => { const a = STOPS[0].pos.clone().add(V(0.5, 0.5, 0.4)); const b = (rand() < 0.6 ? STOPS[1] : STOPS[2]).pos.clone(); emitFlow('o2', [a, a.clone().lerp(b, 0.5).add(V(0, 1.1, 0.8)), b], ['plant_100um', 'animal_20um', 'yeast_5um'], 3.5); } },
    // Glucose flowing from Plant Cell & Monomers to cellular consumers
    { rate: 1.9, acc: 0.2, go: () => { const src = rand() < 0.55 ? STOPS[0].pos : STOPS[9].pos; const dstStop = STOPS[1 + Math.floor(rand() * 4)]; emitFlow('glucose', [src.clone().add(V(0, 0.3, 0.5)), src.clone().lerp(dstStop.pos, 0.5).add(V(0, 1.35, 1.0)), dstStop.pos.clone()], ['plant_100um', dstStop.key, 'monomer_1nm'], 3.8); } },
    // ATP energy bursting from Animal cell, Yeast, E. coli, Mycoplasma & spinning ATP synthase!
    { rate: 2.6, acc: 0.7, go: () => { const idx = [1, 2, 3, 4, 7][Math.floor(rand() * 5)]; const src = STOPS[idx].pos.clone(); emitFlow('atp', [src, src.clone().add(V(rr(-0.7, 0.7), rr(0.5, 1.2), rr(0.3, 1.0))), src.clone().add(V(rr(-1.3, 1.3), rr(0.9, 1.7), rr(0.2, 1.1)))], [STOPS[idx].key], 2.8); } },
    // mRNA flowing from DNA / Nucleus / Virus into 70S & 80S Ribosomes
    { rate: 1.9, acc: 0.4, go: () => { const srcIdx = rand() < 0.5 ? 8 : rand() < 0.6 ? 5 : 1; const a = STOPS[srcIdx].pos.clone(); const b = STOPS[6].pos.clone(); emitFlow('mrna', [a, a.clone().lerp(b, 0.5).add(V(0, 1.15, 0.9)), b], [STOPS[srcIdx].key, 'ribo_25nm'], 3.3); } },
    // Amino acids arriving at Ribosomes & Monomer constellation
    { rate: 2.0, acc: 0.6, go: () => { const a = STOPS[9].pos.clone(); const b = STOPS[6].pos.clone(); emitFlow('amino', [a, a.clone().lerp(b, 0.5).add(V(0, -0.95, 1.1)), b], ['monomer_1nm', 'ribo_25nm'], 3.4); } },
    // Protons H+ driving rotary ATP synthase & orbiting biogenic atoms
    { rate: 2.4, acc: 0.1, go: () => { if (rand() < 0.6) { const c = STOPS[7].pos.clone().add(V(-0.62, -0.04, 0.14)); emitFlow('proton', [c.clone().add(V(rr(-0.4, 0.4), -1.25, rr(-0.2, 0.5))), c.clone().add(V(0, -0.55, 0.22)), c.clone().add(V(rr(-0.4, 0.4), 0.72, rr(0.1, 0.5)))], ['enzyme_10nm', 'atom_01nm'], 2.5); } else { const c = STOPS[10].pos.clone(); emitFlow('proton', [c.clone().add(V(-0.9, 0.7, 0.5)), c.clone().add(V(0.1, 0.1, 0.7)), c.clone().add(V(0.9, -0.5, 0.4))], ['atom_01nm'], 2.6); } } },
  ];

  function updateFlows(dt) {
    fClock += dt;
    if (dt > 0) {
      STREAM_TIMERS.forEach(s => {
        s.acc += dt * s.rate;
        while (s.acc >= 1) { s.acc--; s.go(); }
      });
    }
    const w = fClock;
    const q = V();
    const anyHi = molHi || hi;
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k];
      const base = MOL[p.type][3];
      p.t += dt / p.dur;
      if (p.t >= 1) {
        live[k] = live[live.length - 1];
        live.pop();
        free.push(p.i);
        fSize[p.i] = 0;
        continue;
      }
      p.curve.getPointAt(p.t, q);
      const amp = p.wob * Math.sin(Math.PI * p.t);
      q.x += amp * Math.sin(w * 4.8 + p.ph);
      q.y += amp * Math.cos(w * 4.1 + p.ph);
      q.z += amp * Math.sin(w * 4.5 + p.ph * 1.6);
      const s = base * Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = s * (anyHi ? (lit ? 1.45 : 0.55) : 1);
      fFade[p.i] = anyHi && !lit ? 0.28 : 1;
    }
    flowGeo.attributes.position.needsUpdate = flowGeo.attributes.size.needsUpdate = flowGeo.attributes.fade.needsUpdate = true;
  }

  // -------------------------------------------------------------------
  // Resize & Dynamic Impostor Scaling
  // -------------------------------------------------------------------
  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    bloom.resolution.set(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    lens.uniforms.uRes.value.set(innerWidth, innerHeight);
    const s = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan((camera.fov * Math.PI) / 360));
    impMats.forEach(m => { m.uniforms.uScale.value = s; });
    controls.maxDistance = 125 * Math.max(1, 1.45 / camera.aspect);
  }
  addEventListener('resize', resize);

  // -------------------------------------------------------------------
  // Legend, Flows HUD & Bottom-Center Logarithmic Scale Rail HUD
  // -------------------------------------------------------------------
  const legend = document.getElementById('legend');
  const legendItems = new Map();
  PARTS.forEach(([k, name, hex], idx) => {
    const it = document.createElement('div');
    it.className = 'it';
    const sw = document.createElement('span');
    sw.className = 'sw';
    sw.style.background = hex;
    const t = document.createElement('span');
    t.textContent = name;
    it.append(sw, t);
    legend.append(it);
    legendItems.set(k, it);
    it.onmouseenter = () => setHi(k);
    it.onmouseleave = () => setHi(null);
    it.onclick = () => {
      setScaleIndex(idx, true);
      flyTo({ part: k, dist: 1.05, dur: 1.05 });
    };
  });

  const keyEl = document.createElement('div');
  keyEl.className = 'key';
  keyEl.innerHTML =
    `<div class="row">Bases ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>mRNA</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Explore 6 powers of 10 (100 µm → 0.1 nm). Hover any stop on the left for its scale & structure, slide the rail below to descend logarithmically, or toggle 1:1 Pair Comparator to see exact relative sizes.';
  tipBox.textContent = TIP0;

  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div');
    it.className = 'mol';
    const cv = document.createElement('canvas');
    cv.width = cv.height = 44;
    glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
    const t = document.createElement('span');
    t.textContent = name;
    it.append(cv, t);
    document.getElementById('mols').append(it);
    it.onmouseenter = () => { molHi = k; };
    it.onmouseleave = () => { molHi = null; };
  });

  function showInfo(k) {
    const inf = k && INFO[k];
    tipBox.replaceChildren();
    if (!inf) { tipBox.textContent = TIP0; return; }
    const b = document.createElement('b');
    b.textContent = PARTS.find(p => p[0] === k)?.[1] ?? k;
    tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Scale: ${inf[1]}`);
  }

  function setHi(k) {
    if (hi && REG[hi]) {
      REG[hi].mats.forEach(m => { m.emissive.copy(m.userData.e0); m.emissiveIntensity = m.userData.i0; });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) {
      REG[hi].mats.forEach(m => {
        m.userData.e0 ??= m.emissive.clone();
        m.userData.i0 ??= m.emissiveIntensity;
      });
    }
    showInfo(hi);
  }
  const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#9fd8ff');

  // Scale Rail HUD wiring
  const scaleSlider = document.getElementById('scaleSlider');
  const scaleBarLabel = document.getElementById('scaleBarLabel');
  const scaleCaliper = document.getElementById('scaleCaliper');
  const imagingBadge = document.getElementById('imagingBadge');
  const pairBtn = document.getElementById('pairBtn');
  const pairNote = document.getElementById('pairNote');
  const scaleTicksEl = document.getElementById('scaleTicks');
  let activeStopVal = 0;

  const tickSpans = STOPS.map((st, idx) => {
    const sp = document.createElement('span');
    sp.textContent = st.tick;
    sp.onclick = () => {
      setScaleIndex(idx, true);
      flyTo({ part: st.key, dist: 1.05, dur: 0.95 });
    };
    scaleTicksEl.append(sp);
    return sp;
  });

  function formatNm(nm) {
    if (nm >= 1000) {
      const um = nm / 1000;
      return `${um >= 10 ? Math.round(um) : +um.toFixed(1)} µm`;
    }
    if (nm >= 1) return `${nm >= 10 ? Math.round(nm) : +nm.toFixed(1)} nm`;
    return `${nm.toFixed(2)} nm (${(nm * 10).toFixed(1)} Å)`;
  }

  function updateScaleHud(val) {
    activeStopVal = Math.max(0, Math.min(10, val));
    const i0 = Math.floor(activeStopVal);
    const i1 = Math.min(10, i0 + 1);
    const f = activeStopVal - i0;
    const exp = STOPS[i0].exp + (STOPS[i1].exp - STOPS[i0].exp) * f;
    const nm = Math.pow(10, exp + 9);
    const nearestIdx = Math.round(activeStopVal);
    const st = STOPS[nearestIdx];

    // Live calibrated scale bar label & caliper width pulsing subtly across sub-decade
    const ang = nm * 10;
    const angStr = ang >= 1e5 ? `${(ang / 1e5).toFixed(1)}×10⁵ Å` : ang >= 1000 ? `${Math.round(ang).toLocaleString()} Å` : `${+ang.toFixed(1)} Å`;
    scaleBarLabel.textContent = f < 0.05 || f > 0.95 ? st.label : `${formatNm(nm)} · 10^${exp.toFixed(1)} m (${angStr})`;
    scaleCaliper.style.width = `${Math.round(34 + 18 * (1 - ((exp + 10) % 1)))}px`;

    // Imaging limit badge: Naked Eye (~100 µm) / Light Microscope (~200 nm) / Cryo-EM & X-Ray (~0.1 nm)
    imagingBadge.classList.remove('light', 'cryo');
    if (nm >= 45000) {
      imagingBadge.textContent = 'Naked Eye (~100 µm)';
    } else if (nm >= 200) {
      imagingBadge.textContent = 'Light Microscope (~200 nm)';
      imagingBadge.classList.add('light');
    } else {
      imagingBadge.textContent = 'Cryo-EM & X-Ray (~0.1 nm)';
      imagingBadge.classList.add('cryo');
    }

    tickSpans.forEach((sp, i) => sp.classList.toggle('on', i === nearestIdx));
    legendItems.forEach((el, key) => el.classList.toggle('active', key === st.key));

    if (pairMode) {
      const next = STOPS[Math.min(10, nearestIdx + 1)];
      if (nearestIdx < 10) {
        const lin = st.nm / next.nm;
        const vol = lin ** 3;
        const volStr = vol >= 1e6 ? `${(vol / 1e6).toFixed(1)}M×` : vol >= 1000 ? `${Math.round(vol).toLocaleString()}×` : `${Math.round(vol)}×`;
        pairNote.textContent = `1:1 Pair: ${st.tick} vs ${next.tick} — ${+lin.toFixed(1)}× wider (${volStr} volume)`;
      } else {
        pairNote.textContent = '1:1 Anchor: 0.1–0.3 nm atoms — 1,000,000× narrower than a 100 µm plant cell';
      }
      pairNote.classList.add('show');
    } else {
      pairNote.classList.remove('show');
    }
  }

  function setScaleIndex(val, syncSlider = false) {
    const v = Math.max(0, Math.min(10, val));
    if (syncSlider && scaleSlider) scaleSlider.value = String(v);
    updateScaleHud(v);
  }

  function poseForScaleVal(val) {
    const i0 = Math.floor(val);
    const i1 = Math.min(10, i0 + 1);
    const f = val - i0;
    const t = STOPS[i0].pos.clone().lerp(STOPS[i1].pos, f);
    const r = STOPS[i0].focusR + (STOPS[i1].focusR - STOPS[i0].focusR) * f;
    const dir = V(0.24 - (val / 10) * 0.42, 0.22, 0.94).normalize();
    const dist = (r * (pairMode ? 1.24 : 1.05)) / Math.sin((camera.fov * Math.PI) / 360);
    return { p: t.clone().addScaledVector(dir, dist), t };
  }

  scaleSlider.oninput = () => {
    const v = +scaleSlider.value;
    updateScaleHud(v);
    freeCamera();
    const { p, t } = poseForScaleVal(v);
    cell.updateMatrixWorld();
    camera.position.copy(cell.localToWorld(p.clone()));
    controls.target.copy(cell.localToWorld(t.clone()));
  };

  function setPairMode(on, focusNow = false) {
    pairMode = !!on;
    pairGroup.visible = pairMode;
    pairBtn.textContent = `1:1 Pair: ${pairMode ? 'on' : 'off'}`;
    pairBtn.classList.toggle('on', pairMode);
    updateScaleHud(activeStopVal);
    if (pairMode && focusNow && curView === 'overview') {
      const idx = Math.min(9, Math.round(activeStopVal));
      flyTo({ part: STOPS[idx].key, dist: 1.25, dur: 0.95 });
    }
  }
  pairBtn.onclick = () => setPairMode(!pairMode, true);

  // -------------------------------------------------------------------
  // Exact 6 VIEWS: overview, cells, microbes, viruses, molecules, atoms
  // Framed cleanly inside the unobstructed center stage between HUD rails
  // -------------------------------------------------------------------
  const VIEWS = [
    ['overview',  V(0.0,  11.2, 88.0), V(0.0,  -0.30, -1.2)],
    ['cells',     V(-12.2, 5.0, 23.6), V(-15.8, 0.85,  0.3)],
    ['microbes',  V(-3.4,  3.4, 12.6), V(-5.9,  0.35, -2.3)],
    ['viruses',   V(4.2,   2.8, 12.4), V(1.9,  -0.10, -2.7)],
    ['molecules', V(10.6,  3.2, 18.8), V(8.1,  -0.45, -1.9)],
    ['atoms',     V(15.6,  2.3, 15.6), V(17.7, -1.00,  1.1)],
  ];
  const VIEW_DEFAULT_STOP = { overview: 0, cells: 1, microbes: 3, viruses: 5, molecules: 7, atoms: 10 };

  let view = 0, curView = 'overview', motion = true, sway = 0, last = performance.now();

  document.getElementById('view').onclick = e => {
    freeCamera();
    view = (view + 1) % VIEWS.length;
    const [name, p, t] = VIEWS[view];
    curView = name;
    camera.position.copy(cell.localToWorld(p.clone()));
    controls.target.copy(cell.localToWorld(t.clone()));
    e.target.textContent = `View: ${name}`;
    setScaleIndex(VIEW_DEFAULT_STOP[name] ?? 0, true);
  };
  document.getElementById('look').onclick = e => {
    organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length];
    applyLook();
    e.target.textContent = `Membrane: ${organelleLook}`;
  };
  document.getElementById('cut').onclick = e => {
    cutOn = !cutOn;
    caps.visible = cutOn;
    e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow').onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = flowsOn;
    e.target.textContent = `Metabolism: ${flowsOn ? 'on' : 'off'}`;
  };
  const speed = document.getElementById('speed');
  const spd = document.getElementById('spd');
  speed.oninput = () => {
    flowSpeed = 2 ** +speed.value;
    spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`;
  };
  speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
  document.getElementById('motion').onclick = e => {
    motion = !motion;
    e.target.textContent = motion ? 'Pause' : 'Play';
  };
  document.getElementById('snap').onclick = () => {
    composer.render();
    const a = document.createElement('a');
    a.download = 'powers-of-10-scale-explorer.png';
    a.href = renderer.domElement.toDataURL('image/png');
    a.click();
  };

  // -------------------------------------------------------------------
  // Free-Look Controls (WASD + mouse look + raycast click-to-pick)
  // -------------------------------------------------------------------
  const held = new Set();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !e.target.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k);
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), stepVec = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  controls.enableRotate = false;
  let lookFrom = null, downAt = null;

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
        const hit = ray.intersectObjects(cell.children, true).find(h => h.object.visible && h.object !== flowPts && map.has(h.object.material));
        if (hit) {
          const k = map.get(hit.object.material);
          setHi(k);
          const st = STOP_BY_KEY[k];
          if (st) setScaleIndex(st.idx, true);
          if (EMBED) toExplorer({ type: 'pick', key: k });
        }
      }
      lookFrom = downAt = null;
    });
  }

  function freeMove(dt) {
    if (!held.size || tour.on) return;
    camera.getWorldDirection(fwd);
    side.crossVectors(fwd, camera.up).normalize();
    stepVec.set(0, 0, 0)
      .addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s')))
      .addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (stepVec.lengthSq() < 1e-6) return;
    stepVec.normalize().multiplyScalar(dt * Math.max(1.8, camera.position.distanceTo(controls.target) * 0.5));
    camera.position.add(stepVec);
    controls.target.add(stepVec);
  }

  // -------------------------------------------------------------------
  // Cinema Dolly Camera Flights (tourFrame), pointsOf, focusOf, ghost, blink
  // -------------------------------------------------------------------
  const tour = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = x => x * x * x * (x * (x * 6 - 15) + 10);

  function poseOf(m) {
    if (m.view) {
      const v = VIEWS.find(x => x[0] === m.view);
      if (v) {
        curView = m.view;
        setScaleIndex(VIEW_DEFAULT_STOP[m.view] ?? 0, true);
        return { p: v[1].clone(), t: v[2].clone() };
      }
      return null;
    }
    const partKey = m.part || m.focus;
    if (partKey) {
      const f = focusOf(partKey);
      if (f) {
        const st = STOP_BY_KEY[partKey];
        if (st) setScaleIndex(st.idx, true);
        return { p: f.c.clone().addScaledVector(f.dir, ((m.dist ?? 1) * f.r) / Math.sin((camera.fov * Math.PI) / 360)), t: f.c.clone() };
      }
      return null;
    }
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0, -0.25, -1.2])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    cell.updateMatrixWorld();
    tour.from = { p: cell.worldToLocal(camera.position.clone()), t: cell.worldToLocal(controls.target.clone()) };
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

  const fp = V(), ft = V(), offA = V(), offB = V(), dirBlend = V(), look = V(), right = V();
  function tourFrame(dt) {
    if (!tour.on) return;
    const { from, to } = tour;
    if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
    else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, ((tour.orbit * Math.PI) / 180) * dt).add(to.t);

    const e = smoother(tour.t);
    ft.lerpVectors(from.t, to.t, e);
    offA.copy(from.p).sub(from.t);
    offB.copy(to.p).sub(to.t);
    const ra = Math.max(0.25, offA.length());
    const rb = Math.max(0.25, offB.length());
    offA.normalize();
    offB.normalize();
    const ang = Math.acos(Math.min(1, Math.max(-1, offA.dot(offB))));
    if (ang < 1e-3 || ang > 3.1) dirBlend.lerpVectors(offA, offB, e).normalize();
    else dirBlend.copy(offA).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(offB, Math.sin(e * ang)).divideScalar(Math.sin(ang));

    const span = from.t.distanceTo(to.t);
    const logDist = Math.pow(ra, 1 - e) * Math.pow(rb, e);
    const pullBack = Math.min(14, span * 0.28) * Math.sin(Math.PI * e);
    fp.copy(ft).addScaledVector(dirBlend, logDist + pullBack);
    fp.y += Math.min(2.2, span * 0.05) * Math.sin(Math.PI * e);

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

  const POINTS = {};
  function pointsOf(vName = 'overview') {
    if (POINTS[vName]) return POINTS[vName];
    const P = {};
    STOPS.forEach(st => {
      P[st.key] = st.pos.clone().add(V(0, st.visR * 0.42, 0.25));
    });
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k) {
    if (k in FOCUS) return FOCUS[k];
    const st = STOP_BY_KEY[k];
    if (!st) return (FOCUS[k] = null);
    const dir = V(0.24 - (st.idx / 10) * 0.42, 0.22, 0.94).normalize();
    return (FOCUS[k] = { c: st.pos.clone(), r: st.focusR, dir });
  }

  const saved = new Map();
  const hidden = [];
  let ghostArgs = null, OBJS = null, matMap = null;

  function OBJS_BY_MAT() {
    if (!matMap) {
      matMap = new Map();
      Object.entries(REG).forEach(([k, r]) => [...r.mats, ...r.imp].forEach(m => { if (!matMap.has(m)) matMap.set(m, k); }));
    }
    return matMap;
  }
  function objsOf() {
    const of = OBJS_BY_MAT(), out = {};
    cell.traverse(o => { const k = o.material && of.get(o.material); if (k) (out[k] ??= []).push(o); });
    return out;
  }
  function ghost(keep = null, amount = 0.1, hide = false) {
    saved.forEach((v, m) => { Object.assign(m, v); if (m.uniforms?.uDim) m.uniforms.uDim.value = 1; m.needsUpdate = true; });
    saved.clear();
    hidden.forEach(o => { o.visible = true; });
    hidden.length = 0;
    ghostArgs = keep ? [keep, amount, hide] : null;
    if (!keep) return;
    const K = new Set(keep);
    Object.entries(REG).forEach(([k, r]) => {
      if (K.has(k)) return;
      if (hide) {
        (OBJS ??= objsOf())[k]?.forEach(o => { if (o.visible) { o.visible = false; hidden.push(o); } });
        return;
      }
      r.mats.forEach(m => {
        if (saved.has(m)) return;
        saved.set(m, { transparent: m.transparent, opacity: m.opacity, depthWrite: m.depthWrite, ...('transmission' in m && { transmission: m.transmission }) });
        m.transparent = true;
        m.opacity = Math.min(m.opacity, amount);
        m.depthWrite = false;
        if ('transmission' in m) m.transmission = 0;
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

  let blinkT0 = null, blinkN = 3;
  function blink(k, n = 3) {
    setHi(k);
    if (hi) { blinkT0 = performance.now(); blinkN = n; }
  }
  const hiLevel = now => {
    if (blinkT0 === null) return 0.55 + 0.45 * Math.sin(now / 180);
    const t = (now - blinkT0) / 1000;
    return t < blinkN / 1.5 ? 0.5 - 0.5 * Math.cos(t * 3 * Math.PI) : 0.3 + 0.06 * Math.sin(now / 400);
  };

  function setState(m) {
    const g = ghostArgs;
    if (g) ghost(null);
    if (m.look && m.look !== organelleLook) { organelleLook = m.look; applyLook(); document.getElementById('look').textContent = `Membrane: ${organelleLook}`; }
    if (m.cut !== undefined && m.cut !== cutOn) { cutOn = m.cut; caps.visible = cutOn; document.getElementById('cut').textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; }
    if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow').click();
    if (m.motion !== undefined) { motion = m.motion; document.getElementById('motion').textContent = motion ? 'Pause' : 'Play'; }
    if (m.pair !== undefined) setPairMode(!!m.pair, false);
    if (g) ghost(...g);
  }

  // -------------------------------------------------------------------
  // Living Animation Loop
  // -------------------------------------------------------------------
  const lightView = V();
  let animClock = 0;

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const camDist = camera.position.distanceTo(controls.target);

    if (motion) {
      // Gentle macro sway across the showcase arc that eases completely still up close
      const swayGain = Math.min(1, Math.max(0, (camDist - 12) / 28));
      sway += dt * swayGain;
      cell.rotation.y = 0.065 * Math.sin(sway * 0.14);

      animClock += dt * flowSpeed;
      // Continuous rotary F1Fo ATP synthase turbine spin
      if (anim.atpRotor) anim.atpRotor.rotation.y = animClock * 2.1;
      // Gentle iconic B-DNA axial rotation
      if (anim.dnaHelix) anim.dnaHelix.rotation.y = animClock * 0.38;
      // Shimmering quantum electron orbital rotation
      anim.atomOrbits.forEach(o => { o.grp.rotation.y = animClock * o.speed * o.axis; o.grp.rotation.x = Math.sin(animClock * 0.4 * o.speed) * 0.35; });
      // Living bacterial flagella wave undulation
      anim.flagella.forEach(f => { f.mesh.rotation.x = Math.sin(animClock * 2.8 + f.phase) * 0.14; f.mesh.rotation.z = Math.cos(animClock * 2.1 + f.phase) * 0.06; });
      // Emerging polypeptide gentle sway
      if (anim.polypeptide) anim.polypeptide.rotation.z = Math.sin(animClock * 1.4) * 0.09;
    }

    // Subtle pulse on active scale station ring & pair comparator twins
    const activeIdx = Math.round(activeStopVal);
    anim.stationRings.forEach(r => {
      const isAct = r.idx === activeIdx;
      const pulse = isAct ? 1.08 + 0.06 * Math.sin(now / 260) : 1.0;
      r.mesh.scale.setScalar(r.baseScale * pulse);
      r.mat.emissiveIntensity = isAct ? 0.92 : 0.42;
    });
    if (pairMode) {
      anim.pairGhosts.forEach(g => {
        const isAct = g.idx === activeIdx;
        g.mat.emissiveIntensity = isAct ? 0.72 + 0.25 * Math.sin(now / 240) : 0.45;
      });
    }

    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.72, Math.min(2.6, camDist / 20));
    cell.updateMatrixWorld();
    updateCut();

    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });

    if (hi && REG[hi]) {
      const lvl = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach(m => {
        const gain = m.transmission > 0.5 ? 0.42 : 1.0;
        m.emissive.copy(c);
        m.emissiveIntensity = (0.22 + 0.65 * lvl) * gain;
      });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = lvl; });
    }

    lens.uniforms.uTime.value = now / 1000;
    freeMove(dt);
    controls.update();
    tourFrame(dt);
    composer.render();
    if (EMBED) embedFrame();
  }

  async function shot(pos, target, name) {
    const p0 = camera.position.clone(), t0 = controls.target.clone();
    camera.position.copy(pos); controls.target.copy(target); camera.lookAt(target); camera.updateMatrixWorld();
    cell.updateMatrixWorld(); updateCut();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    composer.render();
    const blob = await new Promise(r => renderer.domElement.toBlob(r, 'image/png'));
    camera.position.copy(p0); controls.target.copy(t0); camera.lookAt(t0); composer.render();
    await fetch('/save?name=' + name, { method: 'POST', body: blob });
    return name;
  }

  function build() {
    buildLogarithmicRail();
    buildPlant100um();
    buildAnimal20um();
    buildYeast5um();
    buildEcoli2um();
    buildMyco300nm();
    buildVirus100nm();
    buildRibo25nm();
    buildEnzyme10nm();
    buildDna2nm();
    buildMonomer1nm();
    buildAtom01nm();
    buildPairComparatorGhosts();
    updateScaleHud(0);
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    resize();
    renderer.setAnimationLoop(frame);
    document.getElementById('busy').style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------
  // Cell Explorer Embed Bridge (postMessage) & window.__cell Contract
  // -------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts = [], tagSeq = 0, sentReady = false;
  const scr = V();

  function embedFrame() {
    if (!sentReady) {
      sentReady = true;
      const mols = Object.entries(MOL).map(([k, [name, colour, g]]) => {
        const cv = document.createElement('canvas'); cv.width = cv.height = 44;
        glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
        return [k, name, cv.toDataURL()];
      });
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS });
    }
    const w = innerWidth, h = innerHeight;
    toExplorer({
      type: 'pts',
      seq: tagSeq,
      pts: tagPts.map(p => {
        if (!p) return null;
        scr.copy(p); cell.localToWorld(scr); scr.project(camera);
        return [(scr.x * 0.5 + 0.5) * w, (-scr.y * 0.5 + 0.5) * h, scr.z < 1];
      }),
    });
  }

  const say = () => toExplorer({ type: 'state', motion, look: organelleLook, cut: cutOn, flow: flowsOn, pair: pairMode });

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
        document.getElementById('view').textContent = `View: ${name}`;
        setScaleIndex(VIEW_DEFAULT_STOP[name] ?? 0, true);
        const P = pointsOf(m.view);
        tagPts = (m.points || []).map(k => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'track' || m.cmd === 'tags') {
        const list = m.points ?? m.tags ?? [];
        tagPts = list.map(x => {
          const [v, k] = Array.isArray(x) ? x : [m.view ?? 'overview', x];
          return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k] ?? focusOf(k)?.c) ?? null;
        });
        tagSeq = m.seq;
      }
      if (m.cmd === 'fly' && !flyTo(m)) toExplorer({ type: 'arrived', seq: m.seq ?? 0, missed: true });
      if (m.cmd === 'free') freeCamera();
      if (m.cmd === 'blink') { if (m.key) blink(m.key, m.n ?? 3); else setHi(null); }
      if (m.cmd === 'ghost') ghost(m.keep || m.keys || null, m.amount ?? 0.1, !!m.hide);
      if (m.cmd === 'set' || m.cmd === 'state') setState(m);
      if (m.cmd === 'hi') { blinkT0 = null; setHi(m.key); }
      if (m.cmd === 'mol') molHi = m.key;
      if (m.cmd === 'motion') document.getElementById('motion').click();
      if (m.cmd === 'look') document.getElementById('look').click();
      if (m.cmd === 'cut') document.getElementById('cut').click();
      if (m.cmd === 'flow') document.getElementById('flow').click();
      if (m.cmd === 'pair') setPairMode(m.v !== undefined ? !!m.v : !pairMode, false);
      if (m.cmd === 'speed') { speed.value = m.v; speed.oninput(); }
      if (m.cmd === 'key') m.down ? held.add(m.key) : held.delete(m.key);
      if (m.cmd === 'snap') { composer.render(); toExplorer({ type: 'snap', url: renderer.domElement.toDataURL('image/png') }); }
      say();
    });
    addEventListener('keydown', e => {
      if (e.key === 'Escape') toExplorer({ type: 'key', key: 'Escape' });
      else if (!e.metaKey && !e.ctrlKey && !e.altKey && (/^(Arrow(Left|Right)|Page(Up|Down)| |Enter)$/.test(e.key) || /^[cnemr1-9]$/i.test(e.key))) {
        if (e.key === ' ') e.preventDefault();
        toExplorer({ type: 'key', key: e.key, shift: e.shiftKey });
      }
    });
  }

  window.__cell = {
    renderer, composer, camera, controls, scene, cell, REG, shells,
    get placed() { return placed; },
    get curView() { return curView; },
    setHi, V, focusOf, flyTo, freeCamera, ghost, blink, setState, tour,
    setLook: k => { organelleLook = k; applyLook(); },
    get sites() { return SITES; },
    get flows() { return live; },
    get views() { return VIEWS; },
    pointsOf,
    setMol: k => { molHi = k; },
    step: (dt = 0.05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); },
    shot,
    setScaleIndex,
    setPairMode,
    get pairMode() { return pairMode; },
    get stops() { return STOPS; },
  };
});
