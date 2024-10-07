import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1>Bienvenido a Mitos Bar</h1>
                <p>Donde la diversión y la música se encuentran.</p>
                <p>El lugar donde la noche cobra vida.</p>
                <div className="hero-buttons">
                    <Link to="/menu" className="btn">Ver Menú</Link>
                    <Link to="/contact" className="btn">Reservas</Link>
                </div>
            </section>
            
            <section className="about-section">
                <h2>Descubre Mitos Bar</h2>
                <p>Mitos Bar es un lugar ideal para disfrutar de bebidas y comidas hasta la medianoche, cuando la música y la diversión llenan el ambiente y el bar se convierte en una discoteca vibrante. ¡Te esperamos para que vivas la mejor experiencia!</p>
            </section>
            
            <section className="menu-highlight">
                <h2>Nuestros Cocteles destacados</h2>
                <div className="highlight-grid">
                    <div className="menu-item">
                        <img src="../assets/images/photo1.jpg" alt="Cócteles destacados" />
                        <p>Mojito Clásico</p>
                    </div>
                    <div className="menu-item">
                        <img src="../assets/images/photo2.jpg" alt="Cócteles destacados" />
                        <p>Daikiris</p>
                    </div>
                </div>
            </section>

            <section className="testimonial-section">
                <h2>Lo que dicen nuestros clientes</h2>
                <blockquote>"El mejor lugar para disfrutar con amigos</blockquote>
            </section>
        </div>
    );
}

export default Home;