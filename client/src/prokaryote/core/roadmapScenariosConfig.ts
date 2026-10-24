import type { RoadmapScenarioId } from '../types/biology';

export interface RoadmapPieceConfig {
  meshName: string;
  name: string;
  badge: string;
  color: string;
  desc: string;
  dissocVector: [number, number, number];
}

export interface RoadmapStageConfig {
  step: number;
  title: string;
  desc: string;
  spoken: string;
  color: string;
  targetPiece: string;
}

export interface RoadmapScenarioConfig {
  id: RoadmapScenarioId;
  title: string;
  subtitle: string;
  analogy?: string;
  scaleTag: string;
  glb: string;
  pdb: string;
  pronounce: string;
  sliderLabel: string;
  sliderUnit: string;
  sliderMin: number;
  sliderMax: number;
  sliderDefault: number;
  inhibitorBtn: [string, string];
  energyBtn: [string, string];
  upstream: string;
  coupling: string;
  downstream: string;
  kinetics: [string, string][];
  pieces: RoadmapPieceConfig[];
  stages: RoadmapStageConfig[];
}

export const ROADMAP_SCENARIOS_CONFIG: Record<RoadmapScenarioId, RoadmapScenarioConfig> = {
  expressome: {
    "id": "expressome",
    "title": "CO-TRANSCRIPTIONAL EXPRESSOME SUPERCOMPLEX",
    "subtitle": "Physical coupling of RNA Polymerase and the leading 70S Ribosome via NusG and NusA bridges, preventing R-loop backtracking",
    "scaleTag": "CRYO-EM ATOMIC ARCHITECTURE • PDB: 6X9Q / 6ZTJ (3.00 Å)",
    "glb": "/prokaryote/models/expressome_6x9q.glb",
    "pdb": "6X9Q, 6ZTJ",
    "pronounce": "[ehk-SPRES-oh-m SOO-per-kahm-pleks]",
    "sliderLabel": "TRANSCRIPTION-TRANSLATION RATE:",
    "sliderUnit": "nt/s (coupled)",
    "sliderMin": 15,
    "sliderMax": 85,
    "sliderDefault": 45,
    "inhibitorBtn": [
        "☣️ Rifampicin Stall",
        "🛡️ Coupled Expressome"
    ],
    "energyBtn": [
        "⚡ NTP + GTP Active",
        "🛑 Nucleotide Depleted"
    ],
    "upstream": "Promoter Clearance & Sigma-70 Release + 30S Shine-Dalgarno Initiation",
    "coupling": "RNAP β' Clamp ⇌ NusG Bridge + NusA ⇌ 30S S10 (uS10) (45 nt/s ≡ 15 aa/s)",
    "downstream": "Synchronized Nascent Polypeptide Synthesis & R-Loop Prevention",
    "kinetics": [
        [
            "ELONGATION RATE",
            "45 nt/s (15 codons/s)"
        ],
        [
            "BRIDGE TETHER",
            "NusG NTD–CTD + NusA"
        ],
        [
            "ANTIBIOTIC TARGET",
            "Rifampicin / Streptomycin"
        ],
        [
            "STOICHIOMETRY",
            "1 RNAP : 1 NusG : 1 NusA : 1 70S"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_6X9Q_RNAP_Core",
            "name": "RNAP Core (α₂ββ'ω)",
            "badge": "RNAP",
            "color": "#3A86FF",
            "desc": "The 400-kDa five-subunit RNA Polymerase core enzyme (α₂ββ'ω, PDB: 6X9Q) acts as the leading engine of the expressome. Using a catalytic Mg²⁺ ion at the base of its crab-claw cleft, it melts a 13-base-pair DNA transcription bubble and polymerizes ribonucleoside triphosphates (ATP, UTP, GTP, CTP) into nascent mRNA at 45 nucleotides per second.",
            "dissocVector": [
                -3.8,
                1.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_6X9Q_DNA_Duplex",
            "name": "Transcription DNA Bubble",
            "badge": "DNA",
            "color": "#F77F00",
            "desc": "The chromosomal B-DNA duplex bends by ~90° as it enters the RNAP active cleft, separating into a template strand (read 3'→5') and a non-template strand before re-annealing upstream. Continuous forward pulling by the coupled ribosome prevents RNAP from stalling or sliding backward along this DNA bubble.",
            "dissocVector": [
                -4.8,
                2.5,
                1.8
            ]
        },
        {
            "meshName": "Piece_6X9Q_NusG_Bridge",
            "name": "NusG Physical Bridge",
            "badge": "NusG",
            "color": "#FFB703",
            "desc": "NusG is the primary mechanical drawbar of the coupled expressome. Its N-terminal domain (NTD) clamps across the RNAP β' pincers to lock the transcription bubble in an active state, while its flexible C-terminal KOW domain reaches across to dock directly onto ribosomal protein uS10 on the 30S head.",
            "dissocVector": [
                -0.8,
                3.4,
                1.5
            ]
        },
        {
            "meshName": "Piece_6X9Q_NusA_Modulator",
            "name": "NusA RNA Chaperone Bridge",
            "badge": "NusA",
            "color": "#9D4EDD",
            "desc": "NusA is a multi-domain RNA-binding elongation factor (S1–KH1–KH2) positioned at the mouth of the RNAP RNA-exit channel. Acting as an arched guide rail, it cradles the emerging mRNA transcript and bridges RNAP α-CTD to the 30S subunit, coordinating transcriptional pausing with ribosomal arrival.",
            "dissocVector": [
                0.5,
                3.8,
                -1.5
            ]
        },
        {
            "meshName": "Piece_6X9Q_Nascent_mRNA",
            "name": "Nascent mRNA Transcript",
            "badge": "mRNA",
            "color": "#E63946",
            "desc": "The newly synthesized single-stranded mRNA transcript spans barely 30–35 nucleotides (~100 Å) between the RNAP active site Mg²⁺ and the 30S ribosomal P-site. Because it is completely enclosed within the RNAP–NusA–NusG–30S tunnel, the hexameric termination helicase Rho cannot access rut sites to prematurely abort transcription.",
            "dissocVector": [
                0.0,
                -2.2,
                2.4
            ]
        },
        {
            "meshName": "Piece_6X9Q_Ribosome_30S",
            "name": "30S Decoding Subunit",
            "badge": "30S",
            "color": "#06D6A0",
            "desc": "The small 30S ribosomal subunit (16S rRNA and 21 proteins) docks directly against the RNA exit face of RNAP. Its mRNA entry channel (formed by uS3, uS4, and uS5) acts as a helicase plow that melts mRNA hairpins as the transcript threads directly from RNAP into the decoding center.",
            "dissocVector": [
                3.2,
                -1.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_6X9Q_Ribosome_50S",
            "name": "50S Catalytic Subunit",
            "badge": "50S",
            "color": "#2A9D8F",
            "desc": "The large 50S catalytic subunit (23S rRNA, 5S rRNA, and 33 proteins) houses the Peptidyl Transferase Center (PTC) ribozyme. Every 3 nucleotides transcribed by RNAP (~67 ms), the 50S subunit condenses exactly one new peptide bond, keeping translation speed (15 aa/s) perfectly matched to transcription speed (45 nt/s).",
            "dissocVector": [
                4.5,
                1.8,
                -1.2
            ]
        },
        {
            "meshName": "Piece_6X9Q_tRNA_Sites",
            "name": "A/P/E-Site tRNAs",
            "badge": "tRNA",
            "color": "#00F5D4",
            "desc": "Three L-shaped transfer RNAs occupy the A (Aminoacyl), P (Peptidyl), and E (Exit) sites across the 30S–50S interface. Powered by EF-Tu and EF-G GTP hydrolysis, they ratchet through the ribosome to translate the genetic code into a folding polypeptide chain while physically pushing stalled RNAP forward.",
            "dissocVector": [
                2.5,
                -3.2,
                2.2
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Expressome Overview & Kinetic Lockstep",
            "desc": "RNAP (45 nt/s) and 70S ribosome (15 aa/s) physically couple in bacteria",
            "spoken": "Stage one: Expressome Overview and Kinetic Lockstep. Because bacteria lack a nuclear membrane, transcription and translation occur simultaneously in the same compartment. Here in the cryo-EM structure 6X9Q, RNA Polymerase transcribing DNA at forty-five nucleotides per second is physically locked to the leading 70S ribosome translating at fifteen codons per second, forming a single macromolecular assembly line.",
            "color": "#3A86FF",
            "targetPiece": "Piece_6X9Q_RNAP_Core"
        },
        {
            "step": 2,
            "title": "2. DNA Bubble Melting & RNAP Synthesis",
            "desc": "RNAP α₂ββ'ω crab-claw unwinds 13-bp DNA bubble to synthesize mRNA",
            "spoken": "Stage two: DNA Bubble Melting and RNA Synthesis. At the leading edge, the crab-claw jaws of RNA Polymerase unwind a thirteen-base-pair transcription bubble in the chromosomal DNA duplex. Within the catalytic cleft, a magnesium ion coordinates incoming ribonucleotides to synthesize the nascent messenger RNA strand.",
            "color": "#F77F00",
            "targetPiece": "Piece_6X9Q_DNA_Duplex"
        },
        {
            "step": 3,
            "title": "3. NusG Mechanical Drawbar Coupling",
            "desc": "NusG NTD clamps RNAP β' while its KOW domain docks onto 30S uS10",
            "spoken": "Stage three: The NusG Mechanical Bridge. Universal elongation factor NusG acts like a physical drawbar between the two machines. Its N-terminal domain clamps across the RNA Polymerase cleft to prevent pausing, while its C-terminal KOW domain reaches across to latch directly onto ribosomal protein uS10 on the 30S head.",
            "color": "#FFB703",
            "targetPiece": "Piece_6X9Q_NusG_Bridge"
        },
        {
            "step": 4,
            "title": "4. NusA Arch & Rho Termination Shielding",
            "desc": "NusA guides nascent mRNA into the 30S pore, blocking Rho helicase",
            "spoken": "Stage four: NusA Chaperone Arch and mRNA Shielding. Elongation factor NusA forms a protective arch over the RNA exit channel, guiding the nascent mRNA transcript directly into the 30S entry pore. Because the mRNA is completely enclosed between the two complexes, the termination factor Rho cannot bind to abort transcription.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_6X9Q_NusA_Modulator"
        },
        {
            "step": 5,
            "title": "5. Co-Transcriptional Decoding & Anti-Backtracking",
            "desc": "30S/50S ratcheting translates codons and pushes RNAP past DNA roadblocks",
            "spoken": "Stage five: Co-Transcriptional Decoding and Anti-Backtracking. As transfer RNAs ratchet through the 30S and 50S ribosomal subunits to forge the growing protein chain, the moving ribosome acts as a mechanical pawl behind RNA Polymerase—preventing polymerase backtracking and preventing toxic DNA-RNA hybrid R-loops.",
            "color": "#E63946",
            "targetPiece": "Piece_6X9Q_Nascent_mRNA"
        }
    ],
    "analogy": "Think of the Expressome as a synchronized 'teleprinter-and-assembly-line tandem': because bacteria have no nuclear membrane separating DNA from ribosomes, the leading 70S ribosome physically hitches a ride onto the back of RNA Polymerase via a two-strut drawbar (NusG and NusA). As soon as the genetic tape (mRNA) emerges from the printer (RNAP at 45 nucleotides/sec), it feeds straight into the 3D printer (ribosome at 15 amino acids/sec), preventing the tape from tangling or being cut by termination security guards (Rho)."
},
  envelopes: {
    "id": "envelopes",
    "title": "COMPARATIVE PROKARYOTIC CELL ENVELOPES",
    "subtitle": "Tripartite architectural comparison of Gram-negative diderm, Gram-positive thick-murein monoderm, and Archaeal ether S-layer envelopes",
    "scaleTag": "COMPARATIVE STRUCTURAL ARCHITECTURE • PDB: 2OMF / 3VMA / 1EQ7",
    "glb": "/prokaryote/models/envelopes_comparison.glb",
    "pdb": "2OMF, 3VMA, 1EQ7",
    "pronounce": "[proh-KAIR-ee-AHT-ik SELL EHN-vuh-lohps]",
    "sliderLabel": "TURGOR OSMOTIC PRESSURE:",
    "sliderUnit": "atm",
    "sliderMin": 1,
    "sliderMax": 25,
    "sliderDefault": 15,
    "inhibitorBtn": [
        "☣️ β-Lactam / Lysozyme",
        "🛡️ Intact Sacculus"
    ],
    "energyBtn": [
        "⚡ PMF Polarized (-180 mV)",
        "🛑 Depolarized Envelope"
    ],
    "upstream": "Cytoplasmic Lipid II & LPS Biosynthesis + SecYEG/Lpt/BAM Export",
    "coupling": "Gram(−) OM+Thin PG (2OMF) vs Gram(+) Thick PG+WTA vs Archaeal S-Layer",
    "downstream": "Mechanical Turgor Resistance (2–20 atm) & Selective Permeability Barrier",
    "kinetics": [
        [
            "GRAM(−) MUREIN",
            "3–6 nm (1–3 layers)"
        ],
        [
            "GRAM(+) MUREIN",
            "30–80 nm (20+ layers)"
        ],
        [
            "PORIN CUTOFF",
            "OmpF < 600 Da (2OMF)"
        ],
        [
            "ARCHAEAL LIPIDS",
            "Isoprenoid Ether Monolayer"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Env_GN_InnerMembrane",
            "name": "Gram(−) Inner Membrane",
            "badge": "GN-IM",
            "color": "#06D6A0",
            "desc": "The Gram-negative cytoplasmic inner membrane is a symmetric phospholipid bilayer (75% POPE, 20% POPG, 5% cardiolipin) that houses the respiratory chain, ATP synthases, and SecYEG translocons while maintaining the -180 mV proton motive force.",
            "dissocVector": [
                -4.2,
                -3.0,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_GN_Peptidoglycan",
            "name": "Gram(−) Thin Peptidoglycan",
            "badge": "GN-PG",
            "color": "#E76F51",
            "desc": "Suspended in the oxidizing periplasm, the Gram-negative murein sacculus is only 1 to 3 layers thick (3–6 nm). Composed of GlcNAc–MurNAc glycan chains cross-linked by D-Ala→meso-DAP peptide bridges, this thin elastic mesh absorbs 3–5 atm of osmotic turgor pressure.",
            "dissocVector": [
                -4.2,
                -0.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Env_GN_Lpp_Staples",
            "name": "Braun's Lipoprotein (Lpp)",
            "badge": "Lpp",
            "color": "#FFB703",
            "desc": "Braun's Lipoprotein (Lpp, PDB: 1EQ7) is the most abundant protein in E. coli (~500,000 copies). Arranged as α-helical coiled-coil trimers, its C-terminal lysine is covalently stapled to peptidoglycan while its N-terminal lipid tail embeds in the outer membrane, preventing outer membrane blebbing.",
            "dissocVector": [
                -4.2,
                1.0,
                -1.5
            ]
        },
        {
            "meshName": "Piece_Env_GN_OuterMembrane",
            "name": "Gram(−) Asymmetric LPS OM",
            "badge": "GN-OM",
            "color": "#0077B6",
            "desc": "The Gram-negative outer membrane is a uniquely asymmetric lipid bilayer: its inner leaflet is phospholipid, whereas its outer leaflet is packed with Lipopolysaccharide (LPS)—whose Mg²⁺-bridged Lipid A and O-antigen brush block hydrophobic antibiotics, bile salts, and detergents.",
            "dissocVector": [
                -4.2,
                3.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_GN_OmpF_Porin",
            "name": "OmpF Trimeric β-Barrel Porin",
            "badge": "OmpF",
            "color": "#3A86FF",
            "desc": "OmpF (PDB: 2OMF) is a homotrimeric 16-stranded antiparallel β-barrel porin embedded in the outer membrane. Its eyelet constriction loop (L3) forms a water-filled sieve that allows passive diffusion of hydrophilic nutrients (<600 Da) such as sugars, ions, and amino acids.",
            "dissocVector": [
                -4.2,
                4.5,
                1.8
            ]
        },
        {
            "meshName": "Piece_Env_GP_PlasmaMembrane",
            "name": "Gram(+) Cytoplasmic Membrane",
            "badge": "GP-IM",
            "color": "#06D6A0",
            "desc": "The Gram-positive cytoplasmic membrane is a single robust phospholipid bilayer that bears the entire electrochemical gradient and anchors lipid-linked cell wall precursors (Lipid II) and lipoteichoic acids.",
            "dissocVector": [
                0.0,
                -3.0,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_GP_ThickMurein",
            "name": "Gram(+) Multi-Layer Murein Wall",
            "badge": "GP-PG",
            "color": "#E76F51",
            "desc": "Lacking an outer membrane, Gram-positive bacteria construct a massive 30-to-80-nm-thick peptidoglycan wall (20–40 cross-linked layers). This dense exoskeleton withstands enormous internal turgor pressures of 15 to 25 atmospheres—comparable to a truck tire.",
            "dissocVector": [
                0.0,
                1.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_GP_TeichoicAcids",
            "name": "Wall & Lipoteichoic Acids",
            "badge": "WTA",
            "color": "#9D4EDD",
            "desc": "Wall Teichoic Acids (WTA, covalently linked to MurNAc) and Lipoteichoic Acids (LTA, anchored in the membrane) are anionic poly-glycerol/ribitol-phosphate polymers that thread through the Gram-positive wall like steel rebar, scavenging Mg²⁺ ions and regulating autolysin enzymes.",
            "dissocVector": [
                0.0,
                4.0,
                1.6
            ]
        },
        {
            "meshName": "Piece_Env_AR_EtherMembrane",
            "name": "Archaeal Isoprenoid Ether Membrane",
            "badge": "AR-IM",
            "color": "#2A9D8F",
            "desc": "Archaeal membranes replace ester-linked fatty acids with branched phytanyl or membrane-spanning biphytanyl (tetraether) isoprenoid chains joined to sn-glycerol-1-phosphate by chemically unbreakable ether bonds, enabling survival in boiling acid springs (>100°C, pH 1).",
            "dissocVector": [
                4.2,
                -2.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_AR_SLayer",
            "name": "Archaeal Crystalline S-Layer",
            "badge": "S-Lyr",
            "color": "#00F5D4",
            "desc": "Lacking peptidoglycan (murein), most Archaea armor their exterior with a paracrystalline Surface Layer (S-layer) of hexagonal or tetragonal glycoprotein tiles (PDB: 3VMA/S-layer) that self-assemble into a porous 2D molecular chainmail.",
            "dissocVector": [
                4.2,
                2.8,
                0.0
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Gram-Negative Diderm Sandwich",
            "desc": "Inner membrane, thin 3-nm periplasmic peptidoglycan, and Lpp staples (1EQ7)",
            "spoken": "Stage one: The Gram-Negative Diderm Sandwich. On the left, Gram-negative bacteria like Escherichia coli enclose their cytoplasm with a double-membrane envelope. Between the inner membrane and outer membrane lies the periplasmic space, containing a thin three-nanometer peptidoglycan mesh covalently stapled to the outer membrane by half a million copies of Braun's lipoprotein.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Env_GN_InnerMembrane"
        },
        {
            "step": 2,
            "title": "2. Asymmetric LPS Shield & OmpF Porins",
            "desc": "Outer membrane LPS blocks toxins while OmpF trimers (2OMF) sieve nutrients <600 Da",
            "spoken": "Stage two: Asymmetric LPS Shield and OmpF Porins. The Gram-negative outer membrane acts as a selective chemical fortress. Its outer leaflet is paved with tightly packed lipopolysaccharide chains that exclude hydrophobic drugs, while trimeric sixteen-stranded OmpF beta-barrel porins act as molecular sieves for small water-soluble nutrients under six hundred daltons.",
            "color": "#E76F51",
            "targetPiece": "Piece_Env_GN_Peptidoglycan"
        },
        {
            "step": 3,
            "title": "3. Gram-Positive Thick-Murein Fortress",
            "desc": "Monoderm envelope with a 40–80 nm multi-layered peptidoglycan wall (20 atm turgor)",
            "spoken": "Stage three: The Gram-Positive Thick-Murein Fortress. In the center, Gram-positive bacteria lack an outer membrane entirely. Instead, above a single cytoplasmic membrane, they construct a towering forty-to-eighty-nanometer-thick wall of twenty to forty cross-linked peptidoglycan layers capable of resisting twenty atmospheres of internal osmotic pressure.",
            "color": "#FFB703",
            "targetPiece": "Piece_Env_GN_Lpp_Staples"
        },
        {
            "step": 4,
            "title": "4. Teichoic Acid Rebar & Cation Scavenging",
            "desc": "Negatively charged WTA and LTA polymers reinforce the Gram-positive wall",
            "spoken": "Stage four: Teichoic Acid Rebar. Threading vertically through the thick Gram-positive peptidoglycan are negatively charged Wall Teichoic Acids and membrane-anchored Lipoteichoic Acids. Like steel rebar in reinforced concrete, they stiffen the cell wall, chelate magnesium ions, and guide cell-division enzymes.",
            "color": "#0077B6",
            "targetPiece": "Piece_Env_GN_OuterMembrane"
        },
        {
            "step": 5,
            "title": "5. Archaeal Ether Lipids & Crystalline S-Layer",
            "desc": "Isoprenoid ether-linked membrane topped by hexagonal S-layer glycoprotein armor",
            "spoken": "Stage five: Archaeal Ether Lipids and Crystalline S-Layer. On the right, Archaea dispense with peptidoglycan altogether. Their membrane is forged from branched isoprenoid chains attached via heat-proof ether bonds, armored on the outside by a self-assembling hexagonal crystal lattice of S-layer glycoproteins built to survive extreme temperatures and acidity.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Env_GN_OmpF_Porin"
        }
    ],
    "analogy": "Compare the three great prokaryotic cell wall blueprints to three styles of architectural armor: (1) Gram-Negative bacteria (like E. coli) wear 'spaced composite tank armor'—a thin chainmail vest (3-nm peptidoglycan) suspended between an inner lipid wetsuit and an outer chemical-deflecting shield (LPS outer membrane) bolted down by Lpp rivets; (2) Gram-Positive bacteria (like B. subtilis) wear 'heavy medieval plate mail'—no outer membrane, but a massive 40-nm-thick multi-layered peptidoglycan fortress reinforced with negatively charged teichoic acid rebar; and (3) Archaea wear 'interlocking crystal dragon scales'—heat-proof ether-linked lipid membranes tiled on the outside with a self-assembling crystalline S-layer."
},
  motility_modes: {
    "id": "motility_modes",
    "title": "PROKARYOTIC MOTILITY MODES: PILI, ARCHAELLUM & GLIDING",
    "subtitle": "Comparative biomechanics of Type IV pilus grappling-hook twitching, ATP-driven archaeal rotation, and flavobacterial gliding tracks",
    "scaleTag": "COMPARATIVE NANOMACHINE BIOMECHANICS • PDB: 3JC8 / 6W6M / 5O4U",
    "glb": "/prokaryote/models/motility_modes.glb",
    "pdb": "3JC8, 6W6M, 5O4U",
    "pronounce": "[proh-KAIR-ee-AHT-ik moh-TIL-ih-tee MOHDZ]",
    "sliderLabel": "LOCOMOTION FORCE / SPEED:",
    "sliderUnit": "pN Stall Force",
    "sliderMin": 20,
    "sliderMax": 150,
    "sliderDefault": 110,
    "inhibitorBtn": [
        "☣️ ΔpilT Retraction Block",
        "🛡️ Active Grappling & Gliding"
    ],
    "energyBtn": [
        "⚡ ATP + PMF Coupled",
        "🛑 Energy Uncoupled"
    ],
    "upstream": "PilB/PilT Hexamer ATP Hydrolysis, FlaI Archaeal ATPase & GldLM Proton Channel",
    "coupling": "PilA Extension/Retraction (110 pN) + FlaB Rotation + SprB Conveyor Track",
    "downstream": "Surface Twitching, Archaeal Swimming & Helical Surface Gliding (2 µm/s)",
    "kinetics": [
        [
            "T4P STALL FORCE",
            ">100 pN (Strongest Motor)"
        ],
        [
            "ARCHAELLUM FUEL",
            "Direct ATP Hydrolysis (FlaI)"
        ],
        [
            "GLIDING SPEED",
            "2.0 µm/s (SprB Conveyor)"
        ],
        [
            "SECRETIN PORE",
            "PilQ Dodecamer (3JC8)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Mot_T4P_PilBT_ATPase",
            "name": "PilB / PilT Hexameric ATPase",
            "badge": "PilBT",
            "color": "#FFB703",
            "desc": "At the cytoplasmic base of the Type IV pilus sits a pair of antagonistic hexameric AAA+ ATPases: PilB hydrolyzes ATP to thrust PilA subunits upward to extend the pilus fiber, while PilT replaces PilB to wrench subunits back into the membrane, generating >100 pN of retraction force—the strongest biological motor per unit mass.",
            "dissocVector": [
                -4.2,
                -3.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_T4P_PilMNO_Alignment",
            "name": "PilMNO Inner Membrane Cage",
            "badge": "PilMN",
            "color": "#06D6A0",
            "desc": "The PilM–PilN–PilO–PilP alignment cage spans the inner membrane and periplasm, acting as a stationary stator housing and transmission shaft that couples cytoplasmic PilB/PilT rotary conformational waves to the PilQ outer membrane pore.",
            "dissocVector": [
                -4.2,
                -1.0,
                1.2
            ]
        },
        {
            "meshName": "Piece_Mot_T4P_PilQ_Secretin",
            "name": "PilQ Outer Membrane Secretin",
            "badge": "PilQ",
            "color": "#0077B6",
            "desc": "PilQ (PDB: 3JC8) is a massive dodecameric outer membrane secretin channel with dual periplasmic gating diaphragms that swing open to allow the 6-nm PilA grappling filament to shoot out and retract without leaking periplasmic proteins.",
            "dissocVector": [
                -4.2,
                1.5,
                -1.0
            ]
        },
        {
            "meshName": "Piece_Mot_T4P_PilA_Filament",
            "name": "PilA Type IV Pilus Grappling Fiber",
            "badge": "PilA",
            "color": "#3A86FF",
            "desc": "The Type IV pilus filament is a helical polymer of lollipop-shaped PilA pilin subunits whose hydrophobic N-terminal α-helices pack into the core while their globular C-terminal heads bind solid surfaces, host cells, or extracellular DNA.",
            "dissocVector": [
                -4.2,
                4.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_Arch_FlaIJ_ATPase",
            "name": "Archaeal FlaI–FlaJ ATPase Base",
            "badge": "FlaIJ",
            "color": "#F77F00",
            "desc": "Unlike the bacterial flagellum (which is a hollow Type III secretion needle powered by protons), the archaeal archaellum is driven at its base by the hexameric FlaI AAA+ ATPase and FlaJ integral membrane platform, converting chemical ATP hydrolysis directly into rotary torque.",
            "dissocVector": [
                0.0,
                -3.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_Arch_SLayer_Anchor",
            "name": "Archaeal S-Layer Stator Bushing",
            "badge": "FlaF",
            "color": "#2A9D8F",
            "desc": "Because Archaea lack a peptidoglycan P-ring or outer membrane L-ring, the periplasmic stator proteins FlaF and FlaG anchor the rotating archaellum complex directly into the paracrystalline hexagonal S-layer.",
            "dissocVector": [
                0.0,
                0.0,
                1.2
            ]
        },
        {
            "meshName": "Piece_Mot_Arch_Filament",
            "name": "FlaB Archaeal Helical Filament",
            "badge": "FlaB",
            "color": "#9D4EDD",
            "desc": "The archaeal FlaB filament (PDB: 6W6M) is structurally homologous to a Type IV pilus—it is a solid, non-hollow helical rod assembled from the base up and heavily N-glycosylated on its exterior to resist extreme heat and salinity.",
            "dissocVector": [
                0.0,
                3.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_Glide_GldLM_Motor",
            "name": "GldL–GldM Proton Rotary Motor",
            "badge": "GldLM",
            "color": "#E63946",
            "desc": "In Bacteroidetes (such as Flavobacterium johnsoniae), the GldL–GldM complex (PDB: 5O4U) forms an asymmetric 5:2 transmembrane rotary proton motor where 5 GldL subunits conduct protons to spin a central pair of 180-Å periplasmic GldM stalks.",
            "dissocVector": [
                4.2,
                -2.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_Glide_SprB_Track",
            "name": "SprB Adhesin Rack-and-Pinion Track",
            "badge": "SprB",
            "color": "#00F5D4",
            "desc": "Driven by the spinning GldLM motor and Type IX Secretion System, the 640-kDa surface adhesin SprB rides along a closed helical conveyor belt track on the outer membrane at 2 µm/s, gripping the underlying glass or tissue substrate like a tank tread.",
            "dissocVector": [
                4.2,
                2.5,
                1.2
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Type IV Pilus Grappling-Hook Extension (PilB)",
            "desc": "Hexameric PilB ATPase polymerizes inner-membrane PilA subunits into a surface fiber",
            "spoken": "Stage one: Type IV Pilus Grappling-Hook Extension. On the left is the bacterial twitching motility apparatus. At the cytoplasmic base, the hexameric PilB ATPase hydrolyzes ATP to scoop PilA subunits out of the inner membrane and polymerize them upward through the PilMNO alignment cage and PilQ outer membrane secretin.",
            "color": "#FFB703",
            "targetPiece": "Piece_Mot_T4P_PilBT_ATPase"
        },
        {
            "step": 2,
            "title": "2. >100 pN PilT Winch Retraction (Twitching)",
            "desc": "PilT ATPase disassembles PilA at the base, pulling the cell forward with >100 pN",
            "spoken": "Stage two: High-Force PilT Winch Retraction. Once the extended PilA grappling cable latches onto a surface, the antagonistic hexameric motor PilT docks at the base. PilT rapidly disassembles the pilus back into the membrane, winching the entire bacterial cell forward with over one hundred piconewtons of tension.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Mot_T4P_PilMNO_Alignment"
        },
        {
            "step": 3,
            "title": "3. PilQ Dodecameric Outer Membrane Secretin (3JC8)",
            "desc": "12-subunit outer membrane β-barrel channel with gated periplasmic diaphragms",
            "spoken": "Stage three: The PilQ Outer Membrane Secretin Gate. Cryo-EM structure 3JC8 reveals how the twelve-subunit PilQ secretin forms an armored nozzle across the outer membrane, opening its internal periplasmic gates only when the PilA filament extends or retracts.",
            "color": "#0077B6",
            "targetPiece": "Piece_Mot_T4P_PilQ_Secretin"
        },
        {
            "step": 4,
            "title": "4. The Archaeal ATP-Driven Archaellum (6W6M)",
            "desc": "Evolutionarily distinct from flagella: FlaI hydrolyzes ATP to spin a solid FlaB rod",
            "spoken": "Stage four: The Archaeal ATP-Driven Archaellum. In the center is a remarkable example of convergent evolution: the archaeal archaellum. Built from Type IV pilus-like components rather than bacterial flagellar rings, its hexameric FlaI base burns ATP directly to spin a solid, glycosylated FlaB propeller anchored to the archaeal S-layer.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Mot_T4P_PilA_Filament"
        },
        {
            "step": 5,
            "title": "5. Flavobacterial GldLM–SprB Gliding Tank Tread (5O4U)",
            "desc": "Asymmetric 5:2 GldLM proton motor drives SprB adhesins along a helical surface track",
            "spoken": "Stage five: Flavobacterial Gliding Tank Treads. On the right, gliding bacteria move smoothly across surfaces without any pili or flagella. An asymmetric five-to-two GldL-GldM proton motor in the inner membrane spins a periplasmic drive shaft that propels giant SprB adhesin cleats along a closed helical conveyor belt on the cell exterior.",
            "color": "#F77F00",
            "targetPiece": "Piece_Mot_Arch_FlaIJ_ATPase"
        }
    ],
    "analogy": "Prokaryotes evolved three radically different mechanical propulsion engines beyond the standard bacterial flagellar propeller: (1) Type IV Pili work like 'Spider-Man's motorized grappling hooks'—firing out a sticky protein cable, anchoring to a surface, and winching it back in with PilT at >100 piconewtons of force; (2) the Archaeal Archaellum is an 'electric outboard motor'—a solid rotary filament evolved from Type IV pili but spun directly by intracellular ATP hydrolysis rather than proton flux; and (3) Flavobacterial Gliding works like 'Snowcat tank treads'—a proton motor drives adhesin cleats along a closed helical conveyor belt across the cell surface."
},
  microcompartment: {
    "id": "microcompartment",
    "title": "BACTERIAL MICROCOMPARTMENT (BMC) & CARBOXYSOME SHELL",
    "subtitle": "Icosahedral 202-subunit proteinaceous organelle concentrating CO₂ around RuBisCO and carbonic anhydrase while blocking O₂",
    "scaleTag": "ICOSAHEDRAL METABOLIC ORGANELLE • PDB: 7O04 / 3I82 (2.80 Å)",
    "glb": "/prokaryote/models/microcompartment_7o04.glb",
    "pdb": "7O04, 3I82",
    "pronounce": "[kahr-BAHK-see-sohm MY-kroh-kahm-pahrt-ment]",
    "sliderLabel": "BICARBONATE (HCO₃⁻) INFLUX:",
    "sliderUnit": "mM Cytosolic",
    "sliderMin": 1,
    "sliderMax": 50,
    "sliderDefault": 25,
    "inhibitorBtn": [
        "☣️ Vertex Uncapped (CO₂ Leak)",
        "🛡️ Sealed Icosahedron"
    ],
    "energyBtn": [
        "⚡ Carbonic Anhydrase Active",
        "🛑 CA Inhibited"
    ],
    "upstream": "Cytosolic Bicarbonate (HCO₃⁻) Influx via Positively Charged BMC-H/T Pores",
    "coupling": "Carbonic Anhydrase (HCO₃⁻ → CO₂) + RuBisCO Carboxylation of RuBP",
    "downstream": "2 molecules of 3-Phosphoglycerate (3-PGA) → Calvin-Benson-Bassham Cycle",
    "kinetics": [
        [
            "SHELL SYMMETRY",
            "T=9 Icosahedron (202 oligomers)"
        ],
        [
            "PORE SELECTIVITY",
            "+Arg/Lys Pore (HCO₃⁻ in, O₂ out)"
        ],
        [
            "CARGO ENZYMES",
            "RuBisCO + Carbonic Anhydrase"
        ],
        [
            "PDB STRUCTURE",
            "7O04 (Haliangium BMC Shell)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_BMC_Hexamer_Facets",
            "name": "BMC-H Hexameric Shell Facets",
            "badge": "BMC-H",
            "color": "#0077B6",
            "desc": "BMC-H shell proteins (Pfam00936, PDB: 7O04) assemble into flat cyclic hexamers that tile the 20 triangular facets of the icosahedron. Each hexamer features a 4–6 Å central pore lined with positively charged Lysine/Arginine sidechains that create an electrostatic funnel for anionic bicarbonate (HCO₃⁻).",
            "dissocVector": [
                0.0,
                3.8,
                2.5
            ]
        },
        {
            "meshName": "Piece_BMC_Trimer_GatedPores",
            "name": "BMC-T Trimeric Pseudohexamer Pores",
            "badge": "BMC-T",
            "color": "#00F5D4",
            "desc": "BMC-T proteins contain tandem Pfam00936 domains that trimerize into pseudohexamers integrated within the facet sheets. Their central 12–14 Å pores switch allosterically between open and closed conformations to pass larger metabolites such as ribulose-1,5-bisphosphate (RuBP) and 3-phosphoglycerate (3-PGA).",
            "dissocVector": [
                3.8,
                1.5,
                2.0
            ]
        },
        {
            "meshName": "Piece_BMC_Pentamer_Vertices",
            "name": "BMC-P Pentameric Vertex Caps",
            "badge": "BMC-P",
            "color": "#FFB703",
            "desc": "BMC-P vertex proteins (Pfam03319) form 12 dome-shaped pentamers positioned at the 12 five-fold vertices of the icosahedron. Just like the 12 pentagons required to close a geodesic dome or soccer ball, BMC-P caps introduce the exact Gaussian curvature needed to seal the shell against CO₂ leakage.",
            "dissocVector": [
                -3.8,
                2.8,
                2.0
            ]
        },
        {
            "meshName": "Piece_BMC_Cargo_Enzymes",
            "name": "Encapsulated RuBisCO Holoenzyme Core",
            "badge": "RuBis",
            "color": "#9D4EDD",
            "desc": "Packed into a paracrystalline array inside the lumen are dozens of L₈S₈ RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase, PDB: 3I82) holoenzymes. Because RuBisCO is notoriously slow (k_cat ≈ 3–10 s⁻¹) and easily confused by O₂, encapsulating it inside the BMC shell saturates its active sites with CO₂.",
            "dissocVector": [
                0.0,
                -1.5,
                -1.5
            ]
        },
        {
            "meshName": "Piece_BMC_CarbonicAnhydrase",
            "name": "Carbonic Anhydrase Dehydratase",
            "badge": "CA",
            "color": "#E63946",
            "desc": "Co-encapsulated alongside RuBisCO is the Zn²⁺ metalloenzyme Carbonic Anhydrase (CA), which catalyzes the ultra-fast dehydration of imported bicarbonate (HCO₃⁻ + H⁺ ⇌ CO₂ + H₂O) at >10⁵ s⁻¹, generating a localized high-pressure CO₂ micro-atmosphere inside the protein shell.",
            "dissocVector": [
                1.8,
                -2.5,
                1.8
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. BMC-H Hexamer Facet Tiling & Electrostatic Pores",
            "desc": "Flat cyclic hexamers (7O04) form the 20 icosahedral faces with +Arg/Lys HCO₃⁻ pores",
            "spoken": "Stage one: BMC-H Hexamer Facets and Electrostatic Pores. Unlike eukaryotic organelles bounded by lipid bilayers, bacterial microcompartments are constructed entirely from interlocking protein tiles. Flat cyclic BMC-H hexamers tile the twenty triangular faces of the icosahedron, each pierced by a positively charged central pore that selectively attracts negatively charged bicarbonate ions from the cytosol.",
            "color": "#0077B6",
            "targetPiece": "Piece_BMC_Hexamer_Facets"
        },
        {
            "step": 2,
            "title": "2. BMC-T Allosteric Gated Trimers",
            "desc": "Pseudohexameric trimers open 14 Å gates for RuBP import and 3-PGA export",
            "spoken": "Stage two: BMC-T Allosteric Gated Pores. Interspersed among the standard hexamers are BMC-T trimeric pseudohexamers. These specialized tiles act as airlock doors, opening a wider fourteen-angstrom central channel to admit five-carbon RuBP substrates and export newly fixed three-phosphoglycerate products.",
            "color": "#00F5D4",
            "targetPiece": "Piece_BMC_Trimer_GatedPores"
        },
        {
            "step": 3,
            "title": "3. BMC-P Pentameric Vertex Caps & Gas Seal",
            "desc": "12 pentameric caps seal the five-fold vertices, preventing CO₂ escape and O₂ entry",
            "spoken": "Stage three: BMC-P Pentameric Vertex Caps. By Euler's theorem, flat hexagons alone cannot close into a sphere without twelve pentagons. Twelve golden BMC-P pentamers cap the five-fold vertices of the shell, locking the icosahedron into a gas-tight chamber that blocks uncharged oxygen gas from entering and stops carbon dioxide from leaking out.",
            "color": "#FFB703",
            "targetPiece": "Piece_BMC_Pentamer_Vertices"
        },
        {
            "step": 4,
            "title": "4. Carbonic Anhydrase CO₂ Supercharging",
            "desc": "Encapsulated Zn²⁺ carbonic anhydrase rapidly converts HCO₃⁻ into trapped CO₂ gas",
            "spoken": "Stage four: Carbonic Anhydrase CO2 Supercharging. Once bicarbonate ions pass through the shell pores into the interior lumen, co-encapsulated zinc carbonic anhydrase enzymes instantly dehydrate them into dissolved carbon dioxide gas, elevating the internal CO2 concentration more than tenfold above ambient levels.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_BMC_Cargo_Enzymes"
        },
        {
            "step": 5,
            "title": "5. Paracrystalline RuBisCO Carbon Fixation (3I82)",
            "desc": "Saturated L₈S₈ RuBisCO fixes CO₂ + RuBP into 2 molecules of 3-PGA without photorespiration",
            "spoken": "Stage five: RuBisCO Carbon Fixation Core. Bathed in this concentrated CO2 micro-environment and shielded from competing oxygen, the tightly packed L8S8 RuBisCO holoenzymes carboxylate ribulose-bisphosphate at maximum velocity, exporting two molecules of three-phosphoglycerate to power cellular biomass synthesis.",
            "color": "#E63946",
            "targetPiece": "Piece_BMC_CarbonicAnhydrase"
        }
    ],
    "analogy": "A Bacterial Microcompartment (like the Carboxysome) is a 'molecular turbocharger and cleanroom built entirely out of protein LEGO tiles': whereas eukaryotes use lipid membranes to build organelles, bacteria snap together 202 flat hexameric (BMC-H), gated trimeric (BMC-T), and vertex pentameric (BMC-P) protein tiles into a soccer-ball icosahedron. Its positively charged central pores suck in negatively charged bicarbonate (HCO₃⁻) while blocking uncharged oxygen (O₂) and trapping CO₂ gas inside with RuBisCO—boosting carbon fixation efficiency by 10-fold!"
},
  chemosensory_mcp: {
    "id": "chemosensory_mcp",
    "title": "CHEMOSENSORY TRANSDUCTION ARRAY (MCP–CHEW–CHEA)",
    "subtitle": "Cooperative hexagonal trimers-of-dimers receptor lattice amplifying nanomolar chemical gradients to switch flagellar rotation",
    "scaleTag": "CRYO-ET HEXAGONAL SIGNALING LATTICE • PDB: 6S1K / 3JA6",
    "glb": "/prokaryote/models/chemosensory_6s1k.glb",
    "pdb": "6S1K, 3JA6",
    "pronounce": "[kee-moh-SEN-suh-ree M-C-P uh-RAY]",
    "sliderLabel": "ATTRACTANT GRADIENT (L-Asp):",
    "sliderUnit": "µM Ligand",
    "sliderMin": 0,
    "sliderMax": 100,
    "sliderDefault": 15,
    "inhibitorBtn": [
        "☣️ Repellent Spike (Tumble)",
        "🛡️ Attractant Smooth Run"
    ],
    "energyBtn": [
        "⚡ CheA Autophosphorylation",
        "🛑 ATP Depleted"
    ],
    "upstream": "Periplasmic Attractant/Repellent Binding + CheR/CheB Methylation Memory",
    "coupling": "2 Å MCP Piston Shift → HAMP Rotation → CheW–CheA Kinase Switch (Hill n ≈ 35)",
    "downstream": "CheY-P Diffusion to Flagellar FliM Switch (CCW Run vs CW Tumble)",
    "kinetics": [
        [
            "HILL COOPERATIVITY",
            "n ≈ 35 (35-fold Amplification)"
        ],
        [
            "PISTON DISPLACEMENT",
            "2.0 Å Downward Helix α4 Shift"
        ],
        [
            "MEMORY ADAPTATION",
            "CheR Methylase / CheB Esterase"
        ],
        [
            "BASEPLATE LATTICE",
            "12 nm Hexagonal P6 Array (6S1K)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_6S1K_Periplasmic_Sensors",
            "name": "Periplasmic 4-Helix Ligand Sensors",
            "badge": "Sens",
            "color": "#FFB703",
            "desc": "Extending into the periplasmic space, the homodimeric 4-helix bundles of Tar (aspartate/maltose receptor) and Tsr (serine receptor) bind attractant or repellent molecules at the dimer interface with sub-micromolar sensitivity.",
            "dissocVector": [
                0.0,
                4.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_6S1K_Inner_Membrane",
            "name": "Polar Inner Membrane Bilayer",
            "badge": "IM",
            "color": "#06D6A0",
            "desc": "Embedded in the curved cytoplasmic membrane at the cell pole, transmembrane helices TM1 and TM2 transmit conformational signals across the lipid bilayer via an asymmetric 2.0-Å downward piston sliding of helix α4/TM2.",
            "dissocVector": [
                0.0,
                2.2,
                -1.5
            ]
        },
        {
            "meshName": "Piece_6S1K_HAMP_Transducer",
            "name": "HAMP Signal Conversion Bundles",
            "badge": "HAMP",
            "color": "#00F5D4",
            "desc": "Immediately beneath the inner membrane sits the parallel 4-helix HAMP domain (Histidine kinases, Adenylyl cyclases, Methyl-accepting proteins, Phosphatases), which acts as a mechanical gearbox converting the 2-Å vertical piston push into a dynamic rotational scissoring of the cytoplasmic stalks.",
            "dissocVector": [
                -2.5,
                0.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_6S1K_MCP_Trimers",
            "name": "MCP Coiled-Coil Trimers-of-Dimers",
            "badge": "MCP",
            "color": "#3A86FF",
            "desc": "Three homodimeric MCP coiled-coil stalks pack together at their membrane-distal hairpin tips into a stable 'trimer-of-dimers' (PDB: 6S1K, 3JA6), forming the vertical pillars of the 200-Å-tall signaling array.",
            "dissocVector": [
                2.5,
                -0.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_6S1K_CheR_CheB_Adaptors",
            "name": "CheR Methyltransferase & CheB",
            "badge": "CheRB",
            "color": "#9D4EDD",
            "desc": "Halfway down the coiled-coil stalks lie 4 to 5 conserved Glutamate residues that serve as the bacterium's chemical memory bank: CheR methylates these glutamates (using SAM) to reset kinase activity upward, while phosphorylated CheB-P demethylates them to adapt to high attractant levels.",
            "dissocVector": [
                -3.5,
                -1.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_6S1K_CheA_CheW_Baseplate",
            "name": "CheA Histidine Kinase & CheW Rings",
            "badge": "CheAW",
            "color": "#F77F00",
            "desc": "At the cytoplasmic baseplate (PDB: 6S1K), CheW adaptor rings and dimeric CheA histidine kinases bridge neighboring receptor trimers into an extended P6 hexagonal lattice, generating a Hill cooperativity coefficient of n ≈ 35.",
            "dissocVector": [
                0.0,
                -3.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_6S1K_CheY_Messengers",
            "name": "Diffusible CheY-P Response Regulators",
            "badge": "CheY-P",
            "color": "#E63946",
            "desc": "When attractants are absent (or repellents bind), CheA autophosphorylates using ATP and transfers the phosphoryl group to diffusible CheY response regulators. Resulting CheY-P diffuses through the cytoplasm to bind FliM on the flagellar C-ring, switching rotation from CCW (run) to CW (tumble).",
            "dissocVector": [
                3.2,
                -4.5,
                2.0
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Periplasmic Ligand Sensing & 2 Å Piston Shift",
            "desc": "Attractant binding to Tar/Tsr periplasmic domains pushes helix TM2 downward by 2.0 Å",
            "spoken": "Stage one: Periplasmic Ligand Sensing and Piston Shift. At the pole of Escherichia coli, transmembrane chemoreceptors such as Tar and Tsr sample the periplasm for amino acids and sugars. Binding of even a nanomolar trace of attractant triggers a subtle two-angstrom downward piston sliding of transmembrane helix two across the inner membrane.",
            "color": "#FFB703",
            "targetPiece": "Piece_6S1K_Periplasmic_Sensors"
        },
        {
            "step": 2,
            "title": "2. HAMP Gearbox Signal Conversion",
            "desc": "Cytoplasmic 4-helix HAMP bundle translates vertical piston motion into rotational twist",
            "spoken": "Stage two: The HAMP Gearbox Transducer. Just inside the cytoplasm, the four-helix HAMP bundle acts as a molecular mechanical converter. It transforms the tiny vertical two-angstrom piston displacement from the membrane into a dynamic rotational scissoring motion that travels two hundred angstroms down the coiled-coil receptor stalk.",
            "color": "#06D6A0",
            "targetPiece": "Piece_6S1K_Inner_Membrane"
        },
        {
            "step": 3,
            "title": "3. Trimers-of-Dimers & Hexagonal Baseplate (6S1K)",
            "desc": "Three MCP dimers converge onto CheA–CheW rings, amplifying signals 35-fold",
            "spoken": "Stage three: Cooperative Trimers-of-Dimers Lattice. Three receptor dimers meet at their cytoplasmic tips and lock into a hexagonal baseplate of CheW coupling rings and CheA histidine kinases. Because the receptors are allosterically wired together like coupled dominoes, one ligand binding event inhibits up to thirty-five neighboring kinases simultaneously.",
            "color": "#00F5D4",
            "targetPiece": "Piece_6S1K_HAMP_Transducer"
        },
        {
            "step": 4,
            "title": "4. CheA Kinase Switch & CheY-P Flagellar Broadcast",
            "desc": "Attractants silence CheA, dropping CheY-P so flagella spin CCW for a smooth run",
            "spoken": "Stage four: Kinase Switching and CheY-P Broadcast. When attractants increase, CheA kinase activity is switched off, allowing phosphatase CheZ to clear phosphorylated CheY-P from the cytoplasm. Without CheY-P bound to the flagellar switch, the motors spin counter-clockwise in a smooth forward run toward the nutrient source.",
            "color": "#3A86FF",
            "targetPiece": "Piece_6S1K_MCP_Trimers"
        },
        {
            "step": 5,
            "title": "5. CheR / CheB Methylation Memory Reset",
            "desc": "CheR methylates and CheB demethylates 4 Glu sites to store a 3-second temporal memory",
            "spoken": "Stage five: CheR and CheB Chemical Memory Adaptation. To swim up a gradient rather than getting stuck at a single concentration, the cell needs short-term memory. Methyltransferase CheR slowly adds methyl groups to four glutamate residues on the receptor stalk while esterase CheB removes them—constantly resetting the receptor's baseline sensitivity over a three-second window.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_6S1K_CheR_CheB_Adaptors"
        }
    ],
    "analogy": "The Chemosensory MCP Array at the bacterial cell pole is a 'phased-array radar dish with short-term chemical memory': thousands of receptors link their bottom tips into a rigid hexagonal honeycomb (CheA/CheW). Because all receptors in a hexagon flip together like coupled dominoes, a tiny 2-Ångström nudge from a single amino acid outside the cell is amplified 35-fold inside! Meanwhile, two enzymes (CheR and CheB) continually add and remove methyl tags on the receptor stalks like a 'cruise-control memory dial', allowing E. coli to compare whether nutrient levels are rising or falling over time."
},
  pili_fimbriae: {
    "id": "pili_fimbriae",
    "title": "CHAPERONE–USHER FIMBRIAE, CURLI AMYLOID & BIOFILM",
    "subtitle": "Donor-strand complemented Type 1 FimA/FimH catch-bond adhesin rod alongside CsgG/CsgA extracellular amyloid biofilm fibers",
    "scaleTag": "CRYO-EM ADHESION & BIOFILM MATRIX • PDB: 6GTO / 1TR7 / 4B0M",
    "glb": "/prokaryote/models/pili_fimbriae_6gto.glb",
    "pdb": "6GTO, 1TR7, 4B0M",
    "pronounce": "[CHAP-er-ohn USH-er FIM-bree-ee & KUR-lee]",
    "sliderLabel": "HYDRODYNAMIC SHEAR STRESS:",
    "sliderUnit": "pN Catch-Bond",
    "sliderMin": 5,
    "sliderMax": 90,
    "sliderDefault": 45,
    "inhibitorBtn": [
        "☣️ D-Mannose Competitive Block",
        "🛡️ Catch-Bond Locked"
    ],
    "energyBtn": [
        "⚡ Donor-Strand Exchange",
        "🛑 Usher Arrested"
    ],
    "upstream": "SecYEG Periplasmic Translocation + DsbA Disulfide Folding",
    "coupling": "FimC–FimD Donor-Strand Exchange (ATP-free) + CsgG Entropy-Driven Secretion",
    "downstream": "Host Mannose Catch-Bond Adhesion & Cross-β Amyloid Biofilm Fortress",
    "kinetics": [
        [
            "FIMH CATCH-BOND",
            "Lifetime increases at 30–60 pN"
        ],
        [
            "ROD HELIX",
            "3.4 subunits/turn, 7 nm width"
        ],
        [
            "CSGG SECRETIN",
            "36-stranded Nonamer (4B0M)"
        ],
        [
            "ENERGY SOURCE",
            "ATP-Free Folding Free Energy"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Pili_Outer_Membrane",
            "name": "Outer Membrane LPS Bilayer",
            "badge": "OM",
            "color": "#0077B6",
            "desc": "The asymmetric lipopolysaccharide outer membrane of E. coli lacks ATP or a proton gradient, requiring outer-membrane pilus and curli machines to power assembly purely through protein-folding free energy and entropic gradients.",
            "dissocVector": [
                0.0,
                -2.5,
                -1.5
            ]
        },
        {
            "meshName": "Piece_Pili_FimC_Chaperone",
            "name": "Periplasmic FimC Chaperone",
            "badge": "FimC",
            "color": "#06D6A0",
            "desc": "In the periplasm, newly exported pilus subunits (FimA, FimF, FimG, FimH) have an incomplete immunoglobulin fold lacking a 7th β-strand. The boomerang-shaped chaperone FimC donates its own G1 β-strand ('Donor-Strand Complementation') to prevent premature aggregation.",
            "dissocVector": [
                -3.5,
                -4.2,
                1.2
            ]
        },
        {
            "meshName": "Piece_Pili_FimD_Usher",
            "name": "FimD 24-Stranded Outer Membrane Usher",
            "badge": "FimD",
            "color": "#2A9D8F",
            "desc": "FimD (PDB: 6GTO) is a 24-stranded outer membrane β-barrel usher with N-terminal periplasmic plug and C-terminal handoff domains. It catalyzes 'Donor-Strand Exchange'—replacing FimC's G1 strand with the N-terminal extension of the next incoming FimA subunit to drive chain growth outward without ATP.",
            "dissocVector": [
                -3.5,
                -1.2,
                1.0
            ]
        },
        {
            "meshName": "Piece_Pili_FimA_Helical_Rod",
            "name": "FimA Helical Pilus Spring Rod",
            "badge": "FimA",
            "color": "#3A86FF",
            "desc": "Polymerized FimA subunits wind into a rigid 7-nm right-handed helical cylinder (3.4 subunits per turn, PDB: 6GTO). Under high hydrodynamic shear stress, the inter-turn hydrogen bonds break sequentially, allowing the rod to uncoil up to 5-fold in length like a constant-force bungee spring.",
            "dissocVector": [
                -3.5,
                2.2,
                0.5
            ]
        },
        {
            "meshName": "Piece_Pili_FimH_CatchBond",
            "name": "FimH Catch-Bond Lectin Tip Adhesin",
            "badge": "FimH",
            "color": "#FFB703",
            "desc": "Mounted at the distal tip of the fimbria, FimH (PDB: 1TR7) consists of a pilin domain and a lectin domain that binds D-mannose glycoproteins on host bladder/intestinal epithelia. Tensile pull separates its two domains, allosterically tightening the mannose pocket into a long-lived 'catch-bond'.",
            "dissocVector": [
                -3.5,
                4.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_Pili_CsgG_Channel",
            "name": "CsgG Nonameric Curli Secretin Pore",
            "badge": "CsgG",
            "color": "#9D4EDD",
            "desc": "CsgG (PDB: 4B0M) is a magnificent 36-stranded nonameric (9-subunit) outer membrane β-barrel secretin containing a 9-Å central constriction ring and a periplasmic cage that guides unfolded curli subunits out of the cell via entropy-driven diffusion.",
            "dissocVector": [
                3.5,
                -1.2,
                1.0
            ]
        },
        {
            "meshName": "Piece_Pili_CsgB_Nucleator",
            "name": "CsgB Surface Amyloid Nucleator",
            "badge": "CsgB",
            "color": "#F77F00",
            "desc": "CsgB is the outer-membrane-tethered minor curli subunit that folds into a β-solenoid template on the cell surface, nucleating the rapid amyloid transition of secreted CsgA monomers.",
            "dissocVector": [
                3.5,
                1.2,
                1.5
            ]
        },
        {
            "meshName": "Piece_Pili_CsgA_Amyloid_Mesh",
            "name": "CsgA Cross-β Curli Biofilm Matrix",
            "badge": "CsgA",
            "color": "#E63946",
            "desc": "Once templated by CsgB, secreted CsgA proteins polymerize into cross-β amyloid curli fibrils—insoluble, protease- and detergent-resistant protein cables that weave with cellulose and eDNA into a protective biofilm fortress.",
            "dissocVector": [
                3.5,
                4.0,
                1.2
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Periplasmic FimC Donor-Strand Complementation",
            "desc": "FimC chaperone donates its G1 β-strand to stabilize incomplete FimA/FimH folds",
            "spoken": "Stage one: Periplasmic Donor-Strand Complementation. Because there is no ATP in the periplasm, the chaperone-usher pathway stores folding energy inside the pilus subunits themselves. Each freshly imported FimA subunit lacks the final beta-strand of its fold; the periplasmic chaperone FimC temporarily lends its own G1 strand to keep the subunit soluble and spring-loaded.",
            "color": "#0077B6",
            "targetPiece": "Piece_Pili_Outer_Membrane"
        },
        {
            "step": 2,
            "title": "2. FimD Usher & ATP-Free Donor-Strand Exchange",
            "desc": "24-stranded FimD barrel swaps the FimC strand for the next subunit's N-extension",
            "spoken": "Stage two: ATP-Free Donor-Strand Exchange at the FimD Usher. At the twenty-four-stranded FimD outer membrane usher pore, the N-terminal tail of an incoming FimA subunit zips into the groove of the previously docked subunit, displacing the FimC chaperone. This zipper reaction releases folding free energy that ratchets the growing pilus outward without consuming a single molecule of ATP.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Pili_FimC_Chaperone"
        },
        {
            "step": 3,
            "title": "3. FimA Helical Shock-Absorber Rod (6GTO)",
            "desc": "Right-handed 7-nm FimA helix uncoils reversibly under fluid shear to cushion force",
            "spoken": "Stage three: The FimA Helical Shock Absorber. Thousands of FimA subunits coil into a seven-nanometer right-handed helical cylinder. When strong fluid flow pushes against the bacterium, the helical turns of the FimA rod uncoil reversibly like a shock absorber, buffering the tensile load on the tip adhesin.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_Pili_FimD_Usher"
        },
        {
            "step": 4,
            "title": "4. FimH Catch-Bond Finger-Trap Adhesion (1TR7)",
            "desc": "Tensile pull separates FimH domains, locking mannose in a high-affinity catch-bond",
            "spoken": "Stage four: FimH Catch-Bond Adhesion. At the very tip sits the two-domain lectin FimH, bound to mannose sugars on host cells. Remarkably, FimH forms a mechanical catch-bond: when fluid shear pulls the pilin domain away from the lectin domain, the binding pocket snaps shut like a Chinese finger trap, gripping tighter under tension.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Pili_FimA_Helical_Rod"
        },
        {
            "step": 5,
            "title": "5. CsgG Nonamer & Curli Cross-β Amyloid Biofilm (4B0M)",
            "desc": "36-stranded CsgG pore extrudes CsgA monomers that nucleate on CsgB into amyloid",
            "spoken": "Stage five: CsgG Secretion and Curli Amyloid Biofilm. Beside the fimbria, the nine-subunit CsgG outer membrane crown extrudes disordered CsgA polypeptides through a nine-angstrom constriction ring. Triggered by the surface nucleator CsgB, CsgA self-assembles into indestructible cross-beta curli amyloid fibers that lock the bacterial community into a mature biofilm.",
            "color": "#FFB703",
            "targetPiece": "Piece_Pili_FimH_CatchBond"
        }
    ],
    "analogy": "Type 1 Fimbriae and Curli fibrils equip E. coli with two ingenious mechanical attachment tools: (1) The FimA/FimH pilus is a 'bungee-cord Chinese finger trap' assembled without any ATP at the outer membrane via Donor-Strand Exchange; when urine or fluid flow pulls on the cell, the FimA helical rod uncoils like a shock absorber while the FimH tip snaps into a tighter 'catch-bond' grip that locks harder the harder you pull! (2) The CsgG/CsgA Curli system is a '3D spider-silk extruder' that secretes disordered protein strands which self-crystallize outside the cell into indestructible cross-β amyloid rebar for biofilms."
},
  nucleoid: {
    "id": "nucleoid",
    "title": "BACTERIAL NUCLEOID & NAP CHROMOSOME COMPACTION",
    "subtitle": "1,000-fold compaction of the 4.6 Mbp chromosome via plectonemic supercoiling, HU/IHF 160° DNA bending, H-NS bridging, and MukBEF",
    "scaleTag": "CHROMOSOMAL ARCHITECTURE • PDB: 1P71 / 3IV5 / 1BNA",
    "glb": "/prokaryote/models/nucleoid_naps.glb",
    "pdb": "1P71, 3IV5, 1BNA",
    "pronounce": "[NOO-klee-oyd N-A-P kuhm-PAK-shuhn]",
    "sliderLabel": "SUPERHELICAL DENSITY (σ):",
    "sliderUnit": "σ Underwinding",
    "sliderMin": -0.09,
    "sliderMax": -0.02,
    "sliderDefault": -0.06,
    "inhibitorBtn": [
        "☣️ Novobiocin Relaxation",
        "🛡️ Compacted Plectonemes"
    ],
    "energyBtn": [
        "⚡ MukBEF SMC Loop Extrusion",
        "🛑 SMC ATPase Paused"
    ],
    "upstream": "DNA Gyrase Negative Supercoiling (σ ≈ -0.06) + Growth-Phase NAP Expression",
    "coupling": "HU/IHF Proline Intercalation (160° Bend) + H-NS Bridging + MukBEF Clamping",
    "downstream": "10-kbp Topological Loops, Xenogeneic Silencing & Chromosome Segregation",
    "kinetics": [
        [
            "COMPACTION RATIO",
            "~1,000-fold (1.5 mm → 1 µm)"
        ],
        [
            "IHF/HU BEND ANGLE",
            "160°–180° Hairpin U-Turn (1P71)"
        ],
        [
            "H-NS SILENCING",
            "Bridges AT-Rich Foreign DNA"
        ],
        [
            "LOOP DOMAINS",
            "~400 Supercoiled 10-kbp Loops"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Nuc_Plectoneme_DNA",
            "name": "Plectonemic Supercoiled DNA Domain",
            "badge": "DNA",
            "color": "#F77F00",
            "desc": "The 4.6-million-base-pair circular chromosome of E. coli is maintained at a negative superhelical density of σ ≈ -0.06 by DNA Gyrase, causing the B-DNA duplex (PDB: 1BNA) to writhe upon itself into ~400 interwound plectonemic supercoil loops of ~10 kilobases each.",
            "dissocVector": [
                0.0,
                0.0,
                -2.0
            ]
        },
        {
            "meshName": "Piece_Nuc_HU_Dimers",
            "name": "HU / IHF Sharp 160° DNA Bending Clamp",
            "badge": "IHF",
            "color": "#00F5D4",
            "desc": "Integration Host Factor (IHF, PDB: 1P71) and its abundant homolog HU (~50,000 copies/cell) are heterodimeric ribbon-helix-helix proteins that wrap the DNA minor groove and intercalate two conserved Proline β-arms between base pairs, forcing a dramatic 160°–180° hairpin U-turn at plectoneme apices.",
            "dissocVector": [
                -3.5,
                3.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_Nuc_HNS_Bridge",
            "name": "H-NS Parallel Filament DNA Bridge",
            "badge": "H-NS",
            "color": "#9D4EDD",
            "desc": "Histone-like Nucleoid Structuring protein (H-NS, PDB: 3IV5) polymerizes via head-to-head and tail-to-tail coiled-coil interfaces into a rigid filament displaying two opposing AT-hook DNA-binding domains. It bridges two parallel DNA duplexes inside plectonemes to trap RNA Polymerase and silence horizontally acquired AT-rich virulence genes.",
            "dissocVector": [
                3.5,
                2.2,
                1.5
            ]
        },
        {
            "meshName": "Piece_Nuc_Fis_Benders",
            "name": "Fis Exponential-Phase Crossover Bender",
            "badge": "Fis",
            "color": "#3A86FF",
            "desc": "Factor for Inversion Stimulation (Fis) is the most abundant nucleoid-associated protein during rapid exponential growth (~60,000 dimers/cell). It binds DNA crossovers at 60°–75° angles to stabilize branched plectoneme junctions while activating ribosomal RNA promoters.",
            "dissocVector": [
                -3.2,
                -2.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_Nuc_MukBEF_Clamp",
            "name": "MukBEF SMC Condensin Root Ring",
            "badge": "MukB",
            "color": "#E63946",
            "desc": "MukBEF is the bacterial Structural Maintenance of Chromosomes (SMC) condensin complex. Its 50-nm V-shaped coiled-coil arms and ATPase heads clamp the bases of supercoiled chromosomal loops, organizing the chromosome into four insulated macrodomains (Ori, Ter, Left, Right) for faithful segregation.",
            "dissocVector": [
                0.0,
                -4.2,
                1.8
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Plectonemic Negative Supercoiling (σ ≈ -0.06)",
            "desc": "1.5-mm circular chromosome writhes into ~400 interwound 10-kbp plectoneme loops",
            "spoken": "Stage one: Plectonemic Negative Supercoiling. An unfolded Escherichia coli chromosome is one point five millimeters long—over a thousand times longer than the cell itself. To achieve a thousand-fold compaction without histones, DNA Gyrase introduces negative supercoils that cause the double helix to twist upon itself like a telephone cord into four hundred plectonemic loop domains.",
            "color": "#F77F00",
            "targetPiece": "Piece_Nuc_Plectoneme_DNA"
        },
        {
            "step": 2,
            "title": "2. HU & IHF 160° Proline Hairpin Bending (1P71)",
            "desc": "HU/IHF dimers insert proline β-arms into the minor groove to fold sharp U-turns",
            "spoken": "Stage two: HU and IHF Hairpin Bending. At the tight apex of a supercoiled loop, Integration Host Factor and HU dimers embrace the DNA minor groove. As shown in crystal structure 1P71, two beta-ribbon arms insert conserved proline residues directly between stacked base pairs, kinking the stiff DNA duplex into a razor-sharp one-hundred-sixty-degree U-turn.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Nuc_HU_Dimers"
        },
        {
            "step": 3,
            "title": "3. H-NS Parallel Filament Bridging & Silencing (3IV5)",
            "desc": "H-NS oligomers zip two DNA stems together, silencing foreign AT-rich genes",
            "spoken": "Stage three: H-NS Filament Bridging and Xenogeneic Silencing. Along the parallel stems of the plectoneme, H-NS proteins link head-to-head and tail-to-tail into a molecular zipper. By simultaneously gripping two adjacent DNA duplexes, H-NS bridges the loop shut, physically blocking RNA Polymerase and silencing foreign viral or pathogenicity genes.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Nuc_HNS_Bridge"
        },
        {
            "step": 4,
            "title": "4. Fis Crossover Stabilization in Exponential Growth",
            "desc": "60,000 Fis dimers clamp DNA branch nodes and boost rRNA transcription",
            "spoken": "Stage four: Fis Crossover Clamping. During rapid exponential growth, sixty thousand dimers of the protein Fis flood the nucleoid. Fis binds at sixty-degree DNA bends and three-way branch crossovers, stabilizing plectoneme junctions while simultaneously bending ribosomal RNA promoters to maximize ribosome production.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Nuc_Fis_Benders"
        },
        {
            "step": 5,
            "title": "5. MukBEF SMC Condensin Loop Extrusion",
            "desc": "50-nm ATP-driven SMC ring clamps loop roots into segregated macrodomains",
            "spoken": "Stage five: MukBEF Condensin Loop Anchoring. At the base of the chromosomal loops sits the giant fifty-nanometer MukBEF condensin ring. Burning ATP, MukBEF extrudes and clamps the roots of the topological loops into a central axial scaffold, ensuring that newly replicated sister chromosomes cleanly segregate into daughter cells.",
            "color": "#E63946",
            "targetPiece": "Piece_Nuc_MukBEF_Clamp"
        }
    ],
    "analogy": "Packing a 1.5-millimeter E. coli chromosome into a 1-micrometer cell is like 'packing a 1.5-kilometer-long headphone cable into a tiny backpack without tangling a single wire while still being able to read any song lyrics on demand': first, DNA Gyrase twists the cable into ~400 springy 'telephone-cord coils' (plectonemes); second, architectural proteins HU and IHF act as 'hairpin clips' that bend DNA by 160°; third, H-NS acts as 'molecular Velcro' that zips foreign viral DNA shut; and fourth, the giant MukBEF ring acts as a 'carabiner clip' anchoring the base of each loop."
},
  chaperones: {
    "id": "chaperones",
    "title": "PROKARYOTIC PROTEOSTASIS: GROEL–GROES & DNAK–DNAJ",
    "subtitle": "Three-tier protein folding network: ribosome-bound Trigger Factor cradle, DnaK–DnaJ–GrpE Hsp70 holdase, and 800-kDa GroEL–GroES Anfinsen cage",
    "scaleTag": "CRYO-EM & CRYSTAL CHAPERONIN CAGE • PDB: 1AON / 2KHO / 1W26",
    "glb": "/prokaryote/models/chaperones_1aon.glb",
    "pdb": "1AON, 2KHO, 1W26",
    "pronounce": "[groh-E-L groh-E-S shah-puh-ROH-nin KAYJ]",
    "sliderLabel": "ATP FOLDING TIMER RATE:",
    "sliderUnit": "s Cage Timer",
    "sliderMin": 4,
    "sliderMax": 20,
    "sliderDefault": 10,
    "inhibitorBtn": [
        "☣️ Heat Shock (42°C Aggregation)",
        "🛡️ Homeostatic Folding"
    ],
    "energyBtn": [
        "⚡ 7 ATP Cis-Ring Firing",
        "🛑 ADP-Locked State"
    ],
    "upstream": "Ribosome Exit Tunnel Polypeptide Emergence + Thermal/Oxidative Unfolding",
    "coupling": "Trigger Factor (1W26) → DnaK/DnaJ/GrpE (2KHO) → GroEL–GroES Cage (1AON)",
    "downstream": "Native Tertiary Protein Fold (175,000 Å³ Hydrophilic Anfinsen Chamber)",
    "kinetics": [
        [
            "ANFINSEN VOLUME",
            "175,000 Å³ (Up to 60 kDa client)"
        ],
        [
            "ATP STOICHIOMETRY",
            "7 ATP per 10-second cis cycle"
        ],
        [
            "CONFORMATION SHIFT",
            "60° Elevation + 90° Twist"
        ],
        [
            "COOPERATIVITY",
            "Positive Intra-Ring / Negative Inter-Ring"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_1AON_GroES_Lid",
            "name": "GroES Heptameric Dome Lid",
            "badge": "GroES",
            "color": "#FFB703",
            "desc": "GroES (PDB: 1AON) is a 70-kDa dome-shaped heptameric ring of 10-kDa subunits. When 7 ATP molecules bind to a GroEL ring, mobile loops on GroES dock onto the GroEL apical jaws, sealing the top of the folding chamber like a pot lid.",
            "dissocVector": [
                0.0,
                4.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_1AON_GroEL_CisRing",
            "name": "GroEL Cis-Ring Folding Chamber",
            "badge": "Cis-EL",
            "color": "#3A86FF",
            "desc": "The upper cis-GroEL heptameric ring (7 × 57-kDa subunits, PDB: 1AON) undergoes a dramatic 60° upward elevation and 90° clockwise twist upon binding 7 ATP and GroES. This doubles the cavity volume to 175,000 Å³ and buries its hydrophobic patches, exposing a hydrophilic, negatively charged interior wall.",
            "dissocVector": [
                0.0,
                1.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_1AON_Encapsulated_Substrate",
            "name": "Encapsulated Refolding Client Protein",
            "badge": "Client",
            "color": "#06D6A0",
            "desc": "Isolated inside the sealed cis-GroEL–GroES Anfinsen cage is a single non-native client protein (up to ~60 kDa). Free from any possibility of intermolecular aggregation and surrounded by hydrophilic walls, the polypeptide collapses its hydrophobic core into its native tertiary fold within the ~10-second ATP hydrolysis timer.",
            "dissocVector": [
                0.0,
                1.5,
                3.8
            ]
        },
        {
            "meshName": "Piece_1AON_GroEL_TransRing",
            "name": "GroEL Trans-Ring Open Receptor",
            "badge": "Trn-EL",
            "color": "#2A9D8F",
            "desc": "The lower trans-GroEL heptameric ring operates in negative cooperativity with the top ring. While the top cis ring is sealed and folding a client, the bottom trans ring remains in the open, nucleotide-free state—displaying a hydrophobic rim of apical helices ready to capture the next misfolded protein.",
            "dissocVector": [
                0.0,
                -2.5,
                -1.2
            ]
        },
        {
            "meshName": "Piece_1AON_Trigger_Factor",
            "name": "Trigger Factor Ribosome Dragon Cradle",
            "badge": "Tig",
            "color": "#00F5D4",
            "desc": "Trigger Factor (Tig, PDB: 1W26) is an ATP-independent dragon-shaped ribosome-associated chaperone (~50 kDa). Its N-terminal tail docks onto ribosomal protein uL23 right at the mouth of the 50S exit tunnel, forming a protective cradle over nascent chains.",
            "dissocVector": [
                -4.5,
                0.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_1AON_DnaK_DnaJ_GrpE",
            "name": "DnaK–DnaJ–GrpE Hsp70 Holdase Machine",
            "badge": "DnaKJ",
            "color": "#9D4EDD",
            "desc": "The Hsp70 system (PDB: 2KHO) bridges Trigger Factor and GroEL: DnaJ (Hsp40) recognizes exposed hydrophobic heptapeptides and stimulates ATP hydrolysis on DnaK (Hsp70), snapping DnaK's α-helical lid shut over the substrate until the nucleotide exchange factor GrpE prys open the ATPase cleft.",
            "dissocVector": [
                4.5,
                0.5,
                1.5
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Trigger Factor Ribosome Exit Cradle (1W26)",
            "desc": "Dragon-shaped chaperone docks at uL23 on the 50S ribosome to shield nascent chains",
            "spoken": "Stage one: Trigger Factor Co-Translational Cradle. Protein folding begins the instant a polypeptide emerges from the ribosome exit tunnel. On the left, the dragon-shaped chaperone Trigger Factor docks onto ribosomal protein uL23, arching over the tunnel exit to shield sticky hydrophobic segments until an entire domain is synthesized.",
            "color": "#FFB703",
            "targetPiece": "Piece_1AON_GroES_Lid"
        },
        {
            "step": 2,
            "title": "2. DnaK–DnaJ–GrpE Hsp70 Holdase Cycle (2KHO)",
            "desc": "DnaJ delivers misfolded chains to DnaK; ATP hydrolysis clamps the lid shut",
            "spoken": "Stage two: The DnaK, DnaJ, and GrpE Hsp70 Clamp. On the right, polypeptides that fail to fold spontaneously or unfold during heat shock are captured by the DnaJ co-chaperone and handed to DnaK. DnaJ triggers ATP hydrolysis on DnaK, clamping its helical lid tightly over exposed hydrophobic patches to prevent toxic aggregation until GrpE resets the cycle.",
            "color": "#3A86FF",
            "targetPiece": "Piece_1AON_GroEL_CisRing"
        },
        {
            "step": 3,
            "title": "3. GroEL Open Trans-Ring Hydrophobic Capture",
            "desc": "Apical jaws of the open GroEL heptamer bind non-native proteins via hydrophobic patches",
            "spoken": "Stage three: GroEL Apical Capture. Stubborn multi-domain proteins up to sixty kilodaltons are transferred to the barrel-shaped GroEL chaperonin. In its open state, seen in the lower trans ring, the seven apical domains expose a ring of greasy hydrophobic patches that grab the misfolded client and gently stretch out kinetically trapped tangles.",
            "color": "#06D6A0",
            "targetPiece": "Piece_1AON_Encapsulated_Substrate"
        },
        {
            "step": 4,
            "title": "4. 7-ATP Binding & GroES Dome Encapsulation (1AON)",
            "desc": "7 ATP + GroES lid twist apical domains 90°, expanding the 175,000 Å³ hydrophilic cage",
            "spoken": "Stage four: GroES Dome Encapsulation and the Anfinsen Cage. Cooperative binding of seven ATP molecules and the golden GroES heptameric lid triggers a massive sixty-degree elevation and ninety-degree twist of the upper cis ring. This ejects the client protein into a sealed one-hundred-seventy-five-thousand-cubic-angstrom chamber whose walls simultaneously switch from greasy to water-loving.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_1AON_GroEL_TransRing"
        },
        {
            "step": 5,
            "title": "5. 10-Second ATP Timer & Native Protein Ejection",
            "desc": "Isolated client folds in ~10 s; trans-ring ATP binding pops off GroES to release native protein",
            "spoken": "Stage five: The Ten-Second Folding Timer and Release. Sequestered alone inside this hydrophilic Anfinsen cage, the client protein folds into its native structure over a ten-second window timed by slow ATP hydrolysis. Once ATP hydrolyzes to ADP and a new client binds to the opposite ring, the GroES lid pops off and releases the folded enzyme into the cytosol.",
            "color": "#00F5D4",
            "targetPiece": "Piece_1AON_Trigger_Factor"
        }
    ],
    "analogy": "The Bacterial Chaperone Network is a 'three-tier hospital for newly born and heat-stressed proteins': (1) Trigger Factor sits right at the ribosome exit tunnel like a 'midwife's protective blanket', shielding sticky hydrophobic patches as the polypeptide is born; (2) DnaK–DnaJ–GrpE acts like an 'emergency paramedic splint', using ATP to grab and stretch misfolded chains; and (3) the giant barrel-shaped GroEL–GroES complex is an 'isolated VIP recovery room (Anfinsen cage)'—it traps one misfolded protein inside its oily rim, snaps on the GroES dome lid, and flips its inner walls from oily to water-loving for 10 seconds so the protein has no choice but to fold properly!"
},
  rna_degradosome: {
    "id": "rna_degradosome",
    "title": "BACTERIAL RNA DEGRADOSOME & MRNA TURNOVER FACTORY",
    "subtitle": "Inner-membrane-tethered RNase E tetramer scaffold coordinating RhlB helicase, PNPase exoribonuclease, enolase, and Hfq-sRNA",
    "scaleTag": "MACROMOLECULAR MRNA DECAY HUB • PDB: 5M3P / 2C0B (2.60 Å)",
    "glb": "/prokaryote/models/rna_degradosome_5m3p.glb",
    "pdb": "5M3P, 2C0B",
    "pronounce": "[R-N-A deh-GRAD-oh-sohm]",
    "sliderLabel": "MRNA HALF-LIFE TURNOVER:",
    "sliderUnit": "nt/s Decay",
    "sliderMin": 10,
    "sliderMax": 120,
    "sliderDefault": 60,
    "inhibitorBtn": [
        "☣️ Pi Depletion Stall",
        "🛡️ Active Phosphorolysis"
    ],
    "energyBtn": [
        "⚡ RhlB ATP Helicase On",
        "🛑 Stem-Loop Stalled"
    ],
    "upstream": "RppH 5'-Pyrophosphate Removal (5'-PPP → 5'-P) or Hfq–sRNA Base-Pairing",
    "coupling": "RNase E Endonucleolytic Cleavage → RhlB Unwinding → PNPase 3'→5' Phosphorolysis",
    "downstream": "Recycled Ribonucleoside Diphosphates (rNDPs) for Nucleotide Salvage",
    "kinetics": [
        [
            "MRNA HALF-LIFE",
            "2–5 min (Rapid Reprogramming)"
        ],
        [
            "RNASE E SENSOR",
            "5'-Monophosphate Pocket (Zn²⁺)"
        ],
        [
            "PNPASE REACTION",
            "RNAₙ + Pi ⇌ RNAₙ₋₁ + rNDP"
        ],
        [
            "MEMBRANE ANCHOR",
            "Amphipathic Helix A (aa 565–582)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Deg_Inner_Membrane",
            "name": "Cytoplasmic Inner Membrane Anchor",
            "badge": "IM",
            "color": "#06D6A0",
            "desc": "The E. coli RNA degradosome is spatially compartmentalized at the cytoplasmic face of the inner membrane via RNase E's conserved 18-residue amphipathic α-helix (Segment A, residues 565–582), keeping mRNA decay separated from the central nucleoid.",
            "dissocVector": [
                0.0,
                4.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Deg_RNaseE_Tetramer",
            "name": "RNase E Catalytic NTD Tetramer (2C0B)",
            "badge": "RNaseE",
            "color": "#3A86FF",
            "desc": "The N-terminal catalytic half of RNase E (residues 1–529, PDB: 2C0B) forms a Zn²⁺-linked dimer-of-dimers endoribonuclease. It features a 5'-monophosphate sensor pocket: when RppH converts an mRNA's 5'-triphosphate cap into 5'-P, RNase E snaps shut and cleaves internal single-stranded AU-rich sites.",
            "dissocVector": [
                0.0,
                1.2,
                1.5
            ]
        },
        {
            "meshName": "Piece_Deg_CTD_Scaffold",
            "name": "RNase E Intrinsically Disordered CTD",
            "badge": "CTD",
            "color": "#00F5D4",
            "desc": "The C-terminal half of RNase E (residues 530–1061) is an intrinsically disordered macromolecular tether containing specific microdomains that assemble RhlB helicase, glycolytic enolase, and PNPase into a cooperative multi-enzyme factory.",
            "dissocVector": [
                0.0,
                -0.8,
                -1.5
            ]
        },
        {
            "meshName": "Piece_Deg_RhlB_Helicase",
            "name": "RhlB DEAD-Box ATP-Dependent Helicase",
            "badge": "RhlB",
            "color": "#9D4EDD",
            "desc": "RhlB is a DEAD-box ATP-dependent RNA helicase bound to RNase E residues 696–762. Because exoribonucleases stall at stable 3' stem-loop hairpins (such as Rho-independent terminators), RhlB burns ATP to unwind double-stranded RNA duplexes into single-stranded feed.",
            "dissocVector": [
                -3.8,
                -1.2,
                1.5
            ]
        },
        {
            "meshName": "Piece_Deg_Enolase_Dimer",
            "name": "Glycolytic Enolase Dimeric Sensor",
            "badge": "Eno",
            "color": "#2A9D8F",
            "desc": "Dimeric glycolytic enolase (which converts 2-phosphoglycerate to PEP in glycolysis) moonlights as a structural subunit of the degradosome (bound at RNase E residues 833–850), linking cellular carbon-energy status directly to the turnover of glucose-transporter mRNAs (ptsG).",
            "dissocVector": [
                3.8,
                0.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_Deg_PNPase_Trimer",
            "name": "PNPase Trimeric Exoribonuclease Ring",
            "badge": "PNPase",
            "color": "#FFB703",
            "desc": "Polynucleotide Phosphorylase (PNPase, PDB: 5M3P) is a homotrimeric ring-shaped 3'→5' exoribonuclease capped by KH and S1 RNA-capture domains. Instead of hydrolyzing RNA to monophosphates, it uses inorganic phosphate (Pᵢ) to phosphorolyze RNA into energy-rich ribonucleoside diphosphates (rNDPs).",
            "dissocVector": [
                2.8,
                -3.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Deg_Hfq_sRNA_Target",
            "name": "Hfq Sm-Hexamer & sRNA–mRNA Duplex",
            "badge": "Hfq",
            "color": "#E63946",
            "desc": "The hexameric Sm-like RNA chaperone Hfq binds small regulatory RNAs (sRNAs) and base-pairs them with target mRNAs, delivering the duplex directly to the RNase E scaffold for rapid targeted gene silencing.",
            "dissocVector": [
                -2.8,
                -3.8,
                1.8
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Inner Membrane Tethering & Spatial Compartmentalization",
            "desc": "Amphipathic Helix A anchors the degradosome to the inner membrane around the nucleoid",
            "spoken": "Stage one: Inner Membrane Tethering. To allow bacteria to reprogram gene expression within minutes, messenger RNAs have an average lifespan of only two to five minutes. The RNA degradosome is anchored to the inner cytoplasmic membrane by an amphipathic helix on RNase E, patrolling the periphery of the cell.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Deg_Inner_Membrane"
        },
        {
            "step": 2,
            "title": "2. Hfq–sRNA Targeting & 5'-Monophosphate Sensing (2C0B)",
            "desc": "Hfq delivers sRNA-paired mRNA or RppH exposes 5'-P to trigger the RNase E tetramer",
            "spoken": "Stage two: Target Recognition and RNase E Endonucleolysis. Decay begins when the hexameric chaperone Hfq delivers a small regulatory RNA paired to a target mRNA, or when pyrophosphohydrolase RppH converts the transcript's five-prime triphosphate into a monophosphate. Sensing this five-prime monophosphate, the blue RNase E catalytic tetramer clamps down and slices the mRNA internally.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Deg_RNaseE_Tetramer"
        },
        {
            "step": 3,
            "title": "3. Intrinsically Disordered CTD Hub Assembly",
            "desc": "Flexible C-terminal tails of RNase E coordinate RhlB, Enolase, and PNPase",
            "spoken": "Stage three: The Flexible CTD Assembly Hub. Extending from the catalytic core of RNase E are four flexible C-terminal scaffold tails. Like tentacle arms on a workbench, these tails hold a DEAD-box helicase, a glycolytic sensor, and a phosphorolytic grinder in immediate proximity to the newly cut RNA fragments.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Deg_CTD_Scaffold"
        },
        {
            "step": 4,
            "title": "4. RhlB DEAD-Box Helicase Hairpin Melting",
            "desc": "ATP-driven RhlB unwinds stable 3' stem-loop terminators into single-stranded RNA",
            "spoken": "Stage four: RhlB Helicase Unwinding. Bacterial mRNAs end in tightly folded three-prime stem-loop hairpins that block exonucleases. Bound directly to the RNase E scaffold, the purple RhlB DEAD-box helicase hydrolyzes ATP to melt these secondary structures into an unstructured single strand.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Deg_RhlB_Helicase"
        },
        {
            "step": 5,
            "title": "5. PNPase Ring 3'→5' Phosphorolysis & Enolase Sensing (5M3P)",
            "desc": "Trimeric PNPase ring uses Pᵢ to recycle RNA into rNDPs while Enolase senses carbon flux",
            "spoken": "Stage five: PNPase Phosphorolytic Recycling and Metabolic Sensing. The unwound RNA strand is threaded into the central channel of the golden PNPase trimer ring. Rather than wasting bond energy by cutting with water, PNPase uses inorganic phosphate to cleave the RNA from three-prime to five-prime into reusable ribonucleoside diphosphates, while dimeric enolase tunes decay rates to glycolytic energy flux.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_Deg_Enolase_Dimer"
        }
    ],
    "analogy": "If the Expressome is the cell's printing press, the RNA Degradosome is its 'membrane-mounted high-speed document shredder and paper recycler': bacteria must adapt to new environments in seconds, so they cannot let old mRNA blueprints linger (average mRNA half-life is just 2–5 minutes!). Anchored to the inner membrane, RNase E acts as a multi-tool Swiss Army knife: its N-terminal scissors make the first internal cuts, its RhlB helicase attachment irons out folded RNA knots using ATP, and its PNPase rotary grinder chews the RNA fragments into reusable nucleotide building blocks (rNDPs) using inorganic phosphate instead of wasting ATP!"
},
  metabolic_hubs: {
    "id": "metabolic_hubs",
    "title": "SUPRAMOLECULAR METABOLIC & RESPIRATORY HUBS",
    "subtitle": "The 4.5-MDa 24-subunit cubic Pyruvate Dehydrogenase complex (1EAE) coupled via NADH to the Cytochrome bo₃ ubiquinol oxidase pump (6WTI)",
    "scaleTag": "METABOLIC CHANNELING & BIOENERGETICS • PDB: 1EAE / 6WTI",
    "glb": "/prokaryote/models/metabolic_hubs.glb",
    "pdb": "1EAE, 6WTI",
    "pronounce": "[py-ROO-vayt dee-HY-droh-jeh-nays & SY-toh-krohm]",
    "sliderLabel": "GLYCOLYTIC PYRUVATE FLUX:",
    "sliderUnit": "s⁻¹ Turnover",
    "sliderMin": 20,
    "sliderMax": 200,
    "sliderDefault": 110,
    "inhibitorBtn": [
        "☣️ Cyanide / Arsenite Block",
        "🛡️ Aerobic Respiration"
    ],
    "energyBtn": [
        "⚡ Lipoyl Swinging Arm Active",
        "🛑 CoA Depleted"
    ],
    "upstream": "Glycolytic Pyruvate + CoA-SH + NAD⁺ → PDH Complex → NADH → Complex I → Q8H₂",
    "coupling": "14 nm Lipoyl Arm Substrate Channeling (E1→E2→E3) + Heme b–Heme o₃–CuB O₂ Reduction",
    "downstream": "Acetyl-CoA (TCA Cycle Entry) + 8 H⁺/2e⁻ Proton Motive Force (Δp = -180 mV)",
    "kinetics": [
        [
            "PDH CORE SYMMETRY",
            "Octahedral 24-mer Cube (4.5 MDa)"
        ],
        [
            "LIPOYL ARM REACH",
            "14 nm Swinging Tether (E1↔E2↔E3)"
        ],
        [
            "CYT BO₃ PUMPING",
            "2e⁻ + 4H⁺_in + ½O₂ → H₂O + 4H⁺_out"
        ],
        [
            "COFACTORS",
            "TPP, Lipoamide, FAD, Heme b/o₃, CuB"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Met_PDH_E2_CubicCore",
            "name": "E2 Dihydrolipoyl Transacetylase 24-mer Cube",
            "badge": "E2-Cube",
            "color": "#FFB703",
            "desc": "At the heart of the 4.5-MDa Pyruvate Dehydrogenase Complex sits the 24-subunit octahedral cubic core of Dihydrolipoyl Transacetylase (E2p, PDB: 1EAE). Its inner catalytic vertices transfer the acetyl group from lipoamide onto Coenzyme A (CoA-SH) to release Acetyl-CoA into the TCA cycle.",
            "dissocVector": [
                -3.8,
                0.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Met_PDH_E1_Shell",
            "name": "E1 Pyruvate Dehydrogenase (TPP) Shell",
            "badge": "E1-TPP",
            "color": "#3A86FF",
            "desc": "Surrounding the E2 cube are 12–24 peripheral dimers of Pyruvate Dehydrogenase (E1p). Using a Thiamine Pyrophosphate (TPP, Vitamin B₁) cofactor and Mg²⁺, E1 decarboxylates glycolytic 3-carbon pyruvate (releasing CO₂) and reductively acetylates the visiting lipoyl arm.",
            "dissocVector": [
                -5.2,
                3.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_Met_PDH_E3_Shell",
            "name": "E3 Dihydrolipoyl Dehydrogenase (FAD)",
            "badge": "E3-FAD",
            "color": "#9D4EDD",
            "desc": "Also tethered around the E2 perimeter are 6–12 dimers of Dihydrolipoyl Dehydrogenase (E3). Using a tightly bound FAD cofactor, E3 re-oxidizes the reduced dihydrolipoamide arm back to its disulfide ring and transfers the two electrons to NAD⁺, generating high-energy NADH + H⁺.",
            "dissocVector": [
                -5.2,
                -2.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_Met_PDH_Lipoyl_Arms",
            "name": "Flexible 14-nm Lipoyl-Lysine Swinging Arms",
            "badge": "Lipoyl",
            "color": "#00F5D4",
            "desc": "Each E2 subunit extends up to three tandem lipoyl domains on flexible proline/alanine-rich linkers spanning 140 Å (14 nm). Terminated by a lipoamide cofactor covalently attached to Lysine, this swinging arm physically channels intermediates across E1 → E2 → E3.",
            "dissocVector": [
                -2.2,
                2.5,
                2.2
            ]
        },
        {
            "meshName": "Piece_Met_Cyo_InnerMembrane",
            "name": "Bioenergetic Inner Membrane Bilayer",
            "badge": "IM",
            "color": "#06D6A0",
            "desc": "In the adjacent bioenergetic inner membrane, NADH generated by PDH and the TCA cycle donates electrons via Complex I into the hydrophobic Ubiquinone-8 (Q₈ / Q₈H₂) pool diffusing within the lipid bilayer.",
            "dissocVector": [
                3.8,
                -2.5,
                -1.0
            ]
        },
        {
            "meshName": "Piece_Met_CyoA_QuinolSite",
            "name": "CyoA Subunit II Ubiquinol Oxidation Domain",
            "badge": "CyoA",
            "color": "#F77F00",
            "desc": "Subunit II (CyoA) of Cytochrome bo₃ Ubiquinol Oxidase (PDB: 6WTI) contains the high-affinity ubiquinol (Q₈H₂) binding pocket. Oxidation of Q₈H₂ back to Q₈ releases 2 scalar protons directly into the periplasm while passing 2 electrons to low-spin Heme b.",
            "dissocVector": [
                2.5,
                1.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_Met_CyoB_HemeCuCore",
            "name": "CyoB Subunit I Heme b / Heme o₃–CuB Core",
            "badge": "CyoB",
            "color": "#E63946",
            "desc": "Subunit I (CyoB, 15 transmembrane helices) houses low-spin Heme b and the binuclear active center of high-spin Heme o₃ paired with Copper-B (Cu_B). Here, 4 electrons reduce O₂ + 4H⁺_in → 2 H₂O while electrostatically driving 4 vectorial protons through the D- and K-channels into the periplasm.",
            "dissocVector": [
                4.2,
                2.8,
                0.5
            ]
        },
        {
            "meshName": "Piece_Met_CyoCD_Support",
            "name": "CyoC & CyoD Structural Assembly Helices",
            "badge": "CyoCD",
            "color": "#2A9D8F",
            "desc": "Transmembrane subunits III (CyoC) and IV (CyoD) wrap around the CyoB catalytic core, stabilizing the oxygen-access channel and the proton-pumping water wires.",
            "dissocVector": [
                5.2,
                -0.5,
                1.8
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. E1 Pyruvate Decarboxylation (TPP Cofactor)",
            "desc": "Peripheral E1 dimers use Vitamin B₁ (TPP) to cleave CO₂ from glycolytic pyruvate",
            "spoken": "Stage one: E1 Pyruvate Decarboxylation. On the left is the giant four-point-five-megadalton Pyruvate Dehydrogenase Complex, the metabolic gateway linking glycolysis to the citric acid cycle. Pyruvate enters the blue peripheral E1 subunits, where a thiamine pyrophosphate cofactor cleaves off carbon dioxide to form a reactive hydroxyethyl intermediate.",
            "color": "#FFB703",
            "targetPiece": "Piece_Met_PDH_E2_CubicCore"
        },
        {
            "step": 2,
            "title": "2. 14-nm Lipoyl-Lysine Swinging Arm Channeling",
            "desc": "Tethered lipoamide arm captures the acetyl group from E1 and swings it to the E2 core",
            "spoken": "Stage two: Fourteen-Nanometer Lipoyl Arm Channeling. Rather than letting the intermediate diffuse away into the crowded cytoplasm, a fourteen-nanometer flexible lipoyl-lysine arm reaches into the E1 active site, harvests the two-carbon acetyl group onto its disulfide ring, and swings it directly into the central E2 core.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Met_PDH_E1_Shell"
        },
        {
            "step": 3,
            "title": "3. E2 24-Mer Octahedral Cube & Acetyl-CoA Synthesis (1EAE)",
            "desc": "Central 24-subunit E2 cube transfers the acetyl moiety to CoA-SH to fuel the TCA cycle",
            "spoken": "Stage three: The E2 Octahedral Cube and Acetyl-CoA Release. Inside the twenty-four-subunit golden cubic core of E2, crystal structure 1EAE, the acetyl group is transferred onto Coenzyme A. High-energy Acetyl-CoA exits through the windows of the cube to enter the citric acid cycle.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Met_PDH_E3_Shell"
        },
        {
            "step": 4,
            "title": "4. E3 FAD Re-Oxidation & NADH Generation",
            "desc": "Swinging arm visits E3 dimers where FAD + NAD⁺ regenerate the disulfide and yield NADH",
            "spoken": "Stage four: E3 Disulfide Reset and NADH Production. The reduced dihydrolipoyl arm now swings out to the purple E3 dehydrogenase dimers. An FAD cofactor re-oxidizes the lipoyl ring for the next cycle and transfers the two electrons to NAD-plus, producing cytosolic NADH that feeds the respiratory chain.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Met_PDH_Lipoyl_Arms"
        },
        {
            "step": 5,
            "title": "5. Cytochrome bo₃ Ubiquinol Oxidase & 8 H⁺ Pumping (6WTI)",
            "desc": "CyoA oxidizes Q₈H₂ while CyoB Heme o₃–CuB reduces O₂ to H₂O, translocating 2 H⁺/e⁻",
            "spoken": "Stage five: Cytochrome bo3 Terminal Oxidase and Proton Pumping. On the right, electrons from NADH arrive via membrane ubiquinol at Cytochrome bo3 oxidase, structure 6WTI. Subunit CyoA oxidizes ubiquinol while the Heme o3 and Copper-B binuclear center in CyoB reduces oxygen to water—driving a total of eight protons across the inner membrane per oxygen molecule to recharge the cell's proton-motive force.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Met_Cyo_InnerMembrane"
        }
    ],
    "analogy": "The Pyruvate Dehydrogenase Complex (PDH) and Cytochrome bo₃ Oxidase form a 'robotic crane factory wired to a hydroelectric dam': (1) PDH is a 4.5-megadalton octahedral cube surrounded by 12 flexible 14-nanometer 'robotic crane arms' (lipoyl-lysine tethers) that swing reaction intermediates directly from enzyme E1 to the central E2 cube and out to E3 without ever dropping the molecule into the crowded cytosol! (2) The NADH produced by E3 then feeds electrons through Complex I and ubiquinol into Cytochrome bo₃, which burns oxygen into water to pump protons across the membrane like a high-pressure hydroelectric pump."
},
  periplasmic_transport: {
    "id": "periplasmic_transport",
    "title": "PERIPLASMIC CHAPERONE (SURA) & MALFGK₂–MALE ABC IMPORTER",
    "subtitle": "ATP-independent SurA outer-membrane protein chaperone relay (1M5Y) alongside the Venus-flytrap MalE–MalFGK₂ maltose ABC transporter (2R6G)",
    "scaleTag": "PERIPLASMIC RELAY & ABC TRANSPORT • PDB: 1M5Y / 1OMP / 2R6G",
    "glb": "/prokaryote/models/periplasmic_transport.glb",
    "pdb": "1M5Y, 1OMP, 2R6G",
    "pronounce": "[per-ih-PLAZ-mik Soor-A & MAL-tose A-B-C]",
    "sliderLabel": "PERIPLASMIC MALTOSE CONC:",
    "sliderUnit": "µM Substrate",
    "sliderMin": 0.5,
    "sliderMax": 50.0,
    "sliderDefault": 12.0,
    "inhibitorBtn": [
        "☣️ Vanadate Transition Trap",
        "🛡️ Alternating Access Active"
    ],
    "energyBtn": [
        "⚡ MalK₂ 2-ATP Tweezer Closure",
        "🛑 Nucleotide-Free Inward"
    ],
    "upstream": "LamB Maltoporin Outer Membrane Diffusion + SecYEG OMP Polypeptide Emergence",
    "coupling": "SurA Cradle Relay to BAM + MalE Venus-Flytrap (35° Hinge) → MalFGK₂ Alternating Access",
    "downstream": "Cytoplasmic Maltose Import (Kd ≈ 1 µM) & Native Outer Membrane β-Barrel Folding",
    "kinetics": [
        [
            "MALE AFFINITY",
            "Kd ≈ 1 µM (35° Venus-Flytrap)"
        ],
        [
            "ABC STOICHIOMETRY",
            "2 ATP per Maltose Imported"
        ],
        [
            "SURA CHAPERONE",
            "ATP-Free NC-Core + P1/P2 PPIase"
        ],
        [
            "PDB STRUCTURES",
            "1M5Y (SurA), 1OMP (MalE), 2R6G"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Peri_SurA_CoreCradle",
            "name": "SurA NC-Core Chaperone Cradle (1M5Y)",
            "badge": "SurA",
            "color": "#3A86FF",
            "desc": "SurA (PDB: 1M5Y) is the primary periplasmic chaperone responsible for outer-membrane β-barrel biogenesis. Its N-terminal domain, C-terminal helix, and P1 domain assemble into an asymmetric clamp-like cradle that binds aromatic Ar-X-Ar motifs characteristic of unfolded outer membrane proteins (OMPs).",
            "dissocVector": [
                -3.8,
                1.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Peri_SurA_PPIase_P1P2",
            "name": "SurA P1 & P2 Parvulin PPIase Domains",
            "badge": "P1/P2",
            "color": "#00F5D4",
            "desc": "Tethered to the SurA core are two parvulin-like peptidyl-prolyl cis/trans isomerase (PPIase) domains, P1 and P2. While P1 locks into the core cradle to regulate client affinity, P2 extends on a flexible 25-Å linker to isomerize proline residues and hand the polypeptide to BAM POTRA domains.",
            "dissocVector": [
                -4.8,
                3.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_Peri_Unfolded_OMP_Cargo",
            "name": "Unfolded β-Barrel Polypeptide Client",
            "badge": "OMP",
            "color": "#9D4EDD",
            "desc": "Nascent outer membrane β-barrel polypeptides (such as OmpF, LamB, or BamA) emerge unfolded from the inner-membrane SecYEG translocon. Shielded inside the SurA cradle, they cross the 25-nm aqueous periplasm without aggregating.",
            "dissocVector": [
                -2.5,
                2.8,
                1.8
            ]
        },
        {
            "meshName": "Piece_Peri_MalE_VenusFlytrap",
            "name": "MalE Periplasmic Maltose-Binding Protein",
            "badge": "MalE",
            "color": "#FFB703",
            "desc": "MalE (Maltose-Binding Protein, PDB: 1OMP) is a 40-kDa periplasmic solute-binding protein composed of two globular lobes separated by a deep cleft. Binding of maltose induces a 35° 'Venus-flytrap' hinge closure (Kd ≈ 1 µM) that creates the exact surface needed to dock onto MalF–MalG.",
            "dissocVector": [
                3.2,
                3.5,
                0.5
            ]
        },
        {
            "meshName": "Piece_Peri_Maltose_Ligand",
            "name": "Bound Maltose Disaccharide Substrate",
            "badge": "Malt",
            "color": "#E63946",
            "desc": "Maltose (α-D-glucopyranosyl-(1→4)-D-glucose) enters the periplasm through the outer-membrane maltoporin LamB and is hydrogen-bonded and π-stacked against aromatic Trp/Tyr sidechains inside MalE and the MalF transmembrane pocket.",
            "dissocVector": [
                3.2,
                1.5,
                2.2
            ]
        },
        {
            "meshName": "Piece_Peri_MalFG_TM_Channel",
            "name": "MalF–MalG Transmembrane Permease",
            "badge": "MalFG",
            "color": "#2A9D8F",
            "desc": "MalF (8 TM helices with a large periplasmic P2 scoop loop) and MalG (6 TM helices) form the heterodimeric transmembrane permease pore (PDB: 2R6G) that rocks between inward-facing (resting) and outward-facing (ATP-bound) conformations.",
            "dissocVector": [
                3.2,
                -0.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Peri_MalK2_ATPase_Dimer",
            "name": "MalK₂ Cytoplasmic NBD ATPase Tweezers",
            "badge": "MalK₂",
            "color": "#F77F00",
            "desc": "On the cytoplasmic side, two MalK Nucleotide-Binding Domains (NBDs) act as molecular tweezers: binding of 2 Mg²⁺·ATP molecules at their interface snaps the MalK₂ dimer closed, prying MalF–MalG open toward the periplasm to scoop maltose out of MalE.",
            "dissocVector": [
                3.2,
                -3.8,
                1.2
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. SurA Asymmetric Cradle & OMP Protection (1M5Y)",
            "desc": "ATP-independent SurA cradle captures unfolded β-barrel proteins emerging from SecYEG",
            "spoken": "Stage one: SurA Periplasmic Chaperone Capture. On the left is SurA, crystal structure 1M5Y, the primary chaperone of the bacterial periplasm. Because the periplasm contains no ATP, SurA uses an asymmetric four-domain cradle to passively embrace sticky aromatic motifs on unfolded outer-membrane polypeptides as they exit the SecYEG translocon.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Peri_SurA_CoreCradle"
        },
        {
            "step": 2,
            "title": "2. SurA P1/P2 Prolyl Isomerase Relay to BAM",
            "desc": "Flexible P1 and P2 parvulin domains isomerize prolines and hand the OMP to BAM POTRA",
            "spoken": "Stage two: P1 and P2 Prolyl Isomerase Handover. Tethered to the SurA core cradle are two parvulin-like isomerase domains, P1 and P2. As SurA ferries its unfolded cargo across the periplasmic space, these domains catalyze cis-trans proline isomerization and dock onto the POTRA arms of the BAM complex to initiate outer-membrane barrel folding.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Peri_SurA_PPIase_P1P2"
        },
        {
            "step": 3,
            "title": "3. MalE Venus-Flytrap Sugar Capture (1OMP)",
            "desc": "Periplasmic MalE clamps maltose with a 35° hinge closure (Kd ≈ 1 µM)",
            "spoken": "Stage three: MalE Venus-Flytrap Sugar Capture. On the right is the MalEFGK2 ATP-binding cassette importer. When maltose diffuses into the periplasm through outer-membrane porins, the bilobed binding protein MalE snaps its two lobes shut by thirty-five degrees like a Venus flytrap, trapping the sugar with micromolar affinity.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Peri_Unfolded_OMP_Cargo"
        },
        {
            "step": 4,
            "title": "4. MalK₂ ATP Tweezer Closure & Outward Airlock (2R6G)",
            "desc": "Closed MalE docks on MalFG; 2 ATPs clamp MalK₂ shut, flipping MalFG outward to scoop sugar",
            "spoken": "Stage four: MalK2 ATP Tweezer Closure and Alternating Access. Only the closed, sugar-loaded form of MalE can dock onto the transmembrane MalF-MalG permease. This docking signals the cytoplasmic MalK2 ATPase dimer to bind two ATP molecules and snap shut like tweezers—rocking the transmembrane helices into an outward-facing cavity that scoops maltose out of MalE.",
            "color": "#FFB703",
            "targetPiece": "Piece_Peri_MalE_VenusFlytrap"
        },
        {
            "step": 5,
            "title": "5. ATP Hydrolysis & Cytoplasmic Maltose Release",
            "desc": "MalK₂ hydrolyzes 2 ATP → 2 ADP + 2 Pᵢ, resetting MalFG inward to release maltose",
            "spoken": "Stage five: ATP Hydrolysis and Cytoplasmic Import. Immediately after maltose transfers into the central transmembrane pocket, MalK2 hydrolyzes both ATP molecules. The cytoplasmic tweezers spring back open, flipping the MalF-MalG channel into its inward-facing state and ejecting maltose into the cytoplasm to fuel glycolysis.",
            "color": "#E63946",
            "targetPiece": "Piece_Peri_Maltose_Ligand"
        }
    ],
    "analogy": "The Periplasmic Space is a 'high-traffic customs zone with no local electricity (zero ATP)', so E. coli uses two clever relay strategies: (1) SurA acts as an 'insulated padded cradle' that catches hydrophobic outer-membrane proteins emerging from SecYEG and escorts them across the aqueous periplasm to the BAM insertase without using any energy; and (2) the MalEFGK₂ ABC importer works like a 'Venus-flytrap courier and two-door airlock': periplasmic MalE snaps shut around a maltose sugar and docks onto the MalFG airlock, triggering cytoplasmic MalK₂ tweezers to clamp 2 ATPs and flip the airlock open toward the inside!"
},
  efflux_pump: {
    "id": "efflux_pump",
    "title": "ACRAB–TOLC MULTIDRUG RESISTANCE RND EFFLUX PUMP",
    "subtitle": "32-nm trans-envelope antibiotic extrusion cannon coupling inner-membrane proton motive force to the three-state AcrB peristaltic cycle",
    "scaleTag": "CRYO-EM MULTIDRUG EFFLUX CANNON • PDB: 5V5S / 5O66 (3.60 Å)",
    "glb": "/prokaryote/models/efflux_5v5s.glb",
    "pdb": "5V5S, 5O66",
    "pronounce": "[A-kruh-A-B-tohl-C EHF-luhks PUHMP]",
    "sliderLabel": "PERIPLASMIC PROTON FLUX (ΔpH):",
    "sliderUnit": "Drugs/s Extruded",
    "sliderMin": 5,
    "sliderMax": 100,
    "sliderDefault": 55,
    "inhibitorBtn": [
        "☣️ PAβN Efflux Inhibitor",
        "🛡️ Peristaltic Drug Extrusion"
    ],
    "energyBtn": [
        "⚡ Asp407/408 Proton Relay",
        "🛑 PMF Collapsed"
    ],
    "upstream": "Periplasmic / Outer-Leaflet Antibiotic Capture (β-Lactams, Fluoroquinolones, Bile Salts)",
    "coupling": "H⁺ Influx via Asp407/Asp408/Lys940 → AcrB L → T → O Functional Rotation → TolC Duct",
    "downstream": "Direct Extracellular Expulsion Across Outer Membrane (Bypassing Periplasm)",
    "kinetics": [
        [
            "TOTAL SPAN",
            "320 Å (32 nm) Trans-Envelope"
        ],
        [
            "STOICHIOMETRY",
            "AcrB₃ : AcrA₆ : AcrZ₃ : TolC₃"
        ],
        [
            "ROTATIONAL CYCLE",
            "Loose (L) → Tight (T) → Open (O)"
        ],
        [
            "PROTON RELAY",
            "Asp407–Asp408–Lys940 Triad"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_5V5S_TolC_ExitDuct",
            "name": "TolC Trimeric Outer Membrane Exit Duct",
            "badge": "TolC",
            "color": "#3A86FF",
            "desc": "TolC (PDB: 5V5S) is a remarkable 140-Å-long homotrimeric outer-membrane cannon: its upper 40-Å 12-stranded β-barrel punches through the LPS outer membrane, while its lower 100-Å α-helical barrel extends deep into the periplasm with iris-like coiled-coil tips.",
            "dissocVector": [
                0.0,
                4.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_5V5S_Outer_Membrane",
            "name": "Outer Membrane LPS Bilayer",
            "badge": "OM",
            "color": "#0077B6",
            "desc": "The asymmetric LPS outer membrane acts as a slow permeability barrier that works synergistically with TolC: because drugs trickle in slowly through porins, AcrAB–TolC can pump them back out faster than they enter.",
            "dissocVector": [
                0.0,
                3.2,
                -1.8
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrA_Collar",
            "name": "AcrA Hexameric Membrane Fusion Collar",
            "badge": "AcrA",
            "color": "#F77F00",
            "desc": "Six elongated molecules of the periplasmic Membrane Fusion Protein AcrA (anchored to the inner membrane by N-terminal lipids) pack into a hexameric funnel-like collar that seals the junction between the AcrB crown and the TolC iris.",
            "dissocVector": [
                0.0,
                0.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrB_Loose",
            "name": "AcrB Protomer 1 — Loose (Access) State",
            "badge": "AcrB-L",
            "color": "#00F5D4",
            "desc": "In the asymmetric AcrB trimer (PDB: 5V5S/5O66), the Loose (L / Access) protomer opens a lateral cleft at the periplasm–inner membrane interface, allowing amphiphilic antibiotics, bile salts, or dyes to enter the proximal binding pocket.",
            "dissocVector": [
                -2.8,
                -2.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrB_Tight",
            "name": "AcrB Protomer 2 — Tight (Binding) Pocket",
            "badge": "AcrB-T",
            "color": "#FFB703",
            "desc": "In the Tight (T / Binding) protomer, a switch-loop conformational shift expands the deep distal binding pocket—a phenylalanine-rich hydrophobic trap (Phe178, Phe610, Phe615, Phe628) that accommodates chemically diverse drugs (β-lactams, fluoroquinolones, tetracyclines, macrolides).",
            "dissocVector": [
                0.0,
                -2.8,
                2.2
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrB_Open",
            "name": "AcrB Protomer 3 — Open (Extrusion) Funnel",
            "badge": "AcrB-O",
            "color": "#9D4EDD",
            "desc": "In the Open (O / Extrusion) protomer, protonation of the transmembrane Asp407–Asp408–Lys940 triad drives a 30-Å piston motion that closes the lateral entrance, collapses the hydrophobic drug pocket, and opens the top exit funnel to squeeze the drug into TolC.",
            "dissocVector": [
                2.8,
                -2.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_5V5S_Inner_Membrane",
            "name": "Inner Cytoplasmic Membrane Bilayer",
            "badge": "IM",
            "color": "#06D6A0",
            "desc": "The 36 transmembrane helices of the AcrB trimer (12 TM per protomer), flanked by three small single-helix AcrZ modulator peptides, sit in the inner membrane where they harvest the proton motive force (Δp ≈ -180 mV).",
            "dissocVector": [
                0.0,
                -4.2,
                -1.5
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. 32-nm Trans-Envelope Tripartite Architecture (5V5S)",
            "desc": "AcrB₃ (IM), AcrA₆ (periplasm), and TolC₃ (OM) form a sealed 320-Å extrusion duct",
            "spoken": "Stage one: Trans-Envelope Tripartite Architecture. Cryo-EM structure 5V5S reveals the thirty-two-nanometer AcrAB-TolC multidrug efflux pump—the primary engine of intrinsic antibiotic resistance in Gram-negative bacteria. Spanning both membranes and the periplasm, it links the inner-membrane AcrB motor through a hexameric AcrA adaptor collar to the outer-membrane TolC exit cannon.",
            "color": "#3A86FF",
            "targetPiece": "Piece_5V5S_TolC_ExitDuct"
        },
        {
            "step": 2,
            "title": "2. Loose (L) Protomer Periplasmic Drug Capture",
            "desc": "AcrB Access protomer opens its lateral vestibule at the membrane leaflet to scoop drugs",
            "spoken": "Stage two: Loose State Drug Capture. Unlike transporters that wait for drugs to enter the cytoplasm, AcrB vacuums up antibiotics directly from the periplasm and outer leaflet of the inner membrane. In the turquoise Loose protomer, a lateral vestibule swings open to capture incoming beta-lactams, fluoroquinolones, or toxic bile salts.",
            "color": "#0077B6",
            "targetPiece": "Piece_5V5S_Outer_Membrane"
        },
        {
            "step": 3,
            "title": "3. Tight (T) Protomer Phenylalanine Hydrophobic Trap",
            "desc": "Conformational rotation shifts the drug into a deep Phe-rich multispecific binding pocket",
            "spoken": "Stage three: Tight State Hydrophobic Trap. As the trimer cycles, the protomer transitions into the golden Tight conformation. A flexible switch-loop guides the antibiotic into a deep, phenylalanine-rich hydrophobic pocket whose flexible aromatic rings mold around chemically diverse drug structures.",
            "color": "#F77F00",
            "targetPiece": "Piece_5V5S_AcrA_Collar"
        },
        {
            "step": 4,
            "title": "4. Proton Relay & Open (O) Peristaltic Extrusion",
            "desc": "H⁺ binding to Asp407/Asp408 collapses the drug pocket, squeezing substrate up into AcrA",
            "spoken": "Stage four: Proton-Driven Peristaltic Extrusion. Down in the inner membrane, a periplasmic proton flows down the proton-motive force to protonate the Aspartate-407 and 408 triad. This triggers a piston stroke in the purple Open protomer that slams the lateral entrance shut and squeezes the binding pocket like a peristaltic bellows, forcing the drug upward into the central funnel.",
            "color": "#00F5D4",
            "targetPiece": "Piece_5V5S_AcrB_Loose"
        },
        {
            "step": 5,
            "title": "5. AcrA₆ Collar & 14-nm TolC Exit Cannon Expulsion",
            "desc": "Drug travels through the sealed AcrA₆–TolC₃ α-helical tunnel directly out of the cell",
            "spoken": "Stage five: TolC Cannon Expulsion. Once squeezed out of AcrB, the antibiotic travels through the sealed hexameric AcrA collar and shoots up the one-hundred-forty-angstrom alpha-helical tunnel of TolC—ejecting the toxin completely past the outer membrane into the extracellular medium.",
            "color": "#FFB703",
            "targetPiece": "Piece_5V5S_AcrB_Tight"
        }
    ],
    "analogy": "The 32-nanometer AcrAB–TolC Multidrug Efflux Pump is E. coli's 'three-cylinder peristaltic bilge pump and anti-antibiotic cannon': spanning the entire cell envelope from the inner membrane to the outside world, the bottom AcrB trimer works like a three-chamber rotary squeeze pump powered by incoming protons. As one subunit opens its side door to scoop up an antibiotic (Loose), the second clamps it in a greasy aromatic trap (Tight), and the third squeezes the chamber shut (Open)—blasting the drug straight up through the 14-nanometer TolC cannon barrel out of the cell before it can ever reach the cytoplasm!"
},
  secretion_systems: {
    "id": "secretion_systems",
    "title": "TRANS-ENVELOPE SECRETION NANOMACHINES: T3SS, T4SS & T6SS",
    "subtitle": "Comparative macromolecular weapons: T3SS needle injectisome (7OKO), T4SS conjugative DNA pilus (7AH9), and T6SS contractile spear (6H3L)",
    "scaleTag": "CRYO-EM VIRULENCE & CONJUGATION • PDB: 7OKO / 7AH9 / 6H3L",
    "glb": "/prokaryote/models/secretion_systems.glb",
    "pdb": "7OKO, 7AH9, 6H3L",
    "pronounce": "[see-KREE-shuhn NAN-oh-muh-sheenz T3 T4 T6]",
    "sliderLabel": "EFFECTOR / DNA TRANSLOCATION:",
    "sliderUnit": "s⁻¹ Secretion",
    "sliderMin": 5,
    "sliderMax": 80,
    "sliderDefault": 40,
    "inhibitorBtn": [
        "☣️ ATPase Gate Locked",
        "🛡️ Active Firing & Conjugation"
    ],
    "energyBtn": [
        "⚡ InvC / VirB4 / ClpV ATP",
        "🛑 Energy Depleted"
    ],
    "upstream": "Chaperone-Effector Docking (T3SS), Relaxosome oriT Nicking (T4SS) & VipAB Assembly (T6SS)",
    "coupling": "25 Å Needle Conduit (7OKO) + VirB4/VirD4 ssDNA Pump (7AH9) + 2 ms Sheath Contraction (6H3L)",
    "downstream": "Host Cytoskeleton Remodeling, Horizontal Plasmid Transfer & Rival Cell Lysis",
    "kinetics": [
        [
            "T3SS NEEDLE BORE",
            "20–25 Å (Unfolded Effectors)"
        ],
        [
            "T4SS CARGO",
            "Relaxase-Bound ssDNA Plasmid"
        ],
        [
            "T6SS CONTRACTION",
            "< 2 ms (50% Sheath Shortening)"
        ],
        [
            "PDB STRUCTURES",
            "7OKO (T3SS), 7AH9 (T4SS), 6H3L"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Sec_T3SS_BasalBody",
            "name": "T3SS Multi-Ring Basal Body & InvC ATPase",
            "badge": "T3-Base",
            "color": "#3A86FF",
            "desc": "The T3SS Virulence Injectisome basal body (PDB: 7OKO) shares direct evolutionary ancestry with the flagellar motor: 24-fold concentric inner- and outer-membrane rings house a cytoplasmic sorting platform and the hexameric InvC (SctN) ATPase, which strips chaperones and unfolds effector proteins so they fit into a narrow 20-Å channel.",
            "dissocVector": [
                -4.2,
                -1.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Sec_T3SS_Needle_Tip",
            "name": "T3SS PrgI Helical Needle & SipD TipV",
            "badge": "T3-Ndl",
            "color": "#E63946",
            "desc": "Extending 60–80 nm from the T3SS basal body is a helical polymer of PrgI needle subunits (25-Å outer diameter, 20-Å hollow bore) capped by the pentameric SipD tip complex, which inserts a translocon pore into the host eukaryotic plasma membrane.",
            "dissocVector": [
                -4.2,
                3.8,
                1.0
            ]
        },
        {
            "meshName": "Piece_Sec_T4SS_Plasmid_Relaxosome",
            "name": "T4SS Relaxosome & VirD4 Coupling Protein",
            "badge": "VirD4",
            "color": "#FFB703",
            "desc": "At the cytoplasmic entrance of the T4SS conjugation machinery, the relaxosome enzyme complex nicks the plasmid Origin of Transfer (oriT) and covalently pilots the 5' end of the single-stranded DNA (ssDNA) into the hexameric VirD4 (TrwB) coupling ATPase.",
            "dissocVector": [
                0.0,
                -4.0,
                1.5
            ]
        },
        {
            "meshName": "Piece_Sec_T4SS_IMC_ATPases",
            "name": "T4SS Inner Membrane VirB4/VirB11 ATPases",
            "badge": "VirB4",
            "color": "#F77F00",
            "desc": "The T4SS Inner Membrane Complex (PDB: 7AH9) is powered by two twin hexameric AAA+ ATPase barrels—VirB4 and VirB11—which burn ATP to pump the relaxase–ssDNA complex across the inner membrane while assembling the conjugative pilus.",
            "dissocVector": [
                0.0,
                -1.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Sec_T4SS_OMCC_Chamber",
            "name": "T4SS 14-Fold Outer Membrane Core Complex",
            "badge": "OMCC",
            "color": "#9D4EDD",
            "desc": "Spanning the periplasm and outer membrane is the 14-fold symmetric T4SS Outer Membrane Core Complex (OMCC, composed of VirB7, VirB9, and VirB10), forming a megadalton bell-shaped translocation chamber.",
            "dissocVector": [
                0.0,
                1.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Sec_T4SS_FPilus_Tube",
            "name": "T4SS Conjugative F-Pilus Phospholipid Tube",
            "badge": "F-Pilus",
            "color": "#00F5D4",
            "desc": "Projecting from the T4SS core is the conjugative F-pilus—a unique helical tube built from cyclic VirB2 pilin subunits stoichiometrically complexed with phosphatidylglycerol phospholipids—which establishes physical mating junctions for horizontal gene transfer.",
            "dissocVector": [
                0.0,
                4.2,
                1.0
            ]
        },
        {
            "meshName": "Piece_Sec_T6SS_VipAB_Sheath",
            "name": "T6SS Contractile VipA–VipB Outer Sheath",
            "badge": "VipAB",
            "color": "#06D6A0",
            "desc": "The Type VI Secretion System (T6SS, PDB: 6H3L) is a cytoplasmic contractile weapon structurally homologous to a bacteriophage T4 tail: 6-start helical strands of VipA–VipB (TssB–TssC) assemble in a high-energy extended spring state (~1 µm long) that contracts by 50% in <2 milliseconds.",
            "dissocVector": [
                4.2,
                -0.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Sec_T6SS_Hcp_VgrG_Spear",
            "name": "T6SS Hcp Inner Tube & VgrG–PAAR Spike",
            "badge": "VgrG",
            "color": "#2A9D8F",
            "desc": "Encased inside the VipAB sheath is a stacked nanotube of hexameric Hcp rings tipped by a trimeric VgrG β-prism needle and a conical Zn²⁺-stabilized PAAR spike loaded with peptidoglycan-degrading or nuclease toxins.",
            "dissocVector": [
                4.2,
                3.8,
                1.2
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. T3SS Injectisome Basal Body & InvC Unfoldase (7OKO)",
            "desc": "Hexameric InvC ATPase unfolds virulence effectors to thread into the 20-Å portal",
            "spoken": "Stage one: The Type Three Secretion Injectisome Base. On the left is the Type Three Secretion System, cryo-EM structure 7OKO, a molecular syringe used by Salmonella, Shigella, and pathogenic Escherichia coli. At its cytoplasmic base, the hexameric InvC ATPase strips away chaperones and unfolds virulence proteins into a linear thread.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Sec_T3SS_BasalBody"
        },
        {
            "step": 2,
            "title": "2. T3SS PrgI Hollow Needle & Host Pore Injection",
            "desc": "Unfolded effectors travel through the 80-nm PrgI needle directly into host cells",
            "spoken": "Stage two: T3SS Needle Injection. Driven by the proton-motive force and ATP, the unfolded effector polypeptide travels up through the eighty-nanometer hollow PrgI needle and through the SipD tip pore directly into the cytoplasm of a target human cell, where it refolds to hijack the host cytoskeleton.",
            "color": "#E63946",
            "targetPiece": "Piece_Sec_T3SS_Needle_Tip"
        },
        {
            "step": 3,
            "title": "3. T4SS Relaxosome & Twin VirB4/VirD4 ATPases (7AH9)",
            "desc": "Relaxase nicks plasmid oriT; VirD4 and VirB4 hexamers pump ssDNA into the T4SS",
            "spoken": "Stage three: Type Four Secretion and Plasmid Conjugation. In the center is the Type Four Secretion System, structure 7AH9, the engine of bacterial conjugation and antibiotic resistance spread. A cytoplasmic relaxase nicks a circular plasmid at its origin of transfer and pilots the single-stranded DNA into the hexameric VirD4 and VirB4 ATPase barrels.",
            "color": "#FFB703",
            "targetPiece": "Piece_Sec_T4SS_Plasmid_Relaxosome"
        },
        {
            "step": 4,
            "title": "4. T4SS 14-Fold Chamber & Conjugative F-Pilus",
            "desc": "Plasmid DNA crosses the VirB7/9/10 outer-membrane chamber and VirB2–lipid F-pilus",
            "spoken": "Stage four: The T4SS Core Chamber and Conjugative Pilus. The single-stranded plasmid DNA threads upward through the fourteen-fold symmetric VirB7-B9-B10 outer membrane chamber and through the hollow phospholipid-lined F-pilus into a recipient bacterium, where rolling-circle replication restores the double-stranded plasmid.",
            "color": "#F77F00",
            "targetPiece": "Piece_Sec_T4SS_IMC_ATPases"
        },
        {
            "step": 5,
            "title": "5. T6SS Contractile Crossbow & VgrG–PAAR Spear (6H3L)",
            "desc": "VipA/VipB sheath contracts 50% in <2 ms, firing the Hcp–VgrG–PAAR spike into rivals",
            "spoken": "Stage five: The Type Six Secretion Contractile Speargun. On the right is the Type Six Secretion System, structure 6H3L. Modeled like an inverted bacteriophage tail, its green VipA-VipB outer sheath contracts by fifty percent in less than two milliseconds—launching an inner Hcp nanotube tipped with a razor-sharp VgrG and PAAR poison spike straight through the cell wall of a competing bacterium.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Sec_T4SS_OMCC_Chamber"
        }
    ],
    "analogy": "Gram-negative bacteria deploy three extraordinary trans-envelope nanoweapons that resemble human mechanical engineering: (1) The Type III Secretion System (T3SS Injectisome) is a 'molecular hypodermic syringe' evolved from the flagellar motor that unfolds toxin proteins and injects them through an 80-nm hollow needle directly into host human cells; (2) The Type IV Secretion System (T4SS) is a 'retractable refueling boom and DNA pipeline' that reels a neighbor bacterium close and pumps antibiotic-resistance plasmids across; and (3) The Type VI Secretion System (T6SS) is a 'spring-loaded speargun' that contracts its outer sheath by 50% in under 2 milliseconds to fire a poison-tipped spear into rival bacteria!"
},
  crispr_defense: {
    "id": "crispr_defense",
    "title": "PROKARYOTIC PHAGE DEFENSE: CRISPR–CASCADE & ECORI",
    "subtitle": "Adaptive RNA-guided Type I-E CRISPR-Cascade surveillance seahorse + Cas3 shredder (5H9F) alongside innate EcoRI restriction endonuclease (1ERI)",
    "scaleTag": "ADAPTIVE & INNATE PHAGE IMMUNITY • PDB: 5H9F / 1VY8 / 1ERI",
    "glb": "/prokaryote/models/crispr_defense_1vy8.glb",
    "pdb": "5H9F, 1VY8, 1ERI",
    "pronounce": "[KRIS-per KAS-kayd & ECK-oh-R-one]",
    "sliderLabel": "PHAGE DNA R-LOOP ZIPPING:",
    "sliderUnit": "bp Hybridized",
    "sliderMin": 0,
    "sliderMax": 32,
    "sliderDefault": 32,
    "inhibitorBtn": [
        "☣️ AcrF Anti-CRISPR Block",
        "🛡️ Active Phage Cleavage"
    ],
    "energyBtn": [
        "⚡ Cas3 ATP Helicase Shredder",
        "🛑 Cas3 Nick-Only"
    ],
    "upstream": "Bacteriophage dsDNA Injection → PAM Scanning (5'-ATG-3') & 5'-GAATTC-3' Recognition",
    "coupling": "Directional 32-nt R-Loop Locking → Cas3 Recruitment + EcoRI Mg²⁺ Phosphodiester Cleavage",
    "downstream": "Processive 3'→5' Phage Genome Destruction & Blunt/Sticky-End Restriction",
    "kinetics": [
        [
            "CASCADE MASS",
            "405 kDa (11 Subunits + 61-nt crRNA)"
        ],
        [
            "R-LOOP SEED",
            "Positions 1–5 + 7–8 (6-nt Flip)"
        ],
        [
            "CAS3 SHREDDING",
            "ATP-Driven 3'→5' Exonucleolysis"
        ],
        [
            "ECORI TARGET",
            "5'-G↓AATTC-3' (50° DNA Kink, 1ERI)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_CRISPR_Cas7_Backbone",
            "name": "Cas7₁–₆ Helical Seahorse Backbone",
            "badge": "Cas7",
            "color": "#3A86FF",
            "desc": "In the 405-kDa E. coli Type I-E CRISPR–Cascade surveillance complex (PDB: 5H9F), six interlocking Cas7 (Cse4) subunits assemble like vertebrae into a right-handed helical 'seahorse' backbone. Each Cas7 thumb flips out every 6th nucleotide of the crRNA guide, dividing the 32-nt spacer into five 5-base segments.",
            "dissocVector": [
                -2.5,
                1.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_CRISPR_crRNA_Guide",
            "name": "61-nt CRISPR Guide RNA (crRNA)",
            "badge": "crRNA",
            "color": "#9D4EDD",
            "desc": "The 61-nucleotide CRISPR RNA (crRNA) is transcribed from the bacterial CRISPR locus containing viral spacers captured by Cas1–Cas2 during previous phage infections. It serves as the programmable sequence-specific search query.",
            "dissocVector": [
                -2.5,
                0.5,
                2.0
            ]
        },
        {
            "meshName": "Piece_CRISPR_Cas8e_PAM_Tail",
            "name": "Cas8e (Cse1) PAM-Sensing Tail",
            "badge": "Cas8e",
            "color": "#00F5D4",
            "desc": "At the tail of the Cascade seahorse sits the large subunit Cas8e (Cse1), which scans the minor groove of invading double-stranded phage DNA for a 3-base Protospacer Adjacent Motif (PAM, 5'-ATG-3' or 5'-AAG-3')—preventing Cascade from attacking the bacterium's own chromosomal CRISPR array.",
            "dissocVector": [
                -4.8,
                -1.8,
                1.2
            ]
        },
        {
            "meshName": "Piece_CRISPR_Cas11_Cas6e",
            "name": "Cas11 Belly & Cas6e 3'-Hairpin Cap",
            "badge": "Cas6e",
            "color": "#2A9D8F",
            "desc": "Two Cas11 (Cse2) 'belly' subunits run parallel to the Cas7 spine to electrostatically lock the displaced non-target DNA strand, while Cas6e (CasE) remains bound to the 3' stem-loop hairpin at the head of the crRNA after cleaving the pre-crRNA transcript.",
            "dissocVector": [
                -0.5,
                3.8,
                1.2
            ]
        },
        {
            "meshName": "Piece_CRISPR_Phage_DNA_RLoop",
            "name": "Invading Phage dsDNA & R-Loop Bubble",
            "badge": "R-Loop",
            "color": "#F77F00",
            "desc": "Once Cas8e verifies a valid PAM, the invading phage dsDNA duplex is pried apart and zipped directionally along the crRNA guide from the seed region (positions 1–8) to position 32, forming a locked 32-base-pair R-loop bubble (PDB: 5H9F / 1VY8).",
            "dissocVector": [
                -2.5,
                -2.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_CRISPR_Cas3_Shredder",
            "name": "Cas3 HD-Nuclease / SF2 Helicase Shredder",
            "badge": "Cas3",
            "color": "#E63946",
            "desc": "Complete R-loop locking induces a conformational shift in Cas8e/Cas11 that recruits the trans-acting executioner enzyme Cas3—a fusion of an HD phosphodiesterase nuclease domain and an ATP-dependent Superfamily 2 helicase that reels in and shreds viral DNA 3'→5'.",
            "dissocVector": [
                -5.0,
                -3.8,
                2.2
            ]
        },
        {
            "meshName": "Piece_CRISPR_EcoRI_Scissors",
            "name": "EcoRI Homodimeric Restriction Endonuclease",
            "badge": "EcoRI",
            "color": "#06D6A0",
            "desc": "Alongside adaptive CRISPR, the innate Type II restriction endonuclease EcoRI (PDB: 1ERI) operates as a symmetric homodimer that scans DNA for unmethylated palindromic 5'-GAATTC-3' sites, kinking the helix by 50° and using Mg²⁺ to cleave both strands into sticky ends.",
            "dissocVector": [
                4.0,
                0.0,
                0.5
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Innate Defense: EcoRI Palindromic Restriction (1ERI)",
            "desc": "Homodimeric EcoRI kinks unmethylated 5'-GAATTC-3' viral DNA by 50° and cleaves both strands",
            "spoken": "Stage one: Innate Restriction Endonuclease Defense. Before adaptive immunity engages, bacteria deploy innate restriction enzymes like the green EcoRI homodimer on the right, crystal structure 1ERI. While the bacterium protects its own genome by methylating adenines, EcoRI latches onto unmethylated viral 5-prime-GAATTC palindromes, kinks the DNA by fifty degrees, and slices both strands.",
            "color": "#3A86FF",
            "targetPiece": "Piece_CRISPR_Cas7_Backbone"
        },
        {
            "step": 2,
            "title": "2. CRISPR–Cascade Seahorse & 61-nt crRNA Guide (5H9F)",
            "desc": "Six Cas7 vertebrae cradle a 61-nt viral mugshot RNA capped by Cas6e at the 3' hairpin",
            "spoken": "Stage two: The Adaptive CRISPR-Cascade Surveillance Seahorse. On the left is the four-hundred-five-kilodalton Type I-E CRISPR-Cascade complex, cryo-EM structure 5H9F. Six blue Cas7 subunits interlock into a helical seahorse spine that displays a sixty-one-nucleotide CRISPR guide RNA transcribed from a previously captured viral spacer.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_CRISPR_crRNA_Guide"
        },
        {
            "step": 3,
            "title": "3. Cas8e PAM Scanning & Self vs. Non-Self Check",
            "desc": "Cas8e tail scans minor groove for 5'-ATG-3' PAM to avoid autoimmune chromosome cleavage",
            "spoken": "Stage three: Cas8e PAM Recognition. To avoid destroying the bacterium's own CRISPR locus—which contains the exact same spacer sequence—the turquoise Cas8e tail subunit first scans the viral DNA minor groove for a three-letter Protospacer Adjacent Motif, or PAM. Only when a valid PAM is detected does Cas8e drive an L1 wedge to pry open the DNA duplex.",
            "color": "#00F5D4",
            "targetPiece": "Piece_CRISPR_Cas8e_PAM_Tail"
        },
        {
            "step": 4,
            "title": "4. Directional 32-bp R-Loop Zipping & Cas11 Locking",
            "desc": "Target DNA strand base-pairs with crRNA in 5-nt segments while Cas11 locks the displaced strand",
            "spoken": "Stage four: Directional R-Loop Zipping. Once the duplex opens next to the PAM, the viral target strand zips progressively along the purple crRNA guide in five-nucleotide steps separated by the flipped bases on the Cas7 thumbs, while the two teal Cas11 belly subunits lock the displaced non-target DNA strand into a stable R-loop bubble.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_CRISPR_Cas11_Cas6e"
        },
        {
            "step": 5,
            "title": "5. Cas3 Helicase–Nuclease Recruitment & Phage Shredding",
            "desc": "Full R-loop triggers Cas3 docking, burning ATP to reel in and shred the phage genome 3'→5'",
            "spoken": "Stage five: Cas3 Executioner Recruitment and Genome Shredding. Locking of the full thirty-two-base-pair R-loop triggers a conformational switch in Cas8e that recruits the crimson Cas3 helicase-nuclease. Cas3 nicks the exposed viral DNA strand and then burns ATP to reel in and shred the invading bacteriophage genome over thousands of base pairs.",
            "color": "#F77F00",
            "targetPiece": "Piece_CRISPR_Phage_DNA_RLoop"
        }
    ],
    "analogy": "Bacteria are outnumbered 10-to-1 by lethal viruses (bacteriophages), so they evolved a 'two-layer cybersecurity and missile-defense shield': (1) Innate Restriction Enzymes (like EcoRI) act as 'hardcoded firewall filters' that scan for a fixed 6-letter palindromic code (5'-GAATTC-3') and chop any viral DNA lacking the bacterium's own methyl watermark; and (2) Adaptive CRISPR–Cascade acts as an 'updatable antivirus database with a heat-seeking shredder': the seahorse-shaped Cascade complex carries a 61-letter RNA mugshot stolen from a past viral attack, unzips matching phage DNA into an R-loop bubble, and summons the Cas3 helicase-nuclease to reel in and shred the viral genome!"
},
  storage_and_spores: {
    "id": "storage_and_spores",
    "title": "STORAGE GRANULES, MAGNETOSOMES & BACTERIAL ENDOSPORES",
    "subtitle": "Prokaryotic survival architectures: PHB carbonosomes, GvpA gas vesicles, MamK Fe₃O₄ magnetosome compass chains (7R04), and Ca-DPA endospores (2G42)",
    "scaleTag": "ORGANELLE INCLUSIONS & SPORE DORMANCY • PDB: 7R04 / 1XDO / 2G42",
    "glb": "/prokaryote/models/storage_and_spores.glb",
    "pdb": "7R04, 1XDO, 2G42",
    "pronounce": "[MAG-neh-toh-sohmz & EHN-doh-spohrz]",
    "sliderLabel": "GEOMAGNETIC / DORMANCY STRESS:",
    "sliderUnit": "µT / °C Heat",
    "sliderMin": 25,
    "sliderMax": 120,
    "sliderDefault": 85,
    "inhibitorBtn": [
        "☣️ Extreme UV & 100°C Heat",
        "🛡️ Dormant Endospore Shield"
    ],
    "energyBtn": [
        "⚡ L-Alanine Germination",
        "🛑 Ca-DPA Glassy Core"
    ],
    "upstream": "Nutrient Starvation (Spo0A~P), Microaerophilic Fe²⁺/Fe³⁺ Uptake & Carbon Excess",
    "coupling": "MamK/MamJ Magnetosome Alignment + GvpA Buoyancy + Ca-DPA/SASP DNA Vitrification",
    "downstream": "Geomagnetic Navigation, Photic Zone Flotation & Multi-Decade Spore Survival",
    "kinetics": [
        [
            "MAGNETITE CRYSTAL",
            "35–120 nm Single-Domain Fe₃O₄"
        ],
        [
            "GAS VESICLE WALL",
            "2 nm Hydrophobic GvpA Rib (7R04)"
        ],
        [
            "SPORE CORE WATER",
            "Dehydrated (25% H₂O + 10% Ca-DPA)"
        ],
        [
            "SASP DNA SHIELD",
            "A→B-Conformation UV Protection (2G42)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Store_PHB_Carbonosome",
            "name": "PHB Carbonosome & PhaP Phasin Coat",
            "badge": "PHB",
            "color": "#FFB703",
            "desc": "When carbon is plentiful but nitrogen or phosphorus is limiting, bacteria polymerize acetyl-CoA into hydrophobic Poly(3-hydroxybutyrate) (PHB) carbonosomes—0.2–0.5 µm polyester spheres coated by amphipathic PhaP phasin proteins and PhaC synthase.",
            "dissocVector": [
                -4.2,
                2.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Store_Glycogen_PolyP",
            "name": "Glycogen & Volutin Polyphosphate Granules",
            "badge": "PolyP",
            "color": "#F77F00",
            "desc": "Alongside PHB, bacteria store branched α-1,4/α-1,6 glycogen glucose polymers and dense metachromatic Volutin granules of inorganic Polyphosphate (PolyP—hundreds of orthophosphates linked by high-energy ATP-like phosphoanhydride bonds).",
            "dissocVector": [
                -4.2,
                -2.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Store_Gas_Vesicle",
            "name": "GvpA–GvpC Buoyancy Gas Vesicle Spindle",
            "badge": "GvpA",
            "color": "#00F5D4",
            "desc": "Aquatic cyanobacteria and halophilic archaea construct hollow cylindrical Gas Vesicles (PDB: 7R04) out of a 2-nm-thick crystalline rib of GvpA subunits reinforced externally by GvpC helices. Its super-hydrophobic interior surface excludes liquid water while allowing dissolved gases to equilibrate for buoyancy.",
            "dissocVector": [
                0.0,
                3.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Store_Magnetosome_Chain",
            "name": "MamK Cytoskeletal Rail & Fe₃O₄ Magnetosomes",
            "badge": "Fe₃O₄",
            "color": "#3A86FF",
            "desc": "Magnetotactic bacteria biomineralize 35–120 nm single-domain crystals of magnetite (Fe₃O₄) inside invaginated lipid vesicles. The actin-like cytoskeletal filament MamK (with adaptor MamJ) aligns 15–20 magnetosomes into a rigid compass needle that passively torques the cell along Earth's magnetic field lines.",
            "dissocVector": [
                0.0,
                -2.8,
                1.0
            ]
        },
        {
            "meshName": "Piece_Store_Spore_OuterCoat",
            "name": "Endospore Multilayered Keratin-Like Coat",
            "badge": "Coat",
            "color": "#E76F51",
            "desc": "When Bacillus or Clostridium starves, asymmetric division creates a dormant Endospore armored on the outside by a multi-layered keratin-like protein coat (>70 cross-linked Cot proteins) that blocks lysozyme, toxic chemicals, and protozoan digestion.",
            "dissocVector": [
                4.2,
                3.2,
                -1.0
            ]
        },
        {
            "meshName": "Piece_Store_Spore_Cortex",
            "name": "Endospore Thick Peptidoglycan Cortex",
            "badge": "Cortex",
            "color": "#2A9D8F",
            "desc": "Beneath the outer spore coat lies the thick Peptidoglycan Cortex, engineered with specialized muramic-δ-lactam cross-links that act as a mechanical pressure vessel to maintain the extreme dehydration of the central core.",
            "dissocVector": [
                4.2,
                0.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Store_Spore_Core_SASP",
            "name": "Ca²⁺–Dipicolinate & SASP–DNA Dormant Core",
            "badge": "SASP",
            "color": "#9D4EDD",
            "desc": "The central Spore Core is dehydrated to ~25% water and mineralized with a 1:1 chelate of Calcium and Dipicolinic Acid (Ca-DPA, ~10% dry weight) that vitrifies the cytoplasm into a heat-proof glass, while α/β-type Small Acid-Soluble Spore Proteins (SASPs, PDB: 2G42) clamp DNA into a UV-proof A-like helix.",
            "dissocVector": [
                4.2,
                -2.5,
                1.8
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. PHB Carbonosomes, Glycogen & Polyphosphate Reserves",
            "desc": "PhaP-coated PHB polyester spheres and PolyP phosphoanhydride granules store carbon and ATP",
            "spoken": "Stage one: Cytoplasmic Carbon and Energy Granules. On the left are the metabolic reserve bodies that sustain bacteria through famine: golden Poly-hydroxybutyrate carbonosomes coated by amphipathic PhaP phasin proteins, alongside branched glycogen polymers and dense polyphosphate volutin granules that store high-energy phosphoanhydride bonds.",
            "color": "#FFB703",
            "targetPiece": "Piece_Store_PHB_Carbonosome"
        },
        {
            "step": 2,
            "title": "2. GvpA–GvpC Buoyancy Gas Vesicle Spindles (7R04)",
            "desc": "2-nm ribbed protein cylinders exclude liquid water while admitting gas for vertical flotation",
            "spoken": "Stage two: GvpA Buoyancy Gas Vesicles. In the upper center is the cryo-EM structure 7R04 of a bacterial gas vesicle. Built from a two-nanometer-thick corrugated wall of GvpA ribs braced by GvpC straps, its interior face is so intensely hydrophobic that liquid water cannot enter, creating a hollow gas-filled submarine ballast tank that floats photosynthetic bacteria toward sunlight.",
            "color": "#F77F00",
            "targetPiece": "Piece_Store_Glycogen_PolyP"
        },
        {
            "step": 3,
            "title": "3. MamK Cytoskeletal Rail & Fe₃O₄ Magnetosome Compass",
            "desc": "Actin-like MamK filament aligns lipid-enclosed magnetite crystals along geomagnetic lines",
            "spoken": "Stage three: Magnetosome Compass Chains. In the lower center, magnetotactic bacteria biomineralize faceted single-domain crystals of ferrimagnetic magnetite inside lipid vesicles. The actin-like cytoskeletal filament MamK strings these vesicles into a rigid compass needle that torques the swimming bacterium along Earth's magnetic field lines toward microaerophilic sediment zones.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Store_Gas_Vesicle"
        },
        {
            "step": 4,
            "title": "4. Endospore Keratin Coat & Peptidoglycan Cortex Armor",
            "desc": "Cross-linked Cot protein coat and muramic-δ-lactam cortex shield the dormant spore",
            "spoken": "Stage four: Endospore Coat and Cortex Armor. On the right is the bacterial endospore—the most indestructible cell form on Earth. A dense outer shield of over seventy cross-linked Cot proteins blocks enzymes and oxidizing agents, while a thick inner peptidoglycan cortex rich in muramic-delta-lactam maintains core dehydration.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Store_Magnetosome_Chain"
        },
        {
            "step": 5,
            "title": "5. Ca-DPA Glass Vitrification & SASP DNA Shielding (2G42)",
            "desc": "Ca²⁺-dipicolinate turns the core into glass at 100°C while SASPs lock DNA against UV damage",
            "spoken": "Stage five: Calcium-Dipicolinate Glass and SASP DNA Protection. Deep inside the spore core, seventy-five percent of the water is removed and replaced by a crystalline matrix of calcium dipicolinate that immobilizes cellular enzymes in a heat-proof glass. Simultaneously, Small Acid-Soluble Spore Proteins, crystal structure 2G42, saturate the chromosome and convert it into an A-like helix immune to ultraviolet radiation until nutrients trigger germination.",
            "color": "#E76F51",
            "targetPiece": "Piece_Store_Spore_OuterCoat"
        }
    ],
    "analogy": "When bacteria face starvation, deep water, geomagnetic navigation, or boiling radiation, they build specialized 'survival gear and time capsules': (1) PHB and Polyphosphate granules are 'intracellular fat droplets and high-voltage battery packs' coated in phasin proteins; (2) GvpA Gas Vesicles are 'rigid waterproof submarine ballast tanks' whose hydrophobic inner ribs let air molecules diffuse in while keeping liquid water out so photosynthetic microbes float up to sunlight; (3) Magnetosomes are 'internal compass needles' of pure magnetite crystal (Fe₃O₄) strung along an actin rail; and (4) the Bacterial Endospore is nature's ultimate 'indestructible glass time capsule'—replacing core water with a calcium-dipicolinate glass matrix and wrapping DNA in SASP armor to survive boiling, vacuum, and UV radiation for centuries!"
},
  atomic_chemistry: {
    "id": "atomic_chemistry",
    "title": "LEVEL 5 & 6 ATOMIC CHEMISTRY: MONOMERS & QUANTUM BONDS",
    "subtitle": "All-atom CPK ball-and-stick coordinates of Mg²⁺·ATP⁴⁻, peptidoglycan cross-links, POPE phospholipids, Watson-Crick H-bonds, and Grotthuss proton wires",
    "scaleTag": "ATOMIC & QUANTUM BOND SCALE (0.1–1.5 nm) • PDB: 1BNA / RDKit MMFF94",
    "glb": "/prokaryote/models/atomic_chemistry.glb",
    "pdb": "1BNA, ATP, POPE",
    "pronounce": "[uh-TAHM-ik KEHM-ih-stree & KWAHN-tuhm BAHNDZ]",
    "sliderLabel": "QUANTUM BOND / ORBITAL SCALE:",
    "sliderUnit": "Å Bond Length",
    "sliderMin": 1.0,
    "sliderMax": 3.5,
    "sliderDefault": 1.54,
    "inhibitorBtn": [
        "☣️ Electrostatic Unshielded",
        "🛡️ Mg²⁺ Octahedral Chelate"
    ],
    "energyBtn": [
        "⚡ ΔG°' = -30.5 kJ/mol ATP",
        "🛑 Equilibrium Ground State"
    ],
    "upstream": "Covalent σ/π Hybridized Orbitals (C, H, N, O, P, S) & Electrostatic Dipoles",
    "coupling": "Phosphoanhydride Cleavage + SN2 Pentacoordinate Transition + Grotthuss H⁺ Hopping",
    "downstream": "Macromolecular Folding, Catalysis, Genetic Replication & Bioenergetic Coupling",
    "kinetics": [
        [
            "ATP HYDROLYSIS",
            "ΔG°' = -30.5 kJ/mol (-54 kJ/mol cell)"
        ],
        [
            "PEPTIDE C–N BOND",
            "1.33 Å Partial Double Bond (ω=180°)"
        ],
        [
            "DNA BASE STACK",
            "3.4 Å π–π Aromatic Stacking (1BNA)"
        ],
        [
            "GROTTHUSS HOP",
            "1–2 ps Proton Wire Transfer"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Atom_MgATP_Chelate",
            "name": "Octahedral Mg²⁺·ATP⁴⁻ Chelate Complex",
            "badge": "MgATP",
            "color": "#FFB703",
            "desc": "At physiological pH 7.4, Adenosine 5'-Triphosphate carries four negative charges (ATP⁴⁻) packed along its α, β, and γ phosphate chain. An octahedral Magnesium ion (Mg²⁺) chelates the β and γ oxygens, shielding electrostatic repulsion and positioning the terminal γ-phosphorus for nucleophilic attack (ΔG°' = -30.5 kJ/mol, or ~ -54 kJ/mol in vivo).",
            "dissocVector": [
                -4.2,
                2.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Atom_Murein_Monomer",
            "name": "GlcNAc–MurNAc Pentapeptide Cross-Link",
            "badge": "Murein",
            "color": "#E76F51",
            "desc": "The fundamental brick of the bacterial cell wall is the GlcNAc–β(1→4)–MurNAc disaccharide attached to a stem peptide (L-Ala–D-γ-Glu–meso-DAP–D-Ala). Penicillin-Binding Proteins (PBPs) cleave the terminal D-Ala–D-Ala bond to forge a covalent 4→3 amide cross-link to an adjacent strand.",
            "dissocVector": [
                0.0,
                3.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Atom_POPE_Phospholipid",
            "name": "POPE Zwitterionic Membrane Phospholipid",
            "badge": "POPE",
            "color": "#06D6A0",
            "desc": "1-Palmitoyl-2-oleoyl-sn-glycero-3-phosphoethanolamine (POPE) makes up ~75% of E. coli membranes: its zwitterionic ethanolamine-phosphate headgroup faces water, its saturated C16:0 sn-1 palmitoyl tail packs straight, and its unsaturated C18:1 sn-2 oleoyl tail has a rigid 30° cis-Δ9 double-bond kink that maintains membrane fluidity.",
            "dissocVector": [
                4.2,
                2.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Atom_Peptide_Resonance",
            "name": "Planar Trans-Peptide Bond Resonance (ω=180°)",
            "badge": "Peptide",
            "color": "#3A86FF",
            "desc": "Every protein backbone is governed by Pauling resonance: lone-pair electrons on the amide nitrogen delocalize into the carbonyl π* orbital, giving the C–N peptide bond (1.33 Å) 40% double-bond character. This locks the six atoms of the peptide group into a rigid planar sheet (ω = 180°), restricting folding to the Ramachandran φ and ψ angles.",
            "dissocVector": [
                -4.2,
                -2.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Atom_WatsonCrick_HBonds",
            "name": "Watson–Crick Base Pair & 3.4 Å π–π Stack",
            "badge": "B-DNA",
            "color": "#9D4EDD",
            "desc": "Extracted from the 1.2-Å atomic structure of B-DNA (PDB: 1BNA), Guanine pairs with Cytosine via three linear hydrogen bonds (2.8–2.9 Å) and Adenine pairs with Thymine via two, while vertical aromatic π–π electron clouds stack at a 3.4-Å spacing with a 36° helical twist.",
            "dissocVector": [
                0.0,
                -2.8,
                1.2
            ]
        },
        {
            "meshName": "Piece_Atom_Phosphodiester_SN2",
            "name": "Two-Metal Mg²⁺ SN2 Pentacoordinate State",
            "badge": "SN2-P",
            "color": "#F77F00",
            "desc": "All DNA/RNA polymerases, nucleases, and ATPases rely on the universal Two-Metal-Ion (Mg²⁺_A and Mg²⁺_B) SN2 transition state: Metal A lowers the pKa of the attacking 3'-OH or water nucleophile, while Metal B stabilizes the negatively charged trigonal-bipyramidal pentacoordinate phosphorus intermediate.",
            "dissocVector": [
                3.2,
                -2.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_Atom_Grotthuss_Wire",
            "name": "Grotthuss Water-Chain Proton Relay Wire",
            "badge": "H⁺Wire",
            "color": "#00F5D4",
            "desc": "In Complex I, Cytochrome bo₃, ATP Synthase, and AcrB, protons do not physically swim all the way through narrow protein channels; instead, they hop along a hydrogen-bonded chain of water molecules and Asp/Glu carboxylates via the Grotthuss mechanism—exchanging covalent O–H and hydrogen O···H bonds in 1 to 2 picoseconds.",
            "dissocVector": [
                4.8,
                -3.2,
                -1.2
            ]
        }
    ],
    "stages": [
        {
            "step": 1,
            "title": "1. Octahedral Mg²⁺·ATP⁴⁻ Electrostatic Spring",
            "desc": "Mg²⁺ chelates β/γ-phosphates of ATP⁴⁻; hydrolysis releases ΔG ≈ -54 kJ/mol in vivo",
            "spoken": "Stage one: The Octahedral Magnesium-ATP Energy Currency. At the finest scale of our masterclass—zero point one to one point five nanometers—all biological motion is governed by atomic bond geometry and quantum orbitals. In the upper left, Adenosine Triphosphate carries four tightly packed negative charges on its triphosphate tail. An octahedral magnesium ion chelates the beta and gamma oxygens, priming the terminal phosphoanhydride bond to release fifty-four kilojoules per mole when cleaved.",
            "color": "#FFB703",
            "targetPiece": "Piece_Atom_MgATP_Chelate"
        },
        {
            "step": 2,
            "title": "2. Peptidoglycan Cross-Link & POPE Lipid Kink",
            "desc": "Covalent D-Ala⁴→meso-DAP³ murein bridge and 30° cis-Δ9 oleoyl phospholipid kink",
            "spoken": "Stage two: Cell Wall Cross-Links and Membrane Lipid Fluidity. Beside ATP are the two structural monomers of the bacterial envelope: the peptidoglycan disaccharide-pentapeptide unit, whose D-Alanine to meso-DAP covalent amide bridge gives the murein wall its tensile strength, and the POPE phospholipid, whose cis-double bond introduces a thirty-degree kink in its hydrocarbon tail to keep cell membranes fluid.",
            "color": "#E76F51",
            "targetPiece": "Piece_Atom_Murein_Monomer"
        },
        {
            "step": 3,
            "title": "3. Planar Peptide Bond Resonance (1.33 Å, ω = 180°)",
            "desc": "Amide N lone-pair delocalization creates a rigid planar peptide unit for protein folding",
            "spoken": "Stage three: Planar Peptide Bond Resonance. In the lower left, we see why proteins fold into precise alpha-helices and beta-sheets rather than floppy chains. Quantum-mechanical delocalization of the nitrogen lone pair into the carbonyl oxygen gives the carbon-nitrogen peptide bond forty percent double-bond character, locking all six backbone atoms into a rigid flat plane.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Atom_POPE_Phospholipid"
        },
        {
            "step": 4,
            "title": "4. Watson–Crick H-Bonds & 3.4 Å π–π Base Stacking (1BNA)",
            "desc": "G≡C triple H-bonds and aromatic π-orbital stacking stabilize the B-DNA double helix",
            "spoken": "Stage four: Watson-Crick Hydrogen Bonding and Pi-Stacking. In the lower center, atomic coordinates from B-DNA crystal structure 1BNA show how genetic information is stored: Guanine and Cytosine pair via three directional hydrogen bonds while overlapping aromatic pi-electron clouds stack vertically every three point four angstroms like a hydrophobic column of coins.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Atom_Peptide_Resonance"
        },
        {
            "step": 5,
            "title": "5. Two-Metal SN2 Catalysis & Grotthuss Proton Hopping",
            "desc": "Mg²⁺_A/B pentacoordinate phosphorus transition state and picosecond H⁺ water wire relay",
            "spoken": "Stage five: Two-Metal SN2 Catalysis and Grotthuss Proton Wires. Finally, on the lower right are the two reaction mechanisms that drive cellular enzymes and bioenergetics: the universal two-magnesium-ion trigonal-bipyramidal transition state used by polymerases and nucleases, and the Grotthuss proton wire—where protons teleport across hydrogen-bonded water chains in picoseconds like a quantum Newton's cradle.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Atom_WatsonCrick_HBonds"
        }
    ],
    "analogy": "At Level 5 and Level 6 (0.1 to 1.5 nanometers), every biological nanomachine in the cell ultimately boils down to 'six fundamental quantum-mechanical rules of chemistry': (1) Mg²⁺·ATP⁴⁻ is a 'compressed electrostatic spring' loaded with four negative charges; (2) the Peptidoglycan cross-link is a 'covalent steel rivet'; (3) the POPE phospholipid is a 'two-legged buoy with one bent leg (cis-double bond)' that keeps membranes fluid; (4) the Peptide bond is a 'rigid flat hinge plate' locked by electron resonance; (5) DNA base pairs are '3D puzzle pieces stacked like greased coins' (π-π stacking); and (6) the Grotthuss proton wire is a 'Newton's cradle bucket brigade' that teleports protons across water chains in picoseconds!"
}
};

export const ROADMAP_SCENARIO_IDS = Object.keys(ROADMAP_SCENARIOS_CONFIG) as RoadmapScenarioId[];

export function isRoadmapScenario(scenario: string): scenario is RoadmapScenarioId {
  return scenario in ROADMAP_SCENARIOS_CONFIG;
}
