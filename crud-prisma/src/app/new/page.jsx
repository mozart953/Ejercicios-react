"use client"

import { POST } from "../api/tasks/route";
import { useRouter } from "next/navigation";

function NewPage(){

    const router = useRouter();

    const onSubmit = async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        console.log(title, description);

       const res =  await fetch('/api/tasks', {
            method:'POST',
            body: JSON.stringify({title,description}),
            headers:{
                'Content-Type' : 'application/json'
            }

        });
        
        const data = await res.json();
        console.log(data);

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
                    placeholder="Titulo"/>
                    <label htmlFor="description" className="font-bold text-sm">Descripcion de la tarea</label>
                    <textarea  rows="3" 
                            id="description"
                            className="border border-gray-400 p-2 mb-4 w-full text-black"
                            placeholder="contenido"/>

                    <button 
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
                </form>
            </div>
        </>
    );

}

export default NewPage;