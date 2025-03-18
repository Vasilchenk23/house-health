import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>ДІМ ЗДОРОВ’Я</h5>
          </Col>
          <Col md={4} className="text-center">
            <h6>Контакти</h6>
            <p className="mb-1">+38 (098) 611-03-03</p>
            <p className="mb-1">+38 (099) 611-03-03</p>
            <p>dimzdorovya2020@gmail.com</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h6>Адреса</h6>
            <p className="mb-1">м. Харків, вул. Ярославська, 2/1</p>
            <h6>Графік роботи</h6>
            <p className="mb-1">ПН-ПТ: 9.00-17.00, СБ: запис</p>
            <p className="mb-0">Ліцензія № 1608 від 30.07.2021</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
