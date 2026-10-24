import React from 'react';

interface BAMHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  insertionSpeed: number;
  onChangeInsertionSpeed: (val: number) => void;
  lateralSeamOpening: number;
  onChangeLateralSeam: (val: number) => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
  clientMode?: 'ompf' | 'bama';
  onChangeClientMode?: (mode: 'ompf' | 'bama') => void;
}

export const BAMHUDCard: React.FC<BAMHUDCardProps> = ({
  isPaused,
  onTogglePause,
  insertionSpeed,
  onChangeInsertionSpeed,
  lateralSeamOpening,
  onChangeLateralSeam,
  explodedProgress,
  onChangeExploded,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels,
  clientMode = 'ompf',
  onChangeClientMode
}) => {
  const effectiveSpeed = isPaused ? 0 : insertionSpeed;
  const insertionRatePerMin = (effectiveSpeed * 1.2).toFixed(1);
  const foldingDeltaG = isPaused ? '0 kcal/mol' : '-45 kcal/mol (Exergonic)';

  return (
    <div className="motor-hud-overlay" id="bam-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Insertion Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">BAM INSERTASE KINETICS &amp; SEAM GATING</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Substrate Polypeptide Insertion"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#10B981', fontWeight: 700, padding: '0 8px' }}>
              ⚡ ATP-Independent
            </div>
          </div>
        </div>

        {/* Client Substrate Target: Porin vs BamA Auto-Assembly */}
        <div className="motor-card-section">
          <span className="motor-section-title">CLIENT SUBSTRATE TARGET</span>
          <div className="motor-btn-group" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <button
              className={`motor-mode-btn ${clientMode !== 'bama' ? 'active' : ''}`}
              onClick={() => onChangeClientMode && onChangeClientMode('ompf')}
              style={{ fontSize: '10px', padding: '5px 4px' }}
              title="Fold nascent 16-stranded OmpF outer membrane nutrient porin"
            >
              🔵 OmpF Porin
            </button>
            <button
              className={`motor-mode-btn ${clientMode === 'bama' ? 'active' : ''}`}
              onClick={() => onChangeClientMode && onChangeClientMode('bama')}
              style={{ fontSize: '10px', padding: '5px 4px' }}
              title="Fold nascent BamA core (Auto-Assembly / Self-Replication)"
            >
              🧬 BamA (Auto-Assembly)
            </button>
          </div>
        </div>

        {/* Insertion Flux Speed */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">CLIENT INSERTION FLUX:</span>
            <span className="motor-slider-val" style={{ color: '#0077B6', fontWeight: 800 }}>
              {isPaused ? 'PAUSED' : `${insertionSpeed.toFixed(1)}x (${insertionRatePerMin} /min)`}
            </span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={insertionSpeed}
            onChange={(e) => onChangeInsertionSpeed(parseFloat(e.target.value))}
            className="motor-slider-track"
          />
          <div className="motor-slider-scale">
            <span>Slow (0.2x)</span>
            <span>Physiological (1.0x)</span>
            <span>Burst (2.5x)</span>
          </div>
        </div>

        {/* Dynamic Lateral Seam Unzipping Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">LATERAL SEAM UNZIPPING:</span>
            <span
              className="motor-slider-val"
              style={{
                color: lateralSeamOpening > 0.5 ? '#00F5D4' : '#1A2B25',
                fontWeight: 800
              }}
            >
              {lateralSeamOpening < 0.05
                ? 'CLOSED (Sealed β1–β16)'
                : lateralSeamOpening > 0.75
                ? `OPEN (Unzipped ${(lateralSeamOpening * 1.6).toFixed(1)} nm Gap)`
                : `PARTIAL (${Math.round(lateralSeamOpening * 100)}%)`}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={lateralSeamOpening}
            onChange={(e) => onChangeLateralSeam(parseFloat(e.target.value))}
            className="motor-slider-track"
            style={{
              accentColor: '#00F5D4'
            }}
          />
          <div className="motor-slider-scale">
            <span>Closed (H-bonded)</span>
            <span>Bilayer Thinning</span>
            <span>Parted (1.6 nm Lipid Gap)</span>
          </div>
        </div>

        {/* Exploded Assembly Slider */}
        <div className="motor-card-section">
          <div className="motor-slider-header">
            <span className="motor-slider-label">EXPLODED ASSEMBLY:</span>
            <span className="motor-slider-val">
              {explodedProgress === 0
                ? 'Assembled Holoenzyme'
                : `Dissociated (${Math.round(explodedProgress * 100)}%)`}
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
            <span>0% (Assembled)</span>
            <span>50%</span>
            <span>100% (Dissociated)</span>
          </div>
        </div>

        {/* Live Biochemical Readouts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ background: 'rgba(235, 240, 248, 0.7)', borderRadius: '6px', padding: '6px 8px' }}>
            <div style={{ fontSize: '9px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
              FOLDING SINK (ΔG)
            </div>
            <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0077B6' }}>
              {foldingDeltaG}
            </div>
          </div>
          <div style={{ background: 'rgba(235, 240, 248, 0.7)', borderRadius: '6px', padding: '6px 8px' }}>
            <div style={{ fontSize: '9px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
              COLOCATED OM BARRELS
            </div>
            <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#10B981' }}>
              5 (1 Active + 4 Diffusing)
            </div>
          </div>
        </div>

        {/* Subunit Quick Inspection Chips */}
        <div className="motor-card-section">
          <span className="motor-section-title">QUICK INSPECT SUBUNITS</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {[
              { key: 'bama_barrel', label: 'BamA Barrel', col: '#0077B6' },
              { key: 'lateral_seam', label: 'Lateral Seam', col: '#00F5D4' },
              { key: 'bama_potra', label: 'POTRA 1–5', col: '#F77F00' },
              { key: 'bamb_scaffold', label: 'BamB', col: '#2EC4B6' },
              { key: 'bamc_lipoprotein', label: 'BamC', col: '#9D4EDD' },
              { key: 'bamd_clamp', label: 'BamD', col: '#E76F51' },
              { key: 'bame_clip', label: 'BamE', col: '#06D6A0' },
              { key: 'client_omp', label: 'Client β-Hairpin', col: '#FFE066' },
              { key: 'budding_barrel', label: 'Budding Barrel', col: '#00B4D8' },
              { key: 'sura_dock', label: 'SurA Dock', col: '#F77F00' },
              { key: 'collocated_ompf', label: 'Collocated OmpF', col: '#00B4D8' },
              { key: 'collocated_bama', label: 'Daughter BamA', col: '#9D4EDD' }
            ].map((sub) => (
              <button
                key={sub.key}
                onClick={() => onFocusComponent && onFocusComponent(sub.key)}
                style={{
                  fontSize: '9.5px',
                  fontWeight: 700,
                  padding: '3px 7px',
                  borderRadius: '4px',
                  border: `1px solid ${sub.col}`,
                  background: 'rgba(255, 255, 255, 0.85)',
                  color: sub.col === '#00F5D4' ? '#0F766E' : sub.col === '#FFE066' ? '#B45309' : sub.col,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle 3D Labels */}
        {onToggleLabels && (
          <button
            className={`motor-labels-btn ${isLabelsVisible ? 'active' : ''}`}
            onClick={onToggleLabels}
            style={{ width: '100%', marginTop: '2px', padding: '6px 0', fontSize: '11px', fontWeight: 700 }}
          >
            🏷️ 3D Leader Labels: {isLabelsVisible ? 'Visible' : 'Hidden'}
          </button>
        )}
      </div>
    </div>
  );
};
