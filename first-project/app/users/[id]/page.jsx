

async function getUser(id){
    const data = await fetch(`https://reqres.in/api/users/${id}`);
    const datos = await data.json();
    return datos.data; 
}


async function User({params}){

    const datos = await getUser(params.id);


    return (


                            
                       <div key={datos.id} className="bg-slate-400 mb-2 p-4 rounded-md  text-black flex justify-between" >
                            <div>
                            <h5 className="font-bold">{datos.id} {datos.first_name} {datos.last_name}</h5>
                            <p className="text-slate-200"> email: {datos.email}</p>
                            </div>
                            <img src={datos.avatar} alt={datos.id} className="rounded-full w-20"/>
                        </div>   
                
    
                
    

    );

}

export default User;