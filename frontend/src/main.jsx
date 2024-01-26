import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import App from './App.jsx'
import Inscription from './pages/inscription.jsx'

const route = createBrowserRouter([
  {
    path: '/inscription',
    element: <Inscription />
  },
  {
    path: '/app',
    element: <App />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
    <Toaster />
  </React.StrictMode>,
)
