// - User story: I can navigate to localhost:3000 in the browser and see a React application. √
// - User story: The app has a header and a square on the screen with the word "off" in the middle. √
// - User story: When I click the square the word toggles from "off" to "on" and then back to "off" again. √
// - User story: When the lightbulb is "off" the background color of the box is white. When the lightbulb is "on" the background color of the box is yellow. √

// I am assuming the 'lightbulb' referred to in the 4th user story is the square and that it'll turn into a lightbulb later

import React, { Component } from "react";

export default class Square extends Component {
  // exports and creates class syntax
  constructor(props) {
    super(props);
    this.state = {
      offOn: ["OFF", "ON"], // array of the two text options
      backgroundColors: ["White", "Yellow"], // array of the two background options
      index: 0, // to be altered by set state, currently 0 wich means offOn[index] = "OFF" and backgroundColors[index] = "White"
    };
  }

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
    return (
      <>
        <button
          class="square"
          style={{
            background: this.state.backgroundColors[this.state.index], // sets background according to what index equals
          }}
          onClick={this.changeIndex} // calls the changeIndex function to change this.state.index
        >
          <p>{this.state.offOn[this.state.index]}</p>{" "}
          {/* displays the word in offOn array depending on the index*/}
        </button>
      </>
    );
  }
}
