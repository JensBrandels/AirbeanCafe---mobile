import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import NavPage from "./components/pages/NavPage";
import AboutPage from "./components/pages/AboutPage";
import MenuPage from "./components/pages/MenuPage";
import "./App.css";
import StatusPage from "./components/pages/StatusPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/navpage" element={<NavPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/statuspage" element={<StatusPage />} />
      </Routes>
    </Router>
  );
}

export default App;
