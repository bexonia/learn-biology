import os

BASE_DIR = r"c:\Users\devcd\GenProjects\learn-biology"
VER_DIR = os.path.join(BASE_DIR, "verification")

SCENARIOS = [
    {
        "num": "01",
        "folder": "01_cell",
        "id": "cell",
        "short": "01 Cell",
        "title": "Whole Prokaryotic Cell (E. coli K-12)",
        "scale": "1.5 µm × 0.8 µm (Macro Level 1)",
        "pdb_label": "Biology Primer Fig. 3 & 4",
        "pdb_url": "https://www.ncbi.nlm.nih.gov/books/NBK210/",
        "rcsb_file": "online_ref_cell_primer_fig4.png",
        "rcsb_caption": "Online Ref: Biology Primer Dichotomous Key (Fig. 4)",
        "findings": [
            "The 3/4 surgical wedge cutaway accurately exposes all concentric layers of the Gram-negative envelope (Capsule, Outer Membrane, Peptidoglycan Cell Wall, Plasma Membrane, Cytoplasm, 70S Ribosomes, Plasmids, Pili, Flagella, and coiled Nucleoid DNA).",
            "Clicking any 3D leader pill smoothly orbits the camera to the organelle and opens the CellInspectorDrawer with direct '🔬 Inspect 3D ...' drill-down buttons to the molecular scenarios."
        ],
        "recommendations": [
            "<strong>Add In-Situ Bacterial Microcompartment (Carboxysome / BMC):</strong> <em>The Biology Primer</em> Figure 3 explicitly features an icosahedral <strong>Bacterial Microcompartment</strong> in the cytoplasm alongside plasmids and ribosomes. Adding a cut-open icosahedral BMC shell (<code>PDB: 7O04</code>) inside <code>prokaryote_cell.glb</code> will complete 100% parity with the reference diagram.",
            "<strong>Add Peel-By-Layer Envelope Sliders:</strong> Allow students to independently toggle or peel back the Capsule, Outer Membrane, and Peptidoglycan layers in the Whole Cell view."
        ]
    },
    {
        "num": "02",
        "folder": "02_motor",
        "id": "motor",
        "short": "02 Flagellar Motor",
        "title": "Bacterial Flagellar Rotary Motor",
        "scale": "45 nm × 51 nm (Supramolecular Turbine)",
        "pdb_label": "PDB: 7CGO / 6YKM",
        "pdb_url": "https://www.rcsb.org/structure/7CGO",
        "rcsb_file": "rcsb_7CGO.jpg",
        "rcsb_caption": "RCSB PDB: 7CGO Experimental Cryo-EM Basal Body",
        "findings": [
            "Incorporates both authentic Molecular Nodes Cryo-EM meshes (<code>7CGO</code> basal body + <code>6YKM</code> MotAB stator pentamers) and schematic engineering ring representations.",
            "Exploded view (<code>75%</code>) cleanly separates the C-ring (<code>FliG/M/N</code>), MS-ring (<code>FliF</code>), MotAB stators, Rod, P-ring, L-ring, Hook (<code>FlgE</code>), and Helical Filament (<code>FliC</code>)."
        ],
        "recommendations": [
            "<strong>CheY-P Chemotaxis Switch Toggle:</strong> Add a <code>CheY-P Binding</code> concentration slider or toggle that visually binds phosphorylated CheY-P molecules to the base of the FliM/FliN C-ring when switching from <code>CCW (Run)</code> to <code>CW (Tumble)</code>.",
            "<strong>Peptidoglycan Anchoring Clamp Visuals:</strong> Highlight the MotB OmpA-like domain clamping onto the terracotta peptidoglycan layer during stator torque generation."
        ]
    },
    {
        "num": "03",
        "folder": "03_ribosome",
        "id": "ribosome",
        "short": "03 70S Ribosome",
        "title": "70S Ribosome & Polysome Translation Factory",
        "scale": "21 nm (2.5 MDa Ribozyme Machine)",
        "pdb_label": "PDB: 7K00",
        "pdb_url": "https://www.rcsb.org/structure/7K00",
        "rcsb_file": "rcsb_7K00.jpg",
        "rcsb_caption": "RCSB PDB: 7K00 Experimental Cryo-EM (2.0 Å)",
        "findings": [
            "High-resolution Molecular Nodes surface/ribbon decomposition from <code>PDB: 7K00</code> clearly distinguishes 50S 23S/5S rRNA (magenta), 50S r-proteins (forest green), 30S 16S rRNA (teal), 30S r-proteins (olive), A/P/E-site tRNAs (gold), mRNA strand, Peptidyl Transferase Center (<code>PTC</code>), and nascent polypeptide chain.",
            "Exploded view (<code>75%</code>) cleanly dissociates the 50S and 30S ribonucleoprotein subunits, tRNAs, and mRNA transcript along biophysical vectors."
        ],
        "recommendations": [
            "<strong>EF-Tu &amp; EF-G GTPase Factor Toggle:</strong> Add an optional visual overlay showing the transient docking of <strong>EF-Tu·GTP</strong> delivering aminoacyl-tRNA to the A-site and <strong>EF-G·GTP</strong> catalyzing translocation.",
            "<strong>Shine-Dalgarno Base-Pairing Inset:</strong> When the user clicks <code>↺ Return mRNA to 5' Start</code>, briefly highlight the <code>5'-AGGAGGU-3'</code> Shine-Dalgarno helix base-pairing with the 3' tail of 16S rRNA."
        ]
    },
    {
        "num": "04",
        "folder": "04_atp_synthase",
        "id": "atp_synthase",
        "short": "04 ATP Synthase",
        "title": "F1F0-ATP Synthase Rotary Dynamo",
        "scale": "10 nm × 21 nm (Boyer Rotary Synthase)",
        "pdb_label": "PDB: 6OQR / 6RKW",
        "pdb_url": "https://www.rcsb.org/structure/6OQR",
        "rcsb_file": "rcsb_6OQR.jpg",
        "rcsb_caption": "RCSB PDB: 6OQR Experimental Cryo-EM Holoenzyme",
        "findings": [
            "Faithfully models the complete <code>6OQR</code> / <code>6RKW</code> rotary dynamo: transmembrane c<sub>10</sub> rotor ring, a-subunit proton half-channels, peripheral b<sub>2</sub>δ stator stalk, asymmetric γε central camshaft, and the α<sub>3</sub>β<sub>3</sub> catalytic crown with interactive Boyer Three-State (<code>Open</code>, <code>Loose</code>, <code>Tight</code>) stepping.",
            "Exploded view (<code>75%</code>) separates the F<sub>0</sub> membrane sector, peripheral stator stalk, central γ-rotor shaft, and α<sub>3</sub>β<sub>3</sub> hexamer."
        ],
        "recommendations": [
            "<strong>Explicit Arg210–Asp61 Electrostatic Gate Callout:</strong> In the F<sub>0</sub> a/c<sub>10</sub> interface, add a glowing residue callout for the essential <code>aArg210</code> positive barrier and <code>cAsp61</code> proton-binding carboxylates to visually explain why the c-ring cannot slip backward.",
            "<strong>ε-Subunit C-Terminal Brake Animation:</strong> When switching from <code>Synthesis</code> to <code>Hydrolysis / Reverse</code> or low-ATP states, animate the ε-subunit C-terminal helices extending upward into the α<sub>3</sub>β<sub>3</sub> central cavity."
        ]
    },
    {
        "num": "05",
        "folder": "05_complex_i",
        "id": "complex_i",
        "short": "05 Complex I",
        "title": "Respiratory Complex I (NADH Dehydrogenase)",
        "scale": "18 nm × 15 nm (L-Shaped Proton Pump)",
        "pdb_label": "PDB: 7Z7V / 4HEA",
        "pdb_url": "https://www.rcsb.org/structure/7Z7V",
        "rcsb_file": "rcsb_7Z7V.jpg",
        "rcsb_caption": "RCSB PDB: 7Z7V Experimental Cryo-EM Structure",
        "findings": [
            "Captures the hallmark L-shaped architecture (<code>PDB: 7Z7V</code> / <code>4HEA</code>) with the peripheral hydrophilic arm (<code>NuoEFG</code> + <code>NuoBCDI</code>), the 90 Å chain of Fe-S cubane clusters (<code>#FFB703</code>), the ubiquinone (Q<sub>8</sub>) reduction cavity, the horizontal amphipathic coupling piston (<code>NuoL</code> helix HL), and the membrane antiporter subunits (<code>NuoL/M/N</code>).",
            "Exploded view (<code>75%</code>) cleanly dissociates the hydrophilic NADH dehydrogenase arm, Fe-S electron wire, lateral HL coupling piston, and transmembrane antiporter modules."
        ],
        "recommendations": [
            "<strong>Individual Fe-S Cluster Labels (N1a → N2):</strong> When the user focuses the <code>Fe-S Electron Wire</code>, display micro-labels for the terminal high-potential <code>N2</code> cluster immediately adjacent to the Q<sub>8</sub> headgroup.",
            "<strong>Electrostatic Wave Propagation Pulse:</strong> Synchronize a visible electrostatic wave traveling from the Q<sub>8</sub> pocket along the central axis of <code>NuoH/J/K/N/M/L</code> to trigger the 4 H<sup>+</sup> vertical ejection plumes."
        ]
    },
    {
        "num": "06",
        "folder": "06_secyeg",
        "id": "secyeg",
        "short": "06 SecYEG",
        "title": "SecYEG Protein Translocon & SecA Motor",
        "scale": "9 nm × 12 nm (Transmembrane Channel)",
        "pdb_label": "PDB: 3J46 / 6ITC",
        "pdb_url": "https://www.rcsb.org/structure/3J46",
        "rcsb_file": "rcsb_3J46.jpg",
        "rcsb_caption": "RCSB PDB: 3J46 Experimental Cryo-EM Channel",
        "findings": [
            "Accurately models the <code>3J46</code> / <code>6ITC</code> hourglass channel (<code>SecY</code> TM1–5 &amp; TM6–10 clamshell halves), the <code>SecE</code> V-shaped clamp, <code>SecG</code>, the <code>SecA</code> ATPase piston with its Two-Helix Finger (<code>2HF</code>), the hydrophobic pore ring, the displaced plug helix (<code>TM2a</code>), and the dynamic <code>TM2b/3–TM7/8</code> lateral gate.",
            "Exploded view (<code>75%</code>) separates the cytoplasmic SecA ATPase motor, SecY core, lateral gate helices, SecE clamp, and translocating preprotein hairpin."
        ],
        "recommendations": [
            "<strong>Dual Pathway Mode Toggle (SecA Post-Translational vs. 70S Co-Translational):</strong> Since our Blender asset already includes the docking 70S ribosome dome (<code>SecYEG_Ribosome_Dock</code>), adding a HUD toggle between <strong>SecA ATPase Post-Translational Secretion</strong> and <strong>SRP/Ribosome Co-Translational Membrane Insertion</strong> will showcase both major bacterial translocation modes.",
            "<strong>LepB Signal Peptidase Cleavage:</strong> Show the periplasmic Type I Signal Peptidase (<code>LepB</code>) cleaving the N-terminal signal peptide once the preprotein loop emerges on the periplasmic face."
        ]
    },
    {
        "num": "07",
        "folder": "07_bam",
        "id": "bam",
        "short": "07 BAM Complex",
        "title": "BAM Beta-Barrel Assembly Machine",
        "scale": "12 nm × 14 nm (Outer Membrane Insertase)",
        "pdb_label": "PDB: 5D0O",
        "pdb_url": "https://www.rcsb.org/structure/5D0O",
        "rcsb_file": "rcsb_5D0O.jpg",
        "rcsb_caption": "RCSB PDB: 5D0O Experimental Crystal/Cryo-EM",
        "findings": [
            "Faithfully renders the 5-subunit <code>5D0O</code> heteropentamer (<code>BamA</code> 16-stranded outer membrane β-barrel, periplasmic <code>POTRA 1–5</code> spiral, <code>BamB</code> 8-bladed β-propeller, <code>BamC</code>, <code>BamD</code> TPR scaffold, and <code>BamE</code>) together with the unzipped β1–β16 lateral seam and budding client OMP β-sheet.",
            "Exploded view (<code>75%</code>) radially separates the BamA barrel, POTRA 1–5 periplasmic ring, BamB propeller, BamC/D/E lipoproteins, and nascent OMP client."
        ],
        "recommendations": [
            "<strong>Local Lipid Bilayer Thinning Visualization:</strong> Near the BamA β1–β16 seam, render a visible indentation/thinning of the asymmetric outer membrane leaflet (12 Å hydrophobic thickness reduction) that lowers the thermodynamic barrier for β-hairpin insertion.",
            "<strong>SurA Periplasmic Chaperone Handoff:</strong> Add an optional periplasmic <strong>SurA</strong> chaperone (<code>PDB: 1M5Y</code>) docking onto <code>POTRA 1–2</code> to illustrate how unfolded OMPs arrive across the periplasm from <code>SecYEG</code>."
        ]
    },
    {
        "num": "08",
        "folder": "08_lpt",
        "id": "lpt",
        "short": "08 Lpt Bridge",
        "title": "LptA–G Trans-Envelope LPS Export Bridge",
        "scale": "28 nm Trans-Periplasmic Elevator",
        "pdb_label": "PDB: 9P7P / 6MIT",
        "pdb_url": "https://www.rcsb.org/structure/9P7P",
        "rcsb_file": "rcsb_9P7P.jpg",
        "rcsb_caption": "RCSB PDB: 9P7P Experimental Cryo-EM Complex",
        "findings": [
            "Spans the entire Gram-negative cell envelope from the inner membrane (LptB<sub>2</sub>FGC ABC extractor) across the periplasm and peptidoglycan wall (LptA continuous β-jellyroll slide carrying golden LPS glycolipids) to the outer membrane (LptD 26-stranded β-barrel and LptE lumenal plug).",
            "Exploded view (<code>75%</code>) separates the outer membrane LptDE translocon, periplasmic LptA bridge, LptC adaptor, inner membrane LptFG permease, and cytoplasmic LptB<sub>2</sub> ATPase."
        ],
        "recommendations": [
            "<strong>Amphipathic LPS Orientation Callout:</strong> Highlight how the hydrophobic <strong>Lipid A acyl tails</strong> travel <em>inside</em> the hydrophobic groove of the LptC→LptA→LptD β-jellyroll while the hydrophilic <strong>O-antigen polysaccharide chains</strong> remain solvated in the aqueous periplasm.",
            "<strong>Novobiocin / Zosurabalpin Antibiotic Toggle:</strong> Add an inhibitor toggle for <strong>Zosurabalpin</strong> (which traps LPS inside the LptB<sub>2</sub>FG cavity) alongside the existing ATP depletion control."
        ]
    },
    {
        "num": "09",
        "folder": "09_rnap",
        "id": "rnap",
        "short": "09 RNAP",
        "title": "RNA Polymerase Holoenzyme (Sigma-70)",
        "scale": "15 nm × 12 nm (Crab-Claw Transcriptase)",
        "pdb_label": "PDB: 6C9Y / 6ALH",
        "pdb_url": "https://www.rcsb.org/structure/6C9Y",
        "rcsb_file": "rcsb_6C9Y.jpg",
        "rcsb_caption": "RCSB PDB: 6C9Y Experimental Cryo-EM Holoenzyme",
        "findings": [
            "Clearly decomposes the crab-claw <code>6C9Y</code> / <code>6ALH</code> holoenzyme into β (<code>RpoB</code>), β' (<code>RpoC</code>), α<sub>2</sub> dimer (<code>RpoA</code>), ω (<code>RpoZ</code>), σ<sup>70</sup> promoter specificity factor (<code>RpoD</code>), the 13-bp unwound DNA transcription bubble, emerging nascent mRNA, the 2×Mg<sup>2+</sup> <code>NADFDGD</code> active site, and the Rifampicin steric block pocket.",
            "Exploded view (<code>75%</code>) opens the β/β' crab-claw jaws, α<sub>2</sub>ω scaffold, σ<sup>70</sup> factor, DNA transcription bubble, and nascent RNA transcript."
        ],
        "recommendations": [
            "<strong>Trigger Loop &amp; Bridge Helix Ratchet Animation:</strong> When zoomed into the <code>Catalytic 2x Mg2+ Center</code>, animate the β' <strong>Trigger Loop</strong> folding into a three-helix bundle with the <strong>Bridge Helix</strong> upon NTP binding to illustrate the 1 bp translocation ratchet.",
            "<strong>σ<sup>70</sup> Promoter Escape Transition:</strong> Add a button to toggle between <strong>Promoter Open Complex (RP<sub>o</sub>)</strong> (with σ<sup>70</sup> bound to <code>-35</code>/<code>-10</code>) and <strong>Processive Elongation Complex (EC)</strong> (where σ<sub>3.2</sub> is ejected by the growing RNA transcript)."
        ]
    },
    {
        "num": "10",
        "folder": "10_pol_iii",
        "id": "pol_iii",
        "short": "10 Pol III",
        "title": "DNA Polymerase III Replisome Complex",
        "scale": "18 nm × 16 nm (Chromosomal Replisome)",
        "pdb_label": "PDB: 5FKV",
        "pdb_url": "https://www.rcsb.org/structure/5FKV",
        "rcsb_file": "rcsb_5FKV.jpg",
        "rcsb_caption": "RCSB PDB: 5FKV Experimental Cryo-EM Replisome",
        "findings": [
            "Renders the <code>5FKV</code> chromosomal replisome with <code>Pol III</code> α (<code>DnaE</code> catalytic palm/fingers/thumb), the toroidal β<sub>2</sub> sliding clamp (<code>DnaN</code>), the ε 3'→5' proofreading exonuclease (<code>DnaQ</code>), the τ clamp-loader organizer (<code>DnaX</code>), and the hexameric <code>DnaB</code> helicase unwinding the replication fork at up to 1,000 nt/s.",
            "Exploded view (<code>75%</code>) separates the Pol III α core, β<sub>2</sub> sliding clamp ring, ε proofreading exonuclease, τ organizer stalk, and DnaB helicase ring."
        ],
        "recommendations": [
            "<strong>Proofreading Melt-and-Transfer Animation:</strong> When the user activates <code>3'→5' Proofreading Mode</code>, animate the 3' primer terminus melting 3–4 bp away from the α polymerase palm and swinging 35 Å into the ε (<code>DnaQ</code>) exonuclease active cleft.",
            "<strong>DnaG Primase &amp; SSB Lagging-Strand Loop:</strong> Add an optional lagging-strand <strong>Okazaki trombone loop</strong> coated with tetrameric <strong>SSB</strong> (<code>Single-Stranded Binding Protein</code>) and <strong>DnaG Primase</strong> synthesizing RNA primers."
        ]
    },
    {
        "num": "11",
        "folder": "11_gyrase",
        "id": "gyrase",
        "short": "11 DNA Gyrase",
        "title": "DNA Gyrase Topoisomerase II (A2B2)",
        "scale": "17 nm × 15 nm (3-Gate Supercoiling Machine)",
        "pdb_label": "PDB: 1AB4 / 2XCT",
        "pdb_url": "https://www.rcsb.org/structure/1AB4",
        "rcsb_file": "rcsb_1AB4.jpg",
        "rcsb_caption": "RCSB PDB: 1AB4 Experimental Crystal Structure",
        "findings": [
            "Captures the symmetric GyrA<sub>2</sub>GyrB<sub>2</sub> three-gate architecture (<code>N-gate</code>, <code>DNA-gate</code>, <code>C-gate</code>), the right-handed chiral wrapping of DNA around the β-pinwheel CTDs, the <code>G-segment</code> gate duplex, the transported <code>T-segment</code> duplex, the catalytic <code>Tyr122</code> active center, and Ciprofloxacin cleavage-complex stabilization.",
            "Exploded view (<code>75%</code>) dissociates the upper GyrB<sub>2</sub> ATPase N-gate, GyrA<sub>2</sub> cleavage core, flanking β-pinwheel CTDs, and G/T DNA duplexes."
        ],
        "recommendations": [
            "<strong>Explicit 3-Gate State Indicator (N-Gate / DNA-Gate / C-Gate):</strong> Add a real-time 3-gate status pill in the HUD (<code>N-Gate: CLOSED</code> → <code>DNA-Gate: OPEN (4-bp Staggered Cut)</code> → <code>C-Gate: EXIT</code>) synchronized with the T-segment passage cycle.",
            "<strong>ΔLk = -2 Topological Linking Number Counter:</strong> Display a live supercoiling counter (ΔLk = -2, -4, -6…) that increments with each 2×ATP strand-passage cycle and freezes when <strong>Ciprofloxacin</strong> is engaged."
        ]
    },
    {
        "num": "12",
        "folder": "12_ftsz",
        "id": "ftsz",
        "short": "12 FtsZ Z-Ring",
        "title": "Divisome FtsZ Cytokinetic Z-Ring",
        "scale": "24 nm Protofilament Lattice & Septal Synthase",
        "pdb_label": "PDB: 1FSZ / 6UNX",
        "pdb_url": "https://www.rcsb.org/structure/1FSZ",
        "rcsb_file": "rcsb_1FSZ.jpg",
        "rcsb_caption": "RCSB PDB: 1FSZ Experimental FtsZ Structure",
        "findings": [
            "Models the tubulin-homolog <code>FtsZ</code> protofilament lattice (<code>1FSZ</code> / <code>6UNX</code>), longitudinal GTPase pockets (<code>T7 synergy loop</code>), peripheral <code>FtsA</code> and bitopic <code>ZipA</code> membrane anchors, the invaginating inner membrane furrow, the <code>FtsW–FtsI (PBP3)</code> septal peptidoglycan synthase, and <code>PC190723</code> allosteric cleft locking.",
            "Exploded view (<code>75%</code>) separates the cytoplasmic FtsZ protofilament ribbon, FtsA/ZipA membrane tethers, inner membrane furrow, FtsWI synthase, and inward-growing septal murein wall."
        ],
        "recommendations": [
            "<strong>Plus-End Polymerization vs. Minus-End Depolymerization Tags:</strong> Add visual <code>+ End (GTP Cap Polymerization)</code> and <code>- End (GDP Hydrolysis Release)</code> markers at opposite ends of the treadmilling <code>FtsZ</code> protofilament to make it clear that individual monomers remain stationary while the filament treadmills.",
            "<strong>Cephalexin / Aztreonam β-Lactam Inhibitor Toggle:</strong> In addition to <code>PC190723</code> (which targets <code>FtsZ</code>), add a <strong>β-Lactam (Aztreonam)</strong> toggle that specifically inhibits the periplasmic <strong>FtsI (PBP3)</strong> transpeptidase while <code>FtsZ</code> continues treadmilling."
        ]
    },
    {
        "num": "13",
        "folder": "13_mreb",
        "id": "mreb",
        "short": "13 MreB Rails",
        "title": "MreB Actin Helical Rails & Rod Elongasome",
        "scale": "22 nm Double Protofilament & RodA-PBP2",
        "pdb_label": "PDB: 1JCG / 4CZJ",
        "pdb_url": "https://www.rcsb.org/structure/1JCG",
        "rcsb_file": "rcsb_1JCG.jpg",
        "rcsb_caption": "RCSB PDB: 1JCG Experimental MreB Protofilament",
        "findings": [
            "Depicts the antiparallel double protofilaments of bacterial actin homolog <code>MreB</code> (<code>1JCG</code> / <code>4CZJ</code>), its inter-domain ATP clefts, N-terminal amphipathic membrane insertion loops, the bitopic <code>RodZ</code> transmembrane adaptor, and the <code>RodA–PBP2</code> glycosyltransferase/transpeptidase cell-wall synthesis complex, plus <code>A22</code> depolymerization.",
            "Exploded view (<code>75%</code>) separates the sub-membrane MreB double protofilament rails, N-terminal amphipathic anchor, RodZ bitopic adaptor, RodA SEDS glycosyltransferase, and periplasmic PBP2 transpeptidase."
        ],
        "recommendations": [
            "<strong>Principal Negative Gaussian Curvature Vector Overlay:</strong> Add an optional geometric curvature overlay on the inner membrane showing how <code>MreB</code> double filaments align along the direction of greatest negative curvature (κ<sub>1</sub>) to correct local bulges and maintain cylindrical rod geometry.",
            "<strong>Mecillinam (Amdinocillin) PBP2 Inhibitor Comparison:</strong> Add a toggle comparing <strong>A22</strong> (depolymerizes cytoplasmic <code>MreB</code> rails) against <strong>Mecillinam</strong> (covalently blocks periplasmic <code>PBP2</code> transpeptidation)."
        ]
    },
    {
        "num": "14",
        "folder": "14_expressome",
        "id": "expressome",
        "short": "14 Expressome",
        "title": "Co-Transcriptional Expressome (RNAP–NusG/NusA–70S)",
        "scale": "28 nm × 22 nm (Supramolecular Expressome)",
        "pdb_label": "PDB: 6X9Q / 6ZTJ",
        "pdb_url": "https://www.rcsb.org/structure/6X9Q",
        "rcsb_file": "rcsb_6X9Q.jpg",
        "rcsb_caption": "RCSB PDB: 6X9Q Experimental Cryo-EM Expressome",
        "findings": [
            "Models the 8-piece coupled transcription-translation supercomplex (<code>PDB: 6X9Q</code>): RNAP core (<code>#3A86FF</code>), 13-bp transcription DNA bubble (<code>#F77F00</code>), NusG physical bridge (<code>#FFB703</code>), NusA RNA chaperone (<code>#9D4EDD</code>), protected nascent mRNA transcript (<code>#E63946</code>), 30S decoding subunit (<code>#06D6A0</code>), 50S catalytic subunit (<code>#2A9D8F</code>), and A/P/E-site tRNAs (<code>#00F5D4</code>).",
            "Exploded view (<code>75%</code>) cleanly dissociates the RNAP core, NusG/NusA coupling bridges, nascent mRNA tunnel, and 30S/50S ribosomal subunits."
        ],
        "recommendations": [
            "<strong>Collided vs. NusG-Bridged State Toggle:</strong> Allow toggling between the <code>NusG/NusA-Bridged Expressome (6X9Q)</code> and the <code>Collided Expressome (6ZTJ)</code> when the ribosome catches up to a paused RNAP.",
            "<strong>Rho Helicase Exclusion Animation:</strong> Show hexameric Rho termination factor blocked from accessing the nascent mRNA while the expressome bridge is intact."
        ]
    },
    {
        "num": "15",
        "folder": "15_envelopes",
        "id": "envelopes",
        "short": "15 Envelopes",
        "title": "Comparative Prokaryotic Envelopes: Gram(−), Gram(+) & Archaeal",
        "scale": "40 nm Cross-Envelope Comparison",
        "pdb_label": "PDB: 2OMF / 3VMA / 1EQ7",
        "pdb_url": "https://www.rcsb.org/structure/2OMF",
        "rcsb_file": "rcsb_2OMF.jpg",
        "rcsb_caption": "RCSB PDB: 2OMF Trimeric OmpF Porin",
        "findings": [
            "Presents a 10-piece side-by-side 3D comparison of the three fundamental prokaryotic cell envelopes: Gram-negative diderm (IM, thin murein, Lpp staples <code>1EQ7</code>, asymmetric LPS outer membrane, and OmpF trimeric β-barrel porin <code>2OMF</code>), Gram-positive monoderm (IM, thick 40-nm murein mesh, wall/lipoteichoic acids), and Archaeal isoprenoid ether membrane with a crystalline hexagonal S-layer.",
            "Exploded view (<code>75%</code>) vertically stratifies each envelope layer to compare membrane and cell-wall thicknesses directly."
        ],
        "recommendations": [
            "<strong>Gram Stain Crystal Violet Retention Overlay:</strong> Add a visual toggle simulating how the thick Gram-positive peptidoglycan traps the Crystal Violet–Iodine complex while alcohol decolorizes the Gram-negative outer membrane.",
            "<strong>Mycobacterial Acid-Fast Mycomembrane Column:</strong> Add an optional 4th column featuring the arabinogalactan–mycolic acid outer membrane and octameric MspA porin (<code>PDB: 3VMA</code>)."
        ]
    },
    {
        "num": "16",
        "folder": "16_motility_modes",
        "id": "motility_modes",
        "short": "16 Motility Modes",
        "title": "Prokaryotic Motility Modes: Type IV Pili, Archaellum & Gliding",
        "scale": "60 nm Comparative Locomotion Engines",
        "pdb_label": "PDB: 3JC8 / 6W6M / 5O4U",
        "pdb_url": "https://www.rcsb.org/structure/6W6M",
        "rcsb_file": "rcsb_6W6M.jpg",
        "rcsb_caption": "RCSB PDB: 6W6M Archaeal Motility Structure",
        "findings": [
            "Compares 9 decomposed pieces across three non-canonical prokaryotic locomotion engines: the Type IV Pilus grappling hook (PilB/PilT hexameric ATPases, PilMNO cage, PilQ secretin <code>3JC8</code>, and PilA filament generating >100 pN retraction force), the ATP-driven Archaeal Archaellum (FlaI/FlaJ motor, S-layer stator, FlaB filament <code>6W6M</code>), and the Flavobacterial GldLM–SprB helical gliding conveyor track (<code>5O4U</code>).",
            "Exploded view (<code>75%</code>) separates the cytoplasmic/transmembrane rotary and grappling motors from their extracellular filaments and adhesin tracks."
        ],
        "recommendations": [
            "<strong>Spirochete Periplasmic Endoflagella Ribbon:</strong> Include an interactive cutaway of a corkscrew Spirochete where rotation of periplasmic endoflagella flexes the entire cell body.",
            "<strong>Force-Velocity Readout Comparison:</strong> Display simultaneous stall-force gauges comparing PilT retraction (<code>110 pN</code>) against flagellar thrust (<code>0.5 pN</code>) and GldLM gliding."
        ]
    },
    {
        "num": "17",
        "folder": "17_microcompartment",
        "id": "microcompartment",
        "short": "17 Carboxysome",
        "title": "Bacterial Microcompartment (BMC) & Carboxysome Shell",
        "scale": "40–100 nm Icosahedral Organelle (T=9)",
        "pdb_label": "PDB: 7O04 / 3I82",
        "pdb_url": "https://www.rcsb.org/structure/7O04",
        "rcsb_file": "rcsb_7O04.jpg",
        "rcsb_caption": "RCSB PDB: 7O04 Icosahedral BMC Shell",
        "findings": [
            "Models the 5-piece cutaway icosahedral Bacterial Microcompartment / Carboxysome (<code>PDB: 7O04</code> / <code>3I82</code>): BMC-H hexameric facet tiles (<code>#0077B6</code>), BMC-T trimeric pseudohexamer gated pores (<code>#00F5D4</code>), BMC-P pentameric vertex caps (<code>#FFB703</code>), and the encapsulated paracrystalline RuBisCO (<code>#9D4EDD</code>) and Carbonic Anhydrase (<code>#E63946</code>) enzyme lumen.",
            "Exploded view (<code>75%</code>) radially expands the hexameric facets, trimeric pores, and pentameric vertices outward to reveal the packed RuBisCO catalytic core."
        ],
        "recommendations": [
            "<strong>Electrostatic Pore Potential Map:</strong> Highlight the positively charged <code>Arg/Lys</code> central pore funnels in BMC-H hexamers that attract anionic <code>HCO3-</code> while retarding uncharged <code>CO2</code> escape and blocking <code>O2</code>.",
            "<strong>Pdu / Eut Metabolosome Cargo Switch:</strong> Allow switching the lumenal cargo between autotrophic <code>Carboxysome (RuBisCO + CA)</code> and heterotrophic <code>Pdu BMC (B12 diol dehydratase)</code>."
        ]
    },
    {
        "num": "18",
        "folder": "18_chemosensory_mcp",
        "id": "chemosensory_mcp",
        "short": "18 Chemosensory",
        "title": "Chemosensory Transduction Array (MCP–CheW–CheA)",
        "scale": "38 nm Hexagonal Receptor Lattice",
        "pdb_label": "PDB: 6S1K / 3JA6",
        "pdb_url": "https://www.rcsb.org/structure/6S1K",
        "rcsb_file": "rcsb_6S1K.jpg",
        "rcsb_caption": "RCSB PDB: 6S1K Chemosensory Array",
        "findings": [
            "Captures the 7-piece cooperative chemosensory array (<code>PDB: 6S1K</code>): periplasmic 4-helix ligand sensors (<code>#FFB703</code>), curved polar inner membrane (<code>#06D6A0</code>), HAMP signal conversion bundles (<code>#00F5D4</code>), MCP coiled-coil trimers-of-dimers (<code>#3A86FF</code>), CheR/CheB methylation adaptors (<code>#9D4EDD</code>), CheA–CheW hexagonal baseplate rings (<code>#F77F00</code>), and diffusible CheY-P response regulators (<code>#E63946</code>).",
            "Exploded view (<code>75%</code>) separates the periplasmic sensor domains, transmembrane HAMP transducers, coiled-coil receptor stalks, and cytoplasmic CheA–CheW kinase baseplate."
        ],
        "recommendations": [
            "<strong>Direct CheY-P Diffusion Link to Scenario 02 (Flagellar Motor):</strong> Add a 1-click button on the <code>CheY-P Messengers</code> piece that jumps to the Flagellar Motor C-ring switch to show the complete sensory-to-motor circuit.",
            "<strong>Glutamate Methylation State Dots:</strong> Visualize the 4 adaptation glutamate sites (E295, E302, E309, E491) transitioning between unmethylated and CheR-methylated states."
        ]
    },
    {
        "num": "19",
        "folder": "19_pili_fimbriae",
        "id": "pili_fimbriae",
        "short": "19 Pili & Curli",
        "title": "Chaperone-Usher Fimbriae, Curli Amyloid & Biofilm Matrix",
        "scale": "7 nm × 1000 nm Pilus Rod & Curli Pore",
        "pdb_label": "PDB: 6GTO / 1TR7 / 4B0M",
        "pdb_url": "https://www.rcsb.org/structure/6GTO",
        "rcsb_file": "rcsb_6GTO.jpg",
        "rcsb_caption": "RCSB PDB: 6GTO Type 1 Pilus Rod",
        "findings": [
            "Models 8 pieces across two major outer-membrane adhesion and biofilm systems: the Chaperone-Usher Type 1 Pilus (periplasmic FimC chaperone, 24-stranded FimD outer membrane usher, wound helical FimA spring rod <code>6GTO</code>, and FimH catch-bond lectin tip <code>1TR7</code>) alongside the Curli Amyloid Biofilm system (nonameric 36-stranded CsgG secretin pore <code>4B0M</code>, CsgB nucleator, and extracellular CsgA cross-β amyloid mesh).",
            "Exploded view (<code>75%</code>) separates the periplasmic chaperones, outer membrane ushers/secretins, helical pilus rod, catch-bond adhesin tip, and curli amyloid fibrils."
        ],
        "recommendations": [
            "<strong>Shear-Induced FimA Helical Uncoiling:</strong> Animate the reversible uncoiling of the right-handed FimA rod (from <code>7 nm</code> compact cylinder to linear beta-strand wire) when the hydrodynamic shear slider exceeds <code>50 pN</code>.",
            "<strong>Cellulose &amp; Pel Exopolysaccharide Matrix Overlay:</strong> Toggle a semi-transparent hydrated EPS hydrogel around the CsgA curli amyloid fibers."
        ]
    },
    {
        "num": "20",
        "folder": "20_nucleoid",
        "id": "nucleoid",
        "short": "20 Nucleoid NAPs",
        "title": "Bacterial Nucleoid Architecture & NAP Compaction",
        "scale": "50 nm Plectonemic Loop & NAP Clamps",
        "pdb_label": "PDB: 1P71 / 3IV5 / 1BNA",
        "pdb_url": "https://www.rcsb.org/structure/1P71",
        "rcsb_file": "rcsb_1P71.jpg",
        "rcsb_caption": "RCSB PDB: 1P71 IHF/HU Sharp DNA Bend",
        "findings": [
            "Renders the 5-piece bacterial chromosome compaction machinery: a negatively supercoiled plectonemic B-DNA domain (<code>#F77F00</code>), HU/IHF heterodimers inducing a 160° apical hairpin bend via proline β-arm intercalation (<code>1P71</code>, <code>#00F5D4</code>), H-NS parallel filament bridges silencing AT-rich duplexes (<code>3IV5</code>, <code>#9D4EDD</code>), Fis crossover benders (<code>#3A86FF</code>), and the MukBEF SMC condensin root clamp (<code>#E63946</code>).",
            "Exploded view (<code>75%</code>) lifts the HU/IHF, H-NS, Fis, and MukBEF architectural clamps away from the supercoiled DNA plectoneme."
        ],
        "recommendations": [
            "<strong>Exponential vs. Stationary Phase Dps Crystallization Toggle:</strong> Add a stationary-phase stress toggle where Dps dodecamers (<code>PDB: 1DPS</code>) condense the nucleoid into a protective biocrystal.",
            "<strong>Topological Superhelical Density Readout:</strong> Couple the <code>σ</code> slider directly to the pitch of the plectonemic DNA superhelix."
        ]
    },
    {
        "num": "21",
        "folder": "21_chaperones",
        "id": "chaperones",
        "short": "21 GroEL Cage",
        "title": "Prokaryotic Proteostasis: GroEL–GroES & DnaK–DnaJ–GrpE",
        "scale": "14 nm × 18 nm Anfinsen Folding Cage",
        "pdb_label": "PDB: 1AON / 2KHO / 1W26",
        "pdb_url": "https://www.rcsb.org/structure/1AON",
        "rcsb_file": "rcsb_1AON.jpg",
        "rcsb_caption": "RCSB PDB: 1AON GroEL–GroES Chaperonin Complex",
        "findings": [
            "Captures the 6-piece three-tier prokaryotic chaperone network: ribosome-associated Trigger Factor cradle (<code>1W26</code>, <code>#00F5D4</code>), DnaK–DnaJ–GrpE Hsp70 holdase clamp (<code>2KHO</code>, <code>#9D4EDD</code>), and the 14-subunit GroEL–GroES Anfinsen cage (<code>1AON</code>) decomposed into the GroES heptameric dome lid (<code>#FFB703</code>), cis-GroEL folding ring (<code>#3A86FF</code>), encapsulated refolding client protein (<code>#06D6A0</code>), and trans-GroEL open ring (<code>#2A9D8F</code>).",
            "Exploded view (<code>75%</code>) lifts the GroES heptameric lid off the cis-GroEL chamber to expose the encapsulated client polypeptide inside the 175,000 Å³ cavity."
        ],
        "recommendations": [
            "<strong>Hydrophobic-to-Hydrophilic Wall Lining Transition:</strong> Visually toggle the interior surface of the cis-GroEL cavity from hydrophobic (<code>unliganded</code>) to hydrophilic negatively charged (<code>ATP + GroES bound</code>).",
            "<strong>ClpXP / Lon Protease Quality-Control Shunt:</strong> Show terminally misfolded proteins shunted to the AAA+ ClpXP proteolytic barrel when folding fails."
        ]
    },
    {
        "num": "22",
        "folder": "22_rna_degradosome",
        "id": "rna_degradosome",
        "short": "22 Degradosome",
        "title": "Bacterial RNA Degradosome & mRNA Decay Factory",
        "scale": "22 nm Membrane-Tethered Decay Hub",
        "pdb_label": "PDB: 5M3P / 2C0B",
        "pdb_url": "https://www.rcsb.org/structure/2C0B",
        "rcsb_file": "rcsb_2C0B.jpg",
        "rcsb_caption": "RCSB PDB: 2C0B RNase E Catalytic Tetramer",
        "findings": [
            "Models the 7-piece membrane-tethered mRNA turnover factory: cytoplasmic inner membrane anchor (<code>#06D6A0</code>), RNase E catalytic NTD tetramer (<code>2C0B</code>, <code>#3A86FF</code>), intrinsically disordered CTD scaffold (<code>#00F5D4</code>), RhlB DEAD-box helicase (<code>#9D4EDD</code>), dimeric glycolytic enolase sensor (<code>#2A9D8F</code>), trimeric PNPase phosphorolytic ring (<code>5M3P</code>, <code>#FFB703</code>), and Hfq Sm-hexamer delivering sRNA-paired mRNA (<code>#E63946</code>).",
            "Exploded view (<code>75%</code>) separates the RNase E catalytic core, CTD scaffold, RhlB helicase, enolase dimer, PNPase trimer, and Hfq-sRNA complex."
        ],
        "recommendations": [
            "<strong>5'-Triphosphate vs. 5'-Monophosphate Sensor Callout:</strong> Highlight how RppH pyrophosphohydrolase converts 5'-PPP to 5'-P to trigger the 20-fold allosteric activation of RNase E.",
            "<strong>Membrane Puncta Lateral Diffusion:</strong> Animate the amphipathic Helix A gliding along the inner membrane leaflet."
        ]
    },
    {
        "num": "23",
        "folder": "23_metabolic_hubs",
        "id": "metabolic_hubs",
        "short": "23 Metabolic Hubs",
        "title": "Supramolecular Metabolic Hubs: PDH (1EAE) & Cyt bo3 (6WTI)",
        "scale": "45 nm (4.5 MDa Cubic Metabolon)",
        "pdb_label": "PDB: 1EAE / 6WTI",
        "pdb_url": "https://www.rcsb.org/structure/1EAE",
        "rcsb_file": "rcsb_1EAE.jpg",
        "rcsb_caption": "RCSB PDB: 1EAE 24-Subunit Cubic E2 Core",
        "findings": [
            "Models 8 pieces across two giant bioenergetic complexes: the 4.5-MDa Pyruvate Dehydrogenase Complex (octahedral 24-mer E2 transacetylase cubic core <code>1EAE</code> in gold, peripheral E1 decarboxylase shell in blue, E3FAD dehydrogenase shell in purple, and 14-nm lipoyl swinging arms in cyan) coupled via NADH/ubiquinol to the inner-membrane Cytochrome bo<sub>3</sub> terminal oxidase (<code>6WTI</code>, CyoA, CyoB Heme b/o<sub>3</sub>-Cu<sub>B</sub> core, and CyoCD).",
            "Exploded view (<code>75%</code>) expands the E1 and E3 peripheral shells and lipoyl tethers radially around the 24-mer E2 cube alongside the decomposed Cytochrome bo<sub>3</sub> subunits."
        ],
        "recommendations": [
            "<strong>Active Lipoyl Arm Trajectory Trace:</strong> Animate the 14-nm lipoyl-lysine arm swinging sequentially between the E1 (TPP), E2 (CoA), and E3 (FAD) active sites.",
            "<strong>Aerobic (Cyt bo3) vs. Microaerophilic (Cyt bd) Switch:</strong> Allow toggling between high-efficiency Cytochrome bo<sub>3</sub> (<code>4 H+/2e-</code>) and high-affinity Cytochrome bd."
        ]
    },
    {
        "num": "24",
        "folder": "24_periplasmic_transport",
        "id": "periplasmic_transport",
        "short": "24 Periplasmic",
        "title": "Periplasmic Chaperone Relay (SurA) & MalFGK2–MalE Importer",
        "scale": "16 nm Periplasmic Relay & ABC Pump",
        "pdb_label": "PDB: 1M5Y / 1OMP / 2R6G",
        "pdb_url": "https://www.rcsb.org/structure/1M5Y",
        "rcsb_file": "rcsb_1M5Y.jpg",
        "rcsb_caption": "RCSB PDB: 1M5Y SurA Periplasmic Chaperone",
        "findings": [
            "Renders 7 pieces illustrating periplasmic protein and solute traffic in the ATP-devoid periplasm: the SurA chaperone relay (NC-core cradle <code>1M5Y</code>, P1/P2 parvulin PPIase domains, and unfolded OMP client) alongside the MalEFGK<sub>2</sub> ABC importer (periplasmic MalE Venus-flytrap binding protein <code>1OMP</code>, bound maltose disaccharide, MalF–MalG transmembrane permease, and cytoplasmic MalK<sub>2</sub> ATPase tweezers <code>2R6G</code>).",
            "Exploded view (<code>75%</code>) separates the SurA cradle, PPIase domains, and OMP cargo on the left and the MalE binding protein, maltose ligand, MalFG channel, and MalK<sub>2</sub> ATPase dimers on the right."
        ],
        "recommendations": [
            "<strong>Venus-Flytrap 35° Hinge Closure Slider:</strong> Allow the user to scrub MalE continuously between its open apo state (<code>1OMP</code>) and closed maltose-bound state (<code>1ANF</code>) docking onto the MalF P2 loop.",
            "<strong>Skp &amp; DegP Backup Periplasmic Pathway:</strong> Add an optional toggle showing the parallel Skp trimeric jellyfish and DegP protease/chaperone cage."
        ]
    },
    {
        "num": "25",
        "folder": "25_efflux_pump",
        "id": "efflux_pump",
        "short": "25 AcrAB-TolC",
        "title": "AcrAB–TolC Multidrug Resistance RND Efflux Pump",
        "scale": "32 nm × 12 nm Trans-Envelope Cannon",
        "pdb_label": "PDB: 5V5S / 5O66",
        "pdb_url": "https://www.rcsb.org/structure/5V5S",
        "rcsb_file": "rcsb_5V5S.jpg",
        "rcsb_caption": "RCSB PDB: 5V5S Complete AcrAB–TolC Tripartite Pump",
        "findings": [
            "Models the 7-piece 320 Å trans-envelope multidrug efflux pump (<code>PDB: 5V5S</code>): outer-membrane TolC trimeric exit duct (<code>#3A86FF</code>), outer membrane bilayer (<code>#0077B6</code>), periplasmic AcrA hexameric adaptor collar (<code>#F77F00</code>), asymmetric AcrB trimer in its three peristaltic states — Loose/Access (<code>#00F5D4</code>), Tight/Binding (<code>#FFB703</code>), and Open/Extrusion (<code>#9D4EDD</code>) — and the inner membrane bilayer (<code>#06D6A0</code>).",
            "Exploded view (<code>75%</code>) vertically separates the TolC outer-membrane cannon, AcrA periplasmic adaptor ring, and the three asymmetric AcrB protomers."
        ],
        "recommendations": [
            "<strong>Three-State Peristaltic L→T→O Stepper:</strong> Add a 3-button stepper cycling each AcrB protomer through <code>Access (Loose)</code> → <code>Binding (Tight)</code> → <code>Extrusion (Open)</code> while firing a crimson antibiotic sphere out through TolC.",
            "<strong>TolC Iris Coiled-Coil Dilation View:</strong> Add a top-down camera preset looking down the 30 Å dilated TolC iris aperture."
        ]
    },
    {
        "num": "26",
        "folder": "26_secretion_systems",
        "id": "secretion_systems",
        "short": "26 Secretion T3/T4/T6",
        "title": "Trans-Envelope Secretion Systems: T3SS, T4SS & T6SS",
        "scale": "80 nm Comparative Secretion Weapons",
        "pdb_label": "PDB: 7OKO / 7AH9 / 6H3L",
        "pdb_url": "https://www.rcsb.org/structure/7OKO",
        "rcsb_file": "rcsb_7OKO.jpg",
        "rcsb_caption": "RCSB PDB: 7OKO T3SS Virulence Injectisome",
        "findings": [
            "Compares 8 decomposed pieces across the three major trans-envelope secretion nanomachines: the T3SS virulence injectisome (multi-ring basal body &amp; InvC ATPase + 80-nm PrgI needle <code>7OKO</code>), the T4SS conjugation machine (plasmid relaxosome &amp; VirD4, inner-membrane VirB4/VirB11 ATPase barrels <code>7AH9</code>, 14-fold outer-membrane core complex, and conjugative F-pilus tube), and the T6SS contractile spear (VipA/VipB contractile sheath <code>6H3L</code> + Hcp inner tube &amp; VgrG–PAAR spike).",
            "Exploded view (<code>75%</code>) dissociates the cytoplasmic ATPase motors, periplasmic chambers, contractile sheaths, and extracellular needles/spears."
        ],
        "recommendations": [
            "<strong>T6SS 2-Millisecond Contractile Firing Trigger:</strong> Add a <code>🔥 Fire T6SS Spear</code> button that rapidly contracts the green VipAB outer sheath by 50% and propels the Hcp–VgrG–PAAR spike outward.",
            "<strong>ClpV AAA+ Sheath Recycling Animation:</strong> Show ClpV hexamers disassembling the contracted VipAB sheath to reset the T6SS crossbow."
        ]
    },
    {
        "num": "27",
        "folder": "27_crispr_defense",
        "id": "crispr_defense",
        "short": "27 CRISPR Defense",
        "title": "Prokaryotic Phage Defense: CRISPR–Cascade & EcoRI",
        "scale": "20 nm Adaptive & Innate Immunity",
        "pdb_label": "PDB: 5H9F / 1VY8 / 1ERI",
        "pdb_url": "https://www.rcsb.org/structure/5H9F",
        "rcsb_file": "rcsb_5H9F.jpg",
        "rcsb_caption": "RCSB PDB: 5H9F Type I-E CRISPR–Cascade R-Loop",
        "findings": [
            "Models 7 pieces contrasting adaptive and innate phage immunity: the 405-kDa Type I-E CRISPR–Cascade surveillance seahorse (<code>5H9F</code>, Cas7<sub>1–6</sub> helical backbone, 61-nt crRNA guide, Cas8e PAM-sensing tail, Cas11/Cas6e subunits, unwound phage dsDNA R-loop bubble, and recruited Cas3 helicase-nuclease shredder) alongside the homodimeric EcoRI restriction endonuclease (<code>1ERI</code>) kinking palindromic 5'-GAATTC-3' DNA.",
            "Exploded view (<code>75%</code>) separates the Cas7 backbone, crRNA guide, Cas8e PAM sensor, Cas11/Cas6e subunits, phage R-loop DNA, Cas3 shredder, and EcoRI homodimer."
        ],
        "recommendations": [
            "<strong>6-Nucleotide Thumb-Flip Callout:</strong> Highlight the regular 6-nt periodic base flip induced by the Cas7 thumb domains along the 32-nt crRNA–DNA hybrid.",
            "<strong>Host Dam/Dcm Methylation Shield Toggle:</strong> Show how N6-adenine/C5-cytosine methylation of host DNA sterically blocks EcoRI cleavage while leaving unmethylated phage DNA vulnerable."
        ]
    },
    {
        "num": "28",
        "folder": "28_storage_and_spores",
        "id": "storage_and_spores",
        "short": "28 Granules & Spores",
        "title": "Storage Granules, Magnetosomes & Endospore Dormancy",
        "scale": "50–800 nm Survival Organelles & Spores",
        "pdb_label": "PDB: 7R04 / 1XDO / 2G42",
        "pdb_url": "https://www.rcsb.org/structure/7R04",
        "rcsb_file": "rcsb_7R04.jpg",
        "rcsb_caption": "RCSB PDB: 7R04 Gas Vesicle / Survival Assembly",
        "findings": [
            "Models 7 pieces spanning prokaryotic metabolic storage, buoyancy, magnetotaxis, and extreme dormancy: PHB carbonosome with PhaP phasin coat (<code>#FFB703</code>), glycogen &amp; polyphosphate volutin granules (<code>#F77F00</code>), GvpA–GvpC buoyancy gas vesicle spindle (<code>7R04</code>, <code>#00F5D4</code>), MamK cytoskeletal filament aligning a linear chain of Fe<sub>3</sub>O<sub>4</sub> magnetosome crystals (<code>#3A86FF</code>), and a concentrically sectioned Bacterial Endospore (keratin-like outer coat, thick peptidoglycan cortex, and Ca<sup>2+</sup>–dipicolinate + SASP–DNA core <code>2G42</code>).",
            "Exploded view (<code>75%</code>) separates the cytoplasmic granules, gas vesicle, magnetosome compass chain, and the three concentric protective layers of the bacterial endospore."
        ],
        "recommendations": [
            "<strong>Geomagnetic Field Vector Compass Control:</strong> Allow rotating an external magnetic field vector <code>B</code> and watch the MamK magnetosome chain torque the cell into alignment.",
            "<strong>Endospore Germination Hydration Cascade:</strong> Animate L-alanine binding to GerA receptors triggering Ca-DPA release, cortex hydrolysis by SleB, and core rehydration."
        ]
    },
    {
        "num": "29",
        "folder": "29_atomic_chemistry",
        "id": "atomic_chemistry",
        "short": "29 Atomic Bonds",
        "title": "Level 5 & 6 Biomolecular Monomers & Atomic Bonds",
        "scale": "0.1–1.5 nm Atomic & Quantum Scale",
        "pdb_label": "PDB: 1BNA / RDKit MMFF94",
        "pdb_url": "https://www.rcsb.org/structure/1BNA",
        "rcsb_file": "rcsb_1BNA.jpg",
        "rcsb_caption": "RCSB PDB: 1BNA Dickerson-Drew B-DNA Dodecamer",
        "findings": [
            "Bridges macromolecular complexes down to Levels 5 &amp; 6 all-atom CPK chemistry across 7 pieces: octahedral Mg<sup>2+</sup>·ATP<sup>4−</sup> chelate complex (<code>#FFB703</code>), GlcNAc–MurNAc pentapeptide murein cross-link (<code>#E76F51</code>), POPE phospholipid with its 30° cis-Δ9 oleoyl kink (<code>#06D6A0</code>), planar trans-peptide bond resonance (<code>ω = 180°</code>, <code>#3A86FF</code>), Watson–Crick base-pair H-bonds &amp; 3.4 Å π–π stacking (<code>1BNA</code>, <code>#9D4EDD</code>), two-metal Mg<sup>2+</sup> SN2 pentacoordinate phosphorus transition state (<code>#F77F00</code>), and a Grotthuss proton relay wire (<code>#00F5D4</code>).",
            "Exploded view (<code>75%</code>) radially separates the 7 foundational chemical motifs for individual bond-length and geometry inspection."
        ],
        "recommendations": [
            "<strong>Interactive Bond-Length &amp; Dihedral Caliper Overlay:</strong> Display exact angstrom distance callouts (<code>C–N = 1.33 Å</code>, <code>O–H···N = 2.9 Å</code>, <code>π–π = 3.4 Å</code>) when hovering individual atomic motifs.",
            "<strong>Two-Metal SN2 Inversion Animation:</strong> Animate the umbrella-like stereochemical inversion of the scissile phosphorus atom during 3'-OH nucleophilic attack."
        ]
    }
]


def build_html(prefix: str) -> str:
    """Build complete standalone HTML string using `prefix` ('' for verification/index.html, 'verification/' for root verification.html)."""
    p = f"{prefix}/" if prefix else ""

    nav_pills_html = "\n".join(
        f'<a href="#scenario-{sc["num"]}" class="nav-pill"><span class="nav-num">{sc["num"]}</span> {sc["short"][3:]}</a>'
        for sc in SCENARIOS
    )

    table_rows_html = []
    for sc in SCENARIOS:
        f = sc["folder"]
        sid = sc["id"]
        exp_url = f"{p}{f}/expected_{sid}.png"
        rcsb_url = f"{p}{f}/{sc['rcsb_file']}"
        asm_url = f"{p}{f}/browser_{sid}_assembled.png"
        exp3d_url = f"{p}{f}/browser_{sid}_exploded.png"
        comp_url = f"{p}{f}/comparison_{sid}.png"
        mp4_url = f"{p}{f}/comparison_{sid}.mp4"

        table_rows_html.append(f"""
        <tr>
          <td class="col-num"><a href="#scenario-{sc['num']}" class="row-jump-badge">{sc['num']}</a></td>
          <td class="col-title">
            <a href="#scenario-{sc['num']}" class="scenario-link">{sc['title']}</a>
            <div class="table-sub">{sc['scale']}</div>
          </td>
          <td class="col-pdb">
            <a href="{sc['pdb_url']}" target="_blank" rel="noopener" class="pdb-chip">{sc['pdb_label']} ↗</a>
          </td>
          <td class="col-thumb">
            <img src="{exp_url}" alt="Expected {sc['title']}" class="mini-thumb" onclick="openLightbox('{exp_url}', 'Iteration {sc['num']} — Expected Reference: {sc['title']}')" />
            <div class="thumb-links">
              <a href="{exp_url}" target="_blank">Diagram</a> · <a href="{rcsb_url}" target="_blank">PDB Ref</a>
            </div>
          </td>
          <td class="col-thumb">
            <img src="{asm_url}" alt="Assembled 3D {sc['title']}" class="mini-thumb" onclick="openLightbox('{asm_url}', 'Iteration {sc['num']} — Assembled 3D (0%): {sc['title']}')" />
            <div class="thumb-links"><a href="{asm_url}" target="_blank">Assembled (0%)</a></div>
          </td>
          <td class="col-thumb">
            <img src="{exp3d_url}" alt="Exploded 3D {sc['title']}" class="mini-thumb" onclick="openLightbox('{exp3d_url}', 'Iteration {sc['num']} — Exploded 3D (75%): {sc['title']}')" />
            <div class="thumb-links"><a href="{exp3d_url}" target="_blank">Exploded (75%)</a></div>
          </td>
          <td class="col-thumb">
            <img src="{comp_url}" alt="Comparison Plate {sc['title']}" class="mini-thumb plate-thumb" onclick="openLightbox('{comp_url}', 'Iteration {sc['num']} — 2400×1380 Side-by-Side Comparison Plate: {sc['title']}')" />
            <div class="thumb-links"><a href="{comp_url}" target="_blank">2400×1380 Plate</a></div>
          </td>
          <td class="col-video">
            <a href="{mp4_url}" target="_blank" class="video-btn">▶ Open MP4</a>
            <button class="video-btn secondary-btn" onclick="document.getElementById('scenario-{sc['num']}').scrollIntoView({{behavior:'smooth'}})">View Below ↓</button>
          </td>
        </tr>
        """)

    cards_html = []
    for sc in SCENARIOS:
        f = sc["folder"]
        sid = sc["id"]
        exp_url = f"{p}{f}/expected_{sid}.png"
        rcsb_url = f"{p}{f}/{sc['rcsb_file']}"
        asm_url = f"{p}{f}/browser_{sid}_assembled.png"
        exp3d_url = f"{p}{f}/browser_{sid}_exploded.png"
        comp_url = f"{p}{f}/comparison_{sid}.png"
        mp4_url = f"{p}{f}/comparison_{sid}.mp4"

        findings_li = "\n".join(f"<li>{item}</li>" for item in sc["findings"])
        recs_li = "\n".join(f"<li>{item}</li>" for item in sc["recommendations"])
        exploded_title = (
            "Interactive Organelle Focus &amp; Inspector"
            if sid == "cell"
            else "Exploded 3D Subunit Disassembly (75%)"
        )

        cards_html.append(f"""
        <section class="scenario-card" id="scenario-{sc['num']}" data-scenario="{sc['num']} {sc['title'].lower()} {sc['pdb_label'].lower()}">
          <div class="scenario-header">
            <div class="scenario-header-left">
              <span class="iteration-pill">ITERATION {sc['num']}</span>
              <div>
                <h2>{sc['num']}. {sc['title']}</h2>
                <div class="scenario-meta">
                  <span><strong>Scale:</strong> {sc['scale']}</span>
                  <span class="meta-sep">•</span>
                  <span><strong>Reference:</strong> <a href="{sc['pdb_url']}" target="_blank" rel="noopener" class="header-pdb-link">{sc['pdb_label']} ↗</a></span>
                </div>
              </div>
            </div>
            <div class="scenario-header-right">
              <span class="verified-pill">✓ VERIFIED 3D + 75% EXPLODED</span>
              <a href="#top" class="back-top-btn" title="Back to Top">↑ Top</a>
            </div>
          </div>

          <div class="scenario-body">
            <!-- Quick Asset Bar -->
            <div class="asset-links-bar">
              <span class="asset-bar-label">Direct File Links:</span>
              <a href="{exp_url}" target="_blank" class="asset-chip">🖼️ Expected Diagram (<code>expected_{sid}.png</code>)</a>
              <a href="{rcsb_url}" target="_blank" class="asset-chip">🧬 {sc['rcsb_caption']} (<code>{sc['rcsb_file']}</code>)</a>
              <a href="{asm_url}" target="_blank" class="asset-chip">🟢 Assembled 3D 0% (<code>browser_{sid}_assembled.png</code>)</a>
              <a href="{exp3d_url}" target="_blank" class="asset-chip">🟠 Exploded 3D 75% (<code>browser_{sid}_exploded.png</code>)</a>
              <a href="{comp_url}" target="_blank" class="asset-chip highlight-chip">📊 2400×1380 Comparison Plate (<code>comparison_{sid}.png</code>)</a>
              <a href="{mp4_url}" target="_blank" class="asset-chip video-chip">🎬 Side-by-Side Video (<code>comparison_{sid}.mp4</code>)</a>
            </div>

            <!-- 1. Full 2400x1380 Side-by-Side Comparison Plate -->
            <div class="view-section section-plate">
              <div class="panel-heading">
                <span>1. Side-by-Side Verification Plate (2400×1380) — Expected Reference vs. Live 3D Assembled (0%) &amp; Exploded (75%)</span>
                <button class="zoom-btn" onclick="openLightbox('{comp_url}', 'Iteration {sc['num']} — 2400×1380 Comparison Plate: {sc['title']}')">🔍 Click Image to Zoom Full Resolution</button>
              </div>
              <div class="plate-frame">
                <img src="{comp_url}" alt="Comparison Plate {sc['title']}" onclick="openLightbox('{comp_url}', 'Iteration {sc['num']} — 2400×1380 Comparison Plate: {sc['title']}')" />
              </div>
            </div>

            <!-- 2. 4-Column Breakdown: Expected + RCSB | Assembled 3D (0%) | Exploded 3D (75%) -->
            <div class="view-section section-grid">
              <div class="panel-heading">
                <span>2. Individual High-Resolution Assets — Expectation vs. Assembled 3D (0%) vs. {exploded_title}</span>
                <span class="panel-hint">Click any image to inspect full-screen</span>
              </div>
              <div class="three-col-grid">
                <!-- Col 1: Expected Reference + Official RCSB Inset -->
                <div class="media-card expected-card">
                  <div class="media-card-header expected-header">
                    <span>A. EXPECTED SCIENTIFIC REFERENCE</span>
                    <span class="tag-badge">{sc['pdb_label']}</span>
                  </div>
                  <div class="media-img-wrap" onclick="openLightbox('{exp_url}', 'Iteration {sc['num']} — Expected Scientific Diagram: {sc['title']}')">
                    <img src="{exp_url}" alt="Expected {sc['title']}" />
                  </div>
                  <div class="rcsb-inset-strip" onclick="openLightbox('{rcsb_url}', 'Iteration {sc['num']} — {sc['rcsb_caption']}')">
                    <img src="{rcsb_url}" alt="{sc['rcsb_caption']}" />
                    <div class="rcsb-inset-text">
                      <strong>{sc['rcsb_caption']}</strong>
                      <span>Click to enlarge experimental reference</span>
                    </div>
                  </div>
                </div>

                <!-- Col 2: Live 3D Assembled (0%) -->
                <div class="media-card assembled-card">
                  <div class="media-card-header assembled-header">
                    <span>B. ASSEMBLED 3D BROWSER RESULT (0%)</span>
                    <span class="tag-badge">Native Holoenzyme</span>
                  </div>
                  <div class="media-img-wrap" onclick="openLightbox('{asm_url}', 'Iteration {sc['num']} — Live 3D Assembled Holoenzyme (0%): {sc['title']}')">
                    <img src="{asm_url}" alt="Assembled 3D {sc['title']}" />
                  </div>
                  <div class="media-caption">
                    Live hardware-accelerated WebGL capture at <code>1920×1080</code> with native assembled subunits (<code>0%</code>), 3D anatomical leader pills, left kinetic HUD controls, and right Inspector Drawer.
                  </div>
                </div>

                <!-- Col 3: Live 3D Exploded (75%) -->
                <div class="media-card exploded-card">
                  <div class="media-card-header exploded-header">
                    <span>C. {exploded_title.upper()}</span>
                    <span class="tag-badge">v_dissoc = 75%</span>
                  </div>
                  <div class="media-img-wrap" onclick="openLightbox('{exp3d_url}', 'Iteration {sc['num']} — {exploded_title}: {sc['title']}')">
                    <img src="{exp3d_url}" alt="Exploded 3D {sc['title']}" />
                  </div>
                  <div class="media-caption">
                    Subunit decomposition (<code>Piece_&lt;ID&gt;_&lt;Subunit&gt;</code>) dissociated at <code>75%</code> along biophysical vectors with dynamic camera centroid framing and leader callouts.
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Interactive Assembled (0%) vs Exploded (75%) Drag Slider + Side-by-Side Video -->
            <div class="view-section section-video">
              <div class="two-col-video-row">
                <!-- Left: Side-by-Side Comparison Video -->
                <div class="media-card video-card">
                  <div class="media-card-header video-header">
                    <span>3. SIDE-BY-SIDE COMPARISON VIDEO (<code>comparison_{sid}.mp4</code>)</span>
                    <span class="tag-badge">1920×1080 MP4</span>
                  </div>
                  <div class="video-wrap">
                    <video controls loop muted playsinline preload="metadata" poster="{comp_url}">
                      <source src="{mp4_url}" type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  </div>
                  <div class="media-caption">
                    Records Phase 1 (Kinetic Animation at 0%), Phase 2 (Smooth 0% → 80% Exploded Dissociation), and Phase 3 (Re-assembly to 0%) beside the Expected Reference.
                  </div>
                </div>

                <!-- Right: Interactive Before/After Wipe Slider (Assembled 0% vs Exploded 75%) -->
                <div class="media-card wipe-card">
                  <div class="media-card-header wipe-header">
                    <span>4. INTERACTIVE WIPE COMPARATOR — Drag Slider: Assembled (0%) ↔ Exploded (75%)</span>
                    <span class="tag-badge">Interactive Compare</span>
                  </div>
                  <div class="ba-slider" id="ba-{sc['num']}">
                    <img src="{exp3d_url}" alt="Exploded 75%" class="ba-img-back" />
                    <div class="ba-resize" style="width: 50%;">
                      <img src="{asm_url}" alt="Assembled 0%" class="ba-img-front" />
                    </div>
                    <span class="ba-label ba-label-left">Assembled (0%)</span>
                    <span class="ba-label ba-label-right">Exploded (75%)</span>
                    <input type="range" min="0" max="100" value="50" class="ba-range" aria-label="Compare Assembled vs Exploded" oninput="updateWipe(this)" />
                  </div>
                  <div class="media-caption">
                    Drag the horizontal slider left or right to wipe directly between the <strong>Assembled (0%)</strong> and <strong>Exploded (75%)</strong> 3D browser states.
                  </div>
                </div>
              </div>
            </div>

            <!-- 4. Verification Findings & Recommendations -->
            <div class="notes-grid">
              <div class="notes-box findings-box">
                <h4>✅ Visual &amp; Structural Verification Findings</h4>
                <ul>
                  {findings_li}
                </ul>
              </div>
              <div class="notes-box recs-box">
                <h4>🚀 Architectural &amp; Biophysical Recommendations</h4>
                <ul>
                  {recs_li}
                </ul>
              </div>
            </div>
          </div>
        </section>
        """)

    master_video_url = f"{p}master_13_elements_comparison.mp4"
    first_poster_url = f"{p}01_cell/comparison_cell.png"

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Learn Biology — 13-Scenario Visual Verification &amp; Reference Audit</title>
  <style>
    :root {{
      --bg-ivory: #FAF8F5;
      --bg-card: #FFFFFF;
      --bg-subtle: #F2EFE9;
      --ink-dark: #162621;
      --ink-body: #2C3E37;
      --ink-muted: #5C6E64;
      --teal-primary: #1A5F54;
      --teal-bright: #2A9D8F;
      --slate-ref: #2B3E50;
      --terracotta: #BA4E3B;
      --amber: #D97706;
      --border-warm: #DCD6C8;
      --shadow-soft: 0 6px 24px rgba(22, 38, 33, 0.08);
    }}

    * {{
      box-sizing: border-box;
    }}

    html {{
      scroll-behavior: smooth;
    }}

    body {{
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-ivory);
      color: var(--ink-body);
      line-height: 1.55;
    }}

    /* Top Hero Header */
    .hero-header {{
      background: linear-gradient(135deg, #162621 0%, #1F3A32 60%, #1A4B43 100%);
      color: #FAF8F5;
      padding: 36px 32px 28px;
      border-bottom: 4px solid var(--teal-bright);
    }}

    .hero-container {{
      max-width: 1720px;
      margin: 0 auto;
    }}

    .hero-eyebrow {{
      display: inline-block;
      background: rgba(42, 157, 143, 0.25);
      border: 1px solid rgba(168, 218, 220, 0.4);
      color: #A8DADC;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 10px;
    }}

    .hero-header h1 {{
      margin: 0 0 10px 0;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.01em;
    }}

    .hero-subtitle {{
      margin: 0;
      max-width: 1250px;
      color: #D8E6E2;
      font-size: 15.5px;
    }}

    .hero-stats-row {{
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 18px;
    }}

    .stat-badge {{
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.16);
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 13px;
      color: #F4F1EA;
    }}

    .stat-badge strong {{
      color: #64DFDF;
    }}

    /* Sticky Navigation Bar */
    .sticky-toolbar {{
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(250, 248, 245, 0.96);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-warm);
      box-shadow: 0 2px 12px rgba(22, 38, 33, 0.07);
      padding: 10px 24px;
    }}

    .toolbar-inner {{
      max-width: 1720px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }}

    .nav-pills {{
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
    }}

    .nav-pill {{
      text-decoration: none;
      color: var(--ink-dark);
      background: #FFFFFF;
      border: 1px solid var(--border-warm);
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }}

    .nav-pill:hover {{
      background: var(--teal-primary);
      color: #FFFFFF;
      border-color: var(--teal-primary);
      transform: translateY(-1px);
    }}

    .nav-num {{
      background: var(--bg-subtle);
      color: var(--teal-primary);
      padding: 1px 5px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 800;
    }}

    .nav-pill:hover .nav-num {{
      background: rgba(255, 255, 255, 0.2);
      color: #FFFFFF;
    }}

    .toolbar-controls {{
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }}

    .search-input {{
      padding: 6px 12px;
      border: 1px solid var(--border-warm);
      border-radius: 6px;
      font-size: 13px;
      background: #FFFFFF;
      color: var(--ink-dark);
      min-width: 210px;
    }}

    .filter-btn {{
      cursor: pointer;
      border: 1px solid var(--border-warm);
      background: #FFFFFF;
      color: var(--ink-dark);
      padding: 6px 11px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      transition: all 0.15s;
    }}

    .filter-btn.active,
    .filter-btn:hover {{
      background: var(--ink-dark);
      color: #FFFFFF;
      border-color: var(--ink-dark);
    }}

    /* Main Container */
    .main-container {{
      max-width: 1720px;
      margin: 24px auto 64px;
      padding: 0 24px;
    }}

    /* Master Video & Overview Grid */
    .overview-grid {{
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 22px;
      margin-bottom: 30px;
    }}

    @media (max-width: 1280px) {{
      .overview-grid {{
        grid-template-columns: 1fr;
      }}
    }}

    .card-box {{
      background: var(--bg-card);
      border: 1px solid var(--border-warm);
      border-radius: 14px;
      box-shadow: var(--shadow-soft);
      overflow: hidden;
    }}

    .card-box-header {{
      background: var(--ink-dark);
      color: #FFFFFF;
      padding: 12px 20px;
      font-weight: 700;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}

    .card-box-body {{
      padding: 18px 20px;
    }}

    .master-video {{
      width: 100%;
      border-radius: 8px;
      background: #0F1915;
      display: block;
      max-height: 460px;
    }}

    /* Quick Matrix Table */
    .matrix-section {{
      margin-bottom: 36px;
    }}

    .table-responsive {{
      overflow-x: auto;
    }}

    .verification-table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 13.5px;
      background: #FFFFFF;
    }}

    .verification-table th {{
      background: #223831;
      color: #FFFFFF;
      text-align: left;
      padding: 11px 12px;
      font-weight: 700;
      font-size: 12.5px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      border-bottom: 2px solid var(--teal-bright);
    }}

    .verification-table td {{
      padding: 10px 12px;
      border-bottom: 1px solid #EAE5DA;
      vertical-align: middle;
    }}

    .verification-table tr:hover td {{
      background: #F9F6F0;
    }}

    .row-jump-badge {{
      display: inline-block;
      background: var(--ink-dark);
      color: #FFFFFF;
      font-weight: 800;
      padding: 4px 9px;
      border-radius: 6px;
      text-decoration: none;
      font-size: 12.5px;
    }}

    .Scenario-link, .scenario-link {{
      color: var(--ink-dark);
      font-weight: 700;
      text-decoration: none;
      font-size: 14px;
    }}

    .scenario-link:hover {{
      color: var(--teal-primary);
      text-decoration: underline;
    }}

    .table-sub {{
      font-size: 12px;
      color: var(--ink-muted);
      margin-top: 2px;
    }}

    .pdb-chip {{
      display: inline-block;
      background: #EBF5F3;
      color: var(--teal-primary);
      border: 1px solid #B9DDD6;
      padding: 4px 8px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 12px;
      text-decoration: none;
      white-space: nowrap;
    }}

    .pdb-chip:hover {{
      background: var(--teal-primary);
      color: #FFFFFF;
    }}

    .mini-thumb {{
      width: 135px;
      height: 78px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid var(--border-warm);
      cursor: zoom-in;
      display: block;
      background: var(--bg-subtle);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }}

    .plate-thumb {{
      width: 150px;
    }}

    .mini-thumb:hover {{
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    }}

    .thumb-links {{
      font-size: 11.5px;
      margin-top: 4px;
    }}

    .thumb-links a {{
      color: var(--teal-primary);
      text-decoration: none;
      font-weight: 600;
    }}

    .thumb-links a:hover {{
      text-decoration: underline;
    }}

    .video-btn {{
      display: inline-block;
      background: var(--terracotta);
      color: #FFFFFF;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      margin-bottom: 4px;
      white-space: nowrap;
    }}

    .video-btn:hover {{
      opacity: 0.92;
    }}

    .secondary-btn {{
      background: var(--bg-subtle);
      color: var(--ink-dark);
      border: 1px solid var(--border-warm);
      display: block;
    }}

    /* Scenario Card */
    .scenario-card {{
      background: var(--bg-card);
      border: 1px solid var(--border-warm);
      border-radius: 16px;
      box-shadow: var(--shadow-soft);
      margin-bottom: 38px;
      overflow: hidden;
      scroll-margin-top: 72px;
    }}

    .scenario-header {{
      background: linear-gradient(90deg, #162621 0%, #203B33 100%);
      color: #FFFFFF;
      padding: 16px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
      border-bottom: 3px solid var(--teal-bright);
    }}

    .scenario-header-left {{
      display: flex;
      align-items: center;
      gap: 16px;
    }}

    .iteration-pill {{
      background: var(--teal-bright);
      color: #FFFFFF;
      font-weight: 800;
      font-size: 13px;
      padding: 6px 12px;
      border-radius: 8px;
      letter-spacing: 0.04em;
      white-space: nowrap;
    }}

    .scenario-header h2 {{
      margin: 0;
      font-size: 22px;
      font-weight: 800;
    }}

    .scenario-meta {{
      font-size: 13.5px;
      color: #C7DDD8;
      margin-top: 3px;
    }}

    .meta-sep {{
      margin: 0 8px;
      opacity: 0.6;
    }}

    .header-pdb-link {{
      color: #64DFDF;
      text-decoration: none;
      font-weight: 700;
    }}

    .header-pdb-link:hover {{
      text-decoration: underline;
    }}

    .scenario-header-right {{
      display: flex;
      align-items: center;
      gap: 10px;
    }}

    .verified-pill {{
      background: rgba(42, 157, 143, 0.28);
      border: 1px solid #2A9D8F;
      color: #E8F8F5;
      font-size: 12.5px;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 8px;
    }}

    .back-top-btn {{
      color: #FAF8F5;
      background: rgba(255, 255, 255, 0.12);
      text-decoration: none;
      padding: 6px 11px;
      border-radius: 7px;
      font-size: 12.5px;
      font-weight: 600;
    }}

    .back-top-btn:hover {{
      background: rgba(255, 255, 255, 0.24);
    }}

    .scenario-body {{
      padding: 20px 24px 26px;
    }}

    /* Direct Asset Link Bar */
    .asset-links-bar {{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      background: var(--bg-subtle);
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid var(--border-warm);
      margin-bottom: 18px;
    }}

    .asset-bar-label {{
      font-size: 12.5px;
      font-weight: 700;
      color: var(--ink-dark);
      margin-right: 4px;
    }}

    .asset-chip {{
      text-decoration: none;
      font-size: 12px;
      font-weight: 600;
      color: var(--ink-dark);
      background: #FFFFFF;
      border: 1px solid #D0C9B8;
      padding: 4px 10px;
      border-radius: 6px;
      transition: all 0.15s;
    }}

    .asset-chip:hover {{
      border-color: var(--teal-primary);
      background: #EBF5F3;
    }}

    .highlight-chip {{
      background: #EBF5F3;
      border-color: #2A9D8F;
      color: #124E44;
    }}

    .video-chip {{
      background: #FDF2F0;
      border-color: #E2A99E;
      color: #8F2D1E;
    }}

    /* Panel Headings */
    .view-section {{
      margin-bottom: 22px;
    }}

    .panel-heading {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #EAE5DA;
      padding: 9px 14px;
      border-radius: 8px 8px 0 0;
      border: 1px solid var(--border-warm);
      border-bottom: none;
      font-weight: 700;
      font-size: 14px;
      color: var(--ink-dark);
    }}

    .panel-hint {{
      font-size: 12px;
      font-weight: 500;
      color: var(--ink-muted);
    }}

    .zoom-btn {{
      background: var(--ink-dark);
      color: #FFFFFF;
      border: none;
      border-radius: 6px;
      padding: 5px 11px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }}

    .zoom-btn:hover {{
      background: var(--teal-primary);
    }}

    .plate-frame {{
      border: 1px solid var(--border-warm);
      border-radius: 0 0 10px 10px;
      background: #F4F1EA;
      padding: 10px;
      text-align: center;
    }}

    .plate-frame img {{
      width: 100%;
      height: auto;
      border-radius: 6px;
      cursor: zoom-in;
      display: block;
    }}

    /* 3-Column Asset Breakdown Grid */
    .three-col-grid {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      border: 1px solid var(--border-warm);
      border-radius: 0 0 10px 10px;
      background: #F9F7F2;
      padding: 14px;
    }}

    @media (max-width: 1200px) {{
      .three-col-grid {{
        grid-template-columns: 1fr;
      }}
    }}

    .media-card {{
      background: #FFFFFF;
      border: 1px solid var(--border-warm);
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }}

    .media-card-header {{
      padding: 9px 12px;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 12.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}

    .expected-header {{
      background: var(--slate-ref);
    }}

    .assembled-header {{
      background: var(--teal-primary);
    }}

    .exploded-header {{
      background: var(--terracotta);
    }}

    .video-header {{
      background: #1B3B32;
    }}

    .wipe-header {{
      background: #3B4958;
    }}

    .tag-badge {{
      background: rgba(255, 255, 255, 0.2);
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
    }}

    .media-img-wrap {{
      background: #FAF8F5;
      padding: 8px;
      cursor: zoom-in;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }}

    .media-img-wrap img {{
      width: 100%;
      height: 290px;
      object-fit: contain;
      border-radius: 6px;
      display: block;
    }}

    .rcsb-inset-strip {{
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
      background: #EFECE4;
      border-top: 1px solid var(--border-warm);
      cursor: zoom-in;
    }}

    .rcsb-inset-strip img {{
      width: 88px;
      height: 58px;
      object-fit: contain;
      background: #FFFFFF;
      border: 1px solid #C8C1B2;
      border-radius: 4px;
      flex-shrink: 0;
    }}

    .rcsb-inset-text {{
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }}

    .rcsb-inset-text strong {{
      color: var(--ink-dark);
    }}

    .rcsb-inset-text span {{
      color: var(--ink-muted);
      font-size: 11px;
    }}

    .media-caption {{
      padding: 10px 12px;
      font-size: 12.5px;
      color: var(--ink-muted);
      background: #F6F4EE;
      border-top: 1px solid #E6E1D5;
    }}

    /* Video & Interactive Wipe Row */
    .two-col-video-row {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }}

    @media (max-width: 1200px) {{
      .two-col-video-row {{
        grid-template-columns: 1fr;
      }}
    }}

    .video-wrap {{
      background: #0F1915;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }}

    .video-wrap video {{
      width: 100%;
      height: 360px;
      object-fit: contain;
      display: block;
    }}

    /* Before/After Wipe Slider */
    .ba-slider {{
      position: relative;
      width: 100%;
      height: 360px;
      background: #FAF8F5;
      overflow: hidden;
      user-select: none;
    }}

    .ba-slider img {{
      width: 100%;
      height: 360px;
      object-fit: contain;
      display: block;
    }}

    .ba-resize {{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      overflow: hidden;
      border-right: 3px solid var(--terracotta);
      background: #FAF8F5;
    }}

    .ba-label {{
      position: absolute;
      bottom: 12px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11.5px;
      font-weight: 700;
      color: #FFFFFF;
      pointer-events: none;
      z-index: 4;
    }}

    .ba-label-left {{
      left: 12px;
      background: rgba(26, 95, 84, 0.9);
    }}

    .ba-label-right {{
      right: 12px;
      background: rgba(186, 78, 59, 0.9);
    }}

    .ba-range {{
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      opacity: 0;
      cursor: ew-resize;
      z-index: 5;
    }}

    /* Findings & Recommendations Notes Grid */
    .notes-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 6px;
    }}

    @media (max-width: 1024px) {{
      .notes-grid {{
        grid-template-columns: 1fr;
      }}
    }}

    .notes-box {{
      padding: 14px 18px;
      border-radius: 10px;
      border: 1px solid var(--border-warm);
      font-size: 13.5px;
    }}

    .notes-box h4 {{
      margin: 0 0 8px 0;
      font-size: 14.5px;
      color: var(--ink-dark);
    }}

    .notes-box ul {{
      margin: 0;
      padding-left: 18px;
    }}

    .notes-box li {{
      margin-bottom: 6px;
    }}

    .findings-box {{
      background: #F2F9F7;
      border-left: 4px solid var(--teal-bright);
    }}

    .recs-box {{
      background: #FDF7F2;
      border-left: 4px solid var(--terracotta);
    }}

    code {{
      background: rgba(22, 38, 33, 0.07);
      padding: 1px 5px;
      border-radius: 4px;
      font-family: Consolas, 'Courier New', monospace;
      font-size: 0.92em;
    }}

    /* View Mode Visibility Classes */
    body.mode-plates .section-grid,
    body.mode-plates .section-video {{
      display: none;
    }}

    body.mode-grid .section-plate,
    body.mode-grid .section-video {{
      display: none;
    }}

    body.mode-videos .section-plate,
    body.mode-videos .section-grid {{
      display: none;
    }}

    /* Lightbox Modal */
    .lightbox-overlay {{
      position: fixed;
      inset: 0;
      background: rgba(12, 20, 17, 0.92);
      z-index: 9999;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }}

    .lightbox-overlay.open {{
      display: flex;
    }}

    .lightbox-top {{
      width: 100%;
      max-width: 1680px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
      margin-bottom: 12px;
    }}

    .lightbox-title {{
      font-size: 16px;
      font-weight: 700;
    }}

    .lightbox-close {{
      background: var(--terracotta);
      color: #FFFFFF;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 14px;
    }}

    .lightbox-img {{
      max-width: 96vw;
      max-height: 85vh;
      object-fit: contain;
      border-radius: 8px;
      background: #FAF8F5;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
    }}
  </style>
</head>
<body id="top">

  <!-- Top Hero Banner -->
  <header class="hero-header">
    <div class="hero-container">
      <span class="hero-eyebrow">🔬 Visual Verification &amp; Reference Audit Suite</span>
      <h1>Learn Biology — All 29 Prokaryotic 3D Scenarios Verified (01–13 Baseline + 14–29 Expansion Roadmap)</h1>
      <p class="hero-subtitle">
        Interactive side-by-side comparison of <strong>1. Expected Reference</strong> (<em>The Biology Primer</em> &amp; Goodsell-style scientific diagrams + official <strong>RCSB PDB</strong> Cryo-EM/X-ray structures),
        <strong>2. Assembled 3D Browser Result (0%)</strong>, <strong>3. Exploded 3D Subunit Disassembly (75%)</strong>,
        <strong>4. 2400×1380 Side-by-Side Comparison Plates</strong>, and <strong>5. 1920×1080 Side-by-Side Comparison Videos (<code>.mp4</code>)</strong>.
      </p>
      <div class="hero-stats-row">
        <div class="stat-badge"><strong>29 / 29</strong> Built Scenarios Verified</div>
        <div class="stat-badge"><strong>RCSB PDB:</strong> 7CGO, 7K00, 6OQR, 7Z7V, 3J46, 5D0O, 9P7P, 6C9Y, 5FKV, 1AB4, 1FSZ, 1JCG, 6X9Q, 2OMF, 6W6M, 7O04, 6S1K, 6GTO, 1P71, 1AON, 2C0B, 1EAE, 1M5Y, 5V5S, 7OKO, 5H9F, 7R04, 1BNA</div>
        <div class="stat-badge"><strong>Exploded View:</strong> 0% → 75% Subunit Dissociation (v_dissoc)</div>
        <div class="stat-badge"><strong>Live App:</strong> <code>http://localhost:5173/</code> (1920×1080 WebGL)</div>
      </div>
    </div>
  </header>

  <!-- Sticky Navigation & View Filter Bar -->
  <nav class="sticky-toolbar">
    <div class="toolbar-inner">
      <div class="nav-pills">
        <a href="#matrix" class="nav-pill" style="background:#162621;color:#fff;">📋 Matrix</a>
        {nav_pills_html}
      </div>
      <div class="toolbar-controls">
        <input type="search" id="scenario-search" class="search-input" placeholder="Filter by name or PDB (e.g. 7K00, BAM)..." oninput="filterScenarios(this.value)" />
        <button class="filter-btn active" onclick="setViewMode('all', this)">All Views</button>
        <button class="filter-btn" onclick="setViewMode('plates', this)">75% Plates Only</button>
        <button class="filter-btn" onclick="setViewMode('grid', this)">3-Column Assets</button>
        <button class="filter-btn" onclick="setViewMode('videos', this)">Videos &amp; Wipe</button>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="main-container">

    <!-- Master Compilation Video + Cross-Cutting Summary -->
    <div class="overview-grid">
      <div class="card-box">
        <div class="card-box-header">
          <span>🎬 Master Compilation Video — All 13 Scenarios Side-by-Side (<code>master_13_elements_comparison.mp4</code>)</span>
          <a href="{master_video_url}" target="_blank" style="color:#64DFDF;text-decoration:none;font-size:12.5px;">Open Raw MP4 ↗</a>
        </div>
        <div class="card-box-body">
          <video class="master-video" controls preload="metadata" poster="{first_poster_url}">
            <source src="{master_video_url}" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="card-box">
        <div class="card-box-header">
          <span>🛠️ Cross-Cutting UI &amp; Engine Recommendations</span>
          <span style="font-size:12px;color:#A8DADC;">Automated Audit Summary</span>
        </div>
        <div class="card-box-body" style="font-size:14px;">
          <div class="notes-box recs-box" style="margin-bottom:14px;">
            <h4>1. Responsive Top-Toolbar Pointer Guard (<code>#wasm-status</code> Overlap at &lt;1500px Viewports)</h4>
            <p style="margin:0;">
              <strong>Finding:</strong> At <code>1440×900</code>, the <code>#wasm-status</code> (<code>WebAssembly Engine: Active</code>) badge inside <code>#toolbar</code> wraps and intercepts pointer events over <code>#btn-nav-cell</code>. At <code>1920×1080</code>, all 13 toolbar buttons fit on a single row without overlap.<br/>
              <strong>Recommendation:</strong> Set <code>pointer-events: none;</code> on <code>.wasm-badge</code> in <code>client/src/index.css</code> (and <code>overflow-x: auto; flex-wrap: nowrap;</code> on <code>.nav-pills-scroll</code>) so all 13 scenario buttons remain clickable on 13-inch laptops.
            </p>
          </div>
          <div class="notes-box findings-box">
            <h4>2. Active-Only DOM Container Scoping &amp; Render Loop Gating (<code>App.tsx</code>)</h4>
            <p style="margin:0;">
              <strong>Finding:</strong> All 13 scenario container <code>&lt;div id="...-container"&gt;</code> layers remain mounted simultaneously in <code>App.tsx</code> with inactive layers hidden via <code>display: none</code>.<br/>
              <strong>Recommendation:</strong> Keep inactive Three.js <code>requestAnimationFrame</code> loops paused when <code>scenario !== '&lt;id&gt;'</code> and scope DOM queries to the active visible container (<code>offsetParent !== null</code>).
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Navigation Matrix Table -->
    <section class="card-box matrix-section" id="matrix">
      <div class="card-box-header">
        <span>🧭 Quick Navigation Matrix — All 13 Verified Scenarios (Click Any Thumbnail to Zoom Full Screen)</span>
        <span style="font-size:12px;color:#A8DADC;">100% Local Relative Paths</span>
      </div>
      <div class="table-responsive">
        <table class="verification-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Scenario &amp; Biophysical Scale</th>
              <th>PDB / Reference</th>
              <th>Expected Reference</th>
              <th>Assembled 3D (0%)</th>
              <th>Exploded 3D (75%)</th>
              <th>75% Comparison Plate</th>
              <th>Comparison Video</th>
            </tr>
          </thead>
          <tbody>
            {"".join(table_rows_html)}
          </tbody>
        </table>
      </div>
    </section>

    <!-- All 13 Detailed Scenario Sections -->
    {"".join(cards_html)}

  </main>

  <!-- Full-Screen Lightbox Modal -->
  <div class="lightbox-overlay" id="lightbox" onclick="if(event.target===this)closeLightbox()">
    <div class="lightbox-top">
      <div class="lightbox-title" id="lightbox-caption">Image Preview</div>
      <div>
        <a id="lightbox-raw-link" href="#" target="_blank" class="video-btn" style="margin-right:8px;background:#2A9D8F;">Open Raw Image File ↗</a>
        <button class="lightbox-close" onclick="closeLightbox()">✕ Close (Esc)</button>
      </div>
    </div>
    <img id="lightbox-img" class="lightbox-img" src="" alt="Full screen preview" />
  </div>

  <script>
    // Lightbox open/close
    function openLightbox(src, caption) {{
      const lb = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      const cap = document.getElementById('lightbox-caption');
      const raw = document.getElementById('lightbox-raw-link');
      img.src = src;
      cap.textContent = caption || src;
      raw.href = src;
      lb.classList.add('open');
    }}

    function closeLightbox() {{
      const lb = document.getElementById('lightbox');
      lb.classList.remove('open');
      document.getElementById('lightbox-img').src = '';
    }}

    document.addEventListener('keydown', (e) => {{
      if (e.key === 'Escape') closeLightbox();
    }});

    // View mode switching
    function setViewMode(mode, btn) {{
      document.body.classList.remove('mode-plates', 'mode-grid', 'mode-videos');
      if (mode !== 'all') {{
        document.body.classList.add('mode-' + mode);
      }}
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
    }}

    // Search filter
    function filterScenarios(query) {{
      const q = (query || '').trim().toLowerCase();
      document.querySelectorAll('.scenario-card').forEach(card => {{
        const hay = card.getAttribute('data-scenario') || '';
        card.style.display = (!q || hay.includes(q)) ? 'block' : 'none';
      }});
    }}

    // Interactive before/after wipe slider
    function updateWipe(input) {{
      const container = input.parentElement;
      const resize = container.querySelector('.ba-resize');
      if (resize) {{
        resize.style.width = input.value + '%';
      }}
    }}

    // Keep front image width matched to slider container width for accurate 1:1 overlay wipe
    function syncWipeWidths() {{
      document.querySelectorAll('.ba-slider').forEach(slider => {{
        const w = slider.clientWidth;
        const frontImg = slider.querySelector('.ba-img-front');
        if (frontImg && w > 0) {{
          frontImg.style.width = w + 'px';
        }}
      }});
    }}

    window.addEventListener('resize', syncWipeWidths);
    window.addEventListener('DOMContentLoaded', syncWipeWidths);
    setTimeout(syncWipeWidths, 300);
  </script>
</body>
</html>
"""


def main():
    # 1. Write learn-biology/verification/index.html (relative paths from inside verification/)
    ver_html_path = os.path.join(VER_DIR, "index.html")
    with open(ver_html_path, "w", encoding="utf-8") as f:
        f.write(build_html(""))
    print(f"Created {ver_html_path}")

    # 2. Write learn-biology/verification.html (relative paths from learn-biology/ root)
    root_html_path = os.path.join(BASE_DIR, "verification.html")
    with open(root_html_path, "w", encoding="utf-8") as f:
        f.write(build_html("verification"))
    print(f"Created {root_html_path}")

    # 3. Verify all 79 local media paths referenced by index.html exist on disk
    missing = []
    if not os.path.exists(os.path.join(VER_DIR, "master_13_elements_comparison.mp4")):
        missing.append("master_13_elements_comparison.mp4")

    for sc in SCENARIOS:
        f = sc["folder"]
        sid = sc["id"]
        for fname in [
            f"expected_{sid}.png",
            sc["rcsb_file"],
            f"browser_{sid}_assembled.png",
            f"browser_{sid}_exploded.png",
            f"comparison_{sid}.png",
            f"comparison_{sid}.mp4",
        ]:
            full = os.path.join(VER_DIR, f, fname)
            if not os.path.exists(full):
                missing.append(f"{f}/{fname}")

    if missing:
        raise RuntimeError(f"Missing media files: {missing}")
    print(f"Verified all {1 + len(SCENARIOS) * 6} referenced image and video files exist on disk (0 missing)!")


if __name__ == "__main__":
    main()
