import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ onLoginSuccess }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    // You would make a real login request here
    console.log('Login:', formData);
    onLoginSuccess(); // simulate login
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    console.log('Signup:', formData);
    toggleFlip(); // go to login after signup
  };

  return (
    <div className="auth-wrapper">
      <div className={`auth-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front - Login */}
        <div className="auth-face front">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <span onClick={toggleFlip}>Sign up here</span>
          </p>
        </div>

        {/* Back - Signup */}
        <div className="auth-face back">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <span onClick={toggleFlip}>Login here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;