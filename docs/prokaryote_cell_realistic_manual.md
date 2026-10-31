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
2. **Real structures.** Nearly every molecule is coarse-grained from a real Protein Data Bank structure (32 of them, §7), membrane proteins included, laid in the membrane as the OPM database orients them.
3. **The whole genome.** All 4,641,652 base pairs of the chromosome (strain MG1655) are folded into the nucleoid. Wherever DNA can be seen up close, it is drawn base pair by base pair, in the same model as the animal cell's DNA. Near the cut it always is; elsewhere it is built as the camera comes near (zoom-based detail, §5.5).
4. **A cell at work.** Most ribosomes are on mRNAs, a few dozen genes are being read at the cut, and a replication fork is copying the chromosome, as in a growing cell (§5.7).
5. **Spend detail only where it can be seen.** The cytoplasm is so crowded that nothing more than about 30–60 nm behind a cut face is visible. So molecules near the cut are drawn in full, everything deeper is drawn simply (§4), and the DNA gains full detail wherever the camera goes (§5.5).
6. **Everything happens on the cut faces.** Metabolism routes are pulled onto the cut faces, so every moving symbol stays in sight.
7. **Embeddable.** The page runs on its own and also inside `cell_explorer.html` as the *Realistic bacterium* root (§9).

---

## 2. What the page contains

| Part | How it is made | Real size |
|---|---|---|
| Rod shape | a capsule along x: straight half-length `H = 5.6`, outer radius `R = 4.6` | 2.04 µm × 0.92 µm |
| Outer membrane | LPS outer leaflet (lipid A tails, short sugar core) and phospholipid inner leaflet, in rows at the cut; a refracting green film elsewhere | 7 nm |
| Outer-membrane proteins | ~1,000 along the cut edge: OmpF porin trimers (2OMF, ~55%), OmpA (1BXW, ~40%), BAM (5D0O) and LptD–LptE (4Q35) | 5–12 nm |
| Efflux pumps | 24 AcrAB–TolC (5O66) spanning the whole envelope, from the inner membrane through the periplasm to the outer membrane | 33 nm long |
| Braun's lipoprotein | rods from the outer membrane to the wall | ~8 nm |
| Peptidoglycan | a cut-out texture shell, plus explicit glycan strands and peptide cross-links at the cut | 3 nm layer |
| Periplasmic proteins | 600: maltose-binding protein (1ANF), Skp (1SG2), SurA (1M5Y) and small clumps | 3–8 nm |
| Inner membrane | a phospholipid bilayer in rows at the cut, an opaque surface elsewhere | 7 nm |
| ATP synthase | 80 along the cut, the E. coli structure (6OQR, 450 balls each) | 23 nm tall |
| Respiratory chain | 60: complex I (7NYR, an L) and cytochrome bo3 (1FFT) | 18 nm arm |
| Transporters, channels, Sec | ~210 LacY (1PV6) and GlpT (1PW4); ~30 MscS channels (2OAU); 16 SecYEG–SecA (3DIN) | 5–12 nm |
| Flagella | 7 motors, one exactly on the cut so it shows in section: C ring (joined to the MS ring by a FliG collar), MS ring, 11 stators, rod from the export gate to the hook, P and L rings, hook; filament a left-handed helix 0.4 µm across, 2.3 µm pitch, 5 µm long, spinning | motor 45 nm, filament 20 nm |
| Pili | 80 type 1 pili with FimH tips | 7 nm × 0.4–1 µm |
| Chemoreceptor array | a honeycomb at the +x pole: receptor dimers (1QU7) in trimers 12 nm apart, CheA and CheW below, sensing domains above; half removed by the cut | ~250 nm |
| MreB | 60 short double filaments under the inner membrane, running round the rod | 5 nm monomers |
| Chromosome | 464 domains of ~10 kb; branched plectonemes; full model near the cut (§5) | 4.64 Mb, 1.6 mm |
| Nucleoid proteins | on the drawn DNA every 150–350 bp: HU (1MUL, ~55%), Fis (3IV5, ~33%) and IHF (1IHF, ~12%); gyrase (6RKW) every 5–12 kb | 3–19 nm |
| Replication fork | one replisome on the cross-section: DnaB (6QEL), two Pol III with β clamps (5FKV), clamp loader (3GLF), primase (1DDE), seven SSB (1EYG) on a looped lagging strand, two Okazaki fragments with RNA primers; new strands drawn paler (§5.7) | ~250 nm long |
| Genes being read | ~24 sites: RNA polymerase (4YG2) on the DNA, an mRNA growing out, ribosomes already on it, each with a growing protein chain | — |
| rRNA gene | about 500 bp at the start of an rRNA operon, with about six polymerases and lengthening, folding transcripts (a "Christmas tree") | — |
| Ribosomes | ~920 near the cut (reduced 4YBB, 220 balls each), about two thirds of them on mRNAs; ~22,000 deeper as pairs of balls; mostly kept out of the nucleoid | 25 nm |
| Polysomes | 90 mRNAs, each with several ribosomes | — |
| Soluble proteins and tRNA | ~40,000 near the cut: EF-Tu carrying tRNA (1TTT), free tRNA (1EHZ), EF-Tu, GAPDH, GroEL–GroES and small generic proteins; ~50,000 deeper as single balls | 3–20 nm |
| Glycogen | 7 granules of tiny glucose balls | 40–70 nm |

---

## 3. File layout (top to bottom)

The page is one HTML file of about 1,700 lines and 500 KB. Most of its size is the embedded protein data.

1. HTML, CSS and the embed-mode script, as in the animal page. The HUD says *Bacterium (E. coli)*, and the look button reads *Envelope: gel*.
2. **Shared helpers**, copied from the animal page: random numbers, noise, `ptFrames`, `blobGeo`, `cylM`/`atS`, `instanced`, `waveNormalMap`.
3. Renderer, camera, lights, cutaway clipping (`CUT`), `phys`.
4. `PARTS`: 21 parts for the legend and hover highlight.
5. `REG`/`reg`, `shellMat`, `applyLook` (only the outer membrane switches looks).
6. `impostorMat(key, clip)`, `stickMat(key, clip)`, `addCloud(list, mat, parent)`. These are the animal page's versions plus two new parameters: `clip = false` leaves the flagella and pili uncut, and `parent` lets a flagellum's balls ride on its own spinning group.
7. **Shape** (§4): `onAxis`, `axisDist`, `radial`, `toDepth`, `outline`, `edgePt`, `edgeAt`, `rodGeo`, `lobeRel`, `depthOf`, `cutPoint`.
8. **Molecule primitives**, copied: `BASE`, `BACKBONE`, `col`, `balls(key, parent, clip)`, `clump`, `resample`, `across`, `emitDNA`, the occupancy grid (cell size `GS = .06`), `rnaFold` (with a new `o.ok(q)` option, §6), `baseRod`, `rnaAlong`.
9. `PDB`: the bacterial structures (§7), then `Object.assign(PDB, …)` with the second set, and `model`, `placeMol`, `gMol`, `groupAt`, `qOut` and colour helpers.
10. Builders: `leaflet`, `buildEnvelope` (with `buildPumps`), `buildLipids`, `buildMembraneProteins`, `buildFlagella`, `buildPili`, `buildChemo`, `buildMreB`, `buildChromosome` (with `plectonemeAxis`, `drawPlectoneme`, `emitPath`, `napsOn`), `buildGenes`, `buildRRN`, `ssAlong`, `buildFork`, `buildCrowd`, `buildDeep`, `buildGlycogen`, `build`.
11. Metabolism: `MOL`, `INFO`, glyphs (with a new NADH glyph), the flow and effects machinery (copied), new routes and recipes (§8), and `buildFlows`.
12. Post-processing, `resize`, legend, buttons, `VIEWS`/`setViews`, controls, the `frame` loop (it also spins the flagella), `shot`.
13. Embed mode (§9) and `window.__cell`.

The page was assembled from the animal page. The shared sections are verbatim copies with small, listed changes, and the rest is new. Edit the HTML directly: there is no build step. (The pieces it was assembled from, and the coarse-graining scripts, lived in a temporary build folder and are not in the repo.)

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

One occupancy grid (`gAdd`/`gFree`, cell size .06) is shared by everything placed in order: pumps, outer-membrane proteins, motors, inner-membrane proteins, lipids, the rRNA gene, the fork, plectoneme axes, polymerases, ribosomes, glycogen, then the protein crowd. Each item checks it is free before it is placed and registers itself.

- **Big molecules register every ball** of their reduced model (`gMol`), so the grid knows their real shape: an ATP synthase blocks its head in the cytoplasm and its narrow rotor in the membrane, not a sphere round both.
- **Lipids go in last** (`buildLipids`, after every membrane protein), and each checks the grid, so the bilayer closes neatly round the proteins.
- **Proteins that grip DNA** (HU, Fis, IHF, gyrase) are not checked against the grid: they sit on the DNA, which is itself in the grid.

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

`napsOn(S, ax, clock)` puts a nucleoid protein beside the DNA every 150–350 bp, offset about 2 nm from the axis: HU (1MUL, 55%), Fis (3IV5, 33%) or IHF (1IHF, 12%), bead by bead. Gyrase (6RKW, reduced) comes every 5–12 kb; `clock` carries the count from one stretch of DNA to the next, since most stretches near the cut are short. Two HU sit on the close-up gene's DNA, either side of its polymerase. Chunks built in full get the same mix (§5.5). H-NS, another major nucleoid protein, is left out: there is no structure of the whole protein.

### 5.4 Genes being read (coupled transcription and translation)

`buildGenes` picks up to 45 sites on drawn DNA toward the nucleoid's edge (`lobeRel` .55–.97, 0.5–6 nm behind a face), at least 45 nm apart and over 100 nm from the fork; about 24 are found.

- **The close-up gene:** of those on the long face, the one with the most free room around it.
- **Each site** gets:
  - RNA polymerase (4YG2): bead by bead at the close-up gene, reduced elsewhere
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

### 5.7 The replication fork

A growing *E. coli* copies its chromosome nearly all the time, so one replisome is drawn (`buildFork`). It lies on the cross-section (x = 0), near the chromosome's core loop, where the nucleoid is deepest behind it. Placed on the long face it had little DNA behind it, and the close-up looked straight through to the deep ribosomes.

- **Frame.** `P(a, b, c)` gives a point in nanometres: `a` along the fork's direction of travel (`u`, here −y), `b` across it on the face (`v`, +z), `c` further behind the face (`w`, −x). Paths are Catmull–Rom curves through such points, resampled to one base pair (0.34 nm) or one nucleotide (0.65 nm).
- **DNA.** Double helices use `emitDNA` with `BACKBONE` swapped for the call: parent strands keep their blue and purple; new strands are pale cyan (`#a8ecff`); RNA primers are pink, as an RNA–DNA hybrid. Single strands use `ssAlong`, like `rnaAlong` but with DNA bases. The parent duplex and both daughters bend away from the face at their far ends, so they fade into the nucleoid.
- **The parts, in order along the fork:**
  1. the parent duplex, ending at the DnaB hexamer (6QEL), which rings the lagging strand
  2. the leading template, outside the ring, into Pol III (5FKV, turned so its DNA axis runs along `u`, origin in its β clamp); the leading daughter trails behind
  3. the lagging template, through the ring, with a new primer beside primase (1DDE)
  4. a loop coated by six SSB tetramers (1EYG); `coat` winds the single strand two and a half times round each (about 85 nt)
  5. the current Okazaki fragment (primer, then new DNA) running back into the second Pol III
  6. a short gap (one SSB), then the last fragment, finished, with its old β clamp still on and the lagging daughter beyond
  7. the clamp loader (3GLF) in the middle, its τ arms drawn as strings of small balls to both polymerases and the helicase
  8. HU on the daughters and the parent, away from the fork
- **Room.** Every path is marked in the grid at three depths (`mark`), so neither the chromosome nor the crowd grows into the fork or into the thin layer between it and the cut face.

## 6. The rest of the cell

- **Inner-membrane proteins** (`buildMembraneProteins`): every one is a real structure from OPM (§7), placed with `qOut(n)` (its z along the outward normal, spun at random), so the part in the membrane sits in the membrane:
  - ATP synthase (6OQR): the F1 head 10–19 nm into the cytoplasm; its docking point for ADP is just below the β subunits (`groupAt`)
  - complex I (7NYR) and cytochrome bo3 (1FFT), alternating; complex I's docking point is the tip of its cytoplasmic arm
  - LacY (1PV6), GlpT (1PW4) and the channel MscS (2OAU; channels go to `SITES.chan`, not `SITES.trans`, so glucose never enters through them)
  - SecYEG with SecA (3DIN, from *Thermotoga maritima*)
- **Outer membrane and periplasm** (`buildEnvelope`): the 24 AcrAB–TolC pumps first, from the inner membrane's mid-plane up (5O66 puts the outer membrane 27 nm above the inner one; the model's is 28 nm); then about 1,000 outer-membrane proteins (OmpF, OmpA, BAM, LptD–LptE); then the wall, Braun's lipoprotein and 600 periplasmic proteins.
- **The envelope close-up's spot** (`ENV_X = 4.2`, on the long face's top edge): the first pump, the first BAM, one ATP synthase and one complex I are put there on purpose (`topAt`, and `staged` in `buildMembraneProteins`), so the view always shows each of them.
- **Membranes at the cut:** `buildLipids` calls `leaflet(S, headDepth, tailDepth, lps)` lays lipids in rows, 0.85 nm apart (1.2 nm for LPS), along both cut outlines and up to 4 nm behind each face. Each lipid is a head ball and two tail rods; LPS adds three sugars outward. Four leaflets are drawn: LPS, the outer membrane's inner leaflet, and both leaflets of the inner membrane.
- **Membrane proteins** sit at random spots on the inner membrane's mid-plane, up to 22 nm behind a face. Each records `c` (centre), `n` (outward), `cyto` and `peri` (where molecules dock on each side) for the metabolism.
- **Flagella:**
  - Each filament is built in its own group: local x is the helix axis, and the group's origin is the hook's end. The frame loop calls `group.rotateX`, which spins the helix like a corkscrew.
  - The filament axis points back and out (`D = normalize(−1.6 x̂ + n)`), so the filaments trail behind a cell swimming toward +x. The group's local y points away from the cell, and the helix amplitude grows over the first 1.5 µm, so the filament leaves the hook straight and never swings back into the cell body.
  - The hook (a tube from inside the L ring to the filament's start) is two-sided and never clipped, like the filament, so it stays whole even on the motor that sits on the cut.
  - Base spin is 1.8 rad/s × the speed slider. Each time a motor completes its proton recipe, its spin jumps (§8).
- **Polysomes:** 90 mRNAs of 350–700 nt in the cytoplasm near the cut, each with a ribosome every 80–110 nt, and 330 ribosomes on their own, so about two thirds of the ribosomes near the cut are translating.
- **tRNA:** the crowd's mix has EF-Tu carrying an aminoacyl-tRNA (the ternary complex, 1TTT; 8%), free tRNA (1EHZ; 4%) and free EF-Tu (5%), drawn under their own legend entry, *Transfer RNA*.
- **`rnaFold` option `o.ok(q)`:** a candidate step is penalised if `ok` is false. The pages use `inCytoCut` (inside the cytoplasm, not in the wedge), so mRNAs never cross membranes.

---

## 7. Real structures: download and coarse-graining

Two scripts did this, `coarse2.py` (the first eight structures) and `coarse3.py` (the other 24); they were in the build folder and are not in the repo. Their steps:

1. **Download:**
   - `files.rcsb.org/download/<ID>.pdb` for 4YG2, 2OMF, 1AON, 1EFC, 1DC4, 1MUL and 1QU7
   - the mmCIF file for the ribosome 4YBB, which is too large for the PDB format
   - for the 11 membrane proteins, the OPM file instead (`opm-assets.storage.googleapis.com/pdb/<id>.pdb`): the same coordinates turned so the membrane normal is z, with dummy atoms marking the membrane planes. OPM puts the cytoplasm at −z for inner-membrane proteins and the periplasm at −z for outer-membrane ones, so +z always points out of the cell
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
6. **Place the origin** (`coarse3.py`): membrane proteins on the membrane's mid-plane (for MscS, set by hand at z = −82 Å, as OPM's planes for 2OAU are off); ring proteins (DnaB, the β clamp) with the ring's axis turned to z; Pol III with its DNA's axis turned to z, the origin in its clamp and +z toward the polymerase; everything else centred.
7. **Reduce** for the crowd with k-means (40 iterations), to 220 balls for the ribosome, 110 for GroEL, 60 for RNA polymerase, 34 for GAPDH, 27 for OmpF, 24 for the receptor, 13 for EF-Tu and 6 for HU; and in `coarse3.py` 600 for the pump, 450 for ATP synthase and complex I, 40–160 for the other membrane proteins, 150 for gyrase and 9–40 for tRNA and the ternary complex. Full models are kept only where the page draws them bead by bead (the fork's proteins, Fis, IHF); the full ATP synthase, complex I, pump, DnaB, Pol III and gyrase go to the explorer instead. Each ball's radius matches the volume of its members (140 Å³ per amino acid, 330 Å³ per nucleotide), swollen by 1.25 so neighbours touch. Radii are stored as bytes in 0.25 Å units.

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
- `envelope`: on the long face's top edge at `ENV_X`, where its pump, BAM, ATP synthase and complex I were put (§6)
- `nucleoid`
- `gene`: the close-up gene, centred on the box round its polymerase and ribosomes, and moved back if that box is wider than 60 nm
- `motor`: the motor on the cut
- `pole`: the chemoreceptor array
- `fork`: the replication fork, from 1.9 units in front of the cross-section (`SITES.fork.cam`)

**Embed mode** is the same protocol as the animal page. `pointsOf(view)` returns named tag points:

- `easiest` (just behind a face, near the view's middle) for the overview and the nucleoid
- `frontmost` (nearest the camera, inside the frame, at least 0.16 NDC from tags already placed) for the close-ups
- in the envelope view, the nearest site of each kind to a chosen spot

**In the explorer** (`cell_explorer.html`):

- `PAGES` lists both realistic pages. Each is loaded the first time it is needed and kept, hidden, afterwards. Messages are matched to their page by `event.source`.
- Nodes carry `page: 'prokaryote_cell_realistic.html'`.
- The bacterium's levels are *Prokaryotic cell (realistic)* → *Cell envelope*, *Flagellar motor*, *Chemoreceptor array*, *Nucleoid* → *Gene being read* and *Replication fork*.
- Tags open either the explorer's existing models (LPS, porin, peptidoglycan, flagellum, pilus, 70S ribosome, RNA polymerase…) or eleven real-structure pages built from the same data (`BPDB`): *Ribosome (E. coli 70S)*, *RNA polymerase (E. coli)*, *GroEL–GroES*, *HU*, *Chemoreceptor*, *ATP synthase (E. coli)*, *Complex I*, *AcrAB–TolC*, *DnaB helicase*, *DNA polymerase III* and *DNA gyrase*. Membrane proteins stand with the outside of the cell up.
- `RECIPE[page]` maps tree parts to each page's recipe keys, for the "Takes in / Gives out" lines.

---

## 10. Verification

As for the animal cell (local save server, `__cell` hook, screenshots), plus:

- **Counts** after building (`__cell.sites`):
  - genome, skin base pairs, HU, genes, ribosomes, porins, membrane proteins
  - total balls (~1.3 M) and rods (~1.0 M) at the overview, before any chunk is built in full
- **Frame rate**, at 1440 × 900 in the test browser: overview ~24 fps (28 before the second set of structures), envelope ~43, gene ~38, fork ~31 (21 chunks in full). Absolute numbers vary between runs and machines; compare versions in the same session.
- **Zoom-based detail:** the number of chunks in full and their base pairs (`__cell.lod`) were checked near the cut, deep inside and back at the overview; four in/out cycles left memory and geometry counts flat.
- **Every view** was checked with screenshots, side by side with the previous version (`git show HEAD:… > renders/old_bact.html`, served by the same local server).
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
| Almost no HU, and no gyrase, near the cut | each was checked against the grid, and the plectoneme axes around them are in it | proteins that grip DNA skip the check |
| The fork close-up looked through to big deep ribosomes | on the long face, the nucleoid was only ~200 nm deep behind the fork, with little DNA there | move the fork to the cross-section, near the chromosome's core loop |
| Ribosomes from genes covered the fork | gene sites had been widened toward the nucleoid's middle | genes stay toward its edge and over 100 nm from the fork |
| The envelope close-up had no pump, or no BAM, in frame | only 24 pumps and ~16 BAM along ~50 µm of cut edge | put one of each (and an ATP synthase and complex I) at the view's spot |
| Tags in the gene close-up off screen | its mRNA ran far from its polymerase, and the view was aimed between the polymerase and one ribosome | aim at the box round the polymerase and all its ribosomes, and back off if it is wide |
| The explorer still showed the old bacterium | the browser cached the iframe page | fetch it with `cache: 'reload'` before reloading the explorer |
| `Identifier 'nearest' has already been declared` | an embed helper reused a metabolism name | renamed it `frontmost` |
| Outer membrane looked like cream plastic | pale gel colour and strong sheen over a pink inner membrane | green gel colour and attenuation, less sheen, darker inner membrane |

---

## 12. How to extend it

- **A new protein in the crowd:**
  1. Add it to `coarse2.py` (with its chains, any BIOMT copies, and a k for the reduced form) and re-embed the `PDB` constant.
  2. Add an entry `[weight, key, colour]` to `kinds` in `buildCrowd`.
- **A new membrane machine:** get its OPM file, add a `mem(...)` line to `coarse3.py`, then a block in `buildMembraneProteins` that uses `site(radius)` (so it gets `c`, `n`, `cyto` and `peri`) and `put(S, key, s, colour)`; then add a recipe in `KINDS` and a processor in `buildFlows` (`memProc`).
- **A new view:** push `[name, camera, target]` to `VIEWS` (in `setViews` if it depends on the build), add its points in `pointsOf`, and add a node with `real: name, page: …, tags: [...]` in the explorer.
- **More DNA in full:** raise `LOD_NEAR`/`LOD_FAR` (how far round the camera) or `LOD_MAX`; raise `SKIN_DNA` only for DNA that must be detailed from the start. Each extra 0.1 unit of `SKIN_DNA` adds roughly 200,000 base pairs and a million primitives.

---

## 13. Rough numbers

| Thing | Count |
|---|---|
| Genome folded | 4,641,700 bp in 464 domains (~2,300 plectonemes) |
| DNA drawn base by base | ~180,000 bp always, plus up to ~500,000 bp round the camera |
| Nucleoid proteins near the cut | ~410 HU, ~230 Fis, ~90 IHF, ~23 gyrase |
| Replisome | 1 fork: DnaB, 2 Pol III, clamp loader, primase, 7 SSB, 3 β clamps |
| Genes being read | ~24 (+ the rRNA gene with six or seven polymerases) |
| Ribosomes | ~920 detailed (~590 on mRNAs, 330 free), ~22,000 simple |
| Soluble proteins | ~40,000 detailed, ~50,000 simple |
| Outer-membrane proteins at the cut | ~550 OmpF, ~390 OmpA, ~16 BAM, ~36 LptD–LptE; 24 AcrAB–TolC pumps |
| Inner-membrane proteins at the cut | 80 ATP synthase, 60 respiratory (complex I and bo3), ~210 transporters, ~30 MscS, 16 Sec |
| Flagella / pili | 7 / 80 |
| Balls / rods drawn | ~1.3 M / ~1.0 M at the overview |
| Working parts in the metabolism | 57 |

---

## 14. What is simplified or left out

The model aims at real structures, sizes and numbers, but much is still missing or simplified:

- **Water, ions and small molecules** are not drawn; the metabolism's symbols stand in for some of them, much enlarged and slowed.
- **Crowding away from the cut** is far below real: about 50,000 single balls stand for the 3–4 million proteins of a real cell. Close to the cut it is close to real.
- **Activity is still on the low side.** A fast-growing cell has more than a thousand RNA polymerases at work and most of its ~50,000 ribosomes on mRNAs; near the cut there are ~24 genes and ~90 polysomes.
- **Nucleoid:** H-NS, MukBEF (the bacterial condensin), topoisomerase I and Dps are left out; gyrase sits beside the DNA rather than wrapped by it.
- **Replication:** only one fork is drawn (a growing cell has two, often several); there is no origin or terminus, and no DNA polymerase I or ligase finishing the fragments.
- **Division:** no FtsZ ring or divisome; the cell is drawn between divisions.
- **Envelope:** the outer membrane has four kinds of protein (a real one has dozens); the periplasm has three real proteins and generic clumps; the wall is a single textured layer, with strands drawn only at the cut.
- **Inner membrane:** five kinds of protein (a real one has hundreds), probably less densely packed than real.
- **The Sec translocon** is from *Thermotoga maritima*, and **tRNA** is yeast tRNA-Phe, as the structures closest to E. coli's that show the whole complex.
- **Flagellar motor:** built from simple shapes (rings, cylinders), not from structures.
