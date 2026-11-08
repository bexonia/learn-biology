import * as THREE from 'three';
import { Context, Effect, Layer } from 'effect';
import { RandomService, type RandomShape } from '../core/random.js';
import { GeometryService, type GeometryShape } from '../core/geometry.js';
import {
  type MolecularEmitter,
  BASE,
  PAIR,
  BACKBONE,
  HISTONE,
  SILVER,
  col
} from '../core/batch.js';

export interface EmitDnaOptions {
  readonly nm?: number;
  readonly radius?: number;
  readonly twist?: number;
  readonly groove?: number;
  readonly deterministicBases?: boolean;
}

export interface ChromosomeOptions {
  readonly nm?: number;
  readonly dark?: number;
  readonly hdark?: string[];
}

export interface DnaAlongHelpers {
  readonly tube: (
    pts: THREE.Vector3[],
    r: number,
    mat: THREE.Material,
    radSeg?: number,
    tubSeg?: number
  ) => THREE.Mesh;
  readonly std: (color: string, opts?: Record<string, unknown>) => THREE.Material;
  readonly plain: () => THREE.Material;
  readonly unitCyl: THREE.BufferGeometry;
}

export interface DnaShape {
  readonly emitDNA: (
    S: MolecularEmitter,
    ax: THREE.Vector3[],
    opts?: EmitDnaOptions
  ) => void;
  readonly chromosome: (
    S: MolecularEmitter,
    C: THREE.Vector3[],
    open: Set<number>,
    opts?: ChromosomeOptions
  ) => THREE.Vector3[];
  readonly dnaAlongCurve: (
    curve: THREE.Curve<THREE.Vector3>,
    turns: number,
    rad: number,
    tr: number,
    helpers: DnaAlongHelpers
  ) => THREE.Group;
  readonly emitDnaEffect: (
    S: MolecularEmitter,
    ax: THREE.Vector3[],
    opts?: EmitDnaOptions
  ) => Effect.Effect<void>;
  readonly chromosomeEffect: (
    S: MolecularEmitter,
    C: THREE.Vector3[],
    open: Set<number>,
    opts?: ChromosomeOptions
  ) => Effect.Effect<THREE.Vector3[]>;
}

export class DnaService extends Context.Service<DnaService, DnaShape>()(
  'learn-biology/DnaService'
) {}

export function createDnaShape(
  random: RandomShape,
  geometry: GeometryShape
): DnaShape {
  const { rand, rr, randDir } = random;
  const { V, across, resample, ptFrames, cylM, instanced } = geometry;

  const emitDNA = (
    S: MolecularEmitter,
    ax: THREE.Vector3[],
    opts: EmitDnaOptions = {}
  ): void => {
    if (ax.length < 3) return;
    const nm = opts.nm ?? 0.02;
    const r = opts.radius ?? 0.9 * nm;
    const twist = opts.twist ?? (2 * Math.PI) / 10.5;
    const groove = opts.groove ?? (140 * Math.PI) / 180;
    const strandR = 0.16 * nm;
    const rodR = 0.09 * nm;
    const joint = 0.34 * nm;

    const c1 = col(BACKBONE[0]);
    const c2 = col(BACKBONE[1]);
    const silver = col(SILVER);

    if (opts.deterministicBases) {
      const t = V();
      const N = V();
      const B = V();
      const a = V();
      const b = V();
      const pa = V();
      const pb = V();
      const m = V();
      const j2 = V();
      for (let i = 0; i < ax.length; i++) {
        t.subVectors(
          ax[Math.min(i + 1, ax.length - 1)],
          ax[Math.max(0, i - 1)]
        ).normalize();
        if (i === 0) across(N, t);
        else N.addScaledVector(t, -N.dot(t)).normalize();
        B.crossVectors(t, N);
        const ph = i * twist;
        const x = 'ATGC'[i & 3];
        a.copy(ax[i])
          .addScaledVector(N, r * Math.cos(ph))
          .addScaledVector(B, r * Math.sin(ph));
        b.copy(ax[i])
          .addScaledVector(N, r * Math.cos(ph + groove))
          .addScaledVector(B, r * Math.sin(ph + groove));
        if (i > 0) {
          S.stick(pa, a, strandR, c1, c1);
          S.stick(pb, b, strandR, c2, c2);
        }
        m.lerpVectors(a, b, 0.07);
        j2.lerpVectors(a, b, 0.93);
        S.stick(m, j2, rodR, col(BASE[x]), col(BASE[PAIR[x]]));
        S.add(m, joint, silver);
        S.add(j2, joint, silver);
        pa.copy(a);
        pb.copy(b);
      }
      return;
    }

    const T = ax[1].clone().sub(ax[0]).normalize();
    const N = across(randDir(), T);
    const B = V();
    const T2 = V();
    const q = new THREE.Quaternion();
    const a = V();
    const b = V();
    const m = V();
    const pa = V();
    const pb = V();
    const j2 = V();
    const ph0 = rr(0, 6.283);

    for (let i = 0; i < ax.length; i++) {
      if (i > 0) {
        T2.subVectors(ax[Math.min(i + 1, ax.length - 1)], ax[i - 1]).normalize();
        q.setFromUnitVectors(T, T2);
        across(N.applyQuaternion(q), T2);
        T.copy(T2);
      }
      B.crossVectors(T, N);
      const ph = ph0 + i * twist;
      const x = 'ATGC'[Math.floor(rand() * 4)];
      a.copy(ax[i])
        .addScaledVector(N, r * Math.cos(ph))
        .addScaledVector(B, r * Math.sin(ph));
      b.copy(ax[i])
        .addScaledVector(N, r * Math.cos(ph + groove))
        .addScaledVector(B, r * Math.sin(ph + groove));
      if (i > 0) {
        S.stick(pa, a, strandR, c1, c1);
        S.stick(pb, b, strandR, c2, c2);
      }
      m.lerpVectors(a, b, 0.07);
      j2.lerpVectors(a, b, 0.93);
      S.stick(m, j2, rodR, col(BASE[x]), col(BASE[PAIR[x]]));
      S.add(m, joint, silver);
      S.add(j2, joint, silver);
      pa.copy(a);
      pb.copy(b);
    }
  };

  const chromosome = (
    S: MolecularEmitter,
    C: THREE.Vector3[],
    open: Set<number>,
    opts: ChromosomeOptions = {}
  ): THREE.Vector3[] => {
    const nm = opts.nm ?? 0.02;
    const dark = opts.dark ?? 0;
    const hdark = opts.hdark ?? ['#c44569', '#d6a24a', '#4a90c8', '#8c6bbd'];
    const BP = 0.34 * nm;
    const SH_R = 4.3 * nm;
    const SH_H = 4 * nm;
    const WRAP = 3.3 * Math.PI;

    const n = C.length;
    const path: THREE.Vector3[] = [];
    const fr = C.map((c, i) => {
      const prev = C[Math.max(0, i - 1)];
      const next = C[Math.min(n - 1, i + 1)];
      const a = next.clone().sub(prev);
      if (a.lengthSq() < 1e-9) a.copy(randDir());
      a.normalize();
      const u = prev.clone().add(next).multiplyScalar(0.5).sub(c);
      u.addScaledVector(randDir(), u.length() * 0.4 + 0.02);
      across(u, a);
      return { c, u, w: a.clone().cross(u), a };
    });

    const sh = (
      f: { c: THREE.Vector3; u: THREE.Vector3; w: THREE.Vector3; a: THREE.Vector3 },
      t: number
    ): THREE.Vector3 => {
      const th = WRAP / 2 - WRAP * t;
      return f.c
        .clone()
        .addScaledVector(f.u, SH_R * Math.cos(th))
        .addScaledVector(f.w, SH_R * Math.sin(th))
        .addScaledVector(f.a, SH_H * (t - 0.5));
    };

    const tan = (
      f: { c: THREE.Vector3; u: THREE.Vector3; w: THREE.Vector3; a: THREE.Vector3 },
      t: number
    ): THREE.Vector3 => sh(f, t + 0.005).sub(sh(f, t - 0.005)).normalize();

    let last: [THREE.Vector3, THREE.Vector3] | null = null;
    let bare: THREE.Vector3[] = [];

    C.forEach((c, i) => {
      if (open.has(i)) {
        bare.push(c);
        return;
      }
      const f = fr[i];
      const e = sh(f, 0);
      const te = tan(f, 0);
      if (last) {
        const L = Math.min(0.08, last[0].distanceTo(e) * 0.3);
        const cv = new THREE.CatmullRomCurve3(
          [
            last[0],
            last[0].clone().addScaledVector(last[1], L),
            ...bare,
            e.clone().addScaledVector(te, -L),
            e
          ],
          false,
          'centripetal'
        );
        path.push(
          ...cv.getSpacedPoints(Math.max(6, Math.ceil(cv.getLength() / (3 * BP))))
        );
      } else {
        path.push(e.clone().addScaledVector(te, -0.1));
      }
      bare = [];
      for (let k = 0; k <= 90; k++) path.push(sh(f, k / 90));
      last = [sh(f, 1), tan(f, 1)];
      HISTONE.forEach(([, h], t) => {
        for (const z of [-1, 1]) {
          const an = ((t * 90 + 45 + (z > 0 ? 20 : 0)) * Math.PI) / 180;
          S.add(
            c
              .clone()
              .addScaledVector(f.u, 1.9 * nm * Math.cos(an))
              .addScaledVector(f.w, 1.9 * nm * Math.sin(an))
              .addScaledVector(f.a, 1.1 * nm * z),
            3.4 * nm,
            col(i < dark ? hdark[t] : h)
          );
        }
      });
    });

    if (last) path.push((last as [THREE.Vector3, THREE.Vector3])[0].clone().addScaledVector((last as [THREE.Vector3, THREE.Vector3])[1], 0.1));
    const ax = resample(path, BP);
    emitDNA(S, ax, { nm });
    return ax;
  };

  const dnaAlongCurve = (
    curve: THREE.Curve<THREE.Vector3>,
    turns: number,
    rad = 0.95,
    tr = 0.22,
    helpers: DnaAlongHelpers
  ): THREE.Group => {
    const g = new THREE.Group();
    const N = Math.max(240, Math.round(turns * 24));
    const f = ptFrames(curve, N);
    const s1: THREE.Vector3[] = [];
    const s2: THREE.Vector3[] = [];
    const rm: THREE.Matrix4[] = [];
    const rc: THREE.Color[] = [];
    const every = Math.max(1, Math.round(N / (turns * 10)));
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const p = curve.getPointAt(t);
      const ph = t * turns * Math.PI * 2;
      s1.push(
        p
          .clone()
          .addScaledVector(f.N[i], rad * Math.cos(ph))
          .addScaledVector(f.B[i], rad * Math.sin(ph))
      );
      s2.push(
        p
          .clone()
          .addScaledVector(f.N[i], rad * Math.cos(ph + 2.4))
          .addScaledVector(f.B[i], rad * Math.sin(ph + 2.4))
      );
      if (i % every === 0) {
        const b = 'ATGC'[Math.floor(rand() * 4)];
        const m = s1[i].clone().lerp(s2[i], 0.5);
        rm.push(cylM(s1[i], m, tr * 0.5), cylM(m, s2[i], tr * 0.5));
        rc.push(new THREE.Color(BASE[b]), new THREE.Color(BASE[PAIR[b]]));
      }
    }
    g.add(
      helpers.tube(s1, tr, helpers.std(BACKBONE[0]), 6, N * 2),
      helpers.tube(s2, tr, helpers.std(BACKBONE[1]), 6, N * 2),
      instanced(helpers.unitCyl, helpers.plain(), rm, rc)
    );
    return g;
  };

  return {
    emitDNA,
    chromosome,
    dnaAlongCurve,
    emitDnaEffect: (S, ax, opts) => Effect.sync(() => emitDNA(S, ax, opts)),
    chromosomeEffect: (S, C, open, opts) =>
      Effect.sync(() => chromosome(S, C, open, opts))
  };
}

export const DnaLive: Layer.Layer<
  DnaService,
  never,
  RandomService | GeometryService
> = Layer.effect(
  DnaService,
  Effect.gen(function* () {
    const random = yield* RandomService;
    const geometry = yield* GeometryService;
    return createDnaShape(random, geometry);
  })
);
