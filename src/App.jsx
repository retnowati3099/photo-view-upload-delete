import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [showUploadImg, setShowUploadImg] = useState({
    isVisible: false,
    position: {
      x: 0,
      y: 0,
    },
  });
  const [img, setImg] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });
  const [showTooltip, setShowTooltip] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    document.title = "Halaman Upload Foto";
  });

  const handleAreaClick = (e) => {
    setShowTooltip(false);
    setShowUploadImg({
      isVisible: !showUploadImg.isVisible,
      position: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  useEffect(() => {
    if (img) {
      const data = { img: img };
      axios
        .post("http://localhost:8080/images", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [img]);

  const handleImageChange = (e) => {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const handleMouseMove = (e) => {
    setTooltipPos({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col mx-auto">
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            className="position-relative"
            onClick={handleAreaClick}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            onMouseMove={handleMouseMove}
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
            <input
              type="file"
              //style={{ display: "none" }}
              //ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          {showTooltip && !showUploadImg.isVisible && (
            <div
              className="position-absolute border border-dark bg-white p-1 text-center"
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y,
                width: "110px",
              }}
            >
              Photo Picker
            </div>
          )}
          {showUploadImg.isVisible && (
            <div
              className="position-absolute rounded p-3 bg-white shadow-sm user-select-none text-center"
              style={{
                left: showUploadImg.position.x,
                top: showUploadImg.position.y,
                width: "140px",
              }}
              // onClick={handleClick}
            >
              Upload Photo
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
