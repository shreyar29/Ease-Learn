import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse';
import CourseList from './pages/CourseList';
import EnrolledUsers from './pages/EnrolledUsers';
import Certificates from './pages/Certificates';
import ProtectedRoute from './components/ProtectedRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/admin/add-course" element={<ProtectedRoute><AddCourse /></ProtectedRoute>} />
      <Route path="/admin/edit-course/:id" element={<ProtectedRoute><EditCourse /></ProtectedRoute>} />
      <Route path="/admin/courses" element={<ProtectedRoute><CourseList /></ProtectedRoute>} />
      <Route path="/admin/enrolled-users" element={<ProtectedRoute><EnrolledUsers /></ProtectedRoute>} />
      <Route path="/admin/certificates" element={<ProtectedRoute><Certificates /></ProtectedRoute>} />
    </Routes>
  );
};

export default AdminRoutes;