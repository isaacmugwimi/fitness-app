import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../assets/data/testimonialsData.js";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "tween", duration: 3 };

  const styles = {
    color: "var(--orange)",

    fontWeight: "600",
    letterSpacing: "0.2rem",
  };

  return (
    <div className="testimonials" id="testimonial">
      {/* code for the right of testimonials */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="transparent-text">What they</span>
        <span>say About us</span>
        <motion.span
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: 100, opacity: 0 }}
          // transition={{ ...transition, duration: 2 }}
          // key={selected}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <div style={{ fontSize: "1.2rem", fontWeight: "500" }} className="disturbed" >
          <span style={styles} className="disturbed1">{testimonialsData[selected].name}</span> -{" "}
          
          <span style={{ ...styles, color: "white" }} className="disturbed2">{testimonialsData[selected].status}</span>
        </div>

        {/* <div className="testimonialData-left">
          {testimonialsData.map((data, i) => {
            return (
              <div className="testimonialsDataDiv" key={i}>
                <img src={data.image} alt="" />
                <strong>{data.review}</strong>
                <div className="name-status-div">
                  <span>
                    {data.name}-{data.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      {/* code for the right of testimonials */}

      <div className="right-t">
        <motion.img className="gymImage"
          key={selected}
          src={testimonialsData[selected].image}
          alt=""
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 1 }}
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((pevstate) => pevstate + 1)
            }
            src={rightArrow}
            alt=""
          />
        </div>
        <motion.div
          className="imgBackground1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          className="imgBackground2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
      </div>
    </div>

  );
};

export default Testimonials;
