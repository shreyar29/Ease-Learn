import React from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'; // Create CSS for styling

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript and React.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Pandas, NumPy, Matplotlib and more.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Machine Learning A-Z",
    description: "Hands-on ML using Scikit-learn and TensorFlow.",
    image: "https://via.placeholder.com/300x200",
  },
];

const AllCourses = () => {
  return (
    <div className="courses-container">
      <h2>All Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`}>
              <button className="view-button">View Course</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;