import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import TareaFormulario from './componentes/TareaFormulario';
import ListaTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo}
          className='freecodecamp-logo' />

      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
            <ListaTareas/>
            
      </div>
    </div>
  );
}

export default App;
