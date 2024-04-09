import React from 'react';
import './ProductThumb.css'; // Import the CSS file for Product

const ProductThumb = ({ chave, image, breadcrumbs, name, marca, descricao }) => {
  const url = image;
  const filename = url.match(/([^/]+)\.(jpg|png)$/)[0];
  
  return (
    <div className="product-container">
      {/* Product Image */}
      <img src={require(`../resources/img/${chave}/${filename}`)} alt={name} className="product-image" />
        
      {/* Product Information */}
      <div className="product-info">
        {/* Product Breadcrumbs 
        <div className="product-breadcrumbs">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>{breadcrumb}</span>
          ))}
        </div>*/}

        {/* Product Name */}
        <h3 className="product-title">{name}</h3>

        {/* Product Brand */}
        {/* <p className="product-marca">{marca}</p>*/}

        {/* Product Description */}
        {/* <p className="product-descricao">{descricao}</p>*/}

        {/* Solicitar orçamento Button */}
        <button className="request-quote-button">Solicitar orçamento</button>
      </div>
    </div>
  );
};

export default ProductThumb;
