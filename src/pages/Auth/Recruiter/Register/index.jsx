import Pict from "../../../../assets/img/Mask Group.png";
import Uppict from "../../../../assets/img/up.png";
import Logo from "../../../../assets/img/logo-second.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useState } from "react";
import { actionRegister } from "./../../../../store/action/auth/authRecruiter";
import { Bars } from "react-loader-spinner";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.authRecReducer);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    jabatan: "",
    perusahaan: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username, phone, jabatan, perusahaan, confirm } =
      formData;
    if (
      !email ||
      !password ||
      !username ||
      !phone ||
      !jabatan ||
      !perusahaan ||
      !confirm
    ) {
      toast.error("Please fill in all the fields");
      return;
    }

    if (password !== confirm) {
      toast.error("Password and confirm password must match");
      return;
    }

    try {
      await dispatch(actionRegister(formData, navigate));
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
                <img
                  src={Uppict}
                  style={{ width: "100%" }}
                  className="pt-5 pb-5"
                />
              </div>
              <img
                src={Pict}
                alt="LoginPict"
                className="pt-5 pb-5"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center mt-5">
            <div className="form-login h-75 d-flex flex-column justify-content-center">
              <div className="text-login ">
                <h1 className=" fw-bold">Hallo, Pewpeole</h1>
                <p>
                  Dapatkan akses ke ribuan bakat potensial. Daftarkan diri Anda
                  sebagai Rekruiter untuk memulai.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-muted">Nama</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Masukan Nama Panjang"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Masukkan email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted">Perusahaan</label>
                  <input
                    type="text"
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Masukkan Nama Perusahaan"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Jabatan</label>
                  <input
                    type="text"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Posisi di perusahaan Anda"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">No Handphone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Masukkan No Handphone"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Kata Sandi</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Masukkan Kata Sandi"
                  />
                </div>
                <div className="">
                  <label className="form-label text-muted">
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    value={formData.confirm}
                    onChange={handleChange}
                    className="form-control form-focus"
                    placeholder="Masukkan Konfirmasi Kata Sandi"
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
                  Daftar
                </button>
                <div className="confirm d-flex justify-content-center">
                  <p>Anda Sudah Punya Akun?</p>
                  <Link
                    to={"/login-recruiter"}
                    className="ms-1 text-decoration-none text-warning"
                  >
                    Masuk Disini
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
