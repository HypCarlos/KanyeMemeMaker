import { React, useState } from "react";
import PHOTO from "../../img/ye.png";
import OG from "../../img/ye.jpeg";

import "../main/main.css";
import { Link } from "react-router-dom";

function Main() {
  const [picture, setPicture] = useState(null);

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="main-container">
      <h1>FATHERHOLDMYNOTEPAD.COM</h1>
      <div className="pic-container">
        <div className="ye-main">
          <img src={PHOTO} alt="ye" />
          
        </div>
        <div className="userPhoto">
          <img src={picture && picture} alt="" />
        </div>
      </div>
      <div className="submissions">
        <input type="file" onChange={onChangePicture} />
        <br/><br/>
        <Link to= {`/custom`}>
        <button  >Add Custom text</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Main;
