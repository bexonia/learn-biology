import React from 'react';

interface MotorHUDCardProps {
  repMode: 'molecular' | 'schematic';
  onSetRepMode: (mode: 'molecular' | 'schematic') => void;
  isMembraneVisible: boolean;
  onToggleMembrane: () => void;
  isLabelsVisible: boolean;
  onToggleLabels: () => void;
  cameraMode: 'freelook' | 'orbit';
  onToggleCameraMode: () => void;
  direction: 'CCW' | 'CW';
  onSetDirection: (dir: 'CCW' | 'CW') => void;
  isPaused: boolean;
  onTogglePause: () => void;
  explodedProgress: number; // 0 to 100
  onExplodedChange: (val: number) => void;
  speed: number; // 0 to 250
  onSpeedChange: (val: number) => void;
  onOpenBlueprint: () => void;
}

export const MotorHUDCard: React.FC<MotorHUDCardProps> = ({
  repMode,
  onSetRepMode,
  isMembraneVisible,
  onToggleMembrane,
  isLabelsVisible,
  onToggleLabels,
  cameraMode,
  onToggleCameraMode,
  direction,
  onSetDirection,
  isPaused,
  onTogglePause,
  explodedProgress,
  onExplodedChange,
  speed,
  onSpeedChange,
  onOpenBlueprint
}) => {
  return (
    <div className="motor-hud-card">
        {/* Structural Representation */}
        <div className="motor-card-section">
          <span className="motor-section-title">STRUCTURAL REPRESENTATION</span>
          <div className="motor-btn-group" id="motor-rep-btn-group">
            <button
              className={`motor-mode-btn ${repMode === 'molecular' ? 'active' : ''}`}
              id="btn-rep-molecular"
              onClick={() => onSetRepMode('molecular')}
              title="Authentic Cryo-EM Secondary Structure (PDB: 7CGO & 6YKM) from Molecular Nodes in Blender"
            >
              🧬 Molecular Nodes (Cryo-EM)
            </button>
            <button
              className={`motor-mode-btn ${repMode === 'schematic' ? 'active' : ''}`}
              id="btn-rep-schematic"
              onClick={() => onSetRepMode('schematic')}
              title="Schematic Basal Body Diagram"
            >
              📐 Schematic
            </button>
          </div>

          <div style={{ marginTop: '6px', display: 'flex', gap: '6px' }}>
            <button
              className={`motor-mode-btn ${isMembraneVisible ? 'active' : ''}`}
              id="btn-toggle-membrane"
              onClick={onToggleMembrane}
              style={{ flex: 1, fontSize: '11px', padding: '5px 6px' }}
              title="Toggle bacterial envelope cutaway slabs"
            >
              {isMembraneVisible ? '🔬 Membranes: ON' : '🔬 Membranes: OFF'}
            </button>
            <button
              className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
              id="btn-motor-labels"
              onClick={onToggleLabels}
              style={{ flex: 1, fontSize: '11px', padding: '5px 6px' }}
              title="Toggle 3D anatomical labels and leader lines"
            >
              {isLabelsVisible ? '🏷 Anatomy Tags: ON' : '🏷 Anatomy Tags: OFF'}
            </button>
          </div>

          <div style={{ marginTop: '6px' }}>
            <button
              className={`motor-mode-btn ${cameraMode === 'freelook' ? 'active' : ''}`}
              id="btn-cam-mode"
              onClick={onToggleCameraMode}
              style={{ width: '100%', fontSize: '11px', padding: '5px 6px' }}
              title="Toggle between Counter-Strike Free-Look and Orbit Turntable camera"
            >
              {cameraMode === 'freelook'
                ? '🕹️ Camera Mode: CS Free-Look (WASD)'
                : '🔄 Camera Mode: Orbit Turntable'}
            </button>
          </div>
        </div>

        {/* Direction & Speed */}
        <div className="motor-card-section">
          <span className="motor-section-title">ROTATIONAL DIRECTION &amp; SPEED</span>
          <div className="motor-btn-group">
            <button
              className={`motor-mode-btn ${direction === 'CCW' ? 'active' : ''}`}
              id="btn-motor-ccw"
              onClick={() => onSetDirection('CCW')}
              title="Counter-Clockwise Rotation: Smooth forward swimming ('Run')"
            >
              ↺ CCW (Run)
            </button>
            <button
              className={`motor-mode-btn ${direction === 'CW' ? 'active' : ''}`}
              id="btn-motor-cw"
              onClick={() => onSetDirection('CW')}
              title="Clockwise Rotation: Filament unbundles causing reorientation ('Tumble')"
            >
              ↻ CW (Tumble)
            </button>
            <button
              className={`motor-mode-btn ${isPaused ? 'active' : ''}`}
              id="btn-motor-pause"
              onClick={onTogglePause}
              title="Pause or Resume Motor Rotation"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
          </div>
        </div>

        {/* Exploded Slider */}
        <div className="motor-card-section">
          <div className="slider-header">
            <label htmlFor="motor-exploded-slider">Exploded Disassembly View</label>
            <span className="slider-val" id="exploded-val">{Math.round(explodedProgress)}%</span>
          </div>
          <input
            type="range"
            id="motor-exploded-slider"
            className="motor-slider"
            min="0"
            max="100"
            value={explodedProgress}
            onChange={(e) => onExplodedChange(parseFloat(e.target.value))}
          />
        </div>

        {/* Speed Slider */}
        <div className="motor-card-section">
          <div className="slider-header">
            <label htmlFor="motor-speed-slider">Rotational Velocity</label>
            <span className="slider-val" id="speed-val">{Math.round(speed)}%</span>
          </div>
          <input
            type="range"
            id="motor-speed-slider"
            className="motor-slider"
            min="0"
            max="250"
            value={speed}
            onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          />
        </div>

        {/* Biophysical Engine Metrics */}
        <div className="motor-card-section">
          <span className="motor-section-title">BIOPHYSICAL ENGINE METRICS</span>
          <div className="motor-metrics-grid">
            <div className="motor-metric-item">
              <span className="metric-num">~18,000–100,000</span>
              <span className="metric-unit">RPM (Unloaded)</span>
            </div>
            <div className="motor-metric-item">
              <span className="metric-num">~4,600</span>
              <span className="metric-unit">pN·nm Peak Torque</span>
            </div>
            <div className="motor-metric-item">
              <span className="metric-num">~1,200</span>
              <span className="metric-unit">H⁺ / Revolution</span>
            </div>
            <div className="motor-metric-item">
              <span className="metric-num">-170 mV</span>
              <span className="metric-unit">Proton Motive Force (Δp)</span>
            </div>
          </div>
        </div>

        {/* Blueprint Modal Button */}
        <div className="motor-card-section">
          <button className="blueprint-modal-trigger" id="btn-open-blueprint" onClick={onOpenBlueprint}>
            📋 View Cryo-EM Reference Blueprint
          </button>
        </div>

        {/* CS / FPS Navigation Helper */}
        <div
          className="motor-card-section"
          style={{
            background: 'rgba(240, 245, 245, 0.75)',
            borderRadius: '6px',
            padding: '6px 8px',
            marginTop: '6px',
            fontSize: '10px',
            color: '#4B6358',
            border: '1px dashed #B8C7C4',
            lineHeight: 1.5
          }}
        >
          <div style={{ fontWeight: 700, color: '#1B4332', marginBottom: '2px' }}>
            🎮 CS FREE-LOOK / VIDEO GAME CONTROLS
          </div>
          <div>• <strong>W / S:</strong> Fly Forward / Backward in 3D (Gaze Direction)</div>
          <div>• <strong>A / D:</strong> Strafe Left / Right</div>
          <div>• <strong>Space / C:</strong> Fly Up / Down (Ascend / Descend)</div>
          <div>• <strong>Shift:</strong> Turbo Sprint Boost (2.6x Speed)</div>
          <div>• <strong>Mouse Drag:</strong> Free-Look (FPS Pitch &amp; Yaw)</div>
          <div>• <strong>Mouse Scroll / Q / E:</strong> Dolly Flight Thrust</div>
          <div>• <strong>[R]:</strong> Reset to Default Overview</div>
        </div>
      </div>
  );
};
