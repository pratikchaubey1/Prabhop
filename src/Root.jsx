import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './page/footer/Footer'

function Root({search,setsearch}) {
  return (
    <div>
        <Navbar   search={search} setsearch={setsearch} ></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root