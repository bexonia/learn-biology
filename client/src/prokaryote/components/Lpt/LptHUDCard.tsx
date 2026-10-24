import React from 'react';

interface LptHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  isAtpActive: boolean;
  onToggleAtp: () => void;
  exportSpeed: number;
  onChangeExportSpeed: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const LptHUDCard: React.FC<LptHUDCardProps> = ({
  isPaused,
  onTogglePause,
  isAtpActive,
  onToggleAtp,
  exportSpeed,
  onChangeExportSpeed,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  const effectiveSpeed = (isPaused || !isAtpActive) ? 0 : exportSpeed;
  const lpsRatePerMin = Math.round(effectiveSpeed * 150);
  const atpConsumptionPerMin = Math.round(effectiveSpeed * 300);

  return (
    <div className="motor-hud-overlay" id="lpt-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Energy Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">TRANS-ENVELOPE EXPORT &amp; ABC ATPASE</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume LPS Trans-Envelope Translocation"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isAtpActive ? 'active' : ''}`}
              onClick={onToggleAtp}
              title="Toggle Cytoplasmic LptB2 ATP Hydrolysis"
              style={{
                background: isAtpActive ? '#FFB703' : '#E2DACD',
                color: isAtpActive ? '#000000' : '#4A5568',
                fontWeight: 700
              }}
            >
              {isAtpActive ? '⚡ ATP Active' : '🚫 ATP Inhibited'}
            </button>
          </div>
        </div>

        {/* Processive Export Flux Speed */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">LPS EXPORT FLUX:</span>
            <span className="motor-slider-val" style={{ color: '#0077B6', fontWeight: 800 }}>
              {isPaused || !isAtpActive ? 'HALTED' : `${exportSpeed.toFixed(1)}x (~${lpsRatePerMin} LPS/min)`}
            </span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={exportSpeed}
            onChange={(e) => onChangeExportSpeed(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Slow (0.2x)</span>
            <span>Physiological (1.0x)</span>
            <span>Surge (2.5x)</span>
          </div>
        </div>

        {/* Exploded Assembly Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">EXPLODED TRANSLOCATION BRIDGE:</span>
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
            <span>Intact Complex</span>
            <span>Envelope Vector Shift</span>
            <span>Dissociated</span>
          </div>
        </div>

        {/* Subunit Focus Quick Chips */}
        <div className="motor-card-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span className="motor-section-title" style={{ margin: 0 }}>QUICK INSPECT PIECE</span>
            {onToggleLabels && (
              <button
                onClick={onToggleLabels}
                style={{
                  fontSize: '9.5px',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  background: isLabelsVisible ? '#0077B6' : '#FFFFFF',
                  color: isLabelsVisible ? '#FFFFFF' : '#475569',
                  cursor: 'pointer'
                }}
              >
                {isLabelsVisible ? 'Hide 3D Labels' : 'Show 3D Labels'}
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {[
              { id: 'lptb_dimer', label: 'LptB2 (ATP)', col: '#FFB703' },
              { id: 'lptfg_permease', label: 'LptFG (IM)', col: '#06D6A0' },
              { id: 'lptc_coupler', label: 'LptC (Coupler)', col: '#2EC4B6' },
              { id: 'lpta_bridge', label: 'LptA (Chute)', col: '#F77F00' },
              { id: 'lptd_barrel', label: 'LptD (OM Barrel)', col: '#0077B6' },
              { id: 'lpte_plug', label: 'LptE (Plug)', col: '#9D4EDD' },
              { id: 'bound_lps', label: 'LPS Substrate', col: '#FFE066' }
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => onFocusComponent && onFocusComponent(chip.id)}
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '3px 7px',
                  borderRadius: '12px',
                  border: `1px solid ${chip.col}`,
                  background: 'rgba(255, 255, 255, 0.85)',
                  color: '#1E293B',
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

        {/* Energetics & Stoichiometry Readout */}
        <div className="motor-card-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '10px' }}>
            <div style={{ background: 'rgba(255, 183, 3, 0.08)', padding: '5px 8px', borderRadius: '6px', borderLeft: '2px solid #FFB703' }}>
              <div style={{ color: '#78350F', fontWeight: 600 }}>ATP CONSUMPTION</div>
              <div style={{ fontWeight: 800, color: '#92400E', fontSize: '11px' }}>
                {isPaused || !isAtpActive ? '0 ATP/min' : `~${atpConsumptionPerMin} ATP/min`}
              </div>
            </div>
            <div style={{ background: 'rgba(0, 119, 182, 0.08)', padding: '5px 8px', borderRadius: '6px', borderLeft: '2px solid #0077B6' }}>
              <div style={{ color: '#0369A1', fontWeight: 600 }}>EXPORT MECHANISM</div>
              <div style={{ fontWeight: 800, color: '#075985', fontSize: '11px' }}>
                Processive PEZ-Dispenser
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
