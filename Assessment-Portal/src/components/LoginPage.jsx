import React, { useState } from "react";
import "./LoginPage.css";
import akcodelabLogo from '../assets/images/akcodelablogo.png';

const LoginPage = ({ onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="company-header">
          <img src={akcodelabLogo} alt="Company Logo" className="company-logo" />
          <h1 className="company-name">AK CODE LAB</h1>
        </div>

        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-btn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="forgot-link">
          <span onClick={onForgotPassword}>Forgot Password?</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;