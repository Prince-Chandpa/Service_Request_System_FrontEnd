import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { dummyRequests } from '../data/dummyRequest'
import '../styles/RequestList.css'

function RequestList() {

    const [requests, setRequests] = useState(dummyRequests);

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "status pending"
            case "Approved":
                return "status approved"
            case "Rejected":
                return "status rejected"
            default:
                return "status bg-secondary"
        }
    }

    const handleDelete = (id) => {
        // const index = requests.findIndex(req => req.id === id)
        const updatedRequests = requests.filter(req => req.id !== id);
        setRequests(updatedRequests);
    }

    return (
        <div className='request-page'>
            <h3 className='page-title'>My Service Requests</h3>

            <div className="glass-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th className='text-center'>Priority</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center' colSpan={2}>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.map((req) => (
                                <tr key={req.id}>
                                    <td>{req.id}</td>
                                    <td>{req.title}</td>
                                    <td className='text-center'>{req.priority}</td>
                                    <td className='text-center'>
                                        <span className={getStatusColor(req.status)}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className='text-center'>
                                        <Link to={'/requestor-dashboard/edit/'+req.id}>
                                            <button className='edit-btn'>Edit</button>
                                        </Link>
                                    </td>
                                    <td className='text-center'>
                                        <button className='delete-btn' onClick={() => handleDelete(req.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestList