import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/api";
import "../styles/SignUp.css";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    MobileNumber: "",
    Password: "",
    Department: "",
    Designation: "",
    Location: "",
    Role: "Requestor",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(signUpData),
      // });
      const data = await apiRequest("/users/register","POST",signUpData);

      if (data.error) {
        throw new Error(data.message || "Sign-Up failed");
      }

      alert("Sign-Up Successful! Redirecting to login page.");
      navigate("/");

    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="background-blobs">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <motion.div
        className="auth-card wide-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <h3 className="text-center mb-2 fw-bold">Service Request System</h3>
        <p className="text-center mb-4">Sign up to get started</p>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              className="modern-input"
              placeholder="Enter your name"
              value={signUpData.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              className="modern-input"
              placeholder="abc@xyz.com"
              value={signUpData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="MobileNumber"
              className="modern-input"
              placeholder="Enter your mobile number"
              value={signUpData.MobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              className="modern-input"
              placeholder="Enter Password"
              value={signUpData.Password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="Department"
              className="modern-input"
              placeholder="Enter your department"
              value={signUpData.Department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Designation</label>
            <input
              type="text"
              name="Designation"
              className="modern-input"
              placeholder="Enter your designation"
              value={signUpData.Designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Location</label>
            <input
              type="text"
              name="Location"
              className="modern-input"
              placeholder="Enter your location"
              value={signUpData.Location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Sign Up As</label>
            <select
              name="Role"
              className="modern-select"
              value={signUpData.Role}
              onChange={handleChange}>
              <option>Requestor</option>
              <option>HOD</option>
              <option>Technician</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="modern-btn full-width">
            Sign Up
          </motion.button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
