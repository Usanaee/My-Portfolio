import React from "react";
import "./GradientButton.css";

function GradientButton({ btnText,msg}) {
  return (
    <div>
      <button className="GradientButton" onClick={msg}>
        {btnText}
      </button>
    </div>
  );
}

export default GradientButton;
