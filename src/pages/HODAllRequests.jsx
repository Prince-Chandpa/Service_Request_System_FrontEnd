import React from 'react'
import '../styles/RequestList.css'
import { dummyRequests } from '../data/dummyRequest'
function HODAllRequests() {
    return (
        <div className='request-page'>
            <h3 className='page-title'>All Service Requests</h3>

            <div className="glass-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyRequests.map(req => (
                                <tr key={req.id}>
                                    <td>{req.id}</td>
                                    <td>{req.title}</td>
                                    <td>
                                        <span className={`status text-center ${req.status.toLowerCase()}`}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td>{req.priority}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HODAllRequests