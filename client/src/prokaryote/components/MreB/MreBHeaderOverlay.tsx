import React from 'react';

export const MreBHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYSTAL &amp; CRYO-EM ATOMIC ARCHITECTURE • PDB: 1JCG / 4CZM (2.10 Å)</span>
        <h2 className="motor-main-heading">BACTERIAL MREB ACTIN RAILS &amp; ROD COMPLEX</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          Sub-membrane antiparallel double protofilaments organizing the RodA-PBP2 cell-wall elongation machine to maintain rod morphology
        </div>
      </div>
    </div>
  );
};
