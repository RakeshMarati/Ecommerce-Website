import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
