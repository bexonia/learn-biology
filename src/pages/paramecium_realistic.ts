// @ts-nocheck
import * as THREE from 'three';
import { PDB_PROTISTS } from '../molecules/pdb_protists.js';
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
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  BASE,
  BACKBONE,
  MRNA,
  col,
} from '../index.js';

runBiologyApp(20261112, ({ random, geometry, dna, rna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, randDir, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // Scale reference:
  // Whole Paramecium caudatum (~200 x 55 um): 1 scene unit = 10 um (span ~17.0 x 5.6 u)
  // Magnified circular 9+2 Axoneme & Dynein Inset (~250 nm diameter): 1 scene unit = 10 nm
  const NM = 0.01;
  // Geometric center of the slipper-shaped cell body
  const C_MID = V(0.0, 0.55, 0.0);
  // Cutaway origin shifted toward anterior third so anterior prow + oral groove remain intact
  // while ~70% of the body length (x > P0.x && z > P0.z) opens into a wide backlit cavity
  const P0 = V(-3.15, 0.55, 0.0);
  // Circular magnified 9+2 Axoneme & Dynein Inset center (clear foreground below anterior flank)
  const AX0 = V(-4.85, -4.45, 3.25);
  const AX_ROT = new THREE.Euler(0.11, 0.24, 0.0);

  // Key organelle anchors inside the cutaway endoplasm
  const CV_ANT = V(-2.25, 1.38, -0.46);
  const CV_POST = V(4.78, 1.06, -0.34);
  const MAC0 = V(0.68, 0.44, -0.68);
  const MIC0 = V(0.72, -0.22, -0.02);
  const CYTOSTOME0 = V(-1.45, -1.28, 0.14);
  const CYTOPROCT0 = V(6.48, -1.16, -0.22);

  // Exact 6 required camera VIEWS
  const VIEWS = [
    ['overview', V(2.4, 3.3, 30.6), V(-0.45, -0.52, 0.25)],
    ['cilia', V(-9.4, 4.8, 10.4), V(-4.35, 1.38, 0.55)],
    ['osmosis', V(-1.35, 2.75, 8.25), V(-2.25, 1.38, -0.46)],
    ['feeding', V(1.35, -0.25, 14.6), V(0.72, -0.52, -0.18)],
    ['nuclei', V(2.2, 1.35, 8.75), V(0.68, 0.22, -0.42)],
    ['axoneme', V(-2.55, -3.95, 12.15), V(-4.85, -4.45, 3.25)],
  ];
  let view = 0;
  let curView = 'overview';

  // Cinema dark-field WebGL2 microscopy stage
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 540,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#15293e',
    bgMid: '#081322',
    bgOuter: '#02040a',
    keyColor: '#fff5e6',
    keyIntensity: 3.1,
    rimColor: '#78d4ff',
    rimIntensity: 1.85,
    lampColor: '#ffd4a0',
    lampIntensity: 24,
    lampPos: [1.8, 1.6, 5.8],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 260,
    bokehColor: '#76d6ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key } = studio;

  // Secondary cool-cyan freshwater fill lamp inside the cutaway cavity & axoneme inset
  const aquaLamp = new THREE.PointLight('#6ceeff', 11.0, 26, 2);
  aquaLamp.position.set(-3.2, -2.0, 6.2);
  scene.add(aquaLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  const caps = new THREE.Group();
  cell.add(caps);

  // Align studio's 90-degree front-right cutaway planes with P0 so anterior nose & oral groove remain whole
  // while the longitudinal cutaway cleanly exposes all internal organelles
  studio.CUT_LOCAL[0].set(V(-1, 0, 0), P0.x);
  studio.CUT_LOCAL[1].set(V(0, 0, -1), P0.z);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.8);
  const bump = (rx = 12, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // Exact 18 PARTS & REG keys (NON-NEGOTIABLE contract)
  const PARTS = [
    ['pellicle', 'Cortical pellicle alveoli & hexagonal ridges', '#68e3d8'],
    ['cilia', 'Motile 9+2 cilia (metachronal waves)', '#8ef4ff'],
    ['kinetosome', 'Basal bodies (kinetosomes) & infraciliature', '#ffd466'],
    ['trichocyst', 'Defensive cortical trichocyst darts', '#ff7da8'],
    ['oral_groove', 'Ciliated oral groove (peristome funnel)', '#5ee6b8'],
    ['cytostome', 'Cytostome & cytopharynx gullet', '#38d9a9'],
    ['food_vacuole', 'Phagocytic food vacuoles (cyclosis & pH shift)', '#ffaa44'],
    ['cytoproct', 'Posterior cytoproct (anal pore)', '#ff735c'],
    ['contractile_vacuole', 'Star-shaped contractile vacuoles (anterior & posterior)', '#66c8ff'],
    ['collecting_canals', 'Radial collecting canals (ampullae & arms)', '#4ee8ff'],
    ['vatpase', 'Vacuolar V-ATPase H+ proton pumps', '#ffe05c'],
    ['macronucleus', 'Polyploid macronucleus (somatic genome)', '#a478ff'],
    ['micronucleus', 'Diploid micronucleus (germline archive)', '#5ce6ff'],
    ['mito', 'Aerobic mitochondria (ATP respiration)', '#ff8052'],
    ['ribosome_80s', 'Cytosolic 80S eukaryotic ribosomes', '#ffd482'],
    ['axoneme', '9+2 axoneme ring (9 doublets + central pair)', '#6ee8ff'],
    ['dynein', 'Axonemal dynein motor arms (PDB 7KZM)', '#ffd24c'],
    ['tubulin', 'Alpha/beta-tubulin heterodimers (PDB 1JFF)', '#4cc9ff'],
  ];

  const INFO = {
    pellicle: [
      'Flexible three-membrane cortex: outer plasma membrane overlying flattened alveolar sacs and fibrous epiplasm',
      'Maintains the hydrodynamic slipper shape while anchoring hexagonal ciliary sockets across the cell surface',
    ],
    cilia: [
      '~920 motile 9+2 eukaryotic cilia (~10-12 um long) arranged in longitudinal kineties along the cell body',
      'Beat in coordinated metachronal waves to propel Paramecium forward, reverse on obstacle contact, and spin',
    ],
    kinetosome: [
      'Nine-triplet microtubule basal bodies docked beneath each pellicle alveolus and linked by kinetodesmal fibers',
      'Nucleate each ciliary axoneme and organize longitudinal cortical patterning across cell division',
    ],
    trichocyst: [
      'Spindle-shaped crystalline protein shafts stored radially in subcortical sacs between adjacent kinetosomes',
      'Rapidly discharge as rigid defensive harpoon filaments when stimulated by predators or mechanical shock',
    ],
    oral_groove: [
      'Sweeping ventral-anterior ciliated funnel lined by dense synchronized oral membranelles',
      'Creates a local water vortex that funnels suspended freshwater bacteria directly toward the cytostome',
    ],
    cytostome: [
      'Reinforced cell mouth and curved cytopharynx gullet braced by microtubular postoral ribbons',
      'Packs incoming bacterial prey into nascent phagocytic food vacuoles pinching off at its inner tip',
    ],
    food_vacuole: [
      'Membrane-bound phagosomes migrating along a cytoplasmic cyclosis loop from cytostome to cytoproct',
      'Fuse with acidic lysosomes (cyan-green to amber pH shift) to digest prey and export monomers into cytosol',
    ],
    cytoproct: [
      'Specialized posterior-ventral cortical anal pore bordered by contractile cytoskeletal lips',
      'Fuses with spent residual food vacuoles to expel indigestible debris and recycle vacuolar membrane',
    ],
    contractile_vacuole: [
      'Paired anterior and posterior central osmoregulatory bladders cycling in alternating diastole and systole',
      'Actively expel excess freshwater entering by osmosis through dorsal pores so the cell never lyses',
    ],
    collecting_canals: [
      'Seven radiating ampullae and slender tubular arms feeding each star-shaped contractile vacuole hub',
      'Draw hypotonic cytosolic water via osmotic gradients and contract in antiphase to fill the central bladder',
    ],
    vatpase: [
      'Multi-subunit V1/V0 vacuolar H+-ATPase proton pumps densely studding the collecting-canal membranes',
      'Hydrolyze ATP to pump protons and drive osmotic water loading through neighboring aquaporin channels',
    ],
    macronucleus: [
      'Giant kidney-shaped polyploid somatic nucleus (~30 Mbp amplified to hundreds of transcriptionally active copies)',
      'Drives nonstop daily mRNA transcription for enzymes, ciliary proteins, and metabolic homeostasis',
    ],
    micronucleus: [
      'Compact diploid germline nucleus nestled snugly inside the concave hilum pocket of the macronucleus',
      'Preserves the intact chromosome set for meiosis and reciprocal nuclear exchange during sexual conjugation',
    ],
    mito: [
      'Tubular double-membrane aerobic mitochondria packed with folded inner cristae and rotary ATP synthases',
      'Supply steady cytoplasmic ATP to power hundreds of beating cilia, V-ATPase bilge pumps, and cyclosis',
    ],
    ribosome_80s: [
      'Large cytosolic 80S eukaryotic ribosomes (60S + 40S subunits) arranged in polysomes and free pools',
      'Translate macronuclear mRNA transcripts into tubulin, dynein, hydrolases, and cortical proteins',
    ],
    axoneme: [
      'Magnified 250 nm cross-section (1 unit = 10 nm) showing 9 outer microtubule doublets, radial spokes, nexin linkers, and central pair',
      'Provides the conserved eukaryotic structural scaffold that converts linear dynein sliding into rhythmic ciliary bending',
    ],
    dynein: [
      'Real cryo-EM axonemal dynein motor arms (RCSB PDB 7KZM) anchored to A-tubules and reaching toward adjacent B-tubules',
      'Hydrolyze ATP to ADP + Pi to walk along neighboring doublets, generating the shear force that bends every cilium',
    ],
    tubulin: [
      'Real cryo-EM alpha/beta-tubulin heterodimers (RCSB PDB 1JFF) polymerized head-to-tail into microtubule protofilaments',
      'Assemble the 13-protofilament A-tubules, 10-protofilament B-tubules, and central pair tracks of every 9+2 axoneme',
    ],
  };

  const REG = {};
  const reg = (k, m) => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    (m.isShaderMaterial ? r.imp : r.mats).push(m);
    return m;
  };
  const phys = (o, clipObj = CLIP) => new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.84, ...clipObj, ...o });
  const protMat = (k, clip = true, extra = {}, clipPlanes = CUT) => {
    const m = phys(
      {
        vertexColors: true,
        roughness: 0.38,
        metalness: 0.04,
        clearcoat: 0.30,
        clearcoatRoughness: 0.28,
        sheen: 0.36,
        sheenColor: '#f0fbff',
        normalMap: protBump,
        normalScale: new THREE.Vector2(0.36, 0.36),
        side: THREE.DoubleSide,
        clippingPlanes: clip ? clipPlanes : null,
        clipIntersection: true,
        ...extra,
      },
      {}
    );
    return reg(k, m);
  };
  const sculpt = (k, parent = cell, clip = true, extra = {}, clipPlanes = CUT) =>
    makeSculptedMesh(protMat(k, clip, extra, clipPlanes), parent);
  const molBatch = (k, geo, parent = cell, clip = true, extra = {}, clipPlanes = CUT) =>
    makeMolBatch(geo, protMat(k, clip, extra, clipPlanes), parent);

  const shells = [];
  const LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  let placed = 0;

  function cinemaShellMat(k, solidHex, gelHex, clipObj, opts = {}) {
    const m = makeCinemaMembraneMat(clipObj, opts.normalMap ?? bump(12, 10), {
      color: gelHex,
      attenuationColor: opts.attenCol ?? solidHex,
      attenuationDistance: opts.attenDist ?? 4.8,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.26,
      iridescence: opts.iridescence ?? 0.56,
      thickness: opts.thickness ?? 0.50,
      roughness: opts.roughness ?? 0.11,
      sheenColor: opts.sheenColor ?? '#d8ffff',
      normalScale: opts.normalScale ?? 0.24,
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
      m.opacity = see ? 0.42 : 1;
      m.depthWrite = !see;
      m.side = gel ? THREE.FrontSide : THREE.DoubleSide;
      m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid);
      m.needsUpdate = true;
    });
  }

  const impMats = [];
  const shade = (mesh, cast = true, receive = true) => {
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  };
  const grown = a => {
    const b = new Float32Array(a.length * 2);
    b.set(a);
    return b;
  };

  function balls(k, parent = cell, clip = true, cutPlanes = CUT) {
    let n = 0, cap = 1 << 13;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 12;
    let A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap);
    let C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
    return {
      stick(a, b, r, c1, c2) {
        if (m === scap) {
          scap *= 2;
          A = grown(A); B = grown(B); R = grown(R); C1 = grown(C1); C2 = grown(C2);
        }
        const i = m * 3;
        A[i] = a.x; A[i + 1] = a.y; A[i + 2] = a.z;
        B[i] = b.x; B[i + 1] = b.y; B[i + 2] = b.z;
        C1[i] = c1.r; C1[i + 1] = c1.g; C1[i + 2] = c1.b;
        C2[i] = c2.r; C2[i + 1] = c2.g; C2[i + 2] = c2.b;
        R[m++] = r;
      },
      add(p, s, c) {
        if (n === cap) {
          cap *= 2;
          pos = grown(pos); sz = grown(sz); cl = grown(cl);
        }
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
          const mat = makeCinemaImpostorMat(cutPlanes, clip);
          impMats.push(mat);
          reg(k, mat);
          const pts = new THREE.Points(g, mat);
          pts.frustumCulled = false;
          parent.add(pts);
        }
        if (m) {
          const sg = new THREE.InstancedBufferGeometry();
          sg.setIndex([0, 1, 2, 2, 1, 3]);
          sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
          sg.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 0, 1, 1, 1]), 2));
          [['aA', A, 3], ['aB', B, 3], ['aR', R, 1], ['aC1', C1, 3], ['aC2', C2, 3]].forEach(([nm, arr, d]) =>
            sg.setAttribute(nm, new THREE.InstancedBufferAttribute(arr.slice(0, m * d), d))
          );
          sg.instanceCount = m;
          const mat = makeCinemaStickMat(cutPlanes, clip);
          impMats.push(mat);
          reg(k, mat);
          const rods = new THREE.Mesh(sg, mat);
          rods.frustumCulled = false;
          parent.add(rods);
        }
        return n + m;
      },
    };
  }

  // Synthetic cryo-EM Gaussian molecular surface helper for sculpted bilobed 80S eukaryotic ribosomes
  function synthGeo(beads, colors, maxDim = 28, scale = 1, nm = 0.025) {
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
    return buildPdbSurfaceGeo({ n, xyz, kind, rad }, { nm, scale, maxDim, colorFn: g => cols[g % cols.length] });
  }

  // Safe non-mutating orientation helpers (never mutate shared UP!)
  const ortho = (n: THREE.Vector3) => {
    const u = n.clone().normalize();
    const ref = Math.abs(u.y) < 0.85 ? V(0, 1, 0) : V(1, 0, 0);
    return across(ref, u).normalize();
  };
  const qOut = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };
  const qFromZ = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), twist)) : q;
  };

  // Site anchors & dynamic animation registries
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));
  const ciliaRecords = [];
  let ciliaInstMesh: THREE.InstancedMesh | null = null;
  const cvUnits = [];
  const foodVacuoles = [];
  let cyclosisCurve: THREE.CatmullRomCurve3 | null = null;
  const dyneinArms = [];

  // Dynamic simulation clocks
  let waveClock = 0;
  let pumpClock = 0;
  let cyclosisClock = 0;

  // -------------------------------------------------------------------------
  // Parametric Slipper-Shaped Paramecium caudatum Surface Field (centered at C_MID, hinged at P0)
  // -------------------------------------------------------------------------
  const SLIP_RX = 8.45;
  const SLIP_RY = 2.82;
  const SLIP_RZ = 2.72;
  const OFF_X = P0.x - C_MID.x; // -3.15

  function paraR(d: THREE.Vector3): number {
    // Exact ray-ellipsoid distance from interior hinge P0 to base slipper centered at C_MID
    const dx = d.x, dy = d.y, dz = d.z;
    const A = (dx * dx) / (SLIP_RX * SLIP_RX) + (dy * dy) / (SLIP_RY * SLIP_RY) + (dz * dz) / (SLIP_RZ * SLIP_RZ);
    const B = (OFF_X * dx) / (SLIP_RX * SLIP_RX);
    const C = (OFF_X * OFF_X) / (SLIP_RX * SLIP_RX) - 1.0;
    const disc = Math.max(1e-6, B * B - A * C);
    const r0 = (-B + Math.sqrt(disc)) / Math.max(1e-6, A);

    // Coordinates relative to slipper midpoint C_MID
    const qx = OFF_X + r0 * dx;
    const qy = r0 * dy;
    const qz = r0 * dz;
    const ux = Math.max(-1, Math.min(1, qx / SLIP_RX)); // -1 anterior nose -> +1 posterior tail
    const uy = qy / SLIP_RY;
    const uz = qz / SLIP_RZ;

    // Classic Paramecium caudatum slipper silhouette:
    // rounded blunt anterior nose, graceful mid-posterior belly, tapered pointed posterior end
    const waist = 1.0 + 0.065 * Math.sin((ux + 0.22) * 2.55) - 0.14 * Math.pow(Math.max(0, ux - 0.18), 1.75);
    const dorsalArch = 1.0 + 0.045 * uy * (1.0 - ux * ux);

    // Sweeping anterior-ventral-front oral groove indentation (ux in [-0.88, -0.18], qz > 0)
    let grooveDip = 0;
    if (ux > -0.90 && ux < -0.14 && uz > 0.05) {
      const gt = (ux + 0.88) / 0.72; // 0 at anterior nose -> 1 near cytostome entry
      const yCenter = 0.25 - 0.88 * gt;
      const zCenter = 0.72 - 0.18 * gt;
      const dyG = (uy - yCenter) / 0.36;
      const dzG = (uz - zCenter) / 0.52;
      const dist2 = dyG * dyG + dzG * dzG;
      if (dist2 < 2.6) {
        const endFade = Math.sin(Math.min(1, Math.max(0, gt)) * Math.PI);
        grooveDip = 0.15 * endFade * Math.exp(-dist2 * 1.45);
      }
    }

    // Gentle living cortical organic ripple
    const n = fbm(qx * 0.36 + 5.1, qy * 0.55 - 2.3, qz * 0.55 + 8.7, 3);
    const organic = 1.0 + 0.024 * (n - 0.5) * 2.0;

    // Apply transverse profile smoothly while keeping tips crisp
    const radialWeight = Math.sqrt(Math.max(0, 1.0 - ux * ux * 0.82));
    const prof = 1.0 + (waist * dorsalArch - 1.0) * radialWeight;
    return r0 * prof * organic * (1.0 - grooveDip);
  }

  function paraPos(d: THREE.Vector3, radialOffset = 0): THREE.Vector3 {
    const u = d.clone().normalize();
    return P0.clone().addScaledVector(u, paraR(u) + radialOffset);
  }

  function paraSurf(d: THREE.Vector3, normalOffset = 0) {
    const u = d.clone().normalize();
    const r = paraR(u);
    const p0 = P0.clone().addScaledVector(u, r);
    const t1 = ortho(u);
    const t2 = u.clone().cross(t1).normalize();
    const eps = 0.012;
    const p1 = paraPos(u.clone().addScaledVector(t1, eps));
    const p2 = paraPos(u.clone().addScaledVector(t2, eps));
    const n = p1.sub(p0).cross(p2.sub(p0)).normalize();
    if (n.dot(u) < 0) n.negate();
    return { p: p0.addScaledVector(n, normalOffset), n, r, u };
  }

  // Convert desired (u in [-0.96, 0.96], theta in [0, 2*PI]) longitudinal-angular coordinates on the slipper
  // into a unit direction vector from P0 so cilia & alveoli form clean anatomical longitudinal kineties!
  function kinetyDir(uLong: number, theta: number): THREE.Vector3 {
    const rad = Math.sqrt(Math.max(0.01, 1.0 - uLong * uLong));
    const worldPt = V(
      C_MID.x + uLong * SLIP_RX,
      C_MID.y + Math.sin(theta) * rad * SLIP_RY,
      C_MID.z + Math.cos(theta) * rad * SLIP_RZ
    );
    return worldPt.sub(P0).normalize();
  }

  const inCutWedge = (p: THREE.Vector3, pad = 0.04) => p.x > P0.x + pad && p.z > P0.z + pad;

  // -------------------------------------------------------------------------
  // Build Real RCSB PDB Cryo-EM Surface Templates from PDB_PROTISTS
  // (dynein 7KZM + alpha/beta-tubulin 1JFF + sculpted eukaryotic 80S ribosome)
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // RCSB PDB 7KZM — Axonemal Dynein Motor Arms (6 chains, 261 A elongated along Z)
    const dynCols = ['#ffd24c', '#ff9d42', '#ffe885', '#ff7b5c', '#f5b841', '#ffbe6b'].map(col);
    const geoDynein = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'dynein'), {
      nm: NM,
      scale: 2.32,
      maxDim: 34,
      sigmaAng: 4.8,
      iso: 0.36,
      aoStrength: 0.58,
      colorFn: grp => dynCols[grp % dynCols.length],
    });

    // RCSB PDB 1JFF — Alpha/Beta-Tubulin Heterodimer (2 chains, 94.7 A elongated along X)
    const tubCols = [col('#70efff'), col('#3ea4ff')]; // alpha-tubulin cyan, beta-tubulin cobalt
    const geoTubulin = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'tubulin'), {
      nm: NM,
      scale: 2.48,
      maxDim: 30,
      sigmaAng: 4.2,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: grp => tubCols[grp & 1],
    });

    // High-resolution cryo-EM 80S eukaryotic ribosome (60S large crown + 40S small subunit head/beak)
    const geoRibo80 = synthGeo(
      [
        [0, -1.75, 0, 2.85, 0],
        [-2.85, -1.05, 0.72, 2.15, 0],
        [2.95, -0.85, -0.55, 2.05, 0],
        [0.15, -3.25, -0.95, 2.15, 2],
        [3.75, 1.15, -0.45, 1.42, 2],
        [-3.45, 0.65, -0.55, 1.40, 2],
        [0.42, 2.45, 0.95, 2.25, 1],
        [-2.05, 2.65, 0.65, 1.82, 1],
        [2.25, 2.10, 1.18, 1.65, 1],
        [-0.22, 0.55, -0.92, 1.55, 2],
      ],
      ['#f5ba5b', '#ffe6a8', '#db8296'],
      30,
      1.04,
      0.023
    );

    return { geoDynein, geoTubulin, geoRibo80 };
  }

  // -------------------------------------------------------------------------
  // 1. Cortical Pellicle Alveoli, Hexagonal Ridges, Cutaway Cap, Kinetosomes, Cilia & Trichocysts
  // -------------------------------------------------------------------------
  function buildPellicleCiliaAndCortex() {
    // Iridescent wet-gel cortical pellicle membrane shell
    const pelMat = cinemaShellMat('pellicle', '#249194', '#c8fff8', CLIP, {
      attenCol: '#1b7a85',
      attenDist: 5.4,
      sssColor: '#76f2ea',
      sssIntensity: 0.28,
      iridescence: 0.66,
      thickness: 0.52,
      roughness: 0.11,
      sheenColor: '#d2ffff',
      normalMap: bump(16, 10),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(P0, paraR, 160), pelMat), true, true));

    // Warm backlit deep teal-indigo inner alveolar / endoplasm wall so the open cutaway has rich depth
    const innerPelMat = reg(
      'pellicle',
      applyBacklitSSS(
        phys({
          color: '#172d44',
          roughness: 0.68,
          clearcoat: 0.18,
          normalMap: bump(14, 9),
          normalScale: new THREE.Vector2(0.22, 0.22),
          side: THREE.BackSide,
        }),
        '#5cd8e6',
        0.18,
        2.4
      )
    );
    cell.add(new THREE.Mesh(shellGeo(P0, d => paraR(d) - 0.20, 104), innerPelMat));

    // Multi-layer 3-membrane alveolar pellicle cutaway cap strip (outer PM -> alveolar sac -> epiplasm)
    const PELLICLE_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.20, '#9efff6'],   // Outer plasma membrane
      [0.20, 0.68, '#1b4a64'],  // Flattened alveolar sac lumen
      [0.68, 0.86, '#5cd8e8'],  // Inner alveolar membrane
      [0.86, 1.0, '#3a8ba8'],   // Fibrous epiplasm cortex
    ];
    const capMat = reg(
      'pellicle',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.30,
        metalness: 0.06,
        emissive: '#0c3648',
        emissiveIntensity: 0.34,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(P0, paraR, ax, 0.20, PELLICLE_LAYERS, 240), capMat));
    }

    // Hexagonal cortical alveolar ridge plaques hugging the intact outer slipper pellicle
    const hexShape = new THREE.Shape();
    const hR = 0.225;
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      if (k === 0) hexShape.moveTo(Math.cos(a) * hR, Math.sin(a) * hR);
      else hexShape.lineTo(Math.cos(a) * hR, Math.sin(a) * hR);
    }
    hexShape.closePath();
    const hexHole = new THREE.Path();
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      if (k === 0) hexHole.moveTo(Math.cos(a) * 0.142, Math.sin(a) * 0.142);
      else hexHole.lineTo(Math.cos(a) * 0.142, Math.sin(a) * 0.142);
    }
    hexHole.closePath();
    hexShape.holes.push(hexHole);

    const alvGeo = new THREE.ExtrudeGeometry(hexShape, {
      depth: 0.024,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.008,
      bevelThickness: 0.008,
    });
    alvGeo.rotateX(-Math.PI / 2);
    alvGeo.translate(0, 0.006, 0);

    const alvMat = reg(
      'pellicle',
      applyBacklitSSS(
        phys({
          color: '#64ded4',
          roughness: 0.24,
          metalness: 0.04,
          clearcoat: 0.60,
          clearcoatRoughness: 0.16,
          sheen: 0.50,
          sheenColor: '#cafffa',
          transparent: true,
          opacity: 0.78,
          normalMap: protBump,
          normalScale: new THREE.Vector2(0.18, 0.18),
        }),
        '#84fff2',
        0.26,
        2.5
      )
    );

    // Build graceful curved tapered cilium geometry (origin at base, extending along +Y ~0.92 u)
    const cilCurve = new THREE.CatmullRomCurve3([
      V(0, 0.0, 0),
      V(0.04, 0.30, 0),
      V(0.14, 0.62, 0),
      V(0.28, 0.92, 0),
    ]);
    const cilGeo = sweepGeo(cilCurve, t => 0.025 * (1 - 0.56 * t), 10, 6);
    const cilMat = reg(
      'cilia',
      applyBacklitSSS(
        phys({
          color: '#8ef4ff',
          emissive: '#14627c',
          emissiveIntensity: 0.28,
          roughness: 0.26,
          clearcoat: 0.55,
          sheen: 0.50,
          sheenColor: '#e0fcff',
        }, {}),
        '#9af7ff',
        0.34,
        2.2
      )
    );

    // Basal body (kinetosome) barrel collar geometry
    const kinGeo = new THREE.CylinderGeometry(0.056, 0.064, 0.22, 9);
    kinGeo.translate(0, -0.09, 0);
    const kinMat = reg(
      'kinetosome',
      phys({
        color: '#ffd466',
        emissive: '#784c08',
        emissiveIntensity: 0.28,
        roughness: 0.30,
        metalness: 0.08,
        clearcoat: 0.45,
      }, {})
    );

    // Spindle-shaped defensive trichocyst dart geometry (anchored radially under pellicle)
    const triPts = [
      new THREE.Vector2(0.005, -0.44),
      new THREE.Vector2(0.058, -0.34),
      new THREE.Vector2(0.072, -0.18),
      new THREE.Vector2(0.046, -0.03),
      new THREE.Vector2(0.012, 0.05),
    ];
    const triGeo = new THREE.LatheGeometry(triPts, 10);
    const triMat = reg(
      'trichocyst',
      applyBacklitSSS(
        phys({
          color: '#ff7da8',
          emissive: '#7a193f',
          emissiveIntensity: 0.26,
          roughness: 0.28,
          clearcoat: 0.52,
          sheen: 0.45,
          sheenColor: '#ffd4e6',
        }, {}),
        '#ff9ec0',
        0.28,
        2.4
      )
    );

    const alvMs: THREE.Matrix4[] = [];
    const alvCols: THREE.Color[] = [];
    const kinMs: THREE.Matrix4[] = [];
    const triMs: THREE.Matrix4[] = [];
    const triCols: THREE.Color[] = [];

    // Arrange ~920 cilia, hexagonal alveoli, kinetosomes & trichocysts along neat longitudinal kineties!
    const N_RINGS = 38;
    const N_KINETIES = 44;
    for (let ir = 0; ir < N_RINGS; ir++) {
      const u = -0.94 + (ir / (N_RINGS - 1)) * 1.88;
      const ringCircum = Math.sqrt(Math.max(0.08, 1.0 - u * u));
      const nCols = Math.max(9, Math.round(N_KINETIES * (0.28 + 0.72 * ringCircum)));
      for (let ic = 0; ic < nCols; ic++) {
        const th = ((ic + (ir % 2) * 0.5) / nCols) * Math.PI * 2;
        const dir = kinetyDir(u, th);
        const { p, n } = paraSurf(dir, 0);
        if (inCutWedge(p, 0.06)) continue;

        // Compute tangent pointing posteriorly along the longitudinal kinety for metachronal stroke direction
        const dirNext = kinetyDir(Math.min(0.97, u + 0.04), th);
        const pNext = paraPos(dirNext);
        const tLong = pNext.sub(p);
        tLong.addScaledVector(n, -tLong.dot(n));
        if (tLong.lengthSq() < 1e-6) tLong.copy(ortho(n));
        else tLong.normalize();
        // Right-handed orthonormal basis (X = tLong, Y = outward normal n, Z = tLong x n, det = +1!)
        const tLat = tLong.clone().cross(n).normalize();

        // Build base orientation quaternion (+Y strictly along outward normal n!)
        const basisM = new THREE.Matrix4().makeBasis(tLong, n, tLat);
        const baseQuat = new THREE.Quaternion().setFromRotationMatrix(basisM);

        // Register live animated metachronal cilium
        const phase = p.x * 0.92 + th * 0.42;
        ciliaRecords.push({
          pos: p.clone().addScaledVector(n, 0.015),
          baseQuat,
          phase,
          scale: rr(0.86, 1.10),
        });
        if (ciliaRecords.length % 28 === 0 && SITES.cilia.length < 36) {
          SITES.cilia.push(p.clone().addScaledVector(n, 0.65));
        }

        // Hexagonal alveolar pellicle plaque on alternating grid vertices
        if ((ir + ic) % 2 === 0 && alvMs.length < 520) {
          alvMs.push(atS(p.clone().addScaledVector(n, 0.012), V(1.0, 1.0, 1.0), qOut(n, ir * 0.35)));
          alvCols.push(col((ir + ic) % 3 === 0 ? '#7df2e8' : (ir + ic) % 3 === 1 ? '#57d6cc' : '#96faf0'));
          if (alvMs.length % 15 === 0 && SITES.pellicle.length < 32) {
            SITES.pellicle.push(p.clone().addScaledVector(n, 0.14));
          }
        }

        // Basal body (kinetosome) embedded directly beneath the alveolar socket
        if ((ir + ic) % 2 === 0 && kinMs.length < 440) {
          kinMs.push(atS(p.clone().addScaledVector(n, -0.02), 1.0, qOut(n)));
          if (kinMs.length % 16 === 0 && SITES.kinetosome.length < 32) {
            SITES.kinetosome.push(p.clone().addScaledVector(n, -0.06));
          }
        }

        // Subcortical defensive trichocyst dart tucked radially between kinetosomes
        if ((ir + ic) % 7 === 2 && triMs.length < 145) {
          triMs.push(atS(p.clone().addScaledVector(n, -0.04), rr(0.92, 1.15), qOut(n)));
          triCols.push(col(ic % 2 === 0 ? '#ff7da8' : '#ffa6c6'));
          if (triMs.length % 6 === 0 && SITES.trichocyst.length < 28) {
            SITES.trichocyst.push(p.clone().addScaledVector(n, -0.22));
          }
        }
      }
    }

    // Add prominent showcase row of kinetosomes, infraciliature fibers & trichocysts right along the cutaway rims!
    const S_INFRA = sculpt('kinetosome', caps, false, { emissive: '#6e4606', emissiveIntensity: 0.25 });
    const cInfraA = col('#ffd466'), cInfraB = col('#ffaa38');
    for (const ax of ['x', 'z'] as const) {
      const rimPts: THREE.Vector3[] = [];
      for (let i = 6; i < 114; i += 3) {
        const a = (i / 120) * Math.PI;
        const d = ax === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(Math.sin(a), Math.cos(a), 0);
        const { p, n } = paraSurf(d, -0.08);
        rimPts.push(p.clone());
        if (i % 6 === 0) {
          kinMs.push(atS(p.clone().addScaledVector(n, 0.04), 1.24, qOut(n)));
          SITES.kinetosome.push(p.clone());
        } else if (i % 6 === 3) {
          triMs.push(atS(p.clone().addScaledVector(n, -0.02), 1.18, qOut(n)));
          triCols.push(col('#ff78a5'));
          SITES.trichocyst.push(p.clone().addScaledVector(n, -0.20));
        }
      }
      S_INFRA.tube(rimPts, 0.026, 0.026, cInfraA, cInfraB, 6, true);
    }
    S_INFRA.done();

    // 10 partially discharged defensive trichocyst harpoon filaments projecting off the upper-anterior dorsal rim
    const S_TRI_FIRE = sculpt('trichocyst', cell, false, {
      emissive: '#8f224d',
      emissiveIntensity: 0.34,
      roughness: 0.25,
      clearcoat: 0.55,
    });
    const cTriTip = col('#ffe0ec'), cTriShaft = col('#ff78a5');
    for (let k = 0; k < 10; k++) {
      const u = -0.68 + k * 0.075;
      const th = Math.PI * 0.55 + (k % 3 - 1) * 0.18;
      const { p, n } = paraSurf(kinetyDir(u, th), 0);
      if (inCutWedge(p, 0.04)) continue;
      const base = p.clone().addScaledVector(n, -0.26);
      const mid = p.clone().addScaledVector(n, 0.48);
      const tip = p.clone().addScaledVector(n, 1.04 + (k % 3) * 0.14);
      S_TRI_FIRE.tube([base, mid, tip], 0.042, 0.012, cTriShaft, cTriTip, 7, true);
      S_TRI_FIRE.lobe(tip, 0.036, 0.085, 0.036, cTriTip, qOut(n));
      SITES.trichocyst.push(mid.clone());
      placed++;
    }
    S_TRI_FIRE.done();

    // Instantiate hexagonal cortical alveoli, kinetosomes, trichocysts, and live animated cilia
    cell.add(shade(instanced(alvGeo, alvMat, alvMs, alvCols), true, true));
    cell.add(shade(instanced(kinGeo, kinMat, kinMs), false, true));
    cell.add(shade(instanced(triGeo, triMat, triMs, triCols), false, true));

    const initCilMs = ciliaRecords.map(rec => atS(rec.pos, rec.scale, rec.baseQuat));
    const cilCols = ciliaRecords.map((_, idx) => col(idx % 3 === 0 ? '#9ef7ff' : idx % 3 === 1 ? '#6ce6ff' : '#bdfaff'));
    ciliaInstMesh = shade(instanced(cilGeo, cilMat, initCilMs, cilCols), false, false);
    ciliaInstMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    cell.add(ciliaInstMesh);

    placed += alvMs.length + kinMs.length + triMs.length + ciliaRecords.length;
  }

  // -------------------------------------------------------------------------
  // 2. Sweeping Ciliated Oral Groove, Cytostome / Cytopharynx, Cyclosis Food Vacuoles & Cytoproct
  // -------------------------------------------------------------------------
  function buildFeedingAndCyclosis() {
    // Sweeping ciliated oral groove funnel curving across the intact anterior-ventral-front flank
    const groovePts: THREE.Vector3[] = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const u = -0.84 + t * 0.62; // anterior tip -> cutaway entry
      const th = -0.05 - 0.68 * t; // sweeps from front-equator downward to ventral front-right
      const { p, n } = paraSurf(kinetyDir(u, th), 0.03);
      groovePts.push(p.clone().addScaledVector(n, 0.02));
    }
    const grooveCurve = new THREE.CatmullRomCurve3(groovePts);

    // Translucent emerald-teal ciliated peristomial cushion lining the sweeping groove
    const grooveMat = cinemaShellMat('oral_groove', '#26b88e', '#9cffde', {}, {
      attenCol: '#179472',
      attenDist: 3.4,
      sssColor: '#66ffcf',
      sssIntensity: 0.34,
      iridescence: 0.48,
      thickness: 0.36,
      roughness: 0.14,
      sheenColor: '#ccffef',
      normalMap: bump(8, 4),
      normalScale: 0.22,
    });
    const grooveMesh = new THREE.Mesh(
      sweepGeo(grooveCurve, t => 0.16 + 0.32 * Math.sin(t * Math.PI * 0.85), 44, 16),
      grooveMat
    );
    cell.add(grooveMesh);

    // Sculpted raised peristomial lip ridges + dense synchronized oral membranelle cilia sweeping prey inward
    const S_GROOVE = sculpt('oral_groove', cell, false, {
      emissive: '#0e6952',
      emissiveIntensity: 0.32,
      roughness: 0.26,
      clearcoat: 0.48,
    });
    const frG = geometry.ptFrames(grooveCurve, 34);
    const lipA: THREE.Vector3[] = [];
    const lipB: THREE.Vector3[] = [];
    const cOralA = col('#5ee6b8'), cOralB = col('#a8ffe2');
    for (let i = 0; i <= 34; i++) {
      const t = i / 34;
      const c = grooveCurve.getPointAt(t);
      const w = 0.22 + 0.28 * Math.sin(t * Math.PI * 0.85);
      const pA = c.clone().addScaledVector(frG.N[i], w);
      const pB = c.clone().addScaledVector(frG.N[i], -w);
      lipA.push(pA);
      lipB.push(pB);
      if (i % 4 === 2) SITES.oral_groove.push(c.clone().add(V(0, 0, 0.16)));
      // Oral membranelle ciliary fringes sweeping down the funnel toward the cytostome
      if (i >= 2 && i <= 32) {
        const tan = grooveCurve.getTangentAt(t);
        const fTipA = pA.clone().addScaledVector(frG.B[i], 0.30).addScaledVector(tan, 0.24);
        const fTipB = pB.clone().addScaledVector(frG.B[i], 0.30).addScaledVector(tan, 0.24);
        S_GROOVE.tube([pA, fTipA], 0.024, 0.010, cOralA, cOralB, 5, true);
        S_GROOVE.tube([pB, fTipB], 0.024, 0.010, cOralA, cOralB, 5, true);
        placed++;
      }
    }
    S_GROOVE.tube(lipA, 0.055, 0.072, cOralA, cOralB, 8, true);
    S_GROOVE.tube(lipB, 0.055, 0.072, cOralA, cOralB, 8, true);
    S_GROOVE.done();

    // Cytostome mouth ring & curved cytopharynx gullet diving inward from groove end into endoplasm
    const cytoCurve = new THREE.CatmullRomCurve3([
      grooveCurve.getPointAt(0.95),
      V(-2.22, -1.24, 0.62),
      CYTOSTOME0.clone(),
      V(-0.76, -1.36, -0.34),
    ]);
    const S_CYTO = sculpt('cytostome', cell, false, {
      emissive: '#0c6b56',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.50,
    });
    const cCyto1 = col('#38d9a9'), cCyto2 = col('#82ffe0');
    const cytoMat = reg(
      'cytostome',
      applyBacklitSSS(
        phys({
          color: '#34cfa2',
          emissive: '#0c5242',
          emissiveIntensity: 0.28,
          roughness: 0.28,
          clearcoat: 0.46,
          transparent: true,
          opacity: 0.78,
          side: THREE.DoubleSide,
        }, {}),
        '#66ffe0',
        0.30,
        2.4
      )
    );
    cell.add(new THREE.Mesh(sweepGeo(cytoCurve, t => 0.42 * (1 - 0.42 * t), 28, 18), cytoMat));
    // Ribbed peristomial mouth collar + cytopharyngeal postoral microtubular ribbons
    const mouthPt = cytoCurve.getPointAt(0.18);
    const mouthTan = cytoCurve.getTangentAt(0.18);
    S_CYTO.ring(mouthPt, mouthTan, 0.44, 0.068, cCyto2, 26, 8);
    const frC = geometry.ptFrames(cytoCurve, 18);
    for (let r = 0; r < 6; r++) {
      const a = (r / 6) * Math.PI * 2;
      const ribPts: THREE.Vector3[] = [];
      for (let i = 0; i <= 18; i++) {
        const t = i / 18;
        const rad = 0.44 * (1 - 0.42 * t);
        ribPts.push(
          cytoCurve
            .getPointAt(t)
            .addScaledVector(frC.N[i], Math.cos(a) * rad)
            .addScaledVector(frC.B[i], Math.sin(a) * rad)
        );
      }
      S_CYTO.tube(ribPts, 0.024, 0.018, cCyto1, cCyto2, 6, true);
    }
    SITES.cytostome.push(CYTOSTOME0.clone(), cytoCurve.getPointAt(0.25), cytoCurve.getPointAt(0.85));
    S_CYTO.done();
    placed += 6;

    // Curved 3D Cyclosis Loop carrying budding Food Vacuoles from Cytostome -> Posterior -> Dorsal -> Cytoproct
    cyclosisCurve = new THREE.CatmullRomCurve3([
      V(-0.68, -1.36, -0.35), // Budding nascent food vacuole at cytopharynx tip
      V(1.65, -1.52, -0.52),  // Ventral-posterior migration
      V(4.65, -1.12, -0.62),  // Posterior ventral arc
      V(6.25, -0.05, -0.78),  // Posterior turnaround
      V(4.40, 1.32, -1.25),   // Dorsal-posterior digestion arc
      V(0.95, 1.88, -1.35),   // Dorsal arch above macronucleus
      V(-2.75, 0.65, -1.28),  // Anterior cyclosis swing
      V(-0.35, -0.62, -1.05), // Mid-endoplasmic return stream
      V(3.25, -0.95, -0.45),  // Late nutrient absorption
      V(6.15, -1.16, -0.26),  // Docking at posterior cytoproct
    ]);

    // Delicate faint translucent cyclosis track ribbon showing the cytoplasmic streaming pathway
    const trackMat = reg(
      'food_vacuole',
      phys({
        color: '#ffb86c',
        emissive: '#6e3a10',
        emissiveIntensity: 0.22,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
        roughness: 0.35,
      }, {})
    );
    cell.add(new THREE.Mesh(sweepGeo(cyclosisCurve, () => 0.032, 96, 8), trackMat));

    // 8 live migrating phagocytic food vacuoles shifting color from cyan-green -> amber acidic digestion -> rose residual!
    const fvGeo = blobGeo(1.0, fbm, 43, 0.07, 2.2, 3);
    const bactGeo = new THREE.CapsuleGeometry(0.11, 0.24, 5, 8);
    const bactMat = reg(
      'food_vacuole',
      phys({ color: '#6eff9e', emissive: '#1e8a48', emissiveIntensity: 0.42, roughness: 0.35 }, {})
    );

    const N_VAC = 8;
    for (let v = 0; v < N_VAC; v++) {
      const u0 = v / N_VAC;
      const mat = reg(
        'food_vacuole',
        applyBacklitSSS(
          phys({
            color: '#4ef2c8',
            emissive: '#1c5e4e',
            emissiveIntensity: 0.30,
            roughness: 0.18,
            clearcoat: 0.62,
            transparent: true,
            opacity: 0.78,
          }, {}),
          '#ffbe66',
          0.30,
          2.4
        )
      );
      const grp = new THREE.Group();
      const sphere = shade(new THREE.Mesh(fvGeo, mat), true, true);
      grp.add(sphere);

      // Internal engulfed bacterial prey particles inside each food vacuole (shrink as digested!)
      const preyGroup = new THREE.Group();
      for (let b = 0; b < 5; b++) {
        const bm = new THREE.Mesh(bactGeo, bactMat);
        bm.position.copy(randDir().multiplyScalar(rr(0.15, 0.48)));
        bm.rotation.set(rand() * 6.28, rand() * 6.28, rand() * 6.28);
        preyGroup.add(bm);
      }
      grp.add(preyGroup);
      cell.add(grp);

      const pos0 = cyclosisCurve.getPointAt(u0);
      grp.position.copy(pos0);
      SITES.food_vacuole.push(pos0.clone());
      foodVacuoles.push({ grp, mat, preyGroup, u0 });
      placed++;
    }

    // Posterior Cytoproct (anal pore): contractile lip ring + radiating folds + exiting waste bolus
    const S_PROCT = sculpt('cytoproct', cell, false, {
      emissive: '#7d2014',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.50,
    });
    const proctNorm = V(0.35, -0.82, 0.44).normalize();
    const cPr1 = col('#ff735c'), cPr2 = col('#ffb296');
    S_PROCT.ring(CYTOPROCT0, proctNorm, 0.34, 0.085, cPr1, 24, 9);
    S_PROCT.ring(CYTOPROCT0.clone().addScaledVector(proctNorm, 0.09), proctNorm, 0.24, 0.055, cPr2, 20, 8);
    const pu = ortho(proctNorm);
    const pv = proctNorm.clone().cross(pu).normalize();
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      const pIn = CYTOPROCT0.clone().addScaledVector(pu, Math.cos(a) * 0.22).addScaledVector(pv, Math.sin(a) * 0.22);
      const pOut = CYTOPROCT0.clone()
        .addScaledVector(pu, Math.cos(a) * 0.48)
        .addScaledVector(pv, Math.sin(a) * 0.48)
        .addScaledVector(proctNorm, -0.08);
      S_PROCT.tube([pIn, pOut], 0.036, 0.022, cPr2, cPr1, 6, true);
    }
    // Expelled undigested residual pellet poised right outside the anal pore
    S_PROCT.lobe(CYTOPROCT0.clone().addScaledVector(proctNorm, 0.34), 0.16, 0.13, 0.14, col('#d98468'));
    SITES.cytoproct.push(CYTOPROCT0.clone());
    S_PROCT.done();
    placed += 4;
  }

  // -------------------------------------------------------------------------
  // 3. Paired Star-Shaped Contractile Vacuoles, Radiating Collecting Canals & V-ATPase Proton Pumps
  // -------------------------------------------------------------------------
  function buildContractileVacuoles() {
    // Iridescent water-filled contractile vacuole bladder gel material
    const cvMat = cinemaShellMat('contractile_vacuole', '#2d94e6', '#bceeff', {}, {
      attenCol: '#247ed4',
      attenDist: 3.2,
      sssColor: '#7ce0ff',
      sssIntensity: 0.38,
      iridescence: 0.52,
      thickness: 0.44,
      roughness: 0.10,
      sheenColor: '#e0f8ff',
      normalMap: bump(8, 8),
      normalScale: 0.18,
    });
    const cvCoreMat = reg(
      'contractile_vacuole',
      phys({
        color: '#66d0ff',
        emissive: '#1e88cc',
        emissiveIntensity: 0.48,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
        roughness: 0.15,
      }, {})
    );
    const canalMat = cinemaShellMat('collecting_canals', '#1fb5db', '#a8f4ff', {}, {
      attenCol: '#169ac4',
      attenDist: 2.6,
      sssColor: '#66f0ff',
      sssIntensity: 0.36,
      iridescence: 0.44,
      thickness: 0.32,
      roughness: 0.13,
      sheenColor: '#d9fcff',
      normalMap: bump(6, 6),
      normalScale: 0.18,
    });

    const S_PORE = sculpt('contractile_vacuole', cell, false, {
      emissive: '#1460a8',
      emissiveIntensity: 0.32,
      roughness: 0.28,
    });
    const S_VATP = sculpt('vatpase', cell, false, {
      emissive: '#8c6206',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      clearcoat: 0.56,
    });

    const cV1 = col('#ffe866'), cV0 = col('#ffaa38'), cStalk = col('#fff3b0');
    const hubGeo = blobGeo(0.64, fbm, 67, 0.045, 2.2, 4);
    const coreGeo = new THREE.SphereGeometry(0.46, 20, 16);

    const configs = [
      { center: CV_ANT, phaseOffset: 0, normalTilt: V(-0.12, 0.22, 0.96).normalize(), poreDir: V(-0.08, 0.94, -0.33).normalize(), armLen: 1.48 },
      { center: CV_POST, phaseOffset: Math.PI, normalTilt: V(0.14, 0.18, 0.97).normalize(), poreDir: V(0.12, 0.93, -0.34).normalize(), armLen: 1.34 },
    ];

    configs.forEach((cfg, idx) => {
      const root = new THREE.Group();
      root.position.copy(cfg.center);
      cell.add(root);

      // Central pulsing bladder hub
      const hubGrp = new THREE.Group();
      const hubMesh = shade(new THREE.Mesh(hubGeo, cvMat), true, true);
      const coreMesh = new THREE.Mesh(coreGeo, cvCoreMat);
      hubGrp.add(hubMesh, coreMesh);
      root.add(hubGrp);

      // Dorsal expulsion pore neck & sphincter collar
      const poreEnd = cfg.center.clone().addScaledVector(cfg.poreDir, 1.05);
      S_PORE.tube([cfg.center.clone().addScaledVector(cfg.poreDir, 0.45), poreEnd], 0.12, 0.085, col('#66c8ff'), col('#b8ecff'), 10, true);
      S_PORE.ring(poreEnd, cfg.poreDir, 0.18, 0.045, col('#a8ebff'), 20, 8);
      SITES.contractile_vacuole.push(cfg.center.clone());
      placed++;

      // 7 radiating star collecting canals (ampulla + tapered arm) pulsing in antiphase with the central bladder
      const uAx = ortho(cfg.normalTilt);
      const vAx = cfg.normalTilt.clone().cross(uAx).normalize();
      const armsGrp = new THREE.Group();
      root.add(armsGrp);

      const N_ARMS = 7;
      for (let k = 0; k < N_ARMS; k++) {
        const a = (k / N_ARMS) * Math.PI * 2 + idx * 0.45;
        const armDir = uAx
          .clone()
          .multiplyScalar(Math.cos(a))
          .addScaledVector(vAx, Math.sin(a))
          .addScaledVector(cfg.normalTilt, (k % 2 === 0 ? 0.10 : -0.14))
          .normalize();
        const bendSide = armDir.clone().cross(cfg.normalTilt).normalize();

        const p0 = armDir.clone().multiplyScalar(0.40);
        const p1 = armDir.clone().multiplyScalar(0.76).addScaledVector(bendSide, 0.06);
        const p2 = armDir.clone().multiplyScalar(cfg.armLen * 0.78).addScaledVector(bendSide, -0.05);
        const p3 = armDir.clone().multiplyScalar(cfg.armLen);
        const cv = new THREE.CatmullRomCurve3([p0, p1, p2, p3]);

        // Classic Paramecium ampulla swell at t ~ 0.30 tapering smoothly to slender collecting tubule!
        const armMesh = shade(
          new THREE.Mesh(
            sweepGeo(cv, t => {
              const ampulla = 0.21 * Math.exp(-Math.pow((t - 0.28) / 0.22, 2));
              const taper = 0.095 * (1 - 0.65 * t) + 0.025;
              const cap = t > 0.92 ? Math.sqrt(Math.max(0.05, 1 - Math.pow((t - 0.92) / 0.08, 2))) : 1;
              return (taper + ampulla) * cap;
            }, 24, 12),
            canalMat
          ),
          false,
          true
        );
        armsGrp.add(armMesh);
        placed++;

        const worldAmpulla = cfg.center.clone().add(cv.getPointAt(0.35));
        SITES.collecting_canals.push(worldAmpulla);

        // Stud each collecting canal & spongiome arm with 4 glowing mushroom-shaped V-ATPase H+ proton pumps!
        for (let vp = 0; vp < 4; vp++) {
          const tv = 0.26 + vp * 0.21;
          const ptLocal = cv.getPointAt(tv);
          const tan = cv.getTangentAt(tv);
          const nOut = ortho(tan).applyAxisAngle(tan, vp * 1.9 + k * 0.9).normalize();
          const radOffset = 0.11 + 0.14 * Math.exp(-Math.pow((tv - 0.28) / 0.22, 2));
          const pBase = cfg.center.clone().add(ptLocal).addScaledVector(nOut, radOffset);
          const pHead = pBase.clone().addScaledVector(nOut, 0.15);
          // V0 membrane collar + central stalk + V1 hexameric catalytic crown
          S_VATP.ring(pBase, nOut, 0.052, 0.018, cV0, 10, 6);
          S_VATP.stick(pBase, pHead, 0.018, cStalk, cV1);
          S_VATP.lobe(pHead, 0.072, 0.064, 0.072, cV1, qOut(nOut));
          if (vp === 1 || vp === 2) SITES.vatpase.push(pHead.clone());
          placed++;
        }
      }

      cvUnits.push({
        hubGrp,
        armsGrp,
        coreMat: cvCoreMat,
        center: cfg.center.clone(),
        porePos: poreEnd.clone(),
        poreDir: cfg.poreDir.clone(),
        phaseOffset: cfg.phaseOffset,
        lastSplashedCycle: -1,
      });
    });

    S_PORE.done();
    S_VATP.done();
  }

  // -------------------------------------------------------------------------
  // 4. Dual Nuclei: Giant Polyploid Macronucleus + Nestled Diploid Micronucleus + Mitochondria + 80S Ribosomes
  // -------------------------------------------------------------------------
  function buildNucleiMitoAndRibosomes(T) {
    // Kidney-shaped polyploid Macronucleus envelope (concave ventral hilum cradling the micronucleus!)
    const macR = (d: THREE.Vector3) => {
      const sx = d.x / 1.62, sy = d.y / 1.02, sz = d.z / 0.96;
      const base = 1.0 / Math.sqrt(sx * sx + sy * sy + sz * sz);
      // Concave kidney hilum indentation on the lower-front face (d.y < 0, d.z > 0, |d.x| small)
      const hilumMask = Math.exp(-d.x * d.x * 4.2) * Math.max(0, -d.y * 0.72 + d.z * 0.68);
      const n = fbm(d.x * 2.4 + 3.7, d.y * 2.4 - 6.1, d.z * 2.4 + 2.2, 3);
      return base * (1.0 - 0.34 * hilumMask * hilumMask) * (1.0 + 0.045 * (n - 0.5) * 2.0);
    };

    const macMat = cinemaShellMat('macronucleus', '#6d3fe0', '#dfd0ff', {}, {
      attenCol: '#592ec9',
      attenDist: 3.4,
      sssColor: '#c49eff',
      sssIntensity: 0.34,
      iridescence: 0.50,
      thickness: 0.46,
      roughness: 0.13,
      sheenColor: '#f2e6ff',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(MAC0, macR, 88), macMat), true, true));

    // Active polyploid chromatin / dsDNA loops + glowing nucleoli + nascent mRNA inside the macronucleus!
    const B_MAC_DNA = balls('macronucleus', cell, false);
    const B_MAC_RNA = balls('macronucleus', cell, false);
    const S_MAC = sculpt('macronucleus', cell, false, {
      emissive: '#4d1fa8',
      emissiveIntensity: 0.30,
      roughness: 0.32,
    });

    for (let L = 0; L < 5; L++) {
      const ctrl: THREE.Vector3[] = [];
      const xOff = -0.92 + L * 0.46;
      for (let k = 0; k <= 8; k++) {
        const t = k / 8;
        const a = t * Math.PI * 2 + L * 1.1;
        ctrl.push(
          V(
            MAC0.x + xOff + Math.sin(a) * 0.42,
            MAC0.y + 0.12 + Math.cos(a) * 0.54,
            MAC0.z - 0.06 + Math.sin(a * 2 + L) * 0.34
          )
        );
      }
      const cv = new THREE.CatmullRomCurve3(ctrl);
      const pts = cv.getSpacedPoints(56);
      dna.emitDNA(B_MAC_DNA, pts, { nm: 0.036 });
      SITES.macronucleus.push(pts[28].clone());

      // Nascent mRNA wisps streaming out of the macronuclear pores
      const mPts: THREE.Vector3[] = [];
      const outDir = V(xOff * 0.45, 0.55 - (L % 2) * 0.85, 0.58).normalize();
      for (let j = 0; j < 18; j++) {
        const s = j * 0.07;
        mPts.push(
          pts[28]
            .clone()
            .addScaledVector(outDir, s)
            .add(V(Math.sin(j * 0.6 + L) * 0.06, Math.cos(j * 0.5) * 0.06, 0))
        );
      }
      rna.rnaAlong(B_MAC_RNA, mPts, MRNA, 0.044);
    }

    // Multiple dense amplified nucleoli + nuclear pore rings across the macronuclear envelope
    const nucleoliOffsets = [V(-0.62, 0.24, -0.16), V(0.54, 0.28, -0.20), V(0.05, 0.46, -0.14), V(-0.18, -0.10, -0.34)];
    nucleoliOffsets.forEach(off => {
      S_MAC.lobe(MAC0.clone().add(off), 0.20, 0.18, 0.18, col('#c78cff'));
      placed++;
    });
    for (let k = 0; k < 18; k++) {
      const d = randDir();
      const r = macR(d);
      const pPore = MAC0.clone().addScaledVector(d, r + 0.01);
      S_MAC.ring(pPore, d, 0.075, 0.020, col('#b894ff'), 12, 6);
      placed++;
    }
    B_MAC_DNA.done();
    B_MAC_RNA.done();
    S_MAC.done();
    SITES.macronucleus.push(MAC0.clone());

    // Compact Diploid Micronucleus nestled right inside the concave macronuclear hilum pocket!
    const micR = (d: THREE.Vector3) => {
      const sx = d.x / 0.54, sy = d.y / 0.44, sz = d.z / 0.44;
      const base = 1.0 / Math.sqrt(sx * sx + sy * sy + sz * sz);
      const n = fbm(d.x * 3.1 - 4.4, d.y * 3.1 + 7.2, d.z * 3.1, 2);
      return base * (1.0 + 0.035 * (n - 0.5) * 2.0);
    };
    const micMat = cinemaShellMat('micronucleus', '#2092db', '#c4f2ff', {}, {
      attenCol: '#1474bd',
      attenDist: 2.2,
      sssColor: '#7ceeff',
      sssIntensity: 0.42,
      iridescence: 0.56,
      thickness: 0.34,
      roughness: 0.11,
      sheenColor: '#e6fcff',
      normalMap: bump(6, 6),
      normalScale: 0.18,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(MIC0, micR, 56), micMat), true, true));

    // Tightly condensed germline diploid chromatin coil inside the micronucleus
    const B_MIC_DNA = balls('micronucleus', cell, false);
    const micPts: THREE.Vector3[] = [];
    for (let k = 0; k <= 44; k++) {
      const t = k / 44;
      const a = t * Math.PI * 6;
      const rad = 0.25 * Math.sin(t * Math.PI * 0.92 + 0.12);
      micPts.push(V(MIC0.x + (t - 0.5) * 0.62, MIC0.y + Math.cos(a) * rad, MIC0.z + Math.sin(a) * rad));
    }
    dna.emitDNA(B_MIC_DNA, micPts, { nm: 0.032 });
    B_MIC_DNA.done();
    SITES.micronucleus.push(MIC0.clone());
    placed += 2;

    // 16 Glowing Tubular Aerobic Mitochondria with internal folded cristae baffles
    const mitoShellMat = cinemaShellMat('mito', '#d95838', '#ffd0ba', {}, {
      attenCol: '#c44627',
      attenDist: 2.4,
      sssColor: '#ff8a5c',
      sssIntensity: 0.36,
      iridescence: 0.36,
      thickness: 0.34,
      roughness: 0.14,
      sheenColor: '#ffe0d4',
      normalMap: bump(8, 5),
      normalScale: 0.20,
    });
    const S_MITO = sculpt('mito', cell, false, {
      emissive: '#8f2c0c',
      emissiveIntensity: 0.36,
      roughness: 0.30,
      clearcoat: 0.42,
    });
    const cCrisA = col('#ff8c52'), cCrisB = col('#ffd478');

    const mitoAnchors = [
      V(-3.45, -0.45, -0.82),
      V(-2.65, -0.95, -0.62),
      V(-1.35, 1.85, -0.98),
      V(-0.95, 0.42, -1.28),
      V(-0.45, -1.35, -1.05),
      V(1.85, 1.62, -0.88),
      V(2.55, 0.28, -0.62),
      V(2.35, -1.18, -0.82),
      V(3.55, 1.48, -0.82),
      V(3.62, -0.48, -0.58),
      V(5.25, -0.55, -0.52),
      V(6.05, 0.58, -0.62),
      V(-4.15, 0.85, -0.95),
      V(0.65, 1.52, -0.42),
      V(1.42, -1.25, -0.25),
      V(3.95, -1.18, -0.32),
    ];

    mitoAnchors.forEach((pos, idx) => {
      const dir = V(Math.cos(idx * 1.7), Math.sin(idx * 2.1) * 0.55, Math.sin(idx * 1.1) * 0.35).normalize();
      const perp = ortho(dir);
      const halfL = rr(0.42, 0.58);
      const mCurve = new THREE.CatmullRomCurve3([
        pos.clone().addScaledVector(dir, -halfL),
        pos.clone().addScaledVector(perp, 0.14),
        pos.clone().addScaledVector(dir, halfL),
      ]);
      const outerMesh = shade(
        new THREE.Mesh(
          sweepGeo(mCurve, t => 0.20 * Math.sqrt(Math.max(0.06, Math.sin(t * Math.PI))), 18, 12),
          mitoShellMat
        ),
        false,
        true
      );
      cell.add(outerMesh);

      // Sinuous glowing inner cristae ribbon inside each mitochondrion
      const frM = geometry.ptFrames(mCurve, 14);
      const crisPts: THREE.Vector3[] = [];
      for (let k = 2; k <= 12; k++) {
        const t = k / 14;
        const zig = (k % 2 === 0 ? 1 : -1) * 0.085;
        crisPts.push(mCurve.getPointAt(t).addScaledVector(frM.N[k], zig));
      }
      S_MITO.tube(crisPts, 0.052, 0.046, cCrisA, cCrisB, 7, true);
      SITES.mito.push(pos.clone());
      placed++;
    });
    S_MITO.done();

    // ~96 sculpted cryo-EM 80S eukaryotic ribosomes (macronuclear polysomes + free endoplasm clouds)
    const I_RIBO = molBatch('ribosome_80s', T.geoRibo80, cell, false, {
      emissive: '#54380c',
      emissiveIntensity: 0.14,
    });
    let riboCount = 0;

    // Polysome ribbons arcing right around the macronucleus
    for (let ring = 0; ring < 3; ring++) {
      for (let k = 0; k < 10; k++) {
        const a = (k / 10) * Math.PI * 1.55 - 0.4 + ring * 0.3;
        const p = V(
          MAC0.x + Math.cos(a) * (1.85 + ring * 0.36),
          MAC0.y + Math.sin(a) * (1.18 + ring * 0.16),
          MAC0.z - 0.15 + (ring - 1) * 0.28
        );
        if (inCutWedge(p, 0.08)) continue;
        I_RIBO.add(p, qOut(randDir(), k * 0.7), rr(0.76, 0.94));
        riboCount++;
        placed++;
        if (SITES.ribosome_80s.length < 36) SITES.ribosome_80s.push(p.clone());
      }
    }

    // Free cytosolic 80S ribosomes dispersed cleanly across the cutaway endoplasm
    for (let guard = 0; riboCount < 96 && guard < 1200; guard++) {
      const u = rr(-0.74, 0.76);
      const radMax = Math.sqrt(Math.max(0.05, 1 - u * u));
      const p = V(
        C_MID.x + u * (SLIP_RX - 1.25),
        C_MID.y + rr(-1, 1) * radMax * (SLIP_RY - 0.85),
        C_MID.z + rr(-0.92, -0.05) * radMax * (SLIP_RZ - 0.78)
      );
      if (p.distanceTo(MAC0) < 1.55) continue;
      if (p.distanceTo(MIC0) < 0.72) continue;
      if (p.distanceTo(CV_ANT) < 0.95 || p.distanceTo(CV_POST) < 0.90) continue;
      I_RIBO.add(p, qOut(randDir(), riboCount * 0.85), rr(0.72, 0.92));
      riboCount++;
      placed++;
      if (SITES.ribosome_80s.length < 36) SITES.ribosome_80s.push(p.clone());
    }
    I_RIBO.done();
  }

  // -------------------------------------------------------------------------
  // 5. High-Clarity Circular Magnified 9+2 Axoneme & Dynein Inset
  //    (Real Cryo-EM PDB_PROTISTS.tubulin 1JFF + Stepping PDB_PROTISTS.dynein 7KZM!)
  // -------------------------------------------------------------------------
  function buildAxonemeInset(T) {
    const grp = new THREE.Group();
    grp.position.copy(AX0);
    grp.rotation.copy(AX_ROT);
    cell.add(grp);

    const toWorldInset = (localPt: THREE.Vector3) =>
      localPt.clone().applyEuler(AX_ROT).add(AX0);

    // Outer metallic-cyan circular magnifier ring (never clipped!)
    const ringMat = reg(
      'axoneme',
      phys(
        {
          color: '#7ee8ff',
          emissive: '#145875',
          emissiveIntensity: 0.36,
          roughness: 0.22,
          metalness: 0.24,
          clearcoat: 0.68,
        },
        {}
      )
    );
    const R_INSET = 2.04;
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_INSET, 0.044, 16, 68), ringMat));

    // Dark-glass optical backdrop disc sitting cleanly behind the 3D 9+2 cutaway cross-section
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_INSET - 0.02, 56),
      reg(
        'axoneme',
        phys(
          {
            color: '#091324',
            roughness: 0.16,
            transparent: true,
            opacity: 0.56,
            depthWrite: false,
            side: THREE.DoubleSide,
          },
          {}
        )
      )
    );
    glassDisc.position.z = -0.58;
    grp.add(glassDisc);

    // Translucent wet-gel ciliary plasma membrane sleeve surrounding the 9+2 ring cleanly
    const cilSleeveMat = cinemaShellMat('axoneme', '#1e7f96', '#9ceeff', {}, {
      attenCol: '#146278',
      attenDist: 3.4,
      sssColor: '#66e8ff',
      sssIntensity: 0.24,
      iridescence: 0.42,
      thickness: 0.24,
      roughness: 0.16,
      sheenColor: '#ccf8ff',
      normalMap: bump(6, 4),
      normalScale: 0.14,
    });
    const sleeveGeo = new THREE.CylinderGeometry(1.22, 1.22, 0.48, 48, 1, true);
    sleeveGeo.rotateX(Math.PI / 2);
    const sleeveMesh = new THREE.Mesh(sleeveGeo, cilSleeveMat);
    sleeveMesh.position.z = -0.24;
    grp.add(sleeveMesh);

    // 9+2 Axoneme structural framework: 9 A/B microtubule doublets + radial spokes + nexin linkers + central pair
    const S_AX = sculpt('axoneme', grp, false, {
      emissive: '#0e4c6e',
      emissiveIntensity: 0.26,
      roughness: 0.28,
      clearcoat: 0.52,
    });
    const I_TUB = molBatch('tubulin', T.geoTubulin, grp, false, {
      emissive: '#10588c',
      emissiveIntensity: 0.28,
      roughness: 0.28,
      clearcoat: 0.48,
    });
    const dynMat = protMat('dynein', false, {
      emissive: '#784e08',
      emissiveIntensity: 0.26,
      roughness: 0.28,
      clearcoat: 0.50,
    });

    const cATub = col('#6eeeff');
    const cBTub = col('#3f9eff');
    const cSpoke = col('#8cc4ff');
    const cNexin = col('#a88aff');
    const cCentral = col('#5ef2c8');

    const R_RING = 0.94;
    const Z_BACK = -0.46;
    const Z_FRONT = 0.12;
    const doubletCenters: THREE.Vector3[] = [];

    for (let k = 0; k < 9; k++) {
      const ang = (k / 9) * Math.PI * 2 + Math.PI / 2;
      const radDir = V(Math.cos(ang), Math.sin(ang), 0);
      const tanDir = V(-Math.sin(ang), Math.cos(ang), 0); // counter-clockwise tangent
      const aPos = radDir.clone().multiplyScalar(R_RING);
      const bPos = aPos.clone().addScaledVector(tanDir, -0.16).addScaledVector(radDir, -0.025);
      doubletCenters.push(aPos);

      // A-tubule (complete 13-protofilament barrel) & B-tubule (fused 10-protofilament C-barrel)
      S_AX.tube([V(aPos.x, aPos.y, Z_BACK), V(aPos.x, aPos.y, Z_FRONT)], 0.098, 0.098, cATub, cATub, 12, false);
      S_AX.tube([V(bPos.x, bPos.y, Z_BACK), V(bPos.x, bPos.y, Z_FRONT - 0.03)], 0.088, 0.088, cBTub, cBTub, 10, false);
      S_AX.ring(V(aPos.x, aPos.y, Z_FRONT - 0.02), V(0, 0, 1), 0.090, 0.024, col('#a8f6ff'), 16, 6);
      S_AX.ring(V(bPos.x, bPos.y, Z_FRONT - 0.05), V(0, 0, 1), 0.078, 0.022, col('#78c2ff'), 14, 6);

      // Radial spoke projecting from A-tubule inward to the central-pair sheath
      const spStart = aPos.clone().addScaledVector(radDir, -0.11);
      const spEnd = radDir.clone().multiplyScalar(0.35);
      S_AX.stick(V(spStart.x, spStart.y, -0.06), V(spEnd.x, spEnd.y, -0.06), 0.022, cSpoke, cCentral);
      S_AX.lobe(V(spEnd.x, spEnd.y, -0.06), 0.055, 0.055, 0.085, cSpoke);

      // Real Cryo-EM PDB 1JFF alpha/beta-Tubulin heterodimers standing proud on the front protofilament tips!
      for (let d = 0; d < 3; d++) {
        const tZ = Z_FRONT + 0.14 - d * 0.19;
        const pTub = V(aPos.x + radDir.x * 0.015, aPos.y + radDir.y * 0.015, tZ);
        // Align PDB 1JFF long X-axis along local +Z microtubule axis
        const qTub = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), Math.PI / 2);
        qTub.premultiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), ang + d * 0.55));
        I_TUB.add(pTub, qTub, 0.88);
        placed++;
      }
      if (k % 2 === 0) SITES.tubulin.push(toWorldInset(V(aPos.x, aPos.y, Z_FRONT + 0.14)));
      SITES.axoneme.push(toWorldInset(V(aPos.x, aPos.y, 0.0)));
    }

    // Nexin-dynein regulatory complex (N-DRC) linkers + Stepping Cryo-EM PDB 7KZM Axonemal Dynein Arms!
    for (let k = 0; k < 9; k++) {
      const a0 = doubletCenters[k];
      const aNext = doubletCenters[(k + 1) % 9];
      const span = aNext.clone().sub(a0);
      const spanDir = span.clone().normalize();
      const mid = a0.clone().lerp(aNext, 0.50);

      // Elastic nexin bridge linker behind the dynein arms
      S_AX.tube(
        [V(a0.x, a0.y, -0.26), V(mid.x * 0.96, mid.y * 0.96, -0.26), V(aNext.x, aNext.y, -0.26)],
        0.020,
        0.020,
        cNexin,
        cNexin,
        6,
        true
      );

      // Animated stepping Outer Dynein Arm (real cryo-EM PDB 7KZM elongated along local Z!)
      const pivot = new THREE.Group();
      pivot.position.set(a0.x, a0.y, 0.06);
      // Orient local +Z along the bridge vector from A-tubule k toward neighboring B-tubule (k+1)
      const baseQuat = qFromZ(spanDir, k * 0.35);
      pivot.quaternion.copy(baseQuat);
      grp.add(pivot);

      const dynOuter = new THREE.Mesh(T.geoDynein, dynMat);
      dynOuter.position.set(0.06, 0.02, 0.31);
      dynOuter.scale.setScalar(0.86);
      pivot.add(dynOuter);

      // Inner Dynein Arm (compact second 7KZM arm closer to the radial spoke)
      const dynInner = new THREE.Mesh(T.geoDynein, dynMat);
      dynInner.position.set(-0.07, -0.03, 0.28);
      dynInner.scale.setScalar(0.62);
      pivot.add(dynInner);

      const worldDyn = toWorldInset(mid.clone().setZ(0.08));
      SITES.dynein.push(worldDyn);
      dyneinArms.push({
        pivot,
        baseQuat: baseQuat.clone(),
        phase: (k / 9) * Math.PI * 2,
        worldPos: worldDyn,
      });
      placed += 2;
    }

    // Central Pair (+2) singlet microtubules (C1 & C2) + central sheath + 1JFF tubulin crowns
    for (const sx of [-0.15, 0.15]) {
      S_AX.tube([V(sx, 0, Z_BACK), V(sx, 0, Z_FRONT + 0.04)], 0.095, 0.095, cCentral, col('#b8ffea'), 12, false);
      S_AX.ring(V(sx, 0, Z_FRONT + 0.04), V(0, 0, 1), 0.082, 0.024, col('#d4fff2'), 14, 6);
      const qTubC = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), Math.PI / 2);
      I_TUB.add(V(sx, 0, Z_FRONT + 0.02), qTubC, 0.68);
      I_TUB.add(V(sx, 0, Z_FRONT - 0.18), qTubC, 0.68);
      placed += 2;
    }
    // Central pair bridge & glowing sheath ring
    S_AX.stick(V(-0.15, 0, 0), V(0.15, 0, 0), 0.028, cCentral, cCentral);
    S_AX.ring(V(0, 0, -0.05), V(0, 0, 1), 0.32, 0.026, col('#6effd4'), 28, 7);
    SITES.axoneme.push(toWorldInset(V(0, 0, 0.08)));

    S_AX.done();
    I_TUB.done();

    // Crisp NON-CLIPPED caption plaques strictly inside the circular magnifier ring!
    // Top chord at y = +1.55 inside R = 2.04 is 2 * sqrt(2.04^2 - 1.55^2) = 2.65 u > 2.18 u width
    const makeCaption = (wPx: number, hPx: number, drawFn: (g: CanvasRenderingContext2D) => void, wU: number, hU: number, yPos: number) => {
      const cv = document.createElement('canvas');
      cv.width = wPx;
      cv.height = hPx;
      const g = cv.getContext('2d');
      g.clearRect(0, 0, wPx, hPx);
      drawFn(g);
      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = reg(
        'axoneme',
        new THREE.MeshStandardMaterial({
          map: tex,
          emissive: '#ffffff',
          emissiveMap: tex,
          emissiveIntensity: 0.78,
          transparent: true,
          roughness: 0.35,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      );
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(wU, hU), mat);
      mesh.position.set(0, yPos, 0.24);
      grp.add(mesh);
    };

    makeCaption(
      680,
      116,
      g => {
        g.textAlign = 'center';
        g.font = '700 35px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#8ef4ff';
        g.fillText('9+2 AXONEME & DYNEIN', 340, 42);
        g.font = '600 24px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#ffe280';
        g.fillText('PDB 7KZM Dynein · PDB 1JFF Tubulin', 340, 84);
      },
      2.22,
      0.38,
      1.54
    );

    makeCaption(
      620,
      82,
      g => {
        g.textAlign = 'center';
        g.font = '600 26px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#d4f8ff';
        g.fillText('250 nm Ø · 1 u = 10 nm · ATP → ADP + Pᵢ', 310, 48);
      },
      2.00,
      0.27,
      -1.58
    );
  }

  // -------------------------------------------------------------------------
  // Live Physiological Flows: Opaque-Discard 4x4 Atlas (Visible Through Wet Gel!)
  // Required 6 MOL flows: h2o, bacteria, atp, adp, mrna, enzymes
  // -------------------------------------------------------------------------
  const MOL = {
    h2o: ['Water (H₂O · osmotic bilge)', '#5ce0ff', 0, 0.24],
    bacteria: ['Bacterial prey (oral groove → vacuole)', '#6eff9e', 1, 0.29],
    atp: ['Charged ATP (cilia, dynein & V-ATPase)', '#fff06a', 2, 0.27],
    adp: ['Spent ADP + Pᵢ (return to mito)', '#c4a84c', 3, 0.22],
    mrna: ['Macronuclear mRNA → 80S ribosomes', MRNA, 4, 0.27],
    enzymes: ['Lysosomal enzymes (acidic digestion)', '#ff8c42', 5, 0.26],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0d131d';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.04, ...P(0.5, 0.5), s * 0.62);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.52).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const drawBalls = list => {
      g.strokeStyle = ink;
      g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawLine = (pts, w) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // H2O: bent triatomic oxygen + twin hydrogens
        drawLine([[0.28, 0.66], [0.50, 0.42], [0.72, 0.66]], 0.10);
        drawBalls([[0.50, 0.42, 0.21], [0.28, 0.66, 0.14], [0.72, 0.66, 0.14]]);
        break;
      case 1: // Bacteria: plump rod-shaped prey bacillus
        drawLine([[0.28, 0.52], [0.72, 0.48]], 0.28);
        break;
      case 2: // ATP: adenosine + 3 glowing phosphates
        drawBalls([[0.62, 0.5, 0.09], [0.76, 0.5, 0.09], [0.90, 0.5, 0.08], [0.32, 0.5, 0.23]]);
        break;
      case 3: // ADP: adenosine + 2 phosphates
        drawBalls([[0.63, 0.5, 0.09], [0.78, 0.5, 0.09], [0.35, 0.5, 0.22]]);
        break;
      case 4: // mRNA: sinuous transcript strand
        drawLine(Array.from({ length: 17 }, (_, i) => [0.12 + i * 0.0475, 0.5 + 0.18 * Math.sin(i * 0.78)]), 0.11);
        break;
      case 5: // Lysosomal enzymes: catalytic bilobed active-cleft hydrolase
        drawBalls([[0.62, 0.38, 0.18], [0.60, 0.64, 0.17], [0.36, 0.52, 0.21]]);
        break;
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

  // Opaque alpha-discard 4x4 flow shader (visible cleanly through refractive wet-gel membranes!)
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
        gl_FragColor = vec4(vCol * t.r * 1.24 * vFade, 1.);
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
    flowGeo.setAttribute(nm, new THREE.BufferAttribute(arr, d).setUsage(THREE.DynamicDrawUsage))
  );
  const flowPts = new THREE.Points(flowGeo, flowMat);
  flowPts.frustumCulled = false;
  cell.add(flowPts);

  // Additive reaction & expulsion splash rings
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
    fxGeo.setAttribute(nm, new THREE.BufferAttribute(arr, d).setUsage(THREE.DynamicDrawUsage))
  );
  const fxPts = new THREE.Points(fxGeo, fxMat);
  fxPts.frustumCulled = false;
  cell.add(fxPts);

  const live = [];
  const free = [];
  for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  const fx = [];
  const fxFree = [];
  for (let i = FX_MAX - 1; i >= 0; i--) fxFree.push(i);

  const FLOW_COUNTS = Object.fromEntries(Object.keys(MOL).map(k => [k, 0]));
  let flowsOn = true;
  let flowSpeed = 1;
  let fClock = 0;
  let molHi = null;
  let hi = null;

  function splash(at: THREE.Vector3, hex: string, s = 0.36) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.62, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 3.0, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop();
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.05, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. Freshwater H2O osmotic influx -> collecting canals -> contractile vacuole -> expelled water jet!
    {
      rate: 3.4,
      acc: 0.6,
      go: () => {
        const useAnt = rand() < 0.55;
        const cv = cvUnits[useAnt ? 0 : 1];
        if (!cv) return;
        const canal = pickSite('collecting_canals', cv.center.clone().add(V(0.9, 0.2, 0)));
        const outside = canal.clone().add(V(rr(-0.9, 0.9), rr(-0.6, 0.9), rr(-0.8, 0.8)));
        emitFlow(
          'h2o',
          [outside, canal, cv.center.clone()],
          ['pellicle', 'collecting_canals', 'contractile_vacuole', 'vatpase'],
          2.6,
          () => {
            const jetOut = cv.porePos.clone().addScaledVector(cv.poreDir, 1.55);
            emitFlow('h2o', [cv.center.clone(), cv.porePos.clone(), jetOut], ['contractile_vacuole'], 1.4, () =>
              splash(cv.porePos, '#5ce0ff', 0.42)
            );
          }
        );
      },
    },
    // 2. Live bacterial prey swept by oral cilia down the oral groove -> cytostome -> budding food vacuole!
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const start = V(rr(-9.2, -7.2), rr(-0.6, 1.4), rr(1.8, 3.4));
        const gMid = pickSite('oral_groove', V(-5.2, -0.4, 2.0));
        const mouth = CYTOSTOME0.clone();
        const bud = V(-0.68, -1.36, -0.35);
        emitFlow('bacteria', [start, gMid, mouth, bud], ['oral_groove', 'cytostome', 'food_vacuole', 'cilia'], 3.1, () =>
          splash(bud, '#6eff9e', 0.36)
        );
      },
    },
    // 3. Aerobic mitochondrial ATP fueling V-ATPase osmotic pumps & cortical ciliary kinetosomes (+ ADP return)
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        const src = pickSite('mito', V(1.8, 0.5, -0.7));
        const dstKey = rand() < 0.52 ? 'vatpase' : 'kinetosome';
        const dst = pickSite(dstKey, CV_ANT.clone());
        emitFlow('atp', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.25, 0.12)), dst], ['mito', dstKey, 'cilia', 'contractile_vacuole'], 2.5, () => {
          splash(dst, '#fff06a', 0.34);
          emitFlow('adp', [dst, src], ['mito', dstKey], 2.7);
        });
      },
    },
    // 4. Dedicated 9+2 Axoneme Inset ATP -> ADP + Pi motor-fuel stream driving stepping PDB 7KZM dynein arms!
    {
      rate: 3.2,
      acc: 0.8,
      go: () => {
        if (!dyneinArms.length) return;
        const arm = dyneinArms[Math.floor(rand() * dyneinArms.length)];
        const entry = arm.worldPos.clone().add(V(rr(-0.55, 0.55), rr(-0.55, 0.55), rr(0.35, 0.72)));
        emitFlow('atp', [entry, arm.worldPos.clone()], ['axoneme', 'dynein', 'tubulin'], 1.45, () => {
          splash(arm.worldPos, '#ffe866', 0.32);
          const exit = arm.worldPos.clone().add(V(rr(-0.62, 0.62), rr(-0.62, 0.62), rr(0.25, 0.65)));
          emitFlow('adp', [arm.worldPos.clone(), exit], ['axoneme', 'dynein'], 1.55);
        });
      },
    },
    // 5. Polyploid Macronucleus transcribing mRNA -> Cytosolic 80S Ribosomes
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const src = pickSite('macronucleus', MAC0.clone());
        const dst = pickSite('ribosome_80s', V(2.4, 1.1, -0.7));
        emitFlow('mrna', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.22, 0.14)), dst], ['macronucleus', 'ribosome_80s', 'micronucleus'], 2.6, () =>
          splash(dst, MRNA, 0.30)
        );
      },
    },
    // 6. Acidic lysosomal hydrolase enzymes flowing into migrating food vacuoles along cyclosis
    {
      rate: 2.0,
      acc: 0.5,
      go: () => {
        if (!foodVacuoles.length) return;
        const fv = foodVacuoles[Math.floor(rand() * foodVacuoles.length)];
        const dst = fv.grp.position.clone();
        const src = dst.clone().add(V(rr(-1.4, 1.4), rr(-1.0, 1.0), rr(-0.6, 0.4)));
        emitFlow('enzymes', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.2, 0.1)), dst], ['food_vacuole', 'cytoproct', 'cytostome'], 2.4, () =>
          splash(dst, '#ff9c38', 0.36)
        );
      },
    },
  ];

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
      const base = MOL[p.type][3] * 1.35;
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
      q.z += a * Math.sin(w * 4.8 + p.ph * 1.9);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.48 : 0.52) : 1);
      fFade[p.i] = anyHi && !lit ? 0.28 : 1;
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
  }

  // -------------------------------------------------------------------------
  // Live Organelle Dynamics:
  //  1. ~920 Metachronal Cilia Traveling Waves
  //  2. Alternating Diastole/Systole Contractile Vacuole & Collecting Canal Pumping
  //  3. Migrating Cyclosis Food Vacuoles with Live Cyan-Green -> Amber Acidic pH Color Shift
  //  4. Stepping PDB 7KZM Dynein Motor Arms inside the 9+2 Axoneme Inset
  // -------------------------------------------------------------------------
  const tmpM = new THREE.Matrix4();
  const tmpQ = new THREE.Quaternion();
  const tmpRot = new THREE.Quaternion();
  const tmpS = new THREE.Vector3();
  const Z_AXIS = V(0, 0, 1);
  const X_AXIS = V(1, 0, 0);
  const cFresh = new THREE.Color('#4ef2c8');
  const cAcid = new THREE.Color('#ff9c38');
  const cSpent = new THREE.Color('#d9626b');
  const cFreshE = new THREE.Color('#135c4e');
  const cAcidE = new THREE.Color('#803808');
  const cSpentE = new THREE.Color('#5e1f24');

  function updateDynamics(dt: number) {
    const rate = Math.max(0.25, Math.min(2.8, flowSpeed));
    waveClock += dt * rate;
    pumpClock += dt * rate;
    cyclosisClock += dt * rate * 0.045;

    // 1. Update ~920 metachronal cilia traveling waves
    if (ciliaInstMesh && ciliaRecords.length) {
      const w = waveClock * 4.4;
      for (let i = 0; i < ciliaRecords.length; i++) {
        const rec = ciliaRecords[i];
        const ph = w - rec.phase;
        // Asymmetric ciliary beat: crisp power stroke + sweeping recovery wave
        const bend = 0.44 * Math.sin(ph) + 0.14 * Math.cos(ph * 2.0);
        tmpRot.setFromAxisAngle(Z_AXIS, bend);
        tmpQ.copy(rec.baseQuat).multiply(tmpRot);
        tmpS.set(rec.scale, rec.scale, rec.scale);
        tmpM.compose(rec.pos, tmpQ, tmpS);
        ciliaInstMesh.setMatrixAt(i, tmpM);
      }
      ciliaInstMesh.instanceMatrix.needsUpdate = true;
    }

    // 2. Alternating Diastole / Systole pulsing of Anterior & Posterior Star Contractile Vacuoles
    cvUnits.forEach(cv => {
      const cyc = (pumpClock * 0.42 + cv.phaseOffset / (Math.PI * 2)) % 1.0;
      const cycNum = Math.floor(pumpClock * 0.42 + cv.phaseOffset / (Math.PI * 2));
      // Smooth diastole filling (0 -> 0.72), brisk systole expulsion (0.72 -> 1.0)
      let fill: number;
      if (cyc < 0.72) {
        const u = cyc / 0.72;
        fill = 0.5 * (1 - Math.cos(u * Math.PI));
      } else {
        const u = (cyc - 0.72) / 0.28;
        fill = Math.pow(1 - u, 1.8);
        if (cycNum !== cv.lastSplashedCycle && u > 0.25) {
          cv.lastSplashedCycle = cycNum;
          if (flowsOn) splash(cv.porePos, '#66e6ff', 0.52);
        }
      }
      const hubScale = 0.62 + 0.54 * fill;
      cv.hubGrp.scale.setScalar(hubScale);
      // Collecting canal ampullae expand in antiphase as the central bladder contracts!
      const canalFill = 1.0 - fill;
      const radialS = 0.86 + 0.30 * canalFill;
      cv.armsGrp.scale.set(radialS, radialS, 0.90 + 0.20 * canalFill);
    });

    // 3. Migrating Cyclosis Food Vacuoles with Cyan-Green -> Amber Acidic pH Color Transition
    if (cyclosisCurve && foodVacuoles.length) {
      foodVacuoles.forEach((fv, idx) => {
        const u = (fv.u0 + cyclosisClock) % 1.0;
        cyclosisCurve.getPointAt(u, fv.grp.position);
        const rad = 0.44 * (1.0 - 0.34 * u) * (u < 0.06 ? 0.55 + 0.45 * (u / 0.06) : 1.0);
        fv.grp.scale.setScalar(rad);
        fv.grp.rotation.y = cyclosisClock * 6.0 + idx;

        // Shrink internal intact bacterial prey as acidic lysosomal digestion progresses
        const preyScale = Math.max(0.18, 1.0 - u * 0.85);
        fv.preyGroup.scale.setScalar(preyScale);

        // Live color shift: cyan-green (fresh) -> amber-orange (acidic digestion) -> copper-rose (spent)
        if (u < 0.45) {
          const k = u / 0.45;
          fv.mat.color.copy(cFresh).lerp(cAcid, k);
          if (hi !== 'food_vacuole') fv.mat.emissive.copy(cFreshE).lerp(cAcidE, k);
        } else {
          const k = (u - 0.45) / 0.55;
          fv.mat.color.copy(cAcid).lerp(cSpent, k);
          if (hi !== 'food_vacuole') fv.mat.emissive.copy(cAcidE).lerp(cSpentE, k);
        }
        if (SITES.food_vacuole[idx]) SITES.food_vacuole[idx].copy(fv.grp.position);
      });
    }

    // 4. Stepping Power-Stroke Oscillation of Cryo-EM PDB 7KZM Dynein Motor Arms inside 9+2 Inset
    const dw = waveClock * 5.2;
    dyneinArms.forEach(arm => {
      const stroke = 0.20 * Math.sin(dw - arm.phase) + 0.06 * Math.sin((dw - arm.phase) * 2.0);
      tmpRot.setFromAxisAngle(X_AXIS, stroke);
      arm.pivot.quaternion.copy(arm.baseQuat).multiply(tmpRot);
    });
  }

  // -------------------------------------------------------------------------
  // Resize, HUD Legend, Flows Key & Highlight System
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
  keyEl.innerHTML =
    `<div class="row">Bases ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>mRNA</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Paramecium caudatum: a complete single-celled freshwater predator powered by ~920 metachronal 9+2 cilia, alternating star contractile vacuoles, cyclosis food vacuoles, and dual somatic/germline nuclei.';
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
    if (!inf) {
      tipBox.textContent = TIP0;
      return;
    }
    const b = document.createElement('b');
    b.textContent = PARTS.find(p => p[0] === k)?.[1] ?? k;
    tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Role: ${inf[1]}`);
  }

  function setHi(k) {
    if (hi && REG[hi]) {
      REG[hi].mats.forEach(m => {
        if (m.userData.e0) m.emissive.copy(m.userData.e0);
        if (m.userData.i0 !== undefined) m.emissiveIntensity = m.userData.i0;
      });
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
  const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#7ee8ff');

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
    e.target.textContent = `View: ${name}`;
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
    flowPts.visible = fxPts.visible = flowsOn;
    e.target.textContent = `Flows: ${flowsOn ? 'on' : 'off'}`;
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
    a.download = `paramecium-${curView}-realistic.png`;
    a.href = renderer.domElement.toDataURL('image/png');
    a.click();
  };

  const held = new Set();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !e.target.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k);
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), stepVec = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  controls.enableRotate = false;
  let lookFrom = null;
  let downAt = null;
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
          .find(h => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has(h.object.material));
        if (hit) {
          const k = map.get(hit.object.material);
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
  const smoother = x => x * x * x * (x * (x * 6 - 15) + 10);

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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [-0.4, 0.2, 0])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.0, 0.25, 0.0);
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
  const POINTS = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      pellicle: SITES.pellicle[6] ?? V(-5.6, 2.35, 1.35),
      cilia: SITES.cilia[8] ?? V(-6.4, 2.85, 1.15),
      kinetosome: SITES.kinetosome[4] ?? V(-3.18, 2.42, 1.25),
      trichocyst: SITES.trichocyst[3] ?? V(-5.1, 2.65, -0.55),
      oral_groove: SITES.oral_groove[3] ?? V(-4.9, -0.35, 2.15),
      cytostome: SITES.cytostome[0] ?? CYTOSTOME0.clone(),
      food_vacuole: SITES.food_vacuole[2] ?? V(4.1, -1.1, -0.58),
      cytoproct: SITES.cytoproct[0] ?? CYTOPROCT0.clone(),
      contractile_vacuole: SITES.contractile_vacuole[0] ?? CV_ANT.clone(),
      collecting_canals: SITES.collecting_canals[2] ?? CV_ANT.clone().add(V(-0.85, 0.55, -0.1)),
      vatpase: SITES.vatpase[4] ?? CV_ANT.clone().add(V(0.82, 0.48, 0.12)),
      macronucleus: SITES.macronucleus[0] ?? MAC0.clone(),
      micronucleus: SITES.micronucleus[0] ?? MIC0.clone(),
      mito: SITES.mito[6] ?? V(2.55, 0.28, -0.62),
      ribosome_80s: SITES.ribosome_80s[4] ?? V(2.1, 1.25, -0.65),
      axoneme: SITES.axoneme[SITES.axoneme.length - 1] ?? AX0.clone(),
      dynein: SITES.dynein[1] ?? AX0.clone().add(V(0.82, 0.55, 0.12)),
      tubulin: SITES.tubulin[0] ?? AX0.clone().add(V(0.0, 0.96, 0.22)),
    };
    let P = { ...base };
    if (vName === 'cilia') {
      P = {
        ...base,
        pellicle: SITES.pellicle[4] ?? V(-4.8, 2.1, 1.5),
        cilia: SITES.cilia[5] ?? V(-5.6, 2.8, 1.3),
        kinetosome: SITES.kinetosome[2] ?? V(-3.18, 2.2, 1.4),
        trichocyst: SITES.trichocyst[SITES.trichocyst.length - 3] ?? V(-4.7, 2.9, -0.3),
      };
    } else if (vName === 'osmosis') {
      P = {
        ...base,
        contractile_vacuole: CV_ANT.clone(),
        collecting_canals: SITES.collecting_canals[1] ?? CV_ANT.clone().add(V(-0.95, 0.35, 0.1)),
        vatpase: SITES.vatpase[2] ?? CV_ANT.clone().add(V(0.75, 0.55, 0.15)),
      };
    } else if (vName === 'feeding') {
      P = {
        ...base,
        oral_groove: SITES.oral_groove[2] ?? V(-5.2, -0.2, 2.1),
        cytostome: CYTOSTOME0.clone(),
        food_vacuole: SITES.food_vacuole[1] ?? V(1.65, -1.52, -0.52),
        cytoproct: CYTOPROCT0.clone(),
      };
    } else if (vName === 'nuclei') {
      P = {
        ...base,
        macronucleus: MAC0.clone(),
        micronucleus: MIC0.clone(),
        mito: SITES.mito[6] ?? V(2.55, 0.28, -0.62),
        ribosome_80s: SITES.ribosome_80s[2] ?? V(2.3, 0.95, -0.62),
      };
    } else if (vName === 'axoneme') {
      P = {
        ...base,
        axoneme: AX0.clone(),
        dynein: SITES.dynein[0] ?? AX0.clone().add(V(0.65, 0.72, 0.12)),
        tubulin: SITES.tubulin[0] ?? AX0.clone().add(V(0.0, 0.96, 0.24)),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      pellicle: 4.2,
      cilia: 3.4,
      kinetosome: 2.5,
      trichocyst: 2.6,
      oral_groove: 3.6,
      cytostome: 2.5,
      food_vacuole: 3.2,
      cytoproct: 2.2,
      contractile_vacuole: 2.6,
      collecting_canals: 2.7,
      vatpase: 2.1,
      macronucleus: 2.9,
      micronucleus: 1.9,
      mito: 2.2,
      ribosome_80s: 2.4,
      axoneme: 2.4,
      dynein: 2.0,
      tubulin: 2.0,
    };
    const DIRS = {
      pellicle: V(-0.52, 0.34, 0.78).normalize(),
      cilia: V(-0.56, 0.38, 0.74).normalize(),
      kinetosome: V(-0.46, 0.30, 0.84).normalize(),
      trichocyst: V(-0.48, 0.44, 0.76).normalize(),
      oral_groove: V(-0.34, -0.18, 0.92).normalize(),
      cytostome: V(-0.18, -0.22, 0.96).normalize(),
      contractile_vacuole: V(0.10, 0.20, 0.97).normalize(),
      collecting_canals: V(0.10, 0.20, 0.97).normalize(),
      vatpase: V(0.14, 0.24, 0.96).normalize(),
      axoneme: V(0.24, 0.05, 0.97).normalize(),
      dynein: V(0.24, 0.05, 0.97).normalize(),
      tubulin: V(0.24, 0.05, 0.97).normalize(),
    };
    const dir = DIRS[k] ?? V(0.24, 0.20, 0.95).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.5, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    pellicle: ['cilia', 'kinetosome', 'trichocyst'],
    cilia: ['kinetosome', 'axoneme', 'dynein', 'tubulin'],
    oral_groove: ['cytostome', 'food_vacuole'],
    food_vacuole: ['cytostome', 'cytoproct'],
    contractile_vacuole: ['collecting_canals', 'vatpase'],
    macronucleus: ['micronucleus', 'ribosome_80s'],
    axoneme: ['dynein', 'tubulin'],
  };
  const saved = new Map();
  const hidden = [];
  let ghostArgs = null;
  let OBJS = null;
  let matMap = null;

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
    const out = {};
    cell.traverse(o => {
      const k = o.material && of.get(o.material);
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
          ...('transmission' in m && { transmission: m.transmission }),
        });
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

  let blinkT0 = null;
  let blinkN = 3;
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
      caps.visible = cutOn;
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
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 4.0) / 20));
      cell.rotation.y = 0.085 * Math.sin(sway * 0.12);
      updateDynamics(dt);
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
        m.emissive.copy(c);
        m.emissiveIntensity = 0.28 + 0.78 * k;
      });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = k; });
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
    buildPellicleCiliaAndCortex();
    buildFeedingAndCyclosis();
    buildContractileVacuoles();
    buildNucleiMitoAndRibosomes(T);
    buildAxonemeInset(T);
    // Warm up dynamic motion & physiological flows so frame 1 is fully alive
    updateDynamics(0.2);
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // Explorer postMessage Protocol & window.__cell Debug Contract
  // -------------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts = [];
  let tagSeq = 0;
  let sentReady = false;
  let sendTagsAlias = false;
  const scr = V();

  const say = () =>
    toExplorer({
      type: 'state',
      view: curView,
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
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]) });
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
        speed.value = m.v;
        speed.oninput();
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
    get org() {
      return {
        ciliaCount: ciliaRecords.length,
        waveClock,
        pumpClock,
        cyclosisClock,
        cvScales: cvUnits.map(cv => cv.hubGrp.scale.x),
        foodVacuoles: foodVacuoles.length,
        dyneinArms: dyneinArms.length,
      };
    },
    pointsOf,
    setMol: k => { molHi = k; },
    step: (dt = 0.05, n = 1) => {
      const total = dt * n;
      const steps = Math.max(1, Math.min(600, Math.ceil(total / 0.05)));
      const h = total / steps;
      for (let i = 0; i < steps; i++) {
        updateDynamics(h);
        updateFlows(h);
      }
    },
    shot: () => { composer.render(); return renderer.domElement.toDataURL('image/png'); },
  };
});
