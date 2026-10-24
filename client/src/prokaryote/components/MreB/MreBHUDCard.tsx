import React from 'react';

interface MreBHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  isA22Inhibited: boolean;
  onToggleA22: () => void;
  isATPActive: boolean;
  onToggleATP: () => void;
  filamentVelocity: number;
  onChangeVelocity: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const MreBHUDCard: React.FC<MreBHUDCardProps> = ({
  isPaused,
  onTogglePause,
  isA22Inhibited,
  onToggleA22,
  isATPActive,
  onToggleATP,
  filamentVelocity,
  onChangeVelocity,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  const effectiveSpeed = (isPaused || isA22Inhibited || !isATPActive) ? 0 : filamentVelocity;

  return (
    <div className="motor-hud-overlay" id="mreb-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Inhibition Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">CYTOSKELETAL VELOCITY &amp; A22 INHIBITOR</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume MreB Processive Motion"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isA22Inhibited ? 'active' : ''}`}
              onClick={onToggleA22}
              title="Toggle A22 Chemical Inhibitor (Depolymerizes MreB Rails & Induces Spherical Rounding)"
              style={{
                background: isA22Inhibited ? '#E63946' : '#06D6A0',
                color: isA22Inhibited ? '#FFFFFF' : '#000000',
                fontWeight: 700
              }}
            >
              {isA22Inhibited ? '☣️ A22 Spherical' : '🛡️ Normal Rod Rails'}
            </button>
            <button
              className={`motor-mode-btn ${isATPActive ? 'active' : ''}`}
              onClick={onToggleATP}
              title="Toggle ATP Hydrolysis Energy State"
              style={{
                background: isATPActive ? '#00F5D4' : '#5C6E64',
                color: '#000000',
                fontWeight: 700
              }}
            >
              {isATPActive ? '⚡ ATP Active' : '🛑 ADP Depleted'}
            </button>
          </div>
        </div>

        {/* Processive Velocity Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">PROCESSIVE TRACK VELOCITY:</span>
            <span className="motor-slider-val" style={{ color: '#3A86FF', fontWeight: 800 }}>
              {effectiveSpeed === 0
                ? isA22Inhibited
                  ? 'DEPOLYMERIZED (0 nm/s)'
                  : 'PAUSED (0 nm/s)'
                : `${effectiveSpeed.toFixed(1)} nm/s (Rod elongation)`}
            </span>
          </div>
          <input
            type="range"
            min="5.0"
            max="50.0"
            step="1.0"
            value={filamentVelocity}
            onChange={(e) => onChangeVelocity(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Slow (5 nm/s)</span>
            <span>Nominal (25 nm/s)</span>
            <span>Fast (50 nm/s)</span>
          </div>
        </div>

        {/* Exploded Assembly Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">EXPLODED ASSEMBLY:</span>
            <span className="motor-slider-val">
              {explodedProgress === 0
                ? 'ASSEMBLED (0%)'
                : explodedProgress === 1
                ? 'FULLY DISSOCIATED (100%)'
                : `${Math.round(explodedProgress * 100)}%`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={explodedProgress}
            onChange={(e) => onChangeExploded(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Assembled</span>
            <span>Dissociated (v_dissoc)</span>
          </div>
        </div>

        {/* Quick Focus Subunit Chips */}
        <div className="motor-card-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span className="motor-section-title" style={{ margin: 0 }}>QUICK INSPECT PIECES:</span>
            {onToggleLabels && (
              <button
                className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
                onClick={onToggleLabels}
                style={{ padding: '2px 8px', fontSize: '10px' }}
                title="Toggle 3D Leader Lines"
              >
                {isLabelsVisible ? '🏷️ Leaders On' : '🏷️ Leaders Off'}
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {[
              { id: 'mreb_protofilaments', label: 'MreB Rails', col: '#3A86FF' },
              { id: 'mreb_atp_pockets', label: 'ATP Cleft', col: '#FFB703' },
              { id: 'mreb_membrane_anchor', label: 'Amphipathic', col: '#00F5D4' },
              { id: 'mreb_inner_membrane', label: 'IM Bilayer', col: '#06D6A0' },
              { id: 'mreb_rodz_adaptor', label: 'RodZ Adaptor', col: '#E63946' },
              { id: 'mreb_roda_glycosylase', label: 'RodA Flippase', col: '#9D4EDD' },
              { id: 'mreb_pbp2_transpeptidase', label: 'PBP2 MecA', col: '#F77F00' },
              { id: 'mreb_a22_pocket', label: 'A22 Trap', col: '#E63946' }
            ].map(chip => (
              <button
                key={chip.id}
                onClick={() => onFocusComponent && onFocusComponent(chip.id)}
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: `1px solid ${chip.col}`,
                  color: '#1E293B',
                  fontWeight: 600,
                  borderRadius: '12px',
                  padding: '3px 7px',
                  fontSize: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: chip.col }} />
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Biophysical I/O readout */}
        <div style={{ marginTop: '4px', padding: '6px 8px', background: 'rgba(26, 43, 37, 0.06)', border: '1px solid rgba(26, 43, 37, 0.12)', borderRadius: '6px', fontSize: '10px', color: '#2D3E35' }}>
          <div><strong>UPSTREAM:</strong> ATP Hydrolysis &amp; Negative Membrane Curvature Sensing</div>
          <div style={{ marginTop: '2px' }}><strong>COUPLING:</strong> MreB ⇌ RodZ ⇌ RodA-PBP2 (v ≈ 25 nm/s)</div>
          <div style={{ marginTop: '2px' }}><strong>DOWNSTREAM:</strong> Lateral Peptidoglycan Wall Elongation → Rod Cell Morphology</div>
        </div>
      </div>
    </div>
  );
};
