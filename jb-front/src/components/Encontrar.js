import React from 'react';
import './Encontrar.css'; // Import the CSS file for Encontrar
import desktopImage from '../resources/maps.png'; // Import the desktop image
import mobileImage from '../resources/mobile_maps.jpeg'; // Import the mobile image

const Encontrar = () => {
  return (
    <div className="encontrar-container">
      {/* Title */}
      <h2 className="encontrar-title">Onde Encontrar</h2>
      {/* Image */}
      <img
        src={window.innerWidth <= 768 ? mobileImage : desktopImage}
        alt="Onde Encontrar"
        className="encontrar-image"
      />
    </div>
  );
};

export default Encontrar;
