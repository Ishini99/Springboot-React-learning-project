import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const GotoLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ fontSize: "2em", color: "#333" }}>
        Welcome to the home page
      </h2>
      <p style={{ fontSize: "1.2em", color: "#666" }}>Login to the system</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1em",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={GotoLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
