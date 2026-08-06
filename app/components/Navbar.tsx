import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";


export default function Navbar() {

  return (

    <header className="navbar">

      <div className="nav-container">


        {/* LOGO */}

       <div className="nav-logo">

  <Link href="/" className="logo-wrapper">

    <Image
  src="/logo2.png"
  alt="DJ RAY Logo"
  width={170}
  height={170}
  priority
  style={{
    width: "170px",
    height: "auto",
    objectFit: "contain",
    opacity: 0.9,
  }}
/>


  </Link>

</div>

        {/* MENU */}

        <nav className="nav-links">

          <Link href="/">
            Home
          </Link>


          <Link href="/#about">
            About
          </Link>


          <Link href="/#music">
            Music
          </Link>


          <Link href="/gallery">
            Gallery
          </Link>


          <Link href="/#contact">
            Contact
          </Link>


        </nav>


      </div>


    </header>

  );

}