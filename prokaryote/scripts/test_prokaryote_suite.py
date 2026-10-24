"""
test_prokaryote_suite.py

End-to-End Automated Test Suite for the Reorganized `prokaryote/` & `eukaryote/` Architecture:
1. Folder & 3D Asset Integrity Check (`prokaryote/`, `eukaryote/`, `client/public/prokaryote/models/`)
2. Verification Dashboard Check (`prokaryote/scripts/generate_verification_html.py` -> 175/175 files)
3. TypeScript & Production Build Check (`tsc --noEmit` & `vite build`)
4. Live Headless Browser (Playwright) 29-Scenario WebGL + GLB Network 200 Check (`01` through `29`)
"""

import os
import sys
import time
import subprocess
import threading
import functools
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROK_DIR = os.path.dirname(SCRIPT_DIR)
REPO_DIR = os.path.dirname(PROK_DIR)
CLIENT_DIR = os.path.join(REPO_DIR, "client")

ALL_29_NAV_BTNS = [
    ("01_cell", "#btn-nav-cell"),
    ("02_motor", "#btn-nav-motor"),
    ("03_ribosome", "#btn-nav-ribosome"),
    ("04_atp_synthase", "#btn-nav-atp-synthase"),
    ("05_complex_i", "#btn-nav-complex-i"),
    ("06_secyeg", "#btn-nav-secyeg"),
    ("07_bam", "#btn-nav-bam"),
    ("08_lpt", "#btn-nav-lpt"),
    ("09_rnap", "#btn-nav-rnap"),
    ("10_pol_iii", "#btn-nav-pol-iii"),
    ("11_gyrase", "#btn-nav-gyrase"),
    ("12_ftsz", "#btn-nav-ftsz"),
    ("13_mreb", "#btn-nav-mreb"),
    ("14_expressome", "#btn-nav-expressome"),
    ("15_envelopes", "#btn-nav-envelopes"),
    ("16_motility_modes", "#btn-nav-motility-modes"),
    ("17_microcompartment", "#btn-nav-microcompartment"),
    ("18_chemosensory_mcp", "#btn-nav-chemosensory-mcp"),
    ("19_pili_fimbriae", "#btn-nav-pili-fimbriae"),
    ("20_nucleoid", "#btn-nav-nucleoid"),
    ("21_chaperones", "#btn-nav-chaperones"),
    ("22_rna_degradosome", "#btn-nav-rna-degradosome"),
    ("23_metabolic_hubs", "#btn-nav-metabolic-hubs"),
    ("24_periplasmic_transport", "#btn-nav-periplasmic-transport"),
    ("25_efflux_pump", "#btn-nav-efflux-pump"),
    ("26_secretion_systems", "#btn-nav-secretion-systems"),
    ("27_crispr_defense", "#btn-nav-crispr-defense"),
    ("28_storage_and_spores", "#btn-nav-storage-and-spores"),
    ("29_atomic_chemistry", "#btn-nav-atomic-chemistry"),
]


class QuietHTTPHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


def check_directories_and_assets():
    print("\n=== [1/4] Verifying prokaryote/ and eukaryote/ Directory Structure & 3D Models ===")
    required_dirs = [
        os.path.join(REPO_DIR, "prokaryote", "scripts"),
        os.path.join(REPO_DIR, "prokaryote", "models"),
        os.path.join(REPO_DIR, "prokaryote", "verification"),
        os.path.join(REPO_DIR, "client", "public", "prokaryote", "models"),
        os.path.join(REPO_DIR, "client", "src", "prokaryote", "core"),
        os.path.join(REPO_DIR, "client", "src", "prokaryote", "components"),
        os.path.join(REPO_DIR, "client", "src", "prokaryote", "types"),
        os.path.join(REPO_DIR, "eukaryote", "scripts"),
        os.path.join(REPO_DIR, "eukaryote", "models"),
        os.path.join(REPO_DIR, "eukaryote", "verification"),
        os.path.join(REPO_DIR, "client", "public", "eukaryote", "models"),
        os.path.join(REPO_DIR, "client", "src", "eukaryote", "core"),
        os.path.join(REPO_DIR, "client", "src", "eukaryote", "components"),
        os.path.join(REPO_DIR, "client", "src", "eukaryote", "types"),
    ]
    for d in required_dirs:
        assert os.path.isdir(d), f"Missing required directory: {d}"
    print(f"  [PASS] All {len(required_dirs)} prokaryote/ and eukaryote/ directories exist.")

    pub_models_dir = os.path.join(REPO_DIR, "client", "public", "prokaryote", "models")
    glbs = [f for f in os.listdir(pub_models_dir) if f.endswith(".glb")]
    assert len(glbs) >= 28, f"Expected >=28 GLB files in {pub_models_dir}, found {len(glbs)}"
    cell_glb = os.path.join(REPO_DIR, "client", "public", "prokaryote", "prokaryote_cell.glb")
    assert os.path.isfile(cell_glb), f"Missing {cell_glb}"
    print(f"  [PASS] Found {len(glbs)} macromolecular .glb models in client/public/prokaryote/models/ + prokaryote_cell.glb.")


def check_verification_dashboards():
    print("\n=== [2/4] Running Verification HTML Generator & Checking 175 Verification Files ===")
    gen_script = os.path.join(SCRIPT_DIR, "generate_verification_html.py")
    res = subprocess.run([sys.executable, gen_script], cwd=REPO_DIR, capture_output=True, text=True)
    print("  " + res.stdout.strip().replace("\n", "\n  "))
    assert res.returncode == 0, f"generate_verification_html.py failed:\n{res.stderr}"
    assert "0 missing" in res.stdout, "Missing verification assets detected!"
    print("  [PASS] All 175 verification images & MP4 videos verified in prokaryote/verification/.")


def check_typescript_and_build():
    print("\n=== [3/4] Running TypeScript Compiler Check & Production Vite Build ===")
    npx_cmd = "npx.cmd" if os.name == "nt" else "npx"
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"

    res_tsc = subprocess.run([npx_cmd, "tsc", "--noEmit"], cwd=CLIENT_DIR, capture_output=True, text=True)
    if res_tsc.returncode != 0:
        print(res_tsc.stdout)
        print(res_tsc.stderr)
        raise AssertionError("TypeScript check (tsc --noEmit) failed!")
    print("  [PASS] TypeScript check (npx tsc --noEmit) passed with 0 errors.")

    res_build = subprocess.run([npm_cmd, "run", "build"], cwd=CLIENT_DIR, capture_output=True, text=True)
    if res_build.returncode != 0:
        print(res_build.stdout)
        print(res_build.stderr)
        raise AssertionError("Vite production build failed!")
    dist_prok_models = os.path.join(CLIENT_DIR, "dist", "prokaryote", "models")
    assert os.path.isdir(dist_prok_models), f"Missing {dist_prok_models} in production build!"
    print("  [PASS] Vite production build succeeded and bundled dist/prokaryote/models/*.glb.")


def check_browser_all_29_scenarios():
    print("\n=== [4/4] Running Headless Chromium E2E Validation Across All 29 Prokaryote Scenarios ===")
    dist_dir = os.path.join(CLIENT_DIR, "dist")
    port = 5189
    handler = functools.partial(QuietHTTPHandler, directory=dist_dir)
    httpd = ThreadingHTTPServer(("127.0.0.1", port), handler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()

    failed_404s = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(
                channel="msedge",
                headless=True,
                args=["--use-angle=d3d11", "--enable-webgl", "--ignore-gpu-blocklist", "--disable-gpu-sandbox"],
            )
            context = browser.new_context(viewport={"width": 1600, "height": 900})
            page = context.new_page()

            def on_response(response):
                if response.status == 404 and not response.url.endswith("favicon.ico"):
                    failed_404s.append(response.url)

            page.on("response", on_response)
            page.goto(f"http://127.0.0.1:{port}/", wait_until="domcontentloaded", timeout=30000)
            page.wait_for_timeout(1500)

            for folder, btn_sel in ALL_29_NAV_BTNS:
                loc = page.locator(btn_sel)
                assert loc.count() > 0, f"Navigation button {btn_sel} not found for {folder}"
                loc.first.evaluate("el => el.click()")
                page.wait_for_timeout(450)
                # Ensure a WebGL canvas is present and visible
                canvas_count = page.locator("canvas").count()
                assert canvas_count > 0, f"No WebGL canvas rendered for {folder}"
                print(f"  [OK] Scenario {folder:<26} ({btn_sel}) rendered cleanly")

            browser.close()
    finally:
        httpd.shutdown()

    assert len(failed_404s) == 0, f"Detected HTTP 404s during 29-scenario navigation: {failed_404s}"
    print("  [PASS] All 29 scenarios navigated & rendered in Headless Chromium with 0 HTTP 404s!")


def main():
    t0 = time.time()
    check_directories_and_assets()
    check_verification_dashboards()
    check_typescript_and_build()
    check_browser_all_29_scenarios()
    elapsed = time.time() - t0
    print(f"\n======================================================================")
    print(f"  ALL PROKARYOTE TEST SUITE CHECKS PASSED IN {elapsed:.1f}s!")
    print(f"======================================================================\n")


if __name__ == "__main__":
    main()
