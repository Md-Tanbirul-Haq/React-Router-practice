import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Test from './Component/test.jsx';
import Project from './Component/project.jsx';
import Contact from './Component/contact.jsx';
import Home from './Component/home.jsx';
import Address from './Component/address.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Project,
    children:[
      { index: true, Component: Test },
      { path:"test", Component: Test },
      { path: "contact", Component: Contact },
      { path: "home", Component: Home },
      { path: "address", Component: Address },
    ]
    
    
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router} />
  </StrictMode>,
)
