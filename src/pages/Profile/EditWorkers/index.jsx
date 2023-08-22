/* eslint-disable no-unused-vars */
// import React from 'react';
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import User from "../../../assets/img/user.svg";
import { updateProfile } from "../../../store/action/profile";
import { Slide, toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const token = localStorage.getItem("token");

const EditWorker = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [inputData, setInputData] = useState({
        username: "",
        position: "",
        domicile: "",
        company_work: "",
        job_desk: "",
        photo_worker: "",
    });

    const [originalData, setOriginalData] = useState({}); // Untuk menyimpan data asli untuk perbandingan

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BACKEND_URL + `/auth/workers/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                const original = res.data.data[0];
                setInputData({
                    username: original.username,
                    position: original.position,
                    domicile: original.domicile,
                    company_work: original.company_work,
                    job_desk: original.job_desc,
                    photo_worker: original.photo_worker,
                });
                setOriginalData(original);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleEditPhoto = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setInputData((prevData) => ({
                ...prevData,
                photo_worker: e.target.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (JSON.stringify(inputData) === JSON.stringify(originalData)) {
            toast.warn("Tidak ada data yang diubah");
            return;
        }

        let bodyFormData = new FormData();
        bodyFormData.append("username", inputData.username);
        bodyFormData.append("position", inputData.position);
        bodyFormData.append("domicile", inputData.domicile);
        bodyFormData.append("company_work", inputData.company_work);
        bodyFormData.append("job_desc", inputData.job_desk);

        if (photo) {
            bodyFormData.append("photo", photo);
        }

        axios
            .put(import.meta.env.VITE_BACKEND_URL + `/auth/workers/update/${id}`, bodyFormData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                toast.success("Ubah data berhasil");
                setTimeout(() => {
                    navigate("/profile");
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{ backgroundColor: "#5E50A1", width: "100%", height: "300px" }}>
                <div className="container">
                    <div className="row mb-5 mt-5">
                        <div className="col-md-4">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="content">
                                        <div className="img d-flex justify-content-center">
                                            <img src={inputData.photo_worker} alt="image-profile" className="img-fluid w-50 rounded-circle" />
                                        </div>
                                        <div className="edit d-flex justify-content-center">
                                            <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
                                                Edit
                                                <input type="file" name="photo" className="form-control" style={{ display: "none" }} onChange={handleEditPhoto} />
                                            </label>
                                        </div>
                                        <div className="card-title">
                                            <h5>{inputData.username}</h5>
                                        </div>
                                        <div className="card-subtitle mt-2">
                                            <p className="text-muted">{inputData.position}</p>
                                        </div>
                                        <div className="addres d-flex gap-2">
                                            <CiLocationOn size={25} />
                                            <p className="text-muted">{inputData.domicile}</p>
                                        </div>
                                        <div className="position">
                                            <p className="text-muted">{inputData.company_work}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn text-light w-100 mt-4" style={{ backgroundColor: "#5E50A1" }} onClick={handleSubmit}>
                                Simpan
                            </button>
                            <button className="btn text-light w-100 mt-4" style={{ backgroundColor: "#5E50A1" }}>
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
                                            <input type="text" className="form-control p-3" placeholder="Masukkan Nama Lengkap" value={inputData.username} onChange={(e) => setInputData({ ...inputData, username: e.target.value })} />
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Job Desk
                                            </label>
                                            <input type="text" className="form-control p-3" placeholder="Masukkan Job Desk" value={inputData.position} onChange={(e) => setInputData({ ...inputData, position: e.target.value })} />
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Domisili
                                            </label>
                                            <input type="text" className="form-control p-3" placeholder="Masukkan Domisili" value={inputData.domicile} onChange={(e) => setInputData({ ...inputData, domicile: e.target.value })} />
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Tempat Kerja
                                            </label>
                                            <input type="text" className="form-control p-3" placeholder="Masukkan Tempat Kerja" value={inputData.company_work} onChange={(e) => setInputData({ ...inputData, company_work: e.target.value })} />
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Deskripsi Singkat
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control p-3 pb-5"
                                                placeholder="Tuliskan Deskripsi Singkat"
                                                value={inputData.job_desk}
                                                onChange={(e) => setInputData({ ...inputData, job_desk: e.target.value })}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4 className="p-2 border border-0 border-bottom border-2">Skill</h4>
                                    </div>
                                    <div className="content">
                                        <form action="">
                                            <div className="mt-3">
                                                <label htmlFor="">Skill</label>
                                                <div className="form d-flex gap-2">
                                                    <input type="text" className="form-control" placeholder="Javasript, C++, Python" />
                                                    <button className="btn btn-warning text-light">Simpan</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4 className="p-2 border border-0 border-bottom border-2">Pengalaman Kerja</h4>
                                    </div>
                                    <form action="" className="pb-5 border border-0 border-bottom border-2">
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Posisi
                                            </label>
                                            <input type="text" className="form-control" placeholder="Web Developer" />
                                        </div>
                                        <div className="mt-3 d-flex gap-2">
                                            <div className="col-md-5 nama text-muted">
                                                <label htmlFor="">Nama Perusahaan</label>
                                                <input type="text" className="form-control w-100" placeholder="PT Harus Bisa" />
                                            </div>
                                            <div className="tanggal">
                                                <label htmlFor="" className="text-muted">
                                                    Dari Bulan / Tahun
                                                </label>
                                                <input type="text" className="form-control" placeholder="Januari 2018" />
                                            </div>
                                            <div className="end text-muted">
                                                <label htmlFor="">Sampai Bulan / Tahun</label>
                                                <input type="text" className="form-control" placeholder="Januari 2019" />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Deskripsi Singkat
                                            </label>
                                            <input type="text" className="form-control pb-5" placeholder="Deskripsi Pekerjaan Anda" />
                                        </div>
                                    </form>
                                    <button className="btn btn-warning text-light mt-5 w-100">Tambah Pengalaman Kerja</button>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4 className="p-2 border border-0 border-bottom border-2">Portofolio</h4>
                                    </div>
                                    <form action="">
                                        <div className="mt-3 text-muted">
                                            <label htmlFor="">Nama Aplikasi</label>
                                            <input type="text" className="form-control" placeholder="Masukkan Nama Aplikasi" />
                                        </div>
                                        <div className="mt-3 text-muted">
                                            <label htmlFor="">Link Repository</label>
                                            <input type="text" className="form-control" placeholder="Masukkan Link Repository" />
                                        </div>
                                        <div className="mt-3 text-muted">
                                            <label htmlFor="">Type Portofolio</label>
                                            <div className="radio d-flex gap-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Aplikasi Mobile
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Aplikasi Web
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <label htmlFor="" className="mt-5 text-muted">
                                            Upload Gambar
                                        </label>
                                        <div className="edit d-flex justify-content-center rounded" style={{ backgroundColor: "#e2e5ed", height: "200px" }}>
                                            <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
                                                Upload
                                                <input type="file" name="photo" className="form-control" style={{ display: "none" }} />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <ToastContainer />
            </div>
        </div>
    );
};

export default EditWorker;
