import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
       <h2 className="title mb-4">НАШI КОНТАКТИ</h2>
      <Row className="justify-content-start">
        <Col lg={8}>
          <h2 className="fw-bold" style={{ color:'#E20456', margin:'50px 0px'}}>
            Ласкаво просимо до клініки "Дім Здоров'я"!
          </h2>
          <p style={{fontWeight:'400', fontSize:'24px', color:'#0258A5'}}>
            Ми дбаємо про ваше здоров’я та комфорт, тому створили для вас зручні
            умови та легкий доступ до нашої клініки.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mt-4">
        <Col lg={6}>
          <h4 className="fw-bold" style={{fontWeight:'800', fontSize:'32px', color:'#0258A5', marginTop:'20px'}}>Адреса</h4>
          <p style={{fontWeight:'400', fontSize:'24px', color:'#E20456'}}>м. Харків, вул. Ярославська, 2/1</p>

          <h4 className="fw-bold" style={{fontWeight:'800', fontSize:'32px', color:'#E20456', marginTop:'50px'}}>Телефони для запису</h4>
          <br />
          <div className="d-flex align-center gap-4">
          <img src="./img/vectors/phone-filled.svg" alt="phone-filled" />
          <p style={{fontWeight:'400', fontSize:'24px', color:'#0258A5', padding:'15px 0px 0px 0px'}}>+38 (098) 611-03-03</p>
          </div>
          <div className="d-flex align-center  gap-4">
          <img src="./img/vectors/phone-filled.svg" alt="phone-filled" />
          <p style={{fontWeight:'400', fontSize:'24px', color:'#0258A5', padding:'15px 0px 0px 0px'}}>+38 (099) 611-03-03</p>
          </div>
          <h4 className="fw-bold" style={{fontWeight:'800', fontSize:'32px', color:'#E20456', marginTop:'40px'}}>Електронна пошта</h4>
          <div className="d-flex align-center  gap-4">
          <img src="./img/vectors/email-line.svg" alt="email-line" />
          <p style={{fontWeight:'400', fontSize:'22px', color:'#0258A5', padding:'15px 0px 0px 0px'}}>dimzdorovya2020@gmail.com</p>
          </div>
        </Col>

        <Col lg={6} className="text-end">
          <img
            src="./img/women-contact.png"
            alt="women-contact"
            className="women-contact-img justify-content-end"
          />
        </Col>
      </Row>

      <Row className="justify-content-start mt-4">
        <Col lg={8}>
          <p className="text-start" style={{fontWeight:'400', fontSize:'24px', color:'#0258A5', margin:'30px 0px'}}>
          Зручне розташування дозволяє швидко знайти нас з будь-якої точки міста
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col lg={8}>
          <div className="map-responsive">
            <iframe
              title="map-client"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.123456789!2d36.234567890!3d50.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a123456789ab%3A0x123456789abcdef!2sм.%20Харків%2C%20вул.%20Ярославська%2C%202%2F1!5e0!3m2!1sen!2sua!4v1670000000000"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <p className="text-start" style={{fontWeight:'400', fontSize:'24px', color:'#0258A5', margin:'30px 0px'}}>
        Ми прагнемо надавати високоякісні медичні послуги та забезпечувати індивідуальний підхід до кожного пацієнта. 
        Завітайте до нас та довірте своє здоров’я професіоналам!
          </p>
      </Row>
    </Container>
  );
};

export default Contact;
