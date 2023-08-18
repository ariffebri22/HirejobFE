/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginReq from "../pages/Auth/Recruiter/Login";
import RegisterReq from "../pages/Auth/Recruiter/Register";
import LoginWork from "../pages/Auth/Workers/Login";
import RegisterWork from "../pages/Auth/Workers/Register";
import ResetPass from "../pages/Auth/Password/ResetPasswordEmail";
import Otp from "../pages/Auth/Password/ResetPasswordOTP";
import ConfirmPass from "../pages/Auth/Password/ResetConfirmPassword";

function App() {
    return (
       <Router>
        <Routes>
            <Route path="/login-req" element={<LoginReq/>}/>
            <Route path="/register-req" element={<RegisterReq/>}/>
            <Route path="/login-work" element={<LoginWork/>}/>
            <Route path="/register-work" element={<RegisterWork/>}/>
            <Route path="/reset" element={<ResetPass/>}/>
            <Route path="/otp" element={<Otp/>}/>
            <Route path="/confirm" element={<ConfirmPass/>}/>
        </Routes>
       </Router>
    );
}

export default App;
