import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
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
        <h2>Why Choose Ease-Learn?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>🎯 Personalized Learning</h3>
            <p>Learn at your own pace with curated content tailored for you.</p>
          </div>
          <div className="feature">
            <h3>🧠 Expert Instructors</h3>
            <p>Courses taught by real-world professionals and domain experts.</p>
          </div>
          <div className="feature">
            <h3>📜 Certifications</h3>
            <p>Earn certificates on completion and showcase your skills.</p>
          </div>
        </div>
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
    </div>
  );
};

export default LandingPage;