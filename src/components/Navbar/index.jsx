import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logoungu.svg";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "white" }}
      className="shadow fixed-top"
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
          <Nav className="ml-auto gap-4">
            {token ? (
              <>
                <Nav.Item>
                  <BsFillBellFill size={25} />
                </Nav.Item>
                <Nav.Item>
                  <BsFillEnvelopeFill size={25} />
                </Nav.Item>
                <Nav.Item>
                  <BsFillPersonFill size={25} />
                </Nav.Item>
                <h5
                  className="m-0 fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                >
                  Logout
                </h5>
              </>
            ) : (
              <div
                className="d-flex btnNavbar collapse mt-2"
                id="navbarSupportedContent"
              >
                <Link to={"/login-work"}>
                  <button className="btn me-4 rounded-1">
                    Masuk Untuk Pekerja
                  </button>
                </Link>
                <Link to={"/login-recruiter"}>
                  <button className="btn rounded-1">
                    Masuk Untuk Perekrut
                  </button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Index;
