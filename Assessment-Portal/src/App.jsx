import React, { useState } from 'react';
import logoTop from './assets/logo-top-left.png';
import logoCenter from './assets/logo-center.png';

function App() {
  const [role, setRole] = useState('Student');

  return (
    <div className="container">
      <img src={logoTop} alt="AK Logo Top" className="logo-top" />
      <div className="login-box">
        <img src={logoCenter} alt="AK Logo Center" className="logo-center" />
        <h2>AK Code Lab</h2>
        <p className="subtitle">Log in to your account</p>

        <div className="role-buttons">
          <button
            className={role === 'Student' ? 'active' : ''}
            onClick={() => setRole('Student')}
          >
            👨‍🎓 Student
          </button>
          <button
            className={role === 'Staff' ? 'active' : ''}
            onClick={() => setRole('Staff')}
          >
            👨‍🏫 Staff
          </button>
        </div>

        <form>
  <div className="form-group">
    <label>Email</label>
    <input type="email" placeholder="your.email@example.com" required />
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" placeholder="Password" required />
  </div>
  <button type="submit" className="login-btn">Login</button>
</form>


        <p className="signup-text">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
