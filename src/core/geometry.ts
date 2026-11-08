import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { Context, Effect, Layer } from 'effect';
import { RandomService, type RandomShape } from './random.js';

export interface GeometryShape {
  readonly V: (x?: number, y?: number, z?: number) => THREE.Vector3;
  readonly UP: THREE.Vector3;
  readonly ptFrames: (
    curve: THREE.Curve<THREE.Vector3>,
    N: number
  ) => { N: THREE.Vector3[]; B: THREE.Vector3[] };
  readonly sweepGeo: (
    curve: THREE.Curve<THREE.Vector3>,
    rFn: (t: number) => number,
    N?: number,
    M?: number
  ) => THREE.BufferGeometry;
  readonly smoothSeams: (g: THREE.BufferGeometry) => THREE.BufferGeometry;
  readonly blobGeo: (
    r: number,
    amp?: number,
    freq?: number,
    detail?: number
  ) => THREE.BufferGeometry;
  readonly cylM: (a: THREE.Vector3, b: THREE.Vector3, r: number) => THREE.Matrix4;
  readonly atS: (
    p: THREE.Vector3,
    s: number | THREE.Vector3,
    q?: THREE.Quaternion
  ) => THREE.Matrix4;
  readonly instanced: (
    geo: THREE.BufferGeometry,
    mat: THREE.Material | THREE.Material[],
    ms: THREE.Matrix4[],
    cols?: THREE.Color[]
  ) => THREE.InstancedMesh;
  readonly waveNormalMap: (
    size?: number,
    waves?: number,
    strength?: number
  ) => THREE.CanvasTexture;
  readonly resample: (pts: THREE.Vector3[], step: number) => THREE.Vector3[];
  readonly across: (side: THREE.Vector3, t: THREE.Vector3) => THREE.Vector3;
}

export class GeometryService extends Context.Service<GeometryService, GeometryShape>()(
  'learn-biology/GeometryService'
) {}

export function createGeometryShape(random: RandomShape): GeometryShape {
  const { rr, fbm } = random;
  const V = (x = 0, y = 0, z = 0): THREE.Vector3 => new THREE.Vector3(x, y, z);
  const UP = V(0, 1, 0);

  const ptFrames = (
    curve: THREE.Curve<THREE.Vector3>,
    N: number
  ): { N: THREE.Vector3[]; B: THREE.Vector3[] } => {
    const T: THREE.Vector3[] = [];
    const Ns: THREE.Vector3[] = [];
    const B: THREE.Vector3[] = [];
    for (let i = 0; i <= N; i++) T.push(curve.getTangentAt(i / N));
    let n = (Math.abs(T[0].y) < 0.9 ? V(0, 1, 0) : V(1, 0, 0)).cross(T[0]).normalize();
    for (let i = 0; i <= N; i++) {
      if (i > 0) {
        n = n.clone().applyQuaternion(new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]));
      }
      Ns.push(n);
      B.push(T[i].clone().cross(n));
    }
    return { N: Ns, B };
  };

  const smoothSeams = (g: THREE.BufferGeometry): THREE.BufferGeometry => {
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
    map.forEach((ids) => {
      if (ids.length < 2) return;
      v.set(0, 0, 0);
      ids.forEach((i) => {
        v.x += n.getX(i);
        v.y += n.getY(i);
        v.z += n.getZ(i);
      });
      if (v.lengthSq() < 1e-12) return;
      v.normalize();
      ids.forEach((i) => n.setXYZ(i, v.x, v.y, v.z));
    });
    n.needsUpdate = true;
    return g;
  };

  const sweepGeo = (
    curve: THREE.Curve<THREE.Vector3>,
    rFn: (t: number) => number,
    N = 96,
    M = 24
  ): THREE.BufferGeometry => {
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
  };

  const blobGeo = (r: number, amp = 0.08, freq = 2, detail = 4): THREE.BufferGeometry => {
    let g: THREE.BufferGeometry = new THREE.IcosahedronGeometry(1, detail);
    g.deleteAttribute('normal');
    g.deleteAttribute('uv');
    g = mergeVertices(g);
    const p = g.attributes.position;
    const v = V();
    const o = rr(0, 99);
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const n = fbm(v.x * freq + o, v.y * freq, v.z * freq - o, 3);
      v.multiplyScalar(r * (1 + amp * (n - 0.5) * 2));
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    return g;
  };

  const cylM = (a: THREE.Vector3, b: THREE.Vector3, r: number): THREE.Matrix4 => {
    const d = b.clone().sub(a);
    return new THREE.Matrix4().compose(
      a.clone().addScaledVector(d, 0.5),
      new THREE.Quaternion().setFromUnitVectors(UP, d.clone().normalize()),
      V(r, d.length(), r)
    );
  };

  const atS = (
    p: THREE.Vector3,
    s: number | THREE.Vector3,
    q = new THREE.Quaternion()
  ): THREE.Matrix4 =>
    new THREE.Matrix4().compose(p, q, typeof s === 'number' ? V(s, s, s) : s);

  const instanced = (
    geo: THREE.BufferGeometry,
    mat: THREE.Material | THREE.Material[],
    ms: THREE.Matrix4[],
    cols?: THREE.Color[]
  ): THREE.InstancedMesh => {
    const m = new THREE.InstancedMesh(geo, mat, ms.length);
    ms.forEach((x, i) => m.setMatrixAt(i, x));
    if (cols) cols.forEach((c, i) => m.setColorAt(i, c));
    m.instanceMatrix.needsUpdate = true;
    return m;
  };

  const waveNormalMap = (size = 256, waves = 28, strength = 3): THREE.CanvasTexture => {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d')!;
    const img = g.createImageData(size, size);
    const h = new Float32Array(size * size);
    const W = Array.from({ length: waves }, () => ({
      fx: Math.round(rr(-12, 12)),
      fy: Math.round(rr(-12, 12)),
      ph: rr(0, 6.283),
      a: rr(0.3, 1)
    }));
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let s = 0;
        for (const w of W) {
          s += w.a * Math.sin(((w.fx * x + w.fy * y) / size) * 6.2832 + w.ph);
        }
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
  };

  const resample = (pts: THREE.Vector3[], step: number): THREE.Vector3[] => {
    const out = [pts[0].clone()];
    let carry = 0;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const L = a.distanceTo(b);
      let t = step - carry;
      for (; t <= L; t += step) out.push(a.clone().lerp(b, t / L));
      carry = L - (t - step);
    }
    return out;
  };

  const across = (side: THREE.Vector3, t: THREE.Vector3): THREE.Vector3 => {
    side.addScaledVector(t, -side.dot(t));
    if (side.lengthSq() < 1e-10) side.set(1, 0, 0).cross(t);
    if (side.lengthSq() < 1e-10) side.set(0, 1, 0).cross(t);
    return side.normalize();
  };

  return {
    V,
    UP,
    ptFrames,
    sweepGeo,
    smoothSeams,
    blobGeo,
    cylM,
    atS,
    instanced,
    waveNormalMap,
    resample,
    across
  };
}

export const GeometryLive: Layer.Layer<GeometryService, never, RandomService> = Layer.effect(
  GeometryService,
  Effect.gen(function* () {
    const random = yield* RandomService;
    return createGeometryShape(random);
  })
);
