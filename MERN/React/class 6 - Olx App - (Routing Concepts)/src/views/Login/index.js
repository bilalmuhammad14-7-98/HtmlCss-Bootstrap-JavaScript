import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginImage from "../../assets/images/features.png";
import "./index.css";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       // const uid = user.uid;
  //       console.log(user, "user login page-----------.");
  //       navigate("/");
  //       // setUser(user);
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...

  //       console.log("user is sign out");
  //     }
  //   });
  // }, []);

  const signIn = async () => {
    const res = await login({ email, password });

    if (res) {
      navigate("/");
    } else {
      alert("Login failed. Please enter valid credentials");
    }
  };
  return (
    <>
      <body>
        <div class="login-container">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 img-column">
                <img src={LoginImage} class="image" alt="" />
                <img src="../dashboard/dashboard.html" alt="" />
              </div>
              <div class="col-12 col-md-6 form-column">
                <h2 class="form-title">Sign-In</h2>
                {/* <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="email"
                  />
                </div> */}
                <div class="input-group mb-3">
                  <span
                    class="input-group-text login-btn-icon"
                    id="basic-addon1"
                  >
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
                  <span
                    class="input-group-text login-btn-icon"
                    id="basic-addon1"
                  >
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
                  onClick={signIn}
                >
                  Login
                  <i class="bi bi-shield-lock-fill"></i>
                </button>

                <p class="signup-link" onClick={() => navigate("/signup")}>
                  Don't Have an account? Please Sign-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
