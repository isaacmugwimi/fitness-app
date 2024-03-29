import React from "react";
import "./Reason.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
const Reasons = () => {
  return (
    <div className="Reason" id="reasons">
      <div className="left-r-side">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r-side">
        <span>some reasons</span>
        <div className="why-choose-us">
          <span className="transparent-text">why</span>
          <span>choose us?</span>
        </div>
        <div className="mainReasonsDiv">
          <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coach</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train faster and smarter than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>

<div className="partners">our partners</div>

        <div className="partnersDiv">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
