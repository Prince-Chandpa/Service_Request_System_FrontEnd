import React, { useEffect, useState } from "react";
import "../styles/RequestList.css";
import { apiRequest } from "../utils/api";

function HODRequests() {
  const [requests, setRequests] = useState([]);

  const fetchData = async () => {
    const res = await apiRequest("/service-request");

    if (!res.error) {
      setRequests(res.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (id) => {
    try{
      await apiRequest(`/service-request/status/${id}`, "PATCH", {
        StatusID: 2,
      });
      fetchData();
    }catch(err){
      console.log(err.message)
    }
  };

  const handleReject = async (id) => {
    await apiRequest(`/service-request/status/${id}`, "PATCH", {
      StatusID: 3,
    });
    fetchData();
  };

  const pendingRequests = requests.filter(
    (req) => req.ServiceRequestStatusID === 1,
  );

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
            {pendingRequests.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No Pending Requests
                </td>
              </tr>
            ) : (
              pendingRequests.map((req) => (
                <tr key={req.ServiceRequestID}>
                  <td>{req.ServiceRequestID}</td>
                  <td>{req.ServiceRequestTitle}</td>
                  <td>{req.PriorityLevel}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm approve-btn me-2"
                      onClick={() => handleApprove(req.ServiceRequestID)}>
                      Approve
                    </button>
                    <button
                      className="btn btn-sm delete-btn"
                      onClick={() => handleReject(req.ServiceRequestID)}>
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HODRequests;