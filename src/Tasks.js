import React, { Component } from "react";

export default class Tasks extends Component {
  toggleTask = event => {
    var task = event.target.parentElement;
    task.classList.add("complete");
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
          {item}
          <button id="completed" onClick={this.toggleTask}>
            Completed
          </button>
          </li>
        ))}
      </ul>
    );
  }
}