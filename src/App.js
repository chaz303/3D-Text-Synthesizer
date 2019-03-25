import "aframe";
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
      inputValue: "Move The Sliders",
      isPlaying: true,
      playbackMode: "forward",
      textHeightBeg: 0,
      textHeightEnd: 5,
      frameBeg: 0,
      frameCur: 0,
      frameEnd: 0,
      frameLength: 180,
      // Red Control
      textRDef: 128,
      textRBeg: 84,
      textREnd: 244,
      // Green Control
      textGDef: 128,
      textGBeg: 199,
      textGEnd: 130,
      // Blue Channel
      textBDef: 128,
      textBBeg: 255,
      textBEnd: 255,
      // Horizontal
      textAlignXDef: 0,
      textAlignXBeg: -9,
      textAlignXEnd: -9,
      // Vertical
      textAlignYDef: 0,
      textAlignYBeg: 2,
      textAlignYEnd: 0,
      // Distance
      textAlignZDef: 0,
      textAlignZBeg: 20,
      textAlignZEnd: -12,
      // Pitch
      textRotXDef: 0,
      textRotXBeg: 0,
      textRotXEnd: 0,
      // Yaw
      textRotYDef: 0,
      textRotYBeg: 3,
      textRotYEnd: 0,
      // Roll
      textRotZDef: 0,
      textRotZBeg: -4,
      textRotZEnd: 0,
      //fontURL: "https://fonts.googleapis.com/css?family=Poppins"
    };
    this.updatePlaybackState = this.updatePlaybackState.bind(this);
  }
  playForwardFun() {
    if (this.state.frameCur < this.state.frameLength + this.state.frameEnd) {
      this.setState({
        frameCur: this.state.frameCur + 1,
      });
    } else {
      this.setState({
        frameCur: this.state.frameBeg,
      });
    }
    this.drawFrame();
  }

  playBackwardFun() {
    if (this.state.frameCur > 0 + this.state.frameBeg) {
      this.setState({
        frameCur: this.state.frameCur - 1,
      });
    } else {
      this.setState({
        frameCur: this.state.frameLength + this.state.frameEnd,
      });
    }
    this.drawFrame();
  }

  drawFrame() {
    this.setState({
      textRCur:
        Number(this.state.textRBeg) -
        ((this.state.textRBeg - this.state.textREnd) / this.state.frameLength) *
          this.state.frameCur,
      textGCur:
        Number(this.state.textGBeg) -
        ((this.state.textGBeg - this.state.textGEnd) / this.state.frameLength) *
          this.state.frameCur,
      textBCur:
        Number(this.state.textBBeg) -
        ((this.state.textBBeg - this.state.textBEnd) / this.state.frameLength) *
          this.state.frameCur,
      textHeightCur:
        Number(this.state.textHeightBeg) -
        ((this.state.textHeightBeg - this.state.textHeightEnd) /
          this.state.frameLength) *
          this.state.frameCur,
      textAlignXCur:
        Number(this.state.textAlignXBeg) -
        ((this.state.textAlignXBeg - this.state.textAlignXEnd) /
          this.state.frameLength) *
          this.state.frameCur,
      textAlignYCur:
        Number(this.state.textAlignYBeg) -
        ((this.state.textAlignYBeg - this.state.textAlignYEnd) /
          this.state.frameLength) *
          this.state.frameCur,
      textAlignZCur:
        Number(this.state.textAlignZBeg) -
        ((this.state.textAlignZBeg - this.state.textAlignZEnd) /
          this.state.frameLength) *
          this.state.frameCur,
      textRotXCur:
        Number(this.state.textRotXBeg) -
        ((this.state.textRotXBeg - this.state.textRotXEnd) /
          this.state.frameLength) *
          this.state.frameCur,
      textRotYCur:
        Number(this.state.textRotYBeg) -
        ((this.state.textRotYBeg - this.state.textRotYEnd) /
          this.state.frameLength) *
          this.state.frameCur,
      textRotZCur:
        Number(this.state.textRotZBeg) -
        ((this.state.textRotZBeg - this.state.textRotZEnd) /
          this.state.frameLength) *
          this.state.frameCur,
    });
  }

  updatePlaybackState(evt) {
    if (
      this.state.isPlaying === true &&
      this.state.playbackMode === "forward"
    ) {
      this.playForwardFun();
    }
    if (
      this.state.isPlaying === true &&
      this.state.playbackMode === "backward"
    ) {
      this.playBackwardFun();
    } else {
      this.drawFrame();
    }
  }
  updateFrameBeg(evt) {
    this.setState({
      frameBeg: Number(evt.target.value),
    });
  }
  updateFrameEnd(evt) {
    this.setState({
      frameEnd: Number(evt.target.value),
    });
  }
  updateFrameLength(evt) {
    this.setState({
      frameLength: Number(evt.target.value),
    });
  }
  updateIsPlaying(evt) {
    this.setState({
      isPlaying: !this.state.isPlaying,
      //frameCur: this.state.frameBeg
    });
  }
  updatePlaybackMode(evt) {
    this.setState({
      playbackMode: evt.target.value,
    });
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }
  updateTextRBeg(evt) {
    this.setState({
      textRBeg: Number(evt.target.value),
    });
  }
  updateTextREnd(evt) {
    this.setState({
      textREnd: Number(evt.target.value),
    });
  }
  updateTextGBeg(evt) {
    this.setState({
      textGBeg: Number(evt.target.value),
    });
  }
  updateTextGEnd(evt) {
    this.setState({
      textGEnd: Number(evt.target.value),
    });
  }
  updateTextBBeg(evt) {
    this.setState({
      textBBeg: Number(evt.target.value),
    });
  }
  updateTextBEnd(evt) {
    this.setState({
      textBEnd: Number(evt.target.value),
    });
  }
  updateTextAlignXBeg(evt) {
    this.setState({
      textAlignXBeg: evt.target.value,
    });
  }
  updateTextAlignXEnd(evt) {
    this.setState({
      textAlignXEnd: evt.target.value,
    });
  }
  updateTextAlignYBeg(evt) {
    this.setState({
      textAlignYBeg: evt.target.value,
    });
  }
  updateTextAlignYEnd(evt) {
    this.setState({
      textAlignYEnd: evt.target.value,
    });
  }
  updateTextAlignZBeg(evt) {
    this.setState({
      textAlignZBeg: evt.target.value * -1,
    });
  }
  updateTextAlignZEnd(evt) {
    this.setState({
      textAlignZEnd: evt.target.value * -1,
    });
  }
  updateTextRotXBeg(evt) {
    this.setState({
      textRotXBeg: evt.target.value,
    });
  }
  updateTextRotXEnd(evt) {
    this.setState({
      textRotXEnd: evt.target.value,
    });
  }
  updateTextRotYBeg(evt) {
    this.setState({
      textRotYBeg: evt.target.value,
    });
  }
  updateTextRotYEnd(evt) {
    this.setState({
      textRotYEnd: evt.target.value,
    });
  }
  updateTextRotZBeg(evt) {
    this.setState({
      textRotZBeg: evt.target.value,
    });
  }
  updateTextRotZEnd(evt) {
    this.setState({
      textRotZEnd: evt.target.value,
    });
  }
  updateTextHeightBeg(evt) {
    this.setState({
      textHeightBeg: Number(evt.target.value),
    });
  }
  updateTextHeightEnd(evt) {
    this.setState({
      textHeightEnd: Number(evt.target.value),
    });
  }
  componentDidMount() {
    setInterval(this.updatePlaybackState, 33);
  }
  render() {
    return (
      <div>
        <div className="panel">
          <div className="subPanel">
            <div className="panelElem">
              Text:
              <br />
              <input
                type="text"
                value={this.state.inputValue}
                onChange={(evt) => this.updateInputValue(evt)}
              />
            </div>
            {/* <div className="panelElem">
              <strike>Font:</strike>
              <br />
            </div> */}
            <div className="panelElem">
              Depth:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textHeightBeg}
                  onChange={(evt) => this.updateTextHeightBeg(evt)}
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
                  onChange={(evt) => this.updateTextHeightEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="0"
                max="30"
                value={this.state.textHeightBeg}
                className="slider"
                onChange={(evt) => this.updateTextHeightBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="0"
                max="30"
                value={this.state.textHeightEnd}
                className="slider"
                onChange={(evt) => this.updateTextHeightEnd(evt)}
              />
            </div>
          </div>
          <div className="subPanel">
            <div className="panelElem">
              Horizontal:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textAlignXBeg}
                  onChange={(evt) => this.updateTextAlignXBeg(evt)}
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
                  onChange={(evt) => this.updateTextAlignXEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="-60"
                max="60"
                value={this.state.textAlignXBeg}
                className="slider"
                onChange={(evt) => this.updateTextAlignXBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="-60"
                max="60"
                value={this.state.textAlignXEnd}
                className="slider"
                onChange={(evt) => this.updateTextAlignXEnd(evt)}
              />
            </div>
            <div className="panelElem">
              Vertical: <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textAlignYBeg}
                  onChange={(evt) => this.updateTextAlignYBeg(evt)}
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
                  onChange={(evt) => this.updateTextAlignYEnd(evt)}
                />
              </span>
              <input
                type="range"
                min="-60"
                max="60"
                value={this.state.textAlignYBeg}
                className="slider"
                onChange={(evt) => this.updateTextAlignYBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="-60"
                max="60"
                value={this.state.textAlignYEnd}
                className="slider"
                onChange={(evt) => this.updateTextAlignYEnd(evt)}
              />
            </div>
            <div className="panelElem">
              Distance: <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textAlignZBeg}
                  onChange={(evt) => this.updateTextAlignZBeg(evt)}
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
                  onChange={(evt) => this.updateTextAlignZEnd(evt)}
                />
              </span>
              <input
                type="range"
                min="-30"
                max="30"
                value={this.state.textAlignZBeg * -1}
                className="slider"
                onChange={(evt) => this.updateTextAlignZBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="-30"
                max="30"
                value={this.state.textAlignZEnd * -1}
                className="slider"
                onChange={(evt) => this.updateTextAlignZEnd(evt)}
              />
            </div>
          </div>
          <div className="subPanel">
            <div className="panelElem">
              Pitch:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textRotXBeg}
                  onChange={(evt) => this.updateTextRotXBeg(evt)}
                />
                :
                <input
                  type="text"
                  readonly="readonly"
                  user-select="none"
                  value={Math.round(this.state.textRotXCur)}
                />
                :
                <input
                  type="text"
                  value={this.state.textRotXEnd}
                  onChange={(evt) => this.updateTextRotXEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="-360"
                max="360"
                value={this.state.textRotXBeg}
                className="slider"
                onChange={(evt) => this.updateTextRotXBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="-360"
                max="360"
                value={this.state.textRotXEnd}
                className="slider"
                onChange={(evt) => this.updateTextRotXEnd(evt)}
              />
            </div>
            <div className="panelElem">
              Yaw: <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textRotYBeg}
                  onChange={(evt) => this.updateTextRotYBeg(evt)}
                />
                :
                <input
                  type="text"
                  readonly="readonly"
                  user-select="none"
                  value={Math.round(this.state.textRotYCur)}
                />
                :
                <input
                  type="text"
                  value={this.state.textRotYEnd}
                  onChange={(evt) => this.updateTextRotYEnd(evt)}
                />
              </span>
              <input
                type="range"
                min="-360"
                max="360"
                value={this.state.textRotYBeg}
                className="slider"
                onChange={(evt) => this.updateTextRotYBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="-360"
                max="360"
                value={this.state.textRotYEnd}
                className="slider"
                onChange={(evt) => this.updateTextRotYEnd(evt)}
              />
            </div>
            <div className="panelElem">
              Roll:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textRotZBeg}
                  onChange={(evt) => this.updateTextRotZBeg(evt)}
                />
                :
                <input
                  type="text"
                  readonly="readonly"
                  user-select="none"
                  value={Math.round(this.state.textRotZCur)}
                />
                :
                <input
                  type="text"
                  value={this.state.textRotZEnd}
                  onChange={(evt) => this.updateTextRotZEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="-360"
                max="360"
                value={this.state.textRotZBeg}
                className="slider"
                onChange={(evt) => this.updateTextRotZBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="-360"
                max="360"
                value={this.state.textRotZEnd}
                className="slider"
                onChange={(evt) => this.updateTextRotZEnd(evt)}
              />
            </div>
          </div>
          <div className="subPanel">
            <div className="panelElem">
              Red:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textRBeg}
                  onChange={(evt) => this.updateTextRBeg(evt)}
                />
                :
                <input
                  type="text"
                  readonly="readonly"
                  user-select="none"
                  value={Math.round(this.state.textRCur)}
                />
                :
                <input
                  type="text"
                  value={this.state.textREnd}
                  onChange={(evt) => this.updateTextREnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.textRBeg}
                className="slider"
                onChange={(evt) => this.updateTextRBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.textREnd}
                className="slider"
                onChange={(evt) => this.updateTextREnd(evt)}
              />
            </div>
            <div className="panelElem">
              Green:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textGBeg}
                  onChange={(evt) => this.updateTextGBeg(evt)}
                />
                :
                <input
                  type="text"
                  readonly="readonly"
                  user-select="none"
                  value={Math.round(this.state.textGCur)}
                />
                :
                <input
                  type="text"
                  value={this.state.textGEnd}
                  onChange={(evt) => this.updateTextGEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.textGBeg}
                className="slider"
                id="bgSat"
                onChange={(evt) => this.updateTextGBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.textGEnd}
                className="slider"
                id="bgSat"
                onChange={(evt) => this.updateTextGEnd(evt)}
              />
            </div>
            <div className="panelElem">
              Blue:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.textBBeg}
                  onChange={(evt) => this.updateTextBBeg(evt)}
                />
                :
                <input
                  type="text"
                  readonly="readonly"
                  user-select="none"
                  value={Math.round(this.state.textBCur)}
                />
                :
                <input
                  type="text"
                  value={this.state.textBEnd}
                  onChange={(evt) => this.updateTextBEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.textBBeg}
                className="slider"
                id="bgLum"
                onChange={(evt) => this.updateTextBBeg(evt)}
              />
              <br />
              <input
                type="range"
                min="0"
                max="255"
                value={this.state.textBEnd}
                className="slider"
                id="bgLum"
                onChange={(evt) => this.updateTextBEnd(evt)}
              />
            </div>
          </div>
          <div className="subPanel">
            <div className="panelElem">
              Playback Range:
              <br />
              <span className="readOut">
                <input type="text" value={this.state.frameBeg} />
                :
                <input type="text" value={this.state.frameCur} />
                :
                <input
                  type="text"
                  value={this.state.frameEnd}
                  onChange={(evt) => this.updateFrameEnd(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="0"
                max={this.state.frameLength}
                value={this.state.frameBeg}
                className="slider"
                onChange={(evt) => this.updateFrameBeg(evt)}
              />
              <br />
              <input
                type="range"
                min={-1 * this.state.frameLength}
                max="0"
                value={this.state.frameEnd}
                className="slider"
                onChange={(evt) => this.updateFrameEnd(evt)}
              />
            </div>
            <div className="panelElem">
              Playback Length:
              <br />
              <span className="readOut">
                <input
                  type="text"
                  value={this.state.frameLength}
                  onChange={(evt) => this.updateFrameLength(evt)}
                />
              </span>
              <br />
              <input
                type="range"
                min="0"
                max="300"
                value={this.state.frameLength}
                className="slider"
                onChange={(evt) => this.updateFrameLength(evt)}
              />
            </div>
          </div>
          <div className="subPanel">
            <div className="panelElem">
              Playback Mode:
              <br />
              <div className="radioLeft">
                Forward:
                <input
                  type="radio"
                  name="playbackmode"
                  value="forward"
                  checked={
                    this.state.playbackMode === "forward" ? "checked" : null
                  }
                  onChange={(evt) => this.updatePlaybackMode(evt)}
                />
                Backward:
                <input
                  type="radio"
                  name="playbackmode"
                  value="backward"
                  checked={
                    this.state.playbackMode === "backward" ? "checked" : null
                  }
                  onChange={(evt) => this.updatePlaybackMode(evt)}
                />
              </div>
              {/* <input
                type="checkbox"
                onChange={evt => this.updateVueIsIn(evt)}
                checked={this.state.vueIsIn ? "checked" : null}
              /> */}
              <br />
              Play/Pause:
              <br />
              <input
                type="checkbox"
                onChange={(evt) => this.updateIsPlaying(evt)}
                checked={this.state.isPlaying ? "checked" : null}
              />
            </div>
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
                //src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/gentilis_bold.typeface.json"
                //src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/gentilis_regular.typeface.json"
                // src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"
                //src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json"
                src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"
                // src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_regular.typeface.json"
              />
            </a-assets>
            <Entity
              position={`${this.state.textAlignXCur} ${
                this.state.textAlignYCur
              } ${this.state.textHeightCur * -1 - this.state.textAlignZCur}`}
              rotation={`${this.state.textRotXCur} ${this.state.textRotYCur} ${
                this.state.textRotZCur
              }`}
              text-geometry={`curveSegments:3;height:${
                this.state.textHeightCur
              };size:1.5;font: #optimerBoldFont;value:${this.state.inputValue}`}
              material={`color: rgb(${Math.round(
                this.state.textRCur
              )}, ${Math.round(this.state.textGCur)}, ${Math.round(
                this.state.textBCur
              )}); metalness:0.0;roughness:0.25;sphericalEnvMap:https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg"`}
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

{
  /* </div>ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer')); */
}
export default VRScene;
