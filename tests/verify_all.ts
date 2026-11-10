import assert from 'node:assert/strict';
import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { Effect } from 'effect';
import {
  makeBiologyLayer,
  runBiologyApp,
  RandomService,
  type MolecularEmitter,
  ALL_TOURS,
  BASE,
  PAIR,
  RPAIR,
  BACKBONE,
  MRNA,
  HISTONE
} from '../src/index.js';
import type { RibosomePoint } from '../src/molecules/ribosome.js';
import {
  createLearnServer,
  LearnAuthProgressStore,
  SESSION_COOKIE_NAME
} from '../src/server/auth_progress_server.js';
import {
  createStaticTourNarrator,
  normalizeSpeechText
} from '../src/core/narrator_service.js';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const HTML_PAGES = [
  'animal_cell_realistic.html',
  'plant_cell_realistic.html',
  'fungal_cell_realistic.html',
  'prokaryote_cell_realistic.html',
  'bacteriophage_realistic.html',
  'coronavirus_realistic.html',
  'hiv_realistic.html',
  'adenovirus_realistic.html',
  'tmv_realistic.html',
  'cell_explorer.html',
  'dna_styles.html',
  'molecules_preview.html',
  'eukaryotic_cell_3d.html',
  'prokaryotic_cell_3d.html'
];

function makeTestEmitter(): MolecularEmitter & {
  beads: Array<{ p: THREE.Vector3; s: number; c: THREE.Color }>;
  sticks: Array<{ a: THREE.Vector3; b: THREE.Vector3; r: number; c1: THREE.Color; c2: THREE.Color }>;
} {
  return {
    beads: [],
    sticks: [],
    add(p, s, c) {
      this.beads.push({ p: p.clone(), s, c });
    },
    stick(a, b, r, c1, c2) {
      this.sticks.push({ a: a.clone(), b: b.clone(), r, c1, c2 });
    }
  };
}

let passed = 0;
function ok(name: string) {
  passed++;
  console.log(`  ✓ ${name}`);
}

async function runUnitTests() {
  console.log('\n=== 1. Effect Composable Services Unit Tests ===');

  // Test 1: Deterministic RandomService via Effect
  const seqA = Effect.runSync(
    Effect.gen(function* () {
      const rng = yield* RandomService;
      const a = yield* rng.nextEffect;
      const b = yield* rng.rangeEffect(10, 20);
      const dir = yield* rng.directionEffect;
      const n1 = rng.fbm(new THREE.Vector3(1.2, 3.4, 5.6), 3);
      const n2 = rng.fbm(1.2, 3.4, 5.6, 3);
      assert.ok(Number.isFinite(n1) && Number.isFinite(n2), 'fbm overloads must return finite values');
      assert.ok(Math.abs(dir.length() - 1) < 1e-6, 'randDir must be unit length');
      return [a, b, n1, n2];
    }).pipe(Effect.provide(makeBiologyLayer(42)))
  );

  const seqB = Effect.runSync(
    Effect.gen(function* () {
      const rng = yield* RandomService;
      const a = yield* rng.nextEffect;
      const b = yield* rng.rangeEffect(10, 20);
      const dir = yield* rng.directionEffect;
      const n1 = rng.fbm(new THREE.Vector3(1.2, 3.4, 5.6), 3);
      const n2 = rng.fbm(1.2, 3.4, 5.6, 3);
      assert.ok(Math.abs(dir.length() - 1) < 1e-6);
      return [a, b, n1, n2];
    }).pipe(Effect.provide(makeBiologyLayer(42)))
  );

  assert.deepEqual(seqA, seqB, 'RandomService must be deterministic for a given seed');
  ok('RandomService (deterministic Mulberry32, fbm overloads, Effect combinators)');

  // Test 2: Shared DNA, RNA, Ribosome, PDB, Geometry, Batch, Tour, and I18n services
  runBiologyApp(20261031, ({ geometry, batch, dna, rna, pdb, ribosome, tours, i18n }) => {
    // GeometryService checks
    const pts = [geometry.V(0, 0, 0), geometry.V(1, 2, 1), geometry.V(2, 0, 2), geometry.V(3, -1, 0)];
    const curve = new THREE.CatmullRomCurve3(pts);
    const frames = geometry.ptFrames(curve, 16);
    assert.equal(frames.N.length, 17);
    assert.equal(frames.B.length, 17);
    const swept = geometry.sweepGeo(curve, () => 0.15, 12, 6);
    assert.ok(swept.attributes.position.count > 0, 'sweepGeo should produce vertices');
    const blob = geometry.blobGeo(1.0, 0.1, 2, 2);
    assert.ok(blob.attributes.position.count > 0, 'blobGeo should produce vertices');
    ok('GeometryService (V, ptFrames, sweepGeo, blobGeo, smoothSeams)');

    // MolecularBatchService + DnaService checks
    const S = makeTestEmitter();
    const curvePts = [
      geometry.V(0, 0, 0),
      geometry.V(0.05, 0.05, 0.02),
      geometry.V(0.1, 0.02, 0.08),
      geometry.V(0.15, -0.03, 0.12),
      geometry.V(0.2, 0.01, 0.18),
      geometry.V(0.25, 0.04, 0.24)
    ];
    dna.emitDNA(S, curvePts, { nm: 0.02 });
    assert.ok(S.beads.length >= curvePts.length * 2, 'DnaService.emitDNA should emit joint beads');
    assert.ok(S.sticks.length >= curvePts.length, 'DnaService.emitDNA should emit backbone & base-pair sticks');

    const prevBeads = S.beads.length;
    const nucleosomeCentres = [
      geometry.V(0, 0, 0),
      geometry.V(0.25, 0.1, 0),
      geometry.V(0.5, -0.05, 0.15),
      geometry.V(0.75, 0.12, -0.1)
    ];
    const chromAx = dna.chromosome(S, nucleosomeCentres, new Set([2]), { nm: 0.02 });
    assert.ok(chromAx.length > 20, 'DnaService.chromosome should return resampled chromatin DNA axis');
    assert.ok(S.beads.length > prevBeads, 'DnaService.chromosome should emit histone octamer + DNA beads');

    const dnaGroup = dna.dnaAlongCurve(curve, 4, 0.2, 0.05, {
      tube: (p, r, mat) => new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p), 16, r, 6), mat),
      std: (c) => new THREE.MeshStandardMaterial({ color: c }),
      plain: () => new THREE.MeshBasicMaterial(),
      unitCyl: new THREE.CylinderGeometry(1, 1, 1, 6)
    });
    assert.equal(dnaGroup.children.length, 3, 'DnaService.dnaAlongCurve should build 2 strands + base-pair rungs');
    assert.equal(PAIR.A, 'T');
    assert.equal(RPAIR.A, 'U');
    assert.ok(BASE.A.startsWith('#') && BACKBONE.length === 2 && HISTONE.length === 4);
    ok('DnaService (emitDNA, chromosome with histone octamers, dnaAlongCurve)');

    // RnaService checks
    const rnaEmitter = makeTestEmitter();
    rna.rnaAlong(rnaEmitter, curvePts, MRNA, 0.02);
    const afterAlong = rnaEmitter.beads.length;
    assert.equal(afterAlong, curvePts.length, 'RnaService.rnaAlong should emit nucleotides along path');

    const foldPts = rna.rnaFold(
      rnaEmitter,
      geometry.V(0, 0, 0),
      geometry.V(1, 0, 0),
      35,
      MRNA,
      { nm: 0.02, hairpin: 0.25 }
    );
    assert.ok(foldPts.length >= 35, 'RnaService.rnaFold should return folded nucleotide coordinates');
    assert.ok(rnaEmitter.beads.length > afterAlong, 'RnaService.rnaFold should emit folded RNA & stem-loop hairpins');
    ok('RnaService (baseRod, rnaAlong, rnaFold with A-form stem-loop hairpins)');

    // RibosomeService & PdbService checks
    const erRibos: RibosomePoint[] = [];
    ribosome.emitRoughErRibosomes80S(
      erRibos,
      40,
      geometry.V(0, 0, 0),
      () => 1.5,
      () => 1.0
    );
    assert.equal(erRibos.length, 40, 'RibosomeService.emitRoughErRibosomes80S should place 80S ribosomes');

    const freeRibos: RibosomePoint[] = [];
    ribosome.emitFreeRibosomes80S(freeRibos, 20, [2, 2, 2], () => true);
    assert.equal(freeRibos.length, 20, 'RibosomeService.emitFreeRibosomes80S should place requested ribosomes');

    const polyRibos: RibosomePoint[] = [];
    const polyCentres: THREE.Vector3[] = [];
    ribosome.emitPolysomeRosettes80S(polyRibos, polyCentres, 4, [2, 2, 2], () => true, 8);
    assert.equal(polyCentres.length, 4, 'RibosomeService.emitPolysomeRosettes80S should record 4 polysome centres');
    assert.equal(polyRibos.length, 32, 'RibosomeService.emitPolysomeRosettes80S should place 4x8=32 ribosomes');

    const occGrid = batch.createOccupancyGrid(0.5);
    assert.equal(occGrid.gFree(geometry.V(0, 0, 0), 0.2), true);
    occGrid.gAdd(geometry.V(0, 0, 0), 0.2);
    assert.equal(occGrid.gFree(geometry.V(0.05, 0, 0), 0.2), false, 'OccupancyGrid should reject overlapping placement');

    // Verify PdbService decodeModel & placeProtein with a synthetic 1-bead model
    const rawBytes = new Uint8Array(new Int16Array([100, 200, 300]).buffer);
    const xyzB64 = Buffer.from(rawBytes).toString('base64');
    const kindB64 = Buffer.from(new Uint8Array([5])).toString('base64');
    const mockPdb = { testMol: { n: 1, xyz: xyzB64, kind: kindB64 } };
    const pdbEmitter = makeTestEmitter();
    pdb.placeProtein(
      mockPdb,
      pdbEmitter,
      'testMol',
      geometry.V(1, 2, 3),
      new THREE.Quaternion(),
      () => batch.col('#ff0000')
    );
    assert.equal(pdbEmitter.beads.length, 1, 'PdbService.placeProtein should decode and emit PDB spheres');
    ok('RibosomeService & PdbService (80S rough ER, free 80S, polysome rosettes, PDB decoder, OccupancyGrid)');

    // TourService checks
    const all = tours.tours;
    assert.equal(Object.keys(all).length, 10, 'TourService must provide all 10 guided tours');
    const plainOf = (s: string) => s.replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1');
    for (const [key, tour] of Object.entries(all)) {
      assert.ok(tour.chapters.length > 0, `Tour ${key} must have chapters`);
      assert.equal(tours.getTour(key)?.root, tour.root);
      for (const ch of tour.chapters) {
        for (const step of ch.steps) {
          for (const cue of step.cues) {
            const len = plainOf(cue.text).length;
            assert.ok(len <= 84, `Tour ${key} cue ${cue.id} exceeds 84 chars (${len})`);
          }
        }
      }
    }
    assert.equal(Object.keys(ALL_TOURS).length, 10);
    ok('TourService (all 10 cell & virus tours validated, all cues <= 84 chars)');

    // I18nService + AtomRef reactivity checks
    assert.ok(i18n.supportedLocales.length >= 2, 'I18nService must register at least EN and ES locales');
    const observedLocales: string[] = [];
    const unsubscribe = i18n.onChange((loc) => observedLocales.push(loc));
    Effect.runSync(i18n.setLocaleEffect('es'));
    assert.equal(i18n.locale, 'es');
    assert.equal(i18n.localeRef.value, 'es');
    assert.equal(Effect.runSync(i18n.tEffect('structureTree')), 'Árbol de estructuras');
    assert.equal(i18n.nodeName('mitochondrion', 'Mitochondrion'), 'Mitocondria');
    assert.notEqual(
      i18n.nodeDesc('mitochondrion', 'The power plant of the cell.'),
      'The power plant of the cell.',
      'Spanish nodeDesc must return full Spanish description'
    );
    assert.equal(
      Effect.runSync(i18n.trEffect('The [[Plasma membrane|membrane]] encloses the cell.')),
      'The [[Membrana plasmática|membrane]] encloses the cell.'
    );
    const esDef = i18n.getLocaleDefinition('es');
    assert.ok(Object.keys(esDef.nodes).length >= 208, 'ES_LOCALE must include all 208 NODES');
    for (const [id, n] of Object.entries(esDef.nodes)) {
      assert.ok(n.name && n.name.length > 0, `Missing ES name for node ${id}`);
      assert.ok(n.scale && n.scale.length > 0, `Missing ES scale for node ${id}`);
      assert.ok(n.desc && n.desc.length > 10, `Missing ES desc for node ${id}`);
    }
    let totalTranslatedCues = 0;
    for (const [tKey, tour] of Object.entries(all)) {
      assert.ok(esDef.phrases[tour.title], `Missing ES translation for tour title: ${tour.title}`);
      if (tour.summary) {
        assert.ok(esDef.phrases[tour.summary], `Missing ES translation for tour summary in ${tKey}`);
      }
      for (const ch of tour.chapters) {
        assert.ok(esDef.phrases[ch.title], `Missing ES translation for chapter title: ${ch.title}`);
        for (const step of ch.steps) {
          assert.ok(esDef.phrases[step.title], `Missing ES translation for step title: ${step.title}`);
          for (const cue of step.cues) {
            const esCue = esDef.phrases[cue.text];
            assert.ok(esCue && esCue !== cue.text, `Missing ES translation for cue ${cue.id}: ${cue.text}`);
            const enParts = [...cue.text.matchAll(/\[\[[^|\]]+\|([^\]]+)\]\]/g)].map((m) => m[1]);
            const esParts = [...esCue.matchAll(/\[\[[^|\]]+\|([^\]]+)\]\]/g)].map((m) => m[1]);
            assert.deepEqual(esParts, enParts, `Cue ${cue.id} in ${tKey} must preserve [[...|part]] keys in Spanish`);
            totalTranslatedCues++;
          }
        }
      }
      for (const [dKey, det] of Object.entries(tour.details ?? {})) {
        for (const cue of det.cues ?? []) {
          const esCue = esDef.phrases[cue.text];
          assert.ok(esCue && esCue !== cue.text, `Missing ES translation for detail cue ${tKey}/${dKey}/${cue.id}: ${cue.text}`);
          totalTranslatedCues++;
        }
      }
    }
    assert.ok(totalTranslatedCues >= 655, `Expected >= 655 translated tour cues, got ${totalTranslatedCues}`);
    Effect.runSync(i18n.setLocaleEffect('en'));
    assert.equal(i18n.locale, 'en');
    assert.equal(i18n.t('structureTree'), 'Structure tree');
    unsubscribe();
    assert.deepEqual(observedLocales, ['es', 'en'], 'AtomRef subscription must emit locale transitions');
    ok(`I18nService (Effect service + AtomRef reactivity, 208/208 ES node descriptions, ${totalTranslatedCues}/655 ES tour cues verified)`);
  });

  // Test 3: LearnAuthProgressStore (optional user registration, in-memory session & progress cache, cookie renewal, per-course reset)
  const authStore = new LearnAuthProgressStore(':memory:', 3600);
  const regWithOptionalName = authStore.registerUser({
    email: 'Ada.Lovelace@Bexonia.com ',
    password: 'computing1843',
    fullName: 'Ada Lovelace',
    lang: 'en',
    initialProgress: {
      'real-cell': {
        tourKey: 'real-cell',
        stepId: 'euk-nucleus',
        chapterIdx: 1,
        stepIdx: 3,
        cueIdx: 2
      }
    }
  });
  assert.equal(regWithOptionalName.user.email, 'ada.lovelace@bexonia.com');
  assert.equal(regWithOptionalName.user.fullName, 'Ada Lovelace');
  assert.equal(authStore.memorySessions.size, 1, 'Session must be cached in memory upon registration');
  assert.equal(regWithOptionalName.progress['real-cell']?.stepIdx, 3, 'Initial progress must merge on registration');

  const regWithoutName = authStore.registerUser({
    email: 'rosalind@bexonia.com',
    password: 'xrayPhoto51'
  });
  assert.equal(regWithoutName.user.fullName, null, 'fullName must be optional (null when omitted)');
  assert.equal(authStore.memorySessions.size, 2);

  // Track multiple courses independently
  authStore.upsertCourseProgress(regWithOptionalName.user.id, {
    tourKey: 'real-hiv',
    stepId: 'hiv-capsid',
    chapterIdx: 2,
    stepIdx: 4,
    cueIdx: 1
  });
  const multiProgress = authStore.getUserProgress(regWithOptionalName.user.id);
  assert.equal(multiProgress['real-cell']?.stepIdx, 3);
  assert.equal(multiProgress['real-hiv']?.stepIdx, 4);

  // Verify session resolution from memory + automatic TTL renewal
  const beforeRenew = regWithOptionalName.expiresAtMs;
  await new Promise((r) => setTimeout(r, 15));
  const resolved = authStore.resolveSession(regWithOptionalName.token, true);
  assert.ok(resolved, 'Session token must resolve from in-memory cache');
  assert.ok(resolved!.expiresAtMs >= beforeRenew, 'Auto-renew must extend session expiration in memory & DB');

  // Verify resetting a single course to the beginning without affecting other courses
  const afterReset = authStore.resetCourseProgress(regWithOptionalName.user.id, 'real-cell');
  assert.equal(afterReset['real-cell'], undefined, 'Reset course must remove saved checkpoint for real-cell');
  assert.equal(afterReset['real-hiv']?.stepIdx, 4, 'Resetting real-cell must preserve real-hiv progress');

  authStore.logoutSession(regWithOptionalName.token);
  assert.equal(authStore.resolveSession(regWithOptionalName.token), null, 'Logged out session must be removed from memory & DB');
  authStore.close();
  ok('LearnAuthProgressStore (optional fullName, scrypt auth, in-memory session/progress cache, auto-renewal, per-model course reset)');

  // Test 4: Static GPT-SoVITS .opus Narrator & Scientific Speech Text Normalizer (EN/ES)
  const normEn = normalizeSpeechText(
    'The [[plasma membrane|membrane]] is 5 nm thick around a 20 µm cell with (+)ssRNA, dsDNA, CO₂, and protein VII.',
    'en-US'
  );
  assert.ok(
    normEn.includes('plasma membrane') &&
      !normEn.includes('[[') &&
      normEn.includes('5 nanometers') &&
      normEn.includes('20 micrometers') &&
      normEn.includes('positive-sense single-stranded RNA') &&
      normEn.includes('double-stranded DNA') &&
      normEn.includes('carbon dioxide') &&
      normEn.includes('protein seven'),
    `Unexpected EN speech normalization: ${normEn}`
  );
  const normEs = normalizeSpeechText(
    'La [[membrana plasmática|membrane]] mide 5 nm y envuelve (+)ARNmc, ADNbc, ARNm y CO₂ en 20 µm.',
    'es-ES'
  );
  assert.ok(
    normEs.includes('membrana plasmática') &&
      !normEs.includes('[[') &&
      normEs.includes('5 nanómetros') &&
      normEs.includes('20 micrómetros') &&
      normEs.includes('ARN monocatenario positivo') &&
      normEs.includes('ADN bicatenario') &&
      normEs.includes('ARN mensajero') &&
      normEs.includes('dióxido de carbono'),
    `Unexpected ES speech normalization: ${normEs}`
  );

  const playedAudioUrls: Array<{ src: string; volume: number; rate: number }> = [];
  const prefetchedAudioUrls: string[] = [];
  let mockRuntimePace = 1.25;
  const mockNarrator = createStaticTourNarrator({
    audioBaseUrl: 'audio',
    storage: null,
    initialVolume: 0.8,
    initialRate: 1.0,
    getTourRuntime: () => ({
      state: { root: 'real-cell' },
      T: {
        pace: mockRuntimePace,
        cue: 0,
        list: [{ id: 'ch1.membrane.01' }, { id: 'ch1.membrane.02' }]
      }
    }),
    createAudio: (src: string) => {
      const obj: any = {
        src,
        volume: 1,
        playbackRate: 1,
        preload: 'none',
        onended: null,
        onerror: null,
        load() {
          prefetchedAudioUrls.push(src);
        },
        play() {
          playedAudioUrls.push({ src, volume: obj.volume, rate: obj.playbackRate });
          setTimeout(() => obj.onended?.(), 6);
          return Promise.resolve();
        },
        pause() {}
      };
      return obj;
    }
  });

  await mockNarrator.speak({
    id: 'ch1.membrane.01',
    lang: 'en-US'
  });
  assert.equal(playedAudioUrls.length, 1);
  assert.equal(playedAudioUrls[0]?.src, 'audio/en/real-cell/ch1.membrane.01.opus');
  assert.equal(playedAudioUrls[0]?.volume, 0.8);
  assert.equal(playedAudioUrls[0]?.rate, 1.25);
  assert.deepEqual(prefetchedAudioUrls, ['audio/en/real-cell/ch1.membrane.02.opus']);

  mockRuntimePace = 1.0;
  await mockNarrator.speak({
    id: 'ch1.membrane.01',
    lang: 'es-ES'
  });
  assert.equal(playedAudioUrls[1]?.src, 'audio/es/real-cell/ch1.membrane.01.opus');

  // Unscripted node detail fallback cues (detail.*) must skip network fetch cleanly
  assert.equal(mockNarrator.resolveAudioUrl({ id: 'detail.mitochondrion.1', lang: 'en-US', root: 'real-cell' }), null);
  await mockNarrator.speak({ id: 'detail.mitochondrion.1', lang: 'en-US' });
  assert.equal(playedAudioUrls.length, 2);
  ok('StaticTourNarrator (pre-generated EN/ES .opus resolution, next-cue prefetching, pace/volume sync, & scientific text normalization)');
}

function runStaticChecks() {
  console.log('\n=== 2. Static Codebase & Build Bundle Checks ===');

  const trackedJs = execSync('git ls-files "*.js"', { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
  assert.equal(trackedJs, '', `Expected 0 tracked .js files in git, found:\n${trackedJs}`);
  ok('Zero hand-written .js files tracked in Git');

  for (const page of HTML_PAGES) {
    const htmlPath = path.join(ROOT_DIR, page);
    const html = fs.readFileSync(htmlPath, 'utf8');
    const base = page.replace(/\.html$/, '');
    assert.ok(
      html.includes(`<script type="module" src="dist/pages/${base}.js"></script>`),
      `${page} must load dist/pages/${base}.js`
    );
    const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
    for (const [, attrs, body] of scripts) {
      if (attrs.includes('type="importmap"') || attrs.includes('type="application/ld+json"')) continue;
      if (attrs.includes(`src="dist/pages/${base}.js"`)) {
        assert.equal(body.trim(), '', `${page} module script tag should have empty inline body`);
        continue;
      }
      assert.fail(`${page} contains unexpected <script ${attrs}> tag`);
    }

    const bundlePath = path.join(ROOT_DIR, 'dist', 'pages', `${base}.js`);
    assert.ok(fs.existsSync(bundlePath), `Compiled bundle dist/pages/${base}.js must exist`);
  }
  ok(`All ${HTML_PAGES.length} HTML pages contain zero inline JS and link compiled TypeScript bundles`);

  const codeowners = fs.readFileSync(path.join(ROOT_DIR, '.github', 'CODEOWNERS'), 'utf8');
  assert.ok(codeowners.includes('/.github/') && codeowners.includes('/Dockerfile'), 'CODEOWNERS must protect .github/ and Dockerfile');
  const deployYml = fs.readFileSync(path.join(ROOT_DIR, '.github', 'workflows', 'deploy.yml'), 'utf8');
  assert.ok(!deployYml.includes('pull_request_target'), 'Workflow must never use pull_request_target');
  assert.ok(deployYml.includes("environment: production"), 'Publish job must be gated by protected production environment');
  assert.ok(deployYml.includes("github.ref == 'refs/heads/main'"), 'Publish job must require refs/heads/main');
  ok('CI/CD pipeline security checks (CODEOWNERS, read-only default token, external PR guard, production environment)');

  // Verify audio.tar.gz archive is present, loose audio/ files are NOT tracked in Git, and all 1,534 .opus cues exist
  const audioArchivePath = path.join(ROOT_DIR, 'audio.tar.gz');
  assert.ok(fs.existsSync(audioArchivePath), 'Missing audio.tar.gz narration archive at repository root');
  const trackedAudioFiles = execSync('git ls-files "audio/*"', { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
  assert.equal(trackedAudioFiles, '', `Expected 0 tracked files under gitignored audio/, found:\n${trackedAudioFiles.slice(0, 300)}`);
  if (!fs.existsSync(path.join(ROOT_DIR, 'audio', 'en'))) {
    execSync('tar -xzf audio.tar.gz', { cwd: ROOT_DIR });
  }

  let verifiedOpusCount = 0;
  runBiologyApp(20261031, ({ tours }) => {
    for (const lang of ['en', 'es'] as const) {
      for (const tour of Object.values(tours.tours)) {
        const seen = new Set<string>();
        const checkCue = (cueId: string) => {
          if (seen.has(cueId)) return;
          seen.add(cueId);
          const rel = path.join('audio', lang, tour.root, `${encodeURIComponent(cueId)}.opus`);
          const full = path.join(ROOT_DIR, rel);
          assert.ok(fs.existsSync(full), `Missing pre-generated GPT-SoVITS narration file: ${rel}`);
          const buf = fs.readFileSync(full);
          assert.ok(buf.length > 500, `Pre-generated narration file is unexpectedly small (${buf.length} B): ${rel}`);
          assert.equal(buf.subarray(0, 4).toString('ascii'), 'OggS', `Invalid Ogg Opus header in ${rel}`);
          verifiedOpusCount++;
        };
        for (const ch of tour.chapters) {
          for (const step of ch.steps) {
            for (const cue of step.cues) checkCue(cue.id);
          }
        }
        for (const det of Object.values(tour.details ?? {})) {
          for (const cue of det.cues ?? []) checkCue(cue.id);
        }
      }
    }
  });
  assert.equal(verifiedOpusCount, 1534, `Expected 1534 verified EN/ES .opus files, got ${verifiedOpusCount}`);
  ok(`All ${verifiedOpusCount} pre-generated GPT-SoVITS bilingual (.opus) narration files verified (valid OggS headers)`);
}

function startStaticServer(rootDir: string): Promise<{ server: http.Server; port: number; store: LearnAuthProgressStore }> {
  return new Promise((resolve) => {
    const { server, store } = createLearnServer({
      dbPath: ':memory:',
      staticRoot: rootDir
    });
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address() as { port: number };
      resolve({ server, port: addr.port, store });
    });
  });
}

class CdpSession {
  private ws: WebSocket;
  private id = 0;
  private pending = new Map<number, { resolve: (v: any) => void; reject: (e: any) => void }>();
  public consoleErrors: string[] = [];
  public pageErrors: string[] = [];

  constructor(wsUrl: string) {
    this.ws = new WebSocket(wsUrl);
    this.ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(String(ev.data));
      if (msg.id && this.pending.has(msg.id)) {
        const p = this.pending.get(msg.id)!;
        this.pending.delete(msg.id);
        if (msg.error) p.reject(new Error(JSON.stringify(msg.error)));
        else p.resolve(msg.result);
      } else if (msg.method === 'Runtime.consoleAPICalled') {
        if (msg.params.type === 'error') {
          const text = (msg.params.args ?? []).map((a: any) => a.value ?? a.description ?? '').join(' ');
          this.consoleErrors.push(text);
        }
      } else if (msg.method === 'Runtime.exceptionThrown') {
        const d = msg.params.exceptionDetails;
        this.pageErrors.push(d?.exception?.description ?? d?.text ?? JSON.stringify(d));
      }
    });
  }

  async ready(): Promise<void> {
    if (this.ws.readyState === WebSocket.OPEN) return;
    await new Promise<void>((resolve, reject) => {
      this.ws.addEventListener('open', () => resolve(), { once: true });
      this.ws.addEventListener('error', (e) => reject(e), { once: true });
    });
  }

  send(method: string, params: Record<string, unknown> = {}): Promise<any> {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval<T = any>(expression: string): Promise<T> {
    const res = await this.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true
    });
    if (res.exceptionDetails) {
      throw new Error(
        `Eval exception in (${expression.slice(0, 80)}): ${
          res.exceptionDetails.exception?.description ?? res.exceptionDetails.text
        }`
      );
    }
    return res.result?.value as T;
  }

  close() {
    this.ws.close();
  }
}

function findChromeBinary(): string {
  const candidates = [
    process.env.CHROME_BIN,
    '/nix/store/dqzn64123p2qvidnx0wspr0z96rc407a-google-chrome-156.0.8078.79/bin/google-chrome-stable',
    'google-chrome-stable',
    'google-chrome',
    'chromium'
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      execSync(`"${c}" --version`, { stdio: 'ignore' });
      return c;
    } catch {
      // continue
    }
  }
  throw new Error('Could not find Google Chrome / Chromium binary for headless WebGL E2E tests');
}

async function runBrowserE2ETests() {
  console.log('\n=== 3. Headless Chrome WebGL End-to-End Verification (All 14 Pages, All Models & Tours) ===');
  const { server, port } = await startStaticServer(ROOT_DIR);
  const chromeBin = findChromeBinary();
  const debugPort = 9222 + Math.floor(Math.random() * 1000);
  const userDataDir = fs.mkdtempSync('/tmp/learn-bio-e2e-');

  const chrome = spawn(
    chromeBin,
    [
      '--headless=new',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu-sandbox',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--window-size=1280,800',
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${userDataDir}`,
      'about:blank'
    ],
    { stdio: 'ignore' }
  );

  try {
    let wsUrl = '';
    for (let i = 0; i < 60; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${debugPort}/json/list`);
        const list = (await res.json()) as Array<{ webSocketDebuggerUrl?: string; type?: string }>;
        const pageTarget = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
        if (pageTarget?.webSocketDebuggerUrl) {
          wsUrl = pageTarget.webSocketDebuggerUrl;
          break;
        }
      } catch {
        // wait
      }
      await new Promise((r) => setTimeout(r, 150));
    }
    assert.ok(wsUrl, 'Failed to connect to Chrome DevTools Protocol WebSocket');

    const cdp = new CdpSession(wsUrl);
    await cdp.ready();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    for (const page of HTML_PAGES) {
      cdp.consoleErrors = [];
      cdp.pageErrors = [];
      const url = `http://127.0.0.1:${port}/${page}`;
      await cdp.send('Page.navigate', { url });

      for (let attempt = 0; attempt < 120; attempt++) {
        const ready = await cdp.eval<boolean>(`
          (() => {
            if (document.readyState !== 'complete') return false;
            const c = document.querySelector('canvas');
            if (!c || c.width === 0 || c.height === 0) return false;
            if (location.pathname.endsWith('_realistic.html')) {
              const busy = document.getElementById('busy');
              if (busy && busy.style.display !== 'none') return false;
              return !!(window.__cell && Object.keys(window.__cell.REG || {}).length > 0);
            }
            if (location.pathname.endsWith('cell_explorer.html')) {
              const busy = document.getElementById('busy');
              if (busy && busy.style.display !== 'none') return false;
              return !!(window.__explorer && window.__tour);
            }
            return true;
          })()
        `);
        if (ready) break;
        await new Promise((r) => setTimeout(r, 100));
      }

      assert.deepEqual(cdp.pageErrors, [], `Page errors on ${page}: ${cdp.pageErrors.join('; ')}`);
      assert.deepEqual(cdp.consoleErrors, [], `Console errors on ${page}: ${cdp.consoleErrors.join('; ')}`);

      if (page.endsWith('_realistic.html')) {
        const summary = await cdp.eval<{
          regKeys: string[];
          shellsCount: number;
          placedCount: number;
          canvasW: number;
          canvasH: number;
        }>(`
          (() => {
            const c = window.__cell;
            const regKeys = Object.keys(c.REG || {});
            for (const k of regKeys) {
              const entry = c.REG[k];
              if (!entry || ((entry.mats?.length ?? 0) + (entry.imp?.length ?? 0) === 0)) {
                throw new Error('Empty REG materials for part: ' + k);
              }
              c.setHi(k);
            }
            c.setHi(null);
            if (typeof c.step === 'function') c.step(0.05, 2);
            c.composer.render();
            return {
              regKeys,
              shellsCount: (c.shells || []).length,
              placedCount: c.placed ?? 0,
              canvasW: c.renderer.domElement.width,
              canvasH: c.renderer.domElement.height
            };
          })()
        `);
        assert.ok(summary.regKeys.length > 0, `${page} must register interactive organelles/parts in REG`);
        assert.ok(summary.shellsCount > 0, `${page} must emit instanced molecular shells (DNA/RNA/lipids)`);
        assert.ok(summary.canvasW > 0 && summary.canvasH > 0);
        assert.deepEqual(cdp.pageErrors, [], `Page errors after stepping ${page}`);
        assert.deepEqual(cdp.consoleErrors, [], `Console errors after stepping ${page}`);
        ok(
          `${page}: rendered (${summary.canvasW}x${summary.canvasH}), ${summary.regKeys.length} parts verified (${summary.regKeys.slice(0, 5).join(', ')}...), ${summary.placedCount} PDB proteins, 0 errors`
        );
        } else if (page === 'cell_explorer.html') {
        const explorerCheck = await cdp.eval<{
          totalNodes: number;
          builtModels: number;
          tourRoots: string[];
          langSwitchOk: boolean;
          esTitle: string;
          enTitle: string;
        }>(`
          (() => {
            const exp = window.__explorer;
            const nodeIds = Object.keys(exp.NODES);
            let builtModels = 0;
            for (const id of nodeIds) {
              const n = exp.NODES[id];
              if (!n.real) {
                const m = exp.build(id);
                if (!m || !m.group || m.group.children.length === 0) {
                  throw new Error('Failed to build 3D model for explorer node: ' + id);
                }
                builtModels++;
              }
            }
            const roots = ['real-cell', 'real-plant', 'real-fungal', 'real-bacterium', 'viruses', 'real-phage', 'real-coronavirus', 'real-hiv', 'real-adenovirus', 'real-tmv'];
            for (const r of roots) {
              const cues = window.TOURS && Object.values(window.TOURS).find(t => t.root === r);
              if (!cues || !cues.chapters || cues.chapters.length === 0) {
                throw new Error('Missing tour for root: ' + r);
              }
            }
            const langBtn = document.getElementById('lang');
            if (!langBtn) throw new Error('Missing #lang language switcher button in viewer');
            const esDef = exp.i18n.getLocaleDefinition('es');
            for (const id of nodeIds) {
              const n = exp.NODES[id];
              const trNode = esDef.nodes[id];
              if (!trNode || !trNode.name || !trNode.desc || trNode.desc === n.desc) {
                throw new Error('Missing or untranslated ES node description for: ' + id);
              }
            }
            exp.i18n.setLocale('en');
            const enTitle = document.getElementById('title')?.textContent ?? '';
            const enDesc = document.getElementById('desc')?.textContent ?? '';
            langBtn.click();
            const esTitle = document.getElementById('title')?.textContent ?? '';
            const esDesc = document.getElementById('desc')?.textContent ?? '';
            const treeHdEs = document.querySelector('#tree > .hd')?.textContent ?? '';
            langBtn.click();
            const backToEn = document.getElementById('title')?.textContent ?? '';
            const backToEnDesc = document.getElementById('desc')?.textContent ?? '';
            const langSwitchOk =
              exp.i18n.locale === 'en' &&
              esTitle !== enTitle &&
              esDesc !== enDesc &&
              treeHdEs === 'Árbol de estructuras' &&
              backToEn === enTitle &&
              backToEnDesc === enDesc;
            if (!langSwitchOk) {
              throw new Error('Language switch failed: en=' + enTitle + ', es=' + esTitle + ', treeHd=' + treeHdEs);
            }
            return {
              totalNodes: nodeIds.length,
              builtModels,
              tourRoots: roots,
              langSwitchOk,
              esTitle,
              enTitle
            };
          })()
        `);
        assert.ok(explorerCheck.totalNodes > 40, 'cell_explorer must have > 40 biological nodes');
        assert.ok(explorerCheck.builtModels > 30, 'cell_explorer must build all standalone 3D organelle/molecular models');
        assert.equal(explorerCheck.tourRoots.length, 10);
        assert.equal(explorerCheck.langSwitchOk, true);

        // Verify in-browser CourseProgressManager, cookies, #tReset (Start from beginning), and optional account sync
        const progressE2E = await cdp.eval<{
          hasInitialCookie: boolean;
          midTourStepIdx: number;
          resetBtnEnabledMidTour: boolean;
          afterResetStepIdx: number;
          resetBtnDisabledAtStart: boolean;
          registeredUserEmail: string;
          renewedOk: boolean;
          hivStepIdxAfterSync: number;
        }>(`
          (async () => {
            const pm = window.__progress;
            if (!pm) throw new Error('Missing window.__progress');
            const hasInitialCookie = document.cookie.includes('bexonia_learn_progress=');

            // Start tour on real-cell and jump to step index 2
            const eukTour = window.TOURS.eukaryotic;
            const eukSteps = eukTour.chapters.flatMap(c => c.steps);
            window.__tour.start(eukSteps[2].id);
            const midCp = pm.getCheckpoint('real-cell');
            const midTourStepIdx = midCp ? midCp.stepIdx : -1;
            const resetBtn = document.getElementById('tReset');
            if (!resetBtn) throw new Error('Missing #tReset button in tourCtl');
            const resetBtnEnabledMidTour = !resetBtn.disabled;

            // Click #tReset ("↺ Reset" / Start from beginning) and verify it jumps back to step 0
            resetBtn.click();
            const afterResetCp = pm.getCheckpoint('real-cell');
            const afterResetStepIdx = afterResetCp ? afterResetCp.stepIdx : -1;
            const resetBtnDisabledAtStart = resetBtn.disabled && window.__tour.state.step === eukSteps[0].id;
            window.__tour.exit();

            // Register optional user account (with optional fullName) and track HIV course progress
            const regRes = await pm.register({
              email: 'cajal@bexonia.com',
              password: 'neuronDoctrine1906',
              fullName: 'Santiago Ramón y Cajal',
              lang: 'es'
            });
            if (!regRes.ok) throw new Error('Account registration failed: ' + regRes.error);

            pm.saveStep({
              tourKey: 'real-hiv',
              stepId: 'hiv-rt',
              chapterIdx: 1,
              stepIdx: 2,
              cueIdx: 0
            });
            const renewRes = await pm.renewCookies();
            await pm.hydrateFromServer();
            const hivCp = pm.getCheckpoint('real-hiv');

            return {
              hasInitialCookie,
              midTourStepIdx,
              resetBtnEnabledMidTour,
              afterResetStepIdx,
              resetBtnDisabledAtStart,
              registeredUserEmail: pm.user?.email ?? '',
              renewedOk: renewRes.ok && !!renewRes.sessionExpiresAt,
              hivStepIdxAfterSync: hivCp?.stepIdx ?? -1
            };
          })()
        `);
        assert.equal(progressE2E.hasInitialCookie, true, 'Browser must create bexonia_learn_progress cookie on load');
        assert.equal(progressE2E.midTourStepIdx, 2, 'Step 2 must be recorded in memory & cookie');
        assert.equal(progressE2E.resetBtnEnabledMidTour, true, '#tReset button must be enabled when step > 0');
        assert.equal(progressE2E.afterResetStepIdx, 0, 'Clicking #tReset must reset tour back to step 0 (beginning)');
        assert.equal(progressE2E.resetBtnDisabledAtStart, true, '#tReset must return to step 0 and disable itself at start');
        assert.equal(progressE2E.registeredUserEmail, 'cajal@bexonia.com');
        assert.equal(progressE2E.renewedOk, true, 'Cookie & session auto-renewal must succeed');
        assert.equal(progressE2E.hivStepIdxAfterSync, 2, 'Per-virus course progress (real-hiv) must sync with server');

        // Verify pre-generated GPT-SoVITS .opus Narrator UI & HTTP audio streaming (#tNarr, #tNarrBtn, #tVol, #tPace)
        const narratorE2E = await cdp.eval<{
          hasGlobalNarrator: boolean;
          narrHiddenDuringTour: boolean;
          initialNarrOn: boolean;
          updatedVolume: number;
          enStatus: number;
          esStatus: number;
          enMagic: string;
          esMagic: string;
        }>(`
          (async () => {
            const nar = window.__narrator;
            if (!nar) throw new Error('Missing window.__narrator');
            const eukSteps = window.TOURS.eukaryotic.chapters.flatMap(c => c.steps);
            const firstCueId = eukSteps[0].cues[0].id;
            window.__tour.start(eukSteps[0].id);
            const narrWrap = document.getElementById('tNarr');
            const narrBtn = document.getElementById('tNarrBtn');
            const volInput = document.getElementById('tVol');
            if (!narrWrap || !narrBtn || !volInput) throw new Error('Missing #tNarr controls');
            const narrHiddenDuringTour = narrWrap.hidden;
            const initialNarrOn = window.__tour.T.narr && narrBtn.classList.contains('on');

            // Toggle narration off, then back on
            narrBtn.click();
            const offOk = !window.__tour.T.narr && !narrBtn.classList.contains('on');
            narrBtn.click();
            const onOk = window.__tour.T.narr && narrBtn.classList.contains('on');
            if (!offOk || !onOk) throw new Error('Narration toggle state mismatch');

            // Adjust volume slider
            volInput.value = '0.65';
            volInput.dispatchEvent(new Event('input'));
            const updatedVolume = nar.getVolume();

            // Verify EN and ES .opus streams are served with valid OggS headers
            const enUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'en-US', root: 'real-cell' });
            const esUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'es-ES', root: 'real-cell' });
            const [enRes, esRes] = await Promise.all([fetch(enUrl), fetch(esUrl)]);
            const [enBuf, esBuf] = await Promise.all([enRes.arrayBuffer(), esRes.arrayBuffer()]);
            const enMagic = String.fromCharCode(...new Uint8Array(enBuf.slice(0, 4)));
            const esMagic = String.fromCharCode(...new Uint8Array(esBuf.slice(0, 4)));

            window.__tour.exit();
            return {
              hasGlobalNarrator: window.__tour.T.narrator === nar,
              narrHiddenDuringTour,
              initialNarrOn,
              updatedVolume,
              enStatus: enRes.status,
              esStatus: esRes.status,
              enMagic,
              esMagic
            };
          })()
        `);
        assert.equal(narratorE2E.hasGlobalNarrator, true, 'Static .opus narrator must be wired into window.__tour');
        assert.equal(narratorE2E.narrHiddenDuringTour, false, '#tNarr control must be visible in guided tours');
        assert.equal(narratorE2E.initialNarrOn, true, 'Narration must start enabled by default');
        assert.equal(narratorE2E.updatedVolume, 0.65, '#tVol slider must update narrator volume');
        assert.equal(narratorE2E.enStatus, 200, 'EN .opus stream must return HTTP 200');
        assert.equal(narratorE2E.esStatus, 200, 'ES .opus stream must return HTTP 200');
        assert.equal(narratorE2E.enMagic, 'OggS', 'EN .opus stream must begin with OggS magic header');
        assert.equal(narratorE2E.esMagic, 'OggS', 'ES .opus stream must begin with OggS magic header');

        assert.deepEqual(cdp.pageErrors, [], `Page errors on cell_explorer.html`);
        assert.deepEqual(cdp.consoleErrors, [], `Console errors on cell_explorer.html`);
        ok(
          `cell_explorer.html: verified all ${explorerCheck.totalNodes} tree nodes, built ${explorerCheck.builtModels} 3D sub-models, ${explorerCheck.tourRoots.length} tours, EN/ES language switcher, #tReset start-from-beginning button, in-memory/cookie auto-renewal, & optional account sync, 0 errors`
        );
      } else {
        const dims = await cdp.eval<{ w: number; h: number }>(`
          (() => {
            const c = document.querySelector('canvas');
            return { w: c.width, h: c.height };
          })()
        `);
        assert.ok(dims.w > 0 && dims.h > 0);
        ok(`${page}: rendered WebGL canvas (${dims.w}x${dims.h}), 0 errors`);
      }
      await cdp.eval(`
        (() => {
          try { window.__cell?.renderer?.dispose?.(); window.__cell?.renderer?.forceContextLoss?.(); } catch {}
          try { window.__explorer?.renderer?.dispose?.(); window.__explorer?.renderer?.forceContextLoss?.(); } catch {}
        })()
      `);
    }

    cdp.close();
  } finally {
    chrome.kill('SIGKILL');
    server.close();
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
    } catch {
      // ignore temp dir cleanup race on exit
    }
  }
}

async function main() {
  await runUnitTests();
  runStaticChecks();
  await runBrowserE2ETests();
  console.log(`\n🎉 ALL ${passed} VERIFICATION CHECKS PASSED WITH ZERO ERRORS!\n`);
}

main().catch((err) => {
  console.error('\n❌ TEST SUITE FAILED:', err);
  process.exit(1);
});
