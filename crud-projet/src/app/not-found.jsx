import Link from "next/link";

function NotFound(){
    return (
        <>
            <section>
                <h1>Pagina no encontrada</h1>
                <Link href="/">Volver</Link>
              
            </section>
        </>
    );
}

export default NotFound;