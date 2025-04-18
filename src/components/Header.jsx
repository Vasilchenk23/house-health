import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="bg-primary-custom text-white d-flex align-items-center" style={{ minHeight: "64px", }}>
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-2 mb-md-0">
              <img src="./img/vectors/location.svg" alt="location" className="me-2" />
              <strong>м. Харків, вул. Ярославська 2/1</strong>
            </div>
            <div className="mb-2 mb-md-0">
              <img src="./img/vectors/time.svg" alt="time" className="me-2" />
              9:00 - 17:00 (Пн-Пт), Сб — запис
            </div>
            <div className="mb-2 mb-md-0">
              <img src="./img/vectors/mykyivstar.svg" alt="mykyivstar" className="me-2" />
              <a href="tel:+380986110303" className="text-white text-decoration-none me-3">
              +38 (098) 611-03-03
              </a>
            </div>
            <div className="mb-2 mb-md-0">
              <img src="./img/vectors/vodafone.svg" alt="vodafone" className="me-2" />
              <a href="tel:+380996110303" className="text-white text-decoration-none">
              +38 (099) 611-03-03
              </a>
            </div>
          </div>
        </div>

        <nav className="container d-flex align-items-center navbar navbar-expand-md custom-navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-between align-items-start gap-5">
                <li className="nav-logo">
                  <a className="navbar-brand" href="/">
                    <img src="./img/vectors/logo.svg" alt="logo" />
                  </a>
                </li>
                <li className="nav-item">
                <Link to="/">Головна</Link>
                </li>
                <li className="nav-item">
                <Link to="/about">Про нас</Link>
                </li>
                <li className="nav-item">
                <Link to="/services">Послуги</Link>
                </li>
                <li className="nav-item">
                <Link to="/doctors">Лікарі</Link>
                </li>
                <li className="nav-item">
                <Link to="/prices">Ціни</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact">Контакти</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button className="navbar-toggler d-xxl-none d-flex align-items-center justify-content-around w-100 px-3" type="button" onClick={() => setIsMenuOpen(true)}>
          <a className="navbar-brand" href="/">
            <img src="./img/vectors/logo.svg" alt="logo" />
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
        {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
      </header>
    </>
  );
};

export default Header;
