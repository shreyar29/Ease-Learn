import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/admin/add-course">Add Course</Link>
    <Link to="/admin/courses">Course List</Link>
    <Link to="/admin/enrolled-users">Enrolled Users</Link>
    <Link to="/admin/certificates">Certificates</Link>
  </div>
);

export default Sidebar;
