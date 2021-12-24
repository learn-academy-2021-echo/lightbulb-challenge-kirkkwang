// - User story: Instead of seeing a box, I see a picture of a light switch in the "off" position. √
// - User story: When I click the light switch the image toggles from an image in the "off" position to an image in the "on" position and then back to "off" again. √
// - User story: When the light switch is "off" I see a white (unlit) lightbulb. When I turn the switch "on" I see a yellow (lit) lightbulb. √

import React, { Component } from "react";
import Bulb from "./Bulb";
import "./LightSwitch.css";

export default class LightSwitch extends Component {
  // exports and creates class syntax

  constructor(props) {
    super(props);
    this.state = {
      lightBulbFill: ["#111", "#f1c40f"], // array of fill color (white or yellow)
      randomColor: "#f1c40f", // this is the random color that is going to be generaterated later, by default it's the yellow color
      index: 0, // to be altered by set state, currently 0 wich means offOn[index] = switch in off position and vector[index] = unlit lightbulb
    };
    this.changeColor = this.changeColor.bind(this);
  }

  // creates hex string randomly to be set as the color
  changeColor = () => {
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.setState({
      randomColor: color,
    });
  };

  // sets the state of index to either 0 or 1
  changeIndex = () => {
    this.setState({
      index:
        this.state.index === 0 // if it already equals 0
          ? (this.state.index = 1) // then change it to 1
          : (this.state.index = 0), // otherwise change it to 0
    });
  };

  render() {
    // moved styling into variable so return is cleaner
    let lightSwitchStyle = {
      backgroundColor: `${this.state.randomColor}`,
      borderRadius: "10px",
      position: "relative",
      textAlign: "center",
      lineHeight: "44px",
      bottom: this.state.index === 0 ? "-22px" : "10px",
      right: "10px",
      height: "44px",
      width: "44px",
      fontSize: "7px",
      opacity: this.state.index === 0 ? "20%" : "100%",
      transition: "bottom .3s, opacity .3s",
    };

    return (
      <>
        <span className="light-and-switch-span">
          <Bulb
            index={this.state.index}
            changeColor={this.changeColor}
            randomColor={this.state.randomColor}
            lightBulbFill={this.state.lightBulbFill}
          />
          <div htmlFor="checkbox" className="light-switch-track">
            {/* used div instead of label to separate click functionality */}
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                class="checkbox"
                id="checkbox"
                defaultChecked={this.state.index}
                onChange={this.changeIndex}
              />
            </label>
            <div
              onClick={this.changeIndex}
              className="light-switch"
              style={lightSwitchStyle}
            ></div>
          </div>
        </span>
      </>
    );
  }
}
