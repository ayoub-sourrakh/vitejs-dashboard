import React from 'react'
import LineChart from '../components/home/LineChart/LineChart'
import Schedules from '../components/home/Schedules/Schedules'
import TopChannels from '../components/home/TopChannels/TopChannels'
import './Home.css'

const Home = () => {
  return (
	<div className='homePage'>

		<div className="left">
			<h1>Dashboard</h1>
			<h2>Welcome back, Erza Miller!</h2>

			<Schedules style={{marginTop:'28px'}} />
			<TopChannels style={{marginTop:'40px'}} />
		</div>

		<div className="right">
			<LineChart style={{marginTop:'130px'}} />
		</div>
	</div>
  )
}

export default Home