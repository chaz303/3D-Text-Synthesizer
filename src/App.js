import "aframe";
import "aframe-particle-system-component";
import "aframe-text-geometry-component";
import "aframe-effects";
import { Entity, Scene } from "aframe-react";
import React from "react";
import "./index.css";
//import ReactDOM from "react-dom";

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Zexty Ext",
      cameraZoffset: -10,
      textHueBeg: 200,
      textHueEnd: 200,
      textSatBeg: 100,
      textSatEnd: 100,
      textLumBeg: 70,
      textLumEnd: 70,
      textBevelBeg: 0,
      textBevelEnd: 0,
      textRotX: 0,
      textRotY: 0,
      textRotZ: 0
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  updateTextHueBeg(evt) {
    this.setState({
      textHueBeg: evt.target.value
    });
  }
  updateTextHueEnd(evt) {
    this.setState({
      textHueEnd: evt.target.value
    });
  }
  updateTextSatBeg(evt) {
    this.setState({
      textSatBeg: evt.target.value
    });
  }
  updateTextSatEnd(evt) {
    this.setState({
      textSatEnd: evt.target.value
    });
  }
  updateTextLumBeg(evt) {
    this.setState({
      textLumBeg: evt.target.value
    });
  }
  updateTextLumEnd(evt) {
    this.setState({
      textLumEnd: evt.target.value
    });
  }
  updateTextRotX(evt) {
    this.setState({
      textRotX: evt.target.value
    });
  }
  updateTextRotY(evt) {
    this.setState({
      textRotY: evt.target.value
    });
  }
  updateTextRotZ(evt) {
    this.setState({
      textRotZ: evt.target.value
    });
  }
  updateTextBevelBeg(evt) {
    this.setState({
      textBevelBeg: evt.target.value
    });
  }
  updateTextBevelEnd(evt) {
    this.setState({
      textBevelEnd: evt.target.value
    });
  }
  render() {
    //console.log(this.state.textBevel);
    return (
      <div>
        <div className="panel">
          <div className="panelElem">
            Text:
            <br />
            <input
              type="text"
              value={this.state.inputValue}
              onChange={evt => this.updateInputValue(evt)}
            />
          </div>
          <div className="panelElem">
            Hue:
            <br />
            <input
              type="range"
              min="1"
              max="360"
              className="slider"
              onChange={evt => this.updateTextHueBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="1"
              max="360"
              className="slider"
              onChange={evt => this.updateTextHueEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Saturation:
            <br />
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="bgSat"
              onChange={evt => this.updateTextSatBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="bgSat"
              onChange={evt => this.updateTextSatEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Luminance:
            <br />
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="bgLum"
              onChange={evt => this.updateTextLumBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="bgLum"
              onChange={evt => this.updateTextLumEnd(evt)}
            />
          </div>
          {/* <input
          type="range"
          min="-360"
          max="360"
          className="slider"
          id="txtRotX"
          onChange={evt => this.updateTextRotX(evt)}
        />
        <input
          type="range"
          min="-360"
          max="360"
          className="slider"
          id="txtRotY"
          onChange={evt => this.updateTextRotY(evt)}
        />
        <input
          type="range"
          min="-360"
          max="360"
          className="slider"
          id="txtRotZ"
          onChange={evt => this.updateTextRotZ(evt)}
        /> */}

          <div className="panelElem">
            Depth:
            <br />
            <input
              type="range"
              min="0"
              max="50"
              className="slider"
              id="txtBvl"
              onChange={evt => this.updateTextBevelBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="0"
              max="50"
              className="slider"
              id="txtBvl"
              onChange={evt => this.updateTextBevelEnd(evt)}
            />
          </div>
        </div>
        <div className="a-frame-scene-box">
          <Scene
            embedded
            background="color: black"
            effects="bloom, fxaa"
            bloom="radius: 0.4"
            fxaa
          >
            <a-assets>
              <a-asset-item
                id="optimerBoldFont"
                src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"
              />
            </a-assets>
            <Entity
              position={`-4 2 ${this.state.textBevelBeg * -1 - 4}`}
              rotation={`${this.state.textRotX} ${this.state.textRotY} ${
                this.state.textRotZ
              }`}
              text-geometry={`bevelEnabled:true;bevelSize:0.01;bevelThickness:${
                this.state.textBevelBeg
              };curveSegments:6;height:0.5;size:1.5;font: #optimerBoldFont;value:${
                this.state.inputValue
              }`}
              material={`color: hsla(${this.state.textHueBeg}, ${
                this.state.textSatBeg
              }%, ${
                this.state.textLumBeg
              }%) metalness:1.0;roughness:0.05;sphericalEnvMap:https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg"`}
            />
          </Scene>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
export default VRScene;
