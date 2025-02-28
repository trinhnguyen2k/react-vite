import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegristerPage from './pages/regrister.jsx';
import UserPage from './pages/user.jsx';
import ProductPage from './pages/product.jsx';
import './styles/global.css';
import TodoApp from './component/learn/todo/TodoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Nested route, page user & product thua huong UI tu component parent APP.
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/regrister",
    element: <RegristerPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
