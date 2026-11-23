// @ts-nocheck
import * as THREE from 'three';
import { PDB_SPECIALIZED } from '../molecules/pdb_specialized.js';
import { PDB_BIOENERGETICS } from '../molecules/pdb_bioenergetics.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  sweepGeo,
  shellGeo,
  capStrip,
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
  // Spatial Architecture — Left-to-Right Multipolar Neuron & 20 nm Synapse
  //   Left   (X = -8.9..-3.7, Y = 1.35): Branching Spiny Dendrites + Cutaway Soma
  //          with Epigenetic Nucleus (1AOI H3K27ac Open vs H3K27me3 Silenced)
  //   Center (X = -3.7..+4.1, Y = 1.28): Axon Hillock (-55 mV) -> Iridescent
  //          Myelin Sheaths -> Exposed Nodes of Ranvier (Nav1.7 6J8I, Kv1.2 2R9R,
  //          Na+/K+-ATPase 3WGU) + Internal Axonal Microtubule Kinesin Rails
  //   Right  (X = +4.1..+8.8, Y = 1.28): Cutaway Presynaptic Terminal Bouton ->
  //          Cav Ca2+ Sparks -> Docked Vesicles & SNARE Zippers (1SFC) ->
  //          20 nm Chemical Synaptic Cleft -> Postsynaptic Spine (AMPA 3KG2, nAChR 2BG9)
  //   Bottom (X =  0.0, Y = -4.15): Circular Optical Atomic Inset (0.1-0.5 nm)
  //          Glutamate, Acetylcholine, Na+/K+/Ca2+ Ions, and H3K27ac Acetyl Mark
  // -------------------------------------------------------------------------
  const NM = 0.25;

  const SOMA_C = V(-5.55, 1.35, 0.20);
  const NUC_C = V(-5.68, 1.46, 0.12);
  const HILLOCK_C = V(-3.18, 1.28, 0.20);
  const NODE1_C = V(-0.02, 1.28, 0.20);
  const NODE2_C = V(2.68, 1.28, 0.20);
  const BOUTON_C = V(5.12, 1.28, 0.20);
  const CLEFT_C = V(6.66, 1.28, 0.20);
  const SPINE_C = V(7.85, 1.28, 0.20);
  const ATOM_C = V(0.0, -4.45, 0.90);

  // Exact 5 required camera VIEWS (NON-NEGOTIABLE Phase 17A contract)
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.0, 0.15, 42.6), V(0.0, -0.45, 0.20)],
    ['soma_epigenetics', V(-5.15, 1.65, 11.4), V(-5.58, 0.96, 0.20)],
    ['node_ranvier', V(-0.02, 1.52, 8.9), V(-0.02, 0.68, 0.20)],
    ['synapse', V(6.38, 1.52, 11.2), V(6.32, 0.88, 0.20)],
    ['atoms', V(0.0, -4.45, 10.9), V(0.0, -4.45, 0.90)],
  ];
  let view = 0;
  let curView = 'overview';

  type NeuronMode = 'action_potential' | 'resting' | 'synaptic_fire';
  const MODE_ORDER: readonly NeuronMode[] = ['action_potential', 'resting', 'synaptic_fire'];
  const MODE_LABEL: Record<NeuronMode, string> = {
    action_potential: 'State: Action Potential (Saltatory)',
    resting: 'State: Resting (−70 mV Polarized)',
    synaptic_fire: 'State: Synaptic Burst (Ca²⁺ + SNARE)',
  };
  let mode: NeuronMode = 'action_potential';

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#132242',
    bgMid: '#070e20',
    bgOuter: '#02040a',
    keyColor: '#fff4e8',
    keyIntensity: 2.85,
    rimColor: '#6ad2ff',
    rimIntensity: 1.75,
    lampColor: '#76f2d8',
    lampIntensity: 13.0,
    lampPos: [-5.2, 2.2, 5.8],
    bloomStrength: 0.22,
    bloomRadius: 0.44,
    bloomThreshold: 0.88,
    exposure: 0.96,
    bokehCount: 230,
    bokehColor: '#70c4ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated regional microscopy accent lamps (Node of Ranvier, Chemical Synapse, Atomic Lens)
  const nodeLamp = new THREE.PointLight('#52e4ff', 12.5, 22, 2);
  nodeLamp.position.set(NODE1_C.x, NODE1_C.y + 1.8, 5.4);
  const synLamp = new THREE.PointLight('#ffc86c', 12.5, 22, 2);
  synLamp.position.set(CLEFT_C.x - 0.3, CLEFT_C.y + 1.5, 5.5);
  const insetLamp = new THREE.PointLight('#9ed8ff', 10.5, 18, 2);
  insetLamp.position.set(ATOM_C.x, ATOM_C.y + 1.1, 5.8);
  scene.add(nodeLamp, synLamp, insetLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  const caps = new THREE.Group();
  const cutExtras = new THREE.Group();
  cell.add(caps, cutExtras);

  // Separate localized cutaway planes so Soma, Nucleus, Myelin, and Terminal Bouton each slice cleanly
  const SOMA_CUT_X = -0.62;
  const SOMA_CUT_LOCAL = [
    new THREE.Plane(V(-1, 0, 0), SOMA_C.x + SOMA_CUT_X),
    new THREE.Plane(V(0, 0, -1), SOMA_C.z + 0.08),
  ];
  const SOMA_CUT = SOMA_CUT_LOCAL.map(p => p.clone());
  const SOMA_CLIP = { clippingPlanes: SOMA_CUT, clipIntersection: true, clipShadows: true };

  const NUC_CUT_LOCAL = [
    new THREE.Plane(V(-1, 0, 0), NUC_C.x - 0.62),
    new THREE.Plane(V(0, 0, -1), NUC_C.z + 0.04),
  ];
  const NUC_CUT = NUC_CUT_LOCAL.map(p => p.clone());
  const NUC_CLIP = { clippingPlanes: NUC_CUT, clipIntersection: true, clipShadows: true };

  const AXON_CUT_LOCAL = [
    new THREE.Plane(V(0, 0, -1), 0.38),
    new THREE.Plane(V(0, -1, 0), 1.44),
  ];
  const AXON_CUT = AXON_CUT_LOCAL.map(p => p.clone());
  const AXON_CLIP = { clippingPlanes: AXON_CUT, clipIntersection: true, clipShadows: true };

  const BOUTON_CUT_LOCAL = [
    new THREE.Plane(V(0, 0, -1), BOUTON_C.z + 0.14),
    new THREE.Plane(V(1, 0, 0), -(BOUTON_C.x - 0.55)),
  ];
  const BOUTON_CUT = BOUTON_CUT_LOCAL.map(p => p.clone());
  const BOUTON_CLIP = { clippingPlanes: BOUTON_CUT, clipIntersection: true, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    const applySet = (local: THREE.Plane[], world: THREE.Plane[]) => {
      world.forEach((p, i) => {
        p.copy(local[i]);
        if (!cutOn) p.constant = 1e4;
        p.applyMatrix4(cell.matrixWorld);
      });
    };
    applySet(SOMA_CUT_LOCAL, SOMA_CUT);
    applySet(NUC_CUT_LOCAL, NUC_CUT);
    applySet(AXON_CUT_LOCAL, AXON_CUT);
    applySet(BOUTON_CUT_LOCAL, BOUTON_CUT);
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.7);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // -------------------------------------------------------------------------
  // Exact 18 PARTS & REG Keys (NON-NEGOTIABLE Phase 17A Contract)
  // -------------------------------------------------------------------------
  const PARTS: Array<[string, string, string]> = [
    ['dendrites', 'Spiny dendrites (EPSP synaptic inputs)', '#58d2ff'],
    ['soma', 'Cutaway neuron soma (Nissl rER & Golgi)', '#7c98ff'],
    ['nucleus_h3k27ac', 'Nucleus: H3K27ac vs H3K27me3 (PDB 1AOI)', '#4cf8b8'],
    ['axon_hillock', 'Axon hillock trigger zone (−55 mV)', '#6cf4ff'],
    ['myelin_sheath', 'Schwann myelin sheaths (saltatory)', '#50c4e8'],
    ['node_ranvier', 'Node of Ranvier (unmyelinated bilayer)', '#ffd468'],
    ['nav17', 'Naᵥ1.7 Na⁺ voltage channels (PDB 6J8I)', '#36d2ff'],
    ['kv12', 'Kᵥ1.2 K⁺ repolarizing channels (PDB 2R9R)', '#c27cff'],
    ['nak_reset', 'Na⁺/K⁺-ATPase −70 mV reset (PDB 3WGU)', '#ffa850'],
    ['axon_mt', 'Axonal microtubules & kinesin cargo rails', '#3ee4a8'],
    ['terminal_bouton', 'Presynaptic terminal bouton & active zone', '#8c88ff'],
    ['cav_channel', 'Voltage-gated Caᵥ Ca²⁺ spark channels', '#ffdc52'],
    ['synaptic_vesicle', 'Docked synaptic vesicles (Glu · ACh)', '#7cecff'],
    ['snare_zipper', '4-helix SNARE fusion zipper (PDB 1SFC)', '#ff7658'],
    ['synaptic_cleft', '20 nm synaptic cleft & postsynaptic PSD', '#4cf0d8'],
    ['ampa_receptor', 'Postsynaptic AMPA Glu channel (PDB 3KG2)', '#56f49e'],
    ['nachr_receptor', 'Postsynaptic nAChR channel (PDB 2BG9)', '#ff7cb6'],
    ['neuro_atoms', 'Atomic inset (Glu · ACh · Ions · H3K27ac)', '#8ce6ff'],
  ];

  const INFO: Record<string, [string, string]> = {
    dendrites: [
      'Arborized cytoplasmic extensions studded with mushroom-shaped dendritic spines carrying postsynaptic receptors',
      'Collect thousands of graded excitatory/inhibitory potentials and funnel current passively toward the soma and hillock',
    ],
    soma: [
      'Metabolic cell body packed with rough-ER Nissl bodies, Golgi cisternae, neurofilaments, and ATP-producing mitochondria',
      'Integrates dendritic signals and synthesizes channel proteins, synaptic vesicle membranes, and neurotransmitters',
    ],
    nucleus_h3k27ac: [
      'Cutaway nuclear envelope packed with real RCSB PDB 1AOI nucleosomes showing open emerald H3K27ac vs. compacted violet H3K27me3',
      'Histone acetylation neutralizes lysine charges to open neuronal genes (SCN9A, SYT1) while H3K27me3 silences muscle/blood genes (MYH1, HBB)',
    ],
    axon_hillock: [
      'Tapered initial segment at the soma-axon junction enriched with ultra-dense voltage-gated Na⁺ channels',
      'Sums incoming graded potentials; crossing −55 mV threshold ignites an all-or-none action potential down the axon',
    ],
    myelin_sheath: [
      'Concentric lipid-rich Schwann cell membrane wrappings insulating internodal axon segments with high dielectric resistance',
      'Minimizes transmembrane current leak and lowers capacitance so voltage leaps rapidly between Nodes of Ranvier (saltatory conduction)',
    ],
    node_ranvier: [
      'Exposed 1 µm unmyelinated 5 nm phospholipid bilayer gap separating consecutive myelin sheaths along the axon',
      'Regenerates the action potential cleanly from −70 mV to +40 mV and back to −70 mV at every saltatory relay station',
    ],
    nav17: [
      'Real RCSB PDB 6J8I human voltage-gated sodium channel Naᵥ1.7 with 4-domain pore α-subunit and extracellular β1/β2 Ig domains',
      'S4 voltage sensors snap outward above −55 mV, opening the DEKA selectivity pore for explosive Na⁺ influx (+40 mV spike)',
    ],
    kv12: [
      'Real RCSB PDB 2R9R homotetrameric voltage-gated potassium channel Kᵥ1.2 with cytosolic T1/β-subunit gondola',
      'Opens with a short delay after Naᵥ1.7 inactivation, streaming K⁺ outward to repolarize and briefly hyperpolarize the node',
    ],
    nak_reset: [
      'Real RCSB PDB 3WGU αβγ Na⁺/K⁺-ATPase ion pump embedded along the nodal and axonal bilayer',
      'Hydrolyzes ATP to pump 3 Na⁺ out and 2 K⁺ in per cycle, restoring −70 mV resting ionic gradients after firing',
    ],
    axon_mt: [
      'Polarized bundle of parallel α/β-tubulin microtubules spanning the axoplasm from soma to presynaptic terminal',
      'Serves as molecular railway tracks for ATP-powered kinesin-1 motors delivering synaptic vesicle precursors anterogradely',
    ],
    terminal_bouton: [
      'Flared presynaptic axon ending containing mitochondria, reserve vesicles, and an electron-dense active zone cytomatrix',
      'Converts the arriving electrical action potential into a localized chemical neurotransmitter release signal',
    ],
    cav_channel: [
      'Voltage-gated P/Q-type and N-type calcium channel clusters anchored right beside docked synaptic vesicles',
      'Depolarization opens Caᵥ pores to admit brief high-concentration Ca²⁺ microdomain sparks that trigger Synaptotagmin',
    ],
    synaptic_vesicle: [
      '40 nm lipid bilayer spheres loaded with ~5,000 Glutamate or Acetylcholine molecules via vesicular proton-antiporters',
      'Dock at the active zone and rapidly fuse with the presynaptic membrane within <200 microseconds of Ca²⁺ arrival',
    ],
    snare_zipper: [
      'Real RCSB PDB 1SFC four-helix coiled-coil neuronal SNARE complex (VAMP2, Syntaxin-1A, SNAP-25 N/C helices)',
      'Zippers N-to-C terminally upon Ca²⁺-Synaptotagmin binding to overcome membrane hydration repulsion and rip open a fusion pore',
    ],
    synaptic_cleft: [
      'Precision 20 nm extracellular fluid gap bridged by neurexin-neuroligin adhesion tethers facing the postsynaptic density (PSD)',
      'Enables sub-millisecond neurotransmitter diffusion across 20 nm while keeping pre- and postsynaptic cells electrically insulated',
    ],
    ampa_receptor: [
      'Real RCSB PDB 3KG2 Y-shaped homotetrameric GluA2 AMPA ionotropic glutamate receptor spanning the postsynaptic density',
      'Binds diffusing Glutamate inside its extracellular clamshells to snap open its cation pore, driving fast excitatory Na⁺ EPSPs',
    ],
    nachr_receptor: [
      'Real RCSB PDB 2BG9 five-subunit pentameric nicotinic acetylcholine receptor rosette with cleft-facing ACh binding pockets',
      'Binds two Acetylcholine molecules to rotate M2 pore helices open, conducting depolarizing Na⁺/Ca²⁺ currents into the spine',
    ],
    neuro_atoms: [
      '0.1–0.5 nm CPK ball-and-stick optical lens comparing Glutamate (C₅H₉NO₄), Acetylcholine, Na⁺/K⁺/Ca²⁺ ions, and H3K27ac (–COCH₃)',
      'Links atomic bond geometry, ionic radius, and lysine charge neutralization directly to synaptic firing and neuronal gene identity',
    ],
  };

  // -------------------------------------------------------------------------
  // Material Registry & Cinema PBR Helpers
  // -------------------------------------------------------------------------
  const REG: Record<string, { mats: THREE.Material[]; imp: THREE.ShaderMaterial[] }> = {};
  const reg = <T extends THREE.Material>(k: string | null, m: T): T => {
    if (!k) return m;
    const r = (REG[k] ??= { mats: [], imp: [] });
    if ((m as THREE.ShaderMaterial).isShaderMaterial) r.imp.push(m as unknown as THREE.ShaderMaterial);
    else r.mats.push(m);
    return m;
  };
  const phys = (o: THREE.MeshPhysicalMaterialParameters, clipObj = {}) =>
    new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.85, ...clipObj, ...o });

  function makeCinemaProteinMat(
    k: string,
    opts: {
      sssColor?: string;
      sssIntensity?: number;
      emissive?: string;
      emissiveIntensity?: number;
      roughness?: number;
      clearcoat?: number;
      sheenColor?: string;
      clipPlanes?: THREE.Plane[] | null;
      transparent?: boolean;
      opacity?: number;
      depthWrite?: boolean;
    } = {}
  ): THREE.MeshPhysicalMaterial {
    const m = phys({
      vertexColors: true,
      roughness: opts.roughness ?? 0.30,
      metalness: 0.05,
      clearcoat: opts.clearcoat ?? 0.48,
      clearcoatRoughness: 0.22,
      sheen: 0.44,
      sheenColor: new THREE.Color(opts.sheenColor ?? '#eef8ff'),
      normalMap: protBump,
      normalScale: new THREE.Vector2(0.34, 0.34),
      emissive: new THREE.Color(opts.emissive ?? '#081828'),
      emissiveIntensity: opts.emissiveIntensity ?? 0.24,
      side: THREE.DoubleSide,
      clippingPlanes: opts.clipPlanes ?? null,
      clipIntersection: true,
      transparent: opts.transparent ?? false,
      opacity: opts.opacity ?? 1,
      depthWrite: opts.depthWrite ?? true,
    });
    applyBacklitSSS(m, opts.sssColor ?? '#8ce0ff', opts.sssIntensity ?? 0.24, 2.7);
    return reg(k, m);
  }

  const sculpt = (k: string, parent: THREE.Object3D = cell, opts: Parameters<typeof makeCinemaProteinMat>[1] = {}) =>
    makeSculptedMesh(makeCinemaProteinMat(k, opts), parent);

  const shells: THREE.MeshPhysicalMaterial[] = [];
  const LOOKS = ['gel', 'see-through', 'solid'] as const;
  let organelleLook: (typeof LOOKS)[number] = 'gel';
  let placed = 0;

  function cinemaShellMat(
    k: string | null,
    solidHex: string,
    gelHex: string,
    clipObj: Record<string, unknown>,
    opts: Record<string, unknown> = {}
  ): THREE.MeshPhysicalMaterial {
    const m = makeCinemaMembraneMat(clipObj, (opts.normalMap as THREE.Texture) ?? bump(10, 8), {
      color: gelHex,
      attenuationColor: (opts.attenCol as string) ?? solidHex,
      attenuationDistance: (opts.attenDist as number) ?? 4.6,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.32,
      iridescence: (opts.iridescence as number) ?? 0.56,
      thickness: (opts.thickness as number) ?? 0.48,
      roughness: (opts.roughness as number) ?? 0.11,
      sheenColor: (opts.sheenColor as string) ?? '#e4f8ff',
      normalScale: (opts.normalScale as number) ?? 0.22,
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
  const grown = (a: Float32Array) => {
    const b = new Float32Array(a.length * 2);
    b.set(a);
    return b;
  };

  function balls(k: string, parent: THREE.Object3D = cell, clip = false, cutPlanes: THREE.Plane[] = SOMA_CUT) {
    let n = 0, cap = 1 << 11;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 10;
    let A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap);
    let C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
    return {
      stick(a: THREE.Vector3, b: THREE.Vector3, r: number, c1: THREE.Color, c2: THREE.Color) {
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
      add(p: THREE.Vector3, s: number, c: THREE.Color) {
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
            sg.setAttribute(nm as string, new THREE.InstancedBufferAttribute((arr as Float32Array).slice(0, m * (d as number)), d as number))
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

  // Site anchors & live animation handles
  const SITES: Record<string, THREE.Vector3[]> = Object.fromEntries(PARTS.map(p => [p[0], []]));
  let animClock = 0;

  // Live animation handles across Neuron & Synapse
  let hillockRing: THREE.Mesh | null = null;
  let pulseOrb: THREE.Mesh | null = null;
  let pulseRingNode1: THREE.Mesh | null = null;
  let pulseRingNode2: THREE.Mesh | null = null;
  let nav17MatRef: THREE.MeshPhysicalMaterial | null = null;
  let kv12MatRef: THREE.MeshPhysicalMaterial | null = null;
  let nakMatRef: THREE.MeshPhysicalMaterial | null = null;
  let cavMatRef: THREE.MeshPhysicalMaterial | null = null;
  let ampaMatRef: THREE.MeshPhysicalMaterial | null = null;
  let nachrMatRef: THREE.MeshPhysicalMaterial | null = null;
  let heroVesicleGrp: THREE.Group | null = null;
  let heroSnareGrp: THREE.Group | null = null;
  let fusionPoreRing: THREE.Mesh | null = null;
  let caSparkHalo: THREE.Mesh | null = null;
  const kinesinWalkers: Array<{ grp: THREE.Group; u0: number; yOff: number; zOff: number }> = [];
  const dendritePulses: Array<{ mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; u0: number }> = [];
  const cleftGluBeads: Array<{ mesh: THREE.Mesh; u0: number; yOff: number; zOff: number; isAch: boolean }> = [];
  let nodeVoltageCv: HTMLCanvasElement | null = null;
  let nodeVoltageTex: THREE.CanvasTexture | null = null;
  let lastPlaqueKey = '';
  let currentNodeMv = -70;
  let apWaveCount = 0;
  let snareFusionCount = 0;

  function paintPlaque(
    cv: HTMLCanvasElement,
    tex: THREE.CanvasTexture,
    title: string,
    subtitle: string,
    titleColor: string,
    borderColor: string,
    wavePhase?: number
  ) {
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cv.width, cv.height);
    g.fillStyle = 'rgba(7, 13, 26, 0.86)';
    g.strokeStyle = borderColor;
    g.lineWidth = 4;
    const r = 22, x = 6, y = 6, w = cv.width - 12, h = cv.height - 12;
    g.beginPath();
    g.moveTo(x + r, y);
    g.lineTo(x + w - r, y);
    g.quadraticCurveTo(x + w, y, x + w, y + r);
    g.lineTo(x + w, y + h - r);
    g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    g.lineTo(x + r, y + h);
    g.quadraticCurveTo(x, y + h, x, y + h - r);
    g.lineTo(x, y + r);
    g.quadraticCurveTo(x, y, x + r, y);
    g.closePath();
    g.fill();
    g.stroke();

    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = '700 28px system-ui, -apple-system, sans-serif';
    g.fillStyle = titleColor;
    g.fillText(title, cv.width * 0.5, 38);
    g.font = '600 21px system-ui, -apple-system, sans-serif';
    g.fillStyle = '#dcebfa';
    g.fillText(subtitle, cv.width * 0.5, 76);

    if (wavePhase !== undefined) {
      // Crisp mini action-potential voltage trace along bottom strip
      const bx = 42, bw = cv.width - 84, by = 114;
      g.strokeStyle = 'rgba(130,170,220,0.28)';
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(bx, by);
      g.lineTo(bx + bw, by);
      g.stroke();

      g.strokeStyle = titleColor;
      g.lineWidth = 3.5;
      g.beginPath();
      for (let i = 0; i <= 60; i++) {
        const u = i / 60;
        let vNorm = 0; // resting -70 mV
        if (wavePhase >= 0) {
          const d = u - 0.42;
          const spike = Math.exp(-(d * d) / 0.0045) * 1.0;
          const undershoot = -0.22 * Math.exp(-((u - 0.56) * (u - 0.56)) / 0.008);
          vNorm = spike + undershoot;
        }
        const px = bx + u * bw;
        const py = by - vNorm * 26;
        if (i === 0) g.moveTo(px, py);
        else g.lineTo(px, py);
      }
      g.stroke();

      if (wavePhase >= 0) {
        const cx = bx + ((wavePhase % 1) * bw);
        const d = (wavePhase % 1) - 0.42;
        const vNorm = Math.exp(-(d * d) / 0.0045) - 0.22 * Math.exp(-(((wavePhase % 1) - 0.56) ** 2) / 0.008);
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.arc(cx, by - vNorm * 26, 5.5, 0, Math.PI * 2);
        g.fill();
      }
    }
    tex.needsUpdate = true;
  }

  function updateNodePlaque(mv: number, phaseNorm: number) {
    if (!nodeVoltageCv || !nodeVoltageTex) return;
    const mvInt = Math.round(mv);
    const pBucket = Math.floor((phaseNorm % 1) * 16);
    const key = `${mode}:${Math.round(mvInt / 5)}:${pBucket}`;
    if (key === lastPlaqueKey) return;
    lastPlaqueKey = key;

    if (mode === 'resting') {
      paintPlaque(
        nodeVoltageCv,
        nodeVoltageTex,
        'NODE OF RANVIER · −70 mV RESTING',
        'Naᵥ1.7 Closed · Na⁺/K⁺ Pump Polarized',
        '#c2a4ff',
        'rgba(176,144,255,0.82)',
        -1
      );
    } else if (mode === 'synaptic_fire') {
      paintPlaque(
        nodeVoltageCv,
        nodeVoltageTex,
        `HIGH-FREQ BURST · ${mvInt >= 0 ? '+' : ''}${mvInt} mV`,
        'Rapid Ca²⁺ Sparks · SNARE → AMPA / nAChR',
        '#ffd062',
        'rgba(255,200,82,0.88)',
        phaseNorm
      );
    } else {
      const spikeLabel =
        mvInt > 0
          ? `ACTION POTENTIAL · +${mvInt} mV SPIKE`
          : mvInt < -73
            ? `REPOLARIZING · ${mvInt} mV (Kᵥ1.2)`
            : `SALTATORY NODE · ${mvInt} mV`;
      const accent = mvInt > 0 ? '#5cf4ff' : mvInt < -73 ? '#d494ff' : '#7aeaff';
      paintPlaque(
        nodeVoltageCv,
        nodeVoltageTex,
        spikeLabel,
        'Naᵥ1.7 (+40 mV) → Kᵥ1.2 → Na⁺/K⁺ Reset',
        accent,
        mvInt > 0 ? 'rgba(92,244,255,0.92)' : 'rgba(122,226,255,0.78)',
        phaseNorm
      );
    }
  }

  // -------------------------------------------------------------------------
  // 1. Decode ALL 7 Real RCSB PDBs via `buildPdbSurfaceGeo`
  //    1. nucleosome (1AOI) — Open H3K27ac euchromatin & Compact H3K27me3 heterochromatin
  //    2. nav17      (6J8I) — Voltage-gated sodium channel at Nodes of Ranvier & Hillock
  //    3. kv12       (2R9R) — Voltage-gated potassium repolarizing channel (4-fold protomer)
  //    4. nak_pump   (3WGU) — Na+/K+-ATPase -70 mV reset pump (from PDB_BIOENERGETICS)
  //    5. snare      (1SFC) — 4-helix neuronal SNARE fusion zipper
  //    6. ampa       (3KG2) — Postsynaptic Y-shaped glutamate AMPA receptor
  //    7. nachr      (2BG9) — Postsynaptic pentameric nicotinic ACh receptor
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    const mNuc = pdb.getModel(PDB_SPECIALIZED, 'nucleosome');
    const mNav = pdb.getModel(PDB_SPECIALIZED, 'nav17');
    const mKv = pdb.getModel(PDB_SPECIALIZED, 'kv12');
    const mNak = pdb.getModel(PDB_BIOENERGETICS, 'nak_pump');
    const mSnare = pdb.getModel(PDB_SPECIALIZED, 'snare');
    const mAmpa = pdb.getModel(PDB_SPECIALIZED, 'ampa');
    const mNachr = pdb.getModel(PDB_SPECIALIZED, 'nachr');

    // 1A. Open Active Euchromatin Nucleosome (1AOI — H3K27ac: glowing emerald DNA + warm gold-emerald octamer)
    const cDnaOpenA = col('#48ffca');
    const cDnaOpenB = col('#7ef6ff');
    const cHistOpenA = col('#ffd464');
    const cHistOpenB = col('#42e2a4');
    const geoNucOpen = buildPdbSurfaceGeo(mNuc, {
      nm: NM,
      scale: 0.145,
      maxDim: 32,
      sigmaAng: 4.4,
      iso: 0.37,
      aoStrength: 0.50,
      colorFn: (grp, part) => {
        if (grp <= 1) return part === 3 ? cDnaOpenB : cDnaOpenA;
        return grp % 2 === 0 ? cHistOpenA : cHistOpenB;
      },
    });

    // 1B. Compacted Silenced Heterochromatin Nucleosome (1AOI — H3K27me3: deep violet DNA + plum-indigo octamer)
    const cDnaShutA = col('#8e64ff');
    const cDnaShutB = col('#6448cc');
    const cHistShutA = col('#b856dc');
    const cHistShutB = col('#6e3ea8');
    const geoNucClosed = buildPdbSurfaceGeo(mNuc, {
      nm: NM,
      scale: 0.142,
      maxDim: 30,
      sigmaAng: 4.5,
      iso: 0.39,
      aoStrength: 0.56,
      colorFn: (grp, part) => {
        if (grp <= 1) return part === 3 ? cDnaShutB : cDnaShutA;
        return grp % 2 === 0 ? cHistShutA : cHistShutB;
      },
    });

    // 2. Nav1.7 (6J8I — 4-domain alpha pore + beta1/beta2 extracellular Ig subunits along +Z -> rotateX(-PI/2) puts +Z to +Y)
    const cNavAlpha = col('#24beff');
    const cNavS4 = col('#7ef6ff');
    const cNavBeta1 = col('#52f2d2');
    const cNavBeta2 = col('#ffd462');
    const geoNav = buildPdbSurfaceGeo(mNav, {
      nm: NM,
      scale: 0.165,
      maxDim: 34,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.54,
      colorFn: (grp, part) => {
        if (grp === 0) return cNavBeta1;
        if (grp === 2) return cNavBeta2;
        return part === 1 ? cNavS4 : cNavAlpha;
      },
    });
    geoNav.rotateX(-Math.PI / 2);

    // 3. Kv1.2 (2R9R — filter biological alpha+beta protomer grp 0+1, center around Z=-60 -> rotateX(-PI/2) along +Y)
    const cKvAlpha = col('#b86eff');
    const cKvPore = col('#e49cff');
    const cKvBeta = col('#ff9860');
    const geoKv = buildPdbSurfaceGeo(mKv, {
      nm: NM,
      scale: 0.138,
      maxDim: 32,
      sigmaAng: 4.3,
      iso: 0.36,
      aoStrength: 0.52,
      offsetAng: [14, 0, 62],
      filter: grp => grp <= 1,
      colorFn: (grp, part) => {
        if (grp === 0) return cKvBeta;
        return part === 1 ? cKvPore : cKvAlpha;
      },
    });
    geoKv.rotateX(-Math.PI / 2);

    // 4. Na+/K+-ATPase (3WGU from PDB_BIOENERGETICS — +Z extracellular beta -> rotateX(-PI/2) along +Y)
    const cNakAlpha = col('#ff9e42');
    const cNakAct = col('#ffd668');
    const cNakBeta = col('#58d2ff');
    const cNakGamma = col('#ff6c96');
    const geoNak = buildPdbSurfaceGeo(mNak, {
      nm: NM,
      scale: 0.155,
      maxDim: 34,
      sigmaAng: 4.0,
      iso: 0.37,
      aoStrength: 0.55,
      colorFn: (grp, part) => {
        if (grp === 1) return cNakBeta;
        if (grp === 2) return cNakGamma;
        return part === 1 ? cNakAct : cNakAlpha;
      },
    });
    geoNak.rotateX(-Math.PI / 2);

    // 5. SNARE 4-Helix Fusion Zipper (1SFC — align coiled-coil axis along +X bridging vesicle to active zone)
    const cSnare = [col('#ff6452'), col('#ffaa42'), col('#46ecd4'), col('#60a8ff')];
    const geoSnare = buildPdbSurfaceGeo(mSnare, {
      nm: NM,
      scale: 0.225,
      maxDim: 32,
      sigmaAng: 3.9,
      iso: 0.37,
      aoStrength: 0.52,
      colorFn: grp => cSnare[grp % 4],
    });
    const qSnare = new THREE.Quaternion().setFromUnitVectors(V(0.60, 0.33, -0.73).normalize(), V(1, 0, 0));
    geoSnare.applyQuaternion(qSnare);

    // 6. AMPA GluA2 Homotetramer (3KG2 — -Z is splayed Y-shaped cleft-facing NTD/LBD, +Z is TMD -> rotateY(+PI/2) puts -Z to -X cleft!)
    const cAmpa = [col('#3ce896'), col('#6cffba'), col('#2ad0c8'), col('#80ffea')];
    const geoAmpa = buildPdbSurfaceGeo(mAmpa, {
      nm: NM,
      scale: 0.165,
      maxDim: 38,
      sigmaAng: 4.6,
      iso: 0.36,
      aoStrength: 0.55,
      colorFn: (grp, part) => (part === 1 ? cAmpa[grp % 4].clone().lerp(col('#ffffff'), 0.16) : cAmpa[grp % 4]),
    });
    geoAmpa.rotateY(Math.PI / 2);

    // 7. nAChR Pentameric Rosette (2BG9 — +Z is wide cleft-facing ACh crown, -Z is spine funnel -> rotateY(-PI/2) puts +Z to -X cleft!)
    const cNachr = [col('#ff6ea6'), col('#ff98c4'), col('#e462d8'), col('#ff8a72'), col('#ffb678')];
    const geoNachr = buildPdbSurfaceGeo(mNachr, {
      nm: NM,
      scale: 0.175,
      maxDim: 36,
      sigmaAng: 4.0,
      iso: 0.37,
      aoStrength: 0.55,
      colorFn: (grp, part) => (part === 1 ? cNachr[grp % 5].clone().lerp(col('#fff2e8'), 0.14) : cNachr[grp % 5]),
    });
    geoNachr.rotateY(-Math.PI / 2);

    return { geoNucOpen, geoNucClosed, geoNav, geoKv, geoNak, geoSnare, geoAmpa, geoNachr };
  }

  // -------------------------------------------------------------------------
  // 2. SOMA, BRANCHING SPINY DENDRITES & EPIGENETIC NUCLEUS (`1AOI`)
  // -------------------------------------------------------------------------
  function buildSomaAndDendrites(T: ReturnType<typeof buildPdbTemplates>) {
    const somaGrp = new THREE.Group();
    somaGrp.position.copy(SOMA_C);
    cell.add(somaGrp);

    // Organic stellate multipolar soma profile tapering toward axon hillock on +X
    function somaRadius(d: THREE.Vector3): number {
      const hillockPull = Math.pow(Math.max(0, d.x), 3.0) * 0.42;
      const dendPull =
        Math.pow(Math.max(0, -d.x * 0.72 + d.y * 0.69), 4) * 0.24 +
        Math.pow(Math.max(0, -d.x * 0.76 - d.y * 0.65), 4) * 0.22 +
        Math.pow(Math.max(0, -d.x * 0.96 + d.z * 0.25), 4) * 0.20;
      const n = fbm(d.x * 2.0 + 1.2, d.y * 2.0 - 0.6, d.z * 2.0 + 1.9, 3);
      return 2.06 * (1 + hillockPull + dendPull + 0.045 * (n - 0.5) * 2);
    }

    // Shell #1: Iridescent refractive wet-gel Soma plasma membrane
    const gSomaOut = shellGeo(V(0, 0, 0), somaRadius, 104);
    const somaMemMat = cinemaShellMat('soma', '#4e68d8', '#a6c4ff', SOMA_CLIP, {
      attenCol: '#364ca8',
      attenDist: 4.0,
      sssColor: '#6ec4ff',
      sssIntensity: 0.36,
      iridescence: 0.58,
      thickness: 0.50,
      roughness: 0.11,
      sheenColor: '#d8eeff',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    somaGrp.add(shade(new THREE.Mesh(gSomaOut, somaMemMat), true, true));

    // Inner cytosolic cavity lining
    const gSomaIn = shellGeo(V(0, 0, 0), d => somaRadius(d) - 0.11, 74);
    const somaInMat = reg(
      'soma',
      applyBacklitSSS(
        phys(
          {
            color: '#1b2648',
            roughness: 0.62,
            clearcoat: 0.18,
            normalMap: bump(8, 6),
            normalScale: new THREE.Vector2(0.14, 0.14),
            side: THREE.BackSide,
          },
          SOMA_CLIP
        ),
        '#6ea2ff',
        0.24,
        2.5
      )
    );
    somaGrp.add(new THREE.Mesh(gSomaIn, somaInMat));

    // Bilayer cutaway cap strips cleanly sealing the sliced soma membrane along exact cut planes
    const somaCapMat = reg('soma', phys({ vertexColors: true, roughness: 0.44, side: THREE.DoubleSide }));
    const somaLayers = [
      [0.0, 0.25, '#86e2ff'],
      [0.25, 0.78, '#284068'],
      [0.78, 1.0, '#62b4ff'],
    ] as const;
    const capX = new THREE.Mesh(
      capStrip(
        SOMA_C.clone().add(V(SOMA_CUT_X, 0, 0)),
        d => {
          const r = somaRadius(d);
          return Math.sqrt(Math.max(0.2, r * r - SOMA_CUT_X * SOMA_CUT_X));
        },
        'x',
        0.11,
        somaLayers,
        140
      ),
      somaCapMat
    );
    const capZ = new THREE.Mesh(
      capStrip(SOMA_C.clone().add(V(0, 0, 0.08)), somaRadius, 'z', 0.11, somaLayers, 140),
      somaCapMat
    );
    caps.add(capX, capZ);

    // Soma Interior Organelles: Nissl Bodies (rough ER cisternae), Golgi ribbons, Mitochondria & Neurofilaments
    const S_SOMA = sculpt('soma', somaGrp, {
      emissive: '#1e2c5c',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.50,
      sssColor: '#8cb6ff',
    });
    // Layered Nissl rough-ER ribbons hugging lower-right and upper-rear perikaryon
    for (let k = 0; k < 5; k++) {
      const ang0 = -2.2 + k * 0.24;
      const r = 1.38 + (k % 2) * 0.16;
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= 8; j++) {
        const a = ang0 + (j / 8) * 1.15;
        pts.push(V(Math.cos(a) * r, Math.sin(a) * r * 0.85, -0.58 + (k % 3) * 0.30));
      }
      S_SOMA.tube(pts, 0.055, 0.048, col('#5ea2ff'), col('#84e2ff'), 8, true);
      // Studded polysome ribosomes along Nissl rER
      for (let j = 1; j < pts.length; j += 2) {
        S_SOMA.add(pts[j].clone().add(V(0, 0.06, 0.05)), 0.072, col('#ffd078'));
        placed++;
      }
    }
    // Somal mitochondria generating ATP for neuronal synthesis
    const somalMitos: Array<[THREE.Vector3, THREE.Euler]> = [
      [V(1.18, -0.78, 0.32), new THREE.Euler(0.3, 0.5, 0.6)],
      [V(1.12, 0.88, -0.22), new THREE.Euler(-0.4, 0.8, -0.5)],
      [V(-0.35, -1.35, 0.38), new THREE.Euler(0.2, -0.3, 0.2)],
      [V(-1.18, -0.92, -0.30), new THREE.Euler(0.5, 0.2, 0.9)],
      [V(0.86, -1.10, -0.45), new THREE.Euler(-0.2, 0.9, 0.3)],
    ];
    somalMitos.forEach(([p, e]) => {
      S_SOMA.lobe(p, 0.27, 0.12, 0.12, col('#ff9868'), new THREE.Quaternion().setFromEuler(e));
      placed++;
    });
    // Converging neurofilament cytoskeleton arcs guiding current/organelles toward hillock
    for (let k = 0; k < 7; k++) {
      const y0 = -1.1 + (k / 6) * 2.2;
      const c = new THREE.CatmullRomCurve3([
        V(-1.45, y0 * 0.85, -0.35 + (k % 3) * 0.22),
        V(0.2, y0 * 0.55, -0.25 + (k % 2) * 0.35),
        V(2.05, y0 * 0.18, 0.02),
      ]);
      S_SOMA.tube(c.getPoints(12), 0.018, 0.015, col('#78b4ff'), col('#56e8ff'), 6, false);
    }
    S_SOMA.done();

    // -----------------------------------------------------------------------
    // 2A. CUTAWAY EPIGENETIC NUCLEUS (`nucleus_h3k27ac` — Real PDB `1AOI`)
    //     Upper-Right: Open Glowing Emerald H3K27ac Euchromatin (`SCN9A`/`SYT1`)
    //     Lower-Left:  Compacted Violet H3K27me3 Heterochromatin (`MYH1`/`HBB`)
    // -----------------------------------------------------------------------
    const nucGrp = new THREE.Group();
    nucGrp.position.copy(NUC_C);
    cell.add(nucGrp);

    // Shell #2: Translucent violet-sapphire cutaway nuclear envelope
    const gNuc = shellGeo(V(0, 0, 0), d => 1.18 * (1 + 0.025 * (fbm(d.x * 3, d.y * 3, d.z * 3, 2) - 0.5)), 72);
    const nucEnvMat = cinemaShellMat('nucleus_h3k27ac', '#5844b8', '#a8b8ff', NUC_CLIP, {
      attenCol: '#382a82',
      attenDist: 2.6,
      sssColor: '#76e8d4',
      sssIntensity: 0.36,
      iridescence: 0.55,
      thickness: 0.32,
      roughness: 0.14,
      sheenColor: '#d8f6ff',
      normalMap: bump(10, 8),
      normalScale: 0.18,
    });
    nucGrp.add(shade(new THREE.Mesh(gNuc, nucEnvMat), true, true));

    // Inner dark-indigo nucleoplasm backdrop
    const nucInMat = reg(
      'nucleus_h3k27ac',
      phys(
        {
          color: '#111634',
          roughness: 0.65,
          side: THREE.BackSide,
        },
        NUC_CLIP
      )
    );
    nucGrp.add(new THREE.Mesh(new THREE.SphereGeometry(1.11, 44, 30), nucInMat));

    // Nuclear pore complex (NPC) rosettes embedded on the non-cutaway envelope surface
    const S_NPC = sculpt('nucleus_h3k27ac', nucGrp, {
      emissive: '#1e5078',
      emissiveIntensity: 0.36,
      roughness: 0.28,
      clearcoat: 0.55,
    });
    for (let k = 0; k < 22; k++) {
      const phi = Math.acos(1 - (2 * (k + 0.5)) / 22);
      const th = k * 2.39996;
      const d = V(Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th));
      // Keep NPC rings off the front-right cutaway opening
      if (d.x > -0.58 && d.z > 0.0) continue;
      S_NPC.ring(d.clone().multiplyScalar(1.18), d, 0.085, 0.022, col('#70d4ff'), 12, 6);
      placed++;
    }
    S_NPC.done();

    // Real RCSB PDB 1AOI Nucleosomes — Open H3K27ac Euchromatin (upper-right active domain)
    const nucOpenMat = makeCinemaProteinMat('nucleus_h3k27ac', {
      emissive: '#127058',
      emissiveIntensity: 0.44,
      roughness: 0.24,
      clearcoat: 0.62,
      sssColor: '#56ffce',
      sssIntensity: 0.34,
    });
    const batchNucOpen = makeMolBatch(T.geoNucOpen, nucOpenMat, nucGrp, true, true);
    const openNucPts = [
      V(0.18, 0.58, 0.26),
      V(0.58, 0.36, 0.34),
      V(0.26, 0.14, 0.52),
      V(0.68, -0.06, 0.22),
      V(-0.08, 0.48, 0.48),
      V(0.46, 0.62, -0.14),
      V(0.12, 0.22, -0.18),
      V(0.54, 0.12, -0.26),
    ];
    openNucPts.forEach((p, idx) => {
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.4 * idx, 0.8 * idx, 0.3));
      batchNucOpen.add(p, q, 0.92);
      placed += 4;
    });
    batchNucOpen.done();

    // Open euchromatin linker DNA + radiant emerald-gold H3K27ac acetyl (-COCH3) marks on SCN9A / SYT1!
    const S_EU = sculpt('nucleus_h3k27ac', nucGrp, {
      emissive: '#1ed698',
      emissiveIntensity: 0.68,
      roughness: 0.18,
      clearcoat: 0.78,
      sssColor: '#76ffe0',
    });
    const openCurve = new THREE.CatmullRomCurve3(openNucPts.slice(0, 6));
    S_EU.tube(openCurve.getPoints(44), 0.022, 0.022, col('#48ffca'), col('#78f8ff'), 8, false);
    openNucPts.forEach((p, idx) => {
      // Paired glowing H3K27ac acetyl flags protruding from each open 1AOI histone core
      const dirA = V(Math.cos(idx * 1.4), Math.sin(idx * 1.1), 0.65).normalize();
      const tip = p.clone().addScaledVector(dirA, 0.22);
      S_EU.stick(p.clone().addScaledVector(dirA, 0.10), tip, 0.014, col('#4ef6c0'), col('#ffe068'));
      S_EU.add(tip, 0.095, col('#ffe268'));
      placed++;
    });
    S_EU.done();

    // Real RCSB PDB 1AOI Nucleosomes — Compacted H3K27me3 Heterochromatin (lower-left silenced MYH1/HBB domain)
    const nucShutMat = makeCinemaProteinMat('nucleus_h3k27ac', {
      emissive: '#341664',
      emissiveIntensity: 0.34,
      roughness: 0.32,
      clearcoat: 0.44,
      sssColor: '#a66cff',
      sssIntensity: 0.26,
    });
    const batchNucShut = makeMolBatch(T.geoNucClosed, nucShutMat, nucGrp, true, true);
    const shutNucPts = [
      V(-0.46, -0.34, 0.32),
      V(-0.24, -0.46, 0.42),
      V(-0.56, -0.56, 0.14),
      V(-0.32, -0.68, 0.22),
      V(-0.14, -0.30, 0.24),
      V(-0.48, -0.16, 0.16),
      V(-0.66, -0.36, -0.06),
      V(-0.26, -0.58, -0.08),
      V(-0.44, -0.44, -0.22),
    ];
    shutNucPts.forEach((p, idx) => {
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.6 + idx * 0.5, idx * 0.7, 0.4));
      batchNucShut.add(p, q, 0.88);
      placed += 4;
    });
    batchNucShut.done();

    // Tightly compacted heterochromatin 30 nm linker coil + violet H3K27me3 trimethyl repression tags
    const S_HET = sculpt('nucleus_h3k27ac', nucGrp, {
      emissive: '#5822a4',
      emissiveIntensity: 0.46,
      roughness: 0.28,
      clearcoat: 0.56,
    });
    const shutCurve = new THREE.CatmullRomCurve3(shutNucPts);
    S_HET.tube(shutCurve.getPoints(48), 0.020, 0.020, col('#8a5eff'), col('#b454dc'), 7, false);
    shutNucPts.forEach((p, idx) => {
      const off = V(-0.08, -0.10, 0.12).applyAxisAngle(UP, idx * 0.9);
      S_HET.add(p.clone().add(off), 0.072, col('#c868ff'));
    });
    S_HET.done();

    // Sleek Epigenetic Switch Plaque below the soma (clear of HUD & geometry in overview & soma_epigenetics)
    const epiCv = document.createElement('canvas');
    epiCv.width = 640;
    epiCv.height = 112;
    const epiTex = new THREE.CanvasTexture(epiCv);
    epiTex.colorSpace = THREE.SRGBColorSpace;
    paintPlaque(
      epiCv,
      epiTex,
      'EPIGENETICS (PDB 1AOI) · H3K27ac ON',
      'Open: SCN9A / SYT1  |  H3K27me3 Off: MYH1 / HBB',
      '#58ffca',
      'rgba(78,248,192,0.82)'
    );
    const epiPlaque = new THREE.Mesh(
      new THREE.PlaneGeometry(3.15, 0.56),
      reg(
        'nucleus_h3k27ac',
        new THREE.MeshStandardMaterial({
          map: epiTex,
          emissive: '#ffffff',
          emissiveMap: epiTex,
          emissiveIntensity: 0.88,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    epiPlaque.position.set(SOMA_C.x + 0.05, SOMA_C.y - 2.38, SOMA_C.z + 0.52);
    cell.add(epiPlaque);

    // -----------------------------------------------------------------------
    // 2B. BRANCHING SPINY DENDRITES (`dendrites`)
    // -----------------------------------------------------------------------
    const dendGrp = new THREE.Group();
    cell.add(dendGrp);

    const dendMat = reg(
      'dendrites',
      applyBacklitSSS(
        phys({
          color: '#5ca8ff',
          roughness: 0.22,
          clearcoat: 0.60,
          clearcoatRoughness: 0.18,
          iridescence: 0.48,
          iridescenceIOR: 1.32,
          sheen: 0.50,
          sheenColor: new THREE.Color('#c8f4ff'),
          normalMap: bump(8, 6),
          normalScale: new THREE.Vector2(0.18, 0.18),
          emissive: new THREE.Color('#0c284a'),
          emissiveIntensity: 0.30,
        }),
        '#58dcff',
        0.34,
        2.6
      )
    );

    const S_SPINE = sculpt('dendrites', dendGrp, {
      emissive: '#125078',
      emissiveIntensity: 0.45,
      roughness: 0.22,
      clearcoat: 0.66,
      sssColor: '#76f2ff',
    });

    const dendPulseMat = reg(
      'dendrites',
      phys({
        color: '#84f6ff',
        emissive: '#3ce8ff',
        emissiveIntensity: 1.45,
        roughness: 0.15,
      })
    );

    const dendTrunks: Array<{
      pts: THREE.Vector3[];
      r0: number;
      r1: number;
      subs: Array<{ t: number; dir: THREE.Vector3; len: number; r0: number }>;
    }> = [
      {
        pts: [V(-6.9, 2.55, 0.35), V(-7.75, 3.35, 0.55), V(-8.55, 4.15, 0.30)],
        r0: 0.36,
        r1: 0.08,
        subs: [
          { t: 0.42, dir: V(-0.95, 0.35, 0.42), len: 1.15, r0: 0.16 },
          { t: 0.68, dir: V(-0.25, 0.95, -0.25), len: 0.95, r0: 0.12 },
        ],
      },
      {
        pts: [V(-6.15, 3.05, -0.25), V(-6.45, 4.05, -0.45), V(-6.95, 4.78, -0.15)],
        r0: 0.32,
        r1: 0.07,
        subs: [
          { t: 0.45, dir: V(0.55, 0.82, 0.25), len: 1.05, r0: 0.15 },
          { t: 0.70, dir: V(-0.78, 0.62, -0.35), len: 0.85, r0: 0.11 },
        ],
      },
      {
        pts: [V(-7.35, 1.55, 0.42), V(-8.30, 1.78, 0.65), V(-9.02, 2.15, 0.48)],
        r0: 0.34,
        r1: 0.08,
        subs: [
          { t: 0.38, dir: V(-0.82, 0.56, -0.25), len: 1.05, r0: 0.16 },
          { t: 0.64, dir: V(-0.88, -0.44, 0.35), len: 0.98, r0: 0.13 },
        ],
      },
      {
        pts: [V(-7.30, 0.72, -0.22), V(-8.22, 0.15, -0.48), V(-8.95, -0.35, -0.25)],
        r0: 0.34,
        r1: 0.08,
        subs: [
          { t: 0.42, dir: V(-0.86, 0.32, 0.44), len: 1.08, r0: 0.15 },
          { t: 0.72, dir: V(-0.55, -0.82, 0.18), len: 0.90, r0: 0.12 },
        ],
      },
      {
        pts: [V(-6.70, -0.18, 0.32), V(-7.52, -1.05, 0.55), V(-8.35, -1.72, 0.25)],
        r0: 0.32,
        r1: 0.07,
        subs: [
          { t: 0.44, dir: V(-0.92, -0.20, -0.32), len: 1.02, r0: 0.14 },
          { t: 0.68, dir: V(-0.20, -0.95, 0.30), len: 0.85, r0: 0.11 },
        ],
      },
      {
        pts: [V(-5.25, 3.15, 0.40), V(-4.72, 4.02, 0.62), V(-4.12, 4.65, 0.32)],
        r0: 0.28,
        r1: 0.07,
        subs: [
          { t: 0.50, dir: V(-0.48, 0.86, -0.24), len: 0.92, r0: 0.13 },
          { t: 0.66, dir: V(0.74, 0.62, 0.25), len: 0.82, r0: 0.11 },
        ],
      },
    ];

    dendTrunks.forEach((tr, tIdx) => {
      const curve = new THREE.CatmullRomCurve3(tr.pts);
      const geo = sweepGeo(curve, t => tr.r0 * (1 - t) + tr.r1 * t, 28, 14);
      dendGrp.add(shade(new THREE.Mesh(geo, dendMat), true, true));

      // Animated inward EPSP pulse bead streaming along each major dendrite into soma
      const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.088, 12, 10), dendPulseMat);
      dendGrp.add(pMesh);
      dendritePulses.push({ mesh: pMesh, curve, u0: (tIdx * 0.19) % 1 });

      // Mushroom-shaped dendritic spines studding the primary trunk
      for (let s = 0; s < 7; s++) {
        const u = 0.22 + (s / 7) * 0.72;
        const base = curve.getPointAt(u);
        const tang = curve.getTangentAt(u);
        const side = across(UP, tang).applyAxisAngle(tang, s * 1.9 + tIdx);
        const rHere = tr.r0 * (1 - u) + tr.r1 * u;
        const neck = base.clone().addScaledVector(side, rHere + 0.08);
        const head = base.clone().addScaledVector(side, rHere + 0.17);
        S_SPINE.stick(base, neck, 0.024, col('#68d8ff'), col('#8cf4ff'));
        S_SPINE.add(head, 0.115, s % 2 === 0 ? col('#7cf2ff') : col('#72ffb8'));
        placed++;
      }

      // Secondary dendritic bifurcation branches + spines
      tr.subs.forEach((sb, sIdx) => {
        const p0 = curve.getPointAt(sb.t);
        const d = sb.dir.clone().normalize();
        const p1 = p0.clone().addScaledVector(d, sb.len * 0.52).add(V(0, 0.12 * (sIdx ? -1 : 1), 0.12));
        const p2 = p0.clone().addScaledVector(d, sb.len);
        const subCurve = new THREE.CatmullRomCurve3([p0, p1, p2]);
        dendGrp.add(shade(new THREE.Mesh(sweepGeo(subCurve, t => sb.r0 * (1 - t * 0.72), 18, 10), dendMat), true, true));
        for (let k = 0; k < 4; k++) {
          const u = 0.25 + k * 0.22;
          const b = subCurve.getPointAt(u);
          const nrm = V(Math.sin(k * 2.1 + tIdx), Math.cos(k * 1.7), 0.6).normalize();
          S_SPINE.stick(b, b.clone().addScaledVector(nrm, 0.10), 0.018, col('#6ad8ff'), col('#92f6ff'));
          S_SPINE.add(b.clone().addScaledVector(nrm, 0.15), 0.092, col('#80f4ff'));
          placed++;
        }
      });
    });
    S_SPINE.done();

    SITES.soma.push(SOMA_C.clone(), SOMA_C.clone().add(V(0.6, -0.8, 0.5)));
    SITES.nucleus_h3k27ac.push(NUC_C.clone(), NUC_C.clone().add(V(0.42, 0.38, 0.35)), NUC_C.clone().add(V(-0.40, -0.45, 0.30)));
    SITES.dendrites.push(V(-8.2, 2.2, 0.5), V(-7.9, 3.6, 0.4), V(-7.9, -0.9, 0.4));
  }

  // -------------------------------------------------------------------------
  // 3. AXON HILLOCK, AXONAL MICROTUBULES (`axon_mt`) & MYELIN SHEATHS
  // -------------------------------------------------------------------------
  function buildAxonAndMyelin() {
    // 3A. Axon Hillock & Initial Segment Trigger Zone (`axon_hillock`)
    const hillockCurve = new THREE.CatmullRomCurve3([
      V(-3.82, 1.32, 0.20),
      V(-3.18, 1.28, 0.20),
      V(-2.22, 1.28, 0.20),
    ]);
    const hillockGeo = sweepGeo(hillockCurve, t => 0.88 * Math.pow(1 - t, 1.9) + 0.44, 34, 24);
    const hillockMat = reg(
      'axon_hillock',
      applyBacklitSSS(
        phys({
          color: '#52b8ff',
          roughness: 0.15,
          clearcoat: 0.68,
          iridescence: 0.58,
          sheen: 0.48,
          sheenColor: new THREE.Color('#c8f6ff'),
          normalMap: bump(8, 6),
          normalScale: new THREE.Vector2(0.16, 0.16),
          emissive: new THREE.Color('#0c385e'),
          emissiveIntensity: 0.34,
          transparent: true,
          opacity: 0.62,
          depthWrite: false,
        }),
        '#68eaff',
        0.38,
        2.6
      )
    );
    cell.add(shade(new THREE.Mesh(hillockGeo, hillockMat), false, true));

    // Glowing -55 mV Ankyrin-G Initial Segment trigger collar ring around hillock
    hillockRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.56, 0.045, 12, 36),
      reg(
        'axon_hillock',
        phys({
          color: '#7ef8ff',
          emissive: '#30dcff',
          emissiveIntensity: 0.95,
          roughness: 0.16,
          transparent: true,
          opacity: 0.92,
        })
      )
    );
    hillockRing.position.set(-2.72, 1.28, 0.20);
    hillockRing.rotation.y = Math.PI / 2;
    cell.add(hillockRing);

    // 3B. Continuous Inner Axolemma Core & 7 Parallel Axonal Microtubule Kinesin Rails (`axon_mt`)
    const mtGrp = new THREE.Group();
    cell.add(mtGrp);
    const S_MT = sculpt('axon_mt', mtGrp, {
      emissive: '#105442',
      emissiveIntensity: 0.40,
      roughness: 0.26,
      clearcoat: 0.54,
      sssColor: '#56ffbe',
    });
    const mtOffsets: Array<[number, number]> = [
      [0, 0],
      [0.16, 0.04],
      [-0.16, 0.04],
      [0.08, 0.15],
      [-0.08, 0.15],
      [0.09, -0.14],
      [-0.09, -0.14],
    ];
    mtOffsets.forEach(([yo, zo], idx) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        const x = -4.15 + u * 8.95;
        const wave = 0.02 * Math.sin(u * Math.PI * 5 + idx);
        pts.push(V(x, 1.28 + yo + wave, 0.20 + zo));
      }
      S_MT.tube(pts, 0.026, 0.024, col('#34e4a8'), col('#60ffd2'), 8, false);
      // Cross-linking Tau stabilizer struts every ~1.2 units
      if (idx > 0) {
        for (let x = -2.4; x <= 4.0; x += 1.25) {
          S_MT.stick(V(x, 1.28, 0.20), V(x, 1.28 + yo, 0.20 + zo), 0.008, col('#70ffd8'), col('#38d4a2'));
        }
      }
    });
    S_MT.done();

    // Animated Kinesin-1 motor walkers carrying glowing anterograde precursor vesicles along `axon_mt`!
    const kinMat = reg(
      'axon_mt',
      phys({
        color: '#ffcf58',
        emissive: '#d88812',
        emissiveIntensity: 0.58,
        roughness: 0.22,
        clearcoat: 0.65,
      })
    );
    const kinCargoMat = reg(
      'axon_mt',
      phys({
        color: '#88f4ff',
        emissive: '#2cb8e8',
        emissiveIntensity: 0.52,
        roughness: 0.16,
        clearcoat: 0.72,
      })
    );
    for (let k = 0; k < 4; k++) {
      const wg = new THREE.Group();
      // Kinesin motor heads + coiled-coil stalk + cargo vesicle
      const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), kinMat);
      h1.position.set(-0.04, 0, 0);
      const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), kinMat);
      h2.position.set(0.04, 0, 0);
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.14, 8), kinMat);
      stalk.position.set(0, 0.07, 0);
      const cargo = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), kinCargoMat);
      cargo.position.set(0, 0.18, 0);
      wg.add(h1, h2, stalk, cargo);
      mtGrp.add(wg);
      kinesinWalkers.push({ grp: wg, u0: k * 0.25, yOff: 0.04 + (k % 2) * 0.08, zOff: 0.16 });
      placed += 2;
    }

    // 3C. 3 Iridescent Segmented Schwann Myelin Sheaths (`myelin_sheath`) — Shells #3, #4, #5!
    const sheathDefs: Array<[number, number, string, string]> = [
      [-2.18, -0.78, '#2678b2', '#9ce6ff'],
      [0.74, 2.12, '#2282b8', '#a6eeff'],
      [3.22, 4.08, '#2a72b6', '#94deff'],
    ];

    sheathDefs.forEach(([x0, x1, solidHex, gelHex], sIdx) => {
      const len = x1 - x0;
      const midX = (x0 + x1) * 0.5;
      const shCurve = new THREE.CatmullRomCurve3([
        V(x0, 1.28, 0.20),
        V(midX, 1.28, 0.20),
        V(x1, 1.28, 0.20),
      ]);
      // Plump rounded sausage profile tapering cleanly into paranodal loops at ends
      const gMyelin = sweepGeo(
        shCurve,
        t => {
          const endTaper = Math.pow(Math.sin(t * Math.PI), 0.28);
          return 0.48 + 0.36 * endTaper;
        },
        36,
        28
      );
      const myMat = cinemaShellMat('myelin_sheath', solidHex, gelHex, AXON_CLIP, {
        attenCol: '#165288',
        attenDist: 3.4,
        sssColor: '#58d8ff',
        sssIntensity: 0.36,
        iridescence: 0.72,
        thickness: 0.44,
        roughness: 0.10,
        sheenColor: '#e8faff',
        normalMap: bump(10, 6),
        normalScale: 0.20,
      });
      cell.add(shade(new THREE.Mesh(gMyelin, myMat), true, true));

      // Concentric multilamellar myelin spiral rings visible at both paranodal ends & cutaway!
      const S_LAM = sculpt('myelin_sheath', cell, {
        emissive: '#164c78',
        emissiveIntensity: 0.34,
        roughness: 0.24,
        clearcoat: 0.62,
      });
      [x0 + 0.04, x1 - 0.04].forEach(xe => {
        [0.52, 0.62, 0.72].forEach((rrad, rIdx) => {
          S_LAM.ring(V(xe, 1.28, 0.20), V(1, 0, 0), rrad, 0.022, rIdx === 1 ? col('#7cf4ff') : col('#4eb8ec'), 28, 6);
        });
      });
      // Outer Schwann cell nucleus bump resting cleanly atop Sheath 1 & Sheath 2
      if (sIdx < 2) {
        S_LAM.lobe(V(midX, 2.06, -0.10), 0.34, 0.14, 0.16, col('#68b8ff'));
        placed++;
      }
      S_LAM.done();
      SITES.myelin_sheath.push(V(midX, 1.85, 0.45));
    });

    // Traveling Saltatory Action-Potential Voltage Pulse Orb & Nodal Depolarization Halo Rings!
    const pulseMat = reg(
      'node_ranvier',
      phys({
        color: '#ffffff',
        emissive: '#4ef8ff',
        emissiveIntensity: 1.8,
        roughness: 0.10,
        transparent: true,
        opacity: 0.90,
      })
    );
    pulseOrb = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.055, 14, 36), pulseMat);
    pulseOrb.position.set(HILLOCK_C.x, 1.28, 0.20);
    pulseOrb.rotation.y = Math.PI / 2;
    cell.add(pulseOrb);

    const haloMat = () =>
      reg(
        'node_ranvier',
        phys({
          color: '#7ef8ff',
          emissive: '#38e8ff',
          emissiveIntensity: 1.2,
          roughness: 0.14,
          transparent: true,
          opacity: 0.75,
        })
      );
    pulseRingNode1 = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.042, 12, 36), haloMat());
    pulseRingNode1.position.copy(NODE1_C);
    pulseRingNode1.rotation.y = Math.PI / 2;
    pulseRingNode2 = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.038, 12, 36), haloMat());
    pulseRingNode2.position.copy(NODE2_C);
    pulseRingNode2.rotation.y = Math.PI / 2;
    cell.add(pulseRingNode1, pulseRingNode2);

    SITES.axon_hillock.push(HILLOCK_C.clone(), V(-2.72, 1.28, 0.65));
    SITES.axon_mt.push(V(-1.45, 1.28, 0.35), V(1.42, 1.28, 0.35), V(3.65, 1.28, 0.35));
  }

  // -------------------------------------------------------------------------
  // 4. EXPOSED NODES OF RANVIER (`node_ranvier`, `nav17`, `kv12`, `nak_reset`)
  //    Real PDBs: Naᵥ1.7 (6J8I), Kᵥ1.2 (2R9R), Na⁺/K⁺-ATPase (3WGU)
  // -------------------------------------------------------------------------
  function buildNodesOfRanvier(T: ReturnType<typeof buildPdbTemplates>) {
    // 4A. Exposed 5 nm Axonal Bilayer Patches at Hero Node 1 & Node 2 (`node_ranvier`)
    const nodeBilayerMat = reg(
      'node_ranvier',
      applyBacklitSSS(
        phys(
          {
            color: '#e8b658',
            roughness: 0.24,
            clearcoat: 0.56,
            iridescence: 0.44,
            sheen: 0.42,
            sheenColor: new THREE.Color('#fff0c8'),
            normalMap: bump(12, 8),
            normalScale: new THREE.Vector2(0.22, 0.22),
            emissive: new THREE.Color('#4a3008'),
            emissiveIntensity: 0.32,
          },
          AXON_CLIP
        ),
        '#ffd472',
        0.34,
        2.6
      )
    );

    const buildNodeBilayer = (cx: number, halfW: number, isHero: boolean) => {
      const c = new THREE.CatmullRomCurve3([V(cx - halfW, 1.28, 0.20), V(cx, 1.28, 0.20), V(cx + halfW, 1.28, 0.20)]);
      cell.add(shade(new THREE.Mesh(sweepGeo(c, () => 0.44, 24, 24), nodeBilayerMat), true, true));

      // Individual glowing amphipathic phospholipid headgroup beads lining the exposed nodal bilayer rim!
      const S_LIP = sculpt('node_ranvier', cell, {
        emissive: '#6e4a10',
        emissiveIntensity: 0.38,
        roughness: 0.24,
        clearcoat: 0.60,
      });
      const nX = isHero ? 16 : 10;
      const nA = isHero ? 14 : 10;
      for (let ix = 0; ix < nX; ix++) {
        const x = cx - halfW + 0.06 + (ix / (nX - 1)) * (halfW * 2 - 0.12);
        for (let ia = 0; ia < nA; ia++) {
          const ang = (ia / nA) * Math.PI * 2;
          // Leave cutaway window clean in front-top
          if (Math.sin(ang) > 0.12 && Math.cos(ang) > 0.15) continue;
          const yOut = 1.28 + Math.sin(ang) * 0.46;
          const zOut = 0.20 + Math.cos(ang) * 0.46;
          const yIn = 1.28 + Math.sin(ang) * 0.35;
          const zIn = 0.20 + Math.cos(ang) * 0.35;
          S_LIP.add(V(x, yOut, zOut), 0.056, col('#ffd86e'));
          S_LIP.add(V(x, yIn, zIn), 0.048, col('#66d8ff'));
          if (ix % 2 === 0) {
            S_LIP.stick(V(x, yOut, zOut), V(x, yIn, zIn), 0.009, col('#c89c46'), col('#987634'));
          }
          placed++;
        }
      }
      S_LIP.done();
    };
    buildNodeBilayer(NODE1_C.x, 0.76, true);
    buildNodeBilayer(NODE2_C.x, 0.56, false);

    // 4B. Clustered Real PDB `6J8I` Naᵥ1.7 Voltage-Gated Sodium Channels (`nav17`)
    //     Densely packed in the center of Hero Node 1, Node 2, and Axon Hillock initial segment!
    nav17MatRef = makeCinemaProteinMat('nav17', {
      emissive: '#0c5280',
      emissiveIntensity: 0.38,
      roughness: 0.24,
      clearcoat: 0.62,
      sssColor: '#5cf2ff',
      sssIntensity: 0.32,
    });
    const batchNav = makeMolBatch(T.geoNav, nav17MatRef, cell, true, true);
    const placeChannelOnAxon = (
      batch: ReturnType<typeof makeMolBatch>,
      x: number,
      ang: number,
      rad: number,
      scale: number,
      spin = 0
    ) => {
      const nrm = V(0, Math.sin(ang), Math.cos(ang)).normalize();
      const pos = V(x, 1.28 + nrm.y * rad, 0.20 + nrm.z * rad);
      const qAlign = new THREE.Quaternion().setFromUnitVectors(UP, nrm);
      const qSpin = new THREE.Quaternion().setFromAxisAngle(UP, spin);
      batch.add(pos, qAlign.multiply(qSpin), scale);
      placed += 5;
      return pos;
    };

    // Hero Node 1 central Nav1.7 cluster (cleanly spaced so golden nodal bilayer shines between real 6J8I channels!)
    const navNode1Specs: Array<[number, number]> = [
      [-0.26, 1.48], [0.02, 1.60], [0.28, 1.44],
      [-0.14, 0.46], [0.16, 0.48],
      [-0.22, -0.56], [0.22, -0.52], [-0.02, 2.55],
    ];
    navNode1Specs.forEach(([xo, ang], i) => {
      const p = placeChannelOnAxon(batchNav, NODE1_C.x + xo, ang, 0.44, 0.90, i * 0.7);
      if (i < 4) SITES.nav17.push(p);
    });
    // Node 2 Nav1.7 cluster (6 channels)
    [-0.18, 0.04, 0.22].forEach((xo, i) => {
      placeChannelOnAxon(batchNav, NODE2_C.x + xo, 1.45 - i * 0.15, 0.44, 0.88, i);
      placeChannelOnAxon(batchNav, NODE2_C.x + xo, -0.65 + i * 0.2, 0.44, 0.88, i + 1);
    });
    // Axon Hillock initial segment Nav1.7 trigger channels (6 channels)
    [-2.85, -2.55, -2.32].forEach((x, i) => {
      placeChannelOnAxon(batchNav, x, 1.35 + (i % 2) * 0.35, 0.49, 0.86, i * 0.9);
      placeChannelOnAxon(batchNav, x, -0.55 - (i % 2) * 0.4, 0.49, 0.86, i * 1.1);
    });
    batchNav.done();

    // 4C. Flanking Real PDB `2R9R` Kᵥ1.2 Voltage-Gated Potassium Channels (`kv12`)
    //     4-fold biological homotetramer assembled from 2R9R protomers flanking juxtaparanodal margins!
    kv12MatRef = makeCinemaProteinMat('kv12', {
      emissive: '#481a7a',
      emissiveIntensity: 0.36,
      roughness: 0.26,
      clearcoat: 0.58,
      sssColor: '#d48cff',
      sssIntensity: 0.30,
    });
    const batchKv = makeMolBatch(T.geoKv, kv12MatRef, cell, true, true);
    const placeKvTetramer = (x: number, ang: number, scale = 0.78) => {
      const nrm = V(0, Math.sin(ang), Math.cos(ang)).normalize();
      const basePos = V(x, 1.28 + nrm.y * 0.43, 0.20 + nrm.z * 0.43);
      const qAlign = new THREE.Quaternion().setFromUnitVectors(UP, nrm);
      const uAx = across(V(1, 0, 0), nrm).normalize();
      const vAx = nrm.clone().cross(uAx).normalize();
      for (let sub = 0; sub < 4; sub++) {
        const a = (sub / 4) * Math.PI * 2 + 0.3;
        const off = uAx.clone().multiplyScalar(Math.cos(a) * 0.085).addScaledVector(vAx, Math.sin(a) * 0.085);
        const qSpin = new THREE.Quaternion().setFromAxisAngle(UP, a);
        batchKv.add(basePos.clone().add(off), qAlign.clone().multiply(qSpin), scale);
        placed += 2;
      }
      return basePos;
    };
    const kvSpecs: Array<[number, number]> = [
      [NODE1_C.x - 0.56, 1.48], [NODE1_C.x + 0.56, 1.48],
      [NODE1_C.x - 0.54, 0.48], [NODE1_C.x + 0.54, 0.48],
      [NODE1_C.x - 0.52, -1.25], [NODE1_C.x + 0.52, -1.25],
      [NODE2_C.x - 0.40, 1.42], [NODE2_C.x + 0.40, 1.42],
      [NODE2_C.x - 0.38, -0.78], [NODE2_C.x + 0.38, -0.78],
    ];
    kvSpecs.forEach(([x, ang], idx) => {
      const p = placeKvTetramer(x, ang, idx < 6 ? 0.80 : 0.72);
      if (idx < 4) SITES.kv12.push(p);
    });
    batchKv.done();

    // 4D. Real PDB `3WGU` Na⁺/K⁺-ATPase Reset Pumps (`nak_reset` from PDB_BIOENERGETICS)
    //     Lining lower/flanking Node 1 & Node 2 bilayer to restore -70 mV resting potential!
    nakMatRef = makeCinemaProteinMat('nak_reset', {
      emissive: '#6e3608',
      emissiveIntensity: 0.38,
      roughness: 0.26,
      clearcoat: 0.58,
      sssColor: '#ffbe68',
      sssIntensity: 0.32,
    });
    const batchNak = makeMolBatch(T.geoNak, nakMatRef, cell, true, true);
    const nakSpecs: Array<[number, number]> = [
      [NODE1_C.x - 0.38, -1.55], [NODE1_C.x, -1.62], [NODE1_C.x + 0.38, -1.55],
      [NODE1_C.x - 0.34, -0.82], [NODE1_C.x + 0.34, -0.82],
      [NODE1_C.x - 0.48, 2.25], [NODE1_C.x + 0.48, 2.25],
      [NODE2_C.x - 0.22, -1.55], [NODE2_C.x + 0.22, -1.55],
      [HILLOCK_C.x + 0.45, -1.52],
    ];
    nakSpecs.forEach(([x, ang], idx) => {
      const p = placeChannelOnAxon(batchNak, x, ang, 0.44, idx < 5 ? 0.94 : 0.84, idx * 0.6);
      if (idx < 4) SITES.nak_reset.push(p);
    });
    batchNak.done();

    // Live-Updating Action Potential Oscilloscope & Voltage Plaque neatly below Hero Node 1
    nodeVoltageCv = document.createElement('canvas');
    nodeVoltageCv.width = 640;
    nodeVoltageCv.height = 148;
    nodeVoltageTex = new THREE.CanvasTexture(nodeVoltageCv);
    nodeVoltageTex.colorSpace = THREE.SRGBColorSpace;
    const nodePlaque = new THREE.Mesh(
      new THREE.PlaneGeometry(2.85, 0.66),
      reg(
        'node_ranvier',
        new THREE.MeshStandardMaterial({
          map: nodeVoltageTex,
          emissive: '#ffffff',
          emissiveMap: nodeVoltageTex,
          emissiveIntensity: 0.88,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    nodePlaque.position.set(NODE1_C.x, NODE1_C.y - 1.48, NODE1_C.z + 0.54);
    cell.add(nodePlaque);
    updateNodePlaque(-70, 0);

    SITES.node_ranvier.push(NODE1_C.clone(), NODE2_C.clone(), NODE1_C.clone().add(V(0, 0.46, 0.30)));
  }

  // -------------------------------------------------------------------------
  // 5. CHEMICAL SYNAPSE THEATER (`terminal_bouton`, `cav_channel`, `synaptic_vesicle`,
  //    `snare_zipper` 1SFC, `synaptic_cleft`, `ampa_receptor` 3KG2, `nachr_receptor` 2BG9)
  // -------------------------------------------------------------------------
  function buildChemicalSynapse(T: ReturnType<typeof buildPdbTemplates>) {
    // 5A. Cutaway Presynaptic Terminal Bouton (`terminal_bouton` — Shell #6!)
    const boutonGrp = new THREE.Group();
    boutonGrp.position.copy(BOUTON_C);
    cell.add(boutonGrp);

    // Sculpted pear-shaped presynaptic bulb flattening neatly at the X = +1.18 active zone facing the 20 nm cleft!
    const boutonGeo = shellGeo(
      V(0, 0, 0),
      d => {
        const taperLeft = d.x < 0 ? 1 - 0.56 * Math.pow(-d.x, 1.4) : 1;
        const flareRight = d.x > 0 ? 1 + 0.16 * (1 - d.x * d.x) : 1;
        const flatActiveZone = d.x > 0.65 ? 1 - 0.22 * (d.x - 0.65) : 1;
        const n = fbm(d.x * 2.2 + 3.1, d.y * 2.2, d.z * 2.2 - 1.4, 3);
        const rx = d.x < 0 ? 1.28 : 1.24;
        const ry = 1.66 * taperLeft * flareRight;
        const rz = 1.38 * taperLeft * flareRight;
        const ell = 1 / Math.sqrt((d.x / rx) ** 2 + (d.y / ry) ** 2 + (d.z / rz) ** 2);
        return ell * flatActiveZone * (1 + 0.028 * (n - 0.5) * 2);
      },
      92
    );
    const boutonMemMat = cinemaShellMat('terminal_bouton', '#5e56d6', '#b8c4ff', BOUTON_CLIP, {
      attenCol: '#3c3498',
      attenDist: 3.4,
      sssColor: '#98a6ff',
      sssIntensity: 0.36,
      iridescence: 0.60,
      thickness: 0.44,
      roughness: 0.11,
      sheenColor: '#e4e8ff',
      normalMap: bump(10, 8),
      normalScale: 0.20,
    });
    boutonGrp.add(shade(new THREE.Mesh(boutonGeo, boutonMemMat), true, true));

    // Inner presynaptic cavity wall
    const boutonInGeo = shellGeo(
      V(0, 0, 0),
      d => {
        const taperLeft = d.x < 0 ? 1 - 0.56 * Math.pow(-d.x, 1.4) : 1;
        const flareRight = d.x > 0 ? 1 + 0.16 * (1 - d.x * d.x) : 1;
        const flatActiveZone = d.x > 0.65 ? 1 - 0.22 * (d.x - 0.65) : 1;
        const rx = d.x < 0 ? 1.18 : 1.14;
        const ry = 1.56 * taperLeft * flareRight;
        const rz = 1.28 * taperLeft * flareRight;
        const ell = 1 / Math.sqrt((d.x / rx) ** 2 + (d.y / ry) ** 2 + (d.z / rz) ** 2);
        return ell * flatActiveZone;
      },
      64
    );
    boutonGrp.add(
      new THREE.Mesh(
        boutonInGeo,
        reg(
          'terminal_bouton',
          phys({ color: '#1b1d44', roughness: 0.65, side: THREE.BackSide }, BOUTON_CLIP)
        )
      )
    );

    // Presynaptic active-zone cytomatrix scaffold + ATP-producing terminal mitochondria
    const S_BOUT = sculpt('terminal_bouton', boutonGrp, {
      emissive: '#282664',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.52,
    });
    // Terminal mitochondria clustered in the rear-upper & rear-lower bouton
    S_BOUT.lobe(V(-0.46, 0.72, -0.22), 0.36, 0.16, 0.15, col('#ff9864'), new THREE.Quaternion().setFromEuler(new THREE.Euler(0.2, 0.3, 0.35)));
    S_BOUT.lobe(V(-0.44, -0.76, -0.18), 0.34, 0.15, 0.15, col('#ff8c58'), new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.3, 0.4, -0.4)));
    S_BOUT.lobe(V(-0.08, 0.98, 0.12), 0.28, 0.13, 0.13, col('#ffaa6e'), new THREE.Quaternion().setFromEuler(new THREE.Euler(0.1, -0.4, 0.15)));
    // Active zone Bassoon/RIM electron-dense docking grid along X = +1.08
    for (let k = -3; k <= 3; k++) {
      S_BOUT.stick(V(1.06, k * 0.36, -0.58), V(1.06, k * 0.36, 0.58), 0.015, col('#8892ff'), col('#6ce4ff'));
      placed++;
    }
    S_BOUT.done();

    // 5B. Voltage-Gated `Caᵥ` Ca²⁺ Spark Channels (`cav_channel`) along Presynaptic Active-Zone Rim
    cavMatRef = makeCinemaProteinMat('cav_channel', {
      emissive: '#a67408',
      emissiveIntensity: 0.52,
      roughness: 0.22,
      clearcoat: 0.70,
      sssColor: '#ffe46e',
      sssIntensity: 0.36,
    });
    const S_CAV = makeSculptedMesh(cavMatRef, boutonGrp);
    const cavPositions = [
      V(0.92, 1.18, 0.38),
      V(1.04, 0.68, 0.52),
      V(1.08, 0.18, 0.62),
      V(1.08, -0.26, 0.60),
      V(1.02, -0.76, 0.50),
      V(0.90, -1.20, 0.34),
      V(1.06, 0.88, -0.42),
      V(1.06, -0.88, -0.42),
    ];
    cavPositions.forEach(p => {
      const outDir = V(p.x * 0.6, p.y * 0.4, p.z * 0.4).normalize();
      const q = new THREE.Quaternion().setFromUnitVectors(UP, outDir);
      // 4-lobe tetrameric Caᵥ2.1 voltage-gated calcium channel barrel + glowing pore ring
      const uAx = across(UP, outDir).normalize();
      const vAx = outDir.clone().cross(uAx).normalize();
      for (let sub = 0; sub < 4; sub++) {
        const a = (sub / 4) * Math.PI * 2;
        const sp = p.clone().addScaledVector(uAx, Math.cos(a) * 0.068).addScaledVector(vAx, Math.sin(a) * 0.068);
        S_CAV.lobe(sp, 0.056, 0.115, 0.056, sub % 2 === 0 ? col('#ffd84c') : col('#ffae38'), q);
      }
      S_CAV.ring(p.clone().addScaledVector(outDir, 0.07), outDir, 0.072, 0.018, col('#fff49c'), 16, 6);
      placed += 4;
      SITES.cav_channel.push(BOUTON_C.clone().add(p));
    });
    S_CAV.done();

    // Pulsing Ca²⁺ microdomain spark halo right next to the hero docked vesicle
    caSparkHalo = new THREE.Mesh(
      new THREE.TorusGeometry(0.32, 0.032, 12, 32),
      reg(
        'cav_channel',
        phys({
          color: '#fff4a0',
          emissive: '#ffcf38',
          emissiveIntensity: 1.5,
          transparent: true,
          opacity: 0.72,
          roughness: 0.12,
        })
      )
    );
    caSparkHalo.position.set(1.02, 0.22, 0.46);
    caSparkHalo.rotation.y = Math.PI / 2;
    boutonGrp.add(caSparkHalo);

    // 5C. Synaptic Vesicles (`synaptic_vesicle` — luminous iridescent lipid bubbles clearly visible inside cutaway bouton!)
    const vesMat = reg(
      'synaptic_vesicle',
      applyBacklitSSS(
        phys({
          color: '#6ce2ff',
          emissive: '#146288',
          emissiveIntensity: 0.36,
          roughness: 0.12,
          clearcoat: 0.86,
          clearcoatRoughness: 0.10,
          iridescence: 0.80,
          iridescenceIOR: 1.32,
          sheen: 0.62,
          sheenColor: new THREE.Color('#e8fcff'),
          normalMap: bump(8, 8),
          normalScale: new THREE.Vector2(0.14, 0.14),
          transparent: true,
          opacity: 0.54,
          depthWrite: false,
        }),
        '#8cf4ff',
        0.52,
        2.2
      )
    );
    const vesGeo = new THREE.SphereGeometry(0.24, 24, 18);

    const S_NT_INSIDE = sculpt('synaptic_vesicle', boutonGrp, {
      emissive: '#14846c',
      emissiveIntensity: 0.62,
      roughness: 0.18,
      clearcoat: 0.74,
    });

    // Reserve pool (7 vesicles) + Readily Releasable Docked Pool (4 static docked + 1 animated hero fusing vesicle)
    const reserveVesPts = [
      V(-0.32, 0.22, 0.18), V(-0.18, -0.26, 0.28), V(0.08, 0.46, -0.22),
      V(0.14, -0.52, -0.18), V(0.26, 0.04, -0.34), V(0.32, 0.68, 0.18),
      V(0.34, -0.68, 0.16),
    ];
    reserveVesPts.forEach((p, idx) => {
      const m = shade(new THREE.Mesh(vesGeo, vesMat), true, true);
      m.position.copy(p);
      m.scale.setScalar(0.92);
      boutonGrp.add(m);
      for (let b = 0; b < 5; b++) {
        const a = (b / 5) * Math.PI * 2 + idx;
        S_NT_INSIDE.add(p.clone().add(V(Math.cos(a) * 0.09, Math.sin(a) * 0.09, (b % 2 - 0.5) * 0.08)), 0.068, idx % 2 === 0 ? col('#5cffb0') : col('#ff8cc6'));
      }
      placed += 2;
    });

    const dockedVesPts = [
      V(0.84, 0.86, 0.10),
      V(0.84, -0.82, 0.12),
      V(0.82, 0.42, -0.32),
      V(0.82, -0.44, -0.30),
    ];
    dockedVesPts.forEach((p, idx) => {
      const m = shade(new THREE.Mesh(vesGeo, vesMat), true, true);
      m.position.copy(p);
      boutonGrp.add(m);
      for (let b = 0; b < 6; b++) {
        const a = (b / 6) * Math.PI * 2;
        S_NT_INSIDE.add(p.clone().add(V(Math.cos(a) * 0.10, Math.sin(a) * 0.10, (b % 2 - 0.5) * 0.08)), 0.072, idx % 2 === 0 ? col('#58ffa8') : col('#ff86c0'));
      }
      SITES.synaptic_vesicle.push(BOUTON_C.clone().add(p));
      placed += 2;
    });
    S_NT_INSIDE.done();

    // Hero Animated Docking & Fusing Synaptic Vesicle right at the center of the Active Zone!
    heroVesicleGrp = new THREE.Group();
    heroVesicleGrp.position.set(0.86, 0.02, 0.24);
    boutonGrp.add(heroVesicleGrp);
    const heroVesMesh = shade(new THREE.Mesh(new THREE.SphereGeometry(0.28, 28, 20), vesMat), true, true);
    heroVesicleGrp.add(heroVesMesh);
    const S_HNT = sculpt('synaptic_vesicle', heroVesicleGrp, {
      emissive: '#22a87a',
      emissiveIntensity: 0.72,
      roughness: 0.16,
      clearcoat: 0.78,
    });
    for (let b = 0; b < 9; b++) {
      const a = (b / 9) * Math.PI * 2;
      S_HNT.add(V(Math.cos(a) * 0.11, Math.sin(a) * 0.11, ((b % 3) - 1) * 0.07), 0.076, b % 2 === 0 ? col('#5effb4') : col('#ff88c4'));
      placed++;
    }
    S_HNT.done();
    SITES.synaptic_vesicle.push(BOUTON_C.clone().add(V(0.86, 0.02, 0.24)));

    // Real RCSB PDB 1SFC 4-Helix SNARE Fusion Zippers (`snare_zipper`)
    const snareMat = makeCinemaProteinMat('snare_zipper', {
      emissive: '#8c2814',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      clearcoat: 0.60,
      sssColor: '#ff9678',
      sssIntensity: 0.34,
    });
    // Static SNARE zippers clamping the upper/lower docked vesicles
    const batchSnareStatic = makeMolBatch(T.geoSnare, snareMat, boutonGrp, true, true);
    dockedVesPts.forEach((vp, idx) => {
      for (let s = 0; s < 2; s++) {
        const sy = s === 0 ? 0.22 : -0.22;
        const pos = vp.clone().add(V(0.18, sy, 0.08));
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(s * 0.5, 0.12, sy > 0 ? -0.35 : 0.35));
        batchSnareStatic.add(pos, q, 0.84);
        placed += 5;
      }
      if (idx < 2) SITES.snare_zipper.push(BOUTON_C.clone().add(vp).add(V(0.18, 0.18, 0.12)));
    });
    batchSnareStatic.done();

    // Animated 4-Bundle SNARE Zipper Ring clamping the Hero Fusing Vesicle onto the Active Zone!
    heroSnareGrp = new THREE.Group();
    heroSnareGrp.position.set(1.04, 0.02, 0.24);
    boutonGrp.add(heroSnareGrp);
    const batchSnareHero = makeMolBatch(T.geoSnare, snareMat, heroSnareGrp, true, true);
    [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].forEach(ang => {
      const p = V(0.0, Math.cos(ang) * 0.26, Math.sin(ang) * 0.26);
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(ang, 0.10, Math.cos(ang) * -0.28));
      batchSnareHero.add(p, q, 0.94);
      placed += 6;
    });
    batchSnareHero.done();
    SITES.snare_zipper.push(BOUTON_C.clone().add(V(1.04, 0.02, 0.28)));

    // Glowing Exocytic Fusion Pore Ring on the Presynaptic Active Zone membrane
    fusionPoreRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.18, 0.028, 12, 28),
      reg(
        'snare_zipper',
        phys({
          color: '#ff9c78',
          emissive: '#ff5c38',
          emissiveIntensity: 1.1,
          roughness: 0.18,
          transparent: true,
          opacity: 0.88,
        })
      )
    );
    fusionPoreRing.position.set(1.22, 0.02, 0.24);
    fusionPoreRing.rotation.y = Math.PI / 2;
    boutonGrp.add(fusionPoreRing);

    // 5D. 20 nm Chemical Synaptic Cleft & Cupped Postsynaptic Dendritic Spine (`synaptic_cleft`)
    const cleftGrp = new THREE.Group();
    cell.add(cleftGrp);

    // Subtle translucent volumetric glow curtain framing the 20 nm cleft space
    const cleftVeil = new THREE.Mesh(
      new THREE.CylinderGeometry(1.48, 1.48, 0.56, 32, 1, true),
      reg(
        'synaptic_cleft',
        phys({
          color: '#46f0dc',
          emissive: '#147872',
          emissiveIntensity: 0.36,
          transparent: true,
          opacity: 0.13,
          depthWrite: false,
          side: THREE.DoubleSide,
          roughness: 0.20,
        })
      )
    );
    cleftVeil.position.copy(CLEFT_C);
    cleftVeil.rotation.z = Math.PI / 2;
    cleftGrp.add(cleftVeil);

    // Neurexin-Neuroligin trans-synaptic adhesion bridges + delicate 20 nm caliper brackets at top of cleft
    const S_CLEFT = sculpt('synaptic_cleft', cleftGrp, {
      emissive: '#127068',
      emissiveIntensity: 0.42,
      roughness: 0.24,
      clearcoat: 0.56,
    });
    const bridgeYs = [-1.18, -0.62, 0.66, 1.20];
    bridgeYs.forEach((yo, idx) => {
      const z = idx % 2 === 0 ? -0.45 : 0.48;
      S_CLEFT.stick(V(6.34, 1.28 + yo, 0.20 + z), V(6.98, 1.28 + yo, 0.20 + z), 0.016, col('#68d8ff'), col('#4ef6cc'));
      S_CLEFT.add(V(6.66, 1.28 + yo, 0.20 + z), 0.064, col('#7ef8e4'));
      placed++;
    });
    // Crisp 20 nm measurement caliper bar above cleft (cleanly below #hud in synapse close-up!)
    S_CLEFT.stick(V(6.34, 2.66, 0.48), V(6.98, 2.66, 0.48), 0.014, col('#7cf8e8'), col('#7cf8e8'));
    S_CLEFT.stick(V(6.34, 2.58, 0.48), V(6.34, 2.74, 0.48), 0.014, col('#7cf8e8'), col('#7cf8e8'));
    S_CLEFT.stick(V(6.98, 2.58, 0.48), V(6.98, 2.74, 0.48), 0.014, col('#7cf8e8'), col('#7cf8e8'));
    S_CLEFT.done();

    // Crisp "20 nm CLEFT" micro-tag right above caliper bar
    const clCv = document.createElement('canvas');
    clCv.width = 256;
    clCv.height = 64;
    const clg = clCv.getContext('2d')!;
    clg.clearRect(0, 0, 256, 64);
    clg.textAlign = 'center';
    clg.textBaseline = 'middle';
    clg.font = '700 32px system-ui, -apple-system, sans-serif';
    clg.fillStyle = '#84fff0';
    clg.fillText('20 nm CLEFT', 128, 32);
    const clTex = new THREE.CanvasTexture(clCv);
    clTex.colorSpace = THREE.SRGBColorSpace;
    const clLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.24, 0.31),
      reg(
        'synaptic_cleft',
        new THREE.MeshStandardMaterial({
          map: clTex,
          emissive: '#ffffff',
          emissiveMap: clTex,
          emissiveIntensity: 0.90,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    clLbl.position.set(CLEFT_C.x, 2.90, 0.52);
    cleftGrp.add(clLbl);

    // Animated neurotransmitter beads bursting across the 20 nm cleft (Glutamate emerald + ACh rose)
    const gluBeadMat = reg('synaptic_cleft', phys({ color: '#64ffba', emissive: '#2ce892', emissiveIntensity: 0.95, roughness: 0.16 }));
    const achBeadMat = reg('synaptic_cleft', phys({ color: '#ff8cc8', emissive: '#e84898', emissiveIntensity: 0.95, roughness: 0.16 }));
    const ntGeo = new THREE.SphereGeometry(0.044, 10, 8);
    for (let i = 0; i < 24; i++) {
      const isAch = i >= 12;
      const m = new THREE.Mesh(ntGeo, isAch ? achBeadMat : gluBeadMat);
      cleftGrp.add(m);
      cleftGluBeads.push({
        mesh: m,
        u0: (i / 12) % 1,
        yOff: isAch ? rr(-1.05, 0.05) : rr(0.05, 1.15),
        zOff: rr(-0.45, 0.55),
        isAch,
      });
    }

    // Cupped Postsynaptic Dendritic Spine & Postsynaptic Density (PSD-95) Scaffold
    const spineGrp = new THREE.Group();
    spineGrp.position.copy(SPINE_C);
    cell.add(spineGrp);

    const spineGeo = shellGeo(
      V(0, 0, 0),
      d => {
        // Concave cup on -X face facing the 20 nm cleft; tapers smoothly into postsynaptic dendrite on +X
        const cupIndent = d.x < -0.55 ? 1 - 0.24 * (-d.x - 0.55) : 1;
        const neckTaper = d.x > 0.35 ? 1 - 0.42 * Math.pow(d.x - 0.35, 1.2) : 1;
        const rx = d.x < 0 ? 0.92 : 1.18;
        const ry = 1.72 * neckTaper;
        const rz = 1.44 * neckTaper;
        const ell = 1 / Math.sqrt((d.x / rx) ** 2 + (d.y / ry) ** 2 + (d.z / rz) ** 2);
        return ell * cupIndent;
      },
      78
    );
    const spineMat = cinemaShellMat('synaptic_cleft', '#229e9c', '#9ef6ec', {}, {
      attenCol: '#147274',
      attenDist: 3.4,
      sssColor: '#56ffe6',
      sssIntensity: 0.36,
      iridescence: 0.56,
      thickness: 0.42,
      roughness: 0.12,
      sheenColor: '#d4fff8',
      normalMap: bump(10, 8),
      normalScale: 0.18,
    });
    spineGrp.add(shade(new THREE.Mesh(spineGeo, spineMat), true, true));

    // Glowing PSD-95 postsynaptic density scaffold plate + actin spine neck fibers
    const S_PSD = sculpt('synaptic_cleft', spineGrp, {
      emissive: '#18807a',
      emissiveIntensity: 0.46,
      roughness: 0.26,
      clearcoat: 0.56,
    });
    for (let k = -3; k <= 3; k++) {
      const y = k * 0.36;
      S_PSD.stick(V(-0.74, y, -0.52), V(-0.74, y, 0.52), 0.020, col('#4ef6d6'), col('#78d8ff'));
      S_PSD.stick(V(-0.72, y, 0.0), V(0.75, y * 0.45, 0.0), 0.016, col('#66e8d4'), col('#46a8c8'));
    }
    S_PSD.done();

    // 5E. Postsynaptic Real PDB `3KG2` Y-Shaped AMPA Glutamate Receptors (`ampa_receptor`)
    //     Upper-to-central postsynaptic membrane, Y-shaped clamshells projecting directly into the 20 nm cleft!
    ampaMatRef = makeCinemaProteinMat('ampa_receptor', {
      emissive: '#106c48',
      emissiveIntensity: 0.40,
      roughness: 0.24,
      clearcoat: 0.62,
      sssColor: '#66ffc2',
      sssIntensity: 0.34,
    });
    const batchAmpa = makeMolBatch(T.geoAmpa, ampaMatRef, cell, true, true);
    const ampaPositions = [
      V(7.04, 2.38, 0.24),
      V(6.98, 1.94, 0.52),
      V(6.98, 1.96, -0.22),
      V(6.96, 1.48, 0.42),
      V(6.98, 1.54, -0.36),
      V(7.04, 2.32, -0.34),
      V(7.06, 1.18, 0.68),
    ];
    ampaPositions.forEach((p, idx) => {
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(idx * 0.55, 0.08 * (idx % 2 ? 1 : -1), (p.y - 1.28) * 0.16));
      batchAmpa.add(p, q, 0.94);
      placed += 6;
      if (idx < 4) SITES.ampa_receptor.push(p.clone());
    });
    batchAmpa.done();

    // 5F. Postsynaptic Real PDB `2BG9` Pentameric nAChR Acetylcholine Receptors (`nachr_receptor`)
    //     Central-to-lower postsynaptic membrane, 5-fold ACh-binding crowns facing straight into the 20 nm cleft!
    nachrMatRef = makeCinemaProteinMat('nachr_receptor', {
      emissive: '#7c1c52',
      emissiveIntensity: 0.40,
      roughness: 0.24,
      clearcoat: 0.62,
      sssColor: '#ff96c8',
      sssIntensity: 0.34,
    });
    const batchNachr = makeMolBatch(T.geoNachr, nachrMatRef, cell, true, true);
    const nachrPositions = [
      V(6.96, 0.96, 0.44),
      V(6.98, 0.94, -0.30),
      V(6.98, 0.48, 0.54),
      V(6.98, 0.48, -0.24),
      V(7.04, 0.06, 0.28),
      V(7.06, 0.08, -0.38),
      V(7.06, 0.66, 0.14),
    ];
    nachrPositions.forEach((p, idx) => {
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(idx * 0.65, -0.06, (p.y - 1.28) * 0.16));
      batchNachr.add(p, q, 0.96);
      placed += 6;
      if (idx < 4) SITES.nachr_receptor.push(p.clone());
    });
    batchNachr.done();

    // Sleek Synapse Plaque below the 20 nm cleft (cleanly above #hint & #tools in overview & synapse views)
    const synCv = document.createElement('canvas');
    synCv.width = 640;
    synCv.height = 112;
    const synTex = new THREE.CanvasTexture(synCv);
    synTex.colorSpace = THREE.SRGBColorSpace;
    paintPlaque(
      synCv,
      synTex,
      '20 nm CHEMICAL SYNAPSE · EXOCYTOSIS',
      'Ca²⁺ → SNARE (1SFC) → AMPA (3KG2) & nAChR (2BG9)',
      '#ffd874',
      'rgba(255,204,96,0.84)'
    );
    const synPlaque = new THREE.Mesh(
      new THREE.PlaneGeometry(3.05, 0.54),
      reg(
        'synaptic_cleft',
        new THREE.MeshStandardMaterial({
          map: synTex,
          emissive: '#ffffff',
          emissiveMap: synTex,
          emissiveIntensity: 0.88,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    synPlaque.position.set(CLEFT_C.x - 0.18, CLEFT_C.y - 2.08, CLEFT_C.z + 0.54);
    cell.add(synPlaque);

    SITES.terminal_bouton.push(BOUTON_C.clone(), BOUTON_C.clone().add(V(0.6, 0.4, 0.4)));
    SITES.synaptic_cleft.push(CLEFT_C.clone(), SPINE_C.clone());
  }

  // -------------------------------------------------------------------------
  // 6. RAZOR-SHARP CIRCULAR ATOMIC OPTICAL LENS (`neuro_atoms`, 0.1–0.5 nm)
  //    Glutamate (C5H9NO4) | Acetylcholine | Na+/K+/Ca2+ Ions | H3K27ac (-COCH3)
  //    Zero bezel clipping guaranteed: every atom & label strictly inside r <= 1.72 < R_RING = 2.05!
  // -------------------------------------------------------------------------
  function buildAtomicNeuroInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    cell.add(grp);

    const R_RING = 2.05;

    // Luminous optical bezel ring
    const ringMat = reg(
      'neuro_atoms',
      phys({
        color: '#7ce8ff',
        emissive: '#146086',
        emissiveIntensity: 0.56,
        roughness: 0.16,
        metalness: 0.24,
        clearcoat: 0.80,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.044, 16, 72), ringMat));

    // Inner subtle hairline optical tick ring
    grp.add(
      new THREE.Mesh(
        new THREE.TorusGeometry(R_RING - 0.10, 0.008, 8, 64),
        reg('neuro_atoms', phys({ color: '#4284a8', emissive: '#184260', emissiveIntensity: 0.4, roughness: 0.3 }))
      )
    );

    // Dark-field frosted optical disc backing
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 64),
      reg(
        'neuro_atoms',
        phys({
          color: '#071124',
          roughness: 0.18,
          transparent: true,
          opacity: 0.84,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.14;
    grp.add(glassDisc);

    const S_AT = sculpt('neuro_atoms', grp, {
      emissive: '#12263c',
      emissiveIntensity: 0.30,
      roughness: 0.18,
      clearcoat: 0.72,
    });

    // Authentic CPK + neural ion palette
    const cC = col('#98a8be'); // Carbon
    const cH = col('#f2f9ff'); // Hydrogen
    const cN = col('#4c98ff'); // Nitrogen
    const cO = col('#ff5266'); // Oxygen
    const cNa = col('#ffbe3c'); // Na+ (0.102 nm)
    const cK = col('#c678ff'); // K+ (0.138 nm)
    const cCa = col('#52ffba'); // Ca2+ (0.100 nm spark trigger)
    const cBond = col('#cbdcf0');

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.022) => S_AT.stick(a, b, r, c1, c2);

    // Subtle internal quadrant crosshairs strictly inside R_RING (r <= 1.38)
    S_AT.stick(V(0, -1.16, -0.05), V(0, 1.12, -0.05), 0.010, col('#3e5a82'), col('#3e5a82'));
    S_AT.stick(V(-1.46, -0.02, -0.05), V(1.46, -0.02, -0.05), 0.010, col('#3e5a82'), col('#3e5a82'));

    // QUADRANT 1 (Top-Left): CPK Ball-and-Stick L-GLUTAMATE (C5H9NO4)
    //   -OOC — CH2 — CH2 — CH(NH3+) — COO-
    const gC1 = V(-1.26, 0.56, 0.08);
    const gO1 = V(-1.40, 0.78, 0.12);
    const gO2 = V(-1.42, 0.34, 0.10);
    const gC2 = V(-1.00, 0.56, 0.06);
    const gC3 = V(-0.80, 0.72, 0.10);
    const gC4 = V(-0.54, 0.56, 0.08);
    const gN = V(-0.54, 0.86, 0.14);
    const gC5 = V(-0.30, 0.42, 0.08);
    const gO3 = V(-0.22, 0.62, 0.12);
    const gO4 = V(-0.22, 0.22, 0.10);
    [gC1, gC2, gC3, gC4, gC5].forEach(p => atom(p, 0.072, cC));
    [gO1, gO2, gO3, gO4].forEach(p => atom(p, 0.076, cO));
    atom(gN, 0.082, cN);
    // Hydrogens on backbone & NH3+
    const gHs = [
      gC2.clone().add(V(0, -0.15, 0.04)),
      gC3.clone().add(V(0, 0.15, 0.04)),
      gN.clone().add(V(-0.12, 0.10, 0.04)),
      gN.clone().add(V(0.12, 0.10, 0.04)),
    ];
    gHs.forEach(h => atom(h, 0.044, cH));
    bond(gO1, gC1, cO, cC); bond(gO2, gC1, cO, cC);
    bond(gC1, gC2, cC, cC); bond(gC2, gC3, cC, cC); bond(gC3, gC4, cC, cC);
    bond(gC4, gN, cC, cN); bond(gC4, gC5, cC, cC);
    bond(gC5, gO3, cC, cO); bond(gC5, gO4, cC, cO);
    bond(gC2, gHs[0], cC, cH, 0.014); bond(gC3, gHs[1], cC, cH, 0.014);
    bond(gN, gHs[2], cN, cH, 0.014); bond(gN, gHs[3], cN, cH, 0.014);

    // QUADRANT 2 (Top-Right): CPK Ball-and-Stick ACETYLCHOLINE (C7H16NO2+)
    //   CH3 — C(=O) — O — CH2 — CH2 — N+(CH3)3
    const aC1 = V(0.28, 0.62, 0.08);
    const aC2 = V(0.48, 0.50, 0.08);
    const aO1 = V(0.48, 0.76, 0.12);
    const aO2 = V(0.70, 0.38, 0.08);
    const aC3 = V(0.92, 0.52, 0.08);
    const aC4 = V(1.12, 0.38, 0.08);
    const aN = V(1.28, 0.60, 0.10);
    const aM1 = V(1.48, 0.72, 0.12);
    const aM2 = V(1.28, 0.86, 0.12);
    const aM3 = V(1.46, 0.42, 0.08);
    [aC1, aC2, aC3, aC4, aM1, aM2, aM3].forEach(p => atom(p, 0.068, cC));
    [aO1, aO2].forEach(p => atom(p, 0.074, cO));
    atom(aN, 0.084, cN);
    atom(aC1.clone().add(V(-0.08, 0.13, 0.04)), 0.042, cH);
    atom(aC3.clone().add(V(0, 0.15, 0.04)), 0.042, cH);
    bond(aC1, aC2, cC, cC); bond(aC2, aO1, cC, cO); bond(aC2, aO2, cC, cO);
    bond(aO2, aC3, cO, cC); bond(aC3, aC4, cC, cC); bond(aC4, aN, cC, cN);
    bond(aN, aM1, cN, cC); bond(aN, aM2, cN, cC); bond(aN, aM3, cN, cC);

    // QUADRANT 3 (Bottom-Left): Na+ (0.102 nm), K+ (0.138 nm) & Ca2+ (0.100 nm) Signaling Ions
    const ionSpecs: Array<[THREE.Vector3, number, THREE.Color, number]> = [
      [V(-1.14, -0.54, 0.10), 0.112, cNa, 3],
      [V(-0.66, -0.54, 0.10), 0.148, cK, 4],
      [V(-0.22, -0.54, 0.10), 0.108, cCa, 3],
    ];
    ionSpecs.forEach(([ctr, rad, cIon, nW]) => {
      atom(ctr, rad, cIon);
      for (let i = 0; i < nW; i++) {
        const a = (i / nW) * Math.PI * 2 + 0.4;
        const w = ctr.clone().add(V(Math.cos(a) * (rad + 0.15), Math.sin(a) * (rad + 0.15), 0.02));
        atom(w, 0.042, cO);
        bond(ctr, w, cIon, cO, 0.010);
      }
    });

    // QUADRANT 4 (Bottom-Right): H3K27ac ACETYL MARK (Lys-NH — C(=O) — CH3)
    const hLysC = V(0.26, -0.62, 0.08);
    const hN = V(0.50, -0.46, 0.08);
    const hNH = V(0.50, -0.26, 0.10);
    const hAcC = V(0.76, -0.58, 0.10);
    const hAcO = V(0.78, -0.84, 0.12);
    const hMeC = V(1.04, -0.44, 0.10);
    const hHs = [
      V(1.20, -0.56, 0.12),
      V(1.16, -0.28, 0.12),
      V(0.98, -0.28, 0.14),
    ];
    atom(hLysC, 0.074, cC);
    atom(hN, 0.084, cN);
    atom(hNH, 0.048, cH);
    atom(hAcC, 0.082, col('#ffe268')); // Radiant gold acetyl carbonyl carbon!
    atom(hAcO, 0.084, cO);
    atom(hMeC, 0.078, col('#52ffbe')); // Emerald acetyl methyl carbon!
    hHs.forEach(p => atom(p, 0.046, cH));
    bond(hLysC, hN, cC, cN, 0.024);
    bond(hN, hNH, cN, cH, 0.016);
    bond(hN, hAcC, cN, col('#ffe268'), 0.026);
    bond(hAcC, hAcO, col('#ffe268'), cO, 0.026);
    bond(hAcC, hMeC, col('#ffe268'), col('#52ffbe'), 0.026);
    hHs.forEach(p => bond(hMeC, p, col('#52ffbe'), cH, 0.015));

    S_AT.done();

    // Subtle optical magnification leader lines originating cleanly from the bottom of the 3 plaques!
    const leaderMat = reg(
      'neuro_atoms',
      new THREE.LineBasicMaterial({ color: '#58c8f0', transparent: true, opacity: 0.28 })
    );
    [
      [V(SOMA_C.x + 0.05, SOMA_C.y - 2.66, SOMA_C.z + 0.52), ATOM_C.clone().add(V(-1.45, 1.45, 0))],
      [V(NODE1_C.x, NODE1_C.y - 1.81, NODE1_C.z + 0.54), ATOM_C.clone().add(V(0, 2.05, 0))],
      [V(CLEFT_C.x - 0.18, CLEFT_C.y - 2.35, CLEFT_C.z + 0.54), ATOM_C.clone().add(V(1.45, 1.45, 0))],
    ].forEach(([a, b]) => {
      const lg = new THREE.BufferGeometry().setFromPoints([a, b]);
      cell.add(new THREE.Line(lg, leaderMat));
    });

    // Crisp zero-clipping top & bottom inset labels (max corner radius = hypot(1.22, 1.42) = 1.87 < R_RING = 2.05!)
    const topCv = document.createElement('canvas');
    topCv.width = 640;
    topCv.height = 104;
    const tg = topCv.getContext('2d')!;
    tg.clearRect(0, 0, 640, 104);
    tg.textAlign = 'center';
    tg.font = '700 28px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#72ffca';
    tg.fillText('Glutamate (C₅H₉NO₄)', 176, 36);
    tg.fillStyle = '#ff98cc';
    tg.fillText('Acetylcholine', 468, 36);
    tg.font = '600 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#d4ebff';
    tg.fillText('Atomic Neurochemistry · 0.1–0.5 nm', 320, 78);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(2.42, 0.39),
      reg(
        'neuro_atoms',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.88,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 1.24, 0.16);
    grp.add(topLbl);

    const botCv = document.createElement('canvas');
    botCv.width = 640;
    botCv.height = 112;
    const bg = botCv.getContext('2d')!;
    bg.clearRect(0, 0, 640, 112);
    bg.textAlign = 'center';
    bg.font = '700 27px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#ffd262';
    bg.fillText('Na⁺ · K⁺ · Ca²⁺ Ions', 176, 32);
    bg.fillStyle = '#62ffca';
    bg.fillText('H3K27ac (–COCH₃)', 468, 32);
    const cpkRow = [
      ['C', '#98a8be'], ['H', '#f2f9ff'], ['N', '#4c98ff'], ['O', '#ff5266'],
    ];
    bg.font = '700 24px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    cpkRow.forEach(([sym, hex], idx) => {
      const bx = 148 + idx * 96;
      bg.beginPath();
      bg.arc(bx, 80, 11, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#f2f8ff';
      bg.fillText(sym, bx + 16, 81);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(2.36, 0.41),
      reg(
        'neuro_atoms',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.88,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -1.26, 0.16);
    grp.add(botLbl);

    SITES.neuro_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // 7. Live Opaque-Discard 4x4 Atlas MOL Flows (Exact 6 Species + Live Counters!)
  //    na_influx, k_efflux, ca_trigger, glutamate, ach_ligand, atp_reset
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    na_influx: ['Na⁺ Influx (Naᵥ1.7 / AMPA)', '#42dcff', 0, 0.25],
    k_efflux: ['K⁺ Efflux (Kᵥ1.2 Reset)', '#c880ff', 1, 0.26],
    ca_trigger: ['Ca²⁺ Spark (Caᵥ Trigger)', '#ffdc50', 2, 0.27],
    glutamate: ['Glutamate (AMPA Burst)', '#56ffa8', 3, 0.27],
    ach_ligand: ['Acetylcholine (nAChR)', '#ff7ec0', 4, 0.27],
    atp_reset: ['ATP → ADP+Pᵢ (Na⁺/K⁺ · MT)', '#ffa24c', 5, 0.26],
  };

  function glyph(g: CanvasRenderingContext2D, k: number, x: number, y: number, s: number, fill = '#ffffff') {
    const P = (u: number, v: number): [number, number] => [x + u * s, y + v * s];
    const ink = '#0c121e';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.04, ...P(0.5, 0.5), s * 0.62);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.50).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const drawBalls = (list: Array<[number, number, number]>) => {
      g.strokeStyle = ink;
      g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawPoly = (pts: Array<[number, number]>, close = true, w = 0.10) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      if (close) g.closePath();
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // na_influx: compact + ion sphere
        drawBalls([[0.50, 0.50, 0.25]]);
        drawPoly([[0.38, 0.50], [0.62, 0.50]], false, 0.07);
        drawPoly([[0.50, 0.38], [0.50, 0.62]], false, 0.07);
        break;
      case 1: // k_efflux: larger K+ ion with hydration ring dots
        drawBalls([[0.50, 0.50, 0.29]]);
        drawBalls([[0.22, 0.24, 0.07], [0.78, 0.24, 0.07], [0.50, 0.82, 0.07]]);
        break;
      case 2: // ca_trigger: divalent Ca2+ starburst spark
        drawPoly([[0.50, 0.18], [0.50, 0.82]], false, 0.08);
        drawPoly([[0.18, 0.50], [0.82, 0.50]], false, 0.08);
        drawBalls([[0.50, 0.50, 0.22]]);
        break;
      case 3: // glutamate: branched 5-carbon amino-acid chain
        drawPoly([[0.20, 0.56], [0.40, 0.42], [0.60, 0.58], [0.80, 0.44]], false, 0.09);
        drawBalls([[0.20, 0.56, 0.12], [0.50, 0.34, 0.13], [0.80, 0.44, 0.13]]);
        break;
      case 4: // ach_ligand: ester + trimethylammonium head
        drawPoly([[0.22, 0.54], [0.52, 0.48], [0.74, 0.50]], false, 0.09);
        drawBalls([[0.22, 0.54, 0.13], [0.74, 0.50, 0.19]]);
        break;
      case 5: // atp_reset: triphosphate energy triad
        drawPoly([[0.22, 0.54], [0.48, 0.40], [0.74, 0.54]], false, 0.09);
        drawBalls([[0.22, 0.54, 0.13], [0.48, 0.40, 0.13], [0.74, 0.54, 0.16]]);
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
    flowGeo.setAttribute(nm as string, new THREE.BufferAttribute(arr as Float32Array, d as number).setUsage(THREE.DynamicDrawUsage))
  );
  const flowPts = new THREE.Points(flowGeo, flowMat);
  flowPts.frustumCulled = false;
  cell.add(flowPts);

  const FXTEX = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 62);
    [[0, 0], [0.56, 0.16], [0.80, 1], [1, 0]].forEach(([o, a]) => gr.addColorStop(o, `rgba(255,255,255,${a})`));
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

  const live: Array<{
    i: number;
    type: string;
    curve: THREE.CatmullRomCurve3;
    tags: string[];
    t: number;
    dur: number;
    ph: number;
    wob: number;
    onDone?: () => void;
  }> = [];
  const free: number[] = [];
  for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  const fx: Array<{ i: number; at: THREE.Vector3; t: number; life: number; s: number; c: THREE.Color }> = [];
  const fxFree: number[] = [];
  for (let i = FX_MAX - 1; i >= 0; i--) fxFree.push(i);

  const FLOW_COUNTS: Record<string, number> = Object.fromEntries(Object.keys(MOL).map(k => [k, 0]));
  const molCountEls: Record<string, HTMLElement> = {};
  let flowsOn = true;
  let flowSpeed = 1;
  let fClock = 0;
  let molHi: string | null = null;
  let hi: string | null = null;

  function splash(at: THREE.Vector3, hex: string, s = 0.36) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.56, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 2.4, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop()!;
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.045, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
    const el = molCountEls[type];
    if (el) el.textContent = String(FLOW_COUNTS[type]);
  }

  const STREAM_TIMERS = [
    // 1. Na+ Influx through Nav1.7 at Nodes of Ranvier, Hillock, and Postsynaptic AMPA/nAChR
    {
      rate: 3.4,
      acc: 0.5,
      go: () => {
        if (mode === 'resting' && rand() < 0.72) return; // Resting: Nav1.7 mostly closed!
        const pick = rand();
        if (pick < 0.48) {
          const nC = rand() < 0.68 ? NODE1_C : NODE2_C;
          const x = nC.x + rr(-0.32, 0.32);
          const p0 = V(x, nC.y + 1.25, nC.z + rr(0.05, 0.45));
          const p1 = V(x, nC.y + 0.42, nC.z + 0.20);
          const p2 = V(x + 0.42, nC.y + 0.05, nC.z + 0.12);
          emitFlow('na_influx', [p0, p1, p2], ['nav17', 'node_ranvier', 'axon_hillock'], 1.9, () => {
            if (rand() < 0.3) splash(p1, '#4ceeff', 0.32);
          });
        } else if (pick < 0.72) {
          // Saltatory axial current leaping from Hillock -> Node 1 -> Node 2 -> Bouton
          emitFlow(
            'na_influx',
            [V(-2.7, 1.28, 0.32), V(-0.02, 1.28, 0.32), V(2.68, 1.28, 0.32), V(5.12, 1.28, 0.32)],
            ['axon_hillock', 'myelin_sheath', 'node_ranvier'],
            2.2
          );
        } else {
          // Postsynaptic Na+ EPSP influx through open AMPA & nAChR channels!
          const y = rand() < 0.55 ? rr(1.35, 2.35) : rr(0.20, 1.05);
          const p0 = V(6.72, y, 0.35);
          const p1 = V(7.18, y, 0.30);
          const p2 = V(8.35, 1.28 + (y - 1.28) * 0.45, 0.25);
          emitFlow('na_influx', [p0, p1, p2], ['ampa_receptor', 'nachr_receptor', 'synaptic_cleft'], 2.0);
        }
      },
    },
    // 2. K+ Efflux through flanking Kv1.2 channels repolarizing the Nodes of Ranvier
    {
      rate: 2.5,
      acc: 0.4,
      go: () => {
        if (mode === 'resting' && rand() < 0.65) return;
        const nC = rand() < 0.70 ? NODE1_C : NODE2_C;
        const side = rand() < 0.5 ? -0.52 : 0.52;
        const p0 = V(nC.x + side, nC.y + 0.05, nC.z + 0.15);
        const p1 = V(nC.x + side, nC.y + 0.50, nC.z + 0.25);
        const p2 = V(nC.x + side * 1.15, nC.y + 1.32, nC.z + 0.42);
        emitFlow('k_efflux', [p0, p1, p2], ['kv12', 'node_ranvier'], 2.1);
      },
    },
    // 3. Ca2+ Trigger Spark Influx through Presynaptic Cav channels
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        if (mode === 'resting' && rand() < 0.85) return;
        const mult = mode === 'synaptic_fire' ? 2 : 1;
        for (let m = 0; m < mult; m++) {
          const yOff = rr(-0.95, 0.95);
          const p0 = V(BOUTON_C.x + 1.48, BOUTON_C.y + yOff, BOUTON_C.z + 0.62);
          const p1 = V(BOUTON_C.x + 1.04, BOUTON_C.y + yOff * 0.65, BOUTON_C.z + 0.36);
          const p2 = V(BOUTON_C.x + 0.78, BOUTON_C.y + yOff * 0.25, BOUTON_C.z + 0.22);
          emitFlow('ca_trigger', [p0, p1, p2], ['cav_channel', 'snare_zipper', 'terminal_bouton'], 1.8, () => {
            if (rand() < 0.45) splash(p1, '#ffe052', 0.36);
          });
        }
      },
    },
    // 4. Glutamate Excitatory Burst crossing 20 nm cleft to AMPA (3KG2)
    {
      rate: 2.6,
      acc: 0.4,
      go: () => {
        if (mode === 'resting' && rand() < 0.82) return;
        const mult = mode === 'synaptic_fire' ? 2 : 1;
        for (let m = 0; m < mult; m++) {
          const yTgt = rr(1.38, 2.38);
          const p0 = V(BOUTON_C.x + 1.12, BOUTON_C.y + 0.12, BOUTON_C.z + 0.28);
          const p1 = V(CLEFT_C.x, (p0.y + yTgt) * 0.5, BOUTON_C.z + rr(-0.15, 0.48));
          const p2 = V(7.02, yTgt, BOUTON_C.z + rr(-0.15, 0.42));
          emitFlow('glutamate', [p0, p1, p2], ['synaptic_vesicle', 'snare_zipper', 'synaptic_cleft', 'ampa_receptor'], 1.9, () => {
            if (rand() < 0.4) splash(p2, '#58ffae', 0.30);
          });
        }
      },
    },
    // 5. Acetylcholine Ligand Burst crossing 20 nm cleft to nAChR (2BG9)
    {
      rate: 2.2,
      acc: 0.3,
      go: () => {
        if (mode === 'resting' && rand() < 0.82) return;
        const mult = mode === 'synaptic_fire' ? 2 : 1;
        for (let m = 0; m < mult; m++) {
          const yTgt = rr(0.14, 1.05);
          const p0 = V(BOUTON_C.x + 1.12, BOUTON_C.y - 0.12, BOUTON_C.z + 0.28);
          const p1 = V(CLEFT_C.x, (p0.y + yTgt) * 0.5, BOUTON_C.z + rr(-0.18, 0.48));
          const p2 = V(7.02, yTgt, BOUTON_C.z + rr(-0.18, 0.42));
          emitFlow('ach_ligand', [p0, p1, p2], ['synaptic_vesicle', 'snare_zipper', 'synaptic_cleft', 'nachr_receptor'], 1.9, () => {
            if (rand() < 0.4) splash(p2, '#ff88c6', 0.30);
          });
        }
      },
    },
    // 6. ATP -> ADP+Pi driving Na+/K+-ATPase -70 mV reset pumps & anterograde kinesin microtubule transport!
    {
      rate: 2.0,
      acc: 0.5,
      go: () => {
        if (rand() < 0.55) {
          // Na+/K+-ATPase pump reset along lower Node 1
          const x = NODE1_C.x + rr(-0.40, 0.40);
          const p0 = V(x - 0.35, NODE1_C.y - 0.08, NODE1_C.z + 0.18);
          const p1 = V(x, NODE1_C.y - 0.46, NODE1_C.z + 0.22);
          const p2 = V(x + 0.35, NODE1_C.y - 1.10, NODE1_C.z + 0.35);
          emitFlow('atp_reset', [p0, p1, p2], ['nak_reset', 'node_ranvier'], 2.2, () => {
            if (rand() < 0.35) splash(p1, '#ffbe54', 0.30);
          });
        } else {
          // Anterograde kinesin cargo ATP stream along axonal microtubules from Soma -> Bouton
          emitFlow(
            'atp_reset',
            [V(-4.1, 1.28, 0.28), V(-1.2, 1.32, 0.30), V(1.8, 1.26, 0.30), V(4.6, 1.28, 0.28)],
            ['axon_mt', 'soma', 'terminal_bouton'],
            3.1
          );
        }
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
      q.y += a * Math.cos(w * 4.2 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.6 + p.ph * 1.7);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.48 : 0.48) : 1);
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
  // 8. Live Neural Physiology & Biomechanics Animation
  // -------------------------------------------------------------------------
  let prevWaveIdx = -1;
  function updateBiomechanics(dt: number) {
    animClock += dt;

    // 1. Dendritic inward EPSP pulses (slow/calm in resting, brisk in firing modes)
    const dendRate = mode === 'resting' ? 0.14 : mode === 'synaptic_fire' ? 0.62 : 0.42;
    dendritePulses.forEach(dp => {
      const u = 1 - ((dp.u0 + animClock * dendRate) % 1);
      dp.curve.getPointAt(u, dp.mesh.position);
      const sc = mode === 'resting' ? 0.55 : 0.85 + 0.35 * Math.sin(u * Math.PI);
      dp.mesh.scale.setScalar(sc);
    });

    // 2. Anterograde Kinesin-1 walkers cruising smoothly along axonal microtubules
    kinesinWalkers.forEach((kw, idx) => {
      const u = (kw.u0 + animClock * 0.08) % 1;
      const x = -3.8 + u * 8.4;
      const stepBob = Math.abs(Math.sin(animClock * 9.0 + idx)) * 0.025;
      kw.grp.position.set(x, 1.28 + kw.yOff + stepBob, 0.20 + kw.zOff);
    });

    // 3. Saltatory Action Potential Pulse leaping Hillock -> Node 1 -> Node 2 -> Terminal Bouton!
    const waveSpeed = mode === 'synaptic_fire' ? 0.85 : 0.48;
    const rawPhase = animClock * waveSpeed;
    const wIdx = Math.floor(rawPhase);
    if (mode !== 'resting' && wIdx !== prevWaveIdx) {
      prevWaveIdx = wIdx;
      apWaveCount++;
      snareFusionCount++;
    }
    const phase = rawPhase % 1;

    // Saltatory position interpolation that dwells/flashes at Hillock (-2.72), Node 1 (-0.02), Node 2 (+2.68), Bouton (+5.2)
    let pulseX = -2.72;
    let node1Excite = 0;
    let node1Repol = 0;
    let node2Excite = 0;
    let synExcite = 0;

    if (mode === 'resting') {
      currentNodeMv = -70;
      if (pulseOrb) pulseOrb.visible = false;
    } else {
      if (pulseOrb) pulseOrb.visible = true;
      // Nonlinear saltatory leap curve
      const stops = [-2.72, NODE1_C.x, NODE2_C.x, BOUTON_C.x + 0.55];
      const seg = phase * 3;
      const si = Math.min(2, Math.floor(seg));
      const f = seg - si;
      const leap = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
      pulseX = stops[si] + (stops[si + 1] - stops[si]) * leap;

      node1Excite = Math.exp(-Math.pow((phase - 0.36) / 0.085, 2));
      node1Repol = Math.exp(-Math.pow((phase - 0.52) / 0.10, 2));
      node2Excite = Math.exp(-Math.pow((phase - 0.68) / 0.085, 2));
      synExcite = mode === 'synaptic_fire' ? 0.62 + 0.38 * Math.sin(animClock * 7.2) : Math.exp(-Math.pow((phase - 0.88) / 0.13, 2));

      currentNodeMv = -70 + 110 * node1Excite - 10 * node1Repol;
      if (pulseOrb) {
        pulseOrb.position.set(pulseX, 1.28, 0.20);
        const s = 0.92 + 0.25 * Math.sin(phase * Math.PI * 6);
        pulseOrb.scale.set(1, s, s);
      }
    }

    // Update live Nodal voltage oscilloscope plaque
    updateNodePlaque(currentNodeMv, phase);

    // Modulate Hillock, Node 1 & Node 2 halo rings + real PDB channel glow states
    if (hillockRing) {
      const hGlow = mode === 'resting' ? 0.28 : 0.72 + 0.85 * Math.exp(-Math.pow((phase - 0.06) / 0.10, 2));
      (hillockRing.material as THREE.MeshPhysicalMaterial).emissiveIntensity = hGlow;
    }
    if (pulseRingNode1) {
      const m = pulseRingNode1.material as THREE.MeshPhysicalMaterial;
      m.opacity = mode === 'resting' ? 0.18 : 0.28 + 0.72 * node1Excite;
      m.emissiveIntensity = mode === 'resting' ? 0.30 : 0.65 + 1.55 * node1Excite;
      pulseRingNode1.scale.setScalar(1 + 0.14 * node1Excite);
    }
    if (pulseRingNode2) {
      const m = pulseRingNode2.material as THREE.MeshPhysicalMaterial;
      m.opacity = mode === 'resting' ? 0.16 : 0.24 + 0.72 * node2Excite;
      m.emissiveIntensity = mode === 'resting' ? 0.28 : 0.58 + 1.45 * node2Excite;
      pulseRingNode2.scale.setScalar(1 + 0.12 * node2Excite);
    }

    // Only modulate emissive intensities when NOT actively hover-highlighted by user
    if (nav17MatRef && hi !== 'nav17') {
      nav17MatRef.emissiveIntensity = mode === 'resting' ? 0.20 : 0.36 + 0.82 * Math.max(node1Excite, node2Excite);
    }
    if (kv12MatRef && hi !== 'kv12') {
      kv12MatRef.emissiveIntensity = mode === 'resting' ? 0.22 : 0.32 + 0.78 * node1Repol;
    }
    if (nakMatRef && hi !== 'nak_reset') {
      nakMatRef.emissiveIntensity = mode === 'resting' ? 0.56 + 0.16 * Math.sin(animClock * 3.0) : 0.38 + 0.36 * node1Repol;
    }

    // 4. Chemical Synapse Biomechanics: Ca2+ Spark -> SNARE Zippering -> Vesicle Docking/Fusion -> Postsynaptic AMPA & nAChR!
    if (cavMatRef && hi !== 'cav_channel') {
      cavMatRef.emissiveIntensity = mode === 'resting' ? 0.24 : 0.45 + 0.95 * synExcite;
    }
    if (caSparkHalo) {
      caSparkHalo.visible = mode !== 'resting';
      const cm = caSparkHalo.material as THREE.MeshPhysicalMaterial;
      cm.opacity = 0.22 + 0.72 * synExcite;
      caSparkHalo.scale.setScalar(0.84 + 0.38 * synExcite);
    }
    if (heroVesicleGrp && heroSnareGrp && fusionPoreRing) {
      const zip = mode === 'resting' ? 0.08 : synExcite;
      heroVesicleGrp.position.x = 0.84 + 0.16 * zip;
      heroVesicleGrp.scale.set(1 - 0.12 * zip, 1 + 0.08 * zip, 1 + 0.08 * zip);
      heroSnareGrp.scale.set(1 - 0.14 * zip, 1 - 0.12 * zip, 1 - 0.12 * zip);
      fusionPoreRing.scale.setScalar(0.65 + 0.55 * zip);
      (fusionPoreRing.material as THREE.MeshPhysicalMaterial).opacity = mode === 'resting' ? 0.22 : 0.40 + 0.60 * zip;
    }
    if (ampaMatRef && hi !== 'ampa_receptor') {
      ampaMatRef.emissiveIntensity = mode === 'resting' ? 0.22 : 0.38 + 0.68 * synExcite;
    }
    if (nachrMatRef && hi !== 'nachr_receptor') {
      nachrMatRef.emissiveIntensity = mode === 'resting' ? 0.22 : 0.38 + 0.68 * synExcite;
    }

    // Neurotransmitter burst particles crossing the 20 nm cleft
    const cleftSpeed = mode === 'resting' ? 0.06 : mode === 'synaptic_fire' ? 0.95 : 0.55;
    cleftGluBeads.forEach((b, idx) => {
      const u = (b.u0 + animClock * cleftSpeed) % 1;
      const x = 6.32 + u * 0.68;
      const y = 1.28 + b.yOff * (0.35 + 0.65 * u) + 0.04 * Math.sin(u * Math.PI * 3 + idx);
      const z = 0.20 + b.zOff * (0.4 + 0.6 * u);
      b.mesh.position.set(x, y, z);
      b.mesh.visible = mode !== 'resting' || idx % 4 === 0;
      b.mesh.scale.setScalar(0.65 + 0.55 * Math.sin(u * Math.PI));
    });
  }

  // -------------------------------------------------------------------------
  // 9. Live 3-Mode Neural Physiology Switch (#modeBtn)
  //    action_potential | resting | synaptic_fire
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: NeuronMode, silent = false) {
    const target: NeuronMode =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;
    lastPlaqueKey = '';

    if (mode === 'resting') {
      nodeLamp.color.set('#9e88ff');
      nodeLamp.intensity = 9.5;
      synLamp.color.set('#6cb4e8');
      synLamp.intensity = 8.5;
    } else if (mode === 'synaptic_fire') {
      nodeLamp.color.set('#62ecff');
      nodeLamp.intensity = 12.5;
      synLamp.color.set('#ffd458');
      synLamp.intensity = 16.5;
    } else {
      nodeLamp.color.set('#52e4ff');
      nodeLamp.intensity = 13.0;
      synLamp.color.set('#ffc86c');
      synLamp.intensity = 12.5;
    }

    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.toggle('resting', mode === 'resting');
      modeBtn.classList.toggle('synaptic_fire', mode === 'synaptic_fire');
    }
    if (subEl) {
      subEl.textContent =
        mode === 'resting'
          ? 'RESTING STATE (−70 mV Polarized) · Naᵥ1.7 closed · Na⁺/K⁺-ATPase (3WGU) holds gradients · Docked silent synaptic vesicles'
          : mode === 'synaptic_fire'
            ? 'SYNAPTIC BURST · Rapid Caᵥ Ca²⁺ sparks · 4-helix SNARE (1SFC) exocytosis · Dense Glutamate & ACh opening AMPA (3KG2) & nAChR (2BG9)'
            : 'Saltatory Action Potential (−70 → +40 mV) · H3K27ac Epigenetics (1AOI) · Naᵥ1.7 (6J8I) · Kᵥ1.2 (2R9R) · Na⁺/K⁺ (3WGU) · SNARE (1SFC) · AMPA (3KG2) · nAChR (2BG9)';
    }
    updateNodePlaque(mode === 'resting' ? -70 : currentNodeMv, (animClock * 0.48) % 1);
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => setMode();
  }

  // -------------------------------------------------------------------------
  // 10. Resize, Zero-Scrollbar HUD Legend, Flows Panel & Interactive Highlights
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
    ['C', '#98a8be'], ['H', '#f2f9ff'], ['N', '#4c98ff'], ['O', '#ff5266'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}<span class="vm-tag">−70 → +40 mV</span></div>` +
    `<div class="row"><span class="bar" style="background:#4cf8b8"></span>H3K27ac On <span class="bar" style="background:#9a6cff;margin-left:5px"></span>H3K27me3 Off</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip')!;
  const TIP0 = 'Multipolar Neuron & 20 nm Chemical Synapse: trace saltatory Naᵥ1.7/Kᵥ1.2 action potentials from the epigenetic soma nucleus to Ca²⁺-triggered SNARE exocytosis and postsynaptic AMPA/nAChR firing.';
  tipBox.textContent = TIP0;

  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div');
    it.className = 'mol';
    const cv = document.createElement('canvas');
    cv.width = cv.height = 44;
    glyph(cv.getContext('2d')!, g, 3, 3, 38, colour);
    const t = document.createElement('span');
    t.className = 'mname';
    t.textContent = name;
    const cnt = document.createElement('span');
    cnt.className = 'mcnt';
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
      REG[hi].mats.forEach((m: any) => {
        if (m.userData.e0 && m.emissive) m.emissive.copy(m.userData.e0);
        if (m.userData.i0 !== undefined && 'emissiveIntensity' in m) m.emissiveIntensity = m.userData.i0;
      });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) {
      REG[hi].mats.forEach((m: any) => {
        if (m.emissive) m.userData.e0 ??= m.emissive.clone();
        if ('emissiveIntensity' in m) m.userData.i0 ??= m.emissiveIntensity;
      });
    }
    showInfo(hi);
  }
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#68eaff');

  // -------------------------------------------------------------------------
  // 11. Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
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
    caps.visible = cutExtras.visible = cutOn;
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
  speed.ondblclick = () => { speed.value = '0'; speed.oninput(new Event('input')); };
  document.getElementById('motion')!.onclick = e => {
    motion = !motion;
    (e.target as HTMLElement).textContent = motion ? 'Pause' : 'Play';
  };
  document.getElementById('snap')!.onclick = () => {
    composer.render();
    const a = document.createElement('a');
    a.download = `neuron-${mode}-realistic.png`;
    a.href = renderer.domElement.toDataURL('image/png');
    a.click();
  };

  const held = new Set<string>();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !(e.target as HTMLElement)?.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) {
      held.add(k);
    }
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), mvStep = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
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
          .find(h => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has((h.object as any).material));
        if (hit) {
          const k = map.get((hit.object as any).material)!;
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
    mvStep
      .set(0, 0, 0)
      .addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s')))
      .addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (mvStep.lengthSq() < 1e-6) return;
    mvStep.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * 0.5));
    camera.position.add(mvStep);
    controls.target.add(mvStep);
  }

  const tour: any = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = (x: number) => x * x * x * (x * (x * 6 - 15) + 10);

  function poseOf(m: any) {
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
    if (m.pos) return { p: V(...(m.pos as [number, number, number])), t: V(...((m.target ?? m.tgt ?? [0.05, -0.35, 0.20]) as [number, number, number])) };
    return null;
  }

  function flyTo(m: any) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) {
        view = idx;
        curView = m.view;
        const vb = document.getElementById('view');
        if (vb) vb.textContent = `View: ${m.view}`;
      }
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
    if (tour.t >= 1) tourFrame(0);
    return true;
  }

  function freeCamera() {
    tour.on = false;
    tour.yaw = tour.pitch = 0;
    controls.enabled = true;
  }

  const fp = V(), ft = V(), qa = V(), qb = V(), lookV = V(), rightV = V(), C0 = V(0.05, -0.35, 0.20);
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
    lookV.copy(ft).sub(fp);
    if (tour.yaw || tour.pitch) {
      rightV.crossVectors(lookV, UP).normalize();
      lookV.applyAxisAngle(UP, tour.yaw).applyAxisAngle(rightV, -tour.pitch);
    }
    camera.position.copy(fp);
    cell.localToWorld(camera.position);
    controls.target.copy(fp).add(lookV);
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
      dendrites: V(-8.15, 2.35, 0.55),
      soma: SOMA_C.clone().add(V(0.55, -0.95, 0.65)),
      nucleus_h3k27ac: NUC_C.clone().add(V(0.28, 0.32, 0.55)),
      axon_hillock: HILLOCK_C.clone().add(V(0.35, 0.42, 0.48)),
      myelin_sheath: V(1.42, 1.98, 0.45),
      node_ranvier: NODE1_C.clone().add(V(0, 0.45, 0.45)),
      nav17: NODE1_C.clone().add(V(0.05, 0.68, 0.42)),
      kv12: NODE1_C.clone().add(V(0.56, 0.62, 0.42)),
      nak_reset: NODE1_C.clone().add(V(0, -0.58, 0.42)),
      axon_mt: V(-1.45, 1.28, 0.45),
      terminal_bouton: BOUTON_C.clone().add(V(-0.25, 0.85, 0.52)),
      cav_channel: BOUTON_C.clone().add(V(1.04, 0.85, 0.56)),
      synaptic_vesicle: BOUTON_C.clone().add(V(0.84, 0.05, 0.48)),
      snare_zipper: BOUTON_C.clone().add(V(1.04, -0.18, 0.48)),
      synaptic_cleft: CLEFT_C.clone().add(V(0, 1.05, 0.48)),
      ampa_receptor: V(7.04, 1.96, 0.54),
      nachr_receptor: V(7.04, 0.52, 0.54),
      neuro_atoms: ATOM_C.clone().add(V(0, 0, 0.22)),
    };
    let P = { ...base };
    if (vName === 'soma_epigenetics') {
      P = {
        ...base,
        soma: SOMA_C.clone().add(V(0.75, -0.95, 0.65)),
        nucleus_h3k27ac: NUC_C.clone().add(V(0.32, 0.36, 0.55)),
        dendrites: V(-7.65, 2.45, 0.55),
        axon_hillock: HILLOCK_C.clone().add(V(0.15, 0.38, 0.45)),
      };
    } else if (vName === 'node_ranvier') {
      P = {
        ...base,
        node_ranvier: NODE1_C.clone().add(V(0, 0.28, 0.45)),
        nav17: NODE1_C.clone().add(V(-0.04, 0.68, 0.44)),
        kv12: NODE1_C.clone().add(V(0.56, 0.60, 0.44)),
        nak_reset: NODE1_C.clone().add(V(0.0, -0.58, 0.44)),
        axon_mt: NODE1_C.clone().add(V(-0.22, 0.02, 0.35)),
      };
    } else if (vName === 'synapse') {
      P = {
        ...base,
        terminal_bouton: BOUTON_C.clone().add(V(-0.22, 0.88, 0.52)),
        cav_channel: BOUTON_C.clone().add(V(1.02, 0.78, 0.58)),
        synaptic_vesicle: BOUTON_C.clone().add(V(0.84, 0.04, 0.50)),
        snare_zipper: BOUTON_C.clone().add(V(1.04, -0.22, 0.50)),
        synaptic_cleft: CLEFT_C.clone().add(V(0, 0.95, 0.48)),
        ampa_receptor: V(7.02, 1.94, 0.55),
        nachr_receptor: V(7.02, 0.48, 0.55),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        neuro_atoms: ATOM_C.clone().add(V(0, 0, 0.24)),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS: Record<string, { c: THREE.Vector3; r: number; dir: THREE.Vector3 } | null> = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD: Record<string, number> = {
      dendrites: 2.8,
      soma: 2.6,
      nucleus_h3k27ac: 1.9,
      axon_hillock: 1.8,
      myelin_sheath: 2.2,
      node_ranvier: 1.9,
      nav17: 1.6,
      kv12: 1.6,
      nak_reset: 1.7,
      axon_mt: 2.4,
      terminal_bouton: 2.2,
      cav_channel: 1.7,
      synaptic_vesicle: 1.6,
      snare_zipper: 1.5,
      synaptic_cleft: 2.1,
      ampa_receptor: 1.7,
      nachr_receptor: 1.7,
      neuro_atoms: 2.4,
    };
    const DIRS: Record<string, THREE.Vector3> = {
      dendrites: V(0.08, 0.14, 0.98).normalize(),
      soma: V(0.14, 0.14, 0.98).normalize(),
      nucleus_h3k27ac: V(0.16, 0.12, 0.98).normalize(),
      node_ranvier: V(0.0, 0.14, 0.99).normalize(),
      nav17: V(0.04, 0.16, 0.98).normalize(),
      kv12: V(0.06, 0.14, 0.99).normalize(),
      nak_reset: V(0.04, -0.06, 0.99).normalize(),
      terminal_bouton: V(-0.08, 0.12, 0.99).normalize(),
      snare_zipper: V(0.05, 0.10, 0.99).normalize(),
      ampa_receptor: V(-0.10, 0.10, 0.99).normalize(),
      nachr_receptor: V(-0.10, 0.08, 0.99).normalize(),
      neuro_atoms: V(0.0, 0.02, 1.0).normalize(),
    };
    const dir = DIRS[k] ?? V(0.06, 0.12, 0.99).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.0, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    dendrites: ['soma'],
    soma: ['nucleus_h3k27ac', 'dendrites', 'axon_hillock'],
    nucleus_h3k27ac: ['soma'],
    axon_hillock: ['soma', 'nav17', 'axon_mt'],
    myelin_sheath: ['node_ranvier', 'axon_mt'],
    node_ranvier: ['nav17', 'kv12', 'nak_reset', 'myelin_sheath'],
    nav17: ['node_ranvier', 'axon_hillock'],
    kv12: ['node_ranvier'],
    nak_reset: ['node_ranvier'],
    axon_mt: ['soma', 'myelin_sheath', 'terminal_bouton'],
    terminal_bouton: ['cav_channel', 'synaptic_vesicle', 'snare_zipper'],
    cav_channel: ['terminal_bouton', 'snare_zipper'],
    synaptic_vesicle: ['snare_zipper', 'terminal_bouton'],
    snare_zipper: ['synaptic_vesicle', 'cav_channel', 'terminal_bouton'],
    synaptic_cleft: ['ampa_receptor', 'nachr_receptor', 'terminal_bouton'],
    ampa_receptor: ['synaptic_cleft'],
    nachr_receptor: ['synaptic_cleft'],
  };
  const saved = new Map<any, any>();
  const hidden: THREE.Object3D[] = [];
  let ghostArgs: [string[], number, boolean] | null = null;
  let OBJS: Record<string, THREE.Object3D[]> | null = null;
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
    cell.traverse((o: any) => {
      const k = o.material && of.get(o.material);
      if (k) (out[k] ??= []).push(o);
    });
    return out;
  }
  function ghost(keep: string[] | null = null, amount = 0.1, hide = false) {
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
      r.mats.forEach((m: any) => {
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
      r.imp.forEach((m: any) => {
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

  function setState(m: any) {
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
      caps.visible = cutExtras.visible = cutOn;
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
  // 12. Main Animation Loop & Build Sequence
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 5.0) / 24));
      cell.rotation.y = 0.045 * Math.sin(sway * 0.11);
      updateBiomechanics(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.3, camera.position.distanceTo(controls.target) / 15.0));
    cell.updateMatrixWorld();
    updateAllCuts();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) {
      const k = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach((m: any) => {
        if (m.emissive) {
          m.emissive.copy(c);
          m.emissiveIntensity = 0.28 + 0.78 * k;
        }
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
    buildSomaAndDendrites(T);
    buildAxonAndMyelin();
    buildNodesOfRanvier(T);
    buildChemicalSynapse(T);
    buildAtomicNeuroInset();
    updateBiomechanics(0.18);
    // Warm up live streams so all 6 neural flow species populate immediately on frame 1
    for (let s = 0; s < 110; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('action_potential', true);
    cell.updateMatrixWorld();
    updateAllCuts();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // 13. Explorer postMessage Protocol & window.__cell Debug Contract
  // -------------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = (m: any) => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
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
        glyph(cv.getContext('2d')!, g, 3, 3, 38, colour);
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
        tagPts = (m.points ?? m.tags ?? []).map((k: string) => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'mode') setMode(m.mode, true);
      if (m.cmd === 'track' || m.cmd === 'tags') {
        const list = m.points ?? m.tags ?? [];
        tagPts = list.map((x: any) => {
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
        speed.value = m.v;
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

  (window as any).__cell = {
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
    get nodeMv() { return currentNodeMv; },
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
    setLook: (k: string) => {
      organelleLook = LOOKS.includes(k as any) ? (k as any) : k === 'glass' || k === 'xray' ? 'see-through' : 'gel';
      applyLook();
    },
    get sites() { return SITES; },
    get flows() { return live; },
    get procs() {
      return {
        ...FLOW_COUNTS,
        apWaveCount,
        snareFusionCount,
        nodeMv: Math.round(currentNodeMv),
        mode,
      };
    },
    get views() { return VIEWS; },
    pointsOf,
    setMol: (k: string | null) => { molHi = k; },
    step: (dt = 0.05, n = 1) => {
      for (let i = 0; i < n; i++) {
        updateBiomechanics(dt);
        updateFlows(dt);
      }
    },
    shot: () => {
      cell.updateMatrixWorld();
      updateAllCuts();
      composer.render();
      return renderer.domElement.toDataURL('image/png');
    },
  };
});
