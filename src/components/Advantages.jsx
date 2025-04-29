import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const advantages = [
  {
    title: "ТУРБОТА ТА ПІДТРИМКА",
    description: "Ми розуміємо ваші потреби та завжди готові допомогти",
  },
  {
    title: "СУЧАСНЕ ОБЛАДНАННЯ",
    description: "Діагностика та лікування за світовими стандартами",
  },
  {
    title: "ШИРОКИЙ СПЕКТР ПОСЛУГ",
    description: "Від консультацій до комплексного лікування",
  },
  {
    title: "ІНДИВІДУАЛЬНИЙ ПІДХІД",
    description: "Турбота про кожного пацієнта, індивідуальні плани лікування",
  },
  {
    title: "ДОВІРА",
    description: "Ми будуємо довгострокові відносини з пацієнтами",
  },
  {
    title: "ПРОФЕСІОНАЛІЗМ",
    description: "Досвідчені лікарі та уважний медичний персонал",
  },
];

const Advantages = () => (
  <Container fluid className="px-0">
    <div>
      <Container className="py-5 px-1 px-lg-6">
        <h2 className="title mb-4">НАШІ ПЕРЕВАГИ</h2>
        <Row className="gx-4 gy-4">
          {advantages.map((adv, idx) => (
            <Col md={4} key={idx}>
              <div
                className="d-flex align-items-start"
                style={{
                  background: "#E6F1FF",
                  border: "1px solid #E20456",
                  borderRadius: "50px",
                  borderBottomLeftRadius: "0",
                  padding: "1.5rem",
                }}
              >
                <img
                  src="./img/vectors/check-fill.svg"
                  alt="check"
                  className="me-3 mt-1"
                />
                <div>
                  <h5 className="col-blue fw-bold mb-1">{adv.title}</h5>
                  <p style={{ fontSize: "1.355rem", lineHeight: 1.5 }} className="col-blue-two mb-0">{adv.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </Container>
);

export default Advantages;
