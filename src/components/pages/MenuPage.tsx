import HeaderTop from "../../assets/headertop.svg";
import BarIcon from "../../assets/Bar-icon.png";
import BagIcon from "../../assets/bag.svg";
import FooterImg from "../../assets/footer.svg";
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./menuPage.scss";

import Menu from "../menu/Menu.tsx";

const MenuPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/navpage");
  };

  return (
    <div className="Menu-Container">
      <div className="Menu-imgContainer">
        <img
          src={BarIcon}
          alt=""
          className="barImg"
          onClick={handleNavigation}
        />
        <img src={HeaderTop} alt="" className="HeaderImg" />

        <p className="ColorChange">7</p>
        <div className="BagIcon-positioner">
          <img src={BagIcon} alt="" />
        </div>
      </div>
      <div>
        <h2 className="Menu-Title">Meny</h2>
      </div>
      <ul>
        <Menu />
      </ul>
      <div className="Menu-footerImg">
        <img src={FooterImg} alt="" />
      </div>
    </div>
  );
};

export default MenuPage;
