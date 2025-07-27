import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src="/easelearn-logo.png" alt="Ease-Learn" className="logo-animate" />
      <h1 className="brand-text">Ease-Learn</h1>
    </div>
  );
};

export default SplashScreen;
