import React from 'react'
import { dummyRequests } from '../data/dummyRequest'
import '../styles/RequestList.css'

function RequestList() {

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

    return (
        <div className='request-page'>
            <h3 className='page-title'>My Service Requests</h3>

            <div className="glass-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th className='text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyRequests.map((req) => (
                                <tr key={req.id}>
                                    <td>{req.id}</td>
                                    <td>{req.title}</td>
                                    <td className='text-center'>
                                        <span className={getStatusColor(req.status)}>
                                            {req.status}
                                        </span>
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