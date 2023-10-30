import React, { useState, useTransition } from "react";
import Tarea from "./Tarea";
import {v4 as uuidv4} from 'uuid';


function ventana(props){
    
    const [tarea,setTarea] = useState([]);

    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    
    const texto = '';

    const pulsacion = (e)=>{
        
        setInput(e.target.value.trim());          
        console.log(e.target.value);
        //texto = e.target.value.trim();
        
      
        

    };

    const comprobarClic= function(){
       setCount(count+1);
       console.log(count);
       let tareasNuevas;

       const tareaNueva ={
        id:uuidv4(),
        nombre:input,

        };

        tareasNuevas = [tareaNueva,...tarea];

       setTarea(tareasNuevas);
        


    };

    const EliminarTarea = function(id1){
        console.log("eliminando")
        const tareasNuevas = tarea.filter(x=>x.id !==id1);
        setTarea(tareasNuevas);
    };


    
    
    return(
        <div className="contenedor">
            <input type="text" placeholder={props.nombre} onChange={pulsacion}/>
            <button id="boton" onClick={comprobarClic}>Pulsar</button>

            <div className="elementos">
              {
                tarea.map(a=>
                    <Tarea name={a.nombre} metodo={EliminarTarea} id={a.id}/>
                )
              }
            </div>

        </div>

    );


}


export default ventana;