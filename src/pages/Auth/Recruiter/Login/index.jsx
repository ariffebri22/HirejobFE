import React from 'react';
import Pict from '../../../../assets/img/Mask Group.png';
import Uppict from '../../../../assets/img/up.png';
import Logo from '../../../../assets/img/Logo.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-side position-relative">
            <div className="logo position-absolute z-3 w-50 mt-5 p-3">
                <img src={Logo}/>
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
              <form className="">
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label text-muted">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="">
                  <label
                    for="exampleInputPassword1"
                    class="form-label text-muted"
                  >
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    class="form-control"
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
                  class="btn btn-warning w-100 mb-4 text-light"
                >
                  Masuk
                </button>
                <div className="confirm d-flex justify-content-center">
                  <p>Anda Belum Punya Akun?</p>
                  <Link
                    to={'/register-req'}
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
