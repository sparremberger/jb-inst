import React, { useState } from "react";
import "./NavBar.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../resources/logojb.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Import Link and BrowserRouter

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle redirect to Loja Online
    const redirectToLojaOnline = () => {
        window.location.href = "http://localhost:3001"; // Change the URL to the desired URL of your React app running on port 3001
    };

    return (
        <div className={`home-container${isMenuOpen ? " menu-open" : ""}`}>
            {/* Original Navbar */}
            <nav className='navbar'>
                <a href='/'>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                </a>
                <div className={`links${isMenuOpen ? " mobile-menu" : ""}`}>
                    <Link to='/empresa'>
                        <a href='#'>A Empresa</a>
                    </Link>
                    <Link to='/produtos'>
                        <a href='#'>Produtos</a>
                    </Link>
                    <a href='#'>Para seu negócio</a>
                    <Link to='/encontrar'>
                        <a href='#'>Onde encontrar</a>
                    </Link>
                    <Link to='/faleconosco'>
                        <a href='#'>Fale Conosco</a>
                    </Link>
                </div>
                <div className={`search${isMenuOpen ? " mobile-menu" : ""}`}>
                    <input type='text' placeholder='Buscar...' />
                    <button onClick={redirectToLojaOnline}>
                        <i className='fa fa-shopping-cart'></i> LOJA ONLINE
                    </button>
                </div>
                <div className='hamburger-menu' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>
            </nav>

            {/* Mobile Menu Section */}
            {isMenuOpen && (
                <div className='mobile-menu-section'>
                    {/* Mobile Menu Contents */}
                    <div className='links'>
                        <Link to='/empresa' onClick={toggleMenu}>
                            <a href='#'>A Empresa</a>
                        </Link>
                        <Link to='/produtos' onClick={toggleMenu}>
                            <a href='#'>Produtos</a>
                        </Link>
                        <a href='#'>Para seu negócio</a>
                        <Link to='/encontrar' onClick={toggleMenu}>
                            <a href='#'>Onde encontrar</a>
                        </Link>
                        <Link to='/faleconosco' onClick={toggleMenu}>
                            <a href='#'>Fale Conosco</a>
                        </Link>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Buscar...' />
                        <button onClick={redirectToLojaOnline}>
                            <i className='fa fa-shopping-cart'></i> LOJA ONLINE
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
