import React from 'react';

export interface MotorPartItem {
  id: string;
  label: string;
}

export const MOTOR_PARTS_LIST: MotorPartItem[] = [
  { id: 'molecular_7cgo', label: '🧬 Molecular Basal Body (7CGO)' },
  { id: 'molecular_6ykm', label: '⚡ MotA/B Stators (6YKM)' },
  { id: 'c_ring', label: 'C-Ring (FliG/M/N)' },
  { id: 'ms_ring', label: 'MS-Ring (FliF)' },
  { id: 'stator', label: 'MotA/B Stators (Schematic)' },
  { id: 'rod', label: 'Axial Rod' },
  { id: 'p_ring', label: 'P-Ring Bushing' },
  { id: 'l_ring', label: 'L-Ring Bushing' },
  { id: 'hook', label: '🪝 Universal Hook (FlgE)' },
  { id: 'hap_junction', label: '🔗 Hook Junction (FlgK/L)' },
  { id: 'filament', label: '🧬 Helical Filament (FliC Tail)' },
  { id: 'filament_cap', label: '🧢 Distal Cap (FliD)' }
];

interface MotorPartsChipsProps {
  activePart: string;
  onSelectPart: (partId: string) => void;
}

export const MotorPartsChips: React.FC<MotorPartsChipsProps> = ({
  activePart,
  onSelectPart
}) => {
  return (
    <div className="motor-parts-bar">
      <span className="parts-bar-label">MOLECULAR SUB-COMPONENTS:</span>
      <div className="parts-chips-container" id="motor-parts-chips">
        {MOTOR_PARTS_LIST.map((part) => (
          <button
            key={part.id}
            className={`part-chip ${activePart === part.id ? 'active' : ''}`}
            data-part={part.id}
            onClick={() => onSelectPart(part.id)}
          >
            {part.label}
          </button>
        ))}
      </div>
    </div>
  );
};
