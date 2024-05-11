import React from "react";
import pic from "../../media/aboutImg.jpeg";
import theme_pattern from "../../media/theme_pattern.svg";
import "./About.css";
import Achievment from "../Achievments/Achievment";

function About() {
  return (
    <div id="about">
      <section class="about-section">
        <div className="aboutTittle">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div class="about-content">
          <div class="about-image">
            <img src={pic} alt="" />
          </div>
          <div class="about-description">
            <div className="description">
              <p>
                <b>
                  I am a passionate front-end developer with a strong foundation
                  in HTML, CSS, and JavaScript.
                </b>
                I am proficient in building user-friendly and responsive web
                interfaces using modern technologies like React.JS and Tailwind
                CSS. I am a creative problem solver with a keen eye for detail
                and a commitment to writing clean and maintainable code.
              </p>
            </div>
            <div className="aboutSkills">
              <p>
                <b>
                  I am confident that I have the skills and experience to be a
                  valuable asset to your team.
                </b>
              </p>
              <div className="skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="skill">
                <p>React JS</p>
                <hr style={{ width: "30%" }} />
              </div>
              <div className="skill">
                <p>Wordpress</p>
                <hr style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievments">
          <Achievment number="1+" tagline="YEARS OF EXPERIENCE"/>
          <hr />
          <Achievment number="5+" tagline="COMPLETED PROJECTS"/>
          <hr />
          <Achievment number="2+" tagline="HAPPY CLIENTS"/>
         
        </div>
      </section>
    </div>
  );
}

export default About;
