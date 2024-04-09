// SocialBar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialBar.css'; // Import the CSS file

const SocialBar = () => {
  return (
    <div className="social-bar">
      <p>Acompanhe nossas redes sociais:</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/jbembalagens" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/jbembalagens/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5551991005762" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
