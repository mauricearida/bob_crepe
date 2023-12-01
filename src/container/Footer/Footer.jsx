import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      {/* <a className="app__footer-links_contact" href={`tel:${2155681020}`}>
        <h1 className="app__footer-headtext">Contact Us</h1>
        {/* <p className="p__opensans">
          Vango Sky Bar & Lounge 116 S. 18th St. Philadelphia, PA 19103
        </p>  
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="p__opensans"
        >
          <FiPhone size={26} />
          &nbsp; 215-568-1020
        </p>
      </a> */}

      <div className="app__footer-links_logo">
        <img src={images.vango} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
        </div>
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
