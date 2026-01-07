import React, { useState } from "react";
import "../styles/AddRequest.css";
import { useParams } from "react-router-dom";

function UpdateRequest() {
  const [status, setStatus] = useState("In Progress");
  const { id } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Request Updated !!")
  }

  return (
    <div className="add-request-page">
      <div className="glass-form">
        <h3 className="page-title text-center">Update Request Status of #{id}</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Assigned</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="btn-center">
            <button type="submit" className="primary-btn small">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateRequest;
