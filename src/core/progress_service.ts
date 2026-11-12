import {
  isValidSpanishVoicePreference,
  isValidVoicePreference,
  type ExplanationMode,
  type SpanishVoicePreference,
  type VoicePreference
} from '../content/types.js';

export interface ClientCourseCheckpoint {
  tourKey: string;
  stepId: string | null;
  chapterIdx: number;
  stepIdx: number;
  cueIdx: number;
  completedMask: number;
  isCompleted: boolean;
  lastNodeId: string | null;
  updatedAt: string;
}

export interface ClientUserProfile {
  id: number;
  email: string;
  fullName: string | null;
  lang: 'en' | 'es';
  explanationMode?: ExplanationMode;
  voicePreference?: VoicePreference;
  spanishVoicePreference?: SpanishVoicePreference;
  voiceLocked?: boolean;
  createdAt?: string;
}

export const CLIENT_PROGRESS_COOKIE = 'bexonia_learn_progress';
export const CLIENT_PROGRESS_STORAGE_KEY = 'bexonia_learn_progress_v1';
export const CLIENT_EXPLANATION_MODE_KEY = 'learnBioMode';
export const CLIENT_VOICE_PREF_KEY = 'learnBioVoice';
export const CLIENT_SPANISH_VOICE_PREF_KEY = 'learnBioVoiceEs';
export const CLIENT_VOICE_LOCKED_KEY = 'learnBioVoiceLocked';
export const COOKIE_MAX_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days

const VALID_MODES = new Set<ExplanationMode>(['simple', 'story', 'blueprint', 'scientific']);

export class CourseProgressManager {
  /** Primary in-memory store for all 10 cell/virus courses */
  readonly memoryStore = new Map<string, ClientCourseCheckpoint>();
  explanationMode: ExplanationMode = 'story';
  voicePreference: VoicePreference = 'auto';
  spanishVoicePreference: SpanishVoicePreference = 'auto';
  voiceLocked = false;
  user: ClientUserProfile | null = null;
  authenticated = false;
  sessionExpiresAt: string | null = null;
  cookieRenewedAt: string = new Date().toISOString();
  private readonly listeners = new Set<() => void>();

  constructor() {
    this.hydrateFromCookieAndStorage();
    // Always ensure the progress cookie exists in the browser and is renewed on load
    this.writeProgressCookie();
  }

  onChange(fn: () => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private notify(): void {
    for (const fn of this.listeners) {
      try {
        fn();
      } catch {
        // ignore listener errors
      }
    }
  }

  private readBrowserCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const parts = (document.cookie || '').split(';');
    for (const part of parts) {
      const eq = part.indexOf('=');
      if (eq <= 0) continue;
      const k = part.slice(0, eq).trim();
      if (k === name) {
        try {
          return decodeURIComponent(part.slice(eq + 1).trim());
        } catch {
          return part.slice(eq + 1).trim();
        }
      }
    }
    return null;
  }

  /**
   * Encodes the in-memory progress map into a compact cookie (`bexonia_learn_progress`)
   * and renews its `max-age` (30 days).
   */
  writeProgressCookie(): void {
    if (typeof document === 'undefined') return;
    const compact: Record<string, [string | null, number, number, number, number, string]> = {};
    for (const [k, cp] of this.memoryStore.entries()) {
      compact[k] = [
        cp.stepId,
        cp.chapterIdx,
        cp.stepIdx,
        cp.cueIdx,
        cp.isCompleted ? 1 : 0,
        cp.updatedAt,
      ];
    }
    this.cookieRenewedAt = new Date().toISOString();
    const payload = encodeURIComponent(
      JSON.stringify({
        v: 1,
        t: this.cookieRenewedAt,
        m: this.explanationMode,
        vp: this.voicePreference,
        vpEs: this.spanishVoicePreference,
        vl: this.voiceLocked ? 1 : 0,
        c: compact
      })
    );
    document.cookie = `${CLIENT_PROGRESS_COOKIE}=${payload}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
  }

  private writeLocalStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      const obj: Record<string, ClientCourseCheckpoint> = {};
      for (const [k, v] of this.memoryStore.entries()) {
        obj[k] = v;
        if (v.stepId) {
          localStorage.setItem('tourPos:' + k, JSON.stringify(v.stepId));
          if (k === 'real-cell') {
            localStorage.setItem('tourPos', JSON.stringify(v.stepId));
          }
        }
      }
      localStorage.setItem(CLIENT_PROGRESS_STORAGE_KEY, JSON.stringify(obj));
      localStorage.setItem(CLIENT_EXPLANATION_MODE_KEY, this.explanationMode);
      localStorage.setItem(CLIENT_VOICE_PREF_KEY, this.voicePreference);
      localStorage.setItem(CLIENT_SPANISH_VOICE_PREF_KEY, this.spanishVoicePreference);
      localStorage.setItem(CLIENT_VOICE_LOCKED_KEY, this.voiceLocked ? '1' : '0');
    } catch {
      // ignore storage quota errors
    }
  }

  private hydrateFromCookieAndStorage(): void {
    // 1. Read from cookie first
    const rawCookie = this.readBrowserCookie(CLIENT_PROGRESS_COOKIE);
    if (rawCookie) {
      try {
        const parsed = JSON.parse(rawCookie);
        if (parsed && typeof parsed.m === 'string' && VALID_MODES.has(parsed.m as ExplanationMode)) {
          this.explanationMode = parsed.m as ExplanationMode;
        }
        if (parsed && isValidVoicePreference(parsed.vp)) {
          this.voicePreference = parsed.vp;
        }
        if (parsed && isValidSpanishVoicePreference(parsed.vpEs)) {
          this.spanishVoicePreference = parsed.vpEs;
        }
        if (parsed && (parsed.vl === 1 || parsed.vl === true || parsed.vl === 0 || parsed.vl === false)) {
          this.voiceLocked = Boolean(parsed.vl);
        } else if (this.voicePreference !== 'auto' || this.spanishVoicePreference !== 'auto') {
          this.voiceLocked = true;
        }
        if (parsed && typeof parsed.c === 'object') {
          for (const [tourKey, arr] of Object.entries(parsed.c)) {
            if (Array.isArray(arr)) {
              this.memoryStore.set(tourKey, {
                tourKey,
                stepId: (arr[0] as string | null) ?? null,
                chapterIdx: Number(arr[1] ?? 0),
                stepIdx: Number(arr[2] ?? 0),
                cueIdx: Number(arr[3] ?? 0),
                completedMask: 0,
                isCompleted: Boolean(arr[4]),
                lastNodeId: null,
                updatedAt: String(arr[5] ?? new Date().toISOString()),
              });
            }
          }
        }
      } catch {
        // ignore malformed cookie
      }
    }

    // 2. Merge with localStorage if newer
    if (typeof localStorage !== 'undefined') {
      try {
        const storedMode = localStorage.getItem(CLIENT_EXPLANATION_MODE_KEY);
        if (storedMode && VALID_MODES.has(storedMode as ExplanationMode)) {
          this.explanationMode = storedMode as ExplanationMode;
        }
        const storedVoice = localStorage.getItem(CLIENT_VOICE_PREF_KEY);
        if (storedVoice && isValidVoicePreference(storedVoice)) {
          this.voicePreference = storedVoice;
        }
        const storedEsVoice = localStorage.getItem(CLIENT_SPANISH_VOICE_PREF_KEY);
        if (storedEsVoice && isValidSpanishVoicePreference(storedEsVoice)) {
          this.spanishVoicePreference = storedEsVoice;
        }
        const storedLocked = localStorage.getItem(CLIENT_VOICE_LOCKED_KEY);
        if (storedLocked === '1' || storedLocked === 'true') {
          this.voiceLocked = true;
        } else if (storedLocked === '0' || storedLocked === 'false') {
          this.voiceLocked = false;
        } else if (this.voicePreference !== 'auto' || this.spanishVoicePreference !== 'auto') {
          this.voiceLocked = true;
        }
        const rawLs = localStorage.getItem(CLIENT_PROGRESS_STORAGE_KEY);
        if (rawLs) {
          const parsedLs = JSON.parse(rawLs) as Record<string, ClientCourseCheckpoint>;
          for (const [tourKey, cp] of Object.entries(parsedLs)) {
            if (!cp || typeof cp !== 'object') continue;
            const existing = this.memoryStore.get(tourKey);
            const lsTime = cp.updatedAt ? Date.parse(cp.updatedAt) : 0;
            const exTime = existing?.updatedAt ? Date.parse(existing.updatedAt) : 0;
            if (!existing || lsTime >= exTime) {
              this.memoryStore.set(tourKey, {
                tourKey,
                stepId: cp.stepId ?? null,
                chapterIdx: Number(cp.chapterIdx ?? 0),
                stepIdx: Number(cp.stepIdx ?? 0),
                cueIdx: Number(cp.cueIdx ?? 0),
                completedMask: Number(cp.completedMask ?? 0),
                isCompleted: Boolean(cp.isCompleted),
                lastNodeId: cp.lastNodeId ?? null,
                updatedAt: cp.updatedAt ?? new Date().toISOString(),
              });
            }
          }
        }
      } catch {
        // ignore storage errors
      }
    }
  }

  setExplanationMode(mode: ExplanationMode): ExplanationMode {
    if (!VALID_MODES.has(mode)) return this.explanationMode;
    this.explanationMode = mode;
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();
    return this.explanationMode;
  }

  setVoicePreference(pref: VoicePreference): VoicePreference {
    if (!isValidVoicePreference(pref)) return this.voicePreference;
    this.voicePreference = pref;
    if (pref !== 'auto') this.voiceLocked = true;
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();
    return this.voicePreference;
  }

  setSpanishVoicePreference(pref: SpanishVoicePreference): SpanishVoicePreference {
    if (!isValidSpanishVoicePreference(pref)) return this.spanishVoicePreference;
    this.spanishVoicePreference = pref;
    if (pref !== 'auto') this.voiceLocked = true;
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();
    return this.spanishVoicePreference;
  }

  setVoiceLocked(locked: boolean): boolean {
    this.voiceLocked = Boolean(locked);
    if (!this.voiceLocked) {
      this.voicePreference = 'auto';
      this.spanishVoicePreference = 'auto';
    }
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();
    return this.voiceLocked;
  }

  getCheckpoint(tourKey: string): ClientCourseCheckpoint | null {
    return this.memoryStore.get(tourKey) ?? null;
  }

  getAllCheckpoints(): Record<string, ClientCourseCheckpoint> {
    const out: Record<string, ClientCourseCheckpoint> = {};
    for (const [k, v] of this.memoryStore.entries()) {
      out[k] = { ...v };
    }
    return out;
  }

  saveStep(input: {
    tourKey: string;
    stepId: string | null;
    chapterIdx: number;
    stepIdx: number;
    cueIdx?: number;
    completedMask?: number;
    isCompleted?: boolean;
    lastNodeId?: string | null;
  }): ClientCourseCheckpoint {
    const prev = this.memoryStore.get(input.tourKey);
    const cp: ClientCourseCheckpoint = {
      tourKey: input.tourKey,
      stepId: input.stepId,
      chapterIdx: Math.max(0, Number(input.chapterIdx ?? 0)),
      stepIdx: Math.max(0, Number(input.stepIdx ?? 0)),
      cueIdx: Math.max(0, Number(input.cueIdx ?? 0)),
      completedMask: Math.max(0, Number(input.completedMask ?? prev?.completedMask ?? 0)),
      isCompleted: input.isCompleted !== undefined ? Boolean(input.isCompleted) : (prev?.isCompleted ?? false),
      lastNodeId: input.lastNodeId !== undefined ? input.lastNodeId : (prev?.lastNodeId ?? null),
      updatedAt: new Date().toISOString(),
    };
    this.memoryStore.set(input.tourKey, cp);
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();

    if (this.authenticated) {
      fetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(cp),
      })
        .then(r => (r.ok ? r.json() : null))
        .then(data => {
          if (data?.sessionExpiresAt) {
            this.sessionExpiresAt = data.sessionExpiresAt;
          }
        })
        .catch(() => {
          // offline / static fallback
        });
    }
    return cp;
  }

  async resetCourse(tourKey: string): Promise<void> {
    this.memoryStore.delete(tourKey);
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem('tourPos:' + tourKey);
        if (tourKey === 'real-cell') {
          localStorage.removeItem('tourPos');
        }
      } catch {
        // ignore
      }
    }
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();

    if (this.authenticated) {
      try {
        const res = await fetch('/api/progress/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ tourKey }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.sessionExpiresAt) {
            this.sessionExpiresAt = data.sessionExpiresAt;
          }
        }
      } catch {
        // ignore offline fallback
      }
    }
  }

  private mergeServerProgress(serverProgress: Record<string, ClientCourseCheckpoint>): void {
    if (!serverProgress || typeof serverProgress !== 'object') return;
    for (const [tourKey, cp] of Object.entries(serverProgress)) {
      if (!cp || typeof cp !== 'object') continue;
      const local = this.memoryStore.get(tourKey);
      const sTime = cp.updatedAt ? Date.parse(cp.updatedAt) : 0;
      const lTime = local?.updatedAt ? Date.parse(local.updatedAt) : 0;
      if (!local || sTime >= lTime) {
        this.memoryStore.set(tourKey, cp);
      }
    }
    this.writeProgressCookie();
    this.writeLocalStorage();
    this.notify();
  }

  async hydrateFromServer(): Promise<void> {
    try {
      const res = await fetch('/api/progress', {
        method: 'GET',
        credentials: 'same-origin',
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data?.authenticated && data.user) {
        this.authenticated = true;
        this.user = data.user;
        this.sessionExpiresAt = data.sessionExpiresAt ?? null;
        this.mergeServerProgress(data.progress ?? {});
      } else {
        this.authenticated = false;
        this.user = null;
        this.sessionExpiresAt = null;
      }
      this.notify();
    } catch {
      // Static-only mode or offline
    }
  }

  async register(params: {
    email: string;
    password: string;
    fullName?: string;
    lang?: 'en' | 'es';
  }): Promise<{ ok: boolean; error?: string; user?: ClientUserProfile }> {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          email: params.email,
          password: params.password,
          fullName: params.fullName || null,
          lang: params.lang || 'en',
          progress: this.getAllCheckpoints(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { ok: false, error: data?.error || 'Registration failed' };
      }
      this.authenticated = true;
      this.user = data.user;
      this.sessionExpiresAt = data.sessionExpiresAt ?? null;
      this.mergeServerProgress(data.progress ?? {});
      return { ok: true, user: data.user };
    } catch (err: unknown) {
      return { ok: false, error: err instanceof Error ? err.message : 'Network error' };
    }
  }

  async login(params: {
    email: string;
    password: string;
  }): Promise<{ ok: boolean; error?: string; user?: ClientUserProfile }> {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          email: params.email,
          password: params.password,
          progress: this.getAllCheckpoints(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { ok: false, error: data?.error || 'Sign in failed' };
      }
      this.authenticated = true;
      this.user = data.user;
      this.sessionExpiresAt = data.sessionExpiresAt ?? null;
      this.mergeServerProgress(data.progress ?? {});
      return { ok: true, user: data.user };
    } catch (err: unknown) {
      return { ok: false, error: err instanceof Error ? err.message : 'Network error' };
    }
  }

  /**
   * Renews both the browser progress cookie (`bexonia_learn_progress`) in memory/cookie
   * and, if signed in, the server session cookie (`learn_session`) via `/api/auth/renew`.
   */
  async renewCookies(): Promise<{ ok: boolean; cookieRenewedAt: string; sessionExpiresAt: string | null }> {
    this.writeProgressCookie();
    if (this.authenticated) {
      try {
        const res = await fetch('/api/auth/renew', {
          method: 'POST',
          credentials: 'same-origin',
        });
        if (res.ok) {
          const data = await res.json();
          this.sessionExpiresAt = data.sessionExpiresAt ?? this.sessionExpiresAt;
          if (data.progress) {
            this.mergeServerProgress(data.progress);
          }
        }
      } catch {
        // ignore network error
      }
    }
    this.notify();
    return {
      ok: true,
      cookieRenewedAt: this.cookieRenewedAt,
      sessionExpiresAt: this.sessionExpiresAt,
    };
  }

  async logout(): Promise<void> {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
      });
    } catch {
      // ignore
    }
    this.authenticated = false;
    this.user = null;
    this.sessionExpiresAt = null;
    this.notify();
  }
}
