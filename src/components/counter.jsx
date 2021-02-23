import { Button } from "bootstrap";
import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends Component {
  /* constructor() {
    super();
    //console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  state = {
    count: 0,
    tags: ["1", "2", "3"],
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
        <button
          onClick={this.handleIncrement}
          style={{ color: "white" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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

  /* handleIncrement() {
    console.log("Button Clicked" + this.state.count);
  } */

  handleIncrement = () => {
    console.log("Button Clicked", this.state.count);
  };
}

export default Counter;
