/* eslint-disable no-unused-vars */
import { Fragment, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar/index";
import Footer from "../../../components/Footer/index";
import { Col, Container, Row } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import "../../../style/style.css";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { BsInstagram, BsEnvelope } from "react-icons/bs";
import { getPortfolio } from "../../../store/action/profile";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import company_logo from "../../../assets/img/company-logo.jpg";
import { Bars } from "react-loader-spinner";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { profilePortfolio } = useSelector((state) => state);
  const { isError, errorMessage, isLoading, data } = profilePortfolio;

  useEffect(() => {
    if (isError && errorMessage) {
      toast.warn(errorMessage, {
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else if (isError && !errorMessage) {
      toast.error("Something wrong");
    }
  }, [isError, errorMessage]);

  useEffect(() => {
    dispatch(getPortfolio(id, navigate));
  }, [dispatch, id, navigate]);

  console.log(data[0]?.username);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingLeft: "50px",
        }}
      >
        <Bars
          height="80"
          width="80"
          color="#5e50a1"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />

      <div
        className="position-relative w-100"
        style={{ height: "270px", backgroundColor: "#5e50a1" }}
      ></div>
      <div className="position-absolute w-100" style={{ top: "150px" }}>
        <Container>
          <Row>
            <Col md={4} className="p-5">
              <div style={{ backgroundColor: "white" }} className="rounded p-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={data[0]?.photo_worker}
                    alt=""
                    className="rounded-circle object-fit-cover"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="mt-2">
                  <h5 className="fw-bold">{data[0]?.username}</h5>
                  <p>{data[0]?.position}</p>
                </div>
                <div className="d-flex gap-2">
                  <CiLocationOn size={25} />
                  <p>{data[0]?.domicile}</p>
                </div>
                <div style={{ color: "#9EA0A5" }}>
                  <p>{data[0]?.company_work}</p>
                  <p>{data[0]?.job_desc}</p>
                </div>
                <div className="my-5">
                  <h5 className="fw-bold">Skill</h5>
                  <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                    {data[0]?.skills_name &&
                      data[0].skills_name.split(", ").map((skill, index) => (
                        <span key={index} className="skills fw-bold">
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="py-2" style={{ color: "#9EA0A5" }}>
                  <div className="d-flex gap-2">
                    <BsEnvelope size={25} />
                    <p>Email</p>
                  </div>
                  <div className="d-flex gap-2">
                    <BsInstagram size={25} />
                    <p>Instagram</p>
                  </div>
                  <div className="d-flex gap-2">
                    <FiGithub size={25} />
                    <p>Github</p>
                  </div>
                  <div className="d-flex gap-2">
                    <FiGitlab size={25} />
                    <p>Gitlab</p>
                  </div>
                </div>
                <div>
                  <Link to={`/hire/${data[0]?.id}`}>
                    <button
                      className="fw-bold border border-0 rounded py-2 text-white w-100"
                      style={{ backgroundColor: "#5e50a1" }}
                    >
                      Hire
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={8} className="p-5">
              <div style={{ backgroundColor: "white" }} className="p-3 rounded">
                <h4 className="fw-bold m-0">Portofolio</h4>
                <Row className="p-2">
                  {data[0]?.portofolio &&
                    data[0].portofolio.slice(0, 6).map((portfolio, index) => (
                      <Col key={index} md={4} sm={6} className="">
                        <div className="text-center h-100">
                          <img
                            src={portfolio.porto_photo}
                            alt="portfolio"
                            className="img-fluid rounded-3 h-75"
                          />
                          <p className="mt-2">{portfolio.porto_name}</p>
                        </div>
                      </Col>
                    ))}
                </Row>
                <Row className="p-2">
                  {data[0]?.portofolio &&
                    data[0].portofolio.slice(6, 12).map((portfolio, index) => (
                      <Col key={index} md={4} sm={6} className="">
                        <div className="text-center">
                          <img
                            src={portfolio.porto_photo}
                            alt="portfolio"
                            className="img-fluid rounded-3 h-75"
                          />
                          <p className="mt-2">{portfolio.porto_name}</p>
                        </div>
                      </Col>
                    ))}
                </Row>
                <h4 className="fw-bold my-3">Pengalaman kerja</h4>
                <hr className="linebottom opacity-100" />
                {data[0]?.experience &&
                  data[0].experience.map((experience, index) => (
                    <div key={index} className="d-flex gap-3">
                      <img
                        src={company_logo}
                        alt="experience"
                        width={84}
                        height={84}
                      />
                      <div>
                        <h5 className="fw-bold">{experience.posisi}</h5>
                        <p className="m-0">{experience.nama_perusahaan}</p>
                        <p className="m-0" style={{ color: "#9EA0A5" }}>
                          {experience.working_start_at} -{" "}
                          {experience.working_end_at}
                        </p>
                        <p className="my-2">{experience.deskripsi}</p>
                      </div>
                      <hr />
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Index;
