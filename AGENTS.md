# Instructions for agents working on 3D Biology

This project is a set of single-file three.js pages that show cells, from the whole cell down to molecules and atoms. Before changing anything, read what this file tells you to read for your task. Each manual is written for an agent: it names the functions, constants and algorithms, and lists the mistakes already made.

## The files

| File | What it is | Its manual |
|---|---|---|
| `cell_explorer.html` | the main page: a recursive tree of 191 levels (cell / virus → organelle → complex → molecule → atom), each with a 3D model and clickable tags; nine roots embed the realistic cells, realistic viruses and comparative virus gallery | [docs/cell_explorer_manual.md](docs/cell_explorer_manual.md) |
| `animal_cell_realistic.html` | realistic cutaway animal cell; nucleus molecule by molecule (×20 life size); animated metabolism | [docs/animal_cell_realistic_manual.md](docs/animal_cell_realistic_manual.md) |
| `plant_cell_realistic.html` | realistic leaf cell: wall, vacuole, chloroplasts; a granum and a stretch of wall at true molecular size | [docs/plant_cell_realistic_manual.md](docs/plant_cell_realistic_manual.md) |
| `prokaryote_cell_realistic.html` | realistic *E. coli*, everything at true size | [docs/prokaryote_cell_realistic_manual.md](docs/prokaryote_cell_realistic_manual.md) |
| `bacteriophage_realistic.html` | realistic Bacteriophage T4 (complex head–tail dsDNA myovirus) infecting *E. coli*, everything at true size (1 unit = 10 nm) | [docs/bacteriophage_realistic_manual.md](docs/bacteriophage_realistic_manual.md) |
| `coronavirus_realistic.html` | realistic SARS-CoV-2 Coronavirus (enveloped `(+)ssRNA` virus) docking onto host ACE2 & replicating via RdRp (1 unit = 10 nm) | [docs/bacteriophage_realistic_manual.md](docs/bacteriophage_realistic_manual.md) |
| `hiv_realistic.html` | realistic HIV-1 Retrovirus (enveloped fullerene-cone diploid `(+)ssRNA` retrovirus) fusing with a CD4+ T-cell (1 unit = 10 nm) | [docs/bacteriophage_realistic_manual.md](docs/bacteriophage_realistic_manual.md) |
| `adenovirus_realistic.html` | realistic Human Adenovirus (non-enveloped pseudo-$T=25$ icosahedral dsDNA virus) docking onto CAR & integrins (1 unit = 10 nm) | [docs/bacteriophage_realistic_manual.md](docs/bacteriophage_realistic_manual.md) |
| `tmv_realistic.html` | realistic Tobacco Mosaic Virus (helical rod `(+)ssRNA` plant virus) self-assembling, uncoating & gating plasmodesmata (1 unit = 10 nm) | [docs/bacteriophage_realistic_manual.md](docs/bacteriophage_realistic_manual.md) |
| `molecules_preview.html`, `dna_styles.html`, `eukaryotic_cell_3d.html`, `prokaryotic_cell_3d.html` | earlier previews and style studies | — |
| `tools/` | download, coarse-grain and embed real protein structures; a local server for checks | [tools/README.md](tools/README.md) |
| `tours/` | guided tour scripts (chapters, steps, subtitle cues), played by the explorer | [docs/cell_explorer_manual.md](docs/cell_explorer_manual.md) §12 |

## What to read for your task

| Task | Read, in this order |
|---|---|
| **Any task** | this file → [docs/how_to_build_a_cell_or_organelle.md](docs/how_to_build_a_cell_or_organelle.md) §0, §5 → animal manual §1–4 (the core techniques every page uses) |
| A new **organelle or part** in the explorer | the guide §1–3.1 → explorer manual §3, §4, §9.1 |
| A new **organelle** in a realistic cell | the guide §1, §2.2, §3.2 → animal manual §1–5 → that cell's manual ("Building the cell" and "How to extend it") |
| A new **realistic cell** (a new page) | the guide, whole → animal manual, whole → the manual of the closest existing cell → explorer manual §7, §9.3 |
| A **molecular close-up** at true size | the guide §2.2 step 4 → bacterium manual §4, §7 → plant manual §7–8 → tools/README.md |
| A **real protein** structure | tools/README.md → bacterium manual §7 → plant manual §7.3 → explorer manual §8 |
| **Metabolism** (molecules moving, organelles glowing) | animal manual §8, §14 → that cell's "Metabolism" section |
| **Tags**, views, or a realistic level in the explorer | explorer manual §6, §7, §9.2 → that cell's "Views" section |
| **Looks and materials** (translucent, glass, gel, x-ray) | animal manual §4.4, §9 (realistic pages) → explorer manual §4.2, §5 (explorer) |
| The **guided tour** (tutorial mode, subtitles, narrator hook) | explorer manual §12 → animal manual §10.2 → the header comment of `tours/eukaryotic_cell.js` → [docs/tutorial_mode_spec.md](docs/tutorial_mode_spec.md) (the design, and §15 for what differs) |
| **Fixing** something that looks wrong | the "Pitfalls" table of every manual involved: it is probably there already |

## Rules

1. **Isolate, then compose.** Build every organelle or part on its own first, as its own explorer level or in a sandbox copy of the realistic page with only that part. Check it there. Only then place it in the cell or the larger part. Reuse the same model when composing (explorer: `partModel(id)`, `nest`, `tagFrom`); never draw a second, simpler version. The guide explains how.
2. **Write the spec sheet first** (guide §1). Get the biology right: shape, size, number, position, which side of a membrane each part is on, what it takes in and gives out. Say so wherever sizes are magnified.
3. **Keep the layout stable.**
   - **Random draws:** each page uses a seeded random stream, so new code that draws random numbers goes at the end or on its own stream (`const outer = seed; seed = N; …; seed = outer;`).
   - **Explorer seeds:** each explorer level is seeded by its own id.
4. **Edit the HTML directly.** There is no build step.
   - **The one exception:** tour scripts live in `tours/*.js`, plain scripts loaded with `<script src>`, so writers can change the words without touching code. Cue ids there are permanent (recorded narration is filed under them).
   - **Data lines:** the protein data sits on single lines that `tools/embed_structures.py` rewrites. Keep them on one line, and regenerate them with the tools rather than by hand.
5. **Code style:**
   - Match the surrounding code: dense, with comments that explain the biology or the reason.
   - Comments go at the end of lines only, never in the middle.
   - Names and units follow each manual: 1 unit = 1 µm in the plant and animal cells, 100 nm in the bacterium.
6. **Check with your own eyes before you call it done** (guide §4):
   - Serve the folder: `python3 tools/serve.py "$(pwd)" 8765`. In the Claude desktop app, `.claude/launch.json` runs the same script as `cell-renderer` (port 8765) and `plant-renderer` (8766).
   - Render every changed view with `__cell.shot(...)` and look at the images.
   - Run the metabolism for 30 simulated seconds and count recipes.
   - Time the render.
   - Open every changed explorer level and confirm every tag shows.
   - Check the console has no errors.
7. **Document what you did:**
   - Update the manual of what you changed: numbers, pitfalls, what is simplified.
   - For a new page, add it to `README.md` and write its manual in the same shape as the others.
8. **Git:** commit to `main` with a message in the existing style (`Plant: …`, `Explorer: …`). Don't push unless asked.

## Quick facts

- **three.js:** 0.160, loaded from `cdn.jsdelivr.net` by an import map, so the pages need internet.
- **Debug hooks:** every realistic page exposes `window.__cell` with `shot`, `step`, `sites`, `procs` and `flows`. The plant page also has `VIEWS`, `pointsOf` and `org`; the bacterium `views` and `pointsOf`; the animal page `org`, `pointsOf` and the tour's `focusOf`, `flyTo`, `ghost` and `blink`. The explorer exposes `window.__explorer` (`showNow`, `build`, `NODES`, `cur`) and `window.__tour` (the guided tour: `goto`, `state`, `cues`, `setNarrator`).
- **The explorer embeds each realistic page** as `<page>?embed` in an iframe and talks to it with `postMessage` (`to: 'realistic-cell'`, `from: 'realistic-cell'`).
- **Hidden browser panes:** a hidden or background browser pane stops animation frames, so realistic pages don't send their tags until the pane is visible.
- **Ignored folders:** `renders/` (check images) and `structures/` (downloaded and coarse-grained data) are git-ignored.
