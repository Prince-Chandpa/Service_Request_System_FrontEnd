import "../styles/Dashboard.css";

function DashboardTechnician() {
  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Technician Dashboard</h2>
      <p className="dashboard-subtitle">
        Manage and complete assigned tasks
      </p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h4>Assigned Tasks</h4>
          <p>8</p>
        </div>

        <div className="dashboard-card warning">
          <h4>In Progress</h4>
          <p>3</p>
        </div>

        <div className="dashboard-card success">
          <h4>Completed</h4>
          <p>5</p>
        </div>

        <div className="dashboard-card info">
          <h4>Pending</h4>
          <p>2</p>
        </div>
      </div>

      <div className="glass-card mt-5 p-4">
        <h5 className="mb-3">Today's Tasks</h5>
        <p className="text-muted">
          Complete assigned tasks before end of day.
        </p>
      </div>
    </div>
  );
}

export default DashboardTechnician;