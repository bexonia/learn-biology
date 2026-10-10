import React from 'react';
import type { RibosomeComponentData } from '../../types/biology';

interface RibosomeInspectorDrawerProps {
  data: RibosomeComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  onFocus: () => void;
  activeKey?: string;
  onSelectPart?: (key: string) => void;
}

export const RibosomeInspectorDrawer: React.FC<RibosomeInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  onFocus,
  activeKey,
  onSelectPart
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.replace(/PDB:\s*/i, '').replace(/PDB\s*/i, '').split(',').map((p) => p.trim())
    : [];

  const nameLower = (data.name || '').toLowerCase();
  const badgeLower = (data.badge || '').toLowerCase();
  const isTrna = nameLower.includes('trna') || badgeLower.includes('trna') || badgeLower.includes('adaptor') || badgeLower.includes('inlet') || badgeLower.includes('donor') || badgeLower.includes('outlet');

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
        {/* Tripartite Three-Chamber tRNA Target Card */}
        {isTrna && (
          <div className="motor-insp-block" style={{
            background: 'rgba(233, 196, 106, 0.08)',
            border: '1px solid rgba(233, 196, 106, 0.28)',
            borderRadius: '8px',
            padding: '10px 12px',
            marginBottom: '14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#8A6D1C', letterSpacing: '0.5px' }}>
                THREE-CHAMBER tRNA PATHWAY
              </span>
              <span style={{ fontSize: '9px', background: '#E9C46A', color: '#1A2B25', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
                PDB: 7K00
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.4 }}>
              Click any chamber below to target and focus that specific tRNA in the 3D model:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              <button
                className={`motor-mode-btn ${activeKey === 'trna_a_site' ? 'active' : ''}`}
                style={{
                  borderLeft: '3px solid #E9C46A',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: activeKey === 'trna_a_site' ? 'rgba(233, 196, 106, 0.28)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectPart?.('trna_a_site')}
                title="Target A-site Aminoacyl-tRNA (Arrival)"
              >
                <span style={{ fontWeight: 800, fontSize: '11px', color: '#B38600' }}>🟡 A-Site</span>
                <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Arrival</span>
                <span style={{ fontSize: '8.5px', color: '#888' }}>Val-tRNA (Y)</span>
              </button>

              <button
                className={`motor-mode-btn ${activeKey === 'trna_p_site' ? 'active' : ''}`}
                style={{
                  borderLeft: '3px solid #52B788',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: activeKey === 'trna_p_site' ? 'rgba(82, 183, 136, 0.28)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectPart?.('trna_p_site')}
                title="Target P-site Peptidyl-tRNA (Donor)"
              >
                <span style={{ fontWeight: 800, fontSize: '11px', color: '#2D6A4F' }}>🟢 P-Site</span>
                <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Donor</span>
                <span style={{ fontSize: '8.5px', color: '#888' }}>fMet-tRNA (Z)</span>
              </button>

              <button
                className={`motor-mode-btn ${activeKey === 'trna_e_site' ? 'active' : ''}`}
                style={{
                  borderLeft: '3px solid #E07A5F',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: activeKey === 'trna_e_site' ? 'rgba(224, 122, 95, 0.28)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectPart?.('trna_e_site')}
                title="Target E-site Deacylated tRNA (Exit)"
              >
                <span style={{ fontWeight: 800, fontSize: '11px', color: '#A43B22' }}>🟠 E-Site</span>
                <span style={{ fontSize: '9px', color: '#4A5568', fontWeight: 600 }}>Exit</span>
                <span style={{ fontSize: '8.5px', color: '#888' }}>Deacylated (5)</span>
              </button>
            </div>

            <div style={{ marginTop: '8px', textAlign: 'center' }}>
              <button
                className={`motor-mode-btn ${activeKey === 'trna_all' ? 'active' : ''}`}
                style={{
                  width: '100%',
                  fontSize: '10.5px',
                  padding: '4px 6px',
                  fontWeight: 700,
                  background: activeKey === 'trna_all' ? 'rgba(26,43,37,0.1)' : undefined
                }}
                onClick={() => onSelectPart?.('trna_all')}
              >
                ✦ Target All 3 tRNAs Together
              </button>
            </div>
          </div>
        )}

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
