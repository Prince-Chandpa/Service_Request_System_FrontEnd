import React from 'react'
import { assignedRequests } from '../data/assignedRequests'
import '../styles/RequestList.css'

function HODAssignedRequests() {
  return (
    <div className='request-page'>
        <h3 className='page-title'>Assigned Requests</h3>

        <div className="glass-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Technician</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        assignedRequests.map(req => (
                            <tr key={req.id}>
                                <td>{req.id}</td>
                                <td>{req.title}</td>
                                <td>{req.technician}</td>
                                <td>{req.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default HODAssignedRequests