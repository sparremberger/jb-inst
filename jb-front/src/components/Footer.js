// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file
import Company from './Company';
import Categorias from './Categorias';

const Footer = () => {
  return <div className="footer-container">
    <Company />
    <Categorias />
  </div>;
};

export default Footer;
