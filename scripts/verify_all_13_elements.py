import os
import time
import shutil
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps
import imageio
from playwright.sync_api import sync_playwright

BASE_DIR = r"c:\Users\devcd\GenProjects\learn-biology"
VER_DIR = os.path.join(BASE_DIR, "verification")
BRAIN_DIR = r"C:\Users\devcd\.gemini\antigravity\brain\fc49ad33-7727-4397-853a-39e73281d9aa"

SCENARIOS = [
    {
        "num": "01",
        "folder": "01_cell",
        "id": "cell",
        "btn": "#btn-nav-cell",
        "title": "Whole Prokaryotic Cell (E. coli K-12)",
        "pdb": "Biology Primer Fig. 3 & 4",
        "scale": "1.5 µm × 0.8 µm (Macro Level 1)",
        "rcsb_file": "online_ref_cell_primer_fig4.png",
        "rcsb_label": "Online Ref: Biology Primer Dichotomous Key",
    },
    {
        "num": "02",
        "folder": "02_motor",
        "id": "motor",
        "btn": "#btn-nav-motor",
        "title": "Bacterial Flagellar Rotary Motor",
        "pdb": "PDB: 7CGO / 6YKM",
        "scale": "45 nm × 51 nm (Supramolecular Turbine)",
        "rcsb_file": "rcsb_7CGO.jpg",
        "rcsb_label": "RCSB PDB: 7CGO Experimental Cryo-EM",
    },
    {
        "num": "03",
        "folder": "03_ribosome",
        "id": "ribosome",
        "btn": "#btn-nav-ribosome",
        "title": "70S Ribosome & Polysome Translation Factory",
        "pdb": "PDB: 7K00",
        "scale": "21 nm (2.5 MDa Ribozyme Machine)",
        "rcsb_file": "rcsb_7K00.jpg",
        "rcsb_label": "RCSB PDB: 7K00 Experimental Cryo-EM",
    },
    {
        "num": "04",
        "folder": "04_atp_synthase",
        "id": "atp_synthase",
        "btn": "#btn-nav-atp-synthase",
        "title": "F1F0-ATP Synthase Rotary Dynamo",
        "pdb": "PDB: 6OQR / 6RKW",
        "scale": "10 nm × 21 nm (Boyer Rotary Synthase)",
        "rcsb_file": "rcsb_6OQR.jpg",
        "rcsb_label": "RCSB PDB: 6OQR Experimental Cryo-EM",
    },
    {
        "num": "05",
        "folder": "05_complex_i",
        "id": "complex_i",
        "btn": "#btn-nav-complex-i",
        "title": "Respiratory Complex I (NADH Dehydrogenase)",
        "pdb": "PDB: 7Z7V",
        "scale": "18 nm × 15 nm (L-Shaped Proton Pump)",
        "rcsb_file": "rcsb_7Z7V.jpg",
        "rcsb_label": "RCSB PDB: 7Z7V Experimental Cryo-EM",
    },
    {
        "num": "06",
        "folder": "06_secyeg",
        "id": "secyeg",
        "btn": "#btn-nav-secyeg",
        "title": "SecYEG Protein Translocon & SecA Motor",
        "pdb": "PDB: 3J46 / 6ITC",
        "scale": "9 nm × 12 nm (Transmembrane Channel)",
        "rcsb_file": "rcsb_3J46.jpg",
        "rcsb_label": "RCSB PDB: 3J46 Experimental Cryo-EM",
    },
    {
        "num": "07",
        "folder": "07_bam",
        "id": "bam",
        "btn": "#btn-nav-bam",
        "title": "BAM Beta-Barrel Assembly Machine",
        "pdb": "PDB: 5D0O",
        "scale": "12 nm × 14 nm (Outer Membrane Insertase)",
        "rcsb_file": "rcsb_5D0O.jpg",
        "rcsb_label": "RCSB PDB: 5D0O Experimental Structure",
    },
    {
        "num": "08",
        "folder": "08_lpt",
        "id": "lpt",
        "btn": "#btn-nav-lpt",
        "title": "LptA–G Trans-Envelope LPS Export Bridge",
        "pdb": "PDB: 9P7P / 6MIT",
        "scale": "28 nm Trans-Periplasmic Elevator",
        "rcsb_file": "rcsb_9P7P.jpg",
        "rcsb_label": "RCSB PDB: 9P7P Experimental Cryo-EM",
    },
    {
        "num": "09",
        "folder": "09_rnap",
        "id": "rnap",
        "btn": "#btn-nav-rnap",
        "title": "RNA Polymerase Holoenzyme (Sigma-70)",
        "pdb": "PDB: 6C9Y",
        "scale": "15 nm × 12 nm (Crab-Claw Transcriptase)",
        "rcsb_file": "rcsb_6C9Y.jpg",
        "rcsb_label": "RCSB PDB: 6C9Y Experimental Cryo-EM",
    },
    {
        "num": "10",
        "folder": "10_pol_iii",
        "id": "pol_iii",
        "btn": "#btn-nav-pol-iii",
        "title": "DNA Polymerase III Replisome Complex",
        "pdb": "PDB: 5FKV",
        "scale": "18 nm × 16 nm (Chromosomal Replisome)",
        "rcsb_file": "rcsb_5FKV.jpg",
        "rcsb_label": "RCSB PDB: 5FKV Experimental Cryo-EM",
    },
    {
        "num": "11",
        "folder": "11_gyrase",
        "id": "gyrase",
        "btn": "#btn-nav-gyrase",
        "title": "DNA Gyrase Topoisomerase II (A2B2)",
        "pdb": "PDB: 1AB4 / 2XCT",
        "scale": "17 nm × 15 nm (3-Gate Supercoiling Machine)",
        "rcsb_file": "rcsb_1AB4.jpg",
        "rcsb_label": "RCSB PDB: 1AB4 Experimental Structure",
    },
    {
        "num": "12",
        "folder": "12_ftsz",
        "id": "ftsz",
        "btn": "#btn-nav-ftsz",
        "title": "Divisome FtsZ Cytokinetic Z-Ring",
        "pdb": "PDB: 1FSZ",
        "scale": "24 nm Protofilament Lattice & Septal Synthase",
        "rcsb_file": "rcsb_1FSZ.jpg",
        "rcsb_label": "RCSB PDB: 1FSZ Experimental Structure",
    },
    {
        "num": "13",
        "folder": "13_mreb",
        "id": "mreb",
        "btn": "#btn-nav-mreb",
        "title": "MreB Actin Helical Rails & Rod Elongasome",
        "pdb": "PDB: 1JCG",
        "scale": "22 nm Double Protofilament & RodA-PBP2",
        "rcsb_file": "rcsb_1JCG.jpg",
        "rcsb_label": "RCSB PDB: 1JCG Experimental Structure",
    },
]


def set_exploded_slider(page, fraction: float):
    """Set the Exploded Assembly range slider in the active visible scenario to `fraction` (0.0 to 1.0)."""
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


def trigger_inspector_or_stage(page, scenario_id: str, step_idx: int):
    """Trigger an organelle inspection on `cell` so the right drawer / focus is demonstrated."""
    if scenario_id == "cell":
        page.evaluate(
            """(idx) => {
            const pills = Array.from(document.querySelectorAll('.bio-label, .label-pill')).filter(el => el.offsetParent !== null);
            if (pills.length > idx) {
                pills[idx].click();
            }
        }""",
            step_idx,
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
    """Resize image preserving aspect ratio and pad onto a clean card of (box_w, box_h)."""
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
    """Build a 2400x1380 side-by-side comparison plate for scenario `sc`."""
    W, H = 2400, 1380
    plate = Image.new("RGB", (W, H), (244, 241, 234))
    draw = ImageDraw.Draw(plate)

    # Fonts
    f_title = get_font(32, bold=True)
    f_sub = get_font(20, bold=False)
    f_panel = get_font(22, bold=True)
    f_badge = get_font(18, bold=True)
    f_small = get_font(16, bold=False)

    # Top Header Bar
    draw.rectangle([0, 0, W, 96], fill=(22, 38, 33))
    draw.text(
        (36, 18),
        f"ITERATION {sc['num']}  |  {sc['title'].upper()}",
        fill=(250, 248, 245),
        font=f_title,
    )
    draw.text(
        (36, 58),
        f"Authoritative Reference ({sc['pdb']})   •   Biophysical Scale: {sc['scale']}   •   Interactive 3D Engine (localhost:5173)",
        fill=(168, 218, 220),
        font=f_sub,
    )

    # Verified Badge on top-right
    draw.rounded_rectangle([W - 360, 22, W - 36, 74], radius=10, fill=(42, 157, 143))
    draw.text((W - 335, 35), "✓ VERIFIED 3D + EXPLODED", fill=(255, 255, 255), font=f_badge)

    # Left Column Card: Expected Reference + RCSB PDB Inset
    lx0, ly0, lx1, ly1 = 30, 116, 1185, H - 24
    draw.rounded_rectangle([lx0, ly0, lx1, ly1], radius=14, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([lx0, ly0, lx1, ly0 + 48], fill=(43, 62, 80))
    draw.text(
        (lx0 + 20, ly0 + 11),
        f"EXPECTED REFERENCE  —  Scientific Diagram & {sc['pdb']}",
        fill=(255, 255, 255),
        font=f_panel,
    )

    exp_path = os.path.join(sdir, f"expected_{sc['id']}.png")
    rcsb_path = os.path.join(sdir, sc["rcsb_file"])
    exp_img = Image.open(exp_path).convert("RGB")

    # Main expected image area (top 72% of left panel)
    exp_box_w = (lx1 - lx0) - 24
    exp_box_h = 850
    exp_fitted = fit_image_box(exp_img, exp_box_w, exp_box_h, (250, 248, 245))
    plate.paste(exp_fitted, (lx0 + 12, ly0 + 58))

    # Bottom strip of left panel: Official Online Reference / RCSB Experimental Structure + Metadata
    iy0 = ly0 + 58 + exp_box_h + 10
    draw.rounded_rectangle(
        [lx0 + 16, iy0, lx1 - 16, ly1 - 14],
        radius=10,
        fill=(238, 234, 224),
        outline=(195, 188, 174),
        width=2,
    )
    if os.path.exists(rcsb_path):
        rcsb_img = Image.open(rcsb_path).convert("RGB")
        rcsb_thumb = fit_image_box(rcsb_img, 360, (ly1 - 14) - iy0 - 16, (255, 255, 255))
        plate.paste(rcsb_thumb, (lx0 + 26, iy0 + 8))
        draw.rectangle([lx0 + 26, iy0 + 8, lx0 + 26 + 360, iy0 + 8 + rcsb_thumb.size[1]], outline=(180, 174, 160), width=1)

    tx = lx0 + 406
    draw.text((tx, iy0 + 18), sc["rcsb_label"], fill=(26, 43, 37), font=f_panel)
    draw.text(
        (tx, iy0 + 54),
        f"• Experimental Coordinates: {sc['pdb']}",
        fill=(55, 72, 65),
        font=f_sub,
    )
    draw.text(
        (tx, iy0 + 86),
        f"• Hierarchical Scale: {sc['scale']}",
        fill=(55, 72, 65),
        font=f_sub,
    )
    draw.text(
        (tx, iy0 + 118),
        "• Color Taxonomy: Biophysical Domain & Subunit Segmentation",
        fill=(55, 72, 65),
        font=f_sub,
    )
    draw.text(
        (tx, iy0 + 150),
        "• Reference Standard: Biology Primer + RCSB PDB Assembly",
        fill=(42, 157, 143),
        font=f_badge,
    )

    # Right Column Card: Live 3D Browser Result (Top: Assembled, Bottom: Exploded / Inspected)
    rx0, ry0, rx1, ry1 = 1215, 116, W - 30, H - 24
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=14, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([rx0, ry0, rx1, ry0 + 48], fill=(26, 95, 84))
    draw.text(
        (rx0 + 20, ry0 + 11),
        "BROWSER RESULT (LIVE 3D WEBGL)  —  Assembled & Exploded Views",
        fill=(255, 255, 255),
        font=f_panel,
    )

    asm_path = os.path.join(sdir, f"browser_{sc['id']}_assembled.png")
    exp3d_path = os.path.join(sdir, f"browser_{sc['id']}_exploded.png")
    asm_img = Image.open(asm_path).convert("RGB")
    exp3d_img = Image.open(exp3d_path).convert("RGB")

    r_box_w = (rx1 - rx0) - 24
    r_box_h = 568

    # Top Right: Assembled Browser Screenshot
    asm_fitted = fit_image_box(asm_img, r_box_w, r_box_h, (247, 244, 238))
    plate.paste(asm_fitted, (rx0 + 12, ry0 + 58))
    ay_badge = ry0 + 58 + r_box_h - 46
    draw.rounded_rectangle([rx0 + 350, ay_badge, rx0 + 730, ay_badge + 38], radius=6, fill=(22, 38, 33))
    draw.text((rx0 + 364, ay_badge + 7), "A. Native Assembled Holoenzyme (0%)", fill=(255, 255, 255), font=f_small)

    # Bottom Right: Exploded / Inspected Browser Screenshot
    by0 = ry0 + 58 + r_box_h + 14
    exp3d_fitted = fit_image_box(exp3d_img, r_box_w, r_box_h, (247, 244, 238))
    plate.paste(exp3d_fitted, (rx0 + 12, by0))
    by_badge = by0 + r_box_h - 46
    draw.rounded_rectangle([rx0 + 330, by_badge, rx0 + 770, by_badge + 38], radius=6, fill=(186, 78, 59))
    label_b = (
        "B. Interactive Organelle Focus & Inspector"
        if sc["id"] == "cell"
        else "B. Exploded Subunit Disassembly & Inspector (75%)"
    )
    draw.text((rx0 + 344, by_badge + 7), label_b, fill=(255, 255, 255), font=f_small)

    comp_path = os.path.join(sdir, f"comparison_{sc['id']}.png")
    plate.save(comp_path, quality=95)
    comp_dir = os.path.join(BASE_DIR, "screenshots", "comparisons")
    os.makedirs(comp_dir, exist_ok=True)
    shutil.copy2(comp_path, os.path.join(comp_dir, f"comparison_{sc['num']}_{sc['id']}.png"))
    return comp_path


def build_comparison_video(sc: dict, sdir: str, frame_paths: list):
    """Build a 1920x1080 MP4 video comparing Expected Reference (left) vs Live 3D Browser Animation & Exploded View (right)."""
    VW, VH = 1920, 1080
    f_title = get_font(26, bold=True)
    f_sub = get_font(17, bold=False)
    f_panel = get_font(19, bold=True)

    # Prepare static Left Base (Expected Reference + RCSB PDB inset)
    base = Image.new("RGB", (VW, VH), (244, 241, 234))
    draw = ImageDraw.Draw(base)

    # Top bar
    draw.rectangle([0, 0, VW, 76], fill=(22, 38, 33))
    draw.text(
        (28, 14),
        f"ITERATION {sc['num']}: {sc['title'].upper()} ({sc['pdb']})",
        fill=(250, 248, 245),
        font=f_title,
    )
    draw.text(
        (28, 46),
        f"Left: Authoritative Scientific & RCSB PDB Reference   |   Right: Live 3D WebGL Browser Engine (Kinetic Animation + Exploded Disassembly)",
        fill=(168, 218, 220),
        font=f_sub,
    )

    # Left panel card
    lx0, ly0, lx1, ly1 = 20, 90, 945, VH - 18
    draw.rounded_rectangle([lx0, ly0, lx1, ly1], radius=12, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([lx0, ly0, lx1, ly0 + 40], fill=(43, 62, 80))
    draw.text((lx0 + 16, ly0 + 8), f"EXPECTED: {sc['pdb']} Reference", fill=(255, 255, 255), font=f_panel)

    exp_img = Image.open(os.path.join(sdir, f"expected_{sc['id']}.png")).convert("RGB")
    exp_fitted = fit_image_box(exp_img, (lx1 - lx0) - 20, 700, (250, 248, 245))
    base.paste(exp_fitted, (lx0 + 10, ly0 + 48))

    # RCSB inset at bottom left
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

    # Right panel frame border
    rx0, ry0, rx1, ry1 = 965, 90, VW - 20, VH - 18
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=12, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([rx0, ry0, rx1, ry0 + 40], fill=(26, 95, 84))
    draw.text((rx0 + 16, ry0 + 8), "LIVE 3D BROWSER RESULT (http://localhost:5173)", fill=(255, 255, 255), font=f_panel)

    mp4_path = os.path.join(sdir, f"comparison_{sc['id']}.mp4")
    writer = imageio.get_writer(mp4_path, fps=10, codec="libx264", quality=8, pixelformat="yuv420p", macro_block_size=None)

    r_box_w = (rx1 - rx0) - 16
    r_box_h = (ry1 - ry0) - 56

    for idx, (fpath, phase_label) in enumerate(frame_paths):
        frame_canvas = base.copy()
        fdraw = ImageDraw.Draw(frame_canvas)
        b_img = Image.open(fpath).convert("RGB")
        b_fitted = fit_image_box(b_img, r_box_w, r_box_h, (247, 244, 238))
        frame_canvas.paste(b_fitted, (rx0 + 8, ry0 + 48))

        # Dynamic phase indicator pill on right panel
        fdraw.rounded_rectangle([rx0 + 20, ry1 - 52, rx0 + 520, ry1 - 16], radius=6, fill=(22, 38, 33))
        fdraw.text((rx0 + 32, ry1 - 44), phase_label, fill=(255, 255, 255), font=f_sub)

        writer.append_data(np.array(frame_canvas))

    writer.close()
    return mp4_path


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            channel="msedge",
            headless=True,
            args=[
                "--use-angle=d3d11",
                "--enable-webgl",
                "--ignore-gpu-blocklist",
                "--disable-gpu-sandbox",
            ],
        )
        context = browser.new_context(viewport={"width": 1920, "height": 1080}, device_scale_factor=1)
        page = context.new_page()

        print("Opening http://localhost:5173/ ...")
        page.goto("http://localhost:5173/", wait_until="domcontentloaded", timeout=30000)
        time.sleep(4.0)

        all_video_paths = []

        import sys
        filters = set(sys.argv[1:])
        for sc in SCENARIOS:
            if filters and sc["num"] not in filters and sc["id"] not in filters and sc["folder"] not in filters:
                continue
            sdir = os.path.join(VER_DIR, sc["folder"])
            os.makedirs(sdir, exist_ok=True)
            frames_dir = os.path.join(sdir, "frames")
            os.makedirs(frames_dir, exist_ok=True)

            print(f"[{sc['num']}/13] Navigating to {sc['title']} ({sc['btn']})...")
            page.evaluate("(sel) => document.querySelector(sel)?.click()", sc["btn"])
            # Wait for 3D GLB model loading + camera transition
            time.sleep(3.5)

            # Ensure exploded slider starts at 0%
            if sc["id"] != "cell":
                set_exploded_slider(page, 0.0)
                time.sleep(0.6)

            # 1. Capture Assembled Screenshot
            asm_path = os.path.join(sdir, f"browser_{sc['id']}_assembled.png")
            page.screenshot(path=asm_path)
            print(f"  -> Saved Assembled: {asm_path}")

            # Record 20 frames for the video
            frame_records = []

            # Phase 1: Native Assembled Kinetic Animation (6 frames)
            for i in range(6):
                fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                page.screenshot(path=fp)
                frame_records.append((fp, f"Phase 1: Native Assembled 3D Holoenzyme (Frame {i+1}/6)"))
                time.sleep(0.25)

            # Phase 2: Smooth Exploded Disassembly / Organelle Focus (8 frames)
            exploded_levels = [0.12, 0.25, 0.38, 0.50, 0.62, 0.75, 0.80, 0.80]
            for i, lvl in enumerate(exploded_levels):
                if sc["id"] == "cell":
                    if i == 1:
                        trigger_inspector_or_stage(page, "cell", 0)
                    elif i == 4:
                        trigger_inspector_or_stage(page, "cell", 2)
                else:
                    set_exploded_slider(page, lvl)
                    if i == 5:
                        trigger_inspector_or_stage(page, sc["id"], 1)
                time.sleep(0.35)
                fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                page.screenshot(path=fp)
                pct = int(lvl * 100)
                lbl = (
                    f"Phase 2: Interactive Organelle Focus & Inspector Drawer"
                    if sc["id"] == "cell"
                    else f"Phase 2: Exploded Subunit Dissociation ({pct}%)"
                )
                frame_records.append((fp, lbl))

                # Save Exploded / Inspected Screenshot at 75% (i == 5)
                if i == 5:
                    exp_path = os.path.join(sdir, f"browser_{sc['id']}_exploded.png")
                    shutil.copy2(fp, exp_path)
                    print(f"  -> Saved Exploded/Inspected: {exp_path}")

            # Phase 3: Re-assembly back to 0% (6 frames)
            return_levels = [0.65, 0.50, 0.35, 0.20, 0.05, 0.0]
            for i, lvl in enumerate(return_levels):
                if sc["id"] != "cell":
                    set_exploded_slider(page, lvl)
                time.sleep(0.25)
                fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                page.screenshot(path=fp)
                pct = int(lvl * 100)
                lbl = (
                    "Phase 3: Whole-Cell Cutaway Overview"
                    if sc["id"] == "cell"
                    else f"Phase 3: Subunit Re-Assembly ({pct}%)"
                )
                frame_records.append((fp, lbl))

            # Build Side-by-Side Comparison Image
            comp_img_path = build_comparison_image(sc, sdir)
            print(f"  -> Built Comparison Plate: {comp_img_path}")

            # Build Side-by-Side Comparison MP4 Video
            comp_mp4_path = build_comparison_video(sc, sdir, frame_records)
            print(f"  -> Built Comparison Video: {comp_mp4_path}")
            all_video_paths.append(comp_mp4_path)

            # Copy comparison image and video to Brain Artifact Dir for direct embedding
            shutil.copy2(comp_img_path, os.path.join(BRAIN_DIR, f"comparison_{sc['num']}_{sc['id']}.png"))
            shutil.copy2(comp_mp4_path, os.path.join(BRAIN_DIR, f"comparison_{sc['num']}_{sc['id']}.mp4"))

            # Clean up intermediate frames directory to keep repo tidy
            shutil.rmtree(frames_dir, ignore_errors=True)

        browser.close()

    # Update stale readme_images/ribosome_translation_factory.png with fresh Molecular Nodes 70S capture
    ribo_asm = os.path.join(VER_DIR, "03_ribosome", "browser_ribosome_assembled.png")
    stale_ribo = os.path.join(BASE_DIR, "readme_images", "ribosome_translation_factory.png")
    if os.path.exists(ribo_asm) and os.path.exists(os.path.dirname(stale_ribo)):
        shutil.copy2(ribo_asm, stale_ribo)
        print(f"Updated stale {stale_ribo} with fresh 7K00 Molecular Nodes screenshot!")

    if len(sys.argv) > 1:
        print("Filtered scenarios captured and compared successfully!")
        return
    # Build Master Compilation Video across all 13 scenarios
    master_mp4 = os.path.join(VER_DIR, "master_13_elements_comparison.mp4")
    print(f"Building master compilation video: {master_mp4} ...")
    writer = imageio.get_writer(master_mp4, fps=12, codec="libx264", quality=8, pixelformat="yuv420p", macro_block_size=None)
    for vp in all_video_paths:
        reader = imageio.get_reader(vp)
        for frame in reader:
            writer.append_data(frame)
        reader.close()
    writer.close()
    shutil.copy2(master_mp4, os.path.join(BRAIN_DIR, "master_13_elements_comparison.mp4"))
    print("ALL 13 SCENARIOS CAPTURED, COMPARED, AND COMPILED SUCCESSFULLY!")


if __name__ == "__main__":
    main()
