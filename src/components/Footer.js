import React from 'react';

import '../styles/footer.css';

import logoFooter from '../images/logo-footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo" />
    </footer>
  );
};

export default Footer;
