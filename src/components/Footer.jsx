import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-4">
      <Container>
        <Row>
          <Col md={3} className="text-start text-md-start">
            <img src="./img/vectors/logo-white.svg" alt="" />
          </Col>
          <Col md={3} className="text-start">
            <h6>Контакти</h6>
            <br />
            <p className="mb-1">+38 (098) 611-03-03</p>
            <p className="mb-1">+38 (099) 611-03-03</p>
            <br />
            <p>dimzdorovya2020@gmail.com</p>
          </Col>
          <Col md={3} className="text-start text-md-start">
            <h6>Адреса</h6>
            <br />
            <p className="mb-1">м. Харків, вул. Ярославська, 2/1</p>
          </Col>
          <Col md={3} className="text-start text-md-start">
            <h6>Графік роботи</h6>
            <br />
            <p className="mb-1">ПН-ПТ: 9.00-17.00, СБ: запис</p>
          </Col>
        </Row>
        <Row>
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex" style={{ gap: "10px" }}>
          <img src="./img/vectors/telegram.svg" alt="telegram" />
          <img src="./img/vectors/viber.svg" alt="viber" />
          <img src="./img/vectors/facebook.svg" alt="facebook" />
          <img src="./img/vectors/instagram.svg" alt="instagram" />
        </div>
        <p className="mb-0">Ліцензія № 1608 від 30.07.2021</p>
      </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
