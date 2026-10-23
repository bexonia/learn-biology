import React, { useEffect, useRef, useState } from 'react';
import type { RoadmapScenarioId } from '../../types/biology';
import { ROADMAP_SCENARIOS_CONFIG, type RoadmapPieceConfig } from '../../core/roadmapScenariosConfig';
import { RoadmapScenarioScene } from '../../core/roadmapScenarioScene';
import voiceService from '../../core/voiceService';

interface RoadmapScenarioOverlayProps {
  scenarioId: RoadmapScenarioId;
  active: boolean;
  selectedVoice: string;
  onShowSubtitles: (text: string, badge: string, speaker: string) => void;
  onHideSubtitles: () => void;
}

export const RoadmapScenarioOverlay: React.FC<RoadmapScenarioOverlayProps> = ({
  scenarioId,
  active,
  selectedVoice,
  onShowSubtitles,
  onHideSubtitles
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<RoadmapScenarioScene | null>(null);

  const cfg = ROADMAP_SCENARIOS_CONFIG[scenarioId];

  const [selectedPiece, setSelectedPiece] = useState<RoadmapPieceConfig>(cfg.pieces[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isInhibited, setIsInhibited] = useState(false);
  const [isEnergyActive, setIsEnergyActive] = useState(true);
  const [sliderVal, setSliderVal] = useState<number>(cfg.sliderDefault);
  const [explodedProgress, setExplodedProgress] = useState<number>(0);
  const [isLabelsVisible, setIsLabelsVisible] = useState<boolean>(true);
  const [storyStep, setStoryStep] = useState<number>(0);
  const [isNarrating, setIsNarrating] = useState<boolean>(false);

  // Initialize single shared WebGL scene instance
  useEffect(() => {
    if (!containerRef.current) return;
    if (!sceneRef.current) {
      const sc = new RoadmapScenarioScene(containerRef.current, {
        onSelectPiece: (p) => setSelectedPiece(p)
      });
      sceneRef.current = sc;
      (window as any).roadmapScene = sc;
    }
    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
      }
    };
  }, []);

  // Respond to active state or scenarioId change
  useEffect(() => {
    if (!sceneRef.current) return;
    if (active) {
      const nextCfg = ROADMAP_SCENARIOS_CONFIG[scenarioId];
      setSelectedPiece(nextCfg.pieces[0]);
      setSliderVal(nextCfg.sliderDefault);
      setExplodedProgress(0);
      setIsPaused(false);
      setIsInhibited(false);
      setIsEnergyActive(true);
      setStoryStep(0);
      setIsNarrating(false);

      sceneRef.current.start();
      sceneRef.current.handleResize();
      sceneRef.current.loadScenario(scenarioId);
    } else {
      sceneRef.current.stop();
    }
  }, [active, scenarioId]);

  const handlePlayStage = (stepNum: number) => {
    const stage = cfg.stages.find((s) => s.step === stepNum);
    if (!stage) {
      setStoryStep(0);
      setIsNarrating(false);
      onHideSubtitles();
      sceneRef.current?.resetCamera();
      return;
    }
    setStoryStep(stepNum);
    sceneRef.current?.focusPiece(stage.targetPiece);
    onShowSubtitles(stage.spoken, `STAGE ${stage.step} OF ${cfg.stages.length}`, 'Kokoro Neural TTS');
    setIsNarrating(true);
    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsNarrating(false);
      },
      onError: () => {
        setIsNarrating(false);
      }
    });
  };

  const handleNarratePiece = () => {
    if (isNarrating) {
      voiceService.stop();
      setIsNarrating(false);
      onHideSubtitles();
      return;
    }
    const text = `${selectedPiece.name}. ${selectedPiece.desc}`;
    setIsNarrating(true);
    onShowSubtitles(text, selectedPiece.badge, 'Kokoro Neural TTS');
    voiceService.playText(text, {
      voice: selectedVoice,
      onEnd: () => {
        setIsNarrating(false);
        onHideSubtitles();
      },
      onError: () => {
        setIsNarrating(false);
        onHideSubtitles();
      }
    });
  };

  const pdbBadges = cfg.pdb.split(',').map((s) => s.trim());

  return (
    <div
      id="roadmap-scenario-container"
      className={active ? '' : 'hidden'}
      style={{ display: active ? 'block' : 'none' }}
    >
      {/* Header Overlay */}
      <div className="motor-overlay-header">
        <div className="motor-header-text">
          <span className="motor-scale-tag">{cfg.scaleTag}</span>
          <h2 className="motor-main-heading">{cfg.title}</h2>
          <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>{cfg.subtitle}</div>
        </div>
      </div>

      {/* 3D WebGL Viewport */}
      <div
        id="roadmap-viewport"
        className="canvas-container"
        ref={containerRef}
        tabIndex={0}
      />

      {/* Left HUD Card */}
      <div className="motor-hud-overlay" id="roadmap-hud-overlay">
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
      <aside id="roadmap-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
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
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#00F5D4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                🎬 5-Stage Explanatory Trace
              </span>
              <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#00F5D4' : '#E2DACD', color: storyStep > 0 ? '#000000' : '#4A5568' }}>
                {storyStep > 0 ? `STAGE ${storyStep} OF ${cfg.stages.length}` : 'READY'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {cfg.stages.map((st) => {
                const isActive = storyStep === st.step;
                return (
                  <div
                    key={st.step}
                    onClick={() => handlePlayStage(st.step)}
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

          {/* Role & Function */}
          <div className="motor-insp-block">
            <span className="motor-insp-block-title">ROLE &amp; FUNCTION</span>
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
                      <div style={{ fontSize: '9.5px', color: '#5C6E64', marginLeft: '14px' }}>{p.desc.slice(0, 68)}...</div>
                    </div>
                    {isSelected && <span style={{ fontSize: '12px', color: '#00F5D4' }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PDB Source Badges */}
          <div className="motor-insp-block">
            <span className="motor-insp-block-title">STRUCTURAL BIOLOGY &amp; PDB SOURCE</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
              {pdbBadges.map((pdbId) => (
                <span
                  key={pdbId}
                  style={{
                    background: '#1A365D',
                    color: '#90CDF4',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '4px'
                  }}
                >
                  PDB: {pdbId}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
