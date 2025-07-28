import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for redirect
 // Optional if styling separately

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
    setSuccess('');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear messages
    setError('');
    setSuccess('');

    if (!formData.email || !formData.password || (!isLogin && (!formData.name || !formData.confirmPassword))) {
      setError('Please fill all fields');
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulated user authentication (you can integrate backend later)
    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem('easelearn_user'));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setSuccess('Login successful!');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Simulate storing user data (in real apps, send to backend)
      localStorage.setItem('easelearn_user', JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }));
      setSuccess('Signup successful! Redirecting to Dashboard...');
      setTimeout(() => navigate('/dashboard'), 1000);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login to Ease-Learn' : 'Create an Account'}</h2>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
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
        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          onClick={toggleForm}
          style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
