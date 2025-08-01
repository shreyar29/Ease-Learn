import React from 'react';
import { Link } from 'react-router-dom';
import './LandingGuest.css'; // Assuming you have a CSS file for styling

const LandingGuest = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Ease-Learn</h1>
      <p className="lead">Education with Technology.</p>
      <Link to="/login" className="btn btn-primary mx-2">Login</Link>
      <Link to="/login" className="btn btn-outline-primary">Sign Up</Link>
    </div>
  );
};

export default LandingGuest;