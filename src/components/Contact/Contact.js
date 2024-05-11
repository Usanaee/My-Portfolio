import React from "react";
import "./Contact.css";
import theme_pattern from "../../media/theme_pattern.svg";
import mail_icon from "../../media/mail_icon.svg";
import location_icon from "../../media/location_icon.svg";
import call_icon from "../../media/call_icon.svg";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GradientButton from "../GradientButton/GradientButton";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dabe6f24-6d6a-4f50-ace9-1d1dff260aea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Alert show by Sweet Alert
      // Swal.fire({
      //   title: "Successful!",
      //   icon: "success",
      //   text: "Your Information Submitted Successfully✨",

      // });

      // Alert show by Toaster
      toast.success("Your Information Submitted Successfully!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contactTittle">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contactSection">
        <div className="contact-left">
          <h1>
            Let's Talk Your
            <br />
            Work.
          </h1>
          <p>
            By opening up about your projects, goals, and aspirations, you
            invite others to offer support, guidance, or collaborate on shared
            interests.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Sahiwal District, Punjab,Pakistan</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+92 305 9699 158 | +92 319 6092 186</p>
            </div>
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>usanaee.1@gmail.com</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <lable>Your Name</lable>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <lable>Your Email</lable>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <lable>Your Message</lable>
          <textarea
            placeholder="Enter Your Message"
            rows="8"
            name="message"
          ></textarea>
          <GradientButton btnText="Submit" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
