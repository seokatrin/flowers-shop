import React from "react";
import logo from "../img/header/logo.svg";
import vk from "../img/socials/vk.svg";
import insta from "../img/socials/instagram.svg";
import twitter from "../img/socials/twitter.svg";
import whatsapp from "../img/socials/whatsapp.svg";
import '../styles/main.scss';

function Footer() {
  return (
    <footer>
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__logo">kasler <br/> flowers</div>
          <div className="footer__copy">
            © Copyright 2022. Доставка цветов в Екатеринбуге.
          </div>
        </div>
        <div className="footer__contacts">
          <span>контакты</span> 
          <span>+7(906)-900-80-70</span>
          <div className="footer__socials">
            <ul className="footer__links">
              <li>
                <img src={vk} alt="vk" />
              </li>
              <li>
                <img src={insta} alt="instagram" />
              </li>
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={whatsapp} alt="whatsapp" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
