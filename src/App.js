import "aframe";
import "aframe-particle-system-component";
import "aframe-text-geometry-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import "./index.css";
//import ReactDOM from "react-dom";

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Zexty Ext",
      textHue: 200,
      textSat: 100,
      textLum: 70,
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
  updateTextHue(evt) {
    this.setState({
      textHue: evt.target.value
    });
  }
  updateTextSat(evt) {
    this.setState({
      textSat: evt.target.value
    });
  }
  updateTextLum(evt) {
    this.setState({
      textLum: evt.target.value
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
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue(evt)}
        />
        <input
          type="range"
          min="1"
          max="360"
          className="slider"
          id="bgHue"
          onChange={evt => this.updateTextHue(evt)}
        />
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="bgSat"
          onChange={evt => this.updateTextSat(evt)}
        />
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="bgLum"
          onChange={evt => this.updateTextLum(evt)}
        />
        <input
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
        />
        <div className="a-frame-scene-box">
          <Scene embedded background="color: black">
            <a-assets>
              <a-asset-item
                id="optimerBoldFont"
                src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"
              />
            </a-assets>
            <Entity
              position="-8 2 -10"
              rotation={`${this.state.textRotX} ${this.state.textRotY} ${
                this.state.textRotZ
              }`}
              text-geometry={`bevelEnabled:true;bevelSize:0.05;bevelThickness:0.1;curveSegments:1;height:0.5;size:1.5;font: #optimerBoldFont;value:${
                this.state.inputValue
              }`}
              material={`color: hsla(${this.state.textHue}, ${
                this.state.textSat
              }%, ${
                this.state.textLum
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
