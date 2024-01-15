import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../config/firebase";

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signup = async () => {
    await register({ email, password, age, fullname });
    console.log({ email, password, age, fullname });
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="fullname"
        onChange={(e) => setFullname(e.target.value)}
      />
      <input placeholder="age" onChange={(e) => setAge(e.target.value)} />{" "}
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />{" "}
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signup}>Register</button>
      <p>
        Already have an account.
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
};

export default Register;
