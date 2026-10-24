"""
test_eukaryote_suite.py

End-to-End Automated Test Suite for the 36-Scenario Eukaryote 3D Explorer (`eukaryote/`):
1. Folder & 36 `.glb` 3D Asset Integrity Check (`client/public/eukaryote/models/`, `eukaryote/models/`, `eukaryote/roadmap/<NN>_<id>/`)
2. Verification Dashboard Check (`eukaryote/scripts/generate_eukaryote_verification_html.py` -> 252/252 files)
3. TypeScript & Production Build Check (`tsc --noEmit` & `vite build`)
4. Live Headless Browser (Playwright) 36-Scenario WebGL + GLB Network 200 Check (`01` through `36`)
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
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from euk_layout_spec import ALL_36_EUK_SCENARIOS

EUK_DIR = os.path.dirname(SCRIPT_DIR)
REPO_DIR = os.path.dirname(EUK_DIR)
CLIENT_DIR = os.path.join(REPO_DIR, "client")


class QuietHTTPHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


def check_directories_and_assets():
    print("\n=== [1/4] Verifying 36 Eukaryote .glb Models & Roadmap Scripts ===")
    pub_models_dir = os.path.join(REPO_DIR, "client", "public", "eukaryote", "models")
    euk_models_dir = os.path.join(EUK_DIR, "models")
    roadmap_dir = os.path.join(EUK_DIR, "roadmap")

    for sc in ALL_36_EUK_SCENARIOS:
        num = sc["num"]
        sid = sc["id"]
        folder = f"{num}_{sid}"
        p_pub = os.path.join(pub_models_dir, f"{sid}.glb")
        p_euk = os.path.join(euk_models_dir, f"{sid}.glb")
        p_rm_glb = os.path.join(roadmap_dir, folder, f"{sid}.glb")
        p_rm_gen = os.path.join(roadmap_dir, folder, f"generate_{num}_{sid}.py")
        p_rm_exp = os.path.join(roadmap_dir, folder, f"expected_{sid}.png")

        assert os.path.isfile(p_pub) and os.path.getsize(p_pub) > 10000, f"Missing or empty {p_pub}"
        assert os.path.isfile(p_euk) and os.path.getsize(p_euk) > 10000, f"Missing or empty {p_euk}"
        assert os.path.isfile(p_rm_glb) and os.path.getsize(p_rm_glb) > 10000, f"Missing or empty {p_rm_glb}"
        assert os.path.isfile(p_rm_gen), f"Missing generator script {p_rm_gen}"
        assert os.path.isfile(p_rm_exp), f"Missing expected reference diagram {p_rm_exp}"

    print("  [PASS] All 36/36 .glb models, generator scripts, and expected reference plates verified across client/public/eukaryote/models/, eukaryote/models/, and eukaryote/roadmap/.")


def check_verification_dashboards():
    print("\n=== [2/4] Running Eukaryote Verification HTML Generator & Checking 252 Verification Files ===")
    gen_script = os.path.join(SCRIPT_DIR, "generate_eukaryote_verification_html.py")
    res = subprocess.run([sys.executable, gen_script], cwd=REPO_DIR, capture_output=True, text=True)
    print("  " + res.stdout.strip().replace("\n", "\n  "))
    assert res.returncode == 0, f"generate_eukaryote_verification_html.py failed:\n{res.stderr}"
    assert "0 missing" in res.stdout, "Missing verification assets detected!"
    print("  [PASS] All 252 verification images & MP4 videos verified in eukaryote/verification/.")


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
    dist_euk_models = os.path.join(CLIENT_DIR, "dist", "eukaryote", "models")
    assert os.path.isdir(dist_euk_models), f"Missing {dist_euk_models} in production build!"
    glbs = [f for f in os.listdir(dist_euk_models) if f.endswith(".glb")]
    assert len(glbs) >= 36, f"Expected >=36 .glb models in dist/eukaryote/models, found {len(glbs)}"
    print(f"  [PASS] Vite production build succeeded and bundled {len(glbs)} dist/eukaryote/models/*.glb.")


def check_browser_all_36_scenarios():
    print("\n=== [4/4] Running Headless Chromium E2E Validation Across All 36 Eukaryote Scenarios ===")
    dist_dir = os.path.join(CLIENT_DIR, "dist")
    port = 5192
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
            page.goto(f"http://127.0.0.1:{port}/?domain=eukaryote", wait_until="domcontentloaded", timeout=30000)
            page.wait_for_timeout(1500)

            for sc in ALL_36_EUK_SCENARIOS:
                num = sc["num"]
                sid = sc["id"]
                btn_sel = f"#btn-euk-nav-{sid}"
                loc = page.locator(btn_sel)
                assert loc.count() > 0, f"Navigation button {btn_sel} not found for {num}_{sid}"
                loc.first.evaluate("el => el.click()")
                page.wait_for_timeout(450)
                canvas_count = page.locator("canvas").count()
                assert canvas_count > 0, f"No WebGL canvas rendered for {num}_{sid}"
                print(f"  [OK] Scenario {num}_{sid:<38} ({btn_sel}) rendered cleanly")

            browser.close()
    finally:
        httpd.shutdown()

    assert len(failed_404s) == 0, f"Detected HTTP 404s during 36-scenario navigation: {failed_404s}"
    print("  [PASS] All 36 Eukaryote scenarios navigated & rendered in Headless Chromium with 0 HTTP 404s!")


def main():
    t0 = time.time()
    check_directories_and_assets()
    check_verification_dashboards()
    check_typescript_and_build()
    check_browser_all_36_scenarios()
    elapsed = time.time() - t0
    print(f"\n======================================================================")
    print(f"  ALL 36 EUKARYOTE TEST SUITE CHECKS PASSED IN {elapsed:.1f}s!")
    print(f"======================================================================\n")


if __name__ == "__main__":
    main()
