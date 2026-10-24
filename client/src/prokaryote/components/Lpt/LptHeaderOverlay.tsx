import React from 'react';

export const LptHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYO-EM ATOMIC ARCHITECTURE • PDB: 9P7P / 6MIT (3.40 Å)</span>
        <h2 className="motor-main-heading">LptA-G LPS TRANS-ENVELOPE EXPORT BRIDGE</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          Continuous 28 nm trans-envelope bridge coupling cytoplasmic ABC ATPase (LptB2), IM permease (LptFG), periplasmic chute (LptC/LptA), and OM barrel (LptDE) for processive LPS export
        </div>
      </div>
    </div>
  );
};
