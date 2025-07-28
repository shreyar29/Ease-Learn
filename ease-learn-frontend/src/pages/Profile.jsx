import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Shreya',
    email: 'shreya@example.com',
    completedCourses: ['React Basics', 'HTML & CSS', 'JavaScript Advanced'],
    quizScore: 88,
    certificates: ['React Basics Certificate', 'JavaScript Advanced Certificate']
  };

  return (
    <div className="profile-container">
      <h2>👤 Profile</h2>
      <div className="profile-section">
        <strong>Name:</strong> {user.name}
      </div>
      <div className="profile-section">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="profile-section">
        <strong>Courses Completed:</strong>
        <ul>
          {user.completedCourses.map(course => <li key={course}>{course}</li>)}
        </ul>
      </div>
      <div className="profile-section">
        <strong>Quiz Score:</strong> {user.quizScore}%
      </div>
      <div className="profile-section">
        <strong>Certificates:</strong>
        <ul>
          {user.certificates.map(cert => <li key={cert}>{cert}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Profile;