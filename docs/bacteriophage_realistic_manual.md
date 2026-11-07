# Realistic Bacteriophage T4 (`bacteriophage_realistic.html`)

A cutaway 3D model of **Escherichia virus T4** docked onto the Gram-negative cell envelope of *Escherichia coli*, with every part drawn to one true scale (`1 scene unit = 10 nm`, `NM = 0.1`). Works standalone (`bacteriophage_realistic.html`) and embedded inside `cell_explorer.html` (`bacteriophage_realistic.html?embed`).

## 1. Scale and coordinate system

- **Scale:** `1 unit = 10 nm` (`NM = 0.1`, `ANG = 0.01`).
- **Orientation:** Virion axis along `y`.
  - Prolate icosahedral capsid spans `y = +1.5` to `y = +13.0` (`115 nm` tall × `85 nm` wide, `R_CAP = 4.25`, `H_CAP = 11.5`).
  - Portal dodecamer (`gp20`) sits at the bottom vertex (`y = +1.48`).
  - Neck and collar with 6 `gpWac` whiskers sit at `y = +0.85..+1.35`.
  - Contractile tail (`gp18` sheath around `gp19` inner tube, 24 hexameric rings) runs from `y = +0.6` down to `y = -8.65` (`92.5 nm` long, `24 nm` wide).
  - Hexagonal baseplate (`52 nm` wide, `27 nm` tall) spans `y = -7.8` to `y = -9.5`, with `gp12` short tail fibers extending to `y = -10.2` and the central `gp27–gp5` needle + lysozyme piercing down to `y = -11.35`.
  - Host *E. coli* envelope spans `y = -10.2` (outer membrane & LPS), `y = -11.35` (peptidoglycan cell wall with lysozyme breach), and `y = -12.2` (inner cytoplasmic membrane), with host cytoplasm below `y = -12.5`.
- **Cutaway & 360° Protein Lattice (`setCut`):**
  - Front-right quadrant wedge (`x > 0 && z > 0`) is clipped by `CUT` planes when `cutOn = true` so the spooled DNA genome, internal core, portal channel, inner tail tube, puncturing needle, and breached bacterial envelope are exposed in cross-section.
  - Every exterior protein lattice (`gp23*` hexamers, `Soc` clamps, `Hoc` spikes, `gp24*` pentamers, `collar`, `gp18` tail sheath, `baseplate`, `om` lipids/LPS, `porin`, `pg` murein, `im` lipids) is generated across all 360° (all 20 facets, 30 edges, 12 vertices, and full annular rings) with `clippingPlanes: CUT`.
  - The translucent `shellMat` gel sits at `scale = 0.915` (inset inside the `scale = 1.005` `gp23*`/`Soc`/`Hoc` protein lattice) so that when `cutOn = false` ("Close cutaway"), Three.js's transmission pass never draws the gel shell in front of the exterior capsid proteins, and closing the cutaway seals both the gel shell and 100% of the proteins seamlessly.

## 2. Real Protein Data Bank structures (`tools/coarse_phage.py`)

| Key in `PDB` / `BPDB` | PDB ID | Biological complex | Subunits & encoding |
|---|---|---|---|
| `gp23` | `5VF3` | Major capsid hexamer (`gp23*` + `Soc` + `Hoc`) | 6 `gp23*` (`group 0`), `Soc` clamps (`group 1`), `Hoc` spike (`group 2`), `n = 3408`, `k = 120` |
| `gp24` | `5VF3` | Pentameric capsid vertex (`gp24*`) | 5 `gp24*` subunits (`groups 0..4`), `n = 2075`, `k = 90` |
| `gp20` | `3JA7` | Portal protein dodecamer (`gp20`) | 12 subunits around the 3.5 nm DNA channel, `n = 5136`, `k = 160` |
| `gp18` / `gp18r` | `3J2M` | Tail terminator (`gp15`) + contractile sheath (`gp18`) | Hexameric `gp15` ring + 24 stacked `gp18` rings (helical rise `4.06 nm`, twist `17.2°`), `n = 4920` |
| `gp19` | `5W5F` | Inner tail tube (`gp19`) | 3-ring hexameric stack (`4 nm` central lumen), tiled 8× along the tail, `n = 2934` |
| `gp5` | `1K28` | Baseplate hub (`gp27`) + needle & lysozyme (`gp5`) | Trimeric `gp27` cup (`group 0`) + `gp5` triple-β-helix needle & 3 T4 lysozymes (`group 1`), `n = 2718` |
| `gp37` | `2XGF` | Long tail fiber needle tip (`gp37`) | Homotrimer cross-braced by iron ions, docked onto host `OmpF`, `n = 648` |
| `gp12` | `1OCY` | Short tail fiber receptor-binding domain (`gp12`) | Homotrimer locked onto host LPS core, `n = 594` |
| `ompf` | `2OMF` | Host *E. coli* outer-membrane porin (`OmpF`) | Trimeric 16-stranded β-barrel receptor |
| `rnap` | `4YG2` | Host *E. coli* RNA polymerase holoenzyme | Hijacked in the host cytoplasm to transcribe early phage mRNA |
| `ribo` | `4YBB` | Host *E. coli* 70S ribosome | Translating phage mRNA into progeny capsid and tail proteins |

## 3. Preset views (`VIEWS` and `pointsOf`)

- `phage`: Whole T4 virion docked onto the *E. coli* envelope.
- `capsid`: Close-up of the prolate icosahedral head, `gp23*`/`Soc`/`Hoc` lattice, `gp24*` vertices, coaxially spooled 169 kbp B-DNA drawn base pair by base pair (`emitDNA`), internal `gp22`/`IPI*` core, and `gp20` portal.
- `tail`: Close-up of the `gp20` portal, `gp13/gp14/gp15` neck, `gpWac` whiskers, `gp18` contractile sheath, and `gp19` inner tube with translocating dsDNA.
- `baseplate`: Close-up of the hexagonal baseplate dome, `gp27–gp5` needle & lysozyme breaching the peptidoglycan wall, `gp12` short tail fibers clamping LPS, `gp37` long tail fiber tips on `OmpF`, and DNA entering the host cytoplasm to hijack `RNAP` and `70S` ribosomes.

## 4. Animated infection flows ("What moves")

- `signal`: Recognition signal travelling from `gp37` fiber tips on `OmpF` up the long tail fibers to trigger the baseplate.
- `lyso`: `gp5` lysozyme cleavage activity opening the peptidoglycan sacculus.
- `dna`: Viral 169 kbp dsDNA shooting down the `gp20` portal and `gp19` tail tube into the *E. coli* cytoplasm.
- `ipi`: Internal capsid protein `IPI*` co-injected with DNA to block host restriction nucleases.
- `mrna`: Early phage mRNA transcribed by hijacked host `RNAP` (`4YG2`) and delivered to `70S` ribosomes (`4YBB`).
- `prot`: Newly translated progeny phage structural proteins (`gp23`, `gp18`) accumulating in the cytoplasm.

## 5. Companion Realistic Virus Pages (`tools/coarse_viruses.py`)

Alongside Bacteriophage T4 (complex head–tail dsDNA myovirus), the remaining four major morphological and biological classes of viruses are modeled at the same `1 unit = 10 nm` molecular scale with full 360° protein coverage and inset cutaway gels:

1. **SARS-CoV-2 Coronavirus (`coronavirus_realistic.html` — Enveloped Crowned `(+)ssRNA` Virion):**
   - **PDB structures:** `6VXX` (Spike `S` trimer), `5X29` (Envelope `E` pentameric viroporin), `6VYO` (Nucleocapsid `N` RNA-binding tetramer), `6M71` (RdRp `nsp12–nsp7–nsp8` replicase), `1R42` (Host `ACE2` receptor).
   - **Preset views:** `virion`, `spike`, `envelope`, `rnp`.
   - **Animated flows:** `ace2` docking, `tmprss2` cleavage & fusion peptide insertion, `rna` genome release, `rdrp` replication.

2. **HIV-1 Retrovirus (`hiv_realistic.html` — Enveloped Conical-Capsid Retrovirus):**
   - **PDB structures:** `4TVP` (`Env` `gp120`/`gp41` trimer), `1HIW` (Matrix `MA` `p17` trimer), `3H4E` (Capsid `CA` `p24` hexamer), `3P05` (Capsid `CA` `p24` pentamer at the 12 fullerene cone vertices), `1RTD` (Reverse Transcriptase `RT` `p66`/`p51`), `1EX4` (Integrase `IN`).
   - **Preset views:** `virion`, `env`, `cone`, `core`.
   - **Animated flows:** `cd4` (`CD4`/`CCR5`) binding, `dntp` import through `CA` hexamer pores, `cdna` reverse transcription, `int` nuclear import & integration.

3. **Human Adenovirus (`adenovirus_realistic.html` — Non-Enveloped Pseudo-`T=25` Icosahedral dsDNA Virion):**
   - **PDB structures:** `1P30` (Hexon trimer, 240 copies tiling all 20 facets and 30 edges), `1X9T` (Penton base pentamer with RGD loops at all 12 vertices), `1QIU` (Trimeric fiber shaft & CAR-binding knob at all 12 vertices).
   - **Preset views:** `virion`, `vertex`, `facet`, `core`.
   - **Animated flows:** `car` knob attachment, `rgd` integrin endocytosis, `pvi` endosomal lysis, `dna` nuclear pore import.

4. **Tobacco Mosaic Virus (`tmv_realistic.html` — Helical Rod `(+)ssRNA` Virion):**
   - **PDB structures:** `2TMV` (Coat protein `CP` 4-α-helix bundle + 3 nucleotides of bound viral `ssRNA`, tiled at `16⅓` subunits per helical turn with `2.3 nm` pitch around the `4 nm` hollow central channel, plus `20S` proto-helix lock-washer assembly discs).
   - **Preset views:** `virion`, `helix`, `groove`, `disc`.
   - **Animated flows:** `oas` assembly-origin loop threading, `disc` `20S` lock-washer stacking, `cotr` co-translational uncoating by host `80S` ribosomes, `mp` `30K` movement protein plasmodesmata transport.

## 6. Guided Tours (`tours/*.js` & `cell_explorer.html`)

Every realistic virus page (`bacteriophage_realistic.html`, `coronavirus_realistic.html`, `hiv_realistic.html`, `adenovirus_realistic.html`, `tmv_realistic.html`), the comparative **Viruses** root (`viruses`), and every child sub-structure and PDB complex in their hierarchy supports the interactive **Guided Tour** (`#tourBtn`) inside `cell_explorer.html`:

- **`tours/bacteriophage.js` (`window.TOURS.bacteriophage`, `root: 'real-phage'`):** 7 chapters, 19 steps covering the capsid (`gp23*`, `Soc`, `Hoc`, `gp24*`, 169 kbp dsDNA spool, internal `IPI*` core, `gp20` portal), contractile tail (`gpWac` collar, `gp18` sheath, `gp19` tube), hexagonal baseplate (`gp27–gp5` needle & lysozyme, `gp12` short tail fibers, `gp37` long tail fibers), *E. coli* envelope (`OmpF`, LPS, peptidoglycan, cytoplasmic membrane), and infection flow (`RNAP`, `70S` ribosomes), plus 16 dedicated `details` scripts for every child node (`real-phage-capsid`, `real-phage-tail`, `real-phage-baseplate`, `bacteriophage`, `phage-capsid`, `phage-tail`, `phage-baseplate`, `phage-fiber`, `gp23-real`, `gp24-real`, `gp20-real`, `gp18-real`, `gp19-real`, `gp5-real`, `gp37-real`, `gp12-real`).
- **`tours/coronavirus.js` (`window.TOURS.coronavirus`, `root: 'real-coronavirus'`):** 6 chapters, 14 steps, and 9 `details` scripts covering `real-cov-spike`, `real-cov-rnp`, `real-cov-replication`, `coronavirus`, `cov-spike-real`, `cov-e-real`, `cov-n-real`, `cov-rdrp-real`, and `ace2-real`.
- **`tours/hiv.js` (`window.TOURS.hiv`, `root: 'real-hiv'`):** 6 chapters, 14 steps, and 10 `details` scripts covering `real-hiv-cone`, `real-hiv-rt`, `real-hiv-entry`, `hiv`, `hiv-env-real`, `hiv-ma-real`, `hiv-ca-hex-real`, `hiv-ca-pent-real`, `hiv-rt-real`, and `hiv-in-real`.
- **`tours/adenovirus.js` (`window.TOURS.adenovirus`, `root: 'real-adenovirus'`):** 6 chapters, 13 steps, and 7 `details` scripts covering `real-adv-vertex`, `real-adv-core`, `real-adv-entry`, `adenovirus`, `adv-hexon-real`, `adv-penton-real`, and `adv-fiber-real`.
- **`tours/tmv.js` (`window.TOURS.tmv`, `root: 'real-tmv'`):** 5 chapters, 12 steps, and 6 `details` scripts covering `real-tmv-helix`, `real-tmv-channel`, `real-tmv-assembly`, `tmv`, `tmv-turn-real`, and `tmv-sub-real`.
- **`tours/viruses.js` (`window.TOURS.viruses`, `root: 'viruses'`):** 4 chapters, 8 steps comparing all 5 Baltimore/ICTV viral classes side-by-side in the 3D scene (`localTourCmd`) with merged `details` scripts for all 48 viral child nodes.

