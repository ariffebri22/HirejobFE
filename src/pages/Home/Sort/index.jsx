import { Fragment } from "react";
import Footer from "../../../components/Footer";
import Head from "../../../components/Header/Index";
import Navi from "../../../components/Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import { BsSearch, BsFilter } from "react-icons/bs";
import "../../../style/style.css";
import user from "../../../assets/img/user.svg";
import { CiLocationOn } from "react-icons/ci";

const Index = () => {
  return (
    <Fragment>
      <Navi />
      <div style={{ marginTop: "55px" }}>
        <Head />
      </div>
      {/* Search bar */}
      <Container className="my-5">
        <Row>
          <div className="col-md-12 p-0">
            <div className="d-flex align-items-center p-2 rounded wrapperSearchBar">
              <input
                className="inputGrup"
                type="text"
                placeholder="Search for any skills"
              />
              <button className="iconSearch border border-0 fw-bold mx-2 py-4">
                <BsSearch size={25} />
              </button>
              <div className="wrapperButton d-flex text-end align-items-center dropdown">
                <button
                  className="buttonCategory border border-0 rounded"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsFilter size={30} />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Nama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Skill
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasrkan Lokasi
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasrkan Freelance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasrkan Fulltime
                    </a>
                  </li>
                </ul>
                <button className="buttonSearch p-3 fw-bold rounded border border-0 ms-2">
                  Search
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      {/* End search bar */}

      {/* Card  */}

      <Container
        className="my-5 rounded"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Row>
          <Col md={8}>
            <div className="p-3 d-flex gap-4">
              <img
                src={user}
                alt=""
                className="rounded-circle object-fit-cover"
                width={150}
                height={150}
              />
              <div className="d-flex justify-content-center flex-column">
                <h5>Harry Maguire</h5>
                <p className="m-0">Web Developer</p>
                <div className="d-flex gap-2">
                  <CiLocationOn size={25} />
                  <p>Purwokerto</p>
                </div>
                <div className="gap-2 d-flex flex-wrap">
                  <button
                    className="fw-bold text-white border border-0 rounded py-1 px-3"
                    style={{ backgroundColor: " #fbb017" }}
                  >
                    Java
                  </button>
                  <button
                    className="fw-bold text-white border border-0 rounded py-1 px-3"
                    style={{ backgroundColor: " #fbb017" }}
                  >
                    Javascript
                  </button>
                  <button
                    className="fw-bold text-white border border-0 rounded py-1 px-3"
                    style={{ backgroundColor: " #fbb017" }}
                  >
                    PHP
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center p-3"
          >
            <button
              className="fw-bold text-white border border-0 rounded py-2 px-3"
              style={{ backgroundColor: "  #5e50a1" }}
            >
              Lihat Profile
            </button>
          </Col>
        </Row>
      </Container>
      <nav aria-label="Page navigation example" className="mb-5">
        <ul className="pagination justify-content-center gap-3">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

      <Footer />
    </Fragment>
  );
};

export default Index;
