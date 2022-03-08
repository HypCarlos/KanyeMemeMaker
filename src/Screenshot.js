import React, { Component } from "react";
import html2canvas from "html2canvas";
import "../src/index.css";
import "../src/components/customImage/customImage.css"

import CustomImage from "./components/customImage/Customimage";

export default class ScreenCapture extends Component {
  ref = React.createRef();

  handleClickTakeScreenShot = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 700,
      cropHeigth: 780,
    };

    html2canvas(this.ref.current).then((canvas) => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "receipt.png";
      a.click();
    });
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
        <button 
          id="dl"
          className="button_slide slide_down"
          onClick={this.handleClickTakeScreenShot}
        >
          <img src="https://img.icons8.com/material-outlined/24/000000/download--v2.png" alt="dl"/>
          
        </button>
        
        <div id="#screenshot" ref={this.ref}>
          <CustomImage />
        </div>
      </div>
    );
  }
}
