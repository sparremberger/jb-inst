// Box.jsx
import React from 'react';
import RedButton from './RedButton'; // Import the RedButton component
import './Box.css'; // Import the CSS file

const Box = ({ imageSrc, title, subtitle, buttonUrl }) => {

  return (
    <div className="box-container">
      <img className="box-image" src={imageSrc} alt="Box" />
      <div className="box-overlay"></div>
      <div className="box-content">
        <h2 className="box-title">{title}</h2>
        <p className="box-subtitle">{subtitle}</p>
        <RedButton text="Visualizar" targetUrl={buttonUrl} />
      </div>
    </div>
  );
};

export default Box;
