import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import heroImage from "../assets/hero_image.png";
import heroImageBack from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="transparent-text">Shape</span>
            <span> Your</span>
          </div>

          <div>
            <span> Ideal Body</span>
          </div>

          <div className="span">
            In here we will help you to shape and build your ideal body and live
            up ou life to the fullest
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heartRate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={heroImage} alt="" className="heroImage" />
        <img src={heroImageBack} alt="" className="heroImageback" />

        {/* Calories */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
