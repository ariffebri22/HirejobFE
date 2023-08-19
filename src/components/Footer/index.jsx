import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <>
      <footer
        className="footer text-white"
        style={{ backgroundColor: "#5E50A1" }}
      >
        <Container>
          <Row>
            <Col md={12} className="d-flex align-items-center mt-4">
              <div>
                <img src={logo} alt="img" />
                <div className="py-4">
                  <p className="m-0">
                    Bergabunglah dengan tim kami yang berdedikasi untuk meraih
                    kesuksesan bersama, <br />
                    Masa depan penuh potensi ada di ujung jari Anda, <br />
                    Jadilah bagian dari perjalanan kami hari ini.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr style={{ borderTop: "3px solid white" }} />
          <div className="d-flex justify-content-between py-4">
            <div>
              <p>2020 Peworld. All right reserved</p>
            </div>
            <div className="d-flex gap-3">
              <p>Email</p>
              <p>Phone</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
