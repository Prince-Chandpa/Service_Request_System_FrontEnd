import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RequestList.css";
import { apiRequest } from "../utils/api";

function RequestList() {
  const [requests, setRequests] = useState([]);

  const statusMap = {
    1: "Pending",
    2: "Approved",
    3: "Rejected",
  };

  const fetchData = async () => {
    const res = await apiRequest("/service-request");

    if (!res.error) {
      const user = JSON.parse(localStorage.getItem("user"));
      const myRequests = res.data.filter(
        (req) => req.UserID === user.UserID,
      );
      setRequests(myRequests);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "status pending";
      case "Approved":
        return "status approved";
      case "Rejected":
        return "status rejected";
      default:
        return "status bg-secondary";
    }
  };

  const handleDelete = (id) => {
    // const index = requests.findIndex(req => req.id === id)
    const updatedRequests = requests.filter(
      (req) => req.ServiceRequestID !== id,
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="request-page">
      <h3 className="page-title">My Service Requests</h3>

      <div className="glass-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th className="text-center">Priority</th>
              <th className="text-center">Status</th>
              <th className="text-center" colSpan={2}>
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => {
              const statusText = statusMap[req.ServiceRequestStatusID] || "Pending";
              return (
                <tr key={req.ServiceRequestID}>
                  <td>{req.ServiceRequestID}</td>
                  <td>{req.ServiceRequestTitle}</td>
                  <td className="text-center">{req.PriorityLevel}</td>
                  <td className="text-center">
                    <span className={getStatusColor(statusText)}>
                      {statusText}
                    </span>
                  </td>
                  <td className="text-center">
                    <Link
                      to={"/requestor-dashboard/edit/" + req.ServiceRequestID}>
                      <button className="edit-btn">Edit</button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(req.ServiceRequestID)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestList;
