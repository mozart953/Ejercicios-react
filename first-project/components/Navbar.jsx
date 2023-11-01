import Link from "next/link";

function Navbar(){
    return(
        <>
        <nav className="bg-slate-400 mb-4 flex justify-between item-center px-20 p-7 font-bold text-black">
           
            <ul>
                <li>
                    <Link href="/" className="font-bold text-black">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/users">
                        Users
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>

            </ul>
        </nav>

        </>
    );
}

export default Navbar;