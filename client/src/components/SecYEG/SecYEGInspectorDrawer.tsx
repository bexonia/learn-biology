import React from 'react';
import type { SecYEGComponentData } from '../../types/biology';

interface SecYEGInspectorDrawerProps {
  data: SecYEGComponentData | null;
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

export const SecYEGInspectorDrawer: React.FC<SecYEGInspectorDrawerProps> = ({
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
    <aside id="secyeg-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="secyeg-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'SECYEG COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="secyeg-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="secyeg-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="secyeg-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud using neural TTS voice"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="secyeg-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
        <span style={{ fontSize: '11px', color: '#5C6E64', marginLeft: 'auto', fontStyle: 'italic' }}>
          🗣 [sek-WHY-ee-jee trans-LOH-kohn]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* Pedagogical 5-Stage Explanatory Catalytic Trace Card */}
        <div className="motor-insp-block" style={{
          background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.08) 0%, rgba(0, 245, 212, 0.08) 50%, rgba(157, 78, 221, 0.09) 100%)',
          border: '1px solid rgba(58, 134, 255, 0.35)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px',
          boxShadow: storyStep > 0 ? '0 0 12px rgba(0, 245, 212, 0.25)' : 'none'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#3A86FF', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🎬</span> 5-STAGE EXPLANATORY TRACE
            </span>
            <span style={{
              fontSize: '9px',
              background: storyStep > 0 ? '#3A86FF' : '#E2DACD',
              color: storyStep > 0 ? '#FFFFFF' : '#4A5568',
              padding: '2px 7px',
              borderRadius: '10px',
              fontWeight: 800,
              letterSpacing: '0.4px'
            }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 5` : 'READY'}
            </span>
          </div>

          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of bacterial protein translocation: signal peptide docking → SecA power stroke → pore gasket dilation → lateral gate partitioning → processive secretion:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Signal Peptide Recognition', desc: 'Hydrophobic N-terminal signal sequence binds external SecY groove', col: '#FF4D00', badge: 'SIG' },
              { num: 2, title: '2. SecA Motor Power Stroke', desc: 'ATP hydrolysis drives two-helix finger down into pore like a piston', col: '#9D4EDD', badge: 'SecA' },
              { num: 3, title: '3. Pore Expansion & Plug Displacement', desc: 'Insertion displaces plug helix; 6-Ile pore gasket forms seal around peptide', col: '#06D6A0', badge: 'PORE' },
              { num: 4, title: '4. Lateral Gate Bilayer Partition', desc: 'TM2b/3 & TM7/8 part open by 1.4 nm; TM segments partition into lipid bilayer', col: '#00F5D4', badge: 'GATE' },
              { num: 5, title: '5. Continuous Processive Secretion', desc: 'Processive ATP cycles thread 45 aa/sec into periplasm to SurA chaperone', col: '#3A86FF', badge: 'FLUX' }
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
                  <span style={{ fontSize: '8px', padding: '1px 5px', borderRadius: '4px', background: 'rgba(0,0,0,0.06)', color: '#4A5568', fontWeight: 700, fontFamily: 'monospace' }}>
                    {step.badge}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
            <button
              onClick={storyStep > 0 ? onStopStoryTrace : onStartStoryTrace}
              style={{
                flex: 1,
                padding: '5px 10px',
                fontSize: '10.5px',
                fontWeight: 700,
                borderRadius: '6px',
                border: 'none',
                background: storyStep > 0 ? '#E53E3E' : '#3A86FF',
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              {storyStep > 0 ? '⏹ Reset Trace' : '▶ Walkthrough (5-Stage Trace)'}
            </button>
            {storyStep > 0 && onSelectStoryStep && (
              <button
                onClick={() => onSelectStoryStep(storyStep < 5 ? storyStep + 1 : 1)}
                style={{
                  padding: '5px 10px',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #3A86FF',
                  background: 'rgba(58, 134, 255, 0.1)',
                  color: '#3A86FF',
                  cursor: 'pointer'
                }}
              >
                Next ❯
              </button>
            )}
          </div>
        </div>

        {/* Biochemical I/O Circuit Card */}
        <div className="motor-insp-block" style={{
          background: 'rgba(248, 250, 252, 0.8)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#0F172A', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
            <span>⚡</span> BIOCHEMICAL CIRCUIT &amp; FLUX I/O
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
            <div>
              <span style={{ color: '#64748B', fontWeight: 600, display: 'block', fontSize: '9.5px' }}>UPSTREAM SOURCE</span>
              <span style={{ color: '#1E293B', fontWeight: 500 }}>
                70S Translating Ribosome (<code>7K00</code>), SecB chaperone holding nascent unfolded preproteins.
              </span>
            </div>

            <div>
              <span style={{ color: '#64748B', fontWeight: 600, display: 'block', fontSize: '9.5px' }}>MOLECULAR INPUTS</span>
              <span style={{ color: '#1E293B', fontWeight: 600 }}>
                Unfolded Preprotein (with N-terminal signal peptide) + 1 ATP per 20–25 aa + Δp electrical pull.
              </span>
            </div>

            <div>
              <span style={{ color: '#64748B', fontWeight: 600, display: 'block', fontSize: '9.5px' }}>MOLECULAR OUTPUTS</span>
              <span style={{ color: '#1E293B', fontWeight: 600 }}>
                Translocated Preprotein in Periplasm (to SurA) OR Transmembrane α-helix integrated into Bilayer + ADP + Pᵢ.
              </span>
            </div>

            <div>
              <span style={{ color: '#64748B', fontWeight: 600, display: 'block', fontSize: '9.5px' }}>DOWNSTREAM CONSUMERS</span>
              <span style={{ color: '#1E293B', fontWeight: 500 }}>
                Periplasmic Chaperones (SurA <code>1M5Y</code>, Skp, DegP) transferring clients to BAM Complex (<code>5D0O</code>).
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px', paddingTop: '6px', borderTop: '1px solid #E2E8F0' }}>
              <div>
                <span style={{ color: '#64748B', fontSize: '9px', fontWeight: 600 }}>ENERGY CURRENCY</span>
                <span style={{ color: '#9D4EDD', fontWeight: 700, display: 'block' }}>ATP Hydrolysis + Δp</span>
              </div>
              <div>
                <span style={{ color: '#64748B', fontSize: '9px', fontWeight: 600 }}>TRANSLOCATION RATE</span>
                <span style={{ color: '#06D6A0', fontWeight: 700, display: 'block' }}>40–60 aa/sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subunit Structural Roles & Color Taxonomy */}
        <div className="motor-insp-block">
          <span className="motor-block-title">SUBUNIT ROLES &amp; COLOR TAXONOMY</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
            {[
              { id: 'secy_pore', name: 'SecY Hourglass Pore Core', color: '#3A86FF', desc: '10 TM helices, 6-isoleucine pore gasket, and luminal plug helix' },
              { id: 'lateral_gate', name: 'Dynamic Lateral Gate', color: '#00F5D4', desc: 'TM2b/3 & TM7/8 parting helices opening into the lipid bilayer' },
              { id: 'sece_clamp', name: 'SecE Amphipathic Clamp', color: '#FFB703', desc: 'V-shaped structural brace preventing dissociation of SecY halves' },
              { id: 'secg_escort', name: 'SecG Escort Subunit', color: '#06D6A0', desc: 'Inverted topology helper accelerating turnover under low PMF' },
              { id: 'seca_motor', name: 'SecA Cytosolic Motor', color: '#9D4EDD', desc: '204 kDa ATPase motor with two-helix finger power-stroke piston' },
              { id: 'translocating_peptide', name: 'Translocating Preprotein', color: '#FFE066', desc: 'Hairpin substrate threading through pore into periplasm' }
            ].map((sub) => (
              <div
                key={sub.id}
                onClick={() => onSelectPart && onSelectPart(sub.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 8px',
                  borderRadius: '5px',
                  background: activeKey === sub.id ? 'rgba(58, 134, 255, 0.12)' : 'rgba(0,0,0,0.02)',
                  borderLeft: `3px solid ${sub.color}`,
                  cursor: 'pointer'
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: sub.color, display: 'block' }}>
                    {sub.name}
                  </span>
                  <span style={{ fontSize: '9.5px', color: '#64748B' }}>
                    {sub.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Biological Description */}
        <div className="motor-insp-block">
          <span className="motor-block-title">BIOLOGICAL ROLE &amp; MECHANISM</span>
          <p className="motor-insp-desc" id="secyeg-comp-desc">{data.desc}</p>
          {data.role && (
            <p className="motor-insp-desc" style={{ marginTop: '6px' }}>
              <strong>Physiological Function:</strong> {data.role}
            </p>
          )}
        </div>

        {/* Macromolecular Structure Details */}
        <div className="motor-insp-block">
          <span className="motor-block-title">POLYPEPTIDE CHAINS &amp; EXPERIMENTAL PDB</span>
          <div style={{ fontSize: '11px', color: '#4A5568', lineHeight: 1.4 }}>
            {data.proteins && (
              <div style={{ marginBottom: '4px' }}>
                <strong>Polypeptides:</strong> {data.proteins}
              </div>
            )}
            {data.stoichiometry && (
              <div style={{ marginBottom: '4px' }}>
                <strong>Stoichiometry:</strong> {data.stoichiometry}
              </div>
            )}
            {data.atpConsumption && (
              <div>
                <strong>Energetics:</strong> {data.atpConsumption}
              </div>
            )}
          </div>

          {/* RCSB PDB Badges with External Links */}
          {pdbBadges.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
              {pdbBadges.map((pdbId) => (
                <a
                  key={pdbId}
                  href={`https://www.rcsb.org/structure/${pdbId}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#2563EB',
                    background: '#EFF6FF',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid #BFDBFE',
                    textDecoration: 'none'
                  }}
                  title={`View ${pdbId} experimental coordinates on RCSB PDB`}
                >
                  PDB: {pdbId} ↗
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Camera Focus Action */}
        <div className="motor-insp-actions" style={{ marginTop: '14px' }}>
          <button className="motor-action-btn primary" onClick={onFocus} style={{ width: '100%' }}>
            🎯 Center &amp; Frame Subunit in Viewport
          </button>
        </div>
      </div>
    </aside>
  );
};
