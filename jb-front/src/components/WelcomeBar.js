import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './WelcomeBar.css';

const WelcomeBar = () => {
  return (
    <div className="welcome-bar">
      <div className="icon-box">
        <FontAwesomeIcon icon={faHome} className="home-icon" />
        <p className="box-text">
          Soluções em <span className="highlight">Embalagens e Limpeza</span>
        </p>
      </div>
      <p className="paragraph-text">
        Proporcionamos uma{' '}
        <span className="bold italic larger-text">experiência diferenciada</span> a nossos clientes,
        oferecendo um <span className="bold italic larger-text">atendimento especializado</span>,
        aliado às melhores marcas com custo benefício incomparável.
      </p>
    </div>
  );
};

export default WelcomeBar;
