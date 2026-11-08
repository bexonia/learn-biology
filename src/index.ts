import { Effect, Layer } from 'effect';
import {
  RandomService,
  type RandomShape,
  makeRandomLayer
} from './core/random.js';
import {
  GeometryService,
  type GeometryShape,
  GeometryLive
} from './core/geometry.js';
import {
  MolecularBatchService,
  type MolecularBatchShape,
  MolecularBatchLive,
  type MolecularEmitter,
  type OccupancyGrid,
  BASE,
  PAIR,
  RPAIR,
  BACKBONE,
  MRNA,
  RRNA,
  POL,
  HISTONE,
  SILVER,
  col
} from './core/batch.js';
import { DnaService, type DnaShape, DnaLive } from './molecules/dna.js';
import { RnaService, type RnaShape, RnaLive } from './molecules/rna.js';
import { PdbService, type PdbShape, PdbLive } from './molecules/pdb.js';
import {
  RibosomeService,
  type RibosomeShape,
  RibosomeLive
} from './molecules/ribosome.js';
import {
  TourService,
  type TourShape,
  TourLive,
  ALL_TOURS
} from './tours/index.js';

export type BiologyServices =
  | RandomService
  | GeometryService
  | MolecularBatchService
  | DnaService
  | RnaService
  | PdbService
  | RibosomeService
  | TourService;

export interface BiologyContext {
  readonly random: RandomShape;
  readonly geometry: GeometryShape;
  readonly batch: MolecularBatchShape;
  readonly dna: DnaShape;
  readonly rna: RnaShape;
  readonly pdb: PdbShape;
  readonly ribosome: RibosomeShape;
  readonly tours: TourShape;
}

export function makeBiologyLayer(
  seed = 20261031
): Layer.Layer<BiologyServices> {
  const baseLayer = Layer.mergeAll(makeRandomLayer(seed), PdbLive, TourLive);
  const midLayer = Layer.provideMerge(
    Layer.mergeAll(GeometryLive, MolecularBatchLive, RibosomeLive),
    baseLayer
  );
  return Layer.provideMerge(Layer.mergeAll(DnaLive, RnaLive), midLayer);
}

export function runBiologyApp<A>(
  seed: number,
  fn: (ctx: BiologyContext) => A
): A {
  const program = Effect.gen(function* () {
    const random = yield* RandomService;
    const geometry = yield* GeometryService;
    const batch = yield* MolecularBatchService;
    const dna = yield* DnaService;
    const rna = yield* RnaService;
    const pdb = yield* PdbService;
    const ribosome = yield* RibosomeService;
    const tours = yield* TourService;
    return fn({
      random,
      geometry,
      batch,
      dna,
      rna,
      pdb,
      ribosome,
      tours
    });
  });
  return Effect.runSync(Effect.provide(program, makeBiologyLayer(seed)));
}

export {
  RandomService,
  GeometryService,
  MolecularBatchService,
  DnaService,
  RnaService,
  PdbService,
  RibosomeService,
  TourService,
  ALL_TOURS,
  BASE,
  PAIR,
  RPAIR,
  BACKBONE,
  MRNA,
  RRNA,
  POL,
  HISTONE,
  SILVER,
  col,
  type MolecularEmitter,
  type OccupancyGrid
};
