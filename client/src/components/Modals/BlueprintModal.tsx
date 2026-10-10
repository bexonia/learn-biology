import React from 'react';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      id="blueprint-modal"
      className={`blueprint-modal-backdrop ${isOpen ? '' : 'hidden'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="blueprint-modal-content">
        <div className="blueprint-modal-header">
          <div>
            <span className="blueprint-tag">CRYO-EM STRUCTURAL BIOLOGY REFERENCE</span>
            <h2 className="blueprint-modal-title">Bacterial Flagellar Motor Cryo-EM Architecture</h2>
          </div>
          <button className="blueprint-close-btn" id="btn-close-blueprint" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="blueprint-modal-body">
          <div className="blueprint-img-wrap">
            <img
              src="/assets/bacterial_flagellar_motor_scientific.jpg"
              alt="Bacterial Flagellar Motor Scientific Cryo-EM Diagram"
              className="blueprint-img"
            />
          </div>
          <div className="blueprint-legend-card">
            <h3>Biophysical Principles of Nature's Rotary Nanomotor</h3>
            <p>
              <strong>Energy Source:</strong> Driven by the Proton Motive Force (&Delta;p = &Delta;&psi; - 60 &Delta;pH &approx; -170 mV). Protons stream from the periplasm through 11 MotA/MotB stator channels into the cytoplasm, consuming ~1,200 protons per complete revolution.
            </p>
            <p>
              <strong>Torque Generation:</strong> Electrostatic interactions between charged residues on MotA (Arg90, Glu98) and FliG (Arg281, Asp288, Glu289) drive power strokes delivering ~4,600 pN·nm of stall torque.
            </p>
            <p>
              <strong>Directional Switching:</strong> When chemotaxis signaling protein CheY-P binds FliM/FliN, it flips FliG subunits ~180&deg;, reversing rotation from CCW (smooth swimming) to CW (tumbling).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
