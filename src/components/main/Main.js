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
    // <div className="main-container">
    //   <h1 id="title">FATHERHOLDMYNOTEPAD.COM</h1>
    //   <div className="pic-container">
    //     <div className="ye-main">
    //       <img src={PHOTO} alt="ye" />
    //     </div>
    //     <div className="userPhoto">
    //       <img src={picture} alt="" />
    //     </div>
    //   </div>
    //   <div className="submissions">
    //     <input type="file" onChange={onChangePicture} />
    //     <br />
    //     <br /> <br />
    //     <br />
    //     <Link to={`/custom`}>
    //       <div className="button_slide slide_left">ADD CUSTOM TEXT</div>
    //       {/* <button  >Add Custom text</button> */}
    //     </Link>
    //     <br/><br/><br/><br/>
        
        
    //     <a href="https://github.com/HypCarlos">
    //     <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt= "Git"/>
    //     </a>
    //     <a href="https://twitter.com/OgPesci">
    //     <img src="https://img.icons8.com/material-rounded/24/000000/twitter.png" alt= "twitter"/>
    //     </a>
    //   </div>
    // </div>
  );
}

export default Main;
