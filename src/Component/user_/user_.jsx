import React from 'react';
import { Link } from "react-router";
const User_ = ({user_data}) => {
    console.log(user_data)
    return (
        <div>
            <div style= {{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px"
        }}>
                <p>Name : {user_data.name}</p>
                <p>Website:{user_data.website}</p>
                <Link to={`/user/${user_data.id}`}>Deatils</Link>
            </div>
        </div>
    );
};

export default User_;