import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
    <header>
      <div className="bg-primary-custom text-white d-flex align-items-center" style={{ minHeight: "64px"}}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-2 mb-md-0">
            <img src="./img/vectors/location.svg" alt="location" className="me-2"/>
            <strong>м. Харків, вул. Ярославська 21</strong>
          </div>
          <div className="mb-2 mb-md-0">
            <img src="./img/vectors/time.svg" alt="time" className="me-2"/>
            9:00 - 17:00 (Пн-Пт), Сб — по записи
          </div>
          <div className="mb-2 mb-md-0">
            <img src="./img/vectors/mykyivstar.svg" alt="mykyivstar" className="me-2"/>
            <a href="tel:+380966110303" className="text-white text-decoration-none me-3">
              +38 (096) 611-03-03
            </a>
          </div>
          <div className="mb-2 mb-md-0">
            <img src="./img/vectors/vodafone.svg" alt="vodafone" className="me-2"/>
            <a href="tel:+380956110303" className="text-white text-decoration-none">
              +38 (095) 611-03-03
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md custom-navbar">
        <div className="container-fluid px-5">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center gap-4">
              <li className="">
                <a className="navbar-brand" href="#">
                  <img src="./img/vectors/logo.svg" alt="logo" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#home">Головна</a>
              </li>
              <li className="nav-item">
                <a href="#about">Про нас</a>
              </li>
              <li className="nav-item">
                <a href="#services">Послуги</a>
              </li>
              <li className="nav-item">
                <a href="#doctors">Лікарі</a>
              </li>
              <li className="nav-item">
                <a href="#prices">Ціни</a>
              </li>
              <li className="nav-item">
                <a href="#contacts">Контакти</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div className="container text-center">
      <h1 className="display-4 fw-bold custom-h1">
        МЕДИЧНИЙ ЦЕНТР ДІМ ЗДОРОВ’Я
      </h1>
      <p className="fs-4 custom-p">
        Ми знайдемо спільний шлях до покращення Вашого здоров'я
      </p>
    </div>
    </>
  );
};

export default Header;
