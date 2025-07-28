import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const user = { name: 'Shreya' };

  return (
    <>
      <nav className="dashboard-navbar">
        <div className="logo">Ease-Learn</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <div className="dashboard-container">
        <h1>Welcome back, {user.name} 👋</h1>
        <p>Ready to continue your learning journey?</p>

        <div className="dashboard-sections">
          <div className="card">📚 My Courses</div>
          <div className="card">📈 Progress</div>
          <div className="card">📰 Announcements</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;