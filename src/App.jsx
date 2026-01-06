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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}/>

				<Route path="/requestor-dashboard" element={<Layout/>}>
					<Route index element={<DashboardRequestor/>}/>
					<Route path="requests" element={<RequestList/>} />
					<Route path="add" element={<AddRequest/>} />
					<Route path="edit/:id" element={<EditRequest/>} />
				</Route>

				<Route path="/hod-dashboard" element={<Layout/>}>
					<Route index element={<DashboardHOD/>}/>
					<Route path="requests" element={<HODRequests/>} />
				</Route>

				<Route path="/technician-dashboard" element={<Layout/>}>
				
					<Route index element={<DashboardTechnician/>}/>
					
				</Route>

			</Routes>
		</BrowserRouter>
	)
}

export default App