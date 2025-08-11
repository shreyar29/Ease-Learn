import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../assets/logo.png'; // Assuming you have a logo image

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Ease-Learn Logo" />
          <span>Ease-Learn</span>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/login" className="btn login-btn">Login / Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Ease-Learn</h1>
          <p>Your personalized online learning platform.</p>
          <Link to="/all-courses">
            <button className="get-started-btn">Explore Courses</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>🎯 Personalized Learning</h3>
            <p>Learn at your own pace with content tailored for you.</p>
          </div>
          <div className="feature">
            <h3>🧠 Expert Instructors</h3>
            <p>Courses taught by real-world professionals and experts.</p>
          </div>
          <div className="feature">
            <h3>📜 Certifications</h3>
            <p>Earn certificates and build your portfolio.</p>
          </div>
        </div>
      </section>

      {/* Why Ease-Learn */}
      <section className="why-ease-learn">
        <h2>Why Ease-Learn?</h2>
        <p>
          Ease-Learn bridges the gap between curiosity and mastery. With a user-centric design,
          top-tier instructors, and a wide range of courses, it's your one-stop platform to upskill,
          reskill, and grow.
        </p>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up or log in to your account</li>
          <li>Browse and enroll in available courses</li>
          <li>Track your progress and download certificates</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ease-Learn. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
