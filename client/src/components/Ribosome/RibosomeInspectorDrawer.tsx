import React from 'react';
import type { RibosomeComponentData } from '../../types/biology';

interface RibosomeInspectorDrawerProps {
  data: RibosomeComponentData | null;
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

export const RibosomeInspectorDrawer: React.FC<RibosomeInspectorDrawerProps> = ({
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

  const nameLower = (data.name || '').toLowerCase();
  const badgeLower = (data.badge || '').toLowerCase();
  const isTrna = nameLower.includes('trna') || badgeLower.includes('trna') || badgeLower.includes('adaptor') || badgeLower.includes('inlet') || badgeLower.includes('donor') || badgeLower.includes('outlet');

  return (
    <aside id="ribosome-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="ribosome-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'RIBOZYME COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="ribosome-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="ribosome-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="ribosome-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="ribosome-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
        <span style={{ fontSize: '11px', color: '#5C6E64', marginLeft: 'auto', fontStyle: 'italic' }}>
          🗣 [RY-boh-zohm / TRY-pah-tite]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* Pedagogical 5-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{
          background: 'linear-gradient(135deg, rgba(233, 196, 106, 0.08) 0%, rgba(255, 183, 3, 0.08) 50%, rgba(158, 42, 91, 0.09) 100%)',
          border: '1px solid rgba(233, 196, 106, 0.35)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px',
          boxShadow: storyStep > 0 ? '0 0 12px rgba(255, 183, 3, 0.25)' : 'none'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#B38600', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🎬</span> 6-STAGE EXPLANATORY TRACE
            </span>
            <span style={{
              fontSize: '9px',
              background: storyStep > 0 ? '#E9C46A' : '#E2DACD',
              color: storyStep > 0 ? '#1A2B25' : '#4A5568',
              padding: '2px 7px',
              borderRadius: '10px',
              fontWeight: 800,
              letterSpacing: '0.4px'
            }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 6` : 'READY'}
            </span>
          </div>

          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of peptide elongation: macro overview → codon docking → proofreading → peptidyl transfer → translocation ratchet → E-site discharge:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Ribozyme Factory Overview & Translation Role', desc: 'Nature\'s 2.5 MDa ribonucleoprotein engine translating mRNA into proteins', col: '#2A9D8F', badge: '2.5MDa' },
              { num: 2, title: '2. A-Site Codon Recognition', desc: 'Ternary complex enters; A1492/A1493 flip out', col: '#E9C46A', badge: 'A-SITE' },
              { num: 3, title: '3. Proofreading & Accommodation', desc: 'EF-Tu hydrolyzes GTP; aminoacyl stem swings into PTC', col: '#00F5D4', badge: 'EF-Tu' },
              { num: 4, title: '4. Peptidyl Transferase Catalysis', desc: 'α-amino nucleophile attacks ester; peptide bond forms', col: '#FFB703', badge: 'PTC' },
              { num: 5, title: '5. EF-G Power Stroke Translocation', desc: '30S ratchets against 50S; mRNA advances 1 triplet', col: '#7209B7', badge: 'EF-G' },
              { num: 6, title: '6. E-Site Discharge & Continuous Polysome', desc: 'Empty tRNA expelled; continuous synthesis at 20 aa/s', col: '#9E2A5B', badge: '70S' }
            ].map(step => {
              const isActive = storyStep === step.num;
              return (
                <button
                  key={step.num}
                  className={`motor-mode-btn ${isActive ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '5px 8px',
                    borderRadius: '5px',
                    border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(0,0,0,0.08)',
                    background: isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.65)',
                    boxShadow: isActive ? `0 0 8px ${step.col}40` : 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onClick={() => onSelectStoryStep?.(step.num)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      display: 'inline-block',
                      width: '28px',
                      height: '20px',
                      borderRadius: '4px',
                      background: step.col,
                      color: step.num === 1 || step.num === 3 ? '#1A2B25' : '#FFFFFF',
                      fontSize: '8px',
                      fontWeight: 800,
                      lineHeight: '20px',
                      textAlign: 'center',
                      flexShrink: 0
                    }}>
                      {step.badge}
                    </span>
                    <div>
                      <div style={{ fontSize: '10.5px', fontWeight: isActive ? 800 : 700, color: isActive ? '#1E261C' : '#334155' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '9px', color: '#64748B' }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <span style={{ fontSize: '10px', color: step.col, fontWeight: 800, flexShrink: 0 }}>
                      ▶ ACTIVE
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
            {storyStep === 0 ? (
              <button
                className="motor-mode-btn"
                style={{
                  flex: 1,
                  background: '#B38600',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '11px',
                  padding: '6px 8px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px'
                }}
                onClick={onStartStoryTrace}
              >
                <span>🎬</span> Start Explanatory Trace
              </button>
            ) : (
              <button
                className="motor-mode-btn"
                style={{
                  flex: 1,
                  background: '#9E1B46',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '11px',
                  padding: '6px 8px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px'
                }}
                onClick={onStopStoryTrace}
              >
                <span>⏹</span> End Trace &amp; Run Continuous
              </button>
            )}
          </div>
        </div>

        {/* Tripartite Three-Chamber tRNA Target Card */}
        {isTrna && (
          <div className="motor-insp-block" style={{
            background: 'rgba(233, 196, 106, 0.08)',
            border: '1px solid rgba(233, 196, 106, 0.28)',
            borderRadius: '8px',
            padding: '10px 12px',
            marginBottom: '14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#8A6D1C', letterSpacing: '0.5px' }}>
                THREE-CHAMBER tRNA PATHWAY
              </span>
              <span style={{ fontSize: '9px', background: '#E9C46A', color: '#1A2B25', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
                PDB: 7K00
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.4 }}>
              Click any chamber below to target and focus that specific tRNA in the 3D model:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              <button
                className={`motor-mode-btn ${activeKey === 'trna_a_site' ? 'active' : ''}`}
                style={{
                  borderLeft: '3px solid #E9C46A',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: activeKey === 'trna_a_site' ? 'rgba(233, 196, 106, 0.28)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectPart?.('trna_a_site')}
                title="Target A-site Aminoacyl-tRNA (Arrival)"
              >
                <span style={{ fontWeight: 800, fontSize: '11px', color: '#B38600' }}>🟡 A-Site</span>
                <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Arrival</span>
                <span style={{ fontSize: '8.5px', color: '#888' }}>Val-tRNA (Y)</span>
              </button>

              <button
                className={`motor-mode-btn ${activeKey === 'trna_p_site' ? 'active' : ''}`}
                style={{
                  borderLeft: '3px solid #52B788',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: activeKey === 'trna_p_site' ? 'rgba(82, 183, 136, 0.28)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectPart?.('trna_p_site')}
                title="Target P-site Peptidyl-tRNA (Donor)"
              >
                <span style={{ fontWeight: 800, fontSize: '11px', color: '#2D6A4F' }}>🟢 P-Site</span>
                <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Donor</span>
                <span style={{ fontSize: '8.5px', color: '#888' }}>fMet-tRNA (Z)</span>
              </button>

              <button
                className={`motor-mode-btn ${activeKey === 'trna_e_site' ? 'active' : ''}`}
                style={{
                  borderLeft: '3px solid #E07A5F',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: activeKey === 'trna_e_site' ? 'rgba(224, 122, 95, 0.28)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectPart?.('trna_e_site')}
                title="Target E-site Deacylated tRNA (Exit)"
              >
                <span style={{ fontWeight: 800, fontSize: '11px', color: '#C85A32' }}>🟠 E-Site</span>
                <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Exit</span>
                <span style={{ fontSize: '8.5px', color: '#888' }}>Uncharged (5)</span>
              </button>
            </div>
          </div>
        )}

        {data.proteins && (
          <div className="motor-insp-block">
            <h4 className="block-title">MACROMOLECULAR COMPOSITION (RNA &amp; PROTEIN)</h4>
            <p className="block-text" id="ribosome-comp-proteins">{data.proteins}</p>
          </div>
        )}

        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <h4 className="block-title">CRYO-EM &amp; X-RAY PDB STRUCTURES</h4>
            <div className="pdb-badges" id="ribosome-comp-pdb">
              {pdbBadges.map((pdbId, idx) => (
                <span key={idx} className="pdb-chip">{pdbId}</span>
              ))}
            </div>
          </div>
        )}

        {data.desc && (
          <div className="motor-insp-block">
            <h4 className="block-title">CATALYTIC FUNCTION &amp; BIOLOGICAL MECHANISM</h4>
            <p className="block-text" id="ribosome-comp-desc">{data.desc}</p>
          </div>
        )}

        <div style={{ marginTop: '16px' }}>
          <button className="focus-btn" style={{ width: '100%' }} onClick={onFocus}>
            ⛶ Focus Component in 3D
          </button>
        </div>
      </div>
    </aside>
  );
};
