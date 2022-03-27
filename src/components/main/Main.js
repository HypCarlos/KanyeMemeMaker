import { React } from "react";
import "../main/main.css";
import Screenshot from "../../Screenshot";

// import CustomImage from "../customImage/Customimage";




function Main() {
  // const [picture, setPicture] = useState(null);

  // const onChangePicture = (e) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]));
  // };



  return (

    <div className="main-container">
    <h1 id="title">FATHERHOLDMYNOTEPAD.COM</h1>
    <Screenshot/>
    </div>
  
  );
}

export default Main;
