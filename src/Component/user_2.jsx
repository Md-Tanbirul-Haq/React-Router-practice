import React, { use } from 'react';

const User_2 = ({user_data}) => {
   let user_data_ = use( user_data)
   console.log(user_data_)
    return (
        <div>
            <h2>Data from User 2</h2>
        </div>
    );
};

export default User_2;