import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '/src/Home'
import SideBar from './SideBar.jsx'
import CategoryProductsPage from './CategoryProductsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/sidebar',
        element: <SideBar/>, 
      },{
        path:"/category-product/:categoryId",
        element:<CategoryProductsPage/>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
)
