import React from 'react';

interface RNAPHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  isRifampicinInhibited: boolean;
  onToggleRifampicin: () => void;
  transcriptionRate: number;
  onChangeTranscriptionRate: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const RNAPHUDCard: React.FC<RNAPHUDCardProps> = ({
  isPaused,
  onTogglePause,
  isRifampicinInhibited,
  onToggleRifampicin,
  transcriptionRate,
  onChangeTranscriptionRate,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  const effectiveRate = (isPaused || isRifampicinInhibited) ? 0 : Math.round(transcriptionRate);

  return (
    <div className="motor-hud-overlay" id="rnap-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Antibiotic Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">ELONGATION FLUX &amp; ANTIBIOTIC INHIBITOR</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Transcription Elongation"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isRifampicinInhibited ? 'active' : ''}`}
              onClick={onToggleRifampicin}
              title="Toggle Rifampicin Antibiotic Steric Block in RNA Exit Channel"
              style={{
                background: isRifampicinInhibited ? '#E63946' : '#E2DACD',
                color: isRifampicinInhibited ? '#FFFFFF' : '#4A5568',
                fontWeight: 700
              }}
            >
              {isRifampicinInhibited ? '💊 Rifampicin Active' : '💊 Rifampicin Off'}
            </button>
          </div>
        </div>

        {/* Transcription Elongation Rate Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">TRANSCRIPTION VELOCITY:</span>
            <span className="motor-slider-val" style={{ color: '#3A86FF', fontWeight: 800 }}>
              {isPaused
                ? 'PAUSED (0 nt/s)'
                : isRifampicinInhibited
                ? 'STALL AT +3 nt (RIF BLOCKED)'
                : `${effectiveRate} nt/sec (${(effectiveRate / 50).toFixed(1)}x)`}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={transcriptionRate}
            onChange={(e) => onChangeTranscriptionRate(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Basal (10 nt/s)</span>
            <span>Nominal (50 nt/s)</span>
            <span>Rapid (100 nt/s)</span>
          </div>
        </div>

        {/* Exploded Assembly Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">EXPLODED HOLOENZYME:</span>
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
            <span>Subunit Dissociation</span>
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
                  background: isLabelsVisible ? '#3A86FF' : '#FFFFFF',
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
              { id: 'rnap_beta', label: 'β Claw', col: '#3A86FF' },
              { id: 'rnap_betaprime', label: 'β′ Clamp', col: '#9D4EDD' },
              { id: 'rnap_alpha_dimer', label: 'α₂ Dimer', col: '#06D6A0' },
              { id: 'rnap_omega', label: 'ω Latch', col: '#2EC4B6' },
              { id: 'rnap_sigma70', label: 'σ⁷⁰ Factor', col: '#FFB703' },
              { id: 'rnap_dna_duplex', label: 'DNA Duplex', col: '#00F5D4' },
              { id: 'rnap_nascent_rna', label: 'Nascent mRNA', col: '#E63946' },
              { id: 'rnap_active_mg', label: 'Mg²⁺ Active Site', col: '#FFB703' },
              { id: 'rnap_rifampicin_pocket', label: 'Rifampicin Pocket', col: '#E76F51' }
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

        {/* Energetics & Fidelity Readout */}
        <div className="motor-card-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '10px' }}>
            <div style={{ background: 'rgba(58, 134, 255, 0.08)', padding: '5px 8px', borderRadius: '6px', borderLeft: '2px solid #3A86FF' }}>
              <div style={{ color: '#1E40AF', fontWeight: 600 }}>ERROR FIDELITY</div>
              <div style={{ fontWeight: 800, color: '#1D4ED8', fontSize: '11px' }}>
                &lt; 10⁻⁵ / nucleotide
              </div>
            </div>
            <div style={{ background: 'rgba(255, 183, 3, 0.08)', padding: '5px 8px', borderRadius: '6px', borderLeft: '2px solid #FFB703' }}>
              <div style={{ color: '#78350F', fontWeight: 600 }}>CATALYTIC COFACTOR</div>
              <div style={{ fontWeight: 800, color: '#92400E', fontSize: '11px' }}>
                2 × Mg²⁺ (PPi Release)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
