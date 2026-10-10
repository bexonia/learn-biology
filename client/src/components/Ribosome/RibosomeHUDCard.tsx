import React from 'react';

interface RibosomeHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  translationSpeed: number;
  onChangeSpeed: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  onStepCodon: () => void;
  mrnaCycleProgress?: number;
  onResetMRNACycle?: () => void;
  onFocusComponent?: (key: string) => void;
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
  onStepCodon,
  mrnaCycleProgress = 0,
  onResetMRNACycle,
  onFocusComponent
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

        {/* Polysome Array & mRNA Translocation Cycle */}
        <div className="motor-card-section" style={{ background: 'rgba(26, 43, 37, 0.03)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(26, 43, 37, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="motor-section-title" style={{ color: '#1A3A5A' }}>
              🧬 POLYSOME ARRAY (3x 70S) &amp; mRNA CYCLE
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#BA4E3B', fontFamily: 'monospace' }}>
              {Math.round(mrnaCycleProgress * 100)}%
            </span>
          </div>

          {/* Translocation Progress Bar */}
          <div style={{
            width: '100%',
            height: '7px',
            background: 'rgba(26, 43, 37, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
            marginTop: '4px'
          }}>
            <div style={{
              width: `${Math.round(mrnaCycleProgress * 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #BA4E3B 0%, #FFB703 65%, #2A9D8F 100%)',
              borderRadius: '4px',
              transition: 'width 0.1s linear'
            }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#5C6E64', marginTop: '2px' }}>
            <span>5' Initiation (AUG)</span>
            <span>Codon {Math.round(mrnaCycleProgress * 180)} / 180</span>
            <span>3' Stop (UAA)</span>
          </div>

          {/* Action: Return mRNA to 5' start */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <button
              className="motor-mode-btn"
              style={{
                flex: '1.4',
                background: 'rgba(186, 78, 59, 0.12)',
                color: '#8A2B1C',
                borderColor: 'rgba(186, 78, 59, 0.3)',
                fontWeight: 800
              }}
              onClick={onResetMRNACycle}
              title="Return mRNA strand to the 5' beginning to restart translation cycle"
            >
              ↺ Return mRNA to 5' Start
            </button>
            <button
              className="motor-mode-btn"
              style={{ flex: '1', fontSize: '11px' }}
              onClick={() => onFocusComponent?.('polysome_complex')}
              title="Frame entire 3-ribosome polysome array"
            >
              ⛶ Polysome
            </button>
          </div>

          {/* Tandem Ribosome Focus Selectors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: '4px' }}>
            <button
              className="motor-mode-btn"
              style={{ padding: '4px 2px', fontSize: '10px' }}
              onClick={() => onFocusComponent?.('ribosome_upstream')}
              title="Focus 5' Upstream Ribosome (Recently loaded)"
            >
              5' Ribo 2
            </button>
            <button
              className="motor-mode-btn"
              style={{ padding: '4px 2px', fontSize: '10px' }}
              onClick={() => onFocusComponent?.('ribosome_70s')}
              title="Focus Center Active Holoenzyme"
            >
              Center 70S
            </button>
            <button
              className="motor-mode-btn"
              style={{ padding: '4px 2px', fontSize: '10px' }}
              onClick={() => onFocusComponent?.('ribosome_downstream')}
              title="Focus 3' Downstream Ribosome (Folding peptide)"
            >
              3' Ribo 3
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
          <span className="motor-section-title">ANATOMICAL PIECES & SUBUNITS</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
            {[
              { id: 'all', label: 'All Units', col: '#4A5568' },
              { id: 'polysome', label: 'Polysome (3x 70S)', col: '#1A3A5A' },
              { id: 'ext_mrna', label: 'mRNA (5\'→3\')', col: '#BA4E3B' },
              { id: '50s_rrna', label: '50S rRNA (Magenta)', col: '#9E2A5B' },
              { id: '50s_prot', label: '50S Proteins (Green)', col: '#2D6A4F' },
              { id: '30s_rrna', label: '30S rRNA (Cyan)', col: '#1A8594' },
              { id: '30s_prot', label: '30S Proteins (Olive)', col: '#9A9E32' },
              { id: 'trna', label: 'tRNAs (A, P, E)', col: '#368F8B' },
              { id: 'ptc', label: 'PTC Active Site', col: '#FFB703' },
              { id: 'peptide', label: 'Growing Protein', col: '#7B2CBF' }
            ].map((f) => (
              <button
                key={f.id}
                className={`motor-mode-btn ${activeFilter === f.id ? 'active' : ''}`}
                style={{
                  padding: '6px 6px',
                  fontSize: '11px',
                  borderLeft: `3px solid ${f.col}`,
                  textAlign: 'left'
                }}
                onClick={() => onSelectFilter(f.id)}
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
