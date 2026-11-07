# How the Cell Explorer is built

A manual for another agent (or person) who needs to understand, extend or rebuild `cell_explorer.html`: the page that lets you inspect every part of a cell, then every part of that part, down to atoms. It explains the recursive tree, how each level's 3D model is built, how a part is built once on its own and then reused inside bigger levels, the x-ray and realistic looks, the tags, the menu, how the realistic cell pages are embedded, and how to add something new.

The page is one HTML file with one ES-module script, built on three.js 0.160 from a CDN. There is no build step: edit it directly. It is large (about 3,200 lines, roughly 1 MB, most of it embedded protein data), so search it by section banner (`// =====`) and by function name rather than reading it top to bottom.

The three realistic cells it embeds each have their own manual:

- [animal_cell_realistic_manual.md](animal_cell_realistic_manual.md)
- [plant_cell_realistic_manual.md](plant_cell_realistic_manual.md)
- [prokaryote_cell_realistic_manual.md](prokaryote_cell_realistic_manual.md)

---

## 1. The idea in one paragraph

Everything you can look at is a **node** in one table, `NODES`. A node has a name, a scale, a description, a list of **children** (other node ids) and either a **builder** function `b` or a **realistic view** `real`.

- **A builder node:** the builder returns a 3D model plus **anchors**, which are points on the model with a text and, optionally, the id of the child they open. The explorer draws each anchor as a tag with a leader line; clicking a tag opens that child, which is again a node with its own model and anchors. That is the whole recursion.
- **A realistic node:** it shows one of the realistic cell pages in an iframe instead, and the page tells the explorer where its tag points are on screen.

---

## 2. Screen layout and the menu

The layout is a three-column grid (`#app`):

| Area | Element | What it does |
|---|---|---|
| Left | `#tree` | **Roots** (`#roots`: *Realistic cell*, *Realistic plant cell*, *Realistic bacterium*) and the **structure tree** (`#treeBody`). Each row has a caret (expand/collapse) and the node's name (open it). Hovering a name outlines that part in the 3D view, if the current model contains it. |
| Middle | `#stage` | The WebGL canvas, or a realistic page in an iframe (`.real`). On top of it: `#lines` (SVG leader lines), `#labels` (tag buttons), `#crumbs` (breadcrumb path, clickable), `#legend` (colour key when the node has one), `#hint`, `#busy` ("Building model…"). |
| Middle, bottom right | `#toolbar` | See the table below. |
| Right | `#info` | Level number, title, scale, description. For parts of a realistic cell, it also shows **Takes in / Gives out** (from the page's recipes). Then **Made of** (one button per child, opens it), and for realistic levels **What moves** (Metabolism on/off, speed slider, the molecule symbols; hover one to follow it). |

The toolbar buttons:

| Button | What it does |
|---|---|
| Guided tour | starts the guided tour (§12); shown only on the *Realistic cell* root |
| Up one level | goes to the parent |
| Hide tags | hides or shows the tags |
| Pause / Rotate | stops or starts the turntable; in a realistic page, pauses its animation |
| Realistic look / X-ray look | switches the look; in a realistic page, cycles its organelle look instead |
| Close cutaway | closes or opens the cutaway (realistic pages only) |
| Save PNG | saves the view, with the legend stamped in |

Keyboard and mouse:

- **Esc:** up one level (during the guided tour, the tour's own keys apply: §12.5).
- **W A S D:** move the camera in realistic pages (forwarded to the iframe).
- **Mouse:** drag to rotate, scroll to zoom. In realistic pages, drag turns the camera in place (mouse look).
- **Narrow screens** (below 900 px): the columns stack.

**Addressing.** The path is kept in the URL hash, for example `#real-plant/real-chloroplast/real-thylakoid/psii-real`:

- **Back/forward and shared links work:** `hashchange` calls `go(validPath(...))`.
- **Bad paths are cut short:** `validPath` keeps the longest prefix where each id exists and is a child of the one before.
- **The first id must be a root:** otherwise the path falls back to `real-cell`.
- **`#tour`** opens the guided tour's title card, and **`#tour=<step id>`** starts the tour at that step (§12).

---

## 3. The node table (`NODES`)

`NODES` has 137 entries. The fields:

| Field | Meaning |
|---|---|
| `name` | Title in the tree, the info panel and the breadcrumbs |
| `scale` | Real size, as text (`'~11 nm'`) |
| `desc` | One paragraph for the info panel. Plain, accurate biology. |
| `children` | Node ids this level is made of. They appear in the tree and under **Made of**, and only these ids can be opened from its tags. |
| `b` | Builder function → `{ group, anchors, radius }` (§4). Omitted for realistic nodes. |
| `legend` | Optional colour key: `[[key, label], …]`. A key is a base letter (`'A'`, `'T'`, `'G'`, `'C'`, `'U'`, drawn as a lettered chip), `'bb0'`/`'bb1'` (DNA backbone colours) or a `'#rrggbb'` colour (drawn as a bar). Shared keys: `LEG_DNA`, `LEG_RNA`, `LEG_REAL`, `LEG_FORK`, `LEG_THYL`, `LEG_WALL`. |
| `real` | For realistic nodes: the preset view name in the realistic page (`'cell'`, `'nucleus'`, `'thylakoid'` …) |
| `page` | For realistic nodes: which page (`'plant_cell_realistic.html'` …). Omitted means the animal page. |
| `hi` | For realistic nodes: the page's legend key to light up while this level is shown |
| `tags` | For realistic nodes: `[[pointName, text, childId or null, partKey], …]`. `pointName` is asked of the page, and `partKey` is lit up when the tag is hovered. |

A node can be reached from many parents: `ribosome` is a child of the cell, the rough ER, the nucleolus … A child may also be its own ancestor's sibling. The tree is really a graph, walked as a tree from the root you chose.

Order in the file: the old animal-cell levels (cell → membrane → lipids → atoms), then the cytoskeleton, nucleus, organelles, the plant and prokaryote levels, the protein levels, the realistic nodes, and finally the atoms.

---

## 4. Builders: how one level's model is made

### 4.1 The contract

```js
function buildSomething() {
  const g = new THREE.Group();
  // … add meshes to g …
  return finalize(g, [A(point, 'Label', 'child-id'), A(point2, 'Label without a link')], radius /* optional */);
}
```

- **`A(p, text, id)`** makes an anchor. It gets a tag and a leader line. With `id` the tag is a link (blue, with ›), and it is kept as a link only if `id` is in the node's `children` (`build()` checks this).
- **`finalize(g, anchors, radius)`** wraps the group. If no radius is given, it recentres the model and its anchors on the bounding sphere and measures the radius.
- **The camera is fitted automatically:** `frame(radius)` places it so the model fills the stage.
- **Units are free per level.** Each builder works in whatever units read well (the cell is radius 10, a protein about 20, an atom about 1), because `frame` fits whatever radius comes back. Levels are not to scale with each other; the `scale` text says the real size.
- **Randomness is per level.** `build(id)` sets the seed to `hashStr(id)` first, so a level always looks the same.
- **Caching:** `build(id)` caches the result, and collects animation hooks (§4.4).

### 4.2 Helpers you build with

| Helper | Use |
|---|---|
| `xray(colour, int, pow, base)` | the **translucent "x-ray glass"** look (see below) |
| `std(colour, {rough, glow, opacity})` | a lit, slightly self-glowing solid (proteins, molecules). Cached by its arguments. |
| `plain()` | white standard material for instanced meshes with per-instance colours |
| `sphere(r, mat)`, `blob(r, mat, amp, freq)` | sphere; noisy blob (`displace` with fbm noise) |
| `tube(points, r, mat)`, `stick(a, b, r, mat)`, `cylM(a, b, r)` | tubes along curves; rods between two points; the matrix for an instanced rod |
| `instanced(geo, mat, matrices, colours)` | one `InstancedMesh` for many copies: use it for anything repeated more than a few dozen times |
| `cloud(parent, n, sampler, colour, size, opacity)` | soft additive point cloud (ribosome haze, matrix granules) |
| `walk(start, steps, len, keep)` | random walk, for ER, filaments |
| `ptFrames`, `coilAlong`, `dnaAlong(curve, turns)` | frames along a curve; a coil; a full double helix with coloured rungs |
| `molecule(atoms)` | ball-and-stick molecule from `[element, x, y, z]` in Å; element colours and radii in `EL` |
| `lipidField({w, d, sp, hole, skip, head, tail})` | an instanced lipid bilayer patch, with holes for proteins |
| `sugarTree`, `baseLetter` | branched glycans; a camera-facing letter disc for a DNA base |
| `M4(p, q, s)`, `qFromTo(a, b)`, `sph(phi, theta, r)`, `randDir`, `fibDir`, `rr` | math |
| `C`, `CP` | the colour tables for organelles: `C` for the animal and shared parts (`C.mito`, `C.er`, …), `CP` for plant parts (`CP.chl`, `CP.vac`, `CP.wall`, …). Reuse them so a part has the same colour at every level. |

**Translucent "x-ray glass" (`xray`).** It is a custom `ShaderMaterial`. Its brightness depends on the angle to the viewer, `pow(1 − |n·v|, uPow)`, so surfaces glow at their edges and are clear face-on. It is additive (`AdditiveBlending`), with no depth writing, and drawn on both sides.

- **What the parameters do:** `int` is how bright the edges are, `pow` how thin the glowing rim is (higher is thinner), and `base` a faint constant fill.
- **How organelles use it:** two or three nested shells of the same shape (an outer membrane bright, an inner one dimmer) read as a translucent double membrane.
- **Matching the cutaway:** cutaway spheres use `SphereGeometry` angle limits `CUT` and `inCut(d)`, which open a 90° wedge facing the camera.
- **Caching:** materials are cached by their arguments (`matCache`), so reuse is free.

### 4.3 Building a part once, then reusing it (isolation, then composition)

**Every organelle is first a level of its own.** It has its own node, builder, tags and description, and is checked on its own. **Bigger levels then reuse that same model** rather than drawing a second, simpler version. That keeps what you see in the cell identical to what opens when you click its tag. The tools:

| Tool | What it does |
|---|---|
| `make<Part>()` | Builds the bare model in its own frame and returns `{ group, an }`, where `an` holds named points of interest. Example: `makeMitochondrion()`. |
| `build<Part>()` | The level itself. It calls `make<Part>()`, turns or frames it, and turns `an` into anchors with `A(...)`. Example: `buildMito()`. |
| `partModel(id)` | Builds another node's model **with that node's own seed** (`liteModel` saves and restores the caller's seed). The copy matches the level exactly, and the caller's random sequence is untouched. |
| `nest(parent, built, pos, scale, rot)` | Places a built sub-model inside another and **carries its anchors along**, transformed into the parent's frame, so the parent can reuse the child's tags. |
| `tagFrom(g, from, id)` | Marks every object added to `g` since index `from` as part `id`. Hovering that part in the tree or a tag then outlines it (OutlinePass). Call it after each part of a composite: `mk = tagFrom(g, mk, 'mitochondrion')`. |
| `withClip(obj, planes)` | Gives a copied model the clipping planes of the cell it sits in |
| a `lite` flag (`buildVesicle(true)`, `buildCilium(true)`) | A lighter version for when a part is repeated many times |
| `.clone()` | Copies share geometry and materials. `buildCell` makes 11 mitochondria from one `makeMitochondrion()` this way. |

`buildCell()` and `buildPlantCell()` are the worked examples. Their nodes, `cell` and `plant-cell`, are no longer reachable from `ROOTS` (only the realistic roots are), but their code shows the pattern; view one with `__explorer.showNow(['cell'])`. Each organelle is placed with `spot(...)`, a helper local to each builder (the two take different arguments), (a random free position away from the nucleus and from everything placed), copied from its own level, scaled, turned, tagged with `tagFrom`, and given one anchor at the copy nearest the viewer (`front(list)`).

### 4.4 Animation and live points

- **Animation:** give any object `userData.tick = dt => { … }`. `build()` collects these into `out.ticks`, and the loop calls them every frame. Rotary motors (`rotor.rotation.y += dt * 2.2`), kinesin walking, and an electron moving along a chain all use this.
- **Live points:** `out.onFrame` runs every frame after the ticks. Use it to keep an anchor attached to a moving part.
- **Entrance:** the model eases in from 90% to full size over 0.45 s when a level opens.

---

## 5. Looks

### 5.1 X-ray (default)

A black background, `xray` glass and `std` solids, a soft bloom, no tone mapping.

### 5.2 Realistic look (the toolbar button)

`setLook(true)` switches on the following, and remembers the choice in `localStorage` (`cellLook`):

- **Lighting:** a studio environment map (`RoomEnvironment`), ACES tone mapping, and rim and warm lights.
- **Background and camera effects:** a dark-field gradient background, a depth-of-field pass (`BokehPass`, focus kept just in front of the orbit centre) and a "lens" pass (chromatic fringing, vignette, film grain).

**`prepReal(out)`** converts a model the first time it is shown in the realistic look:

- **Its x-ray materials:** each gets a dimmer clone (`uInt` scaled down).
- **Large x-ray meshes** (bounding radius > 0.25 world units, not tubes or instanced) also get a **glass shell**: a `MeshPhysicalMaterial` with clearcoat, iridescence and sheen, transparent, on the same geometry.
- **How glassy a shell is:** dense organelles (by their x-ray colour, in the table `DENSE`) get a more opaque, tinted glass; everything else gets a clear shell. `TUBE_DIM` and `NO_GLASS` tune tubes and special colours.
- **Point clouds:** they get stronger and slightly larger.

`applyLook(out)` swaps materials back and forth, so both looks stay cached.

To make a new organelle look right in both, **pick its x-ray colour from `C`** and, if it should look dense (opaque-ish) in the realistic look, add that colour to `DENSE`.

### 5.3 Hover highlight

Hovering a tree name, a **Made of** button or a tag runs `setHover(id)`:

- **If the model contains that part** (objects marked by `tagFrom`, found by `partsOf(id)`), they are outlined.
- **Otherwise** pulsing ring sprites mark the part's anchor points.
- **In a realistic page**, the part's legend key is lit inside the page instead (`realHover`).

---

## 6. Tags and leader lines

`makeLabels()` makes one element per anchor: a `<button>` for links, a `<div>` otherwise, plus an SVG polyline and a dot. `layoutLabels()` runs every frame:

1. **Project.** Each anchor is projected to the screen (for realistic pages, the page sends ready-made screen points).
2. **Hide.** Points that are behind the camera or far off screen are hidden.
3. **Split.** The rest go to a left or right column depending on which half of the stage they fall in.
4. **Space them out.** In each column the tags are sorted by height and pushed apart to at least 30 px; the left column starts below the legend.
5. **Draw.** Each leader line runs from the point to a bend 18 px from the tag and then to the tag.

**Rules for good anchors:**

- **Visible from the default view:** put the point on the part's surface facing the default camera, `V(.42, .22, 1)` direction, not inside it.
- **No crowding:** keep anchors apart, since tags stack in two columns.
- **About 4–12 tags** per level.

---

## 7. Realistic levels (pages in an iframe)

`PAGES` lists the realistic pages: `animal_cell_realistic.html`, `prokaryote_cell_realistic.html` and `plant_cell_realistic.html`. Each is loaded once, as `<page>?embed`, into an iframe the first time it is needed, and then kept, hidden while another level is shown.

**The flow:**

1. **Open.** `showReal(id)` shows the node's page and sends `{ to: 'realistic-cell', cmd: 'view', view: n.real, points: [tag point names], seq }`.
2. **Answer.** The page moves its camera to that preset and, every frame, posts `{ from: 'realistic-cell', type: 'pts', seq, pts: [[x, y, inFront] or null, …] }`. Points from an older view (wrong `seq`) are ignored.
3. **Ready.** Once built, the page posts `type: 'ready'` with its molecule symbols, its `INFO` recipes and its `PARTS`. Until then the stage says "Building model…".

**Commands sent to the page:**

| Command | What it does |
|---|---|
| `view` | moves to a preset and asks for tag points |
| `hi` | lights up a part |
| `mol` | follows one molecule symbol |
| `motion` | pauses or plays |
| `look` | cycles the organelle look |
| `cut` | closes or opens the cutaway |
| `flow` | switches the metabolism on or off |
| `speed` | sets the speed |
| `key` | presses or releases W A S D |
| `snap` | asks for a PNG |

**Messages from the page:** `ready`, `pts`, `state` (to label the buttons), `snap` and `key` (Escape, to go up a level).

**Recipes.** `RECIPE[page]` maps tree ids to the page's own part keys. That is how **Takes in / Gives out** appears even on ordinary child levels (for example `mitochondrion` → `mito`) while you are inside a realistic root.

**Messages must be told apart by sender.** Every page posts `from: 'realistic-cell'`, so the explorer tells them apart by `event.source`, comparing it with each iframe's `contentWindow`.

**Two pitfalls:**

- **Background tabs.** A page only answers while its animation frames run. In a background tab or a hidden browser pane they stop, so tags do not appear until the pane is visible.
- **Caching.** After editing a realistic page, the iframe may keep an old copy: run `fetch(page, { cache: 'reload' })` and reload.

---

## 8. Real protein structures in the explorer

`BPDB` holds full coarse-grained structures (one bead per amino acid or nucleotide, and one per chlorophyll for plant photosystems), base64 Int16 at 0.1 Å, with a kind byte `group × 4 + part`, where `part` is 0 for an amino acid, 2 for a nucleotide and 3 for a chlorophyll.

- **`bactModel(key, colour, upright)`** builds a bacterial structure as one `InstancedMesh` of icosahedra.
- **`plantModel(key, colour, upright = true, copies = [[0, 0, 0]])`** does the same for plant structures, with green chlorophyll beads. `colour(group, copyIndex)` returns a colour for each bead. `copies` is a list of `[angle, x, y]` (Å) repeats round the z axis: the cellulose synthase rosette is six copies of a trimer. It returns `{ g, beads, of }`, where `of(test)` gives the points of the beads that pass `test` (each bead has `p`, `g`, `chl`, `c`).
- **Upright** turns a membrane protein so its outside (OPM +z) points up.
- **Builders** such as `buildPsiiReal` colour by group and place anchors with `outmost(points)` (of a group's beads, the one farthest out from the model's centre, on that group's side), `topOf` and `lowOf`.

How this data is made is in [tools/README.md](../tools/README.md).

---

## 9. How to add things

### 9.1 A new part (organelle, complex, molecule)

1. **Build it in isolation first.** Write `make<Part>()` → `{ group, an }` and `build<Part>()` → `finalize(g, anchors)`.
2. **Add its node.**
   - Give it `name`, `scale`, `b: build<Part>`, `children` and `desc`, plus a `legend` if it uses colour codes.
   - Every `id` used in its anchors must be in `children`.
   - Children that don't exist yet must be added as nodes too (or left out).
3. **Open it on its own,** at `#<root>/…/<your-id>`:
   - Check it fits the frame and the tags are readable.
   - Check it reads in both looks.
   - Check hovering each child outlines something (use `tagFrom` if not).
4. **Only then compose it into its parents.**
   - **Add it to their `children`.**
   - **Place it in the parent builder:** `const m = partModel('<your-id>').group; m.scale.setScalar(…); m.position.copy(<a free position>); g.add(m); mk = tagFrom(g, mk, '<your-id>'); an.push(A(…, 'Name', '<your-id>'))`. The free position comes from the parent builder's own placement helper (the `spot` inside `buildCell` or `buildPlantCell`), or a fixed point.
   - **Reachable:** the parent must itself be reachable from a root (`ROOTS`), or the part can't be opened.
   - **Many copies:** for more than a few, `.clone()` one copy, or use a lite version.
5. **If a realistic page contains it,** add `RECIPE[page][id] = '<page key>'` so its recipe shows.

### 9.2 A new realistic level (a new preset view in a realistic page)

1. **In the page:** add a view to `VIEWS` and its tag points to `pointsOf(view)`.
2. **In the explorer:** add a node with `real: '<view>'`, `page`, `hi`, `tags` and `children` (every tag's child id must be in `children`), and add it to its parent's `children`.
3. **Check:** open it in the explorer and make sure **every tag shows**. The stage is narrower than the full page, so points near the edge of the page's view fall outside: move them inward.

### 9.3 A new realistic cell (a new root)

1. Build the page by following the realistic-cell manuals and [how_to_build_a_cell_or_organelle.md](how_to_build_a_cell_or_organelle.md).
2. Add it to `PAGES` (title, and the label of its look button).
3. Add its root node, its realistic levels, and a `RECIPE` entry.
4. Add `['<root-id>', 'Button label']` to `ROOTS`.

---

## 10. Scripted checks

`window.__explorer` exposes `NODES`, `build`, `go`, `showNow`, `setLook`, `setHover`, the `scene`, `renderer`, `camera`, `composer`, `controls`, `cur` (the shown model, with `.anchors`), `frame` (the current iframe), `realPts`, `layoutLabels` and `tour` (the same object as `window.__tour`, §12.6).

- **`showNow(path)`** switches level synchronously and renders one frame. Use it when animation frames are throttled.
- **Checking tags:** after a switch, `document.querySelectorAll('#labels > *')` are the tags. A tag with `style.display === 'none'` is hidden (off screen or behind the camera).
- **Checking a realistic page:** read `__explorer.frame.contentWindow.__cell` for the page's own debug hook.

Check every new or changed level this way:

- **Every tag shows.**
- **Every link opens.**
- **No console errors.**
- **Both looks render.**

---

## 11. Pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| A tag is shown but not clickable | its `id` is not in the node's `children` | add the child, or drop the id |
| A part in the cell differs from what opens when clicked | the cell drew its own simpler version | build it with `partModel(id)` or clone `make<Part>()` |
| Everything after a new part in a builder looks different | the new code drew extra random numbers from the level's stream | build sub-parts with `partModel`/`liteModel` (own seed), or add new random code at the end of the builder |
| Hovering a part outlines nothing | its objects were not marked | `tagFrom(g, mk, id)` after adding them |
| Tags missing on a realistic level | the iframe is in a background tab, or the points fall outside the narrower stage | bring the pane up; move the points inward in the page's `pointsOf` |
| An edited realistic page doesn't change in the explorer | iframe cache | `fetch(page, { cache: 'reload' })`, then reload |
| A copied model is not cut by its cell's cutaway | its materials lack the cell's clipping planes | `withClip(copy, planes)` |
| Realistic look turns an organelle into milky glass | its x-ray colour is not in `DENSE` | add `colourHex: [opacity, tint]` to `DENSE` |
| A tour step never gets past its flight | the pane is hidden, so the page sends no `arrived` | the engine goes on after the flight time plus 2.5 s anyway; bring the pane up to check visually |
| A tour tag points at a different organelle than the one framed | the tag uses the cell view's point (`cell:mito`), which picks its own instance | use `focus:mito`: the centre of the framed part |
| A tour step's part is hidden behind others | the step does not fade the rest | leave `ghost` out (it defaults to the blinked part), or list the parts to keep |
| Explorer keys don't work during the tour after clicking the cell | the iframe has the keyboard | the page forwards the tour's keys (`key` messages); add a new key to both the page's forward list and `tourKey` |

---

## 12. The guided tour

A tutorial mode for the realistic animal cell, designed in [tutorial_mode_spec.md](tutorial_mode_spec.md). It works like a video game's tutorial:

- **The path:** the camera flies from the whole cell to each part in turn.
- **For each part:**
  - it blinks three times, then glows, while the rest of the cell fades;
  - subtitles explain it, one short line at a time;
  - arrows and travelling molecules link it to the parts it works with.
- **At any moment you can:**
  - **explore** freely, then go back to the tour;
  - **open the part in more detail:** its own explorer level, down to molecules.

There is no voice. A narrator can be plugged in (§12.6).

### 12.1 Where the pieces are

| Piece | Where |
|---|---|
| The script | `tours/eukaryotic_cell.js`, a plain script that sets `window.TOURS.eukaryotic`. Its header comment documents every field. It is the one file outside the HTML pages, so writers can edit the words without touching code, and a `<script src>` also loads from `file://`. |
| The engine, subtitles and controls | `cell_explorer.html`, the section after the `// The guided tour` banner (`T`, `playStep`, `arrive`, `startCue`, `tourTick`, `tourKey` …), with the markup in `#stage` (`#tourBar`, `#subs`, `#tourCtl`, `#tMenu`, `#tPill`, `#tCard`, `#tFade`) and the styles after the `/* the guided tour */` comment |
| Camera flights, framing, blink and fade | `animal_cell_realistic.html`, the section after `// The guided tour (driven by the Cell Explorer)`. Its messages are in [animal_cell_realistic_manual.md](animal_cell_realistic_manual.md) §10.2. |

### 12.2 The script

The script has chapters, which hold steps, which hold cues. Every field is documented in the script's header comment; the important ones:

- **`camera`:** where the camera goes, in one of three forms:
  - a preset view, `{ view: 'cell' | 'nucleus' | 'nucleolus' | 'DNA' }`;
  - a framed part, `{ part, dist }`;
  - an explicit pose, `{ pos, target }`.

  `dur` (seconds at 1×) and `orbit` (degrees a second) are optional.
- **`blink` and `ghost`:** the part that lights up, and the parts that stay while the rest fades. Leave `ghost` out to keep only the blinked part; set it to `false` to fade nothing.
- **`tags`:** written `view:point`.
  - **The view** is `cell`, `nucleus`, `nucleolus`, `DNA` or `focus`.
  - **The tag's text and the child it opens** come from the explorer node of that view (`VIEW_NODE`: `real-cell`, `real-nucleus`, `real-nucleolus`, `real-dna`).
  - **`focus:<part>`** points at the centre of the part the camera framed, and takes its text from `real-cell`'s tags.
- **`links`:** arrows, written `[from, to, label, colour part]`. Arrow *k* appears with cue *k*.
- **`detail`:** the node opened by **More detail**, by the step's tag, or by the blinked part's name in a subtitle.
- **`cues`:**
  - **`id`:** permanent, because recorded narration is filed under it.
  - **`text`:** at most two lines of 42 characters. The engine warns in the console when a cue is longer, or when it names an unknown part.
  - **`say`:** optional, a version written for speaking.
  - **`dur`:** optional, a fixed duration.
  - **`blink`:** optional, a part lit while the cue shows (used for the roll call and the "working together" chapter).
- **Coloured names:** `[[label|part]]` draws a part's name in its legend colour; hovering it lights the part, and clicking it opens the part in more detail. `[[label]]` uses the step's blinked part.

### 12.3 How a step plays (`playStep` → `arrive` → `startCue`)

1. **Start of the step:**
   - clear the last step's blink, fade and followed molecule;
   - set the page's switches (`set`: look, cut, flow, motion);
   - show the step's tags (`showStepTags` sends `track`, so their points come back every frame);
   - send `fly` with a sequence number.
2. **The flight ends:** the page replies `arrived` with that number. A reply for an older step is ignored, so fast clicking never stacks flights. If no reply comes (a hidden pane has no animation frames), the engine goes on after the flight time plus 2.5 s.
3. **Show the part:** `blink` and `ghost` (or `isolate`, when **Show alone** is on); `mol` if the step follows a molecule.
4. **Then the words:** after 1.3 s, the first cue.
5. **Each cue's duration:**
   - **On reading time alone:** 1.5 to 7 s, at 15 characters a second, plus 0.3 s, divided by the pace.
   - **With a narrator:** the cue also waits until the narrator's promise resolves.
   - **Between cues:** a 0.15 s fade.
6. **After the last cue:** the next step starts 0.8 s later, or a "Next" hint waits when auto-advance is off. The chapter is marked as seen (`localStorage` `tourSeen`), and the position is saved in `tourPos`.

### 12.4 Modes

| Mode | What shows | How it starts and ends |
|---|---|---|
| `intro` | the title card over a slowly turning cell | **Guided tour** button or `#tour`; Start, Continue (from `tourPos`), Choose a chapter |
| `tour` | full-width stage, tour bar, subtitles, control bar; the tree, info panel and toolbar are hidden | pauses with Space; More ▸ opens the info panel about the step's part (`showMore`) |
| `detail` | the part's explorer level, with the info panel and breadcrumbs; its description is read as subtitles, a sentence at a time (or `TOUR.details[id].cues`) | a tag, a coloured name, or More ▸ → Open this part; **Back to tour** or E restarts the step |
| `explore` | the normal explorer, with a "Back to tour" pill; the page's own camera and the user's settings come back | Explore or E; Back to tour or E or Esc restarts the step at its line |
| `finished` | a card: Explore, Replay a chapter, Leave the tour | after the last cue |

**Leaving the tour.** Exit, or Esc pressed twice within 2.5 s. This frees the camera, clears the blink and fade, and puts back the look, cutaway, metabolism and motion the user had before the tour.

### 12.5 Controls and keys

The control bar holds:

- **Moving:** ⏮ ⏭ (previous and next part), ◀ ▶ (previous and next line), ⏸ / ▶ Play.
- **Subtitles:** CC (on and off) and Aa (size S/M/L).
- **🔊 Narration** with a volume slider, shown only once a narrator is set.
- **Pace:** 0.75×, 1× or 1.25×. It changes the subtitle timing and the flights, not the metabolism.
- **Show alone, More ▸ and Explore.**

Two more places hold settings and navigation:

- **The menu (≡ Chapters):** chapters with ticks; the current chapter's transcript, where clicking a line jumps to it; and settings for auto-advance, reduced motion, size and pace.
- **The subtitle box:** clicking it pauses.

| Key | Action |
|---|---|
| Space | pause / play |
| → / ← | next / previous line |
| Shift + → / ← | next / previous part |
| PageDown / PageUp | next / previous chapter |
| 1–7 | jump to a chapter |
| C / N / M | subtitles / narration / menu |
| E | Explore, or back to the tour |
| Esc | twice to leave; in Explore or a detail level, back to the tour |

The keys also work once the cell has the keyboard, for example after a drag: the realistic page forwards them as `key` messages. W A S D move the camera only in Explore and detail. During the tour a drag only glances around (up to 25°) and springs back.

**Reduced motion** is taken from `prefers-reduced-motion`, or set in the menu. With it on:

- flights become a 0.3 s fade (`#tFade`);
- blinks become a steady glow;
- the arrows stop moving.

**Narrow screens:**

- **Below 720 px,** the bar keeps ◀ ⏯ ▶, CC and Explore; the other controls are in the menu.
- **Below 900 px,** the stage takes the whole height.

### 12.6 The narrator, events and the API

`window.__tour` (also `__explorer.tour`):

| Call | Does |
|---|---|
| `start(at?)` | the title card, or a step by id (also `#tour`, `#tour=<step>`) |
| `goto(stepOrCueId)` | jump there (starting the tour if needed) |
| `play()`, `pause()`, `next()`, `prev()`, `nextStep()`, `prevStep()`, `explore()`, `back()`, `exit()` | as the controls |
| `state` | `{ on, mode, phase, step, cue, paused }` |
| `cues()` | every cue: `{ id, text, plain, say, chapter, step }`, for recording narration |
| `setNarrator({ speak(cue) → Promise, stop(), setVolume(v) })` | plug in a voice; `null` removes it |
| `on(type, fn)` | `cue`, `step`, `state`, `end` (also `CustomEvent`s `tour:<type>` on `window`, and `postMessage({ from: 'cell-tour', type, … })` to a parent frame) |
| `setReduceMotion(v)`, `setAuto(v)` | the two settings |

A narrator built on recorded files plays `audio/<cue.id>.mp3` in `speak` and resolves when it ends. A narrator that speaks live uses `cue.say`.

### 12.7 Adding to the tour

- **A cue:** add it with a new, permanent `id`. Keep it under 84 characters, and check the console for warnings.
- **A step:**
  1. Choose its camera.
     - **A part that `focusOf` already knows:** `{ part }`.
     - **A new one:** add its centre and radius to `AT` in the page's `focusOf` (animal manual §10.2).
  2. Check the framing with `__tour.goto(id)` and a screenshot. The part should show, not be hidden behind others, and not be under the subtitles.
  3. If the step should open an explorer level, give it a `detail`.
- **A tour for another cell:**
  1. Give that page the same messages (`track`, `fly`, `free`, `blink`, `ghost`, `set`, `arrived`).
  2. Write `tours/<cell>.js`.
  3. Generalise `TOUR` and `TOUR_PAGE` to choose by root.

### 12.8 How it was checked

- **Every step's framing:** all 31 steps, with the tags and subtitles, screenshotted at 1400 × 860.
- **Fast clicking:** 20 quick presses of next and next part leave one flight and one subtitle, matching the step (the page's `tour.seq` equals the engine's).
- **Explore and detail:** Explore → Back, and a tag → detail → Back, return to the same step.
- **Narrator:** a fake narrator with 7 s of speech holds a 2.6 s line for 7.2 s; pausing calls `stop`; the 93 cue ids are unique.
- **Keys:** they work from both the explorer and the iframe; Esc twice exits.
- **Reduced motion:** the first line shows 0.3 s after a step starts.
- **Phone screens:** the layout works at 375 px.
- **Speed:** the frame rate with the rest faded is not lower than without (91 against 80 fps).
- **Layout:** the realistic cell's fingerprint is unchanged by the page's new code.
