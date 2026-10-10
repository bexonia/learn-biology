import React from 'react';

interface RibosomeHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  translationSpeed: number;
  onChangeSpeed: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  activeFilter: 'all' | '30s' | '50s' | 'trna' | 'mrna' | 'tunnel';
  onSelectFilter: (filter: 'all' | '30s' | '50s' | 'trna' | 'mrna' | 'tunnel') => void;
  onStepCodon: () => void;
}

export const RibosomeHUDCard: React.FC<RibosomeHUDCardProps> = ({
  isPaused,
  onTogglePause,
  translationSpeed,
  onChangeSpeed,
  explodedProgress,
  onChangeExploded,
  activeFilter,
  onSelectFilter,
  onStepCodon
}) => {
  const currentRateAa = (translationSpeed * 15).toFixed(1);

  return (
    <div className="motor-hud-overlay" id="ribosome-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic Elongation Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">ELONGATION CYCLE & KINETICS</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Translation Animation"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className="motor-mode-btn"
              onClick={onStepCodon}
              title="Step forward by exactly 1 codon triplet (+1 amino acid)"
            >
              ⏩ +1 Codon Step
            </button>
          </div>
        </div>

        {/* Translation Speed Slider */}
        <div className="motor-card-section">
          <div className="slider-header">
            <span>Translation Rate</span>
            <span className="slider-val">{currentRateAa} aa/sec ({translationSpeed.toFixed(1)}x)</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={translationSpeed}
            onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
            className="motor-slider"
          />
        </div>

        {/* Exploded Disassembly Slider */}
        <div className="motor-card-section">
          <div className="slider-header">
            <span>Exploded Subunit Assembly</span>
            <span className="slider-val">{Math.round(explodedProgress * 100)}%</span>
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
        </div>

        {/* Subunit Filter Chips */}
        <div className="motor-card-section">
          <span className="motor-section-title">SUBUNIT ISOLATION</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {[
              { id: 'all', label: 'All Units' },
              { id: '30s', label: '30S Subunit' },
              { id: '50s', label: '50S Subunit' },
              { id: 'trna', label: 'tRNAs (A/P/E)' },
              { id: 'mrna', label: 'mRNA Ribbon' },
              { id: 'tunnel', label: 'Exit Tunnel' }
            ].map((f) => (
              <button
                key={f.id}
                className={`motor-mode-btn ${activeFilter === f.id ? 'active' : ''}`}
                style={{ flex: '1 1 30%', padding: '6px 4px', fontSize: '11px' }}
                onClick={() => onSelectFilter(f.id as any)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Biophysical Metrics Grid */}
        <div className="motor-metrics-grid">
          <div className="motor-metric-item">
            <span className="metric-num">2.5 MDa</span>
            <span className="metric-lbl">Total Holoenzyme Mass</span>
          </div>
          <div className="motor-metric-item">
            <span className="metric-num">~15 aa/s</span>
            <span className="metric-lbl">Physiological Rate</span>
          </div>
          <div className="motor-metric-item">
            <span className="metric-num">4 ATP/GTP</span>
            <span className="metric-lbl">Energy per Bond</span>
          </div>
          <div className="motor-metric-item">
            <span className="metric-num">10⁻⁴</span>
            <span className="metric-lbl">Fidelity Error Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
