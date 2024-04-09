// RedButton.jsx
import React from 'react';
import './RedButton.css'; // Import the CSS file

const RedButton = ({ text, targetUrl }) => {
  const handleClick = () => {
    window.location.href = targetUrl;
  };

  return (
    <button className="red-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default RedButton;
