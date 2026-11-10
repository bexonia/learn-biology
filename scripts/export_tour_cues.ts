import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Effect } from 'effect';
import { runBiologyApp } from '../src/index.js';
import { normalizeSpeechText, stripTourMarkup } from '../src/core/narrator_service.js';

export interface TourCueManifestEntry {
  readonly tourKey: string;
  readonly tourRoot: string;
  readonly chapterId: string | null;
  readonly stepId: string | null;
  readonly detailId: string | null;
  readonly cueId: string;
  readonly lang: 'en' | 'es';
  readonly speechLang: string;
  readonly plainText: string;
  readonly speechText: string;
  readonly audioPath: string;
}

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function main() {
  const entries: TourCueManifestEntry[] = [];

  runBiologyApp(20261031, ({ tours, i18n }) => {
    for (const lang of ['en', 'es'] as const) {
      Effect.runSync(i18n.setLocaleEffect(lang));
      const speechLang = i18n.getLocaleDefinition(lang).speechLang;

      for (const [tourKey, tour] of Object.entries(tours.tours)) {
        const seenCueIds = new Set<string>();

        for (const ch of tour.chapters) {
          for (const step of ch.steps) {
            for (const cue of step.cues) {
              const dedupKey = `${tour.root}::${cue.id}`;
              if (seenCueIds.has(dedupKey)) continue;
              seenCueIds.add(dedupKey);

              const translated = i18n.tr(cue.text);
              const plainText = stripTourMarkup(translated);
              const sourceForSpeech = lang === 'en' && cue.say ? cue.say : plainText;
              const speechText = normalizeSpeechText(sourceForSpeech, speechLang);

              entries.push({
                tourKey,
                tourRoot: tour.root,
                chapterId: ch.id,
                stepId: step.id,
                detailId: null,
                cueId: cue.id,
                lang,
                speechLang,
                plainText,
                speechText,
                audioPath: `audio/${lang}/${tour.root}/${encodeURIComponent(cue.id)}.opus`
              });
            }
          }
        }

        for (const [detailId, detailObj] of Object.entries(tour.details ?? {})) {
          for (const cue of detailObj.cues ?? []) {
            const dedupKey = `${tour.root}::${cue.id}`;
            if (seenCueIds.has(dedupKey)) continue;
            seenCueIds.add(dedupKey);

            const translated = i18n.tr(cue.text);
            const plainText = stripTourMarkup(translated);
            const sourceForSpeech = lang === 'en' && cue.say ? cue.say : plainText;
            const speechText = normalizeSpeechText(sourceForSpeech, speechLang);

            entries.push({
              tourKey,
              tourRoot: tour.root,
              chapterId: null,
              stepId: null,
              detailId,
              cueId: cue.id,
              lang,
              speechLang,
              plainText,
              speechText,
              audioPath: `audio/${lang}/${tour.root}/${encodeURIComponent(cue.id)}.opus`
            });
          }
        }
      }
    }
  });

  const outDir = path.join(ROOT_DIR, 'dist');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'tour_cues_manifest.json');
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        totalEntries: entries.length,
        languages: ['en', 'es'],
        entries
      },
      null,
      2
    ) + '\n',
    'utf8'
  );
  console.log(`✓ Exported ${entries.length} bilingual tour cues to ${outPath}`);
}

main();
