import React from 'react';

export const MicrocompartmentCard: React.FC = () => {
  return (
    <div id="inset-microcompartment-card">
      <div className="inset-header">
        <span className="inset-tag">INTERNAL ORGANIZATION:</span>
        <span className="inset-title">microcompartment</span>
      </div>
      <div className="inset-visual">
        <canvas id="micro-canvas" width="220" height="120"></canvas>
      </div>
      <p className="inset-caption">
        Protein-based microcompartments create specialized environments for key metabolic reactions.
      </p>
    </div>
  );
};
