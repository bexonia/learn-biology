"""
generate_32_eukaryotic_80s_ribosome_polyrna_loop.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 32:
Cytoplasmic Translation: The 80S Ribosome (60S + 40S) & Circular Closed-Loop Polysome (m⁷G–eIF4E–eIF4G–PABP–PolyA) (PDB: 4V6X / 7QP6)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_32_eukaryotic_80s_ribosome_polyrna_loop.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("32")
