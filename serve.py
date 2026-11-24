import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 5050

class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and caching headers for high speed
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    handler = CustomHTTPHandler
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"==================================================")
        print(f"🤖 টাঙ্গাইল বট (TangailBot) ওয়েবসাইট চালু হয়েছে!")
        print(f"🌐 ব্রাউজারে দেখতে ভিজিট করুন: {url}")
        print(f"🛑 বন্ধ করতে Ctrl+C চাপুন")
        print(f"==================================================")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nসার্ভার বন্ধ করা হয়েছে।")
            httpd.server_close()

if __name__ == "__main__":
    run()
