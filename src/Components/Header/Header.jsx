import React, { useState } from "react";
import Logo from "../assets/logo.png";
import bars from "../assets/bars.png";
import "./Header.css";
const Header = () => {
  const mobile = window.innerWidth === 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header-nav">
      <img src={Logo} alt="" className="logo" />

      {menuOpened===false && mobile===true? (
      <div className="hamburger-icons"> <img src={bars} alt="" /></div>
     
      ):(
            <nav className="noMobile">
            <ul>
             <li>Home</li>
              <li>Programs</li>
              <li>Why Us</li>
              <li>Plans</li>
              <li>Testimonials</li>
            </ul>
          </nav>
      )}
  
    </div>
  );
};
//Testing changes
export default Header;
