// @ts-nocheck
/**
 * ----------------------------------------------------------------------------
 * Whole Cell 3D Architecture Scene (1.5 µm scale)
 * Powered by WebAssembly Orbit Engine & Three.js WebGL
 * ----------------------------------------------------------------------------
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { OrganelleData } from '../types/biology';

if (typeof window !== 'undefined') {
  (window as any).THREE = THREE;
  (window as any).GLTFLoader = GLTFLoader;
}

export const CELL_ANATOMY_DATA: Record<string, OrganelleData> = {
  overview: {
    zone: 'Zone 0: Whole Cell Masterclass Overview',
    title: 'A Typical Prokaryotic Cell',
    scientific: 'Escherichia coli K-12 (Gram-Negative Bacterium)',
    phonetic: 'Pronounced: /ˌɛʃ.əˈrɪk.i.ə ˈkoʊ.laɪ/ (Named after Theodor Escherich)',
    subtitle: 'Complete Layer-by-Layer Architecture of a Self-Replicating Nanofactory',
    color: '#D1C2A5',
    colorName: 'Warm Biological Palette',
    scale: '1.5 µm × 0.8 µm (Volume ~1 µm³ | ~1 picogram mass)',
    abundance: 'Single autonomous unicellular organism (~2.4 million protein molecules)',
    composition: '4-layer cell envelope + periplasmic space + crowded cytoplasm + nucleoid DNA',
    description: 'Prokaryotes are single-celled organisms defined by the absence of a membrane-enclosed nucleus. Moving from the outside in, a Gram-negative bacterium like Escherichia coli is built from concentric functional layers: (1) an outermost hydrated polysaccharide Capsule and adhesive Pili/Fimbriae; (2) an asymmetric Lipopolysaccharide (LPS) Outer Membrane; (3) the Periplasmic Space—an oxidizing compartment housing the rigid Peptidoglycan (murein) cell wall; (4) the Inner Cytoplasmic Membrane, which acts as the cell\'s power grid by maintaining the proton-motive force; and (5) the interior Cytoplasm, a dense macromolecular gel containing 70S Ribosomes, metabolic hubs, protein microcompartments, extrachromosomal Plasmids, and the supercoiled Nucleoid chromosome.',
    analogy: 'Think of the prokaryotic cell as a self-replicating microscopic submarine with an open-floor-plan factory inside: its multi-layered hull (capsule, outer membrane, peptidoglycan wall, and periplasmic airlock) shields it from crushing osmotic pressure, its inner membrane acts as a 180-millivolt hydroelectric dam, and because there is no nuclear wall separating the blueprint library (nucleoid DNA) from the 3D printers (ribosomes), proteins are built directly off genetic blueprints as fast as they are read.',
    narration: 'Welcome to the Prokaryotic Cell Masterclass. We begin at the whole-cell scale with Escherichia coli K-12, a rod-shaped Gram-negative bacterium measuring 1.5 micrometers long by 0.8 micrometers wide. Unlike eukaryotic cells, prokaryotes have no membrane-bound nucleus: think of this cell as a pressurized microscopic submarine with an open-floor-plan factory inside. Moving from the outside in, the cell is protected by four concentric envelope layers: first, a slippery outer polysaccharide capsule; second, a selective lipopolysaccharide outer membrane; third, an aqueous moat called the periplasm that houses the rigid peptidoglycan cell wall; and fourth, the inner plasma membrane, which acts like a hydroelectric dam generating a 180-millivolt proton gradient. Inside that inner membrane lies the cytoplasm—a bustling macromolecular gel packed with 70S ribosomes, metabolic assembly lines, circular plasmids, and the supercoiled nucleoid chromosome. Click any layer or use the Guided Tour to peel back the cell step by step.',
    proteins: [
      { name: 'Coupled Expressome (RNAP–NusG–70S)', tag: 'PDB: 6X9Q', desc: 'Direct physical bridge linking RNA Polymerase transcription to 70S ribosomal translation in the open prokaryotic cytoplasm.', scenario: 'expressome' },
      { name: 'FtsZ Divisome Z-Ring', tag: 'PDB: 1FSZ', desc: 'Tubulin-homolog GTPase that polymerizes into a constricting cytokinetic ring at mid-cell to divide one bacterium into two.', scenario: 'ftsz' },
      { name: 'MreB Rod Elongasome', tag: 'PDB: 1JCG', desc: 'Actin-homolog helical tracks beneath the inner membrane that guide peptidoglycan wall synthesis to maintain the rod shape.', scenario: 'mreb' },
      { name: 'Biomolecular Monomers & Quantum Bonds', tag: 'Level 5 & 6', desc: 'All-atom chemical building blocks—ATP-Mg²⁺, peptidoglycan cross-links, phospholipids, and Watson-Crick base pairs.', scenario: 'atomic_chemistry' }
    ],
    drilldowns: [
      { label: '15. Compare All 3 Prokaryotic Envelopes (Gram− / Gram+ / Acid-Fast)', scenario: 'envelopes', badge: '2OMF / 3VMA' },
      { label: '14. Coupled Expressome (RNAP–NusG–70S Ribosome)', scenario: 'expressome', badge: '6X9Q' },
      { label: '12. Divisome FtsZ Cytokinetic Z-Ring', scenario: 'ftsz', badge: '1FSZ' },
      { label: '29. Level 5 & 6 Biomolecular Monomers & Quantum Bonds', scenario: 'atomic_chemistry', badge: '1BNA / RDKit' }
    ],
    camPos: new THREE.Vector3(0.54, 0.98, 10.8),
    camTarget: new THREE.Vector3(-0.6, 0.0, 0.0)
  },
  capsule: {
    zone: 'Zone 1: Outermost Surface Layer',
    title: 'Capsule, Pili & Biofilm Matrix',
    scientific: 'Glycocalyx Capsularis (K-Antigen) & Chaperone-Usher Fimbriae',
    phonetic: 'Pronounced: /ˈkæp.sjuːl/ • /ˌɡlaɪ.koʊˈkeɪ.lɪks/ (Greek: glykys "sweet" + kalyx "husk")',
    subtitle: 'Outermost Polysaccharide Hydration Cloak & Surface Adhesin Grappling Hooks',
    color: '#40916C',
    colorName: '#40916C Mint Glycocalyx',
    scale: 'Capsule: 100–400 nm thick | Type 1 Fimbriae: 7 nm × 1 µm',
    abundance: '1 continuous hydrated coat + 100–500 surface fimbriae/pili',
    composition: 'High-molecular-weight acidic polysaccharides (CPS), colanic acid, FimA/FimH rods & CsgA curli',
    description: 'The outermost layer contacting the external world. The capsule (glycocalyx) is a dense, heavily hydrated hydrogel of high-molecular-weight polysaccharides anchored to the outer membrane. Projecting through this coat are hundreds of hair-like Chaperone-Usher fimbriae (Type 1 pili tipped with FimH mannose-binding catch-bond lectins) and curli amyloid fibers (CsgA/CsgB). Together, they shield the bacterium against drying out, block bacteriophage viral attachment, disguise the cell from host immune phagocytes, and anchor communities into protective biofilms.',
    analogy: 'Think of the capsule as a slippery, water-retaining Teflon raincoat that prevents immune cells from getting a grip, while the fimbriae and curli fibers act like spring-loaded Velcro grappling hooks that lock Tighter when flowing fluids try to wash the bacterium away.',
    narration: 'Layer one, on the very outside of the bacterium, is the Capsule and Surface Adhesin zone. The capsule, or glycocalyx, is a 100-to-400-nanometer hydrogel woven from negatively charged polysaccharide chains. Think of it as a slippery, water-holding Teflon raincoat: it prevents the cell from drying out, blocks bacteriophage viruses from landing on the membrane, and stops host white blood cells from engulfing the bacterium. Extending right through this coat are hundreds of hair-like fimbriae and curli amyloid fibrils. Tipped with the catch-bond lectin FimH, these fibers work like spring-loaded Velcro grappling hooks that actually grip tighter under fluid shear stress and weave bacteria together into resilient biofilms.',
    proteins: [
      { name: 'Type 1 Fimbriae & FimH Catch-Bond Tip', tag: 'PDB: 6GTO', desc: 'Helical FimA rod assembled by the FimC chaperone and FimD outer membrane usher, tipped with the FimH mannose adhesin.', scenario: 'pili_fimbriae' },
      { name: 'CsgG Secretin & CsgA Curli Amyloid', tag: 'PDB: 4B0M', desc: 'Nonameric outer membrane beta-barrel extruding functional cross-beta amyloid fibers that form the structural scaffold of biofilms.', scenario: 'pili_fimbriae' },
      { name: 'Wza–Wzc Capsular Export Complex', tag: 'Octameric Barrel', desc: 'Trans-envelope polysaccharide polymerase and outer membrane octameric channel secreting K-antigen capsule polymers.', scenario: 'envelopes' }
    ],
    drilldowns: [
      { label: '19. Chaperone-Usher Fimbriae, FimH Catch-Bond & Curli Biofilm', scenario: 'pili_fimbriae', badge: '6GTO / 4B0M' },
      { label: '15. Comparative Prokaryotic Cell Envelopes', scenario: 'envelopes', badge: '2OMF / 3VMA' }
    ],
    camPos: new THREE.Vector3(-0.95, 0.35, 4.4),
    camTarget: new THREE.Vector3(-0.957, -0.285, 1.854)
  },
  wall: {
    zone: 'Zone 1: Outer Membrane & Peptidoglycan Exoskeleton',
    title: 'Outer Membrane & Peptidoglycan Wall',
    scientific: 'Membrana Externa (LPS) & Murein Sacculus',
    phonetic: 'Pronounced: /ˌpɛp.tɪ.doʊˈɡlaɪ.kæn/ • /ˈmjʊər.iːn/ (Latin: murus "wall")',
    subtitle: 'Asymmetric Lipopolysaccharide Armor & Cross-Linked Murein Exoskeleton',
    color: '#3F6636',
    colorName: '#3F6636 Forest Green Sandstone',
    scale: 'Outer Membrane: 7 nm | Peptidoglycan Sacculus: 3–6 nm (Gram−) or 30–80 nm (Gram+)',
    abundance: '1 continuous covalently closed macromolecular bag + ~2 million LPS molecules',
    composition: 'Outer Leaflet: Lipopolysaccharide (LPS) | Wall: Poly-(GlcNAc-MurNAc) + D-Ala/DAP peptide cross-links',
    description: 'Directly beneath the capsule lies the structural armor of the bacterium. In Gram-negative bacteria, this consists of two collaborative layers: first, an asymmetric Outer Membrane whose outer leaflet is packed with Lipopolysaccharide (LPS) exported across a 7-protein trans-envelope bridge (LptA–G) and studded with beta-barrel porins (OmpF) folded by the BAM insertase (BamA–E); and second, right beneath the outer membrane inside the periplasm, the Peptidoglycan (murein) cell wall. Built from alternating GlcNAc and MurNAc sugar chains cross-linked by short D-amino acid stems, the murein sacculus forms a single giant covalent bag steered by MreB actin cables that withstands 2 to 5 atmospheres of internal osmotic turgor pressure.',
    analogy: 'Imagine a high-pressure carbon-fiber mesh cage (the peptidoglycan sacculus) bolted directly to a chemical-proof armored shield (the LPS outer membrane) via millions of molecular rivets called Braun\'s lipoprotein. Without this mesh cage, the cell\'s internal water pressure—equal to a heavy truck tire—would cause it to burst instantly, which is exactly how penicillin kills bacteria.',
    narration: 'Stepping beneath the capsule, we reach the Outer Membrane and Peptidoglycan Cell Wall—the mechanical and chemical armor of the bacterium. In Gram-negative bacteria like E. coli, the outer membrane is a unique asymmetric shield: its inner face is phospholipid, while its outer face is tiled with tightly packed lipopolysaccharide, or LPS, delivered across the envelope by the Lpt seven-protein bridge and pierced by trimeric OmpF beta-barrel porins folded by the BAM complex. Immediately underneath that outer membrane, suspended in the periplasm and riveted to the outer membrane by Braun\'s lipoprotein, sits the peptidoglycan cell wall. Think of peptidoglycan as a single, seamless carbon-fiber chainmail bag woven from sugar chains and cross-linked peptide stems. Guided by sub-membrane MreB actin tracks, this mesh holds back two to five atmospheres of internal osmotic pressure—the pressure inside a truck tire—preventing the cell from bursting.',
    proteins: [
      { name: 'BAM Outer Membrane β-Barrel Insertase', tag: 'PDB: 5D0O', desc: 'Five-subunit machine (BamA–E) with a lateral gate that folds and inserts beta-barrel porins into the outer membrane without ATP.', scenario: 'bam' },
      { name: 'LptA–G Lipopolysaccharide Export Bridge', tag: 'PDB: 9P7P', desc: 'Continuous trans-envelope protein PEZ dispenser pushing amphipathic LPS molecules from the inner membrane to the outer leaflet.', scenario: 'lpt' },
      { name: 'MreB Rod Elongasome & PBP2 Transpeptidase', tag: 'PDB: 1JCG', desc: 'Helical actin-like filaments beneath the inner membrane that steer RodA and PBP2 to weave new peptidoglycan hoops.', scenario: 'mreb' },
      { name: 'Gram(−), Gram(+) & Acid-Fast Envelopes', tag: 'PDB: 2OMF', desc: 'Side-by-side comparison of thin Gram-negative murein, thick Gram-positive teichoic-acid walls, and waxy mycobacterial mycomembranes.', scenario: 'envelopes' }
    ],
    drilldowns: [
      { label: '07. BAM Complex Outer Membrane Insertase (BamA–E)', scenario: 'bam', badge: '5D0O' },
      { label: '08. LptA–G Lipopolysaccharide Trans-Envelope Bridge', scenario: 'lpt', badge: '9P7P' },
      { label: '13. MreB Actin Cytoskeleton & Rod Elongasome', scenario: 'mreb', badge: '1JCG / 6GBS' },
      { label: '15. Comparative Cell Envelopes (Gram− / Gram+ / Acid-Fast)', scenario: 'envelopes', badge: '2OMF / 3VMA' }
    ],
    camPos: new THREE.Vector3(-0.55, 0.45, 4.0),
    camTarget: new THREE.Vector3(-0.594, -0.182, 1.627)
  },
  membrane: {
    zone: 'Zone 1: Periplasmic Space & Inner Plasma Membrane',
    title: 'Periplasmic Space & Inner Membrane',
    scientific: 'Spatium Periplasmicum & Membrana Cytoplasmica',
    phonetic: 'Pronounced: /ˌpɛr.ɪˈplæz.əm/ (Greek: peri- "around" + plasma "formed substance")',
    subtitle: 'The Oxidizing Periplasmic Moat & The 180 mV Bioenergetic Power Grid',
    color: '#E2A824',
    colorName: '#E2A824 Golden Amber',
    scale: 'Periplasmic Space: 15–25 nm wide | Inner Phospholipid Bilayer: 4.5 nm thick',
    abundance: '~10–15% of total cell volume (Periplasm) + 1 continuous inner membrane',
    composition: 'Periplasmic gel (SurA, Skp, MalE, DsbA) + Inner Bilayer (75% PE, 20% PG, 5% Cardiolipin)',
    description: 'Here we see two intimately coupled compartments: the Periplasmic Space and the Inner Cytoplasmic Membrane. What is the periplasm? It is a 15-to-25-nanometer oxidizing compartment sandwiched between the outer and inner membranes. Because ATP cannot cross into the periplasm, it relies on specialized ATP-independent holdase chaperones like SurA to escort unfolded proteins safely to the outer membrane, and Venus-flytrap binding proteins like MalE to capture sugars and hand them to inner-membrane ABC transporters (MalFGK₂). Directly beneath the periplasm is the Inner Cytoplasmic Membrane—a hydrophobic phospholipid bilayer that serves as the bacterium\'s master bioenergetic power grid. Respiratory Complex I and Cytochrome bd oxidase pump protons (H⁺) out into the periplasm, creating a −140 to −180 mV electrochemical proton-motive force (Δp) that drives F₁F₀-ATP Synthase, SecYEG protein translocation, and AcrAB–TolC multidrug efflux.',
    analogy: 'Think of the Periplasm as a high-security castle moat and staging courtyard between the outer wall and the inner keep: scout proteins (MalE) catch incoming food deliveries, while escort guards (SurA) carry building materials to the outer wall. The Inner Membrane is the castle\'s hydroelectric dam: respiratory pumps push protons up into the periplasmic moat so they can rush back down through rotary turbines (ATP Synthase) to generate all the cell\'s electricity and ATP fuel.',
    narration: 'Moving deeper, we enter the Periplasmic Space and the Inner Cytoplasmic Membrane. What exactly is the periplasm? Think of it as a 20-nanometer castle moat and staging courtyard sandwiched between the outer membrane and the inner membrane. Unlike the cytoplasm, the periplasm is an oxidizing environment and contains no free ATP. Instead, cradle-shaped chaperones like SurA ferry unfolded outer-membrane proteins across this moat, while Venus-flytrap scout proteins like MalE snap shut around maltose sugars and deliver them to inner-membrane MalEFGK2 importers. Directly beneath the periplasm sits the Inner Cytoplasmic Membrane—the hydroelectric dam of the bacterial cell. Embedded in this 4.5-nanometer phospholipid bilayer, Respiratory Complex I oxidizes NADH and pumps protons out into the periplasmic moat, building up a 180-millivolt proton-motive force. As those protons rush back inward through the F1-F0 ATP Synthase rotary turbine, they spin its central camshaft to mint ATP, while SecYEG channels thread newly made proteins into the periplasm and AcrAB-TolC cannons pump out toxic antibiotics.',
    proteins: [
      { name: 'F₁F₀-ATP Synthase Rotary Dynamo', tag: 'PDB: 6OQR / 6RKW', desc: 'Rotary molecular turbine driven by periplasmic H⁺ influx (10 H⁺ per 360° turn) to synthesize 3 ATP molecules in its α₃β₃ head.', scenario: 'atp_synthase' },
      { name: 'Respiratory Complex I (NADH Dehydrogenase)', tag: 'PDB: 7Z7V', desc: 'L-shaped 530 kDa redox engine tunneling electrons down an 8 Fe-S cluster wire to pump 4 H⁺ into the periplasm per NADH.', scenario: 'complex_i' },
      { name: 'SecYEG Translocon & SecA ATPase Motor', tag: 'PDB: 3J46', desc: 'Hourglass transmembrane protein channel and two-helix-finger ATP piston exporting polypeptides into the periplasm or inner membrane.', scenario: 'secyeg' },
      { name: 'Periplasmic SurA Holdase & MalEFGK₂ ABC Importer', tag: 'PDB: 1M5Y / 1OMP', desc: 'ATP-independent periplasmic OMP chaperone relay and Venus-flytrap maltose ABC transporter spanning the inner membrane.', scenario: 'periplasmic_transport' },
      { name: 'AcrAB–TolC Tripartite Multidrug Efflux Pump', tag: 'PDB: 5V5S', desc: '32-nm trans-envelope proton-driven peristaltic cannon that captures antibiotics in the membrane and expels them outside the cell.', scenario: 'efflux_pump' }
    ],
    drilldowns: [
      { label: '04. F₁F₀-ATP Synthase Rotary Dynamo', scenario: 'atp_synthase', badge: '6OQR / 6RKW' },
      { label: '05. Respiratory Complex I (NADH Dehydrogenase)', scenario: 'complex_i', badge: '7Z7V' },
      { label: '06. SecYEG Protein Translocon & SecA Motor', scenario: 'secyeg', badge: '3J46' },
      { label: '24. Periplasmic Chaperones (SurA) & ABC Transport (MalEFGK₂)', scenario: 'periplasmic_transport', badge: '1M5Y / 1OMP' },
      { label: '25. AcrAB–TolC Multidrug Efflux Pump', scenario: 'efflux_pump', badge: '5V5S' }
    ],
    camPos: new THREE.Vector3(0.85, 1.35, -2.8),
    camTarget: new THREE.Vector3(0.625, 0.652, -1.348)
  },
  cytoplasm: {
    zone: 'Zone 2: Interior Cytosol & Metabolic Organelles',
    title: 'Cytoplasm, Chaperones & Metabolic Hubs',
    scientific: 'Cytosol Solutio, Chaperonins & Bacterial Microcompartments',
    phonetic: 'Pronounced: /ˈsaɪ.təˌplæz.əm/ (Greek: kytos "vessel" + plasma)',
    subtitle: 'Crowded Macromolecular Gel, Anfinsen Folding Cages & Icosahedral Reaction Rooms',
    color: '#B08968',
    colorName: '#B08968 Colloidal Bedding',
    scale: '300–400 mg/mL macromolecular density | Viscosity: 3–5× pure water',
    abundance: '~70% water, 30% macromolecules (~2.4 million proteins + metabolites)',
    composition: 'Enzymes (55%), RNA (20%), Lipids (10%), Metabolites/ATP/Ions (15%), BMCs & Granules',
    description: 'Crossing inside the inner membrane brings us into the Cytoplasm (cytosol). Far from a dilute bag of water, the bacterial cytoplasm is an ultra-crowded viscoelastic gel packed with 300 to 400 milligrams of macromolecules per milliliter—where proteins are separated by less than their own diameter! Despite lacking lipid-bound organelles, bacteria organize their cytoplasm using giant proteinaceous nanomachines: (1) 24-subunit Pyruvate Dehydrogenase metabolic hubs that channel substrates directly between active sites on swinging lipoyl arms; (2) GroEL–GroES barrel-shaped chaperonin cages and DnaK/DnaJ Hsp70 holdases that isolate misfolded proteins so they can fold safely; (3) 202-subunit icosahedral Bacterial Microcompartments (Carboxysomes) that trap volatile CO₂ or toxic aldehydes inside semi-permeable protein shells; and (4) Bacterioferritin iron cages, PHB carbon granules, magnetosome compass chains, and dormant endospores.',
    analogy: 'Imagine the cytoplasm not as a swimming pool, but as a packed Tokyo subway station at rush hour: molecules jostle millions of times per second via Brownian motion. To prevent newly made proteins from tangling in the crowd, GroEL–GroES acts like a private soundproof VIP dressing booth where a protein can fold in peace, while Bacterial Microcompartments act like geodesic greenhouse domes that lock volatile gases inside with their enzymes.',
    narration: 'Crossing through the inner membrane, we arrive inside the Cytoplasm. Forget the textbook myth of the cell as an empty bag of water: the bacterial cytoplasm is packed with 300 to 400 milligrams of protein and RNA per milliliter, more like a crowded rush-hour train station where molecules collide millions of times every second. To keep order in this crowd without lipid organelles, bacteria build specialized protein megastructures. First, giant Pyruvate Dehydrogenase cubes use swinging lipoyl crane arms to pass metabolic intermediates directly from one enzyme pocket to the next. Second, barrel-shaped GroEL-GroES chaperonin cages act like private VIP dressing rooms: they trap a misfolded protein inside a hydrophilic chamber for ten seconds so it can fold without clumping. Third, icosahedral Bacterial Microcompartments tile together 202 hexameric and pentameric plates into a geodesic protein shell that concentrates carbon dioxide around RuBisCO enzymes. Finally, storage granules like 24-subunit bacterioferritin iron vaults, PHB carbon droplets, magnetosome compass chains, and armored endospores allow prokaryotes to survive extreme starvation.',
    proteins: [
      { name: 'GroEL–GroES Chaperonin Cage & DnaK–DnaJ Network', tag: 'PDB: 1AON / 2KHO', desc: 'ATP-driven 14-subunit double-ring Anfinsen folding chamber and Hsp70 holdase system preventing cytoplasmic protein aggregation.', scenario: 'chaperones' },
      { name: 'Pyruvate Dehydrogenase Cube & Cytochrome bd Hub', tag: 'PDB: 1EAE / 6WTI', desc: 'Supramolecular 24-mer E2 transacetylase core with swinging lipoyl arms and high-affinity microaerobic quinol oxidase.', scenario: 'metabolic_hubs' },
      { name: 'Icosahedral Bacterial Microcompartment (Carboxysome)', tag: 'PDB: 7O04 / 3I82', desc: '202-subunit semi-permeable proteinaceous organelle (BMC-H/T/P shell) encapsulating RuBisCO and carbonic anhydrase.', scenario: 'microcompartment' },
      { name: 'Storage Granules, Magnetosomes & Endospores', tag: 'PDB: 1BFR / 7R04', desc: 'Bacterioferritin iron cages, PhaP-coated PHB carbon granules, MamK magnetite compass chains, and Ca-DPA dormant endospores.', scenario: 'storage_and_spores' }
    ],
    drilldowns: [
      { label: '21. Chaperone Network: GroEL–GroES Cage & DnaK–DnaJ', scenario: 'chaperones', badge: '1AON / 2KHO' },
      { label: '23. Metabolic & Respiratory Hubs (PDH Cube & Cyt bd)', scenario: 'metabolic_hubs', badge: '1EAE / 6WTI' },
      { label: '17. Icosahedral Bacterial Microcompartment & Carboxysome', scenario: 'microcompartment', badge: '7O04 / 3I82' },
      { label: '28. Storage Granules, Magnetosomes & Endospore Dormancy', scenario: 'storage_and_spores', badge: '1BFR / 7R04' }
    ],
    camPos: new THREE.Vector3(0.35, 0.95, 2.7),
    camTarget: new THREE.Vector3(0.35, -0.05, 0.40)
  },
  ribosomes: {
    zone: 'Zone 3: Protein Synthesis & RNA Quality Control',
    title: '70S Polyribosomes & Expressome',
    scientific: 'Ribonucleoprotein Ribozyme Complex (30S + 50S)',
    phonetic: 'Pronounced: /ˈraɪ.bəˌsoʊm/ (Ribonucleic acid + Greek: soma "body")',
    subtitle: 'Programmable 2.5 MDa Ribozyme Translation Factories & mRNA Lifecycle',
    color: '#E06D53',
    colorName: '#E06D53 Warm Coral Terracotta',
    scale: '25 nm diameter (210 Å × 290 Å | 2.5 MDa mass)',
    abundance: '20,000–70,000 ribosomes per actively growing cell (up to 40% of dry mass)',
    composition: 'Ribosomal RNA (65%: 16S, 23S, 5S) + 55 ribosomal proteins (35%)',
    description: 'Suspended throughout the cytoplasm and clustered around the nucleoid border are 20,000 to 70,000 70S Ribosomes—the universal molecular machines that translate genetic messenger RNA (mRNA) into proteins at 20 amino acids per second. Each 70S ribosome combines two subunits: the small 30S subunit (containing 16S rRNA), which reads three-letter mRNA codons using A1492/A1493 molecular fingers, and the large 50S subunit (containing 23S and 5S rRNA), whose Peptidyl Transferase Center (PTC) is an ancient RNA ribozyme that welds amino acids into polypeptide chains. Because bacteria have no nuclear membrane, the leading 70S ribosome physically docks onto RNA Polymerase via NusG and NusA bridges to form the Coupled Expressome (PDB: 6X9Q), translating mRNA while it is still being transcribed! Once an mRNA transcript has served its purpose, the membrane-tethered RNA Degradosome (RNase E + PNPase + RhlB helicase) shreds it back into reusable nucleotides within 2 to 5 minutes.',
    analogy: 'Think of the 70S Ribosome as a high-speed, two-part 3D molecular printer: the 30S bottom unit is a digital barcode scanner reading ticker-tape mRNA instructions three letters at a time, while the 50S top dome is a robotic welding head that stitches amino acid building blocks into a finished protein chain. In bacteria, this printer is bolted directly onto the Xerox copier (RNA Polymerase) as the Expressome, and old ticker tapes are recycled within minutes by the RNA Degradosome paper shredder.',
    narration: 'Zone three brings us to the 70S Polyribosomes—up to 70,000 programmable protein factories accounting for nearly forty percent of a rapidly dividing bacterium\'s weight. Think of each 70S ribosome as a two-part 3D molecular printer. Its small 30S subunit acts like a barcode scanner: it threads a messenger RNA ticker tape through its neck and uses 16S ribosomal RNA bases to proofread every three-letter codon against incoming transfer RNAs. Its large 50S subunit is a catalytic RNA welding dome—a true ribozyme—that stitches amino acids together at twenty peptide bonds per second. Because prokaryotes have no nuclear membrane, the leading ribosome physically clips onto RNA Polymerase via the NusG bridge, forming the Coupled Expressome so translation happens in lockstep with transcription. And when an mRNA message is no longer needed, the inner-membrane RNA Degradosome—built from RNase E, RhlB helicase, and the PNPase exoribonuclease ring—shreds the transcript back into fresh nucleotides in just three minutes.',
    proteins: [
      { name: '70S Ribosome Ribozyme Translation Factory', tag: 'PDB: 7K00', desc: 'Complete 2.0 Å cryo-EM holoenzyme showing 30S decoding center, 50S Peptidyl Transferase Center, A/P/E-site tRNAs, and nascent peptide.', scenario: 'ribosome' },
      { name: 'Coupled Transcription–Translation Expressome', tag: 'PDB: 6X9Q', desc: 'RNAP holoenzyme physically bridged to the leading 70S ribosome by NusG and NusA, preventing premature Rho termination.', scenario: 'expressome' },
      { name: 'Membrane-Tethered RNA Degradosome', tag: 'PDB: 2C0B / 5M3P', desc: 'RNase E tetramer, RhlB DEAD-box helicase, enolase, and trimeric PNPase phosphorolytic ring recycling mRNA transcripts.', scenario: 'rna_degradosome' }
    ],
    drilldowns: [
      { label: '03. 70S Ribosome & Polysome Translation Factory', scenario: 'ribosome', badge: '7K00 (2.0 Å)' },
      { label: '14. Coupled Transcription–Translation Expressome', scenario: 'expressome', badge: '6X9Q' },
      { label: '22. Bacterial RNA Degradosome & mRNA Decay Factory', scenario: 'rna_degradosome', badge: '2C0B / 5M3P' }
    ],
    camPos: new THREE.Vector3(2.10, 0.85, 1.55),
    camTarget: new THREE.Vector3(1.574, 0.356, 0.293),
    hasDrilldown: true
  },
  nucleoid: {
    zone: 'Zone 3: Master Chromosome, Replication & Transcription',
    title: 'The Nucleoid & Genome Engines',
    scientific: 'Bacterial Chromosome (4.64 Mbp Circular dsDNA Genophore)',
    phonetic: 'Pronounced: /ˈnjuː.kli.ɔɪd/ (Latin: nucleus + Greek: -oeides "resembling")',
    subtitle: '1,000-Fold Supercoiled Chromatin Skein, Replisome & Transcription Machinery',
    color: '#7209B7',
    colorName: '#7209B7 Royal Amethyst DNA',
    scale: '4.64 Mbp (~1.5 mm linear DNA compacted into a ~0.5 µm³ nucleoid)',
    abundance: '1 master circular chromosome (~4,300 genes; 2–4 active replication forks)',
    composition: 'Closed circular dsDNA (80%) + Nucleoid-Associated Proteins (10%) + nascent RNA (10%)',
    description: 'At the heart of the cytoplasm lies the Nucleoid—the non-membrane-enclosed region housing Escherichia coli\'s single circular chromosome of 4.64 million base pairs. If stretched straight, this DNA molecule would measure 1.5 millimeters long—1,000 times longer than the entire bacterial cell! How does the cell pack 1.5 millimeters of DNA into a 1-micrometer space while simultaneously reading and copying it? Through three coordinated systems: (1) Architectural Compaction & Topology—Nucleoid-Associated Proteins (IHF and HU bending DNA into 160° U-turns, H-NS bridging silent genes, and MukBEF SMC condensin clamps) organize the chromosome into ~400 plectonemic loop domains, while DNA Gyrase (Topoisomerase II) burns ATP to pump negative supercoils into the helix; (2) Transcription—RNA Polymerase holoenzyme (with Sigma-70) locates promoters and transcribes genes at 50 nucleotides per second; and (3) Replication & Division—the 10-subunit DNA Polymerase III Replisome copies both leading and lagging strands simultaneously at 1,000 base pairs per second ahead of FtsZ Z-ring cell division.',
    analogy: 'Packing the 1.5-millimeter chromosome into a 1-micrometer bacterium is equivalent to coiling 500 meters of headphone cable inside a small backpack—while still being able to pull out any exact centimeter of wire to read or copy at 1,000 letters per second without a single tangle! IHF/HU and MukBEF act as cable organizers, DNA Gyrase acts as a swivel detangler that cuts one wire, passes the other through, and welds it shut, and the Pol III Replisome is a twin-engine high-speed photocopier.',
    narration: 'At the center of the cell lies the Nucleoid—the master genetic control center of Escherichia coli. This single circular chromosome contains 4.64 million base pairs encoding 4,300 genes. If you stretched this DNA out straight, it would be 1.5 millimeters long—one thousand times longer than the cell itself! Packing it inside the nucleoid is like coiling 500 meters of cable inside a backpack without a single knot. Bacteria achieve this feat using Nucleoid-Associated Proteins: IHF and HU bend DNA into sharp 160-degree U-turns, H-NS bridges and silences foreign genes, MukBEF condensin rings clamp macrodomain loops, and DNA Gyrase acts as a molecular swivel—slicing one DNA double helix, passing another strand right through the break, and resealing it to introduce negative supercoils. Meanwhile, RNA Polymerase patrols these loops transcribing genes into mRNA at 50 nucleotides per second, and the twin-engine DNA Polymerase III Replisome unzips and duplicates the entire genome at an astonishing 1,000 base pairs per second before the FtsZ divisome ring pinches the cell in two.',
    proteins: [
      { name: 'Nucleoid-Associated Proteins (IHF, HU, H-NS & MukBEF)', tag: 'PDB: 1P71 / 3EUH', desc: 'Architectural proteins bending DNA 160°, bridging plectonemic supercoiled loops, and organizing chromosomal macrodomains.', scenario: 'nucleoid' },
      { name: 'RNA Polymerase Holoenzyme (α₂ββ\'ω + σ⁷⁰)', tag: 'PDB: 6C9Y', desc: '450 kDa transcription machine recognizing −35/−10 promoters, melting a 13-bp DNA bubble, and synthesizing RNA.', scenario: 'rnap' },
      { name: 'DNA Polymerase III Replisome Holoenzyme', tag: 'PDB: 5FKV', desc: 'Asymmetric 10-subunit replication factory coupling DnaB helicase unwinding to Simultaneous leading and trombone lagging strand synthesis.', scenario: 'pol_iii' },
      { name: 'DNA Gyrase (Type IIA Topoisomerase)', tag: 'PDB: 1AB4 / 6RKU', desc: 'GyrA₂GyrB₂ molecular swivel that introduces negative supercoils via transient double-strand breaks; target of ciprofloxacin.', scenario: 'gyrase' },
      { name: 'Divisome FtsZ Cytokinetic Z-Ring', tag: 'PDB: 1FSZ / 6PL5', desc: 'GTP-treadmilling tubulin homolog tethered by FtsA and ZipA that constricts the mid-cell septum after nucleoid segregation.', scenario: 'ftsz' }
    ],
    drilldowns: [
      { label: '20. Bacterial Nucleoid & NAP Compaction (IHF / H-NS / MukBEF)', scenario: 'nucleoid', badge: '1P71 / 3EUH' },
      { label: '09. RNA Polymerase Transcription Holoenzyme', scenario: 'rnap', badge: '6C9Y' },
      { label: '10. DNA Polymerase III Replisome Factory', scenario: 'pol_iii', badge: '5FKV' },
      { label: '11. DNA Gyrase Topoisomerase II Supercoiling Engine', scenario: 'gyrase', badge: '1AB4 / 6RKU' },
      { label: '12. Divisome FtsZ Cytokinetic Z-Ring', scenario: 'ftsz', badge: '1FSZ' }
    ],
    camPos: new THREE.Vector3(0.12, 1.65, 2.15),
    camTarget: new THREE.Vector3(0.098, 0.647, 0.304)
  },
  plasmid: {
    zone: 'Zone 3: Horizontal Gene Transfer, Secretion & Phage Immunity',
    title: 'Plasmids, Conjugation & CRISPR Defense',
    scientific: 'Extrachromosomal Replicons, Secretion Nanomachines & Antiphage Immunity',
    phonetic: 'Pronounced: /ˈplæz.mɪd/ (From cytoplasm + -id)',
    subtitle: 'Mobile Genetic Flash Drives, Trans-Envelope Weapons (T3SS/T4SS/T6SS) & CRISPR–Cas',
    color: '#00B4D8',
    colorName: '#00B4D8 Electric Azure Cyan',
    scale: 'Plasmids: 2–200 kbp (50–150 nm rings) | Secretion Injectisomes: 35–80 nm',
    abundance: '1 to 50+ plasmid copies per cell + adaptive CRISPR surveillance arrays',
    composition: 'Covalently closed circular dsDNA (cccDNA), T3SS/T4SS/T6SS complexes & CRISPR–Cascade/EcoRI',
    description: 'Floating in the cytoplasm alongside the main nucleoid are Plasmids—small, autonomously replicating circular DNA rings (2 to 200 kilobase pairs). Plasmids are the key drivers of rapid bacterial evolution and horizontal gene transfer: they carry "plug-and-play" gene cassettes for antibiotic resistance (such as β-lactamase), virulence effectors, and heavy-metal pumps. Using Type IV Secretion Systems (T4SS conjugative pili), a donor bacterium can reel in a neighbor and pump a single-stranded copy of a plasmid directly across both cell envelopes! Related trans-envelope nanomachines include the Type III Secretion System (T3SS molecular syringe injecting effectors into host cells) and the Type VI Secretion System (T6SS spring-loaded contractile speargun). Conversely, to protect the cell against hostile foreign DNA and invading bacteriophage viruses, bacteria deploy innate Restriction–Modification enzymes (EcoRI) and adaptive RNA-guided CRISPR–Cascade / Cas9 immune surveillance complexes.',
    analogy: 'If the main nucleoid chromosome is the bacterium\'s pre-installed operating system, Plasmids are shareable USB flash drives loaded with survival apps like antibiotic resistance. T4SS Conjugative Pili act as a high-speed data cable to copy those flash drives into neighboring bacteria, T3SS and T6SS act as hypodermic syringes and spring-loaded harpoons, and CRISPR–Cas acts as an adaptive antivirus scanner that stores mugshots of past viral invaders to shred them on sight.',
    narration: 'Here we see Plasmids—small circular DNA rings floating independently in the cytoplasm. If the main chromosome is the cell\'s operating system, think of plasmids as shareable USB flash drives loaded with plug-and-play survival apps, such as beta-lactamase enzymes that destroy penicillin or multidrug efflux pumps. Bacteria trade these genetic flash drives with neighbors through horizontal gene transfer using the Type 4 Secretion System, which extends a conjugative pilus grappling hook and pumps single-stranded plasmid DNA across both cell envelopes. Alongside conjugation, bacteria wield Type 3 Secretion System molecular syringes and Type 6 spring-loaded contractile crossbows. Finally, because foreign DNA can also come from deadly bacteriophage viruses, bacteria guard their cytoplasm with two layers of immunity: innate EcoRI restriction enzymes that chop up unmethylated viral DNA, and adaptive CRISPR-Cascade and Cas9 complexes that use stored viral RNA mugshots to hunt down and shred invading phage genomes.',
    proteins: [
      { name: 'Bacterial Secretion Nanomachines (T3SS, T4SS & T6SS)', tag: 'PDB: 7OKO / 7AH9 / 6H3L', desc: 'Trans-envelope virulence injectisome needle (7OKO), T4SS conjugative plasmid transfer complex (7AH9), and T6SS contractile speargun (6H3L).', scenario: 'secretion_systems' },
      { name: 'CRISPR–Cascade, Cas9 & EcoRI Phage Defense', tag: 'PDB: 5H9F / 1VY8 / 1ERI', desc: 'RNA-guided R-loop adaptive immunity surveillance complexes and palindromic restriction endonuclease dimers.', scenario: 'crispr_defense' },
      { name: 'AcrAB–TolC Multidrug Resistance Efflux Cannon', tag: 'PDB: 5V5S', desc: 'Tripartite trans-envelope RND efflux pump often up-regulated alongside plasmid-borne beta-lactamase resistance.', scenario: 'efflux_pump' }
    ],
    drilldowns: [
      { label: '26. Trans-Envelope Secretion Systems (T3SS, T4SS Conjugation & T6SS)', scenario: 'secretion_systems', badge: '7OKO / 7AH9 / 6H3L' },
      { label: '27. Phage Defense: CRISPR–Cascade, Cas9 & EcoRI Restriction', scenario: 'crispr_defense', badge: '5H9F / 1VY8 / 1ERI' },
      { label: '25. AcrAB–TolC Multidrug Resistance Efflux Pump', scenario: 'efflux_pump', badge: '5V5S' }
    ],
    camPos: new THREE.Vector3(-0.06, 0.95, 2.05),
    camTarget: new THREE.Vector3(-0.058, 0.184, 0.576)
  },
  flagellum: {
    zone: 'Zone 2: Rotary Motility & Chemosensory Navigation',
    title: 'Flagellar Rotary Motor & Chemotaxis',
    scientific: 'FliC Helical Propeller, 7CGO Basal Body & 6S1K Chemoreceptor Array',
    phonetic: 'Pronounced: /fləˈdʒɛl.əm/ (Latin: flagellum "whip")',
    subtitle: '1,000 RPM Proton-Driven Rotary Turbine & Hexagonal Chemical Nose Array',
    color: '#0077B6',
    colorName: '#0077B6 Marine Propulsion',
    scale: 'Filament: 20 nm × 10–15 µm | Basal Motor: 45 nm × 51 nm (PDB: 7CGO)',
    abundance: '4 to 8 peritrichous flagella + ~15,000 polar MCP chemoreceptors',
    composition: 'MotAB H⁺ stators, FliG/M/N C-ring switch, FliF MS-ring, FlgI/H bushings, FlgE hook, FliC filament',
    description: 'Anchoring the bacterial propulsion system across all four layers of the cell envelope is the Flagellar Rotary Motor—one of nature\'s most extraordinary nanomachines. Powered not by ATP, but directly by protons (H⁺) rushing inward through transmembrane MotA5MotB2 stator channels down the proton-motive force, electrostatic gears on MotA push the 45-nanometer FliG C-ring rotor at up to 1,000 revolutions per minute (100 Hz). Torque travels up the axial rod through frictionless P-ring and L-ring bushings in the cell wall and outer membrane, bends 90° through the flexible FlgE universal joint hook, and spins a 10-micrometer hollow FliC helical propeller at 30 cell lengths per second! How does the motor know which way to swim? At the cell pole sits a crystal-like hexagonal array of Methyl-Accepting Chemotaxis Proteins (MCPs, PDB: 6S1K) coupled to CheA histidine kinases. When attractants bind, the array keeps the motor spinning Counter-Clockwise (CCW) so all flagella bundle into a smooth forward "Run"; when nutrients drop, CheA phosphorylates CheY-P, which binds the C-ring and flips rotation to Clockwise (CW), splaying the bundle into a random "Tumble" to reorient the bacterium. Across the prokaryotic kingdom, bacteria also use Type IV Pilus grappling hooks, periplasmic spirochete endoflagella, and flavobacterial gliding tracks.',
    analogy: 'The flagellar motor is a true electric rotary outboard motor built from proteins: proton flow through MotAB stators acts as the electric current, the C-ring and MS-ring form the spinning armature, the P- and L-rings are greased ball bearings through the hull, the hook is a universal drive-shaft joint, and the filament is a marine screw propeller. Steering this motor is the polar MCP chemosensory array—a molecular "smart nose" with short-term methylation memory that plays a game of "hotter or colder" to guide the cell toward food.',
    narration: 'Our final stop on the Whole Cell tour is the Flagellar Rotary Motor and Chemosensory Navigation system. Embedded across the inner membrane, peptidoglycan wall, and outer membrane, the flagellar basal body is a true 45-nanometer rotary electric motor. Instead of burning ATP, it runs directly on proton current: as protons flow inward through MotA-MotB stator channels, they spin the cytoplasmic C-ring gear at up to 1,000 revolutions per minute. That torque travels up a central drive shaft through frictionless P-ring and L-ring sleeve bearings, bends around a flexible universal joint called the hook, and whips a 10-micrometer helical propeller to drive the bacterium forward at thirty body lengths per second. How does a bacterium steer without eyes? At the cell pole sits a hexagonal lattice of chemoreceptor dimers—a molecular nose with built-in chemical memory. When the cell senses rising nutrients, its motors spin counter-clockwise in a smooth forward Run; when nutrients fall, phosphorylated CheY-P messengers flip the motor switch clockwise, triggering a brief Tumble to pick a new direction. You can now click any of the 3D drill-down buttons below to inspect the Flagellar Motor, alternative Prokaryotic Motility Modes, or the Chemosensory Array in full atomic detail.',
    proteins: [
      { name: 'Bacterial Flagellar Rotary Motor & Stators', tag: 'PDB: 7CGO / 6YKM', desc: 'Complete 45 nm cryo-EM basal body (C-ring, MS-ring, Rod, P/L-rings, Hook) driven by pentameric MotA₅MotB₂ proton turbines.', scenario: 'motor' },
      { name: 'Chemosensory Transduction Array (MCP–CheA–CheW)', tag: 'PDB: 6S1K / 3JA6', desc: 'Hexagonal trimers-of-dimers receptor lattice amplifying nanomolar chemical gradients to switch flagellar rotation via CheY-P.', scenario: 'chemosensory_mcp' },
      { name: 'Prokaryotic Motility Modes: Pili, Spirochete & Gliding', tag: 'PDB: 6W6M / 3JC8', desc: 'Comparative non-flagellar locomotion engines: Type IV pilus grappling hooks, periplasmic endoflagella, and SprB rotary gliding tracks.', scenario: 'motility_modes' }
    ],
    drilldowns: [
      { label: '02. Bacterial Flagellar Rotary Motor (Cryo-EM Basal Body)', scenario: 'motor', badge: '7CGO / 6YKM' },
      { label: '18. Chemosensory Transduction Array (MCP–CheA–CheW)', scenario: 'chemosensory_mcp', badge: '6S1K / 3JA6' },
      { label: '16. Prokaryotic Motility Modes (Pili Twitching, Spirochete & Gliding)', scenario: 'motility_modes', badge: '6W6M / 3JC8' }
    ],
    camPos: new THREE.Vector3(-4.50, 0.30, 4.60),
    camTarget: new THREE.Vector3(-3.792, -0.896, 1.741),
    hasDrilldown: true
  }
};

export const CELL_LANDMARKS = [
  {
    id: 'label-membrane',
    key: 'membrane',
    name: 'periplasmic space & membrane',
    color: '#E2A824',
    badge: 'MEMBRANE',
    pos: new THREE.Vector3(0.625, 0.652, -1.348), // Upper golden plasma membrane lip
    normal: new THREE.Vector3(0.1, 0.75, -0.65).normalize()
  },
  {
    id: 'label-nucleoid',
    key: 'nucleoid',
    name: 'nucleoid',
    color: '#7209B7',
    badge: 'dsDNA',
    pos: new THREE.Vector3(0.098, 0.647, 0.304), // Top crest loop of supercoiled chromosome
    normal: new THREE.Vector3(0.0, 0.85, 0.5).normalize()
  },
  {
    id: 'label-ribosomes',
    key: 'ribosomes',
    name: 'ribosomes',
    color: '#E06D53',
    badge: '70S RIBO',
    pos: new THREE.Vector3(1.574, 0.356, 0.293), // Prominent individual ribosome bead on floor
    normal: new THREE.Vector3(0.35, 0.75, 0.55).normalize()
  },
  {
    id: 'label-plasmid',
    key: 'plasmid',
    name: 'plasmids',
    color: '#00B4D8',
    badge: 'PLASMID',
    pos: new THREE.Vector3(-0.058, 0.184, 0.576), // Top rim of front circular blue plasmid ring
    normal: new THREE.Vector3(0.0, 0.65, 0.75).normalize()
  },
  {
    id: 'label-cytoplasm',
    key: 'cytoplasm',
    name: 'cytoplasm & proteins',
    color: '#B08968',
    badge: 'CYTOSOL',
    pos: new THREE.Vector3(0.35, -0.05, 0.40), // Exposed colloidal bedding floor
    normal: new THREE.Vector3(0.1, 0.75, 0.65).normalize()
  },
  {
    id: 'label-wall',
    key: 'wall',
    name: 'cell wall',
    color: '#3F6636',
    badge: 'MUREIN WALL',
    pos: new THREE.Vector3(-0.594, -0.182, 1.627), // Cut porous green sandstone wall face
    normal: new THREE.Vector3(-0.25, -0.2, 0.95).normalize()
  },
  {
    id: 'label-capsule',
    key: 'capsule',
    name: 'capsule',
    color: '#40916C',
    badge: 'GLYCOCALYX',
    pos: new THREE.Vector3(-0.957, -0.285, 1.854), // Outer translucent capsule shell boundary
    normal: new THREE.Vector3(-0.35, -0.2, 0.9).normalize()
  },
  {
    id: 'label-flagellum',
    key: 'flagellum',
    name: 'flagellum & motor',
    color: '#0077B6',
    badge: 'PROPULSION',
    pos: new THREE.Vector3(-3.792, -0.896, 1.741), // Trailing sinusoidal flagellar filament
    normal: new THREE.Vector3(-0.85, -0.15, 0.5).normalize()
  }
];

export const CELL_TOUR_STOPS = [
  'overview', 'capsule', 'wall', 'membrane', 'cytoplasm', 'ribosomes', 'nucleoid', 'plasmid', 'flagellum'
];

export class CellViewerScene {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.voiceService = options.voiceService || window.voiceService;
    this.onSelectOrganelle = options.onSelectOrganelle || (() => {});
    this.onTourStepChange = options.onTourStepChange || (() => {});
    this.onWasmStatus = options.onWasmStatus || (() => {});
    this.onShowSubtitles = options.onShowSubtitles || (() => {});
    this.onHideSubtitles = options.onHideSubtitles || (() => {});

    this.active = false;
    this.disposed = false;
    this.isAutoRotating = false;
    this.showLabels = true;
    this.currentActiveTarget = null;

    // Three.js Core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.animFrameId = null;
    this.soupPoints = null;
    this.cellRoot = null;

    // SVG and Labels
    this.svgOverlay = null;
    this.labelsContainer = null;
    this.microCanvas = null;
    this.microCtx = null;
    this.microAngle = 0;

    // WebAssembly Orbit Engine
    this.wasm = null;

    // Camera Transition State
    this.camTransition = {
      active: false,
      startTime: 0,
      duration: 1200,
      startPos: new THREE.Vector3(),
      endPos: new THREE.Vector3(),
      startTarget: new THREE.Vector3(),
      endTarget: new THREE.Vector3(),
      currentTarget: new THREE.Vector3(-0.6, 0.0, 0.0)
    };

    // User Pointer / Touch
    this.isPointerDown = false;
    this.pointerButton = 0;
    this.shiftDown = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;

    // Tour state
    this.tourActive = false;
    this.tourPlaying = false;
    this.currentTourStep = 0;
    this.tourStepId = 0;
    this.tourPhase = 'idle'; // 'idle' | 'narrating' | 'cooldown' | 'reading'
    this.tourCooldownTimer = 0;
    this.tourReadingTimer = 0;
    this.TOUR_COOLDOWN_DURATION = 3000;
    this.TOUR_READING_DURATION = 10000;
    this.lastTourTick = 0;
    this.tourTtsEnabled = true;

    // Bound listeners for cleanup
    this._onPointerDown = this.handlePointerDown.bind(this);
    this._onPointerMove = this.handlePointerMove.bind(this);
    this._onPointerUp = this.handlePointerUp.bind(this);
    this._onWheel = this.handleWheel.bind(this);
    this._onKeyDown = this.handleKeyDown.bind(this);
    this._onResize = this.handleResize.bind(this);
  }

  async init() {
    // 1. Initialize WebAssembly Core Engine
    try {
      const wasmResponse = await fetch('/wasm/orbit_engine.wasm');
      const wasmBytes = await wasmResponse.arrayBuffer();
      if (this.disposed) return this;
      const wasmModule = await WebAssembly.instantiate(wasmBytes, {});
      this.wasm = wasmModule.instance.exports;
      this.wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
      if (this.onWasmStatus) this.onWasmStatus('WebAssembly Engine: Active');
    } catch (err) {
      console.warn('[-] Failed to load WebAssembly module, using JS fallback:', err);
      if (this.onWasmStatus) this.onWasmStatus('WebAssembly: JS Fallback');
    }

    if (this.disposed) return this;

    // 2. Three.js Scene, Camera, and Studio Lighting Setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFAF8F5);

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.94;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.canvas = this.renderer.domElement;
    this.canvas.id = 'gl-canvas';

    // Clear any previous orphaned canvas before mounting
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.canvas);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.72);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFAF0, 1.45);
    keyLight.position.set(6.5, 9.5, 7.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0004;
    keyLight.shadow.camera.near = 1.0;
    keyLight.shadow.camera.far = 30.0;
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xE0F0F8, 0.65);
    fillLight.position.set(-8.0, 3.5, 5.0);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xFDF8EE, 0.55);
    rimLight.position.set(0.0, -6.0, -8.0);
    this.scene.add(rimLight);

    const groundBounce = new THREE.DirectionalLight(0xD8C8B0, 0.35);
    groundBounce.position.set(0, -10, 0);
    this.scene.add(groundBounce);

    // 3. Build Procedural Materials and Load GLB
    this.loadCellModel();

    // 4. Cytoplasmic Solute Colloidal Cloud
    this.buildSoluteCloud();

    // 5. Connect Overlays
    this.svgOverlay = document.getElementById('leader-lines-svg');
    this.labelsContainer = document.getElementById('labels-container');
    this.microCanvas = document.getElementById('micro-canvas');
    if (this.microCanvas) {
      this.microCtx = this.microCanvas.getContext('2d');
    }

    // 6. Connect Events
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    this.canvas.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    this.canvas.addEventListener('wheel', this._onWheel, { passive: false });
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('resize', this._onResize);

    return this;
  }

  createWallPorousTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#3F6636');
    grad.addColorStop(0.35, '#567A4A');
    grad.addColorStop(0.68, '#87704E');
    grad.addColorStop(1.0, '#AA6848');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    const imgData = ctx.getImageData(0, 0, 1024, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 28;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const numPores = 160;
    for (let i = 0; i < numPores; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 512;
      const pr = 3.5 + Math.random() * 9.5;
      const pGrad = ctx.createRadialGradient(px - pr * 0.2, py - pr * 0.2, pr * 0.1, px, py, pr);
      pGrad.addColorStop(0, '#261C14');
      pGrad.addColorStop(0.65, '#48382A');
      pGrad.addColorStop(0.9, 'rgba(72, 56, 42, 0.45)');
      pGrad.addColorStop(1.0, 'transparent');
      ctx.fillStyle = pGrad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  createCytoplasmicSoupTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#D4C6AA';
    ctx.fillRect(0, 0, 1024, 1024);

    const numMicroDots = 6500;
    const microColors = ['#EAE2D2', '#C2B193', '#F4EDE0', '#B5A484', '#DFD3BC', '#E2D8C0'];
    for (let i = 0; i < numMicroDots; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const r = 0.6 + Math.random() * 1.4;
      ctx.fillStyle = microColors[(Math.random() * microColors.length) | 0];
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const numProteins = 1400;
    const proteinColors = [
      'rgba(180, 95, 75, 0.45)',
      'rgba(70, 130, 95, 0.40)',
      'rgba(195, 145, 55, 0.45)',
      'rgba(110, 85, 135, 0.40)',
      'rgba(75, 115, 155, 0.40)',
      'rgba(150, 130, 110, 0.50)'
    ];

    for (let i = 0; i < numProteins; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 1024;
      const pr = 2.0 + Math.random() * 4.6;
      const grad = ctx.createRadialGradient(px - pr * 0.25, py - pr * 0.25, pr * 0.1, px, py, pr);
      const col = proteinColors[(Math.random() * proteinColors.length) | 0];
      grad.addColorStop(0, col.replace(/[\d\.]+\)$/, '0.75)'));
      grad.addColorStop(0.7, col);
      grad.addColorStop(1.0, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }

    const imgData = ctx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 16;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    return texture;
  }

  createNucleoidRugoseMaps() {
    const size = 512;
    const canvasColor = document.createElement('canvas');
    canvasColor.width = size;
    canvasColor.height = size;
    const ctxColor = canvasColor.getContext('2d');

    const canvasNormal = document.createElement('canvas');
    canvasNormal.width = size;
    canvasNormal.height = size;
    const ctxNormal = canvasNormal.getContext('2d');

    const heightMap = new Float32Array(size * size);
    for (let y = 0; y < size; y++) {
      const v = y / size;
      for (let x = 0; x < size; x++) {
        const u = x / size;
        let h = 0.5;
        h += 0.24 * Math.sin(u * 55.0 + Math.cos(v * 35.0) * 2.2);
        h += 0.18 * Math.cos(v * 60.0 + Math.sin(u * 30.0) * 2.0);
        h += 0.12 * Math.sin((u + v) * 85.0);
        h += 0.08 * Math.cos((u - v) * 110.0);
        h += 0.12 * (Math.random() - 0.5);
        heightMap[y * size + x] = Math.max(0.0, Math.min(1.0, h));
      }
    }

    const colorImg = ctxColor.createImageData(size, size);
    const colorData = colorImg.data;
    for (let i = 0; i < heightMap.length; i++) {
      const h = heightMap[i];
      const p = i * 4;
      let r, g, b;
      if (h < 0.5) {
        const t = h * 2.0;
        r = 17 + (36 - 17) * t;
        g = 10 + (22 - 10) * t;
        b = 24 + (53 - 24) * t;
      } else {
        const t = (h - 0.5) * 2.0;
        r = 36 + (58 - 36) * t;
        g = 22 + (37 - 22) * t;
        b = 53 + (84 - 53) * t;
      }
      colorData[p] = Math.round(r);
      colorData[p + 1] = Math.round(g);
      colorData[p + 2] = Math.round(b);
      colorData[p + 3] = 255;
    }
    ctxColor.putImageData(colorImg, 0, 0);

    const normImg = ctxNormal.createImageData(size, size);
    const normData = normImg.data;
    const bumpScale = 3.6;
    for (let y = 0; y < size; y++) {
      const ym1 = (y - 1 + size) % size;
      const yp1 = (y + 1) % size;
      for (let x = 0; x < size; x++) {
        const xm1 = (x - 1 + size) % size;
        const xp1 = (x + 1) % size;

        const dhdx = (heightMap[y * size + xp1] - heightMap[y * size + xm1]) * 0.5;
        const dhdy = (heightMap[yp1 * size + x] - heightMap[ym1 * size + x]) * 0.5;

        let nx = -dhdx * bumpScale;
        let ny = -dhdy * bumpScale;
        let nz = 1.0;
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx /= len;
        ny /= len;
        nz /= len;

        const p = (y * size + x) * 4;
        normData[p] = Math.round((nx * 0.5 + 0.5) * 255);
        normData[p + 1] = Math.round((ny * 0.5 + 0.5) * 255);
        normData[p + 2] = Math.round((nz * 0.5 + 0.5) * 255);
        normData[p + 3] = 255;
      }
    }
    ctxNormal.putImageData(normImg, 0, 0);

    const colorTex = new THREE.CanvasTexture(canvasColor);
    colorTex.wrapS = THREE.RepeatWrapping;
    colorTex.wrapT = THREE.RepeatWrapping;
    colorTex.repeat.set(6, 6);

    const normalTex = new THREE.CanvasTexture(canvasNormal);
    normalTex.wrapS = THREE.RepeatWrapping;
    normalTex.wrapT = THREE.RepeatWrapping;
    normalTex.repeat.set(6, 6);

    return { colorTex, normalTex };
  }

  loadCellModel() {
    const loader = new GLTFLoader();
    const wallTex = this.createWallPorousTexture();
    const basinSoupTex = this.createCytoplasmicSoupTexture();
    const nucleoidMaps = this.createNucleoidRugoseMaps();

    loader.load(
      '/prokaryote_cell.glb',
      (gltf) => {
        this.cellRoot = gltf.scene;
        this.cellRoot.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            const name = child.name;

            if (name.includes('OuterCapsule')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x82A47E,
                roughness: 0.32,
                transparent: true,
                opacity: 0.38,
                side: THREE.DoubleSide,
                depthWrite: false
              });
            } else if (name.includes('CellWall')) {
              child.material = new THREE.MeshStandardMaterial({
                map: wallTex,
                roughness: 0.55,
                metalness: 0.05,
                side: THREE.DoubleSide
              });
            } else if (name.includes('PlasmaMembrane')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xE2A824,
                roughness: 0.24,
                metalness: 0.30,
                side: THREE.DoubleSide
              });
            } else if (name.includes('Cytoplasm_Bedding')) {
              child.material = new THREE.MeshStandardMaterial({
                map: basinSoupTex,
                color: 0xC8B896,
                roughness: 0.68,
                metalness: 0.04,
                side: THREE.DoubleSide
              });
            } else if (name.includes('Nucleoid')) {
              child.material = new THREE.MeshStandardMaterial({
                map: nucleoidMaps.colorTex,
                normalMap: nucleoidMaps.normalTex,
                normalScale: new THREE.Vector2(2.4, 2.4),
                roughness: 0.86,
                metalness: 0.02
              });
            } else if (name.includes('Plasmid')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x00B4D8,
                roughness: 0.32,
                metalness: 0.25
              });
            } else if (name.includes('Ribosomes')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xE06D53,
                roughness: 0.64,
                metalness: 0.06
              });
            } else if (name.includes('Solute')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x4895EF,
                roughness: 0.38,
                metalness: 0.10,
                transparent: true,
                opacity: 0.85
              });
            } else if (name.includes('Motor_Gold')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xDDAE32,
                roughness: 0.22,
                metalness: 0.75
              });
            } else if (name.includes('Motor_Red')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xC81414,
                roughness: 0.30,
                metalness: 0.08
              });
            } else if (name.includes('Flagellum')) {
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0xC6C2BA,
                transparent: true,
                opacity: 0.80,
                roughness: 0.35,
                transmission: 0.38
              });
            } else if (name.includes('Pili')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xD8DED8,
                transparent: true,
                opacity: 0.65,
                roughness: 0.36
              });
            }
          }
        });
        this.scene.add(this.cellRoot);
      },
      undefined,
      (err) => console.error('[-] Error loading prokaryote_cell.glb:', err)
    );
  }

  buildSoluteCloud() {
    const count = 2200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const palette = [
      new THREE.Color(0xF4A261),
      new THREE.Color(0x2A9D8F),
      new THREE.Color(0xE9C46A),
      new THREE.Color(0x8338EC),
      new THREE.Color(0x48CAE4),
      new THREE.Color(0xDDAE32),
      new THREE.Color(0xEAE2D2)
    ];

    let placed = 0;
    while (placed < count) {
      const x = (Math.random() - 0.5) * 4.2;
      const y = -0.10 + Math.random() * 0.26;
      const z = (Math.random() - 0.5) * 2.1;

      const radY = y / 0.92;
      const radZ = z / 1.05;
      if (radY * radY + radZ * radZ > 0.78) continue;
      if (Math.abs(x) > 1.85 && (radY * radY + radZ * radZ > 0.40)) continue;

      pos[placed * 3] = x;
      pos[placed * 3 + 1] = y;
      pos[placed * 3 + 2] = z;

      const col = palette[(Math.random() * palette.length) | 0];
      cols[placed * 3] = col.r;
      cols[placed * 3 + 1] = col.g;
      cols[placed * 3 + 2] = col.b;
      placed++;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending
    });

    this.soupPoints = new THREE.Points(geo, mat);
    this.scene.add(this.soupPoints);
  }

  start() {
    this.active = true;
    const loop = () => {
      if (!this.active) return;
      this.animFrameId = requestAnimationFrame(loop);
      this.render();
    };
    loop();
  }

  stop() {
    this.active = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.svgOverlay) this.svgOverlay.innerHTML = '';
    if (this.labelsContainer) this.labelsContainer.style.display = 'none';
  }

  resetCamera() {
    if (this.tourActive) this.exitTour();
    if (this.wasm && this.wasm.init_engine) {
      this.wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
    }
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  toggleLabels() {
    this.showLabels = !this.showLabels;
    this.updateLandmarksAndLeaders();
    return this.showLabels;
  }

  flyCameraTo(targetPos, targetLookAt, duration = 1200) {
    this.camTransition.active = true;
    this.camTransition.startTime = performance.now();
    this.camTransition.duration = duration;
    this.camTransition.startPos.copy(this.camera.position);
    this.camTransition.endPos.copy(targetPos);
    this.camTransition.startTarget.copy(this.camTransition.currentTarget);
    this.camTransition.endTarget.copy(targetLookAt);
  }

  selectOrganelle(key) {
    this.currentActiveTarget = key;
    const data = CELL_ANATOMY_DATA[key];
    if (data) {
      this.flyCameraTo(data.camPos, data.camTarget);
      if (this.onSelectOrganelle) {
        this.onSelectOrganelle(key, data);
      }
    }
  }

  startTour() {
    this.tourActive = true;
    this.tourPlaying = true;
    this.goToTourStep(0);
  }

  toggleTourPlay() {
    if (!this.tourActive) {
      this.startTour();
      return true;
    }
    this.tourPlaying = !this.tourPlaying;
    if (this.tourPlaying) {
      this.tourReadingTimer = 0;
      this.tourCooldownTimer = 0;
    } else {
      if (this.voiceService) this.voiceService.stop();
    }
    this.notifyTourStep();
    return this.tourPlaying;
  }

  goToTourStep(idx) {
    this.currentTourStep = Math.max(0, Math.min(CELL_TOUR_STOPS.length - 1, idx));
    this.tourStepId++;
    const thisStepId = this.tourStepId;
    const key = CELL_TOUR_STOPS[this.currentTourStep];
    const data = CELL_ANATOMY_DATA[key];
    if (!data) return;

    this.flyCameraTo(data.camPos, data.camTarget);

    if (this.voiceService) this.voiceService.stop();

    if (this.tourTtsEnabled && this.tourPlaying) {
      this.tourPhase = 'narrating';
      this.tourCooldownTimer = 0;
      this.narrateTourStep(this.currentTourStep, key, thisStepId);
    } else {
      this.tourPhase = 'reading';
      this.tourReadingTimer = 0;
    }

    if (this.onSelectOrganelle) {
      this.onSelectOrganelle(key, data);
    }
    this.notifyTourStep();
  }

  narrateTourStep(stepIndex, key, thisStepId) {
    if (!this.tourTtsEnabled || !this.tourActive) return;
    const data = CELL_ANATOMY_DATA[key];
    if (!data) return;

    const bodyText = data.narration || data.description;
    const speech = `Masterclass Step ${stepIndex + 1} of ${CELL_TOUR_STOPS.length}: ${data.title}. ${bodyText}`;
    const voice = this.voiceService?.getSelectedVoice?.() || 'af_heart';

    if (this.onShowSubtitles) {
      this.onShowSubtitles(speech, `STEP ${stepIndex + 1} OF ${CELL_TOUR_STOPS.length}: ${data.title.toUpperCase()}`, 'Kokoro Neural TTS');
    }

    if (this.voiceService?.playText) {
      this.voiceService.playText(speech, {
        voice,
        onStart: () => {
          if (!this.tourActive || this.tourStepId !== thisStepId) return;
          this.tourPhase = 'narrating';
          this.notifyTourStep();
        },
        onEnd: () => {
          if (!this.tourActive || this.tourStepId !== thisStepId) return;
          this.tourPhase = 'cooldown';
          this.tourCooldownTimer = 0;
          this.notifyTourStep();
        },
        onError: () => {
          if (!this.tourActive || this.tourStepId !== thisStepId) return;
          this.tourPhase = 'cooldown';
          this.tourCooldownTimer = 0;
          this.notifyTourStep();
        }
      });
    }
  }

  nextTourStep() {
    if (this.currentTourStep < CELL_TOUR_STOPS.length - 1) {
      this.goToTourStep(this.currentTourStep + 1);
    } else {
      this.exitTour();
    }
  }

  prevTourStep() {
    if (this.currentTourStep > 0) {
      this.goToTourStep(this.currentTourStep - 1);
    }
  }

  exitTour() {
    this.tourStepId++;
    this.tourPhase = 'idle';
    this.tourActive = false;
    this.tourPlaying = false;
    if (this.voiceService) this.voiceService.stop();
    if (this.onHideSubtitles) this.onHideSubtitles();
    this.notifyTourStep();
  }

  setTourVoice(enabled) {
    this.tourTtsEnabled = enabled;
    if (!enabled && this.voiceService) {
      this.voiceService.stop();
      if (this.tourActive && this.tourPlaying) {
        this.tourPhase = 'reading';
        this.tourReadingTimer = 0;
      }
    }
    this.notifyTourStep();
  }

  notifyTourStep() {
    if (this.onTourStepChange) {
      this.onTourStepChange({
        active: this.tourActive,
        playing: this.tourPlaying,
        stepIndex: this.currentTourStep,
        key: CELL_TOUR_STOPS[this.currentTourStep],
        totalSteps: CELL_TOUR_STOPS.length,
        phase: this.tourPhase,
        cooldownRemaining: Math.max(1, Math.ceil((this.TOUR_COOLDOWN_DURATION - this.tourCooldownTimer) / 1000)),
        ttsEnabled: this.tourTtsEnabled
      });
    }
  }

  handlePointerDown(e) {
    this.isPointerDown = true;
    this.pointerButton = e.button;
    this.shiftDown = e.shiftKey;
    this.lastPointerX = e.clientX;
    this.lastPointerY = e.clientY;
    this.canvas.setPointerCapture(e.pointerId);

    if (this.tourActive && this.tourPlaying) {
      this.toggleTourPlay();
    }
  }

  handlePointerMove(e) {
    if (!this.isPointerDown) return;
    const dx = e.clientX - this.lastPointerX;
    const dy = e.clientY - this.lastPointerY;
    this.lastPointerX = e.clientX;
    this.lastPointerY = e.clientY;

    const isPan = (this.pointerButton === 2) || (this.pointerButton === 1) || (this.pointerButton === 0 && (e.shiftKey || this.shiftDown));

    if (isPan) {
      if (this.wasm && this.wasm.get_cam_x) {
        const rad = Math.hypot(
          this.wasm.get_cam_x() - this.wasm.get_target_x(),
          this.wasm.get_cam_y() - this.wasm.get_target_y(),
          this.wasm.get_cam_z() - this.wasm.get_target_z()
        );
        const factor = rad * 0.0014;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

        const tx = this.wasm.get_target_x() - right.x * dx * factor + up.x * dy * factor;
        const ty = this.wasm.get_target_y() - right.y * dx * factor + up.y * dy * factor;
        const tz = this.wasm.get_target_z() - right.z * dx * factor + up.z * dy * factor;

        const relX = this.wasm.get_cam_x() - this.wasm.get_target_x();
        const relY = this.wasm.get_cam_y() - this.wasm.get_target_y();
        const relZ = this.wasm.get_cam_z() - this.wasm.get_target_z();
        const theta = Math.atan2(relX, relZ);
        const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
        this.wasm.init_engine(theta, phi, rad, tx, ty, tz);
      }
    } else {
      if (this.wasm && this.wasm.add_orbit_impulse) {
        this.wasm.add_orbit_impulse(dx * 0.005, -dy * 0.005);
      }
    }
  }

  handlePointerUp(e) {
    this.isPointerDown = false;
    try { this.canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  }

  handleWheel(e) {
    e.preventDefault();
    if (this.tourActive && this.tourPlaying) {
      this.toggleTourPlay();
    }
    if (this.wasm && this.wasm.add_zoom_impulse) {
      this.wasm.add_zoom_impulse(e.deltaY * 0.008);
    }
  }

  handleKeyDown(e) {
    if (!this.active) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;

    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(-0.85);
    } else if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(0.85);
    } else if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      this.panCellCamera(-0.35, 0);
    } else if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      this.panCellCamera(0.35, 0);
    } else if (e.code === 'Space') {
      this.panCellCamera(0, 0.35);
    } else if (e.code === 'KeyC' || e.code === 'ControlLeft' || e.code === 'ControlRight') {
      this.panCellCamera(0, -0.35);
    } else if (e.code === 'KeyQ') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(-0.8);
    } else if (e.code === 'KeyE') {
      if (this.wasm && this.wasm.add_zoom_impulse) this.wasm.add_zoom_impulse(0.8);
    } else if (e.code === 'KeyR') {
      this.resetCamera();
    }
  }

  panCellCamera(deltaX, deltaY) {
    if (!this.wasm || !this.wasm.get_cam_x) return;
    const rad = Math.hypot(
      this.wasm.get_cam_x() - this.wasm.get_target_x(),
      this.wasm.get_cam_y() - this.wasm.get_target_y(),
      this.wasm.get_cam_z() - this.wasm.get_target_z()
    );
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

    const tx = this.wasm.get_target_x() + right.x * deltaX + up.x * deltaY;
    const ty = this.wasm.get_target_y() + right.y * deltaX + up.y * deltaY;
    const tz = this.wasm.get_target_z() + right.z * deltaX + up.z * deltaY;

    const relX = this.wasm.get_cam_x() - this.wasm.get_target_x();
    const relY = this.wasm.get_cam_y() - this.wasm.get_target_y();
    const relZ = this.wasm.get_cam_z() - this.wasm.get_target_z();
    const theta = Math.atan2(relX, relZ);
    const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
    this.wasm.init_engine(theta, phi, rad, tx, ty, tz);
  }

  handleResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    if (this.camera && this.renderer) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.updateLandmarksAndLeaders();
    }
  }

  updateLandmarksAndLeaders() {
    if (!this.svgOverlay || !this.labelsContainer) {
      this.svgOverlay = document.getElementById('leader-lines-svg');
      this.labelsContainer = document.getElementById('labels-container');
    }
    if (!this.svgOverlay || !this.labelsContainer) return;

    if (!this.showLabels) {
      this.svgOverlay.innerHTML = '';
      this.labelsContainer.style.display = 'none';
      return;
    }
    this.labelsContainer.style.display = 'block';

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    let svgLines = '';

    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);

    const appContainer = document.getElementById('app-container');
    const isDrawerOpen = !!(appContainer && appContainer.classList.contains('drawer-open'));
    const rightMargin = isDrawerOpen ? 430 : 150;
    const topMargin = 85;

    // Compute cell center projection in screen space
    const cellCenter = this.cellRoot
      ? new THREE.Vector3(-0.6, 0.0, 0.0).applyMatrix4(this.cellRoot.matrixWorld)
      : new THREE.Vector3(-0.6, 0.0, 0.0);
    const centerProj = cellCenter.clone().project(this.camera);
    const centerScreenX = (centerProj.x * 0.5 + 0.5) * width;
    const centerScreenY = (-centerProj.y * 0.5 + 0.5) * height;

    const visibleItems = [];

    // Phase 1: Transform to world coordinates, check camera plane and normal occlusion
    CELL_LANDMARKS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const worldPos = this.cellRoot
        ? item.pos.clone().applyMatrix4(this.cellRoot.matrixWorld)
        : item.pos.clone();

      // Guard: only project points in front of the camera lens plane
      const toPoint = worldPos.clone().sub(this.camera.position);
      if (toPoint.dot(camDir) <= 0.05) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // Check facing direction / surface normal
      const viewDir = this.camera.position.clone().sub(worldPos).normalize();
      const worldNormal = item.normal ? item.normal.clone() : new THREE.Vector3(0, 1, 0);
      if (this.cellRoot) {
        worldNormal.transformDirection(this.cellRoot.matrixWorld);
      }
      const facingDot = worldNormal.dot(viewDir);
      const isActive = this.currentActiveTarget === item.key;

      // Occlusion test: back-facing points on the far side of the cell fade out
      // Active item stays visible; flagellum has wider visibility range
      const isOccluded = !isActive && (item.key === 'flagellum' ? facingDot < -0.7 : facingDot < -0.15);

      const v = worldPos.clone().project(this.camera);
      const isFrustum = v.z > -1 && v.z < 1;
      const screenX = (v.x * 0.5 + 0.5) * width;
      const screenY = (-v.y * 0.5 + 0.5) * height;

      if (!isFrustum || screenX < 20 || screenX > width - 20 || screenY < 20 || screenY > height - 20 || isOccluded) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      // Radial displacement from cell center in screen space
      const dx = screenX - centerScreenX;
      const dy = screenY - centerScreenY;
      let side = dx >= 0 ? 'right' : 'left';
      if (side === 'right' && screenX > width - rightMargin - 60) {
        side = 'left';
      } else if (side === 'left' && screenX < 140) {
        side = 'right';
      }

      const halfW = el.offsetWidth ? (el.offsetWidth * 0.5) : 75;
      let targetX;
      if (side === 'right') {
        const offsetDist = Math.max(160, Math.min(270, 180 + Math.abs(dx) * 0.12));
        targetX = Math.min(width - rightMargin, Math.max(screenX + 90, screenX + offsetDist));
      } else {
        const offsetDist = Math.max(160, Math.min(270, 180 + Math.abs(dx) * 0.12));
        targetX = Math.max(150, Math.min(screenX - 90, screenX - offsetDist));
      }

      let targetY = screenY + (dy < -60 ? -35 : (dy > 60 ? 35 : 0));
      targetY = Math.max(topMargin, Math.min(height - 80, targetY));

      visibleItems.push({
        item,
        el,
        isActive,
        screenX,
        screenY,
        dx,
        dy,
        side,
        targetX,
        targetY,
        halfW
      });
    });

    // Phase 2: Anti-collision vertical relaxation for each side
    const MIN_GAP = 52;
    ['left', 'right'].forEach((side) => {
      const group = visibleItems.filter((v) => v.side === side);
      if (group.length === 0) return;

      group.sort((a, b) => a.targetY - b.targetY);

      // Downward push
      for (let i = 1; i < group.length; i++) {
        if (group[i].targetY < group[i - 1].targetY + MIN_GAP) {
          group[i].targetY = group[i - 1].targetY + MIN_GAP;
        }
      }

      // Upward clamp if bottom exceeds viewport
      const maxAllowedY = height - 80;
      if (group[group.length - 1].targetY > maxAllowedY) {
        group[group.length - 1].targetY = maxAllowedY;
        for (let i = group.length - 2; i >= 0; i--) {
          if (group[i].targetY > group[i + 1].targetY - MIN_GAP) {
            group[i].targetY = group[i + 1].targetY - MIN_GAP;
          }
        }
      }

      // Downward clamp if top is pushed above viewport
      const minAllowedY = topMargin;
      if (group[0].targetY < minAllowedY) {
        group[0].targetY = minAllowedY;
        for (let i = 1; i < group.length; i++) {
          if (group[i].targetY < group[i - 1].targetY + MIN_GAP) {
            group[i].targetY = group[i - 1].targetY + MIN_GAP;
          }
        }
      }
    });

    // Phase 3: Position HTML badges and build SVG leader lines
    visibleItems.forEach((v) => {
      const { item, el, isActive, screenX, screenY, side, targetX, targetY, halfW } = v;

      el.style.opacity = '1';
      el.style.pointerEvents = 'auto';
      el.style.left = `${targetX}px`;
      el.style.top = `${targetY}px`;

      const organelleData = CELL_ANATOMY_DATA[item.key];
      const targetColor = organelleData?.color || item.color || '#40916C';
      const dotColor = targetColor;
      const strokeColor = targetColor;
      const anchorDotRadius = isActive ? 5.0 : 3.0;
      const strokeWidth = isActive ? 2.2 : 1.35;
      const strokeOpacity = isActive ? 1.0 : (this.currentActiveTarget ? 0.35 : 0.85);

      let lineEndX, elbowX;
      if (side === 'right') {
        lineEndX = targetX - halfW - 2;
        elbowX = screenX + Math.min(60, Math.max(25, (lineEndX - screenX) * 0.4));
      } else {
        lineEndX = targetX + halfW + 2;
        elbowX = screenX - Math.min(60, Math.max(25, (screenX - lineEndX) * 0.4));
      }

      svgLines += `
        <g class="leader-group ${isActive ? 'active-leader' : ''}">
          ${isActive ? `<circle cx="${screenX}" cy="${screenY}" r="9" fill="none" stroke="${dotColor}" stroke-width="1.8" opacity="0.75"><animate attributeName="r" values="4;11;4" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite"/></circle>` : ''}
          <circle cx="${screenX}" cy="${screenY}" r="${anchorDotRadius}" fill="${dotColor}" stroke="#FFFFFF" stroke-width="${isActive ? 1.8 : 0.8}" />
          <polyline points="${screenX},${screenY} ${elbowX},${targetY} ${lineEndX},${targetY}" 
                    fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" opacity="${strokeOpacity}" />
        </g>
      `;
    });

    this.svgOverlay.innerHTML = svgLines;
  }

  drawMicrocompartment() {
    if (!this.microCanvas || !this.microCtx) {
      this.microCanvas = document.getElementById('micro-canvas');
      if (this.microCanvas) this.microCtx = this.microCanvas.getContext('2d');
    }
    if (!this.microCtx) return;

    const w = this.microCanvas.width;
    const h = this.microCanvas.height;
    this.microCtx.clearRect(0, 0, w, h);

    this.microCtx.fillStyle = '#EFE9DD';
    this.microCtx.fillRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const R = 38;

    this.microCtx.save();
    this.microCtx.translate(cx, cy);

    const sides = 8;
    this.microCtx.fillStyle = '#738C6D';
    this.microCtx.strokeStyle = '#53684E';
    this.microCtx.lineWidth = 1.5;

    this.microCtx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 + this.microAngle * 0.2;
      const x = Math.cos(a) * R;
      const y = Math.sin(a) * R;
      if (i === 0) this.microCtx.moveTo(x, y);
      else this.microCtx.lineTo(x, y);
    }
    this.microCtx.closePath();
    this.microCtx.fill();
    this.microCtx.stroke();

    this.microCtx.fillStyle = '#445440';
    this.microCtx.beginPath();
    this.microCtx.arc(0, 0, R * 0.72, 0, Math.PI * 2);
    this.microCtx.fill();

    const pearls = [
      { x: -9, y: -8, r: 7 },
      { x: 7, y: -7, r: 6.5 },
      { x: -5, y: 7, r: 7.5 },
      { x: 10, y: 6, r: 6 },
      { x: 0, y: -1, r: 8 }
    ];

    pearls.forEach((p) => {
      const grad = this.microCtx.createRadialGradient(p.x - 2, p.y - 2, 1, p.x, p.y, p.r);
      grad.addColorStop(0, '#9D7BB8');
      grad.addColorStop(0.7, '#644380');
      grad.addColorStop(1, '#3B2152');
      this.microCtx.fillStyle = grad;
      this.microCtx.beginPath();
      this.microCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.microCtx.fill();
    });

    this.microCtx.restore();
    this.microAngle += 0.02;
  }

  render() {
    // 1. Smooth Camera Transition
    if (this.camTransition.active) {
      const elapsed = performance.now() - this.camTransition.startTime;
      const t = Math.min(1.0, elapsed / this.camTransition.duration);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.camera.position.lerpVectors(this.camTransition.startPos, this.camTransition.endPos, ease);
      this.camTransition.currentTarget.lerpVectors(this.camTransition.startTarget, this.camTransition.endTarget, ease);
      this.camera.lookAt(this.camTransition.currentTarget);

      if (t >= 1.0) {
        this.camTransition.active = false;
        if (this.wasm && this.wasm.init_engine) {
          const relX = this.camera.position.x - this.camTransition.currentTarget.x;
          const relY = this.camera.position.y - this.camTransition.currentTarget.y;
          const relZ = this.camera.position.z - this.camTransition.currentTarget.z;
          const rad = Math.sqrt(relX * relX + relY * relY + relZ * relZ);
          const theta = Math.atan2(relX, relZ);
          const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
          this.wasm.init_engine(theta, phi, rad, this.camTransition.currentTarget.x, this.camTransition.currentTarget.y, this.camTransition.currentTarget.z);
        }
      }
    } else if (this.wasm && this.wasm.step_physics) {
      this.wasm.step_physics(0.88, this.isAutoRotating ? 1 : 0);
      this.camera.position.set(this.wasm.get_cam_x(), this.wasm.get_cam_y(), this.wasm.get_cam_z());
      this.camera.lookAt(this.wasm.get_target_x(), this.wasm.get_target_y(), this.wasm.get_target_z());
    }

    // 2. Guided Tour State Machine
    if (this.tourActive && this.tourPlaying && !this.camTransition.active) {
      const now = performance.now();
      if (!this.lastTourTick) this.lastTourTick = now;
      const delta = Math.min(now - this.lastTourTick, 100);

      const timerFill = document.getElementById('tour-timer-fill');

      if (this.tourPhase === 'narrating') {
        const pulse = 16 + Math.sin(now * 0.006) * 10;
        if (timerFill) {
          timerFill.style.width = `${pulse}%`;
          timerFill.style.background = '#64D2B4';
        }
      } else if (this.tourPhase === 'cooldown') {
        this.tourCooldownTimer += delta;
        const progress = Math.min(100, (this.tourCooldownTimer / this.TOUR_COOLDOWN_DURATION) * 100);
        if (timerFill) {
          timerFill.style.width = `${progress}%`;
          timerFill.style.background = '#D96B43';
        }
        this.notifyTourStep();

        if (this.tourCooldownTimer >= this.TOUR_COOLDOWN_DURATION) {
          this.tourPhase = 'idle';
          this.nextTourStep();
        }
      } else if (this.tourPhase === 'reading') {
        this.tourReadingTimer += delta;
        const progress = Math.min(100, (this.tourReadingTimer / this.TOUR_READING_DURATION) * 100);
        if (timerFill) {
          timerFill.style.width = `${progress}%`;
          timerFill.style.background = '#D96B43';
        }

        if (this.tourReadingTimer >= this.TOUR_READING_DURATION) {
          this.tourPhase = 'idle';
          this.nextTourStep();
        }
      }
    }
    this.lastTourTick = performance.now();

    // 3. Brownian Motion of Cytoplasmic Soup Solutes
    if (this.soupPoints) {
      this.soupPoints.rotation.y = Math.sin(Date.now() * 0.0004) * 0.015;
    }

    this.renderer.render(this.scene, this.camera);
    this.updateLandmarksAndLeaders();
    this.drawMicrocompartment();
  }

  dispose() {
    this.disposed = true;
    this.stop();
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('resize', this._onResize);
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
