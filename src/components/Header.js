import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="icons">
        <span className="icon">🔍</span>
        <span className="icon">❤️</span>
        <span className="icon">🛒</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

export default Header;
