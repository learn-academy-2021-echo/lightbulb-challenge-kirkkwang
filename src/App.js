import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 class="content">Flip the Light Switch On and Off</h1>
        <div class="content">
          <Square />
        </div>
      </>
    );
  }
}
export default App;
