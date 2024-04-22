import React, { useState } from 'react';
import './InstaCarousel.css';
import insta1 from '../resources/insta_files/1.jpg';
import insta2 from '../resources/insta_files/2.jpg';
import insta3 from '../resources/insta_files/3.jpg';
import insta4 from '../resources/insta_files/4.jpg';
import insta5 from '../resources/insta_files/5.jpg';

const InstaCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % 5);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + 5) % 5);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
                    <img src={insta1} alt="Instagram 1" className="image" />
                </div>
                <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
                    <img src={insta2} alt="Instagram 2" className="image" />
                </div>
                <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
                    <img src={insta3} alt="Instagram 3" className="image" />
                </div>
                <div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
                    <img src={insta4} alt="Instagram 4" className="image" />
                </div>
                <div className={`slide ${currentSlide === 4 ? 'active' : ''}`}>
                    <img src={insta5} alt="Instagram 5" className="image" />
                </div>
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default InstaCarousel;
