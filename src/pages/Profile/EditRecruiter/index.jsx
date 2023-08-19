import { Fragment } from "react";
import Navbar from "../../../components/Navbar/index";
import Footer from "../../../components/Footer/index";
import { Container, Row, Col, Form } from "react-bootstrap";
import user from "../../../assets/img/user.svg";
import { BsPencil } from "react-icons/bs";
import "../../../style/style.css";
import { CiLocationOn } from "react-icons/ci";
const Index = () => {
  return (
    <Fragment>
      <Navbar />

      <div
        className="position-relative w-100"
        style={{ height: "270px", backgroundColor: "#5e50a1" }}
      ></div>
      <div className="position-absolute w-100" style={{ top: "150px" }}>
        <Container className="my-5">
          <Row>
            <Col md={4}>
              <div className="p-4 rounded" style={{ backgroundColor: "white" }}>
                <div className="d-flex justify-content-center">
                  <label
                    htmlFor="addImage"
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column"
                  >
                    <img
                      className="picture"
                      src={user}
                      alt=""
                      width={150}
                      height={150}
                    />
                    <div className="d-flex text-center justify-content-center gap-2 mt-2">
                      <BsPencil size={23} />
                      <p className="m-0">Edit</p>
                    </div>
                  </label>
                  <span>
                    <input className="input-edit" type="file" id="addImage" />
                  </span>
                </div>
                <div className="my-4">
                  <h4 className="fw-bold">PT. Mencari Cinta Sejati</h4>
                  <p>Financial</p>
                  <div className="d-flex gap-2" style={{ color: "#9EA0A5" }}>
                    <CiLocationOn size={25} />
                    <p>Purwokerto,Jawa Tengah</p>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <button
                  className="border border-0 fw-bold text-white rounded w-100 fs-5"
                  style={{ backgroundColor: " #5e50a1", padding: "15px 0" }}
                >
                  {" "}
                  Simpan
                </button>
                <button
                  className=" fw-bold mt-3 rounded w-100 fs-5"
                  style={{
                    backgroundColor: "white",
                    padding: "15px 0",
                    borderColor: "#5e50a1",
                    color: "#5e50a1",
                  }}
                >
                  {" "}
                  Batal
                </button>
              </div>
            </Col>
            <Col md={8}>
              <div style={{ backgroundColor: "white" }} className="p-3 rounded">
                <h3 className="fw-bold p-2">Data diri</h3>
                <hr />
                <Form>
                  <div className="my-3">
                    <Form.Label>Nama Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Nama Perusahaan"
                      className="form-focus"
                    />
                  </div>
                  <div className="my-3">
                    <Form.Label>Bidang</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Bidang Perusahaan"
                      className="form-focus"
                    />
                  </div>
                  <div className="my-3">
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Provinsi"
                      className="form-focus"
                    />
                  </div>
                  <div className="my-3">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Kota"
                      className="form-focus"
                    />
                  </div>

                  <div className="mb-3">
                    <Form.Label>Deskripsi Singkat</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Masukan Deskripsi Pekerjaan"
                      style={{ height: "200px" }}
                      className="form-focus"
                    />
                  </div>

                  <div className="my-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Email"
                      className="form-focus"
                    />
                  </div>

                  <div className="my-3">
                    <Form.Label>Email Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Email Perusahaan"
                      className="form-focus"
                    />
                  </div>

                  <div className="my-3">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Nomor Telepon"
                      className="form-focus"
                    />
                  </div>

                  <div className="my-3">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Nama Linkedin"
                      className="form-focus"
                    />
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Index;
