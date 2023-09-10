/* eslint-disable no-unused-vars */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/LandingPage";
import Portfolio from "../pages/Home/Portfolio/index";
import EditRecruiter from "../pages/Profile/EditRecruiter/index";
import Hire from "../pages/Home/Hire/index";
import Sort from "../pages/Home/Sort/index";
import Chat from "../pages/Chat/index";
import LoginRecruiter from "../pages/Auth/Recruiter/Login";
import RegisterRecruiter from "../pages/Auth/Recruiter/Register";
import LoginWork from "../pages/Auth/Workers/Login";
import RegisterWork from "../pages/Auth/Workers/Register";
import ResetPass from "../pages/Auth/Password/ResetPasswordEmail";
import Otp from "../pages/Auth/Password/ResetPasswordOTP";
import ConfirmPass from "../pages/Auth/Password/ResetConfirmPassword";
import EditWorker from "../pages/Profile/EditWorkers";
import PrivateRoute from "../components/PrivateRoute";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/portfolio/:id"
                    element={
                        <PrivateRoute>
                            <Portfolio />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/hire/:id"
                    element={
                        <PrivateRoute>
                            <Hire />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/sort"
                    element={
                        <PrivateRoute>
                            <Sort />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <PrivateRoute>
                            <Chat />
                        </PrivateRoute>
                    }
                />
                <Route path="/login-recruiter" element={<LoginRecruiter />} />
                <Route path="/register-recruiter" element={<RegisterRecruiter />} />
                <Route path="/login-work" element={<LoginWork />} />
                <Route path="/register-work" element={<RegisterWork />} />
                <Route path="/reset" element={<ResetPass />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/confirm" element={<ConfirmPass />} />
                <Route path="/edit-worker/:id" element={<EditWorker />} />
                <Route path="/edit-recruiter/:id" element={<EditRecruiter />} />
            </Routes>
        </Router>
    );
    // return (
    //     <Router>
    //         <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route
    //                 path="/portfolio/:id"
    //                 element={
    //                     <PrivateRoute>
    //                         <Portfolio />
    //                     </PrivateRoute>
    //                 }
    //             />
    //             <Route path="/edit-recruiter" element={<EditRecruiter />} />
    //             <Route
    //                 path="/hire/:id"
    //                 element={
    //                     <PrivateRoute>
    //                         <Hire />
    //                     </PrivateRoute>
    //                 }
    //             />
    //             <Route
    //                 path="/sort"
    //                 element={
    //                     <PrivateRoute>
    //                         <Sort />
    //                     </PrivateRoute>
    //                 }
    //             />
    //             <Route
    //                 path="/chat"
    //                 element={
    //                     <PrivateRoute>
    //                         <Chat />
    //                     </PrivateRoute>
    //                 }
    //             />
    //             <Route path="/login-recruiter" element={<LoginRecruiter />} />
    //             <Route path="/register-recruiter" element={<RegisterRecruiter />} />
    //             <Route path="/login-work" element={<LoginWork />} />
    //             <Route path="/register-work" element={<RegisterWork />} />
    //             <Route path="/reset" element={<ResetPass />} />
    //             <Route path="/otp" element={<Otp />} />
    //             <Route path="/confirm" element={<ConfirmPass />} />
    //             <Route path="/edit-worker/:id" element={<EditWorker />} />
    //         </Routes>
    //     </Router>
    // );
}

export default App;
