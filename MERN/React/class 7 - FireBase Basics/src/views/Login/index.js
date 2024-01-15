import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = async () => {
    const res = await login({ email, password });

    if (res) {
      navigate("/register");
    } else {
      alert("Login failed");
    }
    console.log(res, "response------");

    // try {
    //   const res = await login({ email, password });
    //   console.log(res, "response------");
    //   navigate("/register");
    // } catch (error) {
    //   console.log(error.message);
    //   alert("please enter correct password");
    // }
  };
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signIn}>Login</button>
      <p>
        Don't you have an account.
        <span onClick={() => navigate("/register")}>Click here</span>
      </p>
    </div>
  );
};

export default Login;
