import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
import { BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.Logo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" alt="spoon__img" />

        <div className="app__footer-links_icons">
          <a href="https://wa.me/+96176378479">
            <FaWhatsapp />
          </a>

          <a href="https://www.instagram.com/crepffle_/">
            <FiInstagram />
          </a>
        </div>

        <a href="tel:+96176378479" className="phone">
          <p
            style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "1rem", marginTop: "1rem" }}
            className="p__opensans"
          >
            <BsTelephoneOutbound />
            <span>76 378 479</span>
          </p>
        </a>
      </div>

      {/* <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Wednesday-Monday:</p>
        <p className="p__opensans">06:00 pm - 02:00 am</p>
        <p className="p__opensans">(closed on Tuesday)</p>
      </div> */}
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Crepffle. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
