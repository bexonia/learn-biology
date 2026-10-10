export class FlagellarMotorScene {
  constructor(container: HTMLElement, options?: any);
  init(): this;
  start(): void;
  stop(): void;
  setRepresentationMode(mode: 'molecular' | 'schematic', updateCamera?: boolean): void;
  setDirection(dir: 'CCW' | 'CW'): void;
  setSpeed(speed: number): void;
  setExplodedProgress(progress: number): void;
  selectComponent(key: string, overrideMeta?: any, targetPos?: any, focusCamera?: boolean): void;
  toggleMembranes(force?: boolean): boolean;
  toggleLabels(force?: boolean): boolean;
  toggleCameraMode(): 'freelook' | 'orbit';
  updateCameraPosition(): void;
  updateLandmarksAndLeaders(): void;
  handleResize(): void;
  resetCamera(): void;
  toggleAutoRotate(force?: boolean): boolean;
  target: any;
  spherical: any;
  isPaused: boolean;
  isAutoRotating: boolean;
  componentMeshes: Record<string, any>;
}
