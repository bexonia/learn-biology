# 02 — Bilingual Internationalization (`EN`/`ES`) & Reactive Locale Switching

**Iteration:** `02` (Complete Spanish Localization & `AtomRef` Reactivity)  
**Status:** ✅ **Completed & Verified**  
**Parent Index:** [`roadmaps/README.md`](./README.md)  
**Previous Step:** [`01-interactive-3d-biology-and-effect-v4-architecture.md`](./01-interactive-3d-biology-and-effect-v4-architecture.md)  
**Next Step:** [`03-guided-tour-voice-cloning-and-tts-narration.md`](./03-guided-tour-voice-cloning-and-tts-narration.md)

---

## 1. Summary of Completed Work

1. **Reactive `I18nService` with `effect/reactivity` (`AtomRef`):**
   - Implemented `I18nService` in `src/core/i18n.ts` backed by `AtomRef.make<LocaleCode>()` for instantaneous reactive UI updates across the structure tree, info panels, 3D labels, guided tour HUD, and embedded realistic iframes without reloading the page.
   - Automatic browser locale detection via `?lang=`, `localStorage`, `navigator.languages`, and `Intl.DateTimeFormat` timezone fallback.

2. **100% Spanish (`ES`) Coverage Across Every Node, Tour, Tag & Recipe (`bexonia/learn-biology#12`):**
   - **`src/core/locales/es_nodes.ts`:** Complete Spanish `name`, `scale`, and full multi-sentence `desc` translations for all **208** biological explorer nodes.
   - **`src/core/locales/es_tours.ts`:** Complete Spanish translations for all **10 guided tours** (10 tour titles, 10 tour summaries, 44 chapter titles, 151 step titles, 19 pathway arrow labels, and all **655 unique subtitle cues** / 767 total cue instances), preserving all interactive `[[label|partKey]]` highlight and navigation links.
   - **`src/core/locales/es_phrases.ts`:** Complete Spanish translations for all **318** 3D tag labels, **476** 3D molecular/atomic anchors, **131** organelle/virus part titles, **268** metabolic/structural recipes (`Takes in` / `Gives out` / `Structure` / `Role`), and **57** molecule/signal flow labels (`MOL`).
