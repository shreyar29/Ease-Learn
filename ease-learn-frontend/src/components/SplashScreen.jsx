// src/components/SplashScreen.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; // We'll create this next

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing');
    }, 3000); // Redirect after 3 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="logo-text">Ease-Learn</h1>
        <p className="tagline">Education with Technology</p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default SplashScreen;