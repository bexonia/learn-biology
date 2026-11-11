"""Spanish phonemic Grapheme-to-Phoneme (G2P) module for GPT-SoVITS (v2 / v2ProPlus / v3 / v4).

Maps Spanish orthography (including biology nomenclature, PDB codes, numbers, diphthongs,
hiatuses, and RAE lexical stress rules) directly into GPT-SoVITS `symbols2.arpa` tokens so
Spanish sentences are synthesized with pure monophthong vowels and natural prosody instead
of being dropped or spelled out by the English OOV fallback.
"""

from __future__ import annotations

import re
from typing import List
from num2words import num2words

LETTER_NAMES_ES = {
    "A": "a",
    "B": "be",
    "C": "ce",
    "D": "de",
    "E": "e",
    "F": "efe",
    "G": "ge",
    "H": "hache",
    "I": "i",
    "J": "jota",
    "K": "ka",
    "L": "ele",
    "M": "eme",
    "N": "ene",
    "Ñ": "eñe",
    "O": "o",
    "P": "pe",
    "Q": "cu",
    "R": "erre",
    "S": "ese",
    "T": "te",
    "U": "u",
    "V": "uve",
    "W": "doble uve",
    "X": "equis",
    "Y": "i griega",
    "Z": "zeta",
}

# Acronyms pronounced as whole words in Spanish rather than spelled out letter-by-letter
WORD_ACRONYMS_ES = {
    "COVID": "cóvid",
    "SARS": "sars",
    "CAR": "car",
    "TIM": "tim",
}

# Unstressed Spanish function words (clitics, articles, prepositions, conjunctions)
UNSTRESSED_WORDS = {
    "el",
    "la",
    "los",
    "las",
    "de",
    "del",
    "a",
    "al",
    "en",
    "con",
    "por",
    "para",
    "sin",
    "se",
    "me",
    "te",
    "le",
    "les",
    "lo",
    "su",
    "sus",
    "mi",
    "mis",
    "tu",
    "tus",
    "que",
    "si",
    "ni",
    "o",
    "u",
    "y",
    "e",
    "mas",
}

STRONG_VOWELS = set("aeoáéó")
WEAK_UNACCENTED = set("iuü")
ACCENTED_VOWELS = set("áéíóú")
ALL_VOWELS = set("aeiouáéíóúü")

ONSET_CLUSTERS = {
    "bl",
    "br",
    "cl",
    "cr",
    "dr",
    "fl",
    "fr",
    "gl",
    "gr",
    "pl",
    "pr",
    "tr",
}


def _spell_alphanum_es(token: str) -> str:
    parts: List[str] = []
    for m in re.finditer(r"[A-Za-zÑñ]+|\d+", token):
        piece = m.group(0)
        if piece.isdigit():
            parts.append(num2words(int(piece), lang="es"))
        else:
            for ch in piece.upper():
                parts.append(LETTER_NAMES_ES.get(ch, ch.lower()))
    return " ".join(parts)


def text_normalize(text: str) -> str:
    s = text.strip()
    # Strip inverted Spanish punctuation and normalize dashes/semicolons/colons
    s = s.replace("¡", "").replace("¿", "")
    s = s.replace("«", '"').replace("»", '"').replace('"', "")
    s = re.sub(r"\s*[—–]\s*", ", ", s)
    s = re.sub(r"[;:]", ",", s)
    s = s.replace("/", " por ")

    # Enzyme / biological hybrid terms with uppercase prefixes
    s = re.sub(r"\bATPasa(s?)\b", r"a te pe asa\1", s)
    s = re.sub(r"\bGTPasa(s?)\b", r"ge te pe asa\1", s)
    s = re.sub(r"\bRNasa(s?)\b", r"erre ene asa\1", s)
    s = re.sub(r"\bDNasa(s?)\b", r"de ene asa\1", s)
    s = re.sub(r"\bADNc\b", "a de ene complementario", s)
    s = re.sub(r"\bADNr\b", "a de ene ribosómico", s)
    s = re.sub(r"\bARNm\b", "a erre ene mensajero", s)
    s = re.sub(r"\bARNr\b", "a erre ene ribosómico", s)
    s = re.sub(r"\bARNt\b", "a erre ene de transferencia", s)
    s = re.sub(r"\bE\.\s*coli\b", "Escherichia coli", s)

    # Ribosomal subunits like 80S, 70S, 60S, 50S, 40S, 30S, 20S and 3D
    s = re.sub(r"\b(\d+)S\b", lambda m: f"{num2words(int(m.group(1)), lang='es')} ese", s)
    s = re.sub(r"\b3D\b", "tres de", s)

    # Mixed alphanumeric codes (PDB IDs like 1X9T, 6OQR, 4YG2, receptors like ACE2, CCR5, CD4, P450, gp120, gp41, T4, S1, S2)
    def replace_mixed_code(match: re.Match[str]) -> str:
        tok = match.group(0)
        if tok.isdigit():
            return tok
        # Lowercase gene/protein prefix + digits like gp120, gp41, p53
        m_low = re.fullmatch(r"([a-z]{1,3})(\d+)", tok)
        if m_low:
            letters = " ".join(LETTER_NAMES_ES[c.upper()] for c in m_low.group(1))
            num = num2words(int(m_low.group(2)), lang="es")
            return f"{letters} {num}"
        return _spell_alphanum_es(tok)

    s = re.sub(r"\b(?=[A-Za-z0-9]*\d)(?=[A-Za-z0-9]*[A-Za-z])[A-Za-z0-9]{2,8}\b", replace_mixed_code, s)

    # All-caps acronyms (2 to 6 uppercase letters, e.g. ADN, ARN, ATP, VIH, PDB, NADPH)
    def replace_acronym(match: re.Match[str]) -> str:
        acr = match.group(0)
        if acr in WORD_ACRONYMS_ES:
            return WORD_ACRONYMS_ES[acr]
        return " ".join(LETTER_NAMES_ES.get(c, c.lower()) for c in acr)

    s = re.sub(r"\b[A-ZÁÉÍÓÚÑ]{2,6}\b", replace_acronym, s)

    # Decimal numbers (e.g. 6,4 or 2.9)
    def replace_decimal(match: re.Match[str]) -> str:
        whole = num2words(int(match.group(1)), lang="es")
        sep = "coma" if match.group(2) == "," else "punto"
        frac_str = match.group(3)
        frac = num2words(int(frac_str), lang="es") if len(frac_str) <= 2 else " ".join(
            num2words(int(d), lang="es") for d in frac_str
        )
        return f"{whole} {sep} {frac}"

    s = re.sub(r"\b(\d+)([,.])(\d+)\b", replace_decimal, s)

    # Plain integers
    s = re.sub(r"\b\d+\b", lambda m: num2words(int(m.group(0)), lang="es"), s)

    # Single standalone uppercase letters (e.g. "anillo B", "proteína V", "hebra A")
    def replace_single_cap(match: re.Match[str]) -> str:
        ch = match.group(0)
        return LETTER_NAMES_ES.get(ch, ch.lower())

    s = re.sub(r"(?<!^)(?<![.!?]\s)\b[B-DF-HJ-NP-TV-Z]\b", replace_single_cap, s)

    s = s.lower()
    s = s.replace("-", " ")
    s = re.sub(r"[^a-záéíóúüñ.,!?\s]", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def _tokenize_graphemes(word: str) -> List[str]:
    """Splits a lowercase Spanish word into atomic consonantal/vocalic graphemes."""
    tokens: List[str] = []
    i = 0
    n = len(word)
    while i < n:
        pair = word[i : i + 2]
        if pair in ("ch", "ll", "rr"):
            tokens.append(pair)
            i += 2
            continue
        if pair == "qu" and i + 2 < n and word[i + 2] in ("e", "é", "i", "í"):
            tokens.append("qu")
            i += 2
            continue
        if pair == "gu" and i + 2 < n and word[i + 2] in ("e", "é", "i", "í"):
            tokens.append("gu")
            i += 2
            continue
        if word[i] == "h":
            # Silent h in Spanish
            i += 1
            continue
        tokens.append(word[i])
        i += 1
    return tokens


def _is_vowel_tok(tok: str) -> bool:
    return len(tok) == 1 and tok in ALL_VOWELS


def _can_form_diphthong(v1: str, v2: str) -> bool:
    # Two strong vowels (a, e, o) or any accented weak vowel (í, ú) form a hiatus (separate syllables)
    if v1 in STRONG_VOWELS and v2 in STRONG_VOWELS:
        return False
    if v1 in ("í", "ú") or v2 in ("í", "ú"):
        return False
    if v1 == v2:
        return False
    return (v1 in WEAK_UNACCENTED) or (v2 in WEAK_UNACCENTED)


def _syllabify(tokens: List[str]) -> List[List[str]]:
    """Groups grapheme tokens into Spanish syllables for stress assignment."""
    # First group contiguous vowel nuclei (diphthongs/triphthongs vs hiatus)
    units: List[tuple[str, List[str]]] = []
    i = 0
    while i < len(tokens):
        if _is_vowel_tok(tokens[i]):
            nuc = [tokens[i]]
            i += 1
            while i < len(tokens) and _is_vowel_tok(tokens[i]):
                if _can_form_diphthong(nuc[-1], tokens[i]):
                    nuc.append(tokens[i])
                    i += 1
                else:
                    break
            units.append(("V", nuc))
        else:
            units.append(("C", [tokens[i]]))
            i += 1

    vowel_indices = [idx for idx, (kind, _) in enumerate(units) if kind == "V"]
    if not vowel_indices:
        return [tokens] if tokens else []

    syllables: List[List[str]] = [[] for _ in vowel_indices]
    # Leading consonants attach to first vowel nucleus
    for u_idx in range(vowel_indices[0]):
        syllables[0].extend(units[u_idx][1])
    syllables[0].extend(units[vowel_indices[0]][1])

    # Consonants between consecutive vowel nuclei
    for k in range(len(vowel_indices) - 1):
        v_left = vowel_indices[k]
        v_right = vowel_indices[k + 1]
        inter = [units[u][1][0] for u in range(v_left + 1, v_right)]
        if len(inter) == 0:
            pass
        elif len(inter) == 1:
            syllables[k + 1].extend(inter)
        elif len(inter) == 2:
            pair = inter[0] + inter[1]
            if pair in ONSET_CLUSTERS:
                syllables[k + 1].extend(inter)
            else:
                syllables[k].append(inter[0])
                syllables[k + 1].append(inter[1])
        else:
            pair = inter[-2] + inter[-1]
            if pair in ONSET_CLUSTERS:
                syllables[k].extend(inter[:-2])
                syllables[k + 1].extend(inter[-2:])
            else:
                syllables[k].extend(inter[:-1])
                syllables[k + 1].append(inter[-1])
        syllables[k + 1].extend(units[v_right][1])

    # Trailing coda consonants attach to final syllable
    for u_idx in range(vowel_indices[-1] + 1, len(units)):
        syllables[-1].extend(units[u_idx][1])

    return syllables


def _stressed_syllable_index(word: str, syllables: List[List[str]]) -> int:
    if not syllables:
        return -1
    if word in UNSTRESSED_WORDS:
        return -1
    for idx, syl in enumerate(syllables):
        if any(t in ACCENTED_VOWELS for t in syl):
            return idx
    if len(syllables) == 1:
        return 0
    last_char = word[-1]
    if last_char in ALL_VOWELS or last_char in ("n", "s"):
        return len(syllables) - 2
    return len(syllables) - 1


def _vowel_to_arpa(ch: str, stressed: bool) -> str:
    base = ch.translate(str.maketrans("áéíóúü", "aeiouu"))
    stress = "1" if stressed else "0"
    if base == "a":
        return "AA" + stress
    if base == "e":
        return "EH" + stress
    if base == "i":
        return "IY" + stress
    if base == "o":
        return "OW" + stress
    return "UW" + stress


def word_to_arpa(word: str) -> List[str]:
    if word == "y":
        return ["IY0"]
    if word == "e":
        return ["EH0"]
    if word == "o":
        return ["AO0"]
    if word == "u":
        return ["UW0"]

    tokens = _tokenize_graphemes(word)
    if not tokens:
        return []

    syllables = _syllabify(tokens)
    stress_idx = _stressed_syllable_index(word, syllables)
    phones: List[str] = []

    for s_idx, syl in enumerate(syllables):
        is_stressed_syl = s_idx == stress_idx
        # Identify which vowel inside the syllable carries the peak (strong vowel or accented vowel, or last weak in iu/ui)
        vowel_positions = [idx for idx, t in enumerate(syl) if _is_vowel_tok(t)]
        peak_pos = -1
        if vowel_positions:
            for vp in vowel_positions:
                if syl[vp] in ACCENTED_VOWELS:
                    peak_pos = vp
                    break
            if peak_pos < 0:
                for vp in vowel_positions:
                    if syl[vp] in STRONG_VOWELS:
                        peak_pos = vp
                        break
            if peak_pos < 0:
                peak_pos = vowel_positions[-1]

        for idx, tok in enumerate(syl):
            next_tok = syl[idx + 1] if idx + 1 < len(syl) else (
                syllables[s_idx + 1][0] if s_idx + 1 < len(syllables) and syllables[s_idx + 1] else ""
            )
            prev_tok = syl[idx - 1] if idx > 0 else (
                syllables[s_idx - 1][-1] if s_idx > 0 and syllables[s_idx - 1] else ""
            )

            if _is_vowel_tok(tok):
                if len(vowel_positions) > 1 and idx != peak_pos:
                    # Semivowel / semiconsonant glide inside diphthong
                    base_v = tok.translate(str.maketrans("áéíóúü", "aeiouu"))
                    if idx < peak_pos:
                        phones.append("Y" if base_v == "i" else "W")
                    else:
                        phones.append("IY0" if base_v == "i" else "UW0")
                else:
                    phones.append(_vowel_to_arpa(tok, is_stressed_syl))
                continue

            if tok in ("b", "v"):
                phones.append("B")
            elif tok == "c":
                if next_tok in ("e", "é", "i", "í"):
                    phones.append("S")
                else:
                    phones.append("K")
            elif tok == "ch":
                phones.append("CH")
            elif tok == "d":
                phones.append("D")
            elif tok == "f":
                phones.append("F")
            elif tok == "g":
                if next_tok in ("e", "é", "i", "í"):
                    phones.append("HH")
                else:
                    phones.append("G")
            elif tok == "gu":
                phones.append("G")
            elif tok == "j":
                phones.append("HH")
            elif tok in ("k", "qu", "q"):
                phones.append("K")
            elif tok == "l":
                phones.append("L")
            elif tok == "ll":
                phones.append("Y")
            elif tok == "m":
                phones.append("M")
            elif tok == "n":
                if next_tok in ("k", "qu", "g", "gu", "j"):
                    phones.append("NG")
                else:
                    phones.append("N")
            elif tok == "ñ":
                phones.extend(["N", "Y"])
            elif tok == "p":
                phones.append("P")
            elif tok == "rr":
                phones.append("R")
            elif tok == "r":
                phones.append("R")
            elif tok in ("s", "z"):
                phones.append("S")
            elif tok == "t":
                phones.append("T")
            elif tok == "w":
                phones.append("W")
            elif tok == "x":
                if s_idx == 0 and idx == 0:
                    phones.append("S")
                else:
                    phones.extend(["K", "S"])
            elif tok == "y":
                if next_tok and _is_vowel_tok(next_tok):
                    phones.append("Y")
                else:
                    phones.append("IY0")

    return phones


def g2p(text: str) -> List[str]:
    phones: List[str] = []
    for m in re.finditer(r"[a-záéíóúüñ]+|[.,!?]", text):
        tok = m.group(0)
        if tok in (".", ",", "!", "?"):
            phones.append(tok)
        else:
            phones.extend(word_to_arpa(tok))
    if not phones:
        return ["."]
    return phones
