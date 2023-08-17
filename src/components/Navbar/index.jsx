import { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logoungu.svg";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsFillPersonFill,
} from "react-icons/bs";

const index = () => {
  return (
    <Fragment>
      <Navbar expand="lg" style={{ backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end"
          >
            <Nav className="ml-auto gap-4">
              <Nav.Item>
                <BsFillBellFill size={25} />
              </Nav.Item>
              <Nav.Item>
                <BsFillEnvelopeFill size={25} />
              </Nav.Item>
              <Nav.Item>
                <BsFillPersonFill size={25} />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default index;
