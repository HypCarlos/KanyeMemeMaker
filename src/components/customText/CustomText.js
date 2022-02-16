import React from "react";
import "../customText/customText.css";
import PHOTO from "../../img/ye.jpeg";

function CustomText() {
  return (
    <div className="main-container">
      <h1>FATHERHOLDMYNOTEPAD.COM</h1>
      <div className="pic-container">
        <div className="ye-main">
          <img src={PHOTO} alt="ye" />
        </div>
        <div className="text-box">
        <label for="message">Enter text:</label>
        <br/>
        <input type="text" id= "message" name = "message" />
        <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CustomText;
