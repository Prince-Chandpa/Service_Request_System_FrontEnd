import React from "react";
import {technicianRequests} from '../data/technicianRequests'
import "../styles/RequestList.css";
import { Link } from "react-router-dom";

function TechnicianRequests() {
  return (
    <div className="request-page">
      <h3 className="page-title">My Assigned Requests</h3>

      <div className="glass-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {technicianRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.title}</td>
                <td>{req.priority}</td>
                <td>{req.status}</td>
                <td className="text-center">
                    <Link to={`/technician-dashboard/update/${req.id}`} className="primary-btn small text-decoration-none" >Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TechnicianRequests;
