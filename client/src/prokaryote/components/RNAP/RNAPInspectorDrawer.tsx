import React from 'react';
import type { RNAPComponentData } from '../../types/biology';

interface RNAPInspectorDrawerProps {
  data: RNAPComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  onFocus: () => void;
  activeKey?: string;
  onSelectPart?: (key: string) => void;
  storyStep?: number;
  onSelectStoryStep?: (step: number) => void;
  onStartStoryTrace?: () => void;
  onStopStoryTrace?: () => void;
}

export const RNAPInspectorDrawer: React.FC<RNAPInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  onFocus,
  activeKey,
  onSelectPart,
  storyStep = 0,
  onSelectStoryStep,
  onStartStoryTrace,
  onStopStoryTrace
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.replace(/PDB:\s*/i, '').replace(/PDB\s*/i, '').split(',').map((p) => p.trim())
    : [];

  return (
    <aside id="rnap-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="rnap-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'RNA POLYMERASE COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="rnap-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="rnap-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`motor-tts-btn ${isNarrating ? 'playing' : ''}`}
          onClick={onNarrate}
          title="Narrate component information using Kokoro-82M Neural TTS"
        >
          {isNarrating ? '⏹ Stop' : '🔊 Read Aloud'}
        </button>
        <span className="motor-pronounce">
          🗣️ [ahr-ehn-AY puh-LIM-er-ays sihg-muh SEHV-en-tee]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* 1. 6-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #3A86FF', background: 'rgba(58, 134, 255, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#3A86FF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              🎬 6-Stage Explanatory Trace
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#3A86FF' : '#E2DACD', color: storyStep > 0 ? '#FFFFFF' : '#4A5568' }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 6` : 'READY'}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of bacterial transcription initiation, bubble melting, catalysis, and translation coupling:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Promoter Scanning (Closed Complex)', desc: 'σ⁷⁰ scans DNA and binds -10 / -35 promoter elements', col: '#FFB703' },
              { num: 2, title: '2. Transcription Bubble Melting', desc: '13-bp DNA duplex melts into open complex without ATP', col: '#00F5D4' },
              { num: 3, title: '3. DNA Scrunching & Abortive Initiation', desc: 'Downstream DNA scrunches; 2–9 nt abortive RNAs release', col: '#3A86FF' },
              { num: 4, title: '4. Processive Elongation & Two-Metal Catalysis', desc: '2× Mg²⁺ catalyze phosphodiester synthesis at 50 nt/sec', col: '#FFE066' },
              { num: 5, title: '5. RNA Exit Channel & Rifampicin Block', desc: 'Nascent RNA emerges; rifampicin creates a steric wall', col: '#E63946' },
              { num: 6, title: '6. Expressome Ribosome Coupling', desc: 'Trailing 70S ribosome docks directly onto emerging mRNA', col: '#9D4EDD' }
            ].map((step) => {
              const isActive = storyStep === step.num;
              return (
                <div
                  key={step.num}
                  onClick={() => onSelectStoryStep && onSelectStoryStep(step.num)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '5px 8px',
                    borderRadius: '6px',
                    background: isActive ? 'rgba(58, 134, 255, 0.16)' : 'rgba(255, 255, 255, 0.55)',
                    border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(226, 218, 205, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: step.col,
                    color: '#000',
                    fontSize: '10px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {step.num}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#1E293B', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{step.title}</span>
                      {isActive && <span style={{ color: step.col, fontSize: '9px', fontWeight: 800 }}>ACTIVE</span>}
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
            {storyStep === 0 ? (
              <button
                className="motor-mode-btn active"
                onClick={onStartStoryTrace}
                style={{ width: '100%', background: '#3A86FF', color: '#FFFFFF', fontWeight: 700, fontSize: '11px', padding: '6px 10px' }}
              >
                🎬 Start Explanatory Trace
              </button>
            ) : (
              <button
                className="motor-mode-btn"
                onClick={onStopStoryTrace}
                style={{ width: '100%', background: '#E2DACD', color: '#1E293B', fontWeight: 700, fontSize: '11px', padding: '6px 10px' }}
              >
                ⏹ Exit Trace &amp; Free Orbit
              </button>
            )}
          </div>
        </div>

        {/* 2. Transcription Cycle Multi-State Card */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">TRANSCRIPTION CYCLE STATES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: '4px' }}>
            {[
              { id: 'promoter_binding', label: 'Closed Complex', step: 1, col: '#FFB703' },
              { id: 'bubble_melting', label: 'Open Complex', step: 2, col: '#00F5D4' },
              { id: 'abortive_initiation', label: 'Scrunching', step: 3, col: '#3A86FF' },
              { id: 'processive_elongation', label: 'Elongation', step: 4, col: '#FFE066' },
              { id: 'rifampicin_block', label: 'Rifampicin Stall', step: 5, col: '#E63946' },
              { id: 'expressome_coupled', label: 'Expressome', step: 6, col: '#9D4EDD' }
            ].map((state) => {
              const isActive = storyStep === state.step;
              return (
                <button
                  key={state.id}
                  onClick={() => onSelectStoryStep && onSelectStoryStep(state.step)}
                  style={{
                    padding: '4px 6px',
                    borderRadius: '4px',
                    border: isActive ? `1.5px solid ${state.col}` : '1px solid #E2DACD',
                    background: isActive ? 'rgba(58, 134, 255, 0.12)' : '#FFFFFF',
                    fontSize: '9px',
                    fontWeight: 700,
                    color: isActive ? state.col : '#475569',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  {state.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Subunit Decomposition Grid */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">HOLOENZYME SUBUNIT DECOMPOSITION</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginTop: '6px' }}>
            {[
              { key: 'rnap_beta', name: 'Subunit β (151 kDa)', role: 'Catalytic claw & Rif pocket', col: '#3A86FF' },
              { key: 'rnap_betaprime', name: 'Subunit β′ (155 kDa)', role: 'NADFDGD triad & clamp jaw', col: '#9D4EDD' },
              { key: 'rnap_alpha_dimer', name: 'Subunit α₂ (73 kDa)', role: 'Core scaffold & TF dock', col: '#06D6A0' },
              { key: 'rnap_omega', name: 'Subunit ω (10 kDa)', role: 'β′ folding chaperone latch', col: '#2EC4B6' },
              { key: 'rnap_sigma70', name: 'Factor σ⁷⁰ (70 kDa)', role: 'Promoter -10/-35 specificity', col: '#FFB703' },
              { key: 'rnap_dna_duplex', name: 'DNA Bubble (13 bp)', role: 'Template unwinding cleft', col: '#00F5D4' }
            ].map((sub) => {
              const isSelected = activeKey === sub.key;
              return (
                <div
                  key={sub.key}
                  onClick={() => onSelectPart && onSelectPart(sub.key)}
                  style={{
                    padding: '5px 7px',
                    borderRadius: '5px',
                    borderLeft: `3px solid ${sub.col}`,
                    background: isSelected ? 'rgba(58, 134, 255, 0.12)' : 'rgba(255, 255, 255, 0.65)',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#1E293B' }}>{sub.name}</div>
                  <div style={{ fontSize: '8.5px', color: '#64748B' }}>{sub.role}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Biological Description & Catalytic Mechanism */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">BIOLOGICAL ROLE &amp; CATALYTIC ARCHITECTURE</span>
          <p className="motor-insp-desc" id="rnap-comp-desc">
            {data.desc}
          </p>
          {data.role && (
            <div style={{ marginTop: '6px', fontSize: '10.5px', color: '#334155', fontStyle: 'italic', lineHeight: 1.4 }}>
              <strong>Biophysical Role:</strong> {data.role}
            </div>
          )}
          {data.catalyticTriad && (
            <div style={{ marginTop: '6px', fontSize: '10.5px', color: '#92400E', background: 'rgba(255, 183, 3, 0.08)', padding: '5px 8px', borderRadius: '5px', borderLeft: '2px solid #FFB703' }}>
              <strong>Catalytic Triad:</strong> {data.catalyticTriad}
            </div>
          )}
        </div>

        {/* 5. Structural Biology Coordinates & PDB Badges */}
        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <span className="motor-insp-block-title">STRUCTURAL BIOLOGY DATA</span>
            <div className="motor-insp-pdb-tags" id="rnap-comp-pdb">
              {pdbBadges.map((badge, idx) => (
                <span key={idx} className="motor-pdb-badge">{badge}</span>
              ))}
              <span className="motor-pdb-badge" style={{ background: '#3A86FF', color: '#FFFFFF' }}>3.80 Å Cryo-EM</span>
            </div>
          </div>
        )}

        {/* 6. Focus in 3D Button */}
        <button
          className="motor-insp-focus-btn"
          id="rnap-btn-focus"
          onClick={onFocus}
          title="Center and zoom camera on this transcription component"
        >
          ⛶ Focus Component in 3D
        </button>
      </div>
    </aside>
  );
};
