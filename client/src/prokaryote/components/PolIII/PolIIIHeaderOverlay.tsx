import React from 'react';

export const PolIIIHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYO-EM ATOMIC ARCHITECTURE • PDB: 5FKV / 5FKU (8.00 Å)</span>
        <h2 className="motor-main-heading">DNA POLYMERASE III REPLISOME HOLOENZYME</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          1 MDa bacterial chromosomal duplication machine coupling DnaB helicase unwinding to β₂ sliding clamp processivity, two-metal Mg²⁺ catalysis (1,000 nt/s), and ε (DnaQ) 3′→5′ proofreading
        </div>
      </div>
    </div>
  );
};
