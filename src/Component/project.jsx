import React from 'react';
import { Outlet } from 'react-router';
import Header from './header';

const Project = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Project;
