import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container className="py-5">
        <h2 className="fw-bold text-uppercase mb-4" style={{ color: "#0258A5" }}>
          НАШІ КОНТАКТИ
        </h2>

        <Row className="align-items-start g-5">
          <Col lg={6}>
            <h3 className="fw-bold mb-3" style={{ color: "#E20456" }}>
              Ласкаво просимо до клініки "Дім Здоров’я"!
            </h3>

            <p style={{ color: "#0258A5", fontSize: "18px", lineHeight: "1.5" }}>
              Ми дбаємо про ваше здоров’я та комфорт, тому створили для вас
              зручні умови та легкий доступ до нашої клініки
            </p>

            <div className="mt-4">
              <h5 className="fw-bold mb-1" style={{ color: "#0258A5" }}>
                Адреса
              </h5>
              <p style={{ color: "#E20456" }}>
                м. Харків, вул. Ярославська, 2/1
              </p>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold mb-3" style={{ color: "#E20456" }}>
                Телефони для запису
              </h5>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="./img/vectors/phone-filled.svg"
                  alt="phone"
                  width={24}
                  className="me-2"
                />
                <span style={{ color: "#0258A5" }}>+38 (098) 611-03-03</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="./img/vectors/phone-filled.svg"
                  alt="phone"
                  width={24}
                  className="me-2"
                />
                <span style={{ color: "#0258A5" }}>+38 (099) 611-03-03</span>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold mb-2" style={{ color: "#E20456" }}>
                Електронна пошта
              </h5>
              <div className="d-flex align-items-center">
                <img
                  src="./img/vectors/email-line.svg"
                  alt="email"
                  width={24}
                  className="me-2"
                />
                <span style={{ color: "#0258A5" }}>
                  dimzdorovya2020@gmail.com
                </span>
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src="./img/women-contact.png"
              alt="Контакт"
              className="img-fluid rounded"
              style={{ borderRadius: "20px" }}
            />
          </Col>
        </Row>
            <p className="fs-5"  style={{ color: "#0258A5" }} >
              Зручне розташування дозволяє швидко знайти нас з будь-якої точки міста
            </p>
             {/* Карта */}
        <Row className="justify-content-center mt-4">
          <Col lg={12}>
            <div className="ratio ratio-16x9">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.123456789!2d36.234567890!3d50.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a123456789ab%3A0x123456789abcdef!2sм.%20Харків%2C%20вул.%20Ярославська%2C%202%2F1!5e0!3m2!1sen!2sua!4v1670000000000"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </Col>
        </Row>
            <p className="fs-5" style={{ color: "#0258A5", marginTop:'10px' }}>
              Ми прагнемо надавати високоякісні медичні послуги та забезпечувати індивідуальний підхід до кожного пацієнта. <br />
              Завітайте до нас та довірте своє здоров’я професіоналам!
            </p>
      </Container>
    </div>
  );
};

export default Contact;
