import React, { Component } from "react";
import Square from "./components/Square";
import LightSwitch from "./components/LightSwitch";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="head">Flip the Light Switch On and Off</h1>
        {/* used the new LightSwitch component instead of original Square component */}
        <LightSwitch />
      </>
    );
  }
}
