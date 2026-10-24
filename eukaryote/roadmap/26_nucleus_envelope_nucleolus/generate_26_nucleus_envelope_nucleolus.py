"""
generate_26_nucleus_envelope_nucleolus.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 26:
The Nucleus: Double Nuclear Envelope, Nuclear Lamina Meshwork, Chromatin Territories & Tripartite Nucleolus (PDB: 7R5K / 6L8Q)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_26_nucleus_envelope_nucleolus.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("26")
