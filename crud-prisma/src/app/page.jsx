import {prisma} from '@/libs/prisma';
import {Tareas} from '@/components/Tareas.jsx'

async function loadTasks(){
  // const res = await fetch('http://localhost:3000/api/tasks');
  // const data = await res.json();
  const data = await prisma.task.findMany();
  //console.log(data);

  return data;
}

//export const revalidate= 60;
export const dynamic = 'force-dynamic';

async function HomePage(){
  const tasks = await loadTasks();
  //console.log(tasks);


  return(
    <>
     <section className='container mx-auto'>
     <div className='grid grid-cols-3 gap-3'>{
          tasks.map((datos)=>(
              <Tareas  datos={datos} key={datos.id} />
          )
        )
        }</div>
     </section>
    </>
  );

}

export default HomePage;