import React from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('role'); // 'user' or 'admin'

  if (!isLoggedIn || userRole !== 'user') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default UserProtectedRoute;