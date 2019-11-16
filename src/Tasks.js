import React, { Component } from "react";

export default class Tasks extends Component {
  toggleTask = event => {
    var task = event.target.parentElement;
    var buttonComplete = task.querySelector("#completed");
    var buttonUndo = task.querySelector("#undo");
    var buttonDelete = task.querySelector("#delete");

    if (task.classList.contains("complete")) {
      task.classList.remove("complete");
      buttonComplete.classList.remove("hidden");
      buttonUndo.classList.add("hidden");
      buttonDelete.classList.add("hidden");
    } else {
      task.classList.add("complete");
      buttonComplete.classList.add("hidden");
      buttonUndo.classList.remove("hidden");
      buttonDelete.classList.remove("hidden");
    }
  };
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index} data-taskid={index}>
            {item}
            <button id="completed" onClick={this.toggleTask}>
              Completed
            </button>
            <button id="undo" className="hidden" onClick={this.toggleTask}>
              Undo
            </button>
            <button
              id="delete"
              className="hidden"
              onClick={this.props.deleteTask}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
