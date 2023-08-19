import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/LandingPage";
import Portfolio from "../pages/Home/Portfolio/index";
import EditRecruiter from "../pages/Profile/EditRecruiter/index";
import Hire from "../pages/Home/Hire/index";
import Sort from "../pages/Home/Sort/index";
import Chat from "../pages/Chat/index";

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
      </Routes>
    </Router>
  );
}

export default App;
