"""Real structures for the realistic plant cell, coarse-grained as in the bacterium (coarse_bacterium_more.py): a bead per amino acid (C-alpha), and for
light-harvesting proteins a bead per chlorophyll (its magnesium atom). Membrane proteins come from OPM, turned so the membrane normal is z:
the origin is put on the membrane's mid-plane, and +z points to the lumen of the thylakoid (or out of the cell, for the plasma membrane).
Soluble proteins are centred on their middle. Encoding: 0.1 A Int16, base64; kind byte = group * 4 + part (0 amino acid, 3 chlorophyll)."""
import base64, json, struct, sys, numpy as np
PDB, OPM, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
def read(path, chains):
    res, dum = {}, []
    for line in open(path):
        if line.startswith('HETATM') and line[17:20] == 'DUM': dum.append(float(line[46:54])); continue
        if line.startswith('ENDMDL'): break
        rec, alt, ch, name, rn = line[:6], line[16], line[21], line[12:16].strip(), line[17:20].strip()
        if rec not in ('ATOM  ', 'HETATM') or alt not in ' A' or ch not in chains: continue
        xyz = [float(line[30:38]), float(line[38:46]), float(line[46:54])]
        if rec == 'ATOM  ' and name == 'CA': res[(ch, line[22:27], 'a')] = (ch, 0, xyz)
        if rec == 'HETATM' and name == 'MG' and rn in ('CLA', 'CHL'): res[(ch, line[22:27], 'c')] = (ch, 3, xyz)
    return list(res.values()), dum
def enc(P): return base64.b64encode(b''.join(struct.pack('<hhh', *(int(round(v * 10)) for v in p)) for p in P)).decode()
def pack(beads, origin, k, seed=7):
    P = np.array([b[2] for b in beads]) - origin; kinds = [b[0] * 4 + b[1] for b in beads]
    out = {'full': {'n': len(P), 'xyz': enc(P), 'kind': base64.b64encode(bytes(kinds)).decode()}}
    A = np.array([i for i, b in enumerate(beads) if b[1] == 0]); Q = P[A]   # the reduced balls are made from the amino acids only
    rng = np.random.default_rng(seed); C = Q[rng.choice(len(Q), k, replace=False)]
    for _ in range(40):
        lab = np.argmin(((Q[:, None, :] - C[None]) ** 2).sum(-1), 1)
        C = np.array([Q[lab == j].mean(0) if (lab == j).any() else C[j] for j in range(k)])
    rad, kd = [], []
    for j in range(k):
        m = np.where(lab == j)[0]; vol = 140 * len(m)
        rad.append(min(255, int(round((3 * vol / 4 / np.pi) ** (1 / 3) * 1.25 * 4))))
        vals = [kinds[A[i]] for i in m]; kd.append(max(set(vals), key=vals.count) if vals else 0)
    out['red'] = {'n': k, 'xyz': enc(C), 'kind': base64.b64encode(bytes(kd)).decode(), 'rad': base64.b64encode(bytes(rad)).decode()}
    return out, P
D = {}
def grp(table): return lambda ch: next(g for g, cs in enumerate(table) if ch in cs)
def add(key, pdb, path, chains, groups, k, membrane):
    b, dum = read(path, chains); g = grp(groups); beads = [(g(ch), p, x) for ch, p, x in b]
    P = np.array([x for _, _, x in beads]); origin = np.array([P[:, 0].mean(), P[:, 1].mean(), 0. if membrane else P[:, 2].mean()])
    out, Q = pack(beads, origin, k); D[key] = {'pdb': pdb, **out}
    nc = sum(1 for x in beads if x[1] == 3)
    print(f'{key:8} {pdb} n={len(beads)} (chlorophylls {nc}) k={k} z[{Q[:, 2].min():.0f},{Q[:, 2].max():.0f}] xy={np.abs(Q[:, :2]).max():.0f} A' + (f' membrane {min(dum):.1f}..{max(dum):.1f}' if dum else ''))
lc = lambda s: s + s.lower()
# ---- the thylakoid membrane (+z: the lumen)
add('psii', '3JCU', f'{OPM}/3jcu.pdb', lc('ABCDEFGHIJKLMNOPQRSTUWXYZ'), [lc('AD'), lc('BC'), lc('EFHIJKLMTUWXZ'), lc('OPQ'), lc('GNY'), lc('RS')], 300, True)
add('lhcii', '1RWT', f'{OPM}/1rwt.pdb', 'ABC', ['A', 'B', 'C'], 30, True)
add('b6f', '6RQF', f'{OPM}/6rqf.pdb', 'ABCDEFGHIJKLMNOP', ['ABIJ', 'CK', 'DL', 'EFGHMNOP'], 60, True)
add('psi', '4XK8', f'{OPM}/4xk8.pdb', 'ABCDEFGHIJKL1234', ['AB', 'CDE', 'FGHIJKL', '1234'], 200, True)
add('catp', '6FKF', f'{OPM}/6fkf.pdb', 'ABCDEFGHIJKLMNOPQRSTabdegp', ['ACE', 'BDF', 'ge', 'GHIJKLMNOPQRST', 'abdp'], 200, True)
# ---- the plasma membrane (+z: out, into the wall)
add('cesa', '6WLB', f'{OPM}/6wlb.pdb', 'ABC', ['A', 'B', 'C'], 50, True)
add('aha', '5KSD', f'{OPM}/5ksd.pdb', 'A', ['A'], 40, True)
add('pip', '1Z98', f'{OPM}/1z98.pdb', 'ABCD', ['A', 'B', 'C', 'D'], 30, True)
# ---- soluble: in the stroma and the lumen
add('rubisco', '1RCX', f'{PDB}/1RCX.pdb1', 'LBEHKORVSCFIMPTW', ['LBEHKORV', 'SCFIMPTW'], 60, False)
add('pc', '1AG6', f'{PDB}/1AG6.pdb', 'A', ['A'], 6, False)
X = {k: D[k]['full'] for k in ('psii', 'lhcii', 'b6f', 'psi', 'catp', 'cesa', 'aha', 'pip', 'rubisco')}
open(OUT.replace('.js', '.explorer.json'), 'w').write(json.dumps(X, separators=(',', ':')))
s = json.dumps(D, separators=(',', ':'))
open(OUT, 'w').write('// real structures at their true size (coarse_plant.py): the thylakoid machines, cellulose synthase and the proton pump and water channel of the\n// plasma membrane, turned as in the membrane (OPM); RuBisCO and plastocyanin\nObject.assign(PDB, ' + s + ');\n')
print('bytes', len(s))
