import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginImage from "../../assets/images/features.png";
import "./index.css";
import {
  faCalendar,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUp = () => {
    console.log(username, dob, email, password);
    // login({ email, password });
  };
  return (
    <>
      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 form-column">
              <h2 class="form-title">Please Sign-Up</h2>
              <div class="input-group mb-3">
                <span class="input-group-text login-btn-icon" id="basic-addon1">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  class="form-control login-btn-field"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text login-btn-icon" id="basic-addon1">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                <input
                  type="date"
                  class="form-control login-btn-field"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text login-btn-icon" id="basic-addon1">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="text"
                  class="form-control login-btn-field"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text login-btn-icon" id="basic-addon1">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  class="form-control login-btn-field"
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              {/* <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="bi bi-person-fill-lock"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="password"
                  />
                </div> */}

              <button
                type="button"
                class="btn btn-primary login-button"
                onClick={signUp}
              >
                Sign-Up
                <i class="bi bi-shield-lock-fill"></i>
              </button>

              <p class="signup-link" onClick={() => navigate("/login")}>
                Already Have an account? Please Login.
              </p>
            </div>

            <div class="col-12 col-md-6 img-column">
              <img src={LoginImage} class="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
