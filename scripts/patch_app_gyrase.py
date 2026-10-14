import re

app_path = r"c:\Users\devcd\GenProjects\learn-biology\client\src\App.tsx"

with open(app_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
target_import_types = "PolIIIComponentData, TourStatus } from './types/biology';"
replacement_import_types = "PolIIIComponentData, GyraseComponentData, TourStatus } from './types/biology';"
assert target_import_types in content, "Failed to find target_import_types"
content = content.replace(target_import_types, replacement_import_types, 1)

target_core_import = "import { PolIIIReplisomeScene, POL_III_COMPONENTS_META, POL_III_EXPLANATION_STAGES } from './core/polIIIReplication';"
replacement_core_import = """import { PolIIIReplisomeScene, POL_III_COMPONENTS_META, POL_III_EXPLANATION_STAGES } from './core/polIIIReplication';
import { DNAGyraseScene, GYRASE_COMPONENTS_META, GYRASE_EXPLANATION_STAGES } from './core/gyraseSupercoiling';"""
assert target_core_import in content, "Failed to find target_core_import"
content = content.replace(target_core_import, replacement_core_import, 1)

target_preload = "'/models/5FKV_assembled_pieces.glb', // DNA Polymerase III Replisome"
replacement_preload = """'/models/5FKV_assembled_pieces.glb', // DNA Polymerase III Replisome
  '/models/1AB4_assembled_pieces.glb', // DNA Gyrase Topoisomerase II"""
assert target_preload in content, "Failed to find target_preload"
content = content.replace(target_preload, replacement_preload, 1)

target_pol_components = "import { PolIIIInspectorDrawer } from './components/PolIII/PolIIIInspectorDrawer';"
replacement_gyrase_components = """import { PolIIIInspectorDrawer } from './components/PolIII/PolIIIInspectorDrawer';

// Gyrase Components
import { GyraseHeaderOverlay } from './components/Gyrase/GyraseHeaderOverlay';
import { GyraseHUDCard } from './components/Gyrase/GyraseHUDCard';
import { GyraseInspectorDrawer } from './components/Gyrase/GyraseInspectorDrawer';

export const GYRASE_TOUR_STOPS = [
  'gyrase_holoenzyme',
  'gyrase_gyra_dimer',
  'gyrase_gyrb_dimer',
  'gyrase_g_segment',
  'gyrase_t_segment',
  'gyrase_tyr122_active',
  'gyrase_cipro_pocket',
  'gyrase_atp_sites',
  'gyrase_ctd_pinwheels'
];"""
assert target_pol_components in content, "Failed to find target_pol_components"
content = content.replace(target_pol_components, replacement_gyrase_components, 1)

# 2. State hooks
target_pol_state = "const [polIIITourPhase, setPolIIITourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"
replacement_gyrase_state = """const [polIIITourPhase, setPolIIITourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // DNA Gyrase Topoisomerase II Scenario State
  const [activeGyrasePart, setActiveGyrasePart] = useState<string>('gyrase_holoenzyme');
  const [gyraseComponentMeta, setGyraseComponentMeta] = useState<GyraseComponentData>(GYRASE_COMPONENTS_META['gyrase_holoenzyme']);
  const [isGyrasePaused, setIsGyrasePaused] = useState<boolean>(false);
  const [isGyraseCiproInhibited, setIsGyraseCiproInhibited] = useState<boolean>(false);
  const [isGyraseATPActive, setIsGyraseATPActive] = useState<boolean>(true);
  const [gyraseSupercoilingRate, setGyraseSupercoilingRate] = useState<number>(1.5);
  const [gyraseExplodedProgress, setGyraseExplodedProgress] = useState<number>(0);
  const [isGyraseLabelsVisible, setIsGyraseLabelsVisible] = useState<boolean>(true);
  const [isGyraseNarrating, setIsGyraseNarrating] = useState<boolean>(false);
  const [isGyraseAutoRotating, setIsGyraseAutoRotating] = useState<boolean>(false);
  const [gyraseStoryStep, setGyraseStoryStep] = useState<number>(0);

  // Gyrase Guided Tour State
  const [isGyraseTourActive, setIsGyraseTourActive] = useState<boolean>(false);
  const [isGyraseTourPlaying, setIsGyraseTourPlaying] = useState<boolean>(false);
  const [gyraseTourStep, setGyraseTourStep] = useState<number>(0);
  const [gyraseTourPhase, setGyraseTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"""
assert target_pol_state in content, "Failed to find target_pol_state"
content = content.replace(target_pol_state, replacement_gyrase_state, 1)

# 3. Refs
target_pol_refs = """  const polIIIContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
replacement_gyrase_refs = """  const polIIIContainerRef = useRef<HTMLDivElement>(null);
  const gyraseContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
assert target_pol_refs in content, "Failed to find target_pol_refs"
content = content.replace(target_pol_refs, replacement_gyrase_refs, 1)

target_pol_scene_ref = "  const polIIISceneRef = useRef<PolIIIReplisomeScene | null>(null);"
replacement_gyrase_scene_ref = """  const polIIISceneRef = useRef<PolIIIReplisomeScene | null>(null);
  const gyraseSceneRef = useRef<DNAGyraseScene | null>(null);"""
assert target_pol_scene_ref in content, "Failed to find target_pol_scene_ref"
content = content.replace(target_pol_scene_ref, replacement_gyrase_scene_ref, 1)

# 4. Initialize Scene useEffect
target_pol_effect_end = """      if (polIIISceneRef.current) {
        polIIISceneRef.current.dispose();
        polIIISceneRef.current = null;
      }
    };
  }, []);"""

replacement_gyrase_effect = """      if (polIIISceneRef.current) {
        polIIISceneRef.current.dispose();
        polIIISceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3j. Initialize DNA Gyrase Topoisomerase II Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!gyraseContainerRef.current) return;
    if (scenario !== 'gyrase') return;

    if (!gyraseSceneRef.current) {
      const s1 = new DNAGyraseScene(gyraseContainerRef.current, {
        onSelectComponent: (meta: GyraseComponentData) => {
          if (meta) {
            setGyraseComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'DNA GYRASE TOPOISOMERASE II', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setGyraseStoryStep(stage);
        }
      });

      gyraseSceneRef.current = s1;
      (window as any).gyraseScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).gyraseScene = gyraseSceneRef.current;
      gyraseSceneRef.current.start();
      gyraseSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.dispose();
        gyraseSceneRef.current = null;
      }
    };
  }, []);"""
assert target_pol_effect_end in content, "Failed to find target_pol_effect_end"
content = content.replace(target_pol_effect_end, replacement_gyrase_effect, 1)

# 5. handleSelectScenario stop & start
target_select_stop = """    if (nextScenario !== 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.stop();
    }"""
replacement_select_stop = """    if (nextScenario !== 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.stop();
    }
    if (nextScenario !== 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.stop();
    }"""
assert target_select_stop in content, "Failed to find target_select_stop"
content = content.replace(target_select_stop, replacement_select_stop, 1)

target_select_start = """    } else if (nextScenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.start();
      polIIISceneRef.current.resetCamera();
    }"""
replacement_select_start = """    } else if (nextScenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.start();
      polIIISceneRef.current.resetCamera();
    } else if (nextScenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.start();
      gyraseSceneRef.current.resetCamera();
    }"""
assert target_select_start in content, "Failed to find target_select_start"
content = content.replace(target_select_start, replacement_select_start, 1)

# 6. Story & Tour Controllers
target_pol_controllers_end = """  const goToPolIIITourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(POL_III_TOUR_STOPS.length - 1, stepIndex));
    setPolIIITourStep(safeIndex);
    const partKey = POL_III_TOUR_STOPS[safeIndex];
    setActivePolIIIPart(partKey);
    const meta = POL_III_COMPONENTS_META[partKey];
    if (meta) {
      setPolIIIComponentMeta(meta);
      if (polIIISceneRef.current) {
        polIIISceneRef.current.focusComponent(partKey);
      }
      setPolIIITourPhase('narrating');
    }
  };"""

replacement_gyrase_controllers = """  const goToPolIIITourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(POL_III_TOUR_STOPS.length - 1, stepIndex));
    setPolIIITourStep(safeIndex);
    const partKey = POL_III_TOUR_STOPS[safeIndex];
    setActivePolIIIPart(partKey);
    const meta = POL_III_COMPONENTS_META[partKey];
    if (meta) {
      setPolIIIComponentMeta(meta);
      if (polIIISceneRef.current) {
        polIIISceneRef.current.focusComponent(partKey);
      }
      setPolIIITourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6j. DNA Gyrase Topoisomerase II Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playGyraseStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > GYRASE_EXPLANATION_STAGES.length) {
      setGyraseStoryStep(0);
      setIsGyraseNarrating(false);
      setIsGyraseTourActive(false);
      setIsGyraseTourPlaying(false);
      setGyraseTourPhase('idle');
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = GYRASE_EXPLANATION_STAGES[stepNumber - 1];
    setGyraseStoryStep(stepNumber);
    setActiveGyrasePart(stage.id);
    const meta = GYRASE_COMPONENTS_META[stage.id] || GYRASE_COMPONENTS_META['gyrase_holoenzyme'];
    if (meta) {
      setGyraseComponentMeta(meta);
    }

    if (gyraseSceneRef.current) {
      gyraseSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${GYRASE_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsGyraseNarrating(true);
    setGyraseTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsGyraseNarrating(false);
        if (stepNumber < GYRASE_EXPLANATION_STAGES.length) {
          setGyraseTourPhase('cooldown');
          setTimeout(() => {
            playGyraseStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setGyraseStoryStep(0);
          setIsGyraseNarrating(false);
          setIsGyraseTourActive(false);
          setIsGyraseTourPlaying(false);
          setGyraseTourPhase('idle');
          hideSubtitles();
          if (gyraseSceneRef.current) {
            gyraseSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setGyraseStoryStep(0);
        setIsGyraseNarrating(false);
        setIsGyraseTourActive(false);
        setIsGyraseTourPlaying(false);
        setGyraseTourPhase('idle');
        hideSubtitles();
        if (gyraseSceneRef.current) {
          gyraseSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopGyraseStoryTrace = () => {
    voiceService.stop();
    setIsGyraseNarrating(false);
    setGyraseStoryStep(0);
    setIsGyraseTourActive(false);
    setIsGyraseTourPlaying(false);
    setGyraseTourPhase('idle');
    hideSubtitles();
    if (gyraseSceneRef.current) {
      gyraseSceneRef.current.setExplanationStep(0);
    }
  };

  const handleGyraseNarrate = () => {
    if (voiceService.isBusy() || gyraseStoryStep > 0) {
      stopGyraseStoryTrace();
      return;
    }
    if (!activeGyrasePart || activeGyrasePart === 'gyrase_holoenzyme') {
      playGyraseStoryStep(1);
    } else if (gyraseComponentMeta) {
      const speech = `${gyraseComponentMeta.name}. ${gyraseComponentMeta.desc || ''}`;
      setIsGyraseNarrating(true);
      showSubtitles(speech, gyraseComponentMeta.badge || 'DNA GYRASE', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsGyraseNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsGyraseNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleGyraseAutoRotate = () => {
    setIsGyraseAutoRotating(prev => !prev);
  };

  const handleToggleGyraseLabels = () => {
    setIsGyraseLabelsVisible(prev => !prev);
  };

  const handleToggleGyraseTour = () => {
    if (isGyraseTourActive || gyraseStoryStep > 0) {
      stopGyraseStoryTrace();
    } else {
      setIsGyraseTourActive(true);
      playGyraseStoryStep(1);
    }
  };

  const goToGyraseTourStep = (stepIndex: number) => {
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
assert target_pol_controllers_end in content, "Failed to find target_pol_controllers_end"
content = content.replace(target_pol_controllers_end, replacement_gyrase_controllers, 1)

# 7. handleResetCamera
target_camera_reset = """    } else if (scenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.resetCamera();
    }"""
replacement_camera_reset = """    } else if (scenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.resetCamera();
    } else if (scenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.resetCamera();
    }"""
assert target_camera_reset in content, "Failed to find target_camera_reset"
content = content.replace(target_camera_reset, replacement_camera_reset, 1)

# 8. CellToolbar props
target_toolbar_narrating = ": scenario === 'pol_iii' ? isPolIIINarrating : isLptNarrating"
replacement_toolbar_narrating = ": scenario === 'pol_iii' ? isPolIIINarrating : scenario === 'gyrase' ? isGyraseNarrating : isLptNarrating"
assert target_toolbar_narrating in content, "Failed to find target_toolbar_narrating"
content = content.replace(target_toolbar_narrating, replacement_toolbar_narrating, 1)

target_toolbar_narrate_click = ": scenario === 'pol_iii' ? handlePolIIINarrate : handleLptNarrate"
replacement_toolbar_narrate_click = ": scenario === 'pol_iii' ? handlePolIIINarrate : scenario === 'gyrase' ? handleGyraseNarrate : handleLptNarrate"
assert target_toolbar_narrate_click in content, "Failed to find target_toolbar_narrate_click"
content = content.replace(target_toolbar_narrate_click, replacement_toolbar_narrate_click, 1)

target_toolbar_autorotate = ": scenario === 'pol_iii' ? isPolIIIAutoRotating : isLptAutoRotating"
replacement_toolbar_autorotate = ": scenario === 'pol_iii' ? isPolIIIAutoRotating : scenario === 'gyrase' ? isGyraseAutoRotating : isLptAutoRotating"
assert target_toolbar_autorotate in content, "Failed to find target_toolbar_autorotate"
content = content.replace(target_toolbar_autorotate, replacement_toolbar_autorotate, 1)

target_toolbar_toggle_autorotate = ": scenario === 'pol_iii' ? handleTogglePolIIIAutoRotate : handleToggleLptAutoRotate"
replacement_toolbar_toggle_autorotate = ": scenario === 'pol_iii' ? handleTogglePolIIIAutoRotate : scenario === 'gyrase' ? handleToggleGyraseAutoRotate : handleToggleLptAutoRotate"
assert target_toolbar_toggle_autorotate in content, "Failed to find target_toolbar_toggle_autorotate"
content = content.replace(target_toolbar_toggle_autorotate, replacement_toolbar_toggle_autorotate, 1)

target_toolbar_labels = ": scenario === 'pol_iii' ? isPolIIILabelsVisible : isLptLabelsVisible"
replacement_toolbar_labels = ": scenario === 'pol_iii' ? isPolIIILabelsVisible : scenario === 'gyrase' ? isGyraseLabelsVisible : isLptLabelsVisible"
assert target_toolbar_labels in content, "Failed to find target_toolbar_labels"
content = content.replace(target_toolbar_labels, replacement_toolbar_labels, 1)

target_toolbar_toggle_labels = ": scenario === 'pol_iii' ? handleTogglePolIIILabels : handleToggleLptLabels"
replacement_toolbar_toggle_labels = ": scenario === 'pol_iii' ? handleTogglePolIIILabels : scenario === 'gyrase' ? handleToggleGyraseLabels : handleToggleLptLabels"
assert target_toolbar_toggle_labels in content, "Failed to find target_toolbar_toggle_labels"
content = content.replace(target_toolbar_toggle_labels, replacement_toolbar_toggle_labels, 1)

target_toolbar_tour_active = ": scenario === 'pol_iii' ? (isPolIIITourActive || polIIIStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
replacement_toolbar_tour_active = ": scenario === 'pol_iii' ? (isPolIIITourActive || polIIIStoryStep > 0) : scenario === 'gyrase' ? (isGyraseTourActive || gyraseStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
assert target_toolbar_tour_active in content, "Failed to find target_toolbar_tour_active"
content = content.replace(target_toolbar_tour_active, replacement_toolbar_tour_active, 1)

target_toolbar_toggle_tour = ": scenario === 'pol_iii' ? handleTogglePolIIITour : handleToggleLptTour"
replacement_toolbar_toggle_tour = ": scenario === 'pol_iii' ? handleTogglePolIIITour : scenario === 'gyrase' ? handleToggleGyraseTour : handleToggleLptTour"
assert target_toolbar_toggle_tour in content, "Failed to find target_toolbar_toggle_tour"
content = content.replace(target_toolbar_toggle_tour, replacement_toolbar_toggle_tour, 1)

# 9. JSX Layer
target_pol_jsx_end = """        {(isPolIIITourActive || polIIIStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isPolIIITourPlaying || isPolIIINarrating,
              stepIndex: polIIIStoryStep > 0 ? polIIIStoryStep - 1 : polIIITourStep,
              key: polIIIStoryStep > 0 ? POL_III_EXPLANATION_STAGES[polIIIStoryStep - 1]?.id : POL_III_TOUR_STOPS[polIIITourStep],
              totalSteps: polIIIStoryStep > 0 ? POL_III_EXPLANATION_STAGES.length : POL_III_TOUR_STOPS.length,
              phase: polIIITourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={polIIIStoryStep > 0 ? POL_III_EXPLANATION_STAGES[polIIIStoryStep - 1]?.title : (polIIIComponentMeta?.name || 'DNA Polymerase III Replisome')}
            onPrev={() => {
              if (polIIIStoryStep > 0) {
                playPolIIIStoryStep(Math.max(1, polIIIStoryStep - 1));
              } else {
                goToPolIIITourStep(polIIITourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (polIIIStoryStep > 0) {
                if (isPolIIINarrating) {
                  voiceService.stop();
                  setIsPolIIINarrating(false);
                } else {
                  playPolIIIStoryStep(polIIIStoryStep);
                }
              } else {
                setIsPolIIITourPlaying(!isPolIIITourPlaying);
              }
            }}
            onNext={() => {
              if (polIIIStoryStep > 0) {
                playPolIIIStoryStep(Math.min(POL_III_EXPLANATION_STAGES.length, polIIIStoryStep + 1));
              } else {
                goToPolIIITourStep(polIIITourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopPolIIIStoryTrace}
          />
        )}
      </div>"""

replacement_gyrase_jsx = target_pol_jsx_end + """

      {/* 13. DNA Gyrase Topoisomerase II Scenario Layer */}
      <div
        id="gyrase-container"
        className={scenario === 'gyrase' ? '' : 'hidden'}
        style={{ display: scenario === 'gyrase' ? 'block' : 'none' }}
      >
        <GyraseHeaderOverlay />
        <div
          id="gyrase-viewport"
          className="canvas-container"
          ref={gyraseContainerRef}
          tabIndex={0}
        />
        <svg id="gyrase-svg-overlay"></svg>
        <div id="gyrase-labels-container"></div>
        <GyraseHUDCard
          isPaused={isGyrasePaused}
          onTogglePause={() => {
            setIsGyrasePaused(prev => {
              const next = !prev;
              if (gyraseSceneRef.current) gyraseSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isCiprofloxacinInhibited={isGyraseCiproInhibited}
          onToggleCiprofloxacin={() => {
            setIsGyraseCiproInhibited(prev => {
              const next = !prev;
              if (gyraseSceneRef.current) gyraseSceneRef.current.setCiprofloxacinInhibited(next);
              return next;
            });
          }}
          isATPHydrolysisActive={isGyraseATPActive}
          onToggleATP={() => {
            setIsGyraseATPActive(prev => {
              const next = !prev;
              if (gyraseSceneRef.current) gyraseSceneRef.current.setATPHydrolysisActive(next);
              return next;
            });
          }}
          supercoilingRate={gyraseSupercoilingRate}
          onChangeSupercoilingRate={(rate) => {
            setGyraseSupercoilingRate(rate);
            if (gyraseSceneRef.current) gyraseSceneRef.current.setSupercoilingRate(rate);
          }}
          explodedProgress={gyraseExplodedProgress}
          onChangeExploded={(exp) => {
            setGyraseExplodedProgress(exp);
            if (gyraseSceneRef.current) gyraseSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isGyraseLabelsVisible}
          onToggleLabels={handleToggleGyraseLabels}
          onFocusComponent={(key) => {
            setActiveGyrasePart(key);
            const meta = GYRASE_COMPONENTS_META[key];
            if (meta) setGyraseComponentMeta(meta);
            if (gyraseSceneRef.current) {
              gyraseSceneRef.current.focusComponent(key);
              gyraseSceneRef.current.selectComponent(key);
            }
          }}
        />
        <GyraseInspectorDrawer
          data={gyraseComponentMeta}
          activeKey={activeGyrasePart}
          isNarrating={isGyraseNarrating}
          storyStep={gyraseStoryStep}
          onSelectStoryStep={(s) => playGyraseStoryStep(s)}
          onStartStoryTrace={() => playGyraseStoryStep(1)}
          onStopStoryTrace={stopGyraseStoryTrace}
          onNarrate={handleGyraseNarrate}
          onFocus={() => {
            if (gyraseSceneRef.current && activeGyrasePart) {
              gyraseSceneRef.current.focusComponent(activeGyrasePart);
            }
          }}
          onSelectPart={(key: string) => {
            if (gyraseSceneRef.current) {
              gyraseSceneRef.current.selectComponent(key);
              gyraseSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isGyraseTourActive || gyraseStoryStep > 0) && (
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
assert target_pol_jsx_end in content, "Failed to find target_pol_jsx_end"
content = content.replace(target_pol_jsx_end, replacement_gyrase_jsx, 1)

# 10. hasTourBar in LiveSubtitles
target_subtitles = "hasTourBar={isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive"
replacement_subtitles = "hasTourBar={isGyraseTourActive || gyraseStoryStep > 0 || isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive"
assert target_subtitles in content, "Failed to find target_subtitles"
content = content.replace(target_subtitles, replacement_subtitles, 1)

with open(app_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully patched App.tsx for DNA Gyrase Topoisomerase II!")
