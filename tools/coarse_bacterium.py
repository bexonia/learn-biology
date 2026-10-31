"""Coarse-grain bacterial structures for the realistic bacterium.
Full models: one bead per amino acid (C-alpha) or nucleotide (phosphate), 0.1 A Int16 centred, base64, with a kind byte
per bead = group * 4 + part (0 protein, 2 nucleic acid). Reduced models: k-means clusters of those beads, each a ball whose
volume matches its members, for the thousands of copies in the crowded cytoplasm. Biological assemblies come from BIOMT."""
import base64, json, struct, sys, numpy as np
D, OUT = sys.argv[1], sys.argv[2]
NUC = {'A', 'U', 'G', 'C', 'DA', 'DT', 'DG', 'DC'}
def read_pdb(path, chains):
    res, biomt = {}, {}
    for line in open(path):
        if line.startswith('REMARK 350   BIOMT'):
            f = line.split(); row, op = int(f[2][-1]) - 1, int(f[3])
            biomt.setdefault(op, np.zeros((3, 4)))[row] = [float(x) for x in f[4:8]]
        if line.startswith('ENDMDL'): break
        if not line.startswith('ATOM'): continue
        alt, ch, name, rn = line[16], line[21], line[12:16].strip(), line[17:20].strip()
        if alt not in ' A' or ch not in chains: continue
        if name in ('CA', 'P') or (name == "C4'" and rn in NUC):
            k = (ch, line[22:27]); xyz = [float(line[30:38]), float(line[38:46]), float(line[46:54])]
            if name == 'CA' and rn not in NUC: res[k] = (ch, 0, xyz)
            elif rn in NUC and (name == 'P' or k not in res): res[k] = (ch, 2, xyz)
    return list(res.values()), [biomt[k] for k in sorted(biomt)]
def read_cif(path):
    cols, rows = [], []
    for line in open(path):
        if line.startswith('_atom_site.'): cols.append(line.strip().split('.', 1)[1]); continue
        if line.startswith(('ATOM', 'HETATM')):
            f = line.split()
            rows.append(f)
    ix = {c: i for i, c in enumerate(cols)}
    res = {}
    for f in rows:
        if f[ix['pdbx_PDB_model_num']] != '1' or f[ix['label_alt_id']] not in ('.', 'A'): continue
        name, rn, ch = f[ix['auth_atom_id']].strip('"'), f[ix['auth_comp_id']], f[ix['auth_asym_id']]
        k = (ch, f[ix['auth_seq_id']]); xyz = [float(f[ix['Cartn_x']]), float(f[ix['Cartn_y']]), float(f[ix['Cartn_z']])]
        if name == 'CA' and rn not in NUC: res[k] = (ch, 0, xyz)
        elif rn in NUC and (name == 'P' or (name == "C4'" and k not in res)): res[k] = (ch, 2, xyz)
    return list(res.values())
def assemble(beads, ops, group):   # every BIOMT copy of every bead; group(chain, copy) -> colour group
    if not ops: ops = [np.hstack([np.eye(3), np.zeros((3, 1))])]
    out = []
    for c, op in enumerate(ops):
        for ch, part, xyz in beads: out.append((group(ch, c), part, op[:, :3] @ np.array(xyz) + op[:, 3]))
    return out
def enc(P): return base64.b64encode(b''.join(struct.pack('<hhh', *(int(round(v * 10)) for v in p)) for p in P)).decode()
def pack(beads, k, seed=7):
    P = np.array([b[2] for b in beads]); P -= P.mean(0); kinds = [b[0] * 4 + b[1] for b in beads]
    full = {'n': len(P), 'xyz': enc(P), 'kind': base64.b64encode(bytes(kinds)).decode()}
    rng = np.random.default_rng(seed); C = P[rng.choice(len(P), k, replace=False)]
    for _ in range(40):
        lab = np.argmin(((P[:, None, :] - C[None]) ** 2).sum(-1), 1)
        C = np.array([P[lab == j].mean(0) if (lab == j).any() else C[j] for j in range(k)])
    rad, kd = [], []
    for j in range(k):
        m = lab == j; n = int(m.sum()); vol = sum(330 if beads[i][1] == 2 else 140 for i in np.where(m)[0])
        rad.append(min(255, int(round((3 * vol / 4 / np.pi) ** (1 / 3) * 1.25 * 4))))   # 0.25 A units, swollen a little so neighbours touch
        vals = [kinds[i] for i in np.where(m)[0]]; kd.append(max(set(vals), key=vals.count) if vals else 0)
    red = {'n': k, 'xyz': enc(C), 'kind': base64.b64encode(bytes(kd)).decode(), 'rad': base64.b64encode(bytes(rad)).decode()}
    ext = np.abs(P).max(0)
    print(f'n={len(P)} reduced={k} half-extent(A)={ext.round()}')
    return full, red
OUTD = {}
def add(key, pdb, beads, k, keep_full=True):
    print(key, end=' '); full, red = pack(beads, k)
    OUTD[key] = {'pdb': pdb, **({'full': full} if keep_full else {}), 'red': red}
# RNA polymerase holoenzyme: alpha x2, beta, beta', omega, sigma70 (groups 0-4)
b, _ = read_pdb(f'{D}/4YG2.pdb', 'ABCDEF'); add('rnap', '4YG2', assemble(b, [], lambda ch, c: {'A': 0, 'B': 0, 'C': 1, 'D': 2, 'E': 3, 'F': 4}[ch]), 60)
# 70S ribosome: the 30S (chains A*) and whichever 50S copy (C* or D*) sits on it; group 0 = 30S, 1 = 50S
rb = read_cif(f'{D}/4YBB.cif'); cen = lambda pre: np.mean([x for ch, p, x in rb if ch.startswith(pre) and len(ch) == 2], 0)
big = 'C' if np.linalg.norm(cen('A') - cen('C')) < np.linalg.norm(cen('A') - cen('D')) else 'D'
add('ribo', '4YBB', [(0 if ch[0] == 'A' else 1, p, x) for ch, p, x in rb if len(ch) == 2 and ch[0] in 'A' + big], 220)
b, ops = read_pdb(f'{D}/2OMF.pdb', 'A'); add('ompf', '2OMF', assemble(b, ops[:3], lambda ch, c: c), 27)
b, _ = read_pdb(f'{D}/1AON.pdb', 'ABCDEFGHIJKLMNOPQRSTU'); add('groel', '1AON', assemble(b, [], lambda ch, c: 0 if ch < 'H' else 1 if ch < 'O' else 2), 110)
b, _ = read_pdb(f'{D}/1EFC.pdb', 'A'); add('eftu', '1EFC', assemble(b, [], lambda ch, c: 0), 13)
b, ops = read_pdb(f'{D}/1DC4.pdb', 'AB'); add('gapdh', '1DC4', assemble(b, ops[:2], lambda ch, c: c * 2 + (ch == 'B')), 34)
b, ops = read_pdb(f'{D}/1MUL.pdb', 'A'); add('hu', '1MUL', assemble(b, ops[:2], lambda ch, c: c), 6)
b, _ = read_pdb(f'{D}/1QU7.pdb', 'AB'); add('mcp', '1QU7', assemble(b, [], lambda ch, c: ch == 'B'), 24)
open(OUT, 'w').write('const PDB = ' + json.dumps(OUTD, separators=(',', ':')) + ';\n')
print('bytes', len(json.dumps(OUTD)))
