import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const CourseList = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'MongoDB Crash Course' }
  ]);

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Sidebar />
      <div className="main-content">
        <h2>All Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              {course.title}
              <Link to={`/admin/edit-course/${course.id}`}>Edit</Link>
              <button onClick={() => handleDelete(course.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
