import { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logoungu.svg";
import { BsFillBellFill, BsFillEnvelopeFill, BsFillPersonFill } from "react-icons/bs";

const index = () => {
    return (
        <Fragment>
            <Navbar expand="lg" style={{ backgroundColor: "white" }} className="shadow fixed-top">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
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
// /* eslint-disable no-unused-vars */
// import React from "react";
// import "../../style/style.css";
// import Logo from "../../assets/img/logo.png";

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//                 <div className="container">
//                     <a href="#" className="navbar-brand mt-2">
//                         <img src={Logo} alt="Peworld" width="150" />
//                     </a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="d-flex btnNavbar collapse mt-2" id="navbarSupportedContent">
//                         <button className="btn me-4 rounded-1">Masuk Untuk Pekerja</button>
//                         <button className="btn rounded-1">Masuk Untuk Perekrut</button>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;
