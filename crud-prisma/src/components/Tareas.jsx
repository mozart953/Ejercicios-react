
export function Tareas({datos}){

    return(
        <>
        <div  className='bg-slate-900 p-3 mt-10 hover:bg-slate-800 hover:cursor-pointer'>
              <h3 className='font-bold text-2xl mb-2'>{datos.title}</h3>
              <p>{datos.description}</p>
              <p>{new Date(datos.createAl).toLocaleDateString()}</p>
      </div>
      </>
    );
    
}

