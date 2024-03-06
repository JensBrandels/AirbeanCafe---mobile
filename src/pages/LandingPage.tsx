import Headerleft from "../assets/headerleft.svg";
import MainLogo from "../assets/mainLogo.png";
import Headerright from "../assets/headerright.svg";
import { useNavigate } from "react-router-dom";
import "./landingPage.scss";

const LandingPage = () => {
  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/navpage");
  };

  return (
    <div className="landingPage-container" onClick={handleNavigation}>
      <img src={Headerleft} alt="" className="landingPage-leftIMG" />

      <img src={MainLogo} alt="" />

      <img src={Headerright} alt="" className="landingPage-rightIMG" />
    </div>
  );
};

export default LandingPage;
