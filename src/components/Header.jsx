import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header >
      <div className="bg-primary-custom text-white py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <div>
            <img src="./img/vectors/location.svg" alt="location" className="me-2" />
            <strong>м. Харків, вул. Ярославська 2/1</strong>
          </div>
          <div>
            <img src="./img/vectors/time.svg" alt="time" className="me-2" />
            9:00 - 17:00 (Пн-Пт), Сб — запис
          </div>
          <div>
            <img src="./img/vectors/mykyivstar.svg" alt="kyivstar" className="me-2" />
            <a href="tel:+380986110303" className="text-white text-decoration-none">+38 (098) 611-03-03</a>
          </div>
          <div>
            <img src="./img/vectors/vodafone.svg" alt="vodafone" className="me-2" />
            <a href="tel:+380996110303" className="text-white text-decoration-none">+38 (099) 611-03-03</a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-xxl custom-navbar bg-white">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <a className="navbar-brand" href="/">
            <img src="./img/vectors/logo.svg" alt="logo" style={{ height: '40px' }} />
          </a>
          <button
            className="navbar-toggler d-xxl-none border-0"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse d-none d-xxl-flex">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
              <li className="nav-item"><Link to="/" className="nav-link">Головна</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">Про нас</Link></li>
              <li className="nav-item"><Link to="/services" className="nav-link">Послуги</Link></li>
              <li className="nav-item"><Link to="/doctors" className="nav-link">Лікарі</Link></li>
              <li className="nav-item"><Link to="/prices" className="nav-link">Ціни</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Контакти</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
