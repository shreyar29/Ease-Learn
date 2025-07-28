import React from 'react';
import LandingGuest from './Landing/LandingGuest';
import LandingUser from './Landing/LandingUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  const isLoggedIn = false; // Change based on auth logic
  const user = { name: 'Shreya' }; // Dummy user info

  return (
    <div className="landing-container">
      <Navbar />

      {isLoggedIn ? (
        <LandingUser user={user} />
      ) : (
        <>
          <LandingGuest />

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-text">
              <h1>Welcome to Ease-Learn</h1>
              <p>
                Empower your learning journey with technology-driven education.
                Discover interactive lessons, track your progress, and unlock new skills with ease.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1584697964154-06f7f53d2d0d?auto=format&fit=crop&w=600&q=80"
                alt="Learning Illustration"
              />
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="feature-card">
              <h3>Interactive Courses</h3>
              <p>Engaging content with quizzes, videos, and projects to help you learn better.</p>
            </div>
            <div className="feature-card">
              <h3>Progress Tracking</h3>
              <p>Monitor your learning journey and celebrate every milestone you achieve.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Instructors</h3>
              <p>Learn from top educators and professionals from around the world.</p>
            </div>
            <div className="feature-card">
              <h3>Community Support</h3>
              <p>Join a thriving community of learners and get your questions answered fast.</p>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default LandingPage;