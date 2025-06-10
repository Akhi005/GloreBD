import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '/src/pages/Home'
import CategoryProductsPage from '/src/pages/CategoryProductsPage.jsx'
import SearchProvider from '/src/context/SearchContext.jsx'
import CollectionPage from './pages/Collections.jsx'
import Checkout from '/src/pages/Checkout.jsx'
import { CartProvider } from './context/CartItemContext.jsx'
import SingleProduct from './pages/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },{
        path:"/category-product/:categoryId",
        element:<CategoryProductsPage/>
      },{
          path:"/collections",
        element:<CollectionPage/>
      }
    ],
  },{
        path:'/checkout',
        element:<Checkout/>
    },{
      path:'/singleproduct/:category/:id',
      element:<SingleProduct/>
    }
])

createRoot(document.getElementById('root')).render(
   <React.StrictMode> 
       <SearchProvider>
            <CartProvider><RouterProvider router={router} /></CartProvider>
        </SearchProvider>
    </React.StrictMode>
)
