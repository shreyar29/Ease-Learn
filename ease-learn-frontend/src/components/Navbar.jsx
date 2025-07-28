import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assuming you have a logo image
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Ease-Learn Logo" />
      </div>
      <h2 className="navbar-logo">Ease-Learn</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
        {/* Add more links if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
