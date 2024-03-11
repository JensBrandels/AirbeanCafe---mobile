import HeaderTop from "../assets/headertop.svg";
import BarIcon from "../assets/Bar-icon.png";
import BagIcon from "../assets/bag.svg";
import FooterImg from "../assets/footer.svg";
import { useCartStore } from "../store/CartStore.ts";
import { useState } from "react";
import "./menuPage.scss";
import NavPage from "./NavPage.tsx";

import Menu from "../components/menu/Menu.tsx";
import Cart from "../components/cart/Cart.tsx";

const MenuPage = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(true);
  };
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCartStore();

  return (
    <div className="Menu-Container">
      {isOpen && <div className="overlay"></div>}
      <div className="Menu-imgContainer">
        <img
          src={BarIcon}
          alt=""
          className="barImg"
          onClick={() => handleClick()}
        />
        <img src={HeaderTop} alt="" className="HeaderImg" />

        {totalItems > 0 && <p className="ColorChange">{totalItems}</p>}
        <div onClick={() => setIsOpen(!isOpen)} className="BagIcon-positioner">
          <img src={BagIcon} alt="" />
        </div>
      </div>
      <div>
        <h2 className="Menu-Title">Meny</h2>
      </div>
      <ul className="Menu-ListSpaces">
        <Menu />
      </ul>
      {isOpen && <Cart />}
      <div className="Menu-footerImg">
        <img src={FooterImg} alt="" />
      </div>
      {showNav && <NavPage closeNav={() => setShowNav(false)} />}
    </div>
  );
};

export default MenuPage;
