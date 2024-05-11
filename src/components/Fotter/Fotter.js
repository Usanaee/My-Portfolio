import React from "react";
import "./Fotter.css";
import fotter_logo from "../../media/footer_logo.svg";
import user_icon from "../../media/user_icon.svg";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GradientButton from "../GradientButton/GradientButton";

function Fotter() {
  return (
    <div id="fotter">
      <div className="fotter">
        <div className="fotterTop">
          <div className="fotterTopLeft">
            <img src={fotter_logo} alt="" />
            <p>
              I am a passionate web developer dedicated to creating engaging and
              user-friendly websites interface using JS Library.
            </p>
          </div>
          <div className="fotterTopRight">
            <div className="fotterEmail">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="subscrib_btn">
              <GradientButton btnText="Subscribe" />
            </div>
          </div>
        </div>
        <hr />
        <div className="fotterBottom">
          <div className="fotterBottomLeft">
            <p>&copy; 2024 Usama Naeem. All rights reserved.</p>
          </div>
          <div className="fotterBottomRight">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Contact Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
