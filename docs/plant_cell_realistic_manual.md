# How the realistic plant cell is built

A manual for another agent (or person) who needs to understand, rebuild or extend `plant_cell_realistic.html`. It follows the recipe of the animal cell, so read [animal_cell_realistic_manual.md](animal_cell_realistic_manual.md) first. This manual covers what the plant page reuses, what is new, the algorithms behind the new parts, how the work was checked, and the mistakes that were made and fixed.

The page is a single HTML file with one ES-module script, built on three.js 0.160 from a CDN. There is no build step: edit the HTML directly.

---

## 1. Goals

1. **The same recipe as the animal cell.** A quarter wedge is cut away. Organelles are translucent gel in a crowded cytoplasm. The nucleus is built molecule by molecule at 20 times life size. Molecules travel between organelles, dock on the one that asked for them, and it lights up as it makes its product.
2. **What makes a plant cell a plant cell.** The page shows these features:
   - a cellulose wall;
   - a central vacuole that presses the cytoplasm into a thin layer along the wall;
   - chloroplasts with grana;
   - transvacuolar strands and cytoplasmic streaming;
   - plasmodesmata;
   - cortical microtubules that steer cellulose synthesis;
   - dozens of small Golgi stacks, and no centrosome or lysosomes;
   - chromocenters in the nucleus;
   - photosynthesis and photorespiration in the metabolism.
3. **Two places opened to true size.** A granum and a stretch of the wall are drawn molecule by molecule from real structures, at their real size, like the bacterium. Zoom right in to see them.
4. **Reproducible.** The page uses a seeded random stream. The nucleus and the two true-size places each draw from their own stream (seeds 9001, 4242 and 5151).

## 2. Scale

| Where | Scale |
|---|---|
| The cell and its organelles | 1 scene unit = 1 µm, and the shapes are true. The cell is a rounded box 22 × 17 × 18 µm, outside its wall. Chloroplasts are lenses about 5 × 3 × 2 µm, and the wall is 0.25 µm thick. |
| The nucleus interior | Molecules are 20 times life size, as in the animal cell (`NM = 0.02`), so there are far fewer nucleosomes than in real life. |
| The granum and the wall close-up | True size (`NMT = 0.001` units per nm). A thylakoid membrane is 0.005 units thick, and PSII is about 0.03 units long. |
| The cytoplasm crowd and stroma stand-ins | Drawn larger than life (ribosomes 45–60 nm), as in the animal cell. They are kept out of the two true-size places. |

To make the true-size close-ups possible, the camera's near plane follows the zoom (`fitNear`, near = 1.5% of the distance to the target, between 0.0008 and 0.1). `controls.minDistance` is 0.02.

## 3. How the file was made

The page was assembled from the animal page by a script that copied its shared sections verbatim, applied small listed substitutions, and inserted new pieces. That one-off script is not kept: the page has been edited directly since, so it no longer applies. The table shows where each section of the file came from.

| Section | Source |
|---|---|
| Head, CSS, buttons | animal, retitled |
| Random numbers, noise, geometry helpers | animal (seed 20261102) |
| Renderer, lights, cutaway planes | animal: the camera moved back, the shadow box widened, the lamp moved |
| `PARTS` | new: 29 legend parts |
| Impostor balls and rods, `shellMat`, `applyLook` | animal. `applyLook` changes: dense shells (chloroplasts) stay opaque in the gel look, and `INSIDE` objects show only in the see-through look. `balls(key, parent)` can add to a group. |
| Shapes | new (§4) |
| Nucleus molecules (`emitDNA`, `fold`, `chromosome`, RNA, the PDB constant for Pol II, PCNA, ubiquitin) | animal. `fold` can continue from a point; `chromosome` draws darker histones for chromocenters. |
| True-size molecules (`placeMol`, `tFits`, `tMark`, a fine grid, `qOut`) | from the bacterium (§7) |
| `buildNucleusInterior` | animal, with Arabidopsis chromosomes and chromocenters (§6) |
| `build`, `chloroMeshes`, `mitoMaker`, `buildThylakoid`, `buildWallPatch` | new (§5, §7, §8) |
| Metabolism | animal engine (symbols, effects, processors, recipes); new molecules, recipes and routes (§9) |
| Post-processing, UI, embedding | animal: new views, tags and the explorer protocol unchanged (§10) |

---

## 4. Shapes

### 4.1 The cell and its wall

The cell is a superellipsoid, a box with rounded corners, because neighbours press plant cells flat:

```
boxF(p) = (|x/11|⁴ + |y/8.5|⁴ + |z/9|⁴)^(1/4)          (1 on the outside of the wall)
cellR(d) = (1 + 0.016·(fbm − 0.5)) / boxF(d)
memR(d)  = cellR(d) − 0.25                            (the plasma membrane, pressed against the wall)
```

Everything reuses the animal page's radius-function machinery: `shellGeo`, `capStrip` and the cut planes.

| Helper | What it gives |
|---|---|
| `below(p)` | depth inside the membrane |
| `atDepth(d, dep)` | the point at that depth along direction `d` |
| `boxN(p)` | the wall's outward normal (the gradient of `boxF`) |
| `faceDir` / `facePt` | points on the outline of a cut face, at a depth and a distance behind the face |

The wall is drawn in three layers:

- **Outer surface:** a frosted transmission material with a fibrous normal map.
- **Inner surface:** the plasma membrane, seen from inside (back side, sage).
- **Cut faces:** strips for the pectin-rich outer layer, the cellulose layers and the membrane. These strips sit **45 nm behind** the cut (`capStrip(..., shift = −0.045)`), so the true-size microfibrils drawn in front of them show.

### 4.2 The nucleus

The nucleus is a noisy ellipsoid: semi-axes 3 × 2.1 × 2.8 µm, centred at `N0 = (0, −5.75, 0)`.

- **Position:** it lies on the floor of the cell, in a pocket of cytoplasm.
- **Cut:** it sits on the line where the two cut faces meet, so both faces slice it.
- **Nucleolus:** `NO = N0 + (0, 0.35, 1.0)` with radius 0.92, on the x = 0 face.

### 4.3 The vacuole and its tonoplast

The tonoplast wraps everything in the thin layer of cytoplasm. Each organelle is first registered as an ellipsoid **blob**, with a margin of cytoplasm round it. The tonoplast is then found along each ray from the cell's centre:

```
vacR(d) = smin( memR(d) − 0.38 ,  entry distance of the ray into each blob it hits ,  k = 0.3 )
```

- **Each blob:** the ray is moved into the blob's frame and scaled to a unit sphere, giving a quadratic; its entry root is the hit.
- **Cheap rejection:** each blob stores its direction and angular radius, so rays that miss are rejected with a single dot product.
- **Smoothing:** `smin` is a polynomial smooth minimum, so the membrane drapes over each organelle and flattens onto the thin layer between them.
- **Blob margins:** chloroplasts +0.1–0.14, mitochondria +0.1–0.14, peroxisomes +0.12, Golgi stacks about 0.1. The nucleus gets +0.85, a pocket that holds its ER sheets.

The order of construction matters. Every organelle that bulges the tonoplast is placed before it is built. Things placed afterwards (ER, cables, crowd) use these helpers:

- `inLayer(p, m)`: is the point in the cytoplasm layer, with margin `m`?
- `layerPt(d, f)`: a point a fraction `f` of the way from the tonoplast to the membrane.

The tonoplast itself is drawn as follows:

- **Mesh:** a 300-segment `shellGeo`, as a faint, iridescent, transparent film.
- **Cut faces:** a thin line (cap strip).
- **Pumps:** 1,500 proton pumps on stalks on its cytoplasmic side.
- **Flow points:** `ORG.tono` holds places on the tonoplast for the flows, from a Fibonacci sphere (no random draws).

---

## 5. Building the cell (`build()`)

| Part | Algorithm |
|---|---|
| **Reserved zone** | A ball of radius 1.25 at the wall close-up (§8) is kept clear of organelles. |
| **Nucleus** | Envelope, 520 pores and caps as in the animal cell. Interior on its own stream (§6). Then a blob for its pocket. |
| **Chloroplasts** | `tryChl(d)`: a lens with half-axes a 2.2–2.7, b 1.3–1.65 and h 0.85–1.0. Its wall-facing side is flattened to 0.75 h, it lies against the wall (centre at `WALL + 0.05 + 0.75h` along the inward normal), and its long axis is random in the wall plane. It is accepted only if 13 test points lie inside the membrane, clear of the nucleus and reserved zones, and if no other chloroplast's rim falls inside it (or its rim inside them). 9,000 tries reach about 57. The first, the **showcase** on the ceiling, is forced: centred on x = 0 with its long axis along z, so the cut splits it lengthwise. |
| **Peroxisome triads** | 16 leaf peroxisomes pressed on the vacuole side of a chloroplast (`onChl`), each with a mitochondrion beside it. Chloroplast, peroxisome and mitochondrion share the work of photorespiration, as in a leaf. |
| **More mitochondria** | 42 more along the wall, tangent to it (`mitoFits` checks five points along the axis). Built by the animal code at plant size: R 0.22–0.28, length 0.9–1.8, a crista every 0.1. |
| **More peroxisomes** | 6 more. Each has a catalase crystal (a 5 × 5 × 3 lattice of cubes), matrix enzymes and import pores. |
| **Golgi stacks** | 14 stacks of 5 cisternae each, about 1 µm across, standing in the layer. Cis-to-trans runs along the wall, with a colour gradient in vertex colours. Each stack is one merged mesh with its own material, so it can glow, plus rim and trans vesicles. |
| **Tonoplast** | §4.3 |
| **Chloroplast insides** | §5.1 |
| **Rough ER** | Two sheets round the nucleus, as the animal code makes them. Their coverage is cut off below the nucleus, where the wall is. |
| **Cortical ER** | About 800 nodes 85 nm under the membrane, at least 1 µm apart and not inside chloroplasts. Each joins its 3 nearest neighbours with a bent tube (radius 26 nm), with spheres at three-way junctions. Every ninth node is a working spot for the flows. |
| **Cortical microtubules** | Hoops round the long (x) axis: for x₀ = −10.2 … 10.2 every 0.34, one or two arcs of 2–7 µm, 45 nm under the membrane, with a slight spiral. `hoop(x₀, φ, depth)` finds each point by bisection along the ray in that plane. Arcs break where they would enter the wedge, the nucleus or the wall close-up. |
| **Cellulose synthases (cell scale)** | 340 rosettes of six tiny balls in the membrane, over the microtubules. Every twelfth is a working spot. |
| **Actin cables** | 26 walks along the tonoplast's cytoplasmic face (70 nm in). Each step moves 0.2 µm along a slowly turning heading and is projected back onto the face. |
| **Transvacuolar strands** | 5 cords from the nucleus pocket to the tonoplast near the walls. Each is a tapered sweep of tonoplast film round an actin core, with ribosome and protein dots inside. |
| **Plasmodesmata** | Tubes through the wall: plasma-membrane lining, a desmotubule (ER) and callose collars at both necks. Two pit fields lie on the cut, one per face, with a row of 7 split down the middle (at 15 nm behind the face), plus 6 random fields on the walls that face neighbours. |
| **Vesicles** | 90 round the Golgi stacks (a quarter with clathrin cages, made by the animal code), and 16 fusing with the membrane. |
| **Streaming** | 46 movers (vesicles, and small mitochondria every fifth) ride the actin cables and strands at 2.5–5 µm/s, in both directions. |
| **Crowd** | Ribosomes, 40 polysomes and 20,000 protein balls in the layer, kept out of chloroplasts, the nucleus, the wedge and the wall close-up. |
| **True-size places** | `buildThylakoid` (§7), then `buildWallPatch` (§8) |

### 5.1 Chloroplast insides (`chloroMeshes`)

Each chloroplast works in its own frame (u along its length, v across, n into the cell).

- **Envelope:** an outer and an inner shell. The inner one is built only for chloroplasts that the cut opens.
- **Grana:** up to 40, each a stack of 5–16 discs (radius 0.19–0.25, 16 nm thick, one every 22.5 nm). Their axes are about normal to the lens, at every depth that fits. Overlapping grana are rejected in 2D, with a height check.
- **Stroma lamellae:** thin boxes joining each granum to its two nearest neighbours.
- **Starch:** 1–2 lens-shaped grains. The showcase chloroplast always has one just behind the cut.
- **Other contents:** 7 plastoglobuli, 2 nucleoid knots, and 380 stroma balls (RuBisCO stand-ins plus a 70S ribosome every seventh).
- **Instancing:** everything above goes into instanced meshes.

Chloroplasts are dense, so their envelopes stay opaque green in the gel look. The insides of chloroplasts that the cut does not open are collected in `INSIDE` and drawn only in the see-through look. That halves the triangle count.

The showcase chloroplast leaves room for the true-size granum: no mesh grana within 1 µm of it, and no stand-in balls within 0.95 µm.

---

## 6. The nucleus

The animal code is used with these changes:

- **Chromosomes:** 10 chromosomes, two each of Arabidopsis thaliana's five (30.4, 27, 23.5, 19.7 and 18.6 Mb). Up to 1,100 nucleosomes are asked for; the self-avoiding walks fit about 770.
- **Chromocenters:**
  - Each chromosome first folds 22% of its nucleosomes into a tight ball (radius 0.3) just inside the envelope, in the direction of its territory. That is its chromocenter, drawn with darker histones.
  - The arm then folds into the territory. `fold(..., from)` lets it continue from a free point just outside the chromocenter.
- **Genes being read:**
  - Most chromosomes (80%) have one.
  - The new mRNA grows along the cut face (not toward it), so it is not cut off.
  - The DNA view is aimed, after the build, at the gene whose mRNA stays most on the visible side of the cut.
- **Smaller amounts:** finished mRNAs and nucleoplasm proteins are scaled down to the smaller nucleus.

---

## 7. The granum, molecule by molecule (`buildThylakoid`)

The granum sits in the showcase chloroplast at `G = c + 0.75u + 0.05n`. Its axis is the chloroplast's normal (vertical), and the cut splits it through its middle, as in an electron micrograph. Its molecules go into the group `WT`, which `winLOD` draws only when the camera is within 8 µm.

### 7.1 Membranes

- **The stack:** 12 thylakoids, radius 0.22. Each is two membranes 5 nm thick round a lumen 9 nm wide; thylakoids repeat every 22.5 nm, leaving 3.5 nm of stroma between them.
- **Surfaces:** each thylakoid has an outer and a lumen surface, each a `LatheGeometry` of a stadium profile, with rounded margins.
- **Cut faces:** stadium-shaped bilayer rings (heads, tails, heads), made with `ShapeGeometry` and holes, 10 nm behind the face.
- **Stroma lamellae:** 4 single thylakoids, 0.34 µm long, leave the stack's edge at different levels. Each is drawn as boxes, with bilayer bands on its cut.
- **Plastoglobule:** one lipid droplet sits by a lamella.

### 7.2 Proteins

Every membrane gets a record: its mid-plane, which way its lumen lies, and whether it faces another thylakoid ("shut", appressed) or the stroma ("open"). Sampling uses those records.

**Appressed membranes:**

- **Mix:** PSII–LHCII 55%, extra LHCII 35%, b6f 10%.
- **Why only these:** PSI and ATP synthase stick out too far into the stroma to fit the 3.5 nm gap.

**Open membranes** (the stack's end faces and both faces of each lamella):

- **Mix:** PSI 55%, ATP synthase 22%, b6f 13%, LHCII 10%.

**Placement rules:**

- **Orientation:** a membrane protein is turned so its OPM +z (the lumen) points into the lumen.
- **Inside the disc:** it must lie within the disc (`fitsDisc`).
- **No overlaps:** it must be clear of everything already placed (`tFits` on its reduced balls, in a 12 nm grid).
- **Depth:** it must lie within 36 nm behind the cut face.

**The lumen and the stroma:**

- **Plastocyanin:** 40, in the lumens.
- **Chloroplast ribosomes:** 12, using the E. coli 70S model taken from the bacterium page; two are placed close to the stack.
- **RuBisCO:** about 2,000, packed in an oval patch round the stack (thinning at its edge, so it has no hard border). It is kept 6 nm off every membrane.

**Detail:** molecules within 55–70 nm of the view's target get every bead; the rest use reduced balls.

### 7.3 Real structures

Membrane proteins come from OPM with the membrane normal along z and +z to the lumen (or the outside of the cell). This was checked per structure: PSII's oxygen-evolving complex and cytochrome f are at +z; the PSI stromal subunits, ATP synthase's CF1 and the catalytic domains of CESA and AHA2 are at −z.

| Key | PDB | What | Groups (colours) | Reduced balls |
|---|---|---|---|---|
| `psii` | 3JCU | spinach PSII–LHCII C2S2, 7,648 aa + 206 chlorophylls | D1/D2, CP47/CP43, small subunits, OEC, LHCII, CP29/CP26 | 300 |
| `lhcii` | 1RWT | LHCII trimer, 654 aa + 42 chl | 3 chains | 30 |
| `b6f` | 6RQF | cytochrome b6f dimer | b6 + subIV, cyt f, Rieske, small | 60 |
| `psi` | 4XK8 | pea PSI–LHCI, one copy | PsaA/B, PsaC/D/E, others, LHCI | 200 |
| `catp` | 6FKF | spinach chloroplast ATP synthase | α, β, γ/ε, c₁₄ ring, a/b/b′/δ | 200 |
| `rubisco` | 1RCX (assembly 1) | spinach L8S8 | large, small | 60 |
| `pc` | 1AG6 | plastocyanin | — | 6 |
| `cesa` | 6WLB | poplar CESA8 trimer | 3 chains | 50 |
| `aha` | 5KSD | Arabidopsis H⁺-ATPase AHA2 (monomer) | — | 40 |
| `pip` | 1Z98 | spinach aquaporin SoPIP2;1 tetramer | 4 chains | 30 |

**Coarse-graining:**

- **Steps:** as in the bacterium manual §7. One bead per Cα, and one bead per chlorophyll (the Mg atom of CLA or CHL, `part = 3`, drawn 1.05 nm and green).
- **Origins:** membrane proteins on the membrane mid-plane; soluble ones centred.
- **Reduced models:** k-means on the amino acids only.
- **Where the full models go:** they are embedded in the page for the close-ups, and also in the explorer's `BPDB`.

The script is [tools/coarse_plant.py](../tools/coarse_plant.py). [tools/README.md](../tools/README.md) explains how to download the structures (`tools/fetch_structures.sh`), run it, and write its output into the page and the explorer (`tools/embed_structures.py`).

---

## 8. The wall, molecule by molecule (`buildWallPatch`)

### 8.1 Microfibrils along both cut faces

These are drawn on the whole length of both faces (group `WW`, drawn only within 4 µm).

- **Layers:** 8 lamellae, 24.5 nm apart, from 12 nm outside the membrane. Fibril angles are 0, 8, 22, 40, 62, 80, 105 and 130° (±6°) to the wall's hoop direction, and spacing grows from 18 to 40 nm outward. The newest layer runs like the microtubules; older layers, pushed out as the cell grew, lie at wider angles.
- **Geometry:** each lamella's fibrils are lines in (arc length, distance behind the face) space. Each line is clipped to the face's length and to a 42 nm band behind it, then sampled every 30 nm along the face's outline (`outlines[axis].tAt` turns arc length into the outline parameter).
- **Lengths and drawing:** fibrils break into lengths of 2–7 µm. Each is drawn as rods 3.6 nm thick.

### 8.2 Around the close-up

The close-up is on the +z wall, x = 0, y ≈ 2.5, within 1.2–1.3 µm of it:

- **Hemicellulose:** short wiggly chains coating the microfibrils.
- **Pectin:** 1,100 wiggly chains, 45% of them in the outer 35 nm (the middle-lamella layer), with calcium bridges. Chains turn back instead of leaving the wall (`inWall`).
- **Plasma membrane:** a bilayer cut strip (1, 3 and 1 nm bands), 12 nm behind the face.
- **Cortical microtubules:** 5 microtubules, 28–34 nm under the membrane, lying in planes parallel to the face. Each is 13 protofilaments of α- and β-tubulin, a tubulin every 4 nm, and each protofilament shifted 3/13 of a tubulin from the last.
- **Cellulose synthases:** 6 rosettes, each 6 CESA trimers on a ring of radius 12.5 nm, over the microtubules. Each spins a microfibril up into the innermost layer and away along it.
- **Pumps and channels:** 13 AHA2 proton pumps and 13 PIP2 aquaporins in the membrane.
- **Actin:** 2 actin filaments, a monomer every 2.75 nm, alternating strands, turning 166° each.
- **Cytosol proteins:** 1,800 small proteins at true size.

---

## 9. Metabolism

The engine is the animal cell's: symbols, splashes, halos, processors that ask, dock, react and make, plus `WANT`, `SUPPLY`, `FALLBACK` and `SINKS`. The following parts change.

### 9.1 What changes

- **Symbols:** 19 molecules, in a 5 × 4 atlas (640 × 512). The shader indexes it with `mod(vG, 5)` and `floor(vG / 5)`, and the `ATLAS` loop draws 19 (`k < 19`), so one cell is free. The molecules are light, water, O₂, CO₂, triose phosphate, sucrose, pyruvate, ATP, ADP, glycolate, glycine, serine, glycerate, H₂O₂, mRNA, ribosome halves, amino acids, proteins and vesicles.
- **Routes:**
  - `cytoPts` puts a waypoint about every 1.1 µm. `keepIn` pushes each one into the cytoplasm layer and out of the nucleus, so molecules travel round the vacuole, never across it.
  - Photons come straight in from the key light's direction (`LDIR`), at 6 µm/s.
  - Molecules sent to the vacuole end just inside the tonoplast (`intoVac`).
  - O₂ and CO₂ leaving the cell end just outside the wall (`outside`).
- **Side reactions:** a processor can take a second input on the side. When enough of it has docked, `dock()` runs `K.side.go` at once. This is how photorespiration passes between organelles without blocking their main recipes.
- **Symbol and halo size:** `flowBoost` lets symbols shrink to 0.08× in close-ups. Halos fade out below 2 µm from the target (`haloFade`).

### 9.2 Recipes

| Kind | Waits for | Sends out |
|---|---|---|
| chloroplast | 2 light, water, CO₂; side: glycerate | O₂; triose phosphate (becomes sucrose in the cytosol), or 20% of the time glycolate to a peroxisome; sometimes amino acids |
| mitochondrion | 2 pyruvate, O₂, 2 ADP; side: 2 glycine | 2 ATP, CO₂; side: serine to a peroxisome, CO₂ |
| peroxisome | glycolate (sent), O₂; side: serine | glycine to a mitochondrion (H₂O₂ split inside); side: glycerate to a chloroplast |
| ER spot | mRNA, ribosome halves, 2 amino acids, ATP | a vesicle to a Golgi stack |
| Golgi stack | a vesicle (sent) | wall material to the membrane (fuses, splash in the wall), or 30% to the vacuole |
| polysome | 2 amino acids, ATP | a protein, half the time into a chloroplast |
| tonoplast spot | sucrose, ATP | 2 waters in through aquaporins, into the vacuole |
| cellulose synthase | sucrose | a splash of cellulose in the wall |

### 9.3 Supply rules

- **Water:** in through the nearest membrane.
- **Queued molecules:** `WANT` has a fixed set of keys, `{ atp, amino, o2, co2, sucrose }`. Each key also has a `SINKS` entry (where it goes when nobody asked) and a `FALLBACK` (what happens when a request waits too long). `WAITS` sets that delay per type, default 6 s. A new molecule handed out with `give()` needs all three.
- **CO₂ and O₂:** queued in `WANT`. Mitochondria and chloroplasts give them, and the fallback brings them from the air spaces after 1.2 s and 3 s.
- **Pyruvate:** a sucrose request flagged `as: 'pyruvate'`. It splits on the way, by glycolysis, into 2 pyruvate and 2 ATP.
- **Sucrose:** made by chloroplasts. It goes to whoever asked; otherwise 60% leaves through a plasmodesma and 40% is stored in the vacuole. The fallback comes from the vacuole's store.
- **Amino acids:** from chloroplasts.

### 9.4 Always-on traffic

- Proteins are imported into the nucleus.
- Water crosses into the vacuole.
- 16 cortical microtubules grow and shrink (dynamic instability), as in the animal code.

---

## 10. Views and the Cell Explorer

### 10.1 Views

| View | Camera |
|---|---|
| `cell` | (30, 18, 39) looking at (−2, −1.5, 0) |
| `nucleus` | relative to `N0` |
| `nucleolus` | relative to `NO` |
| `DNA` | aimed after the build at the chosen gene |
| `chloroplast` | showcase centre + (6.4, −0.9, 0.6) |
| `thylakoid` | G + (1.05, 0.02, 0.14) |
| `wall` | close-up + (0.6, 0, −0.3) |

`setViews()` sets the close-up views once their parts exist. `pointsOf(view)` returns the tag points: `easiest` for the overview, and `frontmost` (projected with the preset camera) for close-ups. `WSITE` holds the close-ups' landmarks.

### 10.2 In the explorer

- **Root:** `cell_explorer.html` has a third root, *Realistic plant cell* (`real-plant`, page `plant_cell_realistic.html`).
- **Realistic levels:** `real-plant`, `real-plant-nucleus`, `real-plant-nucleolus`, `real-plant-dna`, `real-chloroplast`, `real-thylakoid` (legend `LEG_THYL`) and `real-wall` (legend `LEG_WALL`).
- **Structure nodes:** `psii-real`, `lhcii-real`, `b6f-real`, `psi-real`, `catp-real`, `rubisco-real`, `cesa-real`, `aha-real` and `pip-real`. They are built with `plantModel(key, colour, upright, copies)` from `BPDB`, chlorophylls in green, lumen up. The CESA rosette is six copies of the trimer on a 12.5 nm ring.
- **Recipes:** `RECIPE['plant_cell_realistic.html']` maps tree parts to the page's recipe keys.
- **Reused levels:** the tags also lead to the explorer's existing plant levels (cell wall, plasmodesma, central vacuole, granum, starch, …).

---

## 11. How it was checked

- **Renders:** every view was rendered with `__cell.shot` at 1440 × 900 and looked at, side by side, after each change.
- **Recipes:** 30 simulated seconds (`step(.05, 600)`) were run, and completed recipes counted per kind. All eight kinds complete, and the photorespiration loop runs its side reactions in chloroplasts, mitochondria and peroxisomes.
- **Speed:** render time was measured with a pixel read-back after each render. The overview went from 77 ms to 51 ms; the animal cell takes 48 ms under the same conditions.
- **Explorer tags:** every realistic level was opened in the explorer's narrower stage. All tags show: cell 16, nucleus 10, nucleolus 5, gene 6, chloroplast 6, granum 12, wall 11.
- **Structure models:** all nine new ones build with all their tags.
- **Console:** no errors.

The explorer only updates tags while its page is drawing frames. In a hidden browser pane that stops, so take a screenshot first to bring the pane up.

---

## 12. Pitfalls met, and their fixes

| Symptom | Cause | Fix |
|---|---|---|
| Intact chloroplasts looked grey glass | gel transmission over a dark vacuole | chloroplast shells are "dense": opaque green in the gel look, insides only in see-through |
| A white glare across the granum close-up | a chloroplast's halo (3 units wide) sat in front of the camera; pale lumen surfaces caught the light | halos fade in close-ups (`haloFade`); darker, rougher lumen surfaces |
| The RuBisCO patch was a hard rectangle in the chloroplast view | a rectangular sampling region | an oval region whose edge thins out |
| Pectin chains stuck out of the wall | random walks left the wall | `inWall`: a step that would leave turns back |
| Overview at 13 fps | about 1 million true-size beads, and the insides of uncut chloroplasts, all drawn from afar | close-ups drawn only near the camera (`winLOD`); hidden insides only in see-through; merged Golgi meshes; lighter envelopes |
| The chloroplast view lost its granum detail after the speed fix | the camera is 6.5 µm away and the cut-off was 4 µm | the granum's cut-off raised to 8 µm |
| Only one gene being read, and its mRNA ran into the removed wedge | 40% chance per chromosome with only 10 chromosomes; mRNA tilted toward the cut | 80% chance; mRNA grown along the face; DNA view aimed at the gene whose mRNA stays in view |
| Chromosome arms stopped after a few nucleosomes | the arm walk started inside its packed chromocenter, with nowhere free to step | start from a free point just outside it |
| Tags missing in the explorer (starch, lamella, ribosome, mRNA, wall parts) | the explorer's stage is narrower than the page, so points near the edge fell outside | tag points moved nearer the middle; a starch grain, a ribosome and the first CESA and PIP placed near the centre |
| A comment swallowed the rest of a line | an edit put `//` mid-line | comments only at line ends (as in the animal manual) |
| Port 8765 busy | another session's server | a second launch entry, `plant-renderer`, on port 8766 (both entries in `.claude/launch.json` run `tools/serve.py`) |

---

## 13. How to extend it

- **Another organelle that bulges the vacuole:** place it before the tonoplast is built, and call `blob(centre, axes, radii + margin)`.
- **Another real molecule in a close-up:**
  1. Coarse-grain it (OPM for membrane proteins) and add it to the `PDB` constant with `full` and `red`.
  2. Give it a colour function in `buildThylakoid`'s `C` (or use `placeMol` directly).
  3. Place it with `tFits`/`tMark` so it keeps clear of the others.
  4. Add a key to `WSITE` for a tag.
- **Another recipe:** add a `KINDS` entry (a `side` if it takes a second input on the side), processors in `buildFlows`, and `INFO` and `PARTS` entries.

---

## 14. Rough numbers

| Item | Count |
|---|---|
| Chloroplasts | 57 (12 opened by the cut) |
| Mitochondria / peroxisomes / Golgi stacks | 51 / 22 / 14 |
| Cortical ER nodes / microtubule arcs / actin cables / strands | ~790 / 67 / 26 / 5 |
| Plasmodesmata | 166 |
| Nucleosomes | ~770, in 10 chromosomes with 10 chromocenters |
| Granum close-up | 265 PSII–LHCII, ~700 LHCII trimers, 226 b6f, 151 PSI, 104 ATP synthase, ~2,200 RuBisCO, 40 plastocyanin, 12 ribosomes |
| Wall close-up | 6 cellulose synthase rosettes, 13 proton pumps, 13 aquaporins, 5 microtubules, 2 actin filaments |
| Balls / rods in all | ~1.25 million / ~380,000 (830,000 of them in the close-ups, drawn only nearby) |
| Working organelles | 147 |
| Page size | ~535 KB |

## 15. What is simplified or left out

**Cell and organelles**

- The cell has no neighbours. Plasmodesmata end at the outside of the wall, and the intercellular air spaces are empty.
- There are no oil bodies and no crystals in the vacuole.
- Golgi stacks do not move, although real ones travel on actin. Only small movers stream.

**Nucleus and chromatin**

- Nucleus molecules are 20× life size, with far fewer nucleosomes than real.
- RNA polymerase II is the yeast structure.

**Chloroplasts**

- The insides of chloroplasts other than the showcase are mesh stand-ins.
- Stroma lamellae are straight, not the helices that really wrap the grana.
- Chloroplast ribosomes use the E. coli structure.
- The structures for ferredoxin, FNR, plastoquinone and the lipids are left out.

**Cellulose synthesis**

- How CESA trimers pack in a real rosette is still a model.
- The CSI1 linker between synthases and microtubules is left out.

**Metabolism**

- Light comes from one direction; there is no day–night cycle.
- Starch is drawn but not made or broken down in the flows.
- Nitrogen assimilation is a single "amino acids" output.
