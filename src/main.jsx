import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  Suspense } from "react";

import { createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Test from './Component/test.jsx';
import Project from './Component/project.jsx';
import Contact from './Component/contact.jsx';
import Home from './Component/home.jsx';
import Address from './Component/address.jsx';
import User from './Component/user.jsx';
import User_2 from './Component/user_2.jsx';
import User_details from './Component/user_/user_details.jsx';

const user_data = fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())

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
      { path: "user", 
        
      loader : ()=>(fetch('https://jsonplaceholder.typicode.com/users')),
        
      
        Component: User },
      
      { path: "user_2", 
        
      element: <div> 
<Suspense fallback={<p>Loading...</p>}>
      <User_2  user_data={user_data}></User_2>
    </Suspense>

      </div>       
      
         },
         {
          path:"user/:user_Id",
          loader:  ({ params }) => (fetch(`https://jsonplaceholder.typicode.com/users/${params.user_Id}`)),
          Component: User_details
         }
      

    ]
    
    
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router} />
  </StrictMode>,
)
