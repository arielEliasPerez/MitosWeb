import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contacto y Reservaciones</h2>
            
            <div className="contact-info">
                <h3>Número de reservaciones:</h3>
                <p>📞 +549 1135887741</p>
            </div>

            <div className="social-media">
                <h3>Síguenos en nuestras redes:</h3>
                <p>
                    <a href="https://www.instagram.com/mitos.cerveceria/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100049956774559" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </p>
            </div>
            
            <div className="location">
                <h3>Ubicación</h3>
                <p>📍 Av. Gaona 4002, Floresta, Argentina</p>
            </div>
        </div>
    );
};

export default Contact;