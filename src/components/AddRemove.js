// - User story: I can see two buttons. One that will add a light switch and one that will remove a light switch. √
// - User story: When I click the button to add a light switch a can see another light switch with its accompanying lightbulb. All the switches operate independently of each other. √
// - User story: I can click a button to remove a light switch with its accompanying lightbulb. √

import React, { Component } from "react";
import LightSwitch from "./LightSwitch";
import "./AddRemove.css";

export default class AddRemove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLights: [],
    };
  }
  // created function for adding bulbs, using spread operater that will add the LightSwitch component into alLLights array every time it's called
  addBulbs = () => {
    this.setState({ allLights: [...this.state.allLights, <LightSwitch />] });
  };

  // created function for removing bulbs that pops a LightSwitch component from allLights array
  removeBulbs = () => {
    let arr = [...this.state.allLights];
    arr.pop();
    this.setState({ allLights: arr });
  };

  render() {
    return (
      <>
        {/* buttons added */}
        <div className="buttons">
          <button className="add-bulb" onClick={this.addBulbs}>
            ➕ 💡
          </button>
          <button className="remove-bulb" onClick={this.removeBulbs}>
            ➖ 💡
          </button>
        </div>
        {/* displays all the LightSwitch components in allLights array */}
        <div className="multi-bulbs">{this.state.allLights}</div>
      </>
    );
  }
}
