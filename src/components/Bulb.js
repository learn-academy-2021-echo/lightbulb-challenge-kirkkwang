import React, { Component } from "react";

export default class Bulb extends Component {
  render() {
    // put styles an svg in variables
    let divStyle0 = { height: "40px", opacity: "0" };
    let divStyle1 = {
      position: "relative",
      top: "130px",
      width: "10px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      boxShadow: `0 0 60px 30px ${this.props.randomColor}, 0 0 100px 60px ${this.props.randomColor}, 0 0 140px 90px ${this.props.randomColor}`,
      filter: "blur(5px) brightness(1.5)",
      animation: "flicker 0.3s linear",
      zIndex: "3",
    };
    let svgPath =
      "M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2M14 13.58V16H13V11.41L14.71 9.71C15.1 9.32 15.1 8.68 14.71 8.29C14.32 7.9 13.68 7.9 13.29 8.29L12 9.59L10.71 8.29C10.32 7.9 9.68 7.9 9.29 8.29C8.9 8.68 8.9 9.32 9.29 9.71L11 11.41V16H10V13.58C8.23 12.81 7 11.05 7 9C7 6.24 9.24 4 12 4S17 6.24 17 9C17 11.05 15.77 12.81 14 13.58M9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20Z";

    return (
      <span className="light-and-switch-span">
        {/* this is the glow div */}
        <button
          onClick={this.props.changeColor}
          style={this.props.index === 0 ? divStyle0 : divStyle1}
          tabIndex={"1"}
        ></button>
        {/* this is the tag for the SVG lightbulb files, attributes in the lightBulbFill and vector arrays, which is fill= and d= */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bulb-svg"
          viewBox="0 0 24 24"
        >
          <path
            fill={
              this.props.index === 0
                ? this.props.lightBulbFill[0]
                : this.props.randomColor
            }
            d={svgPath}
          />
        </svg>
      </span>
    );
  }
}
