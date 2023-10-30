import React from "react";
import '../estilos/Tarea.css';

function Tarea (props){

    return(
        <div className="tarea">
            {props.name}
            <div className="eliminar" onClick={()=>props.metodo(props.id)}>Eliminar tarea</div>

            
        </div>

        
    );



}

export default Tarea;