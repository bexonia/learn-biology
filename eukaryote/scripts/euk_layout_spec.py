"""
euk_layout_spec.py

Shared spatial layout, biophysical role classification, and coordinate mapping
for all 36 Eukaryote scenarios (`01` through `36`).

Used identically by:
1. `render_eukaryote_expected_plates.py` (Task B: Expected Reference Diagrams — pure biological elements, no bar graphs)
2. `build_eukaryote_glbs.py` (Task A: Blender 5.2 Molecular Nodes + Biophysical 3D GLB Generator)
3. `generate_eukaryote_frontend.py` (Task C: React + Three.js `eukaryoteScenariosConfig.ts` & UI)
"""

import os
import re
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from euk_data_part1 import EUK_ELEMENTS_PART1
from euk_data_part2 import EUK_ELEMENTS_PART2
from euk_data_part3a import EUK_ELEMENTS_PART3A
from euk_data_part3b import EUK_ELEMENTS_PART3B

ALL_EUK_ELEMENTS = EUK_ELEMENTS_PART1 + EUK_ELEMENTS_PART2 + EUK_ELEMENTS_PART3A + EUK_ELEMENTS_PART3B
ALL_36_EUK_SCENARIOS = ALL_EUK_ELEMENTS


def parse_dissoc_vec(vec_str: str):
    nums = re.findall(r"[-+]?\d*\.\d+|[-+]?\d+", vec_str)
    if len(nums) >= 3:
        return [float(nums[0]), float(nums[1]), float(nums[2])]
    return [0.0, 3.0, 0.0]


def make_badge(piece_id: str, idx: int) -> str:
    raw = piece_id.replace("Piece_", "")
    parts = raw.split("_")
    if len(parts) >= 2:
        last = parts[-1]
        if len(last) <= 7:
            return last.upper()
        return last[:6].upper()
    return f"P{idx + 1}"


def classify_piece_morphology(elem: dict, idx: int, piece_tuple) -> str:
    """
    Classifies a Piece_* subunit into a specific 3D biophysical morphology class
    so both the Blender 5.2 Molecular Nodes builder and the Expected Reference plate
    render authentic, matching biological elements.
    """
    p_id, p_desc, p_pdb, p_hex, p_cname, _ = piece_tuple
    eid = elem["id"]
    layout = elem.get("layout_mode", "cytosolic_ring")
    text = f"{p_id} {p_desc} {p_pdb}".lower()

    if eid == "eukaryotic_monomers_dna_rna_rings":
        return "rdkit_cpk"

    if eid == "eukaryotic_animal_cell":
        roles = [
            "whole_shell",
            "nucleus_cutaway",
            "er_network",
            "golgi_cisternae",
            "mito_organelle",
            "vesicle_cage",
            "microtubule_25nm",
        ]
        return roles[min(idx, len(roles) - 1)]

    if eid == "kingdom_cell_comparison":
        roles = [
            "bilayer_single",
            "actin_helix",
            "cell_wall_plant",
            "chloro_organelle",
            "cell_wall_fungal",
            "bilayer_single",
        ]
        return roles[min(idx, len(roles) - 1)]

    if "bilayer" in text or "membrane" in text or "leaflet" in text or "tonoplast" in text:
        if layout in ("dual_membrane_span", "double_membrane_pore"):
            return "bilayer_upper" if idx == 0 else "bilayer_lower"
        if layout == "v_dimer_curved_membrane":
            return "bilayer_curved_v"
        return "bilayer_single"

    if "cristae" in text and ("mitochondr" in text or "micos" in text):
        return "mito_organelle"
    if "thylakoid" in text or "grana" in text or ("chloroplast" in text and "envelope" in text):
        return "chloro_organelle"
    if "cisterna" in text or "golgi" in text:
        return "golgi_cisternae"
    if "reticulum" in text or "reticulon" in text or ("rough er" in text):
        return "er_network"
    if "clathrin" in text or "copii" in text or "copi" in text or "triskelion" in text or "autophagosome" in text:
        return "vesicle_cage"
    if "axoneme" in text or "9+2" in text or "doublet" in text:
        return "axoneme_9plus2"
    if "microtubule" in text or "tubulin" in text or "centriole" in text or "spindle" in text:
        return "microtubule_25nm"
    if "actin" in text or "tropomyosin" in text or "sarcomere" in text:
        return "actin_helix"
    if "keratin" in text or "lamin" in text or "coiled-coil" in text or "collagen" in text:
        return "if_rope"
    if (
        "dna" in text
        or "rna" in text
        or "chromatin" in text
        or "nucleosome" in text
        or "cohesin" in text
        or "condensin" in text
        or "lariat" in text
        or "pcna" in text
        or "ring" in text
    ):
        return "dna_rna_ring"

    return "mn_macromolecule"


def get_piece_layout_coords(elem: dict):
    """
    Returns a list of dicts for each piece in `elem["pieces"]` containing:
      - `idx`: 0..N-1
      - `meshName`: Piece_*
      - `name`: Short readable name
      - `fullDesc`: Detailed biophysical role
      - `pdbSource`: PDB source string
      - `color`: #Hex
      - `colorName`: Taxonomy name
      - `badge`: 3-6 char badge
      - `dissocVector`: [dx, dy, dz]
      - `morphology`: morphology string from classify_piece_morphology
      - `center_three`: (x, y, z) in Three.js world space (-5.8..+5.8, -3.4..+3.4, -2.5..+2.5)
      - `spans_three`: (sx, sy, sz) bounding box size in Three.js world space
      - `use_pdb2`: bool (True if this piece should pull its primary MN chains from pdb2 vs pdb1)
    """
    pieces = elem["pieces"]
    n = len(pieces)
    layout = elem.get("layout_mode", "cytosolic_ring")
    eid = elem["id"]

    # Preset 3D coordinate templates (x_three, y_three, z_three) and spans (sx, sy, sz)
    if eid == "eukaryotic_animal_cell":
        centers = [
            (0.0, -0.5, -0.8),    # 1. PlasmaMembrane cutaway shell
            (0.0, 1.3, 0.2),      # 2. Nucleus & Nucleolus (center-top)
            (-2.6, 0.7, 0.4),     # 3. Rough & Smooth ER (perinuclear left)
            (-3.8, -1.2, 0.8),    # 4. Golgi Stack (lower-left)
            (3.4, 0.8, 0.6),      # 5. Mitochondria network (upper-right)
            (3.2, -1.8, 0.9),     # 6. Lysosomes & Peroxisomes (lower-right)
            (1.4, 2.5, -0.5),     # 7. Centrosome & Microtubules (top-right)
        ]
        spans = [
            (9.8, 6.6, 6.2),
            (3.4, 3.0, 3.0),
            (2.8, 2.4, 2.4),
            (2.6, 2.0, 2.2),
            (2.8, 2.2, 2.2),
            (2.4, 2.0, 2.0),
            (4.2, 2.6, 2.6),
        ]
    elif layout == "tri_envelopes":
        # 3 side-by-side columns: Left (Animal X=-4.2), Center (Plant X=0.0), Right (Fungal X=+4.2)
        centers = [
            (-4.2, 1.4, 0.0),
            (-4.2, -1.6, 0.0),
            (0.0, 1.5, 0.0),
            (0.0, -1.6, 0.0),
            (4.2, 1.5, 0.0),
            (4.2, -1.6, 0.0),
        ]
        spans = [
            (3.2, 2.4, 2.6),
            (3.2, 2.2, 2.6),
            (3.2, 2.5, 2.6),
            (3.2, 2.4, 2.6),
            (3.2, 2.5, 2.6),
            (3.2, 2.2, 2.6),
        ]
    elif layout in ("single_membrane_span", "v_dimer_curved_membrane"):
        centers = [
            (-3.2, 2.1, 0.0),     # Upper-left (extracellular / luminal / peripheral)
            (0.0, 0.2, 0.3),      # Central transmembrane / catalytic core
            (3.2, 2.0, 0.0),      # Upper-right partner domain
            (-3.0, -2.0, 0.2),    # Lower-left cytoplasmic / matrix domain
            (3.0, -2.0, 0.2),     # Lower-right cytoplasmic / effector domain
            (0.0, -0.2, -0.4),    # Membrane bilayer / scaffold
            (0.0, -2.8, 0.5),     # 7th piece if present (deep cytoplasmic)
        ]
        spans = [
            (2.9, 2.3, 2.3),
            (3.4, 3.2, 2.8),
            (2.9, 2.3, 2.3),
            (2.9, 2.2, 2.3),
            (2.9, 2.2, 2.3),
            (9.6, 1.5, 4.2),
            (3.2, 1.8, 2.2),
        ]
    elif layout in ("dual_membrane_span", "double_membrane_pore"):
        centers = [
            (0.0, 2.3, 0.0),      # Upper membrane / outer ring
            (-3.3, 0.6, 0.2),     # Left bridge / spoke
            (0.0, 0.1, 0.3),      # Central pore / translocon channel
            (3.3, 0.6, 0.2),      # Right bridge / partner complex
            (0.0, -2.2, 0.0),     # Lower membrane / nuclear basket / inner ring
            (0.0, -0.9, 0.9),     # Transported cargo / cytochrome c / Ran-GTP
            (0.0, 3.1, 0.5),
        ]
        spans = [
            (8.6, 1.6, 3.8),
            (2.8, 2.4, 2.4),
            (3.5, 2.8, 2.8),
            (2.8, 2.4, 2.4),
            (8.6, 1.6, 3.8),
            (2.6, 2.0, 2.2),
            (2.8, 1.8, 2.0),
        ]
    elif layout == "linear_filament":
        centers = [
            (0.0, -0.4, 0.0),     # Primary horizontal filament track (F-actin / MT / IF)
            (-3.6, 1.8, 0.2),     # Left nucleator / cap (Arp2/3 / gamma-TuRC / dimer)
            (0.0, 1.9, 0.3),      # Central motor / crosslinker (Myosin / Kinesin / tetramer)
            (3.6, 1.8, 0.2),      # Right walker / regulator (Dynein / Tropomyosin / Lamin)
            (-2.4, -2.3, 0.3),    # Lower-left accessory / cargo
            (2.4, -2.3, 0.3),     # Lower-right accessory / anchor
            (0.0, -2.6, 0.4),
        ]
        spans = [
            (9.8, 1.8, 2.2),
            (2.8, 2.3, 2.3),
            (3.1, 2.5, 2.4),
            (2.9, 2.4, 2.3),
            (2.8, 2.0, 2.2),
            (2.8, 2.0, 2.2),
            (2.8, 1.8, 2.0),
        ]
    else:
        # ring_complex, multi_cisternae, organelle_cutaway, vesicle_budding, cytosolic_ring
        centers = [
            (-3.4, 1.8, 0.0),     # Top-Left
            (0.0, 2.1, 0.2),      # Top-Center
            (3.4, 1.8, 0.0),      # Top-Right
            (-3.4, -1.7, 0.2),    # Bottom-Left
            (0.0, -1.9, 0.3),     # Bottom-Center
            (3.4, -1.7, 0.2),     # Bottom-Right
            (0.0, 0.0, 0.6),      # Center
        ]
        spans = [
            (3.1, 2.4, 2.4),
            (3.4, 2.6, 2.6),
            (3.1, 2.4, 2.4),
            (3.1, 2.4, 2.4),
            (3.4, 2.5, 2.5),
            (3.1, 2.4, 2.4),
            (3.2, 2.4, 2.4),
        ]

    out = []
    for idx, p_tuple in enumerate(pieces):
        p_id, p_desc, p_pdb, p_hex, p_cname, p_vec_str = p_tuple
        morph = classify_piece_morphology(elem, idx, p_tuple)
        c_three = centers[idx % len(centers)]
        s_three = spans[idx % len(spans)]

        # If a piece in single_membrane_span is the actual membrane bilayer, place it across y=0
        if morph == "bilayer_single" and layout == "single_membrane_span":
            c_three = (0.0, -0.15, -0.3)
            s_three = (9.6, 1.45, 4.0)
        elif morph == "bilayer_curved_v":
            c_three = (0.0, -0.6, -0.2)
            s_three = (9.2, 2.4, 3.8)

        short_name = p_desc.split("(")[0].split(":")[0].strip()
        if len(short_name) > 34:
            short_name = short_name[:32].rstrip() + "…"

        use_pdb2 = (elem["pdb2"].lower() in p_pdb.lower()) or (idx % 2 == 1)

        out.append({
            "idx": idx,
            "meshName": p_id,
            "name": short_name,
            "fullDesc": f"{p_desc}. Structural source: {p_pdb}. Color taxonomy: {p_cname} ({p_hex}).",
            "pdbSource": p_pdb,
            "color": p_hex,
            "colorName": p_cname,
            "badge": make_badge(p_id, idx),
            "dissocVector": parse_dissoc_vec(p_vec_str),
            "morphology": morph,
            "center_three": c_three,
            "spans_three": s_three,
            "use_pdb2": use_pdb2,
        })
    return out
