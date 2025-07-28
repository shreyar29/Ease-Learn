// src/pages/AllCourses.jsx
import React from 'react';
import './AllCourses.css'; // We’ll add styles later
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, MongoDB and more.',
    image: 'https://source.unsplash.com/400x250/?web,code',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Master Python with real-world data analysis projects and ML basics.',
    image: 'https://source.unsplash.com/400x250/?python,data',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn wireframing, prototyping, and design principles.',
    image: 'https://source.unsplash.com/400x250/?design,ui',
  },
  {
    id: 4,
    title: 'Java Programming Basics',
    description: 'Strong foundation in Java with hands-on projects.',
    image: 'https://source.unsplash.com/400x250/?java,code',
  },
];

const AllCourses = () => {
  return (
    <>
      <Navbar />
      <div className="all-courses-container">
        <h2 className="all-courses-title">Explore Our Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="view-button">View Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllCourses;