import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Auth.css";

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        role: "Requestor",
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(loginData.role === "Requestor"){
            navigate("/requestor-dashboard",{
                state : {role : "Requestor"}
            });
        }else if(loginData.role === "HOD"){
            navigate("/hod-dashboard",{
                state : {role : "HOD"}
            });
        }else if(loginData.role === "Technician"){
            navigate("/technician-dashboard",{
                state : {role : "Technician"}
            });
        }
    }

    return (
        <div className="auth-container">
            <div className="background-blobs">
                <div className="blob"></div>
                <div className="blob"></div>
            </div>

            <motion.div className="auth-card" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration:0.6, ease: "easeOut"}}>

                <h3 className="text-center mb-2 fw-bold">Service Request System</h3>
                <p className="text-center mb-4">Login to continue</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="modern-input"
                            placeholder="abc@xyz.com"
                            value={loginData.email}
                            onChange={handleChange}
                            // required
                        />
                    </div>

                    <div className="input-group mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="modern-input"
                            placeholder="Enter Password"
                            value={loginData.password}
                            onChange={handleChange}
                            // required
                        />
                    </div>

                    <div className="input-group mb-4">
                        <label>Login As</label>
                        <select
                            name="role"
                            className="modern-select"
                            value={loginData.role}
                            onChange={handleChange}
                        >
                            <option>Requestor</option>
                            <option>HOD</option>
                            <option>Technician</option>
                        </select>
                    </div>

                    <motion.button whileHover={{scale:1.02}} whileTap={{scale: 0.98}} type="submit" className="modern-btn">
                        Sign In
                    </motion.button>

                </form>
            </motion.div>
        </div>
    );
}

export default Login;
