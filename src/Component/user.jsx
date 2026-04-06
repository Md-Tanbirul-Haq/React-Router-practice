import React from 'react';
import { useLoaderData } from "react-router";
import User_ from './user_/user_';


const User = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2>Data from User.</h2>
            {
                data.map((user_data,index)=>(<User_ key={index} user_data={user_data}></User_>))
            }
        </div>
    );
};

export default User;