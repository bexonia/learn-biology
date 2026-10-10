import React from 'react';

export const SecYEGHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYO-EM ATOMIC ARCHITECTURE • PDB: 6ITC (3.45 Å) &amp; 3J46</span>
        <h2 className="motor-main-heading">SECYEG TRANSLOCON &amp; SECA ATPASE MOTOR</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          Universal protein-conducting channel coupling ATP-driven mechanical power strokes to translocon secretion and dynamic lateral gate bilayer partitioning
        </div>
      </div>
    </div>
  );
};
