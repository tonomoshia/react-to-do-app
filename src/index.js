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
  render() {
    return (
      <div className="todoApp">
        <form className="App" onSubmit ={this.onSubmit}>
          <input
            placeholder="What do you want to do?"
            onChange={this.onChange}
            value={this.state.term}
          />
          <button>Add Task</button>
        </form>
        <Tasks items={this.state.items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
