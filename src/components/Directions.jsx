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
    <div className="container my-5 px-0">
      <div className="rounded-3 py-5">
        <h2 className="title mb-4">Напрямки</h2>
        <div className="row g-3">
          {directions.map((item, i) => (
            <div key={i} className="col-md-4">
              <div
                className="p-4 text-center rounded-3"
                style={{
                  backgroundColor: i === 0 ? "#E20456" : "#0258A5",
                  color: "#fff",
                }}
              >
                <img src={item.icon} className="fs-2 mb-3" alt={item.title} />
                <h5 className="fw-bold">{item.title}</h5>
                <p className="mx-auto" style={{ maxWidth: 300 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Directions;

