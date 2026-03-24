import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Auth.css";
import { apiRequest } from "../utils/api";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
    Role: "Requestor",
  });

  // const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/login`;

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const tempRes = await fetch(apiUrl, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(loginData),
      // });

      const res = await apiRequest("/users/login","POST",loginData)

      if (res.error) {
        throw new Error(res.message || "Login failed");
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));



      const role = res.data.user.Role.toLowerCase();
      if (role === loginData.Role.toLowerCase()) {
        navigate(`/${role}-dashboard`);
      } else {
        throw new Error("Invalid credentials");
      }

    } catch (err) {
      alert(err.message);
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="auth-container">
      <div className="background-blobs">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <h3 className="text-center mb-2 fw-bold">Service Request System</h3>
        <p className="text-center mb-4">Login to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              className="modern-input"
              placeholder="abc@xyz.com"
              value={loginData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              className="modern-input"
              placeholder="Enter Password"
              value={loginData.Password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-4">
            <label>Login As</label>
            <select
              name="Role"
              className="modern-select"
              value={loginData.Role}
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
            className="modern-btn">
            Login
          </motion.button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
