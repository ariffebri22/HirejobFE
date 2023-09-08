/* eslint-disable no-unused-vars */
// import React from 'react';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { putProfileWorker, getProfileWorker, putSkill, getSkill, getExp, getExpByUsers, deleteExp, putExp, postExp } from "../../../store/action/profile";
import { Slide, toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const EditWorker = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getProfileEditWorker, putProfileEditWorker, getSkillReducer, getExpReducer, getExpUsersReducers } = useSelector((state) => state);
    const { data: dataWorker } = getProfileEditWorker;
    const { data: dataSkill } = getSkillReducer;
    const { data: dataExp } = getExpReducer;
    const { data: dataExpUsers } = getExpUsersReducers;
    const { isLoading: loadingPutWorker } = putProfileEditWorker;
    const [photo, setPhoto] = useState(null);
    const [inputData, setInputData] = useState({
        username: "",
        position: "",
        domicile: "",
        company_work: "",
        job_desc: "",
        photo_worker: "",
    });

    const [inputSkill, setInputSkill] = useState({
        skills_name: "",
    });

    const [inputExp, setInputExp] = useState({
        posisi: "",
        nama_perusahaan: "",
        working_start_at: "",
        working_end_at: "",
        deskripsi: "",
    });

    const [originalData, setOriginalData] = useState({});

    useEffect(() => {
        dispatch(getProfileWorker(id, navigate));
        dispatch(getSkill(id, navigate));
        dispatch(getExpByUsers(id, navigate));
    }, [id]);

    // profile

    useEffect(() => {
        if (dataWorker && dataWorker.length > 0) {
            const original = dataWorker[0];
            setInputData({
                username: original.username,
                position: original.position,
                domicile: original.domicile,
                company_work: original.company_work,
                job_desc: original.job_desc,
                photo_worker: original.photo_worker,
            });
            setOriginalData(original);
        }
    }, [dataWorker]);

    const handleEditPhoto = (event) => {
        const fileInput = event.target;
        setPhoto(fileInput.files[0]);
    };

    const handleCancel = (event) => {
        event.preventDefault();

        dispatch(getProfileWorker(id));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (JSON.stringify(inputData) === JSON.stringify(dataWorker[0]) && (photo === null || photo === undefined)) {
            toast.warn("Tidak ada data yang diubah");
            return;
        }

        const bodyFormData = new FormData();
        bodyFormData.append("username", inputData.username);
        bodyFormData.append("position", inputData.position);
        bodyFormData.append("domicile", inputData.domicile);
        bodyFormData.append("company_work", inputData.company_work);
        bodyFormData.append("job_desc", inputData.job_desc);

        if (photo) {
            bodyFormData.append("photo_worker", photo);
        } else {
            bodyFormData.append("photo_worker", originalData.photo_worker);
        }
        console.log(photo);
        console.log(inputData.photo_worker);

        dispatch(putProfileWorker(bodyFormData, id, navigate));
    };

    //skill

    useEffect(() => {
        if (dataSkill && dataSkill.length > 0) {
            const skill = dataSkill[0];
            setInputSkill({
                skills_name: skill.skills_name,
            });
        }
    }, [dataSkill]);

    const handleSubmitSkill = (event) => {
        event.preventDefault();
        dispatch(putSkill(inputSkill, id, navigate));
    };

    //experience

    const getExperienceId = (idd, navigate) => {
        dispatch(getExp(idd, navigate));
    };

    useEffect(() => {
        if (dataExp) {
            setInputExp({
                posisi: dataExp.posisi,
                nama_perusahaan: dataExp.nama_perusahaan,
                working_start_at: dataExp.working_start_at,
                working_end_at: dataExp.working_end_at,
                deskripsi: dataExp.deskripsi,
            });
        }
    }, [dataExp]);

    const deleteMyExperience = (idd, navigate) => {
        dispatch(deleteExp(idd, navigate));
        setTimeout(() => {
            dispatch(getExpByUsers(id, navigate));
        }, 1000);
    };

    const handleInputExperience = (e) => {
        const { name, value } = e.target;
        setInputExp((prevInputExp) => ({
            ...prevInputExp,
            [name]: value,
        }));
    };

    const handleSubmitExperience = (e) => {
        e.preventDefault();
        console.log(inputExp);
        // localStorage.removeItem("idExperience");

        let idd = localStorage.getItem("idExperience");
        console.log(idd);
        idd ? dispatch(putExp(inputExp, idd, navigate)) : dispatch(postExp(inputExp, navigate));
        setInputExp({
            posisi: "",
            nama_perusahaan: "",
            working_start_at: "",
            working_end_at: "",
            deskripsi: "",
        });
        setTimeout(() => {
            dispatch(getExpByUsers(id, navigate));
        }, 1000);
    };

    //portofolio

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
                                            {/* <img src={inputData.photo_worker} alt="image-profile" className="img-fluid w-50 rounded-circle" /> */}
                                            {photo ? (
                                                <img src={URL.createObjectURL(photo)} alt="Preview" className="img-fluid w-50 rounded-circle" />
                                            ) : (
                                                inputData.photo_worker && <img src={inputData.photo_worker} alt="Preview" className="img-fluid w-50 rounded-circle" />
                                            )}
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
                            <button className="btn text-light w-100 mt-4" style={{ backgroundColor: "#5E50A1" }} onClick={handleCancel}>
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
                                                value={inputData.job_desc}
                                                onChange={(e) => setInputData({ ...inputData, job_desc: e.target.value })}
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
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Javasript, C++, Python"
                                                        value={inputSkill.skills_name}
                                                        onChange={(e) => setInputSkill({ ...inputSkill, skills_name: e.target.value })}
                                                    />
                                                    <button className="btn btn-warning text-light" onClick={handleSubmitSkill}>
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
                                        <h4 className="p-2 border border-0 border-bottom border-2">Pengalaman Kerja</h4>
                                    </div>
                                    {getExpUsersReducers.data?.map((experience, index) => (
                                        <div key={index} className="workExperience mb-3 border border-2 rounded-2 p-2">
                                            <div>
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button onClick={() => getExperienceId(experience.id, navigate)} className="bg-warning rounded p-2 text-light border-0">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => deleteMyExperience(experience.id)} className="bg-danger rounded p-2 text-light border-0">
                                                        X
                                                    </button>
                                                </div>
                                                <div className="detailExperience d-flex gap-3">
                                                    <div className="div">
                                                        <h3 className="text-dark">{experience.posisi}</h3>
                                                        <p>{experience.nama_perusahaan}</p>
                                                        <p>
                                                            {experience.working_start_at} - {experience.working_end_at}
                                                        </p>
                                                        <p className="text-dark">{experience.deskripsi}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <form onSubmit={handleSubmitExperience} className="pb-5 border border-0 border-bottom border-2">
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Posisi
                                            </label>
                                            <input type="text" className="form-control" placeholder="Web Developer" name="posisi" value={inputExp.posisi} onChange={handleInputExperience} />
                                        </div>
                                        <div className="mt-3 d-flex gap-2">
                                            <div className="col-md-5 nama text-muted">
                                                <label htmlFor="">Nama Perusahaan</label>
                                                <input type="text" className="form-control" placeholder="PT. Harus Bisa" name="nama_perusahaan" value={inputExp.nama_perusahaan} onChange={handleInputExperience} />
                                            </div>
                                            <div className="tanggal">
                                                <label htmlFor="" className="text-muted">
                                                    Dari Bulan / Tahun
                                                </label>
                                                <input type="text" className="form-control" placeholder="01/01/2022" name="working_start_at" value={inputExp.working_start_at} onChange={handleInputExperience} />
                                            </div>
                                            <div className="end text-muted">
                                                <label htmlFor="">Sampai Bulan / Tahun</label>
                                                <input type="text" className="form-control" placeholder="02/02/2022" name="working_end_at" value={inputExp.working_end_at} onChange={handleInputExperience} />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="" className="text-muted">
                                                Deskripsi Singkat
                                            </label>
                                            <input type="text" className="form-control pb-5" placeholder="Deskripsi Pekerjaan Anda" name="deskripsi" value={inputExp.deskripsi} onChange={handleInputExperience} />
                                        </div>
                                        <button className="btn btn-warning text-light mt-5 w-100" type="submit">
                                            Tambah Pengalaman Kerja
                                        </button>
                                    </form>
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
