import React from "react";
import image from "../assets/background.jpg";
import "../style/style.css";

const Background = () => {
  return (
    <div>
      <div>
        <img id="back" src={image} alt="" />
      </div>
    </div>
  );
};

export default Background;
