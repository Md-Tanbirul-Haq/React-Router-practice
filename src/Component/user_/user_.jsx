import React, { Suspense, useState } from 'react';
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Show_details_ from '../show_details_';
const User_ = ({user_data}) => {
    const [Show_Deatils,setShow_Deatils] = useState(false)
    
     let navigate = useNavigate();
    const details_button =()=>{
        navigate(`/user/${user_data.id}`)
    }
    const data_ = fetch(`https://jsonplaceholder.typicode.com/users/${user_data.id}`).then(res=>res.json())
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
                <button onClick={()=>details_button()}>Deatails of : Id = {user_data.id}</button>
                <button onClick={()=>setShow_Deatils(!Show_Deatils)}>
                {Show_Deatils ? "Hide":"Show"}
               
                </button>
                 <div>
                {
                    Show_Deatils && <Suspense fallback={<p>Loading...</p>}>
                     
                        <Show_details_ data_={data_}></Show_details_>
                        
                    </Suspense>
                    
                }
                </div>
            </div>
        </div>
    );
};

export default User_;