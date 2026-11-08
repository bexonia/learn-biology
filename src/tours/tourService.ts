import { Context, Effect, Layer } from 'effect';

export interface TourCue {
  readonly id: string;
  readonly text: string;
  readonly say?: string;
  readonly dur?: number;
  readonly blink?: string;
}

export interface TourCamera {
  readonly view?: string;
  readonly part?: string;
  readonly dist?: number;
  readonly pos?: [number, number, number];
  readonly target?: [number, number, number];
  readonly dur?: number;
  readonly orbit?: number;
}

export interface TourStep {
  readonly id: string;
  readonly title: string;
  readonly camera?: TourCamera;
  readonly look?: string;
  readonly cut?: boolean;
  readonly flow?: boolean;
  readonly motion?: boolean;
  readonly blink?: string;
  readonly ghost?: string[] | false;
  readonly tags?: string[];
  readonly links?: [string, string, string, string?][];
  readonly follow?: string;
  readonly detail?: string;
  readonly cues: TourCue[];
}

export interface TourChapter {
  readonly id: string;
  readonly title: string;
  readonly steps: TourStep[];
}

export interface TourDefinition {
  readonly title: string;
  readonly root: string;
  readonly page?: string | null;
  readonly view?: string;
  readonly views?: Record<string, string>;
  readonly summary?: string;
  readonly parts?: [string, string, string][];
  readonly chapters: TourChapter[];
  readonly details?: Record<string, any>;
  readonly [extra: string]: any;
}

export interface TourShape {
  readonly tours: Record<string, TourDefinition>;
  readonly getTour: (key: string) => TourDefinition | undefined;
  readonly registerGlobalTours: () => Effect.Effect<Record<string, TourDefinition>>;
}

export class TourService extends Context.Service<TourService, TourShape>()(
  'learn-biology/TourService'
) {}

export function createTourShape(
  tours: Record<string, TourDefinition>
): TourShape {
  return {
    tours,
    getTour: (key) => tours[key],
    registerGlobalTours: () =>
      Effect.sync(() => {
        if (typeof window !== 'undefined') {
          (window as any).TOURS = (window as any).TOURS || {};
          Object.assign((window as any).TOURS, tours);
        }
        return tours;
      })
  };
}

export const makeTourLayer = (
  tours: Record<string, TourDefinition>
): Layer.Layer<TourService> =>
  Layer.succeed(TourService, createTourShape(tours));
