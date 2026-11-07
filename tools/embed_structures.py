"""Writes the coarse-grained structures made by the coarse_*.py scripts into the pages that embed them.
Run from the repository, after the coarse_*.py scripts have written structures/build/ (see tools/README.md):

    python3 tools/embed_structures.py           # write the data lines into the pages
    python3 tools/embed_structures.py --check   # only report which data lines would change
    python3 tools/embed_structures.py --check other/build   # (read the scripts' output from another folder)

Each page keeps its data on single lines that start with a fixed prefix; this script replaces exactly those lines."""
import json, re, sys
CHECK = '--check' in sys.argv
BUILD = next((a for a in sys.argv[1:] if not a.startswith('--')), 'structures/build')   # where the coarse_*.py scripts wrote
dump = lambda d: json.dumps(d, separators=(',', ':'))
def js_object(path, prefix):   # the {...} on the line of a .js file that starts with prefix
    line = next(l for l in open(path).read().split('\n') if l.startswith(prefix))
    return json.loads(line[len(prefix):].rstrip(';').rstrip(')'))
molecules = js_object(f'{BUILD}/molecules.js', 'const PROTEINS = ')
bacterium = js_object(f'{BUILD}/bacterium.js', 'const PDB = ')
bacterium_more = js_object(f'{BUILD}/bacterium_more.js', 'Object.assign(PDB, ')
plant = js_object(f'{BUILD}/plant.js', 'Object.assign(PDB, ')
fungal = js_object(f'{BUILD}/fungal.js', 'Object.assign(PDB, ')
phage = js_object(f'{BUILD}/phage.js', 'const PDB = ')
coronavirus = js_object(f'{BUILD}/coronavirus.js', 'const PDB = ')
hiv = js_object(f'{BUILD}/hiv.js', 'const PDB = ')
adenovirus = js_object(f'{BUILD}/adenovirus.js', 'const PDB = ')
tmv = js_object(f'{BUILD}/tmv.js', 'const PDB = ')
bacterium_more_x = json.load(open(f'{BUILD}/bacterium_more.explorer.json'))
plant_x = json.load(open(f'{BUILD}/plant.explorer.json'))
fungal_x = json.load(open(f'{BUILD}/fungal.explorer.json'))
phage_x = json.load(open(f'{BUILD}/phage.explorer.json'))
viruses_x = json.load(open(f'{BUILD}/viruses.explorer.json'))
nucleus = {k: molecules[k] for k in ('polII', 'pcna', 'ubiquitin')}   # the nucleus proteins of the animal, plant and fungal cells (two beads per residue)
LINES = {   # page: [(prefix of the line, the line it should be)]
    'molecules_preview.html': [('const PROTEINS = ', 'const PROTEINS = ' + dump(molecules) + ';')],
    'animal_cell_realistic.html': [('const PDB = ', 'const PDB = ' + dump(nucleus) + ';')],
    'plant_cell_realistic.html': [('const PDB = ', 'const PDB = ' + dump(nucleus) + ';'), ('Object.assign(PDB, ', 'Object.assign(PDB, ' + dump(plant) + ');'),
        ('PDB.ribo70 = ', 'PDB.ribo70 = ' + dump({'pdb': bacterium['ribo']['pdb'], 'red': bacterium['ribo']['red']}) + ';')],
    'fungal_cell_realistic.html': [('const PDB = ', 'const PDB = ' + dump(nucleus) + ';'), ('Object.assign(PDB, ', 'Object.assign(PDB, ' + dump(fungal) + ');')],
    'prokaryote_cell_realistic.html': [('const PDB = ', 'const PDB = ' + dump(bacterium) + ';'), ('Object.assign(PDB, ', 'Object.assign(PDB, ' + dump(bacterium_more) + ');')],
    'bacteriophage_realistic.html': [('const PDB = ', 'const PDB = ' + dump(phage) + ';')],
    'coronavirus_realistic.html': [('const PDB = ', 'const PDB = ' + dump(coronavirus) + ';')],
    'hiv_realistic.html': [('const PDB = ', 'const PDB = ' + dump(hiv) + ';')],
    'adenovirus_realistic.html': [('const PDB = ', 'const PDB = ' + dump(adenovirus) + ';')],
    'tmv_realistic.html': [('const PDB = ', 'const PDB = ' + dump(tmv) + ';')],
    'cell_explorer.html': [('const PDB = ', 'const PDB = ' + dump(nucleus) + ';'),
        ('const BPDB = ', 'const BPDB = ' + dump({**{k: {**bacterium[k]['full'], 'pdb': bacterium[k]['pdb']} for k in ('ribo', 'rnap', 'groel', 'hu', 'mcp')}, **bacterium_more_x}) + ';'),
        ('Object.assign(BPDB, ', 'Object.assign(BPDB, ' + dump({**plant_x, **fungal_x, **phage_x, **viruses_x}) + ');')],
}
changed = 0
for page, repl in LINES.items():
    text = open(page).read(); lines = text.split('\n')
    for prefix, new in repl:
        idx = [i for i, l in enumerate(lines) if l.startswith(prefix)]
        assert len(idx) == 1, f'{page}: expected one line starting with {prefix!r}, found {len(idx)}'
        same = lines[idx[0]] == new
        print(f'{page:32} {prefix:22} {"unchanged" if same else "CHANGED"}')
        if not same: changed += 1; lines[idx[0]] = new
    if not CHECK: open(page, 'w').write('\n'.join(lines))
print(f'{changed} data line(s) {"would change" if CHECK else "changed"}')
