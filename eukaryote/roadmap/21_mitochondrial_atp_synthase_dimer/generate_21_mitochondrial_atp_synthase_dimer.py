"""
generate_21_mitochondrial_atp_synthase_dimer.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 21:
V-Shaped Mitochondrial F₁Fo-ATP Synthase Dimer & ADP/ATP Translocase (AAC) (PDB: 6ZQN / 1OKC)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_21_mitochondrial_atp_synthase_dimer.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("21")
