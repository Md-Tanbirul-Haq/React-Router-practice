import React from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from "react-router";

const User_details = () => {
    let navigate = useNavigate();
    const data =  useLoaderData()
    
    return (
        <div>
            <h1>Name : {data.name}</h1>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
};

export default User_details;