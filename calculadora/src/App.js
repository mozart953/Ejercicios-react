import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear1 from './componentes/BotonClear';
import freecodecamp from './imagenes/freecodecamp-logo.png'
import {useState} from 'react';
import {evaluate} from 'mathjs';



function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);

  };

  const calcularResultado =()=>{

    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores para realizar los calculos.");
    }
    
  };







  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freecodecamp}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />   
        
        
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear1 manejarClear={()=>setInput('')}>
            Clear
          </BotonClear1>
        </div>

      </div>


    </div>
  );
}

export default App;
