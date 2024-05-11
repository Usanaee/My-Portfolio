import React from "react";
import "./Service.css";
import theme_pattern from "../../media/theme_pattern.svg";
import serviceData from "../../media/services_data";
import arrowImg from "../../media/arrow_icon.svg";


function Service() {
  return (
    <div className="services" id="service">
        <div className="serviceTittle">
          <h1>My Services</h1>
          <img src={theme_pattern} alt="" />
        </div>
      <div className="service-card">
        {serviceData.map((service,index)=>{
            return <div key={index} className="servcieFormat">
                <h3>{service.s_no}</h3> 
                <h2>{service.s_name}</h2> 
                <p>{service.s_desc}</p> 
                <div className="readMore">
                    <p>Read More</p>
                    <img src={arrowImg} alt="" />
                    
                </div>
            </div>
        })}
        </div>
      </div>
  );
}

export default Service;
