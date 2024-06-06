import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLoginClick = () => {
    // Handle login logic here
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  const labelStyle = {
    marginBottom: "5px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <form onSubmit={onLoginClick}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <Link to="/reset-password">Forgot password?</Link>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
