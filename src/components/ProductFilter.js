import React from 'react';
import './ProductFilter.css';

function ProductFilter() {
  return (
    <div className="product-filter">
      <h4>3425 Items</h4>
      <label>
        <input type="checkbox" />
        Customizable
      </label>
      <h5>Ideal For</h5>
      <select>
        <option>All</option>
        <option>Men</option>
        <option>Women</option>
      </select>
      <h5>Occasion</h5>
      <select>
        <option>All</option>
        <option>Work</option>
        <option>Casual</option>
        <option>Party Wear</option>
        <option>Ethnic</option>
      </select>
      {}
    </div>
  );
}

export default ProductFilter;
