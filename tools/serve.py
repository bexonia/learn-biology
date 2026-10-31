import os
import re
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

ROOT = sys.argv[1]
OUT = os.path.join(ROOT, "renders")
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 8765


class Handler(SimpleHTTPRequestHandler):
    def do_POST(self):
        url = urlparse(self.path)
        if url.path != "/save":
            self.send_error(404)
            return
        name = parse_qs(url.query).get("name", ["image.png"])[0]
        name = re.sub(r"[^a-z0-9._-]", "", os.path.basename(name).lower()) or "image.png"
        if not name.endswith(".png"):
            name += ".png"
        data = self.rfile.read(int(self.headers.get("Content-Length", 0)))
        os.makedirs(OUT, exist_ok=True)
        with open(os.path.join(OUT, name), "wb") as f:
            f.write(data)
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"ok")


ThreadingHTTPServer(("127.0.0.1", PORT), partial(Handler, directory=ROOT)).serve_forever()
