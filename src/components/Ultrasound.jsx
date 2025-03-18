import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ultrasound = () => {
  return (
    <div className="container my-5">
      <h2 className="title mb-4">УЗД В НАШІЙ КЛІНІЦІ</h2>
      <div className="row align-items-stretch">
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="block-ultrasound">
            <p>
            Ультразвукове дослідження (УЗД) – це сучасний, 
            безпечний та надзвичайно інформативний метод діагностики, 
            який дозволяє нам зазирнути всередину вашого організму без жодного дискомфорту. 
            У нашій клініці ми пропонуємо повний спектр УЗД-досліджень для всіх органів та систем, 
            використовуючи найновіше обладнання та передові технології. 
            </p>
            <br />
            <p>
            Наші досвідчені лікарі-діагности з високою точністю оцінять стан ваших внутрішніх органів, 
            виявлять можливі патології на ранніх стадіях та допоможуть встановити правильний діагноз.
            </p>
            <br />
            <p>
            Запишіться на обстеження вже сьогодні та зробіть крок до здорового майбутнього!
            </p>
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
            src="./img/ultrasound.png"
            alt="УЗД процедура"
            className="img-fluid shadow"
            style={{ borderRadius: "40px 40px 40px 0px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ultrasound;
