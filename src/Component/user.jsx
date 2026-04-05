import React from 'react';
import { useLoaderData } from "react-router";


const User = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>Data from User.</h2>
        </div>
    );
};

export default User;