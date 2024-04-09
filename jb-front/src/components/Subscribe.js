// Subscribe.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Subscribe.css"; // Import the CSS file

const Subscribe = () => {
    return (
        <div className='subscribe-bar'>
            <div className='subscribe-content'>
                <div className='subscribe-text'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Inscreva-se para receber nossas ofertas!</span>
                </div>
                <br />

                <div className='subscribe-form'>
                    <input type='email' placeholder='Digite seu e-mail' />
                    
                </div>
                <button>Cadastrar</button>
            </div>
        </div>
    );
};

export default Subscribe;
