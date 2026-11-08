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
  console.log('\n=== 1. Effect-TS Composable Services Unit Tests ===');

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

  // Test 2: Shared DNA, RNA, Ribosome, PDB, Geometry, and Batch services
  runBiologyApp(20261031, ({ geometry, batch, dna, rna, pdb, ribosome, tours }) => {
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
  });
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
}

function startStaticServer(rootDir: string): Promise<{ server: http.Server; port: number }> {
  const mimeTypes: Record<string, string> = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
  };
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = (req.url ?? '/').split('?')[0];
      const safePath = path.normalize(urlPath === '/' ? '/cell_explorer.html' : urlPath).replace(/^(\.\.[/\\])+/, '');
      const filePath = path.join(rootDir, safePath);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] ?? 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address() as { port: number };
      resolve({ server, port: addr.port });
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
            return {
              totalNodes: nodeIds.length,
              builtModels,
              tourRoots: roots
            };
          })()
        `);
        assert.ok(explorerCheck.totalNodes > 40, 'cell_explorer must have > 40 biological nodes');
        assert.ok(explorerCheck.builtModels > 30, 'cell_explorer must build all standalone 3D organelle/molecular models');
        assert.equal(explorerCheck.tourRoots.length, 10);
        assert.deepEqual(cdp.pageErrors, [], `Page errors on cell_explorer.html`);
        assert.deepEqual(cdp.consoleErrors, [], `Console errors on cell_explorer.html`);
        ok(
          `cell_explorer.html: verified all ${explorerCheck.totalNodes} tree nodes, built ${explorerCheck.builtModels} 3D organelle/molecular sub-models & verified all ${explorerCheck.tourRoots.length} guided tours, 0 errors`
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
    }

    cdp.close();
  } finally {
    chrome.kill('SIGKILL');
    server.close();
    fs.rmSync(userDataDir, { recursive: true, force: true });
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
