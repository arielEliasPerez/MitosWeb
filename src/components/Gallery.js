import React from "react";
import "./Gallery.css";

import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

const Gallery = () => {
    const mediaItems = [
        {type: 'image', src: photo1, alt: 'Foto del bar'},
        {type: 'image', src: photo2, alt: 'Foto del interior'},
        {type: 'video', src: video1, alt: 'Video del ambiente'},
        {type: 'image', src: photo3, alt: 'Fiesta en el bar'},
        {type: 'video', src: video2, alt: 'Video de tragos'},
    ];
    
    return (
        <div className="gallery-container">
            <h2>Galería de Mitos Bar</h2>
            <div className="grid-gallery">
                {mediaItems.map((item, index) => (
                    <div className="media-item" key={index}>
                        {item.type === "image"? (
                            <img src={item.src} alt={item.alt} />
                        ) : (
                            <video controls>
                                <source src={item.src} type="video/mp4" />
                                Tu navegador no soporta el video.
                            </video>
                        )}
                    </div>
                ) )}
            </div>
        </div>
    );
};

export default Gallery;