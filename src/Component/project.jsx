import React from 'react';
import { Outlet } from 'react-router';
import Header from './header';
import Footer from './footer';
import { useNavigation } from "react-router";
const Project = () => {
     const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            {
                isNavigating && <p>Loading...</p>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            

        </div>
    );
};

export default Project;
