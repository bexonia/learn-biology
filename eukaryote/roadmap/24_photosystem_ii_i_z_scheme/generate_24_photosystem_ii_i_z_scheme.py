"""
generate_24_photosystem_ii_i_z_scheme.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 24:
Thylakoid Light Reactions: Photosystem II (Mn₄CaO₅ Water-Splitting), Cytochrome b₆f, Photosystem I & CF₁CFo-ATP Synthase (PDB: 5XNL / 5ZJI)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_24_photosystem_ii_i_z_scheme.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("24")
