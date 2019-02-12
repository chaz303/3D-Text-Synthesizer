import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import "./index.css";
//import ReactDOM from "react-dom";

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Zexty Ext",
      backgroundHue: 360,
      backgroundSat: 94,
      backgroundLum: 70
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  updateBackgroundHue(evt) {
    this.setState({
      backgroundHue: evt.target.value
    });
  }
  updateBackgroundSat(evt) {
    this.setState({
      backgroundSat: evt.target.value
    });
  }
  updateBackgroundLum(evt) {
    this.setState({
      backgroundLum: evt.target.value
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
          class="slider"
          id="bgHue"
          onChange={evt => this.updateBackgroundHue(evt)}
        />
        <input
          type="range"
          min="1"
          max="100"
          class="slider"
          id="bgSat"
          onChange={evt => this.updateBackgroundSat(evt)}
        />
        <input
          type="range"
          min="1"
          max="100"
          class="slider"
          id="bgLum"
          onChange={evt => this.updateBackgroundLum(evt)}
        />
        <div className="a-frame-scene-box">
          <Scene
            embedded
            background={`color: hsla(${this.state.backgroundHue}, ${
              this.state.backgroundSat
            }%, ${this.state.backgroundLum}%)`}
          >
            <Entity
              position="0 2 -6"
              //text-geometry="bevelEnabled:true;bevelSize:0.1;bevelThickness:0.1;curveSegments:1;font:fonts/exo2Black.typeface.json;height:0.5;size:1.5;value:VAPORWAVE"
              material="color:pink;metalness:0.9;roughness:0.05;sphericalEnvMap:https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg"
              text={`width: 20; scale: 2.00; color: black; align: center; value: ${
                this.state.inputValue
              }`}
            />
          </Scene>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
export default VRScene;
