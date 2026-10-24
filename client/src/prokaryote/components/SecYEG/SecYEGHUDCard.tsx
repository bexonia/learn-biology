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
  // 1 ATP power stroke = ~20 amino acids translocated
  const effectiveRate = isAzideInhibited || isPaused ? 0 : atpRate;
  const aaPerSec = Math.round(effectiveRate * 20);
  const atpConsumedPerSec = effectiveRate.toFixed(1);

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
            <span>SECA ATPASE HYDROLYSIS RATE:</span>
            <span className="motor-slider-val" style={{ color: isAzideInhibited ? '#EF4444' : '#FFE066' }}>
              {isAzideInhibited ? '0.0 ATP/s (INHIBITED)' : `${effectiveRate.toFixed(1)} ATP/s (${aaPerSec} aa/s)`}
            </span>
          </div>
          <input
            type="range"
            min="0.5"
            max="3.0"
            step="0.1"
            value={atpRate}
            disabled={isAzideInhibited}
            onChange={(e) => onChangeAtpRate(parseFloat(e.target.value))}
            className="motor-slider"
            style={{ accentColor: '#FFE066' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', marginTop: '2px' }}>
            <span>0.5 ATP/s (Basal: 10 aa/s)</span>
            <span>1.5 ATP/s (Physiological)</span>
            <span>3.0 ATP/s (Max: 60 aa/s)</span>
          </div>
          <div style={{ fontSize: '9px', color: '#94A3B8', marginTop: '4px', fontStyle: 'italic', lineHeight: 1.25 }}>
            ⚡ 1 SecA piston power-stroke = 1 ATP hydrolyzed = ~20 aa translocation step
          </div>
        </div>

        {/* Dynamic Lateral Gate Opening Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-label">
            <span>DYNAMIC LATERAL GATE:</span>
            <span className="motor-slider-val" style={{ color: lateralGateOpening >= 0.20 ? '#00F5D4' : '#94A3B8' }}>
              {lateralGateOpening >= 0.75
                ? `OPEN: Bilayer Integration (${Math.round(lateralGateOpening * 100)}%)`
                : lateralGateOpening >= 0.20
                ? `SAMPLING: Lateral Partition (${Math.round(lateralGateOpening * 100)}%)`
                : `CLOSED: Central Pore (${Math.round(lateralGateOpening * 100)}%)`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={lateralGateOpening}
            onChange={(e) => onChangeLateralGate(parseFloat(e.target.value))}
            className="motor-slider"
            style={{ accentColor: '#00F5D4' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', marginTop: '2px' }}>
            <span>0% Sealed (Periplasm)</span>
            <span>50% TM Sampling</span>
            <span>100% Parted (Lipid Bilayer)</span>
          </div>

          {/* Visual Mode Badge showing the functional biological consequence */}
          <div style={{
            marginTop: '6px',
            padding: '5px 8px',
            borderRadius: '5px',
            fontSize: '9.5px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: lateralGateOpening >= 0.20 ? 'rgba(0, 245, 212, 0.12)' : 'rgba(58, 134, 255, 0.12)',
            border: `1px solid ${lateralGateOpening >= 0.20 ? 'rgba(0, 245, 212, 0.4)' : 'rgba(58, 134, 255, 0.4)'}`,
            color: lateralGateOpening >= 0.20 ? '#00F5D4' : '#93C5FD',
            lineHeight: 1.3
          }}>
            <span style={{ fontSize: '12px' }}>{lateralGateOpening >= 0.20 ? '⚡' : '🟢'}</span>
            <span>
              {lateralGateOpening >= 0.20
                ? 'MEMBRANE INTEGRATION: Transmembrane segment exits laterally into lipid bilayer'
                : 'SECRETORY MODE: Preprotein threads through central pore into periplasm'}
            </span>
          </div>
        </div>

        {/* Exploded Assembly Dissociation */}
        <div className="motor-card-section">
          <div className="motor-slider-label">
            <span>EXPLODED ASSEMBLY:</span>
            <span className="motor-slider-val">
              {explodedProgress <= 0.01
                ? 'Assembled Holoenzyme'
                : `${Math.round(explodedProgress * 100)}% Dissociated`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={explodedProgress}
            onChange={(e) => onChangeExploded(parseFloat(e.target.value))}
            className="motor-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', marginTop: '2px' }}>
            <span>0% (Assembled)</span>
            <span>50%</span>
            <span>100% (Dissociated)</span>
          </div>
        </div>

        {/* Live Translocation Metrics Dashboard */}
        <div className="motor-card-section" style={{ background: 'rgba(2, 6, 23, 0.4)', padding: '8px', borderRadius: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', fontSize: '11px' }}>
            <div>
              <span style={{ color: '#94a3b8', display: 'block', fontSize: '9px' }}>TRANSLOCATION RATE</span>
              <strong style={{ color: isAzideInhibited ? '#ef4444' : '#06d6a0', fontSize: '12px' }}>
                {aaPerSec} aa/sec
              </strong>
            </div>
            <div>
              <span style={{ color: '#94a3b8', display: 'block', fontSize: '9px' }}>ATP CONSUMED</span>
              <strong style={{ color: '#ffe066', fontSize: '12px' }}>
                {atpConsumedPerSec} ATP/sec
              </strong>
            </div>
            <div>
              <span style={{ color: '#94a3b8', display: 'block', fontSize: '9px' }}>DESTINATION</span>
              <strong style={{ color: lateralGateOpening >= 0.20 ? '#00f5d4' : '#3a86ff', fontSize: '11px' }}>
                {lateralGateOpening >= 0.20 ? 'Lipid Bilayer' : 'Periplasm'}
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
