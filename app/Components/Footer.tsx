import React from 'react';
import StyleCss from './Footer.module.css'; 

const Footer = () => {
  return (
    <div className={StyleCss['footer-container']}>
      <p className={StyleCss['footer-text']}>© Made by Muhammad Hamza | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
