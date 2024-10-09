import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from '../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = () => {    
    return (
        <header>
        <div className="header-container">
            <nav className="social-links">
            <a
                    href="https://www.instagram.com/mitos.cerveceria"
                    target="_blank"
                    aria-label="Instagram"
                >
                    <FaInstagram className="social-icon" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100049956774559"
                    target="_blank"
                    aria-label="Facebook"
                >
                    <FaFacebook className="social-icon" />
                </a>
            </nav>
            <div className="logo-container">
                <img className="logo-img" src={logo} alt="Logo Mitos" />
                <p>-•- RESTO BAR -•-</p>
            </div>
            <nav className="social-links">
                
                <a
                    className="whatsapp-icon"
                    href="https://api.whatsapp.com/send/?phone=541135887741&text=X+reserva&type=phone_number&app_absent=0"
                    target="_blank"
                    aria-label="Whatsapp"
                >
                    <FaWhatsapp /> +549 1135887741
                </a>
            </nav>
        </div>
        
        <div className="navbar-container">
            <nav>
                <ul className="sections-list">
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