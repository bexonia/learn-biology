import React from 'react';

interface ComplexIHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  nadhSaturation: number;
  onChangeNADH: (val: number) => void;
  isRotenoneInhibited: boolean;
  onToggleRotenone: () => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const ComplexIHUDCard: React.FC<ComplexIHUDCardProps> = ({
  isPaused,
  onTogglePause,
  nadhSaturation,
  onChangeNADH,
  isRotenoneInhibited,
  onToggleRotenone,
  explodedProgress,
  onChangeExploded,
  activeFilter,
  onSelectFilter,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  // Compute physiological turnover from NADH saturation & inhibitor
  const effectiveSaturation = isRotenoneInhibited ? 0 : nadhSaturation;
  const turnoverRate = Math.round((effectiveSaturation / 100) * 200); // e- per sec (~100 NADH/s)
  const hPumpRate = turnoverRate * 2; // 4 H+ per 2 e- = 2 H+ per e-

  return (
    <div className="motor-hud-overlay" id="complex-i-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Respiration Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">RESPIRATORY TURNOVER &amp; ELECTRON FLUX</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Electron Hopping & Proton Pumping"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${isRotenoneInhibited ? 'active' : ''}`}
              onClick={onToggleRotenone}
              style={{
                background: isRotenoneInhibited ? 'rgba(239, 68, 68, 0.25)' : undefined,
                color: isRotenoneInhibited ? '#B91C1C' : undefined,
                borderColor: isRotenoneInhibited ? '#DC2626' : undefined
              }}
              title="Toggle Rotenone / Piericidin A Respiratory Inhibitor at NuoB/CD Cleft"
            >
              {isRotenoneInhibited ? '🚫 Rotenone: ACTIVE' : '🧪 Rotenone: OFF'}
            </button>
          </div>

          <div style={{ marginTop: '6px', display: 'flex', gap: '6px' }}>
            <button
              className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
              id="btn-complex-i-labels"
              onClick={onToggleLabels}
              style={{ flex: 1, fontSize: '11px', padding: '5px 6px' }}
              title="Toggle 3D anatomical tags and leader lines"
            >
              {isLabelsVisible ? '🏷 Anatomy Tags: ON' : '🏷 Anatomy Tags: OFF'}
            </button>
          </div>
        </div>

        {/* NADH Substrate Concentration Slider */}
        <div className="motor-card-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="motor-section-title">CYTOSOLIC NADH POOL</span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#00F5D4', fontFamily: 'monospace' }}>
              {nadhSaturation}% ({turnoverRate} e⁻/s • {hPumpRate} H⁺/s)
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={nadhSaturation}
            onChange={(e) => onChangeNADH(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00F5D4', marginTop: '4px' }}
            title="Adjust cytosolic NADH substrate pool fueling Complex I"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#5C6E64' }}>
            <span>0% (Starvation)</span>
            <span>50% (Standard)</span>
            <span>100% (High Substrate)</span>
          </div>
        </div>

        {/* 90 Å Quantum Tunneling & Coupling Energy Gauge */}
        <div className="motor-card-section" style={{ background: 'rgba(255, 183, 3, 0.08)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 183, 3, 0.25)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span className="motor-section-title" style={{ color: '#8A6D1C' }}>
              REDOX POTENTIAL SPAN (ΔE°')
            </span>
            <span style={{ fontSize: '9px', background: '#FFB703', color: '#1E261C', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
              +410 mV (-79 kJ/mol)
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
            <div style={{ background: '#FFFFFF', padding: '5px 4px', borderRadius: '6px', borderLeft: '3px solid #00F5D4', textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#777', textTransform: 'uppercase' }}>Donor</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#0F766E' }}>NADH</div>
              <div style={{ fontSize: '8px', color: '#999' }}>-320 mV</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '5px 4px', borderRadius: '6px', borderLeft: '3px solid #FFB703', textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#777', textTransform: 'uppercase' }}>8 Fe-S Wire</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#B45309' }}>90 Å Tunnel</div>
              <div style={{ fontSize: '8px', color: '#999' }}>&lt;100 µs hop</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '5px 4px', borderRadius: '6px', borderLeft: '3px solid #FFE066', textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#777', textTransform: 'uppercase' }}>Acceptor</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#A16207' }}>Q₈ Pool</div>
              <div style={{ fontSize: '8px', color: '#999' }}>+90 mV</div>
            </div>
          </div>
        </div>

        {/* Exploded View Dissociation Slider */}
        <div className="motor-card-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="motor-section-title">BIOPHYSICAL EXPLODED VIEW</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1F77B4' }}>
              {Math.round(explodedProgress * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.02"
            value={explodedProgress}
            onChange={(e) => onChangeExploded(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#1F77B4', marginTop: '4px' }}
            title="Dissociate soluble hydrophilic arm from membrane antiporter modules"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#5C6E64' }}>
            <span>Assembled Holoenzyme</span>
            <span>Domain Dissociation</span>
          </div>
        </div>

        {/* Subunit Filter Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">SUBUNIT DOMAIN ISOLATION</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', marginTop: '4px' }}>
            <button
              className={`motor-mode-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => onSelectFilter('all')}
              style={{ fontSize: '10px', padding: '5px 4px' }}
            >
              🌐 All 14 Subunits
            </button>
            <button
              className={`motor-mode-btn ${activeFilter === 'hydrophilic' ? 'active' : ''}`}
              onClick={() => onSelectFilter('hydrophilic')}
              style={{ fontSize: '10px', padding: '5px 4px', borderLeft: '3px solid #1F77B4' }}
            >
              🔵 Hydrophilic Arm
            </button>
            <button
              className={`motor-mode-btn ${activeFilter === 'membrane' ? 'active' : ''}`}
              onClick={() => onSelectFilter('membrane')}
              style={{ fontSize: '10px', padding: '5px 4px', borderLeft: '3px solid #06D6A0' }}
            >
              🟢 Membrane Arm
            </button>
            <button
              className={`motor-mode-btn ${activeFilter === 'cofactors' ? 'active' : ''}`}
              onClick={() => onSelectFilter('cofactors')}
              style={{ fontSize: '10px', padding: '5px 4px', borderLeft: '3px solid #FFB703' }}
            >
              ⚡ Fe-S / FMN / Q₈
            </button>
          </div>
        </div>

        {/* Fast Focus Shortcuts */}
        {onFocusComponent && (
          <div className="motor-card-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <span className="motor-section-title">QUICK FOCUS ANCHORS</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
              <button
                className="motor-part-chip"
                onClick={() => onFocusComponent('complex_i_holoenzyme')}
                style={{ fontSize: '9.5px', padding: '3px 7px' }}
              >
                🔬 Full Complex
              </button>
              <button
                className="motor-part-chip"
                onClick={() => onFocusComponent('nadh_substrate')}
                style={{ fontSize: '9.5px', padding: '3px 7px', borderColor: '#00F5D4' }}
              >
                💧 NADH Pocket
              </button>
              <button
                className="motor-part-chip"
                onClick={() => onFocusComponent('fes_clusters')}
                style={{ fontSize: '9.5px', padding: '3px 7px', borderColor: '#FFB703' }}
              >
                ⚡ 8 Fe-S Relay
              </button>
              <button
                className="motor-part-chip"
                onClick={() => onFocusComponent('ubiquinone_pocket')}
                style={{ fontSize: '9.5px', padding: '3px 7px', borderColor: '#FFE066' }}
              >
                🧫 Q₈ Cavity
              </button>
              <button
                className="motor-part-chip"
                onClick={() => onFocusComponent('lateral_piston_nuol')}
                style={{ fontSize: '9.5px', padding: '3px 7px', borderColor: '#E76F51' }}
              >
                📏 NuoL Piston
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
