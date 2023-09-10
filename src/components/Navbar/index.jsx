import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logoungu.svg";
import { BsFillBellFill, BsFillEnvelopeFill, BsFillPersonFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Index = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const decodedToken = token ? jwt_decode(token) : null;
    // console.log(decodedToken);

    const handleProfileClickRec = () => {
        navigate(`/edit-recruiter/${decodedToken.id}`);
    };
    const handleProfileClickWork = () => {
        navigate(`/edit-worker/${decodedToken.id}`);
    };
    const handleChat = () => {
        navigate(`/chat`);
    };
    const handleHome = () => {
        navigate(`/`);
    };

    return (
        <Navbar expand="lg" style={{ backgroundColor: "white" }} className="shadow fixed-top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="img" onClick={handleHome} style={{ cursor: "pointer" }} />
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
                                    <BsFillEnvelopeFill size={25} onClick={handleChat} style={{ cursor: "pointer" }} />
                                </Nav.Item>
                                <Nav.Item>
                                    <img
                                        src={decodedToken.type === "recruiter" ? decodedToken.photo : decodedToken.photo_worker}
                                        alt="ImageUser"
                                        width={25}
                                        className="rounded-circle"
                                        style={{ cursor: "pointer" }}
                                        onClick={decodedToken.type === "recruiter" ? handleProfileClickRec : handleProfileClickWork}
                                    />
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
                            <div className="d-flex btnNavbar collapse mt-2" id="navbarSupportedContent">
                                <Link to={"/login-work"}>
                                    <button className="btn me-4 rounded-1">Masuk Untuk Pekerja</button>
                                </Link>
                                <Link to={"/login-recruiter"}>
                                    <button className="btn rounded-1">Masuk Untuk Perekrut</button>
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
