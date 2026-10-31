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
| Up one level | goes to the parent |
| Hide tags | hides or shows the tags |
| Pause / Rotate | stops or starts the turntable; in a realistic page, pauses its animation |
| Realistic look / X-ray look | switches the look; in a realistic page, cycles its organelle look instead |
| Close cutaway | closes or opens the cutaway (realistic pages only) |
| Save PNG | saves the view, with the legend stamped in |

Keyboard and mouse:

- **Esc:** up one level.
- **W A S D:** move the camera in realistic pages (forwarded to the iframe).
- **Mouse:** drag to rotate, scroll to zoom. In realistic pages, drag turns the camera in place (mouse look).
- **Narrow screens** (below 900 px): the columns stack.

**Addressing.** The path is kept in the URL hash, for example `#real-plant/real-chloroplast/real-thylakoid/psii-real`:

- **Back/forward and shared links work:** `hashchange` calls `go(validPath(...))`.
- **Bad paths are cut short:** `validPath` keeps the longest prefix where each id exists and is a child of the one before.
- **The first id must be a root:** otherwise the path falls back to `real-cell`.

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

`window.__explorer` exposes `NODES`, `build`, `go`, `showNow`, `setLook`, `setHover`, the `scene`, `renderer`, `camera`, `composer`, `controls`, `cur` (the shown model, with `.anchors`), `frame` (the current iframe), `realPts` and `layoutLabels`.

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
