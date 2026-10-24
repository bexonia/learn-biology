import React from 'react';

interface MotorHeaderOverlayProps {
  onBackToCell: () => void;
}

export const MotorHeaderOverlay: React.FC<MotorHeaderOverlayProps> = ({ onBackToCell }) => {
  return (
    <div className="motor-overlay-header">
      <button
        className="motor-back-btn"
        id="btn-motor-back"
        onClick={onBackToCell}
        title="Return to Whole Cell 3D Architecture"
      >
        ← Back to Whole Cell (1.5 µm)
      </button>
    </div>
  );
};
