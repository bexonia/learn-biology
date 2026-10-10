import { useState, useEffect, useRef, useCallback } from 'react';
import type { ScenarioType, MotorComponentData, RibosomeComponentData, TourStatus } from './types/biology';
import { CellViewerScene, CELL_ANATOMY_DATA, CELL_TOUR_STOPS } from './core/cellViewer';
import { FlagellarMotorScene } from './core/flagellarMotor';
import { RibosomeScene, RIBOSOME_COMPONENTS_META, RIBOSOME_TOUR_STOPS } from './core/ribosomeTranslation';
import voiceService from './core/voiceService';

// UI Components
import { ScaleNavigator } from './components/Header/ScaleNavigator';
import { CellToolbar } from './components/Toolbar/CellToolbar';
import { CellScaleCard } from './components/HUD/CellScaleCard';
import { MicrocompartmentCard } from './components/HUD/MicrocompartmentCard';
import { CellLabels } from './components/Viewport/CellLabels';
import { CellInspectorDrawer } from './components/Inspector/CellInspectorDrawer';

// Motor Components
import { MotorHeaderOverlay } from './components/Motor/MotorHeaderOverlay';
import { MotorHUDCard } from './components/Motor/MotorHUDCard';
import { MotorPartsChips } from './components/Motor/MotorPartsChips';
import { MotorInspectorDrawer } from './components/Motor/MotorInspectorDrawer';
import { BlueprintModal } from './components/Modals/BlueprintModal';
import { TourBar } from './components/Tour/TourBar';

// Ribosome Components
import { RibosomeHeaderOverlay } from './components/Ribosome/RibosomeHeaderOverlay';
import { RibosomeHUDCard } from './components/Ribosome/RibosomeHUDCard';
import { RibosomeInspectorDrawer } from './components/Ribosome/RibosomeInspectorDrawer';

const DEFAULT_MOTOR_META: MotorComponentData = {
  name: 'Cryo-EM Flagellar Basal Body (Molecular Nodes)',
  proteins: 'Orange: C-ring (FliG/M/N); Jade & Lime: MS-ring inner/outer (FliF); Gold: Axial Rod; Terracotta: P-ring (FlgI); Blue: L-ring (FlgH); Violet: Hook (FlgE)',
  dimensions: 'Diameter: ~25–45 nm, Height: ~51 nm (Basal Body + Hook)',
  pdb: '7CGO, 6YKM, 6S3L, 3HJL',
  role: 'Authentic macromolecular structure generated with Molecular Nodes in Blender with distinct color segmentation: Orange for the bottom C-ring switch, two distinct contrasting greens for the inner collar and outer rim of the FliF MS-ring, Golden Yellow for the internal drive shaft rod, Terracotta for the P-ring bushing, Blue for the L-ring bushing, and Violet for the universal hook.',
  badge: 'ROTOR & BASAL BODY (7CGO)'
};

const MOTOR_TOUR_STOPS = [
  'molecular_7cgo',
  'c_ring',
  'ms_ring',
  'molecular_6ykm',
  'rod',
  'p_ring',
  'l_ring',
  'hook',
  'filament',
  'filament_cap'
];

function App() {
  // Scenario state
  const [scenario, setScenario] = useState<ScenarioType>('cell');

  // Whole Cell scene state
  const [selectedOrganelleKey, setSelectedOrganelleKey] = useState<string>('overview');
  const [isCellInspectorOpen, setIsCellInspectorOpen] = useState<boolean>(false);
  const [wasmStatus, setWasmStatus] = useState<string>('WebAssembly Engine: Active');
  const [selectedVoice, setSelectedVoice] = useState<string>('af_heart');
  const [isCellNarrating, setIsCellNarrating] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false);
  const [showCellLabels, setShowCellLabels] = useState<boolean>(true);

  // Cell Guided Tour State
  const [tourStatus, setTourStatus] = useState<TourStatus>({
    active: false,
    playing: false,
    stepIndex: 0,
    key: 'overview',
    totalSteps: 9,
    phase: 'idle',
    cooldownRemaining: 3,
    ttsEnabled: true
  });

  // Motor scene state
  const [motorRepMode, setMotorRepMode] = useState<'molecular' | 'schematic'>('molecular');
  const [isMembraneVisible, setIsMembraneVisible] = useState<boolean>(true);
  const [isMotorLabelsVisible, setIsMotorLabelsVisible] = useState<boolean>(true);
  const [cameraMode, setCameraMode] = useState<'freelook' | 'orbit'>('freelook');
  const [motorDirection, setMotorDirection] = useState<'CCW' | 'CW'>('CCW');
  const [isMotorPaused, setIsMotorPaused] = useState<boolean>(false);
  const [motorExplodedProgress, setMotorExplodedProgress] = useState<number>(0);
  const [motorSpeed, setMotorSpeed] = useState<number>(100);
  const [activeMotorPart, setActiveMotorPart] = useState<string>('molecular_7cgo');
  const [motorComponentMeta, setMotorComponentMeta] = useState<MotorComponentData>(DEFAULT_MOTOR_META);
  const [isMotorNarrating, setIsMotorNarrating] = useState<boolean>(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState<boolean>(false);
  const [isMotorAutoRotating, setIsMotorAutoRotating] = useState<boolean>(false);

  // Motor Guided Tour State
  const [isMotorTourActive, setIsMotorTourActive] = useState<boolean>(false);
  const [isMotorTourPlaying, setIsMotorTourPlaying] = useState<boolean>(false);
  const [motorTourStep, setMotorTourStep] = useState<number>(0);
  const [motorTourPhase, setMotorTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Ribosome scene state
  const [activeRibosomePart, setActiveRibosomePart] = useState<string>('ribosome_70s');
  const [ribosomeComponentMeta, setRibosomeComponentMeta] = useState<RibosomeComponentData>(RIBOSOME_COMPONENTS_META['ribosome_70s']);
  const [isRibosomePaused, setIsRibosomePaused] = useState<boolean>(false);
  const [ribosomeSpeed, setRibosomeSpeed] = useState<number>(1.0);
  const [ribosomeExplodedProgress, setRibosomeExplodedProgress] = useState<number>(0);
  const [ribosomeFilter, setRibosomeFilter] = useState<string>('all');
  const [isRibosomeNarrating, setIsRibosomeNarrating] = useState<boolean>(false);
  const [isRibosomeAutoRotating, setIsRibosomeAutoRotating] = useState<boolean>(false);

  // Ribosome Guided Tour State
  const [isRibosomeTourActive, setIsRibosomeTourActive] = useState<boolean>(false);
  const [isRibosomeTourPlaying, setIsRibosomeTourPlaying] = useState<boolean>(false);
  const [ribosomeTourStep, setRibosomeTourStep] = useState<number>(0);
  const [ribosomeTourPhase, setRibosomeTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Refs for 3D containers and instances
  const cellContainerRef = useRef<HTMLDivElement>(null);
  const motorContainerRef = useRef<HTMLDivElement>(null);
  const ribosomeContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);
  const motorSceneRef = useRef<FlagellarMotorScene | null>(null);
  const ribosomeSceneRef = useRef<RibosomeScene | null>(null);

  // --------------------------------------------------------------------------
  // 1. Initialize Cell Viewer Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!cellContainerRef.current) return;

    let isDisposed = false;
    const container = cellContainerRef.current;

    // Clean any orphaned canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const cellViewer = new CellViewerScene(container, {
      voiceService,
      onSelectOrganelle: (key: string) => {
        setSelectedOrganelleKey(key);
        setIsCellInspectorOpen(true);
      },
      onTourStepChange: (status: TourStatus) => {
        setTourStatus(status);
        if (status.active) {
          setSelectedOrganelleKey(status.key);
        }
      },
      onWasmStatus: (status: string) => {
        setWasmStatus(status);
      }
    });

    cellViewer.init().then(() => {
      if (isDisposed) {
        cellViewer.dispose();
        return;
      }
      cellSceneRef.current = cellViewer;
      (window as any).__cellViewer = cellViewer;
      cellViewer.start();
    });

    return () => {
      isDisposed = true;
      cellViewer.dispose();
      cellSceneRef.current = null;
    };
  }, []);

  // --------------------------------------------------------------------------
  // 2. Initialize / Sync Flagellar Motor Scene when scenario === 'motor'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!motorContainerRef.current) return;
    if (scenario !== 'motor') return;

    if (!motorSceneRef.current) {
      const motorScene = new FlagellarMotorScene(motorContainerRef.current, {
        voiceService,
        onSelectComponent: (key: string, meta: any) => {
          setActiveMotorPart(key);
          if (meta) {
            setMotorComponentMeta({
              name: meta.name || key,
              dimensions: meta.dimensions || '',
              proteins: meta.proteins || '',
              pdb: meta.pdb || '',
              role: meta.role || '',
              badge: (meta.name || key).toUpperCase()
            });
          }
        }
      });

      motorScene.init();
      motorSceneRef.current = motorScene;
      motorScene.start();
      motorScene.setRepresentationMode('molecular');
      motorScene.resetCamera();
    } else {
      motorSceneRef.current.start();
      motorSceneRef.current.handleResize();
      motorSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
        motorSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3. Initialize / Sync Ribosome Scene when scenario === 'ribosome'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!ribosomeContainerRef.current) return;
    if (scenario !== 'ribosome') return;

    if (!ribosomeSceneRef.current) {
      const ribo = new RibosomeScene(ribosomeContainerRef.current, {
        voiceService,
        onSelectComponent: (key: string, meta: RibosomeComponentData) => {
          setActiveRibosomePart(key);
          if (meta) {
            setRibosomeComponentMeta(meta);
          }
        }
      });

      ribo.init();
      ribosomeSceneRef.current = ribo;
      (window as any).ribosomeScene = ribo;
      ribo.start();
      ribo.resetCamera();
    } else {
      (window as any).ribosomeScene = ribosomeSceneRef.current;
      ribosomeSceneRef.current.start();
      ribosomeSceneRef.current.handleResize();
      ribosomeSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.dispose();
        ribosomeSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 4. Autoplay Whole Cell Overview Narration
  // --------------------------------------------------------------------------
  useEffect(() => {
    let triggered = false;
    const triggerIntro = () => {
      if (triggered) return;
      triggered = true;
      const data = CELL_ANATOMY_DATA['overview'];
      let narrative = `${data.title}. `;
      if (data.scientific) narrative += `Scientific designation: ${data.scientific}. `;
      if (data.subtitle) narrative += `${data.subtitle}. `;
      narrative += data.description;

      setIsCellNarrating(true);
      voiceService.playText(narrative, {
        voice: selectedVoice,
        onEnd: () => setIsCellNarrating(false),
        onError: () => setIsCellNarrating(false)
      });
      window.removeEventListener('pointerdown', triggerIntro);
      window.removeEventListener('keydown', triggerIntro);
    };

    const timer = setTimeout(() => {
      triggerIntro();
    }, 1200);

    window.addEventListener('pointerdown', triggerIntro, { once: true });
    window.addEventListener('keydown', triggerIntro, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', triggerIntro);
      window.removeEventListener('keydown', triggerIntro);
    };
  }, [selectedVoice]);

  // --------------------------------------------------------------------------
  // 5. Scenario Switching
  // --------------------------------------------------------------------------
  const handleSelectScenario = useCallback((nextScenario: ScenarioType) => {
    setScenario(nextScenario);
    voiceService.stop();
    setIsCellNarrating(false);
    setIsMotorNarrating(false);
    setIsRibosomeNarrating(false);

    if (nextScenario === 'motor') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
    } else if (nextScenario === 'ribosome') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
    } else {
      setIsMotorTourActive(false);
      setIsMotorTourPlaying(false);
      setIsRibosomeTourActive(false);
      setIsRibosomeTourPlaying(false);
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (cellSceneRef.current) {
        cellSceneRef.current.start();
        cellSceneRef.current.handleResize();
        cellSceneRef.current.updateLandmarksAndLeaders();
      }
    }
  }, [tourStatus.active]);

  // --------------------------------------------------------------------------
  // 6. Voice Service Sync
  // --------------------------------------------------------------------------
  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
    if (voiceService && voiceService.setVoice) {
      voiceService.setVoice(voice);
    }
  };

  const handleCellNarrate = () => {
    if (voiceService.isBusy()) {
      voiceService.stop();
      setIsCellNarrating(false);
    } else {
      const data = CELL_ANATOMY_DATA[selectedOrganelleKey] || CELL_ANATOMY_DATA['overview'];
      let narrative = `${data.title}. `;
      if (data.scientific) narrative += `Scientific designation: ${data.scientific}. `;
      if (data.subtitle) narrative += `${data.subtitle}. `;
      narrative += data.description;

      setIsCellNarrating(true);
      voiceService.playText(narrative, {
        voice: selectedVoice,
        onEnd: () => setIsCellNarrating(false),
        onError: () => setIsCellNarrating(false)
      });
    }
  };

  const handleMotorNarrate = () => {
    if (voiceService.isBusy()) {
      voiceService.stop();
      setIsMotorNarrating(false);
    } else if (motorComponentMeta) {
      const speech = `${motorComponentMeta.name}. ${motorComponentMeta.role || ''}`;
      setIsMotorNarrating(true);
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => setIsMotorNarrating(false),
        onError: () => setIsMotorNarrating(false)
      });
    }
  };

  const handleRibosomeNarrate = () => {
    if (voiceService.isBusy()) {
      voiceService.stop();
      setIsRibosomeNarrating(false);
    } else if (ribosomeComponentMeta) {
      const speech = `${ribosomeComponentMeta.name}. ${ribosomeComponentMeta.desc || ''}`;
      setIsRibosomeNarrating(true);
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => setIsRibosomeNarrating(false),
        onError: () => setIsRibosomeNarrating(false)
      });
    }
  };

  // --------------------------------------------------------------------------
  // 7. Top Toolbar Actions (Unified for Cell, Motor, & Ribosome)
  // --------------------------------------------------------------------------
  const handleResetCamera = () => {
    if (scenario === 'cell' && cellSceneRef.current) {
      cellSceneRef.current.resetCamera();
    } else if (scenario === 'motor' && motorSceneRef.current) {
      motorSceneRef.current.resetCamera();
    } else if (scenario === 'ribosome' && ribosomeSceneRef.current) {
      ribosomeSceneRef.current.resetCamera();
    }
  };

  const handleToggleAutoRotate = () => {
    if (cellSceneRef.current) {
      const active = cellSceneRef.current.toggleAutoRotate();
      setIsAutoRotating(active);
    }
  };

  const handleToggleMotorAutoRotate = () => {
    if (motorSceneRef.current) {
      const active = motorSceneRef.current.toggleAutoRotate();
      setIsMotorAutoRotating(active);
    }
  };

  const handleToggleRibosomeAutoRotate = () => {
    if (ribosomeSceneRef.current) {
      const active = ribosomeSceneRef.current.toggleAutoRotate();
      setIsRibosomeAutoRotating(active);
    }
  };

  const handleToggleLabels = () => {
    if (cellSceneRef.current) {
      const shown = cellSceneRef.current.toggleLabels();
      setShowCellLabels(shown);
    }
  };

  const handleToggleTour = () => {
    if (cellSceneRef.current) {
      cellSceneRef.current.toggleTourPlay();
    }
  };

  // --------------------------------------------------------------------------
  // 8. Motor Guided Tour Controller
  // --------------------------------------------------------------------------
  const goToMotorTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(MOTOR_TOUR_STOPS.length - 1, stepIndex));
    setMotorTourStep(safeIndex);
    const partKey = MOTOR_TOUR_STOPS[safeIndex];
    handleSelectMotorPart(partKey);

    setTimeout(() => {
      if (motorSceneRef.current) {
        const item = motorSceneRef.current.componentMeshes[partKey];
        const meta = item ? item.meta : null;
        if (meta) {
          const speech = `${meta.name}. ${meta.role || ''}`;
          setMotorTourPhase('narrating');
          setIsMotorNarrating(true);
          voiceService.playText(speech, {
            voice: selectedVoice,
            onEnd: () => {
              setIsMotorNarrating(false);
              setMotorTourPhase('cooldown');
            },
            onError: () => {
              setIsMotorNarrating(false);
              setMotorTourPhase('cooldown');
            }
          });
        }
      }
    }, 400);
  };

  const handleToggleMotorTour = () => {
    if (isMotorTourActive) {
      setIsMotorTourActive(false);
      setIsMotorTourPlaying(false);
      voiceService.stop();
      setIsMotorNarrating(false);
      setMotorTourPhase('idle');
    } else {
      setIsMotorTourActive(true);
      setIsMotorTourPlaying(true);
      goToMotorTourStep(0);
    }
  };

  useEffect(() => {
    if (!isMotorTourActive || !isMotorTourPlaying || motorTourPhase !== 'cooldown') return;
    const timer = setTimeout(() => {
      if (motorTourStep < MOTOR_TOUR_STOPS.length - 1) {
        goToMotorTourStep(motorTourStep + 1);
      } else {
        setIsMotorTourActive(false);
        setIsMotorTourPlaying(false);
        setMotorTourPhase('idle');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isMotorTourActive, isMotorTourPlaying, motorTourPhase, motorTourStep]);

  // --------------------------------------------------------------------------
  // 9. Ribosome Guided Tour Controller
  // --------------------------------------------------------------------------
  const goToRibosomeTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(RIBOSOME_TOUR_STOPS.length - 1, stepIndex));
    setRibosomeTourStep(safeIndex);
    const partKey = RIBOSOME_TOUR_STOPS[safeIndex];
    setActiveRibosomePart(partKey);
    const meta = RIBOSOME_COMPONENTS_META[partKey];
    if (meta) {
      setRibosomeComponentMeta(meta);
    }
    if (ribosomeSceneRef.current) {
      ribosomeSceneRef.current.selectComponent(partKey);
      ribosomeSceneRef.current.focusComponent(partKey);
    }

    setTimeout(() => {
      if (meta) {
        const speech = `${meta.name}. ${meta.desc || ''}`;
        setRibosomeTourPhase('narrating');
        setIsRibosomeNarrating(true);
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsRibosomeNarrating(false);
            setRibosomeTourPhase('cooldown');
          },
          onError: () => {
            setIsRibosomeNarrating(false);
            setRibosomeTourPhase('cooldown');
          }
        });
      }
    }, 400);
  };

  const handleToggleRibosomeTour = () => {
    if (isRibosomeTourActive) {
      setIsRibosomeTourActive(false);
      setIsRibosomeTourPlaying(false);
      voiceService.stop();
      setIsRibosomeNarrating(false);
      setRibosomeTourPhase('idle');
    } else {
      setIsRibosomeTourActive(true);
      setIsRibosomeTourPlaying(true);
      goToRibosomeTourStep(0);
    }
  };

  useEffect(() => {
    if (!isRibosomeTourActive || !isRibosomeTourPlaying || ribosomeTourPhase !== 'cooldown') return;
    const timer = setTimeout(() => {
      if (ribosomeTourStep < RIBOSOME_TOUR_STOPS.length - 1) {
        goToRibosomeTourStep(ribosomeTourStep + 1);
      } else {
        setIsRibosomeTourActive(false);
        setIsRibosomeTourPlaying(false);
        setRibosomeTourPhase('idle');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isRibosomeTourActive, isRibosomeTourPlaying, ribosomeTourPhase, ribosomeTourStep]);

  const handleOrganelleClick = (key: string) => {
    setSelectedOrganelleKey(key);
    setIsCellInspectorOpen(true);
    if (cellSceneRef.current) {
      cellSceneRef.current.selectOrganelle(key);
    }
  };

  const handleFocusOrganelle = () => {
    const data = CELL_ANATOMY_DATA[selectedOrganelleKey];
    if (data && cellSceneRef.current) {
      cellSceneRef.current.flyCameraTo(data.camPos, data.camTarget);
    }
  };

  // --------------------------------------------------------------------------
  // 10. Motor Controls HUD Handlers
  // --------------------------------------------------------------------------
  const handleSetMotorRepMode = (mode: 'molecular' | 'schematic') => {
    setMotorRepMode(mode);
    if (motorSceneRef.current) {
      motorSceneRef.current.setRepresentationMode(mode);
    }
  };

  const handleToggleMembrane = () => {
    if (motorSceneRef.current) {
      const vis = motorSceneRef.current.toggleMembranes();
      setIsMembraneVisible(vis);
    }
  };

  const handleToggleMotorLabels = () => {
    if (motorSceneRef.current) {
      const vis = motorSceneRef.current.toggleLabels();
      setIsMotorLabelsVisible(vis);
    }
  };

  const handleToggleCameraMode = () => {
    if (motorSceneRef.current) {
      const mode = motorSceneRef.current.toggleCameraMode();
      setCameraMode(mode);
    }
  };

  const handleSetMotorDirection = (dir: 'CCW' | 'CW') => {
    setMotorDirection(dir);
    if (motorSceneRef.current) {
      motorSceneRef.current.setDirection(dir);
    }
  };

  const handleToggleMotorPause = () => {
    if (motorSceneRef.current) {
      motorSceneRef.current.isPaused = !motorSceneRef.current.isPaused;
      setIsMotorPaused(motorSceneRef.current.isPaused);
    }
  };

  const handleExplodedChange = (val: number) => {
    setMotorExplodedProgress(val);
    if (motorSceneRef.current) {
      motorSceneRef.current.setExplodedProgress(val / 100);
    }
  };

  const handleSpeedChange = (val: number) => {
    setMotorSpeed(val);
    if (motorSceneRef.current) {
      motorSceneRef.current.setSpeed(val / 100);
    }
  };

  const handleSelectMotorPart = (partId: string) => {
    setActiveMotorPart(partId);
    if (motorSceneRef.current) {
      if (partId === 'molecular_7cgo' || partId === 'molecular_6ykm') {
        motorSceneRef.current.setRepresentationMode('molecular');
        setMotorRepMode('molecular');
      }
      motorSceneRef.current.selectComponent(partId);
    }
  };

  const activeOrganelleData = CELL_ANATOMY_DATA[selectedOrganelleKey] || null;
  const currentTourStepKey = CELL_TOUR_STOPS[tourStatus.stepIndex];
  const currentTourStepTitle = CELL_ANATOMY_DATA[currentTourStepKey]?.title || 'Prokaryote Overview';

  const isDrawerOpen =
    (isCellInspectorOpen && scenario === 'cell') ||
    scenario === 'motor' ||
    scenario === 'ribosome';

  return (
    <div id="app-container" className={isDrawerOpen ? 'drawer-open' : ''}>
      {/* 1. Header with Scale Navigator */}
      <ScaleNavigator scenario={scenario} onSelectScenario={handleSelectScenario} />

      {/* 2. Unified Top Toolbar Persistent Across All 3 Scenarios */}
      <CellToolbar
        wasmStatus={
          scenario === 'cell'
            ? wasmStatus
            : scenario === 'motor'
            ? 'Cryo-EM 7CGO • PDB 6YKM: Active'
            : 'Cryo-EM 7K00 • Expressome 6X9Q: Active'
        }
        selectedVoice={selectedVoice}
        onVoiceChange={handleVoiceChange}
        isNarrating={
          scenario === 'cell'
            ? isCellNarrating
            : scenario === 'motor'
            ? isMotorNarrating
            : isRibosomeNarrating
        }
        onNarrateClick={
          scenario === 'cell'
            ? handleCellNarrate
            : scenario === 'motor'
            ? handleMotorNarrate
            : handleRibosomeNarrate
        }
        onResetCamera={handleResetCamera}
        isAutoRotating={
          scenario === 'cell'
            ? isAutoRotating
            : scenario === 'motor'
            ? isMotorAutoRotating
            : isRibosomeAutoRotating
        }
        onToggleAutoRotate={
          scenario === 'cell'
            ? handleToggleAutoRotate
            : scenario === 'motor'
            ? handleToggleMotorAutoRotate
            : handleToggleRibosomeAutoRotate
        }
        showLabels={
          scenario === 'cell'
            ? showCellLabels
            : scenario === 'motor'
            ? isMotorLabelsVisible
            : true
        }
        onToggleLabels={
          scenario === 'cell'
            ? handleToggleLabels
            : scenario === 'motor'
            ? handleToggleMotorLabels
            : () => {}
        }
        isTourActive={
          scenario === 'cell'
            ? tourStatus.active
            : scenario === 'motor'
            ? isMotorTourActive
            : isRibosomeTourActive
        }
        onToggleTour={
          scenario === 'cell'
            ? handleToggleTour
            : scenario === 'motor'
            ? handleToggleMotorTour
            : handleToggleRibosomeTour
        }
      />

      {/* 3. Whole Cell Scenario Layer */}
      <div style={{ display: scenario === 'cell' ? 'contents' : 'none' }}>
        <div id="canvas-wrapper">
          <div ref={cellContainerRef} style={{ width: '100%', height: '100%' }} />
          <svg id="leader-lines-svg"></svg>
          <CellLabels
            activeTarget={selectedOrganelleKey}
            onSelectOrganelle={handleOrganelleClick}
          />
        </div>

        <CellScaleCard />
        <MicrocompartmentCard />

        <CellInspectorDrawer
          isOpen={isCellInspectorOpen}
          data={activeOrganelleData}
          onClose={() => setIsCellInspectorOpen(false)}
          onFocus={handleFocusOrganelle}
          onDrillDown={() => {
            if (selectedOrganelleKey === 'ribosomes') {
              handleSelectScenario('ribosome');
            } else {
              handleSelectScenario('motor');
            }
          }}
          isNarrating={isCellNarrating}
          onNarrate={handleCellNarrate}
        />

        <TourBar
          status={tourStatus}
          stepTitle={currentTourStepTitle}
          onPrev={() => cellSceneRef.current?.prevTourStep()}
          onTogglePlay={() => cellSceneRef.current?.toggleTourPlay()}
          onNext={() => cellSceneRef.current?.nextTourStep()}
          onToggleVoice={() => {
            const nextVoice = !tourStatus.ttsEnabled;
            cellSceneRef.current?.setTourVoice(nextVoice);
          }}
          onExit={() => cellSceneRef.current?.exitTour()}
        />
      </div>

      {/* 4. Flagellar Motor Scenario Layer */}
      <div
        id="motor-container"
        className={scenario === 'motor' ? '' : 'hidden'}
        style={{ display: scenario === 'motor' ? 'block' : 'none' }}
      >
        <MotorHeaderOverlay onBackToCell={() => handleSelectScenario('cell')} />

        <div
          ref={motorContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="motor-svg-overlay"></svg>
        <div id="motor-labels-container"></div>

        <div className="motor-hud-overlay">
          <MotorHUDCard
            repMode={motorRepMode}
            onSetRepMode={handleSetMotorRepMode}
            isMembraneVisible={isMembraneVisible}
            onToggleMembrane={handleToggleMembrane}
            isLabelsVisible={isMotorLabelsVisible}
            onToggleLabels={handleToggleMotorLabels}
            cameraMode={cameraMode}
            onToggleCameraMode={handleToggleCameraMode}
            direction={motorDirection}
            onSetDirection={handleSetMotorDirection}
            isPaused={isMotorPaused}
            onTogglePause={handleToggleMotorPause}
            explodedProgress={motorExplodedProgress}
            onExplodedChange={handleExplodedChange}
            speed={motorSpeed}
            onSpeedChange={handleSpeedChange}
            onOpenBlueprint={() => setIsBlueprintOpen(true)}
          />

          <MotorPartsChips
            activePart={activeMotorPart}
            onSelectPart={handleSelectMotorPart}
          />
        </div>

        <MotorInspectorDrawer
          data={motorComponentMeta}
          isNarrating={isMotorNarrating}
          onNarrate={handleMotorNarrate}
        />

        {isMotorTourActive && (
          <TourBar
            status={{
              active: isMotorTourActive,
              playing: isMotorTourPlaying,
              stepIndex: motorTourStep,
              key: MOTOR_TOUR_STOPS[motorTourStep],
              totalSteps: MOTOR_TOUR_STOPS.length,
              phase: motorTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={motorComponentMeta?.name || 'Basal Body Component'}
            onPrev={() => goToMotorTourStep(motorTourStep - 1)}
            onTogglePlay={() => setIsMotorTourPlaying(!isMotorTourPlaying)}
            onNext={() => goToMotorTourStep(motorTourStep + 1)}
            onToggleVoice={() => {}}
            onExit={() => {
              setIsMotorTourActive(false);
              setIsMotorTourPlaying(false);
              voiceService.stop();
              setIsMotorNarrating(false);
              setMotorTourPhase('idle');
            }}
          />
        )}

        <BlueprintModal
          isOpen={isBlueprintOpen}
          onClose={() => setIsBlueprintOpen(false)}
        />
      </div>

      {/* 5. 70S Ribosome Translation Factory Scenario Layer */}
      <div
        id="ribosome-container"
        className={scenario === 'ribosome' ? '' : 'hidden'}
        style={{ display: scenario === 'ribosome' ? 'block' : 'none' }}
      >
        <RibosomeHeaderOverlay />

        <div
          ref={ribosomeContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />

        <RibosomeHUDCard
          isPaused={isRibosomePaused}
          onTogglePause={() => {
            if (ribosomeSceneRef.current) {
              const paused = ribosomeSceneRef.current.togglePause();
              setIsRibosomePaused(paused);
            }
          }}
          translationSpeed={ribosomeSpeed}
          onChangeSpeed={(spd) => {
            setRibosomeSpeed(spd);
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setTranslationSpeed(spd);
            }
          }}
          explodedProgress={ribosomeExplodedProgress}
          onChangeExploded={(exp) => {
            setRibosomeExplodedProgress(exp);
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setExplodedProgress(exp);
            }
          }}
          activeFilter={ribosomeFilter}
          onSelectFilter={(f) => {
            setRibosomeFilter(f);
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setSubunitFilter(f);
            }
          }}
          onStepCodon={() => {
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.stepCodon();
            }
          }}
        />

        <RibosomeInspectorDrawer
          data={ribosomeComponentMeta}
          isNarrating={isRibosomeNarrating}
          onNarrate={handleRibosomeNarrate}
          onFocus={() => {
            if (ribosomeSceneRef.current && activeRibosomePart) {
              ribosomeSceneRef.current.focusComponent(activeRibosomePart);
            }
          }}
        />

        {isRibosomeTourActive && (
          <TourBar
            status={{
              active: isRibosomeTourActive,
              playing: isRibosomeTourPlaying,
              stepIndex: ribosomeTourStep,
              key: RIBOSOME_TOUR_STOPS[ribosomeTourStep],
              totalSteps: RIBOSOME_TOUR_STOPS.length,
              phase: ribosomeTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={ribosomeComponentMeta?.name || 'Ribosome Translation Component'}
            onPrev={() => goToRibosomeTourStep(ribosomeTourStep - 1)}
            onTogglePlay={() => setIsRibosomeTourPlaying(!isRibosomeTourPlaying)}
            onNext={() => goToRibosomeTourStep(ribosomeTourStep + 1)}
            onToggleVoice={() => {}}
            onExit={() => {
              setIsRibosomeTourActive(false);
              setIsRibosomeTourPlaying(false);
              voiceService.stop();
              setIsRibosomeNarrating(false);
              setRibosomeTourPhase('idle');
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
