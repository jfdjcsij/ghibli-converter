
import { useState } from "react";
import axios from "axios";

function App() {
  const [video, setVideo] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", video);

    const res = await axios.post("/convert", formData, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([res.data]));
    setDownloadUrl(url);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Ghibli Video Converter</h1>
      <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
      <button onClick={handleUpload} className="ml-2 p-2 bg-blue-500 text-white rounded">Convert</button>
      {downloadUrl && (
        <a href={downloadUrl} download="converted.mp4" className="block mt-4 text-green-600">Download Converted Video</a>
      )}
    </div>
  );
}

export default App;
