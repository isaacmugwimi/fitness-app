import React from "react";
import "./PlanData.css";

import whiteTick from "../assets/whiteTick.png";
import { plansData } from "../assets/data/plansData.js";
import arrowIcon from "../assets/rightArrow.png";
const PlanData = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
   {/* <div className={`${mobile ? "blur-head" : ""}`}></div> */}
  return (
    <div className="planData" id="plans">
      <div >
       
        <span className="transparent-text ">ready to start </span>{" "}
        <span>your journey</span>{" "}
        <span className="transparent-text">now with us</span>
      </div>
      <div className="blur planData-blur1"></div>
      <div className="blur planData-blur2"></div>

      {/* PlanDiv card */}
      <div className="planDiv">
        {plansData.map((items, i) => (
          <div className="plansDataDiv" key={i}>
            {items.icon}
            <span className="itemsName"> {items.name}</span>
            <span className="itemPrice">${items.price}</span>
            <div className="features">
              {items.features.map((feature, i) => (
                <div className="featureContainer">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="moreBenefits">
              <span>See more benefits</span>
              <img src={arrowIcon} alt="" />
            </div>
            <button>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanData;
