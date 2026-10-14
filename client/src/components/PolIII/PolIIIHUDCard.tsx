import React from 'react';

interface PolIIIHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  isProofreadingActive: boolean;
  onToggleProofreading: () => void;
  replicationSpeed: number;
  onChangeReplicationSpeed: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const PolIIIHUDCard: React.FC<PolIIIHUDCardProps> = ({
  isPaused,
  onTogglePause,
  isProofreadingActive,
  onToggleProofreading,
  replicationSpeed,
  onChangeReplicationSpeed,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  const effectiveSpeed = isPaused ? 0 : Math.round(replicationSpeed);
  const timeToDuplicateMin = Math.round((4640000 / (effectiveSpeed * 2 * 60))); // bidirectional forks

  return (
    <div className="motor-hud-overlay" id="pol-iii-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Proofreading Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">REPLICATION FLUX &amp; FIDELITY</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Replisome DNA Duplication"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isProofreadingActive ? 'active' : ''}`}
              onClick={onToggleProofreading}
              title="Toggle DnaQ (Epsilon) 3'->5' Exonuclease Proofreading"
              style={{
                background: isProofreadingActive ? '#06D6A0' : '#E63946',
                color: isProofreadingActive ? '#000000' : '#FFFFFF',
                fontWeight: 700
              }}
            >
              {isProofreadingActive ? '🛡️ Proofreading Active' : '⚠️ Mutator Phenotype'}
            </button>
          </div>
        </div>

        {/* Replication Velocity Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">FORK VELOCITY:</span>
            <span className="motor-slider-val" style={{ color: '#06D6A0', fontWeight: 800 }}>
              {isPaused ? 'PAUSED (0 bp/s)' : `${effectiveSpeed} bp/sec (~${timeToDuplicateMin} min/genome)`}
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="1200"
            step="50"
            value={replicationSpeed}
            onChange={(e) => onChangeReplicationSpeed(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Slow (100 bp/s)</span>
            <span>Nominal (1,000 bp/s)</span>
            <span>Surge (1,200 bp/s)</span>
          </div>
        </div>

        {/* Exploded Assembly Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">EXPLODED REPLISOME:</span>
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
            <span>Intact Holoenzyme</span>
            <span>Subunit Vectors</span>
            <span>Isolated Pieces</span>
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
                  background: isLabelsVisible ? '#06D6A0' : '#FFFFFF',
                  color: isLabelsVisible ? '#000000' : '#475569',
                  cursor: 'pointer'
                }}
              >
                {isLabelsVisible ? 'Hide 3D Labels' : 'Show 3D Labels'}
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {[
              { id: 'pol_iii_alpha', label: 'α Palm', col: '#3A86FF' },
              { id: 'pol_iii_beta_clamp', label: 'β₂ Clamp', col: '#FFB703' },
              { id: 'pol_iii_epsilon', label: 'ε Proofreader', col: '#E63946' },
              { id: 'pol_iii_tau', label: 'τ Stalk', col: '#9D4EDD' },
              { id: 'pol_iii_dnab_helicase', label: 'DnaB Helicase', col: '#06D6A0' },
              { id: 'pol_iii_dna_duplex', label: 'Duplex DNA', col: '#00F5D4' },
              { id: 'pol_iii_parental_fork', label: 'Parental Fork', col: '#0077B6' },
              { id: 'pol_iii_active_palm', label: 'Mg²⁺ Active Site', col: '#FFB703' }
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

        {/* Energetics & Processivity Readout */}
        <div className="motor-card-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '10px' }}>
            <div style={{ background: 'rgba(6, 214, 160, 0.08)', padding: '5px 8px', borderRadius: '6px', borderLeft: '2px solid #06D6A0' }}>
              <div style={{ color: '#065F46', fontWeight: 600 }}>ERROR FIDELITY</div>
              <div style={{ fontWeight: 800, color: '#047857', fontSize: '11px' }}>
                {isProofreadingActive ? '< 10⁻⁸ (Proofread)' : '10⁻⁴ (Mutator)'}
              </div>
            </div>
            <div style={{ background: 'rgba(255, 183, 3, 0.08)', padding: '5px 8px', borderRadius: '6px', borderLeft: '2px solid #FFB703' }}>
              <div style={{ color: '#78350F', fontWeight: 600 }}>PROCESSIVITY</div>
              <div style={{ fontWeight: 800, color: '#92400E', fontSize: '11px' }}>
                &gt; 100,000 bp / clamp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
