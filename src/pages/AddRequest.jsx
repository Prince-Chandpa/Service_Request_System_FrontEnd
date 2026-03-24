import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/api";
import "../styles/AddRequest.css";

function AddRequest() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ServiceRequestTitle: "",
    ServiceRequestDescription: "",
    PriorityLevel: "Low",
    ServiceRequestTypeID: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiRequest("/service-request", "POST", formData);

      if (!res.error) {
        alert("Request created successfully!");

        setFormData({
          ServiceRequestTitle: "",
          ServiceRequestDescription: "",
          PriorityLevel: "Low",
          ServiceRequestTypeID: 1,
        });

        navigate("/requestor-dashboard/requests");
      } else {
        alert(res.message || "Failed to create request. Please try again.");
      }
    } catch (error) {
      console.error("Error creating request:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="add-request-page">
      <div className="glass-form">
        <h3 className="page-title text-center">Create Service Request</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Request Title</label>
            <input
              type="text"
              name="ServiceRequestTitle"
              placeholder="Enter request title"
              value={formData.ServiceRequestTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="ServiceRequestDescription"
              rows="3"
              placeholder="Describe your issue"
              value={formData.ServiceRequestDescription}
              onChange={handleChange}
              required></textarea>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select
              name="PriorityLevel"
              value={formData.PriorityLevel}
              onChange={handleChange}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="btn-center">
            <button type="submit" className="primary-btn small">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRequest;
