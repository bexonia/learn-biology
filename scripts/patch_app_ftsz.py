import re

app_path = r"c:\Users\devcd\GenProjects\learn-biology\client\src\App.tsx"

with open(app_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
target_import_types = "GyraseComponentData, TourStatus } from './types/biology';"
replacement_import_types = "GyraseComponentData, FtsZComponentData, TourStatus } from './types/biology';"
assert target_import_types in content, f"Failed to find target_import_types"
content = content.replace(target_import_types, replacement_import_types, 1)

target_core_import = "import { DNAGyraseScene, GYRASE_COMPONENTS_META, GYRASE_EXPLANATION_STAGES } from './core/gyraseSupercoiling';"
replacement_core_import = """import { DNAGyraseScene, GYRASE_COMPONENTS_META, GYRASE_EXPLANATION_STAGES } from './core/gyraseSupercoiling';
import { FtsZDivisomeScene, FTSZ_COMPONENTS_META, FTSZ_EXPLANATION_STAGES } from './core/ftszDivisome';"""
assert target_core_import in content, f"Failed to find target_core_import"
content = content.replace(target_core_import, replacement_core_import, 1)

target_preload = "'/models/1AB4_assembled_pieces.glb', // DNA Gyrase Topoisomerase II"
replacement_preload = """'/models/1AB4_assembled_pieces.glb', // DNA Gyrase Topoisomerase II
  '/models/1FSZ_assembled_pieces.glb', // Divisome FtsZ Z-Ring"""
assert target_preload in content, f"Failed to find target_preload"
content = content.replace(target_preload, replacement_preload, 1)

target_gyrase_components = "import { GyraseInspectorDrawer } from './components/Gyrase/GyraseInspectorDrawer';"
replacement_ftsz_components = """import { GyraseInspectorDrawer } from './components/Gyrase/GyraseInspectorDrawer';

// FtsZ Components
import { FtsZHeaderOverlay } from './components/FtsZ/FtsZHeaderOverlay';
import { FtsZHUDCard } from './components/FtsZ/FtsZHUDCard';
import { FtsZInspectorDrawer } from './components/FtsZ/FtsZInspectorDrawer';

export const FTSZ_TOUR_STOPS = [
  'ftsz_protofilaments',
  'ftsz_ftsa_anchor',
  'ftsz_zipa_anchor',
  'ftsz_inner_membrane',
  'ftsz_gtp_pockets',
  'ftsz_septal_wall',
  'ftsz_ftswi_synthase',
  'ftsz_mincde_barrier'
];"""
assert target_gyrase_components in content, f"Failed to find target_gyrase_components"
content = content.replace(target_gyrase_components, replacement_ftsz_components, 1)

# 2. State hooks
target_gyrase_state = "const [gyraseTourPhase, setGyraseTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"
replacement_ftsz_state = """const [gyraseTourPhase, setGyraseTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Divisome FtsZ Z-Ring Scenario State
  const [activeFtsZPart, setActiveFtsZPart] = useState<string>('ftsz_protofilaments');
  const [ftszComponentMeta, setFtsZComponentMeta] = useState<FtsZComponentData>(FTSZ_COMPONENTS_META['ftsz_protofilaments']);
  const [isFtsZPaused, setIsFtsZPaused] = useState<boolean>(false);
  const [isFtsZPC19Inhibited, setIsFtsZPC19Inhibited] = useState<boolean>(false);
  const [isFtsZGTPActive, setIsFtsZGTPActive] = useState<boolean>(true);
  const [ftszSeptumConstriction, setFtsZSeptumConstriction] = useState<number>(0.25);
  const [ftszTreadmillingSpeed, setFtsZTreadmillingSpeed] = useState<number>(28.0);
  const [ftszExplodedProgress, setFtsZExplodedProgress] = useState<number>(0);
  const [isFtsZLabelsVisible, setIsFtsZLabelsVisible] = useState<boolean>(true);
  const [isFtsZNarrating, setIsFtsZNarrating] = useState<boolean>(false);
  const [isFtsZAutoRotating, setIsFtsZAutoRotating] = useState<boolean>(false);
  const [ftszStoryStep, setFtsZStoryStep] = useState<number>(0);

  // FtsZ Guided Tour State
  const [isFtsZTourActive, setIsFtsZTourActive] = useState<boolean>(false);
  const [isFtsZTourPlaying, setIsFtsZTourPlaying] = useState<boolean>(false);
  const [ftszTourStep, setFtsZTourStep] = useState<number>(0);
  const [ftszTourPhase, setFtsZTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"""
assert target_gyrase_state in content, f"Failed to find target_gyrase_state"
content = content.replace(target_gyrase_state, replacement_ftsz_state, 1)

# 3. Refs
target_gyrase_refs = """  const gyraseContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
replacement_ftsz_refs = """  const gyraseContainerRef = useRef<HTMLDivElement>(null);
  const ftszContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
assert target_gyrase_refs in content, f"Failed to find target_gyrase_refs"
content = content.replace(target_gyrase_refs, replacement_ftsz_refs, 1)

target_gyrase_scene_ref = "  const gyraseSceneRef = useRef<DNAGyraseScene | null>(null);"
replacement_ftsz_scene_ref = """  const gyraseSceneRef = useRef<DNAGyraseScene | null>(null);
  const ftszSceneRef = useRef<FtsZDivisomeScene | null>(null);"""
assert target_gyrase_scene_ref in content, f"Failed to find target_gyrase_scene_ref"
content = content.replace(target_gyrase_scene_ref, replacement_ftsz_scene_ref, 1)

# 4. Initialize Scene useEffect
target_gyrase_effect_end = """      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.dispose();
        gyraseSceneRef.current = null;
      }
    };
  }, []);"""

replacement_ftsz_effect = """      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.dispose();
        gyraseSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3k. Initialize Divisome FtsZ Z-Ring Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!ftszContainerRef.current) return;
    if (scenario !== 'ftsz') return;

    if (!ftszSceneRef.current) {
      const s1 = new FtsZDivisomeScene(ftszContainerRef.current, {
        onSelectComponent: (meta: FtsZComponentData) => {
          if (meta) {
            setFtsZComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'DIVISOME FTSZ Z-RING', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setFtsZStoryStep(stage);
        }
      });

      ftszSceneRef.current = s1;
      (window as any).ftszScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).ftszScene = ftszSceneRef.current;
      ftszSceneRef.current.start();
      ftszSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (ftszSceneRef.current) {
        ftszSceneRef.current.dispose();
        ftszSceneRef.current = null;
      }
    };
  }, []);"""
assert target_gyrase_effect_end in content, f"Failed to find target_gyrase_effect_end"
content = content.replace(target_gyrase_effect_end, replacement_ftsz_effect, 1)

# 5. handleSelectScenario stop & start
target_select_stop = """    if (nextScenario !== 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.stop();
    }"""
replacement_select_stop = """    if (nextScenario !== 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.stop();
    }
    if (nextScenario !== 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.stop();
    }"""
assert target_select_stop in content, f"Failed to find target_select_stop"
content = content.replace(target_select_stop, replacement_select_stop, 1)

target_select_start = """    } else if (nextScenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.start();
      gyraseSceneRef.current.resetCamera();
    }"""
replacement_select_start = """    } else if (nextScenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.start();
      gyraseSceneRef.current.resetCamera();
    } else if (nextScenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.start();
      ftszSceneRef.current.resetCamera();
    }"""
assert target_select_start in content, f"Failed to find target_select_start"
content = content.replace(target_select_start, replacement_select_start, 1)

# 6. Story & Tour Controllers
target_gyrase_controllers_end = """  const goToGyraseTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(GYRASE_TOUR_STOPS.length - 1, stepIndex));
    setGyraseTourStep(safeIndex);
    const partKey = GYRASE_TOUR_STOPS[safeIndex];
    setActiveGyrasePart(partKey);
    const meta = GYRASE_COMPONENTS_META[partKey];
    if (meta) {
      setGyraseComponentMeta(meta);
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.focusComponent(partKey);
      }
      setGyraseTourPhase('narrating');
    }
  };"""

replacement_ftsz_controllers = """  const goToGyraseTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(GYRASE_TOUR_STOPS.length - 1, stepIndex));
    setGyraseTourStep(safeIndex);
    const partKey = GYRASE_TOUR_STOPS[safeIndex];
    setActiveGyrasePart(partKey);
    const meta = GYRASE_COMPONENTS_META[partKey];
    if (meta) {
      setGyraseComponentMeta(meta);
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.focusComponent(partKey);
      }
      setGyraseTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6k. Divisome FtsZ Z-Ring Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playFtsZStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > FTSZ_EXPLANATION_STAGES.length) {
      setFtsZStoryStep(0);
      setIsFtsZNarrating(false);
      setIsFtsZTourActive(false);
      setIsFtsZTourPlaying(false);
      setFtsZTourPhase('idle');
      if (ftszSceneRef.current) {
        ftszSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = FTSZ_EXPLANATION_STAGES[stepNumber - 1];
    setFtsZStoryStep(stepNumber);
    setActiveFtsZPart(stage.id);
    const meta = FTSZ_COMPONENTS_META[stage.id] || FTSZ_COMPONENTS_META['ftsz_protofilaments'];
    if (meta) {
      setFtsZComponentMeta(meta);
    }

    if (ftszSceneRef.current) {
      ftszSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${FTSZ_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsFtsZNarrating(true);
    setFtsZTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsFtsZNarrating(false);
        if (stepNumber < FTSZ_EXPLANATION_STAGES.length) {
          setFtsZTourPhase('cooldown');
          setTimeout(() => {
            playFtsZStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setFtsZStoryStep(0);
          setIsFtsZNarrating(false);
          setIsFtsZTourActive(false);
          setIsFtsZTourPlaying(false);
          setFtsZTourPhase('idle');
          hideSubtitles();
          if (ftszSceneRef.current) {
            ftszSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setFtsZStoryStep(0);
        setIsFtsZNarrating(false);
        setIsFtsZTourActive(false);
        setIsFtsZTourPlaying(false);
        setFtsZTourPhase('idle');
        hideSubtitles();
        if (ftszSceneRef.current) {
          ftszSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopFtsZStoryTrace = () => {
    voiceService.stop();
    setIsFtsZNarrating(false);
    setFtsZStoryStep(0);
    setIsFtsZTourActive(false);
    setIsFtsZTourPlaying(false);
    setFtsZTourPhase('idle');
    hideSubtitles();
    if (ftszSceneRef.current) {
      ftszSceneRef.current.setExplanationStep(0);
    }
  };

  const handleFtsZNarrate = () => {
    if (voiceService.isBusy() || ftszStoryStep > 0) {
      stopFtsZStoryTrace();
      return;
    }
    if (!activeFtsZPart || activeFtsZPart === 'ftsz_protofilaments') {
      playFtsZStoryStep(1);
    } else if (ftszComponentMeta) {
      const speech = `${ftszComponentMeta.name}. ${ftszComponentMeta.desc || ''}`;
      setIsFtsZNarrating(true);
      showSubtitles(speech, ftszComponentMeta.badge || 'DIVISOME FTSZ', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsFtsZNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsFtsZNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleFtsZAutoRotate = () => {
    setIsFtsZAutoRotating(prev => !prev);
  };

  const handleToggleFtsZLabels = () => {
    setIsFtsZLabelsVisible(prev => !prev);
  };

  const handleToggleFtsZTour = () => {
    if (isFtsZTourActive || ftszStoryStep > 0) {
      stopFtsZStoryTrace();
    } else {
      setIsFtsZTourActive(true);
      playFtsZStoryStep(1);
    }
  };

  const goToFtsZTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(FTSZ_TOUR_STOPS.length - 1, stepIndex));
    setFtsZTourStep(safeIndex);
    const partKey = FTSZ_TOUR_STOPS[safeIndex];
    setActiveFtsZPart(partKey);
    const meta = FTSZ_COMPONENTS_META[partKey];
    if (meta) {
      setFtsZComponentMeta(meta);
      if (ftszSceneRef.current) {
        ftszSceneRef.current.focusComponent(partKey);
      }
      setFtsZTourPhase('narrating');
    }
  };"""
assert target_gyrase_controllers_end in content, f"Failed to find target_gyrase_controllers_end"
content = content.replace(target_gyrase_controllers_end, replacement_ftsz_controllers, 1)

# 7. handleResetCamera
target_camera_reset = """    } else if (scenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.resetCamera();
    }"""
replacement_camera_reset = """    } else if (scenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.resetCamera();
    } else if (scenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.resetCamera();
    }"""
assert target_camera_reset in content, f"Failed to find target_camera_reset"
content = content.replace(target_camera_reset, replacement_camera_reset, 1)

# 8. CellToolbar props
target_toolbar_narrating = ": scenario === 'gyrase' ? isGyraseNarrating : isLptNarrating"
replacement_toolbar_narrating = ": scenario === 'gyrase' ? isGyraseNarrating : scenario === 'ftsz' ? isFtsZNarrating : isLptNarrating"
assert target_toolbar_narrating in content, f"Failed to find target_toolbar_narrating"
content = content.replace(target_toolbar_narrating, replacement_toolbar_narrating, 1)

target_toolbar_narrate_click = ": scenario === 'gyrase' ? handleGyraseNarrate : handleLptNarrate"
replacement_toolbar_narrate_click = ": scenario === 'gyrase' ? handleGyraseNarrate : scenario === 'ftsz' ? handleFtsZNarrate : handleLptNarrate"
assert target_toolbar_narrate_click in content, f"Failed to find target_toolbar_narrate_click"
content = content.replace(target_toolbar_narrate_click, replacement_toolbar_narrate_click, 1)

target_toolbar_autorotate = ": scenario === 'gyrase' ? isGyraseAutoRotating : isLptAutoRotating"
replacement_toolbar_autorotate = ": scenario === 'gyrase' ? isGyraseAutoRotating : scenario === 'ftsz' ? isFtsZAutoRotating : isLptAutoRotating"
assert target_toolbar_autorotate in content, f"Failed to find target_toolbar_autorotate"
content = content.replace(target_toolbar_autorotate, replacement_toolbar_autorotate, 1)

target_toolbar_toggle_autorotate = ": scenario === 'gyrase' ? handleToggleGyraseAutoRotate : handleToggleLptAutoRotate"
replacement_toolbar_toggle_autorotate = ": scenario === 'gyrase' ? handleToggleGyraseAutoRotate : scenario === 'ftsz' ? handleToggleFtsZAutoRotate : handleToggleLptAutoRotate"
assert target_toolbar_toggle_autorotate in content, f"Failed to find target_toolbar_toggle_autorotate"
content = content.replace(target_toolbar_toggle_autorotate, replacement_toolbar_toggle_autorotate, 1)

target_toolbar_labels = ": scenario === 'gyrase' ? isGyraseLabelsVisible : isLptLabelsVisible"
replacement_toolbar_labels = ": scenario === 'gyrase' ? isGyraseLabelsVisible : scenario === 'ftsz' ? isFtsZLabelsVisible : isLptLabelsVisible"
assert target_toolbar_labels in content, f"Failed to find target_toolbar_labels"
content = content.replace(target_toolbar_labels, replacement_toolbar_labels, 1)

target_toolbar_toggle_labels = ": scenario === 'gyrase' ? handleToggleGyraseLabels : handleToggleLptLabels"
replacement_toolbar_toggle_labels = ": scenario === 'gyrase' ? handleToggleGyraseLabels : scenario === 'ftsz' ? handleToggleFtsZLabels : handleToggleLptLabels"
assert target_toolbar_toggle_labels in content, f"Failed to find target_toolbar_toggle_labels"
content = content.replace(target_toolbar_toggle_labels, replacement_toolbar_toggle_labels, 1)

target_toolbar_tour_active = ": scenario === 'gyrase' ? (isGyraseTourActive || gyraseStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
replacement_toolbar_tour_active = ": scenario === 'gyrase' ? (isGyraseTourActive || gyraseStoryStep > 0) : scenario === 'ftsz' ? (isFtsZTourActive || ftszStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
assert target_toolbar_tour_active in content, f"Failed to find target_toolbar_tour_active"
content = content.replace(target_toolbar_tour_active, replacement_toolbar_tour_active, 1)

target_toolbar_toggle_tour = ": scenario === 'gyrase' ? handleToggleGyraseTour : handleToggleLptTour"
replacement_toolbar_toggle_tour = ": scenario === 'gyrase' ? handleToggleGyraseTour : scenario === 'ftsz' ? handleToggleFtsZTour : handleToggleLptTour"
assert target_toolbar_toggle_tour in content, f"Failed to find target_toolbar_toggle_tour"
content = content.replace(target_toolbar_toggle_tour, replacement_toolbar_toggle_tour, 1)

# 9. JSX Layer
target_gyrase_jsx_end = """        {(isGyraseTourActive || gyraseStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isGyraseTourPlaying || isGyraseNarrating,
              stepIndex: gyraseStoryStep > 0 ? gyraseStoryStep - 1 : gyraseTourStep,
              key: gyraseStoryStep > 0 ? GYRASE_EXPLANATION_STAGES[gyraseStoryStep - 1]?.id : GYRASE_TOUR_STOPS[gyraseTourStep],
              totalSteps: gyraseStoryStep > 0 ? GYRASE_EXPLANATION_STAGES.length : GYRASE_TOUR_STOPS.length,
              phase: gyraseTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={gyraseStoryStep > 0 ? GYRASE_EXPLANATION_STAGES[gyraseStoryStep - 1]?.title : (gyraseComponentMeta?.name || 'DNA Gyrase Topoisomerase II')}
            onPrev={() => {
              if (gyraseStoryStep > 0) {
                playGyraseStoryStep(Math.max(1, gyraseStoryStep - 1));
              } else {
                goToGyraseTourStep(gyraseTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (gyraseStoryStep > 0) {
                if (isGyraseNarrating) {
                  voiceService.stop();
                  setIsGyraseNarrating(false);
                } else {
                  playGyraseStoryStep(gyraseStoryStep);
                }
              } else {
                setIsGyraseTourPlaying(!isGyraseTourPlaying);
              }
            }}
            onNext={() => {
              if (gyraseStoryStep > 0) {
                playGyraseStoryStep(Math.min(GYRASE_EXPLANATION_STAGES.length, gyraseStoryStep + 1));
              } else {
                goToGyraseTourStep(gyraseTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopGyraseStoryTrace}
          />
        )}
      </div>"""

replacement_ftsz_jsx = target_gyrase_jsx_end + """

      {/* 14. Divisome FtsZ Z-Ring Scenario Layer */}
      <div
        id="ftsz-container"
        className={scenario === 'ftsz' ? '' : 'hidden'}
        style={{ display: scenario === 'ftsz' ? 'block' : 'none' }}
      >
        <FtsZHeaderOverlay />
        <div
          id="ftsz-viewport"
          className="canvas-container"
          ref={ftszContainerRef}
          tabIndex={0}
        />
        <svg id="ftsz-svg-overlay"></svg>
        <div id="ftsz-labels-container"></div>
        <FtsZHUDCard
          isPaused={isFtsZPaused}
          onTogglePause={() => {
            setIsFtsZPaused(prev => {
              const next = !prev;
              if (ftszSceneRef.current) ftszSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isPC190723Inhibited={isFtsZPC19Inhibited}
          onTogglePC190723={() => {
            setIsFtsZPC19Inhibited(prev => {
              const next = !prev;
              if (ftszSceneRef.current) ftszSceneRef.current.setPC190723Inhibited(next);
              return next;
            });
          }}
          isGTPActive={isFtsZGTPActive}
          onToggleGTP={() => {
            setIsFtsZGTPActive(prev => {
              const next = !prev;
              if (ftszSceneRef.current) ftszSceneRef.current.setGTPActive(next);
              return next;
            });
          }}
          septumConstriction={ftszSeptumConstriction}
          onChangeConstriction={(val) => {
            setFtsZSeptumConstriction(val);
            if (ftszSceneRef.current) ftszSceneRef.current.setSeptumConstriction(val);
          }}
          treadmillingSpeed={ftszTreadmillingSpeed}
          onChangeTreadmillingSpeed={(val) => {
            setFtsZTreadmillingSpeed(val);
            if (ftszSceneRef.current) ftszSceneRef.current.setTreadmillingSpeed(val);
          }}
          explodedProgress={ftszExplodedProgress}
          onChangeExploded={(exp) => {
            setFtsZExplodedProgress(exp);
            if (ftszSceneRef.current) ftszSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isFtsZLabelsVisible}
          onToggleLabels={handleToggleFtsZLabels}
          onFocusComponent={(key) => {
            setActiveFtsZPart(key);
            const meta = FTSZ_COMPONENTS_META[key];
            if (meta) setFtsZComponentMeta(meta);
            if (ftszSceneRef.current) {
              ftszSceneRef.current.focusComponent(key);
              ftszSceneRef.current.selectComponent(key);
            }
          }}
        />
        <FtsZInspectorDrawer
          data={ftszComponentMeta}
          activeKey={activeFtsZPart}
          isNarrating={isFtsZNarrating}
          storyStep={ftszStoryStep}
          onSelectStoryStep={(s) => playFtsZStoryStep(s)}
          onStartStoryTrace={() => playFtsZStoryStep(1)}
          onStopStoryTrace={stopFtsZStoryTrace}
          onNarrate={handleFtsZNarrate}
          onFocus={() => {
            if (ftszSceneRef.current && activeFtsZPart) {
              ftszSceneRef.current.focusComponent(activeFtsZPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (ftszSceneRef.current) {
              ftszSceneRef.current.selectComponent(key);
              ftszSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isFtsZTourActive || ftszStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isFtsZTourPlaying || isFtsZNarrating,
              stepIndex: ftszStoryStep > 0 ? ftszStoryStep - 1 : ftszTourStep,
              key: ftszStoryStep > 0 ? FTSZ_EXPLANATION_STAGES[ftszStoryStep - 1]?.id : FTSZ_TOUR_STOPS[ftszTourStep],
              totalSteps: ftszStoryStep > 0 ? FTSZ_EXPLANATION_STAGES.length : FTSZ_TOUR_STOPS.length,
              phase: ftszTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={ftszStoryStep > 0 ? FTSZ_EXPLANATION_STAGES[ftszStoryStep - 1]?.title : (ftszComponentMeta?.name || 'Divisome FtsZ Z-Ring')}
            onPrev={() => {
              if (ftszStoryStep > 0) {
                playFtsZStoryStep(Math.max(1, ftszStoryStep - 1));
              } else {
                goToFtsZTourStep(ftszTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (ftszStoryStep > 0) {
                if (isFtsZNarrating) {
                  voiceService.stop();
                  setIsFtsZNarrating(false);
                } else {
                  playFtsZStoryStep(ftszStoryStep);
                }
              } else {
                setIsFtsZTourPlaying(!isFtsZTourPlaying);
              }
            }}
            onNext={() => {
              if (ftszStoryStep > 0) {
                playFtsZStoryStep(Math.min(FTSZ_EXPLANATION_STAGES.length, ftszStoryStep + 1));
              } else {
                goToFtsZTourStep(ftszTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopFtsZStoryTrace}
          />
        )}
      </div>"""
assert target_gyrase_jsx_end in content, f"Failed to find target_gyrase_jsx_end"
content = content.replace(target_gyrase_jsx_end, replacement_ftsz_jsx, 1)

# 10. hasTourBar in LiveSubtitles
target_subtitles = "hasTourBar={isGyraseTourActive || gyraseStoryStep > 0 || isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive"
replacement_subtitles = "hasTourBar={isFtsZTourActive || ftszStoryStep > 0 || isGyraseTourActive || gyraseStoryStep > 0 || isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive"
assert target_subtitles in content, f"Failed to find target_subtitles"
content = content.replace(target_subtitles, replacement_subtitles, 1)

with open(app_path, "w", encoding="utf-8") as f:
    f.write(content)

print("[+] Successfully patched App.tsx for Divisome FtsZ Z-Ring!")
