import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../media/logo.svg";
import underline from "../../media/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import GradientButton from "../GradientButton/GradientButton";
import menu_open from "../../media/menu_open.svg";
import menu_close from "../../media/menu_close.svg";

function Navbar() {
  let [menu, setMenu] = useState("home");

  let menuRef = useRef();
  let openMenu = () =>{
    menuRef.current.style.right = "0"
  }
  let closeMenu = () =>{
    menuRef.current.style.right = "-350px"
  }
  return (
    <div className="bg">
      <div className="navbar">
        <nav class="navbar-content">
          <div class="navbar-logo">
            <img src={logo} alt="" />
            <div className="mob-toggle">
              <img src={menu_open} onClick={openMenu} alt="" className="nav-mobile-open" />
            </div>
          </div>
          <ul ref={menuRef} class="navbar-links">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mobile-close" />
            <li>
              <AnchorLink className="anchor-link" href="#hero">
                <p onClick={() => setMenu("home")}>Home</p>
              </AnchorLink>
              {menu === "home" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#about">
                <p onClick={() => setMenu("about")}>About</p>
              </AnchorLink>
              {menu === "about" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#service">
                <p onClick={() => setMenu("service")}>Services</p>
              </AnchorLink>
              {menu === "service" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#work">
                <p onClick={() => setMenu("work")}>Work</p>
              </AnchorLink>
              {menu === "work" ? <img src={underline} alt="" /> : <></>}
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <p onClick={() => setMenu("contact")}>Contact</p>
              </AnchorLink>
              {menu === "contact" ? <img src={underline} alt="" /> : <></>}
            </li>
          </ul>
          <div class="navbar-button">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <GradientButton btnText="Conect Me" />
            </AnchorLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
