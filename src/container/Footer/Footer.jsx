import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
import { BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.vango} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" />

        <div className="app__footer-links_icons">
          <FaTiktok />

          <a href="https://www.instagram.com/vangoloungeandskybar/">
            <FiInstagram />
          </a>
        </div>
        <p
          style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", textAlign: "center", marginTop: "1rem" }}
          className="p__opensans"
        >
          <BsTelephoneOutbound />
          <a href="tel:+12155681020">215-568-1020</a>
        </p>
      </div>

      {/* <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Wednesday-Monday:</p>
        <p className="p__opensans">06:00 pm - 02:00 am</p>
        <p className="p__opensans">(closed on Tuesday)</p>
      </div> */}
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Vango. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
