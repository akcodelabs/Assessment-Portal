import React, { useState } from "react";
import "./LoginPage.css";

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="company-header">
          <img src="/company-logo.png" alt="Company Logo" className="company-logo" />
          <h1 className="company-name">TechNova Solutions</h1>
        </div>

        <h2>Reset Password</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Send Reset Link
        </button>

        <p className="forgot-link">
          <span onClick={onBackToLogin}>Back to Login</span>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;