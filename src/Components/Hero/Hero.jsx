import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import heroImage from "../assets/hero_image.png";
import heroImageBack from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import { circIn, easeIn, easeOut, motion, Tween } from "framer-motion";
const Hero = () => {
  const transition = { type: "easeIn", duration: 3 };
  const mobile = window.innerHeight <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          {/* transition div */}
          <motion.div
            initial={{ left: mobile ? "158px" : "238px" }}
            whileInView={{ left: "0.5rem" }}
            // whileHover={{ left: "100%" }}
            // whileTap={{ left: "100%" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          {/* End of it */}
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

      {/* right hand side div design */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heartRate"
          initial={{ right: "-1rem" }}
          whileInView={{ left: mobile?"1rem":"4rem" }}
          transition={{ ...transition, type: "tween" }}
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={heroImage} alt="" className="heroImage" />
        <motion.img
          src={heroImageBack}
          alt=""
          initial={{ right: "28rem" }}
          whileInView={{ right: "19rem" }}
          transition={{ ...transition, type: "tween" }}
          className="heroImageback"
        />

        {/* Calories */}
        <motion.div
          className="calories"
          initial={{ right: "38rem" }}
          whileInView={{ right: "25rem" }}
          transition={{ ...transition, type: "tween" }}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
