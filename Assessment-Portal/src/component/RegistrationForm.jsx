import React, {useState} from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleVisibility = (field) => {
    if (field === 'password') setShowPassword(!showPassword);
    else setShowConfirm(!showConfirm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage('');
    setPasswordError('');
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setMessageType('error');
      setMessage('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setMessageType('error');
      setMessage('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be 8+ chars, include uppercase, lowercase, and number.');
      return;
    }

    if (password !== confirmPassword) {
      setMessageType('error');
      setMessage('Passwords do not match.');
      return;
    }

    setMessageType('success');
    setMessage('Registration successful!');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="eye-icon"
              onClick={() => toggleVisibility('password')}
            />
          </div>
          {passwordError && <div className="field-error">{passwordError}</div>}
        </label>

        <label>
          Confirm Password
          <div className="password-field">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showConfirm ? faEyeSlash : faEye}
              className="eye-icon"
              onClick={() => toggleVisibility('confirm')}
            />
          </div>
        </label>

        <button type="submit">Register</button>
        {message && (
          <div className={`form-message ${messageType}`}>{message}</div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
