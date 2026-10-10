import React from 'react';

interface SecYEGHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  atpRate: number;
  onChangeAtpRate: (val: number) => void;
  isAzideInhibited: boolean;
  onToggleAzide: () => void;
  lateralGateOpening: number;
  onChangeLateralGate: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const SecYEGHUDCard: React.FC<SecYEGHUDCardProps> = ({
  isPaused,
  onTogglePause,
  atpRate,
  onChangeAtpRate,
  isAzideInhibited,
  onToggleAzide,
  lateralGateOpening,
  onChangeLateralGate,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  // Compute physiological translocation rates
  const effectiveRate = isAzideInhibited || isPaused ? 0 : atpRate;
  const aaPerSec = Math.round(effectiveRate * 45); // 45 aa/sec nominal rate
  const atpConsumedPerSec = Math.round(aaPerSec / 20); // ~1 ATP per 20 aa

  return (
    <div className="motor-hud-overlay" id="secyeg-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Translocation Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">SECA ATPASE &amp; TRANSLOCATION FLUX</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume SecA Piston & Peptide Threading"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isAzideInhibited ? 'active' : ''}`}
              onClick={onToggleAzide}
              style={{
                background: isAzideInhibited ? 'rgba(239, 68, 68, 0.25)' : undefined,
                color: isAzideInhibited ? '#B91C1C' : undefined,
                borderColor: isAzideInhibited ? '#DC2626' : undefined
              }}
              title="Sodium Azide (NaN3) - Potent inhibitor of SecA ATPase catalytic turnover"
            >
              {isAzideInhibited ? '🚫 Azide Bound (Blocked)' : '🧪 + NaN₃ Inhibitor'}
            </button>
          </div>
        </div>

        {/* ATP Translocation Rate Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-label">
            <span>ATP HYDROLYSIS RATE:</span>
            <span className="motor-slider-val">
              {isAzideInhibited ? '0.0 ATP/s (INHIBITED)' : `${(atpRate * 2.2).toFixed(1)} ATP/s (${aaPerSec} aa/s)`}
            </span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={atpRate}
            disabled={isAzideInhibited}
            onChange={(e) => onChangeAtpRate(parseFloat(e.target.value))}
            className="motor-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', marginTop: '2px' }}>
            <span>Basal (10 aa/s)</span>
            <span>Nominal (45 aa/s)</span>
            <span>Max (110 aa/s)</span>
          </div>
        </div>

        {/* Dynamic Lateral Gate Opening Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-label">
            <span>DYNAMIC LATERAL GATE:</span>
            <span className="motor-slider-val" style={{ color: '#00F5D4' }}>
              {lateralGateOpening > 80 ? 'OPEN (Partitioning)' : lateralGateOpening > 20 ? 'PARTIAL (Sampling)' : 'CLOSED (Sealed)'} ({Math.round(lateralGateOpening)}%)
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={lateralGateOpening}
            onChange={(e) => onChangeLateralGate(parseFloat(e.target.value))}
            className="motor-slider"
            style={{ accentColor: '#00F5D4' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', marginTop: '2px' }}>
            <span>Closed (Ion Seal)</span>
            <span>Sampling (TM Signal)</span>
            <span>Parted (1.4 nm Bilayer Gap)</span>
          </div>
        </div>

        {/* Exploded Assembly Dissociation */}
        <div className="motor-card-section">
          <div className="motor-slider-label">
            <span>EXPLODED ASSEMBLY:</span>
            <span className="motor-slider-val">
              {explodedProgress === 0 ? 'Assembled Holoenzyme' : `${Math.round(explodedProgress)}% Dissociated`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={explodedProgress}
            onChange={(e) => onChangeExploded(parseFloat(e.target.value))}
            className="motor-slider"
          />
        </div>

        {/* Live Translocation Metrics Dashboard */}
        <div className="motor-card-section" style={{ background: 'rgba(2, 6, 23, 0.4)', padding: '8px', borderRadius: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11px' }}>
            <div>
              <span style={{ color: '#94a3b8', display: 'block', fontSize: '9px' }}>TRANSLOCATION RATE</span>
              <strong style={{ color: isAzideInhibited ? '#ef4444' : '#06d6a0', fontSize: '13px' }}>
                {aaPerSec} aa/sec
              </strong>
            </div>
            <div>
              <span style={{ color: '#94a3b8', display: 'block', fontSize: '9px' }}>ATP CONSUMED</span>
              <strong style={{ color: '#ffe066', fontSize: '13px' }}>
                {atpConsumedPerSec} ATP/sec
              </strong>
            </div>
          </div>
        </div>

        {/* Quick Component Targeting Subpills */}
        {onFocusComponent && (
          <div className="motor-card-section">
            <span className="motor-section-title">QUICK INSPECT SUBUNITS</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
              <button
                className="motor-mode-btn"
                style={{ fontSize: '10px', padding: '3px 6px', color: '#9D4EDD', borderColor: 'rgba(157, 78, 221, 0.4)' }}
                onClick={() => onFocusComponent('seca_motor')}
              >
                SecA Motor
              </button>
              <button
                className="motor-mode-btn"
                style={{ fontSize: '10px', padding: '3px 6px', color: '#3A86FF', borderColor: 'rgba(58, 134, 255, 0.4)' }}
                onClick={() => onFocusComponent('secy_pore')}
              >
                SecY Pore
              </button>
              <button
                className="motor-mode-btn"
                style={{ fontSize: '10px', padding: '3px 6px', color: '#00F5D4', borderColor: 'rgba(0, 245, 212, 0.4)' }}
                onClick={() => onFocusComponent('lateral_gate')}
              >
                Lateral Gate
              </button>
              <button
                className="motor-mode-btn"
                style={{ fontSize: '10px', padding: '3px 6px', color: '#FFB703', borderColor: 'rgba(255, 183, 3, 0.4)' }}
                onClick={() => onFocusComponent('sece_clamp')}
              >
                SecE Clamp
              </button>
              <button
                className="motor-mode-btn"
                style={{ fontSize: '10px', padding: '3px 6px', color: '#06D6A0', borderColor: 'rgba(6, 214, 160, 0.4)' }}
                onClick={() => onFocusComponent('secg_escort')}
              >
                SecG Escort
              </button>
              <button
                className="motor-mode-btn"
                style={{ fontSize: '10px', padding: '3px 6px', color: '#FFE066', borderColor: 'rgba(255, 224, 102, 0.4)' }}
                onClick={() => onFocusComponent('translocating_peptide')}
              >
                Preprotein
              </button>
            </div>
          </div>
        )}

        {/* Labels Overlay Toggle */}
        {onToggleLabels && (
          <div className="motor-card-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '6px' }}>
            <button
              className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
              onClick={onToggleLabels}
              style={{ width: '100%', fontSize: '10.5px' }}
            >
              {isLabelsVisible ? '🏷️ 3D Leader Labels: Visible' : '🏷️ 3D Leader Labels: Hidden'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
