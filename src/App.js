import React from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductFilter from './components/ProductFilter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ProductFilter />
        <ProductGrid />
      </div>
    </div>
  );
}

export default App;
