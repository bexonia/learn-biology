export const CELL_ANATOMY_DATA: Record<string, any>;
export const CELL_LANDMARKS: any[];
export const CELL_TOUR_STOPS: string[];

export class CellViewerScene {
  constructor(container: HTMLElement, options?: any);
  init(): Promise<this>;
  start(): void;
  stop(): void;
  dispose(): void;
  resetCamera(): void;
  toggleAutoRotate(): boolean;
  toggleLabels(): boolean;
  flyCameraTo(pos: any, target: any, duration?: number): void;
  selectOrganelle(key: string): void;
  startTour(): void;
  toggleTourPlay(): boolean;
  nextTourStep(): void;
  prevTourStep(): void;
  exitTour(): void;
  setTourVoice(enabled: boolean): void;
  updateLandmarksAndLeaders(): void;
  handleResize(): void;
}
