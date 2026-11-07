# Realistic Fungal Cell Manual (`fungal_cell_realistic.html`)

## 1. Overview & Biological Rationale

`fungal_cell_realistic.html` models a dividing **budding yeast** cell (*Saccharomyces cerevisiae*, Kingdom Fungi) in 3D, completing the four major cellular lineages in the Explorer:
- **Animal cell** (Eukaryote, Kingdom Animalia — heterotrophic, no cell wall, cholesterol membrane, centriolar centrosome, open mitosis)
- **Plant cell** (Eukaryote, Kingdom Plantae — photoautotrophic, cellulose cell wall, chloroplasts, large central vacuole, plasmodesmata)
- **Fungal cell** (Eukaryote, Kingdom Fungi — heterotrophic absorptive osmotroph, 3-layered **chitin + $\beta$-glucan + mannoprotein** cell wall, **ergosterol** plasma membrane, **septin hourglass collar** at the budding neck, **chitinous bud scars**, **closed mitosis** via a nuclear-envelope-embedded **Spindle Pole Body (SPB)**, dispersed unstacked Golgi cisternae, acidic polyphosphate-storing vacuole, and cytosolic **alcoholic fermentation**)
- **Bacterium** (Prokaryote, Domain Bacteria — Gram-negative peptidoglycan + LPS envelope, supercoiled nucleoid, 70S ribosomes, proton-driven flagellar motor)

---

## 2. Geometry & Coordinate System

- **Mother cell**: Prolate spheroid centered at `(0, 0, 0)` with semi-axes `(5.0, 5.8, 5.0)` ($\sim 5.0 \times 4.2\text{ }\mu\text{m}$), cut open by a front-right wedge (`x > 0, z > 0`).
- **Mother–bud neck**: Constriction ring centered near `(0, 4.35, 0)` ringed by a double hourglass collar of **septin filaments** (`Cdc3–Cdc10–Cdc12`, PDB `2QAG`) and an inner contractile **actomyosin ring** (`Myo1`).
- **Emerging daughter bud**: Spheroid centered at `(0, 6.65, 0)` with polarised **actin cables** feeding secretory vesicles (`Sec4`) to the apical **polarisome** (`bud` view).
- **True-scale wall & cortex patch (`buildWallPatch`, `wall` view)**: Located at the cut edge (`WSITE`), drawn at `1 scene unit = 100 nm` so real PDB structures (`Exg1`, `Pma1`, `Septin`, `Erg11`, `Pdc1`, `Adh1`) sit at true relative molecular scale alongside individual chitin microfibrils, branched $\beta$-1,3/$\beta$-1,6-glucan chains, and outer mannoprotein brushes.

---

## 3. Embedded Real PDB Structures (`tools/coarse_fungal.py`)

| Key | Protein / Complex | PDB ID | Biological Role |
|---|---|---|---|
| `adh1` | Yeast Alcohol Dehydrogenase I homotetramer | `4W6Z` | Reduces acetaldehyde to ethanol + $\text{NAD}^+$ in alcoholic fermentation |
| `pdc1` | Yeast Pyruvate Decarboxylase homotetramer | `1PYD` | Decarboxylates pyruvate to acetaldehyde + $\text{CO}_2$ gas (using thiamine diphosphate) |
| `erg11` | Yeast Lanosterol $14\alpha$-Demethylase (`CYP51`) | `4LXJ` | Full-length ER membrane cytochrome P450 that synthesises ergosterol; clinical target of azole antifungals |
| `exg1` | Yeast Exo-$\beta$-1,3-Glucanase | `1EQC` | $(\beta/\alpha)_8$ TIM-barrel enzyme secreted into the cell wall to remodel $\beta$-1,3-glucan during bud growth |
| `pma1` | Plasma Membrane $\text{H}^+$-ATPase | `3B8C` | Master P-type proton pump generating the electrochemical $\text{H}^+$ gradient across the fungal membrane |
| `septin` | Septin Heterohexamer Rod (`Cdc3–Cdc10–Cdc12`) | `2QAG` | GTP-binding filament building block of the mother–bud neck hourglass collar |
| `pol2`, `nucleosome`, `pcna`, `ubiquitin` | Shared nuclear structures (`nucleus.js`) | `1I50`, `1KX5`, `1AXC`, `1UBQ` | Yeast RNA polymerase II (originally crystallized from *S. cerevisiae*), nucleosomes, PCNA, ubiquitin |

---

## 4. Preset Camera Views (`VIEWS`)

1. `cell`: Whole budding yeast cutaway (mother cell + neck + emerging daughter bud).
2. `nucleus`: Closed-mitosis nucleus showing the nuclear-envelope-embedded **Spindle Pole Body (`spb`)**, intranuclear spindle MTs, 16 chromosomes in the Rabl conformation, and nuclear pores.
3. `nucleolus`: Crescent-shaped yeast nucleolus opposite the SPB around chromosome XII rDNA repeats.
4. `DNA`: Active yeast gene transcription by *S. cerevisiae* RNA polymerase II (`1I50`).
5. `bud`: Close-up of the mother–bud neck, septin hourglass collar, actomyosin ring, polarised actin cables, secretory vesicles, and polarisome.
6. `wall`: True-scale molecular slice of the 3-layered chitin / $\beta$-glucan / mannoprotein wall, ergosterol plasma membrane with `Pma1` & `septin`, cortical ER with `Erg11`, and cytosolic `Pdc1` & `Adh1`.
