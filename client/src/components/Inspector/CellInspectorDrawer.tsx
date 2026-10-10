import type { OrganelleData } from '../../types/biology';

interface CellInspectorDrawerProps {
  isOpen: boolean;
  data: OrganelleData | null;
  onClose: () => void;
  onFocus: () => void;
  onDrillDown?: () => void;
  isNarrating: boolean;
  onNarrate: () => void;
}

export const CellInspectorDrawer: React.FC<CellInspectorDrawerProps> = ({
  isOpen,
  data,
  onClose,
  onFocus,
  onDrillDown,
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
            title="Listen to narration of this biological structure"
          >
            <span className="drawer-tts-icon" id="drawer-tts-icon">🔊</span>
            <span className="drawer-tts-label" id="drawer-tts-label">
              {isNarrating ? 'Stop' : 'Read Aloud'}
            </span>
            <span className={`drawer-tts-spinner ${isNarrating ? '' : 'hidden'}`} id="drawer-tts-spinner"></span>
          </button>
          <span className="drawer-tts-status" id="drawer-tts-status">
            {isNarrating ? 'Speaking...' : 'Ready'}
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
          <h3 className="section-heading">BIOLOGICAL ROLE &amp; FUNCTION</h3>
          <p className="section-text" id="drawer-description">{data.description}</p>
        </div>

        {data.proteins && data.proteins.length > 0 && (
          <div className="drawer-section" id="drawer-proteins-section">
            <h3 className="section-heading">KEY PROTEINS &amp; ENZYMES</h3>
            <ul className="protein-list" id="drawer-proteins-list">
              {data.proteins.map((prot, idx) => (
                <li key={idx} className="protein-item">
                  <div className="protein-header">
                    <span className="protein-name">{prot.name}</span>
                    <span className="protein-tag">{prot.tag}</span>
                  </div>
                  <p className="protein-desc">{prot.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="drawer-footer">
        <button className="focus-btn" id="drawer-focus-btn" onClick={onFocus}>
          ⛶ Focus View in 3D
        </button>
        {data.hasDrilldown && onDrillDown && (
          <button
            className="drilldown-btn"
            id="drawer-drilldown-btn"
            onClick={onDrillDown}
            title={
              data.title.toLowerCase().includes('ribosome')
                ? 'Drill down into 3D 70S Ribosome Translation Factory'
                : 'Drill down into 3D Flagellar Motor nanomachine'
            }
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
