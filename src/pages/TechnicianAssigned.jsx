import React, { useState } from "react";
import '../styles/RequestList.css'

function TechnicianAssigned() {
  const [assignedRequests, setAssignedRequests] = useState([
    {
      id: 101,
      title: "Printer not working",
      priority: "Medium",
      status: "Assigned",
    },
    {
      id: 102,
      title: "WiFi issue",
      priority: "High",
      status: "Assigned",
    },
  ]);

  const [completedRequests, setCompletedRequests] = useState([]);

  const markCompleted = (id) => {
    const completed = assignedRequests.find((r) => r.id === id);
    setAssignedRequests(assignedRequests.filter((r) => r.id !== id));
    setCompletedRequests([
      ...completedRequests,
      { ...completed, status: "Completed" },
    ]);
  };

  return (
    <div>
      <h3 className="mb-4">Assigned Requests</h3>

      <div className="glass-card glass-table p-3">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assignedRequests.length === 0 ? (
              <tr>
                <td colSpan="4">No active requests</td>
              </tr>
            ) : (
              assignedRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.title}</td>
                  <td>
                    <span className="status pending text-center">
                      {req.priority}
                    </span>
                  </td>
                  <td>
                    <button
                      className="primary-btn small"
                      onClick={() => markCompleted(req.id)}
                    >
                      Mark Completed
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <h4 className="mt-5 mb-3">Completed Requests</h4>

      <div className="glass-card p-3">
        <ul className="list-group list-group-flush">
          {completedRequests.length === 0 ? (
            <li className="list-group-item bg-transparent text-light">
              No completed requests
            </li>
          ) : (
            completedRequests.map((req) => (
              <li
                key={req.id}
                className="list-group-item bg-transparent text-light"
              >
                #{req.id} — {req.title}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default TechnicianAssigned;
