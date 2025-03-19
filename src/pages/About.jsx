import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const about = [
  {
    title: "ФАХОВА КОМАНДА",
    description:
      "Наші лікарі мають багаторічний досвід і є експертами у своїй галузі",
    icon: "./img/vectors/white-check-fill.svg",
  },
  {
    title: "СУЧАСНЕ ОБЛАДНАННЯ",
    description:
      "Діагностика та лікування проводяться на найновішій апаратурі",
    icon: "./img/vectors/white-check-fill.svg",
  },
  {
    title: "ДОСТУПНIСТЬ I КОМФОРТ",
    description:
      "Візит  максимально зручний і результативний",
    icon: "./img/vectors/white-check-fill.svg",
  },
];

const About = () => {
  return(
    <>
      <section
          className="hero-section border"
          style={{
              background: 'url("./img/main-about.png") no-repeat center center',
              backgroundSize: 'cover',
              minHeight: '70vh',
              maxWidth: '100%',
              position: 'relative',
          }}
          >
      </section>
      <div className="container my-5">
        <h2 className="title mb-4">ПРО НАШУ КЛIНIКУ</h2>
        <div className="row align-items-stretch">
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="block-ultrasound">
            <p>
              Медичний центр “Дім Здоров’я” працює з 2021 року, допомагаючи нашим пацієнтам зберігати здоров’я та гарне самопочуття
            </p>
            <br />
            <p>
            Наша місія: "Забезпечити якісну та доступну медичну допомогу, створюючи атмосферу довіри, комфорту та турботи"
            </p>
            <br />
            <div>
              <h3 style={{ color:'#E20456', fontSize:'20px', fontWeight:'400'}}>Ключові принципи</h3>
              <ul className="menu-list-about">
                <li style={{ fontSize:'20px', fontWeight:'400'}}>
                  <img src="./img/vectors/check-fill.svg" alt="check-fill" />
                  Індивідуальний підхід
                </li>
                <li style={{ fontSize:'20px', fontWeight:'400'}}>
                  <img src="./img/vectors/check-fill.svg" alt="check-fill" />
                  Сучасне обладнання
                </li>
                <li style={{ fontSize:'20px', fontWeight:'400'}}>
                  <img src="./img/vectors/check-fill.svg" alt="check-fill" />
                  Високий рівень 
                </li>
                <li style={{ fontSize:'20px', fontWeight:'400'}}>
                  <img src="./img/vectors/check-fill.svg" alt="check-fill" />
                  Комплексний підхід до лікування
                </li>
              </ul>
            </div>
          </div>
          <a
            href="#schedule"
            className="btns"
        >
            Розклад прийому
          </a>
        </div>
        <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
          <img
            src="./img/about-content.png"
            alt="наша клiнiка"
            className="img-fluid shadow"
            style={{ borderRadius: "40px 40px 40px 0px" }}
          />
        </div>
        <h2 className="title mb-4" style={{ margin:'100px 0px'}}>ЧОМУ НАМ ДОВIРЯЮТЬ</h2>
        <div className="row g-3">
        {about.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className={`p-4 col col-round text-center`}>
              <img src={item.icon} className="fs-2"></img>
              <h5 className="fw-bold mt-2">{item.title}</h5>
              <p className="w-100 mx-auto" style={{ maxWidth: "300px" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="title mb-4" style={{ margin:'100px 0px'}}>НАШI ПОСЛУГИ</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="./img/services-about.png"
            alt="services-about"
            className="img-fluid"
            style={{ maxHeight: '100%' }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <ul className="menu-list-about">
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Діагностика (УЗД, ЕКГ, холтер-моніторинг)
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Консультація терапевта
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Консультація невропатолога  
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Консультація кардіолога
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Консультація ендокринолога
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Лікування ЛОР-захворювань
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Стоматологічна допомога
            </li>
            <li style={{ fontSize: '20px', fontWeight: '400' }}>
              <img src="./img/vectors/check-fill.svg" alt="check-fill" />
              Консультація та обстеження на дому
            </li>
          </ul>
        </div>
        <a
            href="#schedule"
            className="btns mt-3"
            style={{ width: 'max-content' }}
          >
            Розклад прийому
          </a>
      </div>
      </div>
      <p style={{fontSize: '20px', fontWeight:'700', color:'#E20456', margin:'50px 0px 100px 0px'}}>МИ ЗНАЄМО, ЩО ЗДОРОВ’Я – ЦЕ НАЙЦІННІШЕ, І НАША КОМАНДА ГОТОВА ЗРОБИТИ ВСЕ, ЩОБ ЗБЕРЕГТИ ЙОГО ДЛЯ ВАС</p>
      </div>
    </>
  );
};

export default About;
