import React from 'react';
import type { ComplexIComponentData } from '../../types/biology';

interface ComplexIInspectorDrawerProps {
  data: ComplexIComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  onFocus: () => void;
  activeKey?: string;
  onSelectPart?: (key: string) => void;
  storyStep?: number;
  onSelectStoryStep?: (step: number) => void;
  onStartStoryTrace?: () => void;
  onStopStoryTrace?: () => void;
}

export const ComplexIInspectorDrawer: React.FC<ComplexIInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  onFocus,
  activeKey,
  onSelectPart,
  storyStep = 0,
  onSelectStoryStep,
  onStartStoryTrace,
  onStopStoryTrace
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.replace(/PDB:\s*/i, '').replace(/PDB\s*/i, '').split(',').map((p) => p.trim())
    : [];

  return (
    <aside id="complex-i-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="complex-i-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'COMPLEX I COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="complex-i-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="complex-i-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="complex-i-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud using neural TTS voice"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="complex-i-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
        <span style={{ fontSize: '11px', color: '#5C6E64', marginLeft: 'auto', fontStyle: 'italic' }}>
          🗣 [NAHD: yoo-BIK-wih-nohn ox-EE-doh-ree-DUK-tase]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* Pedagogical 6-Stage Explanatory Catalytic Trace Card */}
        <div className="motor-insp-block" style={{
          background: 'linear-gradient(135deg, rgba(31, 119, 180, 0.08) 0%, rgba(6, 214, 160, 0.08) 50%, rgba(255, 183, 3, 0.09) 100%)',
          border: '1px solid rgba(31, 119, 180, 0.35)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px',
          boxShadow: storyStep > 0 ? '0 0 12px rgba(255, 183, 3, 0.25)' : 'none'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#1F77B4', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🎬</span> 6-STAGE EXPLANATORY TRACE
            </span>
            <span style={{
              fontSize: '9px',
              background: storyStep > 0 ? '#1F77B4' : '#E2DACD',
              color: storyStep > 0 ? '#FFFFFF' : '#4A5568',
              padding: '2px 7px',
              borderRadius: '10px',
              fontWeight: 800,
              letterSpacing: '0.4px'
            }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 6` : 'READY'}
            </span>
          </div>

          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the sequential causal chain of respiratory energy transduction: macro architecture → hydride extraction → quantum tunneling → ubiquinone reduction → lateral piston pumping → steady-state respiration:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Holoenzyme Architecture & Respiration Role', desc: '530 kDa L-shaped engine coupling redox energy to 4 H⁺ pumping', col: '#1F77B4', badge: '530kDa' },
              { num: 2, title: '2. NADH Docking & Flavin Hydride Transfer', desc: 'NADH transfers :H⁻ to FMN in NuoF active pocket', col: '#00F5D4', badge: 'NADH' },
              { num: 3, title: '3. Quantum Electron Tunneling (8 Fe-S Wire)', desc: 'Electrons hop down 90 Å relay across 8 Fe-S clusters in <100 µs', col: '#FFB703', badge: 'Fe-S' },
              { num: 4, title: '4. Ubiquinone Reduction at NuoB/CD Cleft', desc: 'Q reduced to QH₂ at cluster N2; triggers electrostatic wave', col: '#FFE066', badge: 'Q₈' },
              { num: 5, title: '5. Lateral Piston Stroke & 4 H⁺ Pumping', desc: 'NuoL ~110 Å lateral helix drives antiporters NuoN, NuoM, NuoL', col: '#E76F51', badge: '4 H⁺' },
              { num: 6, title: '6. Ubiquinol Release & Steady-State Respiration', desc: 'QH₂ diffuses to Cytochrome bo₃; continuous 200 e⁻/s flux', col: '#06D6A0', badge: 'QH₂' }
            ].map(step => {
              const isActive = storyStep === step.num;
              return (
                <button
                  key={step.num}
                  className={`motor-mode-btn ${isActive ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '5px 8px',
                    borderRadius: '5px',
                    border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(0,0,0,0.08)',
                    background: isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.65)',
                    boxShadow: isActive ? `0 0 8px ${step.col}40` : 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onClick={() => onSelectStoryStep && onSelectStoryStep(step.num)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: isActive ? step.col : '#E2E8F0',
                      color: isActive ? '#FFFFFF' : '#4A5568',
                      fontSize: '10px',
                      fontWeight: 800,
                      lineHeight: '18px',
                      textAlign: 'center'
                    }}>
                      {step.num}
                    </span>
                    <div>
                      <div style={{ fontSize: '10.5px', fontWeight: isActive ? 800 : 700, color: isActive ? step.col : '#1E261C' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '9px', color: '#555' }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '8.5px',
                    background: `${step.col}20`,
                    color: step.col,
                    border: `1px solid ${step.col}50`,
                    padding: '1px 5px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontFamily: 'monospace'
                  }}>
                    {step.badge}
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
            <button
              className="motor-mode-btn active"
              onClick={onStartStoryTrace}
              style={{
                flex: 1,
                fontSize: '11px',
                padding: '6px',
                background: 'linear-gradient(135deg, #1F77B4, #00F5D4)',
                color: '#FFFFFF',
                fontWeight: 800,
                border: 'none',
                boxShadow: '0 2px 6px rgba(31, 119, 180, 0.35)'
              }}
              title="Play complete 6-stage Explanatory Trace with camera dollies & voiceover"
            >
              ▶ Play Explanatory Trace
            </button>
            {storyStep > 0 && onStopStoryTrace && (
              <button
                className="motor-mode-btn"
                onClick={onStopStoryTrace}
                style={{ fontSize: '11px', padding: '6px 10px', color: '#B91C1C', borderColor: '#FCA5A5' }}
                title="Stop explanatory walkthrough"
              >
                ⏹ Stop
              </button>
            )}
          </div>
        </div>

        {/* Biochemical Circuit I/O Card */}
        <div className="motor-insp-block" style={{
          background: 'rgba(6, 214, 160, 0.06)',
          border: '1px solid rgba(6, 214, 160, 0.3)',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#06D6A0', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
            <span>⚡</span> BIOCHEMICAL CIRCUIT I/O &amp; ENERGETICS
          </span>

          <div style={{ fontSize: '10.5px', color: '#2D3748', lineHeight: 1.4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '3px', marginBottom: '3px' }}>
              <span style={{ fontWeight: 700, color: '#4A5568' }}>Upstream Donors:</span>
              <span style={{ color: '#0F766E', fontWeight: 600 }}>Glycolysis (GAPDH), PDH, TCA Cycle</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '3px', marginBottom: '3px' }}>
              <span style={{ fontWeight: 700, color: '#4A5568' }}>Net Stoichiometry:</span>
              <span style={{ color: '#B45309', fontWeight: 700, fontFamily: 'monospace' }}>1 NADH + 1 Q + 4 H⁺(in) → 1 NAD⁺ + 1 QH₂ + 4 H⁺(out)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '3px', marginBottom: '3px' }}>
              <span style={{ fontWeight: 700, color: '#4A5568' }}>Thermodynamic Currency:</span>
              <span style={{ color: '#2563EB', fontWeight: 700 }}>ΔE°' = +410 mV (ΔG°' = -79 kJ/mol)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700, color: '#4A5568' }}>Downstream Consumers:</span>
              <span style={{ color: '#7C3AED', fontWeight: 600 }}>Cytochrome bo₃ (e⁻), ATP Synthase (Δp)</span>
            </div>
          </div>
        </div>

        {/* Stoichiometry & Biophysical Specifications */}
        {data.stoichiometry && (
          <div className="motor-insp-block" style={{ borderLeft: '3px solid #1F77B4', background: '#F8FAFC' }}>
            <span className="motor-insp-label" style={{ color: '#1F77B4' }}>CATALYTIC REACTION &amp; FLUX</span>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1E293B', fontFamily: 'monospace', margin: '3px 0' }}>
              {data.stoichiometry}
            </div>
          </div>
        )}

        {/* Subunits & Polypeptide Chains */}
        <div className="motor-insp-block">
          <span className="motor-insp-label">POLYPEPTIDES &amp; DOMAINS</span>
          <div className="motor-insp-text" id="complex-i-comp-proteins">
            {data.proteins || '14 Core Subunits (NuoA through NuoN)'}
          </div>
        </div>

        {/* Biological Description */}
        <div className="motor-insp-block">
          <span className="motor-insp-label">STRUCTURAL &amp; MECHANISTIC DESCRIPTION</span>
          <div className="motor-insp-desc" id="complex-i-comp-desc">
            {data.desc}
          </div>
        </div>

        {/* Biological Role */}
        {data.role && (
          <div className="motor-insp-block">
            <span className="motor-insp-label">BIOENERGETIC ROLE</span>
            <div className="motor-insp-role" id="complex-i-comp-role">
              {data.role}
            </div>
          </div>
        )}

        {/* Interactive Subunit Switcher Chips */}
        {onSelectPart && (
          <div className="motor-insp-block">
            <span className="motor-insp-label">SELECT SUBUNIT TO INSPECT</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
              {[
                { id: 'complex_i_holoenzyme', label: '🔬 Holoenzyme (PDB: 7Z7V)', col: '#1F77B4' },
                { id: 'hydrophilic_arm', label: '🔵 Hydrophilic Arm (NuoEFG/BCI)', col: '#1F77B4' },
                { id: 'membrane_arm', label: '🟢 Membrane Arm (NuoAHJK/NM/L)', col: '#06D6A0' },
                { id: 'fes_clusters', label: '⚡ 8 Fe-S Tunneling Wire', col: '#FFB703' },
                { id: 'fmn_cofactor', label: '🌸 FMN Cofactor', col: '#FF006E' },
                { id: 'nadh_substrate', label: '💧 NADH Substrate', col: '#00F5D4' },
                { id: 'ubiquinone_pocket', label: '🧫 Ubiquinone (Q8) Cleft', col: '#FFE066' },
                { id: 'lateral_piston_nuol', label: '📏 NuoL Lateral Piston', col: '#E76F51' },
                { id: 'membrane_bilayer', label: '🧱 Lipid Bilayer Slab', col: '#06D6A0' }
              ].map(sub => (
                <button
                  key={sub.id}
                  className={`motor-part-chip ${activeKey === sub.id ? 'active' : ''}`}
                  onClick={() => onSelectPart(sub.id)}
                  style={{
                    borderLeft: `3px solid ${sub.col}`,
                    fontSize: '9.5px',
                    padding: '3px 7px'
                  }}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cryo-EM PDB References */}
        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <span className="motor-insp-label">EXPERIMENTAL RCSB CRYO-EM DATA</span>
            <div className="motor-pdb-badges">
              {pdbBadges.map((pdbId) => (
                <a
                  key={pdbId}
                  className="motor-pdb-pill"
                  href={`https://www.rcsb.org/structure/${pdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Open RCSB PDB structure ${pdbId} (Cryo-EM at 2.29 Å)`}
                >
                  <span className="motor-pdb-icon">📦</span>
                  <span className="motor-pdb-text">{pdbId} (2.29 Å)</span>
                  <span className="motor-pdb-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="motor-insp-footer">
        <button className="motor-focus-btn" id="complex-i-focus-btn" onClick={onFocus}>
          🎯 Recenter View
        </button>
      </div>
    </aside>
  );
};
