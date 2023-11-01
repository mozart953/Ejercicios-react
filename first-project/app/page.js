
import Users from '../components/Users.jsx'

async function fetchUsers(){
    const datos = await fetch("https://reqres.in/api/users?page=2");
    const datos1 = await datos.json();
    return datos1.data;
}


async function HomePage(){
  const users = await fetchUsers();

  return(
   <>
    <Users users = {users}/>
   </>

    
  );
}

export default HomePage;