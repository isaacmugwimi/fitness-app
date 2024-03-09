import React from "react";
import "./Email.css";
const Email = () => {
  return (
    <div className="email" id="joinUs">
      <div className="email-left">
        <hr />
        <span>
          <span className="transparent-text">Ready to </span>
          <span>level up </span>
        </span>

        <span>
          your body <span className="transparent-text">with us?</span>
        </span>
      </div>
      <div className="email-right">

        <form action="" className="email-right-div">
            <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address here"
          />
          <button>Join Now</button></form>
        
      </div>
    </div>
  );
};

export default Email;
