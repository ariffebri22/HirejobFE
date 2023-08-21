// import React from "react";
import Pict from '../../../../assets/img/Mask Group.png';
import Uppict from '../../../../assets/img/up.png';
import Logo from '../../../../assets/img/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../../../store/action/auth';
import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const postData = (e) => {
    e.preventDefault();

    dispatch(authLogin(inputData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <>
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
          <div className="col-md-6">
            <div className="left-side position-relative">
              <div className="logo position-absolute z-3 w-50 mt-5 p-3">
                <img src={Logo} />
              </div>
              <div className="text-left position-absolute z-3 h-100 d-flex align-items-center justify-content-center">
                <h1 className="text-light w-75">
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
              <div className="upback position-absolute">
                <img
                  src={Uppict}
                  style={{ width: '100%' }}
                  className="pt-5 pb-5"
                />
              </div>
              <img
                src={Pict}
                alt="LoginPict"
                className="pt-5 pb-5"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="form-login h-75 d-flex flex-column justify-content-center mt-5">
              <div className="text-login mb-5">
                <h1 className="mb-3">HALO, PEWPEOPLE</h1>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
              </div>
              <form onSubmit={postData}>
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
                    value={inputData.email}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-muted"
                  >
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputData.password}
                    onChange={onChange}
                    className="form-control"
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
                  className="btn btn-warning w-100 mb-4 text-light"
                >
                  Masuk
                </button>
                <div className="confirm d-flex justify-content-center">
                  <p>Anda Belum Punya Akun?</p>
                  <Link
                    to={'/register-work'}
                    className="ms-1 text-decoration-none text-warning"
                  >
                    Daftar Disini
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
