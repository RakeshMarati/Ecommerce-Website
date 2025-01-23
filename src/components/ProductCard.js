import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.rating && product.rating.count === 0 && (
        <div className="out-of-stock">Out of Stock</div>
      )}
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
