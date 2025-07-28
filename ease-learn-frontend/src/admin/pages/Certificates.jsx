import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const Certificates = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Sidebar />
      <div className="main-content">
        <h2>Certificates</h2>
        <p>Certificate management functionality can be added here.</p>
      </div>
    </div>
  );
};

export default Certificates;
