import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 18B: Targeted Pharmacology & mRNA-LNP Vaccines (real-pharmacology), played by cell_explorer.html.
// Every cue stays <= 110 plain characters and 100% pure ASCII for clean TTS synthesis.
export const PHARMACOLOGY_TOUR: TourDefinition = {
  title: 'Targeted Pharmacology & mRNA-LNP Vaccines: a guided tour',
  root: 'real-pharmacology',
  page: 'pharmacology_lab.html',
  view: 'overview',
  summary: 'Test selective toxicity across five biological targets (E. coli, Mycoplasma, Chlamydia, SARS-CoV-2/HIV-1 and human cells): beta-lactam penicillin covalent locking of PBP (1PWC), bacterial 70S (4V7U macrolide, 1HNW tetracycline) vs human 80S (4UG0) ribosomes, direct-acting antivirals Remdesivir (7BV2 RdRp) and AZT (3V4I HIV-1 RT), cytosolic mRNA-LNP vaccine translation outside the intact nucleus, and atomic active-site bonds.',
  views: {
    overview: 'real-pharmacology',
    beta_lactam: 'real-pharm-pbp',
    ribosome_70s_80s: 'real-pharm-macrolide',
    antivirals: 'real-pharm-rdrp',
    mrna_vaccine: 'real-pharm-mrna-lnp',
  },
  chapters: [
    { id: 'ch0', title: 'Selective Toxicity Across 5 Biological Targets', steps: [
      { id: 'pha-bench-overview', title: 'Five biological targets on one selectivity bench', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['bench_ecoli', 'bench_myco', 'bench_chlam', 'bench_virus', 'bench_human'], cues: [
        { id: 'pha.ch0.s0.01', text: 'Modern medicine rests on selective toxicity: halting pathogens while sparing [[human cells|bench_human]].' },
        { id: 'pha.ch0.s0.02', text: 'Compare walled [[E. coli|bench_ecoli]], wall-less [[Mycoplasma|bench_myco]] and intracellular [[Chlamydia|bench_chlam]] up top.' },
        { id: 'pha.ch0.s0.03', text: 'Beside them sit acellular [[viruses|bench_virus]] and a nucleated [[human epithelial cell|bench_human]].' },
      ] },
      { id: 'pha-why-antibiotics-fail', title: 'Why antibacterial drugs have zero target on viruses', camera: { part: 'bench_virus', dist: 1.3, dur: 2.2, orbit: 2 }, blink: 'bench_virus', flow: true,
        ghost: ['bench_virus', 'pg_wall', 'ribo_70s'], tags: ['bench_virus', 'pg_wall', 'ribo_70s'], cues: [
        { id: 'pha.ch0.s1.01', text: 'Antibiotics fail completely against [[viruses|bench_virus]] because viruses lack bacterial structures.' },
        { id: 'pha.ch0.s1.02', text: 'SARS-CoV-2 and HIV-1 carry zero [[peptidoglycan wall|pg_wall]] and zero bacterial [[70S ribosomes|ribo_70s]].' },
        { id: 'pha.ch0.s1.03', text: 'Below the bench, four molecular stations reveal how each drug class matches one exact target.' },
      ] },
    ] },
    { id: 'ch1', title: 'Beta-Lactam Antibiotics: Penicillin vs Peptidoglycan (PBP 1PWC) & Wall-Less Mycoplasma', steps: [
      { id: 'pha-beta-lactam-wall', title: 'Penicillin crossing porins to peptidoglycan & PBP (1PWC)', camera: { view: 'beta_lactam', dur: 2.4, orbit: 2 }, blink: 'pg_wall', flow: true, ghost: false,
        tags: ['bench_ecoli', 'pg_wall', 'pbp_penicillin'], cues: [
        { id: 'pha.ch1.s0.01', text: 'Zoom to Station 1, where [[E. coli|bench_ecoli]] depends on a cross-linked [[peptidoglycan wall|pg_wall]].' },
        { id: 'pha.ch1.s0.02', text: 'Penicillin slips through outer porins to reach [[PBP transpeptidases|pbp_penicillin]] building that mesh.' },
        { id: 'pha.ch1.s0.03', text: 'Normally, [[PBP|pbp_penicillin]] stitches peptide stems across [[peptidoglycan|pg_wall]] to hold 2 to 5 atm pressure.' },
      ] },
      { id: 'pha-pbp-covalent', title: 'Covalent beta-lactam serine lock & osmotic lysis', camera: { part: 'pbp_penicillin', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'pbp_penicillin', flow: true,
        ghost: ['pbp_penicillin', 'pg_wall', 'bench_ecoli'], tags: ['pbp_penicillin', 'pg_wall', 'bench_ecoli'], cues: [
        { id: 'pha.ch1.s1.01', text: 'Penicillin mimics D-Ala-D-Ala, entering the active site of [[PBP|pbp_penicillin]] with a strained ring.' },
        { id: 'pha.ch1.s1.02', text: 'The catalytic serine opens that beta-lactam ring, locking [[PBP|pbp_penicillin]] in a covalent ester bond.' },
        { id: 'pha.ch1.s1.03', text: 'Autolysins keep nicking the [[wall|pg_wall]] with no repair, causing [[E. coli|bench_ecoli]] to burst osmotically.' },
      ] },
      { id: 'pha-mycoplasma-spared', title: 'Wall-less Mycoplasma, viruses & human cells spared', camera: { part: 'bench_myco', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'bench_myco', flow: true,
        ghost: ['bench_myco', 'bench_chlam', 'bench_virus', 'bench_human', 'pg_wall'], tags: ['bench_myco', 'bench_chlam', 'bench_virus', 'bench_human', 'pg_wall'], cues: [
        { id: 'pha.ch1.s2.01', text: 'Look at [[Mycoplasma|bench_myco]]: without any [[peptidoglycan wall|pg_wall]], penicillin cannot harm it.' },
        { id: 'pha.ch1.s2.02', text: 'Intracellular [[Chlamydia|bench_chlam]] only pauses division, while [[viruses|bench_virus]] feel zero effect.' },
        { id: 'pha.ch1.s2.03', text: 'Because [[human cells|bench_human]] have no [[peptidoglycan|pg_wall]] or PBP, beta-lactams spare host tissues.' },
      ] },
    ] },
    { id: 'ch2', title: 'Ribosome Selectivity: Bacterial 70S (4V7U Macrolide / 1HNW Tetracycline) vs Human 80S (4UG0)', steps: [
      { id: 'pha-70s-vs-80s', title: 'Divergent bacterial 70S vs human cytosolic 80S ribosomes', camera: { view: 'ribosome_70s_80s', dur: 2.4, orbit: 2 }, blink: 'ribo_70s', flow: true, ghost: false,
        tags: ['ribo_70s', 'ribo_80s_safe'], cues: [
        { id: 'pha.ch2.s0.01', text: 'Move to Station 2 comparing bacterial [[70S ribosomes|ribo_70s]] beside human cytosolic [[80S ribosomes|ribo_80s_safe]].' },
        { id: 'pha.ch2.s0.02', text: 'Bacterial [[70S|ribo_70s]] builds from 50S and 30S subunits, whereas human [[80S|ribo_80s_safe]] uses larger 60S and 40S.' },
        { id: 'pha.ch2.s0.03', text: 'Atomic differences in rRNA pockets let antibiotics jam [[70S|ribo_70s]] while sparing human [[80S|ribo_80s_safe]].' },
      ] },
      { id: 'pha-macrolide-tetra', title: 'Macrolide 50S exit tunnel (4V7U) & Tetracycline 30S A-site (1HNW)', camera: { part: 'macrolide_tunnel', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'macrolide_tunnel', flow: true,
        ghost: ['macrolide_tunnel', 'tetra_asite', 'ribo_70s'], tags: ['macrolide_tunnel', 'tetra_asite', 'ribo_70s'], cues: [
        { id: 'pha.ch2.s1.01', text: 'Macrolides like azithromycin plug the 50S [[exit tunnel|macrolide_tunnel]] at 23S rRNA nucleotide A2058.' },
        { id: 'pha.ch2.s1.02', text: 'With the [[exit tunnel|macrolide_tunnel]] jammed, growing bacterial peptide chains stall inside [[70S|ribo_70s]].' },
        { id: 'pha.ch2.s1.03', text: 'Meanwhile, tetracycline occupies the 30S [[A-site|tetra_asite]], blocking incoming aminoacyl-tRNA docking.' },
      ] },
      { id: 'pha-70s-spectrum', title: 'Halting E. coli, Mycoplasma & Chlamydia while sparing 80S', camera: { part: 'ribo_80s_safe', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'ribo_80s_safe', flow: true,
        ghost: ['ribo_80s_safe', 'ribo_70s', 'bench_ecoli', 'bench_myco', 'bench_chlam', 'bench_virus', 'bench_human'],
        tags: ['ribo_80s_safe', 'ribo_70s', 'bench_ecoli', 'bench_myco', 'bench_chlam', 'bench_virus', 'bench_human'], cues: [
        { id: 'pha.ch2.s2.01', text: '[[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] and [[Chlamydia|bench_chlam]] all rely on bacterial [[70S|ribo_70s]] translation.' },
        { id: 'pha.ch2.s2.02', text: 'Targeting [[70S|ribo_70s]] halts all three bacteria, even wall-less [[Mycoplasma|bench_myco]] untouched by penicillin.' },
        { id: 'pha.ch2.s2.03', text: 'Human [[80S ribosomes|ribo_80s_safe]] inside [[host cells|bench_human]] keep running, and [[viruses|bench_virus]] stay untouched.' },
      ] },
    ] },
    { id: 'ch3', title: 'Direct-Acting Antivirals: Remdesivir (7BV2 RdRp) & AZT (3V4I HIV-1 RT)', steps: [
      { id: 'pha-viral-polymerases', title: 'Targeting uniquely viral polymerases without host harm', camera: { view: 'antivirals', dur: 2.4, orbit: 2 }, blink: 'rdrp_remdesivir', flow: true, ghost: false,
        tags: ['bench_virus', 'bench_human', 'rdrp_remdesivir', 'hiv_rt_azt'], cues: [
        { id: 'pha.ch3.s0.01', text: 'To stop [[viruses|bench_virus]] without harming [[human cells|bench_human]], antivirals target uniquely viral enzymes.' },
        { id: 'pha.ch3.s0.02', text: 'SARS-CoV-2 copies RNA using [[RdRp|rdrp_remdesivir]], an RNA-dependent polymerase absent from human cells.' },
        { id: 'pha.ch3.s0.03', text: 'HIV-1 converts viral RNA into DNA using [[HIV-1 Reverse Transcriptase|hiv_rt_azt]], another unique target.' },
      ] },
      { id: 'pha-nucleoside-analogs', title: 'Nucleoside triphosphate mimics stalling genome synthesis', camera: { part: 'rdrp_remdesivir', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'rdrp_remdesivir', flow: true,
        ghost: ['rdrp_remdesivir', 'hiv_rt_azt'], tags: ['rdrp_remdesivir', 'hiv_rt_azt'], cues: [
        { id: 'pha.ch3.s1.01', text: 'Host kinases phosphorylate antiviral prodrugs into nucleoside triphosphates accepted by viral enzymes.' },
        { id: 'pha.ch3.s1.02', text: 'Nucleoside analogs insert into [[RdRp|rdrp_remdesivir]] and [[HIV-1 RT|hiv_rt_azt]] strands, halting chain extension.' },
        { id: 'pha.ch3.s1.03', text: 'Because viral enzymes incorporate these mimics faster than host polymerases, replication drops sharply.' },
      ] },
      { id: 'pha-rdv-azt-mechanisms', title: 'Remdesivir i+3 steric stall (7BV2) vs AZT 3-prime-OH stop (3V4I)', camera: { part: 'hiv_rt_azt', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'hiv_rt_azt', flow: true,
        ghost: ['rdrp_remdesivir', 'hiv_rt_azt', 'bench_human'], tags: ['rdrp_remdesivir', 'hiv_rt_azt', 'bench_human'], cues: [
        { id: 'pha.ch3.s2.01', text: 'In SARS-CoV-2 [[RdRp|rdrp_remdesivir]], Remdesivir triggers an i+3 stall when its 1-prime-CN hits Ser861.' },
        { id: 'pha.ch3.s2.02', text: 'In [[HIV-1 RT|hiv_rt_azt]], AZT-TP lacks a 3-prime-OH group, causing immediate obligate DNA chain termination.' },
        { id: 'pha.ch3.s2.03', text: 'Proofreading nuclear polymerases in [[human cells|bench_human]] discriminate against both analogs to stay safe.' },
      ] },
    ] },
    { id: 'ch4', title: 'mRNA-LNP Vaccines Outside the Intact Nucleus, Atomic Bonds & Intro Biology Capstone Complete!', steps: [
      { id: 'pha-mrna-lnp-escape', title: 'Ionizable 90 nm mRNA-LNP endocytosis & cytosolic escape', camera: { view: 'mrna_vaccine', dur: 2.4, orbit: 2 }, blink: 'mrna_lnp', flow: true, ghost: false,
        tags: ['mrna_lnp', 'endosome_escape', 'vaccine_mrna'], cues: [
        { id: 'pha.ch4.s0.01', text: 'Station 4 shows a 90 nm [[mRNA-LNP|mrna_lnp]] vaccine delivering spike instructions with zero live virus.' },
        { id: 'pha.ch4.s0.02', text: 'Inside an acidifying endosome at pH 6.0, ionizable lipids trigger [[endosome escape|endosome_escape]].' },
        { id: 'pha.ch4.s0.03', text: 'Capped, m1-pseudouridine-modified [[vaccine mRNA|vaccine_mrna]] releases straight into the open cytosol.' },
      ] },
      { id: 'pha-cytosolic-translation', title: 'Cytosolic 80S translation visibly outside the intact nucleus', camera: { part: 'intact_nucleus', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'intact_nucleus', flow: true,
        ghost: ['vaccine_mrna', 'ribo_80s_safe', 'intact_nucleus'], tags: ['vaccine_mrna', 'ribo_80s_safe', 'intact_nucleus'], cues: [
        { id: 'pha.ch4.s1.01', text: 'Notice the glowing [[intact nucleus|intact_nucleus]]: [[vaccine mRNA|vaccine_mrna]] never enters or alters host DNA.' },
        { id: 'pha.ch4.s1.02', text: 'Transient [[vaccine mRNA|vaccine_mrna]] directs cytosolic [[80S ribosomes|ribo_80s_safe]] to make spike, then degrades.' },
        { id: 'pha.ch4.s1.03', text: 'Displayed spike peptides prime lasting B-cell IgG and T-cell memory while RNases clear [[mRNA|vaccine_mrna]].' },
      ] },
      { id: 'pha-atoms-capstone', title: 'Atomic drug bonds & Intro Biology Capstone Complete', camera: { part: 'drug_atoms', dist: 1.2, dur: 2.4, orbit: 2 }, blink: 'drug_atoms', flow: true, ghost: false,
        tags: ['drug_atoms', 'pbp_penicillin', 'mrna_lnp', 'bench_ecoli', 'bench_virus', 'bench_human'], cues: [
        { id: 'pha.ch4.s2.01', text: 'In [[drug atoms|drug_atoms]], see the 1.35 A [[PBP|pbp_penicillin]] ester bond, 3-prime-OH-less AZT and m1-pseudouridine.' },
        { id: 'pha.ch4.s2.02', text: 'Cycle all four drug modes to compare live effects across [[E. coli|bench_ecoli]], [[viruses|bench_virus]] and [[human|bench_human]].' },
        { id: 'pha.ch4.s2.03', text: 'Intro Biology Capstone Complete: from atoms and cells to immunity and [[mRNA-LNP|mrna_lnp]] medicine.' },
      ] },
    ] },
  ],
  details: {},
};

export const pharmacologyTour: TourDefinition = PHARMACOLOGY_TOUR;
