import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Effect } from 'effect';
import { runBiologyApp } from '../src/index.js';
import '../src/content/index.js';
import {
  ENGLISH_VOICE_IDS,
  EXPLANATION_MODES,
  type ExplanationMode
} from '../src/content/types.js';
import { NODE_LENS_REGISTRY } from '../src/content/registry.js';
import { normalizeSpeechText, stripTourMarkup } from '../src/core/narrator_service.js';

export interface NarrationManifestEntry {
  readonly kind: 'tour' | 'lens';
  readonly tourKey: string | null;
  readonly tourRoot: string | null;
  readonly chapterId: string | null;
  readonly stepId: string | null;
  readonly detailId: string | null;
  readonly cueId: string | null;
  readonly nodeId: string | null;
  readonly mode: ExplanationMode | null;
  readonly lang: 'en' | 'es';
  readonly speechLang: string;
  readonly plainText: string;
  readonly speechText: string;
  readonly audioPath: string;
  readonly targets: Readonly<Record<string, string>>;
}

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function main() {
  const entries: NarrationManifestEntry[] = [];

  runBiologyApp(20261031, ({ tours, i18n }) => {
    for (const lang of ['en', 'es'] as const) {
      Effect.runSync(i18n.setLocaleEffect(lang));
      const speechLang = i18n.getLocaleDefinition(lang).speechLang;

      // 1. Export all Guided Tour cues (10 tours)
      for (const [tourKey, tour] of Object.entries(tours.tours)) {
        const seenCueIds = new Set<string>();

        const pushTourCue = (
          cue: { readonly id: string; readonly text: string; readonly say?: string },
          chapterId: string | null,
          stepId: string | null,
          detailId: string | null
        ) => {
          const dedupKey = `${tour.root}::${cue.id}`;
          if (seenCueIds.has(dedupKey)) return;
          seenCueIds.add(dedupKey);

          const translated = i18n.tr(cue.text);
          const plainText = stripTourMarkup(translated);
          const sourceForSpeech = lang === 'en' && cue.say ? cue.say : plainText;
          const speechText = normalizeSpeechText(sourceForSpeech, speechLang);
          const encCueId = encodeURIComponent(cue.id);

          const targets: Record<string, string> =
            lang === 'en'
              ? Object.fromEntries(
                  ENGLISH_VOICE_IDS.map(v => [v, `audio/en/${v}/${tour.root}/${encCueId}.opus`])
                )
              : { es: `audio/es/${tour.root}/${encCueId}.opus` };

          entries.push({
            kind: 'tour',
            tourKey,
            tourRoot: tour.root,
            chapterId,
            stepId,
            detailId,
            cueId: cue.id,
            nodeId: null,
            mode: null,
            lang,
            speechLang,
            plainText,
            speechText,
            audioPath: lang === 'en' ? targets.v3 : targets.es,
            targets
          });
        };

        for (const ch of tour.chapters) {
          for (const step of ch.steps) {
            for (const cue of step.cues) {
              pushTourCue(cue, ch.id, step.id, null);
            }
          }
        }

        for (const [detailId, detailObj] of Object.entries(tour.details ?? {})) {
          for (const cue of detailObj.cues ?? []) {
            pushTourCue(cue, null, null, detailId);
          }
        }
      }

      // 2. Export all 208 Explorer Node Lenses across all 4 Explanation Modes
      const sortedNodeIds = Object.keys(NODE_LENS_REGISTRY).sort();
      for (const nodeId of sortedNodeIds) {
        const bi = NODE_LENS_REGISTRY[nodeId];
        const lensByLang = lang === 'es' ? bi.es : bi.en;
        const encNodeId = encodeURIComponent(nodeId);

        for (const mode of EXPLANATION_MODES) {
          const rawText = lensByLang[mode];
          const plainText = stripTourMarkup(rawText);
          const speechText = normalizeSpeechText(rawText, speechLang);

          const targets: Record<string, string> =
            lang === 'en'
              ? Object.fromEntries(
                  ENGLISH_VOICE_IDS.map(v => [
                    v,
                    `audio/lenses/en/${v}/${mode}/${encNodeId}.opus`
                  ])
                )
              : { es: `audio/lenses/es/${mode}/${encNodeId}.opus` };

          entries.push({
            kind: 'lens',
            tourKey: null,
            tourRoot: null,
            chapterId: null,
            stepId: null,
            detailId: null,
            cueId: null,
            nodeId,
            mode,
            lang,
            speechLang,
            plainText,
            speechText,
            audioPath: lang === 'en' ? targets.v3 : targets.es,
            targets
          });
        }
      }
    }
  });

  const totalAudioFiles = entries.reduce((acc, e) => acc + Object.keys(e.targets).length, 0);
  const outDir = path.join(ROOT_DIR, 'dist');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'tour_cues_manifest.json');
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        totalEntries: entries.length,
        totalAudioFiles,
        languages: ['en', 'es'],
        englishVoices: ENGLISH_VOICE_IDS,
        modes: EXPLANATION_MODES,
        entries
      },
      null,
      2
    ) + '\n',
    'utf8'
  );
  console.log(
    `✓ Exported ${entries.length} bilingual text entries (${totalAudioFiles} target .opus files) to ${outPath}`
  );
}

main();
