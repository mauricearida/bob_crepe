import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { BsTelephoneOutbound } from "react-icons/bs";

const FindUs = () => (
  <div className="app__findus app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Vango Sky Bar & Lounge 116 S. 18th St. Philadelphia, PA 19103</p>
        <p style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }} className="p__opensans">
          <BsTelephoneOutbound />
          <a href="tel:+12155681020">215-568-1020</a>
        </p>

        <p className="p__cormorant" style={{ color: "#DCCA87", margin: "2rem 0" }}>
          Opening Hours
        </p>
        <p className="p__opensans">Wed - Mon: 06:00 pm - 02:00 am</p>
        <p className="p__opensans">(closed on Tuesday)</p>
      </div>
      {/* <button type="button" className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
