import React, { use } from 'react';

const Show_details_ = ({data_}) => {
    const data= use(data_)
    return (
        <div>
            <h1>Name = {data.name}</h1>
        </div>
    );
};

export default Show_details_;