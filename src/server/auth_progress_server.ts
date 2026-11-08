import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const requireModule = createRequire(import.meta.url);
let SqliteDatabaseSync: any = null;
try {
  SqliteDatabaseSync = requireModule('node:sqlite').DatabaseSync;
} catch {
  SqliteDatabaseSync = null;
}

export interface UserProfile {
  id: number;
  email: string;
  fullName: string | null;
  lang: 'en' | 'es';
  createdAt: string;
}

export interface CourseCheckpoint {
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

export interface SessionMemoryEntry {
  tokenRaw: string;
  tokenHash: string;
  userId: number;
  user: UserProfile;
  expiresAtMs: number;
}

export interface LearnServerOptions {
  dbPath?: string;
  port?: number;
  host?: string;
  sessionTtlSeconds?: number;
  staticRoot?: string | null;
}

export const SESSION_COOKIE_NAME = 'learn_session';
export const PROGRESS_COOKIE_NAME = 'bexonia_learn_progress';
export const DEFAULT_SESSION_TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days

const VALID_TOUR_KEYS = new Set([
  'real-cell',
  'real-plant',
  'real-fungal',
  'real-bacterium',
  'real-phage',
  'real-coronavirus',
  'real-hiv',
  'real-adenovirus',
  'real-tmv',
  'viruses',
]);

const MIME_BY_EXT: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.opus': 'audio/ogg; codecs=opus',
  '.mp3': 'audio/mpeg',
};

function sha256Hex(input: string): string {
  return createHash('sha256').update(input).digest('hex');
}

function normalizeEmail(raw: unknown): string {
  return typeof raw === 'string' ? raw.trim().toLowerCase() : '';
}

function normalizeName(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed.slice(0, 120) : null;
}

function normalizeLang(raw: unknown): 'en' | 'es' {
  return raw === 'es' ? 'es' : 'en';
}

function parseCookies(cookieHeader: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!cookieHeader) return out;
  for (const part of cookieHeader.split(';')) {
    const eq = part.indexOf('=');
    if (eq <= 0) continue;
    const k = part.slice(0, eq).trim();
    const v = part.slice(eq + 1).trim();
    try {
      out[k] = decodeURIComponent(v);
    } catch {
      out[k] = v;
    }
  }
  return out;
}

function formatSessionCookie(token: string, maxAgeSeconds: number): string {
  return `${SESSION_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAgeSeconds}; HttpOnly; SameSite=Lax`;
}

async function readJsonBody(req: IncomingMessage): Promise<Record<string, any>> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of req) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buf.length;
    if (total > 256 * 1024) {
      throw new Error('Request payload too large');
    }
    chunks.push(buf);
  }
  if (chunks.length === 0) return {};
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};
  return JSON.parse(raw);
}

function sendJson(
  res: ServerResponse,
  status: number,
  body: Record<string, unknown>,
  extraHeaders: Record<string, string | string[]> = {},
): void {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...extraHeaders,
  });
  res.end(payload);
}

interface StoredUserRecord {
  id: number;
  email: string;
  fullName: string | null;
  passwordSaltHex: string;
  passwordHashHex: string;
  lang: 'en' | 'es';
  createdAt: string;
  lastLoginAt: string;
}

export class LearnAuthProgressStore {
  readonly db: any | null;
  readonly dbPath: string;
  readonly sessionTtlSeconds: number;
  /** In-memory session cache keyed by `tokenHash` for O(1) cookie validation & renewal */
  readonly memorySessions = new Map<string, SessionMemoryEntry>();
  /** In-memory course progress cache keyed by `userId` -> `Record<tourKey, CourseCheckpoint>` */
  readonly memoryProgress = new Map<number, Record<string, CourseCheckpoint>>();
  /** In-memory user fallback map when running without SQLite */
  private readonly fallbackUsersByEmail = new Map<string, StoredUserRecord>();
  private readonly fallbackUsersById = new Map<number, StoredUserRecord>();
  private nextUserId = 1;

  constructor(dbPath = ':memory:', sessionTtlSeconds = DEFAULT_SESSION_TTL_SECONDS) {
    this.dbPath = dbPath;
    this.sessionTtlSeconds = sessionTtlSeconds;
    if (dbPath !== ':memory:') {
      const dir = dirname(dbPath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
    }
    if (SqliteDatabaseSync) {
      this.db = new SqliteDatabaseSync(dbPath);
      this.initSqliteSchema();
    } else {
      this.db = null;
      this.loadJsonFallback();
    }
  }

  private initSqliteSchema(): void {
    this.db.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;

      CREATE TABLE IF NOT EXISTS users (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        email           TEXT UNIQUE NOT NULL,
        full_name       TEXT,
        password_salt   BLOB NOT NULL,
        password_hash   BLOB NOT NULL,
        preferred_lang  TEXT NOT NULL DEFAULT 'en',
        created_at      TEXT NOT NULL,
        last_login_at   TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);

      CREATE TABLE IF NOT EXISTS course_progress (
        user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tour_key        TEXT NOT NULL,
        step_id         TEXT,
        chapter_idx     INTEGER NOT NULL DEFAULT 0,
        step_idx        INTEGER NOT NULL DEFAULT 0,
        cue_idx         INTEGER NOT NULL DEFAULT 0,
        completed_mask  INTEGER NOT NULL DEFAULT 0,
        is_completed    INTEGER NOT NULL DEFAULT 0,
        last_node_id    TEXT,
        updated_at      TEXT NOT NULL,
        PRIMARY KEY (user_id, tour_key)
      );

      CREATE TABLE IF NOT EXISTS user_sessions (
        token_hash      TEXT PRIMARY KEY,
        user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        expires_at_ms   INTEGER NOT NULL,
        created_at      TEXT NOT NULL
      );
    `);
  }

  private loadJsonFallback(): void {
    if (this.dbPath === ':memory:' || !existsSync(this.dbPath)) return;
    try {
      const raw = JSON.parse(readFileSync(this.dbPath, 'utf8'));
      for (const u of raw.users ?? []) {
        this.fallbackUsersByEmail.set(u.email, u);
        this.fallbackUsersById.set(u.id, u);
        if (u.id >= this.nextUserId) this.nextUserId = u.id + 1;
      }
      for (const [uid, prog] of Object.entries(raw.progress ?? {})) {
        this.memoryProgress.set(Number(uid), prog as Record<string, CourseCheckpoint>);
      }
    } catch {
      // ignore
    }
  }

  private saveJsonFallback(): void {
    if (this.db || this.dbPath === ':memory:') return;
    try {
      const progressObj: Record<number, Record<string, CourseCheckpoint>> = {};
      for (const [uid, map] of this.memoryProgress.entries()) {
        progressObj[uid] = map;
      }
      writeFileSync(
        this.dbPath,
        JSON.stringify({
          users: [...this.fallbackUsersById.values()],
          progress: progressObj,
        }),
        'utf8',
      );
    } catch {
      // ignore
    }
  }

  registerUser(params: {
    email: string;
    password: string;
    fullName?: string | null;
    lang?: 'en' | 'es';
    initialProgress?: Record<string, Partial<CourseCheckpoint>>;
  }): { user: UserProfile; token: string; expiresAtMs: number; progress: Record<string, CourseCheckpoint> } {
    const email = normalizeEmail(params.email);
    if (!email || !email.includes('@')) {
      throw new Error('A valid email address is required.');
    }
    if (typeof params.password !== 'string' || params.password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const fullName = normalizeName(params.fullName);
    const lang = normalizeLang(params.lang);
    const salt = randomBytes(16);
    const hash = scryptSync(params.password, salt, 64);
    const nowIso = new Date().toISOString();
    let userId: number;

    if (this.db) {
      const existing = this.db.prepare('SELECT id FROM users WHERE email = ?').get(email) as { id: number } | undefined;
      if (existing) {
        throw new Error('An account with this email already exists. Please sign in.');
      }
      const insertRes = this.db
        .prepare(
          `INSERT INTO users (email, full_name, password_salt, password_hash, preferred_lang, created_at, last_login_at)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(email, fullName, salt, hash, lang, nowIso, nowIso);
      userId = Number(insertRes.lastInsertRowid);
    } else {
      if (this.fallbackUsersByEmail.has(email)) {
        throw new Error('An account with this email already exists. Please sign in.');
      }
      userId = this.nextUserId++;
      const rec: StoredUserRecord = {
        id: userId,
        email,
        fullName,
        passwordSaltHex: salt.toString('hex'),
        passwordHashHex: hash.toString('hex'),
        lang,
        createdAt: nowIso,
        lastLoginAt: nowIso,
      };
      this.fallbackUsersByEmail.set(email, rec);
      this.fallbackUsersById.set(userId, rec);
      this.saveJsonFallback();
    }

    const user: UserProfile = {
      id: userId,
      email,
      fullName,
      lang,
      createdAt: nowIso,
    };

    this.memoryProgress.set(userId, {});
    if (params.initialProgress && typeof params.initialProgress === 'object') {
      this.mergeClientProgress(userId, params.initialProgress);
    }

    const { token, expiresAtMs } = this.createSession(user);
    return {
      user,
      token,
      expiresAtMs,
      progress: this.getUserProgress(userId),
    };
  }

  loginUser(params: {
    email: string;
    password: string;
    initialProgress?: Record<string, Partial<CourseCheckpoint>>;
  }): { user: UserProfile; token: string; expiresAtMs: number; progress: Record<string, CourseCheckpoint> } {
    const email = normalizeEmail(params.email);
    if (!email || typeof params.password !== 'string') {
      throw new Error('Email and password are required.');
    }

    let user: UserProfile;
    if (this.db) {
      const row = this.db
        .prepare(
          `SELECT id, email, full_name, password_salt, password_hash, preferred_lang, created_at
           FROM users WHERE email = ?`,
        )
        .get(email) as
        | {
            id: number;
            email: string;
            full_name: string | null;
            password_salt: Uint8Array;
            password_hash: Uint8Array;
            preferred_lang: string;
            created_at: string;
          }
        | undefined;

      if (!row) {
        throw new Error('Invalid email or password.');
      }

      const derived = scryptSync(params.password, Buffer.from(row.password_salt), 64);
      const storedHash = Buffer.from(row.password_hash);
      if (derived.length !== storedHash.length || !timingSafeEqual(derived, storedHash)) {
        throw new Error('Invalid email or password.');
      }

      const nowIso = new Date().toISOString();
      this.db.prepare('UPDATE users SET last_login_at = ? WHERE id = ?').run(nowIso, row.id);

      user = {
        id: Number(row.id),
        email: row.email,
        fullName: row.full_name ?? null,
        lang: normalizeLang(row.preferred_lang),
        createdAt: row.created_at,
      };
    } else {
      const rec = this.fallbackUsersByEmail.get(email);
      if (!rec) {
        throw new Error('Invalid email or password.');
      }
      const derived = scryptSync(params.password, Buffer.from(rec.passwordSaltHex, 'hex'), 64);
      const storedHash = Buffer.from(rec.passwordHashHex, 'hex');
      if (derived.length !== storedHash.length || !timingSafeEqual(derived, storedHash)) {
        throw new Error('Invalid email or password.');
      }
      rec.lastLoginAt = new Date().toISOString();
      this.saveJsonFallback();
      user = {
        id: rec.id,
        email: rec.email,
        fullName: rec.fullName,
        lang: rec.lang,
        createdAt: rec.createdAt,
      };
    }

    if (params.initialProgress && typeof params.initialProgress === 'object') {
      this.mergeClientProgress(user.id, params.initialProgress);
    }

    const { token, expiresAtMs } = this.createSession(user);
    return {
      user,
      token,
      expiresAtMs,
      progress: this.getUserProgress(user.id),
    };
  }

  createSession(user: UserProfile): { token: string; tokenHash: string; expiresAtMs: number } {
    const token = randomBytes(32).toString('hex');
    const tokenHash = sha256Hex(token);
    const expiresAtMs = Date.now() + this.sessionTtlSeconds * 1000;
    const nowIso = new Date().toISOString();

    if (this.db) {
      this.db
        .prepare(
          `INSERT OR REPLACE INTO user_sessions (token_hash, user_id, expires_at_ms, created_at)
           VALUES (?, ?, ?, ?)`,
        )
        .run(tokenHash, user.id, expiresAtMs, nowIso);
    }

    this.memorySessions.set(tokenHash, {
      tokenRaw: token,
      tokenHash,
      userId: user.id,
      user,
      expiresAtMs,
    });

    return { token, tokenHash, expiresAtMs };
  }

  resolveSession(token: string | undefined, autoRenew = true): SessionMemoryEntry | null {
    if (!token) return null;
    const tokenHash = sha256Hex(token);
    const now = Date.now();

    let entry = this.memorySessions.get(tokenHash);
    if (entry) {
      if (entry.expiresAtMs <= now) {
        this.memorySessions.delete(tokenHash);
        if (this.db) {
          this.db.prepare('DELETE FROM user_sessions WHERE token_hash = ?').run(tokenHash);
        }
        return null;
      }
    } else if (this.db) {
      const row = this.db
        .prepare(
          `SELECT s.token_hash, s.user_id, s.expires_at_ms,
                  u.email, u.full_name, u.preferred_lang, u.created_at
           FROM user_sessions s
           JOIN users u ON u.id = s.user_id
           WHERE s.token_hash = ?`,
        )
        .get(tokenHash) as
        | {
            token_hash: string;
            user_id: number;
            expires_at_ms: number;
            email: string;
            full_name: string | null;
            preferred_lang: string;
            created_at: string;
          }
        | undefined;

      if (!row) return null;
      if (Number(row.expires_at_ms) <= now) {
        this.db.prepare('DELETE FROM user_sessions WHERE token_hash = ?').run(tokenHash);
        return null;
      }

      entry = {
        tokenRaw: token,
        tokenHash,
        userId: Number(row.user_id),
        user: {
          id: Number(row.user_id),
          email: row.email,
          fullName: row.full_name ?? null,
          lang: normalizeLang(row.preferred_lang),
          createdAt: row.created_at,
        },
        expiresAtMs: Number(row.expires_at_ms),
      };
      this.memorySessions.set(tokenHash, entry);
    } else {
      return null;
    }

    if (autoRenew) {
      const newExpiresAtMs = now + this.sessionTtlSeconds * 1000;
      entry.expiresAtMs = newExpiresAtMs;
      this.memorySessions.set(tokenHash, entry);
      if (this.db) {
        this.db
          .prepare('UPDATE user_sessions SET expires_at_ms = ? WHERE token_hash = ?')
          .run(newExpiresAtMs, tokenHash);
      }
    }

    return entry;
  }

  logoutSession(token: string | undefined): void {
    if (!token) return;
    const tokenHash = sha256Hex(token);
    this.memorySessions.delete(tokenHash);
    if (this.db) {
      this.db.prepare('DELETE FROM user_sessions WHERE token_hash = ?').run(tokenHash);
    }
  }

  getUserProgress(userId: number): Record<string, CourseCheckpoint> {
    const cached = this.memoryProgress.get(userId);
    if (cached) {
      return { ...cached };
    }

    const map: Record<string, CourseCheckpoint> = {};
    if (this.db) {
      const rows = this.db
        .prepare(
          `SELECT tour_key, step_id, chapter_idx, step_idx, cue_idx, completed_mask, is_completed, last_node_id, updated_at
           FROM course_progress WHERE user_id = ?`,
        )
        .all(userId) as Array<{
        tour_key: string;
        step_id: string | null;
        chapter_idx: number;
        step_idx: number;
        cue_idx: number;
        completed_mask: number;
        is_completed: number;
        last_node_id: string | null;
        updated_at: string;
      }>;

      for (const r of rows) {
        map[r.tour_key] = {
          tourKey: r.tour_key,
          stepId: r.step_id ?? null,
          chapterIdx: Number(r.chapter_idx),
          stepIdx: Number(r.step_idx),
          cueIdx: Number(r.cue_idx),
          completedMask: Number(r.completed_mask),
          isCompleted: Boolean(r.is_completed),
          lastNodeId: r.last_node_id ?? null,
          updatedAt: r.updated_at,
        };
      }
    }
    this.memoryProgress.set(userId, map);
    return { ...map };
  }

  upsertCourseProgress(
    userId: number,
    input: {
      tourKey: string;
      stepId?: string | null;
      chapterIdx?: number;
      stepIdx?: number;
      cueIdx?: number;
      completedMask?: number;
      isCompleted?: boolean;
      lastNodeId?: string | null;
    },
  ): CourseCheckpoint {
    const tourKey = String(input.tourKey || '').trim();
    if (!VALID_TOUR_KEYS.has(tourKey)) {
      throw new Error(`Invalid tourKey '${tourKey}'`);
    }

    const currentMap = this.getUserProgress(userId);
    const prev = currentMap[tourKey];
    const nowIso = new Date().toISOString();

    const checkpoint: CourseCheckpoint = {
      tourKey,
      stepId: input.stepId !== undefined ? input.stepId : (prev?.stepId ?? null),
      chapterIdx: Math.max(0, Math.floor(Number(input.chapterIdx ?? prev?.chapterIdx ?? 0))),
      stepIdx: Math.max(0, Math.floor(Number(input.stepIdx ?? prev?.stepIdx ?? 0))),
      cueIdx: Math.max(0, Math.floor(Number(input.cueIdx ?? prev?.cueIdx ?? 0))),
      completedMask: Math.max(0, Math.floor(Number(input.completedMask ?? prev?.completedMask ?? 0))),
      isCompleted: input.isCompleted !== undefined ? Boolean(input.isCompleted) : (prev?.isCompleted ?? false),
      lastNodeId: input.lastNodeId !== undefined ? input.lastNodeId : (prev?.lastNodeId ?? null),
      updatedAt: nowIso,
    };

    if (this.db) {
      this.db
        .prepare(
          `INSERT INTO course_progress
             (user_id, tour_key, step_id, chapter_idx, step_idx, cue_idx, completed_mask, is_completed, last_node_id, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
           ON CONFLICT(user_id, tour_key) DO UPDATE SET
             step_id = excluded.step_id,
             chapter_idx = excluded.chapter_idx,
             step_idx = excluded.step_idx,
             cue_idx = excluded.cue_idx,
             completed_mask = excluded.completed_mask,
             is_completed = excluded.is_completed,
             last_node_id = excluded.last_node_id,
             updated_at = excluded.updated_at`,
        )
        .run(
          userId,
          checkpoint.tourKey,
          checkpoint.stepId,
          checkpoint.chapterIdx,
          checkpoint.stepIdx,
          checkpoint.cueIdx,
          checkpoint.completedMask,
          checkpoint.isCompleted ? 1 : 0,
          checkpoint.lastNodeId,
          checkpoint.updatedAt,
        );
    }

    currentMap[tourKey] = checkpoint;
    this.memoryProgress.set(userId, currentMap);
    this.saveJsonFallback();
    return checkpoint;
  }

  resetCourseProgress(userId: number, tourKey: string): Record<string, CourseCheckpoint> {
    const cleanKey = String(tourKey || '').trim();
    if (!VALID_TOUR_KEYS.has(cleanKey)) {
      throw new Error(`Invalid tourKey '${cleanKey}'`);
    }
    if (this.db) {
      this.db
        .prepare('DELETE FROM course_progress WHERE user_id = ? AND tour_key = ?')
        .run(userId, cleanKey);
    }
    const currentMap = this.getUserProgress(userId);
    delete currentMap[cleanKey];
    this.memoryProgress.set(userId, currentMap);
    this.saveJsonFallback();
    return { ...currentMap };
  }

  private mergeClientProgress(
    userId: number,
    clientProgress: Record<string, Partial<CourseCheckpoint>>,
  ): void {
    const serverProgress = this.getUserProgress(userId);
    for (const [tourKey, cp] of Object.entries(clientProgress)) {
      if (!VALID_TOUR_KEYS.has(tourKey) || !cp || typeof cp !== 'object') continue;
      const existing = serverProgress[tourKey];
      const clientTime = cp.updatedAt ? Date.parse(cp.updatedAt) : 0;
      const serverTime = existing?.updatedAt ? Date.parse(existing.updatedAt) : 0;
      if (!existing || clientTime >= serverTime) {
        this.upsertCourseProgress(userId, {
          tourKey,
          stepId: cp.stepId ?? null,
          chapterIdx: cp.chapterIdx ?? 0,
          stepIdx: cp.stepIdx ?? 0,
          cueIdx: cp.cueIdx ?? 0,
          completedMask: cp.completedMask ?? 0,
          isCompleted: cp.isCompleted ?? false,
          lastNodeId: cp.lastNodeId ?? null,
        });
      }
    }
  }

  close(): void {
    if (this.db) {
      this.db.close();
    }
  }
}

export function createLearnServer(options: LearnServerOptions = {}): {
  server: Server;
  store: LearnAuthProgressStore;
} {
  const dbPath = options.dbPath ?? process.env.LEARN_DB_PATH ?? '/tmp/bexonia-learn-biology.sqlite';
  const sessionTtlSeconds = options.sessionTtlSeconds ?? DEFAULT_SESSION_TTL_SECONDS;
  const staticRoot = options.staticRoot ?? null;
  const store = new LearnAuthProgressStore(dbPath, sessionTtlSeconds);

  const server = createServer(async (req, res) => {
    const urlObj = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    const pathname = urlObj.pathname;
    const method = req.method || 'GET';

    try {
      if (pathname === '/api/health' && method === 'GET') {
        return sendJson(res, 200, {
          status: 'ok',
          service: 'bexonia-learn',
          auth: 'ready',
          inMemorySessions: store.memorySessions.size,
        });
      }

      if (pathname === '/api/auth/register' && method === 'POST') {
        const body = await readJsonBody(req);
        const result = store.registerUser({
          email: body.email,
          password: body.password,
          fullName: body.fullName,
          lang: body.lang,
          initialProgress: body.progress,
        });
        return sendJson(
          res,
          201,
          {
            authenticated: true,
            user: result.user,
            sessionExpiresAt: new Date(result.expiresAtMs).toISOString(),
            progress: result.progress,
          },
          {
            'Set-Cookie': formatSessionCookie(result.token, sessionTtlSeconds),
          },
        );
      }

      if (pathname === '/api/auth/login' && method === 'POST') {
        const body = await readJsonBody(req);
        const result = store.loginUser({
          email: body.email,
          password: body.password,
          initialProgress: body.progress,
        });
        return sendJson(
          res,
          200,
          {
            authenticated: true,
            user: result.user,
            sessionExpiresAt: new Date(result.expiresAtMs).toISOString(),
            progress: result.progress,
          },
          {
            'Set-Cookie': formatSessionCookie(result.token, sessionTtlSeconds),
          },
        );
      }

      if (pathname === '/api/auth/renew' && method === 'POST') {
        const cookies = parseCookies(req.headers.cookie);
        const token = cookies[SESSION_COOKIE_NAME];
        const session = store.resolveSession(token, true);
        if (!session) {
          return sendJson(res, 401, { authenticated: false, renewed: false, error: 'No active session' });
        }
        return sendJson(
          res,
          200,
          {
            authenticated: true,
            renewed: true,
            user: session.user,
            sessionExpiresAt: new Date(session.expiresAtMs).toISOString(),
            progress: store.getUserProgress(session.userId),
          },
          {
            'Set-Cookie': formatSessionCookie(session.tokenRaw, sessionTtlSeconds),
          },
        );
      }

      if (pathname === '/api/auth/logout' && method === 'POST') {
        const cookies = parseCookies(req.headers.cookie);
        const token = cookies[SESSION_COOKIE_NAME];
        store.logoutSession(token);
        return sendJson(
          res,
          200,
          { authenticated: false },
          {
            'Set-Cookie': formatSessionCookie('', 0),
          },
        );
      }

      if (pathname === '/api/progress' && method === 'GET') {
        const cookies = parseCookies(req.headers.cookie);
        const token = cookies[SESSION_COOKIE_NAME];
        const session = store.resolveSession(token, true);
        if (!session) {
          return sendJson(res, 200, {
            authenticated: false,
            user: null,
            sessionExpiresAt: null,
            progress: {},
          });
        }
        return sendJson(
          res,
          200,
          {
            authenticated: true,
            user: session.user,
            sessionExpiresAt: new Date(session.expiresAtMs).toISOString(),
            progress: store.getUserProgress(session.userId),
          },
          {
            'Set-Cookie': formatSessionCookie(session.tokenRaw, sessionTtlSeconds),
          },
        );
      }

      if (pathname === '/api/progress' && method === 'PUT') {
        const cookies = parseCookies(req.headers.cookie);
        const token = cookies[SESSION_COOKIE_NAME];
        const session = store.resolveSession(token, true);
        if (!session) {
          return sendJson(res, 401, { authenticated: false, error: 'Authentication required' });
        }
        const body = await readJsonBody(req);
        const checkpoint = store.upsertCourseProgress(session.userId, {
          tourKey: body.tourKey,
          stepId: body.stepId,
          chapterIdx: body.chapterIdx,
          stepIdx: body.stepIdx,
          cueIdx: body.cueIdx,
          completedMask: body.completedMask,
          isCompleted: body.isCompleted,
          lastNodeId: body.lastNodeId,
        });
        return sendJson(
          res,
          200,
          {
            ok: true,
            checkpoint,
            progress: store.getUserProgress(session.userId),
            sessionExpiresAt: new Date(session.expiresAtMs).toISOString(),
          },
          {
            'Set-Cookie': formatSessionCookie(session.tokenRaw, sessionTtlSeconds),
          },
        );
      }

      if (pathname === '/api/progress/reset' && method === 'POST') {
        const cookies = parseCookies(req.headers.cookie);
        const token = cookies[SESSION_COOKIE_NAME];
        const session = store.resolveSession(token, true);
        if (!session) {
          return sendJson(res, 401, { authenticated: false, error: 'Authentication required' });
        }
        const body = await readJsonBody(req);
        const progress = store.resetCourseProgress(session.userId, body.tourKey);
        return sendJson(
          res,
          200,
          {
            ok: true,
            tourKey: body.tourKey,
            progress,
            sessionExpiresAt: new Date(session.expiresAtMs).toISOString(),
          },
          {
            'Set-Cookie': formatSessionCookie(session.tokenRaw, sessionTtlSeconds),
          },
        );
      }

      if (staticRoot && (method === 'GET' || method === 'HEAD')) {
        const cleanPath = normalize(pathname === '/' ? '/cell_explorer.html' : pathname).replace(/^(\.\.(\/|\\|$))+/, '');
        const filePath = join(staticRoot, cleanPath);
        if (filePath.startsWith(staticRoot) && existsSync(filePath) && statSync(filePath).isFile()) {
          const ext = extname(filePath);
          res.writeHead(200, {
            'Content-Type': MIME_BY_EXT[ext] ?? 'application/octet-stream',
            'Cache-Control': 'no-cache',
          });
          if (method === 'HEAD') {
            res.end();
          } else {
            res.end(readFileSync(filePath));
          }
          return;
        }
      }

      sendJson(res, 404, { error: 'Not found' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      const status =
        message.includes('already exists') ? 409 :
        message.includes('Invalid email or password') ? 401 :
        400;
      sendJson(res, status, { error: message });
    }
  });

  return { server, store };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === normalize(process.argv[1]);
if (isMain) {
  const port = Number(process.env.PORT || 3001);
  const host = process.env.HOST || '127.0.0.1';
  const dbPath = process.env.LEARN_DB_PATH || '/tmp/bexonia-learn-biology.sqlite';
  const { server } = createLearnServer({ dbPath, port, host });
  server.listen(port, host, () => {
    console.log(`[bexonia-learn-api] Listening on http://${host}:${port} (db=${dbPath})`);
  });
}
