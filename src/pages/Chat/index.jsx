import { Fragment, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import user from "../../assets/img/user.svg";
import "../../style/style.css";
import { BsSend } from "react-icons/bs";

const Index = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (index) => {
    setIsActive(index === isActive ? null : index);
  };

  const users = [
    { name: "Luis", role: "Fulltime Frontend Developer" },
    { name: "Yanto", role: "Fulltime Frontend Developer" },
  ];
  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "55px" }}>
        <Row>
          <Col col md={4} className="p-5">
            <div style={{ backgroundColor: "#FFFFFF" }}>
              <h4 className="fw-bold p-3">Message</h4>
              <hr />
              <div className="py-2">
                {users.map((item, index) => (
                  <div
                    key={index}
                    className={`user-card ${
                      isActive === index ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    <img
                      src={user}
                      alt="user"
                      width={60}
                      height={60}
                      className="rounded-circle object-fit-cover"
                    />
                    <div>
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="m-0">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={8} className="p-5">
            <div style={{ backgroundColor: "#FFFFFFFF" }} className="rounded">
              <Row className="p-2">
                <Col
                  md={3}
                  className="d-flex gap-3 align-items-center justify-content-center"
                >
                  <img
                    src={user}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-circle object-fit-cover"
                  />
                  <h5 className="fw-bold m-0 text-center">Luis</h5>
                </Col>
                <Col
                  md={5}
                  className="d-flex justify-content-center align-items-center"
                >
                  <p className="m-0">Fulltime Frontend Developer</p>
                </Col>
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <h5 className="fw-bold m-0" style={{ color: " #5e50a1" }}>
                    Detail Profile
                  </h5>
                </Col>
              </Row>
              <hr />
              <div className="p-3">
                <p>
                  Membuat fitur dan maintenance dasboard admin dan posisi remote
                </p>
                <div>
                  <Form>
                    <div className="my-3">
                      <Form.Label htmlFor="formchat"></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="type message....."
                        style={{ backgroundColor: "#FFFFF" }}
                        className="form-focus rounded-pill"
                      />
                      <div className="d-flex justify-content-center my-3">
                        <button
                          type="submit"
                          className="border border-0 rounded py-2 px-5 gap-2 d-flex m-0 align-items-center fw-bold text-white"
                          style={{ backgroundColor: " #5e50a1" }}
                        >
                          Send
                          <BsSend size={23} />
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Index;
