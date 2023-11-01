"use client"

import {useRouter} from "next/navigation";

function AboutPage(){
   const router = useRouter();
   return(
      <>
         <section>
            <h1>About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam dolorum rerum nesciunt quos consectetur doloribus quibusdam non hic repellendus atque aperiam sapiente, ratione voluptatum reiciendis suscipit facilis iure porro fuga facere magnam. Assumenda, esse ut? Voluptatem nisi ipsum veritatis! Unde quo magni sequi doloremque quaerat provident praesentium porro ea velit qui corrupti facere, dolorum tempora veritatis, suscipit est sit repellat mollitia dolor iusto! Quibusdam sit quos eaque quisquam, veniam odit ab ea. Dolorum repellendus molestiae tempora quasi. Laboriosam, placeat sunt? Nam adipisci ipsa deserunt impedit harum perspiciatis optio recusandae nostrum eveniet aspernatur! Fugit, earum voluptatem deserunt aperiam suscipit eveniet.</p>

           
                  <button className="bg-sky-400 px3 py-2"
                        onClick={()=>{ 
                           alert("Ejecutando codigo");
                           router.push('/')}}  
                  >
                     Click
                  </button>
           
         </section>
      </>
   ); 
}

export default AboutPage;