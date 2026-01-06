import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-subtitle">
        Welcome to the Service Request Management System
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h4>Total Requests</h4>
          <p>24</p>
        </div>

        <div className="dashboard-card">
          <h4>Pending</h4>
          <p>10</p>
        </div>

        <div className="dashboard-card">
          <h4>Approved</h4>
          <p>9</p>
        </div>

        <div className="dashboard-card">
          <h4>Rejected</h4>
          <p>5</p>
        </div>
      </div>

      <div className="overview-card">
        <h5>System Overview</h5>
        <p>
          This system allows users to create, track, and manage service requests
          efficiently. Admins can approve or reject requests based on priority
          and availability.
        </p>
      </div>
      
    </div>
  );
}

export default Dashboard;
