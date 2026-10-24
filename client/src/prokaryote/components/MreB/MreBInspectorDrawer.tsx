import React from 'react';
import type { MreBComponentData } from '../../types/biology';

interface MreBInspectorDrawerProps {
  data: MreBComponentData | null;
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

export const MreBInspectorDrawer: React.FC<MreBInspectorDrawerProps> = ({
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
    <aside id="mreb-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="mreb-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'MREB CYTOSKELETON')}
        </span>
        <h2 className="motor-insp-title" id="mreb-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="mreb-comp-dims">{data.dims || ''}</div>
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
          🗣️ [EHM-ree-BEE AK-tin RAYLZ]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* 1. 6-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #00F5D4', background: 'rgba(0, 245, 212, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#00F5D4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              🎬 6-Stage Explanatory Trace
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#00F5D4' : '#E2DACD', color: storyStep > 0 ? '#000000' : '#4A5568' }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 6` : 'READY'}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of MreB double-rail assembly, membrane insertion, RodZ coupling, and lateral wall elongation:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Rail Architecture & Rod Shape Maintenance', desc: 'Sub-membrane antiparallel double rails orient perpendicular to cell axis', col: '#3A86FF' },
              { num: 2, title: '2. ATP-Dependent Protofilament Doublet Assembly', desc: 'ATP binding in cleft drives 5.1 nm subunit repeat filament nucleation', col: '#FFB703' },
              { num: 3, title: '3. Membrane Anchoring via Amphipathic Helices', desc: 'N-terminal amphipathic helix inserts into inner leaflet, sensing curvature', col: '#00F5D4' },
              { num: 4, title: '4. Trans-Envelope Coupling through the RodZ Adaptor', desc: 'Bitopic RodZ links MreB IA domain to periplasmic synthases across membrane', col: '#E63946' },
              { num: 5, title: '5. Processive Propulsion of the RodA-PBP2 Synthase', desc: 'SEDS transglycosylase moves processively at 25 nm/s driven by synthesis', col: '#9D4EDD' },
              { num: 6, title: '6. Lateral Peptidoglycan Elongation & Cylindrical Sacculus', desc: 'Lipid II incorporation and peptide cross-linking maintain rigid rod shape', col: '#06D6A0' }
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
          <p className="motor-insp-text" id="mreb-comp-desc">{data.desc || 'No description available.'}</p>
        </div>

        {/* 3. Catalytic Mechanism & Antibiotic Sensitivity */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">BIOCHEMICAL MECHANISM &amp; INHIBITOR TARGET</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>ATP TURNOVER</span>
              <span style={{ fontSize: '10.5px', color: '#FFB703', fontWeight: 800 }}>{data.atpTurnover || '4.2 ATP/min'}</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>TRACK VELOCITY</span>
              <span style={{ fontSize: '10.5px', color: '#3A86FF', fontWeight: 800 }}>{data.filamentVelocity || '25 nm/s'}</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>MREB INHIBITOR</span>
              <span style={{ fontSize: '10.5px', color: '#E63946', fontWeight: 800 }}>A22 / MP265 (Spherical)</span>
            </div>
            <div style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
              <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>PBP2 TARGET</span>
              <span style={{ fontSize: '10.5px', color: '#F77F00', fontWeight: 800 }}>Mecillinam (Amdinocillin)</span>
            </div>
          </div>
        </div>

        {/* 4. Subunit Decomposition Selector */}
        <div className="motor-insp-block">
          <span className="motor-insp-block-title">SUBUNIT ARCHITECTURE</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px', marginTop: '6px' }}>
            {[
              { key: 'mreb_protofilaments', name: 'MreB Antiparallel Double Rails', role: 'Actin homolog & elongation track', col: '#3A86FF' },
              { key: 'mreb_atp_pockets', name: 'ATP Nucleotide Cleft & Mg²⁺', role: 'Catalytic cleft & domain closure gate', col: '#FFB703' },
              { key: 'mreb_membrane_anchor', name: 'N-terminal Amphipathic Helices', role: 'Direct lipid bilayer insertion & curvature', col: '#00F5D4' },
              { key: 'mreb_inner_membrane', name: 'Curved Inner Membrane Bilayer', role: 'Lipid matrix presenting negative curvature', col: '#06D6A0' },
              { key: 'mreb_rodz_adaptor', name: 'RodZ Bitopic Adaptor Complex', role: 'Trans-membrane mechanical alignment', col: '#E63946' },
              { key: 'mreb_roda_glycosylase', name: 'RodA SEDS Lipid II Flippase', role: 'Processive glycan chain transglycosylase', col: '#9D4EDD' },
              { key: 'mreb_pbp2_transpeptidase', name: 'PBP2 Penicillin-Binding Protein', role: 'Murein stem peptide transpeptidase', col: '#F77F00' },
              { key: 'mreb_a22_pocket', name: 'A22 Inhibitor Binding Pocket', role: 'Depolymerization & spherical rounding', col: '#E63946' }
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
              <span style={{ fontSize: '10px', color: '#718096' }}>PDB: 1JCG / 4CZM / 2WUS / 5LP5</span>
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
