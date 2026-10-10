declare module './core/cellViewer' {
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
  }
}

declare module './core/flagellarMotor' {
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
    target: any;
    spherical: any;
    isPaused: boolean;
  }
}

declare module './core/voiceService' {
  export const CURATED_VOICES: Record<string, any>;
  const voiceService: {
    playText(text: string, options?: any): Promise<void>;
    speak(text: string, voice?: string): Promise<void>;
    stop(): void;
    isBusy(): boolean;
    getSelectedVoice(): string;
    setVoice(voice: string): void;
  };
  export default voiceService;
}
