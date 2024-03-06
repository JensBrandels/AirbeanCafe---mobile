import NavIcon from "../assets/NavIcon.png";
import { Link, useNavigate } from "react-router-dom";
import "./navPage.scss";

const NavPage = () => {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/");
  };

  return (
    <div className="NavPage-Container">
      <div className="NavPage-iconContainer">
        <img src={NavIcon} alt="" onClick={handleNavigation} />
      </div>
      <div>
        <ul className="NavigationContainer">
          <li>
            <Link to="/menupage" className="linkStyle">
              Meny
            </Link>
          </li>
          <hr className="lineWidth" />
          <li>
            <Link to="/aboutpage" className="linkStyle">
              Vårt Kaffe
            </Link>
          </li>
          <hr className="lineWidth" />
          <li>
            <Link to="/profile" className="linkStyle">
              Min Profil
            </Link>
          </li>
          <hr className="lineWidth" />
          <li>
            <Link to="/orderstatus" className="linkStyle">
              Orderstatus
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavPage;
