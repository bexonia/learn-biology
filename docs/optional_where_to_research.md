# Optional: where to research the biology

**This document is optional.** You don't need it to build anything. How to build a cell or an organelle is in [how_to_build_a_cell_or_organelle.md](how_to_build_a_cell_or_organelle.md) and the manuals. Read this only when you don't know the biology of what you are building, when a number looks wrong, or when you write text that students will read, such as tour subtitles or descriptions.

**Why it exists.** The cells in this project were built from textbook-level knowledge. The protein structures are real data, downloaded from the databases below, but the sizes, counts and arrangements were not checked against cited sources. Use this document to check them, and to research anything new.

---

## 1. How to research a new part

Work through these in order and stop as soon as the spec sheet (guide §1) is complete:

1. **The overview:** a textbook chapter (§2) for what the part is, what it does, its shape and where it sits.
2. **The numbers:** BioNumbers and *Cell Biology by the Numbers* for sizes, counts, rates and concentrations. Note the organism and cell type: numbers differ a lot between a yeast, a liver cell and a leaf cell.
3. **The proteins:** UniProt for each protein's function, location and partners; the Human Protein Atlas for where in a human cell it is found.
4. **The structures:**
   - **RCSB PDB** for experimental structures;
   - **OPM** for membrane proteins, which shows where a protein sits in the membrane;
   - **AlphaFold DB** when there is no experimental structure;
   - **EMDB** for large assemblies seen by cryo-electron microscopy.

   [tools/README.md](../tools/README.md) explains how to bring a structure into the pages.
5. **The look:** electron microscopy images (Cell Image Library, EMDB), and David Goodsell's illustrations (PDB-101) for how crowded and how arranged things really are.
6. **The pathways:** Reactome, KEGG, or EcoCyc (for *E. coli*) for what a part takes in and gives out. That is what the metabolism recipes need.
7. **Anything recent or disputed:** a review article found through PubMed, for example a search for the part's name plus "review", from the last five years.

**Write down where each fact came from.** Add a *Source* column to the spec sheet, and for a key number in the code, a short end-of-line comment (for example `// ~2,000–5,000 pores per nucleus (BioNumbers)`).

---

## 2. Sources

### Textbooks

| Book | Good for |
|---|---|
| Alberts et al., *Molecular Biology of the Cell* | the reference for animal cell biology: organelles, the nucleus, the cytoskeleton, membranes. An older edition (the 4th) is free to read on the NCBI Bookshelf. |
| Lodish et al., *Molecular Cell Biology* | the same ground, with more on experiments |
| Nelson & Cox, *Lehninger Principles of Biochemistry* | metabolism, enzymes, ATP synthase, photosynthesis, protein structure |
| Taiz et al., *Plant Physiology and Development* | the plant cell: the wall, the vacuole, chloroplasts, plasmodesmata |
| Madigan et al., *Brock Biology of Microorganisms* | bacteria: the envelope, the nucleoid, flagella; and viruses |
| Urry et al., *Campbell Biology* | introductory level, useful for writing student-facing text |
| Milo & Phillips, *Cell Biology by the Numbers* (free at book.bionumbers.org) | how big, how many, how fast: with the reasoning behind each number |
| Goodsell, *The Machinery of Life* | illustrated, to scale and crowded: the best reference for what a realistic cell should look like |

### Databases and websites

| Site | Address | Good for |
|---|---|---|
| BioNumbers | bionumbers.hms.harvard.edu | measured quantities, each with its original reference |
| UniProt | www.uniprot.org | what a protein does, where it is, its subunits |
| RCSB Protein Data Bank | www.rcsb.org | experimental 3D structures (the `tools/` scripts download from here) |
| PDB-101 | pdb101.rcsb.org | teaching material: *Molecule of the Month*, Goodsell's illustrations |
| OPM | opm.phar.umich.edu | membrane proteins placed in the membrane, with the side each part faces |
| AlphaFold Protein Structure Database | alphafold.ebi.ac.uk | predicted structures when no experimental one exists (check the confidence colouring) |
| EMDB | www.ebi.ac.uk/emdb | cryo-electron microscopy maps of large assemblies: pores, ribosomes, viruses |
| Cell Image Library | www.cellimagelibrary.org | real microscopy images of cells and organelles |
| Human Protein Atlas | www.proteinatlas.org | where each human protein is found inside the cell |
| Reactome | reactome.org | pathways in human cells |
| KEGG | www.genome.jp/kegg | metabolic pathways in any organism |
| EcoCyc | ecocyc.org | everything about *E. coli*: genes, proteins, pathways |
| ViralZone | viralzone.expasy.org | virus structure and life cycles, with clear diagrams |
| NCBI Bookshelf | www.ncbi.nlm.nih.gov/books | free textbooks |
| PubMed | pubmed.ncbi.nlm.nih.gov | papers and reviews |

---

## 3. The project's key numbers, and where to check them

These numbers are used in the pages, descriptions and tour subtitles. They came from textbook knowledge and **have not yet been checked** against the sources. Check them here before relying on them for teaching, and add the source once checked.

| Number in the project | Where it is used | Check in |
|---|---|---|
| Animal cell 10–30 µm across | animal page, explorer, tour | Alberts; BioNumbers |
| Nucleus 5–10 µm | explorer | Alberts; BioNumbers |
| Thousands of nuclear pores per nucleus (the model draws about 900) | tour, animal manual | BioNumbers; *Cell Biology by the Numbers* |
| About 2 m of DNA in a human cell; 46 chromosomes | tour, explorer | Alberts |
| Nucleosome: about 147 bp wrapped about 1.65 turns, about 11 nm across | animal page, manual | Alberts; PDB 1KX5 |
| Plasma membrane about 5 nm thick | tour | Alberts; BioNumbers |
| Microtubule 25 nm, actin filament 7 nm, intermediate filament 10 nm wide | explorer | Alberts |
| RNA polymerase II adds about 20–60 nucleotides a second | explorer (`pol-ii`) | BioNumbers |
| Mitochondrion 0.5–1 µm wide; has its own DNA | explorer, tour | Alberts; BioNumbers |
| Microvillus about 0.1 µm wide, 1–2 µm long | explorer, tour | Alberts |
| *E. coli* about 2 × 0.9 µm; genome 4.6 Mb | bacterium page | EcoCyc; BioNumbers |
| Leaf mesophyll cell size; chloroplasts per cell | plant page | Taiz; BioNumbers |
| Glucose → two pyruvates plus a little ATP (glycolysis) | tour, metabolism | Lehninger |

---

## 4. Good habits

- **One source is a start; two that agree is a fact.** Textbooks round numbers; BioNumbers gives ranges with the original measurement.
- **Note the organism.** A number from yeast or *E. coli* may not hold for a human cell.
- **Say when a size is magnified.** The pages draw molecules larger than life where they would otherwise be invisible. Students must be told, as the tour and the manuals do.
- **Prefer experimental structures to predictions**, and say in a part's description when a structure is a prediction (AlphaFold) or was oriented by hand.
- **For text students read,** keep each claim one that a textbook would state without hedging; leave disputed or recent findings out, or label them as such.
