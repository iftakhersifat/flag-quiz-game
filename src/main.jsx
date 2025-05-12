import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./i18n.js";
import './index.css'
import 'animate.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import NotFound from './Components/NotFound.jsx';
import About from './Components/About.jsx';
import { ToastContainer } from 'react-toastify';
// for language



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "about", Component: About}
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    <RouterProvider router={router} />
  </StrictMode>,
)
