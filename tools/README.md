# Tools: making the protein data, and checking pages

The pages draw real protein structures from the Protein Data Bank. They don't fetch them at run time: each structure was downloaded, **coarse-grained** (cut down to one or two beads per amino acid or nucleotide), encoded compactly, and written into the HTML as a single line of data. The scripts here do all of that, and reproduce every embedded structure **byte for byte**. That was checked by downloading every file fresh and rebuilding.

## Requirements

- **Python 3** with `numpy` (`python3 -m pip install numpy`). `coarse_molecules.py` and `embed_structures.py` need only the standard library.
- **`curl`**, for the downloads.
- Run everything **from the repository's root**.
- Downloads and intermediate files go to `structures/`, which is git-ignored.

## Rebuild all the embedded structures

```sh
sh tools/fetch_structures.sh                                     # 37 files from RCSB, 19 from OPM, into structures/pdb and structures/opm
mkdir -p structures/build
python3 tools/coarse_molecules.py      structures/pdb               structures/build/molecules.js
python3 tools/coarse_bacterium.py      structures/pdb               structures/build/bacterium.js
python3 tools/coarse_bacterium_more.py structures/pdb structures/opm structures/build/bacterium_more.js
python3 tools/coarse_plant.py          structures/pdb structures/opm structures/build/plant.js
python3 tools/embed_structures.py --check                        # which data lines would change (expect 0 if nothing was edited)
python3 tools/embed_structures.py                                # write them into the pages
```

`coarse_bacterium_more.py` may print numpy "divide by zero … in matmul" warnings on macOS. They are harmless; the output is unaffected.

## What each script makes, and where it goes

| Script | Reads | Writes | Embedded in (by `embed_structures.py`) |
|---|---|---|---|
| `fetch_structures.sh [dir]` | RCSB and OPM (internet) | `dir/pdb/*.pdb`, `4YBB.cif`, `1RCX.pdb1`; `dir/opm/*.pdb` | — |
| `coarse_molecules.py` | 14 structures (nucleosome 1KX5, Pol II 1I50, PCNA 1AXC, ubiquitin 1UBQ, …) | `const PROTEINS = {…}`: **two beads per residue** (Cα and side-chain centre) and two per nucleotide (phosphate, base) | `molecules_preview.html` (all 14); `animal_cell_realistic.html`, `plant_cell_realistic.html` and `cell_explorer.html` (`const PDB`: Pol II, PCNA, ubiquitin) |
| `coarse_bacterium.py` | RNA polymerase 4YG2, ribosome 4YBB (mmCIF), OmpF, GroEL, EF-Tu, GAPDH, HU, chemoreceptor | `const PDB = {…}`: **one bead per residue** (`full`) plus a **reduced** model of k-means balls (`red`). Biological assemblies come from BIOMT records. | `prokaryote_cell_realistic.html`; the full ribosome, RNA polymerase, GroEL, HU and receptor go into `cell_explorer.html` (`const BPDB`); the reduced ribosome becomes the plant's chloroplast ribosome (`PDB.ribo70`) |
| `coarse_bacterium_more.py` | 24 more: membrane proteins from OPM (ATP synthase, complex I, the efflux pump …), the replisome, nucleoid proteins, tRNA | `Object.assign(PDB, {…})`, and `bacterium_more.explorer.json` (full models for the explorer) | `prokaryote_cell_realistic.html`; the JSON into `cell_explorer.html` (`const BPDB`) |
| `coarse_plant.py` | 10 plant structures: PSII–LHCII 3JCU, LHCII 1RWT, b6f 6RQF, PSI 4XK8, ATP synthase 6FKF, CESA 6WLB, AHA2 5KSD, PIP2 1Z98 (all OPM), RuBisCO 1RCX (assembly), plastocyanin 1AG6 | `Object.assign(PDB, {…})` with a bead per chlorophyll too; `plant.explorer.json` | `plant_cell_realistic.html`; the JSON into `cell_explorer.html` (`Object.assign(BPDB, …)`) |
| `embed_structures.py [--check] [build dir]` | `structures/build/*` | replaces the data lines listed below | — |
| `serve.py <repo> <port>` | — | a local web server that also saves PNGs posted to `/save?name=…` into `renders/` | — |

The data lines that `embed_structures.py` replaces must stay on **one line each**, starting with exactly these prefixes:

| Page | Lines |
|---|---|
| `molecules_preview.html` | `const PROTEINS = ` |
| `animal_cell_realistic.html` | `const PDB = ` |
| `plant_cell_realistic.html` | `const PDB = `, `Object.assign(PDB, `, `PDB.ribo70 = ` |
| `prokaryote_cell_realistic.html` | `const PDB = `, `Object.assign(PDB, ` |
| `cell_explorer.html` | `const PDB = `, `const BPDB = `, `Object.assign(BPDB, ` |

## The encoding (what a page decodes)

```
{ "pdb": "3JCU",
  "full": { "n": 7854, "xyz": base64(Int16 x,y,z per bead, in 0.1 Å, origin as below), "kind": base64(one byte per bead) },
  "red":  { "n": 300,  "xyz": …, "kind": …, "rad": base64(one byte per ball: radius in 0.25 Å) } }
```

**Kind bytes.** Each bead's kind byte is `group × 4 + part`. The `group` is a colour group, chosen per structure in its script (for example PSII: 0 D1/D2, 1 CP43/CP47, 2 small subunits, 3 oxygen-evolving complex, 4 LHCII, 5 CP29/CP26).

| `part` | `coarse_molecules.py` | the other scripts |
|---|---|---|
| 0 | backbone (Cα) | amino acid |
| 1 | side chain | — |
| 2 | nucleic backbone | nucleotide |
| 3 | base | chlorophyll (its Mg) |

**Origins.**

- **Membrane proteins:** the origin is on the membrane's mid-plane, and +z points away from the cytoplasm (or stroma), as OPM lays them. So +z is the outside of the cell, the periplasm, the thylakoid lumen, or the lumen of the vacuole, ER or Golgi. OPM's convention was checked per structure against which side each subunit is known to be on. Check it again for every new one.
- **Ring proteins:** turned so the ring's axis is z.
- **Proteins that sit on DNA:** the DNA's axis is z.
- **Everything else:** centred.

**Reduced models.**

- **Method:** k-means (40 iterations, seed 7) on the residue beads.
- **Ball size:** each ball's radius matches the volume of its members (140 Å³ per amino acid, 330 Å³ per nucleotide), swollen by 1.25 so neighbours touch.
- **Ball colour:** the most common kind among its members.

## Adding a structure

1. **Find it.** Prefer an entry with the whole biological unit in one model. For a membrane protein, use its OPM file, which already has the membrane normal along z. Read its `COMPND` records to choose chains: some entries hold extra copies or bound peptides (1AXC chains B, D, F are p21 fragments, not PCNA).
2. **Add a line to the right script.** A chain-to-group table sets the colours; `k` sets the number of reduced balls.
   - **Soluble proteins:** `sol(...)` in `coarse_bacterium_more.py`, or `add(..., membrane=False)` in `coarse_plant.py`.
   - **Membrane proteins:** `mem(...)` or `add(..., membrane=True)`.
   - **For the explorer:** add its key to the script's explorer list as well. That is `X = {k: D[k]['full'] for k in (...)}` near the end of `coarse_plant.py` and `coarse_bacterium_more.py`. Without it the structure never reaches `BPDB`, and `plantModel`/`bactModel` fail on `BPDB[key]`.
   - **Explorer only:** every `add()` also goes into the page's `Object.assign(PDB, …)` line. To keep a large structure out of the page, delete it from `D` after the `X` line, before `D` is written (`coarse_bacterium_more.py` already drops some full models this way).
   - **No OPM entry, or a wrong membrane:** the plant script assumes OPM's mid-plane at z = 0. The bacterium script's `mem(..., mid=z0)` sets the mid-plane by hand. Without an OPM file, orient the protein yourself: put its hydrophobic transmembrane belt on z = 0 and the right side up, and say in its description that you did.
   - **No experimental structure at all:** use an AlphaFold model, from `https://alphafold.ebi.ac.uk/files/AF-<UniProt>-F1-model_v4.pdb` (check the version on its page). Say so in the node's description, and leave out long low-confidence loops (pLDDT under 50).
3. **Add the file to `fetch_structures.sh`.** Then run the commands above.
4. **Embed.** If the structure needs a new data line, add it to `LINES` in `embed_structures.py` and to the page.
5. **Draw it** in the page (`placeMol`) or the explorer (`bactModel`/`plantModel`). The explorer side is in [../docs/cell_explorer_manual.md](../docs/cell_explorer_manual.md) §8.

## Checking pages: the local server and scripted renders

```sh
python3 tools/serve.py "$(pwd)" 8765    # then open http://localhost:8765/<page>.html
```

Each realistic page exposes `window.__cell`:

| Call | What it does |
|---|---|
| `shot(cameraPos, target, name)` | renders one frame and saves `renders/<name>.png` through this server (all three pages) |
| `step(dt, n)` | runs the metabolism without animation frames (all three) |
| `sites`, `procs`, `flows` | read-only access to the built cell (all three); `org` in the animal and plant pages |
| `VIEWS` and `pointsOf(view)` (plant); `views` and `pointsOf` (bacterium) | the preset views and their tag points. The animal page has neither: add them to its `__cell` if you need them. |

The explorer exposes `window.__explorer`, with `showNow(path)`, `build(id)`, `NODES`, `cur`, and more (see the explorer manual §10).

## What is not kept

The realistic pages were first assembled from the animal page by one-off scripts that copied its shared sections and inserted new pieces. Those scripts are not kept, because each page has been edited directly since and they no longer apply. To make a new cell, follow [../docs/how_to_build_a_cell_or_organelle.md](../docs/how_to_build_a_cell_or_organelle.md).
