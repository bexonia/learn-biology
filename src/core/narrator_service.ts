import {
  PRESET_SPANISH_VOICE_BY_MODE,
  PRESET_VOICE_BY_MODE,
  isValidEnglishVoiceId,
  isValidSpanishVoiceId,
  resolveEnglishVoice,
  resolveSpanishVoice,
  type EnglishVoiceId,
  type ExplanationMode,
  type SpanishVoiceId,
  type SpanishVoicePreference,
  type VoicePreference
} from '../content/types.js';

export {
  PRESET_SPANISH_VOICE_BY_MODE,
  PRESET_VOICE_BY_MODE,
  isValidEnglishVoiceId,
  isValidSpanishVoiceId,
  resolveEnglishVoice,
  resolveSpanishVoice,
  type EnglishVoiceId,
  type SpanishVoiceId,
  type SpanishVoicePreference,
  type VoicePreference
};

export interface AudioElementLike {
  src: string;
  volume: number;
  playbackRate: number;
  preload: string;
  currentTime?: number;
  onended: (() => void) | null;
  onerror: ((ev?: unknown) => void) | null;
  play(): Promise<void>;
  pause(): void;
  load?(): void;
}

export interface NarratorCueRef {
  readonly id: string;
  readonly lang?: string;
  readonly root?: string | null;
  readonly voice?: EnglishVoiceId;
  readonly esVoice?: SpanishVoiceId;
}

export interface NarratorCueInput extends NarratorCueRef {
  readonly text?: string;
  readonly plain?: string;
  readonly say?: string;
  readonly chapter?: string | null;
  readonly step?: string | null;
  readonly nextCue?: NarratorCueRef | null;
}

export interface LensAudioRef {
  readonly nodeId: string;
  readonly mode: ExplanationMode;
  readonly lang?: string;
  readonly voice?: EnglishVoiceId;
  readonly esVoice?: SpanishVoiceId;
}

export interface SpeakLensInput extends LensAudioRef {
  readonly onStateChange?: (playing: boolean) => void;
}

export interface TourRuntimeStateLike {
  readonly state?: {
    readonly root?: string | null;
  };
  readonly T?: {
    readonly pace?: number;
    readonly cue?: number;
    readonly list?: ReadonlyArray<{ readonly id: string }>;
  };
}

export interface StaticNarratorOptions {
  readonly audioBaseUrl?: string;
  readonly createAudio?: (src: string) => AudioElementLike;
  readonly storage?: Pick<Storage, 'getItem' | 'setItem'> | null;
  readonly getTourRuntime?: () => TourRuntimeStateLike | null | undefined;
  readonly getVoice?: () => EnglishVoiceId;
  readonly getSpanishVoice?: () => SpanishVoiceId;
  readonly initialVolume?: number;
  readonly initialRate?: number;
  readonly maxCueDurationMs?: number;
  readonly maxLensDurationMs?: number;
}

export interface StaticTourNarrator {
  readonly audioBaseUrl: string;
  speak(cue: NarratorCueInput): Promise<void>;
  speakLens(input: SpeakLensInput): Promise<void>;
  isSpeakingLens(): boolean;
  getActiveLens(): LensAudioRef | null;
  stop(): void;
  setVolume(volume: number): void;
  getVolume(): number;
  setRate(rate: number): void;
  getRate(): number;
  resolveAudioUrl(cue: NarratorCueRef): string | null;
  resolveLensAudioUrl(ref: LensAudioRef): string | null;
  prefetch(cue: NarratorCueRef | null | undefined): void;
}

const VOL_STORAGE_KEY = 'tourVol';

function clamp(v: number, min: number, max: number): number {
  if (!Number.isFinite(v)) return max;
  return Math.max(min, Math.min(max, v));
}

export function primaryNarrationLang(lang?: string): 'en' | 'es' {
  if (!lang) return 'en';
  return lang.trim().toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function stripTourMarkup(text: string): string {
  return text.replace(/\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, '$1');
}

const SUPERSCRIPT_DIGIT_MAP: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9'
};

const SUBSCRIPT_DIGIT_MAP: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9'
};

function decodeSuperscriptDigits(s: string): string {
  return s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, ch => SUPERSCRIPT_DIGIT_MAP[ch] ?? ch);
}

const ES_FEMININE_ORDINALS: Record<string, string> = {
  '1': 'primera',
  '2': 'segunda',
  '3': 'tercera',
  '4': 'cuarta',
  '5': 'quinta',
  '6': 'sexta',
  '7': 'séptima',
  '8': 'octava',
  '9': 'novena',
  '10': 'décima'
};

/**
 * Normalizes scientific notation, Greek symbols, units, subscripts/superscripts, and viral/molecular
 * abbreviations into clean speakable text for the offline GPT-SoVITS narration synthesis pipeline (EN & ES).
 */
export function normalizeSpeechText(raw: string, lang = 'en-US'): string {
  const isEs = primaryNarrationLang(lang) === 'es';
  let out = stripTourMarkup(raw)
    .replace(/[«»]/g, '"')
    .replace(/’/g, "'")
    .replace(/···/g, ' ');

  if (isEs) {
    out = out
      .replace(/(\d),(\d{3})\b/g, '$1$2')
      .replace(/(\d+)\.?ª/g, (_, d: string) => ES_FEMININE_ORDINALS[d] ?? `${d}ª`)
      .replace(/³Σg⁻/g, 'triplete sigma ge menos')
      .replace(/t₁\/₂/g, 'semivida')
      .replace(/Förster/gi, 'Forster')
      .replace(/ångströms?/gi, 'ángstroms')
      .replace(/\bE\.\s*coli\b/g, 'Escherichia coli')
      .replace(/\bS\.\s*cerevisiae\b/g, 'Saccharomyces cerevisiae')
      .replace(/\bp\.\s*ej\.,?/gi, 'por ejemplo,')
      .replace(/\bvs\./gi, 'frente a')
      .replace(/\(\+\)\s*(?:ssRNA|ARNmc)\b/g, 'ARN monocatenario positivo')
      .replace(/\(-\)\s*(?:ssRNA|ARNmc)\b/g, 'ARN monocatenario negativo')
      .replace(/\b(?:ssRNA|ARNmc)\b/g, 'ARN monocatenario')
      .replace(/\b(?:dsDNA|ADNbc)\b/g, 'ADN bicatenario')
      .replace(/\b(?:dsRNA|ARNbc)\b/g, 'ARN bicatenario')
      .replace(/\bARNm\b/g, 'ARN mensajero')
      .replace(/\bARNr\b/g, 'ARN ribosómico')
      .replace(/\bARNt\b/g, 'ARN de transferencia')
      .replace(/\bADNr\b/g, 'ADN ribosómico')
      .replace(/\bADNc\b/g, 'ADN complementario')
      .replace(/\bPSII\b/g, 'fotosistema 2')
      .replace(/\bPSI\b/g, 'fotosistema 1')
      .replace(/\bLHCII\b/g, 'LHC 2')
      .replace(/\bLHCI\b/g, 'LHC 1')
      .replace(/\bIIIa\b/g, '3 a')
      .replace(/\bXII\b/g, '12')
      .replace(/\bIX\b/g, '9')
      .replace(/\bVIII\b/g, '8')
      .replace(/\bVII\b/g, '7')
      .replace(/\bVI\b/g, '6')
      .replace(/\bIV\b/g, '4')
      .replace(/\bIII\b/g, '3')
      .replace(/\bII\b/g, '2')
      .replace(/\bpolimerasa I\b/gi, 'polimerasa 1')
      .replace(/\bbases\/s\b/g, 'bases por segundo')
      .replace(/(\d)\s*kpb\b/gi, '$1 kilopares de bases')
      .replace(/H₂PO₄⁻/g, 'dihidrogenofosfato')
      .replace(/HPO₄²⁻/g, 'hidrogenofosfato')
      .replace(/H₃O⁺/g, 'hidronio')
      .replace(/\bOH⁻/g, 'hidroxilo')
      .replace(/\bPᵢ/g, 'fosfato inorgánico')
      .replace(/\bCO₂/g, 'dióxido de carbono')
      .replace(/\bO₂/g, 'oxígeno')
      .replace(/\bH₂O/g, 'agua')
      .replace(/\bFADH₂/g, 'FAD H 2')
      .replace(/\bD₂/g, 'D 2')
      .replace(/\bB₁/g, 'B 1')
      .replace(/\bbajo en Ca²⁺/gi, 'bajo en iones de calcio')
      .replace(/Ca²⁺/g, 'iones de calcio')
      .replace(/Mg²⁺/g, 'iones de magnesio')
      .replace(/Zn²⁺/g, 'iones de zinc')
      .replace(/Mn²⁺/g, 'iones de manganeso')
      .replace(/Fe²⁺/g, 'iones de hierro')
      .replace(/Fe³⁺/g, 'iones férricos')
      .replace(/Na⁺\/K⁺/g, 'sodio potasio')
      .replace(/Na⁺/g, 'iones de sodio')
      .replace(/K⁺/g, 'iones de potasio')
      .replace(/Cl⁻/g, 'iones cloruro')
      .replace(/NADP⁺/g, 'NADP positivo')
      .replace(/NAD⁺/g, 'NAD positivo')
      .replace(/F₁F₀/g, 'efe uno efe cero')
      .replace(/F₀F₁/g, 'efe cero efe uno')
      .replace(/\bH[⁺+]/g, 'protones ')
      .replace(/ΔG°′/g, 'delta G estándar prima')
      .replace(/ΔG/g, 'delta G')
      .replace(/E°′/g, 'E estándar prima')
      .replace(/E°/g, 'E estándar')
      .replace(/ΔpH/g, 'delta p H')
      .replace(/Δ[Ψψ]/g, 'delta psi')
      .replace(/Δp\b/g, 'delta p')
      .replace(/Ψ_s\b/g, 'psi ese')
      // Powers of 10 & reciprocal exponents
      .replace(/10⁻([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, d: string) => `10 a la menos ${decodeSuperscriptDigits(d)}`)
      .replace(/10([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, d: string) => `10 a la ${decodeSuperscriptDigits(d)}`)
      .replace(/·?s⁻¹/g, ' por segundo')
      .replace(/·?min⁻¹/g, ' por minuto')
      .replace(/·([A-Za-zÁÉÍÓÚáéíóúñ]+)⁻¹/g, ' por $1')
      .replace(/\b([A-Za-zÁÉÍÓÚáéíóúñ]+)⁻¹/g, 'por $1')
      // Area, volume & biophysical units
      .replace(/[µμ]F\/cm²/g, 'microfaradios por centímetro cuadrado')
      .replace(/[µμ]m²\/s\b/g, 'micrómetros cuadrados por segundo')
      .replace(/\bnm²\b/g, 'nanómetros cuadrados')
      .replace(/[µμ]m²\b/g, 'micrómetros cuadrados')
      .replace(/\bcm²\b/g, 'centímetros cuadrados')
      .replace(/\bnm³\b/g, 'nanómetros cúbicos')
      .replace(/[µμ]m³\b/g, 'micrómetros cúbicos')
      .replace(/\bkJ\/mol\b/g, 'kilojulios por mol')
      .replace(/\bkcal\/mol\b/g, 'kilocalorías por mol')
      .replace(/(\d)\s*MDa\b/g, '$1 megadaltons')
      .replace(/(\d)\s*kDa\b/g, '$1 kilodaltons')
      .replace(/(\d)\s*Da\b/g, '$1 daltons')
      .replace(/(\d)\s*mV\b/g, '$1 milivoltios')
      .replace(/(\d)\s*MPa\b/g, '$1 megapascales')
      .replace(/(\d)\s*kPa\b/g, '$1 kilopascales')
      .replace(/(\d)\s*mM\b/g, '$1 milimolar')
      .replace(/(\d)\s*[µμ]M\b/g, '$1 micromolar')
      .replace(/(\d)\s*nM\b/g, '$1 nanomolar')
      .replace(/(\d)\s*pN\b/g, '$1 piconewtons')
      .replace(/(\d)\s*pL\b/g, '$1 picolitros')
      .replace(/(\d)\s*fL\b/g, '$1 femtolitros')
      .replace(/\bØ\b|Ø/g, 'de diámetro')
      .replace(/S2′/g, 'S 2 prima')
      .replace(/5′/g, '5 prima')
      .replace(/3′/g, '3 prima')
      .replace(/(\d)″/g, '$1 doble prima')
      .replace(/(\d)′/g, '$1 prima')
      .replace(/αvβ5/g, 'alfa uve beta 5')
      .replace(/αv\b/g, 'alfa uve')
      .replace(/σ(\d+)/g, 'sigma $1')
      .replace(/Δ/g, 'delta ')
      .replace(/Σ/g, 'sigma ')
      .replace(/[Ψψ]/g, 'psi ')
      .replace(/α/g, 'alfa ')
      .replace(/β/g, 'beta ')
      .replace(/γ/g, 'gamma ')
      .replace(/δ/g, 'delta ')
      .replace(/ε/g, 'épsilon ')
      .replace(/θ/g, 'theta ')
      .replace(/λ/g, 'lambda ')
      .replace(/π/g, 'pi ')
      .replace(/σ/g, 'sigma ')
      .replace(/τ/g, 'tau ')
      .replace(/φ/g, 'fi ')
      .replace(/χ/g, 'ji ')
      .replace(/ω/g, 'omega ')
      .replace(/\bgp(\d+)\*/g, 'gp $1 estrella')
      .replace(/\bIPI\*/g, 'IPI estrella')
      .replace(/\*/g, '')
      .replace(/16⅓/g, 'dieciséis y un tercio')
      .replace(/⅓/g, ' un tercio ')
      .replace(/½/g, ' un medio ')
      .replace(/(\d+(?:[.,]\d+)?)\s*Å²/g, '$1 ángstroms cuadrados')
      .replace(/Å²/g, 'ángstroms cuadrados')
      .replace(/(\d+(?:[.,]\d+)?)\s*Å/g, '$1 ángstroms')
      .replace(/Å/g, 'ángstroms')
      .replace(/(\d+)\s*°C\b/g, '$1 grados Celsius')
      .replace(/(\d+)\s*°/g, '$1 grados')
      .replace(/°/g, ' grados ')
      .replace(/veces\/s\b/g, 'veces por segundo')
      .replace(/pseudo-T\s*=\s*(\d+)/gi, 'pseudo te igual a $1')
      .replace(/\bT\s*=\s*(\d+)/g, 'te igual a $1')
      .replace(/\br\s*=\s*(\d+)/g, 'radio igual a $1')
      .replace(/([A-Z]\d+)↓([A-Z]\d+)/g, '$1 corte $2')
      .replace(/↓/g, ' disminuye ')
      .replace(/[⇌↔]/g, ' en equilibrio con ')
      .replace(/→/g, ', hacia ')
      .replace(/G≡C/g, 'G triple enlace C')
      .replace(/A=T/g, 'A doble enlace T')
      .replace(/≡/g, ' equivale a ')
      .replace(/≥/g, ' al menos ')
      .replace(/±/g, ' más menos ')
      .replace(/≈/g, ' aproximadamente ')
      .replace(/~\s*(\d+)/g, 'unos $1')
      .replace(/(\d)\s*[–—]\s*(\d)/g, '$1 a $2')
      .replace(/−(\d)/g, 'menos $1')
      .replace(/−/g, '-')
      .replace(/(\d)\s*[µμ]m\b/g, '$1 micrómetros')
      .replace(/\b[µμ]m\b/g, 'micrómetros')
      .replace(/[µμ]/g, 'mu ')
      .replace(/(\d)\s*nm\b/g, '$1 nanómetros')
      .replace(/(\d)\s*kbp\b/gi, '$1 kilopares de bases')
      .replace(/(\d)\s*kb\b/gi, '$1 kilobases')
      .replace(/(\d)\s*Mbp?\b/g, '$1 megabases')
      .replace(/×\s*(\d+)/g, 'por $1')
      .replace(/(\d+)\s*×/g, '$1 veces')
      .replace(/×/g, ' por ')
      .replace(/ₙ/g, ' sub ene')
      .replace(/ᵢ/g, ' i')
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, ch => SUBSCRIPT_DIGIT_MAP[ch] ?? ch)
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, ch => SUPERSCRIPT_DIGIT_MAP[ch] ?? ch)
      .replace(/⁺/g, ' positivo ')
      .replace(/⁻/g, ' negativo ')
      .replace(/[″]/g, ' doble prima ')
      .replace(/[′]/g, ' prima ')
      .replace(/_/g, ' ')
      .replace(/\s*&\s*/g, ' y ')
      .replace(/\s+\+\s+/g, ' más ');
  } else {
    out = out
      .replace(/(\d),(\d{3})\b/g, '$1$2')
      .replace(/³Σg⁻/g, 'triplet sigma g minus')
      .replace(/t₁\/₂/g, 'half-life')
      .replace(/Förster/gi, 'Foerster')
      .replace(/ångströms?/gi, 'angstroms')
      .replace(/\bE\.\s*coli\b/g, 'Escherichia coli')
      .replace(/\bS\.\s*cerevisiae\b/g, 'Saccharomyces cerevisiae')
      .replace(/\be\.g\.,?/gi, 'for example,')
      .replace(/\bi\.e\.,?/gi, 'that is,')
      .replace(/\bvs\.\b|\bvs\./gi, 'versus')
      .replace(/\(\+\)\s*ssRNA\b/g, 'positive-sense single-stranded RNA')
      .replace(/\(-\)\s*ssRNA\b/g, 'negative-sense single-stranded RNA')
      .replace(/\bssRNA\b/g, 'single-stranded RNA')
      .replace(/\bdsDNA\b/g, 'double-stranded DNA')
      .replace(/\bdsRNA\b/g, 'double-stranded RNA')
      .replace(/\bmRNA\b/g, 'messenger RNA')
      .replace(/\brRNA\b/g, 'ribosomal RNA')
      .replace(/\btRNA\b/g, 'transfer RNA')
      .replace(/\brDNA\b/g, 'ribosomal DNA')
      .replace(/\bcDNA\b/g, 'complementary DNA')
      .replace(/\bPSII\b/g, 'photosystem two')
      .replace(/\bPSI\b/g, 'photosystem one')
      .replace(/\bLHCII\b/g, 'L H C two')
      .replace(/\bLHCI\b/g, 'L H C one')
      .replace(/\bIIIa\b/g, 'three A')
      .replace(/\bXII\b/g, 'twelve')
      .replace(/\bIX\b/g, 'nine')
      .replace(/\bVIII\b/g, 'eight')
      .replace(/\bVII\b/g, 'seven')
      .replace(/\bVI\b/g, 'six')
      .replace(/\bIV\b/g, 'four')
      .replace(/\bIII\b/g, 'three')
      .replace(/\bII\b/g, 'two')
      .replace(/\bpolymerase I\b/gi, 'polymerase one')
      .replace(/\bbases\/s\b/g, 'bases per second')
      .replace(/H₂PO₄⁻/g, 'dihydrogen phosphate')
      .replace(/HPO₄²⁻/g, 'hydrogen phosphate')
      .replace(/H₃O⁺/g, 'hydronium')
      .replace(/\bOH⁻/g, 'hydroxide')
      .replace(/\bPᵢ/g, 'inorganic phosphate')
      .replace(/\bCO₂/g, 'carbon dioxide')
      .replace(/\bO₂/g, 'oxygen')
      .replace(/\bH₂O/g, 'water')
      .replace(/\bFADH₂/g, 'F A D H 2')
      .replace(/\bD₂/g, 'D two')
      .replace(/\bB₁/g, 'B one')
      .replace(/low-Ca²⁺/g, 'low calcium ion')
      .replace(/Ca²⁺/g, 'calcium ions')
      .replace(/Mg²⁺/g, 'magnesium ions')
      .replace(/Zn²⁺/g, 'zinc ions')
      .replace(/Mn²⁺/g, 'manganese ions')
      .replace(/Fe²⁺/g, 'ferrous ions')
      .replace(/Fe³⁺/g, 'ferric ions')
      .replace(/Na⁺\/K⁺/g, 'sodium potassium')
      .replace(/Na⁺/g, 'sodium ions')
      .replace(/K⁺/g, 'potassium ions')
      .replace(/Cl⁻/g, 'chloride ions')
      .replace(/NADP⁺/g, 'N A D P plus')
      .replace(/NAD⁺/g, 'N A D plus')
      .replace(/F₁F₀/g, 'F one F zero')
      .replace(/F₀F₁/g, 'F zero F one')
      .replace(/\bH[⁺+]/g, 'protons ')
      .replace(/ΔG°′/g, 'delta G naught prime')
      .replace(/ΔG/g, 'delta G')
      .replace(/E°′/g, 'E naught prime')
      .replace(/E°/g, 'E naught')
      .replace(/ΔpH/g, 'delta p H')
      .replace(/Δ[Ψψ]/g, 'delta psi')
      .replace(/Δp\b/g, 'delta p')
      .replace(/Ψ_s\b/g, 'psi s')
      // Powers of 10 & reciprocal exponents
      .replace(/10⁻([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, d: string) => `10 to the minus ${decodeSuperscriptDigits(d)}`)
      .replace(/10([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, d: string) => `10 to the ${decodeSuperscriptDigits(d)}`)
      .replace(/·?s⁻¹/g, ' per second')
      .replace(/·?min⁻¹/g, ' per minute')
      .replace(/·([A-Za-z]+)⁻¹/g, ' per $1')
      .replace(/\b([A-Za-z]+)⁻¹/g, 'per $1')
      // Area, volume & biophysical units
      .replace(/[µμ]F\/cm²/g, 'microfarads per square centimeter')
      .replace(/[µμ]m²\/s\b/g, 'square micrometers per second')
      .replace(/\bnm²\b/g, 'square nanometers')
      .replace(/[µμ]m²\b/g, 'square micrometers')
      .replace(/\bcm²\b/g, 'square centimeters')
      .replace(/\bnm³\b/g, 'cubic nanometers')
      .replace(/[µμ]m³\b/g, 'cubic micrometers')
      .replace(/\bkJ\/mol\b/g, 'kilojoules per mole')
      .replace(/\bkcal\/mol\b/g, 'kilocalories per mole')
      .replace(/(\d)\s*MDa\b/g, '$1 megadaltons')
      .replace(/(\d)\s*kDa\b/g, '$1 kilodaltons')
      .replace(/(\d)\s*Da\b/g, '$1 daltons')
      .replace(/(\d)\s*mV\b/g, '$1 millivolts')
      .replace(/(\d)\s*MPa\b/g, '$1 megapascals')
      .replace(/(\d)\s*kPa\b/g, '$1 kilopascals')
      .replace(/(\d)\s*mM\b/g, '$1 millimolar')
      .replace(/(\d)\s*[µμ]M\b/g, '$1 micromolar')
      .replace(/(\d)\s*nM\b/g, '$1 nanomolar')
      .replace(/(\d)\s*pN\b/g, '$1 piconewtons')
      .replace(/(\d)\s*pL\b/g, '$1 picoliters')
      .replace(/(\d)\s*fL\b/g, '$1 femtoliters')
      .replace(/\bØ\b|Ø/g, 'diameter')
      .replace(/S2′/g, 'S two prime')
      .replace(/5′/g, 'five prime')
      .replace(/3′/g, 'three prime')
      .replace(/(\d)″/g, '$1 double prime')
      .replace(/(\d)′/g, '$1 prime')
      .replace(/αvβ5/g, 'alpha v beta five')
      .replace(/αv\b/g, 'alpha v')
      .replace(/σ(\d+)/g, 'sigma $1')
      .replace(/Δ/g, 'delta ')
      .replace(/Σ/g, 'sigma ')
      .replace(/[Ψψ]/g, 'psi ')
      .replace(/α/g, 'alpha ')
      .replace(/β/g, 'beta ')
      .replace(/γ/g, 'gamma ')
      .replace(/δ/g, 'delta ')
      .replace(/ε/g, 'epsilon ')
      .replace(/θ/g, 'theta ')
      .replace(/λ/g, 'lambda ')
      .replace(/π/g, 'pi ')
      .replace(/σ/g, 'sigma ')
      .replace(/τ/g, 'tau ')
      .replace(/φ/g, 'phi ')
      .replace(/χ/g, 'chi ')
      .replace(/ω/g, 'omega ')
      .replace(/\bgp(\d+)\*/g, 'G P $1 star')
      .replace(/\bIPI\*/g, 'I P I star')
      .replace(/\*/g, '')
      .replace(/16⅓/g, 'sixteen and one third')
      .replace(/⅓/g, ' one third ')
      .replace(/½/g, ' one half ')
      .replace(/(\d+(?:\.\d+)?)\s*Å²/g, '$1 square angstroms')
      .replace(/Å²/g, 'square angstroms')
      .replace(/(\d+(?:\.\d+)?)\s*Å/g, '$1 angstroms')
      .replace(/Å/g, 'angstroms')
      .replace(/(\d+)\s*°C\b/g, '$1 degrees Celsius')
      .replace(/(\d+)\s*°/g, '$1 degrees')
      .replace(/°/g, ' degrees ')
      .replace(/times\/s\b/g, 'times per second')
      .replace(/pseudo-T\s*=\s*(\d+)/gi, 'pseudo T equals $1')
      .replace(/\bT\s*=\s*(\d+)/g, 'T equals $1')
      .replace(/\br\s*=\s*(\d+)/g, 'radius equals $1')
      .replace(/([A-Z]\d+)↓([A-Z]\d+)/g, '$1 cleavage $2')
      .replace(/↓/g, ' decreases ')
      .replace(/[⇌↔]/g, ' in equilibrium with ')
      .replace(/→/g, ', to ')
      .replace(/G≡C/g, 'G triple-bond C')
      .replace(/A=T/g, 'A double-bond T')
      .replace(/≡/g, ' equals ')
      .replace(/≥/g, ' at least ')
      .replace(/±/g, ' plus or minus ')
      .replace(/≈/g, ' about ')
      .replace(/~\s*(\d+)/g, 'about $1')
      .replace(/(\d)\s*[–—]\s*(\d)/g, '$1 to $2')
      .replace(/−(\d)/g, 'minus $1')
      .replace(/−/g, '-')
      .replace(/(\d)\s*[µμ]m\b/g, '$1 micrometers')
      .replace(/\b[µμ]m\b/g, 'micrometers')
      .replace(/[µμ]/g, 'mu ')
      .replace(/(\d)\s*nm\b/g, '$1 nanometers')
      .replace(/(\d)\s*kbp\b/gi, '$1 kilobase pairs')
      .replace(/(\d)\s*kb\b/gi, '$1 kilobases')
      .replace(/(\d)\s*Mbp?\b/g, '$1 megabases')
      .replace(/×\s*(\d+)/g, 'by $1')
      .replace(/(\d+)\s*×/g, '$1 times')
      .replace(/×/g, ' by ')
      .replace(/ₙ/g, ' sub n')
      .replace(/ᵢ/g, ' i')
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, ch => SUBSCRIPT_DIGIT_MAP[ch] ?? ch)
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, ch => SUPERSCRIPT_DIGIT_MAP[ch] ?? ch)
      .replace(/⁺/g, ' plus ')
      .replace(/⁻/g, ' minus ')
      .replace(/[″]/g, ' double prime ')
      .replace(/[′]/g, ' prime ')
      .replace(/_/g, ' ')
      .replace(/\s*&\s*/g, ' and ')
      .replace(/\s+\+\s+/g, ' plus ');
  }

  return out
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s*·\s*/g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

function defaultAudioFactory(src: string): AudioElementLike {
  if (typeof Audio !== 'undefined') {
    return new Audio(src) as unknown as AudioElementLike;
  }
  throw new Error('HTMLAudioElement is not available in this environment');
}

function defaultStorage(): Pick<Storage, 'getItem' | 'setItem'> | null {
  try {
    if (typeof localStorage !== 'undefined') return localStorage;
  } catch {
    // storage may be blocked in sandboxed contexts
  }
  return null;
}

const SILENT_UNLOCK_WAV =
  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';

/**
 * Lightweight static `.opus` audio narrator for guided tours and 4-mode Explorer lenses.
 * Plays pre-generated GPT-SoVITS `.opus` cues from:
 * - Guided Tours: `${audioBaseUrl}/en/{v1|v2|v3}/{tourRoot}/{cueId}.opus` and `${audioBaseUrl}/es/{tourRoot}/{cueId}.opus`
 * - Node Lenses:  `${audioBaseUrl}/lenses/en/{v1|v2|v3}/{mode}/{nodeId}.opus` and `${audioBaseUrl}/lenses/es/{mode}/{nodeId}.opus`
 * Prefetches upcoming tour cues without falling back to robotic OS TTS.
 */
export function createStaticTourNarrator(options: StaticNarratorOptions = {}): StaticTourNarrator {
  const hasCustomFactory = typeof options.createAudio === 'function';
  const makeAudio = options.createAudio ?? defaultAudioFactory;
  const storage = options.storage !== undefined ? options.storage : defaultStorage();
  const maxCueDurationMs = options.maxCueDurationMs ?? 90_000;
  const maxLensDurationMs = options.maxLensDurationMs ?? 120_000;
  const audioBaseUrl = (
    options.audioBaseUrl ??
    (typeof globalThis !== 'undefined' &&
    typeof (globalThis as Record<string, unknown>).__TOUR_AUDIO_BASE__ === 'string'
      ? ((globalThis as Record<string, unknown>).__TOUR_AUDIO_BASE__ as string)
      : 'audio')
  ).replace(/\/+$/, '');

  const readStoredNumber = (key: string, fallback: number): number => {
    if (!storage) return fallback;
    try {
      const raw = storage.getItem(key);
      if (raw === null) return fallback;
      const parsed = Number(JSON.parse(raw));
      return Number.isFinite(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  };

  let volume = clamp(options.initialVolume ?? readStoredNumber(VOL_STORAGE_KEY, 1), 0, 1);
  let rate = clamp(options.initialRate ?? 1, 0.5, 2);
  let speakSeq = 0;

  let activeAudio: AudioElementLike | null = null;
  let activeResolve: (() => void) | null = null;
  let activeLens: LensAudioRef | null = null;
  let activeLensStateCb: ((playing: boolean) => void) | null = null;
  let maxTimer: ReturnType<typeof setTimeout> | null = null;
  let pendingBlockedCue: NarratorCueInput | null = null;

  // Persistent browser HTMLAudioElement unlocked on first user gesture so delayed camera-flight cues never hit NotAllowedError
  let sharedBrowserAudio: AudioElementLike | null = null;
  let audioUnlocked = false;
  if (!hasCustomFactory && typeof Audio !== 'undefined') {
    try {
      sharedBrowserAudio = new Audio() as unknown as AudioElementLike;
      sharedBrowserAudio.preload = 'auto';
    } catch {
      sharedBrowserAudio = null;
    }
  }

  const prefetchCache = new Map<string, AudioElementLike>();
  const failedAudioUrls = new Set<string>();

  const clearTimer = () => {
    if (maxTimer !== null) {
      clearTimeout(maxTimer);
      maxTimer = null;
    }
  };

  const resolveActiveEnglishVoice = (explicit?: EnglishVoiceId): EnglishVoiceId => {
    if (explicit && isValidEnglishVoiceId(explicit)) return explicit;
    const fromGetter = options.getVoice?.();
    if (fromGetter && isValidEnglishVoiceId(fromGetter)) return fromGetter;
    return 'v3';
  };

  const resolveActiveSpanishVoice = (explicit?: SpanishVoiceId): SpanishVoiceId => {
    if (explicit && isValidSpanishVoiceId(explicit)) return explicit;
    const fromGetter = options.getSpanishVoice?.();
    if (fromGetter && isValidSpanishVoiceId(fromGetter)) return fromGetter;
    return 'latam';
  };

  const resolveRoot = (cue: NarratorCueRef): string | null => {
    if (cue.root) return cue.root;
    const runtimeRoot = options.getTourRuntime?.()?.state?.root;
    return runtimeRoot ?? null;
  };

  const resolveAudioUrl = (cue: NarratorCueRef): string | null => {
    if (!cue.id || cue.id.startsWith('detail.')) return null;
    const root = resolveRoot(cue);
    if (!root) return null;
    const langCode = primaryNarrationLang(cue.lang);
    if (langCode === 'es') {
      const esVoice = resolveActiveSpanishVoice(cue.esVoice);
      return `${audioBaseUrl}/es/${esVoice}/${root}/${encodeURIComponent(cue.id)}.opus`;
    }
    const voice = resolveActiveEnglishVoice(cue.voice);
    return `${audioBaseUrl}/en/${voice}/${root}/${encodeURIComponent(cue.id)}.opus`;
  };

  const resolveLensAudioUrl = (ref: LensAudioRef): string | null => {
    if (!ref.nodeId || !ref.mode) return null;
    const langCode = primaryNarrationLang(ref.lang);
    if (langCode === 'es') {
      const esVoice = resolveActiveSpanishVoice(ref.esVoice);
      return `${audioBaseUrl}/lenses/es/${esVoice}/${ref.mode}/${encodeURIComponent(ref.nodeId)}.opus`;
    }
    const voice = resolveActiveEnglishVoice(ref.voice);
    return `${audioBaseUrl}/lenses/en/${voice}/${ref.mode}/${encodeURIComponent(ref.nodeId)}.opus`;
  };

  const inferNextCue = (cue: NarratorCueInput): NarratorCueRef | null => {
    if (cue.nextCue) return cue.nextCue;
    const rt = options.getTourRuntime?.();
    const list = rt?.T?.list;
    const idx = rt?.T?.cue;
    if (!list || typeof idx !== 'number' || idx < 0 || idx + 1 >= list.length) return null;
    const nextItem = list[idx + 1];
    if (!nextItem?.id) return null;
    return {
      id: nextItem.id,
      lang: cue.lang,
      root: resolveRoot(cue),
      voice: cue.voice,
      esVoice: cue.esVoice
    };
  };

  const prefetch = (cue: NarratorCueRef | null | undefined) => {
    if (!cue) return;
    const url = resolveAudioUrl(cue);
    if (!url || failedAudioUrls.has(url) || prefetchCache.has(url)) return;
    try {
      const audio = makeAudio(url);
      audio.preload = 'auto';
      audio.onerror = () => {
        failedAudioUrls.add(url);
        prefetchCache.delete(url);
      };
      audio.load?.();
      if (prefetchCache.size >= 16) {
        const oldestKey = prefetchCache.keys().next().value;
        if (oldestKey) prefetchCache.delete(oldestKey);
      }
      prefetchCache.set(url, audio);
    } catch {
      // ignore prefetch errors in non-DOM environments
    }
  };

  const stop = () => {
    speakSeq++;
    pendingBlockedCue = null;
    clearTimer();
    const prevLensCb = activeLensStateCb;
    activeLens = null;
    activeLensStateCb = null;
    if (activeAudio) {
      try {
        activeAudio.onended = null;
        activeAudio.onerror = null;
        activeAudio.pause();
      } catch {
        // ignore
      }
      activeAudio = null;
    }
    if (prevLensCb) {
      try {
        prevLensCb(false);
      } catch {
        // ignore callback errors
      }
    }
    const res = activeResolve;
    activeResolve = null;
    if (res) res();
  };

  const playResolvedUrl = async (
    url: string,
    maxDuration: number,
    onStarted?: () => void,
    onNotAllowed?: () => void,
    onCleanup?: () => void
  ): Promise<void> => {
    const seq = speakSeq;
    await new Promise<void>((resolve) => {
      let audio: AudioElementLike;
      try {
        if (sharedBrowserAudio) {
          audio = sharedBrowserAudio;
          audio.onended = null;
          audio.onerror = null;
          audio.src = url;
          prefetchCache.delete(url);
        } else {
          audio = prefetchCache.get(url) ?? makeAudio(url);
          prefetchCache.delete(url);
        }
      } catch {
        onCleanup?.();
        resolve();
        return;
      }

      if (seq !== speakSeq) {
        onCleanup?.();
        resolve();
        return;
      }

      activeAudio = audio;
      audio.volume = volume;
      audio.playbackRate = rate;
      if (!sharedBrowserAudio && typeof audio.currentTime === 'number') {
        try {
          audio.currentTime = 0;
        } catch {
          // ignore if stream has not loaded metadata yet
        }
      }

      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        clearTimer();
        if (activeAudio === audio) {
          audio.onended = null;
          audio.onerror = null;
          activeAudio = null;
        }
        if (activeResolve === done) activeResolve = null;
        onCleanup?.();
        resolve();
      };

      activeResolve = done;
      audio.onended = () => {
        pendingBlockedCue = null;
        done();
      };
      audio.onerror = () => {
        done();
      };

      maxTimer = setTimeout(done, maxDuration);

      Promise.resolve()
        .then(() => audio.play())
        .then(() => {
          audioUnlocked = true;
          pendingBlockedCue = null;
          if (seq === speakSeq) {
            onStarted?.();
          }
        })
        .catch((err: unknown) => {
          const name = (err as { name?: string } | null)?.name ?? '';
          if (name === 'NotAllowedError') {
            onNotAllowed?.();
          }
          done();
        });
    });
  };

  const speak = async (cue: NarratorCueInput): Promise<void> => {
    stop();
    const url = resolveAudioUrl(cue);
    if (!url || failedAudioUrls.has(url)) return;

    const rtPace = options.getTourRuntime?.()?.T?.pace;
    if (typeof rtPace === 'number' && Number.isFinite(rtPace)) {
      rate = clamp(rtPace, 0.5, 2);
    }

    await playResolvedUrl(
      url,
      maxCueDurationMs,
      () => prefetch(inferNextCue(cue)),
      () => {
        pendingBlockedCue = cue;
      }
    );
  };

  const speakLens = async (input: SpeakLensInput): Promise<void> => {
    stop();
    const url = resolveLensAudioUrl(input);
    if (!url || failedAudioUrls.has(url)) {
      input.onStateChange?.(false);
      return;
    }

    const lensSnapshot: LensAudioRef = {
      nodeId: input.nodeId,
      mode: input.mode,
      lang: input.lang,
      voice: input.voice,
      esVoice: input.esVoice
    };
    activeLens = lensSnapshot;
    activeLensStateCb = input.onStateChange ?? null;
    try {
      activeLensStateCb?.(true);
    } catch {
      // ignore
    }

    await playResolvedUrl(
      url,
      maxLensDurationMs,
      undefined,
      undefined,
      () => {
        if (activeLens === lensSnapshot) {
          const cb = activeLensStateCb;
          activeLens = null;
          activeLensStateCb = null;
          try {
            cb?.(false);
          } catch {
            // ignore
          }
        }
      }
    );
  };

  if (sharedBrowserAudio && typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    const unlockOnGesture = () => {
      if (pendingBlockedCue) {
        const retryCue = pendingBlockedCue;
        pendingBlockedCue = null;
        void speak(retryCue);
        return;
      }
      if (audioUnlocked || activeAudio || !sharedBrowserAudio) return;
      try {
        sharedBrowserAudio.volume = 0;
        sharedBrowserAudio.src = SILENT_UNLOCK_WAV;
        const p = sharedBrowserAudio.play();
        if (p && typeof p.then === 'function') {
          p.then(() => {
            audioUnlocked = true;
            if (!activeAudio && sharedBrowserAudio) {
              sharedBrowserAudio.pause();
              sharedBrowserAudio.volume = volume;
            }
          }).catch(() => {
            // will retry on next gesture
          });
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('pointerdown', unlockOnGesture, { capture: true, passive: true });
    window.addEventListener('keydown', unlockOnGesture, { capture: true, passive: true });
    window.addEventListener('touchstart', unlockOnGesture, { capture: true, passive: true });
  }

  return {
    audioBaseUrl,
    resolveAudioUrl,
    resolveLensAudioUrl,
    prefetch,
    stop,
    speak,
    speakLens,
    isSpeakingLens(): boolean {
      return activeLens !== null && activeAudio !== null;
    },
    getActiveLens(): LensAudioRef | null {
      return activeLens;
    },
    setVolume(v: number): void {
      volume = clamp(v, 0, 1);
      if (activeAudio) activeAudio.volume = volume;
      if (storage) {
        try {
          storage.setItem(VOL_STORAGE_KEY, JSON.stringify(volume));
        } catch {
          // ignore
        }
      }
    },
    getVolume(): number {
      return volume;
    },
    setRate(r: number): void {
      rate = clamp(r, 0.5, 2);
      if (activeAudio) activeAudio.playbackRate = rate;
    },
    getRate(): number {
      return rate;
    }
  };
}
