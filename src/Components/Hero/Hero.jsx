import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
      </div>
      {/* hero heading */}
      <div className="hero-text">
        <div><span>Shape</span><span> Your</span></div>
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
