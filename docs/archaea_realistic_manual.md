# Domain Archaea & Endosymbiosis (`archaea_realistic.html`) — Technical Manual

## 1. Biological Scope & Scale
`archaea_realistic.html` (`src/pages/archaea_realistic.ts`) renders **Domain Archaea** at molecular scale (`1 unit = 100 nm`, `NM = 0.01`) with a live **Dual-Mode Toggle (`#modeBtn`)**:
1. **Asgard + Symbiont Mode (default):** A cutaway *Prometheoarchaeum*-like Asgard archaeon (`~550 nm` cell body) extending Lokiactin-braced cytoplasmic tentacles (`1–3 µm`) around a cutaway *Rickettsia*-like alphaproteobacterial partner across a syntrophic `H₂/formate ↔ ATP` endosymbiotic synapse.
2. **Extremophile Mode:** Reinforced *Sulfolobus acidocaldarius* thermoacidophile hexagonal S-layer armor (`80 °C`, `pH 2–3`) paired with a *Halobacterium salinarum* purple-membrane patch packed with light-driven bacteriorhodopsin proton pumps and rotary `A₁A₀` ATP synthases.

## 2. Real RCSB PDB Cryo-EM Structures (`src/molecules/pdb_archaea.ts`)
- **`5T5K`** — `histone_dna`: HMfB archaeal histone hypernucleosome wrapping circular dsDNA.
- **`1C3W`** — `bacteriorhodopsin`: 7-TMH retinal proton-pump trimers in purple membrane.
- **`4IHQ`** — `arli_atpase`: Cytoplasmic hexameric `ArlI` AAA+ ATPase rotary motor.
- **`5ZZB`** — `lokiactin`: Asgard Lokiactin + LokiProfilin-2 cytoskeletal complex.
- **`7OFQ`** — `arlb_filament`: Solid `12 nm` right-handed `ArlB` archaellum shaft.
- **`2PMZ`** — `arch_rnap`: 12-subunit eukaryotic-like archaeal RNA polymerase.

## 3. Inspectable Parts (`20` Keys in `REG` & `PARTS`)
`slayer`, `tetraether`, `tentacle`, `escrt`, `extremophile_shell`, `archaellum`, `arli`, `bacteriorhodopsin`, `a_atps`, `dna`, `histone`, `rnap`, `mrna`, `ribosome`, `lokiactin`, `symbiont`, `synapse`, `h2_flow`, `atp_export`, `ether_bond`.

## 4. Camera Presets (`VIEWS`) & Embed Bridge
- `VIEWS`: `overview`, `envelope`, `archaellum`, `genome`, `synapse`, `extremophile`.
- Implements full `cell_explorer.html?embed` `postMessage` synchronization (`view`, `mode`, `track`, `fly`, `free`, `blink`, `ghost`, `hi`, `mol`, `set`, `snap`) and `window.__cell` debug hooks.
