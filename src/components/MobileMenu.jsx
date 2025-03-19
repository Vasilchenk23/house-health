import React from 'react';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <button className="close-btn" onClick={closeMenu}>✖</button>
      <ul className="menu-list">
        <li><a href="#home" onClick={closeMenu}>Головна</a></li>
        <li><a href="#about" onClick={closeMenu}>Про нас</a></li>
        <li><a href="#services" onClick={closeMenu}>Послуги</a></li>
        <li><a href="#doctors" onClick={closeMenu}>Лікарі</a></li>
        <li><a href="#prices" onClick={closeMenu}>Ціни</a></li>
        <li><a href="#contacts" onClick={closeMenu}>Контакти</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
