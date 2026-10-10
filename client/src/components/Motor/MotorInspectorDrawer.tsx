import type { MotorComponentData } from '../../types/biology';

interface MotorInspectorDrawerProps {
  data: MotorComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
}

export const MotorInspectorDrawer: React.FC<MotorInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.split(',').map((p) => p.trim())
    : [];

  return (
    <aside id="motor-inspector" className="motor-inspector-drawer">
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="motor-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="motor-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="motor-comp-dims">{data.dimensions || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="motor-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="motor-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
      </div>

      <div className="motor-insp-body">
        {data.proteins && (
          <div className="motor-insp-block">
            <h4 className="block-title">PROTEIN COMPOSITION &amp; STOICHIOMETRY</h4>
            <p className="block-text" id="motor-comp-proteins">{data.proteins}</p>
          </div>
        )}

        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <h4 className="block-title">PDB STRUCTURE REFERENCES</h4>
            <div className="pdb-badges" id="motor-comp-pdb">
              {pdbBadges.map((pdbId, idx) => (
                <span key={idx} className="pdb-chip">PDB {pdbId}</span>
              ))}
            </div>
          </div>
        )}

        {data.role && (
          <div className="motor-insp-block">
            <h4 className="block-title">BIOPHYSICAL ROLE &amp; MECHANISM</h4>
            <p className="block-text" id="motor-comp-desc">{data.role}</p>
          </div>
        )}
      </div>
    </aside>
  );
};
