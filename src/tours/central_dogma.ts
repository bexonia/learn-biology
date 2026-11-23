import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 15: End-to-End Central Dogma, mRNA Splicing & Molecular Evolution (real-central-dogma), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const CENTRAL_DOGMA_TOUR: TourDefinition = {
  title: 'Central Dogma, mRNA Splicing & Molecular Evolution: a guided tour',
  root: 'real-central-dogma',
  page: 'central_dogma_realistic.html',
  view: 'overview',
  summary: 'Trace one human HBB gene across a continuous 5 um Nucleus-to-Cytosol corridor: DNA replication and 3-prime proofreading (helicase, Pol delta), RNA Pol II transcription, megadalton spliceosome alternative splicing, NPC export, 80S ribosome A-P-E decoding, Hsp70/TRiC folding, live HbA-to-HbS and AcrB point mutations, and atomic codon H-bonds.',
  views: {
    overview: 'real-central-dogma',
    replisome: 'real-cd-replisome',
    spliceosome: 'real-cd-splicing-view',
    translation: 'real-central-dogma',
    mutation_bench: 'real-central-dogma',
    atoms: 'real-cd-mutation-atom',
  },
  chapters: [
    { id: 'ch0', title: 'One Continuous Information Corridor', steps: [
      { id: 'cd-corridor', title: 'From nuclear DNA to folded cytosolic proteins', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['chromatin', 'rna_pol2', 'npc', 'ribosome_80s', 'hb_wildtype'], cues: [
        { id: 'cd.ch0.s0.01', text: 'Genetic information flows across one 5 um corridor from nucleus through nuclear pores to cytosol.' },
        { id: 'cd.ch0.s0.02', text: 'Inside the nucleus, [[chromatin|chromatin]] stores the human HBB beta-globin gene across three exons.' },
        { id: 'cd.ch0.s0.03', text: 'Follow one transcript past [[RNA Pol II|rna_pol2]] and [[nuclear pores|npc]] into [[ribosomes|ribosome_80s]].' },
      ] },
      { id: 'cd-hbb-pipeline', title: 'Five linked stations & live mutation bench', camera: { part: 'chromatin', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'chromatin',
        ghost: ['chromatin', 'spliceosome', 'polysome', 'hb_wildtype'], tags: ['chromatin', 'spliceosome', 'polysome', 'hb_wildtype'], cues: [
        { id: 'cd.ch0.s1.01', text: 'Nuclear machines replicate [[chromatin|chromatin]], copy pre-mRNA and splice introns via the [[spliceosome|spliceosome]].' },
        { id: 'cd.ch0.s1.02', text: 'Exported mRNA drives [[polysome|polysome]] translation and folds into soluble [[wild-type HbA|hb_wildtype]].' },
        { id: 'cd.ch0.s1.03', text: 'Along the way, live toggles test how alternative splicing or one DNA base change reshapes life.' },
      ] },
    ] },
    { id: 'ch1', title: 'Stages A & B: Replication, Proofreading & Transcription', steps: [
      { id: 'cd-helicase', title: 'Stage A: Replicative helicase unzips euchromatin', camera: { view: 'replisome', dur: 2.4, orbit: 2 }, blink: 'helicase', flow: true, ghost: false,
        tags: ['chromatin', 'helicase', 'pol_delta'], cues: [
        { id: 'cd.ch1.s0.01', text: 'Zoom to Stage A inside the nucleus, where DNA replication copies opened [[chromatin|chromatin]].' },
        { id: 'cd.ch1.s0.02', text: 'A six-subunit [[helicase|helicase]] ring unwinds parental double-stranded DNA using ATP hydrolysis.' },
        { id: 'cd.ch1.s0.03', text: 'As the [[helicase|helicase]] fork advances, RPA proteins coat single strands ready for [[Pol delta|pol_delta]].' },
      ] },
      { id: 'cd-pol-delta', title: 'DNA Pol delta synthesis & 3-prime proofreading', camera: { part: 'pol_delta', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'pol_delta', flow: true,
        ghost: ['pol_delta', 'helicase', 'chromatin'], tags: ['pol_delta', 'helicase', 'chromatin'], cues: [
        { id: 'cd.ch1.s1.01', text: 'Clamped to DNA by PCNA, [[DNA Pol delta|pol_delta]] builds complementary DNA strands from 5-prime to 3-prime.' },
        { id: 'cd.ch1.s1.02', text: 'When a wrong base slips in, [[Pol delta|pol_delta]] backs up and its 3-prime exonuclease excises the mismatch.' },
        { id: 'cd.ch1.s1.03', text: 'Proofreading cuts errors roughly thousandfold, yet rare copy mistakes still seed evolution.' },
      ] },
      { id: 'cd-rna-pol2', title: 'Stage B: RNA Pol II bubble, 5-prime cap & poly-A tail', camera: { part: 'rna_pol2', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'rna_pol2', flow: true,
        ghost: ['rna_pol2', 'pre_mrna', 'chromatin'], tags: ['rna_pol2', 'pre_mrna', 'chromatin'], cues: [
        { id: 'cd.ch1.s2.01', text: 'Next door in Stage B, twelve-subunit [[RNA Pol II|rna_pol2]] opens a 12 base-pair transcription bubble.' },
        { id: 'cd.ch1.s2.02', text: 'Reading the 3-prime template strand, [[RNA Pol II|rna_pol2]] synthesizes complementary [[pre-mRNA|pre_mrna]] with uracil.' },
        { id: 'cd.ch1.s2.03', text: 'A 5-prime m7G cap and 3-prime poly-A tail shield nascent [[pre-mRNA|pre_mrna]] and license nuclear export.' },
      ] },
    ] },
    { id: 'ch2', title: 'Stage C: Spliceosome & Alternative Splicing', steps: [
      { id: 'cd-spliceosome', title: 'Megadalton spliceosome & intron lariat excision', camera: { view: 'spliceosome', dur: 2.4, orbit: 2 }, blink: 'spliceosome', flow: true, ghost: false,
        tags: ['spliceosome', 'pre_mrna', 'intron_lariat', 'exon_junction'], cues: [
        { id: 'cd.ch2.s0.01', text: 'Eukaryotic [[pre-mRNA|pre_mrna]] mixes coding exons with non-coding introns that must be removed cleanly.' },
        { id: 'cd.ch2.s0.02', text: 'The megadalton [[spliceosome|spliceosome]] binds GU and AG splice signals across five snRNP subcomplexes.' },
        { id: 'cd.ch2.s0.03', text: 'Two Mg2+ cuts loop each intron into an excised [[intron lariat|intron_lariat]] while sealing [[exons|exon_junction]].' },
      ] },
      { id: 'cd-alt-splicing', title: 'Live Alternative Splicing: Isoform A vs Isoform B', camera: { part: 'exon_junction', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'exon_junction', flow: true,
        ghost: ['exon_junction', 'spliceosome', 'intron_lariat'], tags: ['exon_junction', 'spliceosome', 'intron_lariat'], cues: [
        { id: 'cd.ch2.s1.01', text: 'In Isoform A, the [[spliceosome|spliceosome]] joins Exons 1, 2 and 3 into one continuous [[exon junction|exon_junction]].' },
        { id: 'cd.ch2.s1.02', text: 'Toggle Isoform B so the [[spliceosome|spliceosome]] skips Exon 2 and fuses Exon 1 to Exon 3 at [[exons|exon_junction]].' },
        { id: 'cd.ch2.s1.03', text: 'Alternative splicing lets 20,000 human genes build over 100,000 distinct proteins from [[exons|exon_junction]].' },
      ] },
    ] },
    { id: 'ch3', title: 'Stage D: Nuclear Export & 80S Ribosome Translation', steps: [
      { id: 'cd-npc-export', title: 'Nuclear Pore Complex export into cytosolic polysomes', camera: { view: 'translation', dur: 2.4, orbit: 2 }, blink: 'npc', flow: true, ghost: false,
        tags: ['npc', 'mature_mrna', 'polysome'], cues: [
        { id: 'cd.ch3.s0.01', text: 'Capped, spliced [[mature mRNA|mature_mrna]] crosses the 120 nm eight-fold [[Nuclear Pore Complex|npc]] into cytosol.' },
        { id: 'cd.ch3.s0.02', text: 'Export receptors thread [[mature mRNA|mature_mrna]] through FG-repeat channels inside the [[nuclear pore|npc]].' },
        { id: 'cd.ch3.s0.03', text: 'Once outside, multiple ribosomes load onto one [[mature mRNA|mature_mrna]] to form a busy [[polysome|polysome]] arc.' },
      ] },
      { id: 'cd-ribo-trna', title: '80S Ribosome & tRNA A-P-E codon decoding', camera: { part: 'ribosome_80s', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ribosome_80s', flow: true,
        ghost: ['ribosome_80s', 'trna_ape', 'mature_mrna'], tags: ['ribosome_80s', 'trna_ape', 'mature_mrna'], cues: [
        { id: 'cd.ch3.s1.01', text: 'Focus on one [[80S ribosome|ribosome_80s]], built from a 40S decoding unit and a 60S catalytic subunit.' },
        { id: 'cd.ch3.s1.02', text: 'L-shaped [[tRNAs|trna_ape]] match three-base anticodons to [[mRNA|mature_mrna]] codons inside the [[80S ribosome|ribosome_80s]].' },
        { id: 'cd.ch3.s1.03', text: 'Powered by GTP, each [[tRNA|trna_ape]] ratchets through A, P and E sites as the chain advances one codon.' },
      ] },
      { id: 'cd-polypeptide', title: '60S rRNA ribozyme & nascent polypeptide extrusion', camera: { part: 'polypeptide', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'polypeptide', flow: true,
        ghost: ['polypeptide', 'ribosome_80s', 'trna_ape', 'polysome'], tags: ['polypeptide', 'ribosome_80s', 'trna_ape', 'polysome'], cues: [
        { id: 'cd.ch3.s2.01', text: 'Inside the 60S core of the [[80S ribosome|ribosome_80s]], ribosomal RNA itself catalyzes every peptide bond.' },
        { id: 'cd.ch3.s2.02', text: 'The growing [[polypeptide|polypeptide]] threads through a 10 nm exit tunnel while spent [[tRNA|trna_ape]] leaves site E.' },
        { id: 'cd.ch3.s2.03', text: 'Across the [[polysome|polysome]], dozens of [[polypeptide|polypeptide]] chains emerge in parallel from one transcript.' },
      ] },
    ] },
    { id: 'ch4', title: 'Stage E: Chaperone Folding & Live Point Mutations', steps: [
      { id: 'cd-chaperones', title: 'Hsp70 shielding & TRiC/GroEL folding chamber', camera: { view: 'mutation_bench', dur: 2.4, orbit: 2 }, blink: 'hsp70', flow: true, ghost: false,
        tags: ['polypeptide', 'hsp70', 'tric_groel', 'hb_wildtype'], cues: [
        { id: 'cd.ch4.s0.01', text: 'Unfolded [[polypeptide|polypeptide]] segments expose sticky hydrophobic patches that risk clumping in cytosol.' },
        { id: 'cd.ch4.s0.02', text: 'ATP-driven [[Hsp70|hsp70]] clamps nascent chains, then hands stubborn folds into the [[TRiC barrel|tric_groel]].' },
        { id: 'cd.ch4.s0.03', text: 'Inside [[TRiC/GroEL|tric_groel]], isolated folding completes native 3D beta-globin for [[wild-type HbA|hb_wildtype]].' },
      ] },
      { id: 'cd-sickle-hbs', title: 'Single-base missense: HbA Glu6 to HbS Val6 fibers', camera: { part: 'hb_sickle_fiber', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'hb_sickle_fiber', flow: true,
        ghost: ['hb_wildtype', 'hb_sickle_fiber'], tags: ['hb_wildtype', 'hb_sickle_fiber'], cues: [
        { id: 'cd.ch4.s1.01', text: 'In [[wild-type HbA|hb_wildtype]], codon 6 reads GAG, placing charged hydrophilic glutamate on the surface.' },
        { id: 'cd.ch4.s1.02', text: 'Flip one A to T so GAG becomes GTG, swapping Glu6 for nonpolar valine in [[sickle HbS|hb_sickle_fiber]].' },
        { id: 'cd.ch4.s1.03', text: 'Under low oxygen, Val6 on [[sickle HbS|hb_sickle_fiber]] docks into nearby beta pockets and forms rigid fibers.' },
      ] },
      { id: 'cd-acrb-efflux', title: 'Adaptive bacterial mutation: AcrB efflux pocket', camera: { part: 'acrb_pocket', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'acrb_pocket', flow: true,
        ghost: ['acrb_pocket', 'hb_sickle_fiber'], tags: ['acrb_pocket', 'hb_sickle_fiber'], cues: [
        { id: 'cd.ch4.s2.01', text: 'Mutations are not always harmful: switch the bench to bacterial [[AcrB efflux pump|acrb_pocket]].' },
        { id: 'cd.ch4.s2.02', text: 'Changing GGC to GAC swaps Gly288 for Asp288, reshaping the distal [[AcrB binding pocket|acrb_pocket]].' },
        { id: 'cd.ch4.s2.03', text: 'Under antibiotic pressure, mutant [[AcrB pockets|acrb_pocket]] expel fluoroquinolone faster so carriers survive.' },
      ] },
    ] },
    { id: 'ch5', title: 'Atomic Codon Switch, Selection & Next Steps', steps: [
      { id: 'cd-codon-atoms', title: 'Atomic 0.1-0.5 nm codon H-bond switch', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'codon_atoms', flow: true, ghost: false,
        tags: ['codon_atoms', 'hb_sickle_fiber', 'acrb_pocket'], cues: [
        { id: 'cd.ch5.s0.01', text: 'Zoom to 0.1 to 0.5 nm in the [[codon atoms|codon_atoms]] inset to see one letter change at atomic scale.' },
        { id: 'cd.ch5.s0.02', text: 'Across [[codon atoms|codon_atoms]], C, H, N, O and P geometry flips specific hydrogen-bond donors and acceptors.' },
        { id: 'cd.ch5.s0.03', text: 'Catalytic Mg2+ ions steady [[codon atoms|codon_atoms]] whether flipping GAG to GTG or GGC to GAC.' },
      ] },
      { id: 'cd-selection', title: 'Balancing vs directional natural selection', camera: { view: 'mutation_bench', dur: 2.3, orbit: 2 }, blink: 'hb_wildtype', flow: true,
        ghost: ['hb_wildtype', 'hb_sickle_fiber', 'acrb_pocket', 'codon_atoms'], tags: ['hb_wildtype', 'hb_sickle_fiber', 'acrb_pocket', 'codon_atoms'], cues: [
        { id: 'cd.ch5.s1.01', text: 'One [[atomic substitution|codon_atoms]] alters side-chain chemistry, protein folding and organism survival.' },
        { id: 'cd.ch5.s1.02', text: 'Carrying both [[HbA|hb_wildtype]] and [[HbS|hb_sickle_fiber]] resists severe malaria, driving balancing selection.' },
        { id: 'cd.ch5.s1.03', text: 'Meanwhile, antibiotics favor mutant [[AcrB|acrb_pocket]] carriers, driving directional natural selection.' },
      ] },
      { id: 'cd-finale', title: 'Central Dogma recap & onward to Bioenergetics', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['chromatin', 'spliceosome', 'ribosome_80s', 'tric_groel', 'codon_atoms'], cues: [
        { id: 'cd.ch5.s2.01', text: 'From [[chromatin|chromatin]] to [[spliceosome|spliceosome]] and [[80S ribosomes|ribosome_80s]], one pipeline builds every enzyme.' },
        { id: 'cd.ch5.s2.02', text: 'Chaperones like [[TRiC|tric_groel]] fold chains whose fate traces back to single [[codon atoms|codon_atoms]].' },
        { id: 'cd.ch5.s2.03', text: 'Test the splicing and mutation toggles now, then continue to Bioenergetics to see what powers it all.' },
      ] },
    ] },
  ],
  details: {},
};
