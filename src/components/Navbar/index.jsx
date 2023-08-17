/* eslint-disable no-unused-vars */
import React from "react";
import "../../style/style.css";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand mt-2">
                        <img src={Logo} alt="Peworld" width="150" />
                    </a>
                    <div className="d-flex btnNavbar collapse mt-2" id="navbarNav">
                        <button className="btn me-4 rounded-1">Masuk Untuk Pekerja</button>
                        <button className="btn rounded-1">Masuk Untuk Perekrut</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
