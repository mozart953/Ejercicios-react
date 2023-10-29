import React, { useState, useTransition } from "react";
import Tarea from "./Tarea";


function ventana(props){
    
    const [tarea,setTarea] = useState([]);

    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    
    const texto = '';

    const pulsacion = (e)=>{
        
        setInput(e.target.value.trim());          
        console.log(e.target.value);

    };

    const comprobarClic= function(){
       setCount(count+1);
       console.log(count);

       if(count==1){

            tarea= input;
            setTarea([texto,...tarea]);
            count =0;

       }

    };


    
    
    return(
        <div className="contenedor">
            <input type="text" placeholder={props.nombre} onChange={pulsacion}/>
            <button id="boton" onClick={comprobarClic}>Pulsar</button>

            <div className="elementos">
              {tarea}
            </div>

        </div>

    );


}

// function crearElemento(props){

//     let variable = document.createElement('ul');
//     const elemento = document.createElement('li');
//     elemento.classList.add('elemento');
//     elemento.innerText = props.texto;
//     variable.appendChild(elemento);

// }

export default ventana;