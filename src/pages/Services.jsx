import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const servicesData = [
  {
    title: "КОНСУЛЬТАЦІЯ ТА ОБСТЕЖЕННЯ НА ДОМУ",
    items: [
      "Виклик лікаря додому",
      "Проведення огляду та консультації",
      "Визначення необхідних аналізів, сатурації",
      "Призначення лікування",
    ],
    image: "./img/consultation.png",
    link: "#",
  },
  {
    title: "КОНСУЛЬТАЦІЯ ТЕРАПЕВТА",
    items: [
      "Первинний огляд, аналіз симптомів",
      "Постановка попереднього діагнозу",
      "Призначення лікування, рекомендації",
      "Консультація щодо профілактики захворювань",
    ],
    image: "./img/image.png",
    link: "#",
  },
  {
    title: "КОНСУЛЬТАЦІЯ НЕВРОПАТОЛОГА",
    items: [
      "Діагностика неврологічних захворювань",
      "Оцінка роботи нервової системи",
      "Діагностика неврологічних захворювань",
      "Лікування головного болю, мігрені",
    ],
    image: "./img/image2.png",
    link: "#",
  },
  {
    title: "КОНСУЛЬТАЦІЯ КАРДІОЛОГА",
    items: [
      "Оцінка стану серця та судин",
      "Діагностика хвороб серця",
      "Лікування серцево-судинних захворювань",
      "Рекомендації щодо здорового способу життя",
    ],
    image: "./img/image3.png",
    link: "#",
  },
  {
    title: "КОНСУЛЬТАЦІЯ ЕНДОКРИНОЛОГА",
    items: [
      "Оцінка стану щитовидної залози",
      "Виявлення гормональних порушень",
      "Лікування цукрового діабету",
      "Дієтичні рекомендації",
    ],
    image: "./img/image4.png",
    link: "#",
  },
  {
    title: "ХОЛТЕР-МОНІТОРИНГ",
    items: [
      "Добове моніторування роботи серця",
      "Аналіз артеріального тиску",
      "Виявлення порушень ритму",
      "Виявлення прихованих серцевих проблем",
    ],
    image: "./img/image5.png",
    link: "#",
  },
  {
    title: "УЛЬТРАЗВУКОВА ДІАГНОСТИКА (УЗД)",
    items: [
      "УЗД органів черевної порожнини",
      "УЗД щитовидної залози",
      "УЗД нирок та сечовидільної системи",
      "УЗД серця (ехокардіографія)",
    ],
    image: "./img/image6.png",
    link: "#",
  },
  {
    title: "ЕЛЕКТРОКАРДІОГРАМА (ЕКГ)",
    items: [
      "Діагностика порушень серцевого ритму",
      "Виявлення ішемії",
      "Виявлення патологій серця",
      "Оцінка роботи серця",
    ],
    image: "./img/image7.png",
    link: "#",
  },
  {
    title: "КОНСУЛЬТАЦІЯ ОТОЛАРИНГОЛОГА",
    items: [
      "Лікування гострих та хронічних захворювань",
      "Діагностика та терапія ринітів, синуситів",
      "Діагностика та лікування тонзилітів",
      "Промивання носових пазух",
    ],
    image: "./img/image8.png",
    link: "#",
  },
  {
    title: "СТОМАТОЛОГІЧНА ДОПОМОГА",
    items: [
      "Лікування карієсу, пломбування",
      "Профілактичний огляд та консультація",
      "Видалення зубів",
      "Професійна чистка та відбілювання",
    ],
    image: "./img/image9.png",
    link: "#",
  },
];

const Services = () => {
  return (
    <div className="container py-2">
      <div className="container text-center">
        <h1 className="display-4 fw-bold custom-h1">
          МЕДИЧНИЙ ЦЕНТР ДІМ ЗДОРОВ’Я
        </h1>
      </div>
      <div className="container text-center">
      <h2 className="fw-bold position-relative d-inline-block" style={{color:'#E20456'}}>
        Наша клініка пропонує широкий спектр діагностичних та лікувальних послуг
        <span className="d-block border-bottom border-danger mt-1"></span>
      </h2>
    </div>
      <h2 className="title mb-4">ПОСЛУГИ</h2>
      <div className="content-cards" style={{margin: '0px 0px 100px 0px'}}>
        {servicesData.map((service, index) => (
          <div className="content-cards" key={index}>
            <div className="cards p-3 ">
              <div className="contents">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid"
                  style={{ width: '250px', objectFit: 'cover' }}
                />
                 <h4 className="text-uppercase text-center mb-0">
                  {service.title}
                </h4>
              </div>
              <ul className="list-unstyled">
                {service.items.map((item, i) => (
                  <li className="d-flex align-items-center mb-2" key={i}>
                    <img src="./img/vectors/check-fill.svg" alt="check-fill" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#schedule"
                className="btns"
                style={{width:'50%'}}
            >
                Розклад прийому
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
