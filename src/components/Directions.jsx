import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const directions = [
  {
    title: "ДІМ ЗДОРОВ'Я",
    description:
      "Це сучасний центр діагностики та лікування. Ми пропонуємо послуги в різних напрямках та дбаємо про ваше здоров'я",
    icon: "🏠",
    color: "bg-danger text-white",
  },
  {
    title: "ТЕРАПІЯ",
    description:
      "Терапевти нашого центру забезпечують комплексний підхід, проводячи діагностику, розробляючи плани лікування",
    icon: "🩺",
    color: "bg-primary text-white",
  },
  {
    title: "НЕВРОЛОГІЯ",
    description:
      "Неврологи надають кваліфіковану допомогу при різноманітних порушеннях нервової системи",
    icon: "🧠",
    color: "bg-primary text-white",
  },
  {
    title: "КАРДІОЛОГІЯ",
    description:
      "Кардіологи нашого центру працюють над тим, щоб ваше серце залишалося здоровим та сильним",
    icon: "❤️",
    color: "bg-primary text-white",
  },
  {
    title: "ЕНДОКРИНОЛОГІЯ",
    description:
      "Неврологи надають кваліфіковану допомогу при різноманітних порушеннях нервової системи",
    icon: "🦠",
    color: "bg-primary text-white",
  },
  {
    title: "УЗД",
    description:
      "Неврологи надають кваліфіковану допомогу при різноманітних порушеннях нервової системи",
    icon: "🖥️",
    color: "bg-primary text-white",
  },
];

const Directions = () => {
  return (
    <div className="container my-5">
      <h2 className="text-uppercase fw-bold">Напрямки</h2>
      <div className="row g-3">
        {directions.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className={`p-4 rounded ${item.color} text-center`}>
              <div className="fs-2">{item.icon}</div>
              <h5 className="fw-bold mt-2">{item.title}</h5>
              <p className="w-100 mx-auto" style={{ maxWidth: "300px" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directions;
