# How the realistic bacterium is built

A manual for `prokaryote_cell_realistic.html`: a cutaway *Escherichia coli* drawn molecule by molecule, at true scale, with animated metabolism. It is written so another agent can understand, rebuild or extend the page.

The page shares its rendering engine with the realistic animal cell. Read [animal_cell_realistic_manual.md](animal_cell_realistic_manual.md) first for these shared parts:

- the seeded random numbers
- the cutaway
- the ball and rod impostors
- the DNA and RNA models
- the metabolism engine
- lighting
- the user interface and controls
- the verification workflow

This manual covers what is new or different.

---

## 1. Goals that shaped every decision

1. **True scale, everywhere.** One scene unit is 100 nm, and molecules use that same scale (`NM = .01` units per nanometre). The animal cell magnified its molecules about 20 times; the bacterium needs no magnification, because the whole cell is only 2 µm long.
2. **Real structures.** Every large molecule is coarse-grained from a real Protein Data Bank structure: ribosome, RNA polymerase, porin, chaperonin, EF-Tu, GAPDH, HU and chemoreceptor.
3. **The whole genome.** All 4,641,652 base pairs of the chromosome (strain MG1655) are folded into the nucleoid. Wherever DNA can be seen up close, it is drawn base pair by base pair, in the same model as the animal cell's DNA. Near the cut it always is; elsewhere it is built as the camera comes near (zoom-based detail, §5.5).
4. **Spend detail only where it can be seen.** The cytoplasm is so crowded that nothing more than about 30–60 nm behind a cut face is visible. So molecules near the cut are drawn in full, everything deeper is drawn simply (§4), and the DNA gains full detail wherever the camera goes (§5.5).
5. **Everything happens on the cut faces.** Metabolism routes are pulled onto the cut faces, so every moving symbol stays in sight.
6. **Embeddable.** The page runs on its own and also inside `cell_explorer.html` as the *Realistic bacterium* root (§9).

---

## 2. What the page contains

| Part | How it is made | Real size |
|---|---|---|
| Rod shape | a capsule along x: straight half-length `H = 5.6`, outer radius `R = 4.6` | 2.04 µm × 0.92 µm |
| Outer membrane | LPS outer leaflet (lipid A tails, short sugar core) and phospholipid inner leaflet, in rows at the cut; a refracting green film elsewhere | 7 nm |
| Porins | OmpF trimers (2OMF), ~750 along the cut edge | 5 nm |
| Braun's lipoprotein | rods from the outer membrane to the wall | ~8 nm |
| Peptidoglycan | a cut-out texture shell, plus explicit glycan strands and peptide cross-links at the cut | 3 nm layer |
| Periplasmic proteins | small clumps between the wall and the inner membrane | — |
| Inner membrane | a phospholipid bilayer in rows at the cut, an opaque surface elsewhere | 7 nm |
| ATP synthase | Fo ring, stalks and F1 head (instanced meshes), 80 along the cut | head 10 nm |
| Respiratory chain | NADH dehydrogenase I (L-shaped) and cytochrome bo3, 60 | 18 nm arm |
| Transporters, Sec translocon | blobs in the membrane; SecA on the inner side | 5–9 nm |
| Flagella | 7 motors, one exactly on the cut so it shows in section: C ring (joined to the MS ring by a FliG collar), MS ring, 11 stators, rod from the export gate to the hook, P and L rings, hook; filament a left-handed helix 0.4 µm across, 2.3 µm pitch, 5 µm long, spinning | motor 45 nm, filament 20 nm |
| Pili | 80 type 1 pili with FimH tips | 7 nm × 0.4–1 µm |
| Chemoreceptor array | a honeycomb at the +x pole: receptor dimers (1QU7) in trimers 12 nm apart, CheA and CheW below, sensing domains above; half removed by the cut | ~250 nm |
| MreB | 60 short double filaments under the inner membrane, running round the rod | 5 nm monomers |
| Chromosome | 464 domains of ~10 kb; branched plectonemes; full model near the cut (§5) | 4.64 Mb, 1.6 mm |
| HU | real dimers (1MUL) on the drawn DNA every 150–350 bp | 3 nm |
| Genes being read | 10 sites: RNA polymerase (4YG2, full) on the DNA, an mRNA growing out, ribosomes already on it, each with a growing protein chain | — |
| rRNA gene | about 500 bp at the start of an rRNA operon, with about six polymerases and lengthening, folding transcripts (a "Christmas tree") | — |
| Ribosomes | 950 near the cut (reduced 4YBB, 220 balls each), ~22,000 deeper as pairs of balls; mostly kept out of the nucleoid | 25 nm |
| Polysomes | 10 free mRNAs, each with several ribosomes | — |
| Soluble proteins | ~40,000 near the cut: EF-Tu, GAPDH, GroEL–GroES and small generic proteins; ~50,000 deeper as single balls | 3–20 nm |
| Glycogen | 7 granules of tiny glucose balls | 40–70 nm |

---

## 3. File layout (top to bottom)

The page is one HTML file of about 1,500 lines and 360 KB. Most of its size is the embedded protein data.

1. HTML, CSS and the embed-mode script, as in the animal page. The HUD says *Bacterium (E. coli)*, and the look button reads *Envelope: gel*.
2. **Shared helpers**, copied from the animal page: random numbers, noise, `ptFrames`, `blobGeo`, `cylM`/`atS`, `instanced`, `waveNormalMap`.
3. Renderer, camera, lights, cutaway clipping (`CUT`), `phys`.
4. `PARTS`: 18 parts for the legend and hover highlight.
5. `REG`/`reg`, `shellMat`, `applyLook` (only the outer membrane switches looks).
6. `impostorMat(key, clip)`, `stickMat(key, clip)`, `addCloud(list, mat, parent)`. These are the animal page's versions plus two new parameters: `clip = false` leaves the flagella and pili uncut, and `parent` lets a flagellum's balls ride on its own spinning group.
7. **Shape** (§4): `onAxis`, `axisDist`, `radial`, `toDepth`, `outline`, `edgePt`, `edgeAt`, `rodGeo`, `lobeRel`, `depthOf`, `cutPoint`.
8. **Molecule primitives**, copied: `BASE`, `BACKBONE`, `col`, `balls(key, parent, clip)`, `clump`, `resample`, `across`, `emitDNA`, the occupancy grid (cell size `GS = .06`), `rnaFold` (with a new `o.ok(q)` option, §6), `baseRod`, `rnaAlong`.
9. `PDB`: the bacterial structures (§7), with `model`, `placeMol` and colour helpers.
10. Builders: `leaflet`, `buildEnvelope`, `buildMembraneProteins`, `buildFlagella`, `buildPili`, `buildChemo`, `buildMreB`, `buildChromosome` (with `plectonemeAxis`, `drawPlectoneme`, `emitPath`), `buildGenes`, `buildRRN`, `buildCrowd`, `buildDeep`, `buildGlycogen`, `build`.
11. Metabolism: `MOL`, `INFO`, glyphs (with a new NADH glyph), the flow and effects machinery (copied), new routes and recipes (§8), and `buildFlows`.
12. Post-processing, `resize`, legend, buttons, `VIEWS`/`setViews`, controls, the `frame` loop (it also spins the flagella), `shot`.
13. Embed mode (§9) and `window.__cell`.

The page was assembled from the animal page. The shared sections are verbatim copies with small, listed changes, and the rest is new. Edit the HTML directly: there is no build step.

---

## 4. Geometry and levels of detail

### 4.1 The rod and its envelope

The cell is a capsule round the x axis. Every layer is the same capsule with a smaller radius, measured as a **depth** below the outer surface:

| Depth (units) | Layer |
|---|---|
| 0 – .07 | outer membrane (LPS leaflet 0–.036, phospholipid leaflet .036–.07) |
| .07 – .28 | periplasm, with the wall at .10–.13 |
| .28 – .35 | inner membrane |
| > .35 | cytoplasm (`RC = R − .35`) |

Helpers:

- `axisDist(p)` is the distance to the axis segment.
- `toDepth(p, d)` moves a point radially to depth `d`.
- `radial(p)` is the outward normal.

Because a capsule is symmetric round its axis, **turning a surface point round the x axis keeps it on the same surface**. `edgePt(axis, t, depth, behind)` uses this. It takes a point on the cut-face outline and turns it until it sits a given distance behind the face, which is how everything "along the cut edge" is placed.

- `outline('x', d, t)`: the half circle in the plane x = 0.
- `outline('z', d, t)`: in the plane z = 0, along the top, round the pole and back along the bottom.

### 4.2 The cutaway and depth

The removed wedge is x > 0 and z > 0, as in the animal cell. `depthOf(q)` is the distance behind the nearest cut face:

- behind the x face: `−x`
- behind the z face: `−z`
- behind both: `hypot(x, z)`
- inside the wedge: negative

### 4.3 Two levels of detail

- **Skin.** Within a few tens of nanometres of a cut face, everything is a real structure, at bead or reduced-ball detail:
  - DNA within 10 nm, base pair by base pair (and anywhere near the camera, §5.5)
  - ribosomes within 32 nm, as 220 balls each
  - proteins within 30 nm, as reduced models
  - membranes within 4 nm, as rows of lipids
- **Deep.** Beyond that:
  - ribosomes are pairs of balls (from 60 nm)
  - proteins are single balls (from 45 nm)
  - DNA is two thin dark strands per plectoneme, without bases, until the camera comes near (§5.5)

You cannot see the deep layer from the preset views, but it keeps the cell full when you fly inside with W A S D. `cutPoint(d, r, test)` samples skin points: a random point on one of the two cut faces (the cross-section is about 27% of the cut area), `d` behind it.

### 4.4 Avoiding overlaps

One occupancy grid (`gAdd`/`gFree`, cell size .06) is shared by everything placed in order: motors, membrane proteins, porins, the rRNA gene, plectoneme axes, polymerases, ribosomes, glycogen, then the protein crowd. Each item checks it is free before it is placed and registers its radius. The rows of lipids check the grid too, so they leave room for proteins.

---

## 5. The chromosome

### 5.1 Organisation

- **Backbone:** a smooth closed loop (12 random points, centripetal Catmull–Rom) through the nucleoid's core. The chromosome is a circle.
- **Domains:** `ND = 464` bases spaced evenly along the loop, about 10 kb each (6–14 kb), joined by linker DNA along the backbone.
- **Plectonemes:** each domain grows branches of 1–3 kb from its base until its budget is spent, or six tries fail because the space is full. The total reaches the full genome (`SITES.bp` ≈ 4,641,700).

### 5.2 A plectoneme

`plectonemeAxis(base, nbp)` grows the superhelix axis as a stiff random walk:

- step `.06`
- direction `2.4 × previous + random`, best of 6 tries
- stays inside the nucleoid ellipsoid (semi-axes 6 × 3.3 × 3.3 units)
- prefers free grid cells, with a lag of 2 so that it does not collide with its own last points
- stops when boxed in

Its length is `nbp × BP / (2 × PL_RATIO)`. Two strands share it, and each is longer than the axis by `PL_RATIO = √(1 + (2π·r/pitch)²) ≈ 1.86`.

`drawPlectoneme(A)` winds the two double helices right-handed round the axis, as negative supercoiling does:

- radius `PL_R = .045` (4.5 nm), pitch `PL_PITCH = .18` (18 nm)
- the radius ramps up over the first 4 nm, so both strands meet at the base
- a half-turn loop joins them at the tip
- the path is out, round the tip, and back

`plectonemePath(A)` returns the centreline of both double helices (out, round the tip, back). Points closer than `SKIN_DNA = .1` to a cut face go to `emitPath`, which resamples runs to one point per base pair (`BP = .34 nm`) and calls **`emitDNA`, the animal cell's DNA model**: blue and purple strands 140° apart (so the grooves show), a two-colour rod per base pair, and silver joints. About 180,000 base pairs are always drawn this way. The rest of each plectoneme is drawn as two thin, darker strands (three rods per axis step, no bases), filed into chunks so the camera can swap them for the full model (§5.5).

### 5.3 Proteins on the DNA

HU dimers (full 1MUL model) sit beside the drawn DNA every 150–350 bp, offset 1.7 nm from the axis. Two more sit on the close-up gene's DNA, either side of its polymerase. Chunks built in full get their own HU too (§5.5).

### 5.4 Genes being read (coupled transcription and translation)

`buildGenes` picks up to 16 sites on drawn DNA near the nucleoid's edge (`lobeRel` .6–.97, just behind a face) at least 100 nm apart; in practice about 10 are found.

- **The close-up gene:** of those on the long face, the one with the most free room around it.
- **Each site** gets:
  - RNA polymerase, as the full 4YG2 model
  - an mRNA from `rnaFold`, 260–560 nt, pulled outward along the face, kept in a ball round a point 45 nm out, and kept in the cytoplasm by `o.ok`
  - ribosomes from the far 5′ end toward the polymerase, every 75–110 nt
- **Each ribosome** (`ribosomeOn`) leans back behind the face, uses the full 4YBB model at the close-up gene and reduced models elsewhere, and grows a chain of balls for its protein. The chain is longer the further the ribosome has read.

### 5.5 Zoom-based detail

The nucleoid is cut into **chunks** 100 nm on a side (`CS = 1`), about 170 of which hold DNA.

- **At build time:** every plectoneme axis segment is filed into the chunk that holds its midpoint (`chunkAt`). The plectoneme's id goes into that chunk's set, and its thin strands go into that chunk's own group. All chunks share one pair of DNA materials (`DNA_MATS`), so hover highlighting still works and nothing leaks.
- **Each frame,** `updateDNA()` runs:
  1. It puts the camera and its view frustum into the cell's own frame.
  2. A chunk in view and within `LOD_NEAR = 2.6` units (260 nm) of the camera is **built in full** (`buildFull`), nearest first, for at most about 10 ms a frame and up to `LOD_MAX = 70` chunks at once.
  3. A chunk further than `LOD_FAR = 3.4` units is **dropped**: its geometry is disposed and its thin strands are shown again. The gap between the two distances stops chunks flickering at the edge.
- **Building a chunk:**
  - every plectoneme crossing it is regenerated with `plectonemePath`
  - only the points inside the chunk's box and deeper than `SKIN_DNA` (the part near the cut already exists) are emitted with `emitDNA`
  - an HU dimer is added every 150–350 bp
  - the chunk's thin strands are hidden
  - each chunk draws from its own random seed, so it comes out the same every time
- **Results** in the test browser:
  - overview: no chunks in full, about 1.0 M balls and 0.9 M rods, ~41 fps
  - close to the long face: 16 chunks (~350,000 bp) in full, ~43 fps
  - flying deep into the nucleoid: 24 chunks (~510,000 bp)
  - repeated in/out cycles: the JS heap and GPU geometry count stay flat

### 5.6 The rRNA gene

A ~530 bp stretch laid flat on the long face near the nucleoid's edge, registered in the grid before the plectonemes. It carries six or seven RNA polymerases, 70–95 bp apart. Each polymerase's transcript is `30 + 480 × fraction along` nucleotides long, folded with hairpins into a ball that grows along the gene, with ribosomal proteins and a processing knob on its 5′ end.

---

## 6. The rest of the cell

- **Membranes at the cut:** `leaflet(S, headDepth, tailDepth, lps)` lays lipids in rows, 0.85 nm apart (1.2 nm for LPS), along both cut outlines and up to 4 nm behind each face. Each lipid is a head ball and two tail rods; LPS adds three sugars outward. Four leaflets are drawn: LPS, the outer membrane's inner leaflet, and both leaflets of the inner membrane.
- **Membrane proteins** sit at random spots on the inner membrane's mid-plane, up to 22 nm behind a face. Each records `c` (centre), `n` (outward), `cyto` and `peri` (where molecules dock on each side) for the metabolism.
- **Flagella:**
  - Each filament is built in its own group: local x is the helix axis, and the group's origin is the hook's end. The frame loop calls `group.rotateX`, which spins the helix like a corkscrew.
  - The filament axis points back and out (`D = normalize(−1.6 x̂ + n)`), so the filaments trail behind a cell swimming toward +x. The group's local y points away from the cell, and the helix amplitude grows over the first 1.5 µm, so the filament leaves the hook straight and never swings back into the cell body.
  - The hook (a tube from inside the L ring to the filament's start) is two-sided and never clipped, like the filament, so it stays whole even on the motor that sits on the cut.
  - Base spin is 1.8 rad/s × the speed slider. Each time a motor completes its proton recipe, its spin jumps (§8).
- **`rnaFold` option `o.ok(q)`:** a candidate step is penalised if `ok` is false. The pages use `inCytoCut` (inside the cytoplasm, not in the wedge), so mRNAs never cross membranes.

---

## 7. Real structures: download and coarse-graining

The script is `coarse2.py` in the build scratchpad; it is not in the repo. Its steps:

1. **Download:**
   - `files.rcsb.org/download/<ID>.pdb` for 4YG2, 2OMF, 1AON, 1EFC, 1DC4, 1MUL and 1QU7
   - the mmCIF file for the ribosome 4YBB, which is too large for the PDB format
2. **Read:**
   - one bead per amino acid (Cα) or nucleotide (phosphate, or C4′ if it has none)
   - first model only, alt-loc A only
   - for mmCIF, columns are read from the `_atom_site` loop by name
3. **Assemble:** apply the `REMARK 350 BIOMT` matrices to get the biological assembly. This builds the OmpF trimer, the GAPDH tetramer and the HU dimer.
4. **Choose chains** by checking the `COMPND` records first:
   - 4YG2: α, α, β, β′, ω, σ70 (chains A–F; G–L are a second copy)
   - 4YBB: the 30S chains `A*` and whichever 50S copy (`C*` or `D*`) has its centroid nearer
   - 1AON: GroEL A–N and GroES O–U
5. **Encode** as in the animal page: centred, Int16 in 0.1 Å, base64, plus a kind byte `group × 4 + part` (part 0 protein, 2 RNA). Groups are chosen for colouring: subunit type, ring, 30S/50S, chain or copy.
6. **Reduce** for the crowd with k-means (40 iterations), to 220 balls for the ribosome, 110 for GroEL, 60 for RNA polymerase, 34 for GAPDH, 27 for OmpF, 24 for the receptor, 13 for EF-Tu and 6 for HU. Each ball's radius matches the volume of its members (140 Å³ per amino acid, 330 Å³ per nucleotide), swollen by 1.25 so neighbours touch. Radii are stored as bytes in 0.25 Å units.

In the page, `placeMol(S, key, at, q, colour(group, part), full)` draws a molecule at true size, rotated by `q`:

- **Full model:** beads of 0.65 nm (amino acids) or 0.85 nm (nucleotides).
- **Reduced model:** balls of `rad / 20` nm.

`model(key).bound` (the furthest bead) is used for the grid checks.

---

## 8. Metabolism

The engine is the animal cell's (§8 of its manual): recipes, `ask`/`SUPPLY`/`WANT`/`FALLBACK`, docking, glow, splashes and halos. What changes is the chemistry:

| Recipe | Where | Takes in | Gives out |
|---|---|---|---|
| `glyc` (glycolysis) | 3 halo spots in the cytoplasm | glucose, 2 ADP | 2 pyruvate, 2 ATP, 2 NADH |
| `tca` (citric acid cycle) | 3 halo spots | pyruvate | 2 NADH, CO₂ (out through both membranes) |
| `etc` | 10 respiratory complexes | 2 NADH, O₂ | 4 protons into the periplasm |
| `atps` | 10 ATP synthases | 3 protons (periplasm side), ADP | ATP |
| `motor` | flagellar motors on the cut | 4 protons | a burst of spin |
| `gene` | 8 RNA polymerases | 2 ATP (for nucleotides) | mRNA |
| `poly` | 12 ribosomes on mRNAs | mRNA, 2 amino acids, ATP | a protein; 35% go to a Sec translocon |
| `sec` | 4 Sec translocons | the protein (it waits for one), ATP | the protein, out into the periplasm |

- **New molecules:** NADH (a new two-ring glyph, slot 15) and protons (the Ca²⁺ glyph, recoloured). Gone: fatty acids, ribosome halves, vesicles, lipids, H₂O₂, calcium.
- **Supplies:**
  - Glucose and amino acids enter from outside through a transporter: outside → outer membrane → periplasm → transporter → inside.
  - Oxygen diffuses straight through both membranes to a respiratory complex.
  - ADP comes from where ATP was recently spent.
- **Sinks**, for things nobody asked for:
  - spare ATP goes to a cytoplasm point, where it is spent
  - pyruvate goes to the nearest citric-acid-cycle spot
  - NADH goes to the nearest respiratory complex
  - protons wander in the periplasm
  - mRNA is broken down
- **Routes stay in sight:**
  - `toFace(q)` pulls a waypoint just behind a cut face. Points inside the wedge go to the nearer face; points behind both go to where the faces meet.
  - `cytoPts` routes inside the cytoplasm.
  - `periPts` routes through the middle of the periplasm, the depth halfway between the wall and the inner membrane.
  - Protons always travel through the periplasm.
- **Membrane docks:** a membrane site docks protons on its periplasm side and everything else on its cytoplasm side.

Checked over 30 simulated seconds (`__cell.step(.05, 600)`): every recipe completes, with 20–57 cycles each.

---

## 9. Views and the Cell Explorer

**Preset views** (`VIEWS`, cell frame):

- `cell`
- `envelope`: placed after building, on a stretch of the long face's top edge that has ATP synthase, a respiratory complex and a transporter within 22 nm
- `nucleoid`
- `gene`: the close-up gene, between its polymerase and its first ribosome
- `motor`: the motor on the cut
- `pole`: the chemoreceptor array

**Embed mode** is the same protocol as the animal page. `pointsOf(view)` returns named tag points:

- `easiest` (just behind a face, near the view's middle) for the overview and the nucleoid
- `frontmost` (nearest the camera, inside the frame, at least 0.16 NDC from tags already placed) for the close-ups
- in the envelope view, the nearest site of each kind to a chosen spot

**In the explorer** (`cell_explorer.html`):

- `PAGES` lists both realistic pages. Each is loaded the first time it is needed and kept, hidden, afterwards. Messages are matched to their page by `event.source`.
- Nodes carry `page: 'prokaryote_cell_realistic.html'`.
- The bacterium's levels are *Prokaryotic cell (realistic)* → *Cell envelope*, *Flagellar motor*, *Chemoreceptor array*, *Nucleoid* → *Gene being read*.
- Tags open either the explorer's existing models (LPS, porin, peptidoglycan, flagellum, pilus, 70S ribosome, RNA polymerase…) or five new real-structure pages built from the same data (`BPDB`): *Ribosome (E. coli 70S)*, *RNA polymerase (E. coli)*, *GroEL–GroES*, *HU* and *Chemoreceptor*.
- `RECIPE[page]` maps tree parts to each page's recipe keys, for the "Takes in / Gives out" lines.

---

## 10. Verification

As for the animal cell (local save server, `__cell` hook, screenshots), plus:

- **Counts** after building (`__cell.sites`):
  - genome, skin base pairs, HU, genes, ribosomes, porins, membrane proteins
  - total balls (~1.0 M) and rods (~0.9 M) at the overview, before any chunk is built in full
- **Frame rate:** about 41 fps at 1440 × 900 at the overview, 43 fps close up with chunks in full.
- **Zoom-based detail:** the number of chunks in full and their base pairs (`__cell.lod`) were checked near the cut, deep inside and back at the overview; four in/out cycles left memory and geometry counts flat.
- **Every view** was checked with screenshots.
- **Tag visibility:** in the explorer, every tag point is on screen for each realistic level. The check walks the levels and lists tags that are null or off screen.
- **Recipe completion** over 30 simulated seconds.
- **Syntax:** after every assembly, the module script was extracted and checked with `node --check`.

---

## 11. Pitfalls met, and their fixes

| Symptom | Cause | Fix |
|---|---|---|
| Motor, filaments and pili far too thin | sizes converted from nm with an extra factor of 10 | at `NM = .01`, 45 nm is .45 units: check every size against its real value |
| Envelope molecules hidden at the cut | flat coloured cap strips (as used in the animal cell) covered them | no caps: membranes drawn as rows of lipids at the cut |
| 38% of the genome counted as "near the cut" | DNA inside the removed wedge has negative depth | require `depth > −0.03` |
| No genes found | candidate sites lie on DNA that is itself in the occupancy grid | do not grid-check the gene site itself |
| An mRNA wandered through both membranes | `rnaFold` had a heading but no walls | new `o.ok(q)` option; RNA stays in the cytoplasm |
| Large plain balls in close-ups | the simple deep layer started only 20 nm in | detailed proteins to 30 nm and ribosomes to 32 nm; simple layer from 45–60 nm, darker |
| Thick striped ropes in the nucleoid | deep plectonemes were drawn as ropes | two thin dark strands, and the full model wherever the camera comes near |
| A tag missing in the gene close-up | HU sits on the DNA, so the DNA tag had already taken its spot on screen | place the HU tag before the DNA tag |
| Chemoreceptor array buried in proteins | the array was not in the occupancy grid | grid-register receptors, the baseplate, MreB and motors |
| ATP synthase inside a motor's C ring | membrane proteins were placed before motors | build flagella first |
| The filament seemed to grow out of the membrane away from its motor | the hook lay in the cut plane and was half clipped, one-sided, so it vanished; the helix widened within 600 nm, swinging its first stretch back down to the cell | the hook is never clipped and is two-sided; the filament's frame turns its first swing outward, and the helix widens over 1.5 µm |
| C ring floating below the motor; the rod vanished at the cut; proteins inside the C ring | no part joined the C ring to the MS ring; one-sided materials hid sliced parts; the grid only checks neighbouring cells, so a few large markers did not keep the crowd out | a FliG collar joins them and the rod runs from the export gate up; motor parts two-sided; the motor's volume filled with small grid markers |
| `Identifier 'nearest' has already been declared` | an embed helper reused a metabolism name | renamed it `frontmost` |
| Outer membrane looked like cream plastic | pale gel colour and strong sheen over a pink inner membrane | green gel colour and attenuation, less sheen, darker inner membrane |

---

## 12. How to extend it

- **A new protein in the crowd:**
  1. Add it to `coarse2.py` (with its chains, any BIOMT copies, and a k for the reduced form) and re-embed the `PDB` constant.
  2. Add an entry `[weight, key, colour]` to `kinds` in `buildCrowd`.
- **A new membrane machine:** add a block in `buildMembraneProteins` that uses `site(radius)`, so it gets `c`, `n`, `cyto` and `peri`; then add a recipe in `KINDS` and a processor in `buildFlows` (`memProc`).
- **A new view:** push `[name, camera, target]` to `VIEWS` (in `setViews` if it depends on the build), add its points in `pointsOf`, and add a node with `real: name, page: …, tags: [...]` in the explorer.
- **More DNA in full:** raise `LOD_NEAR`/`LOD_FAR` (how far round the camera) or `LOD_MAX`; raise `SKIN_DNA` only for DNA that must be detailed from the start. Each extra 0.1 unit of `SKIN_DNA` adds roughly 200,000 base pairs and a million primitives.

---

## 13. Rough numbers

| Thing | Count |
|---|---|
| Genome folded | 4,641,700 bp in 464 domains (~2,300 plectonemes) |
| DNA drawn base by base | ~180,000 bp always, plus up to ~500,000 bp round the camera |
| HU dimers | ~140 |
| Genes being read | 10 (+ the rRNA gene with six or seven polymerases) |
| Ribosomes | 950 detailed, ~22,000 simple, plus those on mRNAs |
| Soluble proteins | ~40,000 detailed, ~50,000 simple |
| Porins at the cut | ~750 |
| Membrane proteins at the cut | 80 ATP synthase, 60 respiratory, 110 transporters, 16 Sec |
| Flagella / pili | 7 / 80 |
| Balls / rods drawn | ~1.0 M / ~0.9 M at the overview |
| Working parts in the metabolism | 57 |
