import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const user = { name: 'Shreya' }; // Replace with actual auth data

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome back, {user.name} 👋</h1>
        <p>Ready to continue your learning journey?</p>
      </header>

      <section className="home-cards">
        <div className="card">
          <h3>📚 My Courses</h3>
          <p>View and continue your enrolled courses.</p>
          <Link to="/my-courses">Go to My Courses</Link>
        </div>
        <div className="card">
          <h3>🎓 Browse Courses</h3>
          <p>Find new courses to learn and grow.</p>
          <Link to="/all-courses">Explore Courses</Link>
        </div>
        <div className="card">
          <h3>📜 Certificates</h3>
          <p>Access and download your certificates.</p>
          <Link to="/certificates">View Certificates</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Ease-Learn. Empowering Learners.</p>
      </footer>
    </div>
  );
};

export default HomePage;