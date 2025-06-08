import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'

function App() {
  return (
    <div className="bg-[#ffebf0]">
      <NavBar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
