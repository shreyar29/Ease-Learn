import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './pages/LandingPage';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AddCourse from './admin/pages/AddCourse';
import EditCourse from './admin/pages/EditCourse';
import CourseList from './admin/pages/CourseList';
import EnrolledUsers from './admin/pages/EnrolledUsers';
import Certificates from './admin/pages/Certificates';
import ProtectedRoute from './admin/components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/add-course" element={<ProtectedRoute><AddCourse /></ProtectedRoute>} />
      <Route path="/admin/edit-course/:id" element={<ProtectedRoute><EditCourse /></ProtectedRoute>} />
      <Route path="/admin/courses" element={<ProtectedRoute><CourseList /></ProtectedRoute>} />
      <Route path="/admin/enrolled-users" element={<ProtectedRoute><EnrolledUsers /></ProtectedRoute>} />
      <Route path="/admin/certificates" element={<ProtectedRoute><Certificates /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}


export default App;