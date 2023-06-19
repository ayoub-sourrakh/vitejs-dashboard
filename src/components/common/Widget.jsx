import React from 'react'
import {ChevronLeft} from '../common/Icons'
import './Widget.css'

const Widget = ({children, title, ...rest}) => {
  return (
	<div className="widgetWrapper" {...rest}>

		<div className="header">
			<h1>{title}</h1>

			<a href="">
				See Detail
				<ChevronLeft />
			</a>
		</div>

		<div className="content">
			{children}
		</div>

	</div>
  )
}

export default Widget