import { Fragment, useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/index";
import Footer from "../../../components/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHire } from "./../../../store/action/profile";
import { Bars } from "react-loader-spinner";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.profileHire);
  const [formData, setFormData] = useState({
    hire_position: "",
    company_message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + `/chat/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("Hire Berhasil", { toastId: "1" });
      setTimeout(() => {
        navigate("/chat");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Hire Gagal", { toastId: "1" });
    }
  };

  useEffect(() => {
    dispatch(getHire(id));
  }, [dispatch, id]);
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

      <Container className="my-5">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          transition={Bounce}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Row>
          {/* card profile  */}
          <Col md={4} className="p-5">
            <div style={{ backgroundColor: "white" }} className="p-4 rounded">
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
              <div style={{ color: "#9EA0A5" }} className="my-4">
                <div className="d-flex gap-2">
                  <CiLocationOn size={25} />
                  <p>{data[0]?.domicile}</p>
                </div>
                <p>{data[0]?.job_desc}</p>
              </div>
              <div className="my-3">
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
            </div>
          </Col>
          {/* End card profile  */}

          <Col md={8} className="p-5">
            <div className="mb-4">
              <h3 className="fw-bold">Hubungi {data[0]?.username}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore, blanditiis harum! Quasi officiis, magni eos repellat
                quia hic deserunt itaque cumque quod laudantium, doloremque sit
                molestias. Deserunt, magnam? Quod, recusandae?
              </p>
            </div>
            <Form onSubmit={handleMessage}>
              <div className="my-3">
                <Form.Label htmlFor="formposist">Untuk Posisi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Posisi Pekerjaan"
                  style={{ backgroundColor: "#FFFFF" }}
                  className="form-focus"
                  name="hire_position"
                  value={formData.hire_position}
                  onChange={handleChange}
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
                  name="company_message"
                  value={formData.company_message}
                  onChange={handleChange}
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
