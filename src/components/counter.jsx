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
    //count: 0,
    count: this.props.value,
    //tags: ["1", "2", "3"],
  };
  style = {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Ariel",
    color: "purple",
    margin: "15px",
  };
  render() {
    //console.log("props:", this.props);
    //console.log("children:", this.props);
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //  onClick={this.handleIncrement}
          onClick={() => {
            this.handleIncrement({ id: this.props.id });
          }}
          style={{ color: "white" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
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

  /* handleIncrement() {
    console.log("Button Clicked" + this.state.count);
  } */

  /*handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("Button Clicked", this.state.count);
  }; */

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
    console.log("Button Clicked", product);
  };
}

export default Counter;
