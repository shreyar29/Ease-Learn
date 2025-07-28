import React from 'react';
import { Link } from 'react-router-dom';
// You'll style it later

const Navbar = () => {
  return (
    <nav className="navbar">
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
