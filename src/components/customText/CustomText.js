import React from "react";
import { useState } from "react";
import "../customText/customText.css";
import PHOTO from "../../img/ye.jpeg";


function CustomText() {
const [input,setInput] = useState("");
const [show, setBool] = useState(false);

    function getInput(event) {
        setInput(event.target.value);
    }

    function showInput() {
        setBool(true);
    }

  return (
    <div className="main-container">
      <h1>FATHERHOLDMYNOTEPAD.COM</h1>
      <div className="pic-container">
        <div className="ye-main">
          <img src={PHOTO} alt="ye" />
        </div>
        <div className="text-box">
          <label for="message">Enter text:</label>
          <br />
          <input onChange = {getInput} type="text" id="message" name="message" />
          <button onClick= {showInput} >Submit</button>
          <br />
          <br />
          <button>Insert Picture</button>
        </div>
        <div className="present-text">
            <h3>{show ? input : null}</h3>
        </div>
      </div>
    </div>
  );
}

export default CustomText;
