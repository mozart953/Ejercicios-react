"use client"
import { useParams } from "next/navigation";

function UserPage(){
    const params = useParams();
    console.log(params);
    
    return(
        <button onClick={()=>{
            console.log("works");
        }}>

        </button>
    );
}

export default UserPage;