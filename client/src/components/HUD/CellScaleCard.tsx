import React from 'react';

export const CellScaleCard: React.FC = () => {
  return (
    <div id="scale-card">
      <div className="scale-bar-ruler">
        <div className="scale-ticks">
          <span className="tick left"></span>
          <span className="line"></span>
          <span className="tick right"></span>
        </div>
        <span className="scale-label">1 µm</span>
      </div>
      <p className="scale-desc">
        High surface-area-to-volume ratio supports efficient exchange with the environment.
      </p>
    </div>
  );
};
