import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <div>login page</div>
  }, ,
  {
    path: "/regrister",
    element: <div>regrister page</div>
  }, ,
  {
    path: "/login",
    element: <div>login page</div>
  }, ,
  {
    path: "/login",
    element: <div>login page</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
