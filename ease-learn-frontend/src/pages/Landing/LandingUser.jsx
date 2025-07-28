// src/pages/Landing/LandingUser.jsx
import React from 'react';
import './LandingUser.css'; // Assuming you have a CSS file for styling

const LandingUser = ({ user }) => {
  return (
    <div className="container mt-5">
      <h2>Hello, {user.name} 👋</h2>
      <p className="text-muted">Welcome back to Ease-Learn!</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5>Your Courses</h5>
            {/* Placeholder for enrolled course cards */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5>Continue Learning</h5>
            {/* Placeholder for resume progress */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingUser;
