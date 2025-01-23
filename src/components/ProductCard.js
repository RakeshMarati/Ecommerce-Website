import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
