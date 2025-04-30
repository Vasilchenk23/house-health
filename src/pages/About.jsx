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
      "Візит максимально зручний і результативний",
    icon: "./img/vectors/white-check-fill.svg",
  },
];

const About = () => {
  return (
    <>
      <div className="container">
      <div className="full-width text-md-start text-center">
        <h1 className="custom-h2" style={{color: '#0258A5'}}>МЕДИЧНИЙ ЦЕНТР ДІМ ЗДОРОВ’Я</h1>
      </div>
      <section
      style={{
        background: 'url("./img/main-about.png") no-repeat center center',
        backgroundSize: "cover",
        minHeight: "678px",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    ></section>

      </div>

      <div className="container my-5">
        <h2 className="title mb-4" style={{ marginTop: "100px" }}>
          ПРО НАШУ КЛIНIКУ
        </h2>
        <div className="row align-items-stretch">
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div className="block-ultrasound" style={{ fontWeight: 400, fontSize: "20px" }}>
              <p>
                Медичний центр “Дім Здоров’я” працює з 2021 року, допомагаючи нашим пацієнтам зберігати здоров’я та гарне самопочуття
              </p>
              <p>
                Наша місія: "Забезпечити якісну та доступну медичну допомогу, створюючи атмосферу довіри, комфорту та турботи"
              </p>
              <br />
              <div>
                <h3 style={{ color: "#E20456", fontSize: "20px", fontWeight: 400 }}>Ключові принципи</h3>
                <ul className="menu-list-about">
                  <li><img src="./img/vectors/check-fill.svg" alt="check" /> Індивідуальний підхід</li>
                  <li><img src="./img/vectors/check-fill.svg" alt="check" /> Сучасне обладнання</li>
                  <li><img src="./img/vectors/check-fill.svg" alt="check" /> Високий рівень</li>
                  <li><img src="./img/vectors/check-fill.svg" alt="check" /> Комплексний підхід до лікування</li>
                </ul>
              </div>
            </div>
            <a href="/doctors" className="btns" style={{ width: "60%" }}>
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
        </div>
        <div
  style={{
    maxWidth: '100vw',
    margin: "0",
    padding: "",
    boxSizing: "border-box",
  }}
>
  <h2 style={{marginTop: '100px'}} className="title mb-7">ЧОМУ НАМ ДОВІРЯЮТЬ</h2>
  <div className="row g-3">
    {about.map((item, index) => (
      <div key={index} className="col-md-4">
        <div
          className="p-4 text-center"
          style={{
            backgroundColor:
              index === 0 ? "#E20456" : "#0258A5",
            color: "#fff",
            borderRadius: "1rem",
          }}
        >
          <img
            src={item.icon}
            alt="block"
            className="fs-2 mb-3"
          />
          <h5 className="fw-bold">{item.title}</h5>
          <p
            className="mb-0"
            style={{ maxWidth: 300, margin: "0 auto" }}
          >
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        <h2 className="title mb-4" style={{ margin: "100px 0px" }}>НАШI ПОСЛУГИ</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="./img/services-about.png"
              alt="services-about"
              className="img-fluid"
              style={{ marginTop: "50px" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-md-end justify-content-md-end justify-content-center text-md-end">
            <ul className="menu-list-about">
              {[
                "Діагностика (УЗД, ЕКГ, холтер-моніторинг)",
                "Консультація терапевта",
                "Консультація невропатолога",
                "Консультація кардіолога",
                "Консультація ендокринолога",
                "Лікування ЛОР-захворювань",
                "Стоматологічна допомога",
                "Консультація та обстеження на дому"
              ].map((text, i) => (
                <li key={i}><img src="./img/vectors/check-fill.svg" alt="check-fill" /> {text}</li>
              ))}
            </ul>
          </div>
          <a href="/doctors" className="btns mt-5" style={{ width: "max-content", marginLeft:'10px' }}>
            Розклад прийому
          </a>
        </div>

        <p style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#E20456",
          margin: "50px 0px 100px 0px"
        }}>
          МИ ЗНАЄМО, ЩО ЗДОРОВ’Я – ЦЕ НАЙЦІННІШЕ, І НАША КОМАНДА ГОТОВА ЗРОБИТИ ВСЕ, ЩОБ ЗБЕРЕГТИ ЙОГО ДЛЯ ВАС
        </p>
      </div>
    </>
  );
};

export default About;

