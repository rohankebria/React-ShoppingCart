import { Button } from "bootstrap";
import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends Component {
  state = {
    count: 0,
  };
  style = {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Ariel",
    color: "purple",
    margin: "15px",
  };
  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button style={{ color: "white" }} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    //return count === 0 ? "Zero" : count;
    return count === 0 ? <h1>Zero</h1> : count;
  }
  getBadgeClasses() {
    let classes = "btn btn-sm ";
    classes += this.state.count === 0 ? "btn-warning" : "btn-primary";
    return classes;
  }
}

export default Counter;
