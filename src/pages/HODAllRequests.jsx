import React, { useEffect, useState } from "react";
import "../styles/RequestList.css";
import { dummyRequests } from "../data/dummyRequest";
import { apiRequest } from "../utils/api";
function HODAllRequests() {
  const [requests, setRequests] = useState([]);
  const fetchRequests = async () => {
    const res = await apiRequest("/service-request");

    if (!res.error) {
      setRequests(res.data);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const getStatusText = (statusID) => {
    if (statusID === 1) return "Pending";
    if (statusID === 2) return "Approved";
    if (statusID === 3) return "Rejected";
    if (statusID === 4) return "Completed";
    return "Unknown";
  };

  return (
    <div className="request-page">
      <h3 className="page-title">All Service Requests</h3>

      <div className="glass-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No Requests Found
                </td>
              </tr>
            ) : (
              requests.map((req) => {
                const statusText = getStatusText(req.ServiceRequestStatusID);
                return (
                  <tr key={req.ServiceRequestStatusID}>
                    <td>{req.ServiceRequestStatusID}</td>
                    <td>{req.ServiceRequestTitle}</td>
                    <td>
                      <span
                        className={`status text-center ${statusText.toLowerCase()}`}>
                        {statusText}
                      </span>
                    </td>
                    <td>{req.PriorityLevel}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HODAllRequests;
