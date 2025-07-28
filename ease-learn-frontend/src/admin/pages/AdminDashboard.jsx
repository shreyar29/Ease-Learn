import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin/login');
      return;
    }

    axios.get('http://localhost:5000/api/admin/dashboard', {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      if (res.data.success) {
        setMessage(res.data.message);
      } else {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    })
    .catch(() => {
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    });
  }, [navigate]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>{message}</p>
    </div>
  );
};

export default AdminDashboard;
