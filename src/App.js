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
      inputValue: "Chaz Wilson",
      vueIsIn: true,
      isPlaying: true,
      numberOfFrames: 90,
      frame: 0,
      textHueBeg: 50,
      textHueCur: 50,
      textHueEnd: 250,
      textSatBeg: 80,
      textSatCur: 80,
      textSatEnd: 100,
      textLumBeg: 55,
      textLumCur: 55,
      textLumEnd: 80,
      textHeightBeg: 0,
      textHeightCur: 0,
      textHeightEnd: 25,
      textAlignXBeg: -6,
      textAlignXCur: -6,
      textAlignXEnd: -6,
      textAlignYBeg: 6,
      textAlignYCur: 6,
      textAlignYEnd: -2,
      textAlignZBeg: 25,
      textAlignZCur: 25,
      textAlignZEnd: -23
    };
    this.updateAllValues = this.updateAllValues.bind(this);
    this.updateVueIsIn = this.updateVueIsIn.bind(this);
  }
  playFun() {
    if (this.state.frame < this.state.numberOfFrames) {
      this.setState({
        frame: this.state.frame + 1
      });
    } else {
      this.setState({
        frame: 0
      });
    }
    this.setState({
      textHueCur:
        Number(this.state.textHueBeg) -
        ((this.state.textHueBeg - this.state.textHueEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textSatCur:
        Number(this.state.textSatBeg) -
        ((this.state.textSatBeg - this.state.textSatEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textLumCur:
        Number(this.state.textLumBeg) -
        ((this.state.textLumBeg - this.state.textLumEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textHeightCur:
        Number(this.state.textHeightBeg) -
        ((this.state.textHeightBeg - this.state.textHeightEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textAlignXCur:
        Number(this.state.textAlignXBeg) -
        ((this.state.textAlignXBeg - this.state.textAlignXEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textAlignYCur:
        Number(this.state.textAlignYBeg) -
        ((this.state.textAlignYBeg - this.state.textAlignYEnd) /
          this.state.numberOfFrames) *
          this.state.frame,
      textAlignZCur:
        Number(this.state.textAlignZBeg) -
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
          textHeightCur: this.state.textHeightBeg,
          textAlignXCur: this.state.textAlignXBeg,
          textAlignYCur: this.state.textAlignYBeg,
          textAlignZCur: this.state.textAlignZBeg
        });
      } else {
        this.setState({
          textHueCur: this.state.textHueEnd,
          textSatCur: this.state.textSatEnd,
          textLumCur: this.state.textLumEnd,
          textHeightCur: this.state.textHeightEnd,
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
  updateTextHeightBeg(evt) {
    this.setState({
      textHeightBeg: evt.target.value
    });
  }
  updateTextHeightEnd(evt) {
    this.setState({
      textHeightEnd: evt.target.value
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
            <span className="readOut">
              <input
                type="text"
                value={this.state.textAlignXBeg}
                onChange={evt => this.updateTextAlignXBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textAlignXCur)}
              />
              :
              <input
                type="text"
                value={this.state.textAlignXEnd}
                onChange={evt => this.updateTextAlignXEnd(evt)}
              />
            </span>
            <br />
            <input
              type="range"
              min="-30"
              max="30"
              value={this.state.textAlignXBeg}
              className="slider"
              onChange={evt => this.updateTextAlignXBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="-30"
              max="30"
              value={this.state.textAlignXEnd}
              className="slider"
              onChange={evt => this.updateTextAlignXEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Vertical: <br />
            <span className="readOut">
              <input
                type="text"
                value={this.state.textAlignYBeg}
                onChange={evt => this.updateTextAlignYBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textAlignYCur)}
              />
              :
              <input
                type="text"
                value={this.state.textAlignYEnd}
                onChange={evt => this.updateTextAlignYEnd(evt)}
              />
            </span>
            <input
              type="range"
              min="-30"
              max="30"
              value={this.state.textAlignYBeg}
              className="slider"
              onChange={evt => this.updateTextAlignYBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="-30"
              max="30"
              value={this.state.textAlignYEnd}
              className="slider"
              onChange={evt => this.updateTextAlignYEnd(evt)}
            />
          </div>
          <div className="panelElem">
            Zoom:
            <br />
            <span className="readOut">
              <input
                type="text"
                value={this.state.textAlignZBeg}
                onChange={evt => this.updateTextAlignZBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textAlignZCur)}
              />
              :
              <input
                type="text"
                value={this.state.textAlignZEnd}
                onChange={evt => this.updateTextAlignZEnd(evt)}
              />
            </span>
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
            <span className="readOut">
              <input
                type="text"
                value={this.state.textHueBeg}
                onChange={evt => this.updateTextHueBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textHueCur)}
              />
              :
              <input
                type="text"
                value={this.state.textHueEnd}
                onChange={evt => this.updateTextHueEnd(evt)}
              />
            </span>
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
            <span className="readOut">
              <input
                type="text"
                value={this.state.textSatBeg}
                onChange={evt => this.updateTextSatBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textSatCur)}
              />
              :
              <input
                type="text"
                value={this.state.textSatEnd}
                onChange={evt => this.updateTextSatEnd(evt)}
              />
            </span>
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
            <span className="readOut">
              <input
                type="text"
                value={this.state.textLumBeg}
                onChange={evt => this.updateTextLumBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textLumCur)}
              />
              :
              <input
                type="text"
                value={this.state.textLumEnd}
                onChange={evt => this.updateTextLumEnd(evt)}
              />
            </span>
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
            <span className="readOut">
              <input
                type="text"
                value={this.state.textHeightBeg}
                onChange={evt => this.updateTextHeightBeg(evt)}
              />
              :
              <input
                type="text"
                readonly="readonly"
                user-select="none"
                value={Math.round(this.state.textHeightCur)}
              />
              :
              <input
                type="text"
                value={this.state.textHeightEnd}
                onChange={evt => this.updateTextHeightEnd(evt)}
              />
            </span>
            <br />
            <input
              type="range"
              min="0"
              max="30"
              value={this.state.textHeightBeg}
              className="slider"
              onChange={evt => this.updateTextHeightBeg(evt)}
            />
            <br />
            <input
              type="range"
              min="0"
              max="30"
              value={this.state.textHeightEnd}
              className="slider"
              onChange={evt => this.updateTextHeightEnd(evt)}
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
            <br />
            <br />
            Play/Stop:
            <br />
            <input
              type="checkbox"
              onChange={evt => this.updateIsPlaying(evt)}
              checked={this.state.isPlaying ? "checked" : null}
            />
          </div>
        </div>
        <div className="a-frame-scene-box">
          <Scene
            embedded
            background="color: black"
            effects="bloom, fxaa"
            bloom="radius: 0.1"
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
              } ${this.state.textHeightCur * -1 - this.state.textAlignZCur}`}
              text-geometry={`curveSegments:3;height:${
                this.state.textHeightCur
              };size:1.5;font: #optimerBoldFont;value:${this.state.inputValue}`}
              material={`color: hsla(${this.state.textHueCur}, ${
                this.state.textSatCur
              }%, ${
                this.state.textLumCur
              }%); metalness:0.0;roughness:0.25;sphericalEnvMap:https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg"`}
            />
          </Scene>
        </div>
        <div align="right" margin="2">
          by Chaz Wilson
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
export default VRScene;
