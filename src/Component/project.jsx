import React from 'react';
import { Outlet } from 'react-router';
import Header from './header';
import Footer from './footer';

const Project = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            

        </div>
    );
};

export default Project;
