// Home.jsx
import React from "react";
import "./Home.css"; // Import the CSS file
import NavBar from "./NavBar";
import SocialBar from "./SocialBar";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import RedButton from "./RedButton";
import Carrousel from "./Carrousel";
import higiene from "../resources/higiene-limpeza.jpg";
import descartaveis from "../resources/descartaveis.jpg";
import customizados from "../resources/customizados.jpg";
import Box from "./Box";
import IconBar from "./IconBar";
import WelcomeBar from "./WelcomeBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProducts from "./ListProducts.js";
import EndlessText from "./EndlessText.js";
import InstaCarousel from "./InstaCarousel.js";
import MultiCarousel from "./MultiCarousel.js";

const Home = () => {
    return (
        <div>
            <Carrousel />
           

            <MultiCarousel />
            <WelcomeBar />
            <IconBar />
            <div className='boxes'>
                <Box
                    imageSrc={higiene}
                    title='Higiene e Limpeza'
                    subtitle='Praticidade para você e sua empresa'
                    buttonUrl='http://www.google.com'
                />
                <Box
                    imageSrc={descartaveis}
                    title='Descartáveis'
                    subtitle='Embalagens, biodegradáveis e mais'
                    buttonUrl='http://localhost'
                />
                <Box
                    imageSrc={customizados}
                    title='Embalagens personalizadas'
                    subtitle='Promova sua marca, personalize!'
                    buttonUrl='http://localhost'
                />
            </div>
            <Subscribe />
            <SocialBar />
            <Footer />
            <EndlessText></EndlessText>
            {/*<RedButton text="Test" targetUrl="https://www.google.com" />*/}
        </div>
    );
};

export default Home;
