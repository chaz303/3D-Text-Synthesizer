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
      inputValue: "Zexty Ext"
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
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
        <h1>{this.state.inputValue}</h1>
        <div className="a-frame-scene-box">
          <Scene embedded background="color: red">
            <Entity
              scale="2 2 2"
              geometry="primitive: torusKnot"
              position="0 6 -10"
              material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
            >
              <a-animation
                easing="linear"
                attribute="rotation"
                dur="10000"
                to="0 0 360"
                repeat="indefinite"
              />
            </Entity>
            <Entity text="value: {this.state.inputValue}" size="100" />
          </Scene>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
export default VRScene;
