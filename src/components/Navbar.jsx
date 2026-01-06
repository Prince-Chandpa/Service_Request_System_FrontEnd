import { Link } from "react-router-dom";
import { currentUser } from "../data/currentUser";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar-glass sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4 py-2">
        <div className="flex-grow-1 me-4" style={{ maxWidth: "500px" }}>
          <div className="position-relative">
            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search service request..."
            />
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
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="rounded-circle"
              width="36"
              height="36"
            />
            <span className="fw-medium d-none d-sm-block">
              {currentUser.name}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
