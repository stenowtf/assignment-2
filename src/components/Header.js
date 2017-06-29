import React from 'react';

import '../styles/Header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="Header">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact us</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
