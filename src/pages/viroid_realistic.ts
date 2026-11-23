// @ts-nocheck
import * as THREE from 'three';
import { PDB_SUBVIRAL } from '../molecules/pdb_subviral.js';
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
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeSculptedMesh,
  BASE,
  RPAIR,
  col,
} from '../index.js';

runBiologyApp(20261123, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, randDir, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // True Molecular Scale & Spatial Composition:
  // - 1 scene unit ~ 5.0 nm (NM = 0.20) for the 50 x 2 nm 359-nt naked PSTVd ssRNA rod
  //   and the 14 nm 12-subunit host plant RNA Polymerase II (PDB 1WCM)
  // - Magnified circular RNA Atomic Inset (lower-left): 1 scene unit ~ 2.2 A
  // - All three heroes framed cleanly between #legend (left) and #flows (right)
  // -------------------------------------------------------------------------
  const NM = 0.20;

  // Host plant nucleoplasm cutaway halo (far-rear dark-field nuclear lumen — NOT a viral coat!)
  const NUC_MID = V(0.10, -0.10, -1.25);
  const NUC_RX = 7.55;
  const NUC_RY = 5.35;
  const NUC_RZ = 4.30;
  const P0 = V(-5.95, -0.10, -1.25);

  // Rolling-circle theater anchors (right / upper-right quadrant)
  const POL2_POS = V(4.40, 2.15, -0.10);
  const TFIIIA_POS = V(2.72, 1.80, 0.88);
  const LIGASE_POS = V(4.45, -2.35, 0.55);
  const PROGENY_POS_A = V(5.95, -1.35, 0.44);
  const PROGENY_POS_B = V(5.75, -3.45, 0.22);

  // Circular magnified RNA atomic inset (lower-left foreground, never clipped)
  const ATOM0 = V(-3.70, -2.95, 1.55);
  const ATOM_ROT = new THREE.Euler(0.05, 0.12, 0.0);

  // Exact 5 required camera VIEWS (NON-NEGOTIABLE)
  const VIEWS = [
    ['overview', V(0.30, 0.55, 32.8), V(0.0, -0.22, 0.05)],
    ['domains', V(-1.75, 1.75, 20.8), V(-1.75, 1.15, 0.55)],
    ['loope', V(-1.25, 2.05, 8.60), V(-1.50, 1.62, 0.72)],
    ['rolling_circle', V(4.55, 0.15, 15.8), V(4.35, -0.20, 0.35)],
    ['atoms', V(-2.90, -2.75, 11.4), V(-3.70, -2.95, 1.55)],
  ];
  let view = 0;
  let curView = 'overview';

  // Cinema dark-field WebGL2 plant nucleoplasm microscopy stage (rich jewel contrast, zero bloom washout)
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 540,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#0d1b2c',
    bgMid: '#050b16',
    bgOuter: '#010308',
    keyColor: '#fff4e6',
    keyIntensity: 2.30,
    rimColor: '#56ccff',
    rimIntensity: 1.50,
    lampColor: '#ffd9a6',
    lampIntensity: 10.5,
    lampPos: [0.5, 2.8, 7.6],
    bloomStrength: 0.17,
    bloomRadius: 0.40,
    bloomThreshold: 0.92,
    exposure: 0.90,
    bokehCount: 220,
    bokehColor: '#48c8aa',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key } = studio;

  // Subtle emerald-cyan rim fill lamp accentuating Loop E, CCR hairpin, and the atomic inset
  const bioLamp = new THREE.PointLight('#48d8b8', 5.2, 26, 2);
  bioLamp.position.set(-3.4, -1.6, 6.4);
  scene.add(bioLamp);

  // Subtle magenta-amber fill accenting the right-side Pol II & Ligase rolling-circle theater
  const polLamp = new THREE.PointLight('#ff82b8', 4.6, 22, 2);
  polLamp.position.set(5.4, -0.2, 5.2);
  scene.add(polLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  const caps = new THREE.Group();
  cell.add(caps);

  // Align studio's 90-degree front-right cutaway planes with P0 on the plant nuclear lumen halo
  studio.CUT_LOCAL[0].set(V(-1, 0, 0), P0.x);
  studio.CUT_LOCAL[1].set(V(0, 0, -1), P0.z);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.6);
  const bump = (rx = 12, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // Exact 14 PARTS & REG keys (NON-NEGOTIABLE contract)
  const PARTS = [
    ['tl_domain', 'Terminal Left domain (TL · Pol II initiation loop)', '#3ce8ff'],
    ['p_domain', 'Pathogenicity domain (P · virulence bulges)', '#ff7b54'],
    ['c_domain', 'Central Conserved Region (C · catalytic core)', '#36e698'],
    ['v_domain', 'Variable domain (V · strain-diverse stem)', '#b178ff'],
    ['tr_domain', 'Terminal Right domain (TR · trafficking loop)', '#4f95ff'],
    ['loop_e', 'Conserved Loop E motif (non-canonical base triple)', '#d8ff4d'],
    ['ccr_hairpin', 'CCR Hairpin I (cleavage & ligation site)', '#5affdf'],
    ['wobble_gu', 'Golden G·U wobble base pairs (non-canonical)', '#ffd447'],
    ['pol2', 'Host plant RNA Polymerase II (PDB 1WCM)', '#62b6ff'],
    ['tfiiia', 'Plant TFIIIA-7ZF (7-zinc-finger RNA bridge)', '#ff9b42'],
    ['minus_rna', 'Nascent (-) multimeric RNA concatemer', '#ff5ca8'],
    ['plus_rna', 'Cleaved (+) progeny circular RNA rings', '#52f5c8'],
    ['ligase', 'Host plant DNA ligase 1 (RNA circularization)', '#ffb84d'],
    ['rna_atoms', "Atomic RNA inset (2'-OH ribose, P, G·U H-bonds)", '#ffe46b'],
  ];

  const INFO = {
    tl_domain: [
      'Covalently closed left terminal hairpin and A-form stems (nt 1–46 / 314–359) with zero free 5\' or 3\' ends',
      'Houses the initiation site where plant TFIIIA-7ZF recruits host nuclear RNA Polymerase II onto naked RNA',
    ],
    p_domain: [
      'Purine-rich asymmetric internal loops and flexible helical stems (nt 47–71 / 287–313) flanking the left flank',
      'Modulates host disease symptoms; host Dicer cleaves this region into vd-siRNAs that silence plant genes',
    ],
    c_domain: [
      'Highly conserved central rod core (nt 72–112 / 247–286) shared across all nuclear Pospiviroidae',
      'Orchestrates rolling-circle processing, hosting both the non-canonical Loop E motif and CCR cleavage hairpin',
    ],
    v_domain: [
      'Sequence-divergent paired stems and compact internal loops (nt 113–145 / 215–246) bridging C and TR domains',
      'Tolerates rapid mutation across viroid strains while maintaining overall 50 nm rod-like thermodynamic stability',
    ],
    tr_domain: [
      'Covalently closed right terminal hairpin stem-loop (nt 146–214) encoding the RY systemic trafficking motif',
      'Binds host plant phloem lectins to move naked circular RNA cell-to-cell across plasmodesmata',
    ],
    loop_e: [
      'Conserved 3D non-canonical internal bulge stabilized by trans-Hoogsteen base triples, sheared pairs, and Mg2+',
      'Acts as a rigid structural lock controlling nuclear import, replication fidelity, and host ligase recognition',
    ],
    ccr_hairpin: [
      'Metastable Hairpin I stem-loop emerging from the upper Central Conserved Region during (+) strand processing',
      'Exposes the precise G95-G96 phosphodiester cleavage site and positions cleaved 5\'-P and 3\'-OH ends for ligation',
    ],
    wobble_gu: [
      'Sixteen non-canonical Guanine-Uracil (G·U) wobble pairs linked by two shifted hydrogen bonds along the rod',
      'Introduce subtle helical twists and hydrogen-bond donor/acceptor pockets recognized by host plant proteins',
    ],
    pol2: [
      'Real 12-subunit eukaryotic RNA Polymerase II core (RCSB PDB 1WCM, ~14 nm) hijacked inside the plant nucleus',
      'Normally transcribes plant DNA into mRNA, yet PSTVd tricks it into copying circular ssRNA into multimeric (-) RNA',
    ],
    tfiiia: [
      'Plant-specific 7-zinc-finger splicing variant (TFIIIA-7ZF) bearing seven C2H2 finger folds and coordinated Zn2+ ions',
      'Bridges the naked viroid RNA template directly into the Pol II active cleft so Pol II accepts an RNA substrate',
    ],
    minus_rna: [
      'Luminous multimeric (-) complementary RNA concatemer spooling continuously from the Pol II exit channel',
      'Serves as the nuclear template for a second round of Pol II synthesis generating multimeric (+) linear strands',
    ],
    plus_rna: [
      'Unit-length 359-nt (+) RNA monomers cleaved at the CCR and covalently sealed into closed progeny rings',
      'Spontaneously fold back into rigid 50 x 2 nm rods ready to infect adjacent plant cells via plasmodesmata',
    ],
    ligase: [
      'Host plant ATP-dependent DNA ligase 1 redirected to seal 5\'-phosphate and 3\'-hydroxyl RNA termini in the CCR',
      'Completes asymmetric rolling-circle replication by covalently closing linear (+) monomers into naked rings',
    ],
    rna_atoms: [
      'Magnified atomic detail (C, H, N, O, P) highlighting the ribose 2\'-OH hydroxyl, phosphodiester P, and G·U pair',
      'Shows why RNA 2\'-OH enables self-folding and nuclease cleavage while two wobble H-bonds tilt G·U geometry',
    ],
  };

  const REG = {};
  const reg = (k, m) => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    (m.isShaderMaterial ? r.imp : r.mats).push(m);
    return m;
  };
  const phys = (o, clipObj = {}) => new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.86, ...clipObj, ...o });
  const protMat = (k, clip = false, extra = {}, clipPlanes = CUT) => {
    const m = phys(
      {
        vertexColors: true,
        roughness: 0.34,
        metalness: 0.05,
        clearcoat: 0.38,
        clearcoatRoughness: 0.24,
        sheen: 0.38,
        sheenColor: '#f0fbff',
        normalMap: protBump,
        normalScale: new THREE.Vector2(0.32, 0.32),
        side: THREE.DoubleSide,
        clippingPlanes: clip ? clipPlanes : null,
        clipIntersection: true,
        ...extra,
      },
      {}
    );
    return reg(k, m);
  };
  const sculpt = (k, parent = cell, clip = false, extra = {}, clipPlanes = CUT) =>
    makeSculptedMesh(protMat(k, clip, extra, clipPlanes), parent);

  const shells = [];
  const LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  let placed = 0;

  function cinemaShellMat(k, solidHex, gelHex, clipObj, opts = {}) {
    const m = makeCinemaMembraneMat(clipObj, opts.normalMap ?? bump(12, 10), {
      color: gelHex,
      attenuationColor: opts.attenCol ?? solidHex,
      attenuationDistance: opts.attenDist ?? 5.2,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.28,
      iridescence: opts.iridescence ?? 0.56,
      thickness: opts.thickness ?? 0.45,
      roughness: opts.roughness ?? 0.12,
      sheenColor: opts.sheenColor ?? '#d8ffff',
      normalScale: opts.normalScale ?? 0.20,
    });
    m.userData.cols = { solid: new THREE.Color(solidHex), gel: new THREE.Color(gelHex) };
    shells.push(m);
    return k ? reg(k, m) : m;
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

  function balls(k, parent = cell, clip = false, cutPlanes = CUT) {
    let n = 0, cap = 1 << 12;
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

  // Synthetic cryo-EM Gaussian molecular surface helper for DNA Ligase 1 & TFIIIA-7ZF complexes
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

  // Site anchors & live animation registries
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));
  let templateRingGrp: THREE.Group | null = null;
  let tfiiiaGrp: THREE.Group | null = null;
  let ligaseGrp: THREE.Group | null = null;
  let loopECoreGrp: THREE.Group | null = null;
  let ccrHairpinGrp: THREE.Group | null = null;
  let minusCurve: THREE.CatmullRomCurve3 | null = null;
  const minusPulseBeads: { mesh: THREE.Mesh; u0: number }[] = [];
  const progenyRings: { grp: THREE.Group; basePos: THREE.Vector3; phase: number }[] = [];
  const hBondBeads: { mesh: THREE.Mesh; baseScale: number; phase: number }[] = [];
  let pol2ActiveSite = POL2_POS.clone().add(V(-0.35, -0.10, 0.35));
  let loopECenter = V(-1.85, 1.18, 0.68);
  let ccrCenter = V(-0.98, 2.08, 0.68);
  let dynClock = 0;

  // -------------------------------------------------------------------------
  // 1. Dark-Field Plant Nucleoplasm Cutaway Halo (Host Nuclear Microenvironment)
  //    Clearly far outside the naked viroid rod (ZERO capsid, ZERO viral envelope!)
  // -------------------------------------------------------------------------
  const OFF_X = P0.x - NUC_MID.x; // -6.30
  function nucR(d: THREE.Vector3): number {
    const dx = d.x, dy = d.y, dz = d.z;
    const A = (dx * dx) / (NUC_RX * NUC_RX) + (dy * dy) / (NUC_RY * NUC_RY) + (dz * dz) / (NUC_RZ * NUC_RZ);
    const B = (OFF_X * dx) / (NUC_RX * NUC_RX);
    const C = (OFF_X * OFF_X) / (NUC_RX * NUC_RX) - 1.0;
    const disc = Math.max(1e-6, B * B - A * C);
    const r0 = (-B + Math.sqrt(disc)) / Math.max(1e-6, A);
    const qx = OFF_X + r0 * dx, qy = r0 * dy, qz = r0 * dz;
    const n = fbm(qx * 0.25 + 3.1, qy * 0.32 - 4.7, qz * 0.32 + 1.9, 3);
    return r0 * (1.0 + 0.022 * (n - 0.5) * 2.0);
  }

  function buildPlantNucleoplasmHalo() {
    // Iridescent wet-gel host plant nuclear envelope cutaway shell (not in REG so hovering viroid parts stays surgical)
    const nucShellMat = cinemaShellMat(null, '#0d2638', '#3e8fa0', CLIP, {
      attenCol: '#091b2b',
      attenDist: 10.5,
      sssColor: '#2ba698',
      sssIntensity: 0.14,
      iridescence: 0.52,
      thickness: 0.34,
      roughness: 0.14,
      sheenColor: '#64d6c8',
      normalMap: bump(10, 8),
      normalScale: 0.14,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(P0, nucR, 112), nucShellMat), false, true));

    // Deep obsidian-indigo dark-field concave nucleoplasmic wall backing the molecular theater
    const innerNucMat = applyBacklitSSS(
      phys(
        {
          color: '#050c17',
          roughness: 0.84,
          clearcoat: 0.08,
          normalMap: bump(10, 7),
          normalScale: new THREE.Vector2(0.12, 0.12),
          side: THREE.BackSide,
        },
        CLIP
      ),
      '#1d7a72',
      0.10,
      2.8
    );
    cell.add(new THREE.Mesh(shellGeo(P0, d => nucR(d) - 0.15, 84), innerNucMat));

    // Double-membrane plant nuclear envelope cutaway rim (outer NE -> perinuclear space -> inner NE + plant lamina)
    const NE_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.24, '#3ab0b2'],
      [0.24, 0.68, '#0b1d30'],
      [0.68, 0.88, '#267c78'],
      [0.88, 1.0, '#144454'],
    ];
    const capMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.36,
      metalness: 0.08,
      emissive: '#07222e',
      emissiveIntensity: 0.22,
      side: THREE.DoubleSide,
    });
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(P0, nucR, ax, 0.15, NE_LAYERS, 180), capMat));
    }

    // Subtle dark-field nuclear lamina chromatin specks along the far-back rim (zero visual clutter behind inset!)
    const npcMat = phys({
      vertexColors: true,
      roughness: 0.62,
      emissive: '#061a26',
      emissiveIntensity: 0.12,
      clearcoat: 0.10,
      clippingPlanes: CUT,
      clipIntersection: true,
    });
    const S_NPC = makeSculptedMesh(npcMat, cell, false, false);
    const cNpcOuter = col('#164552');
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2;
      const dir = V(Math.cos(a) * 0.78, Math.sin(a) * 0.68, -0.82).normalize();
      const r = nucR(dir);
      const p = P0.clone().addScaledVector(dir, r - 0.18);
      if (p.z > P0.z - 1.2 || (p.x < -1.0 && p.y < -0.5)) continue;
      S_NPC.lobe(p, 0.14, 0.11, 0.08, cNpcOuter);
      placed++;
    }
    S_NPC.done();
  }

  // -------------------------------------------------------------------------
  // 2. Hero 50 x 2 nm Naked 359-nt Circular PSTVd ssRNA Rod
  //    All 5 domains (TL, P, C, V, TR), alternating A-form helical stems &
  //    bulged internal loops, Watson-Crick A-U/G-C rungs, 16 golden G·U wobble
  //    pairs, bioluminescent Loop E motif, and elevated CCR Hairpin I!
  // -------------------------------------------------------------------------
  function buildPstvdRod() {
    // Graceful organic 3D spine for the 50 nm (~9.7 u) naked circular ssRNA rod
    const rodCurve = new THREE.CatmullRomCurve3([
      V(-6.25, 1.48, 0.50),  // TL closed terminal left hairpin
      V(-4.35, 1.30, 0.68),  // P pathogenicity domain
      V(-1.80, 1.12, 0.74),  // C central conserved core (Loop E + CCR Hairpin I)
      V(0.55, 0.88, 0.54),   // V variable domain
      V(2.65, 0.72, 0.34),   // TR closed terminal right hairpin
    ]);

    const N_PAIRS = 179; // 179 upper + 180 lower = exact 359 nucleotides!
    const fr = geometry.ptFrames(rodCurve, N_PAIRS);

    // Authentic PSTVd 5-domain boundaries along the 179-step rod axis
    function domainAt(i: number): string {
      if (i < 35) return 'tl_domain';
      if (i < 67) return 'p_domain';
      if (i < 115) return 'c_domain';
      if (i < 145) return 'v_domain';
      return 'tr_domain';
    }

    const DOM_PALETTE = {
      tl_domain: { bbA: '#00c8f0', bbB: '#48e6ff', em: '#04384f', bulgeTint: '#72f0ff' },
      p_domain: { bbA: '#ff5224', bbB: '#ff8a4c', em: '#591a06', bulgeTint: '#ffaa76' },
      c_domain: { bbA: '#00c970', bbB: '#44f0a2', em: '#064026', bulgeTint: '#80ffbe' },
      v_domain: { bbA: '#9248ff', bbB: '#bd88ff', em: '#2e105e', bulgeTint: '#d6b4ff' },
      tr_domain: { bbA: '#2472ff', bbB: '#66a8ff', em: '#0a265c', bulgeTint: '#9ac6ff' },
    };

    // Sculpt emitters & ball/stick emitters per domain + Loop E + CCR Hairpin + G·U wobble
    const domSculpt = {};
    const domBalls = {};
    Object.entries(DOM_PALETTE).forEach(([k, pal]) => {
      domSculpt[k] = sculpt(k, cell, false, {
        emissive: pal.em,
        emissiveIntensity: 0.22,
        roughness: 0.24,
        clearcoat: 0.64,
        iridescence: 0.28,
      });
      domBalls[k] = balls(k, cell, false);
    });

    const S_WOBBLE = sculpt('wobble_gu', cell, false, {
      emissive: '#8a5800',
      emissiveIntensity: 0.42,
      roughness: 0.18,
      metalness: 0.18,
      clearcoat: 0.80,
    });
    const B_WOBBLE = balls('wobble_gu', cell, false);

    // Authentic PSTVd internal loops (bulged unpaired regions alternating with A-form paired stems)
    const LOOPS = [
      { c: 10, w: 3.0, amp: 1.48 },  // TL loop 1
      { c: 22, w: 3.4, amp: 1.56 },  // TL TFIIIA-7ZF RY-proximal loop
      { c: 32, w: 2.6, amp: 1.42 },  // TL/P hinge loop
      { c: 43, w: 4.4, amp: 1.88 },  // P major A-rich pathogenicity virulence bulge!
      { c: 56, w: 4.0, amp: 1.78 },  // P secondary virulence internal loop
      { c: 69, w: 2.8, amp: 1.45 },  // C left entry loop
      { c: 82, w: 5.2, amp: 1.92 },  // C CONSERVED LOOP E MOTIF (prominent sculpted bulge!)
      { c: 99, w: 4.2, amp: 1.62 },  // C CCR Hairpin I junction pocket
      { c: 111, w: 2.8, amp: 1.44 }, // C right exit loop
      { c: 124, w: 3.5, amp: 1.62 }, // V variable internal loop 1
      { c: 137, w: 3.2, amp: 1.54 }, // V variable internal loop 2
      { c: 152, w: 3.6, amp: 1.64 }, // TR phloem trafficking RY loop
      { c: 166, w: 3.0, amp: 1.50 }, // TR sub-terminal loop
    ];

    // Exact 16 authentic G·U wobble positions distributed cleanly across all 5 domains (paired stem sites)
    const WOBBLE_SET = new Set([6, 16, 27, 38, 49, 62, 74, 91, 106, 118, 130, 142, 148, 159, 171, 174]);

    // Deterministic biological nucleotide sequence (G-C rich ~58% like native PSTVd!)
    const upperBase: string[] = [];
    const lowerBase: string[] = [];
    const pool = ['G', 'C', 'G', 'C', 'A', 'U', 'G', 'C', 'A', 'U'];
    for (let i = 0; i <= N_PAIRS; i++) {
      if (WOBBLE_SET.has(i)) {
        const flip = i % 2 === 0;
        upperBase.push(flip ? 'G' : 'U');
        lowerBase.push(flip ? 'U' : 'G');
      } else {
        const b = pool[Math.floor(rand() * pool.length)];
        upperBase.push(b);
        lowerBase.push(RPAIR[b]);
      }
    }

    // Compute exact 3D upper (5'->3') and lower (3'<-5') phosphodiester backbone coordinates
    const upperPts: THREE.Vector3[] = [];
    const lowerPts: THREE.Vector3[] = [];
    const bulgeFactor: number[] = [];
    const isPaired: boolean[] = [];

    let twistAccum = 0.25;
    for (let i = 0; i <= N_PAIRS; i++) {
      const t = i / N_PAIRS;
      const center = rodCurve.getPointAt(t);
      const nAx = fr.N[i];
      const bAx = fr.B[i];

      // Check internal loop bulge profile
      let bAmp = 1.0;
      let inLoop = false;
      for (const lp of LOOPS) {
        const dist = Math.abs(i - lp.c);
        if (dist < lp.w) {
          const g = Math.cos((dist / lp.w) * Math.PI * 0.5);
          bAmp = Math.max(bAmp, 1.0 + (lp.amp - 1.0) * g * g);
          if (dist < lp.w * 0.62) inLoop = true;
        }
      }
      // Taper cleanly into covalently closed hairpin caps at i=0 (TL) and i=N_PAIRS (TR)
      const capLeft = i < 4 ? Math.sin(((i + 0.6) / 4.6) * (Math.PI * 0.5)) : 1.0;
      const capRight = i > N_PAIRS - 4 ? Math.sin(((N_PAIRS - i + 0.6) / 4.6) * (Math.PI * 0.5)) : 1.0;
      const capScale = Math.min(capLeft, capRight);

      // True A-form RNA helical twist (~32.7 deg/bp in stems, relaxed untwisted ribbon in internal loops!)
      const dTwist = inLoop ? 0.08 : 0.27;
      twistAccum += dTwist;

      const rad = 0.275 * bAmp * capScale;
      // Keep Loop E (i around 82) gently aligned face-on toward the viewer so the motif shines clearly!
      const ph = Math.abs(i - 82) < 7 ? Math.PI * 0.5 + (i - 82) * 0.06 : twistAccum;
      const ca = Math.cos(ph);
      const sa = Math.sin(ph);

      // Slight vertical asymmetry in Pathogenicity & Loop E bulges for authentic structural character
      const asym = (i >= 39 && i <= 60) ? 0.055 * Math.sin((i - 39) * 0.45) : 0;

      const pUp = center
        .clone()
        .addScaledVector(nAx, (rad + asym) * ca)
        .addScaledVector(bAx, (rad + asym) * sa);
      const pLo = center
        .clone()
        .addScaledVector(nAx, -rad * ca)
        .addScaledVector(bAx, -rad * sa);

      upperPts.push(pUp);
      lowerPts.push(pLo);
      bulgeFactor.push(bAmp);
      isPaired.push(!inLoop && i >= 3 && i <= N_PAIRS - 3);
    }

    // Record key biological centers for Loop E & CCR Hairpin I
    loopECenter = rodCurve.getPointAt(82 / N_PAIRS).clone();
    ccrCenter = rodCurve.getPointAt(99 / N_PAIRS).clone().add(V(0.05, 1.08, 0.14));

    // Emit continuous jewel-toned phosphodiester backbone ribbons segmented seamlessly by domain!
    const domRanges: [string, number, number][] = [
      ['tl_domain', 0, 35],
      ['p_domain', 35, 67],
      ['c_domain', 67, 115],
      ['v_domain', 115, 145],
      ['tr_domain', 145, N_PAIRS],
    ];

    domRanges.forEach(([domKey, i0, i1]) => {
      const pal = DOM_PALETTE[domKey];
      const S = domSculpt[domKey];
      const cA = col(pal.bbA);
      const cB = col(pal.bbB);
      const segUp = upperPts.slice(i0, i1 + 1);
      const segLo = lowerPts.slice(i0, i1 + 1);
      S.tube(segUp, 0.068, 0.068, cA, cB, 10, false);
      S.tube(segLo, 0.068, 0.068, cB, cA, 10, false);

      // Record domain anchor sites along the backbone
      for (let idx = i0 + 3; idx < i1 - 2; idx += 6) {
        SITES[domKey].push(upperPts[idx].clone().lerp(lowerPts[idx], 0.5));
      }
      placed += 2;
    });

    // Covalently closed Terminal Left (TL) & Terminal Right (TR) hairpin loop caps — ZERO free ends!
    {
      const leftTan = rodCurve.getTangentAt(0).negate();
      const leftTip = upperPts[0].clone().lerp(lowerPts[0], 0.5).addScaledVector(leftTan, 0.32);
      const tlArc = [
        upperPts[0],
        upperPts[0].clone().lerp(leftTip, 0.58).add(V(-0.04, 0.10, 0.04)),
        leftTip,
        lowerPts[0].clone().lerp(leftTip, 0.58).add(V(-0.04, -0.10, -0.04)),
        lowerPts[0],
      ];
      domSculpt.tl_domain.tube(tlArc, 0.068, 0.068, col('#00c8f0'), col('#60ecff'), 10, false);
      // 4 protruding unpaired hairpin cap bases around TL
      for (let k = 1; k <= 3; k++) {
        const pt = tlArc[k];
        const outD = pt.clone().sub(upperPts[0].clone().lerp(lowerPts[0], 0.5)).normalize();
        const bCol = col(BASE['AUGC'[k % 4]]);
        domSculpt.tl_domain.stick(pt, pt.clone().addScaledVector(outD, 0.17), 0.025, col('#48e6ff'), bCol);
        domBalls.tl_domain.add(pt.clone().addScaledVector(outD, 0.18), 0.11, bCol);
        placed++;
      }

      const rightTan = rodCurve.getTangentAt(1);
      const rightTip = upperPts[N_PAIRS].clone().lerp(lowerPts[N_PAIRS], 0.5).addScaledVector(rightTan, 0.32);
      const trArc = [
        upperPts[N_PAIRS],
        upperPts[N_PAIRS].clone().lerp(rightTip, 0.58).add(V(0.04, 0.10, 0.04)),
        rightTip,
        lowerPts[N_PAIRS].clone().lerp(rightTip, 0.58).add(V(0.04, -0.10, -0.04)),
        lowerPts[N_PAIRS],
      ];
      domSculpt.tr_domain.tube(trArc, 0.068, 0.068, col('#2472ff'), col('#70b0ff'), 10, false);
      for (let k = 1; k <= 3; k++) {
        const pt = trArc[k];
        const outD = pt.clone().sub(upperPts[N_PAIRS].clone().lerp(lowerPts[N_PAIRS], 0.5)).normalize();
        const bCol = col(BASE['GCUA'[k % 4]]);
        domSculpt.tr_domain.stick(pt, pt.clone().addScaledVector(outD, 0.17), 0.025, col('#66a8ff'), bCol);
        domBalls.tr_domain.add(pt.clone().addScaledVector(outD, 0.18), 0.11, bCol);
        placed++;
      }
    }

    // Emit explicit Watson-Crick A-U / G-C rungs, unpaired internal-loop bases, phosphate beads, & 16 golden G·U wobble pairs!
    const cGoldA = col('#ffb700');
    const cGoldB = col('#ffe866');
    const cGoldH = col('#ff9800');

    for (let i = 2; i <= N_PAIRS - 2; i++) {
      const domKey = domainAt(i);
      const pU = upperPts[i];
      const pL = lowerPts[i];
      const mid = pU.clone().lerp(pL, 0.5);
      const cU = col(BASE[upperBase[i]]);
      const cL = col(BASE[lowerBase[i]]);

      // Domain-tinted ribose-phosphate backbone nodes every 3rd nt (keeps jewel color saturation crisp!)
      if (i % 3 === 0) {
        const cDomPhos = col(DOM_PALETTE[domKey].bulgeTint);
        domBalls[domKey].add(pU, 0.11, cDomPhos);
        domBalls[domKey].add(pL, 0.11, cDomPhos);
      }

      // Skip inner Loop E region (i = 78..86) here so Loop E builds its own dedicated bioluminescent motif!
      if (i >= 78 && i <= 86) continue;

      if (WOBBLE_SET.has(i) && isPaired[i]) {
        // Highlighted GOLDEN G·U wobble base pair (sheared non-canonical offset + twin golden H-bond beads!)
        const dir = pL.clone().sub(pU).normalize();
        const shearAx = rodCurve.getTangentAt(i / N_PAIRS);
        const pU_w = pU.clone().addScaledVector(shearAx, 0.036);
        const pL_w = pL.clone().addScaledVector(shearAx, -0.036);
        const m1 = pU_w.clone().lerp(pL_w, 0.40);
        const m2 = pU_w.clone().lerp(pL_w, 0.60);

        S_WOBBLE.stick(pU_w, m1, 0.042, cGoldA, cGoldB);
        S_WOBBLE.stick(m2, pL_w, 0.042, cGoldB, cGoldA);
        S_WOBBLE.ring(mid, dir, 0.088, 0.022, cGoldB, 14, 6);
        B_WOBBLE.add(m1, 0.13, cGoldB);
        B_WOBBLE.add(m2, 0.13, cGoldH);
        B_WOBBLE.add(pU_w, 0.14, cGoldA);
        B_WOBBLE.add(pL_w, 0.14, cGoldA);
        SITES.wobble_gu.push(mid.clone());
        placed++;
      } else if (isPaired[i]) {
        // Explicit Watson-Crick A-U or G-C paired rung
        const S = domSculpt[domKey];
        const B = domBalls[domKey];
        if (i % 2 === 0) {
          S.stick(pU, mid, 0.026, cU, cU);
          S.stick(mid, pL, 0.026, cL, cL);
        } else {
          B.stick(pU, mid, 0.022, cU, cU);
          B.stick(mid, pL, 0.022, cL, cL);
        }
        B.add(mid, 0.070, col('#d8ecff'));
        placed++;
      } else {
        // Unpaired bulged internal loop bases flipping slightly inward/outward like glowing jewels
        const S = domSculpt[domKey];
        const B = domBalls[domKey];
        const inU = mid.clone().sub(pU).normalize();
        const inL = mid.clone().sub(pL).normalize();
        const flipU = pU.clone().addScaledVector(inU, 0.18).add(V(0, 0, 0.08 * Math.sin(i * 1.4)));
        const flipL = pL.clone().addScaledVector(inL, 0.18).add(V(0, 0, -0.08 * Math.cos(i * 1.2)));
        S.stick(pU, flipU, 0.025, col(DOM_PALETTE[domKey].bulgeTint), cU);
        S.stick(pL, flipL, 0.025, col(DOM_PALETTE[domKey].bulgeTint), cL);
        B.add(flipU, 0.125, cU);
        B.add(flipL, 0.125, cL);
        placed++;
      }
    }

    Object.values(domSculpt).forEach(s => s.done());
    Object.values(domBalls).forEach(b => b.done());
    S_WOBBLE.done();
    B_WOBBLE.done();

    // -----------------------------------------------------------------------
    // 2B. Bioluminescent Conserved LOOP E Motif (Non-Canonical Base-Triple Bulge)
    //     Crystal-clear sculpted S-turn, cross-strand base triples, Mg2+ ions & open halo ring!
    // -----------------------------------------------------------------------
    loopECoreGrp = new THREE.Group();
    loopECoreGrp.position.copy(loopECenter);
    cell.add(loopECoreGrp);

    // Sleek open luminous equatorial ring framing Loop E (keeps interior base triples 100% unobstructed!)
    const loopERingMat = reg(
      'loop_e',
      phys({
        color: '#c8ff38',
        emissive: '#629400',
        emissiveIntensity: 0.44,
        roughness: 0.20,
        metalness: 0.18,
        clearcoat: 0.72,
      })
    );
    const loopERing = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.026, 12, 48), loopERingMat);
    loopERing.scale.set(1.18, 0.88, 1.0);
    loopECoreGrp.add(loopERing);

    const S_LE = sculpt('loop_e', cell, false, {
      emissive: '#4c7800',
      emissiveIntensity: 0.38,
      roughness: 0.18,
      clearcoat: 0.78,
    });
    const B_LE = balls('loop_e', cell, false);

    const cLeLime = col('#c8ff2e');
    const cLeGlow = col('#eeff78');
    const cLeJade = col('#38e878');
    const cLeMg = col('#c66bff');

    // Sculpted glowing bioluminescent S-turn backbone arches framing Loop E
    const leUp = upperPts.slice(77, 88);
    const leLo = lowerPts.slice(77, 88);
    S_LE.tube(leUp, 0.082, 0.082, cLeLime, cLeGlow, 12, true);
    S_LE.tube(leLo, 0.082, 0.082, cLeJade, cLeLime, 12, true);

    // Non-canonical cross-strand purine stack, sheared G·A / U·U pairs & trans-Hoogsteen base triple!
    for (let i = 78; i <= 86; i++) {
      const pU = upperPts[i];
      const pL = lowerPts[i];
      const pLNext = lowerPts[Math.min(86, i + 1)];
      const m = pU.clone().lerp(pL, 0.5);
      const bCol = col(BASE['AGUA'[i % 4]]);
      if (i % 2 === 0) {
        // Cross-strand base-triple bridge (signature Loop E motif!)
        S_LE.stick(pU, pLNext, 0.036, cLeGlow, bCol);
        S_LE.lobe(m.clone().add(V(0, 0, 0.06)), 0.105, 0.082, 0.065, cLeGlow);
      } else {
        S_LE.stick(pU, m, 0.032, cLeLime, bCol);
        S_LE.stick(m, pL, 0.032, bCol, cLeJade);
      }
      B_LE.add(pU, 0.135, cLeGlow);
      B_LE.add(pL, 0.135, cLeLime);
      SITES.loop_e.push(m.clone());
      placed++;
    }
    // Two coordinated structural Mg2+ ions nestled in the deep Loop E pocket with coordination struts
    const mg1 = loopECenter.clone().add(V(-0.24, 0.05, 0.18));
    const mg2 = loopECenter.clone().add(V(0.24, -0.05, 0.16));
    S_LE.lobe(mg1, 0.11, 0.11, 0.11, cLeMg);
    S_LE.lobe(mg2, 0.11, 0.11, 0.11, cLeMg);
    S_LE.ring(mg1, V(0, 0, 1), 0.16, 0.018, col('#e6b8ff'), 16, 5);
    S_LE.ring(mg2, V(0, 0, 1), 0.16, 0.018, col('#e6b8ff'), 16, 5);
    S_LE.done();
    B_LE.done();

    // -----------------------------------------------------------------------
    // 2C. Glowing CCR Hairpin I (Cleavage & Ligation Site in Central Domain)
    //     Crystal-clear paired mint-aqua stem-loop + vivid magenta G95-G96 cleavage collar!
    // -----------------------------------------------------------------------
    ccrHairpinGrp = new THREE.Group();
    const ccrBase = rodCurve.getPointAt(99 / N_PAIRS).clone();
    ccrHairpinGrp.position.copy(ccrBase);
    cell.add(ccrHairpinGrp);

    const S_CCR = sculpt('ccr_hairpin', ccrHairpinGrp, false, {
      emissive: '#086858',
      emissiveIntensity: 0.34,
      roughness: 0.18,
      clearcoat: 0.78,
    });
    const B_CCR = balls('ccr_hairpin', ccrHairpinGrp, false);
    const cCcrA = col('#18e8c8');
    const cCcrB = col('#84ffec');
    const cCcrCut = col('#ff3d8b');

    // Build ascending + descending paired Hairpin I strands rising +1.55 u above the CCR rod
    const hpLeft: THREE.Vector3[] = [];
    const hpRight: THREE.Vector3[] = [];
    const HP_N = 14;
    for (let k = 0; k <= HP_N; k++) {
      const f = k / HP_N;
      const y = 0.24 + f * 1.28;
      const ph = f * Math.PI * 1.45;
      const r = 0.26 * (1 - 0.16 * f);
      hpLeft.push(V(-r * Math.cos(ph) - 0.05, y, r * Math.sin(ph) + 0.08));
      hpRight.push(V(r * Math.cos(ph) + 0.05, y, -r * Math.sin(ph) + 0.08));
    }
    S_CCR.tube(hpLeft, 0.064, 0.060, cCcrA, cCcrB, 10, false);
    S_CCR.tube(hpRight, 0.064, 0.060, cCcrA, cCcrB, 10, false);

    // Radiant terminal tetraloop crown capping Hairpin I
    const crownPts = [
      hpLeft[HP_N],
      V(-0.26, 1.70, 0.12),
      V(0.0, 1.84, 0.16),
      V(0.26, 1.70, 0.12),
      hpRight[HP_N],
    ];
    S_CCR.tube(crownPts, 0.064, 0.064, cCcrB, cCcrA, 10, false);

    // Crisp colored base-pair rungs inside Hairpin I + highlighted magenta G95-G96 cleavage ring!
    for (let k = 1; k <= HP_N; k += 2) {
      const pA = hpLeft[k];
      const pB = hpRight[k];
      const m = pA.clone().lerp(pB, 0.5);
      const b1 = col(BASE['GCUA'[k % 4]]);
      const b2 = col(BASE[RPAIR['GCUA'[k % 4]]]);
      S_CCR.stick(pA, m, 0.028, b1, b1);
      S_CCR.stick(m, pB, 0.028, b2, b2);
      B_CCR.add(pA, 0.11, cCcrB);
      B_CCR.add(pB, 0.11, cCcrB);
      SITES.ccr_hairpin.push(ccrBase.clone().add(m));
      placed++;
    }
    // Vivid magenta-coral G95-G96 RNase cleavage / ligase target collar around mid-stem
    const cutPosLocal = V(0.0, 1.08, 0.10);
    S_CCR.ring(cutPosLocal, V(0, 1, 0), 0.38, 0.036, cCcrCut, 28, 8);
    S_CCR.lobe(V(0.32, 1.08, 0.14), 0.105, 0.105, 0.105, col('#ff78b4'));
    S_CCR.lobe(V(-0.32, 1.08, 0.14), 0.105, 0.105, 0.105, col('#ffe466'));
    SITES.ccr_hairpin.push(ccrBase.clone().add(cutPosLocal));

    // Sleek open catalytic ring bezel (part of `shells` via translucent collar ring!)
    const ccrBezelMat = cinemaShellMat('ccr_hairpin', '#149e8a', '#7cf5e4', {}, {
      attenCol: '#0d7366',
      attenDist: 3.2,
      sssColor: '#36ebd0',
      sssIntensity: 0.24,
      iridescence: 0.55,
      thickness: 0.20,
      roughness: 0.12,
      sheenColor: '#b8fff4',
      normalMap: bump(6, 4),
      normalScale: 0.10,
    });
    const ccrArch = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.035, 12, 36), ccrBezelMat);
    ccrArch.position.set(0.0, 1.12, 0.10);
    ccrArch.scale.set(0.88, 1.32, 1.0);
    ccrHairpinGrp.add(ccrArch);

    S_CCR.done();
    B_CCR.done();
    ccrCenter = ccrBase.clone().add(cutPosLocal);
  }

  // -------------------------------------------------------------------------
  // 3. Host Plant Nuclear Rolling-Circle Replication Theater (Right / Upper-Right)
  //    - Real cryo-EM/crystal 12-subunit host RNA Pol II (PDB 1WCM via buildPdbSurfaceGeo!)
  //    - Docked plant TFIIIA-7ZF 7-zinc-finger bridge + rotating circular template
  //    - Luminous (-) multimeric RNA concatemer spooling out of Pol II exit channel
  //    - Host plant DNA Ligase 1 circularizing cleaved (+) progeny PSTVd rings!
  // -------------------------------------------------------------------------
  function buildRollingCircleTheater() {
    // 3A. Real Cryo-EM/Crystal 12-Subunit Eukaryotic RNA Pol II (RCSB PDB 1WCM)
    const pol2Cols = [
      '#2882e8', // Rpb1 largest catalytic clamp (deep sapphire)
      '#1ab5aa', // Rpb2 second catalytic wall (rich sea-glass teal)
      '#5868e8', // Rpb3/11 core assembly (royal periwinkle)
      '#3ccce8', // Rpb4/7 protruding stalk (bright cyan)
      '#2a98c8', // Rpb5/6/8 lower jaw & funnel (cerulean)
      '#788eff', // Rpb9/10/12 zinc rim (indigo-blue)
    ].map(col);

    const geoPol2 = buildPdbSurfaceGeo(pdb.getModel(PDB_SUBVIRAL, 'host_rnap2'), {
      nm: NM,
      scale: 1.06,
      maxDim: 40,
      sigmaAng: 4.3,
      iso: 0.38,
      aoStrength: 0.68,
      colorFn: grp => pol2Cols[grp % pol2Cols.length],
    });

    const pol2Mat = protMat('pol2', false, {
      emissive: '#082240',
      emissiveIntensity: 0.14,
      roughness: 0.34,
      clearcoat: 0.38,
      iridescence: 0.22,
    });
    const pol2Mesh = shade(new THREE.Mesh(geoPol2, pol2Mat), true, true);
    pol2Mesh.position.copy(POL2_POS);
    pol2Mesh.rotation.set(0.24, -0.58, 0.14);
    cell.add(pol2Mesh);
    SITES.pol2.push(POL2_POS.clone());
    SITES.pol2.push(POL2_POS.clone().add(V(-0.65, 0.55, 0.45)));
    SITES.pol2.push(POL2_POS.clone().add(V(0.55, -0.45, 0.45)));
    placed += 12; // 12 subunits of PDB 1WCM!

    // Active-site catalytic Mg2+ twin-ion beacon nestled inside Pol II's cleft
    const S_POL_CORE = sculpt('pol2', cell, false, {
      emissive: '#12548a',
      emissiveIntensity: 0.36,
      roughness: 0.22,
      clearcoat: 0.65,
    });
    pol2ActiveSite = POL2_POS.clone().add(V(-0.32, -0.08, 0.46));
    S_POL_CORE.lobe(pol2ActiveSite, 0.14, 0.14, 0.14, col('#c87eff'));
    S_POL_CORE.ring(pol2ActiveSite, V(-0.3, 0.2, 0.9).normalize(), 0.34, 0.024, col('#5ce0ff'), 24, 6);
    S_POL_CORE.done();

    // Rotating circular PSTVd (+) RNA template ring threaded right through Pol II's active cleft!
    templateRingGrp = new THREE.Group();
    templateRingGrp.position.copy(POL2_POS).add(V(-0.52, 0.12, 0.36));
    templateRingGrp.rotation.set(0.32, 0.44, -0.22);
    cell.add(templateRingGrp);

    const S_TPL = sculpt('pol2', templateRingGrp, false, {
      emissive: '#084a52',
      emissiveIntensity: 0.28,
      roughness: 0.24,
      clearcoat: 0.62,
    });
    const B_TPL = balls('pol2', templateRingGrp, false);
    const tplPts: THREE.Vector3[] = [];
    const TPL_N = 48;
    for (let k = 0; k < TPL_N; k++) {
      const a = (k / TPL_N) * Math.PI * 2;
      const rx = 1.40 + 0.13 * Math.sin(a * 3);
      const ry = 0.86 + 0.10 * Math.cos(a * 2);
      const rz = 0.22 * Math.sin(a * 2);
      tplPts.push(V(Math.cos(a) * rx, Math.sin(a) * ry, rz));
    }
    tplPts.push(tplPts[0].clone());
    S_TPL.tube(tplPts, 0.056, 0.056, col('#1ad6c4'), col('#38beff'), 10, false);
    for (let k = 0; k < TPL_N; k += 2) {
      const p = tplPts[k];
      const out = p.clone().normalize().multiplyScalar(0.15);
      const bc = col(BASE['AUGC'[k % 4]]);
      B_TPL.stick(p, p.clone().add(out), 0.022, col('#6eeeff'), bc);
      B_TPL.add(p.clone().add(out), 0.11, bc);
      placed++;
    }
    S_TPL.done();
    B_TPL.done();

    // 3B. Plant TFIIIA-7ZF (7 C2H2 Zinc-Finger Bridge docking PSTVd template into Pol II!)
    tfiiiaGrp = new THREE.Group();
    tfiiiaGrp.position.copy(TFIIIA_POS);
    cell.add(tfiiiaGrp);

    const S_TF = sculpt('tfiiia', tfiiiaGrp, false, {
      emissive: '#783204',
      emissiveIntensity: 0.26,
      roughness: 0.26,
      clearcoat: 0.56,
    });
    const B_TF = balls('tfiiia', tfiiiaGrp, false);
    const cZfA = col('#ff7820');
    const cZfB = col('#ffb838');
    const cZnIon = col('#9eeeff');

    // Arched 7-finger (ZF1..ZF7) ribbon physically clasping the left-front template arc and touching Pol II
    const zfCurvePts: THREE.Vector3[] = [];
    for (let f = 0; f < 7; f++) {
      const u = f / 6;
      const ang = -1.15 + u * 2.15;
      const p = V(Math.cos(ang) * 0.62 - 0.18, Math.sin(ang) * 0.78, 0.24 * Math.cos(ang * 1.4) + u * 0.18);
      zfCurvePts.push(p);
    }
    const zfCurve = new THREE.CatmullRomCurve3(zfCurvePts);
    S_TF.tube(zfCurve.getSpacedPoints(32), 0.052, 0.052, cZfA, cZfB, 9, true);

    zfCurvePts.forEach((p, idx) => {
      const tan = zfCurve.getTangentAt(idx / 6);
      const outN = ortho(tan);
      // C2H2 alpha-helix + beta-hairpin globular zinc-finger domain
      S_TF.lobe(p, 0.19, 0.135, 0.145, idx % 2 === 0 ? cZfA : cZfB, qOut(tan, idx * 0.5));
      // Tetrahedrally coordinated sparkling Zn2+ ion inside each of the 7 fingers!
      const znPos = p.clone().addScaledVector(outN, 0.14);
      S_TF.lobe(znPos, 0.072, 0.072, 0.072, cZnIon);
      S_TF.ring(znPos, outN, 0.10, 0.017, col('#ffe28a'), 12, 5);
      B_TF.add(znPos, 0.12, cZnIon);
      SITES.tfiiia.push(TFIIIA_POS.clone().add(p));
      placed += 2;
    });
    // C-terminal bridge arm docking cleanly into Pol II's clamp jaw
    S_TF.tube([zfCurvePts[6], V(0.75, 0.35, -0.35), V(1.12, 0.22, -0.62)], 0.068, 0.054, cZfB, cZfA, 9, true);
    S_TF.done();
    B_TF.done();

    // 3C. Luminous (-) Multimeric RNA Concatemer Spooling Out of Pol II Exit Channel!
    const exitPt = POL2_POS.clone().add(V(0.18, -0.95, 0.68));
    minusCurve = new THREE.CatmullRomCurve3([
      pol2ActiveSite.clone(),
      exitPt,
      V(5.38, 0.42, 0.90),
      V(5.65, -0.42, 0.72),
      V(4.45, -0.82, 0.78),
      V(3.15, -0.60, 0.85),
      V(2.70, -1.32, 0.72),
      V(3.45, -1.98, 0.66),
      V(4.25, -2.22, 0.60),
    ]);

    const S_MINUS = sculpt('minus_rna', cell, false, {
      emissive: '#7a0c42',
      emissiveIntensity: 0.30,
      roughness: 0.22,
      clearcoat: 0.68,
    });
    const B_MINUS = balls('minus_rna', cell, false);
    const minusPts = minusCurve.getSpacedPoints(88);
    const frM = geometry.ptFrames(minusCurve, 88);
    const cMinA = col('#ff2e8c');
    const cMinB = col('#ff72b6');

    S_MINUS.tube(minusPts, 0.072, 0.062, cMinA, cMinB, 10, true);
    for (let k = 3; k < minusPts.length - 1; k++) {
      const p = minusPts[k];
      const ang = k * 0.52;
      const toothDir = frM.N[k].clone().multiplyScalar(Math.cos(ang)).addScaledVector(frM.B[k], Math.sin(ang));
      const tip = p.clone().addScaledVector(toothDir, 0.21);
      const bCol = col(BASE['UAGC'[k % 4]]);
      if (k % 2 === 0) S_MINUS.stick(p, tip, 0.024, cMinB, bCol);
      else B_MINUS.stick(p, tip, 0.022, cMinB, bCol);
      B_MINUS.add(tip, 0.115, bCol);
      if (k % 8 === 0) SITES.minus_rna.push(p.clone());
      placed++;
    }
    S_MINUS.done();
    B_MINUS.done();

    // Animated luminescent rolling-synthesis pulse beads traveling along the (-) multimeric concatemer!
    const pulseMat = reg(
      'minus_rna',
      phys({
        color: '#ff90c8',
        emissive: '#e02880',
        emissiveIntensity: 0.55,
        roughness: 0.16,
        clearcoat: 0.78,
      })
    );
    const pulseGeo = new THREE.SphereGeometry(0.11, 14, 10);
    for (let k = 0; k < 7; k++) {
      const mesh = new THREE.Mesh(pulseGeo, pulseMat);
      cell.add(mesh);
      minusPulseBeads.push({ mesh, u0: k / 7 });
      placed++;
    }

    // 3D. Host Plant DNA Ligase 1 (Sculpted Open C-Shaped 3-Domain Cryo-EM Circularization Clamp!)
    ligaseGrp = new THREE.Group();
    ligaseGrp.position.copy(LIGASE_POS);
    cell.add(ligaseGrp);

    // Build crisp, open C-shaped 3-domain DNA Ligase 1 toroidal clamp (DBD + AdD + OB-fold) with true central cleft!
    const ligBeads = [];
    for (let k = 0; k < 15; k++) {
      // Open C-ring from +28 deg to +332 deg leaving a distinct ligation gate on the right-front!
      const u = k / 14;
      const a = 0.48 + u * (Math.PI * 2 - 0.96);
      const R = 5.4 + 0.5 * Math.sin(u * Math.PI * 3);
      const grpIdx = k < 5 ? 0 : k < 10 ? 1 : 2;
      const rad = 1.65 + 0.35 * Math.sin(u * Math.PI * 5);
      ligBeads.push([Math.cos(a) * R, Math.sin(a) * R, Math.sin(a * 2) * 0.9, rad, grpIdx]);
    }
    const geoLigase = synthGeo(
      ligBeads,
      ['#e89420', '#e05e28', '#f2be42'],
      36,
      1.0,
      0.155
    );
    const ligMat = protMat('ligase', false, {
      emissive: '#542604',
      emissiveIntensity: 0.16,
      roughness: 0.32,
      clearcoat: 0.44,
    });
    const ligMesh = shade(new THREE.Mesh(geoLigase, ligMat), true, true);
    ligMesh.rotation.set(0.22, -0.34, 0.10);
    ligaseGrp.add(ligMesh);

    // Catalytic ATP-AMP adenylation active-site beacon nestled right inside Ligase's open central C-channel!
    const S_LIG = sculpt('ligase', ligaseGrp, false, {
      emissive: '#945204',
      emissiveIntensity: 0.44,
      roughness: 0.18,
      clearcoat: 0.74,
    });
    S_LIG.lobe(V(0.06, -0.02, 0.16), 0.15, 0.13, 0.13, col('#ffe066'));
    S_LIG.ring(V(0.06, -0.02, 0.16), V(0, 0, 1), 0.34, 0.026, col('#ffb838'), 20, 6);
    S_LIG.done();
    SITES.ligase.push(LIGASE_POS.clone());
    SITES.ligase.push(LIGASE_POS.clone().add(V(-0.55, 0.45, 0.25)));
    placed += 8;

    // 3E. Cleaved (+) Progeny Circular RNA Rings (1 actively ligating inside Ligase's open cleft + 2 sealed progeny!)
    const S_PLUS_ACTIVE = sculpt('plus_rna', cell, false, {
      emissive: '#065c44',
      emissiveIntensity: 0.28,
      roughness: 0.20,
      clearcoat: 0.72,
    });
    const B_PLUS_ACTIVE = balls('plus_rna', cell, false);
    const cPlA = col('#18e8a8');
    const cPlB = col('#78ffda');

    // Freshly cleaved unit-length (+) monomer passing cleanly through DNA Ligase 1's open C-channel!
    const ligLoopPts: THREE.Vector3[] = [];
    for (let k = 0; k <= 34; k++) {
      const a = 0.22 + (k / 34) * (Math.PI * 2 - 0.36); // tiny 5'-P / 3'-OH ligation nick right inside Ligase!
      const p = LIGASE_POS.clone().add(
        V(Math.cos(a) * 0.88 - 0.80, Math.sin(a) * 0.68 + 0.08, 0.24 + 0.22 * Math.sin(a * 2))
      );
      ligLoopPts.push(p);
    }
    S_PLUS_ACTIVE.tube(ligLoopPts, 0.062, 0.062, cPlA, cPlB, 10, true);
    for (let k = 1; k < ligLoopPts.length - 1; k += 2) {
      const p = ligLoopPts[k];
      const bc = col(BASE['AUGC'[k % 4]]);
      const out = p.clone().sub(LIGASE_POS.clone().add(V(-0.80, 0.08, 0.24))).normalize().multiplyScalar(0.15);
      B_PLUS_ACTIVE.stick(p, p.clone().add(out), 0.022, cPlB, bc);
      B_PLUS_ACTIVE.add(p.clone().add(out), 0.11, bc);
      if (k % 6 === 1) SITES.plus_rna.push(p.clone());
      placed++;
    }
    // Glowing 5'-P & 3'-OH ligation seal pearls right at the nick inside Ligase's active cleft!
    S_PLUS_ACTIVE.lobe(ligLoopPts[0], 0.105, 0.105, 0.105, col('#ffe044'));
    S_PLUS_ACTIVE.lobe(ligLoopPts[ligLoopPts.length - 1], 0.105, 0.105, 0.105, col('#ff5888'));
    S_PLUS_ACTIVE.done();
    B_PLUS_ACTIVE.done();

    // Two freshly circularized, self-folding (+) progeny PSTVd circular rods drifting into the nucleoplasm!
    const buildProgenyRing = (basePos: THREE.Vector3, rot: THREE.Euler, phase: number) => {
      const grp = new THREE.Group();
      grp.position.copy(basePos);
      grp.rotation.copy(rot);
      cell.add(grp);

      const S_PR = sculpt('plus_rna', grp, false, {
        emissive: '#065c44',
        emissiveIntensity: 0.26,
        roughness: 0.20,
        clearcoat: 0.72,
      });
      const B_PR = balls('plus_rna', grp, false);

      // Folded covalently closed mini-rod loop showing self-pairing back into the classic PSTVd rod!
      const N_PR = 36;
      const topPts: THREE.Vector3[] = [];
      const botPts: THREE.Vector3[] = [];
      for (let k = 0; k <= N_PR; k++) {
        const u = k / N_PR;
        const x = (u - 0.5) * 2.02;
        const cap = Math.sin(u * Math.PI);
        const bulge = 1.0 + 0.36 * Math.exp(-Math.pow((u - 0.5) / 0.14, 2));
        const r = (0.14 + 0.11 * cap) * bulge;
        const tw = u * Math.PI * 3.2;
        topPts.push(V(x, r * Math.cos(tw), r * Math.sin(tw)));
        botPts.push(V(x, -r * Math.cos(tw), -r * Math.sin(tw)));
      }
      S_PR.tube(topPts, 0.048, 0.048, cPlA, col('#30d8ff'), 8, false);
      S_PR.tube(botPts, 0.048, 0.048, col('#30d8ff'), cPlB, 8, false);
      // Closed left & right terminal hairpin caps
      S_PR.tube([topPts[0], V(-1.14, 0, 0), botPts[0]], 0.048, 0.048, cPlB, cPlA, 8, false);
      S_PR.tube([topPts[N_PR], V(1.14, 0, 0), botPts[N_PR]], 0.048, 0.048, cPlA, cPlB, 8, false);

      for (let k = 2; k < N_PR - 1; k += 2) {
        const isG = k === 10 || k === 24;
        const c1 = isG ? col('#ffc420') : col(BASE['GCUA'[k % 4]]);
        const c2 = isG ? col('#ffe878') : col(BASE[RPAIR['GCUA'[k % 4]]]);
        B_PR.stick(topPts[k], botPts[k], 0.020, c1, c2);
        placed++;
      }
      S_PR.done();
      B_PR.done();

      SITES.plus_rna.push(basePos.clone());
      progenyRings.push({ grp, basePos: basePos.clone(), phase });
    };

    buildProgenyRing(PROGENY_POS_A, new THREE.Euler(0.18, -0.32, 0.42), 0.0);
    buildProgenyRing(PROGENY_POS_B, new THREE.Euler(-0.22, 0.25, -0.28), 2.1);
  }

  // -------------------------------------------------------------------------
  // 4. Crisp Circular Magnified Atomic RNA Inset (`rna_atoms`)
  //    Comparing RNA 2'-OH Ribose Hydroxyl + Phosphodiester P + G·U Wobble H-Bonds
  //    (C, H, N, O, P in true CPK colors; text strictly centered inside ring, zero clipping!)
  // -------------------------------------------------------------------------
  function buildRnaAtomicInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM0);
    grp.rotation.copy(ATOM_ROT);
    cell.add(grp);

    const toWorldAtom = (localPt: THREE.Vector3) => localPt.clone().applyEuler(ATOM_ROT).add(ATOM0);

    const R_INSET = 2.08;

    // Outer luminous gold circular magnifier ring (crisp, zero bloom washout!)
    const ringMat = reg(
      'rna_atoms',
      phys({
        color: '#f2c84b',
        emissive: '#593e06',
        emissiveIntensity: 0.24,
        roughness: 0.22,
        metalness: 0.30,
        clearcoat: 0.68,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_INSET, 0.042, 16, 72), ringMat));

    // Inner subtle cyan precision accent bezel
    const innerRingMat = reg(
      'rna_atoms',
      phys({
        color: '#48d6f0',
        emissive: '#0c3e54',
        emissiveIntensity: 0.24,
        roughness: 0.22,
        metalness: 0.24,
        clearcoat: 0.62,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_INSET - 0.075, 0.015, 10, 64), innerRingMat));

    // Deep optical sapphire glass backing disc sitting cleanly behind the 3D covalent atoms
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_INSET - 0.03, 56),
      reg(
        'rna_atoms',
        phys({
          color: '#050b16',
          roughness: 0.18,
          transparent: true,
          opacity: 0.80,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.36;
    grp.add(glassDisc);

    // Subtle wet-gel refractive optical rim sleeve (part of `shells`!)
    const lensRimMat = cinemaShellMat('rna_atoms', '#1c6480', '#70c8e0', {}, {
      attenCol: '#12465c',
      attenDist: 3.6,
      sssColor: '#48c8e8',
      sssIntensity: 0.16,
      iridescence: 0.42,
      thickness: 0.20,
      roughness: 0.14,
      sheenColor: '#a6ecff',
      normalMap: bump(6, 4),
      normalScale: 0.10,
    });
    const lensSleeveGeo = new THREE.CylinderGeometry(R_INSET - 0.04, R_INSET - 0.04, 0.30, 56, 1, true);
    lensSleeveGeo.rotateX(Math.PI / 2);
    const lensSleeve = new THREE.Mesh(lensSleeveGeo, lensRimMat);
    lensSleeve.position.z = -0.20;
    grp.add(lensSleeve);

    // Optical zoom tether rays linking a golden G·U ribonucleotide on the hero PSTVd rod down to the inset!
    const tetherMat = reg(
      'rna_atoms',
      new THREE.MeshStandardMaterial({
        color: '#6ce8ff',
        emissive: '#2298c4',
        emissiveIntensity: 0.36,
        transparent: true,
        opacity: 0.30,
        roughness: 0.3,
        depthWrite: false,
      })
    );
    const rodAnchor = V(-2.35, 0.78, 0.72);
    for (const edgeLocal of [V(-1.55, 1.38, 0.0), V(1.38, 1.54, 0.0)]) {
      const edgeWorld = toWorldAtom(edgeLocal);
      const tCurve = new THREE.LineCurve3(rodAnchor, edgeWorld);
      cell.add(new THREE.Mesh(sweepGeo(tCurve, () => 0.011, 8, 6), tetherMat));
    }

    // CPK Atomic Ball-and-Stick Assembly:
    // Left half: RNA Ribose furanose + radiant 2'-OH hydroxyl + tetrahedral PO4- phosphodiester bridge
    // Right half: Non-canonical G·U wobble base pair with twin pulsing H-bonds!
    const S_ATOM = sculpt('rna_atoms', grp, false, {
      emissive: '#141a24',
      emissiveIntensity: 0.12,
      roughness: 0.22,
      metalness: 0.08,
      clearcoat: 0.68,
    });

    const CPK = {
      C: { c: col('#46586e'), r: 0.114 },
      H: { c: col('#e6f2ff'), r: 0.072 },
      N: { c: col('#2e76ff'), r: 0.116 },
      O: { c: col('#f22e42'), r: 0.116 },
      P: { c: col('#ff9814'), r: 0.160 },
    };
    const cBond = col('#a8bcd6');

    const atoms: Record<string, { p: THREE.Vector3; el: keyof typeof CPK }> = {
      // --- Left side: Tetrahedral Phosphodiester PO4- + Ribose Ring + Signature 2'-OH Hydroxyl ---
      P: { p: V(-1.28, 0.56, 0.06), el: 'P' },
      OP1: { p: V(-1.56, 0.74, 0.22), el: 'O' },
      OP2: { p: V(-1.26, 0.86, -0.14), el: 'O' },
      O5u: { p: V(-0.96, 0.64, -0.08), el: 'O' }, // linkage up toward 5'
      O3: { p: V(-1.32, 0.24, 0.14), el: 'O' },  // phosphodiester bridge into C3'
      C5: { p: V(-1.46, -0.02, 0.04), el: 'C' },
      // Ribose pentose ring (puckered C3'-endo)
      C4: { p: V(-1.18, -0.22, -0.06), el: 'C' },
      O4: { p: V(-0.84, -0.10, -0.10), el: 'O' },
      C1: { p: V(-0.62, -0.34, 0.02), el: 'C' },
      C2: { p: V(-0.82, -0.62, 0.18), el: 'C' },
      C3: { p: V(-1.18, -0.54, 0.10), el: 'C' },
      // Signature RNA 2'-OH Hydroxyl Group (missing in DNA!)
      O2h: { p: V(-0.74, -0.92, 0.30), el: 'O' },
      H2h: { p: V(-0.49, -1.00, 0.34), el: 'H' },
      // Ribose 3'-OH & ring hydrogens
      O3b: { p: V(-1.44, -0.74, 0.16), el: 'O' },
      H3b: { p: V(-1.58, -0.62, 0.26), el: 'H' },
      H1: { p: V(-0.56, -0.38, -0.22), el: 'H' },
      H2: { p: V(-0.78, -0.68, -0.06), el: 'H' },

      // --- Right side: Guanine (Purine fused 6+5 ring) · Uracil (Pyrimidine 6-ring) Wobble Pair ---
      // Guanine (center-left of right side)
      G_N9: { p: V(-0.24, -0.24, 0.04), el: 'N' },
      G_C8: { p: V(-0.14, -0.46, 0.06), el: 'C' },
      G_N7: { p: V(0.10, -0.42, 0.08), el: 'N' },
      G_C5: { p: V(0.14, -0.16, 0.06), el: 'C' },
      G_C4: { p: V(-0.08, -0.04, 0.04), el: 'C' },
      G_N3: { p: V(-0.14, 0.20, 0.02), el: 'N' },
      G_C2: { p: V(0.06, 0.38, 0.02), el: 'C' },
      G_N2: { p: V(-0.02, 0.62, 0.00), el: 'N' },
      G_H2a: { p: V(-0.20, 0.68, 0.02), el: 'H' },
      G_H2b: { p: V(0.12, 0.74, 0.00), el: 'H' },
      G_N1: { p: V(0.32, 0.30, 0.04), el: 'N' },
      G_H1: { p: V(0.50, 0.42, 0.05), el: 'H' },
      G_C6: { p: V(0.38, 0.04, 0.06), el: 'C' },
      G_O6: { p: V(0.62, -0.04, 0.08), el: 'O' },

      // Uracil (right side — shifted downward/right in authentic G·U wobble offset!)
      U_N3: { p: V(1.06, 0.14, 0.08), el: 'N' },
      U_H3: { p: V(0.88, 0.04, 0.08), el: 'H' },
      U_C2: { p: V(1.04, 0.40, 0.06), el: 'C' },
      U_O2: { p: V(0.82, 0.54, 0.05), el: 'O' },
      U_N1: { p: V(1.28, 0.54, 0.06), el: 'N' },
      U_C6: { p: V(1.52, 0.40, 0.08), el: 'C' },
      U_C5: { p: V(1.54, 0.14, 0.10), el: 'C' },
      U_C4: { p: V(1.30, 0.00, 0.10), el: 'C' },
      U_O4: { p: V(1.32, -0.24, 0.12), el: 'O' },
      U_H6: { p: V(1.68, 0.50, 0.08), el: 'H' },
      U_H5: { p: V(1.72, 0.04, 0.12), el: 'H' },
    };

    const bonds: [string, string, boolean?][] = [
      // Phosphodiester + Ribose covalent bonds
      ['P', 'OP1', true], ['P', 'OP2'], ['P', 'O5u'], ['P', 'O3'],
      ['O3', 'C5'], ['C5', 'C4'],
      ['C4', 'O4'], ['O4', 'C1'], ['C1', 'C2'], ['C2', 'C3'], ['C3', 'C4'],
      ['C2', 'O2h'], ['O2h', 'H2h'],
      ['C3', 'O3b'], ['O3b', 'H3b'],
      ['C1', 'H1'], ['C2', 'H2'],
      // Glycosidic bond linking Ribose C1' directly to Guanine N9!
      ['C1', 'G_N9'],
      // Guanine purine rings
      ['G_N9', 'G_C8'], ['G_C8', 'G_N7', true], ['G_N7', 'G_C5'], ['G_C5', 'G_C4', true], ['G_C4', 'G_N9'],
      ['G_C4', 'G_N3'], ['G_N3', 'G_C2', true], ['G_C2', 'G_N1'], ['G_N1', 'G_C6'], ['G_C6', 'G_C5'],
      ['G_C2', 'G_N2'], ['G_N2', 'G_H2a'], ['G_N2', 'G_H2b'],
      ['G_N1', 'G_H1'], ['G_C6', 'G_O6', true],
      // Uracil pyrimidine ring
      ['U_N1', 'U_C2'], ['U_C2', 'U_N3'], ['U_N3', 'U_C4'], ['U_C4', 'U_C5'], ['U_C5', 'U_C6', true], ['U_C6', 'U_N1'],
      ['U_N3', 'U_H3'], ['U_C2', 'U_O2', true], ['U_C4', 'U_O4', true], ['U_C6', 'U_H6'], ['U_C5', 'U_H5'],
    ];

    Object.entries(atoms).forEach(([id, a]) => {
      const spec = CPK[a.el];
      S_ATOM.lobe(a.p, spec.r, spec.r, spec.r, spec.c);
      if (id === 'P' || id === 'O2h' || id === 'G_O6' || id === 'U_O2') {
        SITES.rna_atoms.push(toWorldAtom(a.p));
      }
      placed++;
    });

    bonds.forEach(([k1, k2, isDouble]) => {
      const a = atoms[k1];
      const b = atoms[k2];
      const c1 = CPK[a.el].c;
      const c2 = CPK[b.el].c;
      if (isDouble) {
        const dir = b.p.clone().sub(a.p).normalize();
        const off = V(-dir.y, dir.x, 0).normalize().multiplyScalar(0.026);
        S_ATOM.stick(a.p.clone().add(off), b.p.clone().add(off), 0.020, c1, c2);
        S_ATOM.stick(a.p.clone().sub(off), b.p.clone().sub(off), 0.020, c1, c2);
      } else {
        S_ATOM.stick(a.p, b.p, 0.028, c1.clone().lerp(cBond, 0.35), c2.clone().lerp(cBond, 0.35));
      }
      placed++;
    });

    // Radiant golden-coral highlight ring spotlighting the RNA-specific 2'-OH Ribose Hydroxyl!
    S_ATOM.ring(atoms.O2h.p.clone().lerp(atoms.H2h.p, 0.35), V(0, 0, 1), 0.25, 0.020, col('#ff85a8'), 24, 6);
    // Radiant amber highlight ring spotlighting the Phosphodiester P center!
    S_ATOM.ring(atoms.P.p, V(0, 0, 1), 0.27, 0.020, col('#ffd05c'), 24, 6);
    S_ATOM.done();

    // Two pulsing golden-cyan G·U Wobble Hydrogen Bonds:
    // H-bond 1: G-N1-H ··· O2-U
    // H-bond 2: G-O6 ··· H-N3-U
    const hbMat = reg(
      'rna_atoms',
      phys({
        color: '#ffe866',
        emissive: '#ffae24',
        emissiveIntensity: 0.85,
        roughness: 0.16,
        clearcoat: 0.72,
      })
    );
    const hbGeo = new THREE.SphereGeometry(0.038, 12, 10);
    const hPairs: [THREE.Vector3, THREE.Vector3][] = [
      [atoms.G_H1.p, atoms.U_O2.p],
      [atoms.G_O6.p, atoms.U_H3.p],
    ];
    hPairs.forEach(([pA, pB], pi) => {
      for (let s = 1; s <= 4; s++) {
        const mesh = new THREE.Mesh(hbGeo, hbMat);
        mesh.position.copy(pA).lerp(pB, s / 5);
        grp.add(mesh);
        hBondBeads.push({ mesh, baseScale: 1.0, phase: pi * 1.6 + s * 0.7 });
      }
    });

    // Crisp NON-CLIPPED caption plaques strictly inside the R = 2.08 circular magnifier ring!
    // At y = +1.50, ring chord = 2 * sqrt(2.08^2 - 1.50^2) = 2.88 u > 2.26 u plaque width!
    // At y = -1.56, ring chord = 2 * sqrt(2.08^2 - 1.56^2) = 2.75 u > 2.16 u plaque width!
    const makeCaption = (
      wPx: number,
      hPx: number,
      drawFn: (g: CanvasRenderingContext2D) => void,
      wU: number,
      hU: number,
      xPos: number,
      yPos: number,
      zPos = 0.24
    ) => {
      const cv = document.createElement('canvas');
      cv.width = wPx;
      cv.height = hPx;
      const g = cv.getContext('2d');
      g.clearRect(0, 0, wPx, hPx);
      drawFn(g);
      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = reg(
        'rna_atoms',
        new THREE.MeshStandardMaterial({
          map: tex,
          emissive: '#ffffff',
          emissiveMap: tex,
          emissiveIntensity: 0.62,
          transparent: true,
          roughness: 0.35,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      );
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(wU, hU), mat);
      mesh.position.set(xPos, yPos, zPos);
      grp.add(mesh);
    };

    makeCaption(
      700,
      116,
      g => {
        g.textAlign = 'center';
        g.font = '700 35px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#ffe878';
        g.fillText('RNA ATOMIC STRUCTURE', 350, 42);
        g.font = '600 24px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#8ef4ff';
        g.fillText("2'-OH Ribose · Phosphodiester P · G·U Wobble", 350, 84);
      },
      2.24,
      0.37,
      0,
      1.50
    );

    makeCaption(
      640,
      82,
      g => {
        g.textAlign = 'center';
        g.font = '600 25px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#d4f8ff';
        g.fillText('C · H · N · O · P   |   2 Wobble H-Bonds', 320, 48);
      },
      2.12,
      0.27,
      0,
      -1.56
    );

    // Compact inner callout tags strictly well inside the circle (radius < 1.45 u)
    makeCaption(
      220,
      58,
      g => {
        g.textAlign = 'center';
        g.font = '700 34px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#ff98b6';
        g.fillText("2'-OH", 110, 40);
      },
      0.66,
      0.18,
      -0.78,
      -1.22,
      0.34
    );

    makeCaption(
      240,
      58,
      g => {
        g.textAlign = 'center';
        g.font = '700 32px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#ffc85c';
        g.fillText('PO₄⁻ (P)', 120, 40);
      },
      0.74,
      0.18,
      -1.18,
      1.04,
      0.28
    );

    makeCaption(
      340,
      58,
      g => {
        g.textAlign = 'center';
        g.font = '700 30px system-ui, -apple-system, sans-serif';
        g.fillStyle = '#ffe878';
        g.fillText('G · U wobble', 170, 40);
      },
      1.05,
      0.18,
      0.78,
      -0.72,
      0.24
    );

    SITES.rna_atoms.push(ATOM0.clone());
  }

  // -------------------------------------------------------------------------
  // Live Molecular Flows: Opaque-Discard 4x4 Atlas (Visible Through Wet Gel!)
  // Exact 6 required MOL flows: rntps, atp, minus_flow, plus_flow, mg_ions, sirna
  // -------------------------------------------------------------------------
  const MOL = {
    rntps: ['Host rNTPs (A, U, G, C → Pol II)', '#66f0ff', 0, 0.25],
    atp: ['Host ATP (powering DNA ligase 1)', '#ffe85c', 1, 0.26],
    minus_flow: ['(-) Multimeric RNA strand spool', '#ff5ca8', 2, 0.28],
    plus_flow: ['(+) Progeny circular viroid rings', '#4cf5c0', 3, 0.27],
    mg_ions: ['Mg²⁺ ions (Loop E & Pol II cleft)', '#c48aff', 4, 0.22],
    sirna: ['Host Dicer vd-siRNAs (21–24 nt)', '#ff944d', 5, 0.26],
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
      case 0: // rNTP: pentose + base hexagon + triphosphate dots
        drawLine([[0.22, 0.50], [0.68, 0.50]], 0.16);
        drawBalls([[0.24, 0.50, 0.19], [0.58, 0.50, 0.10], [0.76, 0.50, 0.09], [0.90, 0.50, 0.08]]);
        break;
      case 1: // ATP: adenosine + 3 glowing phosphates
        drawBalls([[0.62, 0.50, 0.09], [0.76, 0.50, 0.09], [0.90, 0.50, 0.08], [0.32, 0.50, 0.23]]);
        break;
      case 2: // (-) RNA multimer: sinuous magenta RNA strand
        drawLine(Array.from({ length: 17 }, (_, i) => [0.12 + i * 0.0475, 0.50 + 0.20 * Math.sin(i * 0.80)]), 0.12);
        break;
      case 3: // (+) Progeny circular RNA ring: glowing closed circle
        g.beginPath();
        g.arc(...P(0.50, 0.50), 0.31 * s, 0, Math.PI * 2);
        g.lineWidth = 0.24 * s; g.strokeStyle = ink; g.stroke();
        g.lineWidth = 0.13 * s; g.strokeStyle = gr; g.stroke();
        break;
      case 4: // Mg2+ ion: bright coordinated divalent cation
        drawBalls([[0.50, 0.50, 0.26]]);
        drawBalls([[0.26, 0.28, 0.09], [0.74, 0.72, 0.09]]);
        break;
      case 5: // vd-siRNA: short 21-nt paired RNA duplex ladder
        drawLine([[0.18, 0.36], [0.82, 0.36]], 0.11);
        drawLine([[0.18, 0.64], [0.82, 0.64]], 0.11);
        drawLine([[0.34, 0.36], [0.34, 0.64]], 0.07);
        drawLine([[0.50, 0.36], [0.50, 0.64]], 0.07);
        drawLine([[0.66, 0.36], [0.66, 0.64]], 0.07);
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

  // Opaque alpha-discard 4x4 flow shader (visible cleanly through refractive wet-gel halos!)
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
        gl_FragColor = vec4(vCol * t.r * 1.24 * vFade, 1.);
      }`,
  });
  impMats.push(flowMat);

  const FLOW_MAX = 640;
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

  // Additive reaction & cleavage/ligation flash rings
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
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mv.z), 0., 66.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D uTex; varying vec3 vCol; varying float vA;
      void main() { float a = texture2D(uTex, gl_PointCoord).a * vA; if (a < .01) discard; gl_FragColor = vec4(vCol, a); }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  impMats.push(fxMat);

  const FX_MAX = 180;
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

  function splash(at: THREE.Vector3, hex: string, s = 0.38) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.65, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 2.8, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop();
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.045, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. Host nuclear rNTPs streaming into hijacked RNA Pol II (1WCM) active cleft
    {
      rate: 3.4,
      acc: 0.7,
      go: () => {
        const src = POL2_POS.clone().add(V(rr(-2.6, 2.2), rr(1.2, 2.5), rr(-0.8, 1.4)));
        const mid = src.clone().lerp(pol2ActiveSite, 0.5).add(V(0, 0.25, 0.3));
        emitFlow('rntps', [src, mid, pol2ActiveSite.clone()], ['pol2', 'tfiiia', 'minus_rna', 'rna_atoms'], 2.2, () =>
          splash(pol2ActiveSite, '#66f0ff', 0.38)
        );
      },
    },
    // 2. Host ATP streaming into DNA Ligase 1 to seal linear (+) monomers into circular rings
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        const src = LIGASE_POS.clone().add(V(rr(-2.0, 2.0), rr(-1.6, 1.4), rr(0.4, 1.4)));
        emitFlow('atp', [src, src.clone().lerp(LIGASE_POS, 0.5).add(V(0, 0.2, 0.25)), LIGASE_POS.clone()], ['ligase', 'plus_rna', 'ccr_hairpin'], 2.1, () =>
          splash(LIGASE_POS, '#ffe85c', 0.42)
        );
      },
    },
    // 3. Nascent (-) multimeric RNA flow following the rolling-circle concatemer from Pol II to cleavage/ligation
    {
      rate: 2.6,
      acc: 0.6,
      go: () => {
        if (!minusCurve) return;
        const pts = [
          minusCurve.getPointAt(0.08),
          minusCurve.getPointAt(0.32),
          minusCurve.getPointAt(0.62),
          minusCurve.getPointAt(0.92),
        ];
        emitFlow('minus_flow', pts, ['pol2', 'minus_rna', 'ccr_hairpin', 'ligase'], 2.9, () =>
          splash(pts[3], '#ff5ca8', 0.34)
        );
      },
    },
    // 4. Newly sealed (+) circular progeny viroids drifting from Ligase outward toward plant plasmodesmata
    {
      rate: 2.2,
      acc: 0.5,
      go: () => {
        const via = rand() < 0.5 ? PROGENY_POS_A : PROGENY_POS_B;
        const out = via.clone().add(V(rr(0.4, 1.1), rr(-0.6, 0.9), rr(-0.3, 0.6)));
        emitFlow('plus_flow', [LIGASE_POS.clone(), via.clone(), out], ['ligase', 'plus_rna', 'tr_domain'], 2.8, () =>
          splash(via, '#4cf5c0', 0.36)
        );
      },
    },
    // 5. Divalent Mg2+ ions coordinating Loop E, CCR hairpin, Pol II active cleft & G·U wobbles
    {
      rate: 2.6,
      acc: 0.6,
      go: () => {
        const r = rand();
        const dst = r < 0.45 ? loopECenter.clone() : r < 0.72 ? pol2ActiveSite.clone() : pickSite('wobble_gu', ccrCenter);
        const src = dst.clone().add(V(rr(-1.8, 1.8), rr(-1.4, 1.6), rr(0.2, 1.2)));
        emitFlow('mg_ions', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.18, 0.18)), dst], ['loop_e', 'ccr_hairpin', 'wobble_gu', 'pol2'], 2.3, () =>
          splash(dst, '#c48aff', 0.34)
        );
      },
    },
    // 6. Host Dicer-generated 21-24 nt vd-siRNAs budding off Pathogenicity & Variable stem domains
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const src = rand() < 0.68 ? pickSite('p_domain', V(-4.1, 1.3, 0.65)) : pickSite('v_domain', V(0.5, 0.9, 0.55));
        const mid = src.clone().add(V(rr(-0.6, 0.6), rr(0.9, 1.5), rr(0.2, 0.7)));
        const dst = mid.clone().add(V(rr(-1.1, 0.9), rr(0.7, 1.3), rr(-0.3, 0.4)));
        emitFlow('sirna', [src, mid, dst], ['p_domain', 'v_domain', 'tl_domain', 'c_domain'], 2.6, () =>
          splash(src, '#ff944d', 0.30)
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
      const base = MOL[p.type][3] * 1.32;
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
      q.y += a * Math.cos(w * 4.3 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.7 + p.ph * 1.9);
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
  // Live Molecular Dynamics:
  //  1. Rolling-circle rotation of the PSTVd template ring through Pol II (1WCM)
  //  2. TFIIIA-7ZF zinc-finger bridge breathing clamp + DNA Ligase 1 ligation pulse
  //  3. Luminescent synthesis beads spooling down the (-) multimeric RNA concatemer
  //  4. Gently bobbing newly circularized (+) progeny PSTVd rings
  //  5. Bioluminescent Loop E & CCR Hairpin subtle harmonic pulse + G·U H-bond shimmer
  // -------------------------------------------------------------------------
  function updateDynamics(dt: number) {
    const rate = Math.max(0.25, Math.min(2.8, flowSpeed));
    dynClock += dt * rate;

    if (templateRingGrp) {
      templateRingGrp.rotation.z = -0.22 - dynClock * 0.65;
    }
    if (tfiiiaGrp) {
      const s = 1.0 + 0.035 * Math.sin(dynClock * 2.4);
      tfiiiaGrp.scale.setScalar(s);
    }
    if (ligaseGrp) {
      const clamp = 1.0 + 0.055 * Math.sin(dynClock * 2.8);
      ligaseGrp.scale.set(clamp, 1.0 + 0.035 * Math.cos(dynClock * 2.8), clamp);
    }
    if (loopECoreGrp) {
      const pulse = 1.0 + 0.06 * Math.sin(dynClock * 3.1);
      loopECoreGrp.scale.setScalar(pulse);
    }
    if (ccrHairpinGrp) {
      ccrHairpinGrp.rotation.z = 0.045 * Math.sin(dynClock * 1.9);
    }
    if (minusCurve && minusPulseBeads.length) {
      minusPulseBeads.forEach(b => {
        const u = (b.u0 + dynClock * 0.24) % 1.0;
        minusCurve.getPointAt(u, b.mesh.position);
        const s = 0.72 + 0.45 * Math.sin(u * Math.PI);
        b.mesh.scale.setScalar(s);
      });
    }
    progenyRings.forEach(pr => {
      pr.grp.position.y = pr.basePos.y + 0.14 * Math.sin(dynClock * 1.4 + pr.phase);
      pr.grp.rotation.y += dt * rate * 0.38;
    });
    hBondBeads.forEach(hb => {
      const s = hb.baseScale * (0.82 + 0.30 * Math.sin(dynClock * 4.2 + hb.phase));
      hb.mesh.scale.setScalar(s);
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
    `<div class="row">RNA Bases ${'AUGC'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:#ffd447"></span>G·U Wobble <span class="bar" style="background:#ff5ca8;margin-left:6px"></span>(-) RNA <span class="bar" style="background:#52f5c8;margin-left:6px"></span>(+) Ring</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Potato Spindle Tuber Viroid (PSTVd): a 359-nt covalently closed circular non-coding ssRNA (50 × 2 nm) with zero capsid, zero envelope, and zero genes—hijacking host plant RNA Pol II (PDB 1WCM) for rolling-circle replication.';
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
    e.target.textContent = `Halo: ${organelleLook}`;
  };
  document.getElementById('cut').onclick = e => {
    cutOn = !cutOn;
    caps.visible = cutOn;
    e.target.textContent = cutOn ? 'Close halo' : 'Open halo';
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
    a.download = `viroid-pstvd-${curView}-realistic.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0, 0, 0])) };
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.0, 0.0, 0.0);
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

  // Exact tag coordinates for all 14 parts across all 5 views
  const POINTS = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      tl_domain: SITES.tl_domain[2] ?? V(-5.45, 1.40, 0.58),
      p_domain: SITES.p_domain[2] ?? V(-3.85, 1.26, 0.68),
      c_domain: SITES.c_domain[3] ?? V(-1.65, 1.12, 0.72),
      v_domain: SITES.v_domain[2] ?? V(0.45, 0.90, 0.54),
      tr_domain: SITES.tr_domain[2] ?? V(1.95, 0.76, 0.40),
      loop_e: SITES.loop_e[4] ?? loopECenter.clone(),
      ccr_hairpin: SITES.ccr_hairpin[SITES.ccr_hairpin.length - 1] ?? ccrCenter.clone(),
      wobble_gu: SITES.wobble_gu[6] ?? V(-2.45, 1.18, 0.72),
      pol2: SITES.pol2[0] ?? POL2_POS.clone(),
      tfiiia: SITES.tfiiia[3] ?? TFIIIA_POS.clone(),
      minus_rna: SITES.minus_rna[4] ?? V(4.65, -0.78, 0.78),
      plus_rna: SITES.plus_rna[SITES.plus_rna.length - 2] ?? PROGENY_POS_A.clone(),
      ligase: SITES.ligase[0] ?? LIGASE_POS.clone(),
      rna_atoms: SITES.rna_atoms[SITES.rna_atoms.length - 1] ?? ATOM0.clone(),
    };
    let P = { ...base };
    if (vName === 'domains') {
      P = {
        ...base,
        wobble_gu: SITES.wobble_gu[4] ?? V(-3.60, 1.24, 0.70),
      };
    } else if (vName === 'loope') {
      P = {
        ...base,
        loop_e: loopECenter.clone(),
        ccr_hairpin: ccrCenter.clone(),
        wobble_gu: SITES.wobble_gu[7] ?? V(-1.35, 1.08, 0.72),
      };
    } else if (vName === 'rolling_circle') {
      P = {
        ...base,
        pol2: POL2_POS.clone(),
        tfiiia: TFIIIA_POS.clone(),
        minus_rna: SITES.minus_rna[3] ?? V(5.35, -0.58, 0.76),
        plus_rna: PROGENY_POS_A.clone(),
        ligase: LIGASE_POS.clone(),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        rna_atoms: ATOM0.clone(),
        wobble_gu: SITES.rna_atoms[2] ?? ATOM0.clone().add(V(0.75, 0.15, 0.10)),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      tl_domain: 2.3,
      p_domain: 2.3,
      c_domain: 2.6,
      v_domain: 2.2,
      tr_domain: 2.3,
      loop_e: 1.75,
      ccr_hairpin: 1.85,
      wobble_gu: 2.1,
      pol2: 3.1,
      tfiiia: 2.1,
      minus_rna: 2.8,
      plus_rna: 2.4,
      ligase: 2.2,
      rna_atoms: 2.35,
    };
    const DIRS = {
      tl_domain: V(-0.18, 0.16, 0.97).normalize(),
      p_domain: V(-0.10, 0.16, 0.98).normalize(),
      c_domain: V(0.02, 0.18, 0.98).normalize(),
      v_domain: V(0.10, 0.16, 0.98).normalize(),
      tr_domain: V(0.14, 0.16, 0.98).normalize(),
      loop_e: V(0.06, 0.16, 0.98).normalize(),
      ccr_hairpin: V(0.08, 0.14, 0.98).normalize(),
      wobble_gu: V(0.04, 0.18, 0.98).normalize(),
      pol2: V(0.10, 0.12, 0.98).normalize(),
      tfiiia: V(-0.10, 0.10, 0.99).normalize(),
      minus_rna: V(0.08, 0.04, 0.99).normalize(),
      plus_rna: V(0.12, 0.06, 0.99).normalize(),
      ligase: V(0.08, 0.05, 0.99).normalize(),
      rna_atoms: V(0.15, 0.05, 0.98).normalize(),
    };
    const dir = DIRS[k] ?? V(0.08, 0.14, 0.98).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.3, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    tl_domain: ['p_domain', 'wobble_gu', 'tfiiia'],
    p_domain: ['tl_domain', 'c_domain', 'wobble_gu'],
    c_domain: ['loop_e', 'ccr_hairpin', 'wobble_gu'],
    v_domain: ['c_domain', 'tr_domain', 'wobble_gu'],
    tr_domain: ['v_domain', 'wobble_gu'],
    loop_e: ['c_domain', 'ccr_hairpin'],
    ccr_hairpin: ['c_domain', 'loop_e', 'ligase'],
    wobble_gu: ['tl_domain', 'p_domain', 'c_domain', 'v_domain', 'tr_domain', 'rna_atoms'],
    pol2: ['tfiiia', 'minus_rna'],
    tfiiia: ['pol2', 'tl_domain'],
    minus_rna: ['pol2', 'plus_rna', 'ligase'],
    plus_rna: ['ligase', 'minus_rna'],
    ligase: ['plus_rna', 'ccr_hairpin'],
    rna_atoms: ['wobble_gu'],
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
        if (lb) lb.textContent = `Halo: ${organelleLook}`;
      }
    }
    if (m.cut !== undefined && m.cut !== cutOn) {
      cutOn = m.cut;
      caps.visible = cutOn;
      const cb = document.getElementById('cut');
      if (cb) cb.textContent = cutOn ? 'Close halo' : 'Open halo';
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
      cell.rotation.y = 0.065 * Math.sin(sway * 0.12);
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
        m.emissiveIntensity = 0.30 + 0.78 * k;
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
    buildPlantNucleoplasmHalo();
    buildPstvdRod();
    buildRollingCircleTheater();
    buildRnaAtomicInset();
    // Warm up live dynamics & kinetic flows so frame 1 is immediately rich
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
        nucleotides: 359,
        wobblePairs: SITES.wobble_gu.length,
        progenyRings: progenyRings.length,
        minusPulseBeads: minusPulseBeads.length,
        dynClock,
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
