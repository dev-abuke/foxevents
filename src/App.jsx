import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUSPage from "./pages/ContactUSPage";
import RegisterVendor from "./pages/RegisterVendor";
import NavBarBlack from "./components/navbar/NavBarBlack";
import SelectionPage from "./pages/SelectionPage";
import CommunityPage from "./pages/CommunityPage";
import BussinessPage from "./pages/BussinessPage";
import BookEventsPage from "./pages/BookEventsPage";

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      {path === "/" ? <NavBar /> : <NavBarBlack />}
      {/* {path === "/select" ? <NavBarBlack /> : <NavBar />} */}
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="about" Component={AboutUsPage} />
        <Route path="contact" Component={ContactUSPage} />
        <Route path="register" Component={RegisterVendor} />
        <Route path="select" Component={SelectionPage} />
        <Route path="select/community" Component={CommunityPage} />
        <Route path="select/bussiness" Component={BussinessPage} />
        <Route path="select/events" Component={BookEventsPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
