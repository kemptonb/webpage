import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {["Start", "About", "Work", "Skills", "Testimonials", "Contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.55, ease: "easeIn" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {[
                "Start",
                "About",
                "Work",
                "Skills",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                    
                  <a href={`#${item.toLowerCase()}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
