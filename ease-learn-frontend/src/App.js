import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './pages/LandingPage';
import AuthForm from './pages/AuthForm';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// Admin imports
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AddCourse from './admin/pages/AddCourse';
import EditCourse from './admin/pages/EditCourse';
import CourseList from './admin/pages/CourseList';
import EnrolledUsers from './admin/pages/EnrolledUsers';
import Certificates from './admin/pages/Certificates';
import ProtectedRoute from './admin/components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* SplashScreen redirects to /landing */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/landing" element={<LandingPage />} />

        {/* Auth Form */}
        <Route path="/login" element={<AuthForm setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected User Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />}
        />

        {/* Admin Routes */}
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