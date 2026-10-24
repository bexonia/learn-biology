import React from 'react';
import type { ScenarioType } from '../../types/biology';

interface MicrocompartmentCardProps {
  onSelectScenario?: (scenario: ScenarioType) => void;
}

export const MicrocompartmentCard: React.FC<MicrocompartmentCardProps> = ({ onSelectScenario }) => {
  return (
    <div
      id="inset-microcompartment-card"
      onClick={() => onSelectScenario?.('microcompartment')}
      style={{ cursor: onSelectScenario ? 'pointer' : 'default' }}
      title="Click to inspect the 3D Icosahedral Bacterial Microcompartment & Carboxysome (PDB: 7O04)"
    >
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
      {onSelectScenario && (
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#2A9D8F', marginTop: '4px', textAlign: 'center' }}>
          🔬 Inspect 3D Carboxysome (7O04) →
        </div>
      )}
    </div>
  );
};
