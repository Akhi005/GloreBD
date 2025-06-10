import { Outlet } from 'react-router-dom'
import NavBar from '/src/pages/NavBar'
import Footer from '/src/pages/Footer'

function App() {
  return (
      <div className="min-h-screen flex flex-col bg-[#ffebf0]">
      <NavBar/>
      <main className="flex-grow">
         <Outlet />
      </main>
       <Footer/>
    </div>
  )
}

export default App
