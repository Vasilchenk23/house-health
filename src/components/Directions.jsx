import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      "Неврологи надають кваліфіковану допомогу при різноманітних порушеннях нервової системи",
    icon: "./img/vectors/lugkie.svg",
  },
  {
    title: "УЗД",
    description:
      "Неврологи надають кваліфіковану допомогу при різноманітних порушеннях нервової системи",
    icon: "./img/vectors/ultrasound.svg",
  },
];

const Directions = () => {
  return (
    <div className="container my-5">
      <h2 className="title">Напрямки</h2>
      <div className="row g-3">
        {directions.map((item, index) => (
          <div key={index} className="col-md-4">
            <div
              className="p-4 col col-round text-center"
              style={{
                backgroundColor: index === 0 ? "#E20456" : "#0258A5",
                color: index === 0 ? "white" : "white",
                borderRadius: "1rem",
              }}
            >
              <img src={item.icon} className="fs-2 mb-3" alt={item.title} />
              <h5 className="fw-bold">{item.title}</h5>
              <p className="w-100 mx-auto" style={{ maxWidth: "300px" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directions;

