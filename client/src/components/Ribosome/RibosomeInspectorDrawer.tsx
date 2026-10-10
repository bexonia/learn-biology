import React from 'react';
import type { RibosomeComponentData } from '../../types/biology';

interface RibosomeInspectorDrawerProps {
  data: RibosomeComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  onFocus: () => void;
}

export const RibosomeInspectorDrawer: React.FC<RibosomeInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  onFocus
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.replace(/PDB:\s*/i, '').replace(/PDB\s*/i, '').split(',').map((p) => p.trim())
    : [];

  return (
    <aside id="ribosome-inspector" className="motor-inspector-drawer">
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="ribosome-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'RIBOZYME COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="ribosome-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="ribosome-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`drawer-tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="ribosome-comp-tts-btn"
          onClick={onNarrate}
          title="Read explanation aloud"
        >
          <span className="drawer-tts-icon">🔊</span>
          <span className="drawer-tts-label" id="ribosome-comp-tts-label">
            {isNarrating ? 'Stop' : 'Read Aloud'}
          </span>
        </button>
      </div>

      <div className="motor-insp-body">
        {data.proteins && (
          <div className="motor-insp-block">
            <h4 className="block-title">MACROMOLECULAR COMPOSITION (RNA &amp; PROTEIN)</h4>
            <p className="block-text" id="ribosome-comp-proteins">{data.proteins}</p>
          </div>
        )}

        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <h4 className="block-title">CRYO-EM &amp; X-RAY PDB STRUCTURES</h4>
            <div className="pdb-badges" id="ribosome-comp-pdb">
              {pdbBadges.map((pdbId, idx) => (
                <span key={idx} className="pdb-chip">{pdbId}</span>
              ))}
            </div>
          </div>
        )}

        {data.desc && (
          <div className="motor-insp-block">
            <h4 className="block-title">CATALYTIC FUNCTION &amp; BIOLOGICAL MECHANISM</h4>
            <p className="block-text" id="ribosome-comp-desc">{data.desc}</p>
          </div>
        )}

        <div style={{ marginTop: '16px' }}>
          <button className="focus-btn" style={{ width: '100%' }} onClick={onFocus}>
            ⛶ Focus Component in 3D
          </button>
        </div>
      </div>
    </aside>
  );
};
