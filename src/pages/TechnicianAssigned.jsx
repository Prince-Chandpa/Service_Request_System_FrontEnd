import React, { useEffect, useState } from "react";
import "../styles/RequestList.css";
import { apiRequest } from "../utils/api";

function TechnicianAssigned() {

  const [assignedRequests, setAssignedRequests] = useState([]);
  const [completedRequests, setCompletedRequests] = useState([]);

  const fetchRequests = async () => {

    const res = await apiRequest("/service-request");

    if (!res.error) {

      const approved = res.data.filter(
        r => r.ServiceRequestStatusID === 2
      );

      const completed = res.data.filter(
        r => r.ServiceRequestStatusID === 4
      );

      setAssignedRequests(approved);
      setCompletedRequests(completed);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const markCompleted = async (id) => {

    await apiRequest(`/service-request/status/${id}`, "PUT", {
      statusID: 4
    });

    fetchRequests();
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

                <tr key={req.ServiceRequestID}>

                  <td>{req.ServiceRequestID}</td>
                  <td>{req.ServiceRequestTitle}</td>

                  <td>
                    <span className="status pending text-center">
                      {req.PriorityLevel}
                    </span>
                  </td>

                  <td>
                    <button
                      className="primary-btn small"
                      onClick={() => markCompleted(req.ServiceRequestID)}
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
                key={req.ServiceRequestID}
                className="list-group-item bg-transparent text-light"
              >
                #{req.ServiceRequestID} — {req.ServiceRequestTitle}
              </li>

            ))
          )}

        </ul>

      </div>

    </div>
  );
}

export default TechnicianAssigned;