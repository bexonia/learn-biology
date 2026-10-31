"""Coarse-grain PDB structures: two beads per amino acid (backbone C-alpha, side-chain centre) and two per nucleotide
(phosphate, base centre). Writes a JS file with each molecule's beads as base64 Int16 (0.1 A units, centred) plus a
kind byte per bead: chain index * 4 + (0 backbone, 1 side chain, 2 nucleic backbone, 3 base) and a base letter list."""
import base64, json, struct, sys
from collections import OrderedDict

PDB = sys.argv[1]; OUT = sys.argv[2]
MOLS = [  # id, file, chains kept
    ('nucleosome', '1KX5', 'ABCDEFGHIJ'), ('polII', '1I50', 'ABCEFHIJKL'), ('pcna', '1AXC', 'ACE'),
    ('ubiquitin', '1UBQ', 'A'), ('gapdh', '1U8F', 'OPQR'), ('kinesin', '3KIN', 'AB'), ('actin', '1J6Z', 'A'), ('tubulin', '1JFF', 'AB'),
    ('glut1', '4PYP', 'A'), ('aquaporin', '1J4N', 'A'), ('nakpump', '3WGU', 'ABG'),
    ('atpsynthase', '1BMF', 'ABCDEFG'), ('cytc', '1HRC', 'A'), ('catalase', '1DGF', 'ABCD'),
]
NUC = {'DA': 'A', 'DT': 'T', 'DG': 'G', 'DC': 'C', 'A': 'A', 'U': 'U', 'G': 'G', 'C': 'C'}
BACKBONE = {'N', 'CA', 'C', 'O', 'OXT'}
NUC_BB = {'P', 'OP1', 'OP2', 'O5\'', 'C5\'', 'C4\'', 'O4\'', 'C3\'', 'O3\'', 'C2\'', 'O2\'', 'C1\''}
out = {}
for key, pid, keep in MOLS:
    res = OrderedDict()
    for line in open(f'{PDB}/{pid}.pdb'):
        if line.startswith('ENDMDL'): break
        if not line.startswith('ATOM'): continue
        alt, ch = line[16], line[21]
        if alt not in ' A' or ch not in keep: continue
        name, rn = line[12:16].strip(), line[17:20].strip()
        x, y, z = float(line[30:38]), float(line[38:46]), float(line[46:54])
        r = res.setdefault((ch, line[22:27]), {'rn': rn, 'ch': ch, 'atoms': {}})
        r['atoms'][name] = (x, y, z)
    beads, kinds, letters = [], [], []
    chains = sorted({r['ch'] for r in res.values()}, key=keep.index)
    cen = lambda pts: tuple(sum(p[i] for p in pts) / len(pts) for i in range(3))
    for r in res.values():
        ci, a = chains.index(r['ch']), r['atoms']
        if r['rn'] in NUC:
            bb = [v for k, v in a.items() if k in NUC_BB]; base = [v for k, v in a.items() if k not in NUC_BB and k not in ('OP1', 'OP2')]
            if 'P' in a: beads.append(a['P']); kinds.append(ci * 4 + 2); letters.append('')
            elif bb: beads.append(cen(bb)); kinds.append(ci * 4 + 2); letters.append('')
            if base: beads.append(cen(base)); kinds.append(ci * 4 + 3); letters.append(NUC[r['rn']])
        elif 'CA' in a:
            beads.append(a['CA']); kinds.append(ci * 4); letters.append('')
            side = [v for k, v in a.items() if k not in BACKBONE]
            side = [v for k, v in a.items() if k not in BACKBONE and k != 'CB'] or side
            if side and r['rn'] != 'GLY': beads.append(cen(side)); kinds.append(ci * 4 + 1); letters.append('')
    c = cen(beads)
    q = b''.join(struct.pack('<hhh', *(round((p[i] - c[i]) * 10) for i in range(3))) for p in beads)
    out[key] = {'pdb': pid, 'n': len(beads), 'chains': len(chains), 'xyz': base64.b64encode(q).decode(), 'kind': base64.b64encode(bytes(kinds)).decode(),
                'bases': ''.join(l or '.' for l in letters) if any(letters) else ''}
    ext = [max(abs(p[i] - c[i]) for p in beads) for i in range(3)]
    print(f'{key:12s} {pid} beads={len(beads):6d} chains={len(chains)} half-extent(A)={[round(e) for e in ext]}')
open(OUT, 'w').write('const PROTEINS = ' + json.dumps(out, separators=(',', ':')) + ';\n')
print('bytes', sum(len(v['xyz']) + len(v['kind']) + len(v['bases']) for v in out.values()))
