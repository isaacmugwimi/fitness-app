import React from "react";
import "./PlanData.css";
import tick from "../assets/tick.png";
import whiteTick from "../assets/whiteTick.png";
import { plansData } from "../assets/data/plansData.js";
import rarrowIcon from "../assets/rightArrow.png";
const PlanData = () => {
  return (
    <div className="planData">
      <div>
        <span className="transparent-text">ready to start </span>{" "}
        <span>your journey</span>{" "}
        <span className="transparent-text">now with us</span>
      </div>

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
              <img src={rarrowIcon} alt="" />
            </div>
            <button>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanData;
