// Company.jsx
import React from 'react';
import './Company.css'; // Import the CSS file

const Categorias = () => {
  return (
    <div className="company-container">
      <h2 className="company-title">Categorias</h2>
      <ul className="company-links">
        <li><a href="#">Descartáveis</a></li>
        <li><a href="#">Papéis</a></li>
        <li><a href="#">Dispensadores</a></li>
        <li><a href="#">Higiene e Limpeza</a></li>
        <li><a href="#">Sacos de Lixo / Lixeiras</a></li>
        <li><a href="#">Segurança</a></li>
        <li><a href="#">EPI's</a></li>
        <li><a href="#">Lançamentos</a></li>
        <li><a href="#">Promoções</a></li>
      </ul>
    </div>
  );
};

export default Categorias;
