import { Context, Effect, Layer } from 'effect';
import { AtomRef } from 'effect/reactivity';
import { ES_NODES as ES_FULL_NODES } from './locales/es_nodes.js';
import { ES_TOURS_PHRASES } from './locales/es_tours.js';
import { ES_EXTRA_PHRASES } from './locales/es_phrases.js';

export type LocaleCode = 'en' | 'es' | (string & {});

export interface NodeTranslation {
  readonly name?: string;
  readonly scale?: string;
  readonly desc?: string;
}

export interface LocaleDefinition {
  readonly code: LocaleCode;
  readonly shortLabel: string;
  readonly nativeName: string;
  readonly englishName: string;
  readonly speechLang: string;
  readonly ui: Record<string, string>;
  readonly nodes: Record<string, NodeTranslation>;
  readonly phrases: Record<string, string>;
  readonly rules: ReadonlyArray<readonly [RegExp, string]>;
}

export interface I18nShape {
  readonly localeRef: AtomRef.AtomRef<LocaleCode>;
  readonly locale: LocaleCode;
  readonly supportedLocales: ReadonlyArray<LocaleDefinition>;
  readonly getLocaleDefinition: (code?: LocaleCode) => LocaleDefinition;
  readonly setLocale: (code: LocaleCode) => LocaleCode;
  readonly cycleLocale: () => LocaleCode;
  readonly registerLocale: (def: LocaleDefinition) => void;
  readonly t: (key: string, params?: Record<string, string | number>) => string;
  readonly tr: (text: string) => string;
  readonly nodeName: (id: string, fallback: string) => string;
  readonly nodeScale: (id: string, fallback: string) => string;
  readonly nodeDesc: (id: string, fallback: string) => string;
  readonly onChange: (listener: (locale: LocaleCode) => void) => () => void;
  readonly createLanguageBadge: (options?: { id?: string; alignRight?: boolean }) => HTMLElement;
  readonly bindStandalonePage: () => void;
  readonly detectLocaleEffect: Effect.Effect<LocaleCode>;
  readonly localeEffect: Effect.Effect<LocaleCode>;
  readonly setLocaleEffect: (code: LocaleCode) => Effect.Effect<LocaleCode>;
  readonly cycleLocaleEffect: Effect.Effect<LocaleCode>;
  readonly tEffect: (key: string, params?: Record<string, string | number>) => Effect.Effect<string>;
  readonly trEffect: (text: string) => Effect.Effect<string>;
}

const STORAGE_KEY = 'learnBioLang';

const SPANISH_TIMEZONES = new Set([
  'Europe/Madrid',
  'Atlantic/Canary',
  'America/Mexico_City',
  'America/Cancun',
  'America/Monterrey',
  'America/Tijuana',
  'America/Merida',
  'America/Chihuahua',
  'America/Mazatlan',
  'America/Hermosillo',
  'America/Bogota',
  'America/Buenos_Aires',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Cordoba',
  'America/Argentina/Mendoza',
  'America/Santiago',
  'America/Lima',
  'America/Caracas',
  'America/Montevideo',
  'America/Guayaquil',
  'America/La_Paz',
  'America/Asuncion',
  'America/Panama',
  'America/Costa_Rica',
  'America/Guatemala',
  'America/El_Salvador',
  'America/Tegucigalpa',
  'America/Managua',
  'America/Santo_Domingo',
  'America/Havana',
  'America/Puerto_Rico'
]);

const EN_UI: Record<string, string> = {
  structureTree: 'Structure tree',
  cells: 'Cells',
  viruses: 'Viruses',
  level: 'Level {n}',
  madeOf: 'Made of',
  whatMoves: 'What moves',
  speed: 'Speed',
  takesIn: 'Takes in',
  givesOut: 'Gives out',
  guidedTour: 'Guided tour',
  guidedTourOf: 'Guided tour of {name}',
  guidedTourTitle: 'Guided tour: {title}',
  upOneLevel: 'Up one level',
  hideTags: 'Hide tags',
  showTags: 'Show tags',
  pause: 'Pause',
  play: 'Play',
  rotate: 'Rotate',
  realisticLook: 'Realistic look',
  xrayLook: 'X-ray look',
  closeCutaway: 'Close cutaway',
  openCutaway: 'Open cutaway',
  savePng: 'Save PNG',
  buildingModel: 'Building model…',
  metabolismOn: 'Metabolism: on',
  metabolismOff: 'Metabolism: off',
  infectionOn: 'Infection: on',
  infectionOff: 'Infection: off',
  replicationOn: 'Replication: on',
  replicationOff: 'Replication: off',
  hintDefault: 'Drag to rotate · scroll to zoom · click a blue tag to go deeper · Esc to go up',
  hintReal: 'Drag to look around · W A S D to move · scroll to zoom · click a blue tag to go deeper · Esc to go up',
  hintStandalone: 'Drag to look around · W A S D to move · scroll to zoom · right-drag to pan · hover a name to highlight it',
  tipDefault:
    'Molecules dock on the organelle that asked for them. Once it has them all, they are drawn in, it lights up, and what it makes sets off. Hover a tag for its recipe, or a molecule below to follow it.',
  smallestLevel:
    'This is the smallest level in this model. An atom is a nucleus of protons and neutrons (each made of three quarks) surrounded by electrons.',
  schematicNote:
    'Models are schematic: shapes and arrangements follow real biology, but sizes are not to scale between levels and molecular geometry is approximate.',
  chaptersBtn: '≡ Chapters',
  exitBtn: '✕ Exit',
  narrationBtn: '🔊 Narration',
  paceBtn: 'Pace {v}×',
  showAlone: 'Show alone',
  moreBtn: 'More ▸',
  exploreBtn: 'Explore',
  backToTour: 'Back to tour',
  backToTourE: 'Back to tour (E)',
  exploringOwn: 'Exploring on your own',
  exitTour: 'Exit tour',
  tourComplete: 'Tour complete',
  tourCompleteDesc: 'Now explore on your own: click any tag to go deeper, down to molecules and atoms.',
  replayChapter: 'Replay a chapter',
  leaveTour: 'Leave the tour',
  startTour: 'Start',
  continueTour: 'Continue: {title}',
  chooseChapter: 'Choose a chapter',
  tourKeysHint: 'Space pauses · → next line · Shift + → next part · E explore · M chapters',
  chaptersTitle: 'Chapters',
  transcriptTitle: 'Transcript · {title}',
  settingsTitle: 'Settings',
  autoAdvance: 'Go on to the next part by itself',
  reduceMotion: 'Reduce motion (fade instead of flying)',
  subtitleSize: ' Subtitle size',
  sizeSmall: 'Small',
  sizeMedium: 'Medium',
  sizeLarge: 'Large',
  paceLabel: ' Pace',
  escAgain: 'Press Esc again to leave the tour',
  openThisPart: 'Open this part',
  moreDetailArrow: 'more detail ›',
  moreDetailPrefix: 'More detail · {name}',
  chapterPrefix: 'Chapter {n} · ',
  nextHint: 'Next: → or ▶',
  backHint: 'Back to tour: E',
  fpsTitle: 'Click to show or hide FPS',
  langTitle: 'Language: {current} — Click to switch to {next}',
  openPartTitle: 'Open {name}',
  collapse: 'Collapse',
  expand: 'Expand',
  resetBtn: '↺ Reset',
  resetTitle: 'Reset and start from the beginning (R)',
  startFromBeginning: '↺ Start from beginning',
  resetToast: '↺ Reset to the beginning',
  trackProgressBtn: '☁ Track Progress',
  accountStatusBtn: '✓ {name} ({n}/10)',
  accountModalTitle: 'Course Progress & Optional Account',
  accountModalSub: 'Login is 100% optional. Your step progress is kept in memory & cookies automatically, or sign in to save your courses across devices.',
  tabSignIn: 'Sign In',
  tabRegister: 'Register (Optional)',
  emailLabel: 'Email',
  passwordLabel: 'Password',
  nameOptionalLabel: 'Name (optional, for reference)',
  signInSubmit: 'Sign In & Sync',
  registerSubmit: 'Create Optional Account',
  renewCookieBtn: '↻ Renew Cookie & Session',
  cookieRenewedToast: '✓ Cookie & session renewed for 30 days',
  signOutBtn: 'Sign Out',
  yourCoursesTitle: '10 Cell & Virus Courses',
  resumeStepBtn: '▶ Resume ({step})',
  startCourseBtn: '▶ Start',
  notStartedLabel: 'Not started',
  closeBtn: '✕ Close'
};

const ES_UI: Record<string, string> = {
  structureTree: 'Árbol de estructuras',
  cells: 'Células',
  viruses: 'Virus',
  level: 'Nivel {n}',
  madeOf: 'Compuesto por',
  whatMoves: 'Qué se mueve',
  speed: 'Velocidad',
  takesIn: 'Recibe',
  givesOut: 'Produce',
  guidedTour: 'Visita guiada',
  guidedTourOf: 'Visita guiada de {name}',
  guidedTourTitle: 'Visita guiada: {title}',
  upOneLevel: 'Subir un nivel',
  hideTags: 'Ocultar etiquetas',
  showTags: 'Mostrar etiquetas',
  pause: 'Pausar',
  play: 'Reproducir',
  rotate: 'Rotar',
  realisticLook: 'Vista realista',
  xrayLook: 'Vista rayos X',
  closeCutaway: 'Cerrar corte',
  openCutaway: 'Abrir corte',
  savePng: 'Guardar PNG',
  buildingModel: 'Construyendo modelo…',
  metabolismOn: 'Metabolismo: activo',
  metabolismOff: 'Metabolismo: inactivo',
  infectionOn: 'Infección: activa',
  infectionOff: 'Infección: inactiva',
  replicationOn: 'Replicación: activa',
  replicationOff: 'Replicación: inactiva',
  hintDefault: 'Arrastra para rotar · rueda para zoom · clic en etiqueta azul para profundizar · Esc para subir',
  hintReal: 'Arrastra para mirar · W A S D para moverte · rueda para zoom · clic en etiqueta azul para profundizar · Esc para subir',
  hintStandalone: 'Arrastra para mirar · W A S D para moverte · rueda para zoom · clic derecho para desplazar · pasa el cursor sobre un nombre para resaltarlo',
  tipDefault:
    'Las moléculas se acoplan al orgánulo que las solicitó. Cuando las reúne todas, las absorbe, se ilumina y libera lo que produce. Pasa el cursor sobre una etiqueta para ver su receta, o sobre una molécula abajo para seguirla.',
  smallestLevel:
    'Este es el nivel más pequeño en este modelo. Un átomo es un núcleo de protones y neutrones (cada uno formado por tres quarks) rodeado de electrones.',
  schematicNote:
    'Los modelos son esquemáticos: las formas y disposiciones siguen la biología real, pero los tamaños no están a escala entre niveles y la geometría molecular es aproximada.',
  chaptersBtn: '≡ Capítulos',
  exitBtn: '✕ Salir',
  narrationBtn: '🔊 Narración',
  paceBtn: 'Ritmo {v}×',
  showAlone: 'Mostrar solo',
  moreBtn: 'Más ▸',
  exploreBtn: 'Explorar',
  backToTour: 'Volver al tour',
  backToTourE: 'Volver al tour (E)',
  exploringOwn: 'Explorando por tu cuenta',
  exitTour: 'Salir del tour',
  tourComplete: 'Visita completada',
  tourCompleteDesc: 'Ahora explora por tu cuenta: haz clic en cualquier etiqueta para profundizar hasta las moléculas y átomos.',
  replayChapter: 'Repetir un capítulo',
  leaveTour: 'Salir del tour',
  startTour: 'Comenzar',
  continueTour: 'Continuar: {title}',
  chooseChapter: 'Elegir un capítulo',
  tourKeysHint: 'Espacio pausa · → siguiente línea · Shift + → siguiente parte · E explorar · M capítulos',
  chaptersTitle: 'Capítulos',
  transcriptTitle: 'Transcripción · {title}',
  settingsTitle: 'Ajustes',
  autoAdvance: 'Avanzar a la siguiente parte automáticamente',
  reduceMotion: 'Reducir movimiento (fundido en vez de vuelo)',
  subtitleSize: ' Tamaño de subtítulos',
  sizeSmall: 'Pequeño',
  sizeMedium: 'Mediano',
  sizeLarge: 'Grande',
  paceLabel: ' Ritmo',
  escAgain: 'Pulsa Esc de nuevo para salir del tour',
  openThisPart: 'Abrir esta parte',
  moreDetailArrow: 'más detalle ›',
  moreDetailPrefix: 'Más detalle · {name}',
  chapterPrefix: 'Capítulo {n} · ',
  nextHint: 'Siguiente: → o ▶',
  backHint: 'Volver al tour: E',
  fpsTitle: 'Clic para mostrar u ocultar FPS',
  langTitle: 'Idioma: {current} — Clic para cambiar a {next}',
  openPartTitle: 'Abrir {name}',
  collapse: 'Contraer',
  expand: 'Expandir',
  resetBtn: '↺ Reiniciar',
  resetTitle: 'Reiniciar y empezar desde el principio (R)',
  startFromBeginning: '↺ Empezar desde el principio',
  resetToast: '↺ Reiniciado desde el principio',
  trackProgressBtn: '☁ Guardar Progreso',
  accountStatusBtn: '✓ {name} ({n}/10)',
  accountModalTitle: 'Progreso de Cursos y Cuenta Opcional',
  accountModalSub: 'Iniciar sesión es 100% opcional. Tu progreso se guarda en memoria y cookies automáticamente, o inicia sesión para guardar tus cursos entre dispositivos.',
  tabSignIn: 'Iniciar Sesión',
  tabRegister: 'Registrarse (Opcional)',
  emailLabel: 'Correo electrónico',
  passwordLabel: 'Contraseña',
  nameOptionalLabel: 'Nombre (opcional, de referencia)',
  signInSubmit: 'Iniciar Sesión y Sincronizar',
  registerSubmit: 'Crear Cuenta Opcional',
  renewCookieBtn: '↻ Renovar Cookie y Sesión',
  cookieRenewedToast: '✓ Cookie y sesión renovadas por 30 días',
  signOutBtn: 'Cerrar Sesión',
  yourCoursesTitle: '10 Cursos de Células y Virus',
  resumeStepBtn: '▶ Continuar ({step})',
  startCourseBtn: '▶ Comenzar',
  notStartedLabel: 'Sin iniciar',
  closeBtn: '✕ Cerrar'
};

const ES_NODES: Record<string, NodeTranslation> = {
  cell: { name: 'Célula eucariota (animal)' },
  'plasma-membrane': { name: 'Membrana plasmática' },
  phospholipid: { name: 'Fosfolípido' },
  'head-group': { name: 'Cabeza polar de fosfocolina' },
  'fatty-acid-tail': { name: 'Colas de ácidos grasos' },
  cholesterol: { name: 'Colesterol' },
  'channel-protein': { name: 'Proteína de canal (acuaporina)' },
  'peripheral-protein': { name: 'Proteína periférica' },
  glycocalyx: { name: 'Glucocálix' },
  glucose: { name: 'Monosacárido (glucosa)' },
  cytoskeleton: { name: 'Citoesqueleto' },
  microtubule: { name: 'Microtúbulo' },
  tubulin: { name: 'Dímero de tubulina' },
  'actin-filament': { name: 'Filamento de actina (microfilamento)' },
  'g-actin': { name: 'Monómero de actina G' },
  'intermediate-filament': { name: 'Filamento intermedio' },
  nucleus: { name: 'Núcleo' },
  'nuclear-envelope': { name: 'Envoltura nuclear' },
  'nuclear-pore': { name: 'Complejo del poro nuclear' },
  protein: { name: 'Proteína globular' },
  'alpha-helix': { name: 'Hélice α' },
  polypeptide: { name: 'Cadena polipeptídica' },
  'amino-acid': { name: 'Aminoácido (alanina)' },
  nucleolus: { name: 'Nucléolo' },
  chromosome: { name: 'Cromosoma' },
  'chromatin-fiber': { name: 'Fibra de cromatina' },
  nucleosome: { name: 'Nucleosoma' },
  histone: { name: 'Octámero de histonas' },
  dna: { name: 'Doble hélice de ADN' },
  nucleotide: { name: 'Nucleótido' },
  phosphate: { name: 'Grupo fosfato' },
  sugar: { name: 'Desoxirribosa' },
  base: { name: 'Base nitrogenada (timina)' },
  rna: { name: 'Hebra de ARN' },
  'rough-er': { name: 'Retículo endoplasmático rugoso' },
  'smooth-er': { name: 'Retículo endoplasmático liso' },
  ribosome: { name: 'Ribosoma' },
  'ribo-large': { name: 'Subunidad mayor (60S)' },
  'ribo-small': { name: 'Subunidad menor (40S)' },
  golgi: { name: 'Aparato de Golgi' },
  vesicle: { name: 'Vesícula' },
  mitochondrion: { name: 'Mitocondria' },
  'atp-synthase': { name: 'ATP sintasa' },
  lysosome: { name: 'Lisosoma' },
  centrosome: { name: 'Centrosoma' },
  centriole: { name: 'Centriolo' },
  cytosol: { name: 'Citosol' },
  water: { name: 'Molécula de agua' },
  prokaryote: { name: 'Célula procariota (bacteria)' },
  'bacterial-wall': { name: 'Envoltura celular bacteriana' },
  peptidoglycan: { name: 'Peptidoglicano' },
  nucleoid: { name: 'Nucleoide' },
  plasmid: { name: 'Plásmido' },
  'ribosome-70s': { name: 'Ribosoma (70S)' },
  flagellum: { name: 'Flagelo' },
  pilus: { name: 'Pilus (fimbria)' },
  microcompartment: { name: 'Microcompartimento bacteriano' },
  'ribo-50s': { name: 'Subunidad mayor (50S)' },
  'ribo-30s': { name: 'Subunidad menor (30S)' },
  trna: { name: 'ARN de transferencia (ARNt)' },
  'rna-polymerase': { name: 'ARN polimerasa' },
  capsule: { name: 'Cápsula' },
  lps: { name: 'Lipopolisacárido (LPS)' },
  porin: { name: 'Porina' },
  'storage-granule': { name: 'Gránulos de reserva' },
  proteasome: { name: 'Proteasoma' },
  'motor-protein': { name: 'Proteínas motoras' },
  'electron-transport-chain': { name: 'Cadena de transporte de electrones' },
  'light-reactions': { name: 'Fase luminosa (cadena tilacoidal)' },
  cilium: { name: 'Cilio primario' },
  gpcr: { name: 'Receptor acoplado a proteína G (GPCR)' },
  'na-k-pump': { name: 'Bomba de sodio-potasio' },
  'cell-junction': { name: 'Uniones celulares' },
  'cellulose-synthase': { name: 'Complejo celulosa sintasa' },
  amyloplast: { name: 'Amiloplasto' },
  'plant-cell': { name: 'Célula eucariota (vegetal)' },
  'cell-wall': { name: 'Pared celular' },
  'cellulose-microfibril': { name: 'Microfibrilla de celulosa' },
  cellulose: { name: 'Cadena de celulosa' },
  plasmodesma: { name: 'Plasmodesmo' },
  'central-vacuole': { name: 'Vacuola central' },
  chloroplast: { name: 'Cloroplasto' },
  granum: { name: 'Granum (pila tilacoidal)' },
  'photosystem-ii': { name: 'Fotosistema II' },
  chlorophyll: { name: 'Clorofila a' },
  rubisco: { name: 'RuBisCO' },
  starch: { name: 'Almidón' },
  peroxisome: { name: 'Peroxisoma' },
  'real-cell': { name: 'Célula eucariota (realista)' },
  'real-nucleus': { name: 'Núcleo (realista)' },
  'real-nucleolus': { name: 'Nucléolo (realista)' },
  'real-dna': { name: 'Gen en transcripción (realista)' },
  'pol-ii': { name: 'ARN polimerasa II' },
  pcna: { name: 'Pinza deslizante PCNA' },
  ubiquitin: { name: 'Ubiquitina' },
  'lipid-droplet': { name: 'Gota lipídica' },
  microvillus: { name: 'Microvellosidad' },
  'real-bacterium': { name: 'Célula procariota (realista)' },
  'real-envelope': { name: 'Envoltura celular (realista)' },
  'real-motor': { name: 'Motor flagelar (realista)' },
  'real-pole': { name: 'Matriz de quimiorreceptores (realista)' },
  'real-nucleoid': { name: 'Nucleoide (realista)' },
  'real-gene': { name: 'Gen en transcripción (realista)' },
  'ribosome-ecoli': { name: 'Ribosoma (E. coli 70S, estructura real)' },
  'rnap-ecoli': { name: 'ARN polimerasa (E. coli, estructura real)' },
  groel: { name: 'Chaperonina GroEL–GroES (estructura real)' },
  'hu-protein': { name: 'Proteína HU (nucleoide, estructura real)' },
  chemoreceptor: { name: 'Quimiorreceptor (estructura real)' },
  'real-fork': { name: 'Horquilla de replicación (realista)' },
  'atp-synthase-ecoli': { name: 'ATP sintasa (E. coli, estructura real)' },
  'complex-i-ecoli': { name: 'Complejo I (E. coli, estructura real)' },
  'acrab-tolc': { name: 'Bomba de eflujo AcrAB–TolC (estructura real)' },
  'dnab-helicase': { name: 'Helicasa DnaB (estructura real)' },
  'pol3-ecoli': { name: 'ADN polimerasa III (E. coli, estructura real)' },
  gyrase: { name: 'ADN girasa (E. coli, estructura real)' },
  'real-plant': { name: 'Célula vegetal (realista)' },
  'real-plant-nucleus': { name: 'Núcleo (realista, vegetal)' },
  'real-plant-nucleolus': { name: 'Nucléolo (realista, vegetal)' },
  'real-plant-dna': { name: 'Gen en transcripción (realista, vegetal)' },
  'real-chloroplast': { name: 'Cloroplasto (realista)' },
  'real-thylakoid': { name: 'Granum (realista, escala real)' },
  'real-wall': { name: 'Pared celular (realista, escala real)' },
  'psii-real': { name: 'Supercomplejo Fotosistema II–LHCII (estructura real)' },
  'lhcii-real': { name: 'Complejo antena LHCII (estructura real)' },
  'b6f-real': { name: 'Citocromo b6f (estructura real)' },
  'psi-real': { name: 'Fotosistema I–LHCI (estructura real)' },
  'catp-real': { name: 'ATP sintasa (cloroplasto, estructura real)' },
  'rubisco-real': { name: 'RuBisCO (estructura real)' },
  'cesa-real': { name: 'Roseta de celulosa sintasa (estructura real)' },
  'aha-real': { name: 'Bomba de protones de membrana (AHA2, estructura real)' },
  'pip-real': { name: 'Acuaporina (PIP2, estructura real)' },
  'real-fungal': { name: 'Célula fúngica (levadura realista)' },
  'real-fungal-nucleus': { name: 'Núcleo fúngico (realista)' },
  'real-fungal-nucleolus': { name: 'Nucléolo en medialuna (levadura realista)' },
  'real-fungal-dna': { name: 'Gen de levadura en transcripción (realista)' },
  'real-fungal-bud': { name: 'Cuello de gemación y yema hija (realista)' },
  'real-fungal-wall': { name: 'Pared celular fúngica y córtex (realista)' },
  'fungal-wall': { name: 'Pared celular fúngica (arquitectura de 3 capas)' },
  'chitin-fibril': { name: 'Microfibrilla de quitina (β-1,4-GlcNAc)' },
  'bud-scar': { name: 'Cicatriz de gemación quitinosa' },
  'spindle-pole-body': { name: 'Cuerpo polar del huso (SPB)' },
  ergosterol: { name: 'Ergosterol' },
  'adh1-real': { name: 'Alcohol deshidrogenasa (Adh1, estructura real)' },
  'pdc1-real': { name: 'Piruvato descarboxilasa (Pdc1, estructura real)' },
  'erg11-real': { name: 'Lanosterol 14α-desmetilasa (Erg11 / CYP51, estructura real)' },
  'exg1-real': { name: 'Exo-β-1,3-glucanasa (Exg1, estructura real)' },
  'pma1-real': { name: 'H⁺-ATPasa de membrana plasmática (Pma1, estructura real)' },
  'septin-real': { name: 'Filamento de septina (Cdc3–Cdc10–Cdc12, estructura real)' },
  'real-phage': { name: 'Bacteriófago T4 (realista)' },
  'real-phage-capsid': { name: 'Cápside y genoma del fago (realista)' },
  'real-phage-tail': { name: 'Cola contráctil y cuello (realista)' },
  'real-phage-baseplate': { name: 'Placa basal y punción del huésped (realista)' },
  bacteriophage: { name: 'Bacteriófago T4 (esquemático)' },
  'phage-capsid': { name: 'Cápside y portal del fago' },
  'phage-tail': { name: 'Cola contráctil y fibras del cuello' },
  'phage-baseplate': { name: 'Placa basal y aguja perforadora' },
  'phage-fiber': { name: 'Fibra caudal larga (gp34–gp37)' },
  'gp23-real': { name: 'Hexámero mayor de la cápside (gp23* + Soc + Hoc, estructura real)' },
  'gp24-real': { name: 'Pentámero del vértice de la cápside (gp24*, estructura real)' },
  'gp20-real': { name: 'Dodecámero portal (gp20, estructura real)' },
  'gp18-real': { name: 'Vaina contráctil y anillo del cuello (gp18 + gp15, estructura real)' },
  'gp19-real': { name: 'Tubo caudal interno (gp19, estructura real)' },
  'gp5-real': { name: 'Núcleo de placa basal y aguja perforadora (gp27–gp5, estructura real)' },
  'gp37-real': { name: 'Punta de fibra caudal larga (gp37, estructura real)' },
  'gp12-real': { name: 'Punta de fibra caudal corta (gp12, estructura real)' },
  viruses: { name: 'Principales tipos de virus (comparativa)' },
  'real-coronavirus': { name: 'Coronavirus SARS-CoV-2 (realista)' },
  'real-cov-spike': { name: 'Acoplamiento Espiga–receptor ACE2 (realista)' },
  'real-cov-rnp': { name: 'Núcleo de ribonucleoproteína (vRNP, realista)' },
  'real-cov-replication': { name: 'Complejo replicasa RdRp (realista)' },
  'real-hiv': { name: 'Retrovirus VIH-1 (realista)' },
  'real-hiv-cone': { name: 'Cápside cónica de fullereno (realista)' },
  'real-hiv-rt': { name: 'Transcripción inversa e integración (realista)' },
  'real-hiv-entry': { name: 'Fusión Env–CD4/CCR5 y provirus (realista)' },
  'real-adenovirus': { name: 'Adenovirus humano (realista)' },
  'real-adv-vertex': { name: 'Vértice de pentón y antena de fibra (realista)' },
  'real-adv-core': { name: 'Núcleo de ADNbc del adenosoma (realista)' },
  'real-adv-entry': { name: 'Entrada por receptores CAR e integrina (realista)' },
  'real-tmv': { name: 'Virus del mosaico del tabaco (realista)' },
  'real-tmv-helix': { name: 'Cubierta helicoidal y surco de ARN (realista)' },
  'real-tmv-channel': { name: 'Canal central de 4 nm e interruptor de Ca²⁺ (realista)' },
  'real-tmv-assembly': { name: 'Disco 20S y autoensamblaje de ARN OAS (realista)' },
  coronavirus: { name: 'Coronavirus SARS-CoV-2 (esquemático)' },
  hiv: { name: 'Retrovirus VIH-1 (esquemático)' },
  adenovirus: { name: 'Adenovirus humano (esquemático)' },
  tmv: { name: 'Virus del mosaico del tabaco (esquemático)' },
  'cov-spike-real': { name: 'Trímero de glicoproteína Espiga de SARS-CoV-2 (estructura real)' },
  'cov-e-real': { name: 'Pentámero de viroporina de Envoltura (E) de SARS-CoV-2 (estructura real)' },
  'cov-n-real': { name: 'Oligómero de Nucleocápside (N) de unión a ARN (estructura real)' },
  'cov-rdrp-real': { name: 'Complejo replicasa RdRp de SARS-CoV-2 (estructura real)' },
  'ace2-real': { name: 'Ectodominio del receptor humano ACE2 (estructura real)' },
  'hiv-env-real': { name: 'Trímero de espiga Env gp120/gp41 de VIH-1 (estructura real)' },
  'hiv-ma-real': { name: 'Trímero de Matriz (p17 MA) de VIH-1 (estructura real)' },
  'hiv-ca-hex-real': { name: 'Hexámero de Cápside (p24 CA) de VIH-1 (estructura real)' },
  'hiv-ca-pent-real': { name: 'Pentámero de vértice de Cápside (p24 CA) de VIH-1 (estructura real)' },
  'hiv-rt-real': { name: 'Transcriptasa Inversa + dúplex de ADN de VIH-1 (estructura real)' },
  'hiv-in-real': { name: 'Dímero de Integrasa y unión a ADN de VIH-1 (estructura real)' },
  'adv-hexon-real': { name: 'Trímero mayor de cubierta Hexón de Adenovirus (estructura real)' },
  'adv-penton-real': { name: 'Pentámero base de Pentón de Adenovirus (estructura real)' },
  'adv-fiber-real': { name: 'Eje de fibra y botón de unión a CAR de Adenovirus (estructura real)' },
  'tmv-turn-real': { name: 'Giro helicoidal de 16⅓ subunidades de cubierta + ARN de VMT (estructura real)' },
  'tmv-sub-real': { name: 'Monómero de proteína de cubierta + 3 nucleótidos de ARN de VMT (estructura real)' },
  'atom-mg': { name: 'Átomo de magnesio' },
  'atom-h': { name: 'Átomo de hidrógeno' },
  'atom-c': { name: 'Átomo de carbono' },
  'atom-n': { name: 'Átomo de nitrógeno' },
  'atom-o': { name: 'Átomo de oxígeno' },
  'atom-p': { name: 'Átomo de fósforo' }
};

const ES_PHRASES: Record<string, string> = {
  // Menu items & page titles
  'Cells': 'Células',
  'Viruses': 'Virus',
  'Animal cell': 'Célula animal',
  'Plant cell': 'Célula vegetal',
  'Fungal cell (yeast)': 'Célula fúngica (levadura)',
  'Bacterium (E. coli)': 'Bacteria (E. coli)',
  'Bacteriophage T4': 'Bacteriófago T4',
  'Coronavirus': 'Coronavirus',
  'HIV-1 retrovirus': 'Retrovirus VIH-1',
  'Adenovirus': 'Adenovirus',
  'Tobacco mosaic (TMV)': 'Mosaico del tabaco (VMT)',
  'All virus types (3D)': 'Todos los tipos de virus (3D)',
  'Realistic animal cell': 'Célula animal realista',
  'Realistic bacterium': 'Bacteria realista',
  'Realistic plant cell': 'Célula vegetal realista',
  'Realistic fungal cell': 'Célula fúngica realista',
  'Realistic bacteriophage': 'Bacteriófago realista',
  'Realistic coronavirus': 'Coronavirus realista',
  'Realistic HIV-1': 'VIH-1 realista',
  'Realistic adenovirus': 'Adenovirus realista',
  'Realistic TMV': 'VMT realista',
  'Organelles': 'Orgánulos',
  'Envelope': 'Envoltura',
  'Capsid': 'Cápside',

  // Legends
  'Adenine (pairs with T)': 'Adenina (se aparea con T)',
  'Thymine (pairs with A)': 'Timina (se aparea con A)',
  'Guanine (pairs with C)': 'Guanina (se aparea con C)',
  'Cytosine (pairs with G)': 'Citosina (se aparea con G)',
  'Backbone, strand 1': 'Esqueleto, hebra 1',
  'Backbone, strand 2': 'Esqueleto, hebra 2',
  'Adenine': 'Adenina',
  'Uracil (replaces T)': 'Uracilo (reemplaza a T)',
  'Guanine': 'Guanina',
  'Cytosine': 'Citosina',
  'Thymine': 'Timina',
  'Thymine (DNA)': 'Timina (ADN)',
  'Uracil (RNA)': 'Uracilo (ARN)',
  'Parent strand': 'Hebra parental',
  'New strand': 'Hebra nueva',
  'RNA primer': 'Cebador de ARN',
  'DNA strand 1': 'Hebra de ADN 1',
  'DNA strand 2': 'Hebra de ADN 2',
  'mRNA strand': 'Hebra de ARNm',
  'rRNA strand': 'Hebra de ARNr',
  'PSII reaction centre': 'Centro de reacción PSII',
  'PSII inner antennae': 'Antenas internas PSII',
  'Oxygen-evolving complex': 'Complejo productor de oxígeno',
  'LHCII antenna': 'Antena LHCII',
  'Chlorophyll': 'Clorofila',
  'Cytochrome b6f': 'Citocromo b6f',
  'Photosystem I': 'Fotosistema I',
  'ATP synthase': 'ATP sintasa',
  'RuBisCO': 'RuBisCO',
  'Plastocyanin': 'Plastocianina',
  'Lipid heads': 'Cabezas lipídicas',
  'Lipid tails': 'Colas lipídicas',
  'Cellulose microfibril': 'Microfibrilla de celulosa',
  'Hemicellulose': 'Hemicelulosa',
  'Pectin': 'Pectina',
  'Cellulose synthase': 'Celulosa sintasa',
  'Proton pump (AHA2)': 'Bomba de protones (AHA2)',
  'Aquaporin (PIP2)': 'Acuaporina (PIP2)',
  'α-tubulin': 'α-tubulina',
  'β-tubulin': 'β-tubulina',
  'Actin': 'Actina',
  'Outer mannoprotein brush': 'Cepillo externo de manoproteínas',
  'β-1,3 / β-1,6-glucan mesh': 'Malla de β-1,3 / β-1,6-glucano',
  'Chitin microfibril (β-1,4-GlcNAc)': 'Microfibrilla de quitina (β-1,4-GlcNAc)',
  'Exo-β-1,3-glucanase (Exg1)': 'Exo-β-1,3-glucanasa (Exg1)',
  'Pma1 H⁺-ATPase pump': 'Bomba H⁺-ATPasa Pma1',
  'Septin filament (Cdc3/10/12)': 'Filamento de septina (Cdc3/10/12)',
  'Erg11 (lanosterol demethylase)': 'Erg11 (lanosterol desmetilasa)',
  'Pyruvate decarboxylase (Pdc1)': 'Piruvato descarboxilasa (Pdc1)',
  'Alcohol dehydrogenase (Adh1)': 'Alcohol deshidrogenasa (Adh1)',
  'Ergosterol plasma membrane': 'Membrana plasmática de ergosterol',

  // Realistic PARTS & MOLS
  'Plasma membrane': 'Membrana plasmática',
  'Nuclear envelope & pores': 'Envoltura y poros nucleares',
  'Chromatin: DNA on histones': 'Cromatina: ADN en histonas',
  'mRNA & RNA polymerase II': 'ARNm y ARN polimerasa II',
  'Nucleolus': 'Nucléolo',
  'rRNA, made in the nucleolus': 'ARNr, producido en el nucléolo',
  'Nucleoplasm proteins': 'Proteínas del nucleoplasma',
  'Rough ER': 'RE rugoso',
  'Ribosomes': 'Ribosomas',
  'Smooth ER': 'RE liso',
  'Golgi apparatus': 'Aparato de Golgi',
  'Mitochondria': 'Mitocondrias',
  'Mitochondrion': 'Mitocondria',
  'Lysosomes': 'Lisosomas',
  'Lysosome': 'Lisosoma',
  'Peroxisomes': 'Peroxisomas',
  'Peroxisome': 'Peroxisoma',
  'Vesicles & endosomes': 'Vesículas y endosomas',
  'Endosome & vesicles': 'Endosoma y vesículas',
  'Lipid droplets': 'Gotas lipídicas',
  'Lipid droplet': 'Gota lipídica',
  'Centrosome': 'Centrosoma',
  'Microtubules': 'Microtúbulos',
  'Actin cortex': 'Córtex de actina',
  'Intermediate filaments': 'Filamentos intermedios',
  'Primary cilium': 'Cilio primario',
  'Microvilli': 'Microvellosidades',
  'Cytosol': 'Citosol',
  'Cytosol proteins': 'Proteínas del citosol',
  'Glucose': 'Glucosa',
  'Pyruvate (half a glucose)': 'Piruvato (media glucosa)',
  'Oxygen (O₂)': 'Oxígeno (O₂)',
  'Carbon dioxide (CO₂)': 'Dióxido de carbono (CO₂)',
  'ATP (charged)': 'ATP (cargado)',
  'ADP (spent ATP)': 'ADP (ATP gastado)',
  'Fatty acids': 'Ácidos grasos',
  'mRNA': 'ARNm',
  'Ribosome halves': 'Subunidades ribosómicas',
  'New proteins': 'Proteínas nuevas',
  'Amino acids': 'Aminoácidos',
  'Vesicles with cargo': 'Vesículas con carga',
  'Lipids for membranes': 'Lípidos de membrana',
  'Hydrogen peroxide': 'Peróxido de hidrógeno',
  'Calcium ions': 'Iones de calcio',
  'Cell wall': 'Pared celular',
  'Plasmodesmata': 'Plasmodesmos',
  'Central vacuole (tonoplast)': 'Vacuola central (tonoplasto)',
  'Transvacuolar strands': 'Hebras transvacuolares',
  'Chloroplasts': 'Cloroplastos',
  'Thylakoids (grana)': 'Tilacoides (grana)',
  'Starch grains': 'Granos de almidón',
  'Photosystem II & LHCII': 'Fotosistema II y LHCII',
  'ATP synthase (chloroplast)': 'ATP sintasa (cloroplasto)',
  'Golgi stacks': 'Pilas de Golgi',
  'Vesicles': 'Vesículas',
  'Endoplasmic reticulum': 'Retículo endoplasmático',
  'Cortical microtubules': 'Microtúbulos corticales',
  'Actin cables': 'Cables de actina',
  'Outer membrane & LPS': 'Membrana externa y LPS',
  'Outer-membrane proteins': 'Proteínas de membrana externa',
  'Efflux pumps (AcrAB–TolC)': 'Bombas de eflujo (AcrAB–TolC)',
  'Peptidoglycan wall & periplasm': 'Pared de peptidoglicano y periplasma',
  'Inner (plasma) membrane': 'Membrana interna (plasmática)',
  'Respiratory chain': 'Cadena respiratoria',
  'Transporters, channels & Sec': 'Transportadores, canales y Sec',
  'Flagella & their motors': 'Flagelos y sus motores',
  'Pili (fimbriae)': 'Pili (fimbrias)',
  'Chemoreceptor array': 'Matriz de quimiorreceptores',
  'MreB filaments': 'Filamentos MreB',
  'Chromosome DNA (nucleoid)': 'ADN cromosómico (nucleoide)',
  'Nucleoid proteins (HU, Fis, IHF, gyrase)': 'Proteínas del nucleoide (HU, Fis, IHF, girasa)',
  'Replication fork (replisome)': 'Horquilla de replicación (replisoma)',
  'RNA polymerase': 'ARN polimerasa',
  'mRNA & rRNA': 'ARNm y ARNr',
  'Transfer RNA (and EF-Tu)': 'ARN de transferencia (y EF-Tu)',
  'Cytoplasm proteins': 'Proteínas del citoplasma',
  'Glycogen granules': 'Gránulos de glucógeno',
  'Chitin & β-glucan cell wall': 'Pared celular de quitina y β-glucano',
  'Chitinous bud scars': 'Cicatrices de gemación quitinosas',
  'Pma1 H⁺-ATPase & Fks1 synthases': 'H⁺-ATPasa Pma1 y sintasas Fks1',
  'Daughter bud & polarisome': 'Yema hija y polarisoma',
  'Septin collar & actomyosin ring': 'Collar de septinas y anillo de actomiosina',
  'Acidic vacuole (tonoplast)': 'Vacuola ácida (tonoplasto)',
  'Spindle pole body (SPB) & MTs': 'Cuerpo polar del huso (SPB) y MTs',
  'Chromatin: 16 yeast chromosomes': 'Cromatina: 16 cromosomas de levadura',
  'Crescent nucleolus': 'Nucléolo en medialuna',
  'Perinuclear & cortical ER': 'RE perinuclear y cortical',
  'Erg11 (CYP51) sterol synthase': 'Esterol sintasa Erg11 (CYP51)',
  'Dispersed unstacked Golgi': 'Golgi disperso no apilado',
  'Tubular mitochondria': 'Mitocondrias tubulares',
  'Ergosterol lipid droplets': 'Gotas lipídicas de ergosterol',
  'Secretory vesicles': 'Vesículas secretoras',
  'Polarised actin cables & patches': 'Cables y parches de actina polarizados',
  '80S ribosomes & polysomes': 'Ribosomas 80S y polisomas',
  'Fermentation enzymes (Pdc1 & Adh1)': 'Enzimas de fermentación (Pdc1 y Adh1)',
  'Capsid shell (gp23* hexamers)': 'Cápside (hexámeros gp23*)',
  'Outer capsid cage (Soc & Hoc)': 'Jaula externa de cápside (Soc y Hoc)',
  'Pentameric vertices (gp24*)': 'Vértices pentaméricos (gp24*)',
  'Spooled dsDNA genome (169 kbp)': 'Genoma de ADNbc enrollado (169 kpb)',
  'Internal core proteins (gp22, IPI*)': 'Proteínas internas del núcleo (gp22, IPI*)',
  'Portal dodecamer (gp20)': 'Dodecámero portal (gp20)',
  'Neck, collar & whiskers (gpWac)': 'Cuello, collar y fibras (gpWac)',
  'Contractile tail sheath (gp18)': 'Vaina caudal contráctil (gp18)',
  'Inner tail tube (gp19)': 'Tubo caudal interno (gp19)',
  'Baseplate dome & wedges': 'Cúpula y cuñas de la placa basal',
  'Short tail fibers (gp12)': 'Fibras caudales cortas (gp12)',
  'Hub, needle & lysozyme (gp27–gp5)': 'Centro, aguja y lisozima (gp27–gp5)',
  'Long tail fibers (gp34–gp37)': 'Fibras caudales largas (gp34–gp37)',
  'Host outer membrane & LPS': 'Membrana externa y LPS del huésped',
  'Host OmpC/OmpF porins (receptors)': 'Porinas OmpC/OmpF del huésped (receptores)',
  'Host peptidoglycan wall (breached)': 'Pared de peptidoglicano del huésped (perforada)',
  'Host inner membrane': 'Membrana interna del huésped',
  'Hijacked host RNA polymerase': 'ARN polimerasa del huésped secuestrada',
  'Host 70S ribosomes (making phage)': 'Ribosomas 70S del huésped (produciendo fagos)',
  'Spike (S) glycoprotein trimer (6VXX)': 'Trímero de glicoproteína Espiga (S, 6VXX)',
  'Viral lipid bilayer envelope': 'Envoltura viral de bicapa lipídica',
  'Membrane (M) glycoprotein lattice': 'Red de glicoproteína de Membrana (M)',
  'Envelope (E) viroporin channel (5X29)': 'Canal viroporina de Envoltura (E, 5X29)',
  'Nucleocapsid (N) RNP oligomers (6VYO)': 'Oligómeros RNP de Nucleocápside (N, 6VYO)',
  '(+)ssRNA viral genome (29.9 kb)': 'Genoma viral de ARNmc(+) (29.9 kb)',
  'Host ACE2 receptor (1R42)': 'Receptor ACE2 del huésped (1R42)',
  'Host respiratory cell membrane': 'Membrana celular respiratoria del huésped',
  'Viral RdRp replicase (nsp12–7–8, 6M71)': 'Replicasa viral RdRp (nsp12–7–8, 6M71)',
  'Env (gp120/gp41) trimer spikes (4TVP)': 'Espigas triméricas Env (gp120/gp41, 4TVP)',
  'Host-derived lipid bilayer envelope': 'Envoltura de bicapa lipídica derivada del huésped',
  'Matrix (MA, p17) protein shell (1HIW)': 'Cubierta proteica de Matriz (MA, p17, 1HIW)',
  'Fullerene cone CA (p24) hexamers (3H4E)': 'Hexámeros CA (p24) del cono de fullereno (3H4E)',
  'Capsid CA (p24) vertex pentamers (3P05)': 'Pentámeros de vértice CA (p24) de la cápside (3P05)',
  'Diploid (+)ssRNA genome & NC (p7)': 'Genoma diploide de ARNmc(+) y NC (p7)',
  'Reverse Transcriptase (p66/p51, 1RTD)': 'Transcriptasa Inversa (p66/p51, 1RTD)',
  'Integrase (IN, p32, 1EX4)': 'Integrasa (IN, p32, 1EX4)',
  'Host T-cell CD4/CCR5 & proviral DNA': 'CD4/CCR5 de célula T huésped y ADN proviral',
  'Hexon major coat trimer (II, 1P30)': 'Trímero mayor de cubierta Hexón (II, 1P30)',
  'Penton base pentamer (III, 1X9T)': 'Pentámero base de Pentón (III, 1X9T)',
  'Projecting fiber shaft & knob (IV, 1QIU)': 'Eje y botón de fibra proyectada (IV, 1QIU)',
  'Minor cement proteins (IIIa, VI, VIII, IX)': 'Proteínas cemento menores (IIIa, VI, VIII, IX)',
  'Linear dsDNA genome (36 kbp)': 'Genoma lineal de ADNbc (36 kpb)',
  'Histone-like core proteins (VII, V, TP, AVP)': 'Proteínas del núcleo tipo histona (VII, V, TP, AVP)',
  'Host CAR & αvβ5 integrin receptors': 'Receptores CAR e integrina αvβ5 del huésped',
  'Host epithelial plasma membrane': 'Membrana plasmática epitelial del huésped',
  'Coat protein helical subunits (17.5 kDa, 2TMV)': 'Subunidades helicoidales de proteína de cubierta (17.5 kDa, 2TMV)',
  '20S proto-helix lock-washer assembly discs': 'Discos de ensamblaje proto-helicoidales 20S',
  'Helical (+)ssRNA genome (6.4 kb) & OAS loop': 'Genoma helicoidal de ARNmc(+) (6.4 kb) y bucle OAS',
  'Central 4 nm lumen & Caspar carboxylates': 'Lumen central de 4 nm y carboxilatos de Caspar',
  'Host plant 80S ribosome ("striposome") & replicase': 'Ribosoma 80S de planta huésped («estribosoma») y replicasa',
  '30 kDa Movement Protein & plasmodesma gate': 'Proteína de Movimiento de 30 kDa y compuerta del plasmodesmo',

  // Guided Tour titles
  'Inside a Living Cell': 'Dentro de una Célula Viva',
  'Inside a Living Plant Cell': 'Dentro de una Célula Vegetal Viva',
  'Inside a Living Fungal Cell (Budding Yeast)': 'Dentro de una Célula Fúngica Viva (Levadura en Gemación)',
  'Inside a Living Bacterium': 'Dentro de una Bacteria Viva',
  'Inside Bacteriophage T4': 'Dentro del Bacteriófago T4',
  'Inside SARS-CoV-2 Coronavirus': 'Dentro del Coronavirus SARS-CoV-2',
  'Inside HIV-1 (Retrovirus)': 'Dentro del VIH-1 (Retrovirus)',
  'Inside Human Adenovirus': 'Dentro del Adenovirus Humano',
  'Inside Tobacco Mosaic Virus (TMV)': 'Dentro del Virus del Mosaico del Tabaco (VMT)',
  'Inside the Virosphere: Main Types of Viruses': 'Dentro de la Virosfera: Principales Tipos de Virus'
};

// Ordered phrase/word replacement rules for translating dynamic biological labels, scales, tags, recipes, and tour cues into Spanish
const ES_RULES: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bThe basic unit of life for animals, plants and fungi\./gi, 'La unidad básica de la vida para animales, plantas y hongos.'],
  [/\bUnlike a prokaryote \(whose DNA floats in a nucleoid\), it keeps its DNA inside a membrane-bound nucleus and splits its work among membrane-bound organelles\./gi, 'A diferencia de un procariota (cuyo ADN flota en un nucleoide), guarda su ADN dentro de un núcleo rodeado de membrana y reparte su trabajo entre orgánulos membranosos.'],
  [/\bDrag to look around · W A S D to move · scroll to zoom · right-drag to pan · hover a name to highlight it\b/gi, 'Arrastra para mirar · W A S D para moverte · rueda para zoom · clic derecho para desplazar · pasa el cursor sobre un nombre para resaltarlo'],
  [/\bRealistic rendering test · cutaway view\b/gi, 'Renderizado realista · vista en corte'],
  [/\bRealistic rendering · cutaway view\b/gi, 'Renderizado realista · vista en corte'],
  [/\batomic PDB structures to scale\b/gi, 'estructuras atómicas PDB a escala'],
  [/\bBuilding the cell…/gi, 'Construyendo la célula…'],
  [/\bBuilding /gi, 'Construyendo '],
  [/\bView: /g, 'Vista: '],
  [/\bMetabolism: on\b/g, 'Metabolismo: activo'],
  [/\bMetabolism: off\b/g, 'Metabolismo: inactivo'],
  [/\bInfection: on\b/g, 'Infección: activa'],
  [/\bInfection: off\b/g, 'Infección: inactiva'],
  [/\bReplication: on\b/g, 'Replicación: activa'],
  [/\bReplication: off\b/g, 'Replicación: inactiva'],
  [/\bOrganelles: /g, 'Orgánulos: '],
  [/\bEnvelope: /g, 'Envoltura: '],
  [/\bCapsid: /g, 'Cápside: '],
  [/\bClose cutaway\b/g, 'Cerrar corte'],
  [/\bOpen cutaway\b/g, 'Abrir corte'],
  [/\bSave PNG\b/g, 'Guardar PNG'],
  [/\bPause\b/g, 'Pausar'],
  [/\bPlay\b/g, 'Reproducir'],
  [/\bWhat moves\b/g, 'Qué se mueve'],
  [/\bTakes in: /g, 'Recibe: '],
  [/\bGives out: /g, 'Produce: '],
  [/\breal structure\b/gi, 'estructura real'],
  [/\brealistic\b/gi, 'realista'],
  [/\bschematic\b/gi, 'esquemático'],
  [/\bcutaway view\b/gi, 'vista en corte'],
  [/\bcut open\b/gi, 'abierto en corte'],
  [/\bshown as a cutaway\b/gi, 'mostrado en corte'],
  [/\btrue size\b/gi, 'tamaño real'],
  [/\bup to\b/gi, 'hasta'],
  [/\bthick\b/gi, 'de grosor'],
  [/\bwide\b/gi, 'de ancho'],
  [/\blong\b/gi, 'de largo'],
  [/\btall\b/gi, 'de alto'],
  [/\bacross\b/gi, 'de diámetro'],
  [/\bspans the cell\b/gi, 'abarca toda la célula'],
  [/\bfills the cell\b/gi, 'llena la célula'],
  [/\bvariable length\b/gi, 'longitud variable'],
  [/\bper turn\b/gi, 'por vuelta'],
  [/\bof cell volume\b/gi, 'del volumen celular'],
  [/\bPlasma membrane\b/gi, 'Membrana plasmática'],
  [/\bNuclear envelope\b/gi, 'Envoltura nuclear'],
  [/\bNuclear pore\b/gi, 'Poro nuclear'],
  [/\bRough ER\b/gi, 'RE rugoso'],
  [/\bSmooth ER\b/gi, 'RE liso'],
  [/\bEndoplasmic reticulum\b/gi, 'Retículo endoplasmático'],
  [/\bGolgi apparatus\b/gi, 'Aparato de Golgi'],
  [/\bMitochondria\b/gi, 'Mitocondrias'],
  [/\bMitochondrion\b/gi, 'Mitocondria'],
  [/\bChloroplast\b/gi, 'Cloroplasto'],
  [/\bCentral vacuole\b/gi, 'Vacuola central'],
  [/\bCell wall\b/gi, 'Pared celular'],
  [/\bRibosomes\b/gi, 'Ribosomas'],
  [/\bRibosome\b/gi, 'Ribosoma'],
  [/\bLysosomes\b/gi, 'Lisosomas'],
  [/\bLysosome\b/gi, 'Lisosoma'],
  [/\bPeroxisomes\b/gi, 'Peroxisomas'],
  [/\bPeroxisome\b/gi, 'Peroxisoma'],
  [/\bCentrosome\b/gi, 'Centrosoma'],
  [/\bCentriole\b/gi, 'Centriolo'],
  [/\bMicrotubules\b/gi, 'Microtúbulos'],
  [/\bMicrotubule\b/gi, 'Microtúbulo'],
  [/\bActin filaments?\b/gi, 'Filamentos de actina'],
  [/\bIntermediate filaments?\b/gi, 'Filamentos intermedios'],
  [/\bPrimary cilium\b/gi, 'Cilio primario'],
  [/\bMicrovilli\b/gi, 'Microvellosidades'],
  [/\bCytosol\b/gi, 'Citosol'],
  [/\bCytoplasm\b/gi, 'Citoplasma'],
  [/\bNucleolus\b/gi, 'Nucléolo'],
  [/\bNucleus\b/gi, 'Núcleo'],
  [/\bChromatin\b/gi, 'Cromatina'],
  [/\bChromosome\b/gi, 'Cromosoma'],
  [/\bNucleosome\b/gi, 'Nucleosoma'],
  [/\bHistone core\b/gi, 'Núcleo de histonas'],
  [/\bHistones\b/gi, 'Histonas'],
  [/\bDNA double helix\b/gi, 'Doble hélice de ADN'],
  [/\bRNA polymerase\b/gi, 'ARN polimerasa'],
  [/\bATP synthase\b/gi, 'ATP sintasa'],
  [/\bPhotosystem II\b/gi, 'Fotosistema II'],
  [/\bPhotosystem I\b/gi, 'Fotosistema I'],
  [/\bOuter membrane\b/gi, 'Membrana externa'],
  [/\bInner membrane\b/gi, 'Membrana interna'],
  [/\bPeptidoglycan wall\b/gi, 'Pared de peptidoglicano'],
  [/\bReplication fork\b/gi, 'Horquilla de replicación'],
  [/\bFlagellum\b/gi, 'Flagelo'],
  [/\bAmino acids?\b/gi, 'Aminoácidos'],
  [/\bFatty acids?\b/gi, 'Ácidos grasos'],
  [/\bNucleotides?\b/gi, 'Nucleótidos'],
  [/\bProteins?\b/gi, 'Proteínas'],
  [/\bVesicles?\b/gi, 'Vesículas'],
  [/\bOxygen\b/gi, 'Oxígeno'],
  [/\bGlucose\b/gi, 'Glucosa'],
  [/\bWater\b/gi, 'Agua'],
  [/\bDNA\b/g, 'ADN'],
  [/\bmRNA\b/g, 'ARNm'],
  [/\brRNA\b/g, 'ARNr'],
  [/\btRNA\b/g, 'ARNt'],
  [/\bssRNA\b/g, 'ARNmc'],
  [/\bdsDNA\b/g, 'ADNbc'],
  [/\bRNA\b/g, 'ARN']
];

export const EN_LOCALE: LocaleDefinition = {
  code: 'en',
  shortLabel: 'EN',
  nativeName: 'English',
  englishName: 'English',
  speechLang: 'en-US',
  ui: EN_UI,
  nodes: {},
  phrases: {},
  rules: []
};

export const ES_LOCALE: LocaleDefinition = {
  code: 'es',
  shortLabel: 'ES',
  nativeName: 'Español',
  englishName: 'Spanish',
  speechLang: 'es-ES',
  ui: ES_UI,
  nodes: { ...ES_NODES, ...ES_FULL_NODES },
  phrases: { ...ES_PHRASES, ...ES_EXTRA_PHRASES, ...ES_TOURS_PHRASES },
  rules: ES_RULES
};

export function detectBrowserLocale(supported: ReadonlyArray<LocaleDefinition>): LocaleCode {
  const codes = new Set(supported.map((l) => l.code));
  const matchCode = (raw: string | null | undefined): LocaleCode | null => {
    if (!raw) return null;
    const clean = raw.trim().toLowerCase();
    if (codes.has(clean)) return clean;
    const primary = clean.split(/[-_]/)[0];
    if (primary && codes.has(primary)) return primary;
    return null;
  };

  if (typeof window !== 'undefined') {
    try {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const matchedUrl = matchCode(urlLang);
      if (matchedUrl) return matchedUrl;
    } catch {
      // ignore URL parse errors
    }

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const matchedSaved = matchCode(saved);
      if (matchedSaved) return matchedSaved;
    } catch {
      // storage may be blocked
    }

    if (typeof navigator !== 'undefined') {
      const navLangs = [
        ...(Array.isArray(navigator.languages) ? navigator.languages : []),
        navigator.language
      ].filter(Boolean);
      for (const candidate of navLangs) {
        const matched = matchCode(candidate);
        if (matched) return matched;
      }
    }

    try {
      const resolved = Intl.DateTimeFormat().resolvedOptions();
      const matchedIntl = matchCode(resolved.locale);
      if (matchedIntl && matchedIntl !== 'en') return matchedIntl;
      if (resolved.timeZone && SPANISH_TIMEZONES.has(resolved.timeZone) && codes.has('es')) {
        return 'es';
      }
    } catch {
      // ignore Intl errors
    }
  }

  return 'en';
}

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`));
}

export function createI18nShape(initialLocale?: LocaleCode): I18nShape {
  const locales: LocaleDefinition[] = [EN_LOCALE, ES_LOCALE];
  const localeRef = AtomRef.make<LocaleCode>(initialLocale ?? detectBrowserLocale(locales));
  const badgeEls = new Set<HTMLElement>();

  const getLocaleDefinition = (code: LocaleCode = localeRef.value): LocaleDefinition =>
    locales.find((l) => l.code === code) ?? EN_LOCALE;

  const syncBadges = () => {
    const current = localeRef.value;
    const curDef = getLocaleDefinition(current);
    const idx = locales.findIndex((l) => l.code === current);
    const nextDef = locales[(idx + 1) % locales.length] ?? EN_LOCALE;
    const tooltip = interpolate(curDef.ui.langTitle ?? EN_UI.langTitle, {
      current: curDef.nativeName,
      next: nextDef.nativeName
    });
    for (const el of badgeEls) {
      el.title = tooltip;
      el.setAttribute('aria-label', tooltip);
      el.querySelectorAll<HTMLElement>('[data-lang-code]').forEach((item) => {
        const active = item.dataset.langCode === current;
        item.classList.toggle('on', active);
        item.style.color = active ? 'var(--accent, #7fd8ff)' : 'var(--muted, #8b97ab)';
        item.style.fontWeight = active ? '700' : '500';
      });
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = current;
    }
  };

  const setLocale = (code: LocaleCode): LocaleCode => {
    const def = locales.find((l) => l.code === code);
    if (!def) return localeRef.value;
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, def.code);
      } catch {
        // ignore storage errors
      }
    }
    localeRef.set(def.code);
    syncBadges();
    return localeRef.value;
  };

  const cycleLocale = (): LocaleCode => {
    const idx = locales.findIndex((l) => l.code === localeRef.value);
    const next = locales[(idx + 1) % locales.length] ?? EN_LOCALE;
    return setLocale(next.code);
  };

  const registerLocale = (def: LocaleDefinition): void => {
    const existingIdx = locales.findIndex((l) => l.code === def.code);
    if (existingIdx >= 0) locales[existingIdx] = def;
    else locales.push(def);
    syncBadges();
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const def = getLocaleDefinition(localeRef.value);
    const raw = def.ui[key] ?? EN_UI[key] ?? key;
    return interpolate(raw, params);
  };

  const trPlain = (text: string, def: LocaleDefinition): string => {
    if (!text || def.code === 'en') return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    if (def.phrases[text]) return def.phrases[text];
    if (def.phrases[trimmed]) {
      return text.replace(trimmed, def.phrases[trimmed]);
    }
    const prefixPairs: ReadonlyArray<readonly [string, string]> = [
      ['Takes in: ', `${def.ui.takesIn ?? 'Recibe'}: `],
      ['Gives out: ', `${def.ui.givesOut ?? 'Produce'}: `],
      ['Structure: ', 'Estructura: '],
      ['Role: ', 'Función: ']
    ];
    for (const [enPrefix, locPrefix] of prefixPairs) {
      if (trimmed.startsWith(enPrefix)) {
        const rest = trimmed.slice(enPrefix.length);
        return locPrefix + trPlain(rest, def);
      }
    }
    let out = text;
    for (const [pattern, replacement] of def.rules) {
      out = out.replace(pattern, replacement);
    }
    return out;
  };

  const tr = (text: string): string => {
    const current = localeRef.value;
    if (!text || current === 'en') return text;
    const def = getLocaleDefinition(current);
    if (def.phrases[text]) return def.phrases[text];
    if (text.includes('[[')) {
      let last = 0;
      let out = '';
      for (const m of text.matchAll(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g)) {
        out += trPlain(text.slice(last, m.index), def);
        const label = trPlain(m[1], def);
        const part = m[2];
        out += part ? `[[${label}|${part}]]` : `[[${label}]]`;
        last = (m.index ?? 0) + m[0].length;
      }
      out += trPlain(text.slice(last), def);
      return out;
    }
    return trPlain(text, def);
  };

  const nodeName = (id: string, fallback: string): string => {
    if (localeRef.value === 'en') return fallback;
    const def = getLocaleDefinition(localeRef.value);
    return def.nodes[id]?.name ?? tr(fallback);
  };

  const nodeScale = (id: string, fallback: string): string => {
    if (localeRef.value === 'en') return fallback;
    const def = getLocaleDefinition(localeRef.value);
    return def.nodes[id]?.scale ?? tr(fallback);
  };

  const nodeDesc = (id: string, fallback: string): string => {
    if (localeRef.value === 'en') return fallback;
    const def = getLocaleDefinition(localeRef.value);
    return def.nodes[id]?.desc ?? tr(fallback);
  };

  const onChange = (listener: (locale: LocaleCode) => void): (() => void) =>
    localeRef.subscribe(listener);

  const createLanguageBadge = (options?: { id?: string; alignRight?: boolean }): HTMLElement => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = options?.id ?? 'lang';
    btn.className = 'lang-switch';
    btn.style.cssText = [
      'pointer-events: auto',
      'display: inline-flex',
      'align-items: center',
      'gap: 5px',
      'background: rgba(6,10,18,.75)',
      'border: 1px solid var(--line-2, rgba(255,255,255,.22))',
      'border-radius: 6px',
      'padding: 3px 8px',
      'cursor: pointer',
      'color: var(--accent, #7fd8ff)',
      'font: inherit',
      'font-size: 11.5px',
      'font-variant-numeric: tabular-nums',
      'user-select: none',
      options?.alignRight !== false ? 'margin-left: auto' : ''
    ]
      .filter(Boolean)
      .join(';');

    const icon = document.createElement('span');
    icon.style.cssText = 'display:inline-flex;align-items:center;';
    icon.innerHTML =
      '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" style="stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round"><circle cx="8" cy="8" r="6"/><ellipse cx="8" cy="8" rx="2.6" ry="6"/><path d="M2.3 6h11.4M2.3 10h11.4"/></svg>';
    btn.append(icon);

    locales.forEach((loc, idx) => {
      if (idx > 0) {
        const sep = document.createElement('span');
        sep.textContent = '·';
        sep.style.color = 'var(--muted, #8b97ab)';
        btn.append(sep);
      }
      const codeSpan = document.createElement('b');
      codeSpan.dataset.langCode = loc.code;
      codeSpan.textContent = loc.shortLabel;
      codeSpan.onclick = (ev) => {
        if (locales.length > 2) {
          ev.stopPropagation();
          setLocale(loc.code);
        }
      };
      btn.append(codeSpan);
    });

    btn.onclick = () => {
      cycleLocale();
    };

    badgeEls.add(btn);
    syncBadges();
    return btn;
  };

  const bindStandalonePage = (): void => {
    if (typeof document === 'undefined') return;
    syncBadges();
    const isEmbed = document.documentElement.classList.contains('embed');
    if (!isEmbed && !document.getElementById('lang')) {
      const badge = createLanguageBadge({ id: 'lang', alignRight: false });
      badge.style.position = 'fixed';
      badge.style.top = '14px';
      badge.style.right = '240px';
      badge.style.zIndex = '20';
      if (!document.getElementById('flows')) {
        badge.style.right = '16px';
      }
      document.body.append(badge);
    }

    const originalText = new WeakMap<Node, { orig: string; rendered: string }>();
    let mutating = false;
    const translateNode = (node: Node) => {
      const curText = node.textContent ?? '';
      if (!curText.trim()) return;
      const prev = originalText.get(node);
      const orig =
        !prev || (curText !== prev.orig && curText !== prev.rendered) ? curText : prev.orig;
      const rendered = localeRef.value === 'en' ? orig : tr(orig);
      originalText.set(node, { orig, rendered });
      if (node.textContent !== rendered) {
        node.textContent = rendered;
      }
    };
    const translateSubtree = () => {
      if (mutating) return;
      mutating = true;
      try {
        const selectors = [
          '#hud h1',
          '#hud p',
          '#legend .it span:last-child',
          '#flows h2',
          '#mols .mol span',
          '#tools button',
          '#hint',
          '#busy',
          '#tip b'
        ];
        for (const sel of selectors) {
          document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
            translateNode(el);
          });
        }
        const tipEl = document.getElementById('tip');
        if (tipEl) {
          tipEl.childNodes.forEach((child) => {
            if (child.nodeType === 3) {
              translateNode(child);
            }
          });
        }
      } finally {
        mutating = false;
      }
    };

    translateSubtree();
    onChange(() => {
      translateSubtree();
    });

    if (typeof MutationObserver !== 'undefined') {
      const obs = new MutationObserver(() => {
        if (!mutating) translateSubtree();
      });
      for (const id of ['tip', 'tools']) {
        const target = document.getElementById(id);
        if (target) {
          obs.observe(target, { childList: true, characterData: true, subtree: true });
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('message', (e) => {
        if (e.data?.to === 'realistic-cell' && e.data?.cmd === 'lang' && e.data?.lang) {
          setLocale(e.data.lang);
        }
      });
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          setLocale(e.newValue);
        }
      });
    }
  };

  if (typeof document !== 'undefined') {
    document.documentElement.lang = localeRef.value;
  }

  const setLocaleEffect = Effect.fnUntraced(function* (code: LocaleCode) {
    return yield* Effect.sync(() => setLocale(code));
  });

  const tEffect = Effect.fnUntraced(function* (
    key: string,
    params?: Record<string, string | number>
  ) {
    return yield* Effect.sync(() => t(key, params));
  });

  const trEffect = Effect.fnUntraced(function* (text: string) {
    return yield* Effect.sync(() => tr(text));
  });

  return {
    localeRef,
    get locale() {
      return localeRef.value;
    },
    get supportedLocales() {
      return locales;
    },
    getLocaleDefinition,
    setLocale,
    cycleLocale,
    registerLocale,
    t,
    tr,
    nodeName,
    nodeScale,
    nodeDesc,
    onChange,
    createLanguageBadge,
    bindStandalonePage,
    detectLocaleEffect: Effect.sync(() => detectBrowserLocale(locales)),
    localeEffect: Effect.sync(() => localeRef.value),
    setLocaleEffect,
    cycleLocaleEffect: Effect.sync(() => cycleLocale()),
    tEffect,
    trEffect
  };
}

export class I18nService extends Context.Service<I18nService, I18nShape>()(
  'learn-biology/I18nService'
) {
  static readonly layer = Layer.effect(
    I18nService,
    Effect.sync(() => I18nService.of(createI18nShape()))
  );
}

export const makeI18nLayer = (initialLocale?: LocaleCode): Layer.Layer<I18nService> =>
  Layer.effect(
    I18nService,
    Effect.sync(() => I18nService.of(createI18nShape(initialLocale)))
  );

export const I18nLive: Layer.Layer<I18nService> = I18nService.layer;
