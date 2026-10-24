import React from 'react';

interface GyraseHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  isCiprofloxacinInhibited: boolean;
  onToggleCiprofloxacin: () => void;
  isATPHydrolysisActive: boolean;
  onToggleATP: () => void;
  supercoilingRate: number;
  onChangeSupercoilingRate: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const GyraseHUDCard: React.FC<GyraseHUDCardProps> = ({
  isPaused,
  onTogglePause,
  isCiprofloxacinInhibited,
  onToggleCiprofloxacin,
  isATPHydrolysisActive,
  onToggleATP,
  supercoilingRate,
  onChangeSupercoilingRate,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  const effectiveRate = (isPaused || isCiprofloxacinInhibited || !isATPHydrolysisActive) ? 0 : supercoilingRate;
  const deltaLkPerSec = (effectiveRate * 2.0).toFixed(1);

  return (
    <div className="motor-hud-overlay" id="gyrase-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Inhibition Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">SUPERCOILING FLUX &amp; TOPO POISON</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume DNA Gyrase Supercoiling"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isCiprofloxacinInhibited ? 'active' : ''}`}
              onClick={onToggleCiprofloxacin}
              title="Toggle Ciprofloxacin Topoisomerase Poison (Traps 5'-Phosphotyrosyl Cleaved Complex)"
              style={{
                background: isCiprofloxacinInhibited ? '#E63946' : '#06D6A0',
                color: isCiprofloxacinInhibited ? '#FFFFFF' : '#000000',
                fontWeight: 700
              }}
            >
              {isCiprofloxacinInhibited ? '☣️ Cipro Trapped (DSB)' : '🛡️ Normal Cycling'}
            </button>
            <button
              className={`motor-mode-btn ${isATPHydrolysisActive ? 'active' : ''}`}
              onClick={onToggleATP}
              title="Toggle ATP Hydrolysis Energy Coupling"
              style={{
                background: isATPHydrolysisActive ? '#00F5D4' : '#5C6E64',
                color: '#000000',
                fontWeight: 700
              }}
            >
              {isATPHydrolysisActive ? '⚡ 2 ATP/Cycle' : '🛑 ATP Depleted'}
            </button>
          </div>
        </div>

        {/* Supercoiling Velocity Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">CATALYTIC TURNOVER:</span>
            <span className="motor-slider-val" style={{ color: '#06D6A0', fontWeight: 800 }}>
              {effectiveRate === 0
                ? isCiprofloxacinInhibited
                  ? 'POISONED (0 cycles/s)'
                  : 'PAUSED (0 cycles/s)'
                : `${effectiveRate.toFixed(1)} cycles/s (ΔLk = -${deltaLkPerSec}/s)`}
            </span>
          </div>
          <input
            type="range"
            min="0.2"
            max="5.0"
            step="0.1"
            value={supercoilingRate}
            onChange={(e) => onChangeSupercoilingRate(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Slow (0.2 cyc/s)</span>
            <span>Nominal (1.5 cyc/s)</span>
            <span>Surge (5.0 cyc/s)</span>
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
              { id: 'gyrase_gyra_dimer', label: 'GyrA Core', col: '#3A86FF' },
              { id: 'gyrase_gyrb_dimer', label: 'GyrB Clamp', col: '#FFB703' },
              { id: 'gyrase_g_segment', label: 'G-Segment', col: '#7209B7' },
              { id: 'gyrase_t_segment', label: 'T-Segment', col: '#06D6A0' },
              { id: 'gyrase_tyr122_active', label: 'Tyr122 Active', col: '#FFB703' },
              { id: 'gyrase_cipro_pocket', label: 'Cipro Pocket', col: '#E63946' },
              { id: 'gyrase_atp_sites', label: '2× ATP Engine', col: '#00F5D4' },
              { id: 'gyrase_ctd_pinwheels', label: 'CTD Pinwheels', col: '#0077B6' }
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
          <div><strong>UPSTREAM:</strong> Positively Supercoiled Loops from Replisomes &amp; RNAP</div>
          <div style={{ marginTop: '2px' }}><strong>STOICHIOMETRY:</strong> 1 Loop + 2 ATP → 1 Underwound Loop (ΔLk = -2) + 2 ADP + 2 Pi</div>
          <div style={{ marginTop: '2px' }}><strong>DOWNSTREAM:</strong> Relaxed Chromosomal Topological Underwinding (σ ≈ -0.05)</div>
        </div>
      </div>
    </div>
  );
};
