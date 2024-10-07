import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <h1>Mitos Bar</h1>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/menu">Menú</Link></li>
                <li><Link to="/gallery">Fotos</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;