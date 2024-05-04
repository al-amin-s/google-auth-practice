import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LogIn from './Components/LogIn.jsx';
import Register from './Components/Register.jsx';
import Products from './Components/Products.jsx';
import Nave from './Components/Nave.jsx';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/nave",
        element:<Nave></Nave>
      },
      {
        path:"/home",
        element:<Home></Home>
      },

      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/products",
        element:<Products></Products>
      },
      {
        path:"/about",
        element:<About></About>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
    
  </React.StrictMode>,
)
