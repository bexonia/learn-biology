import React from 'react';

export const RNAPHeaderOverlay: React.FC = () => {
  return (
    <div className="motor-overlay-header">
      <div className="motor-header-text">
        <span className="motor-scale-tag">CRYO-EM ATOMIC ARCHITECTURE • PDB: 6C9Y (3.80 Å)</span>
        <h2 className="motor-main-heading">RNA POLYMERASE TRANSCRIPTION HOLOENZYME</h2>
        <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>
          430 kDa bacterial transcription machine (α₂ββ′ωσ) coupling promoter recognition by σ⁷⁰ to 13-bp bubble melting, two-metal-ion Mg²⁺ catalysis, and processive mRNA synthesis
        </div>
      </div>
    </div>
  );
};
