import React from "react";
import './Hero.css';
import profileImg from  '../../media/img.png';
import Swal from "sweetalert2";
import GradientButton from "../GradientButton/GradientButton";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent";


function Hero() {

   let show = () =>{
    Swal.fire({
        title: "Not Available",
        icon: "info",
        text: "CV is not available.",

      });
   }
      
  return (
    <div id="hero">
        <div className="hero-content">
          <img src={profileImg} alt="" />
            <h1><span>Muhammad Usama Naeem</span><br/>Fronted Developer.</h1>
            <p>
              I am a passionate web developer dedicated to creating engaging and
              user-friendly websites interface using JS Library.
            </p>
            <div className="hero-buttons">
              <GradientButton btnText="Download CV" msg={show}/>
              <ButtonTransparent btnText="Contact" />
            </div>
        </div>
    </div>
  );
}

export default Hero;
