import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
    <header>
      <div className="py-2 bg-primary text-white">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-2 mb-md-0">
            <strong>м. Харків, вул. Ярославська 21</strong>
          </div>
          <div className="mb-2 mb-md-0">
            9:00 - 17:00 (Пн-Пт), Сб — по записи
          </div>
          <div className="mb-2 mb-md-0">
            <a href="tel:+380966110303" className="text-white text-decoration-none me-3">
              +38 (096) 611-03-03
            </a>
            <a href="tel:+380956110303" className="text-white text-decoration-none">
              +38 (095) 611-03-03
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>ДНК Здоров'я</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Головна</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Про нас</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Послуги</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#doctors">Лікарі</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prices">Ціни</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">Контакти</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div className="container text-center text-md-center">
        <h1 className="display-4 fw-bold text-primary">
          МЕДИЧНИЙ ЦЕНТР ДІМ ЗДОРОВ’Я
        </h1>
        <p className="fs-4 text-danger">
          Ми знайдемо спільний шлях до покращення Вашого здоров'я
        </p>
    </div>
    <section
      className="hero-section d-flex align-items-center"
      style={{
        background: 'url("./img/main.png") no-repeat center center',
        backgroundSize: 'cover',
        minHeight: '70vh',
        position: 'relative',
      }}
    >
        <a href="#schedule" className="btn btn-outline-primary btn-lg">
          Розклад прийому
        </a>
    </section>
    </>
  );
};

export default Header;
