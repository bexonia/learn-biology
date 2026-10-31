# Spec: the guided tour (tutorial mode) for the eukaryotic cell

**Status:** specification only; nothing here is built yet. The tour works like a video game's tutorial: a guided path through the realistic animal cell, with subtitles at the bottom. You can stop at any moment to look around, open a part in more detail, and then go back to the tour.

**Scope of the first version:**

- **Covered:** the realistic animal (eukaryotic) cell: `animal_cell_realistic.html` inside `cell_explorer.html`.
- **Subtitles only.** The tour has no built-in voice. A narrator the user already has can be plugged in through a defined interface and switched on and off with a control (§7).
- **Left for later:** the eukaryote-vs-prokaryote comparison, the plant cell and quizzes (§13).

**Read first:**

- [cell_explorer_manual.md](cell_explorer_manual.md) §2, §6 and §7: the layout, tags, and how realistic pages are embedded.
- [animal_cell_realistic_manual.md](animal_cell_realistic_manual.md) §4.6, §5, §8, §10 and §11: highlight, organelles, metabolism, UI and camera.

---

## 1. The idea in one paragraph

The tour starts wide, on the whole cell, and then zooms in, one part at a time. For each part it:

1. **shows** the part: it blinks, and the rest of the cell fades;
2. **flies** the camera to it;
3. **explains** it in a few subtitle lines;
4. **links** it to the parts it works with: arrows, and molecules travelling between them;
5. **offers more detail:** the explorer's own deeper levels, down to molecules.

It then pulls back to the whole cell before the next part, so the learner never loses track of where they are. The tour is a script of chapters, steps and subtitle cues kept in one data file. The explorer plays it with a small engine. The animal page only needs a few new camera and highlight commands.

---

## 2. How to present it: the recommended patterns

These are the choices this spec makes, and why.

| Pattern | What the user sees | Why |
|---|---|---|
| **Zoom ladder:** wide → part → detail → back to wide | Each step starts from where the last one ended and the camera flies (never cuts) between them | Keeps the learner oriented; the most common failure of 3D tours is getting lost |
| **Show before telling** | The part blinks 3 times, then glows, before its first subtitle line appears | The eye finds the thing before the text names it |
| **Fade the rest** ("ghost") | Other organelles fade to about 15 % while a part is explained | A crowded cell otherwise hides the part being described |
| **Isolate** (on request) | "Show alone" hides everything except the part | Matches "build in isolation, then compose" (AGENTS.md rule 1); good for shape |
| **Link the parts** | Arrows between organelles (ER → Golgi → vesicle → membrane) and a followed molecule | Teaches how parts work together, not only what they are |
| **Coloured keywords** | Part names in subtitles use the part's legend colour; hovering one highlights the part, and clicking it explores the part | Ties words to things on screen |
| **Explore at any time** | One button pauses the tour and gives back the free camera and tags; "Back to tour" flies back | The "video game" feel: the tour is a guide, not a cage |
| **Chapters with progress** | A chapter menu with ticks for chapters seen; the tour resumes where it was left | Short sessions, easy to come back to |
| **Short subtitle cues** | One idea per cue, at most 2 lines | Readable while watching the 3D scene; one cue is also one narration clip |

---

## 3. Where it lives

- **The tour runs in `cell_explorer.html`,** over the **Realistic cell** root (`real-cell`). The explorer already has what the tour needs:
  - the tree, tags and descriptions;
  - the embedded animal page and its message channel;
  - the deeper levels for "more detail" (`mitochondrion`, `ribosome`, `pol-ii`, …).
- **Starting it:** a **Start tour** button appears in the toolbar when the Realistic cell root is open. The URL hash `#tour` (or `#tour=<step id>`) also starts it.
- **The script** is a plain script file, `tours/eukaryotic_cell.js`, that sets `window.TOURS.eukaryotic = {…}`.
  - **Why a separate file:** the text will be edited often, the cue list feeds the narrator, and writers should not need to touch the page.
  - **Why a script and not JSON:** a `<script src>` tag also loads from `file://`, whereas `fetch` of a JSON file does not.
  - **This is the one exception** to the single-file rule; record it in AGENTS.md.

---

## 4. Screen layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [≡ Chapters]  Chapter 3 · The nucleus           ●●●○○○○  step 2/6   [✕ Exit] │  ← tour bar (top of the stage)
│                                                                              │
│                                                                              │
│                          3D stage (the animal cell)                          │
│                  the explained part glows, the rest is faded                 │
│                  one tag on the part; arrows when linking                    │
│                                                                              │
│                                                                              │
│        ┌────────────────────────────────────────────────────────────┐        │
│        │  Its envelope is two membranes, one inside the other,      │        │  ← subtitle box
│        │  crossed by thousands of nuclear pores.                    │        │
│        └────────────────────────────────────────────────────────────┘        │
│ [⏮][◀][⏯][▶][⏭]  ━━━━●━━━━━━━  [CC] [🔊 Narration] [1×] [Explore] [More ▸]   │  ← control bar
└──────────────────────────────────────────────────────────────────────────────┘
```

**During the tour:**

- **Hidden:** the explorer's tree, its tags (except the step's own) and its hint.
- **Collapsed:** the info panel (right). It opens with **More ▸**, showing the current part's description, "Takes in / Gives out", and "Made of".
- **Toolbar:** replaced by the control bar.

**On narrow screens (under 720 px):**

- The subtitle box takes the full width.
- The control bar keeps ◀ ⏯ ▶, CC and Explore; the rest go into a "⋯" menu.

---

## 5. Controls

### 5.1 The control bar

| Control | Action |
|---|---|
| ⏮ / ⏭ | previous / next **step** (a part) |
| ◀ / ▶ | previous / next **cue** (a subtitle line) |
| ⏯ | play / pause; pausing freezes the subtitle timer, the flight and the narration, while the cell keeps living (metabolism runs unless paused separately) |
| progress bar | one segment per step of the chapter; click to jump |
| **CC** | subtitles on/off; long-press or right-click opens size (S/M/L) and background opacity |
| **🔊 Narration** | narration on/off, with a volume slider; hidden when no narrator is registered (§7) |
| **1×** | tour pace: 0.75×, 1× or 1.25× (subtitle timing and flight speed; not the metabolism) |
| **Explore** | pause the tour and give back the free camera, all tags and the tree (§6) |
| **More ▸** | open the info panel for the current part |
| **≡ Chapters** | chapter list with ticks and a "Transcript" of the current chapter (every cue as text) |
| **✕ Exit** | leave the tour; the explorer stays on the current part |

### 5.2 Keyboard

| Key | Action |
|---|---|
| Space | play / pause |
| → / ← | next / previous cue |
| Shift + → / ← | next / previous step |
| PageDown / PageUp | next / previous chapter |
| 1–9 | jump to chapter |
| C | subtitles on/off |
| N | narration on/off |
| E | Explore / Back to tour |
| M | chapter menu |
| Esc | in Explore: back to tour; in the tour: exit (asks once) |
| W A S D, drag, scroll | **only in Explore**; during the tour the camera is the tour's |

### 5.3 Mouse and touch

- **Dragging during the tour** is allowed: a small "look" offset around the tour camera, up to ±25°, that springs back when released. Exploring the cell freely needs **Explore**.
- **Subtitle box:**
  - **click or tap it** to pause or play;
  - **swipe left or right on it** (touch) to change cue.
- **Clicking a coloured keyword or the step's tag** opens that part in more detail (§6).

---

## 6. States, Explore, and "more detail"

| State | Camera | Subtitles | Leaves to |
|---|---|---|---|
| **Intro** | slow orbit of the whole cell | title card: "The animal cell: a guided tour", [Start] [Choose chapter] | Playing |
| **Playing** | flown by the tour | timed cues | Paused, Exploring, Detail, Finished |
| **Paused** | still; small look offset allowed | current cue stays | Playing, Exploring |
| **Exploring** | free (the explorer's normal controls); all tags | box shows "Exploring · Back to tour (E)" | Playing (flies back to the step's camera) |
| **Detail** | the explorer opens the part's own level (for example `mitochondrion`), with an optional mini-tour (§8.3) | the detail level's cues, or its description in one cue | Playing (back up to the step) |
| **Finished** | slow orbit | "Tour complete. Now explore on your own." [Explore] [Replay a chapter] | Exploring, Playing |

**Rules:**

- **Leaving a step mid-cue:** Explore or Detail keeps the place. Going back resumes at the **start of the cue** that was showing.
- **Saving progress:** in `localStorage` (`tourPos`, `tourSeen`), wrapped in try/catch, as `cellLook` already is. On the next visit the intro offers "Continue from Chapter 3 · The nucleus".
- **The tour sets the page's look.** It sets the organelle look, cutaway, metabolism and pause, and **restores** the user's settings when it ends or when entering Explore.

---

## 7. Subtitles and the narrator hook

### 7.1 Subtitle rules

| Rule | Value |
|---|---|
| Lines per cue | at most 2 |
| Characters per line | at most 42 (break at natural phrases, never inside a part name) |
| Reading speed | about 15 characters a second at 1× |
| Cue duration | max(1.5 s, characters ÷ 15) + 0.3 s, capped at 7 s; a `dur` in the script overrides |
| Gap between cues | 0.15 s, with a fade |
| Style | white text on a dark box at 70 % opacity, rounded; 18 px (S 15, L 24); centred, above the control bar |
| Keywords | `[[label|part]]` in the script draws the label in the part's legend colour (§8.2) |
| Accessibility | the box is `aria-live="polite"`; respects `prefers-reduced-motion` (§9.4); the transcript lists every cue |

### 7.2 Narration: a control and an interface, no voice

The tour plays no audio of its own. It exposes a **narrator interface**, so the user's existing narrator can speak each cue.

```js
window.__tour.setNarrator({
  speak(cue) { /* cue = { id, text, plain, chapter, step } → return a Promise that resolves when speech ends */ },
  stop() { /* stop at once (pause, skip, exit) */ },
  setVolume(v) { /* 0–1 */ },
});
```

**Behaviour:**

- **When narration is on and a narrator is set:**
  - each cue calls `speak(cue)`;
  - the cue stays up until the larger of its reading time and the end of speech;
  - pausing or skipping calls `stop()`.
- **When narration is off, or no narrator is set:** cues run on reading time alone. The 🔊 button is hidden when no narrator is set.
- **Stable cue ids** (`ch3.nucleus.02`) let a narrator use pre-recorded files (`audio/<id>.mp3`) instead of live speech.
  - `__tour.cues()` returns the whole list (`id`, `plain`) for recording.
  - The narrator then plays `audio/<id>.mp3` inside `speak`.
- **Events:** the engine dispatches `CustomEvent`s on `window`:
  - `tour:cue` (detail: the cue);
  - `tour:step`;
  - `tour:state` (playing, paused, exploring …);
  - `tour:end`.

  When the explorer is itself inside a frame, the same events go to `parent` by `postMessage` (`{ from: 'cell-tour', type, … }`). This lets a narrator in another window follow along.
- **Plain text for speech:** `plain` is the cue text with the `[[…]]` markup removed. A cue may also carry `say`, a version written for speaking ("micrometres" spelled out, no symbols).

---

## 8. The tour script

### 8.1 Shape

```js
window.TOURS = window.TOURS || {};
window.TOURS.eukaryotic = {
  root: 'real-cell',                       // the explorer root it runs on
  chapters: [
    { id: 'ch1', title: 'The outside',
      steps: [
        { id: 'membrane',
          camera: { focus: 'membrane', dist: 1.3, dur: 2 },     // or { view: 'cell' } or { pos: [x,y,z], target: [x,y,z] } in cell space
          look: 'gel', cut: true, flow: false,                  // absolute settings for this step (omitted = keep)
          blink: 'membrane', ghost: true,                       // or ghost: ['membrane', 'actin'] = these stay, the rest fade
          tags: ['membrane'],                                   // tag ids of the explorer node to show (from real-cell's tags)
          detail: 'plasma-membrane',                            // explorer node opened by More detail
          cues: [
            { id: 'ch1.membrane.01', text: 'The cell\'s outer boundary is the [[plasma membrane|membrane]].' },
            { id: 'ch1.membrane.02', text: 'It is a double layer of fat-like molecules, only about 5 nanometres thick.' },
          ] },
      ] },
  ],
};
```

**Step fields:**

| Field | Meaning |
|---|---|
| `camera` | one of three forms:<br>• `{ view }`, a preset of the page's `VIEWS` (`cell`, `nucleus`, `nucleolus`, `DNA`);<br>• `{ focus: part, inst?, dist?, dur? }`, framing a part (§9.1);<br>• `{ pos, target }`, explicit, in cell space |
| `look`, `cut`, `flow`, `motion` | absolute page settings |
| `blink` | part key(s) to blink, then glow while the step lasts |
| `ghost` | `true` fades all but the blinked parts; a list keeps those parts too |
| `isolate` | like `ghost`, but hides the others instead of fading them; a "Show alone" toggle the user can also press |
| `tags` | which of the root node's tags to show during the step |
| `links` | arrows: `[['rer', 'golgi', 'proteins'], ['golgi', 'vesicle'], ['vesicle', 'membrane', 'secreted']]` (§9.3) |
| `follow` | a molecule symbol key to follow (`mol` message), for "watch this molecule" |
| `detail` | explorer node opened by **More detail**, by clicking the tag, or by clicking a keyword |
| `cues` | the subtitle lines, in order |
| `orbit` | degrees to slowly turn round the target while the step lasts (default 0; 8–15 keeps a still shot alive) |

### 8.2 Keywords

`[[label|part]]` draws `label` in the legend colour of `part` (`PARTS` in the animal page). It also:

- highlights the part (`hi`) when hovered;
- opens the step's `detail` (or the part's tag child) when clicked.

`[[label]]` alone uses the step's `blink` part.

### 8.3 Detail mini-tours

A `detail` node may have its own short script: `TOURS.eukaryotic.details['mitochondrion'] = { cues: […], tags: […] }`. The explorer then shows that level's model, reads the cues, and offers **Back to tour**. Without a script, the detail level shows its `desc` as one long cue, split into sentences.

---

## 9. What the engine and the page must do

### 9.1 Camera flights (animal page: new)

The page now jumps between `VIEWS`. The tour needs flights.

- **New message:** `{ to: 'realistic-cell', cmd: 'fly', pos, target, dur }` (cell space).
  - **Path:** position and target move together along an ease-in-out curve (`smootherstep`).
  - **Arc:** the position arcs outward (it moves on a sphere around the cell's centre when both ends are outside the nucleus), so the camera never passes through the nucleus.
  - **When the flight ends,** the page replies `{ type: 'arrived', seq }`.
  - **Interruptions:** a new `fly` replaces a running one from the current position.
- **New message:** `{ cmd: 'focus', part, inst, dist, dur }`. The page computes the framing from `ORG`, with no new random draws:
  - **Bounding sphere:** the part's (or instance's) centre and radius `r`.
    - **Parts in `ORG`:** mitochondria, lysosomes, peroxisomes, endosomes, lipid droplets, ER, smooth ER, Golgi and centrosome.
    - **Parts not in `ORG`** (membrane, nucleus, cilium, microvilli, actin, intermediate filaments, cytosol): record a landmark at build time by pushing points the build already has, as `SITES` does. That draws no random numbers, so the layout is unchanged.
  - **Distance:** `d = dist × r / sin(fov/2)`.
  - **Direction:** looking in from the open wedge (the bisector of the cut, `x > 0, z > 0`) when the part is in the wedge, or else from outside, through the cell membrane in gel look.
  - **Instance choice:** for parts with many instances (mitochondria, lysosomes …), `inst` picks one. The default is the instance nearest the cut face and the middle of the view, the same rule as `ranked` in `pointsOf`.
  - **Recording the framings:** add the result to a `FOCUS` table that `__cell.focusOf(part)` returns, for tests.
- **Free look:** user drags during Playing add a look offset that springs back over 0.6 s.

### 9.2 Highlight vocabulary (animal page: extend `setHi`)

| Command | Effect |
|---|---|
| `{ cmd: 'blink', key, n = 3 }` | `n` pulses at 1.5 Hz on the part's emissive and `uHi`, then a steady glow at 60 % until cleared. `setHi`'s pulse is the base. |
| `{ cmd: 'ghost', keep: [...], amount = .15 }` | every other part's materials fade to `amount`:<br>• **shells:** `transparent`, `opacity`, `depthWrite false`;<br>• **impostors:** a new `uDim` uniform that scales alpha and darkens them;<br>`keep: null` restores everything |
| `{ cmd: 'isolate', keep: [...] }` | like ghost with `visible = false` on the others; `keep: null` restores |
| `{ cmd: 'set', look, cut, flow, motion }` | absolute setters. The existing `look`, `cut`, `flow` and `motion` messages **toggle**, which a script cannot rely on. |

**A per-part handle.** Ghost and isolate need to reach each part's objects, not only its materials, so `reg` should also file meshes and points per key. That is bookkeeping only: no random draws, and the layout does not change.

**Separate keys.** The legend key `cilium` covers both the primary cilium and the microvilli, so the tour cannot blink one without the other. Give the microvilli their own key, `villi`, in `PARTS` and `reg`. That is a key change only; the layout is unchanged. Then update `real-cell`'s tag `['villi', …, 'cilium']` to use part `villi`.

### 9.3 Links between parts (explorer: new)

- **Arrows:** curved SVG arrows in the explorer's `#lines` layer, between the screen points of two parts. Their positions come from `pts` messages: the tour asks for the parts' focus points as tag points.
- **Labels and order:** each arrow has a small label ("proteins", "ATP"), drawn in the source part's colour. The arrows appear one by one, in the order of the cues.
- **Moving molecules:** `follow` uses the existing `mol` message, so only that molecule's symbols stay bright while they travel.

### 9.4 Reduced motion

When `prefers-reduced-motion` is set, or the user chooses it in the CC menu:

- flights become a 0.3 s cross-fade (render the new view, fade it in);
- blinks become a steady glow;
- orbits are off.

### 9.5 The engine (explorer: new)

- **State machine:** the states of §6, a cue timer that runs on `performance.now()` and pauses, and a step runner that applies a step in order:
  1. settings;
  2. ghost and isolate cleared;
  3. camera flight;
  4. on `arrived`: blink, ghost, tags;
  5. first cue.
- **Fast skipping:** skipping a step during a flight replaces the flight. Rapid skips must not stack flights or timers, so each step gets a sequence number, as the views' tag points already do.
- **API:** `window.__tour = { play, pause, next, prev, nextStep, prevStep, goto(id), state, cues(), setNarrator, on(type, fn) }`.

---

## 10. The script for the first version

About 50 cues; at 1× roughly 6 minutes, plus the time anyone spends exploring. Before writing each cue:

- **Check the biology** against the explorer's node descriptions and the animal manual. They were checked before; the tour should say the same things in fewer words.
- **Check what the model shows.** Where the model simplifies (the number of pores or nucleosomes, sizes magnified), the cue says so, or at least does not claim the opposite.

| Chapter | Steps (camera · blink) | Cues (draft text) |
|---|---|---|
| **0 · Welcome** | `intro` · `{view:'cell'}`, orbit 15 · — | 1. This is an animal cell, like the ones that make up your body. 2. Real ones are about 10 to 30 micrometres across: about fifty would fit in a millimetre. 3. We have cut a wedge out of it, so you can see inside. 4. Shapes follow real biology, but small things are drawn larger so you can see them. 5. Press Space to pause, or Explore to look around on your own. |
| **1 · The outside** | `membrane` · focus membrane · membrane | 1. The cell's boundary is the [[plasma membrane\|membrane]]. 2. It is a double layer of fat-like molecules, only about 5 nanometres thick, with proteins set in it. 3. It decides what comes in and what goes out. |
| | `villi` · focus villi · villi | 1. These small fingers are [[microvilli\|villi]]. 2. They multiply the surface, which helps cells that absorb, like those lining the gut. 3. Each is held up by a bundle of [[actin\|actin]] filaments. |
| | `cilium` · focus cilium · cilium | 1. This single antenna is the [[primary cilium\|cilium]]. 2. Most of our cells have one. It does not beat: it senses signals from outside. 3. It grows from a centriole, which we will meet soon. |
| **2 · The cytoskeleton** | `cytosol` · `{view:'cell'}` closer, ghost off · cytosol | 1. Inside, the cell is not empty water. 2. The [[cytosol\|cytosol]] is crowded with proteins and ribosomes, like a thick gel. |
| | `actin` · focus actin · actin | 1. Just under the membrane lies the [[actin cortex\|actin]], a mesh of thin filaments. 2. It gives the surface its shape and lets it move. |
| | `mt` · focus centro, dist 3 · mt | 1. [[Microtubules\|mt]] are hollow tubes that spread out from near the nucleus. 2. They are rails: motor proteins carry vesicles along them. 3. They keep growing and shrinking. Watch their tips. |
| | `centro` · focus centro · centro | 1. They grow from the [[centrosome\|centro]]: two centrioles at right angles, in a cloud of proteins. 2. Before a cell divides, it copies its centrosome. The two organise the spindle that separates the chromosomes. |
| | `if` · focus if · if | 1. [[Intermediate filaments\|if]] are tough ropes. 2. They spread the strain when the cell is stretched or squeezed. |
| **3 · The nucleus** | `nucleus` · focus nucleus, dist 1.6 · nucleus | 1. The largest organelle is the [[nucleus\|nucleus]]. 2. It holds the cell's DNA: in a human cell, about two metres of it. 3. Its envelope is two membranes, one inside the other. |
| | `pores` · `{view:'nucleus'}` · nucleus | 1. Thousands of pores cross the envelope. This model shows about 900. 2. They let molecules in and out, and check what passes. |
| | `chromatin` · `{view:'nucleus'}` · chromatin | 1. The DNA is wound on histone proteins, like thread on spools. 2. Each spool is a nucleosome. 3. Each of the 46 chromosomes keeps to its own region, its territory. |
| | `nucleolus` · `{view:'nucleolus'}` · nucleolus | 1. The dense body is the [[nucleolus\|nucleolus]]. 2. Here the cell reads the genes for ribosomal RNA and starts building ribosomes. |
| | `gene` · `{view:'DNA'}` · mrna; detail `pol-ii` | 1. Up close, an enzyme, [[RNA polymerase II\|mrna]], is reading a gene. 2. It copies the DNA into messenger RNA: a working copy of one instruction. 3. The mRNA leaves through a pore, to be read in the cytoplasm. |
| **4 · Making proteins** | `ribosome` · `{view:'cell'}`, focus rer · ribosome | 1. [[Ribosomes\|ribosome]] read mRNA and join amino acids into proteins. 2. Some float free in the cytosol. |
| | `rer` · focus rer · rer | 1. Others sit on the [[rough ER\|rer]]: flattened sheets wrapped around the nucleus. 2. Its ribosomes make proteins for membranes and for export. |
| | `golgi` · focus golgi · golgi | 1. The [[Golgi apparatus\|golgi]] receives those proteins. 2. It finishes them, adding and trimming sugar chains, and sorts them by destination. |
| | `vesicle` · focus golgi, dist 2.5 · vesicle; links rer→golgi→vesicle→membrane | 1. [[Vesicles\|vesicle]], small membrane bubbles, carry them on. 2. Many ride along microtubules. 3. Some fuse with the membrane and release their cargo outside the cell. |
| | `ser` · focus ser · ser | 1. The [[smooth ER\|ser]] is a network of tubes without ribosomes. 2. It makes lipids and stores calcium. |
| **5 · Energy and recycling** | `mito` · focus mito · mito; detail `mitochondrion` | 1. [[Mitochondria\|mito]] are the cell's power plants. 2. They use oxygen to break down sugars and fats, and make ATP, the cell's energy currency. 3. Their inner membrane folds into cristae, to hold more ATP-making machines. 4. They even have their own small DNA, a trace of their past as free-living bacteria. |
| | `lyso` · focus lyso · lyso | 1. [[Lysosomes\|lyso]] are acidic sacs of digestive enzymes. 2. They break down worn-out parts and what the cell takes in. |
| | `endo` · focus vesicle (an endosome instance) · vesicle | 1. [[Endosomes\|vesicle]] sort what the cell takes in from outside. 2. Some is sent back to the membrane; the rest goes to lysosomes. |
| | `perox` · focus perox · perox | 1. [[Peroxisomes\|perox]] break down long fatty acids. 2. They also destroy hydrogen peroxide, a harmful by-product. |
| | `lipid` · focus lipid · lipid | 1. [[Lipid droplets\|lipid]] store fat, wrapped in a single layer of lipids. 2. When the cell needs energy, the fat goes to the mitochondria. |
| **6 · Working together** | `flows` · `{view:'cell'}`, flow on, ghost off · — ; follow a molecule (choose from the page's `KINDS`) | 1. None of these parts work alone. 2. Watch the molecules travel: each organelle lights up as it makes its product. 3. (one cue per followed molecule, written from the page's `INFO` and recipes, so the words match what moves) |
| **7 · Recap** | `rollcall` · `{view:'cell'}`, orbit 20 · each part in turn, 1.5 s each | 1. One cue per part: its name only, as it blinks. 2. Now explore on your own: click any tag to go deeper, down to molecules and atoms. |

---

## 11. How to check it (in addition to AGENTS.md rule 6)

1. **Every step, scripted.** For each step, `__tour.goto(id)`, wait for `arrived`, then save a screenshot:
   - the blinked part is in the frame and not hidden behind another;
   - the subtitle box does not cover it.
2. **Fast clicking:** press ▶ and ⏭ 20 times quickly. Afterwards exactly one flight and one cue timer are running, and the subtitle matches the step.
3. **Explore and back:** from three different steps. The camera returns, and the user's look, cut and metabolism are restored.
4. **Narrator:** register a fake narrator whose `speak` resolves after 2 s.
   - The cues wait for it.
   - Pausing calls `stop`.
   - `cues()` lists every id once.
   - Ids are unique.
5. **Subtitle limits:** a test asserts every cue's `plain` fits 2 × 42 characters and every `[[…|part]]` names a key in `PARTS`.
6. **Reduced motion and narrow screens:** emulate both and run steps 1–3.
7. **Speed:** with ghost on, the frame rate stays within 10 % of the normal view; fading should not add draw calls.

---

## 12. Build order

1. **Animal page:**
   - `set`, `fly` and `focus` with `arrived`;
   - `blink`, `ghost`, `isolate`;
   - the `villi` key;
   - `focusOf` in `__cell`.

   Check each one alone, with the page open on its own (`?embed` with hand-sent messages): isolate, then compose.
2. **Explorer:** the engine, subtitle box, control bar, keyboard, and Explore; a two-step test script.
3. **Arrows and `follow`;** the chapter menu, transcript, and saved progress.
4. **The full script** (§10), then the checks of §11.
5. **Docs:**
   - a "Guided tour" section in the explorer manual;
   - the new messages in the animal manual §10.1;
   - an AGENTS.md row for "a tour or tutorial";
   - the `tours/` exception noted in AGENTS.md.

---

## 13. Later (not in the first version)

- **Eukaryote vs prokaryote:** a chapter that opens the realistic bacterium beside the animal cell, split screen with two iframes.
  - It shows what each has: a nucleus or a nucleoid; membrane organelles or none; 80S or 70S ribosomes; size, about 20 µm against about 2 µm.
  - It reuses this engine, with `root: ['real-cell', 'real-bacterium']`.
- **The plant cell tour:** the same engine on `real-plant`.
- **"Find it" challenges:** at the end of a chapter, "Click the Golgi apparatus". The click is tested against tags or a pick on the part's meshes, then a short reaction ("Yes. It sits next to the nucleus, by the centrosome.").
- **Captions in more languages:** `text` becomes `{ en, es, … }`, with cue ids shared across languages so the narrator's recordings line up.

---

## 14. Open questions for the owner

1. **The narrator:** live speech (a function to call) or recorded files per cue? This decides whether cue ids must stay fixed forever.
2. **Audience:** secondary school, university, or general? This sets the cue wording and length.
3. **Default advance:** automatic, like a video (this spec), or click to continue after each step, like a game tutorial? Both can be offered with an "Auto-advance" setting.
4. **Languages** for the subtitles in the first version.
