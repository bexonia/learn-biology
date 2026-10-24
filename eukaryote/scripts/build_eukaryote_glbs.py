"""
build_eukaryote_glbs.py

Headless Blender 5.2 + Molecular Nodes (`bl_ext.blender_org.molecularnodes`) + RDKit
3D `.glb` builder for all 36 Eukaryote scenarios (`01` through `36`).

Usage:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python eukaryote/scripts/build_eukaryote_glbs.py -- 01 02 03
  (Or omit arguments to build all 36 scenarios)
"""

import os
import sys
import time
import bpy

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from euk_layout_spec import ALL_EUK_ELEMENTS, get_piece_layout_coords
from euk_editorial_cell_builder import build_editorial_animal_cell_diorama
from euk_mn_builder_utils import (
    clear_scene,
    fetch_pdb_universe_cached,
    build_mn_subunit_mesh,
    build_phospholipid_bilayer_piece,
    build_cutaway_shell_piece,
    build_organelle_or_cisternae_piece,
    build_cytoskeleton_or_ring_piece,
    build_rdkit_cpk_piece,
    join_objects_as_piece,
    export_eukaryote_glb,
)

SCENARIO_36_SMILES = [
    "Nc1ncnc2c1ncn2[C@H]3C[C@H](O)[C@@H](COP(=O)(O)O)O3",  # 1. B-DNA / A-RNA nucleotide ring
    "Cn1cnc2c1c(=O)[nH]c(N)n2",                            # 2. m7G 5'-Cap & Lariat branch adenine
    "Nc1ncnc2c1ncn2[C@@H]3O[C@@H]4COP(=O)(O)O[C@H]4[C@H]3O",  # 3. 3',5'-cAMP cyclic ring
    "CC(C)CCCC(C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C",  # 4. Cholesterol 4-ring steroid
    "CC(=O)NCCCC[C@H](N)C(=O)O",                           # 5. Acetyl-L-Lysine epigenetic mark
    "Nc1ncnc2c1ncn2[C@@H]3O[C@H](COP(=O)(O)OP(=O)(O)OP(=O)(O)O)[C@@H](O)[C@H]3O",  # 6. ATP triphosphate
]

UNIVERSE_CACHE = {}


def build_single_eukaryote_scenario(target_id_or_num: str):
    elem = next(
        (e for e in ALL_EUK_ELEMENTS if e["num"] == target_id_or_num or e["id"] == target_id_or_num or e["folder"] == target_id_or_num),
        None,
    )
    if not elem:
        raise ValueError(f"Unknown Eukaryote scenario: {target_id_or_num}")

    t0 = time.time()
    print(f"\n======================================================================")
    print(f"[*] Building Eukaryote Scenario {elem['num']}: {elem['title']} ({elem['pdb1']} / {elem['pdb2']})")
    print(f"======================================================================")

    clear_scene()
    if elem["id"] == "eukaryotic_animal_cell":
        objs = build_editorial_animal_cell_diorama()
        for o in objs:
            if o is not None:
                print(f"  [+] Built 3D Editorial Diorama Piece {o.name}: {len(o.data.vertices)} verts, {len(o.data.materials)} materials")
        export_eukaryote_glb(elem)
        print(f"[OK] Completed Scenario {elem['num']} ({elem['id']}) in {time.time() - t0:.1f}s")
        return

    piece_specs = get_piece_layout_coords(elem)
    n_pieces = len(piece_specs)

    u1 = fetch_pdb_universe_cached(elem["pdb1"], UNIVERSE_CACHE)
    u2 = fetch_pdb_universe_cached(elem["pdb2"], UNIVERSE_CACHE)

    for p_spec in piece_specs:
        idx = p_spec["idx"]
        mesh_name = p_spec["meshName"]
        color_hex = p_spec["color"]
        morph = p_spec["morphology"]
        c_three = p_spec["center_three"]
        s_three = p_spec["spans_three"]
        u_primary = u2 if (p_spec["use_pdb2"] and u2 is not None) else (u1 if u1 is not None else u2)

        if morph == "rdkit_cpk":
            smiles = SCENARIO_36_SMILES[idx % len(SCENARIO_36_SMILES)]
            obj = build_rdkit_cpk_piece(smiles, mesh_name, c_three, s_three, color_hex)
            print(f"  [+] Built RDKit CPK Piece {mesh_name}: {len(obj.data.vertices)} verts")
            continue

        if morph == "whole_shell":
            obj = build_cutaway_shell_piece(mesh_name, c_three, s_three, color_hex)
            print(f"  [+] Built Whole-Cell Cutaway Shell {mesh_name}: {len(obj.data.vertices)} verts")
            continue

        if morph in ("bilayer_single", "bilayer_upper", "bilayer_lower", "bilayer_curved_v"):
            arch = 0.055 if morph == "bilayer_curved_v" else 0.0
            obj = build_phospholipid_bilayer_piece(mesh_name, c_three, s_three, color_hex=color_hex, arch_curv=arch)
            print(f"  [+] Built Phospholipid Bilayer {mesh_name}: {len(obj.data.vertices)} verts")
            continue

        if morph in (
            "golgi_cisternae",
            "er_network",
            "mito_organelle",
            "chloro_organelle",
            "nucleus_cutaway",
            "cell_wall_plant",
            "cell_wall_fungal",
            "vesicle_cage",
        ):
            org_obj = build_organelle_or_cisternae_piece(f"{mesh_name}_org", morph, c_three, s_three, color_hex)
            sub_spans = (s_three[0] * 0.55, s_three[1] * 0.55, s_three[2] * 0.55)
            mn_obj = build_mn_subunit_mesh(u_primary, f"{mesh_name}_mn", idx, n_pieces, color_hex, c_three, sub_spans)
            obj = join_objects_as_piece([org_obj, mn_obj], mesh_name, color_hex)
            print(f"  [+] Built Hybrid Organelle+MN Piece {mesh_name} ({morph}): {len(obj.data.vertices)} verts")
            continue

        if morph in ("microtubule_25nm", "actin_helix", "if_rope", "axoneme_9plus2", "dna_rna_ring"):
            fil_obj = build_cytoskeleton_or_ring_piece(f"{mesh_name}_fil", morph, c_three, s_three, color_hex)
            sub_spans = (s_three[0] * 0.52, s_three[1] * 0.52, s_three[2] * 0.52)
            mn_obj = build_mn_subunit_mesh(u_primary, f"{mesh_name}_mn", idx, n_pieces, color_hex, c_three, sub_spans)
            obj = join_objects_as_piece([fil_obj, mn_obj], mesh_name, color_hex)
            print(f"  [+] Built Hybrid Cytoskeleton/Ring+MN Piece {mesh_name} ({morph}): {len(obj.data.vertices)} verts")
            continue

        # Default `mn_macromolecule`: Pure Molecular Nodes experimental cryo-EM / crystal subunit
        obj = build_mn_subunit_mesh(u_primary, mesh_name, idx, n_pieces, color_hex, c_three, s_three)
        if obj is None:
            obj = build_cytoskeleton_or_ring_piece(mesh_name, "dna_rna_ring", c_three, s_three, color_hex)
        print(f"  [+] Built Molecular Nodes Subunit {mesh_name}: {len(obj.data.vertices)} verts")

    export_eukaryote_glb(elem)
    print(f"[OK] Completed Scenario {elem['num']} ({elem['id']}) in {time.time() - t0:.1f}s")


def main():
    argv = sys.argv
    extra_args = argv[argv.index("--") + 1 :] if "--" in argv else []
    if extra_args:
        targets = extra_args
    else:
        targets = [e["num"] for e in ALL_EUK_ELEMENTS]

    for t in targets:
        build_single_eukaryote_scenario(t)


if __name__ == "__main__":
    main()
