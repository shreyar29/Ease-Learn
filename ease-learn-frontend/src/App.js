import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LandingPage from './pages/LandingPage';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';
import AdminRoutes from './admin/AdminRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <AdminRoutes/>
      </Routes>
    </Router>
  );
}


export default App;