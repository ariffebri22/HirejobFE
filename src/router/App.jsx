/* eslint-disable no-unused-vars */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/LandingPage';
import Portfolio from '../pages/Home/Portfolio/index';
import EditRecruiter from '../pages/Profile/EditRecruiter/index';
import Hire from '../pages/Home/Hire/index';
import Sort from '../pages/Home/Sort/index';
import Chat from '../pages/Chat/index';
import LoginReq from '../pages/Auth/Recruiter/Login';
import RegisterReq from '../pages/Auth/Recruiter/Register';
import LoginWork from '../pages/Auth/Workers/Login';
import RegisterWork from '../pages/Auth/Workers/Register';
import ResetPass from '../pages/Auth/Password/ResetPasswordEmail';
import Otp from '../pages/Auth/Password/ResetPasswordOTP';
import ConfirmPass from '../pages/Auth/Password/ResetConfirmPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/edit-recruiter" element={<EditRecruiter />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/sort" element={<Sort />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login-req" element={<LoginReq />} />
        <Route path="/register-req" element={<RegisterReq />} />
        <Route path="/login-work" element={<LoginWork />} />
        <Route path="/register-work" element={<RegisterWork />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/confirm" element={<ConfirmPass />} />
      </Routes>
    </Router>
  );
}

export default App;
