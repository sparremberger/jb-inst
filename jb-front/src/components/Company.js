// Company.jsx
import React from 'react';
import './Company.css'; // Import the CSS file

const Company = () => {
  return (
    <div className="company-container">
      <h2 className="company-title">A empresa</h2>
      <ul className="company-links">
        <li><a href="#">Fale Conosco</a></li>
        <li><a href="#">JB Embalagens</a></li>
        <li><a href="#">Biodegradáveis</a></li>
        <li><a href="#">Política de Entrega</a></li>
      </ul>
    </div>
  );
};

export default Company;
