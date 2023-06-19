import React from 'react'
import './Profile.css'
import { ChevronDown } from '../../common/Icons'
import photoProfile from '../../../assets/img/profilPicture.jpg'

const Profile = () => {
  return (
	<div className="profileNavbarMain">
		<div className="photo">
			<img src={photoProfile} alt="" />
		</div>
		<div className="infos">
			<h1>Erza Miller</h1>
			<h2>erza.miller@email.com</h2>
		</div>
		<div className="chevron">
			<ChevronDown />
		</div>
	</div>
  )
}

export default Profile