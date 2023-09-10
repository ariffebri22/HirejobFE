import React, { useEffect, useState, Fragment } from "react";
import Navbar from "../../../components/Navbar/index";
import Footer from "../../../components/Footer/index";
import { Container, Row, Col, Form } from "react-bootstrap";
import user from "../../../assets/img/user.svg";
import { BsPencil } from "react-icons/bs";
import "../../../style/style.css";
import { CiLocationOn } from "react-icons/ci";
import { Slide, toast, ToastContainer } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileRekruter, putProfileRekruter } from "../../../store/action/profile";

const Index = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector((state) => state.getProfileEditRekruter);
    const [photo, setPhoto] = useState(null);
    const [originalData, setOriginalData] = useState({});
    const [inputData, setInputData] = useState({
        email: "",
        phone: "",
        perusahaan: "",
        bidang: "",
        provinsi: "",
        kota: "",
        deskripsi: "",
        email_perusahaan: "",
        linkedin: "",
        photo: "",
    });

    useEffect(() => {
        dispatch(getProfileRekruter(id, navigate));
    }, [id]);

    useEffect(() => {
        if (data && data.length > 0) {
            const original = data[0];
            setInputData({
                email: original.email,
                phone: original.phone,
                perusahaan: original.perusahaan,
                bidang: original.bidang,
                provinsi: original.provinsi,
                kota: original.kota,
                deskripsi: original.deskripsi,
                email_perusahaan: original.email_perusahaan,
                linkedin: original.linkedin,
                photo: original.photo,
            });
            setOriginalData(original);
        }
    }, [data]);

    const handleEditPhoto = (event) => {
        const fileInput = event.target;
        setPhoto(fileInput.files[0]);
    };

    const handleCancel = (event) => {
        event.preventDefault();

        dispatch(getProfileRekruter(id, navigate));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const bodyFormData = new FormData();
        bodyFormData.append("email", inputData.email);
        bodyFormData.append("phone", inputData.phone);
        bodyFormData.append("perusahaan", inputData.perusahaan);
        bodyFormData.append("bidang", inputData.bidang);
        bodyFormData.append("provinsi", inputData.provinsi);
        bodyFormData.append("kota", inputData.kota);
        bodyFormData.append("deskripsi", inputData.deskripsi);
        bodyFormData.append("email_perusahaan", inputData.email_perusahaan);
        bodyFormData.append("linkedin", inputData.linkedin);

        if (photo) {
            bodyFormData.append("photo", photo);
        } else {
            bodyFormData.append("photo", originalData.photo);
        }
        console.log(photo);
        console.log(inputData.photo_worker);

        dispatch(putProfileRekruter(bodyFormData, id, navigate));
    };
    return (
        <Fragment>
            <Navbar />
            <div className="position-relative w-100" style={{ height: "270px", backgroundColor: "#5e50a1" }}></div>
            <div className="position-absolute w-100" style={{ top: "150px" }}>
                <Container className="my-5">
                    <Row>
                        <Col md={4}>
                            <div className="p-4 rounded" style={{ backgroundColor: "white" }}>
                                <div className="d-flex justify-content-center">
                                    <label htmlFor="addImage" style={{ cursor: "pointer" }} className="d-flex flex-column">
                                        {photo ? (
                                            <img className="picture" src={URL.createObjectURL(photo)} alt="Preview" width={150} height={150} />
                                        ) : (
                                            inputData.photo && <img className="picture" src={inputData.photo} alt="Preview" width={150} height={150} />
                                        )}
                                        <div className="d-flex text-center justify-content-center gap-2 mt-2">
                                            <BsPencil size={20} />
                                            <p className="m-0">Edit</p>
                                        </div>
                                    </label>
                                    <span>
                                        <input className="input-edit" type="file" id="addImage" onChange={handleEditPhoto} />
                                    </span>
                                </div>
                                <div className="my-4">
                                    <h4 className="fw-bold">{inputData.perusahaan}</h4>
                                    <p>{inputData.bidang}</p>
                                    <div className="d-flex gap-2" style={{ color: "#9EA0A5" }}>
                                        <CiLocationOn size={25} />
                                        <p>
                                            {inputData.kota},{inputData.provinsi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <button className="border border-0 fw-bold text-white rounded w-100 fs-5" style={{ backgroundColor: " #5e50a1", padding: "15px 0" }} onClick={handleSubmit}>
                                    {" "}
                                    Simpan
                                </button>
                                <button
                                    className=" fw-bold mt-3 rounded w-100 fs-5"
                                    style={{
                                        backgroundColor: "white",
                                        padding: "15px 0",
                                        borderColor: "#5e50a1",
                                        color: "#5e50a1",
                                    }}
                                    onClick={handleCancel}
                                >
                                    {" "}
                                    Batal
                                </button>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div style={{ backgroundColor: "white" }} className="p-3 rounded">
                                <h3 className="fw-bold p-2">Data diri</h3>
                                <hr />
                                <Form>
                                    <div className="my-3">
                                        <Form.Label>Nama Perusahaan</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Nama Perusahaan" className="form-focus" value={inputData.perusahaan} onChange={(e) => setInputData({ ...inputData, perusahaan: e.target.value })} />
                                    </div>
                                    <div className="my-3">
                                        <Form.Label>Bidang</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Bidang Perusahaan" className="form-focus" value={inputData.bidang} onChange={(e) => setInputData({ ...inputData, bidang: e.target.value })} />
                                    </div>
                                    <div className="my-3">
                                        <Form.Label>Provinsi</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Provinsi" className="form-focus" value={inputData.provinsi} onChange={(e) => setInputData({ ...inputData, provinsi: e.target.value })} />
                                    </div>
                                    <div className="my-3">
                                        <Form.Label>Kota</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Kota" className="form-focus" value={inputData.kota} onChange={(e) => setInputData({ ...inputData, kota: e.target.value })} />
                                    </div>

                                    <div className="mb-3">
                                        <Form.Label>Deskripsi Singkat</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Masukan Deskripsi Pekerjaan"
                                            style={{ height: "200px" }}
                                            className="form-focus"
                                            value={inputData.deskripsi}
                                            onChange={(e) => setInputData({ ...inputData, deskripsi: e.target.value })}
                                        />
                                    </div>

                                    <div className="my-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Email" className="form-focus" value={inputData.email} onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                                    </div>

                                    <div className="my-3">
                                        <Form.Label>Email Perusahaan</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Masukan Email Perusahaan"
                                            className="form-focus"
                                            value={inputData.email_perusahaan}
                                            onChange={(e) => setInputData({ ...inputData, email_perusahaan: e.target.value })}
                                        />
                                    </div>

                                    <div className="my-3">
                                        <Form.Label>Nomor Telepon</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Nomor Telepon" className="form-focus" value={inputData.phone} onChange={(e) => setInputData({ ...inputData, phone: e.target.value })} />
                                    </div>

                                    <div className="my-3">
                                        <Form.Label>Linkedin</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Nama Linkedin" className="form-focus" value={inputData.linkedin} onChange={(e) => setInputData({ ...inputData, linkedin: e.target.value })} />
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
                <ToastContainer />
            </div>
        </Fragment>
    );
};

export default Index;
