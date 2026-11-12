import type { NodeTranslation } from '../i18n.js';

export const ES_NODES: Record<string, NodeTranslation> = {
  cell: {
    name: 'Célula eucariota (animal)',
    scale: '10–30 µm',
    desc: 'La unidad básica de la vida para animales, plantas y hongos. A diferencia de un procariota (cuyo ADN flota en un nucleoide), guarda su ADN dentro de un núcleo rodeado de membrana y reparte su trabajo entre orgánulos membranosos.'
  },
  'plasma-membrane': {
    name: 'Membrana plasmática',
    scale: '7–10 nm de grosor',
    desc: 'La capa externa de la célula: una bicapa fluida de fosfolípidos tachonada de proteínas y colesterol y recubierta por fuera con cadenas de azúcares. Controla todo lo que entra y sale.'
  },
  phospholipid: {
    name: 'Fosfolípido',
    scale: '~2.5 nm de largo',
    desc: 'El bloque de construcción de toda membrana celular. Una cabeza afín al agua (hidrofílica) y dos colas que repelen el agua (hidrofóbicas) hacen que estas moléculas se autoensamblen en una bicapa.'
  },
  'head-group': {
    name: 'Cabeza polar de fosfocolina',
    scale: '~0.8 nm',
    desc: 'Colina, fosfato y glicerol. Tiene carga eléctrica y es polar, por lo que se orienta hacia el citosol acuoso o hacia el exterior de la célula.'
  },
  'fatty-acid-tail': {
    name: 'Colas de ácidos grasos',
    scale: '~1.8 nm',
    desc: 'Dos cadenas hidrocarbonadas de 16–18 carbonos. Un doble enlace cis dobla una de las colas, lo que mantiene fluida la membrana.'
  },
  cholesterol: {
    name: 'Colesterol',
    scale: '~1.9 nm',
    desc: 'Un esteroide rígido de cuatro anillos encajado entre los fosfolípidos. Amortigua la fluidez de la membrana: la hace más firme con el calor y más fluida con el frío.'
  },
  'channel-protein': {
    name: 'Proteína de canal (acuaporina)',
    scale: '~6 nm',
    desc: 'Una proteína integral de membrana que atraviesa toda la bicapa. Sus hélices α revisten un poro estrecho que deja pasar moléculas de agua en fila india.'
  },
  'peripheral-protein': {
    name: 'Proteína periférica',
    scale: '3–6 nm',
    desc: 'Una proteína globular unida a una de las caras de la membrana, que a menudo ancla el citoesqueleto o transmite señales intracelulares.'
  },
  glycocalyx: {
    name: 'Glucocálix',
    scale: '10–100 nm',
    desc: 'Cadenas ramificadas de azúcares unidas a proteínas (glicoproteínas) y lípidos (glicolípidos) de membrana. Actúan como tarjeta de identificación para el reconocimiento celular y como cubierta protectora.'
  },
  glucose: {
    name: 'Monosacárido (glucosa)',
    scale: '~0.9 nm',
    desc: 'Un anillo de azúcar de seis carbonos. Cadenas de azúcares como este forman el glucocálix, y la glucosa es además el combustible principal de la célula.'
  },
  cytoskeleton: {
    name: 'Citoesqueleto',
    scale: 'abarca toda la célula',
    desc: 'Filamentos proteicos que dan forma a la célula, mueven los orgánulos y dirigen la división celular. Se muestran sus tres tipos lado a lado a su grosor relativo real.'
  },
  microtubule: {
    name: 'Microtúbulo',
    scale: '25 nm de ancho',
    desc: 'Un tubo hueco de 13 protofilamentos construido con dímeros de tubulina. Sirve de riel para proteínas motoras y forma el huso mitótico que separa los cromosomas.'
  },
  tubulin: {
    name: 'Dímero de tubulina',
    scale: '8 nm',
    desc: 'α-tubulina más β-tubulina, cada una unida a un GTP. Los dímeros se añaden al extremo más para hacer crecer el microtúbulo.'
  },
  'actin-filament': {
    name: 'Filamento de actina (microfilamento)',
    scale: '7 nm de ancho',
    desc: 'Dos hebras trenzadas de monómeros de actina. Impulsa la contracción muscular, el desplazamiento celular y el córtex situado justo bajo la membrana.'
  },
  'g-actin': {
    name: 'Monómero de actina G',
    scale: '~5.5 nm',
    desc: 'Una proteína globular con una hendidura de unión a ATP. Miles de ellas se polimerizan para formar un solo filamento.'
  },
  'intermediate-filament': {
    name: 'Filamento intermedio',
    scale: '10 nm de ancho',
    desc: 'Haces similares a cuerdas formados por proteínas en espiral enrollada (queratina, vimentina, láminas). Aportan resistencia mecánica a la célula.'
  },
  nucleus: {
    name: 'Núcleo',
    scale: '5–10 µm',
    desc: 'El centro de control celular. Alberga el ADN empaquetado como cromatina y es el lugar donde los genes se copian en ARN. Se muestra en vista en corte.'
  },
  'nuclear-envelope': {
    name: 'Envoltura nuclear',
    scale: '~40 nm (2 membranas)',
    desc: 'Dos bicapas lipídicas separadas por el espacio perinuclear. Se fusionan alrededor de cada poro nuclear, y la membrana externa es continua con el RE rugoso.'
  },
  'nuclear-pore': {
    name: 'Complejo del poro nuclear',
    scale: '~120 nm',
    desc: 'Una enorme compuerta de simetría octogonal construida con unas 30 proteínas nucleoporinas distintas. Controla el tráfico de ARN y proteínas hacia dentro y fuera del núcleo.'
  },
  protein: {
    name: 'Proteína globular',
    scale: '2–10 nm',
    desc: 'Una cadena plegada de aminoácidos. Las hélices α y láminas β se empaquetan en una forma 3D, y esa forma decide la función de la proteína: enzima, receptor, motor o estructura.'
  },
  'alpha-helix': {
    name: 'Hélice α',
    scale: '~1.2 nm de ancho',
    desc: 'Una estructura proteica común: el esqueleto se enrolla en una espiral dextrógira con 3.6 aminoácidos por vuelta, mantenida por puentes de hidrógeno entre el residuo i y el i+4.'
  },
  polypeptide: {
    name: 'Cadena polipeptídica',
    scale: 'longitud variable',
    desc: 'Aminoácidos unidos cabeza con cola mediante enlaces peptídicos, tal como salen del ribosoma antes de que la cadena se pliegue.'
  },
  'amino-acid': {
    name: 'Aminoácido (alanina)',
    scale: '~0.5 nm',
    desc: 'El bloque de construcción de las proteínas. Un carbono α central porta un grupo amino, un grupo carboxilo, un hidrógeno y una cadena lateral (grupo R). Existen 20 tipos que solo difieren en R.'
  },
  nucleolus: {
    name: 'Nucléolo',
    scale: '1–3 µm',
    desc: 'Una región densa dentro del núcleo sin membrana propia. Produce ARN ribosómico y ensambla las subunidades de los ribosomas.'
  },
  chromosome: {
    name: 'Cromosoma',
    scale: 'hasta ~10 µm (mitótico)',
    desc: 'Una larga molécula de ADN con sus proteínas asociadas. Se muestra en su forma condensada en X durante la división: dos cromátidas hermanas idénticas unidas por el centrómero.'
  },
  'chromatin-fiber': {
    name: 'Fibra de cromatina',
    scale: '~30 nm',
    desc: 'Nucleosomas enrollados en una fibra más gruesa que compacta el ADN unas 40 veces.'
  },
  nucleosome: {
    name: 'Nucleosoma',
    scale: '~11 nm',
    desc: '147 pares de bases de ADN enrollados 1.65 vueltas alrededor de un núcleo de histonas: las «cuentas de collar» de la cromatina.'
  },
  histone: {
    name: 'Octámero de histonas',
    scale: '~7 nm',
    desc: 'Ocho proteínas histonas: dos de cada una de H2A, H2B, H3 y H4. Su carga positiva sujeta al ADN cargado negativamente, y sus colas portan marcas epigenéticas.'
  },
  dna: {
    name: 'Doble hélice de ADN',
    scale: '2 nm de ancho, 3.4 nm por vuelta',
    desc: 'Dos hebras antiparalelas de nucleótidos enrolladas en una hélice dextrógira. Las bases se aparean A–T y G–C en el centro, y los esqueletos de azúcar-fosfato corren por fuera.'
  },
  nucleotide: {
    name: 'Nucleótido',
    scale: '~1 nm',
    desc: 'La unidad del ADN y del ARN: un grupo fosfato, un azúcar de cinco carbonos y una base nitrogenada (A, T o U, G, C).'
  },
  phosphate: {
    name: 'Grupo fosfato',
    scale: '~0.3 nm',
    desc: 'Un átomo de fósforo unido a cuatro oxígenos. Posee carga negativa y enlaza los azúcares para formar el esqueleto del ácido nucleico.'
  },
  sugar: {
    name: 'Desoxirribosa',
    scale: '~0.5 nm',
    desc: 'Un anillo de azúcar de cinco carbonos. En el ARN el azúcar es la ribosa, que tiene un grupo –OH adicional en el carbono C2′.'
  },
  base: {
    name: 'Base nitrogenada (timina)',
    scale: '~0.5 nm',
    desc: 'Una molécula anular plana que representa una letra del código genético. Las purinas (A, G) tienen dos anillos y las pirimidinas (C, T, U) tienen uno.'
  },
  rna: {
    name: 'Hebra de ARN',
    scale: 'longitud variable',
    desc: 'Una hebra simple de nucleótidos con azúcar ribosa y uracilo en lugar de timina. El ARNm lleva la copia de un gen al ribosoma y el ARNr forma el núcleo catalítico del ribosoma.'
  },
  'rough-er': {
    name: 'Retículo endoplasmático rugoso',
    scale: 'láminas a ~50 nm entre sí',
    desc: 'Sacos membranosos aplanados (cisternas) tachonados de ribosomas. Produce proteínas para las membranas, la secreción y los lisosomas, e inicia su plegamiento dentro de su lumen.'
  },
  'smooth-er': {
    name: 'Retículo endoplasmático liso',
    scale: 'túbulos de ~50 nm',
    desc: 'Una red de túbulos membranosos sin ribosomas. Sintetiza lípidos y esteroides, almacena calcio y detoxifica fármacos y toxinas.'
  },
  ribosome: {
    name: 'Ribosoma',
    scale: '25–30 nm',
    desc: 'La fábrica de proteínas. Lee el ARNm de tres en tres bases (un codón) y une los aminoácidos correspondientes, traídos por los ARNt, en una cadena polipeptídica.'
  },
  'ribo-large': {
    name: 'Subunidad mayor (60S)',
    scale: '~25 nm',
    desc: 'Tres ARNr y unas 47 proteínas. Su ARNr cataliza la formación del enlace peptídico, por lo que el ribosoma es en realidad una enzima de ARN (una ribozima).'
  },
  'ribo-small': {
    name: 'Subunidad menor (40S)',
    scale: '~20 nm',
    desc: 'Un ARNr y unas 33 proteínas. Se une al ARNm y verifica que cada codón se aparee correctamente con su ARNt.'
  },
  golgi: {
    name: 'Aparato de Golgi',
    scale: '1–3 µm',
    desc: 'Una pila de cisternas aplanadas que modifica, clasifica y empaqueta las proteínas procedentes del RE. La carga entra por la cara cis y sale por la cara trans en vesículas.'
  },
  vesicle: {
    name: 'Vesícula',
    scale: '50–100 nm',
    desc: 'Una pequeña burbuja de membrana que transporta carga entre orgánulos o hacia la superficie celular. Se muestra en corte con una cubierta de clatrina en el lado posterior.'
  },
  mitochondrion: {
    name: 'Mitocondria',
    scale: '0.5–3 µm',
    desc: 'La central energética de la célula. Quema moléculas de alimento con oxígeno y almacena la energía como ATP. La envuelven dos membranas: una externa lisa y una interna plegada en crestas, bolsillos huecos unidos por estrechas uniones de cresta que concentran la maquinaria productora de ATP. Tiene su propio ADN y ribosomas, legado de un antiguo ancestro bacteriano. Se muestra en vista en corte.'
  },
  'atp-synthase': {
    name: 'ATP sintasa',
    scale: '~15 nm',
    desc: 'Un motor molecular rotatorio. Los protones que fluyen a través del anillo F₀ hacen girar el tallo central, que impulsa el cabezal F₁ para fabricar ATP. Las mitocondrias y los cloroplastos usan la misma máquina. El rotor está animado.'
  },
  lysosome: {
    name: 'Lisosoma',
    scale: '0.1–1.2 µm',
    desc: 'El centro de reciclaje celular. Un saco ácido (pH ~4.5) lleno de enzimas digestivas que degrada componentes desgastados y material endocitado.'
  },
  centrosome: {
    name: 'Centrosoma',
    scale: '~1 µm',
    desc: 'El principal centro organizador de microtúbulos: dos centriolos en ángulo recto rodeados de una nube de material pericentriolar. Construye el huso mitótico para la división celular.'
  },
  centriole: {
    name: 'Centriolo',
    scale: '~250 × 500 nm',
    desc: 'Un cilindro formado por nueve tripletes de microtúbulos dispuestos alrededor de un eje en rueda de carro.'
  },
  cytosol: {
    name: 'Citosol',
    scale: 'llena la célula',
    desc: 'El fluido densamente poblado entre los orgánulos: cerca de un 70 % de agua, además de iones, pequeñas moléculas y una densa mezcla de proteínas.'
  },
  water: {
    name: 'Molécula de agua',
    scale: '~0.28 nm',
    desc: 'Un oxígeno y dos hidrógenos en un ángulo de 104.5°. Su carga asimétrica forma puentes de hidrógeno con sus vecinas, lo que impulsa la formación de membranas y el plegamiento de proteínas.'
  },
  prokaryote: {
    name: 'Célula procariota (bacteria)',
    scale: '1–5 µm',
    desc: 'Una célula pequeña y sencilla sin núcleo ni orgánulos rodeados de membrana. Su ADN reside en una región llamada nucleoide, y la rodean una pared resistente, pili filamentosos y flagelos en forma de látigo. Pequeña pero muy organizada: microcompartimentos proteicos actúan como diminutos orgánulos. Se muestra abierta en corte longitudinal.'
  },
  'bacterial-wall': {
    name: 'Envoltura celular bacteriana',
    scale: '~30–40 nm',
    desc: 'La pared estratificada de una bacteria Gram-negativa: una membrana externa con porinas recubierta de lipopolisacárido, una fina malla de peptidoglicano en el periplasma y la membrana plasmática debajo. La malla evita que la célula estalle por presión osmótica.'
  },
  peptidoglycan: {
    name: 'Peptidoglicano',
    scale: 'malla de ~2–7 nm de grosor',
    desc: 'Largas cadenas de dos azúcares alternados (NAG y NAM) entrecruzadas por péptidos cortos en una única macromolécula con forma de saco. La penicilina actúa bloqueando estos enlaces cruzados.'
  },
  nucleoid: {
    name: 'Nucleoide',
    scale: 'región de ~1 µm',
    desc: 'La región que alberga el cromosoma bacteriano: una doble hélice circular de ADN de ~1 mm de largo estirada, retorcida en bucles superenrollados y sujeta por proteínas como HU y H-NS. Al no tener membrana nuclear, la ARN polimerasa copia los genes en ARNm aquí mismo y los ribosomas empiezan a traducirlo antes de que termine de transcribirse.'
  },
  plasmid: {
    name: 'Plásmido',
    scale: '1–200 kb (~0.3–60 µm de ADN)',
    desc: 'Los anillos azules en la célula: pequeños círculos adicionales de ADN bicatenario que se replican con independencia del cromosoma. El círculo está superenrollado sobre sí mismo. Los plásmidos portan genes accesorios, como resistencia a antibióticos, y genes de transferencia que les permiten pasar de una bacteria a otra.'
  },
  'ribosome-70s': {
    name: 'Ribosoma (70S)',
    scale: '~20 nm',
    desc: 'La fábrica bacteriana de proteínas: una subunidad 50S y una 30S, más pequeño que los ribosomas 80S de los eucariotas. Muchos antibióticos (como estreptomicina y tetraciclina) aprovechan esta diferencia.'
  },
  flagellum: {
    name: 'Flagelo',
    scale: '~20 nm de ancho, 5–20 µm de largo',
    desc: 'Un motor rotatorio y hélice propulsora. Los protones que fluyen por los estatores hacen girar el rotor hasta unas 300 veces por segundo; el gancho actúa como junta universal y el filamento helicoidal de flagelina impulsa la bacteria. El rotor está animado.'
  },
  pilus: {
    name: 'Pilus (fimbria)',
    scale: '~6 nm de ancho, 1–2 µm de largo',
    desc: 'Un fino filamento de proteínas pilina dispuestas en hélice. Su punta se adhiere a superficies y células huésped; algunos pili pueden retraerse para arrastrar la bacteria o incorporar ADN.'
  },
  microcompartment: {
    name: 'Microcompartimento bacteriano',
    scale: '100–200 nm',
    desc: 'Una cápside poliédrica hecha exclusivamente de proteínas que encierra enzimas, creando un microambiente especializado para un conjunto de reacciones. En el carboxisoma, la cubierta concentra CO₂ alrededor de la RuBisCO. Se muestra con los paneles frontales retirados.'
  },
  'ribo-50s': {
    name: 'Subunidad mayor (50S)',
    scale: '~20 nm',
    desc: 'Dos ARNr (23S y 5S) y unas 33 proteínas. Su ARNr une los aminoácidos en una cadena, por lo que el ribosoma es en realidad una enzima de ARN.'
  },
  'ribo-30s': {
    name: 'Subunidad menor (30S)',
    scale: '~15 nm',
    desc: 'Un ARNr (16S) y unas 21 proteínas. Se une al ARNm y comprueba que cada codón se aparee correctamente con su ARNt.'
  },
  trna: {
    name: 'ARN de transferencia (ARNt)',
    scale: '~7 nm',
    desc: 'Un ARN corto plegado en forma de L. Su anticodón se aparea con un codón del ARNm y el otro extremo porta el aminoácido correspondiente hacia el ribosoma.'
  },
  'rna-polymerase': {
    name: 'ARN polimerasa',
    scale: '~15 nm',
    desc: 'La enzima que copia un gen en ARNm. Su factor σ localiza dónde empieza un gen; las pinzas sujetan el ADN, abren una burbuja corta y sintetizan ARN siguiendo la hebra molde a unas 40 letras por segundo.'
  },
  capsule: {
    name: 'Cápsula',
    scale: '0.2–1 µm de grosor',
    desc: 'Una capa externa mucosa de largas cadenas de polisacáridos que retiene agua. Protege a la bacteria de la desecación, la ayuda a adherirse a superficies y la oculta frente al sistema inmunitario.'
  },
  lps: {
    name: 'Lipopolisacárido (LPS)',
    scale: '~10–20 nm de largo',
    desc: 'La molécula que recubre la cara externa de las bacterias Gram-negativas: un ancla de lípido A (la parte tóxica o endotoxina), un núcleo de oligosacáridos y un largo antígeno O de azúcares repetidos.'
  },
  porin: {
    name: 'Porina',
    scale: '~5 nm de ancho',
    desc: 'Un barril de 16 láminas β que forma un poro lleno de agua a través de la membrana externa, generalmente agrupado en trímeros. Deja pasar moléculas pequeñas como iones, azúcares y agua.'
  },
  'storage-granule': {
    name: 'Gránulos de reserva',
    scale: '50–500 nm',
    desc: 'Cuerpos de inclusión donde las bacterias almacenan recursos: glucógeno para glucosa, polifosfato para fosfato y energía, y PHB (un bioplástico natural) para carbono, recubierto de proteínas fasinas.'
  },
  proteasome: {
    name: 'Proteasoma',
    scale: '~45 nm',
    desc: 'La trituradora celular de proteínas no deseadas. Las proteínas marcadas con una cadena de ubiquitina son reconocidas por la tapa 19S, desplegadas e introducidas en el barril 20S, donde las subunidades β las cortan en péptidos cortos.'
  },
  'motor-protein': {
    name: 'Proteínas motoras',
    scale: '~60–80 nm',
    desc: 'Proteínas que caminan sobre los microtúbulos transportando carga. La kinesina avanza hacia el extremo más (hacia la periferia celular) y la dineína hacia el extremo menos (hacia el centro); cada paso mide 8 nm y consume un ATP. Animado.'
  },
  'electron-transport-chain': {
    name: 'Cadena de transporte de electrones',
    scale: '~20 nm de alto',
    desc: 'Un relevo de complejos proteicos en la membrana mitocondrial interna. Los electrones de los nutrientes (vía NADH) saltan del complejo I al IV y finalmente al oxígeno, formando agua. Su energía bombea protones a través de la membrana, y el regreso de esos protones por la ATP sintasa produce ATP. Las bacterias operan una cadena similar en su membrana plasmática. El electrón está animado.'
  },
  'light-reactions': {
    name: 'Fase luminosa (cadena tilacoidal)',
    scale: '~20 nm de alto',
    desc: 'La cadena que transforma la luz solar en energía química. El Fotosistema II rompe moléculas de agua y pasa electrones por la plastoquinona, el citocromo b₆f, la plastocianina y el Fotosistema I hasta la ferredoxina, donde la FNR produce NADPH. Los protones bombeados al lumen impulsan la ATP sintasa. El electrón está animado.'
  },
  cilium: {
    name: 'Cilio primario',
    scale: '~0.25 µm de ancho, 2–10 µm de largo',
    desc: 'Una antena piliforme construida sobre un centriolo (el cuerpo basal). En su interior está el axonema: nueve dobletes de microtúbulos en círculo. En los cilios móviles, brazos de dineína deslizan los dobletes para batir; el cilio primario actúa como antena sensorial.'
  },
  gpcr: {
    name: 'Receptor acoplado a proteína G (GPCR)',
    scale: '~5 nm',
    desc: 'Un receptor cuya cadena cruza siete veces la membrana. Cuando una molécula señal como una hormona se une por fuera, cambia de forma y activa una proteína G interna (Gα intercambia GDP por GTP). Cerca de un tercio de todos los fármacos actúan sobre estos receptores.'
  },
  'na-k-pump': {
    name: 'Bomba de sodio–potasio',
    scale: '~10 nm',
    desc: 'Una bomba de las células animales que gasta un ATP para expulsar 3 Na⁺ e introducir 2 K⁺. Los gradientes que genera impulsan los impulsos nerviosos y muchos transportadores; puede consumir hasta una cuarta parte de la energía celular.'
  },
  'cell-junction': {
    name: 'Uniones celulares',
    scale: '10–200 nm',
    desc: 'Cómo se unen las células animales con sus vecinas: las uniones estrechas sellan el espacio intercelular, los desmosomas remachan células entre sí mediante filamentos de queratina y las uniones comunicantes (gap) abren canales directos para iones y pequeñas moléculas.'
  },
  'cellulose-synthase': {
    name: 'Complejo celulosa sintasa',
    scale: '~25 nm',
    desc: 'Una roseta de 18 proteínas CESA en la membrana plasmática. Cada una usa UDP-glucosa para hilar una cadena de celulosa hacia la pared, y las 18 cadenas se agrupan de inmediato en una microfibrilla guiada por los microtúbulos corticales.'
  },
  amyloplast: {
    name: 'Amiloplasto',
    scale: '1–5 µm',
    desc: 'Un plastidio incoloro que almacena almidón, abundante en raíces, tubérculos y semillas (una patata está llena de ellos). En la cofia de la raíz, los pesados granos de almidón sedimentan hacia abajo e indican a la raíz la dirección de la gravedad.'
  },
  'plant-cell': {
    name: 'Célula eucariota (vegetal)',
    scale: '10–100 µm',
    desc: 'Una célula eucariota con tres estructuras ausentes en las células animales: una pared celular rígida de celulosa, cloroplastos que convierten la luz solar en azúcar y una gran vacuola central cuya presión osmótica mantiene firme la planta. Carece de centriolos y la vacuola realiza gran parte del reciclaje que hacen los lisosomas animales.'
  },
  'cell-wall': {
    name: 'Pared celular',
    scale: '0.1–10 µm de grosor',
    desc: 'Una capa resistente por fuera de la membrana plasmática. Las microfibrillas de celulosa, dispuestas en capas cruzadas, están enlazadas por hemicelulosa e inmersas en un gel de pectina. La lámina media pega entre sí a las células vecinas.'
  },
  'cellulose-microfibril': {
    name: 'Microfibrilla de celulosa',
    scale: '3–5 nm de ancho',
    desc: 'Unas 18–36 cadenas de celulosa alineadas en paralelo y unidas por puentes de hidrógeno en un cable cristalino más resistente en proporción a su peso que el acero, hilado por las rosetas de celulosa sintasa.'
  },
  cellulose: {
    name: 'Cadena de celulosa',
    scale: '~0.5 nm por glucosa',
    desc: 'Miles de unidades de glucosa unidas por enlaces β-1,4, cada una girada 180° respecto a la anterior. Ese giro hace que la cadena sea recta y plana para empaquetarse con firmeza. Es la molécula orgánica más abundante de la Tierra.'
  },
  plasmodesma: {
    name: 'Plasmodesmo',
    scale: '~50 nm de ancho',
    desc: 'Un canal a través de la pared celular que comunica el citoplasma de células vegetales vecinas. Su revestimiento de membrana plasmática es continuo entre ambas células y un fino tubo de RE (el desmotúbulo) recorre su eje central.'
  },
  'central-vacuole': {
    name: 'Vacuola central',
    scale: 'hasta el 90 % del volumen celular',
    desc: 'Un enorme saco de savia acuosa envuelto por la membrana del tonoplasto. El agua bombeada hacia su interior genera la presión de turgencia que mantiene erguida a la planta. También almacena iones, azúcares, pigmentos y desechos, y degrada componentes viejos. Se muestra en vista en corte.'
  },
  chloroplast: {
    name: 'Cloroplasto',
    scale: '5–10 µm',
    desc: 'Donde ocurre la fotosíntesis. Las membranas tilacoidales, apiladas en grana, capturan la luz y producen ATP y NADPH; las enzimas del estroma circundante los usan para fijar CO₂ en azúcar. Igual que las mitocondrias, posee su propio ADN y ribosomas, legado de una antigua cianobacteria. Se muestra en vista en corte.'
  },
  granum: {
    name: 'Granum (pila tilacoidal)',
    scale: '~0.5 µm de ancho',
    desc: 'Una pila de discos tilacoidales aplanados conectados con otras pilas mediante lamelas del estroma. Los complejos proteicos de su membrana ejecutan la fase luminosa y bombean protones al lumen, cuyo gradiente impulsa la ATP sintasa. Los discos se muestran abiertos en corte.'
  },
  'photosystem-ii': {
    name: 'Fotosistema II',
    scale: '~20 nm',
    desc: 'Un complejo proteico que usa la luz para romper moléculas de agua. Las clorofilas antena transfieren la energía absorbida al centro de reacción, que envía un electrón a la cadena de transporte. El complejo productor de oxígeno lo repone extrayendo electrones del agua y liberando el O₂ que respiramos.'
  },
  chlorophyll: {
    name: 'Clorofila a',
    scale: '~1.5 nm (anillo)',
    desc: 'El pigmento verde de las plantas. Un anillo plano de porfirina alrededor de un ion magnesio absorbe luz roja y azul y refleja la verde, mientras que una larga cola de fitol lo ancla en la membrana tilacoidal.'
  },
  rubisco: {
    name: 'RuBisCO',
    scale: '~11 nm',
    desc: 'La enzima que fija el CO₂ del aire en azúcar durante el ciclo de Calvin, y probablemente la proteína más abundante de la Tierra. Está formada por 8 subunidades grandes y 8 pequeñas.'
  },
  starch: {
    name: 'Almidón',
    scale: 'granos de 1–100 µm',
    desc: 'La reserva de azúcar de las plantas. La amilosa es una cadena helicoidal de glucosa (enlaces α-1,4) y la amilopectina se ramifica cada 24–30 unidades mediante enlaces α-1,6. Ambas se empaquetan en granos dentro de cloroplastos y amiloplastos.'
  },
  peroxisome: {
    name: 'Peroxisoma',
    scale: '0.2–1 µm',
    desc: 'Un pequeño orgánulo de membrana simple repleto de enzimas oxidativas. Degrada ácidos grasos, produce y destruye peróxido de hidrógeno (mediante la catalasa) y en las hojas ayuda a reciclar subproductos de la fotorrespiración. Se muestra en vista en corte.'
  },
  'real-cell': {
    name: 'Célula eucariota (realista)',
    scale: '10–30 µm',
    desc: 'La célula animal representada con el máximo realismo: abierta en corte, con orgánulos de aspecto gelatinoso en un citoplasma denso y un núcleo construido molécula a molécula. Está viva: las moléculas viajan entre los orgánulos, se acoplan al que las necesita y este se ilumina al elaborar su producto. Las formas y disposiciones siguen la biología real; las moléculas se dibujan a mayor escala para poder observarlas.'
  },
  'real-nucleus': {
    name: 'Núcleo (realista)',
    scale: '5–10 µm',
    desc: 'El núcleo abierto en corte, unas 20 veces mayor que su escala molecular real. Sus 46 cromosomas son cada uno una molécula de ADN enrollada en histonas y plegada en su propio territorio (unos 2,600 nucleosomas representados en lugar de los 30 millones reales). En cerca de un tercio de ellos se está transcribiendo un gen. Los ARNm terminados, empaquetados con proteínas, viajan hacia los poros y salen con la caperuza 5′ por delante. El nucléolo se asienta en el corte y estructuras reales de PCNA y ubiquitina pueblan el nucleoplasma.'
  },
  'real-nucleolus': {
    name: 'Nucléolo (realista)',
    scale: '1–3 µm',
    desc: 'Donde se fabrican los ribosomas. Los centros fibrilares pálidos contienen bucles de ADNr. Una fila de ARN polimerasas I lee cada gen de ADNr y sus transcritos de ARNr se alargan a lo largo del gen, dándole aspecto de «árbol de Navidad». En el componente fibrilar denso que lo rodea, la fibrilarina y pequeños ARN nucleolares cortan y modifican el ARNr; en la región granular externa se pliega con proteínas ribosómicas en las dos subunidades ribosómicas, que salen por los poros nucleares.'
  },
  'real-dna': {
    name: 'Gen en transcripción (realista)',
    scale: '~50–100 nm de diámetro',
    desc: 'La transcripción vista de cerca. Tres nucleosomas se han desplazado dejando el ADN despejado, y la ARN polimerasa II (su estructura real) se asienta sobre él, separando las dos hebras y copiando una en ARNm. El nuevo ARNm emerge de la polimerasa plegándose en horquillas; proteínas lo recubren a medida que crece y un complejo de unión a la caperuza sujeta su extremo 5′. Cada par de bases es un bastón coloreado mitad por cada base.'
  },
  'pol-ii': {
    name: 'ARN polimerasa II',
    scale: '~15 nm',
    desc: 'La enzima que copia los genes en ARNm. Esta es su estructura cristalográfica real (Pol II de levadura, PDB 1I50, 10 de sus 12 subunidades), con una esfera por cada aminoácido del esqueleto y otra por cada cadena lateral, coloreadas por subunidad. El ADN entra en una profunda hendidura entre las dos subunidades mayores, Rpb1 y Rpb2, donde el sitio activo añade entre 20 y 60 nucleótidos por segundo.'
  },
  pcna: {
    name: 'Pinza deslizante PCNA',
    scale: '~8 nm de diámetro',
    desc: 'Tres proteínas idénticas unidas cabeza con cola formando un anillo (PCNA humano, PDB 1AXC). El anillo se cierra alrededor del ADN y se desliza sobre él, sujetando la ADN polimerasa mientras el ADN se replica o se repara. Hélices α tapizan el orificio central donde contactan con el ADN.'
  },
  ubiquitin: {
    name: 'Ubiquitina',
    scale: '~3 nm',
    desc: 'Una pequeña proteína de 76 aminoácidos (PDB 1UBQ) que la célula utiliza como etiqueta molecular. Enzimas específicas unen su último aminoácido, Gly76, a una lisina de la proteína diana. Una cadena de cuatro o más ubiquitinas enlazadas por Lys48 envía la proteína al proteasoma para su degradación; otros enlaces señalan reparación o tráfico vesicular.'
  },
  'lipid-droplet': {
    name: 'Gota lipídica',
    scale: '0.1–5 µm (mayor en adipocitos)',
    desc: 'El almacén de grasa de la célula. A diferencia de otros orgánulos no tiene bicapa: una sola monocapa de fosfolípidos, con las colas apuntando hacia dentro, envuelve un núcleo de grasas neutras (triglicéridos y ésteres de colesterol). Brota del RE liso y las proteínas perilipinas de su superficie regulan cuándo se liberan ácidos grasos para las mitocondrias.'
  },
  microvillus: {
    name: 'Microvellosidad',
    scale: '~0.1 µm de ancho, 1–2 µm de largo',
    desc: 'Una proyección digitiforme de la membrana plasmática que multiplica la superficie de absorción, como en el borde en cepillo intestinal. Su núcleo es un haz compacto de filamentos paralelos de actina con sus extremos más en la punta, entrecruzados por villina y fimbrina y anclados a la membrana por miosina-1a.'
  },
  'real-bacterium': {
    name: 'Célula procariota (realista)',
    scale: '~2 µm × 0.9 µm',
    desc: 'Una Escherichia coli realista abierta en corte con todo a su escala verdadera, incluidas las moléculas: 1 unidad de escena equivale a 100 nm. No tiene núcleo ni orgánulos membranosos. Una envoltura de tres capas rodea un citoplasma abarrotado, y el cromosoma (sus 4.6 millones de pares de bases) se pliega en el nucleoide central mientras se replica. Casi cada molécula proviene de coordenadas reales del Protein Data Bank; su energía funciona con protones bombeados por la cadena respiratoria para impulsar la ATP sintasa y los motores flagelares.'
  },
  'real-envelope': {
    name: 'Envoltura celular (realista)',
    scale: '~35 nm de grosor',
    desc: 'La envoltura Gram-negativa molécula a molécula. Por fuera, una membrana externa cuya hoja exterior es LPS —barrera frente a muchos antibióticos— con porinas que dejan pasar nutrientes pequeños. Luego el periplasma: un gel delgado con una sola capa de peptidoglicano anclada por lipoproteínas. Debajo, la membrana interna donde la bacteria fabrica su ATP al carecer de mitocondrias. Bombas como AcrAB–TolC atraviesan las tres capas y expulsan antibióticos directamente al exterior.'
  },
  'real-motor': {
    name: 'Motor flagelar (realista)',
    scale: '~45 nm de diámetro',
    desc: 'Un motor rotatorio de unos 45 nm de diámetro abierto por la mitad. Los protones que entran a la célula a través de un anillo de estatores empujan el rotor haciéndolo girar hasta ~100 veces por segundo (aquí desacelerado para visualizarlo). Anillos pasamuros guían el eje a través de la pared y la membrana externa; el gancho curva el giro hacia el largo filamento helicoidal. Cuando el anillo C invierte el sentido de giro, el haz flagelar se separa y la bacteria da un vuelco.'
  },
  'real-pole': {
    name: 'Matriz de quimiorreceptores (realista)',
    scale: '~250 nm de diámetro',
    desc: 'En uno de los polos celulares, miles de receptores se agrupan en un panal hexagonal a 12 nm de un trímero al siguiente. Por fuera detectan azúcares, aminoácidos y repelentes; por dentro, sus puntas sujetan la quinasa CheA, cuya señal indica a los motores flagelares cuándo cambiar de rumbo. Al actuar acoplados en red, confieren a la bacteria una sensibilidad extraordinaria.'
  },
  'real-nucleoid': {
    name: 'Nucleoide (realista)',
    scale: '~1.2 × 0.65 µm',
    desc: 'El cromosoma sin núcleo: un círculo de 4.6 millones de pares de bases (1.6 mm de longitud) plegado en una región de apenas un micrómetro. El superenrollamiento negativo lo trenza en plectonemas —dos tramos de doble hélice enrollados entre sí— en bucles de ~10,000 pares de bases; proteínas como HU, Fis e IHF lo doblan y puentean, y la ADN girasa mantiene el superenrollamiento mientras una horquilla de replicación lo copia.'
  },
  'real-gene': {
    name: 'Gen en transcripción (realista)',
    scale: '~100 nm de diámetro',
    desc: 'Transcripción y traducción simultáneas. Sin envoltura nuclear de por medio, los ribosomas se suben al ARNm tan pronto como su extremo 5′ asoma de la ARN polimerasa. El ribosoma líder avanza pegado tras la polimerasa y otros se cargan detrás en un polisoma, cada uno sintetizando su cadena proteica naciente a escala atómica real.'
  },
  'ribosome-ecoli': {
    name: 'Ribosoma (E. coli 70S, estructura real)',
    scale: '~25 nm',
    desc: 'El ribosoma real de E. coli (PDB 4YBB), con una esfera por cada nucleótido y aminoácido: unos 4,500 nucleótidos de ARNr en tres moléculas (16S, 23S y 5S) y más de 50 proteínas. La subunidad menor 30S (más clara) lee el ARNm; la subunidad mayor 50S (más oscura) enlaza los aminoácidos. Una bacteria en crecimiento rápido contiene decenas de miles.'
  },
  'rnap-ecoli': {
    name: 'ARN polimerasa (E. coli, estructura real)',
    scale: '~15 nm',
    desc: 'La holoenzima ARN polimerasa bacteriana (PDB 4YG2). Dos subunidades α, β, β′ y ω forman el núcleo catalítico que sintetiza ARN; el factor σ70 viaja acoplado para reconocer los promotores donde empiezan los genes y se suelta una vez iniciada la transcripción. Las pinzas β y β′ abrazan el ADN.'
  },
  groel: {
    name: 'Chaperonina GroEL–GroES (estructura real)',
    scale: '~14 nm de ancho, 20 nm de alto',
    desc: 'Una máquina plegadora de proteínas (PDB 1AON): dos anillos de siete subunidades GroEL y una tapa de siete GroES. Una proteína recién sintetizada mal plegada queda atrapada dentro de un anillo, se cierra con la tapa GroES y dispone de unos diez segundos en una cámara aislada para plegarse correctamente consumiendo ATP.'
  },
  'hu-protein': {
    name: 'Proteína HU (nucleoide, estructura real)',
    scale: '~3 nm de cuerpo',
    desc: 'La proteína más abundante del nucleoide bacteriano (PDB 1MUL), un dímero de dos cadenas pequeñas. Sus dos brazos β se insertan en el surco menor del ADN y lo doblan fuertemente, ayudando a compactar el cromosoma. A diferencia de las histonas eucariotas, se une en cualquier punto y se desplaza con rapidez.'
  },
  chemoreceptor: {
    name: 'Quimiorreceptor (estructura real)',
    scale: '~20 nm de largo (parte citoplasmática)',
    desc: 'El dominio citoplasmático de una proteína de quimiotaxis aceptora de metilo (PDB 1QU7): dos cadenas, cada una una larga horquilla helicoidal, enrolladas en un haz de cuatro hélices. Los grupos metilo añadidos cerca de la membrana permiten a la bacteria adaptar su sensibilidad.'
  },
  'real-fork': {
    name: 'Horquilla de replicación (realista)',
    scale: '~250 nm de largo',
    desc: 'Copiando el cromosoma bacteriano. La helicasa DnaB rodea una hebra y separa la doble hélice; cada hebra parental sirve de molde para una nueva. Como la ADN polimerasa III solo sintetiza en una dirección, la hebra conductora se copia de forma continua hacia la horquilla, mientras que la hebra rezagada forma un bucle y se sintetiza por tramos en fragmentos de Okazaki de 1,000–2,000 bases iniciados por cebadores de ARN de la primasa. Un replisoma coordina ambas polimerasas a ~1,000 pares de bases por segundo.'
  },
  'atp-synthase-ecoli': {
    name: 'ATP sintasa (E. coli, estructura real)',
    scale: '~25 nm de alto',
    desc: 'La ATP sintasa real de E. coli (PDB 6OQR), una esfera por aminoácido, con el exterior celular hacia arriba. Los protones que entran por la subunidad a hacen girar el anillo de subunidades c y el tallo central; el tallo gira dentro del cabezal F₁ y cada tercio de vuelta comprime una subunidad β para sintetizar un ATP. El tallo periférico impide que el cabezal gire con el rotor.'
  },
  'complex-i-ecoli': {
    name: 'Complejo I (E. coli, estructura real)',
    scale: '~30 nm de diámetro',
    desc: 'La NADH deshidrogenasa I (PDB 7NYR), el primer y mayor complejo de la cadena respiratoria: 13 proteínas diferentes en forma de L. El brazo citoplasmático toma dos electrones del NADH y los conduce por una cadena de centros hierro-azufre hasta la quinona en la membrana; el brazo membranoso usa esa energía para bombear cuatro protones fuera de la célula.'
  },
  'acrab-tolc': {
    name: 'Bomba de eflujo AcrAB–TolC (estructura real)',
    scale: '~33 nm de largo',
    desc: 'Una bomba tripartita que atraviesa toda la envoltura Gram-negativa (PDB 5O66). AcrB en la membrana interna captura antibióticos, detergentes y sales biliares y, propulsada por la entrada de protones, los empuja a través de un embudo de seis AcrA hacia TolC, un conducto de 14 nm en la membrana externa que los expulsa fuera de la bacteria.'
  },
  'dnab-helicase': {
    name: 'Helicasa DnaB (estructura real)',
    scale: '~12 nm de diámetro',
    desc: 'La helicasa replicativa bacteriana (PDB 6QEL): seis subunidades idénticas formando un anillo alrededor de una hebra de ADN. Consumiendo ATP, camina a lo largo de esa hebra y separa la doble hélice por delante de las polimerasas a unos 1,000 pares de bases por segundo.'
  },
  'pol3-ecoli': {
    name: 'ADN polimerasa III (E. coli, estructura real)',
    scale: '~13 nm',
    desc: 'La polimerasa replicativa (PDB 5FKV) asentada sobre el ADN. La subunidad α añade nucleótidos emparejándolos con el molde; ε corrige pruebas eliminando errores; y la pinza β, un anillo cerrado alrededor del ADN, evita que se suelte para que pueda copiar cientos de miles de bases seguidas.'
  },
  gyrase: {
    name: 'ADN girasa (E. coli, estructura real)',
    scale: '~20 nm',
    desc: 'Una topoisomerasa tipo II (PDB 6RKW). Corta ambas hebras de un tramo de ADN, pasa otro segmento de doble hélice a través del corte y vuelve a sellar los extremos usando ATP. Cada ciclo introduce dos superenrollamientos negativos. Los antibióticos fluoroquinolonas como el ciprofloxacino matan a las bacterias bloqueando esta enzima.'
  },
  'real-plant': {
    name: 'Célula vegetal (realista)',
    scale: '~22 × 17 × 18 µm',
    desc: 'Una célula del mesófilo foliar —donde ocurre la fotosíntesis— abierta en corte. Una pared de celulosa la sostiene; una gran vacuola central ocupa la mayor parte de su volumen, comprimiendo el citoplasma en una fina capa contra la pared donde los cloroplastos quedan expuestos a la luz. Cordones transvacuolares cruzan la vacuola y la ciclosis arrastra los orgánulos sobre cables de actina. Está viva: la luz impulsa en los cloroplastos la fotólisis del agua y la fijación de CO₂ en azúcar, que alimenta mitocondrias, vacuola y celulosa sintasas o pasa a células vecinas por los plasmodesmos.'
  },
  'real-plant-nucleus': {
    name: 'Núcleo (realista, vegetal)',
    scale: '~6 µm',
    desc: 'El núcleo de una célula de Arabidopsis abierto en corte. Sus 10 cromosomas son cada uno una molécula de ADN enrollada en histonas dentro de su propio territorio. Un rasgo distintivo vegetal: el centrómero de cada cromosoma y sus repeticiones pericentroméricas se compactan densamente en cromocentros junto a la periferia nuclear (dibujados con histonas más oscuras), desde donde se proyectan los brazos cromosómicos.'
  },
  'real-plant-nucleolus': {
    name: 'Nucléolo (realista, vegetal)',
    scale: '~2 µm',
    desc: 'Donde se fabrican los ribosomas vegetales. Los centros fibrilares pálidos albergan bucles de ADNr leídos por filas de ARN polimerasas I en transcritos de ARNr cada vez más largos; a su alrededor el ARNr se procesa y se ensambla con proteínas ribosómicas en las subunidades 40S y 60S.'
  },
  'real-plant-dna': {
    name: 'Gen en transcripción (realista, vegetal)',
    scale: '~50–100 nm de diámetro',
    desc: 'La transcripción vista de cerca en la célula vegetal: los nucleosomas se desplazan y la ARN polimerasa II (estructura PDB 1I50) desenrolla y copia un gen vegetal en ARNm naciente, que se pliega en pequeñas horquillas a medida que emerge.'
  },
  'real-chloroplast': {
    name: 'Cloroplasto (realista)',
    scale: '~4.6 × 3 × 1.9 µm',
    desc: 'El cloroplasto abierto longitudinalmente en corte. Dentro de su doble envoltura, unas 40 pilas de grana (de 5 a 16 discos tilacoidales cada una) están conectadas por lamelas del estroma; granos de almidón, plastoglóbulos lipídicos, su propio ADN cloroplástico y ribosomas 70S de tipo bacteriano pueblan el estroma. Un granum junto al corte está construido molécula a molécula a escala real.'
  },
  'real-thylakoid': {
    name: 'Granum (realista, escala real)',
    scale: '~440 nm de diámetro, 270 nm de alto',
    desc: 'Un granum partido por la mitad a escala verdadera: 12 tilacoides, cada uno formado por dos membranas de 5 nm alrededor de un lumen de 9 nm. Donde dos tilacoides se apilan solo quedan 3.5 nm de estroma entre ellos, por lo que allí se concentran el Fotosistema II y sus antenas LHCII (con cada clorofila representada) junto al citocromo b₆f. El Fotosistema I y la ATP sintasa sobresalen demasiado hacia el estroma y se ubican en los márgenes no apilados y en las lamelas. La RuBisCO abarrota el estroma circundante (estructuras PDB 3JCU, 1RWT, 6RQF, 4XK8, 6FKF, 1RCX, 1AG6).'
  },
  'real-wall': {
    name: 'Pared celular (realista, escala real)',
    scale: '~250 nm de grosor',
    desc: 'La pared celular primaria cortada a escala verdadera. Las microfibrillas de celulosa de 3.6 nm de grosor se disponen en capas; las más nuevas, junto a la membrana, corren paralelas a los microtúbulos corticales internos porque las rosetas de celulosa sintasa se deslizan guiadas por ellos mientras hilan cada microfibrilla. La hemicelulosa enlaza las microfibrillas y la pectina rellena los huecos y forma la lámina media adhesiva. En la membrana se observan rosetas CESA (6WLB), bombas de protones AHA2 (5KSD) y acuaporinas PIP2 (1Z98).'
  }
  ,
  'psii-real': {
    name: 'Supercomplejo Fotosistema II–LHCII (estructura real)',
    scale: '~30 nm de largo',
    desc: 'El supercomplejo PSII–LHCII de espinaca (PDB 3JCU), con el lado del lumen hacia arriba: dos núcleos de PSII con sus antenas LHCII, una esfera por aminoácido y una esfera verde mayor por cada clorofila. Las clorofilas antena canalizan la energía luminosa hacia el centro de reacción para impulsar el transporte de electrones, mientras el complejo productor de oxígeno rompe agua liberando O₂.'
  },
  'lhcii-real': {
    name: 'Complejo antena LHCII (estructura real)',
    scale: '~7 nm de diámetro',
    desc: 'El principal complejo captador de luz de las plantas (PDB 1RWT), un trímero y probablemente la proteína de membrana más abundante de la Tierra. Cada subunidad aloja 14 clorofilas y cuatro carotenoides y transfiere la energía luminosa captada a un fotosistema.'
  },
  'b6f-real': {
    name: 'Citocromo b6f (estructura real)',
    scale: '~10 nm',
    desc: 'El eslabón central de la cadena electrónica tilacoidal (PDB 6RQF, dímero con el lado del lumen hacia arriba). Recibe electrones del plastoquinol reducido por el PSII y los transfiere a la plastocianina, bombeando protones adicionales hacia el lumen. Es el homólogo cloroplástico del complejo III mitocondrial.'
  },
  'psi-real': {
    name: 'Fotosistema I–LHCI (estructura real)',
    scale: '~20 nm',
    desc: 'El supercomplejo PSI–LHCI de guisante (PDB 4XK8, lado del lumen hacia arriba). Un fotón de luz reenergiza el electrón entregado por la plastocianina y el PSI lo transfiere, a través de centros hierro-azufre en PsaC, a la ferredoxina del lado del estroma para producir NADPH. Su cinturón de cuatro proteínas LHCI porta clorofilas antena adicionales.'
  },
  'catp-real': {
    name: 'ATP sintasa (cloroplasto, estructura real)',
    scale: '~25 nm de alto',
    desc: 'La ATP sintasa del cloroplasto de espinaca (PDB 6FKF), con el lado del lumen hacia arriba y el cabezal CF₁ colgando hacia el estroma. Los protones acumulados en el lumen durante la fase luminosa salen a través de la subunidad a, haciendo girar un anillo de 14 subunidades c y el tallo central; cada tercio de vuelta produce un ATP. Se inactiva en la oscuridad para no gastar ATP.'
  },
  'rubisco-real': {
    name: 'RuBisCO (estructura real)',
    scale: '~11 nm',
    desc: 'La RuBisCO de espinaca (PDB 1RCX): ocho subunidades grandes y ocho pequeñas. Fija el CO₂ atmosférico en azúcar dentro del ciclo de Calvin, pero trabaja lentamente (pocas moléculas por segundo) y a veces atrapa O₂ por error iniciando la fotorrespiración, razón por la cual las hojas acumulan cantidades enormes de esta enzima.'
  },
  'cesa-real': {
    name: 'Roseta de celulosa sintasa (estructura real)',
    scale: '~35 nm de diámetro',
    desc: 'Seis copias del trímero CESA (PDB 6WLB, CESA8 de álamo) dispuestas formando la roseta hexalobulada de la membrana plasmática vegetal. Cada subunidad CESA toma glucosa de la UDP-glucosa citoplasmática, alarga una cadena de celulosa y la extruye por un poro; las 18 cadenas cristalizan simultáneamente en una microfibrilla.'
  },
  'aha-real': {
    name: 'Bomba de protones de membrana (AHA2, estructura real)',
    scale: '~12 nm',
    desc: 'La H⁺-ATPasa AHA2 de Arabidopsis (PDB 5KSD). Consumiendo ATP, bombea protones fuera de la célula vegetal. El gradiente electroquímico que genera impulsa la absorción de azúcares e iones, y la acidificación de la pared celular la ablanda para permitir el crecimiento celular.'
  },
  'pip-real': {
    name: 'Acuaporina (PIP2, estructura real)',
    scale: '~9 nm de diámetro',
    desc: 'Una acuaporina de la membrana plasmática de espinaca (SoPIP2;1, PDB 1Z98): cuatro canales que dejan pasar agua en fila india —hasta mil millones de moléculas por segundo— impidiendo el paso de protones. Las plantas los abren y cierran para regular el flujo hídrico.'
  },
  'real-fungal': {
    name: 'Célula fúngica (levadura realista)',
    scale: '~5 × 4 µm madre + ~2.4 µm yema',
    desc: 'La levadura de gemación (Saccharomyces cerevisiae), organismo modelo del Reino Fungi, abierta en corte. Los hongos son eucariotas heterótrofos que combinan rasgos propios únicos: una resistente pared celular de tres capas hecha de quitina (el mismo polímero del exoesqueleto de los insectos), β-1,3/β-1,6-glucanos ramificados y un denso cepillo externo de manoproteínas; una membrana plasmática rigidizada por ergosterol (diana de los fármacos antifúngicos azoles y polienos) en lugar de colesterol; división asimétrica por gemación a través de un collar en reloj de arena de filamentos de septina (PDB 2QAG) que deja cicatrices quitinosas permanentes; una gran vacuola ácida con polifosfato; cisternas de Golgi dispersas no apiladas; y «mitosis cerrada» dirigida por un cuerpo polar del huso (SPB) incrustado en la envoltura nuclear intacta. En el citosol, la piruvato descarboxilasa (Pdc1, PDB 1PYD) y la alcohol deshidrogenasa (Adh1, PDB 4W6Z) fermentan la glucosa en etanol y CO₂.'
  },
  'real-fungal-nucleus': {
    name: 'Núcleo fúngico (realista)',
    scale: '~1.8 µm de diámetro',
    desc: 'El núcleo de la levadura en gemación abierto en corte. A diferencia de los núcleos animales y vegetales, la envoltura nuclear fúngica nunca se desintegra durante la mitosis («mitosis cerrada»). En su lugar, el Cuerpo Polar del Huso (SPB) —un tapón proteico multicapa incrustado en la membrana nuclear— nuclea microtúbulos del huso intranucleares hacia dentro y microtúbulos astrales citoplasmáticos hacia fuera. Los 16 cromosomas haploides adoptan la conformación de Rabl con sus centrómeros anclados cerca del SPB y un único nucléolo en forma de medialuna en el polo opuesto.'
  },
  'real-fungal-nucleolus': {
    name: 'Nucléolo en medialuna (levadura realista)',
    scale: '~0.9 µm',
    desc: 'En Saccharomyces cerevisiae, un único nucléolo en forma de medialuna recubre un lado del núcleo frente al cuerpo polar del huso. Se organiza alrededor de ~150 repeticiones en tándem de ADNr en el cromosoma XII, donde la ARN polimerasa I transcribe el pre-ARNr 35S y ensambla las subunidades ribosómicas 40S y 60S.'
  },
  'real-fungal-dna': {
    name: 'Gen de levadura en transcripción (realista)',
    scale: '~50–100 nm de diámetro',
    desc: 'La transcripción en su especie original: la histórica estructura cristalográfica de la ARN polimerasa II eucariota de Roger Kornberg (PDB 1I50) se resolvió precisamente a partir de Saccharomyces cerevisiae. Aquí la Pol II de levadura desenrolla un gen compacto entre nucleosomas y sintetiza ARNm.'
  },
  'real-fungal-bud': {
    name: 'Cuello de gemación y yema hija (realista)',
    scale: '~1.2 µm cuello × 2.4 µm yema',
    desc: 'Cómo se divide una célula de levadura por gemación. Un doble collar en reloj de arena de filamentos de septina unidos a GTP (Cdc3, Cdc10, Cdc12, Cdc11; PDB 2QAG) sostiene la constricción entre la célula madre y la yema hija, actuando como barrera de difusión y reclutando el anillo contráctil de actomiosina. Cables de actina polarizados nucleados por forminas en la punta de la yema guían motores de miosina-V (Myo2) con vesículas secretoras cargadas de glucano y quitina sintasas.'
  },
  'real-fungal-wall': {
    name: 'Pared celular fúngica y córtex (realista, escala real)',
    scale: '~220 nm de grosor',
    desc: 'Un corte a escala verdadera de la pared celular, la membrana plasmática y el córtex de la levadura (1 unidad = 100 nm). A diferencia de las paredes vegetales de celulosa o bacterianas de peptidoglicano, la pared fúngica tiene tres capas distintas: un anillo interno portante de microfibrillas cristalinas de quitina (β-1,4-GlcNAc), una matriz elástica media de β-1,3 y β-1,6-glucanos remodelada por la exo-β-1,3-glucanasa Exg1 (PDB 1EQC) y un escudo externo de manoproteínas. En la membrana rica en ergosterol se observan bombas H⁺-ATPasa Pma1 (PDB 3B8C) y bastones de septina (PDB 2QAG), junto a Erg11 (PDB 4LXJ), Pdc1 (PDB 1PYD) y Adh1 (PDB 4W6Z).'
  },
  'fungal-wall': {
    name: 'Pared celular fúngica (arquitectura de 3 capas)',
    scale: '~120–200 nm de grosor',
    desc: 'La armadura de tres capas de una célula fúngica, completamente distinta de la celulosa vegetal y del peptidoglicano bacteriano. Junto a la membrana plasmática yacen microfibrillas cristalinas de quitina (N-acetilglucosamina β-1,4); sobre ellas se extiende una malla elástica de β-1,3-glucano entrecruzada con β-1,6-glucano; y por fuera sobresale un denso cepillo de manoproteínas. Los antifúngicos equinocandinas (como la caspofungina) bloquean la sintasa Fks1 de β-1,3-glucano.'
  },
  'chitin-fibril': {
    name: 'Microfibrilla de quitina (β-1,4-GlcNAc)',
    scale: '~3 nm de ancho',
    desc: 'Cadenas de N-acetilglucosamina (GlcNAc) unidas por enlaces β-1,4, con cada azúcar girado 180° respecto a su vecino y enlazado por puentes de hidrógeno en láminas antiparalelas de α-quitina. El grupo N-acetilo (–NHCOCH₃) en C2 aporta puentes de hidrógeno adicionales entre cadenas, haciendo de la quitina uno de los polímeros estructurales más resistentes de la naturaleza, compartido por los hongos y el exoesqueleto de los artrópodos.'
  },
  'bud-scar': {
    name: 'Cicatriz de gemación quitinosa',
    scale: '~1–1.2 µm de diámetro',
    desc: 'Cada vez que una levadura madre produce una célula hija por gemación, las quitina sintasas (Chs2 y Chs3) depositan un septo primario de quitina pura en el cuello y un anillo elevado en forma de cráter a su alrededor. Cuando la quitinasa separa a la hija, el anillo permanece de por vida en la madre como cicatriz de gemación. Contar estas cicatrices revela cuántas veces se ha dividido la célula (típicamente 20–30 divisiones).'
  },
  'spindle-pole-body': {
    name: 'Cuerpo polar del huso (SPB)',
    scale: '~120 nm diámetro × 150 nm alto',
    desc: 'El centro organizador de microtúbulos de los hongos, equivalente al centrosoma animal pero sin centriolos. Está construido por tres discos proteicos apilados (placas externa, central e interna) incrustados en la envoltura nuclear como un ojal, junto a un semipuente lateral que lo duplica en cada ciclo celular. Durante la mitosis cerrada fúngica, la placa interna nuclea los microtúbulos del huso intranuclear y la placa externa los microtúbulos astrales citoplasmáticos.'
  },
  ergosterol: {
    name: 'Ergosterol',
    scale: '~1.9 nm',
    desc: 'El esterol característico de las membranas fúngicas, que ocupa el lugar del colesterol animal y los fitoesteroles vegetales. Su núcleo esteroideo rígido de cuatro anillos posee dos dobles enlaces conjugados en el anillo B (Δ5,7, que la luz UV convierte en vitamina D₂) y un doble enlace (Δ22) y grupo metilo (C24) adicionales en la cola. Es la diana clave de los medicamentos antifúngicos clínicos (azoles y anfotericina B).'
  },
  'adh1-real': {
    name: 'Alcohol deshidrogenasa (Adh1, estructura real)',
    scale: 'tetrámero de ~9 nm',
    desc: 'La Alcohol Deshidrogenasa I de la levadura de panadería y cervecería (PDB 4W6Z), un homotetrámero de cuatro subunidades de 347 aminoácidos, cada una con un ion zinc catalítico y un plegamiento de Rossmann de unión a NADH/NAD⁺. En el paso final de la fermentación alcohólica, Adh1 reduce el acetaldehído a etanol regenerando NAD⁺ para que la glucólisis siga produciendo ATP sin oxígeno.'
  },
  'pdc1-real': {
    name: 'Piruvato descarboxilasa (Pdc1, estructura real)',
    scale: 'tetrámero de ~10 nm',
    desc: 'La Piruvato Descarboxilasa de levadura (PDB 1PYD), un homotetrámero de 240 kDa que utiliza difosfato de tiamina (vitamina B₁) y Mg²⁺ para escindir el piruvato en acetaldehído y gas dióxido de carbono (CO₂): las burbujas que hacen levar el pan y dan espuma a la cerveza y al champán.'
  },
  'erg11-real': {
    name: 'Lanosterol 14α-desmetilasa (Erg11 / CYP51, estructura real)',
    scale: '~7 nm de alto',
    desc: 'La enzima Erg11 completa de Saccharomyces cerevisiae (PDB 4LXJ), una monooxigenasa citocromo P450 anclada a la membrana del retículo endoplasmático. Su centro activo con hierro hemo elimina el grupo 14α-metilo del lanosterol en la ruta de síntesis del ergosterol. Los antifúngicos azoles (fluconazol, itraconazol, voriconazol) se coordinan directamente con el hierro hemo de Erg11, bloqueando la síntesis de ergosterol.'
  },
  'exg1-real': {
    name: 'Exo-β-1,3-glucanasa (Exg1, estructura real)',
    scale: '~5.5 nm',
    desc: 'La principal enzima remodeladora de glucanos de la pared celular de Saccharomyces cerevisiae (PDB 1EQC), plegada en un barril TIM (β/α)₈ de ocho hebras con un profundo surco catalítico. Secretada al periplasma y la pared, Exg1 recorta cadenas de β-1,3-glucano para que la pared pueda expandirse en la punta de la yema en crecimiento.'
  },
  'pma1-real': {
    name: 'H⁺-ATPasa de membrana plasmática (Pma1, estructura real)',
    scale: '~12 nm de alto',
    desc: 'La bomba maestra de protones de las membranas plasmáticas fúngicas (estructura cristalográfica de H⁺-ATPasa tipo P3A, PDB 3B8C). Pma1 es la proteína más abundante de la membrana de la levadura y consume hasta el 20 % del ATP celular para bombear protones al exterior, acidificando el medio e impulsando la entrada de nutrientes.'
  },
  'septin-real': {
    name: 'Filamento de septina (Cdc3–Cdc10–Cdc12, estructura real)',
    scale: 'bastón hexamérico de ~25 nm',
    desc: 'Un bastón hexamérico de septinas (PDB 2QAG), bloque fundamental del collar del cuello de gemación fúngico. Las septinas son proteínas fijadoras de GTP (llamadas a menudo el «cuarto componente del citoesqueleto») que se ensamblan extremo con extremo en filamentos apolares y forman anillos en reloj de arena en el cuello madre–yema.'
  },
  'real-phage': {
    name: 'Bacteriófago T4 (realista)',
    scale: '~200 nm de alto × 85 nm cabeza',
    desc: 'Un Bacteriófago T4 realista acoplado a la envoltura de Escherichia coli, abierto en corte con todo a una única escala verdadera: 1 unidad de escena equivale a 10 nm. El fago T4 es una de las máquinas moleculares más complejas de la naturaleza: una cabeza icosaédrica prolata (115 × 85 nm, T_end = 13 laevo, T_mid = 20) presurizada a ~500 atmósferas con 168,903 pares de bases de ADN bicatenario, una válvula portal dodecamérica gp20, una cola contráctil de 92.5 nm con 24 anillos hexaméricos de vaina gp18 alrededor de un tubo interno gp19, una placa basal hexagonal armada con una aguja perforadora en hélice β gp27–gp5 y tres lisozimas T4, seis fibras caudales cortas (gp12) y seis fibras caudales largas articuladas de 145 nm (gp34–gp37). Cada proteína principal está construida con coordenadas reales del Protein Data Bank (5VF3, 3JA7, 3J2M, 5W5F, 1K28, 2XGF, 1OCY, 2OMF, 4YG2, 4YBB).'
  },
  'real-phage-capsid': {
    name: 'Cápside y genoma del fago (realista)',
    scale: '~115 nm × 85 nm',
    desc: 'La cabeza icosaédrica prolata abierta en corte a escala real. Su pared es una red de 155 hexámeros de gp23* (930 copias), reforzada por fuera con 810 proteínas abrazadera Soc que unen los hexámeros vecinos frente a choques osmóticos y de pH, y 155 espigas Hoc que sobresalen del centro de cada hexámero. Once vértices están cerrados por pentámeros de gp24*, mientras que el duodécimo vértice basal aloja el portal dodecamérico gp20. En su interior se enrollan 57.4 µm de ADN-B con hidroximetilcitosina glucosilada en capas coaxiales separadas 2.5 nm alrededor de un núcleo proteico interno (gp22 y proteínas antirestricción IPI*).'
  },
  'real-phage-tail': {
    name: 'Cola contráctil y cuello (realista)',
    scale: '~92.5 nm × 24 nm',
    desc: 'Una jeringa molecular cargada por resorte. Bajo el portal gp20, los anillos del cuello (gp13, gp14 y gp15) sostienen el collar y seis bigotes de fibritina (gpWac) que pliegan las fibras caudales largas contra el cuerpo cuando las condiciones son adversas. Alrededor del tubo interno de 92.5 nm (24 anillos hexaméricos de gp19) se sitúa la vaina contráctil: 24 anillos de seis subunidades gp18 (144 en total), girados 17.2° por anillo. Al dispararse la placa basal, las subunidades gp18 se deslizan y rotan sin gastar un solo ATP, acortando la vaina a 42 nm, ensanchándola de 24 a 33 nm e impulsando el tubo rígido gp19 a través de la envoltura bacteriana.'
  },
  'real-phage-baseplate': {
    name: 'Placa basal y punción del huésped (realista)',
    scale: '~52 nm de ancho × 60 nm de fondo',
    desc: 'Donde el reconocimiento se transforma en punción mecánica. Seis fibras caudales largas caminan sobre la bacteria hasta que sus puntas gp37 se unen a las porinas OmpC/OmpF y al LPS. Su tracción transforma la placa basal hexagonal (~150 subunidades de 15 proteínas) de una cúpula de alta energía a una estrella plana de seis puntas, desplegando seis fibras cortas gp12 que se anclan irreversiblemente al LPS y liberando la vaina gp18. La aguja central gp27–gp5 (PDB 1K28) perfora la membrana externa; sus tres dominios de lisozima T4 digieren el peptidoglicano, el tubo caudal alcanza la membrana interna y la presión de la cápside inyecta los 169,000 pares de bases en el citoplasma, secuestrando de inmediato la ARN polimerasa (4YG2) y los ribosomas 70S (4YBB) del huésped.'
  },
  bacteriophage: {
    name: 'Bacteriófago T4 (esquemático)',
    scale: '~200 nm de alto',
    desc: 'Un modelo aislado del virión T4 construido a partir de sus cuatro subensamblajes: la cápside icosaédrica prolata que alberga el genoma de ADN enrollado, la cola contráctil con los bigotes del cuello, la placa basal hexagonal con su aguja perforadora y fibras cortas, y las seis fibras caudales largas articuladas.'
  },
  'phage-capsid': {
    name: 'Cápside y portal del fago',
    scale: '~115 × 85 nm',
    desc: 'La cabeza icosaédrica alargada del fago T4 abierta en corte. Construida por 155 hexámeros de gp23* reforzados por abrazaderas Soc y decorados con espigas Hoc, con pentámeros gp24* en 11 vértices y el portal dodecamérico gp20 en la base. Dentro se enrollan coaxialmente 169 kpb de ADNbc alrededor del núcleo proteico interno.'
  },
  'phage-tail': {
    name: 'Cola contráctil y fibras del cuello',
    scale: '~92.5 nm de largo',
    desc: 'La cola contráctil abierta en corte: 24 anillos hexaméricos apilados de la vaina externa gp18 rodean 24 anillos del tubo interno gp19, coronados por el cuello gp13/gp14/gp15 y seis bigotes de fibritina gpWac. Durante la infección la vaina externa se contrae a menos de la mitad de su longitud, clavando el tubo interno a través de la envoltura bacteriana.'
  },
  'phage-baseplate': {
    name: 'Placa basal y aguja perforadora',
    scale: '~52 nm de diámetro',
    desc: 'El centro nervioso del fago: seis cuñas externas alrededor de un buje central gp27–gp5 y una aguja en triple hélice β armada con tres dominios de lisozima T4, además de seis fibras caudales cortas gp12 que se despliegan para anclar el fago a la superficie bacteriana.'
  },
  'phage-fiber': {
    name: 'Fibra caudal larga (gp34–gp37)',
    scale: '~145 nm de largo',
    desc: 'Una de las seis patas sensoras del fago T4. Un bastón proximal (trímero gp34) se une en una articulación de rodilla (gp35) a un bastón distal (gp36 y trímero gp37) cuya punta de aguja reforzada con iones de hierro reconoce las porinas OmpC/OmpF y el LPS de E. coli y transmite la señal de disparo a la placa basal.'
  },
  'gp23-real': {
    name: 'Hexámero mayor de la cápside (gp23* + Soc + Hoc, estructura real)',
    scale: '~14 nm de diámetro',
    desc: 'Un capsómero hexamérico de la estructura crio-EM de la cabeza del fago T4 (PDB 5VF3), con una esfera por aminoácido. Seis subunidades gp23* adoptan el plegamiento clásico HK97 de cápsides virales; trímeros Soc sujetan el borde para enlazar los hexámeros vecinos en una red casi indestructible, y una espiga Hoc se alza en el centro.'
  },
  'gp24-real': {
    name: 'Pentámero del vértice de la cápside (gp24*, estructura real)',
    scale: '~12.5 nm de diámetro',
    desc: 'Un vértice de simetría pentamérica de la cápside de T4 (PDB 5VF3): cinco subunidades gp24* cierran las esquinas de la cubierta icosaédrica, proporcionando la curvatura necesaria para cerrar la cabeza.'
  },
  'gp20-real': {
    name: 'Dodecámero portal (gp20, estructura real)',
    scale: '~17 nm de ancho, 14 nm de alto',
    desc: 'El complejo portal de 12 subunidades gp20 situado en el vértice basal de la cápside (estructura crio-EM PDB 3JA7). Durante el ensamblaje, el motor de empaquetamiento gp17 se acopla aquí y gasta ATP para bombear 169 kpb de ADN dentro de la cabeza; una vez llena, el cuello y la cola sellan el canal de 3.5 nm hasta el momento de la infección.'
  },
  'gp18-real': {
    name: 'Vaina contráctil y anillo del cuello (gp18 + gp15, estructura real)',
    scale: '~24 nm de diámetro',
    desc: 'El anillo superior de la vaina caudal contráctil gp18 junto con el conector hexamérico del cuello gp15 (estructura crio-EM PDB 3J2M). Veinticuatro anillos de gp18 se apilan formando un cilindro cargado por resorte que se contrae de forma irreversible durante la infección.'
  },
  'gp19-real': {
    name: 'Tubo caudal interno (gp19, estructura real)',
    scale: '~9 nm de ancho',
    desc: 'Tres anillos hexaméricos apilados del tubo caudal interno gp19 (estructura crio-EM PDB 5W5F). Su interior forma un conducto liso en barril β de 4 nm por el cual el genoma viral es disparado hacia la bacteria huésped.'
  },
  'gp5-real': {
    name: 'Núcleo de placa basal y aguja perforadora (gp27–gp5, estructura real)',
    scale: '~19 nm de alto',
    desc: 'La estructura cristalográfica del dispositivo perforador celular de T4 (PDB 1K28): un trímero en forma de copa de gp27 sobre un trímero de gp5. Los dominios C-terminales de gp5 se enrollan en una rígida aguja de triple hélice β de 11 nm capaz de perforar la membrana externa, mientras sus tres dominios de lisozima digieren la pared de peptidoglicano.'
  },
  'gp37-real': {
    name: 'Punta de fibra caudal larga (gp37, estructura real)',
    scale: '~20 nm de largo',
    desc: 'La punta de unión al receptor de la fibra caudal larga (estructura cristalográfica PDB 2XGF): tres cadenas polipeptídicas gp37 entrelazadas en una esbelta aguja arriostrada a lo largo de su eje por siete iones de hierro, rematada por el dominio que reconoce las porinas y el LPS de E. coli.'
  },
  'gp12-real': {
    name: 'Punta de fibra caudal corta (gp12, estructura real)',
    scale: '~13 nm de largo',
    desc: 'El fragmento C-terminal del homotrímero de la fibra caudal corta gp12 (estructura cristalográfica PDB 1OCY): un eje en triple espiral β y un cabezal con zinc que se ancla de manera irreversible al núcleo interno del lipopolisacárido de E. coli.'
  },
  viruses: {
    name: 'Principales tipos de virus (comparativa)',
    scale: '18 nm – 200 nm',
    desc: 'Las cinco grandes clases morfológicas y genómicas de virus lado a lado: (1) Miovirus complejo cabeza-cola de ADNbc (Bacteriófago T4), (2) Betacoronavirus envuelto coronado de ARNmc(+) (SARS-CoV-2), (3) Retrovirus envuelto de cápside cónica diploide de ARNmc(+) (VIH-1), (4) Virus icosaédrico desnudo pseudo-T=25 de ADNbc (Adenovirus humano) y (5) Tobamovirus vegetal en bastón helicoidal de ARNmc(+) (Virus del mosaico del tabaco). Haz clic en cualquier virus para explorar su escena molecular realista o su modelo esquemático 3D.'
  },
  'real-coronavirus': {
    name: 'Coronavirus SARS-CoV-2 (realista)',
    scale: '~120 nm de diámetro (con espigas)',
    desc: 'Un virión realista de SARS-CoV-2 acoplándose a una célula epitelial respiratoria humana, abierto en corte a escala molecular verdadera (1 unidad = 10 nm). Cuarenta y ocho homotrímeros de Espiga (S) en forma de maza (PDB 6VXX) coronan una bicapa lipídica de 92 nm tapizada con dímeros de glicoproteína de Membrana (M) y 14 canales iónicos pentaméricos de viroporina de Envoltura (E, PDB 5X29). En el interior, el genoma de ARNmc(+) de 29,903 nucleótidos —el mayor entre los virus de ARN— se enrolla a través de 40 oligómeros helicoidales de Nucleocápside (N, PDB 6VYO). Abajo, los dominios RBD de la Espiga sujetan receptores humanos ACE2 (PDB 1R42), entregando el ARN viral al citoplasma donde la ARN polimerasa dependiente de ARN nsp12–nsp7–nsp8 (PDB 6M71) transcribe los ARNm subgenómicos.'
  },
  'real-cov-spike': {
    name: 'Acoplamiento Espiga–receptor ACE2 (realista)',
    scale: '~25 nm de alto',
    desc: 'Primer plano del reconocimiento del receptor en la superficie de la célula huésped. Un dominio de unión al receptor (RBD) del cabezal trimérico S1 de la Espiga se levanta en su conformación «up» para sujetar la hélice α1 N-terminal de la enzima humana ACE2 (PDB 1R42). El corte proteolítico por TMPRSS2 en el sitio S2′ libera luego el péptido de fusión S2 para arponear la membrana huésped y fusionar ambas bicapas.'
  },
  'real-cov-rnp': {
    name: 'Núcleo de ribonucleoproteína (vRNP, realista)',
    scale: 'lumen de ~65 nm',
    desc: 'A diferencia de los virus icosaédricos, los coronavirus empaquetan su gigantesco genoma de ARNmc(+) de 29.9 kb en un complejo helicoidal flexible de ribonucleoproteína (vRNP). Cuarenta oligómeros de Nucleocápside (N, PDB 6VYO) alojan el esqueleto del ARN en surcos de horquilla β con carga positiva como cuentas de un collar, mientras las colas C-terminales de los dímeros de Membrana (M) anclan la vRNP a la hoja interna de la envoltura lipídica.'
  },
  'real-cov-replication': {
    name: 'Complejo replicasa RdRp (realista)',
    scale: 'complejo de ~16 nm',
    desc: 'Una vez que el ARNmc(+) viral entra en el citoplasma huésped, los ribosomas traducen ORF1ab en proteínas no estructurales que ensamblan el complejo de replicación y transcripción (PDB 6M71): la subunidad catalítica nsp12 reforzada por el cofactor nsp7 y dos largos bastones deslizantes α-helicoidales nsp8 que copian de forma procesiva el ARN de 30 kb y sintetizan ARNm subgenómicos anidados.'
  },
  'real-hiv': {
    name: 'Retrovirus VIH-1 (realista)',
    scale: 'virión esférico de ~120 nm',
    desc: 'Un virión realista de VIH-1 fusionándose con un linfocito T CD4+ humano, abierto en corte a escala molecular verdadera (1 unidad = 10 nm). A diferencia de los coronavirus, el VIH-1 porta una cubierta dispersa de ~16 espigas triméricas Env gp120/gp41 (PDB 4TVP) en una bicapa lipídica derivada del huésped y revestida por dentro con trímeros miristoilados de Matriz p17 (MA, PDB 1HIW). En su centro se aloja la icónica cápside en cono de fullereno: ~216 hexámeros (PDB 3H4E) y exactamente 12 pentámeros (PDB 3P05; 5 en la punta estrecha y 7 en la cúpula ancha) de proteína p24 CA que encierran dos copias del genoma de ARNmc(+) de 9.7 kb, la Transcriptasa Inversa (PDB 1RTD) y la Integrasa (PDB 1EX4).'
  },
  'real-hiv-cone': {
    name: 'Cápside cónica de fullereno (realista)',
    scale: '~60 nm de alto × 32 nm de ancho',
    desc: 'Por el teorema de Euler, cualquier cubierta hexagonal cerrada de fullereno requiere exactamente 12 pentágonos. El VIH-1 sitúa 5 pentámeros de p24 CA (PDB 3P05) en su punta inferior estrecha y 7 en su cúpula superior ancha, curvando ~216 hexámeros de p24 CA (PDB 3H4E) en un cono de 60 nm. Poros electropositivos de horquilla β en el centro de cada hexámero importan dNTPs del citosol mientras ocultan el genoma viral frente a los sensores inmunes.'
  },
  'real-hiv-rt': {
    name: 'Transcripción inversa e integración (realista)',
    scale: 'núcleo de ~25 nm',
    desc: 'Dentro del cono intacto de la cápside, la Transcriptasa Inversa (PDB 1RTD) copia el ARN viral monocatenario en ADN bicatenario mientras su dominio RNasa H degrada el molde original de ARN. El salto entre las dos hebras de ARN empaquetadas genera una alta variabilidad genética. Después, la Integrasa (PDB 1EX4) procesa los extremos 3′ del nuevo ADNbc viral y lo empalma de forma permanente en un cromosoma del huésped como provirus.'
  },
  'real-hiv-entry': {
    name: 'Fusión Env–CD4/CCR5 y provirus (realista)',
    scale: 'zona de contacto de ~40 nm',
    desc: 'Acoplamiento a un linfocito T CD4+. La unión de gp120 (PDB 4TVP) al receptor CD4 induce un cambio conformacional que expone el bucle V3 para unirse al correceptor de quimiocinas CCR5 o CXCR4. Eso dispara el plegamiento de gp41 en un haz de seis hélices que aproxima y fusiona las membranas viral y celular mientras la Transcriptasa Inversa (PDB 1RTD) y la Integrasa (PDB 1EX4) convierten el ARN viral en ADN proviral.'
  },
  'real-adenovirus': {
    name: 'Adenovirus humano (realista)',
    scale: 'icosaedro de ~90 nm + fibras de 30 nm',
    desc: 'Un virión realista de Adenovirus humano (Ad5) abierto en corte a escala molecular verdadera (1 unidad = 10 nm). El adenovirus es el arquetipo de los virus de ADNbc icosaédricos sin envoltura: una cápside facetada pseudo-T=25 de 90 nm tapizada por 240 homotrímeros de Hexón II (PDB 1P30, 720 subunidades), engrapada por proteínas cemento menores (IIIa, VI, VIII, IX) y coronada en sus 12 vértices pentaméricos por bases de Pentón (PDB 1X9T) y fibras triméricas proyectadas de 30 nm (PDB 1QIU). En su interior, 36,000 pares de bases de ADNbc lineal se condensan en ~200 «adenosomas» mediante la proteína central VII rica en arginina.'
  },
  'real-adv-vertex': {
    name: 'Vértice de pentón y antena de fibra (realista)',
    scale: 'ensamblaje de vértice de ~35 nm',
    desc: 'Un vértice de simetría cinco del icosaedro del adenovirus. Cinco subunidades de base de Pentón (PDB 1X9T) forman un anillo compacto rodeado por cinco trímeros de Hexón peripentonales (PDB 1P30). Proyectándose desde el poro central de la base de pentón emerge la Fibra trimérica (PDB 1QIU), un eje rígido en triple espiral β rematado por un botón globular que busca receptores CAR en las células epiteliales.'
  },
  'real-adv-core': {
    name: 'Núcleo de ADNbc del adenosoma (realista)',
    scale: 'cavidad interna de ~62 nm',
    desc: 'Dentro de la cubierta proteica cristalina, 36,000 pares de bases de ADN bicatenario lineal se enrollan alrededor de ~800 copias de la proteína viral VII formando cuentas tipo cromatina llamadas «adenosomas», conectadas a la pared de la cápside por la proteína V y protegidas covalentemente en ambos extremos 5′ por la Proteína Terminal (TP).'
  },
  'real-adv-entry': {
    name: 'Entrada por receptores CAR e integrina (realista)',
    scale: 'zona de anclaje de ~45 nm',
    desc: 'Entrada celular en dos pasos. Primero, el botón distal de la Fibra (PDB 1QIU) se une con alta afinidad al receptor CAR de la célula huésped. La flexión del eje de la fibra acerca luego la base de Pentón (PDB 1X9T) para acoplarse a las integrinas αvβ3/αvβ5 mediante sus cinco bucles RGD, disparando la endocitosis mediada por clatrina y el desprendimiento del vértice para liberar la proteína lítica de membrana VI.'
  },
  'real-tmv': {
    name: 'Virus del mosaico del tabaco (realista)',
    scale: 'bastón helicoidal de 18 nm × 300 nm',
    desc: 'Un bastón helicoidal realista del Virus del Mosaico del Tabaco (VMT / TMV) abierto en corte a escala molecular verdadera (1 unidad = 10 nm). El VMT es el virus fundacional de la biología estructural: un cilindro hueco rígido de 18 nm de ancho formado por 2,130 subunidades idénticas de Proteína de Cubierta de 17.5 kDa dispuestas en una hélice dextrógira de 16⅓ subunidades por vuelta (paso de 2.3 nm, estructura de difracción de fibras PDB 2TMV). Alojado a 4 nm de radio entre vueltas sucesivas se enrolla el genoma de ARNmc(+) de 6,395 nucleótidos, con 3 nucleótidos sujetos por cada subunidad alrededor de un canal central hueco de 4 nm.'
  },
  'real-tmv-helix': {
    name: 'Cubierta helicoidal y surco de ARN (realista)',
    scale: '18 nm de diámetro × 2.3 nm de paso',
    desc: 'Primer plano de la hélice viral dextrógira (PDB 2TMV). Cada monómero de Proteína de Cubierta se pliega en un haz radial de cuatro hélices α (hélices LS, RS, LR y RR). Tres nucleótidos del ARN viral monocatenario se asientan en un surco básico de cada subunidad a 4.0 nm de radio, completamente protegidos de las ribonucleasas por los 5.0 nm de pared proteica exterior.'
  },
  'real-tmv-channel': {
    name: 'Canal central de 4 nm e interruptor de Ca²⁺ (realista)',
    scale: '4.0 nm de diámetro interno',
    desc: 'El canal central hueco de 4.0 nm está tapizado por grupos carboxilato con carga negativa («carboxilatos de Caspar»: Glu95, Glu97, Glu106, Asp109). Fuera de la célula, iones Ca²⁺ y H⁺ unidos neutralizan su repulsión haciendo al bastón casi indestructible; dentro del citosol vegetal (bajo en Ca²⁺ y pH 7.5), el Ca²⁺ se disocia y la repulsión electrostática afloja la hélice para que los ribosomas del huésped desnuden el ARN.'
  },
  'real-tmv-assembly': {
    name: 'Disco 20S y autoensamblaje de ARN OAS (realista)',
    scale: 'disco en arandela de ~18 nm',
    desc: 'Cómo demostraron Fraenkel-Conrat y Butler que un virus se autoensambla a partir de ARN y proteína purificados: discos bicapa 20S de 34 subunidades de Proteína de Cubierta reconocen la horquilla de Origen de Ensamblaje (OAS) en el ARN viral, se deslizan adoptando forma de arandela helicoidal y tiran de la cola 5′ del ARN hacia arriba por el canal central de 4 nm a medida que se apilan nuevos discos.'
  },
  coronavirus: {
    name: 'Coronavirus SARS-CoV-2 (esquemático)',
    scale: '~120 nm de diámetro',
    desc: 'Un modelo aislado en corte del betacoronavirus SARS-CoV-2: una bicapa lipídica esférica derivada del huésped tachonada con homotrímeros de Espiga (S) en forma de maza, dímeros de Membrana (M) y viroporinas pentaméricas de Envoltura (E), encerrando el genoma de ARNmc(+) de 29.9 kb enrollado en oligómeros de Nucleocápside (N).'
  },
  hiv: {
    name: 'Retrovirus VIH-1 (esquemático)',
    scale: '~120 nm de diámetro',
    desc: 'Un modelo aislado en corte del retrovirus VIH-1 maduro: una bicapa lipídica con espigas dispersas Env gp120/gp41 y una cubierta interna de Matriz p17 (MA), rodeando la cápside en cono de fullereno (hexámeros de p24 CA + 12 pentámeros) que alberga dos copias de ARNmc(+), la Transcriptasa Inversa y la Integrasa.'
  },
  adenovirus: {
    name: 'Adenovirus humano (esquemático)',
    scale: 'icosaedro de ~90 nm',
    desc: 'Un modelo aislado en corte del Adenovirus humano: una cápside icosaédrica pseudo-T=25 sin envoltura tapizada por 240 trímeros de Hexón y proteínas cemento menores, con pentámeros de base de Pentón y largas fibras de unión a CAR en los 12 vértices, encerrando el núcleo de ADNbc lineal de 36 kpb y proteína VII.'
  },
  tmv: {
    name: 'Virus del mosaico del tabaco (esquemático)',
    scale: 'bastón de 18 × 300 nm',
    desc: 'Un modelo aislado en corte del bastón helicoidal del Virus del Mosaico del Tabaco (VMT): 16⅓ subunidades de Proteína de Cubierta por vuelta enrolladas alrededor de un canal central hueco de 4 nm, con el genoma de ARN(+) monocatenario alojado en el surco entre vueltas a 4 nm de radio.'
  },
  'cov-spike-real': {
    name: 'Trímero de glicoproteína Espiga de SARS-CoV-2 (estructura real)',
    scale: '~16 nm de alto × 13 nm de ancho',
    desc: 'La estructura crio-EM del homotrímero de la Espiga (S) de SARS-CoV-2 en estado de prefusión (PDB 6VXX), con una esfera por aminoácido (2,916 residuos). Cada protómero consta de una subunidad S1 de unión al receptor (con dominios NTD y RBD, que se levanta para unirse a ACE2) y un tallo S2 de fusión de membranas.'
  },
  'cov-e-real': {
    name: 'Pentámero de viroporina de Envoltura (E) de SARS-CoV-2 (estructura real)',
    scale: '~5.5 nm de diámetro',
    desc: 'La estructura por RMN en estado sólido del canal iónico transmembrana pentamérico de Envoltura (E) de SARS-CoV-2 (PDB 5X29). Cinco hélices α hidrofóbicas se agrupan alrededor de un poro selectivo de cationes que altera el pH del RE/Golgi del huésped e impulsa la gemación viral.'
  },
  'cov-n-real': {
    name: 'Oligómero de Nucleocápside (N) de unión a ARN (estructura real)',
    scale: '~7.5 nm de diámetro',
    desc: 'La estructura cristalográfica del tetrámero del dominio N-terminal de unión a ARN de la Nucleocápside (N) de SARS-CoV-2 (PDB 6VYO). Dedos de horquilla β con carga positiva sujetan el genoma viral de ARNmc(+) y lo enrollan en cuentas protectoras de ribonucleoproteína (vRNP).'
  },
  'cov-rdrp-real': {
    name: 'Complejo replicasa RdRp de SARS-CoV-2 (estructura real)',
    scale: '~13 nm de alto',
    desc: 'La estructura crio-EM de la holoenzima ARN polimerasa dependiente de ARN de SARS-CoV-2 (nsp12 + nsp7 + 2×nsp8, PDB 6M71). La polimerasa catalítica nsp12 está estabilizada por nsp7 y flanqueada por dos «pértigas deslizantes» nsp8 que guían el largo molde de ARN viral de 30 kb.'
  },
  'ace2-real': {
    name: 'Ectodominio del receptor humano ACE2 (estructura real)',
    scale: '~9.5 nm de alto',
    desc: 'La estructura cristalográfica del ectodominio metalopeptidasa de la Enzima Convertidora de Angiotensina 2 humana (ACE2, PDB 1R42). Su hélice α1 N-terminal es exactamente la superficie reconocida y sujeta por el dominio de unión al receptor (RBD) de la Espiga de SARS-CoV-2.'
  },
  'hiv-env-real': {
    name: 'Trímero de espiga Env gp120/gp41 de VIH-1 (estructura real)',
    scale: '~13 nm de alto × 12 nm de ancho',
    desc: 'La estructura cristalográfica del trímero Env de VIH-1 en prefusión (BG505 SOSIP.664, PDB 4TVP): tres subunidades superficiales gp120 (que se unen al CD4 y al correceptor CCR5/CXCR4 del huésped) sostenidas por tres subunidades transmembrana de fusión gp41.'
  },
  'hiv-ma-real': {
    name: 'Trímero de Matriz (p17 MA) de VIH-1 (estructura real)',
    scale: '~6.5 nm de diámetro',
    desc: 'La estructura cristalográfica de la proteína trimérica de Matriz p17 del VIH-1 (PDB 1HIW). Anclas de miristoílo y un parche superficial básico se unen a PI(4,5)P₂ en la hoja interna de la envoltura lipídica viral y reclutan las colas de Env gp41 hacia los viriones en gemación.'
  },
  'hiv-ca-hex-real': {
    name: 'Hexámero de Cápside (p24 CA) de VIH-1 (estructura real)',
    scale: '~9.5 nm de diámetro',
    desc: 'La estructura cristalográfica del hexámero plano de la Cápside p24 del VIH-1 (PDB 3H4E): seis dominios N-terminales forman el anillo interno hexamérico con un poro electropositivo importador de dNTPs, mientras los dominios C-terminales enlazan los hexámeros vecinos en el cono de fullereno.'
  },
  'hiv-ca-pent-real': {
    name: 'Pentámero de vértice de Cápside (p24 CA) de VIH-1 (estructura real)',
    scale: '~8.5 nm de diámetro',
    desc: 'La estructura cristalográfica del pentámero de la Cápside p24 del VIH-1 (PDB 3P05). Exactamente 12 pentámeros (5 en la punta estrecha y 7 en la cúpula ancha) introducen las declinaciones pentagonales necesarias para cerrar el cono hexagonal de fullereno.'
  },
  'hiv-rt-real': {
    name: 'Transcriptasa Inversa + dúplex de ADN de VIH-1 (estructura real)',
    scale: '~11 nm de diámetro',
    desc: 'El complejo ternario catalítico de la Transcriptasa Inversa del VIH-1 (PDB 1RTD): la subunidad p66 (dominios dedos, palma y pulgar de polimerasa más RNasa H) y la subunidad estructural p51 abrazando un dúplex de ácido nucleico molde–cebador.'
  },
  'hiv-in-real': {
    name: 'Dímero de Integrasa y unión a ADN de VIH-1 (estructura real)',
    scale: '~8.5 nm de largo',
    desc: 'La estructura cristalográfica del núcleo catalítico y los dominios C-terminales tipo SH3 de unión a ADN de la Integrasa del VIH-1 (PDB 1EX4). Su sitio activo DDE escinde los extremos 3′ del ADN viral retrotranscrito y los empalma en un cromosoma del huésped.'
  },
  'adv-hexon-real': {
    name: 'Trímero mayor de cubierta Hexón de Adenovirus (estructura real)',
    scale: '~9.5 nm de ancho × 11 nm de alto',
    desc: 'La estructura cristalográfica del homotrímero de Hexón del Adenovirus humano tipo 5 (polipéptido II, PDB 1P30, 2,673 residuos). Cada monómero posee una base de doble rollo de gelatina que confiere al trímero una huella pseudohexagonal para pavimentar las 20 facetas, coronada por tres torres entrelazadas.'
  },
  'adv-penton-real': {
    name: 'Pentámero base de Pentón de Adenovirus (estructura real)',
    scale: '~11.5 nm de diámetro',
    desc: 'La estructura cristalográfica del homopentámero de la base de Pentón de Adenovirus unido al péptido N-terminal de la Fibra (polipéptido III, PDB 1X9T). Cinco subunidades sellan cada vértice icosaédrico y exponen bucles RGD flexibles que se unen a las integrinas αv del huésped.'
  },
  'adv-fiber-real': {
    name: 'Eje de fibra y botón de unión a CAR de Adenovirus (estructura real)',
    scale: 'fragmento distal de ~10 nm',
    desc: 'La estructura cristalográfica del eje distal en triple espiral β y del homotrímero C-terminal del botón receptor de la Fibra de Adenovirus (polipéptido IV, PDB 1QIU), que se acopla a los receptores CAR del huésped para iniciar la infección.'
  },
  'tmv-turn-real': {
    name: 'Giro helicoidal de 16⅓ subunidades de cubierta + ARN de VMT (estructura real)',
    scale: '18 nm de diámetro',
    desc: 'Una vuelta completa de la hélice del Virus del Mosaico del Tabaco reconstruida a partir de la estructura de difracción de fibras por rayos X a 2.9 Å (PDB 2TMV): 17 subunidades de Proteína de Cubierta en haz de cuatro hélices (2,618 aminoácidos) y 51 nucleótidos de ARN viral monocatenario enrollados a 4.0 nm de radio alrededor del canal central de 4.0 nm.'
  },
  'tmv-sub-real': {
    name: 'Monómero de proteína de cubierta + 3 nucleótidos de ARN de VMT (estructura real)',
    scale: '~7 nm de longitud radial',
    desc: 'Una unidad asimétrica individual del Virus del Mosaico del Tabaco (PDB 2TMV): una Proteína de Cubierta de 158 aminoácidos plegada en un haz antiparalelo de cuatro hélices α (LS, RS, LR, RR) que sujeta tres nucleótidos (G–A–A) del genoma viral de ARNmc(+).'
  },
  'atom-mg': {
    name: 'Átomo de magnesio',
    scale: '~0.3 nm',
    desc: '12 protones, 12 neutrones, 12 electrones (2 + 8 + 2). Se sitúa en el centro de cada molécula de clorofila y ayuda a las enzimas a manejar el ATP.'
  },
  'atom-h': {
    name: 'Átomo de hidrógeno',
    scale: '~0.1 nm',
    desc: 'El átomo más sencillo: 1 protón y 1 electrón (sin neutrón en su isótopo más común). Está presente en casi todas las moléculas biológicas.'
  },
  'atom-c': {
    name: 'Átomo de carbono',
    scale: '~0.15 nm',
    desc: '6 protones, 6 neutrones, 6 electrones (2 + 4). Con cuatro enlaces covalentes para compartir, el carbono forma el esqueleto de todas las moléculas orgánicas.'
  },
  'atom-n': {
    name: 'Átomo de nitrógeno',
    scale: '~0.15 nm',
    desc: '7 protones, 7 neutrones, 7 electrones (2 + 5). Está presente en cada aminoácido y en todas las bases nitrogenadas del ADN y del ARN.'
  },
  'atom-o': {
    name: 'Átomo de oxígeno',
    scale: '~0.15 nm',
    desc: '8 protones, 8 neutrones, 8 electrones (2 + 6). Atrae con fuerza los electrones compartidos, haciendo que el agua y muchas biomoléculas sean polares.'
  },
  'atom-p': {
    name: 'Átomo de fósforo',
    scale: '~0.2 nm',
    desc: '15 protones, 16 neutrones, 15 electrones (2 + 8 + 5). Es el átomo central de los grupos fosfato en el ADN, el ARN, el ATP y los fosfolípidos de membrana.'
  },
  'life-overview': {
    name: 'Introducción a la biología: células, células parásitas y virus',
    scale: '~20 nm – 100 µm (4 niveles biológicos)',
    desc: 'Escenario comparativo en 3D de los cuatro niveles de organización biológica evaluados según los cuatro pilares de la vida (membrana lipídica, genoma de ADN bicatenario, ribosomas y producción propia de ATP): procariotas autónomos (E. coli), eucariotas compartimentados (levadura, célula animal y vegetal), bacterias mínimas e intracelulares que importan ATP del huésped (Mycoplasma, Chlamydia y Rickettsia) y virus acelulares sin ribosomas ni metabolismo.'
  },
  'parasitic-cells-overview': {
    name: 'Células parásitas y mínimas (Mycoplasma, Chlamydia y Rickettsia)',
    scale: '~0.3 – 1.2 µm (genomas de 0.58 – 1.11 Mpb)',
    desc: 'Comparativa de bacterias con evolución genómica reductiva extrema: Mycoplasma genitalium (célula mínima sin pared celular, 580 kpb), Chlamydia trachomatis (ciclo bifásico dentro de una inclusión vacuolar) y Rickettsia prowazekii (bacteria intracelular citosólica emparentada con el ancestro mitocondrial). A diferencia de los virus, conservan membrana plasmática, ADN bicatenario circular, ribosomas 70S propios y fisión binaria, pero emplean translocasas Npt1/Tlc1 para importar ATP de la célula huésped.'
  }
};
