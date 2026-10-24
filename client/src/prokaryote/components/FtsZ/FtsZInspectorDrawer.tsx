import React from 'react';
import type { FtsZComponentData } from '../../types/biology';

interface FtsZInspectorDrawerProps {
  data: FtsZComponentData | null;
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

export const FtsZInspectorDrawer: React.FC<FtsZInspectorDrawerProps> = ({
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
    <aside id="ftsz-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="ftsz-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'DIVISOME COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="ftsz-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="ftsz-comp-dims">{data.dims || ''}</div>
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
          🗣️ [DIH-vih-zohm EHF-tee-ehs-ZEE ZEE-ring]
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
            Follow the sequential causal chain of midcell Z-ring assembly, GTP treadmilling, and cytokinetic furrow scission:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Spatial Midcell Positioning by MinCDE & SlmA', desc: 'Oscillatory MinCDE & nucleoid occlusion position ring at midcell', col: '#0077B6' },
              { num: 2, title: '2. GTP-Dependent Protofilament Polymerization', desc: 'FtsZ binds GTP to assemble head-to-tail protofilaments', col: '#00F5D4' },
              { num: 3, title: '3. Membrane Tethering by FtsA & ZipA', desc: 'Actin-homolog FtsA & bitopic ZipA anchor ring to inner membrane', col: '#FFB703' },
              { num: 4, title: '4. Protofilament Treadmilling Drives FtsWI Synthase', desc: 'Directional treadmilling at 28 nm/s propels cell-wall synthesis', col: '#9D4EDD' },
              { num: 5, title: '5. Cytokinetic Furrow Constriction & Scission', desc: 'Coordinated wall synthesis & membrane bending achieve cell scission', col: '#06D6A0' }
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
          <p className="motor-insp-text" id="ftsz-comp-desc">{data.desc || 'No description available.'}</p>
        </div>

        {/* 3. Catalytic Mechanism & Antibiotic Sensitivity */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">BIOCHEMICAL MECHANISM &amp; DRUG TARGET</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>GTP TURNOVER</span>
              <span style={{ fontSize: '10.5px', color: '#00F5D4', fontWeight: 800 }}>{data.gtpTurnover || '8.4 GTP/min'}</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>TREADMILLING SPEED</span>
              <span style={{ fontSize: '10.5px', color: '#3A86FF', fontWeight: 800 }}>{data.treadmillingSpeed || '28 nm/s'}</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>FTSZ INHIBITOR</span>
              <span style={{ fontSize: '10.5px', color: '#E63946', fontWeight: 800 }}>PC190723 / TXA128</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>WALL SYNTHASE TARGET</span>
              <span style={{ fontSize: '10.5px', color: '#9D4EDD', fontWeight: 800 }}>Aztreonam / Cephalexin (FtsI)</span>
            </div>
          </div>
        </div>

        {/* 4. Subunit Decomposition Selector */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">SUBUNIT ARCHITECTURE</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px', marginTop: '6px' }}>
            {[
              { key: 'ftsz_protofilaments', name: 'FtsZ Protofilament Ring Lattice', role: 'Tubulin homolog & treadmilling track', col: '#3A86FF' },
              { key: 'ftsz_ftsa_anchor', name: 'FtsA Actin Membrane Tether', role: 'C-terminal amphipathic helix & ATPase', col: '#FFB703' },
              { key: 'ftsz_zipa_anchor', name: 'ZipA Bitopic Membrane Anchor', role: 'Transmembrane helix & C-terminal globular fold', col: '#E63946' },
              { key: 'ftsz_inner_membrane', name: 'Cytokinetic Inner Membrane Furrow', role: 'Invaginating bilayer undergoing scission', col: '#06D6A0' },
              { key: 'ftsz_gtp_pockets', name: 'GTPase Catalytic Pockets', role: 'Loop T7 synergy interface & curved shift', col: '#00F5D4' },
              { key: 'ftsz_septal_wall', name: 'Septal Peptidoglycan Wall', role: 'Inward-growing murein sacculus cross-wall', col: '#E76F51' },
              { key: 'ftsz_ftswi_synthase', name: 'FtsW-FtsI (PBP3) Synthase Complex', role: 'SEDS transglycosylase & transpeptidase', col: '#9D4EDD' },
              { key: 'ftsz_mincde_barrier', name: 'MinCDE Spatial Regulatory Barrier', role: 'Polar oscillation preventing minicell division', col: '#0077B6' }
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
              <span style={{ fontSize: '10px', color: '#718096' }}>PDB: 1FSZ / 2R6R / 4A2A / 6PL5</span>
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
