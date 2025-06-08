import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'

function App() {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
