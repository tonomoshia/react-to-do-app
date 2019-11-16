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
  onChange = event => {
    this.setState({ term: event.target.value }, function() {
      console.log(this.state.term);
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState(
      {
        items: [...this.state.items, this.state]
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
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
