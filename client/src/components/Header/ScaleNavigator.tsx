import type { ScenarioType } from '../../types/biology';

interface ScaleNavigatorProps {
  scenario: ScenarioType;
  onSelectScenario: (scenario: ScenarioType) => void;
}

export const ScaleNavigator: React.FC<ScaleNavigatorProps> = ({
  scenario,
  onSelectScenario
}) => {
  const title =
    scenario === 'cell'
      ? 'A TYPICAL PROKARYOTIC CELL'
      : scenario === 'motor'
      ? 'BACTERIAL FLAGELLAR ROTARY MOTOR & BASAL BODY'
      : 'BACTERIAL 70S RIBOSOME & TRANSLATION FACTORY';

  const subtitle =
    scenario === 'cell'
      ? 'Prokaryotes are small but highly organized, with specialized structures that support efficient life processes.'
      : scenario === 'motor'
      ? "Nature's 45-nanometer biological rotary turbine, driven by proton motive force across the bacterial envelope."
      : 'The universal 25-nanometer ribozyme engine translating genetic mRNA codons into functional protein polypeptides.';

  return (
    <header id="editorial-header">
      <div className="header-top-row">
        <div className="scale-navigator" id="scale-navigator">
          <span className="scale-nav-tag">LEVEL:</span>
          <button
            className={`scale-nav-btn ${scenario === 'cell' ? 'active' : ''}`}
            id="btn-nav-cell"
            onClick={() => onSelectScenario('cell')}
            title="Switch to Whole Cell 3D Architecture"
          >
            <span className="scale-icon">🦠</span> Whole Cell <span className="scale-dim">(1.5 µm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'motor' ? 'active' : ''}`}
            id="btn-nav-motor"
            onClick={() => onSelectScenario('motor')}
            title="Switch to 3D Flagellar Rotary Motor Nanomachine"
          >
            <span className="scale-icon">⚙️</span> Flagellar Motor <span className="scale-dim">(45 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'ribosome' ? 'active' : ''}`}
            id="btn-nav-ribosome"
            onClick={() => onSelectScenario('ribosome')}
            title="Switch to 70S Ribosome Translation Factory"
          >
            <span className="scale-icon">🧬</span> Ribosome Factory <span className="scale-dim">(25 nm)</span>
          </button>
        </div>
      </div>
      <h1 className="main-title" id="page-main-title">{title}</h1>
      <p className="main-subtitle" id="page-main-subtitle">{subtitle}</p>
    </header>
  );
};
