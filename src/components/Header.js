import '../styles/layout.css';

import React from 'react';
import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="header">
     <div className="container">
      <img src={logo} alt="Little Lemon Logo" />
     </div>
    </header>

  );
}

export default Header;

