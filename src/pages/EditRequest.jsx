import React, { useState } from "react";
import "../styles/EditRequest.css";
import { dummyRequests } from "../data/dummyRequest";
// import { useNavigate } from "react-router-dom";

function EditRequest() {
  // const { id } = useNavigate()

  const [formData, setFormData] = useState({
    title: "Internet not working",
    description: "Wifi is disconnected since morning",
    priority: "High",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(dummyRequests[id])
    alert("Request Updated");
  };

  return (
    <div className="edit-request-page">
      <div className="glass-form">
        <h3 className="page-title text-center">Edit Service Request</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Request Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="btn-center">
            <button type="submit" className="primary-btn success small">
              Update Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRequest;
