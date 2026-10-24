import { useEffect, useRef, useState } from 'react';
import type { EukaryoteScenarioId, EukaryotePieceConfig } from './types/eukaryoteBiology';
import { EUKARYOTE_SCENARIOS_LIST, EUKARYOTE_SCENARIOS_CONFIG } from './core/eukaryoteScenariosConfig';
import { EukaryoteScenarioScene } from './core/eukaryoteScenarioScene';
import { TourBar } from '../prokaryote/components/Tour/TourBar';
import { LiveSubtitles } from '../prokaryote/components/Viewport/LiveSubtitles';
import voiceService from '../prokaryote/core/voiceService';

export default function EukaryoteExplorer() {
  const [scenarioId, setScenarioId] = useState<EukaryoteScenarioId>('eukaryotic_animal_cell');
  const cfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<EukaryoteScenarioScene | null>(null);
  const autoAdvanceTimerRef = useRef<number | null>(null);

  const [selectedPiece, setSelectedPiece] = useState<EukaryotePieceConfig>(cfg.pieces[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isInhibited, setIsInhibited] = useState(false);
  const [isEnergyActive, setIsEnergyActive] = useState(true);
  const [sliderVal, setSliderVal] = useState<number>(cfg.sliderDefault);
  const [explodedProgress, setExplodedProgress] = useState<number>(0);
  const [isLabelsVisible, setIsLabelsVisible] = useState<boolean>(true);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false);
  const [storyStep, setStoryStep] = useState<number>(0);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [isNarrating, setIsNarrating] = useState<boolean>(false);
  const [selectedVoice] = useState<string>('af_heart');

  const [subtitles, setSubtitles] = useState<{
    visible: boolean;
    text: string;
    badge: string;
    speaker: string;
  }>({ visible: false, text: '', badge: '', speaker: '' });

  const showSubtitles = (text: string, badge: string, speaker: string) => {
    setSubtitles({ visible: true, text, badge, speaker });
  };

  const hideSubtitles = () => {
    setSubtitles((prev) => ({ ...prev, visible: false }));
  };

  const clearAutoAdvance = () => {
    if (autoAdvanceTimerRef.current !== null) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    if (!sceneRef.current) {
      const sc = new EukaryoteScenarioScene(containerRef.current, {
        onSelectPiece: (p) => setSelectedPiece(p)
      });
      sceneRef.current = sc;
      (window as any).eukaryoteScene = sc;
    }
    return () => {
      clearAutoAdvance();
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    clearAutoAdvance();
    if (!sceneRef.current) return;
    const nextCfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];
    setSelectedPiece(nextCfg.pieces[0]);
    setSliderVal(nextCfg.sliderDefault);
    setExplodedProgress(0);
    setIsPaused(false);
    setIsInhibited(false);
    setIsEnergyActive(true);
    setStoryStep(0);
    setIsTourActive(false);
    setIsNarrating(false);

    sceneRef.current.start();
    sceneRef.current.handleResize();
    sceneRef.current.loadScenario(scenarioId);
  }, [scenarioId]);

  const stopStoryTrace = () => {
    clearAutoAdvance();
    voiceService.stop();
    setIsNarrating(false);
    setStoryStep(0);
    setIsTourActive(false);
    hideSubtitles();
    sceneRef.current?.resetCamera();
  };

  const handlePlayStage = (stepNum: number, autoAdvance: boolean = true) => {
    clearAutoAdvance();
    const currentCfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];
    const stage = currentCfg.stages.find((s) => s.step === stepNum);
    if (!stage) {
      stopStoryTrace();
      return;
    }
    setStoryStep(stepNum);
    setIsTourActive(true);
    sceneRef.current?.focusPiece(stage.targetPiece);
    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${currentCfg.stages.length}: ${stage.title}`, 'Kokoro Neural TTS');
    setIsNarrating(true);
    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsNarrating(false);
        if (autoAdvance) {
          autoAdvanceTimerRef.current = window.setTimeout(() => {
            if (stepNum < currentCfg.stages.length) {
              handlePlayStage(stepNum + 1, true);
            } else {
              stopStoryTrace();
            }
          }, 800);
        }
      },
      onError: () => {
        setIsNarrating(false);
      }
    });
  };

  const handleNarratePiece = () => {
    clearAutoAdvance();
    if (isNarrating || storyStep > 0) {
      stopStoryTrace();
      return;
    }
    const text = `${selectedPiece.name}. ${selectedPiece.desc}`;
    setIsNarrating(true);
    showSubtitles(text, selectedPiece.badge, 'Kokoro Neural TTS');
    voiceService.playText(text, {
      voice: selectedVoice,
      onEnd: () => {
        setIsNarrating(false);
        hideSubtitles();
      },
      onError: () => {
        setIsNarrating(false);
        hideSubtitles();
      }
    });
  };

  const pdbBadges = cfg.pdb.split(',').map((s) => s.trim());

  return (
    <div id="eukaryote-app-shell" style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {/* Editorial Top Header & 36-Scenario Scale Navigator */}
      <header id="editorial-header">
        <div className="header-top-row">
          <div className="scale-navigator" id="eukaryote-scale-navigator" style={{ overflowX: 'auto', maxWidth: '72vw', whiteSpace: 'nowrap' }}>
            <span className="scale-nav-tag">EUKARYOTE (36):</span>
            {EUKARYOTE_SCENARIOS_LIST.map((item) => {
              const isAct = item.id === scenarioId;
              return (
                <button
                  key={item.id}
                  id={`btn-euk-nav-${item.id}`}
                  data-num={item.num}
                  className={`scale-nav-btn ${isAct ? 'active' : ''}`}
                  onClick={() => setScenarioId(item.id)}
                  title={`${item.num}. ${item.title} (${item.pdb})`}
                  style={{ flexShrink: 0 }}
                >
                  <span className="scale-icon">🧬</span> {item.num} {item.id.split('_').slice(0, 2).join(' ')}{' '}
                  <span className="scale-dim">({item.pdb.split(',')[0]})</span>
                </button>
              );
            })}
          </div>

          <div className="toolbar-actions" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              className="toolbar-btn"
              onClick={() => (storyStep > 0 ? stopStoryTrace() : handlePlayStage(1, true))}
            >
              {storyStep > 0 ? '⏹ Stop Tour' : '🔊 Narrate'}
            </button>
            <button
              className="toolbar-btn"
              onClick={() => sceneRef.current?.resetCamera()}
            >
              ↺ Reset Camera
            </button>
            <button
              className={`toolbar-btn ${isAutoRotating ? 'active' : ''}`}
              onClick={() => {
                const next = sceneRef.current?.toggleAutoRotate() ?? false;
                setIsAutoRotating(next);
              }}
            >
              ⟳ Auto-Rotate
            </button>
            <button
              className={`toolbar-btn ${isLabelsVisible ? 'active' : ''}`}
              onClick={() => {
                const next = sceneRef.current?.toggleLabels() ?? true;
                setIsLabelsVisible(next);
              }}
            >
              🏷️ {isLabelsVisible ? 'Labels ON' : 'Labels OFF'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Scenario Container */}
      <div id="eukaryote-scenario-container" style={{ display: 'block' }}>
        <div className="motor-overlay-header">
          {scenarioId !== 'eukaryotic_animal_cell' && (
            <button
              className="btn-back-cell"
              onClick={() => setScenarioId('eukaryotic_animal_cell')}
              title="Return to Whole Animal Cell (20 µm) Master Hub"
            >
              ← Whole Animal Cell (20 µm)
            </button>
          )}
          <div className="motor-header-text">
            <span className="motor-scale-tag">{cfg.scaleTag}</span>
            <h2 className="motor-main-heading">{cfg.title}</h2>
            <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>{cfg.subtitle}</div>
          </div>
        </div>

        {/* 3D WebGL Viewport */}
        <div
          id="eukaryote-viewport"
          className="canvas-container"
          ref={containerRef}
          tabIndex={0}
        />

        {/* Left HUD Simulation Card */}
        <div className="motor-hud-overlay" id="eukaryote-hud-overlay">
          <div className="motor-hud-card">
            <div className="motor-card-section">
              <span className="motor-section-title">BIOPHYSICAL DYNAMICS &amp; PERTURBATION</span>
              <div className="motor-btn-group">
                <button
                  className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isPaused;
                    setIsPaused(next);
                    sceneRef.current?.setPaused(next);
                  }}
                >
                  {isPaused ? '▶ Resume' : '⏸ Pause'}
                </button>
                <button
                  className={`motor-mode-btn ${isInhibited ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isInhibited;
                    setIsInhibited(next);
                    sceneRef.current?.setInhibited(next);
                  }}
                  style={{
                    background: isInhibited ? '#E63946' : '#06D6A0',
                    color: isInhibited ? '#FFFFFF' : '#000000',
                    fontWeight: 700
                  }}
                >
                  {isInhibited ? cfg.inhibitorBtn[0] : cfg.inhibitorBtn[1]}
                </button>
                <button
                  className={`motor-mode-btn ${isEnergyActive ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isEnergyActive;
                    setIsEnergyActive(next);
                    sceneRef.current?.setEnergyActive(next);
                  }}
                  style={{
                    background: isEnergyActive ? '#00F5D4' : '#5C6E64',
                    color: '#000000',
                    fontWeight: 700
                  }}
                >
                  {isEnergyActive ? cfg.energyBtn[0] : cfg.energyBtn[1]}
                </button>
              </div>
            </div>

            {/* Primary Parameter Slider */}
            <div className="motor-card-section">
              <div className="motor-slider-header">
                <span className="motor-slider-label">{cfg.sliderLabel}</span>
                <span className="motor-slider-val" style={{ color: '#3A86FF', fontWeight: 800 }}>
                  {isPaused || isInhibited || !isEnergyActive
                    ? `STALLED (0 ${cfg.sliderUnit})`
                    : `${sliderVal} ${cfg.sliderUnit}`}
                </span>
              </div>
              <input
                type="range"
                min={cfg.sliderMin}
                max={cfg.sliderMax}
                step={(cfg.sliderMax - cfg.sliderMin) / 50}
                value={sliderVal}
                onChange={(e) => setSliderVal(parseFloat(e.target.value))}
                className="motor-slider-track"
              />
              <div className="motor-slider-scale">
                <span>Min ({cfg.sliderMin})</span>
                <span>Nominal ({cfg.sliderDefault})</span>
                <span>Max ({cfg.sliderMax})</span>
              </div>
            </div>

            {/* Exploded Assembly Slider */}
            <div className="motor-card-section">
              <div className="motor-slider-header">
                <span className="motor-slider-label">EXPLODED ASSEMBLY:</span>
                <span className="motor-slider-val">
                  {explodedProgress === 0
                    ? 'ASSEMBLED (0%)'
                    : explodedProgress === 1
                    ? 'FULLY DISSOCIATED (100%)'
                    : `${Math.round(explodedProgress * 100)}%`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={explodedProgress}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setExplodedProgress(val);
                  sceneRef.current?.setExplodedProgress(val);
                }}
                className="motor-slider-track"
              />
              <div className="motor-slider-scale">
                <span>Assembled (0%)</span>
                <span>Dissociated (v_dissoc)</span>
              </div>
            </div>

            {/* Quick Inspect Pieces */}
            <div className="motor-card-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="motor-section-title" style={{ margin: 0 }}>QUICK INSPECT PIECES:</span>
                <button
                  className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isLabelsVisible;
                    setIsLabelsVisible(next);
                    sceneRef.current?.setLabelsVisible(next);
                  }}
                  style={{ padding: '2px 8px', fontSize: '10px' }}
                >
                  {isLabelsVisible ? '🏷️ Leaders On' : '🏷️ Leaders Off'}
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {cfg.pieces.map((p) => (
                  <button
                    key={p.meshName}
                    onClick={() => sceneRef.current?.focusPiece(p.meshName)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.88)',
                      border: `1px solid ${p.color}`,
                      color: '#1E293B',
                      fontWeight: 600,
                      borderRadius: '12px',
                      padding: '3px 7px',
                      fontSize: '10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color }} />
                    {p.badge}
                  </button>
                ))}
              </div>
            </div>

            {/* Biophysical I/O Circuit Box */}
            <div style={{ marginTop: '4px', padding: '6px 8px', background: 'rgba(26, 43, 37, 0.06)', border: '1px solid rgba(26, 43, 37, 0.12)', borderRadius: '6px', fontSize: '10px', color: '#2D3E35' }}>
              <div><strong>UPSTREAM:</strong> {cfg.upstream}</div>
              <div style={{ marginTop: '2px' }}><strong>COUPLING:</strong> {cfg.coupling}</div>
              <div style={{ marginTop: '2px' }}><strong>DOWNSTREAM:</strong> {cfg.downstream}</div>
            </div>
          </div>
        </div>

        {/* Right Inspector Drawer */}
        <aside id="eukaryote-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
          <div className="motor-insp-header">
            <span className="motor-insp-badge">{selectedPiece.badge}</span>
            <h2 className="motor-insp-title">{selectedPiece.name}</h2>
            <div className="motor-insp-dims">PDB: {cfg.pdb}</div>
          </div>

          <div className="motor-tts-row">
            <button
              className={`motor-tts-btn ${isNarrating ? 'playing' : ''}`}
              onClick={handleNarratePiece}
            >
              {isNarrating ? '⏹ Stop' : '🔊 Read Aloud'}
            </button>
            <span className="motor-pronounce">🗣️ {cfg.pronounce}</span>
          </div>

          <div className="motor-insp-body">
            {/* 5-Stage Explanatory Trace */}
            <div className="motor-insp-block" style={{ borderLeft: '3px solid #00F5D4', background: 'rgba(0, 245, 212, 0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#0F766E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  🎬 5-Stage Masterclass Trace
                </span>
                <button
                  onClick={() => (storyStep > 0 ? stopStoryTrace() : handlePlayStage(1, true))}
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: storyStep > 0 ? '#E63946' : '#00F5D4',
                    color: storyStep > 0 ? '#FFFFFF' : '#000000'
                  }}
                >
                  {storyStep > 0 ? `⏹ STOP (STAGE ${storyStep}/${cfg.stages.length})` : '▶ PLAY ALL 5 STAGES'}
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {cfg.stages.map((st) => {
                  const isActive = storyStep === st.step;
                  return (
                    <div
                      key={st.step}
                      onClick={() => handlePlayStage(st.step, true)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '5px 8px',
                        borderRadius: '6px',
                        background: isActive ? 'rgba(0, 245, 212, 0.16)' : 'rgba(255, 255, 255, 0.55)',
                        border: isActive ? `1.5px solid ${st.color}` : '1px solid rgba(226, 218, 205, 0.6)',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: isActive ? st.color : '#CBD5E1',
                        color: isActive ? '#000000' : '#475569',
                        fontSize: '10px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {st.step}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1E293B' }}>{st.title}</div>
                        <div style={{ fontSize: '9px', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{st.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Role & Biophysical Mechanism */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">ROLE &amp; BIOPHYSICAL MECHANISM</span>
              <p className="motor-insp-text">{selectedPiece.desc}</p>
            </div>

            {/* Biochemical Mechanism 2x2 Grid */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">BIOCHEMICAL MECHANISM &amp; PARAMETERS</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
                {cfg.kinetics.map(([kLabel, kVal], idx) => (
                  <div key={idx} style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
                    <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>{kLabel}</span>
                    <span style={{ fontSize: '10.5px', color: '#0F172A', fontWeight: 800 }}>{kVal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subunit Architecture List */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">SUBUNIT ARCHITECTURE ({cfg.pieces.length} PIECES)</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px', marginTop: '6px' }}>
                {cfg.pieces.map((p) => {
                  const isSelected = selectedPiece.meshName === p.meshName;
                  return (
                    <button
                      key={p.meshName}
                      onClick={() => sceneRef.current?.focusPiece(p.meshName)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        border: isSelected ? `1.5px solid ${p.color}` : '1px solid #E2DACD',
                        background: isSelected ? 'rgba(0, 245, 212, 0.12)' : '#FFFFFF',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B2A20' }}>
                          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: p.color, marginRight: '6px' }} />
                          {p.name}
                        </div>
                        <div style={{ fontSize: '9.5px', color: '#5C6E64', marginLeft: '14px' }}>{p.desc.slice(0, 82)}...</div>
                      </div>
                      {isSelected && <span style={{ fontSize: '12px', color: '#00F5D4' }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Curated Online Resources & Structural References */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">CURATED ONLINE &amp; RCSB PDB REFERENCES</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px', marginBottom: '6px' }}>
                {pdbBadges.map((pdbId) => (
                  <a
                    key={pdbId}
                    href={`https://www.rcsb.org/structure/${pdbId}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#1A365D',
                      color: '#90CDF4',
                      fontSize: '9.5px',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    RCSB PDB: {pdbId} ↗
                  </a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {cfg.resources.map((res, rIdx) => (
                  <a
                    key={rIdx}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '10px',
                      color: '#0F766E',
                      textDecoration: 'underline',
                      lineHeight: 1.35
                    }}
                  >
                    • {res.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {(isTourActive || storyStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isNarrating,
              stepIndex: Math.max(0, storyStep - 1),
              key: cfg.stages[Math.max(0, storyStep - 1)]?.targetPiece || cfg.pieces[0].meshName,
              totalSteps: cfg.stages.length,
              phase: isNarrating ? 'narrating' : 'cooldown',
              cooldownRemaining: 1,
              ttsEnabled: true
            }}
            stepTitle={cfg.stages[Math.max(0, storyStep - 1)]?.title || cfg.title}
            onPrev={() => handlePlayStage(Math.max(1, storyStep - 1), true)}
            onTogglePlay={() => {
              if (isNarrating) {
                clearAutoAdvance();
                voiceService.stop();
                setIsNarrating(false);
              } else {
                handlePlayStage(storyStep > 0 ? storyStep : 1, true);
              }
            }}
            onNext={() => handlePlayStage(Math.min(cfg.stages.length, (storyStep || 1) + 1), true)}
            onToggleVoice={() => {}}
            onExit={stopStoryTrace}
          />
        )}

        <LiveSubtitles
          visible={subtitles.visible}
          text={subtitles.text}
          badge={subtitles.badge}
          speaker={subtitles.speaker}
        />
      </div>
    </div>
  );
}
