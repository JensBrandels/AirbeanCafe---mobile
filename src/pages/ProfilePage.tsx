import BarIcon from "../assets/Bar-icon.png";
import HeaderTop from "../assets/headertop.svg";
import PersonLogo from "../assets/PersonLogo.svg";
import { useState } from "react";

import "./profilePage.scss";
import NavPage from "./NavPage";

const ProfilePage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleClick = () => {
    setIsOverlayVisible(true);
  };
  return (
    <div className="profilePage-container">
      <header>
        <img
          className="profile-navigationBar"
          src={BarIcon}
          onClick={() => handleClick()}
        />
        <img src={HeaderTop} />
      </header>

      <div className="profile-infoContainer">
        <div className="profile-imgTitle">
          <img src={PersonLogo} alt="" />
        </div>

        <div className="profile-titlestyling">
          <h3>Coffe KaffeHaturrr</h3>
          <p>coffe.kaffehaturrr@zoocom.se</p>
        </div>

        <div className="profile-flexContainer">
          <h4>Orderhistorik</h4>
          <section className="profile-historikContainer">
            <article className="profile-textFlex">
              <p className="profile-fatText">#AB1123282323Z</p>
              <p className="profile-text">total ordersumma</p>
            </article>
            <article>
              <p className="profile-textBig">20/03/06</p>
              <p className="profile-text">443kr</p>
            </article>
          </section>

          <hr className="Hr-thin" />
          <section className="profile-historikContainer">
            <article className="profile-textFlex">
              <p className="profile-fatText">#AB1123282323Z</p>
              <p className="profile-text">total ordersumma</p>
            </article>
            <article>
              <p className="profile-textBig">20/03/06</p>
              <p className="profile-text">443kr</p>
            </article>
          </section>
          <hr className="Hr-thin" />
          <section className="profile-historikContainer">
            <article className="profile-textFlex">
              <p className="profile-fatText">#AB1123282323Z</p>
              <p className="profile-text">total ordersumma</p>
            </article>
            <article>
              <p className="profile-textBig">20/03/06</p>
              <p className="profile-text">443kr</p>
            </article>
          </section>
          <hr className="Hr-FAT" />
        </div>
        <div className="profile-totalSpent">
          <p className="profile-fatText">Totalt spenderat</p>
          <p className="profile-fatText">1669 kr</p>
        </div>
      </div>
      {isOverlayVisible && (
        <NavPage closeNav={() => setIsOverlayVisible(false)} />
      )}
    </div>
  );
};

export default ProfilePage;
