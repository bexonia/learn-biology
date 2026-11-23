// @ts-nocheck
/**
 * Cinema-Grade Biological PBR & Interactive Stage Kit
 *
 * Unifies the visual hallmarks of `animal_cell_realistic.ts` & `prokaryote_cell_realistic.ts`
 * with scientific cinema aesthetics (XVIVO *Inner Life of the Cell*, Drew Berry / WEHI,
 * Goodsell mesoscale crowding, cryo-EM AO shading, and Three.js wet-gel PBR + backlit SSS):
 *  - ACESFilmic tone mapping + 2048x2048 PCFSoft shadows + RoomEnvironment PMREM reflections
 *  - Deep indigo-to-obsidian radial dark-field backdrop + ambient floating bokeh specks
 *  - 3-point microscopy studio lights + warm interior cutaway cavity lamp
 *  - Refractive wet-gel MeshPhysicalMaterial (IOR 1.33-1.35, iridescence, clearcoat, sheen,
 *    organic waveNormalMap + backlit subsurface scattering glow)
 *  - Bilayer & monolayer cutaway cap strips, smooth swept organelles, and rim-lit GLSL impostors
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const UP = V(0, 1, 0);

/** Average normals on duplicated seam vertices (sphere seams, poles, sweep tubes). */
export function smoothSeams(g: THREE.BufferGeometry): THREE.BufferGeometry {
  const p = g.attributes.position;
  const n = g.attributes.normal;
  const map = new Map<string, number[]>();
  const v = V();
  for (let i = 0; i < p.count; i++) {
    const k = `${p.getX(i).toFixed(4)},${p.getY(i).toFixed(4)},${p.getZ(i).toFixed(4)}`;
    let a = map.get(k);
    if (!a) map.set(k, (a = []));
    a.push(i);
  }
  map.forEach(ids => {
    if (ids.length < 2) return;
    v.set(0, 0, 0);
    ids.forEach(i => { v.x += n.getX(i); v.y += n.getY(i); v.z += n.getZ(i); });
    if (v.lengthSq() < 1e-12) return;
    v.normalize();
    ids.forEach(i => n.setXYZ(i, v.x, v.y, v.z));
  });
  n.needsUpdate = true;
  return g;
}

/** Parallel-transport frames along a 3D curve (twist-free). */
export function ptFrames(curve: THREE.Curve<THREE.Vector3>, N: number) {
  const T: THREE.Vector3[] = [];
  const Ns: THREE.Vector3[] = [];
  const B: THREE.Vector3[] = [];
  for (let i = 0; i <= N; i++) T.push(curve.getTangentAt(i / N));
  let n = (Math.abs(T[0].y) < 0.9 ? V(0, 1, 0) : V(1, 0, 0)).cross(T[0]).normalize();
  for (let i = 0; i <= N; i++) {
    if (i > 0) n = n.clone().applyQuaternion(new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]));
    Ns.push(n);
    B.push(T[i].clone().cross(n));
  }
  return { N: Ns, B };
}

/** Variable-radius swept organic tube with smooth normals. */
export function sweepGeo(
  curve: THREE.Curve<THREE.Vector3>,
  rFn: (t: number) => number,
  N = 72,
  M = 24
): THREE.BufferGeometry {
  const fr = ptFrames(curve, N);
  const pos: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  const len = curve.getLength();
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const c = curve.getPointAt(t);
    const r = rFn(t);
    for (let j = 0; j <= M; j++) {
      const a = (j / M) * Math.PI * 2;
      const cs = Math.cos(a);
      const sn = Math.sin(a);
      pos.push(
        c.x + (fr.N[i].x * cs + fr.B[i].x * sn) * r,
        c.y + (fr.N[i].y * cs + fr.B[i].y * sn) * r,
        c.z + (fr.N[i].z * cs + fr.B[i].z * sn) * r
      );
      uv.push(t * len, j / M);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const a = i * (M + 1) + j;
      const b = a + 1;
      const c = a + M + 1;
      const d = c + 1;
      idx.push(a, b, c, b, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return smoothSeams(g);
}

/** Smooth noisy organic ellipsoid shell from a direction -> radius function. */
export function shellGeo(
  center: THREE.Vector3,
  rFn: (d: THREE.Vector3) => number,
  seg = 160
): THREE.BufferGeometry {
  const g = new THREE.SphereGeometry(1, seg, Math.round(seg * 0.66));
  const p = g.attributes.position;
  const v = V();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).normalize();
    const r = rFn(v);
    p.setXYZ(i, center.x + v.x * r, center.y + v.y * r, center.z + v.z * r);
  }
  g.computeVertexNormals();
  return smoothSeams(g);
}

/** Organic lumpy sphere using deterministic fbm noise. */
export function blobGeo(
  r: number,
  fbm: (x: number, y: number, z: number, oct?: number) => number,
  seedOffset = 17,
  amp = 0.08,
  freq = 2,
  detail = 4
): THREE.BufferGeometry {
  let g: THREE.BufferGeometry = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  g = mergeVertices(g);
  const p = g.attributes.position;
  const v = V();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = fbm(v.x * freq + seedOffset, v.y * freq, v.z * freq - seedOffset, 3);
    v.multiplyScalar(r * (1 + amp * (n - 0.5) * 2));
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

/** Multi-band cross-section strip capping a sliced membrane along the 90-deg cutaway planes. */
export function capStrip(
  center: THREE.Vector3,
  rFn: (d: THREE.Vector3) => number,
  axis: 'x' | 'z',
  thick: number,
  layers: ReadonlyArray<readonly [number, number, string]>,
  n = 220
): THREE.BufferGeometry {
  const pos: number[] = [];
  const col: number[] = [];
  const nor: number[] = [];
  const idx: number[] = [];
  const c = new THREE.Color();
  const off = axis === 'x' ? V(0.005, 0, 0) : V(0, 0, 0.005);
  const nrm = off.clone().normalize();
  const dirAt = (t: number) => {
    const a = t * Math.PI;
    return axis === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(Math.sin(a), Math.cos(a), 0);
  };
  let base = 0;
  layers.forEach(([f0, f1, hex]) => {
    c.set(hex);
    for (let i = 0; i <= n; i++) {
      const d = dirAt(i / n);
      const R = rFn(d);
      for (const f of [f0, f1]) {
        const p = center.clone().addScaledVector(d, R - f * thick).add(off);
        pos.push(p.x, p.y, p.z);
        col.push(c.r, c.g, c.b);
        nor.push(nrm.x, nrm.y, nrm.z);
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
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}

export const cylM = (a: THREE.Vector3, b: THREE.Vector3, r: number): THREE.Matrix4 => {
  const d = b.clone().sub(a);
  return new THREE.Matrix4().compose(
    a.clone().addScaledVector(d, 0.5),
    new THREE.Quaternion().setFromUnitVectors(UP, d.clone().normalize()),
    V(r, d.length(), r)
  );
};

export const atS = (
  p: THREE.Vector3,
  s: number | THREE.Vector3,
  q = new THREE.Quaternion()
): THREE.Matrix4 => new THREE.Matrix4().compose(p, q, typeof s === 'number' ? V(s, s, s) : s);

export function instanced(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  ms: THREE.Matrix4[],
  cols?: THREE.Color[]
): THREE.InstancedMesh {
  const m = new THREE.InstancedMesh(geo, mat, ms.length);
  ms.forEach((x, i) => m.setMatrixAt(i, x));
  if (cols) cols.forEach((c, i) => m.setColorAt(i, c));
  m.instanceMatrix.needsUpdate = true;
  if (m.instanceColor) m.instanceColor.needsUpdate = true;
  return m;
}

/** Tileable multi-frequency organic ripple normal map for living lipid membranes. */
export function makeOrganicWaveNormalMap(
  rand: () => number,
  size = 256,
  waves = 28,
  strength = 2.9
): THREE.CanvasTexture {
  const rr = (a: number, b: number) => a + (b - a) * rand();
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d')!;
  const img = g.createImageData(size, size);
  const h = new Float32Array(size * size);
  const W = Array.from({ length: waves }, () => ({
    fx: Math.round(rr(-12, 12)),
    fy: Math.round(rr(-12, 12)),
    ph: rr(0, Math.PI * 2),
    a: rr(0.3, 1.0)
  }));
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let s = 0;
      for (const w of W) s += w.a * Math.sin(((w.fx * x + w.fy * y) / size) * 6.2832 + w.ph);
      h[y * size + x] = s;
    }
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = h[y * size + ((x + 1) % size)] - h[y * size + ((x - 1 + size) % size)];
      const dy = h[((y + 1) % size) * size + x] - h[((y - 1 + size) % size) * size + x];
      const n = V((-dx * strength) / waves, (-dy * strength) / waves, 1).normalize();
      const i = (y * size + x) * 4;
      img.data[i] = (n.x * 0.5 + 0.5) * 255;
      img.data[i + 1] = (n.y * 0.5 + 0.5) * 255;
      img.data[i + 2] = (n.z * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/**
 * Injects lightweight backlit subsurface scattering (SSS) + grazing translucent rim warmth
 * into any MeshPhysicalMaterial while preserving Three.js clipping, shadows, transmission,
 * iridescence, and RoomEnvironment PMREM reflections.
 */
export function applyBacklitSSS<T extends THREE.MeshPhysicalMaterial>(
  mat: T,
  sssHex = '#ff9d7a',
  intensity = 0.24,
  power = 2.6
): T {
  const sssColor = new THREE.Color(sssHex);
  const key = `cinema-sss-${sssColor.getHexString()}-${intensity.toFixed(2)}-${power.toFixed(1)}`;
  mat.customProgramCacheKey = () => key;
  mat.onBeforeCompile = shader => {
    shader.uniforms.uSssColor = { value: sssColor };
    shader.uniforms.uSssInt = { value: intensity };
    shader.uniforms.uSssPow = { value: power };
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
uniform vec3 uSssColor;
uniform float uSssInt;
uniform float uSssPow;`
      )
      .replace(
        '#include <dithering_fragment>',
        `vec3 sssV = normalize(vViewPosition);
vec3 sssN = normalize(normal);
float sssRim = pow(clamp(1.0 - abs(dot(sssN, sssV)), 0.0, 1.0), uSssPow);
float sssWrap = clamp(dot(sssN, normalize(vec3(0.42, 0.58, 0.68))) * 0.5 + 0.5, 0.0, 1.0);
gl_FragColor.rgb += uSssColor * (sssRim * (0.45 + 0.55 * sssWrap)) * uSssInt;
#include <dithering_fragment>`
      );
  };
  return mat;
}

export interface CinemaStudioOptions {
  readonly fov?: number;
  readonly near?: number;
  readonly far?: number;
  readonly camPos?: readonly [number, number, number];
  readonly target?: readonly [number, number, number];
  readonly bgInner?: string;
  readonly bgMid?: string;
  readonly bgOuter?: string;
  readonly keyColor?: string;
  readonly keyIntensity?: number;
  readonly rimColor?: string;
  readonly rimIntensity?: number;
  readonly lampColor?: string;
  readonly lampIntensity?: number;
  readonly lampPos?: readonly [number, number, number];
  readonly bloomStrength?: number;
  readonly bloomRadius?: number;
  readonly bloomThreshold?: number;
  readonly exposure?: number;
  readonly bokehCount?: number;
  readonly bokehColor?: string;
  readonly rand?: () => number;
}

/**
 * Sets up the full cinema dark-field WebGL2 microscopy stage matching and elevating
 * `animal_cell_realistic.ts`: PMREM reflections, 2048 soft shadows, 3-point + cutaway
 * cavity lamp, ACESFilmic tone mapping, UnrealBloom + subtle chromatic/vignette/grain lens,
 * and floating out-of-focus depth bokeh particles.
 */
export function createCinemaStudio(opts: CinemaStudioOptions = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = opts.exposure ?? 0.96;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled = true;
  document.body.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d')!;
    const gr = g.createRadialGradient(290, 220, 0, 256, 256, 390);
    gr.addColorStop(0, opts.bgInner ?? '#1b263d');
    gr.addColorStop(0.52, opts.bgMid ?? '#0a101d');
    gr.addColorStop(1, opts.bgOuter ?? '#020307');
    g.fillStyle = gr;
    g.fillRect(0, 0, 512, 512);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(
    opts.fov ?? 30,
    innerWidth / innerHeight,
    opts.near ?? 0.08,
    opts.far ?? 600
  );
  const cp = opts.camPos ?? [23, 11.5, 29];
  const tg = opts.target ?? [-1.5, -0.4, 0];
  camera.position.set(cp[0], cp[1], cp[2]);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(tg[0], tg[1], tg[2]);
  controls.enableDamping = true;
  controls.minDistance = 0.45;
  controls.maxDistance = 120;
  controls.panSpeed = 0.5;
  controls.zoomSpeed = 0.55;

  // 3-point cinema microscopy lighting + warm cutaway cavity lamp
  const hemi = new THREE.HemisphereLight('#e3eeff', '#241c33', 0.5);
  const key = new THREE.DirectionalLight(opts.keyColor ?? '#fff2e0', opts.keyIntensity ?? 3.0);
  key.position.set(15, 25, 19);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 95 });
  key.shadow.bias = -0.0005;
  key.shadow.normalBias = 0.03;

  const rim = new THREE.DirectionalLight(opts.rimColor ?? '#92c5ff', opts.rimIntensity ?? 1.55);
  rim.position.set(-18, 7, -15);

  const lp = opts.lampPos ?? [5.0, 1.5, 5.2];
  const lamp = new THREE.PointLight(opts.lampColor ?? '#ffb885', opts.lampIntensity ?? 18, 32, 2);
  lamp.position.set(lp[0], lp[1], lp[2]);
  scene.add(hemi, key, rim, lamp);

  // Subtle ambient out-of-focus bokeh specks (XVIVO / dark-field depth cue)
  const rand = opts.rand ?? Math.random;
  const bokehCount = opts.bokehCount ?? 220;
  if (bokehCount > 0) {
    const pos: number[] = [];
    for (let i = 0; i < bokehCount; i++) {
      const u = rand() * 2 - 1;
      const th = rand() * Math.PI * 2;
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const r = 18 + rand() * 34;
      pos.push(s * Math.cos(th) * r, u * r, s * Math.sin(th) * r);
    }
    const bg = new THREE.BufferGeometry();
    bg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const bc = document.createElement('canvas');
    bc.width = bc.height = 64;
    const bx = bc.getContext('2d')!;
    const bgr = bx.createRadialGradient(32, 32, 0, 32, 32, 32);
    bgr.addColorStop(0, 'rgba(255,255,255,0.95)');
    bgr.addColorStop(0.45, 'rgba(200,225,255,0.35)');
    bgr.addColorStop(1, 'rgba(255,255,255,0)');
    bx.fillStyle = bgr;
    bx.fillRect(0, 0, 64, 64);
    scene.add(
      new THREE.Points(
        bg,
        new THREE.PointsMaterial({
          color: opts.bokehColor ?? '#86b4ff',
          size: 0.95,
          map: new THREE.CanvasTexture(bc),
          transparent: true,
          opacity: 0.2,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      )
    );
  }

  // Post-processing: soft HDR bloom + subtle optical lens pass
  const composer = new EffectComposer(renderer);
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    opts.bloomStrength ?? 0.28,
    opts.bloomRadius ?? 0.52,
    opts.bloomThreshold ?? 0.85
  );
  const lens = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uRes: { value: new THREE.Vector2(innerWidth, innerHeight) },
      uTime: { value: 0 }
    },
    vertexShader:
      'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
      float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 d = vUv - .5; float r2 = dot(d, d); vec2 o = d * r2 * .009;
        vec3 c = vec3(texture2D(tDiffuse, vUv + o).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - o).b);
        c *= mix(1., .54, smoothstep(.12, .64, r2 * 2.));
        c += (h(vUv * uRes + fract(uTime) * 91.7) - .5) * .028;
        gl_FragColor = vec4(c, 1.);
      }`
  });
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  composer.addPass(lens);

  const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)];
  const CUT = CUT_LOCAL.map(p => p.clone());
  const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };

  function updateCut(root: THREE.Object3D, cutOn: boolean) {
    CUT.forEach((p, i) => {
      p.copy(CUT_LOCAL[i]);
      if (!cutOn) p.constant = 1e4;
      p.applyMatrix4(root.matrixWorld);
    });
  }

  return {
    renderer,
    scene,
    camera,
    controls,
    composer,
    bloom,
    lens,
    key,
    rim,
    lamp,
    hemi,
    CUT_LOCAL,
    CUT,
    CLIP,
    updateCut
  };
}

/** Creates an iridescent refractive wet-gel plasma/archaeal membrane material with backlit SSS. */
export function makeCinemaMembraneMat(
  clip: Record<string, unknown>,
  normalMap: THREE.Texture,
  opts: {
    color?: string;
    attenuationColor?: string;
    attenuationDistance?: number;
    sssColor?: string;
    sssIntensity?: number;
    iridescence?: number;
    thickness?: number;
    roughness?: number;
    sheenColor?: string;
    normalScale?: number;
  } = {}
): THREE.MeshPhysicalMaterial {
  const ns = opts.normalScale ?? 0.22;
  const mat = new THREE.MeshPhysicalMaterial({
    ...clip,
    clipShadows: false,
    color: opts.color ?? '#e8f0ff',
    roughness: opts.roughness ?? 0.11,
    transmission: 1,
    thickness: opts.thickness ?? 0.55,
    ior: 1.33,
    attenuationColor: new THREE.Color(opts.attenuationColor ?? '#b8ccff'),
    attenuationDistance: opts.attenuationDistance ?? 6.5,
    clearcoat: 0.52,
    clearcoatRoughness: 0.14,
    iridescence: opts.iridescence ?? 0.45,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [120, 420],
    sheen: 0.45,
    sheenColor: new THREE.Color(opts.sheenColor ?? '#ffd8ef'),
    normalMap,
    normalScale: new THREE.Vector2(ns, ns),
    envMapIntensity: 0.55
  });
  return applyBacklitSSS(mat, opts.sssColor ?? '#8fd0ff', opts.sssIntensity ?? 0.22, 2.8);
}

/** Upgraded sphere impostor shader with wet specular highlight + backlit SSS rim. */
export function makeCinemaImpostorMat(
  cut: THREE.Plane[],
  clip = true
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uScale: { value: 1 },
      uLight: { value: V(0.4, 0.6, 0.7).normalize() },
      uHi: { value: 0 },
      uDim: { value: 1 }
    },
    vertexShader: `attribute float size; attribute vec3 icol; uniform float uScale; varying vec3 vCol;
      #include <clipping_planes_pars_vertex>
      void main() {
        vCol = icol;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = size * uScale / max(.01, -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }`,
    fragmentShader: `uniform vec3 uLight; uniform float uHi, uDim; varying vec3 vCol;
      #include <clipping_planes_pars_fragment>
      void main() {
        #include <clipping_planes_fragment>
        vec2 q = gl_PointCoord * 2. - 1.; q.y = -q.y;
        float r2 = dot(q, q); if (r2 > 1.) discard;
        vec3 n = vec3(q, sqrt(max(0., 1. - r2)));
        float d = max(dot(n, uLight), 0.);
        vec3 h = normalize(uLight + vec3(0., 0., 1.));
        float rim = pow(1. - n.z, 2.7);
        vec3 c = vCol * (.24 + .92 * d) + pow(max(dot(n, h), 0.), 36.) * .26 + vCol * rim * .38;
        gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi), uDim);
      }`,
    clipping: clip,
    clippingPlanes: clip ? cut : null,
    clipIntersection: true
  });
}

/** Upgraded 2-color cylinder rod impostor shader for DNA/RNA backbones and base pairs. */
export function makeCinemaStickMat(
  cut: THREE.Plane[],
  clip = true
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uScale: { value: 1 },
      uLight: { value: V(0.4, 0.6, 0.7).normalize() },
      uHi: { value: 0 },
      uDim: { value: 1 }
    },
    vertexShader: `attribute vec2 corner; attribute vec3 aA, aB, aC1, aC2; attribute float aR; uniform float uScale; varying vec3 vC1, vC2, vSide; varying vec2 vUV;
      #include <clipping_planes_pars_vertex>
      void main() {
        vec3 a = (modelViewMatrix * vec4(aA, 1.)).xyz, b = (modelViewMatrix * vec4(aB, 1.)).xyz;
        vec3 d = b - a, m = (a + b) * .5, side = cross(d, m);
        if (dot(side, side) < 1e-16) side = cross(d, vec3(0., 1., 0.));
        side = normalize(side);
        float r = max(aR, .6 * -m.z / uScale);
        vec4 mvPosition = vec4(mix(a, b, corner.x) + side * r * corner.y, 1.);
        vC1 = aC1; vC2 = aC2; vSide = side; vUV = corner;
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }`,
    fragmentShader: `uniform vec3 uLight; uniform float uHi, uDim; varying vec3 vC1, vC2, vSide; varying vec2 vUV;
      #include <clipping_planes_pars_fragment>
      void main() {
        #include <clipping_planes_fragment>
        float u = vUV.y;
        vec3 n = normalize(vSide * u + vec3(0., 0., sqrt(max(0., 1. - u * u))));
        vec3 h = normalize(uLight + vec3(0., 0., 1.));
        vec3 col = vUV.x < .5 ? vC1 : vC2;
        vec3 c = col * (.24 + .92 * max(dot(n, uLight), 0.)) + pow(max(dot(n, h), 0.), 36.) * .26 + col * pow(abs(u), 2.5) * .2;
        gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi), uDim);
      }`,
    clipping: clip,
    clippingPlanes: clip ? cut : null,
    clipIntersection: true,
    side: THREE.DoubleSide
  });
}
