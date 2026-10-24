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
      : scenario === 'mreb'
      ? 'BACTERIAL MREB ACTIN HELICAL RAILS & ROD COMPLEX'
      : scenario === 'expressome'
      ? 'CO-TRANSCRIPTIONAL EXPRESSOME SUPERCOMPLEX (RNAP–NUSG/NUSA–70S)'
      : scenario === 'envelopes'
      ? 'COMPARATIVE PROKARYOTIC ENVELOPES: GRAM(−), GRAM(+) & ARCHAEAL'
      : scenario === 'motility_modes'
      ? 'PROKARYOTIC MOTILITY MODES: TYPE IV PILI, ARCHAELLUM & GLIDING'
      : scenario === 'microcompartment'
      ? 'BACTERIAL MICROCOMPARTMENT (BMC) & CARBOXYSOME ICOSAHEDRAL SHELL'
      : scenario === 'chemosensory_mcp'
      ? 'CHEMOSENSORY TRANSDUCTION ARRAY (MCP–CHEW–CHEA HEXAGONAL LATTICE)'
      : scenario === 'pili_fimbriae'
      ? 'CHAPERONE–USHER TYPE 1 FIMBRIAE, CURLI AMYLOID & BIOFILM MATRIX'
      : scenario === 'nucleoid'
      ? 'BACTERIAL NUCLEOID ARCHITECTURE & NAP CHROMOSOME COMPACTION'
      : scenario === 'chaperones'
      ? 'PROKARYOTIC PROTEOSTASIS: GROEL–GROES ANFINSEN CAGE & DNAK–DNAJ'
      : scenario === 'rna_degradosome'
      ? 'BACTERIAL RNA DEGRADOSOME & MRNA TURNOVER FACTORY'
      : scenario === 'metabolic_hubs'
      ? 'SUPRAMOLECULAR METABOLIC HUBS: PYRUVATE DEHYDROGENASE & CYTOCHROME BO₃'
      : scenario === 'periplasmic_transport'
      ? 'PERIPLASMIC CHAPERONE RELAY (SURA) & MALFGK₂–MALE ABC TRANSPORTER'
      : scenario === 'efflux_pump'
      ? 'ACRAB–TOLC MULTIDRUG RESISTANCE RND TRIPARTITE EFFLUX PUMP'
      : scenario === 'secretion_systems'
      ? 'TRANS-ENVELOPE SECRETION NANOMACHINES: T3SS, T4SS & T6SS'
      : scenario === 'crispr_defense'
      ? 'PROKARYOTIC PHAGE DEFENSE: CRISPR–CASCADE & ECORI RESTRICTION'
      : scenario === 'storage_and_spores'
      ? 'CYTOPLASMIC STORAGE GRANULES, MAGNETOSOMES & BACTERIAL ENDOSPORES'
      : 'LEVEL 5 & 6 ATOMIC CHEMISTRY: BIOMOLECULAR MONOMERS & QUANTUM BONDS';

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
      : scenario === 'mreb'
      ? 'The sub-membrane antiparallel double protofilaments coordinating the RodA-PBP2 elongation machine to synthesize lateral cell wall and maintain rod shape.'
      : scenario === 'expressome'
      ? 'Physical coupling of RNA Polymerase and the leading 70S Ribosome via NusG and NusA bridges (PDB: 6X9Q), preventing R-loop backtracking.'
      : scenario === 'envelopes'
      ? 'Side-by-side biophysical comparison of Gram-negative diderm (OmpF 2OMF), Gram-positive monoderm thick murein + teichoic acids, and Archaeal ether S-layer envelopes.'
      : scenario === 'motility_modes'
      ? 'Comparative locomotion machinery: PilB/PilT Type IV pilus grappling hook (3JC8), ATP-driven Archaeal archaellum (6W6M), and Flavobacterial GldLM-SprB gliding track.'
      : scenario === 'microcompartment'
      ? 'Icosahedral 202-subunit proteinaceous organelle shell (PDB: 7O04 / 3I82) encapsulating RuBisCO and carbonic anhydrase to concentrate CO₂ and block O₂.'
      : scenario === 'chemosensory_mcp'
      ? 'Cooperative hexagonal array of Tsr/Tar methyl-accepting chemoreceptor trimers-of-dimers coupled to CheW and CheA histidine kinase (PDB: 6S1K).'
      : scenario === 'pili_fimbriae'
      ? 'Chaperone-usher FimD/FimC/FimA/FimH catch-bond fimbrial rod (PDB: 6GTO) alongside CsgG/CsgA/CsgB curli amyloid biofilm fibers (PDB: 4B0M).'
      : scenario === 'nucleoid'
      ? 'Plectonemic supercoiled chromosomal DNA domains organized by HU/IHF sharp U-turn bending (1P71), H-NS bridging filaments (3IV5), Fis, and MukBEF condensin.'
      : scenario === 'chaperones'
      ? 'The 800 kDa GroEL–GroES heptameric Anfinsen folding chamber (PDB: 1AON) alongside ribosome-associated Trigger Factor (1W26) and DnaK–DnaJ–GrpE (2KHO).'
      : scenario === 'rna_degradosome'
      ? 'Membrane-tethered RNase E catalytic tetramer (2C0B) assembling PNPase exoribonuclease (5M3P), RhlB DEAD-box helicase, enolase, and Hfq-sRNA.'
      : scenario === 'metabolic_hubs'
      ? 'The 4.5 MDa 24-subunit cubic Pyruvate Dehydrogenase E1–E2–E3 complex (1EAE) and ubiquinol Cytochrome bo₃ terminal oxidase proton pump (6WTI).'
      : scenario === 'periplasmic_transport'
      ? 'ATP-independent SurA periplasmic OMP chaperone cradle (1M5Y) and Venus-flytrap MalE–MalFGK₂ maltose ABC importer (1OMP / 2R6G).'
      : scenario === 'efflux_pump'
      ? 'The 32-nm trans-envelope AcrAB–TolC multidrug efflux pump (PDB: 5V5S) cycling AcrB through Loose, Tight, and Open peristaltic conformations.'
      : scenario === 'secretion_systems'
      ? 'Comparative trans-envelope nanomachines: T3SS needle injectisome (7OKO), T4SS conjugative DNA pilus (7AH9), and T6SS contractile VipAB/Hcp/VgrG spear (6H3L).'
      : scenario === 'crispr_defense'
      ? 'Type I-E CRISPR-Cascade crRNA surveillance seahorse (5H9F) recruiting Cas3 helicase-nuclease alongside EcoRI palindromic restriction endonuclease (1ERI).'
      : scenario === 'storage_and_spores'
      ? 'Cytoplasmic PHB carbonosomes, polyphosphate/glycogen granules, GvpA gas vesicles, MamK Fe₃O₄ magnetosome chains (7R04), and Ca-DPA endospores (2G42).'
      : 'All-atom CPK ball-and-stick representation of Mg²⁺·ATP⁴⁻, murein cross-links, POPE phospholipid, Watson-Crick H-bonds, peptide resonance, and Grotthuss proton wires.';

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
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'expressome' ? 'active' : ''}`}
            id="btn-nav-expressome"
            onClick={() => onSelectScenario('expressome')}
            title="Switch to Co-Transcriptional Expressome (PDB: 6X9Q)"
          >
            <span className="scale-icon">🔗</span> Expressome <span className="scale-dim">(30 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'envelopes' ? 'active' : ''}`}
            id="btn-nav-envelopes"
            onClick={() => onSelectScenario('envelopes')}
            title="Switch to Comparative Prokaryotic Cell Envelopes (PDB: 2OMF / 3VMA)"
          >
            <span className="scale-icon">🛡️</span> Envelopes <span className="scale-dim">(40 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'motility_modes' ? 'active' : ''}`}
            id="btn-nav-motility-modes"
            onClick={() => onSelectScenario('motility_modes')}
            title="Switch to Prokaryotic Motility Modes (PDB: 3JC8 / 6W6M)"
          >
            <span className="scale-icon">🪝</span> Motility Modes <span className="scale-dim">(60 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'microcompartment' ? 'active' : ''}`}
            id="btn-nav-microcompartment"
            onClick={() => onSelectScenario('microcompartment')}
            title="Switch to Bacterial Microcompartment & Carboxysome (PDB: 7O04 / 3I82)"
          >
            <span className="scale-icon">⬢</span> Carboxysome BMC <span className="scale-dim">(100 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'chemosensory_mcp' ? 'active' : ''}`}
            id="btn-nav-chemosensory-mcp"
            onClick={() => onSelectScenario('chemosensory_mcp')}
            title="Switch to Chemosensory MCP Transduction Array (PDB: 6S1K)"
          >
            <span className="scale-icon">📡</span> Chemosensory Array <span className="scale-dim">(38 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'pili_fimbriae' ? 'active' : ''}`}
            id="btn-nav-pili-fimbriae"
            onClick={() => onSelectScenario('pili_fimbriae')}
            title="Switch to Chaperone-Usher Fimbriae & Curli Biofilm (PDB: 6GTO / 4B0M)"
          >
            <span className="scale-icon">🌿</span> Pili &amp; Curli <span className="scale-dim">(25 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'nucleoid' ? 'active' : ''}`}
            id="btn-nav-nucleoid"
            onClick={() => onSelectScenario('nucleoid')}
            title="Switch to Bacterial Nucleoid & NAP Compaction (PDB: 1P71 / 3IV5)"
          >
            <span className="scale-icon">🧶</span> Nucleoid &amp; NAPs <span className="scale-dim">(50 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'chaperones' ? 'active' : ''}`}
            id="btn-nav-chaperones"
            onClick={() => onSelectScenario('chaperones')}
            title="Switch to GroEL-GroES & DnaK Chaperone Network (PDB: 1AON / 2KHO)"
          >
            <span className="scale-icon">🏺</span> GroEL Chaperone <span className="scale-dim">(18 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'rna_degradosome' ? 'active' : ''}`}
            id="btn-nav-rna-degradosome"
            onClick={() => onSelectScenario('rna_degradosome')}
            title="Switch to Bacterial RNA Degradosome (PDB: 5M3P / 2C0B)"
          >
            <span className="scale-icon">✂️</span> RNA Degradosome <span className="scale-dim">(22 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'metabolic_hubs' ? 'active' : ''}`}
            id="btn-nav-metabolic-hubs"
            onClick={() => onSelectScenario('metabolic_hubs')}
            title="Switch to Pyruvate Dehydrogenase & Cytochrome bo3 Hubs (PDB: 1EAE / 6WTI)"
          >
            <span className="scale-icon">⚙️</span> Metabolic Hubs <span className="scale-dim">(45 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'periplasmic_transport' ? 'active' : ''}`}
            id="btn-nav-periplasmic-transport"
            onClick={() => onSelectScenario('periplasmic_transport')}
            title="Switch to Periplasmic SurA Relay & MalEFGK2 ABC Importer (PDB: 1M5Y / 1OMP)"
          >
            <span className="scale-icon">📦</span> Periplasmic Relay <span className="scale-dim">(16 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'efflux_pump' ? 'active' : ''}`}
            id="btn-nav-efflux-pump"
            onClick={() => onSelectScenario('efflux_pump')}
            title="Switch to AcrAB-TolC Multidrug Efflux Pump (PDB: 5V5S)"
          >
            <span className="scale-icon">🚀</span> AcrAB-TolC Pump <span className="scale-dim">(32 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'secretion_systems' ? 'active' : ''}`}
            id="btn-nav-secretion-systems"
            onClick={() => onSelectScenario('secretion_systems')}
            title="Switch to T3SS, T4SS & T6SS Secretion Nanomachines (PDB: 7OKO / 7AH9 / 6H3L)"
          >
            <span className="scale-icon">💉</span> Secretion T3/T4/T6 <span className="scale-dim">(80 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'crispr_defense' ? 'active' : ''}`}
            id="btn-nav-crispr-defense"
            onClick={() => onSelectScenario('crispr_defense')}
            title="Switch to CRISPR-Cascade & EcoRI Phage Defense (PDB: 5H9F / 1ERI)"
          >
            <span className="scale-icon">🛡️</span> CRISPR Defense <span className="scale-dim">(20 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'storage_and_spores' ? 'active' : ''}`}
            id="btn-nav-storage-and-spores"
            onClick={() => onSelectScenario('storage_and_spores')}
            title="Switch to Storage Granules, Magnetosomes & Endospores (PDB: 7R04 / 2G42)"
          >
            <span className="scale-icon">🧲</span> Granules &amp; Spores <span className="scale-dim">(120 nm)</span>
          </button>
          <span className="scale-nav-divider">›</span>
          <button
            className={`scale-nav-btn ${scenario === 'atomic_chemistry' ? 'active' : ''}`}
            id="btn-nav-atomic-chemistry"
            onClick={() => onSelectScenario('atomic_chemistry')}
            title="Switch to Level 5 & 6 Biomolecular Monomers & Atomic Bonds (PDB: 1BNA / RDKit)"
          >
            <span className="scale-icon">⚛️</span> Atomic Bonds <span className="scale-dim">(0.15 nm)</span>
          </button>
        </div>
      </div>
      <h1 className="main-title" id="page-main-title">{title}</h1>
      <p className="main-subtitle" id="page-main-subtitle">{subtitle}</p>
    </header>
  );
};
