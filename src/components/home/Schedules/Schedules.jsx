import React from 'react'
import Widget from '../../common/Widget'
import Schedule from './partials/Schedule'
import './Schedules.css'

const Schedules = ({...rest}) => {
	const schedules = [
		{
			month: 'Jul',
			number: 18,
			title:'Write 5 microblog articles on Instagram',
			category: 'Office / Marketing',
			completition : 50
		},
		{
			month: 'Jul',
			number: 25,
			title:'Publish 20 post on Dribbbles',
			category: 'Office / Marketing',
			completition : 24
		},
		{
			month: 'Jul',
			number: 12,
			title:'Drafting Material for Travel Campaign',
			category: 'Drafting',
			completition : 48
		},
	]

  return (
	<Widget title="Schedule Content" {...rest}>
		<div
			style={{
				padding: '22px 27px 40px 27px'
			}}
		>
			{
				schedules.map((schedule, i) => (
					<Schedule 
						key={i} 
						schedule={schedule}
						style={{
							marginTop: i === 0 ? 'unset' : '20px',
							borderBottom: i === schedules.length - 1 && 'unset'
						}}
					/>
				))
			}
		</div>
	</Widget>
  )
}

export default Schedules