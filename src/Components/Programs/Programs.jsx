import React, { useState } from "react";
import "./Programs.css";
import Item from "../Items/Item.jsx";
import { programsData } from "../assets/data/programData.js";

const Programs = () => {
  return (
    <div className="programs" id="Programs">
      <div className="header">
        <span className="transparent-text">Explore our</span>
        <span>programs</span>
        <span className="transparent-text">to shape you</span>
      </div>
      <div className="programData">
        {programsData.map((item, i) => (
          <div className="container"> <Item
            key={i}
            heading={item.heading}
            details={item.details}
            image={item.image}
          /></div>
         
          // <div className="category">{item.image}</div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
