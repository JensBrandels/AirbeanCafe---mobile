import NavIcon from "../../assets/NavIcon.png";

import "./navPage.scss";

const NavPage = () => {
  return (
    <div className="NavPage-Container">
      <div className="NavPage-iconContainer">
        <img src={NavIcon} alt="" />
      </div>
      <div>
        <ul className="NavigationContainer">
          <li>
            <p>Meny</p>
          </li>
          <hr className="lineWidth" />
          <li>
            <p>Vårt Kaffe</p>
          </li>
          <hr className="lineWidth" />
          <li>
            <p>Min Profil</p>
          </li>
          <hr className="lineWidth" />
          <li>
            <p>Orderstatus</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavPage;
