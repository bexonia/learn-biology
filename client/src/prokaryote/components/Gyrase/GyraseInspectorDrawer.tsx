import React from 'react';
import type { GyraseComponentData } from '../../types/biology';

interface GyraseInspectorDrawerProps {
  data: GyraseComponentData | null;
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

export const GyraseInspectorDrawer: React.FC<GyraseInspectorDrawerProps> = ({
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
    <aside id="gyrase-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="gyrase-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'DNA GYRASE COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="gyrase-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="gyrase-comp-dims">{data.dims || ''}</div>
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
          🗣️ [DEE-ehn-AY JY-rays toh-poh-eye-SAHM-er-ays]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* 1. 5-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #00F5D4', background: 'rgba(0, 245, 212, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#00F5D4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              🎬 5-Stage Explanatory Trace
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#00F5D4' : '#E2DACD', color: storyStep > 0 ? '#000000' : '#4A5568' }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 5` : 'READY'}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of three-gate strand passage, catalytic Tyr122 cleavage, and negative supercoiling:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Chiral DNA Wrapping around CTD Pinwheels', desc: 'Positive 120° wrap around GyrA CTDs directs negative supercoiling', col: '#0077B6' },
              { num: 2, title: '2. T-Segment Capture & ATP N-Gate Clamping', desc: 'ATP binding drives GyrB dimerization, trapping T-segment in chamber', col: '#FFB703' },
              { num: 3, title: '3. Tyr122 Catalytic Double-Strand Cleavage', desc: 'Dual Tyr122 residues form 5′-phosphotyrosyl bonds, opening G-gate', col: '#E63946' },
              { num: 4, title: '4. T-Segment Strand Passage through G-Gate', desc: 'T-duplex propelled downward through transient break into lower cavity', col: '#06D6A0' },
              { num: 5, title: '5. G-Gate Religation, C-Gate Exit & Reset', desc: 'DNA religated, C-gate opens, 2 ATP hydrolyzed: ΔLk = -2 achieved', col: '#00F5D4' }
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
                    background: isActive ? 'rgba(0, 245, 212, 0.16)' : 'rgba(255, 255, 255, 0.55)',
                    border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(226, 218, 205, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: isActive ? step.col : '#CBD5E1',
                    color: isActive ? '#000000' : '#475569',
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
                    <div style={{ fontSize: '10.5px', fontWeight: 700, color: isActive ? '#0A2540' : '#2D3748' }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '9px', color: '#718096', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
            <button
              onClick={onStartStoryTrace}
              style={{
                flex: 1,
                padding: '5px 10px',
                fontSize: '10px',
                fontWeight: 700,
                borderRadius: '4px',
                border: 'none',
                background: '#00F5D4',
                color: '#000000',
                cursor: 'pointer'
              }}
            >
              ▶ Play Walkthrough
            </button>
            {storyStep > 0 && (
              <button
                onClick={onStopStoryTrace}
                style={{
                  padding: '5px 10px',
                  fontSize: '10px',
                  fontWeight: 700,
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  color: '#4A5568',
                  cursor: 'pointer'
                }}
              >
                ⏹ Stop
              </button>
            )}
          </div>
        </div>

        {/* 2. Primary Role & Function Description */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">ROLE &amp; FUNCTION</span>
          <p className="motor-insp-text" id="gyrase-comp-desc">{data.desc || 'No description available.'}</p>
        </div>

        {/* 3. Catalytic Mechanism & Antibiotic Sensitivity */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">BIOCHEMICAL MECHANISM &amp; QUINOLONE TARGET</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>CATALYTIC RESIDUE</span>
              <span style={{ fontSize: '10.5px', color: '#FFB703', fontWeight: 800 }}>{data.catalyticTyrosine || 'Tyr122 (5′-P)'}</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>TURNOVER RATE</span>
              <span style={{ fontSize: '10.5px', color: '#06D6A0', fontWeight: 800 }}>{data.supercoilingRate || '1.5 cyc/s (ΔLk = -3/s)'}</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>ANTIBIOTIC TARGET</span>
              <span style={{ fontSize: '10.5px', color: '#E63946', fontWeight: 800 }}>Ciprofloxacin / Levofloxacin</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>ENERGY COUPLING</span>
              <span style={{ fontSize: '10.5px', color: '#00F5D4', fontWeight: 800 }}>2 ATP Hydrolyzed / Cycle</span>
            </div>
          </div>
        </div>

        {/* 4. Subunit Decomposition Selector */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">SUBUNIT ARCHITECTURE</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px', marginTop: '6px' }}>
            {[
              { key: 'gyrase_gyra_dimer', name: 'GyrA Cleavage Dimer (59 kDa Core)', role: 'DNA binding & Tyr122 transesterification', col: '#3A86FF' },
              { key: 'gyrase_gyrb_dimer', name: 'GyrB ATPase Clamp (90 kDa Dimer)', role: 'Bergerat ATP fold & N-gate closure', col: '#FFB703' },
              { key: 'gyrase_g_segment', name: 'G-Segment (Gate DNA Duplex)', role: '24-bp target cleaved with 4-bp overhang', col: '#7209B7' },
              { key: 'gyrase_t_segment', name: 'T-Segment (Transported DNA)', role: '20-bp duplex passed through break (ΔLk = -2)', col: '#06D6A0' },
              { key: 'gyrase_tyr122_active', name: 'Tyr122 Catalytic Center & Mg²⁺', role: 'Conserves phosphodiester energy without ATP', col: '#FFB703' },
              { key: 'gyrase_cipro_pocket', name: 'Ciprofloxacin Binding Pocket', role: 'Traps cleaved complex, stalling replisomes', col: '#E63946' },
              { key: 'gyrase_atp_sites', name: 'Dual Bergerat ATPase Pockets', role: 'Couples 2 ATP hydrolysis to N-gate cycle', col: '#00F5D4' },
              { key: 'gyrase_ctd_pinwheels', name: 'GyrA CTD β-Pinwheels', role: 'Chiral positive wrapping for negative coiling', col: '#0077B6' }
            ].map(sub => {
              const isSelected = activeKey === sub.key;
              return (
                <button
                  key={sub.key}
                  onClick={() => onSelectPart && onSelectPart(sub.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    border: isSelected ? `1.5px solid ${sub.col}` : '1px solid #E2DACD',
                    background: isSelected ? 'rgba(0, 245, 212, 0.12)' : '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B2A20' }}>
                      <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: sub.col, marginRight: '6px' }} />
                      {sub.name}
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#5C6E64', marginLeft: '14px' }}>{sub.role}</div>
                  </div>
                  {isSelected && <span style={{ fontSize: '12px', color: '#00F5D4' }}>✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Structural Biology Data & PDB Coordinates */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">STRUCTURAL BIOLOGY &amp; PDB SOURCE</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
            {pdbBadges.length > 0 ? (
              pdbBadges.map((pdbId) => (
                <span
                  key={pdbId}
                  style={{
                    background: '#1A365D',
                    color: '#90CDF4',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '3px',
                    fontFamily: 'monospace'
                  }}
                >
                  PDB: {pdbId}
                </span>
              ))
            ) : (
              <span style={{ fontSize: '10px', color: '#718096' }}>PDB: 1AB4 / 2XCT / 6F86</span>
            )}
          </div>
        </div>

        {/* 6. Camera Focus Button */}
        <div className="motor-insp-block" style={{ marginBottom: 0 }}>
          <button
            className="motor-insp-focus-btn"
            onClick={onFocus}
            style={{ width: '100%', padding: '8px', fontSize: '11px', fontWeight: 700 }}
          >
            🎯 Focus 3D View on Selected Subunit
          </button>
        </div>
      </div>
    </aside>
  );
};
