import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div className="admin-layout">
    <AdminNavbar />
    <Sidebar />
    <div className="main-content">
      <h1>Welcome to Admin Dashboard</h1>
    </div>
  </div>
);

export default Dashboard;
