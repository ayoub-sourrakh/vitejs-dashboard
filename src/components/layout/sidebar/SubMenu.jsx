import React from 'react'
import './SubMenu.css'

const SubMenu = ({children, title, ...rest}) => {
  return (
	<div className="subMenuSidebar" {...rest}>
		<h1>{title}</h1>

		<div className="buttonList">
			{children}
		</div>
	</div>
  )
}

export default SubMenu