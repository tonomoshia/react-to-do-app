import React, { Component } from "react";

export default class Tasks extends Component {
  toggleTask = event => {
    var task = event.target.parentElement;
    var buttonComplete = task.querySelector("#completed");
    var buttonUndo = task.querySelector("#undo");

    if (task.classList.contains("complete")) {
      task.classList.remove("complete");
      buttonComplete.classList.remove("hidden");
      buttonUndo.classList.add("hidden");
    } else {
      task.classList.add("complete");
      buttonComplete.classList.add("hidden");
      buttonUndo.classList.remove("hidden");
    }
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
          <button id="undo" className="hidden" onClick={this.toggleTask}>
            Undo
          </button>
          </li>
        ))}
      </ul>
    );
  }
}