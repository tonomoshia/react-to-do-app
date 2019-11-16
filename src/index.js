import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Tasks from "./Tasks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  onChange = event => {
    this.setState({ term: event.target.value }, function() {
      console.log(this.state.term);
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState(
      {
        term: "",
        items: [...this.state.items, this.state.term]
      },
      function() {
        console.log(this.state.items);
      }
    );
  };
  handler = event => {
    var task = event.target.parentElement;
    var taskIndex = task.getAttribute("data-taskid");
    var taskArray = this.state.items;
    taskArray.splice(taskIndex, 1);
    this.setState(
      {
        items: taskArray
      },
      function() {
        task.classList.remove("complete");
        task.querySelector("#undo").classList.add("hidden");
        task.querySelector("#delete").classList.add("hidden");
        task.querySelector("#completed").classList.remove("hidden");
      }
    );
  };
  render() {
    return (
      <div className="todoApp">
        <form className="App" onSubmit={this.onSubmit}>
          <input
            placeholder="What do you need to do?"
            onChange={this.onChange}
            value={this.state.term}
          />
          <button type="submit">Add task</button>
        </form>
        <Tasks items={this.state.items} deleteTask={this.handler} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
