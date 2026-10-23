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
    "scaleTag": "CRYO-EM ATOMIC ARCHITECTURE \u2022 PDB: 6X9Q / 6ZTJ (3.00 \u00c5)",
    "glb": "/models/expressome_6x9q.glb",
    "pdb": "6X9Q, 6ZTJ",
    "pronounce": "[ehk-SPRES-oh-m SOO-per-kahm-pleks]",
    "sliderLabel": "TRANSCRIPTION-TRANSLATION RATE:",
    "sliderUnit": "nt/s (coupled)",
    "sliderMin": 15,
    "sliderMax": 85,
    "sliderDefault": 45,
    "inhibitorBtn": [
        "\u2623\ufe0f Rifampicin Stall",
        "\ud83d\udee1\ufe0f Coupled Expressome"
    ],
    "energyBtn": [
        "\u26a1 NTP + GTP Active",
        "\ud83d\uded1 Nucleotide Depleted"
    ],
    "upstream": "Promoter Clearance & Sigma-70 Release + 30S Shine-Dalgarno Initiation",
    "coupling": "RNAP \u03b2' Clamp \u21cc NusG Bridge + NusA \u21cc 30S S10 (uS10) (45 nt/s \u2261 15 aa/s)",
    "downstream": "Synchronized Nascent Polypeptide Synthesis & R-Loop Prevention",
    "kinetics": [
        [
            "ELONGATION RATE",
            "45 nt/s (15 codons/s)"
        ],
        [
            "BRIDGE TETHER",
            "NusG NTD\u2013CTD + NusA"
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
            "name": "RNAP Core (\u03b1\u2082\u03b2\u03b2'\u03c9)",
            "badge": "RNAP",
            "color": "#3A86FF",
            "desc": "RNA Polymerase core enzyme unwinding DNA and synthesizing nascent mRNA.",
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
            "desc": "13-bp unwound transcription bubble with template and non-template DNA strands.",
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
            "desc": "Universal transcription elongation factor bridging RNAP \u03b2' clamp to ribosomal protein uS10.",
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
            "desc": "Multi-domain elongation factor guiding nascent mRNA from RNAP exit channel to 30S entry.",
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
            "desc": "Single-stranded mRNA protected from Rho termination by continuous expressome shielding.",
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
            "desc": "Small ribosomal subunit (16S rRNA + 21 r-proteins) docking directly to RNAP-NusG.",
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
            "desc": "Large ribosomal subunit (23S/5S rRNA) catalyzing peptide bond formation at the PTC.",
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
            "desc": "Aminoacyl and peptidyl tRNAs decoding mRNA triplets in lockstep with RNAP.",
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
            "title": "1. RNAP Core (\u03b1\u2082\u03b2\u03b2'\u03c9)",
            "desc": "RNA Polymerase core enzyme unwinding DNA and synthesizing nascent mRNA.",
            "spoken": "Stage 1: RNAP Core (\u03b1\u2082\u03b2\u03b2'\u03c9). RNA Polymerase core enzyme unwinding DNA and synthesizing nascent mRNA.",
            "color": "#3A86FF",
            "targetPiece": "Piece_6X9Q_RNAP_Core"
        },
        {
            "step": 2,
            "title": "2. Transcription DNA Bubble",
            "desc": "13-bp unwound transcription bubble with template and non-template DNA strands.",
            "spoken": "Stage 2: Transcription DNA Bubble. 13-bp unwound transcription bubble with template and non-template DNA strands.",
            "color": "#F77F00",
            "targetPiece": "Piece_6X9Q_DNA_Duplex"
        },
        {
            "step": 3,
            "title": "3. NusG Physical Bridge",
            "desc": "Universal transcription elongation factor bridging RNAP \u03b2' clamp to ribosomal protein uS10.",
            "spoken": "Stage 3: NusG Physical Bridge. Universal transcription elongation factor bridging RNAP \u03b2' clamp to ribosomal protein uS10.",
            "color": "#FFB703",
            "targetPiece": "Piece_6X9Q_NusG_Bridge"
        },
        {
            "step": 4,
            "title": "4. NusA RNA Chaperone Bridge",
            "desc": "Multi-domain elongation factor guiding nascent mRNA from RNAP exit channel to 30S entry.",
            "spoken": "Stage 4: NusA RNA Chaperone Bridge. Multi-domain elongation factor guiding nascent mRNA from RNAP exit channel to 30S entry.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_6X9Q_NusA_Modulator"
        },
        {
            "step": 5,
            "title": "5. Nascent mRNA Transcript",
            "desc": "Single-stranded mRNA protected from Rho termination by continuous expressome shielding.",
            "spoken": "Stage 5: Nascent mRNA Transcript. Single-stranded mRNA protected from Rho termination by continuous expressome shielding.",
            "color": "#E63946",
            "targetPiece": "Piece_6X9Q_Nascent_mRNA"
        }
    ]
},
  envelopes: {
    "id": "envelopes",
    "title": "COMPARATIVE PROKARYOTIC CELL ENVELOPES",
    "subtitle": "Tripartite architectural comparison of Gram-negative diderm, Gram-positive thick-murein monoderm, and Archaeal ether S-layer envelopes",
    "scaleTag": "COMPARATIVE STRUCTURAL ARCHITECTURE \u2022 PDB: 2OMF / 3VMA / 1EQ7",
    "glb": "/models/envelopes_comparison.glb",
    "pdb": "2OMF, 3VMA, 1EQ7",
    "pronounce": "[proh-KAIR-ee-AHT-ik SELL EHN-vuh-lohps]",
    "sliderLabel": "TURGOR OSMOTIC PRESSURE:",
    "sliderUnit": "atm",
    "sliderMin": 1,
    "sliderMax": 25,
    "sliderDefault": 15,
    "inhibitorBtn": [
        "\u2623\ufe0f \u03b2-Lactam / Lysozyme",
        "\ud83d\udee1\ufe0f Intact Sacculus"
    ],
    "energyBtn": [
        "\u26a1 PMF Polarized (-180 mV)",
        "\ud83d\uded1 Depolarized Envelope"
    ],
    "upstream": "Cytoplasmic Lipid II & LPS Biosynthesis + SecYEG/Lpt/BAM Export",
    "coupling": "Gram(\u2212) OM+Thin PG (2OMF) vs Gram(+) Thick PG+WTA vs Archaeal S-Layer",
    "downstream": "Mechanical Turgor Resistance (2\u201320 atm) & Selective Permeability Barrier",
    "kinetics": [
        [
            "GRAM(\u2212) MUREIN",
            "3\u20136 nm (1\u20133 layers)"
        ],
        [
            "GRAM(+) MUREIN",
            "30\u201380 nm (20+ layers)"
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
            "name": "Gram(\u2212) Inner Membrane",
            "badge": "GN-IM",
            "color": "#06D6A0",
            "desc": "Phospholipid bilayer housing respiratory complexes and SecYEG translocons.",
            "dissocVector": [
                -4.2,
                -3.0,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_GN_Peptidoglycan",
            "name": "Gram(\u2212) Thin Peptidoglycan",
            "badge": "GN-PG",
            "color": "#E76F51",
            "desc": "Single-to-triple layer murein sacculus in the periplasmic space.",
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
            "desc": "Coiled-coil trimeric covalent staples (1EQ7) tethering outer membrane to peptidoglycan.",
            "dissocVector": [
                -4.2,
                1.0,
                -1.5
            ]
        },
        {
            "meshName": "Piece_Env_GN_OuterMembrane",
            "name": "Gram(\u2212) Asymmetric LPS OM",
            "badge": "GN-OM",
            "color": "#0077B6",
            "desc": "Asymmetric outer bilayer with inner phospholipids and outer Lipopolysaccharide (LPS).",
            "dissocVector": [
                -4.2,
                3.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Env_GN_OmpF_Porin",
            "name": "OmpF Trimeric \u03b2-Barrel Porin",
            "badge": "OmpF",
            "color": "#3A86FF",
            "desc": "16-stranded beta-barrel trimer (2OMF) allowing passive diffusion of hydrophilic solutes.",
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
            "desc": "Single cytoplasmic lipid bilayer anchoring lipoteichoic acids.",
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
            "desc": "Thick 40-nm crosslinked peptidoglycan mesh resisting up to 20 atm turgor pressure.",
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
            "desc": "Anionic poly-ribitol/glycerol-phosphate polymers regulating autolysins and cation homeostasis.",
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
            "desc": "Phytanyl/biphytanyl ether-linked lipid membrane stable at extreme temperature and pH.",
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
            "desc": "Paracrystalline hexagonal glycoprotein armor directly outside the archaeal membrane.",
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
            "title": "1. Gram(\u2212) Inner Membrane",
            "desc": "Phospholipid bilayer housing respiratory complexes and SecYEG translocons.",
            "spoken": "Stage 1: Gram(\u2212) Inner Membrane. Phospholipid bilayer housing respiratory complexes and SecYEG translocons.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Env_GN_InnerMembrane"
        },
        {
            "step": 2,
            "title": "2. Gram(\u2212) Thin Peptidoglycan",
            "desc": "Single-to-triple layer murein sacculus in the periplasmic space.",
            "spoken": "Stage 2: Gram(\u2212) Thin Peptidoglycan. Single-to-triple layer murein sacculus in the periplasmic space.",
            "color": "#E76F51",
            "targetPiece": "Piece_Env_GN_Peptidoglycan"
        },
        {
            "step": 3,
            "title": "3. Braun's Lipoprotein (Lpp)",
            "desc": "Coiled-coil trimeric covalent staples (1EQ7) tethering outer membrane to peptidoglycan.",
            "spoken": "Stage 3: Braun's Lipoprotein (Lpp). Coiled-coil trimeric covalent staples (1EQ7) tethering outer membrane to peptidoglycan.",
            "color": "#FFB703",
            "targetPiece": "Piece_Env_GN_Lpp_Staples"
        },
        {
            "step": 4,
            "title": "4. Gram(\u2212) Asymmetric LPS OM",
            "desc": "Asymmetric outer bilayer with inner phospholipids and outer Lipopolysaccharide (LPS).",
            "spoken": "Stage 4: Gram(\u2212) Asymmetric LPS OM. Asymmetric outer bilayer with inner phospholipids and outer Lipopolysaccharide (LPS).",
            "color": "#0077B6",
            "targetPiece": "Piece_Env_GN_OuterMembrane"
        },
        {
            "step": 5,
            "title": "5. OmpF Trimeric \u03b2-Barrel Porin",
            "desc": "16-stranded beta-barrel trimer (2OMF) allowing passive diffusion of hydrophilic solutes.",
            "spoken": "Stage 5: OmpF Trimeric \u03b2-Barrel Porin. 16-stranded beta-barrel trimer (2OMF) allowing passive diffusion of hydrophilic solutes.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Env_GN_OmpF_Porin"
        }
    ]
},
  motility_modes: {
    "id": "motility_modes",
    "title": "PROKARYOTIC MOTILITY MODES: PILI, ARCHAELLUM & GLIDING",
    "subtitle": "Comparative biomechanics of Type IV pilus grappling-hook twitching, ATP-driven archaeal rotation, and flavobacterial gliding tracks",
    "scaleTag": "COMPARATIVE NANOMACHINE BIOMECHANICS \u2022 PDB: 3JC8 / 6W6M / 5O4U",
    "glb": "/models/motility_modes.glb",
    "pdb": "3JC8, 6W6M, 5O4U",
    "pronounce": "[proh-KAIR-ee-AHT-ik moh-TIL-ih-tee MOHDZ]",
    "sliderLabel": "LOCOMOTION FORCE / SPEED:",
    "sliderUnit": "pN Stall Force",
    "sliderMin": 20,
    "sliderMax": 150,
    "sliderDefault": 110,
    "inhibitorBtn": [
        "\u2623\ufe0f \u0394pilT Retraction Block",
        "\ud83d\udee1\ufe0f Active Grappling & Gliding"
    ],
    "energyBtn": [
        "\u26a1 ATP + PMF Coupled",
        "\ud83d\uded1 Energy Uncoupled"
    ],
    "upstream": "PilB/PilT Hexamer ATP Hydrolysis, FlaI Archaeal ATPase & GldLM Proton Channel",
    "coupling": "PilA Extension/Retraction (110 pN) + FlaB Rotation + SprB Conveyor Track",
    "downstream": "Surface Twitching, Archaeal Swimming & Helical Surface Gliding (2 \u00b5m/s)",
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
            "2.0 \u00b5m/s (SprB Conveyor)"
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
            "desc": "Rotary AAA+ ATPase hexamers driving PilA polymerization (PilB) and >100 pN retraction (PilT).",
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
            "desc": "Trans-periplasmic alignment subcomplex coupling cytoplasmic ATPases to the secretin.",
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
            "desc": "Gated dodecameric outer membrane beta-barrel channel (3JC8) for pilus extrusion.",
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
            "desc": "Helical polymer of PilA subunits extending and retracting to pull the cell forward.",
            "dissocVector": [
                -4.2,
                4.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_Arch_FlaIJ_ATPase",
            "name": "Archaeal FlaI\u2013FlaJ ATPase Base",
            "badge": "FlaIJ",
            "color": "#F77F00",
            "desc": "Hexameric FlaI ATPase and FlaJ platform driving archaellum rotation via ATP (not PMF).",
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
            "desc": "FlaF/FlaG periplasmic stator anchoring the rotating archaellum to the S-layer.",
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
            "desc": "Solid Type-IV-pilus-like glycosylated filament (6W6M) spun as a rotary propeller.",
            "dissocVector": [
                0.0,
                3.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Mot_Glide_GldLM_Motor",
            "name": "GldL\u2013GldM Proton Rotary Motor",
            "badge": "GldLM",
            "color": "#E63946",
            "desc": "Asymmetric 5:2 transmembrane proton motor (5O4U) powering the T9SS and gliding track.",
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
            "desc": "640-kDa filamentous surface adhesin carried along a closed helical loop at 2 \u00b5m/s.",
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
            "title": "1. PilB / PilT Hexameric ATPase",
            "desc": "Rotary AAA+ ATPase hexamers driving PilA polymerization (PilB) and >100 pN retraction (PilT).",
            "spoken": "Stage 1: PilB / PilT Hexameric ATPase. Rotary AAA+ ATPase hexamers driving PilA polymerization (PilB) and >100 pN retraction (PilT).",
            "color": "#FFB703",
            "targetPiece": "Piece_Mot_T4P_PilBT_ATPase"
        },
        {
            "step": 2,
            "title": "2. PilMNO Inner Membrane Cage",
            "desc": "Trans-periplasmic alignment subcomplex coupling cytoplasmic ATPases to the secretin.",
            "spoken": "Stage 2: PilMNO Inner Membrane Cage. Trans-periplasmic alignment subcomplex coupling cytoplasmic ATPases to the secretin.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Mot_T4P_PilMNO_Alignment"
        },
        {
            "step": 3,
            "title": "3. PilQ Outer Membrane Secretin",
            "desc": "Gated dodecameric outer membrane beta-barrel channel (3JC8) for pilus extrusion.",
            "spoken": "Stage 3: PilQ Outer Membrane Secretin. Gated dodecameric outer membrane beta-barrel channel (3JC8) for pilus extrusion.",
            "color": "#0077B6",
            "targetPiece": "Piece_Mot_T4P_PilQ_Secretin"
        },
        {
            "step": 4,
            "title": "4. PilA Type IV Pilus Grappling Fiber",
            "desc": "Helical polymer of PilA subunits extending and retracting to pull the cell forward.",
            "spoken": "Stage 4: PilA Type IV Pilus Grappling Fiber. Helical polymer of PilA subunits extending and retracting to pull the cell forward.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Mot_T4P_PilA_Filament"
        },
        {
            "step": 5,
            "title": "5. Archaeal FlaI\u2013FlaJ ATPase Base",
            "desc": "Hexameric FlaI ATPase and FlaJ platform driving archaellum rotation via ATP (not PMF).",
            "spoken": "Stage 5: Archaeal FlaI\u2013FlaJ ATPase Base. Hexameric FlaI ATPase and FlaJ platform driving archaellum rotation via ATP (not PMF).",
            "color": "#F77F00",
            "targetPiece": "Piece_Mot_Arch_FlaIJ_ATPase"
        }
    ]
},
  microcompartment: {
    "id": "microcompartment",
    "title": "BACTERIAL MICROCOMPARTMENT (BMC) & CARBOXYSOME SHELL",
    "subtitle": "Icosahedral 202-subunit proteinaceous organelle concentrating CO\u2082 around RuBisCO and carbonic anhydrase while blocking O\u2082",
    "scaleTag": "ICOSAHEDRAL METABOLIC ORGANELLE \u2022 PDB: 7O04 / 3I82 (2.80 \u00c5)",
    "glb": "/models/microcompartment_7o04.glb",
    "pdb": "7O04, 3I82",
    "pronounce": "[kahr-BAHK-see-sohm MY-kroh-kahm-pahrt-ment]",
    "sliderLabel": "BICARBONATE (HCO\u2083\u207b) INFLUX:",
    "sliderUnit": "mM Cytosolic",
    "sliderMin": 1,
    "sliderMax": 50,
    "sliderDefault": 25,
    "inhibitorBtn": [
        "\u2623\ufe0f Vertex Uncapped (CO\u2082 Leak)",
        "\ud83d\udee1\ufe0f Sealed Icosahedron"
    ],
    "energyBtn": [
        "\u26a1 Carbonic Anhydrase Active",
        "\ud83d\uded1 CA Inhibited"
    ],
    "upstream": "Cytosolic Bicarbonate (HCO\u2083\u207b) Influx via Positively Charged BMC-H/T Pores",
    "coupling": "Carbonic Anhydrase (HCO\u2083\u207b \u2192 CO\u2082) + RuBisCO Carboxylation of RuBP",
    "downstream": "2 molecules of 3-Phosphoglycerate (3-PGA) \u2192 Calvin-Benson-Bassham Cycle",
    "kinetics": [
        [
            "SHELL SYMMETRY",
            "T=9 Icosahedron (202 oligomers)"
        ],
        [
            "PORE SELECTIVITY",
            "+Arg/Lys Pore (HCO\u2083\u207b in, O\u2082 out)"
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
            "desc": "Cyclic hexamers (Pfam00936) tiling the 20 triangular faces with 4\u20136 \u00c5 central metabolite pores.",
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
            "desc": "Tandem-domain trimers forming allosterically gated 12\u201314 \u00c5 pores for larger substrates.",
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
            "desc": "12 pentameric vertex caps (Pfam03319) generating Gaussian curvature and sealing the shell.",
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
            "desc": "Paracrystalline L8S8 RuBisCO array fixing CO\u2082 into 3-phosphoglycerate inside the lumen.",
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
            "desc": "Zn\u00b2\u207a metalloenzyme rapidly dehydrating imported HCO\u2083\u207b into high-concentration CO\u2082.",
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
            "title": "1. BMC-H Hexameric Shell Facets",
            "desc": "Cyclic hexamers (Pfam00936) tiling the 20 triangular faces with 4\u20136 \u00c5 central metabolite pores.",
            "spoken": "Stage 1: BMC-H Hexameric Shell Facets. Cyclic hexamers (Pfam00936) tiling the 20 triangular faces with 4\u20136 \u00c5 central metabolite pores.",
            "color": "#0077B6",
            "targetPiece": "Piece_BMC_Hexamer_Facets"
        },
        {
            "step": 2,
            "title": "2. BMC-T Trimeric Pseudohexamer Pores",
            "desc": "Tandem-domain trimers forming allosterically gated 12\u201314 \u00c5 pores for larger substrates.",
            "spoken": "Stage 2: BMC-T Trimeric Pseudohexamer Pores. Tandem-domain trimers forming allosterically gated 12\u201314 \u00c5 pores for larger substrates.",
            "color": "#00F5D4",
            "targetPiece": "Piece_BMC_Trimer_GatedPores"
        },
        {
            "step": 3,
            "title": "3. BMC-P Pentameric Vertex Caps",
            "desc": "12 pentameric vertex caps (Pfam03319) generating Gaussian curvature and sealing the shell.",
            "spoken": "Stage 3: BMC-P Pentameric Vertex Caps. 12 pentameric vertex caps (Pfam03319) generating Gaussian curvature and sealing the shell.",
            "color": "#FFB703",
            "targetPiece": "Piece_BMC_Pentamer_Vertices"
        },
        {
            "step": 4,
            "title": "4. Encapsulated RuBisCO Holoenzyme Core",
            "desc": "Paracrystalline L8S8 RuBisCO array fixing CO\u2082 into 3-phosphoglycerate inside the lumen.",
            "spoken": "Stage 4: Encapsulated RuBisCO Holoenzyme Core. Paracrystalline L8S8 RuBisCO array fixing CO\u2082 into 3-phosphoglycerate inside the lumen.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_BMC_Cargo_Enzymes"
        },
        {
            "step": 5,
            "title": "5. Carbonic Anhydrase Dehydratase",
            "desc": "Zn\u00b2\u207a metalloenzyme rapidly dehydrating imported HCO\u2083\u207b into high-concentration CO\u2082.",
            "spoken": "Stage 5: Carbonic Anhydrase Dehydratase. Zn\u00b2\u207a metalloenzyme rapidly dehydrating imported HCO\u2083\u207b into high-concentration CO\u2082.",
            "color": "#E63946",
            "targetPiece": "Piece_BMC_CarbonicAnhydrase"
        }
    ]
},
  chemosensory_mcp: {
    "id": "chemosensory_mcp",
    "title": "CHEMOSENSORY TRANSDUCTION ARRAY (MCP\u2013CHEW\u2013CHEA)",
    "subtitle": "Cooperative hexagonal trimers-of-dimers receptor lattice amplifying nanomolar chemical gradients to switch flagellar rotation",
    "scaleTag": "CRYO-ET HEXAGONAL SIGNALING LATTICE \u2022 PDB: 6S1K / 3JA6",
    "glb": "/models/chemosensory_6s1k.glb",
    "pdb": "6S1K, 3JA6",
    "pronounce": "[kee-moh-SEN-suh-ree M-C-P uh-RAY]",
    "sliderLabel": "ATTRACTANT GRADIENT (L-Asp):",
    "sliderUnit": "\u00b5M Ligand",
    "sliderMin": 0,
    "sliderMax": 100,
    "sliderDefault": 15,
    "inhibitorBtn": [
        "\u2623\ufe0f Repellent Spike (Tumble)",
        "\ud83d\udee1\ufe0f Attractant Smooth Run"
    ],
    "energyBtn": [
        "\u26a1 CheA Autophosphorylation",
        "\ud83d\uded1 ATP Depleted"
    ],
    "upstream": "Periplasmic Attractant/Repellent Binding + CheR/CheB Methylation Memory",
    "coupling": "2 \u00c5 MCP Piston Shift \u2192 HAMP Rotation \u2192 CheW\u2013CheA Kinase Switch (Hill n \u2248 35)",
    "downstream": "CheY-P Diffusion to Flagellar FliM Switch (CCW Run vs CW Tumble)",
    "kinetics": [
        [
            "HILL COOPERATIVITY",
            "n \u2248 35 (35-fold Amplification)"
        ],
        [
            "PISTON DISPLACEMENT",
            "2.0 \u00c5 Downward Helix \u03b14 Shift"
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
            "desc": "Periplasmic Tar/Tsr sensory domains binding aspartate, serine, or MalE-maltose.",
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
            "desc": "Curved cell-pole cytoplasmic membrane hosting the transmembrane TM1/TM2 helices.",
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
            "desc": "Parallel 4-helix bundles converting a 2 \u00c5 vertical piston shift into dynamic scissoring.",
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
            "desc": "200 \u00c5 cytoplasmic coiled-coil stalks assembling into hexagonal trimers-of-dimers.",
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
            "desc": "Enzymatic adaptation module methylating/demethylating 4 glutamate residues for gradient memory.",
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
            "desc": "Cytoplasmic signaling baseplate (6S1K) linking receptor tips into an ultra-cooperative network.",
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
            "desc": "Phosphorylated CheY-P messengers diffusing to the flagellar C-ring to trigger CW tumbles.",
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
            "title": "1. Periplasmic 4-Helix Ligand Sensors",
            "desc": "Periplasmic Tar/Tsr sensory domains binding aspartate, serine, or MalE-maltose.",
            "spoken": "Stage 1: Periplasmic 4-Helix Ligand Sensors. Periplasmic Tar/Tsr sensory domains binding aspartate, serine, or MalE-maltose.",
            "color": "#FFB703",
            "targetPiece": "Piece_6S1K_Periplasmic_Sensors"
        },
        {
            "step": 2,
            "title": "2. Polar Inner Membrane Bilayer",
            "desc": "Curved cell-pole cytoplasmic membrane hosting the transmembrane TM1/TM2 helices.",
            "spoken": "Stage 2: Polar Inner Membrane Bilayer. Curved cell-pole cytoplasmic membrane hosting the transmembrane TM1/TM2 helices.",
            "color": "#06D6A0",
            "targetPiece": "Piece_6S1K_Inner_Membrane"
        },
        {
            "step": 3,
            "title": "3. HAMP Signal Conversion Bundles",
            "desc": "Parallel 4-helix bundles converting a 2 \u00c5 vertical piston shift into dynamic scissoring.",
            "spoken": "Stage 3: HAMP Signal Conversion Bundles. Parallel 4-helix bundles converting a 2 \u00c5 vertical piston shift into dynamic scissoring.",
            "color": "#00F5D4",
            "targetPiece": "Piece_6S1K_HAMP_Transducer"
        },
        {
            "step": 4,
            "title": "4. MCP Coiled-Coil Trimers-of-Dimers",
            "desc": "200 \u00c5 cytoplasmic coiled-coil stalks assembling into hexagonal trimers-of-dimers.",
            "spoken": "Stage 4: MCP Coiled-Coil Trimers-of-Dimers. 200 \u00c5 cytoplasmic coiled-coil stalks assembling into hexagonal trimers-of-dimers.",
            "color": "#3A86FF",
            "targetPiece": "Piece_6S1K_MCP_Trimers"
        },
        {
            "step": 5,
            "title": "5. CheR Methyltransferase & CheB",
            "desc": "Enzymatic adaptation module methylating/demethylating 4 glutamate residues for gradient memory.",
            "spoken": "Stage 5: CheR Methyltransferase & CheB. Enzymatic adaptation module methylating/demethylating 4 glutamate residues for gradient memory.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_6S1K_CheR_CheB_Adaptors"
        }
    ]
},
  pili_fimbriae: {
    "id": "pili_fimbriae",
    "title": "CHAPERONE\u2013USHER FIMBRIAE, CURLI AMYLOID & BIOFILM",
    "subtitle": "Donor-strand complemented Type 1 FimA/FimH catch-bond adhesin rod alongside CsgG/CsgA extracellular amyloid biofilm fibers",
    "scaleTag": "CRYO-EM ADHESION & BIOFILM MATRIX \u2022 PDB: 6GTO / 1TR7 / 4B0M",
    "glb": "/models/pili_fimbriae_6gto.glb",
    "pdb": "6GTO, 1TR7, 4B0M",
    "pronounce": "[CHAP-er-ohn USH-er FIM-bree-ee & KUR-lee]",
    "sliderLabel": "HYDRODYNAMIC SHEAR STRESS:",
    "sliderUnit": "pN Catch-Bond",
    "sliderMin": 5,
    "sliderMax": 90,
    "sliderDefault": 45,
    "inhibitorBtn": [
        "\u2623\ufe0f D-Mannose Competitive Block",
        "\ud83d\udee1\ufe0f Catch-Bond Locked"
    ],
    "energyBtn": [
        "\u26a1 Donor-Strand Exchange",
        "\ud83d\uded1 Usher Arrested"
    ],
    "upstream": "SecYEG Periplasmic Translocation + DsbA Disulfide Folding",
    "coupling": "FimC\u2013FimD Donor-Strand Exchange (ATP-free) + CsgG Entropy-Driven Secretion",
    "downstream": "Host Mannose Catch-Bond Adhesion & Cross-\u03b2 Amyloid Biofilm Fortress",
    "kinetics": [
        [
            "FIMH CATCH-BOND",
            "Lifetime increases at 30\u201360 pN"
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
            "desc": "Asymmetric Gram-negative outer membrane anchoring the FimD usher and CsgG channel.",
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
            "desc": "Boomerang-shaped periplasmic chaperone stabilizing pilus subunits via G1 donor-strand complementation.",
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
            "desc": "Twin-pore outer membrane assembly platform catalyzing donor-strand exchange without ATP.",
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
            "desc": "Right-handed helical cylinder (6GTO) that uncoils reversibly under fluid shear stress.",
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
            "desc": "Two-domain tip adhesin (1TR7) switching from low-affinity to high-affinity state under tensile force.",
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
            "desc": "36-stranded outer membrane beta-barrel crown (4B0M) with a 9 \u00c5 constriction ring.",
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
            "desc": "Membrane-associated minor curli subunit templating the folding of soluble CsgA.",
            "dissocVector": [
                3.5,
                1.2,
                1.5
            ]
        },
        {
            "meshName": "Piece_Pili_CsgA_Amyloid_Mesh",
            "name": "CsgA Cross-\u03b2 Curli Biofilm Matrix",
            "badge": "CsgA",
            "color": "#E63946",
            "desc": "Extracellular cross-beta amyloid fibrils forming an insoluble scaffold in bacterial biofilms.",
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
            "title": "1. Outer Membrane LPS Bilayer",
            "desc": "Asymmetric Gram-negative outer membrane anchoring the FimD usher and CsgG channel.",
            "spoken": "Stage 1: Outer Membrane LPS Bilayer. Asymmetric Gram-negative outer membrane anchoring the FimD usher and CsgG channel.",
            "color": "#0077B6",
            "targetPiece": "Piece_Pili_Outer_Membrane"
        },
        {
            "step": 2,
            "title": "2. Periplasmic FimC Chaperone",
            "desc": "Boomerang-shaped periplasmic chaperone stabilizing pilus subunits via G1 donor-strand complementation.",
            "spoken": "Stage 2: Periplasmic FimC Chaperone. Boomerang-shaped periplasmic chaperone stabilizing pilus subunits via G1 donor-strand complementation.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Pili_FimC_Chaperone"
        },
        {
            "step": 3,
            "title": "3. FimD 24-Stranded Outer Membrane Usher",
            "desc": "Twin-pore outer membrane assembly platform catalyzing donor-strand exchange without ATP.",
            "spoken": "Stage 3: FimD 24-Stranded Outer Membrane Usher. Twin-pore outer membrane assembly platform catalyzing donor-strand exchange without ATP.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_Pili_FimD_Usher"
        },
        {
            "step": 4,
            "title": "4. FimA Helical Pilus Spring Rod",
            "desc": "Right-handed helical cylinder (6GTO) that uncoils reversibly under fluid shear stress.",
            "spoken": "Stage 4: FimA Helical Pilus Spring Rod. Right-handed helical cylinder (6GTO) that uncoils reversibly under fluid shear stress.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Pili_FimA_Helical_Rod"
        },
        {
            "step": 5,
            "title": "5. FimH Catch-Bond Lectin Tip Adhesin",
            "desc": "Two-domain tip adhesin (1TR7) switching from low-affinity to high-affinity state under tensile force.",
            "spoken": "Stage 5: FimH Catch-Bond Lectin Tip Adhesin. Two-domain tip adhesin (1TR7) switching from low-affinity to high-affinity state under tensile force.",
            "color": "#FFB703",
            "targetPiece": "Piece_Pili_FimH_CatchBond"
        }
    ]
},
  nucleoid: {
    "id": "nucleoid",
    "title": "BACTERIAL NUCLEOID & NAP CHROMOSOME COMPACTION",
    "subtitle": "1,000-fold compaction of the 4.6 Mbp chromosome via plectonemic supercoiling, HU/IHF 160\u00b0 DNA bending, H-NS bridging, and MukBEF",
    "scaleTag": "CHROMOSOMAL ARCHITECTURE \u2022 PDB: 1P71 / 3IV5 / 1BNA",
    "glb": "/models/nucleoid_naps.glb",
    "pdb": "1P71, 3IV5, 1BNA",
    "pronounce": "[NOO-klee-oyd N-A-P kuhm-PAK-shuhn]",
    "sliderLabel": "SUPERHELICAL DENSITY (\u03c3):",
    "sliderUnit": "\u03c3 Underwinding",
    "sliderMin": -0.09,
    "sliderMax": -0.02,
    "sliderDefault": -0.06,
    "inhibitorBtn": [
        "\u2623\ufe0f Novobiocin Relaxation",
        "\ud83d\udee1\ufe0f Compacted Plectonemes"
    ],
    "energyBtn": [
        "\u26a1 MukBEF SMC Loop Extrusion",
        "\ud83d\uded1 SMC ATPase Paused"
    ],
    "upstream": "DNA Gyrase Negative Supercoiling (\u03c3 \u2248 -0.06) + Growth-Phase NAP Expression",
    "coupling": "HU/IHF Proline Intercalation (160\u00b0 Bend) + H-NS Bridging + MukBEF Clamping",
    "downstream": "10-kbp Topological Loops, Xenogeneic Silencing & Chromosome Segregation",
    "kinetics": [
        [
            "COMPACTION RATIO",
            "~1,000-fold (1.5 mm \u2192 1 \u00b5m)"
        ],
        [
            "IHF/HU BEND ANGLE",
            "160\u00b0\u2013180\u00b0 Hairpin U-Turn (1P71)"
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
            "desc": "Negatively supercoiled right-handed interwound B-DNA plectoneme loop (\u03c3 \u2248 -0.06).",
            "dissocVector": [
                0.0,
                0.0,
                -2.0
            ]
        },
        {
            "meshName": "Piece_Nuc_HU_Dimers",
            "name": "HU / IHF Sharp 160\u00b0 DNA Bending Clamp",
            "badge": "IHF",
            "color": "#00F5D4",
            "desc": "Heterodimeric ribbon-helix-helix clamp (1P71) inserting conserved Proline beta-arms into minor groove.",
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
            "desc": "Head-to-head/tail-to-tail oligomeric filament (3IV5) bridging two DNA duplexes to silence transcription.",
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
            "desc": "Homodimeric helix-turn-helix protein stabilizing DNA branch crossovers and rRNA promoters.",
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
            "desc": "ATP-driven 50-nm SMC condensin complex extruding and anchoring chromosomal macrodomain loops.",
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
            "title": "1. Plectonemic Supercoiled DNA Domain",
            "desc": "Negatively supercoiled right-handed interwound B-DNA plectoneme loop (\u03c3 \u2248 -0.06).",
            "spoken": "Stage 1: Plectonemic Supercoiled DNA Domain. Negatively supercoiled right-handed interwound B-DNA plectoneme loop (\u03c3 \u2248 -0.06).",
            "color": "#F77F00",
            "targetPiece": "Piece_Nuc_Plectoneme_DNA"
        },
        {
            "step": 2,
            "title": "2. HU / IHF Sharp 160\u00b0 DNA Bending Clamp",
            "desc": "Heterodimeric ribbon-helix-helix clamp (1P71) inserting conserved Proline beta-arms into minor groove.",
            "spoken": "Stage 2: HU / IHF Sharp 160\u00b0 DNA Bending Clamp. Heterodimeric ribbon-helix-helix clamp (1P71) inserting conserved Proline beta-arms into minor groove.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Nuc_HU_Dimers"
        },
        {
            "step": 3,
            "title": "3. H-NS Parallel Filament DNA Bridge",
            "desc": "Head-to-head/tail-to-tail oligomeric filament (3IV5) bridging two DNA duplexes to silence transcription.",
            "spoken": "Stage 3: H-NS Parallel Filament DNA Bridge. Head-to-head/tail-to-tail oligomeric filament (3IV5) bridging two DNA duplexes to silence transcription.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Nuc_HNS_Bridge"
        },
        {
            "step": 4,
            "title": "4. Fis Exponential-Phase Crossover Bender",
            "desc": "Homodimeric helix-turn-helix protein stabilizing DNA branch crossovers and rRNA promoters.",
            "spoken": "Stage 4: Fis Exponential-Phase Crossover Bender. Homodimeric helix-turn-helix protein stabilizing DNA branch crossovers and rRNA promoters.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Nuc_Fis_Benders"
        },
        {
            "step": 5,
            "title": "5. MukBEF SMC Condensin Root Ring",
            "desc": "ATP-driven 50-nm SMC condensin complex extruding and anchoring chromosomal macrodomain loops.",
            "spoken": "Stage 5: MukBEF SMC Condensin Root Ring. ATP-driven 50-nm SMC condensin complex extruding and anchoring chromosomal macrodomain loops.",
            "color": "#E63946",
            "targetPiece": "Piece_Nuc_MukBEF_Clamp"
        }
    ]
},
  chaperones: {
    "id": "chaperones",
    "title": "PROKARYOTIC PROTEOSTASIS: GROEL\u2013GROES & DNAK\u2013DNAJ",
    "subtitle": "Three-tier protein folding network: ribosome-bound Trigger Factor cradle, DnaK\u2013DnaJ\u2013GrpE Hsp70 holdase, and 800-kDa GroEL\u2013GroES Anfinsen cage",
    "scaleTag": "CRYO-EM & CRYSTAL CHAPERONIN CAGE \u2022 PDB: 1AON / 2KHO / 1W26",
    "glb": "/models/chaperones_1aon.glb",
    "pdb": "1AON, 2KHO, 1W26",
    "pronounce": "[groh-E-L groh-E-S shah-puh-ROH-nin KAYJ]",
    "sliderLabel": "ATP FOLDING TIMER RATE:",
    "sliderUnit": "s Cage Timer",
    "sliderMin": 4,
    "sliderMax": 20,
    "sliderDefault": 10,
    "inhibitorBtn": [
        "\u2623\ufe0f Heat Shock (42\u00b0C Aggregation)",
        "\ud83d\udee1\ufe0f Homeostatic Folding"
    ],
    "energyBtn": [
        "\u26a1 7 ATP Cis-Ring Firing",
        "\ud83d\uded1 ADP-Locked State"
    ],
    "upstream": "Ribosome Exit Tunnel Polypeptide Emergence + Thermal/Oxidative Unfolding",
    "coupling": "Trigger Factor (1W26) \u2192 DnaK/DnaJ/GrpE (2KHO) \u2192 GroEL\u2013GroES Cage (1AON)",
    "downstream": "Native Tertiary Protein Fold (175,000 \u00c5\u00b3 Hydrophilic Anfinsen Chamber)",
    "kinetics": [
        [
            "ANFINSEN VOLUME",
            "175,000 \u00c5\u00b3 (Up to 60 kDa client)"
        ],
        [
            "ATP STOICHIOMETRY",
            "7 ATP per 10-second cis cycle"
        ],
        [
            "CONFORMATION SHIFT",
            "60\u00b0 Elevation + 90\u00b0 Twist"
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
            "desc": "70-kDa heptameric dome cap sealing the cis-GroEL folding chamber upon ATP binding.",
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
            "desc": "ATP-bound 7-subunit cis ring with hydrophilic interior walls promoting native client folding.",
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
            "desc": "Non-native polypeptide isolated from aggregation inside the 175,000 \u00c5\u00b3 Anfinsen cage.",
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
            "desc": "Bottom 7-subunit ring presenting hydrophobic apical jaws to capture the next unfolded client.",
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
            "desc": "Ribosome-associated PPIase chaperone (1W26) shielding nascent chains at the 50S exit tunnel.",
            "dissocVector": [
                -4.5,
                0.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_1AON_DnaK_DnaJ_GrpE",
            "name": "DnaK\u2013DnaJ\u2013GrpE Hsp70 Holdase Machine",
            "badge": "DnaKJ",
            "color": "#9D4EDD",
            "desc": "ATP-dependent Hsp70 clamp (2KHO) with DnaJ co-chaperone and GrpE nucleotide exchange factor.",
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
            "title": "1. GroES Heptameric Dome Lid",
            "desc": "70-kDa heptameric dome cap sealing the cis-GroEL folding chamber upon ATP binding.",
            "spoken": "Stage 1: GroES Heptameric Dome Lid. 70-kDa heptameric dome cap sealing the cis-GroEL folding chamber upon ATP binding.",
            "color": "#FFB703",
            "targetPiece": "Piece_1AON_GroES_Lid"
        },
        {
            "step": 2,
            "title": "2. GroEL Cis-Ring Folding Chamber",
            "desc": "ATP-bound 7-subunit cis ring with hydrophilic interior walls promoting native client folding.",
            "spoken": "Stage 2: GroEL Cis-Ring Folding Chamber. ATP-bound 7-subunit cis ring with hydrophilic interior walls promoting native client folding.",
            "color": "#3A86FF",
            "targetPiece": "Piece_1AON_GroEL_CisRing"
        },
        {
            "step": 3,
            "title": "3. Encapsulated Refolding Client Protein",
            "desc": "Non-native polypeptide isolated from aggregation inside the 175,000 \u00c5\u00b3 Anfinsen cage.",
            "spoken": "Stage 3: Encapsulated Refolding Client Protein. Non-native polypeptide isolated from aggregation inside the 175,000 \u00c5\u00b3 Anfinsen cage.",
            "color": "#06D6A0",
            "targetPiece": "Piece_1AON_Encapsulated_Substrate"
        },
        {
            "step": 4,
            "title": "4. GroEL Trans-Ring Open Receptor",
            "desc": "Bottom 7-subunit ring presenting hydrophobic apical jaws to capture the next unfolded client.",
            "spoken": "Stage 4: GroEL Trans-Ring Open Receptor. Bottom 7-subunit ring presenting hydrophobic apical jaws to capture the next unfolded client.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_1AON_GroEL_TransRing"
        },
        {
            "step": 5,
            "title": "5. Trigger Factor Ribosome Dragon Cradle",
            "desc": "Ribosome-associated PPIase chaperone (1W26) shielding nascent chains at the 50S exit tunnel.",
            "spoken": "Stage 5: Trigger Factor Ribosome Dragon Cradle. Ribosome-associated PPIase chaperone (1W26) shielding nascent chains at the 50S exit tunnel.",
            "color": "#00F5D4",
            "targetPiece": "Piece_1AON_Trigger_Factor"
        }
    ]
},
  rna_degradosome: {
    "id": "rna_degradosome",
    "title": "BACTERIAL RNA DEGRADOSOME & MRNA TURNOVER FACTORY",
    "subtitle": "Inner-membrane-tethered RNase E tetramer scaffold coordinating RhlB helicase, PNPase exoribonuclease, enolase, and Hfq-sRNA",
    "scaleTag": "MACROMOLECULAR MRNA DECAY HUB \u2022 PDB: 5M3P / 2C0B (2.60 \u00c5)",
    "glb": "/models/rna_degradosome_5m3p.glb",
    "pdb": "5M3P, 2C0B",
    "pronounce": "[R-N-A deh-GRAD-oh-sohm]",
    "sliderLabel": "MRNA HALF-LIFE TURNOVER:",
    "sliderUnit": "nt/s Decay",
    "sliderMin": 10,
    "sliderMax": 120,
    "sliderDefault": 60,
    "inhibitorBtn": [
        "\u2623\ufe0f Pi Depletion Stall",
        "\ud83d\udee1\ufe0f Active Phosphorolysis"
    ],
    "energyBtn": [
        "\u26a1 RhlB ATP Helicase On",
        "\ud83d\uded1 Stem-Loop Stalled"
    ],
    "upstream": "RppH 5'-Pyrophosphate Removal (5'-PPP \u2192 5'-P) or Hfq\u2013sRNA Base-Pairing",
    "coupling": "RNase E Endonucleolytic Cleavage \u2192 RhlB Unwinding \u2192 PNPase 3'\u21925' Phosphorolysis",
    "downstream": "Recycled Ribonucleoside Diphosphates (rNDPs) for Nucleotide Salvage",
    "kinetics": [
        [
            "MRNA HALF-LIFE",
            "2\u20135 min (Rapid Reprogramming)"
        ],
        [
            "RNASE E SENSOR",
            "5'-Monophosphate Pocket (Zn\u00b2\u207a)"
        ],
        [
            "PNPASE REACTION",
            "RNA\u2099 + Pi \u21cc RNA\u2099\u208b\u2081 + rNDP"
        ],
        [
            "MEMBRANE ANCHOR",
            "Amphipathic Helix A (aa 565\u2013582)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Deg_Inner_Membrane",
            "name": "Cytoplasmic Inner Membrane Anchor",
            "badge": "IM",
            "color": "#06D6A0",
            "desc": "Inner membrane bilayer tethering the degradosome via RNase E amphipathic Segment A.",
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
            "desc": "Zn\u00b2\u207a-coordinated dimer-of-dimers endoribonuclease cleaving single-stranded AU-rich mRNA.",
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
            "desc": "Flexible macromolecular hub (aa 530\u20131061) recruiting RhlB, enolase, and PNPase.",
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
            "desc": "ATPase RNA helicase melting 3' Rho-independent terminator hairpins for degradation.",
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
            "desc": "Moonlighting glycolytic enzyme coupling carbon energy status to stress sRNA decay.",
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
            "desc": "Doughnut-shaped KH/S1 phosphorolytic ring (5M3P) degrading RNA 3'\u21925' into rNDPs.",
            "dissocVector": [
                2.8,
                -3.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Deg_Hfq_sRNA_Target",
            "name": "Hfq Sm-Hexamer & sRNA\u2013mRNA Duplex",
            "badge": "Hfq",
            "color": "#E63946",
            "desc": "Hexameric RNA chaperone delivering regulatory sRNA-paired mRNAs to RNase E.",
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
            "title": "1. Cytoplasmic Inner Membrane Anchor",
            "desc": "Inner membrane bilayer tethering the degradosome via RNase E amphipathic Segment A.",
            "spoken": "Stage 1: Cytoplasmic Inner Membrane Anchor. Inner membrane bilayer tethering the degradosome via RNase E amphipathic Segment A.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Deg_Inner_Membrane"
        },
        {
            "step": 2,
            "title": "2. RNase E Catalytic NTD Tetramer (2C0B)",
            "desc": "Zn\u00b2\u207a-coordinated dimer-of-dimers endoribonuclease cleaving single-stranded AU-rich mRNA.",
            "spoken": "Stage 2: RNase E Catalytic NTD Tetramer (2C0B). Zn\u00b2\u207a-coordinated dimer-of-dimers endoribonuclease cleaving single-stranded AU-rich mRNA.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Deg_RNaseE_Tetramer"
        },
        {
            "step": 3,
            "title": "3. RNase E Intrinsically Disordered CTD",
            "desc": "Flexible macromolecular hub (aa 530\u20131061) recruiting RhlB, enolase, and PNPase.",
            "spoken": "Stage 3: RNase E Intrinsically Disordered CTD. Flexible macromolecular hub (aa 530\u20131061) recruiting RhlB, enolase, and PNPase.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Deg_CTD_Scaffold"
        },
        {
            "step": 4,
            "title": "4. RhlB DEAD-Box ATP-Dependent Helicase",
            "desc": "ATPase RNA helicase melting 3' Rho-independent terminator hairpins for degradation.",
            "spoken": "Stage 4: RhlB DEAD-Box ATP-Dependent Helicase. ATPase RNA helicase melting 3' Rho-independent terminator hairpins for degradation.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Deg_RhlB_Helicase"
        },
        {
            "step": 5,
            "title": "5. Glycolytic Enolase Dimeric Sensor",
            "desc": "Moonlighting glycolytic enzyme coupling carbon energy status to stress sRNA decay.",
            "spoken": "Stage 5: Glycolytic Enolase Dimeric Sensor. Moonlighting glycolytic enzyme coupling carbon energy status to stress sRNA decay.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_Deg_Enolase_Dimer"
        }
    ]
},
  metabolic_hubs: {
    "id": "metabolic_hubs",
    "title": "SUPRAMOLECULAR METABOLIC & RESPIRATORY HUBS",
    "subtitle": "The 4.5-MDa 24-subunit cubic Pyruvate Dehydrogenase complex (1EAE) coupled via NADH to the Cytochrome bo\u2083 ubiquinol oxidase pump (6WTI)",
    "scaleTag": "METABOLIC CHANNELING & BIOENERGETICS \u2022 PDB: 1EAE / 6WTI",
    "glb": "/models/metabolic_hubs.glb",
    "pdb": "1EAE, 6WTI",
    "pronounce": "[py-ROO-vayt dee-HY-droh-jeh-nays & SY-toh-krohm]",
    "sliderLabel": "GLYCOLYTIC PYRUVATE FLUX:",
    "sliderUnit": "s\u207b\u00b9 Turnover",
    "sliderMin": 20,
    "sliderMax": 200,
    "sliderDefault": 110,
    "inhibitorBtn": [
        "\u2623\ufe0f Cyanide / Arsenite Block",
        "\ud83d\udee1\ufe0f Aerobic Respiration"
    ],
    "energyBtn": [
        "\u26a1 Lipoyl Swinging Arm Active",
        "\ud83d\uded1 CoA Depleted"
    ],
    "upstream": "Glycolytic Pyruvate + CoA-SH + NAD\u207a \u2192 PDH Complex \u2192 NADH \u2192 Complex I \u2192 Q8H\u2082",
    "coupling": "14 nm Lipoyl Arm Substrate Channeling (E1\u2192E2\u2192E3) + Heme b\u2013Heme o\u2083\u2013CuB O\u2082 Reduction",
    "downstream": "Acetyl-CoA (TCA Cycle Entry) + 8 H\u207a/2e\u207b Proton Motive Force (\u0394p = -180 mV)",
    "kinetics": [
        [
            "PDH CORE SYMMETRY",
            "Octahedral 24-mer Cube (4.5 MDa)"
        ],
        [
            "LIPOYL ARM REACH",
            "14 nm Swinging Tether (E1\u2194E2\u2194E3)"
        ],
        [
            "CYT BO\u2083 PUMPING",
            "2e\u207b + 4H\u207a_in + \u00bdO\u2082 \u2192 H\u2082O + 4H\u207a_out"
        ],
        [
            "COFACTORS",
            "TPP, Lipoamide, FAD, Heme b/o\u2083, CuB"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Met_PDH_E2_CubicCore",
            "name": "E2 Dihydrolipoyl Transacetylase 24-mer Cube",
            "badge": "E2-Cube",
            "color": "#FFB703",
            "desc": "Octahedral 24-subunit core (1EAE) synthesizing Acetyl-CoA at the inner catalytic vertices.",
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
            "desc": "Outer shell dimers catalyzing thiamine-pyrophosphate decarboxylation of pyruvate.",
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
            "desc": "Peripheral FAD-dependent dimers re-oxidizing dihydrolipoamide and generating NADH.",
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
            "desc": "Tethered lipoyl domains visiting E1, E2, and E3 active sites sequentially without intermediate diffusion.",
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
            "desc": "Cytoplasmic membrane containing the ubiquinone-8/ubiquinol-8 redox pool.",
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
            "desc": "Periplasmic and TM domain binding ubiquinol (Q8H\u2082) and releasing 2 scalar protons.",
            "dissocVector": [
                2.5,
                1.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_Met_CyoB_HemeCuCore",
            "name": "CyoB Subunit I Heme b / Heme o\u2083\u2013CuB Core",
            "badge": "CyoB",
            "color": "#E63946",
            "desc": "15-TM catalytic subunit (6WTI) reducing O\u2082 to H\u2082O and pumping 2 vectorial protons via D/K-channels.",
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
            "desc": "Transmembrane subunits III and IV stabilizing the binuclear Heme o\u2083\u2013CuB center.",
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
            "title": "1. E2 Dihydrolipoyl Transacetylase 24-mer Cube",
            "desc": "Octahedral 24-subunit core (1EAE) synthesizing Acetyl-CoA at the inner catalytic vertices.",
            "spoken": "Stage 1: E2 Dihydrolipoyl Transacetylase 24-mer Cube. Octahedral 24-subunit core (1EAE) synthesizing Acetyl-CoA at the inner catalytic vertices.",
            "color": "#FFB703",
            "targetPiece": "Piece_Met_PDH_E2_CubicCore"
        },
        {
            "step": 2,
            "title": "2. E1 Pyruvate Dehydrogenase (TPP) Shell",
            "desc": "Outer shell dimers catalyzing thiamine-pyrophosphate decarboxylation of pyruvate.",
            "spoken": "Stage 2: E1 Pyruvate Dehydrogenase (TPP) Shell. Outer shell dimers catalyzing thiamine-pyrophosphate decarboxylation of pyruvate.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Met_PDH_E1_Shell"
        },
        {
            "step": 3,
            "title": "3. E3 Dihydrolipoyl Dehydrogenase (FAD)",
            "desc": "Peripheral FAD-dependent dimers re-oxidizing dihydrolipoamide and generating NADH.",
            "spoken": "Stage 3: E3 Dihydrolipoyl Dehydrogenase (FAD). Peripheral FAD-dependent dimers re-oxidizing dihydrolipoamide and generating NADH.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Met_PDH_E3_Shell"
        },
        {
            "step": 4,
            "title": "4. Flexible 14-nm Lipoyl-Lysine Swinging Arms",
            "desc": "Tethered lipoyl domains visiting E1, E2, and E3 active sites sequentially without intermediate diffusion.",
            "spoken": "Stage 4: Flexible 14-nm Lipoyl-Lysine Swinging Arms. Tethered lipoyl domains visiting E1, E2, and E3 active sites sequentially without intermediate diffusion.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Met_PDH_Lipoyl_Arms"
        },
        {
            "step": 5,
            "title": "5. Bioenergetic Inner Membrane Bilayer",
            "desc": "Cytoplasmic membrane containing the ubiquinone-8/ubiquinol-8 redox pool.",
            "spoken": "Stage 5: Bioenergetic Inner Membrane Bilayer. Cytoplasmic membrane containing the ubiquinone-8/ubiquinol-8 redox pool.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Met_Cyo_InnerMembrane"
        }
    ]
},
  periplasmic_transport: {
    "id": "periplasmic_transport",
    "title": "PERIPLASMIC CHAPERONE (SURA) & MALFGK\u2082\u2013MALE ABC IMPORTER",
    "subtitle": "ATP-independent SurA outer-membrane protein chaperone relay (1M5Y) alongside the Venus-flytrap MalE\u2013MalFGK\u2082 maltose ABC transporter (2R6G)",
    "scaleTag": "PERIPLASMIC RELAY & ABC TRANSPORT \u2022 PDB: 1M5Y / 1OMP / 2R6G",
    "glb": "/models/periplasmic_transport.glb",
    "pdb": "1M5Y, 1OMP, 2R6G",
    "pronounce": "[per-ih-PLAZ-mik Soor-A & MAL-tose A-B-C]",
    "sliderLabel": "PERIPLASMIC MALTOSE CONC:",
    "sliderUnit": "\u00b5M Substrate",
    "sliderMin": 0.5,
    "sliderMax": 50.0,
    "sliderDefault": 12.0,
    "inhibitorBtn": [
        "\u2623\ufe0f Vanadate Transition Trap",
        "\ud83d\udee1\ufe0f Alternating Access Active"
    ],
    "energyBtn": [
        "\u26a1 MalK\u2082 2-ATP Tweezer Closure",
        "\ud83d\uded1 Nucleotide-Free Inward"
    ],
    "upstream": "LamB Maltoporin Outer Membrane Diffusion + SecYEG OMP Polypeptide Emergence",
    "coupling": "SurA Cradle Relay to BAM + MalE Venus-Flytrap (35\u00b0 Hinge) \u2192 MalFGK\u2082 Alternating Access",
    "downstream": "Cytoplasmic Maltose Import (Kd \u2248 1 \u00b5M) & Native Outer Membrane \u03b2-Barrel Folding",
    "kinetics": [
        [
            "MALE AFFINITY",
            "Kd \u2248 1 \u00b5M (35\u00b0 Venus-Flytrap)"
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
            "desc": "Asymmetric N+C-terminal core module binding aromatic Ar-X-Ar motifs of unfolded OMPs.",
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
            "desc": "Satellite peptidyl-prolyl cis/trans isomerase domains tethered to the SurA cradle.",
            "dissocVector": [
                -4.8,
                3.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_Peri_Unfolded_OMP_Cargo",
            "name": "Unfolded \u03b2-Barrel Polypeptide Client",
            "badge": "OMP",
            "color": "#9D4EDD",
            "desc": "Hydrophobic outer membrane polypeptide protected from periplasmic aggregation en route to BAM.",
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
            "desc": "Bilobed periplasmic solute-binding protein (1OMP) clamping maltose via a 35\u00b0 hinge closure.",
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
            "desc": "\u03b1-1,4-linked D-glucose disaccharide captured in the aromatic groove of MalE and MalF.",
            "dissocVector": [
                3.2,
                1.5,
                2.2
            ]
        },
        {
            "meshName": "Piece_Peri_MalFG_TM_Channel",
            "name": "MalF\u2013MalG Transmembrane Permease",
            "badge": "MalFG",
            "color": "#2A9D8F",
            "desc": "14-TM heterodimeric inner-membrane channel switching between inward- and outward-facing states.",
            "dissocVector": [
                3.2,
                -0.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Peri_MalK2_ATPase_Dimer",
            "name": "MalK\u2082 Cytoplasmic NBD ATPase Tweezers",
            "badge": "MalK\u2082",
            "color": "#F77F00",
            "desc": "Dimeric ATP-binding cassette motor (2R6G) driving alternating access via ATP binding and hydrolysis.",
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
            "title": "1. SurA NC-Core Chaperone Cradle (1M5Y)",
            "desc": "Asymmetric N+C-terminal core module binding aromatic Ar-X-Ar motifs of unfolded OMPs.",
            "spoken": "Stage 1: SurA NC-Core Chaperone Cradle (1M5Y). Asymmetric N+C-terminal core module binding aromatic Ar-X-Ar motifs of unfolded OMPs.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Peri_SurA_CoreCradle"
        },
        {
            "step": 2,
            "title": "2. SurA P1 & P2 Parvulin PPIase Domains",
            "desc": "Satellite peptidyl-prolyl cis/trans isomerase domains tethered to the SurA cradle.",
            "spoken": "Stage 2: SurA P1 & P2 Parvulin PPIase Domains. Satellite peptidyl-prolyl cis/trans isomerase domains tethered to the SurA cradle.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Peri_SurA_PPIase_P1P2"
        },
        {
            "step": 3,
            "title": "3. Unfolded \u03b2-Barrel Polypeptide Client",
            "desc": "Hydrophobic outer membrane polypeptide protected from periplasmic aggregation en route to BAM.",
            "spoken": "Stage 3: Unfolded \u03b2-Barrel Polypeptide Client. Hydrophobic outer membrane polypeptide protected from periplasmic aggregation en route to BAM.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Peri_Unfolded_OMP_Cargo"
        },
        {
            "step": 4,
            "title": "4. MalE Periplasmic Maltose-Binding Protein",
            "desc": "Bilobed periplasmic solute-binding protein (1OMP) clamping maltose via a 35\u00b0 hinge closure.",
            "spoken": "Stage 4: MalE Periplasmic Maltose-Binding Protein. Bilobed periplasmic solute-binding protein (1OMP) clamping maltose via a 35\u00b0 hinge closure.",
            "color": "#FFB703",
            "targetPiece": "Piece_Peri_MalE_VenusFlytrap"
        },
        {
            "step": 5,
            "title": "5. Bound Maltose Disaccharide Substrate",
            "desc": "\u03b1-1,4-linked D-glucose disaccharide captured in the aromatic groove of MalE and MalF.",
            "spoken": "Stage 5: Bound Maltose Disaccharide Substrate. \u03b1-1,4-linked D-glucose disaccharide captured in the aromatic groove of MalE and MalF.",
            "color": "#E63946",
            "targetPiece": "Piece_Peri_Maltose_Ligand"
        }
    ]
},
  efflux_pump: {
    "id": "efflux_pump",
    "title": "ACRAB\u2013TOLC MULTIDRUG RESISTANCE RND EFFLUX PUMP",
    "subtitle": "32-nm trans-envelope antibiotic extrusion cannon coupling inner-membrane proton motive force to the three-state AcrB peristaltic cycle",
    "scaleTag": "CRYO-EM MULTIDRUG EFFLUX CANNON \u2022 PDB: 5V5S / 5O66 (3.60 \u00c5)",
    "glb": "/models/efflux_5v5s.glb",
    "pdb": "5V5S, 5O66",
    "pronounce": "[A-kruh-A-B-tohl-C EHF-luhks PUHMP]",
    "sliderLabel": "PERIPLASMIC PROTON FLUX (\u0394pH):",
    "sliderUnit": "Drugs/s Extruded",
    "sliderMin": 5,
    "sliderMax": 100,
    "sliderDefault": 55,
    "inhibitorBtn": [
        "\u2623\ufe0f PA\u03b2N Efflux Inhibitor",
        "\ud83d\udee1\ufe0f Peristaltic Drug Extrusion"
    ],
    "energyBtn": [
        "\u26a1 Asp407/408 Proton Relay",
        "\ud83d\uded1 PMF Collapsed"
    ],
    "upstream": "Periplasmic / Outer-Leaflet Antibiotic Capture (\u03b2-Lactams, Fluoroquinolones, Bile Salts)",
    "coupling": "H\u207a Influx via Asp407/Asp408/Lys940 \u2192 AcrB L \u2192 T \u2192 O Functional Rotation \u2192 TolC Duct",
    "downstream": "Direct Extracellular Expulsion Across Outer Membrane (Bypassing Periplasm)",
    "kinetics": [
        [
            "TOTAL SPAN",
            "320 \u00c5 (32 nm) Trans-Envelope"
        ],
        [
            "STOICHIOMETRY",
            "AcrB\u2083 : AcrA\u2086 : AcrZ\u2083 : TolC\u2083"
        ],
        [
            "ROTATIONAL CYCLE",
            "Loose (L) \u2192 Tight (T) \u2192 Open (O)"
        ],
        [
            "PROTON RELAY",
            "Asp407\u2013Asp408\u2013Lys940 Triad"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_5V5S_TolC_ExitDuct",
            "name": "TolC Trimeric Outer Membrane Exit Duct",
            "badge": "TolC",
            "color": "#3A86FF",
            "desc": "140 \u00c5 \u03b1-helical periplasmic cannon and 12-stranded \u03b2-barrel outer membrane pore.",
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
            "desc": "Asymmetric Gram-negative outer membrane pierced by the TolC exit duct.",
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
            "desc": "Six elongated periplasmic adaptor proteins sealing the tunnel between AcrB and TolC.",
            "dissocVector": [
                0.0,
                0.8,
                1.5
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrB_Loose",
            "name": "AcrB Protomer 1 \u2014 Loose (Access) State",
            "badge": "AcrB-L",
            "color": "#00F5D4",
            "desc": "Access protomer opening its periplasmic vestibule to capture drugs from the membrane leaflet.",
            "dissocVector": [
                -2.8,
                -2.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrB_Tight",
            "name": "AcrB Protomer 2 \u2014 Tight (Binding) Pocket",
            "badge": "AcrB-T",
            "color": "#FFB703",
            "desc": "Binding protomer expanding the Phe-rich hydrophobic trap around the antibiotic substrate.",
            "dissocVector": [
                0.0,
                -2.8,
                2.2
            ]
        },
        {
            "meshName": "Piece_5V5S_AcrB_Open",
            "name": "AcrB Protomer 3 \u2014 Open (Extrusion) Funnel",
            "badge": "AcrB-O",
            "color": "#9D4EDD",
            "desc": "Protonated extrusion protomer squeezing the drug pocket shut and firing substrate up into TolC.",
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
            "desc": "Inner membrane bilayer housing the 36 TM helices of the AcrB trimer and AcrZ modulators.",
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
            "title": "1. TolC Trimeric Outer Membrane Exit Duct",
            "desc": "140 \u00c5 \u03b1-helical periplasmic cannon and 12-stranded \u03b2-barrel outer membrane pore.",
            "spoken": "Stage 1: TolC Trimeric Outer Membrane Exit Duct. 140 \u00c5 \u03b1-helical periplasmic cannon and 12-stranded \u03b2-barrel outer membrane pore.",
            "color": "#3A86FF",
            "targetPiece": "Piece_5V5S_TolC_ExitDuct"
        },
        {
            "step": 2,
            "title": "2. Outer Membrane LPS Bilayer",
            "desc": "Asymmetric Gram-negative outer membrane pierced by the TolC exit duct.",
            "spoken": "Stage 2: Outer Membrane LPS Bilayer. Asymmetric Gram-negative outer membrane pierced by the TolC exit duct.",
            "color": "#0077B6",
            "targetPiece": "Piece_5V5S_Outer_Membrane"
        },
        {
            "step": 3,
            "title": "3. AcrA Hexameric Membrane Fusion Collar",
            "desc": "Six elongated periplasmic adaptor proteins sealing the tunnel between AcrB and TolC.",
            "spoken": "Stage 3: AcrA Hexameric Membrane Fusion Collar. Six elongated periplasmic adaptor proteins sealing the tunnel between AcrB and TolC.",
            "color": "#F77F00",
            "targetPiece": "Piece_5V5S_AcrA_Collar"
        },
        {
            "step": 4,
            "title": "4. AcrB Protomer 1 \u2014 Loose (Access) State",
            "desc": "Access protomer opening its periplasmic vestibule to capture drugs from the membrane leaflet.",
            "spoken": "Stage 4: AcrB Protomer 1 \u2014 Loose (Access) State. Access protomer opening its periplasmic vestibule to capture drugs from the membrane leaflet.",
            "color": "#00F5D4",
            "targetPiece": "Piece_5V5S_AcrB_Loose"
        },
        {
            "step": 5,
            "title": "5. AcrB Protomer 2 \u2014 Tight (Binding) Pocket",
            "desc": "Binding protomer expanding the Phe-rich hydrophobic trap around the antibiotic substrate.",
            "spoken": "Stage 5: AcrB Protomer 2 \u2014 Tight (Binding) Pocket. Binding protomer expanding the Phe-rich hydrophobic trap around the antibiotic substrate.",
            "color": "#FFB703",
            "targetPiece": "Piece_5V5S_AcrB_Tight"
        }
    ]
},
  secretion_systems: {
    "id": "secretion_systems",
    "title": "TRANS-ENVELOPE SECRETION NANOMACHINES: T3SS, T4SS & T6SS",
    "subtitle": "Comparative macromolecular weapons: T3SS needle injectisome (7OKO), T4SS conjugative DNA pilus (7AH9), and T6SS contractile spear (6H3L)",
    "scaleTag": "CRYO-EM VIRULENCE & CONJUGATION \u2022 PDB: 7OKO / 7AH9 / 6H3L",
    "glb": "/models/secretion_systems.glb",
    "pdb": "7OKO, 7AH9, 6H3L",
    "pronounce": "[see-KREE-shuhn NAN-oh-muh-sheenz T3 T4 T6]",
    "sliderLabel": "EFFECTOR / DNA TRANSLOCATION:",
    "sliderUnit": "s\u207b\u00b9 Secretion",
    "sliderMin": 5,
    "sliderMax": 80,
    "sliderDefault": 40,
    "inhibitorBtn": [
        "\u2623\ufe0f ATPase Gate Locked",
        "\ud83d\udee1\ufe0f Active Firing & Conjugation"
    ],
    "energyBtn": [
        "\u26a1 InvC / VirB4 / ClpV ATP",
        "\ud83d\uded1 Energy Depleted"
    ],
    "upstream": "Chaperone-Effector Docking (T3SS), Relaxosome oriT Nicking (T4SS) & VipAB Assembly (T6SS)",
    "coupling": "25 \u00c5 Needle Conduit (7OKO) + VirB4/VirD4 ssDNA Pump (7AH9) + 2 ms Sheath Contraction (6H3L)",
    "downstream": "Host Cytoskeleton Remodeling, Horizontal Plasmid Transfer & Rival Cell Lysis",
    "kinetics": [
        [
            "T3SS NEEDLE BORE",
            "20\u201325 \u00c5 (Unfolded Effectors)"
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
            "desc": "24-fold inner/outer membrane rings and InvC hexameric ATPase unfolding virulence effectors.",
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
            "desc": "Extracellular 80-nm hollow needle (7OKO) and host-membrane pore translocon.",
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
            "desc": "Cytoplasmic relaxase nicking plasmid oriT and docking ssDNA to the VirD4 hexamer.",
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
            "desc": "Twin hexameric AAA+ ATPase barrels (7AH9) powering DNA translocation and pilus biogenesis.",
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
            "desc": "Megadalton VirB7/VirB9/VirB10 periplasmic/outer-membrane chamber spanning the envelope.",
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
            "desc": "Helical VirB2\u2013phospholipid filament establishing physical mating junctions between cells.",
            "dissocVector": [
                0.0,
                4.2,
                1.0
            ]
        },
        {
            "meshName": "Piece_Sec_T6SS_VipAB_Sheath",
            "name": "T6SS Contractile VipA\u2013VipB Outer Sheath",
            "badge": "VipAB",
            "color": "#06D6A0",
            "desc": "6-start helical spring sheath (6H3L) that contracts 50% in <2 ms to launch the inner spear.",
            "dissocVector": [
                4.2,
                -0.5,
                0.0
            ]
        },
        {
            "meshName": "Piece_Sec_T6SS_Hcp_VgrG_Spear",
            "name": "T6SS Hcp Inner Tube & VgrG\u2013PAAR Spike",
            "badge": "VgrG",
            "color": "#2A9D8F",
            "desc": "Hexameric Hcp rings tipped by a trimeric VgrG needle and Zn\u00b2\u207a-sharpened PAAR warhead.",
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
            "title": "1. T3SS Multi-Ring Basal Body & InvC ATPase",
            "desc": "24-fold inner/outer membrane rings and InvC hexameric ATPase unfolding virulence effectors.",
            "spoken": "Stage 1: T3SS Multi-Ring Basal Body & InvC ATPase. 24-fold inner/outer membrane rings and InvC hexameric ATPase unfolding virulence effectors.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Sec_T3SS_BasalBody"
        },
        {
            "step": 2,
            "title": "2. T3SS PrgI Helical Needle & SipD TipV",
            "desc": "Extracellular 80-nm hollow needle (7OKO) and host-membrane pore translocon.",
            "spoken": "Stage 2: T3SS PrgI Helical Needle & SipD TipV. Extracellular 80-nm hollow needle (7OKO) and host-membrane pore translocon.",
            "color": "#E63946",
            "targetPiece": "Piece_Sec_T3SS_Needle_Tip"
        },
        {
            "step": 3,
            "title": "3. T4SS Relaxosome & VirD4 Coupling Protein",
            "desc": "Cytoplasmic relaxase nicking plasmid oriT and docking ssDNA to the VirD4 hexamer.",
            "spoken": "Stage 3: T4SS Relaxosome & VirD4 Coupling Protein. Cytoplasmic relaxase nicking plasmid oriT and docking ssDNA to the VirD4 hexamer.",
            "color": "#FFB703",
            "targetPiece": "Piece_Sec_T4SS_Plasmid_Relaxosome"
        },
        {
            "step": 4,
            "title": "4. T4SS Inner Membrane VirB4/VirB11 ATPases",
            "desc": "Twin hexameric AAA+ ATPase barrels (7AH9) powering DNA translocation and pilus biogenesis.",
            "spoken": "Stage 4: T4SS Inner Membrane VirB4/VirB11 ATPases. Twin hexameric AAA+ ATPase barrels (7AH9) powering DNA translocation and pilus biogenesis.",
            "color": "#F77F00",
            "targetPiece": "Piece_Sec_T4SS_IMC_ATPases"
        },
        {
            "step": 5,
            "title": "5. T4SS 14-Fold Outer Membrane Core Complex",
            "desc": "Megadalton VirB7/VirB9/VirB10 periplasmic/outer-membrane chamber spanning the envelope.",
            "spoken": "Stage 5: T4SS 14-Fold Outer Membrane Core Complex. Megadalton VirB7/VirB9/VirB10 periplasmic/outer-membrane chamber spanning the envelope.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Sec_T4SS_OMCC_Chamber"
        }
    ]
},
  crispr_defense: {
    "id": "crispr_defense",
    "title": "PROKARYOTIC PHAGE DEFENSE: CRISPR\u2013CASCADE & ECORI",
    "subtitle": "Adaptive RNA-guided Type I-E CRISPR-Cascade surveillance seahorse + Cas3 shredder (5H9F) alongside innate EcoRI restriction endonuclease (1ERI)",
    "scaleTag": "ADAPTIVE & INNATE PHAGE IMMUNITY \u2022 PDB: 5H9F / 1VY8 / 1ERI",
    "glb": "/models/crispr_defense_1vy8.glb",
    "pdb": "5H9F, 1VY8, 1ERI",
    "pronounce": "[KRIS-per KAS-kayd & ECK-oh-R-one]",
    "sliderLabel": "PHAGE DNA R-LOOP ZIPPING:",
    "sliderUnit": "bp Hybridized",
    "sliderMin": 0,
    "sliderMax": 32,
    "sliderDefault": 32,
    "inhibitorBtn": [
        "\u2623\ufe0f AcrF Anti-CRISPR Block",
        "\ud83d\udee1\ufe0f Active Phage Cleavage"
    ],
    "energyBtn": [
        "\u26a1 Cas3 ATP Helicase Shredder",
        "\ud83d\uded1 Cas3 Nick-Only"
    ],
    "upstream": "Bacteriophage dsDNA Injection \u2192 PAM Scanning (5'-ATG-3') & 5'-GAATTC-3' Recognition",
    "coupling": "Directional 32-nt R-Loop Locking \u2192 Cas3 Recruitment + EcoRI Mg\u00b2\u207a Phosphodiester Cleavage",
    "downstream": "Processive 3'\u21925' Phage Genome Destruction & Blunt/Sticky-End Restriction",
    "kinetics": [
        [
            "CASCADE MASS",
            "405 kDa (11 Subunits + 61-nt crRNA)"
        ],
        [
            "R-LOOP SEED",
            "Positions 1\u20135 + 7\u20138 (6-nt Flip)"
        ],
        [
            "CAS3 SHREDDING",
            "ATP-Driven 3'\u21925' Exonucleolysis"
        ],
        [
            "ECORI TARGET",
            "5'-G\u2193AATTC-3' (50\u00b0 DNA Kink, 1ERI)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_CRISPR_Cas7_Backbone",
            "name": "Cas7\u2081\u2013\u2086 Helical Seahorse Backbone",
            "badge": "Cas7",
            "color": "#3A86FF",
            "desc": "Six interlocking Cas7 subunits cradling the 32-nt crRNA guide and flipping every 6th base.",
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
            "desc": "Mature spacer RNA guiding sequence-specific hybridization with invading viral DNA.",
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
            "desc": "Large subunit scanning minor groove for the 5'-ATG-3' PAM and initiating duplex melting.",
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
            "desc": "Cas11 dimer stabilizing the displaced DNA strand and Cas6e capping the 3' crRNA stem-loop.",
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
            "desc": "32-bp unwound viral DNA bubble with target strand paired to crRNA and displaced non-target loop.",
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
            "desc": "Trans-acting executioner enzyme reeling in and shredding viral DNA in the 3'\u21925' direction.",
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
            "desc": "Innate Type II restriction enzyme (1ERI) kinking unmethylated 5'-GAATTC-3' phage DNA by 50\u00b0.",
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
            "title": "1. Cas7\u2081\u2013\u2086 Helical Seahorse Backbone",
            "desc": "Six interlocking Cas7 subunits cradling the 32-nt crRNA guide and flipping every 6th base.",
            "spoken": "Stage 1: Cas7\u2081\u2013\u2086 Helical Seahorse Backbone. Six interlocking Cas7 subunits cradling the 32-nt crRNA guide and flipping every 6th base.",
            "color": "#3A86FF",
            "targetPiece": "Piece_CRISPR_Cas7_Backbone"
        },
        {
            "step": 2,
            "title": "2. 61-nt CRISPR Guide RNA (crRNA)",
            "desc": "Mature spacer RNA guiding sequence-specific hybridization with invading viral DNA.",
            "spoken": "Stage 2: 61-nt CRISPR Guide RNA (crRNA). Mature spacer RNA guiding sequence-specific hybridization with invading viral DNA.",
            "color": "#9D4EDD",
            "targetPiece": "Piece_CRISPR_crRNA_Guide"
        },
        {
            "step": 3,
            "title": "3. Cas8e (Cse1) PAM-Sensing Tail",
            "desc": "Large subunit scanning minor groove for the 5'-ATG-3' PAM and initiating duplex melting.",
            "spoken": "Stage 3: Cas8e (Cse1) PAM-Sensing Tail. Large subunit scanning minor groove for the 5'-ATG-3' PAM and initiating duplex melting.",
            "color": "#00F5D4",
            "targetPiece": "Piece_CRISPR_Cas8e_PAM_Tail"
        },
        {
            "step": 4,
            "title": "4. Cas11 Belly & Cas6e 3'-Hairpin Cap",
            "desc": "Cas11 dimer stabilizing the displaced DNA strand and Cas6e capping the 3' crRNA stem-loop.",
            "spoken": "Stage 4: Cas11 Belly & Cas6e 3'-Hairpin Cap. Cas11 dimer stabilizing the displaced DNA strand and Cas6e capping the 3' crRNA stem-loop.",
            "color": "#2A9D8F",
            "targetPiece": "Piece_CRISPR_Cas11_Cas6e"
        },
        {
            "step": 5,
            "title": "5. Invading Phage dsDNA & R-Loop Bubble",
            "desc": "32-bp unwound viral DNA bubble with target strand paired to crRNA and displaced non-target loop.",
            "spoken": "Stage 5: Invading Phage dsDNA & R-Loop Bubble. 32-bp unwound viral DNA bubble with target strand paired to crRNA and displaced non-target loop.",
            "color": "#F77F00",
            "targetPiece": "Piece_CRISPR_Phage_DNA_RLoop"
        }
    ]
},
  storage_and_spores: {
    "id": "storage_and_spores",
    "title": "STORAGE GRANULES, MAGNETOSOMES & BACTERIAL ENDOSPORES",
    "subtitle": "Prokaryotic survival architectures: PHB carbonosomes, GvpA gas vesicles, MamK Fe\u2083O\u2084 magnetosome compass chains (7R04), and Ca-DPA endospores (2G42)",
    "scaleTag": "ORGANELLE INCLUSIONS & SPORE DORMANCY \u2022 PDB: 7R04 / 1XDO / 2G42",
    "glb": "/models/storage_and_spores.glb",
    "pdb": "7R04, 1XDO, 2G42",
    "pronounce": "[MAG-neh-toh-sohmz & EHN-doh-spohrz]",
    "sliderLabel": "GEOMAGNETIC / DORMANCY STRESS:",
    "sliderUnit": "\u00b5T / \u00b0C Heat",
    "sliderMin": 25,
    "sliderMax": 120,
    "sliderDefault": 85,
    "inhibitorBtn": [
        "\u2623\ufe0f Extreme UV & 100\u00b0C Heat",
        "\ud83d\udee1\ufe0f Dormant Endospore Shield"
    ],
    "energyBtn": [
        "\u26a1 L-Alanine Germination",
        "\ud83d\uded1 Ca-DPA Glassy Core"
    ],
    "upstream": "Nutrient Starvation (Spo0A~P), Microaerophilic Fe\u00b2\u207a/Fe\u00b3\u207a Uptake & Carbon Excess",
    "coupling": "MamK/MamJ Magnetosome Alignment + GvpA Buoyancy + Ca-DPA/SASP DNA Vitrification",
    "downstream": "Geomagnetic Navigation, Photic Zone Flotation & Multi-Decade Spore Survival",
    "kinetics": [
        [
            "MAGNETITE CRYSTAL",
            "35\u2013120 nm Single-Domain Fe\u2083O\u2084"
        ],
        [
            "GAS VESICLE WALL",
            "2 nm Hydrophobic GvpA Rib (7R04)"
        ],
        [
            "SPORE CORE WATER",
            "Dehydrated (25% H\u2082O + 10% Ca-DPA)"
        ],
        [
            "SASP DNA SHIELD",
            "A\u2192B-Conformation UV Protection (2G42)"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Store_PHB_Carbonosome",
            "name": "PHB Carbonosome & PhaP Phasin Coat",
            "badge": "PHB",
            "color": "#FFB703",
            "desc": "Hydrophobic poly(3-hydroxybutyrate) polyester core stabilized by amphipathic PhaPphasins.",
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
            "desc": "Branched \u03b1-1,4/1,6-glucan energy reserve and phosphoanhydride polyphosphate chelator.",
            "dissocVector": [
                -4.2,
                -2.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Store_Gas_Vesicle",
            "name": "GvpA\u2013GvpC Buoyancy Gas Vesicle Spindle",
            "badge": "GvpA",
            "color": "#00F5D4",
            "desc": "Hollow gas-permeable, water-impermeable proteinaceous cylinder (7R04) for vertical flotation.",
            "dissocVector": [
                0.0,
                3.2,
                0.0
            ]
        },
        {
            "meshName": "Piece_Store_Magnetosome_Chain",
            "name": "MamK Cytoskeletal Rail & Fe\u2083O\u2084 Magnetosomes",
            "badge": "Fe\u2083O\u2084",
            "color": "#3A86FF",
            "desc": "Actin-like MamK filament aligning lipid-bounded ferrimagnetic magnetite crystals as a compass.",
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
            "desc": "Cross-linked Cot protein armor blocking lysozyme, oxidizing chemicals, and predation.",
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
            "desc": "Muramic-\u03b4-lactam cortex maintaining osmotic dehydration of the central spore core.",
            "dissocVector": [
                4.2,
                0.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Store_Spore_Core_SASP",
            "name": "Ca\u00b2\u207a\u2013Dipicolinate & SASP\u2013DNA Dormant Core",
            "badge": "SASP",
            "color": "#9D4EDD",
            "desc": "Glassy Ca-DPA matrix and \u03b1/\u03b2-type SASPs (2G42) locking DNA into a UV-resistant A-like form.",
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
            "title": "1. PHB Carbonosome & PhaP Phasin Coat",
            "desc": "Hydrophobic poly(3-hydroxybutyrate) polyester core stabilized by amphipathic PhaPphasins.",
            "spoken": "Stage 1: PHB Carbonosome & PhaP Phasin Coat. Hydrophobic poly(3-hydroxybutyrate) polyester core stabilized by amphipathic PhaPphasins.",
            "color": "#FFB703",
            "targetPiece": "Piece_Store_PHB_Carbonosome"
        },
        {
            "step": 2,
            "title": "2. Glycogen & Volutin Polyphosphate Granules",
            "desc": "Branched \u03b1-1,4/1,6-glucan energy reserve and phosphoanhydride polyphosphate chelator.",
            "spoken": "Stage 2: Glycogen & Volutin Polyphosphate Granules. Branched \u03b1-1,4/1,6-glucan energy reserve and phosphoanhydride polyphosphate chelator.",
            "color": "#F77F00",
            "targetPiece": "Piece_Store_Glycogen_PolyP"
        },
        {
            "step": 3,
            "title": "3. GvpA\u2013GvpC Buoyancy Gas Vesicle Spindle",
            "desc": "Hollow gas-permeable, water-impermeable proteinaceous cylinder (7R04) for vertical flotation.",
            "spoken": "Stage 3: GvpA\u2013GvpC Buoyancy Gas Vesicle Spindle. Hollow gas-permeable, water-impermeable proteinaceous cylinder (7R04) for vertical flotation.",
            "color": "#00F5D4",
            "targetPiece": "Piece_Store_Gas_Vesicle"
        },
        {
            "step": 4,
            "title": "4. MamK Cytoskeletal Rail & Fe\u2083O\u2084 Magnetosomes",
            "desc": "Actin-like MamK filament aligning lipid-bounded ferrimagnetic magnetite crystals as a compass.",
            "spoken": "Stage 4: MamK Cytoskeletal Rail & Fe\u2083O\u2084 Magnetosomes. Actin-like MamK filament aligning lipid-bounded ferrimagnetic magnetite crystals as a compass.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Store_Magnetosome_Chain"
        },
        {
            "step": 5,
            "title": "5. Endospore Multilayered Keratin-Like Coat",
            "desc": "Cross-linked Cot protein armor blocking lysozyme, oxidizing chemicals, and predation.",
            "spoken": "Stage 5: Endospore Multilayered Keratin-Like Coat. Cross-linked Cot protein armor blocking lysozyme, oxidizing chemicals, and predation.",
            "color": "#E76F51",
            "targetPiece": "Piece_Store_Spore_OuterCoat"
        }
    ]
},
  atomic_chemistry: {
    "id": "atomic_chemistry",
    "title": "LEVEL 5 & 6 ATOMIC CHEMISTRY: MONOMERS & QUANTUM BONDS",
    "subtitle": "All-atom CPK ball-and-stick coordinates of Mg\u00b2\u207a\u00b7ATP\u2074\u207b, peptidoglycan cross-links, POPE phospholipids, Watson-Crick H-bonds, and Grotthuss proton wires",
    "scaleTag": "ATOMIC & QUANTUM BOND SCALE (0.1\u20131.5 nm) \u2022 PDB: 1BNA / RDKit MMFF94",
    "glb": "/models/atomic_chemistry.glb",
    "pdb": "1BNA, ATP, POPE",
    "pronounce": "[uh-TAHM-ik KEHM-ih-stree & KWAHN-tuhm BAHNDZ]",
    "sliderLabel": "QUANTUM BOND / ORBITAL SCALE:",
    "sliderUnit": "\u00c5 Bond Length",
    "sliderMin": 1.0,
    "sliderMax": 3.5,
    "sliderDefault": 1.54,
    "inhibitorBtn": [
        "\u2623\ufe0f Electrostatic Unshielded",
        "\ud83d\udee1\ufe0f Mg\u00b2\u207a Octahedral Chelate"
    ],
    "energyBtn": [
        "\u26a1 \u0394G\u00b0' = -30.5 kJ/mol ATP",
        "\ud83d\uded1 Equilibrium Ground State"
    ],
    "upstream": "Covalent \u03c3/\u03c0 Hybridized Orbitals (C, H, N, O, P, S) & Electrostatic Dipoles",
    "coupling": "Phosphoanhydride Cleavage + SN2 Pentacoordinate Transition + Grotthuss H\u207a Hopping",
    "downstream": "Macromolecular Folding, Catalysis, Genetic Replication & Bioenergetic Coupling",
    "kinetics": [
        [
            "ATP HYDROLYSIS",
            "\u0394G\u00b0' = -30.5 kJ/mol (-54 kJ/mol cell)"
        ],
        [
            "PEPTIDE C\u2013N BOND",
            "1.33 \u00c5 Partial Double Bond (\u03c9=180\u00b0)"
        ],
        [
            "DNA BASE STACK",
            "3.4 \u00c5 \u03c0\u2013\u03c0 Aromatic Stacking (1BNA)"
        ],
        [
            "GROTTHUSS HOP",
            "1\u20132 ps Proton Wire Transfer"
        ]
    ],
    "pieces": [
        {
            "meshName": "Piece_Atom_MgATP_Chelate",
            "name": "Octahedral Mg\u00b2\u207a\u00b7ATP\u2074\u207b Chelate Complex",
            "badge": "MgATP",
            "color": "#FFB703",
            "desc": "Adenosine 5'-triphosphate coordinated by octahedral Mg\u00b2\u207a shielding \u03b2/\u03b3-phosphate repulsion.",
            "dissocVector": [
                -4.2,
                2.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Atom_Murein_Monomer",
            "name": "GlcNAc\u2013MurNAc Pentapeptide Cross-Link",
            "badge": "Murein",
            "color": "#E76F51",
            "desc": "Peptidoglycan repeating unit with D-Ala\u2074\u2192meso-DAP\u00b3 transpeptidase covalent bridge.",
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
            "desc": "1-palmitoyl-2-oleoyl-sn-glycero-3-phosphoethanolamine with a 30\u00b0 cis-\u03949 acyl kink.",
            "dissocVector": [
                4.2,
                2.8,
                0.0
            ]
        },
        {
            "meshName": "Piece_Atom_Peptide_Resonance",
            "name": "Planar Trans-Peptide Bond Resonance (\u03c9=180\u00b0)",
            "badge": "Peptide",
            "color": "#3A86FF",
            "desc": "sp\u00b2-hybridized amide C\u2013N bond (1.33 \u00c5) with 40% double-bond character restricting rotation.",
            "dissocVector": [
                -4.2,
                -2.5,
                1.2
            ]
        },
        {
            "meshName": "Piece_Atom_WatsonCrick_HBonds",
            "name": "Watson\u2013Crick Base Pair & 3.4 \u00c5 \u03c0\u2013\u03c0 Stack",
            "badge": "B-DNA",
            "color": "#9D4EDD",
            "desc": "G\u2261C triple and A=T double hydrogen bonds (2.8\u20133.0 \u00c5) inside B-DNA (1BNA).",
            "dissocVector": [
                0.0,
                -2.8,
                1.2
            ]
        },
        {
            "meshName": "Piece_Atom_Phosphodiester_SN2",
            "name": "Two-Metal Mg\u00b2\u207a SN2 Pentacoordinate State",
            "badge": "SN2-P",
            "color": "#F77F00",
            "desc": "Trigonal bipyramidal phosphorus transition state coordinated by Metal A and Metal B.",
            "dissocVector": [
                3.2,
                -2.5,
                1.5
            ]
        },
        {
            "meshName": "Piece_Atom_Grotthuss_Wire",
            "name": "Grotthuss Water-Chain Proton Relay Wire",
            "badge": "H\u207aWire",
            "color": "#00F5D4",
            "desc": "Hydrogen-bonded file of water molecules and Asp/Glu sidechains hopping H\u207a in picoseconds.",
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
            "title": "1. Octahedral Mg\u00b2\u207a\u00b7ATP\u2074\u207b Chelate Complex",
            "desc": "Adenosine 5'-triphosphate coordinated by octahedral Mg\u00b2\u207a shielding \u03b2/\u03b3-phosphate repulsion.",
            "spoken": "Stage 1: Octahedral Mg\u00b2\u207a\u00b7ATP\u2074\u207b Chelate Complex. Adenosine 5'-triphosphate coordinated by octahedral Mg\u00b2\u207a shielding \u03b2/\u03b3-phosphate repulsion.",
            "color": "#FFB703",
            "targetPiece": "Piece_Atom_MgATP_Chelate"
        },
        {
            "step": 2,
            "title": "2. GlcNAc\u2013MurNAc Pentapeptide Cross-Link",
            "desc": "Peptidoglycan repeating unit with D-Ala\u2074\u2192meso-DAP\u00b3 transpeptidase covalent bridge.",
            "spoken": "Stage 2: GlcNAc\u2013MurNAc Pentapeptide Cross-Link. Peptidoglycan repeating unit with D-Ala\u2074\u2192meso-DAP\u00b3 transpeptidase covalent bridge.",
            "color": "#E76F51",
            "targetPiece": "Piece_Atom_Murein_Monomer"
        },
        {
            "step": 3,
            "title": "3. POPE Zwitterionic Membrane Phospholipid",
            "desc": "1-palmitoyl-2-oleoyl-sn-glycero-3-phosphoethanolamine with a 30\u00b0 cis-\u03949 acyl kink.",
            "spoken": "Stage 3: POPE Zwitterionic Membrane Phospholipid. 1-palmitoyl-2-oleoyl-sn-glycero-3-phosphoethanolamine with a 30\u00b0 cis-\u03949 acyl kink.",
            "color": "#06D6A0",
            "targetPiece": "Piece_Atom_POPE_Phospholipid"
        },
        {
            "step": 4,
            "title": "4. Planar Trans-Peptide Bond Resonance (\u03c9=180\u00b0)",
            "desc": "sp\u00b2-hybridized amide C\u2013N bond (1.33 \u00c5) with 40% double-bond character restricting rotation.",
            "spoken": "Stage 4: Planar Trans-Peptide Bond Resonance (\u03c9=180\u00b0). sp\u00b2-hybridized amide C\u2013N bond (1.33 \u00c5) with 40% double-bond character restricting rotation.",
            "color": "#3A86FF",
            "targetPiece": "Piece_Atom_Peptide_Resonance"
        },
        {
            "step": 5,
            "title": "5. Watson\u2013Crick Base Pair & 3.4 \u00c5 \u03c0\u2013\u03c0 Stack",
            "desc": "G\u2261C triple and A=T double hydrogen bonds (2.8\u20133.0 \u00c5) inside B-DNA (1BNA).",
            "spoken": "Stage 5: Watson\u2013Crick Base Pair & 3.4 \u00c5 \u03c0\u2013\u03c0 Stack. G\u2261C triple and A=T double hydrogen bonds (2.8\u20133.0 \u00c5) inside B-DNA (1BNA).",
            "color": "#9D4EDD",
            "targetPiece": "Piece_Atom_WatsonCrick_HBonds"
        }
    ]
},
};

export const ROADMAP_SCENARIO_IDS = Object.keys(ROADMAP_SCENARIOS_CONFIG) as RoadmapScenarioId[];

export function isRoadmapScenario(scenario: string): scenario is RoadmapScenarioId {
  return scenario in ROADMAP_SCENARIOS_CONFIG;
}
