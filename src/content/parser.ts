import { EXPLANATION_MODES, type ExplanationMode } from './types.js';

export type RichTextToken =
  | { readonly type: 'text'; readonly value: string }
  | { readonly type: 'link'; readonly label: string; readonly nodeId: string };

export function isValidExplanationMode(val: unknown): val is ExplanationMode {
  return typeof val === 'string' && (EXPLANATION_MODES as readonly string[]).includes(val);
}

/**
 * Splits a narrative/blueprint string into paragraphs (`\n\n`) and parses inline
 * `[[Display Label|targetNodeId]]` links inside each paragraph.
 */
export function parseRichParagraphs(raw: string): ReadonlyArray<ReadonlyArray<RichTextToken>> {
  if (!raw) return [];
  const paragraphs = raw
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return paragraphs.map((para) => parseRichInline(para));
}

export function parseRichInline(text: string): ReadonlyArray<RichTextToken> {
  if (!text) return [];
  const out: RichTextToken[] = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIdx) {
      out.push({ type: 'text', value: text.slice(lastIdx, match.index) });
    }
    out.push({
      type: 'link',
      label: match[1].trim(),
      nodeId: match[2].trim()
    });
    lastIdx = re.lastIndex;
  }
  if (lastIdx < text.length) {
    out.push({ type: 'text', value: text.slice(lastIdx) });
  }
  return out;
}

export function stripRichLinks(text: string): string {
  if (!text) return '';
  return text.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$1');
}
