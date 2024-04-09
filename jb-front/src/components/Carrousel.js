import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Carrousel.css";
import duramax from '../resources/banners/duramax.jpeg';
import jimovidros from '../resources/banners/jimovidros.jpeg';
import lixeira from '../resources/banners/lixeira.jpeg';
import luvas from '../resources/banners/luvas.jpeg';
import higiene from "../resources/carousel/higiene.jpg";
import papeis from "../resources/carousel/papeis.jpg";
import descartaveis from "../resources/carousel/descartaveis.jpg";
import lixeiras from "../resources/carousel/lixeiras.jpg";
import dispensadores from "../resources/carousel/dispensadores.jpg";

const Carrousel = () => {
    useEffect(() => {

        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false, // Allow autoplay after user interaction
            },
        });

        return () => {
            if (swiper) {
                swiper.destroy();
            }
        };
    }, []);

    const imagesMobile = [jimovidros, lixeira, luvas, duramax];
    const imagesDesktop = [higiene, papeis, descartaveis, lixeiras, dispensadores];

    return (
        <div className="large-banner">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {(window.innerWidth <= 768 ? imagesMobile : imagesDesktop).map((image, index) => (
                        <div key={index} className="swiper-slide">
                            <img
                                src={image}
                                alt={`${index}`}
                                className="swiper-image"
                                muted
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carrousel;
