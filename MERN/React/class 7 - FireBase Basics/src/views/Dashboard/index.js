import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Welcome brother</div>

      <button onClick={() => navigate("/login")}> Login</button>
      <button onClick={() => navigate("/register")}> Sign Up</button>
    </>
  );
};

export default Dashboard;
