import React from 'react'
import './UserList.css'
import userImg1 from '../../../assets/img/profilPicture2.jpg'
import userImg2 from '../../../assets/img/profilPicture3.jpg'
import userImg3 from '../../../assets/img/profilPicture4.jpg'
import userImg4 from '../../../assets/img/profilPicture5.jpg'

const UserList = () => {
	const users = [userImg1, userImg2, userImg3, userImg4]

  return (
	<div className="userListNavbar">
		<div className="status">
			<div className="point"></div>
			ONLINE
		</div>
		<div className="userList" style={{width: 32 * users.length + 'px'}}>
			{
				users.map((user, i) => (
					<User key={i} imgUrl={user} position={i} nbElement={users.length} />
				))
			}
		</div>
	</div>
  )
}

export default UserList


const User = ({imgUrl, position, nbElement}) => {
	return (
		<div 
			className="user"
			style={{
				left: position * 26 + 'px',
				zIndex: nbElement - position
			}}
		>
			<img src={imgUrl} alt="" />
		</div>
	)
}