import NavIcon from "../assets/NavIcon.png";
import { Link } from "react-router-dom";
import "./navPage.scss";
import { createPortal } from "react-dom";

interface navPageProps {
  closeNav: () => void;
}

const NavPage = ({ closeNav }: navPageProps) => {
  let overlayRoot = document.getElementById("overlay-root");

  const handleClick = () => {
    closeNav();
  };

  return createPortal(
    <div className="NavPage-Container">
      <div className="NavPage-iconContainer">
        <img src={NavIcon} alt="" onClick={() => handleClick()} />
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
            <Link to="/profilepage" className="linkStyle">
              Min Profil
            </Link>
          </li>
          <hr className="lineWidth" />
          <li>
            <Link to="/statuspage" className="linkStyle">
              Orderstatus
            </Link>
          </li>
        </ul>
      </div>
    </div>,
    overlayRoot as Element
  );
};

export default NavPage;
