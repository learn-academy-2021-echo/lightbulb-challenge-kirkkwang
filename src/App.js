import React, { Component } from "react";
import AddRemove from "./components/AddRemove";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="head">Go Crazy With Lightbulbs!</h1>
        {/* used the new LightSwitch component instead of original Square component */}
        <AddRemove />
      </>
    );
  }
}
