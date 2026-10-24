import React from 'react';
import type { MotorComponentData } from '../../types/biology';

interface MotorInspectorDrawerProps {
  data: MotorComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  storyStep?: number;
  onSelectStoryStep?: (step: number) => void;
  onStartStoryTrace?: () => void;
  onStopStoryTrace?: () => void;
}

export const MotorInspectorDrawer: React.FC<MotorInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  storyStep = 0,
  onSelectStoryStep,
  onStartStoryTrace,
  onStopStoryTrace
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.split(',').map((p) => p.trim())
    : [];

  return (
    <aside id="motor-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="motor-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="motor-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="motor-comp-dims">{data.dimensions || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="motor-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="motor-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
        <span style={{ fontSize: '11px', color: '#5C6E64', marginLeft: 'auto', fontStyle: 'italic' }}>
          🗣 [fluh-JEL-er MOH-ter]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* Pedagogical 5-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{
          background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.07) 0%, rgba(6, 214, 160, 0.07) 50%, rgba(0, 119, 182, 0.09) 100%)',
          border: '1px solid rgba(255, 119, 0, 0.35)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px',
          boxShadow: storyStep > 0 ? '0 0 12px rgba(255, 77, 0, 0.25)' : 'none'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#C85A32', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🎬</span> 6-STAGE EXPLANATORY TRACE
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
              {storyStep > 0 ? `STAGE ${storyStep} OF 6` : 'READY'}
            </span>
          </div>

          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of torque generation: macro overview → proton flux → electrostatic gear → axial transmission → universal joint → propeller thrust:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Nanomotor Overview & Envelope Architecture', desc: 'Nature\'s 45 nm rotary motor; spins filament at 1,000 RPM for swimming', col: '#0077B6', badge: '45nm' },
              { num: 2, title: '2. Proton Motive Force Influx', desc: 'Periplasmic H⁺ enters MotA/B stator channels', col: '#FF4D00', badge: 'MotAB' },
              { num: 3, title: '3. Electrostatic Gear Engagement', desc: 'MotA loops push FliG; C-ring switch spins', col: '#E2A824', badge: 'FliG' },
              { num: 4, title: '4. Axial Drive Shaft & Bushings', desc: 'Torque passes through murein & outer membrane', col: '#06D6A0', badge: 'ROD' },
              { num: 5, title: '5. Universal Hook Joint & Torque Bend', desc: 'FlgE flexes to bend rotation around 90° angle', col: '#7209B7', badge: 'FlgE' },
              { num: 6, title: '6. Archimedean Screw Propulsion', desc: 'Helical filament spins at 1,000 RPM pushing medium', col: '#0077B6', badge: 'FliC' }
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
                      color: '#FFFFFF',
                      fontSize: '8.5px',
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

        {data.proteins && (
          <div className="motor-insp-block">
            <h4 className="block-title">PROTEIN COMPOSITION &amp; STOICHIOMETRY</h4>
            <p className="block-text" id="motor-comp-proteins">{data.proteins}</p>
          </div>
        )}

        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <h4 className="block-title">PDB STRUCTURE REFERENCES</h4>
            <div className="pdb-badges" id="motor-comp-pdb">
              {pdbBadges.map((pdbId, idx) => (
                <span key={idx} className="pdb-chip">PDB {pdbId}</span>
              ))}
            </div>
          </div>
        )}

        {data.role && (
          <div className="motor-insp-block">
            <h4 className="block-title">BIOPHYSICAL ROLE &amp; MECHANISM</h4>
            <p className="block-text" id="motor-comp-desc">{data.role}</p>
          </div>
        )}
      </div>
    </aside>
  );
};
