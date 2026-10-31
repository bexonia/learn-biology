# How the realistic animal cell is built

A manual for another agent (or person) who needs to understand, rebuild or extend `animal_cell_realistic.html`. It explains what the page uses, how it is organised, the algorithm behind every part, how the work was verified, and the mistakes that were made and fixed along the way.

The page is a single HTML file with one ES-module script. There is no build step, no bundler and no local dependency: open it in a browser (it needs internet access to load three.js from a CDN).

---

## 1. Goals that shaped every decision

1. **Look like a real cell, cut open.** A quarter wedge is removed so you can see inside; organelles are translucent "gel" and lit like objects in a studio.
2. **Be biologically right in shape and arrangement, not in scale.** Every structure follows real anatomy (double nuclear envelope with pores, cristae with junctions, Golgi cisternae with swollen rims, nucleosomes wrapping 1.65 turns of DNA...). Sizes between levels are deliberately not to scale; molecules are magnified so they can be seen.
3. **Explorable at every zoom.** From the whole cell (about 23 units across) down to individual base pairs (a fraction of a unit), with nothing turning into mush.
4. **Alive.** Organelles take in molecules, light up, and send out what they make; microtubules grow and collapse; vesicles ride the rails.
5. **Reproducible.** The same random seed always builds the same cell, which made every visual change checkable against a fingerprint.

---

## 2. Stack

| Piece | What it is used for |
|---|---|
| three.js 0.160.0 (import map from `cdn.jsdelivr.net`) | scene graph, materials, geometry, post-processing |
| `OrbitControls` | scroll zoom and right-drag pan (its rotation is switched off; see §11) |
| `EffectComposer` + `RenderPass`, `UnrealBloomPass`, `OutputPass`, `ShaderPass` | soft glow, tone mapping/colour space, and a "lens" pass (slight colour fringing, vignette, film grain) |
| `RoomEnvironment` + `PMREMGenerator` | image-based lighting for the physically based materials |
| `BufferGeometryUtils` (`mergeGeometries`, `mergeVertices`) | merge thousands of tubes or capsules into one mesh |
| Hand-written GLSL `ShaderMaterial`s | sphere impostors (balls), rod impostors (sticks), molecule symbols, splashes and halos |
| Canvas 2D | procedural textures: background gradient, a tileable normal map, the symbol atlas, the splash/halo sprites |
| Protein Data Bank (rcsb.org) | real protein structures, pre-processed offline (§7) |

Units: **1 scene unit ≈ 1 µm** for the cell itself. Molecules inside the nucleus use `NM = 0.02` scene units per nanometre, which is about **20× life size** (life size would be 0.001).

---

## 3. File layout (top to bottom)

The script reads top to bottom in this order; each block has a `// ---` banner.

1. **Random numbers, noise and geometry helpers**: `rand` (seeded mulberry32), `rr`, `randDir`, value `noise` and `fbm`, `ptFrames` (parallel-transport frames), `sweepGeo` (variable-radius tube), `smoothSeams`, `blobGeo` (noisy sphere), `instanced`, `waveNormalMap`.
2. **Renderer, scene, camera, light**: renderer settings, the cutaway planes `CUT`, `phys()` material helper.
3. **Parts registry**: `PARTS` (legend entries), `REG` (materials per part, for hover highlight), `shellMat`/`applyLook` (the three organelle looks).
4. **Impostors**: `impostorMat` (balls), `stickMat` (rods), `addCloud`.
5. **Shapes**: `cellR`, `nucR` (noisy ellipsoid radius functions), `shellGeo`, `capStrip` (the coloured bilayer bands on the cut faces).
6. **Molecules inside the nucleus**: palettes, `balls()` buffers, `emitDNA`, the occupancy grid, `fold`, `chromosome`, `rnaFold`, `baseRod`, `rnaAlong`, the embedded `PDB` data and `placeProtein`, and `buildNucleusInterior`.
7. **Building the cell**: `ORG` (where each organelle ended up), `ownMat`, `mtPath`, `findSpot`, and `build()`, which creates every organelle in a fixed order.
8. **Metabolism**: molecule symbols, the effects system, the organelle "processors" with recipes, dynamic microtubules, `buildFlows`, `updateFlows`.
9. **Post-processing**: bloom, output, lens; `resize`.
10. **UI and loop**: legend, molecule key, buttons, speed slider, mouse look, W A S D, `frame`, start-up, and the scripted-render helper `shot`.

---

## 4. Core techniques

### 4.1 Seeded randomness, and keeping the layout stable

`rand()` is mulberry32: the state just adds `0x6D2B79F5` per call. Two consequences matter:

- **Same seed → same cell.** Everything random in `build()` draws from one stream, so the layout is identical on every load.
- **Any extra or missing `rand()` call shifts everything built afterwards.** When a block is rewritten, the rest of the cell would move. Two tools prevent that:
  - A block can **draw from its own stream**: save `seed`, set it to another value, run the block, restore it.
  - Because the generator is a pure counter, **skipping K draws** is one line: `seed = outer + K * 0x6D2B79F5 | 0`. When the old fibre-model chromatin (which used 69,063 draws) was replaced by the molecular nucleus, the shared stream skips exactly that many, so every organelle after it stays where it was. K was measured by instrumenting a copy of the old page to count calls.
- Code that **records** data for later (e.g. `ORG`, sample points on the ER) must not draw random numbers. It uses a deterministic Fibonacci sphere (`fib(n)`) instead.

A layout **fingerprint** verified this after every change: the total count of instanced-mesh instances plus a checksum of a sample of their positions (`16322`, `354.7368`) and `placed.length` (`180`).

### 4.2 Shapes from radius functions

The cell and the nucleus are **noisy ellipsoids** described as a radius per direction:

```
cellR(d) = ellipsoidRadius(d; 11.5, 8.2, 10.5) × flattenBottom(d) × (1 + 0.09·(fbm−.5) + 0.02·(fineFbm−.5))
nucR(d)  = ellipsoidRadius(d; 4.1, 3.4, 3.8)  × (1 + 0.07·(fbm−.5))      centred at N0 = (0, 0.3, 0)
```

`shellGeo(centre, rFn)` displaces a unit sphere by `rFn`. Helper predicates come from the same functions: `cellRel(p)` (0 at centre, 1 at the membrane) and `nucGap(p)` (signed distance outside the nuclear surface). Placement code uses them everywhere ("inside the cell, at least 2.4 from the nucleus").

### 4.3 The cutaway

Two clipping planes remove the wedge `x > 0 and z > 0` in the cell's own frame: `Plane((-1,0,0),0)` and `Plane((0,0,-1),0)` with `clipIntersection: true` (a fragment is cut only if it is beyond both). The planes are defined in cell space and transformed by the cell's world matrix every frame (`updateCut`), because the cell sways. "Close cutaway" moves the planes to infinity.

- Every material passes `clippingPlanes: CUT` **by reference**, so updating the array updates all of them.
- The cut faces of layered membranes are capped with flat strips (`capStrip`): bands at fractional depths, coloured as a bilayer (head, tail, head) for the plasma membrane, and as two membranes with a dark gap for the nuclear envelope.
- **Molecules inside the wedge are never built** (`balls().add` returns early for points with `x > 0 && z > 0`): they could never be seen, because when the cut is closed the opaque nuclear envelope hides them.

### 4.4 Materials and the three looks

`phys(o)` makes a `MeshPhysicalMaterial` with the cut planes and `envMapIntensity .8`. Organelle shells use `shellMat(key, solidColour, gelColour, tint, o)`, which registers the material and records both colours. The **Organelles** button cycles `applyLook()`:

| Look | Settings |
|---|---|
| gel (default) | `transmission 1`, front side only, refractive (`ior 1.33`), coloured by `attenuationColor` over `attenuationDistance`; clearcoat and sheen |
| see-through | opaque colours at `opacity .48`, `depthWrite false`, double-sided |
| solid | opaque, double-sided |

Each organelle that can glow on its own gets a **per-instance copy** of its shell material (`ownMat`). Important detail: `Material.clone()` deep-copies `clippingPlanes`, so the clone must be given `clippingPlanes = CUT` again, or it stops following the cut.

### 4.5 Impostors: millions of balls and rods

Real meshes for a million spheres or rods would be far too heavy, so both are drawn as **impostors**:

- **Balls** (`impostorMat`): a `THREE.Points` cloud. Each point carries `size` (diameter in scene units) and `icol`. The vertex shader sets `gl_PointSize = size × uScale / depth`, where `uScale = drawingBufferHeight / (2·tan(fov/2))`. The fragment shader discards outside the unit disc and shades it as a sphere: normal `(q, √(1−|q|²))`, Lambert, a specular highlight and a rim term.
- **Rods** (`stickMat`): an `InstancedBufferGeometry` of one 4-vertex quad. Each instance has endpoints `aA`, `aB`, radius `aR` and two colours `aC1`, `aC2`. In view space the quad spans `a → b` and is widened along `normalize(cross(b − a, midpoint))`, so it always faces the camera. The fragment shader builds a cylinder normal from the across-coordinate and takes `aC1` for the first half and `aC2` for the second; that is how a base pair shows both bases. The half-width is clamped to at least ~0.6 px (`max(aR, .6·depth/uScale)`) so thin rods never vanish.
- Both shaders include three.js's clipping chunks, and both have a `uHi` uniform for hover highlight.
- `balls(key)` is a growable typed-array buffer with `add(p, size, colour)` and `stick(a, b, r, c1, c2)`. `done()` creates one `Points` object and one rod mesh per legend part (key), so the part can be highlighted as a unit.

### 4.6 Hover highlight and the legend

`reg(key, material)` files every material under a legend key in `REG` (meshes in `.mats`, impostor shaders in `.imp`). Hovering a legend row calls `setHi(key)`: each frame the part's materials get a pulsing emissive in the legend colour, and impostors get `uHi`. The metabolism symbols tied to that part grow while the rest dim. A note on the right says what the part takes in and gives out (`INFO`).

---

## 5. Building the cell, organelle by organelle (`build()`)

Order matters: big, fixed structures first, then placement-based ones, which avoid each other through `placed` / `fits()`. `findSpot(r, margin)` samples random points until it finds one inside the cell (the far side of the part stays inside the membrane), at least `margin` from the nucleus, and clear of everything already placed.

| Part | Algorithm |
|---|---|
| **Plasma membrane** | `shellGeo(cellR)` with a transmissive glass-like material (iridescence, sheen, a tileable wave normal map); an inner back-faced shell gives the interior wall; bilayer cap strips on the cut; 170 microvilli as capsules on the upper surface |
| **Nuclear envelope** | outer and inner shells (`nucR` and `nucR − .16`), double-membrane cap strips; 900 pores (torus plus dark plug), each recorded in `ORG.pores` for later traffic |
| **Nucleus interior** | §6, on its own random stream |
| **Golgi + centrosome** | fixed at `G0`, oriented away from the nucleus. Six cisternae from flattened spheres, with rims swollen by `1 + 2.6·rim⁶` and bowl curvature; budding vesicles at the rims. Centrosome: two 9-triplet centrioles at right angles in a cloud of pericentriolar balls |
| **Rough ER** | five concentric sheets around the nucleus at offsets 0.6 to 2.2. Each is a displaced sphere with per-vertex coverage alpha `fbm`-thresholded and fading toward the Golgi; `alphaTest .5` cuts smooth sheet edges along the 0.5 contour. Each sheet is two layers (±0.07) studded with ribosome balls on both faces |
| **Microtubules** | 56 stiff random walks from the centrosome (`mtPath`), bending outward when within 0.45 of the nucleus and stopping at the membrane; merged tubes |
| **Smooth ER** | 64 nodes in a ball, each joined to its 2–3 nearest neighbours by bent tubes, plus sphere junctions |
| **Mitochondria** | a bent Catmull-Rom curve swept by `sweepGeo` with rounded ends. Outer gel shell, inner back-faced membrane, cristae as flattened instanced spheres alternating sides with narrow junction "necks", ATP synthase knobs along crista rims, dense granules, mtDNA knots, mitoribosomes |
| **Lysosomes** | noisy blob shells with enzymes inside, proton pumps on stalks outside, sometimes half-digested debris and membrane whorls |
| **Peroxisomes** | blob shell around a crystalline core (a 5×5×3 lattice of tiny cubes), enzymes, import pores |
| **Endosomes** | blob shell with intraluminal vesicles inside and 2 tube arms |
| **Lipid droplets** | translucent monolayer shell (each droplet its own material, in one of three tints) over a darker neutral-lipid core, with perilipin dots on the surface |
| **Vesicles** | 130 placed vesicles with cargo, about a third wearing an icosahedral clathrin cage (its edges and vertices extracted from an icosahedron); 9 coated pits at the membrane; 16 vesicles that ride microtubule curves |
| **Cytoskeleton** | 3,200 short actin rods in the cortex under the membrane; 26 intermediate-filament walks from the nucleus outward |
| **Primary cilium** | a slender swept tube using the membrane material, with 9 microtubule doublets visible inside |
| **Crowded cytoplasm** | 13,000 free ribosome attempts, 45 polysome spirals (centres recorded in `ORG.poly`) and 18,000 soluble-protein balls |

As each organelle is made, its position, size and material go into **`ORG`**, so the metabolism system can find it later without drawing random numbers.

---

## 6. The nucleus, molecule by molecule (`buildNucleusInterior`)

Everything here is at `NM = 0.02` units per nm. It is drawn with `balls()` buffers per legend key: `chromatin`, `mrna`, `rrna`, `nucleolus`, `nucleoplasm`.

### 6.1 Chromosomes

- **46 chromosomes**, two of each of 1–22 and X, with lengths proportional to the human chromosome sizes in megabases; about 2,600 nucleosomes in all.
- **Territories**: each chromosome gets a centre by best-candidate sampling (60 random points inside the nucleus and outside the nucleolus; keep the one farthest from existing centres). The territory radius is `R = 0.23·∛n`.
- **Folding** (`fold`): a confined, self-avoiding random walk of nucleosome centres. Each step tries 16 directions (`0.8·previous + random`) with step 0.26–0.34. It rejects any step outside the nucleus margin, into the nucleolus, or overlapping another nucleosome (checked in the occupancy grid), and scores the rest by persistence minus a penalty beyond 0.7 R. **Occupancy grid**: a hash of 0.3-unit cells storing `(x, y, z, r)`; `gFree(p, r)` checks the 27 neighbouring cells.

### 6.2 DNA around nucleosomes (`chromosome`)

For each nucleosome:

- **Orientation:** the dyad axis `u` points toward the midpoint of its neighbours (keeping linkers short). The superhelix axis `a` runs from the previous nucleosome toward the next.
- **Wrap:** the DNA wraps **1.65 left-handed turns**, with superhelix radius 4.3 nm and rise 4 nm. A point at wrap fraction `t` is `c + R·(u·cos θ + w·sin θ) + a·H·(t − ½)` with `θ = WRAP/2 − WRAP·t`.
- **Linker DNA** joins one nucleosome's exit to the next's entry with a centripetal Catmull-Rom that leaves and enters along the superhelix tangents.
- **Genes being read** are "open": 3 nucleosomes are skipped, and the linker passes through their positions, so the DNA runs bare there.
- **Histones:** eight balls per nucleosome, arranged like the real octamer and coloured by type (H3, H4, H2A, H2B).

The whole path is resampled to points one base pair apart (0.34 nm), and **`emitDNA`** builds B-DNA along it:

- parallel-transport frames along the axis; the phase advances 2π/10.5 per base pair
- strand 1 at angle φ and strand 2 at φ + 140°, at radius 0.9 nm, giving the major and minor grooves
- each strand drawn as rods joining consecutive base pairs (blue and purple)
- each base pair a rod from 7% to 93% of the way across, its two halves in the two bases' colours (A red, T yellow, G green, C orange; pairs A–T, G–C)
- a silver ball at each end of the rod, where the base meets its strand

### 6.3 Genes being read and mRNA

- About a third of the chromosomes have one gene being read, chosen just behind a cut face (depth ≈ 0.15) so it can be seen.
- **RNA polymerase II** is placed on the bare DNA as the **real structure** (PDB 1I50, §7), randomly turned and coloured by chain.
- The new mRNA grows from it with **`rnaFold`**, a persistent walk that prefers free space (`gFree`) and drifts along a heading. Every so often it folds back into a **hairpin**: an A-form stem (11 bp per turn, 0.28 nm rise, radius 0.9 nm), a small loop, and the down-strand paired back to the up-strand (A–U, G–C, sometimes G–U).
- **RNA drawing** (`baseRod`): the strand is rods between consecutive nucleotides (orange for mRNA, coral for rRNA). Each base is a short rod on a silver ball. In a stem the two partners' rods meet in the middle, like DNA.
- **Finished mRNAs** are compact balls of RNA (`rnaFold` with a home and a radius) between the chromosomes, with proteins, a cap and poly(A)-binding proteins.
- **Exports**: mRNAs follow `rnaAlong` paths through pores beside the cut, cap first.

### 6.4 The nucleolus

The nucleolus is sliced open by the cut:

- **Fibrillar centres:** 3–7 of them, each a translucent pale shell with pale "UBF" proteins inside.
- **rDNA:** a loop of DNA around each fibrillar centre.
- **"Christmas tree":** along each rDNA gene, 11 RNA polymerase I clumps whose rRNA transcripts get longer along the gene (12 to 172 nucleotides). They fold as they grow outward, and the longer ones end in a terminal processome knob.
- **Dense fibrillar shell:** processing proteins in a dark magenta shell around each fibrillar centre.
- **Granular zone:** up to 1,300 pre-ribosomes, each a compact folded rRNA plus ribosomal-protein balls.

### 6.5 Nucleoplasm proteins

About 450 real proteins placed at random (skipping the wedge): PCNA clamps (PDB 1AXC, three chains, pink) and ubiquitin (1UBQ, yellow).

---

## 7. Real proteins from the Protein Data Bank

The real models are pre-processed **offline** and embedded, so the page never fetches anything at run time:

1. **Download** coordinates: `https://files.rcsb.org/download/<ID>.pdb`.
2. **Coarse-grain**: read `ATOM` records from the first model, keeping alt-loc A and the chosen chains. Per amino acid, keep 2 beads: the Cα, and the centre of the side-chain atoms (none for glycine). Per nucleotide, keep the phosphate and the base centre (and record the base letter).
3. **Encode**: centre the beads, store xyz as Int16 in 0.1 Å units, base64. Store one byte per bead, `chain × 4 + part` (0 backbone, 1 side chain, 2 nucleic backbone, 3 base).
4. **In the page**: `model(key)` decodes once; `placeProtein(S, key, at, quaternion, colour(chain, part))` scales by `0.01 × NM` (0.1 Å → nm → scene), rotates, translates and adds balls.

The companion page `molecules_preview.html` shows 14 such proteins grouped by where they work (nucleus, cytoplasm, membrane, mitochondria and peroxisome) at a common scale, plus the DNA and RNA styles. Use it to judge a style before putting it in the cell.

---

## 8. Metabolism: organelles that gather, glow and produce

### 8.1 Symbols

15 molecule types (`MOL`): glucose, pyruvate, O₂, CO₂, ATP, ADP, fatty acids, mRNA, ribosome halves, new proteins, amino acids, vesicles, lipids, H₂O₂ and Ca²⁺.

- Each has a **symbol** drawn with Canvas 2D (`glyph`): shaded shapes with a dark outline, e.g. a sugar hexagon, ATP as a ball with three phosphates, a zigzag fatty acid.
- The symbols are packed into a 4×4 atlas texture and drawn as `Points` with a shader that samples the right cell.
- The points are opaque with `discard`, so they also show through the gel organelles: three.js's transmission pass renders opaque objects only.
- Symbols **grow with camera distance** (`flowBoost`, up to 4×) so they stay readable from afar.

### 8.2 Routes

- **`cytoPts(a, b)`**: wandering waypoints. Any leg whose midpoint cuts into the nucleus gets a waypoint pushed out around it (up to 4 passes), and points stay inside the membrane.
- **`viaPore(o)`**: inner, centre and outer points of a nuclear pore.
- **Secretion** follows a microtubule's curve out to the membrane.
- **Motion:** each symbol moves at a constant speed along a Catmull-Rom of its route, plus a small jiggle that tapers to zero at both ends.

### 8.3 Processors: recipes, docking and glow

Every organelle that makes something is a **processor**: a centre, a size, `dock()` and `out()` surface points, optionally its own materials, and a state machine:

```
rest ──(timer)──▶ gather: ask for whatever is missing
gather ──(every needed molecule docked)──▶ react: docked molecules drawn in with a splash, organelle glows
react ──(0.6 s)──▶ make: products leave ──▶ rest
```

| Kind | Waits for | Sends out |
|---|---|---|
| mitochondrion | 2 pyruvate (or 1 fatty acid), O₂, 2 ADP | 2 ATP, CO₂ |
| rough ER spot | mRNA, ribosome halves, 2 amino acids, ATP | a vesicle to the Golgi |
| Golgi | 2 vesicles (it never asks; they are sent) | a secretory vesicle along a microtubule, a vesicle to a lysosome |
| endosome | 2 vesicles taken in at the surface | one to a lysosome, one back to the surface |
| lysosome | a cargo vesicle (sent), ATP | 2 amino acids |
| peroxisome | a long fatty acid, O₂ | a shorter fatty acid to a mitochondrion; H₂O₂ split inside |
| smooth ER | a fatty acid, ATP | lipids to the membrane and a fat droplet |
| free ribosomes | 2 amino acids, ATP | a protein |
| lipid droplet (store) | – | glows when it releases a fatty acid |

Supply rules:

- **`ask(p)`** requests only what is missing, counting docked and in-flight molecules.
- **`SUPPLY`** sends a molecule straight from its source for things nobody makes. Oxygen comes from the membrane. Pyruvate comes from glucose, which enters, splits on the way with a flash (glycolysis), and gives 2 pyruvate plus 2 ATP. ADP comes from places where ATP was just used. mRNA comes from a gene and ribosome halves from the nucleolus, both through a pore.
- **Things other organelles make** (ATP, amino acids) are queued in **`WANT`**. **`give()`** serves the nearest request, weighted toward the one that has waited longest; with no request, the molecule goes to a **sink** (membrane pumps, actin motors, cytoplasm), which records ATP use for ADP sources.
- A request older than 6 s is met anyway by **`FALLBACK`** (ATP from the nearest mitochondrion, amino acids through the membrane), so nothing ever stalls.
- **Docking:** an arriving molecule sits on the surface, bobbing slightly, and is counted in `have`. Over-supply beyond `need + 2` is taken in at once.
- **Glow:** a 2.1-second envelope (`glowEnv`). Emissive is blended toward the kind's colour at 30% through the organelle's own materials (`applyGlows`), plus an additive halo sprite placed just in front of the organelle, toward the camera, so its own surface does not hide it. Hover highlight is applied after the glow, so it wins.
- **Effects:** splashes are additive ring sprites; halos are additive soft discs (`fx`).
- **Always-on traffic:** a few `AMBIENT` flows run regardless: proteins imported into the nucleus, and calcium pulses from the smooth ER.

### 8.4 Dynamic microtubules

16 extra microtubules from the centrosome, kept only if they end where they can be seen:

- **Drawing:** each is a tube drawn up to a fraction `f` via `setDrawRange(0, 36·⌊f·segments⌋)`, since each tube segment is 36 indices.
- **Dynamic instability:** a microtubule grows at 0.3 units/s until a random "catastrophe" (10%/s), then shrinks at 0.9 units/s until rescued (20%/s).
- **Growing tip:** a bright cap marks it while growing.

### 8.5 Time and speed

- **Speed slider:** sets `flowSpeed` (1/8× to 4×; double-click resets). The frame's dt is multiplied by it for the flows, processors, effects, microtubules and vesicle movers.
- **Pause:** stops it all.
- **Sway:** the cell's slow sway is separate, and it fades out as you zoom in.
- **Start-up:** the simulation is pre-warmed for 12 s at load, so the cell starts busy.

---

## 9. Lighting, post-processing and look

| Setting | Value |
|---|---|
| Renderer | `ACESFilmicToneMapping`, exposure 0.95, pixel ratio ≤ 1.5, PCF soft shadows (2048 map), `localClippingEnabled` |
| Lights | hemisphere 0.45; warm key light 3 (casts shadows); cool rim 1.5; a warm point "lamp" (22) inside the open wedge to light the cut faces |
| Background | radial gradient canvas texture; RoomEnvironment PMREM for reflections |
| Post | `RenderPass → UnrealBloom(0.3, 0.55, 0.86) → OutputPass → lens` (chromatic aberration `d·r²·0.01`, vignette, grain 0.035) |
| Depth of field | removed on purpose; it blurred whatever was not at the orbit distance and confused people |

---

## 10. UI

- **Legend** (left): every part with a colour dot. Hover to highlight the part, dim unrelated molecules, and show its recipe note. Below it is a key for bases, histones and backbones.
- **"What moves" panel** (right): the speed slider, the note, and the 15 molecule symbols. Hover one to follow just that molecule.
- **Buttons**:
  - **View**: presets for cell, nucleus, nucleolus and a gene being read. The presets are stored in cell space and converted with `cell.localToWorld`.
  - **Metabolism** on/off; turning it off clears all glows.
  - **Organelles**: gel, see-through or solid.
  - **Close/Open cutaway**, **Pause**, and **Save PNG** (`preserveDrawingBuffer: true`).
- **Narrow screens:** below 720 px the legend becomes a two-column grid at the bottom, and the right panel and hint are hidden.

---

## 11. Camera controls

- **Left-drag = mouse look** (first person). OrbitControls' rotation is off. A drag converts `target − position` to spherical coordinates, changes θ by `−dx·0.004` and φ by `dy·0.004` (clamped short of the poles), and moves the target. The camera itself never moves.
- **W A S D** move the camera **and** the target together along the view direction and sideways, with a step of `dt · max(1.5, 0.5·distance-to-target)`. Keys are ignored while typing in an input.
- **Scroll** zooms and **right-drag** pans, as in OrbitControls.

---

## 12. How the work was verified

The page was never judged by reading code alone. Every change was rendered and looked at.

1. **Local server.** A tiny Python `http.server` subclass serves the project and accepts `POST /save?name=…`, which writes a PNG into `renders/` (git-ignored).
2. **`window.__cell`** debug hook:
   - `shot(pos, target, name)`: renders one frame from a given pose (updating the cut, halos, glows and light direction for that pose), saves it, and puts the camera back.
   - `step(dt, n)`: advances the metabolism and microtubules without needing animation frames.
   - `setHi`, `setMol` and `setLook`, to put the page into a given state.
   - read-only access to `sites`, `org`, `procs`, `flows`, `REG` and `placed`.
3. **Contact sheets.** Shots are tiled with PIL into one image to compare views side by side (e.g. a mitochondrion docked, then reacting, then producing).
4. **Fingerprints** (§4.1) after every structural change, to prove nothing outside the edited part moved.
5. **State checks** through `__cell`: counts of molecules per state (`go`, `dock`, `absorb`), completed recipes per organelle kind over 30 simulated seconds, and speed-slider throughput.
6. **The console** is checked for errors after every load.

**Camera placement for close-ups** used a line-of-sight test: try directions around the target and reject any camera whose segment to the target passes through another organelle's bounding ball, or which sits inside the nucleus or behind the cut.

---

## 13. Pitfalls met, and their fixes

| Symptom | Cause | Fix |
|---|---|---|
| Glowing clone stopped being cut | `Material.clone()` deep-copies clipping planes | set `clone.clippingPlanes = CUT` |
| Symbols invisible inside gel organelles | transmission pass only renders opaque objects | draw symbols opaque with `discard`, not as transparent sprites |
| Halo hidden by its own organelle | the halo sat at the centre, behind the front surface | offset the halo toward the camera by the organelle's size |
| Page never built when the browser pane was hidden | start-up waited for `requestAnimationFrame`, which background pages do not run | start with `setTimeout`; add `step()` for headless checks |
| Every organelle moved after an edit | the edit changed how many random numbers were drawn | separate streams; skip K draws; deterministic sampling for records |
| Base rods poked out past the silver joints | joints were flat sprites, and rods in front of their plane showed through | joints sit on the strand, and rods start inside them |
| Thin rods vanished at a distance | sub-pixel width | clamp half-width to ~0.6 px in the vertex shader |
| Point sprites show as 1 px in a depth pre-pass | `MeshDepthMaterial` ignores `gl_PointSize` | no longer matters: depth of field was removed at the user's request |
| Docked molecules hidden | they docked at 0.85 R, inside the gel shell | dock at 1.05 R |
| Mitochondria starved | oxygen came from far membrane points | pick the nearest of 8 sources; shorter rests |
| `SyntaxError: Identifier 'a' has already been declared` | a new `const a` inside a loop that already declared `a` | rename (`j1`, `mid`, `j2`) |
| A comment swallowed the rest of a line of passes | an inline `//` comment inserted mid-line | put comments at the end of lines only |

---

## 14. How to extend it

**Add an organelle that makes something**

1. Build its mesh in `build()` with `ownMat(sharedMaterial, key)` if it should glow on its own. Record `{ p, r, mat }` in `ORG` without drawing random numbers.
2. Add a `KINDS` entry: `key` (legend key), `glow` colour, `rest` range, `needs(p)` returning the recipe, `make(p)` sending products with `give`, `send` or `emit`, and `waits` for inputs that are sent rather than asked for.
3. Create its processors in `buildFlows()` with `makeProc(kind, centre, size, dock, out, mats)`.
4. Add a `SUPPLY` (or `WANT` plus `FALLBACK`) entry for any new input, and an `INFO` line for the hover note.

**Add a molecule symbol**

1. Add a `MOL` entry (name, colour, atlas index, size).
2. Draw its shape in `glyph()`; the atlas holds 16 cells.

**Add a real protein**

1. Download its PDB file and coarse-grain it with the script described in §7.
2. Embed the result in `PDB`, then call `placeProtein` where it belongs.
3. Mind the scale: inside the nucleus, 1 nm = `NM`. Elsewhere, molecules are drawn at their own magnification, so a real model may need a scale factor, and you should say so.

**Keep the layout stable:** if new code must draw random numbers inside an existing block, give it its own stream or skip the right number of draws. Then check the fingerprint.

---

## 15. Rough numbers

| Item | Count |
|---|---|
| Triangles in organelle meshes | ≈ 1.8 million |
| Balls in the nucleus | ≈ 0.96 million |
| Rods in the nucleus | ≈ 1.0 million |
| Nucleosomes | ≈ 2,600 |
| Base pairs drawn | ≈ 280,000 |
| Molecule symbols in flight | ≈ 200–300 (pool of 2,000) |
| Organelle processors | ≈ 60 |
| Build time on an Apple-silicon laptop | a few seconds |
