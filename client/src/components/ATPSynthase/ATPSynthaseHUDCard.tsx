import React from 'react';

interface ATPSynthaseHUDCardProps {
  isPaused: boolean;
  onTogglePause: () => void;
  pmfVoltage: number;
  onChangePMF: (val: number) => void;
  mode: 'synthesis' | 'hydrolysis';
  onToggleMode: (mode: 'synthesis' | 'hydrolysis') => void;
  explodedProgress: number;
  onChangeExploded: (val: number) => void;
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  boyerState: 'open' | 'loose' | 'tight';
  onSelectBoyerState: (state: 'open' | 'loose' | 'tight') => void;
  onFocusComponent?: (key: string) => void;
  isLabelsVisible?: boolean;
  onToggleLabels?: () => void;
}

export const ATPSynthaseHUDCard: React.FC<ATPSynthaseHUDCardProps> = ({
  isPaused,
  onTogglePause,
  pmfVoltage,
  onChangePMF,
  mode,
  onToggleMode,
  explodedProgress,
  onChangeExploded,
  activeFilter,
  onSelectFilter,
  boyerState,
  onSelectBoyerState,
  onFocusComponent,
  isLabelsVisible = true,
  onToggleLabels
}) => {
  // Compute physiological turnover from PMF voltage:
  // Base at -140 mV = 390 RPM -> ~19.5 rev/sec / ~1170 ATP/sec aggregate cell flux
  const absV = Math.abs(pmfVoltage);
  const rpm = Math.round((absV / 140) * 390);
  const atpRate = Math.round((rpm / 60) * 3 * 60); // ATP per minute per enzyme

  return (
    <div className="motor-hud-overlay" id="atp-hud-overlay">
      <div className="motor-hud-card">
        {/* Kinetic & Mode Controls */}
        <div className="motor-card-section">
          <span className="motor-section-title">ROTARY TURBINE KINETICS &amp; COUPLING</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
              onClick={onTogglePause}
              title="Pause or Resume Rotary Animation"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              className={`motor-mode-btn ${mode === 'synthesis' ? 'active' : ''}`}
              onClick={() => onToggleMode('synthesis')}
              title="Forward ATP Synthesis driven by proton influx"
            >
              ⚡ Synthesis
            </button>
            <button
              className={`motor-mode-btn ${mode === 'hydrolysis' ? 'active' : ''}`}
              onClick={() => onToggleMode('hydrolysis')}
              title="Reverse ATP Hydrolysis pumping protons"
            >
              🔄 Hydrolysis
            </button>
          </div>

          <div style={{ marginTop: '6px', display: 'flex', gap: '6px' }}>
            <button
              className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
              id="btn-atp-labels"
              onClick={onToggleLabels}
              style={{ flex: 1, fontSize: '11px', padding: '5px 6px' }}
              title="Toggle 3D anatomical tags and leader lines"
            >
              {isLabelsVisible ? '🏷 Anatomy Tags: ON' : '🏷 Anatomy Tags: OFF'}
            </button>
          </div>
        </div>

        {/* Proton-Motive Force Slider */}
        <div className="motor-card-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="motor-section-title">PROTON-MOTIVE FORCE (Δp)</span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#C87550', fontFamily: 'monospace' }}>
              {pmfVoltage} mV ({rpm} RPM)
            </span>
          </div>
          <input
            type="range"
            min="-220"
            max="-80"
            step="5"
            value={pmfVoltage}
            onChange={(e) => onChangePMF(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#C87550', marginTop: '4px' }}
            title="Adjust electrochemical proton gradient driving the c10 turbine"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#5C6E64' }}>
            <span>-80 mV (Starvation)</span>
            <span>-140 mV (Baseline)</span>
            <span>-220 mV (Hyperpolarized)</span>
          </div>
        </div>

        {/* Boyer Three-State Catalytic Binding-Change Gauge */}
        <div className="motor-card-section" style={{ background: 'rgba(255, 183, 3, 0.08)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255, 183, 3, 0.25)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span className="motor-section-title" style={{ color: '#8A6D1C' }}>
              BOYER 3-STATE BINDING CYCLE
            </span>
            <span style={{ fontSize: '9px', background: '#FFB703', color: '#1E261C', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
              β Pocket Active
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
            <button
              className={`motor-mode-btn ${boyerState === 'open' ? 'active' : ''}`}
              style={{
                borderLeft: '3px solid #E9C46A',
                padding: '6px 4px',
                fontSize: '10px',
                background: boyerState === 'open' ? 'rgba(233, 196, 106, 0.35)' : '#FFFFFF'
              }}
              onClick={() => onSelectBoyerState('open')}
              title="Open (O) State: ATP release & fresh ADP+Pi entry"
            >
              <span style={{ fontWeight: 800, color: '#B38600' }}>🟡 Open (O)</span>
              <span style={{ fontSize: '8.5px', color: '#555', display: 'block' }}>Release ATP</span>
            </button>

            <button
              className={`motor-mode-btn ${boyerState === 'loose' ? 'active' : ''}`}
              style={{
                borderLeft: '3px solid #52B788',
                padding: '6px 4px',
                fontSize: '10px',
                background: boyerState === 'loose' ? 'rgba(82, 183, 136, 0.35)' : '#FFFFFF'
              }}
              onClick={() => onSelectBoyerState('loose')}
              title="Loose (L) State: Traps ADP and Pi in closed cavity"
            >
              <span style={{ fontWeight: 800, color: '#2D6A4F' }}>🟢 Loose (L)</span>
              <span style={{ fontSize: '8.5px', color: '#555', display: 'block' }}>Trap Substrates</span>
            </button>

            <button
              className={`motor-mode-btn ${boyerState === 'tight' ? 'active' : ''}`}
              style={{
                borderLeft: '3px solid #FFB703',
                padding: '6px 4px',
                fontSize: '10px',
                background: boyerState === 'tight' ? 'rgba(255, 183, 3, 0.35)' : '#FFFFFF'
              }}
              onClick={() => onSelectBoyerState('tight')}
              title="Tight (T) State: Mechanical compression synthesizes ATP"
            >
              <span style={{ fontWeight: 800, color: '#D97706' }}>🟠 Tight (T)</span>
              <span style={{ fontSize: '8.5px', color: '#555', display: 'block' }}>Form ATP</span>
            </button>
          </div>
        </div>

        {/* Exploded Subunit Assembly Slider */}
        <div className="motor-card-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="motor-section-title">EXPLODED SUBUNIT ASSEMBLY</span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#C87550' }}>
              {Math.round(explodedProgress * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={explodedProgress}
            onChange={(e) => onChangeExploded(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#C87550', marginTop: '4px' }}
            title="Dissociate F1 catalytic crown, central rotor axle, c10 ring, and stator bracket"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#5C6E64' }}>
            <span>0% (Intact Dynamo)</span>
            <span>100% (Exploded Subunits)</span>
          </div>
        </div>

        {/* Subunit Filter Chips */}
        <div className="motor-card-section">
          <span className="motor-section-title">ANATOMICAL PIECES &amp; SUBUNITS</span>
          <div className="motor-chips-grid">
            <button
              className={`motor-chip-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => {
                onSelectFilter('all');
                onFocusComponent?.('atp_synthase_holoenzyme');
              }}
            >
              ✦ Holoenzyme
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'fo_c_ring' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #E5A93C' }}
              onClick={() => {
                onSelectFilter('fo_c_ring');
                onFocusComponent?.('fo_c_ring');
              }}
            >
              🟡 c₁₀ Rotor
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'fo_a_subunit' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #C85A32' }}
              onClick={() => {
                onSelectFilter('fo_a_subunit');
                onFocusComponent?.('fo_a_subunit');
              }}
            >
              🟠 a-Subunit
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'peripheral_stalk' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #6A0DAD' }}
              onClick={() => {
                onSelectFilter('peripheral_stalk');
                onFocusComponent?.('peripheral_stalk');
              }}
            >
              🟣 b₂δ Stalk
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'central_rotor' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #06D6A0' }}
              onClick={() => {
                onSelectFilter('central_rotor');
                onFocusComponent?.('central_rotor');
              }}
            >
              🟢 γε Shaft
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'f1_beta' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #9E1B46' }}
              onClick={() => {
                onSelectFilter('f1_beta');
                onFocusComponent?.('f1_beta');
              }}
            >
              🔴 β Catalytic
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'f1_alpha' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #D45D8C' }}
              onClick={() => {
                onSelectFilter('f1_alpha');
                onFocusComponent?.('f1_alpha');
              }}
            >
              🌸 α Crown
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'adp_pi_substrates' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #F28482' }}
              onClick={() => {
                onSelectFilter('adp_pi_substrates');
                onFocusComponent?.('adp_pi_substrates');
              }}
            >
              🍑 ADP + Pi
            </button>
            <button
              className={`motor-chip-btn ${activeFilter === 'atp_product' ? 'active' : ''}`}
              style={{ borderLeft: '3px solid #FFE066' }}
              onClick={() => {
                onSelectFilter('atp_product');
                onFocusComponent?.('atp_product');
              }}
            >
              🌟 ATP Product
            </button>
          </div>
        </div>

        {/* Biophysical Key Metrics Footer */}
        <div className="motor-card-footer">
          <div className="motor-footer-stat">
            <span className="motor-stat-val">~540 kDa</span>
            <span className="motor-stat-lbl">MOL. MASS</span>
          </div>
          <div className="motor-footer-stat">
            <span className="motor-stat-val">3.33 H⁺</span>
            <span className="motor-stat-lbl">PER ATP</span>
          </div>
          <div className="motor-footer-stat">
            <span className="motor-stat-val">~90%</span>
            <span className="motor-stat-lbl">EFFICIENCY</span>
          </div>
          <div className="motor-footer-stat">
            <span className="motor-stat-val">~{atpRate}</span>
            <span className="motor-stat-lbl">ATP/MIN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
