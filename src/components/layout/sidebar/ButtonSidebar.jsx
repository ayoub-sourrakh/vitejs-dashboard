import React from 'react'
import './ButtonSidebar.css'

const ButtonSidebar = ({Icon, name, active = false, notification}) => {
  return (
	<div 
		className="buttonSidebar"
		style={{
			background: active ? '#1B2B65' : 'unset',
			color: active ? '#FFFFFF' : '#CCD2E3'
		}}
	>
		<Icon />
		{name}

		{
			notification &&
			<div className='notification'>
				{
					notification > 99 ?
						"99+"
					:
						notification
				}
			</div>
		}

	</div>
  )
}

export default ButtonSidebar