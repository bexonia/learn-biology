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
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  type MolSurfaceOptions,
  type MolInstanceBatch,
  type SculptEmitter
} from './molecules/surface.js';
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
import {
  I18nService,
  type I18nShape,
  type LocaleCode,
  type LocaleDefinition,
  I18nLive,
  makeI18nLayer,
  detectBrowserLocale,
  EN_LOCALE,
  ES_LOCALE
} from './core/i18n.js';

export type BiologyServices =
  | RandomService
  | GeometryService
  | MolecularBatchService
  | DnaService
  | RnaService
  | PdbService
  | RibosomeService
  | TourService
  | I18nService;

export interface BiologyContext {
  readonly random: RandomShape;
  readonly geometry: GeometryShape;
  readonly batch: MolecularBatchShape;
  readonly dna: DnaShape;
  readonly rna: RnaShape;
  readonly pdb: PdbShape;
  readonly ribosome: RibosomeShape;
  readonly tours: TourShape;
  readonly i18n: I18nShape;
}

export function makeBiologyLayer(
  seed = 20261031,
  initialLocale?: LocaleCode
): Layer.Layer<BiologyServices> {
  const i18nLayer = initialLocale ? makeI18nLayer(initialLocale) : I18nLive;
  const baseLayer = Layer.mergeAll(
    makeRandomLayer(seed),
    PdbLive,
    TourLive,
    i18nLayer
  );
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
    const i18n = yield* I18nService;
    const result = fn({
      random,
      geometry,
      batch,
      dna,
      rna,
      pdb,
      ribosome,
      tours,
      i18n
    });
    if (typeof document !== 'undefined' && !document.getElementById('tree')) {
      setTimeout(() => i18n.bindStandalonePage(), 40);
    }
    return result;
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
  I18nService,
  I18nLive,
  makeI18nLayer,
  detectBrowserLocale,
  EN_LOCALE,
  ES_LOCALE,
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
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  type MolSurfaceOptions,
  type MolInstanceBatch,
  type SculptEmitter,
  type MolecularEmitter,
  type OccupancyGrid,
  type I18nShape,
  type LocaleCode,
  type LocaleDefinition
};
