import { Link } from "react-router-dom";
import { currentUser } from "../data/currentUser";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";
function Navbar() {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if(storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[])

  return (
    <nav className="navbar-glass sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4 py-2">
        <div className="flex-grow-1 me-4" style={{ maxWidth: "500px" }}>
          <div className="position-relative fw-bolder fs-4">
            SERVICE REQUEST MANAGEMENT SYSTEM
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn">
            <i className="bi bi-bell fs-5"></i>
          </button>

          <button className="btn">
            <i className="bi bi-envelope fs-5"></i>
          </button>

          <button className="btn">
            <i className="bi bi-gear fs-5"></i>
          </button>

          <div className="d-flex align-items-center gap-2 ps-3 border-start">
            {/* <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="rounded-circle"
              width="36"
              height="36"
            /> */}
            <span className="fw-medium d-none d-sm-block">
              {user ? user.Name : "Guest"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
