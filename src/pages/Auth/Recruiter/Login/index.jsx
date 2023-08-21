import Pict from "../../../../assets/img/Mask Group.png";
import Uppict from "../../../../assets/img/up.png";
import Logo from "../../../../assets/img/logo-second.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bars } from "react-loader-spinner";
import { actionLogin } from "./../../../../store/action/auth/authRecruiter";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.authRecReducer);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please fill in all the fields");
      return;
    }
    try {
      await dispatch(actionLogin(formData, navigate));
    } catch (error) {
      toast.error(isError || "Internal server error");
    }
  };
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
      <div className="container">
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
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <div className="left-side position-relative">
              <div className="logo position-absolute z-3 w-50 mt-5 p-4">
                <img
                  src={Logo}
                  width={150}
                  height={40}
                  className="object-fit-cover"
                />
              </div>
              <div className="text-left position-absolute z-3 h-100 d-flex align-items-center justify-content-center">
                <h1 className="text-light w-75 fw-bold">
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
              <div className="upback position-absolute">
                <img src={Uppict} className="w-100 h-75" />
              </div>
              <img src={Pict} alt="LoginPict" className="w-100" />
            </div>
          </div>
          <div
            className="col-md-6 d-flex flex-column"
            style={{ marginTop: "8rem" }}
          >
            <div className="text-login">
              <h1 className=" fw-bold">Halo,Pewpeole</h1>
              <p>
                Waktunya mencari calon berkualitas. Silakan masuk dan mulai
                pencarian dengan akun Rekruiter Anda.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-muted"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-focus"
                  placeholder="Masukkan Email"
                />
              </div>
              <div>
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-muted"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="form-control form-focus"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan Kata Sandi"
                />
              </div>
              <div className="forgot-pass d-flex justify-content-end mb-4 ">
                <Link className="text-decoration-none text-dark">
                  Lupa Kata Sandi?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-warning w-100 mb-4 text-white fw-bold"
              >
                Masuk
              </button>
              <div className="confirm d-flex justify-content-center">
                <p>Anda Belum Punya Akun?</p>
                <Link
                  to={"/register-recruiter"}
                  className="ms-1 text-decoration-none text-warning"
                >
                  Daftar Disini
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
