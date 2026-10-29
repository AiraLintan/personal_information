import http.server
import socketserver
import webbrowser
from pathlib import Path

PORT = 8001
DIRECTORY = Path(__file__).resolve().parent

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def log_message(self, format, *args):
        pass

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    url = "http://airalintan.local:8001/"
    print(f"Serving website at {url}")
    webbrowser.open(url)
    httpd.serve_forever()
