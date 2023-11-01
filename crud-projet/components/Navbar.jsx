import Link from "next/link";


function Navbar (){

    return(
        <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>

          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li><Link href="/tienda/categoria">categorias</Link></li>
          <li><Link href="/posts">Posts</Link></li>
        </ul>
      </nav>       
    );

}

export default Navbar;