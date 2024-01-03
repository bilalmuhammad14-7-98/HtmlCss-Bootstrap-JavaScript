import FbImageLibrary from "react-fb-image-grid";

import "./index.css";
import logo from "../../logo.svg";
// import FbImageLibrary from "react-fb-image-grid";

function FbPost() {
  const images = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ];
  return (
    <div className="fb-post">
      <div className="fb-post-header">
        <div className="header-img">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="header-title">
          <p className="title-text">
            Shahid & Sons - Decoration & Catering Services
          </p>
          <div className="title-with-img">
            <p>Sponsored</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>

      <div className="fb-post-description">
        <p>
          Style and speed. Stand out on HD video calls backed by Studio Mics.
          Capture ideas on the vibrant touchscreen.
        </p>
      </div>

      <div className="fb-post-images-thumbnail">
        <div>
          <div style={{ width: "100%" }}>
            <FbImageLibrary images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FbPost;
