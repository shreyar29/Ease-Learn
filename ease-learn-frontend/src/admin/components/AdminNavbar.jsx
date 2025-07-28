import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  return (
    <nav className="admin-navbar">
      <h2>Admin Panel</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default AdminNavbar;
