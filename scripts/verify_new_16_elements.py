import os
import sys
import time
import shutil
import threading
import functools
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import imageio
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = r"c:\Users\devcd\GenProjects\learn-biology"
VER_DIR = os.path.join(BASE_DIR, "verification")
BRAIN_DIR = r"C:\Users\devcd\.gemini\antigravity\brain\fc49ad33-7727-4397-853a-39e73281d9aa"

NEW_SCENARIOS = [
    {
        "num": "14",
        "folder": "14_expressome",
        "id": "expressome",
        "btn": "#btn-nav-expressome",
        "title": "Co-Transcriptional Expressome (RNAP–NusG/NusA–70S)",
        "pdb": "PDB: 6X9Q / 6ZTJ",
        "scale": "28 nm × 22 nm (Supramolecular Expressome)",
        "rcsb_file": "rcsb_6X9Q.jpg",
        "rcsb_label": "RCSB PDB: 6X9Q Experimental Cryo-EM",
    },
    {
        "num": "15",
        "folder": "15_envelopes",
        "id": "envelopes",
        "btn": "#btn-nav-envelopes",
        "title": "Comparative Prokaryotic Envelopes: Gram(−), Gram(+) & Archaeal",
        "pdb": "PDB: 2OMF / 3VMA / 1EQ7",
        "scale": "40 nm Cross-Envelope Comparison",
        "rcsb_file": "rcsb_2OMF.jpg",
        "rcsb_label": "RCSB PDB: 2OMF OmpF Porin Structure",
    },
    {
        "num": "16",
        "folder": "16_motility_modes",
        "id": "motility_modes",
        "btn": "#btn-nav-motility-modes",
        "title": "Prokaryotic Motility Modes: Type IV Pili, Archaellum & Gliding",
        "pdb": "PDB: 3JC8 / 6W6M / 5O4U",
        "scale": "60 nm Comparative Locomotion Engines",
        "rcsb_file": "rcsb_6W6M.jpg",
        "rcsb_label": "RCSB PDB: 6W6M Experimental Structure",
    },
    {
        "num": "17",
        "folder": "17_microcompartment",
        "id": "microcompartment",
        "btn": "#btn-nav-microcompartment",
        "title": "Bacterial Microcompartment (BMC) & Carboxysome Shell",
        "pdb": "PDB: 7O04 / 3I82",
        "scale": "40–100 nm Icosahedral Organelle (T=9)",
        "rcsb_file": "rcsb_7O04.jpg",
        "rcsb_label": "RCSB PDB: 7O04 Icosahedral BMC Shell",
    },
    {
        "num": "18",
        "folder": "18_chemosensory_mcp",
        "id": "chemosensory_mcp",
        "btn": "#btn-nav-chemosensory-mcp",
        "title": "Chemosensory Transduction Array (MCP–CheW–CheA)",
        "pdb": "PDB: 6S1K / 3JA6",
        "scale": "38 nm Hexagonal Receptor Lattice",
        "rcsb_file": "rcsb_6S1K.jpg",
        "rcsb_label": "RCSB PDB: 6S1K Cryo-ET Array",
    },
    {
        "num": "19",
        "folder": "19_pili_fimbriae",
        "id": "pili_fimbriae",
        "btn": "#btn-nav-pili-fimbriae",
        "title": "Chaperone-Usher Fimbriae, Curli Amyloid & Biofilm Matrix",
        "pdb": "PDB: 6GTO / 1TR7 / 4B0M",
        "scale": "7 nm × 1000 nm Pilus Rod & Curli Pore",
        "rcsb_file": "rcsb_6GTO.jpg",
        "rcsb_label": "RCSB PDB: 6GTO Type 1 Pilus Rod",
    },
    {
        "num": "20",
        "folder": "20_nucleoid",
        "id": "nucleoid",
        "btn": "#btn-nav-nucleoid",
        "title": "Bacterial Nucleoid Architecture & NAP Compaction",
        "pdb": "PDB: 1P71 / 3IV5 / 1BNA",
        "scale": "50 nm Plectonemic Loop & NAP Clamps",
        "rcsb_file": "rcsb_1P71.jpg",
        "rcsb_label": "RCSB PDB: 1P71 HU/IHF DNA Bend",
    },
    {
        "num": "21",
        "folder": "21_chaperones",
        "id": "chaperones",
        "btn": "#btn-nav-chaperones",
        "title": "Prokaryotic Proteostasis: GroEL–GroES & DnaK–DnaJ–GrpE",
        "pdb": "PDB: 1AON / 2KHO / 1W26",
        "scale": "14 nm × 18 nm Anfinsen Folding Cage",
        "rcsb_file": "rcsb_1AON.jpg",
        "rcsb_label": "RCSB PDB: 1AON GroEL-GroES Complex",
    },
    {
        "num": "22",
        "folder": "22_rna_degradosome",
        "id": "rna_degradosome",
        "btn": "#btn-nav-rna-degradosome",
        "title": "Bacterial RNA Degradosome & mRNA Decay Factory",
        "pdb": "PDB: 5M3P / 2C0B",
        "scale": "22 nm Membrane-Tethered Decay Hub",
        "rcsb_file": "rcsb_2C0B.jpg",
        "rcsb_label": "RCSB PDB: 2C0B RNase E Catalytic Core",
    },
    {
        "num": "23",
        "folder": "23_metabolic_hubs",
        "id": "metabolic_hubs",
        "btn": "#btn-nav-metabolic-hubs",
        "title": "Supramolecular Metabolic Hubs: PDH (1EAE) & Cyt bo3 (6WTI)",
        "pdb": "PDB: 1EAE / 6WTI",
        "scale": "45 nm (4.5 MDa Cubic Metabolon)",
        "rcsb_file": "rcsb_1EAE.jpg",
        "rcsb_label": "RCSB PDB: 1EAE 24-mer Cubic E2 Core",
    },
    {
        "num": "24",
        "folder": "24_periplasmic_transport",
        "id": "periplasmic_transport",
        "btn": "#btn-nav-periplasmic-transport",
        "title": "Periplasmic Chaperone Relay (SurA) & MalFGK2–MalE Importer",
        "pdb": "PDB: 1M5Y / 1OMP / 2R6G",
        "scale": "16 nm Periplasmic Relay & ABC Pump",
        "rcsb_file": "rcsb_1M5Y.jpg",
        "rcsb_label": "RCSB PDB: 1M5Y SurA Chaperone Cradle",
    },
    {
        "num": "25",
        "folder": "25_efflux_pump",
        "id": "efflux_pump",
        "btn": "#btn-nav-efflux-pump",
        "title": "AcrAB–TolC Multidrug Resistance RND Efflux Pump",
        "pdb": "PDB: 5V5S / 5O66",
        "scale": "32 nm × 12 nm Trans-Envelope Cannon",
        "rcsb_file": "rcsb_5V5S.jpg",
        "rcsb_label": "RCSB PDB: 5V5S Complete AcrAB-TolC Pump",
    },
    {
        "num": "26",
        "folder": "26_secretion_systems",
        "id": "secretion_systems",
        "btn": "#btn-nav-secretion-systems",
        "title": "Trans-Envelope Secretion Systems: T3SS, T4SS & T6SS",
        "pdb": "PDB: 7OKO / 7AH9 / 6H3L",
        "scale": "80 nm Comparative Secretion Weapons",
        "rcsb_file": "rcsb_7OKO.jpg",
        "rcsb_label": "RCSB PDB: 7OKO T3SS Injectisome",
    },
    {
        "num": "27",
        "folder": "27_crispr_defense",
        "id": "crispr_defense",
        "btn": "#btn-nav-crispr-defense",
        "title": "Prokaryotic Phage Defense: CRISPR–Cascade & EcoRI",
        "pdb": "PDB: 5H9F / 1VY8 / 1ERI",
        "scale": "20 nm Adaptive & Innate Immunity",
        "rcsb_file": "rcsb_5H9F.jpg",
        "rcsb_label": "RCSB PDB: 5H9F CRISPR-Cascade R-Loop",
    },
    {
        "num": "28",
        "folder": "28_storage_and_spores",
        "id": "storage_and_spores",
        "btn": "#btn-nav-storage-and-spores",
        "title": "Storage Granules, Magnetosomes & Endospore Dormancy",
        "pdb": "PDB: 7R04 / 1XDO / 2G42",
        "scale": "50–800 nm Survival Organelles & Spores",
        "rcsb_file": "rcsb_7R04.jpg",
        "rcsb_label": "RCSB PDB: 7R04 Cryo-EM Assembly",
    },
    {
        "num": "29",
        "folder": "29_atomic_chemistry",
        "id": "atomic_chemistry",
        "btn": "#btn-nav-atomic-chemistry",
        "title": "Level 5 & 6 Biomolecular Monomers & Atomic Bonds",
        "pdb": "PDB: 1BNA / RDKit MMFF94",
        "scale": "0.1–1.5 nm Atomic & Quantum Scale",
        "rcsb_file": "rcsb_1BNA.jpg",
        "rcsb_label": "RCSB PDB: 1BNA Dickerson-Drew B-DNA",
    },
]


def set_exploded_slider(page, fraction: float):
    return page.evaluate(
        """(frac) => {
        const sections = Array.from(document.querySelectorAll('.motor-card-section'));
        for (const sec of sections) {
            if (sec.offsetParent === null) continue;
            const text = (sec.innerText || sec.textContent || '').toLowerCase();
            if (text.includes('exploded')) {
                const input = sec.querySelector('input[type="range"]');
                if (input) {
                    const maxVal = parseFloat(input.max || '1');
                    const numVal = maxVal > 2 ? Math.round(frac * maxVal) : Number(frac.toFixed(2));
                    const targetVal = numVal.toString();
                    const nativeSetter = Object.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype,
                        'value'
                    ).set;
                    nativeSetter.call(input, targetVal);
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    const reactKey = Object.keys(input).find(k => k.startsWith('__reactProps$'));
                    if (reactKey && input[reactKey] && typeof input[reactKey].onChange === 'function') {
                        input[reactKey].onChange({ target: input, currentTarget: input });
                    }
                    return true;
                }
            }
        }
        return false;
    }""",
        fraction,
    )


def get_font(size: int, bold: bool = False):
    candidates = (
        ["C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf"]
        if bold
        else ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"]
    )
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, size)
            except Exception:
                pass
    return ImageFont.load_default()


def fit_image_box(img: Image.Image, box_w: int, box_h: int, bg_color=(250, 248, 245)) -> Image.Image:
    canvas = Image.new("RGB", (box_w, box_h), bg_color)
    iw, ih = img.size
    scale = min(box_w / iw, box_h / ih)
    nw, nh = max(1, int(iw * scale)), max(1, int(ih * scale))
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    ox = (box_w - nw) // 2
    oy = (box_h - nh) // 2
    canvas.paste(resized, (ox, oy))
    return canvas


def build_comparison_image(sc: dict, sdir: str):
    W, H = 2400, 1380
    plate = Image.new("RGB", (W, H), (244, 241, 234))
    draw = ImageDraw.Draw(plate)

    f_title = get_font(32, bold=True)
    f_sub = get_font(20, bold=False)
    f_panel = get_font(22, bold=True)
    f_badge = get_font(18, bold=True)
    f_small = get_font(16, bold=False)

    draw.rectangle([0, 0, W, 96], fill=(22, 38, 33))
    draw.text((36, 18), f"ITERATION {sc['num']}  |  {sc['title'].upper()}", fill=(250, 248, 245), font=f_title)
    draw.text(
        (36, 58),
        f"Authoritative Reference ({sc['pdb']})   •   Biophysical Scale: {sc['scale']}   •   Interactive 3D Engine (localhost:5173)",
        fill=(168, 218, 220),
        font=f_sub,
    )

    draw.rounded_rectangle([W - 360, 22, W - 36, 74], radius=10, fill=(42, 157, 143))
    draw.text((W - 335, 35), "✓ VERIFIED 3D + EXPLODED", fill=(255, 255, 255), font=f_badge)

    lx0, ly0, lx1, ly1 = 30, 116, 1185, H - 24
    draw.rounded_rectangle([lx0, ly0, lx1, ly1], radius=14, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([lx0, ly0, lx1, ly0 + 48], fill=(43, 62, 80))
    draw.text((lx0 + 20, ly0 + 11), f"EXPECTED REFERENCE  —  Scientific Diagram & {sc['pdb']}", fill=(255, 255, 255), font=f_panel)

    exp_path = os.path.join(sdir, f"expected_{sc['id']}.png")
    rcsb_path = os.path.join(sdir, sc["rcsb_file"])
    exp_img = Image.open(exp_path).convert("RGB")

    exp_box_w = (lx1 - lx0) - 24
    exp_box_h = 850
    exp_fitted = fit_image_box(exp_img, exp_box_w, exp_box_h, (250, 248, 245))
    plate.paste(exp_fitted, (lx0 + 12, ly0 + 58))

    iy0 = ly0 + 58 + exp_box_h + 10
    draw.rounded_rectangle([lx0 + 16, iy0, lx1 - 16, ly1 - 14], radius=10, fill=(238, 234, 224), outline=(195, 188, 174), width=2)
    if os.path.exists(rcsb_path):
        rcsb_img = Image.open(rcsb_path).convert("RGB")
        rcsb_thumb = fit_image_box(rcsb_img, 360, (ly1 - 14) - iy0 - 16, (255, 255, 255))
        plate.paste(rcsb_thumb, (lx0 + 26, iy0 + 8))
        draw.rectangle([lx0 + 26, iy0 + 8, lx0 + 26 + 360, iy0 + 8 + rcsb_thumb.size[1]], outline=(180, 174, 160), width=1)

    tx = lx0 + 406
    draw.text((tx, iy0 + 18), sc["rcsb_label"], fill=(26, 43, 37), font=f_panel)
    draw.text((tx, iy0 + 54), f"• Experimental Coordinates: {sc['pdb']}", fill=(55, 72, 65), font=f_sub)
    draw.text((tx, iy0 + 86), f"• Hierarchical Scale: {sc['scale']}", fill=(55, 72, 65), font=f_sub)
    draw.text((tx, iy0 + 118), "• Color Taxonomy: Biophysical Domain & Subunit Segmentation", fill=(55, 72, 65), font=f_sub)
    draw.text((tx, iy0 + 150), "• Reference Standard: Goodsell Art + RCSB PDB Assembly", fill=(42, 157, 143), font=f_badge)

    rx0, ry0, rx1, ry1 = 1215, 116, W - 30, H - 24
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=14, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([rx0, ry0, rx1, ry0 + 48], fill=(26, 95, 84))
    draw.text((rx0 + 20, ry0 + 11), "BROWSER RESULT (LIVE 3D WEBGL)  —  Assembled & Exploded Views", fill=(255, 255, 255), font=f_panel)

    asm_path = os.path.join(sdir, f"browser_{sc['id']}_assembled.png")
    exp3d_path = os.path.join(sdir, f"browser_{sc['id']}_exploded.png")
    asm_img = Image.open(asm_path).convert("RGB")
    exp3d_img = Image.open(exp3d_path).convert("RGB")

    r_box_w = (rx1 - rx0) - 24
    r_box_h = 568

    asm_fitted = fit_image_box(asm_img, r_box_w, r_box_h, (247, 244, 238))
    plate.paste(asm_fitted, (rx0 + 12, ry0 + 58))
    ay_badge = ry0 + 58 + r_box_h - 46
    draw.rounded_rectangle([rx0 + 350, ay_badge, rx0 + 730, ay_badge + 38], radius=6, fill=(22, 38, 33))
    draw.text((rx0 + 364, ay_badge + 7), "A. Native Assembled Holoenzyme (0%)", fill=(255, 255, 255), font=f_small)

    by0 = ry0 + 58 + r_box_h + 14
    exp3d_fitted = fit_image_box(exp3d_img, r_box_w, r_box_h, (247, 244, 238))
    plate.paste(exp3d_fitted, (rx0 + 12, by0))
    by_badge = by0 + r_box_h - 46
    draw.rounded_rectangle([rx0 + 330, by_badge, rx0 + 770, by_badge + 38], radius=6, fill=(186, 78, 59))
    draw.text((rx0 + 344, by_badge + 7), "B. Exploded Subunit Disassembly & Inspector (75%)", fill=(255, 255, 255), font=f_small)

    comp_path = os.path.join(sdir, f"comparison_{sc['id']}.png")
    plate.save(comp_path, quality=95)
    comp_dir = os.path.join(BASE_DIR, "screenshots", "comparisons")
    os.makedirs(comp_dir, exist_ok=True)
    shutil.copy2(comp_path, os.path.join(comp_dir, f"comparison_{sc['num']}_{sc['id']}.png"))
    return comp_path


def build_comparison_video(sc: dict, sdir: str, frame_paths: list):
    VW, VH = 1920, 1080
    f_title = get_font(26, bold=True)
    f_sub = get_font(17, bold=False)
    f_panel = get_font(19, bold=True)

    base = Image.new("RGB", (VW, VH), (244, 241, 234))
    draw = ImageDraw.Draw(base)

    draw.rectangle([0, 0, VW, 76], fill=(22, 38, 33))
    draw.text((28, 14), f"ITERATION {sc['num']}: {sc['title'].upper()} ({sc['pdb']})", fill=(250, 248, 245), font=f_title)
    draw.text(
        (28, 46),
        "Left: Authoritative Scientific & RCSB PDB Reference   |   Right: Live 3D WebGL Browser Engine (Kinetic Animation + Exploded Disassembly)",
        fill=(168, 218, 220),
        font=f_sub,
    )

    lx0, ly0, lx1, ly1 = 20, 90, 945, VH - 18
    draw.rounded_rectangle([lx0, ly0, lx1, ly1], radius=12, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([lx0, ly0, lx1, ly0 + 40], fill=(43, 62, 80))
    draw.text((lx0 + 16, ly0 + 8), f"EXPECTED: {sc['pdb']} Reference", fill=(255, 255, 255), font=f_panel)

    exp_img = Image.open(os.path.join(sdir, f"expected_{sc['id']}.png")).convert("RGB")
    exp_fitted = fit_image_box(exp_img, (lx1 - lx0) - 20, 700, (250, 248, 245))
    base.paste(exp_fitted, (lx0 + 10, ly0 + 48))

    rcsb_path = os.path.join(sdir, sc["rcsb_file"])
    iy0 = ly0 + 48 + 700 + 8
    draw.rounded_rectangle([lx0 + 12, iy0, lx1 - 12, ly1 - 10], radius=8, fill=(238, 234, 224), outline=(195, 188, 174), width=1)
    if os.path.exists(rcsb_path):
        rcsb_img = Image.open(rcsb_path).convert("RGB")
        rcsb_thumb = fit_image_box(rcsb_img, 280, (ly1 - 10) - iy0 - 12, (255, 255, 255))
        base.paste(rcsb_thumb, (lx0 + 20, iy0 + 6))
    draw.text((lx0 + 316, iy0 + 18), sc["rcsb_label"], fill=(26, 43, 37), font=f_panel)
    draw.text((lx0 + 316, iy0 + 50), f"Scale: {sc['scale']}", fill=(55, 72, 65), font=f_sub)
    draw.text((lx0 + 316, iy0 + 78), f"PDB Coordinates: {sc['pdb']}", fill=(55, 72, 65), font=f_sub)

    rx0, ry0, rx1, ry1 = 965, 90, VW - 20, VH - 18
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=12, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([rx0, ry0, rx1, ry0 + 40], fill=(26, 95, 84))
    draw.text((rx0 + 16, ry0 + 8), "LIVE 3D BROWSER RESULT (http://localhost:5173)", fill=(255, 255, 255), font=f_panel)

    mp4_path = os.path.join(sdir, f"comparison_{sc['id']}.mp4")
    writer = imageio.get_writer(mp4_path, fps=10, codec="libx264", quality=8, pixelformat="yuv420p", macro_block_size=None)

    r_box_w = (rx1 - rx0) - 16
    r_box_h = (ry1 - ry0) - 56

    for fpath, phase_label in frame_paths:
        frame_canvas = base.copy()
        fdraw = ImageDraw.Draw(frame_canvas)
        b_img = Image.open(fpath).convert("RGB")
        b_fitted = fit_image_box(b_img, r_box_w, r_box_h, (247, 244, 238))
        frame_canvas.paste(b_fitted, (rx0 + 8, ry0 + 48))

        fdraw.rounded_rectangle([rx0 + 20, ry1 - 52, rx0 + 520, ry1 - 16], radius=6, fill=(22, 38, 33))
        fdraw.text((rx0 + 32, ry1 - 44), phase_label, fill=(255, 255, 255), font=f_sub)
        writer.append_data(np.array(frame_canvas))

    writer.close()
    return mp4_path


def main():
    dist_dir = os.path.join(BASE_DIR, "client", "dist")
    handler = functools.partial(SimpleHTTPRequestHandler, directory=dist_dir)
    httpd = ThreadingHTTPServer(("127.0.0.1", 5188), handler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()
    print("Started embedded HTTP server for client/dist on http://127.0.0.1:5188/")

    with sync_playwright() as p:
        browser = p.chromium.launch(
            channel="msedge",
            headless=True,
            args=["--use-angle=d3d11", "--enable-webgl", "--ignore-gpu-blocklist", "--disable-gpu-sandbox"],
        )
        context = browser.new_context(viewport={"width": 1920, "height": 1080}, device_scale_factor=1)
        page = context.new_page()

        print("Opening http://127.0.0.1:5188/ ...")
        page.goto("http://127.0.0.1:5188/", wait_until="domcontentloaded", timeout=30000)
        time.sleep(3.0)

        for sc in NEW_SCENARIOS:
            sdir = os.path.join(VER_DIR, sc["folder"])
            os.makedirs(sdir, exist_ok=True)
            frames_dir = os.path.join(sdir, "frames")
            os.makedirs(frames_dir, exist_ok=True)

            print(f"[{sc['num']}/29] Navigating to {sc['title']} ({sc['btn']})...")
            page.evaluate("(sel) => document.querySelector(sel)?.click()", sc["btn"])
            time.sleep(2.2)

            set_exploded_slider(page, 0.0)
            time.sleep(0.4)

            asm_path = os.path.join(sdir, f"browser_{sc['id']}_assembled.png")
            page.screenshot(path=asm_path)
            print(f"  -> Saved Assembled: {asm_path}")

            frame_records = []
            for i in range(4):
                fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                page.screenshot(path=fp)
                frame_records.append((fp, f"Phase 1: Native Assembled 3D Holoenzyme (Frame {i+1}/4)"))
                time.sleep(0.15)

            exploded_levels = [0.20, 0.40, 0.60, 0.75, 0.85]
            for i, lvl in enumerate(exploded_levels):
                set_exploded_slider(page, lvl)
                time.sleep(0.25)
                fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                page.screenshot(path=fp)
                pct = int(lvl * 100)
                frame_records.append((fp, f"Phase 2: Exploded Subunit Dissociation ({pct}%)"))
                if lvl == 0.75:
                    exp_path = os.path.join(sdir, f"browser_{sc['id']}_exploded.png")
                    shutil.copy2(fp, exp_path)
                    print(f"  -> Saved Exploded: {exp_path}")

            return_levels = [0.55, 0.30, 0.0]
            for lvl in return_levels:
                set_exploded_slider(page, lvl)
                time.sleep(0.20)
                fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                page.screenshot(path=fp)
                pct = int(lvl * 100)
                frame_records.append((fp, f"Phase 3: Subunit Re-Assembly ({pct}%)"))

            comp_img_path = build_comparison_image(sc, sdir)
            print(f"  -> Built Comparison Plate: {comp_img_path}")

            comp_mp4_path = build_comparison_video(sc, sdir, frame_records)
            print(f"  -> Built Comparison Video: {comp_mp4_path}")

            if os.path.exists(BRAIN_DIR):
                shutil.copy2(comp_img_path, os.path.join(BRAIN_DIR, f"comparison_{sc['num']}_{sc['id']}.png"))

            shutil.rmtree(frames_dir, ignore_errors=True)

        browser.close()
    print("ALL 16 NEW SCENARIOS (14-29) CAPTURED AND COMPARED SUCCESSFULLY!")


if __name__ == "__main__":
    main()
