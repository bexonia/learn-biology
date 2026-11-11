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
}

export interface NarratorCueInput extends NarratorCueRef {
  readonly text?: string;
  readonly plain?: string;
  readonly say?: string;
  readonly chapter?: string | null;
  readonly step?: string | null;
  readonly nextCue?: NarratorCueRef | null;
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
  readonly initialVolume?: number;
  readonly initialRate?: number;
  readonly maxCueDurationMs?: number;
}

export interface StaticTourNarrator {
  readonly audioBaseUrl: string;
  speak(cue: NarratorCueInput): Promise<void>;
  stop(): void;
  setVolume(volume: number): void;
  getVolume(): number;
  setRate(rate: number): void;
  getRate(): number;
  resolveAudioUrl(cue: NarratorCueRef): string | null;
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

/**
 * Normalizes scientific notation, Greek symbols, units, and viral/molecular abbreviations
 * into clean speakable text for the offline GPT-SoVITS narration synthesis pipeline (EN & ES).
 */
export function normalizeSpeechText(raw: string, lang = 'en-US'): string {
  const isEs = primaryNarrationLang(lang) === 'es';
  let out = stripTourMarkup(raw).replace(/[«»]/g, '"');

  if (isEs) {
    out = out
      .replace(/(\d)\.(\d{3})\b/g, '$1$2')
      .replace(/(\d),(\d{3})\b/g, '$1$2')
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
      .replace(/\bCO₂/g, 'dióxido de carbono')
      .replace(/\bO₂/g, 'oxígeno')
      .replace(/\bH₂O/g, 'agua')
      .replace(/\bD₂/g, 'D 2')
      .replace(/\bB₁/g, 'B 1')
      .replace(/\bbajo en Ca²⁺/gi, 'bajo en iones de calcio')
      .replace(/Ca²⁺/g, 'iones de calcio')
      .replace(/Mg²⁺/g, 'iones de magnesio')
      .replace(/NADP⁺/g, 'NADP positivo')
      .replace(/NAD⁺/g, 'NAD positivo')
      .replace(/F₁F₀/g, 'efe uno efe cero')
      .replace(/\bH[⁺+]/g, 'protones ')
      .replace(/S2′/g, 'S 2 prima')
      .replace(/5′/g, '5 prima')
      .replace(/3′/g, '3 prima')
      .replace(/αvβ5/g, 'alfa uve beta 5')
      .replace(/αv\b/g, 'alfa uve')
      .replace(/σ(\d+)/g, 'sigma $1')
      .replace(/α/g, 'alfa ')
      .replace(/β/g, 'beta ')
      .replace(/γ/g, 'gamma ')
      .replace(/σ/g, 'sigma ')
      .replace(/\bgp(\d+)\*/g, 'gp $1 estrella')
      .replace(/\bIPI\*/g, 'IPI estrella')
      .replace(/\*/g, '')
      .replace(/16⅓/g, 'dieciséis y un tercio')
      .replace(/⅓/g, 'un tercio')
      .replace(/(\d+(?:[.,]\d+)?)\s*Å/g, '$1 ángstroms')
      .replace(/Å/g, 'ángstroms')
      .replace(/(\d+)\s*°C\b/g, '$1 grados Celsius')
      .replace(/(\d+)\s*°/g, '$1 grados')
      .replace(/veces\/s\b/g, 'veces por segundo')
      .replace(/pseudo-T\s*=\s*(\d+)/gi, 'pseudo te igual a $1')
      .replace(/\bT\s*=\s*(\d+)/g, 'te igual a $1')
      .replace(/\br\s*=\s*(\d+)/g, 'radio igual a $1')
      .replace(/~\s*(\d+)/g, 'unos $1')
      .replace(/(\d)\s*[µμ]m\b/g, '$1 micrómetros')
      .replace(/\b[µμ]m\b/g, 'micrómetros')
      .replace(/(\d)\s*nm\b/g, '$1 nanómetros')
      .replace(/(\d)\s*kbp\b/gi, '$1 kilopares de bases')
      .replace(/(\d)\s*kb\b/gi, '$1 kilobases')
      .replace(/(\d)\s*Mbp?\b/g, '$1 megabases')
      .replace(/×\s*(\d+)/g, '$1 veces')
      .replace(/(\d+)\s*×/g, '$1 veces')
      .replace(/\s*&\s*/g, ' y ')
      .replace(/\s+\+\s+/g, ' más ');
  } else {
    out = out
      .replace(/(\d),(\d{3})\b/g, '$1$2')
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
      .replace(/\bCO₂/g, 'carbon dioxide')
      .replace(/\bO₂/g, 'oxygen')
      .replace(/\bH₂O/g, 'water')
      .replace(/\bD₂/g, 'D two')
      .replace(/\bB₁/g, 'B one')
      .replace(/low-Ca²⁺/g, 'low calcium ion')
      .replace(/Ca²⁺/g, 'calcium ions')
      .replace(/Mg²⁺/g, 'magnesium ions')
      .replace(/NADP⁺/g, 'N A D P plus')
      .replace(/NAD⁺/g, 'N A D plus')
      .replace(/F₁F₀/g, 'F one F zero')
      .replace(/\bH[⁺+]/g, 'protons ')
      .replace(/S2′/g, 'S two prime')
      .replace(/5′/g, 'five prime')
      .replace(/3′/g, 'three prime')
      .replace(/αvβ5/g, 'alpha v beta five')
      .replace(/αv\b/g, 'alpha v')
      .replace(/σ(\d+)/g, 'sigma $1')
      .replace(/α/g, 'alpha ')
      .replace(/β/g, 'beta ')
      .replace(/γ/g, 'gamma ')
      .replace(/σ/g, 'sigma ')
      .replace(/\bgp(\d+)\*/g, 'G P $1 star')
      .replace(/\bIPI\*/g, 'I P I star')
      .replace(/\*/g, '')
      .replace(/16⅓/g, 'sixteen and one third')
      .replace(/⅓/g, 'one third')
      .replace(/(\d+(?:\.\d+)?)\s*Å/g, '$1 angstroms')
      .replace(/Å/g, 'angstroms')
      .replace(/(\d+)\s*°C\b/g, '$1 degrees Celsius')
      .replace(/(\d+)\s*°/g, '$1 degrees')
      .replace(/times\/s\b/g, 'times per second')
      .replace(/pseudo-T\s*=\s*(\d+)/gi, 'pseudo T equals $1')
      .replace(/\bT\s*=\s*(\d+)/g, 'T equals $1')
      .replace(/\br\s*=\s*(\d+)/g, 'radius equals $1')
      .replace(/~\s*(\d+)/g, 'about $1')
      .replace(/(\d)\s*[µμ]m\b/g, '$1 micrometers')
      .replace(/\b[µμ]m\b/g, 'micrometers')
      .replace(/(\d)\s*nm\b/g, '$1 nanometers')
      .replace(/(\d)\s*kbp\b/gi, '$1 kilobase pairs')
      .replace(/(\d)\s*kb\b/gi, '$1 kilobases')
      .replace(/(\d)\s*Mbp?\b/g, '$1 megabases')
      .replace(/×\s*(\d+)/g, '$1 times')
      .replace(/(\d+)\s*×/g, '$1 times')
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
 * Lightweight static `.opus` audio narrator for guided tours.
 * Plays pre-generated GPT-SoVITS `.opus` cues from `${audioBaseUrl}/{en|es}/{tourRoot}/{cueId}.opus`
 * and prefetches the upcoming cue in the step without modifying tour data or falling back to robotic OS TTS.
 */
export function createStaticTourNarrator(options: StaticNarratorOptions = {}): StaticTourNarrator {
  const hasCustomFactory = typeof options.createAudio === 'function';
  const makeAudio = options.createAudio ?? defaultAudioFactory;
  const storage = options.storage !== undefined ? options.storage : defaultStorage();
  const maxCueDurationMs = options.maxCueDurationMs ?? 45_000;
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
    return `${audioBaseUrl}/${langCode}/${root}/${encodeURIComponent(cue.id)}.opus`;
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
      root: resolveRoot(cue)
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
    const res = activeResolve;
    activeResolve = null;
    if (res) res();
  };

  const speak = async (cue: NarratorCueInput): Promise<void> => {
    stop();
    const seq = speakSeq;
    const url = resolveAudioUrl(cue);
    if (!url || failedAudioUrls.has(url)) return;

    const rtPace = options.getTourRuntime?.()?.T?.pace;
    if (typeof rtPace === 'number' && Number.isFinite(rtPace)) {
      rate = clamp(rtPace, 0.5, 2);
    }

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
        resolve();
        return;
      }

      if (seq !== speakSeq) {
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
        if (activeResolve) activeResolve = null;
        resolve();
      };

      activeResolve = done;
      audio.onended = () => {
        pendingBlockedCue = null;
        done();
      };
      audio.onerror = () => {
        // Only cache transient missing-file failure briefly so newly generated files work on next navigation without reload
        done();
      };

      maxTimer = setTimeout(done, maxCueDurationMs);

      Promise.resolve()
        .then(() => audio.play())
        .then(() => {
          audioUnlocked = true;
          pendingBlockedCue = null;
          if (seq === speakSeq) {
            prefetch(inferNextCue(cue));
          }
        })
        .catch((err: unknown) => {
          const name = (err as { name?: string } | null)?.name ?? '';
          if (name === 'NotAllowedError') {
            pendingBlockedCue = cue;
          }
          done();
        });
    });
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
    prefetch,
    stop,
    speak,
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
