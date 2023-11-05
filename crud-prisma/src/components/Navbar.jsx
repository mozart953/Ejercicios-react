import Link from "next/link";

export function Navabar(){
    return(
        <>
            <nav className="bg-slate-900">
                

                <div className="container mx-auto flex justify-between items-center py-3">
                    <Link href="/">
                        <h3 className="font-bold text-3xl">NEXT CRUD</h3>
                    </Link>
                
                 <ul className="flex gap-x-2 text-lg font-bold">
                        <li>
                            <Link href="/"
                                className="text-slate-300 hover:text-slate-200"
                            >Tareas</Link>
                        </li>
                        <li>
                            <Link href="/new"
                                className="text-slate-300 hover:text-slate-200"
                            >Crear tareas</Link>
                        </li>
                        <li>
                            <Link href="/about"
                                className="text-slate-300 hover:text-slate-200"
                            >
                                About
                            </Link>
                        </li>
                    </ul>

                </div>
            

            
            </nav>
        </>
    );
}
