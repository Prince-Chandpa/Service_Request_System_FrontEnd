import React from "react";
import "../styles/Dashboard.css";
import calculateTotalRequest from "../service/calculateTotalRequest";

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
          <p>{calculateTotalRequest()}</p>
        </div>

        <div className="dashboard-card warning">
          <h4>Pending</h4>
          <p>{calculateTotalRequest('Pending')}</p>
        </div>

        <div className="dashboard-card success">
          <h4>Approved</h4>
          <p>{calculateTotalRequest('Approved')}</p>
        </div>

        <div className="dashboard-card danger">
          <h4>Rejected</h4>
          <p>{calculateTotalRequest('Rejected')}</p>
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
