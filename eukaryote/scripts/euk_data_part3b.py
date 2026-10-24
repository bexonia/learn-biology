# euk_data_part3b.py — Elements 31 to 36 of the Eukaryote 36-Element Roadmap

EUK_ELEMENTS_PART3B = [
    {
        "num": "31",
        "id": "spliceosome_rna_lariat_rings",
        "folder": "31_spliceosome_rna_lariat_rings",
        "title": "The Spliceosome (U1–U6 snRNPs): Intron Excision, RNA Lariat Rings, Exon Ligation & Exon Junction Complex (EJC)",
        "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories ($10\,\text{nm}\text{--}6\,\mu\text{m}$)",
        "scale": "30 nm Dynamic Metallo-Ribozyme Machine (~150 Proteins + 5 snRNAs) & 2'-5' RNA Lariat Ring",
        "category": "Co-Transcriptional Pre-mRNA Splicing, Alternative Splicing & RNA Lariat Ring Topology",
        "pdb1": "5Z56",
        "pdb1_label": "Human Catalytic Step I / B* Spliceosome Cryo-EM Structure (5Z56)",
        "pdb2": "2P89",
        "pdb2_label": "Heptameric Sm Protein Ring Encircling U-snRNA (2P89)",
        "overview": (
            "Over 95% of human multi-exon pre-mRNAs contain non-coding Introns (often 10× longer than coding Exons) that must be excised "
            "with single-nucleotide precision by the Spliceosome—a dynamic multi-megadalton ribonucleoprotein machine assembled de novo "
            "on each intron from five Small Nuclear Ribonucleoproteins (U1, U2, U4, U5, and U6 snRNPs, each built around a heptameric "
            "Sm or LSm protein ring encircling a structured snRNA) plus ~100 DExD/H-box RNA helicases and Prp8/NTC scaffold proteins. "
            "Recruited directly from the Ser2-phosphorylated CTD tail of elongating RNA Pol II (Scenario 30), U1 snRNP base-pairs with "
            "the 5' Splice Site (GU), while SF1/U2AF and U2 snRNP base-pair with the Branch-Point Sequence, bulging out the invariant "
            "Branch-Point Adenosine (BPA). Recruitment of the U4/U6.U5 tri-snRNP forms the pre-catalytic B complex; ATP-dependent RNA "
            "helicases (Brr2, Prp28, Prp2) eject U1 and U4, allowing U6 snRNA to fold with U2 snRNA into an intramolecular stem-loop "
            "(ISL) that coordinates two catalytic Mg²⁺ ions (M1 and M2)—identical in geometry to Group II self-splicing introns! In "
            "Step 1 (Branching), the 2'-OH of the Branch-Point Adenosine performs a nucleophilic attack on the 5' Splice Site phosphate, "
            "forming a covalent 2'-5' phosphodiester bond that loops the intron into a closed **RNA Lariat Ring** and frees the 5' Exon "
            "3'-OH. In Step 2 (Exon Ligation), the 5' Exon 3'-OH attacks the 3' Splice Site (AG), ligating Exon 1 to Exon 2, depositing "
            "an Exon Junction Complex (EJC) 24 nt upstream, and releasing the Intron Lariat Ring (either debranched by DBR1 or processed "
            "into snoRNAs/stable circular intronic RNAs, circRNAs)."
        ),
        "behavior": (
            "Renders the catalytic human Spliceosome (Prp8 cradle, U2/U6 snRNA catalytic Mg²⁺ active site, U5 loop holding Exon 1, and "
            "heptameric Sm rings) executing both transesterification steps: highlights the 2'-OH Branch-Point Adenosine attack that loops "
            "the intron into a glowing **2'-5' RNA Lariat Ring**, followed by Exon 1–Exon 2 ligation and EJC deposition."
        ),
        "upstream": "RNA Polymerase II elongating with Ser2-P CTD tail & 5'-m⁷G Capped pre-mRNA (Scenario 30) + SR proteins & hnRNPs defining exon/intron boundaries.",
        "inputs": [
            "5'-m⁷G-Capped Pre-mRNA containing Exon 1 — [5'-GU Intron ... Branch-Point Adenosine (A) ... Polypyrimidine-AG-3'] — Exon 2",
            "U1, U2, U4/U6, and U5 snRNPs (each stabilized by a 7-subunit Sm/LSm ring) + NineTeen Complex (NTC)",
            "Nuclear ATP (hydrolyzed by 8 sequential DExD/H-box RNA helicases—Prp5, Sub2, Prp28, Brr2, Prp2, Prp16, Prp22, Prp43—to drive conformational proofreading) + 2 Catalytic Mg²⁺ ions",
        ],
        "outputs": [
            "Mature Spliced mRNA (Exon 1–Exon 2 ligated) decorated with Exon Junction Complexes (EJCs) and Poly(A) tail",
            "Excised **2'-5' Branched Intron RNA Lariat Ring** (debranched by DBR1 into linear RNA/snoRNAs, or back-spliced into covalent Circular RNAs / circRNAs)",
            "Recycled U1/U2/U4/U5/U6 snRNPs + ADP + Pᵢ",
        ],
        "downstream": "Exports EJC-marked mature mRNAs through the Nuclear Pore Complex (Scenario 27) to Cytoplasmic 80S Ribosomes for pioneer translation & Nonsense-Mediated Decay (NMD) quality control (Scenario 32).",
        "energy_currency": "Transesterification is isoenergetic (2 phosphodiester bonds in = 2 bonds out); ~8–10 ATP molecules hydrolyzed by RNA helicases for directional fidelity & remodeling",
        "turnover": "Co-transcriptional intron removal in ~15–60 seconds per intron across human genes",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Splice_Prp8Core", "Prp8 Master Scaffold Cradle & NineTeen Complex (NTC)", "5Z56 Prp8 Core", "#0077B6", "Prp8 Cradle Blue", "(0.0, 0.0, 0.0)"),
            ("Piece_Splice_U2U6Ribozyme", "U2/U6 snRNA Catalytic Ribozyme Core & Two-Mg²⁺ Active Site (M1/M2)", "5Z56 U2/U6 snRNA Core", "#FFB703", "Catalytic Ribozyme Gold", "(0.0, +0.8, +2.0)"),
            ("Piece_Splice_SmRings", "Heptameric Sm & LSm Protein Toroidal Rings Encircling U1/U2/U5 snRNAs", "2P89 / 5Z56 Sm Heptamer Rings", "#7209B7", "Sm Ring Royal Purple", "(-4.2, +2.5, +1.5)"),
            ("Piece_Splice_IntronLariat", "Excised 2'-5' Branched Intron RNA Lariat Ring (Branch-Point Adenosine)", "5Z56 Intron Lariat Loop", "#E63946", "RNA Lariat Ring Crimson", "(+3.8, +2.2, +1.8)"),
            ("Piece_Splice_Exons_EJC", "Ligated 5'-Exon 1 & 3'-Exon 2 with Deposited Exon Junction Complex (EJC)", "5Z56 Exons & eIF4A3 EJC", "#06D6A0", "Ligated Exon Jade", "(-2.5, -3.5, +1.5)"),
            ("Piece_Splice_HelicaseMotors", "ATP-Dependent DExD/H-Box RNA Helicases (Brr2, Prp2, Prp16, Prp22, Prp43)", "5Z56 Brr2 / Prp16 Helicases", "#F77F00", "Helicase Motor Amber", "(+3.5, -3.2, -1.0)"),
        ],
        "hud_controls": [
            ("splicing_reaction_step", "Catalytic Transesterification Step Selector", "Step 1: Branch-Point 2'-OH Attack (Forms 2'-5' Lariat Ring) vs. Step 2: Exon 1–Exon 2 Ligation"),
            ("alternative_splicing_mode", "Alternative Splicing Isoform Switch (SR Proteins vs. hnRNP Silencers)", "Constitutive Exon Inclusion (Isoform A) vs. Exon Skipping / Back-Spliced circRNA Ring"),
            ("helicase_atp_speed", "DExD/H-Box RNA Helicase Remodeling & Prp43 Lariat Disassembly Rate", "0.0x to 2.5x"),
        ],
        "stages": [
            ("Stage 1 — Splice Site Recognition (U1 at 5'-GU & U2 at Branch-Point A)", "As the intron emerges from RNA Pol II, U1 snRNP base-pairs with the 5' GU splice site while U2 snRNP base-pairs with the branch site, extruding the reactive Branch-Point Adenosine (BPA) with its exposed 2'-OH."),
            ("Stage 2 — Tri-snRNP Recruitment & Brr2 Helicase Activation (B → B*)", "The U4/U6.U5 tri-snRNP joins; Brr2 and Prp28 helicases hydrolyze ATP to unwind U4/U6 and eject U1/U4, allowing U6 snRNA to fold with U2 snRNA and position two catalytic Mg²⁺ ions (M1 and M2)."),
            ("Stage 3 — Step 1 Transesterification: 2'-5' RNA Lariat Ring Formation", "Activated by Mg²⁺ M2, the 2'-OH of the Branch-Point Adenosine attacks the 5' splice-site phosphodiester bond, cleaving Exon 1 and looping the 5' end of the intron into a covalent **2'-5' Branched RNA Lariat Ring**."),
            ("Stage 4 — Prp16 Remodeling & Step 2 Exon–Exon Ligation", "Prp16 ATPase remodels the C complex into C*; U5 snRNA Loop 1 aligns the freed 3'-OH of Exon 1 to attack the 3' AG splice site, ligating Exon 1 to Exon 2 into a continuous coding ORF."),
            ("Stage 5 — EJC Deposition, Prp22/Prp43 Release & Lariat Ring Debranching", "An Exon Junction Complex (EJC: eIF4A3, MAGOH, Y14) clamps 24 nt upstream of the splice junction for nuclear export, while Prp43 releases the Intron Lariat Ring to be debranched by DBR1 or matured into snoRNAs/circRNAs."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Spliceosomes", "https://pdb101.rcsb.org/motm/210"),
            ("RCSB PDB Structure 5Z56 — Cryo-EM Structure of the Human Catalytic Step I Spliceosome", "https://www.rcsb.org/structure/5Z56"),
            ("RCSB PDB Structure 2P89 — Heptameric Sm Core Ring of Human Spliceosomal snRNPs", "https://www.rcsb.org/structure/2P89"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: RNA Splicing & the Spliceosome", "https://www.ncbi.nlm.nih.gov/books/NBK26887/#_A1095_"),
        ],
    },
    {
        "num": "32",
        "id": "eukaryotic_80s_ribosome_polyrna_loop",
        "folder": "32_eukaryotic_80s_ribosome_polyrna_loop",
        "title": "Cytoplasmic Translation: The 80S Ribosome (60S + 40S) & Circular Closed-Loop Polysome (m⁷G–eIF4E–eIF4G–PABP–PolyA)",
        "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division ($10\,\text{nm}\text{--}10\,\mu\text{m}$)",
        "scale": "28 nm, 4.3 MDa 80S Ribosome & 150 nm Circularized Closed-Loop Polysome Ring",
        "category": "Cytoplasmic Protein Biosynthesis & Closed-Loop mRNA Translation Recycling",
        "pdb1": "4V6X",
        "pdb1_label": "Human 80S Ribosome Cryo-EM Structure (60S + 40S Subunits, 4V6X)",
        "pdb2": "7QP6",
        "pdb2_label": "Human 48S Translation Initiation Complex with eIF4F & eIF3 (7QP6)",
        "overview": (
            "Whereas prokaryotic 70S ribosomes (2.5 MDa) initiate translation directly on nascent mRNAs via Shine–Dalgarno base-pairing, "
            "eukaryotic cytoplasmic translation uses a larger 4.3 MDa **80S Ribosome**—composed of a **40S Small Subunit** (18S rRNA + 33 "
            "RPS proteins) and a **60S Large Subunit** (28S, 5.8S, and 5S rRNAs + 47 RPL proteins)—operating on a **Circularized Closed-Loop "
            "mRNA Ring**. Once a spliced mRNA exits the Nuclear Pore (Scenario 27), its 5' m⁷GpppN cap is bound by eIF4E and its 3' Poly(A) "
            "tail is coated by Poly(A)-Binding Protein (PABP). The giant scaffold protein eIF4G simultaneously binds both eIF4E (at the 5' "
            "end) and PABP (at the 3' end), bending the entire mRNA into a physical **Closed-Loop Polysome Ring**! This circular topology "
            "ensures that only intact, non-degraded mRNAs (containing both cap and tail) are translated and allows terminating ribosomes "
            "at the 3' stop codon to immediately re-initiate at the adjacent 5' cap. Initiation proceeds via 5'→3' scanning: the 43S "
            "Pre-Initiation Complex (40S + eIF1/1A/3/5 + eIF2–GTP–Met-tRNAᵢᴹᵉᵗ) is recruited to the 5' cap while the DEAD-box helicase "
            "eIF4A unwinds 5'-UTR hairpins until the anticodon recognizes the Kozak AUG start codon; eIF5B-GTP then joins the 60S subunit "
            "to form the elongation-competent 80S ribosome. Elongation cycles via eEF1A-GTP (aminoacyl-tRNA delivery), the 28S rRNA "
            "Peptidyl Transferase Center (PTC), and eEF2-GTP (translocation), until eRF1/eRF3-GTP recognizes UAA/UAG/UGA and ABCE1 splits "
            "the subunits for immediate recycling around the closed mRNA loop."
        ),
        "behavior": (
            "Renders the circularized **Closed-Loop Polysome Ring** in the cytosol: shows a full-length mRNA bent into a circle by the "
            "5'-m⁷G Cap–eIF4E–eIF4G–PABP–3'-Poly(A) bridge, with 43S initiation complexes scanning the 5'-UTR, multiple 80S ribosomes "
            "(40S + 60S) translating in series with A/P/E-site tRNAs and glowing nascent polypeptides, and eRF1/eRF3/ABCE1 recycling "
            "subunits directly from the 3' stop codon back to the 5' cap."
        ),
        "upstream": "Nucleolar Pre-40S/60S subunit biogenesis (Scenario 26) + Spliceosome mRNA maturation (Scenario 31) + NPC nuclear export (Scenario 27) + Cytosolic Aminoacyl-tRNA Synthetases.",
        "inputs": [
            "Exported Mature mRNA (with 5'-m⁷GpppN Cap, 5'-UTR, Coding ORF, 3'-UTR, and ~200 nt 3'-Poly(A) Tail)",
            "Initiator Met-tRNAᵢᴹᵉᵗ + Elongator Aminoacyl-tRNAs (charged by 20 Aminoacyl-tRNA Synthetases using 1 ATP → AMP + PPᵢ each)",
            "Cytosolic GTP (for eIF2, eIF5B, eEF1A, and eEF2) + ATP (for eIF4A 5'-UTR scanning helicase and ABCE1 ribosome splitting)",
        ],
        "outputs": [
            "Newly synthesized cytosolic, nuclear, mitochondrial/peroxisomal, and cytoskeletal polypeptides",
            "Deacylated tRNAs (recharged by Aminoacyl-tRNA Synthetases) + Recycled 40S/60S subunits looping back across the eIF4G–PABP bridge",
            "GDP + Pᵢ + ADP",
        ],
        "downstream": "Delivers nascent polypeptides to TRiC/CCT & Hsp70/Hsp90 chaperones (Scenario 34), Rough ER Sec61 (Scenario 13), Mitochondria TOM/TIM (Scenario 19), Peroxisomes (Scenario 22), or Nucleus NPCs (Scenario 27).",
        "energy_currency": "1 ATP (tRNA charging) + 2 GTP (eEF1A decoding + eEF2 translocation) ≈ 4 high-energy phosphate bonds per peptide bond",
        "turnover": "Eukaryotic 80S ribosome translates at ~5–9 amino acids/sec (slower but higher accuracy and co-translational folding complexity than bacterial 70S at ~15–20 aa/sec)",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Rib80_60SLarge", "60S Large Ribosomal Subunit (28S, 5.8S, 5S rRNA + 47 RPLs & PTC)", "4V6X 60S Large Subunit", "#7209B7", "60S Subunit Purple", "(0.0, +1.8, 0.0)"),
            ("Piece_Rib80_40SSmall", "40S Small Ribosomal Subunit (18S rRNA + 33 RPSs & Decoding Center)", "4V6X 40S Small Subunit", "#00B4D8", "40S Subunit Cerulean", "(0.0, -1.8, +1.0)"),
            ("Piece_Rib80_ClosedLoop", "Circular mRNA Closed-Loop Bridge (5'-m⁷G Cap + eIF4E–eIF4G–PABP + 3'-PolyA)", "7QP6 eIF4F–PABP Cap-Tail Bridge", "#FFB703", "Closed-Loop Bridge Gold", "(-4.5, 0.0, +1.8)"),
            ("Piece_Rib80_tRNAs_EFs", "A/P/E-Site tRNAs, eEF1A-GTP Ternary Complex & eEF2 Translocase", "4V6X tRNAs & Elongation Factors", "#E63946", "tRNA & eEF Crimson", "(+2.2, 0.0, +2.2)"),
            ("Piece_Rib80_PolysomeRing", "Circularized Polysome mRNA Track & ABCE1 Termination/Recycling Splitter", "Polysome Closed-Loop mRNA", "#0077B6", "Polysome mRNA Blue", "(+4.2, -2.5, 0.0)"),
            ("Piece_Rib80_NascentChain", "Emerging Nascent Polypeptide Chain & Co-Translational NAC/Hsp70 Chaperone", "Nascent Peptide Chain", "#06D6A0", "Nascent Chain Jade", "(0.0, +4.5, +1.5)"),
        ],
        "hud_controls": [
            ("closed_loop_integrity", "eIF4E–eIF4G–PABP Circular mRNA Closed-Loop State (mTORC1 / 4E-BP1 Control)", "Intact Circular Polysome (High Re-Initiation) vs. 4E-BP1 Cap-Blocked Linear mRNA"),
            ("translation_elongation_rate", "80S Ribosome Scanning & eEF1A/eEF2 Elongation Speed", "0.0x (Cycloheximide E-Site Block) to 2.5x"),
            ("nmd_surveillance_toggle", "Pioneer Round Exon Junction Complex (EJC) & Nonsense-Mediated Decay (NMD)", "Normal ORF (EJC Stripped -> Stable Translation) vs. Premature Stop Codon (UPF1 Triggers Decay)"),
        ],
        "stages": [
            ("Stage 1 — 5'-Cap to 3'-Poly(A) Circularization (The Closed-Loop mRNA Ring)", "eIF4E binds the 5' m⁷G cap, PABP coats the 3' Poly(A) tail, and the scaffold protein eIF4G bridges them together, bending the mRNA into a topologically closed ring."),
            ("Stage 2 — 43S Pre-Initiation Recruitment & eIF4A 5'-UTR Scanning", "Multi-subunit eIF3 recruits the 40S subunit (loaded with eIF2-GTP-Met-tRNAᵢᴹᵉᵗ) to the 5' cap; eIF4A uses ATP to melt 5'-UTR secondary structure as the complex scans 5'→3' to the Kozak AUG start codon."),
            ("Stage 3 — 60S Subunit Joining (eIF5B-GTP) & 80S Assembly", "Base-pairing of Met-tRNAᵢᴹᵉᵗ with AUG triggers eIF2 GTP hydrolysis and factor release, while eIF5B-GTP clamps the 60S Large Subunit onto the 40S to form the complete 80S ribosome with Met-tRNAᵢᴹᵉᵗ in the P-site."),
            ("Stage 4 — Elongation Cycle (eEF1A Decoding, 28S PTC & eEF2 Translocation)", "eEF1A-GTP delivers cognate aminoacyl-tRNAs to the A-site; the 28S rRNA Peptidyl Transferase Center (PTC) forms the peptide bond, and eEF2-GTP translocates the ribosome 3 nucleotides along the circular mRNA."),
            ("Stage 5 — Termination (eRF1/eRF3) & Closed-Loop Subunit Recycling (ABCE1)", "At the UAA/UAG/UGA stop codon, structural tRNA mimic eRF1 (delivered by eRF3-GTP) hydrolyzes the finished protein; the twin-ATPase ABCE1 splits the 80S into 40S and 60S subunits right next to the 5' cap for instant re-initiation."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Eukaryotic Ribosomes & Initiation Factors", "https://pdb101.rcsb.org/motm/121"),
            ("RCSB PDB Structure 4V6X — High-Resolution Cryo-EM Structure of the Human 80S Ribosome", "https://www.rcsb.org/structure/4V6X"),
            ("RCSB PDB Structure 7QP6 — Human 48S Translation Initiation Complex", "https://www.rcsb.org/structure/7QP6"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: From RNA to Protein (Eukaryotic Translation)", "https://www.ncbi.nlm.nih.gov/books/NBK26829/"),
        ],
    },
    {
        "num": "33",
        "id": "risc_argonaute_dicer_rna_silencing",
        "folder": "33_risc_argonaute_dicer_rna_silencing",
        "title": "RNA Interference (RNAi) & Post-Transcriptional Silencing: Dicer Molecular Ruler, Argonaute-2 (RISC) & GW182",
        "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division ($10\,\text{nm}\text{--}10\,\mu\text{m}$)",
        "scale": "10–15 nm Dicer Endonuclease Ruler & Argonaute-2 (Ago2) RISC Silencing Complex",
        "category": "Post-Transcriptional Gene Regulation, miRNA/siRNA Silencing & Antiviral RNA Defense",
        "pdb1": "4W5N",
        "pdb1_label": "Human Argonaute-2 (Ago2) Bound to Guide miRNA & Target mRNA (4W5N)",
        "pdb2": "5ZAL",
        "pdb2_label": "Human Dicer–TRBP Complex Cleaving Pre-miRNA Hairpin (5ZAL)",
        "overview": (
            "Whereas prokaryotes defend against foreign nucleic acids using DNA-targeting CRISPR-Cas systems, eukaryotes evolved "
            "RNA Interference (RNAi) and microRNA (miRNA) pathways that regulate over 60% of all human protein-coding mRNAs in the "
            "cytoplasm. In the nucleus, RNA Pol II transcribes stem-loop primary miRNAs (pri-miRNAs) that are cropped by the Microprocessor "
            "complex (Drosha + DGCR8) into ~70 nt pre-miRNA hairpins and exported through the Nuclear Pore by Exportin-5/RanGTP (Scenario 27). "
            "In the cytosol, the L-shaped RNase III enzyme **Dicer** (complexed with TRBP) acts as a precise molecular ruler: its PAZ domain "
            "binds the 2-nt 3' overhang at the base of the hairpin and measures ~21–22 base pairs up the stem to its twin RNase IIIa/b "
            "catalytic domains, dicing off the terminal loop to yield a ~22 bp miRNA/siRNA duplex. The duplex is loaded with Hsp70/Hsp90 "
            "chaperone assistance into **Argonaute-2 (Ago2)**—the bilobed core of the **RNA-Induced Silencing Complex (RISC)** (containing "
            "N, PAZ, MID, and RNase H-like PIWI domains). Ago2 ejects the passenger strand, pre-organizing nucleotides 2–8 of the retained "
            "22 nt Guide Strand into an A-form helix ('Seed Region'). When Ago2 encounters a complementary sequence in the 3'-UTR of a "
            "target mRNA (Scenario 32): (1) **Perfect Complementarity (siRNA)** triggers the Ago2 PIWI domain Mg²⁺ 'Slicer' active site to "
            "cleave the mRNA backbone between nucleotides 10 and 11; (2) **Seed-Matched Partial Complementarity (animal miRNA)** recruits "
            "the scaffold protein **TNRC6/GW182**, which summons the CCR4–NOT deadenylase complex to strip the 3' Poly(A) tail, break the "
            "Closed-Loop Polysome, and trigger DCP1/DCP2 decapping and XRN1 5'→3' decay inside P-bodies."
        ),
        "behavior": (
            "Visualizes the two-stage cytoplasmic RNAi pipeline: (1) L-shaped human Dicer–TRBP measuring 22 bp from the PAZ domain to its "
            "RNase III catalytic cleft to dice a pre-miRNA hairpin; (2) Bilobed Argonaute-2 (MID/PAZ/PIWI) displaying the 22 nt guide RNA "
            "seed region (nt 2–8), base-pairing with a target mRNA 3'-UTR to either slice it endonucleolytically or recruit GW182 and "
            "CCR4–NOT deadenylase to break the Closed-Loop Polysome."
        ),
        "upstream": "Nuclear Pol II pri-miRNA transcription (Scenario 30) + Drosha/DGCR8 cropping + Exportin-5/RanGTP nuclear export through NPC (Scenario 27) + Exogenous viral/synthetic dsRNA.",
        "inputs": [
            "Exported ~70 nt Pre-miRNA Hairpin (with 5'-monophosphate and 2-nt 3'-OH overhang) or Long Cytoplasmic dsRNA",
            "Target Cytoplasmic mRNA containing 3'-UTR miRNA Response Elements (MREs, from Scenario 32)",
            "Catalytic Mg²⁺ ions (in Dicer RNase IIIa/b and Ago2 PIWI Slicer active sites) + ATP (for Hsp70/Hsp90 RISC duplex loading)",
        ],
        "outputs": [
            "Mature 21–22 nt Guide RNA–Argonaute-2 (Holo-RISC) surveillance complex",
            "Sliced mRNA fragments (via Ago2 PIWI Slicer) or Deadenylated, Decapped mRNAs degraded into NMPs by XRN1 & Exosome",
            "Ejected & degraded Passenger RNA strand",
        ],
        "downstream": "Directly throttles Cytoplasmic 80S Translation and breaks the Closed-Loop Polysome Ring (Scenario 32), routing silenced mRNAs into cytoplasmic P-bodies for turnover.",
        "energy_currency": "ATP used once during Hsp70/Hsp90-assisted duplex loading into Ago2; subsequent seed-scanning and Ago2 Slicer cleavage are ATP-independent (driven by base-pairing ΔG and Mg²⁺ catalysis)",
        "turnover": "Ago2 seed-scanning is diffusion-limited (~3× faster than naked RNA hybridization); Slicer cleavage k_cat ≈ 1–2 mRNAs/min per RISC",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_RISC_DicerRuler", "Human Dicer–TRBP Molecular Ruler (PAZ Cap, Platform & Twin RNase IIIa/b)", "5ZAL Dicer–TRBP Complex", "#00B4D8", "Dicer Ruler Cerulean", "(-4.5, +1.5, 0.0)"),
            ("Piece_RISC_Ago2Bilobe", "Argonaute-2 (Ago2) Bilobed Core (N, PAZ, MID & Catalytic PIWI Slicer)", "4W5N Human Argonaute-2", "#7209B7", "Ago2 Core Purple", "(+1.0, 0.0, 0.0)"),
            ("Piece_RISC_GuideSeedRNA", "22-nt Guide miRNA / siRNA Strand (5'-Phosphate in MID & Seed nt 2–8)", "4W5N Guide RNA Strand", "#FFB703", "Guide Seed RNA Gold", "(+1.0, +0.8, +2.0)"),
            ("Piece_RISC_TargetmRNA", "Target mRNA 3'-UTR Base-Paired in the Ago2 Central Cleft", "4W5N Target mRNA", "#0077B6", "Target mRNA Blue", "(+2.5, -1.5, +1.8)"),
            ("Piece_RISC_PreMiRNAHairpin", "70-nt Pre-miRNA Stem-Loop Hairpin Docked in Dicer PAZ/Helicase", "5ZAL Pre-miRNA Hairpin", "#E63946", "Pre-miRNA Hairpin Crimson", "(-4.5, -2.0, +1.8)"),
            ("Piece_RISC_GW182_CCR4", "TNRC6 / GW182 Tryptophan-Hook Scaffold & CCR4–NOT Deadenylase Complex", "6Y3Z GW182–CCR4–NOT Module", "#06D6A0", "GW182 Deadenylase Jade", "(+4.8, +2.2, -1.0)"),
        ],
        "hud_controls": [
            ("complementarity_silencing_mode", "Guide–Target Base-Pairing Mode (siRNA Slicer vs. miRNA Deadenylation)", "Perfect 22-nt Match (Ago2 PIWI Slicer Cleavage at nt 10–11) vs. Seed Match nt 2–8 (GW182 + CCR4–NOT PolyA Stripping)"),
            ("dicer_processing_rate", "Dicer–TRBP Pre-miRNA Hairpin Cleavage & Ago2 Loading Rate", "0.0x to 2.5x"),
            ("p_body_condensate_toggle", "GW182 / P-Body Phase-Separated Silencing Granule Recruitment", "Dispersed Cytosolic RISC vs. P-Body Deadenylation & XRN1 Decay Hub"),
        ],
        "stages": [
            ("Stage 1 — Pre-miRNA Export & Dicer PAZ Domain Anchoring", "Exported ~70 nt pre-miRNA hairpins are captured by Dicer–TRBP; the Dicer PAZ domain pockets the 2-nt 3' overhang while a basic pocket secures the 5'-monophosphate."),
            ("Stage 2 — The 22-Base-Pair Molecular Ruler & RNase III Dicing", "Measuring exactly ~22 bp (~65 Å) along its flat protein ruler from the PAZ domain, Dicer's intramolecular RNase IIIa and IIIb dimer cleaves both RNA strands to release the terminal loop and a 22 bp duplex."),
            ("Stage 3 — Chaperone-Assisted Ago2 Loading & Passenger Ejection", "Hsp70/Hsp90 chaperones pry open bilobed Argonaute-2 (Ago2) to accept the 22 bp duplex; the strand with the less stable 5' end has its 5'-phosphate locked into the MID domain while the passenger strand is cleaved and ejected."),
            ("Stage 4 — Seed Region Pre-Organization & Target 3'-UTR Scanning", "Ago2 pre-organizes nucleotides 2–8 of the guide RNA into a solvent-exposed A-form helix ('Seed Region'), enabling rapid 1D/3D collision scanning along cytoplasmic mRNA 3'-UTRs."),
            ("Stage 5 — Slicer Endonuclease Cleavage vs. GW182/CCR4–NOT Deadenylation", "If base-pairing extends through nucleotides 10–11 (siRNA), the Ago2 PIWI domain Mg²⁺ triad slices the mRNA in half; if pairing is restricted to the seed (typical animal miRNA), Ago2 recruits GW182 and CCR4–NOT to strip the Poly(A) tail and silence translation."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Argonaute & Dicer (RNA Interference)", "https://pdb101.rcsb.org/motm/218"),
            ("RCSB PDB Structure 4W5N — Human Argonaute-2 Bound to Guide and Target RNAs", "https://www.rcsb.org/structure/4W5N"),
            ("RCSB PDB Structure 5ZAL — Cryo-EM Structure of Human Dicer–TRBP–Pre-let-7 Complex", "https://www.rcsb.org/structure/5ZAL"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Post-Transcriptional Controls & RNA Interference", "https://www.ncbi.nlm.nih.gov/books/NBK26896/"),
        ],
    },
    {
        "num": "34",
        "id": "chaperonin_tric_26s_proteasome",
        "folder": "34_chaperonin_tric_26s_proteasome",
        "title": "Eukaryotic Proteostasis: TRiC/CCT Chaperonin Folding Cage, E1–E2–E3 Ubiquitin Cascade & The 26S Proteasome",
        "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division ($10\,\text{nm}\text{--}10\,\mu\text{m}$)",
        "scale": "16 nm TRiC/CCT Double-Ring Cage & 45 nm, 2.5 MDa 26S Proteasome Machine",
        "category": "De Novo Protein Folding Quality Control & Ubiquitin-Targeted Proteolysis",
        "pdb1": "7LUM",
        "pdb1_label": "Human TRiC/CCT Chaperonin Folding Tubulin/Actin Inside Its Cage (7LUM)",
        "pdb2": "6MSB",
        "pdb2_label": "Human 26S Proteasome Unfolding a Polyubiquitinated Substrate (6MSB)",
        "overview": (
            "Eukaryotic proteostasis balances two giant barrel-shaped nanomachines that determine the life or death of every cytoplasmic "
            "protein: the **TRiC/CCT Chaperonin** (which folds complex cytoskeletal and WD40 proteins) and the **26S Proteasome** (which "
            "destroys misfolded or short-lived regulatory proteins). Unlike bacterial GroEL/GroES (which uses a detachable GroES lid), "
            "eukaryotic Group II chaperonin **TRiC (TCP-1 Ring Complex / CCT)** is a 1 MDa hetero-oligomeric double ring of 2 × 8 paralogous "
            "subunits (CCT1–CCT8) whose built-in apical helical protrusions twist shut like an **iris diaphragm** upon ATP binding, "
            "encapsulating nascent Actin (Scenario 09) and α/β-Tubulin (Scenario 08) in a charge-patterned folding chamber with the "
            "co-chaperone Prefoldin and PhLP. Conversely, proteins that fail quality control (or cell-cycle cyclins/securin timed for "
            "destruction) are tagged with chains of the 76-amino-acid protein **Ubiquitin (Ub)** linked via Lys48 (K48) isopeptide bonds by "
            "an enzymatic cascade: **E1** (Ubiquitin-activating enzyme, using ATP → AMP + PPᵢ to form a thioester), **E2** (Ubiquitin-"
            "conjugating enzyme), and **E3** (Ubiquitin ligase, e.g., SCF or APC/C). K48-polyubiquitinated substrates are captured by the "
            "2.5 MDa **26S Proteasome**: its **19S Regulatory Particle (RP)** binds ubiquitin via Rpn1/Rpn10/Rpn13, recycles the ubiquitin "
            "chain via the Zn²⁺ deubiquitinase **Rpn11**, and uses a hexameric AAA+ ATPase staircase (**Rpt1–Rpt6**) to mechanically unfold "
            "and thread the polypeptide through the gated α-ring into the **20S Core Particle (CP, α₇β₇β₇α₇)**, where N-terminal Threonine-1 "
            "active sites on β1 (caspase-like), β2 (trypsin-like), and β5 (chymotrypsin-like) chop the protein into 7–9 aa peptides."
        ),
        "behavior": (
            "Renders both eukaryotic proteostasis barrels side by side: (1) the 16-subunit TRiC/CCT hetero-octameric double ring closing "
            "its built-in iris lid around nascent Actin/Tubulin delivered by Prefoldin; (2) the E1–E2–E3 K48-polyubiquitination cascade "
            "feeding a doomed substrate into the 26S Proteasome (19S Rpn11 deubiquitinase + Rpt1–6 AAA+ unfoldase staircase + 20S α₇β₇β₇α₇ "
            "proteolytic barrel)."
        ),
        "upstream": "Cytoplasmic 80S Ribosome nascent polypeptides (Scenario 32) + ER-Associated Degradation (ERAD) retrotranslocation from Rough ER (Scenario 13) + Cell-cycle SCF and APC/C E3 ubiquitin ligases (Scenario 35).",
        "inputs": [
            "For Folding: Unfolded nascent Actin, α/β-Tubulin, or WD40 polypeptides bound to Prefoldin + 8–16 ATP per TRiC cycle",
            "For Degradation: Misfolded/damaged protein or Cyclin + Ubiquitin monomers (76 aa) + ATP (for E1 activation & 19S Rpt1–6 AAA+ unfolding)",
            "H₂O for peptide bond hydrolysis inside the 20S β1/β2/β5 proteolytic chamber",
        ],
        "outputs": [
            "Natively folded Monomeric G-Actin (for Scenario 09) and α/β-Tubulin Heterodimers (for Scenario 08)",
            "Short 7–9 amino acid oligopeptides (further hydrolyzed to free amino acids by cytosolic aminopeptidases for Scenario 32)",
            "Recycled free Ubiquitin monomers (cleaved en bloc by 19S Rpn11) + ADP + Pᵢ + AMP + PPᵢ",
        ],
        "downstream": "Folded Actin and Tubulin build the Cytoskeleton and Mitotic Spindle (Scenarios 08, 09, 35); proteasome-generated peptides feed MHC Class I antigen presentation (via ER TAP transporter) and amino acid recycling.",
        "energy_currency": "TRiC hydrolyzes ~8 ATP per iris closure cycle; Ubiquitination uses 1 ATP → AMP + PPᵢ per Ub; 26S Proteasome Rpt1–6 uses ~50–150 ATP to mechanically unfold and translocate a substrate",
        "turnover": "TRiC folding cycle ~30–60 sec; 26S Proteasome degrades a polyubiquitinated protein in ~20–40 sec (~10–20 aa/sec translocation)",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Prot_TRiC_CCT", "16-Subunit TRiC/CCT Chaperonin Barrel (CCT1–8 Double Ring & Iris Lid)", "7LUM Human TRiC/CCT Complex", "#06D6A0", "TRiC Chaperonin Jade", "(-4.8, +0.5, 0.0)"),
            ("Piece_Prot_PrefoldinClient", "Prefoldin Jellyfish Co-Chaperone & Encapsulated Actin/Tubulin Client", "7LUM Prefoldin & Tubulin", "#00B4D8", "Prefoldin Client Cerulean", "(-4.8, +3.8, +1.5)"),
            ("Piece_Prot_E1E2E3_UbChain", "E1–E2–E3 Ubiquitin Ligase Cascade & K48-Linked Polyubiquitin Tag", "1LDK / 6MSB K48-Ubiquitin Chain", "#FFB703", "Ubiquitin Tag Gold", "(+0.2, +3.8, +1.8)"),
            ("Piece_Prot_19S_Lid_Rpn11", "19S Regulatory Particle Lid (Ubiquitin Receptors & Rpn11 Deubiquitinase)", "6MSB 19S Lid & Rpn11", "#7209B7", "19S Lid Purple", "(+4.2, +3.5, 0.0)"),
            ("Piece_Prot_19S_RptRing", "19S Hexameric AAA+ Unfoldase Staircase (Rpt1–Rpt6 Mechanical Puller)", "6MSB Rpt1–6 AAA+ Ring", "#F77F00", "Rpt AAA+ Unfoldase Amber", "(+4.2, +0.8, +1.2)"),
            ("Piece_Prot_20S_CoreBarrel", "20S Core Particle Barrel (α₇β₇β₇α₇ Rings with β1/β2/β5 Thr1 Active Sites)", "6MSB 20S Core Particle", "#E63946", "20S Proteolytic Crimson", "(+4.2, -2.8, 0.0)"),
        ],
        "hud_controls": [
            ("proteostasis_branch_focus", "Proteostasis Pathway Focus (TRiC Folding vs. Ubiquitin–Proteasome Degradation)", "TRiC/CCT Iris-Cage Folding of Actin/Tubulin vs. E1-E2-E3 K48-Ubiquitination & 26S Proteolysis"),
            ("bortezomib_inhibitor_toggle", "Bortezomib (Velcade) Clinical 20S β5 Active-Site Inhibitor", "Active 20S Peptide Cleavage vs. Bortezomib-Blocked Thr1 Catalytic Chamber"),
            ("aaa_atpase_cycle_speed", "TRiC Iris Closure & 19S Rpt1–6 AAA+ Staircase Translocation Speed", "0.0x to 2.5x"),
        ],
        "stages": [
            ("Stage 1 — Prefoldin Handoff & TRiC/CCT Subunit-Specific Recognition", "Jellyfish-shaped Prefoldin captures nascent Actin or Tubulin emerging from the 80S ribosome and delivers it into the open chamber of the hetero-octameric TRiC (CCT1–CCT8) ring."),
            ("Stage 2 — ATP-Driven Iris Diaphragm Closure & Assisted Folding", "ATP binding across the 8 distinct CCT subunits twists their apical helical protrusions together like a camera iris, sealing the chamber without a separate lid and guiding native folding before ADP + Pᵢ release re-opens the cage."),
            ("Stage 3 — The E1–E2–E3 Ubiquitin Cascade (K48 Death Tagging)", "Terminally misfolded proteins or cell-cycle substrates are recognized by an E3 Ubiquitin Ligase, which transfers activated Ubiquitin from E1 and E2 enzymes to build a Lys48-linked polyubiquitin chain (≥4 Ub units)."),
            ("Stage 4 — 19S Ubiquitin Capture, Rpn11 Deubiquitination & Rpt1–6 Unfolding", "The 19S Regulatory Particle captures the K48-Ub chain via Rpn10/Rpn13; aromatic pore loops of the Rpt1–Rpt6 AAA+ ATPase staircase grab an unstructured tail and pull the polypeptide inward while Rpn11 amputates and recycles the ubiquitin chain."),
            ("Stage 5 — 20S α-Gate Opening & β1/β2/β5 Threonine-1 Proteolysis", "C-terminal HbYX tails of the Rpt ATPases unlock the 20S α-ring gate, threading the unfolded chain into the central β₇β₇ proteolytic chamber where N-terminal Threonine-1 nucleophiles on β1, β2, and β5 shred it into 7–9 residue peptides."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Proteasome & Ubiquitin", "https://pdb101.rcsb.org/motm/166"),
            ("RCSB PDB-101 — Molecule of the Month: Chaperonins", "https://pdb101.rcsb.org/motm/32"),
            ("RCSB PDB Structure 7LUM — Human TRiC/CCT Chaperonin Folding Tubulin", "https://www.rcsb.org/structure/7LUM"),
            ("RCSB PDB Structure 6MSB — Substrate-Engaged Human 26S Proteasome Cryo-EM Structure", "https://www.rcsb.org/structure/6MSB"),
        ],
    },
    {
        "num": "35",
        "id": "mitotic_spindle_kinetochore_escrt",
        "folder": "35_mitotic_spindle_kinetochore_escrt",
        "title": "Eukaryotic Cell Division (Mitosis & Cytokinesis): Bipolar Centrosome Spindle, Ndc80 Kinetochore, APC/C & ESCRT-III Abscission",
        "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division ($10\,\text{nm}\text{--}10\,\mu\text{m}$)",
        "scale": "10 µm Bipolar Mitotic Spindle, 80 nm Kinetochore Coupler & ESCRT-III Spiral",
        "category": "Mitotic Chromosome Segregation, Spindle Assembly Checkpoint & Cytokinetic Abscission",
        "pdb1": "5TCS",
        "pdb1_label": "Eukaryotic Centromeric CENP-A Nucleosome & Kinetochore CCAN (5TCS)",
        "pdb2": "6VME",
        "pdb2_label": "ESCRT-III Helical Membrane-Constriction Filament with VPS4 (6VME)",
        "overview": (
            "Whereas bacteria divide by binary fission using a single FtsZ ring, eukaryotic cells must partition 46 replicated sister "
            "chromatids with zero errors across a 10 µm **Bipolar Mitotic Spindle** before severing the plasma membrane. In Prophase/"
            "Prometaphase, CDK1–Cyclin B phosphorylates Nuclear Lamins (dissolving the Nuclear Envelope, Scenario 26) and activates "
            "**Condensin I/II** rings to compact sister chromatids (held together along their arms and centromeres by **Cohesin** rings, "
            "Scenario 28). Two duplicated **Centrosomes** (9×3 centriole barrels in pericentriolar material, Scenario 08) nucleate astral, "
            "interpolab (slid apart by tetrameric **Kinesin-5 / Eg5**), and kinetochore microtubules (k-fibers). Assembled specifically on "
            "centromeric **CENP-A** nucleosomes is the >100-protein **Kinetochore**: the Inner Kinetochore (CCAN) anchors the 57 nm rod-like "
            "Outer Kinetochore **KMN Network** (Knl1, Mis12, and the **Ndc80/Hec1** calponin-homology tetramer) which grips peeling microtubule "
            "plus-ends (assisted by the human **Ska complex** or yeast Dam1 ring) and couples GTP-tubulin depolymerization energy directly "
            "into chromosome-pulling force! Until every single kinetochore achieves amphitelic **bi-orientation** under tension (sensed by "
            "Aurora B kinase), unattached kinetochores generate the **Mitotic Checkpoint Complex (MCC: Mad2–Cdc20–BubR1–Bub3)** to inhibit "
            "the E3 ubiquitin ligase **APC/C**. Once the last kinetochore attaches, APC/C–Cdc20 polyubiquitinates **Securin** and **Cyclin B** "
            "(for 26S Proteasome destruction, Scenario 34), unleashing the protease **Separase** to cleave the RAD21 kleisin subunit of "
            "Cohesin rings and trigger synchronous **Anaphase A/B** chromosome segregation! Finally, in Telophase/Cytokinesis, an equatorial "
            "**Actomyosin II Contractile Ring** (activated by RhoA) pinches the cell into an intercellular midbody bridge, which is constricted "
            "from the inside to complete membrane fission by **ESCRT-III (CHMP4B)** helical filaments remodeled by the AAA+ ATPase **VPS4**."
        ),
        "behavior": (
            "Visualizes the grand choreography of eukaryotic Mitosis and Cytokinesis: bipolar Centrosome spindle poles, CENP-A centromeric "
            "chromatin, the Ndc80/KMN Kinetochore gripping depolymerizing k-fiber microtubules, Mad2 Spindle Assembly Checkpoint signaling, "
            "APC/C–Separase cleavage of Cohesin rings at the Metaphase-to-Anaphase transition, and the Actomyosin Contractile Ring + "
            "ESCRT-III/VPS4 spiral severing the intercellular bridge."
        ),
        "upstream": "S-Phase Replisome DNA duplication & Cohesin sister chromatid cohesion (Scenarios 28–29) + Centrosome duplication & Microtubule dynamics (Scenario 08) + Actomyosin II cortex (Scenario 09).",
        "inputs": [
            "Replicated, Cohesin-tethered Sister Chromatids with centromeric CENP-A nucleosomes",
            "GTP (for dynamic k-fiber microtubule plus-end catastrophe/rescue) + ATP (for Kinesin-5/Dynein spindle motors, CDK1/Aurora B kinases, Myosin II ring, and VPS4 ESCRT remodeling)",
            "Ubiquitin (for APC/C–Cdc20 polyubiquitination of Securin and Cyclin B → 26S Proteasome Scenario 34)",
        ],
        "outputs": [
            "Two genetically identical diploid (2n) daughter nuclei with reassembled Nuclear Envelopes",
            "Cleaved RAD21 Cohesin fragments + Proteolyzed Securin & Cyclin B",
            "Two physically abscised daughter cells following actomyosin furrowing and ESCRT-III midbody fission",
        ],
        "downstream": "Completes the eukaryotic cell cycle, resetting both daughter cells into G1 Interphase (Scenario 01 & Scenario 26).",
        "energy_currency": "Microtubule GTP Cap Strain Energy (~30–50 pN pulling force per k-fiber via Ndc80 coupler) + Kinesin/Dynein/Myosin II/VPS4 ATPase + CDK1/APC-C Ubiquitin-Proteasome Switch",
        "turnover": "Human mitosis completes in ~45–60 minutes; Anaphase chromosome poleward movement proceeds at ~1–2 µm/min",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Mit_SpindlePoles", "Bipolar Centrosome Spindle Poles, k-Fiber Microtubules & Kinesin-5 (Eg5)", "Bipolar Mitotic Spindle", "#00B4D8", "Spindle Microtubule Cerulean", "(-4.8, 0.0, 0.0)"),
            ("Piece_Mit_ChromatidsCENPA", "Condensed Sister Chromatids, Centromeric CENP-A Nucleosome & Cohesin Ring", "5TCS CENP-A Nucleosome & Chromatid", "#0077B6", "Sister Chromatid Blue", "(+1.2, 0.0, 0.0)"),
            ("Piece_Mit_KinetochoreNdc80", "Inner CCAN & Outer Kinetochore KMN Network (57 nm Ndc80/Hec1 Rod & Ska)", "5TCS / 2VE7 Ndc80 Kinetochore", "#FFB703", "Ndc80 Kinetochore Gold", "(-1.5, +1.5, +1.8)"),
            ("Piece_Mit_SAC_APCC_Separase", "Mad2 Spindle Checkpoint (MCC), APC/C–Cdc20 E3 Ligase & Separase Protease", "5LCW APC/C–MCC Complex", "#E63946", "SAC & Separase Crimson", "(+1.5, +3.8, +1.5)"),
            ("Piece_Mit_ActomyosinRing", "Equatorial RhoA-Activated Actomyosin II Cytokinetic Contractile Ring", "Actomyosin Cleavage Furrow Ring", "#7209B7", "Contractile Ring Purple", "(+4.5, +2.0, -1.0)"),
            ("Piece_Mit_ESCRTIII_VPS4", "Midbody ESCRT-III (CHMP4B) Constriction Spiral & VPS4 AAA+ Severing Ring", "6VME ESCRT-III–VPS4 Complex", "#06D6A0", "ESCRT-III Abscission Jade", "(+4.5, -2.5, +1.2)"),
        ],
        "hud_controls": [
            ("mitotic_phase_selector", "Mitotic & Cytokinetic Stage Progression", "Prometaphase (SAC Active) -> Metaphase Bi-Orientation -> Anaphase (Separase Cleaves Cohesin) -> Telophase/ESCRT Abscission"),
            ("spindle_checkpoint_nocodazole", "Spindle Assembly Checkpoint (Aurora B Tension & Mad2 MCC Sensor)", "Amphitelic Bi-Orientation (APC/C Active -> Anaphase) vs. Unattached Kinetochore (Mad2 Blocks APC/C)"),
            ("motor_abscission_speed", "K-Fiber Depolymerization Pulling & ESCRT-III/VPS4 Abscission Rate", "0.0x to 2.5x"),
        ],
        "stages": [
            ("Stage 1 — Prophase Condensation, Nuclear Envelope Breakdown & Spindle Assembly", "CDK1–Cyclin B phosphorylates Nuclear Lamins to dissolve the nuclear envelope, Condensin compacts chromosomes, and two Centrosomes push apart via Kinesin-5 (Eg5) to form a bipolar microtubule spindle."),
            ("Stage 2 — Kinetochore Capture (CENP-A → CCAN → Ndc80) & Aurora B Tension Sensing", "Built on centromeric CENP-A nucleosomes, the 57 nm Ndc80/Hec1 rod of the Outer Kinetochore captures k-fiber microtubule plus-ends; Aurora B kinase detaches syntelic errors until opposite poles pull sister kinetochores under tension."),
            ("Stage 3 — Spindle Assembly Checkpoint (SAC) Satisfaction & APC/C Activation", "While even one kinetochore is unattached, it catalyzes the Mad2–Cdc20 Mitotic Checkpoint Complex (MCC) to brake APC/C; once the final chromosome aligns at the Metaphase Plate, MCC disassembles and APC/C–Cdc20 fires."),
            ("Stage 4 — Securin Destruction, Separase Cohesin Cleavage & Anaphase A/B", "APC/C polyubiquitinates Securin and Cyclin B for 26S Proteasome destruction, freeing Separase to cleave the RAD21 subunit of Cohesin rings; peeling k-fiber protofilaments drive Ndc80-coupled Anaphase chromosome segregation to the poles."),
            ("Stage 5 — Actomyosin Cleavage Furrow & ESCRT-III / VPS4 Midbody Abscission", "In Telophase, nuclear envelopes reassemble around the two chromosome sets while an equatorial Actomyosin II ring pinches the plasma membrane into a 1 µm midbody bridge, where spiral ESCRT-III filaments and VPS4 ATPase execute final abscission."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Kinetochore & Centromere", "https://pdb101.rcsb.org/motm/220"),
            ("RCSB PDB Structure 5TCS — Human Centromeric CENP-A Nucleosome Complex", "https://www.rcsb.org/structure/5TCS"),
            ("RCSB PDB Structure 6VME — Cryo-EM Structure of ESCRT-III Helical Filaments with VPS4", "https://www.rcsb.org/structure/6VME"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Mitosis & Cytokinesis", "https://www.ncbi.nlm.nih.gov/books/NBK26934/"),
        ],
    },
    {
        "num": "36",
        "id": "eukaryotic_monomers_dna_rna_rings",
        "folder": "36_eukaryotic_monomers_dna_rna_rings",
        "title": "The Atomic & Monomeric Foundation: B-DNA vs. A-RNA Helices, Purine/Pyrimidine Rings, 5-MeC, m⁷G Cap, ATP & Cholesterol",
        "tier": "Tier 8 — Atomic Chemistry, Epigenetic Bases, Nucleotide Rings & Membrane Lipids ($0.1\text{--}2\,\text{nm}$)",
        "scale": "0.15–2.5 nm All-Atom Covalent, Hydrogen-Bond & π-Stacking Chemical Geometry",
        "category": "Atomic Building Blocks, Nucleic Acid Sugar-Base Rings & Epigenetic/Bioenergetic Co-Factors",
        "pdb1": "1BNA",
        "pdb1_label": "Drew–Dickerson Dodecamer Canonical Right-Handed B-DNA Duplex (1BNA)",
        "pdb2": "1EHZ",
        "pdb2_label": "1.93 Å Atomic Structure of Eukaryotic Yeast tRNAᴾʰᵉ Cloverleaf (1EHZ)",
        "overview": (
            "At the base of the 36-element eukaryotic hierarchy lies the atomic chemistry ($0.1\text{--}2\,\text{nm}$) that governs every "
            "macromolecular machine from Scenarios 01 through 35. Here we inspect the covalent bonds, furanose sugar ring puckers, "
            "heterocyclic aromatic rings, and non-covalent hydrogen-bonding/π-π stacking geometries of the cell's core monomers: "
            "(1) **Pentose Sugar Rings (2'-Deoxyribose vs. Ribose)**: The absence of a single oxygen atom at C2' allows DNA's deoxyribose "
            "ring to adopt the **C2'-endo** envelope pucker, producing the wide 22 Å major groove and 10.5 bp/turn geometry of canonical "
            "**B-DNA** (`1BNA`, Scenarios 28–30), whereas RNA's **2'-OH** group sterically forces a **C3'-endo** pucker (producing the "
            "compact 11 bp/turn **A-RNA** helix of tRNAs `1EHZ`, rRNAs, and miRNAs, Scenarios 31–33) and acts as the reactive nucleophile "
            "in Spliceosome **2'-5' RNA Lariat Ring** formation! (2) **Heterocyclic Nitrogenous Base Rings & Epigenetic 5-Methylcytosine**: "
            "Bicyclic **Purine Rings** (Adenine, Guanine) pair via Watson–Crick hydrogen bonds with monocyclic **Pyrimidine Rings** "
            "(Thymine/Uracil: 2 H-bonds; Cytosine: 3 H-bonds), while DNA Methyltransferases (DNMT1/3A/3B) add a methyl group to C5 of the "
            "cytosine ring at CpG islands to form **5-Methylcytosine (5mC)**, the primary eukaryotic epigenetic DNA silencing mark. "
            "(3) **The Eukaryotic 5'-m⁷GpppN Cap & ATP/GTP Triphosphates**: The positively charged **7-Methylguanosine (m⁷G)** purine ring "
            "linked via a reverse **5'-5' triphosphate bridge** protects every eukaryotic mRNA (Scenarios 30–32) and stacks between two "
            "tryptophan indole rings in eIF4E, while **Mg²⁺-ATP** and **Mg²⁺-GTP** supply universal phosphoanhydride bond energy. "
            "(4) **Peptide Bonds & Steroid Rings**: Planar resonance-stabilized `C–N` peptide bonds (`ω = 180°`) with Ramachandran `(φ, ψ)` "
            "rotations fold proteins (Scenario 34), while the rigid **4-Ring Steroid Nucleus of Cholesterol** orders the eukaryotic plasma "
            "membrane (Scenario 02)."
        ),
        "behavior": (
            "Provides an interactive all-atom chemical workbench comparing the six foundational ring and bond classes of the eukaryotic "
            "cell: (A) B-DNA (`1BNA`, C2'-endo 2'-deoxyribose) vs. A-RNA / tRNA (`1EHZ`, C3'-endo ribose with reactive 2'-OH); (B) Purine "
            "(9-membered bicyclic) & Pyrimidine (6-membered monocyclic) Watson–Crick base pairs plus epigenetic **5-Methylcytosine (5mC)**; "
            "(C) The eukaryotic **5'-m⁷GpppN Cap** (reverse 5'-5' triphosphate bridge); (D) **Mg²⁺–ATP** phosphoanhydride chemistry; "
            "(E) Planar **Peptide Bond** & α-helix/β-sheet H-bonds; and (F) the planar **4-Ring Steroid Core of Cholesterol**."
        ),
        "upstream": "De novo & salvage nucleotide synthesis (Cytosol + Mitochondria Scenarios 19–21), ER Cholesterol/Mevalonate synthesis (Scenario 14), and DNMT/Capping enzymatic modifications (Scenarios 28, 30).",
        "inputs": [
            "Ribose-5-phosphate (from Pentose Phosphate Pathway), Amino Acids (Gln, Asp, Gly), CO₂, and One-Carbon Folate/SAM donors",
            "Inorganic Phosphate (Pᵢ) + Mitochondrial Δp (Scenario 21) driving ADP → ATP and GDP → GTP regeneration",
            "Acetyl-CoA driving the Mevalonate → Squalene → 4-Ring Cholesterol pathway in the Smooth ER (Scenario 14)",
        ],
        "outputs": [
            "Canonical dNTPs (dATP, dTTP, dGTP, dCTP) and rNTPs (ATP, UTP, CTP, GTP) for Scenarios 29–31",
            "Epigenetically methylated CpG DNA (5-Methylcytosine) and 5'-m⁷GpppN-capped mRNAs",
            "All 20 L-α-Amino Acids (polymerized in Scenario 32) and Cholesterol/Phospholipids (forming all bilayers in Scenarios 02–27)",
        ],
        "downstream": "Serves as the universal atomic substrate pool powering every single macromolecular machine across all 36 scenarios of the Eukaryote Explorer.",
        "energy_currency": "ATP / GTP γ-β Phosphoanhydride Bond Hydrolysis (ΔG°' = -30.5 kJ/mol; cellular ΔG ≈ -50 to -54 kJ/mol) + S-Adenosylmethionine (SAM) Methyl Transfer",
        "turnover": "A single human cell turns over ~10⁹ ATP molecules per second and maintains ~6.4 × 10⁹ base pairs of hydrated B-DNA",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Atom_BDNA_ARNA", "B-DNA Duplex (1BNA, C2'-endo Deoxyribose) vs. A-RNA / tRNA (1EHZ, C3'-endo Ribose 2'-OH)", "1BNA B-DNA & 1EHZ tRNA", "#0077B6", "Nucleic Acid Helix Blue", "(-4.2, +2.0, 0.0)"),
            ("Piece_Atom_PurinePyrimidine_5mC", "Bicyclic Purine (A/G) & Monocyclic Pyrimidine (T/U/C) Rings + Epigenetic 5-Methylcytosine (5mC)", "1BNA Base Pairs + 5mC", "#00B4D8", "Aromatic Base Ring Cerulean", "(0.0, +2.8, +1.5)"),
            ("Piece_Atom_m7G_CapBridge", "Eukaryotic 5'-m⁷GpppN Cap (N7-Methylguanosine Ring & 5'-5' Triphosphate Bridge)", "1IPC eIF4E–m⁷GpppG Cap Complex", "#7209B7", "m⁷G Cap Ring Purple", "(+4.2, +2.0, +1.2)"),
            ("Piece_Atom_MgATP_Triphos", "Mg²⁺-Coordinated Adenosine Triphosphate (Adenine Ring, Ribose & α/β/γ Phosphates)", "Mg²⁺–ATP All-Atom Conformer", "#FFB703", "ATP Bioenergetic Gold", "(-4.0, -2.5, +1.5)"),
            ("Piece_Atom_PeptideRamachandran", "Planar Trans Peptide Bond (ω = 180°), (φ, ψ) Dihedrals & Disulfide/Histone Lysine Side Chains", "Polypeptide Backbone & Side Chains", "#E63946", "Peptide Bond Crimson", "(0.0, -3.2, +1.5)"),
            ("Piece_Atom_CholesterolSteroid", "Planar Tetracyclic Steroid Ring System of Cholesterol (A/B/C/D Rings + 3β-OH)", "Cholesterol + POPC Phospholipid", "#06D6A0", "Steroid Ring Jade", "(+4.2, -2.5, 0.0)"),
        ],
        "hud_controls": [
            ("monomer_inspection_class", "Atomic Monomer & Ring Class Selector", "B-DNA vs. A-RNA Sugar Pucker | Purine/Pyrimidine & Epigenetic 5mC | 5'-m⁷GpppN Cap | Mg²⁺-ATP | Peptide Bond | Cholesterol 4-Ring Steroid"),
            ("sugar_pucker_2oh_toggle", "Pentose Sugar Furanose Pucker & 2'-OH Reactivity", "2'-Deoxyribose C2'-endo (Stable B-DNA) vs. Ribose C3'-endo with 2'-OH (A-RNA & 2'-5' Lariat Nucleophile)"),
            ("epigenetic_5mc_methylation", "CpG Island Cytosine C5 Methylation (DNMT1/3 vs. TET Oxidation)", "Unmethylated Cytosine Ring (Active Promoter) vs. 5-Methylcytosine (5mC, MeCP2 Silenced)"),
        ],
        "stages": [
            ("Stage 1 — Furanose Sugar Rings: 2'-Deoxyribose (C2'-endo B-DNA) vs. Ribose (C3'-endo A-RNA)", "Compare the 5-membered furanose sugar rings at atomic resolution: removing the 2'-oxygen gives DNA its C2'-endo pucker and B-form stability (`1BNA`), while RNA's 2'-OH forces a C3'-endo A-form helix (`1EHZ`) and enables 2'-5' lariat branching."),
            ("Stage 2 — Aromatic Base Rings (Purines vs. Pyrimidines) & Epigenetic 5-Methylcytosine (5mC)", "Inspect the planar 9-membered Purine rings (A, G) and 6-membered Pyrimidine rings (T, U, C) stacked at 3.4 Å separation, and watch DNMT transfer a methyl group from SAM onto C5 of Cytosine to create epigenetic 5-Methylcytosine (5mC)."),
            ("Stage 3 — The Eukaryotic 5'-m⁷GpppN Cap & Reverse 5'-5' Triphosphate Bridge", "Zoom into the signature chemical badge of eukaryotic mRNA: a positivamente charged N7-methylguanosine (m⁷G) ring connected backward via a 5'-to-5' triphosphate bridge, sandwiched by cation-π stacking between two tryptophans of eIF4E."),
            ("Stage 4 — Mg²⁺-ATP Phosphoanhydride Resonance & Universal Energy Coupling", "Examine how octahedral Mg²⁺ chelates the negatively charged β- and γ-oxygens of ATP, priming the terminal γ-phosphate for nucleophilic attack inside Kinases, Myosin/Kinesin/Dynein motors, and AAA+ rings."),
            ("Stage 5 — Planar Peptide Bonds (φ, ψ) & The Tetracyclic Steroid Ring of Cholesterol", "Trace partial C=N double-bond resonance keeping the peptide group planar while Cα (φ, ψ) rotations build α-helices and β-sheets, alongside the rigid 4-fused-ring (A/B/C/D) steroid core of Cholesterol that orders eukaryotic membranes."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: DNA & Watson-Crick Base Pairing", "https://pdb101.rcsb.org/motm/23"),
            ("RCSB PDB-101 — Molecule of the Month: Transfer RNA (tRNA)", "https://pdb101.rcsb.org/motm/15"),
            ("RCSB PDB Structure 1BNA — Structure of a B-DNA Dodecamer (Drew–Dickerson)", "https://www.rcsb.org/structure/1BNA"),
            ("RCSB PDB Structure 1EHZ — Atomic Resolution Structure of Yeast Phenylalanine tRNA", "https://www.rcsb.org/structure/1EHZ"),
        ],
    },
]
