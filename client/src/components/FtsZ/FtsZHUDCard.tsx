import React from 'react';

interface FtsZHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  isPC190723Inhibited: boolean;
  onTogglePC190723: () => void;
  isGTPActive: boolean;
  onToggleGTP: () => void;
  septumConstriction: number;
  onChangeConstriction: (val: number) => void;
  treadmillingSpeed: number;
  onChangeTreadmillingSpeed: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const FtsZHUDCard: React.FC<FtsZHUDCardProps> = ({
  isPaused,
  onTogglePause,
  isPC190723Inhibited,
  onTogglePC190723,
  isGTPActive,
  onToggleGTP,
  septumConstriction,
  onChangeConstriction,
  treadmillingSpeed,
  onChangeTreadmillingSpeed,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  const effectiveSpeed = (isPaused || isPC190723Inhibited || !isGTPActive) ? 0 : treadmillingSpeed;
  const currentDiameter = Math.round(800 * (1.0 - septumConstriction * 0.92));

  return (
    <div className="motor-hud-overlay" id="ftsz-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Inhibition Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">DIVISOME KINETICS &amp; PC190723 INHIBITOR</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Divisome Treadmilling"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isPC190723Inhibited ? 'active' : ''}`}
              onClick={onTogglePC190723}
              title="Toggle PC190723 Antibiotic Inhibitor (Locks Straight GTP Protofilaments & Halts Treadmilling)"
              style={{
                background: isPC190723Inhibited ? '#E63946' : '#06D6A0',
                color: isPC190723Inhibited ? '#FFFFFF' : '#000000',
                fontWeight: 700
              }}
            >
              {isPC190723Inhibited ? '☣️ PC190723 Frozen' : '🛡️ Normal Cycling'}
            </button>
            <button
              className={`motor-mode-btn ${isGTPActive ? 'active' : ''}`}
              onClick={onToggleGTP}
              title="Toggle GTP Nucleotide Hydrolysis"
              style={{
                background: isGTPActive ? '#00F5D4' : '#5C6E64',
                color: '#000000',
                fontWeight: 700
              }}
            >
              {isGTPActive ? '⚡ GTP Active' : '🛑 GDP Depleted'}
            </button>
          </div>
        </div>

        {/* Cytokinetic Septum Constriction Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">SEPTAL CONSTRICTION:</span>
            <span className="motor-slider-val" style={{ color: '#00F5D4', fontWeight: 800 }}>
              {septumConstriction === 0
                ? 'INITIAL DIAMETER (800 nm)'
                : septumConstriction === 1
                ? 'SCISSION COMPLETED (< 50 nm)'
                : `${Math.round(septumConstriction * 100)}% (Ø ~ ${currentDiameter} nm)`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={septumConstriction}
            onChange={(e) => onChangeConstriction(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Open (800 nm)</span>
            <span>Invagination (400 nm)</span>
            <span>Scission (0 nm)</span>
          </div>
        </div>

        {/* Treadmilling Velocity Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">TREADMILLING VELOCITY:</span>
            <span className="motor-slider-val" style={{ color: '#3A86FF', fontWeight: 800 }}>
              {effectiveSpeed === 0
                ? isPC190723Inhibited
                  ? 'INHIBITED (0 nm/s)'
                  : 'PAUSED (0 nm/s)'
                : `${effectiveSpeed.toFixed(1)} nm/s (GTPase active)`}
            </span>
          </div>
          <input
            type="range"
            min="5.0"
            max="60.0"
            step="1.0"
            value={treadmillingSpeed}
            onChange={(e) => onChangeTreadmillingSpeed(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Slow (5 nm/s)</span>
            <span>Nominal (28 nm/s)</span>
            <span>Fast (60 nm/s)</span>
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
              { id: 'ftsz_protofilaments', label: 'FtsZ Ring', col: '#3A86FF' },
              { id: 'ftsz_ftsa_anchor', label: 'FtsA Tether', col: '#FFB703' },
              { id: 'ftsz_zipa_anchor', label: 'ZipA Anchor', col: '#E63946' },
              { id: 'ftsz_inner_membrane', label: 'IM Furrow', col: '#06D6A0' },
              { id: 'ftsz_gtp_pockets', label: 'GTP Pocket', col: '#00F5D4' },
              { id: 'ftsz_septal_wall', label: 'Septal PG', col: '#E76F51' },
              { id: 'ftsz_ftswi_synthase', label: 'FtsWI Synthase', col: '#9D4EDD' },
              { id: 'ftsz_mincde_barrier', label: 'MinCDE Barrier', col: '#0077B6' }
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
          <div><strong>UPSTREAM:</strong> MinCDE Polar Oscillation &amp; SlmA Nucleoid Occlusion</div>
          <div style={{ marginTop: '2px' }}><strong>TREADMILLING:</strong> FtsZ + GTP ⇌ [FtsZ]ₙ + GDP + Pi (v ≈ 28 nm/s)</div>
          <div style={{ marginTop: '2px' }}><strong>DOWNSTREAM:</strong> FtsW-FtsI (PBP3) Septal Wall Synthesis → Cell Scission</div>
        </div>
      </div>
    </div>
  );
};
