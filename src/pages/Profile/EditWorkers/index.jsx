// import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import User from '../../../assets/img/user.svg';
import { updateProfile } from '../../../store/action/profile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const EditWorker = () => {
  const {userId} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {data, isLoading, isError} = useSelector((state) => state.profileReducer)
  const [image, setImage] = useState(null)
  const [inputData, setInputData] = useState({
    
  })

  return (
    <div>
      <Navbar />
      <div
        className="container-fluid"
        style={{ backgroundColor: '#5E50A1', width: '100%', height: '300px' }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card mt-5">
                <div className="card-body">
                  <div className="content">
                    <div className="img d-flex justify-content-center">
                      <img
                        src={User}
                        alt="image-profile"
                        className="img-fluid w-50"
                      />
                    </div>
                    <div className="edit d-flex justify-content-center">
                      <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
                        Edit
                        <input
                          type="file"
                          name="photo"
                          className="form-control"
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                    <div className="card-title">
                      <h5>Louis Tomlinson</h5>
                    </div>
                    <div className="card-subtitle mt-2">
                      <p className="text-muted">Web Developer</p>
                    </div>
                    <div className="addres">
                      <p className="text-muted">Jawa Tengah, Purwokerto</p>
                    </div>
                    <div className="position">
                      <p className="text-muted">Freelancer</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn text-light w-100 mt-4"
                style={{ backgroundColor: '#5E50A1' }}
              >
                Simpan
              </button>
              <button
                className="btn text-light w-100 mt-4"
                style={{ backgroundColor: '#5E50A1' }}
              >
                Batal
              </button>
            </div>
            <div className="col-md-8">
              <div className="card mt-5">
                <div className="card-body">
                  <div className="header p-2 border border-0 border-bottom border-2">
                    <h4>Data Diri</h4>
                  </div>
                  <form action="">
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Masukkan Nama Lengkap"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Job Desk
                      </label>
                      <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Masukkan Job Desk"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Domisili
                      </label>
                      <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Masukkan Domisili"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Tempat Kerja
                      </label>
                      <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Masukkan Tempat Kerja"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Deskripsi Singkat
                      </label>
                      <input
                        type="text"
                        className="form-control p-3 pb-5"
                        placeholder="Tuliskan Deskripsi Singkat"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mt-5">
                <div className="card-body">
                  <div className="card-title">
                    <h4 className="p-2 border border-0 border-bottom border-2">
                      Skill
                    </h4>
                  </div>
                  <div className="content">
                    <form action="">
                      <div className="mt-3">
                        <label htmlFor="">Skill</label>
                        <div className="form d-flex gap-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Javasript, C++, Python"
                          />
                          <button className="btn btn-warning text-light">
                            Simpan
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card mt-5">
                <div className="card-body">
                  <div className="card-title">
                    <h4 className="p-2 border border-0 border-bottom border-2">
                      Pengalaman Kerja
                    </h4>
                  </div>
                  <form
                    action=""
                    className="pb-5 border border-0 border-bottom border-2"
                  >
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Posisi
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Web Developer"
                      />
                    </div>
                    <div className="mt-3 d-flex gap-2">
                      <div className="col-md-5 nama text-muted">
                        <label htmlFor="">Nama Perusahaan</label>
                        <input
                          type="text"
                          className="form-control w-100"
                          placeholder="PT Harus Bisa"
                        />
                      </div>
                      <div className="tanggal">
                        <label htmlFor="" className="text-muted">
                          Dari Bulan / Tahun
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Januari 2018"
                        />
                      </div>
                      <div className="end text-muted">
                        <label htmlFor="">Sampai Bulan / Tahun</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Januari 2019"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="" className="text-muted">
                        Deskripsi Singkat
                      </label>
                      <input
                        type="text"
                        className="form-control pb-5"
                        placeholder="Deskripsi Pekerjaan Anda"
                      />
                    </div>
                  </form>
                  <button className="btn btn-warning text-light mt-5 w-100">
                    Tambah Pengalaman Kerja
                  </button>
                </div>
              </div>
              <div className="card mt-5">
                <div className="card-body">
                  <div className="card-title">
                    <h4 className="p-2 border border-0 border-bottom border-2">
                      Portofolio
                    </h4>
                  </div>
                  <form action="">
                    <div className="mt-3 text-muted">
                      <label htmlFor="">Nama Aplikasi</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nama Aplikasi"
                      />
                    </div>
                    <div className="mt-3 text-muted">
                      <label htmlFor="">Link Repository</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Link Repository"
                      />
                    </div>
                    <div className="mt-3 text-muted">
                      <label htmlFor="">Type Portofolio</label>
                      <div className="radio d-flex gap-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Aplikasi Mobile
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Aplikasi Web
                          </label>
                        </div>
                      </div>
                    </div>
                    <label htmlFor="" className="mt-5 text-muted">
                      Upload Gambar
                    </label>
                    <div
                      className="edit d-flex justify-content-center rounded"
                      style={{ backgroundColor: '#e2e5ed', height: '200px' }}
                    >
                      <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
                        Upload
                        <input
                          type="file"
                          name="photo"
                          className="form-control"
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                    <button className="btn btn-warning text-light mt-5 w-100">
                      Tambah Portofolio
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditWorker;
