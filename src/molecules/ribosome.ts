import * as THREE from 'three';
import { Context, Effect, Layer } from 'effect';
import { RandomService, type RandomShape } from '../core/random.js';
import { PdbService, type PdbShape } from './pdb.js';
import { type MolecularEmitter } from '../core/batch.js';

export interface RibosomePoint {
  readonly p: THREE.Vector3;
  readonly s: number;
  readonly c: string;
}

export interface RibosomeShape {
  readonly emitRoughErRibosomes80S: (
    target: RibosomePoint[],
    count: number,
    N0: THREE.Vector3,
    rAt: (d: THREE.Vector3) => number,
    cover: (d: THREE.Vector3) => number,
    halfThickness?: number,
    minCover?: number
  ) => void;
  readonly emitFreeRibosomes80S: (
    target: RibosomePoint[],
    count: number,
    bounds: [number, number, number],
    acceptFn: (p: THREE.Vector3) => boolean
  ) => void;
  readonly emitPolysomeRosettes80S: (
    target: RibosomePoint[],
    polyCentres: THREE.Vector3[],
    count: number,
    bounds: [number, number, number],
    acceptFn: (p: THREE.Vector3) => boolean,
    ribosomesPerPolysome?: number
  ) => void;
  readonly placeRibosome70S: (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    colour: (group: number, part: number) => THREE.Color,
    full?: boolean,
    nmt?: number
  ) => void;
}

export class RibosomeService extends Context.Service<
  RibosomeService,
  RibosomeShape
>()('learn-biology/RibosomeService') {}

export function createRibosomeShape(
  random: RandomShape,
  pdb: PdbShape
): RibosomeShape {
  const { rand, rr, randDir } = random;

  const emitRoughErRibosomes80S = (
    target: RibosomePoint[],
    count: number,
    N0: THREE.Vector3,
    rAt: (d: THREE.Vector3) => number,
    cover: (d: THREE.Vector3) => number,
    halfThickness = 0.07,
    minCover = 0.55
  ): void => {
    for (let k = 0; k < count; k++) {
      const d = randDir();
      if (cover(d) < minCover) continue;
      const s = rand() < 0.5 ? 1 : -1;
      target.push({
        p: N0.clone().addScaledVector(d, rAt(d) + s * (halfThickness + 0.07)),
        s: rr(0.065, 0.085),
        c: rand() < 0.5 ? '#5148b0' : '#6a5fd0'
      });
    }
  };

  const emitFreeRibosomes80S = (
    target: RibosomePoint[],
    count: number,
    bounds: [number, number, number],
    acceptFn: (p: THREE.Vector3) => boolean
  ): void => {
    const [CA, CB, CC] = bounds;
    for (let i = 0; i < count; i++) {
      const p = new THREE.Vector3(rr(-CA, CA), rr(-CB, CB), rr(-CC, CC));
      if (!acceptFn(p)) continue;
      target.push({
        p,
        s: rr(0.065, 0.085),
        c: rand() < 0.5 ? '#5148b0' : '#6a5fd0'
      });
    }
  };

  const emitPolysomeRosettes80S = (
    target: RibosomePoint[],
    polyCentres: THREE.Vector3[],
    count: number,
    bounds: [number, number, number],
    acceptFn: (p: THREE.Vector3) => boolean,
    ribosomesPerPolysome = 8
  ): void => {
    const [CA, CB, CC] = bounds;
    for (let i = 0; i < count; i++) {
      const c = new THREE.Vector3(rr(-CA, CA), rr(-CB, CB), rr(-CC, CC));
      if (!acceptFn(c)) continue;
      polyCentres.push(c);
      const ax = randDir();
      const u = ax.clone().cross(randDir()).normalize();
      const w = ax.clone().cross(u);
      for (let k = 0; k < ribosomesPerPolysome; k++) {
        const a = k * 0.9;
        target.push({
          p: c
            .clone()
            .addScaledVector(ax, k * 0.11)
            .addScaledVector(u, Math.cos(a) * 0.16)
            .addScaledVector(w, Math.sin(a) * 0.16),
          s: 0.09,
          c: '#7a6cf0'
        });
      }
    }
  };

  const placeRibosome70S = (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    colour: (group: number, part: number) => THREE.Color,
    full = false,
    nmt = 0.001
  ): void => {
    pdb.placeCellMol(pdbDict, S, 'ribo', at, q, colour, full, nmt);
  };

  return {
    emitRoughErRibosomes80S,
    emitFreeRibosomes80S,
    emitPolysomeRosettes80S,
    placeRibosome70S
  };
}

export const RibosomeLive: Layer.Layer<
  RibosomeService,
  never,
  RandomService | PdbService
> = Layer.effect(
  RibosomeService,
  Effect.gen(function* () {
    const random = yield* RandomService;
    const pdb = yield* PdbService;
    return createRibosomeShape(random, pdb);
  })
);
