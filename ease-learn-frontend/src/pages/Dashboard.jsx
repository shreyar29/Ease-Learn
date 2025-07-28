import React from 'react'; // Create later if needed

const Dashboard = () => {
  const user = { name: 'Shreya' }; // Replace with real user data from auth later

  return (
    <div className="dashboard-container">
      <h1>Welcome back, {user.name} 👋</h1>
      <p>Ready to continue your learning journey?</p>

      {/* Placeholder sections */}
      <div className="dashboard-sections">
        <div className="card">📚 My Courses</div>
        <div className="card">📈 Progress</div>
        <div className="card">📰 Announcements</div>
      </div>
    </div>
  );
};

export default Dashboard;
