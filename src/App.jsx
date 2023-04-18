import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function App() {
  const [showUploadImg, setShowUploadImg] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
            }}
            className="position-relative"
            onClick={() => {
              setShowUploadImg(!showUploadImg);
            }}
          >
            <img
              src="src/assets/IMG_20180426_160424_490.jpg"
              alt="Default image"
              className="img-fluid rounded-circle"
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
              style={{ backgroundColor: "rgba(64, 64, 64, 0.8)" }}
            ></div>
            <div className="position-absolute top-0 end-0 bottom-0 start-0 d-flex flex-column align-items-center justify-content-center text-light">
              <i className="bi bi-camera-fill fs-3 "></i>
              <p className="w-50 text-center">ADD PROFILE PHOTO</p>
            </div>
            {showUploadImg && (
              <div className="position-absolute top-50 start-50 bg-secondary rounded p-3 bg-white w-100 shadow-sm">
                Upload Photo
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
