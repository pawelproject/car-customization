import { Row, Col } from "react-bootstrap";

const CardBodyRow = ({ catName, value }) => {
  return (
    <Row>
      <Col>{catName}</Col>
      <Col className={`text-end`}>{value ? value : "N/A"}</Col>
    </Row>
  );
};

export default CardBodyRow;
