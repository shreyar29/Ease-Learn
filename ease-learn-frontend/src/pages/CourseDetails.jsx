// src/pages/CourseDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CourseDetails.css'; // We’ll style this later

const dummyCourses = {
  1: {
    title: 'Full Stack Web Development',
    image: 'https://source.unsplash.com/800x400/?web,code',
    description: 'Become a Full Stack Developer by learning frontend (HTML, CSS, JS, React) and backend (Node.js, Express, MongoDB) technologies.',
    content: [
      'HTML, CSS & JavaScript Basics',
      'React.js Advanced Concepts',
      'Node.js & Express.js',
      'MongoDB Integration',
      'Authentication and Deployment',
    ],
    instructor: 'John Doe',
  },
  2: {
    title: 'Python for Data Science',
    image: 'https://source.unsplash.com/800x400/?python,data',
    description: 'Master Python programming with a focus on Data Analysis, Visualization, and Machine Learning.',
    content: [
      'Python Syntax & Functions',
      'Pandas & NumPy',
      'Data Visualization with Matplotlib',
      'Introduction to Machine Learning',
    ],
    instructor: 'Dr. Shreya Patel',
  },
  // Add more dummy course objects as needed
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = dummyCourses[id];

  if (!course) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '2rem' }}>
          <h2>Course not found.</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="course-details-container">
        <img src={course.image} alt={course.title} className="course-details-image" />
        <h1 className="course-details-title">{course.title}</h1>
        <p className="course-details-description">{course.description}</p>

        <h3>What you’ll learn:</h3>
        <ul className="course-details-content">
          {course.content.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>

        <p className="course-instructor">Instructor: <strong>{course.instructor}</strong></p>
        <button className="enroll-button">Enroll Now</button>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
