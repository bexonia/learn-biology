# euk_data_part2.py — Elements 13 to 24 of the Eukaryote 36-Element Roadmap

EUK_ELEMENTS_PART2 = [
    {
        "num": "13",
        "id": "rough_er_sec61_ost",
        "folder": "13_rough_er_sec61_ost",
        "title": "Rough Endoplasmic Reticulum, Signal Recognition Particle (SRP), Sec61 Translocon & N-Glycosylation",
        "tier": "Tier 4 — The Endomembrane Secretory & Degradative System ($50\\,\\text{nm}\\text{--}2\\,\\mu\\text{m}$)",
        "scale": "35 nm Co-Translational ER Translocation & Glycosylation Complex",
        "category": "Secretory Protein Biogenesis & ER Quality Control",
        "pdb1": "7K5I",
        "pdb1_label": "80S Ribosome–Sec61–OST Translocon Supercomplex (7K5I)",
        "pdb2": "7O7F",
        "pdb2_label": "Human Signal Recognition Particle SRP–SR Complex (7O7F)",
        "overview": (
            "Roughly one-third of the entire eukaryotic proteome (all secreted proteins, plasma membrane receptors, and ER/Golgi/Lysosome "
            "enzymes) enters the Endoplasmic Reticulum (ER) co-translationally. As an N-terminal hydrophobic Signal Peptide emerges "
            "from the 60S ribosomal exit tunnel, the ribonucleoprotein Signal Recognition Particle (SRP, containing 7SL RNA and the "
            "methionine-rich SRP54 M-domain cleft) clamps onto the peptide and pauses elongation. SRP docks onto the ER membrane "
            "SRP Receptor (SRα/β); reciprocal GTP hydrolysis hands the 80S ribosome directly onto the hourglass Sec61αβγ Translocon "
            "(the eukaryotic homolog of bacterial SecYEG). As translation resumes, the nascent polypeptide threads through the Sec61 "
            "pore (or exits its lateral gate into the ER lipid bilayer), Signal Peptidase cleaves the leader sequence, luminal BiP "
            "(Hsp70) ratchets the chain inward, and the 8-subunit Oligosaccharyltransferase (OST) complex transfers a pre-assembled "
            "14-sugar oligosaccharide tree (Glc₃Man₉GlcNAc₂) from a Dolichol-pyrophosphate lipid carrier onto Asn-X-Ser/Thr motifs."
        ),
        "behavior": (
            "Renders the complete ER membrane translocon holocomplex: an 80S ribosome docked atop the Sec61αβγ hourglass channel, "
            "flanked by the SRP–SRP Receptor handover module, Signal Peptidase, luminal BiP chaperone, and the Oligosaccharyltransferase "
            "(OST) enzyme transferring a glowing 14-sugar N-glycan tree from Dolichol-PP onto the emerging polypeptide."
        ),
        "upstream": "Nucleus mRNA export (Scenario 27) + Cytoplasmic 80S Ribosome translation initiation (Scenario 32) + Dolichol-PP-Glc₃Man₉GlcNAc₂ synthesis in the ER membrane.",
        "inputs": [
            "Translating 80S Ribosome–mRNA–Nascent Signal Peptide complex",
            "Cytosolic GTP (2 GTPs hydrolyzed by SRP54 and SRα GTPase twin switch) + Luminal ATP (for BiP Hsp70 chaperone ratchet)",
            "Dolichol-PP-Glc₃Man₉GlcNAc₂ lipid-linked oligosaccharide donor (for OST N-glycosylation)",
        ],
        "outputs": [
            "N-Glycosylated, disulfide-bonded luminal secretory proteins (folded via Calnexin/Calreticulin & PDI)",
            "Multi-pass transmembrane proteins laterally integrated into the ER phospholipid bilayer",
            "Recycled cytosolic SRP + GDP + Dolichol-PP",
        ],
        "downstream": "Properly folded glycoproteins bud from ER Exit Sites in COPII cages to the Golgi Apparatus (Scenario 15); terminally misfolded proteins are retrotranslocated via ERAD to the 26S Proteasome (Scenario 34).",
        "energy_currency": "Ribosomal Peptidyl Transferase & eEF2 GTP Push + SRP/SR GTPase Switch + Luminal BiP ATPase Ratchet",
        "turnover": "Co-translational translocation ~5–10 amino acids/sec; OST N-glycosylation transfer within milliseconds of Asn-X-Ser/Thr clearing Sec61",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_RER_Ribosome80S", "Docked Cytoplasmic 80S Ribosome (60S + 40S Subunits & mRNA)", "7K5I / 4V6X 80S Ribosome", "#7209B7", "Ribosome Royal Purple", "(0.0, +4.5, 0.0)"),
            ("Piece_RER_SRP_Receptor", "Signal Recognition Particle (7SL RNA + SRP54) & ER SRP Receptor", "7O7F SRP–SR GTPase Complex", "#FFB703", "SRP Targeting Gold", "(-5.0, +3.0, +2.0)"),
            ("Piece_RER_Sec61Channel", "Sec61αβγ Hourglass Translocon (Plug Helix & Lateral Gate)", "7K5I Sec61 Complex", "#00B4D8", "Translocon Cerulean", "(0.0, 0.0, 0.0)"),
            ("Piece_RER_OST_Glycan", "Oligosaccharyltransferase (OST-A) & Dolichol-PP-Glc₃Man₉GlcNAc₂", "7K5I / 6S7O OST Complex", "#F77F00", "Glycosyltransferase Amber", "(+4.5, -0.5, +1.5)"),
            ("Piece_RER_BiP_Calnexin", "ER Luminal BiP (Hsp70) Ratchet, PDI & Calnexin Quality Control", "5E84 BiP Chaperone", "#E63946", "Luminal Chaperone Crimson", "(0.0, -4.5, +1.5)"),
            ("Piece_RER_ERMembrane", "Rough ER Phospholipid Bilayer Sheet", "ER Membrane Bilayer", "#06D6A0", "ER Membrane Jade", "(0.0, 0.0, -2.5)"),
        ],
        "hud_controls": [
            ("cargo_topology_mode", "Nascent Polypeptide Fate", "Soluble Luminal Secretion (Pore Threading) vs. Transmembrane Helix (Sec61 Lateral Gate Exit)"),
            ("tunicamycin_inhibitor", "Tunicamycin N-Glycosylation Inhibitor & ER Stress (UPR)", "Normal OST Glycosylation vs. Unfolded Protein Response (BiP overload)"),
            ("translocation_speed", "Co-Translational Elongation Rate", "0.0x to 2.5x"),
        ],
        "stages": [
            ("Stage 1 — Signal Peptide Emergence & SRP Arrest", "Watch the hydrophobic N-terminal signal sequence emerge from the 80S ribosome and slip into the methionine-lined groove of SRP54, pausing translation."),
            ("Stage 2 — SRP Receptor Docking & GTP Handover", "SRP guides the ribosome to the ER membrane SRP Receptor; twin GTP hydrolysis releases SRP and aligns the ribosome exit tunnel over Sec61."),
            ("Stage 3 — Sec61 Plug Displacement & Lateral Gating", "The signal peptide intercalates into the Sec61 lateral seam (TM2/TM7), displacing the luminal plug helix to open the aqueous pore—or releasing hydrophobic TM helices sideways into the lipid bilayer."),
            ("Stage 4 — En-Bloc N-Glycosylation by OST", "As an Asn-X-Ser/Thr sequon enters the ER lumen, Oligosaccharyltransferase (OST) snaps a 14-sugar Glc₃Man₉GlcNAc₂ tree from Dolichol-PP onto the asparagine nitrogen."),
            ("Stage 5 — BiP Ratcheting, PDI Disulfides & Calnexin Folding", "Luminal BiP binds the chain to prevent backsliding, Protein Disulfide Isomerase (PDI) forms Cys–S–S–Cys bridges, and Calnexin checks the trimmed glucose tag before export."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Signal Recognition Particle", "https://pdb101.rcsb.org/motm/212"),
            ("RCSB PDB Structure 7K5I — Mammalian 80S Ribosome–Sec61–OST Complex", "https://www.rcsb.org/structure/7K5I"),
            ("RCSB PDB Structure 7O7F — Human SRP–Receptor Pre-Handover Complex", "https://www.rcsb.org/structure/7O7F"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: The Endoplasmic Reticulum", "https://www.ncbi.nlm.nih.gov/books/NBK26841/"),
        ],
    },
    {
        "num": "14",
        "id": "smooth_er_ca_pump_lipids",
        "folder": "14_smooth_er_ca_pump_lipids",
        "title": "Smooth ER Tubular Network, SERCA Ca²⁺-ATPase Pump & Lipid Biogenesis",
        "tier": "Tier 4 — The Endomembrane Secretory & Degradative System ($50\\,\\text{nm}\\text{--}2\\,\\mu\\text{m}$)",
        "scale": "30–50 nm Smooth ER Tubule, Calcium Store & Lipid Factory",
        "category": "Calcium Signaling, Detoxification & Lipid Droplet Biogenesis",
        "pdb1": "1SU4",
        "pdb1_label": "SERCA1a Ca²⁺-ATPase Pump in Ca²⁺-Bound E1 State (1SU4)",
        "pdb2": "6U8A",
        "pdb2_label": "Human Seipin Undecameric Lipid-Droplet Nucleation Ring (6U8A)",
        "overview": (
            "The Smooth Endoplasmic Reticulum (SER) is a ribosome-free labyrinth of high-curvature 30–50 nm membrane tubules "
            "sculpted by hair-pin Reticulon wedges. It serves three indispensable metabolic and signaling functions: (1) Intracellular "
            "Ca²⁺ Capacitor: The Sarco/Endoplasmic Reticulum Ca²⁺-ATPase (SERCA) burns 1 ATP to pump 2 cytosolic Ca²⁺ ions into "
            "the ER lumen (maintaining resting cytosolic Ca²⁺ at ~100 nM vs. ~1 mM inside the ER), while giant tetrameric IP₃ "
            "Receptors (IP₃R) and Ryanodine Receptors (RyR) unleash explosive Ca²⁺ waves upon second-messenger arrival; (2) De Novo "
            "Lipid & Sterol Synthesis + Lipid Droplet Budding: Synthesizes phospholipids, ceramide, and cholesterol, while the "
            "11-subunit Seipin Cage Ring traps neutral triacylglycerols (TAG) between leaflets to bud cytosolic Lipid Droplets; "
            "and (3) Xenobiotic Detoxification via Heme-containing Cytochrome P450 (CYP) monooxygenases."
        ),
        "behavior": (
            "Displays a curved Smooth ER tubule housing the SERCA1a Ca²⁺ pump (1SU4), the mushroom-shaped tetrameric IP₃ Receptor "
            "Ca²⁺ release channel, Cytochrome P450 + Reductase, and the 11-subunit Seipin ring (6U8A) pinching off a golden "
            "monolayer-wrapped neutral Lipid Droplet."
        ),
        "upstream": "GPCR/PLCβ IP₃ second messenger (Scenario 06) + Mitochondrial ATP (Scenario 21) + Cytosolic fatty acyl-CoA, glycerol-3-phosphate & acetyl-CoA.",
        "inputs": [
            "2 Cytosolic Ca²⁺ ions + 1 ATP (for SERCA pumping into the ER lumen)",
            "Inositol 1,4,5-trisphosphate (IP₃ ring) + Ca²⁺ (for gating the tetrameric IP₃R channel)",
            "Fatty Acyl-CoA + Diacylglycerol (synthesizing Triacylglycerol via DGAT for Seipin lipid droplet budding) + NADPH + O₂ (for Cytochrome P450)",
        ],
        "outputs": [
            "Sequestered ER luminal Ca²⁺ store (~1 mM) & rapid cytosolic Ca²⁺ signaling spikes (1–10 µM)",
            "Newly synthesized Phospholipids, Cholesterol, and monolayer-coated cytosolic Lipid Droplets",
            "Hydroxylated water-soluble drugs/toxins (via Cytochrome P450 monooxygenase)",
        ],
        "downstream": "Released Ca²⁺ waves activate Actomyosin contraction (Scenario 09), Synaptotagmin SNARE exocytosis (Scenario 07), and Mitochondrial TCA enzymes (Scenario 19); newly synthesized lipids feed the Plasma Membrane (Scenario 04) and Golgi (Scenario 15).",
        "energy_currency": "ATP Hydrolysis (SERCA Asp351 phosphorylation: 2 Ca²⁺ pumped per 1 ATP) + NADPH (Cytochrome P450 electron donor)",
        "turnover": "SERCA pumps ~10–30 Ca²⁺ ions/sec; single IP₃R channel conducts ~10⁶ Ca²⁺ ions/sec when open",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_SER_SERCA_Pump", "SERCA1a Ca²⁺-ATPase (10-TM Core & Cytoplasmic A, N, P Headpiece)", "1SU4 / 3B9B SERCA1a", "#00B4D8", "Calcium Pump Cerulean", "(-5.5, +1.0, 0.0)"),
            ("Piece_SER_IP3Receptor", "Tetrameric IP₃ Receptor (IP₃R1) Ca²⁺ Release Channel", "6MU1 IP3R1 Tetramer", "#E63946", "Release Channel Crimson", "(-1.0, +2.0, +1.5)"),
            ("Piece_SER_SeipinRing", "Undecameric Seipin Ring Nucleating Nascent Neutral Lipid Droplet", "6U8A Seipin 11-mer Ring", "#FFB703", "Seipin Ring Gold", "(+4.5, +1.5, 0.0)"),
            ("Piece_SER_CytochromeP450", "Membrane-Tethered Cytochrome P450 (CYP3A4) Heme Monooxygenase", "1TQN Cytochrome P450", "#9D4EDD", "Detox Enzyme Violet", "(+5.5, -2.5, +2.0)"),
            ("Piece_SER_ReticulonTubule", "Reticulon Wedge-Curved Smooth ER Phospholipid Bilayer", "Curved ER Bilayer + Reticulon", "#06D6A0", "Smooth ER Membrane Jade", "(0.0, -1.5, -2.0)"),
        ],
        "hud_controls": [
            ("ip3_ca_wave_trigger", "Cytosolic IP₃ Concentration (µM)", "0 µM (SERCA Refilling ER Store) to 10 µM (Explosive IP₃R Ca²⁺ Wave Release)"),
            ("lipid_droplet_growth", "Triacylglycerol Synthesis / Seipin Budding", "0% (Flat Lens in Bilayer) to 100% (Budded Monolayer Lipid Droplet)"),
            ("thapsigargin_inhibitor", "Thapsigargin SERCA Inhibitor Toggle", "Blocks SERCA E₂ state, depleting ER Ca²⁺ stores"),
        ],
        "stages": [
            ("Stage 1 — Reticulon Wedges & High-Curvature SER Tubules", "Inspect how V-shaped Reticulon hairpins insert into only the outer leaflet of the Smooth ER, bending the membrane into 30 nm tubules."),
            ("Stage 2 — SERCA Ca²⁺-ATPase Pumping Cycle", "Watch SERCA bind 2 cytosolic Ca²⁺ ions in its E₁ state, phosphorylate Asp351 with ATP, and rock its A/N/P domains to dump the 2 Ca²⁺ into the ER lumen."),
            ("Stage 3 — IP₃-Gated Calcium Release Wave", "Dock four IP₃ rings onto the cytosolic domains of the giant tetrameric IP₃ Receptor to open its pore and unleash a rapid Ca²⁺ wave into the cytoplasm."),
            ("Stage 4 — Seipin Ring & Lipid Droplet Lens Nucleation", "Zoom to the 11-subunit Seipin ring where DGAT-synthesized triacylglycerol (TAG) oils coalesce into a lens between leaflets and bud into the cytosol wrapped in a phospholipid monolayer."),
            ("Stage 5 — Cytochrome P450 Xenobiotic Hydroxylation", "Highlight the Heme-iron center of Cytochrome P450 using electrons from NADPH to insert an oxygen atom into hydrophobic drugs and toxins."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Calcium Pump (SERCA)", "https://pdb101.rcsb.org/motm/51"),
            ("RCSB PDB-101 — Molecule of the Month: Cytochrome P450", "https://pdb101.rcsb.org/motm/82"),
            ("RCSB PDB Structure 1SU4 — Calcium ATPase SERCA1a", "https://www.rcsb.org/structure/1SU4"),
            ("RCSB PDB Structure 6U8A — Human Seipin Lipid-Droplet Assembly Ring", "https://www.rcsb.org/structure/6U8A"),
        ],
    },
    {
        "num": "15",
        "id": "golgi_coatomer_trafficking",
        "folder": "15_golgi_coatomer_trafficking",
        "title": "Golgi Apparatus Cisternae Stack (Cis → Medial → Trans) & COPII / COPI Vesicle Coats",
        "tier": "Tier 4 — The Endomembrane Secretory & Degradative System ($50\\,\\text{nm}\\text{--}2\\,\\mu\\text{m}$)",
        "scale": "60–500 nm Polarized Cisternal Stack & Coatomer Cages",
        "category": "Glycan Remodeling, Protein Sorting & Coat Vesicle Budding",
        "pdb1": "2P3E",
        "pdb1_label": "COPII Sec13/Sec31 Cuboctahedral Vertex Cage (2P3E / 4BZJ)",
        "pdb2": "5A1U",
        "pdb2_label": "COPI Coatomer Leaf Triad on Membrane (5A1U)",
        "overview": (
            "The Golgi Apparatus is the central post-office and carbohydrate-engineering factory of the eukaryotic cell, organized "
            "as a polarized ribbon of 4–8 flattened membrane cisternae: Cis-Golgi Network (CGN, receiving cargo from the ER) → "
            "Cis → Medial → Trans → Trans-Golgi Network (TGN, sorting cargo to the Plasma Membrane, Secretory Granules, or "
            "Lysosomes). Bidirectional vesicle traffic between the ER and Golgi is driven by two small-GTPase-controlled coat cages: "
            "(1) Anterograde COPII Vesicles (ER → Cis-Golgi): Sar1-GTP inserts an amphipathic helix into the ER membrane, recruiting "
            "bowtie-shaped Sec23/Sec24 inner cargo adaptors and Sec13/Sec31 outer rods that assemble into a 60–100 nm cuboctahedral "
            "cage; (2) Retrograde COPI Vesicles (Golgi → ER): Arf1-GTP recruits the heptameric Coatomer (α, β, β', γ, δ, ε, ζ-COP) "
            "to retrieve escaped ER-resident chaperones (BiP, PDI) captured by the pH-sensitive KDEL Receptor. Inside the cisternae, "
            "resident glycosidases and glycosyltransferases trim high-mannose N-glycans and build complex sialylated oligosaccharides "
            "or attach Mannose-6-Phosphate (M6P) tags to lysosomal hydrolases."
        ),
        "behavior": (
            "Shows a cutaway stack of Cis, Medial, and Trans Golgi cisternae flanked on the ER side by an assembling COPII "
            "Sec13/31 cuboctahedral cage and on the retrograde edge by a COPI heptameric coatomer bud retrieving KDEL-bound cargo, "
            "while Rab GTPases and Golgin coiled-coil tethers catch incoming vesicles."
        ),
        "upstream": "Rough ER N-glycosylated folding intermediates (Scenario 13) + Smooth ER lipids (Scenario 14) + Nucleotide sugars (UDP-Gal, CMP-Sialic Acid, GDP-Fucose).",
        "inputs": [
            "High-mannose N-glycosylated proteins (Man₈–₉GlcNAc₂) exiting Rough ER Exit Sites",
            "Cytosolic GTP (for Sar1, Arf1, and Rab1/Rab6 small GTPase switches)",
            "Nucleotide-sugar donors (UDP-GlcNAc, UDP-Galactose, CMP-N-Acetylneuraminic acid) imported via antiporters",
        ],
        "outputs": [
            "Complex N- and O-glycosylated Plasma Membrane & Secreted Proteins (exited via TGN secretory vesicles)",
            "Mannose-6-Phosphate (M6P) tagged acid hydrolases sorted in Clathrin/AP1 vesicles to Lysosomes",
            "Retrograde COPI vesicles returning KDEL-tagged ER chaperones (BiP/PDI) and v-SNAREs back to the Rough ER",
        ],
        "downstream": "Delivers mature channels/receptors to the Plasma Membrane (Scenarios 04–08), Clathrin/M6P-sorted hydrolases to Lysosomes (Scenario 16), and KDEL chaperones back to the Rough ER (Scenario 13).",
        "energy_currency": "GTP Hydrolysis (Sar1/Sec23 GAP & Arf1/ArfGAP coat assembly/disassembly) + Nucleotide-Sugar Donor Bonds + Cis-to-Trans pH Gradient (pH 6.7 → 6.0)",
        "turnover": "Cisternal maturation progresses from Cis to Trans in ~10–15 minutes; single COPII/COPI vesicle buds in ~10–30 seconds",
        "layout_mode": "multi_cisternae",
        "pieces": [
            ("Piece_Gol_CisMedialTrans", "Polarized Golgi Cisternae Stack (Cis → Medial → Trans Lumen)", "Golgi Membrane Stack", "#F77F00", "Golgi Cisternae Amber", "(0.0, 0.0, 0.0)"),
            ("Piece_Gol_COPIICage", "Anterograde COPII Cage (Sar1-GTP + Sec23/24 + Sec13/31 Rods)", "2P3E / 4BZJ COPII Cage", "#00B4D8", "COPII Cage Cerulean", "(-6.0, -2.5, +2.0)"),
            ("Piece_Gol_COPICoatomer", "Retrograde COPI Heptameric Coatomer Triad & Arf1-GTP", "5A1U COPI Coatomer", "#9D4EDD", "COPI Coatomer Violet", "(+6.0, +2.0, +2.0)"),
            ("Piece_Gol_KDEL_M6PReceptors", "KDEL Retrieval Receptor (pH Sensor) & Mannose-6-Phosphate Receptor", "6I6B KDEL Receptor", "#FFB703", "Sorting Receptor Gold", "(+2.5, -3.5, +2.5)"),
            ("Piece_Gol_Glycosyltransferases", "Cis-to-Trans Mannosidase I/II & Galactosyl/Sialyltransferases", "1FO8 GnTI / Glycosyltransferases", "#E63946", "Glycan Enzyme Crimson", "(-2.0, +3.5, +2.0)"),
            ("Piece_Gol_GolginRabTethers", "Long Coiled-Coil Golgin Tethers (GM130/p115) & TRAPP/COG Complexes", "Golgin Coiled-Coil Tethers", "#06D6A0", "Tether Cable Jade", "(0.0, +5.0, -2.0)"),
        ],
        "hud_controls": [
            ("trafficking_direction", "Vesicle Coat Focus", "Both | Anterograde COPII (ER → Cis-Golgi) | Retrograde COPI (Golgi → ER KDEL Retrieval)"),
            ("luminal_ph_gradient", "Cis-to-Trans Luminal pH Gradient", "Normal (pH 6.7 Cis → 6.0 TGN) vs. Neutralized (Blocks KDEL & M6P sorting)"),
            ("brefeldin_a_toggle", "Brefeldin A Fungal Toxin Toggle", "Inhibits Arf1-GEF, collapsing Golgi back into the ER"),
        ],
        "stages": [
            ("Stage 1 — Anterograde Budding: The COPII Cuboctahedral Cage", "At the ER exit site, Sec12 loads Sar1 with GTP, recruiting Sec23/24 cargo adaptors and Sec13/31 outer struts that self-assemble into a COPII cage."),
            ("Stage 2 — Golgin Tentacle Capture & Cis-Golgi Entry", "Long coiled-coil Golgin tethers (GM130/p115) snatch the uncoated COPII vesicle and fuse it into the Cis-Golgi cisterna."),
            ("Stage 3 — Retrograde KDEL Rescue via COPI Coatomer", "Escaped ER chaperones (bearing a C-terminal Lys-Asp-Glu-Leu [KDEL] tag) bind the KDEL Receptor in the slightly acidic Cis-Golgi (pH 6.5) and return to the ER in Arf1-driven COPI vesicles."),
            ("Stage 4 — Sequential Glycan Trimming & Maturation", "Follow a glycoprotein across Cis → Medial → Trans compartments as Mannosidases trim mannose residues and GlcNAc-, Galactosyl-, and Sialyltransferases build mature complex sugar trees."),
            ("Stage 5 — Trans-Golgi Network (TGN) M6P & Secretory Sorting", "In the TGN (pH 6.0), Mannose-6-Phosphate Receptors sort lysosomal enzymes into clathrin-coated vesicles while secretory proteins bud toward the plasma membrane."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: COPII Vesicle Coat", "https://pdb101.rcsb.org/motm/257"),
            ("RCSB PDB Structure 5A1U — COPI Coat Leaf Triad", "https://www.rcsb.org/structure/5A1U"),
            ("RCSB PDB Structure 6I6B — KDEL Receptor Bound to KDEL Peptide", "https://www.rcsb.org/structure/6I6B"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Transport from the ER through the Golgi", "https://www.ncbi.nlm.nih.gov/books/NBK26941/"),
        ],
    },
    {
        "num": "16",
        "id": "lysosome_v_atpase_autophagy",
        "folder": "16_lysosome_v_atpase_autophagy",
        "title": "Lysosome, Rotary V-ATPase Proton Pump (pH 4.5) & Autophagosome (LC3) Fusion",
        "tier": "Tier 4 — The Endomembrane Secretory & Degradative System ($50\\,\\text{nm}\\text{--}2\\,\\mu\\text{m}$)",
        "scale": "100–300 nm Acidic Recycling Organelle & Rotary V-ATPase",
        "category": "Cellular Degradation, Autophagy & Nutrient Sensing (mTORC1)",
        "pdb1": "6WM2",
        "pdb1_label": "Human Rotary Vacuolar V₁Vo-ATPase Proton Pump (6WM2)",
        "pdb2": "7K2V",
        "pdb2_label": "Lysosomal Ragulator–Rag–mTORC1 Nutrient Sensor (7K2V / 1ATU)",
        "overview": (
            "The Lysosome is the eukaryotic cell's acidic stomach and metabolic signaling hub (pH 4.5–5.0 vs. cytosolic pH 7.2). "
            "Its single membrane is protected from self-digestion on the luminal side by a dense 8 nm carbohydrate brush of heavily "
            "glycosylated LAMP1 and LAMP2 proteins. The extreme luminal acidity is generated by the Vacuolar H⁺-ATPase (V₁Vo-ATPase, "
            "6WM2)—an evolutionary cousin of F₁Fo-ATP Synthase run in reverse: cytosolic ATP hydrolysis in the hexameric V₁ head "
            "(A₃B₃) spins the central DF rotor stalk and the membrane Vo proteolipid c-ring (c₉c''), pumping protons into the "
            "lysosomal lumen (balanced by ClC-7 Cl⁻/H⁺ antiporters). Only at pH 4.5 do the >60 luminal Acid Hydrolases (Cathepsin "
            "proteases, DNase II, acid lipases, glycosidases) become catalytically active. During starvation or organelle damage, "
            "double-membrane Autophagosomes decorated with lipidated LC3-II (ATG8–PE) fuse with the lysosome via HOPS and STX17 "
            "SNAREs to form an Autolysosome, digesting cargo into free amino acids that exit via SLC38A9 to activate mTORC1 on the "
            "outer lysosomal surface."
        ),
        "behavior": (
            "Cutaway of an active Lysosome fusing with a double-membrane LC3-II Autophagosome: highlights the rotary V₁Vo-ATPase "
            "proton pump (6WM2) spinning in the lysosomal membrane, the protective LAMP1/2 glycocalyx, luminal Cathepsin proteases "
            "digesting cargo, and the outer Ragulator–Rag–mTORC1 amino-acid sensing complex."
        ),
        "upstream": "Trans-Golgi M6P-tagged acid hydrolases (Scenario 15) + Endocytosed LDL/receptors (Scenario 07) + Damaged Mitochondria/aggregates in LC3 Autophagosomes + Cytosolic ATP.",
        "inputs": [
            "Cytosolic ATP + H⁺ (pumped into the lumen by rotary V₁Vo-ATPase)",
            "Endocytosed macromolecules (LDL-cholesterol, pathogens) & Autophagosome-engulfed organelles",
            "M6P-sorted pro-cathepsins & acid hydrolases (activated by low luminal pH cleavage)",
        ],
        "outputs": [
            "Recycled free Amino Acids, Monosaccharides, Fatty Acids & Free Cholesterol (exported via NPC1/2 & SLC38A9)",
            "Activated mTORC1 Kinase signaling on the cytosolic lysosomal surface (stimulating 80S translation when fed)",
            "ADP + Pᵢ + Neutralized pathogen/organelle debris",
        ],
        "downstream": "Exported amino acids activate mTORC1 to boost 80S Ribosome translation (Scenario 32); free cholesterol exported by NPC1 feeds the Plasma Membrane (Scenario 04) and ER (Scenario 14).",
        "energy_currency": "Cytosolic ATP Hydrolysis (V₁ A₃B₃ head: 3 ATP hydrolyzed per 360° rotation pumping ~10 H⁺ into lumen)",
        "turnover": "V-ATPase rotates at ~30–60 rev/s (~300–600 H⁺/sec pumped into the lysosome)",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Lys_VATPase_V1", "V-ATPase Cytosolic V₁ Catalytic Head (A₃B₃ Hexamer, DF Rotor & E/G Staters)", "6WM2 V1 Sector", "#FFB703", "Catalytic ATPase Gold", "(-4.5, +3.5, 0.0)"),
            ("Piece_Lys_VATPase_Vo", "V-ATPase Membrane Vo Proton Turbine (c-Ring Decamer & a-Subunit Half-Channels)", "6WM2 Vo Sector", "#00B4D8", "Proton Turbine Cerulean", "(-4.5, -0.5, 0.0)"),
            ("Piece_Lys_LAMP_Membrane", "Lysosomal Membrane & Protective Luminal LAMP1/LAMP2 Glycocalyx Shield", "Lysosomal Bilayer + LAMP Glycans", "#06D6A0", "Lysosome Membrane Jade", "(0.0, 0.0, -2.0)"),
            ("Piece_Lys_CathepsinHydrolases", "Luminal Acid Hydrolases (Cathepsin B/D, Acid Lipase & NPC2)", "1HUC Cathepsin B + 6W5S NPC1", "#E63946", "Acid Hydrolase Crimson", "(0.0, -4.5, +1.5)"),
            ("Piece_Lys_AutophagosomeLC3", "Fusing Double-Membrane Autophagosome Studded with Lipidated LC3-II", "1UGM LC3-II + STX17 SNARE", "#9D4EDD", "Autophagosome Violet", "(+5.0, -2.5, +1.5)"),
            ("Piece_Lys_mTORC1_Sensor", "Outer Surface Ragulator–Rag GTPase–mTORC1 Amino Acid Sensor", "7K2V / 6BCX mTORC1 Complex", "#F77F00", "mTORC1 Sensor Amber", "(+4.5, +4.0, +2.0)"),
        ],
        "hud_controls": [
            ("v_atpase_activity", "V-ATPase Proton Pumping / Luminal pH", "pH 7.2 (Inactive Hydrolases) to pH 4.5 (Full Acidic Proteolysis)"),
            ("autophagy_starvation", "Nutrient State (Fed mTORC1 Active ↔ Starvation Autophagy)", "Fed (mTORC1 on Lysosome) vs. Starved (ULK1/LC3 Autophagosome Fusion)"),
            ("bafilomycin_chloroquine", "Bafilomycin A1 / Chloroquine Inhibitor", "Locks V-ATPase c-ring or buffers lumen, halting autophagic flux"),
        ],
        "stages": [
            ("Stage 1 — The Rotary V₁Vo-ATPase Proton Pump", "Inspect the 30-subunit V-ATPase: unlike mitochondrial ATP synthase, it burns cytosolic ATP in its A₃B₃ head to spin the Vo c-ring and force H⁺ ions into the lysosome."),
            ("Stage 2 — pH 4.5 Activation & The LAMP1/2 Sugar Shield", "As luminal pH drops to 4.5, pro-Cathepsins cleave off their inhibitory pro-peptides while the dense LAMP1/2 glycocalyx prevents the hydrolases from digesting the lysosomal membrane itself."),
            ("Stage 3 — LC3-II Double-Membrane Autophagosome Docking", "During starvation, ATG7/ATG3 conjugate LC3 to phosphatidylethanolamine (LC3-II) on a double-membrane phagophore that engulfs damaged cargo and docks onto the lysosome via STX17 SNAREs."),
            ("Stage 4 — Cargo Breakdown & NPC1/SLC38A9 Export", "Acid hydrolases dismantle proteins, lipids, and nucleic acids into free amino acids, sugars, and cholesterol, which exit into the cytosol through SLC38A9 and NPC1 transporters."),
            ("Stage 5 — The mTORC1 Nutrient Switch", "Exported amino acids signal through SLC38A9 and Ragulator–Rag GTPases to recruit mTORC1 to the outer lysosomal surface, switching the cell from catabolic autophagy back to anabolic growth."),
        ],
        "resources": [
            ("RCSB PDB Structure 6WM2 — Complete Human V-ATPase in Rotational State 1", "https://www.rcsb.org/structure/6WM2"),
            ("RCSB PDB-101 — Molecule of the Month: mTOR", "https://pdb101.rcsb.org/motm/219"),
            ("RCSB PDB-101 — Molecule of the Month: Autophagy", "https://pdb101.rcsb.org/motm/204"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Lysosomes", "https://www.ncbi.nlm.nih.gov/books/NBK26844/"),
        ],
    },
    {
        "num": "17",
        "id": "peroxisome_catalase_beta_ox",
        "folder": "17_peroxisome_catalase_beta_ox",
        "title": "Peroxisome, PEX5/PEX14 Importomer, Fatty Acid β-Oxidation & Tetrameric Heme Catalase",
        "tier": "Tier 4 — The Endomembrane Secretory & Degradative System ($50\\,\\text{nm}\\text{--}2\\,\\mu\\text{m}$)",
        "scale": "150–400 nm Single-Membrane Oxidative Organelle",
        "category": "Very-Long-Chain Fatty Acid Oxidation & ROS Detoxification",
        "pdb1": "1DGF",
        "pdb1_label": "Human Erythrocyte Tetrameric Heme Catalase (1DGF)",
        "pdb2": "7N5K",
        "pdb2_label": "Peroxisomal ABC Transporter ABCD1 (ALDP) Bound to VLCFA-CoA (7N5K)",
        "overview": (
            "Peroxisomes are single-membrane oxidative organelles that specialize in metabolic reactions too toxic for the "
            "cytoplasm: (1) β-Oxidation of Very-Long-Chain Fatty Acids (VLCFAs, ≥C22:0) and branched-chain fatty acids imported "
            "by the dimeric ABC transporter ABCD1 (mutated in X-linked Adrenoleukodystrophy), where Acyl-CoA Oxidase (ACOX1) "
            "transfers electrons directly to O₂, generating toxic Hydrogen Peroxide (H₂O₂); (2) Instantaneous H₂O₂ Detoxification "
            "by Tetrameric Heme Catalase (1DGF)—one of the fastest enzymes in nature (k_cat ≈ 4 × 10⁷ s⁻¹)—which often packs "
            "at such high concentration that it forms a para-crystalline core inside the peroxisomal matrix, disproportionating "
            "2 H₂O₂ → 2 H₂O + O₂; (3) Synthesis of myelin Plasmalogen ether-lipids; and (4) Unique Folded-Protein Import via "
            "the cycling receptor PEX5, which recognizes C-terminal PTS1 (-Ser-Lys-Leu) tags in the cytosol, docks at the "
            "PEX14/PEX13 translocon to drop off fully folded oligomers (even 240 kDa Catalase tetramers!), and is extracted back "
            "to the cytosol by the hexameric AAA+ PEX1/PEX6 ring."
        ),
        "behavior": (
            "Shows a cutaway Peroxisome with its crystalline Tetrameric Heme Catalase core (1DGF), the dimeric ABCD1 VLCFA-CoA "
            "transporter (7N5K) in the membrane, the PEX5/PEX14 import pore + PEX1/PEX6 AAA+ recycling ring, and ACOX1 generating "
            "H₂O₂ that is immediately split into O₂ bubbles by Catalase."
        ),
        "upstream": "Smooth ER / Lipid Droplet very-long-chain fatty acids (Scenario 14) + Cytoplasmic 80S Ribosome translation of PTS1-tagged enzymes (Scenario 32).",
        "inputs": [
            "Very-Long-Chain Fatty Acyl-CoA (C24:0 / C26:0-CoA) + ATP (for ABCD1 import)",
            "Molecular Oxygen (O₂) + FAD + NAD⁺ (for peroxisomal β-oxidation)",
            "Fully folded PTS1-tagged (-SKL) cytosolic enzymes imported via PEX5 + ATP (for PEX1/PEX6 receptor recycling)",
        ],
        "outputs": [
            "Shortened Medium/Octanoyl-CoA & Acetyl-CoA (exported to Mitochondria for complete oxidation) + Plasmalogen precursors",
            "Detoxified Water & Oxygen (2 H₂O₂ → 2 H₂O + O₂ via Heme Catalase)",
            "Recycled cytosolic PEX5 receptor",
        ],
        "downstream": "Shortened acyl-CoA and acetyl-CoA shuttle into Mitochondria (Scenario 19) for the TCA cycle; ether-lipid plasmalogen precursors travel to the Smooth ER (Scenario 14) for myelin synthesis.",
        "energy_currency": "ATP Hydrolysis (ABCD1 fatty-acid import & PEX2/10/12 ubiquitination + PEX1/PEX6 AAA+ extraction of PEX5)",
        "turnover": "Tetrameric Heme Catalase: ~40,000,000 H₂O₂ molecules converted per second per tetramer (diffusion-limited!)",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Per_CatalaseTetramer", "Tetrameric Heme Catalase Crystalline Core (4 × Fe-Protoporphyrin IX + NADPH)", "1DGF Human Catalase", "#E63946", "Heme Catalase Crimson", "(0.0, -3.5, 0.0)"),
            ("Piece_Per_ABCD1_Transporter", "Peroxisomal ABCD1 (ALDP) Dimeric ABC Transporter + VLCFA-CoA", "7N5K ABCD1 Transporter", "#00B4D8", "ABC Transporter Cerulean", "(-5.0, +0.5, 0.0)"),
            ("Piece_Per_ACOX1_BetaOx", "Acyl-CoA Oxidase (ACOX1) & Bifunctional β-Oxidation Complex", "2DDH ACOX1 Homodimer", "#FFB703", "FAD Oxidase Gold", "(-3.5, -3.0, +2.0)"),
            ("Piece_Per_PEX5_PEX14_Pore", "PEX5 PTS1 (-SKL) Receptor & PEX13/PEX14 Folded-Protein Import Pore", "2C0L PEX5–Cargo Complex", "#9D4EDD", "PEX Importomer Violet", "(+3.5, +1.0, +1.5)"),
            ("Piece_Per_PEX1_PEX6_Ring", "Hexameric AAA+ PEX1/PEX6 Receptor-Extraction Ring", "5VXV PEX1/PEX6 AAA+ Ring", "#F77F00", "AAA+ Extractor Amber", "(+5.5, +3.5, 0.0)"),
            ("Piece_Per_MembraneBilayer", "Peroxisomal Single Phospholipid Bilayer", "Peroxisomal Membrane", "#06D6A0", "Peroxisome Membrane Jade", "(0.0, +0.5, -2.5)"),
        ],
        "hud_controls": [
            ("vlcfa_beta_ox_rate", "VLCFA Import & β-Oxidation Flux", "0% to 200% (generates H₂O₂ proportional to fatty acid oxidation)"),
            ("catalase_activity", "Tetrameric Heme Catalase Activity", "100% (Instant H₂O₂ → H₂O + O₂) vs. 0% (Acatalasemia Oxidative Stress)"),
            ("ald_abcd1_mutation", "X-ALD ABCD1 Mutation Toggle", "Normal VLCFA Import vs. Blocked C26:0 Accumulation"),
        ],
        "stages": [
            ("Stage 1 — Importing Fully Folded Enzymes via PEX5 (-SKL)", "Watch cytosolic PEX5 bind the C-terminal -Ser-Lys-Leu (PTS1) tripeptide of a fully folded enzyme and plunge into the PEX14 membrane pore without unfolding the cargo."),
            ("Stage 2 — AAA+ PEX1/PEX6 Receptor Recycling", "After cargo release in the matrix, PEX2/10/12 monoubiquitinates PEX5 so the double-ring hexameric PEX1/PEX6 AAA+ motor can pull PEX5 back out to the cytosol."),
            ("Stage 3 — ABCD1 Import of Very-Long-Chain Fatty Acids", "Follow a C26:0-CoA fatty acid pumped across the peroxisomal membrane by ATP-driven dimerization of ABCD1."),
            ("Stage 4 — ACOX1 β-Oxidation & H₂O₂ Generation", "Acyl-CoA Oxidase shortens the fatty acid by 2 carbons per cycle, passing electrons via FAD directly to O₂ and producing toxic H₂O₂."),
            ("Stage 5 — Diffusion-Limited Heme Catalase Detoxification", "Zoom into the Fe(III)-heme pocket of Catalase: the first H₂O₂ oxidizes the heme to Compound I (Fe⁴⁺=O porphyrin radical), and a second H₂O₂ reduces it back, releasing H₂O and O₂ at 4 × 10⁷ s⁻¹."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Catalase", "https://pdb101.rcsb.org/motm/57"),
            ("RCSB PDB Structure 1DGF — Human Erythrocyte Catalase", "https://www.rcsb.org/structure/1DGF"),
            ("RCSB PDB Structure 7N5K — Human Peroxisomal ABCD1 Transporter", "https://www.rcsb.org/structure/7N5K"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Peroxisomes", "https://www.ncbi.nlm.nih.gov/books/NBK26858/"),
        ],
    },
    {
        "num": "18",
        "id": "plant_vacuole_tonoplast",
        "folder": "18_plant_vacuole_tonoplast",
        "title": "Plant Central Vacuole, Tonoplast Aquaporin Tetramers & Osmotic Turgor Engine",
        "tier": "Tier 4 — The Endomembrane Secretory & Degradative System ($50\\,\\text{nm}\\text{--}2\\,\\mu\\text{m}$)",
        "scale": "20 nm Tonoplast Membrane to 30 µm Central Vacuole",
        "category": "Plant Hydrostatic Turgor, Water Channels & Solute Storage",
        "pdb1": "5I32",
        "pdb1_label": "Plant Tonoplast Aquaporin TIP2;1 Tetramer (5I32 / 1Z98)",
        "pdb2": "4A01",
        "pdb2_label": "Vacuolar H⁺-Translating Pyrophosphatase V-PPase (4A01)",
        "overview": (
            "Mature plant and fungal cells grow up to 100× larger in volume than animal cells without synthesizing 100× more "
            "cytoplasm by inflating a giant Central Vacuole bounded by a single semi-permeable membrane called the Tonoplast. "
            "Two proton pumps—the rotary Vacuolar V-ATPase and the homodimeric H⁺-Translocating Pyrophosphatase (V-PPase, 4A01, "
            "which burns metabolic byproduct inorganic pyrophosphate PPᵢ)—acidify the vacuolar sap (pH 5.0–5.5) and generate an "
            "inside-positive electrochemical gradient (+30 mV). Secondary H⁺-coupled antiporters (NHX1 K⁺/Na⁺-H⁺ exchangers, "
            "CAX Ca²⁺/H⁺ exchangers, and ALMT malate channels) pack the vacuole with high concentrations of ions, malate, sucrose, "
            "and anthocyanin pigments. Water then rushes into the vacuole at ~10⁹ H₂O molecules/sec through tetrameric Tonoplast "
            "Intrinsic Protein Aquaporins (TIP2;1, 5I32), whose central NPA (Asn-Pro-Ala) twin hairpins reorient water dipoles to "
            "block proton leakage while generating 0.5–1.0 MPa (5–10 atm) of hydrostatic Turgor Pressure that keeps non-woody plants upright."
        ),
        "behavior": (
            "Shows the Tonoplast membrane separating the cytosol from the anthocyanin-tinted vacuolar lumen: includes the tetrameric "
            "TIP Aquaporin water channel (streaming single-file H₂O molecules past the NPA filter), the dimeric V-PPase proton pump "
            "(4A01), V-ATPase, and NHX1 K⁺/Na⁺-H⁺ antiporters."
        ),
        "upstream": "Chloroplast photosynthetic sucrose/malate & stromal PPᵢ byproducts (Scenarios 23–25) + Root apoplastic/symplastic water and mineral uptake.",
        "inputs": [
            "Cytosolic Inorganic Pyrophosphate (PPᵢ) & ATP (driving V-PPase and V-ATPase H⁺ pumping into the vacuole)",
            "Cytosolic K⁺, Na⁺, Ca²⁺, Malate²⁻ & Anthocyanin-glucosides (imported via H⁺-coupled antiporters)",
            "Bulk H₂O molecules (streaming through tetrameric TIP Aquaporin pores down the osmotic water potential gradient)",
        ],
        "outputs": [
            "Hydrostatic Turgor Pressure (Ψp = 0.5–1.0 MPa) driving plant cell expansion, leaf rigidity, and stomatal guard-cell opening",
            "Cytosolic ion detoxification (sequestering excess Na⁺ and heavy metals in salt-tolerant plants)",
            "Stored sucrose, malate (in CAM night carbon fixation), and floral anthocyanin pigment display",
        ],
        "downstream": "Presses the plant plasma membrane directly against the Cellulose Cell Wall (Scenario 02) and regulates symplastic pressure across Plasmodesmata (Scenario 08).",
        "energy_currency": "Inorganic Pyrophosphate Hydrolysis (PPᵢ + H₂O → 2 Pᵢ in V-PPase) + ATP (V-ATPase) → Tonoplast Δμ_H+ → Osmotic Turgor Ψp",
        "turnover": "Single Aquaporin monomer conducts ~10⁹ H₂O molecules/sec with zero H₃O⁺ proton leakage",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Vac_AquaporinTetramer", "Tetrameric Tonoplast Aquaporin (TIP2;1 / SoPIP2;1) with NPA Water Filter", "5I32 / 1Z98 Plant Aquaporin", "#00B4D8", "Water Channel Cerulean", "(-4.5, 0.0, 0.0)"),
            ("Piece_Vac_VPPaseDimer", "Dimeric H⁺-Translocating Pyrophosphatase (AVP1 / V-PPase, 16-TM)", "4A01 V-PPase Dimer", "#FFB703", "Pyrophosphatase Gold", "(+1.0, +0.5, +1.5)"),
            ("Piece_Vac_NHX_Antiporter", "Vacuolar NHX1 K⁺/Na⁺–H⁺ Antiporter & Anthocyanin ABC Transporter", "8I3T NHX Exchanger", "#9D4EDD", "Antiporter Violet", "(+5.5, 0.0, 0.0)"),
            ("Piece_Vac_WaterProtonStreams", "Single-File H₂O Dipole Stream (NPA Flip) & Luminal H⁺/Anthocyanin Sap", "H₂O Stream + Anthocyanins", "#E63946", "Vacuolar Sap Crimson", "(-4.5, -3.5, +2.0)"),
            ("Piece_Vac_TonoplastMembrane", "Tonoplast Vacuolar Phospholipid & Sterol Bilayer", "Tonoplast Bilayer", "#06D6A0", "Tonoplast Membrane Jade", "(0.0, 0.0, -2.5)"),
        ],
        "hud_controls": [
            ("water_potential_turgor", "Extracellular Water Supply / Turgor Pressure (MPa)", "0.0 MPa (Wilted / Plasmolyzed) to 1.0 MPa (Full Turgid Expansion)"),
            ("aquaporin_ph_ca_gate", "Cytosolic Flooding / Drought Gate (Loop D Phosphorylation)", "Open Ser-Phosphorylated Pore vs. Closed Drought/Anoxic Gate"),
            ("vacuolar_ph_anthocyanin", "Vacuolar Lumen pH (Anthocyanin Color Shift)", "pH 4.5 (Vivid Red Flavylium) to pH 6.5 (Blue/Violet Quinonoidal Base)"),
        ],
        "stages": [
            ("Stage 1 — Charging the Tonoplast Battery with V-PPase & V-ATPase", "Watch the dimeric V-PPase burn metabolic byproduct pyrophosphate (PPᵢ → 2 Pᵢ) to pump H⁺ into the vacuolar lumen alongside V-ATPase."),
            ("Stage 2 — Solute Accumulation via H⁺-Coupled Antiporters", "Outward H⁺ flow through NHX1 and CAX antiporters drives K⁺, Na⁺, Ca²⁺, and malate into the vacuole, steeply lowering its osmotic potential (Ψs)."),
            ("Stage 3 — Single-File Water Rush Through Tetrameric Aquaporins", "Zoom into one of the four pores of a TIP Aquaporin tetramer as 10⁹ water molecules/sec stream into the vacuole."),
            ("Stage 4 — The Atomic NPA Dipole-Flip Proton Barrier", "At the center of the Aquaporin hourglass, two Asn-Pro-Ala (NPA) asparagines grab the oxygen of each passing H₂O, flipping its dipole orientation to break the Grotthuss proton wire so H₃O⁺ cannot leak out."),
            ("Stage 5 — Hydrostatic Turgor & Drought Loop-D Gating", "Observe the inflated vacuole pressing the cytoplasm against the cell wall to hold the plant upright—and watch cytosolic Loop D snap the aquaporin shut during drought or root flooding."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Aquaporin", "https://pdb101.rcsb.org/motm/173"),
            ("RCSB PDB Structure 5I32 — Plant Tonoplast Aquaporin AtTIP2;1", "https://www.rcsb.org/structure/5I32"),
            ("RCSB PDB Structure 4A01 — H⁺-Translocating Pyrophosphatase", "https://www.rcsb.org/structure/4A01"),
            ("Plant Physiology — Vacuolar Transporters & Turgor Regulation", "https://academic.oup.com/plphys/article/179/4/1200/6116634"),
        ],
    },
    {
        "num": "19",
        "id": "mitochondrion_cristae_mtdna",
        "folder": "19_mitochondrion_cristae_mtdna",
        "title": "Whole Mitochondrion Cutaway: Double Membrane, MICOS Cristae, Matrix TCA & Circular mtDNA Ring",
        "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts ($20\\,\\text{nm}\\text{--}3\\,\\mu\\text{m}$)",
        "scale": "1.5 µm × 0.6 µm Double-Membrane Endosymbiotic Organelle",
        "category": "Bioenergetic Organelle Architecture & Mitochondrial Genome",
        "pdb1": "3EMN",
        "pdb1_label": "Mitochondrial Outer Membrane VDAC-1 β-Barrel Porin (3EMN)",
        "pdb2": "3TMM",
        "pdb2_label": "TFAM Packaging Mitochondrial DNA (mtDNA) U-Turn (3TMM)",
        "overview": (
            "Descended from an ancient α-proteobacterial endosymbiont >1.5 billion years ago, the Mitochondrion is a double-membraned "
            "bioenergetic powerhouse with its own independent circular genome and translation apparatus: (1) The Outer Mitochondrial "
            "Membrane (OMM) is perforated by 19-stranded β-barrel Voltage-Dependent Anion Channels (VDAC1, 3EMN) that freely pass "
            "metabolites (<5 kDa: pyruvate, ADP, ATP, Pᵢ) into the Intermembrane Space (IMS); (2) The Inner Mitochondrial Membrane "
            "(IMM) is an ion-impermeable, Cardiolipin-rich (20% tetra-acyl phospholipid) barrier divided into the Inner Boundary "
            "Membrane and deeply invaginated tubular/lamellar Cristae, whose narrow 28 nm necks are stabilized by the MICOS "
            "(Mitochondrial Contact Site and Cristae Organizing System) complex and OPA1 oligomers to trap pumped protons inside the "
            "Cristae Lumen; (3) The central Mitochondrial Matrix houses the Pyruvate Dehydrogenase & TCA/Krebs Cycle enzymes, "
            "specialized 55S Mammalian Mitoribosomes, and multiple copies of the 16,569 bp Closed Circular Double-Stranded "
            "Mitochondrial DNA (mtDNA) Ring, compacted by TFAM (Mitochondrial Transcription Factor A, 3TMM) into nucleoids and "
            "encoding 13 essential hydrophobic OXPHOS subunits, 22 tRNAs, and 2 rRNAs."
        ),
        "behavior": (
            "A 3/4 surgical cutaway of a whole Mitochondrion exposing the VDAC-studded Outer Membrane, the MICOS-neck folded "
            "Inner Membrane Cristae lined along their rims by V-shaped ATP Synthase dimers, the Matrix TCA enzymes, 55S Mitoribosomes, "
            "and a glowing 16.6 kb Circular mtDNA Ring with its triple-stranded D-loop replication origin wrapped by TFAM."
        ),
        "upstream": "Cytosolic Glycolysis (Pyruvate + NADH shuttle) + Peroxisomal/Cytosolic Fatty Acyl-Carnitine (Scenario 17) + O₂.",
        "inputs": [
            "Pyruvate (imported via VDAC + Mitochondrial Pyruvate Carrier MPC1/2) & Fatty Acyl-Carnitine (via CPT1/CACT/CPT2)",
            "Cytosolic ADP³⁻ + H₂PO₄⁻ + Molecular Oxygen (O₂)",
            "Nuclear-encoded mitochondrial precursor proteins (99% of mitochondrial proteome imported via TOM/TIM, Scenario 22)",
        ],
        "outputs": [
            "Matrix NADH + FADH₂ (from PDH & TCA cycle feeding the Respirasome, Scenario 20) + 2 CO₂ per acetyl-CoA",
            "Exported Cytosolic ATP⁴⁻ (~30–32 ATP per glucose via Scenario 21) + Heme & [Fe-S] cluster cofactors",
            "13 mtDNA-encoded hydrophobic core subunits of Complexes I, III, IV, and V translated on 55S Mitoribosomes",
        ],
        "downstream": "Matrix NADH/FADH₂ directly feed the Cristae Respirasome ETC (Scenario 20) → V-Shaped ATP Synthase Dimer (Scenario 21) → ATP powers the entire cell (Na⁺/K⁺ pump 05, Myosin 09, Kinesin/Dynein 10, SERCA 14, V-ATPase 16, Nucleus 26–31, 80S Ribosome 32).",
        "energy_currency": "Inner Membrane Proton-Motive Force (Δp ≈ 200 mV: ΔΨm = -160 mV, ΔpH = -0.7) → Matrix NADH/FADH₂ → ATP",
        "turnover": "Single mitochondrion synthesizes ~10⁶ ATP/sec; human circular mtDNA ring (16,569 bp) replicates in ~1 hour via Pol γ & Twinkle helicase",
        "layout_mode": "organelle_cutaway",
        "pieces": [
            ("Piece_Mito_OuterMembraneVDAC", "Outer Mitochondrial Membrane (OMM) & VDAC1 19-Stranded β-Barrel Porins", "3EMN VDAC1 Porin", "#0077B6", "Outer Membrane Marine Blue", "(0.0, +4.5, -2.5)"),
            ("Piece_Mito_InnerCristaeMICOS", "Cardiolipin-Rich Inner Membrane Cristae Folds & MICOS/OPA1 Junctions", "Cristae Lamellae + MICOS Neck", "#06D6A0", "Inner Cristae Jade", "(0.0, +1.0, -1.5)"),
            ("Piece_Mito_CircularMtDNARing", "16,569 bp Closed Circular Double-Stranded mtDNA Ring & TFAM Nucleoid", "3TMM TFAM–mtDNA + D-Loop Ring", "#FFB703", "Circular mtDNA Gold", "(-3.0, -1.5, +2.0)"),
            ("Piece_Mito_Mitoribosome55S", "Mammalian 55S Mitoribosome (28S + 39S) Tethered to OXA1L Insertase", "3J9M / 6ZSG 55S Mitoribosome", "#7209B7", "Mitoribosome Purple", "(+3.5, -1.5, +2.0)"),
            ("Piece_Mito_TCA_MatrixHub", "Matrix Pyruvate Dehydrogenase & TCA Cycle Metabolon (Citrate Synthase/IDH)", "6CT0 Citrate Synthase", "#F77F00", "Matrix TCA Amber", "(0.0, -3.5, +1.5)"),
            ("Piece_Mito_CristaeRimComplexes", "In-Situ Cristae Respirasomes & Rim V-Shaped ATP Synthase Dimers", "5XTE Respirasome + 6ZQN Dimer", "#E63946", "OXPHOS Rim Crimson", "(0.0, +2.0, +2.0)"),
        ],
        "hud_controls": [
            ("cristae_cutaway_peel", "Membrane Cutaway & Cristae Remodeling", "0% (Intact OMM) → 50% (Cristae Folds Exposed) → 100% (Matrix mtDNA Ring & TCA Focus)"),
            ("pyruvate_oxygen_flux", "Pyruvate & O₂ Respiration Load", "Basal State 4 vs. Active State 3 Respiration (High ΔΨm & NADH turnover)"),
            ("mtdna_nucleoid_zoom", "Circular mtDNA Ring Inspector", "Highlights Heavy/Light strands, D-loop replication origin, and TFAM U-turn bends"),
        ],
        "stages": [
            ("Stage 1 — The Endosymbiotic Double Envelope & VDAC Porins", "Orbit the Outer Mitochondrial Membrane where 19-stranded VDAC1 β-barrels (homologous to bacterial outer-membrane porins) let pyruvate and ADP into the Intermembrane Space."),
            ("Stage 2 — Cardiolipin Cristae Folds & MICOS Necks", "Peel back the outer membrane to reveal the deeply folded Inner Membrane Cristae: MICOS and OPA1 pinch the 28 nm cristae junctions so pumped protons stay concentrated inside the cristae lumen."),
            ("Stage 3 — The Matrix TCA Cycle Metabolon", "Follow Pyruvate entering the matrix via MPC1/2, oxidized by PDH to Acetyl-CoA, and spun through the TCA cycle ring to load NAD⁺ and FAD with high-energy electrons."),
            ("Stage 4 — The 16,569 bp Circular mtDNA Ring & TFAM", "Zoom into the mitochondrial nucleoid: inspect the closed circular double-stranded mtDNA ring (with its triple-stranded displacement D-loop) bent 180° by twin HMG-box TFAM proteins."),
            ("Stage 5 — Co-Translational Insertion by 55S Mitoribosomes", "Watch a specialized protein-rich 55S Mitoribosome translate mtDNA mRNAs and insert the 13 hydrophobic core OXPHOS subunits directly into the inner membrane via OXA1L."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Voltage-Dependent Anion Channel (VDAC)", "https://pdb101.rcsb.org/motm/250"),
            ("RCSB PDB Structure 3EMN — Mitochondrial VDAC-1 Porin", "https://www.rcsb.org/structure/3EMN"),
            ("RCSB PDB Structure 3TMM — Human TFAM Bound to Mitochondrial DNA", "https://www.rcsb.org/structure/3TMM"),
            ("RCSB PDB Structure 3J9M — Complete Human 55S Mitochondrial Ribosome", "https://www.rcsb.org/structure/3J9M"),
        ],
    },
    {
        "num": "20",
        "id": "mitochondrial_respirasome_etc",
        "folder": "20_mitochondrial_respirasome_etc",
        "title": "Mitochondrial Respiratory Supercomplex (I₁III₂IV₁ Respirasome) & Cytochrome c Shuttle",
        "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts ($20\\,\\text{nm}\\text{--}3\\,\\mu\\text{m}$)",
        "scale": "28 nm × 20 nm (1.7 MDa Inner-Membrane Supercomplex)",
        "category": "Oxidative Phosphorylation Electron Transport Chain",
        "pdb1": "5XTE",
        "pdb1_label": "Human Mitochondrial Respiratory Megacomplex I₁III₂IV₁ (5XTE)",
        "pdb2": "1ZOY",
        "pdb2_label": "Mitochondrial Complex II Succinate Dehydrogenase (1ZOY)",
        "overview": (
            "In the mitochondrial cristae membrane, the electron transport chain assembles into a breathtaking 1.7 MDa supramolecular "
            "Respirasome (I₁III₂IV₁, PDB 5XTE) accompanied by Complex II (1ZOY): (1) Mammalian Complex I (45 subunits, 1 MDa—31 "
            "supernumerary subunits wrapped around the 14-subunit bacterial core!) oxidizes Matrix NADH at FMN, passes 2 e⁻ down "
            "an 8-cluster [Fe-S] wire to Ubiquinone (Coenzyme Q₁₀), and pumps 4 H⁺ across the inner membrane; (2) Complex II "
            "(Succinate Dehydrogenase) oxidizes TCA Succinate → Fumarate via FAD and 3 [Fe-S] clusters, feeding additional Ubiquinol "
            "(QH₂) into the membrane pool without pumping protons; (3) Dimeric Complex III₂ (Cytochrome bc₁, 22 subunits) executes "
            "Mitchell's Q-Cycle: one e⁻ from QH₂ jumps onto the swinging Rieske [2Fe-2S] head domain → Cytochrome c₁ → soluble "
            "intermembrane Heme-protein Cytochrome c, while the second e⁻ recycles through hemes b_L and b_H to reduce a quinone "
            "at the Qi site, translocating 4 H⁺ per 2 e⁻; (4) Complex IV (Cytochrome c Oxidase, 14 subunits) accepts 4 e⁻ one at a "
            "time from Cytochrome c via its binuclear Cu_A center → Heme a → Heme a₃/Cu_B catalytic site, reducing 1 O₂ + 4 H⁺ → "
            "2 H₂O while pumping 4 more H⁺ into the cristae lumen (total 10 H⁺ pumped per NADH!)."
        ),
        "behavior": (
            "Renders the complete 1.7 MDa Human Respirasome (5XTE: L-shaped 45-subunit Complex I cradled against dimeric Complex III₂ "
            "and Complex IV) plus adjacent Complex II (1ZOY) in the cardiolipin-rich cristae bilayer, with glowing Coenzyme Q₁₀ "
            "diffusing in the membrane and soluble Cytochrome c shuttling across the cristae lumen."
        ),
        "upstream": "Mitochondrial Matrix TCA cycle & β-oxidation NADH + Succinate (Scenario 19) + Pulmonary/Vascular O₂ diffusion.",
        "inputs": [
            "Matrix NADH + H⁺ (into Complex I FMN) & Succinate (into Complex II FAD)",
            "Molecular Oxygen (1/2 O₂ per 2 e⁻ at Complex IV Heme a₃/Cu_B binuclear center)",
            "10 Matrix H⁺ protons per NADH (4 via Complex I + 4 via Complex III₂ Q-cycle + 2 via Complex IV + 2 chemical H⁺ consumed in H₂O)",
        ],
        "outputs": [
            "10 Cristae-Lumen H⁺ protons pumped per NADH (generating Δp ≈ 200 mV across the inner membrane)",
            "Regenerated Matrix NAD⁺ & Fumarate (sustaining the TCA cycle in Scenario 19)",
            "Metabolic Water (2 H₂O per O₂ reduced at Complex IV)",
        ],
        "downstream": "The 10 pumped H⁺ protons flow directly along the cristae rim into the V-Shaped Mitochondrial ATP Synthase Dimer (Scenario 21) and power TIM23 protein import (Scenario 22).",
        "energy_currency": "Redox Drop ΔE°' = +1.14 V (NADH E°' = -0.32 V → O₂/H₂O E°' = +0.82 V, ΔG°' = -220 kJ/mol) → Proton Motive Force Δp",
        "turnover": "~200–400 electrons/sec per Respirasome (~50–100 O₂ molecules reduced to H₂O per second)",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_ETC_ComplexI_45Sub", "Mammalian Complex I (45 Subunits: FMN, 8 Fe-S Wire & 4 Proton Pumps)", "5XTE Complex I", "#3A86FF", "Complex I Cobalt Blue", "(-5.5, +1.0, 0.0)"),
            ("Piece_ETC_ComplexII_SDH", "Complex II Succinate Dehydrogenase (FAD, 3 Fe-S & Heme b)", "1ZOY Complex II", "#06D6A0", "Complex II Jade", "(-8.0, -1.5, +3.0)"),
            ("Piece_ETC_ComplexIII2_Dimer", "Dimeric Complex III₂ (Cytochrome bc₁, Rieske Fe-S Swinging Head & Q-Cycle)", "5XTE Complex III2 Dimer", "#F77F00", "Complex III2 Amber", "(+0.5, +0.5, -1.0)"),
            ("Piece_ETC_CytochromeC_Shuttle", "Soluble Cristae-Lumen Cytochrome c Heme c Shuttle & Coenzyme Q₁₀ Pool", "5XTE / 1HRC Cytochrome c", "#FFB703", "Electron Carrier Gold", "(+2.5, +4.5, +2.0)"),
            ("Piece_ETC_ComplexIV_COX", "Complex IV Cytochrome c Oxidase (Cu_A, Heme a & Heme a₃/Cu_B O₂ Reducer)", "5XTE / 5Z62 Complex IV", "#E63946", "Complex IV Crimson", "(+5.5, +0.5, +1.0)"),
            ("Piece_ETC_CardiolipinCristae", "Cardiolipin-Enriched Inner Mitochondrial Membrane Bilayer", "Cardiolipin / POPC Bilayer", "#9D4EDD", "Cardiolipin Membrane Violet", "(0.0, 0.0, -3.0)"),
        ],
        "hud_controls": [
            ("nadh_oxygen_flux", "NADH / Succinate Electron Flux & Proton Pumping Speed", "0% to 200% (visualizes e⁻ hopping & 10 H⁺/NADH translocation)"),
            ("etc_inhibitor_mode", "Classical Bioenergetic Poison Toggle", "None | Rotenone (Blocks CI Q-site) | Antimycin A (Blocks CIII Qi) | Cyanide (Blocks CIV Heme a₃)"),
            ("uncoupler_fccp_ucp1", "Brown Fat UCP1 / DNP Proton Leak Uncoupler", "Coupled ATP Synthesis vs. Uncoupled Thermogenesis (Heat generation)"),
        ],
        "stages": [
            ("Stage 1 — Complex I: 45-Subunit NADH Oxidation & 4 H⁺ Pump", "Matrix NADH donates 2 e⁻ to FMN in the hydrophilic arm of Complex I; electrons hop down 8 [Fe-S] clusters to reduce Ubiquinone (Q₁₀ → QH₂), triggering an electrostatic wave that pumps 4 H⁺ into the cristae lumen."),
            ("Stage 2 — Complex II: The TCA Succinate Side-Entry", "Watch Succinate Dehydrogenase oxidize Succinate → Fumarate at FAD, feeding additional QH₂ into the inner membrane pool."),
            ("Stage 3 — Dimeric Complex III₂ & The Bifurcated Q-Cycle", "At the Qo site of Complex III₂, one electron from QH₂ jumps onto the swinging Rieske [2Fe-2S] domain to reduce soluble Cytochrome c, while the second electron recycles via hemes b_L and b_H to the Qi site, releasing 4 H⁺ into the lumen."),
            ("Stage 4 — Cytochrome c Diffusion Across the Respirasome Cleft", "Because Complex III₂ and Complex IV are physically docked in the Respirasome, reduced Cytochrome c only has to diffuse ~10 nm to dock onto Complex IV."),
            ("Stage 5 — Complex IV: Binuclear Heme a₃/Cu_B Reduction of O₂ to Water", "Four electrons enter Complex IV via Cu_A and Heme a to the Heme a₃–Cu_B pocket, cleaving the O=O double bond into 2 H₂O while pumping 4 final H⁺ across the membrane."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Respiratory Supercomplex", "https://pdb101.rcsb.org/motm/299"),
            ("RCSB PDB-101 — Molecule of the Month: Cytochrome c Oxidase", "https://pdb101.rcsb.org/motm/5"),
            ("RCSB PDB Structure 5XTE — Human Mitochondrial Respiratory Megacomplex I₁III₂IV₁", "https://www.rcsb.org/structure/5XTE"),
            ("RCSB PDB Structure 1ZOY — Mitochondrial Respiratory Complex II", "https://www.rcsb.org/structure/1ZOY"),
        ],
    },
    {
        "num": "21",
        "id": "mitochondrial_atp_synthase_dimer",
        "folder": "21_mitochondrial_atp_synthase_dimer",
        "title": "V-Shaped Mitochondrial F₁Fo-ATP Synthase Dimer & ADP/ATP Translocase (AAC)",
        "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts ($20\\,\\text{nm}\\text{--}3\\,\\mu\\text{m}$)",
        "scale": "28 nm × 22 nm Cristae-Curving Rotary Dimer & Nucleotide Antiporter",
        "category": "Rotary Chemiosmotic Catalysis & Cristae Morphogenesis",
        "pdb1": "6ZQN",
        "pdb1_label": "Mammalian V-Shaped Mitochondrial F₁Fo-ATP Synthase Dimer (6ZQN / 7AJB)",
        "pdb2": "1OKC",
        "pdb2_label": "Mitochondrial ADP/ATP Carrier AAC1 (ANT1) in C-State (1OKC)",
        "overview": (
            "Whereas bacterial F₁Fo-ATP Synthase (Prokaryote Scenario 04) operates as an isolated monomer in a flat membrane, "
            "Mitochondrial F₁Fo-ATP Synthase assembles into V-shaped Dimers (angled at ~86°–90° by specialized membrane-wedging "
            "subunits e, f, g, k, and 8/A6L) that self-organize into long double rows along the tightly curved ridges of mitochondrial "
            "cristae! This dimerization physically bends the inner membrane into tubular/lamellar cristae that act as proton traps. "
            "Furthermore, the mammalian mitochondrial Fo rotor ring contains only 8 c-subunits (c₈-ring vs. 10–15 in bacteria/chloroplasts), "
            "meaning a full 360° rotation requires only 8 H⁺ to synthesize 3 ATP in the α₃β₃ catalytic head—a remarkable bioenergetic "
            "gear ratio of 2.67 H⁺ per ATP! Immediately adjacent in the inner membrane sits the Mitochondrial Synthasome partner: "
            "the ADP/ATP Carrier (AAC / ANT, 1OKC) and Phosphate Carrier (PiC), which use the -160 mV membrane voltage to export "
            "newly made ATP⁴⁻ to the cytosol in 1:1 exchange for cytosolic ADP³⁻ (adding 1 H⁺ electrogenic cost → total 3.67 H⁺/ATP)."
        ),
        "behavior": (
            "Renders the complete V-shaped Mitochondrial ATP Synthase Dimer (6ZQN) straddling a sharply curved 86° cristae ridge, "
            "with both c₈-rings and central γδε stalks spinning simultaneously as protons rush from the cristae lumen into the matrix, "
            "flanked by the alternating-access ADP/ATP Carrier (1OKC) exporting ATP⁴⁻."
        ),
        "upstream": "Cristae-lumen H⁺ gradient pumped by the Mitochondrial Respirasome (Scenario 20) + Cytosolic ADP³⁻ and Pᵢ from cellular ATPases.",
        "inputs": [
            "8 Cristae-Lumen H⁺ protons per 360° rotation of each c₈-ring (+ 3 H⁺ for PiC symport / AAC electrogenic exchange)",
            "3 Matrix ADP³⁻ + 3 H₂PO₄⁻ per 360° turn of the asymmetric γ-shaft inside each α₃β₃ head",
            "Cardiolipin lipids gluing the dimer interface and lubricating the spinning c₈-ring",
        ],
        "outputs": [
            "3 Matrix ATP⁴⁻ + 3 H₂O synthesized per 360° rotation per monomer (6 ATP per V-dimer turn!)",
            "Exported Cytosolic ATP⁴⁻ (via AAC1 C-state ↔ M-state rocker-switch)",
            "86° mechanical membrane curvature shaping mitochondrial cristae rims",
        ],
        "downstream": "Exported ATP⁴⁻ leaves the mitochondrion through outer-membrane VDAC (Scenario 19) to fuel every ATP-dependent process in the eukaryotic cell (Scenarios 01–35).",
        "energy_currency": "Proton-Motive Force (Δp ≈ 200 mV) → Mechanical Torque (~40 pN·nm on γ-shaft) → Boyer Binding-Change ATP Synthesis (ΔG ≈ +50 kJ/mol)",
        "turnover": "~100–150 rotations/sec per monomer (~300–450 ATP/sec per monomer; ~600–900 ATP/sec per V-dimer)",
        "layout_mode": "v_dimer_curved_membrane",
        "pieces": [
            ("Piece_mATP_F1Heads_LeftRight", "Twin α₃β₃ Catalytic Hexamer Heads (Boyer Open, Loose, Tight States)", "6ZQN Left & Right F1 Heads", "#FFB703", "Catalytic F1 Gold", "(0.0, +4.5, 0.0)"),
            ("Piece_mATP_GammaRotors_c8Rings", "Twin Central γδε Camshafts & 8-Subunit Fo c₈-Ring Turbines", "6ZQN c8-Rings & Gamma Shafts", "#E63946", "Rotary Turbine Crimson", "(0.0, +0.5, +1.5)"),
            ("Piece_mATP_OSCP_PeripheralStalks", "Twin OSCP Crowns & b/d/F6 Peripheral Stator Stalks", "6ZQN Peripheral Stalks", "#00B4D8", "Stator Stalk Cerulean", "(-5.5, +2.5, 0.0)"),
            ("Piece_mATP_WedgeDimerInterface", "86° Cristae-Bending Wedge Subunits (e, f, g, a/ATP6 & 8/A6L)", "6ZQN Wedge Interface", "#9D4EDD", "Dimer Wedge Violet", "(0.0, -2.5, 0.0)"),
            ("Piece_mATP_AAC_Antiporter", "ADP/ATP Translocase (AAC1 / ANT1) 6-TM Rocker-Switch Carrier", "1OKC / 4C9G AAC Carrier", "#F77F00", "Nucleotide Carrier Amber", "(+6.5, -1.0, +1.5)"),
            ("Piece_mATP_CurvedCristaeRidge", "86°-Bent Cardiolipin Cristae Rim Bilayer", "Curved Cristae Membrane", "#06D6A0", "Cristae Rim Jade", "(0.0, -2.0, -2.5)"),
        ],
        "hud_controls": [
            ("pmf_voltage_mV", "Cristae Proton-Motive Force Δp (mV)", "0 mV (Stalled / IF₁ Inhibited) to 220 mV (150 Hz Twin Rotor Spin)"),
            ("dimer_angle_wedge", "Subunit e/g Dimerization Wedge", "86° Native V-Dimer Ridge vs. Dissociated Monomers (Flat Cristae Collapse)"),
            ("bongkrekic_atractyloside", "AAC Translocase Toxin Toggle", "Normal ADP/ATP Exchange | Bongkrekic Acid (Locks M-state) | Carboxyatractyloside (Locks C-state)"),
        ],
        "stages": [
            ("Stage 1 — Why Mitochondrial ATP Synthase Forms 86° V-Dimers", "Inspect the base of the V-dimer where subunits e, f, and g act as a molecular wedge, bending the inner membrane by 86° to form proton-trapping cristae rims."),
            ("Stage 2 — The High-Gear Mammalian c₈-Ring Turbine", "Protons from the cristae lumen enter the a-subunit inlet half-channel, protonate Glu58 on the c₈-ring, ride 360° through the cardiolipin bilayer, and exit to the matrix—requiring only 8 H⁺ per full turn."),
            ("Stage 3 — Asymmetric γ-Shaft Cam & Boyer's Three-State Cycle", "As the c₈-ring spins the asymmetric γ-shaft inside the stationary α₃β₃ head (held by the OSCP peripheral stalk), the three β-subunits cycle through Open (ATP release), Loose (ADP+Pᵢ bind), and Tight (ATP condensation)."),
            ("Stage 4 — The Synthasome Partner: ADP/ATP Carrier (AAC)", "Zoom to the adjacent 6-TM AAC antiporter: driven by the -160 mV membrane potential, it exports one newly made ATP⁴⁻ to the cytosol in exchange for one cytosolic ADP³⁻."),
            ("Stage 5 — Ischemic Protection by Inhibitory Factor IF₁", "When oxygen drops (ischemia) and ΔΨm collapses, pH-sensitive Inhibitory Factor 1 (IF₁) inserts its α-helix between α and β subunits like a ratchet pawl so the enzyme cannot run backward and waste cellular ATP."),
        ],
        "resources": [
            ("RCSB PDB Structure 6ZQN — Mammalian Mitochondrial ATP Synthase Dimer", "https://www.rcsb.org/structure/6ZQN"),
            ("RCSB PDB Structure 1OKC — Mitochondrial ADP/ATP Carrier", "https://www.rcsb.org/structure/1OKC"),
            ("RCSB PDB-101 — Molecule of the Month: ATP Synthase", "https://pdb101.rcsb.org/motm/72"),
            ("RCSB PDB-101 — Molecule of the Month: ADP/ATP Carrier", "https://pdb101.rcsb.org/motm/260"),
        ],
    },
    {
        "num": "22",
        "id": "mitochondrial_tim_tom_apoptosis",
        "folder": "22_mitochondrial_tim_tom_apoptosis",
        "title": "TOM/TIM23 Protein Import, Drp1 Fission Ring & BAX/BAK–Apoptosome Wheel",
        "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts ($20\\,\\text{nm}\\text{--}3\\,\\mu\\text{m}$)",
        "scale": "20–60 nm Dual-Membrane Import, Fission & Apoptotic Hub",
        "category": "Organelle Biogenesis, Mitochondrial Dynamics & Programmed Cell Death",
        "pdb1": "7CP9",
        "pdb1_label": "Human Mitochondrial Outer Membrane TOM Core Complex (7CP9)",
        "pdb2": "3J2T",
        "pdb2_label": "Heptameric Apaf-1–Cytochrome c–Caspase-9 Apoptosome Wheel (3J2T)",
        "overview": (
            "Mitochondria sit at the crossroads of cellular life and death through three dynamic membrane machines: (1) Protein "
            "Import via the TOM–TIM23 Supercomplex: Because 99% of mitochondrial proteins (~1,500 proteins) are encoded in the "
            "Nucleus and translated on cytosolic 80S ribosomes, they carry an N-terminal amphipathic α-helical Matrix Targeting "
            "Sequence (MTS). Cytosolic Hsp70/Hsp90 chaperones deliver the unfolded precursor to TOM20/TOM22 receptors on the dimeric "
            "19-stranded β-barrel TOM40 Pore (7CP9) in the Outer Membrane, which threads the chain across the intermembrane space "
            "directly into the Inner-Membrane TIM23 channel (driven by ΔΨm and pulled into the matrix by the ATP-powered PAM/mtHsp70 "
            "motor before MPP cleaves the MTS); (2) Mitochondrial Fission via the Drp1 Helical Ring: Cytosolic Dynamin-Related "
            "Protein 1 (Drp1) oligomers wrap around ER-constricted mitochondria and hydrolyze GTP to divide the organelle; and "
            "(3) Intrinsic Apoptosis via the BAX/BAK Pore & Apoptosome Wheel (3J2T): Upon severe DNA damage or cellular stress, "
            "BH3-only proteins (Bid/Bim) trigger BAX and BAK to oligomerize into a giant toroidal macropore in the Outer Membrane, "
            "releasing soluble Cytochrome c (from Scenario 20) into the cytosol. Cytosolic Cytochrome c binds Apaf-1, triggering "
            "dATP/ATP-dependent assembly of the 7-spoked Apoptosome Wheel (1.4 MDa) that activates Caspase-9 → Caspase-3."
        ),
        "behavior": (
            "Dual-mode mitochondrial outer/inner membrane scene: in 'Healthy Biogenesis Mode', TOM40 (7CP9) and TIM23 thread a "
            "nuclear-encoded preprotein into the matrix while Drp1 constricts the organelle; toggling 'Intrinsic Apoptosis Mode' "
            "assembles the BAX/BAK outer-membrane pore ring, releases glowing Cytochrome c into the cytosol, and builds the "
            "7-spoked Apaf-1 + Caspase-9 Apoptosome Wheel (3J2T)."
        ),
        "upstream": "Cytoplasmic 80S Ribosome translation of MTS-tagged precursors (Scenario 32) + Nuclear p53 stress signals (Scenario 26) + Cristae Cytochrome c (Scenario 20).",
        "inputs": [
            "Unfolded nuclear-encoded Mitochondrial Preproteins (with N-terminal positively charged MTS) + Cytosolic/Matrix ATP",
            "Cytosolic GTP (for Drp1 fission ring constriction & Mfn1/2/OPA1 fusion switches)",
            "Pro-apoptotic tBid/BH3 signals + Released Cytochrome c + Cytosolic dATP/ATP (for Apaf-1 Apoptosome wheel assembly)",
        ],
        "outputs": [
            "Mature folded Mitochondrial Matrix & Inner-Membrane Proteins (cleaved by Mitochondrial Processing Peptidase MPP)",
            "Divided daughter mitochondria (via Drp1 GTPase constriction)",
            "Active Cleaved Caspase-9 & Caspase-3 (executing clean, non-inflammatory programmed cell death)",
        ],
        "downstream": "Imported enzymes build the TCA cycle (Scenario 19), Respirasome (Scenario 20), and ATP Synthase (Scenario 21); in apoptosis, Caspase-3 cleaves ICAD/CAD to fragment Nuclear Chromatin (Scenario 28) and activates Scramblase PS exposure on the Plasma Membrane (Scenario 04).",
        "energy_currency": "Inner-Membrane Voltage ΔΨm (-160 mV electrophoretic pull on +MTS) + Matrix mtHsp70 ATP Ratchet + Cytosolic dATP (Apoptosome)",
        "turnover": "TOM40/TIM23 imports ~5–15 residues/sec; Apaf-1 heptameric wheel assembles within minutes of Cytochrome c release",
        "layout_mode": "dual_membrane_span",
        "pieces": [
            ("Piece_MitoBio_TOM40Complex", "Outer-Membrane TOM Core (Twin 19-β-Strand TOM40 Barrels + TOM20/22 Receptors)", "7CP9 Human TOM Complex", "#00B4D8", "TOM Barrel Cerulean", "(-5.0, +2.5, 0.0)"),
            ("Piece_MitoBio_TIM23_PAM", "Inner-Membrane TIM23 Channel, PAM/mtHsp70 Motor & MPP Peptidase", "8SCX TIM23 + 1HR6 MPP", "#06D6A0", "TIM23 Channel Jade", "(-5.0, -2.5, 0.0)"),
            ("Piece_MitoBio_Drp1Ring", "Dynamin-Related Protein 1 (Drp1) Helical GTPase Fission Ring", "4BEJ Drp1 Oligomer", "#9D4EDD", "Fission Ring Violet", "(0.0, +4.0, -2.0)"),
            ("Piece_MitoBio_BAXPoreRing", "Apoptotic BAX/BAK Outer-Membrane Macropore Ring & Escaping Cytochrome c", "4BD2 BAX Pore Oligomer", "#F77F00", "BAX Pore Amber", "(+4.0, +2.5, +1.0)"),
            ("Piece_MitoBio_ApoptosomeWheel", "Heptameric 7-Spoked Apaf-1 + Cytochrome c + Caspase-9 Apoptosome Wheel", "3J2T / 5JUY Apoptosome", "#E63946", "Apoptosome Wheel Crimson", "(+4.5, -2.5, +2.0)"),
            ("Piece_MitoBio_PreproteinMTS", "Translocating Preprotein with Positively Charged Amphipathic MTS Helix", "MTS Preprotein Chain", "#FFB703", "Preprotein Gold", "(-5.0, 0.0, +2.0)"),
        ],
        "hud_controls": [
            ("life_vs_apoptosis_mode", "Cellular Fate Switch", "Healthy Biogenesis (TOM/TIM23 Import) vs. Intrinsic Apoptosis (BAX Pore & 7-Spoked Apoptosome)"),
            ("bcl2_guard_level", "Anti-Apoptotic Bcl-2 / Bcl-xL Shield", "High Bcl-2 (Sequestered BAX — Cell Survival) vs. BH3 Trigger (BAX Pore Opening)"),
            ("delta_psi_import", "Inner Membrane Potential ΔΨm", "-160 mV (Rapid MTS Electrophoretic Pull) vs. 0 mV (Import Arrest → PINK1/Parkin Mitophagy)"),
        ],
        "stages": [
            ("Stage 1 — TOM20/22 Recognition & The Twin-Barrel TOM40 Pore", "Watch cytosolic Hsp70 deliver a nuclear-encoded mitochondrial preprotein to TOM20, which feeds the positively charged MTS helix into the 19-stranded TOM40 β-barrel."),
            ("Stage 2 — Trans-Envelope Handover to TIM23 & mtHsp70 Pulling", "The -160 mV inner-membrane voltage electrophoretically pulls the positively charged MTS through the TIM23 channel, where matrix mtHsp70 burns ATP to ratchet the chain in and MPP clips off the MTS."),
            ("Stage 3 — Drp1 GTPase Ring Mitochondrial Fission", "Observe cytosolic Drp1 monomers assemble into a helical ring around the outer membrane, hydrolyzing GTP to constrict and divide the mitochondrion."),
            ("Stage 4 — The Apoptotic Switch: BAX/BAK Macropore Formation", "Switch to severe cellular stress: tBid overcomes Bcl-2, triggering BAX and BAK dimers to insert into the Outer Membrane and assemble a giant pore ring that releases Cytochrome c from the cristae."),
            ("Stage 5 — The 7-Spoked Apoptosome Wheel & Caspase Cascade", "In the cytosol, released Cytochrome c binds the WD40 propellers of Apaf-1, unlocking dATP binding so 7 Apaf-1 subunits snap into the 1.4 MDa Apoptosome Wheel that dimerizes and activates Caspase-9."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Apoptosome", "https://pdb101.rcsb.org/motm/215"),
            ("RCSB PDB Structure 7CP9 — Human Mitochondrial TOM Core Complex", "https://www.rcsb.org/structure/7CP9"),
            ("RCSB PDB Structure 3J2T — Human Apaf-1 Apoptosome Holoenzyme", "https://www.rcsb.org/structure/3J2T"),
            ("Nature Reviews Molecular Cell Biology — Mitochondrial Protein Import Machinery", "https://www.nature.com/articles/nrm.2016.127"),
        ],
    },
    {
        "num": "23",
        "id": "chloroplast_thylakoid_cpdna",
        "folder": "23_chloroplast_thylakoid_cpdna",
        "title": "Whole Plant Chloroplast Cutaway: TOC/TIC Envelope, Stroma, Grana Thylakoids & Circular cpDNA Ring",
        "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts ($20\\,\\text{nm}\\text{--}3\\,\\mu\\text{m}$)",
        "scale": "5 µm × 2.5 µm Triple-Membrane Photosynthetic Plastid",
        "category": "Photosynthetic Endosymbiotic Organelle & Plastid Genome",
        "pdb1": "7VCF",
        "pdb1_label": "Chloroplast TOC–TIC Trans-Envelope Supercomplex (7VCF)",
        "pdb2": "5MMJ",
        "pdb2_label": "Plant 70S Chloroplast Ribosome (Chlororibosome, 5MMJ)",
        "overview": (
            "Derived from an ancient photosynthetic cyanobacterial endosymbiont, the Plant and Algal Chloroplast is a 5 µm "
            "solar-powered organelle featuring three distinct membranes and three aqueous compartments: (1) A Double Outer/Inner "
            "Envelope Membrane spanned by the 1.5 MDa TOC–TIC Protein Import Supercomplex (7VCF, importing ~3,000 nuclear-encoded "
            "transit-peptide proteins across the intermembrane space); (2) The aqueous Stroma (pH 8.0 in light), which houses "
            "millions of hexadecameric RuBisCO barrels (Scenario 25), starch granules, bacterial-type 70S Chlororibosomes (5MMJ), "
            "and 20–100 copies of the 120–160 kb Closed Circular Double-Stranded Chloroplast DNA (cpDNA) Ring (organized into "
            "two Single-Copy regions separated by two large Inverted Repeats IRA/IRB encoding ~120 genes for PSII, PSI, Cyt b₆f, "
            "ATP synthase, RuBisCO Large subunit rbcL, rRNAs, and tRNAs); and (3) The internal Thylakoid Membrane Network, "
            "folded into tightly stacked cylindrical Grana disks (enriched in PSII & LHCII) interconnected by unstacked Stromal "
            "Lamellae (enriched in PSI & CF₁CFo-ATP Synthase) enclosing a continuous acidic Thylakoid Lumen (pH 5.5 in light)."
        ),
        "behavior": (
            "Surgical 3/4 cutaway of a complete Plant Chloroplast: exposes the smooth Outer and Inner Envelope membranes (with "
            "TOC–TIC import complexes), the stacked green Thylakoid Grana columns connected by helical Stromal Lamellae bridges, "
            "stromal starch grains, 70S Chlororibosomes, and a glowing 150 kb Circular cpDNA Ring."
        ),
        "upstream": "Solar photons (400–700 nm PAR) + Atmospheric CO₂ (via stomata) + Root H₂O (via xylem) + Nuclear-encoded transit-peptide proteins.",
        "inputs": [
            "Sunlight (400–700 nm photons) + 6 CO₂ + 6 H₂O",
            "Cytosolic Pᵢ (imported via Triose-Phosphate/Phosphate Translocator TPT)",
            "Nuclear-encoded Chloroplast Transit Peptide (cTP) precursors imported via TOC–TIC + ATP/GTP",
        ],
        "outputs": [
            "Molecular Oxygen (6 O₂ released to Earth's atmosphere)",
            "Triose Phosphates (GAP / DHAP exported via TPT to make cytosolic Sucrose) & Stromal Starch Granules",
            "cpDNA-encoded photosynthetic core subunits (D1/PsbA, PsaA/B, rbcL) translated on 70S Chlororibosomes",
        ],
        "downstream": "Hosts the Thylakoid Light Reactions (Scenario 24) and Stromal Calvin Cycle RuBisCO (Scenario 25); exported sucrose/malate and O₂ feed the Plant Central Vacuole (Scenario 18) and Mitochondria (Scenario 19).",
        "energy_currency": "Solar Photon Excitation (hν) → Thylakoid ΔpH (Lumen pH 5.5 vs. Stroma pH 8.0) → Stromal ATP + NADPH → C–C Covalent Bonds",
        "turnover": "Single leaf cell contains ~50–100 chloroplasts fixing ~10⁸ CO₂ molecules/sec in full sunlight",
        "layout_mode": "organelle_cutaway",
        "pieces": [
            ("Piece_Chl_OuterInnerEnvelope", "Double Chloroplast Envelope & TOC75–TIC214 Import Supercomplex", "7VCF TOC-TIC Supercomplex", "#06D6A0", "Envelope Membrane Jade", "(0.0, +4.5, -2.5)"),
            ("Piece_Chl_GranaThylakoidStacks", "Stacked Thylakoid Grana Cylinders & Helical Stromal Lamellae", "Grana Thylakoid Architecture", "#2EC4B6", "Thylakoid Chlorophyll Teal", "(0.0, +0.5, 0.0)"),
            ("Piece_Chl_CircularCpDNARing", "150 kb Closed Circular Double-Stranded cpDNA Ring (LSC, SSC, IRA/IRB)", "Circular Plastid Genome Ring", "#FFB703", "Circular cpDNA Gold", "(-3.5, -2.5, +2.0)"),
            ("Piece_Chl_Chlororibosome70S", "70S Chloroplast Ribosome (30S + 50S) Translating rbcL & D1", "5MMJ 70S Chlororibosome", "#7209B7", "Chlororibosome Purple", "(+3.5, -2.5, +2.0)"),
            ("Piece_Chl_StromalRuBisCOStarch", "Stromal RuBisCO Halo, Plastoglobules & Semicrystalline Starch Grain", "1RBL RuBisCO + Starch", "#F77F00", "Stromal Carbon Amber", "(0.0, -3.5, -1.5)"),
        ],
        "hud_controls": [
            ("chloroplast_cutaway_peel", "Envelope & Grana Cutaway Depth", "0% (Whole Plastid) → 50% (Grana Stacks & Stroma) → 100% (Circular cpDNA Ring & Lumen)"),
            ("day_night_cycle", "Illumination State (Daylight PAR ↔ Night Dark Adaptation)", "Daylight (Stroma pH 8.0 / Lumen pH 5.5 / Starch Synthesis) vs. Night (Starch Mobilization)"),
            ("grana_stacking_state", "LHCII State Transition (Grana Stacking)", "State 1 (Tightly Stacked Grana) vs. State 2 (Phosphorylated LHCII Migration to PSI)"),
        ],
        "stages": [
            ("Stage 1 — The Three-Membrane Endosymbiotic Architecture", "Explore the Outer Envelope, Inner Envelope, and internal Thylakoid system dividing the chloroplast into Intermembrane Space, Stroma, and Thylakoid Lumen."),
            ("Stage 2 — TOC–TIC Trans-Envelope Protein Import", "Zoom to the envelope where the TOC75 β-barrel and TIC channel import nuclear-encoded chloroplast precursors carrying an N-terminal transit peptide."),
            ("Stage 3 — Grana Stacks vs. Stromal Lamellae Partitioning", "See why Photosystem II and LHCII pack tightly into flat appressed Grana disks while bulky Photosystem I and CF₁CFo-ATP Synthase sit on the unstacked grana margins and stromal lamellae."),
            ("Stage 4 — The 150 kb Circular cpDNA Ring & Inverted Repeats", "Inspect the closed circular chloroplast DNA (cpDNA) ring with its Large Single-Copy (LSC), Small Single-Copy (SSC), and two stabilizing Inverted Repeat (IRA/IRB) regions."),
            ("Stage 5 — 70S Chlororibosomes & Co-Evolution with the Nucleus", "Watch bacterial-style 70S Chlororibosomes translate the rbcL Large subunit of RuBisCO in the stroma to pair with nuclear-encoded rbcS Small subunits."),
        ],
        "resources": [
            ("RCSB PDB Structure 7VCF — Chloroplast TOC-TIC Translocon Supercomplex", "https://www.rcsb.org/structure/7VCF"),
            ("RCSB PDB Structure 5MMJ — Spinach 70S Chloroplast Ribosome", "https://www.rcsb.org/structure/5MMJ"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Chloroplasts and Photosynthesis", "https://www.ncbi.nlm.nih.gov/books/NBK26819/"),
            ("Cell — Cryo-ET Architecture of Native Plant Thylakoid Grana Membranes", "https://www.cell.com/cell/fulltext/S0092-8674(19)31271-1"),
        ],
    },
    {
        "num": "24",
        "id": "photosystem_ii_i_z_scheme",
        "folder": "24_photosystem_ii_i_z_scheme",
        "title": "Thylakoid Light Reactions: Photosystem II (Mn₄CaO₅ Water-Splitting), Cytochrome b₆f, Photosystem I & CF₁CFo-ATP Synthase",
        "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts ($20\\,\\text{nm}\\text{--}3\\,\\mu\\text{m}$)",
        "scale": "35 nm Thylakoid Z-Scheme Photosynthetic Chain",
        "category": "Solar Water Splitting, Linear Electron Flow & Photophosphorylation",
        "pdb1": "5XNL",
        "pdb1_label": "Plant C₂S₂M₂ Photosystem II–LHCII Supercomplex (5XNL)",
        "pdb2": "5ZJI",
        "pdb2_label": "Plant Photosystem I–LHCI Supercomplex (5ZJI)",
        "overview": (
            "The Thylakoid Membrane executes the most important photochemical reaction on Earth—the Z-Scheme of Oxygenic "
            "Photosynthesis—across four coupled nanomachines: (1) Dimeric Photosystem II–LHCII Supercomplex (5XNL): Light-Harvesting "
            "Complex II (LHCII) chlorophyll a/b trimers funnel 680 nm excitons to the P680 special pair in the D1/D2 core, driving "
            "charge separation (P680* → Pheophytin → Plastoquinone Q_A → Q_B). Oxidized P680•⁺ (E°' = +1.25 V, the strongest "
            "biological oxidant known!) strips electrons via Tyr_Z (D1-Tyr161) from the cubane-like Mn₄CaO₅ Oxygen-Evolving Complex, "
            "stepping through the 5-state Kok Cycle (S₀→S₁→S₂→S₃→[S₄]→S₀) to split 2 H₂O → O₂ + 4 luminal H⁺; (2) Dimeric "
            "Cytochrome b₆f Complex oxidizes Plastoquinol (PQH₂) via the Q-cycle, pumping 4 more H⁺ into the thylakoid lumen and "
            "reducing soluble luminal copper-protein Plastocyanin (PC); (3) Monomeric Photosystem I–LHCI (5ZJI) absorbs 700 nm "
            "photons at P700 to boost electrons from Plastocyanin through phylloquinone and [4Fe-4S] clusters F_X/F_A/F_B to soluble "
            "stromal Ferredoxin (Fd), which Ferredoxin–NADP⁺ Reductase (FNR) uses to reduce NADP⁺ + H⁺ → NADPH; (4) Chloroplast "
            "CF₁CFo-ATP Synthase uses the massive ΔpH across the thylakoid membrane to spin its 14-subunit c₁₄-ring and synthesize stromal ATP."
        ),
        "behavior": (
            "Renders all four thylakoid complexes in sequence across the thylakoid membrane (Stroma on top, Thylakoid Lumen below): "
            "PSII–LHCII (5XNL) with its luminal Mn₄CaO₅ cubane cluster evolving O₂ bubbles, Cytochrome b₆f + Plastocyanin shuttle, "
            "PSI–LHCI (5ZJI) + Ferredoxin/FNR generating NADPH, and rotary CF₁CFo-ATP Synthase generating ATP."
        ),
        "upstream": "Solar photons (680 nm & 700 nm) + Root/Leaf H₂O + Recycled stromal NADP⁺, ADP, and Pᵢ from the Calvin Cycle (Scenario 25).",
        "inputs": [
            "8 Solar Photons (4 at PSII 680 nm + 4 at PSI 700 nm) + 2 H₂O molecules (at the Mn₄CaO₅ cluster)",
            "2 Stromal NADP⁺ + 8 Stromal H⁺ (4 taken up by PQ reduction + 2 consumed in NADPH)",
            "~3 Stromal ADP + 3 Pᵢ (driven by 12 luminal H⁺ flowing through the c₁₄-ring of CF₁CFo-ATP Synthase)",
        ],
        "outputs": [
            "1 Molecular Oxygen (O₂ evolved into the atmosphere) + 12 Luminal H⁺ (acidifying lumen to pH 5.5)",
            "2 Stromal NADPH + ~2.6–3.0 Stromal ATP (the exact assimilate power needed for the Calvin Cycle!)",
        ],
        "downstream": "Stromal ATP and NADPH directly power the hexadecameric RuBisCO Calvin–Benson Cycle in the Stroma (Scenario 25); evolved O₂ fuels Mitochondrial Complex IV respiration across the biosphere (Scenario 20).",
        "energy_currency": "8 Photons (ΔE ≈ 1,400 kJ) → Linear Electron Flow (H₂O +0.82 V → NADPH -0.32 V) + Thylakoid ΔpH (~2.5 pH units)",
        "turnover": "PSII Kok S-state water-splitting cycle completes in ~1.5 ms (up to ~250 O₂/sec per PSII); CF₁CFo-ATP Synthase makes ~400 ATP/sec",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Photo_PSII_LHCII", "Photosystem II–LHCII Supercomplex (D1/D2, P680 & Chlorophyll Antennae)", "5XNL Plant PSII-LHCII", "#2EC4B6", "Photosystem II Teal", "(-6.0, +0.5, 0.0)"),
            ("Piece_Photo_Mn4CaO5_OEC", "Luminal Mn₄CaO₅ Oxygen-Evolving Cubane Cluster & PsbO/P/Q Cap", "3WU2 / 5XNL Mn4CaO5 Cluster", "#FFB703", "Water-Splitting Gold", "(-6.0, -3.5, +2.0)"),
            ("Piece_Photo_CytB6f_Plastocyanin", "Dimeric Cytochrome b₆f Complex, Plastoquinol Pool & Cu-Plastocyanin", "6RQF Cyt b6f + 1BXU PC", "#F77F00", "Cytochrome b6f Amber", "(-1.0, -0.5, +1.5)"),
            ("Piece_Photo_PSI_LHCI_FNR", "Photosystem I–LHCI (P700, Fe-S Wire), Ferredoxin & FNR (NADPH Generator)", "5ZJI PSI + 1GAQ Fd-FNR", "#3A86FF", "Photosystem I Cobalt Blue", "(+3.5, +1.0, 0.0)"),
            ("Piece_Photo_CF1CFo_ATPSynthase", "Chloroplast CF₁CFo-ATP Synthase (Redox γ-Switch & 14-Subunit c₁₄-Ring)", "6FKF Chloroplast ATP Synthase", "#E63946", "Rotary Synthase Crimson", "(+7.5, +1.5, -1.0)"),
            ("Piece_Photo_ThylakoidBilayer", "Galactolipid-Rich Thylakoid Membrane (MGDG/DGDG Bilayer)", "Thylakoid Bilayer", "#06D6A0", "Thylakoid Membrane Jade", "(0.0, 0.0, -2.5)"),
        ],
        "hud_controls": [
            ("photon_flux_par", "Solar Photon Flux Intensity (PAR µmol/m²/s)", "0 (Dark — Thioredoxin γ-disulfide locks ATP Synthase) to 1500 (Full Z-Scheme Water Splitting)"),
            ("linear_vs_cyclic_cef", "Electron Flow Mode", "Linear Electron Flow (PSII→PSI: ATP + NADPH + O₂) vs. Cyclic Electron Flow (PSI→Cyt b₆f: Extra ATP Only)"),
            ("kok_s_state_stepper", "Mn₄CaO₅ Kok Cycle Stepper (S₀ → S₁ → S₂ → S₃ → S₄)", "Single-flash photon stepping showing 4-flash O₂ release"),
        ],
        "stages": [
            ("Stage 1 — Exciton Funneling & P680 Charge Separation in PSII", "Watch 680 nm photons strike LHCII antenna chlorophylls and funnel picosecond excitation energy to the P680 reaction center, ejecting an electron to Pheophytin and Plastoquinone Q_B."),
            ("Stage 2 — The Mn₄CaO₅ Water-Splitting Clock (Kok S₀–S₄ Cycle)", "Follow four sequential photon flashes as P680•⁺ extracts 4 electrons via Tyr_Z from the distorted Mn₄CaO₅ cubane cluster, snapping two H₂O molecules into O=O gas and 4 luminal H⁺."),
            ("Stage 3 — Plastoquinol, Cytochrome b₆f Q-Cycle & Plastocyanin", "Reduced Plastoquinol (PQH₂) diffuses to Cytochrome b₆f, which pumps 4 more H⁺ into the lumen and hands electrons to the blue copper-protein Plastocyanin."),
            ("Stage 4 — Photosystem I (P700), Ferredoxin & FNR NADPH Synthesis", "A second 700 nm photon excites P700 in PSI, boosting the electron from Plastocyanin through three [4Fe-4S] clusters to stromal Ferredoxin and FNR to reduce NADP⁺ → NADPH."),
            ("Stage 5 — Thylakoid ΔpH & CF₁CFo-ATP Synthase Photophosphorylation", "The 1,000-fold proton gradient (Lumen pH 5.5 vs. Stroma pH 8.0) spins the 14-subunit c₁₄-ring of CF₁CFo-ATP Synthase to generate the ATP that accompanies NADPH into the Calvin Cycle."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Photosystem II", "https://pdb101.rcsb.org/motm/59"),
            ("RCSB PDB-101 — Molecule of the Month: Photosystem I", "https://pdb101.rcsb.org/motm/22"),
            ("RCSB PDB Structure 5XNL — Plant C₂S₂M₂ PSII–LHCII Supercomplex", "https://www.rcsb.org/structure/5XNL"),
            ("RCSB PDB Structure 5ZJI — Plant PSI–LHCI Supercomplex", "https://www.rcsb.org/structure/5ZJI"),
        ],
    },
]
