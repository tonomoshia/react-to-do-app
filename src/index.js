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
  render() {
    return (
      <div className="todoApp">
        <form className="App">
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
