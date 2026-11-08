import * as THREE from 'three';
import { Context, Effect, Layer } from 'effect';
import { RandomService, type RandomShape } from '../core/random.js';
import { GeometryService, type GeometryShape } from '../core/geometry.js';
import {
  type MolecularEmitter,
  BASE,
  RPAIR,
  MRNA,
  SILVER,
  col
} from '../core/batch.js';

export interface RnaFoldOptions {
  readonly nm?: number;
  readonly hairpin?: number;
  readonly pull?: THREE.Vector3;
  readonly pullW?: number;
  readonly home?: THREE.Vector3;
  readonly rad?: number;
  readonly gFree?: (p: THREE.Vector3, r: number) => boolean;
}

export interface RnaShape {
  readonly baseRod: (
    S: MolecularEmitter,
    x: THREE.Vector3,
    toward: THREE.Vector3,
    len: number,
    b: string,
    cb: THREE.Color,
    last: THREE.Vector3 | null,
    nm?: number
  ) => void;
  readonly rnaAlong: (
    S: MolecularEmitter,
    ax: THREE.Vector3[],
    bb?: string,
    nm?: number
  ) => void;
  readonly rnaFold: (
    S: MolecularEmitter,
    p0: THREE.Vector3,
    dir: THREE.Vector3,
    n: number,
    bb: string,
    o?: RnaFoldOptions
  ) => THREE.Vector3[];
  readonly rnaFoldEffect: (
    S: MolecularEmitter,
    p0: THREE.Vector3,
    dir: THREE.Vector3,
    n: number,
    bb: string,
    o?: RnaFoldOptions
  ) => Effect.Effect<THREE.Vector3[]>;
}

export class RnaService extends Context.Service<RnaService, RnaShape>()(
  'learn-biology/RnaService'
) {}

export function createRnaShape(
  random: RandomShape,
  geometry: GeometryShape
): RnaShape {
  const { rand, rr, randDir } = random;
  const { V, across } = geometry;
  const jointAt = V();

  const baseRod = (
    S: MolecularEmitter,
    x: THREE.Vector3,
    toward: THREE.Vector3,
    len: number,
    b: string,
    cb: THREE.Color,
    last: THREE.Vector3 | null,
    nm = 0.02
  ): void => {
    const strandR = 0.16 * nm;
    const rodR = 0.09 * nm;
    const joint = 0.34 * nm;
    if (last) S.stick(last, x, strandR, cb, cb);
    jointAt.copy(x).addScaledVector(toward, 0.1 * nm);
    S.add(jointAt, joint, col(SILVER));
    const c = col(BASE[b]);
    S.stick(jointAt, x.clone().addScaledVector(toward, len), rodR, c, c);
  };

  const rnaAlong = (
    S: MolecularEmitter,
    ax: THREE.Vector3[],
    bb = MRNA,
    nm = 0.02
  ): void => {
    const t = V();
    const side = randDir();
    const cb = col(bb);
    ax.forEach((x, i) => {
      t.subVectors(
        ax[Math.min(i + 1, ax.length - 1)],
        ax[Math.max(0, i - 1)]
      ).normalize();
      across(side, t).applyAxisAngle(t, 0.55);
      baseRod(
        S,
        x,
        side,
        0.8 * nm,
        'AUGC'[Math.floor(rand() * 4)],
        cb,
        i ? ax[i - 1] : null,
        nm
      );
    });
  };

  const rnaFold = (
    S: MolecularEmitter,
    p0: THREE.Vector3,
    dir: THREE.Vector3,
    n: number,
    bb: string,
    o: RnaFoldOptions = {}
  ): THREE.Vector3[] => {
    const nm = o.nm ?? 0.02;
    const NT = 0.6 * nm;
    const A_RISE = 0.28 * nm;
    const A_R = 0.9 * nm;
    const A_TWIST = (2 * Math.PI) / 11;
    const isFree = o.gFree ?? (() => true);

    const p = p0.clone();
    const t = dir.clone().normalize();
    const side = across(randDir(), t);
    const out: THREE.Vector3[] = [];
    const cb = col(bb);
    const q = V();
    const letter = (): string => 'AUGC'[Math.floor(rand() * 4)];
    let last: THREE.Vector3 | null = null;

    const nt = (
      x: THREE.Vector3,
      b: string,
      toward: THREE.Vector3,
      len = 0.8 * nm
    ): void => {
      baseRod(S, x, toward, len, b, cb, last, nm);
      last = x.clone();
      out.push(last);
    };

    while (out.length < n) {
      if (n - out.length > 16 && rand() < (o.hairpin ?? 0.05)) {
        const k = 4 + Math.floor(rand() * 6);
        const loop = 4 + Math.floor(rand() * 3);
        const s = randDir().addScaledVector(t, 0.6).normalize();
        const u = across(randDir(), s);
        const w = s.clone().cross(u);
        const ph0 = rr(0, 6.283);
        const foot = p.clone().addScaledVector(t, NT);
        const at = (j: number, off: number, rad = A_R): THREE.Vector3 => {
          const ph = ph0 + j * A_TWIST + off;
          return foot
            .clone()
            .addScaledVector(s, j * A_RISE)
            .addScaledVector(u, rad * Math.cos(ph))
            .addScaledVector(w, rad * Math.sin(ph));
        };
        const up: THREE.Vector3[] = [];
        const down: THREE.Vector3[] = [];
        const seq: string[] = [];
        for (let j = 0; j < k; j++) {
          up.push(at(j, 0));
          down.push(at(j, 2.6));
          seq.push(letter());
        }
        up.forEach((x, j) =>
          nt(x, seq[j], down[j].clone().sub(x).normalize(), x.distanceTo(down[j]) / 2)
        );
        const tip = foot.clone().addScaledVector(s, (k - 1) * A_RISE);
        for (let m = 1; m <= loop; m++) {
          const f = m / (loop + 1);
          const x = at(k - 1, 2.6 * f, A_R * 1.25).addScaledVector(
            s,
            A_RISE * (0.6 + 1.6 * Math.sin(Math.PI * f))
          );
          nt(x, letter(), x.clone().sub(tip).normalize());
        }
        for (let j = k - 1; j >= 0; j--) {
          nt(
            down[j],
            seq[j] === 'G' && rand() < 0.2 ? 'U' : RPAIR[seq[j]],
            up[j].clone().sub(down[j]).normalize(),
            up[j].distanceTo(down[j]) / 2
          );
        }
        p.copy(down[0]);
        t.addScaledVector(randDir(), 0.7).normalize();
        continue;
      }

      let best = t;
      let bs = -1e9;
      for (let c = 0; c < 5; c++) {
        const d = t.clone().multiplyScalar(1.6).add(randDir());
        if (o.pull) d.addScaledVector(o.pull, o.pullW ?? 0.5);
        if (o.home && o.rad !== undefined && p.distanceTo(o.home) > o.rad) {
          d.addScaledVector(q.copy(o.home).sub(p).normalize(), 1.2);
        }
        d.normalize();
        const sc = rand() + (isFree(q.copy(p).addScaledVector(d, NT), 0.4 * nm) ? 1 : 0);
        if (sc > bs) {
          bs = sc;
          best = d;
        }
      }
      t.copy(best);
      p.addScaledVector(t, NT);
      across(side, t).applyAxisAngle(t, 0.55);
      nt(p, letter(), side);
    }
    return out;
  };

  return {
    baseRod,
    rnaAlong,
    rnaFold,
    rnaFoldEffect: (S, p0, dir, n, bb, o) =>
      Effect.sync(() => rnaFold(S, p0, dir, n, bb, o))
  };
}

export const RnaLive: Layer.Layer<
  RnaService,
  never,
  RandomService | GeometryService
> = Layer.effect(
  RnaService,
  Effect.gen(function* () {
    const random = yield* RandomService;
    const geometry = yield* GeometryService;
    return createRnaShape(random, geometry);
  })
);
