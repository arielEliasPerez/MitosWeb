import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from '../assets/images/logo.png';

const Header = () => {    
    return (
        <header>
        <img className="logo-img" src={logo} alt="Logo Mitos" />
        <div className="navbar-container">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/menu">Menú</Link></li>
                    <li><Link to="/gallery">Fotos</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;