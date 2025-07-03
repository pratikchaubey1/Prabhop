import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Root({search,setsearch}) {
  return (
    <div>
        <Navbar   search={search} setsearch={setsearch} ></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root