import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import "./App.css";
import StatusPage from "./pages/StatusPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/statuspage" element={<StatusPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
