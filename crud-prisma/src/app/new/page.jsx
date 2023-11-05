"use client"

import { useEffect, useState } from "react";
import { POST } from "../api/tasks/route";
import { useRouter } from "next/navigation";

export function NewPage({params}){
    console.log(params);
    const [title, setTitle] = useState(" ");
    const [description, setDescription]=useState(" ");

    useEffect(
        ()=>{

            if(params.id){
                fetch(`/api/tasks/${params.id}`).then(datos=>datos.json())
                .then(data=>{setTitle(data.title)
                           setDescription(data.description)});                
            }

       
        },[]);

    const router = useRouter();

    const onSubmit = async (e)=>{
        e.preventDefault();
        // const title = e.target.title.value;
        // const description = e.target.description.value;
        // console.log(title, description);

        if(params.id){
            const res = await fetch(`/api/tasks/${params.id}`,{
                method:'PUT',
                body:JSON.stringify({title,description}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const data = await res.json();
            console.log(data);

        }else{
            const res =  await fetch('/api/tasks', {
                method:'POST',
                body: JSON.stringify({title,description}),
                headers:{
                    'Content-Type' : 'application/json'
                }
    
            });
            
            const data = await res.json();
            console.log(data);

        }

      
        router.refresh();
        router.push('/');   

    };

    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-slate-800 p-10 sm:w-1/4 md:w-1/2"
                    onSubmit={onSubmit}
                    
                    >
                    <label htmlFor="title" className="font-bold text-sm">
                        Titulo de la tarea
                    </label>
                    <input type="text" 
                    id="title"
                    className="border border-gray-400 p-2 w-full text-black"
                    placeholder='Titulo de la tarea' 
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}/>
                    <label htmlFor="description" className="font-bold text-sm">Descripcion de la tarea</label>
                    <textarea  rows="3" 
                            id="description"
                            className="border border-gray-400 p-2 mb-4 w-full text-black"
                            placeholder="contenido"
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}/>

                    <div className="flex justify-between">

                    <button 
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>

                     {
                        params.id && (
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 roundend " type="button"
                            onClick={async ()=>{
                                const datoEliminado = await fetch(`/api/tasks/${params.id}`,{
                                    method:'DELETE'
                                })
                                console.log(datoEliminado);
                                router.refresh();
                                router.push('/');
                            }}>Eliminar</button>
                        )
                     }
                     </div>
                </form>
            </div>
        </>
    );

}

