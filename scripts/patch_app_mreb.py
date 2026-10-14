import re

app_path = r"c:\Users\devcd\GenProjects\learn-biology\client\src\App.tsx"

with open(app_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
target_import_types = "FtsZComponentData, TourStatus } from './types/biology';"
replacement_import_types = "FtsZComponentData, MreBComponentData, TourStatus } from './types/biology';"
assert target_import_types in content, f"Failed to find target_import_types"
content = content.replace(target_import_types, replacement_import_types, 1)

target_core_import = "import { FtsZDivisomeScene, FTSZ_COMPONENTS_META, FTSZ_EXPLANATION_STAGES } from './core/ftszDivisome';"
replacement_core_import = """import { FtsZDivisomeScene, FTSZ_COMPONENTS_META, FTSZ_EXPLANATION_STAGES } from './core/ftszDivisome';
import { MreBCytoskeletonScene, MREB_COMPONENTS_META, MREB_EXPLANATION_STAGES } from './core/mrebCytoskeleton';"""
assert target_core_import in content, f"Failed to find target_core_import"
content = content.replace(target_core_import, replacement_core_import, 1)

target_preload = "'/models/1FSZ_assembled_pieces.glb', // Divisome FtsZ Z-Ring"
replacement_preload = """'/models/1FSZ_assembled_pieces.glb', // Divisome FtsZ Z-Ring
  '/models/1JCG_assembled_pieces.glb', // MreB Actin Helical Rails"""
assert target_preload in content, f"Failed to find target_preload"
content = content.replace(target_preload, replacement_preload, 1)

target_ftsz_components = "import { FtsZInspectorDrawer } from './components/FtsZ/FtsZInspectorDrawer';"
replacement_mreb_components = """import { FtsZInspectorDrawer } from './components/FtsZ/FtsZInspectorDrawer';

// MreB Components
import { MreBHeaderOverlay } from './components/MreB/MreBHeaderOverlay';
import { MreBHUDCard } from './components/MreB/MreBHUDCard';
import { MreBInspectorDrawer } from './components/MreB/MreBInspectorDrawer';

export const MREB_TOUR_STOPS = [
  'mreb_protofilaments',
  'mreb_atp_pockets',
  'mreb_membrane_anchor',
  'mreb_inner_membrane',
  'mreb_rodz_adaptor',
  'mreb_roda_glycosylase',
  'mreb_pbp2_transpeptidase',
  'mreb_a22_pocket'
];"""
assert target_ftsz_components in content, f"Failed to find target_ftsz_components"
content = content.replace(target_ftsz_components, replacement_mreb_components, 1)

# 2. State hooks
target_ftsz_state = "const [ftszTourPhase, setFtsZTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"
replacement_mreb_state = """const [ftszTourPhase, setFtsZTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // MreB Actin Helical Rails Scenario State
  const [activeMreBPart, setActiveMreBPart] = useState<string>('mreb_protofilaments');
  const [mrebComponentMeta, setMreBComponentMeta] = useState<MreBComponentData>(MREB_COMPONENTS_META['mreb_protofilaments']);
  const [isMreBPaused, setIsMreBPaused] = useState<boolean>(false);
  const [isMreBA22Inhibited, setIsMreBA22Inhibited] = useState<boolean>(false);
  const [isMreBATPActive, setIsMreBATPActive] = useState<boolean>(true);
  const [mrebFilamentVelocity, setMreBFilamentVelocity] = useState<number>(25.0);
  const [mrebExplodedProgress, setMreBExplodedProgress] = useState<number>(0);
  const [isMreBLabelsVisible, setIsMreBLabelsVisible] = useState<boolean>(true);
  const [isMreBNarrating, setIsMreBNarrating] = useState<boolean>(false);
  const [isMreBAutoRotating, setIsMreBAutoRotating] = useState<boolean>(false);
  const [mrebStoryStep, setMreBStoryStep] = useState<number>(0);

  // MreB Guided Tour State
  const [isMreBTourActive, setIsMreBTourActive] = useState<boolean>(false);
  const [isMreBTourPlaying, setIsMreBTourPlaying] = useState<boolean>(false);
  const [mrebTourStep, setMreBTourStep] = useState<number>(0);
  const [mrebTourPhase, setMreBTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');"""
assert target_ftsz_state in content, f"Failed to find target_ftsz_state"
content = content.replace(target_ftsz_state, replacement_mreb_state, 1)

# 3. Refs
target_ftsz_refs = """  const ftszContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
replacement_mreb_refs = """  const ftszContainerRef = useRef<HTMLDivElement>(null);
  const mrebContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);"""
assert target_ftsz_refs in content, f"Failed to find target_ftsz_refs"
content = content.replace(target_ftsz_refs, replacement_mreb_refs, 1)

target_ftsz_scene_ref = "  const ftszSceneRef = useRef<FtsZDivisomeScene | null>(null);"
replacement_mreb_scene_ref = """  const ftszSceneRef = useRef<FtsZDivisomeScene | null>(null);
  const mrebSceneRef = useRef<MreBCytoskeletonScene | null>(null);"""
assert target_ftsz_scene_ref in content, f"Failed to find target_ftsz_scene_ref"
content = content.replace(target_ftsz_scene_ref, replacement_mreb_scene_ref, 1)

# 4. Initialize Scene useEffect
target_ftsz_effect_end = """      if (ftszSceneRef.current) {
        ftszSceneRef.current.dispose();
        ftszSceneRef.current = null;
      }
    };
  }, []);"""

replacement_mreb_effect = """      if (ftszSceneRef.current) {
        ftszSceneRef.current.dispose();
        ftszSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3l. Initialize MreB Actin Helical Rails Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!mrebContainerRef.current) return;
    if (scenario !== 'mreb') return;

    if (!mrebSceneRef.current) {
      const s1 = new MreBCytoskeletonScene(mrebContainerRef.current, {
        onSelectComponent: (meta: MreBComponentData) => {
          if (meta) {
            setMreBComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'MREB ACTIN HELICAL RAILS', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setMreBStoryStep(stage);
        }
      });

      mrebSceneRef.current = s1;
      (window as any).mrebScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).mrebScene = mrebSceneRef.current;
      mrebSceneRef.current.start();
      mrebSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (mrebSceneRef.current) {
        mrebSceneRef.current.dispose();
        mrebSceneRef.current = null;
      }
    };
  }, []);"""
assert target_ftsz_effect_end in content, f"Failed to find target_ftsz_effect_end"
content = content.replace(target_ftsz_effect_end, replacement_mreb_effect, 1)

# 5. handleSelectScenario stop & start
target_select_stop = """    if (nextScenario !== 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.stop();
    }"""
replacement_select_stop = """    if (nextScenario !== 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.stop();
    }
    if (nextScenario !== 'mreb' && mrebSceneRef.current) {
      mrebSceneRef.current.stop();
    }"""
assert target_select_stop in content, f"Failed to find target_select_stop"
content = content.replace(target_select_stop, replacement_select_stop, 1)

target_select_start = """    } else if (nextScenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.start();
      ftszSceneRef.current.resetCamera();
    }"""
replacement_select_start = """    } else if (nextScenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.start();
      ftszSceneRef.current.resetCamera();
    } else if (nextScenario === 'mreb' && mrebSceneRef.current) {
      mrebSceneRef.current.start();
      mrebSceneRef.current.resetCamera();
    }"""
assert target_select_start in content, f"Failed to find target_select_start"
content = content.replace(target_select_start, replacement_select_start, 1)

# 6. Story & Tour Controllers
target_ftsz_controllers_end = """  const goToFtsZTourStep = (stepIndex: number) => {
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

replacement_mreb_controllers = """  const goToFtsZTourStep = (stepIndex: number) => {
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
  };

  // --------------------------------------------------------------------------
  // 6l. MreB Actin Helical Rails Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playMreBStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > MREB_EXPLANATION_STAGES.length) {
      setMreBStoryStep(0);
      setIsMreBNarrating(false);
      setIsMreBTourActive(false);
      setIsMreBTourPlaying(false);
      setMreBTourPhase('idle');
      if (mrebSceneRef.current) {
        mrebSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = MREB_EXPLANATION_STAGES[stepNumber - 1];
    setMreBStoryStep(stepNumber);
    setActiveMreBPart(stage.id);
    const meta = MREB_COMPONENTS_META[stage.id] || MREB_COMPONENTS_META['mreb_protofilaments'];
    if (meta) {
      setMreBComponentMeta(meta);
    }

    if (mrebSceneRef.current) {
      mrebSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${MREB_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsMreBNarrating(true);
    setMreBTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsMreBNarrating(false);
        if (stepNumber < MREB_EXPLANATION_STAGES.length) {
          setMreBTourPhase('cooldown');
          setTimeout(() => {
            playMreBStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setMreBStoryStep(0);
          setIsMreBNarrating(false);
          setIsMreBTourActive(false);
          setIsMreBTourPlaying(false);
          setMreBTourPhase('idle');
          hideSubtitles();
          if (mrebSceneRef.current) {
            mrebSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setMreBStoryStep(0);
        setIsMreBNarrating(false);
        setIsMreBTourActive(false);
        setIsMreBTourPlaying(false);
        setMreBTourPhase('idle');
        hideSubtitles();
        if (mrebSceneRef.current) {
          mrebSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopMreBStoryTrace = () => {
    voiceService.stop();
    setIsMreBNarrating(false);
    setMreBStoryStep(0);
    setIsMreBTourActive(false);
    setIsMreBTourPlaying(false);
    setMreBTourPhase('idle');
    hideSubtitles();
    if (mrebSceneRef.current) {
      mrebSceneRef.current.setExplanationStep(0);
    }
  };

  const handleMreBNarrate = () => {
    if (voiceService.isBusy() || mrebStoryStep > 0) {
      stopMreBStoryTrace();
      return;
    }
    if (!activeMreBPart || activeMreBPart === 'mreb_protofilaments') {
      playMreBStoryStep(1);
    } else if (mrebComponentMeta) {
      const speech = `${mrebComponentMeta.name}. ${mrebComponentMeta.desc || ''}`;
      setIsMreBNarrating(true);
      showSubtitles(speech, mrebComponentMeta.badge || 'MREB ACTIN RAILS', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsMreBNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsMreBNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleMreBAutoRotate = () => {
    setIsMreBAutoRotating(prev => !prev);
  };

  const handleToggleMreBLabels = () => {
    setIsMreBLabelsVisible(prev => !prev);
  };

  const handleToggleMreBTour = () => {
    if (isMreBTourActive || mrebStoryStep > 0) {
      stopMreBStoryTrace();
    } else {
      setIsMreBTourActive(true);
      playMreBStoryStep(1);
    }
  };

  const goToMreBTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(MREB_TOUR_STOPS.length - 1, stepIndex));
    setMreBTourStep(safeIndex);
    const partKey = MREB_TOUR_STOPS[safeIndex];
    setActiveMreBPart(partKey);
    const meta = MREB_COMPONENTS_META[partKey];
    if (meta) {
      setMreBComponentMeta(meta);
      if (mrebSceneRef.current) {
        mrebSceneRef.current.focusComponent(partKey);
      }
      setMreBTourPhase('narrating');
    }
  };"""
assert target_ftsz_controllers_end in content, f"Failed to find target_ftsz_controllers_end"
content = content.replace(target_ftsz_controllers_end, replacement_mreb_controllers, 1)

# 7. handleResetCamera
target_camera_reset = """    } else if (scenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.resetCamera();
    }"""
replacement_camera_reset = """    } else if (scenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.resetCamera();
    } else if (scenario === 'mreb' && mrebSceneRef.current) {
      mrebSceneRef.current.resetCamera();
    }"""
assert target_camera_reset in content, f"Failed to find target_camera_reset"
content = content.replace(target_camera_reset, replacement_camera_reset, 1)

# 8. CellToolbar props
target_toolbar_narrating = ": scenario === 'ftsz' ? isFtsZNarrating : isLptNarrating"
replacement_toolbar_narrating = ": scenario === 'ftsz' ? isFtsZNarrating : scenario === 'mreb' ? isMreBNarrating : isLptNarrating"
assert target_toolbar_narrating in content, f"Failed to find target_toolbar_narrating"
content = content.replace(target_toolbar_narrating, replacement_toolbar_narrating, 1)

target_toolbar_narrate_click = ": scenario === 'ftsz' ? handleFtsZNarrate : handleLptNarrate"
replacement_toolbar_narrate_click = ": scenario === 'ftsz' ? handleFtsZNarrate : scenario === 'mreb' ? handleMreBNarrate : handleLptNarrate"
assert target_toolbar_narrate_click in content, f"Failed to find target_toolbar_narrate_click"
content = content.replace(target_toolbar_narrate_click, replacement_toolbar_narrate_click, 1)

target_toolbar_autorotate = ": scenario === 'ftsz' ? isFtsZAutoRotating : isLptAutoRotating"
replacement_toolbar_autorotate = ": scenario === 'ftsz' ? isFtsZAutoRotating : scenario === 'mreb' ? isMreBAutoRotating : isLptAutoRotating"
assert target_toolbar_autorotate in content, f"Failed to find target_toolbar_autorotate"
content = content.replace(target_toolbar_autorotate, replacement_toolbar_autorotate, 1)

target_toolbar_toggle_autorotate = ": scenario === 'ftsz' ? handleToggleFtsZAutoRotate : handleToggleLptAutoRotate"
replacement_toolbar_toggle_autorotate = ": scenario === 'ftsz' ? handleToggleFtsZAutoRotate : scenario === 'mreb' ? handleToggleMreBAutoRotate : handleToggleLptAutoRotate"
assert target_toolbar_toggle_autorotate in content, f"Failed to find target_toolbar_toggle_autorotate"
content = content.replace(target_toolbar_toggle_autorotate, replacement_toolbar_toggle_autorotate, 1)

target_toolbar_labels = ": scenario === 'ftsz' ? isFtsZLabelsVisible : isLptLabelsVisible"
replacement_toolbar_labels = ": scenario === 'ftsz' ? isFtsZLabelsVisible : scenario === 'mreb' ? isMreBLabelsVisible : isLptLabelsVisible"
assert target_toolbar_labels in content, f"Failed to find target_toolbar_labels"
content = content.replace(target_toolbar_labels, replacement_toolbar_labels, 1)

target_toolbar_toggle_labels = ": scenario === 'ftsz' ? handleToggleFtsZLabels : handleToggleLptLabels"
replacement_toolbar_toggle_labels = ": scenario === 'ftsz' ? handleToggleFtsZLabels : scenario === 'mreb' ? handleToggleMreBLabels : handleToggleLptLabels"
assert target_toolbar_toggle_labels in content, f"Failed to find target_toolbar_toggle_labels"
content = content.replace(target_toolbar_toggle_labels, replacement_toolbar_toggle_labels, 1)

target_toolbar_tour_active = ": scenario === 'ftsz' ? (isFtsZTourActive || ftszStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
replacement_toolbar_tour_active = ": scenario === 'ftsz' ? (isFtsZTourActive || ftszStoryStep > 0) : scenario === 'mreb' ? (isMreBTourActive || mrebStoryStep > 0) : (isLptTourActive || lptStoryStep > 0)"
assert target_toolbar_tour_active in content, f"Failed to find target_toolbar_tour_active"
content = content.replace(target_toolbar_tour_active, replacement_toolbar_tour_active, 1)

target_toolbar_toggle_tour = ": scenario === 'ftsz' ? handleToggleFtsZTour : handleToggleLptTour"
replacement_toolbar_toggle_tour = ": scenario === 'ftsz' ? handleToggleFtsZTour : scenario === 'mreb' ? handleToggleMreBTour : handleToggleLptTour"
assert target_toolbar_toggle_tour in content, f"Failed to find target_toolbar_toggle_tour"
content = content.replace(target_toolbar_toggle_tour, replacement_toolbar_toggle_tour, 1)

# 9. JSX Layer
target_ftsz_jsx_end = """        {(isFtsZTourActive || ftszStoryStep > 0) && (
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

replacement_mreb_jsx = target_ftsz_jsx_end + """

      {/* 15. MreB Actin Helical Rails Scenario Layer */}
      <div
        id="mreb-container"
        className={scenario === 'mreb' ? '' : 'hidden'}
        style={{ display: scenario === 'mreb' ? 'block' : 'none' }}
      >
        <MreBHeaderOverlay />
        <div
          id="mreb-viewport"
          className="canvas-container"
          ref={mrebContainerRef}
          tabIndex={0}
        />
        <svg id="mreb-svg-overlay"></svg>
        <div id="mreb-labels-container"></div>
        <MreBHUDCard
          isPaused={isMreBPaused}
          onTogglePause={() => {
            setIsMreBPaused(prev => {
              const next = !prev;
              if (mrebSceneRef.current) mrebSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isA22Inhibited={isMreBA22Inhibited}
          onToggleA22={() => {
            setIsMreBA22Inhibited(prev => {
              const next = !prev;
              if (mrebSceneRef.current) mrebSceneRef.current.setA22Inhibited(next);
              return next;
            });
          }}
          isATPActive={isMreBATPActive}
          onToggleATP={() => {
            setIsMreBATPActive(prev => {
              const next = !prev;
              if (mrebSceneRef.current) mrebSceneRef.current.setATPActive(next);
              return next;
            });
          }}
          filamentVelocity={mrebFilamentVelocity}
          onChangeVelocity={(val) => {
            setMreBFilamentVelocity(val);
            if (mrebSceneRef.current) mrebSceneRef.current.setFilamentVelocity(val);
          }}
          explodedProgress={mrebExplodedProgress}
          onChangeExploded={(exp) => {
            setMreBExplodedProgress(exp);
            if (mrebSceneRef.current) mrebSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isMreBLabelsVisible}
          onToggleLabels={handleToggleMreBLabels}
          onFocusComponent={(key) => {
            setActiveMreBPart(key);
            const meta = MREB_COMPONENTS_META[key];
            if (meta) setMreBComponentMeta(meta);
            if (mrebSceneRef.current) {
              mrebSceneRef.current.focusComponent(key);
              mrebSceneRef.current.selectComponent(key);
            }
          }}
        />
        <MreBInspectorDrawer
          data={mrebComponentMeta}
          activeKey={activeMreBPart}
          isNarrating={isMreBNarrating}
          storyStep={mrebStoryStep}
          onSelectStoryStep={(s) => playMreBStoryStep(s)}
          onStartStoryTrace={() => playMreBStoryStep(1)}
          onStopStoryTrace={stopMreBStoryTrace}
          onNarrate={handleMreBNarrate}
          onFocus={() => {
            if (mrebSceneRef.current && activeMreBPart) {
              mrebSceneRef.current.focusComponent(activeMreBPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (mrebSceneRef.current) {
              mrebSceneRef.current.selectComponent(key);
              mrebSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isMreBTourActive || mrebStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isMreBTourPlaying || isMreBNarrating,
              stepIndex: mrebStoryStep > 0 ? mrebStoryStep - 1 : mrebTourStep,
              key: mrebStoryStep > 0 ? MREB_EXPLANATION_STAGES[mrebStoryStep - 1]?.id : MREB_TOUR_STOPS[mrebTourStep],
              totalSteps: mrebStoryStep > 0 ? MREB_EXPLANATION_STAGES.length : MREB_TOUR_STOPS.length,
              phase: mrebTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={mrebStoryStep > 0 ? MREB_EXPLANATION_STAGES[mrebStoryStep - 1]?.title : (mrebComponentMeta?.name || 'MreB Actin Helical Rails')}
            onPrev={() => {
              if (mrebStoryStep > 0) {
                playMreBStoryStep(Math.max(1, mrebStoryStep - 1));
              } else {
                goToMreBTourStep(mrebTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (mrebStoryStep > 0) {
                if (isMreBNarrating) {
                  voiceService.stop();
                  setIsMreBNarrating(false);
                } else {
                  playMreBStoryStep(mrebStoryStep);
                }
              } else {
                setIsMreBTourPlaying(!isMreBTourPlaying);
              }
            }}
            onNext={() => {
              if (mrebStoryStep > 0) {
                playMreBStoryStep(Math.min(MREB_EXPLANATION_STAGES.length, mrebStoryStep + 1));
              } else {
                goToMreBTourStep(mrebTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopMreBStoryTrace}
          />
        )}
      </div>"""
assert target_ftsz_jsx_end in content, f"Failed to find target_ftsz_jsx_end"
content = content.replace(target_ftsz_jsx_end, replacement_mreb_jsx, 1)

# 10. hasTourBar in LiveSubtitles
target_subtitles = "hasTourBar={isFtsZTourActive || ftszStoryStep > 0 || isGyraseTourActive || gyraseStoryStep > 0 || isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive"
replacement_subtitles = "hasTourBar={isMreBTourActive || mrebStoryStep > 0 || isFtsZTourActive || ftszStoryStep > 0 || isGyraseTourActive || gyraseStoryStep > 0 || isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive"
assert target_subtitles in content, f"Failed to find target_subtitles"
content = content.replace(target_subtitles, replacement_subtitles, 1)

with open(app_path, "w", encoding="utf-8") as f:
    f.write(content)

print("[+] Successfully patched App.tsx for MreB Actin Helical Rails!")
