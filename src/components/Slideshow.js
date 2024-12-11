import React, { useEffect, useState } from "react";
import './Slideshow.css';

import barInterior from '../assets/images/hero1.jpg';
import barExterior from '../assets/images/photo1.jpg';

const slides = [
    {
        Image: barInterior,
        title: 'Mitos Bar',
        subtitle: 'Donde la noche cobra vida'
    },
    {
        Image: barExterior,
        title: 'Un lugar para disfrutar',
        subtitle: 'La mejor música y ambiente'
    },
];

const Slideshow = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false);  //desactiva animación
            setTimeout(() => {
                setAnimate(true); //activa animación
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, 50);   //Asegura que la animación se reinicie
            
        }, 4000); //cambia la imagen cada 4 seg

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.Image} alt={`Slide ${index + 1}`} />
                    <div className={`text ${animate ? 'animate' : ''}`}>
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;