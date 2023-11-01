import { useEffect } from "react";

function Users (){

    useEffect(()=>{alert("cargando componente Users")},[]);

    return(
        <>
            <h1>Users</h1>
        </>
    );
}

export default Users;