import React, { useEffect, useState } from "react";
import "../styles/RequestList.css";
import { apiRequest } from "../utils/api";

function HODAssignedRequests() {
  const [requests, setRequests] = useState([]);

  const statusMap = {
    1: "Pending",
    2: "Approved",
    3: "Rejected",
  };

  const fetchRequests = async () => {
    const res = await apiRequest("/service-request");

    if (!res.error) {
      const approved = res.data.filter((r) => r.ServiceRequestStatusID === 2);

      setRequests(approved);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="request-page">
      <h3 className="page-title">Approved Requests</h3>

      <div className="glass-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="4">No Approved Requests</td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req.ServiceRequestID}>
                  <td>{req.ServiceRequestID}</td>
                  <td>{req.ServiceRequestTitle}</td>
                  <td>{req.PriorityLevel}</td>
                  <td>{statusMap[req.ServiceRequestStatusID]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HODAssignedRequests;
