import React, { useState } from "react";
import { dummyRequests } from "../data/dummyRequest";
import "../styles/RequestList.css";

function HODRequests() {
  const [requests, setRequests] = useState(dummyRequests);

  const handleApprove = (id) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: "Approved" } : req
      )
    );
  };

  const handleReject = (id) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: "Rejected" } : req
      )
    );
  };

  const pendingRequests = requests.filter((req) => req.status === "Pending");

  return (
    <div className="request-page">
      <h3 className="page-title">Pending Service Requests</h3>

      <div className="glass-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Priority</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.title}</td>
                <td>{req.priority}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm approve-btn me-2"
                    onClick={() => handleApprove(req.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-sm delete-btn"
                    onClick={() => handleReject(req.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HODRequests;