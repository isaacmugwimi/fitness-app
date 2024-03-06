import React from "react";
import Logo from "../assets/logo.png";
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
     <img src={Logo} alt="" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Programs</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </nav>
    </div>
  );
};
//Testing changes
export default Header;
