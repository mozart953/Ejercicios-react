import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

class Testimonio extends React.Component{
    render(){
        return (
            <div className='contenedor-testimonio'>
                <img className='imagen-testimonio'
                    src={require(`../imagenes/${this.props.imagen}-testimonio.png`)}
                    alt={this.props.tituloImagen} />
    
                <div className='contenedor-texto-testimonio'>
                    <p className='nombre-testimonio'>
                        <strong>{this.props.nombre} </strong>en <strong>{this.props.pais}</strong>
    
                    </p>
                    <p className='cargo-testimonio'> 
                        {this.props.cargo} en <strong>{this.props.empresa}</strong>
                    </p>
                    <p className='texto-testimonio'>"{this.props.testimonio}"</p>
    
                </div>
    
    
            </div>
    
    
        );
    }

}



export default Testimonio;