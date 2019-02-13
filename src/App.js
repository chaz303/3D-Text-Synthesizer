import "aframe";
import "aframe-particle-system-component";
import "aframe-text-geometry-component";
import "aframe-effects";
import { Entity, Scene } from "aframe-react";
import React from "react";
import "./index.css";
//import ReactDOM from "react-dom";

// if playing === false then current equals selected start or stop

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Zexty Ext",
      vueIsIn: true,
      isPlaying: true,
      numberOfFrames: 60,
      frame: 1,
      textHueBeg: 200,
      textHueCur: 200,
      textHueEnd: 60,
      textSatBeg: 80,
      textSatCur: 80,
      textSatEnd: 100,
      textLumBeg: 75,
      textLumCur: 75,
      textLumEnd: 75,
      textBevelBeg: 15,
      textBevelCur: 15,
      textBevelEnd: 15,
      textAlignXBeg: -4,
      textAlignXCur: -4,
      textAlignXEnd: -4,
      textAlignYBeg: 1,
      textAlignYCur: 1,
      textAlignYEnd: 1,
      textAlignZBeg: 6,
      textAlignZCur: 6,
      textAlignZEnd: 12
    };
    this.updateAllValues = this.updateAllValues.bind(this);
    this.updateVueIsIn = this.updateVueIsIn.bind(this);
  }
  playFun() {
    if (this.state.frame <= this.state.numberOfFrames) {
      this.setState({
        frame: this.state.frame + 1
      });
    } else {
      this.setState({
        frame: 1
      });
    }
    this.setState({
      textHueCur:
        Number(this.state.textHueBeg) +
        ((this.state.textHueBeg - this.state.textHueEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textSatCur:
        Number(this.state.textSatBeg) +
        ((this.state.textSatBeg - this.state.textSatEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textLumCur:
        Number(this.state.textLumBeg) +
        ((this.state.textLumBeg - this.state.textLumEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textBevelCur:
        Number(this.state.textBevelBeg) +
        ((this.state.textBevelBeg - this.state.textBevelEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textAlignXCur:
        Number(this.state.textAlignXBeg) +
        ((this.state.textAlignXBeg - this.state.textAlignXEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textAlignYCur:
        Number(this.state.textAlignYBeg) +
        ((this.state.textAlignYBeg - this.state.textAlignYEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textAlignZCur:
        Number(this.state.textAlignZBeg) +
        ((this.state.textAlignZBeg - this.state.textAlignZEnd) /
          this.state.numberOfFrames) *
          this.state.frame
    });
    console.log(this.state.textAlignZCur);
  }
  updateAllValues(evt) {
    if (this.state.isPlaying === true) {
      this.playFun();
    } else {
      if (this.state.vueIsIn === true) {
        this.setState({
          textHueCur: this.state.textHueBeg,
          textSatCur: this.state.textSatBeg,
          textLumCur: this.state.textLumBeg,
          textBevelCur: this.state.textBevelBeg,
          textAlignXCur: this.state.textAlignXBeg,
          textAlignYCur: this.state.textAlignYBeg,
          textAlignZCur: this.state.textAlignZBeg
        });
      } else {
        this.setState({
          textHueCur: this.state.textHueEnd,
          textSatCur: this.state.textSatEnd,
          textLumCur: this.state.textLumEnd,
          textBevelCur: this.state.textBevelEnd,
          textAlignXCur: this.state.textAlignXEnd,
          textAlignYCur: this.state.textAlignYEnd,
          textAlignZCur: this.state.textAlignZEnd
        });
      }
    }
  }
  updateVueIsIn(evt) {
    this.setState({
      vueIsIn: !this.state.vueIsIn
    });
    console.log(this.state.vueIsIn);
  }
  updateIsPlaying(evt) {
    this.setState({
      isPlaying: !this.state.isPlaying,
      frame: 1
    });
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
  updateTextAlignXBeg(evt) {
    this.setState({
      textAlignXBeg: evt.target.value
    });
  }
  updateTextAlignXEnd(evt) {
    this.setState({
      textAlignXEnd: evt.target.value
    });
  }
  updateTextAlignYBeg(evt) {
    this.setState({
      textAlignYBeg: evt.target.value
    });
  }
  updateTextAlignYEnd(evt) {
    this.setState({
      textAlignYEnd: evt.target.value
    });
  }
  updateTextAlignZBeg(evt) {
    this.setState({
      textAlignZBeg: evt.target.value * -1
    });
  }
  updateTextAlignZEnd(evt) {
    this.setState({
      textAlignZEnd: evt.target.value * -1
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
  componentDidMount() {
    setInterval(this.updateAllValues, 33);
  }
  render() {
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
            Horizontal:
            <br />
            <input
              type="range"
              min="-15"
              max="15"
              value={this.state.textAlignXBeg}
              className="slider"
              onChange={evt => this.updateTextAlignXBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="-15"
              max="15"
              value={this.state.textAlignXEnd}
              className="slider"
              onChange={evt => this.updateTextAlignXEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Vertical:
            <input
              type="range"
              min="-15"
              max="15"
              value={this.state.textAlignYBeg}
              className="slider"
              onChange={evt => this.updateTextAlignYBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="-15"
              max="15"
              value={this.state.textAlignYEnd}
              className="slider"
              onChange={evt => this.updateTextAlignYEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Zoom:
            <br />
            <input
              type="range"
              min="-110"
              max="50"
              value={this.state.textAlignZBeg * -1}
              className="slider"
              onChange={evt => this.updateTextAlignZBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="-110"
              max="50"
              value={this.state.textAlignZEnd * -1}
              className="slider"
              onChange={evt => this.updateTextAlignZEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Hue:
            <br />
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.textHueBeg}
              className="slider"
              onChange={evt => this.updateTextHueBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.textHueEnd}
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
              value={this.state.textSatBeg}
              className="slider"
              id="bgSat"
              onChange={evt => this.updateTextSatBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.textSatEnd}
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
              value={this.state.textLumBeg}
              className="slider"
              id="bgLum"
              onChange={evt => this.updateTextLumBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.textLumEnd}
              className="slider"
              id="bgLum"
              onChange={evt => this.updateTextLumEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Depth:
            <br />
            <input
              type="range"
              min="0"
              max="20"
              value={this.state.textBevelBeg}
              className="slider"
              onChange={evt => this.updateTextBevelBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="0"
              max="20"
              value={this.state.textBevelEnd}
              className="slider"
              onChange={evt => this.updateTextBevelEnd(evt)}
            />
          </div>
          <div className="panelElem">
            In/Out:
            <br />
            <input
              type="checkbox"
              onChange={evt => this.updateVueIsIn(evt)}
              checked={this.state.vueIsIn ? "checked" : null}
            />
          </div>
          <div className="panelElem">
            Play/Stop:
            <br />
            <input
              type="checkbox"
              onChange={evt => this.updateIsPlaying(evt)}
              checked={this.state.isPlaying ? "checked" : null}
            />
          </div>
          <div className="panelElem">
            by:
            <br /> Chaz Wilson
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
              position={`${this.state.textAlignXCur} ${
                this.state.textAlignYCur
              } ${this.state.textBevelCur * -1 - this.state.textAlignZCur}`}
              text-geometry={`bevelEnabled:true;bevelSize:0.01;bevelThickness:${
                this.state.textBevelCur
              };curveSegments:6;height:0.5;size:1.5;font: #optimerBoldFont;value:${
                this.state.inputValue
              }`}
              material={`color: hsla(${this.state.textHueCur}, ${
                this.state.textSatCur
              }%, ${
                this.state.textLumCur
              }%); metalness:0.0;roughness:0.05;sphericalEnvMap:https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg"`}
            />
          </Scene>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
export default VRScene;
