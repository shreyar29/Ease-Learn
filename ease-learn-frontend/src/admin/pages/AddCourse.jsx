import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const AddCourse = () => {
  const [course, setCourse] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course Added:', course);
    alert('Course added successfully!');
    setCourse({ title: '', description: '' });
  };

  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Sidebar />
      <div className="main-content">
        <h2>Add New Course</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} placeholder="Course Title" required />
          <textarea value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} placeholder="Description" required />
          <button type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;