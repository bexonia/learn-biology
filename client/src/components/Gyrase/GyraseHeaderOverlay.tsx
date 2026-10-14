import React from 'react';

export const GyraseHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYSTAL &amp; CRYO-EM ATOMIC ARCHITECTURE • PDB: 1AB4 / 2XCT (2.80 Å)</span>
        <h2 className="motor-main-heading">BACTERIAL DNA GYRASE TOPOISOMERASE II</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          374 kDa A₂B₂ heterotetrameric rotary machine coupling ATP hydrolysis to three-gate strand passage, transient Tyr122 double-strand cleavage, and negative supercoiling (ΔLk = -2/cycle)
        </div>
      </div>
    </div>
  );
};
