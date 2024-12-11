import React from "react";
import { Link } from "react-router-dom";

import Slideshow from "./Slideshow";
import "./Home.css";

import videoSource from '../assets/videos/video2.mp4';

const Home = () => {
    return (
        <div className="home-container">
            <Slideshow />
            
            <section className="about-section">
                <h2>Descubre Mitos Bar</h2>
                <p>Mitos Bar es un lugar ideal para disfrutar de bebidas, tragos y comidas hasta la medianoche, cuando la música y la diversión llenan el ambiente y el bar se convierte en una discoteca vibrante. ¡Te esperamos para que vivas la mejor experiencia!</p>
            </section>

            <section className="hero-section">
                <div className="hero-buttons">
                    <Link to="/menu" className="btn">Ver Menú</Link>
                    <Link to="/contact" className="btn">Reservas</Link>
                </div>
            </section>
            
            <section className="menu-highlight">
                <h2>Nuestros Cocteles destacados</h2>
                <div className="highlight-grid">
                    <div className="menu-item">
                        <img src='https://ik.imagekit.io/bhug69xts/mojito.png' alt="Cócteles destacados" />
                        <p>Mojito Clásico</p>
                    </div>
                    <div className="menu-item">
                        <img src="https://th.bing.com/th/id/OIP.kAEu4GDrouqfphQFrhSo2QHaHa?rs=1&pid=ImgDetMain" alt="Cócteles destacados" />
                        <p>Daikiris</p>
                    </div>
                </div>
            </section>

            <section className="undergroundroom-section">
                <h2>UndergroundRoom</h2>
                <p>
                    El UndergroundRoom es un espacio exclusivo dentro de nuestro salón de eventos,
                    con capacidad para hasta 40 personas.
                    Es un ambiente íntimo y perfecto para reuniones sociales más reducidas.
                </p>
                <blockquote>"El mejor lugar para disfrutar con amigos</blockquote>
            </section>

            <section className="video-section">
            <h2>Una noche de Mitos</h2>
                <video controls>
                    <source src={videoSource} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            </section>
        </div>
    );
}

export default Home;