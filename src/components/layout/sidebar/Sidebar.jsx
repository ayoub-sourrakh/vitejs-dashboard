import React from 'react'
import ButtonSidebar from './ButtonSidebar'
import './Sidebar.css'
import SubMenu from './SubMenu'
import { Chart, Find, Calendar, Folder, Chat, User, Graph, Settings, Question, ChevronLeft } from '../../common/Icons'

const Sidebar = () => {
  return (
	  <div className="sidebarDashboard">

      <div className="top">

        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
            <rect width="40" height="40" fill="#017EFA" rx="8"/>
            <path fill="#fff" d="M20 10c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10Zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z"/>
            <path fill="#fff" d="m21 14-6 7h4v5l6-7h-4v-5Z"/>
          </svg>
          <h1>Dash</h1>
        </div>

        <SubMenu title="MAIN MENU" style={{marginTop: '61px'}}>
          <ButtonSidebar Icon={Chart} name="Dashboard" active={true} />
          <ButtonSidebar Icon={Chat} name="Inbox" notification={3} />
        </SubMenu>

        <SubMenu title="Workspace" style={{marginTop: '31px'}}>
          <ButtonSidebar Icon={User} name="Accounts" />
          <ButtonSidebar Icon={Calendar} name="Schedule Post" />
          <ButtonSidebar Icon={Find} name="Communities" notification={50} />
          <ButtonSidebar Icon={Graph} name="Analytics" />
        </SubMenu>

        <SubMenu title="General" style={{marginTop: '31px'}}>
          <ButtonSidebar Icon={Folder} name="File & Folders" />
          <ButtonSidebar Icon={Settings} name="Settings" />
        </SubMenu>

      </div>

      <div className="bottom">
        <div className="support">

            <div className="questionIcon">
              <Question />
            </div>

            <p>Need Help with <strong>Dash</strong>?</p>
            <button>Go to help center</button>
        </div>
      </div>

      <div className="hideSidebar">
        <ChevronLeft />
      </div>
    </div>
  )
}

export default Sidebar