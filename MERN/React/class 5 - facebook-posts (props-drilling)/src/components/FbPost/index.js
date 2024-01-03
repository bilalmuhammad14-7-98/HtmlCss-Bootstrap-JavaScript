import "./index.css";
import logo from "../../logo.svg";

function FbPost() {
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
    </div>
  );
}

export default FbPost;
