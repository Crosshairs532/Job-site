import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './component/Root'
import Home from './component/Home/Home'
import Error from './component/Error/Error'
import Statistics from './component/Statistics/Statistics'
import Applied from './component/Applied/Applied'
import Blog from './component/Blog/Blog'
import { Helmet, HelmetProvider } from 'react-helmet-async'
// import Jobcategory from './component/Home/Jobcategory/Jobcategory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('../public/data/jobs copy.json'),
        element: <Home></Home>

      },

      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
)
