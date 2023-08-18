import { Fragment } from "react";
import Navbar from "../../../components/Navbar/index";
import Footer from "../../../components/Footer/index";
import { Col, Container, Row } from "react-bootstrap";
import user from "../../../assets/img/user.svg";
import portfolio from "../../../assets/img/portfolio.png";
import { CiLocationOn } from "react-icons/ci";
import "../../../style/style.css";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { BsInstagram, BsEnvelope } from "react-icons/bs";

const Index = () => {
  return (
    <Fragment>
      <Navbar />

      <div
        className="position-relative w-100"
        style={{ height: "270px", backgroundColor: "#5e50a1" }}
      ></div>
      <div className="position-absolute w-100" style={{ top: "150px" }}>
        <Container fluid>
          <Row>
            <Col md={4} className="p-5">
              <div style={{ backgroundColor: "white" }} className="rounded p-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={user}
                    alt=""
                    className="rounded-circle object-fit-cover"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="mt-2">
                  <h5 className="fw-bold">Harry Maguire</h5>
                  <p> Web Developer</p>
                </div>
                <div className="d-flex gap-2">
                  <CiLocationOn size={25} />
                  <p>Purwokerto,Jawa Tengah</p>
                </div>
                <div style={{ color: "#9EA0A5" }}>
                  <p>Frelancer</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illo nam provident, repudiandae, voluptatibus quod quam
                    ducimus minus explicabo a beatae debitis sed adipisci labore
                    atque veniam commodi omnis dolorum mollitia!
                  </p>
                </div>
                <div className="my-5">
                  <h5 className="fw-bold">Skill</h5>
                  <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                    <span className="skills fw-bold">Javascript</span>
                    <span className="skills fw-bold">Laravel</span>
                    <span className="skills fw-bold">PHP</span>
                    <span className="skills fw-bold">C++</span>
                    <span className="skills fw-bold">C#</span>
                    <span className="skills fw-bold">Angular</span>
                    <span className="skills fw-bold">Java</span>
                    <span className="skills fw-bold">Ruby</span>
                    <span className="skills fw-bold">Python</span>
                  </div>
                </div>
                <div className="py-2" style={{ color: "#9EA0A5" }}>
                  <div className="d-flex gap-2">
                    <BsEnvelope size={25} />
                    <p>Harymaguire@gmail.com</p>
                  </div>
                  <div className="d-flex gap-2">
                    <BsInstagram size={25} />
                    <p>@Harry91</p>
                  </div>
                  <div className="d-flex gap-2">
                    <FiGithub size={25} />
                    <p>@Harryymooo</p>
                  </div>
                  <div className="d-flex gap-2">
                    <FiGitlab size={25} />
                    <p>Harimaguire91</p>
                  </div>
                </div>
                <div>
                  <button
                    className="fw-bold border border-0 rounded py-2 text-white w-100"
                    style={{ backgroundColor: "#5e50a1" }}
                  >
                    Hire
                  </button>
                </div>
              </div>
            </Col>
            <Col md={8} className="p-5">
              <div style={{ backgroundColor: "white" }} className="p-3 rounded">
                <h4 className="fw-bold m-0">Portofolio</h4>
                <Row className="p-2">
                  <Col md={4}>
                    <img
                      src={portfolio}
                      alt="portfolio"
                      width={250}
                      height={150}
                    />
                    <p className="d-flex justify-content-center">
                      Remainder App
                    </p>
                  </Col>
                  <Col md={4}>
                    <img
                      src={portfolio}
                      alt="portfolio"
                      width={250}
                      height={150}
                    />
                    <p className="d-flex justify-content-center">
                      Remainder App
                    </p>
                  </Col>
                  <Col md={4}>
                    <img
                      src={portfolio}
                      alt="portfolio"
                      width={250}
                      height={150}
                    />
                    <p className="d-flex justify-content-center">
                      {" "}
                      Remainder App
                    </p>
                  </Col>
                  <Col md={4}>
                    <img
                      src={portfolio}
                      alt="portfolio"
                      width={250}
                      height={150}
                    />
                    <p className="d-flex justify-content-center">
                      Remainder App
                    </p>
                  </Col>
                  <Col md={4}>
                    <img
                      src={portfolio}
                      alt="portfolio"
                      width={250}
                      height={150}
                    />
                    <p className="d-flex justify-content-center">
                      Remainder App
                    </p>
                  </Col>
                  <Col md={4}>
                    <img
                      src={portfolio}
                      alt="portfolio"
                      width={250}
                      height={150}
                    />
                    <p className="d-flex justify-content-center">
                      Remainder App
                    </p>
                  </Col>
                </Row>
                <h4 className="fw-bold my-3">Pengalaman kerja</h4>
                <div className="d-flex gap-3">
                  <img
                    src={portfolio}
                    alt="experience"
                    width={84}
                    height={84}
                  />
                  <div>
                    <h5 className="fw-bold">Engineer</h5>
                    <p className="m-0">Tokopedia</p>
                    <p className="m-0" style={{ color: "#9EA0A5" }}>
                      July 2019 - January 2020 6 Monts
                    </p>
                    <p className="my-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus, debitis reprehenderit quibusdam laudantium
                      possimus sint aperiam, itaque temporibus, vero distinctio
                      odio quasi doloribus suscipit. Explicabo reiciendis eaque
                      facilis libero eligendi.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt  -5">
            <Footer />
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Index;
