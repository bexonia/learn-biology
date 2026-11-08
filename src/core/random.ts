import * as THREE from 'three';
import { Context, Effect, Layer } from 'effect';

export interface RandomShape {
  seed: number;
  readonly rand: () => number;
  readonly rr: (a: number, b: number) => number;
  readonly randDir: () => THREE.Vector3;
  readonly noise: (x: number, y: number, z: number) => number;
  readonly fbm: {
    (p: THREE.Vector3, oct?: number): number;
    (x: number, y: number, z: number, oct?: number): number;
  };
  readonly reseed: (newSeed: number) => void;
  readonly nextEffect: Effect.Effect<number>;
  readonly rangeEffect: (a: number, b: number) => Effect.Effect<number>;
  readonly directionEffect: Effect.Effect<THREE.Vector3>;
}

export class RandomService extends Context.Service<RandomService, RandomShape>()(
  'learn-biology/RandomService'
) {}

export function createRandomShape(initialSeed = 42): RandomShape {
  let s = initialSeed | 0;

  const rand = (): number => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const rr = (a: number, b: number): number => a + (b - a) * rand();

  const randDir = (): THREE.Vector3 => {
    const u = rr(-1, 1);
    const t = rr(0, Math.PI * 2);
    const r = Math.sqrt(1 - u * u);
    return new THREE.Vector3(r * Math.cos(t), u, r * Math.sin(t));
  };

  const hash3 = (x: number, y: number, z: number): number => {
    const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
    return h - Math.floor(h);
  };

  const sm = (t: number): number => t * t * (3 - 2 * t);

  const noise = (x: number, y: number, z: number): number => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const zi = Math.floor(z);
    const u = sm(x - xi);
    const v = sm(y - yi);
    const w = sm(z - zi);
    const l = (a: number, b: number, t: number): number => a + (b - a) * t;
    const c = (i: number, j: number, k: number): number =>
      hash3(xi + i, yi + j, zi + k);
    return l(
      l(l(c(0, 0, 0), c(1, 0, 0), u), l(c(0, 1, 0), c(1, 1, 0), u), v),
      l(l(c(0, 0, 1), c(1, 0, 1), u), l(c(0, 1, 1), c(1, 1, 1), u), v),
      w
    );
  };

  const fbm = (
    xOrP: number | THREE.Vector3,
    yOrOct?: number,
    z?: number,
    oct = 4
  ): number => {
    if (typeof xOrP !== 'number') {
      const p = xOrP;
      const octaves = yOrOct ?? 3;
      let v = 0;
      let a = 0.5;
      let f = 1;
      for (let i = 0; i < octaves; i++) {
        v += a * (noise(p.x * f, p.y * f, p.z * f) - 0.5);
        f *= 2.07;
        a *= 0.5;
      }
      return v;
    }
    const x = xOrP;
    const y = yOrOct ?? 0;
    const zz = z ?? 0;
    let a = 0;
    let amp = 0.5;
    let f = 1;
    for (let i = 0; i < oct; i++) {
      a += amp * noise(x * f, y * f, zz * f);
      f *= 2.03;
      amp *= 0.5;
    }
    return a;
  };

  const reseed = (newSeed: number): void => {
    s = newSeed | 0;
  };

  return {
    get seed() {
      return s;
    },
    set seed(v: number) {
      s = v | 0;
    },
    rand,
    rr,
    randDir,
    noise,
    fbm: fbm as RandomShape['fbm'],
    reseed,
    nextEffect: Effect.sync(rand),
    rangeEffect: (a, b) => Effect.sync(() => rr(a, b)),
    directionEffect: Effect.sync(randDir)
  };
}

export const makeRandomLayer = (seed = 42): Layer.Layer<RandomService> =>
  Layer.succeed(RandomService, createRandomShape(seed));
