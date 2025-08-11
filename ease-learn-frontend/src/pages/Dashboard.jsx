import React from 'react';
import './Dashboard.css';
import logo from '../assets/logo.png'; // Assuming you have a logo image in assets folder

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <nav className="navbar">
        <div className="logo">
          <img src={ logo } alt="logo" />
          <span>Ease-Learn</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <h2>Welcome to your dashboard!</h2>
        <p>This is a secure area accessible only to logged-in users.</p>
      </div>
    </div>
  );
};

export default Dashboard;