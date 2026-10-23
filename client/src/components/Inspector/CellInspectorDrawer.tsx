import type { OrganelleData, ScenarioType } from '../../types/biology';

interface CellInspectorDrawerProps {
  isOpen: boolean;
  data: OrganelleData | null;
  onClose: () => void;
  onFocus: () => void;
  onDrillDown?: () => void;
  onSelectScenario?: (scenario: ScenarioType) => void;
  isNarrating: boolean;
  onNarrate: () => void;
}

export const CellInspectorDrawer: React.FC<CellInspectorDrawerProps> = ({
  isOpen,
  data,
  onClose,
  onFocus,
  onDrillDown,
  onSelectScenario,
  isNarrating,
  onNarrate
}) => {
  if (!data) return null;

  return (
    <aside id="inspector-drawer" className={isOpen ? '' : 'closed'}>
      <div className="drawer-header">
        <div className="drawer-tag-row">
          <span className="drawer-zone" id="drawer-zone">{data.zone}</span>
          <button id="drawer-close-btn" className="drawer-close" onClick={onClose} title="Close Inspector">✕</button>
        </div>

        <div className="drawer-title-row">
          <span
            className="drawer-color-swatch"
            id="drawer-swatch"
            style={{ backgroundColor: data.color }}
          ></span>
          <div className="drawer-titles-col">
            <h2 className="drawer-title" id="drawer-title">{data.title}</h2>
            <div className="drawer-scientific-title" id="drawer-scientific-title">{data.scientific}</div>
          </div>
        </div>

        <div className="drawer-subtitle" id="drawer-subtitle">{data.subtitle}</div>

        <div className="drawer-phonetic-row" id="drawer-phonetic-row">
          <span className="phonetic-icon">🗣</span>
          <span className="phonetic-text" id="drawer-phonetic">{data.phonetic}</span>
        </div>

        <div className="drawer-narration-row" id="drawer-narration-row">
          <button
            className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
            id="drawer-tts-btn"
            onClick={onNarrate}
            title="Listen to Masterclass narration of this biological structure"
          >
            <span className="drawer-tts-icon" id="drawer-tts-icon">🔊</span>
            <span className="drawer-tts-label" id="drawer-tts-label">
              {isNarrating ? 'Stop' : 'Narrate Masterclass'}
            </span>
            <span className={`drawer-tts-spinner ${isNarrating ? '' : 'hidden'}`} id="drawer-tts-spinner"></span>
          </button>
          <span className="drawer-tts-status" id="drawer-tts-status">
            {isNarrating ? 'Speaking...' : 'Masterclass Ready'}
          </span>
        </div>
      </div>

      <div className="drawer-body">
        <div className="metrics-grid">
          <div className="metric-card full-width">
            <span className="metric-label">SCIENTIFIC DESIGNATION</span>
            <span className="metric-value scientific-val" id="drawer-scientific-name">{data.scientific}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">DIMENSIONS</span>
            <span className="metric-value" id="drawer-scale">{data.scale}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">ABUNDANCE</span>
            <span className="metric-value" id="drawer-abundance">{data.abundance}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">COMPOSITION</span>
            <span className="metric-value" id="drawer-composition">{data.composition}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">COLOR SWATCH</span>
            <span className="metric-value" id="drawer-color-hex">{data.colorName}</span>
          </div>
        </div>

        <div className="drawer-section">
          <h3 className="section-heading">BIOLOGICAL ROLE &amp; LAYER ARCHITECTURE</h3>
          <p className="section-text" id="drawer-description">{data.description}</p>
        </div>

        {data.analogy && (
          <div
            className="drawer-section"
            style={{
              background: 'rgba(226, 168, 36, 0.10)',
              borderLeft: '3px solid #E2A824',
              padding: '10px 12px',
              borderRadius: '6px'
            }}
          >
            <h3 className="section-heading" style={{ color: '#9A6700', marginBottom: '4px' }}>
              💡 MASTERCLASS ANALOGY &amp; INTUITION
            </h3>
            <p className="section-text" style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.5 }}>
              {data.analogy}
            </p>
          </div>
        )}

        {data.proteins && data.proteins.length > 0 && (
          <div className="drawer-section" id="drawer-proteins-section">
            <h3 className="section-heading">KEY NANOMACHINES &amp; ENZYMES IN THIS LAYER</h3>
            <ul className="protein-list" id="drawer-proteins-list">
              {data.proteins.map((prot, idx) => (
                <li
                  key={idx}
                  className="protein-item"
                  onClick={() => prot.scenario && onSelectScenario?.(prot.scenario)}
                  style={{ cursor: prot.scenario && onSelectScenario ? 'pointer' : 'default' }}
                  title={prot.scenario ? `Click to open 3D Inspector for ${prot.name}` : undefined}
                >
                  <div className="protein-header">
                    <span className="protein-name">{prot.name}</span>
                    <span className="protein-tag">{prot.tag}</span>
                  </div>
                  <p className="protein-desc">{prot.desc}</p>
                  {prot.scenario && onSelectScenario && (
                    <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1A5F54', marginTop: '4px' }}>
                      🔬 Open 3D Molecular Inspector →
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.drilldowns && data.drilldowns.length > 0 && onSelectScenario && (
          <div className="drawer-section">
            <h3 className="section-heading">🔬 STEP DEEPER: 3D MOLECULAR INSPECTORS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {data.drilldowns.map((dd, idx) => (
                <button
                  key={idx}
                  className="drilldown-btn"
                  onClick={() => onSelectScenario(dd.scenario)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '8px 11px',
                    fontSize: '11.5px',
                    textAlign: 'left'
                  }}
                >
                  <span>🔬 {dd.label}</span>
                  <span style={{ fontSize: '10px', opacity: 0.85, fontWeight: 700 }}>{dd.badge} →</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="drawer-footer">
        <button className="focus-btn" id="drawer-focus-btn" onClick={onFocus}>
          ⛶ Focus View in 3D
        </button>
        {data.hasDrilldown && onDrillDown && (!data.drilldowns || data.drilldowns.length === 0) && (
          <button
            className="drilldown-btn"
            id="drawer-drilldown-btn"
            onClick={onDrillDown}
          >
            {data.title.toLowerCase().includes('ribosome')
              ? '🔬 Drill-Down: Ribosome Factory (25 nm 3D) →'
              : '🔬 Drill-Down: Flagellar Motor (45 nm 3D) →'}
          </button>
        )}
      </div>
    </aside>
  );
};
