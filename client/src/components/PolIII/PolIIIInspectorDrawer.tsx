import React from 'react';
import type { PolIIIComponentData } from '../../types/biology';

interface PolIIIInspectorDrawerProps {
  data: PolIIIComponentData | null;
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

export const PolIIIInspectorDrawer: React.FC<PolIIIInspectorDrawerProps> = ({
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
    <aside id="pol-iii-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="pol-iii-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'DNA REPLISOME COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="pol-iii-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="pol-iii-comp-dims">{data.dims || ''}</div>
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
          🗣️ [DEE-ehn-AY puh-LIM-er-ays THREE REHP-lih-zohm]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* 1. 6-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #06D6A0', background: 'rgba(6, 214, 160, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#06D6A0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              🎬 6-Stage Explanatory Trace
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#06D6A0' : '#E2DACD', color: storyStep > 0 ? '#000000' : '#4A5568' }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 6` : 'READY'}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of high-speed chromosomal duplication, sliding clamp processivity, and proofreading:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Replication Fork Unwinding by DnaB', desc: 'Hexameric helicase unwinds parental duplex at 1,000 bp/s', col: '#06D6A0' },
              { num: 2, title: '2. β₂ Sliding Clamp Loading', desc: 'Toroid ring clamps around DNA, increasing processivity 10,000x', col: '#FFB703' },
              { num: 3, title: '3. Leading-Strand Continuous Synthesis', desc: 'Subunit α catalyzes forward polymerization at 1,000 nt/s', col: '#3A86FF' },
              { num: 4, title: '4. Lagging-Strand Trombone Loop', desc: 'Template loops out to synthesize 1–2 kb Okazaki fragments', col: '#9D4EDD' },
              { num: 5, title: '5. Proofreading Exonuclease Editing', desc: 'Subunit ε (DnaQ) excises mismatches, boosting fidelity to < 10⁻⁸', col: '#E63946' },
              { num: 6, title: '6. Steady-State Chromosome Duplication', desc: 'Entire 4.64 Mbp genome duplicated faithfully in 40 minutes', col: '#00F5D4' }
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
                    background: isActive ? 'rgba(6, 214, 160, 0.16)' : 'rgba(255, 255, 255, 0.55)',
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
                style={{ width: '100%', background: '#06D6A0', color: '#000000', fontWeight: 700, fontSize: '11px', padding: '6px 10px' }}
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

        {/* 2. Replication Multi-State Card */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">REPLICATION CYCLE STATES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: '4px' }}>
            {[
              { id: 'helicase_unwinding', label: 'Fork Unwind', step: 1, col: '#06D6A0' },
              { id: 'clamp_loading', label: 'Clamp Ring', step: 2, col: '#FFB703' },
              { id: 'leading_synthesis', label: 'Leading Strand', step: 3, col: '#3A86FF' },
              { id: 'lagging_trombone', label: 'Trombone Loop', step: 4, col: '#9D4EDD' },
              { id: 'proofreading_editing', label: 'Proofreading', step: 5, col: '#E63946' },
              { id: 'processive_duplication', label: 'Chromosome', step: 6, col: '#00F5D4' }
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
                    background: isActive ? 'rgba(6, 214, 160, 0.12)' : '#FFFFFF',
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

        {/* 3. Subunit Breakdown Grid */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">REPLISOME SUBUNIT DECOMPOSITION</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginTop: '6px' }}>
            {[
              { key: 'pol_iii_alpha', name: 'Subunit α (130 kDa)', role: 'DnaE polymerase palm & fingers', col: '#3A86FF' },
              { key: 'pol_iii_beta_clamp', name: 'Subunit β₂ (81 kDa)', role: 'DnaN sliding toroid clamp', col: '#FFB703' },
              { key: 'pol_iii_epsilon', name: 'Subunit ε (28 kDa)', role: 'DnaQ 3′→5′ proofreading exonuclease', col: '#E63946' },
              { key: 'pol_iii_tau', name: 'Subunit τ (71 kDa)', role: 'DnaX replisome organizer stalk', col: '#9D4EDD' },
              { key: 'pol_iii_dnab_helicase', name: 'DnaB (300 kDa)', role: 'Hexameric fork unwinding motor', col: '#06D6A0' },
              { key: 'pol_iii_dna_duplex', name: 'Duplex (25 bp)', role: 'Primer/template substrate', col: '#00F5D4' }
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
                    background: isSelected ? 'rgba(6, 214, 160, 0.12)' : 'rgba(255, 255, 255, 0.65)',
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

        {/* 4. Biological Role & Catalytic Palm Mechanism */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">BIOLOGICAL ROLE &amp; REPLICATION FIDELITY</span>
          <p className="motor-insp-desc" id="pol-iii-comp-desc">
            {data.desc}
          </p>
          {data.role && (
            <div style={{ marginTop: '6px', fontSize: '10.5px', color: '#334155', fontStyle: 'italic', lineHeight: 1.4 }}>
              <strong>Biophysical Role:</strong> {data.role}
            </div>
          )}
          {data.catalyticPalm && (
            <div style={{ marginTop: '6px', fontSize: '10.5px', color: '#065F46', background: 'rgba(6, 214, 160, 0.08)', padding: '5px 8px', borderRadius: '5px', borderLeft: '2px solid #06D6A0' }}>
              <strong>Active Palm Center:</strong> {data.catalyticPalm}
            </div>
          )}
        </div>

        {/* 5. Structural Biology Data & PDB Badges */}
        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <span className="motor-insp-block-title">STRUCTURAL BIOLOGY DATA</span>
            <div className="motor-insp-pdb-tags" id="pol-iii-comp-pdb">
              {pdbBadges.map((badge, idx) => (
                <span key={idx} className="motor-pdb-badge">{badge}</span>
              ))}
              <span className="motor-pdb-badge" style={{ background: '#06D6A0', color: '#000000' }}>8.00 Å Cryo-EM</span>
            </div>
          </div>
        )}

        {/* 6. Focus in 3D Button */}
        <button
          className="motor-insp-focus-btn"
          id="pol-iii-btn-focus"
          onClick={onFocus}
          title="Center and zoom camera on this replisome component"
        >
          ⛶ Focus Component in 3D
        </button>
      </div>
    </aside>
  );
};
