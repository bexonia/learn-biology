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
  TOUR_PERSONA_REGISTRY,
  getTourPersonaEntry,
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
import {
  COURSE_SEQUENCE,
  CourseProgressManager
} from '../src/core/progress_service.js';
import {
  DEFAULT_MODE_BY_ENGLISH_VOICE,
  DEFAULT_MODE_BY_SPANISH_VOICE,
  ENGLISH_VOICE_IDS,
  EXPLANATION_MODES,
  MODE_TO_TOUR_PERSONA,
  NODE_LENS_REGISTRY,
  PART_LENS_REGISTRY,
  PRESET_SPANISH_VOICE_BY_MODE,
  PRESET_VOICE_BY_MODE,
  SPANISH_VOICE_IDS,
  STANDALONE_PAGE_PART_KEYS,
  TOUR_PERSONAS,
  parseRichInline,
  resolveEnglishVoice,
  resolveSpanishVoice,
  resolveTourPersona,
  stripRichLinks,
  type EnglishVoiceId,
  type SpanishVoiceId,
  type TourPersona
} from '../src/content/index.js';

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

    // TourService + Multi-Persona Guided Tour Scripts (4,794 cues across 11 tours × EN/ES × pop/blueprint/scientific)
    const all = tours.tours;
    assert.equal(Object.keys(all).length, 11, 'TourService must provide all 11 guided tours');
    const plainOf = (s: string) => s.replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1');
    const extractHighlightTargets = (s: string): string[] =>
      [...s.matchAll(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g)].map((m) =>
        m[2] ? m[2].trim() : '__STEP_BLINK__'
      );

    let verifiedPersonaCueStrings = 0;
    let uniqueTourCuesCount = 0;
    let curatedAnalogyCueCount = 0;
    const tourAnalogyCounts: Record<string, number> = {};
    for (const [key, tour] of Object.entries(all)) {
      assert.ok(tour.chapters.length > 0, `Tour ${key} must have chapters`);
      assert.equal(tours.getTour(key)?.root, tour.root);
      assert.ok(TOUR_PERSONA_REGISTRY[tour.root], `Missing TOUR_PERSONA_REGISTRY entry for root ${tour.root}`);
      tourAnalogyCounts[tour.root] = 0;

      const seenRootCues = new Set<string>();
      const verifyTourCuePersonas = (cue: { readonly id: string; readonly text: string }) => {
        const len = plainOf(cue.text).length;
        assert.ok(len <= 110, `Tour ${key} base cue ${cue.id} exceeds 110 chars (${len})`);
        if (seenRootCues.has(cue.id)) return;
        seenRootCues.add(cue.id);
        uniqueTourCuesCount++;

        const pEntry = getTourPersonaEntry(tour.root, cue.id);
        assert.ok(pEntry, `Missing TourPersona entry for ${tour.root}/${cue.id}`);
        if (pEntry.en.pop !== cue.text) {
          curatedAnalogyCueCount++;
          tourAnalogyCounts[tour.root]++;
        }
        const baseTargets = extractHighlightTargets(cue.text);
        const minCueLen = cue.id.includes('.rollcall.') ? 4 : 12;

        for (const loc of ['en', 'es'] as const) {
          const triplet = pEntry[loc];
          assert.ok(triplet, `Missing ${loc} persona triplet for ${tour.root}/${cue.id}`);
          for (const p of TOUR_PERSONAS) {
            const raw = triplet[p];
            assert.ok(typeof raw === 'string' && raw.trim().length > 0, `Empty ${loc}.${p} cue for ${tour.root}/${cue.id}`);
            const plain = plainOf(raw).trim();
            assert.ok(
              plain.length >= minCueLen && plain.length <= 110,
              `Persona cue ${tour.root}/${cue.id} [${loc}.${p}] length ${plain.length} outside [${minCueLen}, 110]: "${plain}"`
            );
            const pTargets = extractHighlightTargets(raw);
            assert.deepEqual(
              pTargets,
              baseTargets,
              `Persona cue ${tour.root}/${cue.id} [${loc}.${p}] must preserve exact [[...|part]] highlight targets`
            );
            verifiedPersonaCueStrings++;
          }
          assert.notEqual(
            plainOf(triplet.pop),
            plainOf(triplet.blueprint),
            `Persona cue ${tour.root}/${cue.id} [${loc}] pop === blueprint`
          );
          assert.notEqual(
            plainOf(triplet.pop),
            plainOf(triplet.scientific),
            `Persona cue ${tour.root}/${cue.id} [${loc}] pop === scientific`
          );
          assert.notEqual(
            plainOf(triplet.blueprint),
            plainOf(triplet.scientific),
            `Persona cue ${tour.root}/${cue.id} [${loc}] blueprint === scientific`
          );
        }
        assert.notEqual(plainOf(pEntry.en.pop), plainOf(pEntry.es.pop), `${tour.root}/${cue.id} en.pop === es.pop`);
        assert.notEqual(
          plainOf(pEntry.en.blueprint),
          plainOf(pEntry.es.blueprint),
          `${tour.root}/${cue.id} en.blueprint === es.blueprint`
        );
        assert.notEqual(
          plainOf(pEntry.en.scientific),
          plainOf(pEntry.es.scientific),
          `${tour.root}/${cue.id} en.scientific === es.scientific`
        );
      };

      for (const ch of tour.chapters) {
        for (const step of ch.steps) {
          for (const cue of step.cues) {
            verifyTourCuePersonas(cue);
          }
        }
      }
      for (const det of Object.values(tour.details ?? {})) {
        for (const cue of det.cues ?? []) {
          verifyTourCuePersonas(cue);
        }
      }
    }
    assert.equal(Object.keys(ALL_TOURS).length, 11);
    assert.equal(uniqueTourCuesCount, 799, `Expected 799 unique tour cues across 11 tours, got ${uniqueTourCuesCount}`);
    assert.equal(
      verifiedPersonaCueStrings,
      4794,
      `Expected 4794 verified multi-persona tour cue strings, got ${verifiedPersonaCueStrings}`
    );
    assert.ok(
      tourAnalogyCounts['life-overview'] >= 1 && tourAnalogyCounts['life-overview'] <= 2,
      `Expected <= 2 sparse complex-concept analogies in Tour 0 (life-overview), got ${tourAnalogyCounts['life-overview']}`
    );
    assert.ok(
      curatedAnalogyCueCount >= 22 && curatedAnalogyCueCount <= 47,
      `Expected sparse, high-value analogies on complex mechanisms only (22..47 of 799 cues, ~1 every 2 min), got ${curatedAnalogyCueCount}`
    );
    ok(
      `TourService & Multi-Persona Scripts (11 tours, ${uniqueTourCuesCount} unique cues, ${curatedAnalogyCueCount} sparse complex-mechanism analogies [Tour 0: ${tourAnalogyCounts['life-overview']}], all ${verifiedPersonaCueStrings} cues <= 110 chars & highlight-verified)`
    );

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
    assert.ok(Object.keys(esDef.nodes).length >= 210, 'ES_LOCALE must include all 210 NODES');
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
    assert.ok(totalTranslatedCues >= 687, `Expected >= 687 translated tour cues, got ${totalTranslatedCues}`);
    Effect.runSync(i18n.setLocaleEffect('en'));
    assert.equal(i18n.locale, 'en');
    assert.equal(i18n.t('structureTree'), 'Structure tree');
    unsubscribe();
    assert.deepEqual(observedLocales, ['es', 'en'], 'AtomRef subscription must emit locale transitions');
    ok(`I18nService (Effect service + AtomRef reactivity, 210/210 ES node descriptions, ${totalTranslatedCues}/687 ES tour cues verified)`);

    // Explanation Modes (Simple, Story, Blueprint, Scientific) + 210 Node Lenses + 149 Realistic Part Lenses checks
    const validNodeIds = new Set(Object.keys(esDef.nodes));
    assert.equal(validNodeIds.size, 210, 'Expected 210 total explorer node IDs');
    assert.equal(
      Object.keys(NODE_LENS_REGISTRY).length,
      210,
      `Expected 210 registered node lenses, got ${Object.keys(NODE_LENS_REGISTRY).length}`
    );
    const verifyInlineTokens = (ctx: string, raw: string) => {
      for (const tok of parseRichInline(raw)) {
        if (tok.type === 'link') {
          assert.ok(validNodeIds.has(tok.nodeId), `${ctx}: invalid [[${tok.label}|${tok.nodeId}]] target`);
        }
      }
    };
    for (const nodeId of validNodeIds) {
      const rec = NODE_LENS_REGISTRY[nodeId];
      assert.ok(rec, `Missing NODE_LENS_REGISTRY entry for ${nodeId}`);
      for (const loc of ['en', 'es'] as const) {
        const entry = rec[loc];
        assert.ok(entry, `Missing ${loc} lens entry for ${nodeId}`);
        for (const m of EXPLANATION_MODES) {
          assert.ok(entry[m] && entry[m].trim().length >= 20, `Node ${nodeId} [${loc}.${m}] too short`);
          verifyInlineTokens(`node:${nodeId}.${loc}.${m}`, entry[m]);
        }
        assert.notEqual(stripRichLinks(entry.simple), stripRichLinks(entry.story), `Node ${nodeId} [${loc}] simple === story`);
        assert.notEqual(stripRichLinks(entry.simple), stripRichLinks(entry.blueprint), `Node ${nodeId} [${loc}] simple === blueprint`);
        assert.notEqual(stripRichLinks(entry.simple), stripRichLinks(entry.scientific), `Node ${nodeId} [${loc}] simple === scientific`);
        assert.notEqual(stripRichLinks(entry.story), stripRichLinks(entry.blueprint), `Node ${nodeId} [${loc}] story === blueprint`);
        assert.notEqual(stripRichLinks(entry.story), stripRichLinks(entry.scientific), `Node ${nodeId} [${loc}] story === scientific`);
        assert.notEqual(stripRichLinks(entry.blueprint), stripRichLinks(entry.scientific), `Node ${nodeId} [${loc}] blueprint === scientific`);
      }
      assert.notEqual(stripRichLinks(rec.en.simple), stripRichLinks(rec.es.simple), `Node ${nodeId} en.simple === es.simple`);
      assert.notEqual(stripRichLinks(rec.en.story), stripRichLinks(rec.es.story), `Node ${nodeId} en.story === es.story`);
    }

    let verifiedPartCount = 0;
    for (const [pageName, partKeys] of Object.entries(STANDALONE_PAGE_PART_KEYS)) {
      const pMap = PART_LENS_REGISTRY[pageName];
      assert.ok(pMap, `Missing PART_LENS_REGISTRY page ${pageName}`);
      for (const pk of partKeys) {
        const rec = pMap[pk];
        assert.ok(rec, `Missing PART_LENS_REGISTRY[${pageName}][${pk}]`);
        for (const loc of ['en', 'es'] as const) {
          const e = rec[loc];
          assert.ok(e.subtitle && e.subtitle.trim().length >= 3, `Missing subtitle for ${pageName}:${pk}.${loc}`);
          for (const m of ['simple', 'story', 'scientific'] as const) {
            assert.ok(e[m] && e[m].trim().length >= 20, `Part ${pageName}:${pk} [${loc}.${m}] too short`);
            verifyInlineTokens(`part:${pageName}:${pk}.${loc}.${m}`, e[m]);
          }
          assert.notEqual(stripRichLinks(e.simple), stripRichLinks(e.story), `Part ${pageName}:${pk} [${loc}] simple === story`);
          assert.notEqual(stripRichLinks(e.story), stripRichLinks(e.scientific), `Part ${pageName}:${pk} [${loc}] story === scientific`);
          for (const bf of ['role', 'arrivesFrom', 'inside', 'deliversTo'] as const) {
            assert.ok(e.blueprint[bf] && e.blueprint[bf].trim().length >= 5, `Part ${pageName}:${pk} [${loc}.blueprint.${bf}] missing`);
            verifyInlineTokens(`part:${pageName}:${pk}.${loc}.blueprint.${bf}`, e.blueprint[bf]);
          }
          for (const dir of ['from', 'to'] as const) {
            for (const link of e[dir] ?? []) {
              assert.ok(validNodeIds.has(link.nodeId), `Part ${pageName}:${pk} [${loc}.${dir}] invalid flow nodeId ${link.nodeId}`);
            }
          }
        }
        verifiedPartCount++;
      }
    }
    assert.equal(verifiedPartCount, 149, `Expected 149 verified realistic part lenses across 9 pages, got ${verifiedPartCount}`);

    const observedModes: string[] = [];
    const unsubMode = i18n.onModeChange((m) => observedModes.push(m));
    Effect.runSync(i18n.setModeEffect('scientific'));
    assert.equal(i18n.mode, 'scientific');
    const sciMito = i18n.nodeDesc('mitochondrion', 'fallback');
    Effect.runSync(i18n.setModeEffect('blueprint'));
    const bpMito = i18n.nodeDesc('mitochondrion', 'fallback');
    Effect.runSync(i18n.setModeEffect('simple'));
    const simMito = i18n.nodeDesc('mitochondrion', 'fallback');
    Effect.runSync(i18n.setModeEffect('story'));
    const storyMito = i18n.nodeDesc('mitochondrion', 'fallback');
    assert.notEqual(sciMito, storyMito);
    assert.notEqual(bpMito, storyMito);
    assert.notEqual(simMito, storyMito);
    unsubMode();
    assert.deepEqual(observedModes, ['scientific', 'blueprint', 'simple', 'story']);
    ok('Multi-mode Explanation Lenses (210/210 bilingual node lenses, 149/149 bilingual realistic part supply chains, & AtomRef mode reactivity)');

    // Sequential Curriculum (COURSE_SEQUENCE, markTourCompleted, isTourCompleted, getNextCourseRoot) unit check
    assert.equal(COURSE_SEQUENCE[0], 'life-overview', 'Curriculum must start with Stage 0 (life-overview)');
    assert.equal(COURSE_SEQUENCE[1], 'real-bacterium', 'Stage 1 cellular deep dives must start with Bacterium (E. coli)');
    const seqPm = new CourseProgressManager();
    assert.equal(seqPm.getNextCourseRoot('life-overview'), 'real-bacterium');
    assert.equal(seqPm.getNextCourseRoot('real-plant'), 'parasitic-cells-overview');
    assert.equal(seqPm.getNextCourseRoot('parasitic-cells-overview'), 'viruses');
    assert.equal(seqPm.getNextCourseRoot('real-hiv'), null);
    assert.equal(seqPm.isTourCompleted('life-overview'), false);
    seqPm.markTourCompleted('life-overview');
    assert.equal(seqPm.isTourCompleted('life-overview'), true);
    ok(`Sequential Curriculum Service (${COURSE_SEQUENCE.length}-step COURSE_SEQUENCE, completion tracking & Next in Course routing)`);

    // Multi-Voice Preset (Auto) vs Custom Override reactivity checks
    assert.deepEqual(PRESET_VOICE_BY_MODE, {
      simple: 'v3',
      story: 'v3',
      blueprint: 'v2',
      scientific: 'v1'
    });
    assert.equal(resolveEnglishVoice('story', 'auto'), 'v3');
    assert.equal(resolveEnglishVoice('simple', 'auto'), 'v3');
    assert.equal(resolveEnglishVoice('blueprint', 'auto'), 'v2');
    assert.equal(resolveEnglishVoice('scientific', 'auto'), 'v1');
    assert.equal(resolveEnglishVoice('scientific', 'v3'), 'v3');

    assert.equal(i18n.voicePreference, 'auto');
    assert.equal(i18n.activeEnglishVoice, 'v3'); // mode is currently 'story'
    const observedVoiceTransitions: Array<{ pref: string; active: string }> = [];
    const unsubVoice = i18n.onVoiceChange((pref) => {
      observedVoiceTransitions.push({ pref, active: i18n.activeEnglishVoice });
    });
    i18n.setMode('blueprint');
    assert.equal(i18n.activeEnglishVoice, 'v2', 'Auto preset must redirect Blueprint mode to Voice 2 (Engineers)');
    i18n.setMode('scientific');
    assert.equal(i18n.activeEnglishVoice, 'v1', 'Auto preset must redirect Scientific mode to Voice 1 (Scientific)');
    i18n.setVoicePreference('v2');
    assert.equal(i18n.voicePreference, 'v2');
    assert.equal(i18n.activeEnglishVoice, 'v2');
    i18n.setMode('story');
    assert.equal(i18n.activeEnglishVoice, 'v2', 'Custom voice selection must remain locked when switching modes');
    i18n.setMode('scientific');
    assert.equal(i18n.activeEnglishVoice, 'v2', 'Custom voice selection must remain locked in Scientific mode');
    i18n.resetVoiceToPreset();
    assert.equal(i18n.voicePreference, 'auto');
    assert.equal(i18n.activeEnglishVoice, 'v1', 'Resetting to preset in Scientific mode must restore Voice 1');
    i18n.setMode('story');
    assert.equal(i18n.activeEnglishVoice, 'v3', 'Auto preset in Story mode must restore Voice 3');
    unsubVoice();
    assert.ok(observedVoiceTransitions.length >= 5, 'onVoiceChange must emit on both preset auto-redirects and manual selections');

    assert.deepEqual(PRESET_SPANISH_VOICE_BY_MODE, {
      simple: 'latam',
      story: 'latam',
      blueprint: 'spain',
      scientific: 'spain'
    });
    assert.equal(resolveSpanishVoice('story', 'auto'), 'latam');
    assert.equal(resolveSpanishVoice('simple', 'auto'), 'latam');
    assert.equal(resolveSpanishVoice('blueprint', 'auto'), 'spain');
    assert.equal(resolveSpanishVoice('scientific', 'auto'), 'spain');
    assert.equal(resolveSpanishVoice('scientific', 'latam'), 'latam');
    assert.equal(resolveSpanishVoice('story', 'spain'), 'spain');

    assert.equal(i18n.spanishVoicePreference, 'auto');
    assert.equal(i18n.activeSpanishVoice, 'latam'); // mode is 'story'
    const observedEsTransitions: Array<{ pref: string; active: string }> = [];
    const unsubEsVoice = i18n.onSpanishVoiceChange((pref) => {
      observedEsTransitions.push({ pref, active: i18n.activeSpanishVoice });
    });
    i18n.setMode('blueprint');
    assert.equal(i18n.activeSpanishVoice, 'spain', 'Spanish auto preset must redirect Blueprint mode to Spain voice');
    i18n.setSpanishVoicePreference('latam');
    assert.equal(i18n.activeSpanishVoice, 'latam');
    i18n.setMode('scientific');
    assert.equal(i18n.activeSpanishVoice, 'latam', 'Custom LatAm Spanish voice must stay locked in Scientific mode');
    i18n.resetSpanishVoiceToPreset();
    assert.equal(i18n.activeSpanishVoice, 'spain', 'Resetting Spanish preset in Scientific mode must restore Spain voice');
    i18n.setMode('story');
    assert.equal(i18n.activeSpanishVoice, 'latam', 'Auto preset in Story mode must restore LatAm voice');
    unsubEsVoice();
    assert.ok(observedEsTransitions.length >= 4, 'onSpanishVoiceChange must emit on preset redirects and manual locks');

    // Bidirectional Narrator <-> Content Persona coupling + voiceLocked checks
    assert.deepEqual(MODE_TO_TOUR_PERSONA, {
      simple: 'pop',
      story: 'pop',
      blueprint: 'blueprint',
      scientific: 'scientific'
    });
    assert.deepEqual(DEFAULT_MODE_BY_ENGLISH_VOICE, {
      v1: 'scientific',
      v2: 'blueprint',
      v3: 'story'
    });
    assert.deepEqual(DEFAULT_MODE_BY_SPANISH_VOICE, {
      latam: 'story',
      spain: 'scientific'
    });
    assert.equal(resolveTourPersona('simple'), 'pop');
    assert.equal(resolveTourPersona('story'), 'pop');
    assert.equal(resolveTourPersona('blueprint'), 'blueprint');
    assert.equal(resolveTourPersona('scientific'), 'scientific');

    assert.equal(i18n.voiceLocked, false, 'voiceLocked must default to false when preset is active');
    i18n.selectNarrator('v1');
    assert.equal(i18n.mode, 'scientific');
    assert.equal(i18n.tourPersona, 'scientific');
    assert.equal(i18n.activeEnglishVoice, 'v1');
    assert.equal(i18n.voicePreference, 'auto');

    i18n.selectNarrator('v2');
    assert.equal(i18n.mode, 'blueprint');
    assert.equal(i18n.tourPersona, 'blueprint');
    assert.equal(i18n.activeEnglishVoice, 'v2');

    i18n.selectNarrator('v3');
    assert.equal(i18n.mode, 'story');
    assert.equal(i18n.tourPersona, 'pop');
    assert.equal(i18n.activeEnglishVoice, 'v3');

    i18n.selectSpanishNarrator('spain');
    assert.equal(i18n.mode, 'scientific');
    assert.equal(i18n.tourPersona, 'scientific');
    assert.equal(i18n.activeSpanishVoice, 'spain');

    i18n.setMode('blueprint');
    i18n.selectSpanishNarrator('spain');
    assert.equal(i18n.mode, 'blueprint', 'Selecting Spain narrator while in Blueprint must stay in Blueprint');
    assert.equal(i18n.activeSpanishVoice, 'spain');

    i18n.selectSpanishNarrator('latam');
    assert.equal(i18n.mode, 'story');
    assert.equal(i18n.tourPersona, 'pop');
    assert.equal(i18n.activeSpanishVoice, 'latam');

    // Lock voice explicitly and verify narrator selection does not overwrite mode
    i18n.setVoiceLocked(true);
    assert.equal(i18n.voiceLocked, true);
    i18n.selectNarrator('v2');
    assert.equal(i18n.mode, 'story', 'Locked voice selection must keep Story mode');
    assert.equal(i18n.activeEnglishVoice, 'v2', 'Locked voice selection must override English voice to v2');
    i18n.resetVoiceToPreset();
    i18n.resetSpanishVoiceToPreset();
    assert.equal(i18n.voiceLocked, false, 'Resetting preset must unlock voiceLocked');
    assert.equal(i18n.activeEnglishVoice, 'v3');
    ok('Bidirectional Narrator <-> Persona Sync & Voice Lock/Preset reactivity (EN v1/v2/v3 + ES LatAm/Spain)');
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

  const normSci = normalizeSpeechText(
    'In E. coli, ATP hydrolysis yields ΔG°′ = -30.5 kJ/mol at 285 subunit⁻¹·s⁻¹ across 1 µF/cm² (4.2 Å², 10⁻⁹ error).',
    'en-US'
  );
  assert.ok(
    normSci.includes('Escherichia coli') &&
      normSci.includes('delta G naught prime') &&
      normSci.includes('kilojoules per mole') &&
      normSci.includes('per subunit') &&
      normSci.includes('per second') &&
      normSci.includes('microfarads per square centimeter') &&
      normSci.includes('square angstroms') &&
      normSci.includes('10 to the minus 9') &&
      !/[^\x00-\x7F]/.test(normSci),
    `Unexpected scientific EN speech normalization: ${normSci}`
  );

  const playedAudioUrls: Array<{ src: string; volume: number; rate: number }> = [];
  const prefetchedAudioUrls: string[] = [];
  let mockRuntimePace = 1.25;
  let mockActiveVoice: EnglishVoiceId = 'v3';
  let mockActiveEsVoice: SpanishVoiceId = 'latam';
  let mockTourPersona: TourPersona = 'pop';
  const mockNarrator = createStaticTourNarrator({
    audioBaseUrl: 'audio',
    storage: null,
    initialVolume: 0.8,
    initialRate: 1.0,
    getVoice: () => mockActiveVoice,
    getSpanishVoice: () => mockActiveEsVoice,
    getTourPersona: () => mockTourPersona,
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
  assert.equal(playedAudioUrls[0]?.src, 'audio/en/v3/real-cell/ch1.membrane.01.opus');
  assert.equal(playedAudioUrls[0]?.volume, 0.8);
  assert.equal(playedAudioUrls[0]?.rate, 1.25);
  assert.deepEqual(prefetchedAudioUrls, ['audio/en/v3/real-cell/ch1.membrane.02.opus']);

  mockActiveVoice = 'v1';
  mockTourPersona = 'scientific';
  await mockNarrator.speak({
    id: 'ch1.membrane.01',
    lang: 'en-US'
  });
  assert.equal(playedAudioUrls[1]?.src, 'audio/en/v1/real-cell/ch1.membrane.01.opus');
  assert.equal(prefetchedAudioUrls[1], 'audio/en/v1/real-cell/ch1.membrane.02.opus');

  mockRuntimePace = 1.0;
  mockTourPersona = 'pop';
  await mockNarrator.speak({
    id: 'ch1.membrane.01',
    lang: 'es-ES'
  });
  assert.equal(playedAudioUrls[2]?.src, 'audio/es/latam/real-cell/ch1.membrane.01.opus');

  mockActiveEsVoice = 'spain';
  mockTourPersona = 'blueprint';
  await mockNarrator.speak({
    id: 'ch1.membrane.01',
    lang: 'es-ES'
  });
  assert.equal(playedAudioUrls[3]?.src, 'audio/es/spain/blueprint/real-cell/ch1.membrane.01.opus');

  mockTourPersona = 'scientific';
  await mockNarrator.speak({
    id: 'ch1.membrane.01',
    lang: 'es-ES'
  });
  assert.equal(playedAudioUrls[4]?.src, 'audio/es/spain/scientific/real-cell/ch1.membrane.01.opus');

  await mockNarrator.speakLens({
    nodeId: 'mitochondrion',
    mode: 'blueprint',
    lang: 'en-US',
    voice: 'v2'
  });
  assert.equal(playedAudioUrls[5]?.src, 'audio/lenses/en/v2/blueprint/mitochondrion.opus');

  await mockNarrator.speakLens({
    nodeId: 'mitochondrion',
    mode: 'story',
    lang: 'es-ES',
    esVoice: 'latam'
  });
  assert.equal(playedAudioUrls[6]?.src, 'audio/lenses/es/latam/story/mitochondrion.opus');

  await mockNarrator.speakLens({
    nodeId: 'mitochondrion',
    mode: 'scientific',
    lang: 'es-ES',
    esVoice: 'spain'
  });
  assert.equal(playedAudioUrls[7]?.src, 'audio/lenses/es/spain/scientific/mitochondrion.opus');

  // Unscripted node detail fallback cues (detail.*) must skip network fetch cleanly
  assert.equal(mockNarrator.resolveAudioUrl({ id: 'detail.mitochondrion.1', lang: 'en-US', root: 'real-cell' }), null);
  await mockNarrator.speak({ id: 'detail.mitochondrion.1', lang: 'en-US' });
  assert.equal(playedAudioUrls.length, 8);
  ok('StaticTourNarrator (multi-persona EN v1/v2/v3 + ES latam & spain/blueprint+scientific .opus resolution, node lens read-aloud, & prefetching)');
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

  // Verify Public Domain voice references, multi-sample studio Spanish folders, sharded <48MB audio*.tar.gz archives, gitignored audio/, and all 7,995 .opus files
  const requiredRefVoices = [
    'en_v1_david_clarke.wav',
    'en_v2_peter_yearsley.wav',
    'en_v3_martin_geeson.wav',
    'es_latam_baritone/voice_manifest.json',
    'es_spain_baritone/voice_manifest.json',
    'ATTRIBUTION.md'
  ];
  for (const vf of requiredRefVoices) {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'tools', 'voices', vf)), `Missing Public Domain voice asset tools/voices/${vf}`);
  }
  const latamManifest = JSON.parse(
    fs.readFileSync(path.join(ROOT_DIR, 'tools', 'voices', 'es_latam_baritone', 'voice_manifest.json'), 'utf8')
  );
  assert.ok(Array.isArray(latamManifest.samples) && latamManifest.samples.length >= 6, 'LatAm voice folder must include >= 6 studio reference samples');
  for (const s of latamManifest.samples) {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'tools', 'voices', 'es_latam_baritone', s.file)), `Missing LatAm studio sample ${s.file}`);
  }
  const spainManifest = JSON.parse(
    fs.readFileSync(path.join(ROOT_DIR, 'tools', 'voices', 'es_spain_baritone', 'voice_manifest.json'), 'utf8')
  );
  assert.ok(Array.isArray(spainManifest.samples) && spainManifest.samples.length >= 2, 'Spain voice folder must include >= 2 reference samples');
  for (const s of spainManifest.samples) {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'tools', 'voices', 'es_spain_baritone', s.file)), `Missing Spain studio sample ${s.file}`);
  }
  const attributionMd = fs.readFileSync(path.join(ROOT_DIR, 'tools', 'voices', 'ATTRIBUTION.md'), 'utf8');
  assert.ok(attributionMd.includes('CC0') && attributionMd.includes('LibriVox'), 'ATTRIBUTION.md must document Public Domain CC0 LibriVox provenance');

  const AUDIO_ARCHIVES = [
    'audio.tar.gz',
    'audio_tours_es_pop.tar.gz',
    'audio_tours_es_tech.tar.gz',
    'audio_lenses_v1_a.tar.gz',
    'audio_lenses_v1_b.tar.gz',
    'audio_lenses_v2_a.tar.gz',
    'audio_lenses_v2_b.tar.gz',
    'audio_lenses_v3_a.tar.gz',
    'audio_lenses_v3_b.tar.gz',
    'audio_lenses_es_latam_a.tar.gz',
    'audio_lenses_es_latam_bp.tar.gz',
    'audio_lenses_es_latam_sci.tar.gz',
    'audio_lenses_es_spain_a.tar.gz',
    'audio_lenses_es_spain_bp.tar.gz',
    'audio_lenses_es_spain_sci.tar.gz',
    'audio_stage0_en.tar.gz',
    'audio_stage0_es.tar.gz'
  ];
  assert.ok(
    !fs.existsSync(path.join(ROOT_DIR, 'audio_tours_es.tar.gz')),
    'Obsolete unsharded audio_tours_es.tar.gz must be removed'
  );
  for (const archiveName of AUDIO_ARCHIVES) {
    const archivePath = path.join(ROOT_DIR, archiveName);
    assert.ok(fs.existsSync(archivePath), `Missing sharded narration archive ${archiveName} at repository root`);
    const sizeBytes = fs.statSync(archivePath).size;
    assert.ok(
      sizeBytes > 100_000 && sizeBytes < 48 * 1024 * 1024,
      `Archive ${archiveName} (${(sizeBytes / (1024 * 1024)).toFixed(2)} MB) must stay strictly under 48 MB for GitHub compatibility`
    );
  }
  const trackedAudioFiles = execSync('git ls-files "audio/*"', { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
  assert.equal(trackedAudioFiles, '', `Expected 0 tracked files under gitignored audio/, found:\n${trackedAudioFiles.slice(0, 300)}`);
  if (
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'en', 'v1')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'en', 'v1', 'life-overview')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'es', 'latam', 'life-overview')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'es', 'spain', 'blueprint')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'es', 'spain', 'scientific')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'lenses', 'en', 'v1', 'scientific')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'lenses', 'es', 'latam', 'scientific')) ||
    !fs.existsSync(path.join(ROOT_DIR, 'audio', 'lenses', 'es', 'spain', 'scientific'))
  ) {
    for (const archiveName of AUDIO_ARCHIVES) {
      execSync(`tar -xzf ${archiveName}`, { cwd: ROOT_DIR });
    }
  }

  const verifyOpusFile = (rel: string) => {
    const full = path.join(ROOT_DIR, rel);
    assert.ok(fs.existsSync(full), `Missing pre-generated narration file: ${rel}`);
    const buf = fs.readFileSync(full);
    assert.ok(buf.length > 500, `Pre-generated narration file is unexpectedly small (${buf.length} B): ${rel}`);
    assert.equal(buf.subarray(0, 4).toString('ascii'), 'OggS', `Invalid Ogg Opus header in ${rel}`);
  };

  let verifiedTourOpusCount = 0;
  runBiologyApp(20261031, ({ tours }) => {
    for (const tour of Object.values(tours.tours)) {
      const seen = new Set<string>();
      const collectCue = (cueId: string) => {
        if (seen.has(cueId)) return;
        seen.add(cueId);
        const encId = `${encodeURIComponent(cueId)}.opus`;
        for (const vid of ENGLISH_VOICE_IDS) {
          verifyOpusFile(path.join('audio', 'en', vid, tour.root, encId));
          verifiedTourOpusCount++;
        }
        verifyOpusFile(path.join('audio', 'es', 'latam', tour.root, encId));
        verifiedTourOpusCount++;
        verifyOpusFile(path.join('audio', 'es', 'spain', 'blueprint', tour.root, encId));
        verifiedTourOpusCount++;
        verifyOpusFile(path.join('audio', 'es', 'spain', 'scientific', tour.root, encId));
        verifiedTourOpusCount++;
      };
      for (const ch of tour.chapters) {
        for (const step of ch.steps) {
          for (const cue of step.cues) collectCue(cue.id);
        }
      }
      for (const det of Object.values(tour.details ?? {})) {
        for (const cue of det.cues ?? []) collectCue(cue.id);
      }
    }
  });
  assert.equal(verifiedTourOpusCount, 4794, `Expected 4794 verified multi-persona tour .opus files, got ${verifiedTourOpusCount}`);

  let verifiedLensOpusCount = 0;
  for (const nodeId of Object.keys(NODE_LENS_REGISTRY)) {
    const safeNode = encodeURIComponent(nodeId);
    for (const mode of EXPLANATION_MODES) {
      for (const vid of ENGLISH_VOICE_IDS) {
        verifyOpusFile(path.join('audio', 'lenses', 'en', vid, mode, `${safeNode}.opus`));
        verifiedLensOpusCount++;
      }
      for (const esVid of SPANISH_VOICE_IDS) {
        verifyOpusFile(path.join('audio', 'lenses', 'es', esVid, mode, `${safeNode}.opus`));
        verifiedLensOpusCount++;
      }
    }
  }
  assert.equal(verifiedLensOpusCount, 4200, `Expected 4200 verified multi-voice node lens .opus files, got ${verifiedLensOpusCount}`);
  const totalOpusCount = verifiedTourOpusCount + verifiedLensOpusCount;
  assert.equal(totalOpusCount, 8994, `Expected 8994 total verified .opus files, got ${totalOpusCount}`);
  ok(
    `All ${totalOpusCount} pre-generated Public Domain narration (.opus) files verified (${verifiedTourOpusCount} multi-persona tour cues + ${verifiedLensOpusCount} 4-mode lenses across EN v1/v2/v3 & ES latam/spain, all 17 archives < 48 MB)`
  );
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
          initialHash: string;
          stageGroupsCount: number;
          autonomyPillsCount: number;
          totalNodes: number;
          builtModels: number;
          tourRoots: string[];
          langSwitchOk: boolean;
          esStageGroupsOk: boolean;
          esTitle: string;
          enTitle: string;
          introTourNextCourseOk: boolean;
          introStreamsOk: boolean;
        }>(`
          (async () => {
            const exp = window.__explorer;
            const nar = window.__narrator;
            const initialHash = location.hash;
            const stageGroupsCount = document.querySelectorAll('#roots .menu-sec').length;
            const autonomyPillsCount = document.querySelectorAll('#autonomyBar .auto-pill').length;
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
            const roots = ['life-overview', 'real-bacterium', 'real-fungal', 'real-cell', 'real-plant', 'viruses', 'real-phage', 'real-tmv', 'real-adenovirus', 'real-coronavirus', 'real-hiv'];
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
            const esStageTitles = [...document.querySelectorAll('#roots .m-title')].map(el => el.textContent ?? '');
            const esStageGroupsOk = esStageTitles.length === 5 && esStageTitles[0].includes('Introducción');
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

            // Play Tour 0 (biology_intro on life-overview), finish it, verify ✓ checkmark in #roots and Next in Course -> Bacterium (E. coli)
            const introSteps = window.TOURS.biology_intro.chapters.flatMap(c => c.steps);
            const lastIntroStep = introSteps[introSteps.length - 1];
            window.__tour.start(lastIntroStep.id);
            window.__tour.nextStep(); // triggers finish()
            const doneBadgeShown = !!document.querySelector('#roots button[data-root="life-overview"] .m-done');
            const nextCourseBtn = document.getElementById('tNextCourse');
            const nextCourseText = nextCourseBtn?.textContent ?? '';
            if (nextCourseBtn) nextCourseBtn.click();
            const advancedToBacterium = location.hash === '#real-bacterium';
            if (window.__tour.state.on) window.__tour.exit();
            window.__progress.resetCourse('life-overview');
            exp.showNow(['life-overview']);

            // Verify Stage 0 tour + lens .opus HTTP streams
            const introUrls = [
              nar.resolveAudioUrl({ id: 'intro.ch0.pillars.01', lang: 'en-US', root: 'life-overview' }),
              nar.resolveAudioUrl({ id: 'intro.ch0.pillars.01', lang: 'es-ES', root: 'life-overview' }),
              nar.resolveLensAudioUrl({ nodeId: 'life-overview', mode: 'story', lang: 'en-US', voice: 'v3' }),
              nar.resolveLensAudioUrl({ nodeId: 'parasitic-cells-overview', mode: 'story', lang: 'es-ES', esVoice: 'latam' })
            ];
            const introRes = await Promise.all(introUrls.map(u => fetch(u)));
            const introBufs = await Promise.all(introRes.map(r => r.arrayBuffer()));
            const introStreamsOk = introRes.every((r, idx) => {
              const magic = String.fromCharCode(...new Uint8Array(introBufs[idx].slice(0, 4)));
              return r.status === 200 && magic === 'OggS' && introBufs[idx].byteLength > 500;
            });

            return {
              initialHash,
              stageGroupsCount,
              autonomyPillsCount,
              totalNodes: nodeIds.length,
              builtModels,
              tourRoots: roots,
              langSwitchOk,
              esStageGroupsOk,
              esTitle,
              enTitle,
              introTourNextCourseOk: doneBadgeShown && nextCourseText.includes('Bacterium') && advancedToBacterium,
              introStreamsOk
            };
          })()
        `);
        assert.equal(explorerCheck.initialHash, '#life-overview', 'Bare cell_explorer.html must default to Stage 0 (#life-overview)');
        assert.equal(explorerCheck.stageGroupsCount, 5, '#roots must render all 5 sequential curriculum stages (0..4)');
        assert.equal(explorerCheck.autonomyPillsCount, 4, '#autonomyBar must display 4-Pillar Autonomy badges on root view');
        assert.ok(explorerCheck.totalNodes > 40, 'cell_explorer must have > 40 biological nodes');
        assert.ok(explorerCheck.builtModels > 30, 'cell_explorer must build all standalone 3D organelle/molecular models');
        assert.equal(explorerCheck.tourRoots.length, 11);
        assert.equal(explorerCheck.langSwitchOk, true);
        assert.equal(explorerCheck.esStageGroupsOk, true, 'Spanish locale must translate all 5 curriculum stage headers');
        assert.equal(explorerCheck.introTourNextCourseOk, true, 'Finishing Tour 0 must mark ✓ in #tree and advance via #tNextCourse to #real-bacterium');
        assert.equal(explorerCheck.introStreamsOk, true, 'Stage 0 EN/ES tour and lens .opus streams must return HTTP 200 + OggS');

        // Verify 4-Mode Explanation Selector (#lensBar), Bidirectional Narrator <-> Persona Sync, Voice Lock (#voiceLockBtn), Connected Supply-Chain Cards (#io), and Inline Links in Browser
        const lensE2E = await cdp.eval<{
          modeButtonsCount: number;
          storyHasIoCard: boolean;
          blueprintHasRows: boolean;
          scientificDistinct: boolean;
          simpleDistinct: boolean;
          esStoryDistinct: boolean;
          cookieSavedMode: boolean;
          presetVoiceByModeOk: boolean;
          bidirectionalNarratorSyncOk: boolean;
          customVoiceLockOk: boolean;
          presetResetButtonOk: boolean;
          esVoiceBadgeOk: boolean;
          chipNavigatedPath: string;
        }>(`
          (() => {
            const exp = window.__explorer;
            exp.i18n.setLocale('en');
            exp.i18n.resetVoiceToPreset();
            exp.i18n.setMode('story');
            exp.showNow(['real-cell', 'mitochondrion']);

            const voiceBar = document.getElementById('lensVoiceBar');
            const voiceSelect = document.getElementById('voiceSelect');
            const voiceLockBtn = document.getElementById('voiceLockBtn');
            const presetBtn = document.getElementById('voicePresetBtn');
            const esTag = document.getElementById('voiceEsTag');
            const speakBtn = document.getElementById('lensSpeakBtn');
            if (!voiceBar || !voiceSelect || !voiceLockBtn || !presetBtn || !esTag || !speakBtn) {
              throw new Error('Missing #lensVoiceBar voice controls');
            }

            const storyVoice = voiceBar.dataset.activeVoice;
            const initialPresetOn = presetBtn.classList.contains('on') && !exp.i18n.voiceLocked;

            const lensBtns = document.querySelectorAll('#lensBar button[data-mode]');
            const modeButtonsCount = lensBtns.length;
            const storyDesc = document.getElementById('desc')?.textContent ?? '';
            const storyIoSub = document.querySelector('#io .io-sub')?.textContent ?? '';
            const storyChips = document.querySelectorAll('#io .io-chip');
            const storyHasIoCard = storyIoSub.length > 3 && storyChips.length > 0;

            document.querySelector('#lensBar button[data-mode="blueprint"]')?.click();
            const bpRows = document.querySelectorAll('#io .io-bp-row').length;
            const bpDesc = document.getElementById('desc')?.textContent ?? '';
            const bpVoice = voiceBar.dataset.activeVoice;

            document.querySelector('#lensBar button[data-mode="scientific"]')?.click();
            const sciDesc = document.getElementById('desc')?.textContent ?? '';
            const sciVoice = voiceBar.dataset.activeVoice;
            const cookieSavedMode = document.cookie.includes('bexonia_learn_progress=') && window.__progress.explanationMode === 'scientific';

            document.querySelector('#lensBar button[data-mode="simple"]')?.click();
            const simDesc = document.getElementById('desc')?.textContent ?? '';
            const simVoice = voiceBar.dataset.activeVoice;

            const presetVoiceByModeOk =
              initialPresetOn &&
              storyVoice === 'v3' &&
              bpVoice === 'v2' &&
              sciVoice === 'v1' &&
              simVoice === 'v3';

            // Default unlocked bidirectional sync: choosing Systems Engineer (v2) switches mode -> blueprint, v1 -> scientific, v3 -> story
            voiceSelect.value = 'v2';
            voiceSelect.dispatchEvent(new Event('change'));
            const v2SyncedBp = exp.i18n.mode === 'blueprint' && voiceBar.dataset.activeVoice === 'v2' && !exp.i18n.voiceLocked;
            voiceSelect.value = 'v1';
            voiceSelect.dispatchEvent(new Event('change'));
            const v1SyncedSci = exp.i18n.mode === 'scientific' && voiceBar.dataset.activeVoice === 'v1' && !exp.i18n.voiceLocked;
            voiceSelect.value = 'v3';
            voiceSelect.dispatchEvent(new Event('change'));
            const v3SyncedStory = exp.i18n.mode === 'story' && voiceBar.dataset.activeVoice === 'v3' && !exp.i18n.voiceLocked;
            const bidirectionalNarratorSyncOk = v2SyncedBp && v1SyncedSci && v3SyncedStory;

            // Lock custom Voice 2 (Systems Engineer) via #voiceLockBtn + selector and confirm Scientific mode does NOT override it
            voiceLockBtn.click();
            voiceSelect.value = 'v2';
            voiceSelect.dispatchEvent(new Event('change'));
            document.querySelector('#lensBar button[data-mode="scientific"]')?.click();
            const customVoiceLockOk =
              voiceLockBtn.classList.contains('on') &&
              !presetBtn.classList.contains('on') &&
              window.__progress.voiceLocked === true &&
              window.__progress.voicePreference === 'v2' &&
              voiceBar.dataset.activeVoice === 'v2';

            // Click Preset button to restore automatic mode-based voice redirection and unlock voice
            presetBtn.click();
            const restoredSciVoice = voiceBar.dataset.activeVoice;
            document.querySelector('#lensBar button[data-mode="story"]')?.click();
            const restoredStoryVoice = voiceBar.dataset.activeVoice;
            const presetResetButtonOk =
              presetBtn.classList.contains('on') &&
              !voiceLockBtn.classList.contains('on') &&
              window.__progress.voiceLocked === false &&
              window.__progress.voicePreference === 'auto' &&
              restoredSciVoice === 'v1' &&
              restoredStoryVoice === 'v3';

            exp.i18n.setLocale('es');
            exp.i18n.resetSpanishVoiceToPreset();
            exp.i18n.setMode('story');
            const esStoryDesc = document.getElementById('desc')?.textContent ?? '';
            const esInitialVoice = voiceBar.dataset.activeVoice;
            const esOptionsOk = !voiceSelect.hidden && !presetBtn.hidden && esTag.hidden && voiceSelect.options.length === 3;
            voiceSelect.value = 'spain';
            voiceSelect.dispatchEvent(new Event('change'));
            const esSpainSyncedSci = exp.i18n.mode === 'scientific' && voiceBar.dataset.activeVoice === 'spain';
            voiceLockBtn.click();
            voiceSelect.value = 'latam';
            voiceSelect.dispatchEvent(new Event('change'));
            const esLockedLatamInSci =
              voiceLockBtn.classList.contains('on') &&
              !presetBtn.classList.contains('on') &&
              window.__progress.spanishVoicePreference === 'latam' &&
              voiceBar.dataset.activeVoice === 'latam';
            presetBtn.click();
            const esRestoredPreset =
              presetBtn.classList.contains('on') &&
              !voiceLockBtn.classList.contains('on') &&
              window.__progress.spanishVoicePreference === 'auto' &&
              voiceBar.dataset.activeVoice === 'spain';
            exp.i18n.setMode('story');
            const esVoiceBadgeOk =
              esOptionsOk &&
              esInitialVoice === 'latam' &&
              esSpainSyncedSci &&
              esLockedLatamInSci &&
              esRestoredPreset;
            exp.i18n.setLocale('en');

            // Click a supply-chain chip in #io and verify navigation
            const firstChip = document.querySelector('#io .io-chip');
            let chipNavigatedPath = '';
            if (firstChip) {
              firstChip.click();
              chipNavigatedPath = location.hash;
            }
            exp.showNow(['real-cell']);

            return {
              modeButtonsCount,
              storyHasIoCard,
              blueprintHasRows: bpRows >= 4 && bpDesc !== storyDesc,
              scientificDistinct: sciDesc !== storyDesc && sciDesc !== bpDesc,
              simpleDistinct: simDesc !== storyDesc && simDesc !== sciDesc,
              esStoryDistinct: esStoryDesc !== storyDesc && esStoryDesc.length > 40,
              cookieSavedMode,
              presetVoiceByModeOk,
              bidirectionalNarratorSyncOk,
              customVoiceLockOk,
              presetResetButtonOk,
              esVoiceBadgeOk,
              chipNavigatedPath
            };
          })()
        `);
        assert.equal(lensE2E.modeButtonsCount, 4, '#lensBar must render 4 explanation mode buttons');
        assert.equal(lensE2E.storyHasIoCard, true, 'Story mode must render .io-card with subtitle and supply-chain chips');
        assert.equal(lensE2E.blueprintHasRows, true, 'Blueprint mode must render structured .io-bp-row entries');
        assert.equal(lensE2E.scientificDistinct, true, 'Scientific mode must switch #desc cleanly without reloading WebGL');
        assert.equal(lensE2E.simpleDistinct, true, 'Simple mode must switch #desc cleanly');
        assert.equal(lensE2E.esStoryDistinct, true, 'Spanish Story mode must render translated narrative');
        assert.equal(lensE2E.cookieSavedMode, true, 'Selected explanation mode must persist in CourseProgressManager & cookie');
        assert.equal(lensE2E.presetVoiceByModeOk, true, 'Preset mode must auto-redirect voices (Simple/Story -> v3, Blueprint -> v2, Scientific -> v1)');
        assert.equal(lensE2E.bidirectionalNarratorSyncOk, true, 'Unlocked narrator selector must switch both voice and explanation mode bidirectionally');
        assert.equal(lensE2E.customVoiceLockOk, true, 'Toggling #voiceLockBtn + #voiceSelect must lock custom voice across mode switches & persist in cookie');
        assert.equal(lensE2E.presetResetButtonOk, true, 'Clicking #voicePresetBtn must unlock voiceLocked and restore automatic per-mode voice sync');
        assert.equal(lensE2E.esVoiceBadgeOk, true, 'Spanish locale must expose dual LatAm/Spain narrator sync + Preajuste lock/unlock');
        assert.ok(lensE2E.chipNavigatedPath.startsWith('#'), 'Clicking a supply-chain .io-chip must navigate in Explorer');

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

        // Verify live mid-Tour persona switching (#tourLensBar, #tVoiceSelect, #tVoiceLock, #tVoicePreset, #subs subtitles, & HTTP .opus streams)
        const narratorE2E = await cdp.eval<{
          hasGlobalNarrator: boolean;
          narrHiddenDuringTour: boolean;
          hasTourVoiceControls: boolean;
          hasTourLensPills: boolean;
          initialNarrOn: boolean;
          updatedVolume: number;
          liveEnPersonaSwitchOk: boolean;
          liveEsPersonaSwitchOk: boolean;
          tourVoiceLockOk: boolean;
          allStreamsOk: boolean;
        }>(`
          (async () => {
            const exp = window.__explorer;
            const nar = window.__narrator;
            if (!nar) throw new Error('Missing window.__narrator');
            exp.i18n.setLocale('en');
            exp.i18n.resetVoiceToPreset();
            exp.i18n.setMode('story');

            const eukSteps = window.TOURS.eukaryotic.chapters.flatMap(c => c.steps);
            const firstCueId = eukSteps[0].cues[0].id;
            window.__tour.start(eukSteps[0].id);
            window.__tour.next();

            const narrWrap = document.getElementById('tNarr');
            const narrBtn = document.getElementById('tNarrBtn');
            const volInput = document.getElementById('tVol');
            const tVoiceSel = document.getElementById('tVoiceSelect');
            const tVoiceLock = document.getElementById('tVoiceLock');
            const tVoicePre = document.getElementById('tVoicePreset');
            const tourLensBar = document.getElementById('tourLensBar');
            const subsEl = document.getElementById('subs');
            if (!narrWrap || !narrBtn || !volInput || !tVoiceSel || !tVoiceLock || !tVoicePre || !tourLensBar || !subsEl) {
              throw new Error('Missing Guided Tour HUD persona/voice controls');
            }
            const narrHiddenDuringTour = narrWrap.hidden;
            const hasTourVoiceControls = tVoiceSel.options.length === 4 && !tVoicePre.hidden && !tVoiceLock.hidden;
            const hasTourLensPills = tourLensBar.querySelectorAll('button[data-mode]').length === 4;
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

            // Live mid-Tour switching in English across Pop-Culture Guide (v3), Systems Engineer (v2), and Molecular Biologist (v1)
            const enPopSub = (subsEl.textContent ?? '').trim();
            const enPopUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'en-US', root: 'real-cell' });

            tVoiceSel.value = 'v2';
            tVoiceSel.dispatchEvent(new Event('change'));
            const enBpSub = (subsEl.textContent ?? '').trim();
            const enBpUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'en-US', root: 'real-cell' });
            const bpPillActive = !!tourLensBar.querySelector('button[data-mode="blueprint"].on');

            tVoiceSel.value = 'v1';
            tVoiceSel.dispatchEvent(new Event('change'));
            const enSciSub = (subsEl.textContent ?? '').trim();
            const enSciUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'en-US', root: 'real-cell' });
            const sciPillActive = !!tourLensBar.querySelector('button[data-mode="scientific"].on');

            tourLensBar.querySelector('button[data-mode="simple"]')?.click();
            const enSimpleSub = (subsEl.textContent ?? '').trim();
            const simpleSyncedV3 = tVoiceSel.dataset.activeVoice === 'v3' && enSimpleSub === enPopSub;

            const liveEnPersonaSwitchOk =
              enPopSub.length >= 12 &&
              enBpSub.length >= 12 &&
              enSciSub.length >= 12 &&
              enPopSub !== enBpSub &&
              enPopSub !== enSciSub &&
              enBpSub !== enSciSub &&
              bpPillActive &&
              sciPillActive &&
              simpleSyncedV3 &&
              enPopUrl === 'audio/en/v3/real-cell/' + encodeURIComponent(firstCueId) + '.opus' &&
              enBpUrl === 'audio/en/v2/real-cell/' + encodeURIComponent(firstCueId) + '.opus' &&
              enSciUrl === 'audio/en/v1/real-cell/' + encodeURIComponent(firstCueId) + '.opus';

            // Test #tVoiceLock + #tVoicePreset mid-Tour
            tVoiceLock.click();
            tVoiceSel.value = 'v2';
            tVoiceSel.dispatchEvent(new Event('change'));
            tourLensBar.querySelector('button[data-mode="scientific"]')?.click();
            const lockedMidTourOk =
              tVoiceLock.classList.contains('on') &&
              window.__progress.voiceLocked === true &&
              exp.i18n.activeEnglishVoice === 'v2';
            tVoicePre.click();
            const unlockedMidTourOk =
              !tVoiceLock.classList.contains('on') &&
              window.__progress.voiceLocked === false &&
              exp.i18n.activeEnglishVoice === 'v1';
            const tourVoiceLockOk = lockedMidTourOk && unlockedMidTourOk;

            // Live mid-Tour switching in Spanish across Pop-Culture (latam), Blueprint (spain/blueprint), and Scientific (spain/scientific)
            exp.i18n.setLocale('es');
            exp.i18n.resetSpanishVoiceToPreset();
            tourLensBar.querySelector('button[data-mode="story"]')?.click();
            const esPopSub = (subsEl.textContent ?? '').trim();
            const esPopUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'es-ES', root: 'real-cell' });

            tourLensBar.querySelector('button[data-mode="blueprint"]')?.click();
            const esBpSub = (subsEl.textContent ?? '').trim();
            const esBpUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'es-ES', root: 'real-cell' });

            tourLensBar.querySelector('button[data-mode="scientific"]')?.click();
            const esSciSub = (subsEl.textContent ?? '').trim();
            const esSciUrl = nar.resolveAudioUrl({ id: firstCueId, lang: 'es-ES', root: 'real-cell' });

            const liveEsPersonaSwitchOk =
              esPopSub.length >= 12 &&
              esBpSub.length >= 12 &&
              esSciSub.length >= 12 &&
              esPopSub !== esBpSub &&
              esPopSub !== esSciSub &&
              esBpSub !== esSciSub &&
              esPopUrl === 'audio/es/latam/real-cell/' + encodeURIComponent(firstCueId) + '.opus' &&
              esBpUrl === 'audio/es/spain/blueprint/real-cell/' + encodeURIComponent(firstCueId) + '.opus' &&
              esSciUrl === 'audio/es/spain/scientific/real-cell/' + encodeURIComponent(firstCueId) + '.opus';

            exp.i18n.setLocale('en');
            exp.i18n.setMode('story');

            // Verify all 6 Tour Persona streams + Explorer 4-mode Lens streams return HTTP 200 + OggS
            const urls = [
              enSciUrl,
              enBpUrl,
              enPopUrl,
              esPopUrl,
              esBpUrl,
              esSciUrl,
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'scientific', lang: 'en-US', voice: 'v1' }),
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'blueprint', lang: 'en-US', voice: 'v2' }),
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'story', lang: 'en-US', voice: 'v3' }),
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'simple', lang: 'en-US', voice: 'v3' }),
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'story', lang: 'es-ES', esVoice: 'latam' }),
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'simple', lang: 'es-ES', esVoice: 'latam' }),
              nar.resolveLensAudioUrl({ nodeId: 'mitochondrion', mode: 'scientific', lang: 'es-ES', esVoice: 'spain' })
            ];
            const responses = await Promise.all(urls.map(u => fetch(u)));
            const buffers = await Promise.all(responses.map(r => r.arrayBuffer()));
            const allStreamsOk = responses.every((r, idx) => {
              const magic = String.fromCharCode(...new Uint8Array(buffers[idx].slice(0, 4)));
              return r.status === 200 && magic === 'OggS' && buffers[idx].byteLength > 500;
            });

            window.__tour.exit();
            return {
              hasGlobalNarrator: window.__tour.T.narrator === nar,
              narrHiddenDuringTour,
              hasTourVoiceControls,
              hasTourLensPills,
              initialNarrOn,
              updatedVolume,
              liveEnPersonaSwitchOk,
              liveEsPersonaSwitchOk,
              tourVoiceLockOk,
              allStreamsOk
            };
          })()
        `);
        assert.equal(narratorE2E.hasGlobalNarrator, true, 'Static .opus narrator must be wired into window.__tour');
        assert.equal(narratorE2E.narrHiddenDuringTour, false, '#tNarr control must be visible in guided tours');
        assert.equal(narratorE2E.hasTourVoiceControls, true, '#tVoiceSelect, #tVoiceLock, and #tVoicePreset must be wired inside #tNarr');
        assert.equal(narratorE2E.hasTourLensPills, true, '#tourLensBar must render 4 live persona mode buttons inside #tourBar');
        assert.equal(narratorE2E.initialNarrOn, true, 'Narration must start enabled by default');
        assert.equal(narratorE2E.updatedVolume, 0.65, '#tVol slider must update narrator volume');
        assert.equal(narratorE2E.liveEnPersonaSwitchOk, true, 'Mid-tour switching in EN must update #subs subtitles and route .opus across v1/v2/v3');
        assert.equal(narratorE2E.liveEsPersonaSwitchOk, true, 'Mid-tour switching in ES must update #subs subtitles and route .opus across latam & spain/blueprint+scientific');
        assert.equal(narratorE2E.tourVoiceLockOk, true, '#tVoiceLock and #tVoicePreset must lock and unlock custom voice mid-Tour');
        assert.equal(narratorE2E.allStreamsOk, true, 'All EN & ES multi-persona tour + lens .opus streams must return HTTP 200 with OggS headers');

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
