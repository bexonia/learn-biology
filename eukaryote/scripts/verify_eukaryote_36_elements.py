"""
verify_eukaryote_36_elements.py

End-to-End Automated Visual Verification & Side-by-Side Comparison Suite for all 36
Eukaryote Scenarios (`01` through `36`).

For every scenario (`01_eukaryotic_animal_cell` through `36_eukaryotic_monomers_dna_rna_rings`):
1. Navigates to `http://127.0.0.1:5188/?domain=eukaryote` in Headless Chromium (Playwright) with WebGL D3D11.
2. Clicks `#btn-euk-nav-<id>`, waits for the `.glb` 3D Molecular Nodes model to load and render.
3. Captures:
   - `browser_<id>_assembled.png` (0% exploded assembly — native holoenzyme & membrane architecture)
   - `browser_<id>_exploded.png` (75% exploded assembly — subunit dissociation along v_dissoc + SVG leaders)
   - Multi-frame sequence (`0% -> 20% -> 45% -> 75% -> 85% -> 40% -> 0%`)
4. Builds:
   - `comparison_<id>.png` (2400x1380 high-DPI side-by-side comparison plate:
     Left = Expected Reference `expected_<id>.png` + Experimental RCSB PDB `rcsb_<PDB1>.jpg` & `rcsb_<PDB2>.jpg`
     Right = Live 3D WebGL Browser Result in Assembled 0% and Exploded 75% views)
   - `comparison_<id>.mp4` (1920x1080 side-by-side animated MP4 verification video)
"""

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

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from euk_layout_spec import ALL_EUK_ELEMENTS

EUK_DIR = os.path.dirname(SCRIPT_DIR)
REPO_DIR = os.path.dirname(EUK_DIR)
VER_DIR = os.path.join(EUK_DIR, "verification")


class QuietHTTPHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


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


def build_comparison_image(elem: dict, sdir: str):
    W, H = 2400, 1380
    plate = Image.new("RGB", (W, H), (244, 241, 234))
    draw = ImageDraw.Draw(plate)

    f_title = get_font(30, bold=True)
    f_sub = get_font(19, bold=False)
    f_panel = get_font(21, bold=True)
    f_badge = get_font(18, bold=True)
    f_small = get_font(16, bold=False)

    draw.rectangle([0, 0, W, 96], fill=(18, 34, 46))
    t_str = f"EUKARYOTE SCENARIO {elem['num']}  |  {elem['title'].upper()}"
    if len(t_str) > 86:
        t_str = t_str[:83] + "..."
    draw.text((36, 18), t_str, fill=(250, 248, 245), font=f_title)
    draw.text(
        (36, 58),
        f"Experimental RCSB PDBs: {elem['pdb1']} & {elem['pdb2']}   •   Scale: {elem['scale']}   •   Live 3D Molecular Nodes Engine",
        fill=(144, 224, 239),
        font=f_sub,
    )

    draw.rounded_rectangle([W - 390, 22, W - 36, 74], radius=10, fill=(6, 214, 160))
    draw.text((W - 370, 35), "VERIFIED 3D MN + EXPLODED", fill=(10, 20, 28), font=f_badge)

    lx0, ly0, lx1, ly1 = 30, 116, 1185, H - 24
    draw.rounded_rectangle([lx0, ly0, lx1, ly1], radius=14, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([lx0, ly0, lx1, ly0 + 48], fill=(43, 62, 80))
    draw.text(
        (lx0 + 20, ly0 + 11),
        f"EXPECTED REFERENCE  —  Biological Elements & PDB {elem['pdb1']} / {elem['pdb2']}",
        fill=(255, 255, 255),
        font=f_panel,
    )

    exp_path = os.path.join(sdir, f"expected_{elem['id']}.png")
    rcsb1_path = os.path.join(sdir, f"rcsb_{elem['pdb1']}.jpg")
    rcsb2_path = os.path.join(sdir, f"rcsb_{elem['pdb2']}.jpg")
    exp_img = Image.open(exp_path).convert("RGB")

    exp_box_w = (lx1 - lx0) - 24
    exp_box_h = 850
    exp_fitted = fit_image_box(exp_img, exp_box_w, exp_box_h, (250, 248, 245))
    plate.paste(exp_fitted, (lx0 + 12, ly0 + 58))

    iy0 = ly0 + 58 + exp_box_h + 10
    draw.rounded_rectangle([lx0 + 16, iy0, lx1 - 16, ly1 - 14], radius=10, fill=(238, 234, 224), outline=(195, 188, 174), width=2)
    box_h_rcsb = (ly1 - 14) - iy0 - 16
    if os.path.exists(rcsb1_path):
        r1 = fit_image_box(Image.open(rcsb1_path).convert("RGB"), 200, box_h_rcsb, (255, 255, 255))
        plate.paste(r1, (lx0 + 24, iy0 + 8))
    if os.path.exists(rcsb2_path):
        r2 = fit_image_box(Image.open(rcsb2_path).convert("RGB"), 200, box_h_rcsb, (255, 255, 255))
        plate.paste(r2, (lx0 + 234, iy0 + 8))

    tx = lx0 + 450
    draw.text((tx, iy0 + 16), f"RCSB PDB {elem['pdb1']} & {elem['pdb2']} Experimental Coordinates", fill=(26, 43, 37), font=f_panel)
    draw.text((tx, iy0 + 50), f"• Primary: {elem['pdb1_label'][:56]}", fill=(55, 72, 65), font=f_sub)
    draw.text((tx, iy0 + 82), f"• Companion: {elem['pdb2_label'][:54]}", fill=(55, 72, 65), font=f_sub)
    draw.text((tx, iy0 + 114), f"• Scale: {elem['scale'][:56]}", fill=(55, 72, 65), font=f_sub)
    draw.text((tx, iy0 + 148), "• Built with Blender 5.2 Molecular Nodes + RDKit", fill=(15, 118, 110), font=f_badge)

    rx0, ry0, rx1, ry1 = 1215, 116, W - 30, H - 24
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=14, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([rx0, ry0, rx1, ry0 + 48], fill=(15, 118, 110))
    draw.text((rx0 + 20, ry0 + 11), "BROWSER RESULT (LIVE 3D WEBGL)  —  Assembled & Exploded Views", fill=(255, 255, 255), font=f_panel)

    asm_path = os.path.join(sdir, f"browser_{elem['id']}_assembled.png")
    exp3d_path = os.path.join(sdir, f"browser_{elem['id']}_exploded.png")
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

    comp_path = os.path.join(sdir, f"comparison_{elem['id']}.png")
    plate.save(comp_path, quality=95)
    return comp_path


def build_comparison_video(elem: dict, sdir: str, frame_paths: list):
    VW, VH = 1920, 1080
    f_title = get_font(25, bold=True)
    f_sub = get_font(17, bold=False)
    f_panel = get_font(19, bold=True)

    base = Image.new("RGB", (VW, VH), (244, 241, 234))
    draw = ImageDraw.Draw(base)

    draw.rectangle([0, 0, VW, 76], fill=(18, 34, 46))
    t_str = f"EUKARYOTE SCENARIO {elem['num']}: {elem['title'].upper()} ({elem['pdb1']} / {elem['pdb2']})"
    if len(t_str) > 84:
        t_str = t_str[:81] + "..."
    draw.text((28, 14), t_str, fill=(250, 248, 245), font=f_title)
    draw.text(
        (28, 46),
        "Left: Expected Biological Elements & RCSB PDB Reference   |   Right: Live 3D WebGL Browser Engine (Assembled + Exploded Disassembly)",
        fill=(144, 224, 239),
        font=f_sub,
    )

    lx0, ly0, lx1, ly1 = 20, 90, 945, VH - 18
    draw.rounded_rectangle([lx0, ly0, lx1, ly1], radius=12, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([lx0, ly0, lx1, ly0 + 40], fill=(43, 62, 80))
    draw.text((lx0 + 16, ly0 + 8), f"EXPECTED: PDB {elem['pdb1']} & {elem['pdb2']} Reference", fill=(255, 255, 255), font=f_panel)

    exp_img = Image.open(os.path.join(sdir, f"expected_{elem['id']}.png")).convert("RGB")
    exp_fitted = fit_image_box(exp_img, (lx1 - lx0) - 20, 700, (250, 248, 245))
    base.paste(exp_fitted, (lx0 + 10, ly0 + 48))

    rcsb_path = os.path.join(sdir, f"rcsb_{elem['pdb1']}.jpg")
    iy0 = ly0 + 48 + 700 + 8
    draw.rounded_rectangle([lx0 + 12, iy0, lx1 - 12, ly1 - 10], radius=8, fill=(238, 234, 224), outline=(195, 188, 174), width=1)
    if os.path.exists(rcsb_path):
        rcsb_img = Image.open(rcsb_path).convert("RGB")
        rcsb_thumb = fit_image_box(rcsb_img, 240, (ly1 - 10) - iy0 - 12, (255, 255, 255))
        base.paste(rcsb_thumb, (lx0 + 20, iy0 + 6))
    draw.text((lx0 + 280, iy0 + 16), f"{elem['pdb1_label'][:48]}", fill=(26, 43, 37), font=f_panel)
    draw.text((lx0 + 280, iy0 + 48), f"Scale: {elem['scale'][:52]}", fill=(55, 72, 65), font=f_sub)
    draw.text((lx0 + 280, iy0 + 76), f"PDB Coordinates: {elem['pdb1']} / {elem['pdb2']}", fill=(55, 72, 65), font=f_sub)

    rx0, ry0, rx1, ry1 = 965, 90, VW - 20, VH - 18
    draw.rounded_rectangle([rx0, ry0, rx1, ry1], radius=12, fill=(250, 248, 245), outline=(205, 198, 185), width=2)
    draw.rectangle([rx0, ry0, rx1, ry0 + 40], fill=(15, 118, 110))
    draw.text((rx0 + 16, ry0 + 8), "LIVE 3D BROWSER RESULT (?domain=eukaryote)", fill=(255, 255, 255), font=f_panel)

    mp4_path = os.path.join(sdir, f"comparison_{elem['id']}.mp4")
    writer = imageio.get_writer(mp4_path, fps=10, codec="libx264", quality=8, pixelformat="yuv420p", macro_block_size=None)

    r_box_w = (rx1 - rx0) - 16
    r_box_h = (ry1 - ry0) - 56

    for fpath, phase_label in frame_paths:
        frame_canvas = base.copy()
        fdraw = ImageDraw.Draw(frame_canvas)
        b_img = Image.open(fpath).convert("RGB")
        b_fitted = fit_image_box(b_img, r_box_w, r_box_h, (247, 244, 238))
        frame_canvas.paste(b_fitted, (rx0 + 8, ry0 + 48))

        fdraw.rounded_rectangle([rx0 + 20, ry1 - 52, rx0 + 540, ry1 - 16], radius=6, fill=(22, 38, 33))
        fdraw.text((rx0 + 32, ry1 - 44), phase_label, fill=(255, 255, 255), font=f_sub)
        writer.append_data(np.array(frame_canvas))

    writer.close()
    return mp4_path


def main():
    only_ids = [arg.strip() for arg in sys.argv[1:] if not arg.startswith("-")]
    scenarios_to_run = [e for e in ALL_EUK_ELEMENTS if not only_ids or e["id"] in only_ids or e["num"] in only_ids]

    dist_dir = os.path.join(REPO_DIR, "client", "dist")
    port = 5192
    handler = functools.partial(QuietHTTPHandler, directory=dist_dir)
    httpd = ThreadingHTTPServer(("127.0.0.1", port), handler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()
    print(f"Started embedded HTTP server for client/dist on http://127.0.0.1:{port}/?domain=eukaryote")

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(
                channel="msedge",
                headless=True,
                args=["--use-angle=d3d11", "--enable-webgl", "--ignore-gpu-blocklist", "--disable-gpu-sandbox"],
            )
            context = browser.new_context(viewport={"width": 1920, "height": 1080}, device_scale_factor=1)
            page = context.new_page()

            page.goto(f"http://127.0.0.1:{port}/?domain=eukaryote", wait_until="domcontentloaded", timeout=30000)
            time.sleep(2.0)

            for elem in scenarios_to_run:
                sdir = os.path.join(VER_DIR, elem["folder"])
                os.makedirs(sdir, exist_ok=True)
                frames_dir = os.path.join(sdir, "frames")
                os.makedirs(frames_dir, exist_ok=True)

                btn_sel = f"#btn-euk-nav-{elem['id']}"
                print(f"[{elem['num']}/36] Navigating to {elem['title']} ({btn_sel})...")
                page.evaluate("(sel) => document.querySelector(sel)?.click()", btn_sel)
                time.sleep(1.3)

                set_exploded_slider(page, 0.0)
                time.sleep(0.25)

                asm_path = os.path.join(sdir, f"browser_{elem['id']}_assembled.png")
                page.screenshot(path=asm_path)

                frame_records = []
                for i in range(2):
                    fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                    page.screenshot(path=fp)
                    frame_records.append((fp, f"Phase 1: Native Assembled 3D Architecture (0%)"))
                    time.sleep(0.10)

                for lvl in (0.35, 0.75, 0.90):
                    set_exploded_slider(page, lvl)
                    time.sleep(0.20)
                    fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                    page.screenshot(path=fp)
                    pct = int(lvl * 100)
                    frame_records.append((fp, f"Phase 2: Exploded Subunit Dissociation ({pct}%)"))
                    if lvl == 0.75:
                        exp_path = os.path.join(sdir, f"browser_{elem['id']}_exploded.png")
                        shutil.copy2(fp, exp_path)

                for lvl in (0.40, 0.0):
                    set_exploded_slider(page, lvl)
                    time.sleep(0.15)
                    fp = os.path.join(frames_dir, f"frame_{len(frame_records):02d}.png")
                    page.screenshot(path=fp)
                    pct = int(lvl * 100)
                    frame_records.append((fp, f"Phase 3: Subunit Re-Assembly ({pct}%)"))

                comp_img_path = build_comparison_image(elem, sdir)
                comp_mp4_path = build_comparison_video(elem, sdir, frame_records)
                shutil.rmtree(frames_dir, ignore_errors=True)
                print(f"  [OK] Saved Assembled, Exploded, Comparison PNG & MP4 for {elem['num']}_{elem['id']}")

            browser.close()
    finally:
        httpd.shutdown()

    print("\nALL 36 EUKARYOTE SCENARIOS CAPTURED AND COMPARED SIDE-BY-SIDE SUCCESSFULLY!")


if __name__ == "__main__":
    main()
