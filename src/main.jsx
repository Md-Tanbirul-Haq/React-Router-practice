import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Test from './Component/test.jsx';
import Project from './Component/project.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Project,
    children:[
      { index: true, Component: Test },
      { path: "contact", Component: Test },
    ]
    
    
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router} />
  </StrictMode>,
)
