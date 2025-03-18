import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Ultrasound = () => {
  return (
    <div className="container my-5">
      <h2 className="text-uppercase fw-bold">УЗД В НАШІЙ КЛІНІЦІ</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>
            Ультразвукове дослідження (УЗД) – це сучасний, безпечний та
            надзвичайно інформативний метод діагностики, який дозволяє нам
            зазирнути всередину вашого організму без жодного дискомфорту.
          </p>
          <p>
            У нашій клініці ми пропонуємо повний спектр УЗД-досліджень для всіх
            органів та систем, використовуючи найновіше обладнання та передові
            технології.
          </p>
          <a href="#" className="btn btn-primary">
            Розклад прийому
          </a>
        </div>
        <div className="col-md-6">
          <img
            src="./img/ultrasound.png"
            alt="УЗД процедура"
             className="img-fluid shadow mt-3 mt-md-7"
            style={{ borderRadius: "40px 40px 40px 0px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ultrasound;
