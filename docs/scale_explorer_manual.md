# Powers-of-10 True Scale Explorer (`scale_explorer.html`) — Technical Manual

## 1. Purpose & Scale Architecture
`scale_explorer.html` (`src/pages/scale_explorer.ts`) is a continuous logarithmic WebGL2 comparator spanning **six orders of magnitude** (`100 µm` / `10⁻⁴ m` down to `0.1 nm` / `10⁻¹⁰ m`), pairing **11 calibrated biological stops** along a glowing optical rail with an interactive `#scaleSlider`, dynamic `#scaleBarLabel` (`µm → nm → Å`), imaging-threshold badge (`Naked Eye` / `Light Microscope ~200 nm` / `Cryo-EM & X-Ray`), and a **1:1 True-Size Pair Comparator (`#pairBtn`)** displaying exact adjacent size ratios.

## 2. Cinema PBR Rendering Pipeline
Built on [`src/core/cinematic_stage.ts`](../src/core/cinematic_stage.ts):
- Three-point microscopy lighting (`RoomEnvironment` PMREM reflections, `2048×2048` soft shadows, warm cavity lamp, cool rim light, `UnrealBloomPass` + dark-field lens shader + floating depth-of-field bokeh).
- Refractive wet-gel membranes (`MeshPhysicalMaterial`, `IOR 1.33–1.35`, `iridescence`, procedural organic wave normal map, backlit subsurface scattering via `applyBacklitSSS`).

## 3. Inspectable Parts (`11` Keys in `REG` & `PARTS`)
`plant_100um`, `animal_20um`, `yeast_5um`, `ecoli_2um`, `myco_300nm`, `virus_100nm`, `ribo_25nm`, `enzyme_10nm`, `dna_2nm`, `monomer_1nm`, `atom_01nm`.

## 4. Camera Presets (`VIEWS`) & Embed Bridge
- `VIEWS`: `overview`, `cells`, `microbes`, `viruses`, `molecules`, `atoms`.
- Supports the full `cell_explorer.html?embed` `postMessage` bridge (`view`, `track`, `fly`, `free`, `blink`, `ghost`, `hi`, `mol`, `pair`, `set`, `snap`) and exposes `window.__cell` (`REG`, `shells`, `placed`, `views`, `pointsOf`, `focusOf`, `setScaleIndex`, `setPairMode`, `step`, `shot`).
