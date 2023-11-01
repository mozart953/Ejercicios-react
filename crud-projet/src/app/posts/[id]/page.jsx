import PostPages from '../page.jsx';
import {Suspense} from 'react';

async function loadPosts(id){
    const variable = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    const datos = await variable.json();

    return datos;
}



async function Page({params}){
    //console.log(props)



    const datos = await loadPosts(params.id);

    return(
        <>
            <div>
                <h1>{params.id}</h1>
                <p>{datos.id}. {datos.title}</p>
            </div>

            <h3>Otras publicaciones</h3>
            <div>
                <Suspense fallback={<div>Cargando Publicaciones</div>}>
                    <PostPages />
                </Suspense>
                
            </div>
        </>
    );
}

export default Page;