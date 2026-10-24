"""
generate_30_pol_ii_mediator_preinitiation.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 30:
Transcription Factory: RNA Polymerase II, 26-Subunit Mediator Bridge, TFIID/TFIIH Pre-Initiation Complex & 5'-Capping (PDB: 7LBM / 1YTB)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_30_pol_ii_mediator_preinitiation.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("30")
