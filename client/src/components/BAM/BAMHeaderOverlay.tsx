import React from 'react';

export const BAMHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYO-EM ATOMIC ARCHITECTURE • PDB: 5D0O (2.90 Å)</span>
        <h2 className="motor-main-heading">BAM COMPLEX OUTER MEMBRANE INSERTASE</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          Essential 200 kDa beta-barrel assembly machine coupling chaperone client handover, POTRA gating, and lateral seam unzipping for outer membrane protein integration
        </div>
      </div>
    </div>
  );
};
