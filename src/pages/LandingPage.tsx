import Headerleft from "../assets/headerleft.svg";
import MainLogo from "../assets/mainLogo.png";
import Headerright from "../assets/headerright.svg";
import "./landingPage.scss";
import NavPage from "./NavPage";
import { useState } from "react";
useState;

const LandingPage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleClick = () => {
    setIsOverlayVisible(true);
  };

  return (
    <>
      <div className="landingPage-container" onClick={() => handleClick()}>
        <img src={Headerleft} alt="" className="landingPage-leftIMG" />

        <img src={MainLogo} alt="" />

        <img src={Headerright} alt="" className="landingPage-rightIMG" />
      </div>
      {isOverlayVisible && (
        <NavPage closeNav={() => setIsOverlayVisible(false)} />
      )}
    </>
  );
};

export default LandingPage;
