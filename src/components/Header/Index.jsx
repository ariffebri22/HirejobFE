import { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

const Index = () => {
  return (
    <Fragment>
      <Container
        fluid
        className="text-white py-3"
        style={{ backgroundColor: "#5e50a1" }}
      >
        <Container>
          <Row>
            <h4 className="fw-bold">Top Jobs</h4>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Index;
