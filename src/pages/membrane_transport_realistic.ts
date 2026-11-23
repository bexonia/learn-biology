// @ts-nocheck
import * as THREE from 'three';
import { PDB_BIOENERGETICS } from '../molecules/pdb_bioenergetics.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  capStrip,
  shellGeo,
  blobGeo,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  col,
} from '../index.js';

runBiologyApp(20261123, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Spatial Architecture & Multi-Scale Framing (Cleanly between #legend & #flows):
  //   Upper Stage (Y = +3.10): Side-by-side Animal Cell (-3.15) vs Walled Plant Cell (+3.15)
  //   Lower Stage (Y = -2.05): Continuous 5 nm POPC Phospholipid Bilayer displaying left->right:
  //     1. Simple Diffusion (-5.65)  2. Aquaporin AQP1 1J4N (-3.05)  3. GLUT1 4PYP (-0.35)
  //     4. Na+/K+-ATPase 3WGU (+2.35) & V_m = -70 mV bars (+3.70)
  //     5. Clathrin Endocytic Pit 1XI4 (+5.15) & SNARE Exocytic Dock 1SFC (+6.75)
  //   Lower-Right Optical Inset (Y = -5.05): Circular atomic comparator (Na+, K+, H2O, POPC)
  // -------------------------------------------------------------------------
  const NM = 0.25; // Molecular bilayer scale: 5 nm bilayer thickness ~ 1.38-1.50 scene units

  const ANIMAL_C = V(-3.15, 3.45, 0.20);
  const PLANT_C = V(3.15, 3.45, 0.20);

  const Y_MEM = -2.15;
  const Z_MEM = 0.20;
  const H_BILAYER = 1.44; // Outer leaflet Y = -1.43, Inner leaflet Y = -2.87
  const X_SIMPLE = -5.65;
  const X_AQP = -3.05;
  const X_GLUT = -0.35;
  const X_NAK = 2.30;
  const X_VM = 3.82;
  const X_CLATH = 5.38;
  const X_SNARE = 6.95;

  const CLATH_C = V(X_CLATH, Y_MEM - 0.68, Z_MEM + 0.42);
  const SNARE_C = V(X_SNARE, Y_MEM - 0.62, Z_MEM + 0.44);
  const ATOM_C = V(6.08, -5.32, 1.15);

  // Exact 5 required camera VIEWS (NON-NEGOTIABLE contract)
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.18, 0.40, 36.8), V(0.12, -0.35, 0.22)],
    ['tonicity', V(0.05, 3.90, 20.6), V(0.0, 3.42, 0.20)],
    ['bilayer_passive', V(-3.05, -1.72, 14.8), V(-3.05, -2.35, 0.35)],
    ['active_pump', V(2.92, -1.78, 11.4), V(2.98, -2.35, 0.35)],
    ['vesicular_atoms', V(6.05, -3.50, 15.6), V(6.05, -3.82, 0.65)],
  ];
  let view = 0;
  let curView = 'overview';

  type TonicityMode = 'isotonic' | 'hypotonic' | 'hypertonic';
  const MODE_ORDER: readonly TonicityMode[] = ['isotonic', 'hypotonic', 'hypertonic'];
  const MODE_LABEL: Record<TonicityMode, string> = {
    isotonic: 'Tonicity: Isotonic (Balanced)',
    hypotonic: 'Tonicity: Hypotonic (Lysis vs Turgid)',
    hypertonic: 'Tonicity: Hypertonic (Crenation vs Plasmolysis)',
  };
  let mode: TonicityMode = 'isotonic';
  let tonicityVal = 0; // -1 = hypotonic, 0 = isotonic, +1 = hypertonic
  let targetTonicityVal = 0;

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#13243e',
    bgMid: '#070f1f',
    bgOuter: '#02040a',
    keyColor: '#fff4e6',
    keyIntensity: 2.85,
    rimColor: '#6cd2ff',
    rimIntensity: 1.72,
    lampColor: '#ffb494',
    lampIntensity: 14.5,
    lampPos: [-0.8, 3.2, 7.2],
    bloomStrength: 0.22,
    bloomRadius: 0.44,
    bloomThreshold: 0.89,
    exposure: 0.94,
    bokehCount: 220,
    bokehColor: '#66c6ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated secondary microscopy accent lamps for plant turgor, bilayer pumps, and vesicular/atomic theater
  const plantLamp = new THREE.PointLight('#48f0aa', 9.5, 22, 2);
  plantLamp.position.set(PLANT_C.x + 1.8, PLANT_C.y + 1.6, 5.2);
  const bilayerLamp = new THREE.PointLight('#58d8ff', 10.5, 24, 2);
  bilayerLamp.position.set(-1.6, Y_MEM + 1.4, 5.6);
  const pumpLamp = new THREE.PointLight('#ffc46e', 10.5, 20, 2);
  pumpLamp.position.set(X_NAK + 1.2, Y_MEM - 0.6, 5.2);
  const insetLamp = new THREE.PointLight('#a6d4ff', 9.0, 18, 2);
  insetLamp.position.set(ATOM_C.x - 0.6, ATOM_C.y + 1.2, 5.4);
  scene.add(plantLamp, bilayerLamp, pumpLamp, insetLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  const caps = new THREE.Group();
  const cutExtras = new THREE.Group();
  cell.add(caps, cutExtras);

  // Separate cutaway planes for the Animal Cell (front-right wedge), Plant Cell (front-right wedge), and Bilayer front slice
  const ANI_CUT_LOCAL = [
    new THREE.Plane(V(-1, 0, 0), ANIMAL_C.x + 0.02),
    new THREE.Plane(V(0, 0, -1), ANIMAL_C.z + 0.05),
  ];
  const ANI_CUT = ANI_CUT_LOCAL.map(p => p.clone());
  const ANI_CLIP = { clippingPlanes: ANI_CUT, clipIntersection: true, clipShadows: true };

  const PLT_CUT_LOCAL = [
    new THREE.Plane(V(-1, 0, 0), PLANT_C.x + 0.02),
    new THREE.Plane(V(0, 0, -1), PLANT_C.z + 0.05),
  ];
  const PLT_CUT = PLT_CUT_LOCAL.map(p => p.clone());
  const PLT_CLIP = { clippingPlanes: PLT_CUT, clipIntersection: true, clipShadows: true };

  const MEM_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), Z_MEM + 1.38)];
  const MEM_CUT = MEM_CUT_LOCAL.map(p => p.clone());
  const MEM_CLIP = { clippingPlanes: MEM_CUT, clipIntersection: false, clipShadows: true };

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
    applySet(ANI_CUT_LOCAL, ANI_CUT);
    applySet(PLT_CUT_LOCAL, PLT_CUT);
    applySet(MEM_CUT_LOCAL, MEM_CUT);
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
  // Exact 16 PARTS & REG Keys (NON-NEGOTIABLE Phase 16B Contract)
  // -------------------------------------------------------------------------
  const PARTS: Array<[string, string, string]> = [
    ['animal_cell', 'Animal cell (wall-less: lysis / crenation)', '#ff687c'],
    ['plant_cell', 'Plant protoplast (turgid / plasmolysis)', '#3ce8a4'],
    ['cell_wall', 'Cellulose cell wall (rigid turgor cage)', '#2cc96e'],
    ['vacuole', 'Central vacuole (tonoplast H₂O vault)', '#48b8ff'],
    ['bilayer', '5 nm POPC phospholipid bilayer & sterols', '#4fd8e8'],
    ['simple_diff', 'Simple diffusion (O₂ · CO₂ · 0 ATP)', '#68f2ff'],
    ['aquaporin', 'Aquaporin AQP1 pore (PDB 1J4N · NPA)', '#38a6ff'],
    ['water_flow', 'Single-file osmotic H₂O dipole stream', '#70dcff'],
    ['glut1', 'GLUT1 glucose carrier (PDB 4PYP)', '#4ef09c'],
    ['nak_pump', 'Na⁺/K⁺-ATPase pump (PDB 3WGU · 3:2)', '#b678ff'],
    ['atp_hydrolysis', 'ATP → ADP + Pᵢ phosphorylation cleft', '#ffbe48'],
    ['membrane_voltage', 'Membrane voltage (Vₘ = −70 mV bars)', '#ff8c42'],
    ['clathrin_pit', 'Clathrin endocytic pit (PDB 1XI4)', '#e072ff'],
    ['snare_fusion', 'SNARE exocytic zipper (PDB 1SFC)', '#ff785c'],
    ['vesicle_cargo', 'Bulk transport vesicles & cargo', '#ffd468'],
    ['ion_atoms', 'Atomic inset (Na⁺ · K⁺ · H₂O · POPC)', '#82e4ff'],
  ];

  const INFO: Record<string, [string, string]> = {
    animal_cell: [
      'Wall-less eukaryotic plasma membrane with cortical actin cytoskeleton and biconcave/rounded profile',
      'Swells to osmotic lysis in hypotonic fluid, stays stable in isotonic, and spikes into crenation in hypertonic',
    ],
    plant_cell: [
      'Living plant protoplast plasma membrane enclosed inside the rigid cellulose cell wall',
      'Presses tight against the cell wall during turgor and detaches inward (plasmolysis) with Hechtian strands in hypertonic media',
    ],
    cell_wall: [
      'Cross-linked β-1,4-glucan cellulose microfibril scaffold perforated by plasmodesmata channels',
      'Resists internal hydrostatic turgor pressure so plant cells stay firm rather than bursting in hypotonic water',
    ],
    vacuole: [
      'Large fluid-filled central vacuole bounded by a selectively permeable tonoplast membrane',
      'Expands to generate turgor pressure against the cell wall in hypotonic solutions and shrinks sharply during plasmolysis',
    ],
    bilayer: [
      '5 nm fluid-mosaic amphipathic POPC phospholipid bilayer stabilized by intercalated cholesterol rings',
      'Creates a 3 nm hydrophobic fatty-acyl barrier that blocks charged ions and polar sugars while permitting nonpolar gases',
    ],
    simple_diff: [
      'Direct passive partition of small uncharged nonpolar molecules (O₂ and CO₂) across fatty-acyl tails',
      'Moves strictly down concentration gradients with zero ATP expenditure and zero carrier protein required',
    ],
    aquaporin: [
      'Real RCSB PDB 1J4N Aquaporin-1 homotetramer forming four narrow hourglass transmembrane water pores',
      'Central Asn-Pro-Ala (NPA) selectivity waist flips each H₂O dipole 180° to stream ~10⁹ H₂O/s while blocking H⁺ leakage',
    ],
    water_flow: [
      'Single-file chain of polar H₂O molecules traversing AQP1 hourglass pores down water potential ΔΨw',
      'Reverses net flow direction instantaneously between Hypotonic (inward), Isotonic (balanced), and Hypertonic (outward)',
    ],
    glut1: [
      'Real RCSB PDB 4PYP human GLUT1 (SLC2A1) 12-transmembrane-helix major facilitator uniporter',
      'Rocks between outward-open, occluded, and inward-open states to deliver polar D-Glucose down ΔC with zero ATP',
    ],
    nak_pump: [
      'Real RCSB PDB 3WGU αβγ Na⁺/K⁺-ATPase P-type ion pump spanning the plasma membrane',
      'Actively exports 3 Na⁺ out and imports 2 K⁺ in against both gradients per cycle, sustaining cell volume and excitability',
    ],
    atp_hydrolysis: [
      'Cytosolic nucleotide-binding (N) and phosphorylation (P) cleft on the α-subunit of Na⁺/K⁺-ATPase',
      'Cleaves 1 ATP → ADP + Pᵢ to autophosphorylate Asp369, driving the E₁ → E₂ conformational switch',
    ],
    membrane_voltage: [
      'Transmembrane charge separation (+ outside, − inside) across the dielectric lipid bilayer',
      'Electrogenic 3 Na⁺ out / 2 K⁺ in pumping plus K⁺ leak establishes a resting potential near Vₘ = −70 mV',
    ],
    clathrin_pit: [
      'Real RCSB PDB 1XI4 three-legged Clathrin triskelion lattice assembling around an invaginating coated pit',
      'Bends the plasma membrane inward while a dynamin GTPase collar pinches off internalized endocytic vesicles',
    ],
    snare_fusion: [
      'Real RCSB PDB 1SFC four-helix coiled-coil SNARE complex (Synaptobrevin, Syntaxin-1A, SNAP-25)',
      'Zippers vesicle (v-SNARE) and target (t-SNARE) helices together to overcome lipid repulsion and open an exocytic fusion pore',
    ],
    vesicle_cargo: [
      'Membrane-bound endocytic and secretory transport vesicles shuttling bulk macromolecules and receptors',
      'Moves cargo too large for transmembrane channels using ATP/GTP and cytoskeletal motor guidance',
    ],
    ion_atoms: [
      'Atomic-scale comparison of bare/hydrated Na⁺ (0.102 nm) vs K⁺ (0.138 nm), bent H₂O (104.5°), and POPC headgroup',
      'Explains selectivity by ionic radius, hydration shell energy, water dipole polarity, and amphipathic C/H/N/O/P chemistry',
    ],
  };

  // -------------------------------------------------------------------------
  // Material Registry & Cinema PBR Helpers (`makeCinemaProteinMat` + `cinemaShellMat`)
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

  // Cinema PBR cryo-EM protein shader/material factory with backlit SSS + organic bump
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
      roughness: opts.roughness ?? 0.32,
      metalness: 0.05,
      clearcoat: opts.clearcoat ?? 0.44,
      clearcoatRoughness: 0.24,
      sheen: 0.42,
      sheenColor: new THREE.Color(opts.sheenColor ?? '#edf8ff'),
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
      sssIntensity: (opts.sssIntensity as number) ?? 0.30,
      iridescence: (opts.iridescence as number) ?? 0.52,
      thickness: (opts.thickness as number) ?? 0.48,
      roughness: (opts.roughness as number) ?? 0.12,
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
  const grown = (a: Float32Array) => {
    const b = new Float32Array(a.length * 2);
    b.set(a);
    return b;
  };

  function balls(k: string, parent: THREE.Object3D = cell, clip = false, cutPlanes: THREE.Plane[] = ANI_CUT) {
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

  // Dynamic tonicity animation handles
  let animalShellGeo: THREE.BufferGeometry | null = null;
  let animalBaseDirs: Float32Array | null = null;
  let animalBaseRadii: Float32Array | null = null;
  let animalInnerGeo: THREE.BufferGeometry | null = null;
  let animalInnerDirs: Float32Array | null = null;
  let animalInnerRadii: Float32Array | null = null;
  let animalLysisGroup: THREE.Group | null = null;
  let animalPlaqueMat: THREE.MeshStandardMaterial | null = null;
  let animalPlaqueCv: HTMLCanvasElement | null = null;
  let animalPlaqueTex: THREE.CanvasTexture | null = null;

  let plantProtoGeo: THREE.BufferGeometry | null = null;
  let plantProtoBasePos: Float32Array | null = null;
  let plantProtoNorms: Float32Array | null = null;
  let plantVacGeo: THREE.BufferGeometry | null = null;
  let plantVacBasePos: Float32Array | null = null;
  let plantWallGroup: THREE.Group | null = null;
  let plantTurgorArrows: THREE.Group | null = null;
  let plantHechtianGroup: THREE.Group | null = null;
  let plantChloroGroup: THREE.Group | null = null;
  let plantPlaqueCv: HTMLCanvasElement | null = null;
  let plantPlaqueTex: THREE.CanvasTexture | null = null;

  // Dynamic molecular nanomachine animation handles
  const aqpWaterDipoles: Array<{ grp: THREE.Group; u0: number }> = [];
  let glutLobeN: THREE.Group | null = null;
  let glutLobeC: THREE.Group | null = null;
  let glutGlucoseCargo: THREE.Group | null = null;
  let nakHeroGrp: THREE.Group | null = null;
  let atpFlashRing: THREE.Mesh | null = null;
  let atpPiBead: THREE.Mesh | null = null;
  let atpMoleculeGrp: THREE.Group | null = null;
  const nakNaCargo: THREE.Mesh[] = [];
  const nakKCargo: THREE.Mesh[] = [];
  let clathrinBudGrp: THREE.Group | null = null;
  let snareVesicleGrp: THREE.Group | null = null;
  let snareZipperGrp: THREE.Group | null = null;
  const voltageGlowBars: THREE.Mesh[] = [];
  const simpleGasBeads: Array<{ mesh: THREE.Mesh; u0: number; xOff: number; zOff: number; dir: number; isO2: boolean }> = [];

  // Helper to paint clean glowing status plaques below the Animal Cell and Plant Cell
  function paintStatusPlaque(
    cv: HTMLCanvasElement,
    tex: THREE.CanvasTexture,
    title: string,
    subtitle: string,
    titleColor: string,
    borderColor: string
  ) {
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cv.width, cv.height);
    // Pill card backdrop
    g.fillStyle = 'rgba(7, 13, 24, 0.84)';
    g.strokeStyle = borderColor;
    g.lineWidth = 4;
    const r = 24, x = 8, y = 8, w = cv.width - 16, h = cv.height - 16;
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
    g.font = '700 32px system-ui, -apple-system, sans-serif';
    g.fillStyle = titleColor;
    g.fillText(title, cv.width * 0.5, 44);
    g.font = '600 24px system-ui, -apple-system, sans-serif';
    g.fillStyle = '#dcebfa';
    g.fillText(subtitle, cv.width * 0.5, 86);
    tex.needsUpdate = true;
  }

  function updateCellPlaques() {
    if (animalPlaqueCv && animalPlaqueTex) {
      if (mode === 'hypotonic') {
        paintStatusPlaque(animalPlaqueCv, animalPlaqueTex, 'ANIMAL CELL · LYSIS', 'H₂O In → Swelling & Rupture', '#ff7a92', 'rgba(255,108,136,0.85)');
      } else if (mode === 'hypertonic') {
        paintStatusPlaque(animalPlaqueCv, animalPlaqueTex, 'ANIMAL CELL · CRENATION', 'H₂O Out → Spiked Shriveling', '#ffbe66', 'rgba(255,184,92,0.85)');
      } else {
        paintStatusPlaque(animalPlaqueCv, animalPlaqueTex, 'ANIMAL CELL · ISOTONIC', 'H₂O In = Out · Homeostasis', '#7eeaff', 'rgba(116,226,255,0.75)');
      }
    }
    if (plantPlaqueCv && plantPlaqueTex) {
      if (mode === 'hypotonic') {
        paintStatusPlaque(plantPlaqueCv, plantPlaqueTex, 'PLANT CELL · TURGID', 'Vacuole Full · Wall Resists Burst', '#56ffb8', 'rgba(78,244,174,0.88)');
      } else if (mode === 'hypertonic') {
        paintStatusPlaque(plantPlaqueCv, plantPlaqueTex, 'PLANT CELL · PLASMOLYSIS', 'Membrane Pulls Off Rigid Wall', '#ffb868', 'rgba(255,180,90,0.85)');
      } else {
        paintStatusPlaque(plantPlaqueCv, plantPlaqueTex, 'PLANT CELL · FLACCID', 'Balanced H₂O · Zero Turgor', '#6ee8d8', 'rgba(104,228,212,0.75)');
      }
    }
  }

  // -------------------------------------------------------------------------
  // 1. Decode ALL 5 Real RCSB PDBs from PDB_BIOENERGETICS (`buildPdbSurfaceGeo`)
  //    1. aqp1     (1J4N — Aquaporin-1 monomer -> assembled as homotetramer)
  //    2. glut1    (4PYP — GLUT1 uniporter -> split N-lobe & C-lobe rocker!)
  //    3. nak_pump (3WGU — Na+/K+-ATPase αβγ heterotrimer)
  //    4. clathrin (1XI4 — 6-chain Clathrin triskelion basket)
  //    5. snare    (1SFC — 4-helix SNARE fusion zipper bundle)
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    const mAqp = pdb.getModel(PDB_BIOENERGETICS, 'aqp1');
    const mGlut = pdb.getModel(PDB_BIOENERGETICS, 'glut1');
    const mNak = pdb.getModel(PDB_BIOENERGETICS, 'nak_pump');
    const mClath = pdb.getModel(PDB_BIOENERGETICS, 'clathrin');
    const mSnare = pdb.getModel(PDB_BIOENERGETICS, 'snare');

    // 1. AQP1 (1J4N, span Z = 62 Å -> rotateX(-PI/2) puts hourglass channel along vertical +Y!)
    const cAqpOuter = col('#2ea0ff');
    const cAqpInner = col('#4cf2ff');
    const cAqpNpa = col('#ffd452');
    const geoAqp = buildPdbSurfaceGeo(mAqp, {
      nm: NM,
      scale: 0.94,
      maxDim: 34,
      sigmaAng: 3.1,
      iso: 0.39,
      aoStrength: 0.56,
      colorFn: (_grp, part, idx) => {
        // Highlight central NPA selectivity motif residues in radiant gold
        if ((idx > 140 && idx < 178) || (idx > 345 && idx < 385)) return cAqpNpa;
        return part === 1 ? cAqpInner : cAqpOuter;
      },
    });
    geoAqp.rotateX(-Math.PI / 2);

    // 2. GLUT1 (4PYP, 750 beads, split into N-terminal lobe & C-terminal lobe for real alternating-access rocking!)
    const cGlutN = col('#2ce892');
    const cGlutN2 = col('#72ffba');
    const cGlutC = col('#1cc8c4');
    const cGlutC2 = col('#64f4f0');
    const geoGlutN = buildPdbSurfaceGeo(mGlut, {
      nm: NM,
      scale: 1.04,
      maxDim: 32,
      sigmaAng: 3.1,
      iso: 0.38,
      aoStrength: 0.54,
      filter: (_g, _p, idx) => idx < 375,
      colorFn: (_g, part) => (part === 1 ? cGlutN2 : cGlutN),
    });
    const geoGlutC = buildPdbSurfaceGeo(mGlut, {
      nm: NM,
      scale: 1.04,
      maxDim: 32,
      sigmaAng: 3.1,
      iso: 0.38,
      aoStrength: 0.54,
      filter: (_g, _p, idx) => idx >= 375,
      colorFn: (_g, part) => (part === 1 ? cGlutC2 : cGlutC),
    });
    const geoGlutFull = buildPdbSurfaceGeo(mGlut, {
      nm: NM,
      scale: 0.96,
      maxDim: 30,
      sigmaAng: 3.2,
      iso: 0.40,
      aoStrength: 0.52,
      colorFn: (_g, _p, idx) => (idx < 375 ? cGlutN : cGlutC),
    });
    // Align 4PYP principal axis (~[-0.49, 0.82, 0.29]) upright along +Y
    const qGlut = new THREE.Quaternion().setFromUnitVectors(V(-0.49, 0.82, 0.29).normalize(), UP);
    [geoGlutN, geoGlutC, geoGlutFull].forEach(g => g.applyQuaternion(qGlut));

    // 3. Na+/K+-ATPase (3WGU, 3 chains: α=0 violet/magenta, β=1 sky azure extracellular, γ=2 amber)
    //    Z span = 146.7 Å (+Z is β extracellular ectodomain, -Z is α cytosolic ATP domain) -> rotateX(-PI/2) puts +Z to +Y!
    const cNakAlpha = col('#a260ff');
    const cNakAlphaAct = col('#d878ff');
    const cNakBeta = col('#52c4ff');
    const cNakGamma = col('#ffbe4c');
    const geoNak = buildPdbSurfaceGeo(mNak, {
      nm: NM,
      scale: 0.86,
      maxDim: 42,
      sigmaAng: 3.3,
      iso: 0.38,
      aoStrength: 0.58,
      colorFn: (grp, part) => {
        if (grp === 1) return part === 1 ? col('#8ce0ff') : cNakBeta;
        if (grp === 2) return cNakGamma;
        return part === 1 ? cNakAlphaAct : cNakAlpha;
      },
    });
    geoNak.rotateX(-Math.PI / 2);

    // 4. Clathrin Triskelion (1XI4, 6 chains: 3 heavy chains + 3 light chains, span ~224 Å)
    const cClathHeavy = [col('#d45eff'), col('#b452f0'), col('#ee74d8')];
    const cClathLight = col('#ffcf62');
    const geoClath = buildPdbSurfaceGeo(mClath, {
      nm: NM,
      scale: 0.24, // Tight geodesic scale so 6 real 1XI4 triskelia cradle the endocytic pit cleanly with zero spillover!
      maxDim: 34,
      sigmaAng: 6.2,
      iso: 0.34,
      aoStrength: 0.50,
      colorFn: grp => (grp >= 3 ? cClathLight : cClathHeavy[grp % 3]),
    });

    // 5. SNARE 4-Helix Fusion Zipper Bundle (1SFC, 4 chains: Synaptobrevin, Syntaxin-1A, SNAP-25 N/C)
    const cSnareChains = [col('#ff6454'), col('#ffaa42'), col('#46e8d4'), col('#60a8ff')];
    const geoSnare = buildPdbSurfaceGeo(mSnare, {
      nm: NM,
      scale: 0.56,
      maxDim: 32,
      sigmaAng: 3.6,
      iso: 0.37,
      aoStrength: 0.52,
      colorFn: grp => cSnareChains[grp % 4],
    });
    // Align 1SFC 4-helix coiled-coil long axis ([0.60, 0.33, -0.73]) along +X so zipper bundles bridge horizontally!
    const qSnare = new THREE.Quaternion().setFromUnitVectors(V(0.60, 0.33, -0.73).normalize(), V(1, 0, 0));
    geoSnare.applyQuaternion(qSnare);

    return { geoAqp, geoGlutN, geoGlutC, geoGlutFull, geoNak, geoClath, geoSnare };
  }

  // -------------------------------------------------------------------------
  // 2. UPPER-LEFT HERO: Wall-less Animal Cell (`animal_cell`)
  //    Deforms live across Hypotonic (swollen + lysis rupture), Isotonic (healthy),
  //    and Hypertonic (spiked crenated echinocyte)!
  // -------------------------------------------------------------------------
  function buildAnimalCell() {
    const grp = new THREE.Group();
    grp.position.copy(ANIMAL_C);
    cell.add(grp);

    const R_BASE = 1.62;
    function aniBaseRadius(d: THREE.Vector3): number {
      // Gentle living slightly oblate mammalian cell silhouette
      const oblate = 1 - 0.08 * d.y * d.y;
      const n = fbm(d.x * 2.1 + 1.4, d.y * 2.1 - 0.8, d.z * 2.1 + 2.3, 3);
      return R_BASE * oblate * (1 + 0.03 * (n - 0.5) * 2);
    }

    // Outer wet-gel Cinema plasma membrane (Shell #1 in `shells`!)
    const gOut = shellGeo(V(0, 0, 0), aniBaseRadius, 92);
    const pOut = gOut.attributes.position;
    animalBaseDirs = new Float32Array(pOut.count * 3);
    animalBaseRadii = new Float32Array(pOut.count);
    const tv = V();
    for (let i = 0; i < pOut.count; i++) {
      tv.fromBufferAttribute(pOut, i);
      const r = tv.length();
      animalBaseRadii[i] = r;
      tv.divideScalar(r || 1);
      animalBaseDirs[i * 3] = tv.x;
      animalBaseDirs[i * 3 + 1] = tv.y;
      animalBaseDirs[i * 3 + 2] = tv.z;
    }
    animalShellGeo = gOut;

    const aniMemMat = cinemaShellMat('animal_cell', '#cf3852', '#ff9aaa', ANI_CLIP, {
      attenCol: '#a62640',
      attenDist: 3.4,
      sssColor: '#ff708c',
      sssIntensity: 0.36,
      iridescence: 0.54,
      thickness: 0.46,
      roughness: 0.12,
      sheenColor: '#ffd4e0',
      normalMap: bump(10, 8),
      normalScale: 0.24,
    });
    grp.add(shade(new THREE.Mesh(gOut, aniMemMat), true, true));

    // Inner rosy cytosolic cavity wall revealed cleanly by the 90° cutaway
    const gIn = shellGeo(V(0, 0, 0), d => aniBaseRadius(d) - 0.12, 68);
    const pIn = gIn.attributes.position;
    animalInnerDirs = new Float32Array(pIn.count * 3);
    animalInnerRadii = new Float32Array(pIn.count);
    for (let i = 0; i < pIn.count; i++) {
      tv.fromBufferAttribute(pIn, i);
      const r = tv.length();
      animalInnerRadii[i] = r;
      tv.divideScalar(r || 1);
      animalInnerDirs[i * 3] = tv.x;
      animalInnerDirs[i * 3 + 1] = tv.y;
      animalInnerDirs[i * 3 + 2] = tv.z;
    }
    animalInnerGeo = gIn;

    const aniInMat = reg(
      'animal_cell',
      applyBacklitSSS(
        phys(
          {
            color: '#461828',
            roughness: 0.64,
            clearcoat: 0.14,
            normalMap: bump(8, 6),
            normalScale: new THREE.Vector2(0.14, 0.14),
            side: THREE.BackSide,
          },
          ANI_CLIP
        ),
        '#ff6686',
        0.24,
        2.5
      )
    );
    grp.add(new THREE.Mesh(gIn, aniInMat));

    // Interior eukaryotic nucleus & tiny organelle accents visible inside the cutaway animal cell
    const S_ORG = sculpt('animal_cell', grp, {
      emissive: '#3a1432',
      emissiveIntensity: 0.30,
      roughness: 0.30,
      clearcoat: 0.48,
      sssColor: '#ff8eb0',
    });
    // Nucleus core slightly tucked inside left-rear
    S_ORG.lobe(V(-0.24, 0.08, -0.20), 0.56, 0.52, 0.50, col('#8c4ec8'));
    S_ORG.add(V(-0.18, 0.16, -0.02), 0.24, col('#d29aff')); // nucleolus
    // Compact mitochondria & ER arcs inside cytosol
    const mitoPts = [
      [V(0.55, -0.45, 0.22), 0.26, 0.12, 0.12],
      [V(-0.62, -0.52, 0.35), 0.24, 0.11, 0.11],
      [V(0.45, 0.58, -0.18), 0.24, 0.11, 0.11],
      [V(-0.58, 0.52, 0.28), 0.22, 0.10, 0.10],
    ] as const;
    mitoPts.forEach(([pos, rx, ry, rz], i) => {
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.4 * i, 0.7 * i, 0.5));
      S_ORG.lobe(pos, rx, ry, rz, col('#ff9868'), q);
      placed++;
    });
    // Sub-cortical actin mesh fibers
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      const p0 = V(Math.cos(a) * 0.92, Math.sin(a) * 0.76, -0.42);
      const p1 = V(Math.cos(a + 0.5) * 0.85, Math.sin(a + 0.5) * 0.70, 0.25);
      S_ORG.stick(p0, p1, 0.018, col('#ff8ea8'), col('#ffb4c6'));
      placed++;
    }
    S_ORG.done();

    // Hypotonic Osmotic Lysis Rupture Fissure & Bursting Droplets (visible when tonicityVal < -0.25!)
    animalLysisGroup = new THREE.Group();
    animalLysisGroup.visible = false;
    grp.add(animalLysisGroup);
    const S_LYSIS = sculpt('animal_cell', animalLysisGroup, {
      emissive: '#ff2850',
      emissiveIntensity: 0.84,
      roughness: 0.18,
      clearcoat: 0.78,
      sssColor: '#ff96ae',
    });
    // Organic torn osmotic breach collar + escaping ruby membrane fragments & aqueous cytoplasmic droplets
    const burstDir = V(0.68, 0.54, 0.48).normalize();
    S_LYSIS.ring(burstDir.clone().multiplyScalar(1.94), burstDir, 0.52, 0.044, col('#ff4268'), 28, 8);
    S_LYSIS.ring(burstDir.clone().multiplyScalar(2.06), burstDir, 0.72, 0.022, col('#ff9eb8'), 32, 8);
    const bU = across(UP, burstDir).normalize();
    const bV = burstDir.clone().cross(bU).normalize();
    for (let k = 0; k < 12; k++) {
      const ang = (k / 12) * Math.PI * 2 + 0.18 * (k % 3);
      const rad = 0.28 + (k % 3) * 0.22;
      const dist = 2.08 + (k % 4) * 0.16;
      const pLip = burstDir.clone().multiplyScalar(dist).addScaledVector(bU, Math.cos(ang) * rad).addScaledVector(bV, Math.sin(ang) * rad);
      const qL = new THREE.Quaternion().setFromEuler(new THREE.Euler(ang, k * 0.7, 0.4));
      if (k % 2 === 0) {
        // Torn lipid membrane shard peeling outward from breach rim
        S_LYSIS.lobe(pLip, 0.13, 0.055, 0.09, col('#ff587a'), qL);
      } else {
        // Escaping aqueous cytosol / H2O lysis droplet
        S_LYSIS.add(pLip.clone().addScaledVector(burstDir, 0.22), 0.15, col('#78ebff'));
      }
      placed++;
    }
    S_LYSIS.done();

    // Status plaque directly beneath the Animal Cell
    animalPlaqueCv = document.createElement('canvas');
    animalPlaqueCv.width = 512;
    animalPlaqueCv.height = 124;
    animalPlaqueTex = new THREE.CanvasTexture(animalPlaqueCv);
    animalPlaqueTex.colorSpace = THREE.SRGBColorSpace;
    animalPlaqueMat = reg(
      'animal_cell',
      new THREE.MeshStandardMaterial({
        map: animalPlaqueTex,
        emissive: '#ffffff',
        emissiveMap: animalPlaqueTex,
        emissiveIntensity: 0.72,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    const aniLbl = new THREE.Mesh(new THREE.PlaneGeometry(3.55, 0.86), animalPlaqueMat);
    aniLbl.position.set(0, -2.26, 0.55);
    grp.add(aniLbl);

    SITES.animal_cell.push(
      ANIMAL_C.clone(),
      ANIMAL_C.clone().add(V(-0.9, 0.6, 0.6)),
      ANIMAL_C.clone().add(V(0.8, -0.5, 0.6))
    );
  }

  // -------------------------------------------------------------------------
  // 3. UPPER-RIGHT HERO: Walled Plant Cell (`cell_wall`, `plant_cell`, `vacuole`)
  //    Rigid hexagonal-prismatic cellulose wall + live morphing plasma membrane
  //    protoplast (turgid / flaccid / plasmolysis + Hechtian strands) + sapphire vacuole!
  // -------------------------------------------------------------------------
  function buildPlantCell() {
    const grp = new THREE.Group();
    grp.position.copy(PLANT_C);
    cell.add(grp);

    // Smooth rounded hexagonal-prismatic plant cell distance helper (p = 4 superellipsoid with subtle facet shoulders)
    const WX = 1.98, WY = 1.62, WZ = 1.46;
    function boxR(d: THREE.Vector3, sx: number, sy: number, sz: number, p = 4.2): number {
      const denom = Math.pow(
        Math.pow(Math.abs(d.x / sx), p) + Math.pow(Math.abs(d.y / sy), p) + Math.pow(Math.abs(d.z / sz), p),
        1 / p
      );
      return 1 / Math.max(1e-5, denom);
    }

    // 3A. Rigid Cellulose Cell Wall (`cell_wall`) — stationary structural cage!
    plantWallGroup = new THREE.Group();
    grp.add(plantWallGroup);

    const wallOuterGeo = shellGeo(V(0, 0, 0), d => {
      const n = fbm(d.x * 3.0 + 4.1, d.y * 3.0, d.z * 3.0 - 2.3, 2);
      return boxR(d, WX, WY, WZ, 4.4) * (1 + 0.015 * (n - 0.5));
    }, 84);
    const wallOuterMat = reg(
      'cell_wall',
      applyBacklitSSS(
        phys(
          {
            color: '#259e58',
            roughness: 0.42,
            metalness: 0.04,
            clearcoat: 0.28,
            sheen: 0.36,
            sheenColor: '#8dffbe',
            normalMap: bump(14, 12),
            normalScale: new THREE.Vector2(0.32, 0.32),
            emissive: '#07361e',
            emissiveIntensity: 0.24,
            side: THREE.DoubleSide,
          },
          PLT_CLIP
        ),
        '#46f598',
        0.26,
        2.6
      )
    );
    plantWallGroup.add(shade(new THREE.Mesh(wallOuterGeo, wallOuterMat), true, true));

    // Inner face of the thick cellulose cell wall
    const wallInnerGeo = shellGeo(V(0, 0, 0), d => boxR(d, WX - 0.18, WY - 0.16, WZ - 0.16, 4.4), 68);
    const wallInnerMat = reg(
      'cell_wall',
      phys(
        {
          color: '#114d2c',
          roughness: 0.62,
          side: THREE.BackSide,
        },
        PLT_CLIP
      )
    );
    plantWallGroup.add(new THREE.Mesh(wallInnerGeo, wallInnerMat));

    // Cutaway cross-section cap strips highlighting middle lamella + primary cellulose wall layers
    const WALL_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.25, '#68f29e'],
      [0.25, 0.72, '#2eb868'],
      [0.72, 1.0, '#187242'],
    ];
    const wallCapMat = reg(
      'cell_wall',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.38,
        emissive: '#0d4a28',
        emissiveIntensity: 0.25,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      const strip = new THREE.Mesh(capStrip(PLANT_C, d => boxR(d, WX, WY, WZ, 4.4), ax, 0.18, WALL_LAYERS, 140), wallCapMat);
      caps.add(strip);
    }

    // Woven cellulose microfibril ribs + plasmodesmata border pores along the rigid wall perimeter
    const S_WALL = sculpt('cell_wall', plantWallGroup, {
      emissive: '#0b4a26',
      emissiveIntensity: 0.26,
      roughness: 0.36,
      sssColor: '#56ff9e',
    });
    for (let k = 0; k < 20; k++) {
      const ang = (k / 20) * Math.PI * 2;
      const d = V(Math.cos(ang), Math.sin(ang) * 0.75, -0.45).normalize();
      if (d.x > 0.05 && d.z > 0.05) continue;
      const r = boxR(d, WX, WY, WZ, 4.4);
      const p0 = d.clone().multiplyScalar(r + 0.02);
      const d2 = V(Math.cos(ang + 0.35), Math.sin(ang + 0.35) * 0.75, -0.35).normalize();
      const p1 = d2.clone().multiplyScalar(boxR(d2, WX, WY, WZ, 4.4) + 0.02);
      S_WALL.stick(p0, p1, 0.032, col('#4ce88c'), col('#84ffb4'));
      placed++;
    }
    S_WALL.done();

    // 3B. Plant Protoplast Plasma Membrane (`plant_cell` — Shell #2 in `shells`!)
    const gProto = shellGeo(V(0, 0, 0), d => boxR(d, WX - 0.26, WY - 0.24, WZ - 0.24, 4.0), 80);
    plantProtoGeo = gProto;
    plantProtoBasePos = new Float32Array(gProto.attributes.position.array);
    plantProtoNorms = new Float32Array(gProto.attributes.normal.array);

    const protoMat = cinemaShellMat('plant_cell', '#22b886', '#98ffdf', PLT_CLIP, {
      attenCol: '#168a6a',
      attenDist: 3.4,
      sssColor: '#5affc8',
      sssIntensity: 0.34,
      iridescence: 0.56,
      thickness: 0.42,
      roughness: 0.12,
      sheenColor: '#ccfff0',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    grp.add(shade(new THREE.Mesh(gProto, protoMat), true, true));

    // Peripheral emerald chloroplasts riding inside the cortical cytoplasm of the plant protoplast
    plantChloroGroup = new THREE.Group();
    grp.add(plantChloroGroup);
    const S_CHL = sculpt('plant_cell', plantChloroGroup, {
      emissive: '#0c5c38',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.56,
      sssColor: '#58ffaa',
    });
    const chloroSlots = [
      V(-1.18, 0.78, 0.22),
      V(-1.25, -0.68, 0.32),
      V(0.95, 0.88, -0.26),
      V(1.12, -0.78, 0.12),
      V(-0.22, 1.04, 0.35),
      V(-0.35, -1.02, 0.30),
      V(0.32, 0.92, 0.52),
    ];
    chloroSlots.forEach((p, idx) => {
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.3 * idx, 0.6 * idx, 0.2));
      S_CHL.lobe(p, 0.28, 0.14, 0.16, col('#24e87c'), q);
      placed++;
    });
    S_CHL.done();

    // 3C. Central Vacuole & Tonoplast (`vacuole` — Shell #3 in `shells`!)
    const gVac = shellGeo(V(0, 0, 0), d => {
      const n = fbm(d.x * 2.2 - 1.5, d.y * 2.2 + 0.9, d.z * 2.2 + 3.1, 3);
      return boxR(d, 1.24, 1.02, 0.92, 3.2) * (1 + 0.04 * (n - 0.5) * 2);
    }, 68);
    plantVacGeo = gVac;
    plantVacBasePos = new Float32Array(gVac.attributes.position.array);

    const vacMat = cinemaShellMat('vacuole', '#1e88e8', '#8ce0ff', {}, {
      attenCol: '#1264c4',
      attenDist: 3.0,
      sssColor: '#58c8ff',
      sssIntensity: 0.42,
      iridescence: 0.60,
      thickness: 0.52,
      roughness: 0.09,
      sheenColor: '#d4f6ff',
      normalMap: bump(8, 8),
      normalScale: 0.18,
    });
    const vacMesh = shade(new THREE.Mesh(gVac, vacMat), false, true);
    grp.add(vacMesh);

    // Subtle glowing turquoise aqueous core inside the central vacuole so volume change reads from across the room!
    const vacCoreMat = reg(
      'vacuole',
      phys({
        color: '#20a8ff',
        emissive: '#0c68c4',
        emissiveIntensity: 0.52,
        roughness: 0.22,
        transparent: true,
        opacity: 0.58,
      })
    );
    const vacCore = new THREE.Mesh(blobGeo(0.76, fbm, 31, 0.06, 2, 3), vacCoreMat);
    vacCore.name = 'vacCore';
    vacMesh.add(vacCore);

    // 3D. Hypotonic Outward Turgor Pressure Arrows pressing against the cellulose wall (visible when hypotonic!)
    plantTurgorArrows = new THREE.Group();
    plantTurgorArrows.visible = false;
    grp.add(plantTurgorArrows);
    const S_TURG = sculpt('vacuole', plantTurgorArrows, {
      emissive: '#1cc8ff',
      emissiveIntensity: 0.72,
      roughness: 0.20,
      clearcoat: 0.68,
    });
    const tDirs = [
      V(1, 0, 0), V(-1, 0, 0), V(0, 1, 0), V(0, -1, 0),
      V(0.78, 0.62, 0.15).normalize(), V(-0.78, 0.62, 0.15).normalize(),
      V(0.78, -0.62, 0.15).normalize(), V(-0.78, -0.62, 0.15).normalize(),
    ];
    tDirs.forEach(d => {
      const p0 = d.clone().multiplyScalar(0.95);
      const p1 = d.clone().multiplyScalar(1.48);
      S_TURG.stick(p0, p1, 0.036, col('#4ce0ff'), col('#9cf8ff'));
      S_TURG.add(p1, 0.17, col('#a8ffff'));
      placed++;
    });
    S_TURG.done();

    // 3E. Hypertonic Plasmolysis Hechtian Strands stretching across the periplasmic gap from detached protoplast to wall!
    plantHechtianGroup = new THREE.Group();
    plantHechtianGroup.visible = false;
    grp.add(plantHechtianGroup);
    const S_HECH = sculpt('plant_cell', plantHechtianGroup, {
      emissive: '#22c898',
      emissiveIntensity: 0.66,
      roughness: 0.24,
    });
    const hechDirs = [
      V(0.92, 0.34, 0.22).normalize(),
      V(0.88, -0.44, 0.18).normalize(),
      V(-0.92, 0.36, 0.22).normalize(),
      V(-0.88, -0.42, 0.22).normalize(),
      V(0.28, 0.92, 0.28).normalize(),
      V(-0.32, 0.90, 0.26).normalize(),
      V(0.32, -0.90, 0.26).normalize(),
      V(-0.30, -0.92, 0.24).normalize(),
    ];
    hechDirs.forEach(d => {
      const rWall = boxR(d, WX - 0.18, WY - 0.16, WZ - 0.16, 4.4);
      const rInner = rWall * 0.56;
      const a = d.clone().multiplyScalar(rInner);
      const b = d.clone().multiplyScalar(rWall);
      S_HECH.stick(a, b, 0.022, col('#5affd0'), col('#ffd678'));
      S_HECH.add(b, 0.10, col('#ffdc84')); // plasmodesmata anchor
      placed++;
    });
    S_HECH.done();

    // Status plaque directly beneath the Plant Cell
    plantPlaqueCv = document.createElement('canvas');
    plantPlaqueCv.width = 512;
    plantPlaqueCv.height = 124;
    plantPlaqueTex = new THREE.CanvasTexture(plantPlaqueCv);
    plantPlaqueTex.colorSpace = THREE.SRGBColorSpace;
    const plantPlaqueMat = reg(
      'plant_cell',
      new THREE.MeshStandardMaterial({
        map: plantPlaqueTex,
        emissive: '#ffffff',
        emissiveMap: plantPlaqueTex,
        emissiveIntensity: 0.72,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    const pltLbl = new THREE.Mesh(new THREE.PlaneGeometry(3.55, 0.86), plantPlaqueMat);
    pltLbl.position.set(0, -2.26, 0.55);
    grp.add(pltLbl);

    SITES.cell_wall.push(
      PLANT_C.clone().add(V(-1.95, 0.5, 0.4)),
      PLANT_C.clone().add(V(0.0, 1.62, 0.3)),
      PLANT_C.clone().add(V(1.92, -0.4, -0.3))
    );
    SITES.plant_cell.push(
      PLANT_C.clone().add(V(-1.35, 0.35, 0.55)),
      PLANT_C.clone().add(V(0.6, 1.15, 0.45)),
      PLANT_C.clone().add(V(1.1, -0.85, 0.45))
    );
    SITES.vacuole.push(
      PLANT_C.clone(),
      PLANT_C.clone().add(V(0.25, 0.15, 0.45))
    );
  }

  // -------------------------------------------------------------------------
  // 4. Continuous Cutaway 5 nm POPC Phospholipid Bilayer (`bilayer`)
  //    Spans X ∈ [-6.95, +7.25] at Y = Y_MEM (-2.00) with open sockets for
  //    AQP1, GLUT1, Na+/K+-ATPase, Clathrin Pit, & SNARE Fusion!
  // -------------------------------------------------------------------------
  function buildPhospholipidBilayer() {
    const grp = new THREE.Group();
    grp.position.set(0, Y_MEM, Z_MEM);
    cell.add(grp);

    const X0 = -6.95;
    const X1 = 7.45;
    const W = X1 - X0;
    const D = 2.65;
    const CX = (X0 + X1) * 0.5;

    // Protein transmembrane socket cutouts (center X, center Z, radius)
    const SOCKETS: Array<[number, number, number]> = [
      [X_AQP, 0.35, 1.05],
      [X_GLUT, 0.38, 0.92],
      [X_NAK, 0.38, 0.98],
      [X_VM, 0.42, 0.52],
      [X_CLATH, 0.42, 1.02],
      [X_SNARE, 0.44, 0.85],
    ];
    const inSocket = (x: number, z: number, pad = 0) =>
      SOCKETS.some(([sx, sz, sr]) => Math.hypot(x - sx, z - sz) < sr + pad);
    // Clean front cutaway viewing bays directly in front of each real PDB transmembrane complex!
    const inFrontWindow = (x: number) =>
      Math.abs(x - X_AQP) < 0.96 ||
      Math.abs(x - X_GLUT) < 0.88 ||
      Math.abs(x - X_NAK) < 0.96 ||
      Math.abs(x - X_VM) < 0.48 ||
      Math.abs(x - X_CLATH) < 0.94 ||
      Math.abs(x - X_SNARE) < 0.78;

    // Subtle organic wave elevation along the fluid-mosaic bilayer
    const waveY = (x: number, z: number) =>
      0.045 * Math.sin(x * 0.68 + z * 0.75) + 0.028 * Math.cos(x * 1.12 - z * 0.90);

    // Helper: gently curved wet-gel bilayer sheet (Outer Leaflet = Shell #4, Inner Leaflet = Shell #5!)
    function makeBilayerSheet(yOff: number) {
      const g = new THREE.BoxGeometry(W, 0.14, D, 56, 1, 14);
      g.translate(CX, 0, 0);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        // Gentle downward dip around Clathrin endocytic pit!
        const dClath = Math.hypot(x - X_CLATH, z - 0.38);
        const pitDip = dClath < 1.25 ? -0.36 * Math.cos((dClath / 1.25) * Math.PI * 0.5) ** 2 : 0;
        p.setY(i, y + yOff + waveY(x, z) + pitDip);
      }
      g.computeVertexNormals();
      return g;
    }

    const outerLeafletMat = cinemaShellMat('bilayer', '#22b2c8', '#a6f4ff', MEM_CLIP, {
      attenCol: '#1888a6',
      attenDist: 4.0,
      sssColor: '#66e8ff',
      sssIntensity: 0.30,
      iridescence: 0.58,
      thickness: 0.44,
      roughness: 0.12,
      sheenColor: '#d8fbff',
      normalMap: bump(16, 6),
      normalScale: 0.24,
    });
    grp.add(shade(new THREE.Mesh(makeBilayerSheet(+H_BILAYER * 0.5), outerLeafletMat), true, true));

    const innerLeafletMat = cinemaShellMat('bilayer', '#2678b8', '#98d6ff', MEM_CLIP, {
      attenCol: '#1b5692',
      attenDist: 4.0,
      sssColor: '#58b8ff',
      sssIntensity: 0.26,
      iridescence: 0.48,
      thickness: 0.44,
      roughness: 0.14,
      sheenColor: '#cceeff',
      normalMap: bump(16, 6),
      normalScale: 0.22,
    });
    grp.add(shade(new THREE.Mesh(makeBilayerSheet(-H_BILAYER * 0.5), innerLeafletMat), false, true));

    // Translucent golden-amber hydrophobic fatty-acyl core band visible across the front cross-section!
    const coreMat = reg(
      'bilayer',
      phys(
        {
          color: '#2c3d52',
          roughness: 0.55,
          transparent: true,
          opacity: 0.30,
          depthWrite: false,
          side: THREE.DoubleSide,
        },
        MEM_CLIP
      )
    );
    const coreGeo = new THREE.BoxGeometry(W - 0.12, H_BILAYER * 0.72, D - 0.16, 40, 1, 8);
    coreGeo.translate(CX, 0, 0);
    grp.add(new THREE.Mesh(coreGeo, coreMat));

    // Dense sculpted POPC Phospholipid Headgroups + Twin Wavy Fatty-Acyl Tails + Golden Cholesterol Rings!
    const S_LIP = sculpt('bilayer', grp, {
      emissive: '#0c3e52',
      emissiveIntensity: 0.22,
      roughness: 0.28,
      clearcoat: 0.52,
      sssColor: '#66e8ff',
    });
    const cHeadOut = col('#4ce8f4');
    const cHeadIn = col('#52b4ff');
    const cPhos = col('#ff9e58');
    const cTail = col('#d8c47a');
    const cChol = col('#ffd448');

    // Front cutaway showcase row with CLEAN UNOBSTRUCTED WINDOWS around every real PDB transporter!
    const zFront = D * 0.46;
    for (let x = X0 + 0.18; x <= X1 - 0.18; x += 0.26) {
      if (inFrontWindow(x)) continue;
      const wy = waveY(x, zFront);
      const isChol = Math.abs(Math.round(x * 3.8)) % 5 === 0;
      const yTop = wy + H_BILAYER * 0.50;
      const yBot = wy - H_BILAYER * 0.50;

      // Upper leaflet head + twin hydrophobic acyl tails (one saturated straight, one cis-oleoyl kinked!)
      S_LIP.add(V(x, yTop, zFront), isChol ? 0.17 : 0.20, isChol ? cChol : cHeadOut);
      S_LIP.add(V(x, yBot, zFront), isChol ? 0.17 : 0.20, isChol ? cChol : cHeadIn);
      if (isChol) {
        // Rigid planar sterol wedge between acyl tails
        S_LIP.stick(V(x, yTop - 0.06, zFront), V(x, wy + 0.12, zFront), 0.044, cChol, col('#ffb638'));
        S_LIP.stick(V(x, yBot + 0.06, zFront), V(x, wy - 0.12, zFront), 0.044, cChol, col('#ffb638'));
      } else {
        S_LIP.stick(V(x - 0.04, yTop - 0.06, zFront), V(x - 0.05, wy + 0.06, zFront), 0.022, cPhos, cTail);
        S_LIP.stick(V(x + 0.04, yTop - 0.06, zFront), V(x + 0.07, wy + 0.07, zFront), 0.022, cPhos, cTail);
        S_LIP.stick(V(x - 0.04, yBot + 0.06, zFront), V(x - 0.05, wy - 0.06, zFront), 0.022, cPhos, cTail);
        S_LIP.stick(V(x + 0.04, yBot + 0.06, zFront), V(x + 0.07, wy - 0.07, zFront), 0.022, cPhos, cTail);
      }
      placed += 2;
    }

    // Fluid-mosaic top & bottom leaflet headgroup carpet across depth Z
    for (let iz = -4; iz <= 3; iz++) {
      const z = iz * 0.30;
      for (let x = X0 + 0.24; x <= X1 - 0.24; x += 0.38) {
        const jx = x + (iz % 2) * 0.18;
        if (inSocket(jx, z, 0.06)) continue;
        const wy = waveY(jx, z);
        const isChol = Math.abs(Math.round(jx * 2.5 + iz * 3)) % 6 === 0;
        S_LIP.add(V(jx, wy + H_BILAYER * 0.53, z), isChol ? 0.16 : 0.19, isChol ? cChol : cHeadOut);
        if (iz <= -2 || iz >= 2) {
          S_LIP.add(V(jx, wy - H_BILAYER * 0.53, z), 0.18, cHeadIn);
        }
        placed++;
      }
    }
    S_LIP.done();

    // Subtle extracellular vs cytosol orientation ribbons at left flank (aligned EXACTLY with Y_MEM!)
    const S_GUIDE = sculpt('bilayer', cutExtras, {
      emissive: '#144c68',
      emissiveIntensity: 0.42,
      roughness: 0.28,
    });
    // Left scale bracket showing exact "5 nm" bilayer thickness right alongside the bilayer cross-section!
    const bx = X0 - 0.22;
    const zB = Z_MEM + zFront;
    S_GUIDE.stick(V(bx, Y_MEM - H_BILAYER * 0.5, zB), V(bx, Y_MEM + H_BILAYER * 0.5, zB), 0.024, col('#6ee8ff'), col('#6ee8ff'));
    S_GUIDE.stick(V(bx - 0.14, Y_MEM + H_BILAYER * 0.5, zB), V(bx + 0.06, Y_MEM + H_BILAYER * 0.5, zB), 0.024, col('#6ee8ff'), col('#6ee8ff'));
    S_GUIDE.stick(V(bx - 0.14, Y_MEM - H_BILAYER * 0.5, zB), V(bx + 0.06, Y_MEM - H_BILAYER * 0.5, zB), 0.024, col('#6ee8ff'), col('#6ee8ff'));
    S_GUIDE.done();

    // Crisp 5 nm + EXTRACELLULAR / CYTOSOL floating canvas caption on far left edge
    const bCv = document.createElement('canvas');
    bCv.width = 256;
    bCv.height = 192;
    const bg = bCv.getContext('2d')!;
    bg.clearRect(0, 0, 256, 192);
    bg.textAlign = 'center';
    bg.font = '700 22px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#7cecff';
    bg.fillText('EXTRACELLULAR', 128, 32);
    bg.font = '700 26px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#ffe07c';
    bg.fillText('5 nm Bilayer', 128, 98);
    bg.font = '700 22px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#92c4ff';
    bg.fillText('CYTOSOL', 128, 164);
    const bTex = new THREE.CanvasTexture(bCv);
    bTex.colorSpace = THREE.SRGBColorSpace;
    const bLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.65, 1.24),
      reg(
        'bilayer',
        new THREE.MeshStandardMaterial({
          map: bTex,
          emissive: '#ffffff',
          emissiveMap: bTex,
          emissiveIntensity: 0.72,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    bLbl.position.set(X0 - 0.92, 0.0, zFront);
    grp.add(bLbl);

    // Subtle visual zoom bridge rays connecting Animal/Plant plasma membranes to the 5 nm bilayer
    const B_BRIDGE = balls('bilayer', cell, false);
    const bridgePaths = [
      [ANIMAL_C.clone().add(V(-0.85, -1.55, 0.15)), V(-5.65, Y_MEM + 0.85, Z_MEM + 0.2)],
      [PLANT_C.clone().add(V(0.85, -1.55, 0.15)), V(5.25, Y_MEM + 0.85, Z_MEM + 0.2)],
    ];
    bridgePaths.forEach(([a, b]) => {
      for (let i = 1; i < 8; i++) {
        const f = i / 8;
        B_BRIDGE.add(a.clone().lerp(b, f), 0.045, col('#4cb8e8'));
      }
    });
    B_BRIDGE.done();

    SITES.bilayer.push(
      V(-4.4, Y_MEM, Z_MEM + 0.6),
      V(-1.7, Y_MEM, Z_MEM + 0.6),
      V(1.0, Y_MEM, Z_MEM + 0.6)
    );
  }

  // -------------------------------------------------------------------------
  // 5. Transport Station 1: Simple Diffusion (`simple_diff` — O₂ & CO₂ · 0 ATP)
  // -------------------------------------------------------------------------
  function buildSimpleDiffusionStation() {
    const grp = new THREE.Group();
    grp.position.set(X_SIMPLE, Y_MEM, Z_MEM);
    cell.add(grp);

    // Translucent luminous diffusion corridor ribbons showing unobstructed nonpolar gas passage down ΔC
    const S_SD = sculpt('simple_diff', grp, {
      emissive: '#0e7a96',
      emissiveIntensity: 0.44,
      roughness: 0.24,
      clearcoat: 0.62,
    });

    // Two graceful trajectory ribbons: O₂ entering downward (cyan) & CO₂ exiting upward (coral-amber)
    const o2Curve = new THREE.CatmullRomCurve3([
      V(-0.42, 1.55, 0.32),
      V(-0.32, 0.55, 0.42),
      V(-0.46, -0.45, 0.36),
      V(-0.34, -1.48, 0.28),
    ]);
    const co2Curve = new THREE.CatmullRomCurve3([
      V(0.42, -1.48, 0.30),
      V(0.50, -0.42, 0.44),
      V(0.36, 0.55, 0.38),
      V(0.46, 1.55, 0.28),
    ]);
    S_SD.tube(o2Curve.getPoints(20), 0.022, 0.022, col('#4ceeff'), col('#98f8ff'), 8, true);
    S_SD.tube(co2Curve.getPoints(20), 0.022, 0.022, col('#ff9668'), col('#ffd098'), 8, true);
    // Arrowheads at termini
    S_SD.add(V(-0.34, -1.52, 0.28), 0.16, col('#68f4ff'));
    S_SD.add(V(0.46, 1.58, 0.28), 0.16, col('#ffaa78'));
    S_SD.done();

    // Live animated 3D O₂ dumbbells (O=O) & linear CO₂ triatomics (O=C=O) gliding across the hydrophobic core!
    const o2Mat = makeCinemaProteinMat('simple_diff', {
      emissive: '#1498c4',
      emissiveIntensity: 0.52,
      roughness: 0.20,
      sssColor: '#8cf4ff',
    });
    const co2Mat = makeCinemaProteinMat('simple_diff', {
      emissive: '#b84220',
      emissiveIntensity: 0.48,
      roughness: 0.22,
      sssColor: '#ffaa82',
    });

    const buildDiatomic = (isO2: boolean) => {
      const mGrp = new THREE.Group();
      const sGeo = new THREE.SphereGeometry(0.11, 14, 10);
      const white = new Float32Array(sGeo.attributes.position.count * 3).fill(1);
      sGeo.setAttribute('color', new THREE.BufferAttribute(white, 3));
      const mat = isO2 ? o2Mat : co2Mat;
      if (isO2) {
        const a = new THREE.Mesh(sGeo, mat); a.position.x = -0.09;
        const b = new THREE.Mesh(sGeo, mat); b.position.x = 0.09;
        mGrp.add(a, b);
      } else {
        const c = new THREE.Mesh(sGeo, mat); c.scale.setScalar(0.86);
        const o1 = new THREE.Mesh(sGeo, mat); o1.position.x = -0.17; o1.scale.setScalar(0.92);
        const o2 = new THREE.Mesh(sGeo, mat); o2.position.x = 0.17; o2.scale.setScalar(0.92);
        mGrp.add(c, o1, o2);
      }
      return mGrp;
    };

    for (let k = 0; k < 10; k++) {
      const isO2 = k < 5;
      const g = buildDiatomic(isO2);
      grp.add(g);
      simpleGasBeads.push({
        mesh: g as unknown as THREE.Mesh,
        u0: (k % 5) / 5,
        xOff: isO2 ? -0.40 + ((k % 3) - 1) * 0.18 : 0.42 + ((k % 3) - 1) * 0.18,
        zOff: 0.34 + ((k % 2) - 0.5) * 0.24,
        dir: isO2 ? -1 : 1,
        isO2,
      });
      placed++;
    }

    SITES.simple_diff.push(
      V(X_SIMPLE, Y_MEM, Z_MEM + 0.4),
      V(X_SIMPLE - 0.4, Y_MEM + 0.9, Z_MEM + 0.35),
      V(X_SIMPLE + 0.4, Y_MEM - 0.9, Z_MEM + 0.35)
    );
  }

  // -------------------------------------------------------------------------
  // 6. Transport Station 2: Aquaporin AQP1 (Real PDB `1J4N`) & Single-File H₂O (`water_flow`)
  // -------------------------------------------------------------------------
  function buildAquaporinStation(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    grp.position.set(X_AQP, Y_MEM, Z_MEM + 0.36);
    cell.add(grp);

    // Real RCSB PDB 1J4N Homotetramer (4 monomers in C4 rosette; front-most slightly parted to reveal hourglass pore!)
    const aqpMat = makeCinemaProteinMat('aquaporin', {
      emissive: '#0c4e98',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.58,
      sssColor: '#5ad2ff',
    });
    const batchAqp = makeMolBatch(T.geoAqp, aqpMat, grp, true, true);
    const R_TET = 0.50;
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI * 0.25;
      // Leave front cutaway opening cleanly framing the hourglass channel & golden NPA selectivity waist!
      if (k === 0) {
        // Place front-right monomer cleanly offset to rear-flank cutaway so the single-file H2O chain is 100% visible!
        batchAqp.add(V(0.56, 0.02, 0.16), new THREE.Quaternion().setFromAxisAngle(UP, -0.4), 0.92);
      } else {
        const pos = V(Math.cos(a) * R_TET, 0.02, Math.sin(a) * R_TET);
        const q = new THREE.Quaternion().setFromAxisAngle(UP, -a);
        batchAqp.add(pos, q, 0.96);
      }
      placed += 10;
    }
    // Companion background AQP1 homotetramer along the fluid-mosaic bilayer
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + 0.3;
      const pos = V(-0.95 + Math.cos(a) * 0.44, 0.04, -1.35 + Math.sin(a) * 0.44);
      batchAqp.add(pos, new THREE.Quaternion().setFromAxisAngle(UP, -a), 0.78);
      placed += 8;
    }
    batchAqp.done();

    // Glowing golden NPA (Asn-Pro-Ala) selectivity waist collar right at the center of the hourglass channel!
    const S_NPA = sculpt('aquaporin', grp, {
      emissive: '#d48a00',
      emissiveIntensity: 0.72,
      roughness: 0.18,
      clearcoat: 0.76,
    });
    S_NPA.ring(V(0, 0.0, 0.34), UP, 0.28, 0.048, col('#ffd84c'), 28, 8);
    S_NPA.ring(V(0, 0.68, 0.26), UP, 0.46, 0.026, col('#4ce8ff'), 28, 8);
    S_NPA.ring(V(0, -0.68, 0.26), UP, 0.46, 0.026, col('#4ce8ff'), 28, 8);
    S_NPA.done();

    // Single-file animated 3D H₂O Dipoles (`water_flow`) flipping 180° at the central NPA waist!
    const oMat = makeCinemaProteinMat('water_flow', {
      emissive: '#0e88d8',
      emissiveIntensity: 0.62,
      roughness: 0.16,
      clearcoat: 0.76,
      sssColor: '#8cf0ff',
    });
    const hMat = makeCinemaProteinMat('water_flow', {
      emissive: '#8ad0ff',
      emissiveIntensity: 0.52,
      roughness: 0.20,
      clearcoat: 0.70,
    });
    const oGeo = new THREE.SphereGeometry(0.125, 16, 12);
    const hGeo = new THREE.SphereGeometry(0.074, 12, 10);
    [oGeo, hGeo].forEach((g, idx) => {
      const arr = new Float32Array(g.attributes.position.count * 3);
      const c = idx === 0 ? col('#38b6ff') : col('#f2faff');
      for (let i = 0; i < g.attributes.position.count; i++) {
        arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
      }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    });

    const N_WATER = 7;
    for (let k = 0; k < N_WATER; k++) {
      const wGrp = new THREE.Group();
      const ox = new THREE.Mesh(oGeo, oMat);
      const h1 = new THREE.Mesh(hGeo, hMat);
      const h2 = new THREE.Mesh(hGeo, hMat);
      // True 104.5° H-O-H tetrahedral angle!
      const halfAng = (104.5 * Math.PI) / 360;
      h1.position.set(Math.sin(halfAng) * 0.145, -Math.cos(halfAng) * 0.145, 0);
      h2.position.set(-Math.sin(halfAng) * 0.145, -Math.cos(halfAng) * 0.145, 0);
      wGrp.add(ox, h1, h2);
      grp.add(wGrp);
      aqpWaterDipoles.push({ grp: wGrp, u0: k / N_WATER });
      placed++;
    }

    // Subtle single-file osmotic channel axis guide thread
    const S_WF = sculpt('water_flow', grp, {
      emissive: '#1696d8',
      emissiveIntensity: 0.48,
      roughness: 0.22,
    });
    S_WF.stick(V(0, -1.48, 0.36), V(0, 1.48, 0.36), 0.020, col('#42c8ff'), col('#98f0ff'));
    S_WF.done();

    SITES.aquaporin.push(V(X_AQP, Y_MEM, Z_MEM + 0.55), V(X_AQP - 0.55, Y_MEM + 0.25, Z_MEM + 0.65));
    SITES.water_flow.push(V(X_AQP, Y_MEM + 0.85, Z_MEM + 0.68), V(X_AQP, Y_MEM, Z_MEM + 0.68), V(X_AQP, Y_MEM - 0.85, Z_MEM + 0.68));
  }

  // -------------------------------------------------------------------------
  // 7. Transport Station 3: GLUT1 Facilitated Diffusion (`glut1` — Real PDB `4PYP`)
  //    Alternating-access rocking N-lobe & C-lobe delivering D-Glucose (0 ATP)!
  // -------------------------------------------------------------------------
  function buildGlut1Station(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    grp.position.set(X_GLUT, Y_MEM, Z_MEM + 0.38);
    cell.add(grp);

    const glutMat = makeCinemaProteinMat('glut1', {
      emissive: '#0c5c44',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.58,
      sssColor: '#5affc2',
    });

    // Two articulated real PDB 4PYP lobes rocking in live alternating-access (`outward-open <-> occluded <-> inward-open`)!
    glutLobeN = new THREE.Group();
    glutLobeC = new THREE.Group();
    grp.add(glutLobeN, glutLobeC);

    const meshN = shade(new THREE.Mesh(T.geoGlutN, glutMat), true, true);
    const meshC = shade(new THREE.Mesh(T.geoGlutC, glutMat), true, true);
    glutLobeN.add(meshN);
    glutLobeC.add(meshC);
    placed += 24;

    // Two companion full 4PYP GLUT1 carriers along the rear fluid mosaic
    const batchGlut = makeMolBatch(T.geoGlutFull, glutMat, grp, true, true);
    batchGlut.add(V(-0.62, 0.04, -1.32), new THREE.Quaternion().setFromAxisAngle(UP, 0.8), 0.78);
    batchGlut.add(V(0.76, 0.02, -1.26), new THREE.Quaternion().setFromAxisAngle(UP, -0.6), 0.76);
    batchGlut.done();
    placed += 20;

    // Radiant 3D D-Glucose hexose ring riding smoothly through the alternating-access binding pocket!
    glutGlucoseCargo = new THREE.Group();
    grp.add(glutGlucoseCargo);
    const S_GLU = sculpt('glut1', glutGlucoseCargo, {
      emissive: '#22a848',
      emissiveIntensity: 0.68,
      roughness: 0.18,
      clearcoat: 0.74,
    });
    const rHex = 0.22;
    const hexPts: THREE.Vector3[] = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      hexPts.push(V(Math.cos(a) * rHex, Math.sin(a) * rHex * 0.45, Math.sin(a) * rHex * 0.75));
    }
    for (let i = 0; i < 6; i++) {
      const a = hexPts[i], b = hexPts[(i + 1) % 6];
      S_GLU.stick(a, b, 0.034, col('#68ff9e'), col('#b4ffd0'));
      S_GLU.add(a, 0.14, i === 0 ? col('#ff6c7c') : col('#88ffad'));
    }
    S_GLU.done();

    // Subtle glowing binding-pocket halo ring
    const S_RING = sculpt('glut1', grp, {
      emissive: '#148858',
      emissiveIntensity: 0.48,
      roughness: 0.22,
    });
    S_RING.ring(V(0, 0, 0.30), UP, 0.58, 0.028, col('#62ffaa'), 28, 8);
    S_RING.done();

    SITES.glut1.push(V(X_GLUT, Y_MEM, Z_MEM + 0.65), V(X_GLUT, Y_MEM + 0.85, Z_MEM + 0.65), V(X_GLUT, Y_MEM - 0.85, Z_MEM + 0.65));
  }

  // -------------------------------------------------------------------------
  // 8. Transport Station 4: Na⁺/K⁺-ATPase (`nak_pump` — Real PDB `3WGU`),
  //    ATP Hydrolysis (`atp_hydrolysis`), & Resting Voltage (`membrane_voltage`)
  // -------------------------------------------------------------------------
  function buildNakPumpAndVoltageStation(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    grp.position.set(X_NAK, Y_MEM, Z_MEM + 0.42);
    cell.add(grp);

    // 8A. Real RCSB PDB 3WGU αβγ Na⁺/K⁺-ATPase Heterotrimer (`nak_pump`)
    const nakMat = makeCinemaProteinMat('nak_pump', {
      emissive: '#381268',
      emissiveIntensity: 0.32,
      roughness: 0.26,
      clearcoat: 0.56,
      sssColor: '#c48eff',
    });

    nakHeroGrp = new THREE.Group();
    nakHeroGrp.position.set(0, -0.34, 0.05); // Aligns TM helices directly inside bilayer, β-cap above, α-ATP cleft below!
    grp.add(nakHeroGrp);
    nakHeroGrp.add(shade(new THREE.Mesh(T.geoNak, nakMat), true, true));
    placed += 32;

    // Companion background 3WGU pump along the rear bilayer edge
    const compNak = shade(new THREE.Mesh(T.geoNak, nakMat), true, true);
    compNak.position.set(-0.78, -0.28, -1.36);
    compNak.rotation.y = 0.72;
    compNak.scale.setScalar(0.72);
    grp.add(compNak);
    placed += 24;

    // Animated 3 amber Na⁺ ions exporting UP (+Y) & 2 violet K⁺ ions importing DOWN (-Y) directly through the pump!
    const naMat = makeCinemaProteinMat('nak_pump', {
      emissive: '#d87600',
      emissiveIntensity: 0.74,
      roughness: 0.16,
      clearcoat: 0.78,
      sssColor: '#ffda72',
    });
    const kMat = makeCinemaProteinMat('nak_pump', {
      emissive: '#7622d8',
      emissiveIntensity: 0.72,
      roughness: 0.16,
      clearcoat: 0.78,
      sssColor: '#d8a6ff',
    });
    const makeIonMesh = (r: number, hex: string, mat: THREE.Material) => {
      const g = new THREE.SphereGeometry(r, 16, 12);
      const arr = new Float32Array(g.attributes.position.count * 3);
      const c = col(hex);
      for (let i = 0; i < g.attributes.position.count; i++) {
        arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
      }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      return new THREE.Mesh(g, mat);
    };

    for (let i = 0; i < 3; i++) {
      const m = makeIonMesh(0.115, '#ffb838', naMat); // 3 Na+ out (smaller 0.102 nm amber spheres!)
      grp.add(m);
      nakNaCargo.push(m);
      placed++;
    }
    for (let i = 0; i < 2; i++) {
      const m = makeIonMesh(0.142, '#c87eff', kMat); // 2 K+ in (larger 0.138 nm violet spheres!)
      grp.add(m);
      nakKCargo.push(m);
      placed++;
    }

    // 8B. Cytosolic ATP → ADP + Pᵢ Phosphorylation Cleft (`atp_hydrolysis`)
    const atpSitePos = V(0.02, -1.78, 0.34);
    const atpGrp = new THREE.Group();
    atpGrp.position.copy(atpSitePos);
    grp.add(atpGrp);

    // Sculpted 3D ATP molecule (Adenine + Ribose + α, β, γ high-energy phosphoanhydride chain!)
    atpMoleculeGrp = new THREE.Group();
    atpGrp.add(atpMoleculeGrp);
    const S_ATP = sculpt('atp_hydrolysis', atpMoleculeGrp, {
      emissive: '#b86800',
      emissiveIntensity: 0.56,
      roughness: 0.20,
      clearcoat: 0.72,
      sssColor: '#ffe078',
    });
    // Adenosine ring + ribose pentose on left
    const pAd = V(-0.46, -0.05, 0);
    const pRib = V(-0.22, 0.04, 0);
    const pPa = V(0.02, 0.02, 0);
    const pPb = V(0.24, -0.02, 0);
    S_ATP.lobe(pAd, 0.16, 0.12, 0.07, col('#5aa4ff'));
    S_ATP.lobe(pRib, 0.13, 0.11, 0.08, col('#6ef0b4'));
    S_ATP.stick(pAd, pRib, 0.028, col('#70b8ff'), col('#78f2bc'));
    S_ATP.stick(pRib, pPa, 0.030, col('#78f2bc'), col('#ffbe42'));
    S_ATP.stick(pPa, pPb, 0.036, col('#ffbe42'), col('#ff9828'));
    S_ATP.add(pPa, 0.22, col('#ffbe42')); // alpha-P
    S_ATP.add(pPb, 0.23, col('#ff9224')); // beta-P
    S_ATP.done();

    // Cleaving gamma-phosphate (Pᵢ) that detaches & phosphorylates Asp369 on every cycle!
    const piMat = makeCinemaProteinMat('atp_hydrolysis', {
      emissive: '#ff9618',
      emissiveIntensity: 0.88,
      roughness: 0.14,
      clearcoat: 0.80,
      sssColor: '#ffe878',
    });
    atpPiBead = makeIonMesh(0.135, '#ffdf48', piMat);
    atpPiBead.position.set(0.46, 0.04, 0.04);
    atpGrp.add(atpPiBead);

    // Radiant ATP cleavage energy burst halo ring
    const flashMat = reg(
      'atp_hydrolysis',
      phys({
        color: '#ffe262',
        emissive: '#ffaa18',
        emissiveIntensity: 1.15,
        roughness: 0.18,
        transparent: true,
        opacity: 0.82,
      })
    );
    atpFlashRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.032, 12, 36), flashMat);
    atpFlashRing.position.set(0.18, 0.12, 0.04);
    atpGrp.add(atpFlashRing);

    // Compact glowing ATP -> ADP + Pi label directly below the cleavage site
    const atpCv = document.createElement('canvas');
    atpCv.width = 320;
    atpCv.height = 72;
    const ag = atpCv.getContext('2d')!;
    ag.clearRect(0, 0, 320, 72);
    ag.font = '700 26px system-ui, -apple-system, sans-serif';
    ag.textAlign = 'center';
    ag.textBaseline = 'middle';
    ag.fillStyle = '#ffe066';
    ag.fillText('1 ATP → ADP + Pᵢ', 160, 36);
    const atpTex = new THREE.CanvasTexture(atpCv);
    atpTex.colorSpace = THREE.SRGBColorSpace;
    const atpLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.56, 0.35),
      reg(
        'atp_hydrolysis',
        new THREE.MeshStandardMaterial({
          map: atpTex,
          emissive: '#ffffff',
          emissiveMap: atpTex,
          emissiveIntensity: 0.82,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    atpLbl.position.set(0.02, -0.52, 0.16);
    atpGrp.add(atpLbl);
    placed += 8;

    // 8C. Resting Membrane Voltage Dipole Gradient Bars (`membrane_voltage`, Vₘ = -70 mV!)
    const vmGrp = new THREE.Group();
    vmGrp.position.set(X_VM, Y_MEM, Z_MEM + 0.56);
    cell.add(vmGrp);

    const S_VM = sculpt('membrane_voltage', vmGrp, {
      emissive: '#a84808',
      emissiveIntensity: 0.56,
      roughness: 0.22,
      clearcoat: 0.68,
    });
    // Extracellular positive charge crest (+ + + amber-gold) & Cytosolic negative charge crest (- - - electric cyan-violet)
    for (let k = -1; k <= 1; k++) {
      const ox = k * 0.34;
      // Top '+' cross
      S_VM.stick(V(ox - 0.08, 1.12, 0.10), V(ox + 0.08, 1.12, 0.10), 0.022, col('#ffba42'), col('#ffe27a'));
      S_VM.stick(V(ox, 1.04, 0.10), V(ox, 1.20, 0.10), 0.022, col('#ffba42'), col('#ffe27a'));
      // Bottom '-' bar
      S_VM.stick(V(ox - 0.09, -1.12, 0.10), V(ox + 0.09, -1.12, 0.10), 0.024, col('#68d8ff'), col('#b492ff'));
      placed += 2;
    }
    S_VM.done();

    // Two sculpted glowing electrochemical gradient columns: Na+ (tall out, low in) & K+ (low out, tall in)
    const makeGradBar = (x: number, y0: number, y1: number, hex: string, emHex: string) => {
      const h = Math.abs(y1 - y0);
      const m = new THREE.Mesh(
        new THREE.CylinderGeometry(0.085, 0.085, h, 16),
        reg(
          'membrane_voltage',
          phys({
            color: hex,
            emissive: emHex,
            emissiveIntensity: 0.68,
            roughness: 0.20,
            clearcoat: 0.72,
            transparent: true,
            opacity: 0.88,
          })
        )
      );
      m.position.set(x, (y0 + y1) * 0.5, 0.05);
      vmGrp.add(m);
      voltageGlowBars.push(m);
      placed++;
    };
    // Na+ gradient bar (145 mM out = tall amber top vs 12 mM in = short bottom)
    makeGradBar(-0.22, 0.18, 0.94, '#ffb638', '#d86e00');
    makeGradBar(-0.22, -0.44, -0.18, '#ffb638', '#984800');
    // K+ gradient bar (4 mM out = short violet top vs 140 mM in = tall violet bottom)
    makeGradBar(0.22, 0.18, 0.42, '#c076ff', '#6a1ec8');
    makeGradBar(0.22, -0.96, -0.18, '#c076ff', '#842ce8');

    // Crisp luminous V_m = -70 mV badge right on the voltage column
    const vmCv = document.createElement('canvas');
    vmCv.width = 320;
    vmCv.height = 112;
    const vg = vmCv.getContext('2d')!;
    vg.clearRect(0, 0, 320, 112);
    vg.fillStyle = 'rgba(8, 14, 26, 0.82)';
    vg.strokeStyle = 'rgba(255, 168, 76, 0.80)';
    vg.lineWidth = 4;
    vg.beginPath();
    vg.roundRect(8, 8, 304, 96, 18);
    vg.fill();
    vg.stroke();
    vg.textAlign = 'center';
    vg.font = '700 32px system-ui, -apple-system, sans-serif';
    vg.fillStyle = '#ffca68';
    vg.fillText('Vₘ = −70 mV', 160, 44);
    vg.font = '600 20px system-ui, -apple-system, sans-serif';
    vg.fillStyle = '#d4e8ff';
    vg.fillText('3 Na⁺ out · 2 K⁺ in', 160, 82);
    const vmTex = new THREE.CanvasTexture(vmCv);
    vmTex.colorSpace = THREE.SRGBColorSpace;
    const vmLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.58, 0.55),
      reg(
        'membrane_voltage',
        new THREE.MeshStandardMaterial({
          map: vmTex,
          emissive: '#ffffff',
          emissiveMap: vmTex,
          emissiveIntensity: 0.78,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    vmLbl.position.set(0, -1.62, 0.24);
    vmGrp.add(vmLbl);

    SITES.nak_pump.push(V(X_NAK, Y_MEM, Z_MEM + 0.35), V(X_NAK, Y_MEM + 0.95, Z_MEM + 0.30));
    SITES.atp_hydrolysis.push(V(X_NAK, Y_MEM - 1.78, Z_MEM + 0.42));
    SITES.membrane_voltage.push(V(X_VM, Y_MEM, Z_MEM + 0.35), V(X_VM, Y_MEM + 1.05, Z_MEM + 0.35), V(X_VM, Y_MEM - 1.05, Z_MEM + 0.35));
  }

  // -------------------------------------------------------------------------
  // 9. Transport Station 5: Clathrin Endocytic Pit (`clathrin_pit` — Real PDB `1XI4`),
  //    SNARE Exocytic Dock (`snare_fusion` — Real PDB `1SFC`), & Bulk Vesicles (`vesicle_cargo`)
  // -------------------------------------------------------------------------
  function buildVesicularTransportStation(T: ReturnType<typeof buildPdbTemplates>) {
    // 9A. Invaginating Clathrin-Coated Endocytic Pit (`clathrin_pit` + real 1XI4 triskelia!)
    const clathGrp = new THREE.Group();
    clathGrp.position.copy(CLATH_C);
    cell.add(clathGrp);

    // Translucent wet-gel invaginating endocytic membrane cup (Shell #6 in `shells`!)
    const pitGeo = new THREE.SphereGeometry(0.64, 40, 28, 0, Math.PI * 2, Math.PI * 0.26, Math.PI * 0.74);
    const pitMat = cinemaShellMat('clathrin_pit', '#8e44d8', '#dfb4ff', {}, {
      attenCol: '#682aa8',
      attenDist: 3.0,
      sssColor: '#d48cff',
      sssIntensity: 0.36,
      iridescence: 0.62,
      thickness: 0.40,
      roughness: 0.12,
      sheenColor: '#f4dcff',
      normalMap: bump(8, 8),
      normalScale: 0.20,
    });
    clathGrp.add(shade(new THREE.Mesh(pitGeo, pitMat), true, true));

    // Real RCSB PDB 1XI4 Clathrin Triskelia cradling the curved cytosolic pit cage (tightly sculpted, zero spillover!)
    const clathMat = makeCinemaProteinMat('clathrin_pit', {
      emissive: '#581a88',
      emissiveIntensity: 0.36,
      roughness: 0.26,
      clearcoat: 0.56,
      sssColor: '#e698ff',
    });
    const batchClath = makeMolBatch(T.geoClath, clathMat, clathGrp, true, true);
    const triskSlots = [
      [V(0, -0.58, 0.06), new THREE.Euler(0.3, 0.2, 0.0), 0.62],
      [V(-0.48, -0.26, 0.26), new THREE.Euler(0.6, 0.9, 0.5), 0.58],
      [V(0.48, -0.26, 0.26), new THREE.Euler(0.6, -0.9, -0.5), 0.58],
      [V(-0.44, -0.22, -0.36), new THREE.Euler(-0.5, 2.2, 0.4), 0.56],
      [V(0.44, -0.22, -0.36), new THREE.Euler(-0.5, -2.2, -0.4), 0.56],
      [V(0.0, -0.34, 0.52), new THREE.Euler(1.1, 0.0, 0.2), 0.56],
    ] as const;
    triskSlots.forEach(([pos, eul, sc]) => {
      batchClath.add(pos, new THREE.Quaternion().setFromEuler(eul), sc);
      placed += 10;
    });
    batchClath.done();

    // Golden Dynamin GTPase scission collar tightening around the endocytic pit neck!
    const S_DYN = sculpt('clathrin_pit', clathGrp, {
      emissive: '#b87600',
      emissiveIntensity: 0.62,
      roughness: 0.20,
      clearcoat: 0.74,
    });
    S_DYN.ring(V(0, 0.46, 0), UP, 0.44, 0.052, col('#ffd052'), 32, 10);
    S_DYN.ring(V(0, 0.56, 0), UP, 0.40, 0.044, col('#ffa83c'), 32, 10);
    S_DYN.done();

    // Internalized endocytic vesicle cargo spheres & receptor ligands inside the budding pit (`vesicle_cargo`)
    clathrinBudGrp = new THREE.Group();
    clathGrp.add(clathrinBudGrp);
    const S_ECARGO = sculpt('vesicle_cargo', clathrinBudGrp, {
      emissive: '#a86408',
      emissiveIntensity: 0.46,
      roughness: 0.22,
      clearcoat: 0.68,
    });
    const eCargoPts = [
      V(-0.22, -0.10, 0.14), V(0.20, -0.18, 0.12), V(0.02, 0.12, 0.06),
      V(-0.14, -0.32, -0.10), V(0.18, 0.10, -0.12),
    ];
    eCargoPts.forEach((p, i) => {
      S_ECARGO.add(p, 0.20, i % 2 === 0 ? col('#ffd862') : col('#6cf2d8'));
      placed++;
    });
    S_ECARGO.done();

    // 9B. SNARE-Driven Exocytic Vesicle Dock (`snare_fusion` — Real PDB `1SFC` + `vesicle_cargo`)
    const snareGrp = new THREE.Group();
    snareGrp.position.copy(SNARE_C);
    cell.add(snareGrp);

    // Docking Secretory Exocytic Vesicle (Shell #7 in `shells`!)
    snareVesicleGrp = new THREE.Group();
    snareGrp.add(snareVesicleGrp);
    const vesMat = cinemaShellMat('vesicle_cargo', '#2aa4c8', '#b4f2ff', {}, {
      attenCol: '#1b7aa6',
      attenDist: 2.8,
      sssColor: '#76e8ff',
      sssIntensity: 0.36,
      iridescence: 0.58,
      thickness: 0.38,
      roughness: 0.11,
      sheenColor: '#e2fbff',
      normalMap: bump(8, 8),
      normalScale: 0.18,
    });
    const vesMesh = shade(new THREE.Mesh(new THREE.SphereGeometry(0.62, 36, 24), vesMat), true, true);
    snareVesicleGrp.add(vesMesh);

    // Radiant macromolecular secretory cargo packed inside the exocytic vesicle & bursting through fusion pore!
    const S_SCARGO = sculpt('vesicle_cargo', snareVesicleGrp, {
      emissive: '#b87408',
      emissiveIntensity: 0.56,
      roughness: 0.20,
      clearcoat: 0.72,
    });
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      const p = V(Math.cos(a) * 0.26, ((k % 3) - 1) * 0.16, Math.sin(a) * 0.26);
      S_SCARGO.add(p, 0.19, k % 2 === 0 ? col('#ffda66') : col('#ff8c62'));
      placed++;
    }
    S_SCARGO.done();

    // Four Real RCSB PDB 1SFC 4-Helix SNARE Zipper Bundles radially clamping vesicle to inner plasma leaflet!
    snareZipperGrp = new THREE.Group();
    snareGrp.add(snareZipperGrp);
    const snareMat = makeCinemaProteinMat('snare_fusion', {
      emissive: '#882412',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.56,
      sssColor: '#ff9678',
    });
    const batchSnare = makeMolBatch(T.geoSnare, snareMat, snareZipperGrp, true, true);
    const snareAngles = [0.25, 1.85, 3.35, 4.95];
    snareAngles.forEach(ang => {
      const pos = V(Math.cos(ang) * 0.66, 0.32, Math.sin(ang) * 0.62);
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.22, -ang, 0.45));
      batchSnare.add(pos, q, 0.76);
      placed += 10;
    });
    batchSnare.done();

    // Glowing exocytic fusion-pore collar ring opening into the extracellular space
    const S_PORE = sculpt('snare_fusion', snareGrp, {
      emissive: '#c84220',
      emissiveIntensity: 0.58,
      roughness: 0.22,
    });
    S_PORE.ring(V(0, 0.68, 0), UP, 0.42, 0.044, col('#ff8462'), 28, 8);
    S_PORE.done();

    SITES.clathrin_pit.push(CLATH_C.clone(), CLATH_C.clone().add(V(0, 0.55, 0.3)));
    SITES.snare_fusion.push(SNARE_C.clone().add(V(0, 0.42, 0.35)), SNARE_C.clone());
    SITES.vesicle_cargo.push(CLATH_C.clone().add(V(0, -0.1, 0.25)), SNARE_C.clone().add(V(0, 0.1, 0.25)), SNARE_C.clone().add(V(0, 1.25, 0.2)));
  }

  // -------------------------------------------------------------------------
  // 10. Centered Zero-Clipping Circular Optical Atomic Inset (`ion_atoms`)
  //     Compares atomic Na+ (0.102 nm) vs K+ (0.138 nm) hydrated ions,
  //     H2O (104.5 deg) dipole, and POPC phospholipid headgroup (C, H, N, O, P)!
  // -------------------------------------------------------------------------
  function buildAtomicIonInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    grp.rotation.set(0.04, -0.08, 0);
    cell.add(grp);

    const R_RING = 1.40;

    // Luminous optical bezel ring
    const ringMat = reg(
      'ion_atoms',
      phys({
        color: '#7ce8ff',
        emissive: '#105878',
        emissiveIntensity: 0.48,
        roughness: 0.18,
        metalness: 0.24,
        clearcoat: 0.76,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.036, 14, 64), ringMat));

    // Dark-field frosted optical disc backing (clean readability with zero bleed!)
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 56),
      reg(
        'ion_atoms',
        phys({
          color: '#081224',
          roughness: 0.18,
          transparent: true,
          opacity: 0.78,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.12;
    grp.add(glassDisc);

    const S_AT = sculpt('ion_atoms', grp, {
      emissive: '#102438',
      emissiveIntensity: 0.28,
      roughness: 0.20,
      clearcoat: 0.68,
    });

    // Authentic CPK + ion palette
    const cC = col('#94a4ba'); // Carbon
    const cH = col('#f0f8ff'); // Hydrogen
    const cN = col('#4c96ff'); // Nitrogen
    const cO = col('#ff5264'); // Oxygen
    const cP = col('#ff9838'); // Phosphorus
    const cNa = col('#ffba38'); // Na+ (0.102 nm)
    const cK = col('#c678ff'); // K+ (0.138 nm)
    const cBond = col('#c8d8ee');

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.020) => S_AT.stick(a, b, r, c1, c2);

    // Subtle quadrant crosshairs strictly inside ring (r <= 1.02)
    S_AT.stick(V(0, -0.78, -0.04), V(0, 0.72, -0.04), 0.009, col('#4a668c'), col('#4a668c'));
    S_AT.stick(V(-1.02, -0.02, -0.04), V(1.02, -0.02, -0.04), 0.009, col('#4a668c'), col('#4a668c'));

    // QUADRANT 1 (Top-Left): Hydrated Na+ (0.102 nm — compact amber ion + tight 4-H2O hydration shell!)
    const naCtr = V(-0.56, 0.38, 0.08);
    atom(naCtr, 0.095, cNa);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI * 0.25;
      const ox = naCtr.clone().add(V(Math.cos(a) * 0.25, Math.sin(a) * 0.25, 0.02));
      atom(ox, 0.056, cO);
      atom(ox.clone().add(V(Math.cos(a + 0.45) * 0.09, Math.sin(a + 0.45) * 0.09, 0.01)), 0.034, cH);
      atom(ox.clone().add(V(Math.cos(a - 0.45) * 0.09, Math.sin(a - 0.45) * 0.09, 0.01)), 0.034, cH);
      bond(naCtr, ox, cNa, cO, 0.012);
    }

    // QUADRANT 2 (Top-Right): Hydrated K+ (0.138 nm — visibly 35% larger violet ion + wider hydration shell!)
    const kCtr = V(0.56, 0.38, 0.08);
    atom(kCtr, 0.132, cK);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.2;
      const ox = kCtr.clone().add(V(Math.cos(a) * 0.30, Math.sin(a) * 0.30, 0.02));
      atom(ox, 0.052, cO);
      atom(ox.clone().add(V(Math.cos(a + 0.42) * 0.08, Math.sin(a + 0.42) * 0.08, 0.01)), 0.031, cH);
      atom(ox.clone().add(V(Math.cos(a - 0.42) * 0.08, Math.sin(a - 0.42) * 0.08, 0.01)), 0.031, cH);
      bond(kCtr, ox, cK, cO, 0.011);
    }

    // QUADRANT 3 (Bottom-Left): Polar H2O Dipole (104.5° bent angle, delta- O + two delta+ H)
    const wO = V(-0.56, -0.34, 0.10);
    const halfA = (104.5 * Math.PI) / 360;
    const wH1 = wO.clone().add(V(-Math.sin(halfA) * 0.28, -Math.cos(halfA) * 0.28, 0.02));
    const wH2 = wO.clone().add(V(Math.sin(halfA) * 0.28, -Math.cos(halfA) * 0.28, 0.02));
    atom(wO, 0.112, cO);
    atom(wH1, 0.072, cH);
    atom(wH2, 0.072, cH);
    bond(wO, wH1, cO, cH, 0.028);
    bond(wO, wH2, cO, cH, 0.028);

    // QUADRANT 4 (Bottom-Right): POPC Phospholipid Headgroup (Choline N+ — Phosphate PO4- — Glycerol C)
    const pP = V(0.56, -0.44, 0.10);
    const pN = V(0.24, -0.26, 0.08);
    const pC1 = V(0.38, -0.38, 0.08);
    const pO1 = V(0.56, -0.24, 0.12);
    const pO2 = V(0.56, -0.64, 0.12);
    const pO3 = V(0.76, -0.44, 0.08);
    const pC2 = V(0.92, -0.54, 0.06);
    const pC3 = V(0.92, -0.30, 0.06);
    atom(pP, 0.095, cP); // Phosphorus!
    atom(pN, 0.082, cN); // Choline Nitrogen!
    atom(pC1, 0.062, cC);
    atom(pO1, 0.068, cO);
    atom(pO2, 0.068, cO);
    atom(pO3, 0.068, cO);
    atom(pC2, 0.062, cC);
    atom(pC3, 0.062, cC);
    bond(pN, pC1, cN, cC, 0.022);
    bond(pC1, pP, cC, cP, 0.024);
    bond(pP, pO1, cP, cO, 0.024);
    bond(pP, pO2, cP, cO, 0.024);
    bond(pP, pO3, cP, cO, 0.024);
    bond(pO3, pC2, cO, cC, 0.022);
    bond(pO3, pC3, cO, cC, 0.022);

    S_AT.done();

    // Zero-clipping crisp top & bottom labels centered GENEROUSLY inside R_RING = 1.40 (max corner r <= 1.24 << 1.40!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 96;
    const tg = topCv.getContext('2d')!;
    tg.clearRect(0, 0, 512, 96);
    tg.textAlign = 'center';
    tg.font = '700 28px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffd262';
    tg.fillText('Na⁺ 0.102 nm', 140, 36);
    tg.fillStyle = '#dca4ff';
    tg.fillText('K⁺ 0.138 nm', 372, 36);
    tg.font = '600 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#d4ebff';
    tg.fillText('Hydrated Ion Radii', 256, 74);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.72, 0.32),
      reg(
        'ion_atoms',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.85,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 0.86, 0.15);
    grp.add(topLbl);

    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 104;
    const bg = botCv.getContext('2d')!;
    bg.clearRect(0, 0, 512, 104);
    bg.textAlign = 'center';
    bg.font = '700 26px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#82f0ff';
    bg.fillText('H₂O 104.5°', 142, 30);
    bg.fillStyle = '#ffc06c';
    bg.fillText('POPC Head', 370, 30);
    // Compact CPK key row strictly centered inside bottom chord
    const cpkRow = [
      ['C', '#94a4ba'], ['H', '#f0f8ff'], ['N', '#4c96ff'], ['O', '#ff5264'], ['P', '#ff9838'],
    ];
    bg.font = '700 24px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    cpkRow.forEach(([sym, hex], idx) => {
      const bx = 76 + idx * 74;
      bg.beginPath();
      bg.arc(bx, 74, 11, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#f2f8ff';
      bg.fillText(sym, bx + 15, 75);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.60, 0.32),
      reg(
        'ion_atoms',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.85,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -0.89, 0.15);
    grp.add(botLbl);

    SITES.ion_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // 11. Live Opaque-Discard 4x4 MOL Flows (Exact 6 Species + Live Counters!)
  //     o2_co2, h2o_osmosis, glucose_flow, na_out, k_in, atp_cargo
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    o2_co2: ['O₂ / CO₂ (Simple Diff.)', '#5cf2ff', 0, 0.25],
    h2o_osmosis: ['H₂O Osmosis (AQP1)', '#38b6ff', 1, 0.25],
    glucose_flow: ['D-Glucose (GLUT1)', '#5effa2', 2, 0.28],
    na_out: ['3 Na⁺ Out (Active Pump)', '#ffba42', 3, 0.26],
    k_in: ['2 K⁺ In (Active Pump)', '#c67cff', 4, 0.27],
    atp_cargo: ['ATP → ADP+Pᵢ & Cargo', '#ff72aa', 5, 0.28],
  };

  function glyph(g: CanvasRenderingContext2D, k: number, x: number, y: number, s: number, fill = '#ffffff') {
    const P = (u: number, v: number): [number, number] => [x + u * s, y + v * s];
    const ink = '#0c121c';
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
      case 0: // o2_co2: nonpolar diatomic gas dumbbell
        drawPoly([[0.32, 0.50], [0.68, 0.50]], false, 0.10);
        drawBalls([[0.30, 0.50, 0.19], [0.70, 0.50, 0.19]]);
        break;
      case 1: // h2o_osmosis: bent 104.5° water dipole
        drawPoly([[0.50, 0.38], [0.27, 0.68]], false, 0.08);
        drawPoly([[0.50, 0.38], [0.73, 0.68]], false, 0.08);
        drawBalls([[0.50, 0.38, 0.20], [0.27, 0.68, 0.12], [0.73, 0.68, 0.12]]);
        break;
      case 2: // glucose_flow: hexagonal pyranose ring
        drawPoly([
          [0.50, 0.18], [0.78, 0.34], [0.78, 0.66],
          [0.50, 0.82], [0.22, 0.66], [0.22, 0.34],
        ], true, 0.11);
        drawBalls([[0.50, 0.50, 0.10]]);
        break;
      case 3: // na_out: compact radiant Na+ sphere with + badge
        drawBalls([[0.50, 0.50, 0.24]]);
        drawPoly([[0.38, 0.50], [0.62, 0.50]], false, 0.07);
        drawPoly([[0.50, 0.38], [0.50, 0.62]], false, 0.07);
        break;
      case 4: // k_in: larger violet K+ ion sphere with outer hydration halo
        drawBalls([[0.50, 0.50, 0.29]]);
        drawBalls([[0.22, 0.26, 0.07], [0.78, 0.26, 0.07], [0.50, 0.82, 0.07]]);
        break;
      case 5: // atp_cargo: ATP triphosphate starburst / cargo bead
        drawPoly([[0.22, 0.52], [0.46, 0.42], [0.72, 0.54]], false, 0.09);
        drawBalls([[0.22, 0.52, 0.14], [0.48, 0.42, 0.14], [0.74, 0.52, 0.17]]);
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

  const FLOW_MAX = 680;
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

  // Additive reaction & fusion splash rings
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
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mv.z), 0., 68.); gl_Position = projectionMatrix * mv; }`,
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
  let waterNetFlux = 0; // +inward (hypotonic), 0 (isotonic), -outward (hypertonic)
  let pumpCycles = 0;
  let flowsOn = true;
  let flowSpeed = 1;
  let fClock = 0;
  let molHi: string | null = null;
  let hi: string | null = null;

  function splash(at: THREE.Vector3, hex: string, s = 0.36) {
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
    const el = molCountEls[type];
    if (el) el.textContent = String(FLOW_COUNTS[type]);
  }

  const STREAM_TIMERS = [
    // 1. Simple Diffusion: nonpolar O2 entering & CO2 exiting across open POPC bilayer core (0 ATP)
    {
      rate: 2.2,
      acc: 0.5,
      go: () => {
        const down = rand() < 0.55;
        const x = X_SIMPLE + (down ? rr(-0.62, -0.10) : rr(0.10, 0.62));
        const z = Z_MEM + rr(-0.18, 0.55);
        const pTop = V(x, Y_MEM + 1.65, z);
        const pMid = V(x + rr(-0.12, 0.12), Y_MEM, z + 0.10);
        const pBot = V(x, Y_MEM - 1.65, z);
        emitFlow('o2_co2', down ? [pTop, pMid, pBot] : [pBot, pMid, pTop], ['simple_diff', 'bilayer'], 2.4);
      },
    },
    // 2. Osmosis H2O Stream: reverses dynamically across Hypotonic (inward), Isotonic (balanced), Hypertonic (outward)!
    {
      rate: 3.4,
      acc: 0.6,
      go: () => {
        const inward = mode === 'hypotonic' ? true : mode === 'hypertonic' ? false : rand() < 0.5;
        waterNetFlux += inward ? 1 : -1;
        // 2a. Stream through Aquaporin AQP1 hourglass pore
        const pOut = V(X_AQP + rr(-0.22, 0.22), Y_MEM + 1.68, Z_MEM + rr(0.05, 0.36));
        const pWaist = V(X_AQP, Y_MEM, Z_MEM + 0.20);
        const pIn = V(X_AQP + rr(-0.22, 0.22), Y_MEM - 1.68, Z_MEM + rr(0.05, 0.36));
        emitFlow('h2o_osmosis', inward ? [pOut, pWaist, pIn] : [pIn, pWaist, pOut], ['aquaporin', 'water_flow'], 2.1, () => {
          if (rand() < 0.35) splash(pWaist, '#5ce2ff', 0.30);
        });
        // 2b. Macroscopic H2O flux entering/leaving the upper Animal Cell & Plant Cell vacuole!
        const toPlant = rand() < 0.5;
        const ctr = toPlant ? PLANT_C : ANIMAL_C;
        const ang = rr(0, Math.PI * 2);
        const dir = V(Math.cos(ang), Math.sin(ang) * 0.72, rr(0.15, 0.65)).normalize();
        const farPt = ctr.clone().addScaledVector(dir, 2.55);
        const nearPt = ctr.clone().addScaledVector(dir, toPlant ? 0.85 : 0.75);
        const midPt = farPt.clone().lerp(nearPt, 0.5);
        emitFlow(
          'h2o_osmosis',
          inward ? [farPt, midPt, nearPt] : [nearPt, midPt, farPt],
          toPlant ? ['plant_cell', 'vacuole', 'cell_wall', 'water_flow'] : ['animal_cell', 'water_flow'],
          2.2
        );
      },
    },
    // 3. Facilitated Diffusion: D-Glucose crossing GLUT1 down gradient (0 ATP)
    {
      rate: 1.8,
      acc: 0.4,
      go: () => {
        const p0 = V(X_GLUT + rr(-0.35, 0.35), Y_MEM + 1.75, Z_MEM + rr(0.0, 0.42));
        const p1 = V(X_GLUT, Y_MEM, Z_MEM + 0.18);
        const p2 = V(X_GLUT + rr(-0.35, 0.35), Y_MEM - 1.75, Z_MEM + rr(0.0, 0.42));
        emitFlow('glucose_flow', [p0, p1, p2], ['glut1', 'bilayer'], 2.7, () => splash(p1, '#60ff9e', 0.32));
      },
    },
    // 4. Primary Active Transport: EXACT stoichiometric 3 Na+ out : 2 K+ in : 1 ATP hydrolyzed per cycle!
    {
      rate: 1.05,
      acc: 0.5,
      go: () => {
        pumpCycles++;
        // Exact 3 Na+ exported UP (cytosol -> extracellular)
        for (let n = 0; n < 3; n++) {
          const xo = (n - 1) * 0.22;
          const p0 = V(X_NAK + xo, Y_MEM - 1.65, Z_MEM + 0.35);
          const p1 = V(X_NAK + xo * 0.4, Y_MEM, Z_MEM + 0.28);
          const p2 = V(X_NAK + xo * 1.1, Y_MEM + 1.78, Z_MEM + 0.32);
          emitFlow('na_out', [p0, p1, p2], ['nak_pump', 'membrane_voltage', 'ion_atoms'], 2.5);
        }
        // Exact 2 K+ imported DOWN (extracellular -> cytosol)
        for (let k = 0; k < 2; k++) {
          const xo = (k === 0 ? -0.18 : 0.18);
          const p0 = V(X_NAK + xo, Y_MEM + 1.78, Z_MEM + 0.42);
          const p1 = V(X_NAK + xo * 0.5, Y_MEM, Z_MEM + 0.34);
          const p2 = V(X_NAK + xo * 1.1, Y_MEM - 1.68, Z_MEM + 0.38);
          emitFlow('k_in', [p0, p1, p2], ['nak_pump', 'membrane_voltage', 'ion_atoms'], 2.5);
        }
        // Exact 1 ATP -> ADP + Pi cleavage event at cytosolic pump cleft
        const pAtp0 = V(X_NAK - 0.85, Y_MEM - 2.15, Z_MEM + 0.45);
        const pAtp1 = V(X_NAK + 0.02, Y_MEM - 1.78, Z_MEM + 0.38);
        const pAtp2 = V(X_NAK + 0.88, Y_MEM - 2.25, Z_MEM + 0.45);
        emitFlow('atp_cargo', [pAtp0, pAtp1, pAtp2], ['atp_hydrolysis', 'nak_pump'], 2.3, () =>
          splash(pAtp1, '#ffd654', 0.44)
        );
      },
    },
    // 5. Bulk Vesicular Transport: Clathrin Endocytic uptake + SNARE Exocytic secretion
    {
      rate: 1.5,
      acc: 0.4,
      go: () => {
        if (rand() < 0.5) {
          // Endocytosis into clathrin pit
          const p0 = V(X_CLATH + rr(-0.45, 0.45), Y_MEM + 1.45, Z_MEM + 0.30);
          const p1 = CLATH_C.clone().add(V(0, 0.15, 0.25));
          const p2 = CLATH_C.clone().add(V(rr(-0.3, 0.3), -1.10, 0.25));
          emitFlow('atp_cargo', [p0, p1, p2], ['clathrin_pit', 'vesicle_cargo'], 2.7, () => splash(p1, '#df82ff', 0.36));
        } else {
          // Exocytosis bursting upward through SNARE fusion pore
          const p0 = SNARE_C.clone().add(V(0, -0.55, 0.25));
          const p1 = SNARE_C.clone().add(V(0, 0.68, 0.25));
          const p2 = V(X_SNARE + rr(-0.55, 0.55), Y_MEM + 1.65, Z_MEM + 0.35);
          emitFlow('atp_cargo', [p0, p1, p2], ['snare_fusion', 'vesicle_cargo'], 2.5, () => splash(p1, '#ff8662', 0.38));
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
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.48 : 0.50) : 1);
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
  // 12. Live Tonicity Deformation & Nanomachine Kinematics
  // -------------------------------------------------------------------------
  let lastDeformedT = 999;

  function applyTonicityDeformation(tVal: number) {
    // Only recompute vertex buffers when tonicityVal changes meaningfully (keeps 60 fps effortless!)
    if (Math.abs(tVal - lastDeformedT) < 0.002) return;
    lastDeformedT = tVal;

    const hypo = Math.max(0, -tVal); // 0..1 (Hypotonic)
    const hyper = Math.max(0, tVal); // 0..1 (Hypertonic)

    // 1. Animal Cell live morphing: Hypotonic swelling (+23%) vs Hypertonic spiked crenation (-24% + harmonic spicules!)
    const morphAnimalMesh = (geo: THREE.BufferGeometry | null, dirs: Float32Array | null, radii: Float32Array | null, spikeScale: number) => {
      if (!geo || !dirs || !radii) return;
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const dx = dirs[i * 3], dy = dirs[i * 3 + 1], dz = dirs[i * 3 + 2];
        const r0 = radii[i];
        // Harmonic echinocyte spicule lobes for dramatic textbook crenation!
        const s1 = Math.sin(dx * 8.5 + 0.4) * Math.cos(dy * 8.5 - 0.3) * Math.sin(dz * 8.5 + 0.7);
        const s2 = Math.cos(dx * 12.2 - dy * 7.4) * Math.sin(dz * 11.0 + 0.5);
        const spikes = Math.pow(Math.max(0, 0.5 + 0.5 * (s1 * 0.65 + s2 * 0.35)), 2.2) * 0.34 * spikeScale;
        const rMod = 1 + 0.22 * hypo - 0.26 * hyper + hyper * spikes;
        const r = r0 * rMod;
        pos.setXYZ(i, dx * r, dy * r, dz * r);
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
    };
    morphAnimalMesh(animalShellGeo, animalBaseDirs, animalBaseRadii, 1.0);
    morphAnimalMesh(animalInnerGeo, animalInnerDirs, animalInnerRadii, 0.85);
    if (animalLysisGroup) animalLysisGroup.visible = hypo > 0.35;

    // 2. Plant Cell Protoplast: Hypotonic tight against cellulose wall (+9%) vs Hypertonic Plasmolysis (-35% concave shrink!)
    if (plantProtoGeo && plantProtoBasePos && plantProtoNorms) {
      const pos = plantProtoGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const bx = plantProtoBasePos[i * 3], by = plantProtoBasePos[i * 3 + 1], bz = plantProtoBasePos[i * 3 + 2];
        // Concave inward scalloping during hypertonic plasmolysis (classic pulled-away scalloped protoplast!)
        const scallop = 0.14 * hyper * Math.sin(bx * 2.8) * Math.cos(by * 2.8);
        const sx = 1 + 0.085 * hypo - 0.36 * hyper - Math.abs(scallop);
        const sy = 1 + 0.085 * hypo - 0.34 * hyper - Math.abs(scallop);
        const sz = 1 + 0.085 * hypo - 0.32 * hyper;
        pos.setXYZ(i, bx * sx, by * sy, bz * sz);
      }
      pos.needsUpdate = true;
      plantProtoGeo.computeVertexNormals();
    }
    if (plantChloroGroup) {
      const cScale = 1 + 0.06 * hypo - 0.34 * hyper;
      plantChloroGroup.scale.setScalar(cScale);
    }
    // 3. Plant Central Vacuole: Hypotonic swollen turgid (+26%) vs Hypertonic collapsed (-52%!)
    if (plantVacGeo && plantVacBasePos) {
      const pos = plantVacGeo.attributes.position;
      const vScale = 1 + 0.24 * hypo - 0.52 * hyper;
      for (let i = 0; i < pos.count; i++) {
        const bx = plantVacBasePos[i * 3], by = plantVacBasePos[i * 3 + 1], bz = plantVacBasePos[i * 3 + 2];
        const crinkle = hyper * 0.08 * Math.sin(bx * 4.2 + by * 3.8);
        pos.setXYZ(i, bx * (vScale + crinkle), by * (vScale - crinkle), bz * vScale);
      }
      pos.needsUpdate = true;
      plantVacGeo.computeVertexNormals();
      // Scale inner vacuole core smoothly too
      const coreObj = cell.getObjectByName('vacCore');
      if (coreObj) coreObj.scale.setScalar(vScale);
    }
    if (plantWallGroup) {
      // Rigid cellulose wall barely flexes (+2.2% taut turgor micro-expansion)
      plantWallGroup.scale.setScalar(1 + 0.022 * hypo);
    }
    if (plantTurgorArrows) plantTurgorArrows.visible = hypo > 0.35;
    if (plantHechtianGroup) plantHechtianGroup.visible = hyper > 0.35;
  }

  function updateBiomechanics(dt: number) {
    animClock += dt;
    // Smoothly approach target tonicity state (or snap fast if dt is large in step())
    const rate = Math.min(1, dt * 6.0);
    tonicityVal += (targetTonicityVal - tonicityVal) * rate;
    if (Math.abs(targetTonicityVal - tonicityVal) < 0.003) tonicityVal = targetTonicityVal;
    applyTonicityDeformation(tonicityVal);

    // Subtle pulsing on lysis burst / turgor pressure arrows
    if (animalLysisGroup && animalLysisGroup.visible) {
      const p = 1 + 0.04 * Math.sin(animClock * 5.2);
      animalLysisGroup.scale.setScalar(p);
    }
    if (plantTurgorArrows && plantTurgorArrows.visible) {
      const p = 1 + 0.035 * Math.sin(animClock * 4.4);
      plantTurgorArrows.scale.setScalar(p);
    }

    // 1. Simple Diffusion O2/CO2 nonpolar gases weaving straight across the acyl tails
    simpleGasBeads.forEach((b, idx) => {
      const u = (b.u0 + animClock * 0.24) % 1;
      const y = b.dir < 0 ? 1.50 - u * 3.00 : -1.50 + u * 3.00;
      const wobX = 0.08 * Math.sin(u * Math.PI * 3 + idx);
      b.mesh.position.set(b.xOff + wobX, y, b.zOff);
      b.mesh.rotation.set(animClock * 1.4 + idx, animClock * 1.1, idx * 0.6);
    });

    // 2. Aquaporin AQP1 Single-File H2O Dipole Chain flipping 180° at the NPA waist!
    //    Reverses flux direction live with tonicity (Hypotonic = downward/inward, Isotonic = gentle oscillation, Hypertonic = upward/outward)
    const dirSign = mode === 'hypotonic' ? -1 : mode === 'hypertonic' ? 1 : 0;
    aqpWaterDipoles.forEach((w, idx) => {
      let u: number;
      if (dirSign === 0) {
        u = (w.u0 + 0.06 * Math.sin(animClock * 2.2 + idx * 0.6) + 1) % 1;
      } else {
        u = (w.u0 + animClock * 0.28 * dirSign + 10) % 1;
      }
      const y = -1.32 + u * 2.64; // traverses full hourglass channel
      w.grp.position.set(0.03 * Math.sin(u * Math.PI * 2 + idx), y, 0.36);
      // Iconic AQP1 NPA dipole reorientation: hydrogens point upward above waist, flip 180° across y=0!
      const flip = Math.tanh(y * 3.2) * (Math.PI * 0.5) + Math.PI * 0.5;
      w.grp.rotation.set(0, animClock * 0.8 + idx, flip);
    });

    // 3. GLUT1 Alternating-Access Rocker Switch (`4PYP` N-lobe & C-lobe + D-Glucose hexose)
    const gCycle = (animClock * 0.42) % 1;
    const rock = Math.sin(gCycle * Math.PI * 2); // +1 outward-open -> 0 occluded -> -1 inward-open
    if (glutLobeN && glutLobeC) {
      glutLobeN.rotation.z = rock * 0.19;
      glutLobeC.rotation.z = -rock * 0.19;
      glutLobeN.position.x = -0.05 * Math.abs(rock);
      glutLobeC.position.x = 0.05 * Math.abs(rock);
    }
    if (glutGlucoseCargo) {
      const gy = 1.42 - gCycle * 2.84;
      glutGlucoseCargo.position.set(0.05 * Math.sin(gCycle * Math.PI * 4), gy, 0.42);
      glutGlucoseCargo.rotation.set(animClock * 1.1, animClock * 1.4, 0.3);
    }

    // 4. Na+/K+-ATPase E1 <-> E2 Active Pumping Cycle + ATP -> ADP + Pi cleavage flash!
    const pPhase = (animClock * 0.55) % 1; // 0..0.5 E1->E2 (3 Na+ out + ATP cleave), 0.5..1.0 E2->E1 (2 K+ in)
    if (nakHeroGrp) {
      nakHeroGrp.rotation.z = 0.065 * Math.sin(pPhase * Math.PI * 2);
      nakHeroGrp.position.y = -0.34 + 0.05 * Math.cos(pPhase * Math.PI * 2);
    }
    nakNaCargo.forEach((m, idx) => {
      const u = (pPhase + idx * 0.08) % 1;
      const y = -1.48 + u * 3.05;
      m.position.set(-0.22 + idx * 0.22, y, 0.34 + 0.08 * Math.sin(u * Math.PI));
    });
    nakKCargo.forEach((m, idx) => {
      const u = (pPhase + 0.5 + idx * 0.10) % 1;
      const y = 1.56 - u * 3.05;
      m.position.set(-0.18 + idx * 0.36, y, 0.42 + 0.08 * Math.sin(u * Math.PI));
    });
    if (atpFlashRing && atpPiBead && atpMoleculeGrp) {
      const burst = Math.max(0, Math.sin(pPhase * Math.PI * 2));
      atpFlashRing.scale.setScalar(0.72 + 0.55 * burst);
      (atpFlashRing.material as THREE.MeshPhysicalMaterial).opacity = 0.28 + 0.68 * burst;
      // Cleaved gamma-Pi rises cleanly toward Asp369 phosphorylation pocket on pump!
      atpPiBead.position.set(0.46 - 0.36 * burst, 0.04 + 0.52 * burst, 0.06);
      atpMoleculeGrp.position.y = -0.06 * Math.sin(pPhase * Math.PI * 2);
    }

    // 5. Gentle living pulsation on Resting Membrane Voltage bars, Clathrin bud & SNARE exocytic vesicle
    voltageGlowBars.forEach((bar, idx) => {
      const mat = bar.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity = 0.56 + 0.22 * Math.sin(animClock * 2.8 + idx * 1.1);
    });
    if (clathrinBudGrp) {
      clathrinBudGrp.position.y = -0.08 * Math.sin(animClock * 1.6);
    }
    if (snareVesicleGrp && snareZipperGrp) {
      const zip = 0.5 + 0.5 * Math.sin(animClock * 1.8);
      snareVesicleGrp.position.y = -0.14 + 0.20 * zip;
      snareZipperGrp.scale.set(1 - 0.07 * zip, 1, 1 - 0.07 * zip);
    }
  }

  // -------------------------------------------------------------------------
  // 13. Live 3-Mode Tonicity Switch (#modeBtn): isotonic | hypotonic | hypertonic
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: TonicityMode, silent = false) {
    const target: TonicityMode =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;
    targetTonicityVal = mode === 'hypotonic' ? -1 : mode === 'hypertonic' ? 1 : 0;
    // Snap immediately when invoked programmatically (silent = true) so deterministic views/shots update on frame 0!
    if (silent) {
      tonicityVal = targetTonicityVal;
      applyTonicityDeformation(tonicityVal);
    }
    updateCellPlaques();

    // Responsive Cinema microscopy lighting warmth per tonicity regime
    if (mode === 'hypotonic') {
      lamp.color.set('#7ae6ff');
      plantLamp.color.set('#44ffb8');
      plantLamp.intensity = 13.5;
    } else if (mode === 'hypertonic') {
      lamp.color.set('#ffb86c');
      plantLamp.color.set('#ffd068');
      plantLamp.intensity = 11.0;
    } else {
      lamp.color.set('#ffb494');
      plantLamp.color.set('#48f0aa');
      plantLamp.intensity = 9.5;
    }

    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.toggle('hypotonic', mode === 'hypotonic');
      modeBtn.classList.toggle('hypertonic', mode === 'hypertonic');
    }
    if (subEl) {
      subEl.textContent =
        mode === 'hypotonic'
          ? 'HYPOTONIC ([Solute]out < [Solute]in) · Net H₂O IN → Animal osmotic lysis vs. Plant turgid vacuole pressed against cellulose wall'
          : mode === 'hypertonic'
            ? 'HYPERTONIC ([Solute]out > [Solute]in) · Net H₂O OUT → Animal spiked crenation vs. Plant plasmolysis detaching from cellulose wall'
            : 'ISOTONIC (Balanced ΔΨw = 0) · Equal H₂O flux · Stable Animal Cell vs. Flaccid Plant Cell above the 5 nm POPC bilayer';
    }
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => {
      setMode();
      // If user was zoomed into active_pump or vesicular_atoms, gently bring the tonicity comparator into view!
      if (curView === 'active_pump' || curView === 'vesicular_atoms') {
        const vi = VIEWS.findIndex(x => x[0] === 'tonicity');
        if (vi >= 0) {
          view = vi;
          curView = 'tonicity';
          const [, p, t] = VIEWS[vi];
          camera.position.copy(cell.localToWorld(p.clone()));
          controls.target.copy(cell.localToWorld(t.clone()));
          const vb = document.getElementById('view');
          if (vb) vb.textContent = `View: ${curView}`;
        }
      }
    };
  }

  // -------------------------------------------------------------------------
  // 14. Resize, Zero-Scrollbar HUD Legend, Flows Panel & Interactive Highlights
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
    ['C', '#94a4ba'], ['H', '#f0f8ff'], ['N', '#4c96ff'], ['O', '#ff5264'], ['P', '#ff9838'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}<span class="vm-tag">Vₘ −70 mV</span></div>` +
    `<div class="row"><span class="bar" style="background:#4ceeff"></span>Passive (0 ATP) <span class="bar" style="background:#ffb842;margin-left:5px"></span>Active (ATP)</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip')!;
  const TIP0 = 'Membrane Transport & Osmosis Lab: toggle Hypotonic, Isotonic, and Hypertonic to compare Animal vs. Plant Cell osmosis, then inspect all 5 bilayer mechanisms from O₂ diffusion to Na⁺/K⁺-ATPase and SNARE fusion.';
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
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#6ce8ff');

  // -------------------------------------------------------------------------
  // 15. Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
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
    (e.target as HTMLElement).textContent = `Transport: ${flowsOn ? 'on' : 'off'}`;
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
    a.download = `membrane-transport-${mode}-realistic.png`;
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
    if (m.pos) return { p: V(...(m.pos as [number, number, number])), t: V(...((m.target ?? m.tgt ?? [0.12, -0.35, 0.22]) as [number, number, number])) };
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

  const fp = V(), ft = V(), qa = V(), qb = V(), lookV = V(), rightV = V(), C0 = V(0.12, -0.35, 0.22);
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

  // Exact tag coordinates for ALL 16 parts across ALL 5 views
  const POINTS: Record<string, Record<string, THREE.Vector3>> = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base: Record<string, THREE.Vector3> = {
      animal_cell: ANIMAL_C.clone().add(V(-0.35, 0.35, 0.85)),
      plant_cell: PLANT_C.clone().add(V(-0.95, 0.72, 0.65)),
      cell_wall: PLANT_C.clone().add(V(1.65, 1.05, 0.35)),
      vacuole: PLANT_C.clone().add(V(0.18, 0.05, 0.55)),
      bilayer: V(-4.35, Y_MEM + 0.35, Z_MEM + 0.85),
      simple_diff: V(X_SIMPLE, Y_MEM + 0.72, Z_MEM + 0.48),
      aquaporin: V(X_AQP - 0.35, Y_MEM + 0.42, Z_MEM + 0.58),
      water_flow: V(X_AQP, Y_MEM - 0.95, Z_MEM + 0.36),
      glut1: V(X_GLUT, Y_MEM + 0.45, Z_MEM + 0.55),
      nak_pump: V(X_NAK, Y_MEM + 0.65, Z_MEM + 0.55),
      atp_hydrolysis: V(X_NAK, Y_MEM - 1.78, Z_MEM + 0.52),
      membrane_voltage: V(X_VM, Y_MEM + 0.42, Z_MEM + 0.48),
      clathrin_pit: CLATH_C.clone().add(V(-0.25, -0.35, 0.55)),
      snare_fusion: SNARE_C.clone().add(V(0.32, 0.48, 0.55)),
      vesicle_cargo: SNARE_C.clone().add(V(0.0, -0.22, 0.58)),
      ion_atoms: ATOM_C.clone().add(V(0, 0, 0.16)),
    };
    let P = { ...base };
    if (vName === 'tonicity') {
      P = {
        ...base,
        animal_cell: ANIMAL_C.clone().add(V(-0.4, 0.4, 0.9)),
        plant_cell: PLANT_C.clone().add(V(-1.1, 0.7, 0.7)),
        cell_wall: PLANT_C.clone().add(V(1.75, 1.1, 0.4)),
        vacuole: PLANT_C.clone().add(V(0.1, 0.0, 0.6)),
      };
    } else if (vName === 'bilayer_passive') {
      P = {
        ...base,
        simple_diff: V(X_SIMPLE, Y_MEM + 0.55, Z_MEM + 0.45),
        aquaporin: V(X_AQP - 0.45, Y_MEM + 0.35, Z_MEM + 0.58),
        water_flow: V(X_AQP, Y_MEM - 0.85, Z_MEM + 0.36),
        glut1: V(X_GLUT, Y_MEM + 0.38, Z_MEM + 0.55),
      };
    } else if (vName === 'active_pump') {
      P = {
        ...base,
        nak_pump: V(X_NAK, Y_MEM + 0.45, Z_MEM + 0.55),
        atp_hydrolysis: V(X_NAK, Y_MEM - 1.78, Z_MEM + 0.52),
        membrane_voltage: V(X_VM, Y_MEM + 0.35, Z_MEM + 0.48),
      };
    } else if (vName === 'vesicular_atoms') {
      P = {
        ...base,
        clathrin_pit: CLATH_C.clone().add(V(-0.18, -0.35, 0.55)),
        snare_fusion: SNARE_C.clone().add(V(0.28, 0.48, 0.55)),
        vesicle_cargo: SNARE_C.clone().add(V(0.0, -0.18, 0.62)),
        ion_atoms: ATOM_C.clone().add(V(0, 0, 0.18)),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS: Record<string, { c: THREE.Vector3; r: number; dir: THREE.Vector3 } | null> = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD: Record<string, number> = {
      animal_cell: 2.5,
      plant_cell: 2.5,
      cell_wall: 2.7,
      vacuole: 2.0,
      bilayer: 4.0,
      simple_diff: 2.1,
      aquaporin: 2.1,
      water_flow: 1.9,
      glut1: 2.1,
      nak_pump: 2.4,
      atp_hydrolysis: 1.7,
      membrane_voltage: 2.1,
      clathrin_pit: 2.1,
      snare_fusion: 2.0,
      vesicle_cargo: 2.1,
      ion_atoms: 1.95,
    };
    const DIRS: Record<string, THREE.Vector3> = {
      animal_cell: V(0.10, 0.14, 0.98).normalize(),
      plant_cell: V(-0.10, 0.14, 0.98).normalize(),
      cell_wall: V(-0.12, 0.16, 0.98).normalize(),
      vacuole: V(-0.08, 0.10, 0.99).normalize(),
      bilayer: V(0.0, 0.22, 0.97).normalize(),
      aquaporin: V(0.06, 0.12, 0.99).normalize(),
      glut1: V(0.05, 0.12, 0.99).normalize(),
      nak_pump: V(0.08, 0.10, 0.99).normalize(),
      atp_hydrolysis: V(0.05, 0.04, 0.99).normalize(),
      membrane_voltage: V(0.05, 0.10, 0.99).normalize(),
      clathrin_pit: V(-0.08, 0.08, 0.99).normalize(),
      snare_fusion: V(0.08, 0.10, 0.99).normalize(),
      ion_atoms: V(-0.04, 0.04, 0.99).normalize(),
    };
    const dir = DIRS[k] ?? V(0.08, 0.14, 0.98).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.2, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    animal_cell: ['water_flow'],
    plant_cell: ['cell_wall', 'vacuole', 'water_flow'],
    cell_wall: ['plant_cell', 'vacuole'],
    vacuole: ['plant_cell', 'cell_wall', 'water_flow'],
    bilayer: ['simple_diff', 'aquaporin', 'glut1', 'nak_pump'],
    simple_diff: ['bilayer'],
    aquaporin: ['water_flow', 'bilayer'],
    water_flow: ['aquaporin', 'animal_cell', 'plant_cell', 'vacuole'],
    glut1: ['bilayer'],
    nak_pump: ['atp_hydrolysis', 'membrane_voltage', 'bilayer'],
    atp_hydrolysis: ['nak_pump'],
    membrane_voltage: ['nak_pump', 'bilayer'],
    clathrin_pit: ['vesicle_cargo', 'bilayer'],
    snare_fusion: ['vesicle_cargo', 'bilayer'],
    vesicle_cargo: ['clathrin_pit', 'snare_fusion'],
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
    if (m.tonicity) setMode(m.tonicity, true);
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
  // 16. Main Animation Loop
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 4.0) / 22));
      cell.rotation.y = 0.055 * Math.sin(sway * 0.11);
      updateBiomechanics(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.3, camera.position.distanceTo(controls.target) / 14.5));
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
    buildAnimalCell();
    buildPlantCell();
    buildPhospholipidBilayer();
    buildSimpleDiffusionStation();
    buildAquaporinStation(T);
    buildGlut1Station(T);
    buildNakPumpAndVoltageStation(T);
    buildVesicularTransportStation(T);
    buildAtomicIonInset();
    updateCellPlaques();
    updateBiomechanics(0.02);
    // Warm up live streams so all 6 species are flowing immediately on frame 1
    for (let s = 0; s < 120; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('isotonic', true);
    cell.updateMatrixWorld();
    updateAllCuts();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // 17. Explorer postMessage Protocol & window.__cell Debug Contract
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
      if (m.cmd === 'mode' || m.cmd === 'tonicity') setMode(m.mode ?? m.tonicity, true);
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
    get tonicityVal() { return tonicityVal; },
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
        pumpCycles,
        waterNetFlux,
        tonicity: mode,
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
