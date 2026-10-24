"""
render_eukaryote_expected_plates.py

Generates the pure biological-element Expected Reference plates (`expected_<id>.png`, 1920x1080)
for all 36 Eukaryote scenarios (`01` through `36`) — WITHOUT any bar graphs or UI slider tables!

Each `expected_<id>.png` renders the actual biological elements (experimental RCSB PDB macromolecular
silhouettes + Goodsell domain globules, dual-leaflet phospholipid bilayers, cristae, thylakoid grana,
Golgi cisternae, clathrin/COP cages, 13-protofilament microtubules, F-actin double helices, 9+2 axonemes,
DNA/RNA topological rings, and CPK ball-and-stick conformers) at the EXACT same 2D/3D spatial coordinates
(`center_three`) and color taxonomy (`piece_hex`) used by the Blender 5.2 Molecular Nodes `.glb` builder.

Also syncs `expected_<id>.png` and `rcsb_<PDB>.jpg` into `eukaryote/verification/<NN>_<id>/` and
creates the discrete `generate_<NN>_<id>.py` wrapper script inside `eukaryote/roadmap/<NN>_<id>/`.
"""

import os
import sys
import math
import shutil
import textwrap
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image, ImageDraw, ImageFont, ImageOps

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from euk_layout_spec import ALL_EUK_ELEMENTS, get_piece_layout_coords

EUK_DIR = os.path.dirname(SCRIPT_DIR)
ROADMAP_DIR = os.path.join(EUK_DIR, "roadmap")
VER_DIR = os.path.join(EUK_DIR, "verification")


def get_font(size: int, bold: bool = False):
    candidates = (
        ["C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/calibrib.ttf"]
        if bold
        else ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/calibri.ttf"]
    )
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()


def hex_to_rgb(h: str, default=(58, 134, 255)):
    h = h.strip().lstrip("#")
    if len(h) == 6:
        try:
            return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))
        except Exception:
            pass
    return default


def shade_rgb(rgb, factor: float):
    return tuple(max(0, min(255, int(c * factor))) for c in rgb)


def tint_rgb(rgb, factor: float):
    return tuple(max(0, min(255, int(c + (255 - c) * factor))) for c in rgb)


def draw_bilayer_strip(draw: ImageDraw.ImageDraw, x0: int, x1: int, y_mid: int, half_h: int, color_hex: str, arch: float = 0.0):
    rgb = hex_to_rgb(color_hex)
    dark = shade_rgb(rgb, 0.45)
    light = tint_rgb(rgb, 0.45)
    step = 24
    cx = 0.5 * (x0 + x1)
    for x in range(x0, x1 + 1, step):
        dx = (x - cx) / max(1.0, 0.5 * (x1 - x0))
        y_off = int(arch * (dx ** 2))
        yu = y_mid - half_h + y_off
        yl = y_mid + half_h + y_off
        # Acyl tails
        draw.line([x - 4, yu + 8, x - 2, y_mid + y_off - 3], fill=dark, width=3)
        draw.line([x + 4, yu + 8, x + 2, y_mid + y_off - 3], fill=dark, width=3)
        draw.line([x - 4, yl - 8, x - 2, y_mid + y_off + 3], fill=dark, width=3)
        draw.line([x + 4, yl - 8, x + 2, y_mid + y_off + 3], fill=dark, width=3)
        # Headgroup spheres
        r = 9
        draw.ellipse([x - r, yu - r, x + r, yu + r], fill=rgb, outline=dark, width=2)
        draw.ellipse([x - 3, yu - 5, x + 2, yu - 1], fill=light)
        draw.ellipse([x - r, yl - r, x + r, yl + r], fill=rgb, outline=dark, width=2)
        draw.ellipse([x - 3, yl - 5, x + 2, yl - 1], fill=light)


def draw_morphology_element(
    canvas: Image.Image,
    draw: ImageDraw.ImageDraw,
    px: int,
    py: int,
    sx_px: int,
    sy_px: int,
    p_spec: dict,
    rcsb_img: Image.Image = None,
):
    morph = p_spec["morphology"]
    color_hex = p_spec["color"]
    rgb = hex_to_rgb(color_hex)
    dark = shade_rgb(rgb, 0.38)
    mid = shade_rgb(rgb, 0.88)
    light = tint_rgb(rgb, 0.55)
    idx = p_spec["idx"]

    if morph == "bilayer_single":
        w = max(220, int(sx_px * 0.92))
        draw_bilayer_strip(draw, px - w // 2, px + w // 2, py, 32, color_hex, arch=0.0)
        return

    if morph in ("bilayer_upper", "bilayer_lower"):
        w = max(360, int(sx_px * 0.88))
        draw_bilayer_strip(draw, px - w // 2, px + w // 2, py, 26, color_hex, arch=0.0)
        return

    if morph == "bilayer_curved_v":
        w = max(380, int(sx_px * 0.88))
        draw_bilayer_strip(draw, px - w // 2, px + w // 2, py, 28, color_hex, arch=95.0)
        return

    if morph == "whole_shell":
        rx, ry = 430, 275
        draw.pieslice([px - rx, py - ry, px + rx, py + ry], start=25, end=335, fill=tint_rgb(rgb, 0.72), outline=rgb, width=6)
        draw.pieslice([px - rx + 26, py - ry + 22, px + rx - 26, py + ry - 22], start=25, end=335, fill=(235, 244, 240), outline=dark, width=3)
        return

    if morph in ("cell_wall_plant", "cell_wall_fungal"):
        w, h = max(180, int(sx_px * 0.75)), max(90, int(sy_px * 0.55))
        x0, y0, x1, y1 = px - w // 2, py - h // 2, px + w // 2, py + h // 2
        draw.rounded_rectangle([x0, y0, x1, y1], radius=14, fill=tint_rgb(rgb, 0.65), outline=dark, width=3)
        for gy in range(y0 + 14, y1 - 8, 18):
            draw.line([x0 + 8, gy, x1 - 8, gy], fill=rgb, width=5)
        for gx in range(x0 + 18, x1 - 10, 26):
            draw.line([gx, y0 + 8, gx, y1 - 8], fill=dark, width=3)
        return

    if morph in ("golgi_cisternae", "er_network"):
        w = max(150, int(sx_px * 0.62))
        for ci in range(-2, 3):
            cy_c = py + ci * 22
            cw = w - abs(ci) * 12
            draw.rounded_rectangle([px - cw // 2, cy_c - 7, px + cw // 2, cy_c + 7], radius=8, fill=mid, outline=dark, width=3)
            # Budding coated vesicles at cisternal rims
            for side in (-1, 1):
                vx = px + side * (cw // 2 + 14)
                draw.ellipse([vx - 9, cy_c - 9, vx + 9, cy_c + 9], fill=light, outline=dark, width=2)
        return

    if morph in ("mito_organelle", "chloro_organelle", "nucleus_cutaway"):
        rx, ry = max(95, int(sx_px * 0.38)), max(68, int(sy_px * 0.34))
        draw.ellipse([px - rx, py - ry, px + rx, py + ry], fill=mid, outline=dark, width=4)
        draw.ellipse([px - rx + 12, py - ry + 10, px + rx - 12, py + ry - 10], fill=tint_rgb(rgb, 0.45), outline=dark, width=3)
        if morph == "mito_organelle":
            # Cristae invaginations
            for cx_off in range(-rx + 28, rx - 20, 26):
                draw.rounded_rectangle([px + cx_off - 6, py - ry + 12, px + cx_off + 6, py + 12], radius=5, fill=rgb, outline=dark, width=2)
        elif morph == "chloro_organelle":
            # Stacked thylakoid grana disks
            for gx in (-rx // 2, 0, rx // 2):
                for gy in (-24, -8, 8, 24):
                    draw.rounded_rectangle([px + gx - 20, py + gy - 5, px + gx + 20, py + gy + 5], radius=4, fill=rgb, outline=dark, width=2)
        else:
            # Nucleolus + chromatin + NPC pores
            draw.ellipse([px - 32, py - 28, px + 32, py + 28], fill=dark, outline=light, width=3)
        return

    if morph == "vesicle_cage":
        r = max(62, int(min(sx_px, sy_px) * 0.34))
        draw.ellipse([px - r, py - r, px + r, py + r], fill=tint_rgb(rgb, 0.50), outline=dark, width=4)
        # Polyhedral geodesic triskelion struts
        pts = []
        for i in range(6):
            ang = i * math.pi / 3.0
            pts.append((px + int(r * 0.85 * math.cos(ang)), py + int(r * 0.85 * math.sin(ang))))
        for i in range(6):
            draw.line([pts[i], pts[(i + 1) % 6]], fill=dark, width=4)
            draw.line([px, py, pts[i][0], pts[i][1]], fill=rgb, width=3)
        draw.ellipse([px - r // 3, py - r // 3, px + r // 3, py + r // 3], fill=mid, outline=dark, width=3)
        return

    if morph in ("microtubule_25nm", "actin_helix", "if_rope"):
        w = max(210, int(sx_px * 0.78))
        x0, x1 = px - w // 2, px + w // 2
        if morph == "microtubule_25nm":
            for row in (-18, -6, 6, 18):
                for bx in range(x0, x1, 20):
                    col = mid if ((bx // 20 + row) % 2 == 0) else light
                    draw.ellipse([bx - 10, py + row - 7, bx + 10, py + row + 7], fill=col, outline=dark, width=2)
        elif morph == "actin_helix":
            for bx in range(x0, x1, 16):
                t = (bx - x0) * 0.045
                for sign, col in ((1, mid), (-1, light)):
                    by = py + int(sign * 16 * math.sin(t))
                    draw.ellipse([bx - 9, by - 9, bx + 9, by + 9], fill=col, outline=dark, width=2)
        else:
            for strand in (-10, 0, 10):
                pts = [(bx, py + strand + int(8 * math.sin((bx - x0) * 0.05 + strand))) for bx in range(x0, x1, 12)]
                draw.line(pts, fill=mid if strand == 0 else dark, width=6)
        return

    if morph in ("axoneme_9plus2", "dna_rna_ring"):
        r = max(64, int(min(sx_px, sy_px) * 0.36))
        draw.ellipse([px - r, py - r, px + r, py + r], outline=dark, width=10)
        draw.ellipse([px - r, py - r, px + r, py + r], outline=mid, width=5)
        n_sub = 9 if morph == "axoneme_9plus2" else 12
        for i in range(n_sub):
            ang = 2 * math.pi * i / n_sub
            bx = px + int(r * math.cos(ang))
            by = py + int(r * math.sin(ang))
            draw.ellipse([bx - 12, by - 12, bx + 12, by + 12], fill=mid, outline=dark, width=2)
            draw.ellipse([bx - 4, by - 4, bx + 4, by + 4], fill=light)
        if morph == "axoneme_9plus2":
            draw.ellipse([px - 18, py - 12, px - 2, py + 12], fill=light, outline=dark, width=2)
            draw.ellipse([px + 2, py - 12, px + 18, py + 12], fill=light, outline=dark, width=2)
        return

    if morph == "rdkit_cpk":
        r = max(58, int(min(sx_px, sy_px) * 0.34))
        cpk_cols = [(73, 80, 87), (58, 134, 255), (230, 57, 70), (247, 127, 0), (6, 214, 160), rgb]
        ring_pts = []
        for i in range(6):
            ang = i * math.pi / 3.0 + idx * 0.3
            ax = px + int(r * 0.68 * math.cos(ang))
            ay = py + int(r * 0.68 * math.sin(ang))
            ring_pts.append((ax, ay))
        for i in range(6):
            draw.line([ring_pts[i], ring_pts[(i + 1) % 6]], fill=(140, 150, 165), width=6)
        for i, (ax, ay) in enumerate(ring_pts):
            ac = cpk_cols[(i + idx) % len(cpk_cols)]
            draw.ellipse([ax - 13, ay - 13, ax + 13, ay + 13], fill=ac, outline=(25, 30, 38), width=2)
            draw.ellipse([ax - 5, ay - 5, ax - 1, ay - 1], fill=(255, 255, 255))
        draw.ellipse([px - 15, py - 15, px + 15, py + 15], fill=rgb, outline=dark, width=3)
        return

    # Default `mn_macromolecule`: Goodsell multi-globule macromolecular complex + RCSB PDB core
    r = max(62, int(min(sx_px, sy_px) * 0.36))
    if rcsb_img is not None:
        try:
            thumb_sz = int(r * 1.75)
            gray = ImageOps.grayscale(rcsb_img.resize((thumb_sz, thumb_sz), Image.Resampling.LANCZOS))
            colorized = ImageOps.colorize(gray, black=dark, mid=rgb, white=(250, 248, 242))
            mask = Image.new("L", (thumb_sz, thumb_sz), 0)
            mdraw = ImageDraw.Draw(mask)
            mdraw.ellipse([4, 4, thumb_sz - 4, thumb_sz - 4], fill=235)
            canvas.paste(colorized, (px - thumb_sz // 2, py - thumb_sz // 2), mask)
        except Exception:
            pass

    num_beads = 18
    for i in range(num_beads):
        ang = (i / num_beads) * 2 * math.pi + idx * 0.7
        ring = 0.0 if i == 0 else (0.44 if i < 7 else 0.78)
        bx = int(px + math.cos(ang) * r * ring)
        by = int(py + math.sin(ang) * r * ring * 0.85)
        br = int(r * (0.34 if i < 7 else 0.26))
        draw.ellipse([bx - br, by - br, bx + br, by + br], fill=mid, outline=dark, width=3)
        hr = max(4, int(br * 0.38))
        draw.ellipse([bx - int(br * 0.32) - hr, by - int(br * 0.32) - hr, bx - int(br * 0.32) + hr, by - int(br * 0.32) + hr], fill=light)


def render_pure_element_expected_png(elem: dict, folder_path: str, out_path: str):
    """
    Renders a 1920x1080 scientific anatomical & macromolecular diagram of the biological elements
    (matching the 3D scene layout and color taxonomy) with ZERO bar graphs or UI slider tables.
    """
    W, H = 1920, 1080
    bg_parchment = (247, 244, 236)
    img = Image.new("RGB", (W, H), bg_parchment)
    draw = ImageDraw.Draw(img)

    f_title = get_font(34, bold=True)
    f_sub = get_font(21, bold=False)
    f_lbl_b = get_font(19, bold=True)
    f_lbl = get_font(16, bold=False)
    f_small = get_font(15, bold=False)

    # Top Title & Subtitle (matching expected_expressome.png textbook style)
    title_upper = f"SCENARIO {elem['num']} — {elem['title'].upper()}"
    if len(title_upper) > 78:
        title_upper = title_upper[:75] + "..."
    tw = draw.textlength(title_upper, font=f_title)
    draw.text(((W - tw) / 2, 26), title_upper, fill=(20, 32, 28), font=f_title)

    sub_str = f"{elem['category']}  •  Scale: {elem['scale']}  •  Experimental RCSB PDBs: {elem['pdb1']} & {elem['pdb2']}"
    sw = draw.textlength(sub_str, font=f_sub)
    draw.text(((W - sw) / 2, 72), sub_str, fill=(62, 82, 74), font=f_sub)

    # Central Biological Arena
    vcx, vcy = 960, 545
    layout = elem.get("layout_mode", "cytosolic_ring")

    # Draw subtle background biological context (membranes / filaments / compartments)
    if layout == "single_membrane_span":
        draw.rounded_rectangle([240, vcy - 44, 1680, vcy + 44], radius=22, fill=(222, 242, 234), outline=(6, 214, 160), width=2)
        draw.text((260, vcy - 74), "EXTRACELLULAR / LUMINAL COMPARTMENT", fill=(42, 135, 112), font=f_small)
        draw.text((260, vcy + 52), "CYTOPLASMIC / MATRIX COMPARTMENT", fill=(42, 135, 112), font=f_small)
    elif layout in ("dual_membrane_span", "double_membrane_pore"):
        draw.rounded_rectangle([260, vcy - 245, 1660, vcy - 185], radius=16, fill=(220, 238, 248), outline=(0, 180, 216), width=2)
        draw.rounded_rectangle([260, vcy + 185, 1660, vcy + 245], radius=16, fill=(222, 242, 234), outline=(6, 214, 160), width=2)
    elif layout == "tri_envelopes":
        for cx_col, col_lbl in [(-4.2, "ANIMAL CELL (ECM & INTEGRIN)"), (0.0, "PLANT CELL (CELLULOSE & VACUOLE)"), (4.2, "FUNGAL CELL (CHITIN & ERGOSTEROL)")]:
            x_c = int(vcx + cx_col * 115)
            draw.rounded_rectangle([x_c - 205, 165, x_c + 205, 895], radius=18, fill=(239, 235, 225), outline=(195, 188, 174), width=2)
            lw = draw.textlength(col_lbl, font=f_lbl_b)
            draw.text((x_c - lw / 2, 180), col_lbl, fill=(35, 52, 46), font=f_lbl_b)

    # Load RCSB PDB reference images if present
    pdb1_path = os.path.join(folder_path, f"rcsb_{elem['pdb1']}.jpg")
    pdb2_path = os.path.join(folder_path, f"rcsb_{elem['pdb2']}.jpg")
    rcsb1_img = Image.open(pdb1_path).convert("RGB") if os.path.exists(pdb1_path) else None
    rcsb2_img = Image.open(pdb2_path).convert("RGB") if os.path.exists(pdb2_path) else None

    piece_specs = get_piece_layout_coords(elem)

    # Draw inter-subunit biochemical interaction pathways
    screen_pts = []
    for p_spec in piece_specs:
        cx_t, cy_t, _ = p_spec["center_three"]
        px = int(vcx + cx_t * 112)
        py = int(vcy - cy_t * 98)
        screen_pts.append((px, py))

    for i in range(len(screen_pts)):
        x1, y1 = screen_pts[i]
        x2, y2 = screen_pts[(i + 1) % len(screen_pts)]
        draw.line([x1, y1, x2, y2], fill=(185, 198, 210), width=3)

    # Render each piece's biological morphology at (px, py)
    # Render background/membrane pieces first so foreground protein subunits sit cleanly on top
    render_order = sorted(
        range(len(piece_specs)),
        key=lambda k: 0 if piece_specs[k]["morphology"] in ("whole_shell", "bilayer_single", "bilayer_upper", "bilayer_lower", "bilayer_curved_v") else 1,
    )
    for i in render_order:
        p_spec = piece_specs[i]
        px, py = screen_pts[i]
        sx_t, sy_t, _ = p_spec["spans_three"]
        sx_px = int(sx_t * 95)
        sy_px = int(sy_t * 88)
        r_img = rcsb2_img if p_spec["use_pdb2"] else rcsb1_img
        draw_morphology_element(img, draw, px, py, sx_px, sy_px, p_spec, r_img)

    # Draw perimeter textbook callout labels with leader lines
    left_items = []
    right_items = []
    for i, p_spec in enumerate(piece_specs):
        px, py = screen_pts[i]
        if px < vcx - 20 or ( abs(px - vcx) <= 20 and i % 2 == 0 ):
            left_items.append((py, px, p_spec))
        else:
            right_items.append((py, px, p_spec))

    left_items.sort(key=lambda t: t[0])
    right_items.sort(key=lambda t: t[0])

    for side, items in ((-1, left_items), (1, right_items)):
        n_it = len(items)
        for rank, (py, px, p_spec) in enumerate(items):
            ly = 210 + int(rank * (620 / max(1, n_it - 1))) if n_it > 1 else py
            ly = max(185, min(835, ly))
            lx = 62 if side < 0 else W - 430
            anchor_x = lx + 355 if side < 0 else lx
            rgb = hex_to_rgb(p_spec["color"])
            dark = shade_rgb(rgb, 0.45)

            # Leader line + anchor dot on biological element
            draw.line([px, py, anchor_x, ly + 28], fill=(40, 52, 48), width=3)
            draw.ellipse([px - 6, py - 6, px + 6, py + 6], fill=rgb, outline=(255, 255, 255), width=2)

            # Clean textbook callout card
            draw.rounded_rectangle([lx, ly, lx + 355, ly + 64], radius=10, fill=(255, 253, 249), outline=rgb, width=3)
            draw.rounded_rectangle([lx + 8, ly + 10, lx + 74, ly + 36], radius=6, fill=rgb)
            draw.text((lx + 14, ly + 13), p_spec["badge"][:6], fill=(255, 255, 255) if sum(rgb) < 420 else (15, 20, 25), font=f_small)
            draw.text((lx + 82, ly + 9), p_spec["name"][:27], fill=(20, 32, 28), font=f_lbl_b)
            draw.text((lx + 12, ly + 39), f"PDB / Source: {p_spec['pdbSource'][:36]}", fill=dark, font=f_small)

    # Bottom Experimental RCSB PDB Reference Strip (no bar graphs — shows both experimental structures + key)
    draw.rounded_rectangle([48, 922, W - 48, 1054], radius=14, fill=(238, 234, 224), outline=(195, 188, 174), width=2)
    if rcsb1_img:
        t1 = ImageOps.contain(rcsb1_img, (145, 112))
        img.paste(t1, (68, 932))
    draw.text((225, 936), f"Primary Experimental Structure: PDB {elem['pdb1']}", fill=(22, 38, 33), font=f_lbl_b)
    draw.text((225, 964), elem["pdb1_label"][:52], fill=(55, 72, 65), font=f_lbl)
    draw.text((225, 992), f"Source: https://www.rcsb.org/structure/{elem['pdb1']}", fill=(15, 118, 110), font=f_small)

    if rcsb2_img:
        t2 = ImageOps.contain(rcsb2_img, (145, 112))
        img.paste(t2, (980, 932))
    draw.text((1138, 936), f"Companion Experimental Structure: PDB {elem['pdb2']}", fill=(22, 38, 33), font=f_lbl_b)
    draw.text((1138, 964), elem["pdb2_label"][:52], fill=(55, 72, 65), font=f_lbl)
    draw.text((1138, 992), f"Source: https://www.rcsb.org/structure/{elem['pdb2']}", fill=(15, 118, 110), font=f_small)

    img.save(out_path, "PNG", optimize=True)


def write_discrete_roadmap_generator(elem: dict, r_folder: str):
    """Writes `generate_<NN>_<id>.py` inside `eukaryote/roadmap/<NN>_<id>/`."""
    script_path = os.path.join(r_folder, f"generate_{elem['num']}_{elem['id']}.py")
    code = f'''"""
generate_{elem['num']}_{elem['id']}.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario {elem['num']}:
{elem['title']} (PDB: {elem['pdb1']} / {elem['pdb2']})

Run with:
  & "C:\\Program Files\\Blender Foundation\\Blender 5.2\\blender.exe" --background --python generate_{elem['num']}_{elem['id']}.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("{elem['num']}")
'''
    with open(script_path, "w", encoding="utf-8") as f:
        f.write(code)


def process_one(elem: dict):
    r_folder = os.path.join(ROADMAP_DIR, elem["folder"])
    v_folder = os.path.join(VER_DIR, elem["folder"])
    os.makedirs(r_folder, exist_ok=True)
    os.makedirs(v_folder, exist_ok=True)

    exp_r = os.path.join(r_folder, f"expected_{elem['id']}.png")
    render_pure_element_expected_png(elem, r_folder, exp_r)

    # Copy expected_<id>.png and rcsb_<PDB>.jpg into eukaryote/verification/<NN>_<id>/
    shutil.copy2(exp_r, os.path.join(v_folder, f"expected_{elem['id']}.png"))
    for pdb_key in ("pdb1", "pdb2"):
        pdb_id = elem[pdb_key]
        src_jpg = os.path.join(r_folder, f"rcsb_{pdb_id}.jpg")
        if os.path.exists(src_jpg):
            shutil.copy2(src_jpg, os.path.join(v_folder, f"rcsb_{pdb_id}.jpg"))

    write_discrete_roadmap_generator(elem, r_folder)
    return elem["num"], elem["folder"]


def main():
    os.makedirs(VER_DIR, exist_ok=True)
    with ThreadPoolExecutor(max_workers=8) as ex:
        futs = [ex.submit(process_one, e) for e in ALL_EUK_ELEMENTS]
        for fut in as_completed(futs):
            num, folder = fut.result()
            print(f"  [OK] Rendered pure-element expected plate & verification folder: {num} -> {folder}")
    print("\nAll 36 pure-element Expected Reference plates (`expected_<id>.png`) generated without bar graphs!")


if __name__ == "__main__":
    main()
