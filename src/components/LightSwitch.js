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
      lightBulbFill: ["#111", "#f1c40f"], // array of the two text options
      vector: [
        "M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2M14 13.58V16H13V11.41L14.71 9.71C15.1 9.32 15.1 8.68 14.71 8.29C14.32 7.9 13.68 7.9 13.29 8.29L12 9.59L10.71 8.29C10.32 7.9 9.68 7.9 9.29 8.29C8.9 8.68 8.9 9.32 9.29 9.71L11 11.41V16H10V13.58C8.23 12.81 7 11.05 7 9C7 6.24 9.24 4 12 4S17 6.24 17 9C17 11.05 15.77 12.81 14 13.58M9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20Z", // lightbulb off
        "M9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20M19 9C19 11.38 17.81 13.47 16 14.74V17C16 17.55 15.55 18 15 18H9C8.45 18 8 17.55 8 17V14.74C6.19 13.47 5 11.38 5 9C5 5.13 8.13 2 12 2S19 5.13 19 9M14.71 8.29C14.32 7.9 13.68 7.9 13.29 8.29L12 9.59L10.71 8.29C10.32 7.9 9.68 7.9 9.29 8.29C8.9 8.68 8.9 9.32 9.29 9.71L11 11.41V16H13V11.41L14.71 9.71C15.1 9.32 15.1 8.68 14.71 8.29Z", // lightbulb on
      ], // array of the two background options
      index: 1, // to be altered by set state, currently 0 wich means offOn[index] = "OFF" and backgroundColors[index] = "White"
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
        <div className="content">
          <div className="light-and-switch">
            <svg
              className="light-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill={this.state.lightBulbFill[this.state.index]}
                d={this.state.vector[this.state.index]}
              />
            </svg>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label
              htmlFor="checkbox"
              className="label"
              onClick={this.changeIndex}
            >
              <div className="switch" id="switch"></div>
            </label>
          </div>
        </div>
      </>
    );
  }
}