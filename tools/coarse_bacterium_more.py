"""More structures for the realistic bacterium (added to the PDB constant made by coarse_bacterium.py).
Membrane proteins come from OPM (opm.phar.umich.edu), already turned so the membrane normal is z: here the model's origin is put on the
membrane's mid-plane and +z points out of the cell. Ring proteins (DnaB, the beta clamp) are turned so the ring's axis is z; proteins that
sit on DNA in their structure (Pol III) so the DNA's axis is z, with the origin on that axis. Everything else is centred on its middle.
Encoding as in coarse_bacterium.py: a bead per amino acid (C-alpha) or nucleotide (phosphate), 0.1 A Int16, kind byte = group * 4 + part."""
import base64, json, struct, sys, numpy as np
RC, OPM, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
NUC = {'A', 'U', 'G', 'C', 'DA', 'DT', 'DG', 'DC'}
def read(path, chains):
    res, dum = {}, []
    for line in open(path):
        if line.startswith('HETATM') and line[17:20] == 'DUM': dum.append(float(line[46:54])); continue
        if line.startswith('ENDMDL'): break
        if not line.startswith('ATOM'): continue
        alt, ch, name, rn = line[16], line[21], line[12:16].strip(), line[17:20].strip()
        if alt not in ' A' or ch not in chains: continue
        if name in ('CA', 'P') or (name == "C4'" and rn in NUC):
            k = (ch, line[22:27]); xyz = [float(line[30:38]), float(line[38:46]), float(line[46:54])]
            if name == 'CA' and rn not in NUC: res[k] = (ch, 0, xyz)
            elif rn in NUC and (name == 'P' or k not in res): res[k] = (ch, 2, xyz)
    return list(res.values()), dum
def axes(P):   # principal axes, largest spread first
    w, v = np.linalg.eigh(np.cov((P - P.mean(0)).T)); return v[:, ::-1].T
def frame_z(z):   # a rotation (rows) that takes unit vector z to +z
    z = z / np.linalg.norm(z); a = np.array([1., 0, 0]) if abs(z[0]) < .9 else np.array([0, 1., 0])
    x = np.cross(a, z); x /= np.linalg.norm(x); return np.array([x, np.cross(z, x), z])
def enc(P): return base64.b64encode(b''.join(struct.pack('<hhh', *(int(round(v * 10)) for v in p)) for p in P)).decode()
def pack(beads, origin, rot, k, full, seed=7):
    P = (np.array([b[2] for b in beads]) - origin) @ rot.T; kinds = [b[0] * 4 + b[1] for b in beads]
    out = {}
    if full: out['full'] = {'n': len(P), 'xyz': enc(P), 'kind': base64.b64encode(bytes(kinds)).decode()}
    rng = np.random.default_rng(seed); C = P[rng.choice(len(P), k, replace=False)]
    for _ in range(40):
        lab = np.argmin(((P[:, None, :] - C[None]) ** 2).sum(-1), 1)
        C = np.array([P[lab == j].mean(0) if (lab == j).any() else C[j] for j in range(k)])
    rad, kd = [], []
    for j in range(k):
        m = lab == j; vol = sum(330 if beads[i][1] == 2 else 140 for i in np.where(m)[0])
        rad.append(min(255, int(round((3 * vol / 4 / np.pi) ** (1 / 3) * 1.25 * 4))))
        vals = [kinds[i] for i in np.where(m)[0]]; kd.append(max(set(vals), key=vals.count) if vals else 0)
    out['red'] = {'n': k, 'xyz': enc(C), 'kind': base64.b64encode(bytes(kd)).decode(), 'rad': base64.b64encode(bytes(rad)).decode()}
    return out, P
D = {}
def add(key, pdb, beads, k, full=False, origin=None, rot=None, note=''):
    P = np.array([b[2] for b in beads])
    if origin is None: origin = P.mean(0)
    if rot is None: rot = np.eye(3)
    out, Q = pack(beads, origin, rot, k, full)
    D[key] = {'pdb': pdb, **out}
    print(f'{key:6} {pdb} n={len(beads)} k={k} z[{Q[:, 2].min():.0f},{Q[:, 2].max():.0f}] xy={np.abs(Q[:, :2]).max():.0f} A {note}')
def grp(table): return lambda ch: next(g for g, cs in enumerate(table) if ch in cs)
def mem(key, pdb, chains, groups, k, mid=None, full=False):   # a membrane protein from OPM: origin on the mid-plane, +z out of the cell
    b, dum = read(f'{OPM}/{pdb.lower()}.pdb', chains); g = grp(groups)
    P = np.array([x for _, _, x in b]); z0 = mid if mid is not None else 0.
    add(key, pdb, [(g(ch), p, x) for ch, p, x in b], k, full, np.array([P[:, 0].mean(), P[:, 1].mean(), z0]), note=f'(membrane at z={z0})')
def sol(key, pdb, chains, groups, k, full=False):
    b, _ = read(f'{RC}/{pdb}.pdb', chains); g = grp(groups); add(key, pdb, [(g(ch), p, x) for ch, p, x in b], k, full)
# ---- the inner membrane
mem('atps', '6OQR', 'ABCDEFGHWXYIJLMNOPQRSa', ['ABC', 'DEF', 'GH', 'WXY', 'IJLMNOPQRS', 'a'], 450, full=True)
mem('nuo', '7NYR', 'ABDEFGHIJKLMN', ['BDEFGI', 'AHJKLMN'], 450, full=True)
mem('bo3', '1FFT', 'ABCD', ['A', 'B', 'CD'], 160)
mem('lacy', '1PV6', 'A', ['A'], 40)
mem('glpt', '1PW4', 'A', ['A'], 40)
mem('mscs', '2OAU', 'ABCDEFG', ['ABCDEFG'], 140, mid=-82)
mem('sec', '3DIN', 'ACDE', ['A', 'C', 'DE'], 150)
# ---- the outer membrane, and the pump that spans the whole envelope (origin on the inner membrane)
mem('ompa', '1BXW', 'A', ['A'], 16)
mem('bam', '5D0O', 'ABCDE', ['A', 'BCDE'], 150)
mem('lpt', '4Q35', 'AB', ['A', 'B'], 80)
mem('pump', '5O66', 'ABCDEFGHIJKLMNO', ['ABC', 'DEFGHI', 'JKL', 'MNO'], 600, full=True)
_, dum = read(f'{OPM}/5o66.pdb', ''); up = [z for z in dum if z > 100]; print('pump: outer membrane mid-plane at', round((min(up) + max(up)) / 2, 1), 'A above the inner one')
# ---- the periplasm
sol('mbp', '1ANF', 'A', ['A'], 30); sol('skp', '1SG2', 'ABC', ['ABC'], 40); sol('sura', '1M5Y', 'A', ['A'], 35)
# ---- on the DNA
sol('fis', '3IV5', 'AB', ['A', 'B'], 12, True); sol('ihf', '1IHF', 'AB', ['A', 'B'], 12, True); sol('gyr', '6RKW', 'ABCD', ['AC', 'BD'], 150, True)
# ---- the replisome
b, _ = read(f'{RC}/6QEL.pdb', 'ABCDEF'); P = np.array([x for _, _, x in b]); ax = axes(P)
add('dnab', '6QEL', [(ord(ch) - 65, p, x) for ch, p, x in b], 120, True, P.mean(0), frame_z(ax[2]), '(ring axis z)')
b, _ = read(f'{RC}/5FKV.pdb', 'ABCDEPT'); dna = np.array([x for ch, p, x in b if ch in 'PT']); clamp = np.array([x for ch, p, x in b if ch in 'BC'])
dz = axes(dna)[0]; c0 = dna.mean(0); o = c0 + dz * np.dot(clamp.mean(0) - c0, dz)   # on the DNA's axis, level with the clamp
alpha = np.array([x for ch, p, x in b if ch == 'A']).mean(0); dz = dz if np.dot(alpha - o, dz) > 0 else -dz   # +z: from the clamp toward the polymerase (the way it moves)
add('pol3', '5FKV', [({'A': 0, 'B': 1, 'C': 1, 'D': 2, 'E': 3}[ch], p, x) for ch, p, x in b if ch not in 'PT'], 120, True, o, frame_z(dz), '(DNA axis z, origin in the clamp)')
cb = [(0, p, x) for ch, p, x in b if ch in 'BC']; add('clamp', '5FKV', cb, 30, True, clamp.mean(0), frame_z(axes(clamp)[2]), '(beta clamp, ring axis z)')
sol('clampl', '3GLF', 'ABCDE', ['A', 'BCD', 'E'], 60, True)
sol('ssb', '1EYG', 'ABCD', ['ABCD'], 16, True)
sol('dnag', '1DDE', 'A', ['A'], 14, True)
# ---- the crowd: transfer RNA, free and in the ternary complex with EF-Tu (1TTT: EF-Tu chain A carries the tRNA nearest it)
b, _ = read(f'{RC}/1TTT.pdb', 'ADEF'); ca = np.array([x for ch, p, x in b if ch == 'A']).mean(0)
t = min('DEF', key=lambda c: np.linalg.norm(np.array([x for ch, p, x in b if ch == c]).mean(0) - ca)); print('ternary complex: EF-Tu A with tRNA', t)
add('tc', '1TTT', [(0 if ch == 'A' else 1, p, x) for ch, p, x in b if ch in 'A' + t], 40)
sol('trna', '1EHZ', 'A', ['A'], 9)
# the explorer's real-structure pages need every bead: those go to a file of their own, and only the page's close-ups keep theirs here
X = {k: D[k]['full'] for k in ('atps', 'pump', 'nuo', 'dnab', 'pol3', 'gyr')}; open(OUT.replace('.js', '.explorer.json'), 'w').write(json.dumps(X, separators=(',', ':')))
for k in ('atps', 'pump', 'nuo', 'gyr'): del D[k]['full']
s = json.dumps(D, separators=(',', ':'))
open(OUT, 'w').write('// more real structures (coarse_bacterium_more.py): membrane machines turned as in the membrane (OPM), the replisome, nucleoid proteins, tRNA\nObject.assign(PDB, ' + s + ');\n')
print('bytes', len(s))
