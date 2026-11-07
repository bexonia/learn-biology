"""Coarse-grain Bacteriophage T4 structures from the Protein Data Bank for bacteriophage_realistic.html and cell_explorer.html.
Full models: one bead per amino acid (C-alpha), 0.1 A Int16 centred, base64, with a kind byte per bead = group * 4 + part (0 amino acid).
Reduced models: k-means clusters of those beads, each a ball whose volume matches its members. Biological assemblies come from BIOMT."""
import base64, json, math, random, struct, sys
PDB_DIR, OUT = sys.argv[1], sys.argv[2]

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
        k = (ch, line[22:27]); xyz = [float(line[30:38]), float(line[38:46]), float(line[46:54])]
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

def rot_to_z(u):
    norm = math.sqrt(sum(v * v for v in u))
    ux, uy, uz = u[0] / norm, u[1] / norm, u[2] / norm
    # Rodrigues rotation mapping unit vector u -> (0, 0, 1)
    cx, cy, cz = uy, -ux, 0.0
    s = math.sqrt(cx * cx + cy * cy)
    if s < 1e-8:
        return lambda p: [p[0], p[1], p[2] if uz > 0 else -p[2]]
    kx, ky = cx / s, cy / s
    k_coef = (1.0 - uz) / (s * s)
    def tf(p):
        px, py, pz = p
        # v_rot = v + C x v + k_coef * C x (C x v), where C = (uy, -ux, 0)
        cxv_x, cxv_y, cxv_z = cy * pz, -cx * pz, cx * py - cy * px
        cxcxv_x = cy * cxv_z
        cxcxv_y = -cx * cxv_z
        cxcxv_z = cx * cxv_y - cy * cxv_x
        return [px + cxv_x + k_coef * cxcxv_x, py + cxv_y + k_coef * cxcxv_y, pz + cxv_z + k_coef * cxcxv_z]
    return tf

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
    idx = rng.sample(range(n), k)
    C = [P[i][:] for i in idx]
    lab = [0] * n
    for _ in range(30):
        counts = [0] * k
        sums = [[0.0, 0.0, 0.0] for _ in range(k)]
        for i, (px, py, pz) in enumerate(P):
            best_j, best_d = 0, 1e30
            for j, (cx, cy, cz) in enumerate(C):
                d = (px - cx) ** 2 + (py - cy) ** 2 + (pz - cz) ** 2
                if d < best_d:
                    best_d = d; best_j = j
            lab[i] = best_j
            counts[best_j] += 1
            s = sums[best_j]; s[0] += px; s[1] += py; s[2] += pz
        for j in range(k):
            if counts[j] > 0:
                C[j] = [sums[j][0] / counts[j], sums[j][1] / counts[j], sums[j][2] / counts[j]]
    rad, kd = [], []
    members = [[] for _ in range(k)]
    for i, j in enumerate(lab): members[j].append(i)
    for j in range(k):
        m = members[j]
        vol = 140 * len(m)
        r = min(255, int(round((3.0 * vol / (4.0 * math.pi)) ** (1.0 / 3.0) * 1.25 * 4.0))) if m else 8
        rad.append(r)
        vals = [kinds[i] for i in m]
        kd.append(max(set(vals), key=vals.count) if vals else 0)
    red = {'n': k, 'xyz': enc(C), 'kind': base64.b64encode(bytes(kd)).decode(), 'rad': base64.b64encode(bytes(rad)).decode()}
    ext = [round(max(abs(p[i]) for p in P)) for i in range(3)]
    print(f'n={n} reduced={k} half-extent(A)={ext}')
    return full, red

OUTD = {}
def add(key, pdb, beads, k, keep_full=True):
    print(f'{key:8} ({pdb})', end=' ')
    full, red = pack(beads, k)
    OUTD[key] = {'pdb': pdb, **({'full': full} if keep_full else {}), 'red': red}

# 1. gp23: 5VF3 major capsid hexamer gp23* (chains A-F, group 0) + Soc outer cage (chains O,P,Q,R,T,V,X,Y, group 1) + Hoc spike (chains Z,z, group 2)
b_cap, _ = read_pdb(f'{PDB_DIR}/5VF3.pdb', 'ABCDEFOPQRTVXYZz')
af_pts = [x[3] for x in b_cap if x[0] in 'ABCDEF']
af_cen = [sum(p[i] for p in af_pts) / len(af_pts) for i in range(3)]
tf_gp23 = rot_to_z(af_cen)
add('gp23', '5VF3', assemble(b_cap, [], lambda ch, seq, c: 0 if ch in 'ABCDEF' else (1 if ch in 'OPQRTVXY' else 2), tf_gp23), 120)

# 2. gp24: 5VF3 pentameric vertex gp24* (chain a with 5-fold BIOMT symmetry ops 1..5, groups 0..4)
b_vtx, ops_vtx = read_pdb(f'{PDB_DIR}/5VF3.pdb', 'a')
add('gp24', '5VF3', assemble(b_vtx, ops_vtx[:5], lambda ch, seq, c: c), 90)

# 3. gp20: 3JA7 portal dodecamer (chains A-L, alternating groups 0, 1 around the 12-subunit ring)
b_por, _ = read_pdb(f'{PDB_DIR}/3JA7.pdb', 'ABCDEFGHIJKL')
add('gp20', '3JA7', assemble(b_por, [], lambda ch, seq, c: ('ABCDEFGHIJKL'.index(ch)) % 2), 160)

# 4. gp18: 3J2M contractile tail sheath hexamer ring gp18 (chains U-Z) + tail terminator hexamer gp15 (chains A-F)
# Flip z -> -z so gp15 sits at the top (+z) and gp18 below (-z)
b_sh, _ = read_pdb(f'{PDB_DIR}/3J2M.pdb', 'ABCDEFUVWXYZ')
add('gp18', '3J2M', assemble(b_sh, [], lambda ch, seq, c: 0 if ch in 'ABCDEF' else (1 + ('UVWXYZ'.index(ch) % 2)), lambda p: [p[0], -p[1], -p[2]]), 160)

# Also save a pure single hexamer ring of gp18 (U-Z only) for clean 24-ring helical stacking along the tail
b_sh_ring = [x for x in b_sh if x[0] in 'UVWXYZ']
add('gp18r', '3J2M', assemble(b_sh_ring, [], lambda ch, seq, c: 'UVWXYZ'.index(ch) % 2, lambda p: [p[0], -p[1], -p[2]]), 110)

# 5. gp19: 5W5F inner tail tube (3 stacked hexameric rings, chains A-R; groups 0, 1, 2 by ring)
b_tb, _ = read_pdb(f'{PDB_DIR}/5W5F.pdb', 'ABCDEFGHIJKLMNOPQR')
add('gp19', '5W5F', assemble(b_tb, [], lambda ch, seq, c: 0 if ch in 'BFILOR' else (1 if ch in 'ADGJMP' else 2)), 110)

# 6. gp5: 1K28 baseplate hub gp27 (chain D, group 0) + cell-puncturing needle gp5 (chain A needle/OB, group 1) + tail lysozyme (chain A 175..340, group 2)
b_hub, ops_hub = read_pdb(f'{PDB_DIR}/1K28.pdb', 'AD')
add('gp5', '1K28', assemble(b_hub, ops_hub[:3], lambda ch, seq, c: 0 if ch == 'D' else (2 if 175 <= seq <= 340 else 1)), 120)

# 7. gp37: 2XGF long tail fiber receptor-binding needle tip trimer (chains A, B, C -> groups 0, 1, 2)
b_ltf, _ = read_pdb(f'{PDB_DIR}/2XGF.pdb', 'ABC')
add('gp37', '2XGF', assemble(b_ltf, [], lambda ch, seq, c: 'ABC'.index(ch)), 45)

# 8. gp12: 1OCY short tail fiber receptor-binding domain trimer (chain A with 3 BIOMT ops -> groups 0, 1, 2)
b_stf, ops_stf = read_pdb(f'{PDB_DIR}/1OCY.pdb', 'A')
add('gp12', '1OCY', assemble(b_stf, ops_stf[:3], lambda ch, seq, c: c), 45)

# Also copy host E. coli OmpF porin (2OMF), RNAP (4YG2), and 70S ribosome (4YBB reduced) from bacterium.js for the host envelope
bact_line = next(l for l in open(OUT.replace('phage.js', 'bacterium.js')).read().split('\n') if l.startswith('const PDB = '))
bact = json.loads(bact_line[len('const PDB = '):].rstrip(';'))
OUTD['ompf'] = bact['ompf']
OUTD['rnap'] = bact['rnap']
OUTD['ribo'] = {'pdb': bact['ribo']['pdb'], 'red': bact['ribo']['red']}

X = {k: {**OUTD[k]['full'], 'pdb': OUTD[k]['pdb']} for k in ('gp23', 'gp24', 'gp20', 'gp18', 'gp19', 'gp5', 'gp37', 'gp12')}
open(OUT.replace('.js', '.explorer.json'), 'w').write(json.dumps(X, separators=(',', ':')))
s = json.dumps(OUTD, separators=(',', ':'))
open(OUT, 'w').write('const PDB = ' + s + ';\n')
print('wrote', OUT, 'bytes:', len(s))
