import React from "react";
import "../styles/main.scss";
import locationSVG from "../img/header/location.svg";
import logoSvg from "../img/header/logo.svg";
import Research from "./Research";
import ShopCartLink from "./ShopCartLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__contacts contacts">
        <div className="contacts__container _container">
          <div className="contacts__location">
            <img src={locationSVG} alt="location" />
            <p>Екатеринбург</p>
          </div>
          <p>+7(906)-900-80-70</p>
        </div>
      </div>
      <div className="header__cart _container">
          <Link to={'/'} className="header__logo">
            <img src={logoSvg} alt="logo" />
          </Link>
          <div className="header__actions">
            <Research />
            <ShopCartLink />
          </div>
      </div>
    </header>
  );
}

export default Header;
