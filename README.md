# 3D Biology

Interactive 3D models of cells, from the whole cell down to molecules and atoms. Each page is a single HTML file built with three.js; open it in a browser (internet is needed to load three.js and fonts from the CDN).

| File | What it is |
|---|---|
| `cell_explorer.html` | The main explorer: animal, plant and prokaryotic cells as a recursive tree of parts, each with its own 3D model, tagged leader lines, an x-ray and a realistic look, and PNG export. Its *Realistic cell* and *Realistic bacterium* roots show the two realistic pages inside it, with tags, descriptions and drill-down for every part |
| `animal_cell_realistic.html` | A realistic cutaway animal cell: a nucleus built molecule by molecule (DNA on histones, mRNA, rRNA in the nucleolus) and animated metabolism, where organelles gather their inputs, light up and send out what they make, with a speed control |
| `prokaryote_cell_realistic.html` | A realistic cutaway *E. coli* with everything at true scale: the gram-negative envelope molecule by molecule, the whole 4.6 Mb chromosome folded into plectonemes (drawn base pair by base pair wherever you zoom in), coupled transcription and translation, flagella that spin, real proteins from the Protein Data Bank, and proton-driven metabolism |
| `molecules_preview.html` | A preview of simpler DNA and RNA styles and of 14 real proteins from the Protein Data Bank, grouped by where they work in the cell and drawn to the same scale |
| `prokaryotic_cell_3d.html` | A standalone bacterium in the style of a printed textbook figure, with labels and a microcompartment inset |
| `eukaryotic_cell_3d.html` | A translucent eukaryotic cell with nine colour palettes |
| `dna_styles.html` | Ten artistic renderings of the same DNA/RNA transcription scene, for comparing styles |

How the realistic cells are built (techniques, algorithms, verification and pitfalls) is written up in [docs/animal_cell_realistic_manual.md](docs/animal_cell_realistic_manual.md) and [docs/prokaryote_cell_realistic_manual.md](docs/prokaryote_cell_realistic_manual.md).

Models are schematic: shapes and arrangements follow real biology, but sizes are not to scale between levels.
