
from flask import Flask, request, send_file
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "server/static"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/convert", methods=["POST"])
def convert():
    video = request.files["video"]
    path = os.path.join(UPLOAD_FOLDER, video.filename)
    video.save(path)
    # Dummy Ghibli-style effect placeholder
    return send_file(path, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
