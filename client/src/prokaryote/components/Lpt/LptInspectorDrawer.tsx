import React from 'react';
import type { LptComponentData } from '../../types/biology';

interface LptInspectorDrawerProps {
  data: LptComponentData | null;
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

export const LptInspectorDrawer: React.FC<LptInspectorDrawerProps> = ({
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
    <aside id="lpt-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="lpt-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'LPT BRIDGE COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="lpt-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="lpt-comp-dims">{data.dims || ''}</div>
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
          🗣️ [EHL-pee-tee trans-EHN-veh-lohp brij]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* 1. 5-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #0077B6', background: 'rgba(0, 119, 182, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#0077B6', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              🎬 5-Stage Explanatory Trace
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#0077B6' : '#E2DACD', color: storyStep > 0 ? '#FFFFFF' : '#4A5568' }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 5` : 'READY'}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the continuous biophysical path of processive lipopolysaccharide export across all three layers of the Gram-negative cell envelope:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. IM Substrate Extraction', desc: 'LptB2FG extracts Lipid A-core powered by ATP hydrolysis', col: '#06D6A0' },
              { num: 2, title: '2. Periplasmic Handover', desc: 'Substrate transfers to LptC coupler beta-jellyroll fold', col: '#2EC4B6' },
              { num: 3, title: '3. Processive Bridge Sliding', desc: 'Consecutive LptA oligomers push LPS in a PEZ dispenser groove', col: '#F77F00' },
              { num: 4, title: '4. Entry into LptD OM Barrel', desc: 'LPS enters the 26-stranded barrel lumen guided by LptE plug', col: '#0077B6' },
              { num: 5, title: '5. Outer Leaflet Deposition', desc: 'Lateral gate releases LPS to complete the permeability barrier', col: '#FFE066' }
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
                    background: isActive ? 'rgba(0, 119, 182, 0.16)' : 'rgba(255, 255, 255, 0.55)',
                    border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(226, 218, 205, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: isActive ? step.col : '#E2DACD',
                    color: isActive ? '#FFFFFF' : '#4A5568',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    {step.num}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', fontWeight: isActive ? 700 : 600, color: isActive ? step.col : '#2D3748', lineHeight: 1.2 }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#718096', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '8px', display: 'flex', gap: '6px' }}>
            {storyStep === 0 ? (
              <button
                onClick={onStartStoryTrace}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  background: '#0077B6',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                ▶ Walkthrough (5-Stage Trace)
              </button>
            ) : (
              <>
                <button
                  onClick={onStopStoryTrace}
                  style={{
                    flex: 1,
                    padding: '6px 8px',
                    background: '#EF4444',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  ⏹ Reset Trace
                </button>
                <button
                  onClick={() => onSelectStoryStep && onSelectStoryStep(Math.min(5, storyStep + 1))}
                  style={{
                    flex: 1,
                    padding: '6px 8px',
                    background: '#0077B6',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Next ❯
                </button>
              </>
            )}
          </div>
        </div>

        {/* 2. Biochemical Circuit & Flux I/O Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #10B981', background: 'rgba(16, 185, 129, 0.04)' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#047857', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            ⚡ Biochemical Circuit &amp; Flux I/O
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10.5px' }}>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>UPSTREAM BIOSYNTHESIS</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Cytoplasmic <strong>Raetz Pathway</strong> enzymes (LpxA–K) synthesizing hexa-acylated Lipid A-Kdo2 on the inner leaflet of the Inner Membrane, followed by MsbA flippase translocation to periplasmic leaflet.
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>MOLECULAR INPUTS</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Periplasmic Leaflet Lipid A-Core Oligosaccharide (1 LPS) + Cytoplasmic ATP (2 ATP molecules per power stroke).
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>MOLECULAR OUTPUTS</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Surface-integrated Lipopolysaccharide in Outer Membrane outer leaflet + 2 Cytoplasmic ADP + 2 Inorganic Phosphate (Pi).
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>DOWNSTREAM BARRIER SYSTEM</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Divalent cation-crosslinked (Mg²⁺/Ca²⁺) asymmetric outer membrane leaflet conferring high barrier resistance against hydrophobic antibiotics (rifampin, erythromycin, novobiocin) and bile detergents.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '2px', paddingTop: '4px', borderTop: '1px solid rgba(226, 218, 205, 0.5)' }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280' }}>ENERGY CURRENCY</span>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#10B981' }}>ATP Hydrolysis (ΔG° = -30.5 kJ/mol)</div>
              </div>
              <div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280' }}>TURNOVER RATE</span>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#0077B6' }}>~100–300 LPS/min</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Subunit Roles & Color Taxonomy */}
        <div className="motor-insp-block">
          <span className="motor-block-label">SUBUNIT ROLES &amp; COLOR TAXONOMY</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '10.5px' }}>
            {[
              { id: 'lpt_outer_membrane', name: 'Outer Asymmetric Membrane', desc: 'Outer bilayer of lipopolysaccharide and phospholipids', col: '#0077B6' },
              { id: 'lpt_peptidoglycan', name: 'Peptidoglycan Murein Sacculus', desc: 'Porous periplasmic peptidoglycan mesh maintaining cell shape', col: '#E76F51' },
              { id: 'lpt_inner_membrane', name: 'Inner Cytoplasmic Membrane', desc: 'Phospholipid bilayer housing the LptB2FG permease engine', col: '#06D6A0' },
              { id: 'lptb_dimer', name: 'LptB2 ABC ATPase Dimer', desc: 'Cytoplasmic motor driving substrate extraction via ATP cycles', col: '#FFB703' },
              { id: 'lptfg_permease', name: 'LptFG IM Permease Cavity', desc: 'Heterodimeric transmembrane pocket accommodating lipid A acyl chains', col: '#06D6A0' },
              { id: 'lptc_coupler', name: 'LptC Periplasmic Coupler', desc: 'Adaptor dock bridging inner membrane cavity to periplasmic bridge', col: '#2EC4B6' },
              { id: 'lpta_bridge', name: 'LptA β-Jellyroll Bridge Slide', desc: 'End-to-end oligomeric chute spanning periplasm & peptidoglycan mesh', col: '#F77F00' },
              { id: 'lptd_barrel', name: 'LptD 26-Stranded OM Barrel', desc: 'Transmembrane barrel with lateral gate delivering LPS to outer leaflet', col: '#0077B6' },
              { id: 'lpte_plug', name: 'LptE Lipoprotein Lumen Plug', desc: 'Plugs barrel pore to seal ions while coordinating LPS exit', col: '#9D4EDD' },
              { id: 'bound_lps', name: 'Bound Lipid A-Core Substrate', desc: 'Lipopolysaccharide substrate traversing the hydrophobic slide', col: '#FFE066' }
            ].map((sub) => (
              <div
                key={sub.id}
                onClick={() => onSelectPart && onSelectPart(sub.id)}
                style={{
                  borderLeft: `3px solid ${sub.col}`,
                  paddingLeft: '6px',
                  background: activeKey === sub.id ? 'rgba(0, 119, 182, 0.15)' : 'rgba(255, 255, 255, 0.45)',
                  borderRadius: '0 4px 4px 0',
                  padding: '3px 6px',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
              >
                <div style={{ fontWeight: 700, color: '#1E293B' }}>{sub.name}</div>
                <div style={{ color: '#64748B', fontSize: '9.5px' }}>{sub.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Description & Biophysical Details */}
        <div className="motor-insp-block">
          <span className="motor-block-label">FUNCTION &amp; MECHANISM</span>
          <p className="motor-insp-desc" id="lpt-comp-desc">
            {data.desc || 'Trans-envelope molecular bridge machine transporting lipopolysaccharide across the Gram-negative periplasm.'}
          </p>
        </div>

        {data.role && (
          <div className="motor-insp-block">
            <span className="motor-block-label">BIOPHYSICAL ROLE</span>
            <div style={{ fontSize: '11px', color: '#334155', lineHeight: 1.4 }}>{data.role}</div>
          </div>
        )}

        {data.stoichiometry && (
          <div className="motor-insp-block">
            <span className="motor-block-label">COMPLEX STOICHIOMETRY</span>
            <div style={{ fontSize: '11px', color: '#334155' }}>{data.stoichiometry}</div>
          </div>
        )}

        {/* 5. RCSB PDB Structure Badges */}
        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <span className="motor-block-label">EXPERIMENTAL STRUCTURES</span>
            <div className="motor-pdb-badges">
              {pdbBadges.map((badge, idx) => (
                <a
                  key={idx}
                  href={`https://www.rcsb.org/structure/${badge.split(' ')[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motor-pdb-link"
                >
                  {badge}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="motor-insp-footer">
        <button className="motor-footer-btn" onClick={onFocus}>
          Center &amp; Focus Subunit
        </button>
      </div>
    </aside>
  );
};
