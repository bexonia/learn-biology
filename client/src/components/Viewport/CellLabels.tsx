import React from 'react';

interface CellLabelsProps {
  activeTarget: string | null;
  onSelectOrganelle: (key: string) => void;
}

const LABELS = [
  { id: 'label-membrane', target: 'membrane', primary: 'periplasmic space & membrane', scientific: 'Spatium Periplasmicum • Inner Bilayer' },
  { id: 'label-nucleoid', target: 'nucleoid', primary: 'nucleoid', scientific: 'Bacterial Chromosome • dsDNA' },
  { id: 'label-ribosomes', target: 'ribosomes', primary: '70S ribosomes', scientific: 'Polyribosomes (30S + 50S Subunits)' },
  { id: 'label-plasmid', target: 'plasmid', primary: 'plasmid rings', scientific: 'Extrachromosomal Circular Replicon' },
  { id: 'label-cytoplasm', target: 'cytoplasm', primary: 'cytoplasm & proteins', scientific: 'Cytosol Matrix • Macromolecular Soup' },
  { id: 'label-wall', target: 'wall', primary: 'cell wall', scientific: 'Peptidoglycan Murein Sacculus' },
  { id: 'label-capsule', target: 'capsule', primary: 'capsule', scientific: 'Glycocalyx Capsularis (K-Antigen)' },
  { id: 'label-flagellum', target: 'flagellum', primary: 'flagellum & motor', scientific: 'FliC Helical Axoneme • Rotary Engine' }
];

export const CellLabels: React.FC<CellLabelsProps> = ({ activeTarget, onSelectOrganelle }) => {
  return (
    <div id="labels-container">
      {LABELS.map((lbl) => (
        <div
          key={lbl.id}
          className={`bio-label ${activeTarget === lbl.target ? 'active-target' : ''}`}
          id={lbl.id}
          data-target={lbl.target}
          onClick={() => onSelectOrganelle(lbl.target)}
        >
          <div className="bio-label-badge">
            <span className="label-line-primary">{lbl.primary}</span>
            <span className="label-line-scientific">{lbl.scientific}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
