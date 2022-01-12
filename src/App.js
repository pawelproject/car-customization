import "./App.css";
import CarConfiguration from "./components/CarConfiguration";
import Summary from "./components/Summary";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <br />
      <Container fluid="md">
        <Row className="d-flex justify-content-around">
          <Col xl={6} lg={7} md={6} sm={6} xs={12}>
            <CarConfiguration />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <Summary />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
