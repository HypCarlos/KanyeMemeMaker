import React from "react";
import { useState } from "react";
import "../customText/customText.css";
import PHOTO from "../../img/ye.jpeg";
import { Link } from "react-router-dom";


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
          <h2 id = "enter">Enter text:</h2>
          <br />
          <input onChange = {getInput} type="text" id="message" name="message" />
          <br />
          <br />
          <div class="button_slide slide_right" onClick={showInput}>SUBMIT </div>
          {/* <button id = "submit-btn"onClick= {showInput} >Submit</button> */}
          <br />
          <br />
          <br />
          <br />
          <Link to= {`/`}>
          <div class="button_slide slide_left">UPLOAD IMAGE</div>
          {/* <button>Insert Picture</button> */}
          </Link>
        </div>
        <div className="present-text">
            <h3>{show ? input : null}</h3>
        </div>
      </div>
    </div>
  );
}

export default CustomText;
