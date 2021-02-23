import { Button } from "bootstrap";
import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["1", "2", "3"],
  };
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please create some tags"}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>No tags Available.</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
