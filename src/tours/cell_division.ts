import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 14: Cell Division - Binary Fission, Mitosis & Meiosis (real-cell-division), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const cell_divisionTour: TourDefinition = {
  title: 'Cell Division (Binary Fission, Mitosis & Meiosis): a guided tour',
  root: 'real-cell-division',
  page: 'cell_division_realistic.html',
  view: 'overview',
  summary: 'Compare bacterial binary fission (oriC, ParABS, FtsZ Z-ring), mitotic spindle mechanics and tension checkpoint (condensin, cohesin, kinetochore, separase, contractile ring), meiotic crossing-over (bivalent, synaptonemal complex, Spo11, Rad51, chiasmata, Holliday junctions), and atomic DNA base pairs.',
  views: {
    overview: 'real-cell-division',
    focus: 'real-cell-division',
    fission: 'real-div-fission',
    mitosis_spindle: 'real-div-spindle',
    checkpoint: 'real-div-kinetochore',
    meiosis_crossover: 'real-div-meiosis',
    molecular_inset: 'real-div-holliday',
  },
  chapters: [
    { id: 'ch0', title: 'Why Cells Divide: Three Blueprints', steps: [
      { id: 'div-intro', title: 'Copying and partitioning a genome intact', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['cell_cortex', 'spindle_mt', 'sister_chromatids', 'ftsz_ring'], cues: [
        { id: 'div.ch0.s0.01', text: 'Every cellular lineage survives by copying its full genome and dividing it without losing DNA.' },
        { id: 'div.ch0.s0.02', text: 'Inside this cutaway [[dividing cell|cell_cortex]], glowing [[spindle fibers|spindle_mt]] organize paired [[sister chromatids|sister_chromatids]].' },
        { id: 'div.ch0.s0.03', text: 'Above left, a 2 um E. coli rod splits by bacterial fission using an [[FtsZ Z-ring|ftsz_ring]].' },
      ] },
      { id: 'div-three-paths', title: 'Binary fission, mitosis & meiosis compared', camera: { part: 'cell_cortex', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'cell_cortex',
        ghost: ['cell_cortex', 'sister_chromatids', 'bivalent', 'ftsz_ring'], tags: ['cell_cortex', 'sister_chromatids', 'bivalent', 'ftsz_ring'], cues: [
        { id: 'div.ch0.s1.01', text: 'Prokaryotes use binary fission: copying one circular chromosome and pinching via [[FtsZ|ftsz_ring]].' },
        { id: 'div.ch0.s1.02', text: 'Somatic mitosis splits identical [[sister chromatids|sister_chromatids]] inside the [[cell cortex|cell_cortex]] into two 2n clones.' },
        { id: 'div.ch0.s1.03', text: 'Germline meiosis pairs homologs into [[bivalents|bivalent]], swaps genes and yields four unique 1n gametes.' },
      ] },
    ] },
    { id: 'ch1', title: 'Prokaryotic Binary Fission: E. coli', steps: [
      { id: 'div-par-seg', title: 'Bidirectional oriC replication & Par segregation', camera: { view: 'fission', dur: 2.4, orbit: 2 }, blink: 'par_segregation', flow: true, ghost: false,
        tags: ['par_segregation', 'ftsz_ring'], cues: [
        { id: 'div.ch1.s0.01', text: 'Zoom to E. coli, where two replication forks copy a 4.6 Mbp circular genome from oriC to ter.' },
        { id: 'div.ch1.s0.02', text: 'Active [[Par segregation|par_segregation]] machinery drives sister origins toward opposite bacterial poles.' },
        { id: 'div.ch1.s0.03', text: 'As the rod elongates, [[DNA translocases|par_segregation]] clear the terminus away from the mid-cell plane.' },
      ] },
      { id: 'div-ftsz-ring', title: 'GTP-powered FtsZ Z-ring & septal constriction', camera: { part: 'ftsz_ring', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ftsz_ring', flow: true,
        ghost: ['ftsz_ring', 'par_segregation'], tags: ['ftsz_ring', 'par_segregation'], cues: [
        { id: 'div.ch1.s1.01', text: 'Oscillating Min proteins block the poles so an [[FtsZ Z-ring|ftsz_ring]] assembles precisely at mid-cell.' },
        { id: 'div.ch1.s1.02', text: 'Powered by GTP, [[FtsZ filaments|ftsz_ring]] treadmill around the waist and guide inward septum synthesis.' },
        { id: 'div.ch1.s1.03', text: 'Once the [[Z-ring|ftsz_ring]] closes behind cleared [[nucleoids|par_segregation]], two clonal bacteria separate cleanly.' },
      ] },
    ] },
    { id: 'ch2', title: 'Mitosis Part 1: Compaction & Bipolar Spindle', steps: [
      { id: 'div-condensin', title: 'Condensin loop extrusion & cohesin tethering', camera: { view: 'mitosis_spindle', dur: 2.4, orbit: 2 }, blink: 'condensin', ghost: false,
        tags: ['condensin', 'cohesin', 'sister_chromatids'], cues: [
        { id: 'div.ch2.s0.01', text: 'Now enter eukaryotic mitosis, where meters of linear DNA must travel cleanly without tangling.' },
        { id: 'div.ch2.s0.02', text: 'ATP-driven [[condensin|condensin]] rings extrude chromatin loops, packing DNA into sturdy [[sister chromatids|sister_chromatids]].' },
        { id: 'div.ch2.s0.03', text: 'Ring-shaped [[cohesin|cohesin]] clamps encircle both [[sister chromatids|sister_chromatids]] so copies stay paired until separation.' },
      ] },
      { id: 'div-neb-centrosomes', title: 'Nuclear envelope breakdown & centrosome poles', camera: { part: 'centrosome', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'centrosome',
        ghost: ['centrosome', 'nuclear_env', 'spindle_mt'], tags: ['centrosome', 'nuclear_env', 'spindle_mt'], cues: [
        { id: 'div.ch2.s1.01', text: 'Mitotic kinases phosphorylate nuclear lamins, dissolving the [[nuclear envelope|nuclear_env]] into membrane vesicles.' },
        { id: 'div.ch2.s1.02', text: 'Two duplicated [[centrosomes|centrosome]] migrate to opposite poles, anchoring the emerging bipolar spindle.' },
        { id: 'div.ch2.s1.03', text: 'Each [[centrosome|centrosome]] nucleates dynamic [[spindle microtubules|spindle_mt]] that grow and shrink across the cytoplasm.' },
      ] },
      { id: 'div-kinesin5-capture', title: 'Kinesin-5 pole pushing & kinetochore capture', camera: { part: 'kinesin5', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'kinesin5', flow: true,
        ghost: ['kinesin5', 'spindle_mt', 'kinetochore', 'sister_chromatids'], tags: ['kinesin5', 'spindle_mt', 'kinetochore', 'sister_chromatids'], cues: [
        { id: 'div.ch2.s2.01', text: 'Tetrameric [[kinesin-5|kinesin5]] motors bridge overlapping [[spindle microtubules|spindle_mt]] and push the poles apart.' },
        { id: 'div.ch2.s2.02', text: 'Searching [[microtubule tips|spindle_mt]] capture protein [[kinetochores|kinetochore]] built at each chromosome centromere.' },
        { id: 'div.ch2.s2.03', text: 'Opposing fibers pull on both [[kinetochores|kinetochore]], walking every [[sister pair|sister_chromatids]] to the equator.' },
      ] },
    ] },
    { id: 'ch3', title: 'Mitosis Part 2: Checkpoint, Anaphase & Cytokinesis', steps: [
      { id: 'div-sac-checkpoint', title: 'Metaphase alignment & spindle assembly checkpoint', camera: { view: 'checkpoint', dur: 2.4, orbit: 2 }, blink: 'kinetochore', flow: true, ghost: false,
        tags: ['kinetochore', 'cohesin', 'sister_chromatids', 'spindle_mt'], cues: [
        { id: 'div.ch3.s0.01', text: 'At metaphase, all [[sister chromatids|sister_chromatids]] line up along the equator under balanced [[spindle|spindle_mt]] pull.' },
        { id: 'div.ch3.s0.02', text: 'Even one unattached [[kinetochore|kinetochore]] emits a stop signal that holds the entire cell at metaphase.' },
        { id: 'div.ch3.s0.03', text: 'Balanced opposite pull across every [[kinetochore|kinetochore]] pair signals when [[cohesin|cohesin]] can be cut.' },
      ] },
      { id: 'div-separase-anaphase', title: 'Separase activation, cohesin cleavage & anaphase', camera: { part: 'separase', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'separase', flow: true,
        ghost: ['separase', 'cohesin', 'sister_chromatids', 'spindle_mt', 'centrosome'], tags: ['separase', 'cohesin', 'sister_chromatids', 'spindle_mt'], cues: [
        { id: 'div.ch3.s1.01', text: 'Once tension satisfies the checkpoint, APC/C removes securin and unleashes active [[separase|separase]].' },
        { id: 'div.ch3.s1.02', text: 'Active [[separase|separase]] cleaves every [[cohesin|cohesin]] ring simultaneously, triggering irreversible anaphase.' },
        { id: 'div.ch3.s1.03', text: 'Depolymerizing [[spindle fibers|spindle_mt]] and dynein pull freed [[sister chromatids|sister_chromatids]] toward opposite [[poles|centrosome]].' },
      ] },
      { id: 'div-telophase-cytokinesis', title: 'Nuclear reassembly & contractile ring cytokinesis', camera: { part: 'contractile_ring', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'contractile_ring', flow: true,
        ghost: ['contractile_ring', 'cell_cortex', 'nuclear_env'], tags: ['contractile_ring', 'cell_cortex', 'nuclear_env'], cues: [
        { id: 'div.ch3.s2.01', text: 'In telophase, chromosomes decondense and a fresh [[nuclear envelope|nuclear_env]] reforms around each daughter set.' },
        { id: 'div.ch3.s2.02', text: 'Around the equator, an actin-myosin II [[contractile ring|contractile_ring]] cinches the [[cell cortex|cell_cortex]] inward.' },
        { id: 'div.ch3.s2.03', text: 'As the cleavage furrow pinches shut via the [[contractile ring|contractile_ring]], two identical 2n daughters emerge.' },
      ] },
    ] },
    { id: 'ch4', title: 'Meiosis: Synapsis, Crossing-Over & Gametes', steps: [
      { id: 'div-bivalent-synapsis', title: 'Homolog pairing & synaptonemal complex', camera: { view: 'meiosis_crossover', dur: 2.4, orbit: 2 }, blink: 'synaptonemal', ghost: false,
        tags: ['bivalent', 'synaptonemal', 'cohesin'], cues: [
        { id: 'div.ch4.s0.01', text: 'Sexual reproduction needs meiosis: one DNA copy followed by two divisions to halve chromosome count.' },
        { id: 'div.ch4.s0.02', text: 'In Prophase I, maternal and paternal homologs align gene-by-gene into a four-chromatid [[bivalent|bivalent]].' },
        { id: 'div.ch4.s0.03', text: 'A protein zipper called the [[synaptonemal complex|synaptonemal]] holds both homologs tightly inside the [[bivalent|bivalent]].' },
      ] },
      { id: 'div-spo11-rad51', title: 'Programmed Spo11 breaks & Rad51 strand invasion', camera: { part: 'rad51', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'rad51', flow: true,
        ghost: ['spo11', 'rad51', 'bivalent', 'synaptonemal'], tags: ['spo11', 'rad51', 'bivalent'], cues: [
        { id: 'div.ch4.s1.01', text: 'Rather than avoiding breaks, [[Spo11|spo11]] deliberately cuts DNA strands to initiate meiotic recombination.' },
        { id: 'div.ch4.s1.02', text: 'After end resection, [[Rad51|rad51]] coats single-stranded DNA and guides it into the matching homolog.' },
        { id: 'div.ch4.s1.03', text: 'This [[Rad51|rad51]] strand invasion physically links non-sister chromatids across the paired [[bivalent|bivalent]].' },
      ] },
      { id: 'div-chiasma-holliday', title: 'Chiasmata & four-way Holliday junction exchange', camera: { part: 'chiasma', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'chiasma', flow: true,
        ghost: ['chiasma', 'holliday', 'bivalent'], tags: ['chiasma', 'holliday', 'bivalent'], cues: [
        { id: 'div.ch4.s2.01', text: 'Where DNA strands cross between homologs, X-shaped [[chiasmata|chiasma]] lock the [[bivalent|bivalent]] together.' },
        { id: 'div.ch4.s2.02', text: 'Crossing-over at [[chiasmata|chiasma]] swaps homologous DNA arms through four-way [[Holliday junctions|holliday]].' },
        { id: 'div.ch4.s2.03', text: 'Resolving each [[Holliday junction|holliday]] seals mosaic maternal-paternal chromosomes with brand-new allele sets.' },
      ] },
      { id: 'div-meiosis-rounds', title: 'Meiosis I homolog split & Meiosis II gametes', camera: { part: 'bivalent', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'bivalent', flow: true,
        ghost: ['bivalent', 'cohesin', 'separase', 'sister_chromatids', 'contractile_ring'], tags: ['bivalent', 'cohesin', 'separase', 'sister_chromatids', 'contractile_ring'], cues: [
        { id: 'div.ch4.s3.01', text: 'In Meiosis I, [[separase|separase]] cuts arm [[cohesin|cohesin]] while centromeres stay protected, splitting whole [[bivalents|bivalent]].' },
        { id: 'div.ch4.s3.02', text: 'Random orientation of each [[bivalent|bivalent]] independently assorts maternal and paternal chromosomes to poles.' },
        { id: 'div.ch4.s3.03', text: 'Meiosis II then splits [[sister chromatids|sister_chromatids]] and the [[contractile ring|contractile_ring]] yields four unique 1n gametes.' },
      ] },
    ] },
    { id: 'ch5', title: 'Molecular Nanomachines to Base Pairs & Recap', steps: [
      { id: 'div-molecular-inset', title: 'Nanomachine rings down to DNA base pairs', camera: { view: 'molecular_inset', dur: 2.4, orbit: 2 }, blink: 'dna_basepair', flow: true, ghost: false,
        tags: ['condensin', 'cohesin', 'separase', 'holliday', 'dna_basepair'], cues: [
        { id: 'div.ch5.s0.01', text: 'Zoom into the molecular inset where [[condensin|condensin]], [[cohesin|cohesin]] and [[separase|separase]] act at 10 to 50 nm.' },
        { id: 'div.ch5.s0.02', text: 'Every crossover at a [[Holliday junction|holliday]] ultimately realigns complementary [[DNA base pairs|dna_basepair]] below.' },
        { id: 'div.ch5.s0.03', text: 'At 0.34 nm rise, A-T and G-C [[base pairs|dna_basepair]] depend on C, H, N, O, P atoms and catalytic Mg2+ ions.' },
      ] },
      { id: 'div-finale', title: 'Three division engines compared & next steps', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['ftsz_ring', 'kinetochore', 'chiasma', 'dna_basepair'], cues: [
        { id: 'div.ch5.s1.01', text: 'Bacteria divide rapidly by cloning circular DNA and pinching mid-cell with an [[FtsZ Z-ring|ftsz_ring]].' },
        { id: 'div.ch5.s1.02', text: 'Mitosis preserves diploid clones via [[kinetochore|kinetochore]] tension, while meiosis recombines genes at [[chiasmata|chiasma]].' },
        { id: 'div.ch5.s1.03', text: 'Scrub the phase bar or click any molecular tag now, including [[base pairs|dna_basepair]], to explore deeper.' },
      ] },
    ] },
  ],
  details: {},
};
