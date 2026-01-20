import React, { useState } from 'react'
import '../styles/AddRequest.css'

import { dummyRequests } from '../data/dummyRequest'
import { useNavigate } from 'react-router-dom'

function AddRequest() {
    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        title: "",
        description: "",
        priority: "Low",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            id : dummyRequests.length+1,
            [e.target.name]: e.target.value,
            status: "Pending"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dummyRequests.push(formData)


        setFormData({
            title: "",
            description: "",
            priority: "Low",
        })

        navigate('/requestor-dashboard/requests')
    }

    return (
        
        <div className="add-request-page">
            <div className="glass-form">
                <h3 className="page-title text-center">Create Service Request</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Request Title</label>
                        <input type="text" name="title" placeholder="Enter request title" value={formData.title} onChange={handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" rows="3" placeholder="Describe your issue" value={formData.description} onChange={handleChange} required>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label>Priority</label>
                        <select name="priority" value={formData.priority} onChange={handleChange} >
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
        
    )
}

export default AddRequest