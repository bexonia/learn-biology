# 04 — Optional User Accounts & Per-Model Course Progress Sync

**Iteration:** `04` (Non-Blocking Optional Registration, Full Account Persistence & Per-Cell/Virus Step Resume)  
**Status:** ⏸️ **Pending / Planned**  
**Parent Index:** [`roadmaps/README.md`](./README.md)  
**Previous Step:** [`03-guided-tour-voice-cloning-and-tts-narration.md`](./03-guided-tour-voice-cloning-and-tts-narration.md)

---

## 1. Executive Summary & Goal

Provide a **100% optional, non-blocking authentication and course progress backend** for `learn-biology` (`https://learn.bexonia.com`) so visitors can optionally register and keep track of their guided tutorials across all **10 biological models**:

1. **Never Block or Gate the Experience (100% Optional Login):**
   - All 3D models, interactive organelles, and guided tours remain **completely open by default without requiring login**.
   - Anonymous visitors automatically have their step progress saved locally in `localStorage`.
   - A subtle header button (**`Save Progress / Sign In`** · **`Guardar Progreso / Iniciar Sesión`**) lets users register or sign in **only if they want to track their courses and sync checkpoints across devices**.
2. **Save Email, Optional Reference Name & Course Progress:**
   - Persist `email` (`TEXT UNIQUE NOT NULL`), `full_name` (`TEXT`, optional reference name), `preferred_lang` (`en` / `es`), and a salted `scrypt` password hash (`password_salt` + `password_hash`).
   - Persist every user's exact progress for each cell and virus (`tourKey`, `chapterIdx`, `stepIdx`, `cueIdx`, `completedMask`, `completedAt`, `lastNodeId`, `updatedAt`).
3. **Per-Cell & Per-Virus Course Resume (`10` Biological Models):**
   - Track progress independently across all **10 courses/tutorials** (`euk`, `prok`, `t4`, `sars`, `hiv`, `flu`, `ebola`, `zika`, `rabies`, `measles`).
   - If a user leaves **Eukaryotic Cell** at *Chapter 3 · Step 2* and **HIV-1** at *Chapter 2 · Step 4*, they can switch between organisms at any time and click **`▶ Resume (Ch 3 · Step 2)`** (`▶ Reanudar (Cap 3 · Paso 2)`) to pick up right where they left off.

---

## 2. Complexity & Architecture Assessment

Introducing this into `learn-biology` is **very simple (~250 lines of backend TypeScript + ~120 lines of frontend Effect service code)** because:

1. **Proven Pattern from `bexonia/landing`:**
   - Runs a lightweight Node.js 22 API (`backend/server.ts`) alongside `nginx` inside the container, using `node:http`, `node:crypto` (`scrypt`, `timingSafeEqual`, `randomBytes`), and either built-in `node:sqlite` or in-namespace PostgreSQL 16 (`pg`).
2. **Existing Tour Hooks in `src/pages/cell_explorer.ts`:**
   - [`TourService`](../src/core/tour_service.ts) and [`cell_explorer.ts`](../src/pages/cell_explorer.ts#L4540) already expose `tour.goTo(chapterIdx, stepIdx)` and reactive state for the active model (`tourKey`), chapter, step, and cue.

### Database Option Comparison

| Option | Footprint (`RAM` / `Disk`) | Dependencies | K8s `bexonia-learn` Integration | Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: In-Namespace PostgreSQL 16 (`bexonia-learn-postgres`)** | **`~60 MB` RAM** · `1Gi–2Gi` PVC | `pg` npm package (identical to [`bexonia/landing`](../../landing/backend/server.ts)) | Supports `replicas = 2` web pods in `bexonia-learn` while staying 100% inside the namespace `NetworkPolicy` (`podSelector: {}`) | **🏆 Recommended (Matches `bexonia/landing` & Supports Multi-Replica Web Pods)** |
| **Option B: Built-in `node:sqlite` (`WAL` mode + `1Gi` PVC)** | **`~15 MB` RAM** · single `/data/learn.sqlite` file | **0 npm packages** (built into Node.js 22) | Single pod with `PersistentVolumeClaim`; zero extra database containers | **🏆 Best for Single-Replica Minimal Footprint** |

---

## 3. Authentication & Course Sync Flow

```mermaid
sequenceDiagram
    participant Browser as Browser (Cell Explorer)
    participant Local as Browser localStorage
    participant API as learn-biology API (Node.js 22)
    participant DB as Database (PostgreSQL / SQLite)

    Note over Browser,Local: 1. Anonymous Exploration (No Login Required)
    Browser->>Local: Save step checkpoint { tourKey: "euk", chapterIdx: 1, stepIdx: 2 }

    Note over Browser,DB: 2. Optional Registration / Sign In
    Browser->>API: POST /api/auth/register { email, password, fullName?, localProgress }
    API->>API: salt = randomBytes(16), hash = scrypt(password, salt, 64)
    API->>DB: INSERT INTO users (email, full_name, password_salt, password_hash, preferred_lang)
    API->>DB: UPSERT localProgress into course_progress
    API->>DB: INSERT INTO user_sessions (token_hash, user_id, expires_at)
    API-->>Browser: Set-Cookie: learn_session=<token>; HttpOnly; Secure; SameSite=Strict

    Note over Browser,DB: 3. Automatic Per-Step Course Tracking & Resume
    Browser->>API: PUT /api/progress { tourKey: "hiv", chapterIdx: 2, stepIdx: 3, cueIdx: 1, completedMask: 7 }
    API->>DB: UPSERT INTO course_progress (user_id, tour_key, chapter_idx, step_idx, cue_idx, completed_mask)
    API-->>Browser: 200 OK { saved: true }
```

---

## 4. Simple Database Schema (3 Tables)

```sql
-- 1. Registered Users (email + optional reference name + salted scrypt password)
CREATE TABLE IF NOT EXISTS users (
  id              BIGSERIAL PRIMARY KEY,
  email           VARCHAR(255) UNIQUE NOT NULL, -- Normalized lowercase email
  full_name       VARCHAR(255),                 -- Optional reference name (nullable)
  password_salt   BYTEA NOT NULL,               -- 16 random bytes
  password_hash   BYTEA NOT NULL,               -- 64-byte scrypt digest
  preferred_lang  VARCHAR(2) NOT NULL DEFAULT 'en',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);

-- 2. Per-Organism / Per-Course Progress (1 row per user × biological model)
CREATE TABLE IF NOT EXISTS course_progress (
  user_id         BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tour_key        VARCHAR(16) NOT NULL,         -- 'euk'|'prok'|'t4'|'sars'|'hiv'|'flu'|'ebola'|'zika'|'rabies'|'measles'
  chapter_idx     INT NOT NULL DEFAULT 0,       -- Last active chapter index (0-based)
  step_idx        INT NOT NULL DEFAULT 0,       -- Last active step index within chapter (0-based)
  cue_idx         INT NOT NULL DEFAULT 0,       -- Last active subtitle cue index (0-based)
  completed_mask  BIGINT NOT NULL DEFAULT 0,    -- Bitmask of completed steps in this course
  is_completed    BOOLEAN NOT NULL DEFAULT FALSE,
  last_node_id    VARCHAR(64),                  -- Last inspected 3D node (e.g. 'mitochondria', 'hiv-capsid')
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, tour_key)
);

-- 3. Opaque Sessions (HttpOnly cookie tokens)
CREATE TABLE IF NOT EXISTS user_sessions (
  token_hash      CHAR(64) PRIMARY KEY,         -- SHA-256(raw_session_token)
  user_id         BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at      TIMESTAMPTZ NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

## 5. REST API Specification

| Method & Path | Request Body | Response | Purpose |
| :--- | :--- | :--- | :--- |
| `POST /api/auth/register` | `{ email, password, fullName?, lang?, progress? }` | `201 { user: { email, fullName, lang }, progress }` | Registers account (with optional `fullName`), hashes password with `scrypt`, merges any anonymous `localStorage` course progress, and sets `HttpOnly` session cookie. |
| `POST /api/auth/login` | `{ email, password, progress? }` | `200 { user: { email, fullName, lang }, progress }` | Verifies `scrypt` password in constant time, updates `last_login_at`, merges local progress, and returns all saved cell/virus checkpoints. |
| `POST /api/auth/logout` | `{}` | `200 { authenticated: false }` | Deletes session from `user_sessions` and clears cookie (`localStorage` remains usable anonymously). |
| `GET /api/progress` | *(Session Cookie)* | `200 { authenticated, user?, progress: Record<TourKey, CourseCheckpoint> }` | Hydrates user profile and saved checkpoints for all 10 biological models on page load. |
| `PUT /api/progress` | `{ tourKey, chapterIdx, stepIdx, cueIdx, completedMask, isCompleted?, lastNodeId? }` | `200 { ok: true, updatedAt }` | Upserts the user's checkpoint whenever a guided tour advances a step or changes chapter. |

---

## 6. Non-Intrusive Frontend UX (`cell_explorer.html` + `src/core/progress_service.ts`)

1. **Always-On Local Persistence (`localStorage`):**
   - Every visitor (logged in or not) gets automatic checkpoint saving in `localStorage` (`bexonia_learn_progress_v1`).
2. **Optional Top-Bar Pill:**
   - When anonymous: displays a compact **`☁ Track Progress / Sign In`** (`☁ Guardar Progreso / Iniciar Sesión`) button in the header.
   - When signed in: displays the user's reference name (or email if name was omitted) + **`✓ Synced`** badge + course completion count (e.g., `3/10 Models`).
3. **Registration / Sign-In Modal (Optional Fields Clearly Marked):**
   - **Email** *(required for login)*
   - **Password** *(required for login)*
   - **Name / Nombre** *(optional — just for reference)*
4. **Per-Model Resume Button in the Guided Tour Bar:**
   - Whenever the user selects a cell or virus (`Eukaryotic Cell`, `Prokaryotic Cell`, `T4 Phage`, `SARS-CoV-2`, `HIV-1`, `Influenza A`, `Ebola`, `Zika`, `Rabies`, `Measles`) where `chapterIdx > 0 || stepIdx > 0`, the tour bar offers:
     - **`▶ Resume (Ch X · Step Y)`** (`▶ Reanudar (Cap X · Paso Y)`) — jumps camera and tour state directly to the saved step.
     - **`↺ Restart`** (`↺ Reiniciar`) — starts from Chapter 1 · Step 1.

---

## 7. Verification Gates

- **Unit & API Verification (`tests/verify_all.ts`):**
  - Verify `POST /api/auth/register` works both **with** `fullName` and **without** `fullName` (`null`).
  - Verify `PUT /api/progress` independently stores and restores checkpoints across multiple `tourKey`s (`euk` at Ch 2 Step 3, `hiv` at Ch 1 Step 4) without overwriting other organisms.
  - Verify anonymous users can use all 10 models and guided tours with zero authentication prompts or blockers.
- **Headless Chrome E2E Verification:**
  - Advance tour on `euk` to Chapter 2 Step 1, reload page, click **Resume**, and verify camera target, active chapter, and step index match Chapter 2 Step 1.
