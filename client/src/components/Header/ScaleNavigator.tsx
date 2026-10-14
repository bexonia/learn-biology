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
      : scenario === 'lpt'
      ? 'BACTERIAL LPTA-G LPS TRANS-ENVELOPE EXPORT BRIDGE'
      : scenario === 'rnap'
      ? 'BACTERIAL RNA POLYMERASE TRANSCRIPTION HOLOENZYME'
      : scenario === 'pol_iii'
      ? 'BACTERIAL DNA POLYMERASE III REPLISOME HOLOENZYME'
      : scenario === 'gyrase'
      ? 'BACTERIAL DNA GYRASE TOPOISOMERASE II'
      : scenario === 'ftsz'
      ? 'BACTERIAL DIVISOME FTSZ Z-RING & SEPTAL CELL-WALL SYNTHASE'
      : 'BACTERIAL MREB ACTIN HELICAL RAILS & ROD COMPLEX';

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
      : scenario === 'lpt'
      ? 'The 28-nanometer trans-envelope bridge spanning the inner membrane, periplasm, and outer membrane for continuous processive lipopolysaccharide export.'
      : scenario === 'rnap'
      ? 'The 16-nanometer transcription machine unwinding promoter DNA into a 13-bp bubble, pairing rNTPs at two catalytic Mg²⁺ ions, and synthesizing mRNA for expressome coupling.'
      : scenario === 'pol_iii'
      ? 'The 20-nanometer chromosomal duplication machine coupling DnaB helicase unwinding to beta-2 clamp processivity, two-metal Mg²⁺ catalysis (1,000 nt/s), and epsilon proofreading.'
      : scenario === 'gyrase'
      ? 'The 12-nanometer negative supercoiling machine coupling ATP hydrolysis to three-gate strand passage, catalytic Tyr122 transesterification, and topological underwinding.'
      : scenario === 'ftsz'
      ? 'The 800-nanometer cytoskeletal contractile ring coordinating GTPase protofilament treadmilling, membrane tethering (FtsA/ZipA), and septal cell-wall synthesis (FtsW-FtsI / PBP3).'
      : 'The sub-membrane antiparallel double protofilaments coordinating the RodA-PBP2 elongation machine to synthesize lateral cell wall and maintain rod shape.';

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
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'rnap' ? 'active' : ''}`}
            id="btn-nav-rnap"
            onClick={() => onSelectScenario('rnap')}
            title="Switch to RNA Polymerase Transcription Holoenzyme (PDB: 6C9Y)"
          >
            <span className="scale-icon">📜</span> RNA Polymerase <span className="scale-dim">(16 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'pol_iii' ? 'active' : ''}`}
            id="btn-nav-pol-iii"
            onClick={() => onSelectScenario('pol_iii')}
            title="Switch to DNA Polymerase III Replisome Holoenzyme (PDB: 5FKV)"
          >
            <span className="scale-icon">🧬</span> DNA Replisome <span className="scale-dim">(20 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'gyrase' ? 'active' : ''}`}
            id="btn-nav-gyrase"
            onClick={() => onSelectScenario('gyrase')}
            title="Switch to DNA Gyrase Topoisomerase II (PDB: 1AB4 / 2XCT)"
          >
            <span className="scale-icon">🌀</span> DNA Gyrase <span className="scale-dim">(12 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'ftsz' ? 'active' : ''}`}
            id="btn-nav-ftsz"
            onClick={() => onSelectScenario('ftsz')}
            title="Switch to Divisome FtsZ Z-Ring (PDB: 1FSZ / 2R6R)"
          >
            <span className="scale-icon">🔬</span> Divisome Z-Ring <span className="scale-dim">(800 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'mreb' ? 'active' : ''}`}
            id="btn-nav-mreb"
            onClick={() => onSelectScenario('mreb')}
            title="Switch to MreB Actin Helical Rails (PDB: 1JCG / 4CZM)"
          >
            <span className="scale-icon">🛤️</span> MreB Actin Rails <span className="scale-dim">(200 nm)</span>
          </button>
        </div>
      </div>
      <h1 className="main-title" id="page-main-title">{title}</h1>
      <p className="main-subtitle" id="page-main-subtitle">{subtitle}</p>
    </header>
  );
};
