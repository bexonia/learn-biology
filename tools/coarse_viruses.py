"""Coarse-grain the main types of viruses from the Protein Data Bank for coronavirus_realistic.html,
hiv_realistic.html, adenovirus_realistic.html, tmv_realistic.html, and cell_explorer.html.
Full models: one bead per amino acid (C-alpha, part 0) or nucleotide (P, part 2), 0.1 A Int16 centred, base64,
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
        if alt not in ' A' or ch not in chains or name not in ('CA', 'P'): continue
        seq = int(line[22:26])
        k = (ch, line[22:27], name)
        xyz = [float(line[30:38]), float(line[38:46]), float(line[46:54])]
        res[k] = (ch, seq, 2 if name == 'P' else 0, xyz)
    return list(res.values()), [biomt[k] for k in sorted(biomt)]

def apply_op(op, xyz):
    return [op[r][0] * xyz[0] + op[r][1] * xyz[1] + op[r][2] * xyz[2] + op[r][3] for r in range(3)]

def rot_to_z(u):
    norm = math.sqrt(sum(v * v for v in u)) or 1.0
    ux, uy, uz = u[0] / norm, u[1] / norm, u[2] / norm
    cx, cy, cz = uy, -ux, 0.0
    s = math.sqrt(cx * cx + cy * cy)
    if s < 1e-8:
        return lambda p: [p[0], p[1], p[2] if uz > 0 else -p[2]]
    k_coef = (1.0 - uz) / (s * s)
    def tf(p):
        px, py, pz = p
        cxv_x, cxv_y, cxv_z = cy * pz, -cx * pz, cx * py - cy * px
        cxcxv_x = cy * cxv_z
        cxcxv_y = -cx * cxv_z
        cxcxv_z = cx * cxv_y - cy * cxv_x
        return [px + cxv_x + k_coef * cxcxv_x, py + cxv_y + k_coef * cxcxv_y, pz + cxv_z + k_coef * cxcxv_z]
    return tf

def sym_axis_of(beads, ops):
    if not ops:
        ops = [[[1.0, 0.0, 0.0, 0.0], [0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0]]]
    groups = {}
    for c, op in enumerate(ops):
        for ch, seq, part, xyz in beads:
            g = ch if len(ops) == 1 else c
            groups.setdefault(g, []).append(apply_op(op, xyz))
    ks = sorted(groups.keys())
    cens = [[sum(p[i] for p in groups[k]) / len(groups[k]) for i in range(3)] for k in ks]
    a = [cens[1][i] - cens[0][i] for i in range(3)]
    b = [cens[2][i] - cens[0][i] for i in range(3)]
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]

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

EXPLORER = {}

def add_to(store, key, pdb, beads, k, exp_key=None):
    print(f'{key:8} ({pdb})', end=' ')
    full, red = pack(beads, k)
    store[key] = {'pdb': pdb, 'full': full, 'red': red}
    if exp_key:
        EXPLORER[exp_key] = {**full, 'pdb': pdb}

# =====================================================================
# 1. Coronavirus (SARS-CoV-2): 6VXX Spike, 5X29 E-channel, 6VYO N-protein, 6M71 RdRp, 1R42 ACE2
# =====================================================================
COV = {}
b_spk, _ = read_pdb(f'{PDB_DIR}/6VXX.pdb', 'ABC')
add_to(COV, 'spike', '6VXX', assemble(b_spk, [], lambda ch, seq, c: 'ABC'.index(ch)), 120, 'cov-spike')

b_ech, _ = read_pdb(f'{PDB_DIR}/5X29.pdb', 'ABCDE')
tf_ech = rot_to_z(sym_axis_of(b_ech, []))
add_to(COV, 'echan', '5X29', assemble(b_ech, [], lambda ch, seq, c: 'ABCDE'.index(ch), tf_ech), 45, 'cov-e')

b_ncap, _ = read_pdb(f'{PDB_DIR}/6VYO.pdb', 'ABCD')
add_to(COV, 'ncap', '6VYO', assemble(b_ncap, [], lambda ch, seq, c: 'ABCD'.index(ch)), 60, 'cov-n')

b_rdrp, _ = read_pdb(f'{PDB_DIR}/6M71.pdb', 'ABCD')
add_to(COV, 'rdrp', '6M71', assemble(b_rdrp, [], lambda ch, seq, c: 0 if ch == 'A' else (1 if ch == 'C' else 2)), 90, 'cov-rdrp')

b_ace2, _ = read_pdb(f'{PDB_DIR}/1R42.pdb', 'A')
add_to(COV, 'ace2', '1R42', assemble(b_ace2, [], lambda ch, seq, c: 0 if seq < 350 else 1), 65, 'ace2')

# =====================================================================
# 2. Retrovirus (HIV-1): 4TVP Env gp120/gp41, 1HIW Matrix MA, 3H4E CA hexamer, 3P05 CA pentamer, 1RTD RT, 1EX4 Integrase
# =====================================================================
HIV = {}
b_env, ops_env = read_pdb(f'{PDB_DIR}/4TVP.pdb', 'GB')
# Flip z -> -z so gp120 head sits at +z and gp41 stalk at -z
add_to(HIV, 'env', '4TVP', assemble(b_env, ops_env[:3], lambda ch, seq, c: c if ch == 'G' else 3, lambda p: [p[0], -p[1], -p[2]]), 100, 'hiv-env')

b_ma, _ = read_pdb(f'{PDB_DIR}/1HIW.pdb', 'ABC')
tf_ma = rot_to_z(sym_axis_of(b_ma, []))
add_to(HIV, 'ma', '1HIW', assemble(b_ma, [], lambda ch, seq, c: 'ABC'.index(ch), tf_ma), 45, 'hiv-ma')

b_cah, _ = read_pdb(f'{PDB_DIR}/3H4E.pdb', 'ABCDEF')
tf_cah = rot_to_z(sym_axis_of(b_cah, []))
add_to(HIV, 'cahex', '3H4E', assemble(b_cah, [], lambda ch, seq, c: 'ABCDEF'.index(ch) % 3, tf_cah), 90, 'hiv-ca-hex')

b_cap, _ = read_pdb(f'{PDB_DIR}/3P05.pdb', 'ABCDE')
tf_cap = rot_to_z(sym_axis_of(b_cap, []))
add_to(HIV, 'capent', '3P05', assemble(b_cap, [], lambda ch, seq, c: 'ABCDE'.index(ch), tf_cap), 75, 'hiv-ca-pent')

b_rt, _ = read_pdb(f'{PDB_DIR}/1RTD.pdb', 'ABEF')
add_to(HIV, 'rt', '1RTD', assemble(b_rt, [], lambda ch, seq, c: 0 if ch == 'A' else (1 if ch == 'B' else 2)), 85, 'hiv-rt')

b_in, _ = read_pdb(f'{PDB_DIR}/1EX4.pdb', 'AB')
add_to(HIV, 'int', '1EX4', assemble(b_in, [], lambda ch, seq, c: 'AB'.index(ch)), 55, 'hiv-in')

# =====================================================================
# 3. Non-Enveloped Icosahedral Virus (Human Adenovirus): 1P30 Hexon, 1X9T Penton base, 1QIU Fiber knob & shaft
# =====================================================================
ADV = {}
b_hex, ops_hex = read_pdb(f'{PDB_DIR}/1P30.pdb', 'A')
tf_hex = rot_to_z(sym_axis_of(b_hex, ops_hex[:3]))
add_to(ADV, 'hexon', '1P30', assemble(b_hex, ops_hex[:3], lambda ch, seq, c: c, tf_hex), 120, 'adv-hexon')

b_pen, ops_pen = read_pdb(f'{PDB_DIR}/1X9T.pdb', 'AB')
tf_pen = rot_to_z(sym_axis_of(b_pen, ops_pen[:5]))
add_to(ADV, 'penton', '1X9T', assemble(b_pen, ops_pen[:5], lambda ch, seq, c: c if ch == 'A' else 5, tf_pen), 100, 'adv-penton')

b_fib, _ = read_pdb(f'{PDB_DIR}/1QIU.pdb', 'ABC')
add_to(ADV, 'fiber', '1QIU', assemble(b_fib, [], lambda ch, seq, c: 'ABC'.index(ch), lambda p: [p[0], -p[1], -p[2]]), 65, 'adv-fiber')

# =====================================================================
# 4. Helical Rod Virus (Tobacco Mosaic Virus, TMV): 2TMV coat protein + viral RNA (17-subunit helical turn & single subunit)
# =====================================================================
TMV = {}
b_tmv, ops_tmv = read_pdb(f'{PDB_DIR}/2TMV.pdb', 'PR')
tf_tmv = rot_to_z(sym_axis_of(b_tmv, ops_tmv[:17]))
add_to(TMV, 'turn', '2TMV', assemble(b_tmv, ops_tmv[:17], lambda ch, seq, c: 3 if ch == 'R' else (c % 3), tf_tmv), 130, 'tmv-turn')
add_to(TMV, 'sub', '2TMV', assemble(b_tmv, ops_tmv[:1], lambda ch, seq, c: 1 if ch == 'R' else 0, tf_tmv), 30, 'tmv-sub')

os.makedirs(OUT_DIR, exist_ok=True)
for fname, data in [('coronavirus.js', COV), ('hiv.js', HIV), ('adenovirus.js', ADV), ('tmv.js', TMV)]:
    s = json.dumps(data, separators=(',', ':'))
    p = os.path.join(OUT_DIR, fname)
    open(p, 'w').write('const PDB = ' + s + ';\n')
    print('wrote', p, 'bytes:', len(s))

exp_path = os.path.join(OUT_DIR, 'viruses.explorer.json')
open(exp_path, 'w').write(json.dumps(EXPLORER, separators=(',', ':')))
print('wrote', exp_path, 'keys:', list(EXPLORER.keys()))
