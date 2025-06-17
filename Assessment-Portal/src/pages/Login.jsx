import React from "react";
import logo from "../assets/images/akcodelablogo.png";
import "../App.css";


function Login() {
  return (
    <div className="login-container">
      <div className="logo-top-left">
        <img src={logo} alt="AK Code Lab Logo" />
        <span>CODE LAB</span>
      </div>

      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>AK Code Lab</h2>
        <p className="login-subtitle">Log in to your account</p>

        <div className="role-select">
          <div className="role-icon">👤</div>
          <div className="role-label">Staff</div>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your.email@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="" />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="signup-link">
          Don’t have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;