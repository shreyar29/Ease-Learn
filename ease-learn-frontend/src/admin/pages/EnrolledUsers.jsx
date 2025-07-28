import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const EnrolledUsers = () => {
  const users = [
    { name: 'John Doe', course: 'React Basics' },
    { name: 'Jane Smith', course: 'MongoDB Crash Course' }
  ];

  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Sidebar />
      <div className="main-content">
        <h2>Enrolled Users</h2>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name} - {user.course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnrolledUsers;