import type { RibosomeComponentData } from '../types/biology';

export declare const RIBOSOME_COMPONENTS_META: Record<string, RibosomeComponentData>;
export declare const RIBOSOME_TOUR_STOPS: string[];

export interface RibosomeSceneOptions {
  onSelectComponent?: (key: string, meta: RibosomeComponentData) => void;
  voiceService?: any;
}

export declare class RibosomeScene {
  constructor(container: HTMLElement, options?: RibosomeSceneOptions);
  init(): void;
  start(): void;
  stop(): void;
  dispose(): void;
  handleResize(): void;
  resetCamera(): void;
  toggleAutoRotate(): boolean;
  toggleLabels(): boolean;
  focusComponent(key: string): void;
  selectComponent(key: string): void;
  setExplodedProgress(val: number): void;
  setTranslationSpeed(val: number): void;
  togglePause(): boolean;
  stepCodon(): void;
  setSubunitFilter(filter: 'all' | '30s' | '50s' | 'trna' | 'mrna' | 'tunnel'): void;
}
