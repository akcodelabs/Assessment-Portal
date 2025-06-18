import React, { useState } from 'react';
import logo from"../assets/images/akcodelablogo.png";
import './Sign.css';
const Signup = () => {
  const [formData, setFormData] = useState({
    registerAs: '',
    name: '',
    organization: '',
    designation: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { registerAs, name, organization, designation, email, password, confirmPassword } = formData;

    setErrorMsg('');

    if (!registerAs || !name || !organization || !designation || !email || !password || !confirmPassword) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMsg('Password must be at least 8 characters, include uppercase, lowercase, number, and special character.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    const encryptedPassword = btoa(password);
    console.log('Encrypted Password:', encryptedPassword);
    setErrorMsg('Account created successfully!');
  };

  return (
    <div>
      {/* Outside Logo */}
      <div className="top-left-logo">
        <img src={logo} alt="AK Code Lab" />
      </div>

      <div className="container">
        <div className="logo">
          <img src={logo} alt="AK Code Lab" />
        </div>

        <h2>Create your AK Code Lab <br />Account</h2>

        <form id="signupForm" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="row">
            <div className="form-block">
              <select id="registerAs" value={formData.registerAs} onChange={handleChange}>
                <option value="">Register as</option>
                <option value="Staff">Staff</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="form-block empty-block"></div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="form-block">
              <input type="text" id="name" placeholder="name" value={formData.name} onChange={handleChange} />
            </div>

            <div className="form-block">
              <select id="organization" value={formData.organization} onChange={handleChange}>
                <option value="">Organization</option>
                <option value="Org1">Org 1</option>
                <option value="Org2">Org 2</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            <div className="form-block">
              <input type="text" id="designation" placeholder="designation" value={formData.designation} onChange={handleChange} />
            </div>

            <div className="form-block">
              <input type="email" id="email" placeholder="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          {/* Row 4 */}
          <div className="row">
            <div className="form-block">
              <input type="password" id="password" placeholder="password" value={formData.password} onChange={handleChange} />
            </div>

            <div className="form-block">
              <input type="password" id="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          {errorMsg && (
            <div id="errorMsg" className="error-message" style={{ color: errorMsg.includes("successfully") ? 'green' : 'red' }}>
              {errorMsg}
            </div>
          )}

          <button type="submit" className="submit-btn">Create Account</button>

          <div className="login-link">
            Already have an account? <a href="#">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
