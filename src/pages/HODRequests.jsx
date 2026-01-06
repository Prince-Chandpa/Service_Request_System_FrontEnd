import React from "react";
import { dummyRequests } from "../data/dummyRequest";
import "../styles/RequestList.css";

function HODRequests() {
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.title}</td>
                <td>{req.priority}</td>
                <td>
                  <button className="btn btn-sm btn-success me-2">
                    Approve
                  </button>
                  <button className="btn btn-sm btn-danger">
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