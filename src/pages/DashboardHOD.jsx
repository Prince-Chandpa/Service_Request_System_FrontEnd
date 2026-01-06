import React from "react";
import "../styles/Dashboard.css";

function DashboardHOD() {
  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">HOD Dashboard</h2>
      <p className="dashboard-subtitle">
        Review and manage service requests submitted by staff
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h4>Total Requests</h4>
          <p>42</p>
        </div>

        <div className="dashboard-card warning">
          <h4>Pending Approval</h4>
          <p>12</p>
        </div>

        <div className="dashboard-card success">
          <h4>Approved</h4>
          <p>22</p>
        </div>

        <div className="dashboard-card danger">
          <h4>Rejected</h4>
          <p>8</p>
        </div>

      </div>

      {/* <div className="glass-card mt-5 p-4">
        <h5 className="mb-2">HOD Responsibilities</h5>
        <p className="text-muted">
          As a Head of Department, you are responsible for reviewing
          service requests, approving valid requests, and rejecting
          those that do not meet departmental guidelines.
        </p>
      </div> */}
    </div>
  );
}

export default DashboardHOD;
