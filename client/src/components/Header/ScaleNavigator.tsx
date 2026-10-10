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
      : scenario === 'ribosome'
      ? 'BACTERIAL 70S RIBOSOME & TRANSLATION FACTORY'
      : scenario === 'atp_synthase'
      ? 'BACTERIAL F₁F₀-ATP SYNTHASE & ROTARY BIOENERGETIC DYNAMO'
      : scenario === 'complex_i'
      ? 'RESPIRATORY COMPLEX I (NADH:UBIQUINONE OXIDOREDUCTASE)'
      : scenario === 'secyeg'
      ? 'BACTERIAL SECYEG TRANSLOCON & SECA ATPASE MOTOR'
      : scenario === 'bam'
      ? 'BACTERIAL BAM COMPLEX OUTER MEMBRANE INSERTASE'
      : 'BACTERIAL LPTA-G LPS TRANS-ENVELOPE EXPORT BRIDGE';

  const subtitle =
    scenario === 'cell'
      ? 'Prokaryotes are small but highly organized, with specialized structures that support efficient life processes.'
      : scenario === 'motor'
      ? "Nature's 45-nanometer biological rotary turbine, driven by proton motive force across the bacterial envelope."
      : scenario === 'ribosome'
      ? 'The universal 25-nanometer ribozyme engine translating genetic mRNA codons into functional protein polypeptides.'
      : scenario === 'atp_synthase'
      ? 'The 10-nanometer rotary generator coupling electrochemical proton flow across the inner membrane directly to ATP synthesis.'
      : scenario === 'complex_i'
      ? 'The 24-nanometer L-shaped respiratory entry machine coupling 90 Å quantum electron tunneling to 4 H⁺ proton pumping.'
      : scenario === 'secyeg'
      ? 'The 11-nanometer universal protein translocation machine coupling SecA ATP power strokes to translocon secretion and lateral gate partitioning.'
      : scenario === 'bam'
      ? 'The 15-nanometer essential outer membrane protein insertase coupling chaperone client handover, POTRA gating, and lateral seam unzipping for beta-barrel integration.'
      : 'The 28-nanometer trans-envelope bridge spanning the inner membrane, periplasm, and outer membrane for continuous processive lipopolysaccharide export.';

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
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'atp_synthase' ? 'active' : ''}`}
            id="btn-nav-atp-synthase"
            onClick={() => onSelectScenario('atp_synthase')}
            title="Switch to F1F0-ATP Synthase Rotary Dynamo"
          >
            <span className="scale-icon">⚡</span> ATP Synthase <span className="scale-dim">(10 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'complex_i' ? 'active' : ''}`}
            id="btn-nav-complex-i"
            onClick={() => onSelectScenario('complex_i')}
            title="Switch to Respiratory Complex I (NADH:Ubiquinone Oxidoreductase)"
          >
            <span className="scale-icon">🔋</span> Complex I <span className="scale-dim">(24 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'secyeg' ? 'active' : ''}`}
            id="btn-nav-secyeg"
            onClick={() => onSelectScenario('secyeg')}
            title="Switch to SecYEG Translocon & SecA Motor (PDB: 3J46 / 6ITC)"
          >
            <span className="scale-icon">🧪</span> SecYEG <span className="scale-dim">(11 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'bam' ? 'active' : ''}`}
            id="btn-nav-bam"
            onClick={() => onSelectScenario('bam')}
            title="Switch to BAM Complex Outer Membrane Insertase (PDB: 5D0O)"
          >
            <span className="scale-icon">🧱</span> BAM <span className="scale-dim">(15 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'lpt' ? 'active' : ''}`}
            id="btn-nav-lpt"
            onClick={() => onSelectScenario('lpt')}
            title="Switch to LptA-G LPS Trans-Envelope Bridge (PDB: 9P7P / 6MIT)"
          >
            <span className="scale-icon">🌉</span> Lpt Bridge <span className="scale-dim">(28 nm)</span>
          </button>
        </div>
      </div>
      <h1 className="main-title" id="page-main-title">{title}</h1>
      <p className="main-subtitle" id="page-main-subtitle">{subtitle}</p>
    </header>
  );
};
