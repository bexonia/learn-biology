# How to build a new cell or organelle

A step-by-step guide for an agent (or person) adding to this project. It tells you what to read, in what order, and how to work. It doesn't repeat the techniques; it points to the manual that explains each one.

The rule that runs through the whole guide: **build every part in isolation first, check it on its own, and only then compose it into the larger thing.** That goes for an organelle inside a cell, a molecular machine inside an organelle, and a structure inside a close-up.

---

## 0. Read first

| You are going to … | Read |
|---|---|
| work on anything | this guide, then the "Goals", "Stack" and "Core techniques" sections of [animal_cell_realistic_manual.md](animal_cell_realistic_manual.md) (§1–4): seeded randomness, radius-function shapes, the cutaway, the three looks, impostor balls and rods |
| add a part to the explorer's tree (a schematic model you can click into) | [cell_explorer_manual.md](cell_explorer_manual.md), whole |
| add or change something in a realistic cell | that cell's manual: [animal](animal_cell_realistic_manual.md), [plant](plant_cell_realistic_manual.md) or [bacterium](prokaryote_cell_realistic_manual.md). For a eukaryote, read the animal one first: the plant manual only describes what differs. |
| use a real protein structure | [../tools/README.md](../tools/README.md), then "Real structures" in the bacterium manual (§7) and the plant manual (§7.3) |
| draw molecules at true size (a close-up) | bacterium manual §4 (scale, levels of detail, avoiding overlaps) and plant manual §7–8 (the granum and the wall) |
| add metabolism (molecules travelling, organelles lighting up) | animal manual §8, then the "Metabolism" section of the cell you are working in |

---

## 1. Write a spec sheet before any code

For every organelle or part, write this down first (in your notes or the commit message). It decides everything that follows, and it is where most mistakes are caught.

| Question | Example (a leaf peroxisome) |
|---|---|
| What is it for? What does it take in, what does it give out? | photorespiration: takes glycolate and O₂, gives glycine; makes and splits H₂O₂ |
| Real size, shape, how many per cell, where | 0.5–1 µm, round; about 20–30 in a mesophyll cell; pressed against chloroplasts |
| Membranes (how many, how thick) and inner structures | one membrane; a catalase crystal; matrix enzymes; import pores |
| Real structures available (PDB ids, chains; OPM for membrane proteins; AlphaFold if there is no experimental one) | catalase 1DGF (4 chains) |
| Is it right for **this** cell type? | (an example of a trap: oleosins coat oil bodies in seeds and pollen, but leaf lipid droplets carry mainly caleosins and LDAPs) |
| How it will be drawn | mesh shell with the gel look, an instanced crystal lattice, instanced enzymes |
| At which scale | cell scale (1 unit = 1 µm), or magnified (×20, like the nucleus), or true molecular size (a close-up) |
| Its colour and legend key | `perox`, `#46c3b5` |
| What it touches | chloroplast and mitochondrion beside it; must stay in the cytoplasm layer |
| Its explorer node | id, name, scale, description, children, tags |

Check the biology. Shapes, numbers, arrangements, which side of a membrane each part is on: these are what make the result "realistic". Sizes are true within one level and may be magnified between levels, but say so wherever they are.

---

## 2. Build it in isolation

### 2.1 In the Cell Explorer (a schematic level of its own)

An explorer level is one of two kinds: a **builder level** (a schematic 3D model made by the explorer itself, like `mitochondrion`), or a **realistic level** (a preset view inside a realistic page, like `real-chloroplast`). "Its own level" for a new part means a builder level, unless you are adding a close-up to a realistic page (§3.2 step 5).

Every builder level is already isolated: it is a node with its own builder.

**Reachability.** Only the three realistic roots are in `ROOTS`. A new part must be added to the `children` of a node that can be reached from them (`real-cell`, `real-plant` …, or any of their descendants), or nobody can open it. The old schematic cells `cell`, `plant-cell` and `prokaryote` are still in `NODES` and are the worked examples of composition (`buildCell`, `buildPlantCell`), but no root leads to them. View one with `__explorer.showNow(['cell'])`.

1. **Write the model.**
   - `make<Part>()` returns `{ group, an }`: the model in its own frame, plus named points of interest.
   - `build<Part>()` returns `finalize(g, [A(point, 'Label', 'child-id'), …])`, the level itself.
2. **Add the node** to `NODES`: `name`, `scale`, `b`, `children`, `desc`, and an optional `legend`.
3. **Open it on its own** (`cell_explorer.html#<root>/…/<id>`, or `__explorer.showNow([...path])`). Check:
   - it fills the frame;
   - every tag shows and is readable;
   - every link opens;
   - it reads in both looks (x-ray and realistic);
   - hovering each child in the tree outlines something.

Details: explorer manual §4, §9.1.

### 2.2 In a realistic cell (inside the page's own engine)

In the realistic pages, organelles are built inside `build()`. Develop a new one in isolation like this:

1. **Write it as one function** that takes where and how to place it and draws nothing else. For example `makeOrganelle(centre, axes, size)`:
   - **It adds its own meshes and balls:** shells via `shellMat`/`ownMat` (so it takes the gel/see-through/solid looks and can glow), insides via `instanced(...)` or `balls(key)`.
   - **It returns a record** for the flows and the tags, such as `{ p, r, mat }`.
   - **It draws no random numbers outside itself, and records points without random draws** (use a Fibonacci sphere, `fib(n)`), so adding it doesn't move the rest of the cell.
2. **Make a sandbox.**
   - **Copy the page** to a scratch file (not committed).
   - **In the copy, empty `build()`** except for one call that puts your organelle at the origin. Keep the cut planes, so you also see its cross-section.
   - **Aim a view at it.** Add a `VIEWS` entry, or call `__cell.shot(cameraPos, target, name)` to render it to `renders/`.
3. **Check it in every look and at every zoom** you care about:
   - the cut face shows its inside;
   - membranes have their caps;
   - molecules are the right size against each other;
   - nothing pokes out of its membrane.
4. **For true-size molecular work** (a close-up like the granum or the wall), do the same with the close-up's builder:
   - **Place the molecules** with `tFits`/`tMark` (or `gFree`/`gAdd`), so they don't overlap.
   - **Orient membrane proteins** by their OPM axis (+z to the lumen or outside).
   - **Give the close-up its own random stream** (`const outer = seed; seed = N; …; seed = outer;`).

---

## 3. Compose it into the whole

### 3.1 Into an explorer level

1. **Add the part's id** to the parent's `children`.
2. **Reuse the same model in the parent builder, never a second simpler one:**

   ```js
   const m = partModel('<id>').group; m.scale.setScalar(s); m.position.copy(spot(r)); g.add(m);
   ```

   - **For many copies:** clone one, or use a light version.
3. **Mark it, and tag it.**
   - `mk = tagFrom(g, mk, '<id>')` marks it, so hover outlines it.
   - `an.push(A(point, 'Name', '<id>'))` adds the tag that opens it.
4. **Its own tags** can be carried into the parent with `nest(...)`, if the parent should show them.

### 3.2 Into a realistic cell

1. **Placement.** Follow the cell's rules (each manual's "Building the cell" section). The helpers differ by page:
   - **Animal:** `findSpot(r, margin)` and `fits(p, r)`, which check the `placed` list, `nucGap` and `cellRel`.
   - **Plant:** `clear(p, r)` (the `placed` list, chloroplasts, nucleus), `below(p)` and `inLayer(p, m)`. Anything that should bulge the vacuole registers a `blob(...)` before the tonoplast is built.
   - **Bacterium:** the occupancy grid `gFree`/`gAdd` and `cutPoint`.
2. **Order in `build()`, and the layout.** Two rules pull against each other:
   - **To leave the rest of the cell exactly where it is,** put the new code **at the end** of `build()`, or on its own random stream. It must also not add to `placed` or `BLOBS` before code that reads them.
   - **Things that others must avoid or wrap round must go first.** In the plant, a new organelle that should bulge the vacuole must come before the tonoplast. That changes what `clear`, `vacR` and `inLayer` return for everything after it, so the later parts (ER, cables, crowd) **will** move, even on a separate stream.

   When the second applies, accept the new layout. Re-render every view, re-check every tag in the explorer, and re-measure the numbers in the cell's manual. (The forced landmarks, such as the plant's showcase chloroplast, the wall close-up and the nucleus, stay put; random organelles move.)

   To prove an edit did **not** move anything, compare a fingerprint before and after: in the browser console, sum `count` over every `InstancedMesh` in `__cell.cell` and the vertex count of every `Points` object, and sum the coordinates of every 97th instance position. The animal manual's values came from a check like this; its exact code was not kept.
3. **Legend and hover.** Add a `PARTS` entry `[key, 'Name', colour]` and register its materials under that key (`reg`), so hovering the name lights it up. Add an `INFO` line: what it takes in, what it gives out.
4. **Metabolism, if it makes something.**
   - **A recipe:** a `KINDS` entry (`needs`, `make`, optional `waits` and `side`).
   - **Processors:** created in `buildFlows`.
   - **Inputs:** a `SUPPLY` entry for each new input.
   - **Molecules another organelle makes and hands out with `give(type, …)`:** `WANT` is a fixed object, so the type needs a key there (`WANT = { atp: [], … }`), a `SINKS[type]` entry (where it goes when nobody asked), a `FALLBACK[type]` (what happens when a request waits too long) and, in the plant, optionally a `WAITS[type]` (how long, default 6 s). Without these, `give` fails.
   - **New molecules:** a `MOL` symbol and a `glyph` case. Raise the bound of the `ATLAS` loop (`for (let k = 0; k < N; k++) glyph(...)`).
   - **Atlas room:** the animal atlas has 4 × 4 = 16 cells (15 used), the bacterium's 16 (all used) and the plant's 5 × 4 = 20 (19 used). Past that, enlarge the canvas and change the column and row divisors in the `flowMat` fragment shader.

   Animal manual §8, §14.
5. **Tags and views.** If it should be tagged or have its own view:
   - **Points:** add points to `pointsOf(view)` (and a `VIEWS` entry for a new close-up).
   - **Explorer:** add the explorer node with `real`, `page`, `hi` and `tags`, plus the `RECIPE` mapping. See explorer manual §7, §9.2.

### 3.3 A new realistic cell (a new page)

1. **Start from the closest page and keep its engine:**
   - animal: eukaryotes without a wall;
   - plant: cells with a wall and a vacuole;
   - bacterium: prokaryotes, true scale everywhere.

   The engine is the random numbers, impostors, materials and looks, nucleus molecules, metabolism engine, post-processing, UI, camera controls, and the embedding protocol (`?embed`, `pointsOf`, messages).
2. **Replace, in this order:**
   1. the shape (radius functions);
   2. `PARTS`;
   3. the organelle builders, each made in isolation first (§2.2) and then composed (§3.2);
   4. the metabolism (`MOL`, `INFO`, `KINDS`, `SUPPLY`, `buildFlows`);
   5. `VIEWS` and `pointsOf`.
3. **Add it to the explorer:** `PAGES`, `ROOTS`, its root and realistic nodes, and `RECIPE` (explorer manual §9.3).
4. **Write its manual,** in the same shape as the others: goals, scale, what was reused, shapes, building, molecules, metabolism, views, how it was checked, pitfalls, how to extend, numbers, and what is simplified.

---

## 4. Check before you call it done

Serve the folder: `python3 tools/serve.py "$(pwd)" 8765`. Then check:

- **Renders.** Every view, rendered with `__cell.shot` at a fixed size (1440 × 900) and looked at, side by side. Look for parts poking through membranes, wrong colours, glare, empty or crowded areas, and tags pointing at nothing.
- **The console.** No errors.
- **Metabolism** (realistic cells):
  1. Run `__cell.step(.05, 600)` (30 simulated seconds).
  2. Count completed recipes per processor kind (`__cell.procs`, `p.made`).
  3. Every kind should complete; side reactions are counted in `p.sides`.
- **Speed.** Time `composer.render()` with a one-pixel `readPixels` after it. Compare with the animal cell (about 48 ms a frame at 1440 × 900 on an Apple-silicon laptop). If it is much slower:
  - draw distant detail only when the camera is near (the plant's `winLOD`);
  - instance repeated meshes;
  - merge meshes;
  - hide insides that can't be seen.
- **The explorer.** Open every new or changed level and confirm **every tag shows**. The explorer's stage is narrower than the page, so tag points near the edge of a view fall outside it. A hidden browser pane stops a page's animation frames, so tags don't appear until the pane is visible.
- **Data.** If any protein data changed, `python3 tools/embed_structures.py --check` reports exactly the lines you meant to change.

Then update the documentation:

- **The cell's manual:** numbers, pitfalls, what is simplified.
- **The explorer manual,** if the explorer changed.
- **The README table,** for a new page.

---

## 5. Habits that avoid the mistakes already made

Each manual's "Pitfalls" table lists the rest.

- **Never put a `//` comment in the middle of a line.** Code after it on the same line is swallowed.
- **Copied materials lose the cut.** `Material.clone()` copies the clipping planes, so a clone stops following the cutaway: set `clone.clippingPlanes = CUT` again (`ownMat` does).
- **Symbols inside gel organelles must be opaque.** The transmission pass only renders opaque objects.
- **An extra random draw moves everything after it.** Give new code its own stream.
- **Read a structure's `COMPND` records before choosing chains**, and check which side of the membrane OPM puts each subunit.
- **A tag's child id must be in the node's `children`**, or the tag isn't a link.
- **After editing a realistic page, the explorer's iframe may keep an old copy:** `fetch(page, { cache: 'reload' })`, then reload.
