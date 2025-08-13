import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import Home from "./pages/Home";
import Profile from "./components/Teacher/Profile";
import Expretise from "./pages/Expretise";
import SponsoredResearch from "./pages/SponsoredResearch";
import Consultancy from "./pages/Consultancy";
import Facilities from "./pages/Facilities";
import Patent from "./pages/Patent";
import Interdisciplinary from "./pages/Interdisciplinary";

import SideNavbar from "./components/sideNavbar/SideNavbar";
import Collaboration from "./pages/Collaboration";
import Workshops from "./pages/Workshops";
import Events from "./pages/Events";
// import Events from "./pages/Events"
function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teacher" element={<Profile />} />
          <Route path="/expertise" element={<Expretise />} />
          <Route path="/sponsoredresearch" element={<SponsoredResearch />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/patent" element={<Patent />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/interdisciplinary" element={<Interdisciplinary />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sidenavbar" element={<SideNavbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
