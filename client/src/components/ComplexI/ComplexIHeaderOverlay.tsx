import React from 'react';

export const ComplexIHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYO-EM ATOMIC ARCHITECTURE • PDB: 7Z7V (2.29 Å)</span>
        <h2 className="motor-main-heading">RESPIRATORY COMPLEX I (NADH:UBIQUINONE OXIDOREDUCTASE)</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          530 kDa L-shaped entry engine of cellular respiration coupling 90 Å quantum electron tunneling to 4 H⁺ proton translocation
        </div>
      </div>
    </div>
  );
};
