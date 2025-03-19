import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <button className="close-btn" onClick={closeMenu}>✖</button>
      <ul className="menu-list">
        <li><Link to="/" onClick={closeMenu}>Головна</Link></li>
        <li><Link to="/about" onClick={closeMenu}>Про нас</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Послуги</Link></li>
        <li><Link to="/doctors" onClick={closeMenu}>Лікарі</Link></li>
        <li><Link to="/prices" onClick={closeMenu}>Ціни</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Контакти</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
