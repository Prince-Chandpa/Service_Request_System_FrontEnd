import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import '../styles/Sidebar.css'

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [collapsed,setCollapsed] = useState(true)

    const role = location.state?.role || "Requestor"
    
    return (
        <>
            {!collapsed && (
                <div 
                    className="sidebar-overlay d-lg-none"
                    onClick={()=> setCollapsed(false)}
                />
            )}
            <button
                className="btn btn-secondary sidebar-toggle d-lg-none"
                onClick={() => setCollapsed(!collapsed)}
                >
                ☰
            </button>

            <aside className={`sidebar sidebar-glass ${collapsed ? "collapsed" : ""}`}>
                <div className="sidebar-header">
                    <div className="logo-box bi bi-person-circle"></div>
                    <div>
                        <h6 className="mb-0">Service Request</h6>
                        <small>Management System</small>
                    </div>
                </div>

                <nav className='sidebar-nav'>
                    {role === "Requestor" && (
                        <>
                            <NavLink to='/requestor-dashboard' end className='sidebar-link'>
                                Dashboard
                            </NavLink>
                            <NavLink to='/requestor-dashboard/requests' className='sidebar-link'>
                                My Requests
                            </NavLink>
                            <NavLink to='/requestor-dashboard/add' className='sidebar-link'>
                                Create Request
                            </NavLink>
                            <NavLink to='/requestor-dashboard/edit/:id' className='sidebar-link'>
                                Edit Request
                            </NavLink>
                        </>
                    )}

                    {role === "HOD" && (
                        <>
                            <NavLink to='/hod-dashboard' end className='sidebar-link'>
                                Dashboard
                            </NavLink>
                            <NavLink to='/hod-dashboard/requests' className='sidebar-link'>
                                Requests
                            </NavLink>
                        </>
                    )}

                    {role === "Technician" && (
                        <>
                            <NavLink to='/technician-dashboard' end className='sidebar-link'>
                                Dashboard
                            </NavLink>
                            
                        </>
                    )}

                </nav>

                <div className="sidebar-footer">
                    <button className="sidebar-link logout-btn" onClick={()=>{
                        navigate("/")
                    }}>
                        Logout
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Sidebar