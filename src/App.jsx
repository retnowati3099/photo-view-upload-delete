import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef, useState } from "react";

function App() {
  const [showUploadImg, setShowUploadImg] = useState({
    isVisible: false,
    position: {
      x: 0,
      y: 0,
    },
  });
  const [photo, setPhoto] = useState(null);

  const handleAreaClick = (e) => {
    setShowUploadImg({
      isVisible: !showUploadImg.isVisible,
      position: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    //console.log("Selected file:", file);
    setPhoto(file);
    console.log(photo);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mx-auto">
          <div
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
            }}
            className="position-relative"
            onClick={handleAreaClick}
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
              <p className="w-50 text-center user-select-none">
                ADD PROFILE PHOTO
              </p>
            </div>
            {showUploadImg.isVisible && (
              <>
                <div
                  className="position-absolute rounded p-3 bg-white w-100 shadow-sm user-select-none"
                  style={{
                    left: showUploadImg.position.x - 80,
                    top: showUploadImg.position.y + 10,
                  }}
                  onClick={handleClick}
                >
                  Upload Photo
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
