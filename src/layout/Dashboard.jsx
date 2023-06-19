import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/navbar/Navbar'
import Sidebar from '../components/layout/sidebar/Sidebar'
import './Dashboard.css'

const Dashboard = () => {
  return (
	<>
		<Sidebar />
		<Navbar />

		<div className="contentDashboard">
			<Outlet />
		</div>
		
	</>
  )
}

export default Dashboard