import * as THREE from 'three';
import { Context, Effect, Layer } from 'effect';
import { RandomService, type RandomShape } from './random.js';

export interface MolecularEmitter {
  stick(
    a: THREE.Vector3,
    b: THREE.Vector3,
    r: number,
    c1: THREE.Color,
    c2: THREE.Color
  ): void;
  add(p: THREE.Vector3, s: number, c: THREE.Color): void;
  done?(): number;
}

export const BASE: Record<string, string> = {
  A: '#ff5a5a',
  T: '#ffd24a',
  G: '#3ddc84',
  C: '#ff9a3c',
  U: '#ff7ad9'
};

export const PAIR: Record<string, string> = { A: 'T', T: 'A', G: 'C', C: 'G' };
export const RPAIR: Record<string, string> = { A: 'U', U: 'A', G: 'C', C: 'G' };
export const BACKBONE: [string, string] = ['#3d7bff', '#9b5cff'];
export const MRNA = '#ffb35c';
export const RRNA = '#ff7a6a';
export const POL: [string, string] = ['#7fffd0', '#c38cff'];
export const HISTONE: [string, string][] = [
  ['H3', '#ff6b6b'],
  ['H4', '#ffd24f'],
  ['H2A', '#6bc8ff'],
  ['H2B', '#b98cff']
];
export const SILVER = '#d4d9e2';

const COLS = new Map<string, THREE.Color>();
export function col(h: string): THREE.Color {
  let c = COLS.get(h);
  if (!c) {
    c = new THREE.Color(h);
    COLS.set(h, c);
  }
  return c;
}

export interface OccupancyGrid {
  readonly gAdd: (p: THREE.Vector3, r: number) => void;
  readonly gFree: (p: THREE.Vector3, r: number) => boolean;
  readonly clear: () => void;
}

export function createOccupancyGrid(cellSize = 0.3): OccupancyGrid {
  const GRID = new Map<number, number[]>();
  const gk = (i: number, j: number, k: number): number =>
    (i + 512) * 1048576 + (j + 512) * 1024 + k + 512;

  const gAdd = (p: THREE.Vector3, r: number): void => {
    const k = gk(
      Math.floor(p.x / cellSize),
      Math.floor(p.y / cellSize),
      Math.floor(p.z / cellSize)
    );
    let a = GRID.get(k);
    if (!a) GRID.set(k, (a = []));
    a.push(p.x, p.y, p.z, r);
  };

  const gFree = (p: THREE.Vector3, r: number): boolean => {
    const i0 = Math.floor(p.x / cellSize);
    const j0 = Math.floor(p.y / cellSize);
    const k0 = Math.floor(p.z / cellSize);
    for (let i = i0 - 1; i <= i0 + 1; i++) {
      for (let j = j0 - 1; j <= j0 + 1; j++) {
        for (let k = k0 - 1; k <= k0 + 1; k++) {
          const a = GRID.get(gk(i, j, k));
          if (!a) continue;
          for (let n = 0; n < a.length; n += 4) {
            const x = a[n] - p.x;
            const y = a[n + 1] - p.y;
            const z = a[n + 2] - p.z;
            const s = a[n + 3] + r;
            if (x * x + y * y + z * z < s * s) return false;
          }
        }
      }
    }
    return true;
  };

  const clear = (): void => {
    GRID.clear();
  };

  return { gAdd, gFree, clear };
}

export interface MolecularBatchShape {
  readonly col: (hex: string) => THREE.Color;
  readonly clump: (
    S: MolecularEmitter,
    c: THREE.Vector3,
    r: number,
    n: number,
    cols: string[],
    s0: number,
    s1: number
  ) => void;
  readonly createOccupancyGrid: (cellSize?: number) => OccupancyGrid;
}

export class MolecularBatchService extends Context.Service<
  MolecularBatchService,
  MolecularBatchShape
>()('learn-biology/MolecularBatchService') {}

export function createMolecularBatchShape(random: RandomShape): MolecularBatchShape {
  const { rand, rr, randDir } = random;
  const clump = (
    S: MolecularEmitter,
    c: THREE.Vector3,
    r: number,
    n: number,
    cols: string[],
    s0: number,
    s1: number
  ): void => {
    for (let k = 0; k < n; k++) {
      S.add(
        c.clone().add(randDir().multiplyScalar(r * Math.cbrt(rand()))),
        rr(s0, s1),
        col(cols[k % cols.length])
      );
    }
  };
  return {
    col,
    clump,
    createOccupancyGrid
  };
}

export const MolecularBatchLive: Layer.Layer<MolecularBatchService, never, RandomService> =
  Layer.effect(
    MolecularBatchService,
    Effect.gen(function* () {
      const random = yield* RandomService;
      return createMolecularBatchShape(random);
    })
  );
