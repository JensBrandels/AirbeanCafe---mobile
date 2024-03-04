import Headerleft from "../../assets/headerleft.svg";
import MainLogo from "../../assets/mainLogo.png";
import Headerright from "../../assets/headerright.svg";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingPage-container">
      <img src={Headerleft} alt="" className="landingPage-leftIMG" />

      <img src={MainLogo} alt="" />

      <img src={Headerright} alt="" className="landingPage-rightIMG" />
    </div>
  );
};

export default LandingPage;
