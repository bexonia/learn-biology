"""Coarse-grain real fungal / yeast (Saccharomyces cerevisiae) structures from the Protein Data Bank
for fungal_cell_realistic.html and cell_explorer.html.
Full models: one bead per amino acid (C-alpha, part 0), 0.1 A Int16 centred, base64,
with a kind byte per bead = group * 4 + part.
Reduced models: k-means clusters of those beads, each a ball whose volume matches its members."""
import base64, json, math, os, random, struct, sys
PDB_DIR, OUT_DIR = sys.argv[1], sys.argv[2]

def read_pdb(path, chains):
    res, biomt = {}, {}
    for line in open(path):
        if line.startswith('REMARK 350   BIOMT'):
            f = line.split(); row, op = int(f[2][-1]) - 1, int(f[3])
            biomt.setdefault(op, [[0.0] * 4 for _ in range(3)])[row] = [float(x) for x in f[4:8]]
        if line.startswith('ENDMDL'): break
        if not line.startswith('ATOM'): continue
        alt, ch, name = line[16], line[21], line[12:16].strip()
        if alt not in ' A' or ch not in chains or name != 'CA': continue
        seq = int(line[22:26])
        k = (ch, line[22:27], name)
        xyz = [float(line[30:38]), float(line[38:46]), float(line[46:54])]
        res[k] = (ch, seq, 0, xyz)
    return list(res.values()), [biomt[k] for k in sorted(biomt)]

def apply_op(op, xyz):
    return [op[r][0] * xyz[0] + op[r][1] * xyz[1] + op[r][2] * xyz[2] + op[r][3] for r in range(3)]

def assemble(beads, ops, group_fn, transform=None):
    if not ops:
        ops = [[[1.0, 0.0, 0.0, 0.0], [0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0]]]
    out = []
    for c, op in enumerate(ops):
        for ch, seq, part, xyz in beads:
            p = apply_op(op, xyz)
            if transform: p = transform(p)
            out.append((group_fn(ch, seq, c), part, p))
    return out

def enc(P):
    return base64.b64encode(b''.join(struct.pack('<hhh', int(round(p[0] * 10)), int(round(p[1] * 10)), int(round(p[2] * 10))) for p in P)).decode()

def pack(beads, k, seed=7):
    n = len(beads)
    mx = sum(b[2][0] for b in beads) / n
    my = sum(b[2][1] for b in beads) / n
    mz = sum(b[2][2] for b in beads) / n
    P = [[b[2][0] - mx, b[2][1] - my, b[2][2] - mz] for b in beads]
    kinds = [b[0] * 4 + b[1] for b in beads]
    full = {'n': n, 'xyz': enc(P), 'kind': base64.b64encode(bytes(kinds)).decode()}
    rng = random.Random(seed)
    idx = rng.sample(range(n), min(k, n))
    C = [P[i][:] for i in idx]
    lab = [0] * n
    for _ in range(30):
        counts = [0] * len(C)
        sums = [[0.0, 0.0, 0.0] for _ in range(len(C))]
        for i, (px, py, pz) in enumerate(P):
            best_j, best_d = 0, 1e30
            for j, (cx, cy, cz) in enumerate(C):
                d = (px - cx) ** 2 + (py - cy) ** 2 + (pz - cz) ** 2
                if d < best_d:
                    best_d = d; best_j = j
            lab[i] = best_j
            counts[best_j] += 1
            s = sums[best_j]; s[0] += px; s[1] += py; s[2] += pz
        for j in range(len(C)):
            if counts[j] > 0:
                C[j] = [sums[j][0] / counts[j], sums[j][1] / counts[j], sums[j][2] / counts[j]]
    rad, kd = [], []
    members = [[] for _ in range(len(C))]
    for i, j in enumerate(lab): members[j].append(i)
    for j in range(len(C)):
        m = members[j]
        vol = 140 * len(m)
        r = min(255, int(round((3.0 * vol / (4.0 * math.pi)) ** (1.0 / 3.0) * 1.25 * 4.0))) if m else 8
        rad.append(r)
        vals = [kinds[i] for i in m]
        kd.append(max(set(vals), key=vals.count) if vals else 0)
    red = {'n': len(C), 'xyz': enc(C), 'kind': base64.b64encode(bytes(kd)).decode(), 'rad': base64.b64encode(bytes(rad)).decode()}
    ext = [round(max(abs(p[i]) for p in P)) for i in range(3)]
    print(f'n={n} reduced={len(C)} half-extent(A)={ext}')
    return full, red

D = {}
EXPLORER = {}

# 1. Yeast Alcohol Dehydrogenase I (Adh1) homotetramer (PDB 4W6Z)
print('--- Fungal Adh1 (4W6Z) ---')
b, _ = read_pdb(f'{PDB_DIR}/4W6Z.pdb', 'ABCD')
beads = assemble(b, None, lambda ch, seq, c: 'ABCD'.index(ch))
full, red = pack(beads, 70)
D['adh1'] = {'pdb': '4W6Z', 'full': full, 'red': red}
EXPLORER['adh1'] = {'pdb': '4W6Z', **full}

# 2. Yeast Pyruvate Decarboxylase (Pdc1) (PDB 1PYD)
print('--- Fungal Pdc1 (1PYD) ---')
b, _ = read_pdb(f'{PDB_DIR}/1PYD.pdb', 'AB')
beads = assemble(b, None, lambda ch, seq, c: 0 if ch == 'A' else 1)
full, red = pack(beads, 60)
D['pdc1'] = {'pdb': '1PYD', 'full': full, 'red': red}
EXPLORER['pdc1'] = {'pdb': '1PYD', **full}

# 3. Yeast Lanosterol 14-alpha-demethylase Erg11 / CYP51 (PDB 4LXJ)
print('--- Fungal Erg11 (4LXJ) ---')
b, _ = read_pdb(f'{PDB_DIR}/4LXJ.pdb', 'A')
beads = assemble(b, None, lambda ch, seq, c: 0 if seq <= 60 else (1 if seq <= 300 else 2))
full, red = pack(beads, 40)
D['erg11'] = {'pdb': '4LXJ', 'full': full, 'red': red}
EXPLORER['erg11'] = {'pdb': '4LXJ', **full}

# 4. Fungal Exo-beta-1,3-glucanase Exg1 (PDB 1EQC)
print('--- Fungal Exg1 (1EQC) ---')
b, _ = read_pdb(f'{PDB_DIR}/1EQC.pdb', 'A')
beads = assemble(b, None, lambda ch, seq, c: 0 if seq <= 200 else 1)
full, red = pack(beads, 30)
D['exg1'] = {'pdb': '1EQC', 'full': full, 'red': red}
EXPLORER['exg1'] = {'pdb': '1EQC', **full}

# 5. Fungal Plasma-Membrane H+-ATPase Pma1 (PDB 3B8C chain A)
print('--- Fungal Pma1 (3B8C) ---')
b, _ = read_pdb(f'{PDB_DIR}/3B8C.pdb', 'A')
beads = assemble(b, None, lambda ch, seq, c: 0 if (seq < 120 or 230 < seq < 320 or seq > 520) else 1)
full, red = pack(beads, 55)
D['pma1'] = {'pdb': '3B8C', 'full': full, 'red': red}
EXPLORER['pma1'] = {'pdb': '3B8C', **full}

# 6. Septin Filament Hexamer Cdc3-Cdc10-Cdc12 (PDB 2QAG, 2 BIOMT ops)
print('--- Fungal Septin (2QAG) ---')
b, ops = read_pdb(f'{PDB_DIR}/2QAG.pdb', 'ABC')
beads = assemble(b, ops[:2], lambda ch, seq, c: 'ABC'.index(ch))
full, red = pack(beads, 70)
D['septin'] = {'pdb': '2QAG', 'full': full, 'red': red}
EXPLORER['septin'] = {'pdb': '2QAG', **full}

os.makedirs(OUT_DIR, exist_ok=True)
s = json.dumps(D, separators=(',', ':'))
open(f'{OUT_DIR}/fungal.js', 'w').write('// real structures for the realistic fungal cell (coarse_fungal.py): Adh1, Pdc1, Erg11, Exg1, Pma1, Septin\nObject.assign(PDB, ' + s + ');\n')
open(f'{OUT_DIR}/fungal.explorer.json', 'w').write(json.dumps(EXPLORER, separators=(',', ':')))
print('fungal.js bytes =', len(s))
