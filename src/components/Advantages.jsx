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

const Advantages = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-primary fw-bold">НАШІ ПЕРЕВАГИ</h2>
      <Row className="mt-4">
        {advantages.map((adv, index) => (
          <Col md={6} className="mb-3" key={index}>
            <div className="p-3 rounded border border-danger bg-light d-flex">
              <span className="text-danger fs-3 me-2">✔</span>
              <div>
                <h5 className="text-danger fw-bold">{adv.title}</h5>
                <p className="mb-0">{adv.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Advantages;
