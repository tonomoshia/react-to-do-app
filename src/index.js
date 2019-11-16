import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div className="todoApp">
        <form className="App">
          <input placeholder="What do you want to do?" />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
