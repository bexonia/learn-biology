import React from 'react';
import type { ATPSynthaseComponentData } from '../../types/biology';

interface ATPSynthaseInspectorDrawerProps {
  data: ATPSynthaseComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  onFocus: () => void;
  activeKey?: string;
  onSelectPart?: (key: string) => void;
  boyerState?: 'open' | 'loose' | 'tight';
  onSelectBoyerState?: (state: 'open' | 'loose' | 'tight') => void;
  storyStep?: number;
  onSelectStoryStep?: (step: number) => void;
  onStartStoryTrace?: () => void;
  onStopStoryTrace?: () => void;
}

export const ATPSynthaseInspectorDrawer: React.FC<ATPSynthaseInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  onFocus,
  activeKey,
  onSelectPart,
  boyerState = 'tight',
  onSelectBoyerState,
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
    <aside id="atp-synthase-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="atp-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'ATP SYNTHASE COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="atp-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="atp-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="atp-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud using neural TTS voice"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="atp-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
        <span style={{ fontSize: '11px', color: '#5C6E64', marginLeft: 'auto', fontStyle: 'italic' }}>
          🗣 [AY-tee-pee SIN-thace]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* Pedagogical 5-Stage Explanatory Catalytic Trace Card */}
        <div className="motor-insp-block" style={{
          background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.07) 0%, rgba(6, 214, 160, 0.07) 50%, rgba(255, 183, 3, 0.09) 100%)',
          border: '1px solid rgba(255, 119, 0, 0.35)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px',
          boxShadow: storyStep > 0 ? '0 0 12px rgba(255, 183, 3, 0.25)' : 'none'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#C85A32', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🎬</span> 5-STAGE EXPLANATORY TRACE
            </span>
            <span style={{
              fontSize: '9px',
              background: storyStep > 0 ? '#FF4D00' : '#E2DACD',
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
            Follow the sequential causal chain of energy transduction: proton flux → turbine &amp; drive shaft → substrate capture → ATP synthesis → continuous rotary operation:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Proton Motive Force Influx', desc: 'Periplasmic H⁺ enters stator half-channel', col: '#FF4D00', badge: 'H⁺' },
              { num: 2, title: '2. Turbine & Drive Shaft', desc: 'Asp61 neutralizes; c-ring & central γε shaft rotate', col: '#06D6A0', badge: 'γε' },
              { num: 3, title: '3. Substrate Capture (Loose)', desc: 'Asymmetric camshaft traps ADP + Pᵢ in β pocket', col: '#F28482', badge: 'ADP' },
              { num: 4, title: '4. ATP Synthesis & Energy Burst', desc: 'Tight compression forms ATP; Open releases fuel', col: '#FFE066', badge: 'ATP' },
              { num: 5, title: '5. Continuous Rotary Dynamo', desc: 'Holoenzyme operates at continuous steady-state', col: '#2A9D8F', badge: '360°' }
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
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: step.col,
                      color: step.num === 4 ? '#1E261C' : '#FFFFFF',
                      fontSize: '9px',
                      fontWeight: 800,
                      lineHeight: '20px',
                      textAlign: 'center'
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
                    <span style={{ fontSize: '10px', color: step.col, fontWeight: 800 }}>
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
                  background: '#C85A32',
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
        {/* Interactive Boyer 3-State Rotary Binding-Change Card */}
        <div className="motor-insp-block" style={{
          background: 'rgba(255, 183, 3, 0.08)',
          border: '1px solid rgba(255, 183, 3, 0.28)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#8A6D1C', letterSpacing: '0.5px' }}>
              BOYER THREE-STATE ROTARY CATALYSIS
            </span>
            <span style={{ fontSize: '9px', background: '#FFB703', color: '#1E261C', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
              PDB: 6OQR / 6RKW
            </span>
          </div>
          <p style={{ fontSize: '11px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.4 }}>
            Paul Boyer's Nobel Prize-winning binding-change mechanism: each of the 3 catalytic β pockets rotates through 3 sequential conformational states as the asymmetric γ camshaft spins:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            <button
              className={`motor-mode-btn ${boyerState === 'open' ? 'active' : ''}`}
              style={{
                borderLeft: '3px solid #E9C46A',
                padding: '6px 4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: boyerState === 'open' ? 'rgba(233, 196, 106, 0.28)' : '#FFFFFF',
                cursor: 'pointer'
              }}
              onClick={() => {
                onSelectBoyerState?.('open');
                onSelectPart?.('f1_beta');
              }}
              title="Target Open (O) State: ATP release & fresh ADP+Pi binding"
            >
              <span style={{ fontWeight: 800, fontSize: '11px', color: '#B38600' }}>🟡 Open (O)</span>
              <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>ATP Release</span>
              <span style={{ fontSize: '8px', color: '#888' }}>Low Affinity</span>
            </button>

            <button
              className={`motor-mode-btn ${boyerState === 'loose' ? 'active' : ''}`}
              style={{
                borderLeft: '3px solid #52B788',
                padding: '6px 4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: boyerState === 'loose' ? 'rgba(82, 183, 136, 0.28)' : '#FFFFFF',
                cursor: 'pointer'
              }}
              onClick={() => {
                onSelectBoyerState?.('loose');
                onSelectPart?.('f1_beta');
              }}
              title="Target Loose (L) State: Substrates trapped in active pocket"
            >
              <span style={{ fontWeight: 800, fontSize: '11px', color: '#2D6A4F' }}>🟢 Loose (L)</span>
              <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Trap ADP+Pi</span>
              <span style={{ fontSize: '8px', color: '#888' }}>Med Affinity</span>
            </button>

            <button
              className={`motor-mode-btn ${boyerState === 'tight' ? 'active' : ''}`}
              style={{
                borderLeft: '3px solid #FFB703',
                padding: '6px 4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: boyerState === 'tight' ? 'rgba(255, 183, 3, 0.28)' : '#FFFFFF',
                cursor: 'pointer'
              }}
              onClick={() => {
                onSelectBoyerState?.('tight');
                onSelectPart?.('f1_beta');
              }}
              title="Target Tight (T) State: Mechanical compression forms ATP"
            >
              <span style={{ fontWeight: 800, fontSize: '11px', color: '#D97706' }}>🟠 Tight (T)</span>
              <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Synthesize</span>
              <span style={{ fontSize: '8px', color: '#888' }}>High Affinity</span>
            </button>
          </div>

          <div style={{ marginTop: '8px', textAlign: 'center' }}>
            <button
              className={`motor-mode-btn ${activeKey === 'f1_beta' ? 'active' : ''}`}
              style={{
                width: '100%',
                fontSize: '10.5px',
                padding: '5px',
                background: '#FFFFFF',
                borderColor: '#FFB703',
                color: '#8A6D1C',
                fontWeight: 700
              }}
              onClick={() => onSelectPart?.('f1_beta')}
            >
              ✦ Focus β Catalytic Subunits in 3D
            </button>
          </div>
        </div>

        {/* Biochemical I/O Circuit & Cellular Energy Flow Card */}
        <div className="motor-insp-block" style={{
          background: 'rgba(6, 214, 160, 0.06)',
          border: '1px solid rgba(6, 214, 160, 0.28)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#0B6B50', letterSpacing: '0.5px' }}>
              ⚡ BIOCHEMICAL I/O &amp; CELLULAR FLUX NETWORK
            </span>
            <span style={{ fontSize: '9px', background: '#06D6A0', color: '#1E261C', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
              Δp Coupled
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11px', marginBottom: '10px' }}>
            <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: '6px', border: '1px solid #E2DACD' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#8A2B1C', marginBottom: '4px' }}>
                MOLECULAR INPUTS:
              </div>
              <div style={{ fontWeight: 600, color: '#FF4D00' }}>• 10 H⁺ (Periplasm)</div>
              <div style={{ fontSize: '9.5px', color: '#64748B', marginLeft: '8px', marginBottom: '4px' }}>
                From respiratory ETC complexes
              </div>
              <div style={{ fontWeight: 600, color: '#E76F51' }}>• 3 ADP + 3 Pᵢ (Cytoplasm)</div>
              <div style={{ fontSize: '9.5px', color: '#64748B', marginLeft: '8px' }}>
                Recycled cellular byproducts
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: '6px', border: '1px solid #E2DACD' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#1A5B3E', marginBottom: '4px' }}>
                MOLECULAR OUTPUTS:
              </div>
              <div style={{ fontWeight: 600, color: '#D97706' }}>• 3 ATP (To Cytoplasm)</div>
              <div style={{ fontSize: '9.5px', color: '#64748B', marginLeft: '8px', marginBottom: '4px' }}>
                Powers translation &amp; motility
              </div>
              <div style={{ fontWeight: 600, color: '#0B6B50' }}>• 10 H⁺ + 3 H₂O (Cytoplasm)</div>
              <div style={{ fontSize: '9.5px', color: '#64748B', marginLeft: '8px' }}>
                Dissipated into bulk cytosol
              </div>
            </div>
          </div>

          {/* Deep-dive: Upstream Proton Origins & Downstream ADP/ATP Circulation */}
          <div style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2DACD', padding: '8px 10px', fontSize: '10.5px', lineHeight: 1.45, color: '#334155' }}>
            <div style={{ marginBottom: '6px' }}>
              <strong style={{ color: '#C85A32' }}>🔴 Where do the Protons (H⁺) come from?</strong><br />
              Generated by <strong>Cellular Respiration (Electron Transport Chain)</strong>:
              Complex I (NADH dehydrogenase) and Cytochrome <em>bo</em>₃ terminal oxidase oxidize food/NADH and pump protons from the cytoplasm across the inner membrane into the periplasm. This creates the steep electrochemical gradient (Proton Motive Force, Δ<em>p</em> ≈ -140 mV).
            </div>
            <div style={{ marginBottom: '6px' }}>
              <strong style={{ color: '#D97706' }}>🟠 Where does the ADP + Pᵢ come from?</strong><br />
              They are the "discharged batteries" of the cell. Whenever cellular machines perform endergonic work—like <strong>70S Ribosome translation</strong> (4 ATP/GTP per peptide bond), flagellar motor rotation, and ABC nutrient transporters—they hydrolyze ATP into ADP + Pᵢ. These substrates diffuse back through the cytoplasm to the F₁ head.
            </div>
            <div>
              <strong style={{ color: '#1A5B3E' }}>🟢 Where is the synthesized ATP expelled to?</strong><br />
              ATP is ejected directly into the <strong>aqueous cytoplasm</strong> as the catalytic β pocket transitions from Tight to Open. Because ATP has a high diffusion constant (<em>D</em> ≈ 300 µm²/s), each new ATP traverses the entire bacterium in milliseconds to fuel protein synthesis, cell division, and motility!
            </div>
          </div>
        </div>

        {/* Macromolecular Subunit Composition */}
        {data.proteins && (
          <div className="motor-insp-block">
            <span className="motor-insp-label">SUBUNIT COMPOSITION &amp; POLYPEPTIDE CHAINS</span>
            <p className="motor-insp-text" id="atp-comp-proteins">{data.proteins}</p>
          </div>
        )}

        {/* Biological Mechanism Narrative */}
        {data.desc && (
          <div className="motor-insp-block">
            <span className="motor-insp-label">BIOPHYSICAL MECHANISM</span>
            <p className="motor-insp-text" id="atp-comp-desc" style={{ lineHeight: 1.55 }}>{data.desc}</p>
          </div>
        )}

        {/* PDB Reference Badges */}
        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <span className="motor-insp-label">RCSB PDB ATOMIC STRUCTURES</span>
            <div className="motor-pdb-badges">
              {pdbBadges.map((pdbId) => (
                <a
                  key={pdbId}
                  className="motor-pdb-badge"
                  href={`https://www.rcsb.org/structure/${pdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Open RCSB PDB entry for ${pdbId}`}
                >
                  <span className="motor-pdb-tag">PDB</span>
                  <span className="motor-pdb-id">{pdbId}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Focus Button */}
        <div style={{ marginTop: '14px' }}>
          <button
            className="motor-mode-btn"
            style={{
              width: '100%',
              padding: '9px 12px',
              fontSize: '12px',
              fontWeight: 800,
              background: '#FFFFFF',
              borderColor: '#C87550',
              color: '#8A2B1C',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            onClick={onFocus}
          >
            ⛶ Focus Component in 3D Viewport
          </button>
        </div>
      </div>
    </aside>
  );
};
