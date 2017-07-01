import React from 'react';

import '../styles/header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact us</a></li>
      </ul>
    </header>
  );
};

export default Header;
