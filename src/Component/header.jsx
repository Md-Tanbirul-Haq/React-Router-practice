import React from 'react';
import { NavLink } from "react-router";
import './project.css'
const Header = () => {
    return (
        <div>
            <h1>This is New Project.</h1>
            
            <div className='navabar_'>
            <NavLink to="/home">home</NavLink>
            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/address">address</NavLink>
            <NavLink to="/test">test</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/user_2">User_2</NavLink>
            </div>
        </div>
    );
};

export default Header;