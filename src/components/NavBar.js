import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [activeLink, setLink] = useState(false)
    const clickedNav = () => {
        setLink(!activeLink)
    }
    
    return (
        <nav>
            <Link to='/Home'>Kims Cafe</Link>
            <Link to='/Speisekarte' onClick={clickedNav} style={{backgroundColor: activeLink ? "lightblue" : "salomon" }}>Speisekarte</Link>
            <Link to='/Kontakt'>Kontakt</Link>
            <Link to='/Öffnungszeiten' >Öffnugszeiten</Link>
            <Link to='/Galerie' >Galerie</Link>
        </nav>
    );
}

export default NavBar;