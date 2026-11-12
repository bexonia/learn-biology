import type { TourDefinition } from "./tourService.js";

// Guided tour of Stage 0: Introduction to Biology (life-overview), played by cell_explorer.html.
// Every cue stays <= 110 plain characters and 100% pure ASCII for clean TTS synthesis.
export const biology_introTour: TourDefinition = {
  title: 'Introduction to biology: cells, parasitic cells & viruses',
  root: 'life-overview',
  page: null,
  view: 'life-overview',
  summary: 'Start here: compare simple prokaryotes, compartmentalized eukaryotes, ATP-stealing intracellular bacteria and non-living viruses across the four pillars of life.',
  parts: [
    ['real-bacterium', 'Simple Cell — Prokaryote (E. coli)', '#5cff9d'],
    ['real-cell', 'Complex Cells — Eukaryotes', '#7fd8ff'],
    ['parasitic-cells-overview', 'Parasitic & Minimal Cells', '#ffd26a'],
    ['viruses', 'Viruses — Acellular Hijackers', '#ff6f7a'],
  ],
  chapters: [
    { id: 'ch0', title: 'The four pillars of life', steps: [
      { id: 'pillars', title: 'What makes something alive?', camera: { view: 'life-overview', orbit: 3 }, ghost: false, cues: [
        { id: 'intro.ch0.pillars.01', text: 'Welcome to biology: four stages stand side by side to show what makes a cell alive.' },
        { id: 'intro.ch0.pillars.02', text: 'Every autonomous living cell on Earth relies on the same four core pillars.' },
        { id: 'intro.ch0.pillars.03', text: 'First, a lipid membrane boundary encloses cytoplasm and separates inside from outside.' },
        { id: 'intro.ch0.pillars.04', text: 'Second, a double-stranded DNA genome stores the heritable instructions for every part.' },
        { id: 'intro.ch0.pillars.05', text: 'Third, ribosomes read messenger RNA to build proteins; fourth, enzymes generate own ATP.' },
        { id: 'intro.ch0.pillars.06', text: 'Across these four pedestals, watch how life scales those pillars up or strips them away.' },
      ] },
    ] },
    { id: 'ch1', title: 'Simple cells: prokaryotes', steps: [
      { id: 'prokaryote', title: '1. Prokaryotes — life in one open room', camera: { part: 'real-bacterium', dist: 1.35 }, blink: 'real-bacterium', ghost: ['real-bacterium'], tags: ['real-bacterium', 'prokaryote'], detail: 'prokaryote', cues: [
        { id: 'intro.ch1.prok.01', text: '[[Prokaryotes|real-bacterium]] like E. coli run all four pillars inside one shared open room.' },
        { id: 'intro.ch1.prok.02', text: 'With no nucleus, its 4.6 Mbp circular dsDNA coils directly in the central nucleoid.' },
        { id: 'intro.ch1.prok.03', text: 'Fast 70S ribosomes latch onto mRNA right beside the DNA, translating genes immediately.' },
        { id: 'intro.ch1.prok.04', text: 'In the plasma membrane, respiratory pumps and ATP synthase turbines mint its own ATP.' },
        { id: 'intro.ch1.prok.05', text: 'A tough peptidoglycan chainmail wall braces the envelope against internal water pressure.' },
        { id: 'intro.ch1.prok.06', text: 'Biology is easiest to learn here first: every core machine works in plain view.' },
      ] },
    ] },
    { id: 'ch2', title: 'Complex cells: eukaryotes', steps: [
      { id: 'eukaryote', title: '2. Eukaryotes — internal rooms & power plants', camera: { part: 'real-cell', dist: 1.35 }, blink: 'real-cell', ghost: ['real-cell'], tags: ['real-cell', 'real-fungal', 'real-plant'], detail: 'cell', cues: [
        { id: 'intro.ch2.euk.01', text: '[[Eukaryotes|real-cell]] - yeast, animal and plant cells - scale up 1,000-fold in volume.' },
        { id: 'intro.ch2.euk.02', text: 'To manage that size, they divide the interior into specialized membrane-bound organelles.' },
        { id: 'intro.ch2.euk.03', text: 'Linear chromosomes sit inside a double-membrane nucleus guarded by selective nuclear pores.' },
        { id: 'intro.ch2.euk.04', text: 'Larger 80S ribosomes translate exported mRNA across the cytosol and rough ER sheets.' },
        { id: 'intro.ch2.euk.05', text: 'Hundreds of mitochondria - once free-living bacteria - supply ATP across the whole cell.' },
        { id: 'intro.ch2.euk.06', text: 'Plant cells add a second bacterial symbiont, the chloroplast, to turn sunlight into sugar.' },
      ] },
    ] },
    { id: 'ch3', title: 'Parasitic & minimal cells', steps: [
      { id: 'parasitic', title: '3. Incomplete cells — own ribosomes, borrowed ATP', camera: { part: 'parasitic-cells-overview', dist: 1.35 }, blink: 'parasitic-cells-overview', ghost: ['parasitic-cells-overview'], tags: ['parasitic-cells-overview'], detail: 'parasitic-cells-overview', cues: [
        { id: 'intro.ch3.para.01', text: '[[Parasitic and minimal bacteria|parasitic-cells-overview]] often confuse students because many live inside host cells.' },
        { id: 'intro.ch3.para.02', text: 'Meet Mycoplasma, Chlamydia and Rickettsia: tiny bacteria that shed dozens of metabolic pathways.' },
        { id: 'intro.ch3.para.03', text: 'Are they viruses? Not at all: each keeps a lipid membrane and circular dsDNA of 0.58 to 1.1 Mbp.' },
        { id: 'intro.ch3.para.04', text: 'Crucially, they carry their own 70S ribosomes to build proteins and divide by binary fission.' },
        { id: 'intro.ch3.para.05', text: 'Because they keep Pillars 1, 2 and 3, they are true living cells - just metabolically incomplete.' },
        { id: 'intro.ch3.para.06', text: 'Chlamydia and Rickettsia use Npt1 and Tlc1 membrane antiporters to import ATP from a host cell.' },
        { id: 'intro.ch3.para.07', text: 'Antibiotics targeting 70S ribosomes still stop them, proving they run cellular protein factories.' },
      ] },
    ] },
    { id: 'ch4', title: 'Viruses: why code alone is not alive', steps: [
      { id: 'viruses', title: '4. Viruses — genetic hijackers with zero ribosomes', camera: { part: 'viruses', dist: 1.35 }, blink: 'viruses', ghost: ['viruses'], tags: ['viruses'], detail: 'viruses', cues: [
        { id: 'intro.ch4.vir.01', text: '[[Viruses|viruses]] like Phage T4, SARS-CoV-2 and HIV-1 cross the line out of cellular life.' },
        { id: 'intro.ch4.vir.02', text: 'Each virion is only compact DNA or RNA packed inside a protein capsid and optional lipid coat.' },
        { id: 'intro.ch4.vir.03', text: 'Unlike Chlamydia or E. coli, a virus has zero cytoplasm, zero ATP synthesis and zero ribosomes.' },
        { id: 'intro.ch4.vir.04', text: 'Outside a living cell a virion is completely inert, unable to read genes or copy itself.' },
        { id: 'intro.ch4.vir.05', text: 'Only after docking and injecting its genome can it hijack host ribosomes to print new virions.' },
      ] },
      { id: 'course', title: 'Start the sequential course', camera: { view: 'life-overview', orbit: 3 }, ghost: false, cues: [
        { id: 'intro.ch4.next.01', text: 'You now have the map of biology: from autonomous cells to ATP thieves and acellular viruses.' },
        { id: 'intro.ch4.next.02', text: 'Click Next in Course or [[Bacterium (E. coli)|real-bacterium]] to explore our first living cell.' },
      ] },
    ] },
  ],
  details: {},
};
