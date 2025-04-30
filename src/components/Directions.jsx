// Directions.jsx
import React from "react";


const directions = [
  {
    title: "ДІМ ЗДОРОВ'Я",
    description:
      "Це сучасний центр діагностики та лікування. Ми пропонуємо послуги в різних напрямках та дбаємо про ваше здоров'я",
    icon: "./img/vectors/home.svg",
  },
  {
    title: "ТЕРАПІЯ",
    description:
      "Терапевти нашого центру забезпечують комплексний підхід, проводячи діагностику, розробляючи плани лікування",
    icon: "./img/vectors/doctor.svg",
  },
  {
    title: "НЕВРОЛОГІЯ",
    description:
      "Неврологи надають кваліфіковану допомогу при різноманітних порушеннях нервової системи",
    icon: "./img/vectors/brain.svg",
  },
  {
    title: "КАРДІОЛОГІЯ",
    description:
      "Кардіологи нашого центру працюють над тим, щоб ваше серце залишалося здоровим та сильним",
    icon: "./img/vectors/heart.svg",
  },
  {
    title: "ЕНДОКРИНОЛОГІЯ",
    description:
      "Ендокринологи надають кваліфіковану допомогу при порушеннях обміну речовин та гормональних дисбалансах",
    icon: "./img/vectors/lugkie.svg",
  },
  {
    title: "УЗД",
    description:
      "УЗД-діагностика допомагає виявити патології внутрішніх органів без хірургічного втручання",
    icon: "./img/vectors/ultrasound.svg",
  },
];

const Directions = () => (
  <div className="directions-container">
     <h2 className="title mb-4">Напрямки</h2>
    <div className="directions-grid">
      {directions.map((item, i) => (
        <div key={i} className="direction-block">
          <img src={item.icon} alt={item.title} className="direction-icon" />
          <h5 className="direction-title">{item.title}</h5>
          <p className="direction-desc">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Directions;
