import React from 'react';

interface CellLabelsProps {
  activeTarget: string | null;
  onSelectOrganelle: (key: string) => void;
}

export interface CellLabelItem {
  id: string;
  target: string;
  primary: string;
  scientific: string;
  badge: string;
  color: string;
}

export const CELL_LABELS: CellLabelItem[] = [
  {
    id: 'label-membrane',
    target: 'membrane',
    primary: 'Periplasmic Space & Membrane',
    scientific: 'Spatium Periplasmicum • Inner Bilayer',
    badge: 'MEMBRANE',
    color: '#E2A824'
  },
  {
    id: 'label-nucleoid',
    target: 'nucleoid',
    primary: 'Nucleoid (Genophore)',
    scientific: 'Bacterial Chromosome • dsDNA Skein',
    badge: 'dsDNA',
    color: '#7209B7'
  },
  {
    id: 'label-ribosomes',
    target: 'ribosomes',
    primary: '70S Polyribosomes',
    scientific: 'Polyribosomes (30S + 50S Subunits)',
    badge: '70S RIBO',
    color: '#E06D53'
  },
  {
    id: 'label-plasmid',
    target: 'plasmid',
    primary: 'Plasmid Rings',
    scientific: 'Extrachromosomal Circular Replicon',
    badge: 'PLASMID',
    color: '#00B4D8'
  },
  {
    id: 'label-cytoplasm',
    target: 'cytoplasm',
    primary: 'Cytoplasm & Proteins',
    scientific: 'Cytosol Matrix • Macromolecular Bedding',
    badge: 'CYTOSOL',
    color: '#B08968'
  },
  {
    id: 'label-wall',
    target: 'wall',
    primary: 'Peptidoglycan Cell Wall',
    scientific: 'Murein Sacculus • Outer Envelope',
    badge: 'MUREIN WALL',
    color: '#3F6636'
  },
  {
    id: 'label-capsule',
    target: 'capsule',
    primary: 'Capsule (Glycocalyx)',
    scientific: 'Glycocalyx Capsularis • K-Antigen Shield',
    badge: 'GLYCOCALYX',
    color: '#40916C'
  },
  {
    id: 'label-flagellum',
    target: 'flagellum',
    primary: 'Flagellum & Rotary Motor',
    scientific: 'FliC Helical Filament • Basal Body',
    badge: 'PROPULSION',
    color: '#0077B6'
  }
];

export const CellLabels: React.FC<CellLabelsProps> = ({ activeTarget, onSelectOrganelle }) => {
  return (
    <div id="labels-container">
      {CELL_LABELS.map((lbl) => {
        const isActive = activeTarget === lbl.target;
        return (
          <div
            key={lbl.id}
            className={`bio-label ${isActive ? 'active-target' : ''}`}
            id={lbl.id}
            data-target={lbl.target}
            onClick={() => onSelectOrganelle(lbl.target)}
          >
            <div
              className="bio-label-badge"
              style={{
                borderLeftColor: lbl.color,
                ['--badge-accent-color' as any]: lbl.color
              }}
            >
              <div className="bio-label-header">
                <span
                  className="bio-label-dot"
                  style={{ backgroundColor: lbl.color, boxShadow: `0 0 8px ${lbl.color}88` }}
                />
                <span
                  className="bio-label-badge-pill"
                  style={{ color: lbl.color, backgroundColor: `${lbl.color}15`, borderColor: `${lbl.color}40` }}
                >
                  {lbl.badge}
                </span>
                <span className="label-line-primary">{lbl.primary}</span>
              </div>
              <span className="label-line-scientific">{lbl.scientific}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
