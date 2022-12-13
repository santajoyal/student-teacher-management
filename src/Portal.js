import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal() {
  return (
    <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <Topbar/>
            {/* <h1 className='App'>WELCOME TO STUDENT - TEACHER ADMIN PORTAL</h1> */}
           <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default Portal