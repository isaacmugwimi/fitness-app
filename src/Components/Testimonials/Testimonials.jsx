import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../assets/data/testimonialsData.js";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const styles = {
    color: "var(--orange)",

    fontWeight: "600",
    letterSpacing: "0.2rem",
  };

  return (
    <div className="testimonials">
      {/* code for the right of testimonials */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="transparent-text">What they</span>
        <span>say About us</span>

        <span>{testimonialsData[selected].review}</span>

        <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
          <span style={styles}>{testimonialsData[selected].name}</span> -{" "}
          <span style={{ ...styles, color: "white" }}>
            {testimonialsData[selected].status}
          </span>
        </span>

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
        <img src={testimonialsData[selected].image} alt="" />
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
        <div className="imgBackground1"></div>
        <div className="imgBackground2"></div>
      </div>
    </div>
  );
};

export default Testimonials;
