import React from 'react'
import './Navbar.css'
import Notification from './Notification'
import Profile from './Profile'
import Search from './Search'
import UserList from './UserList'

const Navbar = () => {
  return (
    <div className="navbarMain">
      <div className="left">
        <Profile />
        <div className="separator" style={{marginLeft: '30px', marginRight: '37px'}}></div>
        <Search />
      </div>

      <div className="right">
        <UserList />
        <div className="separator" style={{marginLeft: '35px', marginRight: '32px'}}></div>
        <Notification notification={true} />
      </div>
    </div>
  )
}

export default Navbar