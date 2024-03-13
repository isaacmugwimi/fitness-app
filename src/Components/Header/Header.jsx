import React, { useState } from "react";
import Logo from "../assets/logo.png";
import bars from "../assets/bars.png";
import "./Header.css";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header-nav">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div className="hamburger-icons" onClick={() => setMenuOpened(true)}>
          {" "}
          <img src={bars} alt="" />
        </div>
      ) : (
        <nav className="noMobile">
          <ul>
            <li>
              <Link

              activeClass="home"
                to="home"
                smooth={true}
                spy={true}
                onClick={() => setMenuOpened(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpened(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="reasons"
                smooth={true}
                spy={true}
                onClick={() => setMenuOpened(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="plans"
                smooth={true}
                spy={true}
                onClick={() => setMenuOpened(false)}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                smooth={true}
                spy={true}
                onClick={() => setMenuOpened(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
//Testing changes
export default Header;
