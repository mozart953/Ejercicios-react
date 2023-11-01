"use client"
import { useState } from "react";
import Users from "../components/Users.jsx";


export default function HomePage(){
    const [count, setCount] = useState(0);
    
    const hola = ()=>{
        setCount(count+1);
        alert(count);
    };
    
    return( 
        <>
            <h1>Hello world</h1>
            <button onClick={()=>{hola}}> Dar click </button>
            <Users />
        </>
    );

}