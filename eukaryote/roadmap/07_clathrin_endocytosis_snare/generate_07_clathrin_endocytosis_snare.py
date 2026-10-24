"""
generate_07_clathrin_endocytosis_snare.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 07:
Clathrin Triskelion Cage, Dynamin Scission Ring & SNARE Membrane Fusion (PDB: 1XI4 / 1SFC)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_07_clathrin_endocytosis_snare.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("07")
