import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import DashboardRequestor from "./pages/DashboardRequestor"
import RequestList from "./pages/RequestList"
import AddRequest from "./pages/AddRequest"
import EditRequest from "./pages/EditRequest"
import Login from "./pages/Login"
import DashboardHOD from "./pages/DashboardHOD"
import DashboardTechnician from "./pages/DashboardTechnician"
import HODRequests from "./pages/HODRequests"
import HODAllRequests from "./pages/HODAllRequests"
import HODAssignedRequests from "./pages/HODAssignedRequests"
import TechnicianRequests from "./pages/TechnicianRequests"
import UpdateRequest from "./pages/UpdateRequest"
import TechnicianAssigned from "./pages/TechnicianAssigned"
import SignUp from "./pages/SignUp"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}/>
				<Route path="/signup" element={<SignUp />}/>

				<Route path="/requestor-dashboard" element={<Layout role='Requestor' />}>
					<Route index element={<DashboardRequestor/>}/>
					<Route path="requests" element={<RequestList/>} />
					<Route path="add" element={<AddRequest/>} />
					<Route path="edit/:id" element={<EditRequest/>} />
				</Route>

				<Route path="/hod-dashboard" element={<Layout role='HOD' />}>
					<Route index element={<DashboardHOD/>}/>
					<Route path="requests" element={<HODRequests/>} />
					<Route path="all-requests" element={<HODAllRequests/>} />
					<Route path="assigned-requests" element={<HODAssignedRequests/>} />
				</Route>


				<Route path="/technician-dashboard" element={<Layout role='Technician' />}>
				
					<Route index element={<DashboardTechnician/>}/>
					<Route path="requests" element={<TechnicianRequests/>} />
					<Route path="update/:id" element={<UpdateRequest/>} />
					<Route path="assigned" element={<TechnicianAssigned/>} />
				</Route>

			</Routes>
		</BrowserRouter>
	)
}

export default App