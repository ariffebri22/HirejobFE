import { Fragment, useState, useCallback, useEffect } from "react";
import Footer from "../../../components/Footer";
import Head from "../../../components/Header/Index";
import Navi from "../../../components/Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import { BsSearch, BsFilter } from "react-icons/bs";
import "../../../style/style.css";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";

const Index = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getData = useCallback(
    (page) => {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + `/home`, {
          params: {
            page: page,
            // limit: 2,

            search: searchQuery,
          },
        })
        .then((res) => {
          console.log(res);
          setData(res.data.data);
          // setTotalPage(res.data.pagination.totalPage);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [searchQuery]
  );
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setCurrentPage(1);
    getData(1);
  };

  const handleNext = useCallback(() => {
    if (currentPage < totalPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalPage]);

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentPage]);

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  useEffect(() => {
    getData(currentPage);
  }, [getData, currentPage]);

  const nextDisabled = currentPage >= totalPage;
  const previousDisabled = currentPage === 1;

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
            <form onSubmit={handleSearchSubmit}>
              <div className="d-flex align-items-center p-2 rounded wrapperSearchBar">
                <input
                  className="inputGrup"
                  type="text"
                  placeholder="Search for any skills"
                  value={searchQuery}
                  onChange={handleSearchChange}
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
            </form>
          </div>
        </Row>
      </Container>
      {/* End search bar */}

      {/* Card  */}

      <Container
        className="my-5 rounded"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {data?.map((item, index) => {
          const skillsArray = item.skills_name.split(", ");

          return (
            <div key={index}>
              <Row>
                <Col md={8}>
                  <div className="p-3 d-flex gap-4">
                    <img
                      src={item.photo_worker}
                      alt=""
                      className="rounded-circle object-fit-cover"
                      width={150}
                      height={150}
                    />
                    <div className="d-flex justify-content-center flex-column">
                      <h5>{item.username}</h5>
                      <p className="m-0">{item.job_desc}</p>
                      <div className="d-flex gap-2">
                        <CiLocationOn size={25} />
                        <p>{item.domicile}</p>
                      </div>
                      <div className="gap-2 d-flex flex-wrap">
                        {skillsArray.map((skill, skillIndex) => (
                          <button
                            key={skillIndex}
                            className="fw-bold text-white border border-0 rounded py-1 px-3"
                            style={{ backgroundColor: " #fbb017" }}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center p-3"
                >
                  <Link to={`/portfolio/${item.authprofile_id}`}>
                    <button
                      className="fw-bold text-white border border-0 rounded py-2 px-3"
                      style={{ backgroundColor: "  #5e50a1" }}
                    >
                      Lihat Profile
                    </button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        })}
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
