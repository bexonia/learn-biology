#!/bin/sh
# Downloads every structure file the coarse_*.py scripts read: from the RCSB Protein Data Bank into <dir>/pdb, and membrane proteins
# (already turned so the membrane normal is z) from the OPM database into <dir>/opm. Usage: sh tools/fetch_structures.sh [dir]
set -e
D=${1:-structures}
mkdir -p "$D/pdb" "$D/opm"
get() { [ -s "$2" ] || { curl -fsSL -o "$2" "$1" && echo "got $(basename "$2")"; }; }
# coarse_molecules.py: the molecules preview and the nucleus proteins of the animal and plant cells
for id in 1KX5 1I50 1AXC 1UBQ 1U8F 3KIN 1J6Z 1JFF 4PYP 1J4N 3WGU 1BMF 1HRC 1DGF \
  `# coarse_bacterium.py` 4YG2 1AON 1EFC 1DC4 1MUL 1QU7 2OMF \
  `# coarse_bacterium_more.py` 1ANF 1SG2 1M5Y 3IV5 1IHF 6RKW 6QEL 5FKV 3GLF 1EYG 1DDE 1TTT 1EHZ \
  `# coarse_plant.py` 1AG6; do
  get "https://files.rcsb.org/download/$id.pdb" "$D/pdb/$id.pdb"
done
get "https://files.rcsb.org/download/4YBB.cif" "$D/pdb/4YBB.cif"      # the 70S ribosome is too big for the .pdb format
get "https://files.rcsb.org/download/1RCX.pdb1" "$D/pdb/1RCX.pdb1"    # RuBisCO: biological assembly 1, all 16 subunits in one model
for id in 6oqr 7nyr 1fft 1pv6 1pw4 2oau 3din 1bxw 5d0o 4q35 5o66 \
  `# plant` 3jcu 1rwt 6rqf 4xk8 6fkf 6wlb 5ksd 1z98; do
  get "https://opm-assets.storage.googleapis.com/pdb/$id.pdb" "$D/opm/$id.pdb"
done
echo "done: $(ls "$D/pdb" | wc -l) PDB files, $(ls "$D/opm" | wc -l) OPM files in $D"
