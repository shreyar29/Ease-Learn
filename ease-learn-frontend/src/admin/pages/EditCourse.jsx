import React from 'react';
import { useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const EditCourse = () => {
  const { id } = useParams();

  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Sidebar />
      <div className="main-content">
        <h2>Edit Course ID: {id}</h2>
        <p>Edit form can be implemented here using fetched course data.</p>
      </div>
    </div>
  );
};

export default EditCourse;