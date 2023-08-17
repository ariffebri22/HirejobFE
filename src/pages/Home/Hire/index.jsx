import { Fragment } from "react";
import Navbar from "../../../components/Navbar/index";
import Footer from "../../../components/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import user from "../../../assets/img/user.svg";
import { CiLocationOn } from "react-icons/ci";

const Index = () => {
  return (
    <Fragment>
      <Navbar />

      <Container className="my-5">
        <Row>
          {/* card profile  */}
          <Col md={4} className="p-5">
            <div style={{ backgroundColor: "white" }} className="p-4 rounded">
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  cupiditate impedit provident quas magni.
                </p>
              </div>
              <div style={{ color: "#9EA0A5" }} className="my-4">
                <div className="d-flex gap-2">
                  <CiLocationOn size={25} />
                  <p>Purwokerto,Jawa Tengah</p>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  beatae facere quisquam vero sint optio ipsa atque et, dolorem
                  consequuntur, magnam minima, expedita aliquid cumque amet ex
                  ut aut voluptate.
                </p>
              </div>
              <div className="my-3">
                <h5 className="fw-bold">Skill</h5>
                <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                  <span className="skills fw-bold">Javascript</span>
                  <span className="skills fw-bold">Laravel</span>
                  <span className="skills fw-bold">PHP</span>
                  <span className="skills fw-bold">C++</span>
                  <span className="skills fw-bold">C#</span>
                  <span className="skills fw-bold">Angular</span>
                  <span className="skills fw-bold">Java</span>
                </div>
              </div>
            </div>
          </Col>
          {/* End card profile  */}

          <Col md={8} className="p-5">
            <div className="mb-4">
              <h3 className="fw-bold">Hubungi Harry Maguire</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore, blanditiis harum! Quasi officiis, magni eos repellat
                quia hic deserunt itaque cumque quod laudantium, doloremque sit
                molestias. Deserunt, magnam? Quod, recusandae?
              </p>
            </div>
            <Form>
              <div className="my-3">
                <Form.Label htmlFor="formposist">Untuk Posisi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Posisi Pekerjaan"
                  style={{ backgroundColor: "#FFFFF" }}
                  className="form-focus"
                />
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="formdeskripsi">Deskripsi</Form.Label>
                <Form.Control
                  as="textarea"
                  id="formdeskripsi"
                  rows={5}
                  placeholder="Masukan Deskripsi Pekerjaan"
                  style={{ backgroundColor: "#FFFFFF", height: "200px" }}
                  className="form-focus"
                />
              </div>
              <button
                className="border border-0 fw-bold text-white rounded w-100 p-2"
                style={{ backgroundColor: "#FBB017" }}
                type="submit"
              >
                Hire
              </button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Index;
