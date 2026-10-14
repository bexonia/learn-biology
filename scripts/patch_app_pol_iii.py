import re

app_path = r"c:\Users\devcd\GenProjects\learn-biology\client\src\App.tsx"

with open(app_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
target_import_types = "RNAPComponentData, TourStatus } from './types/biology';"
replacement_import_types = "RNAPComponentData, PolIIIComponentData, TourStatus } from './types/biology';"
assert target_import_types in content, "Failed to find target_import_types"
content = content.replace(target_import_types, replacement_import_types, 1)

target_core_import = "import { RNAPScene, RNAP_COMPONENTS_META, RNAP_EXPLANATION_STAGES } from './core/rnapTranscription';"
replacement_core_import = """import { RNAPScene, RNAP_COMPONENTS_META, RNAP_EXPLANATION_STAGES } from './core/rnapTranscription';
import { PolIIIReplisomeScene, POL_III_COMPONENTS_META, POL_III_EXPLANATION_STAGES } from './core/polIIIReplication';"""
assert target_core_import in content, "Failed to find target_core_import"
content = content.replace(target_core_import, replacement_core_import, 1)

target_preload = "'/models/6C9Y_assembled_pieces.glb', // RNA Polymerase"
replacement_preload = """'/models/6C9Y_assembled_pieces.glb', // RNA Polymerase
  '/models/5FKV_assembled_pieces.glb', // DNA Polymerase III Replisome"""
assert target_preload in content, "Failed to find target_preload"
content = content.replace(target_preload, replacement_preload, 1)

target_rnap_components = "import { RNAPInspectorDrawer } from './components/RNAP/RNAPInspectorDrawer';"
replacement_rnap_components = """import { RNAPInspectorDrawer } from './components/RNAP/RNAPInspectorDrawer';

// Pol III Components
import { PolIIIHeaderOverlay } from './components/PolIII/PolIIIHeaderOverlay';
import { PolIIIHUDCard } from './components/PolIII/PolIIIHUDCard';
import { PolIIIInspectorDrawer } from './components/PolIII/PolIIIInspectorDrawer';

export const POL_III_TOUR_STOPS = [
  'pol_iii_holoenzyme',
  'pol_iii_alpha',
  'pol_iii_beta_clamp',
  'pol_iii_epsilon',
  'pol_iii_tau',
  'pol_iii_dnab_helicase',
  'pol_iii_dna_duplex',
  'pol_iii_parental_fork',
  'pol_iii_active_palm'
];"""
assert target_rnap_components in content, "Failed to find target_rnap_components"
content = content.replace(target_rnap_components, replacement_rnap_components, 1)

# 2. State hooks
target_rnap_state = "const [rnapTourPhase, setRnapTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"
replacement_pol_state = """const [rnapTourPhase, setRnapTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Pol III Replisome Scenario State
  const [activePolIIIPart, setActivePolIIIPart] = useState<string>('pol_iii_holoenzyme');
  const [polIIIComponentMeta, setPolIIIComponentMeta] = useState<PolIIIComponentData>(POL_III_COMPONENTS_META['pol_iii_holoenzyme']);
  const [isPolIIIPaused, setIsPolIIIPaused] = useState<boolean>(false);
  const [isPolIIIProofreadingActive, setIsPolIIIProofreadingActive] = useState<boolean>(true);
  const [polIIIReplicationSpeed, setPolIIIReplicationSpeed] = useState<number>(1000.0);
  const [polIIIExplodedProgress, setPolIIIExplodedProgress] = useState<number>(0);
  const [isPolIIILabelsVisible, setIsPolIIILabelsVisible] = useState<boolean>(true);
  const [isPolIIINarrating, setIsPolIIINarrating] = useState<boolean>(false);
  const [isPolIIIAutoRotating, setIsPolIIIAutoRotating] = useState<boolean>(false);
  const [polIIIStoryStep, setPolIIIStoryStep] = useState<number>(0);

  // Pol III Guided Tour State
  const [isPolIIITourActive, setIsPolIIITourActive] = useState<boolean>(false);
  const [isPolIIITourPlaying, setIsPolIIITourPlaying] = useState<boolean>(false);
  const [polIIITourStep, setPolIIITourStep] = useState<number>(0);
  const [polIIITourPhase, setPolIIITourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"""
assert target_rnap_state in content, "Failed to find target_rnap_state"
content = content.replace(target_rnap_state, replacement_pol_state, 1)

# 3. Refs
target_rnap_refs = """  const rnapContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
replacement_pol_refs = """  const rnapContainerRef = useRef<HTMLDivElement>(null);
  const polIIIContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
assert target_rnap_refs in content, "Failed to find target_rnap_refs"
content = content.replace(target_rnap_refs, replacement_pol_refs, 1)

target_rnap_scene_ref = "  const rnapSceneRef = useRef<RNAPScene | null>(null);"
replacement_pol_scene_ref = """  const rnapSceneRef = useRef<RNAPScene | null>(null);
  const polIIISceneRef = useRef<PolIIIReplisomeScene | null>(null);"""
assert target_rnap_scene_ref in content, "Failed to find target_rnap_scene_ref"
content = content.replace(target_rnap_scene_ref, replacement_pol_scene_ref, 1)

# 4. Initialize Scene useEffect
target_rnap_effect_end = """      if (rnapSceneRef.current) {
        rnapSceneRef.current.dispose();
        rnapSceneRef.current = null;
      }
    };
  }, []);"""

replacement_pol_effect = """      if (rnapSceneRef.current) {
        rnapSceneRef.current.dispose();
        rnapSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3i. Initialize DNA Polymerase III Replisome Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!polIIIContainerRef.current) return;
    if (scenario !== 'pol_iii') return;

    if (!polIIISceneRef.current) {
      const s1 = new PolIIIReplisomeScene(polIIIContainerRef.current, {
        onSelectComponent: (meta: PolIIIComponentData) => {
          if (meta) {
            setPolIIIComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'DNA POLYMERASE III REPLISOME', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setPolIIIStoryStep(stage);
        }
      });

      polIIISceneRef.current = s1;
      (window as any).polIIIScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).polIIIScene = polIIISceneRef.current;
      polIIISceneRef.current.start();
      polIIISceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (polIIISceneRef.current) {
        polIIISceneRef.current.dispose();
        polIIISceneRef.current = null;
      }
    };
  }, []);"""
assert target_rnap_effect_end in content, "Failed to find target_rnap_effect_end"
content = content.replace(target_rnap_effect_end, replacement_pol_effect, 1)

# 5. handleSelectScenario stop & start
target_select_stop = """    if (nextScenario !== 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.stop();
    }"""
replacement_select_stop = """    if (nextScenario !== 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.stop();
    }
    if (nextScenario !== 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.stop();
    }"""
assert target_select_stop in content, "Failed to find target_select_stop"
content = content.replace(target_select_stop, replacement_select_stop, 1)

target_select_start = """    } else if (nextScenario === 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.start();
      rnapSceneRef.current.resetCamera();
    }"""
replacement_select_start = """    } else if (nextScenario === 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.start();
      rnapSceneRef.current.resetCamera();
    } else if (nextScenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.start();
      polIIISceneRef.current.resetCamera();
    }"""
assert target_select_start in content, "Failed to find target_select_start"
content = content.replace(target_select_start, replacement_select_start, 1)

# 6. Story & Tour Controllers
target_rnap_controllers_end = """  const goToRnapTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(RNAP_TOUR_STOPS.length - 1, stepIndex));
    setRnapTourStep(safeIndex);
    const partKey = RNAP_TOUR_STOPS[safeIndex];
    setActiveRnapPart(partKey);
    const meta = RNAP_COMPONENTS_META[partKey];
    if (meta) {
      setRnapComponentMeta(meta);
      if (rnapSceneRef.current) {
        rnapSceneRef.current.focusComponent(partKey);
      }
      setRnapTourPhase('narrating');
    }
  };"""

replacement_pol_controllers = """  const goToRnapTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(RNAP_TOUR_STOPS.length - 1, stepIndex));
    setRnapTourStep(safeIndex);
    const partKey = RNAP_TOUR_STOPS[safeIndex];
    setActiveRnapPart(partKey);
    const meta = RNAP_COMPONENTS_META[partKey];
    if (meta) {
      setRnapComponentMeta(meta);
      if (rnapSceneRef.current) {
        rnapSceneRef.current.focusComponent(partKey);
      }
      setRnapTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6i. Pol III Replisome Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playPolIIIStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > POL_III_EXPLANATION_STAGES.length) {
      setPolIIIStoryStep(0);
      setIsPolIIINarrating(false);
      setIsPolIIITourActive(false);
      setIsPolIIITourPlaying(false);
      setPolIIITourPhase('idle');
      if (polIIISceneRef.current) {
        polIIISceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = POL_III_EXPLANATION_STAGES[stepNumber - 1];
    setPolIIIStoryStep(stepNumber);
    setActivePolIIIPart(stage.id);
    const meta = POL_III_COMPONENTS_META[stage.id] || POL_III_COMPONENTS_META['pol_iii_holoenzyme'];
    if (meta) {
      setPolIIIComponentMeta(meta);
    }

    if (polIIISceneRef.current) {
      polIIISceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${POL_III_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsPolIIINarrating(true);
    setPolIIITourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsPolIIINarrating(false);
        if (stepNumber < POL_III_EXPLANATION_STAGES.length) {
          setPolIIITourPhase('cooldown');
          setTimeout(() => {
            playPolIIIStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setPolIIIStoryStep(0);
          setIsPolIIINarrating(false);
          setIsPolIIITourActive(false);
          setIsPolIIITourPlaying(false);
          setPolIIITourPhase('idle');
          hideSubtitles();
          if (polIIISceneRef.current) {
            polIIISceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setPolIIIStoryStep(0);
        setIsPolIIINarrating(false);
        setIsPolIIITourActive(false);
        setIsPolIIITourPlaying(false);
        setPolIIITourPhase('idle');
        hideSubtitles();
        if (polIIISceneRef.current) {
          polIIISceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopPolIIIStoryTrace = () => {
    voiceService.stop();
    setIsPolIIINarrating(false);
    setPolIIIStoryStep(0);
    setIsPolIIITourActive(false);
    setIsPolIIITourPlaying(false);
    setPolIIITourPhase('idle');
    hideSubtitles();
    if (polIIISceneRef.current) {
      polIIISceneRef.current.setExplanationStep(0);
    }
  };

  const handlePolIIINarrate = () => {
    if (voiceService.isBusy() || polIIIStoryStep > 0) {
      stopPolIIIStoryTrace();
      return;
    }
    if (!activePolIIIPart || activePolIIIPart === 'pol_iii_holoenzyme') {
      playPolIIIStoryStep(1);
    } else if (polIIIComponentMeta) {
      const speech = `${polIIIComponentMeta.name}. ${polIIIComponentMeta.desc || ''}`;
      setIsPolIIINarrating(true);
      showSubtitles(speech, polIIIComponentMeta.badge || 'DNA POLYMERASE III', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsPolIIINarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsPolIIINarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleTogglePolIIIAutoRotate = () => {
    setIsPolIIIAutoRotating(prev => !prev);
  };

  const handleTogglePolIIILabels = () => {
    setIsPolIIILabelsVisible(prev => !prev);
  };

  const handleTogglePolIIITour = () => {
    if (isPolIIITourActive || polIIIStoryStep > 0) {
      stopPolIIIStoryTrace();
    } else {
      setIsPolIIITourActive(true);
      playPolIIIStoryStep(1);
    }
  };

  const goToPolIIITourStep = (stepIndex: number) => {
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
assert target_rnap_controllers_end in content, "Failed to find target_rnap_controllers_end"
content = content.replace(target_rnap_controllers_end, replacement_pol_controllers, 1)

# 7. handleResetCamera
target_camera_reset = """    } else if (scenario === 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.resetCamera();
    }"""
replacement_camera_reset = """    } else if (scenario === 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.resetCamera();
    } else if (scenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.resetCamera();
    }"""
assert target_camera_reset in content, "Failed to find target_camera_reset"
content = content.replace(target_camera_reset, replacement_camera_reset, 1)

# 8. CellToolbar props
target_toolbar_narrating = ": scenario === 'rnap' ? isRnapNarrating : isLptNarrating"
replacement_toolbar_narrating = ": scenario === 'rnap' ? isRnapNarrating : scenario === 'pol_iii' ? isPolIIINarrating : isLptNarrating"
assert target_toolbar_narrating in content, "Failed to find target_toolbar_narrating"
content = content.replace(target_toolbar_narrating, replacement_toolbar_narrating, 1)

target_toolbar_narrate_click = ": scenario === 'rnap' ? handleRnapNarrate : handleLptNarrate"
replacement_toolbar_narrate_click = ": scenario === 'rnap' ? handleRnapNarrate : scenario === 'pol_iii' ? handlePolIIINarrate : handleLptNarrate"
assert target_toolbar_narrate_click in content, "Failed to find target_toolbar_narrate_click"
content = content.replace(target_toolbar_narrate_click, replacement_toolbar_narrate_click, 1)

target_toolbar_autorotate = ": scenario === 'rnap' ? isRnapAutoRotating : isLptAutoRotating"
replacement_toolbar_autorotate = ": scenario === 'rnap' ? isRnapAutoRotating : scenario === 'pol_iii' ? isPolIIIAutoRotating : isLptAutoRotating"
assert target_toolbar_autorotate in content, "Failed to find target_toolbar_autorotate"
content = content.replace(target_toolbar_autorotate, replacement_toolbar_autorotate, 1)

target_toolbar_toggle_autorotate = ": scenario === 'rnap' ? handleToggleRnapAutoRotate : handleToggleLptAutoRotate"
replacement_toolbar_toggle_autorotate = ": scenario === 'rnap' ? handleToggleRnapAutoRotate : scenario === 'pol_iii' ? handleTogglePolIIIAutoRotate : handleToggleLptAutoRotate"
assert target_toolbar_toggle_autorotate in content, "Failed to find target_toolbar_toggle_autorotate"
content = content.replace(target_toolbar_toggle_autorotate, replacement_toolbar_toggle_autorotate, 1)

target_toolbar_labels = ": scenario === 'rnap' ? isRnapLabelsVisible : isLptLabelsVisible"
replacement_toolbar_labels = ": scenario === 'rnap' ? isRnapLabelsVisible : scenario === 'pol_iii' ? isPolIIILabelsVisible : isLptLabelsVisible"
assert target_toolbar_labels in content, "Failed to find target_toolbar_labels"
content = content.replace(target_toolbar_labels, replacement_toolbar_labels, 1)

target_toolbar_toggle_labels = ": scenario === 'rnap' ? handleToggleRnapLabels : handleToggleLptLabels"
replacement_toolbar_toggle_labels = ": scenario === 'rnap' ? handleToggleRnapLabels : scenario === 'pol_iii' ? handleTogglePolIIILabels : handleToggleLptLabels"
assert target_toolbar_toggle_labels in content, "Failed to find target_toolbar_toggle_labels"
content = content.replace(target_toolbar_toggle_labels, replacement_toolbar_toggle_labels, 1)

target_toolbar_tour_active = ": scenario === 'rnap' ? (isRnapTourActive || rnapStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
replacement_toolbar_tour_active = ": scenario === 'rnap' ? (isRnapTourActive || rnapStoryStep > 0) : scenario === 'pol_iii' ? (isPolIIITourActive || polIIIStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
assert target_toolbar_tour_active in content, "Failed to find target_toolbar_tour_active"
content = content.replace(target_toolbar_tour_active, replacement_toolbar_tour_active, 1)

target_toolbar_toggle_tour = ": scenario === 'rnap' ? handleToggleRnapTour : handleToggleLptTour"
replacement_toolbar_toggle_tour = ": scenario === 'rnap' ? handleToggleRnapTour : scenario === 'pol_iii' ? handleTogglePolIIITour : handleToggleLptTour"
assert target_toolbar_toggle_tour in content, "Failed to find target_toolbar_toggle_tour"
content = content.replace(target_toolbar_toggle_tour, replacement_toolbar_toggle_tour, 1)

# 9. JSX Layer
target_rnap_jsx_end = """        {(isRnapTourActive || rnapStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isRnapTourPlaying || isRnapNarrating,
              stepIndex: rnapStoryStep > 0 ? rnapStoryStep - 1 : rnapTourStep,
              key: rnapStoryStep > 0 ? RNAP_EXPLANATION_STAGES[rnapStoryStep - 1]?.id : RNAP_TOUR_STOPS[rnapTourStep],
              totalSteps: rnapStoryStep > 0 ? RNAP_EXPLANATION_STAGES.length : RNAP_TOUR_STOPS.length,
              phase: rnapTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={rnapStoryStep > 0 ? RNAP_EXPLANATION_STAGES[rnapStoryStep - 1]?.title : (rnapComponentMeta?.name || 'RNA Polymerase')}
            onPrev={() => {
              if (rnapStoryStep > 0) {
                playRnapStoryStep(Math.max(1, rnapStoryStep - 1));
              } else {
                goToRnapTourStep(rnapTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (rnapStoryStep > 0) {
                if (isRnapNarrating) {
                  voiceService.stop();
                  setIsRnapNarrating(false);
                } else {
                  playRnapStoryStep(rnapStoryStep);
                }
              } else {
                setIsRnapTourPlaying(!isRnapTourPlaying);
              }
            }}
            onNext={() => {
              if (rnapStoryStep > 0) {
                playRnapStoryStep(Math.min(RNAP_EXPLANATION_STAGES.length, rnapStoryStep + 1));
              } else {
                goToRnapTourStep(rnapTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopRnapStoryTrace}
          />
        )}
      </div>"""

replacement_pol_jsx = target_rnap_jsx_end + """

      {/* 12. DNA Polymerase III Replisome Holoenzyme Scenario Layer */}
      <div
        id="pol-iii-container"
        className={scenario === 'pol_iii' ? '' : 'hidden'}
        style={{ display: scenario === 'pol_iii' ? 'block' : 'none' }}
      >
        <PolIIIHeaderOverlay />
        <div
          id="pol-iii-viewport"
          className="canvas-container"
          ref={polIIIContainerRef}
          tabIndex={0}
        />
        <svg id="pol-iii-svg-overlay"></svg>
        <div id="pol-iii-labels-container"></div>
        <PolIIIHUDCard
          isPaused={isPolIIIPaused}
          onTogglePause={() => {
            setIsPolIIIPaused(prev => {
              const next = !prev;
              if (polIIISceneRef.current) polIIISceneRef.current.setPaused(next);
              return next;
            });
          }}
          isProofreadingActive={isPolIIIProofreadingActive}
          onToggleProofreading={() => {
            setIsPolIIIProofreadingActive(prev => {
              const next = !prev;
              if (polIIISceneRef.current) polIIISceneRef.current.setProofreadingActive(next);
              return next;
            });
          }}
          replicationSpeed={polIIIReplicationSpeed}
          onChangeReplicationSpeed={(spd) => {
            setPolIIIReplicationSpeed(spd);
            if (polIIISceneRef.current) polIIISceneRef.current.setReplicationSpeed(spd);
          }}
          explodedProgress={polIIIExplodedProgress}
          onChangeExploded={(exp) => {
            setPolIIIExplodedProgress(exp);
            if (polIIISceneRef.current) polIIISceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isPolIIILabelsVisible}
          onToggleLabels={handleTogglePolIIILabels}
          onFocusComponent={(key) => {
            setActivePolIIIPart(key);
            const meta = POL_III_COMPONENTS_META[key];
            if (meta) setPolIIIComponentMeta(meta);
            if (polIIISceneRef.current) {
              polIIISceneRef.current.focusComponent(key);
              polIIISceneRef.current.selectComponent(key);
            }
          }}
        />
        <PolIIIInspectorDrawer
          data={polIIIComponentMeta}
          activeKey={activePolIIIPart}
          isNarrating={isPolIIINarrating}
          storyStep={polIIIStoryStep}
          onSelectStoryStep={(s) => playPolIIIStoryStep(s)}
          onStartStoryTrace={() => playPolIIIStoryStep(1)}
          onStopStoryTrace={stopPolIIIStoryTrace}
          onNarrate={handlePolIIINarrate}
          onFocus={() => {
            if (polIIISceneRef.current && activePolIIIPart) {
              polIIISceneRef.current.focusComponent(activePolIIIPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (polIIISceneRef.current) {
              polIIISceneRef.current.selectComponent(key);
              polIIISceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isPolIIITourActive || polIIIStoryStep > 0) && (
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
assert target_rnap_jsx_end in content, "Failed to find target_rnap_jsx_end"
content = content.replace(target_rnap_jsx_end, replacement_pol_jsx, 1)

# 10. hasTourBar in LiveSubtitles
target_subtitles = "hasTourBar={isRnapTourActive || rnapStoryStep > 0 || isLptTourActive"
replacement_subtitles = "hasTourBar={isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive || rnapStoryStep > 0 || isLptTourActive"
assert target_subtitles in content, "Failed to find target_subtitles"
content = content.replace(target_subtitles, replacement_subtitles, 1)

with open(app_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully patched App.tsx for DNA Polymerase III Replisome!")
