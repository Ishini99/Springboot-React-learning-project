import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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
    marginBottom: "10px",
  };

  const SendEmail = (e) => {
    e.preventDefault();
    alert("Email Sent");
    navigate("/"); // Redirect to the home page
  };

  const goToHome = () => {
    navigate("/home"); // Redirect to the home page
  };

  return (
    <div style={formStyle}>
      <form onSubmit={SendEmail}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Reset Password
        </h2>
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
        <button type="submit" style={buttonStyle}>
          Send
        </button>
        <button type="button" onClick={goToHome} style={buttonStyle}>
          Home
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
