import React from 'react';

export const FtsZHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYSTAL &amp; CRYO-EM ATOMIC ARCHITECTURE • PDB: 1FSZ / 2R6R (2.80 Å)</span>
        <h2 className="motor-main-heading">BACTERIAL DIVISOME FTSZ Z-RING &amp; SEPTUM</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          800 nm cytoskeletal contractile ring coordinating GTPase protofilament treadmilling, membrane tethering (FtsA/ZipA), and septal cell-wall synthesis (FtsW-FtsI / PBP3)
        </div>
      </div>
    </div>
  );
};
