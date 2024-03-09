import React from "react";
import arrowIcon from "../assets/rightArrow.png";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      {props.image}
      <span>{props.heading}</span>
      <p>{props.details}</p>
      <div>
        <span>Join Now</span>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default Item;
