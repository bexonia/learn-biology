import * as THREE from 'three';
import { type DecodedPdbModel } from './pdb.js';

export interface MolSurfaceOptions {
  readonly scale?: number;
  readonly nm?: number;
  readonly maxDim?: number;
  readonly sigmaAng?: number;
  readonly iso?: number;
  readonly aoStrength?: number;
  readonly uvScale?: number;
  readonly offsetAng?: readonly [number, number, number];
  readonly filter?: (grp: number, part: number, idx: number) => boolean;
  readonly colorFn: (grp: number, part: number, idx: number) => THREE.Color;
}

/**
 * Generates a smooth, watertight 3D cryo-EM / Gaussian solvent-excluded molecular surface
 * BufferGeometry directly from decoded PDB C-alpha / coarse-grained coordinates using
 * Surface Nets + exact analytical Newton iso-surface projection + 3D crevice ambient occlusion.
 */
export function buildPdbSurfaceGeo(
  m: DecodedPdbModel,
  opts: MolSurfaceOptions
): THREE.BufferGeometry {
  const nm = opts.nm ?? 0.1;
  const unitPer01A = 0.01 * nm * (opts.scale ?? 1); // 0.1 Å -> scene units
  const offX = (opts.offsetAng?.[0] ?? 0) * 10;
  const offY = (opts.offsetAng?.[1] ?? 0) * 10;
  const offZ = (opts.offsetAng?.[2] ?? 0) * 10;

  const xs: number[] = [];
  const ys: number[] = [];
  const zs: number[] = [];
  const rs: number[] = [];
  const crs: number[] = [];
  const cgs: number[] = [];
  const cbs: number[] = [];

  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

  for (let i = 0; i < m.n; i++) {
    const kd = m.kind[i] ?? 0;
    const grp = kd >> 2;
    const part = kd & 3;
    if (opts.filter && !opts.filter(grp, part, i)) continue;
    const x = (m.xyz[i * 3] + offX) * unitPer01A;
    const y = (m.xyz[i * 3 + 1] + offY) * unitPer01A;
    const z = (m.xyz[i * 3 + 2] + offZ) * unitPer01A;
    const rad = m.rad
      ? Math.max(0.24, m.rad[i] * 0.062) * nm * (opts.scale ?? 1)
      : (opts.sigmaAng ?? 3.2) * 0.1 * nm * (opts.scale ?? 1);
    const c = opts.colorFn(grp, part, i);
    xs.push(x); ys.push(y); zs.push(z); rs.push(rad);
    crs.push(c.r); cgs.push(c.g); cbs.push(c.b);
    if (x - rad < minX) minX = x - rad;
    if (y - rad < minY) minY = y - rad;
    if (z - rad < minZ) minZ = z - rad;
    if (x + rad > maxX) maxX = x + rad;
    if (y + rad > maxY) maxY = y + rad;
    if (z + rad > maxZ) maxZ = z + rad;
  }

  const count = xs.length;
  if (count === 0) return new THREE.BufferGeometry();

  // Compute average Gaussian sigma and adaptive grid spacing
  let avgR = 0;
  for (let i = 0; i < count; i++) avgR += rs[i];
  avgR /= count;

  const pad = avgR * 2.55;
  minX -= pad; minY -= pad; minZ -= pad;
  maxX += pad; maxY += pad; maxZ += pad;

  const spanX = maxX - minX;
  const spanY = maxY - minY;
  const spanZ = maxZ - minZ;
  const longest = Math.max(spanX, spanY, spanZ, 1e-4);
  const maxDim = opts.maxDim ?? 42;
  const h = Math.max(longest / maxDim, avgR * 0.46);

  const nx = Math.max(6, Math.ceil(spanX / h) + 2);
  const ny = Math.max(6, Math.ceil(spanY / h) + 2);
  const nz = Math.max(6, Math.ceil(spanZ / h) + 2);
  const nxy = nx * ny;
  const total = nxy * nz;

  const rho = new Float32Array(total);
  const colR = new Float32Array(total);
  const colG = new Float32Array(total);
  const colB = new Float32Array(total);

  // Splat Gaussian molecular density + weighted subunit colors
  for (let p = 0; p < count; p++) {
    const px = xs[p], py = ys[p], pz = zs[p];
    const sig = Math.max(rs[p], h * 0.88);
    const inv2s2 = 0.5 / (sig * sig);
    const cut = sig * 2.35;
    const cut2 = cut * cut;

    const i0 = Math.max(1, Math.floor((px - cut - minX) / h));
    const i1 = Math.min(nx - 2, Math.ceil((px + cut - minX) / h));
    const j0 = Math.max(1, Math.floor((py - cut - minY) / h));
    const j1 = Math.min(ny - 2, Math.ceil((py + cut - minY) / h));
    const k0 = Math.max(1, Math.floor((pz - cut - minZ) / h));
    const k1 = Math.min(nz - 2, Math.ceil((pz + cut - minZ) / h));

    const r = crs[p], g = cgs[p], b = cbs[p];
    for (let k = k0; k <= k1; k++) {
      const dz = minZ + k * h - pz;
      const dz2 = dz * dz;
      const kOff = k * nxy;
      for (let j = j0; j <= j1; j++) {
        const dy = minY + j * h - py;
        const dzy2 = dz2 + dy * dy;
        if (dzy2 > cut2) continue;
        let idx = kOff + j * nx + i0;
        for (let i = i0; i <= i1; i++, idx++) {
          const dx = minX + i * h - px;
          const d2 = dzy2 + dx * dx;
          if (d2 > cut2) continue;
          const w = Math.exp(-d2 * inv2s2);
          rho[idx] += w;
          colR[idx] += w * r;
          colG[idx] += w * g;
          colB[idx] += w * b;
        }
      }
    }
  }

  // Fast 3D separable blur of rho -> wide-neighborhood burial field for pocket/crevice ambient occlusion
  const aoTmp = new Float32Array(total);
  const aoField = new Float32Array(total);
  for (let pass = 0; pass < 2; pass++) {
    const src = pass === 0 ? rho : aoField;
    // X blur
    for (let k = 1; k < nz - 1; k++) {
      for (let j = 1; j < ny - 1; j++) {
        let idx = k * nxy + j * nx + 1;
        for (let i = 1; i < nx - 1; i++, idx++) {
          aoTmp[idx] = 0.25 * (src[idx - 1] + src[idx + 1]) + 0.5 * src[idx];
        }
      }
    }
    // Y blur
    for (let k = 1; k < nz - 1; k++) {
      for (let j = 1; j < ny - 1; j++) {
        let idx = k * nxy + j * nx + 1;
        for (let i = 1; i < nx - 1; i++, idx++) {
          aoField[idx] = 0.25 * (aoTmp[idx - nx] + aoTmp[idx + nx]) + 0.5 * aoTmp[idx];
        }
      }
    }
    // Z blur
    for (let k = 1; k < nz - 1; k++) {
      for (let j = 1; j < ny - 1; j++) {
        let idx = k * nxy + j * nx + 1;
        for (let i = 1; i < nx - 1; i++, idx++) {
          aoTmp[idx] = 0.25 * (aoField[idx - nxy] + aoField[idx + nxy]) + 0.5 * aoField[idx];
        }
      }
    }
    aoField.set(aoTmp);
  }

  const iso = opts.iso ?? 0.42;

  // Surface Nets vertex extraction on active 2x2x2 cells
  const cellVert = new Int32Array(total).fill(-1);
  const vPos: number[] = [];

  const cornerOffsets = [
    0, 1, nx, nx + 1,
    nxy, nxy + 1, nxy + nx, nxy + nx + 1
  ];
  const cornerCoords = [
    [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0],
    [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]
  ];
  const edges = [
    [0, 1], [2, 3], [4, 5], [6, 7],
    [0, 2], [1, 3], [4, 6], [5, 7],
    [0, 4], [1, 5], [2, 6], [3, 7]
  ];

  const vals = new Float32Array(8);
  for (let k = 0; k < nz - 1; k++) {
    for (let j = 0; j < ny - 1; j++) {
      let base = k * nxy + j * nx;
      for (let i = 0; i < nx - 1; i++, base++) {
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const v = rho[base + cornerOffsets[c]] - iso;
          vals[c] = v;
          if (v >= 0) mask |= (1 << c);
        }
        if (mask === 0 || mask === 255) continue;

        let sx = 0, sy = 0, sz = 0, ec = 0;
        for (let e = 0; e < 12; e++) {
          const a = edges[e][0], b = edges[e][1];
          const va = vals[a], vb = vals[b];
          if ((va >= 0) === (vb >= 0)) continue;
          const t = va / (va - vb);
          const ca = cornerCoords[a], cb = cornerCoords[b];
          sx += ca[0] + t * (cb[0] - ca[0]);
          sy += ca[1] + t * (cb[1] - ca[1]);
          sz += ca[2] + t * (cb[2] - ca[2]);
          ec++;
        }
        const inv = 1 / ec;
        const vid = vPos.length / 3;
        cellVert[base] = vid;
        vPos.push(minX + (i + sx * inv) * h, minY + (j + sy * inv) * h, minZ + (k + sz * inv) * h);
      }
    }
  }

  const vCount = vPos.length / 3;
  if (vCount === 0) return new THREE.BufferGeometry();

  // Trilinear field & gradient helpers for analytical Newton projection + smooth cryo-EM normals
  const sampleRhoAndGrad = (wx: number, wy: number, wz: number, out: Float32Array) => {
    const gx = Math.max(0.5, Math.min(nx - 1.501, (wx - minX) / h));
    const gy = Math.max(0.5, Math.min(ny - 1.501, (wy - minY) / h));
    const gz = Math.max(0.5, Math.min(nz - 1.501, (wz - minZ) / h));
    const i = Math.floor(gx), j = Math.floor(gy), k = Math.floor(gz);
    const tx = gx - i, ty = gy - j, tz = gz - k;
    const ux = 1 - tx, uy = 1 - ty, uz = 1 - tz;

    const b00 = k * nxy + j * nx + i;
    const c000 = rho[b00], c100 = rho[b00 + 1];
    const c010 = rho[b00 + nx], c110 = rho[b00 + nx + 1];
    const c001 = rho[b00 + nxy], c101 = rho[b00 + nxy + 1];
    const c011 = rho[b00 + nxy + nx], c111 = rho[b00 + nxy + nx + 1];

    const c00 = c000 * ux + c100 * tx;
    const c10 = c010 * ux + c110 * tx;
    const c01 = c001 * ux + c101 * tx;
    const c11 = c011 * ux + c111 * tx;
    const c0 = c00 * uy + c10 * ty;
    const c1 = c01 * uy + c11 * ty;

    out[0] = c0 * uz + c1 * tz; // value
    out[1] = (((c100 - c000) * uy + (c110 - c010) * ty) * uz + ((c101 - c001) * uy + (c111 - c011) * ty) * tz) / h;
    out[2] = ((c10 - c00) * uz + (c11 - c01) * tz) / h;
    out[3] = (c1 - c0) / h;
  };

  const sampleTri = (arr: Float32Array, wx: number, wy: number, wz: number): number => {
    const gx = Math.max(0.5, Math.min(nx - 1.501, (wx - minX) / h));
    const gy = Math.max(0.5, Math.min(ny - 1.501, (wy - minY) / h));
    const gz = Math.max(0.5, Math.min(nz - 1.501, (wz - minZ) / h));
    const i = Math.floor(gx), j = Math.floor(gy), k = Math.floor(gz);
    const tx = gx - i, ty = gy - j, tz = gz - k;
    const ux = 1 - tx, uy = 1 - ty, uz = 1 - tz;
    const b00 = k * nxy + j * nx + i;
    const c00 = arr[b00] * ux + arr[b00 + 1] * tx;
    const c10 = arr[b00 + nx] * ux + arr[b00 + nx + 1] * tx;
    const c01 = arr[b00 + nxy] * ux + arr[b00 + nxy + 1] * tx;
    const c11 = arr[b00 + nxy + nx] * ux + arr[b00 + nxy + nx + 1] * tx;
    return (c00 * uy + c10 * ty) * uz + (c01 * uy + c11 * ty) * tz;
  };

  // Project each vertex smoothly onto the exact Gaussian iso-surface and compute analytical normals + AO colors + UVs
  const sg = new Float32Array(4);
  const posArr = new Float32Array(vCount * 3);
  const norArr = new Float32Array(vCount * 3);
  const colArr = new Float32Array(vCount * 3);
  const uvArr = new Float32Array(vCount * 2);
  const aoStrength = opts.aoStrength ?? 0.52;
  const uvScale = opts.uvScale ?? (1.6 / Math.max(longest, 0.2));

  for (let v = 0; v < vCount; v++) {
    let x = vPos[v * 3], y = vPos[v * 3 + 1], z = vPos[v * 3 + 2];
    const x0 = x, y0 = y, z0 = z;
    const maxStep = h * 0.55;
    for (let it = 0; it < 2; it++) {
      sampleRhoAndGrad(x, y, z, sg);
      const g2 = sg[1] * sg[1] + sg[2] * sg[2] + sg[3] * sg[3];
      if (g2 > 1e-8) {
        const step = Math.max(-maxStep, Math.min(maxStep, (sg[0] - iso) / g2));
        x -= sg[1] * step; y -= sg[2] * step; z -= sg[3] * step;
      }
    }
    // Clamp displacement so no self-intersections ever happen
    const dx = x - x0, dy = y - y0, dz = z - z0;
    const dLen = Math.hypot(dx, dy, dz);
    if (dLen > h * 0.65) {
      const s = (h * 0.65) / dLen;
      x = x0 + dx * s; y = y0 + dy * s; z = z0 + dz * s;
    }

    sampleRhoAndGrad(x, y, z, sg);
    let nxv = -sg[1], nyv = -sg[2], nzv = -sg[3];
    const nl = Math.hypot(nxv, nyv, nzv) || 1;
    nxv /= nl; nyv /= nl; nzv /= nl;

    posArr[v * 3] = x; posArr[v * 3 + 1] = y; posArr[v * 3 + 2] = z;
    norArr[v * 3] = nxv; norArr[v * 3 + 1] = nyv; norArr[v * 3 + 2] = nzv;

    const w = Math.max(1e-5, sampleTri(rho, x, y, z));
    let cr = sampleTri(colR, x, y, z) / w;
    let cg = sampleTri(colG, x, y, z) / w;
    let cb = sampleTri(colB, x, y, z) / w;

    // Crevice / pocket ambient occlusion from blurred burial density
    const burial = sampleTri(aoField, x, y, z);
    const occ = Math.max(0, Math.min(1, (burial - iso * 0.55) / (iso * 1.65)));
    const shadeAo = 1.06 - aoStrength * occ;
    colArr[v * 3] = Math.min(1, cr * shadeAo);
    colArr[v * 3 + 1] = Math.min(1, cg * shadeAo);
    colArr[v * 3 + 2] = Math.min(1, cb * shadeAo);

    uvArr[v * 2] = (x * 0.72 + z * 0.68) * uvScale;
    uvArr[v * 2 + 1] = (y * 0.85 + (x - z) * 0.32) * uvScale;
  }

  // Emit quad faces across sign-changing interior grid edges
  const indices: number[] = [];
  const pushQuad = (a: number, b: number, c: number, d: number, flip: boolean) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) {
      indices.push(a, c, b, a, d, c);
    } else {
      indices.push(a, b, c, a, c, d);
    }
  };

  for (let k = 1; k < nz - 1; k++) {
    for (let j = 1; j < ny - 1; j++) {
      let idx = k * nxy + j * nx + 1;
      for (let i = 1; i < nx - 1; i++, idx++) {
        const s0 = rho[idx] >= iso;
        // +X edge
        if (i < nx - 2 && s0 !== (rho[idx + 1] >= iso)) {
          pushQuad(
            cellVert[idx - nxy - nx],
            cellVert[idx - nxy],
            cellVert[idx],
            cellVert[idx - nx],
            !s0
          );
        }
        // +Y edge
        if (j < ny - 2 && s0 !== (rho[idx + nx] >= iso)) {
          pushQuad(
            cellVert[idx - nxy - 1],
            cellVert[idx - 1],
            cellVert[idx],
            cellVert[idx - nxy],
            !s0
          );
        }
        // +Z edge
        if (k < nz - 2 && s0 !== (rho[idx + nxy] >= iso)) {
          pushQuad(
            cellVert[idx - nx - 1],
            cellVert[idx - nx],
            cellVert[idx],
            cellVert[idx - 1],
            !s0
          );
        }
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(norArr, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
  geo.setIndex(indices);
  geo.computeBoundingSphere();
  return geo;
}

/**
 * Generates a high-frequency organic cryo-EM macromolecular normal map texture
 * (globular subunit micro-pockets & hydration grain) so protein surfaces never look like plastic.
 */
export function makeProteinBumpTexture(size = 256): THREE.DataTexture {
  const h = new Float32Array(size * size);
  const hash = (ix: number, iy: number, s: number) => {
    const x = ((ix % s) + s) % s;
    const y = ((iy % s) + s) % s;
    const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return n - Math.floor(n);
  };
  const vnoise = (u: number, v: number, freq: number) => {
    const x = u * freq, y = v * freq;
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = hash(ix, iy, freq), b = hash(ix + 1, iy, freq);
    const c = hash(ix, iy + 1, freq), d = hash(ix + 1, iy + 1, freq);
    return (a * (1 - sx) + b * sx) * (1 - sy) + (c * (1 - sx) + d * sx) * sy;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      // Multi-octave cellular + globular cryo-EM pocket relief
      const n1 = vnoise(u, v, 7);
      const n2 = vnoise(u, v, 16);
      const n3 = vnoise(u, v, 34);
      const n4 = vnoise(u, v, 68);
      const pocket = 1 - Math.abs(n2 * 2 - 1);
      h[y * size + x] = n1 * 0.38 + pocket * 0.34 + n3 * 0.18 + n4 * 0.10;
    }
  }
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const xm = (x - 1 + size) % size, xp = (x + 1) % size;
      const ym = (y - 1 + size) % size, yp = (y + 1) % size;
      const dx = (h[y * size + xp] - h[y * size + xm]) * 2.8;
      const dy = (h[yp * size + x] - h[ym * size + x]) * 2.8;
      const inv = 1 / Math.hypot(dx, dy, 1);
      const idx = (y * size + x) * 4;
      data[idx] = Math.round((-dx * inv * 0.5 + 0.5) * 255);
      data[idx + 1] = Math.round((-dy * inv * 0.5 + 0.5) * 255);
      data[idx + 2] = Math.round((inv * 0.5 + 0.5) * 255);
      data[idx + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  return tex;
}

export interface MolInstanceBatch {
  add(
    pos: THREE.Vector3,
    quat?: THREE.Quaternion,
    scale?: number | THREE.Vector3,
    tint?: THREE.Color
  ): void;
  done(): THREE.InstancedMesh | null;
}

/**
 * Collects placements of a single cryo-EM BufferGeometry and emits a 1-draw-call THREE.InstancedMesh.
 */
export function makeMolBatch(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  parent: THREE.Object3D,
  castShadow = true,
  receiveShadow = true
): MolInstanceBatch {
  const mats: number[] = [];
  const tints: (THREE.Color | null)[] = [];
  let hasTint = false;
  const m4 = new THREE.Matrix4();
  const qId = new THREE.Quaternion();
  const sVec = new THREE.Vector3();

  return {
    add(pos, quat = qId, scale = 1, tint) {
      if (typeof scale === 'number') sVec.set(scale, scale, scale);
      else sVec.copy(scale);
      m4.compose(pos, quat, sVec);
      for (let i = 0; i < 16; i++) mats.push(m4.elements[i]);
      if (tint) {
        hasTint = true;
        tints.push(tint.clone());
      } else {
        tints.push(null);
      }
    },
    done() {
      const count = tints.length;
      if (count === 0) return null;
      const im = new THREE.InstancedMesh(geo, mat, count);
      im.instanceMatrix.array.set(mats);
      im.instanceMatrix.needsUpdate = true;
      if (hasTint) {
        const white = new THREE.Color(1, 1, 1);
        for (let i = 0; i < count; i++) {
          im.setColorAt(i, tints[i] ?? white);
        }
        if (im.instanceColor) im.instanceColor.needsUpdate = true;
      }
      im.castShadow = castShadow;
      im.receiveShadow = receiveShadow;
      im.frustumCulled = false;
      parent.add(im);
      return im;
    }
  };
}

let sharedLobeGeo: THREE.BufferGeometry | null = null;
function getSharedLobeGeo(): THREE.BufferGeometry {
  if (sharedLobeGeo) return sharedLobeGeo;
  const g = new THREE.SphereGeometry(1, 16, 12);
  const vCount = g.attributes.position.count;
  const white = new Float32Array(vCount * 3).fill(1);
  g.setAttribute('color', new THREE.BufferAttribute(white, 3));
  sharedLobeGeo = g;
  return g;
}

export interface SculptEmitter {
  /** Drop-in compatible with balls().add(pos, diameter, color): emits a solid textured 3D globular domain */
  add(pos: THREE.Vector3, diameter: number, color: THREE.Color): void;
  /** Emits an oriented 3D organic ellipsoid domain */
  lobe(
    pos: THREE.Vector3,
    rx: number,
    ry: number,
    rz: number,
    color: THREE.Color,
    quat?: THREE.Quaternion
  ): void;
  /** Drop-in compatible with balls().stick(a, b, r, c1, c2): emits a smooth 3D rounded cylinder strut */
  stick(
    a: THREE.Vector3,
    b: THREE.Vector3,
    r: number,
    c1: THREE.Color,
    c2?: THREE.Color
  ): void;
  /** Sweeps a smooth, continuous, UV-textured, hemispherical-capped 3D organic tube along a curve */
  tube(
    pts: readonly THREE.Vector3[],
    r0: number,
    r1: number,
    cA: THREE.Color,
    cB?: THREE.Color,
    radialSegs?: number,
    capped?: boolean
  ): void;
  /** Sweeps a closed 3D collar/torus ring */
  ring(
    center: THREE.Vector3,
    normal: THREE.Vector3,
    majorR: number,
    tubeR: number,
    color: THREE.Color,
    segs?: number,
    radialSegs?: number
  ): void;
  done(): number;
}

/**
 * High-performance 3D solid macromolecular mesh emitter for stalks, fibers, microvilli,
 * coiled-coils, receptor ectodomains, Clathrin cages, and multi-subunit globules.
 * Merges swept tubes/struts into 1 BufferGeometry and instances globular lobes into 1 InstancedMesh.
 */
export function makeSculptedMesh(
  mat: THREE.Material,
  parent: THREE.Object3D,
  castShadow = true,
  receiveShadow = true
): SculptEmitter {
  const pos: number[] = [];
  const nor: number[] = [];
  const col: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];

  const lobeMats: number[] = [];
  const lobeCols: THREE.Color[] = [];
  const m4 = new THREE.Matrix4();
  const qId = new THREE.Quaternion();
  const sVec = new THREE.Vector3();
  const qRot = new THREE.Quaternion();
  const tPrev = new THREE.Vector3();
  const tCur = new THREE.Vector3();
  const nVec = new THREE.Vector3();
  const bVec = new THREE.Vector3();
  const cTmp = new THREE.Color();

  const emitTube = (
    pts: readonly THREE.Vector3[],
    r0: number,
    r1: number,
    cA: THREE.Color,
    cB: THREE.Color,
    radialSegs: number,
    capped: boolean,
    closed: boolean
  ) => {
    const nPts = pts.length;
    if (nPts < 2) return;

    if (closed) {
      tPrev.subVectors(pts[1], pts[nPts - 1]);
    } else {
      tPrev.subVectors(pts[1], pts[0]);
    }
    if (tPrev.lengthSq() < 1e-12) return;
    tPrev.normalize();

    if (Math.abs(tPrev.y) < 0.88) nVec.set(0, 1, 0).cross(tPrev).normalize();
    else nVec.set(1, 0, 0).cross(tPrev).normalize();
    bVec.crossVectors(tPrev, nVec).normalize();

    const stride = radialSegs + 1;
    const baseVert = pos.length / 3;
    let arc = 0;
    let rings = 0;

    const pushRing = (
      center: THREE.Vector3,
      rad: number,
      axN: THREE.Vector3,
      axB: THREE.Vector3,
      axT: THREE.Vector3,
      axialTilt: number,
      vCoord: number,
      c: THREE.Color
    ) => {
      const cosTilt = Math.sqrt(Math.max(0, 1 - axialTilt * axialTilt));
      for (let s = 0; s <= radialSegs; s++) {
        const u = s / radialSegs;
        const ang = u * Math.PI * 2;
        const ca = Math.cos(ang), sa = Math.sin(ang);
        const rx = axN.x * ca + axB.x * sa;
        const ry = axN.y * ca + axB.y * sa;
        const rz = axN.z * ca + axB.z * sa;
        pos.push(center.x + rx * rad, center.y + ry * rad, center.z + rz * rad);
        nor.push(
          rx * cosTilt + axT.x * axialTilt,
          ry * cosTilt + axT.y * axialTilt,
          rz * cosTilt + axT.z * axialTilt
        );
        col.push(c.r, c.g, c.b);
        uv.push(u * 2.0, vCoord);
      }
      rings++;
    };

    const pTmp = new THREE.Vector3();

    // Start hemispherical cap
    if (capped && !closed && r0 > 1e-5) {
      pTmp.copy(pts[0]).addScaledVector(tPrev, -r0 * 0.82);
      pushRing(pTmp, r0 * 0.12, nVec, bVec, tPrev, -0.98, -0.35, cA);
      pTmp.copy(pts[0]).addScaledVector(tPrev, -r0 * 0.42);
      pushRing(pTmp, r0 * 0.78, nVec, bVec, tPrev, -0.62, -0.18, cA);
    }

    for (let i = 0; i < nPts; i++) {
      if (i > 0) arc += pts[i].distanceTo(pts[i - 1]);
      if (closed) {
        const prev = pts[(i - 1 + nPts) % nPts];
        const next = pts[(i + 1) % nPts];
        tCur.subVectors(next, prev);
      } else if (i === 0) {
        tCur.subVectors(pts[1], pts[0]);
      } else if (i === nPts - 1) {
        tCur.subVectors(pts[nPts - 1], pts[nPts - 2]);
      } else {
        tCur.subVectors(pts[i + 1], pts[i - 1]);
      }
      if (tCur.lengthSq() < 1e-12) tCur.copy(tPrev);
      else tCur.normalize();

      qRot.setFromUnitVectors(tPrev, tCur);
      nVec.applyQuaternion(qRot);
      nVec.addScaledVector(tCur, -nVec.dot(tCur)).normalize();
      bVec.crossVectors(tCur, nVec).normalize();
      tPrev.copy(tCur);

      const t = nPts > 1 ? i / (nPts - 1) : 0;
      const rad = r0 + (r1 - r0) * t;
      cTmp.copy(cA).lerp(cB, t);
      pushRing(pts[i], rad, nVec, bVec, tCur, 0, arc * 2.4, cTmp);
    }

    // End hemispherical cap
    if (capped && !closed && r1 > 1e-5) {
      const endV = arc * 2.4;
      pTmp.copy(pts[nPts - 1]).addScaledVector(tPrev, r1 * 0.42);
      pushRing(pTmp, r1 * 0.78, nVec, bVec, tPrev, 0.62, endV + 0.18, cB);
      pTmp.copy(pts[nPts - 1]).addScaledVector(tPrev, r1 * 0.82);
      pushRing(pTmp, r1 * 0.12, nVec, bVec, tPrev, 0.98, endV + 0.35, cB);
    }

    const segRings = closed ? rings : rings - 1;
    for (let r = 0; r < segRings; r++) {
      const rNext = closed ? (r + 1) % rings : r + 1;
      const rowA = baseVert + r * stride;
      const rowB = baseVert + rNext * stride;
      for (let s = 0; s < radialSegs; s++) {
        const a = rowA + s;
        const b = rowA + s + 1;
        const c = rowB + s;
        const d = rowB + s + 1;
        idx.push(a, b, c, b, d, c);
      }
    }
  };

  return {
    add(p, diameter, color) {
      const r = diameter * 0.56;
      sVec.set(r, r, r);
      m4.compose(p, qId, sVec);
      for (let i = 0; i < 16; i++) lobeMats.push(m4.elements[i]);
      lobeCols.push(color.clone());
    },
    lobe(p, rx, ry, rz, color, quat = qId) {
      sVec.set(rx, ry, rz);
      m4.compose(p, quat, sVec);
      for (let i = 0; i < 16; i++) lobeMats.push(m4.elements[i]);
      lobeCols.push(color.clone());
    },
    stick(a, b, r, c1, c2) {
      emitTube([a, b], r * 1.12, r * 1.12, c1, c2 ?? c1, 8, true, false);
    },
    tube(pts, r0, r1, cA, cB, radialSegs = 10, capped = true) {
      emitTube(pts, r0, r1, cA, cB ?? cA, radialSegs, capped, false);
    },
    ring(center, normal, majorR, tubeR, color, segs = 36, radialSegs = 10) {
      const nrm = normal.clone().normalize();
      const uAx = Math.abs(nrm.y) < 0.88
        ? new THREE.Vector3(0, 1, 0).cross(nrm).normalize()
        : new THREE.Vector3(1, 0, 0).cross(nrm).normalize();
      const vAx = new THREE.Vector3().crossVectors(nrm, uAx).normalize();
      const ringPts: THREE.Vector3[] = [];
      for (let i = 0; i < segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        ringPts.push(
          center
            .clone()
            .addScaledVector(uAx, majorR * Math.cos(a))
            .addScaledVector(vAx, majorR * Math.sin(a))
        );
      }
      emitTube(ringPts, tubeR, tubeR, color, color, radialSegs, false, true);
    },
    done() {
      let count = 0;
      if (idx.length > 0) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
        g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
        g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
        g.setIndex(idx);
        g.computeBoundingSphere();
        const mesh = new THREE.Mesh(g, mat);
        mesh.castShadow = castShadow;
        mesh.receiveShadow = receiveShadow;
        mesh.frustumCulled = false;
        parent.add(mesh);
        count += idx.length / 3;
      }
      if (lobeCols.length > 0) {
        const im = new THREE.InstancedMesh(getSharedLobeGeo(), mat, lobeCols.length);
        im.instanceMatrix.array.set(lobeMats);
        im.instanceMatrix.needsUpdate = true;
        for (let i = 0; i < lobeCols.length; i++) {
          im.setColorAt(i, lobeCols[i]);
        }
        if (im.instanceColor) im.instanceColor.needsUpdate = true;
        im.castShadow = castShadow;
        im.receiveShadow = receiveShadow;
        im.frustumCulled = false;
        parent.add(im);
        count += lobeCols.length;
      }
      return count;
    }
  };
}
