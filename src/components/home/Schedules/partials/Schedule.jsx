import React from 'react'
import './Schedule.css'

const Schedule = ({schedule, ...rest}) => {
  return (
	<div className="scheduleWidget" {...rest}>

		<div className="infos">
			<div className="date">
				<h2>{schedule.month}</h2>
				<h1>{schedule.number}</h1>
			</div>
			<div className="texts">
				<h1>{schedule.title}</h1>
				<h2>{schedule.category}</h2>
			</div>

		</div>

		<div className="completition">

			<div className="progressbar">
				<div className="progression" style={{width: schedule.completition + '%'}}></div>
			</div>


			{schedule.completition}% Complete
		</div>
	</div>
  )
}

export default Schedule