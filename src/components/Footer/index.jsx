/* eslint-disable no-unused-vars */
import React from "react";
import LogoSecond from "../../assets/img/logo-second.png";
import "../../style/style.css";

const Footer = () => {
    return (
        <>
            <footer className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-8 col-sm-10">
                            <img src={LogoSecond} alt="Peworld" width="200" />
                            <p className="mt-3 mb-5">Bergabunglah dengan kami di platform pencari kerja kami dan jadilah bagian dari perjalanan menuju karier yang sukses!</p>
                        </div>
                    </div>
                    <hr className="opacity-75" />
                    <div className="row">
                        <div className="col">
                            <p>2020 Peworld. All right reserved</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <ul className="list d-flex">
                                <li className="list-group-item me-5">Telepon</li>
                                <li className="list-group-item">Email</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
